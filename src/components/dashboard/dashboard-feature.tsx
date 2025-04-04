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
    "2XCdQ6jvzAUqiCP5bvyi2m4rh7ZrPpUAKwfq8tAkPLSM4QjmvEWSJFUohUj5CYntLMHTCfQ6FMypvsC9gY46PxyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVQAGbafunUGmjtBdmhH1fWrskHhoaaTqRHcxb8tL5qVp36brmoiNvq7tJ3d15WQVHLMhiegDJhgL6JLA2vNbgG",
  "key1": "SfWV6eac6G4Ug6hiidFEGyZzEBg4fzd3y8fDEy6YWjs2rRXNXzR4N7RPDQPRxH571oFZEjxGMszhmQkxyt3rYeC",
  "key2": "5k4uKne4StPJo55tTGSJhP3WgsPCnTiEEAXptnAdN6SCHunCtf1JN4y1a5t19iWi6xp5mdUt1xPfMuHPWwcDPjcT",
  "key3": "38Ve8srkqPkuRYEP1RDJFDEVVLNQRmHSwLdprnDBLLX5MgZeSVRcY5DxGtgbTx8b9pSsYmEEFCCS9k5jV6aktHJn",
  "key4": "5fCZHL6Ypm6wSwPkXBPgxTEJPfnGrz3TpztkiNnxwEtLAupAet7vngPnWEzCjxaz2N9ddodnvmbySLBaqauB5XfE",
  "key5": "44ysSXDh4nXPx7hRo3DmUxcoSJ5Auc7f276KRxtC5U7gdtoikABtDhBBYK3GvyLihrdETgX6qDMWvQisCggxDBE7",
  "key6": "qu3AThXgQrYqxCnm9R7vU8pJHsoGX79inZKZWYV5uGkUAJdPGHdDB5ABhFRSMPjeHon4A9RSoQCi1TJTebVwKUS",
  "key7": "4AAURagfH9ACCodMpo87K1Z4Mn5eKeAmuFYtT3oiEnGiZUZtDqTVfCWoHNGK18keyvLd8VE7n1jQhV1egjuAhT6W",
  "key8": "38pTSJkThNGMqdve7YwqzUX4Xbdo5pwpQ6pPvDm5KEca4yv1byz1gNobJtPKsXt4DMnZWyY8QSy5t4E7WwCHc6c1",
  "key9": "5uuUZhLHc9HFrgHjTTCzp9MzQ2V9jM5bsLm6oPdT44juorzhgpWUF1UTW12NGmQ5KuUXMZ1TpQ2bYSscCHqvDut5",
  "key10": "5cGVudG9erbEfBQ7RK2EUHSzghtVMQfXz5iLPXeYeXEGf8ypCuwmEGUwiGJzu62ysd2tLzAoX34vX1zXyEc49DsV",
  "key11": "3TNGdi5eusCQkgqb5u4rihy9fMpN4q1ijhU8DTbcp7p2wiWC19bPVDDXyj1yPyBkHcswRM61FRmEbDjYiyT87wAM",
  "key12": "2pnQU9PPQ2vAvCyPjEV6uKWGRtHJXFLMzr226MVdMjtQYV8MHPvZkCvWUJyzuhBHKsi1y6JHsMBnvJDLwPWTZrhE",
  "key13": "kGyQkbCWtPHoKxE1gkQrmQQPdcY4WjoyyMnc8wiGEHL5SCgVVE4vvX61iaPaUjpHLSh3oCMdBCPGC9dzyyC35bV",
  "key14": "4XPjhUGcnoVWMvG47358RePPF7g6JcS5as7SqhTrqAcrA5yYUYzpQdQH37Za5VAtg5b9bwP3RUTLeRn7DybvAn6Y",
  "key15": "3avJjYVViZFMh3QPGn9ZR2jLZzS3GwFDuuFTURwNaDfmqxuKfMRnUhVp1Z1cSbKdZWrzLMWghkceVZC6ZTLqWx51",
  "key16": "4MRjttvA5FM8qkvmWVPdGEqA93CC3Yoqg96k2RQwqHtyNd5mjiJg61jgYgvFboWZ2Ndxn1Kd8UndcF3rWf2oiWKK",
  "key17": "5Un94SmGsohmiJFjaYHWmjdQuzEHgVFVgiwjoprxBKazQ1Y9o415C2LBunuo88a9zre8jXSVi28NBbAqQEkV4z1z",
  "key18": "38rER4xALAag3JR316e6LurTcycjxxYjAhXLNQqLk9S26LEqBZvWterDMbYqCXNWjURXBpKHterq7Pgr8bczSpFL",
  "key19": "zrJUKv2Xqb7v8BXx2J4iPkZt6ETvsCQVJAGpzLBVoUQiP1reDuzy97ZyNRCGHvRSFngpuzZeZVCG9DeCi8FqtKh",
  "key20": "4FqDaneCMHj6dyWYGso2uLFX1jqxGpYR7AobLSm8352rgjv9iqFV2f2hQ5gsfi6LkgRHtPZnDxFGeqgS9ocWfCep",
  "key21": "2KAb6dXmjX72a6AouxQbFSBpSySFv11tXv4RN9P6gvNi8sz2aWPhx6HYam6zPnusGPg94C5pah2rQDoZwCBrM8sX",
  "key22": "zUWovsgD7faTKTeivZ6DT9xavxLu6bqathACdhfQFztHnzohiKdSDGopL1BhBKT4espZzxy5FmsZuzPQZzhb7yY",
  "key23": "3EzH6dCJNTb24AG2o5PMrWS5FMC82rpJQL44TqJNCR1cTHrTyZKGia5BjSwGRcjWUvPCNg9eZ2UTwRpsxdL8xsBN",
  "key24": "3x2BCtQUbhU23stwZCs1xekxy4cDbVG1C2f92jcsyGU15UDXEBNNM96cM9vgES2cJuXYsXKUoZTq8GrtdzRYyhRm",
  "key25": "tcgt3euCpHe6gc9EGscyzqo7wvXT7A8qnxGGPijJGZsDc52RuXYQJJxBNF5yQ6hUxEafsTCu5J85ofkVZwNtFjo",
  "key26": "3oyahYbVySEnyyE1CzrbhRs3Na8CH35EQ3RkmSJ7vu35yyFqVuZ7omTk6yk7fFgY7P3ea5EcdVivBgcuafh5eReS",
  "key27": "5fuFxWNoGvtokKdpmM21X1FjzPULfCRvLfh4aMicTJksWjMDa9iqjEq9BBwwrCfqV2LdneLbYN2MihgF7DYbZcQQ",
  "key28": "2bdXyTj8s623zJPk3iydc6M98Hbb3JpHpeCFFABRKsiANoFNd5rWYSXwxgmMnMbPzApese2K8zg62kxothSpbDbk",
  "key29": "4faBFSA8faMt1w6QksqyJFc4VM68QB94NgThHYPh1rCb6wkaEHGcLHLsCnmzSUwMR9pXDx3WXeQXf6eKsmhCfUFu",
  "key30": "5K2EcmFTRJwrGeRGQy51LZkuQdvNPD51u3frAKr4rYmD3Gy3zKMo4WZUUwETGExGpWGvdi4jkJrwjUaNKZNEJhfv",
  "key31": "3sSU3HfKYzcxpXxYchoLG6RGY1s3uMBWEKTndQ2VKgD653fv2WPPx7wfAesNUg353fTT7XZTZQpWCurpv3XMeVZy",
  "key32": "2GHXydaMdy91jGLm115NyEidTEWGymv9E7DJcBePHNfT6VsjVxKPDPxQC6jT81RNKiDQfaBw6JPVb7drTKjx15ZN",
  "key33": "58JmEHXAPr2ikiKqLxqGSGpNmU2LnN8nhShDasodEvorUpuLHMueu82PoS9An8oyMoSY2N9W3GAAAcaW6ppySaaU",
  "key34": "3pVjBDpnyFgtB6xsHfMZwwHtyAMgPMgtotG7iM8of71yqZRW2Ysex1s6zTDVKkzCm9YxhW7YFqjJGGTc8DVYUvGR",
  "key35": "46VSi82VdK93qgTQ7iq6CCyeYA6AjJkiBJPBvPBmXoQSpTiaBCHWDcAPf6mTQ2KxnZjEg68q5nU7d6NCuZvJkKuK",
  "key36": "5KZ87ynNzT4Ykg5MAeGcsQuccuJv9fhDALCTwQeYqK2hLEhtmvKfNxnXUT34GWsz3YkV9qnnKuhe6kKAxNY1qtsy",
  "key37": "2cwjGRTVePmPWvu6NMoRzQj1imXjsvZ9pECu1JFQ8ca5a486ypQqEt7S1JxekRsXrYuiAK3w2dWrij6FBVLPifCc",
  "key38": "5V15SjcCeUiZhjVNCY6MuhUut9GJTebDL9XGoZQHk5acSNYnw8ndtqNXK97xATiAWn1aNaBxeqFoVmGSYmvnYRfN",
  "key39": "2iPaxLtpZXo198AGSRBAHQS742mW1s7NwvyNrzmBd5Z6eo8pvNErGqGzPfpMsEg5CGwLiNx27kjirq1VvxBAdurH",
  "key40": "4nK9Tv9Fg4Yf78CRjDQwnzaUNFEJAMYXVrdww5syuEgMMyxBBADqFsNA5LJVEHpcKwMt5d9vEDiUQWA1s5LYp2Wb",
  "key41": "1Rwbtqnm8zj7Dta8zm4Q6szMRBV36iB7ZbxLDaTX8wiHvRMqhM5ycdHAVd5HB5tpTyCBoTmdukUoWucKEEvQgPU",
  "key42": "zTeGhFKTYqEL3yqjwjtk1UFoQYMvSXvf5us9qWDMPeFDoMwnnFUc1Tv3SfwT3pAJ91ia9tEicSjv7cP3Mh3MRpM",
  "key43": "3Wp3wt6fZHwzmvLEYsKjFfa1kTwcTFHsdrw429o3Qr8pDuqoiEPNVGQTfjQz7gp3mqsGJUPkSk95qcg7DTWsLWCF",
  "key44": "2ceM2TinViqxcWxU7HZZCosHQG8PjkNy5yZxk4sKSiRvx45axgRrntHs4hjkfzZWqD4zHW1fSKwfHTAwYQC6HLm2"
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
