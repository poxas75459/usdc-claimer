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
    "5m1ER8UPpMe6K9xJsCJFEroQxXptrEDzM11dVcqQ8iNN1aqi3gKouU6LjPT1B5MUPE76YDowp1WBjCoLXbyS9HQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZ9Aj56HYzSsT7wymv15Hk7w8z3uhj1BcdiXcicC5ruyL2RfnL7adHPfASMnNxSUQH8XK9MpyqEbCA9B7LqbfZ3",
  "key1": "31o5FgZWcCkbn7ziPeCcER5ULdkSZg6MpcLVwsK4SrmvhkrBPrpjXrUreZR7bke66XAYVvmjbA8GXWzgQWa8smy7",
  "key2": "5hLAEJpC8zVCxSREWkH24m3YGTr24XUTd6Rq1mMmfoKkaADLbhP2oSg5PJ4GPfpDZHhA7QQN2o5BncC9G9bmivX8",
  "key3": "2tJ98yJDvXt35kAdPz2o7FLKBKXgR4uZdFEkW9Xz27Hjz4cGbQQjmufViYwHTiuGtp8yXbKaCPaUPuGT27MyuEKG",
  "key4": "61ceuyMBpE9Ayg31yFc7UABUyhvKSkDQETgsbaQU5p29NaQGAiTy9vzoCsf4FSXWKGqBRPdrP9sKYSkLWxCRs28P",
  "key5": "2fpuk8pPPRvVuuHeCfWZ4kujqr2XWVcyuwSsashCU8BwMGRkAR1GEKeWNvGR2hsFpt4BdN2GUkEPZjSysNYuD1Sv",
  "key6": "42TZajtns6cRg8CteMJgbrWYPyE62cKxtCcEbAcFMCC9MAxXsKbL5dNj42siLKPgG7NGQGCCwDEQ8PSBWg9Wr2fn",
  "key7": "4RH9VEL2YAsBdxvuAzuiqLQtaB9TGpAA2zPf4Sd24V9YyPv8brypZ4z4nxAEueJyGfpB9yp6HYyGBNFFjmfpenmR",
  "key8": "4MWhqhQpdQb3PmAmgySKpMACzHKV6AYwjY7Gr2ir5CjDw258bkocM5Xa9NmohahcZQhWJ3yjXv1arC4LV3jmt6G8",
  "key9": "29NnLeFq4WQFaz8eYtTimwrP1Ps2J4UB5SSoVu4mByTtGXWwcRtPKh8cJdyBRurK8xYqwu1v2PvaWDuE447H2EgM",
  "key10": "5aWAYfZDKVpYjKWCHfATKfbwCLk3tAxj39s9g9jt35Drh35jUvks43FJTF9cc1BjFc5V7NF1YPmMhSyeQj7rnt2w",
  "key11": "2npHedWW2vwAbhQFkgLiNUznukw3sFSjd3mrsEYMFXzbQcGGFFL3hwMUW7t4G8zTBBuXFKwpXce1jJEJoficDMai",
  "key12": "23hyWJt165FnXmBxK3RFpzH1Po1teGdpFueAvdCbYdEZqAMgVn3TooCjNfvZNsysaSJzj1xJ2UHjrHpWMe3edXPj",
  "key13": "ZEV4Yv4aqWG8hPqFD3MmWJayhQVsGVn6eQoUsZ1cxDChagiv9z5hJXc1htxsvHKGvbP2W223XsKKAq2bsViZh8p",
  "key14": "5iKtSp73WP1KEo1jQHuqrYX5JPKuD9q4Nj4SzDJL9zWiGHcX8TrXyUDdgDPeR9cSFSu1u8NbQhx6pCVNpdF1o5sS",
  "key15": "2Y2e7KBsghLkqeswnsafwjC5xQXEhXhC7HFZdAxG9N575DrKgTZRbBnf6yUopcoqxrmpDjLXEayXSqxZ2M5h3k7i",
  "key16": "3MtK6ueFchcLgrvETYxEVVrxG8qT7wBk4yEQKkGfGaXn2YzW3sC3q64WfcCnXTMbAeYLbnzitz6B2H6y9t3uTxmE",
  "key17": "4KJp2FkfiiTsjnX6MpZ1pydPWAMTFD14szv82iHPbVJYZkvGyvhRzxQ8dG9fPGBMeLwQLVKpx5wiwzTgJyho4QEy",
  "key18": "Q52jURwnUF1Cyi8y9FLYM2rd9KHoFXTzr7hNTSJ2T5FUwwnfDiMh57MFmko2LkHQu4wyMmMP9yuhWH2FirB6HPS",
  "key19": "nJFz1EH7cCRZNrxNs3ZytZ9fxnVQvRK4SicuPMZ16YTL7w766i5MaRYNknk7VoH7471GTcCwaTy4daq21jg7dNf",
  "key20": "4x6PQYKsGiiLR5LZE4TZtGcLtReKaM4qqGkjtvadXQmu7kK7m4D7Y13Tj242ULTt2L3PTu78zFJMcLDRMuirnm8q",
  "key21": "5usumPJb3RLsZtBCm4ipYhTzev6vhTav5MFer7eC67RLHEHiY1KCegny9rX2wsg267kCqenLDyL9bTEX6RcFNhrf",
  "key22": "28asoqgQyoCSkDJJM9PG9LXSuyy1acAWikACYbFKygZasNpfitkYmA6j66EGihxRifcm4uEGHNKR1LAA1LGMA1hG",
  "key23": "4D4R5nCSGX1bySPfBGixkgyeFeJEfy8pKsMFCDG3wmPWL55iTqcRF1DS9ZHuzdFYWSMSHZwXWdgWEoQwy8rnp9Sv",
  "key24": "51gd8advcwaNX3uN7GMEaipMYe2jTFP282TiJ8yLWsjcN5oieBMMJPzGdKdYQPcQQHLKkGbRJEou2iK6KKfYtkYN",
  "key25": "31hLDwvDgVP9QukWGoNse54mBmHAMjjCTvxm7L6kAQiGqhYGzWYtrhZ8A9QL4ev8vnc9Jp2BaFcm6YBKpiv5f4Xn",
  "key26": "4KHN2XduSL5qKCRWWEJvyBwTQTKgaJTcsm1jtNdp9NFpVXVgt7kVpDritDo93aT4TUJjND8fRMtsTmtSXQ2gvMZz"
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
