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
    "44P1rMwBQ5XgYCF7JivtGXix1mwMkjLD8UZRdJV77xmQDE3UaEW1YdNXPBrCCvf5gSTkpZLxA7gjxfycCiM7mqy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShZ3iuRPG4ea3s5g9gyDMUcz7VSfE8BJRrQrkk5YNCWBbvzdrtsxU6hA4ebW2561cDzDTd8DhLsNcjuGC8Q7UpZ",
  "key1": "5BAWfo8FedKdTwyYU3m4nVFXT7uNvjYrpkCv1PbBJxaPvya7Nt5aKurutgGzEtXS11fQa3af7TQRKRXrawAqdXP6",
  "key2": "5nT53U7dZBuKFzZ4HCC1bx8ZoJ3z7yxeqrb3WFT6cE8KKdsjQb5rDbYaidwJh9bfLtaXYhdh3DSZNs5nF9WKYyZc",
  "key3": "3M4gdhTP6SeUAewEJ8CnnZfbq4jge9LhrTRVF18uiaSnon9d6giqAq1wEUdGLPSKcnigmJvj7nvMDV868TidtxNz",
  "key4": "dYoZTcYJa1q5vzygptukyeuyC7WKrQnrsdDjd244pS9mpp1rvrSAf8aoh1veKac51fVCWeZ95DZusvnDVeZUzr2",
  "key5": "4Mi5NWx7i6KdWMDL1FrJPjRppF59FA2a9AKTPjqRongz2Xdx8zKhFZsC9AYNYtL3TgJjG52XX8hVQMp421rpsKU1",
  "key6": "3P3veNZ1uCXFeXt4qS2d34LzNnjZjGYzwniktM3wmDLaRcqjQTBXC1xtTpdr4gs5XQQTusRtjDJhMEeQc1LMEVyJ",
  "key7": "4BPYKw1Dqyy4aUavr9oo1H8gvTcPWy9cSBsseZkg3T7hswRVCWwa7LjCenZSAaPhcKu9jR83ss4RFPQtpHDSrHZg",
  "key8": "5EDMvAjEdMjYtdv5fy38ENzNb1U5HPfVBedKL7LufQeo4UAvH6W86AbTbpqMw9WqDjN9nNXwUuFwGEXrgQFLRy3j",
  "key9": "55VH2LNjR2iYdoDGfXddJKDs11Zgxe1VuxTn2CWHwrM65L4ThaVLvV32KUxQPGmSmdorBU5yMBWS2AkxTUAE2YJL",
  "key10": "5ZipHJQb9xLmfLV7oR67vZCmxweK6kohm3kYd1F2ExCy23FvDYV9rvGLDwezuZYTSPn2rjAGsM6nxLY4o6sTn1cc",
  "key11": "4w4RgJgXZwHDktaCScHvBwLN4Xxu3395rUb6eXW8YdvQk2LnSEjYoyUNEi8YqyncU3hvcccvzVv3W4XiXqABsuk1",
  "key12": "2xs9EYyoi6TE1ZyhzBagiZe1CbQJY2aoqgLAZHe36sCxyTmCo8crTMSQ6Y51vYAejdLL4pSnVJKYRMuSybvdfHo4",
  "key13": "DyiTzFnee6pYPYyg3sfooV6LAXYUR78QwiGoGHp6ZRXi1wiQTzw3S42BctYWPqEdAkx6eCbvTq94MGw3omHC8vM",
  "key14": "4ieDohmNqpoxzSBV9s7t4YLsaRrgUr4bXDqoLBpcJiR9CPYySNn9nthG3fqMJ3kPDB7drx73swnEeh6QNRYGvBaF",
  "key15": "2B1yuq7QauGzzyGNwULhWhhmPVctJ5HtdEe7oYCDe425QAgUzrC17AGdEGvG674fqWxi3JLjEaNjg1RSKzcp1byj",
  "key16": "3UHoiaWwTYMJ67A8LvCxCgJC6o3BzYikXoJu2nP1Yzn8TURNamBW9M75QnLRssVYFF7f5Zd1RX9pPEiEQ19FR9FS",
  "key17": "4cha1UENA3Jpftj13WUDBxjvhzmSov3uek4JCikeuTUdBFnyus1sLKYyWzmLbeK1aSpk4WjCx67xrjUWr8VMpGts",
  "key18": "2L9zNKG2pj4TmGvso84ZWY9gEbDAbWfHiAhnSdSrTekgMPN49DLeFRxizucbZnKbmx4hgFfY7HjKCeoyMQdGhjjG",
  "key19": "2U6Sq33UE6oirz58xVifAxK6fT28b3PJWdhrmST8A9k7b5KLpHARiUFaVruUH3hqjQj1tEJrqrtkecNEeCMfkoSP",
  "key20": "54d3f5RjfDMN7ZPXdpmFcCDJNa5zvN9ovi74BFqEp4E1N6GWcYeV3kE9GVu3DuXZkAxshSSLEHLpv7m9NbiWBtSe",
  "key21": "5id5H6LdssHzScHeEUwBkoYDfuTYmxZAx4LN7e1MRYpmL1xsJfBK9WVWXsLLPxMQpHKzgULF4VKkn8ErCLa34UBq",
  "key22": "4uPSsGpGbABQsSKo9xD7LX8QY4AQ6XuhSsRnz8KwXRn92HaVJBMHz2fmGTz1WTGX5Mp8cwCcCSjEpFjYSKSLS84e",
  "key23": "3JU9kJyy3jojELemrL6QLdNh2WFjRVLqPwfN2t7EUxs6JxDvVjtnCUNd4eegxV3TzA9c5E6qopSW61cxNnb42cYv",
  "key24": "5ULGUjw6D2dSqWhgquRqSSxZM2iNpktYU2tj9H3voFgbW59LmMXkLjfdq7dfuHNTmP15Nj5igHjBqe3DDJu33r51",
  "key25": "46dvZG4V9KUt5PbVtjzCt7L4wsGCxkAUUjuEWXyRXaoqg5wJeMEm1RYNnu2qJuswTUFBZrwi5SXLpf7jBtFkHv1R",
  "key26": "2TocyTwgX2MTVttvpAdYvZL7yi5DhGhaqq9GWR9kt9KaKpaQg9oJTRC16xzKigPr7r5ZaSrQTgzRFqvNTLtrbY8S",
  "key27": "3sT93pPuxHu14ZcVGfPzVZAjjuceEqDgMe6b9GHd54YkgCcny9uoEb2k8j1mHubK4dxYVaEhTTXMbaKHpiSAhnpC",
  "key28": "57AUThhrCxKxB42PxWa9u1PUz8Q9qbMQn37EgUpPCXHzX52nmU1K3AmU4cYGiMDy8s8baeiReAWkT6WL4DNC9yhq",
  "key29": "2GSyUPR9ikeTtzrKeKExNQEH2ZPzBdUSTHgovQU2MWZ1RrHktGVsXhXYzUsZbaPJmExP7i9n9k2gW53cnsuN45Fu",
  "key30": "4AvypZaaGjgUjTfQj5tEVR1UPAnfruqMnPoYY5azZQ72dSfY7mkW9QP7CUXQrBYF6oDEiNew9M6jwQR83wvFQvtK",
  "key31": "NWZGE9d9puD1DSFvJgrxLbhqDP4DHNJi2woJLgQJa6CLrCJ728zZ8eN7fNjmbmSLNMxZKEyDqgNmPFqKq4iLgWR",
  "key32": "5gtyzbJJrE5ySmvgDRGGD4fisYY25V1NDTW7g1HyJhUreLmMAra9tzsRP6ytWsafBKabcYYySvWz9DLr4FuYPTJf",
  "key33": "5L6m2YjqsRRXEgVqUjMr5tTRYvNTAk9ehjommAcuvhr9SSx4A4zf2P8cEcBT5C9nRvLVhPNSJXzLsj2pGtqtm478"
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
