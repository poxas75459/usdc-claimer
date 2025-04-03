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
    "4iHLZfMarTqpP5oxtJAohiMqHNqrLWTnG8ETbXABRH31PCeyRTB8Uz6aRDz2zPWhEsNBCUpArWuuV6RMmWhQ7xNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAXBEyTWdmjz45YCjEExUb7SFi8yxMHZ6ZiznfT7xCBzEyfXrnoAyfzATtPxNB4WJVfcJbfMfySDybKVkTbdU1g",
  "key1": "2w8W4QtKSvJEEoZRredfDKXaDTZqN694ozenshMER8XjX9Hna4egmRTTrMbaoh8xaNPodAzQaHjEfx2eA48Mpx9e",
  "key2": "5RQvECdZciRtc6dPS7k3XWEkNF8N4fzMpRr6Yi1kkJghKwdnsCVesZtCdUudQDemxTwZKGvYPT5jjzwXEJ2GkrB3",
  "key3": "YGKmCSr4DkbMxbjdu8i8usrtUDtWofXSRJXFjLTCSCD3o6vu543iCYD2q61iiJwNqMv15RAMe7JfRbFp9QupPEi",
  "key4": "3hnkWB28bSDoP4JqMBcfmpXSiPxfFgiAEa8YTVMhrf3pfPQTnsuTAMnnjeCwtZPSm43F6PvcqcQzvYPY1ep4ZtX8",
  "key5": "2afFJBoszv8kMTgQeRMFLEiaJWhj39YTnjxmxFN1fXEbq624Ty8KkS2wCUUNoEdr7v2fo9QQ4KZXZivPB4DxER9X",
  "key6": "5wRp4A6EXT8k7N73iaTELcUD9vVpJD2Rn5GyBX48YqEhFMsje3PdwpZv4b2SN3EqF6znvioqqV2LDYXu6oimadpZ",
  "key7": "XD5nqyQMC22KFpqtMo8W9A6Txg7hnsSb2vzyzoPKJo5kKRyX2h5bb9hrUwSFGsezZFE9uaH7REDEWbJ7gTEQ3CV",
  "key8": "LcEALsaqh3goPPVWFfSYk3udFATUi4Tgt6zSdCpbzAooQYd6hZ6YKBWnMMLhSqPFuQBVMNqRQ2QE6y3fnjdhjf8",
  "key9": "3rjtMbXxnTBPqLWwfoaTfcNu9LczGxy21PWRgSguHK3zFXEpdBA664AFsGbWubPs4tdMjSTAJ3ybcHsBQCpJRBuA",
  "key10": "gXN3rtMrfWV7AzW4hAHdeLWdzEVjvNubQjRe7Ew2hXHW9JrxpSyzXcFtco4VvSByFzbCccZmGFWB1VA4Qq4ciXE",
  "key11": "4Bvtt1o6nCoXmrDiMV4N3QNqsjKyPgGKV1Zy8Mz5rBiokC5cc7SrSgeeNCN4GY4qWZZSsxdnQ4TbnSQU61MMs5Ts",
  "key12": "4PAJ6fCo4XD2rzW6CsVAyaBzauYxfPTFprpXjyqEv4RecVHGBkoNEhwcPB8eAmwBZEzsvyrQAE2DXnp4ivBqgGmK",
  "key13": "u9eoAgV5ChAMHRDKw4SyX2X9hZpmCzXxquJTHSjLuHH44wUjQ2yaTxqXUKjRmdka44pwtTGZt643d1toExgcGDL",
  "key14": "J55jNTdcfcZ7bbt9jKYdEnagFPbWEGzcHH4FjpW47KGLEaYRYnjViMpFGZMUAuhLGyx1QjhStcrqH8jipR9DM5F",
  "key15": "3hJj2RgGowJaUzFFsbRBDp98fJAoCPnBbNWZA8KT6BKpZwjvDhLCitj2KGRqE7rBuEwBxoJbAfLUgXtuVyceqciB",
  "key16": "3WVTonKjRvEWP5Erk8AZFwmywGcTeDXtqag3qqG4CziwByT1A35iVwmKAuCQJGvAFmTJjsyuEuXYSKTkegCZqe41",
  "key17": "4Lpj9Y1n9kRcSTMtFGpWmfGHkXoSGsc9c7Qw4iKW6DyALHcAg3qkNoocEPzxDFtpW9zMS6WQ7Utd8WPM2yQThDSU",
  "key18": "2tqETZYKSEcou4Qw6U7DEfhVzcidm3m834zwLiP4apzX1Rzp99YDmiYpEqe2yAqyDJK4pywjCriNt1JuMvx4WNJ4",
  "key19": "47wzdkx1NhzShucMtscKZGSyY45aTscvBTZcScHTHvXUwn8HZY8i3oux4JC2v6Ch8g67NS3hiZnvrWRFzMbGU9Hi",
  "key20": "3StQZQYWbebVyiiJGNiLTtP3yecQHfZkgWxv5aKAuBRFCTpjFfeJ2Lz7fBziTGs9c49Kzcm5fT4ehwRCMU8upmJt",
  "key21": "5FRrhEZTDhGgTgzsuUUAFJcQkStsnGmDbxoTD154rKd9e84gpemk6Y7Fz8xAkSpdXbppa2DewCEvZaSabMLMjL2d",
  "key22": "5aSZA9Ux7WPuWW8FXLfRQUMXq4ddeye5DCkWZT4URbaStUJvFaRZkZ2zjWZ6RuQ2wVyDZqSENEzNSocfkik67Rd6",
  "key23": "3cRXGiLJR38Soskq3hfJxwrdrek5U21jRzHgY38sNq8QJGsm4AEJbSJDEQemDyNDD8ZH7F8JM3tj8zp5PB7gyxAE",
  "key24": "5Ek7svUJKub9wk2NDmCJ3Y3p9sfuNqeM6joZNNCjc8LJQ1VEdaUrPu8vPgYcuYPEtGRR2x937C4VDNM5zPdNLaso",
  "key25": "2QRVFamFepJzs3RRnQYct7yFH7ZwdyCzMG74nGQQRr7D26kpQWSbQGfYQY91LtBxPHkwu3HRuf3x6RJUwot7PoQM",
  "key26": "2jHHH9Ek2W7u2ACmUVQcHiNQz97N1rW31T4LKYwKUq7u5mqm8VEv2f9cZEJPmhv3iuqnAcP9PQq1P8W29xuWwmvN",
  "key27": "2eJ9HspNirQ8B7G3czf9oWNaPYKH3iLpXChi5mHbB7wd17B9t9rZdG3CxYwC8w8EgmEvgR8LsJvrNs42YGqwq4gc",
  "key28": "3xqMcBjjAZJY8DjEoWvqFBTQWQq2ciZaV18C18ZEZ4myfCnpGPYbdom8a3XFV6mm39wMruJaHvymuvTeB3p7e98t",
  "key29": "4ytUD3DKKDEegwLPcRC5oBPQKYyvkejMu1svnMenL4P86J39VhfyB9kpSdGxWa9H93tAvT8LRNwgaEE7qcYHZ9zp",
  "key30": "3WSvUHdycUtbhcsZs39qaaaSvaaABjog8GCwgAa2MP1cD5qcfzCa3Fjby7rHxp3tgCofCQGscDWgvf79WqcioGyP",
  "key31": "2K7wyqj8fXBbfbP1QaXoP7uKuD7tt8qrqcoddHgXuYmaBbrXUYHTGjhQtHBGqnVP1SFGnctj7gH8kkZwGeoHyQzi",
  "key32": "EixAELNvWRT4vp6hi8RQAjyCPhiqqVhURX1DbfRA8rynKCFyZQYPMiCTNyu5WY1KajyYHvZGCB7k7b4FEip7pv1",
  "key33": "5kxmFh7k9g253A6d3VSEGr9zhz7HVoNSCV6bRftSEtA6RXSTasg4QVVUVyVnWKrZ2EtreeyaZSpAtM6ELtQHiAqs",
  "key34": "2PAo9hhiJn917y1vXBdCVsN9ie2Cx1zPrdxfgs1aEeZr9yciBVSNzuEH5zxqwmsNkcZPyFKdVqvZD19atVnrSqU3",
  "key35": "2mvzW5S8f2h1rF21uoycP4fepN5ryoMGw83ys4AXLEMd5tnzDYBg61ego1ab516uUvNZDPgQ9AN2PYjpz7oCgYRJ",
  "key36": "4odcnHMdudV22sqJUtxv4B3SeeuSmggrK9CyfnSeHWAf2Y6VStoCMbBeipkSwuQK9nSNZHE6ufKuUqV8qX1vUF3d",
  "key37": "3sbdXgmbPRSdbXPTZ5hEQUW7r975TwJUiZS9a6Soe5iWHHpTz6HXQquzgNuf8S3XZjh3CFu9mkRztoVosLLHJKvx",
  "key38": "4wVhuCfZY6Xz42XqE4QwR4Ue1EU697p7EqKfc1xHvtXVA16g4uoXukHL4RrXG4mTwSvuvK7TzjMugywdQ7J5HLCq",
  "key39": "3Awi6fQoJgeGJUTowBY6KvhQDPwdwGtrnumKhtVwr5DTMUQhg6iVcKcgxTEjXLRYMhquKvP7bw9q6e5fK4Yh7AX4",
  "key40": "4EmUXs1G9MEJ1p8ydv4f3qbQTEQk9ce3NGidkoiGzpYNTmkYdJ7EuCqLgzXCAr4tBHoFfxWnaMcS32X1Sh4Tnedj"
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
