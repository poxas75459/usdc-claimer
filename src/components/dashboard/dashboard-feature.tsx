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
    "2ea8s1yZipJJ4Bg3i4ZQDxPaHL9E4RsJpD1RF679pC8X7fnEKrxtfhu7ivnGJRtn4iMgGh9vN1mfaJf3CLPQBEQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRxbkW3PKppQjrPsj8KZ3jcz5PWWcixsuzakD6aD6w817kYQiohN2YqZik6ni1WDZ6QmFN19pi4euxK53Z3Hp1X",
  "key1": "2moqtUHNVpjiLVxQYp5s9NfFMnHuB4WuZomG65LVv33NWDA56Fr5FdL8o1KLKD8HrB2SqUvHQJUp5E1g8NQgKHUG",
  "key2": "4JWhMD6B5gubPxE7UVyn9FYSqHqGYMDfCz6HvvWYNRoqAsBzf6sNstCTmTuS3qsmuV7dy15h48zDekDnerESjhqe",
  "key3": "5VaPrqaKyb25o5n2hMZ7zWMXUFjEFJe4CbQCWJg3D3GPvkmnt2cJQKW7ZGYZBqhVmkE4ohhuetmhhdDELVBLMAt",
  "key4": "5tURpP1RpSTA3wBP414Jk9kDnPuHaFvgDKbWoPXu4jYxgbsxcuMM1d7fNeh6ouW25eX2HBN36njBUCHk6yaCBSMT",
  "key5": "3ZqySp61NkFEZBxqcYWdkzyBFYBWi5unogNjbqv9QSMNcWhQYLAvNz5GVhtwPy9w5Yy9ByF2YJMqQpb5gkYChiBT",
  "key6": "3JBpaghWmUw2XP5hr99zT46i31nUiy5LXbfW1tuyLq8a5ZX2mSicG6BgDMYaYZNg5EkkgUxZ77gufCnQAavNDXZY",
  "key7": "yt9HM8r61xaqccr1ug8ZvwpbmHkmHvwUvwX9D9H7Y3oyJyxL8m8PbXEHsHEQLeXt6bvci3kb2eF7U4di8verRTX",
  "key8": "574MgyWyVEbYkfLLpGa34UR6cyKVHeBCnBmfSqS4Gsj8mGVEEbVdACM6vC4LyW77wx4enWdXLtHVR4ohz65rBDRA",
  "key9": "3d975ZdoULVxVU6eDgtEkPD6DN3HRvSpiVQ8iitckMR3yxACVqkoEyGy99aPQXnp7NV99KZZuKsvfwJVU8iFpqge",
  "key10": "24HpPUcsn288YCMSREGkJAxKxJBgTR3oEmevPZ51j32zK8sRofShx2cqNKnbVRDsQdtnKAiepYER14nHJuNHkf9k",
  "key11": "5iFo6rB7V1GvedABhHDrKdhs3bxWni1tBWHjxAyG13Hh9d77g96QBMvatoxRU3nd1aEeKJGAmXFHYriRvc6STBWm",
  "key12": "H7SToAgU2aFrnUAdYECHT3exd4qcMeGJhf3nU5gpHqCMpKCi4EsyiJyNWvf4Gsr19xy1c7aVKkEDeVN61U1jXuv",
  "key13": "48Jaado43akQY4dEXbo6FzhbJMQBKCu4qyeqxkvSCHzc7urjbfAqXrLMQE18TJBvT9T1X3W34U15uKreJG8YSLwL",
  "key14": "3G6mg5t7BgXpev8DUetiYxYuEXYRiZFRtPCn8SoQX8J7VGLyZiTnphisVUwab8SvcbgbybV5TfqREduKaFJm8WqU",
  "key15": "26GmsDpSsTrX6UinNwMLo8Ht5TA5EqLgaP7A22Ci3zGECH5dnZ2hZgCD3pGAh8GEkNeUYcSPUzMMTDDFwCGyaWXJ",
  "key16": "5RQbDPCerNnwcQLHzbvxta9qpEsGJ6oWUJw7SFdnc9mWjGGrN8A8PyVqmDDfvPZQBpFqdjW3hzC4Pdmh76SBJSbi",
  "key17": "4LM1zkKig3mL6kXoFpAbX5sxjQbTdkDvbWxfTLDMe7FGCyof9XbkYKFUQFK7dmKzvFDFz7kMmREtATRMykCSyLzm",
  "key18": "3igJbGxSiyj66eor8MHn9irh1Zo2kjmvQkfP39HBDgCJJ8bsTDmGS6fW7DjqUTXoziZkrTFUaAfPwPHMAmxR6r1S",
  "key19": "DisNA9gfXAA7erJyPNXGuor59hhBmvnDuWMAcSVA2ChADJwjPvExRuCKh5vGXgZjDAJTRDpT2QCwHBcUShxYnMb",
  "key20": "4sD6Yxs3Qov2QQ2eDusrVwkoW2pXhnUNK7Vi4QEBPn6JCHT4kJPKfbuMduzZVx2d3RE86bZrFD6cnKETzxbpXuPW",
  "key21": "57YJ7xgfkJfJPG2oAV47GqsdXMfiwfrR68WWQgo4qm1FGPWGorYL6tfGU7LJSFLZdsvNC2zfAkw6Cp5uDJiFxs1r",
  "key22": "4zWeWrb74bXjUYwqv2tRf7ruk4FbKwvyAypkyWY6jdAUawwLErUfnF9ZHXwEKefpdWH4ArdmTZ9HYHgqp7VMdMFK",
  "key23": "3B56Ws79jbkxrAJSewq5BUtWCmHEDhxfk5jhWkawWBAowB1f1rY7Rny65JtLguAwx5YqND8guLyZowBDvVuyWxf3",
  "key24": "scJremvzcbPAsAhi3Jiy9CyCkNMyatSSxpntkqJMQ52LRUXyFEssU1PryyhRDgwCQwgcZQMu4ZJ7H3BXew4NTbJ",
  "key25": "2mLNXCe8VsgZcVZRKWSZWpK8rxdK6C6pvBinSFK8D4dXdE8A7ebG1ar5nR7jgcFp1JLLtPXtVJeaV7zN5YqZdwN1",
  "key26": "4yFNH2Co8V3HcQEkMBdx8hP4YL87HctX48c16sQX51afz1mFRZoVjzj74BnfRTiAtW7QhrLMr6f86Diwxp2C3e2u",
  "key27": "514KX4VWU3MF1VfVVXAX4d2yd6TJgJayRR7xiCwLtRTavxhPp6NCk6FuMirveJk7GgCzKNaB7eVZsqMC5uCLKDph",
  "key28": "3x7FzuzxfuSXQ3wpN5HWJTsCTSMwJumoyJJEAsfKWLhEvfpoXzSFadVQqGEVDeVBY1QpB8UjXiV8iF5BqVe1Jenz",
  "key29": "4d5jECvdKE5eSxvCDmQSwj6uTmbGfv9FA3mYRSmmTofq8Cyx3iePp5sZcGwRbRTWy6imFoxo8RfsHqcUS4dXQWAJ",
  "key30": "BvcZmWiGHXguzVQzUqVt4qUeP6JxwrxRrni7BtA2GiPstuyMJXdsiyPJguVYE8Leidi4EjdoMrHByW4PWcggmj1",
  "key31": "5LUvojYAfLoZPrrjKWdutQkXCcugXzzdmSrXpZkk8JSXKfU2nwYtYCsd8EEJ11eLPm7goh5kdpjiG6qzxXJWuQZM",
  "key32": "2GpyzMhdTGbYSEEP6gmmgkvBhqDf6t2pfByNhGER7tEceeYWTeKmr6pP1X2aE9BqR47QDX5jguhTmoN87kPKxB6t",
  "key33": "2wwuUSxD715Sf6t88zVdQRp2hoqNGbXbucggadQpA9pnJKHEgvk2jg8j24V7BQ3JYx1yV1Ds3PRqWcq8UsboASSu",
  "key34": "38D4XGxuJ4FJpdRveZGTxbsXLMBKChCPTXsE3QazREPvGENFZ24FtjV34CvcLH8rentVKinU5dNo1f3mazNfxoHp",
  "key35": "5nzFxeQu9UB1SsuyJtzkFdn7Q3JEt6vZzjcPw8dGzsXE3cdDtD82u8faf82B6exScpqg5AnaYwzLUZEKjquHk7i5"
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
