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
    "4L7GXBSGF1kbf2VxW9Tc53DJp9AfbdZ3v8dS56fiKooYmX8qmoG6fiCTQQv9S3D7gqqJYVTPBsynCPZfdCTyMP2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAwSbSEbBSvnkgq9qRuqAYa8BHYuZPb2DmwTV8F3rVZjrUBxG8qFzrG1M162SnuE8As2G7hSUPiYaMEf9iB9aZP",
  "key1": "5F6vTwThoYAtiUQUPPZLUCEc9pioYwD29LL9VhVW5ZPxV3ErVd96tntUTzto5jpJRLSmKawY1Z6WB6axoLfnr7q9",
  "key2": "4dMyr7wRSz2LVVFdZ5LV8jRL8anRxZQEwGCrnLHuva8u82UrT8UGjZz1py4wLCcWmn1Wsf7Qm2D1ZzQtBgt2boWL",
  "key3": "34E6Ep3raEt1ZDTTA7xpFHWa6aQZ1Jf1bqUyJUVzkMUiDjZV6owxYqiefo17Qg3rkdKKGVFoY4cNMw4PiiAyngz2",
  "key4": "CqEGvpDW8SDT97RV5MT89E8wxsonjaUrrSfXNwi6cc2vTQ3PzW2qJhsjcRhNXtgSJLnwecZJJN9yVgi4FSzwGXM",
  "key5": "Ggpj9uzjT7kAQsuaHpqGSrJW5wBpLaRaHdmcurNKEnQs2MPi4EjwNqwKAMXLWh9pK4xQDdiQAZMpvmdPKZ96bs1",
  "key6": "LUA8kbfUDR22nFrfs46JpoPigpBEnDu5BF5GRZ3aZoENakNN9QgCyBA3gPKsCgbapk9ukVTPYR1ww8kGnuMRZof",
  "key7": "2r136jTWeKpRF9aLewtPq4HwpHToytbvwZVCadv8esVP8S9FdHdj72P5fwyuj1ghMdzsXkAh5RURSFWy3TVizFZe",
  "key8": "3Kxp8jpmXeuUaHn17dT8AXJc4y5v8PgT1B3rXq49sRQpckNWKEx5KChuPm3CcMtpnMVrgW72Dse1dx5zmPgFqBcz",
  "key9": "4db9CQqK3ykdwcV9brRXH3kLvnSKJqJf44VKUygsgxn475Dj3foc2q79K1yhhHhUpEiHxb5hGmXQ1uk3qqupbXPh",
  "key10": "dLAmVTVFVsARPavykUwAnbwK2MqaapuFbmGciQEvwCgcii22kPXgqYadDNWvF4h3Lq66neoGQUoWeeAMXrNtush",
  "key11": "SPJ4SKpKeM8S25v7h81iSBqqtUhBVxxXH71X679eVygN2tPyizjMuznAUM38Gu8jzm9NDWtveym6yqLRfHLFsm2",
  "key12": "3hDp2sVXVxRoYdYtynsRFhk8QagZTsiJgw8KdmN2mcQJpJ8631aymSa16e1zsSCWDrMSkGjZRDbeRNvA1Vbiv4QQ",
  "key13": "pYgqAXG3wvLVt4es6owk9jJVbwV5Xm2P7hSq6GC5rLEkPiKWDJbY4WkAw1Bv6CTZHZ3s7C26VtK3UQXTQPQA4AA",
  "key14": "3Ku8a7yGHiu1N44DvDsNDosxFNK5GojjsMwmUYy9tMVn37aPdvqgAKJsJYJndh33cLp3BQCDpJRc2MAcUnhmg146",
  "key15": "2n3b2FGv7LRwh9j4D2H2w5QRfab3Eu64qVGKmdkvZqAGSUx7MVww1NwXnSPRap46QVKPQUMn2gbTKxARAFVrPtSZ",
  "key16": "59h9ErSABjWz6jfK3wE6UmsrUHc8JU6eCBryCpgiD1m9YCmmajak6g4uUpYaZCGM6qNLAKCQ5dst3zsDzqZ7c5dM",
  "key17": "2zmvyozTurriWV2hruCuQzEonVP1RQ86rSgLoySyH6RtXYkBZCc6ex9cVoy8rr5J3UTHTPZy492hTydMX9xwCGWa",
  "key18": "4AQzyVYDgwsQqDxrSfpSQi9A3JUoTLQ2b8dbQJJU9zMqrvmDWioaLvGCSBiTjUgRQFJazZxpaVUHZM1YuNUAnDW7",
  "key19": "5T5mavcUGMWuMsiGGy5z4BfVQhGwjaFregWrvQ4uicuDdgBpHe7gBrUa2TdfftBMXikBZigYX6Pb7Yw1rHpqMLpw",
  "key20": "5wK96G5zTMrfinuTSKyr8bUB1Wx4xq3kh8rG7idtJhgvSqeq5TDdUod3ZH5j34DgomDEJNFpj6DrJxEcZwm4TQaE",
  "key21": "2Fs9Uqkf7rPoCu2wLSFChbSbj3Y13jF3sfXDaZFwobbMt28eLxXJfccJrEVEDpTdd29mG1oNP17J9jJeZSLsEyTC",
  "key22": "hbn889mgXcQFxhDUvLtMDmE5pDZ9Zok74UqS2BhWzbFkMXGhRBXVpnVwyAB34Ug2vkMqLHh5aVHoq7eW3mo6caP",
  "key23": "3GQ3JFE4ofZhEpn6acAX8oRGSrWNT3eeC57CSrLW7WQnPzY4Wf9R7Pd1PzVrhJofsueo8Xd1ni19Gfy3ALFeqLmD",
  "key24": "2cHBWUMSYwfkRsaoUFMcG1BALbcpopBQZM2mkb2v6coQwVcRfDrTL4fLRfrbWJtCoWVBkqFyKq8NMXadFSw2S8bL",
  "key25": "2EKVyeL93MRJd5zbv2FAU1wzBCeoMZi5Zgyh3zmUdoWw8thEothnSzEW7F2yvY1beUqYe6FPD7wAG5qyvf87KXRL",
  "key26": "4qbJL83xHmCtcYDLu1BYEWMwwVcvXCRcK2Vp92VX8BAJguBz2fZagMidvfgN2vDPJCZAMC2P7SeXZtiNWvFiqdms",
  "key27": "2LC2Xo5iTpVgLXgEnHrBbvzhpDHYSGjHZX5UuJVLdeTCuhYWRasXqe6GfMrggMJjCuhmrS9Fpexx6XRh8tSPaeRs",
  "key28": "5WCLrm4kfWS2Gs3dyiawWNGoH5C9FKp3txEfas9nV7SM4iNKjGBc4DVeMmQgnyc4gTJbgrQEVqynNTjERNG83gzv",
  "key29": "3qAhJ9rHkamN7ZLFN6YUZhwBtrszoQWJYPwz32zLZuo3UKNVAjR1Gsh1FeSB4144Quh8fYSDEyssbFPYodvhLtJy",
  "key30": "434iTDQFfunCgdfQYMinmsfn4DbFhfpQ6h8yyCBDUgKfFHjQiW9z3dXZL3tAR8gXywLPG3hzFEewCYPG5xmzWafL",
  "key31": "2gF4dyJHhvkaTczdKdQVnuXZrL9Vi9itLqdiDk1Yi3jmAtoD5LvFJpokndtoUotweNXTBPxm2qQFmLMDQSyAjAnh",
  "key32": "6dvn1kyGq3n9GX4jqtfipKUtpW4WEaS9LgU9sHnUKpp1SBGSRvd5ELJQt8vwVhZ1RY3gg11fdRJu9HcGy1mkLu5",
  "key33": "23T7RG6HdPABhn7CGjSuBCw5RqC6AvqmUZtq8gG2LNZ3peohUMy38gCmpGD8NmCanQ6Vx78QMEiNoZA73ad6bRfG",
  "key34": "ZzpCkwMWqoNMxjgkdr9y9caCzmXEdYcHXt4J2HfE3k7WGfcb5yWkjWALHkM3Erpof5icqKoXX3uh1pzziESDQLx",
  "key35": "2dJfCXicM9aeFozKiLxZzTAu73Aqsoi9chiK9E94DKucuxyMXq5ydB7HAZJ56ye3tJjL2BHW68UB5Chdq1NBJPYU",
  "key36": "4q28YsM3TXZ5vb4mrYoq4PrffPHDEhjyLzJcDZKuL47skeKV4FBVvaGLXa1ox3B3r69wrnLK6YLDNvwGp1bt7EPS",
  "key37": "3JrR6NyP2A7XKZCxpyYnBZMGvgMJJFZ3P9b8qPB9REauuWbEeFP8ubdMviwPk5gv7n27NLRW2efTdqN9DNH5uw6z",
  "key38": "3QmqXB6uKNRNE7TVNcNGsVnG5q2vNyMRJ5KyhBXsZ5NXYcZwQci83mYPoHex2AprJYREkLBWdWGcJByveiVtqPKZ"
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
