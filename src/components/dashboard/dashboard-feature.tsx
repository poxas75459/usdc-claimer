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
    "4ZhYcxBZ3MPunWZgPH94QUZGAUJ3eyNCbJcbSZghzeQmoPmZfCaxtrLQow2UfgkXon96hhptwZAMQbtKoMGpNp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2sqkPCxEGvLjLdNZV5pHkvzQVp6tBMrFZR5r2bUdEvdJMV2rhLnsN48NKaLLPSk5d6K3Yj7LFD4zR9m1cRS6F1",
  "key1": "2m8RYSwkpZedHhrdbnewM8DoRo4VVBxfmvX6D9JT4zaq9jZ7h85QQBwDr3ZVwyHJhWzPHJM1DnzfCPooCdtaaYLp",
  "key2": "5oaEJRXz89pzPQPrtoWPpjAqP9pvQvX7J7vEDK3dSNo1eL4MwBbokkXPjoaGymXBS7PUSGxs7G6z7pDuQDVRMcgb",
  "key3": "4igPreBMfHJviXoQwWUiUCLmo8npPNgZDK96tkS8TrTegaLLQCGGfBwzMp8EjTBnw7zBJF7jBJahwBVZ3xTFjbNu",
  "key4": "3SQSmuGxKb9R8RuajynBQCFZ79HWhd8QcYLpNCV8zyHkvYFtoQr7aFY1KdZf66jmbU2cvQuetA6d2YmbAHYueCRx",
  "key5": "31h7gEkTBXXRQ4WaTeDg4zVdUw4R6JA3Adex8QEGRpYjvDAq8oJyjfq2qvHJXCkEUYGrmLWyxAEZudFmJhAZJopE",
  "key6": "3QteQzL4cRbRiwBNpgt7VGr2fFmpP2odNekuFCRR6bnBo69uyTbk8vAd1uc33BmbK3U3MrhJsiCrmzzdgXPSLhba",
  "key7": "uSLoWhtCm8gtdyoazxXg78mrMYS5XSuRxJd3XvPqBWQhcP2yV5Aep1K3AgLuy7jcXbpdUqGCA5tJ7VqUw9P7pGs",
  "key8": "uA2cMVNNxnrbgn1PP5uBtHGPHLH9yT3KYNrbYaq2WicGFGgJKhKCGAZXnozB3mcBRjEqwkiDH56heCNJHVfbbd8",
  "key9": "1vpEhhQ2BeHzkEKy1srBsUGEUQgvzmTePrfpBUEh2Rzrx8jaUPMDpKM2QNcYGWWFvsQQns4q3D7c8bwMEsknec5",
  "key10": "2hqgp6tPisgQboagLVyX8C8iRcXmbp88yWkPAgYucdeZSJrwRfa4c1iEfPy7iN7gYn1gL3yb5em5RdMQxHfqZiom",
  "key11": "4sKCoboKjusH8KoiJgtk25HUF75jVgxk2XerpsL6GotBPqLYdZyJpabug6tgD6xQDELff2oQkjmW231sANwVTkPe",
  "key12": "5pMwWQNVsvTum5Q9hhxEz884F9PMwx1WRbgv8oN2tHZtKj3GsibQXboD5YD4aGnG24SXfBkyY4f9ax4JnRmm14jW",
  "key13": "5nuwAd1B3MfNmbDrgs6iumK9UNRiUTHzFTRqpL5gMTwWpoTsCXLws8uw45urtY9UAE5TGQfLiZgZj2fjw6ehPiPC",
  "key14": "29LfNRmSjvJcoReCL6xoYu9fYB1dCGe5tCe2qCAXbXCnD55pg5zz4gvU4H298d5aFRRNdVvEeH3Mk52GnTcZoTdu",
  "key15": "4S5Lu4Wv9PZFcVWLdecTntX5xRuXygWoAD6WrtoxAeBur6DGpdWSe8zsGrwG6zqbpSWqvBFsVVkFyB3ahb2T2Do2",
  "key16": "EftM75MR8ibCZmFhwwaxBRPzuPjYq3QQX6Km5xzDDPWTMPQjde32xSy9rrPHuDWzDAcFmm53SCEacH1SAVkYkpb",
  "key17": "3gY57Z8s6DRYdXEW7QHfixzsyoFePbv3fU8qTkBEQGgo7mUcF52PgoC95YJEsDL6GNmDBMxbcpCzYehqJLUYk2BP",
  "key18": "3HqvxSmQQnSrGstA6NPHfQJrwzhjYHmgDoogoDyJQD7WZawJHwfZnYhjZydwJiM48GRxUQKA9xkuhxxcqC98JZ3s",
  "key19": "283MqdEiWK4a1VrEAzz3ddv3L5XuvXT1Dv2ea1WrZdJ17WmQpzetHwm39SRboPwuWWAnzh8fP7h9xV67Uz7DiwGx",
  "key20": "5TifWvp4zsxuB9UhjLRMQp4nBj7ef48vruuw2pX1dpNgUMxPWv293kVLYSYQvNDePf8q5vZxqXMBzYNDGFib1Wy2",
  "key21": "2o3ey1M2M79t4PuUdXuSCyZt7ypShNUNqWYyro9raaP5N7obMo5WUbL52bcDA4qnipX8hoimb4NoEfTLxJ1LrkAV",
  "key22": "ZUWTBFQzpwev7rxcd5qTfLEq5wrbY6Zc19yoz5dxiuXr9xPy6ndnbm1ZhzjNXmoQX39Uat4RRJDDpjfbgxe4fxc",
  "key23": "5qXg348GuLUwK8CJks3jriWuKWDJvuxG2akFvGTiXMVBFcc4bwBUYHHNUW8txjsm3EiUvgi1WBLysmgTQ78p2HN6",
  "key24": "3uvGG4EJmN34NXvHT9bBd4xEDEjj4eJqTaXsa7mHhvT7oKaCwnsBJ3d6mDwdcsgXzhisaTjYFRTaEPQZ8MmRmWRJ",
  "key25": "2SzD94Q8ZbyvNCBPvVba2QrVCfYE942P7E77ewLk2Ta1UyhcG1yjmQ5exE2o332PWwGwkAGqjp3B1CEKU2JK3fb4",
  "key26": "51nHtCr8G3mVCL8vaG6ZJrgLCE8qCc3bhLkHvbGcAQwMjXPFS3W4C3qvX8GPUy5GSriBUAo95DBdKXueo8e9qaix",
  "key27": "4jqmqc64dUaBvmcSSGkix8WJEEsy87xJ85BrcyEfLRFVzia8AyhthtdSs7Ek1JXDFvRfjqX6pxJy4SPh2DhDpdQ",
  "key28": "PNvQ9UccdBjUextDtyT9taP7pRVMbSRkkhuMWjV7BLdQTj4YBa5Ut25L3dbV7g6y7SfXDjdv71EnZnumfX7gGfU",
  "key29": "3t7Qj4Uc7vM3PNRXVCJy9s2jYzpC9KiiDciBYVK2bvj25TpKJjmEQAWx2WvKvQHLM7bKpm2NaDip5AQJ6rmNPcPm",
  "key30": "3oV4gTvn9JzpQeBm2NgjCtwWoAamzTsKotsZvNCuhgR7bU7WHmgWZB2oWxFfdJixS2A5EBK3eSwq4jBYWWKnrzHE",
  "key31": "8pzX7nyiK5bwyTLiws1kBMQNQERZJ6XYDkdrMdvkq1jAuUoUVCstm2mLeB3Zbussx1CQSxbnHpaLrUdJg7pr9nT",
  "key32": "W1YgfwhA64zGqm5pwZiqAJCYftLwWASphzcajAcUuMPPa28CH4gV1NA36ShLDfJhepTZZT7wYjaWJE8jPKjThRF",
  "key33": "4XbGH76bQduTgVfxbUcopAHmgR7Ufdu7VnCwWcJ3yDR3ejox2Yh5vmvsCwwuiNRsHQPA71QAuGor59fvcY6ZrVNh",
  "key34": "ing7Em1rpGpmbR4x55PFaxDitMQibS9utTpBSpLRcj1MB5ehFPPfnpf6aKxVG89Te9EHrATA9SqLiiz7EuUzZ5H",
  "key35": "2jf5fEiBRBcKaAodi47KSwcCaQyAc6oc55BpCVVw3BUmS9v6AWZAxbLjfTm5nmUDCQPnmNhr2XBWnbwq2WU5nans",
  "key36": "dA4h3nPyLF2snYktfmHiAkCM2S522188DdccRRRPFcRkNnqm1ahtJL72JRSPkzBXYmag5xF8njoqUM9nk1vvtpK",
  "key37": "3Sn95wHCGJVzqp5KockZwwKd4tCMu3JCgFxwDANWsERGedfosXtMTS3ud1omRejPQdscTA8GLxotU9btLiL97Ry3"
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
