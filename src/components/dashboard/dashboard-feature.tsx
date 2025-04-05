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
    "4d2JVW5LawoEoTApJsHikPYW3debA8QizmLvsng6v1hpKYESZWqi6yNKRozzGZAiEWSN1mbgQH9V2TjDrLJ1fJT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tr1ftMp6T3nxERPyvhnfqg9r4vXtKNVtnT1nGG3DBv3JrQEhUtQK5L5iKokrY2cXgHfYJfpn7KVyQdL74oHgFma",
  "key1": "JNyVg79xFvYF7KB1QGpCHuhYt1Um4839AAY1zoaAd6fNgLKC6m9zNmyEAvJ2gpsUtKUPV6fGKaVNWJ8uo1ZfohR",
  "key2": "34rqQZfiuoBAuN74MPeyAGeA9fjcHByo96gUuq7h3Ahcodk4rZscxwAtq68Xkf3a99SfgYyruFicLtjgZF1dQwj4",
  "key3": "5EpT9Wq2oCU1QVQuwBdb45QGYBNBFDVRyhF58rFKm22JoLjDjQcxnjr5998jfF4phgZc8X2R5mftpCSWPHXMK2Xo",
  "key4": "o6oTNfPvUz2VDUfDLFJ1GSRqTvFs6MzJWTzi3t9LQCKEnSLTMq5N1EcJRy5BZz2wpqQtk7cPRwapvz3cWgGcP7q",
  "key5": "4ALyUgwiWfNYb7Z9WbPw89LjVfsyo5sRtX3iDQsMbatxmuXvyEF3BfeNeVmY15VJyrjFnXCWPu8zVAXTrLs2N13x",
  "key6": "5WkndhNKPbAsR4fwpp1DDY4SobV6Kn122imq1dh9yJErZTiKH5wL131jpmPDdq64jvuM56pihVJXwbNo2PKGN9f3",
  "key7": "sGzpkuiyPrp9m4ZdN8YnAGaAysNRUAPQMVbCtS5v9wKJUD6dzngautzxfvsmR6GMX4CM4ueoGG5w4zMJUPtpokT",
  "key8": "2UtJVJPDqnpF9CmPEDV7jtjbTox3gU31M1S77wvpYEPMykax6WNnaKgSNjLr8GEXFGSj5s4qzYmQjxKveZtGNukJ",
  "key9": "3yRd3at7ER7ZLZgXBkBNJvovcgxsi96A83YLjvU6fvwC5TPxVXshY566TeYserjQQWo7nYyS69fRYkjewKgJbXjK",
  "key10": "4EBJ2Je1jZgjjZfq2JVuyg652MxDEawLrypfcdFhoYiKPa4eTu2w4vGwHksFzQfJLUsiEAqKPFEFMJLiDUP8EZ6L",
  "key11": "3j9vpcNp6McDMbqZUnaeUmg5FRQsMUaoBmiP3ECipPKXmUwHmQmHhiiqGmUM1SuUSZxGo8MiRUAEtwbqohNP4WHo",
  "key12": "sQeBuNLpHHhngBc9aX9wNruzUSroiPAEwdGzcAbzBytkBQbna6qtymt7CdTRGD2KbpEQA1WVqA87f4iA9q8occ9",
  "key13": "BXrdMXrRCJ4XSn6qBnYsnkHYaQMBMLq78ogH7pC8tDkH1rgF9RcJTsjvRewSbU11Fo2VTFFMRUdgnJaJKAiwG8X",
  "key14": "HNG7fHLGLvduVvuRqn1Ns4KLGhbFPJjSGCqiTELEr2bm1s4DqwnQqk1pi4bw1WmJDLb4Xj8EVQqz12vGM7QGNfs",
  "key15": "3sYxPN4oa61yXrNaSVM86iaVYyJA7Uop2F5WBdvDUvtApKRCSavDamyJhGxh1ogtMFDu7dEWUvq6EXn9ieJ3yHnD",
  "key16": "5uzjni9Y2HLHBhnmgq7GbopaTL55hb9NPWm5GnAEeqrviP2uBmBPDkJvoLqHNgRhYLTcMMEgAj2tj2uw3mJ7viKW",
  "key17": "2wxdDiYPdBy7aZ1Z5rRo6SFaS4MQgGvKvCcRMBcTNeFBFhKLLwspFySTRSbi7QNqhB8PdRvRou4QftmaBJWCtg8k",
  "key18": "3ZzTAfGzDGz7WCjcCVjyWcoo9DvDhwgR9Rp5mQJ2jiVGKuuejpPu6NCPNRwKaEnsYaG6hRFA7waBysYWChJCThec",
  "key19": "KwjhB2KibZ44vsbAxG18mfZENBFDj9c6cpG4GKkt44FeoPZEwVPgwgLT4Ws23Bf8dZFAVJp6BY1UVEAdc8qFyPW",
  "key20": "2XzuiHzsqngmXu1uHBB83AhPsjw71X6a9H5TGRoT4ukQg8jZa2ccjVp1RM6em2kv95MvueFX9i48AXP8WswD3ixB",
  "key21": "Z4n6K1C5duVjvuwHos9mPogPM81XYF9x13SpKNPxNvwz2MUW26NK6cRyNj4tJWRVo3rA84JZ87spCaLH74whRve",
  "key22": "3QA1bFpyMP3EGG4aaLRXmuathZNLatwoRxqabNF4kRdYSBb6uCh6rC8By92UrXShxpxnhkCiKNm5N8CZ6Ja7hUe",
  "key23": "2YX4JKPiisrN5LvuoLcdnYarnrrru2KRhEhk24yT3V9BhgG1htkGozh45s9D4sbAkoQ9WdJesJ83axbBPpkXbv14",
  "key24": "4Qm6fUnpKw1CLfZ1WmG69AWmSF4mJrnt8B1PJptDCtS7rLGqPua9UhcWUFvhgNvcWTnfHtUKu13hBpN6ZvxkFM7M",
  "key25": "EzfB7jhtZbhgWX3pYS1LG9V2KP8fHxau7DZr97zsP3bZpH6UMECJxsuKXHHXGQRt4QmwrAPS1arbEKXCFghmnrD",
  "key26": "4Rtf4XNpTKP4Z3PEFHAwF7LtbJcYX2A5QGcpZbw4WQhCVJRY19nxuCoKF1XN4maZpDHG46heWfU2UyM7fa398CnZ",
  "key27": "23U2spnQA8aSmEtmz4L9Qd3npUi5gB6F7ymFpaJ2MnxTiiGTcXymL15jTeohCv5Dc5jdUK9AyWbputyFQn6FAjqu",
  "key28": "2mxVQ3FQ7Hg5kcLJj2puYrNe1x6UtZnQ8YKJdFxWy4m6jKeyKVfpM5yJoCAqYGrDeu8uM9Hee88c4NYnBJtW9x8k",
  "key29": "6s2hRZFSZDmSS5UNtSB9P77Ub4zN8qHzwgVVAcjdfw96YZc4mHvLwqT8b25PPewgH8UGdigqNZt5db25wKzFuvH",
  "key30": "5fsPpYPQE1tdYFTuaNoa6X29sxiFFKt7HvUKEqcemxs4WXNrX3CXPAGEnTVbMeDVfTPtNEp6gT9UNqNsSzP3DnFX",
  "key31": "3mvUWKPFBB8M4jbtbvhQrVMDsh1DKU8k1GU3mPao2HxtRGet69umjC5C28YSMf7PTCevnPE8wzoBFWs4b3pt7Y8h",
  "key32": "4UPb4w2V4aZckrcBdmPRwcVAY5Eiv98GGpY6casYy4WxYij3yq7eL4VL58wiHCT6PkjsAwRMw4nmfAdXLpERE9XM",
  "key33": "2dFRrToyxXZsyexdYDCje59XwjCjvXDYuetfH7aSsPzeus4QDdk8hTxJVee3ZwGNJwjQ8kWBxWG83FvdmKQkaqd7",
  "key34": "3m9Cn7rNikN1kSj2YnNhdsUZ7sFhFEJWX4hufbgkGV3xYkAVeXKawuCy1j1HeNJRFJuAYk7HPDT1sk4DCAv7pSmT",
  "key35": "42BZ8TTfTq8kC9kMKUU6gSx7vhWJSWUmkkwYxUniPyp42FPJBz3BoKKQBVTMvGbSKVwx4N4TKZ6D123PmndbYwzL",
  "key36": "5V8KJsq9mPQXZLJXseqffy55v5RW8aLQoYgoeo5fMVspU1cMbkFgciV3Cu4BSFimRQiM7A7sxtRs7wb9PBwG6TKv",
  "key37": "3pkH6LtDst93WhAhRNv7ofAQ9GHg81DMsfsHw94bJpKh4U2kcKqVXyA9PemjSX7gPCVSom8AUfhBxnBDAdV9h4Ju",
  "key38": "3qitppRQbgonhBRtaU2EJgwGKYoJbehRgkx4ANgrhHgZoC66CfkApZuFvvXx4abhTUGCqufNBoiDSPDUqnD9rw1r",
  "key39": "2NqY32XBREVmhL2sn3D7ms7FvPDoZYGt1qFv7PbWb6xcm88WSe1KeMkP46hnHZsv2U4Vg2H4x8r84ke8UybNUyx7",
  "key40": "3xtWkaz1RHt6VhpAun23GSfZKVPQ4CwnxpQUCy5mspco8YribrLaXc6d64nbwDtwQtRWbgBaxcSyhJBeWwPJKYQ2"
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
