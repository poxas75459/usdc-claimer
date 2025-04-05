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
    "43G5p4eDgpcwcaNVuTSG8o6sqBMrbCj3EWdjg3CtRociF8pZHdA2jQe5XxA7uQ1fGEEdZQoqffdp8z8XKN1TdZzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DhFCox7HtaADNMd1kpdgVzV4WJ8PxonwyFdvZbxWmMq6URGKQAfPVMZMJ4Jrpsok3wYmnpy18DVnk149Zn6RwnD",
  "key1": "xEAgQEUu9FfqdYT7Tvia9mLJdyZWCTnTiLkEUU8Tvp7GpvNJZhYUu9Bw2PUHo9V1fHkgueE1bF2hwYgdwT32MzQ",
  "key2": "34rUa9yARmaZwvpU8KS1aSF4mrikuLA9XUtDvLG85DP59uLBDgbHByn9fkjhoFWesc6jqRtYsKKHx5i86V4kdesn",
  "key3": "2eYQgJdJKFERsirMjszdP7h5JVLLuGtqU3BMDRyqxAVPnVSJRcfTYxSAR65NaxyWAMZDE4GyC5Qeg9AVwFF7273Z",
  "key4": "22t6V698P1gV3RqwJ36At51MK6JZ1FvmatA8rrb5zc41CMJUfWZRNEpcxPNRDbw7cpC5u4uVzUwVbYwqVHVmfZj2",
  "key5": "2ReVDk8gHhMtvj28QFS5MjqfWgRH74BbKjUrf5qJUKMm1M8Nz6y2vFf7uxMfterK6Bmj7JkWe9Zk1pAUvTb5jRTk",
  "key6": "L5jGy4MBDBiWYwWc4LjTpaXVVYydEqm2Mds2cULoxSnwaEGMidxBQUUcPprpsUpYBwTFhwJiKZHmek1uL5KMeDU",
  "key7": "5HvpEjMgJBzCNevZKbQi6w2BUuGmzhPmu3hmmitcpdrgKy8Tz9Zcsnuf4Pw4sntBG2U28TBnVvnThoL9qpodgt6K",
  "key8": "bZzJ4EWSnHhJwdjKfvwFZu1ni5fR5E6NYgq6bdXEjydFdoNxYApwwLt6rAQYpRWLTmkgg9NdXEH9kzurDV1Wg2m",
  "key9": "3F8NfnaZuAhydv7m5RVqeU25QotczKpKk8asDGpVeiFs4jAJNTMLMbcyZjUHmFwUsKxn4TcYxtQaumHtvRZufr1E",
  "key10": "FsafXm3XUeUh8c2FPRhM8HDHbxVAAi5fCZyXqExqBKrzBapaaKZpVMRJfUjW3xgn1Y24PrMMZjTyXqSPLBCPUdc",
  "key11": "4KsYSsxvjuCje3gRaRPhzSkcHpmwAEkavKj7JJFu1KFKd4z8Fc8DPp7MK8b5UzxNvTnD2TVBDXh6Y3FLrhheWMt6",
  "key12": "3mo8Lbu59ZVw2RXZvEePgAop1yayDVpw3F1QL31krDgWk7NENLssCNedztQZBEc1aek8R48wDZAVA3w7ujbB4NZ3",
  "key13": "3udsxunQgNTxUmrJYQp1QMpNJ1vBWNzJ4aPGv7ZmjZqbeFyR6HwHViJM4A5SuCNnKVb6k32rGHnmZFA3CmGPLrBk",
  "key14": "2ugG8w6Tu65Tg4mSBSxFnauM8dzkhAg8G8ReRTgS4XazwqLxJoEAZND93TTehiVDCcovzi9ZyjyR5sJjvWTAzMPc",
  "key15": "4r4VSXpUThtm63ni8Lj5Ja8bNHRUwgPgHqtZk1ffpxmFgpiokdGrEFxzyFFja6yRCsW3Hwv5UmAnQ8WFWxfje5JG",
  "key16": "WD5LcmTKrkpqTdgiHS1b2dpWi5oXW2zyfKGVF42FTXaiyQBtcUooiEtGmb5DKBj1tchYrbYyb3Hr63pwu5QU4sn",
  "key17": "cohntGnK2PARXbtHHUvPirZ2YJqN8PAqNQ56DhtHpm8goiXkfK5fD3wab95W1AKJeDvXyFiYzUYnsnkd6U5PWbh",
  "key18": "2TV9VGznKGCPyMvAYS23uyQNigDc6e9vinuWS5AKSDetwwSfUGTU4tdef88Esz9kcQ5s5TD5aCUQFKn6qsX4RC9",
  "key19": "3WxF3GddCMKfWKYq9KJkwUS34S5LfdxkQmbXpSKZYfEjxgzNjArc73DpmtJZCFNhVRB7PNgL5Uk57fBxYbMG9wGE",
  "key20": "b1QKYSCJwDcX5eBqA33YUG23412M7pLZCVgjTZ3VXGUXKT3ynyhtmPEpBRHuTKLcunA5CEd2D1Q38FciUu1Y1R9",
  "key21": "rcP5SH5XmLG7o1EGeGxSxUnTYXSPGb77FT9AnzLWxQYMqyLe2rcm66LWbrqiBNH34j8tDgX27zYUDK7TreHnvxm",
  "key22": "5mzECm1mUSU4nbnXD6txuhARjdNNbt7ry2szhoezN7fmmCy6NdeuhvjNphhYg5sxwQBackpjUYPa5HyhyQX5ZmDj",
  "key23": "45p8PkG2gMzuvbjoMsZARsJA4vzwEfBRDE7M9ZHyR8X5NmXbPBYkoCs36bYc5REZd1tejoK32uazz9ZNe23nhQWw",
  "key24": "5fvvaFTu1RsLDo2yANcgyVcHDHxBRseck51tPAnbcHa2qqfxq2uVacY4FmoFshjiBGbavQ8xhTLWVMGGvseuEXvm"
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
