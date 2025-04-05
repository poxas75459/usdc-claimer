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
    "2AJKm5vZcsf55nt5teuKu9yPFUD9SBa4NVZ7utPayw4prLRdfVvA3bukaWMJG2vX2pHyujdV3QzaA13zYqfGdnwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1af62cyoik7VscCPoTytYte4mKpkYVEhYX9k92KTAkiy7Ats2jSKb5T4cFUrj6n9mx73djJGgtzMRELUWLc1kBQ",
  "key1": "M1mHcC71H3FNCmnzPQijhb79B5QvotdiXTrcbQxN5P5mcjUN9pXAQ4GeftpVgosf9959Rid36HXYQB47bpG3ErZ",
  "key2": "3p6c83PE9PWeYcQ1zSWHngCacchk68tCFiwoApqs8KUY1V2RXU1xZXpfVfh5BJW6HpeDBY9nJ54YrGcLJgoENd7F",
  "key3": "aqguSD6tpUiEKafPFuGGJXP1qQ92ZQQx6Mi6e12mnf6QPWR4VmuAzMUsy1dRWuTuVptbfLyTqV4U8Zz4fztaYsu",
  "key4": "2b4JhEnpQpzASrtYxzvywVBPNzKYtDtsaaLM2yXWqhALuiAGP19E3hgh6jcntyS2fNkMn5TmYV8WTpkPjmqVXyTo",
  "key5": "4EfdpXHatq6JodXByKWPqPkzA9ifzuzgRV6hWjJivwugC3fRWetbChaAcKp89d1HquS8Gainw9koAXBr4kecD6xM",
  "key6": "3MtvpUBRUQb3s2kZXkorLgvpqMUMuwoPgCTiJw7fYsWYqqs5Nsqrx9RVqFmZDy7JSMqLGdr8oMypr3jm2HEB5W62",
  "key7": "2NgCyjCphPp6a2qxiJH3cdpb3BKhY2w36w98Fx9KDctUzWxVAuJfuZBuNSS5F27aRiCq5ayAW6eg8NS7wnNDGybK",
  "key8": "37QpCBvL46kX3SQ4eoZqZYht4ePWrcexVf46fvr3irF5GoAgrr9GNhrYcd6gpBMVd5oKYAhcAmfqQTj2tpgDyLka",
  "key9": "3ARHPwmjYoKgSGCZH9AohrR36P9uHk7nrR1vyUrkdkkY6dViaRU3gMmGAvG3sD1ec7HjkzJcQdSBwzTzMDszHqGd",
  "key10": "2eChUTV4D7YeoS8zjkhnZMRwRe4WCebMa8MAheQiu83v7ZMQCNwwmoBjRMwACvK9NGRF3phdq4HuVLm2eNznEvn2",
  "key11": "3sJdA7Z5FxLEgHknGaNENzFxPoVP9vFu4bEWvBuQ2BNrXpEa4nrEjuLxFmbcQAkZYPtphpEt8vBasXFLhnCwC5dB",
  "key12": "3ZZoaxYVKHBE6CT9Xj6AdrKGQm4mmVyEPPUsaPSvkAxP7XbEydCK73aT6XeB6waBr5kbf8k2aLUWwoyDhpXZU49D",
  "key13": "4JXXWzAbEJaKc8eBygTmtTcnTuGQaASjrUVDZLAbwUnjLtr1HVLRSvNh1bAPJpV7fUsMUtxFeCQNhkAzACDnXtnG",
  "key14": "wrjqyx4Hga7ZhK7AFP139gxDKQSUhFSHdXUn7ojgkynaJgqhyR2U4Tu9T6nvJWiJkUxAwugN7PrpUCWKRxkFmmf",
  "key15": "5m53m6aPKvUXdGDmyKUjoZEwLoT2Cshfhbn1rcusfWkng6ydrSVd8DreJKNzXjmLPdZNS9kxrtYgoUPyXyYKL1Dt",
  "key16": "4obxKL3vK6kkufcjRG9HwKA8Pz47AeTMP4Dj8MRNuDauUEQcJwLHbYDFkDv5hiM5e46QzkPQ2ttWZyDE9AaVN8U9",
  "key17": "2xz7w4MbsGZdWCGzJPbFnnNBPbqxG4dyq94xryDeu2fCfrqJ8yJdh8WD2xeKfX3God8DZTyjvscR5XMXt4H29FZS",
  "key18": "4KLjbKTRXZ3tu1fZGxZJV1RFzfiHTZMDaxU7QMG96cCHmakZYEAmUF17VG1VnwmChCTg6dQ13rq237rgWSceYW3Q",
  "key19": "3pA6qwQFJFgt9KxX9foDZVTCKXsJ6WtkxNRF4V3kgCFxBfrKiWSY84UbxNodYzRtqwX6AgupzjFvSqgWg5suPZ2T",
  "key20": "57RFNpBsNXpJ1g6PhApomUpcHdsDNgZ2DdqeNCphZdWFqi31KTnQqwxcMGpinW2qkactMtL7gS89nkbQQFkpgwiK",
  "key21": "2gCM5jGXoFvf1FDyvoxN2eqKU2jrrYGyqEKuFAipURW7yD1bcfBKzQKaCP8LucvD8Ae6JeVG3omhCP8UHYSRdrZ4",
  "key22": "46X5onsnoxmvc9uh7bwmmRvqniXP8sbhZvWMgsxmfDqGP3dLgtpbFttGYTXz1qFvADCYsPVuZ9owweJCAgoHMPL2",
  "key23": "3krjED2Fpi84huhP8nGTSkBUnG5jccb52Ga7Qy54Wnc2AyKqoKfiZjLLqE7VrwPTqd6cCuyFp2Ucom2YVcyhDat8",
  "key24": "3FMhgzuoBjoLExLR6MJBgD2YcXmZXJz3q9GFDiigjomzKsVF6eEPRJunAmen6RJg1FgfFsZTf6E4a7PMcaSGRCMz",
  "key25": "2u4mkpmLkWcG5VjZhaQkkPnm99a2HcdNuu4UCdwxhyGvgbevxKafWNjSdFWksNMhy46QKarAXSdo5GqvChNPQQzH",
  "key26": "4kds1uzTN46fcMUgYNSwVYUiXPhosJS6A9R7zoNiXnioMR6b73t8FyeiokWVA4y8SBeWwD5CigQXdXb9SSbatBhz",
  "key27": "2ancvgkXbh5zdcUmrnqc241ni8WGKjaHrxw6YE2LuS91gQCFA4yXVX7yq5kSiLSEgAi1tzXisFCyesz6BaYCuUMw",
  "key28": "4q7JHLEqc4u43gXyCkU25LnAZVg96GWnPqMZnxhuDsV7mFKxzCvba7Mfzhbv3ypPgUyUZrU1nj2qmvv5JWyoeHQ8",
  "key29": "5PcBndtXecmpQGWWDV1BhhWdTHk2U9YMEuet1WrwjQvSvde1aP2wBnQTrE74LPMFUGA7pnaqZYcM8ziUBfhzCm6R",
  "key30": "3HowfJ5AYxXNVX2jw6B4T3Bo9AQShMgciwWxy6xWLJsGAttW92zb8J7sM5QDVZXHKVCfQAPLiAQJxDsAjo9ZzZpE",
  "key31": "4sNnA4utxjs6HDp23767MFh71dMHHbd75kiug5hHccyPf5bG5WVrygbqfLMAxsy39rQ5qANqAb4kVoae416VM9Ga",
  "key32": "3XLPnHPW8YbjXD1kkeCFiRgBdgWFFWzbZYBxSHzTdEScCVHeqiEZCGNH72UUxHVgv6YPcyHefJSCGEsXs7Csv9RT",
  "key33": "2e2tMUsM5TJ7eyAbVMZpVsWQ1HxhjT1BKZUqmgJYsgNoXnVaTHfFBFBnKGxEW7dFyg8L4JdXbia8tMsUG4fjPsrr",
  "key34": "LyWy7ZAVUNNVLocADVsx6m1h98Ks11ueTUF4i8g4j9geRhodPKrXF2bF1SiQur2eUMHSuSQdF2bTkrrt6YppYTn"
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
