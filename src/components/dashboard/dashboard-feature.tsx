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
    "661nvi5vNCodW136ANEgbdJjtisWUZJ2FmU4TLN1pxqo64x9H4yfLXPyEU8kL3qyMv4pXrchx6cm9vut3hYxafzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryHTRuh729Dnfeu3cJPPXRwATZ9chCXo2rVi6UXdGGjs7Wj7fFW3y6mcSg4u2YiaRXLMu27woYtnQXt68tcYc9N",
  "key1": "3TA6fmaw7ti1NryQx3ByChuv4H3C8uiQkzyrRrZfURbXsxUpTprR9caWiPSYDcDUvU8bRJyDJRKyQqU8nP5ewhvv",
  "key2": "4DoG8Egce1yRgpQ8EGnmGsYekP2dU6r6rDSWZA5puqZxzYdti7qcn9h2pJmDuBmsJooVVgSrK2wqKYBoQD545SPp",
  "key3": "5efJFU2tqgcUbsENM4SF5tcKPHQCNiqFhgxRANEUsz84QE4tnnfdVUZ1b9LG1u7P6QujkHgWUnn8Kbxn5A4SCFBD",
  "key4": "2nWyxsSjQREzPjSwdYQtZGaPxEjc921bJQTU6ZRqDQjgbso9CCzD6JBuygtbLkrWS7FVXnvWwvHkzwcSZa1JVvwh",
  "key5": "4fnEs6SJfdq9HCFVpYS6GPYATvf1AWcsCbwvaHULSqG24YwgFoScTtt2XQzgyN1SrMHAo3noXqn78UkMoGbFxSRX",
  "key6": "3GcDSo5MbQhqNQjgZMG2n9KZbkmAYg7SoHHKWWRgSf5PnpxvpPounoo9tfEbmL2MoVZykqpoq2NmdQbSyBp27ekd",
  "key7": "3jz9y5oEWaxM3axFKGE6i3mZf32TdxuwYxaR6Qf5MAVH36VarEb8V9UZpnWFm4ysVrqdR6QYZcRvRk28CBxvuAaV",
  "key8": "2uCV6fMq2qh9L9dYS3aQAcoWXz3iWb7XcmVmZs95T5XePeq3hxp9ChhZcJdv2ox8MdHVKZ9LGSfdGL9X1SngxDja",
  "key9": "3BztU6sXeocdXwu7iXbuLMRd3uJerDFmSm3GcgXANpKnnmGFXG67LsbEoTkZSpJjzGJzDryxm72BWCJtrErCgY8p",
  "key10": "FCL1TxPhGyYYKj1D5njk5B3ZyBirj8suJTzdrQUJUJqNJxnBh3tN3hHk2ChwmRCAU6GZ1aCkSJN5s5PjeaxeMsr",
  "key11": "5f9c9CqWuCfm7V95cPz8x1ZJfWqECX8k9M2KFo3CJf9SgJGgYyh5hT3vF8P33DVrbSkpN4KxaP9tTruoofvUWfLs",
  "key12": "3mPiaWSGXwr7YsmXSzv4kU6VRjM5W9Mg9yw51BWRGabd4chx4TKZekwtKS8fqLWhCP17pMCdjXSa7nDRfvsjxtbz",
  "key13": "mNuKWMbburz7X3GkeVHoC36vjibAgestAx6Bxu6ZfsYXxDUhXD5QdA6XwfrFNt6v6JAGbQhMwwtSLTDuiUL1Bn8",
  "key14": "2mN7BUYGfdLyhBSQCHEJim88e5yizbxYDHeRptVok9hus5eSVdGRcq1oXey9qkSkRVBrcD3KikXFL9EaBrZdUqiy",
  "key15": "35He6UJMhWmWvzb9aDeSuXCKnsjC37MYRwVVEuFStHtr16T5zRprKgaqca4bQdooLk9ZyKQWdtrt4z3uR44iJTyj",
  "key16": "2tiSamv2KCAhCggrZYaStBFSiZQv6gmfo1aWCbFPi8i5Yt3M5coccutWqFc9xUoZHcF8PTRCpVGtn3LcMxveeZGh",
  "key17": "4J3mhCQoP1fRTuDUrM2uuH9A22MN2MrPvf5V1nxnUSa41fGn8Hs4vLLJbaLnjZHmmoAt6n1qxB4rqMPPQXamgu6r",
  "key18": "Quc7KPG6CpUQwMjoawVKZtJ5NQLfZPzqxyHsF3JiFvVdm6htgMBtdBrTL3QqUYBUUazwxutBk59BxV7VAh6mftv",
  "key19": "5oXhyiQkwRv7SgrfyRngx3NbDnpAjWxFhnHnjrmSMUQwSahCUimNokQohGwp1TkSuSqWbKJGaaWXwcCepi1nCSVp",
  "key20": "5F6VMoEdG54eDSNeSgpAavTMM6W2MHRueLzsaEXxpGhf1TMTKvhMM58ZU9hryhiMfjUqahR4rAXHkta8QxamBE7a",
  "key21": "2Gr8pRLQDF4PGW2eUf42nYobKj3hqPGJFBdkcAsizxPuBQjR8TmKqVy3obMUHV7raXMEkJU8nf5EBk3qZPaUpvY7",
  "key22": "4opK97tVAVp2Zk7CDnVt4GRhe82gXBiEcxzx1ZKz2FbQNDoTCFSLfHHuHMmpy82ErGstjwfEkHCBRUtZ6icb8zqn",
  "key23": "4cX9JD3y1o4MntbxTcoEowgy5gpkrJRyz3wsTxGNaiHHBQtFZAWyz9ZuyZp57JJm86HDADtCptMkNt3yCMSGX3d9",
  "key24": "4F5bTAsXNZaQzN1Ww3zcQ8hRqhsiibjKRqo5oKmbPtYRkAMban7y7CFi86ozSjbSxfdEezoFp4VURjBAXsRb5Svz",
  "key25": "bkzCdpvNJy7SboZhPVJ33R7osUPpes1ZEfb3121N1nUZLC8gsXcarc5Q91tDfKj2VmTowXDqJq8aWBsCbBTx6ku",
  "key26": "22Qx2TtTEPic9fQvYkfV7MYW5rTvYhwjxo3vkrpy6ziqE8sM8Ftn8Wp5nZ11Nk3mXsvvoUy7QBqy2PfRHh8cLR4V",
  "key27": "4yKBfFtTPcSfp7XhPVaViy4fEX7bz36mE3Cu5mtLwawogaup4DJcuPtLkvhyWVDuJcApiuJEuNJvdqUgptFHeHfG",
  "key28": "5rMBEXjQg7ozVCXEYmu9J6UTffoCQqxgQX7ZiFdN1NemLKVuBupHccBdTjh49Vpi5RJJof2Rj1dScZxnX8dMeNdY",
  "key29": "3exUbAmG3B9qnbV9GnTi15JGmVGXC1wLa5uoABJNpmF9QVgXMxorqbkrhYdzmGhB7sGLY5aDHUYUxdYFUHJEva82",
  "key30": "qMntEqBmqVoPqv9UuPcAite3aSs7oPR4J67aK7hWAym8dBygmhCsb1J57mzgPa4V1yfeKuJQ42L1YruZBuhhbaE",
  "key31": "3nfa6Aai2TwNkdw1Xhcsw4Linm8rxbBLA4ErtWwsaMJrkapXNq9LQdYmjuv5rWDitqUdBUYN4Tce9ozqtZBFNmMq",
  "key32": "2PterGsMbE86CXs9YXfXSAfYUM3W18PgXTi1QxHzJdR8VbAH5wv9TqJCTW4b5FeFS5wZWWWjwFsj1FcHBSgR75Sk",
  "key33": "3C9VuU3vmRgmAYNk7gz9pk75cU2MrfEdBCSZ1Yrnc7hgTRgeNhHGNwbzaEC8EbhX6wxdV7xRRV8m1i6qqB8oJYkJ",
  "key34": "4pCByunnViRBVHNN6Avn1hEEPRLe3VG2uSQDduH4wu5gjdCTTF1jH2DEyWbqx1DL199EUCuoj9E2axyiPWqvvXRY",
  "key35": "5x5iVDNSvmERkYD86YuGukiAX4pd8vTJnoYgEkVrkPUGEWbSnrdaYpfBu6bKrN8kK77n411ttEqCW1aBb1NWDubX",
  "key36": "KZBRB3Utp5nx1yF2fzPqhb4ozAt5ctueZAP5Grp4T9KKwWz9Qyoqo5oWJv8Au3qErJ6ahXZ8gRujByh2y3RNJri"
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
