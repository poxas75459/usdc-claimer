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
    "2nnXZQcarrCskFrgTAsM8ZinsRw3Zpof1JZB28kejH7rhhwE8YCxpqixFnLXSWinwHe37YUBmiAB3onNNe7yHrhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7zDEvAPNreJwn3RoXj9DJTHrY55NzuRYSDCULrA7DCZiuYUSa67HfhyzYZU9GSscYHN8JsJHeuAhAQiXCoLUSc",
  "key1": "3HTAzrmqCvpyy55bnZc8LyVDL3ANaJxkh7tCv3aH3gttpREuT1T68SvsaVfc6XfNvBSup2G4Em7Xz6rXyGe7uLqs",
  "key2": "4nEYXxnTDcPt1TJSCpwLKcXst4ZN1yYusnvDqijPpUzdV6MPFxEwnRPk18rV9BZie87QYXAdYXTUQNezX7uRuGnt",
  "key3": "hNssdA1NffWCdsndUseAr7RjnoGdCG6KKE4qxRKxEvJy4dU7eFGG488kmmyN6dYSt4s3bezQeKCjMQTfE3War8T",
  "key4": "v1p4eTfxkBBrwGqYQVDd5G8SrRykQmVUApDAcLxTPNQ2CAXCmtMPu99x1wegWdmSxLZqQJkEwSm9RWQyZWqTaCx",
  "key5": "3tUKS24YqAJ4hYo91u3dNZR2x1bSUkrqvKxvxuG7XiwzTD1mFDWzsj25v6g5p6ihm2MeRgtd9maArTFnUXcnKmrb",
  "key6": "3me7bDoCS8Ziy4aP8tXLERtf3mfi4FEEFofuk54qH5MpBzVgAW9Bq1Yp2ds72zcuGVDrNNLk6xNdyVYr1M2eXvUV",
  "key7": "5vQnzyeKeEPFzngAAwKjvFpGXbmJsTPRH22WxGGkF448PPqiG9oqJxZrsJom2ExSh4NfM6hfGmV8uKm1o4ueZEPj",
  "key8": "VEUep3ijaupfuLLaAj5ACRWSQ5mdU3HrNqRWA3pSLtfkN73uaknnsVrGtmzC6KiUCy8D7mDpprW2NS2ophiX5KR",
  "key9": "25YU7xEogAruWF4wH5mP1ChieyoaKZKioyVtxjWAwP7eA6mmZaALBVzfT2wLGiuRaYjUJLmwJJ7E3GAXMTzC5Bf2",
  "key10": "2FK6tutESo8vcjiF2hXg47D6ueBjdT8ECiT1z6icVaTm5QwobBVXULo7hR14nV4Mcj3xBptZi2StXeXVH9TPsPie",
  "key11": "Smq7QLeRd531T9tU6ogLkoYuHnZHUtsVUFsX29sXQSX7z3kEU4MguHDntHGZUVw17dRzJNHvfo5q3adFUPoRfcK",
  "key12": "2vP1wuWUdmKM5e9oZ3z9xNHd3R4S7RW3s1Pn3EAvDpYhBB4vT6Hj2WK5oMnuPJ9Qt1N26dL73qLe799g4msBMzSM",
  "key13": "2S8WVrhe8Ssm6GEk9KQcxso2orkBRRwe8tSXpXRny7q54UxNJQkPVwJZLMZB77Qw3m2XjrjKGnm5Sa7zHhnit5jq",
  "key14": "2JwtpQgbHYN8ww231m59hFG7kV5ScxqTgXVkAkCLPBkrY7pLPiKFR2zdqR69pgcTJE43mbcj81o2ENqYM66Qd4P3",
  "key15": "2rQ1qaDmSPJKkZLzHK89xXRwqNZ3Y2vhfzPFSD5AEb7SLnT8rERCXzwb1TtrN8M8chXQsHjLEGUSeZ4fNKhVdeoA",
  "key16": "4shfKcDiaKnwXJNZqPLVFtsdkKrVFRhkhTYG2gamHBMYsWU5hejKB1prdP5AeH5XLXWfqJwi1osdgPM2RN4V3mEr",
  "key17": "4oJz3XiNmh7sPAaYajJnPTDEqEJm22qh5cTAN3e53TbrHUgeegu4pM5ACtkAPMT3SWZAmMxQHa1TvzajYnyjF1NK",
  "key18": "4Ku6DdTL5PQfcmSHGgzsUL6YdbBrpYEXbycfUiQ4m9difBPNyM1iM7wYzs4m5aUL6iAjmDnC9jUFuADyxM2inGY4",
  "key19": "4Pcppho6QjtkpsxVV8eJWciP1X1QvfzbG7yE8JQ25tHBVx9SCagp4yuzm3taiqYXFEqK1F47eEnpFv4iiMwLFcuF",
  "key20": "3rhoFnuopMkKtvYCma1My43x9d9WMvLXNzDrPE1WQMu6YQfViD3HbTyDEzaYjDxRqUMbz8Wf8ANv9bY7DT2J3VMX",
  "key21": "3Jq3FWqhB4d5HpDCYwB7k7bhQYamGUwgsoTfdQD5eobFXg6M2oHsNWALJm3U2yybQ8ugwo4G1ucKE1VWCLBiYwLP",
  "key22": "5vpB1w5muLE3o7iN1agB8CYVB1n9z2uQ18QZA1LerbSBbNboJKiM1tLCUU7RTRzzGmvypkfXr1q65ooPqrLFyhEY",
  "key23": "44ZeroAHzmsdDg8MxopkarxZkwu3pnygNoDJoS2hmJFAPek4RNoNsGRQHKMqo2rQZFdGpmcYxXxJAFEDxc9FpZ5",
  "key24": "2ujkQ2bFvMrSzePmsHdZ1tvukvDNb6SEgMw6WcUB4JF2UYnStVzMjjioEydPJzf3mG4v7nCmKv8EUeQVwYqAeBEu",
  "key25": "34hqzDL7NELaYj8ECSae6NAsgEjxDjT3f24vSkMKRtjR1eGxLRtNpxAQtyC9gCTDX7p376xEZXH4E3eiFxbzzSui"
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
