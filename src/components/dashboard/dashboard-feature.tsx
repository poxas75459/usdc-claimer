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
    "3BqdXgTdgdBGsFMJ1pp4VJaWt9XKRfEp1SFR4dYeW7wYKD427VpA12HW7vjPb2eiXXoKAvzijYQvY6bKYiGTSRqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PvQAkYmAvCDs3nmrpeU9mBtkWR8Kd3WmNYzsuakKaZTS2jJuG1X6cazejZ4TJbwAupWQSw1PufNdkQm5XWeD5oy",
  "key1": "2AqbpqTNDKMi3JwS9SoSXEwrgPv1FY3nFdBkF1wvrPHAqCLfmWNwuRDhkpKHsnbo61VqP1inXtqQKHdsFkoCaCWa",
  "key2": "664tvmTifH4gTYZKEwPFZv65LDv3Gz8aoDdGkDGpXpHA63V3a4DbVhRyvDMAMuxDYnYJ6KMKur4bzkJXCPJS4joP",
  "key3": "4WvejR3KjY4xbjgaJk5bqD1uzMfamfv8xKSRhSRy64ktWADunQBHNAFVhpPe7fSuKD1k1RrZUGHwFxPAXiu4zMTZ",
  "key4": "3fKyQTJie3o8e5fGbbmELwKKnXtNLX1CeXJdV3UisLLcuGbRTNteYEujBrL1G79LkTv2haxDY98dhJSm5osiNoUn",
  "key5": "5y2hTdHpx88MBGt166vxaxKZH3fsxrK7oL5GfzneLXjqAmimYBXoRAup4A7mvDTwEd1ac8uYKthq6DiFUrHwxdYs",
  "key6": "5MNaCXkbBj1pzhJ79JQAucULYsR2NP3q5QGog95Ly9zuriJqE1FFs948WnYXZiVjm5j7gBH1cLHfXwzXV8uGmwr6",
  "key7": "3armZ6JKjCQZfSwcnhxxKwmFRXkT7mtm5Z7r3sXq7RzpMA1GZfN5vrhKjYdczWLFVTFGeSQhkhFCyJV6X79pCrRp",
  "key8": "3tzDXZ2nqefFirAzMnAYmicThS5xThS7cCFoVvB7bCcdc63yLUAgbwpRJ4F7bE31ch2PxWYfDyUn26EekftMWdzk",
  "key9": "2eRTYyRwsSScPHcp2qFxrJr2wypGdDxbqRMc8fZY4Zz7XdFAyuxKwjNSVnWY7iMUhX3vZLwWP4N6kMv3R7r8RUK8",
  "key10": "5eqa9gXMoF2mypUdtRdKf5P5GvKq2t1nNriCbG3mmhAdjsU4qfWvhvbcBo8xGdZT9GV63bwBpSNd9GGQxRwUjabQ",
  "key11": "3YwkndHGPXdkLJbJfCWwWthNVwPjqwJ4tZUGcVZCYvitBvYv5mnvoD7u3ZnnWckNwyYPjNVDNXiLyYDJ5mdNmkjB",
  "key12": "269siq3riUs99mTRuLFaDyWYXK4JLaaHmXnumfHbcNyGi2yGoLRyoavSnuQbj1qr2auH7BzfQaMggJ1wM9U1WJhc",
  "key13": "5DT329vxrxzCbmV79paw1aGiupAwXQEwgd8SGfrWfR2BXBtZpsMETP5a7KNke6EWx58iMuWv6n9Huvitc7HXtPMu",
  "key14": "4i1cXSMonoSXM51x8jSvcCLvSpB3uAydr55QSGY3jJDWtJJpnumnshTPJ8vmDrjyzSdh3XWLLCUQxZvvWVKBU5tb",
  "key15": "29Zug5V1Dw2UgKzvbeijTyqEFL86t3tQpaG857c8k9GthhguwRKB4wUjhy9GCWw6SL9TwoUCU2neF7aHhLVEoZKx",
  "key16": "5KnB3fZUHWbtWWCE572Xfu5zHoqUYZLMFqxjEz7E44Eaps4uRKBNwydSZaeYN7jrYBCVvtWvycTqiXuJGvaK5pLj",
  "key17": "35f76frA43qGhAECbuwM2uWTaZuGgUmVYXWHnCpb4yKB1UznKgCQzfmaAS747ZmDct7yjtXxT6ojUf86ih2UFFqA",
  "key18": "5GcVaTdtq3zbV6RiJZNUrUw1wWWgDfgJXpVxq3i8u9Dd8KfPrHbeVE6JJZkhh9bLvVtjwQEE2WUMLWNUYxGQC2ZN",
  "key19": "4g5yHMuCovvj2PKJaGq2zB8d9ueqh3hNRXEai1NeKsf8FzgGUrv7tZasnaB2ZpwjzUG43uu9HU1XqLmqpGDmFDhb",
  "key20": "3ZzM81u2sbqBUM95GoktTkW6a7WQcYokqNuBAzGaYPMYHgfx6qNBb2Yjhq7wb4hyvp9UuN4qerapoECoE4GkJeT5",
  "key21": "3rH84SH65kMkTYUQTdeEHw9yp9bhuFhxDUZh3yRkAaCgAaAvhvEC6AnM1yjHo3j7vwaepHwhpUN6kSkuLWmKF5Tt",
  "key22": "2mkmhkiMhzrAG2mpXH1TsxdfS8bRwWVm1UEvRjLnwGqa5cwNoLzrHuHHN3bs7yiS9xKJLYTjntjhHVEDwMv57XD9",
  "key23": "2SnWisMqJm854UBzP63kTECaLKq17MGpQmKtHzsXGWgiU73LKGTZW94fs72FkPrTtuNkieJsrgjCZNbjPG82o7yr",
  "key24": "4p6gPUvgETVpdJyfLjjtN8BPU9LMUhVw1QLmAitzJo4HcDuDyHiBLjaSv488XxtuFjBSReT6njVv5YpUyDRYN2Xd",
  "key25": "3RMJJmmtm64FnDkwtRiWkKjHouJZHPGKFNMm4kWAA6K6NwS8MLAbTWQVuJVuEtpuf2Y9K7fGXNERVdxmB718FEhd",
  "key26": "EKZS7FF2AXstzqVzgT881W7iRxrjQMp8Qy7SEfgjHFqLdWZsBgT4pcRdYu7xcEiuo1zQSo2QaPMnjQR1CosLDje",
  "key27": "3W8n2qnBNNoxU1QvuCumjscQRMBtqvQX78EwMZU23dH212iQiBkoSdvw4aeuYGv6u45wnmTSnh3K6QfK892M2CJK",
  "key28": "3zy4hEN8mTdF3VmGAZyh4gXLRgfUfy3yKjHE74mm5D5rsfmxcXzG2T1AJLQZCPdV4HbUBsYFZnRosH7ZFtRpVt3d"
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
