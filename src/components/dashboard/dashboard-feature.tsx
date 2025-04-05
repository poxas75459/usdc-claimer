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
    "CGwip9Ro9vqwP6WXb7WsSC9mKbs1wjZNGDv8WG5vCvM7h4QVYe8rtE7Z9D4Lg1f2Knq69GvfNxBs8gx9J2asCiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8ixRniX1cUuqUpJH8QHLKutxRLV9eJaFzqpZfsv2C2cnLh3AL8XmvwXZ9qPtktUacZhPW6KkZih5fJGS87mGqn",
  "key1": "5Vkf278oD2jFfxnBfkKv5o1atcxBDYgPJX4AB3HbMD4yMngd2oGGqf8GH7uyyFdzdtL2HPZnYgvaAcQHNEWLHfLQ",
  "key2": "4g6giH6ibPHr8gbwQb4TzQo7J4cXTcdP3c6LbMhn1VMUwiPxWasduyppVQsjCkcHSV8WXTnrHCx9Z1pWW7B3cL8z",
  "key3": "5a5q12bSmRvwGt5kvk6swhCUD3KnB2qx3gBSiuv2t9u1FgEZLWDx5FvUSMgYBUrXmP1TFRTQL47peqh2yLLbLCVP",
  "key4": "UmHtq2dSpnFanVANUAjxNzGib4p9iUZtMj11WYoviCS3ngB45XggtCRK4mxaWbpuEaDUdfcFh6dKxpadDqxJEVE",
  "key5": "3qmzbpGE7vReGBAcDZL8tFkcsSDTgLrCia33sJ8S6RqH4ioXzfiELMEN2DCwCiJvPKBQo1PbPKJbrE5oGgsmpT3e",
  "key6": "4N6XhVVZzTY5EYiN4zV5GpcEhV6M9xPTtxhFkqimChLfEWDEsEsjq5zSGbpETCEZwsEzC55urVEY58bRaLJ5wS1A",
  "key7": "4p7tVgCywHtQKDqEM4BWRBwXFuCov7yXBWcfjSRmZeHSN3uMnUNnP95oy9He4S1WnvmrXdq7yo9Fm9PLNETzVVvU",
  "key8": "2f5pqBKTe4TrfZmMyzTBsC4K3S5q5sLp2DC26XJFN7QBANDKKh4FcgHt4HSynaUGfLJrkByj2cEJkGejeKSx9TTQ",
  "key9": "2JnmbrKo3GDcB2rJRWxUJ6fTF2j8NuDwFzyCtruUaRDuL6AwtRTYrdkLCo3bWqhn8o17n3tKo6orWYEF7FDZL9W1",
  "key10": "7PZnAXty3aBx5F7fBRsBLzP9356PsW3AwXsmZcrLKQTWfuRzTyhzeXPSisjhHKv94ZQxXMCKkHfpTsnbyVWhaRs",
  "key11": "3XWoQywBjcP9FG5BwUzGioLdKP8vs2nY6KRgUwm6iBcFhq5zdg5ExFZeRmb32Jf34sqhZU5DRsGaiuPtMHSjnLkF",
  "key12": "Cer6rdqRipmioHheyHvXHbqY5JzupQQEmTdD33NYugq6owMTP9S5C5DriwP3FLLmD6HDuyNYA14LyPjGyS4qpzh",
  "key13": "5hh58XRZg8C2X4mVBzd3aWQkKfp5DWD85ZxJKvSuCEGWxhfJkt4xNhgUAdiynLH6NXR16gB6eQJkccZtAr3YtzZ2",
  "key14": "4LxxQatGKjcBJ5bnarwFfceMsYngRFn78YEEcCGTtt6D2gkmJQMCh6inzgEAs1SzA9GxsSQEcrbL7wFjScnhiEhg",
  "key15": "3jFox6H2LhHt69qRxtcfqxiau2Eya6ACRGbYp8L3HZtogLsdCGAeJRbsb5aE8GGM5Q4aosibvhBvVXKjVSDndVBB",
  "key16": "5WbuWcWp3m2xWpcLHFn1iiFzggu4hSsxZVhD2ZmCETg3881QWypxZkJuL8PLwJj3ecoqoVyahzAJywA4gukR37uC",
  "key17": "5UxhnTgskWP1ZpAAkAu95GyT8WoYto3nuFhGAoigzJDKJnMiMjHc1LM4qv7QAcrbBk1UuSnhXVeJMPPhJbUofgvd",
  "key18": "n2w6odfrVggRcqKbApw9S4dPEGHbc83mtFFhC4rNwBHTGGzTuMfeRZRLbzy6EJYjYaN9Bu3YVKmEEkvMR33DXJF",
  "key19": "2fJnVVhbggop3UjBUWY1yXiuUvWwFmaM9BYwRVzFnSPDpoPzQF9tHBJdtknHZxoYSxNXMtZmwtGe57M6mfkjmzGZ",
  "key20": "2vSU4Mov5Kz7j3PP4yascFzoXxtsAqobioKhpyRzFjHC3z9CFJFiwA5fZ37Lm8nFsTUrraK52UyakJy3PyQLTNR9",
  "key21": "BPxTeqP33LDszU3N8y7cn7UFL14YbMqkhpum4XaNmoXZNAyveRjw2y7rX94MyAkKS6Ky95N9VpY7VFbAQaU8txK",
  "key22": "397HfeCfLQD6cb5JiLzeUcbvebgWLZhRm23ge18ABxxz3NGrGme3211NCC3yyJA2tTDVwn52dUUAddaL9N1irhRP",
  "key23": "cS8VYURNL3S9yBEk9m3yYoePZQ31KjeXYZa49JoLLkMPLkiVZ6VrRKp18bqjJ6vC3TDz4vi8WPpmbeHtX5TxSLz",
  "key24": "5Yu1AoMHLnrsMpMnNXjGntXe4RHu2BUWW12ki8TyZ2kkkp9QdLnkEhUqJZDaopowH3XdCTJGjGZDJgCsXyWUxVhA",
  "key25": "5UmK5o7T8wBkfCqMQTNgVRenBUpKqbsv7sFBN7C7kcCE1iKBvQVt2QHC6K7z7TEfcj3rHLtwPAEyvMx65CrECnPY",
  "key26": "izhxK3pe5PZSPEMkvSd8wc8hyc9pcYKxREfT3poAdg6c9rqAWqHziKpRz3dG1h2r77ncoSTCQoEy8Ep3aU1GboD",
  "key27": "5STNvy4bkY2qZ8UaLacQtMngky4QqnUrGntzrzUmtZChf6kkozRhnkKCMwNiFMP53hL5YJPofmhg9H5xJWN3ae6U",
  "key28": "7ndWsKbC2khRSuBaZtT813MFbzZyHvY2UaTAd39eF4XP5CTmhDnnLGpQFT2V2GHEpsgZSkmc9NPf7zobdEJRH9t",
  "key29": "5iCuwGFnbgaw2AscHpraLu463HJzi9R4AnMHVKVwF9K6XrNDEou545SPH4yYZVtPm1HExz7zdaTqQjBmqkuvdEdV",
  "key30": "5t7vjo7WHcBjnd3SBZHZj7tYxi2veYBBYJzNWgHNLmctpkJMTm93m1UXa81sKixh4EkAp88U6DSquoE6qcYas3AN",
  "key31": "5sgsy9wLE9Ge9tbMbf4zFG46DAZUkKVTzSDCpz2GUeVfgbpnR1dPnUMFp3bHUKCiH4o71QVzEJigwohQLa6U4mXA",
  "key32": "5fwp1caQP5opAYbHWH1DyWGo132vyrnoH4iQPL9EWTDKwv8hTALeda9EXB7cpJWhAv7Q6LTfAR3tSJ49mAYnCxUF",
  "key33": "4WKWMGUXHXifeX6YkQa7PxWn6UFEqjXXvZCJWzdqAhrhDbuFUxfudYniLhvRgMvVhRNLrGrST6TZ75pF6NjUUxd8",
  "key34": "4J1ruY461tNeHdAfaxL7ywuqTCtSF8woKnLa61rDGaM67MkN7mzzZCV1E1XAR8BivCKXxip2sFz2YPATj57Mu6p6",
  "key35": "5JNc48GqptV18g92dTdVvSFbuFnYzQbsouKuD15hoGC21Jho2LEz8WiKDmUWQBNi2k5zsdQuXcBCh1NpEEtS22i2",
  "key36": "2wrL2XTpwaeee4pP1WfNUA5MHqW9ftYfqCSoSr6oTCwgHbxUt8LSWQKJbNXddruUbRJfTJuNL5HjFDkwV6bUvMbJ",
  "key37": "38d8nZUMWtyTCTrUnMTkEuiaBBC1tMoaEKeBaPJGDm9rNjFm49JToSRi4QcPNTxNSSh6fJCgnDaWFsrPDvrKz6kg"
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
