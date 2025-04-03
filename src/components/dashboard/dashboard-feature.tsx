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
    "2ogTx7n74wr3S6WkGGeqfxWDtDLXKcTZL298QWRDgK4vLv76FmEvi7yW7Gh5ymPg7492T1o5Y4Zj9Sxfpu1bc3VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wi2YDSaR3yKwrV9LiEpxGdcX5Nm2WUmdne8b7K5zfxzZBjRoez3E9HfzbqbN4csbd9JaJuTLatRFUdXj5TCkbgX",
  "key1": "48wmnVwY6KLv176DFT7Xj9A7AVECFsx74AooE8BiYFr8Lm3PvjSH6eo3uV55oR7zPedNdNYis8JVJDADcimKT9kd",
  "key2": "51x4TQ8syJQAiXskQ8UPo49EwbLbfiXr47n3tK2Fzz6mA8zbXaZrDNsMbXHDrtKWfCME2R3ov6HKxdn4kLwTfmpn",
  "key3": "5V7wdx9o4X1p3BUVExpQPDt1LTcckv34waR214QmUoYCvEWEYxmNUtGZCrAv5fMviAbmhwbzSMbK66KWFagLRNmx",
  "key4": "2MpJr1t6P7qTDGacrf8MFhMkBnvrwKnKhuzcNkcFB5CKr4srNL4kvhFsZT1pjGEYZtAW67dyfdqzYB1qwxcMi6yP",
  "key5": "3YtrcUJpZWAfJDbougcUaASqqvYyPfeeibKYhBHmd1JTQGgiLN7p86nihT3E99aEdvkoa7r7Juc1VEruZP6C6EhV",
  "key6": "2ZZxa5Xi4oo6zzpZuKWx4VGmZ6kUvmNkiDY2DL45memMZSTe6b5rw6S37kALyEKwJT12bt3aXeazT21Ky9FpWqz6",
  "key7": "62MmEmZDHRGdf8FirTDsMVUNj3RB1ERjhBg1UngrX8uRScLgvuJqicpQXMafvH4UFQEJEcrrMga3GKxceDBTcxYZ",
  "key8": "23QKacgG9wgbhX1sheVYx3U2zYJkh1xtMF4qtwRxE7ihLAXXyEVoVkaLxmuLh1QuPLGMHUKkJis4pAxL2sFyTd18",
  "key9": "2eheevScg4xakMthP3WJtySkz7XYzSwRqedD6P8XtbrwiRgiwLrzV2FcgpfVxnMka5Ad7Ae6f1uuLBU42rC4PL3p",
  "key10": "3koUENGokNTztWd2DTCgy2aJPMk6NxpvEhP78iy4cspP2De5zoTHXX2KJVauSPoUz7JvYzWsdb2CLM8fPmfmkpmi",
  "key11": "4s45NB9L3GqYdtNb77MbF4np6maQMVLkbztfdeiSyBhuLaJeSpje7XqeAg5i2XyvTz2Sx9j9hbfpcHs2yHQif2E8",
  "key12": "fEJuNLm3nwEuNAp9bgEnUjRozmF2h3fLvSZq29osJeVh8frm6adjDgq7WznVptvvKWueGSwKGRr9jMMkmqkrPjC",
  "key13": "5Y4LULi3cgrjaL8pfxVoVroA9xLzgS3QMGsuFr6ryUdv3qUK42tLgHnhd2p7JAbKPTUHQMBxh5mT54NkDUYcn4c5",
  "key14": "5uPZEtNL9T3jEPsosFvY4CrGD15bkHZ6coSBzdFV342xQEdJkHZV6nwNBbpxE4Nhumr8gpN73VYFf2ovKkKAHBT5",
  "key15": "3pM9qVdjimRwwgw2v16ZUxv95mq16dinVn3JGH8SzQYPxMVNdLv6jWeKq88VjUnfkSuw5fDsZXLCuxzDk8S86kCj",
  "key16": "2Xo4ZjpCFrwN8jPgdF7BeX45vk5w1F6cVjEfBZ5pa5ugA2GUh8GZoM1ugWP3UHtLRB9KQgULyMJCvVMx7gT4npvK",
  "key17": "3QB8VzjN9mtozwxBUXZo4Kk9E78TRbkcfQPzTMJ35pE2qRXjuEhnkAGiww3RDXQCdwb5YYuhJxkQtJFMkm8x5b4C",
  "key18": "xAK993YhGSPaJzNuK55adFR1PzPmvMW2ZGKLi8ScR8VrjmBC9Ht3Am88kGZ5guu2BfKxst89xBeFKYvKyiVB2WE",
  "key19": "35an2Vustfx9oscj5Ncvsvi9Wyv48bUuWrpjBMTH1D1zYi3yTz6Ki1nJgaph4xfWGq29dJQG8MczdEv6noxrrm7s",
  "key20": "BV1HrVrfF95Wr4AeRYASC6PzUcgVPo1zbJXpprXjLbJgHiEyRXYtRnAXZHACw6RfTy1Ap9cSCk9XhhnUiNbHfKD",
  "key21": "tetMFHfFVgD3THHqU9FEpBoMgrwKZCrU7nCbhs7qLsTAvwitSHnWLHXXqN7j4Af8jW5ArPgjGhBrnsaETeiKVjq",
  "key22": "3gcfHeCtHNbXzFmoQcJ6wFQoNvGdzNtix2v9XDzMFGAyTp9buk4dX3bCh69D9Jj6FXVtznWxyLgDenpQNN2XQs3m",
  "key23": "BpacgoLK9EWPY2HFF1G33g23E9KNGSF6kwoZhZx5Hms4q8yLZ47m7RhhDfGb8jA2sHTgiFfPM6pQ1oazgzd9zHJ",
  "key24": "4Kjt961AfpXf6wznhLh75MYD7G6V2mT6YEsJWfd2ftBij4CpsRBzjm7wSCTGRXVScV4bTrArGpD7Z7jJNf4mdRLV",
  "key25": "47sbbezCEzmLe97Wv2LrbY86yk2TQmsRCYir8917WQZs23hc6ULhHoj6sb79Cr9vTKZjvi9MWoAc6ZvyhYJMXVrx",
  "key26": "57Gc6esSV5rw7xYGz5p7Ye9ED86D1WE8ZjQTHrSeZfsr4hCFAJbX5cSkEcf8pthZwJBD1PYqkXNXXGgx3HMqBRSv",
  "key27": "2kSmcRV8LY9C1jxoLnGsaBBdVLBcrFJLU62FvXevbDS5PAWRgVY99jPuDhPMG67zkSLyexwCRbKMx2fb91xUkUHJ",
  "key28": "61LsQXMHxtRpAdZ1YSfj3eiTuidWk2NQjrUbxXJSjmQ4Q6RYrkzXEg5zGAPY7HXC3WyyJiDCfMCRVgSN19oxDTP1",
  "key29": "2JRDaXxs67QbGyVMrnHkVCsPtwfuxnL8NEEHhExhkoi6m21dz6TmNLfAgNCxxuMkJciVcozH5PRGhVnSUzGXJn3i",
  "key30": "4DV5fa7mBTDyqui5bFAn8nNXi4pGohUkAcc2RBrcF5qBYn9PrsxNetF12ujS5WjpzK1tGrqEQgGiWGC1FgGGjkB2",
  "key31": "3Giba3FpNyXj55cSQHQFF9yi1rV6WswRDykgMSPjogbDMKY5yiaDHoEB97WzYpDVo92unyqBqEb7WMg3iwk6x9Kp",
  "key32": "2pQzRrS15QnhhCwS44MhXpi9tPWi8WCsNgwqyAtFXfQtifPh2sBvb4Zn6rVYf8k3xXZGHp1ugXtnXoTPGzXZYTPk",
  "key33": "2ksTLxY3xAkqegXJeFAPuP4DpVfi3XNSfRsnBme9CY4U5nrNKddzuV8NHCHnFedu3snFA7iqwQEx1R8tp3BpUJqw",
  "key34": "2JRJSTaesLaLDpYGLtqR9cmWak2Ws2SGtqHKUw8ZKNfWovAQcb1cDXBLhUteMYyjXST9o4VQ4a7u4aFCX8dQLd7C",
  "key35": "3ovZBDiDRs1xQsDt64e8gQdTWyzkCksJT6DRcbhakUSPbedZzEXxrnA3Fk3568RjtwdCQAV9wsx4xWES62uboeY4",
  "key36": "zVLA9nZ48xSii2acPVEUUkFx3EHaAchaDmLP6PrjgewjeJoawH6dd13A1wM3ffh3AwFF7UqKJftFKsrwNzphrTo",
  "key37": "4bwF6vzANSrke9LrPUShSJVGNP4yeikth9Xh6J9JNddiZyLzYmax9EoWNJPkeHecqQNH57LXWBsvi2tnRNMBdq8M",
  "key38": "3BxStQzppKjf1s8D3APCScFp6fyWSXDA8bF6yBzMMDin5caQkGwoR5Yt9GyBjceYwMYnaa8nGR43TwNDVTB4v3FF",
  "key39": "5JutEefZDTVKi18dTj8wBjQiXradVtRSK8vtVyi7jjT1kZm6q4Mr8LBcbMwzkJWzLi5xYx6f12M4RkkMreSKcmXS"
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
