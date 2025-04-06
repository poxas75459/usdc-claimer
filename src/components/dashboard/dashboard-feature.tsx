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
    "3iyamjNsfsSpMgpgcpgS2zQHhBx7hFuMiLQkGinhsX1ZaMEeBJn2cWcxoiJq4RvHfd8GQZxaXpK7ZNvRM2q2ZnJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mj4MyEji69ufPFSXQ2E4mys1XfpwCTfLcentgabrErqMX22HfrRqKNyTrEtUqwpg6RKU1ittzZBmMXbcrahFcCR",
  "key1": "5dMg1UedTsRm5NvQXU2cTNRXa2eV1x93yPUtgEJH4PEPwX99JAfsGyoXXvBfaWJG42gvehNbgBqaBemQ48LoqGMx",
  "key2": "3mm6nG8rp8MatJXZGa72fc4sXcVW8ABoxxwECjjA1w2gqWdEpfAh4jbtf5TKDW9srx7icJJaBD3Tykez5AbgcR9k",
  "key3": "5fvDxfEd1S4cQDCqo1GNrW8o23u1UBzQGbgoZPyQzw8g5oijYu2MCLiPFEsrif5BVgvhAMtfcyGvLAzqAZJWBD4g",
  "key4": "5H3T5itSuaQMbCfFZu2aMXjBraaC2U2zUE2KrKv3QQXTEwKk3NqtPvF23DfYhzxtTWkdFwwWrh4HUnR3XHgvkPe",
  "key5": "41SyptSHkvJm7rkxPs17X8TNBkti6eDcku5KYoPx6iSKmyweTLdCnMKC2UHUqRFhAF8My7cJMjpKd5PKdu25bZeL",
  "key6": "31A5R1Gr2CawTVGtZ7xpvXN8jua7eufQzrLTQfq7evsKFNndgpVDVfUmeaRnpkRxDtsWNT6yu8BA1YJnZjfgzgx1",
  "key7": "27nHNttYXzEnyyBPX6fkdcfhTS32jeBWmz1JHAB1jCyKfbs6r54mjdCQTf4MAftQNvfBwLVAJGGDZ1AtkHdUhX93",
  "key8": "3en2AsMjTde4GQrT4TUbqtA6nSirpDNRJ1uQk2vtmxQJUHPHBz4zfS8Kx5yD6mZ8kGAiT4jov5hMih2CfnKVTCxg",
  "key9": "5RrmrwtSsf3CFBa9Tm6LrBx6dZZkyvmzVqNwDvm3yHNq5Xbe1GsPYTBV9j8YkvP9sLt9HMff918NnrfJeQ6mkYNQ",
  "key10": "4Rx7Ew8wiACYZN8qj6Ef7q8Y2J2zaERAUEFeQDppvvE9bWNjj8gWJNkikAr75iYaNzVdjS5LxqsT8kRmtrfeAsJx",
  "key11": "2SkN7KYaZHipmHcgD8GUYBWmQVPV7CPoLZAfTET6SMiW1hnum3sB2KPv2vpdmpbPr95Q7bgquNJUVCq425FRt8xS",
  "key12": "5DvzNXRz1JchT8w6iY8qefXzxJTncxqMcJgMTS2mrZKhY3HKJza8d5w9Vh7WLY219Xat9PPD5QhHcLa79fRKib2z",
  "key13": "2oLLsAyfzGG96cuMc27zyJz354fFZNsKt7jgwuUY4qZqcAmT9poyB3jFJfYTRY2Xs2aG9pUDBzEPkz1Xc1wkpsWe",
  "key14": "m4JBi8xh3tAfoLL7kTWj4s6F13ZtHa4Znet3hMqvWedjDBwKgNRstzb3yQENf6jW75AxP9KmftP8otGsEv7tDt1",
  "key15": "7crTKyJA3mk21ydr1Tued8XxSbY9Gtomg7hhteHh9i7B34kCQDJHFvzPXXwhf3EgqT17bfMn5fdPVek2krT3pi5",
  "key16": "2ev5WJuzSdm13K2VfotxcjDo8gaasKbDMxDg9aiWi3AaK3X71VQYv4VQ1Hf3k6vn3LE9QQKXKpeHdDeH2XTjWWwr",
  "key17": "47VQ7SWbw7gcY27YjbUR36ewiQNkXrN7BmQ52Ev3LyQj3RD4oszohqD5ExKjWK4BEhsrdfZHnjdT6XMGrM6FGycG",
  "key18": "5pdmpMiPxTW81zQHuooFKkuWxo67q6kcPtymd3GwhVV6VJ52hCwrNRz4SpTMywtvDfzcQXKLQWHTavDGQqWTAxpo",
  "key19": "b6GP5GWdtii3CLRUrtRoFTDWVhdRLkqSNKSwKed7PFzw7pExvx758gE94fzs8y8SxVUKuBTp2ednxXgr8qASbpz",
  "key20": "2rbnMkALn5HavuRRA18YtE3TiyfV5qhqKUdXmidGNjXLDY41B84PXLZyBi9Hz1ncVYout6tZZvtiTNjJ7jyaixgY",
  "key21": "5gs9VwvqnHQ9Fy3xq52w2kWUb4HHbcWBTd9wKepsPhexme5vqdYdzx4SV5vTSCs4VgWomZP77GDDURBn82ZnpPW4",
  "key22": "hG7Riv7hu4tKqxQk44pqoDEuKJRivPE7Q9b3qc88EtSikyDYUUhtJ3QBN8WDU8V9UCHXtKC9mexNF4D7Z48w6Nd",
  "key23": "5FmU7eivs1TfULZ9MAqpXMmPoTENQE8TKnMAMzyC5HxZTJWGLbhz1hL26Ck529QHXVbQzT3h8BQjbwVG3WfQv8AF",
  "key24": "4TDxjW1Ejf5C99Jyca5TUfVbKGCUo7MbezyxVzvMgG82wZnKzhhEpCoq9QqNuWKMNUJCvmHLEya4REsqrQtRsKQD",
  "key25": "4vB3deawkKS2QgJoWmkJ5fe4vLKAbchD6PW6MrvwRrzaukV1vX37WzYJp61QxNYKKytq6G5aS5E9rv21vEJJDd8s",
  "key26": "KGEgkiBgknteJBWvTpbFJowVnERzpd3LHHsyhXJZJ3eAcWvDssjsU9ZSPD2A6FeAGJ3ZPskRKtmwoxWSwFiD2Lu",
  "key27": "pN9c6mBjw9i89ChqavpViJwMaf3qjg7zkWthZNPQga8THkoEHgsvBsBCBJfJBL9JJcs6zURjtmA1RdXKGWFmEiv",
  "key28": "3XsBvTDf6uiePp3HUdwzaCyzs6yK9Ye56SDooBb9cpgxosME2Lpd42efMvSnFwj8kk7UvfUrrRegQsX2EcXKS9eF",
  "key29": "4akxdFJ1Aamx3kxEADnBefwCcQZXCKDCnFXTah9hhBtc96WW188t8hwE6G1VZ6dFWsxqqnzeLTaL56xQXr8yCEhN",
  "key30": "5b5eGKkWhbADkz1uS4WKwhVuM7xZg9DE2fDJDa7AcQ5RvNQx1sZBbLndGv9b2fps3ZmsyHtrnbzxeQqK1euHBAB9",
  "key31": "2smU3YB1an6VSNe95dkd8U2ExPxTtTo3H6SXyq183MXAYcVCUhreQSzMT214QrCFvF5fFVz4sKFKajyQxL6k6Uur",
  "key32": "Yt1BkaqZSUv2HMwBxxoPukUx8N4DLxjmfkvXLkgq3hJ64oxk8MRukArD6Af2tgoV1usrmu27R27z9etnvtcFCJM",
  "key33": "3FdaxkoVkSrG336AxBokv4dSMMT6icrAk9Jt2MjHpRcgyzWm3STMyotQxvyt3cXPxxtiH8AUfAnS6BLQxfQb1R7b",
  "key34": "aGE2P38zPcWhWwhM7QRJSiM9Q7dLa3KfFEmLXfZShaV6k5bwQC9YumL7xmWc7vrhnypuQSbyqLXFt9BbVBx2s9z"
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
