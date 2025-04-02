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
    "4Emtjd8ueoEPgSc5g8LSJSoEf7ZfwxzMr6CPe1wsaBREHS1EdsRzUcxYSi7t7Lvrst17Pk7BakbVyLvqjn1wj7ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2HJvZkWXS3URPqNYmR98nd67Hs2rQkBao5xF6ST6rQcwncpQQazExhRsf1NErrXXB8HQWZaoHaaMah7XQe6nTP",
  "key1": "2o5NYiSZerDFDn7PwWCR8p9Hrdgk943yDQ8xkLBrcJvqXU94QVawB96ucvgKhxunXu7vFv87nuVhf8bh6aZsdtwA",
  "key2": "38XyYN6GNzXa4WhfNLV4aLeVE9ZLWjJywoqJH8QXueN6N5oiQ4Gj4N1cXzF1wZSTtRZCgf1UMVZ6kg1AxA4QurdV",
  "key3": "37FriZjTsPTBdkBRvUCB2RuXyBVFxvTsEgTAKiWyJXqShp7zC8eqbG3Gh9RWDLcayMywoPnTzHFJiJz2x1671q8T",
  "key4": "4e4U8NuYKfobdZ4T2JjjBUUccaXUEbrNGyFke9QkbfbfXhYJZVXJV4sApTaQKaGGhEZb4HiyA46kw9vxQ7uUU2kg",
  "key5": "3NvVLuxaKXocdB8kCHXMoVxtLYkJtZFWXzPYmUQBALscaDRJryJDmntyiJXTEnwQSbcqo8owuZSGyQtqMUNwjHXB",
  "key6": "PReo6ii8zhhB4EEVVXiWnNf2whkmgUDw7RSE8rLaAiZqX6h9Xn8yRbeFwLYVq67g81iSHAjFdxde1d3yX9v45NG",
  "key7": "3R14mT1KnRgrFR2mbjEscS1cEhHSDEbfgjLj2rLvH5fV6oHYG1Es7o6JViCXiHaREotXSertRj1ETZuAJzmaPTTP",
  "key8": "3punki1ncwPU3fDyNhZNZc7iSLNqKAXTTcCdh6HibkHrP7MDpE6NMzStTrxR8Dc3PHr5PtzSYP2KCF19ofB6DjfN",
  "key9": "5eZNumgRjQF4psT8YPnq24QTQSLEUkET6V1N87oD3zioxqg1zJX7J1QkG3Mzzf77E9Z6tS4SjczAJrRkx4ikenHz",
  "key10": "RTyyHBaEwwPzRxZW6BWrZ14ZtxiTACBpkGKgqqX3AEfYbF76hACmsesBp88UvjQscrCbZDXQippaVJiqbwxGShx",
  "key11": "YPeZScWyTJb26A7jRAyAvdoHnS4RkVA6aqAucad2PSb3VrSUzvLtkfrAy3nYzUTj4UPUaYg57e1xVTWYzjKdJZT",
  "key12": "5h1BVMtXrkgPvq3PCayaQaH8zTnWhKMMzrUgdS4F7TFL7yGNp2TR29zLZQ6AcQhnEFFYbGAnLrvVQFKnjjRPFksw",
  "key13": "guMCaGPw9gvELyN6LLRP5s9uXHEfSK86QtvYnGQauYkM8HGFy5XRxHpnUcnmsQdg2LCNJiQ5gnSA17pKbGUzuAj",
  "key14": "3egcePBxxNzu91PEVYdoHgJPiAMuGYuMy69icSkW7CqYEwsgH1e338nvd2MTwpe1kbFfZwTzdwBAihTP6j57aWEa",
  "key15": "No9dZuDrPdBYeCe1783Nr5mTZApokyfT2YZRfXnKZuh4Eagrqnwa13DsCk8EGK3JtnZPtWJLKthUNWHZk5rdajY",
  "key16": "3oSQr37J3XbsQM7bWjNfDoU5h1dfHDwNQiRr22wXJ2emrbS7P2TnfwgkSVTGDXR4gUR4SHNijstvgSpS7nPMuqe4",
  "key17": "4y7gKQax1pUQ6QWNXtvDTJH4eJysyY4UjHbgyNvhsMpgivCTV3FP1Tho4muognRXMwMo7VfskxULJSMUNH14PsW6",
  "key18": "4HdQjzjh4TPRY8aJhzN3p5ph3SEJXSnfRXeXrRv5kFDuXwetWQVuVXBpPBDG9o44RJGyD7bUBFmXYMWnHZk4Biic",
  "key19": "3Hxpe2PGMHeKH1Snaf6CuJU2AizzaqBwYRegf1vHA3dH3TZydw7dhnaNASuoNQRojJ35pBVfLwM9FXpZYrr9CHod",
  "key20": "5zvEa6Vuc8TzYYCJXJBFpieSLd5fJRyyPAC7cukbboeYTvJJxFfAoojjqJns83qkjg8f5YBfuKNeyQmsBt5MssYt",
  "key21": "66CyScV2wiseLFt4A1U5yDLsjEvwrVUv7aDerbnRU1Pih1e1yV5dPDpRDZzZoHijskMjKYnaLe3uKnyQMUnQGEJh",
  "key22": "4g56B52oaAKr5d3Nch1w18sjLQLoXGPYkXT4cY1xG4SK7dKCMtWxdYeagtAuzEZsxz8UtvaNaR69K2KekVn1iF9e",
  "key23": "5tyA6qP7Gv3sQfWqhdj71cehUtnikwZREERJbJxzLgVayhMZS6bZFDWu83pLJkoNrMJAQLBHVzUS9QSDvXC4u71S",
  "key24": "5mSKPLWeR2rqkVpHUDJ46gc8n75tV5zVGnaavWoCHKgbARL6Ki4neqYXbDFuKxoebRSvSJ8qiFXmtD9TrVPPajwM",
  "key25": "385x7snJsctYTvh71yXro2QeGf7UerCELPmE3CHfpirjKzGkBrMosuM1wfWXtoeMVB8iVe95D76cGHMPMjK5Vnxm",
  "key26": "39omGTccURX3vaN6Uo7MmJAksLiqSg5UMx7wTV5Gzke2DzHvEgQKeMrakb5LtCuxdvsBWWxbGuDAVK6Fh77Ebpw",
  "key27": "5y3qNuVs15EvWufwjqQqU8ar2B6nxJCc3MWcFKEEf6awPbDg61piyGRLszxcw6ppPQULDCBVmXbPjp1TAhZFzxtQ",
  "key28": "5naJuaWG8vvuXhC8Gj4XAumohTevvC471aciHGweJ4tV8c9V8ZJWUNxhH5QPh6vBMkTYwxUN3eEnUAdkZERewybA",
  "key29": "576o8FFQky7phGa7mCUrskACnimAB8CGpSncvwvAhFYiwcmHut43CgKLPbzdfNV6AYbRjDj2vbVjgYR9qsFgQv4v",
  "key30": "4A8byhtGaPNWqTCAUWfvo9Mvc8rnhR5LA34RuPQgsasK49hJbgpWLJUmhHwKoRUNZBgg11J4tBV6dE2GjDXiYLtd"
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
