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
    "3ThYaWTuT2CovB8xDn29EqkhCt9KG9EpPqTzHvENKDAgdQoEGLBTjYMArEDezu6twNKKhxJkkapMWv4f3TrPkdZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nTNjNcDqepYg5khAt1L9NfWPSMUciffUp46egZPpu7kuFZ8FXCCqur1DpSsK1Hea3s23pg2QqLSrFpPqcf9hU4",
  "key1": "dSV4tFL2FRcWJm3ZW7RtwrbwZPqpWbaMbuWKaBrxRKjifkinJfNNfUai3xbFKUX8jpbcHVq4Wg2Hdb4ypturePH",
  "key2": "27ms3R3HigY9fQovN5YikMDhecVotDm3pn7Rwdp5X2otpfGxaxfwzhWX3MYMK5aczwnNq6xsBKonx1w969QMSDE6",
  "key3": "2vV4wM4uo6LPHy32KxEmUu7ppnkmnURkYCoqyQ9BJuypc6LYGNTvUbcocGA6GfgoRmGALCkg9jUuQJ4WreTCo5nf",
  "key4": "4m4ezSMxpWPRsdP4PxgmYFGQGKZgKJMFSMzGrYYVJb9xwFYri2DTnN5mwfFYwANV9RAf5WxwBXZMvDzkxDtZUtMS",
  "key5": "5pD5xmWyF32RMnbUdMtRMb9DGWdw8GF7mn6oawKsMh8cWXwhM8jnxMa4bGEmg3mtrtiqfH7jK2fB6kThRkkMDReo",
  "key6": "1kYdH5VBs34DSKdfXvgB4st4HudYQfpiGszW3BV2uuLN23tzHDzag7fxCJ7gNDpNqfi9pgy4ZzxeD3q3CtbFF4o",
  "key7": "5sYwjs21j4KJkoBoqKoMu41PKzj3wirBeRN4UPCP5Bjzp3DXbZPKChzWaVRqLWkRz8MAWGh1fm7E5ZzaGd45wEep",
  "key8": "2WuxqYDBQ2AzZrn2t51vRpkB2feHWHsMC2E3dQ5nef7oY4BkDA7CEVYFby9fkHX4xBc2338yy2HbEddYgNMzUw75",
  "key9": "5K7XSL94U4ZZRLqCCS26fXoqTLnd9NBumfYVw7pdFfQwej41MLwTCAnMEjPEVCibxFVFoGnyafFt3f5uaqfcMRed",
  "key10": "2hspfX3YB8YUmzV9Hq6U9zKxgHkCSUaPqq27MBwkMQNRXvEYAFxcUDhByyq15aCNxj9r3gj4SoKHqMovJ2QoSqhq",
  "key11": "37mHe2kTu11Y8SobUBmhy2rPJJMX7KQPiMmTGAtCBzUURogL9woVdyFiZsa951vweJWpbkJ9vknqhmrp7HsRi6qf",
  "key12": "5tcVLS3ds5iq2y9wjSvWjrhXLztK8A25d9WvGAGCPaUW485v8Un8y8Aash9ub7tyHRNFSsaAmsndZRBHqjAYuvtF",
  "key13": "Gu61qJ9tmjspRfkTKxjRrekXf8ycRckRBVR79owwf3QoHkiEUfdALmAALUD3mSnuxHiP5F5xEd89Rua1EJMuiRJ",
  "key14": "X14p7WqHqSadWWxxEpCvFzX1ZtfxAyK2TBR2jpwezbQqkUUb8AnhhPEqMZHa7umiQwAXXXzyVfNQRvLcJS1w4Y9",
  "key15": "5qzSMv9tDjv3d1rj6QiV14wGooeEpoWUz5B2yhiv88KkbLH288ZK7cfLPbFdoHiE5RGBh8PTu8PapZHkBdjrtPb5",
  "key16": "3ByLkEaqhPzbkjhZwLM2PX1xNdVdXktcuRYriXRDEruFU3DsmTJ81LccKWVL8vEmZEcbFU2kE71hVpLGsAQxpiR6",
  "key17": "2ZEbz3nAVdWqkjTE7a53AG4hmPaqF694xZQ13gCz52z3CHiFe4QoS4gb9HVexo2gYNtitBnYzWqzYqz6SLgW4oXn",
  "key18": "2PZLgTWQZj9SMrHz2SMLyQhWZsN9UJLcqbv5bSmHmtzoSTdR7BqWi1hGnXx4fZu6BBMWmCHE8Pk3qKQM2b7pv2KK",
  "key19": "25FwDpwgQMEB6V3WPVeC2qjYGGr5iKuSs5aMNjc5xeSgzWmUVSaw4SxZg1impa9G6TAPJQoAszzZt67wdAHFVUYb",
  "key20": "9vaP71Y5qMrM31rdqU9NCvS6kKBiDZodJgyyLnQpc534dkvUEWCVR3f41nNBwiVUbAXMc182HEEjiQ14Rsd4iAv",
  "key21": "2Yi5GoXsounmMJtrfRSrgAv4R85e9gV8U9yRBiAs6J1M8wReoNVnPssFVb3uTPYxaqYrt51WNDujcH8TceZxY5Az",
  "key22": "VwcSFDB7BRSGHpQzFM1AiEjKb4MFTabXnSfgRtGEv8Cm7DWWUzNh74FJ4exGETERQYB47tdYDXwRqPxjRxnQz8p",
  "key23": "Es45n5a8b15yD9zqhupDzdcnDiJqgaZ8h4tYWXoF7cw6NJGG89vpvgtsB2bjZ2BdujJGZRrUfQWQJYD9uWcSeGo",
  "key24": "4243kZZ2tPkUXXqs58fJg7SCFB6XJK5Eb7uLrLovWCtpJFVLbo51Lw9HgQxF9srR9u3cCdXSd3P35nKFWA7EjFze",
  "key25": "5omFY7ytDCN1YRG75CoMmpQjaUi8fjcMfnMVFF5vQ6SkN3pFpbzBYh98fw7wGssk6dhR9F4CCNxWiVqrg1xmpMir",
  "key26": "38duMiBfjSdzVQFinjck3uzUtNP8a3zwXvvrLTfPQ3dCoN324PVdQjSB2rePZ52xsyFA7P2NgwwbBcSG5uKYLaeq",
  "key27": "2M96RdvWWKrsgk26QG7dhkS3G5awesxvtFZbtSEouGUCeBJAZWyt3wxkzmuRBYrij92RePNnSqqJYhDZp9b9VuA4",
  "key28": "4rmho21M5eBo6enkFXb6g17KuZuruHy8UB23DVG2AmG9aCpdNxaVkRzDMKDHyj4QvakbRSjaZyCyMzhWq6suMenu",
  "key29": "5jsto9aWYBXs1bxWevyuKujPCPRZP3s4EcU8dsWwjvK9SHRgwyLDdoR5m21YDSAeYMzaK3YVTf1yky4R8h9h1Srz",
  "key30": "3wYgGatdssh7cJmYRniBeeJfLX6SbicM7g3MyzmzKiBBFmBVPzNwoMMNgETuYTseiajWmwGzWyem9hKPGK3S3x1y",
  "key31": "bnvm2C4FeWz4fxX43jCVP7ckyc5woYUJzSHz3MRjM2RYBurjrm3o2eYuhQ6Kfxz2gqS4tTdeqedkF8Noh2BhQXu",
  "key32": "4JQxo4k2jJnA2yTkvCmg9Hpjosi8ea2o9U7mKnG3HcSDSxG8KYMRBLyFaBKmeuir3mg1nymPy6HpSMKR62AjTieu",
  "key33": "3jgNS9mjusxogaUGK6PwTh9rncqeDSdX99Voww1U5jpebS2P1yh4K1e5jmMJbxA2yJR39C5xDuemTmtan3zmGNmM",
  "key34": "5f9Zc9ToAQn5Yjbyx77ad1nTnJeQAecTsEeHq9DVTedbBpEjZXsibF8Ke37wydw7pVGAGBig23uiESxWWMZaeB1m",
  "key35": "361V5GTmbYjSczgpiS4XQTpEWEe1swpYxhJi1Gm44YCyniuto58M9ZpsdXkd4rVr35Uyx8VFq2mE2XZLJjLG5Pt7",
  "key36": "4jKEtPzM7hNmhkjWJEzHwrhV8j1Gndpoffg6TENFcRtEF34YmKsK3sGp8ERyiRqFfkQauLK66WEajVML8Ahs4nLr",
  "key37": "35WVrob8eUSr6VG7YBhUGgpAjbWJsoTARNpzPBtJrgsgRLof4SoYx4W8L9ME51o4fCnFCpbSFHhaLTyzZB7Zavcp"
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
