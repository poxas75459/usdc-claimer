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
    "pVHZqcJUBy2wpCJyqNhzzEbvTu3z5d9vhPymbJc5zV6Zuriuqin5fkEcCukJrcAhqJw3HLGSsXFrQVpQSxGxJRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jsTci1J4YNaqtXxYGjjjc4Rx58hwsBoJLtVyytGUtHGbkbEzqF779ZWKidGF8HwRfyJtG2hcUMLZavj5tWjXavN",
  "key1": "4qucfsUnnb8iEU2AQbMgP7hqULFE46gZ9cfapNvvgvGiq485XqvvGwe4ZqCc1APKKgpYRv6kjKbgXxqZsGnA1R1p",
  "key2": "yfgvxkhprdgva9fdNoGNsniKqzA3PYpRMwhZsJw9wbw5v7U44qP5QhJX1rgpK3cdNRabsGLbAfDiPcyM8k8VRb7",
  "key3": "J2bDQW3nRkAWDhuK61GB4YdVA9sJJ2E2Cum3kjWYjtoidqNUDgqq5fru9p3W6XfqLjZF157MPeTKB3cFfHidBXE",
  "key4": "3TGbjkmGB77hTYNKfot9zA7jnrjv21jmbZHyy49VdpDwbx27MsiReF4MFznu9D96EZfziRQWhT3xnEHBtJjMcRgF",
  "key5": "EzFevwKhGaL1rKWVvry4Xu5UvuZNoodQjTnJXQVWWKKXsvYE5fhZ9CH1wcdzvvCxSSE6EMsUrQKHiJ5uVTgfmfv",
  "key6": "5nu2ApBYBTJgGg6WQj78nv6b65oLsWf6NnJD4bQQBuMeSdVXS98BRFjbQx5662w2GDHqJ3qjDt9K5txWzaaJwhfX",
  "key7": "5ML7KUkPFXeSBFS5vBJ1dGcupsH3cZzaoVgRGx2Af5mZrWGSwTfjunNv2F8ndj5yurREPpjv5JdwzfqMVDkiDFh8",
  "key8": "3PNKvhhbBF5QJC7S9GhG2BHFmxz9QeDYBNxvWA2UVjd5T8MzVKqAkV49o2aFnsmutZddZNZ8PS6gVBLM25YKmwk",
  "key9": "5ijC98qXHp7VzcDEtkUqgoEnMExrGBaNgtAWGK9Zgfqc68LKNB6nMSdMtYsQDXiWsJbREsGzU2VCh1y3esbtMf7V",
  "key10": "1ekYc73t6fhk9AEBxBa8dkbCxH3Rq4LPx4DTpvAZTCXUVwjqyhUy77GWYppQNTS5Z7MCaxWZrZQhLMyXccyp9UF",
  "key11": "5zZ89yGKxxvHB49eaVeMC1pyPhWxQqhsqnFuvqRznka59fq2VvTyNwKMFUyYGo96SNNWFLRwHmWg5rdU1gjeTXvu",
  "key12": "2ebrSbdrFEPTUZri1r3Hs3q9s9RiAkfyzy79jgS6HdQiZ7Jsn77YjqP98t4CVsNMbnYSgd473kTcwGn5Mbuocgz9",
  "key13": "66Xk3bgjjHd6cmwkR5xLej2HUXHRtBhNWDhFYpnCwwjEGbYtdngSYGX7ueE9kTu6sx69pvCz8TJDgcgPAVfWBoWm",
  "key14": "5NcSdU83AjZv62LLZ3sverTW5Br6J3SLDAChtjzh19NCMThBKsSQjKxW9aKgsuorRQECEr1iUun8FB4wunDexLcT",
  "key15": "342HWMFKxJ1bhzyzkpzkYXyVysHYxCgedQ8o2SMyL6jnSizHyrJk4uhUrpi4konnLpmP2H14RiGEgGRUGbCkNHYX",
  "key16": "4n1aL69esSG9LWyh6Q1oGz3RTHfvdyZDxfm5xd1RP2drebK79Tey8zd1zhjC4DRCX6cpQt7JXVaW1fKf8t353wgs",
  "key17": "GtW8P4WttgH1uMkufsaYZbaCGVLNkM8XAAEBYJxbW7Ushd4G2aPLfSixAfzqfNm7StQMSwtfGnCcSs4MHMJwSgr",
  "key18": "3Wsqa8pbLYgR5PCVN4JUSTCDUokrKP43cXMraATcesFz9tPYLL7WsBT9iyqTnvciySC7p3rrtFDoZ99H9h1TeLAv",
  "key19": "HhW72XMG6xJwQ8SedkKkUbNUPduzCjJA3avFusZ7oqTbNMHWzxvmU8VNdFQeKwD8r5yj6uktYLLpdLy4K7jKjoT",
  "key20": "vUCWL5mirHrbSbJkb1kR8YsuqWYjtR6wkK7rD1wUJu2Kv7z6Huaz216A1Zm12h1ymVQbwVCTvaF6m1iwWQcuNKZ",
  "key21": "2iRX1M27bJkwJtiZo8t9om1G1zuX75a5GC6nRNaFbY3yMzkYS5ApENyTyVJCU6KKDPpedtHB2EbgApWqgRdRkrRa",
  "key22": "4AVqqqP94yDjTLQFQtxM5Useru9nmozYRoyGgEtSE4gse866DF5YMaB1NpP9jz1kVciAexyfZfkEEi4KrfTrT8qY",
  "key23": "5uyd1LNZvZP5k63BNiaFmTPGkhCQwgNZDupGZGYVcg4fBmDC8e6qtQy1ariFLSZwqV19TXQHoynVJhohBSJLEvqB",
  "key24": "2LccC3bHo4VhXWm6yVMc58wckCd7UURZDpxTRwEXSiJN9jNxRSUSa7BNzxg3WGUjKtsfnQUTDqM9T8gEDohZAJ6m"
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
