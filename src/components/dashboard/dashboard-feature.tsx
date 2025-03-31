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
    "3v2YE2yR3FNfuQnd35GyWJ14fhYajmcjGd68jSbLeRqTc5y9cUvmpHFrX5u4JDZcJB3c8L9wsthiwbokRQ1KDcQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCfer7rM2pnT3DmwB55zaHB8aWXvPzxWogFyRfpMmwvhcw3Mh6PugiogipYQeT5B5nBuYcCY6T2pHP47AvkeFsk",
  "key1": "2wxpfvyNUb1E7CZin9cSD59fQ6JGe8LH2FTMpgdKjzrN2N7LvHCzohYBFL1Z4QHi5HdVCGumXqde5iHhqYyv32kG",
  "key2": "2vbAhHMQ2LDZbMzCyUgKxbCps6Wn9eJPmoBu9SwBJWSQ2iKsKgxSjUK6HX8A1nXqNqsRLKVekAHPSNwA6TyoQNrt",
  "key3": "4b91ozh8uBGenR52csU6am3PjL9aNWojbawwkVQHCafSZyawpQ4EvU6M1H4f1TmMBdArBQn7VvT3rSu533yZ6Php",
  "key4": "3j2ShA2acs1qp8L9BBS2V2Hu4mPJAWL17nRpMCe3yqwR5JHD3btT1tmJ4J3VukLuirhxCadFLtSJSYxzGjjphkzR",
  "key5": "37fBc4mD7SY8gvoiQoaGoKV4ATL1bxd9H2BzAXpZA1ZR5472CQPjaTgb6cWRMUVAeACf1GVT1u26dkxAqwEmJDVS",
  "key6": "5EGAcXJjurcoW7aWyECEj67H5pmqx58gy4FAXZu7GaQAhWU5fKpyaUBM1b5hQdnmjsKTP848shwbX1SPG7VfUACg",
  "key7": "265BgyygaUEsEYMpFNq8ooeZGhKYY2T6U2amZqL167rkWJgUQkqJNPSiE5GDGZjb9Ax1vrjhN7YcdZ6HSV7TSHKq",
  "key8": "4p54fgqrE6c49B6M91pY9ia2Rp9oH8YD7A2FrGjHSm1oyCxpgejX5voNVnuurhnKR4fKbXuyxjLKEJnfvefGrZR2",
  "key9": "KYYVY6VJJ2fhyshKEzzEi9a9UKKU8wJhZdEd3PSGHd9MgX11fpKjjREYNj4eFjugBfkeN4gVoPj9y1xTnews39z",
  "key10": "4PszzbUEn2i1oD5ThStXPS9aDYaDZZrJAPBvk5uj6CUrVQzreJMHUWgbpLN2nRHMVsoSLs3Cj9nUzbobWbA2f45V",
  "key11": "67LgS7CsbAuU66e8u663Yk4ucbeSE7QU385eHXKfhiy4i5EzD8ptnkLFCd6shLUAcJ1bQcVvVuFbKtUnXVAenWV5",
  "key12": "vKS9mmputP33qnAkUnbk2sfedYJZHCA7AZjcDHuUH3WE8tP1SL2ZV7NWzJLYf4hvF4ZnoB3E6QgfmDMrDqHnpF8",
  "key13": "D5svLGd5SLfWJJ7oLwj4aEKyGvj38ekyTez6sVFuTNteqEp2RYegnLM2MVZFQU4MixyKq8mHjYApTiXJ9aQrQPj",
  "key14": "4F3gmJXaoWgggDbAEwE1G7VoWCy1m3147e9GL7yrz9pLMV62Hevg9saEDCZw86gxmT7rugJsuVtMeQmGLkk8pYVv",
  "key15": "mkRyM7ZX1dKbofAAWMA9KPmU9KBBdhiC4aLQLLxxzuKQqSW9cWwgHAbtxyCBwkvgf2dg6mHu5K6t8koffhMbj46",
  "key16": "5YbqX3x8MncdpYgwnoThteZysD1CLe4fzD35xSvXSmeg2bzWqLHfAs9kiS5ogigYVNv8QdhCzRx5JPw1XWN3UWfP",
  "key17": "5S96DxwbDpwUbKvYkvBnk7NvPTSFp6ztJHZJ9rgRiSZF3pzeUUYNFcZveKSewUTZxco84BkqrECoUGyws9sWjtdq",
  "key18": "5zCyfThxNrCboKX83FDcgayCZ9K9Y9ZHyem1j9zMUYHxPpGDmuUPDQiv1mwGKUtuTwTMmeuoQ4MeS5brK64guT2V",
  "key19": "2McybLj5CJcbS2dyiKzk15vteFnwiWK4pTd3xhRoPYSQ1sgMXsu1eGdxVit2eyfTxXPUrxqjeaKGb3j8EqyXqB9d",
  "key20": "iH5ct8kLebA2nmWeH8k3wbbuuJVbX8f6ecgjetZBWbiJC4VbBZSLFs9ocnvq4G2cJMrthSiwKjaTNdkD5tg5wCo",
  "key21": "2L68PGTdzqG6fiANk6P8HuTaCh9Hf818evtctXr2TBTQT32bY3NNdFTAH3RWpvn22WAcE9oaZcVYg7nG3Da5A371",
  "key22": "Lv5sbtK14DYuVYTQWwNxZa4vGXvqBYHW8RXRGnsgX8xAJoGsUXgRrnU8NxcRzKqvT1qY1ue8mTPjejazCEKXhF9",
  "key23": "2WQk8b2pbwxhxMaBPFnH1nNTGHza8ymLWVVv3HpnUKVGfL2DAxQ4WroLtk9PAiS9iyHXgsUmvSgHRkFHaruWbbDb",
  "key24": "2rPvfh2DmaANQh3o75V2Ncs6RZfzBohLS7k6oEpdMGgtEyZe9rLXdMKHwxHbWoV4dG4i1jXueQkZ5AwcaSMcEH7E",
  "key25": "5Vz5kkW5AAkKjG3nWsAHxkcZRtRdHgGrpNGbp5XTQyhAGjrVkaPLf1ZNFA4cVGZViWH2Fxtx7Kgp8L7micPRte4D",
  "key26": "5yxUpW37ciQ5mnRDgM2aojGvHmR7Yke78sgs4fkAnxXL9KdGZMSZrcwyfbjZCm8SVWjs6un24PbANCtbMmE8WmGL",
  "key27": "2qAbnfZDCKHFcFWqbC4D5dyBMzzQSCfsWtq8tzBb44rqVL2KkpGeHFSCJxy8sKsRNt6sJRHBEgbW81CuvgFixWeX",
  "key28": "SZot12E7Us6Fg243waMrDzbMscH52viTFAmVRPusQcDz7RXTeHBWMh1uj7fzPKkUpEwH5NtCGqeVQfvZqKjBaQH",
  "key29": "4B2pXFUxHv3afghH8kJyUWnYMxeXTn6138NmyxfbcA29uioVBaubGTbHqosc2FFEZjzkdqaV6C46AeJczyi5AVUg",
  "key30": "39UFPKmwxEaPywMNEUcRBhAogJ3rGxpBEQwVgnYxDNYGRKgjvxcCjDHurXeiXFwrirPiLXFo1x9X91G14tH8prTZ",
  "key31": "3wk6XJBcDAAEy4PzzFo2XLDug6RSd6PExueRJZzbB7urhaWXy5AtzWnzhw6S6FCJFs4fWBb4eoGAZTbwJ9AqmME1",
  "key32": "5bcjNyN8vxibnrvSbEyDtoprg2WBD368oGfp4S88mfhzHPQaTyr5h942zqibhNTxR1EPETWJ4AycPkuUfpn5brEp",
  "key33": "4fjuSaEPRngqDYmFbGVpUTrFyu3DGkrmk44i75onB8yjdHhQMeoUt8fNTLg6o1E8Hujh4uPvQHKLKqzGy6okoWjK",
  "key34": "3hqzW8fRMan8hYgKV7eutcCbuS3qKfao85fsnfB47hrJdvAobfMBgd1fsS3xZJLfVZV8HqhVTx8GkzRc9eZhUPzy",
  "key35": "2hcJUyQ6i5ca7Z2WuHgFB3fze1gQS7vtmnzr1udLpPywrM7ptw3gYKRNYD4cBwETh495kxxneGfD9CHKc7NxkTpJ",
  "key36": "3RP78h2L9PkAKjTifrPZaHcpxiztThA8u4UvBWa5vB1HazMFu1JmEZJE5pJR2pk5KYGS2yvNGZmwgkhMBQSxioqK",
  "key37": "zybQePy2ieq1ae8MG5A4aYLrprCYAWwZn5RNwRLr14zppTX3aYNg2benfMjqr2CR74pUPJL6vwv5V7pPTrSQi41",
  "key38": "3YEyDB7onuxQJZPwotZ1WUwz38TMN8hX68XNNKPumzNFbMM294t9JTSbdJjd4pLPAmRo8wnugWSWCvFgwRoSE92Z",
  "key39": "4fQiNFwG95DRJx7kEBTe5HGJfB92cfH8MZRyNakCDjCTCPPmavMahZaatCCvHi24pkjY4DDVr7oN3nXa55tdA8jy",
  "key40": "3dB8pwzejYVg5yrZQmTRtUWzGkoeg8L11sJjww7SDuN6fZoNM5KUn8dbvu7F4ttESHsoThuBL3VykLf3KtVoSQy",
  "key41": "BWCuRaVHD9vEVFibGrgR4LL4hYg6WAfYsVf3YsEUEyjbRWPdAxzT6TJ2vnfZ8EXj2CAuXt7Lc17X8MtgSPbBsWt",
  "key42": "5f8CjEQJfigFPQcNtFR1NNqDTwRhZkxovjCMZohD8DDNDE5L12Hp7vEFhfxm3AZKuFRpappZBgWgXe9wYJL8UUnS"
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
