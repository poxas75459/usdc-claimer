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
    "3142RUJQMfYDf3hE6h1896FF9dGA1FUagdtvLq3An4Tf4YNgLX2VpcQf1wC5RB1baQYL4bHGQBRHnGhZvnpTg3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kHe57HceoihMu6a9XSosmtpZWrkc4JaudBpeucQEaa1pr7DQQcvZVDpQj2FGKWDZsdbY2HzbmHMaiSi2XSu7Ax",
  "key1": "2oyXXf6Vv2pm78oWsEiKv4h6H3TnPTtuKgtn5GqzQLCryop8SywdgTRsskfYrjMrtQuEceiy5MrJiHwC3n1EnJFh",
  "key2": "5Qs2R1EEr4JJbVghfAp7zZsNUabiiuvdGXDqmSGPeAx8rvWU89Lq92Fnuaa7fPfeJFtLaCoAo2XcxF3qNhgiAiuY",
  "key3": "yMt6sqGgjD9busCMhzaLdigBxVcsmSsxhffAvnD5B8HbMrdAeXWUSgfVnMzF4PE1PiXHC4GiYr7DwH4xE7P6uEG",
  "key4": "35Sq1xBaV3SEizcx8qBD3mvaLxBLyqr8xNXSzHgv65RNgkepaLqERmyAG9qrwSxCUpSoNHsQJk4j4jHW9wXkjLzq",
  "key5": "2nSdx9Q4MKjjbhPQhWc4ihNo6zfLshTMBbXD71DtT5Ry7t1RcTPNdMfeY6aFCmmWqyu5uryuebnxdbNTdTkHQLke",
  "key6": "2uDWaNtA4n3thGR1dnAj52TkEnJLbqWezkfBGUP42tvTEjGc4QXmeJHKW17gz2qUKRKmSC9byvA4iG3RMLygtqnv",
  "key7": "2YKBHYgbdhXY22sQw45pe2MN8NvvpPK1a5RfAY9wSYeP34MN2ySagMG6QJvYcP7hKGgMgtUsx5WGvdWXGeN8Rcat",
  "key8": "5mskSPmxxJ85MoLxz2Lhen1yWEnCt61iK41jnyesEPWXvjzVh68PGEbUNzba5sfDV6SgdUtXXoauuFWiETAe9794",
  "key9": "3J9jLidzuTibhRGzx8GM1Y3tZs8biCa4hXnCZpnq3jRNG4jXuX466ywHaMK51xjNRJEQZfwg2vHKAzpgAxjg2G9d",
  "key10": "5ETW7aPs448QbT5G3sKmwpXfP1wSCAcK6iN8Fq2RBEWRuSzrCWxYnR4iXfiEP8A2CvtXw95cnVZjqMEWKHvRpmY9",
  "key11": "56am54aRHZ6E4B8gETeu1DNzMP7ygueyCE2V5JRU5XQBAdVyni4q7WB1uLQHtadYhPYdCNSh2EQCYMKD3y3LqpWK",
  "key12": "mgyqTYtxsUeNRccgsBAFEDCPRqQgBfkjSifGoKiYs5cS5S5ynMoMgzNHhdiU6WUB5qQgfbJW7EYtwJpHJYSVj5i",
  "key13": "2HDedLBKU5Tsd43cLQn4fBDQWht7ngL2dUeWF2HS5XRej8tqAwNkpnTtZtjLbYLqBcT8ZYB4WzG2Y1syZZfJX5fP",
  "key14": "3jcbqzCy3eRFK5cmePYDtfeYnEdPTLpruyJA4yJmBLuf5TdTUQbeEjRgBSksFsFPBVmUCBMDb8AZo7195s8Y4N8x",
  "key15": "5mqgDcdWhPjK55pAXwMvATuoBsaXbMeNG9Cv3nPzzBHCmbTdPcEJ9CASDdsSsrH2VsZbxzhHcJJNyZTzcDVtq82j",
  "key16": "5mAkXPL5ZvVTyENF4NPGvZWMyRCwhE44dvygyaEUHEeN1JEz4EhQ7fpa5gKPUL8FXdQtW8dKKvivkUCuNrrTFmv1",
  "key17": "53T8WL3W4qwmDHGuZdWZ8L5YHVYuEv4KFsLPMdA9Wr4arVcYKehnS838oDYrUa2P9ZVfWQxrUiTqWo3PyDVFHqGu",
  "key18": "39pBSAZGLkXDw323pXTsHEWEB6JbNBETizanueVS9nZH5dNRAFp7usuSjGTdGX3y8YE4c33SBAdrcGgGCMNcjnsx",
  "key19": "4LgxmNJEP1RXQeW5JJ86GRyegZfqKiGBmBkUe2mPHwMLcugN9Ng17jCUXWNMxfVoiT1NE6oeqXBDevRBeTco1FTE",
  "key20": "4dbKXkZdH8W9oaH3kosrrkurAZiDZYJ565euwPPQkDXheDWbj3Myx5Gj23YCmpUYb9g6RQCHsgEvr6d3MDxGH9Ef",
  "key21": "4WqUe8bgcwz79F71ZKvHr8kuQKvQP6Rs39ysokVytVBtKat1N7gZD9cTb2uvqz9P3JQv1RaEabq6gKrUVaFDZ1Hh",
  "key22": "55K8jfPEtJ1XL48GQFYmpZqemDBu1VChku2PTN4xbFwWQ1W6sVjBByeD4Pbt1YYEWv8UU84EddVtUhRGEn7voEMA",
  "key23": "2r9JuH7P9mE3bYkxE1iaZxV7XdRFTMapXVm6UkvXmiGMzpz2hkZtbSQn5zbYiiqK2DGsNjZLui3La3imDr61hDaC",
  "key24": "QqAVeLjFDHqHPZA1oKwHkbfAgh6LBh8679Bv59cb6qz94dmfNqhwfPSE4RLZbnJWGiYNzYpXuBUeusS2K9bxfps",
  "key25": "2XvPPn2sTGd8stAKFhwQp1WeW8FY4KBDWZinGC13MHdAUgy7BfEDxFdmPZJ7wG4BZirQ56oqRt2HA3Mqk2ehSVbf",
  "key26": "5QgHYAfGjNVk8ncXgBU22ZYYDpKaLZLaKNgr3xAMEeVT1wcf8tofH6QNpfC9TznvTGHhAquyFCjAzEPdALWovoL4"
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
