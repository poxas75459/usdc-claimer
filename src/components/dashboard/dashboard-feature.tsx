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
    "5EwZG4K9Z3BAkkPzqrWXDaqKymJYsimqajJXy8uHHPUu1S6mFFxVtyumfvBtyKoH7jcwnAG3iMvLP3TLPf4ZH5wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyHe2Fqr5bJraKeQA1ZTH2xRcUAeYjza1bffXtc2T25KTdTAsgKwUF4NZFM2Vd6SZwpWs5xDugdcLjQmjED4oZN",
  "key1": "5n5weW4YFznYnefTpwbk4GJ54Q8Yfh9J79MmciT3m9Rxx5Vv1BvF4AjoBdadSyEqgJsUomuXR41pGymc99fJqWrA",
  "key2": "5NDfZZJ3iqRbKx9frnUvvvqXHvb4HnWDM2MZmHDJfEZLHtPukcK2VJRcHRY5QGXkFQyFQdzgTjNQa5eHdgu3G359",
  "key3": "31dFR6KoLuu3cgr8wPGuAivYxbntc7ZQvRXbbcfJ519G3wipWBZfN5mxGFd9AZvybowaZEXkeMScBDkZ7A6E2GJz",
  "key4": "59bVyngmvYeAZHRzCeThGKXwkzMYYmrBdmGvR6onukGrHf8UwuWW7TBhpAsRDXyNkYDiNg9G1RCyRr3Mnbbjb1Ug",
  "key5": "2iBTekJNgQyHFLee1yfYTtKHVk3CMrbTuf6sjZb99Ne2FcqVcaCPwPDzURJXP95jxMs81NEqGsm9jda5ikU5hFJz",
  "key6": "28qDvVLTYbpmhhmMoQUNnYAeGXEdSoT5fwEL7XrK3ZKiLHDuwntQFF9dfRLgECM5SpikhGEFJcA94Yptdv5ZEWtv",
  "key7": "62w3k4YJ9SsVP63sV2wpKQ5fJYQK1N3UPJMwoEoSRF1zuRtEEAnxqjLirPmSaHtVFeavBtRwEzRqi3dgrymZBjC2",
  "key8": "4WUqHcobX9Y6JAf2VpX8S44XA7tBefkDVycDfTdiYpZtv7UFitS82MpGPwHi3w6ysmN45bqMzYh62C39PgFgAWhS",
  "key9": "weXJcUKhaD9zJE5dF4p6PWb1LDrBtcNbEc22H4muRhAWMX2N4rXV8veS54cihBxDfavZuKLCkHTohSGx593dDMD",
  "key10": "33BcwfHdgaiz1kiEfPRSithh4sPc8WozB76bLVhNTaHvawnRMLKwjEigjSK1GZbPVL2Vtf5QwrCfBREUrBxCrGJK",
  "key11": "Db8pEStL1op8cEHKfDtTKosbGKEUgEz7wxt1mgKiTQSXZWhnzMfepqr4LQ6ZRL82bVysJ8tp1xXpLvAYdfiny71",
  "key12": "V4M7QNUyoD29BrCQevQwvG9LPDF6XEpJE5UVzk1VcAzUi3qF7oVPG7xngrZse89FycCuevJy6AmE8pEjwfP9Sek",
  "key13": "2zsc7fFrDsnyauX6UkRhgbZgXr34XMUqnG67DpD6fentwdD3DW8Zayqtu7CbuhTQTCVBxjg3UH73m1KcjdaS8adu",
  "key14": "4AUHS4J4s1YkbJRXiskUuDDmrRb5UxoeAWHnpwjgfP4FKoc472v93VqvzCrMMqvAK7rbY4sazuJCULx9Byv7GHxH",
  "key15": "yEsAs4ibnY9GJdxgyg1Y3PyyjRpqU4NJQr7hLSBJYRdY2xi9JNPfoqxhvhbxrUUWhmXAQKvt87DdmWXsXhReDoR",
  "key16": "8KL2iCxzRbY8zCaGYoqDVemsvrKkXKjVAgHUSzeadWf5TbN6HkakP2AF5nVZg6x5eQb3DUgSGv9uCGWy9twjnYq",
  "key17": "5o8fdgiAvUCyUJSTGVe76Q9M2xVeZN5K8HKvYP4kX6Up3BCaRM42CVJrhzPcaBZF5YkDJ2y1rBRFLg3biXgx9ZCy",
  "key18": "4VSy8ZPe8Z44aL3s9bhAJoqgASEiZNgLPnru3EvopgfZCa968p9XTC9Ro5r13MJqW1nb2MfJTKhvtv78fqrbNGB5",
  "key19": "2dzwGhQBGy3XzWFTa3892cJAbhrvGXoPfoi4oRwEjH5rY6fDjNzYpktoodvWPuF9o4ALD5vMuZaESmPCxe85CuAW",
  "key20": "4HMQUsK6eQ7NZpPvcqriQGNqYj96iG1e3rfgfgydu68hj2xyzhKXtGqnjwevA85myGUfCFD4Bgoifk9sPWX72U3Y",
  "key21": "49UjDeFjnDyaqNE3okyYc2ZmUu8QSPJYn3orbUEM4vX3L9uSuubA8Zu8srgojudiHSVExverhtKHsfjEKvy4TGJr",
  "key22": "51MrKUx4kwDmdZ3G4WCZXFrbb6fasTN5RLDQRzzRiFJMcfWT4oL1c2pTg7RQULqX191YwziyM6gEiubwcyspmdr8",
  "key23": "3YeYkB7SFk8u74FGoC2EXHK1pHMEGhWwBJfKTWfSrT4NTTFtpPUw5CofraSfCwQiJae6mLdzQLkE6ZjkjEmy8xh3",
  "key24": "3F1yg261ppUU32yJewoErxpwVbNcy7pnYY2Fp35hYak3Q2C81wBtvnmiGTp6EAFTa3ZrZtqGctQF9YmidjwJi4bj",
  "key25": "4wZDxKEg69qDReLiTDxUhT1RvfhxCkkQBiAAinKSwxudse23cJZ9Sg1VLPnoqckjan829L5MN8sjYhFQXkQKLtt7",
  "key26": "2muMfGppbT9rEc12SK6heNT2ubKAm4zAUA5ujuihdEF3b4PmMkyM41kkfkriFsiumKz7AFZ9Kj6L1ZMAgnq7o49G",
  "key27": "52eMWPbkvHUhsiFwHv46AzuEZmkGXZLhC66p1KsWW36a26iGAKC7ETfeDD7j4x5wZ3MXRzpFpgjGyjTM38nGWfmW",
  "key28": "2btVf7Hzh3fw3b5u6CLiwifCRoSMJc4cCKdbeHEpHn2ufKYVVkjCvjdfrbR7S8bB2ED9euv4KBpTAHZPqRyNbFEJ",
  "key29": "5SiLjNS9MczPUwLprR2oaZW7xJmkRV3rvf7QawneLjBnEQsQw78SwrY1x6DDGbJgaLx8oix85Aqh2zjT1J3z5Z9P",
  "key30": "2Z9hyJ2mwBpu2fxGYauSw1A4KKfbEpu9gSgW4h1bogjLM7AMzR1CH9WTinH7kWiU6BosFdQfC7gDVcMLL3hPWavL",
  "key31": "2yLbpbLFR8ffCg1MjQES8LxFST51ZdP1k61YoftdvKDSv5VkAk8UfvDXQS3Th7W1wTM1qwKYQWQi2dud144ePQyh",
  "key32": "3uMbGpURfS2sdFF55MXB5c7mee1icxxygePnrBbdvU3vbey9SsTpHiWT5swTfmb1EJ2kSF6ovSh7dcwJpBFzwuE5",
  "key33": "39PkyYYAmbep3onzkJ9z8cMb4XCMcLzqtj5MhT1K91Z4N3eJf7MvdhCxn8gLLfGgDLb91XVvmWPodsgi9naSDSYF",
  "key34": "5rTTTSm6eaGTtuJgenahAiSt1LHSJMJGgau9W4tkQeHBceZqQ8e4z997EdyMnCEKYiqiSXXnbanm8JJhrU4n2GE4",
  "key35": "5gE6pvb5hFMUrrP7QrM6HSAbJ5wnM41sRxqK7P6B9dEu1Co8g4HDTUQrpASkJtSKmufZMhzHbGK4NBWUdiu9ZPhp",
  "key36": "5jrRGfs4Z5YorwHjBRNA6oawcfwLwE9RYhbotnyvKKzCrrjHt8GrQbGjQywhrH14jCcGqspTUC4w2FrGMLHagWRD",
  "key37": "WL9b9VYJZr6XWHzBQPZJjJ7sB58WTs7DBMtqEgcX19sWRG27B1XabiEPChaiF9xv3CDHVbFKJ6qA4wJrGR2HZk5",
  "key38": "2oiMZuGN3FJYzGAQjA27P3JbjLhLLU1QEWXHsU4vjceV63wwohCWuPBhdKjrZ14AnDKDnGsm7FeQ1LjRf8Zo5cCW",
  "key39": "59ZxJ1ZFJWKmE1xJfmkyXCdqy58JNx9WNcRr7xTFdBTuyC726ZMn7Rmw1HTtUqR7GrZcTThL3NRTCACUkhTEeWsu",
  "key40": "7WpL3sQREFGrKxC5SCCw5m6tA1tgw9d6Xo2okMt7ZSmJSvBZePeQoCJ5X5fV3MS6xo3DhKvSP2MfbmyXEBwioCi",
  "key41": "61FsbZooo1Cx8yu92DbSTE44jp23imQp3jXE1FfLZ2bbgxqe2xma9XjpZNenz2AWN19hC5sRZA79bkWvDMnzhmBi",
  "key42": "668JdnrFdiFtZfYg9m56FTqPEXanaUcL5kLkdqfevTN28f2CmPqbcgjW9xh9Kng3xfCq8AzXsFBAy4wAFH59NqhW",
  "key43": "4DWMzHzDv1bjuhVcvoMHEeWsN119gS5irgHJNnBmvrz3t79FmVpnp4WQheqaXgeTYLhsLc5Pk4LtxvmxzNTWJxBY",
  "key44": "2ZDKAva7QeNTYrs6YMuCyZqMvJQaq8PKmQm6239ZJrhHXr45mNU9xbLAT9fANZuwif44CTjhcEQDn42KoLHXkUQg",
  "key45": "3bcrfAC1yRScFKGZuyehki88ps2JcW4BH8Ao4pcTA4xc7sFRhd8VD8PZxG3dpqC1Z2cQ93aehsvPRuWdR7ukZhEk"
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
