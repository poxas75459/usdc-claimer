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
    "3kB77M2Pe4DicXLqWcXB7k9NKKBWd4GJnU4i3ruGzLwZDkpKhp1BveuLvWnwQYq5nQRP3c89ENszciQjTTC6nJFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbxFaB9LgZnQo8NvZunsG6sahRrRP5PYhCo1cSmkY4Px9gWdbzvbWurtWSq7VwLMWh6Pk97wuQvtMoRfz9A69tR",
  "key1": "2FLaMFHnX6AcfrLBELsQFZKai8sstkqLQqkroo6nNGCaNW2MTTgwsstNqzWxQKKdngcbPhg72jaY1g1tLz2s3X8o",
  "key2": "49SergCHUUcW7GYinpzvgpGXYGYg4hRES3VC4v6xbjnKUokp3M7PPfK1DoxiTMhAnRHfrteCcxHakajCZQU5qnLB",
  "key3": "4oZZfvSJHNvjMfwCF92FzHU2q9xG9NQuCAvRgSQRTd1YxXJAjUP5obApY932ZD2CdxKEhgm6bLhoivHLdYSrPsTV",
  "key4": "2UX1e2Zr4uHb3Px8cEptBh8FLPMec6RSBjjMqsi11VnkpYPM6tjzLXUTk49Pi1arzqzAtRAoDrXS3q39pp1W6Uh8",
  "key5": "2P74kJTGhqk5NfknT4tWrMoX8coxN31E3dRuESrxTUuGnK5n6UtjyVG1akMSbH6eQFCciqu2ge5sS6J9RgbQgp9Y",
  "key6": "2ib4p3KV3RhYDKoB2MDsXCKjvtxxDSR9pquAuUJswAiJ2W9Xc1LYbhyQrM3xgz5ktfXpax85SwpNVGC6PJdarwrb",
  "key7": "584gKJM7YtnLCzHhF77eVREPurAgYdEB3jYdM8bxdFNVGURbBnzXMT9TmrVw69sUxwzF3BomsvRC8faJeWhXoY4j",
  "key8": "31qzWhG3Cu819FNmp4T3xxkqqinMeq4R2Qr83eD4MYJ3YKCqXiMUMSrLNHW4oJaoX3TCWGy1PUkXGhCJfTCQe6UJ",
  "key9": "5d2vpRhogu5yuSwUnwwy6thBsq19jKd1oes3cBsWc197ksLcMVBQ1BzkErvvQAEUzDRXceu52J6TgK5c5uVUSzrv",
  "key10": "3bXFmkL3CURqz2CG9mHimf3eqxW8uMkLYF4V54DB81xNf8rpvH8AFqDzTBcpsLiTMBpPWGfDgvTNiJ1gBdD4AcEt",
  "key11": "3QhYyrSVPtrF8w3q4cwYvDTQDRd3t5YPD5V3n8q51eQZFJ3WuiZeg6w6yKDsrGTwygLHw1h4yyEffFnHrXGZbTaM",
  "key12": "2mGmyoNR6xizK7NDBA3upbRJN7zpTSTg5AAkcyBE2iusekGU9pL1AFZ6peykGrqPtL3aeqNr762Yu12YkdkypN9m",
  "key13": "34dQDM9iaQzJ2dUDvSpB9wo6aJGa5szKgyLLa6Ub4Z1AJLPko6DQBJKGhhZwefFueQjP3znDBDnnsFX8B3bHH44d",
  "key14": "Jck9d3ze9hPgA3ysqjLwU7PraeCohPjsfHn5YKWRqF1m7rG7HnFZSarCLR9dqrBBuxcca7LGRdBwPDraCyeYNZ1",
  "key15": "3Qa9LTnrryyRLbcaKTaSGoDDYEk3sgw5qPsPLuni8P9ADSxgH1BH5yUArSVaJPsCRPiCY3LBA43YYLeguW23pES1",
  "key16": "KNiQHHwfyW5cooeGmuSXjL5LG6idU2cBSeh6sc7oPCiV2T7wivZgDu8aLz7Qv1HscDcv4siT3agv7w4yLdsgXn9",
  "key17": "485yKBHgtZZLz3f9gVqCtSLr4rtNNteUyqniiz2L7YWpAounZM65NCsWZFjkvZP5x4uJRgVGb41DwcgudNEHsV51",
  "key18": "3sBfniqAUhFUkiu4i1gyUbxD1mzePNz8sJC1J2G6X4jbN61qM8VbAWAsFfNHp2A4ZbfChqhTs21DtLLqwiVQVGXz",
  "key19": "59AEP3B769ZsK6zRi4EVsjo5zkpNEsWDMCR3tGHUKtpF4Hgj6SJD718Up3Mm2HHSvSX7LWFVAqFKzqWYqhCBoGGa",
  "key20": "4ivhSZeiFxwEwYu4wEG612dGWb3bJLzPvSYdgrXxJZrfmcAKq6TvXPPBY8rhZhBCWrGL4q2x8TyZFywGeC3boxsu",
  "key21": "5EM5LicriAW78KaZFN4fEskqvNf6KPe74VZ4oRN6mFWWkLpi8bV2ASCzmSLDZCu4LWugQ2ZR4vo2M1hJpWm7dA82",
  "key22": "66qJ2bWafab6mBDrSAUqT7WEtcYps6Rife1XwC7B4GDYactGUNgNjCpqJH6ZUrupieEwN2vBJZafwD2i7183VXtD",
  "key23": "3uDKnfusemN4TvsDSy7jTiaaqQiXKP7PudwBZSpAwKrKVPeEqwg43fFHFk4g8w3NiPbVCLQwWnommLRxxKhQMQty",
  "key24": "hAMBaNHSk8nnD6VUo37pPdYTwU369GyZGrpiJBLEessaFjxQ6UakhPivF1ubiHsPnmGPfYcg1E5KK3YqCcrpYqc",
  "key25": "28Ckng43Jdz9ZwxLktpuwwEwEgsQcVkkeL8WiT4f6qUUnmwpKTmbNgtCUMD9CEXrgG5ZSuZFXuxBZDA46shoQQhy",
  "key26": "5aJfKKrnEtA7QUN4kMfXSYnRAWRfRcMqVRYEq1j4zK9767NRWyRYPT2TkhRYVgVtYLDEHB4zCPzbEzbkVGEYaPLi",
  "key27": "4fHnQuqujDrkHHYeG2XG5Ni8Mp4nnNr9boyaephKe1BfoAuG6YPAQo6gqtb5C9uU37FDQnmYQFzvCoUvenisCGTi",
  "key28": "3jykcK8EZYgP7GPGKfWZhgqmehav9naZQfnWzRd8mGoknqtczoKERvcZsT7AsfFv7BbCqvesKsnbRgWfSqQ8K2Td",
  "key29": "2GfTQhHqtih379i1iVhMcFpeBVdTb6M2JaaTVQsh1hBWfyv7uqfEhdZVLF9NqzReNswBxmDkskSAKQPsMbG2mwkw",
  "key30": "418powncD7AV4H2kJbqw3wB6yNmjk7r5vKX3yLDBBGRV9QqoYDLM7XihiQW1yAWDrLoU8pSmKy7BsTDDhvaEoJsm",
  "key31": "4pByu4gWEoBKPnTf91PkWQbnxc9TGS22vDaA7WrekF7HKUiCqVy65f2qKXhQDjxkYZ1YUxtKWuKWZRUJudg8GTpy",
  "key32": "3FGmvfoPb82DVbMUJSMnjehfGMuf9zJkFC4J9JSy9Lrt2uooGRPQcmSCcYgZr9Aoap6mTgppupjvPhyXXyGtQs22",
  "key33": "2bU3ntwc7MzfuEWyAHd5chQ42WPfZCguzEmjLuW1c1j7MFR4JuDCHhXXwUHgsLvm7nYQnufngh3C3gx1jehwUno1",
  "key34": "4B3PhYjK79i5A88heRoWyYxWA6A8oeEtyvYa7FtD6Enx3Xfuw9q8b7KvdVWq7bSWp3m2N8qqTyNjZUGiCJR6MXiT",
  "key35": "RDo3cEbzS7tK5faxZqD93SPkVsNrP5LBnRMxe4zvn6edSjtrfXqtnA4CLWfikn4iw2hu4xfxf6SazQtmNzAD6Dw",
  "key36": "5iRYFfHKDBSSVDLVeMjw9DZ8ih222NQfYGX2aDz3QihYsUGTY68xsMNqG2j6DfYhRQnTyjs1ei2ifLceosPWdNYC",
  "key37": "3abCcBAhaZAsT2BL3jdqszXqgT7VpaqLZhJVCK2k9yzxrQ2RGw2ntEhqzYQgJHWkQmkLUxcKhz2ENKFzzNtcAimM"
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
