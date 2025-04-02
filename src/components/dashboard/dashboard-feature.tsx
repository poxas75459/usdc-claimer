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
    "2vE6G5cpfrUi2PzkKjRk2pW1Dgyhg6KNhwVwoMaTtMC9iywTtWwE9L2Fi27VRVWMbExFmAG5pz6LBAbAiLnBvM9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPP5hZMQhc3q8ey3jfgRmfp2BmkXWyGEKJdaPnCL8jrUXDueaqnaMgJHZbZcaEqAgMWmZSy5HYKJMpDvS2RYRxj",
  "key1": "3TaTQb6t3UZJM3kJmv67vbuadEivCH2UdrE7v1eN5g1eF4vVVzc8o5bFqRZPAczwK9nr4yKjmNDktcGF8i3wR3je",
  "key2": "216UzFahK4FQWGc48yRX2MnAPhfYK3K2iXfwvhPcWTEpXN3mFu7C5Uu5UZn1Njnzme2JQUPStiDKExn8LMSHyrpj",
  "key3": "66o7J6Z1Y2v2kkwphjjSwzWFd1hnurDA6joUr7UrS3BoPZDZAQijBtCa2fW3PWtYUa4ivpKzJ2wCNqLX9ZfBM5Qq",
  "key4": "2X5v1rpkQmYwTvsV1njRJB3fHWRHZiqvWCkvvtG9VPaWJgBQ4M3fQZPBW21F1W44cBuKK5rrbHyspXN1E9Tu547p",
  "key5": "2QRoqzA9yy8iHEGsZe4tL18RqVEtyZqCNgsvYvbTfaTSj2VLAy5fUvuHoikU6yrgLVfm2kDktP3ZQk9fUtA8hWVP",
  "key6": "4k4svFsARqUpWCEpNBPt7F5xkkiZ3FE7Lzunwz2LazJ3N5ScVgbsJpYzyCdtJFyriuBHGrTDXTu6mRSgC7eQ2Los",
  "key7": "2i9PZdZo4J4ssLJiV5JF19fhagfxnoSTibBPJM7K3s5dGu5dhWeQ79y9cbaAU3Rc44AXUPpV7Nv8QqEpsECXvNe4",
  "key8": "4X5S1KxTATNzm8Tt3M3i9CtLaRnuH4i1TzTKg8m53BgGN3yWEk89ZJstVEntTgR5xBbZcrXhhNkMZD83x7F53Ksa",
  "key9": "67KjN1yVtUpT96yEixmB7vui3eVRRoyafvwQHSQcR7WSEnZw5vrjZyKJr26uNhBXbHTJ8LhPxMYYjKGqTrqpvoxX",
  "key10": "2MUvH8BauNiJLsxFh3kq4rqKcHCqavFiGhhyWwejaStW9sdEtdoMZe1EEhbPn2ygtrp8J4MUhtQSgrecjmkNFah",
  "key11": "3DGY8aKct8ap4hjoKZpMPHqwRtdWyqbHy2mhxxvqyDTf7ujtdA5PZSUDhxfg8R5us9z6TkuhKtJMFrjia6wV4UTz",
  "key12": "5FpkzeG5r1WAMLNdwyv9vAznawVZp4FZbeFLuRPYHkFdBJi96YUsHU2dMcF9oddCTY4f8UgwNMB66g79aJbsEGGT",
  "key13": "5jfYRo5pt5W6HAVyjgZZ2i2YHFuyBx55g8MgyMztnNxWux8dqHveYUwgqZJZFEEh6wFLUn9hW6xYXbEArE8kmkMg",
  "key14": "5bBuEhBYZjGRMuoamkszLC3z27qXZc5pa7xrHUoxShmJcpjdGPmPHYAufR9fcG5wJFeEneKx12YoF5EYeykkSL8m",
  "key15": "aBfW4bk47UM8mvgq8cXevvY3BuTCqiLFiXygKK2oVRdJ3wArnimo47WK4BtWbyWSU6L1jd3H1KbB65tRNjfFaAk",
  "key16": "4wSTsVbVqmJrn9BeWnuhX2yaGy4DtTUAEvFB5RrTtdCkPt4bt8UV4VHXeFMXSsShY44G8K76rvGxhVTGejcfm9K4",
  "key17": "5EHJ9UhSzHZHEK4sFAtR9ymWYoto8RoguXetGSezfVNuTDFtwHE4z8tUSszJ17Zkt3jSFjDjDaShhDbCnbPZL7XV",
  "key18": "2mrttc54EAYiMMvRhWmwpanQfTAjYEWY4dyjXv26DegL2UdrfKX8RgzhR25isRjtNkpZyBH5WsJozwH7SATtw3iu",
  "key19": "56WcweVBLDfVfKESS2GaZD41rFS228mcuDMuWdNL3TSo9W6hVcvwPqvTL611bcPEWuL7JPbtiSU1QGRZsj5gZebb",
  "key20": "3xmerdeBRFbsYTrRRqdP7JBtniWGp4z5AyHoUwa8YCQ8ANfaDBBsRqEsK5bQVhCUgtip9TbcaHbntrPoLpdFA5yZ",
  "key21": "cjeBpfGhfXuCoJN9ij2g38utH7PVhoKtToZYrCK3uc7bLR1oXK6f7dV8tMjLRpM1duDML1MxyxCBRD9k9A3oswR",
  "key22": "EC4rik11hWLoKtdchyjtp3YnEeakajVv3USwtwhFqjynnbhdKFCbFvkq6a1n8T7kQyECsA8QKd6nRjwSSQ3teLM",
  "key23": "2EFxZgrEJjLwNCVKFBJvDGAMUEvXu9hcFf3MC2yaLfCUjBBgzT7jqTqprbpV5XvWiuzDvfZYxQ8BRJ62bC2pTJy1",
  "key24": "32qAogVrn3aZPzXA9PNvscDG8v1eBn4WBCZNGFJj5rQc5EmNL23CPPuu4Yu1aXyHuDC3ekkm2J3gKi19mUAz8WhT",
  "key25": "55bnsektP7gVHZSt2PvP6zDtxwTWTKcY9ziveHqntRnwLGqGehACTzD3z2Yiyf8WNstAKMoxv6eiS1HrCkQcxvcf",
  "key26": "4RhM57z53FtdZXD2etn9oKk9aoVjcPc1ECrRDJ8vMdPzGvo7mrjxhBvJwPjJH7eCdAHsceZReMz2LV4jGeWGQTX",
  "key27": "SUBgyA3QbT3SwzDRs5Gbh4F6dsafXwuBeJJkWGnaUdF3VCLvbUsXfVcRQprQ9K915Qui5XRJeLS1BypjdDHJ6qE",
  "key28": "2VhoGisVGJrj9dLYq66SsYmZtrBLErSmtyo7SnmSXrcFPccQikR2Zdcan8pecro4BemAfveSEX62dUnenNktMFUu",
  "key29": "4ELqGvCt1pcYTCipY4WbHrAy7qMXnCT8jLeBUhD8aX5wX4pUhjFzcd7NE5jdjuyBgT9HK77mU1LPFadKSLW1Sgv9",
  "key30": "1Xz3rS8yRJqkLkUFJM2tj5iMzBRm7AWpwmzkY69KM9Um6QHenRWqpY31qXE9gsSCoHfin29vM1LCGgNp5RjbdaF",
  "key31": "tGpqxHb9APpTRezP5QPEYbr9H7zFNr8a5injxELwpBWhNcsyBiJr1aPCrWmdHFrCEQSZgc6pRGLyGbPGgsN8Fxy"
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
