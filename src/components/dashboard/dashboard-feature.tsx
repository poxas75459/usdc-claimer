/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "63xyyyLo1d1KWPF1HEnv1aDqf6fShmxNKAK6iyygUBBe4mbpkn2rdzNT4NDrUshjDJZDcgVcFHBdmC81oGuLbVcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9F8QuzWmKR9yqrAMY3DGUZ46PCmRbJnL7Nmyr4sdyMQrrmWFi6jfiXbo3z7QiLGC18ZTHfSm6q77YkcDLFWNWbM",
  "key1": "JTpXiroHRuEvF8gNoQ7RJ7nYyc3CtntqDztPc2bAwcmvb2MJrpArtWn5VoUqe11S8nV3hHV4U3AdvQ8xLoi1CMJ",
  "key2": "dRj7wVCmkq2WPygzMAmCMHWYyyYGp81ov9owPgZgpArNQafKjVata7vFxBwvFaFd2NwXKFKpJRBW6yyJN584yoC",
  "key3": "2UHNv3pYygnBDTNFJxBziUDWoepWr4DGG3rbfjN6mufwxY1z9FRV1Sk7YAv65rEJuX2VdBTrQgdhf6N3Z9vh5cLR",
  "key4": "3oLdU2kLVvHqDPgJbjhJRBwZZzF7Zx4ewTHNiG346YsuXN6nM2wM7KRrotLxaH8RDspsMxwYVFo4t7WyXME7qmjz",
  "key5": "3HGwrkfV5bw8nYFPvSG73CzzbJijCqC3Knid6gNuQskRe1GPSErWsPS2kSMoXWARsEMYnsL5ZzU37WSxYDku21kA",
  "key6": "VwcjMYT139BkFxvaAxCXiAwubGN4GKVEVGorRcuvXH3Tv2G65NPfgHfZAYho82rrCECUGbU5JxCDRxRhvqHbwUz",
  "key7": "2JfTMecpsWSounNonxZTrZagyBEJQKDwhYAEXovmcr6CApFxmNwHnPBbWne2SG4jvEucHjjhbFDdaRW4TJg6v4RD",
  "key8": "5MoumcUavfWH7C1ssFscUoPzdssB5Qt6wiQgPvR83ALnQJ2Esnyyhvg4SNQUaNLjCZxkH2nN5ZQkkYZ5yFVeqqR",
  "key9": "3QwvKg5VucJStNDEr8cZUJJXxEuGRqMT31b3krfyYKdW9z5Jchptw1gTtgtjDp67BqFKHJ9DcqThsK5WozXZ5XWv",
  "key10": "4XLEKHTdKLcmXS5M3SWS7FumnJh5d6VqMLg5jSM38hUyTZEqyFtTmyssWkNue7W9VmmBiaeBC3M7ycbyN4DS4vgL",
  "key11": "2Tmj2ap6LKT8JjSFKUAYcN9M4Gq2Po44LC2smZe9NAz9yv24FAYeRcgDQRJjRcwhYJ2qRsttiT3KuMnT2W2Z39xu",
  "key12": "Zjtepp89GBe2spiZtrutwaZcqwwziCgH3dofz1XxSJTmofuUTnoaGPzrhj5C4pdWwM85HTNuW4BEKSCp8LNJRbX",
  "key13": "2vs4vQEazJApZWuoCTF7PL3enphYPUNCWqoSVZPPpzDL9hCYwCS3EJxrUDtc7cqrVZXApnk4WvYSSxTJGyZ1Ydnj",
  "key14": "2NBSohf9di94VfpuSoRyq4MEZ56X3KZV1xaPQU4EEgkBBmegj2bzPkFbyfFSfVqHCWfyg9uCXt31ufTJJjHzPbzF",
  "key15": "3qNwwWewrZJAWa5XW5XksGMZYBPyNuG4TaBq3fvzg6LMzBnyFKjHfqFpivcae8NmUCYNtcGDQiz3Nqs6d1y2urqq",
  "key16": "4PraCffjg8HxhDzPokeuSnxYk7vMnutwEpBAXyUXmGqvsPvvNubi7KFJG6YLgkRMqjU53nNThGLTmHUXwtxBEqua",
  "key17": "3S9RVp85myyPPLe94PZDFrEUTGDhAx1YCyr3fLzYVHvDipeLq2quCvoU3ttbRXMnTWTWvYWUM8FWks9j9XbUgeF1",
  "key18": "3EwnMKsaoZnfZWC2nVY8Mnfw9P2rmHQ6a4ejpL2etL3vvFjePmCWRdkqZc5uqVKmvUC3FeHk3MKyAk15seX3RwDp",
  "key19": "3A29YHp9r66oKVNDvn41eSGvJdRWa4uMrvQR2AQyf4sW74djTM2Jq46RZke12uFPUT7eh3KY362QgatdbEP5fpri",
  "key20": "3Bxc3LdrcrAFhWFKZqzRaRTdGgvsKaydWqZSAjv87yZoJid1oVdnTfnXJ1ZFGj5D5hjMc1yh4trbBvmpTqZtU33j",
  "key21": "4UpA77K2V7ec4GcynPqUX4U5mw75KzRShxDsCqmmWBtDoMqVVPrQwWVH7h6yFCNk999oXUPphM1TLCgJEyYaKbEo",
  "key22": "2wvCsu24yjiadoFTDQQVFe4Rt8JRD2KrPiGcWU5TZ4Yxajn2NGvBXP1atNFabJ8RvmCsfWhh8SWaN7fPXpZoktQw",
  "key23": "oCAe8agfrgtBsrvNvJFA1U4UT565pi27H8UychfN5PeXvwAhmups1a8WXjPmYD4kvRetZBjJr4PmSZ3hYE76wXU",
  "key24": "2ckK1WSNiZrs8YUg53xmZMTTUphiM1z1Hram1Wa2BB94Y33HSe1NxXWJqv5RpEQRmXR4bgFzMsxYGph3ZbNJ7tcj",
  "key25": "5TgQKNU6LrvUugwNKBUVAzTmjXP1y165t9pv1yzwP43yGjbBXi8UytM2yoUpz74X9BvJ5AoUfU6Rjj4BC7qLG8SQ",
  "key26": "5BBJVi8hLeVwKFTcJjvV57xH8gSD4PoxGb4iXTyMABpoWjybWN5ABHa5bUwe76dpo7XG1PaqtCpLvFhJXafZ2JtD",
  "key27": "4tnyavW7iqzTWYKpzVYJjbaXdCvH2HmYL6BAosU1GBJvYu2QjtBcS9x8fxpfUNtwuyLt3qxb9Ww8TcfPLCq3rkK4",
  "key28": "4FpaQgyKSQzKz9E5rLhR3Kp2a7BnR1j8HTXGf7cFGmzFgAgFcjMhjhRAdm3j28GVrEKBnqVHJTVzVzY6CTHYn1rk",
  "key29": "99qZD1TLLvEbSsaK6GaEePv87HVD2YpRgY6AsggJKsRZ1KRW6TaeqScgRZ4oTmQR29CMv3MwApnaYFYgdBX6xzK",
  "key30": "4yhKVF3SR9sTBWD99y9a5zFEKBhZq2nghQpLNgaxD9nYPHbUrcS49Ds6rb5oPkTNHv5dvmgZFtERPZ2iPdsntXAo",
  "key31": "38vSvfSEkXQQhooioUNsphDH84ugb29qo86DBDPYrNvQtdszerbM1f4S757TKv5Pa9bwpyBon3Gzw6mYFLLmsnTj",
  "key32": "2fKFBcYHNx37omT1T9vM6RpKGFDTNZq1m3ydFMDqrnffHAGkhVMonY9RVmDUfxDaFB5g45CyVCZ8Re2mg3nitzGN",
  "key33": "2PuRyEWkymhT1mjpazm8d6v6gty7WJdcA3bkXnDJs7foBCZMdMjSyxSmw3r2QGsM8Tjw5K5Y9kfw9S57v9ELCXoZ",
  "key34": "kS4urJpHEo9ddEqbyJQLe34PcVsLkM5GKpCaiFC8zaxnvH36mN48tRGSDfzHRityLFaBAJwzKnQ1RoWw4VH8FJw",
  "key35": "3jRtJc4BqoKrpC6bKbt7Lj3FAv6m2it3rASw5uCzsYeChoNqAsBeoswY5NqT9J2KS7LwgDpfLAtDtzAi5WrrakXd",
  "key36": "3qSfAy5JQuY5xRSZPGHcVBHeKVACsMQyyaKLLGaKqvReRotmU2mt3J8nQgsLb6j5iGuhDRFxbnrQXuqaWyCAenoo",
  "key37": "42tFfwjbZUpWUDm9mfA27UspFG78hZxyKQE1S8YNY86ySPvLU6Vh36KT3xVZEem8aszQNsJEzfZvfYDynQARJadZ",
  "key38": "LAYag4u8kMhiHVNHFriYgoKBJzf5LkKEdXpeWnT1Ku3WSJ3RPqFj8kipptRtPZykaLvH9bq8B7nZ1HdwwAnXx44",
  "key39": "9187DBDSfBu3qC9WqmCLNKSp2rAT5gmYVJbVtrgqx6w19CdyEVDoCgYSBA6PifGXDbuRjAbs5A9xaBoG2yM9Kut",
  "key40": "4kMD5dbaq5QsmoNP4eAnxXkJTUBhd6yFjtUD98cG3SZDGc7PqMGwNbrZku9pPaacZsEj7iwomzC3CF4cBhiVvao8",
  "key41": "2GLaJpRQG3qWhUUUgg9gF38NZ7TDgohtm62mm2nopPxbTzfsfYVVmxUBdoGnRbboeoN94wmjfLRh7847mMWXxJia",
  "key42": "w16CHyBnPCxmagudjRQUsRrWgDmeRRPznm4TLCastzyahotvxLDKvHvPYnBPCUa679qC7Y6X27P5QH9dfm3jbK4",
  "key43": "3LoiBtmqkkTwg7h7Vi6mQwSrytsbAgeBaAE4YpVK9DdHh4E86UCytndaa2dF12DeoJbzkCZCKL2Ai5F7EoWgcKfd",
  "key44": "2PqvbfL2HKBdGFi5hcEjcwJhLqN3bduQGEAxsJT4A4Eo3h5xj5rVD3rd9zn6CZe3po3xaQ97tFcmWdHrFfkYvz42",
  "key45": "2caWi3L8PNsfCK5qaiRSFJCddhPaM6jAFJHVtoKTYUXosWv8Zx7FcRsmQNVYc4nj3nwHJV9SoLLXSrd157n2qbwC",
  "key46": "25ZZXSq7eUJH9xqACx616wVrZfEEFXiH49kuPxg1dRea9khVErwMxAdZNRNdkxfaLCd4HD6c2bUf26EqVnAoVH2Q",
  "key47": "2gUPs3mziLaV2n4T1XWjybhkgDTMJFqXFtpo4oGByRMscnkpCXDCAAqfu7WVAQJxcjDW8za6z2NQp8UWu2tzkdDZ",
  "key48": "62fzKLECSePjXBtG6yGLEwmXCpsspBL6RpCqfado8yy5niJX7am9R2w8UJ39xhMEBjczXoDRHKkNTXaVE8SH24Jm"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
