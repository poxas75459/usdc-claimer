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
    "3Whq51qjS7HuYjbGgVJQqHdGTpuggsnS4bwe8VVXScmTwMRmEQKtbDsquKUXq3rD3JT4uTmuUtCunxJ6P73dfuKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55K3H6ETV7uohEBPuR9PLe1R3ioyziPYNE6Wx2EEnV5AchevmDB3Pwokpi9hKr8UpDhPHweB6K7kStpF3wV3FYUQ",
  "key1": "47kkJQqEXCgbgWRL6woVE6QUENHHTk17Gvr7GaEKyCc8bqzuW1AuqLAnRnsmrF3dHu2sZM5TsQBj4EhG24w566j",
  "key2": "s2nJfL8KrLNTkHgZbtJ3Ze97bsqwqKsbzLR6hdB9VXvyAmFJksZvHrApKrMtHSAbGEPCPh2kqDvb4XoUnMA9NvC",
  "key3": "5r85QVQCCTrreZEGa3o1zmbuf3b5stqmvYVc2oxNevT6Jsg8Tieb3pG9MhXbhro3gErBzVLkbNef49s9hSVstDht",
  "key4": "4YBWZX78uDtc8hkHTAG9csPnenAuMrWcAx2uQKMVua6CHwye4gRKQ4ds3wsa1zF4fmgPLuuXrnmpDdphnGWGMPZY",
  "key5": "2pwauGTY7d9CJqsV3tSwQnkAk4F8cfdrH2eGqsHTJ4hCiGQMLzjFfRb6b9iZ4pJPbiExCHSZ9LRT3tViU1nrkP4W",
  "key6": "5AFEgNkf7ATyVbNvK8EgKDFgzRg9V4V6uK5u8gGWBhmphFr7ai2RuyXifEQfXYxFKvBWd9JPeJDoRfiY6upM4zQs",
  "key7": "5JjLhspz5JATMRa2HqudMTpa13v6818Jz2Shwefs4L4KD3XKt7mYFCnjitSozw1YZBQPztv3Xh3y4LdV9jEWzRqY",
  "key8": "2aRV4S2Tp9yMvDNxYGtDV3kStbsra2KfpTqjYZ2HJLEqzt56mCpm696t7pDwdUnKRqRB7vB6Xkmf1PgDxqWszgPk",
  "key9": "37Le4VfudZSdN6ELDKPdKcJD32hTdG5TUsnjTwp9bSQuquDG3rrZTkfBZ1xhXuCxxQHijskBGa95LxtAtHfB65i1",
  "key10": "49TiBrGtx7XP84FhdV8Y8x7wny8ujQAjLVs7iM41rCE7FjuEqT2ynzUpErakxF1rYDncMjTLo4jJ8JYyF5AeD1DZ",
  "key11": "2GiZnJ99swhY2rDqCqFwaCAopc3uhQEoec3v4CNUGWYktjEm5SuURGiLrFGgt8DSkYsTS1uGDbhsrUAyu1y2CGpk",
  "key12": "65hqUMNLTCGdc1af7PCaNzxPvaRJRedwLnVFrR6kG2pmLULtiLs5ZgEbk546RSVXZCUq2F5CZMh58A3GHg3KRyRv",
  "key13": "53tbFcbpPJqfBQcFDWS1znu9rf1fDW7Nek4bUDjhZT1L7xQGnMQgFT2bSDgzNTRnNHzeGcbXTZC5FMc9JY58AWXB",
  "key14": "3wkRTugCBDSp7B18bnRbLVg95snVbpgMRwLk9QZJ2YUJRZpDm3i475Cs2VEMtYonxhbni7FroscuVVf5XtZe4MgL",
  "key15": "4t5v9PM5VB28JnraqJaQqn1ZAZUUakNoAusYG5w8McfhHCRq6tYQ9jeeSjMgss1ifs71GsyZczHRk9mMoRiDRW3n",
  "key16": "3E8WLTiP7pbr6BgP4EzWCH1FPkiUeVtBAQNdC7Mq3Nq2uHD26A8He68Q9CYRaXQ7C51KsEccGbitjj4885kCdAPC",
  "key17": "45E9BJatN7q6UqCuWErv7NgUf9XybXYbepdAUyiYfhri1gUcxSjAmPAX66FPDATWFZee9a75YdcKPufASNKpLiRg",
  "key18": "2tCfgRfjpiKFNagwGAmRui9ecaaAaLAJHMeTfvvktmtFJDxTQXExdz9cCioyQGq9kqsNE3gWcFTstVQrGduBvjw7",
  "key19": "4ZZURDgySvsRRh9PDVsER27UhiMbQ36QAohAAfPJ81inx5CzApAFpDgcY9SPdfNpwxCRt9Zk6YDaKgi92jZj3ajA",
  "key20": "guo7xpfwxjZ7iZ874sLfovVVcYjXwJnW3Ns5oQhRdGmggfo9a3G2fen7Et1paDDfEpcydtAG5JHvppWqDvEKp6a",
  "key21": "34e1Yn3xoY1CzNUFkmgEWLEw7VoubBWSnaX1ynZcVh3rZEoYXJkhcowASdpXpUzGcPUwgPM5QYHfDjKyRRKfxLJZ",
  "key22": "6eARZ8zwQKCNqFnZcQjRfUZknLQJDY8zKXF8swaVosvaVfDnszgv1pvEsFmziPC3zLnJoTAWajFpNEgu9XQ1opk",
  "key23": "5eF1jwXo7hYwPXHbsFz1WDKaNswd3AKuZEFggdK5wzrrU9nFidbnD9eUUvouMdAuupVHu9CaUmBXp2aEhMNv5t7X",
  "key24": "4Cxmrs4Xtt2D57Rwqn7UaQMqzq5jTMFPb46TDbHnsvsiXbkZQezoL11ocMcYDCHnw9rJ7hHDN8NbL6n3aYX4WJ3Z",
  "key25": "2ACamqR1kHPmg72CwuQs7TjV24cGLbfTnswKnkwEFyaYnZYELE7eJgnp1JG1KhtrKnmXqbKmJkqKWtb3UJVPmrpA",
  "key26": "JFSTWsj3aLvvrz1Jvbs8A5dfTMD6E7bJPyeDuntqNd1uuhb6L3hwpSKy7irX23Lsb9MJK5hevCKoXKWptJk2AZJ",
  "key27": "XuRfHZaGq3Qme9hbxZPcoMYfu2yxNTqjQFh8eYu1AezHHNsAaS4eNVsFsNS3RqyhnVAZEjG5eTNat4h8gr3SHWW",
  "key28": "3tj6H3R7BibqnAMYJfXVWtGu3M85QJqctmzaYg5hfmbtEHNz1ey18QbUyAg1BsYnaRAmFfdKoEbr9ZtDWHvfeihL",
  "key29": "PrwbGoPvzsPEYHZRve1oJCt9tGtTxt7tmzr6ui4BH6ftnrt7SbNZDygq1hYWKduMHy677rJwtHCidfqdHqZcCHu",
  "key30": "4yQtKzTiHRzQ5BrM7e4FtupCUMYoACqGkPYB6VejxTGcCmtMT5wzU7HbW6MjvpBW97AE2vu67zSUk1X13AWZPKMA",
  "key31": "2Fz8BVJio4dXEKQtSkCwSLwB1a5kSg5mcW3ZBocWptrvPPbKYd8vWoi5R5PwEW6neeD7FGauSX6A441UzKviAGAP",
  "key32": "4L5WgN2cnXzoNdUsBtHruLXK9sK3VbkrpMUjJ6SYUN6AVPaAVdgrBrkRz8bHkvjLJ8MqYVMJR3sidKEL6p6T9qHP",
  "key33": "a7HQDLNR7GBoVxW5ow5LeXgQoAXMcn2GPq9vZRAvnz66Zp2UwxByHsAYD5xv4f7dpRmaeBGcRDyjoR4zFYoD9mb",
  "key34": "52AoGvpCCKEsP5ozk9vm6YNEbNj7YvaF9nX716TUGd2U5uzJV1SpgtYNPw2wAkcgS2fyAhXJ1b5wyn7sDqAfFEUi",
  "key35": "2MfSKpdjwe5mBeknQk6dMQ3cfDQFpUsKP3MESC9ADzW51qfdtDV1NCQTsZoqEJY5mXZnyz2qoVydX9zGj6qJEa4d",
  "key36": "2z2zEVKYacdTGsdhukN51HimnhuHcZoZazEATpa1tXJCPRGKa4wopnN4HewxxBJJbuhTTvH2R7DpveZxQoqkxP71"
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
