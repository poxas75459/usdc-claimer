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
    "Do51M25AAHiBPwcQiuRM4HSV3pWaz4XVWeRjguuywebA1WSA3TqLAW24kAQUSLgLYJYh1U8fj46AgjxzdYxoWBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xjH7gJVUJtK5RgK6JQPCPamKj81qswh2t6PSuH4C8burmJ2Kv246UHviGH58vVX1YoCf9chkfQ5nWiqLpVr5LR",
  "key1": "2gdM9wRhzCDJdoQmaWeB3P2ppubZDiSm1MJz1BjBUbMadEaYTvBMQ1QJYuF4ySo48WEdSWaJ8ekoii7GaqUZd1hP",
  "key2": "2XUVHkeqA1JKrfpjNot9QqYyJYaehz6DeTe72fi6aJv2JmcN9AWX1vBJ5UcfreW1dhtsksydRfqNder4YyJSvKXx",
  "key3": "4RXkDAqCZo7zPQLCsRCghFLNNzEPz3EsQEoWwtE1CKLRmitvjtyx4vmY93cNBvjtJhfvPqE6KqPkPziubTHJosPC",
  "key4": "3K3fxVcEFgsaqs8sNqmv8eSp7H3NkBwMrK45xLZuUJQJoBmhEunfxpyT2eY5DH5y8gFqtyVy3ZvvQcD2UHJA5gjD",
  "key5": "4DHGPamGmXzNxgeZUMxg46KftqMJAQF1AyHQ8XYagWfX1KX4yZfzKfLqqMMggvycAnP7cq7sxcR8iQ8AKCWjGFUW",
  "key6": "41qff2ahRgq5R9wDJAaX6uMBCbDVRYcn2NtDpLq5XqX7wENi1D4dPW63imZGQqCCTVZDNNfrfeh1mznz9coXLL8b",
  "key7": "3btYMoHrC1D4LVpCHZxKsAxEUGGBcSHyJdBXwybP67JjL3f2aSAYEpGEZVQhv4rpE7RLaA1pRvjoAx2YxUdAmEmX",
  "key8": "3M6VzMXrJFEzyM7gFGLEgta47DvqNm7k8xGVc6hub9Jzf9G6dmq6BRa1Zycm1nuYSKEzy2AudkvHhk52L68HWHnp",
  "key9": "2k6H1Z11gWmfPFJbCC7WRgNxM6r3KGZEXL7cSmZbE6KqZHBH2PZ4rEZYgQjNW7ecTVvUQJdh8CvENTxVrmMW8sLL",
  "key10": "QCy2njgvokpPoxwgrhgWsqcnGhLupixQaunpoCeVwPT4iKtnS1gYkMQPbBQfKfaQCu1ndAchgqyMsXAqtEFf3QC",
  "key11": "4U5RWbxSJMEy3u4nBA5VBWW4MDVoYMAFLzb3KDLdY4iS7Brxm56kH1PWwyHxx27BtgnD7Ew4omM6xDnCe8i3t1Sz",
  "key12": "FwaSa8hFWDY24N9VdDPCdED64iQaTjSPAgjZFe9D3kojc373SQxzM2tqBM4aifnm4PUe5t5FYEtQvJrpTPJoxng",
  "key13": "eNxaiPWCVeCKqubQuLnhoFFFyreRYiCDW4o4chECpGpcioasjCEdVjnzc8bMzkqDWqGTQuVmS1SvjkoGoByjbCQ",
  "key14": "wSxce8wULP8HW4myL4VHESnu7DG6uKabiJYAkbV256ygQAmqkQSR1hM19sEFyJzVJd2jcpy6erXwxE3pn8VPETG",
  "key15": "21Z5769dL6HGZd8AXdkEJMHGjG5wPMELk6o44iC8HzkSq5CJmYB9aZs6qGSW3V8CkzitGGxq6bYxX3xujcUStpuR",
  "key16": "5qhXfDRm4VkwsqeMFwLSHULj5wwZp6tDhrhWGKkXT4bEc3xBuLAMmKsiCLWbDMSbjTEd1FLJ7NiRqcBA4RAqA4FH",
  "key17": "4d4LSXzYkm29VqK5mBXW2KrC4R9WVvn6Y2mwSFUSj7x7Zw3uAVwy4Mu7tcZ7Jeb93LxmB4eHf8YTPSW2Q9TT1WaK",
  "key18": "2zMr1uEGx2zUGjzRqnpr7poRv5pke8yYhnbP6sH1JAtVrBKeJaPs5sKVjNUZRTRvSkwgXY8eu288dY9Ra8mrSQUJ",
  "key19": "4LK6SBk2NpMqDqAmDxKF8Sg9FPDKeVgA8yQJeZdaBJnpbY88L4iGMqUEUdQjmARi19gwpKKAdJ4PsU7jWxue1qv5",
  "key20": "3NZPdmo5s3BcR1oSS3JqDjhbM4iWV9HhUvkxePwJdK7YPxuqK7KHBg7jRbQXhamcBCW1ZUnk6D5M3HrXN26skCAj",
  "key21": "3RUMverWEHktBZoqXz7QHNdeZNJShAXeQTJGguFid9YQFDveBHfNyGWcYPsXNSHisuymRULRPpjPZUnphZk6xgQq",
  "key22": "Hki4mvMcraA9jLS2wt16CLEUNcrSwzrZNeFsPt97apSDBqhSAchZ94kPJ5ZB6uo1cTuz6Ep4y7DkLGgzgefxH4e",
  "key23": "3gUvgon4JvbQ6hZZfVAxqxAX3zgpZapnWYszTEwT39Ha1f6jgr4QnLbcM9pDRLVgLrpf5C6h5Zeo1ncyWp8xAwn6",
  "key24": "2qo1EENSG5Dbrq677k9wtdGzPx5nuhvxq9rGJAB8VKPGR2rtgSeTMKDVsDidgeSXHBQTYuFw6phFiLkW8nEeMmQ8",
  "key25": "2WkcdnFvLwrFTcSnYF24A6u4xfPXWSQo9kpRivoibE3D6GgoLfeqTMFaYtyEW6oHzYVcg3qGEGPzjGwKRCqbvEuj",
  "key26": "5EwhJ2xx3j6txroZRH1LrRpACRKWdcr9iSn7HLyDqyHQvMFDn8PwnZ9jzYyHkXtnKMNHjoxpBScKuvJhcGxjbavf",
  "key27": "4iJQoNLL7nG5okzhKUZ1q42iw8EyQLxku5rdqVxptisUgUdKY4JgNuEWtpYqnfQoQAqS84VtLocq7BcoYgp8qYtc",
  "key28": "35j8cJP1Huuan5iU7gX7UCvLeA814sJoH6rdgMBf8w93eKT4M67xDYeKW1xRcEpQdexxtVQoVuJCJbt4tPRdNqY7",
  "key29": "4tQDtj72KNG5TUS9LwPGgUHUDKcvNyUbb8Kqngq9EMQnMHUcDceazLoZdPBmj1esHFLPbK8ABER9rseRaRtbXzgP",
  "key30": "5VRF5H5uLxMVbhwMD3VP4Tjaq8bpRXU5L41wWFeJQ93Npe6993r8L6C3hLyXQSgMFesyFws19pmFsG18MGbQ4ro6",
  "key31": "Q8GbnpNiWm5r1QrQzWUQyBhwDqCCKGD98PJ4PNqUUCYUehdUemdxnjPXdyM3ttsCycpG4nZLPvNFSfDY7Rkxug7"
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
