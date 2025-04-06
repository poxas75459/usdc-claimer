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
    "R6C6igFoYs6PMzhJ8PNQufPhTr4WHaDPLHmVFyQTeHVcN52j31CuyQRbG4JyGjh1KnX6DxEmrEXgR4dguGzCGMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHC2F7jXuETzhYVr36V2E8gpnX5UQ2eVgPeGw7dsQ4dTS44bLHpkbeWHvu9PVMyc16QGA1z2JbCTwq3t9umF3vN",
  "key1": "2mrg2pYD56qSwbCPEwbNdfRU8QJLoBm3dEuByqvp8hoKxAhrGVC5xz2FabbE91L2sM6bsZjHgdxnNWzs9iprJfKx",
  "key2": "4VhZnyYvcDGGqbRkHyeHxGHS7Pde4U1WXYFYNMu5KXnjzY9g7vR6Cpnr3MkFMQuVzb5BNezvpdu12gMHEZFUJvdb",
  "key3": "3VvtdRjg7xYR6fswtYBVYyQSgkhUpw4p6e3kSkZiFJzemVL5CvZHnCbAPsVU4WCf2aX4nvzQGjeRNd8t4P9xNTGR",
  "key4": "4MJ4VZSofjm4mwHd7TkHNx6QMgMTDG1UqdM4MTmdkdg1dMEY8N63aLBZVoydSGXeMJ8L5f4HfZ243ZpjGwJF6QfG",
  "key5": "i8Rc7TzRmQXxy6ESacCWkuiA42yM7k2PeQSPS6F3BRwezYXGKobDDaV4igC7CZbEbmYvqPq4AAiz5K7fKcjqbpq",
  "key6": "5k3K6ryfZvWUJJRHrYScusbHTYYiZDuccymzhipzeHA7mweLyXfxjjEbW9v9b1VLZrPZJKEH8a4FmwVCmNpurQWo",
  "key7": "42g3ERa8avJHFgiHbwdo8WaZDjVbru9xUP5CoxDTWUDFuceSojMfBBUhLG8PWaGQyUXeSKJMqJePiq6iWDMRzZs4",
  "key8": "2GZYLD2Xcd7swEpZV3NMkFdpWKzYBUxLqjfQTzrsJfAZRTzbadvF2ywrykBjm4Ub1VwZ5gkJfCWTcthpeRFKphTq",
  "key9": "2FgacP6RfkH2PjziJaGPsjs7hnBoxis54s8tyY2QWcmxb7E1EFPuom9it57iYRB9Bt12euc3iobSSRyBea96q3fh",
  "key10": "2Ptwng9GQ1nZvqaLJfF7rTTgiTXFbH4waXJP6wtx9jKJmaM9ooboUFrJv6ZqajVM7nGF5KET3c6gHJfzbViDXjCR",
  "key11": "2CwYMy4KCNBX5YVzWMezaDD5AtksHL2dd1oUXcjrfu99bSfJzvmJ81SoYnxM9v4kNqucmuW4BTX1yea5Wz6y5PkF",
  "key12": "5MHGZWYLxcdNx6GzUodDJKXiLoULjt7izv1sFJw4SRfCCCwAWD9RM2MBr3BzrGxWyoeAtTN3CJAuNh77Xu51vpFp",
  "key13": "5x3MXRoUCL5PtQJvNmVNpRedVBGnfH4XofxmUvooGyR2AtsQK3ZrPwcLtMd3i4cT2uKfnNWVLejqNdbERKqpgak1",
  "key14": "SfSvbMkCjp5ScqESe2tBhBbmJR5tfibVnzxENWA46JqqjWjL3U26odSGxJDhDxtqse5c1ZnrVJw31PpsZeaqEpx",
  "key15": "3RVCZAFSpFeLcTXiVGEGM33epDsXR1i4YL2PJ8YGAXuHNLC9QA88k6Ear2BKVVasPhza9AvXvT57tDZ2mDFkDGd",
  "key16": "4ekghkkUAMdwyJLvKJpByqmASiCU7dW36MMGc43gfxvT6CQFX1VmTokHirXjbiPeFdXHowXP2tUysYnX2NR7qoGb",
  "key17": "5HJTrNnccrsusDU3VExWsuTKGDetAxkavXYS54JBxFWj2Lq1wC26pAfxMxdnQaNwHohcKkqXCDP5MXq3qQASE7kP",
  "key18": "3REwzEhchuYVeDt6x9wsyd7ajWCiQJZKCmgEbDarVacN8pNR8WNndDdC94HSLJJEiQ8ikW89tBi4YE1HGGPaD7qg",
  "key19": "4dva1mnzKF9gKQmpMQmC37DiYSgPryBDictvxWj1XddJWAjYt6Hnvb1hNnkL6rxd18UNHFruubxkSRuS3847MPs2",
  "key20": "5fMMxsb8TAkgW3bENSLodow9dsXhN1ZwJsNYDJajam1mng33SemBP4w9sUHyVDEJ9XLH3VViKD9PbMMgt6jC71rj",
  "key21": "WFKBBZqf8K7AaEAPnKzpR8s5nHvDg9BQxD5RYdte35Yp4aogyESqerbgKweytYcvqkhCXxH23GJbetCkCM61TZA",
  "key22": "4uxNreG3HBHEgGX5cbZCXsjitBVoi6kaytZGftcvt9jUcXL7XVRWfXGr8zXLQcoEQ2Ra3bGDgzMXMifnmaBrKtTz",
  "key23": "2pEZdbbUqGFP5oN3ec1JM6fjGJWPx6XXAaPGSS4XFczVezKjTjUGYKngHiT99WHt4tXKzc4oV9c5wLvkEmeb9UPV",
  "key24": "aiVbTwSV8w5hNMraSMJ6DBecRWQ47gVRbKWQW9hKnCWwEk4r8QSZQGN4Fxe4ngZATV5BwVAruUQwYnio3ppL8Rv",
  "key25": "561oxgbXSzhTMeCDiQ6e67VnjUrrMk5CvpM1m1fP211bihnV4LGYgxi33KYqZbRswTTGgnwc9jrTofySBcoePiNm",
  "key26": "2eSmDCMRLNVa3LPWndyVapo5K1Ez11xjqHoYfeJLK5wqQRKedU8jizqoPqBPZbC1K5q7CGeZzshKQnENtyz3sspe",
  "key27": "4hNk8mXX7EeZVchMbuP52r3KMHTGbadQdVBHkm8R2d9XbJA5s5MNQf9t9WisKPBtr79XGSVg7v9XrSp72bEHpBxk",
  "key28": "8EqZePLExxAXaXTE7EgJB1decT1N2AeNqzSk42NgSJT52YsbBCLuphMUfua3vrGdB53vR1NQbVT1NowxHyg22cN",
  "key29": "3zXc85NsxvQ6zwobS4jj8za1Tx3ZMWpzeMfiEBdZxbhdkNb667cPAGBwQt8RDFkQsRSvDK9pS33MeMwn77kDgHfG",
  "key30": "4epYsyZWoZwYBsapnFWof2KmQuDEWUVDxh5tRaEtc5fcpTYRfQ9sBtdLM6W6Gb6iXmzPFf7mH6sBrrphQidGv1Zw",
  "key31": "5q3wwYN3y3PEWg6ACKwQ2S6KVtDjUxAXLhsQaMgmgV1YVF39Ahat4rCChNUUfpoLxtqN5PhTPuaqivaW8DLE5t6M",
  "key32": "3uc4gxXsJhWjQSD3HRrhPzcqKE9D3ivgX1fmADM7zTXVTvQVuFiCF96S2axHUw443tn4Z2EYL9AcRVpppViCcUhg",
  "key33": "2DjUPCAN82K1HkM3PeuHh5JQeTi5sBEeLgiMf6Yzsq6nXvLjpSe5pWefF4GgCLQTW9kEWw1wD59dVwPoa3wzMwGZ",
  "key34": "2jyHybH5PYqaz2kZWrNCMhEySKN7C1EpzjqaUkpdt6GmuwEonyaSJnHaXBXJzoCFfgtCQih3YY2nGfpW7YZEq3q6",
  "key35": "pcaevSM1Y8SvxZDQSnX5Q7vYBkBVvtqwq8VwCciMWNxcJubgLgCi1LLGLvwZjDnu4evJdtPS18u4uWnwcrQYwg7",
  "key36": "iJePZbpxgJJLXGybQZ4XXRHujUPzU7QdcMWJiqpzAyP4L3J6uTqVx6KqrRSNc618b24jvNaJc4qWBezbsWc2K8r",
  "key37": "4DcKZPDUm4xwb9JrFCx7P8uvyXSaNt7fEVFZWLwJp5osZBDPPZXbpZcCW1GY4d2XmsR9okdUKPGTWxicS1Lwjr54",
  "key38": "3t1s4YocDpCcuRiJBf5T5PyVKAFs2yEJiWx1asQSdUj71ZDWR3RGVkR7ru7bGUQ5o14rSe6Jxa2VMyctTag9kwzP",
  "key39": "2Xxwf6qM34De38zQ6Q4V2eyKxAus47vJaH5JC4HKudbsTJxYnPubTGh5Y2xd7FYABt7TFuPgcPzaEtEBfTXTNa4"
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
