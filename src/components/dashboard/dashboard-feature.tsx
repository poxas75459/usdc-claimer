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
    "5K8zungNzdwk1Kg7LCMYQdYk694NPfF2ZVUtMJTx939aeqzqe3NPLeX4N7ZfFZRr7BrNmRgdvSL5AVtPmL9QUGz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E2wJwjntpxunjmpMYbE66LefdMmniu1bjnf2YhcfzQb98g8NLrdAa6VJpv45XaBxrJuJ5TePdeRQCmRpq7nWr84",
  "key1": "gexRWLSXXiDwSiwXTZCLmvJmWiZvcRxWyjUz49BNbLT3H9mTkTfxBpYYBoaAQNH496jWCSXTFbhaSHL3gTsD5ZT",
  "key2": "QqhY5XVA5kycnEtrx2uFtsBDiYULxqFtJzD5wXVK2KXNDFVBrSSbGHNpbXhWZEN5qfC6LzzMPB4XYtu2hBgvV5F",
  "key3": "GpMTiKLLivkdRn5mMNhvdAszWqvvfGkcbnwBzLT2JLVXbbg8sez8xnvN2sxu2xjH7CVegfgG46kG5a2XAh3sTPe",
  "key4": "4NE9c2m13YDkY5y5iRCzi6oZuoP7Tan383GF7KwZsZ4YgPoutv4WsN8La2cQehi5YgESgEGmntsS7qf4QyaeKZcw",
  "key5": "2f2w2FQhfpnbh74fVzsuLdsbhDo1mYfFfjBuyqoUCqySHVDbg6MvdsCKk4Fj4h3L63Zj1mYgdFHUwBfU3GqKopXv",
  "key6": "quACwrGP7JQMyaKsxkjw5EX14PabcyGnUqr5AkmiHLvQFQ2W1A27aWbDnEGBqLPRfComubox3HN3vbesKYMEHBJ",
  "key7": "anrAEJnU2X8ooLbB28e52swCoorSeZ5G78tAymd7oTzuUtrYqauqvTomMhRFnoqyxYbFP9JbRv3akJXaNYuuxXU",
  "key8": "3ciWETpJxV2KgRH5rC2r25Gcnw4iT6erEhNveGyBUWtqfyQcKMqxcArmnzS8wFd6ChAFdwaj9JBKRA7RWHQFfaQt",
  "key9": "5kSY81yZBEqCEjzoXvzuvUV6c6QUgj9YRctzTD9m5uPWKWeJ4f5qDZRUyMuFVEcq6KPb3zsWJa1WDpMkx8BrLa8Q",
  "key10": "3zm1v3tett88YmHjMLh5VPdqrfsd6wqwnfbzW3qWoHiQeGmigaS3SKFhuSGb1cGPBvmXnHgkAh2E8rnpBmFsGgRG",
  "key11": "4DcXrwGoUncHgL5E3jt73EPHNPN9QipuuLiG3Fjo1GdxRqEsmRXCKzGN5zYASW3t5iHKUuKWdgZ2hsqfPPBdHkFG",
  "key12": "4nVmYhc7x39KYQB28sJoeKT9dFmcQSXbx4vRcaXtvqm77jeZVdWDABdtdC83atbeTsFp6izYtzgqMyCjSzufnaZs",
  "key13": "5bsngARqKBcNSisQTWsGCjwLq4Q3w3Kod8V1onG5BX365ZYK4BB8jfaw2vypJGBfKbJ1vkgxp385zyLPB9CMhsGS",
  "key14": "H743NZViFJuhcyEB7dvUtYHxMPbCEpgGiiyAraxgrP19bwoRg3L4gJeduktueJWLYs5aX5261NxDgNZN5Tpzb5d",
  "key15": "4h55JqYHMncdzPCoKBf4ocJh7WHb3ajfrjQa83VkwWCk1hcxn9S4bcgZ8txDeowQf1JxeeNBF3WC3zMa6SRHReVY",
  "key16": "5ZKQAhqvQjbSdCKZ2H6AQBe2q6Upxx3FBr9HmAQsESdXs3zf8nypLsE7AWbQU9UeAcfQSHQov8hTWMZrF2uAYnrW",
  "key17": "21WXSzV5hvCH1kXngtTVjXxLbMyeCKfMF4vjZPDRcKmfCiefJRxZLhemRGgK7NEFV85rTCc6aeDdX4PFk2eg9UFy",
  "key18": "5yH4k5spT3HrXRMRfUtMJztSSZZ6rCGetAqdM34ikwRuw7fQo3sGZhqR1zQP2bCYyUxym2cnmzUX73eg3EafDApy",
  "key19": "2SKx4CpwoVd5pi95epQQesapzhymJEdQwcwzbKDfXSR3BfYsvHwbAhV6HY6ngbpJCmnJCq4GAgeFRgaaeEg37tss",
  "key20": "5S9KNJZatKSCEQTrPW1a31GX4kRBeKYUiDvwSR5mfvyCTKY4nHvYoBxCRvNXNcbtAY6vSJvPmLN4HirFMhBYhZ4A",
  "key21": "64eu4D9wVsnRJMLnunK5LtGFZGaQGKnN8ua1eTvK7fiPrSdfXyDNqeXgpUjgzz6pR2nZQZASe8BzpB4W2KaJdpcH",
  "key22": "4C3dgUpKoZGxttoqyTRJBkX1Rx2HjQP4GUkGir64zWyN7YGXkbX9b5fBHQJf7s1VHeX9Mqe8e7YfhKGBNcMA8mEZ",
  "key23": "46ECL5LiXefsgAY9WozHW2vXoyfwmFCoJVYuZ6WgkDC3Za7gzBDM1iDpKSUkHX6h9nLqhzf1m4Wn6vg1wojzJzjE",
  "key24": "xcqXe4xubiPcPrpi3xeMrsb8s68AamTzuasfYQTqgLjNFiYZ8GzLqYzsjceUwcGJxuAqrBQCXt1RFDcoXDjGmpW",
  "key25": "3CwQHFfUrWmEKrLkRfrzJ5kNHBrG6psuExpQcHK77DEL9uYLzPJtuzejANBufoVq2Hw2TmXuTSXx7RGPkmRF3TwA",
  "key26": "5PSFvqJrLMzynLt3ics3S9jpyXhcN6gLdQNKX2waT5b4JC3VSh4Tq54GVwYnGossgyjK9VftvoMF57WPLJtEPBCG",
  "key27": "23CPzYmwXGykLsXMepbrcwVPuPXfhEJod7bdYQiXVH6vZahaBQC5VDdnzPNMqv1MSvTwik6tzBSuiM9SQqNBJFQQ",
  "key28": "5mNFr8nzQBUdbAs1B2nTcaqKLArJuj82erdkgwRKPV81Xqqr2kFrM1mCwF6F2AFLQQo8BhCnKQqMEnai85JL3MiT",
  "key29": "Hr1HngCrofTt1eUi8ZYjwjbe4WSXWEsYVgpoQuCjsFmk8G288m9nh5tzLieKJnAZRTLGomvuGP5g4vEPk1ELCzc",
  "key30": "4VmJwkyMQRFRTG9bfFYKZpiDPTaZW4uaWF3VnmC5gVNqR9sSKwFVX8r4Sarkh9iTwSYr9zhsthZtA7EJ3QEJXoLy",
  "key31": "34REt91P6SBa4rtFXi5871HSwi1zVeooCCfsAa7gKVhQJoi1AY9zu23eceS6UEPYPBnpekWQkHZTzwhkTsAY5fNp"
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
