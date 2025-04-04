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
    "P7WXmxPhAWjpCoWUu2mjpuXQc2yZXvx6txCXDqMnqZhDxWoQiXio7utPV3DVMW5gA7TZ4DdW5pQ8GLNmiWo2K4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p27AR9uS9ofqhwfQo17XYirxSKpyjMvVDrC2qLgubKzhRh1mvRvQJXYhgi4bZU9ZHAkU8y8ow25r9jp2DSDJr7m",
  "key1": "57vFVc2Gh4UjRP5WmFmVDeRBS3uGRSgt17Up24tWKWc5GZ1hkWsX6jiPSsPqPTPhPRy5VuGN6UZGUCmA8TnXYUf8",
  "key2": "5YndwEa8wP9JPBKdPpB46aPSnmCLqwQYpQJhECVPHbcNXGHRDE8k5sVRrhi1b2Et7KTNycd4JpcJRU9yAGn7Xrtv",
  "key3": "5fY63Zpazv52Kek6CLi44rww2uX6cbrfgvZcDBLJYEB6YL9gvFxK2wmHr3StKr5QtDC6HyuFwtgKNwiAD1Kqo4zp",
  "key4": "3eySvUPRVMXveQTYtirM8TXKYujWWYiaWawWH2Nm6RZiyYb7vaioCnXvmRXQ7BbzutaRte1vZxwgv5xvCuRqHEBN",
  "key5": "3ZXhDV9PZxsW4W1MP7yTp7HLJSR9tJfHJjBWEVzr9RwCtdU2dRdy5bqVeqt68GrxknujKLVQ3DNGpCQDaanhb3t6",
  "key6": "2JqGdackHbkCWLXRZta3ZTR55kMLLv4vZsJ89cdLAJVh2f5HDnTPJEZiPUypmdoXoDzwxJuNKQ7T5Th5UmHf5KFN",
  "key7": "3ks99zqyEktB4NXshp6wygcvbgKApjiKLe9Zdnu2WZW4DcJGCmSmB9Tk9KPi3NQDZgoNCYCcbjPxGqvcjTdg7XnD",
  "key8": "eZDuZD9io3Z9buQNiCgn1WRCZFYJP8Vbh15xjHcDe3KsJ2qXhaQRVWrfqo3E46CoR4izTDPR1oNP2kJFXDdkCnP",
  "key9": "5WWUWgf1DemtLkEZbyFKFnyqVwPyDjfiPDbX7hAR9jqyXn58ZhaLhry7JZ3kKMmABCm1LmstvRqnfH1P348ighVc",
  "key10": "4KqEJTa4VBfBg65fqPPvzYKfFiCfvqtktvr446gSJEpsw1TJwKsvwrAhahSGWhuCJA7jGTubAFLhoNZrmyhrMrrk",
  "key11": "VwcvZxNtQERQnxdnup6Jgckhmp1r7gywKp1dwaMp9mYNxX6pvTt6vsrPGhJzsUR3ojeFihauvn5CYmtyT8gSFrf",
  "key12": "36ZeWXaAoiNhbUKFxTCm5xFPwvTqTTWiV5hX3WSoN4efceRoppAJ5sThdPtPS8EBf11mpHpHmYKofAZx2RETYMgb",
  "key13": "3zfdnmgV1D2nXpLQyVbtNcPK3VPH3veYpNugQGRkeTYywBkDjmhr5ejtnRvFp4kLPLRdTF8MaGgq2cg1rvGzixHX",
  "key14": "3ymd8hU6CoXeuyKMtxNrBMrTPNpLxvD7Moa9gzKqFwN8GCeRRD13ZQVW3Y6R9k4T7r2b2LMkE4zLZ1nfS36htSvx",
  "key15": "tLtXEv7Y2jHUAoTnrKk5NWfB3EVUdZRaynQDjMHre5G6y7b6hBs57jSSo18xggKCxAEzrbtkqYLAn3XQM7RgyMf",
  "key16": "4xyLQyrNoSeFWQWMARQxmtPyTeXJVEUQqJdYsezLk2GByVY6zkGoPw6WyfgUMCgYqXoz2eFCBcG5y7ebCbU7YyTT",
  "key17": "4pBszb2RKPi6sBddH7QgnkRY6A72Cov4ovq9ruHmiZF2zVLCgtiCkEHBFZsnAMtSmJuWnBsbovZkCPaHFnyibT8a",
  "key18": "4VJcUdvAK5quf7Ftabij98fbevrdEEh6DSJBJMvoGbi9VeQMEHDFr6ZyvSirKt3tCFXjq5oqzzN2SKo98JvRoJES",
  "key19": "MckJ4PZtzppentBD7KYjEszGsH2qUPzbnYtma9Me6Lw1nXEQdLDj5hFCpJAFU28js5Z16b6gHN2fevDSSM6RoWq",
  "key20": "3JEjs7wsndSPJB8NTrMbqFUG8hhYcwjqY4j7CqdYkrdn3DZD7DxqXJX87oMoc9gg5HqHjcKuxiLePMwVsHKRVTif",
  "key21": "4MpuA3qvSrZVxcYUUNbBKdA5ur9RkNVGHdJe6EmbmeDgwR89jTD8zir38yNKmPMHuGA1dWsR9aqAXeCGnAU48sLD",
  "key22": "2uPDyZar88wsEAQu23dvF9bQzU9mZPm1SjG7HaGTbxBdcz5RYRE7H3LmdVqxZ6wEHCbfVpgPH5SYt3bVfTZQ22uw",
  "key23": "41ysakXzyrCSCD48MEZw1XD3uE3WQdTxLTZ1coq6ZTfKvGp8iSRGSkhAW56GeUJStYGECdZWhq4cVu8deB6N2cYS",
  "key24": "3THyQ2GK134pUvLMc4WuN1PtXc1C4DCsJeJU1vwoV1AqNXjq9c8EiFqU2Xnp3gQuymppJez2jrxtKmLmGFbuvrWA",
  "key25": "Q2RA6p5t1eL4KwkjUmWC37H16Wv1X3S48FQGmKSzR3HyzAu6YQEppz9jkTsHMMBQgfmmtr3z5U45ME3tKokYqAu",
  "key26": "3te9nTW5Vx6CtSx2A5XP6EAHvFiRGEF73tKoZzQ4Vm6njZAX9VyX8pzQ5x8UfbnLZ8rhQASWWA3J6X5FqS3gaGuq",
  "key27": "3xSbhgBqWLE5bEuNrStJGHctqKKyzvSBodejVWtHEm3N9dR33Fz3sjtw4e6s4Smv4vt96szg8u6rTjAcremYm8Du",
  "key28": "2fQjNqmd9LvPFywNDFYZkJTC7sV1EmvfVwUCQ7GebjU3KtuwmQrazFQYgSVjf5A2LqgLv7bKaAfctHH2wKwiEzqY",
  "key29": "5rYYYAmqxDY7qMMM711U3nUNiwKUxApA7jbLm61597WhTN2vSMiaLQKfJTw6vGqXevPjek6iP2u9rJLDN7XQbnMM",
  "key30": "pSCTTho8Zeg2cuNgnKY8MRjofqzwpT8LARAPHrDfaJyNjsDxQZjGZYYfnuVrpr8tdtRmqPsgPKQ8L1GGURnExad",
  "key31": "4cecg4Lr1Mq6VbkujYAwdeCg5hh3QJqtPy6SCdQvETejbYjjDWRcwgz1uGrBD7fizoY6efaVKzpSkPpr6DVdSw9P",
  "key32": "4VxJZVjNH7bDbfXfA7GMVXuXRfK93BToFGAU3MwDkGf9qVxw8ZyCWvPTEJjySJHzkLyLB4xs5G4r68gcARoCFa1J",
  "key33": "32F9KZA8SfAtCCtWPWhGUJMCANLiyPK27tQXxUSVu1QCiwCdq2HrjyGkupkge1Aq3QdkKbnLaLcz6zqYnsnPgctH",
  "key34": "51ZNQPG9f91ihf6LsbeXJEoxVcdZWfqHETWxKna1Qe9qjdBKvyzrwbJdSetbVSCUgWrYoVz1rEuf19wm6MirbfuM",
  "key35": "5zHFGaHrx4rDuxi4SkMyZq7iaZN5ZJbVZTfxfiPMhBUe2utS1g5t9iK4MvhkwWgiMmPdx7J2nMqkTfxKpXDxdhcS",
  "key36": "1VfB2PZVGM9euHSR37stBkaNBGwG5n1fDcDKN8cuMRWg5wmeVTNgM8SfPiiXLo3bTCM48WNJFbjXuKxKrBjci2d",
  "key37": "Vp5AbvtpVDSWeBGvYoGAW3eYVjLwDnLUwbUn7FgoA4G5QvbCCCc24AnUYgBbnYrtoHDE9JW56s32846kRWsLWDj",
  "key38": "3fjcHt9AxjcnkgoxynHnjjKycWFYL6V9mwmm8q84Tb8P9XLTj9y5ETkhapaf5oEz8thW576xb9BVoyASvFH7rzPS",
  "key39": "VoH84GnLDqhWGniZQrgNekxLrCCtu6ACBBmDJDW7qPEwTFAmaC3E2ThRY5w76LHyzRhfm5cz4Ri3wuJL6Ke8yes",
  "key40": "2DvGTyhtF7Qz2MXFChKmxqZJXgydiP31nsJitWrFG5CKtgJRPJm1wUuto2HVxeJyUP5XvpikwWqYH7ykdaTcoMFM"
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
