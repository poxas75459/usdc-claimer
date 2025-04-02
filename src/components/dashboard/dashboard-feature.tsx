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
    "zWrMUCZAQKtH6Smf3X6jyPqCoWotAo1jLd1TAsobVZZ6sFeLisTDmGpGAQrqsZgjJCmaaKkqavSnpYbgqJmzKw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kmk3Dj6h56Mp9edspa2QvctHk48MbDarCVPykaFP6egsLQ7CvTxS4uhqsRNp2g7SZ9JY29jPL7hng2m2ginG8DA",
  "key1": "49vtQXmBMNK5YDsLEvSu4dq2SkXoy9XTVSXvNUzpRQ2WoHgYxJiGj93wbafeLhrU8n7MUHrgwqQud1zWaBGTitbo",
  "key2": "578aLd7GzP3DVUtiPphsvbE8TJBwgLaftc8ygu9w5VyMpt7b3sXYkS9UCY5VrKvdrQ8HZCSKJD4UCKencnMD4my9",
  "key3": "TpxoLTvHSCWCJSmvvgTwcf7hoPPjpor2hVLiV2mcUVwsvAuiQnD8iFYk7WJnP7gGq6Lc2ksGSaF3zwr1MKxXKUj",
  "key4": "NcreHC8Vo8n4rpUgCyErW9QT7yh7zQLGxKVuBnf5YpAEVVELMHqXyBaWwL4Yx4EycgfuExj3HJx3f1yELTF7gDS",
  "key5": "5B54AB5L5nVFH7HYCPgTv9pHg2M72499jgsLnKHQXhF7KAut2PnxbTpuiE9YQuT8BY7vBe56jmE3TC2WyXgZkc5P",
  "key6": "3gFpryzaXcrvYGufvP1Gz2x3o4sZQGRPXKqAbKhSrX5fLyBVQtCmnFaTUFm25y1Hop3dBJqZDCVrYnB6SrL3nQ7b",
  "key7": "4d1Kg3gdSNP5gVDNTGMFBCdeWa1xcNYxnrRAHiuvdAEYCFwTsxZJAbJQqaDgP5SUtSvVwm9613j9e6qKNbWwrjYf",
  "key8": "m5iMRHw11wvjqTooQirqJzr3WwWTdZz8F96oz3H3H9uB1fFPgEVKwN3ysCSBPZGrmwTcv3n8enEvyfNAAjp7rFN",
  "key9": "4SPrTeYPJbaunJt3EK1Yfx3r5mMZaixy3v9G7H8kNFvm6G4NUdomKH8bWgt79AG8ZWjpuJZ3NGLENbxV9GVWnKRJ",
  "key10": "5QsCEUSoZpuXQhNoNhKfGzk8CNFKZJbPYHWNiHfCkZRbcoojCYAZL6PmewRfU28HxmpEFuWWivrVajQhS5dXs8mh",
  "key11": "yngKZZQxbwnbuoBDaJX7DDZMxdeboQh5nPUnuEZbpHp5q6jVAcRUmoZtzzjmrsZhSNZh6wzhpLKPKAL2kxT9z7z",
  "key12": "4kj8rsNpmqgpR4WgQpS6XM9wRK3bpHyS2Fbe4XLtQdWhThLtr5Yh7aguWW8ZXTafaYv4AHBc1S7JrxvtjMgA9G4S",
  "key13": "2eRG31d93nAJH1bbe68cKBtXDGTeheBdC51QfcjzKfzswV4DCXH1eRiYRjc1RyJ7h8jF9vCBkVND6zNf1bhHcBna",
  "key14": "2hF7575yTWc3Xw4G7tmE6fvpos7RQtb2RWdantg7RAXF7dGicFF9entNEFDrjWfExYP1TSrLdD2AXhc7RBCvH69x",
  "key15": "44Gf3wemy1UMRgvaX8DTHG7MWw5wFQGAtTXdEo5L8jV2JdJC9noMEYAj1o8SVTeKDTzndQ1v8N9CR2CrpyTk5u5J",
  "key16": "5GPxR76ZEZ6EdNXTvs9RadUhyaPWKHJQpwrAcc4Wa8YcwwzEBagHY5Bmx4RHjNsn9tHRzM56a3nRunwunsNw1VKr",
  "key17": "5zDbXbPgbQjrcPEnJWWUbegyd5NhHLjS8tqJKipd9vCFjEwmFQyfn8UmdFGsxSffbsk3qmjMvbjeGjQ1GwaqY1XW",
  "key18": "hXeYArvntj8cwBMKYMUxH1RiWQYXegw5EK4pLgpcLN8nctm2QA9EyH4ZMrSJQNWV4XTsscFwBYutQ6pJkbQtx1e",
  "key19": "5ndQMMUVSStZDq4sZ6kiMMnyB517nz1VkDBQXf2EJD4cPAhawhWqzUrnApfVijvd83jst53tjiJRfBxvhomBhWXL",
  "key20": "5phENm4pSYMFdPiz8C8DyKBB77pkjpQtTvsdYdWn7gTzG2QFATJmU3r8CzKqxbBmXK7YCLA4SzHAJt7S4rC48XYg",
  "key21": "3Nb9AieLQgcYHvjyNbjmpNvTCCxXX2SHfuouDhSeVyjmpMVZ3q6TrBKdZze9KKGGihTENc8EfZTNzAf8gtBznnwJ",
  "key22": "332PUDwNxJWGQG2mbmY8d9ZxEPrUWCh72cHReEpBPApKLk4RiqwN3pDPjyKmKhPC5Bg9BaFLg1fkJhuVs99tpoZN",
  "key23": "5o6EZkSmEWXZxmUZB9KFtc7kkZorQCLkMMPmCMrH6WEfQ7rTLRQSUXSBQEGLHCe913aLwKjcDje4XUVyDAgzV6hh",
  "key24": "7u34FA5kSMWAKJJPkBqo7h6hq8MkkKxrv7pcgPkgB63ETnc1WbfoPpJ6FvqMjX6em5wsvdCtkNvdg54wcTJvauv"
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
