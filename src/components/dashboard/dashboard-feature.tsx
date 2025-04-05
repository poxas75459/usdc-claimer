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
    "3cxWaqUm5BKJ6QHEvd9f3bqcz3jbJ8ZpRSQTvtCL9uWyu86JKjJ8y22X1zyKWg4zS9V2ZuYZBSkj8gAF6XoaQU3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42f9SPQVHiCbbCZyiNFD5JwejNo9ELo3NcTPYFztDniJpQtnPhoV6Rzz2v2JDPdM1uT6111c1dRvpEuNrQ3fGtCZ",
  "key1": "2zNoZickK3b9tYNe34Sc3rMYpEY3jwcyi4ns8rVmw8CLUCyjGyGap79LYCeoYeeC6MTEWwBL18ezZkCuHTFAagLv",
  "key2": "2CCs5a3ongAttnDCEDTTmpqopNyctdWvCUqUoPoU2E538z2kSmLPRbDzYcvdyidFwWnkvcSU2ZGNbY4ooUdZ3n6p",
  "key3": "2zyuwcJq6fQFLLzekhXW6ECDdXv643JicwhSNTigFzbHBmfXC4mPZ3d9ZgrhA6Ld8Jr1w7TTZ9EwzCKx8R3kEXQK",
  "key4": "48VhA1SJDqPxP1dGcuzAaJ8GrejcU7dKzWLEeg2RKp5VyWQEiww4SGQShFuPhYU9pNCi6tR8F5Tv7VW7tGkn8Tft",
  "key5": "uodjnGAdzTtvpviFQ1JVoK1C6AbF9VbG2AKGmkwPfib5zKgPAcStKkGPUzG9nsAevLxPam4FS2jm6kwZiKWJ29z",
  "key6": "5m76B6Pep3BYRUV51rGSxcxuRq9CjKhkhDsKrw7o5rrL5Swao6rBvsHRHK7Qbc89VNw24ZqQpVThab5rhPoaFQP6",
  "key7": "5eHDdCQNjnPAFDapaJ5bD1GNxzP4acnsgf4heYhhdYy97p2PBZsWShh1E8siDBcr81UVW1KzwpGLuSTr8T6LZCck",
  "key8": "57FMRPq8GfeTkyekYEAUD4vf4ygJEwYE3PRfD6Jk8Q86SczNobcK5CCgTYBsfmb7oqfszhu7sw9nwrsfpuhKPKjN",
  "key9": "4ZfZnDMN6cD4oBAtnzyBFuo9E3SnJvnotSig3ABGzGkSqg42DXGseMXa7XyvUjFfj2eq52v7Tjypb3dzB2ZdiXY5",
  "key10": "36imtqBrNDeybo1Lcu5BFWaWsJb96PZvao8WBCuqx7Rxc2oN8qreY4bVBahFB3xX9j9bZbChbcpwYPkZei2wH338",
  "key11": "oTm7UzHvSpvSqahKvverEscxHnz2TYZPdcUrGHHCbYvJrgafNci3eAqQFEBhtys9Y6GMEBSD5zHWJVtqa6k7rCB",
  "key12": "5Hde7Cm9sjQvUUcUuyc9PTjxwnpbqszJ7znLr18XSzq6qYXsEQHPsMBVC9hJb8QjAEdHha57N5cHTLCCuYn3vQvH",
  "key13": "3xauzvA2VwHCnKfneVgeC6kwR1ZA13UsDJBWLyX4i92rwiSxtyvFTJH9dYKsKGMs9tax4tx1yHnj3a45ribduZju",
  "key14": "4ryjer7qwD5rRq9ru9YCh1yKbXXGrC6pJfHZhvGn2dDEN19U3ikEbfwQ8rkA5Dm66a8S12GKyvuFfgqK71D3V8xJ",
  "key15": "32sf1piMocRjCSAbH86HoRsxmAKFxpuJ4YBhdPkTaomooBcBaDpEMWVnRnHfXebzob7XtKbN6SaKUvKXFyPULbCJ",
  "key16": "4RpfM6mjQSiEXprtFtd5g6Zza3gv5RnG6pEaupPgMxP2a8Um8zyow7JPwjCwy35zP1LJNpVBcSYJjqShdKCoPtAF",
  "key17": "4vheYah2kPQwBq2BAAd46VaCzEDC4gjWpzMUuHJCGs48omJ2g1QLMfMtHTX8tZiccBPzUq1oEfYH2k6ZqvToPbuf",
  "key18": "5potHAjpXhng5BL5dDaBTt8xFKrimU5jiJ9GLGgDooAVsHVvp6vRQbuNckuVPCj9oN17GYhSCXwFsTTnekrQbrxb",
  "key19": "4Tzh2j9TRmPVLU33XraiGRURm7Ge7JNXjFWCh9vC5mhjir78DbGTEbwyhDRydwUvzLzuiqFBrm3M6RXN5wsuJBpH",
  "key20": "66kQi47Jt8ZefbPSq9AEAAMC6nSipQphCTppdi5iq6MiYfyMxXNdU77XPbLrcDQDuYSMRQSzLhYL3MHbixVAiSwc",
  "key21": "2QngmfDgdGHEBfdW2a3FqPXJYUW9d4D8Wqp2riY3r55ZyaF3oncfhKXmyTXYunhZ4vj8Rs2RpZmvfFeo3MxSQqUk",
  "key22": "5MYje8VL3KxWvTxUHi33wgvPUuw3ArF5VYq7cNocESuvdgWgKwNW4vtUCVSR1veGSkNu4cxKEJsqmMmHyecP16Hg",
  "key23": "qV3nKW1YFYnKx9jK7ootYhzL2A1KFdr5FpcpCdnu4CFoMupSDEP5aZyLPPU8Wd3A2FXSv4pSj4BcHsos6RuZrbC",
  "key24": "5QipRBNZoFtuDHSTLmA7KJSSYYhwyQ9dBf5HuNH8cFNzHwvQND2eCRMzyzDhFDgZ4BufXtM3FWd8248JePymExaj",
  "key25": "5D7p4rCE6eisbP6QmBUSVDjhvJ6yaUXUo6RA1hwJ1gnUzzgNuQJzWnkv6qtgKnN5djXcvT1NGsAweo5LFu3NCiCr",
  "key26": "9n15vFZ8Q9PJQyxr8qofp9DMPUAHqPGoMd6CiLsZSDvApckLF7BSBuPjGU6s5aGq3pnHc5iXP4EZwD6Q36eVRc4",
  "key27": "qaGmnkjpfjWhJ5J5VkksMtJN7AJtkWWi8StQgCoedHbYxYLRBi1KowCcpGgiuKjfvGV24V3ziRHZ9Dxwikr6GjH"
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
