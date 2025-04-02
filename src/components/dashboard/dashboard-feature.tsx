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
    "33vGDxgZuYCp43XP51tPFv32tdJj8ovMottcpYg1JsFfwjyZcveawgN9U5gd33MirhawEpXpnPm81bAgCRFP2BQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TviEdbCeaLCYhdv1sRNKgRRJp5cww3x8XsxXN2GXkCXbfrHGLiepNrLDBcWKa9QDQ8TK9xX3rXwBe87YoqoKxKT",
  "key1": "21GinLfgZ6YQSNzHnEyqbDWRCwfPjr1B297i4ih9atzSiT414pKVWv47Heq1bwLRJ2czMJRopFemsnQx1bwK4kxn",
  "key2": "4scgr8vKXgvoqNZJ5X33yywSf1jtSweYbjEbPaHoWDEMu9tFNchzXAYZgbQNB1tZVLMnSNamjxSykAo2LVjC8Pag",
  "key3": "4WbCyZSd5idT1XsoLEyThvkSbTW5m4Bg1r3FSxxPzEW8ueJZJQzgtNGu8cP1mHbKYSfZnpzkacxvbsUo9xKtV2iE",
  "key4": "2ohZUxov3ZSpfygLWqL4VN1cxCSm4BYVwE4PCnRZ4VekCFxxiVNc6BSt2pMHrTaFfQXW5cbLhhVA92VTYqJMPoKm",
  "key5": "2FRVXDsUXKPD571s3bpTeEKrjEX32FsfVKkTQKSGSZnTWGdYi5GAZGqNLUKfPcXktq45NYh6SkF3rURgwd9CHbm7",
  "key6": "2pADJAP646zT27ni2NGRUFRRmo2mfwytaurZtDnoE98yHfNkz25j33TiNeHzZJsyfHhxnMuQeuaE5Fc2akgXXuxm",
  "key7": "5YLNJN8epuWRTC7dcVcuUji729wDtVecFnZGLJZK96gJVUhbjoZKttN68KXhCuKPrD1KSThXnfjFc5tpRNaXAMrP",
  "key8": "4eW1tisHhVR6MBnb8S1ZCPZViVdaS5risqNzxgK2FXTsjq4bsroaXKiX23947UgACmFty7YAzCqYb6qP4H7cTHwq",
  "key9": "3Mdn57B9goyuZ5Yq472dQ7dEEEUJfNCErFYJZPJNniAcbB2uF7kZvGPgjYncvH2BqUKu7ZoQV76jZQiiVRXa33Ho",
  "key10": "4TBVevPy6ZQMCfeB7DYbHJ76kTsLTfRLDKkFip7r5rmrHwdMBmC6vRVwEbwkP8M2UE6GU8R3eopbMdRhMJdZjuW6",
  "key11": "5wXvDx7DU3i57eKmCCHkLDJQEfwdAAZJxs2BNbAHaC8UHbrearN4zZKZRxkojv4QDWFNah9un4UMcY4StPAAz9ky",
  "key12": "3NGqq7pQgFEVX9Juk1rNzN3g62fqL7Mfy6bBPqMG1ky54mXbMHcFWfPDP9vZUPtwCRCKkhrgnqGjvRNrDTjuv5UL",
  "key13": "5VcbZVu55sioaAuBbjzHDYziKxtPXHrWdpRr3Rr8a8GiAQM7GdTZSfquK6JPRA2T3vfmERfmNGigU8DuC6c4QX5r",
  "key14": "YBBTLKDjdLyi5JRXHYuqeD9rN4MhCQyXbrHKXYH2Z2tGUfQNqmLaVEvMr6scmxNwvvmyY7W3oby1LumeFbarK8R",
  "key15": "4TNR519xryacLhu9ZrVu3VxmMQzRCPfNBFT3NrrNxr3p643QSDC5ThoMgk8Pi7ZiiQcFbkbGhne74CEvj24gjn1r",
  "key16": "5CxqsEsZLWpx6gCxwWtppyarHcdaL9YjSKFTXM13UGbAneXWMTwbAcYxeUfeHjobt8D6LaZXqpbk9YeKXWj6WiCX",
  "key17": "5PDvjAhSMJeSaYWyf7mBgDJ9bHWY4A4znCA6gobeMkmXsE2vhsQ12fch8Wy5k7hqriXysFoc2AcACLntZwTBYDJZ",
  "key18": "4VB6tT5suWYPHcMXHMSix7YH9BPozDkr4Hwxwgxwj2vdjHoA8vemG37VXN2NpuUADuiKo88hYB9EVg1Uc2JqwtLY",
  "key19": "4Df6tMsraoNsEaTmyaYkJTqkNzD1Yc1YPmVfeQoo3mGtM7TTGiwDJUUQgw4YUCFwWx2Lb2Foch5ZcGsg3YvdL2s8",
  "key20": "5mV4cXJWzWwy6urGMfjhTowMSczExXF3HTtd9F4Zfz8SjUxUgLZ5RyfmoJrVtcVmZEn9KkwDgurwX2tXAqf87RPt",
  "key21": "2WX1Z33mjiLQuNktyHAJde8Quh3bzjovbP6xc2jFshujwgTw9fyM7kT3MuL8sgA7UgqT2nMMA5PJkwJaipxChJeh",
  "key22": "3BVaWZ9TKLZd3h3hLdALyU9BcC4amWvVkrPHnnhNnGuwjckcnD3tTWhLEb6EQAA5xxLkpgHVSusmVV4t1xoZA5ie",
  "key23": "5FqFUjfCFBTtFCFYYz1unFnGL6vzGUZXiT93To6YnT4LGfcXDJ8dcuN5Vmngsr5djG73Ebb1htMN3tyFxQrJpLxN",
  "key24": "33vQjGT7DCDzFAUXaapUFsgebFv7oHokaF77TTbfp3xFNsiFtANSW7NSE1yr3NQgZozDtW9uyDhY74GnKRBBVjW1",
  "key25": "YzNEZ9R78N2gZgeSJrvtLuUou6R4TppBobUGpZTVBdR4FTQcynuEb4y1Gyp9FzfXvjMKBk9eU6pZrKro38f5ujr",
  "key26": "2noXpkRfF5osoUJurvJf5fWLakmuvFRwxwX8LwKc9HfCb8Guc8HKnk3waZ7qL2K8qkBL5mydKrLiDZEL8EthbPJz",
  "key27": "5LPFQGbA3xkYKyobYi3uC5F71mcjaLrs5GmKVx5W3NJMm8tfEbAnEn9VWek5JoLJtiiG5hc8edb2nKhPecFLcUn7",
  "key28": "XPL2N2BuAmXwYT4Vt5DShELA4VqeC1HPTjZxtWvpTDQK2wxLkzYgdPzupKYncNzDZJ6j9bteNiBqGG2eiR62svk"
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
