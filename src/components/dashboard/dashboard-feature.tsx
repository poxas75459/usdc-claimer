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
    "3wDf2nMWZbMCWp9wzrf5wGb5xeW6zGXCesNHTfQjQFepK3pFXmqaq1b7iFfPUL8M22eeNxQq34uwGufAMGFJ16tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYffRtT6BTMArhHpBTwRQhoepFkKMi5KCbevm7ejf62oiTRzgbGvJLHiteYfAMfi4vfr3q4o7LiY2UZSifReU69",
  "key1": "MdwUFKmX4A7uuxkxXKun1jDVNHQTiVgvxmB5R2ubnxkCvR8JiUUWrWuwmVTYS7rvWoW2Q2NK4QxmoEBFckJkhD3",
  "key2": "3mY64gd67TNBezgQxykgX2gycMP8z4tJW4NdwviHJuxtWAfhXkKSWGe9PNnanFura3rfe22qAFxZ8wouPGnq3sE2",
  "key3": "65EeqtnbPX33MVUGX2ByiJWC1EnVbk7PGFGy1gVQ6WZBAeH2GZVEGMck7xE8FJVbdW57kcF1dYuUgQzwonrAAGr1",
  "key4": "2n33fSnwJAvLXA4AGqCMM3mQxQtx6FoEYm1HwQgEj6dhnFJe9PTTszkzUjKa6nJ79BPKAwNxQsoxL3bH787pA2pv",
  "key5": "3zyZ8uJr8xgCLeSnqpECW2iyfVKostTjxeYNCeUAwztseSZ9r7zKrFeQcd8tWYCYJDUGidAUbAsPk9GEkgKZPb8S",
  "key6": "483p3MBYLfHWT17yhBRV9M2ejo2P3PdQszBv2tguGu4gNn1XwLXGJbVSVWPVq3QTMiJ9qSo1Fmq3mp7wyjP1Dr6",
  "key7": "pELTxfHKKF76d5wWNV2Ao5h3eBewUTCaPaeo59pqtTauhAJnu2axDwB8h3ji3LHi2jMmjJ5TDDBbMSwpK5bdymH",
  "key8": "4gw7wiJBQxYL8bUkzpE6gbMvqRuTUbVJHtvTo4QoRZYvTXMDu8KWm6GVNhRoQHPtWYf5wN1HtBJvDUtqzK3UMfrk",
  "key9": "49xNwZGLwwcdgpvF1MLeya84eUdfopBCL5PrZnWM1FDpZCQuge8cX8x4uVse5UPtQcN42gcBVdtPMi8srdcmx3SU",
  "key10": "3aqy1E7idYtzDzHRJHpC6bV1QdJYeAHmzdH39R93HbnSbpN32iFuTFVct1e66aND9e1TAaWwUjwkZVQG3wpSREw3",
  "key11": "5xdzeN979AqmHWDs7Xjm7fgPpfo3W7hQkpRmVkAj636U3MuEgqUnz3i4zshqN5GDVVqpX427dGjjsSMdR52u5UXd",
  "key12": "MugMS31W59WTiPeAX55avrHr3ehzqeLv19yDEj191CiXoecURxSTUunjNVBX53S4e2LLTgHrsQJD8hKRk3uBsR2",
  "key13": "2M2CmhxX1myC6iHiDAS1tsrpDN2VmmwEiMrs6RPxhmdQbnfodCxuJR81eq14Baxu5d4grwLDTEiivTVqvM8CUHE5",
  "key14": "3BPuXw7SxteQ5Anzu4fX7giTm6uYkwab2n6qqArDbFZZtkMTZQvEi7zcAKriTopPAc5ZqyntRXLWSZkR1a9Uq8sp",
  "key15": "49LFFTUc4iifcJWigoiR27yKLhBAyWdvLBcdXRZ3JHLuwJZRxwhERqnK7m8ptESQuV2hSqSxeyoSSukHYASdjkeN",
  "key16": "bn3ohPw9PKk4HXeNZJqWnrLmGZ53fkYKvpKihuarT5igVBHXKY5uJWw4oKnzFSyQ3VcYb8qoUNKW1j8pwkb6WNN",
  "key17": "3kAoPvmUNNpGcWuGf2KNDLtiYmndwQee42uqzZrDhFFm1jC6ao6aejB5fYBc6BzbtKZkcj1ifW3hdoP2oqy7SFqX",
  "key18": "2ty2GqiUejWSrRAQWHbgiRZTVUZS9uq5zqRXwegGZEhP7yEdR1KzjLY7acJZuYk2GBEyFngbrZxwdsmA7p6xKdsP",
  "key19": "jrQkM7XRPnRpWJomfifNBNBYVgFvLW4ZgMuUZFbrJbw8GB2ant1KG8e7GBXitieh8AVy5QHWJdZki21Z3wb4Fhu",
  "key20": "4nvs8kGjyxcte9n1hYxg7rTZV1HDJfjvxAEEEDs8dA9Rrc9oV1xp22rX1JiVcoyjzdEddpXSAf15hh7vPDN3NkND",
  "key21": "zV7FyvVrtVCWDrubUndLUcTBo9HLYjBg6x4Sz9mLDCzyzJG6hxE4Yx1BLAc5q1KDBB6j84RxvQCiRsSbS6Fng39",
  "key22": "3P1WudqCmaXjv1EgFLcgXbZySkFhuz8Vs1iGzFCMZN6jkS9kvpyaD7Z9a2wAFxd7mem3SiP75evg2WTwMbjDf3A3",
  "key23": "5gC3NGRJ7b1NQb1t6g1hebdRqsfonGFWBAPELtCF3GZnUcVDPChcgy3XywySFkz1YmR3XFsHYwtNLoPEUJnh36B2",
  "key24": "3HbqVNU3HwGf5HzxCU1zWiVMTL2aVg6iTjdd7kYN7X5svpyJHiLuCbUB6hwo8D9xfECK6M2NdPEubB26uFDRQ9ns",
  "key25": "5nbHmXKo9k4T257WB1HjAeXHFGFYFsrTDG4T1ow6W63a2pYwbPCUQ2NbzmGjixq3FRjnqphPyKpw5MGcWRQ5JMJp",
  "key26": "5tpVAXPvgJ11ADSoKM3wZ8G356eA7x6Lac4asQCqQZTw4HojGedrkeMQCSXb9vLefAYDo5g8QCP6EgK7G7247pfD",
  "key27": "5pywmvJgjRVVap6bwQwCFUZh2p9MUGPkGNGjrdozE6ZXpDXiNEy7oLiMULPjaqRZbtQXibP9HiXFyc629Qphby1F",
  "key28": "4WAMkGdCqkSqeDiRfv6RTgPQbrUpvdtbKEHzE73a8vVe27ALvryPcs7k39ZqsMjCs1XqVXp4BC5NECE6wD7cmSF4",
  "key29": "4wAqwR7iXqVXvF2zJKUxEyRhuG5G4UXavoHXcfv5wTNnPvRfnWygEDGX9NNoQGabeQ4yzhzvWWvux5VYaNFWKpaz",
  "key30": "gnHzYU4dYpimyPmR7VRfsDTX3c5dTbQ8uGHEAQfjQSUXtvxjKzZEAPYZvdb6MfKXgzK4CK1GuuQ5cvru3phXDkU",
  "key31": "2yqjKeMskuHwu9AfEUADXWpZadftw6SJZ34Widd7WZGSusyXAsWVtVMY6B8rmP3qUji69AD8UPDQEgR75prnZJ2p"
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
