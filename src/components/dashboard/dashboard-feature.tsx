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
    "5dRzC7UVCnr4wkzHqiCueqT4JPPrGZo2L3QkQBVZEBfT1HDDNcibcmStkDjdYgBLtLiGwTnU1ZXsC5oXr9tN1oTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CquPeDf9D4N8uF6wU3KUSp7rLDuf2QwZipbNowWoQUR3yCEUEUDifXNU2LwiijSDCpTqdHdCe5k7BNkrMSebQD6",
  "key1": "kGwoGrhcrKbRBs5pMzZoGiTF3EY6CwjzVYRQcWYTU7vbMVbhWfB2b5dEvMpJSWaVvoNe6VsJ2rRjF58DbxBrxPZ",
  "key2": "4n8r7dEi9iY1GRNdMSsGSioZMxWVJ6rnzX7aawgBPxqdbf9PX3Dhs2zQnUW3t4cwvLLwjPUHjYQqxUhSU7yE4T6w",
  "key3": "351dx8Fp6GQo2WQdxQzZjJg3d3ovZAg5SasxbsW9oS9nEGcC6Tj4UgY5Y8wKz57KfPG6mJJajYswcDHDuAmm3tQk",
  "key4": "39Z2JkWbz6WbfSykVF3mmHuSRs27MKhzAcfUdzWL4D72nfrSz2X1Dn2dp5frpKKpbZdHKwhKP7L7rFqmQDwp65iJ",
  "key5": "66C1LFmc9Q2HbPniYmswaiqfaWGuPjLGptFwVztmVk1nbhEPQUWbQS6FJRyzrn2GqUjDfNxTXMCserp3stk8cGMd",
  "key6": "5xvYry7jmfuj999ci4n3R1GUc9VYWrgERKUb7DUGd8zBK1QLtSmcEWRpduURyckiuTXkdqJVMMbCntvSjnBf6sy7",
  "key7": "Czpt1W9pdNL1uDdAhkQx6y2FpVuveGUqQ6HFJEe5TWUcpijowMRx6EdDYAnkwBsMXN7D8PdPa2v9yM82kM3xCbP",
  "key8": "3HbUvbv9qs2HMMPLHHNq4m2rTWMttvW7cYiAGQduPCtcJJAWGrPXZbBTVDNxMVLdj538efSedy6enz6NYpmE5sWt",
  "key9": "EiDYkTcvvwnn87uDNb1UiyBML4ZrDbJQTLEGmv4QU8fKXy5azDrga2KXPyYiJgyPdU1Age65e5JTjhcDJxiekMr",
  "key10": "tgNg3Xe84tmtAWcxR333oj8jUS73J8YyjZKawXb6suefaqLBVDA6C9Z8GtzUcrTZfZ9wCUntBq55XBkdUMmfsKU",
  "key11": "2qyy3SjH6pqSXEyrJaN1qZdicsUbSqk3mSfmqVcGKPcd2QwVtYohB1gtf35YK1DHbGJtmKqNa7Wk9deama4UexHe",
  "key12": "4vZmNtmf5HtXSCC5qShZG84c1SaxiyQfRvZ5b4T5MTwdkpiazwThGW5isugsZ2xKZWe6RRTfx8qouX4ps7XogCA8",
  "key13": "58A4ihvqVqV3mHmR4irhN7m5xjmX5KFa6SKoEvKsLLrys1GmWtma3NEG68Ao5b8MPtbi94MMrYNAyR4E2Q5ZhVbM",
  "key14": "2WVnj7uszSXhK8bXSmADzT8eJjHp8sbDHEuQF5exxU9S5by39w8GSjgA1uUydZP7gRg5yLXAzA5cgev5wUP4NJDS",
  "key15": "5QRNzSi4Hzt355AVT7WUb2pe1YFJAyCab3iacDPR5LvH3wBnLczfXXw8MBssdbfd1YtpA24rb948YfqzMLx4qkoz",
  "key16": "3SNScuMPUL6yaZ3UbKX1iH4PccnEexnmzgx7MFp6eppFdLdxrmyKBSLMghsEfL4Y4cKW9fR9cpjFf4fhbJ5n9sg6",
  "key17": "5cgCSHXj4MKfZMj6n7vVR7SoZpipVXfARZZ27zBTR4W765n1TZoEEme4NCfS3eaoPhiYBcBvPr7FXTkPgkcWCTdy",
  "key18": "4fZwpGM3MbgQotW6BxpHh4wwB6uyieaNtLVGqNaS9p96Y8c3uKBvik1ws8B3USFCbzvCDqGmJ9hhxU5WnScGE7QM",
  "key19": "kaRVJPsDTkh8ENHr1EEWqsx15EtHU356ubpZbquFKjhFPbFfHUGdD33SWQnHzBZa5GZDUUJ888fxRbHdV57XaTn",
  "key20": "2RqW7ZFGZjPDa3ptSueKR7SX4rHJwEV7XVnSBrpm5ALc5Db6ZUfWRBgFAV3MXzSoxkse5ZPHUC3QUZaLwb3GHc1z",
  "key21": "waNgFeQjwob5aJj6HMoq5GSDAe6k9L5zikKweTgaXpMLkak32VGXrfyBg9uJEUXwDjfBi4GVU1dt4KpMNBpFKeL",
  "key22": "5nRh4cszdfLd43cSexjZx8oXeHvSg9G4uRpEuN8yutRtWjrHuHf3PkBWKxrYAeg3Y8BCmr6DipJKrk3g6UNWAAGf",
  "key23": "4PD6DJYzgcwwBKijhAfpGFQ833sFKirZdTG4R2KNgsVkazGqvxQQemsMR7d89MoM2F3gn9UoYU63bQDijkxtC4wz",
  "key24": "5aXeLJqh2CFCos3XhikJ6tupR43T8Xbea9FSV528vnJKMsiN3y5TMXbFCgFQZuSsihAVUgNUSZhj2JxjdEXptSs5",
  "key25": "3mbB9sV4RqByoaLcwbyWFcYWAtHJ1fWjThSCcYLtmjpTf34Ruo4CTJHXotrVcTWUf3UnXFtdTFaHjehT4xQK7fk",
  "key26": "gN6rS2s4VFYta3f9GwUEeFUkkPPukqHa3PhxMrZETxSBu43b9oWMocJzyedUXqWNn3Kfz5FojE7E4C3uM7SbAGo",
  "key27": "2TNq3wPa4BFCG4xLacNCTifApR3oUBdQZEYZFrQDgMpegDRhEYejWzxBYCVysxjZMP7DWxqqTkR5dFgdvQdQQ3tb",
  "key28": "zZHV7Vs7V2vUnoDKcyWGTkXFs6Ga7p6ytGsYktLdaK5tNCc5reYhcvsTa7wusXodiSGocMxGDZQj6i4Gayz8gnp",
  "key29": "2H6HuWnTXmiVWg9pG72KGWjyGYHHAGND76wuUDsGgVqX2GKJn6pTa7hDpK9borGF4iMQ8ugiZxLZZMjG6PhH95MF",
  "key30": "pkeUPFVk7VKczCTuVccB41dP8Cn1TZngjteLD9yyQVA1qBWN1ku7JkesJQdRsx4bWfrgK2xrZ31PQ3vVu3h71hj",
  "key31": "2ej51CquarACWBz8s3BgW8McHDHpy5ubd9hi3UjtkJptS2K5o4WcjscugTZwKwejKK3cXQWd1hHJrAKA6wx7vN2"
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
