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
    "3eQfHBAf6wdzjiCCUeVT1Pf9P5c71aT5Eh9Jrj6Gt8tSjDEFtjV7rSRE3pVnW9Ccq1cEPSWpBTGn5UNBF9XMbpQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jab7ShTTeeajt814xsCWoPPQztxwuk2JGcbmQgMSSz9GK45kQVyeMWu48CXVvV3NWiLn5ELSJV7pXmMFyfG4rh",
  "key1": "4QuaXxnwwxrH9cFJsB9JW7HutVD5cLebvSqSD7iNzApRguFwJVgjTTC2WtN8S7Fvx7ZFaYJDnXndyCW3W6QEYNNU",
  "key2": "3GfZAYCV4oQUWSN8LAwerm8GHecQ6JiyyVK3gFne7vSNjijA1a1CgGPaHKyFDFoDzVCT9q9BndwG2RvDhL6G23bx",
  "key3": "3okznVY2i9K2PiU5pAjB7CqseGmaWrRTyZYrWoPcxKznESmhANsz3LxYrrj9PAr4BdzDwoXLYkiZQ57xiLNqeUtz",
  "key4": "5tVUCcp7kHCtityw3RU57tUeb9MrFCB4wcwZm9sUm3BBXp7Y7sQhmZooJjfqPbfAFG6BBkyhQDytxpMQfcQNdZec",
  "key5": "427WwJQdcqifUz9ud5zFxBU9w1sNaRfnhx4vTE6cZsn991EGXmqK4TisxdMsgva5a9nqwGdHKpggLVYQTM4Q8a6h",
  "key6": "5UDhmZgDPV8ZkcZ3avc7QQqFv7czTMuymEkdnY6sNW8oZp5BR1DS6PZcbBygZ5sW3KSpJ8nMFipWbhExag3pvA1m",
  "key7": "66bWmhPdVamYWwieqCGsExJQfDA3NAqRhg7e4eBDF8XRT9VGvNCDUyAYNTevZRGkR2AQiazMfmk3S5fBBiTW27D9",
  "key8": "3K2CjE7Wc8AFGsPiGw3DP9Wfv2RtXLXAp5rxoDxJ7Axi1tGpLcPWoiXiWVNhjXYqbLP5ZZSjNRLi26kmK2D4UVbc",
  "key9": "4apqdBzHX2SssBejkRz1ZqwdWk3aiowh2ueJ31wgB2aSJmBcBGnkqYiuq4wnM7Ap2F8pmVaJNs3RQo83EHruYew4",
  "key10": "5Nqmxguo8JSgw6oaTKTxhJxrBiemHpnY8Hh8hY4qD4KKfebGrMHpaRAyk8YAdmcNVNxXDZD7F4bKDhWv41NC7fpd",
  "key11": "5K1MNx1dNjvYSVQwM1YNVpkqLKwPqjart75N3KmNQAZoSx5QRCxqFPdpJWLQMpVKD5bjmDUcisjjSqGAJqaMGDuu",
  "key12": "5Cui4zBT4h1Q7YQ5ZcBZg8ZNgrmn8henPqoh3aimGC7jTzoJrJW4CD7KGkdT4QvsYJSPeFqpySKNJPDEbmN58jow",
  "key13": "65crUNwzH6G8m4fnhpNY2cu7MDjbmfJ7DUBUZPkML91XPRGM2rxRRakaMwaY1GuNp8m76P3RVSPiNp5o2JLBdVgj",
  "key14": "3kWSzey42J3WCz2r23MtZE8z9kq1817mMpQKk8iQyZzfwUFUTDqHPpbktVYhRHJJe9NzMu3w7bZY5jcW8Eo4Vag7",
  "key15": "Ee8Sh5j1tQKWrbhC8r1m3cffwUfeLNsLAvYThBKyqZHzzqakNVFkGKurcxrdZBjgtsA3WGLUuZCnYWKQ3pRi8zi",
  "key16": "3Kk72m6DiF8RUwUPJLDf3mLK2Jgh1jYcuRJ7VZMPS95tcWLd9fZrv3GmrQWwUPX3BPXUxxBiUBqXdu7V7k1NCrXU",
  "key17": "2grRhjg8ezyr8aGLFjYHAg4MzJtMmBkAxeHZF1B7vNZoM4a9FQ4ngd5s7mixPwbCvuKH46BJ4u7NxkbBDKoi5Ld9",
  "key18": "2ngq5TRvjdANTTHBTePYPtUpq44qvjgDttuQDy62oCURaTzYem7KqKXdSmDUsDrXnoeYMYFNuXuGSH8JY4Dn9Xu7",
  "key19": "v7fSdYSw1ycHdWZrUGf8VALsMPkmh3acSoQvbSfo2eF9x4PTdwwFbdCy3ERBz1aPHsxKvtcDAgaWZcWH5WJyBxL",
  "key20": "49Po4aAYYo1tYjD5L8NPfeooeR2MbJssK9pEutMtRFVa8b4ihBTXVTHd6EKJK4acJTgvbJifqbLvVviBaL37dt4f",
  "key21": "62t83egJpnJht96cvB9mY5imghjQ2se23yYPeTjA9GjZXQxuTaveoJLwhhcaSpweJQ6GEjwZksZeTTrJc2J52sWT",
  "key22": "4gQuGBheJXEZqMEEE7nnxWecyxxU3dHgPM8GN5WBRHcDpnDZW6GYQBoPbfczn2Lwmi49TeQiKqW3m8AgQyvvbuXk",
  "key23": "43p1sV9m3aE4JcvCctJQdhWFhbk8ngnDJso47mM9a11mVhLX2MKT3FyCUja7o4gKcaoPiHqjxU6FRUW71GRFtTSY",
  "key24": "2SSx77ayQb7wQrNhGaCX8kuj9hABSNCzrsZrkwq4CcVtCqxPYMfQiXMprH5T1xP6XZNL8hA3UQoFWksA3mbH5fjN",
  "key25": "3x9Z4KUXFVcbLZzfx2Vr7eoqaT85g1HpevyiXwES2QJkif9DnCu14zrYyCQPHbz2yZAU3nNT9tYMw6MjLQAoNqqs",
  "key26": "4MHUcFMgxXBYmeoNcUiS5jXCScVzU4J4XFBUU7xt5Z5nkBxLdrkAQMPzpu8HSJGVzCd3BVCQksS3xyFSHNA5kJRm",
  "key27": "2a7pn5y8PAVSkapTwuZdTDocAr4n2kHcnDXpqDLcHgfKW89tctVZfkNToAMkpYkfnP9fD5n9JEKgsQ5LZweKaNVG",
  "key28": "5LVyvwAFNG1dXAbhxKFnHeA7ncYkPUuY4oUeRtUajnS7zqqYwtxzkEvHWzeHn86SDyDjtbPSfCze3sKeypFDyqja",
  "key29": "4QywL4Lmfrn6Lx7twuCvJHx6ecsqXdSZfBB4XhgZmPo1jSgUk1o95LQzCBMsk8Dvi6NDE63HMbrpzvaAam6Ep5wx",
  "key30": "5Q9JduumSzWswwDMoPxo56XHFjAuTYdoCsJzgWzqCQWYvi5sErDo1UrPJAatEu1JPCB4kmZgDxYQ6mo74s9Ua3Ts",
  "key31": "2stamMWGCWc9jZP8vTrDxCdMCv6oR3WB8sS2GUsP3FvWU9dQFKRK7Xxi1uJ5RRPzmwChgCYHmJ9brEvP4QD4fFK5",
  "key32": "52h988RQDPecjq1X9DXReRisPJchE7tCwXHAQobWVicz5a4V6zmNgmBk2uSsFxiGfKU4PYZyB5N6N3K8xtPmirjf"
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
