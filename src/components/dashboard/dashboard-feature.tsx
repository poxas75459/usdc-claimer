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
    "39sBzQJXqTxAiSZ5FvYT5BAH2DeEHuhZNPwYhQb56SxUM2qfzyR2n24bjLRPwiPsh22ef94F4wNxetUzpvLqE9sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yx6E1iPyBhfwRusNnQ3zMP3EvuKSaBKwRKVFwDKj9rRB7w6tjUqBJwhgYBfVjc9pFitQuHRzuM9ZZat4wrwmeEy",
  "key1": "2rFqvo2aMzrm7kWBrQyHMmQUVQEA4v64c4V686LmyzVyyi4a9XZKypHynytrpCZpGRJJde8b1j9ZHcbXbXZ1AAPz",
  "key2": "5JhphaXEZLP7EiEHtLiSwVUaD1rMPWBu2HPU3mupAQC8UBrAABdRK8VzfZapshUAKm7gqBdEEayWkBsio2sSyUMM",
  "key3": "2rPYnSEfYGQ2YxZrpPqTnVRPFpuoD1jBhcvG6ieDLMJ6NaAdyGQAtK4nyNNxnREDcYaaeDXek1D5Ui9vCidf7VhH",
  "key4": "Ru5QKipE1kzeGSXTWc4NsYBqXTGrmCoXUa9tm85pyYiGXnDXoJTBvwL81bcCYCr2b5B2AQ6fPGdKwKandCfftFE",
  "key5": "4NU8oWDLTrhJfWy4CL7bEZsrWYPVnhYv1FYb1i4vfJNtrTHNzh9CRuB8qQEkReCJz7Fqa8PEDQyZfwtu35bVKrKJ",
  "key6": "63poGXdZed1YzPTmGM2TVdpB9wXF66Be7SbQtqgeuQaBUwWgZPyfbp8Ni2t4f58CU6prfD5n6GatmekfsLmNuY7P",
  "key7": "9ArHrhm8cAfx6QhJwA6e2tppxnjUHZQ9bov4smUZTQt3G8R9PAyuSiFtf7rvBmQ7fyeawV8TQwe44fFxUY5xE4X",
  "key8": "66Y7EbUQBM8FqbFX8AJiQg7RU6mMfBvARyYe4QHnKKx1rSYzwVQGQjV6ErZU8AnzWfTFqkAQWG3QyLQd33m1Ec63",
  "key9": "4tB7Dz1TFeLZz9T8RV3Nmj9Bue84vyEWbcxT6mF5mJ1qmiwZwpw7UPYa7532kN39ksKnp6NRmiy6VShiWDYRgQhj",
  "key10": "TLRt4KSBxvSkpusYGZSnnVwHiw1Kd6VzGby2PqBweNXoPtiiuZGDD7cfWq3Y1uJBTd57jxj4mUmSrgsF5JUCc4Z",
  "key11": "3hGJEBUVNR92MCJx2Qmo6zxkRx6ebvHd2Qge6ByFCgGZdW85pZ7wrXURjRLPZz6DNCkf6cYfzWjPvezQRT387gLh",
  "key12": "57knb2e8aDccC6w5PW4j1MRm45ouTA4VDo8suJtCivXciFqy1U9A3uSTCxsMSGbcuAjAsvh7QhgX7XJycDdwFqBX",
  "key13": "2NFaC2APtjWTYYa2SY6bzD9qTRrRpsXMEAUxfRx2sPtZ3tCn6ognigL2q3mS6ykeYL7hdcURBQ6vARidmpEPsstd",
  "key14": "4cKFaPaJT1Dd6N18utHFTo48Ej66xPp95ZAeAnDmTJzL4i4xSKK7368aGMqMuCeJxhrMdBdN2L4SFoNF1gMCWsZW",
  "key15": "2y6UNPz8ZBG144SRdjXytNK1DoRcKWRss3yEaBPaKMNvQRr4oACMsjNy2nps4Rt9eNVtqZFc7SrbaaW45qBKpphd",
  "key16": "23knMXnCCH6zRqbVWv5jmUFyCnmu4v9cNtwGsAYJ9aRPjpt1vHchXmQYGEu3MLeh2omtKWa4xA3woMVLTYAoiBsJ",
  "key17": "5yj9fVa2VWfrvLiABuhRWpg87JdGwbQ3y23fx6WU7dJr6c48QFeuBsCx72kphKD3V95jtXo9L36jH3odBKNS1Rbm",
  "key18": "2BgvD1Vscu7PLbzM4RP24XigyVF6f5Gp1jEd7uVzP4hvUMS1YmQ2es5rRhp4zCXR6J7m9A7E123SweQYsppEZeJ8",
  "key19": "SvYp3uQSSyLcbwEk2CrX7k38cDH7trPmXi4PjTd7uvqEcaboqyE7oCDKCqwEr2RxpAXFtMZaW8YTEUkftoWP2dk",
  "key20": "9nsvTa5cePz7fvg9vQW4hr2cTkeCdtMJNmt4pHCrB86jA5RjdCBJgattk6SSNipeCaczztZcrMZ1oWHjQjrHg6A",
  "key21": "VWqJ1dKnHCKiYpC4jYvHMsRehdy3DqRKvZQErqCjyTQM4DsKGJ8DqoaRWJivff6CG1kLwJ7JF9tor5JL9KZreTy",
  "key22": "2xPnxSxCCHcFSXQargu9dHzMPyFPwJz8jiEF5S5pk8KJyBjg8nZf4YjT5uNwyQRVL8VY6Tqu84pTTksMfM9kHtKL",
  "key23": "4RWnAB2U8qBy2EpV1anhfuzstkJeZQB2Riw9QG7c4YjXddZUApVQKKTcyEJG8jMTjyrWtr2f8SqcpLHo2W9YM5pj",
  "key24": "2sndofjeYBp38uDQasqveBSSgRCNpvpyc9mKYnDHJ8kouqkBrZyU8LGbmvVv5YqWkooNuixWXB8A6rDWYX3zHDi5",
  "key25": "e8w2F3Wy2uVFtv95ng1HY4CfsZYDYxnSuWr95K7pHTGbG8cSsT1NodWPp5G4JgaoYhdVbbvddYccrXna7QMWWYZ",
  "key26": "3Sk4RXCcoBiHKKR42JWtzrANKTN75bi8xZnxszVbhuge4WxTkNMMrAokURkfLEehqqa8XYkPxpJeXvZnMceHBN94",
  "key27": "M1Au6E62aVPtFxtnVJJsEagcsfWrc1YpLvHkLJTau1fgkrxSGH5sJAGDkcAwXxnCctKnTVF9o4m9mNYJVasm511",
  "key28": "3PQp3ZYCiLpsxv2mi8TSYbqfJSg9ghKMaXjGQjeM96wwZ5cMiPFoHtTxRQX3R7AMMcnzQiHXS8yHDzyEG7cvwWA6",
  "key29": "4wmPbwgjuV5avnMpLAnGB7SPetHNNQA7wUHCtknwnLcxYN6PQiprh4LL9ACiy22BtmUvc5FMQezbwjgDNJi85Zuj",
  "key30": "5pgmbtczkG1mjP3ivnCAehKAuB5mdAkXfQHC7vyxUyr4yEiTUV23w8XGLSmrvAyBCq943Qs2f2qGsrMiLZZt1tFb",
  "key31": "5VaGShtWoEJee33a7DSsedfnRnDmLabqFML1oWRnzwX4h821FQTz2qm4dyaqC28MjXFfW9vXznv15xrSrTJFpqUk",
  "key32": "549Qfx9mXGr25wdXmeQoTdFzTVxU5dX69CmyxxZa4EuWNDstbaPFEpnSrTLQkWgMdn3Jr2KFbwYHWwfHTffFnnen",
  "key33": "2tArZM7sxSp9u8hMtp9EensQRnddqZyqNW2hmWMnzgCj1YwPhvhunRAkdb1vahuju2wirK16no3BqV91WQAHmCsB",
  "key34": "3R666nNApRi22NB4FB3ypi4fNeZv31RrCEDswmJjDTx9WNuf8NvokyVwxjLq6d6iRtpYdshcxNBGc1ECaAS5GTAQ",
  "key35": "2wUpuGhjR5k8nAw2qBqv9FRgGNqv8YeNUzTt5Q8zmpb4v38QMUX4aqyPZoUS7obxYjBVkTq2svvUE85vfXrmW31y",
  "key36": "9QWSiMPp3NLked4rhCLqiXgibqMQJxzC3pTJM1H4CSqoYPezKLLDbZAxJhs4GZ827g8EH81mytUVUHrnbvviunk",
  "key37": "2HL9FmP5SQR6RdUVDUirzvdh73MQqPDazt82DoGE3neeKd3ryQMzvZZ2Th1hhPRea2u7yGZkJcJBZyEyBAmfQQVS",
  "key38": "2CVPQuQn6Bj9HEDeUvz4CR47Epfka2a66mXJUaJTUcXASbe83qH6edfFV8mcJNzkMitUv3pqnAJuCWLGLnVWmy9a",
  "key39": "2ainAHSGcBa5dD4SEALrmDzCizqwRaFMnzHAumjRBZ27YYjjeUKEoKN4Mk6uu9tFKSg1aoXBFkQj7RiK9vWt6aan"
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
