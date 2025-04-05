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
    "3wydP6bj7gff55crU4XN5Sps1i2W2NrL1Mpk4XtRaknag4UTLf66cXhC5wAoVQjAWds6gwB1hyGVF9KM3HT5t6WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnZ7CG3mi3ypV4jq231gvdNTm6xLfM2vt5WDY8d4MQESoXQdnBCr9RC4qmPXJSFWzfMej9mFCizbgK5xW9Nusje",
  "key1": "4fngEc4KgTXtS93EzEz4jCy5trDYfkv9BnYAYorHzXR96DcQa3gz4eFv7Vz6mM5piNjCoDgSRj46FTGgCWhS6pRZ",
  "key2": "5Qh1BKEvPf3u2wgMwRbV2w5jRZfQrLBuqU96ijdPQo7fjPceoKDSgwApofSsyTMceX8JJVpSU6GWtxsqSVtew1jN",
  "key3": "oU2icKFsJnZWPAr5CaBKkBhR1NLt2U3qRKbQdVhtjbeziMLniZxLqFRNUy2rk74K2rm5Ma8cpiayQpU4QigNJFy",
  "key4": "5BbyXy17ijJjUxxqLYofo7VVB63sjXhw6FvsbBGHqwbuvrog1dtCSiUJJspuneRAn8CtiZ6ERL2x5rkWVAEHmhcD",
  "key5": "4nBUFzhvMxFj9ifzBjVWr56driekSSajAURE7Y8d6aCfdHTGVKAVpaQU5LmXJRnPY84H2Gz3B21mLJ2uASnDDn92",
  "key6": "4GNWqTeiqhSGYwGkjuh1KDe1Zr8abtUyU1Q2c9oztusd5WntnvGcJHYa7j7GJm6d5RpiCqhAnwvRuq5r3Xqv62wt",
  "key7": "kx9gCTFEaLCMV7NkjjsA7e7r12G57nFeU67iQQ3JFV7iCJu7ofS2CKZwv9wPk5Co94rmQMaSW1zhs1cEfiVN7xf",
  "key8": "5xxeDbP4tyR9hMFJunNGoJMy1yPXbksQwzhTG4nSABfnUxtwiw89kTHTinjd2PGVRM1trkAopxP1xvMrD6oSrPXE",
  "key9": "5JRMjXccNkZwhmEdkReEQtKV2egFerRtcZxzJnSDgk6bQzcYwCWT5K2Bgvt7Rrwt44A8vDKVVWVk1jLNF4Q8a4Kg",
  "key10": "66zRhMnC1kLAfo9LVKzMRPQpGDA2e3r7ezpd4HKkeNbhF6CdC7Mi18jk9LowuXLaHQTJKkZeUPHqEakTCkSuyUg",
  "key11": "58oeAuRm9JyTmWgdXugDyygzRDXBh3FLRj76refBEihoF2AtwvTEKM58PHrgQpBeLSNwyCt2ykQ3PgV8wVWJ4FoZ",
  "key12": "4B1cYFnJMvnWgYb84ZJ13Rzq35Vc6AK2A8eP32aCxY8ru7FcbPkY1NYdtNL1b666YBnWSfuG6pwLr7FFBAYfMeo1",
  "key13": "4DRtyU36rD6S4A5UXWNBAaEk4YynuamyrbEwq89QdUbmn8wvy7HEdakF8GHx7QF9od1o5ypfviUXKBVxnraHNSPs",
  "key14": "5wqkZNCDdb5dGRPmVVbSNpXsdHfA2rN4BNq99GXmTcXfpJMLR3ofSs9JiwXsaHzBCCQ9HqWT4WhxBJeHbNFhpY3T",
  "key15": "5gEsyLGZxJTcBP9BwbjRJ79aV618rJWAoksuBH6pVaA66cH65aZHbpvpR2pppwRVoQmpSRtxQS72QFXJ8cCYcqSW",
  "key16": "44GBs3S2xMCK6MNXi6eF4D9Zw1hDRqLpvSEWJdkeDejSymxMkCzCE8UQyj3eF4xRwaLuvXkSoeKxftHi5MPBp957",
  "key17": "4AtQjavK2YZJpua8NJEGguxhvZECfNfmXYwTM7evroUmuFKfcHmd93WJsrnqYQ5Wmm6ojpmQJkkGtr6afQSCCKQH",
  "key18": "4pn2b1sntCiutim4yLpygDLzdxoXXixEVmA1hcpiX2jGsedRr3a3n1oui7KqojXzeuqcKcAfm9veWyTLixs99jVQ",
  "key19": "4LoCS9oiX1oAbpVKq8NN5ZKRpMnJ3GVXkMWYy5UXn7Rf7jxYM4kGsjxmQpUKTDchtLgPGWoyzdcCkyit3JiW9uAm",
  "key20": "66G25uvRLZgZ4WyVxfjcqGxoxewzVsewdbFVkcro2mmywXfMzKFqoK82fhn7uV2GgFimDBBXyJd26bry42TXho7M",
  "key21": "4TsJg1iNBnM7D8x3qcTUtPZGNGrPyyVjUkSiK9jCLM4SdgnCVX3axbsN4jVNpMq6zjfaQ1ELDw8rpnA5sr3ggKJa",
  "key22": "DU4xsa7B8rKJrCMiL4nhSFeh2h254Yg7HPYM5iQMzNMQXrCfrJR6qGxzJ7wQwKx1yWv1wHydJTdKPLGy7ShkuDF",
  "key23": "2NxrWp5oLKWi9NsBecUDKd7fpL6fytbpymNozrnbhTfm3YxfkVv5gwUpFSbW4UDT7xvFPBqjJHrnpDgddyALtMQp",
  "key24": "3u6gY3FtvWAq4bQEcg7Qb4hRS1mR5qB2vQ1JpDK5DwzLvfGC6Pnzo9XoNw7rZGiVDmj9QxU9h6syGU5ypY4dMfp8",
  "key25": "4mBfXtC37Txqz9udAvyibeRStidvVeyX4XQBxz7gwvX5WPmKM5zATh4aGfwBow4EXy4rL49BKAxNq4ZSAHNZwnGs",
  "key26": "qbnsSh2ii3g2zDiDFZY9sZSxY9W7xToo7Ma84VyofD4RrM9MZ7LRYvT4zbNUgPdo73L6EvzEKQjuYjLofPptk32",
  "key27": "4xoVUDNP9PDKsAQjkdbhD991a3LCx8J95yMWVRXZ1cCT83TTjjc6sqK6tAc7snwcZKrKannhchxCT4YqH3D2eixq",
  "key28": "2x5FVfyo84qhAjkBRjZgdxoGmoHfkBMMKj62dqxEkgcSnZFjDE2GUBH7NgnhBYMWGYZkYQBSi94WDgALTj41JE6k",
  "key29": "2rhsX2HD4ekcq2FWjpc4PH8sbN1M5eG46WUvZe5T8wJHSFLf7hq6c463zrLynPg1XusEWPKN2CLqmxLTF4FWeERZ",
  "key30": "4NnhAo5NB74rh3Php9UckkybrJRSQQMows1sRRjjX19T8UTpZLdaR2if1qGUmqJuVsngwKXTvuoqH3dpZ6q8jP7C",
  "key31": "5drN533X2vwgWbeeNnTyjTgVoXZWmLupXKP9xpBfkQCqn4Ak6KaChq3rdQnXyPiSuWeg8nB4HrAohyohv2qbinKH",
  "key32": "2wbYUmG7mcmpuKzLVuM2DKH64mDe2zD2eVsaVAsUbRvAQnkKJKvK3RLU8yqpy5QJtSQ8aQMzgkquWuvHtWxQpkFi",
  "key33": "612vA6yr2ef86pD3S6XYGchvQEiCGqQcqQEKEK97rHBNmqQtoe1qbABqq4kGe1dmtPRAeS5qhAf8MCbpUzYnAkMv",
  "key34": "5zW5ArtiQQiFw9WunQWQSFVnYjvf5ghkk8aAPBYCjFjzxMXZ43yfJrLi5anRfgZP5b71iaNWZrTDxCjo7hY5muoh",
  "key35": "2qdsMDN2FJqLLyGgNgPGxPF3ED97TFj1StMpns6UxWQg3eRArQ3NP3wPhQ3MonGP8WPFaDeDkod5QQ75gFZWfGBY"
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
