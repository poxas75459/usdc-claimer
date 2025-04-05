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
    "4vq5eukvksoyHm5nUgHCQVBtHJmRRHd9SdmpHg17uTxKhhV1utCcDTMpWegwTZhXwCgF2FT6Gw7nNg7KRUywi9WU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4nBQqJrnFNAbaJmdDtVy3YJBwKnWugoyPjmLKkhcjRnZhqnCoCjfo7YTUPGzAGRqT6cYYLvHuFwi9xUkZK5HY5",
  "key1": "3k5Vrx2gLWLL8NcjfAQpu28WwyLZ5chPwt1oZsRgF3yGNjGzMmFkASAfvXxLMURjAyMYFbJpPa17EoT6TsksSmBV",
  "key2": "288LBbkJX24pDMeRn8KmLLNfThRVfqwyqLiLteUZ2ue6e5GkiM72f4ox5KTUpeocAwcc2v8Wio1wfGkDkUtmnRUK",
  "key3": "9Ju3WJDLxzVtrYzL6WmxhjfDSP5fgmcJhPFa2cqaY5KDE2efqEufJsF3nb7RAdWVScfWYVkJeYqjnEMekBvfU7U",
  "key4": "3rzESkKxcCKbNWg78cuxQZQWwkJoZnKJXbgFVPakUPneZWZSiqcuK1JVmMFsU2ZD9tAYvvSMFWQkWmBKg9vFC9tf",
  "key5": "4sFhFgkqs9AcSknvBBsWLPNgP66mp5nqd7YgqGuBjAYgsb8kf2mjihR6GrDVxXfBfUdYzfy12LncD94avTihrCyH",
  "key6": "56AN9mrJomDvNcCyArxJLGDKUEMaPegnhMpzeqH6qtGS2DLKB2UnaMPYgFdLQE2n9KaZxBXHouPA7RLq4pCP7KAC",
  "key7": "cKmJFhtz5RSTMoHJZi8haoLnHH21nWYrchDoQCRLy3UXv4ZGRYGszUDcQYpTC2pxmE6qrBUeVNMghKbm4sd5mvk",
  "key8": "2hwY2Z1Jrf128WZ539kBSVUCGJPt1XjaL2axS7BMR6XqNbNsVjUxVrY8L5svDp2pVCPzquz3YrXBdYeDo6VmZgoN",
  "key9": "466mrcdACp85ihrn98YLjsNdqRFQ81PTKXDT5iQvBUAY9xFvgS7bs9Lae4tEqHu9vT4RGn3BGqK1Z9NBhxwxUFJD",
  "key10": "wkCc8wo3QB4FTdXtqRGmZJgjH4Ffj8RrKWapXxPKUHJamhprszaV77RRRPrhDipmnUQJEKrryQpcb9cH6rVaMdc",
  "key11": "dvuE2T8NGWA6b3sTwqUzL7XdLcbG5HBgaVzGnx1brKsGBZs3WbjqzSdL6fQYqkDf8FL4hiBuii1BqTJ3jwK4mhX",
  "key12": "3Z9z8HsHwDcUFxyN8pXkdyWXuPFGfXAceJixngrnCHfEU211HXbuCMCKnEp9yJv854fabshoQNR7RVjcoejpkC9H",
  "key13": "33dwPf19xtnkY7HV24WSaURXKyniRofNTjmsWjzgsoqeYkoGW2maDJQryLjAeqE8t9sy2w4vups4xVsLkS8XUXLJ",
  "key14": "UWCVnu13DJK1FvfZjwGaqxW8y5Snj8icMuYLdGNyeWymYx3bsm2v8cD9JVTEChwi2GcTTavXaN19amwGxGQVbby",
  "key15": "5c8G1gdzFksmdGMH5odRxemrWoEaPJNweJ5uhj5CkgP1utxtw4sb6xeHpZPi8p8hJQJpqjfqqBRaScuFib6UgxMk",
  "key16": "4hnCnzRFY5yeBMb8Q8Ww5ffzVtfuxBZxC3YfUpxztXTbSsqLZvedUv1MjT5RRDoTxDTht9cm61pC8yaLsBa3wP6J",
  "key17": "5Dbqzuq8mubJ7Q3MUGEvr28H4Mr5uhbmTFKK3xokTo612uqsPrHE5rV5Ay5wjiqG3LohoktKNjz5SvyuD12MWepS",
  "key18": "4JfwY1uVsREEPwSaGA2HYAzRjCyosa8rm7E5E5MvFEWDxeacY2yHqDaj4BmKfTGxgAqnTj21NAPghgaqUgzAo6d9",
  "key19": "3mHPe9A8Wqfrh9dpivdTtPfvQWYo99hC9E8efAC7UmUUvCuGDnN4S1Nu4GJx7vGEVNpf2dQ8F29fR3LL1T2AJrjJ",
  "key20": "4CemRYkxwpPFrb2SKagqiG3MphkjhCPthzGp1sD7VxKbxiDwfvA4PmFWPuzXpGuCrMwcMaFsvyykSZz4NjmwA5GF",
  "key21": "5HFZuMgMkVD3PjV1H6g1zm4r2AQggZG7LAnm2gJPKgqfoCz1Av9otJnj8aj9bLZHkaNcMbgm6aWYrMPvo6e1j6fb",
  "key22": "29zf5ntCTHx85CbhyUGkbgu5xuEDnf33mdDWyeqNEguvtNxBwNZ4A7odyJk4WWCQUKmEkteNLRt2CD4Tmp8NkvMa",
  "key23": "5JTW3sCnX96RNce1isFAoPDhgt3JaADMeDse6oA9yNwnMvh9KGD7Q8KgAmdYGfcHFwodhqdNaRsRjFi7QxT4kijs",
  "key24": "DCr1xBe2M2vi7yfRwuRCzUN9ypsM4eKES6j8QjAitWvv4oH99SxvgsEpr4xRuSZBzupotafNvy4J6ax5mBd3fLn",
  "key25": "5CJzPMu3FavMpAEAMnUg3GbQBB9SEXksywfCYs2mv4WqZMjTTV1ik6QXPR4vQfFxdMELDZnyqbTio7xRgqixypgG",
  "key26": "2Wti3m5eTD1YEDD9xxcuKtkUyZaoVGXckPJPrzrhCVCi3APPQ8zGoY9Rrjs4kyTWQUrxwP8GjVP642mPWpza6N9R",
  "key27": "4thhRYqMJoQA149NGzX9tGEE9bxowAJGp314jHQXqMTce48hPAhWUBDbJ9gnqmUe8wL3mSjyJ9jCDFv36MVa5yFL",
  "key28": "2FccT4LkTRcf7fWRztfU7L7eoqhqt3JZTCrpSACKyGGLiAosuBDNfjrenuQ2QwDqfVC2t86f9eDwxvTfTjcKwbpt",
  "key29": "2CCbhv33RTYqap1etjsaY7K64J9hKyihbmt3bhmWCDHuRnK35AfvhvT3GgYVt9AQNb1bJpQbpRyrYyfBJYtebUNx",
  "key30": "45W2mHsCVRFHkNLdwtg8MDybzf5qatyjDUEa1ti6pizjhrGgGNaXXsEwSuLL8P6WikeXwaujhdK5vZXi11kxG7ZQ",
  "key31": "xE9wswrQGB1fVdyvhZfjzmUPLhgX5GD4aTwVTkQBMNcBQ4X7z5Jstg6eRtTwMySC621siRE2GiiaYgnUruQP2gg",
  "key32": "2Rt2etw6fxoHKNZn7ktPAqDyDk5rLgintiyiVrYuah1YsNBNsksUBQNbnUNYKXFoXGvrZMVtagSVheXLuzZpBCwR",
  "key33": "5HRSupJAnuh9V8ByxCLb7e368ohV7S8wJytrAn2RUmmXZkJjR9FCFLsG5VDHDAYUh242tSBA5sZBT2Dw4D87aCSt",
  "key34": "5FL8whhWYJ3AgLgzt8FhAPyL2DEWrUq5R1UNJk4dyo7UJ7T4FvrPBVEW2A9927pqLmfUrXoS7JkUESc3G6ir9B17",
  "key35": "5gyRvnWGPZa1EHMr8WifAiZ2SDr7wB94CRFRHQUxqeaGiEzNAtY57EuTCvhhcAYnaDURqZYHv9bGB3bBf6J8Hd2y",
  "key36": "5k57G9aK97CNLrCxFLC638wdyypVDEzyDEfNfj2gAvKHuuor1SBWQXGPWpj8Tj3JXzmPYQUpLqtnh2YXyeD35iww"
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
