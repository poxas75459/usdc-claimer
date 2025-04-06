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
    "5nWCg3Kg9uqvSXQV1PGn5eqqGWkxkD1YwjkGhY7zVphwvwfRn1qATbzNwG3b7UwNRKJvamA3s4x74Z69gSgEuhvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyoDB75rqpaNcXwH5QwupvCMzCTJfX1vqLkq1c5BV6DcVZF6gkZZx52tmNW57ovZNRvnUe3L8Ya6LrknPsaEiz2",
  "key1": "4RADwWBhHEE9gipecbzCf42xH61CRbxf6xDpSYDnZjLbiAoNHHGi1QsqGBpumufv5HjX5DaQYLNvdvnrMjXw28W",
  "key2": "4mpmHmyWhratELjWmvA4oURM1SsWxcS6x1888rj9HnkLACRJYqG8WCSaZrq2YjP6tUbsPdHUsPSpdXj3p54kERgt",
  "key3": "4Uiv9oTDry5Z7AcMMzP6nCmU6GSUjt5YeEM1FEeYxZAh6QhMcRGZNsQaEW56npeLEHBA93bTYQtdTgAiV5YkbQmD",
  "key4": "4Y8TCCYnGUy13MoZuf4vHyvMozDK1J7BpBMVxFzabP2JNmQG1efc5jyoxmLWn27GXrpxBBd9mzDaRDY3qNL5ZnrU",
  "key5": "2FVfYwLp3LTvnwTJmxaomVJ82p2K7LsmKdnsGQWNy3p5uTRQU5D4pgZ6Rjw321j6WPRqRKDWFHaQKT8AxpSPK1Mb",
  "key6": "4eaEsvDFpMjoA9SnByopKGCoUK5GdZJ9AS85hntT1JaThoSwEu1vVibWMfZfb6XJ5yJWmAHXwG5oHDDTBT3oPL8A",
  "key7": "2ru3ESUXTWUp1eC7MhhcXW1xWx15sbqBr5NL3uNjgVttjBq258qH5yjqoma5aUL81oYb1aQnrZxruFdTRJv3eNdT",
  "key8": "5vFgpjzCFWpz4kzDo4koSN2zwcAfgHz8BZieg81pP8Nv7FPfk7utZXNGM2NbqR6DSTcgQQokz1oehBA1BGvwSy9g",
  "key9": "Jb3KFJvet4QzoBTFtSmzKp7sjs7W7vBcaHyfZjXQAUJ5A6xTAryiVobA7Tw5yZKJUTdTPBtp9LxVgirH6G1UgXB",
  "key10": "3RoXGoyfHC7uspXtvKhdm25Hy9YDevVAYBUotys6xgtwgFuLcaFn7694qpfW6ATCX2DZ1Hd145T6r18wdkZcM6zF",
  "key11": "zDA5vizkbGg4aBwCyd3xiEexSDy2BYGatNqmzsAjv4kGZ1RG7qbKZ8UEV8rkb9f46J7z6gkSbqxxrqGV8yBPgGq",
  "key12": "2UY8xoUrGNFEEhxaF7AgwRpx7Ghq52TYTkhBQzdxa89Q55SjeK7FZ6TxnXgMT9BGm56uSbeQCXX6bPttwZtJ5EXW",
  "key13": "2UDSzQM2ebXaXM67UPXMAcUFAzk6ouiu1FzmqiZpgTNp5BeyAfBpv1rozde6u8kxVrrYAjQzHFXb1Mnkn3V8igKz",
  "key14": "36Pw9BAUSZE8beTETGrBHFh5Ua9rYL3TsaX8E9sxVvQjnCSsGd8hyMSRKgpCx1JEDwzKd5JSHv724rrr32vZJJQc",
  "key15": "Lsu413MTkK2U93g4x5qVWPfaFn5F9XPaUUYEVtw55w73nCxb5JGmTXmVzZKy7zZdgW4s5HPsF6V1Dd4dv4yNH3t",
  "key16": "3j7zgkYEj6zwcQExw6eC6AHgkYuUNfdNUQHAFE13C2Et8wXMLnwtpCdpSbS1DF9MqUJhZKwDhsoR42FHpnUiPmXT",
  "key17": "5qzScccBtXn8zb36mWZZsBqENkTa36vAUCLGuoBmV2WdcFnakQS7N7MPxsUAzCttTc88qV4ZxRdJw5TWKQTtCUoY",
  "key18": "5dPvKCCaWWFjhjijStLsWV6Mu8fnWxsro92Hb9ao5nE1swiEtt5qmtSmMbQ46NR2TwvfVmNTzFQZLRB2AeUjF79u",
  "key19": "4ZS7m4mthRbnLRdEyvhsZxejF3fCBxvGPm5FkzJnLcLvRBY2KiiTfuisfmye6WSHGLrKnv58kFKENfUodiyPzra4",
  "key20": "4YYVCVrfD6tEiyaygwDErzTCMyCPJiJ76HcTHGZ41jTHJzNb2QNs2GVsrABfmMaDAheLynwyhPJjwFe1b349oHdP",
  "key21": "2VfPDnPTy1FcwJjBzMJvcTQXPNWZ3gdtDKY4cpGEKJYwG86tkr7u5wPMBqtRcVY3Xtx6zXE3K67TUQuThmbw45f",
  "key22": "MWaJPmafoMx8aX181bmrfiaPqBeJ9sxyo1MyVRrfuTyFVqgR1y1keAvxB2aiR8BerTKmnZVUbdvr9xyQSQ5TTax",
  "key23": "57HVpyw4VDF9oN8J93vJL2uBcCsJJ85QvfX6KZBSYpqXo8hK7EkiY9KpKKF3ALmoteyBdnf4Y6e7xpH7oT4Vciw8",
  "key24": "4tS7nBDtECgAukdKMYG4MdA6E5QKaRWVWhrYxvVvh3E7m2bExxhiiwGdP2emeSvAoM7V2nkSQK6qCpB9Xi47rxVF",
  "key25": "5KdkcNRTfrwxx28wqCu5TVSTL9DnWA6TUH7zHvtNgR8LmJJC2UtYipyy2XM2g6GU2K8Y9eUD7GSjMovBCQBSoN2D",
  "key26": "5DtzrCLDMtX7F9mYniojKCgmC7ASDag6CWpArbHRYc6oeknLZWYqz5B31VKtfDhSzFRjpndBg6syZNw5sk1SqTm7",
  "key27": "3DkxqGp3BQGrhNz3GnhC5mYPwenqGYhWm3SvSSd5pPPkCgq4CPyXAESn9ak7SepFqomcMsQ1qa8CzcBLqaLdGPE5",
  "key28": "4sAuj9oDz3R2nEyr266mRWiWewutLvPLsPgtYsePYSyPmmGi1QxDoUWU1scTF8ukpuoxpMjCJ21jSKcnbaEVQSnr",
  "key29": "2aiCemgeg2TGD4dg7xVUbKkMBjbu4tHgmjEETyWQwrkr7reFdx7rU2sU9PzZ8Knj2jEDE77z1wYL6xkGvJJ6Esa3",
  "key30": "LMesLRcnwpWgMEne18j1DezedrAy13gCKvBPJiVTK42jh8mbiDhR3HcUyBCFxTka4nJ2LgjwcrT6vsRwAYa74d8",
  "key31": "3uKEsbPbpAiYijyY3vigZeG3mo5hmqCx4JqaYBezWtHNGgfohSCzJ16KDKptz4R7CPAfwAohpjmK2AaPy1X2yc7g",
  "key32": "2JRey5Tczbs72dFhZoUdnc4addRWPoj6qLmYKpi9iaxTicsfMJvwapS9PbmGd6nLmQza3f5R8v2rrzRhN9Z197it",
  "key33": "4piGCa3PctPLs1JERgZCyuNuYg8Hz5CKyA3SamBcrcRwLGgG45QrXnuyeSGcymi3Bh3FaaPfWrnDVEQ6rsuXpEYL",
  "key34": "5ejnZxgzwi2eBA57SWJv2XyvGD9HBFiYbC1QjLaVoePJHrzA3rzSKHUo54pcwX8wVkyRV6Wt6Kf1xsSBMys3zKNw",
  "key35": "5tMab9u2KgxfcbtZA6RSNtRBe3FGis9S3858w3FaNzcuXT6ox9uBXkkMz93KdEN95kegRkKapAzHKd6EbJVvhbmN",
  "key36": "635fL3nPGPrcgwq7dTKdCK8z3ktV3Fi9TvB6N9rbbWYrKGYVpZqyPJqeKeujuTb9Aac5JL3EH4cEU5BLgxsX8pmF"
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
