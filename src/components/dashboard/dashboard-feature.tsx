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
    "3SknV8eJJHtDxDah1WzGsaJ56m6SFcXNkSFEgFhAobtbokPGwUC2KDKpRE84MbR6FPdJpdJ8duA93ejYGtEAedQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKw3w2rJDNZa76X2iSWTdpfT96Fv75Tq4vFKwkRQi1F1s9Do8GGz6qcK61kZHdwAsKmhqFjPCc5Cm6g5tmSHibA",
  "key1": "3ajuY23cZdhs2EPTi7wJoymdsgaWfJfhQM9BzBetFJySQmhSqBnerguFbZKSvx1VqgdMhfJERPs7DUWpcREJnnnk",
  "key2": "YLL2e5fLVXh6FaN323SHQGimfs24DnhMyXRi2TmnZfvt9VX6duXNdRMqHMq4CLqL8A8kRH93NjvdZTW2yAfCZ3n",
  "key3": "381wrHfJwfJwrE8Vxq55rHzQDG5EPbfLTumpYXKWSZnRER9eYDVcH9zdLZYECmCevoryn2UmYhcoYxUfwbGN1bcz",
  "key4": "513eEd2J8dr6B62XWbppK92Kyn9KG8k4CEu2F46tpBVEYNzdyH62EgXNUbnFgKN6Ei4vtTLSSP6STuBhFi2KxvSW",
  "key5": "3EAuwfuYSoNK9wiQo6eh4uwAXGNfQantqjiVNHzxd2hRkh9vHUcTHZu7yJ6LVfJu8t82kXmbsBPEAYz8VjvrmuQX",
  "key6": "4V6AWHZWdMCciHMW3xJLoHB4AquQnaCv9kBawKjs6wc9WBu5CA14XuhqTgtQjr24ddAMHJV29z8LmXsCTJ3c232s",
  "key7": "4DxbJGwWf5FFeYn14dqqcFXHBqaQAmY7dQJpww3SCYJQnSrumeBqXGDX4eeUzWTamFrzCTTABVPfQN7goau91wVU",
  "key8": "D5614bKcqmpMeiVwUi2EMmUuYJnisNmTkWjEkVqaubkr5HEo5jHA5ipPnRN373Nide3VwTsQzKQvSdSZBYqWdkB",
  "key9": "3q2JdKk6ku3tdmV3qWa2rgdP5CW5JGzM6ezhLa6Dpkoakb31bZuWFBwj5Qj1kbyApEi81nZPgnKeLSfLcfcVbqPx",
  "key10": "3KXRMfUQumxSdaHYGfJzkrgmL4PAhE6PTq5FbYjnyKyJUbTmcFrsCqKXNt1VZAyCiSgpprX8woP4jb8seouFsrPB",
  "key11": "VtNUZjX4aK7ZBFoLzpwA9apTY7Z7ndyN4ok5ezcerQE3PWzYEVbtR84meSpxkzHCWxMUKz6tKPAsUGaQLxaJbKc",
  "key12": "3jDEeAjQAmXjH6om3gQndgf9YCJLgCnYy3JYZdkkgGCeSBBWVCoU63niZexHz4EvQF6CY1CuH1frs9LrT14hHjeM",
  "key13": "3LaBn1QbeEocBWrHcMEYHopdcL76sAsEhD8xagsezP9RnhBwd3z1kVYv8hC5WgZAUoMJbYoAXV3fPBJ7Au81Tnb4",
  "key14": "2kW34rNiVpto98Y6ELQ9FXHpcs7XvDPs5j7uej9LqfxNYZHGrANKz9Zj3ieNePW3XwQc4ZiybQXWirHSoU3LnAsc",
  "key15": "4HibWA5XVAeNNuHJqHybmaxjU3w7dVPvV3hCHLDxgwes1ihNfybkBT2uNtxo2ZUNtd3Ux8YhTvzjZKdCnpeJXLKu",
  "key16": "26iehHxPvnnM5KWfYaWTLCwgwTUJKu6XqywWJuviFqXgNYSfaFX7dxSjhJT19BqS1KA5b3KYm7TnvuemZQkAnwGB",
  "key17": "4fSZ2dTbxp6Sgux7XtVPcvJ3W6gVX4hK88owAqPFNKZWxzpFgUBj8BwKut1wqZmEmFNtbt5cz3EMw9FKHzXUwHfs",
  "key18": "26BCB8Yehgs36bPCXPy5Rm1Ur4yTmsvEEau4TcdjtbL9Yw28Z624Mzi8NADhnK2BNDAws2GrmAbFVb9kE5MYWbEP",
  "key19": "2hbLwnRH4WG6P4WwcoBM45mXnzh3eZfRkrkJ5xxkNVad3JydHnGHvhHCUQJH3rLAYMgP64WdcRw6GYVnXXPQ9egN",
  "key20": "42u6DdG6ZkB7rPkooWf976xsRuJgZ9unuzrvNKPFxuxDbnxfXARGZRj5e3Yvb4Z1bNVkKp1g7KWR56uwfuGXZjDw",
  "key21": "28VZ3mmnQKWCyftACTitEohpSzraDvGhzjmnymfsXHnoVDhUmFFqNcTMkhjKCERgdSy969kPasQ8PdHrFPnnt4nF",
  "key22": "3CTdsWCdtXtMqdjGkoDtHWH1dJEDYswFSHA3DdBPeEG4Gk24YN6QC1L573v31FFUwxhBZhzx1qHGytwFxHH7gY7s",
  "key23": "3X64pkWa94r3hxLVXDvMa1Fbc3fX4Tg2axwHdubrncJDtUs9xWJVZqduPzSmSR3rybs9htrTLxMXzmsehsmi1vEK",
  "key24": "2R4pDAMKgcx4HeJk7qY76ZyJuRDeS5vFNmiPy4o3Tt9a99NhTher1DaVin9qGDL2kQQH5GK3S44pJ8GuxFi8TvEP",
  "key25": "57iEx8dvo1o3igirb1RetEBT5tWGnrga4wiptWq3JsN1Vg92rtmfQAArw9B3y4TXhRjpwutUeiFMxyyhJKe74B5C",
  "key26": "58digsNZXGqd95VvXv35oYh82qJtsjRemt3gYHxvP2H5jK6pB4mujrkfFRCA52Mv9ZWiZvVRNDyFZdRG1okDhNA8",
  "key27": "C8CmxohWDRpSJZ5EGURr7noR6ky3ZZJttLUXq9xRvYtqKHEkNMreo8jj3tmQkJY473AZroC1YZYz56HvjdHUn3x",
  "key28": "2yi2DLhF2WUDAjKTDTXoNonSsxwge8ev2SbD7aQZHJBNH4waQsUUB44zkKFDhsFDobvz3VULPNfu7C6WVaMoNuCL",
  "key29": "2yUTJy19sajcTSVYcR6PmKfWRsgwwQv3vhLLhBtMWY3hfe7RkByVMP1ZNvHSrLcLduggTr8dPR61Ngt6SkwxzGfL"
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
