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
    "TitAAr47W8qWNRHRpBPWGUbMQT9pMguhFBx5V1E6zMYoU3z8oqYxhsNgKXEnUgJWZCVToP8Wb6SQB2EM312w3Vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbWp3P5UHv2hmfWiE9yu2sSD4b5CyyjMKaVX4BuXM73kjiAh8kUfBYLg6MonboecPqAD1Psu79eVwZu4KKDoxuP",
  "key1": "E8sExZSDkZEbhUXDmRU6TSHuRuHvPoa1DGkwQad4o3J76DQdQfm8V7BTkccak7y54thvyguXm3NHdxRrh1pYmcQ",
  "key2": "27r4WUZhTLFPS8M9GZTtRmdKvXNj7LFyb5wxdqq1bZ4Yeu27fHVP8u85XiL8WPVcLEFSNya4J3vUnUt431oGH3eo",
  "key3": "5ifcBhKiPTY9NppHwPPGVaZTDpXbLNPb2kPriKU1M5jYf3sidXQQjhimYzUtcakHWK1KUYMPPgsTWQHvCd1BbCsb",
  "key4": "2aHYgZLXXN2gFQHQdCbsAetNRnjT8nWWyNqWvgJxw5VUswi7xLgMXk7SpgcALCmRfigYCmpFZyDrRdR4kGaBNGxq",
  "key5": "5yGTLqtrkzNAMqr5wZrEq2Hty9559Nu5cwZwednMdZgxLxKfqmu75WTJbjszAhVARMD5HcLg4jbRYYUqh8nHDh6y",
  "key6": "4Hpm8gG6nEct8Yj1ibs82VvW5D1f2PhMYENsDRXXwQcq8f27mhMyAKPUf2ePYTXp71kjYFKhbw4pPEmZc7Dz1HRZ",
  "key7": "5m7p3Lbvzvs9YWzF8k8BUtPBakmnys6SHM6xat1Hw3qYydaU9U2AhG8x1qLooLwZQTyC3oNWbvr2JmsaRseYFRsM",
  "key8": "5LYUs72Dm3XrxUNL9jWEdDPT8PvJyMqtgWWfH7bTiYhmBARVpWvourpujYNhb2oibmmmFyN3C2boFNR5kzVVyqnR",
  "key9": "3JEDfoMHqb7kM5h13swoNYHSfXHMtMDoifXeinT2FCSpVDkJEcuwtfSydcM78ZuwcMKwN4H8dcaqsimPVHwLvq12",
  "key10": "3V6HKnj18u6nkhwvSbKnwu7qopWjbobBVmtFAboendsdRfhniaiZS2xVui3vJo7vpKCeZhzWxD6gg7BZaCymgMAN",
  "key11": "4AoUCzaVDHJtq7PegcPpSwuxF32LKVAJBNFihwMuGBSbwQQGP9aSkFS381sAUei64w3w6fjvqjjaeadUvwMWJkNV",
  "key12": "5itZ7zBLPPPqfhKBLv1BankVjYH1DAHQ56Gny86ajvc2qjxRvtXFRP95uYJpgyoxjtgsEhkrGjmD7k4sXcWprpLP",
  "key13": "3MdzWHZkziumivgSewYxL6z31UKqGAZvJ4GWKdKKkBz87ZvYwrvdgpGQyPmx88FuSVkJpZa1ozVV9g1rJX474LZ6",
  "key14": "8Vi2EoHUkCJUzs3gRdckXtXRnhawTrM13JVuYkZzQbAYY7w4gqMLLqRDUdDccJM2AZwXdsvGSvHpT2Zu8dg2WTh",
  "key15": "2aXxnfmijPLbyeRvDGA8fYDWaT6GkyAtdpGapBXJ1C2idtFvHgdyaXjXo7iYDBMGAhUSDyg3j1HBLeKmdBCi4Pyb",
  "key16": "2mSTSPjSsXpCPL3bDuHaQuayZfeT6a4FNGSgP4ms6WupMqV9n6jNTKL4H7CmFZPg5QcDLLGXCKMyirdyJf4Jifap",
  "key17": "rMvs4EgbVbS5Q3XQAvXBnjqww4GhmQJyXHCAFfWmoUUKoSFpSKGsuAnpsGgHDb3PMMn8Z81FMr57J1CPHoyHxxG",
  "key18": "tsL55Dc7JjBmySvQrro1QSksMvugicms5ZN4ckheGaLNN8nySvqoALABbnUb7UwMxtsMzkvvdSWzNfWXTPbLt9i",
  "key19": "d7cwyu2xBYapV5Rzs22sbDCrm3rLPUGDn5AsShXQbmCbUzg4KSEZpGeJuRHvwSt2j4puA9RRNq2hPEdpmFjrvPS",
  "key20": "4bmJFT6NKT3y6SFfdERwdo2qmximXTNtvATBVm4qPyrtBkWgM8WqxF6USfo2gP9YcwVUfrvZDBpZyqdPDvECjqmy",
  "key21": "5FTWGz6hoFemboYGAY4feo5JkyajrwCpCpZCU57e76hP4dVx91iYHYuU7bD4E1oeKrsoTmNTonDHfjrGZ3BamvfK",
  "key22": "ZPh2W9j7nrkTbvREZ2KGjgw3ztfegg4L7TYYtPY9cUxQKxWQgcQi1U1QkHCYxCW4kgcS41LYRfZrcUSX35XK8Pz",
  "key23": "52M52cAA7iA9hEwNX6Q7EqzPX3uMGgmqA8yKgF87ADX3HhRrNNTnvpVKD7RNPFcUGiixXGBgcr6htB8rRJuzcXj2",
  "key24": "5fEDaEePQTTLrskqWqHrCi59D6RaFTPH3FmzFcChSiKKtPMLdwewugBcM6XUFi4XqxC6LSxLePMt98i3KfGkjSx",
  "key25": "mJKUWZd5z5XDuM9sibYMHNPxAADmVBLapL8sToWv17f3JagtMvSA41MEqrGzcq5a7mWW7eLDtZYV76iMzfatsb6",
  "key26": "4D3JSPyPFdsFAqAhJB8Dopz3hQzDbQwwESzN4T1aSMC8i3nhb1c6ypqGrnPjNLcea5ACZFi5sE69V6J267bYRYvs",
  "key27": "2ZcE8bytdnryfUCpEjF2hacX7XCXzc5kMHVHgUdumbsyQDc8EK4CVtAFfRGovpeN66tkP3EyGi1cR6XHwNhUoScf",
  "key28": "mshnExERNTkiFbidCUGi2rLMmSneRfdaTNofcc1D8ULigezEpkgRztsvse84muPfGYoLjZZP5tLruBvs2LQ7bZG",
  "key29": "4uSTRjLSdqymgUth2YY1MefA9YmE45viWbudrKi1Cw1fcdeLZjgpBfDEyKxFqR1YiwNHBRtpsDV2tb2N3ZsYorQM",
  "key30": "23bqq2pJwqWbyt35u9rjxrXQU7BdEXvGz5yxjY86a42ei9VX97v1tm6i5tTggCFtWaYQTwf76zosiU3Rjvyfi2gQ",
  "key31": "38cdY6yW9pWwFNzUBXdWxjAxwDL2yro6EsCBvDB2kEsbg5mPxyADyKNJQadupv7sQUzs5WvKBAh7s4s16kNW3S6b",
  "key32": "4Dsvr2nhiUFZe6ngGWBXc5dRntMmeiUhvqWUyDDoZyFQerU6pjuHY1XhPzdA5gc8gRxSUFL4P5PaxLBhp12N75sB",
  "key33": "2wrE5nyqQQGcwg1SmhyuogCpqjp8BvXcFXwWFuL5B6fSh5NaDBAEvJrbcPoWrGa8pE8uNjo3omavv1odJehkPc2j",
  "key34": "3BbdNorw7a8p2vimCMUohcDtECGkqLq6PfQG3GKKmAtzHnMnfzPh7baEfnS3DpzjQ9hbMrq7hUdDr9nVzJYbFJTh",
  "key35": "25Mjd7AGDebE2ZC5FN7Qt2jfEutLsZWjMkt9DXpc2nVvewjKiSgkLoEiuDgMwX7wVo8N3xfEEgM798JAgiv7EAV8",
  "key36": "58Qk5bMCcFCVACZpqMfckxZo7tzfYzyKyMCSPsAbyB1J9iHVBJxF5VPQ15LTG2Zez27YWCAQwxtokkcXifzqNxvt",
  "key37": "2tDwttWi2673oKWxDN9bsc8mdMXgFocyiJv6z8vTb6mWaNdPh6C6wHs6ekyMyVk1aRUW5mV7sxTGGHAGVJqRcPxE",
  "key38": "29yBhvdgDo1jARrES1XwNr5QKGJuXCXDboyDBCE7x3emgdbjhkHDHJC9eQ4WMfQvNYXk2JGYocxHFrDiVxfpu56c",
  "key39": "4euM1Mw1PUCGtdGWte1LQnwssGyL4cXX8Akhxt5qCgjePsvnzLRt9kmgvr9vCEgPcKE7cX8CChGiMq9reudzNy8Y",
  "key40": "8vVYtfCQ6kBuSSn295NiRHLcGTCg8vGqSisXbazzao4EVTbLkLQb8smwBcxTKffMJodQdiKVc5ejcGCi871kT9h",
  "key41": "5evr8Xhpo3XKdyBrBoB2shLjdVFht4aQ6NtZ33LK192RieBQHGAFc4ctqdoAFVfbatoQXrkjY4E8xUzBUj3tejai",
  "key42": "3upLriyuHtgXem9yGFWpTB2VUmpxrJJcCeBdrG7XEDPmMPrs3BTKUAnYsSKiE687Bs6zR8i9PEWrywoYngymp4hg",
  "key43": "3mqmRKzgpnELdffSJG82bzMzZFBygGmdFrfKHtD86dmfvkquUdMVgjz3FRFGyi9ubdTnGy5fkUhZ9Q2uJLpk8LBY",
  "key44": "DQGoBzts8jUMg6q7VNt8VG5dE4B5CjYYznoAX1AfGMuoiFosG6Md5gS7eiKDAiVbuVu3wY5kAB3NCfdd4e9ejcN",
  "key45": "4yKrTQoZ7p8Wk2QiXaAivAVNFegc31GcfQe4jiBXaZtgdPtY6z2B5GVna6T1jd6ctfqFNYbWc8KLtz8CtDNoXG6K",
  "key46": "2m2FpYNdUeoj8G91euR4fqwKc8YEgFLB8RsPwWxj8p7YQAckDpA2ccFaqKxHvNHZny66FgfKkR9UtxcTiZYHjZ3h",
  "key47": "QUWAXmDzBsMkRDzSNshc88Xy9iSq5kKKVUw3wTXP9KiMLMCH3m9oTTtUQwR3xX4bBCFrjbDHpiuh8YU9iVRRryT"
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
