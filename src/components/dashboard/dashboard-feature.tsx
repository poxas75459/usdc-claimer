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
    "2TTvEg1pjhd1WpqByc4vzBm3zbyBrmVcZrtRHvEPHpCuuFGkB6QzgoPvopHWKT5M2F38c1YBKgfzJc4eMmvvySWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23x6B64JoGhbypaVMPp8RY8ELfM6hdDYMGY6KotA4XtZ6wb3RpeyU9jXdV312aKp8FdKLGnqsRfjzALypLHA3F7J",
  "key1": "YmA4fmMwXuxDsykBdG53wPbo3vGSKrcrWXqcmMpQAEYk2P1gkioiDqMDMkTEQXomhS7rnhzXBgAeHA3TYj8B8yC",
  "key2": "41vjZqyaoPaHiEgTPKSVmpSffWqbnc9nLoCW6Mm3AA3hRWWBn8N46zB952zN3QKQhdfWtKGZK4KYXJu3krVSDkrz",
  "key3": "3QNkN8bGj6XjxxXCFBNhTC4KF2gd1PwoZF374Xbev4P2c9LqL8fKrJYJxPDRP2MruPHT39jKQCXU9t3MCLU9v4qf",
  "key4": "5ZkLt8SLpoHSQxc7XDRcsPWBTf4seaL5gjpgRNc4KVrNt3UNcwvpNHB281tj6363sPVgx4ykaXFiR6qdkBNcYwZd",
  "key5": "2QbBERRZ17YYx4awQDpoRDwVYLa5WJjw2eDEj3udM51KgU7xMCdSU23YmYMUtkjeEgq4SkXU2PQSRgVT7tzrTDsq",
  "key6": "2wsBKvWBsuDSpLLKqt5GaJKHwUeo8nwCZSH9MBhcMVc9cmSWicHVzhNy3ThyXpaBMdPMSQKYuHz1egMURZ8SYSvZ",
  "key7": "2WRyH467c7XeL6DzejopwALyRKdCUKZqiQRNKWVe7awKMHwEqcCrNpuCQQ13kvjYyY4yMHV3454sgxUnM7YRCQoW",
  "key8": "2o3oqky2cBVEo3bCkZHs6ZJkLJv4dECKfLXpXmMqyKcu22oiMx3gWPrdXw8HYymkn7N8wvTfjqcQTqQLYLc9BBp8",
  "key9": "57J6FgSX5L4nn9ofL42bN6yuYtKw2pr9pMqMU3AHWDQjMwhC5z4ApHNDyaZjk87nSWQxZxufCDHpSphZ2YSapB1t",
  "key10": "5XjTJRx7VM1YqGiFUHjUuCSbED2jPw7aSTa7vyNX8EitdbUuxLQ8W4togKZ1XrW3f4uAaPHmqkET45jMZ1wrmDu2",
  "key11": "5GkxdJ2Rxkjp8RnosGqviMJ7oR7oYw4AJYZw4GpgjKcdjaMzozUZTCcbQYVR8ydDH34UGGMvQrhs5SuDncX7EZMQ",
  "key12": "4mbcRZJAzLNAbB58wr5kwHYgoBg61JGuTJc13ojKy1F65W5giQzR2zKyYe1wHgDsL8BKLFKE8VAAHc5TaPT1Szjk",
  "key13": "1o17kgdEdy91bCnaHZiTzJhDSd27nPHebZBkwLCtexwCUDv8traaAXn8MsZttY4TUnz3WjxwWN4PjHUNB3nYLpm",
  "key14": "7N4Dt5Td3aYL2Sm2uTx7HeGyuiisuGGmmbXPTsEr1s1R363V6A5CtdkUmuDe6AkshRgMAzxe61Wms4hWZrNpHxH",
  "key15": "C2w642DSXFwJuZNzgoXFfpwFhfY92EQVffST78qyGFuqjHSmm5ibv1nzPqRwummxVSg3MeEits9WQUk8rbesdax",
  "key16": "2jfksPVzGacx3kPGVxzWgQBhM92Enzu4ir1sWFkyntZ9fnXGhXhiX8dpMGrF2RGtQ1qmZZksPmFZed3JCApYZbj1",
  "key17": "bNHTgakxPv1WeHVE9ewngn7F5NKU18RfcjP1LcZ2fiUVz2G9DXUJENqNfLc2LLpeNT9XBCR9u3U4ZfHTyHZ19Wc",
  "key18": "2urTPq8BvwSCzNQLxSj9n4Gd1EWTXz8LQn21xkngQDYQu6YzP5Ci2wUvqEGNYRdgzc45fJotsCu5gYvJr4mmJcXM",
  "key19": "3ju6zs3m7fhs3WNbGtUmKgBrkdeWdEb7njgeiq3q9a4wy6U9bwmLcfjpHiNSHzsggQomHHop3aGrRTM1jmU8SDVF",
  "key20": "413H6pCHjLANE7Hgc8n17Y6WhzMXc6sRCC2c5SR3zue1wJEZBWKvZJPczdeoZFyHY4xi88EWuBkpyHkTzUoDRbL5",
  "key21": "BH9UyNCLP5FRYNRAwf9cbwTVbbMhRAGP2167rjteByb9jVEWnwVRvWFxqPwttC1wf6pxRPftzAzXroxLNcurxWa",
  "key22": "264GkHNQLnTHnwmmucViv2z93ZS8cYRtjgGZa8FJJN3rj9neoFojuYqUbM8gjsVYx4JousHVhYZxF7JSKhwhxwWi",
  "key23": "5raHjZBZC3To8yVYQwvhneVQVHE1PqxRUMrEUHrCv2wZrRyTtYw9SDNZFkzgLChJBzTcSHtQCoqrXwbihGxXbEgm",
  "key24": "5U8RRbZ6xJ24GHtTfLkNodragtdDfhSmELUq1jy3jGQVbWQwRaQhoQG6Rc9XgvQJmGg6YRJs8x5rGJxgNQSxdrhJ",
  "key25": "4p6sj6ETNKZLqqmw73sZYGNMCe4sGXDbubHHZxvS5P7cSuSYsGprfKGb2LG6tM7RskWh2nF4aqh6te6koAAyyggL"
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
