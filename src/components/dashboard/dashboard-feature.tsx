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
    "4KxRJ2EWt5UQbwWQBhKo6bWS7yrfa3kVonv8uRskSJUhAdxuzharTq6vD29mxoNtVcRvqayw8LZLzMEbAGZLwzRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rng1BTaeqotNLDUokPmt5pD9XD1uZhYtwZf8Vi466RVxuHecNp9XZYoSsm1wRRPgiYa3faC3MjkwMRAwTxtr437",
  "key1": "4P72WgiN1j1YcgZWFoMuMBSJgZkz9bDaGB4DeMexH8vY6WExzsKsUWAMYP4FDWLenyGhHE9sbBMkPoUMutanE3oC",
  "key2": "4feuDsidqFfirhB49dZtBVJ66HDPKmHu7rmbLc8SW88uksyxQ8KPnSN17wDLmyAT1AwsiJRsu4aJ6uLxMnHYAtnR",
  "key3": "3CeMccRYS9mk1zRJUXQxpbc9DoGkhx97GYVquosoUMB4jLTvYhf72hvY5XuXPWitv6qJbuuKT9bf8MGaKhRTFRFs",
  "key4": "Q7UFL5QjGBYLgnQTkfZrWPk7UDmygosiBqfUVZXpccw74JvspGvtZFRzQzHq1mCzLk2BQhXo2CSQFQsZcUhQkcq",
  "key5": "5X97ZqN7RgSEDKrd7RmbDDtDBs5m7ZRur2TSJ3TyzDZR9GaVMWhu4ZABTsyxmn7viUTfcT2o6LiakxT5LVHvFFeM",
  "key6": "2eSpVsQkZDZnnyx38ScwLZ9t2wDZESqJHzEjgYPFGxE8fR2iS4ps7KWRBNQVHDh46s4Gqt5k6i9fZmYm44YDp4ty",
  "key7": "3u2QF2bxQWqbgXSMcVGCbhNhb5Fe9QC92Nrj2jee74g9Dr2n4T2BgxLrT9CCs6MfQcoMrA32nRnrWnbHE5WtbqnV",
  "key8": "53ZQgT5UV4steRTXVKFiQ3ViVZsEDrbxrb3a52q7iZrEsmnjPXi823nyzgQCmH7URnMwpUsjWD9YcPesFy1Bm5iU",
  "key9": "3ciDwvT64gvVMVe1XJAsZQKmRQd2eLuyUzh6mRam7oiG5LYPQncgD81JgY9uXj9Gj1S6R5W1q6qVL4FZPLEZkFGC",
  "key10": "55zU6RXG9zAPTFsiLHGTeDh3NGwgqiZcJVsf5wWZ6xJRZDnLdZNf42gxMiU4ejoooSfbRyZuLpW9cVUfD338cw8v",
  "key11": "7AsiVWFGisnPrfLkWU8uYfZZjeNMX77TqwAiZYYNpgjceg99ec4E8R9bgQKBNaqCxeoUhcAx4fEsy5fjmgaFj9R",
  "key12": "3SKnSWrnZjUfnZiDroiT2BT8TeBLf4pyPbabyfhz7SNoXhNd6psbERm53J6MVKPgrGNxjA4THM461PYGYu7b3jG5",
  "key13": "2xiazXHVe5KLcqLssivnZEdx9JmFYCdekLcyjzX3Kq8p3VDow3Ym19VRMw2siRU7Hn4wX1kfaB8GTjiiRbSvp3Jd",
  "key14": "4xa4SYn8PQk1RZ3W1jkgNQAYsDKVBno4iEUWyxg4Ahttq9nfKYnkauaZoymGABeQwD9qWkkanzQdVord4cmVNTQ4",
  "key15": "4Lgn9JQwptEDndfhygVBf68xRmEKQujU6W5YCsjfizA9p4NSFcpihMWXY613BJCLEjxzkNMz5thkpMdYGUV5gvka",
  "key16": "5C9cgr1GCsbtHzstU8pSxnxpB9Fykq9522BjLAbN929FnivyoyE4kQwrQN4qGePk3r7nswotaJrm6rj7i99mnLQc",
  "key17": "5kRiK6G6DvfsPLKGFw3C2zhYHwG5MvYpvSSCuFUHU1LMS92eTLPzbU71WS1nBcrJtFSVDiZHZnxtLntazZYfYoHg",
  "key18": "4xALuMxP2FTtBKiFKMrhoFyMRBB8AbniMW9SW8YYvAVvN29WkcDES6NACfyumvestNH6XGvMHkPn5H4eA5FAhSyh",
  "key19": "41RDEXBg7BDEEVJavbmLkKqkEULMiuvwxRBBq8wzAkbk5BUABe4RX5CaPsTarRAjJzejnR85BcqYPwn3Affs6UMM",
  "key20": "37kYSxEuvDweBtQQZwwJ4kr7zYHbviVHSqKtd2NVYrajLnzBWcosopGowN2iW6pSH1WR8JsUR8GbWD4Qam9Ue7jQ",
  "key21": "5eizaH8fPRQDwq4wX1XQsMQkHn1wf6gjQYzWqbjastA23fZCKaqSFawpdZRjPAGsn6HX4PFmV22UytYiXKReX4LK",
  "key22": "4gKS2BgCBRVP4VBVB6McNKuT53DKZTpAfGCLXWZL1xBvzNM8VJ1wcFSYgEYp45Brk1ySCy1TXzFyiHrFEmyPHoEN",
  "key23": "4xN7vR6VeerywRazti8gN6XwpNmKYv8ydwF6C4VSJu5tATmfT4bUWTTzg8yrQc1UvBBwwdxheBpiVYuGGiK4CAiM",
  "key24": "4YEDDAfUEgzYdTVirXbt3ChcBTXdT3wWmQouRtqS4uG53xft1Ku685rLdUHGKowbnAGftjQcNxn5hxWUwhK2iWb2",
  "key25": "4NMsLGcWoXZTQCMyCxe2AwGNQPefzKWfv9BcgYpoMPpkfXHP5GcJBb9DvvsaPgWXygx7iJT7VgDBkGWUqxhK828g",
  "key26": "3wJJN9jvxfD1YgupfLvLohzkBfW5drXLa9dXjNG5uomLxucKw17Wq3D829pF7vX2h2TkQAQHFmTXotE9YTxq4QHL",
  "key27": "3LPMevE9oZtAZr2CL9zveJAKSBTxqnhEma6T3XLwpSU9EqFqwsUd6ftKTyva7jf5DasypDZVNT3ZZhQHkSqNDPzm"
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
