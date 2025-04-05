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
    "5DpFHyDZvHh4RgBw6nNRjw7wUjJBqqKfsCqej3tMmBRx7CXvFVcp7DcxRtzTkyTFNSgapSPC8umiVGoAqwe18Ssu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJo5Mo9nGmFgdoWVbqnS3ZzaYaTjhXAMyrVVZ4NkxBx1w725dYLbQMSwBbpQzHgX25CVNnr8AZTqPyVcvcgwmd9",
  "key1": "ivTGTwSNur2BW9DY1gMjyzrHb1sEpTBEXrmEJJbADYHRNmnUahLdhbrkHMkLEM6khHQ2hy5UEjGJaE4sGAVPgrw",
  "key2": "5Ue6uWuoG8uWFkaX1TADvbAJdScMh3NqaPsP58f8qUAjrN8Zb5twzm8CHttb9WhyGvR5WhtMBqruo5udrc2kZXsM",
  "key3": "5men3z3JfNVjzjDCfWgJjaUvWPCwXW1TwuteBCcQedfFEhCoYhjoBe5qvhQsW2rHf2vr4xpCkC3iifCW4aB9Eqfx",
  "key4": "2ss6e4trU3rPHb9zTYuCFGMitaM7ARY1pG8NVri6mmfBKa1K6KgNrzTr1g3RkQhC4fK73tKgPvhBP78MoRsWam8d",
  "key5": "4BGg2VHWLqFH7jhXA1wehfjwMgw8CSeVutJdbzthHwxSrD9L47AknGVZ4WJL3TVhvE2aktuMJQ3DzfK8jNkeZRaT",
  "key6": "bYv3uuN5YkD7eBRznJwSXpaQuuQzPZnBaBLoanUoxdSZQnsUGr4nuod5CbYoBALVAUQc5B5LBuSBCk3bfiBtPuB",
  "key7": "2BwhQTtkUotB3yffDZdC728eRHA5PSGhytEsvFifecCwAX9xDzsH6yuaJucVKG2A3frr9KQ8unMvsff2MJ2z4gay",
  "key8": "k4Y8rHgsFxLbvtuegaMiC5QmjdjJxNhL62aCnM4ykw3YVjXoUARySErbGkhBkGhRE1pV9H6CoSauDgR1KiBcxZ6",
  "key9": "2D8hN5SzLMjdy7VXHXQBM6eq433akD7m4fP1vDuqoNwFwe7E1pf58Ac36bfkDW6rnBYqkr4QchyGdWwAj1KG7Gx",
  "key10": "2QqsXegz3Dh1dfHvoTezwjiuEkF8HGGacHninB8mVChpnFRxiP9NSi4GTW3HVZWxL8F9JnNpighZ91ocjR7Rstda",
  "key11": "EZBkAKewVLVWFoziQbqa8ZohJuGqjmgJR2XSJZCerG39i73zgSURoTxxwVMYd5jnBGUACx9sLUBDAkEFdYPWhzg",
  "key12": "B3TQdW6gaBzm4Wp2PZnQAQZwoe4LMzrrTTZBf8TrW3v7XCWzs6qRe17Rx6XXd9YVf55PQSNXsdCukzovofKpu4A",
  "key13": "292T8nhA5U872Q1Qu4cuYeGis9GhXZ9DA6E7hGhNeUUJjJ6ZxXFzwKD9h1rrjYnZGmEJ2Y43daaRe4uxVSuSXvBq",
  "key14": "5aH6LyrbYHAeAEnST1Hfip18wdVesSCrTKNxWzfJ7W42UqvanyxYqKbyaFgFmzRmKZzvDz5XaxHtZhsiQfxey73h",
  "key15": "4tsipaB2bmJEK58HvhqXawBBk1TufY3rnGDTyi84z7wSkX4YfYtcCiMBC9uSkhjNxmzVSvVHL4QexbRSptgPvEZu",
  "key16": "43Ph3rJ3NPZhHSb8PpDLFBEZCwJMAHuFu8pjsHdf8qDbviHyDcW8WUuDkNRynStgzduCoxCqG3hN2mdzgmvQmCLV",
  "key17": "yjmgbxTkzbyhc1h16hwsVeRtXNyDphxG5qNiVEavwYsFn7qKba5mHmHYu7qd6DV83ShKycnEVFnJsz3SBEiaW49",
  "key18": "38zmjZCwBUwF7DCui6Kn6pW35RJWAHpmQC7KPatTr4BDPYwkrpaYqAMorYctA7AHbbv5VnHBRwS7Ts5qEXxVwhhN",
  "key19": "3giv9eF6p7ppPFNRcikSrpc9AVKMMaTYJEiUkC2HbZWbKqWQvi5fmmmx1hfBFMnGSBxg6iSwD4fNv1YbSEW2irQ8",
  "key20": "4jQ4PEMma2JveFxeebiCd9pFRggQD7FhiNmAbEkEBj8X26RPKoNkAZ5qMtGBUc2JvQxSRt3eaFFvGYsRzENiHYR7",
  "key21": "2fBnYnVUNooDDxhHupTaYLaEhkerQjxXZ2XnpEkA4hvx4NmoPeYFHfMb7dGrQikJsQN3LxJ1Zas2NhhKP7b9BSt8",
  "key22": "5SvpEoNLXuEecxxfM5v2Ch9oA4vJodJgepMBNMeF969cvArTxMWGUdMVEyrfHtRxy7u4nkpakUzBxZQJvZpNSWjH",
  "key23": "4LbTz1apZgamVSPvv2DUx2G6ugNP4vPgKJZw4vSdHAZap8QPLWYY5VyaoSsg2aLK1n2tJGBHHZ9Qd2ubwg4g2HLT",
  "key24": "3Bbj1os2QAU2jBUB6odduUGkrAaMbsy93SynagjqHQmgQWz8t8EvujrHixGBVV1naaxY3bsnLWA4oVH6sAtZK3s2",
  "key25": "5qabMdVDfC4i5brrBfNcZYzR2SWAQyt8UgHbEgtKdWXKn3DYrTkgGGyKDQiE9oXTYxRrtUTTGUkhTaZkWmWTkBoW",
  "key26": "5wYrcpc2guyiUL5jfcPfHAQRvEgKjn5ku2J9gdPmbgXLHH7oajWUq92jGZ5PtDVhWMD6JZt9sJVjBeUZkVtEsofd",
  "key27": "vqypy6FwbcsMbdbZcyLaSawE1ixEh1qwZoTa3U68MznrHtbPZHKeSbab9NMJeeDRAK4UhFHZMbjJx4e7G785iJA"
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
