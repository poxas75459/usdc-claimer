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
    "gLpQM3yaAfXGe3uJ9xnGwMtEvK11PfjZeCqiGf1XxgkGy8Bwjmtdn1BeHYjVTtZctE2hyCFzNuoBqprHNQo3KkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XES33bZ9hc8cJuQUhoxSYjTRUjMfLjxeVH5Axm2F1BJc9z1UThAwi95negtPPokHaFcrspdsbmULkdAkSoPAK8r",
  "key1": "1cGPmscLxUG6rpiErmMudZTzhdshnedsqYoFUPQSGhKS4R4pSXJicXBxAU87Hjk6uqqLfQmhbR2JCV4jQXYHA3Y",
  "key2": "5jEuCoEXLqGnNd7bFy9jrczg6kshyq8SdXtC2EDUKyWdgDHv9bLcDsdy96C3HZH2Cv5WXQC1ZUhwVvRajvYYhLys",
  "key3": "3BNruSiazJKbfi7vFqL8MpsMuMPVZzTXWh3c4MG9ivF1CkEjzs5mehZBEftUn8CwtVHmeKoFNsRhBiisPK5TJNAK",
  "key4": "5GtidDdfvQ3embAJfcW8YJcmiUCCTCtVx4J1sUBfYCftGpCj7iPsynusFB6Qp4hxhzKTF8KzpMhHNRzCShqgvfhF",
  "key5": "2ph1yfjsYtd6RZ1QiHDM4VhwK69HP6kz9dxVSKmR3Ycz8mNq18rnCB7wJhXZwhrDReeZFLNzGVoKbZHu1Evn8KCu",
  "key6": "4pczMmvKjt4TqezGYKAs4v245LUWKJT2eoVnzqjNhgxFzo4dUXV9Gob82HK3VufZ9dV4VmyfEbevBcwquKK5hwXv",
  "key7": "4HMdRHnqzAfAxVh1akz6HUQBfAyfLzAcqYLbH74pekSWTxUEnvvmdTbb7VWFnaZ6nzriMKig1nMm1Kq1g235Vp9z",
  "key8": "3xkpwWshpF83ujpKr4hcDtnJW3yspb5zsvxzFAKtmSudjTyXuwsJKFYZRmEgwLpTQfrQ5MTz8EkLpy98eTbrbuF2",
  "key9": "5eUH7irEiRqZeoDJB3rRp8CzTgAxRPv9G5HmD2yrt1CP82HViMcrE1tDqi472T8sam4ozgvgnDJeqKBXSpQLA7U1",
  "key10": "4fQe38qoAc7eaHupoomFFjqFSGLvgYovTdbZyAjpSnwKXGaa97Wjs6E36fBGRtrMMrcjXiANngQZ3N4cgqcK9jcL",
  "key11": "5h4EZCkmD125cxjDD6dg2aFUj3ZCxs96J9Mn779sd3j8L75NgR6A4txJf8uQb1aovuN4TMSxwCZ7sJN8PfmDUq36",
  "key12": "4tCAJ8NYTHyGc8z3Z9FwuvRSmMUmKJBX9GszpCVe1RRrHPrLQd5vEuM5LsczUUjJfWNWZ4NU7UaX8WbL2s1UWEF8",
  "key13": "5MVvpDRCDyAyZMgu8icy4ER6sKHA37sXQL83Xs1Xvaa4XpghZ4AD8rYmLjhmV7ZL1nm76SER861xf4JiEWhpSoar",
  "key14": "5wSigCKkADuDpvGyYdaHWKi5tnodUo1PBKZ3AZftVguDbHyUtAJ3i3x2KEmwjWXb9vuRHczLdKy9t3NbHEA9pDoD",
  "key15": "45jZqSF38h8emrRVTWuf664wBcCSxBZ3b7JyJoPf9JcJ1L749jHcnFED7XfZKkzydndn6NGJY6cB9WxercQQUhxm",
  "key16": "5FEQT31GNrwJoHEJ7KaNBQKwghwNHbS25NsuqtShWcmnPF8Cv9yqG6xDT5Y6RQ2ZdKLHh1kdbdoerMGggw2Rqk6L",
  "key17": "5BMo5qnnkCQyxVaYb3FeD6XT2pcqyq2KB2sSq7V17QpGCKgT6kFr3BHhMbp2wYTErtCKK7Uv96kWzhroZQJdezxy",
  "key18": "39Jqp6cbtU7j9BWdMNV8gEkQqZPrh4xpBr7sUJ5KAAH2dMcZNMkzYy4RmKjDwiSmLtrobnXBgNjwQUjbwuy5YzbC",
  "key19": "2s6bwA8w7VgxP3ALKZCZHTitFRN29BHzW2T89Ru1UjvB3MwKgukLjXQRWK8Gm4AfX1L5GkUh3z9u5uoh9kzzFM6J",
  "key20": "2VyR21aLZBe84nzP1yniT2pc9DYhGddZUthjW17apTuYgQdGWSthFeLioSEgZ9U8UEUg2fKSWTsGzEygEQd65Wv",
  "key21": "igKJz6sLXmhHBnT6ae2GmgPZj6tAzwsFxteM1zNCAGZ2PPbDvsZT8vJvzfGPjCPHkrU5ZzGbteinVJB6vH9dNx2",
  "key22": "5ZAFQWouUTkkbRueXWYiu9cSRnw6c9HCa2EirHYXs6idgDV63Dab1H9xCjwRZMGo46GXTxV1W3PKYzkbKCVVWgAz",
  "key23": "4GHaxA21k1CqkLZ5VkYHTYnShA1AmqJYDF6iZ1HFosq6j4xN2G1gDhbfyKQ6mrTK2nuukBPq7Av4jb1qftdCAr62",
  "key24": "EJXTokGiDbEYRW2NqcWsxrNiy3jZJGTo7rKWP4a31BpPtfK1YvVUNn3JgUTVybkg7eovtkVbCwhUn9zh1gaZ8t6",
  "key25": "yJLzJwRuAtqC4BhPWESYYpq1sn4vYV6gApQ6kEa7oXT8hkFttKPRXsqvBVuDpDb4VQCJ9spr41gqXfnBpTPncmD",
  "key26": "3TYXzQi8XtSAoBoGirwU2xkjoXLgeftYm2a2cnFX634ofGJPKTMr5B7S27Eetx91z4KpQyfu9LJEinAZi7QeFFMp",
  "key27": "5CZVcpgff8P4oVugVdJP8Xedcbjcx7MdNXLMoqFExBcsKkXeg7gT57Y9dg3uUirSFXbpGGgcMuK9hYGbPqztvnng",
  "key28": "3YSgJx2Js5VrZ3A7T9Q5umWqXMTrSYSV5Z6PL5HR5qt5Dsx2iMHcPm8y6rBhSniQFiWzbLS8yaXRGN6wHjCFsyqu"
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
