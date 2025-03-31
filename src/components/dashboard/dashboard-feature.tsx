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
    "4mpeAkUbsx1u3TFJV6UzpUAeD8KvNz7Z2Gn7WfhRDr3BYQP1UwKg7PA9DaV6K4qYkVAMCg2AjkgkiQji4AqtZ3Yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AcvSKQJXYjL1rSgop8G7yqZHJr7qGieGdUsYuBH1qW3F9e2A9Ko6hEdSs5bgqvc6s6GMbmC5Gm8MqVrZCgFB5oo",
  "key1": "nWgKQRsaTGTcEytMsPDKF7Pu7GGT6FmGoDVc4xyFvGKbKM3AfiVCxnS2hJdfVwpWqNA92BK5ie5TVHwLzqWpqmV",
  "key2": "4CD127T7LtuMzzoWzqMU7tDXWoXENt59D8oKK3BBt13usSK7uJQH4LUELfssiU1QTfwysARfBNQYLiWnLeTh6Xmy",
  "key3": "cXueXbDZJtkQAcHh2e6rdKzSHwUMFRuFJnwt13gAzGetRKsigWaEm4CuJF3PeiGzhbJPcoPPjzzYMYxaaKYJUkQ",
  "key4": "28CihzDCBwCi5yjsmeocg7Dn3kJQWMTgrqTnYegTFoVK6ehamz9SCks9WoKyqRSuWMNS9Z4u6SfmZsD6UNhuW7N3",
  "key5": "3ZEYp3BSh7uZMta1puKXqDsZd4Xjmbqg4gzyTSdUU1VyzhRAaWBC9F5v6Z2HGneYAoaSNHhv2BsP1yRPyb9r1YC",
  "key6": "4g78C5C7x3UvbeYU3VYnWfypfyQQv6KKw8iDqziqLpkvmD7NEQbXLNj4hYdT8iaFoeK1qTnUZZrDFqWAxLH4sa34",
  "key7": "7DDprFH5RthvaiGsuaqirtYyW5QSuETQVJPfPthJEgBzTumJycfq6tChkN7Fg9YBuLSWjKk6sodqjqW1zQPrwZF",
  "key8": "HDaqKtyurNLpb3JVRhtBaQM2AjFd9EV6F1LuejdJxwp8u31LwuobJ2HB9NzikuehxmeeAgug9vWLHs2XLTrY9dH",
  "key9": "DL9MZnTRLVa1HW2Xr4HTXa8Mmyz1kW5n9m191qjgHhpwjLUUBd1xZeUJT5ton5traTTYKpR26D2692eYkTWDtbF",
  "key10": "4uwVLiHqw8C5b3wrFGhi542mERNVWmYmKpafnF4EXb3strt2A1W6TTwFqHhoTupQmEnFMScdrvzhDFXgWdR9JkZj",
  "key11": "hDQDJ2uJPuJXK95EYDf6cwkNQwwFKBHMGByME2QWkqehYNFCSpVbbDgpkYfvcF7owA8JBMyKcHwCiGWjFxG7Yjf",
  "key12": "7D12Qk8ZcJVAAwBZUU9YAd6R1RP8kjY34f7vATDowyCz2wXyRM1mb4nfE2B2ZHnTrNnReArisP91TJ2Uspdj5vX",
  "key13": "5dBcLvigsXweXjQGs1QHHbkpLBM2medGxMfBdbrDmg4wPR6yWNcJPZF13R1SL52sJSGzBPkERgUar8GHfPA5TEVV",
  "key14": "4Ht9WCoMAAy32gDDG4vQgxan1zqkBr6DQZxJssfLcR54UBHgULk66n8yAKeLvnfhL523yjWqx43NiFNmSdZH64WQ",
  "key15": "3BJw5yRhj655r9fLbdHERaXG8mcPTz2qb2k8QqoW7hsVDjhHph6UAbkaDHd3somaXgM9KaWTJwmXgmBF6DFrcoAD",
  "key16": "489erdrZkLUFNSwxFPn8PuUNu143ZCbvdGR8tjLDNTtRFXVVGa9Jy6PdU1fTik4Xq7CS5qqj1cA24zWXwbR5Gob6",
  "key17": "2c8AkTztWmb7ZH4xHg46QeRhEWMj4k8Lwax5jU5koUXBwm4L6Ls9Z91XGHUdf8737PJ3urhigDoz6qYyEB8rQVGB",
  "key18": "XHUf32Tm5qXPhQJjBsYYSoVzZVLcgwzgxh1WfAC8tvJbtKEchTRxhUYkjDpSmr2HBkVwHBFFgBekwWiAUzpYpS4",
  "key19": "ts8BZuuDUpdwKackxKnwWKLJWzyBV1WqCpQdi66XN3jV8Ciru449CHYk5RD7UevMZ9ZtzeJes3uR6fgYvNJ5owr",
  "key20": "66qoAcwfZgwfYeBbzegXXthVYVX6JkoDLYRDnTEcFvuPw2Rv6W4sWKYobxdASBgAxS6eiPdgjkegPDcc33ZYBuV7",
  "key21": "2Sj4ToUbhRNRdcQ2H3GivV8PYAs7huGRdi563ovFs6ZXnHMTLVfL27Ad2SoJUH9rYwkzkBY9oqjJ7Ajic4J3KBrz",
  "key22": "2B1dFnL7NK2iF5LUt2KgbRhhiiQi6jcdeH7LuPfEsvroVADp22bbVwNwVsKdVX5tnr24sxbZ2z9g8skVSJDUVKGE",
  "key23": "3NHZi2nDhJVSojjaFR4bHEK2A7AjMgd6eafxsuuQExfhSP4znXA59ny6KK4bmMS6o1qpvdCi3YawZH3dwnDCytvS",
  "key24": "EcDjkUhg4vVGo5U55D9wq962QLgXpAXdeZgki5bPTMFNGxmgx9QvqiCgLHbTXMsRcAy7RzPD8U4ciEgShdbgVHi"
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
