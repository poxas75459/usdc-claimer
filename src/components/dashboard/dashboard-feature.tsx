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
    "3ApFbCh4f4F4E1Qq3KqZWYGH8ARC1ke7DWvMg8qit2ZAxVSMiyCKQiVLxg9qt8WWp6VVstuDeyLNUc8cikMMaXrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eb5dxdBbzAXJbU5V7MFAxjebEsf6tYnqgTb7oD7YPgSfXBffSpCx6MNxtJQACgZoHpvBeCgWfkMGWTcrsT9sf8",
  "key1": "HfZh5wBfco5uszZfL6DfrtyHhZZjkoCFVovnHmvpf1bG2dwUw1tx2aUL4ZnAU79A1dnbJHwnELcJ1AWix28yfXy",
  "key2": "2A8u2doKxPVYmMq7jca9jGS3dbRcR1mYLZhCWMAgUGZ3H3hYtZwWctJACd99rDZ25PxKj1NT4zVBAWRccM7u2dh6",
  "key3": "3xsAKbsWRyZ9cNcVPhvvTCNSVYDfxX5yiz97ThkN5Er1PvX8wk9rh7JGVQVKtPN1FPqxsiqqs7HxWUP2jVkSrAK6",
  "key4": "5EJFhxbyLK96mfLh18gKjedQzQbLrnt5TQcz64pVCHYCaXuxQNHX37s1kZsNWdb9R7L55px4EYdDh3YkA4saGoQQ",
  "key5": "4U2CTqYzvdVdtRgyn7ri1gonPaX76baE9juCD6Xhybwp53TEiTfNqNN5ZgvpfbJP1Lfd12nimDUBCZqJPHhKBYoR",
  "key6": "2CVdHAJH1S4hBnGcv3dEY4qsWFqVKmL9KuaaLpBHGXkZJpu5twNkcCM7RPo7ttQNKvXG6Xc9s9BmBHKiVwU6e8LD",
  "key7": "3NHr9VVjJHdYg2gHmrRzKTumcaJhDuerccp5rm1S4FzdWWoF5yEuheaLN7VoZ6kJFxKL2vULvozatq2bNHx1ohdF",
  "key8": "4RecEucMdkYQimrm9Zgp9CbXAnv9XA7SGMQWNCMu8b2F25bJbpDireXTsTpDhF3dhjWQAokSPgU3vPwTYzLnySD2",
  "key9": "Yrh9H6cu23cWit6gPfS6tBDzsDmuPMLXo5NUwksNTkpzQ99rXYbUnUKKX8v7riqkTrWfUawUKMwMZ6v99Nrp6LU",
  "key10": "4dpbkiSpzgukAy2ePmdMU2zBw88Y2pvKEE6prT5sQpv8iXxZ6DU8egG12HGP6GkX4GNgS1JMNqh8uE3ZcEKQABYp",
  "key11": "223nyVox5JVnRRbcA9QWVZoLcrAL5ZWdKnSfKxeChS1SzAvyVKK5BNPvuhBsz95xLeM1bLVTJL9vr754KsXD5Fsn",
  "key12": "4bff3NY9AKWZ2Ln21kK6YucvD2H5WPSgRHHwYAeUkxYkLEizi1vSFYegcmxhZWCesQvZKVJ3YtRgUQ4KiZL1rvJH",
  "key13": "Xj4M13KQcewWH3FxnCzzDLmHVh2pAYLxphuNsLtQoK5SA3qZX4Y7HP2EUbsdSx6KzNqpPivKNgmTFM2h9hjMgg4",
  "key14": "4xrHa283WEDwc9CJZUaQva6SVEUKRQvFzNiN22RLangvHkraFBEhDnC8Peb1U8GVoi8Vo1NYMUbYf3HEMJPuFghn",
  "key15": "41WCkQj5aCoMPWSyUCQB4rT7UAX8YS5myLZFb5miezf9xzymHsu2WrCQ3u9d5upZ93koTbXHbfEcVHURkJz62rea",
  "key16": "33QAG8qbxqKhEkQoCzsYFZvWwMF6982Prr39MeNHLx9TFLziP6zEuyTxUJ8CxAZTHjYvQMyYudWvtSt39YeNEdXt",
  "key17": "4WcM27gZMVyxEV15nkZaq6zPsX5bdy36tk7biiwuyzjNK3QfUTY2eJD7kaPNJZw6yDZLHVKZd1f8kTHCEzXyqKF",
  "key18": "5vnhzU6g4BVF7f1WrgoU3FEQVU2SH3Jomt21jxMfF16bx8VXCwcK3t4KPELYZHkvs1cm3epuv9wRJrY8q5BvDoqz",
  "key19": "Fd7GwvL1w9L5Thy83BGDMqaZWy8pSRAkQjW7WrmEVhSS7wB87nzf3cQg7NVKMAgahYiScf5EjR3SzDMG1wCwjTb",
  "key20": "2nFJi76GVJ242aMvn6a1JXU5qGoBbojV9y1vwYZT44D7YwfoeHUYa9rweuLPgRYW3bASWkQgC5oMVpVw9CmJ3Sef",
  "key21": "3p3iaTyEaEeFTULUGmewzwFMsor62L8WDvL3hUFCo7Z9TGnDV5gQuQrtdzDZ6aVWAXj4E9eQwnYNuKUjy5GG3BHV",
  "key22": "2g9Y2cManTATEkihtnN6VjgTCZX7FDfoEU4VHDvuvvKZRXREN9TkcY3LkMo9541Bgeu8FUxMnZRiYCQJSS8fb3R1",
  "key23": "3gPBxAdFFgquSeJkfgxgG4arFzkJVWhodVa1hThiW1y7mruSbEZyU4HghL7DB2zXY4fuk1s1LTHnRu6HkoPfhqKt",
  "key24": "E1FRXqfLzzzRwbehiVqxGofjcPiDACHLu7SezSGCz4pcg83xBXAxH3qsr56mdmjAA6FwHg1LDNvPdUTfUVHc7JU",
  "key25": "2CRDAu7pLmhkTsTci1kbnJcd8fvXiDQAAPoBRcvuacXYVW39PFnALWUfRpwZv1depZH8r8P325VoQZzYw6xAPVKR",
  "key26": "GBKs9XHhZUn7TVaqAyWczecJ9n5vqdBaraGcHFcHiRVXUajVVSMoiHFcepxtb7SFNxE35ozoPKXPsmX9j9ceEp1",
  "key27": "gFiFbmGSFMUUs1AajbEHiZowzzoMxBxXF4zTqAHoNQk1qTHeHB47Cq8fzLtkDeftirvp5PymywoizkqWkP1P93S",
  "key28": "2BZqCpESMDDSz1QUn7DdyKY4fjtsjjVbnyCxq8wSTdMXXoBciBUEPoXLEoWc8zC25Ld2KfQ4CwjR1QM7vXDYXgcV",
  "key29": "2QUkVjb72GJe9ZqqCyFc4mDsep9dkRsG5cjPpyRJfhXfLKEdsNeU5AY5jv1p1EFE4FWcwFRRWAqWq6jokfQ4tX28",
  "key30": "dNCvgudDLbrhvz91wqUD7FP3ahuMvtpi24HnRpmnqC6x1R1vjs75B4E4ieQk3nRFrHaLk4rCCH2CdyicgizJcmd",
  "key31": "3R7b4Syci7Aiickb33o4umLuf8oaZwuDaon83eM8Sr16MnW4eHNv3GegPdNBMs5u1kmxVeyBbTyqANzhqV1PovmS",
  "key32": "2uKHypFWm8V72UkKz3tUtqvS6qdax6rfPpTcHunxzhYPusin2H8zJXtmTP2KzH3Maxi7qK7euajKP8NRQmcFtHxB",
  "key33": "3nbAXoLDWmyh3BKo9ooNDvXr5AqrGq5zBztabsRdVjoGSDa1AjnPLihtrpQGotF9g28YWHBHqVM8cNmRPeAvKgrv",
  "key34": "RYKW8vG9h8drtTV2H3nQ7CBjrihoFzJC5hzvmFzw8jtxWgsH9w3RNzvJeDQaam5AcsNBBkarDXws2JBxNNLgYv2",
  "key35": "5kJLuCsgMpYnXmnptGXcAo2tMgy8JKwbnF1rEw16P6fQ2DKGbrgZ2odqTHtRsCaZsHYcds24DFyDqtsoxdwVJB1H",
  "key36": "4wSTpWMB2nqiurBMCoRQHd7vxUvWN3AKiUfefzRQD1gL5tYBfFNfbASmwVzhBnSZN3d23pNZVM22WzKppvpgVDGE",
  "key37": "4KpPPatNCvhc6aHvkHrtk42FiV47joVUtJWiRSoG563gNTg533NhHjFPj5Z5CutpruXa61QSTb37cbtDm8N76Csm",
  "key38": "2A9BUwsgj4PuSBtKvJitKPuh645Q3C6zmFmA2CMUmMCcqswCRNWd4cCpuAZadytVvfpWvMbgA5NMG7jNrqvenEEG"
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
