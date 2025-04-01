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
    "42C1dG9fax5UKyMSV2RH94pZTGXP2t7Dzbb3KamDZr9ef6nsdUNZ3UmjGKcezDiZn8vsguHpL7qdig6EHonGTwrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2im1RGtb6sNwAxss4AkVksdmrRzspcFbTVtLUL9vyok8ETPpYM6ir2TQ3Z2i9RVWrCSWCYm5E6fzHmaY5tRHbWQj",
  "key1": "2aQpYE6UAniqmNiPKdNfbVoxYgQuPQ2gDaswpaKXDjGQU1obCotNeaFxD7CyXM7PLoMSYpu28GkXGRXBzqpL4tMR",
  "key2": "5YzNEpvaZwVfPMWThRhVzgJveq3X97LTaHLfiQ2HPHjRCMP6nTuseAXb2qLtWEYpU8PZbhAQL9GJW9Nm4VbZeKCx",
  "key3": "4jVr5ZFSkCX8c9msLGiNSnFNK1EYaAVz1NfXssWSkg8fmu38ez8XZZYtGM276YWdngf8F98eLWHjaz4XMjgJKMGb",
  "key4": "2xahzUXTnNF4oH2EdBaHMLPAZe5jovKk1W1TtdX6wtAqreUsEB4bdyfedYNs6Pd7e4qtoUEmvcb4RyJqWHHxaUrh",
  "key5": "wZkdbXompfsXub7rm2VpRFRWRvBkuh7veJU9TLuXVdovDkm6FMa9QfJ5B1dk9yvqcDeHXs9eSLSogLMyCCJUqgw",
  "key6": "4c3DsjpqEGSLJ57Q4Xc182qDXmWHiZj7Quhbq1tojuLPAnmYSMFXbXFVXTB4VzwK15rePwg4dzMRoUVMMuNMxWeJ",
  "key7": "2ZxERWwK7mTRuWqvVnudGsGNVWWTDWaKcJ8QWEiWqecCDLRRAEWs4MrfG8KVznJcWd4SnJ4QAD6RXSH63aXcHV8o",
  "key8": "61TtZ2setY7p7g7PqWxXpTT6VALmHSWqZcJ3BHHJzYWKBMivv5Wn9ZBH15F88YBKpsbk6K2g7NEwFaAt6fvFtT1d",
  "key9": "3hvZbRPGGC8t9PHS7NV7BQzJq9c9fTLUS1JoP7QsJFF1C5WEJmFEyMXNdvK2kHBh8HbrHoySRjAjxzb6FRPgW3ht",
  "key10": "4a8qHdnbFdTqpzGNEJzntNbPqTj5NCqMFVPki1stKs5pSiLdrY6d44cFu4fRi5vUZLkss8oP9fKsEtnwPbHJJzrE",
  "key11": "5NtuSsz17CNMePrXZgJT8g8AK1LgVjFaMxozJPN4qRuYjexNfhePbQqdiqW7ncd1XFA1NVRdga1yyrVfyhv6VBEu",
  "key12": "4u6ppx7FCWqiXSHxmCXCHUuF6N2fStDPmJ3mRDXXCH7qKDnfuEqzELCgpoFrZGBhfRkLkAFxTDVToKQRcAepZRRv",
  "key13": "4gnkg1e3Hbwch2bQYu3eRMpiircZ7yCXP38VyfFMUsymVoYk5eMzfbu3scegowqa7ch5q3UBwLY9W8jNp7upv4xc",
  "key14": "8cRpTDn4jNwdBSFixGCQf1y5HykB7pGNA1mRUy2zncmt5AC5wMUGysyjves1rYcocNgMuqa86h3URpaoDqbE6iZ",
  "key15": "5aSqK2p2dNAuCKd7jJih5Ks3vkmtHtgbUtyvjSG7KUdez786WZNLPATiYiKugyfo15Vd6zfhWR4yPsgj3DAhXyLm",
  "key16": "4uqThuCL9uiWxyV3HKUdUXn28agbVZqxEXJPkv5KQkwZFf7uYkWFXKHGFMfUQsChwjPT6sGqA41hQtzsweVXnr7r",
  "key17": "3gu7dm4Mhv4evypHAvDWtCxBaRVPW21wHhHaxjFVVRDf9K7zjoMQ1x73tks6qeEwWg63UFFPnmvkGmJrDY7y7iju",
  "key18": "3NYeLcZ5QLsGAAHPD63wNCS99TKXec1TgQ748xW8WkUAELDatXu38Qbc35KC3SQqsShqZnZuPiW3GJ4e6VBZdVRV",
  "key19": "5mDPrp1H9hX45oFqW46YZdEd2DWjtza3irACaFHwZp1zJEdLAkTX41HCd3JnSaAoHo6xJ1jFhNXFv321o65yXLVs",
  "key20": "49ZDyHYkhH6dERqfpy5UzY99osEuEzHd8bsMDzKwvvSYq5nrqKLajA93NKagpd8RZ4tDowrEgJT86dpf9RPm9GQN",
  "key21": "39LsKdjwGStsGAR8HaQudVx8LFzS5rhemFg4ZKQf4hYEp7UEGcmNzW24MnWgtt73H3aUodPxWekhWF8GJ3KyzsGv",
  "key22": "CQt2Cn3ex9x4Y48kn6DdjeMY2kLXA7sba15jZ81AeufKf8hqeS3M4zV4xxn7M7aiEK2zDFJ3CdBx7eNETe7DXBn",
  "key23": "21zoNu8KXbwp1jMbgcWJeBrgaH6H6UmpWmbHRmaENeZviyKWekkzBFwEBxCCd7yKWxY6ynHmvQ1kZ4xz8iPLkf8g",
  "key24": "2XYqi8UEbAuB5VXCQ2P16HAagDiBjR37vRRaXgqjmYiXPdviV2Hq74hA6b8ABiPRFP35qgm8qYNWcUGqq1vFxR9i",
  "key25": "4u19WsX6SY9rojT3EyJSrS3aUWyEF2wjsMZLt1uKNASGdh86K4aXyij4jVoyEX8nyuqcEQSmXx8xTkjCRPskEq7Y",
  "key26": "6KoD7HNd6BejRke2cSkhsCmugaATNdbZJC6wky2nDrip8oFpjrkJnaWWdyX1fvxFh37bx7iAR6XDxXVhVdyHDPE",
  "key27": "Fngx57Ctpbwb9JqbZgRFsbFwPKsU2RhwwYK9FRxbEJGAB3iRTF74obKr7MU9nTaT4WxeMqBLy4CyLUznVuKu6He",
  "key28": "3L6RmYNfTLjWZqtXZAS1rtwnBcCy9AbV7u1NU57iVLimsxYC23Mhq2bN2tShcEoqhstFjKqf7yKePM3187rfeFne",
  "key29": "UG23A95XtSHQCEzRJntF4RvW2WhDM8HwwME6qBkLDcaqmaeyrPRpre38H1tcdVU2SY4DUP91MfDSbNo3hJoDKQ5",
  "key30": "3FLoVy7TGBmRTfLRMxWKZfh8HvJvNgu9kf3fGc9BPwsFPDVC2L99g2dV4q3zGczCyyKv85pjEL69VrfbHbDjDArF",
  "key31": "2YQZU3SV8DP7NvRvDhhMYGed5RhyD1AZC1JmGdo7WfY4KduaGytwBdPw2JwqK4FcW3zJg3My1G1qKvKX9TtgQbqE",
  "key32": "uhr3DHgEMpkWkaHUvrKbEhUJjYjk8eTou4Z7haFQU5UELM9VcUZbYLv5ZTfVTXpB6VEVHktAtZb3w1C2nnRhPfP",
  "key33": "3azk6YpeJNNWrbsD6u5Wkt8efJakqu2cNtXmLbmP8nbnTawsfvysanjqnrXWmwxhSXZtvCFANJvbd6tSkhfS88Hh",
  "key34": "QcxHEHRHsb635czgTDgvdTa9bGmpWKR1W9DvZXpuQz8gCUtu48vRj5yAjpCtwMUynPZnG4HiGxF62YtG4Ezkzyj",
  "key35": "28ETwQYjoszNXbHKfRaAtXExCbMFgYzLWUzDhCv3sdehyBWFugF3EUJxbiVv5Fz2iMN9PtdSxKRB7MiVDmHE1NTd",
  "key36": "ybS1TiDAvtnffBDwJQqW6H8cFHajwhBVtF75eZK8GLPoUzYeRTQHPiiReLJQrfzjA5ztGEbmY56NdorJLJ77RMS",
  "key37": "2BEdC2jXi7oDrmBvemoJfmVwDReS4yPE2rNzkKnLRL6mRWYZ9usbUAvf2mT5x19g1KD3kU9farv7HkgTGnWbmBy",
  "key38": "NRyZpwNHNDfiAoRWYzuQEPridAAsbVRKhYi5pxx5R1dvfA1Nt5rhyV8QiVQo2KVeUWdvSPDEqUeTnWsojkcUJiu",
  "key39": "9ZExkw6pfrMFUvQbZfXyUoWNPofcBoj122r2xwvgiUPq2K2r6jvNWA24tP5Q952AqHs3DodHJhcpxj8XV541H44",
  "key40": "5FhdHEaU6xYzE5mmn3fHuGEZfkz8VU1EQ73UuW5YC59AJtRNnGoRwWPqxA5BmSLyFcyuqMRRLJb49c2y9SzNM4aF",
  "key41": "6161gRucjCjeREW1eFMrAKo6NscFD72D5Ejcqmxijv4TXQJRcTCqN5tXsuaDqsyPdAxbpfht8JSdnmzbxbxh3h4M",
  "key42": "4E5MDi3bSY3EgjejVPGGjfihcbTXHhAdzMCGkhMhJY6dvgLeep3axhaBMey8mHf1kpjtTUWPpU5mBjmiE9VFznyR",
  "key43": "qpMYuRsEtHodKJsS56QVH4RPV4grhp1g9TvoZF8xiHvCHbnYasnaDh32Dhng7K2ks72YD4PN9zSbr2oTM71acji"
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
