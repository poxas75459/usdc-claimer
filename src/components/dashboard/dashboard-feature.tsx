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
    "26hxH7WZTNefcZouriP4NXR9mnXaYx5BvyrE4theAuNsczXK6f3mdzGGuWYFUXVzjXQo5x9hspUEuMgKMgTTFRZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWQGAHfbHPFT2gE9Uegxh3krkBTLkf5pMW3W3L565R2jPrDq44V5P6rjCHMgbEA583LfXgUQUNVWTbtDxRDE8TQ",
  "key1": "3f5nT71RF77B2aPpXGMEH9t9GxsXhRqNm6s1KALQiW3xj5xNPe1YiYwv9DaXNcMVHZ15UsjEUn1qRbtWgSqRc6cm",
  "key2": "37WkRGJVuE4hFv8S4smN26NLeuukxLMdWRM51f3gR2UHeSbdqCcVD4xWMiAYm1sbqMrqHkFaTiXppKbXYYWHJQeo",
  "key3": "PiBmQECG3PPPmYS7CGszqkev8z6uyR6RrMvBwemEWnaG3WmjmZokMfhAefPXoUtnSX1raKBvpF6tpEZPtxPZ4Qh",
  "key4": "2UKQYRCFaJHqpVsMnimtcwwZTXifuKScqbZ6cKdKr5kSgoud2VYgSy3pY26DwoDp9EjYa4XGgXeDMpXtKxHUrT91",
  "key5": "jPpESg8SMh9ffAU8iZfxp3vBs5Nho3HLJJ6iWFoiPJCNRGXRzoiDCGeU5zZKWe77XT131Ln3NuFKB5bkagnFvA8",
  "key6": "57tzuUA7e3BWCBW7VxRXXUnrqi6wBeXGLm116QnhNERoSwPfe4n6Vpd6u5EENpsRfQVQ1pGJaDukbWwS2eKaLLqN",
  "key7": "2BGjX1LGUpYG5S5KXA6Sc1HEC3Yz1bhtMJgD6eTv6T9DnsPhW2mfK4snpyawfd2Px4GD56pdCE3YKLve9uPfAJza",
  "key8": "3QBo5Q9b37bqzy3LvvnYU85FTMuPWbuUGBjdTh2G2sYKwYo1BX8oQDuDnznNYDiYaNKjRJpNkp7sS8PAg21yXZDa",
  "key9": "4iw1aMvoXVYb9zhjyHAEfpEwy5WScmBomgM4pxjw7L5Ew3pE893tbAqy7csuPrFuBQVSc4Dchi1izfPVZt7zBSgT",
  "key10": "3YgtGodXg1ZrvAwxT6BKiABGiowsgK89NcoF1NpkJGxajCLC8rmr8b5maqrYyXDLCvCWpzXamrkbiibNWmSnppdR",
  "key11": "4TQmqTfQB4nc6uRsjWTcfZpn9QwoDX254oVWjGbDmbzVWpb4B75W8bWNjHCYrWBmmAwkDUZ7e8L1XSmXvFQUa53f",
  "key12": "jJFvsBHCkzMJHwsQt1GmhsUPFrfpws5eN3Xesjn9mDwYPrubnm2HgZqErbNxA6JeYSimuFuj4AAkPZhRHLNdwxb",
  "key13": "2escuUU1XVBqGKU9kxniDTJ7XAvxB72rFzaskzpQMcRBfU8JFDw5pCfAFo6rJnPEH3TyqtV3RRv43xRWi8744FdG",
  "key14": "211EdVrKpyUJXAr4afbcK9AdPePoWcT7m2dhkgAFmYGbdChgCcPYJM8deYmHFsUKXPB2y6dnEC7UVy7NJfYnmsWY",
  "key15": "5BPGoFh932CV3cQ6uuzyZcyBDNhNFShokpVJBKB9eg4ryS9BKzvNLQ1Byd3qzgjhz7Ms9xztF5tM2bFUR3yNq2pK",
  "key16": "5z17sW1KjpKtUGdLJ5GAxFNH2Mvwqfm4sGqaZPZAu2gH284QMtWYKn6NdPmx5zM4xqC74Tn87R7ewKAz5utiFy61",
  "key17": "2LDit4YAVWuBNqp192DEKZRZWPRbSfT13bzEruePhLQe2mTmb8ALsKVYEm5v57dHMW4KPKKe1ELpqxiRFUi5LGZM",
  "key18": "fSh7g67YLE36DshufhExyYf2KXEruT1EUsq3niNzbM9E9BJ2a5TYdTmwzZVgagdcBuYCKxd15w8NQT3mAyhekyU",
  "key19": "uzU9JYMYy6SERYSyBcQYRPXS3y1apy8ffEhujmytztt4tWrt2XF9PERySuKThcnwfXNHrKzGkDoXFayt8ecbwTG",
  "key20": "vU5rDDp9z1LPWKgvLstUJsyo8J7wotW15Bv2L47oUrboB81WLXwLL79PH8se2MH6d28YPAvX87E5c3UrC8a3tPg",
  "key21": "3GexzMhSGYpXzRHuaZ2q5ZZuJ4pUine1GwgC3vNv7PBzJxVtsSLBnjTURL8TsGpu7Y27cdFk9b6rNZjRjZtsQHap",
  "key22": "4vDCrBk7Bo9s9ymhVAHkcpKyMVrB3WwV6b2StXQvPFNfAZNVz4uN4dQGSVeWS5Cnq8nrekwJqRHXTubPjErs2ytm",
  "key23": "3qFHvo2B871JdF5qbQsjsTzPSy5gCNzVTwAZEdrXfH8fFXTWhJSMh3Qc7YbESUpb5kiVPpPr8mVN7HxyhanZrLUT",
  "key24": "2ThyYJdYqULASnu3D4KDNMbyy7ALcBrL8bcUsxU7ttcqHP3vy267A2yodAWnbHfbFCAiLUkFLzGVDfKGHNVgfabM",
  "key25": "433MX12x9BwLKaokDThtaQ848miFi8rU2oivwL3iQxewbA5F9xnsediRP29EnTY96ZsFem3CNT3DtNZXeq9zgHdB",
  "key26": "3tPMyT8T3H5vMZgcsgS54Pa4NdeiAnVLQ9fvrNjjkdkg3dVX3SxUkQWiUc4MPrQLXk1xhbgX4Ji4YhzgHtPHkw5M",
  "key27": "4KAqxW1V717R2x11nV7QKgpmPKSXNmSgZeAJvKG7hDS84b6nM5qCJqNtirZxi4b2c7viEqEZN4SVMSGEb7T1mstL",
  "key28": "2EDfnJRCgtmPmz2QhdB6h5QHkvmm8uUzsHDiAgHghVJhWNEpmDyWKDGk2QtjsmJJpemMEH3VQWcPqvBrWoewhNd8",
  "key29": "1ywnMiNtWNhrY55KSjDSUKjZV2BnCpax2YGc7dbhZZ4ijoDrbA4aXEiCqdiRiMyJW6KsZDYV9eCMoBxiGV3pCFH"
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
