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
    "2xosfMwT6iUaCsECgSPw1rZaXhkNUW9KC4UHRBtPqcSowm19RmgpAbH4bj8ahmktu1wF61Vu4mFcLe9VbR3vqUaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoisxBFFKEV8sDwsV2CneykBhh2sWffvgnf8dvhKn1avMWZnqNE47FeMRvs5p4afoD7LafgrAjVP7HByeSYzBBQ",
  "key1": "263Bzqj8D6ubSzkqnXhfHkRdoJ2MGyZXXHANJbbChEfyET7pVZSvMEepTh2CMw3qXVSYcMn4jtBUAMmmvGHDmsJR",
  "key2": "1QooHPixGxJ7fuP1wAwtpcpMMxwWa2xU2tLwYeMgx1BPfrVLPF3Li3NUoEf3stuwjyvt296dNzWuW9QAj5DLgmG",
  "key3": "64KyshdSdEgMkkrKSErCcyMy4K1AyzvFd2au5LuzZifS2ByZKVvkwNNVDyjB2P2sGLBhvausCsRHRzqkZFZZzrnD",
  "key4": "5tfZirB556mPMeeWNWPxas5zfwXfoZXKAUFUYno94Ru3LqnNz3QoTrp18TpFZCtbDkMEeaa9CnDj6VdbtJkELjFx",
  "key5": "cVAr4PqFEQZCNfTcGh9cwhfWQNGJMnqAThLfBwRE9tRtA9aG4UDbs7JmVrSXAKL37CJ8XhPF4hVFuLPnJ3RM3se",
  "key6": "3AufWYKZRzozWHWRBXTsxopZaxkvtt8MyQX4ZoxGdAaw37ngtMYjHaFLzK8J7hv58ueo5jZFAfAQPJ8hGoeQBNwm",
  "key7": "2Fts25uUeCXVJKahUHBEkNYQ6dCUCGnhW2Xz2eyYZixXzTCxQwP56Sck9GNp6j6DN8AJ391eFp46zj1L67V2GUFa",
  "key8": "4GePkfJYkXYHPCkJHpi4HY5fzMerys8nD63onk1vmMPGwY53JtUZRBimwNbPaXHF4iG4ZyhaUKgcpAV7RsRogDdG",
  "key9": "3hL4kpL4HCdsq8Lf8YpXPknoWDti2L3UAW3uTGYsP1nDTSac1M4HUfHJ7huxoKrFRGg9k68Q7RAiAS1jh4aVEGJK",
  "key10": "4jssFejCpnL8mzceUT2bmHWGFGjQLjyBbmxFGXQgKNB3hNm5UzV712uhyF8TLm3KvjzwHNVZ3NcBMpKkGXMT7LeN",
  "key11": "54baywjcv6c6sJPTEobGXbMrJLdNGNHXq43QwG51LVYvdXYGEaCxBerKCYk9kgFMHsSXhmvzrVua48nCutyQnmjg",
  "key12": "2qYteGKdDFGpX7XnWbbiAvzC38fCXQ9FmUPtvfXpXR2aHDfa5nN2wwq7J6JG6w4hGGZidJ5GcU7d7gV3MiZ3M5Ss",
  "key13": "2N7gML3ftXyoNL2tj5rXjaPNyo8wuMnjCKUt36AXfELqRmzqxpMhfskKZibkH6k2fv8nUAdZspqP8XsXsXnMTpaf",
  "key14": "Lo4Y915bMgyejqs9isyCHiD21En2sTTwoNo2ExiceDgaeTHybS2vBZR4RAHDzRrU4eHaTBeDSi6rBEYD69hSj1c",
  "key15": "4avYE8G47Daje8RpJdpRpHqUjjcNi84Dhqe5bV7j4ndCqd3rgXKEWXG4H6f3NdxbSYngch61EZFWZA36RKJVda8a",
  "key16": "3QoCs3pkYc9iVCUjeNsT24RrCg75wVxndtXp1iGuvs1XVnXH3tTgYLmYVHzJicDjVh7dJ3MSC6jrAfy3cxCg3ih2",
  "key17": "f9VZ3CEZBnXMUSAZN3DiuTYkZSs83KcZs8sDTDgxiivBHoCNNaw8G8DdAq5iuY75ftxK9CAVRQVKju9SdfgX5oj",
  "key18": "5TqRNousd8KgVzwaacFoyXr5N9Cy2qraawxwo3GrvAxDFvvBMLe4ZaArhLUU8acBYMXaPW7cgosM1QWY6UuNGooA",
  "key19": "5JXk5vB7kiLK2RiaFvGWh5z27NcXF5Jm53ZBycK5nHNn1nV7Yh62WdVQKyB1NibMtNa6Twvh5ranxzjQffMqnezN",
  "key20": "u7tybKQKPRuucBuDrNhvUMKujTa1HYTjqsz32wHuQnLRG4c95SPB6E8wJ7yFWBaeDbQaJTqy8nVA2Sccizp33eD",
  "key21": "4ixxZFBcoApUx5mtZJH35TFBuo1x7DjF98FEVH6r6ie3v6Va1KuBZMu25C4aQVFfqZfXZsmyRZLcZ44pLb4SGDw1",
  "key22": "3iQQbYo3uvZs6ruxKjf6pMgkkPuK4CV9vFZarshFfkQofuh6aH54BGJzha8Q4R95ST12kWkzDwvt31UzCL4hGmA",
  "key23": "2pXEFRqnezQBd1WZmixUDDM81jKWbZqSHQXgdZTkwgBLRczuHuVeqXWJ7pEFk31NTWHmx1nkP2RowqvkgtCuhCog",
  "key24": "2hXyncTroCg39jotKykk5hUizHG6tbTGi9CBKgefGzvpptbGAw5kVMrznaKJm9MKqiNwSkE4Mnzvh9yPRo8Wzsc7",
  "key25": "4zCBekzo8wt9beT2Shi1CFvvMqBu75omLzfAmwtsFunThYA8YwgLYAoUjRMctx8eBnvaXAWPhP951wEykdrbN8mc",
  "key26": "4Qc8hqYGTUVCECJr2i1JFoegtpKF5KAsj3c4jkT7L1qKefRjkJk2BiLwW5nEJkZwYsy4jRzdKVEZrGc3tpY5ospX",
  "key27": "4gCoj1gaYd1nPvVfv2j8WPoyj1N64xfVr9fzVHZU6hhPTNoFqfuSsPjZfK5wnM9JfimPZL1Wa8an7SpWFBH9o1rG",
  "key28": "2NMXcCtcfvEmscBHt2TrgWJtZWx9hS6c6miqn5qPsfZZTamvZ4eqUxWigXoa2NEk5rVE8ikjH92QLf4wDw8XouEV"
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
