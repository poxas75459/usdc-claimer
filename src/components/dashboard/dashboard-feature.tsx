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
    "6TB9WUukXa8gEFg8hxR5fpzZCXe3bpdfNSYQdFqDGqTGSDq9TWE8nJm7PYqjwfCdhNpbU6Hy98CpncfZoAwywW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JNxHg5u8bGwAiktxRMuhUpQyKRwmyt4fLqAEFTcRNu3AuHvUXTGb3RUc12hcxdaRUcXJTqmrU9jzpMhMobtmeX",
  "key1": "5QhaCpypaYahytX4cQj8Laj3hm7BNBR8Rw14qjeunQJA9sxcYdjHsTSh2iioPr9noBWeV5rhLz36bHERNAr7LDqo",
  "key2": "55Enap3xqvxjzdQG4SkCa4ZgeKTWTymPtDH8pW437qsUvR8k293Q59qhhdvudBJAnZehhY5GPxwPmJi6Q1uLRHoS",
  "key3": "3gvtMoASPEJScVazfYbRqytzLRbQDFENS9xxcHK3C6QTaUd1beD4rg7WrheNTMw4gV9ZFVC2nwoW88zaQVmtVxWT",
  "key4": "5thaHqvX2wj8RRfo9HxEsF2zNFNLyBUTDZ8putBJLPBtyCYy8QBv6h4Ac8HsWTWTvWeXgUwMRHcSAyZheQd2imHr",
  "key5": "3t7G3L9Sy4Dh3m32CrM4sTpTmWDEhiWpVupnMwiaTwXFVAAhzBidMEQFRHPFGMfSmYdJpucW89aDErWPreNgqMhZ",
  "key6": "2RrSBPUnU3QpFcfd8WVHKPEMEpLg8FtTdQDy2Ly7Mia4rZ6Bz9EToMB1e3Bce5UaP4RJBzrMXsLR5VrofX4ccCyg",
  "key7": "BxfC3HzFUHtHuMzH6UXHNbgW53JcNJLfrfsUAom71FbdSiC3yQgH1qoARYaQK67gAG7ZcZeCaKT3Ysqsg6aTTBi",
  "key8": "51LVYxyrVSCh6nkSP858nGHhLDSf4HmPt29Y5hcqXhNiRTVukg4DQpShY5quBBpvea7tZ4W68uvNUBTh72Qn8ShN",
  "key9": "3JKbBbmy7Bun9TwUJKaCkM3MQLveYg2GCT8jx5RutMT3tPNcg8pjTFt1kKQfScuo1zjUHMyZSAGXuFV37wb3o7Ce",
  "key10": "wKs2D1m3ibhbDd9mbStgoFgJmfEDt7kWaJZ7ibqrbnQvbeQBYsjupBmYUqL5irTr85y5k4GhL5As98rpFkMix8H",
  "key11": "5zNBUxi1nJ34xB5KQ798X3CuqZSEQmtL5VJ5o4Vo8h4AFSwT9KEqSRmF6tXEzuAGyBHzgQtd9hjWbSPW2s64vnkD",
  "key12": "vVq791M1QPT7pdvfkuteiiNq62bW4swvwMUX5pztUbV1bVHZ4euDWfJufTubEx3pUrgy7qygJ6TDLiS5xhVukhG",
  "key13": "3XLaxTqGbcqkTWbVVt9dAL4u7KYigWegRX51P5W6dwRfTX6UqUmcqyStje1YE3puHBoxA9U6tRsgyY4UJtU2ZNRK",
  "key14": "4XzyCubbt5u4nrn6U9bYLXBRcXqW3B6ZGFXVtANZjpRKxCsDL4DgXt2DACwwGGHo1xRMJGKiX5PdbyPUidM5bzaz",
  "key15": "5yG61WTJmVdwYUkUNd6sVFpW3Xd9ZbZJvwkFitx1Ezpe3Q76WCGLpBuSKVjtBv5HCq6mqbTqEtaQFTcsjzKgEgwx",
  "key16": "3JuwUTQr2Q4btjreSb9UqY73wixYYk8816EiYScPSxkdmdMngrfenbGAqXzW8WBSF4tXM1Vnw4VSZgxPYiTCQrsW",
  "key17": "2cEja3eAAubDR3BRKENEZg7RFbDMLhiS9rFEgtB9BHfUFvnfBFruhxsJjJnB7SnDr8V3iZuhrUG8cGvowepkPkmq",
  "key18": "5Y3WNkWLNsA1vMPam8Vn5pnMCodbPTV21LZUikY4nsV34yNcumoTMmubD9W5tRzTgAq1j6zZMUdHKNGy1nQCvGYK",
  "key19": "2Q5csaQ22AmmsXxPwrmHPsRidNrxreAwuj9jEBaqH5gV9bijqxjN8R2R88CyqAUmhNadeEtucHoSaGSPxjKSJbEP",
  "key20": "2VBhLhN1LqdSMJup8LX9Fh7R9YoaszfP8b8BVJadoxiPtpHCHE6xdgBGSE8JeNp4qHH1oE9h3e8Rgvkv4pwmmu7D",
  "key21": "5CX3BaCTDhYhEkrQwtSKM1dy33rqJs6qA6jqvnadjktpT5FCmFwbwFA5HfLEYyVBuNstiNVqJ1xYLVLiNfDUoZT6",
  "key22": "3uwfQAujXrvFayzsXHxZd2ufNDqn5qdJANTf4YwRpk7svT9uxpJdDHkwbUdhV7eN6LNmP4rW5oTQEW8fXPr8GGXQ",
  "key23": "bMGS57rdfFb5z61E35QMxEpUNZiXC4HV2rc82hBmVtrjbVg8SoVnFVYH8vy55jx6q3DeSzJ5K6FyRLXPZzTi7wp",
  "key24": "2i8vx9jAAEvHWSUE4yjusmTNcmctGjjfGtt4w41qYy2ZAhQZV2uN1TfZPeRqc4GWxTsmSNLraozxV6nKLU7Lx5V6",
  "key25": "5HJfMuJP8ikHi8Ab6fG87yhMEDiC4sMidPBjnZqc1sx8TGpHLwPGX9m6Y8eHgjR4cDcSM5C6xdEMaUJgKXH4qrQL",
  "key26": "2xQt16LotX2RYrgDED6i3pkFytPXzg5CgLn3bZfgNBwHxmLP5TAXpRGeSbMNiUiMh8BTnRpqVVyuFAigMr7oSAVQ",
  "key27": "2SW5Yf7NkzrkPqTLrRN3HNTFRyuZXJXbcVwjdy8H4SbjrafggpSKDob2NJxLXg6dFySmwVAWub8KdPw6E7Qmxwc8",
  "key28": "Fh7i1MjUYHNC54EXP5Rmzj33efegkdGUVLeEWJBEeeD9yLShqViynYwTaQyEsokSMniPXUPqALPhoyBgiqYzhNX",
  "key29": "2Jc14bhwB9EzZbBka58daf2RgaieqdwCM4nLrfKk2gy4en9YR41pkLfTrBNUgZXaC7eZJxaAPKhfWXu4CRLV1xdE",
  "key30": "61u89YD9p5YB7kLnBcLRzDT6xyAqq3Uvpror5XwXGT4MRBugiQ8ttN6ZgzABfNsLP5FiiF3i9Diu1JgBAqu16Jiy",
  "key31": "4aGAQYNLi7jAUjadieN5XZj1fpgfStBcZVymtcT68ebFMLR1WeVRRdFhkpvFbubcdw89qJu8o2v71sJdFsCXHcBh"
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
