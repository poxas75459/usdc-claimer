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
    "AiRrdYW46njT8b2Y4e6difoGsjJJfPUdzDSCRVs6iWrJWgv3n1LkAST7EYrZ321m1w9Y3AnCLKd1st8mNVH3ehN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMRL4S7M4Kpgyavmuj3mFX77VPPQ4u3PYPM6BZzL38QLgeKzo4DuYWqWbb9kRa56CB1TGffY6hZpcUTZgGroK3x",
  "key1": "2bhz8vcKAxaF2ZGjxnMkWbhT1PcWLU6kaWZkxXHsTU3FeGX6T3usBqNHPyG1HNkRkyqim9rdYmMFFKNPVtq7of3B",
  "key2": "2muvjCKzrWwyq5jqHA4mUcDZsTpYNfsU8XVTR7Ciydr6KF16E4rijndhabU1XXfZyUwAXUazveXPKiJqp3zgKHUA",
  "key3": "25PSfXLQjR525br96qiEqpaNNr8bR5cNAvXrcQCedGMgfdMgmr4qKfbKYFyptdJLYbPa5tcbEn6TnFvonbBfEMTZ",
  "key4": "2YfHCZfDbRsj5uQNnCgVGqQCJgZXZEZ9AxiFAVUCT8wiAWiuA1Mfm6cLevB7ZtxJSu8PbV9R1b77J8JzLxoHdrkE",
  "key5": "3i99ZpqT5mSAMv48R1Yk9UfNuiNUW3vEhwWri3T7KR5wztn8obttR3BhtoNrrR9wwTiyfNXGmziw2ewvvzYba6Lo",
  "key6": "2GVpJkPF55KXSC4h1wWKjJZnCCXFpqrcdiCSqVZFrCc8CF5FL5X686zsbdcwzs9FZm39P9Q8xJudWy5WaxDENi65",
  "key7": "62XShkAKAtRkBVnj5etDJZkxHJriLFBYBbRk9G5pQnvmgHmJykaCSLMPaQqAddrQL1VX5Kp5tJrEXZjY4YiiH5kV",
  "key8": "3UBeTUcqUBaQn8MTLuwnjDN1eWRFNPzR2YFU2qQDqcK5x1Yj4BM2wfDYU56fyzuX7uH7VJt9Y5ndVTgMN7MWfUbk",
  "key9": "4AymjkUVhbdYUiTWYXkTS15M6p7QK8f4rRBwUrkeyMZxagbmV7TagHAjWiShcqoTtqFjtmwtysQLA8DkJhNUpM78",
  "key10": "WdjxwFJT3VwqeAch5jf2fAaKGegiLhL6SQbE7C4CPcbCTcFLhft3CsYFrAw7PYmoZoXaCHCi39gvfzQpVXZ9pnq",
  "key11": "2FfJQH6HDsRDTbJc3W2su9kKGhC2E5sXrTyg3ViKUwZvnTqway7SW32PQsHjGHMdAfA1kjxmKUG7ymwee5hRirNY",
  "key12": "28vAW4ovxcvRRUAgqrpnPTTeEegdhRQu3Z7JcpPCdhVMi6aRERcAPGiW484fgmgZTeb1UuNufptHCdpbH1oRZzB4",
  "key13": "2cBBTUqPxHMt5je2rgZdL9GHtB25Ra57f4QC2EV2RBsq7G2p4C5wHYR2yZbBEe5P8FNLscwu3FY7wUiQX2RcUqNk",
  "key14": "3zK3Z16TXX67iGK9xdGWZrDVCwFpXa66o1Sa7jDuaYQJW4SEAHtDbCK4jTm6fZtXB9M2MpA7vmSEFP26Szn9KZcQ",
  "key15": "5ncDSMLT2SxoaBNfUTWB5TxTYUV1onrYZCoPymW7DK7hBfr9YfudpEGp61K4WScvhWCcjvttwKkpGnJ5MHT7FEWh",
  "key16": "3tHAVA3pX6EMqZdmpioYNYJXRPy4TVNvgFqC7irmvFpcq5MWxGeTFhRUrmPYipBuBs8HZjw6VJtA5VZy4UUofTbX",
  "key17": "3d8y3xdvK1814arDYRnJWbJdPMpnBPFogSQ55sZ1gEBJyUmRbf6S9DK47Hk4yD4RNXz9pS6cHf4U2QzMcqDjbry5",
  "key18": "4LRHiSgd9dfFbiEHBhX59q6stEzgawtweMSGPBLEWUJcucDhZ5CL5UHx1h7k7ZRJxsmzHbkSxFpD1nLSpuBgEnhB",
  "key19": "2FkLG7AfqzBq5bLTDABwdXZqDXTbJEWNwNY1kp15oLEBwhCuuwE8TndCcCkyRfgeSkgm9veVJiqtveXDQLm9CcDR",
  "key20": "5hjzio44GhYLBZkH8rdgwSygAVSr9hEZTiUkKD13Hxq6xJQAEAMoPcdJgaPU4q78D95HmHVGkrZ8rX8VGsjTz5zn",
  "key21": "5QXtcqTLRgZaaRXKBcsALugHrqPZGiR7RcGSLZU2xWfaeNxCrYRHJKPmLVprvLMfmSmJa8TtDCtUFG9UWAjaXRw",
  "key22": "43n2f1JYhtnrbFNpf1AqjBbCdyudSGSK8V3DJpP7jtqxubwY7Lp9NY1V1mt7s6cAXdCw1N7FD8D12TeSGCe8uZVe",
  "key23": "VrHtpf5SKByBL6KvZC6M9LAAmYauc2BisV655DnDkFQ4MHa5QqLDTUn8782zN1r9gNUyfQwg1xj5HskjdDwK3FR",
  "key24": "5BAbiGxjRFcRjc97KGBjR2AbFfR4fDniXTcyHf5ykGY8y2obuM5QhUMBZApjrWEM3ne7uEFjHjWU37qy5EUYHNEq",
  "key25": "25tadEQkWf1R5v3KxyiJnqE4mmdxppKNfP7uGPJiyoigLNnBSouvVSBvH2sMcQdA2FmFsP9vhBMwvouUNab8GSvB",
  "key26": "4ny9331uNSf37h6wCDzJBP3wejsvTeksQKcMVz8ZWRbehbGHZXrV79Gn5Xyq9ktxXPqLNjjuKAtPJFSpcgFpcQyR",
  "key27": "3GsY7SnoucWX5jHft3u5bTENKX7m4FSWFMKpzRhvSfE3Ht6CWT7KtUS4vPVFKBwmZ2XnQ4ooB8yUGBZga4K5LgEn",
  "key28": "3Pd4m8VoxsCPSpYz2yeH855Dtm6mM1LJ9vTVoADheBJLLicgtXHqr914qPxvjZpUo6Y9tawXLKSRdYScA57UFGJ1",
  "key29": "Hjtho38j4VXZxpj1coangrd9PzhYfwaPQiEsVeckALsCSq83Ru6oYwojUoKys8JTjmxuAVKkS4SYXs2e1NnH9fL",
  "key30": "moYZxeaHStMDprg6NFBDNY4Ch64PDfDY71cp7QDghAWzKPvCbw4qAn8y7mA6Bw2TFe5QafRpLzdmfgBuvvxnnYd",
  "key31": "3iJ2pRCpupYfh5f1TX6Q3iq2ZmEmXXyWqkGKvq3iZ856RGwMUpS5WXMzc5ca4hBodeNcCQNCe8298FWfPG6ZGqeY",
  "key32": "jnHyeHTnFHYsGPbxECvrFAf1dKRyvi43ubMJuUqmQNZZyZeSgymCirkZK6wvYF7WShqtqN7E87C7ESgwSN2Y7Nj",
  "key33": "Yx29CXRh92QDPipyyz5751zE67aDUBQ3mJNwdsWRajekuoX1qdVHy1jTdCcdJYCCCUCJ8etpHhv6JRjAuidq64r",
  "key34": "muUKr6G6ms44huLbjC71Xd1ipzK3GzkQi1ijCtDWenpSxqjuYYwNioPJ7QoEpn8sBp2t2wHJVTvUUuMSpH884Pv",
  "key35": "rRPuhjhKzuYUQoY7jzYgoCtf7NsrttoV8hThWj7LrPz1oMsNRYGC4F3Z1KsVK8kvSd3D1PZxzmVf7g2TzcuLfDq",
  "key36": "2wUtKD6rvhMhd1MA5ApzZH9viQEnqiiQNFcdhsSXaznScdmPZKRy2ox84Net5HJ4PzngfsxKbdQP2sZnNhdKUWJ9",
  "key37": "WvWkZzm1HPnqJhCWwPY8DrbPBShDfVfM1NZZtwf8UTBWCjE8x55tzsk1NYii4bH3fncCWoLG5U9GoNubg1PKieB",
  "key38": "4NPpKmEYw8edqG41q2bSwRQgRyjGC58LYxkWLzRRVgRTwkM6FEAb9VJaELH5cZ2zgq1oi4pNs4pZw6cgQoghMtkf",
  "key39": "6i6FLjBDmW65EZFDGKFCB48SvoZAGbcLed2j6jUHHxQqe3drGjEZro6TLJyzB9XMQuVWNb79GQ7rMwMn11rUfdT",
  "key40": "4fCX1EWDCnMENLHUfJTSxxXV9XMrowdP3WvmJWUar76izEC2q1YZomhcnRiEnr5RKfwDYyQbTkRdMRgPeuuHK84B",
  "key41": "2gQYiexvMKuCqsxmbUdChSkp5f2HpAE3T69L6bddrfL1oq1Z6g7Zg1zogBFSvK6urdRtQaX2YRQCQZ69nSYT7dj4",
  "key42": "3iLEE42obXxqsHYZ1AL8jSizXNfCi9jubZ5YvuCaMgEVbhpPDX4FokLpjJLoC5ky1Sb8Yv6Gtuipe3tk97CDwAWh",
  "key43": "3WhurZzfXLDaSDcaiu2gJ7ANWjjncj4iF8ukg9aCRnCZykuUK1AhbxRuiXG6fe1w2ZhpPvHc3Sp881MEFowUtXCU"
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
