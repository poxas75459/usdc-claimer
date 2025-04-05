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
    "678tYikJ7rXqu5HYmDc8AJMvDMgoLNJ6Ms8My9Juz4ztNTdwizSjzjcjzj5wf4XadXRJtdydqVTvUX8sivk9wDAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AHurkyXVoKJzkUNChiiYnkkPL6ifN6ZYBE5qzxg1mEaMvzSRiZs29vCh67H6taAcfqdx9gNDNjehgsPHiRw5WG",
  "key1": "FQFf21JQi9UWmyMhQ4HXWtxJCcH8Uiv2S8d9jQcQx7yJpyAxPsH3ai4LPoroJq1Ykakmfb768tW1YNWvnVrKA7D",
  "key2": "3bABG5zvgLGTUCFo7cGhuh8WQSUaXKap7UyT1nyaLoi2GaGVMU3oujWXUYvbVurzwaxCYSpoFtzxJAa3QNsxc89R",
  "key3": "FQxxAof8rKSW4iErfp1Udo58vh1kBYJ8c22TkQo3LPnEhtdhtw4W6GCMNNwTArRP2dkjLp1tqRukfXnDYcnUhqa",
  "key4": "3MqkqJwMCThs8ce1h1ewe6BziEYQDgg4L1LnUQ8tnYrYvoHruSCZrVpkKrMj3GApwGmYjd5rLXz4j62vag9BJTpD",
  "key5": "2pQLJEvBdjSWB7d1zM8dNdvwSshAJUVs1jTo6BBZjhaxnt4QGxG9k1sbJD6WrEqQaShPj55JNgKCiCZzbhNs7b4q",
  "key6": "2DrasrbJDTherqSUjEw9h8dEugYg33r3edtnpTFqZiH7PaTzz8At6WMxUE86QeUhf6KLjkkhyNuvkdPEufVJVpb7",
  "key7": "23d8yjy7mKq4UR7xExdd3bU4Mrj1aeWCH3gSrArDJB7MbGVii1FjigxrVsgpVGFxPY6rMtyZwLtju2QBShkW8q8E",
  "key8": "4hJqy8KtDyQmnGv2PUYdosgkAu7LsAcZ4TqkkmW8NCjauvFczVRLjmvDgLHMoeXsoUdxJKSqMAnVM5RLcD9guR9P",
  "key9": "2SUesvyhr7sB2LXc8S1iJESMg61HVVuYB9xLSjvGSREtycgzYX2Lzw7wAe81Yi5AfeVLeEvwtMqMpdJjZBhP4nGd",
  "key10": "4f5ApyESqGxYXYc36ibWpkdWBumocazGLfZmQwMkoddiWhWYmRBCNJ7saWPbocd3JtnaJGXUEhzKTMoPKL7TPoR4",
  "key11": "4fGZV6i1yfHcCvZF2bRgAmuKy8fDH4j5HCUw9DSb74qgJ7bGTHfaGTqei2J6qKnuUSxFcjpx7diiHzuahsjQCgVf",
  "key12": "4V5wceshmNQDas723KysJVRMaRsi2xfjQMASvE3ig52w8VCXYfM1uMRL76RgR7HkKKNSE1zJ661fgqCzECE1Rm4C",
  "key13": "TeFaj4TY5q5UnwMSNNHiFZs7ydd4he4oCMSH7FGujm5zERgd8guzeQ6gppzoP2UWnQDnXVtyfhS2oHorZbmTa5Y",
  "key14": "5tSTES2NtLVDkR7WZQeET4CqiM39jhyoEoR1mmMvVUBGaUF7S5yCPx5wspd6Jngsb78z7ot8Y3HJ3ujkGzqR1QdJ",
  "key15": "4dLkHMCeaBcYTa6m5Juszj3XHgs5mKKKewkRAZRBBd75tEzWn1w6byidxGVps4QRdEpaTDseLJZApGwXoCV3f6SL",
  "key16": "3UvaE4gUjTrKjjWBqgkqTjGzs54ER5TRZHEbnZL7p4wGytjEf8UsP7wB9bJccev8rJzo5smQy7zWYLVgRThhhud5",
  "key17": "2GnJVdRsoeoCtE6BPiM5oMtQziVrQkFApmB6A29RUgbvQYjgJsr2L87yRNexF81JpNVKDQeLg3znprwBf8pYTmkc",
  "key18": "39n2qW24uHNq216eNUjLWyDNvJxLz5QiE5pYhGhpL99UWsGybqUCgya5PZsjLgbnP9WCbYEaanGi1euSeKLq8ezv",
  "key19": "2jVgW8z1kSQyyBiYfLUrYG1TdPMofZL6qrKdHL8nBTrvLBwehD5XV8DPnnEyk3FWmrBCzUefa6jaMYUjE9eJEN1P",
  "key20": "dGmVDQJ6WDbrXbHF6bcMfzCuCAtSzB2HcTAUaf8wAxbWBSQQxJppXoVBdcMvkYCeBg3Pqr67zUfjY2ueraCthjW",
  "key21": "3FzyzeV5KXndUfYPNDgMzA2bhXLeJna2d6Y6A4uWNssmt7qNVYF48cgMMvZnLDAL3HKBH7HNakAtZ9d7CGAtZy1L",
  "key22": "3BfRRCjwk8jjBUfoFoGFhh9KkkjWyMhNQD4dqnJtFb54DkbYwNv4wCwRfmetmt777exX3MnF2dD6qY9EQDHtYmQ6",
  "key23": "3owN7ndE1DAwxu6ckNXVPTtadXYBRP4UPA3G3CDVXBHgdQhUXtpNVMxNVtAYdt45XG5XW59bosj4U4bTTqWqzUVA",
  "key24": "2WnRn6EQi3PFCY5GSBCMiQ26jfsDbpbF9iDmyZnPQJxmxUaEnoBStj6CaXgY4WasZkKsqHgjNWi9UP4xqWCLL9SZ",
  "key25": "3omntuUhy16D49bUVxZeLTz24JvsE27jLaTFCnkeEmEfxS29PbLLUQMNMSgWcYJ4rBUfjy1RJBWyR7nbBDtHAPR",
  "key26": "w78SMMm5sk48QFQBQsjEqjijKk4HeujTRCHwZi5vmDFXPVVcax9sewGMg5bHLuX2aWLTNCabxxJrKQbvxe5uQAg",
  "key27": "5rkiPJuG2PyA27uxcLBGL9PidazaUKNF9ZG4eNMnioTepu5oF5JXypdTHWpogTdUZsz7QUCCyv58oukELDa8XgaT",
  "key28": "5upiwePN3ugEQngfX1jWkaA3TgUR5gaFtttqzDJAgGYx7SC9AeMaXLvLJDEhtmx86ozpuwPxZ2CHxENC4GaDR15t",
  "key29": "4oCRV7Aarkude8zi8BaazHFGCxx3ZuYdbWkG2mSohiXRXphQGeQSV6K4qS2SKsSv5RNyss3DYsfDMiLph3srrHXL"
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
