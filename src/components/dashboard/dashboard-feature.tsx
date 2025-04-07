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
    "5bp3Vo8xVdwDJysfbX8HnnyMpq9wim5EdkrNpgbHvsConEs7kbcT67B8u9rSP7y9cJ3biHd4wRvynYWRvUAfwGR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkm2RyMKbvnMTcyPXesjWUFGNEX14K3adZ2y1eQhu3aXwUbY7bc66jmciLTdDoCmuTFX6DBEgAyVZYoWHmpVX7u",
  "key1": "SN4zx9HGFzafd188bLjzn8WDVYSR8ohvvw5pNk8qXSNXuS6QxGyx9ntK9v9x24W1xj9V2KRkjkht6jsKdqjgKF2",
  "key2": "4yL5ky8dNK5i8cVhnBbstxiyJJwGm3EdQhqZXXVBAWjc84CGAhZALPzt5gc1TPGX5d7fv5CqbpLZAgBV5z6d67Gx",
  "key3": "39FtqYmqGMSLyLkZqzm4bMRzrwCsWVKRZcppYmf356AQMDdKf15Sv4zBWoqY2mGSibcm4sgXxVsWar7vBDAvNaWm",
  "key4": "5JRbqTL8BYH7jf1vu6giT34wKRr2zvuVJWPX25BeAsLFyZSsUf1EbowjTth545ESx6dE4rxdo9fkHkFUKRrCeT5N",
  "key5": "2LzDiAwCBZVcz5Gwzo8LtgVV2Y9u1NspQUoSUeuEQkKKFYWiHFQ7MaXwFmMxj13WMv2yfAEz19b3QYb9Wsa1GsWu",
  "key6": "YG8oPafZKnPcNs1KH9YgyPZrDYf7xM9t59iboTUWPUQNE3XpV1xQpkTMSGE262okGrw3CfiXQsZLpofbDE4fnFE",
  "key7": "3JpxHXpGrV7pN2tikFSzHG5AsNwmWAFXGQDedq9Lc3KqM7exBNP2UZ2sWy7N5HQ34B6FV1TA7KqmLykCbFRu1Bpp",
  "key8": "4fJwi7Dct6aDMkNDo5KbLA8DaQ1ZvYdYrus88jJTBFP3RXSnFwCYbdvns3JJaDHuBN8pFxEKK9ct6FFLpz5c36CW",
  "key9": "22c1PrGpxCKJ1ZekuXDmq1GkRKh1Ukg83Kfwkm59FLtej4Fu8cHbX9UxuCwvU51qGKRPMfFqQ2TGpoZ8AxoP8U4V",
  "key10": "5fhHivHdRRomtEmQDJGiYpotectKHz799KCR4FECMCHpiPPMw6euo74RjxTWxv6RKbYP1deCBmoKWkMs2kUdczFr",
  "key11": "5d5nhKJsYpHBqKP3QyUTuxkKPpZ9vLeub91zfGYMpLWJBVdmuXwExZKow4YdieLV1GUnX9YQEguULkUqBhhqR93k",
  "key12": "2DPrxpDwEMmomuBdLSyXLyNijEgFKMqpdJEs78sXK3msdy7JKmRyQUCCL9DZVv383CE9g9gQ1AVFTk5snWg9J2qV",
  "key13": "4UGpvw5XCHr4JeRU8RFLywi3anQYFnYfrSSs6KVqjE6rS9xfcWKuymANqtZ6NHoGwianfn1k9aJ1Em7drWxsLL3V",
  "key14": "2GkyHzMzzw6CAYvgKYw8Vdn5ZdLPpygeZeUSJFJ6atnG1V4JPYciNYiZV11AsRrzYwVnhLmyBPHaLUXwU13PpEed",
  "key15": "4AxnaZ2ZPuTag7FpPzdxatYxuho6EiYwDeYQUtjDwGCFD9fCGfwULqbhEzDqSVAdDjgLDEkGM61G4iEqkLzwuzCV",
  "key16": "4KYyujrzeJToAArznx78tGwE1fEiNhX729codTm4yD8JU2EwpTzp79F4wZZLKsim7YgPX6fFJKET3LjU3VjX7JTS",
  "key17": "4zT3z9b3qaVP8RU2dK6ksbBA3h9o9XFwVQfipJVwZkAnJZbNQQWcFUSP59BjUBHDJiV1gUYzoF4CzbXnmKyJqYGJ",
  "key18": "5UrnAsjCFBnSU85NABwor4jaenJpUkpLHW7A91e6s1BDy88wgUz8hzDF3REXvN8aJccs9h28vwBqZKhEsyMq8ZYb",
  "key19": "5ZF3gwfkoN8qJtD11tMcvVetEgrRqX7QEB6by6nspa1bmutuNp6u4ZMD7Pknr1zwx3u8CYWm7Lwf7UShWVNbbvc3",
  "key20": "5KaJC6vVWZtMUKzodB5KPggMVadfqZhcvC9cxqGxz5m8R4c5qnQyokLga1hT4FJv4JDUJ813ius4NsZiTnppsjQu",
  "key21": "3FZa6LujV1Vw1xtGsE9MDxwVHdqogiSb2juPhJjodLk8da8dUdyCi3xGwHG4Ak9HgrVCR6uPQJFKmzAkT5GYp63e",
  "key22": "2R5AoXjifeb6PrQLVij6j3nhZ8DtMZzuypKqQY7NmEARQo12ZcM5vw935wWmvXJHbw3UEVhhw39N3C54KpGyQF4a",
  "key23": "2YeMUQ8QSMnsMfmaiAf4ZyTRmaqHx5t7WKCXUEFsjm4xRb48Fp4ofcMES4ak5ftjZJS3TUNKm9DR8oNBiy3R4A2r",
  "key24": "54c3x9eEyWPPw2v7CMn6hrAiQW1b6gPJEQTXtLzCuNTQ9kzyBHDyZdCDsdo23qzbwXih3qn8cPokxBJoUdb2uJp1",
  "key25": "3sgDSPi9nqgSvhKHjwottQNzkDscCptdyNXJRB4XDscucMkfw4Mxq2WhrCBA3AoTZjJ9ffd6kSs7XhHGznT3jUAW",
  "key26": "CUE54EGVqYkmGukLMWez119DaRDhynx4SVvqDVjVvt1RzPFCwvqggq6pfjRWQXgP99eGgxQjXH2uxy3kjioKgWJ",
  "key27": "2XpBkV2wLrvPWyLKvpzpoTYYwrQAKtem4DQadmnnif873rMRREHseARaU2nVkzbGcW9T2skDw2xnQuz8s58nXgWu",
  "key28": "5sV7K35uLh4ccfn2MmbwkMMfAzGnafktUTtEW5JtHqF9Zjp9dfNtWuKvCJAp9znkvgBnVAJAWxQ5spLH5RY9e8nb",
  "key29": "2PF7kdUfwv13WALv5ykLENBfDKbTLjJcrDz9cF8u9BWf2jHjPZfCdk9LQewh8onyjDq9sFjci8ut7zAs4S48TD54",
  "key30": "3kBAXmuUdpvXcv9YuRWBLcYDyJS6VyPMF6q5hjsk1EFAB1dLeTqcvEmURn6f6ShTYwqNqFU2snXdYSsvzEzqPZET",
  "key31": "KaGz1jGGCg2XMsF9XsoWQtPajXD7jLjdvs2wRAp2hj8fH8thCxuuX7DVJDxBQcfsgHUatDB57No1NvrTaDx2PJD",
  "key32": "3q7FAZoEG5yQLwSdkrJan21DZBRt49r7kUDKT9SVQApriwhaT1Uqr9Kapo7BXZG3wswwiE4qs4QAbn6YdhvBETW9",
  "key33": "vdosynDACTFjepQRgT1Lrtty412qhpMFZduZECHB4W8UgdrECEkrcCBPikgyUQ8wKML6xA8eEMQAUdZcMkCtZci",
  "key34": "32R6RJUFEwsUkPMiTBHs36okjsXRVYZD9xp7axdN8dfPcBhSegMqrNg23k95aiWjdpzuHA7sAsiAkKRNpfJGRoHS",
  "key35": "3Ep9eA3iHxigBh53aRrm7GpyucSmYcTheTd6jpao7Z2rMx4c25yNtt1UQfqWzXY8hsRfQJ1YTobxEUPCcmPYfb9s",
  "key36": "5D3cZRv2xHmBhXMxfiZFKkPpb1eFYGCirfonEgb9mNirvkPaEpX7fioDoibtKUB3BidCcyiFmEycgzcT6qZhMkwV",
  "key37": "74eLQ9LtmNfr2Jx55kJR3wS2U7Sp3ZVt8dzmhHjVs8rDPYHS9ntN4cZaLf9eewRrmh222CNERM2W4yCoHwFJLYa",
  "key38": "4GmrigDmPZz9kJ62MKnSQ85pbRPjcDB4JpwitW9Ze8DvmYQw9kyRjtqdtDtEVP6JrXNQZapZ86dJgv93TUcsL8qz",
  "key39": "2TN5kRPewDQKPysbvz9jFWCz6GRu3abG8tcpjUZkfsxJeAwyYnGB6RLUwH56AvDpggAmiWfSJvNuphfa5ZwJJsHv",
  "key40": "32zmqMvgnusFygQZgKLgsYM3VVSAdFzkR7f1AKqvQG6dsrLwEJChMaAzniQXYuTQSBLxsn1P5cQbLxgmcroWLoXw",
  "key41": "4nG2BwStzVR1bTXzcfzJUg3ch1WLTK2N81UL8HpkQL1a5c6tSVgR9hraAfP4sUW1KkXjLJU4nwiNmvmhTGcAWSby",
  "key42": "2mgaPM3PRP54Nf1K8JYA97q3Yx7NQFxngktXDYYsZ612UH278grcaDXRP8GUWGRby4ip2GDa9GQku21YiKZfZBpG",
  "key43": "22v5ggqFssYsGz16FpPtgqJNnRkbk1W6xxG4pN1ho6kJTpjwg6j1wF8aAW8YEEFWVzfTiMNhCs2XQviFvJboKSVx"
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
