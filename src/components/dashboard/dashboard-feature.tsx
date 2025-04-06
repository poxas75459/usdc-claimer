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
    "o1pM8kNFM3ogi8L2xQMBMs4vHcvzyuM55dsWY3vd7Cc5p63sRS4YQcRuSKAAM4Cta635ZCNTRwHj9PxQmJ3gJUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74o4BPmZ4QVz3szk3s3yCpKrvpG66ASWc1Pz4kpeQM8V7vKMmvdQBkeYHBbv7U2kNSbm4RPUGxYdr9vXSKKaKAW",
  "key1": "ajKCP1BkTmZKDhw4iRFbbHP6kfXsR4F7HsEZpfZngj7YiRt8fRVytZXr6RWwR11Qa1TinbGwSRbnhjsiUwMqvSu",
  "key2": "4nrJS4CkcnHFT523GSERLoCF4xGX4t1yyw427CpV94jW4E6yZDDgzsK3u1yXbShSvi3K3r8zfHqUbGnwjjk6uChb",
  "key3": "63tzqvsh3nSF7tfPdpVVBBhUfmpZRHT6E8zSKkKpgsZrbR5CUY1MyeUw8TZyYmFHzXcckXQ8snPYV4C8QXZEy2R5",
  "key4": "4KhgcxoBVmaz1dRhPgZrYzu733gupS7vpyDFvR7f8BUd1tRtdKKwtk1Tz4HU3PvdtCJLvvY2J27KJ9Gk2EgMpydn",
  "key5": "3ppSd18zT6g6U7FidHcQEijufp5bRiLEAtXWdvmhReHv9nAveiG4eSMzW9oGjVsxsDVGibCtsXAgGWJn6h7Z5j5p",
  "key6": "3Q3ocgkMPjrntTGMWwjxbgNjhn4oWE3HTkeLtCXChKKWXgg55fvk1q9xm2LfE5CGFC8aNuUxSh4xgfy9tVFbnnkm",
  "key7": "2cKLJPGeKsPZuKmKV36hz4Uv9BvLcT96QLv7MSet1n3jj88cVQ7uZrwpVSALdG6RbBmKxL96FsgfCXLtJevN9cMm",
  "key8": "53oZCT3A5e1sSuH22FVzYptEiAYe5LrtzrQKHcYjo1GgS5gZo7pZbti3mi7EaM2c2awmbdpZS37ygwaTZ9Et4WnM",
  "key9": "5F7zZnphKDHcq8dbT1qVfH5fy7dBFdUUpYTxZx6QhgEBnBD8f6eMGV9bcS2XHLX9y8uzfpkxLm1Q6qNBYs59cg2B",
  "key10": "2gVANoRcfKMGP4sHuTZUE3J5BQgqxPKGtko8U546TMTnXyRCr8DHSEFaYQQo54RvAHi1bNwzdYUKua6wA4SgpiLJ",
  "key11": "4EBFCY3PQzHVxMYKydGUyL9Xmnnt8ZC51NgnwC75cGZD2N5WwmDeKmb81mJmRFXGHEZ7xxQtEV5tRY1HwMkMmvKz",
  "key12": "3SUZs85x8CQvwNniymM9XpusYrD3woZdCSAtJFBfHBH2xaSH1JNa2pcrDkg1xBM7RXX8bTASTuAuyhJJTgf9P7px",
  "key13": "462y8Y54aBExGYp3xHKQsPisw5bbqqebL1dgNsYqQJkHPnEw9Rh5V4EfBpWkVMd1PP36iKtDxXKbYvRkprMeW8Ke",
  "key14": "2vWrSGoQ9gtbpWVaErCzp5uhcPEU1qrTRhYYf6wXJ1rZ9KW4jdben6Pe2dCBsCbPk2j1ysjgUzDr2T86cMYYCBwh",
  "key15": "4FwcJ2rkDP7LqANpjNQeUVCwcGpMaipNkg7HacQBGXjES2j3f6MMebSbiAgsgviMMCPQGwPBDARHCAfFR13wT19x",
  "key16": "9r2qMnBuaPZzzrTwRXvJfL9WJTAuBjqequihKFgTYkkJqsDBhs4GGA2T8F7wDvFF4S6b3M3eUZEGf4xZN94v4rr",
  "key17": "yoB3conoFSaUmU4LTCNMhiUaKT6GBBzSsDGkq3dmEdNnLRQRjezeQe3EY5YQSdyTMRBqR6PA6z2KgBzeqEBHf8G",
  "key18": "5ZJgYsTTYuimK8vqvGyJYrujzsS47ACk112hYsg3YbG5nm7Xm8i1XjXEg25XzJWoYXYYd2JUEvcn1TRmjdJ7vfSH",
  "key19": "51dBYDwYrDv7XeZ276dYv1qz9tdjcgeD4zcMiEXpWDKvrkj8iiUe8ETxRUs1ohjxoC4GSVTNcfUXj3vmrq6XEF2f",
  "key20": "3xmJrAjA9j3fB9yfcZSRWF3p8yeBXEptDMxmvCtLwVzMH9WFiyZzxV8FWY3NQj9R6rPbTyDfEcbgCpRVNSAS8bgE",
  "key21": "5BW9xhymJF1k1GB7gwF1sKzKFiFmpA7cm873AmUPZkiCSQyRxVWHRYsSWoa2wGE8aYhFN4o9pEJbqhKLHnsUTMZN",
  "key22": "5oGH1vn2EurSNUEcaHWwDuSTGRdGoEqyjrHRozhCRXBQaz8myA552vjmAdWupFdyR5ChzxQmbdjqN3vo1C2gwu1G",
  "key23": "5vftyEJ2dqtcdbVQGfcdqHUomWne65kuY7GrsgEMRZGtgwQfmNWQ8HH6u4r7rH9QNC5kPPghoxFfrJiyoKbqRoto",
  "key24": "PzW3KMAtj9sUQE6nDeBuGcFCm2oBN8NQqGwYwBYSsYrX2jPEWTH5RaB6kKZsbYMo41Z2W5LSVWnMAsLAZDFDZ5u",
  "key25": "2XEvrQGVEYbnNVn96Cv3XprSPcq6fUsBYkz64N75TCdqKnMopcc4xyc8QvJnqomqCqS9NqjxNkkrN52cnrKsEo42",
  "key26": "2D9KkqUNUe4ZB92SLYptwDLb8bKrKYaAirYtdQhsbDXU7RtobTZcHAFVFgKX6Azac4XSZuUVEjmoAG9BXwCkbzRn",
  "key27": "6FY1adQGAhNRzYjHMDVd4PbMVqJqGdVf4AJbHoSvNFhjsnnVbNXqLbuNTB7w8U9x2DX4XWvRePpXSDQtawXXYH8",
  "key28": "3efD8S7B1FjupoQZgEKmeRi6DFZbNCCLq6YSrhf6wqV4j6rp48rxTr2joPTzzq2ucAKQQpfkZSacwiVXSKZj9bdo",
  "key29": "2HUuucutTxHYVsibnGw7oTaVpepiWvPx7kebdriGLeiH3g1eKqqJbbbJFtzTje6FESZfPhgSxsJUNBL9u2cxeKBw",
  "key30": "5LLusAyhEHLZWFY86b3X46Wm9G9tABDMDDGQUf4oX4d6hMh9k77PPFw93LvbAmmgT3NmJp8c9hPTxXbdYrvTqmnA",
  "key31": "3gMn4TVzTjxavs2pHLUnoRFFb1DuiNKv8CvLc6cFJvBypQrJyvnVzqFg7Akv4e4mkT2339rwScFsB9tPux2W3Vp5",
  "key32": "3oKPDcWwN5E1FrmGfu8XpaHqpTXjxozaWW7YYoHjF7wS5rmLaM7DejdV8orctSTuviduPYLxiMqmis4eRBVXD8NC"
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
