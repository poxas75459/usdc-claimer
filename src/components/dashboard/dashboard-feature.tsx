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
    "5JSst6GHa75oacsLxEicc9Mhk4AGNf3YHwA5c58fqZnmtysgMFY1QxnDvsKUcFCqTpJ9ZrTbKsm5KcDzWBDAPJBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTAL8KE2TeaXxTwrKKHRjuSxM1MKLip1TVS5mAbucwNb2BW4YQjnvEWZMhuAFF8rku7ag6MnEDUvEJb4UoeXdzg",
  "key1": "3mx7QN3HdEZ5Q3FHk3RfGAdp6EYgF97cJrcduAhF3eb5NHkEhHLz7jowp3ob7ai1hRDgUqc11XnEuTTzmaaz5eBp",
  "key2": "32N6ymDPjQSP56U7KQFbeHKn8EJcMJW6qywLYQgoAoDLCrFDrNVCmaG7ngo5Rr7T5JKNDPAvq4QoXttamfQe54RL",
  "key3": "5ErD15VyeQVVLZCQCtLisu2gXYRjDHvABDqNPa7gdqLf3EVc7qqyoAwxDtSH981N5b94pbE3Z56Y9wGLjEbYnem3",
  "key4": "5vWwowj3tBoq2iVCp7wHGqTjqeW8JmhrofFbt1Lw6777LqYUdHHzmacoAEAVRSym9ES3Mw5bE3gmjTJbTsooTdJ9",
  "key5": "2mv6Kxr5bMMptiVpcrNbdtBUp6VxD3Hp7P225McgQCg68ekrKAZVGCUj4EDWCp4Hc8N87oHg5kJZydtx1vFttpga",
  "key6": "4cZZTg1UAsXazz8rHmMHZ4Ysd1wjt2YEEjDMh891S4dJtsAcq1nxnQNnBVeGsM3cTqiZxBEsN2XtABudttNVYXZy",
  "key7": "3iuuwEBSdmpKZLZEfpyk4wfryCHuZT6PGRZLge54SVrneM8bWvNrsfzBTxjk82Zs81vV7jrxwZkGxr4pWQRvNjFs",
  "key8": "56pRbnrmdKHjrMxRWdQxXrDNdPietduP8kCzraZLmkCxbdab2bWAVpKMCoANwyFt7yAKHyqx7tq5kAMxMKNJ4PQq",
  "key9": "4wZd9fym6RPJcAKQhU6ViEP8KkCayucQmP8L6iGcyR6AoSqpfzLy4ww7j6SoNv5skV3eeVnX5icArHBLPdiZcqK2",
  "key10": "3rsTkBeRgfki8NK6JbJBHyJcMLVQCW9DBhEbK6LhmiL7SVr8qWbj4gF2URKmEJJC5qgaVBzY6UHfVmZNwJUPFNwt",
  "key11": "51QDG9TxRSNyJ4PgeEBqVNF7oKxC1moQNvsFNeMuHNJ5TzVrHH2veYxyAi6qJ8GiCdzoK5FD8NA3qFdG4pTZTLbL",
  "key12": "31hraE3Jc8pfqbyw4RvHq9mZaWvk7aCZx1fFKCvMvvotTz5DFki6yHQeTTC19edWzyen8PbJnrWarCL4uYooXPd",
  "key13": "5w6ZgPzxurKM8uRqFwVmjbh2UTjBPP2euzkgN72oMLPm3woWMChwj8MvDQR5TyvCDxYLB6xL9d7vDLRShkaw4Dtr",
  "key14": "23kVe3wPXjwzcTS653ouj8u3jDULn8ww6rCMRkbdzN1C9AEyVT7c7sQiUjKkxTJcYmSnmk6av9xdC5pGF5dsdguT",
  "key15": "xDLcXw4UDFmWRjPJGPqLL7KoVB7Jwm2B6EmdhdAt7YRKFY2JBrMGVJ6Uvv7mt7SpuDk2YBKky19aGUj6vngvDWH",
  "key16": "4fdemR8rmofoE4pkDYX2ZnQU5iSbCTVathhaStYkmp81gkoCcDWc74FovZsCB3uW1W89PAwyGf4jQ6h1dv59wXCN",
  "key17": "3FeesQ1WKNUHZ9TKBEr4xemp5yXgUmoF2xydRWwquH9G2YjatwTxW6TR2xVZ6Hd3HmZd1gSQYQ6soubdTukCXdKX",
  "key18": "5iUQJ9h7EbCmg6bUo7YWmMuKGud8EjGW8ZCbZLWP9o96zAXKubNxMY4AdjXv6vZUEdN3zPfm32yUspPek8eaNBZG",
  "key19": "5KmD3wsu3FoHvBW5XGbspcKtJ9tksdBuMJ9o3SK2F34N6jrcYQzdJPY8HB7pohWagkykRVv7Y4tvJdBrXkTGXxeZ",
  "key20": "4DMbJXU2CfvEFJ6ooXRdWvPJwzH6rpspaCSsuP2Egn4cf4aXjcKM8gJy14aXwEqWps2LQ1ncjswMQbLgq9ydJ6a2",
  "key21": "2iSMJVgYMGjt9ZqFJP6mmUzzfBMdgyE88931fD8fGdxrRZPjU6fsPKak6ZqQkp3UZpLGtbNkRFjYRQgsR15C8cuS",
  "key22": "4GS5Aoyxe5c2zTMGWG3ZkHuVXMTyJxdxNDc9uFoLtTVfawz3vQ6LvfWVJ8Qcto88mccjQg7fqXGCYbTGdjqSq2mc",
  "key23": "5qiWfCq3TFGZd35n9msRFezL779oGUegHc8PUAqKVsDVrsqgadyV1jMv3vu8Ca7yesPxnHM1sNCsxrXao62RKEzp",
  "key24": "q6C3imPviq9Cnc9ifuTCwmT4dP5M7W529EhLzSYFBUn26TZyZMFtbd7p1iQtVdBmb3E5hcro3qKTidg1Q2WNu7a",
  "key25": "5zizFJeXdFbY5v5QaM9UygVSCmagd1zR5EftMsSruxGhMGpvtz5CgMjRXLVJgcckKpTsM2atrYmxyS1jBNmao8iU",
  "key26": "55JxjXvr1onA5C5JcbrAc11VU8t148686DsADsuCFu82huoxmM5FcGcqPbQFMZdsoaLoW5UXftqnoBaJ3G2QhBzF",
  "key27": "2Vc5aAziywTiZYm591H8mE1LEJXxfwJeLFT68QdXPFtEJJzbimgaGNxKZFchc8eie79xRU2pgDoV9YSRYySLoqsu",
  "key28": "2srvoTRJJYhgrKDGZ93fUyEsRykFzYzi6rnc55yPBFqAyn8g19uMyj8PtbKfqKbzZjXHNySptiC1X4eZ99LJRQWg",
  "key29": "4w3KX4xy2k3R5xK5ZSKhxSdLGTkRccwHmBQFsp3CNju1z4YLbAD7hjZG8LUW2CnzSr2yeX4QkweG91dZWYjGS4Ch"
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
