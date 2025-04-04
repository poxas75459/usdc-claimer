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
    "2fE1Y533rQXXhh7iHUY6EcPvqStyp4AFnRHxQkAjg9F2F82mvxnr7UyA7vvgggxzgr1srpe9YNj4UviMagmx2Q1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWNV19Td4667LArwN55yYAnJeKGB5VvKtmMqprcrK2oTX7sQoP3D5XtJ9qJ9UN2BtqFQtSQcLvLifbkjmGUHLFt",
  "key1": "5UAi4qUv34NiY4fh67eeFGCs4GQdyA29ggcY7JNvGbkQqWtDx5Ph7sX5QFmeexSgs7gCMHSgb4MzcXR32M2J7A9e",
  "key2": "2YS7dqiyMC5js5tMa4MhVGwpjm52HByHBrRGQyZGQhBzpabDVmaaNRBe2vanaW1epHPTHPk3iicGacVvj7AaycLs",
  "key3": "56bSBgHPqDYYFnzPjCAKobmjpGhkVCsFtHMQLNbuxqDBt5KKfeHxhzjcu4CNHNZyWhbjTJPnuPxV1u7iif61EH37",
  "key4": "4yBZtNr7SCTmFCkN2pwho8ZonFEt6WmhaBZk91xLNUzftZJo4T4bNVHBs3aBhCJGx5BGBM5Crx6wE7Mnr3eEw2kp",
  "key5": "PqyvER9xxG4yR9tkN7a5WXw274aGkHBfvs8UyzAR6s9yKZL2kp6gwWKeMhNFjpd5vVmCGNEeGBzaYNzo7Qj24Kn",
  "key6": "4gXiCQYvHzPEn9r5bLyUAPSZ4N8E3nBaJvBZX8GtKbjTRfXXVWCHoaaA2wM2ycPma4TF9mWz31EZJKRww7trCNWf",
  "key7": "4PNfwWZuNGyUdFyD3KVxcfAM85DrDjS2uKE4dmLpiEBYwvNXPE7dBq854UkLN4jiM4sg7YBttSz952JK8He5a3Mp",
  "key8": "57tYnhmVXrQ4fXKSAChpZbVxiCEPT7WZofdpcBzHMcM8MTAsVcGQ3urtcBgsYjoNMAwKQusaTb41KfBha4kbhJaC",
  "key9": "iD373J45cbS5vJnNzYSWC1fH5AWvpTs9mxsuyQrv9Z1MCQHuitczBYnDfcWwKywkAtVquQr3sKUZzbhEGhk4EsA",
  "key10": "2Do6LYMHKB7sXhC9qiu7T68vAmCkWrNDqYZrBmAi82awqjaHK1mk3duAfj2KfqNGXFr1jnEaz91PQRudS19vGrQH",
  "key11": "4byptw724T4hfkooj2NwQzZUNpsxNCsac3X15z6xtdNdMGNZvKyYvJNbwyEG1jSE9tu38BxzudNgZiwGGLFDHm3m",
  "key12": "3Be39AaiEb95SUqzJxzAxUYY2w6q6nth75VHpYyRfb5HoDUe26Sz6692zsuYqFVyfrgoqbbiL9Td5XpLoLsPheAf",
  "key13": "ahY3CerKdu8NKnjiEYH5qpBXRqrkuAKigyfZJufVgkvq4wWyV4ytzjnR62qten7v63gh6DSymBXqFTDpHgFK8do",
  "key14": "5VPAAwCxnWEnazkLvABpDgjXMdNYEnCAR9rfDzGZrWakMfUW8fc2PgTcebHAYkMdLca2Ug3up1927LdfwjFCAsXU",
  "key15": "2c15McoaX5bcH9HKgmJSx818VDuLhVmuLrGMBvb8HZUeH8i8Zt1Xmuz7zhh9xzAJANqY6EyrZftqRPEgLCTDNzVC",
  "key16": "2ApXos6287k84SnjsprEToLXiwaTSwagib47F99yn7QmHD7jAAcSW1MCG29y9uF6GAESwk9XBmExCVUMW4wzxkb7",
  "key17": "fzTvwQpzZYkEA1MAk67mPJr3sPFJtCDScPffHNwveHHfxZ86C3gUYvmiR31Za7RtK6WoJVCqx95jqtLWMDzJBgB",
  "key18": "53KsJF6UNuhNKmBBzNiVuaKbpCBk8wsrwje8Bd7p3o9FJa5zjgDtvvYVE7919nweUy4HnAjAWXu93jp6Nu1WqLbZ",
  "key19": "2hAS93c3XH3ok21vW3KohK2Qv9qUAQHHCEy3Rxzn15mErRuBxJJC5DBM1zSCFBNJQqXYxaeJ8RQrZw1rZXeiA5bv",
  "key20": "4g9kn4Kp5tYH57CdNF2S3kW3U3vTqHqxYQsAoRoeyUmTpKBKYe3TyKCuZF8xHHmSXDuBMaVzawS8CJPcczCy47f",
  "key21": "3UHFUmJ1GwYFhZQQaDwcYkcV8yyMEfRUy91P52gNayqEFKhcb4x4cBC61XEVBAFq9ZF1hZHbpdWYX8awfaZPSQuZ",
  "key22": "5kVrDdNvTCQZKZT8s6HWDkMWydgxsC71z5xbPXy7x5gDQRBYRtRybXM8SiRMfEs8nhXDzRqisV832Cie3ZEnxEvN",
  "key23": "5aeRZ8z7N7mJ14PdkoDPbYmbfTwWowq1Nid3bNXUfyKMKKBuRVKhpEQoppA4QMswgigWaxxRKhibLjRom3o2a61w",
  "key24": "sutkT26zrkDS7GTJjvGiq6ZyTz9AuDcG5fMAANNQ8zLbpvZoqCXYumoUKnBEaf5jcTbcRr45zkur4LSCjBKrP1G",
  "key25": "5y6nLoJgchDVMsVRPm4pY7NnhyHtXhnm1T9MF1yjr2bAcXwfK6j6kbCUxBSapvassjsJyQCRZ6johmEFKKD1vArr",
  "key26": "428FSh4dNXh7bDHxNti3xqUtBbSW8SBmyptq1mbzn2EczFAEfGtt74aRFENscebRy8ezSpkkqYCRSmbakGTp5jH6",
  "key27": "3aRRewc2NwzoYa8N8Szn1d4PT4WRUu89CtypNS8Axv3Uo5cuDSv1LLH5GfvKuDw9bdrx5RRcLzESswJGZ9kPLz1B",
  "key28": "4dZ4ACSwwNZubf6zFYfhDk5HXtpoPywfroFowfFCjNUrDmSjzsDWGddSQzCYjta7X7QXZ19ko6Si3cKE1YWvWbJN",
  "key29": "Pb2iBk9BpNR5P3B3cisdLfoR4cdwQFGkhbeELhrNXHSEYX9grqiFunK7kSL3GFThpz9oSCg6ESaqXLSCHvUzKfY",
  "key30": "4f2h2xHtSMZ2wasBKi1qXr4QpA6PPXwxNP4FNyoR11BeGu4Kn5vTK3QFxp8VwjL5188EiDNUtpNbxY5WWWb1qzVo",
  "key31": "5kMnUFvrrcvQufG6hcAZjVAT82Daeieb7EaRaWSmT8ySUDuLTk2SDYLLiVdMEo4iEh9pS7HkhcM16oMJSY3ptN59"
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
