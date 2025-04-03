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
    "NA6XHH7r5vJ9eRfuJrzVGKPEgnjB1SU8m4V6zwBAxJBuGp1UtBovqX7z2GeLvqnGnqjfcTus35AMSK4b5UuFcvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23SC6LPSrywJioDFVEHYhjtMeXtW6fqYgXugxpAmk44sXiLAYWEZHthLdzd3TSXSKFdiXinXCP4eQKiB8xHC5ZBn",
  "key1": "26uFQBpYSisbFhXsDHGcaaKFgr7VnH63dc7NRUA3LN7nT1xfN9vpSGQyV2Wz1HMBUJoite1NaxTNXCX7DGH4Bso3",
  "key2": "5x9YwHHa5zPU2CtFBgXfocQRraxQzKynwp2Bef8D9EQnszxCmQAoumpNESjWcJRCQNu3V4PsAF8K3JZZqxhXrUGw",
  "key3": "2XTMamrFiCJ6hhCQfAYmASWW7PkfSvNf1REjAAmZyVWXQpSFjmSNSGCa6URdCtZe8ccQQLgdZxRAeHEMh1CwmnDa",
  "key4": "2NPZWt8pCH4hv5CFhMi7VdYFzoVJ7hGPzHvBJeZho26WJj8yUZyjmrigMRrZZoWokmPF4k4jYJbpcfurzxbmtpYT",
  "key5": "36GbExV4CgkBLcG1FVgTVzt6V6W89eqLBYgcRengTRSpeaStvC7yHZHAQPzwwzzQLYVg5nEiBFT8gSYMdFUhFGZB",
  "key6": "fENhZEj3Dv4uRFneJuFU5AkSSoU4vvmxj7QxFoaeh1ih4fubVAs3XwJPcAum23H8qsgjiLu3daX31mzQetzptZh",
  "key7": "4GDHt671MV2gHoQg6DjXVZ5h3Gqgn6RdCdZMDokpL1Cc15KrkFbnonyEu122R3JnWx6hPEfJzFw14tTNabHcg2sw",
  "key8": "gm4pGmLeWkVcdFQvpaACorW8sNpdkzqeQbv2avGawX7Sc6npa6zqyqytHJpUmUAMaAoLLCHEP7g1CATtTuYv3ZQ",
  "key9": "3atxRfu3JMxbiaCfpz1EWUvtVuNhjFprAmkSAMiK9KmBfwxMqiTTSKdyh3BV2DchDWk7esWb6D15mdMujPBoJKw9",
  "key10": "b4TPro4pYaq1sqcHtB3rzDM38boWK2J8Vqg2HfnTxj6RuVoJkjGZQrZ6Hu3kKhW1McbMbNStDFUmbDh2k8eyjeL",
  "key11": "5n8GcRnLRxnSzbgKeiaMGDVbmoBTUQNVEPzVgpfKj4PQFu4PQxV9MYfCRpVyvk3qwhyKL8SbBbYVukFWXpYu2mM",
  "key12": "sfgyS2rwbQtmgm4dPGSUKE2fLqLPNzn2DHXvypk9uKa8zZd6bWRdEPU4pstLZmW8D3coS87QhNmD45FSs8AvD9w",
  "key13": "sYj4pASnwR3UJkRiVzFXL8hEQWSAE9xtWPGntwxBitQhZKtuLUGTbeUTTUPhwUFosZLCKazzc5JMi2kV9CyiFDy",
  "key14": "2cN74pMJXYyEZvuHNAbdoV7S6ruyN2XaaEtDfGSRYRemZJqi14W6yyDtBnAVCrkH9oAD3fSTEo6uDBMxeVrWyrQj",
  "key15": "LubHDGjGwMA735t58QRvjZKzFMMD2WFzMCSWPwYNaf9qscBP2MvDFebGA7TzvAjZhfFHNYxVHynVzjaEV1PFc6r",
  "key16": "5JzPno9T39jN3crf3uB3nkxW4f9HANThRVsy1Uya4uxSEwzF4Kuv31zb3hXHetEd5Qb6nACVHvScnrpVhRZzK5MD",
  "key17": "2hFxiMPkSVEb6M7PCRDZc5ujDHY3GHPEkjXDmmKa2myoSZKr6ofc7oqAhBmbtotHWVZpU5zDuxuEccgLdLfuqEmh",
  "key18": "62Tx5FkABM9UZQ5kyN27v7BJEgr6LL2VyHqzdp3AudTG41Hjdpn3PiKa4LJf3Fnsf8Qh72uTGrR5gnRomSiwhxS3",
  "key19": "5naDX5QC89iBEBPw8mXjBAcbRvPYFbN2Vcn7Qrwdr847ZCkRRdWrSQ1ysV87S1os6SZh55fYnJ4bUQxmhsgNCBXV",
  "key20": "4Lnj6T2oVbrUrGiX7nKeAAT3sEbprMaRX3Z9Nszsbb4RtpsH7Sxr1toYuqMySP8nqPfKXis8Agxp1reSYAVoMNvf",
  "key21": "4P6oyL9ou9dTNDCLHkmfqgKeMF7TUZJXP1wQUKcQpHhNbeA9LdKrhGVBMm6KZw8fmWtu3e5GTM92t6TMmKRDUPRj",
  "key22": "4xHKzyvQuq5zfsQHP9pmFKGDkLVEGuxGjVSZ9V2LzdC2A9t6GSUW1iJX7zkCgxfyWTnroeo6PgPaLVaX7Nzcgf29",
  "key23": "2NhfukwR6Dt44qFUerD2qq52dSWdK18FknB2KBuqzdc6zZQFvkCRzS9jBiRKnDS3T59z7ybZjx79wcVakfqWfabU",
  "key24": "4qBQTtbU7qkea9qDBSgzYVpYnJm1reDsh4ykJ5CcFBHBQBADEUkQDcJiVtzHUNfzUc2iLb7WXnv8876REuZ8un1A",
  "key25": "X9hZr7xHwNRQvz82w8k1Hg4ETKPG9iEq1zDgA8oyY7yEZyFo1G33dMJrmbz5yDUG4mkT2aH2Tu5q51eAUSNm1jP",
  "key26": "4kTeVHuxNvLV2wrZBJK14pLuricAX5FCrD7D2wFCRCTFUyDMNpLrThbM5CNXb3SmSb85CvBr8HAr4suF5QQhDqA1",
  "key27": "sGTctVNEoDDcvDvnsYT5NiM6PsQXveMVEodh8zUrZAe2yufcDsMxN9yJy4PvC61PF5iCygMoVwwfyp8Q1UFKebn",
  "key28": "5HCx1fimaMygFfAee2YctvrbcMS4xbXksBTGtCWASPfgTVEq8tjzoAfhEeT8VXP3cgZpUtfsck89EnGmGhJguwCE",
  "key29": "4qD8ZwAKWiCvVf2hj8F6faFJX1jxa5mjzbCBfEgQCogKMWyLS827GXofitggAH4W8rqVZGuvfU4tNngR4Rad3axX",
  "key30": "5rBCWZEjg9ar3UNSNfHYaja9BzdhRb6gTQX3J28PteJqy2xhNRjwfamNXLkHDX8jA2YnCqqWQuWhRmBsvkDaC4tF",
  "key31": "4Gn2S7gV93ucuNBtKBU6Cjo4a1gLJaygKE4aZSEQFdYuWLFaB2Bq3kVQyALt29M1NgncjkRSrDkdYE4mo7QnSwsS",
  "key32": "39Avn7ZDQTe5k4JMSm4T1TmLLA3Sxi6ULFVzcutoes3ttKLUorUkPH8tMxvxdDPiTNhCyRgGm6RdHsdbn7AaofF7",
  "key33": "4q5FZ7M32no6LPBfkyxNdzuPLTEcVvVCUdJ6FxnaeDSJifeWVGVMu1MEtMZgvCduZMvgyFuznFJGXc5DRoy8gfxL",
  "key34": "3LfJyyfwegYUAYB5Q7W2aE7EUMt5qk2VgCxtB5hAyg7vg1URSEHkf2WghzrgDx4zrCYFLgoYDtbSLDm56LrC2Xtc",
  "key35": "4FQ5gfrD4jBjkVQ5Dg8WvUTiB3D9Nb2Ls1fTFKDP3eBvViUVy6M8zeakcKaPcn17uhKLEiupP3smr48Gwe9UE3D",
  "key36": "3DRJmg8J7S71FEdgZVDcPG9hccYdpuZZsW3EePHDSkAvp7ydQLQbsbWThgRDR9bNgpWENG436i3EZAq4sZc5Y6iy",
  "key37": "ExZ4CLRt7ErnSRti4hr4srDEGd73sAQ1gdFgAwnH4cGDnSdS6H4fhQECSiG27Wo6sTp9E9QatjhFFYTsbZMT7sY",
  "key38": "3NU7zh5VPTacewQL4jwfBVSYTyPPpeSV1G4UBoJnDq5aK5ensghigHJGkGdthNqAaYMMFMoFxpyacNNqvF7uzCK5",
  "key39": "FazKCAQw7sDcTuoGAU16ihRzSY8k1HtA1tqdmLcTzbAXvpAcsEakoRvoahG9JYTMCnfDsojdVF2Wyjg1hU4NbCr",
  "key40": "1EmHjWMBjLHEdPmexaaMqwoCrE8gTjBjFXpLUzytfpzfipMozwZdTQ8Yz2x63wQSJu96N2c3X1US8eJtBQxd33Y",
  "key41": "3ddVpQgb1TAZbXPJNNJzfj9aJt3toGN87Qf7Ee9gKL4zpkaHgzCiwXGnDH84f9M5Mjyym3cXJuw2s3hyTEg7X2XX",
  "key42": "5DPo6xkdp2ZW3LiLuoiku8HrwJnQiZMatnMX2GRCK8JUfsSDJskff2Ev4mx8a1KqM1seJZMqPrrJgXWmSckTsM4L"
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
