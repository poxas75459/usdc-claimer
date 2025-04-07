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
    "4ucVoiEkxwFrirbMX6JzZQ7DiKo1HgzSUhbjrZAGdaqaRGZUuCx9LPdAXWD4eepsHqjUcbfCPVTK4ZShdTwkjehU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBqPXgEd4Uowmn97TGTtrVDakaJqWvMN4BHoXJyo1kGdHrSB5K8SYTUowvfx7aW23D7BqP36TvovfMwAMU7aaRb",
  "key1": "3Dm5FcZ9FGZYX94ta3t5LK3dgbUUaFfSVphwACk8nQxqkrAe1ripNPNbY2G3BLiBkRaLdKaH5yTtr5A9z1ndyfNo",
  "key2": "5UoKbkF6pJfK7JrVvi1fcFyHMRNokdL1q2kZG37EQ9jrYzGmXrkCEzWz1suBfW9nQxfTfpuRG6y1veEvZ7QG9ktw",
  "key3": "V5G7iGmbG1Kq3q6rRonP4V6K6wasCcoATDtKfeAaykejGM8fyE6Ub2DkGdF2yZR6ut9XXm5FsuD6kVTLfXHmwdD",
  "key4": "5YHV1soSNBKv4tdHrp3DzrE8Hr53KJZixKGPLxekBSeWVnc4eDVY9pDycskS6vdERbww3zdrBYanDwk5Bip9gwt8",
  "key5": "344GkeUGADBWfBzYQeaFpdwEGJuvT6P3L4ELUFkMMcp2qL8LrHdgvJiL9S48FC4osQfaCQECDHEmefJCoknXo5YX",
  "key6": "4zRP1Rn9raobD1mbJQtBHL9xyhpx1iXNFjDkrTM2yBiiU8qpbSRZLzrCr8xMn3xhtE1M2f9S6TYMXzj9MVy21yTK",
  "key7": "55MCMAtxAD9yefd1cotoXe3Vg1TvzNBRe6MEbDCGRSNj3fPhdN1jK7XfauDxT5sfxZQzPRPwk8wPFRjkfFK8X4Ae",
  "key8": "3oMiMDrdoun6wD1Fop5v6YnnJbJkTmDRVs4eZ62r1S9SkbmQgceMPKhCMFR9Nrf7TgCtcN2WTyqH7tvqGDvJ66KD",
  "key9": "2WsNMxPewmdRjs6Dcy12s1Wsm4jKKxNYy8YJMWpTCpVHWRjXjcNqvDNmCiBsHvEaBPofp6QVMbWYmp4AqNPThmwH",
  "key10": "4jQFDWXBoavcXT9Y9uEgAWy4xE5zoDjFfrKzP1MU7vTHZ7q7M7RVrjHdisKfirP3JicuZD8DUdu1fc5267HzzNB6",
  "key11": "2UPYWwzGn5k3UL1oo8oYrRis2DpJZqHER3hj6zPJ7EZnHxS6dfiVJPugG9B9P6JzQKSjkSR8PEZhax9sE7hSzomP",
  "key12": "4kzHW7LFNuDotUVoDQH56cFo6Y2vEsskJhUMFz3PX8BPmqLwPTctFXhb4mw7uTA3eyTCvK46TgPK8Yimyv6TRtCG",
  "key13": "22W48StfnT4KvYehoRztet729hd3kCMTAf2Bx1wnDKL6LCCEMrhAXFtgQuK2C9yr7qSQftwQXyY9Fn2x7qzSHNr6",
  "key14": "53PYfy9N1nQV3Fcp8nm7augfRUiU9B2SSFA5GBuEm8xVydgZDAGxpieRt82Twbwz6YsBnW2susHQuxaACevuFwU3",
  "key15": "hxU13AawFtnyLrf7tLsvPTkhFsFnLKyW5NTZGeTyo56w8dEb7BWwBD3CiFfYLgmTAqAhzJpEt44Xejhesydm48M",
  "key16": "2ug7DRRQBkwAoim2F1bCBP66S9SH2jduTNBUHMZhMzwbHLgYPy7P1JjdWrJHvLnZuS9HxMjMpLEZN1j568fPUET4",
  "key17": "2zLWySZuYXyNsJbr4ZA511h56sBx8AsQA7jBWmk6PiCbcWF9X6w4MuBajqqmrzVsV9HhDsqqhbHXpjAf6LU2kQrk",
  "key18": "PbjvgrD4NR6xzsQwBbHQN3TAUhwn1pPhtBXwpEhy4BUEPPjHzo9VLHC78QbxXqT7L396sCT4Yr1Nrv5eqdkTDY9",
  "key19": "4dtWSVASpsw7QDPdCY1MVjLsKvP5mfP9bTU5gvNzpUYdMfpD3UzXunMw81YQVbKoLjNGWJmyFtLWLZ1Bawad2kCw",
  "key20": "59BQVfiuBjxDA2qjAqqNC5q2skRdjNu8AYHxUCaD1q7ymKQ5xHM1qutgApTPHDjTmt6eevC5XVFTvAbCobXUNJtA",
  "key21": "3HihCHRbd1Dn3vwLB9zU9jfwbfonhBebRai5T4ZT88UukR1j4FpstRj5N7gkv8XHJ3VsXmY8cXPPSqrmerfBfVtM",
  "key22": "3QCGqPMLPftNbULrGPxLwzX1BvULJSQmKY1KksxGpx7sRMd4LzjTH5FHpoS5smVLUxWiKFF3sMHwDjxnsa9Tm6R1",
  "key23": "3c4FnoVcB8v9ksv3ZnGMB8mTpB5qgo9gveEQh8HeqAm2NBpTzzcw2g4yz9zdoG49RdyDng4pzyTcBoHWrLWjk9xP",
  "key24": "4fKkgkeCqoBe4mKWYXZS8znhS1ftZt1hMmLuaEm3cqwkFATSXSz2yy3uzuoGe4YeJTWvYc2WUGS5wJsw6DUs14KS",
  "key25": "TyQCZWT35TZgKFK4q8C1arkXzgKLXkCkY8CtfhM3GQxkQcSksZcYBTuzvjbt8kGcfzynMDiVnNJfvNxtZNscSJx",
  "key26": "3GDRNTishTjgpHCcHpDUbL73HuS3xHmzTezW8uKDvNqtcqibrzeG2rbnYDC1RhUjYXfK431eMtVeRj8tMN1ciWEv",
  "key27": "qMSvEN4w3eCgBHii28eBPrir7CdRLBDAbNE8PqeLGdb1Wi5HQa9FyKS3BVmBoAoVi8ZLWhejSe6fPrgEwj7vDxh",
  "key28": "4pdKB3sWk8GB9MsqrECk413FhH2WdWZgxX3pftLqZPXYdZnUQ3BEaQkZYYBWZhbhYW9Ha6AXady8bSyieRXW4RFv",
  "key29": "2hKum8f9vxrA8chb4xUwbNr676xtqjsSYGUeoqv1DGPv1hxXkgSq3zZEdg9a8stcaJiKF2E6S1nwBZQvtKdpF6kT",
  "key30": "4BTMchXfJbvWLgkLUAhpFtTzJKpT7woyXYpKmnz9ZLAbqBjAknP2STY96ECqfUNwn2wzTH4UAe1ZvcHPRccshuMi",
  "key31": "nqV7T9AGoZdL48Snvbhj7Qwh67EnsEZZ4Q8PLYPxHfDk6EZmFP7WzyFT4ifv2FqzqCXY63SPbyittPkaNYJsnLs",
  "key32": "5FiTRjHPfDV7hzxwn7CWWX4kFDbCWRFEuNGLHyGcuKntRq3wmp8iR1Wr8rgJMZ59QCAkwwAqh5Lm4m2z9ZpVKUoa",
  "key33": "4mbhEq1f4vUr18aNyVA8fy6UJPrCXtArkGpRT1RcczySgbphdrgGDX8LZZbZaaHFbTsPf9QsszzR1nFPgob1TB6Z",
  "key34": "4RUGBsJMgosfXa89yigNMoQkmmA9bQhpxnXEDJB8isxqQzA1Q7uSRdznmNoj4ndhNV2dyabKSxP6m9rMZiFETvNX"
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
