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
    "3UPxsW2hqisaLN84uKACs763Zfv9v2tE5maDCHJU2Wuh32cbwnyVx2jxw6M6SBn7uJWVtJsWaavLCEDW52dNz7g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tU62BYFx3cfshj7Dg6Kk1NvxcoPEgpprfaSQ5AUuEDy21abX9QMXPAgjVSJycUWsMYNVrTxNjQkrHMzVuKqYFW",
  "key1": "4XFsGZA5NijUs95VqUi6nKBqtsYASRkcjRm5cZJsUrWd59WBve7yzb837K6sqcjng5wsYrnFq8MztZfkEpSMJynA",
  "key2": "eMqf6UDRu7gKTsZeohPtvRjpo3VnVCPkNExWpMn3KHPp3Z1MfSztvmdpiyzraJPz79X2vps3eAsCSVyhPanNN8i",
  "key3": "4jdPGrrtee2bBCJFg81LQ566C6XFR8S7eeJuP34n1SqfEvJJFQHgqK2Gtkj7Fcfpr4rAHG8kFzxbChCADejDhDHb",
  "key4": "5KTHiUEj1465V1oqmkFmXVuMrG6oPa5hEPVkVDnis4g7S1LUWhjTjvVPYtmMGJCW1ft3dtHiZrEAjHTwVTzNESzh",
  "key5": "4g5pAXRXoyPjYXwkmKFWzhftzkRhyfnKJ4UXJKJaKw49Z1NvtY19oVULUsBVcEVqJp3dpZBCM7eMD65P7dyxjVTX",
  "key6": "2YcQ56W54zmLFA57GKP99qFZ7AprcaAXbWzPURQBAEPEvoxLGSwAUpBP91KTF97SdjzcdS8R8QKvEcp7PMiRwayM",
  "key7": "3P1TNKx8XT338fXQhGHeBVwuMwjDPMrGbXLYR5ywu1YCJDc2zPLi3QxdmAQRv5oNddUCSGqwrNyXzwKo8FbTGXrV",
  "key8": "5He8EoY6fPXCdQDdWdYuWSVg8mSy2qXmYpVkQKFghtrEAQtLWu9mGkwmsDDD1DTFHU3SuSVWaT3AKV3md9SGjmhb",
  "key9": "QMMUUeNCk2THeNKZENRCuVfe3A72MYhh6BoymNyHW9RxEq67Li7bfRbKcd8XbzrCfJ482JcujjfZfpTnEJVTQcm",
  "key10": "NuxvtRDT7hiMhDRXWyLPucm8ZhEWytGXXHyGTrkKKdGLZqRdQFSiSkARadtX2iAhFM569EHXaLt9tXPENZWjEPR",
  "key11": "5679jUXa24rTVMSgj4SEhMqDWk8UXj36xfFkJ2re8HRHQAsmiPyrsp3zHP84tVFdDbfhbgQ7hQYjDYsrStz8Zazd",
  "key12": "4DM9B8ZPWnG31jwBmetuzuLZ3MZdRAmyWgbga9QeL82LRy717NdzPDy6fB2GDumKxUomn4f97vWJwuTwEqoMky87",
  "key13": "4UBTurFrgu4E8G9vvbL5LwMzHPx4ML69U1Vfx8FojNdeGtV7jJJvZ2JGTuUNjjPAXqw6PqB8DmRnRH2YtBXjD2W5",
  "key14": "5v1FRhSAJFaZCz2D7iPmTudhZznCwiaUK7SfC6u5or4tL9FixS7cVkvhQgkyKmtzRjRHs6KTpN1NK2RVLdtoNyqf",
  "key15": "23SaueVHyupBjGvUgwWgknCcCV49hHYkNBPxxRv5myk9gVhQV7qqYCuikCNsgkvoKyDeoW65mfjnmKuijYMZDUQe",
  "key16": "21FLEXPipafPpiNFx1hGNRLTh5qc2PB4cXoSfs8zVG2uJxmPp3BuL9KXAxb7S633ng8zBfPVN62TofBFnd7Wtn5Z",
  "key17": "2rpExfu34usf4TeitihWLWSpkbKSNHr1sWUZ8zdEr47gsfK1ERJXbTrGvCfcReFWXpHzSntdZ4eLZFt9NMZtUJai",
  "key18": "4g2eumgSHTpUCfHtj7gfDoB5YBDX499Rzs8taTaMBRkKS4GCAEcYjoDFqqKsEfCTMLQozS3EhaEny4RkCbZVzV7s",
  "key19": "3h1ekvctSXH2jdBrx96gEGLGAuEsi4LbetoHrDBP65KBxrdapdLWkpTQZghMQovBwtpxAfwHkz9jctoATRktQdN2",
  "key20": "2Lc7futCGJxVwWjgWN1HUfvmnwg9T6FWh9YHnFGpNHki9SVBxi4dNDKcHEKb6DCyHKrUCqM945Ss8umeuxWkFmXK",
  "key21": "ocx11UNFSXRkMg2f7Y7fstktNhXnxnh69TnjrP6Q88MPh7uQD1KTHeHvmeA9KSNML57dLhCbdwx8M8zVMYyQY2N",
  "key22": "2CaGbHEEAggckgpvsWywJsXgJggMx5poj7BsLb9cYAKim19KeaYcwc1mn45QvsHmdiKpJem2vSuBPWa36k9DAX6g",
  "key23": "4PTJuoTgAFa5MGqok8R5MYkqiGJy6tEfA6EV69BCsTEmpDbaxzqLZ68ycyjG231gVPZih5gJAjRzyaWYHEKTw8jt",
  "key24": "28MuA9g48CvuFwrZEpoYhijGgiJKSVEgzeukFoPU2bz6uvdVevWXQumu2B1TUwB6pgJ1TcuFqzkiXcSrYxuWSP3s",
  "key25": "55XxcZ4R6ngymKnHBrUzRPjqgGVkFU1qurHuKzhRb2fYNLY45Xh3SGHTxx93jerRG6HNhNCV7hqhQVrtaWa48dCo",
  "key26": "2DuMMU8UckZ4oWAQdaqzv8R6NBBUw9XYFuyNQ76QLKRGGhJ5PvYkUo7XtT1SG1vshaq2QXYSyMs7McuFkWKXTs7m",
  "key27": "2MG59BHy9yqEYhGCxTdVKrsNJ3JeNBtTGXRrPbLEnFKmj8iuHgA63xPLpyiZajLAacHknDprBjajFW5oA9jK1DJg",
  "key28": "4XAeyycR7ekVfrD1Pow1eZHMZvWQXDgPfrCugxX31dgwxRukJ4XAH9VabXNbNP1eh7Wqog3aWE7yFaFfDKNK6Jui",
  "key29": "3wUq7yoVgoSRhDcRrPLAn6Duh5BhxvmF9LADHDsH5tGa5uGYaGS6GGwkA5ysmWaEtHmtrnTAKQAV34kYtvskkscB",
  "key30": "54GTY5UQrpJP3qT5GGjM8WRt435XoeuHiD2Ftyn7Lvit15jXPCkBtbYdNU9Y28JB3SqxVN9UN3yRWkCDNYvmkTdq",
  "key31": "2t9QHLna3cPg35EuBwXNdNHcWjpW6quzgsip9wJxG1hRuMKLY4MpshG86YUy7hwGeYWuabto8HzjoeUHxnUgZkdM",
  "key32": "3PXEEiqCt5VScLp5Eah6uFbq5in7qsPKmhwDpK7xJXX6RfDrAyARYfnHmZcnSexbRg6qka6dgGPp1txCqcMeVPwX",
  "key33": "63oUafz6VkLee22oHhdddeCyVhPkqWH3xwyXSZeUqbKpEpWykewvLeRv2WtPHMpTZnz2tgYFjitM1vJJYjFixsc5",
  "key34": "2iFxhwwhPEXxTWGu4iWnDt16bLA3egfD3QXGb49n4ULfKT2twb62pQumyTChxgBheb8Lymr8XUvmaPQfxdefsCd4",
  "key35": "4LoNkSZ7WsJJLreynu9oH4E6PQuQMTbGJvzMvR8svcSH2Qug1dGQtnZUq4WSKhJdcYviLHLuhfC41GHjnAJSJ39c",
  "key36": "4TAhV1EUFooYET9oDGzz7yf6uwMqa23v2grHdkGfE71f2614CrDPFa55gZDdA8EEcPd8PuQ77Vz6HDyTEL9T3ruY",
  "key37": "3axuYuTpnLKoUpLcutRpLZVxgPvTsFg6XDfTudg7PxXxcmCPYMdp8r1Ky26BHdoqudobJXtGR1DrpGFQR2hSGbeo",
  "key38": "4gLQS3JSrtbDgLBsjfDx135Z5dyrhpzmUgNSm7V1wfFY8cXuzgqU2eqn64SvQb1bFrFYLTDAeM798bGaU7K2snpi",
  "key39": "4DbSguK59G9dznFVyGGoyf9seX8jWoLMYk7K5c4iDTFLjbztcPw9CirYHhGAoBqFno3YH4xgwGDnK64fJsfhUiCx",
  "key40": "9646sLkD9ua4kUvRFDF2LmHKfcyzvnq6G9q9m4r9R1Sf9v77bcFohzp4gpNBwRa3WxGQyLKoQ9DReAtVjMuU1Eo",
  "key41": "4RZtaQy3vyyhtY99cQ28E6a6sxoWKiSZCVq4ganaPf1YiZvihHoSHRiakrBk7TE2dGow1aQJ7DUrpL4mMkxD8ehG",
  "key42": "5AYXn7feXBAj3RSMBVN7GUzE3GSEtdV3eEKcmQmGVxFzS923iiFbeHya3FxqrJXR3Wr5tf6hvDwYFTZj16Xp9VKS",
  "key43": "nqSF5BUbLPBp915Y98PwywS1ZFTEWeE4zsZZQaCkEfofRTgmU8R2dofCvoCCdUjFN58TLMgDPpRCUqxNQagUSCV",
  "key44": "3SyEMkJuPYMUJj62yZ4WpdG3JdqKf93avdCEKS3WhJyRDMBMU3LZjjBuu4MxouxHt2oktkRT4YFBLvYzJnojAPvZ",
  "key45": "3Vgv9ZW2rLQmjYqVnxMstexMbLSGyTJxpjW7zfVJf9DtYaf9bFaStaD7H8C1MRCXh3xb4MA1jPMinfFu6Rgt2Q6L",
  "key46": "QrGHCDgfVuACqtJkotL2YkQuSTobHrxrQMcR4c1132SwaZxH5Vor3aj25upFZSx22Fkr3RvVgq95s8M9QcvdHA4",
  "key47": "9hTtjK2oB1bxeULCDbtGcQFL7WYX7qtUtazVxYdBKGxRiB8R7FhAvjAmsHHjTvzxneRGqqYzxaDP2x4isT27Zv9"
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
