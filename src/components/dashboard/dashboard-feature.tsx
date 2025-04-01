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
    "2PiET8Yc1Kdo3uXhdiTrx253yFy6yDkD73abkWSKermNhP6LcNUNtHxgLmqM1AMwS4aRRAjK2w4wepwAR2yy5TqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnJcJaCyucEbA6WgET7HgK4BzLUFtuXTnisw2dnkTyYCax4pmG4kkRT5rtpgChrhWA1gDDDtJiebRhrf1mwTRcV",
  "key1": "5fqtRoZzVWceZ4yBD74RR3yd2hyAqX68xTPYvvyTwrBUFrV9pfCqSdNscx91fCJyg3gUTuV5RBgyBJn5BjKX1TP8",
  "key2": "5Kr7dRTFY4tUUF11o9UJwV9HqfQSCdfrsxixh5ZFXWQUCVh3a8jRZsabVmh5zxKUr3WzfMWiowMTQJg5Fzc4Z1CT",
  "key3": "2GHDjCABnDDTbTstNpJXi8TY3wek9KdVts18A7DAyeD8hzMYb6LXQiSpjou6TmW2HKrxNizdh8k9ZH6NSRr3rDfH",
  "key4": "5G8gXyXhrv5x4wJBkFq2R7y51bSLbnR5roATxyCGTu5iDprdGCG9NCeB1vHMzYaDV6GPncH5E447sxF2ChZ2EmjM",
  "key5": "2B8btvX9ruqMeeDxRhxPYSGQGACZcfSuDAge57v6aPhhJU4u743wxwUo9nKvuTgbZvDwA3Z14Lfrg11c6QW1LJ6N",
  "key6": "47bKXDWwybyQk7iQbiRSvbi3qUrv34XcAteB3pWseqRpnDDG8bh35cLAGjkrbDNXrBUs9rZheWZFh83RUvHZotDT",
  "key7": "YM7AA17FipLVv5XMtQ2Bd9MGMxT9Q2uAEYriuqiZ4Xfr1WqEZButz7YPVCe9VK3AdHjhzMTC47JXArRJNiAsd3S",
  "key8": "3VcQtuzMwSm3XW4YsbDuhwUpx6sXboi4Qpz2UwD42CfRsq4uarfxM4cXzMNqVReY1vDsieM1PJoTy4QDTMckvHto",
  "key9": "2w1b43HbCZj3vHTVy3RbDPBTX8fD7fuSQohjoVivBmSbHoAb9HZMKupGmPEakcrofH6kieNJ8nhXLqvXSDcAgFGp",
  "key10": "2c4A24wpVX9GAw4uoq6iMxch5DgF5t67yaugQHDPuH6k4FyFGththTuZbNuXhdEgBAobNtD6LFJwHji2wTM2az9V",
  "key11": "46p5Vtv8XbBVe7p4psCDznyXvc7ya4o3gDkjU1wt2YRFcmtABWggYPXUrKd4yo14Gtw17ArcHgU1adtAEm9H8jou",
  "key12": "4YtYXNfZwfPLfwuYB9xCmmSqdrKEojDPZANvNuLFeoAVzzy6vAzJ2EaD4xuYd77LdNwiDbVjU1aJegPZm3sqi4e6",
  "key13": "41RacLP1eyYMqSTZnSEGBomD9gx3dAvqRC9AypK83gUzq3HfssLTaBX3KufFWGJWekQroy55A2puEJs2D2RUGtiM",
  "key14": "2ki4u5hqtebASzpX8snhwfzUsqXZWRjHuQFj8UGeyU83gw3hDn3DoeJKMgmTwevY3fmTPSKBKiK4a3FZXxdaJuTf",
  "key15": "3iXSFT66Zm8VDWcDMuRLpSmtmfPVAv3q4Gb91ikSWqWQJgsMouWgovBAXCUDUdgTi79Y7nBjE6AjC3W1DEzBN5HG",
  "key16": "Y6bbk2ap38K81ns3zknn5nBbkiA15Sc8WNbmopBDcjubLV5PuFkB6Rw6j4iqqPmTrAuj5bKHLoCBrJLfbNpmT2z",
  "key17": "3Y1PPNwZ6AWiNCEz62RPTNHyqxh6LMjo5krX5WJ2X24qjcAVBRSiDwBqf2NnJeKy65KfnsViczf6DqhQgypvzamS",
  "key18": "39NRMjuH2VpgSqLMaRZE8DHGoxvRHqNxTk8ujGbAnhj8FrSHN1BwJ9cf5ZoqL4xbMH6qKxGxxcJN8MpKGP2LX7Cu",
  "key19": "54KCsqUUZdHyTJnt2gussBbPgthPi4ox3Jck4wjrsanKGDfraaQ4ccbJxFYiYnEmzezcaA8nT3rGBPg7YySf9dmB",
  "key20": "33g5JQoJq1X2ry74ADRJU8Ho6tCk2MVNRPt6r1tUr2d2KwMkJt3fDBWXZKZUpKAwv9vKFoFkHUimYcyRtEzH5AWZ",
  "key21": "4naU4PnPRcDqAnDyPTDwQx6EyJCwdzMwtVsDjtEzca7KLSN9SsQG4XmBShAp9qQHqtnZNwVLy7hVyA9faecPrbuG",
  "key22": "3dR1qJ8PY2hYQst8FQe4rZbL5Q3GHe4QK3XVrdwz8MYWVwaXpNrVFXx8CQ8wvNUSMivzJDPZ83ypG7cHY8faKfk7",
  "key23": "wipRFG7JqxTWB8Rqr7JH9siuePnp9bATu6B9zzZm7kk6L5s5cheyFkQkm7mXf4f9YnfoZGgNo1hMtjz27NYNihh",
  "key24": "C1qvaJfqearUEGT8vkmFSRQFv5tPQQQbQjZkhwaiHtZTBC3bzo8gxc11JjfY7LQ5rhY5wCWHU5v4adzGnbHQkLY",
  "key25": "2XhAWxTSuxA1qDai4pgkAQhxej2LPGQz3JUfaLPDTWnFRnYa1fsJ5xCyEgCrMwwEp3EAT4EL1AGRuy1r5S9GEwec",
  "key26": "2jzp59tEfpWConGBvjSpTKYeR7NFbxAeJ8U9gsr6hEx6M3AeSPw8fKtwzdvMx5pAYCHYtGggsqf6Dj2cFxbkTsnS",
  "key27": "4yYvbVYisueFXkAzw3NUwtBJ3TRZjfGcpkqQZGhtCHe3gVDzkMdx3Qhb2eC1STQiCS8nvFYhm7aNdtsU3UUFjZk9",
  "key28": "2CxsWNkeqhaJPYRM4AFw6Un7oy9NSHcyzvqzYMm2UfWw197StXsNsGXQoWNeUtXydPeYRaiDYew3C5pwaxhdxHpH",
  "key29": "PzfmzmVKGgQVVeaz44E6VidpJTAxYL9vc2iCKJuzE17Y1AogpiA3znzJQbhzobkEq7vmsppme1ijukuFBYUGaHD",
  "key30": "42mLddK2wNF9wyUESbawWhApxWBWiMnkpnoRhzLAUF5r7gVhacEdktEKbNBhbSbo1uFzuHLK4DjL69SoNxhcvTVS",
  "key31": "121H8uqNuFKyxsaK65KoFhs3pQFSt2YJfamNuX7AM81rDyxTzee8JWMfzZyRgXXfmCQdPgr7mTxC13wrW23bhUSn",
  "key32": "2nJ6pUCKXeAYejsUU33j2vcwBbiLkYjpbBppCKi8oHcqLJh44t5XaGqFunsqzDwQpJXVf5uwxH6zjrSXmPrddq13",
  "key33": "5FGG3QX1vduovrBjQLQPZntwZWW6D9Y6ajoR4sTfAaBehWfZUiJ1vYZLj989XoyBa1iBAnahh8HbLa5cuG8orMdE"
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
