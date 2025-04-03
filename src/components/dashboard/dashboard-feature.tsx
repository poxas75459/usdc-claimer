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
    "23t6bDgQ1nun5KrWA5THSQ9pWsFCSvdi9oe8Tqyihr9gns3G1nhxFXE6dEG4qkWWVNgkSwaUcuE57e3RKi64nm7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZDkPKvmnkqmU4RFoKs7Gsvxx3HRNhR1Z6zgaQQqbgsHdGgrLPBQcPZjN5PHuz8cLqGwus6FgbKt2W2dGN8GjGe",
  "key1": "29DC74sJ1x3wofVdycJWvrQGffmgZCZ4iMBs4UZHh5ThizPvkNnCenjFqRY2eC8kjA6nZc8XwGQKwH2n5i4MF2nM",
  "key2": "35pv6EaSiZffEscJ4nk6gHCPrs8mzMgGN1Gy1yP65bikssWp5FSGCDvf2WVeAV4reBSQRz499tszTakmRcvqA2dg",
  "key3": "2Bzpiny2UFrBGEcFVpw2WT1a49TMeRXFVQXwrrh7kyQEtMqjttXjdpB52KUdyA1egUuE1W1DJxJ6aD4qrRxMQsxY",
  "key4": "2qRe3NiDGyKAYWvr8MQXqkte1NLsGinDKsUgN1m51zjNeKYn3AaAyMj6Hiiev497XrS62VZg8yPyUK9TZks8LsZv",
  "key5": "38u7RsMuenbwPAFfz75qfLpaSdCCni5EvfimydVt1ii4iNsiJrqyUifVjPGWyB6yhpADWA3eHodCpioXRGd3BMAf",
  "key6": "4vzBm5C3YJ756XJBTpeqETKjdaHTZ6GJH5FG3gEDrWiRipqfo5XkDAYYeuELgWFYyFPcC8b2jnLSExibMjaYbkMr",
  "key7": "xtoQH6AjTpnauiP2opxmJWk4QrSJSUtx9kw74seDJLi4vJTnDokmuMWg5o2vvZ8ne66Wh7o4vXPM74t7aT6e5KQ",
  "key8": "2N8ba1uVZ8pwxSdXRdR1spFBh3WTFZecqYySkifXZmpFXkWjK5yFuS4p2b22zkeLpJsd9WAtyBZ5viB2NcbMYm4v",
  "key9": "2KBcd1Aj3TiQS5HpG1DiNS7G8wTVKnPTmQpmta18UWskwcZFXNmo8qaWPPPcZzjxTgBMCAwNiywAC14pGTwwu9pg",
  "key10": "65RZzWcnMJ24xG7GcthefdvhzmABhh6ZoWyLeKWSFdSr6wggGi1kDXWwHvYyxevJDBbqQdBy3YArZbhsiot8roaA",
  "key11": "29LSyDu7DrjjM1HrTGdpBq5a9JKbDV4K1RAWPD3C983KTHBXWPBAX7Cyk1cEWWuutcCrCE5HrfHgdsfLbh5g54L9",
  "key12": "3nJW2b8aup4UvKV8mwxi69Wj33fqkUPsfzTdJPYak9q8DRHaMLiVMfRuVyWopwLH2evRJtiBvSsvVdC9XQZoJ15D",
  "key13": "4Ep2S28nFwFKTnTM51akFoibqVEQN9m54n1xG2VKQvVR45g1TyyGiBckw7iLD1VdHAkmVbSGg4aHq9wNePrECAbV",
  "key14": "36ufGd4PzovSwyrPU2jhwLxuwQngTzhrC3SB9C65rAb8ard1HyWSZ2trbNy5etYauv4MuXDBPohnNGCNiPzxGRtV",
  "key15": "3dutWgMPrLCiwFwZtoxirrTvJtnFv9ygsXh7vKpgmasteJ1WrK63fLUNmHmFHxgkVRPrV8szHDCeMgSFh4qCJfde",
  "key16": "4zgQsBFLQegBnWJogNzwDD7cPqifii5cMQJ3YXxct1nzP6XssU6Sk1Lzrm3m9snJUUVpiX8PNBRjigKyuQYATLN4",
  "key17": "5bTc9FaktHRopPKHCV4DrqBv71q1KnP8PVvNUjBfZdHVvGT1EkvVdjyiSwS4xdvFGkk7f36yGYcC3kDEHSuzaibs",
  "key18": "2X554zLE1kNPpyym5xSqD3E9hCHpad6B2gHyaCwTHkS9uKykiHicCtsuMckbeU1KGxuXiYxWevu4wHU5snkT3wLo",
  "key19": "38CrP25f6Kr816osytngcWH4JG3vA1iFFsay5W3D56Np5twQbiWQjyTCNRqskAfwfkfyJqjRDAykL2TrYkvui66Z",
  "key20": "5tpGvDVjiEP8DTQDvMLRxViHEEj6gYTb9N1ZHZmnWGPFrPYNXVJboK1RQXGGyTSjoQ5Pbuq7M2tdzCQzc1sRgQfD",
  "key21": "5TnFYoru9ZLwWPdxc3ASaa1bXk3UnnP4uKRPWAiNBLwCURi4ExHB6TrPxPAYnKNZah4dSk8iQNeFjDxdjQwWaHvK",
  "key22": "2FKUybqGtSaeP9bufnBC7k5EFFbzdcfVqUDPVQFgoFNWFPeBftMhcyyWrrkdTLdzNv8eKYnvLD4Dc7G1PwDEUfuN",
  "key23": "2K1H61yyYzDvEhSuH8iYXXoqZ1233rhwAkRP842ZEPkk6Bnusam5XfhBm1mywydqKoMbt7K8t6tAXSajoTZAnMiG",
  "key24": "2rJEUYw8QQ5yFJyE5aBWHUa8tqXH3QkeunY9AHTRxP7VTHqdHgSyQPfYryvVnR2HRipq8dEWwPukdLq3ByzBTa4p",
  "key25": "3JNRDLWWELtHqtTqHKWUs46MpE8kujWo4BGZYo7QBeNArDK8H1fFue1cdHSPpGtYG3xwTFsvQYrdqNyxjiYor9sF",
  "key26": "Bp1NSaMcDiMNhf7NyXT5n4717ugNug9c5nywUbdc1GLMVuL8CFmALbmQWVcTETaBPLAKvQsdYHJczNVE3JfdZ9D"
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
