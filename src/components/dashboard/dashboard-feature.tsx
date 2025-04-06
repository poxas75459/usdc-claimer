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
    "3mE6C2wceE1NxFLDX1UrTYc4WJtYdF6QcLbMXNP1mrKZFLggyoG621fw3aDKfKdcUxRzJRKgSpabgFSC3e5wRppF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjY3cyS9sTBp14B1E9amEdUhBnpptEsqikHLBySnBQ13F3t83zEAZKoUn4WW7VxZMbRFACXHBfunABUg5a22zu",
  "key1": "4Egx9QRicy9zZLeB11TNDoc9EUWdASDH9VmKNKqaNyFtKihbs21UZzdowXz7ZXDKtoHeNq5ESZUbUVtvewwvef1V",
  "key2": "5JbfsVvsvSitryxWKpjNgbKSYRH76ZsDQz52EZoftJEKTqTbbWagNv3VCFH4vKJJndfNdFjxWLnmcqrxcknpXXDi",
  "key3": "5tRRGRpvBjxMkCYFnY9kdXkNV6Fg9BJ9Jwz7FVDWzo4mL6mbDNhHJFy1nzGNG3ASGTbSGHYaZVcRnsuMRD7nbfEk",
  "key4": "3mbc8y8nW5zbbGRo8Z9x3n3xpBX2Pstkk9cv8uKfFSUSu1RBpaGxMpKoZ9yotLKec8FaUCN8vovqMwN9LwZoiztJ",
  "key5": "3CT1CVnExjvGiNdAXq6uPkoPbbXC67Uc45o57kNUpupvL36PhP9Qv23ZxckYjPJ5oB2rTeMLSiZXAZvsD9V9RE17",
  "key6": "37jXHUBWjwiGdk6x4YsmGkfAi1PRnqkFpnMzXW79EaquF2KqmnYYZfxxT9zXb1vQxWWJWrnu3sTTSF5rUGPbY3ir",
  "key7": "2EBjTMVNig5Tm1G2atLyyr5jYFwVNH8N4L8qxgRHWsvDNF3MPCmGoofEAEy4c99wVkTJ3haUTyQeszPK5FaV1t4u",
  "key8": "5Fnntw8DgsJzpxFXBjVHEspVwwUCViJvK8Sri8xVuQaRcEomDdScaFqrgZKJZiuntzHWnzw3XUMKzdjxyoZAcCqn",
  "key9": "5jRisBNxpSWMRF8NEwZKyn154n6SoFSLDrvFpvS9CezaTLYLyuvDFtDYEunzi3AbDtxptqV498RY1sP5UXJoYNXa",
  "key10": "5fnxzyeUJU7w34No7Uzz68MSYe2pzNVvcU6rufPkkG27sT9XC9RDb4Pref2HA4wjHzQGUWYoy5iCsJR9CWEB1aYB",
  "key11": "GSt8nA1Rud9cuJTzTp1BnQURype2Hy2Cx35Y4Srq5bCN4Wr3eZRGzDmP4i4kNQo5GLcEbqM6sWQeJycHtvEqY6i",
  "key12": "4yKimYZx5YrTG1t94ggwtWNwXkmcEaahwD6F7fcRGrV3kekbRL4JBV1bQBmh6JTpk3hGjmNVYoXQVEqQ5cti5dBU",
  "key13": "5hVB5X9QaPBdThjRu1c3Euz4Yb3fdGyPVYeJYTDwndPTucov9bhQBHdGwH36Sgi1WGGzAxfiQA2bAsSyaMte6Q3q",
  "key14": "56rqy8C17s357wH2qNeUGTZAErD8jynHHLSmLxBhLPPKLPCnsjdevMRjZT9RbCaqfayHX4NaVMhDanWx8dRVUfs9",
  "key15": "4W3yrodWfwsfJTh8BLCBJJBMnDcx4Vpg98L86hvVHWDUAmSb1qBsgYmQRoxPVN5gqVVRf4iPJjfoGPUR9hkUmPj7",
  "key16": "2yaQpYmLU9BNCGsrhWNwMtwLq8w3U6zxALcxpAbjLFQL9afJSWyuLTbP6AcZoEQo2JNtr4Kv4XjEktpZQ7aCzxbf",
  "key17": "Yv9tD94tqTwMYcC2XV6XUJCYFbUh7pE5KygE7q4A2oD621nSeJ6cRufGPp6ngiaPbNsvnTUCrZsRQPzJQX5xUBY",
  "key18": "2Qy4J89X7yFzh7e8Ca1ZtHUAg5Mh2qWn42DePZzHMYX2rfHRFxAXjo6jnzD5rz8tUD5ZooXpVeoF1ovi6LRukDRm",
  "key19": "2imNYWbDg7ZoTHvXiprH7K6prQYJt6S3erT4GdkcDPXRtSyBAGjGWnQ9t15psGPCArPiK1WXWBy8np4b2P71eRnF",
  "key20": "66rxN86vdvKBJma9KkPyaTLqucbj6JhjPjwB4EVeEE7paGtnUo2EDV1AmRG9wNT9Uo6XWn9h3qZdQkHv7B2WcMae",
  "key21": "5Y8wgxN1bajgGMpW8jdV74A3GDp9SX6ypDn6gBiFyGDyeTohaQB574za4j39wJBfw9ePy85wVj5yKgQ3q6BXttCP",
  "key22": "4L3iTRDkk6dLYooExq7yM1RVqLyXRhZWA3B1uYKVFCe9FL1SC7i3xW1qWc5WQK9y6mQp1tQBkUqtzQwRMX88nxGA",
  "key23": "4qHbz1DHeT9TiknuTdUyMKThzr9TYcdGpUARnhEiKRcy8BNZ4mmYng7R1iEYJs3iAyX3wYFdLD7eCDczpn5S2DfL",
  "key24": "4NMZ7WPqanujapGqvPkwBU7Tn7MwHXpqR7VnRqT46ekr1iUyX8Kh4ehXmmdhao53Bp4DAjr3srqvdEbG4VBMRyPc",
  "key25": "yeEX4vYSs7Npfbwx4K5gry6UW5HRQrbiNEhVjdGpWadkFtjGabP9Tgf6JsU5JJPYu3qWyJjR8GctV7w3TWuHJ6W"
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
