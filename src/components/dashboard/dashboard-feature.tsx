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
    "4xv9JX3rYTrKGWGEJfLLFDkkjJKkaSGTogKsjHp887wcTQ4wnjbqvMR6SuJgv9ByjtUFrk56oq4HaQj2sGiMnKpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqoUdkFeBd4fEcYrXpJTMTWUPao5HXbqqNmAtHp5d4ZTiyGtTdMqvgfr3hZh8iSEWNcNTQLTwjUyd8E5RrGdK38",
  "key1": "4v4hhLnheoxVjuaawZCXmRCXKfuPov182g4Ko4Ubrr3sZc8VpBW5LQS3bSfRu21ngoK1cWnZqoCMWtAUokCaiM5o",
  "key2": "3A2Dx7qwFpkTc5j2CBit57iodbMkSTWiNgk5fHd1wou2YT6fKvSXtSdM65mLwmvXeti3MDQrZMfffAFYqRrX5J3N",
  "key3": "5KvpqTb65tdXj1Z5zgu2mRXxjYAqQqE3sg8wL8MZBoSJWaD9FcWrB5RGdcHKextcC4isJdKdoGwacAnBQzdZqPfU",
  "key4": "5j4ATSQW5oEeShsjMJDuBeXtYtKxUWyJC3BeKnJjN2C4ps1qNfBQUuN6eqCJV7dnBZ9drjZKYqC4B85SpNMy5XXs",
  "key5": "yGLsKqgGhbTNnGrQUfHDLHYYJ4xfY2s2U96irvnuRfG87ky5fnF25UzC1jcUvLyXaSqveQXksd3ZhT9UcK5Yxki",
  "key6": "5o2zqdgzrfEZN1hLX35zp1qTz9r7uELk9ZntSb74q31BbLKTMo7nnXKTQTaHsHqaLu3HX78LN8Do3MGF3PuKHCH5",
  "key7": "4tUQjWhhEu32kv5LmRaA9ei8HVo8taGAsVtp2Ek4z1So2p9Q7hVoYaEYMGtzpu4KKT37EdY54TNeiRbXxcVoRjyS",
  "key8": "zZBzmySuyLoXuMpQAiGZjxbsTCqfaFohbrE67KUHtEezEc1Ck5iQJJp4tfwbGukt7SfY6tPxHVuNSMHfm8F5aoP",
  "key9": "gA9b8TYfYYsgkNeEnsdihYfN3DprozLnavzWzTv8DeC7PYUE6VAcZRENqRbd6zSc6upqUmhzp5iMrnSXvn9RAUN",
  "key10": "2cWaVDsS1djKqThvxZUW5WtbdsYhDaxF7GA7jWyJ54K25s4U2tJyEsBDJSEwyDE9Qnbo1TsivyZXdfuv2SdCAvf2",
  "key11": "4o227afrp92fk5UK46JWtsTq25DCTDFJHP5mwrvAs3jo7eKTys1HfDWnYivGrgtTD5KsrWt8YHrpe8SmLSvvWJqU",
  "key12": "41cHZ8M7QinZLiiwigJxxX4Z8QTPQnyvL9TqrgZr1jXCXVCVNuabzPFQYQuf8b68yw8XYqmQVLphuNZXWdRhtD6U",
  "key13": "4pSUbK3KB2NVTJhX66bgNWYy87wf1AQqHiNWP77gwnQ9XRuAnRFiKA7BXHvhPs22LtvoCvGTB1QTQZp8jqmk6RZz",
  "key14": "4p66fEAbuykvNC8nDfK8jjkzKqDfKHGEqUJRuMZZp342xhKQM8f8d5rCdhNajhbp4ETYhhwgk7URXxr67FcuLGKB",
  "key15": "oBvEJWoNBADA6WwdS9wgMX2RSe2LEnwphFEQ1qoBJoTvJcHHk9wU4bAi3TPpGb4rNeoPZWMtHo8tu1CW5MjhJ4w",
  "key16": "5pNuVhm4zKMAWF92tYC5Aek4BdBGtWodjuPimZPJZ3UX7xLnvnh5dnzgingSrJhBUdKd88rAEkddHME6aNa5vVcK",
  "key17": "3EQDRaxsyyKWKoatvfEeSuat2zNSyqpZTH2k9ZrEm6qEBuvziYPzK6z9Wa51ZdgB93uFimycEw1jUtHbC46L13bE",
  "key18": "4WrttzADTuYNr4s666RgUyp4FzsxTSEH3omjjzX2YLTctwaBKy6YSQkNJbMFryfr8zMW8MG497zz9TeZvZouC2vV",
  "key19": "s9kHfsbW24AQ8gwhv6Nb1PGGqaGvtHQxdXRngQfADV7TBGiUHoByezaak3fwHBiJqzKma78mvG5UB6yGDQqe5yK",
  "key20": "3L8pnDZTozuDozo5FX3QidRzFDfqN6nE7qZPykGjjSzrTHenuVZQCEEFhbeB1ewyh8i5h54FDf9FDD3PfKvtXy4R",
  "key21": "4tz67HaQH4Zo83tZ5QcLeoU5TcUZEz2VmFHsLyhbnSUjJ94Vt166CvqqLp3zAD7oEGCxn4WVGVCnah4XWS2CzDXj",
  "key22": "2UmnyqenGsUZTx59ebpxiSk14MgH4VY7uCZLrQosQK8Wr8hqpQG3SjJnBsW3QzQ64ELzSBuRpuJYcScULUkB7sU",
  "key23": "2B3Q8Q9aTJx7PF9yKFp3wZ1ARRfT5gCu1XBVEf2gGZKGBkS93v5n8YxkYjvbq7kmDgob3ReegSJHQ4iF7Xt8CDWc",
  "key24": "4mXRrA3GsDTNiX5m5eXXjZP1omx6H5eouHStQSKEcnymKPyPKPbW1Lj9HQGoQBB7woQQk86yKhwFWUCZTkN4x3aJ",
  "key25": "4xB2Pmm6k34JHXZ82EusddnPmBp34UHvt3rGF67r3hVtT3JdKwDr7yMCbQBadGhbq3AqmYSNEs54kBixBwjtFVqg",
  "key26": "52KZJcB51RyXj3XNZhvQGYmjq6s7ome6Vt2RShfpZzQwrKuw3Gs3f4HhZdBwuJsZKbBgrLUyy6J3gEH84mGFfqEZ",
  "key27": "2cPpsSuLoGGbJ7SgJwiZLXsbauDAkQtecNXV8DkDm3MmGrxQYzZzhNLpboXrbMruGT329EpCN8una9YfkmJ5KpBW",
  "key28": "4gzjr7V7m6Uz8gNpvF4TganjNacG6rdVNJLTUwnUAVTdWXBSaiDQPAEYZpPfeVn8dFd32T8sTk63AKoHxjS4fNB9",
  "key29": "JPRtE5BCPrKXy1hpMj39Gcxtnjr3MPsk1FTikCKDfQ7oX8kRu9bcViCU7UPvXhyGKHqVDqB5RT8eMFTQs8zuG2y",
  "key30": "3TA43yrAd7JAhd1CEQmX3XVUNRdzGG9oNk4BpWSFGU8BbdNAJmQ7o2PwJvgvKF9dFcCr9GCWgtVr3tbrw6ZY6UBe",
  "key31": "5cNnYpH9AqMyhkfHwiby1dnQL33Uw2zngZYaNXD1YvGRSWfazhDLii7iT6xkKaLZjounYgqoB7VwHXuaRKgrP85C"
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
