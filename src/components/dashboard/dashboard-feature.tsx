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
    "26RKQ7wh9NtqPrLZsg4g5DRHu1JSHk8CDW6hcWFCpAFr6TbTNxUDT5htdjpnBRAj124jweH5852oAJT92t5Xpoep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjNYYoCdfaWkBnC36j8gtSGrGQ9M7FDoSwn5PMh3jLr4sjzvqZgVznVRLQAMFfRxo7bFnZzRVChz7A9vEg7wSP4",
  "key1": "44PyQ2vpgwyPovdzEwxDUuxE2XrAin9iwkfNoNHx6hud8zxhddZvXHWRyvWnX7BHzKFrEuJdGBWWr84TkiHZGzBY",
  "key2": "DfE4KXGBUJm7KiFJ6DCAZ9b1mXwXUaVgj3Gmkk4QjbEDfoLa9WmgLUBdKNFis8RNLcX4A6veVK1xuuQNzJDLawD",
  "key3": "3qYk2uUNfYM5YCwcgtkgMSvX8QTuvXf1i5vhBUQ4S4yykX7VcXtf3hR8a9Q4h7JVmzK8FoUgekH9k9qRCEefrRR2",
  "key4": "61MLWhjoHDkzBWZqoUusHcK1PqNaqHMmfVn5Anb4KckPY2ThcE1JAx1w2KdQAtqRkNbkJiJkdFjbnUzB6sAResbf",
  "key5": "48GgWUeBvnzJsQfDZrujaEcEC9Cd2vuRFyVHc8kP2heuyCBbQu8XMVa4DzbdLz11T44LzMR1EV7a4ACYoxi9rVd5",
  "key6": "5GRLRKDQDckMwgUwXLBEZnNz2zdBEeENDThK7WwUcGwF2CSvLGNHRFmAkE2hQer4U9KoJ9gLrPmbg4VJGMbnKL3F",
  "key7": "26VLJavvEvLFpaTKhWs9z7UwJbvVSKraPVfkX3XYmjHH4wYiHx7KEdLS2TToBZGxCLumyzpCzNxBygi6WN2jTQwh",
  "key8": "2Mc6HVVNqWqLa8WnsqkYVY2t8E4NfwmRodaF8NMKQRq9vvzeHhpa4sXC1nJHu5TGkZFcirPU69jZX6TTC5htRNZr",
  "key9": "3i3a4apvYHVeDPUV9n8mi4a7kXUjPQ4S2dYU9VDoGgCUwqsvc1vnHgkFuguVVR7UbcghSdyMNrQNwdUCvQYdfCpX",
  "key10": "3yzv4xRgtMu6c1L7wGFSNhZSt3j9A2moQ34oiQRbqFA3DB4TtbSrTG1wxuncTa14fV7iUVk49gHT5V5H1zLc7t3A",
  "key11": "4ZVQMbe9LpHkLTGe9jfqWuJLeJajx7CtVG5ZLQMVZa1KrdKrqF3ZWv4fjwYvvRKgCiEdNovjzdqhKSZdgAoqs8ym",
  "key12": "ywtCpA8TAFUoMUxkY1vej8AETNvZDtfpruTdjwX3AMwZb1DQKaN2CnW4ZYaHBYpKyHCCdhGCoPWq7Ccc9GBawbY",
  "key13": "2x3piunZAzoE6iWWbEjWUaxjdAThf2tVKXwK9b6GtQ3UaesRBU4yjmhB4eW9FxAvoziFoj7GYGGoYqdXVpiauqsk",
  "key14": "3KJV1NADjMQb4u7MMuMzRnnob1CXY7k4zw3qpMoja44Xkf7rcya2pnr56DY1Pq74TfAqQAibqrt2WdmCG3WY7tUv",
  "key15": "5ZdT2foyZVXLjgn6hRzLfmfH2o8gWRDVkxLzwmcCFKyUFHib9ZYigmLeWnyqkBpEmfkrbToV7AeT8RFiNaktajfm",
  "key16": "f9zWpmQuNmthWRHq74cdDX9Ac4GaTzVbTmX12Y6oyySUBMTtREvW5A2G8Q1q4kBpXAkJuxnSbRhCqbpUo8Bqzib",
  "key17": "5DRF4bxRB1vJA1xmY1RFso87euNmSTucQN6SH1GK6EJGE1bHvJmxFpDaQJDUKL1NvYLGdm4UzCyP674ERzLcJxts",
  "key18": "5bykQCvup7vd2ePWznYhQNPdKge1R3RUdNFC2XfWnandpLG9jw7NDtoSCsQtwcEmerw2mE8N5J6vg7WoWxw3r9G8",
  "key19": "3hh87NHtbn2yaN6TQDASvem9iwNgzh8c4N4kr7j36H3xg1Lm3TnCcGKWWMf21hiaQgV1TWiCKsfYkMEHLbQQ8E7t",
  "key20": "4fNYK15JaLXpyzbga1FLYPFrZCrr8KyT56sJcK5xp4Cbc4XAcsioVoZ8oV4X4svZAcLZB6bLSJeudxEJUDrJs87F",
  "key21": "GBtXveCUBW5GmLxGVhJuXg1fCMpdTd8MXkx2YFtZDBgM5A9dtAMBNSopEYfY9KrA3ZkzUsfjsTpR6M8zmLDNWHT",
  "key22": "wvbLTUEXRpskHfphG1dcCFHGpUiii88pJdoTkTqMZRF4bXi5SPJm8qi3zeowG1WNBA14EWGpTM4nbrhX727RRXy",
  "key23": "5v5n7JpJoixauUXNMCrJJrnjHaZ5KLEVkXBgzdkLnV6phBiweMFeKQL7Ah7XRRAhjiQAgzHHHBUBvxZQc46mavzu",
  "key24": "58RqsCQcPi9pQTd8a3DjTqHgTmFA9UXPWYiEcCmtxvBZkMa12xrd1ZPsHwMnXV3UmkQLXNLQJ9c2nT7BoeHidjKp",
  "key25": "qPrB8ANrwFCBgah7KwyHu8eeZpNgGbHpugN7HLSiidomNC3CSzgnAdzqNbcNUq82UVBG9LUnWqa1PCSMjqvUhfb",
  "key26": "5jwLgyjJYHCcvuq98XkWqrcUmo6qmNALufQ6iTAQg98xbjs9LyzWEsk4M4yToqsiBnWzt9eh4Ujdsxg5wgqjAZCA",
  "key27": "2A5MmEyct7iiWsS2tTwGbCDcNCiFd2fHvgLwR9DPZUj6rwJ7CqezLoCWhHx83fBci5tf5X9Fjdxb6cvHds7JyFzo",
  "key28": "4vQ5Kch4SEeoXJuTAKga9ocJ91yQcnfsaSi8jkSNSbCNCKxuTK6E6Vr5xrHM7Ez6oJnVLiimHnRrQNir28bWTwtt",
  "key29": "JXCVs8VhsgTAgDviXDEz7Y7P2qtYnaZRmtAvfBwK9pZH3Ry6AF7LkWgVtGGAx7LkYuJyQsvs77d2GjrUSAwisX1",
  "key30": "5fh7UfYdRg6CdfXQSuBgz7fuR1Rquqfbj4V869LXfzVbrQspr1hkkYTXb6nQzCxGeAqRkLqvPDstpdb8qW1dQFHp",
  "key31": "3Dr8ovin3413qiCLvHpH7Csu9cTSFgjQUgpibjBNoWmSRnjf1ekNjwRd59Rg8kvRJLFTJVm9qwZpo2X7RyVoZY8Z"
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
