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
    "W6eSUB2e65UG4pTxFKp7QzLGs64uG1wrzWqjaiERVRbu9rbTrshosdvJFRrY9vKSyJjBvt5bPAftxA2iGqPnPWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3FhS8DQYL1s4thCvG2NSarjcBtLvzMuEyUZ5xQEP4Bo84wu9dKprJL9qQdqw1tqRcb8tU8HHeeCeBqFbGmvyTD",
  "key1": "47ugFGtY3YAaxzzQNN6ESEAWJpRsYyDrA7avrXNmi6KN8rthCwYb17v7AUJbiu7AQiiHXxoYvcrCfyPQGgrbBQ9A",
  "key2": "3RaKw9dTgd6AwFaKFFXUR6JgX8xSeCBuP9w44GW94KVDm8BDFujyvkPdmVVNGmgBVQc12Suq9EARzqTAnX6AVzLr",
  "key3": "4qzyzJcjKJSmmA1sE1RgdYDn9wuhDhMaYYxtkY3s3gJTyJQ28SAWs1g48k7p6gAQt9SdGmBuoMEtZFzecRpK2WDK",
  "key4": "663G9LYNMJFxk7NYayDXZ4LcH3Zb43PAsqwFLfsSYSX5X2EQpTBc1xbkTL7NCuNrHUYapTybbw8sbkp7ZvLqZLcq",
  "key5": "3Rdtf4pd6DfUkUWVayxudChLb1TRH4fT2vmTSsZA7oiABiQVAsXNVXHkvNBnoBb4VwSYj8sFNg6iAGzEz6RbFtt",
  "key6": "97uVNEKzMgzEM9bDkqifS7XqeY4G5p7t3oJXpUkGh2VkBXGeBSeF8Fksyky4nQEipB8MUrN4N3yNJdRdYiRUng1",
  "key7": "5FoWPzTBw7JHmw3r62yvd2xFwtxrcrpviXv7Zz9pR1zmv3oYjYDfCotrqkLCgmaGdWUuZec7CNp7E6UmPitgtqzA",
  "key8": "2VGVPZJfb6xoS5treh9NttodoRaVf1kGYy4vWMraCy4W1ACCErhQ4rRu9xGYvg7ZWSz2c7zM2iWMcMXi1bQMyAu5",
  "key9": "GnbNzVSCamWv4A7ecNBuawQJieUZ3322x8Bjndu5TvAk26DXsJjvitb4ZrbB8x9fVBxEGbZNkk7tqQCspKT5RT6",
  "key10": "4ZLRhoASBD9GeJo4a774bVrDyy9SXGMqLn2TKJn4xomuUNZzynG8v2xqJ8BGwsk2ciR2BrzxTMxqYq41sxMKFdQE",
  "key11": "27uxp8zra2jHTEFHoePWVDXCVFMKDs8gUud5jCVENJG6s4YPKFPjKGhN9vxvLeH1wbGVRyJyUxiSodx85MBukGKs",
  "key12": "5bQf2b8nBoUs9LFhccsJTydC9DbbDRwHE26Jyddp64JySCSg7YiJ7FKsQihsfQrG68TkQQQLDsJWcJ7FDF4GQLuy",
  "key13": "NPxyGWqeCvuGJRRB1o7dWRh4MumEaq8U6fsLmptbVJaJAfnNdgTR1KhcgK1VRbLfnypBugvLbXPVwM7EEM3EuyY",
  "key14": "34XnxhKw7E8LAbV1ka1NfsUQRo1rwzoS4Ev3yFw2NNTBF63TGpXpPMHTqZTjJXkc27Lwt4VsyNjPZDRzuDiKN5V9",
  "key15": "2VbyLp8LAGxxqKJmTQ1YfMEXGU1kyBDym5SDJaqaWG3vLD45sVhZda3XHLJDmZxGxrTYQQ4p9Pqk3gH8ydcyaEoM",
  "key16": "4YCtPad2JZY192fb4LAgaQXNoh3M1qqQoS1WyR6kcNbp65YUu9xvZnq8nPof5ta9cYcTVTUGQLKkYjBDpaytFxN8",
  "key17": "3Vf1PQBEQayjewr2um3CrLc2neZ8FndwZyQsmdF3Sy3NfBXthx9V45aLzRBqC8Wiu9SQg3wnvcx5QTSMK9RHogXf",
  "key18": "WyfgsoAyv379Zy3YFbEvk6t5DddgvqWrdbThWxe5wjKRfkrSB5RmFpnB3fAddV4ShR1Skz7vubpBTbH6W7CVpEj",
  "key19": "SeDP7o8icVGCUQS6zinrRW9mahzuX8XN1UD5yHSe6HxUyNFagARwW2WXnuZbQC72mc2nNAA3TunqiCngeNvc5Zk",
  "key20": "3ZVTuH9UB38StED19x9Y3vqpDMnfSyRTdxFHimsqwMeogHpv4MhA5AGEd6mWUy2UtJN4vvdxYMQQPY3F5NHB6D2D",
  "key21": "4zzcFYa4kdHcyQDHZY9TxP3EDMoNnAw2cySbFwJoD4FkJ6Wjjc9wc9sAJZejnXHnsuMcAg1xaziedA5okz7eDmAf",
  "key22": "2RRvRkF4noQg7hGcZDyk7sZGpYUp4KZ26mRiAE42tnDf3qS6ZiJncvfhuwxRWRmjEWhBofUvvedDUHgg72Lgbsdo",
  "key23": "3BD11AaP4RKGj91uKC2AnAbgKFtSUYe6WC8GTUrwG6bE2XYKhoBPepMHKVAd5PypNGZk9ftnUc9BA8tmJXzkNmG7",
  "key24": "23S3Tcv2wA65B9K68hsWiLVDfP2DoRZ2G4XQiYVQ8oadqVNzEQ8xpjzc7jZW4hjLrM4U31v7Bwrervn4me7oWHg2",
  "key25": "2gmR6USrBuU7Jvbcs8ZzrrL2g9Lpc6qMnSxSTNNZgW53PYChEzrb4xBXKPQArHwCAxfjL9vtqooPpA9xdabWnr5M",
  "key26": "4aD1qW7QfFcAUjLAevD6NSqL9k3XMkQu8nUrGYYH5LPT6mEvfEB1AWt3zVbMb4iPbNHEJ9U36SEHnnhMN8LJQV2P",
  "key27": "FHUfEKwB98AXYhQ4Lo8ygZ7BFzYu7MzyJXMeKoY8Wd86xW2pFg9iSdxPNHu8HPWHg3UEAY8txfmm7nH3Sv2FUoa",
  "key28": "2GSduV1ybhbBFdTRVEHr9VBYn6EAHLNpFF1hiXyQtWMfBoDftuzd1prbA13UtDeShGW6ZujYLqGwxrtzxXNdyNAr",
  "key29": "5VhiPaniuusPSYUcygBsontyndqEp98x23ecfP82yKtqetDajvwMw7dMmFRKdSgqopdVvjj1MAdr8nojNhpzdxrm",
  "key30": "3s4XSNdbio7dFQYW3v9G5KqNosqyVhxTc7VM5XSMEkUYQXU9fyVVWiuTfXCJGfDtKginxg7HV3WiT7K3UgpvjKiS",
  "key31": "2uxJakdifcgv3ZsypcA92vhj38HLScMThta3QUNHk2sroCu4v7c5aLeyGnPWpGMaaCdT9b6XdepscEM2sGqcgpJo",
  "key32": "3TaTqk9AaGB576g1eWefw8d3dGzoiDpyjvF1ycWwk3BEs1xTQ7Y8djerVB2ctiSQmuZghWf8z2ye6mas2SD6ZdFi",
  "key33": "LrjSFphrY4Ti7cjjywZ6Q1Zz7XmumKdHUErTycvtGBTqMRGaKu1mUw3AYxUjAcSQA5oRPisP4Yf4z4uj57ZXCoX",
  "key34": "E8XKxNk3EYbwjFwdB6icSxnszpr63S2cUZUaENuWaAdwE6j9AUixyckWoLJ3AT1Pe957ePR1V69JT39H4Nvd1U5",
  "key35": "3qoEJZieTdKtknHBnz7yEvvD3joXXUp9RQrcVcA2Pov2p3zDP1CmL3ah19KxTNcY3iWVBMULf986s3Z126ZSqNDQ",
  "key36": "5UGLB1wSZgToijd1Uy2YvFkHCMoEaVKbqgHjK95UVHnFsKtb35RqjBsyKqAhHyFstPxLjpzpr8wAWrj8GGMqYVi2",
  "key37": "Fh5QGqdcEGs888D6pLQP2agYFU3cQDdAzBvrRUFgKC2iQEWcN7YGdj1vxKkjSqbyKuiMmK9ZoHwa31Pa1nnFKiR",
  "key38": "XynTstwM9w49HXrSZ5k57SLMGfoCXPtq9CvMYTK4NmSDwmPVqHC2xdFAJZ5B8E7SrqD9mcNi1L986JXyhei5aJt",
  "key39": "5eKi3RFDcZPhLjA8ApoibyVahjow3Eim5HUPW5VBryFMCgu82EJ7nh13e61zZa2AnVZ2e3ubHhpXQQRsutXfkndm",
  "key40": "5c7kYZ2Rw6NERxQA7uReoxKa5PqxwdQU6ppTxmA3b1ThYsMNQd9nNizPpGmE5P7jie5KmkLtEYeCLDhAV2fHAhwN"
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
