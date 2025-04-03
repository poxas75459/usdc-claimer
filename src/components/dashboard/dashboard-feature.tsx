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
    "3FniNCLpLdofUPrXw5pqpfpBiHHbhFxPRHtdk9R35i9Bc47jPu8uZifyCvniLwMvfgXGMbPcMzY5xGmyfy14RDLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQbHq1F4waAUhDibYJs27qk2sbPE3spDU6Vo8oCTmZunPu3ZGuQoaJUi6MAom8n3GcNiNisseH7oNtgWmkzJtKx",
  "key1": "5XgUNeGktVwY2YtDR35KxXopnJrCbfYTrzTb9pU7rcjsEXAx4icxZG4K2N52XncaDtnGGavr29M8fUbMpTtrxVVs",
  "key2": "qj1wP3fqFPzUxS9MSiqSL5PJw9aKjkEt9FHP1Zr7XNCzLCGti22g2gDZt4eX6k9VXBwLP9ECvg9avBm1WYHVrf3",
  "key3": "Sdp1TSkvrc3wiuAw7Yg4Etn7Krak7PgeXnEczWbuHkYWH9o8tG7fSBNzgit3Fu1si4GgWWbPkfLA4VN2bBHJwjq",
  "key4": "5sDRYtSJeGJ2u1s9AnNJak3PYDcF71oA21RZzwMYqjruMGSjvZuE1Yfy6EpQgMuxSLXrCx4K5DJYgQ6Va4rshVSq",
  "key5": "4mc41g53MisAFKMejAyRSeUnkZtMhSNNWTRwp4cc3Epsd4jRV2bfWFqjee8bikNW6r9BzxngHSipEcQFXSVQ6Jk",
  "key6": "4z7axpugkhGRb9qAKerPBmVu85B7P7dtsD7bQBmaAkdymLHMTNJBwoqMDDHTjxM47bycjDJFSTzRo3b9mz18oxhu",
  "key7": "X72A4NDTfX2h7SCeDezhkMqi9fU3pQrALs9aw1UqyzdtGa3Rtynj7of8na4YgfvVJc3RPfWzwqrcc55e4apFVEC",
  "key8": "3XqoKK4WczzJASL3w8iMgHgHbmayQbFKCgmYNuGTpBEoHHGcaNz8HCoBbvBSD33KXuMovGa81oewLPUiftDRp4v1",
  "key9": "5qHEErY997M3JLMGU6ye394yPLBWBUmJ5jD5M2cvRK7RoeoQ7LNvVwuzhXQ13i998Lb5d8Dm9RmTGnge421YLWXP",
  "key10": "81HkrmdCHNmYWTPXc1mfAum7A3dXnW2atSaXhKMHi6bfUbEuwv3EZuZGrkDScmw6XFm7DiFg13qTKb8ku8dALrF",
  "key11": "5TK6aqDWxB9u34sfEs5FPryPzaaiHxfzy5qMsA87mHc9kcKRhooFVRCbDoDiVg25UhwMbqLLfGE7md26FkAs34Ye",
  "key12": "2XJrhZS76BGBdAqRxDdyo6BLNprx1EGYCf4dYN9Tvv6jA84rhBhCPg5QXxuwDb94cSfcuJKNCRcznkSYuGFKRbyW",
  "key13": "473oLcEVDjAA6Szjn7BfKAqh8oxcPHitx9CKXNBuTVx7oVyfGGbeonMwHoK4xHYBoisaN4wPRne5xmbyW1eQG7UU",
  "key14": "5fK2C3o5MSpKVS8J2D5XLsUXrMckCC7AzKXvbLhMvvmobCqcFKfWw3UDBXFVU7xsCYmpJeEkoS4ZaSuWBx9KuuDx",
  "key15": "4hrfynngHkypjkzMEnbGyrjNMfmzYBmDtjFqxmPLHMHpymLvBhcyQc5Xbfrr9Vcqfdx1yiQqhh2z3fTw548PUu47",
  "key16": "3fsNUDSeESHhBUbpEc6A2Ma8BRCDEXWhoZMc7UQFbhojE87J8URKYTrtGbtjapu2SUELCwmmMtmuCWanWc8CkWwQ",
  "key17": "2WjH9vHM5upcwZqeYhyQARNuczpSDtXPDWgTm23awVq4DKg4vWatEt18UQoC23uLCXQDvqeec1AUjpEz1jHzdu87",
  "key18": "4BdRHU3nrraG58oZnmKUYWHbZsywidQcMB8xAHBBHnvjjRYysvZGt6YKq6M6s2KPbf1V8KzfxyAR49Y7vhJTcYEL",
  "key19": "5RkLjihBEt9z3y9QzwhiAF4PUBLxDFdo1Z1peqgpbTqMMspEGkoKi49q7o8UyRUHZctJPYWRPPcE471k4bcuQf2s",
  "key20": "4brEQRtybQLLs8EjCxRSeNvhWofPw6StTqbaS7919eTrHhmdL9Fk1JWeE6rkMzRNugfu3W4AZR6xVsWnTHanUoA5",
  "key21": "2ykp87MmVdLdUxVaxKdmq7FZcRo57XgbdaxnmGBv4Cc8K8jfLQiduVeDqbJVkmp4FGH4G7xjhqp2Abuduwj8rDxK",
  "key22": "4c71tp8EzyzHLpifTuhr6RVpaXEtvTqyhke4iFpNfP9Ju93KpAdzPHXyHFG5c57uh2AHyUEkP8PVLgjcVAhwdwQP",
  "key23": "221jcKntSg7yH7Af27D2WoTpD32LFk4xEvh3752rH2tvtunBVSEnZFhhgfmRszkbxgUh8J4NKgYJbYGFfNocyhoM",
  "key24": "4DuNG8c3d54bTMDyyFrVJXZMt6U4um3BwhzEFk17RAD83KdVWtVkxkvznoANtLBDrcNYJcPcmX7NQfMC1Jtog6Ef",
  "key25": "4n7LCuxi2nFYMkSC4FoTJ4khCs5P2S5RtJ2Qexn6fJ2bTVmQ5tuXQcdiwR1bNBNBDDM85uwXmzk4txdLbNwgAJPf",
  "key26": "2QNPNma1tXPh6StvxAfnwXSZG3W4WEkCywSxbC7yAyzeQeuChH2XCWb8XU4bUUNBu662rqLm9VTqniPrMaQoWmPn",
  "key27": "59XZnNGiUpgqsZWWXaUiq8GT2sNVcFNdn5HhULHpkpEmKB3XYh1Xiim3zzyyzPLK7wFyqTU88d4Vv12KG2AinojA",
  "key28": "2xk7Euvs1zZXtn2ud9GygB8B9sKn6dHDsjE87Az9moxg4Fhp7EmMroCcH2BvZRuiNXWKS7gA5XRMDanDhhdiqNHi",
  "key29": "4D5ybeoHfLqa2Q6YK3SMHuvQkCuVJxKRAAtn6A2FiSw7Cqaj5Mgd5VbbUpq7T3oapdnPHidaR8pbNwpzuhn2WBKd",
  "key30": "4NA7AbSa6v6K1z6W1Uahfbj8r1SdTkFdYYy3DyyJF57F7LvUD1yVfKka5cLsjY4TFo2N3EoxYTdqa8ugczP3mkGL",
  "key31": "2oR1XexN85jXqX7YGEqi3r8WbByLqirCFaurxa97WAeht6yeNxZ1irh6MjAFHo6vGHYzzXJVuzvwGc7wsCUSbY6B",
  "key32": "2MHmG1dd3mn26mfB5QpXcsWqneouDnpjF9A2aRHhpUFyowXu22PArpM7Wwc9pYSZ3KSntPjj4399hQ4bFyvLmU61",
  "key33": "4CCCArzpVLwLiCoXxCXP9QMSfWreRvMzZVo1qqeSgi9Lo5GnCrcyfb8v5NtAfbZe6RsFyWLuYi2Xk3HjBfdjHpEL",
  "key34": "3wwRyPtoFmNuoE6uekEBR5NL322k39EEBBLbhCoHYehhEcrtstwDr8gzgYe6R6vg8sJUUQWq6jH5kV72KLtzNGfi",
  "key35": "hzgpvKWubQVAEXdTMakDVcxgKF2fZWXt11GGbtobZ1nZm73LTvUBPx2d9uM2rRjiGxj5tVCduxqtdQPu8pcn34i"
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
