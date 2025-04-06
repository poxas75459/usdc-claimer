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
    "5aPpKsBHp85P9xEvMSGTu124dLMZxf6xS6VKkDGQYpCsZvYxYg1JDvJ4zwYi9Y3Ryuk6ChL2wcRVYUNC5fY9EieF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LKgjAZTmG28DqduFhcP2FyroZcchTdQbfxS4jKN3WLHfUFHaXv2yQqT4zRAcLVsyMqgc662sURXzXhcjDmy5Wsj",
  "key1": "38r6fm9a5d7kdaf99x7bs3HB6v89sExTMxKfCmj3UaEofayuxvh98GEpd3Jj1pJRAjSgSWTuhASbQfHdn9pw2Wcf",
  "key2": "5rfxeDNg4HrFXGEMYytHS9iRLurAMnyasL7XAee9xKXsw5tx3LRxhsgxQvpCwdx9pr47CXFK6HFeaWgpKGVUbenx",
  "key3": "22pUixrtPbYABuq7eULJujTcuwJz5ijaYM4gZ1cmyuPkJi5cHhhubkuTSbRuQPzd6WXRcZhVXLvdt5VCxULH9Eyn",
  "key4": "5oW8h5dYQFYZdT1VskHPGzB1MQ2DqRf7mW2B1mdAvUkGnzpgQqR28s1xYtqqsBYLBu2Ly8MxMbg7sfGNwY2Wfgso",
  "key5": "3rK6jSf4nenUjBjrPHjUrPNwaJDbrvtL1M8qgsbVYsyNAQkTNBUTXPDWNLphTYJ86dt3qbWhSsarpwmCs7HKeHHL",
  "key6": "46GPHRDLsDwkJK1jvAXomMYKV7RALwFKhdCa3Li6XHNzbm1uayyRHnhXmwUsDnnJZD7JwnP4YUPsLw3x1CRfdnmh",
  "key7": "4r2LubfB6mmNWHahFNid8MjdLQCapNJ5MA93HyNhFpVEK7G7qYBEjCLvnxK2Sjg3DE7rSgcyMTFGR6N9bpnqJbTH",
  "key8": "5kzt3zMdiWJxAu6AyPLzEBTyuR5uZwm9wELoVJTBBQfJgfjM4Kv4Z5W8yxNv7veaKcR3PyJs6f2GmahZHAM2jz3g",
  "key9": "3NZPwPNNjuqTBcP6K6k4LwcbVy8qD8LoVu2RpjB9E3bWwQWsq99aXQgcT8AxUHof4hRn8m16Q22j4KJzQG2VhZ7n",
  "key10": "4bp3QGnzW8X8JyitZovgsFH7yofJdGnyiWzkrybqc38KipNWdExhYZFsURSBMazjsiFUZ4hqhjnomn3gYcoKmxn4",
  "key11": "2C8ofLy52FYG118JEXT26HfeuUoRPxEfqKzUjewiFB8jo24wHDRn3byxvKRRB7iVfhKs8Lw7JGv4xPqadVani1t6",
  "key12": "314w8hm7nBUrTSnxXjNTUiGUvZ4WxY3NTidk9Wi1piajWmSJo74v9na7CnwJfLwReDxCrzbr2hdqKbq6qyojKPtF",
  "key13": "3LTDd8MasnYznpmXC33mbvggdgoSobfEjFDHKHeW7gTDvBKL6h5qDPWpyfBAyMV6i5UC8q45hunkxFR9utftntei",
  "key14": "3S51cvbCum1oHSpUCWV3KT6PTrKQfqDc4SZrEKwAn47JWanZeurc6hTnhfFMPC4qKRTSw8s5biKpT9wBuy8kML3m",
  "key15": "28PcCzZqGn8zPDHCweafYeiy1zZcMrLB8iaw3hChmo4QwVS2RKs6HgEWFyo3AJErizQpnUmJGnNLsv8Vm9z8HgYf",
  "key16": "V6Q8pvDb7VEjzshebrdBQoLMUnaC4MKdX38AoiYwmeH3hpV6vMk5BRLriRSAwnVWBuLUNexqysjqNBNR5GeuHhu",
  "key17": "635GzuuMJrr7pLofmLL1ogJfNtSuXQs5GpxJGiLXQ21pXmUD2BgJoFWhXJjEsFdCjENwMfSJPtqTrQyFGrwoH5ke",
  "key18": "dpytuk6cqfizUM3K5HEeCRvmJd7YPmAJYXiKWAwUbqrQUJ6GkFscLRDKccD9mWXZSaWzVhCNvqrUqxB2VUqDDgE",
  "key19": "5MkF3M5vdctutYzT2UbXV6b6U6b5N1nA5Yn1irYTsGSpdMk3Wu4Yyxi6v1pEnzX9u8R1A6W9vTxBoQ8ZSnJfZtEt",
  "key20": "G6Lcit8yaLaiAhG8KV9341vfZKUfiCWWe8REA7dRg33XUEdmjahT1XX79KbqkePvRtNLB6TNJx8afzB8N3ufbox",
  "key21": "42ECjcvfDckvvkHFmzgx9XvwDCusmTA6cHZsdQDaRgfnPLV1QsTf9MycvdossdM7idPo4gAfXGkLFzRSkXch94Vv",
  "key22": "7UZyHYdrkXCgPjmioUW1N46Su7aJp1LciygYBkMNnp3E3t5YC5opqWMyP7FeafeHg2PRsrGzT5bdDTav5hUcWgE",
  "key23": "dcGT6TetNaXVSSDEkdJAxP7aKgiNebwrLKYa1xdtn4fWE7Y7Gua7rUj5gRUzW47oG3ESFuFMH56rDSncGGtrkA7",
  "key24": "2x1EuRXvRYWrjbqtdEksPDjvGKFr7t4s6hBoL9rGK95gJRqZc3HqdjLbEBzY4nD3hwtHaqndYCAWakPvomuLjaxr",
  "key25": "3Z9dtiCB598xrygzp44kuDh7imbvpLTmQBLCE9hZgrjxoB1D7pNDzANicpKKrS5F43ho7LuAHD68oSh8MWXTDmqZ",
  "key26": "cLXPtPzFBSr7ywU2EXsDUGuSXkoMdPBiNMbYp9PP8dg3qVAzUeugNRZnAQPdvJjiL4AwaKS3a4GdQpdTsRrEgA4",
  "key27": "52fjLhtLe7p9qnhRpp9oDrUsmPcwMN9f4RUMaJao7h6vY7v7XUx9B9sY7Voz7pPa7yScoD1F2F1fTdGZjcyRzDEW",
  "key28": "5dJFrJDF6hZZHToNZBWDAYa9vnDgG3hiPQ2JfJ5itWWZA3rjjKx4V289fYBN8PtipQfYSuPxEEjP8eAoqKRZfgwf",
  "key29": "eFJHeaS2vjWNGYHpoaz4AbHVCqvnwLHw1hsjpVE6v9TjMBbJXQ559wAUU9EAm84QCM2zTAWLzFN2DD5gxUgQypy",
  "key30": "3TAWsVV4JGCLP6rXPUq1ncVP3a1K4ka5RsCUzLiMi7KnqnFEykCGBsdXJVzaDFQhj34GX8W4NBGd2K28uDL78By8",
  "key31": "4Npr1MR3kVto3cfYgnj3CYUqBsogKYB1aFa5NMLNTpNqAf1pbMCpmkhoCWUi4Ucnm52P73fXcNdmdyAwJxQpF9mJ",
  "key32": "4sC9K93xjk12kkcBk9Aj8bymmhsML1Y3wPtbU5dZNJwFHfEKuZtuSTGvTDUUArjUoDSktDKgjXX9uAhvYS5VW4pH",
  "key33": "29PBgMgD7gPufMKWXXh8q2tEM17rpV41w44shdb1ffdY8o7dSgf7d1cgrxGS6GsNpzmFzJ2F7YWSDVrUxZrhwg7K"
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
