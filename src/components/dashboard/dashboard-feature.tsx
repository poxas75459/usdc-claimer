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
    "3Sib38jxAfiagApn8Kz7ahY6D3Tbkt2NUYNhdNYEwVhBSR7LpCzQtEzA3BwkbCQszi3p3Zwwadrb8hingxmcH2za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXuXexdTAKnibRj5TzfjeC7JNhEn3SwYB14XFRtd5JRx72Qr6ubDoGsoB2tz89VArdhSKX9ZbbmS7fWZkAXE5U4",
  "key1": "4d1Njj1vTqmfd6YSiBt5t9PUqKZ8dbUprFpWntaFJifpFNSncN2AMWY4o49cWt2LTfBaVoA8fi3DKGSvDjvP7yQm",
  "key2": "TEUgpKjGvmaUy98P1LkpUt7S5MWQRXNTd7XRLnRtwrm4aan97cnqUrLxdxZoDwEUhvZAA8VVNEP1yEaDFzzFUKm",
  "key3": "2sBsYsjkEq9ARSvPb27aeHYqVqrdYZW7nzomoi7KG5xvuLpyxKbT8fDUrYtBkAa2CnvTc92C1hUYmWoBhDUGNU5V",
  "key4": "z5WoJDC52rXszUNq36nSNiRnQpU1Sb6NZahaqggHVSpSPB8dNPW7wLr3K7bfrv8rhfqE8rbpQRp1nsKsqcZFZS1",
  "key5": "4Hb6FxK5TmbJ1Eto3diqBrTb2mJHJxjM9VrmRF5CktXtHjSm65v3k8KecUjgTv6kxhP34gF5QzC8KsjD31CdbFsU",
  "key6": "5Hoshei534FPGbG7rtn4UC8dx8NRXUGPjgWHeeBN2JpbXhuZ7D5HoosDBGNdU26N11EiEF2m727xpCxBu5Xrdn51",
  "key7": "3fxoLRgPZsQMMzqkPAo8dBqKa1vr3jECaE1Cs9sDAkLKpav2evTYQqSPjPuNa4FaD7z6RXfpLa8udX46BGF4mo4S",
  "key8": "4dp3wEqdjRuP8Fag9GMENbc4f2oS1Eg23MkjrRR3dnBPAT5FVKK4ywfYNhcma2L8xjdsawvBTonWbHA5JfZgxTEK",
  "key9": "4oHB1Qjgkpw7vZb7dwiBvvaMSXWx2PMo67oGTVVDXmubgR3dVdb43s2DzR1NoxnXUxw4VQyoMPphexwVa185kwhm",
  "key10": "3nhaf9382gUUdnqH5XtB1JPiUbnqVSuThgSjVNGUtK2B3dzXYtRGCsSrXSs4RpaYbK1RiPZeTNZX2YhJ17drezkR",
  "key11": "2Jx7NhuTg1Dbw9H3KSoKPwJ9JVhLMY1CRx8emdHgjVJwnQkRsAdQ8XuCxLuXnRqptcBmZZyT2sY7qwFt2dwch8bm",
  "key12": "4137bvKZTvuXhoiTLrpVsXobBge9dMsX6qSV55f2UuzzVhpm95Hj5i1gmUBA941yZEA7mj5LCGbHrGbJSojjTSBJ",
  "key13": "63bGvMDdxzAF2FLsbqPXKz5xvQ9nagsCB4FuFdZegM5fcNfk1dj5GtAQ6sh7pDbZYJDnRxk9QqiyBj3rq7Vrgq4c",
  "key14": "SVx4rsgdzuWGWn4toADEm9o4rubdQATR8XRLpbpU8X2ksqrFqt1P4ySA9MEpXsMFTAqiY8MC9tkSGd1ahyYDqsy",
  "key15": "2qGqr92YbnsbjoPo99ee4tXQA4JgJCjivNbScmCJX5jKmTwkcAiQErbofw9MKjPZhUfnCYCWYyUfmgZacf6cVFSM",
  "key16": "3ojP7CZXWKxpsgx8TSJbPkSVh9vqpQXz5uaR13jnFU5tmn2LSMtsfr4hMqyprdCnYyP6PKVWrW8mbzU4QdRGaMmd",
  "key17": "2o9PMXaTFdjsbiu9uZ4WxnmcMApBjMuexTe2z3hfNuzMA12ZSBAShAjjamgY52sqiUZ9yUXyerLP1BEu8wDVUsu7",
  "key18": "2eaJ587iMZkQscaDBDepW99PRn3Bu4fmqKf1mNJyoHn9Fy8eREfnqsFF5CiptAekidc8zDQS1cz3Kqv6Ye6A5QfS",
  "key19": "57fKaxnEqjYiFf2d1rw7idEfgfwNvaiiiSP49ASZrQu1tF1G9rTGUGided27Y5azN8QqbGGy183i1UNJzrBpgJqN",
  "key20": "2o4svAFKuMBujFe6Kmgxyu7pEeP1oy8TkVogL1yEaZu997H6iishFMwnzqEv6GCTrPoQwKNVt7xaAuLYQiUgr99v",
  "key21": "5iK5yKw7jX43QCAbvbxhhgZqABpcLw2rSfRCTtFxD3RWkM6AsfXFkkHeanehwcPLQSmgdjt8ehZcsfau8X1vDLW8",
  "key22": "27wjgLRZNn6Q29aJDma9BUDJGrrCAkwtgBVmzunRRKRSfCMm4tb2yJuyioJgBp8hVbz8WjidBALvd9UnsT1RFAUa",
  "key23": "5svojEr8xZEyzJu6evxPGSfpkGuEgHFakqdyooeqTHx53fv6L9gSc7xncr1kbJJhJTz8tuJNTRAdMric1ckw26Us",
  "key24": "qjBrd7bPpZcXArfraupCfokGzEmuwECMUMMm9z1ao3yrWZeHWd2g5tR1iR6jHe1CEkBiHMLyLtihm9BYKicJ3Yp",
  "key25": "2NN3iEtzZttzvHAu8xqczHmBuUegk3NJyWM6oRV1oRtE2pyWRbbQPzQDxjmEYmupjZVEG1PQhnPggpxTbbHViNrm",
  "key26": "5UcBnvdQtebw861wJx1212JhwUo8Unkvax38ieTYdSnBX88Pz4Mx6cuzVGpovoph2QS1k89NDcPJxEjPk169AimZ",
  "key27": "2Gd8ykRVYSUSfSTcxBPt92KiZtuUzixhFpjUQNwoCyuCggfdhmZ9xDNHp4nRw8wT5WLtdzyY1BqUWiiXDZE2FBD1",
  "key28": "3pLqmh4gqyaMRQZDZ4zr5GTozs5vFay3npwfQot8QvwW7HazTQsVr2xUwzAVZbrramskiZbN82VyKj3QtgpiYuvd",
  "key29": "3EhYYQW2Um8nYMhmFtzqV8Prm9rjvWofEPrtHNg9do6WXfFnhXNt3UvEwY7SzgzPecLePTRPNWRcDqYgwgJ3uu12",
  "key30": "9TAmCwXBUp8YAWmUBYM8xc6vSCG4qbmmf6HkLGrPatxkSQnGXMEEmEggeXidvHce8De4FdhHiR4HtKfduYUtZuo",
  "key31": "M5yCTHr34nNdHDpTUeVgq4udkVyV97ZiHgLCh6We3vsiyHFqfTRXKbZ7tKwKmNpZHjkqhFiUQPUPjyYk3DKNVwX",
  "key32": "5sqXWYtErco7ev77CMFejHeoEZxtExBNLirdbqYbkaFqFc2pMkLZ34RS1bCB9yK16GeQBZX3hWL1dENJz7KB3ojj",
  "key33": "2WvDGYnH4qvG8dU8AknxtvKn9bTfDoKSUepAnqE7HHy5hqgKRs9sX3yeEF4BAVnvqBWszyeKVsGzAYsBckZ7yMv",
  "key34": "czFxXVv9YT7iWi5z34MCy5LNSxyMwwvkf98NTSgcjavW7XWaVEuxpHk21ZJDVfrHbqEw7symGBwkbFjtHg67tGi"
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
