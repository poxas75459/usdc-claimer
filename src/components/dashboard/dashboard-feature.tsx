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
    "tt6t3PB6wKwi85GL96Ug8zG9UX5JxFi2EQakwrK5heTgmdaWxmqqcmsTLwvL4seR83LKUkwhWFiRrYvkhEmi6CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mSq7o4gkuA9HHaf9xHWZmJCBbhwdT7HhfFMmiTgWHbAGUkqPydcWex2rwLdxjonw9TUJrpNK8Tq2yVCNfn1Rbu",
  "key1": "4mGEieAQQXJZ8oN9qquxWQQ24oPaoyzyPU1Hfwet8gyiQSKjAiQfHYU2JbG5EURSBxmzHdEueeQtTpTzHMx7HPmi",
  "key2": "4FBb7Jkaf1agXYfSUzoAzGzkkV23ExaA258EtWuFmurq8tUjnywjU9fzfAot9uxEbqF7PJuZauCFnBP2hVCT4RH",
  "key3": "2CLoh7yHRBo5GadQgWmBjrqjyPzWGPpd74tY5Z8nGUr3UjatxGmtkw4Z7GUQh8YbpTEiFpo9o6i6rNVtQaGh9CAe",
  "key4": "3igcbdVBXcbi5nUo48MB8wb9jZ2pG8TfP2EVpgXTuMGrCyAqbTwocFURr8vHPf74bA9u913JYJbMJPs6GkXuRgNq",
  "key5": "5zdpLKYirrAm4McwzoqsRfPZ5gVdHJwAjtCTEnEVN7DBa5WkpCSKxYeEz7N3MfVJVGU5to43YD4g2qKJ48dqA5Vm",
  "key6": "3LsZL3mncbHmJF4VHdbfmrq1P2F8CWRCDCeTTiy1idWvf4xZFr6n21e1NA7yyChKTP3YMcYf85j639sQ6VDNwxmK",
  "key7": "61z9iSBvBmn9c26VMAxVXDpQ1bqMQx5722Wa3db9ydmt3ZwGEscUjnjgcVxzcQ26PzW2rFadyDT2WJjjLCbMT9c9",
  "key8": "28A2gZ7AoBtvHZDBBnukx8ec2BRCrn5y97WvEpcFFh3mWhGtNndUgqWcMeGgKRZ6skS3zKmh1yZn4W4M4suoeris",
  "key9": "394fPB5N9xLvNxtJLrd8X54J4GSUrCEjqEHuEqZb4JPst4vUAVEzPiHdJ2Xt7UP4zMngERt37UgYMaVT7Egw4T9f",
  "key10": "4rN9myXFQHe8j8F1xVFc8u9FQqpQNy3rAkLtFLjLTiENsoqkExB3bkkEHYz9E99DhW1jfu9X4uYGPn8PnhhRJcmK",
  "key11": "2wy7rZFNXYa89H8coGgydcQxFaeFEmohygzXhdLJRY8GswjtSH3PJR96rDhSf6RW8tm6w3zeNT4E3qScsr6UYXZH",
  "key12": "4WPKURf2WsiVS7HJPUdJLwGh6bR1d6QsDZyDp2kKpr11a4fQmYwbtiZ8H1YKo9B1t8jPNfVNwHtiha7bhsQpsnnU",
  "key13": "4TrCg48fcMKa3rjWUP5QjUAA8yjUX52RepCVqftVVVqQ51hh2m7UZpK8ZA1nToDYBVJD7pgdQ3ftiaWVbTk18rZd",
  "key14": "26kfFJMm746RrmBbNJZkWjze2ufNQPGKM7rXBA5yzWKTZfYUyYq8AYFNSBniNdZbtzMGeNEuSqf9mQspnqy52s98",
  "key15": "3yLv6GMYtn2cmPY79RpaoAMQvSu5fnajqowwhZVnf46sNbyggVfTmJXu9QA9StJFH52zCK5C7jQskt7JYg1U33d1",
  "key16": "5hxMAzVu62ZKXQWS3UmQpHezBQB4fS9wMtGQ1uH5iVdo3DrFQ9fQxXqodozgoHofej5QRtuo4SEWWCkpCbM1BkEL",
  "key17": "129qGegjqMW9jJnqxPZ3vDZqLQFYAsrJz7qPu1fYP8mgGLRoBZca2N4SDLQadYUsB99rxoxCBznRcA1WdHnmvCY1",
  "key18": "4UDmahDUmy8X3qPX4Us1wj8dG6HTTwzKYPaHPXabUwp9ug1nC2j3bs4DSG9QUju8D8qu3JhuQc3Uq49caueY7WRt",
  "key19": "sv54zyFVgMcJZsXJFRjP8YZLmEEbFe2mGAM7EJS1n2diH5X5EeYb5EkWPZimnht3mepWV1S7kn2UVES59kuHPUK",
  "key20": "4Zgyri2uQRjVvsBQoWwaug8ovKjdDLpxSNaADcCwcAz5R2EXzF8o7KduS9s9Mbn2S7mCeGo3kVUrzJokpohoB7v",
  "key21": "5dx44xgeVZ8GiswufeqoXGmSz2NGvQ7fEfJzthEdiAy9oErHaujTeD9dDUp1jKLYUfvyHr3VQRrzbmXQqNptXKY3",
  "key22": "5R5HC2uX7YFcbMmrFEsb1NRyidppfTNsYPr8F4Toxz2gsXAQ4QRJLKUhhjcALHy3pZEVt3xR5NbJtUSiDFNqDbzQ",
  "key23": "4wX94ZXnXR9KhRN65j1bqKaVx3jBrUMNcQzfjT3NygFheRztQfYyh619X1cTVna3aLNzLsigsrv8KcbpQ5sUSwb5",
  "key24": "3jtpskvn4qcmGiei2DQh8Mv2CuvJPNzEwLNc8CBHgxg28ihqXdMHiTTVpNfZ8pF9Zma7Uc4CHRB6MuBvmrrDW7nv",
  "key25": "48GFLDNJDupBvbVJjv7PFpPqoCueJm2iqgEVo8THo2rQ1v3Pabp7eP2DqUiyBwYWfELUxsvmpCt2sf8eh9QpAYf7",
  "key26": "4pSxvncWtcR2nqmtwcxffvxHvw6X5HN7M1y9dhkFJv3JcW9FzV8uzKcgszdat5GiAj5yk33W4PNB4FJ9E5Z9k66f",
  "key27": "4KTX9BUuEpkUP9zGWJFWxxKV1tm5aTVhTZiGqqLUDS9G4JMMcXdfo5eRrvofpgi7euXRehJtR77MXVb9WkjDft9o",
  "key28": "6724PoNeUitmnqc98gePVRsSshfCG5C9yGJ6qUp9txNtks3AGbsJG7mkFebTgjggUx7798ZZKTKxzuf4ewhD3cBc",
  "key29": "31wLzYGKzjLsoB8eBr6NstKizba4Ri8V2pLnZYMvYwhMTKUbLGAkcL2hrVc4MRzQfbxHJkV4KP1ohYUa85z5dY75",
  "key30": "41t2a2zJTT1N51AQUe7hMfn5cEq8kgKdBo9PS45gapAG3rKEvvfRJbak4sVy1GyYPJm4Fae4mxWwKEtHJjiNvZe2",
  "key31": "5ruwMhSFBWjNrv7TZDeKe1VMKZDDTjZdXenMkvLsfiMyBzEau8EXX3HNvUZcXfRPQn3XjYqStqK4JNHHSytiL9r7",
  "key32": "3xTKCmPZknWLZceJ8gkLGiMcYM4rSZVuEcp3nefqhzXvUrtCqJep4zLhmyqs8qD7hPuyumbXAhCobxpS5wSHkU5u",
  "key33": "QFTKsjWFqHTrpar82ANUJKoib1Z6T3aG3hRduTqcREsvM1pRvoyCtGuBTE6KqDeKQyV8yFMubWx1kY8dQGs6f7x",
  "key34": "4tauhyWf44oGiW8pYimkBxkrJxusmbcp9corJZJxQNL5k2jL3ZykeXFaoKH21uxZJ2M8p8zt1C8tZM2ZNXjgHZUA"
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
