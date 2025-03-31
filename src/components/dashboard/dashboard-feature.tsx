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
    "4gaHxAvHABfJ8CbYnHMdvSPSdwfN9rfNd8GRJivqjvh6VJyjm77EVHBJdMWXDDJAAJaq3nJ6w6uEwX1B1H6Byda5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ydtdjUcGPucby33oLAStB5mPcMYVb7UdQN3tPbCqf9zzMXJM13KJYjYsBeQQ5wdNsyeU8YZzXfC1caUJG3TUsW4",
  "key1": "JBZQ48rBNu3icHBFsQvC5FwD6PPHm9s9uzLGf7XPwzKkYLf92aGCFMitECpC7y9sftyCAKTDQrKeV1XauSNcrgo",
  "key2": "5YpTozzvKZeaS7Zw9pL9NawqeD2eGJubkqJYXVwCYzCf5QxEPWTAsJBjCU39nwEXQXvdMgvtSAnY7wSUuwW23sYF",
  "key3": "3d4RzyCZLMCTkKutyxEeYBXGtEw4WdAfWzczm46V3bPW7Ykg9DNyaitUWPZ7RUMyDktpjRPeENxjMuaehTfFLQCa",
  "key4": "5472fj4icscFsKbAnstFRDo28xNYoFhUxJHjjKM9AUMCXyjnxk7u3W6oo1bn3r3wZrLF8fYHbRvqdve2c9w2XaYv",
  "key5": "5wSp8r2hF51Q2aEZtnRGWpcwjsuRiSzrZ5Jn1vN7GkQEFsNFggorhbZdcqcR2ESejEipBwrRoWgQXnmL6A6Zo5hA",
  "key6": "3g3uHbJv1EB71ZY4pQEoTifxCbYg1pt2UdjQ318Px4nJf3HStvKyStBg6Maif1BxtBYy2vpFrb7an6cZMxg4Svt9",
  "key7": "4BKL3K4Mp4WtnnfAomFBQTRBd7UL47pVpYiqFFf6PmcRQqEem91Ff5vYNUM9DuUZGvTcgF2sz2q9EgNVg5PoNsTL",
  "key8": "5bEuoSTw6MGEVs1o2GsUL96JVmMDGcpEcekvtY4LSpLd8bGMKgBFnuuvPZf7EYberGCx75DBNahhD4mp2eSuQ1D6",
  "key9": "4RMpa7e8mqZnFxwdYhVPxSEedo3BiXJGsQnE9FDK7LKdKsB6QJrmdy7r5ZZt9SuuFbG232PXq1Tpq1sCAH6sY5nm",
  "key10": "39KmQQSzJMsgETA2sk1ckfVDYPgrCfxzJMDtU2aKzbnBH5Sacy339wqJwJXxQYeojQJX7eq1wEkgza1afts1X15S",
  "key11": "Y91qQMs6XYoas6JVCA7qsUoifUWJUJE8vXeRNgoGr7v33uBtnat6GVziKhvZJQURL6GtXUSHoRexHE9xtGro1ww",
  "key12": "4MBb44DWv1oBJLsYW51Fk6ZHCTcDfVPGr9Mp6w2Rogo6DjZspajQR5cbnurZ3aniJyw3wHRz4UujyBvAg7m9Taye",
  "key13": "4zvawraWLD9X4Y6AAX33D96UUgPknW5DKrhZV4ux5NziRZbFkbC3T6R4UCYoqya3xfh1mBAyrCeDuZF7Ygqg6ohN",
  "key14": "2mUHnxb4JyqtLXFm9j9R1hSoeQf8Nk9mj6fHDHscDm9c6R4FxfBP19usDwTnrn9dRAYrCNtvFGN2zjRVZEpeHzTe",
  "key15": "5RKMp8HsqN68LaR3ZvT8q86D2AFru1HTLTL1fiDzjLssoyXQEdnZH3iUUkmWtQPmJWtwdxoejnXAUG5MkCectxam",
  "key16": "2iAE5DooJzhq7YDcjjmyMKcm4SPfoY6aaZBN8zx47Zq4oYdBCQWhLcsTqGuy8opLEfkMiYhXbYvqB73hnEEAyW4C",
  "key17": "3G3sEWfh6ifYxdm7MthVnPsqAWLyKKFcyZoMw4YmKzmVkep4aNvhGnVZvqENgN9vmpWWVDeChj1UPnNKAdmbPz4T",
  "key18": "318QxjcQgktZu2SeqWy8DuCU4WAr2UEqkxbgbCw3KnmMGMaRRiPreiWLHFxPbN1V5VgEWdxuWLfi33FbC62UAfRj",
  "key19": "51ppUMchWy1Z3nhGoqimubcsV7JcNsRYiRnwUtsqMEEnQs5HobtSAmnyWzXtmAGQQ6VzgKbeVxvAkr1CcyD7rYSh",
  "key20": "2Bmdz4P4htMyb3FrM5aCTPKLPgFSTLc3TQa7RpW9bD2JxCY2H4xLuf9fdvFSFT8Q3Az1jujTrBioojr9xBnZCo9Q",
  "key21": "3fPsc4LjXxNN8dVDVPndQ86SqSWUC2HtRXDu674p8wu4LqJ7F5U9gM3ip82GV9rAP6JZixejGBGAhYDoLkbuBH6L",
  "key22": "2C8TvAFvumkuAoaMascqYaQdFPYKyTQEqetYUEVmGsnpBbvb11j5T9aRjXECyNVQvJ9Jc6USe4KTNje7Ciz4fjiA",
  "key23": "2GzqM4nCLcS7p2RPWPsfiGH8hyRpa2XtXswDmccMLUKyavrNpVFJnbXi9LTN2WJcPJrqtLVoqecffuJrZhU7kodg",
  "key24": "4bs8t2ytzCbJCwd7A1GQ7XTuBNi4E87sFpYoz8byVEAsfvtEwRv78zA1DK7r6csNqvdGXFpgnHPEqQsMzBG5WmPm",
  "key25": "dhrkWGs5Tr6wb7f86NMQCM1epsvd5i9UGshUU1UHZU3p6R2f1TAHZaUB9rsnuz6USGyhG4MW3PGUKb15rSEtf8T",
  "key26": "5rz9RxyDaf2fsDrU9sbjUSweA1u3HHYSZdabDTdyN5nzK5XCtiB8EQV36vjtjmC9jaSqrk9vpKTF23t14Cph1JXK",
  "key27": "5h7sH9gy1FUdpzvMmkSLm6MVxfF5VRuwfjpXT1Xk9PV4cddKWZWYzSJBj2YxJKmdqq3X3uLGyB6DmeovqMeugKoa",
  "key28": "32wobx4UvjC67jjzgavsKM24cQTAroNHVETuqm5zXfuJD4Q7sZaNYYY6s78YWMHDpPDYHGUU1FR5aWS4HdJnjTCM"
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
