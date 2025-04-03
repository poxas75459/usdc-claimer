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
    "4sc3VAvGEZkwraDzA87J4uX5HB7NjhNNcyR4kJeEGUueSTGyGpctjvhDs7xegYkbKangdt9i9zFq22MUYrXBUqdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599E4YLXzEtWVq4rm8ne8Vv5Z4U2EJtzgNXjR8SwZUtt9nhAiK1SRUhuvjc9rqvZ72MdhzBUkfwZr7TQbS8R9Giz",
  "key1": "2mMNsHwP5hZ8rjDwd5SVX3JcfK8NKkR9u5eKnUxpFM34DzvVowQqxhEf94uGn9aiqbfHjgsXYkLUfnC281SF1QKF",
  "key2": "zNrCnXV9zNUbz6fuigYp2BkwM2bPP2HGKNkHakQdFMGTEJwa2ZweVrpk5mk9vLVHQ2N86iveELMJpevVsTaBeRv",
  "key3": "2GBZcrT1qu7oDXsRuhQA4NapUoSvh8mAPDdVmJGFTjJhN4NNEXaH2CZs3wxRXFudXDBRfpjRoZGFhq9FiWKjR96m",
  "key4": "5hhHMBsy9JfLJfxKfXm7959Tn3s9YzwHWwJkwMk1r8D4RoSDjGHFYqmo96Wu6YWCHVbCLWuZFHavvhMDFCqmeNBj",
  "key5": "33mz77VLKZarreqVAG3xQ9KWFznQHHnrMrU397MonWm3xcvSkoc89ECsSatBm66Mt8sGwuwBQKfawLjjarvWWZLY",
  "key6": "22qjZ4zVSCSyMsqaiTmkDCuQRGoftzDYpSxwkLBpZLzxFCVn7e8JCVX4ZULC2eFEiKHgvMSyahWQX7ZrVSBj2SxV",
  "key7": "HZKMPUahr5f5RrBs9FK2xFLK5efnEmAH7UjPJ6Rn4yuN2heMi7AjgFx94XL7drPcJMQRd8625Gk5kKXhzHErq9T",
  "key8": "34NtVkKrcBTsGCdXDBMSR7wwMUmTUV7LvU8yW45A6rLW43YWc2LiLB6j6HELwqHgBw8vr68M4cdK3aunNteu8fUz",
  "key9": "2LmwDHk9UTfZGXNPofb3hg7caxydecLZKVhZAREZCdTRB6xqCnypyQXEkUkR5ssedYSJBcukhLKHF5LwNFLHmkCG",
  "key10": "EfiHnbBLWR1jJcJtGYyMCEV4CgZvvRs7bS9czPdQFMNP5fiA2paRGRQD2nNZwp8CDJ75Y7vKgppjfAVrBZUsX8z",
  "key11": "58hm63rzYYYiSSbwv5qsAZTZMG2dDuAQSpLonLTzg6YFJBFT3F9oGMokVm9BmR7hr4pvM3RhEPUNxHCupqc4e4Da",
  "key12": "2536g7w2Hu5u4WL2wC6tzwkgh5NUXPeyiMTN9tBCZuvDoKu6rF98gWZGykwM7XusLAhuPN1sKRgYHrTQ7SqxUbrk",
  "key13": "3qatoWvZM3p9addt488FnD9fs2ij2oxzoCcpMheHvCsTvyyrsdFVTXbzp3yKLAVzBaBb9W5rVZxfJCWdrXmgj4Fv",
  "key14": "cA6vhQuKKWJk3Lg3d8V4PXRjCuw3gVKNE3TVtLd5V3a2uWPHJvAJPFqr6cJ6nGDfGZQ1pXfYedLUWF1zXAiRb89",
  "key15": "eKfXp3GyhkR2CSM4KfPGpUdBd1LLAcN411mVtokUFxrY5cxUeBX4bozyRJJoVm5AVXXLTe4PrbVFLL11vVxU4AM",
  "key16": "3jNPUdHMWxZhZGVo35fpNK1L8qoKc9fNxVmpBoousabWAhu8MZ561xU8jKm1m82t2AxJV9wyXC1dowR3nAboSpbS",
  "key17": "2T2AMXiP4S6nhxtTAEdit7yLv7LmQAQnEstsJchvoXB3MtSBo4KdYjDKUnHZ6qHVM1UqizYj4XgUuHRe24ZTv1Yq",
  "key18": "4kywvBHUDDoDTGCYFNL9QA3yjW4BggTnJzdhP9cQu5V44N3sCBnjTqcTcjLMyQhJKTcTDdDZP9pq5pBVVxrAAhn7",
  "key19": "2gdWAiMKHPuyR4pzAtQ4TrgmoRiv6yPz4trWosM36wT6TvnbQ5UjRZ3voqeYjvUx82dGxEARPePjZZJJwQQbisEy",
  "key20": "2TtLnpkYsjGJG25LkXCDQ3iwfpqxd3jvRAXsoQcD7wpjadH2jmArQNdXDq1r3rFjX9VzSS7JtAtjwn7DubH5gd5q",
  "key21": "5nChAz8nVBxQsuRas9tQyGJDF2tqP35NgF9mjsBBFDPCFqhRqSAreze1gFthzUvSySspeTFRyhajBygfLXRreU6s",
  "key22": "36bur3cbV3bYJrCQY2BdgTJ4ws6a6fLVS3bECeSPAmp4Y8ns9BSbnQeG576UXgAMnRzEZgEtqRPeAhPX2hns472Z",
  "key23": "5Nh5keiQQU9Rp7WpeVyaLqrP7DRfN8z1bwy3yftHUuK9Y9ZuZ7chByszBR5JUKrjZBwzx4owYWeh2EGuC2ALGC4j",
  "key24": "2uepxmF3oUX5tZbw1i7eVHELwLXVqms1eyhv5D8wXADB8dLSP7ynYJ2sZcxX4ar4dn3J9MDdKk42n7fKZLwZQug4",
  "key25": "2WAtk2ccVKJTETTbUBFNHVhu2ms7dbpQkUKgbZLMwtCgWBX99LxDiJENCamc7RsVTUiBSwudFqc6YxzazRCJkcC6",
  "key26": "5eAT8fEJz1mVYiNTHn8bnRcDkYLanxmXvKRt5EeP6VVzPZFYdTvJ9jCBwSskAobficAwLq5iNFhyaJc9TXfm4jKe",
  "key27": "3EcxdAvtyyV4tfUGRLAuNR5zPe2EsZMw4U1dikW3tFeyVEnz3vrTDfNmvcCGbYr3eUQ48oCpwT7ivfndkFWBbdDG",
  "key28": "643QaMak78EsWdo12yMZmip8r5pT3BE1Cz75ZgV9u2eJTAcCHGJdTRcSnjnirsWkA4Wnz3GLscv31Ex4GWseneh7",
  "key29": "3wH2tg3XZhCgLVDTYS6RX6KtEYRh97zzc7Joimm47hJqk2CPFAZeiMsDQ4kSDd1RpdSYDZVpKhFEKzTm6nZt1Rpk",
  "key30": "3LTjocpFC6vCsHK3ZB2oSXS2XbViJpQaXd3nMY3idf3aZAJiJVxhNNofbsZeDmRkdB5VGDzAqEw2e2XKNCrkokm1",
  "key31": "4SEZGBwDWztjdJeRyWCupcqU7Cx9zEq7rYdsEh4XWTF9we7Vz5nTZyxSsZC9K6ewomkC91bJdiAcDwDqeNUWERXb",
  "key32": "39yEGEqkAEXmioiVpFtr3LwgzDAqT8iNeyg6Lh7c49CgxupghiwikmC4KDx4RKso5eoGk1khRaNLGqQcgC8m1wsP",
  "key33": "y5AYGnYhhkwYa7vAxqnX9tnvXfTny5ruAQjeeeyyNDjSiwsDAaTZ2jXKJM1duKN5pqfw8phvmpafXJ89EuQeBBM",
  "key34": "Q9RmPWdBaRqt9JoPB9ZVMjT6cVHg527YPnfMxq19Bo76qP8VDYdiv9VRj5HgYN7YdYQWC6qWGfJ7upn5Cehbp6r",
  "key35": "61pgVdSKhHwyfBnseryS3NDDM9t6dejGVjs5q1kGTuxBoCmwgpJonQ4mRfxCr2oS9VAmvgzXzqsrBB2Eie2UHFEH",
  "key36": "4o4HWDhGCbXPzjf2d6ZvQdEEdPoMcSvyncPAVWN9Ba2TMdG8Z7F9fqt1XJxVSn2ADcXkzY5oHDeXpBJg5d5uYZ9H"
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
