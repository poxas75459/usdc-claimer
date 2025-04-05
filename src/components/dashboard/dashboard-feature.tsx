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
    "2Ns4BHJ8N7GGq87GC1scvikWReRFKwDtAnUtHAzcJrrTNMfD9H25u6x71zQMzxTZZgkag7yCKBqmW3PcF1Kz2FvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZk3YvLECiApXLSMEHieUxa8CduUkMs6e4cKhZhQfgQaKtFo4tvrq8v4vjtZeThAKSQr74uWAgEa3EyYDF7BEp9",
  "key1": "29mRiHN1CJE8GNrUJwcXJR7DbWTiBdA2DmX5XDdY2JQes4WLHG3kqTcvVoaqZdMuAdE8HBNYHA6uvfZHCiJi3wmo",
  "key2": "3XRFsqv2Nvuf8e2YjdiHfJniTgZEkt3K38AXmQggG3CDzdzWztCUUjEpFQyX9cnj9UFfonbto8PxHEvbvW3qnwx3",
  "key3": "3Jw49DeVWFKdnGEs9frpBtDXw4j9LstUU4eYVRnkGJ4ceQF3Pkb4q2wT89P32bCiasTbsm3EhsWJPsSFuWssqDKk",
  "key4": "5qj32iY7kKK9ghtEFtyv85bWg3bL83cLNhpVikm8VBzwhNNUfNjNqtVCyTkBv8HtJFe6Wr5iQCFPWvQ2nJmHtKFR",
  "key5": "4ZmUeBYVe2Wq8yjt9H1VcMcoG2DJmAai5WjaAsqyUnRBX94oR2heLtPtDXtXH6crYcJ7Y6eRCS1vsnKVQFnQQt25",
  "key6": "3PUDeihVkjFsLbihWGvqmHfULL8pnEupXh4XGoUthduykFbAqa9XTLXEirJ5i6ishWtemZbXPh2nAnHqgkbv5mj4",
  "key7": "2ChUf8Yy12qzZhdzi8JScxHeXtEitG8PAMa1RPiimgqvj5Zq3t8FJS9s5nUhQGh1CMhuCD41ZPMENkE6ErorXA99",
  "key8": "3B8cTijgLuaqM83Hpdh92hiTtLBQsDewSUudBaNpZwVpzJRu2rDQVafXFHDZPvfZWRiB5yyB3hpfRCSb5aF8G6oN",
  "key9": "pTrQuQo43MuVnk9ipJ4C6LktU9fbfjfzp5TzA48gTPKDEmFDr7vndRu9tQZcMLzBzdZuLbnXbQDbNcSS3CtB6ML",
  "key10": "3hEZCyuj4kNnwVFishqi9AZx994JXweRnZSc3ZCEc29zEuJxbaeKmFZtPUk1MutuaegYqjFNz4rRZd46ecKNezBM",
  "key11": "3bGkeRCBKSCJijs17ug3kD3wB6hsY3WyBxbAsPG7x65qBrmnPrdwFJG85D648FAuZK3FKncGpEoxCajbpF7pRgC7",
  "key12": "457P2HTPc1dT1fQLS7xnCoRqAGoQ9ae7mn8rikXp3mZtsgzHDszC3YJL9ZJoDuMqPtsCvFtGM7ssWAZVKLVfj9e7",
  "key13": "2KpzMMkECPGPrMahwRRzvqLukcF9wYFtr9DBtrT8o15mNva6oRCvKpj5R7budT4hS2dUdAMuXuKJgwWK5zCBa99P",
  "key14": "2gYQ1byeaHChysNxusPcZ7kCKE851KqE1xwZrBHxXRYxfDp8Vk1M7feohkWgEZoCJpXVKfn34aiDkvcqcX1yMWpA",
  "key15": "HzgYXrqByEZm7vxL6Xs8M42uiy4GsxzqNrHZsmDFiyztGmQ88Ukd1AN34q3EW7y2xhRFCfDGckvATj3A5n7oyko",
  "key16": "tVCQsdwr4wUyhPMKSvAhML2zBw2SUY4F9CQBkV861T3UF7uJtmzyKaMQZtK71CRoG7RFLVqan3sXVcGzti2zspG",
  "key17": "JVB6ZGB7pjJy2KxBUNw7FYup8P1CEXJvPfpgftagdofauTRmqbFhqaFndERUxG5TB9RdzAf96unTA3ncvhE6jZU",
  "key18": "2hQg7UHwJxwp1eyoRF4bnug8V1b2F5ZYtLSkER9TQ3JUVqnjUDyyoess3XfveAJGy7CuMFxzEyjLZULsu9frGYCW",
  "key19": "ubwmvMZZ4joJHfTNpAJh3fUNMuWRRqQykj1dja5heqnSSgWYAathvrMZiCD8faKALD9W8ZQQJ1t2tLqsFxbAmyh",
  "key20": "2q69bKa2CjQCUqGCzULStncsSv83MMSp19YLXNMieREUnmqFiXxXkr2EV3e18qSQGMmA4hzCdAQnP932NvDqymHg",
  "key21": "3bwK7WmQiuywnt9hy59xkE2azM5bT3RNvmD9TCczGShTvHZCSuYPCDbsLT1Tv1UUUns5yK4MmPt5U9uRBPUJwJNx",
  "key22": "4nuTjjZ7ouY2i91ia3vRCBJrzA4yhcwvh6Lod5fscpq7gnpwWLVQyAHyKcWZYXHLCSk4LVJChVsx1GMZn2uZSspL",
  "key23": "39851KybDBqFd8cK5sk86hy3iqz8C36FExQ7YeVzy3juJPtxGnS77JiaWa3NrCDDagA24XWScsa2XpFJ5Ak48LkU",
  "key24": "5X5LLgg9yxjVFjB7UKwNaDhEPNvMsGHGSFTD77D63enQSr1PbCd46BugTdbmBw4mkeYXWYRb6iBMrzJ6EwsjuLRj",
  "key25": "3gPoFdfRw928R42vrpwV8BzHXH7LwToW3GnBQXvhmrqaYpQEgyafb6SbmxL5zbhvntmapedEQzZyzmLUVXDN4fre",
  "key26": "4e1C5U2Hzp9mvgcdicJfuoRqzrokZGTzeo1d9iPqHQzk4P2NPN6CAabNtye9xviBwWrF6RGFEczCsGj24vjnswoL",
  "key27": "3Nrad1qCzyhXntWWhjLFBHoG6A6PPPSrcEQsH7Sv2bA64jEMCFhsbHiiQq9uiQGzBHLtFKX2rpbxmSjDSRAVq89a",
  "key28": "2fHF4N3HLfkzfzM7cUfdzanxxzN1EfPQzTfqiavexsVy6nqx4DZH4JJpEr5bVqtTKrzVYdQ1RLdn7A255wfsrV3R",
  "key29": "2AqcezRVpCwDkVx5RiJdvyZMA1rUVBbfJGM6GLtZBDP4hsPXNH954szpr6KEXzFwNGnrWV1AnKbXybuH2uQUfVCL",
  "key30": "4JaH1EK8V3tjqLBHLD6U5qhdkGKuFx9r9NMpruXc4FateycUj4vbKHFxA2HQA2GkZ1QPgXddSHLPtxm5pYqTSEgz",
  "key31": "cyCKYWpyuiyYqM9VVscgAtiY6ySSBVowECeBEy1F5hSKZHkCQVnXaSJacNQTPexD4sXoBegnxrek1Bw1QRyqJ8S",
  "key32": "2yJGZYLGrF9sQkW474FgrbXfSyK5Rcg6Ht9yfu8UESRt3rs85ochmSkF76bYhGF3cY1jq2cyJ1ZS4vHcYJTPT24t"
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
