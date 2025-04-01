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
    "J1NeLqUuW71ZDxAya1BN9oSq94KfrRufZ9fhT9iXT63b8ywBRYPa6Y6JBHEbm1HXK8xfSNZvUKnufL4v26BoUu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWDhR5Lezr6qm8DFxY9TiY4Fz15bJoeAZ3BTKJ5osuXDJbYqNr7uWzzBZRs316CHR3mhPpMFML9jf6qgiMKVh5W",
  "key1": "5AfBV8y9NY2B4ad8xRBfo3BuwUytnB5S6fn4AQWjbZJz66aqdyFogthgqabR5VBeNZd1ALtcPE8JJ8r59kvixDph",
  "key2": "4nLgCmJDdZMsLzvvyp1z45R251Tr5wd4SDrRsKk49PBFQPM7cpm7JKTv3EozbadyFdDwYNmLe7oMWrNgQF6xJX2X",
  "key3": "GxCMiKeSnCTUvNVu4Ptdq8VA48x8fRGGCDiV79CNxrXJWkCLFbMUqr5XgrR6HDj1dL8tzE7KoxjdN7rWwvbE3nS",
  "key4": "5CSxFCXgjv6rss3hT3xwzCYtNx7vKTg6JTD4gNLXuT9bUwGR4oEHjxupdqUg6VJFYaVqG3hSj85UYEAAUuMiwDHj",
  "key5": "5YPMEG9er42L4sRL9tXzDHCVAHvyt6QxZM78ovVKqnL1DLfxD9qXjtFXHPws5QsYvi6hHXu8bLAsPr7KcV5WJgGN",
  "key6": "FQYuyTKi31uB3hUQgqv6GBBZ6u5nTiMoET9rGcXaWByTvhBErnhGiqRPaBXDDt9fa91tasCgVNLRexrYdXqxtuD",
  "key7": "NS7Ebmf6fng7Jj5CyTnq9rMkV4wB7q1fyf248cGh53RPpiusbLcfF1xMF6Ffp7n9S9V5GHKtBMJntGgJKsEbfzc",
  "key8": "4686oXj3wxZ2ahQCicdP7cD6C1s4EepcLiuG9m6r9nRnayohoDBos8qZi98Qvm4ogYbuHLkgRSyRAwZbqDD7VKwE",
  "key9": "4N21utR5nADydyqJF91j4swmyvGdp2uuGT8rLFwquaJq8U3AkCwKjYYeMmaWQvDbnY79wpNvNVoJQp7pATVRhKFy",
  "key10": "4pnAAq88WuQSsHZBTZcndGCUZWjMfNfGVMhJxbbD41JYvDjw8nWeYz97jMzZ8bLGzpbCcRD9ox9FVRNNFLXSJ2zY",
  "key11": "47BebjETz1h8cehWqbQJuuivX7deXhkfF5yfqL4Wcw8TwXXovm9i9nKmMic5KNDUg3Gw1ymeHuRjqp52Lj7q45yD",
  "key12": "3yzc83mmgZTcPuQSpvnekVnxFeaTWe2GMAxhHeg9pmuBUd9jE3iu67bWJKfqpy8mdkp6dt2nn71fX6NBRMgECPqW",
  "key13": "2Ud6W6RenLifRtRS451JXWaREFqYxZAwZKnVTkNDwMN5LefEyuTeCgZfRVnawxagroi1JRsVt3NawknfH99Ezb38",
  "key14": "23DwauC9jMNuLhmvy1JADpp7GvRyZZcqdTx4geDnh6WzXGVq4jVSiVZxW8GgJG9CsUQjke6j5vXyWiKrPTDAAMBP",
  "key15": "3jyPLN1WhyyE2Hk46coJ1qepHTfjGDferUzxguXDjV9TYQyrRJi8q6CyLAdaRoMzhYPMG2D6qLgPAFDTkDukPwzY",
  "key16": "2UGXMxiahtjgcPjQgT4s7d5HxaaPX8GergxP3Z2ic6Vx3xp2S3vpmANJR1BqxFW6UNr46aLfmVwqXhHTYhPXGc47",
  "key17": "2zDeZxVqUif4FGvLHVxEb5LEg2zk5jVzKFp1oZQj3JKDaZTQiphMWedLMKtQFmdg4AEfBpa5DfFhyqL6JStyW3EY",
  "key18": "uEzfpHL9q339V6srxwwtLnpct58MwonRrrqEH7J4X5MjdvKP7MXy6mdak54dpBsALHveF5hpQhzaAb1T3YcNr6H",
  "key19": "5pqxPSL7Hh9V1iXfb4nWtJimnmSR1EDLLzRh8XLZvb1E9T2VHSyPT1oRXwhR6nhVZPL2oLVex29fJ3Xf47u2LAdG",
  "key20": "2mM9kFruVSG8wxYkkMj5Qsq51f7K3cQTJpgQEyJMNkT5w1dMyZuY5Z8hFJjtozKYPQYD1AWJs1VYhggr8etPLXve",
  "key21": "66TSFtahwyjzTf8jidKj29i8a34xWPyBCjgN6LLr9AKkVEWyopnWX2CVppd23MkSx6Gs4fY9kdXqWDoMT7BjuiKp",
  "key22": "2f5iVjg5sVY7HaPPjLbvU51H2Do5w3W8NAN3TpiKwu8iXvwJMdt83c4mYvZCvS6gvoLFSwgMwun6QuC6RC4gKF8t",
  "key23": "2MgoKndbiufuNrUV8k5BtVjEvyBiuuBV5kCJseHmWrbkxuV3CMJHqqAWiKMp2HxJHZhYEoTbwxCJz3tF2sCxA8Fc",
  "key24": "4oBbRG2w2P8H7BK6AgTAwyX8QguuuZVsAvyiUkXhPYUt9SpkZvgWdUPrJTTuqi4ekN7CZAkakWJGpjHdBXjY8522",
  "key25": "4y4KqrTnHf9KHCMWr9b4xTQ7TsDMnzxGA29xE8dp9UCSm96CPvVMmU4ZVSf1f94gQPZqefbSMrE8tFQ68AxQ2Ck",
  "key26": "YhSPsNdRyaGHayzinnrbPXPHXayN1WYR6HRLs9HY1AQejWvcCjg5ZtmmJ2VxVs9z7ykjn8Z3NHrJpVbCruq19bm",
  "key27": "5crVaLS4GArPmXDtrD4ZxSqc2DkyhrtcEUtD6b78G8FsAG6U2hkL1Ntm8JSR1MEtakdTFoYBqKjqVbXaMqBSaHiq",
  "key28": "4tFg7kxQyh4TUTTpUbZZfGTYGWZPwE4Pdxe7DHYyD4HiCMy3zDMeRfWuuDv5XdsUtqQoJqpMjDaQycZVvouHskA",
  "key29": "2VxgbEtpnS7N9ihLWSn3gi5fJDo54Lw3nAbbrBFg7bXonJGCZEsjXhwfumYxAT39L5m72piaCYP37FKAanGM9aay",
  "key30": "2QbvSDfQuFByxNiZucaVy5cKFeKrNoYvpwknLdq2EKePQp9i6ptWyWTSS9NyBTXc6gqTBthiaFa1t7QyYjn3u9pn",
  "key31": "25nPAVqjabtELAETsdKhNcBvsGYgYdoC1z92djUardgG4wNjrKzddrQKNGV3GThimmKuuGqhnUsThHYnwe4Ehusk",
  "key32": "c9pDTXDG3XPjenuiqRv1cbqHLjNNrkBEoemm3m5hJmzhJweA5ruMr2EMe3EGZtnfgUdJarU3gs3sTTJrfVcjnas",
  "key33": "39Sfd5QBUXQADVj7LLSMwbRPTV7StScL2Nh3cwtYDbxbcUPRfNQUMGGjUWGxuzCJHCu7joorKat2JQZ2UV5eCCiq",
  "key34": "2UzfBYSMEQkFiGrH6vq6Hz6D3dDnHj67mVFbWZN7uGV2DPBkszg9VAqjvpCzzU4joQyqEa7QSLg551fdm37WUbb6",
  "key35": "5PUuEAmTzVukyW9oqz2ecRxqQ3etoWwGG33dvPM58vKAVbrM5BmUFjtVFTUNPTvjBJpGunYeMH1uPnYHHYuWBdvS",
  "key36": "3hdLW35vGub9kLzGWbGWFWdzQpCzTh7o1b2X5a5UqGjAqUKC5xURQ9zFWoRwa2qLXPpZ543shrX6KZKcHv7rMHHR",
  "key37": "3enAX84uP7eubuVWmLDZz8g5hvbXs1c8NCdCyHm37ktLA4m9uFxg6CiHzaE6M9mN5UFMsmZifiCaLtn1HtW9fG7S",
  "key38": "5G4cfr8XsHAHZ4HkQbVentRsoTj9358KqxBPZzHKoSdA8xLFeUsgjosPD23Pzb71px31jQRruf7tQySJEcEAr7NA",
  "key39": "2bAQo6GhciUWEiEu7VZRP64Jkn7sGMYwbcvWLYedV8y2HHRvQ5H2YWXjFAdAScMeyME83BRbL9XSBbo9g8wZTZdu",
  "key40": "33EjK5sSiVF4EAjP6ZJijJRYbGhVoYvt8uhsQCpZAVbT4RhwhMk4hYQtuTN2sonEQ7dsF2YvuXG6ekL3tAH8Kmkr",
  "key41": "4oor9aCuLM9SxYyK2RtHNLZ7LXWawSV7z6mj1dY9bRDhAN1VthT1dYxMF9QZ1TuxRmsnEo6XqTPuDqZgeUsPbDho",
  "key42": "3HgNUFaxxiLUNMmEHGthzttvRUCCwxRWSyD9niUfxqbR4fThSgBPgASYYNuwkE6zGyUMnrB6B3qhmMJ9uzA8CoVC",
  "key43": "e4K29i53jo2wnYfa6fP6GZcX2w18foEzyMiPQps8fMs1PK9AWoJ8ZXMc7LydBsMZwkCKFzpgiknU7wgxXLGeGB5",
  "key44": "4Q78SggyGJGQjHUocTHNny6Cy9k9ZMyzoVM1cP6ZT7dPkNiKUxtpGVaYWiM3btrG7YAE7qisjYzTymXthLbsJaP4",
  "key45": "3uAPUDTKtWCE85HnkBD8dtCPMZUF4zqibgRqPFtYaHigKQyss5wor2fVHF24oEV9nVbTnKR4g68woS3sScKEgNin",
  "key46": "5MUFPmj8Th3XrT5eBhMMcmcL11ZLQkBsUGLTZbZgJqtn4N8MNhcGPePzUdnxQJiutVDct1LkA95CfXGqyGKFop4"
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
