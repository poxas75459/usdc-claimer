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
    "xiarfHjNxc3jac4wFTZSLSh2MRqyiAjUkYWEo4rqGhVpxMBGpqQyhW7ynpjjzwvXqwymJ16p49LRZNN9ytkWPeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mXKBLmarLdcTjtc6QTqJnD4b8eEfzm3gk3Zy1DswZF3i1HDkPLfKUkR3Q8tyD5Z8i9upKq1tFWt9LZiZDdTfzq",
  "key1": "3XzjSti9DdRP5yJqycoGfxqQM7hwyoXKTTTS2wFqcZGY34xSq3ehRkF7o1GwWfrF9QUn2u232cfzTJ9wSvc7tqku",
  "key2": "Ym3GjPiMg34d48D7gQsxDBf4YKzYsCShiB58dmQTyxRswJ2sUKjYs3vS8dpLVgWuL8uGbZH9Atb2zLdMvB92vmv",
  "key3": "33nxCR2TpDU7pbqwpQpjY3GdQrQUvSZw8mK7mK7og7NseJcws8nqF1cGnkMBra9CLmkB2QABs5eK56YedMoXmxkb",
  "key4": "4Q97DfiSmhTmVumCTDpaqVYk3THkU31Q85HNMjQbJTRJ1xT1yxAoRdUfFCEg8RDHMBNFuRF8bSJawBw4yfdGGjjZ",
  "key5": "4stHuRLyFrQwxvnuDUxxyb71kaufnN9Bgx4KT16Ltgi3ULKjFNuonvmnF5fgC12PqN7QYYXwS3XiyTYysN2g58Vm",
  "key6": "yjjxumPSUxL2ETPNcCjRb2gMAeJvcDtit8HhUfLorwEkgxSDfzpSi36t15ypWigK3aM3mMwGsZGEmFtdz9ZxQWG",
  "key7": "585PYc1qYJcHKcPPYV4EneEGxa1CyoFi2k8doRbQss6bYfSGvibPqyKZHNkdHtWrvydmFuqUUXexsJ4Qk6SV2CMi",
  "key8": "2ZK8dUfFh87ZWfCTWszJxm5mxu9d2kRDXZjUdbi2FC57XbYNKjfhnnmHx3gb281FqunYNWaiY39Xgr1Nvz48FKRE",
  "key9": "2jA4dTR2ejJ41KnsyDimTE41RCai5x2CNYNY8JwhutXwrJrCsaZnXXBbdrK8RtPKx8c3mF5WZiM7N3pJ819EAjAb",
  "key10": "65BkxP14PNXeApeGkyNaRi14Ma46amKcmUFpjTTSf6U2ddb77rQERxwkN8uYCQ7EtDUqqcAMEztauYKBsRqy8axZ",
  "key11": "3Q3qKeW9Uat1CibjtqNwso4KBwJuXM4gN4ohV65AzhCTsJzS96CZejt1cRstgugGfhJRdjs8Xh6FpR8PBRMuDMxs",
  "key12": "4EqCriAPJYQambdKTQNdkyut9q2kA7QpcvDXFknvKnEGdbM5m6PhF8Cey1NMuos8cvEqjXtjLrJauWr4Yujf69du",
  "key13": "5p8yhSxXCKBDopxzCnbxR4io94hCTLWeREvHwfemCzPHxU2pN4x2FMuECdqZYRJZZsxm7HJbaddLtBemBvBswphf",
  "key14": "MtzRsasxZsLQrdBEDhYxTTws1CmpRX4xM6bLVEoJVGKdFFiUjhYwAURfWBFVpcxHXiMk5mVFRDpp5Ey4v6jbnd1",
  "key15": "2WXuEKkrK9jTdPddPaqQHYxCQw4dhPWSq48aJGr3CBQWipkviWtEjuh6GUARrrZA8G7p1FcdQ5hPJEzKuU1HXfN7",
  "key16": "fyTPQttr1RDf3N4xJoYeit6XXkugJUWvU1cae6BdUt1RcTn71MjQoogZ8WqrqikBQyCtcBYAVVzazhxtKm7WTqw",
  "key17": "61zeR9bxLhFKFAXsWDMS4YUoeKNDPbXSZVWk7NznSrBBLb4ep5V9aoKUNo1aB6qSmje7uvwgbGvYim9Y38qfiS5q",
  "key18": "3iw4LuwzXUjaVjFUMNtGJRnbTYnAyUgdpd8rH4nKWmaq9zSmkm1QC2tao4AAuMZK9Ken4LhorjiFncPRiZhLvGKV",
  "key19": "3ca8hpwBg15MqFEoGpZqN1SLqdbPvSaNyb5qkgL2YtEEyo6P3AK8pQNDCkzwKh5sKkjSnu3U7a9T3SZA1NmYwiRd",
  "key20": "s8k6VAMgK49iSKXctPWWvvHPSsymBNsJ2chYLDmewZ7FSfmqHQ1SYf5DhyvvZN4K6mnLQqA6RZx7BVapXxVMTKJ",
  "key21": "3qYrAhqis2r7vjA797o33yZAthDcbEudZYS8Yhu63U5iz7R4zb9i42LZkpG4jArSy8PscRNk546iq6qQqCxWwHrK",
  "key22": "3QCJZtSXcXxwDJqDDksu7hpLV6TunvJ36AXHuFUopNEzhGiC3f9tBv99sZK1opuWug6rwPtyZgAuYrEcDtY74kWv",
  "key23": "5yuH3WEnUDtEjQ8JagLHq5jXngfrT7rm58YNWg3C3X6R7EPiLtahYL7t6wufL6ciFpgSxLMwqTbhc9F9b6ucowgM",
  "key24": "2FLQ99otfjzgaHrm3moQYWGmScVobDkKvCZfyFZACpbzipQqwW8KnGT7dEca9XEsioq4Qzu5S4AhRvAeCAtyz3ua",
  "key25": "2JEiaZ4QXCjrTV83Y8W8YxMT4X7yZiTHQc4ovt5c6de6fVMw8YQbTxvMTmWhRryZ3QVCqwATFxsGBSB63f6KgcTt"
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
