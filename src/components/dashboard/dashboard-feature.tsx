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
    "VzxwX8n8kbMHmAWKQbTYAzy8kWfh39mMP3benX8HfbBCkRnPK7xfN7YHP3JVNDprw6jgp45QsYuyayzSHFhfiBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzzPVL8gbCs7BtXE9k9YKmLLDRKmfVLPAP96dxbwPf6A33AH9TQXhaeeNKJts5XKspp7xaeQjY6tefG1J7mijZ4",
  "key1": "28yr51T8miKgj2DDDPibJhUS3tkonhKyCwSsVm8kRxB11S4WL6FPWD598DWekxoXPbQWY1D1oGXQAdpQRFX4JRLs",
  "key2": "saFCdvFgU2gi32BY2BmYD8g8XjoBgQ13yEVqdhhRsEaj5hsnDtB6XA7iX7NhPa1UHsDp6BesM6pTka2XcHArvhc",
  "key3": "2SchfK2r1WUHYd4VzVtaREDR7xVHaKsk86Ey5AWJVq4K1uit6ehkqcozN4Z6vgsaZPMwSUntWzTom1e7Cx3DbYsB",
  "key4": "4nGdLsFgL89G791waWU7dmGPwFAMhxvXcf71ZvqGMGPm26vKLP3hH7ynGnHMoyXFsafxwdw2bq6KfbZzyZp9mAKA",
  "key5": "yi4cHDcC4dCsBqytohNWJ8YG5jQFUcdZvt4ccRPzHLdh52Rmx1XawEX3FFdhv6FP1s1tBUo6NLW4fa5PVT3ZuQp",
  "key6": "2qBXP7RQLmnRZKHkUwXGHDT5B9fkt1dzC6dVnSpgC9gE2zu2vmqk5WDCjKnz8Jew5bfQge3ppQJgi1zyDpoK9pvu",
  "key7": "4sMgtTM4uWZ4ucvMriQzLTpL86CykPRVGxiRAkVZ3S76qbZqZBkTN6mWEf8evLXMS4CsucAZftiYNxd6bqJiY9xC",
  "key8": "2o53DH1GdQtiVhAJuJVuJwUGy2t5KFcmpHGvvsRVE6zWpHmqFUGg2icRH5aBUDPMqaLAhZ4s5ztB7N36m1f4UsM6",
  "key9": "59rZELKK1zCeNjo4ND6vR7ESSLZpgVsXA7vr1z3VxTaUoEHrrzJUbUFu4vYieLCvK324g9au8Yeo5HmX7Nqw9yRH",
  "key10": "rszzyLmFGvtp2uuVtShuFSBzhyy7D9Ys1JDwXLe68f62j4hieC2wyLFXuH181i9E5RvSKgDaZTwagsofUPjQ23N",
  "key11": "3H1PCnQ7gGvFvqUAZUDjzWHFpjx89FDe5pkmvimehCigZ9itfrEHF7WsNxoke8smyh4oVY753tJ2dEpEvEYN7Wq8",
  "key12": "CYftujHR7TJHPcfnQi8FfhhTTiQwZGyWURG4mAxvf7amDwQ6bQYFWjWxYkMaoFTtEgj7n3DNcAtN8MG7YhE9Y6u",
  "key13": "zeEXAaTpMkUEPTkcCrf9ak9d2ZERdGT7m6egWhumMgzTFoBziGE6H11t6BxxW4cjU34iFrdUVGWPnMg4SNBt7iL",
  "key14": "3aR9A88tNt5i1fduRTgs9MES8GqC9gMdMriQvVPVpDXJ9Xxuy5P9abjmDvy4bPjAVbqRe1AYbyxDmjabyWC6vwz7",
  "key15": "2JvzBeGbpGznX877BeeyBD45yuQgcq6BAm3zVtu8a1sDNimNHax8NCZXXAMQ3CLsiqaXUNcN5kyhng7t2cbHYijo",
  "key16": "4TbAucRckASNXwZNsSsd6gdcxxbHEKn1H8CjDHbm1r5ynkc2uLQXK3Mx5oozLzRgCGxQDYA4fRtwDdAonsehpH9F",
  "key17": "3vhuxmRjA1fPJgbTArPbrac9dxLMvGUEyKHNmHvFTRQ6Bh7QuhBQaaEZsBSbTJVqaimaZ248Gm3soyQp3SVXHRpC",
  "key18": "3XkzkJdkpjucwtvNARMmBZnikqX3pBGA6QmvvQ2HsncZagJnEX69QsnKuEJkVSMyCCM1KX9nVWmLWhkxiGGtgFfy",
  "key19": "2anKCeaXxUZVwhZXbRpU6k7kjuBKxpxT4py78rmv3KRyfhd3ZFzBa4CW9yfB7sg6tRXWYR5afAAJAemYXwK7QrBQ",
  "key20": "5etV8Kkrpre9tEn3K1KUt6ZyxwCkYnBvzwKTQ5Z9acSqpCkL1YEK5qAs1KxEBkr8bRXJPo4immvtN1KB3reFDjuf",
  "key21": "xpGi5eehifFQntS1xBQfg5qWxGARwMfTkSkWYTUzWxig9eQXgTuJYYNPTWbpd5RHarG4TYvEdS8kGQYJ1YenuoA",
  "key22": "HD81f31KyBpkVnM7Y8LoHQhbbkTsqj8KPT86w4EcCqn9kNJ8tzSYWd9VKb1RwZ8D5FZ1izE3hXbSnrPEvPH6tmD",
  "key23": "38PPKCY8U3btYox5XBYnKKJXaGCzbQ6Xdg1dPDuRinRgNPDD44vePuYSZUANLnAt66Jbk8g6Xa1AP5Ht8m1ifMhP",
  "key24": "5WFGyJ4NDEjYqM43vyversYMw85PYtygkWbR7FRRVoPXTKqJJ3UmgcuAdfSaRSbW9zH7jSixzonCqvW1CYW5WPsb",
  "key25": "3rnLYMfbY64BWPPJGimH6pCC2i1d84c4pbKKgNnguMnJRiAT9WcEVXTM5LZPuhyf41K3bwmCrLx5BYShTJPvdm6n",
  "key26": "522yoQcFmy5qvyzefB9osTk8EohNHP62VeY1fNFL9sZpYV3yx99W4iGgmEHRcVGFa7FmD9ogfRBocFhkQoFM3w9e",
  "key27": "48ozKbRcgVJWFywprCYHSu6ijMjumHi51Kbm4c4JG4Vy6Ap1RWNhzsoGHhLc3r5qAzVhhDfWZnMJQG9QUR2YcJ6h",
  "key28": "3gLQBApy3a2h8JnvqvwqFLBVJYU93pixoGntigPqhBAmV79Zv8hsJFQktNLd2FeWRm16xtsQAVpRMgXj8VY6PAn8",
  "key29": "4N4f88ozESvhngPWBv5SSCRCzCSbdgv2DKDPJGbbWFQh3F55uH7QgqJwhAnzR29aRfEzzDebkgE6WseBo4ZyQiEq",
  "key30": "4CDPPdkwfB1rf6qkrfLsfHbfEmcRnjhh2knnryxEPWrjJ6jT8m5qR4t3AXnDx8KjeepZiFPpTbJKMF7fStnsxu6w",
  "key31": "5cQRGh6hYG86VaVHvmP4MMFpVECyiFxpS3rdHFjh4nAU7ZP7JtbkdGMzdLCVn4yXgzv3K8xQEMDbgdkwKNSro7Mk",
  "key32": "4VxcTEgYCGk67rsKryfEpLNrj2t4Zp5hVk78f22iaypyzQ45Qb3uFhzvzHbxPoqJvcqsZNQhcV2uAKquXxZC6EvR",
  "key33": "3AJqBcVwbNfqTDcVaTLTqVqSiGBfw1q9Af9HroFLZnoqHF9wv87LZWaviiV2xSL3k29sW1kVvQYLkjYAToHwPQUd",
  "key34": "59ziC8Yy7H1AfZqfW22rVwRESaYrtcJeCURZpGqg2pL3GRJQf1oTa2DLYTYh6yMThZ4wAKDH5nai5BSKRhbLrUkK",
  "key35": "5BN2YhUJsqAfQtctQeEpApC2SsAd6R49AGBypepLWgfZUmSwXrCXwBVhPAQooxvbpq6F4Mrp17YuNfVwxQftuABV"
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
