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
    "4eZhFeUfr7cxiRRDv6EazQ4a3FECLsXMvZaMnqxa23BEzkBJWDCQbPoAdS7EgKpCGjJ55vXHPB2vdFzP2BmUkpuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgxZqyY2tUcFpZ1E1NrxukSETKis5Z7xNjBLQKa4yJVRuq1NL78SdPwkguaSxPGFSVW92SSV1C9EviMKGNPzPaH",
  "key1": "1emUMr6rnUmxPVf4CTHdjFWSahEPWZ7D6qpNtMa6u75x5NAr36yF8BDvghZkCGVRNcgLbCppfkXD1vrACpLCngt",
  "key2": "KRrqs6Efqey2JvCwCKuNtCsnwNZHa2VJL1zof7JbQUWJxjxD9WWwBBZudtrZdywu1vPPgso2D67YBs7uiqEz5Xn",
  "key3": "61ZoGNrgwmoDHiMotiTnkTJfoNT65xAdEfhnvPrESMcqgoCx5G5yV3FcPkdhtMZcw7QSToFwVubVFuAJkNxgqfKc",
  "key4": "2M5vUA3cq7P1tNgMHdDFUCWudFHWWaphUofzbpg1cHdE8yKP7rem4Bk13PvCSMNgZxtZ1vboRtqTam4TxwW528fP",
  "key5": "4x41kkRYm86BSBErWsnKwFoQMMkv8Fw75AzExhBUvF4kEEc7KsCPgr3aj4ixhny311V3k9rRrKxiMRVnDsu34LXE",
  "key6": "3cWmBZoYzJA92BiP23y28dyzsvf8HNMaRapzwsqrE313k3ErbwaNAKuhC2x9QiK5ByuXyH1pHxoPH6Z1qNKnBFcu",
  "key7": "47Z1gxJC5FXSayvsTJLW79kn9QkU9uHZ1xXwYDSpV9qXMmLDNokbCEVU5i69zchEWzNECBi1wcs7CSE9fgyZzP1X",
  "key8": "1wyZjvksnJx8JoFKazZCW2MJ4uCUqTQKwmbaR4KDyoHLgc2MwLTabsemKXF9U6Z8W7vMQFaTveQtvKoCPRYic4f",
  "key9": "3odep2oMjTa7z3u9A1WxghHKv7W1G1X3ppsXFHxBLSKnYyXAQHvovErnrSzHn3umTdWPNwbUTFpPZPG4xL3EA34c",
  "key10": "5kUvgrQaUN8oxE3KcNvjKGJkfdEp3bNXgcViusEwV4E1VEHhsvwpaTAr3e15rgKheS816R6sKfPNVhH3HhiJZu6n",
  "key11": "3wxXQKGHsLW5nHNim6Lq15nRCqEeex7v27Rf4CmnB6BQA4enWEc7mUNbkP8QQyx5vd6jUgXTjAV7Qb5KUQAwZokX",
  "key12": "4auB8xiDCTvbPyzrqvEczx4K5qpJo6YLn9wWBsRyULKResskswZhHt1mJNixSizXJNMqRJHMv6xZQkKt3XH4fnmX",
  "key13": "29GxjsVnu1Q1584n3JtbpQ7f4kWf4quzbGfG4xwK2yTMdQKoh2vsfSdvToAAx396kjrQ2DYEPQSR1RqBHfBXDMB9",
  "key14": "5RwxcGkdF7s55npmZwDky1xogdooBF9rGeNLqoWeUuUpNcwP9e2RiRTgrPu7d2qPRzVyZ4Tegng3qWgfjChohgsB",
  "key15": "cpq4VRDekLChmfSyaajvTURgKNRYYXKrcKYXZE9e5GWaANz1GVyGLvxBPsPN2xqnd6tPLX2ADgynwMPr3TAneja",
  "key16": "2ESo72FjHjp3KpmUTfUH6VEjWZ8F19QFF3HhBTohCRdJx6YWKcF7TW5EqGrhM8xz3h1UJgA9ZfEUFdyuAsBXfKqh",
  "key17": "5wkbyd6RsAGJkK6nHaxHFTZgUnT7i76jvdCtpZ9dd9p8a7syAedtnq2hSJc7ZDdwyeSa6tJ2VB3tighN2dEqT7BV",
  "key18": "tmYAnrBiQJLpMZgGF8TRxnN3LJFeSXH8ZpCm2jH2mrQnqUsVFSdN7ASxx2bQKH5D4oAFB1qYcrUjiu61diVUhsE",
  "key19": "3CXtTpMoaPVa91QZiHPS318GvUemBVnN2CWt9VjM3A4S5sVmQ9LwftaLjkfSzj2QEPw6QBV6tbTowhpnHq6WBaR3",
  "key20": "4YvoK7Xqkk5MeuxDnnhYpsi1mia1invwsq8J8U7o1w1M6hbKuQenGLTpmQixqRXzStRA8L28kxcYxB4yeUG5B9cm",
  "key21": "2kJ4fVtVhxVh3M4osTupnRaiGRq71KfNJQjwt9q4N39ASs7UQSVZ4THp9Hh2gJAU1PJ4eNBLGo5X8NUCCYEy2afk",
  "key22": "4dHR9Bd37yfoxLnQMmxJ43YmhPKVirxNh7zFZ7BU26ggVY7JNuuSG14TfvKoArEhHiUNJGiB5fQXz26sQE9aDBFs",
  "key23": "4wqrUw862rTByUrFNR3Bzw2t2aVcjt6c9ffrVzJdHmHZNhiAzLQJUuvY611ESRJXAVo985cxSAbMsjvSsYdpEgKG",
  "key24": "5gbFVF2ro6BgVcg2gDhDGGUbD5noAf4u3oRpvVZbCgkVfFqTNt67ZaPxFCPht6gF5Q1xSKuiSSESBPSp52jRGbkH",
  "key25": "26Ct8ao3uqFKoK8AQQRTTdXKTsw6MtUru4Uaa4AVDvD7Gwa8jntnM8svkMdrxxqfdVASSF9GdVDxRc8BReChsX7D",
  "key26": "48GhCJVeaJtcLvxEaznZR7WYiWCHPyzDr46K6R3kH8BRS5EYbNRUBcE3DDyVCeJT4F3ZPc7xfQnBMjGFT3T9QEGq",
  "key27": "3J1L859rb1EVyd76NDVJYxmRErDa5t9cPTEEcYwnAL3iuGHVUNvtkEnGYf1DL9q9CmMFpWjWqVjm8BB9JtDNiCTa",
  "key28": "GFpaoXqyMdQ6xbFXPNiwxXvVTxJXQi1xG6878V9JvLAV24MkwowMeBYkfSmKJoCmeMvNtMz9KJSgPPR8eYwvSeV",
  "key29": "2w2XLZwxRJieZMQq9TWb8F8r2oapPbWmQfAgecRvAjjtc1V96VhENhVkrP34CVgypDFWtFMhcn8sKKukaxtDecZX",
  "key30": "2Kw8C8Q8DN3byFM45Yh6hqxaApU3UuBSeEAUzpSQAxr2uGcEGKDgvPEyWBDqedN4Lih9TTCRZRePDTYsZGZiRFiy",
  "key31": "2H4ofw5B1ct63Q3ePdqaj5dBPtGuB3nbe9DiYsCPr8Vv18V6PhAWTHoN1vRhuit9wARc1MpLkF3TRwgVczN55jT5",
  "key32": "5QY5SpRDCB1esVAy93G9Wv5eSpWK7P151RQ882fHS8ggGy5YaW1jsXPKox4ZaoniZk9GdQcJTEg7Dkc4oJ6prcCF"
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
