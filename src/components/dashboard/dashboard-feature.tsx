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
    "hrMiMWxYGNhTvfL9PDzoTMEcw7Sdf4WBDJgZv8zNf1gymVQ7HsyncjnhTNYk1i5KA7uK3Ce7yfGWW2bDphiV5XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLxNuRoCxZuxptTwu4GY2Jxf2JLzu1UApcHa5EXNAmiUS2W3KNMquv2R3dKAkEQenspMNHu21yUiCGvWcwgZzBn",
  "key1": "NMkMQBYGEbh7iCp5X8X9RAH53LW3jsTCZsJKpZNFjdN4A7iuqvEqD8yWgr1k1kJrsuQ9meqWQDSK9YY2et4RuEv",
  "key2": "2B86rngDowUvbU3KHLj6BbZWQ2nVybdZVaEr4YuADXBYBc544pmLCksjkV1Ytx3ZYMMwjytyqN8hHVDe3V25NVoJ",
  "key3": "62HwTDd8zYMZh5kWCeiuuqEW2RPCQTN3syqu7puqrR4MCpmnNb9jTjJ7UfcyHZUGtN6AuhfnXn5iuSqxaEEaNqyh",
  "key4": "5AyM16WbK85FCDsrvuLezxSs5iikiuVNa3qAwKssS6CWRu9UjFs5ut5EJSstjVd9bAeMUmFaTdwvBssCGVDJpmMY",
  "key5": "4cZaSncXy4HgxdXicWrDg6Vjwr1zZ5p1ERtcJ7kbR9C9J49VhGSrW9Ksbeod7kWn7Wg2KduMU4eYVm6yrYzobHKQ",
  "key6": "ebYUHR8SG67iMZ9QXjVaDVbpoko6eZFRBcKgGQJQgypKkLVJfCpfGpRjqDbpmFwV87NXuFkVRGNPNTKNkTTMYaL",
  "key7": "5mVQaTYQgt8YkyoYik6KnW3HbMb6E52tUXpDPKVo8z2K3TiipPcaPCx86XS1wYSHDBUjpDk2SrMDq6DmKQnyinjg",
  "key8": "5NTSfArzbXj43e9SGrZAmK1hm2K24bERKdwHmU3JgZhUFZPQqC5uCwB74q8531GjcgLrqWdvi2TwhxFRwoBPaN8a",
  "key9": "21NwDmGisHmxYr1kfYgBo8Ln8nQSp8SZ7YxmYPfkr38hg5CyA91qbWhSakEJehTiQiUUPPDZYAcH7FwfZeJai6QW",
  "key10": "2ZaLNWY8Do8FAWxEoTYDajvPAnh75WEKgvxJUiuyC1gCjWxFXXnfx7xjTkEsh6Kt2WDKw5fos3b3J3TT9FrG1Z23",
  "key11": "5MxbT9L2EZUQaRQkeT7BjpAkVW9KnU3Q5oQjz1Hcz91U8RyiyMvdoHVenYWbpZwjvNrVcxd2ur4kGhjeccL1arvA",
  "key12": "44odwvQyhLt8c3FNFAK5mCkDTZobCv7hwDYX4VpJ6ZDyxSwq4nc3V83ZNVXKJFFw9nYfVh6qwcwbi9CQKXYLGDuG",
  "key13": "28GgkZ9B5xcGZ8XmizoKW9DxZQ9vJXN2uvZ7gKVRRqKCRbLSrhVYChoqDxPT6iN33P66Zt4dXTMKQSvwZRduyCD3",
  "key14": "67aHvHL9ndpfStT8YnmKvSE1AdKhW8wVDQcYkn68iUVwq2Bj1egagp2fBNr2F3T3YDAohdGURDo8oi5ua7TnZnGb",
  "key15": "3oMQsmZxpqaQDyYmEh4ApbuRRtggDvQ1N9m6Fivqyy1nE3xuHvyUhGQuwcBmwm68oK7dSXdfm5bVmXs6fLRigCQc",
  "key16": "4bC5rF7tWt6DFj3PFoYPYm3Ruu3jpxTj3yKJ8D2PrMd3BH216YjEmR4JhE1FqshqLrHe7mKBZVkhaDWq4awCTBxs",
  "key17": "4Db1sbGkTm8MdqSzZKR1DbR4qdCSdaFy4jiDaacFUUWa6DyujYYByGxwFNgxjBiK8XjTKMHbKjkt76icWDeLLhVw",
  "key18": "d37HM7sNEt8rKHN6B2muUsCuAVN6av5HzvcG4RsvrztpcqXrCidwd34dbdoWKHMVL178oY2uQSxu46xNybtXr3Q",
  "key19": "53UdS5tJFeB4VwSxik4Ngq1iFKhyFH3iXeQP9C27og882b7Tc8fKC1jn2F3Pw9wmKWFJqeSGYpFCHXrNExTgs3cz",
  "key20": "67Gjix2xFkePMp6rE9sArTMA4FDcg4ufLSJtj59PBnEsTdBZYBzywcPCnyw5z7AmJ3zgA4umhLHkrsjShnYrcWVY",
  "key21": "5u2MkKv1WVZ3d2nPEfREBPENUiq5PDueTvbEDmzmMyVHWNy9Hui8RvB9BxfoiPSBBDFkhyDp7Eb4Rwgob2q9ebGY",
  "key22": "5e4FPZDnXi2AJBsDWqRFXYg5whSoPRsFh943N6NvchichysdU2MjkHub5fsZBwPEHKKLgBrmtQjhTX393TpeS6yd",
  "key23": "4Hh39HvrLJxF4PCK1qLTyBQwQYpfeDdsLMFBUguPz6rLgoLWzzCdpMhXNqvHZjjg182EzvrR4NzUwUeaeoUt8xSi",
  "key24": "23eeYoBtBfz7vzWxZ5HscCmTigR3Kp2p8ZeqBqKeftMVjiHLVag4fDrP1KRcgJYZABj3vuhF92YeNaiBkByhS27G",
  "key25": "5qnomz6hdgvTsJB5wCQo8mPfJMy77bDeBzonsNdQEpKJn8dmboZrCFjC2GdywHV815NvuX7h2KQ6RxS4oCiq2Kh7",
  "key26": "632u4TMwZkzQsJXnzPP8PArRw1itPCLR3pxGqCLVKBqxJQPoKWvGpNQg3kv6S4j8BPJvS3bx5aSbCrUCq7C24AB4",
  "key27": "2zamLf8KyhGLQmQygGKq2bxvmjafn9GhkC8MicYheS9fK3RR2gwnYoM7hLNyT1bozMKvJXLwCX1b7uKnbbxDmMeo",
  "key28": "5vjK1UsH6do3v6qN9QsSAi8YomYaX9J3NQM5Qs9djRqpnnTDSuCyLREQ2sJo7hn61oDW9cPhWBE7fntkjtVQPQcs",
  "key29": "56oLgprytEZgFeNoh7keTf8YS1j21qfqzLLchK8UfqB9pLwbEjU5hJZ1VjQJJV7Z23R1XH8sh4XQGdRBGfXDKE4m",
  "key30": "4mg7YHqjNuRH8EDCDEdEo4UfrT8mDFxi3sMxgySVf9UkA4cgHwpoJgMUb8WNfoT7DYdPSKJm8ZMqCW2YwZJqmZRZ",
  "key31": "284ASdsCsDc73jS6cr4hB9CQr3JZD5hD654M8kd8zHnuyvRYW6VjaLCaJwzAYzpVYGcY4hgDjDamFEVtAYsgu6aY",
  "key32": "fmPCLgA46CnWbVoCEfwjffwcbRecfVP42qhYikD91r1hF3cSpcpSfg5NgbrEE8zvYtFVoN4hUpBcrjTf5X5zt9k",
  "key33": "3cb3EkqPKuDApviAzgCCufxkgUTeWYYot8tRAdghxZCc1BdctsChgLkMiLp5qDWemzMEAHvnQ2ryQR2s5jJ31sKC",
  "key34": "4rB8aUTL9jMcz4WawB7RUf5ib9CqV1ADV7i9fSucgcqyyGipBmjRpvEJ98mxCULzcxvBoCLpvXmjv5zRFHLTsucv",
  "key35": "5j7bpF9zXpFRZAgnJckTdD43iAYhwBs7HxgxSfzvBVzXSCmSTasLBKJSuH5jqx4LSDZUuRiK4Kv3GNrNbt9ei5Zw"
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
