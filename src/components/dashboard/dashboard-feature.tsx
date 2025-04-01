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
    "qPjzWy4LWrrP82m3DqjJFYBPLXJNjVyfek15oJhZB7aDgrhmAZZeKyVjHFqtidQXCbbJKPsksBo9iJWyxB2TvKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeGcVLLab4mBbvEat8hfXWncMJf3dNaNSR9dZYunDEFmVi6PGeGtw3UZMgfRkyMd8LgGiPewXxhVPdftrvJsBUY",
  "key1": "5i6gZF8ytziQzefakjevCYWffP5tmdttoR3dxw2TPi6BvX7y8eXUuFkzy9iiiC3LPZW6GeQBkE6Ptb1oUa68hMWw",
  "key2": "3MXqkkgmxNPFaJh6RsgHr45rCUy9bDDaoae23xedoH9STuTypfK33ZbBXzZ4RjT5WGpRLyLXvdm5CVZhG86s4CiK",
  "key3": "457tJEj1GmTucoenJ9moSSEd7rM2vnz679SVUSKZ53acbCFenLYX2HknHAoM83YiLSDTkKL1JxtYQspo3NSf1MR7",
  "key4": "3Tah4TvX6LvDwSN2d7bqMr6HE6ZsU7QkU59FfKS3Dcf9Kt1Xj5ZqTuf3eJi89AbD7778AZaEMhDyZkbT5fdDeTiw",
  "key5": "4tGRrfKjSoBp5G1XJaHVtWN4cvFv8AaWsm77uxtG5CcvD5Tbhs2RUswQpoAsffqhVxbVizjx3KH4NrXmFo4Y6zhP",
  "key6": "RB7Tet9fv5QnJKNhGvpSPuhFV4RvKbYHDh6bwK9Bk75Drjeq69aCpmqrUrWzTBLkNHmjmutAo7LDzTGhkfMATbC",
  "key7": "3aStxePQ3rjN9vQU3T7DN9L3sow32a9BaZSCVRB7MoCRVnZMN7FdNpaz81LR6zHno83JQfqMyabRPPM2FFEsSVCS",
  "key8": "3LYVimZXE76UQWyYwKAmvhKPogygdD7d3adJLq4t3MJXC5Jn8mrqajwz8fssVNSug9eqmnaBNdrna9WvNAeQCg9A",
  "key9": "5Em57tfUsfiY9gePHySnpabb7nRSZdBxGCYABDJGTjeuTKmEMtkbCPLHowa7fExZ6zrKC3yYCdMVZ8f2tNLgNDBK",
  "key10": "FH6uLKx5HJ1P7A9mWyxHYJtborJeZYMuKZE68uVtokQu7KnG9jB1jqDDgoTm4CSb8So1o2nwrEumz3pvsMR9UdA",
  "key11": "3eEab55Tb4C9xTLNCLBs9Nwka84Mmson26xUsGABtLLwKCb69eVM5HcNMgg7XgYYeSyjCrsJa3FfkQ4UsQ3gfWsd",
  "key12": "3ZAVZqdXv9vYej129SSmE2Z5QdSqiuxPxKjNGf3nmksVtHxrPHHY2t9qe1pi44MyfXv5vy6DFPZP8eUgrQFDDH9T",
  "key13": "3ejWXvdEb4vRPeq4wGBEk8toG8b5yy9krd3WaFCWAVpyZu1EjHFYskfrweEcY9P15x58kYpBgfQX4MatMjckfmob",
  "key14": "5ayRmprrbqRzgCHb2vZ8VfZebosD5jxDJMjeNLnbHzunfQZoEco4rvbKkNrVR6pX7b1fyStq6YKEwh35WvT62NiC",
  "key15": "4WwbpVFiyrsjhbohyonJ4Y8kTGjftyBrXDbddP5UQhbaF8Tdm1bVy5PeiWY8WsUmvH3HcUPghjCPtHjG8yM7QK15",
  "key16": "m8xgMUbR9nc8PU6bR8spqT1NxRnYswhS8SvYtyaEZTDFkiWnKSpYwPnJHS3rU3HzQAWgjxRZCjn7uXAAqXcxjhK",
  "key17": "zSrTBH2jPnoqVMDjQtBk9QgusjGMFr6xHcCCLdo8ZESFrBUrYXQubufLLVLnAC6681Ugzc26HtdgP4g32W64TEh",
  "key18": "d6TwyR5DXfv4haTuRUbag2Dtnai1aLgFQEPsu8GLogBqrsLDncgUiH4vj43uXcursd9jxGaNWr5NPZCYsxnfkPQ",
  "key19": "28ftHPvqT2JQhhDfdZsSBfmAaXqiKqLShnMKvg3FF7AWpiWqdQNHaKTVTPXJ9EWbBH6jwDF9rcgbEnsUtpxzWQcB",
  "key20": "5FBcxc2qMECFpRZdKTQv2wJVT7yPzq38BUTLntd7SfMQqmmA1PHJpJUgPZukVxx3tVnFYPHzZXmNUtSf4YfsNf9J",
  "key21": "rByyBmrPk6BZa3m1Q5eJBXDx8XjaBAAGdrAVbybbGx2mkb7wzZuR7qrDqu2VsE3HaoAhHEqkRmonMUtGGb9VB2w",
  "key22": "2MGpWnUxBLeAbCNvWyHAHachye83tQcshGLUidijyBvrBQE98rP9Kd32hAM2FBQrc5fWEmnQW3AYnmzKLHx9RJ7G",
  "key23": "4DzQtuFb1JDSsZSA9aKVg1dfkfX7gcGZat6Ee7By4vJPFxCrkybqaGunVQ4sZz2V85cemTiU4FN4GVwPx5Bz96Qu",
  "key24": "2qJiRGrHSPNBVgrMaKAYvUPcQaDNLJbdmdPur9vayUCmkda4dxH7uUQaY1Tv5k2Wu3wto1JFBPLrzLicLyWc7yAe",
  "key25": "4HoPqS5Cop1FdRFs3mqB6HdNpxw4dLb4Xi2Bs155zEtx4xX3jcoDrmcNB1BHXxKMxHkEFJe4uhonn5a3cR5fG2FC",
  "key26": "4oMAR6rgJ7gRNaHVKQKRNt7GimE38XqHAm84Yv9LDs8oEySDPaWUMqm8EYBQf84GRkoEq7TuXkxS6nTVEgdQdSMd",
  "key27": "5G286S9dkBkbAvhyAmRqvFKUWsQmVg6a5vkW8du4653TcqfEPvuYTaq9AqLsSpA4tJ52KrXFXuC2AcX4wjxQpe1C",
  "key28": "bBF32cWXV7HXAKbb5DPvZXwENtrz4PUGZqNnNhoKnjk3DXmibwAzAxQ5Syy42jYJWrabRgvvuzz2TxCSqspm2dr",
  "key29": "23QhBpagp8iuZMnbjx9JUQZ5LTSbjjUD3kS4RYgcZNpTjVP5ZNwTUPEi9zSTUouQxqv7k1irGAuj8XFSYDKs1JaM",
  "key30": "4hZyeRw9w8Jv5D9Xk6AybGVH7md8pz5yn6S6E2K8M588VV6pcHFsAQA55D9SUd8iq1ikhY9Dn6xtHb39mXad5C5",
  "key31": "4H9trbk65oQg5ypRLiJf3jMcjHvLmEHYCfSH2u3WqpmoKjWdzkJKt8LH7WcpYwLq4qusHfMyYdDuPMNyExEohb4f",
  "key32": "3frzTMRHx6kG4kS82mzpi89hpGRxvQFBddX1vfM2LTrjSJ4S8qv5HicxcjjMkNtfeUv6b1iu6D7j8tRxV6zTQR63",
  "key33": "5hsHanTZoDnCuTtwFhxTVuJEQjdKcCYxLUmNs5KxV8Uuc3w5uEgNakip9WYcHvBqFvJQ3SLFitQcfMwb8XRtQJnD",
  "key34": "44uu75Lxuo3nouG5dYbut8PVPR1d6uMLWSZfUhPNGUQsnEBB6P4ExwNy6oL5vv25nT6HsZHqepc79Sb2RAqfPcmo",
  "key35": "4kgWV3gGTqw5SW4tEgVncXchNVGq9vn9iQLkSF9nWxj1BQz4X4SVfTcKczhTbcHSaR9JqEPeJJgu3EYksehtUAru",
  "key36": "5wjvrinMKbVvw2tDNxFrqZp5JaVrSp2yNxkexBaDbQXWsrzWxWFkY8aJyHBBSfbTieR2aDbqUd4ueyuoribLdjWD",
  "key37": "3Mx2vL5mCTfykhh7EcfPdggHxMxXKm2xKKx4pcgd5i1hKQUGStmdjKf4gazZ9pxJs52KunSTxc5oBzVP8qrGFsAX",
  "key38": "58mhNy1qkXKzDzxfBW7ovVP4RGa6oGQXcHQ7FzMv9uJeNV5ftWtQz94XbU4wu56BfVuoz4DrTLpuxdTqXYSA6Txm",
  "key39": "5Fn43Xtp2gR5undxiPuN9PpRJYZxPGLHuvkkZQ4cXRp5TyCLYcKWDhd9uUSk8HtpMMsJXiLNpNdMMG95UpugLfxW",
  "key40": "5UJ3MtRbUg6FhqPH8WMZT4aoLUFpPXAVnCMnMotBBoxd7EtZ1eDbMGVGhCDopea5sGgWcRpgLBAGYGkuSG2ovzV7"
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
