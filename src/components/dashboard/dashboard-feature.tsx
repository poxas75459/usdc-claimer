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
    "4gnmwTdog7AdioB2kH2n287Jwa8HFNfToi2MSpDQ78yFdWNQGcsLAvDaX6rsabzyJtQnKGYvuLqbvg1koBQeTSpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EHHSioWRWprvyZUTH1Qha65mzFukhRFjo9fJCfEWiZvFC3Cp75bWkNUbT4xjBqdvzMwoQZHYpyYzWMJbVT9cnc4",
  "key1": "5VRje8FJzg1ECLzW7AHVeYGryhk3RBr2ULWMVUFvmF4QqJ3zNYC9Bb7ctbnFN3B99rYaDRZx5Hjf2ykoQRiUQ92R",
  "key2": "4E5bR1db82ck5gwkExxnQy12NYEZkwNUJdgbLKesjoepHSTRQ6yXstLdEfprTSh3LE3iRPZu62vppw29vSxwWavf",
  "key3": "5gZGTDf8hyePT698uADKVK5jbnmtHgyeshqRZN5uTAL2utULWPuq1vArvouWBFDB4qsnbgpMW8BhSQD6aujz331",
  "key4": "mZARFMwfaEndGUbxTqWZFBQYMzTE35ijAbtthBJZ4ZvH7sbXJ4qQB57nTWnoBroXWsdjkXHaaHnaqqFdXqQsU3V",
  "key5": "t6QCbsmcgWzBcFGJDSt2r6YHEeiSN9m8meYk376i58h8bd9BMEcTDDSk5zJmkTj899uMkXKAn6SUWQLBhnUvhhP",
  "key6": "2wpHaKnXX664pT6LSsjH17eCqLwQtYp7hXoErS1XhJybwidHY8kvFZYxob2n4nD3yX5Epmmjp6CpBDuLLYqgCHhA",
  "key7": "N3zZHXDZ25gK6tHYxbsJowiwpiUZkKRDBxpjoST6t6ycdtQYT18nudK7iAQ53E894vnn3prcb3H3mY9LZthrhW1",
  "key8": "28gM6kJnKa7xnm1M1RaZJCaASKr3TZEfnRhGm4TwoV8wgLAgkd6zXyWVkRX2nvxDbUpWuRonuMiGyEvq5VTiH2cK",
  "key9": "nsjxtFXNgmCf9qGjRjDLyWG2KqsvFa885D1NC3P1jVk4EmqHEWLHMCGwiTAhsiBtbTnNCX26RRoR11dTzpNeHov",
  "key10": "4neBAxvG1V1e2mNF4d22k6Q44jKR7atU3SynjDRnXXRPRH9PCiyze81iDMwMLPSnj49Gj5Cbd8sNTa6vYJ3E8Yk2",
  "key11": "4wgBdSDu8cejUeHcdFckyhCDsrheMJbnrGbRNw3UPWRmJKcNnprEumhv75BSWWdNzrKhFemyzz6fjDCSNZw3FGeM",
  "key12": "2hSWZokD2cNFcNTiG5mRrx1ZJHmtCqArsa2TRc7DoE7NnYohzPT5u4Ly1tNHKgpbYd5tto5cScNbFfEjka3Q9LMt",
  "key13": "5QkicgzSX55JTU2yWZnr9owx5f6JJYaJCPcejuTQm5xQ5tV4ThH3YfJJ4rmdoRj1nH1xTyP1LEGqx9JUN2h8Aywh",
  "key14": "58F6ySJJ7W8mMS67rAFmZDWNeCbvvMu7k3tAKgPKd6YRYbX2sThT72yoTemn64F78kBhXSbJUeH6Z6gEHEocAYSA",
  "key15": "GvnP3Qw62jHmt2W7C68hhi87d9gG1jznAiXewx8NsQwbC7yLTtbNR8sJygVXhwVdh24zWHPSxkFQZi9HEpHqE1D",
  "key16": "qGYsaWSFnP1paMg8F6u6d5Mr9E63ncf344wWJ5HLMxREmUn5HEeTUYcs4G7sC7mtYQxV4M24xh6vLEpMHNWHaPo",
  "key17": "3zLSZmKVrJfu4YaivKHgHKttyCraZQ68vfL642Qga2A2xbFWMUMVCgnHkuxfnMRaHixGZHdaDjLACKP2Rfyh3Jua",
  "key18": "49t3WunjS3J9NFwqN8pcyxD6rkfY5mk9dkRJHLc6DVMRQVGYfrqBnwqcgeiejVGJ44gQyQqNJ61BHfmNckGUMTg3",
  "key19": "4PpFj47NTnQsdysG841ZhqHZKM2asfDCQPnrkPjGAdU4wrKXr25AifphdSvFQZqUkPMxihmEKbGDhsFqJCbJRGZG",
  "key20": "5U7DuJ8Lpe5ApiqDeMLSYcUEh6Zym5TySELaNRJfD1MYyYNUAZMhQu6sjrGftN4RBjW5i3eJgFRxK5ZgLBPkbbQe",
  "key21": "66oeXecF2LXdcBPM3CbbEDV18wW1qKzN6f6Z3TzQ7R36bMxMZnggAsTvUxpbMeS7uYa9Amno3H5zA1UTHMQcnD7h",
  "key22": "2JYFNwiVDcsW9cd2VQKozMLrnY33LhdFnpHgvFb3hy9ipdd1vmBUDhbhAhWoXt63ch2eJkkg83BwD4aG8iZC68ho",
  "key23": "4f4pSgGVHZHTUtkQoEgzeNYs7594bgiK3JwjvF5dKbAi6U5DVrEYSdyJoSWWEpxSugqPvDHbXFinTHtzQ9D9FWNb",
  "key24": "3sQHXhbeJpVvXfrZtnygVdfF115aSE3ZcMXC9fhNHxqBK5Hvvdo7uGSXix3egYHzt55soaiK6ekHVYnNecQrhQ4q",
  "key25": "3f22iZoWyC9VQgn9Bv74wpi22FN6PBDEmAjTRV1LFcqFHz3GyzA49rtUYGv7s5W6YVCn8aiSTJ9U1aebxHhydJdR",
  "key26": "5uFwzZ7q6pmb8vGFeowSTAta72n29mmYGLs3frktG8HMny4SRX9MDrNqvYQF3ELmBwsD13eS4zEQb85mcut9TGXo",
  "key27": "SSjatNtHWzb6gQKWA7aDpW4gggQgxJg1aPuujKhA2S3iQ6rFRU7FYiw6LEdk95Tx6bxqyQrbzueUCvz6kVk5EkR",
  "key28": "54DiBq9tHNqaSoYodtJCkCkjSZNzVNsqeLLYwTJV8cGNNwwNNEVmmnbnc5prkZB1fd7DdJ75Gb4cAjY2yMjzDiDi",
  "key29": "44k6vykENkucqhoBTkBgZwsa2PVU292C2DzqT7ujVhbZRU1gpuhBNZZbZfTpRxoLgPFbV6SrA9sboiUa5fnhMLZk",
  "key30": "3QbFMinjk2i6z8g2R8EUWZNJCyE2z2YMijMbsaCre7kjmK53TrWf89sBNo6EgYiVbJhvdJKRMx4Qjmg9MuP1iiya",
  "key31": "kLqd8aQHQmNoiEBXphFNX8AzhiiJyvDfxsdeXvEpHYi6mtz5Vx1CKcPTnGA2sX7fJ3xhDMMJEB6MrF1aMkEpanM",
  "key32": "33Fpvauh9KpZMkieVMTEfufXUh1mSktUP8u2yM9eQo85LHzTP6VrcX3FPNqWKPJhnH3dDqepcA8hAPb3KJMBwvvd",
  "key33": "jKi3evufo62WFMNpFaEeRG3Aio8KEozfZZUMHTg7WMmiSmef6fwNFxRmmZoge7rB5Gg1ytShbLevaZWPBKZgPyx",
  "key34": "GNdFZeH6rZtviPTCNhzchHckMYzoyY76in9jrCgHUoqcs1NFcKRtg2hbMBCU1PutqUhLWS4CruCjzpmphmxcQYN",
  "key35": "5jFyTPkTzqLqq7Mj8vt6oQvqNakQv1pvgqQ2C4gkx6c1NRoLZPS8yoWAKvWCyiheqAgreeC6TUsou5CAHuQY9MK4",
  "key36": "2eUDywCX6QDD3H7UC6f3cT1q8NtNJ1JTmRK2SL7xHAkgavpCeUe8dGvkUeWyv4c3k6MXuv7xN3oSRpQ5kC82SHz5",
  "key37": "ZrMtMSAnWSKQkP9pc8S8tHWTD7Fm7TzhXSeM5cp6xwGh7dWChV5Xe38nPzSDW854GY4VJJxGJQVHvm2FNLw5xcn",
  "key38": "3stDj4SomYtuWqyEQEpT5VGxva9jSjEwtkvnz13nr83kyX9XifjGN81SUEiV1ysay2zduw1hKwnqgNoYrNTmDyEj"
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
