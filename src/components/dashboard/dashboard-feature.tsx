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
    "E7gsHw58sXoimYkbuNsRLQWqRj8UD7EGzWt9hkkGchwnF2RZJkuXTmFrdS1ss2p3RBYQtVu5MnXAzRLbGu7cYQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w721sRzNbRPSkvaXmbmYBd8wrPpNky9fhW4QUBMEBoz8iMzExD8PnCc8QNjezy965GpK6uJzXah1GRd1Hq6nYJB",
  "key1": "54qeJoHNLv1mLzUtcPDopG47BgDamS7tz6o2E2V7JsY3oFeCsKo9Y3Jouw6YNosZfZRbUKHEv2TLGtrDZNhopy2w",
  "key2": "FUFxJQcTEtzpTYLk5ZSTyooKXiJgbrm58Uv1Hm68jbuCuMHHw4wyQ4hXXvosF43haocZ6oaRAup8j8TuixLQe9t",
  "key3": "48a84wKUxsAG7u36xaCmwA6KsPBHGnKtxqSQv6hUDgj5AcytJT78ztXDVBzDsGmLnWbw9d6TYYbjRGbGSiEB3w7N",
  "key4": "5DHF6hv2xyJgdv8w2WGSXyHBw567YtHsqhGotHCFKkxC8PQizowRKA1K5CufPRvSFoWJJYTDxpqAUSHSaYYGTZuZ",
  "key5": "5kkgPfUAVMSg8rHzfecUWWDNBvc1FVh51961CjswMp47KNyQosVUEeTY6aD9SC9a9Pu7UABdHFm6TCwfUhsUz1R8",
  "key6": "2Z77hgFJyz1dmdTGc9dLrbKKzhFHwB6kiAmpxMM4V3fpkTuNLHmSC9UNQBLAEe1rrjhRdECEqy5RYsjNuHB2svNH",
  "key7": "4Mr8wNgK2uTZd2WgNUXv38mFhtCo63YAvAQDUeyP8q4erxm45Ah2Umni4BBQRNxKk3ucjnpHaXXDLv5o2oLUHeRy",
  "key8": "42kSqTD8yD9kGEJ7j4AvDqM1EFNMwm251Aj7Lz8atW1YPUqtW81UgGajiLUWUzDLU3CNvG1cf2ZswooWcPJZr2DX",
  "key9": "4tyawsiTpjDYinhFbSz9cmuVMAZHbCotqGXqHM6mKLY8V83759Juysr1HAqWoF6tvTwBUNzEwdqfBKbxazzZdsNR",
  "key10": "w8AHcK2zZnB1c129gAL1B5e2qqcRXRcDeFimFhW7mSfpuReA1Sr5xYuBs3jQuWH8UUnXKoRaVkKjcGYbRxZmYss",
  "key11": "3Tvrw6Gp9AGuVTr8HjuzMPj7ywEjWCoHhtT6mUSDhL7czG6QqTmBrV27FDjiEGwHu3GSGFTepx7FsGJHAfuYw7AE",
  "key12": "3owdeVJ4aB1SZ1t9b57CdEQF8JdvecXieU9BYAnDdNa8yywrD3ZrRqRFkHZXVtnwWSubAz8chxGSYXV9bKHwFbLS",
  "key13": "31Xo5L6yaGMr9eWC7nGtuSKBxukZQGkwY4s4VZfFYgr6dyPv7mW5B2VzfDzddmA8mBk69VKVw8iTVSGUQ2EivWAS",
  "key14": "3Nu3nmAU1mu2iEwfhXHhJUNrVEg1GK263fHuQNFztfZG8z8eLztE4gssMg1Hh5XuzZJp9kjb9BNmqfV2bYQKjfRV",
  "key15": "2Ji4rzQur4sshUbeMBqebY8h6DviVyJe1xD6BzcDDMnPM6r4CWi7uqud12qqPjm2WBsnRBuzeMgQC5tDHwvoF1LY",
  "key16": "2rvw2XcypLBtFSB2YdYxDsM4deCHDQ8LQ6KHMxfqKf5Za92jmaArg3UxwyFtTnmoQm4cqtg286Vcw7CudTAyGCnS",
  "key17": "4oHEVCvQ384Uym3Uyf3BWbNtZQAgppXFGLn1qkftEzUDQtJbK2ZnBHX4er5X8ubWRTQ1xLs13HY4xLNKoqFH4woQ",
  "key18": "5g5Z4fCHziK1Z6hdijbyYokUoMUqR5Bezk9K9NCeY7EwsF9fpeUyrDNNpo1PffQQpicjSeeanQ5cfkWeRLorRhyh",
  "key19": "2VTPCW3Vxa4FjCc8NgjrRFmYFKBzKFz2ZYpnfJQdn9fefr61Tdh7UFv1hjQGBqChfxgt4aFik3bjvnhFNEU4HSwH",
  "key20": "2hgNjnXYwMLdwnUhGrPFokLrBTtKFCtDKSegJg2UeNoScBPWhrTRvtv6wjYQiru9CKCXDfK8H6rzq6ZYdVbdT2YS",
  "key21": "26H8WiPsP9knUNZ8ZJ8waVeD9nbpg1diNAg1kmPewcwKDHQ5m6Xribc9UUCU7sqDfAJMLFT6VEhkwRAePJg2uLBC",
  "key22": "25GjoRhBVst5GW4VRuySxHuoSGkxxCAvSUQucpAJcVCwA9rG7LJCYWwj8Rzv3ko8yLiei6KHfXcSbSeSfHSVMQZX",
  "key23": "42hTmuMUDyD37rvPPNWVhBdPCxBcy14RE3kDcJzP81r1ryz3h38Ehioba81H1zr5uttepxF5Ltjd35zLC16NFjW5",
  "key24": "3bDsVuzZzcdSpVbwMwQ6YMjLwPVVxReJuAfy8kDAETsvqBQCrfZd7BqKKRByyNsyKg4QUNxQhbz28sbLT16eZdnw",
  "key25": "5TJV5Q3KNk3LuVe6UmxEirjRjhZe7yJPUcuHxTLAvMJNXeZqWzsnJtwHDEM5ZqHGdSFK9gXA1iskaGydvMjEmRSK",
  "key26": "4dBSgeqqcsrJqDozxhtBXVEucXR46RCj24RhpyQEgWQLNLeAjJKNUYw9ULbkH8jb4vSfVfKB84DicvYV8CppkY5s"
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
