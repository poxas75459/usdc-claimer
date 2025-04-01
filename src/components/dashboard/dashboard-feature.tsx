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
    "2xGa4wbTzuiZR44uxTGMnsmkMQH5v1eyx4tbVkeUaQGWZihnBdMY47NmiJNm2zkShY3qiHqBxRMy2puQiaBh3Mwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjegNDAUcPbRgc8EV38zn3HJCbtMUnsZFuAGLdd78NFgwi6NhtbhGtb9Ri5jPESW52JKNTSg2pJUNiY1vYhEB36",
  "key1": "2XqfYPbKWGMGoetGwCG1SB81Q9Fef4fX8ZnCwtU3wVsPA4Dt3s6xa4KdjtxKg3cknGiDec4Vjwanmux9QY8xtXqG",
  "key2": "4a66oXToqtDspbbJLmCxxM3bS2ch17AEG5JWGrCZoLTVbzcGpTUznSa79jVwpt22QVH6mUxBUAVxsP4vc5fkigsP",
  "key3": "4CQfaQ4Rut2iCXPEM9p2NiYFeUR3xdCmLVwiR3m7YhQxBf525EGDdqoaeuXjGV8dEPasxPTuR6BycmziAuYkdSMf",
  "key4": "4uq5rHDGDZxTdwWL8uYQ3miqhk2Fb8966UwJos3ja749Y5Adur1KSAUGE1LZ8AZd24U9UC7uysYddhz6KG3AqTCw",
  "key5": "2EdyXjpoE7g9wmHS6xQ3py74ndxJKhNtCzQgY75R77ey8yvG9nCVCwdCdo7hTf3RSeoJiYWhR71ne56YczGWA3mi",
  "key6": "4VvcdH4gAxZdM4uJoocgerLQJiCWtwYDJE8tESjADccScSxaEbYC2UDgQwj8qdpJhBztjnxNyj45GruHgtorGKi8",
  "key7": "2fJbsJNNac1vvAN8dqhHyZrEqM549kpCekCHxWAbWPCTjCVyu624ccCzuhfoXorqiEBg58HhgB9sRZTXn6uPWqrt",
  "key8": "2fHdUCbYzGsnuMFh1vXHhth4pmWjX6yCJVh9s8CdCJcfrEbSKguLG8trRqMnkBH6FWW8QuxjcnHWKaAZP7hxzkur",
  "key9": "3jpzKtXmvKRYwBjeSLbWuVXs6qSWDnNkhGdCtWYjeHvwGFDZo5g3zu26vDrtCwj66peSF7boeUaNh6aLBCYrSxVP",
  "key10": "3rypJiKnxhn4XtKktRvEAtrBUiTn6LQFragQo9sk94iQb42xWK3WG9yb9dTF829p3mJ25QG6syJ5T6vQXZbEo3tA",
  "key11": "4roMuRJASuo6kqwvei94dPWzMRYS8PQ4gRD3a35jKprLNJjbrQPwB6jM8FNNsbM8uWZUYbC77mHVvqNPke6WEhWh",
  "key12": "31VqZ291sxvzcN1YmxpewRGhhno4r5eyiKxuSmZh8Uwv3cvZBDcg7cPto4wpp7H2hkNZxMXZbGzRnz2KR4FEv6Zr",
  "key13": "4pYVJzFzoKFCVxN9u6mkj5YXstBcGfNPcH1J3gWFjBd4LiYJecMHCTnQ1QSRSAk6v6ueMUjSEZrfG9fSLbLiTHkx",
  "key14": "5JSEbpTrDoPnPkqvbVNUJ8KYrf3jdRoemt2SSGEJS884yrF9aZsMMca4JbSh1pK7uUtCNZvGYfphVjQtT3gBwDhd",
  "key15": "4MwkcTNLH2DT9BVqNEBpcBBsy31kaJ1yFJ1noqpM3dS7NmTYJgub2eJ7tgZdq75S1wDZLyXAbUvubkd1PcfZqiM7",
  "key16": "5RGzFjG7sGpcBfRHn1Cd1yyHKGkmspPFoiw7tw9HCLT3dbUceL8HjxNBfePY9czYPuzRzUhBw2YiG4YHDookX2oJ",
  "key17": "4LLUuNnjBit3ZbqFY3M3WzWbrTcXnEwibcThQ79MDePy8gHW5b3rDCuinnCrtFyCJaGxQx3PZfGRyVHCt7ZS4kVf",
  "key18": "2BPJYyEoPEQvPS48TxjTuuuHX7zRYz19MmZuZUDAQUY5jLRiyY3XMZHwbx3GLtXRjoqtiWD4yBkUxoUNpw6yjGjo",
  "key19": "5Sr9zCRwBxtVrvzChGGQX9rKpEuVZNw1juv28iShLqs6ZuCm6TwU5MEYxcpKZZduCim9ApsBU7XuccFHAFWDdAFf",
  "key20": "2Egt5G8tyWhEbiiHNE6PjLPcqwKXQKZvLs8SnfFeYpT32cjonqVDjZrDs19pzr5CF9KcqdxvgnYXyp7WNuD2Qfdz",
  "key21": "2g16U3ejWiaPpb8i2pwLVuLcXnjHBeU2aPiE3UZ5qUxfMRw1vWvkLVnKmEw7ywUm1sfhkSW3LJR2ag2d5irmcB72",
  "key22": "5Jb6fYVCWJFdyAiusEFCWP9JmWfPeGzCV23s7xPHss8FZMSKvFkGY3VH3RwYS4NE755dpWzuP2pWQar2iMYXvBvx",
  "key23": "4Pb9JosxaCTS3TqLpNaeUWghPwNpjok7cdAfaahzhQJjNb7BGeNnsaRkT27VwVcTDesaHZ7DVRwiCH8uUvwdm4XV",
  "key24": "2goTcTHAWWkbssjH3RvnD4dTEKfbP3c4JHtLHh8KRgwbQyTgGk1hqaGm2CW1sfibk5kpAVd6XHxa3tgafiNQBVhg",
  "key25": "3yZK4xLLYdSnC5aAC8hdkcLmtgcA23F5ni9zzZibWHWpr2yzo2jgLbZupdqz5UfQ9YG2T9zNK4BR1RzsKymbvnJC",
  "key26": "4R8crrdegRNvX6GEDCg7c7JsEgrGckVNwu6HqANh3DUURALYhJhuYjhRvHTEonhmJzQfemR1CDo2DtgbcMazrRg2"
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
