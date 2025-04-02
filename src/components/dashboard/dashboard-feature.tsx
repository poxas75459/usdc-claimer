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
    "2rrsdzbWTBB9vfNhJ23t2UwnsEH7jTMhtKSK8pcz7kYKPwSnUxXWooG8bsKg2KyWuYS5TUiUjdNb1aU8rczLcJYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyXc6wD1T3vNNsJLJ63Qrkec1gpbPvuutvXohsj7GkuGEbiSPUMYejwFyfgFAGycENX1shxmHdr9xwNaQ5cuHwv",
  "key1": "386LE1nmzhL6WUcWvboWj15M5FUfTfqahitPPueufunkyXoNSmPUgMPR5neoX6fHc1ZSdETYEuvs6KN256ZaPuxc",
  "key2": "5LBzNDQsVe5xdaSKX2RzwDZvAXTdnvnUehvq5Cftf213ubtaepsMDiJuAbqPeMr8LQaKHNUomEbG3NqYeYvF3p41",
  "key3": "39s4GBNudvmGn7mhdDov5a2dZumUmkgHktqR7iZufnoFjoYT7jBh5QiRpt83vgtAh4r8qWmaeM287uukunfDzA4j",
  "key4": "MoDd5zK8f1YftoUEVprKWbQspimtpffZR2zwMevEwLHWAZ9NjopZW4mudFAQ83ThaH1GjEXXPojJZSs2eC4aZQT",
  "key5": "RLCMH8RWPiE3XuZcPsQ8MT1ZcvCgBcdGPakW85Z1k4LCQQTC4LxWWTgXKyUFJHPgxK6CCdML6jaNgjHWWp5h518",
  "key6": "5VkKugX6a5ZeXkwf1eFC9Bann8E7eGiaeSEziYVdrvVjUEtBoSSQKJq7hciobiotLXCPGhP1thj6eXZL1y2SKoHB",
  "key7": "5qWiRyfcm8wuHrrC8zWYUfPKRzEouDA7iLvQAHLdQFvAcRsesbjqnaZS4HiEw8YGqddYa3XeGbkAWPHUEYkwHajb",
  "key8": "5Vqmo5VVkVYTT5zuWUrHmorbMfneGsFydXfis5QkQcgxTFf9cL73JcHZJbzZCLKL3rv2Xx429b77Giy4qYUxVzT7",
  "key9": "5t9bHLyygKUPLseU88myMXJwyksTd6YNtxCucj5Dq2MQpQmtTVZRif2R7hrJqzAZmqNc5X7m7Ji6Zcj5WBZdiJZB",
  "key10": "yfzpzaXQ3RzLZ28Pg25UbCQ9XFnnYDpGLZtyzqUJCWkUYr1WLQyd7cJXeMt8vsroQViQWYY2zuzyqBkFLxyP7y7",
  "key11": "3UGBWBk3U8rqXV345CbbRsYMeAvCi6aaywLF3R63GfLMDXKYssr2zSkFfcX4BhGFmpcpACdiwACpYb8csapbsPaq",
  "key12": "33zpBymjewbf6nqkyxDbK1L9NKxxsMZ8RrRP7qtUQnSvuu1DUsvyuDfWGgbkKJzF6woLHP1ngfSNxed1cyLtiGRc",
  "key13": "4SzZzV2FPM7mdwRohyUCJ5f2g8kJse5AVmoiDxo9dusqbyeC2guKiK3o8raUGJ6d6BDsdtMQNj2H65DokSPGz56M",
  "key14": "2qUXkRfBpb8bEHV3zpeLXUJCbTShzQPEfc7ew528BGvqcoyWcJuDuDLnR5g7WQpWGu7jWq32U5DDtPgLmxLQneMc",
  "key15": "4pKwnpvV2HmajFvDcReqzBxqdn3FdZpeDtVjGUuy2J4BEsJgcQpcH5rVo6ZBGe6RHeLyeeoxtSVjXDEGKuj8SRkK",
  "key16": "aFfwHLvn9VznG7e3ht9P74aaTxLDJeKHkPm6NU25N4SLzQfh82Y2b5yh7fY4zpmPgBVFev2qLemTkxENg4JkXgj",
  "key17": "2PSJBYz9NRq9gFiFTTfkH5eGwQ66edZTjgU9y6uqW8ZpcDDY7a68dJStsAbpyQyLQ8fRTpNJt3Ppg2A9nSt6MRqF",
  "key18": "5GYACVQDnngbXPLaXyuymBeGc4TaMytYyhVpGLJBjaPSVK8ataimTzTotDYKtS8XBst1u98iVSW5npxdTBQtT2WK",
  "key19": "3sSiWmoPEEEcV1Jovf1hzGySTbcpTQZcFRQGWN8PHrty9enaKemTmEo4vasYUYE1Hh7ApPR4oYzjknNPKsuBJDLY",
  "key20": "bLXPi6GmPE6Hyyjq8gU5DGQadK93eMC2sKLbAvryqGFWdVdhZf8zTL71ATV7hMdG9UF5JF79U8ijHisSe56MigE",
  "key21": "5V89nWx2TRVfU55g8ppi8gDh4ctGDU3ezuFDpLA4EBY2mNaoexTJyycrqTvua5hz5DURqA6zzFRbECcDecRwLo6P",
  "key22": "4p9BUDUVPCnqLdcRsPkFgPgRux97ZLgDQzh52LgzAD46wsA2gij2ocVE1DrZfi6EX3Thh4iGrGmWdVekniMiRzBW",
  "key23": "5MwLugpADFsk6WW6Xn26koJxxTjrxWCXd171qYTaHpQFnWaUgrF9gQX28ZoNMF5SYzFmyzSk6qVFBVhsQ6ioJP3U",
  "key24": "2rzpYfZ254N8b57NsYDtpkNDspYPs38Q2zppMNqL6j93G7qvuXHVT5NCjA4YG3JpBDkStmE8cSJjBrrQ98W8TAY3",
  "key25": "3paPM7EtaHgMQQMGb8HSYewcLrypddrbrXW9yRA3d4vt552usWg3y1PAQHqpxPRsQScFo7pj3UiRhDDNTTz1RtCK",
  "key26": "4m6GgwYwAWmnwR73qaZWRPQDRRZCv3wiEUQL4SN56KmLmPZxepqrMr6soiMhF2F9HjdbZrmdiVawSdfHeRkrMXKk",
  "key27": "2aZDpq5U9FnTdJp191fVxkiqvyMyvdcKJiT5naSkjWH6Cw31x5HSRn7PL68fNQBboUD9sqYjAhNXDMG58cx4dUMS",
  "key28": "4RD7nUumLjZk1UmjSrbBEFH3V2XStd9dWspmR3fLbQdBQjJ6tjSjrXYNdvTKDNorMLuJGhixejshhbeuMVmRfkds",
  "key29": "RMFGpHtZnKzVXyvfSA5YF74X4zUeaP4Ba56V1Ncr6416JU1K1fbLFLxcD2HvwJxH4oEyBp2dENX1KAQ6xR7gt86"
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
