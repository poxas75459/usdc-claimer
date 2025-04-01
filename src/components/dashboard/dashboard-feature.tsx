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
    "2UjvxyNDVoVgUiuf3rXhq1xCtjuf51Mf8LHM7zVfsL2EB32emuhYJSjSW3ufSt9BKn2uFHgj8ioevUaAiBZHhqS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXDmjtURD7GjSkSpd9ymrPw8zsQ2tR4p8DZ3DxqcyC3qSudRgW33ux1yu3b2Tc1L1egQbgKPEpdjaP957EfzZ5j",
  "key1": "gG4i4y7ayxxQXdRZ6Pu3qE8P4S4h8svxcQ3FGqm4hSY8AyBU9h8QZuZy19NpD9MdwY4KWydQVCECby8mp32kUuU",
  "key2": "2jYfQPyt1US8ToF31c6wG3xBg8NL5Ci9doj7sXxQoRxYVHSi1xZK4Pkbm4BWV1vDLhhc6kLF5Pz9v6HyY2bAKmb2",
  "key3": "2zsrYuuGWeQKHiNfJciygbJC7wSsfJ5X7zj6AJLkMoqYvJxexqZ9h5tGNocJNXPfZ6FeHtGadsgi82jJJAa4CaEp",
  "key4": "3Y7E6FCrmCd7kXchmgnoTtLCnzxMMdsDYVsy7LzXRGy5Leg5LPPEDWMvuGKsaVNHe7eZd5F9ZypGUv27zCDcxMim",
  "key5": "59Kwm1cU4ZtYddkdCkQbcCMjtZ5u9k2wE2W18L4AnFCqDZWrZDopGRR9yx91iGAChfVDBsEDWbRmAqkQMJEuNN8v",
  "key6": "4hjv4ZumbayCzfia9KYNshdAeJvXn8odo1ayDBcZxLBsZJUju254XLqm8rCYzC4PyAo4fo2Xq4dk8EXDfqahrgR5",
  "key7": "24isZwwQ9o8nJ8JPVoQzvtWShfh6CnXoKEfLos2UaArk3tioEY5wSWj7qCE8iipTBT3pngpeNPxWmck6C4yqauNZ",
  "key8": "3xmqBgmr4dpEpqQoTtHdM5PyHGNNkdeBM5KeMRLr2ETK1zhTYsWsSWQNevwoF7771ymwbAzGdNvPYGocx3gMn2Mh",
  "key9": "2vzaX6FVA6LypcnRDZonoTfFWhjTAtJMNXmj917nVfLtbkogk7Qpe8u3PCgE74YA8esYTwW8irWyQZiTmmdxfAVg",
  "key10": "2FhvSS1vjjnQ49C1qEsqrazrt9KsVWKDVtEeXaMqV8EixJpTREgiX9n5jPGo2k9pY73K2ZELPZGFRkDRb1yBwzaq",
  "key11": "5YcaSkKkJBBfAqfoigsAdtWTQ2Pm5rUG3yj8NzkiJeQpckV7L5rPHzp4CQk8gFkU9M2pPc8ireSnPTSNsdffChTt",
  "key12": "4WnqCnw9ot7C6ZqUxPm6hX1MduJvktbYKRTF9WWBNotAfbicShJEofHJf2mEyTQe3eBjLvP95VvwhSDR6YzY6kQD",
  "key13": "2PUufgmovRADh7jFpN7AjZFVBeZCMRYSikasGj7YePN1UPR1EiumvM8pRENDC8BbeGDTNcooBDUEqgbCRojayRv2",
  "key14": "5ctfWqZYiNDxWpCrZSjcXpUP2MhvBPNijwj8Hp3UEwNBCbdEXYC6JRqozfKJ3wvpDaDdte7DjHSNhN67UKNiBSRp",
  "key15": "2vmY989RDx7UL12DXqEbeUQ3RqvizHFD75QAC7coU6NGE8c7wRkCwspyPajX7o6gmCSJ6fHjS5wsvZXiDzjfKSq1",
  "key16": "2NYP1qS9f4XNZqcbVv7niQtdHwFTcpcokF6uebE1baEgtF7t4CUFtG4oUKh2UMVBaW7BLXkE7fGYUibKeUponc1q",
  "key17": "4T8moviRZGz1rz7gMeJR8RsbApgr5yUSQh6Gfqu4hDBMbTsKn8DusuJj37T2dzcCSYM2JZ5q625xvovcwCRXCkZu",
  "key18": "4d3WUDMPnjJY6aAUQ7UFY5EVLDQsfJYw29jGBhNTr93zvuHMTsxSg6ZQavWf87UXGwyVYLjeBpYSC3xmX3wruynG",
  "key19": "3d9He3tx8rRXUmaTKjnfcmsbtQyzqKAJ9ds1Lf2CZ7ehz9KCEJZgULWy1NNCsWpj7jjLgk6fSwZxvovkLsTNEt9h",
  "key20": "2ZqvuKN5ssq5fDSfx382USvt6ony7EJsds9Y6EBLYqdTd6X7mjyXjsY8yKTiJrPBAJ9YzYaWQtSsCgk1ZSP23YhA",
  "key21": "2wX7ebwBLpyqKveUjrPYKUuktrD9qkZuvfKUZcF7xPMtb8Yyrn8zkJEcTBTzR6PNSggsJi1DX4NJzwCgipUisvBk",
  "key22": "3rf9D5jkjJRnASsfBZwLKKJCiL2XgjaqbnzPCHaUxtZyU5eL4twF9ajkPWTii8CkC4hNdrRqJxNTaLu2h2za5dbH",
  "key23": "bTJxP9euVPRD17XkReke7Wb9KujMaLnewuyouyTFCdpzp3suAVhSfmBzJkX599mA8yJBfBP6PMbGmimbNk5eonK",
  "key24": "4PYiAjitnWfvfQB4Wm93nXEvdd7zZUZC8hszVFphSqkB5aFPJDVm8L7HcCeBnLPwdTvvMPCvtcXFW5y3aKa8ZwTz",
  "key25": "SByW3ffddWHDsqHnHHXMZQpVypBPgQ6dTFyzLUMhcsmnMaCfrDW7kCrPK57G1ynZTjuRCjKiWssaFh5otpPmwev",
  "key26": "v8yJneFNC3CwuSiasCnABBtcAFMSsZ7bKvanxwfASe943x1uFCmcRMhhvneoe2BEvJrrwzy1uuAucvnSfFcX7jm",
  "key27": "47sfFovCmpLSFRNwYa2AYT9iLBNPPiJkjVG4jzHkVQxs2bYHNRBVqLbVSLgGhk7bHJcL3xMGjKSz8ddfyHFrUfun",
  "key28": "7t8rY9bV2dc2QqvRmTb8LvLZVsYDVdfdNifVHKdQUJBMDfWXVrjSwGGyuXZAaEiLb6Z3dJUowUV3uYZv5qgL5PV",
  "key29": "5iP9JjoeLkefnfYZayggBi1AMG1iBc8ntPSR43hKp3bDGB8aRUDRaiBfe1nikohYAUyn7iA6ubmLBzZNavhkoPbw",
  "key30": "3YnLzdzGxRX22wnkAK85eBYtk3nf3uj55CP7e7wU5fYKanK7dmCgBYPyvNKf7py8noDSQ1ejgn71TEjMP5WmHfaH",
  "key31": "3B8tC9mNVz83u315e953T1gdtZjofxX4rC7qnuhVBw1XMRkB3U6QjK4t33Dh29Z8EViCFqZpzNcV6e1JwxrUTb7Z",
  "key32": "2q4mnnUfSve3RSkRgWeixs3nddKFJfUvZjxrhAJo26Xb2WWvazizFiffzNoSjzkZS3uy9mRsmakZtEDYxuw6btry",
  "key33": "44L5ca5QmiHN6hCKuj5P9XjRu2ayLxpD7EjZggaJxJvn4YQfRnGB4P4VVvWBPZf8xy71KagMW61wbzBs1s8H8qCG",
  "key34": "3UTKiramxPLqA6iuHwf3KiaH6DnJCyEkSQDaHsozFdjLvFdPwnCU4LQTCDFFo9UaNKVELh8g8X4Ez1Ab55HxoF1Y",
  "key35": "5PztqvwrukYH8JeUy9na5hYu2561JQQmmkvMWnmUJpWfpHEAYdfFKmXoZpevJeiczPsPPE8BZWR6qBLP5qbVSaxF",
  "key36": "5vwRMgaF9E6THcgh8jVEhZ9wZ3hz6Dx3wbJ3sXeWC4pPcbMaQJjbiQKcvpTcExHm79CeLLywb1k2eLuSJDQcVMFQ",
  "key37": "5TuHzg347v9ri1RBYrPPMUURDt5VFSCB4PQd2c2x4pwtTAgwdZNcpR6qs7kUwKtKHhuUYS9zLg2DeXf8ZzRu28K4",
  "key38": "2VtzwBUU3Gu9TEyb7zh2P1DyGEhYS3MpYiwdJv8c5yDT9SoVE7dm2iw3CjvgxBVwf9FeMBj88VTNVEAcGnC8j85n",
  "key39": "5npow5Ks5wtpUbYFFFEVC46VqzMdzJUJo1po8wCmDKXyEtT8aQZ6CkuctMPhrW4cuwC6EKqKsKhdUeaMBbLyd827",
  "key40": "5Sctm4GUbXWuQbMdKNj3wgDe7wFSMkM4PwoGuiVRVTBKkpSCJkrkxdT8JJoZfpSo8YEPxk69A4FX9ujP97WV6rQ2",
  "key41": "5NPwdGEZ9rJzY4ftsEfEJf6KCJs4LSnHGA2zKK6FY7PQkTc5zcuQPenLEKe8YreEBB7EsYQEH1ZTVHYkAgzshEz7"
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
