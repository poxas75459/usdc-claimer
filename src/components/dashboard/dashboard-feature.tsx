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
    "3KLXzpUYY7eTmMYXiuiXM6MYpSmGt8T2wCnuBnjKZgHiAxZtVvoQdpE84U5LRT5BwtzYtuusjvs6etoBuQ7ZACHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFzM5NdF46KDr7EcBQsxUTMyHcHbhGf19UPeLWMw8v6aEntR7Fc9PfwGEnmKBFqDg3nJcccjiTJ4Li7yPu6ZKWv",
  "key1": "5xpHUhWpkAA3DQ4a2a95aTU9NLaN2s8AtC7BFdZK6HQojCtbRUBZLqUHDdDt6z85UmH2AngnTLhZdFR8M6Hmf71i",
  "key2": "ttU7N8BpNzDmwmHxaoP2osvNkjsgBougN15k3SurkZNY9rAcSd3v8yGMARLyQmfzb5Jm5xrMab6o6zXVnL76SSb",
  "key3": "LgB2mxRToDxu8Mq33Pup7AE286yWD4m2DjCWxbmRtapPSkYKBJpNyvqKHZcUoUS1DoYWJAN3vWNSRoZeoe1AWWF",
  "key4": "28Awrfip4GKw9TUdUgumrH8GsVdQGkSAoYjYRPDSnttG6WonqAwDPSx9MAnf685URsou516xDnQXCCoX26e2gms9",
  "key5": "3EHXsq6a6yi2GUcQ85WfGV1SjabNyreWfvPsn5nym69RJBJJcTgX1kAwo9U4iSMQy7UwEeF3FX7KoGwmJw1kvij3",
  "key6": "65fv3PwX1dSjHK1hRqE36NRchg4qc8oGW6EpZVejunnGmtMToGoucFxWQYA8qaoc1K7D438ruH2AxM4ow6WJ42ZL",
  "key7": "2FQZCic2781nRtoR84HMfAxQ7MdD3Kjaq3iApiR2YpyifoSTVGJhsCcVLogP4zwvp7Qa9L7hW29WfrMuKWYjXi5n",
  "key8": "2WqpZDZJvMSCi7bb8ZqdFFGxeP7GAXSbJqcEZ8LkiHwAD9uewaB3gnhUxPPZDRzqgjyBJswumCD3vYDKb2Zgpxrz",
  "key9": "4NdZvCxqfUq5ZHbBXAoqmCqWt2M7UBoc2Tid36PGi2FNUcghruU1oQREDiiPuRaKCqnrmFJWc9KyKAugo7cn6GE3",
  "key10": "5naL363gR4ahjQjikEsiVPCYqR4Sm8W5FNuuMsqqLbCW2uoTmckvzsufgrqz9TyhyYpqxZsRsfG6cc6tYhzHqX2W",
  "key11": "351MG2ufDK1ejZhzp8BBbnMao7mtemW3ADhV5G8g1JEKeYQrt8sjBMGCiwi4ZTJ5Wws4g63g6oqiy6YrPT4tVhir",
  "key12": "4HCZWv7VzThrhPGBWzVrg1yuyQPA4AAd3e2gbWSkoGu61Qt5xGmhP6hAaxGXQELR3Xdu2nyq48yEXJEZjgXB2R7d",
  "key13": "3TmXXrqaKCNZdyv1vddV6TajcePgaS6oZ3GHC97ataQYFDjMwcoqCNy7qMdMPJm1ibKRX17g9kbQMAQ8ywSU5tKv",
  "key14": "5zgq1qdHZLusY8tUAv3acQLHtpMpMAmdtg4RJPqBZ7YvEoxpowGPx7apFAr6BKgFPG2uG5Eqyuxp6ALXFY7QSKUp",
  "key15": "2keQtRvPFJ59iJ2AWnXHyfUhh2hNjvumdKhYGGz9X7hxtio9kdEZ2fvoKuJfmnCip85vf7dEVCVM74qWSefrRnLw",
  "key16": "4mLmUv1JbJ9aPG5SwdE4qh691DkAZKS2NN8MwmJHxapanuNftzqamtdB9fFt4qBKhputFdJ2n5mFZi7z8wgSkxo2",
  "key17": "5FJ5dzmBaM5gziPaLA4rSHsWJzKdzwdgM12Mgb7o2isKu6xuULy6TePfYWP8AqdTDz4wW6FF9ta5aQJdZBispHgF",
  "key18": "5UshAyhd1r4RFS6YcEA7jEG2WkwZi4a7HYABC8uEY4oCffVzdBSrNcaKkMCrWR1GAFgjufyduttwzCEoG7zJ9k3h",
  "key19": "j4Htd2AnWCR74iETaM7c5Lj1sJUwtwrgCsxZt98ww98DYCKnoyChE3i2jsX8WNM1opDp2ddx2KpD38J9k7tVk9Q",
  "key20": "4eEx1n57S2bRPMTKdA4GHVDGKx7AVn5MBz9i4VjrkoNJ6W7oTKpJYHQi5YVToRaFr8bpUFPbrsDWQywSx1CtzTbc",
  "key21": "5xEYQ3eKLzhhN84gvCuHyMYeBfdTMqoNg3AyrRJV45sVBwoEAEti58KfLzPeHE1h3qATWRHJprmWRmV1uyEf35am",
  "key22": "3iahsG3neA19mTDJGNQBQF3hPJULaHDowfJSmDpRvWX8Mdgmi96ahfdvyWGsH8vU1mpneWuQk8dJoeptkPBsRmkA",
  "key23": "2LAUjrtWBjYRsqnixPuqVU5tCJo6PYj971qvKr89LMougndorAjV67ZKE8LmySAcw6oJXQbCPjAUXMVShdqktzPK",
  "key24": "2oeE627xCZAbv7rsFpENCEa4jyqKQfiGuPPVyF5aBjxcUXgGbD1Hrk1BdJsxJXZjUjQBvXdD1EFMnEVKwmQZ2ats",
  "key25": "vASMCBF7PdSQdV3T6bVvJ97kjEZoqz1ysA35A9LXo6kb415P8fWHgX8eWyFYYitD2nUCPYdxxbRDXXZUUw9bT1N",
  "key26": "469p1hbZQrX3ZzGiej8x6np2qAvLUbLFBK1NWbtz3PGQMraTMQN1bAnDQ9k5YTEmXyAbkqba8Ws9gojetwB1dudx",
  "key27": "233o22sWR4oRJcyKpWPf7nGDjzNyV4CNGWNKxkuvsnoc9cFNHuMTn3gkgKAsQ8L2EXYyyZdJiBqDpmE2ThSfbxzH",
  "key28": "mHWhftHh22WMwyZ5qw8J7bjqSci7XvvuxtesRdg4Dcb1ToZfjo8PtiTDdQiR8hig6tNbdf8aJJ13JbWtW9we5RW"
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
