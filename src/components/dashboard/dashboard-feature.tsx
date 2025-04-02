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
    "5kmggYkMKjG7v8DqrXU4rNfsVa8xagk499tKZBnnkRg1PyXrNpvcLbmatqDSnXA62HVjSj3r7njxpXiLCed797dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EwwiWiVqbG3YSxQLfMifWVDJwnmZ1oztSdEbBWoc7wtnXARHRXAPkxhEqN6u7FBM1Fy2aCq78KRtpW6rAtVfVV",
  "key1": "3DSRp8H1UcHwj49rj6HKsnhYMrPrjfH87kZK9WKsm9AfUYjq4QSdAtLexLqxSiWXqKB1iUE7k5hYyAG7bDVET8Kt",
  "key2": "31VuPjM2J2KBVVnKc7zJ3mvbJYjAbAATE8DZ4rEnpDVyx8551UUw7KuJo88kPDq4CWoFeVytSaXN3r4NJWVahKC2",
  "key3": "2umMHMybXq6g3hwYdW4f2TXnwQHv5cZxHuUqQi6yr2nZkhDP9WPBQhL7m3xkoXD2EJzn6CogiH425rZrYqaii8LY",
  "key4": "P5FXByM1psEtVSpFMwpHbPSSjpQrDMQv5aQy8PYK2VxsY66kzapYPVYDEHv7gtRPEDFeq6X8PmgkqKK25BkNQNV",
  "key5": "2ZexULo3ZL81uG6hsX7bkYE54bnf8sNF6mPMqaJkRhvnjqwymDSJWk43DxZP3VqnMKJhzNMAmMzPAXC4LjKdfrix",
  "key6": "4QnXj6vY4ejA99Eds1Pv3ijGHEE92ZavUL5UH6NWieLHsWhRwLRGvY85HKoc4xi9Nqt9ENuiyDkcTtANDDn2fath",
  "key7": "2zvGL8HRcSDA1eGgGRt54YkavHbjorARpKdxnbv7KVY5CurZKPqAhMoQriv4CuWSD75U1LYUP933KBUViE2UeL1s",
  "key8": "4MXWXzH4NjVA7kjNeBTCFQ4Wx2z2XWbFJuNNZ4FtDhtJuNkpUhi6QnJVohY7TFoA45BCNZWNgjEiYT44NKLwQAvb",
  "key9": "44xStBr7QGy2mYq8hJbz7zSyP9yPGRAuzGPLB7SJ3qV54hH1v4eAk38rAMmqcxULMJyFshuHLYF1CxqzcdZEAqux",
  "key10": "5P2XxEXQqf4WXUi9LRZhkTGDjpMyi6AdHH5HqiXgbbc3LMjsoNo7K6mo3zYpujEpeZp35GS7jYDGbLpGih5SxpjW",
  "key11": "5eXPK1cfzFdLRTELA4CTLZznbvKB23mAhXxfqtBKyi5ADXLA17EBePCGnf1PrwG9iKgdjEa2g1ReL4E8xdFfic2L",
  "key12": "3WToP5uMBX5SYyto8zJVUmjofsDiKE8qEtQPDkJEiNwYS7U1B2ZRbxFF72kdU2MHJheB4XT6uhe3WrMVvTQNwQQC",
  "key13": "4BJ9RhYJU4xajxQF1LokmryeRL559uVX5FLmm8iK2WoKX81JzbbvJHPBR7vVgMrWngmihhfktNhuGfeS4tQghHyQ",
  "key14": "3rk3ZxHvvMAB7gAocXkXEQK9bxGFBag8MSqd7Gi2iARUtsKMVQ5HVK9A3JNw3z7Bpi2eBNhhMPydgahqcVtXqkai",
  "key15": "3G3ch3oUjncsBvhLJkkgYekdkfijb8roAS3VSnLRpKAUAQfnfrN3ekWP7HpwMA2rCuRwHYqCBP7QnEiDGwpjxsVS",
  "key16": "4aX8gVTCTQaiCHKbyB8F2US9PrN4mQ8anW6usU5WjXETDNiHdVNpv8NeLD6SsuQRiPrGYtHNUpTJBDRGPxjAv8Cq",
  "key17": "4C5B3Rrc9nSD5pNCwmq9v18UdvYUdDxnjbG6oYDYcae1ZRdES6FJ9DfbVt6yvEbTWv95T4RP2ZQCAMgoKRh9Mhau",
  "key18": "4gxxay63tZuvkHtGH8kfufC7ongXhqU1hxaCnhgzuss6N7zw11oSQ1XF8HogFvec8J2iNMrJGz5cBTnT9U4q3UeX",
  "key19": "55tFgEuUJgDJvBoUi3XkwmcP74sd5YXwPhRND87aRHr3A1hFma4wWmp4tMVqBvUos2hDFS1jFg4wXtop1jLX679y",
  "key20": "5BE8UGcYdBNSXR3BYWUcYXsh2R9AR4Wc1Vb7uD3ekzHuLUVTRmfYSWQEiJvGWQ5iycRiWEdVYj46JbSByyWSGAA",
  "key21": "5bmpKiizkv7iZd3q4RrJGBCJxse9yRKGJHmxBztM5TADgrst74VoPTudTpseN2azzSAUv3DQjkvsSZWfDXkANDos",
  "key22": "3HcKWhfJL8RmqvdtEwWEvDCrzbigSwk4JK52mU54schB1Eb8Lf3RsRsosV8hPg7vwAkaEAnJfUCqWwvRaB9NdZzK",
  "key23": "5AS9RrzRw8AsFpuUJghSeFXbMRW4wda6ZESaWpzUTAUVNYWXcnvfiyeosvRd1d1NikTy3SADbbeTA53uWwijgZf3",
  "key24": "3VHc7AMPXC5AoSX2KNthQhckQJqLyukRRjAshtE6p3Lf9tZotTy8Du88jV7cDi2PYx4aojwWWvpERNqamhW372wM"
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
