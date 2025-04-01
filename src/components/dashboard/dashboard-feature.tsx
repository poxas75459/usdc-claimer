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
    "TBo4WawEPbe8oxZwNmY6BjiUK4cPTEdUrwisNwVUkFw6y3rRkUwL7yrWwCwrr2q8y9oY9H1e5qJeErmn1q2fY4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMbkTd8Us7wBd7KQiBf53Te4Jqbqg7DNmHMr1e92pSCqTcJg1prB5XjB3xZ5DUCq1WCZ2kjhYq2KtfTrdNYb8HL",
  "key1": "VKNgo7ewXXowQ213BiXBU1DyApP4HipBToN9L5DY7JP6s494VegbQ37EAzeBDSHiHU5FpYHfD2ataV2GQvouekb",
  "key2": "4ZKhRGbnouoRYnLFZRnmMWuPDrgQRyM8JyrAF9F2sXqNhA82rgxcskJoSgyxphZXHQDWe28BQWNXv7jqQ6WYdZ5G",
  "key3": "MJXU5pSJW1m67vFG7kj5gZzLzBEgfiNo7VdUiNnyoHP5cv6hXMpCNnsLkvZmR8yN5bWvRU6r7vPBhZQyQfRFXrq",
  "key4": "3jwidaTiYAz6KDWVX7PBuXSQki1QgPtR7ex85KfgbhpaqGnS9vFPU27N6SQZHyHAFcerekSK89GUjbqASXTPz8Fv",
  "key5": "4mqyGy22LB7GPSqAvkk9Fk1bWJfeBHW428FywEBu6qk8UArKGBeLteTqyAZQAGdEepcr56gddnsnEB8x73bN8pXw",
  "key6": "VshN26aVnNqPBzxJgTNQfT2bbGsHZ54QhemnboTBRFP12d8VJx71oCP1ZQJurBDt1NqWvuhnpzQ8shQWTXLpE49",
  "key7": "347XMzRSwteepUFB6XVc8qZnBwE9VwroT9cTu1kuBGSjV84NDnWRJpcMy73NrSmkSKdPU7eaE6aaSCMu227PNUuC",
  "key8": "5zJPXTqqbidmvHKtkFZhzRBioJLCNH8U1HkbBfygY2JXBKu2zdmyhXkfYkyeMxKXKFWCezCVafnXiNdkJLV55ukz",
  "key9": "4gEym7gRZ2sGLe5UbASJ9JfZJEonY1q9nUGDAtwr1u22X7SmPKeKoYFBwUx4kM5dvQ2dn3VCsqnnStANH4PdyVSU",
  "key10": "2XaVaq1q5kU2Q1AYnnN8Va8k4qfg5HojyMGsjqitLePQLGmp5fZZSaR6YsXLmuYyGAvpt1Dq4Z58LPNZdzEMLeqP",
  "key11": "2PococX3Uy3Jb7u3Ap2JKbDo7s9zpVvp4sXqamPJipxPZwzjqqRW5MftLwHsdbHk9mVZp4QdK1Xa8BG4y5E3nnLp",
  "key12": "28db6UBAxQMbzydvUwxxCmqSqG4347U3Hr4YzZwZ7aVANiXf3NUd6YF6iVrSyYHVrm4tUowp5zY78KqgH9d1CTsw",
  "key13": "5iRP4ocmF4kuBoNy8PtpaPNq3BUvEc8CDCjujCEtkZmrJyn2NUSsc4b5AqLuCvwMDsrXTJqTNvHnsg7z8ntx89ET",
  "key14": "2CZNoQUGcWH9M3w4x9cz8xk437EnSXAvZxoPBrotEdNBrBvpwDV1zoZaHng7M7R9TZNdLwqXWtmRgBfnArhovf5E",
  "key15": "2xgzWLwppq7oULZ3AmUccxuQkLe5XoKpVipMiXuQX8FBjrmkEK7zoxuzoMTecssbXuNoF6i8f6HWmfdUsoYdjh9j",
  "key16": "2TUDVsnwNdHrKYnch8ucEmqqLNL9ah9G2Wn4SPWeaW6cxE9bJ6xUkVMQVzn3wVGuFmqBLdpQDe4yJ9bpabojBP1L",
  "key17": "2pZBLhtbJ8i34SbL3Tw3Uz56ND95S6JFJurJiaq5EEYUsDaxpgPTTLPzRLnq2rWKB4V8j1nFfgjejPEN31P9jAvH",
  "key18": "5jrh8pfRRNttTfgFwWhWsRcadkHDcoRXLtqwnRiiwBv56RmXCXyizX2kj26C4ggxjLPW59h3FxhTiXJdp5nnSwHu",
  "key19": "3HcFd1Ju1Xk4Arn2u1qhMAGSfo251ZNk1nP9DEnpU3igW2r8dGEeEBmNUj56meyYhR7EgMEZBHN2hWuUaFUaQzcq",
  "key20": "2hjRNVfSAtwQH1si2hfWUsyndfkDiDSmQpFitKjNRFGtyd5rSCYFFXhNRBDASSRKHepM4aEtjWAnAHw8jm2Y7mKR",
  "key21": "2eBKpHvoQMaLgde4YijPHr1N2vSNEFxaQsi7v5jgKCxVgmKR3p6XwS3RZfyHDENGYPwFqwJvgUEizwNXcQH2BXA5",
  "key22": "2pHjkJuHMPfbmVHm4ZxcomF5sykjkUL7hUrQJHjQMp2y3CXZd8mPTK7WKTw4w4ZuT9g57EFqRRWtxa1e16m79Dvo",
  "key23": "2Z5MsjbtuYBuCMRx6K585A7xUe8StK18x8GP2jdSwH3iQXhZZjRS9zZh7FLWKW8Y1xNY3z2wEDf24Pe6kscqrjyt",
  "key24": "3rqPRYNME5J8QKL9hpkNJ4Rj4cbDaqVxQ7HMq75AZ8dcEwTWuNJonEq7CkzVaFHuuV5dgDrbCRQ2Q6pzTtF485n7",
  "key25": "4kcCv3vX9MYtjdreSrncKnvWnQ8qRvp6sDDiPcNP3eM8c5w2ExCuoBesnnwXKPAwfBWuee1n4CRZw6WyDRg8eagQ",
  "key26": "2Uf6BNKrpjMAybVpsHEwiD7WcGt8YCNfFJ2b7xacjZvetm65EyQzw4P3dkRH29hV1cKqSie3vmWbUB1T8ZhzzxFn",
  "key27": "BPyDRvTJ2pcUGz4Hf3DpW2jKzaFGPxEovtkgG4pojZPnuWpkW4zzJTAeZ23Y1DdmrQXfZNQbvCNNgQCP3EEr8Wg",
  "key28": "3iLfgM7abPtkr6bT6Cy4QkxohtPgtG25HqKjd5bn8Dq5DxxSZUe53X3XxiDJt5baHXCG4ZFpc9hRhPq15gyHtTDi",
  "key29": "3z4WLT3j2JkoeUKZKtTtNbSuDuZvbT6VEtECnRmnW5S6Ag6f8VkftoYmgC9zJHB3xpunSDpbf1JQFvETnaMEbyCe",
  "key30": "46ABgYYLZkLMMpaGgXjytkhF7mmNFxuWnr7158FPdS4PEnihAxxHB4p8Dgeg3yazbmNNBV5vdb9Cy6TUs6uRBHM5",
  "key31": "2p22dPS7pVQtyksYJoPWpjvYR3U2cfZjXEYoshqkU7Dz6SeXjCfrRCoM6JxGqwDxv8xFArnMfuvQ427reeqG7Kiv",
  "key32": "2PbrKcsA5RJ66de3XCyEeqHvp9cCo8xmWZF3JR7Tga2NZaDA2WjePdnBwMV3gkqHpbTK6rAUdiFqgDBstKNmknYx",
  "key33": "2ygrWpGRMSnupnQ3gMT328MDLSb1QuDrqgM59PNh4twuoMsU86xCXppqEw42opKqwZc93CVUzuUkdsYjKfdmLudJ",
  "key34": "3GnquWYQ74CKkmiBtAnh3vgGF5G3ZUBXQY68hBrJjSF9ggo7sQFGHugRMnS8BYyZegubCZRMyLHaXhqY9hNt7XZ2",
  "key35": "3XqDcM7wfVtLRYqxWoxMh87eBeFoqZdGn8RTEhXpUHyZ3j5oBGyPHcPmvfUdAqSpWpN8dwNKoHuFvucTAcjPKfL",
  "key36": "4mPkEKXBLcKcMEZCnQ4knpSSq7ZJyNXiMZhShEqv9y6YruLWZuaxUf9mVM4VVgc8w5btYjnw1kXegf6z34WMDd7K",
  "key37": "22MEeP5DbxKk2VJ9JZrsmRmu6yXXEJ9BaMhVugTw9mJbWkcthjgF4dg7y1TG4qHxF1aKaRcgaCUtTs7BqarR8c81",
  "key38": "4PxvjSQRKL5YDwrvnpmbcR7FptyGrNehbL3McbzNLa2VaCd21FUYnLcDDYRJ2Ko1AexbTcRzUWRPfsRGJaYqiScR",
  "key39": "2Beg3m6JTKQAnnhmdSrzCpbhnDz4TnSJ7xR6CVMpc1vREEdqaUMKspedVor76JeAAvzC14UmFtFhs22UNTFSeCrr",
  "key40": "HSx2F8mX3GFqH9QfZbGQbR5yNWzDTkXAGdBPryHjdN7eEnPs3rdv6br3mY5xCJprBTC76LakNGNV7UGk1fuZUmM"
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
