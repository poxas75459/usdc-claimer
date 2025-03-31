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
    "TgMThCvKaLk8qQHx6YqtHetd2rbHssjCGw15hnmdqsVRvR5kJWxoTDBnEsoEwJYbF8gdNGrMecHWjfX171u5J3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yihVofwHz8qpk5azA4k1peJggE95uo86ZYmkAmTRaT82bURVeLXxWtJetoe38gZA8sKccevDnJQvvzNVgswJGEB",
  "key1": "5cdTFPpzuCthqzgPdrox8758y78MAyG5ZQi9dYcAT8Kw6xMXhcZrvd3TFPdVkB3U8rsniqDorrcaYDptdnk2ryha",
  "key2": "4wYpGrKPwYJisckN3QRnBH7MUtcjK7x9SqFvPx7gH91naUoyPiJK4A6UoRmDU1HdBoxnQg8n1F2biJAE7KMC26jt",
  "key3": "5XFiLnemiHmjHqTbAiTVMSxBavoBLbFV37iBwvasEZyWFtbiUGotVwFnZ3DhP4RqqPMFfTyKpHH3VKhhxoFf2U2P",
  "key4": "3exF4pJQgMJdGLTYSo8VGYyoc2FSF6U6HWhFDwQLhhhpv2uYNtHwFP3dMrqo12gda2MYjPpnSrfhDnFYAVYENFEK",
  "key5": "2Mum6jSmj2LBB3eG4pF6y3KHy1jsW3RdkedcEDvR2usmUwUa8gNE8UnRAmHLay3az6m2D5WqXUGs2zPgELHBLD92",
  "key6": "2Sqt8zmFtm6GHiqBY5P9fs2GnJUTBvXWCeYUbMthro1UANrCpLM1ZwT1aM89Q9vZ8XiA8djdH6FfHb6zHL5uKABd",
  "key7": "5GWv5sgVAqqNBfY9DQbgj2L5M8fy2nEDdAauPnNsUYGQKGu8bUJY3QrtpSPoMebPGCbn5sgmrwqHEYwY6xGk4ikL",
  "key8": "2WWykXhH7RqtTwhVX9emZ5sxT7YVRoG5KjoP67699XK4GmwKtQjDjdwkP8FpZF44t4FHLDfcXtm7kvHr7qNpnvnp",
  "key9": "5qvnLvhRYBHcGZ3sQx4U5CguwtV3uQVQxa8N2pWBdAAz1EigaawJBNDUbtMSaqoaqXWyZUyiJPJpjiC39W1egGmB",
  "key10": "3jQcD9PVZYbyRv1FPr4CNXePX6nYdRQ7VwvrbhJ8Ht9cNaP2Le76LYnbpQ6ij833MDqzCgAgzZHT6Ug1nCbhYKj9",
  "key11": "sPmrTDPdaXiGRtjQG8cbTBh5WEkJKuM1SQryBYAwH5crpcs1wgtm2o1sVR24HkHy9LGzcncQL2Gp2UKLji8eSHu",
  "key12": "3gDusDeR3FbfRWER3WvgpWDLA7rZff1Vt1p9AsNNdTjQspbVkHgZ8zckz2MkCKqJGLFA2AmyotTV82DxN5TLCQ4z",
  "key13": "5sGpkYvUSe15Bo5Hy5LdM6F9XCS35nkUzWyYuERveS1sBY17mufPYZkMe92GnZs8sa4pDFyo3JpfqkGcWhki3eFo",
  "key14": "4PaADsKY1jK99j97mEUEQ4EXHgDJnm1ZUbPGJCMCCLRjtig6u2zyZyvodNBNHg8HAXy4SjfiRniWXFcTD1y6AayG",
  "key15": "4gXqDRWUnJW1sqhjA2bXHfVCqQku27A3wFUxVeGnNUERpDBTbqhQocUetwVJ4NW6Cc8FmGaFHpT842eKR4mh3hyo",
  "key16": "25jkc2rPjNp3Wbe9oQ2zQKXanz7oVuJfEw3itM1CWp7732FrhcsWhMNS1YQ9M5q48Sn397BbJmSYeFM5TaWmmbtg",
  "key17": "3wmDpdp91yE5FpimjK9dne6Dfh6YN7fPuYT25rrk5FY4UvCoLkLPwjijd2F7T167eZ1KRHRhEPaRUpqVZEedwhgs",
  "key18": "3w5T47mC2DGgwyFLDErnkxqCLJ8XJbZnAPRscqo3KcdWsfA8HAhr2cPSPX4tggDNowJoQAjd6hMUps49QSKnXMBL",
  "key19": "5yMiDxnwFJanJ87FQkk4zJD4SW8wJkUtBphhZQJHL8vb4uTNEfUcqAEcovMJPL26qkLmNiKVooseynnQjiA136H8",
  "key20": "1tAEuRmcgU3DRxCiuPnYSGct8WYzTxQFfVkrrzKJpwn56HyngiZZfhzY2rCRSmtsH5XvMQvYapFNtUeuEbiG8au",
  "key21": "5x8QFB9CzFY2Ww2JHV7WsaSmpY8DbR5kYAUvpFPLHmefghywEVeQ2ZRcYACoYKqQDfLAWrYzuK7pPYJXSvTaCnS9",
  "key22": "5AocZXf6JS3GztcE29VpQzEkkxt6e6Q6eGhq5rZtw8GreEw2pUZ7vQ9H3PBjfKRc3A24tgxwuUxVcRBLLZeRTPh2",
  "key23": "3KQoS5yp3Rvt7HM5cqHy7QJFmpBSQdFHYMymDp1zAp4vGmSEkeQtczSLSmzyasE1sQu5gfHuySZ5rtDyc22ft93V",
  "key24": "5CiShRHTVRmiRSr76qAwqt2aFQCmaqsBB6oyCLDJDfnSNi2pF56uUmrTUD3RTTEaq2TQduiJFinYsgyVw4TFZ8oY",
  "key25": "tixiBg9C5tUsELDAJMzn2ivWju9oJdH5Gb8zheFTSivC6VVwyGXPuFaWjng1xLDLzongppwHE87RsXaLPk9bbME",
  "key26": "44rXpWK418s1WS1iHCbuE6Nw1fwztntjX9tV5Y8pPX3LvkLEUAxTFpcgaj5wBsMXwDComC5wP6QPKvXr5v1MDXdt",
  "key27": "H6r6BW5YhK6UPMWrdQS8g8aBAGSfu3NiVZwbWWZidW6sA7BUsVfmWTgXYjSTXGfb4bWTkJSGHkM9MVeWY2y1UTr",
  "key28": "aUKTRuJctpEWthkH4CxhjiYG5SQfScGx1P3tJoUCeBNQdnk2UeHQ3QBJau64P2LGbNmSyjrhT12rrSMHSnrd69A",
  "key29": "4vMit5AHRturM4Miqyv1ESWg9PKBmRyzCkUcp9wm2AzQEPGUkNza5yH6pSD2erx6c4yWz6MPxnnyEMq9N7Maah8R",
  "key30": "3A5is9o32tdSM37tg2pirx5UnfvNntf74dgvS4kxUNiD2Fz83tcREGHKG2gzwkdw1FeATcSbV9ZuVYhK8fXSEXMv",
  "key31": "5UsPdK4jbnpX3LUKpdqVHAy7o1mbvRhSuzqir3XNBmtYKY3wDSxgnSsi8A6jGBwcK1yCSyeNqLBwGuFsJp6ojqGG",
  "key32": "5psBtCGGtynVRT7XPNpeG946Vj2iDEbgdszpNGJDeFz7sNmiSppWuz39uH8SqMKndwcwrEgwGxfMBaQ6cFs5zNZC",
  "key33": "HbXRi3N3eRwRZMR7ie5KTPHwWJfDgmUU6jZL45KwzQibaEHVb3YVipDHrEEq5w1k3LN9cD1Ykng2VSZFvFRuhFF",
  "key34": "3atjKrvFrTS2NyZfweDoh673DfaGN7hiLoNpKrGm94bEScnFr6yCAh1utuKd8UB28uaEMPwahWUvcQapztkhJxvb",
  "key35": "3RoBum6dS4Unp4uUouueJy4MtVvHihTdadQj3uP5r6N879AA6dHx6YYAuy7AzL3AYRawrWe3ct4aHzWMwQbsKmcu",
  "key36": "2CmnfKsdZoZGLoRJnj6hA1q5eUUsS5zWw63pDGY88a8ycvw3cA3u3m89rtm6kvR4TfdNuMMuNehBFvqvvjZ9D1es",
  "key37": "4f2KoSJaM7LXFoWP5TEKGA1ffCZF5n5Rm5Ac8c8zd6boYeDa4vdnNgKVFUxuZemP9NA2ZVWSxQjeyK8nxohhLji7",
  "key38": "QW8qWgFKN6fWnMo8Bx8E1tAGVKU6cZaMZSoMjhiRUdDVhPyiyR9W4fuhEKGweWCfYE2bKNTuAoNJrjH44UtrThf",
  "key39": "2wYvD57eYitHKcNoJVq3BjrN27mPPESwwvVdSaqiz1FQJyyceuSEWiCMLpEumTj81TM2uu3boXP7DvBNbXiCwW6K",
  "key40": "Nt9ofHPQaZ5EaottJ8rJdmnG8fMcCUNqTiDwBmCH1xGnjjUjRwQzBWmQGcmLAsvkKyFMGJPNkAHz9Cvbwkfec47",
  "key41": "ctYY6X9ekxftuyYK65mQTdVu5gMSnB96xcAbLXgTDWX2CU82hBMVASwwwm2fwtcPC3T7KfJiZ4ipeiTMrEyGzW4",
  "key42": "2gPXkWCxAkLkHu4UvbaGNTyXVdAXe6VYVyfKXvTe3KWH1JgspKV3Lf6ToL1egPnpVNc6qLDvQ5MEn5Tt81yYxG5U",
  "key43": "2azmeZmjKTY8TA6dAsgwHx29KzXGQ6s5RgZX1NTPfncMeYAcmffKHhHzMRNsD73w74MBrYMdA86Utjp8EgtAF3u5",
  "key44": "48BRT2Hi3D8eft3JtdiyHaCq6LRU3h9MKNoELDbbJkphGf4f3jkKfi3S8H7a5Q9r5HJBff2xwYiq3Gxm6HmumErK"
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
