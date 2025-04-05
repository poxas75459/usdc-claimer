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
    "4D6f4YZUakQipsWnP9TY9MdAwJNWCXRuF1a5a8S7zbhdcvpypD8Rjyv5kRipV4Dg4LVHaTDETZ35ZDsGVYqW3VNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ug2qBw7VrkcTJE4GN4pjKb9NfAMzqq3E7hJyu53BV9YfJZzohxK1q1YPP7chGdJognxjfF8eL6kSrHmDmSUpPTF",
  "key1": "2jFdBdCwLSAJyTnAHF6mvmxivYtNva1K6e8GQfYQsV9EEtgpYDbXPBPxNfY9f9vkQg2DgiuvsAGPp2rUqCovMF94",
  "key2": "2AdpEuNFuj5tWZwfLdcjZyQwQbLhcPoFECGZywpBvhfyExHGtSStjWZ5rcZGurY5bYu3qqzPKdhWw7fbH69HPgGD",
  "key3": "44qoDH7AEaZJ4NVbR7yPeTgZdjc5J7SHMzJ15ZMXhEoUv7fk6abnCkpetHHJQXiqgkuEcQ8kojMStRaL65DJebbh",
  "key4": "4UM78bGMCcazjWsDGJJaApihhk86uKTyvZRSE38tXjK33SYbp5UW4aCc9Vnfr3HAXL3GvXhTWE1fSymVZij6HL6k",
  "key5": "3x7Md52WhZnBfQW9WDf268LcEBErgJMcjQLi8PmrSz7cQTjkC7UBMZ5wT4k2M1J46vcUxyxChRiU2Ce3hX5Shdjm",
  "key6": "5xt4Z5Hh9vkrC93FXD9s7pKtUR48Y5mLNfw6Tpc6QpSdDKADCh3RBw7siyD4uvqknC9reic3Foe41cg91AB1BN92",
  "key7": "2AqfPDRFZj9s91svYrsKxB8BqWCiQDnEE5Rr2XACTXwNo1uo9rTUBKjgrhMiZj5xkBMX4HUcGtvtq9fuX7rE5T5v",
  "key8": "2ahYj8Ek44W6gL3ewm5HtH8Vb8UQQxe7QnqEDk7eaGcv5xjrkqp56LNeUtWzGTPZRPA8CnDfR8fk4b58eYF9UFYC",
  "key9": "EPSPbN7oymvqrzifi8jCecMFpZWj6AuNRTNyriv8hG8yQ8hvxqYC6WoB9rM2FWM6tG4CH1RyA1M9vtSnqxzyrHA",
  "key10": "2S4r3RKwJfosPVfmzD6XP29HJGyCsB6B6G7ctyx1TxyKL4nPgC1uYPNTVpiDFhoVZLw2UMRTuVj92NLzBLTTnZbm",
  "key11": "3BATrfxcPsHdDTHTpg4XHzPWdAm28QsSvM1kqhU1vfYFwaBohNd3KnWKzWGUkK85bgzQDit8bs5exHNqaZEZCsyc",
  "key12": "2qFH1D66tZrF2bA9Lsptsay143QR8Q9a4t4ChPAXgBeUCpm9JqNMsSp5fHKfGMZXPLNKHtd3hufxZXADejgzeDuQ",
  "key13": "4B4maRP5AzqPc8kRxE7kqssMQ75KpcBa4FJzQYoF8ojeND3ufjj98u998yE7zFDgRqjKMPU1eJcrLFzeK5eoe2vC",
  "key14": "5WKAXGRHMekji5j1PUdFBb5iYzJAbxRyEsURbxq23eHcfY9vijXWMmgD9RKYFtdykTpZCLCSzYmsayJrajLXBHn8",
  "key15": "2kopHwJc4ux23k4KQuWgwvbapXueqwr8BQXY9PNYSJHccv7sVS759VL7UiUQBpzzrT58wFv85bYeSScEjy9FNZVG",
  "key16": "4BxVNGJEVnePrfrCrZaE2VSb6neaVZohr8tjfFWaUPsK3FUNEBYmExYb3scb3aKSr6bq8t8jNufX5hLrcjwZbVDU",
  "key17": "3HaEShYXJrnACtw7ow7Esna8KaD9hMkDhiUDYYepwe6BQD44j7XXaVoJ9amTZJ6PA5XJt1vJLq12eKp3WE7WE1gT",
  "key18": "3yvPGNdeb48wivrXdeDSFqtMFHokm5GC7fGxiGqeCwk49EPWATYKnSdD2dY2pcaK46okvyH9DwfZQ21nHjqB5jwL",
  "key19": "777j4h8CGZuAWGkUaKpUAGyNco5X5FggpwN16xCu7uKW7WVzuYTNykFskjvHsyuj2VX3sZ3hdNifaYdSHpiCJbn",
  "key20": "3KgAwbPyUwasG768KNVyQe5uRerGJ8nHZgTa5vZz8Rv84YEvpYqToo9FWhVTV48C3rQc7Bjmo6L6xb5b8iyFJMDh",
  "key21": "7KKKb4MY3YzakmmxP2r7tKza7ok8sPZNKr8DaSX2oVZXe8tUK2m2FT2vuQnPgBCKa897fQhzC7cGUGQuhWdCVAA",
  "key22": "35NdEjgLeP3jhfHmbAxZUbu6yqYeH8522mB9d7o9tZWE2zFG4s9wz8UR71jtvExHD8jCVqsuNiHnVjotdFQQE5sx",
  "key23": "4tiobDxKbLY7DBYbgfXXVS9Ybtq7gid3ayDp1cCGFJcRQgMSut5hnhVv9L9pVCU1wdNrDTxWLFJ8xeCN4LBxp2TU",
  "key24": "2WV3hMdR1N3FsNVybg5yXYc3W6c4sdS2mccg251eiARfe38m9WujxsMHprP4jYEygHRG1HHYUcqpSPAAD1MzoNdC",
  "key25": "uY3ZgrexB3t5775zTXQkxaL4pEy2Yp2QGezYKrjBJBYzCHjjvmqnLvfaZRu3KZCKR5Fr466FijaE8mzNnd4EoPY",
  "key26": "3xqKP424z58dJ7ksRPgRoxsyh7ouev8dgm68ngd33KFDY1KyAzCtNdypXJ2qCCESBg4KgrJh5Lk55WCwA8Zxqqnx",
  "key27": "5wkS7HGQAXxygxwJb1LC62vGqQSSznMifRUVELS3Rk7Hq71P4gMX2cR8Ze7yBdxok3jfhyJHEGxaCPP2dqeRgsG3",
  "key28": "3VqrDREnsUNMLkYNHiPaypNDDmAy2YkLu4VkveKEGFSwqqdLWUdiNEKtiTJtFfXBBJ7ddHUh77ArLz8kYfut8uGG",
  "key29": "2a6bb58QUKYG6pPCaXciFRmNXg6rbrho1iCp2Pz94H892GZBtuVFRpe5wgUz69UiTUDs8diNK9SZbGswgtJCszmz",
  "key30": "2ZANmsV8BRhZ5KvZk4wcE5dreCv6TEMgqAT6hWaJbbScGGb67w79Y5BTnHum8cgbjE2aUfk74gLsbwgx1LaqqyzK",
  "key31": "4DqNYZXFgbdWwkALTs2kXySSd49VYiL6gChazwsDkPceim4hMWpBnvWaErjfTAsMnfAUUmHJhuFN3GPNuPcrmYKa",
  "key32": "64nZQjWTf2zqB8DijxS9AYPbKNz7tqjhD9dJa6hQPUCzJYN7w9okfr5uqJmDj2YpwE6eWemim26XyuDpxrUa3wvh",
  "key33": "BPvsEv2y5ifuzandzMEbiSAsSULJDDmny1kfx5exKn5UY8hCjMeWmKULjSkokT6Qd74SH9Dp1d6frgpvugBoZRV",
  "key34": "5iRkTdDLCLhpE8KpZXWZjDD5Uyo9aAWjam8C5vDkXi5sbPZDTUujkSPopNaNZpYBVmm7Nj93RXAnFsdE1seeonrP"
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
