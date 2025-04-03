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
    "4Pd5tGtAZsSFSWAbcbMGppy51x9z7VLohDZKDzrXsXcjvZJuGeMcrAkkMwwTFZU1cQ59S9E3EpsZS6MVTeVPmUsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvKAiJgSCLMqnmro5KAQHXKphq2yoYeewU4iEc3kg3AQCAZJzfpVX9Funah5xYwouBvfVUeeqf9nkxCADuJrvgT",
  "key1": "4uhkFnAx8K3fjt96VEmpSc8d2ifvvej2PrL8vXq3qe2LvASchiKqwC9dfHC7pvrm6bNUwsaJpUU2nHWyJPgTmYtS",
  "key2": "5Pxu2sZtWYg9Ym3zzm1TnVk6i8KKFeEVEQfntDDH17HADJYze6FNs3YvUQBaCRkLkCVfJjo54ZgHkKqhSZFpFavk",
  "key3": "5zYQjVPqwbUCuK3zhuCLSaci8TzmK7G4wnaNkRzJe6JLaS9PTtUu4DfoDHVGJFHaSSmtXzE7zWE5oiyF2H58AMwE",
  "key4": "3n8zvyrmGFHFWL1TG3yovXgNXuvefyh9natNHmnnJuVa6UDb3fidsMUTXLR4MZQw8752ZLkwxYabNbqL6e2c2tZx",
  "key5": "oAy5vn8TDtz5aHXQ3wRoy1MRn4r5ZR6S1gvFxyrLvHa7MreMG5jRW4iMuGXyPHcL4dwyUBruDER3pWZN4x1XVE9",
  "key6": "5gi8H1ouimhQu6Kzd4EMeaVfidGd7eZjMF7YbN36xpMzFinCQep9f5BNTb1Q3YuQTJKUMscLHx4dr75nzLiuuQZ8",
  "key7": "2EATGsrcR6u7CquVHJtc5XuWSqYhfmD99j5UC1F1fnGfX9HWUrCcq4J1Bay3CJD7rSqxt581AWcRkdafnxLJWmhY",
  "key8": "63ixDRgBp1HgB3wgv3wQxpDYuwnKRzZTRKvF8vrFpUXwGTggncHTfKZnGRuAJSikpTeWmw1YpJM6hRvNc6NmDK5N",
  "key9": "4obwiR2j78ir1jWMqr7UmaLLLr39xAx5xBTvPgFHdQ5FwCETJHbudvu5BkZaFNB8nZqK11S3kX83QKtjyaCbXY8V",
  "key10": "2t7uW3KmYqk1KwyrEVsbRGnNZE7ezGQBjbf2nHRrS1Drya4McdtJff8QJSYZxFEhYB6oErYeV7rwTd7ddDDQRZ9u",
  "key11": "5MYP87ZbD6P9CkcihaARZ8kSCzU1gsEmfmTXtxiy7uh5CjGNJ4hNKjf4aHLEPPs4ehPTHg4Kg8PVPPoZFCBuWCYj",
  "key12": "AXhS15oG67c3whsqXeEtYabhfEDqtnaurrN5fvMbqj2SXTukECHeTYgdYZrzeZpVE1UVqEYWkcm3ekRCzFiDNmj",
  "key13": "4KBaeQz6UgbnDZDHoy7nss1okH2eRmncFrqQa2YDxhfZxz3F5PAEt2K2LHSVmHM7sJEKve9vyYhdwwjC4edoD4Fu",
  "key14": "51CQbEk3tttm2C23VreycmaiW2EFurShhheKo2ebaxJCuLaBj8jUECdVSjmRDB8Dm4gKeL4EkKd7Wvb5XhrD2PD7",
  "key15": "58TB9F778FsmCtpSpUe9BupreNmE4pYFHQyjDpTi58zVU4KTMfErahMHPjrhzgfGTWhKNgxX6xuWvYVSS4FA7CiZ",
  "key16": "3bC4eHyZNE23eTZ8PLz9qoRLZhD1CDd3yNt3Cv6uu9AGidTkfshskP9bDjm2MQGL4tKRpUyT5kWkqVF8WaS1SeQY",
  "key17": "5TFrUSPzFqf4kAqUaTCDYNhWp8S1Cjkk1jXr8AMN9S1fkDxFomdSttSxHdpuczXJ3CuvJQgpScfcm8Q18K7tp8Yu",
  "key18": "4BunduUJDNxVVf6wiaUmu8nJ9gYe9YWwZ1PRsVZ8DVyRRYKUyaceaQn7HYhUm7NLi1J2N66FZeJrP2VTnXDvxuf8",
  "key19": "3gZysuqWM1MZPCAZYLZNGDoVVYRL8dca9geTxuKBatSLD2oZZymByNW6eUYe1A9nzyHDnKpyRkhBAKfLVhcoX9LS",
  "key20": "4SvMv7S2e5psCFr1rrUj8jhRkgtpQtigvQ9HeDpt3HT34ybourbnDqxfHwCzdALTZVDhxsvXwzvdERBJ2GmBEmg",
  "key21": "4TchLinwvURgcNa7Rj88J7fJjegsM7FxRHMk6H1Qpr4Affx7zVHEJyqqVkzFhTv8PfZRK4fJprgxHjYv9NgiWyv1",
  "key22": "4y2MR8MrZNgLWfJhvrqafqJiBYsUihzNJM3uDoyXzWH4qbQ1bQtFGySpex7aRJze5yxPNtgH8mxrU7CfV3zE11iL",
  "key23": "4iQ2WkfWuzCiYMjnXYFLhvDVhra6rp91DjryzWVF1bheaxwAioDKPR8EsgygvtoHb1gHt9SGnnqAqYjrGSZ2vYj6",
  "key24": "4evzroCPtpuZMVvJB32FjGebextWJUUXm48ihKr5LrWs7fn1NGjKw57gTbQRd7opzrxRUtf9f3DYkSHMVhL89tSj",
  "key25": "3vb9QCseStSnyXH7TypiHKxu6Pa6W4BwALQ86Kvfm7QPgW5qhsTJbgTLMp4n2SwK8KP6SRcS89kTA77jXhpuTarL",
  "key26": "5WNNyeyGcGvWqctT5ujNpCA5Yt7xsTGQWxY96PJJ3jcZ6yP1hxwtaBDqJtTvtyxu1fwt8U8MSPUoCatRT1yDoJmx",
  "key27": "4ZAAMeKnMrtH16nYdRbebVodMhMrNgAb7jJ7AHCWYKU8vcv6LBka8YKRtEfhj1K5ehauePEGvc56CGWdkvZdjDE1",
  "key28": "4hnK6C2bTELPxJRVpWWDdkd9DXoRJp9ofZ6bYYWDq8NHtubiraKRJgP1TmNf11nUQzKX5gAEe35E7hTpCyZiPvdJ",
  "key29": "2Mzo2oxFpUiX5RcTTsJcGjq92FSabBELYmbvojwUeP1uvkQ9GYLH6rmx9vzw2JJNHGpNFZzLcFH8YJmAKxvsiCHg",
  "key30": "2YTBCtMGTgFmFqyZcXfzmY4cZvEmFfqQmfkbUuAdhHEkAgxS7FnD4wTrCe6rDccUaKYHDhHDoCemdRcmm23u7yoc",
  "key31": "4u551wYDXmdXpnSHdirDVzRfskxTZQHjxb51UKnnbJENCn57wFv1YyhqPBcxEpEpxEEuwxbnkyh7LMKMC3pti6pS",
  "key32": "3LFzzMyFobYdP8FuPUctT9LJZBf6yatZSbUU39Yj9VtDpozs8Erc9W2tiaNRBjTP3kiy9GSD8EqnvSgxUssVaTGb"
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
