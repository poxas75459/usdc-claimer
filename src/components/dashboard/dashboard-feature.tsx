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
    "4x1VL56HPRABYy8WV1wihUMkLvHrnQB5r3HJNXNAUTgqE4p1Lq4Gc2qtS1UUYNCXhXQ2pte7xQKHeDKTQdUzYAaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsqPUuYCj2dHQrpeAp4k8rS6En64iQgDT9MPsFX2XXza8StrLfjNZbhL6o6dCXLWKyH82E8xnxPqX6qzFgFGuHB",
  "key1": "jCr2eAZXuPvZ2Wj4xLiN55oPnLMko5G3DGSWEcDk2MLbrqinJpJ4wZgKaD1sxfk9G9KuJnepALXajSHMHzuv9Sj",
  "key2": "4crzc41sGY8JYKp7cyzZp4uB94aeiBCupRbTdnM2THgqn7U4P5Ra418X8Zw6MsrYPnbPEgYxz5XZWWsWoAS5ezLs",
  "key3": "37gzA4iPPnvdWAmL2ZvdUKYPjR7cyc9DL8EKX9YmbauTC6pkqPJmvn4LmHaYBZS5szSQXKdraCBuqPhngmpokrDV",
  "key4": "25X2WvyPPua3H1NxKN1ECZQPLZaPiWubcN8GJVtEe9HBz9WkH3ypDdGMmTS61ziVgN1ozk9RvQ1ijUkLFMuzmivy",
  "key5": "67AXMxKkSgFkdieCFHuriisnhDTAAXPmTzU7W4wAkdNTYcGmRHpH3RoSw8UWN51oHAzqASQ8GyrARsZ3eA37ewNb",
  "key6": "3JJXLA3N2evMQFLWeZmenhc2kwKmZK5Xs9XeWRpC4y47jrpdvj3BhZP8c3AV6CFPiEWJct94YMiujbdHhSiZWYCP",
  "key7": "46d2tSZjhecmQKoghD6PjJmSh7tNu2FUricM9qsUM1jzCKY33y4RdjsjKFxC3iPWjJBHpKsEnyeMA5Cf7PkHLCBZ",
  "key8": "BzuRHPKwuUE1f2Pba3nzTVhWXDjUXVCsPnff8e21tB3FTrcAm6djLgNr7TbEPf1Wce6APguWaEtn1wtJbHFeQYu",
  "key9": "4D2tfRsiXpuUHWUZmJgXMgs6Pxrya9hCtzTtndxGvaxvNKNPZR8Yqi2yPj5RyaTC6Z2UXRg1yZR6MLtheEZQxMjG",
  "key10": "31y4wSyetLFi1JfSaykZn24CmLqppfsQaPxVPBopJCZ7K7SZcioLZy7yWeFQnYH4Ki6EtFdp3pwJYkgup3DCn3N6",
  "key11": "4SCX1TumSMsjgL6xsWgHMaL8JgTepbJvEs7Gz2tXCAiWs5fhVc2K5BbhGEeoRrgCjEWjbnWTewF76DDQuzjPYBZy",
  "key12": "2hGp6jgKrPYLYFCCSVK3NYaN8BRrBoNUnhyo18NpxcSiWyBo77agbCHp7SDprp7bH9hsZUmBo3FaxDFyHPY3XUqX",
  "key13": "2GRtBkFVfavbWha7Ko29p7dg7ND4uviyGHPzgR51JkwMFMs9w6CnVWNb6KBhs95px2LuqbYQxn8GFPK2j7wUizQ3",
  "key14": "3cNwo2J4q1q5HrYthsgC8Y5sN9M35VrHH4wGpKxtupYaNazt9HJZjixSDif2k7LXDZv7TYQmKRYNRcDbYS3eWGFU",
  "key15": "YF14YycXxAkEFi4K7UTYxffFZdVWKm85Xrur2pJCh8awYZ7LifqEuDPCtraZSsdM8YzpLW8pHWHGjhJSHNzCaae",
  "key16": "3AExLg6i8bnBbNxJ4828c2Gi1YSniSNA6AciTUm2evD2EnogZVJboRfh2hgCUncQbEfhM8Z9JpSt6Rr9129CnxaT",
  "key17": "4vY4oHDYA8E6a2KfBkjn6HcaMsigLGMRqgAEJfSMqHujScz4SzxHsPyKHx7tAdr6x8MVJL1xkGp4TLQzzJxvUkrw",
  "key18": "2rdVSmnT7t2xPSAkvYFoYrywo7ByHPhM9tNKxhVL9ADcGTxtkKrMpvy9WpwyHdZkpfSWLYRNrySwfr1zSWxzmNCG",
  "key19": "3vN9MAosGfZEhYBcHrERJvoTbRvmAPb82q6RW9wuGRUXyZqAZczsCKedwJkM5xHZNzWb7ani1py5zrbCqcDcatnU",
  "key20": "4nKNC36QamA4C4wYLd2pywZfmAWDHjzJE7J19paWpV1zw66a9FHth8LzAhRARBHg6T7MwNt7iYEMwNzZQnubBxAF",
  "key21": "6566M8MXHTuveQ4MHySe2nWobHazbWywB4LvNfCLrgqnHeh7Bs5LUAC7FJUa7a15kuxmtr9XAS4egsTC9YUo4JWS",
  "key22": "3w53JJptVGaDVv2og46cpC9Grxmb4HMRE89pQJN15LZ7VYt24re63mNFfSyk3komgfAVLnhZt2U1EQgFKdhVPKbZ",
  "key23": "tnvVF78cHtDtkvqmTtKakSVLufaEnBMas72sFoQPL1DFrUtMzabYStbuVWqrSsP6qBCVzFoURmcDSpgEcEg2Gmw",
  "key24": "2344yYzqy4xQF2FnLiUPswknH9pHzvfezwdKyrEsa4wHyeg7jzuEkahaeeVrMViqS8uD8hrr8DpMjG6wJvy82TaG",
  "key25": "3U9dSyaWXLzMGoLKGHBwhXpDjyLJggN1SuS9257Zq4EekYQ7Sq4FfYwtTxcKA1Dx1TWZuMci8owLsu5n5AU9grtv",
  "key26": "662FWPuFT1VfdXHtxUkBc8HSq71LoEVBrwk1QZqaBNZzm415GZii3bg8ZFh9P8GNXPPbLpcyfDBJWxRFhneJtFm1",
  "key27": "3MVr3R1UDMuf1NKBS9PbUieHYbcxZ7tM8uVCaFeyaXsCNSJ23HExaLAdfwKpxCoigGCqFcqt2WYNGZHk2GoGj6uw",
  "key28": "5WXrriKZdngaNHQrxmia77ae4zgdad1Ex8iqhtpFTV1KzRcNJBurt96m1vEMs59eCdLsiL3w1LPa1CuQCLYAm85j",
  "key29": "2Po9A95sEStP5xkVxR4RpHmWeKhpugBfpEReuUEuyikA4wA3E7S6GGZXj5HUVhw6Z1JTktMPG6k6nyub4Gm9XZLE",
  "key30": "2qy5hVta4aMWtXPKDKC93xBubP9QAFwVGgpqCDWuQT2wi8c3PMw5Vs2HrowWmGvukzN6peV64STKpyk5b7SqzRfF"
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
