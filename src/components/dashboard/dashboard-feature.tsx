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
    "PXEFnPMvMn3BdxbZGSDrRMj6PkSgVQu4uSV6Pwz3LjqMkfpTMQbGkrzhiJ3vqiMjjrSGy4LunRXcJ25J3mhaZnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EW2HZKNL6CBWTRY4HRXmQUJftvpwRyjhDrkTifTQpE3RqRCqGxsyp1KyeXVNwXzZQ3rDz6eWnkxfPxdCb8uZmM4",
  "key1": "2apjiiwd1RUFcVGvLBVsXdHT5exniijCqy3haUrJGH3kZCmhMiCGi2xTZBtzUgJrYLuFRftFD2ksxWjnDgQKLw2Q",
  "key2": "5BiopqQCzdw47YhdvD9HtrWZ9dMK6PrGLaj7unQfsXzWPuY2z4duvpbkxbDP9W38Krt72MXazQf23jZQU5pwf3vJ",
  "key3": "MonbTgp7ywbr3N5vtbibnY5VUaZzNY7qncqZQ6Yw15hPZMufSQfa52ZBfA4kCoCmy8t6u5MnjCMoCChw3q2JAaj",
  "key4": "2Q1ank6NG8H5s1AgftZGJ5rnZzwbQhiYVWrzTqTXStNJ6nUhd4DCHQevY62fo7sNiLvPhEyq7g1kAxVcEEfbiohH",
  "key5": "2SAWy9Sj9MvJBiaJQuPJwRyVnJPdxzuVz7Jnkx8iSr1PeWKRj5wPxbACVrjPqSm6btULzaRzyokdW2EhvdkmPagy",
  "key6": "22WkPqpAEnsT1nMitRGDaAhW8E7LQjrJcS4GheQW4QnjzLvS2YzwUBfYEKMjbuSS1DXfWDAu1UWzkQ9PJqyLgjqH",
  "key7": "zV7MgASZtuFPLieSEudox48Tq5KqRoopJWskNe8adky3CUJ4p38sUpf5Fy6pUb7sFUfvtq1ZwnMC7vgbEMuAMvf",
  "key8": "4AXowZe6KyR6YVwhELC8mHt41qoA97YgDChzCFgeriaa2C7rZ9vi2xNEWvrTVfuwcgXTtzEoRXVchemGPumzHs8B",
  "key9": "3ogh76SHfjSaefHNELitANH3KLAxv3wcuftqnp6Bq17TdFHoSZQy9T7bjRvM3ZKtePxeqFRE6CK5r42Na1NcT5sT",
  "key10": "4ZtuxwjaXwG9qjmv1YZchVEF1uSsQLTxDEgWBQRBBRbSPnsrzQDk2WTzYj61krgyKSGKoUHKWGJ3Q2p4VAtUf8vV",
  "key11": "2hrop6aECuouHJPzi3xbnuUsAyw1U3hZV62VEeL5LrqWjRygWbnBrGxNCydRmxSRVAPCainXnHs16r2vChQFn6gS",
  "key12": "V4cuXxZy1eNaFUS9hpfX3ztY7tkTKQAg5VYND27w5L9D9vZRGbJt5P1juBjSUNGjXyzcggpBpYid2o9z277co1W",
  "key13": "esuHUiYeBPiS9NJTbSRZPte9pUF7ksD4JuJNweWSbYdNpQbaY18evmpvNGcz7dJxV9wt4D6WmxVVWLsftGdzMJX",
  "key14": "5L1mTEY42cUiPLJk2EMvp6TtxzX88z3aJjgiJvF2BtFnqmViBuausi7p1BKMCco47DGnKzNxiKiFDHPVHmXwCWmx",
  "key15": "4j81tXt4joyCdXzQX2iHx3WRoaDnbkLXnhv9LMrA9brvaDhsRXLrWU4RKSGFbThDtFs79HseyQHbFkmN6E9oFTdD",
  "key16": "3LPVaM2BUoxLQxbj7KeHs1EkWoAHrn6ye83rjwRCr5XEA4uZabuLbT95myTMK94duz5quBzikiKMPiCyeQFHwmJe",
  "key17": "4zquyheeYV74kRBhKu4skCFRijHYwkMT8NrHn3MVUePdTS42Zg1fMaSSfGkAoxhkQgqqhZ9tCLL2tNkfTvxqun34",
  "key18": "4Rj87xH3ksfRXiCZfMbmSYJGxPry87rkWjw8k77oLnD1BdjY3BFKiTaiCbSENRuPwQbv5zSukveG6ickiJTiF9jD",
  "key19": "4XUEj449nc4qPPe52bS9eT8eCA1dDbTCkz8vYNT62RdUjBEwFUcyrt8BZm78NFHDgNLEiFJadBaJNggpZWztV5D",
  "key20": "58XNfVgHJVxUhpbgdLeWAx9uxxkEtvs27Ci4GCK34rC6v1ysoMJKitmgAWEsiJcESGEzyJtw3UetjKqXbAQ1xG7G",
  "key21": "3wgkNAAKH6uGFmURPCCrhQ5AWxUdsKeeJt8pmGCm2es6NdnDxLGYczmtQAxwdtzGNWhqf2x8YfngEyqdPHUjwFPM",
  "key22": "5friVJkwhwDrmn5emms3zfhTtZq9aFsDEkM5byRL6C3sJUufXCKwgZFC5nsD79hkk4rxjigkZhE3UZY15RQBY4eM",
  "key23": "5iw6scpQmHyQaKxA3g7yyDsCyfAQMGug8PnwxiC9UXj6EYFvFPWE595R9QF72cELG2QsTSGC33jAsEatTFZqw1sE",
  "key24": "2M8mnLjPMiSm2vuK2dVYLPjS1qwdHZ5kbivMbSF1ZQAFkwUWqh35akdXUof5iUuUaybZQzoCLRhZCwR2WNmzRuHZ",
  "key25": "2v7FbaSNGrQLqQHD4n2TsrjVJUNCZ5Pd6ZZBajRpq8iPHd6J7Nc4smetrYyPdEmhGBESKYF5G7EffqV3DhqFyrcP",
  "key26": "3r4Hjf4ui5d3vmzLPfR6AzFAfSiNAQQMjvxJ7UggGW2FwTsJUmwV3gEFU9ZGUQLktGM1BLEvcxwMVRoffY7TikCY",
  "key27": "3WcD1pXxvQDuAxaZMb6YgMdmc4MFDyJrS7JC89nNyjPEiTsKFVb7P7XeMF9D3dasvyNXQbECVdLhsdCE5LRCo7Si"
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
