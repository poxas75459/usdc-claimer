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
    "27VDXpnWarB39vDJUBPDX4VxWnoZor7Lc8pXAFqCh15BJmEU57jBHCaf5Gfa5q27vaX3Jr7qG6zybnq67huxee4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TvdC4b9PiUnw7P5piFNHWmVzbkquBEYKtfknfmk5gmRRDCaBUZiSiqnw3zJtNGrvf5ES5NNTBSbbHjiePwgn8wj",
  "key1": "54k2cov8cDmhUNw6T5UDUdYoGe5MfqiLXw7hhrp2NQvazXy5pXvyEHCmAGzwnDrWgB2ux8WR8jPpT1c74s2Cho6Z",
  "key2": "5MTNNDuUv1ou7b4cgfhHW6aHKQbCwd5oLVQWJRfHM6Kz2MR4fZ3aDkuJgKWt6XVPBXPKwYV7a6ctgUjkBbtPfwXx",
  "key3": "3iTJ2hTkGEDpdzA3DeYzMRE3nCWqT65WQhvmBvYAeQv2PWR5gfyamEpPNfYLYxWZJs5m2VbKcEre49vqGNw6eXen",
  "key4": "2bTmR7hV8jbHFQzENTBRQEsSaRiucnKhoyyiYcu7kafgV5WrMNkjPgmhSBCFwiVVV3jkqz9ww4agr3Wfp2zcec7q",
  "key5": "48MeULdEVa9Y97E4HV9DvFuYrKdaGjLKYpGUhoB2Nyug5Vk96YguRhKRbNEBn82c1RABqkKHXHvEoFBnjf6wwQku",
  "key6": "2D1nRi1eQ5toyHdDwaXdWJuGiVWcfeWHqXuckhhjcq423SXWHBjSrpXeC9ud4nNiTsrSgirW66831NrDEhtvKGsd",
  "key7": "2pVcZ4Zi2XcwHD8qEkMY3RW7rpr14Suvd4ZjsEyR4KUd68Dhwr667vDBgoY4RFGQWQKL6JysaD5Em3ePL1hKGDSi",
  "key8": "49YP77ZG48xaSD2wkba6MYPN1n4e8kwt9THhZi8AiXcbXW7Wf5pfQ5DwzJXLnWJ9o58rzBhe3znvVfzN8Q8HBbQN",
  "key9": "28bPqiGZzy9vpDa5MCivtQNtxcCfkJ3w2fRSKYcBrnfwefuzquwzaTuQiZQMpxesRaEJmLyQ25T7raYM2NcM1FLG",
  "key10": "3d3TC5FfwpFkprGsr7EiGuEgaRyt9edN42VuhCdKQYFnGAUdNgHqTynQAncidATjaRwZkJyiYgQ8ND2LPM1Z863a",
  "key11": "4vAAwcTPonpJ63CGYb3CUham8SiLkLR7AAchJLqye4JLeKFogqsDgYxcEVrEjLMkKB18x4MNWtDvEwa3LWYDXnqA",
  "key12": "dVubwHFvYfbbrei9n8coCiZWiKoGkWHY5sjmZfhTKhddnUCFq6naCno7akar8riLGXxVWqcG3R7nPQwrsUvKZDg",
  "key13": "4Z2bsrvkg9rL4mHeB3BzurY6CQBbdxbaTDj3zdtb5FFEZDg4FPc9mdHdRjqYgBj3WYqQ8qj9ejoPik6pbY49KHDk",
  "key14": "8dzVYvFmwAyr3bgWeJx5Ark8hCVHEBDDedBe6JnwgtKyCQyAsLKrLZ8L8pSZDr8x5yYgJ5DvGmWmU1kL4iBYvmz",
  "key15": "sFAz6iMvWosfGPEfkF1iBjwdRGx5CZnDYKRcXj3jgvy1c83ENLkW75AWTzGPpFJpYfV9qwqwTWVFkQC4fYc3gm9",
  "key16": "2BQNBge7Mnoeg3fW7NSC8aPArGN7wGUY6SGDrSVrPmqkE5XcnzCMYcFc1Lgiah5P3GRfTXBK3vz97z9vXaAgtE7r",
  "key17": "3sBSe8yKagUQ8U9NdXo1Z7RNQBkazZDAKiEPUsA2pFuPNSSBo25rgyhzpK8G5jMxQNapCV1en5dxHvof8fYyhCY7",
  "key18": "5iS864UjXMQatbWTDhxhHun4NeJZipV1eQb1q2id7ob43yyjbMt2TEhd6tfXybCSKLefPouUkCSJkFmUmfZ5f5ro",
  "key19": "5xsr5ax9bS4CGP4b285v6aPJkyCnnGbiH7naJbfC5rpwnNGCBYobqSfqiqZR2FXMVQ8arv3ziLyooefAqeHfc7q",
  "key20": "WY1f85WA8SzGSF2Uq91gq2duRMxHtTpQtWDjE8FSaE4H3mF2DWm7XF8jYy9VbWmA8DQeAENyJLwLWJZTzqxcPSv",
  "key21": "5UsjzA1xvJEW2DTyNUBc5XwGK8KkZvvuF8r4UEiTg4C4mNY1goDwBXEH2XJMnaAAFmZM1JRHzZyMUUCtpj827XFY",
  "key22": "3sGugxSS4ftwfSDt4kN5nTBGqoCM1QBK96ksk5uhD1ixUS7xp6o2UKYrbc5L7uJtTx1eSMwZBp3XmSiHcJYLgqg5",
  "key23": "3hiUmHR3vjuNudQSTNpod4XwUBvwnXY5ooSmqsSxx1XkxT7uQU8iA1AjL8vzmB6Zxy85mLKL7sLgeAsCdR52X8F7",
  "key24": "xX12nRNb7e3zvHus9m23Mo5vptW8uDrjWK6TvzY1ufrXCYmLuUajRyvEJzKaH5uQedUJSvZCwCXRPZziQvLA9DH",
  "key25": "5UUqcdDaM7rs7HDXRbeQUrQ1X6m6TWoBdewkFpYY4jXyBsHokyts7yKSmAoZUXq9tnU3QCAhCjRYmCMMriVK4CNy",
  "key26": "4CR5FmgS7cfSQw96dqdQyYiQugFftX7CoDXaNuYFv5wAUYh4NXNjwHyEx61fSPmLVSTsF3K49WdcnqtJfYscW8yr",
  "key27": "4jLX8HJcMk5JDLKYV2rjFgQqd4QRz5ZVf6QfZgRRnaDYvEs6ozYMicWZsp7kvZramGUW4BXLHpa4hHzTVLdHsmvQ",
  "key28": "2neNpt5kXHCrg74USXGu5oeiVNmYhcCrd12swaLQQwZmaM7veV5HakUgKCaFeAvWLmySAAfMtt2m7auBvLBAjs17",
  "key29": "4oymqDiDQ7C1Hiurofr7V9GUPZj4KJWsAUm6Zt3cSnibEEjZfmKf6JFD6of6ZLYnssfkLJE1EhnR199KaSkhznMp",
  "key30": "4wk1NEQwfF81zTkfcjmcoSDc5Ko4dVkSDq9Pq2bmeE7N4fFya5LNQnS9jmKXytZPjXTvStVJ19mu9QfHFgwoFyZe",
  "key31": "Uite1rHNHr8xaDRKD4YUVVbScQ1etRmUUAyXw9axnb7VhArMPu4s1HGZ62Db6rNbaZdaHySaA8xFN1WHqDkPxtL",
  "key32": "2TRZeJ2xWfPG9KL2Vy7NZair3EfEMmk9j4QyfdpXwunrsX9iyiXFZ5LNXKA2uPqX4MLcS4daKdyqMb9C7AADU3kY"
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
