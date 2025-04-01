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
    "HC94gf4Rh7Mbiy6YkQNAvGT8vghwPPfiy4Wwq1P3wwhTxfP7mjr5zSqiSxNUWQF8pTac17FqWKztF2soL48Qc3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpET2fsBGn1qPRxEDrubqmYWPn1tpfkk5Ykre5a7ay55tafCqYgTzQtcxDJieLC7EpKr9oh42MmHmewJhHhL7fw",
  "key1": "byFboRcFZ9pywpa35xb3DBR2pT5ei9xHGdpxDxcqqHhgp8gUbJH8NWT5sdFDu2azkG1tcqvxKZYKnz6emjEnUsL",
  "key2": "LpndCD4jP4T78FpJg6WTHZm9boafgw7WVdBtQ8PYrxhpdsaGKm4Dnae76VvzGWjaHiaBmgS6siKXRWNMSVHS9Yi",
  "key3": "54nZRpzGNjs3uqrCLvo1wsNvyaBvCNGrNL3RmuPKLzUpfFAg16LjPNRkqmtSu8vqWiBHyUzDmVq4hizcwhuQfBWJ",
  "key4": "5v9w7WjhNYUGCcTGvkR1i4Q3Ci2Fy5zNqJsDkij22rAQzmGaZWeC89s3wg59BwErHGvNTkXxYo6EqdawyyrC7FXP",
  "key5": "jMhVwVv4MELsBnMP6zRnP4Nf38gakfojBFwa2jLayvPLsZ96HGnjdDvS7DLij1c8JzqvaMeZA9Ns5EC4uXLj9ZX",
  "key6": "EteFKGt4VFvMHhMKGoBd4YyskTwgtDmGotuneH3ihRHtye25zDHgetyQWmk3LDpkpPx5ghzkB93FgS8dYhYLKiG",
  "key7": "4AS5PrbBCqRAYLxqK9qKnPwW7YMZ1AoR6C3eFkJVsWn8NnFZaYRTqJMBnwtjaRxLXU2TkyzmLHNfhxtERDbBCGWf",
  "key8": "46WuSaQhKFuATfsdNtuiYyQbgFfZBj92rECnVKc8DzBHFXxerKTjTgmTbekbwsPMQihD2dC1Y4aaJpi73Z7hmJcJ",
  "key9": "2Z3R9pGmUx3JqMeizcaUJLD1Ako6LPgC87JPLriXJzVJb4RCCEepXjMQwcbAN3sR8wXYXUp7p3i2XML2SZrsJM32",
  "key10": "2RZmY9fr9561siujfdes6sW73LmJhSETLq8sJXk8uxiisqhwsJA4ZEny51XD5XqjQidERHTHAJiUdr7YEr8CgEmy",
  "key11": "4n4tFdaEuSunqUpgPjVfnJfBiQGczP1UTZ2qdnW1pZ6xJ1onbG1t6uSS2VmeqMTxUsCxZoFrysGoJNyMLiuz4Dwe",
  "key12": "5erg8BkRbNBkdyPuKFeL5XYMW4APYMmrcYrkEtJbGod4ukeZ6pv8CM7hKohWEQyNFnRHmpowRnspc7fKDTGXrckz",
  "key13": "591dN6jq7252oRivvNuLdyQyA4mdkG6Z7TKjpMadcnfA4nbSRG5fvkqtSM3WagPpVM7dRJnjs7kLvYqX2m2Jb7yb",
  "key14": "5Y338fnFsTcdvBXUWGjNAsKeAzShtEVahUiqe4bW18ojtcUyB4QsPt4ypnQDAJFz7f1JVJ3pNCi5Ss1HD3w5FdiV",
  "key15": "2fZ2pSf88iP4YNJkoYC3WL69ieqN4Mf27H6YtatBFBbjogWcrk4oYj4Bao6bshYHLuuTERRUEAQvyV4sWmhA656A",
  "key16": "3s5HPDmPa562yo3HJZK226yRj9KujMXsTC2MpFfDKZYcnKQzW1YrMaYNfWd4bxmZ39XZCEqfJMcqEEnUmxwXDQ5W",
  "key17": "4ZvPVzwbzj3WshLwF92CQwDkyfcsczHjbihSatAAyLiQV4hPn9jM4zBsmeuJ3oXUb8fs2G93YsWfrvQYMPFGyWQc",
  "key18": "2U4izjVeoLdW3pcGBuiRRgbNaNDka5yoConmxDLtGaLasFWx226qYw2Lo3exj4Mdt81kBbangc2GCaStNBTHgWpt",
  "key19": "utGbWTe2Eo1T2KVqSPp9e58VMMeAopoCXUra8pDBhaPFNenktFJ4SPVdJJAYUy5k9jYhA3rh2roRiVz2byUTGeX",
  "key20": "3o8cLQswRvPZupoJdLhdL7Bh7rn6y2QMpbzU3DTdva4saUi7xbFYGv5UiroVWbp9REqX8PWrQncSLJWJ6rtJjwHg",
  "key21": "4DKSBhcDazvFamfQhs5qsruLznuPkp2aP3qp1j2ejCKPnbbGcQpR3UzaiUmmiCviRLUKuwSGWzptA2A1gDbK9EbE",
  "key22": "47FVRceiJwVhPXytr3RVZUDZVn5heg4FT3dnA6Jn663cnx6G2wowUNkWjzJsAV9PMonAjrWyAkdHW4Fc9QciC4Ti",
  "key23": "4m7inNbQYVTtzR9S9CiWqNkduixNe81DMDi2q6JJBhfmv9HfAyZqcbFYUNbiiyPS5gkqLGoMsvrQXaM3H9u7ZbRm",
  "key24": "4HnoZTUicgNQi9Rk22Z1PBfDFceqTQZQ4iBj8xei5ceJYnydwQGWPxVRymjhJmwg1FTJpu7ae3jWX1y1ub1gPcVB",
  "key25": "sinFSQvzYvuVw1QYLPgYYER2CZLBeue9cTU9QrkY98KXiV2zwBap7SvETrhHqmRSCj5tKoXYfq8ivPSr4mRcCUt",
  "key26": "5hS7D9LR3PrbDkcwj8tTtox17nv2CxGyNpBurB5jkGPiokbpTrfZ5kHS5SrdJkqypPR5CigyeKG8yFSquPJBB6ry",
  "key27": "ehrbqKs2RzmvqsmjB4QBB8Gdc83XCXtFMeEMnsTtQrXQismNqTmzMWFKXsZDRPrRE8QqEz52yjiiV8dn41ATgSd",
  "key28": "39QSSBw2K39DDmaeHi7UH5STPZqhY32rpRhbic999ByroJPzi9A3MMGCYLsdAqoZwXvNU1HqtptL6M7pgqEbK2yy",
  "key29": "uv4CAYZfq2Pki17Ltb6bwNiNNCTtbMZrx3Dkw3FMCauzRvRbY2uft1BNiMq6z88QHz8L5NBbqjwAy5yVSCcUv7j",
  "key30": "5cqR48GDF8yTkgQJxBHRhScuEk2aesZvuiDgrDmdkLH9UFtkzVDGgh2C8w2prGWVtWxEc3vZ7xULhp3cSD4mxbD3",
  "key31": "5nme3cb6CHh9feKZkt9G6W1C2enf2ZA7J7XPEHFM4qhf4Rci8vBM5qozvVSDKbELw5EbPCxYp278t91vHDify3tL",
  "key32": "5w8WwcqyzU63tyUwcHsizg3T8M5ujRYYE1xTF9nWf7Pp4i65knY1AC1HfEtkiAQ21rE7EWEGBkLYDae77mwerkBD"
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
