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
    "5VkiovvFFRwcD3PFn6G1La6Sjnnma1VTj5UHu4fJ3Vy1sN2ruQXjbGpiewQCyk7AjZqjbQBTLW4AifssFEKmtjzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2BgLy4ZDGym5FKgVJqkhsUKV84JV9DFJ54MUs3WKLAWnZLvbsqprNLjbsKQ1vHKgoWRSRVv2iQAvi59Fyr7LWM",
  "key1": "4eg8sn1b8dE4mgdhAJzXjfvASvRcJyVazGoKvgKobQvZEjmgwsTWytJq3G4T4BWDgi3UrSrzMW5wkHFt46gQKvBY",
  "key2": "2DxxmrUP4iEvfYe1cFzoGsLEuV4xbSioYwQ75Uasd1wLoU4pLKN3zDBZAZobXGnZKL2PYuKA8kHBpj9oPiUhE6ks",
  "key3": "5cMUoFwSa8rWVfNAzs9XBMzFgBaoDaXz4WHMevKG4cqbgkJNfAPpqevM7BAtRJV64zP7N7BPH21VJWnn6vbT3HwV",
  "key4": "2iVQQh6VL41BWbAqPAve7b53Kc51rhnb3TJ3u8UkySqkpboMg4xTtHoyJYpYvB6VBYNGHitAPGa3BqDVmSJb5sPx",
  "key5": "2m51MCViibi6Arv3Sm5CN9PaRyaS2jJJXTJECzH2AuLA56R3Au9jWFAVC1tDwBsCZdyJqsMHSHLWGHnWW625D1f2",
  "key6": "3aGg6ncr7bnhmM7qLSkwM4q73uSh7U7AVD5KtemzQnHUru4tzyLSZeydSSZPB1P78xLhYamtSgiHQAFnAC8WzRxu",
  "key7": "281XaUdvmBCYGVwQ72PmB1Aagohuxk6P62sUcHKUUzEquwRHKDiHuCNUNqS1jfDwonpN2RmD8AB5HaLqtLPgR3cD",
  "key8": "16GABhkTBTL7DrTTjHD6Z7qfyrGsPLCKWmYn4XxjkW5xKiFPqyetSDpy2wT5SfmzDrjj2giTwi22cEWp8pR3apk",
  "key9": "3mGwV4MjwKvz6sLn9XJeVo2BgYrHo6VWW4sVymdLSAHXqL3Zm5CyawAVM4xdS4ia37vzVUbJvCHuT1wqum4YV3NC",
  "key10": "4fVYBoKYyRbPH5MRS5WcuCEYsdBj86DuvzRMVEK8katMjoBN771Yp3PzfjhCQnE8bFLZGsG8SAtYLkJk16Psqer6",
  "key11": "5jfqhwSmH3DKF7F1oQoQAuzg493B5scFhXpTTzpmfgw24HLRTdX8ZEGcDYk5c4Ac6rTvZNUNkSufK9ZCQeePLmsg",
  "key12": "2gDKRTuD6VzWFwKRoF7pxuPA2D39tSEudYRt58vEpCHfNvDMw6mRb2mKXwxgR7mSBat696sYryK7TLSo8bNQX8mf",
  "key13": "4vCvriqjtm3BnvUrC9urqTGjZ9mhea7PmxiVpGznC3s8gWKacHqSXcTtHtjSGtmMA3J2GWroyCDKB7ZMgviFcEn3",
  "key14": "3jv2uwoRMPUvTTwuo4ANcCUergy3T1D1xpvocM9Bedjp8YxD9tBrZLoQ7QAR9EG18LZXuhh9ZnfUE9KZAC9opfUK",
  "key15": "5f5PNYxV2gB2DYzTb8FNsUsVWiTBPdP5p4HZXjgUHssbDW2hBRU9HWaivHUsC8199fycW3Xh3N2CQ2Junzx7GysW",
  "key16": "4R2UqGCZfybHZnsw1tY74hdztRMsBQ3kKvMJBD4sn6KwaSR8TdfsU8ukXNSYbZ5H16EiqavdQV7fN8fk1gNUvi9F",
  "key17": "2U1h9WUAWj6j5jfnWq3U48jtzR9RiU9cZpMurzpuK9MbNrybq1djkjrGYB9cTAVtbdWVvwXVW9fszTbhbkyBXDYE",
  "key18": "2qRejYMQzX8uBY7oVTXUXp1BTES74oBxRrvbodcd3UazsM79e5mSpH5irktbs6d6vRsDrrc9K7sv288Cr3Pfb8Hc",
  "key19": "4JfQp97ksrd6n4m3UJDBiMwEUCKzqHoVUPav6LAwRrtLRcLgLrxFh5e3cAAtJTdSLU82DD8rnijvjaC3Z2toez5o",
  "key20": "47PeXsJ1DdJbmZZDnX98JcYsHHkVvGLbrocg8iCJ8PDjHhAyokqQvuFbN4JstDU6RFuBj9avemT8zREDXRh3dapf",
  "key21": "4u4nYwreoHGNqNC2mvczTBeGwNWLnUzHyPVUw4asVw6wJXDdCZoAphkSPGYBEiJir5NVts3mechYtdF2G7Rh2aHL",
  "key22": "38W7KPgqR8XhqmBbZLZkzFXQfx7UQGhYwCacKxkSPFCeX9p3x3mtJVL7khHgkz71avErLWNXJEDJAhnvLjdDJPWS",
  "key23": "2bgUjR36NutSqQ5Fr8QfDwgiiZm2HWDWnZ4tYc9zYfxyaH8duaNXtzUS7TJU5Canj77Ma43y74nf7QLhwq6E2vm4",
  "key24": "34Umt2JJ4NdqfXK1Co7QadVAGYTqfq3NAGg3LLZrD24U2nqMkQZKYWUouTy9HCjP4cyWCHqw9aWpWwTaHYt3JSgG",
  "key25": "3kwLWz1t6TaQExCbXrM2kBeNQJk3pM3Xb8smeHdHo7jd8ZQtcuWRaSdjkw3MzRWNHiYSCcwJbBocuqwaJLoPE3JS",
  "key26": "3eYqg3Gk46JJzcWkM3imAfERq44TBn56EtM8dPzjD57UCC6ybDtBrgtYhZtLs7xdzfoA9qrxbDoAMwdxiL4ZyFCf",
  "key27": "48BN2NMSHncGmcq1XDm3tGa6fDSjp9CPGA6aspPxiNgiFacWQSiUZw5UVoNFNzTQpTLcxwyhh98PGpxFmZ7GLMGP",
  "key28": "bun7r5LZZn6y8VJ3dB71MNLuu9wRrVQHgDU2Es76QmarjEo23A45JD1rjbwDkCSpPjgbeM8jck1wxGXhAATUmiR",
  "key29": "4HQ7TKqcSSaEy2iKfCcbsKnzyVR1iUEKuCRUD85sAUfQh1NXGffMvBmyr2enwRN3o7LjPPjkznrEXFuWDh5zWMmP",
  "key30": "4K7VfX5hzcurGnHZEGAdzgfR2mugv6whgq4ZaLXyFcAj6ozkdbpohXAnWm2Lw4AaA4jKhVa665QfU3AwQbpnDWUx",
  "key31": "3Bwp2RBa33hCtsqtV28fyKVTwb2p2ERSqd8KxgaFb2oGGePRLnXr6Uh3kwzcvgkdraN99y3FUXWJyQQFUoT8Vuhx",
  "key32": "3gRAZJnJ6X4KKWh9jjz9xtqLQPBjpXchozhu2AzBnTHDofuFNb9UPQ8RGKiWmoeR1qwXtQHgCDjws3671eAbM5es",
  "key33": "3nxirJFt572PMptQEEhV87wpvT49bpwzt3LoTX5oU1EQTmHGhVEE7mzDmzMVrmuPCRAx4Ew9VLjS76qMNst6mUjV",
  "key34": "muryaD2D988ENcq9WHqySbb21cGGqY3XynFotG4QhVn2G627sy9rfyJ5X9PahUFCKWBZngoVzXZwkHUnCUashNh",
  "key35": "2ABarCzoq92wbC6mpnn9etW1D3vgkaf9AkSbqfMQZfahSbKmk3VT9xTyAGeYphp9GkEeoRoAjvTWX2htWSfwtfn7"
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
