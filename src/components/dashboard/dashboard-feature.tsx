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
    "26i3uYJgPXpWpm1E2fHcnzAM2ZojmnSJ4hFxFiUK1mqTZghxsPpkHAFTKjQ1zRXxePUcxbdvBy9Appr9ndf96ZzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6eQnNyqoP2673gCrYv7cwUavcFZwC2nb9RVjidDBgcLNQgBCUwbB2kEye6VrfChwpVpGA8r8hEthtbQX3GRmEw",
  "key1": "3ywm2avxRDsJcH2wqzi6qFss73qigsL9qiNDRmMYLjpnY9q1wjh8LjWU4STEkktjaN92EztKr9UQcEHhSTMuupeW",
  "key2": "5DDx1FarmUbwPVH2NjGsv8dq9bBBv2NdVQcibATS2B1SBx8KX9yhAMdZGqHPWtp3S8WKSVALvNZWL2ERCA6PyEuS",
  "key3": "avoj7EytwEQFWKgckqm8SncjfdCRQw3CHmHzM5LKgb6LWyhWpLamF1V8ZmiU1J6UEo9imSXVQzipnqoGncw8tpi",
  "key4": "TPr97W3QmVxmCnDQfVAapj35csBdtGugvjTpid7P2YD1chizb8evQcejsqTt8K9gkSgHdiikGtGMUfRwAJjJ7Xb",
  "key5": "4YTBp3nty8DLDVcquQuPsXnr66W9vWGVAT2KpWbSk4KbJHDkfJ2v5ujFf2yAh4ydMPXPBkgoJ8jAsgoVpKhGKnby",
  "key6": "5uWmBSHdxMK21KLHFiwXT7kpJUV3xNnvZYXWuMpwWhv23u7wDEn7LLNTpAs3BKQjEKKpuahknxqvPVe2VE9ACspH",
  "key7": "4e1ioLd1QMbauVJfK9sYQ1XuWjYHJoMDC9MwMLUre4gyuqcEABRZfCMAhHVSruPZTVjK618QptMqQoeL2tCj3Egt",
  "key8": "wJPLqfRwVRTUqdxG36XGw58Yu43MDNpNgmugbnZUyDeUn9Fs1cePg1xc7YUxzYtUGd44cggPa8H6b6EeuaWe4WN",
  "key9": "2hZ7ZKCA7DhQhxsk3eHtSBFvdZmkLRUFx8Qb2tre7AM5cLuoe8Sc79Ugdb7Hpu4cRgbDyfp6WcmtmjUaWCdHj93H",
  "key10": "4AFkzhBmajiCsRkUS1ffMZhGabGxdPfZSZ65DQsdv3CisDy8UoJzJbxVpEAtTueucRa3qfo2HDmuYiRDfkVAjcr6",
  "key11": "44K3YdC3kev2o2kREtVChJ6MLhgi6HvFzyZAT5gTsT5hL5n6FKBhdqLif8YFMGSV42S3RmKpEiouRT9SfesTVfV2",
  "key12": "5kDKVgoDWFW27BZRBhZ61Apmd2mA62UFZFUKAMGbbFBg9wBgJRzqnY2aocBhNpKqapDDVtxTtRTCvGdXr7yGytUB",
  "key13": "4uvNZ1ET33pqXSx1SNN3Qsd6S7mYqHty7Cu3SusUwn4e63B5jvaxbxaZZJDzUGjQnVmcwZAJFDZvr2y334CA7wXt",
  "key14": "Xyenbbypp4GPjnqZTNcr5G54mFASMmZbKrBjKBSTZVyzLXEeDJKAhFjc1XxfsrSbRne3xNChPUusWiTWwu9eeC5",
  "key15": "igTmUeAfnhiGbydkDbMSmEB9GwpAzFNCQ34mJxzhxYHi6wZjQQU1kBfRdUwAYCbH2hs7RPL4PDvxwBNFFfwnhKy",
  "key16": "37ZEgPscAQiytxbUpY8SqHc6dhkSiPpuHgjxA4bWYEoM2LLhMNYQ7TotkrpRRiWvFy3Xid7tssoxzLm7rV5siZ3E",
  "key17": "4NHRGaTpoQB2BG7vPUwyCJoX8us9TQFzTHGzQPgMiYu2v67EeUvzfvmPrkCUrr8RzvX51trm5q9z15MQYAQcMCup",
  "key18": "2JE9ct2iCPHKGspzqJjMJQJiGBLo6VFGNqtnkTNGRcWUzpApY4sCSMNNpwUn9KZGXuroaQzTLqWtNe86pDhqXsUU",
  "key19": "3L1fYAQ6B7Z9PKVUkbgGDKFKqdZrwiP3fArJsJHxpud2aq9kAtwyLXFwMs1yJrqfpb87sVuUcfvRAJoEEwmPUNC1",
  "key20": "3JP37rmwJpUpyaLTQc7b1zSmLA6hG2pqT8wEkGQcTBVueh4J2RW7wrozXfGUfRHTu1QaqB5UdX88x9pB8wt5Gu3Q",
  "key21": "2i1C8E2uGLj3EFSzUVm6sEi4uMD9rbknEavhm1gi1auY9LzcgeJ7Ai7e9mdwa7yERtuobHtbLna7Xm8HpbPJjhEd",
  "key22": "UhcLYydNaJAKt4H5TrMZZ8TAFoUgvu5K4gxNaWBfx89H944o9DAnsa4wBJgVwThSvAj2aUVa3RhYYVYNAaPigse",
  "key23": "5ZqfR8VXjRrRZt8uRMiJDCM3gCq2TqL1XiYzDcT9xSgKZbBNNJfJnRTKp4LgaeHo2YanWwuuTWvUMETQX3rNGEk",
  "key24": "4VwU2uDyh3PPSXfgpCt89qHi9t9mtCx5BeBk2PhAJBKjdNcgLcbUaWRAqDdxCqjgwPnB5nWgCauJF7uSHVf2mhEx",
  "key25": "4wUDWuubkELuvUYBPA7XWKDHhqtDuWLfgccvHwrXVWYccCxuj5ofzNSkFCP6LSWTTtdnEgWBxFuZRPX8HVVwcoi1",
  "key26": "2r5psHDoHWdTqpckmq3f6nDwMA9qQ4umGq42pPbN8erZqVX83d3sFo9kwybifPYm2mbSincbgYWspjG7RseLAyyy",
  "key27": "5KXe2VvbaTi2F1WDtsT2NcRnS1jGreLqWMTFXURHWEoMqcSTPW68orktPswgUA3qjUD4HMePjnBamDBXcdTFM7nS",
  "key28": "dyScfWvLV6YVvuzNDEiTYJnt3MT1vUuEs5w7gjSed1McSh9D2MkEmQeVQ7GGWcVfm82Lx7bYtmkjDAE29xr3QK2"
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
