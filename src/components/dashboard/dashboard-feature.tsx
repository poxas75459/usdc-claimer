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
    "fVB1wbgMRaJLwmSRcUrdyx3Jmex1K4PsL3TdQd2ZGMdNXHjAMpiMJEmzQNCTYWpKEhJDGE8cL1bf5RhQmP832zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8TyTQ2bGmhfkDjB7GwZh1SNmyWnLsKwjUPX8p8Yg74ZHdVuEVDdJKRHbWFbwVpVwxaDXuBGCkjmLg7PNhWkXqj",
  "key1": "3USSC9yfpbzAZ7hYF2rPujRQA4wC9YtvMDBcUK3dhbD7pYonKDcxYRAJZwp2TTo7zWSdnLcZar4kJR2e5181aiut",
  "key2": "27iT2qTnSxxsKpBmfimv69kuSAnw3wZ19QsEhQy7wxVUqCWqmM57fy94gwh7uammijcChKGm2pV5CRXS8jZArFLt",
  "key3": "XPm9MDBiomZGKmoLKK8U4DRGsTbcjHnDz93nWFf5DGsHVKFguoVBn1Pv4Bph1GvZ5kxes7FYQcP1wU7e18RqtUB",
  "key4": "y5yzhG2HrXpxsNLhRQmNqw9iEMwn8pNWEXHTqXJno98sY1z4qdcLy1o8uVVNMACZ3Tz4EfmksyeFuWDtQQTntL2",
  "key5": "4gBnrApUpctCjGVmfKEvLhvnkDAv3r94S7HPxmZhRnzVQTmNSuXJaW8DxRQ3fjBnHoi3CTQTCFh6KnfpxjsXbX2y",
  "key6": "3oaszJ73VAUcnyuKfLmZFTp3TgEk2KFgDBm3pv6dGQnFGjbkMdVx39WvMuCiruG6rUMoMkeoMi8grS5Ez9tyzCin",
  "key7": "4nvovmEkv1DS81XvDJDUqznwym6oFmYPGQP4bESuG6oeHfdj5HAKQXB4CLGRiiSgE8YNibcyT3kwXPS7cgQvZDsd",
  "key8": "5xtw79CjeGDwL6mSgvPEfrGAdiRHbRs8gQJsHzhFiyb1ksSNVd5HGkbjXpcnaogtSG9q7GUncM1xJtKUjjmSEAzB",
  "key9": "4UQFrMMptVbDA9KzyQLbU6JGyZjQqnq349oRez8XoFRXUU33H2NrCvMEsU9gr1uroLN2XP4hjp4KejFJg1eWYpgS",
  "key10": "whS5XqJ9BmgGtTopaJKLHKTfnZxRfnUhwHNXs99PbxVdMCUYzb8Y7GeRqRtJUy2jtnq2aVBaW9J7JWSSJGxYFnz",
  "key11": "4tWFSGTSoZQLdAgqejdGc7wr7n59enN9bzG6BtngjNEoZ6fGLGBJhVbRFjFFc9vekJcBedXMsywQnxct3FF4ryHU",
  "key12": "52wtaLQgKuJpVtrXAvTpA98QUpLnPt6F6Kqo8kG8ZS5Bm7rW7gRkDut33nSaynCyC1GfroSB9utEDsZMMkjYwKzZ",
  "key13": "HqL8HCAVxZLussYnyH22hN7XBZqxxFoerzhogocyyse6R1LdccUAPfZbcffi9tVMZyCMcsQkeyaRpGUqpGgNNSs",
  "key14": "2MsXM9dvxhW3idAmY3eM8gjSZkCdsCk1LPkripLwAgrsK95gh6xoLyzHTgCcWU5CN5sWUtJeEkYAebHAidZ3B3nP",
  "key15": "2kahjRCKkrppyD214jCznPyDpjeeRQGNmANxJMMGS6ak5DWLSAwVm2yUNKBzdMJ11vknrdRix16HGLqGwCDmRRDS",
  "key16": "3inidZ28s2d3kxZfSUSP7fNy5rr9JFRufqaLHpto4ErdxaeZ9WuW8YzbtJXTWywGb9Qv4pna6vFaWABRbeC7n52w",
  "key17": "FuAYj38CAYbrq8epYFkvZMNeEezvEQm3z2GNNhhJN1dophxWum5qFFFMxJXWZ3YDVVw5YSftfGea9xqoaFTQZpV",
  "key18": "FStmgVjDP79iX5sUJQJxpz91evFLrtYBdo8jeLhAuWRWjrFM5qYa2HWs6JE5iAmTCirwNS3tgJQEzc27SJc4scV",
  "key19": "5ez21LiTMRy3MWYKShZY33wnsWMK2CSLwAfU19s5x3KEsdQfW4i3Cka3M5YrhCARNNbNaofNexsQk1JNKfwU9E7Y",
  "key20": "2aGmkz49DxSpKW358hPEyvqNwFL9LNoeFTtJGnQjJMdupdHfpjph92x4Yb5PjsvBdo2td8hFXXZZy3o7BfQXDpv",
  "key21": "61vnqViX7amL5LsW3rdhX3EYWCbC6TH3fczW5vcHhNEvD6RqQ8qBKdMxGu8rqvPqKmQ77p88T9oxMXaHNn8VdJKg",
  "key22": "4wpECUQkD1xciCU5yUEzoJfRSgFdtafbS3QsPwLMWr99PyQzNJj2EX7QqWhemEXcZpqUjFonKBiJuNYFxPsLamez",
  "key23": "wpS9raeuTEmF5TjrP8UpTT6CSw1rqbk6txvmGAe2rqoN8pUsohg1tUB2ck9Z4HgSqCrVwW3z3qwAv5Y9cymWPZi",
  "key24": "4pF1tinHBz5mZHKjP4pVkm9oY7TM4LbHZU28ruNd2ccyGmh29B3cAYKzY1AgRNbXPY39WqQERKep8R1x4Zax77gD",
  "key25": "5YfU16sK6aG7LuPce2m22s6Tdy6NpD8GTzwN9Ajtxdgw8zU8TSwbEUWwbd6TSPVQWF5dg3T28BvrdorbmTZWWXcr",
  "key26": "3uLbJBTL2FQXGAgUZY4aKavb2imc1H7kjgs6hFrhevwxb7uyyesQmac4MwKyVKDxtZCPDxqzqEPWM8rHcQB8jFRV",
  "key27": "5MxcaruLowqfXuMc78yEjXStHZTBaqLc7xdxcny7wvUVxZQfAZKa8KVfTeDikvMyMhJnogL63yuzWz4fGoEtpBon",
  "key28": "2cPS1K58pjKhDMYmhiXUPnNM76MvozKbisFSvcY4TUjhw64AAQx8zjbsagdqdNyNPVvMRsQsWhqHkDee1Ut1gmec",
  "key29": "3D8hMYE6BV8nro9RqitTHq1ZHe1Cdp5t72zuwGiUVzH8wKqUFqsAmT3s95zqdp96pfVbt6m4ot8atz1haB77UK5B",
  "key30": "aUdhL265YsgW7ya8HQ4HCFMMEbAqdGdoSxj6MM1EsCxu7ecDFwMQhLKYJo4qEExsKWH9ksCJ91upCL6xJ1v9Si8",
  "key31": "5i9qdhhRYW8RFy6c3rc3LgU4gj1yVHokzTNizgfRfiFif26YF2vnwdm1rJkxaQWWWt1qG8cQb834yUkreDa9hava",
  "key32": "357bk9dtDtEwuetaYrNp27csnLXo9bvVi3sHESSrw4KMgVaDxFWgP5jtrHw3aJsAFVnRHnRwjgeuwUtYppd5aN2z",
  "key33": "sFKsKqk65v2hpAPnP4eyTHGLpP2uMFpMfFCpKMKaCHmMGTmhdwxY98hqJnzre3G1rhzF3SDD6Xq2fgQ4kMr1nPP",
  "key34": "tDjQynbN7CzUUiVdvaRmqT7KjGc8msQqU8mmZpYBHrDfTDr7HwqvhraT6zCHnrRUCmGuCP8H5AR49KgjFdrFYX4",
  "key35": "3DBQUwbtfh9QRBpvfuhnVBJXEauTd83M5JKz9QMxsYALHajKW55DN2QFEXrixkbqPDh4HKuURYZ95gViiMYs9Rgn",
  "key36": "66wZHd45Pn7eJkYwrnxUAkXFvohxCi5MjCc26u5zvqjHDLU6cPaSjbQN9FQyuGqH3nZQoehtLXVaDhJ8eSdH3ZPd",
  "key37": "4UifBHZa2jHfSEDYzt964PscD3Jq53s2B8VfjrAfwbvxDtph9JF1XcCCQqk4tmCtjtepYaRHdyuBRPmTrhxr5Fif",
  "key38": "29wwgCWLxFM9VPdokQHgxpnx58Pio1yYBfxBwdoyQirE4ahVPou5hveGKq3HJSAUN2XC8XUR7zJzUUQwcoV7e2o7",
  "key39": "2vEdt2uH3hJ4cfZcfuqhF88qvM76c82pD4rgFKNSy81zVDTU2RezCwkMArLvQX6LDCLQ8ZgrHXWBJyYmWgJzmm6R",
  "key40": "58aFzx8ciwbjVKrnLA9BZTaaLAPQc4Ffi3gkTZwPiTLqVh9BR9JFUJFH2ensgdVJ3kK1g1P4kMZaFhC7F1spxZYH",
  "key41": "57LawWUQb7RdStjtR7CwmZoLXsq8G2UTC68KDQKRWsag1wsiFj4iDiN5JhJ5wXFLUfFVcPN47KczFuzjteD66aEW",
  "key42": "65yZAbRT8JDA7E5bhP2SADEdtWbcdoUCJNw3wJubKdw2N6jLct77hdhob9dJux53g3jZ86hByJSoxcgcQyoHTdAA"
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
