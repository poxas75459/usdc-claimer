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
    "2FnY3AT2HxPv4gi87f3REfcSXQ5cfCLCyiVyoNDHqvf38WzFM3YU2u7kLPMffmArFXTHznr9HAdf4MoLekb1FxBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BsDz9eypVcDSP3CJEHw8G91nkxFKrz75N9nTFvbVpqzKgAVn2jTyJGRVrD2ns3pkFuW71R6tqhEj2cRBnKj5jvv",
  "key1": "4GWNN5KVcccLFU3EPAYrDZvKiPpeWV57o9Q3rQNfdS25oyQ83fYty6qUEutX2pToq7xLZHhBjUB5HDLSofnUPMk2",
  "key2": "W7YqNwXbq7KhYr1BXGk3mA5Nqk7jEpSV6NDuJLnEPM69kaFSm7SN8uxsxtP9SLJjjQHF8HoZqYpgWsaErLhwnJo",
  "key3": "291f5ugV2FANHABT19qWPa2RD1b1z7xF3K229GtxoPxn2wqF2jGs5ojwFHP8D6s8mVMUU6A1AmobzUamyAERYG2M",
  "key4": "typKq2kdEcmBERs9Kr8a1W6ZwDMFXxEZf7jyPXvVYi1AjWw6q8qaQmH6QuGXtc4ZvU5jBpMqxsj5hnnUYaz6kKR",
  "key5": "52UKTHt2kGsXGt9wbRgHjJTmuR6hxHMW6YpS2KJQXQq3KBMVXgLwj6t3cJFgJXFHPN3xTDpuvr7Khan2Df3Hf4jJ",
  "key6": "4EnrzE3yjJHd5rJPAcSTWZzzDukXNvyW5Z1g6k6D6qcajVyRCqqR74jSWWRTxtshD2dA8G9B6Uwh3s5hRZPUbEde",
  "key7": "5PcTevc3ubqmG3oXSxXbmitr7GowUXiSgo6ZEgLTjHBrXPXasJCXsSodikmqMzJEoVgsKbPH8WqiH7QM8eqHphP5",
  "key8": "2tvRf3NXXkG6TBERJKagZNPDBCBAXg5VUwPVGRLbi1xivAhHQxdnhx9YeGnGaWBnxq9g5wDTWWYbpdwhFtzVdGyF",
  "key9": "4LGqHPXVFuHLQNXmQWs6d9Ac9jz3Xj7joMYxnjPyD18AwbuYXW5jhVQV9x4FUuaBx2XiMDZG6ZhBmYKbHeU3PuM9",
  "key10": "3XzmRSx6eDdg6DrnrdBMoJg6DjGgv6ML9cvNLGPuuc5eCjEkcygQ8zFmdNcG6oLFuN2ucwJzZcTA51oCY8CJPg4C",
  "key11": "66ir14rLWG8Vpe9WXFYC9Amp4UdKuvbCVL8DErKti4aNfCJH9x1QfM2F8hmEUjzh8McXnrE1pjZ3J8HR5UKf6P6B",
  "key12": "xced6teCMZ32rvccvUzLWFp5WTy2tbsayqjzt3oVisReKdQoQKV9nqBqUYV1oo6o4cbGRhPX27iE6sEwgHrhgHP",
  "key13": "Q4rEJk1E7zTgPuihTSzMFvD3vcP5ecU8UqXoPprHWoTycNNS6Vh1RQUXR8VEttokgLfjizuXezYziHWqTSxhVHg",
  "key14": "61mGSRRATFir6AjHLADc9DFfUupQtKDY4T75UbZFfoN7bMzCDPNv3tARPncB1Uv5ZXY5d7JCjvC4Y4vAsJxVXH1q",
  "key15": "3LxtYdW9SGZyMXbtmMZLwyWAyrbYc3NttmMqU3FpuSaWzTWHtK5BaMxz2N5ZavHXjLKbmHPDFqzUrmxYf5va3fNk",
  "key16": "3t2Gjvma2Vd9AzSDvAF7t22PuuCy8LjquoWjKw5NAMvu2EZQkj71zezrscLT3tvNJiYqHAh2d5CP57iGgKihMjCa",
  "key17": "4Pmi9x8EgfF4QrfUPso9zYmvRA1iBfNY5cW9LKQdQSrCxQoSrVHUhSfMbjEvxwv7uhzYVbpQJkyec1TvTJepDcxM",
  "key18": "5a8sEFcgpEE7UYTxFMVgGAdBmUwbCCtTEnsMzDAGKEp4vLXnpV39roCTp3pvJMUxvmwUDZK892HxSjw6RbuWwSEL",
  "key19": "4oHY1uy63HYu8c6tVJJimkDuZEym3a1jPpmfTiWrX1Nz4sFdwufDy36nQfg2MzrRhzobEjB1Tq3MGrwtgNNZr8NX",
  "key20": "2Ukk1Tiz7EvS78FQES5WQrDqHhQskkfbJm7Q1Xvdbog6Z5N16VYZYn5inBsLcgj8uDwq6v4N46kTtzjGbRTeotjH",
  "key21": "41EJ3yM1bVw1XtnHDzwgfrRKDvRPLkB2nxEDVbqtp8QMe4iji1NqEj7Qxtnae7i9BAmGeBFs9Dara8o5LBVyuaHa",
  "key22": "5FU6muFrQESEK1H9zBdsRwyMNiPhzPECBYeXfjFUZ9zUu3DeRKsDU4J29z1xbwKQ1KSvr4mN8Yz7C1Cd9dvVqJqh",
  "key23": "2ths56ZXkVwPLBFguNqbUV7XkKvTdgAsxudea4HNUMifgBWQAtnKH12csipV7oF6qBtcwMukm58DFXED9kxdQRiL",
  "key24": "64K2pdg4T9A5CSvFzBwfBjbFDNn7txjKXdDjdeoN7oc9NQLmSm9TD662tKmpwvP2oB4k3MTPp4ikVeACHLaJH5Ng",
  "key25": "2b1FKLf4aJXBA3iJQkbxscMuw6FNUxwcbVwpKYr9HixnuGUhHoAFkuaYJg2FovCUp5MNzG6HMZAD3n4ZvvFDBdUo",
  "key26": "3TfnhFWxWRBmYyxg2BAJHmXSioyjqg4Dfq5vLj3FPwSGh2PUag4nRZKebbyWc9DWcuCi2K9igD7uWCKbiX59PuCj"
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
