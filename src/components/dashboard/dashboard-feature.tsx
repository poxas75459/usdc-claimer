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
    "5q2kQXy6Fs54KHgLzUcKnFP1DsiwVZvrtjHLLrX9WLDV8NXBQSfocL8Y8pmtzp96bECcDs78bRjRADcrd8DDYhwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xG24HdBqvjn2hZf8ztcaY8EfWz5C6QdHxcRBS7sfyvtofsUxuRV35GjGAe9VRP4eVYNWEbZKobi4AtgruNTdW7y",
  "key1": "4A27A9ngDfjQdQ4wWct1TyTPPMwjZM2en9gMTqDpwtpmr1fHRSx9Fytrvycn8qD5doJREaaWunzppknAKJFaiwgU",
  "key2": "5Nmonxz4PQZ4oSfu6Kid4XNqGUsBgGqu1XeNZnvsYDdyXBqBm7P3V5EkADthgeXviLNSuAt3GrN2uSVobZySj1Wc",
  "key3": "5QE9Zp1BFHViFuU9rrvxgbPyNXGKbvt6an9HXJ1HnPDiRy591zzYRrDsm8uMMSZ2na2PVy8SsRdzWDH2PCDX3F96",
  "key4": "516iQwPvemwAi4WzyXwdwDM4XsqTHDHBYTcvEn4jwCtZB5XVB4VG6h53fhAT1EbTaGNc8pPgjUnujSCD4mbsVQ2p",
  "key5": "34ZBVxGCT6cocESHtQ88ZgRSH5HzttQMxf6BQ5QoUMsFeknotV9d6k3r8ZwX2hsKDHPSZgDMWM6LmYhqt3CuyTZ9",
  "key6": "eKGFB4G1mWQtq5qeMb6cS1JxQsW3ePxrwqHdtK1JYP8koCgMzZckr73dkXziavp7nq1BVhWketogXMUAeb8pNLH",
  "key7": "42FzkQWVrANbjQ7LXeNRTfshUi3EDAVuzG2Nh15JXRgseQMXmiPZHHVkCpbuyATqcM6TnhtT81Nz6oiWnrpYhEVd",
  "key8": "44mXfegePyKoLUuvotVWnk9sFUXidP7xoar3qqwoQhYFHkMZ45hKZuqz9BPx7LwrFVB2ovjdpQhBgxVf6YMpAgzH",
  "key9": "5NYPELVxyUkzDRjCWC59oaM5McjfkPCNKtVyC3WSvpJXSEMbmVn2NTd2MW8mdDjJyKczWKe2XdeRzTUdAYCyabrq",
  "key10": "2t9ycyKm1B2Fe1yoFUCiDLDAxnymF2HJjGtXrn2r1RVyxR5jjc3Guz1et2e3GhPWF4Eo5xhKTwS4JT6rxDqz5oTq",
  "key11": "2rAmEEUsQwcWh7UFL3R8G6Rx69sSqEKwvQ7psZoNiFRJWXYrn2eozkp1z3xnxkJFbi1TnPFABLMYpC1DsVSRyuc2",
  "key12": "4WR9A7WKxQUQVdBA1ctkxr4GBrtJtwgzmH2ehFCs9opCyBn19eyVodABguGwsRYosxwmnxKaUpWXR8zUnQzVZFCT",
  "key13": "62jDZ86RFAdYdK8wF7wzXs7emSQpcdKsotwRsRvwBdgSsVPGqufjhTHxXUvHWzWnVE81NvCgYhbPKJBP48cutuma",
  "key14": "5c6WEzNb4NnyYwKBXFns2mtmKar2jn5nxhKHDtQd7rWw8oeDxpcmedh7uzqTDgioAF7Y2ShWk7dZZjBSwP4vyNjZ",
  "key15": "2SQfqP43BEJw4cU55oba66pvKR8GJJaf5HHrtRxCihANYP51LfTEWwMm7dZgYPHdMDwYbVCJY7RUhcE4SEM2GnH6",
  "key16": "3An7NA9VtBvcUNMoVjjkR2XE6hvqFMWvTvLjjk8jnYearfeZWaMfbhga5Rt7BbbrPEBNpWs2NXZWNzyLp3eJ1YhF",
  "key17": "AesghSKCcgArdo36Wj872Y7RM39AQygDk8rBocUd3ZzmE2AZ6JiEuag99bWD68gpcybsMNqLwEKTuFaA1B4keRn",
  "key18": "2TTFwCaRzYL12zkb2cjMRvTqLQbFtSJ8T5Ny7FugCapQ15zMZopbopGpm7neka43SknH8Ka2HvF5PxbuuYPSnmEc",
  "key19": "2VWh6cVKveQSPoRocWRLWmZEZz3mFwd2PVrHDSd41FK8eyRjkeJd8we31NudqPsQ6Yq36gAF8Mm2qjFFjsFxoq2k",
  "key20": "3La48zpiEvVfbv54vsj5CaJ4RtHk7pHSVtZyEajMmnF4juKVpN3poE7QJJKiBHwfioDPoesiMWDmsDYiTLXuTSUu",
  "key21": "2exwkQsafQqmBmi9QLSCCrNp8zTvm2TtitebfnaiXJiyZnM63EBTfouvUfatvCqzoZpKuox6DHXJGCT5GA9W9Ckm",
  "key22": "44KBjdvHo5pFBarY1vcgbuCVhj4BwMCHwURkJcijNdhu1qMddRnegxV51guTaLiATMmBsSiJvsSsDKdo5QYBWec9",
  "key23": "29DnbNdfNsEXdkix3jCw93cSfD4zufuv9LzCReMR5xVqw9hz9cjLYWYDcu7GmFQ635mw9kWbm7cMZxG1WfATRGUX",
  "key24": "4e6Nxbtc3wk3YKyZ4DstjFGsD3xzFHY5c21S2sg3NdNb4o8nQArxadbdR3J9rj3j8T9zFhG1YudpuAkRcn1gsy3v",
  "key25": "2ZQZaYz2oNTFJweTc2t9VqsYRSqsJpbkXHJSDJLfYmt6Zr6Qouc2VUnptrRzwCiKumv5HycFqQaoeVwPeZvX9DMm",
  "key26": "2LBeGHLc1RDSb8fXfTGQmZvnas5hKn6pmQoNb7SbzoLj3hiFGrjdVNdX9bXcVuwXDbLSgDkZ6ZTzsC87YjNDvGYB",
  "key27": "5NiQsCs7qst7xjR32X1WNsadcBViPxfoTzvSGyFkdowXv2eBuTNTdxqSRv36nEa64jtu9vLYr4BSQWff5x7FTSdy",
  "key28": "855Ega8iN1dj9vU6yo9QGhQJLdCFhWcUk3zz9c6jvGN3xLisocqsPETWk1KR91W3DvPtXbAnVdUguBC6Lt9Q3gU",
  "key29": "2Lwy6DWD3Z7855kbQJuZyHTBYAn4A2QAUc6zxnXqHmJCZwRJsVnfeSVXsZhb2W4xEgFyczs4s3VcZaJ1YQyr6Sgy",
  "key30": "3FfUiFrhDRh1PwqVoGcqp41yD4aHng45z27nAxcQxLng7HkoJ6Dbyjaepwwhgn6HCoRZvporqGQjYASCghGKQm4P",
  "key31": "2D5UHt91HXvvTJ6x8MVPoJETsAP8HzCz9hfpJ11i1D38RQ3jsW2LKynyzyZrUtjqjA1WFNzr8pgDowPMED5SdAL8",
  "key32": "3SZVLfdkPus6bZNKf1zGbyHWd7YHQzXjZ8gknYA9kCCb9Cnxf4QKwUknqs9FyZW5eLys532FTUntd6DxHMZuHFAH",
  "key33": "4hacEuZbrv5swkuU2mu2TQ7MQg5sghkgNoj7uWY7nGny3tuD7R69tvEYdDhAAsYpcvjH2teMWprYxrB4XswgqiFW",
  "key34": "28eUgzd9zaajLZnDiGfQQEPxh4ZVFUFfX1KfEt3enKdJfUYdZfhcWFiaXJ4zdgvqF4wx1pC3YB5bJSZbkkB1J2uy",
  "key35": "5MndxvP9QVsJzmcvDmFc97z5VZwjbxYWSoV4YStWWk8FHWnWmKjFzrEx23Fc5tjzVK4wWuZigHaTTakyiLRCXxNB"
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
