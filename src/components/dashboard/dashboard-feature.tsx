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
    "454aLM49EC2FmdpUiTHAVuCXEDyVad4Wje1h9VBphmiGTxsNCzWs2G4uQ8x542WW8yNuT78kPk5GypYUVHo3S6Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxUPy3Lp1uguTBcaSQbUywysU4jnPZGQAiaLNJLpda7pFAjeg9eNe8erLbt4mAQfFrZSVTbEwbzB1bevb7cHdz7",
  "key1": "4HjNmpgymYh1QvnYwu2tTWuRAweU5nKfoojRp2PcnNeYV9LcCNSJ6dfYcNTq3AjjMcxkhyEKdxCn5jJbx5xCe4SN",
  "key2": "4HgmPDy4Y8ppU2C6QMTkiqVHKzJHVLyFGbmhH9UZQWLCqosRFwZPJE7vM6x7mTRcuLKKdsB6z3MyzW9Y8JaFpKzp",
  "key3": "2uxaRbq4VCEq8JMgTmQijjnzfcUD236aADZkEX9taYyU6dfYSZA7HsQ4jVXCzUh6jKtTXNZJxS1SpXFsXJWU396r",
  "key4": "V2ND3ZyZrP8JSU78wQbbdFmwHfFB53ziEMoQqNACeZyCNMenujDuctcmfuNwdNid8Xw863P8eyAEsRnpCsUgaux",
  "key5": "2SycmndSeEUpFaKUYabbLEpXUHvymG44ZEq493wHT1o3WGrRmcAT6Bbj2Rkr9sbJKCzA8Um4fkKqVga3REx4qX5A",
  "key6": "4Pch8qQyzZjgvpA56D9MaAiqP7HuxmYuaK6uAykDqaBwty5c1vBNKRxkNEnaunuNvtCgTki11gghSwB6BgYuVbB2",
  "key7": "4dNKLWUqy6bgBrsx7GEhkPm2qqTMW8xWtr66dTT5Ax3E2yitc32KvZdzeUyBwBhw3H9CxgYTUGyd1yQ1Q2f9v6XH",
  "key8": "2SUEkRdsKxbwb8GuM8AkqBmkz7DuAikUxUzNV9oGQW6BpjDpaKrx4YzhgrqRzaJuMqRZDc96KfvtKj35GCR9w1kw",
  "key9": "2xUYtjYRH8J46wenmjUEeS6Vt2WwgPiMvAeH4sQ6hPh5HggidNg64eLBM6FzmfXtiXmiBdaSDYKoenbWx3mJroUm",
  "key10": "kwergQjcYYHZ43X2WVAgyVno5XgZoA7JWjjJervdYx31eVe6eA5jdvXkVnpqrMgsQL9NUJTs78EqRYoddd9ehg1",
  "key11": "2eozhBSfuNcHoA7ddpikNbEgjXPYjhfJUYoz7pBiPxGkKjXjcQMgTcN6uvjV97RdKVrqmWUXQcDQbcMv3Gzos8g8",
  "key12": "3pveAVJZ7AVBufdLX6ZSzJ8hSMtQ3hPUAcGobckWFPHJ3iR6wBa1rqvrUmqAid2tepAyBXLrqzaYbxKzawoiGyRq",
  "key13": "4WBwz8v3Ne2RNMVPYG8ku3ya6V61YYM75VkdFpezK7Z8rbTRHrSmXxnMbRtBq9WRme4gLBgT7yfpaSGdWxiNGk1u",
  "key14": "3dPDKKAxHqx2F6U5hpu4vKrg8Kaxc5KxBf48L53MWUYCv9oYztNcSP1Jzxtirna2Z4Tkngkqo66qGZWfjAnLR1AW",
  "key15": "52ne5TFpaoBth5KtFnzBtujBQtXgPvJpsUBTS8gPuY5eE994nU4yyHcGMnxNSRfb7nsdEbYHrCczTJtgXWuWkewc",
  "key16": "4M3usgQSRN4PH68UxA5QzYhDrGQzyARiSfTjwsk2cKjjjfUnwzLB3ibJxGbuR4jmj7Ugf6sDfZTcqqPigaDGZhWb",
  "key17": "2n11GLhTTBM418bCkmmNZsZKuHqXz9EZ5UnYicm2XdaRNL7Jzgzq7EKTxzUuLXMDmCnWxEk8mpkb2QPxWXZuNDsx",
  "key18": "33HLR5MkgD1Xyq9iPB9QrVoEd79L9PCjggokYVVYHF2oMyPhASUFD36Q4o6bCsHyuN7dqGniQcUj1a5QVhRznm62",
  "key19": "3GnW1Ugfequ4PV4TwGYAuvwVAnpEE6tMGZtQfSBWEWK7aDDz8okyZiSnegdDku6vR6FzHsJ9KEFLMPsCC33jthg8",
  "key20": "6ds8sskXc9js3YNWkgY4ZWTw4nTtdP4S84Vncq6JFyNjdzQkB9VZmivd7xoCK57ZDh3KXJuSGpqKDTfuSm1mzga",
  "key21": "5GVXJwiUwpsjKZPRcreeQxwYuy2JoLZii8ZsRqyb9syrdw2DpGcis4TB6K7zTCuASyB35XxEfTNtJsnVQT1kssgK",
  "key22": "2VUR3pBate3zwKhyraToCRin5ux3nsxChis4PhT8Lr726r6SEQQKi1dwdUHJNoeVBB38QFnmtrGctNGHPrTqa4Sp",
  "key23": "5TNqLxHJ5JJgbERWfVnP84HePKM7DqEKALoAeErbroGUgFX7mXA7x7VvTvoBqY6KvZLNeLGnXjwEfnyUeXgD75Ef",
  "key24": "5TQLSD4y1sUCTYueXxELuM6eoUcSaQa2jXKSFRi42vNAdmJZJG19BsoVriCKTeVkrHajyEFoxiZbpC5aDHLs6gET",
  "key25": "2XC8GA2LvGk9Ntr849kckYMXvSWh5sAT53PKtr6iRxW5nJSGYRRRrwtiNnxKs6tc8y1Q3GDWwrs1mLKL5MtSi9rF",
  "key26": "5TrZFQxMbnJDb6CtR1WAP6PrvsJfX4kEn2BDrCvqgNoA2LbUsPoppWDiax8dR3ZubJo3xgmJbkR2sgvwmhJwYv2B",
  "key27": "4Z4D1oPRNzdShxpLWhmDZFcacwZWZwKZWoM1dw7AcEnN5d4ffdj412B5JZNnWtLnKKmtM8wyUynYR2uNp5sdNQAT",
  "key28": "so2GnSAVQF8uYLgNQ5XxwkJ1d9RyBW3v7iC2kuVrmCwRyohYPrH7GWxtcqudPJv4b2ZXbXNZhA6a2w75Rt6Aw6N",
  "key29": "3Xhtg7XU5uiHj3KjWwvEyjgqYgfX1B494sncQ8MneBrvPKneCosoNycRRJ86TCgqWMLmgZTs8yRerJDNWwbtiPTz",
  "key30": "3cTfwRzb3f3NRubupNGzJo5iidpKQqdj6YbBwUNoWRZanvPwZ7bYjuNXgBx5ni2jceiqMLzfS5tjf3r3i3WYd8vb",
  "key31": "3XcPGCHitED7WKh4zHAq3QvEo5GweHhUnZ3wxwnTQhfZP2HouZZkJWDC8nyQykby8ztFe6LSshkdec9sqQSYYgFC",
  "key32": "2csPRkQNoxj42iC2TqEMBesr5tmsQxbYCgJMM6jpuHgEvcD9RsGjn2zv5Bqm8cnTku7XtLERhAuLeQf7xoyTcHo9",
  "key33": "4YmtkstMuL8iRk1bkqPhg4T5JYDQPSxi7NLSAUh4pmpkFXAZroK1o8QhYdNseH2nu9AGn9Uu7KoJ6xd6QSWu8THT",
  "key34": "48CJDny11QUkaPLqoLKJHWRWxScVC4aBxsTL7SbcbeWxVLfTVZazap68CbDFcZ6ZRwtRh9AsGfcp4tpx8FwXBCXz",
  "key35": "3KN8kzyxhT8eJfQcKT3Fp2fR3sEhWaQ5knC1Jn4VSLDdhHp73tAK1ozHtczroSWqYPC883GxdRtXQLFXFDN6fxZs",
  "key36": "3eEq72wP7KtvR7F4cQj6QLhPSqskYJnp8oXAXdme9Ffj8KzRrcDzHWQ5kndC7mJEBdcgkRLp4wbDreVR3GQd2fmR"
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
