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
    "4yhBxvjSxJ8fzaKLsxWso9DCYwLpP6Z1RDBef6GWCaYtP51NUZCfRT5oTdNDCSWzFVnMkaHXtDqUPv922hAv2GSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXVkNi2SXizj7SfuqZrt7Xd7Q4pRrLbU7nw6vHtw4W59W53exqJNnduLFABJpxkwPV4cmChbzUBh1oRK2AkRvBq",
  "key1": "ba2qu1kWP7pWpeiqZTRmqKskWmwUytDhf8Wv5aToRAquzGfdLUNKAgBG93BewXCpogTNqRFjhip6djejxSmbim8",
  "key2": "5qXKV3Xzp6oDfDbRBhHYQAScLvvjsY9GbM9HwMKWxLceuNrtyzSiWL7J9pU983MKUbtosac3ncvirxkQoXxi9jqN",
  "key3": "2xyKdaeU58NfM4xNbYu6xdTXoKaGZZessyKcU7scWuNoXwj6tWdNp3BRHNRXNyyWF6QfpyF9V7EpN1aGhLkGCW8V",
  "key4": "5r9uP3jH7Bez9uBSFNrhNJfsHMRVEGbTxTwGkGpwdjS5rjWq1bucPTFg3SopeSK8SwS1UfeH4PA75MAPwjcKi2Vg",
  "key5": "2XytC3SSZyWk6E7Y5VxDKPBQTkE4kCSCZ6MTCdWKDj7uu9YZoUnx3AaDc4EBo9mTpDfvtW6hDsfYKaFGSbBs6Gqw",
  "key6": "TfcAQ21jNx6JeHoUG4Fdw9VFLzfSDeqqVbcbSKLWrN1oaYHVTRCDMYEbNjRtcVxkdW8TU3JzRkscvHYJScUxT4z",
  "key7": "5omungYJvWKhQrZ3MwoGJTbLcY6ERJerBK7iZr7s9MdXCoW1rubVEd6bDBFgiu8q6DiPegv3P2ioUG6Y3Lg4mhVN",
  "key8": "5WjawQZzjYKjyW86pSjh3VCsGG5GTQ1H4B6K6DLci8eEZmNdHyqiRdzobhbb6rtETXs9E57r1jJia9KEMha8z5gf",
  "key9": "44B7kXHgacG8nJHzAhbZugJKi3w1kphs6uyuQkQhLHyznKPQrL6zYSTJFWaKwgywhjZENHkHo3KV3T1r55jd6VW8",
  "key10": "5xRABoLqjCeiPqb8aVv7jDXKoecjZaCuVf12iihYka5kU9dAp6nJKyh9wWLYS4ZQjYz4hkwXT1XcLSgxva7Bza4s",
  "key11": "45gZa97NAKc6MtM8UDd3Ka4Jqw8448nXdRjsk9e2vqQHDDzQtb5oKgYSEiBeBpVnANzgbwCpEuw9WQSUAq6bPh9T",
  "key12": "5h4Q4QrHbWFzPQAHk4BaQNcqzcHhPJLBT7mzf4VXnrb3viULV1syJUXRc8fvhMjbGdLQbXi79Afjme3AkmsnPGad",
  "key13": "5pHiaAMB9eQomKFxUkPRQxzfBxe1UFyJA42Gd3oTyRYL61T9Hddq7Ftq48W22Bm3HrMRoDGct6P7HxJEhDRMHsBU",
  "key14": "3YsJEj22hagtW7wUyiLgvZUEUpwfrrBwVuaqPyBdjMnoU4YUuhbjCob31WsDMztX1zpeBPQF5Edx47SLUWAdmrLT",
  "key15": "5B7VBUNNE7bNH41uCZs26JG4YzTgCUkgBm3xdZRtEPhNqgrwnJpiLs7wKpRaRbHZ3kzYbar754ajBX66u6oVTvZk",
  "key16": "4RRCWqJ6wxcYDT68xjM1sDHof8zSSunLg4LozQVRTteqcwxb8BAFeM5NvcQY4cSpTGXxvKGuN3QXT9Yos6g1dEaY",
  "key17": "2SrnnMxHcSHknKcJwKNeuWRg8SJQoNADFkoq7hGWN8QM4PTBCxdvoqE4JDRCGPAH3wrvLDokDaNZuenykPm1Jqjk",
  "key18": "5cVm4F4Y5M2M67A2QnYtEMyKTzLa4qRXx9fotPgb9dYkdTGCJLBDRXTaNViztDVAgcBLK4zgtEGpZkjLo5d2hbyw",
  "key19": "rgiuxyJ6DPMqmwPE2dvrDquaTyVNNJ6jTzxoX6q78rKCLF9LS4cH1TmvCQERQDoTA7hyoXFfkgSAMZ458mgA2pX",
  "key20": "2TptwMjDc5H7phmuCDQgbMTnWNy97V6Cx4un5JxMTGDF8yFw4cifRnLX2G1urnaXibpyJCsWET7E6Sq4t7bUqe1R",
  "key21": "3LbbzhyP9eFgCjkcfKZjUosxiKHGAho6ao2irAhhiiBbD2zUgjeEfJux5msiUJo9ziF4oG6Y2D4MrZHPC4demiq2",
  "key22": "27AtyKGf1N2TKjAxwD7MkDSLT6eq7oAD39ZNoVhsfotVRmQhsTvXYkwcTKSWPoBDyAjUHDtMuMVFEgnYDyc6LB2d",
  "key23": "5Xn6ev3zR9cKEcKkCEA78fSvYfiV1aX8fTRgcYVDN6Kmowdr6LXD73NMdc7XQGCuzA5FzdBHLZGvijpazXy3K6VV",
  "key24": "2KTrFmx6TUiR7hYoEy7oMDEUARdx3QnFh3HSS6zhjntTByeCELJHVW6j2C7iFbmnKR7Zm5VjYRcCDtrenTuQy9M4",
  "key25": "3ScycUinoLGUXHfeMGnD45rsVJWa6fNbDuVLaoyAhzoR6syN8zSVRsFHRvYDwBVUcYsgKEGDCmze8LpQYxX2NDZH",
  "key26": "VmqPpBnMwWMrbZUPQyZ78xibmYuV3f2kE8KmfH9AQdqEwC77y3rwpz3eLFHJ5UU4ptMNDuXfNgnpjh4ThPSqV88",
  "key27": "4QGxcTR7qqwJd2yTVPMMs1C29BGEdFkPJKx6kVHARNctG6wsCYFELJ3mDcETYoPDuT483CuECqXYytAC7qqF2nTb",
  "key28": "Xq2DK7FB2kdU8iUeQAdjk3vfnP977xUBQYSZi7DwW9QbyUSiuCjXgQ9xczrpAE4vzZorwe4TqSqXR4T2dmwsmnc",
  "key29": "3xUAKJngxfNEhmWVHw2nfJ2oruSTMYwsBjypPSQ3Hf9NXYYXXhUHfBkDUhP1R1SEis3hDkQvWrPMmcx8byT6g41G",
  "key30": "uqmUWGu44hYHK5wa1vZMPJmbPbVhYmJJ2FCyFSNVaxMxhEUZXJTggtGJfx4fEBZte66SEsghz4HwL6KfxJfRtzj",
  "key31": "4N61mNx75zvdn7jKxmhFSumaZDQ7fbjrnCVJtLfKBUgfkgfKtxVaMVpXRutwabgF7BZEpHveAgfWD5dWiKWA8w6o"
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
