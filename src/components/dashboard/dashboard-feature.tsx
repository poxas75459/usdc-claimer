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
    "4yB2dQeEmUNx75Sc5U4METMBhAMLNyzBZazyxX68AVFbyFcDYkNoV9qfMoH7y4oCcK5stkv7SpXYrjR17EB56SHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XwV6CFDze6LkuZZpAa2DcKgmFbF2d3DUxcXo9DTpYsH7BRqEuzfssBMiQNAtE1hChK21Mchep3J6CqcXaxX5U2",
  "key1": "iFzgX48pKCM4y2CoYgWF696jb3cMtsJJ5XnHUMLsYkBgZvSqEkwLgjSoNvNHQfMStuf7vTDWGZk91pQrEVnUsRg",
  "key2": "5FfkEJEFy7zwJd3DXr5JruTqLmNppmw6HCt4fEf6BRXQW66vZRLqNRqP47JPrYKkDJMNkVExjuZPMGem6yPPLn4H",
  "key3": "5n2fzU8znMaxpDNF7C27P6vx8MMA2EKzBdrvxzenWAzkYkU1J32ENUKqLZ7PjLH3vRSBqMBFiXzzgcNuETVJdMc7",
  "key4": "2uRqpMziqVNVDZnt8W4ejG91xkwra9uMZWJ6LGiUq24rQB1uw36qWVRdGeJuSwURSR95wQCsUa1yQHvjB2HDACgB",
  "key5": "45bv3NBC7RAzpDxhcsQi9sJvL3xbEt52TTFhFDx1w3YT8x9TX6T1o4YCQVQbVEGa8C5Tx3u64Z4TwPcw8r4rs7yA",
  "key6": "26f5R2qZXBZQ9EQDjnKMNQSeBQKdtnAgfPSiLicc8opDcPiZ1a7i3frDYR8pJnYP2tMRPmpjqwhfaKRkJwMGYiM8",
  "key7": "Xxg4tGcD1BdQtbzQmJyDfY2HXmJdNy4z2rCW9TfrmoxULBhbHwcEERv8T8mQEsZWJQJUTm9XQtFv5XzL7YwRJ7o",
  "key8": "5mHMSvCJe2PMNW3CyYC5QGUtKNh1Qf5K582EVsx2vn8uDULfyY4Hqt7Tt6dgB5ZhdLESZCQzU74ms4cC6oJhSr9q",
  "key9": "247xioQSPP94GheKayKjLaCnW1HNmEEbJ1sNEbAnRisEJqxWP2NDMvcT6meawqQka8rCjRiUdzZAnn7CnSff424r",
  "key10": "4ojcXyW9zWNZfk25BkE5m9xkUupnqqunGB3ftGwNtWnadt7ko2zjB3KyqVnFDSXcwtmF91wDSpgWnwJL2bFgD1bv",
  "key11": "52uQmbshXr8YEU62FPCjtkPU3jTBrqBYPp1du7XSCh5wzxXV3pYt3SWzHrdLL6bWvsJw2KWMx42Avk3JittrFuxN",
  "key12": "BK3Q7fThduUyLfk73EgUQnx36oNDSyhsj8jmbSszvMVvBnJJu5kcskvTX6Z9s2zkHEYShG7kcvhS7mgZzJdkfit",
  "key13": "EMpYP7sx6zJdWVH2FRnLH8tiiNc7UoMKx61yb7oGMJ1Spyj2QZWSFWjv72zB2CKAz8QJ13CiqV8JK9Thjmd9GnX",
  "key14": "Kc89aiu5Ht2J1fMXWieVkDoGwMkrRJSva4eou3wVKTrAX5KZEJa8aChynMY99AP2qmJM5RE19Amr2cWBWJZun7N",
  "key15": "2JDQf9dnLY2GuhFno9HUy4wTK2G4mPmCgsR3BgPuu3wiXzRSRkTHAc3STwWFbmEiwGnJsohbMsRidZccT2zXZZn4",
  "key16": "3nXwgmv6RwEVjQWyMDziFF7tPNUekv9UwcweL9nuD9bDeeEsW8HtCZpBrsXxyBPLnNtrNs8YV8pzQxwtvUPyjwBL",
  "key17": "5pkM1n6D1V2TmEFFjUHPfTSEAmnnT97oZbZbhd6vuXAyjvGcSa7xLV8vpZwVtF9Ekr4avAkgu3Ur6oYXpRKRUWED",
  "key18": "FWxk4YaF3ausB2uqitiiqqFHPPjK3fug5dRqaER2iKxRg4YKgnJDPTKN27SFVRJTGsNdSok2qa446GYaEzDd7At",
  "key19": "41apXPtfVaHThh2a35mVhfXj1gBqkUmMeNN8yfGzjxjupsRNhzWSE8u5KJ7QngfLShgKDj8J7kQXx3rcGwo9Bbdi",
  "key20": "2FqZrVgzr8X2GwkampqJitPb2RP2oYzmR1t2hFU2xnqpb8dJLgZpatzrEgecsigsYVK7FKDPNNLg29D7sJpUdumd",
  "key21": "2dXnzMFRy9vyg7d1sjwDsVkhUfgERorSG8HzcJRpudapQEpeHDrmYYrtURSX7p5bvphAqfAm9Rcqj6oda1tKcLdw",
  "key22": "4QqKK5ponYoDnoTK7coUUDwn9WjYZ4RuwGa1MwT8LVymjZiR4HANCqYVoQE8UzfvLyaY3Lp3ryUrvxHezrD6oLYt",
  "key23": "a165qUCuBg4RMSNcvU8C2uqxRRzc2ofmeSco5SDHQGNdBCvTatjZ41oTmdQM9BDXncyX8eQGPGBGQPFY8ZG4goB",
  "key24": "3iikWHuVt1BYwEkEenXjpgHWSq2JHdWvU4PF2L3oRtqMtYCKd2JSfhhjUUomKDkPtEii7cfpUNn3HPATW82ZHDai",
  "key25": "5qqCvFLfLrxgcDD3EfNN2HPfLYPHQJt5tqiZEDcmuQZpV95rpyq8kHzcZoJqgD19o6pf3znRBCU2debH7cqwEmEC",
  "key26": "38b7thcYTqGF7J3f6nyMMK17QcFASeEKSh5558ZmzTejU1EjvTj3e4xZVU9A1xjrySVfU5hA9JWry8NeSj4cifLn",
  "key27": "5Jz8DZhMigdyGpdMKhoeSPpJ85yFQPnejnHtYFyJdRaXPsmicUygPoHcVeFpA2BQ9Jsk6GJHzJcSyteLRGkQFcXm",
  "key28": "2bkMpKoPqqkPjLGV29fKKXikxejr4xmpyEiMp4JhwZwSebuzpNqvpYX2bZRgxEgioXefZCec9VdkPT9FovfpKRTD",
  "key29": "4bQLdxQcMPKBJXuaTqWTmwMzuv2LRbbFMTSfmH2PWsxK5PGchiGWmLVMDrPZ3gNbgp8MTPZ9Q2L1JAPN4H9rRp6U",
  "key30": "34uSYuDiwsZYBakXQBxrjaeFxX126HbpnHr5r9VFggBYhCKy2K9gJhiDdo3RpxKR4wbBp9vq8ch5MGouRSo9NLKA",
  "key31": "3XnLj5Qfbij5w3U4uFtoJJGXWz5MW9qFYCxY2nNppH6zkfDqQWzS5mtETgFdAbswaDbaTV1umKEKLx4ufKzns7gE",
  "key32": "38Q9kkW2FcQbAAD24tVHsqdjPujbt9RR2oFxMA4tCMSCSA3i4FJV6nfzUPJSwLddZxzfLQNVwCuEepHy3m2LsCQ"
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
