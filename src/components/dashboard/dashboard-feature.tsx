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
    "5W2fpyxRHUWNAo1JTzQUkR9B4LCaFsN28Z3dAr33xWkHFbRMdhfLqjYfKqCCSyJjqKWK6XYPXFGi2QBQ5k4W72ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPFfipxhzcwki5iYMqmrpfezeGbAqyHo9Poao6LJzWA5ayNU4WHfddG5pxuUNnpqJJuK5iaKjZEbRyzAAc5Lnmh",
  "key1": "RYgEQwGjppTm5c1CUpn1pB4UroW4YsWnuopks6cTi3QUVdZCmEQ6pawrc5vVXuHXsZmirRz9WMJWDdSUELt8wtc",
  "key2": "3xWo4MX162hpgn5JxnEB7hYRbSGP6cTkg1unHb7jwLwqZu4yBrkPSdCUfywKBcUSaN3ptjn6UH1h1u9Sqdm6XdM5",
  "key3": "5qkF68REo8itp3cVVbBZXUVJM1d7tJMFXuLEf7QcYM4KjwpCWjsAfRdX7jVEu9STLzKdx1t29uPGa5CTZkCpqp2U",
  "key4": "GM1dBhbPNd5ps8GXsmeswcLrPd2Cyy3deGdCn2DHSycp8TYEDHoeBcde84oBohFAVQw1Gc49DeR9chAePnrs9u7",
  "key5": "3vhpQmAVnk3Mne2AvzBh4SWQKKnzAejmKhhFmia88GR2nf6SGDyt437dJwY7KCJ4ipk1H3diHoKnUkidZ5ngj7nh",
  "key6": "4vm97uM7eu7mPaVpWNKL3PFp7zHWoAJuQDkdQeoEFZbEP6wDv8FGF6UkF4zCSYNZpjbHryTdoPSWa1pw6mxUfe5A",
  "key7": "261MWpZZq5E69qKVeTwpScGzn4qK2cNeYwDL28d9MCqNXNZ5yLq9jSxY33P9frb889RuHTTwd3TXSFRVmRTAMALJ",
  "key8": "4SXVZCTdGhgE6CDd8gg6ZJvmuYNnmJk7MyRuyryaFMGeVgAVTZ5Lrp4rE6oivTBC9FhidvDTooR9MWgmxVxoEuU8",
  "key9": "2dN1yfUTuZLeeUaTBvnV9ybTw8w8tWFZdfSqVrPLxqhJ2wMzBzma55Mj4fj4gobpXyy4qKskKZG9vb7mcahDsKFu",
  "key10": "2kJYa2eTthvDezd5rkRN7Fx9iQN5tKgsLiYtUWX6XffVt1rttHYDZDL9aMn6wHYKMkgzEQsqv7WDcMniLBuBedLC",
  "key11": "4RYUYxrQYvAf2PiRp79wi8s5nVJQ4qZUjSLhbqs35uVRiqMHLa87aMkoWFhkzhSw9KnNAGWjG6TzQd3qPx1haiTh",
  "key12": "2u7J9bqR5QDGGV31ptwfye5QnZW97q2KKj3v6xgN4kUX1eFYohyHtBuNfyfq1GRoYn4p7HDPTxQVk2Q6iaXPSM36",
  "key13": "5wfbvGuJXDqpC5U2K3xx5G1pfHNwXbo4u5tMbauAdG6JREXFEBncSv6jB4GBxmmrRAVWonqCGdVFgCnRYQSx4rsm",
  "key14": "2LJmZSAFChUHNBEwrd3mdNqu7XYKyU4fzPoGV8z569ikxmmJ7SutS4zZ6hcyxTE2mDDduoeZPfZqo8sVy5JYEuJS",
  "key15": "2Cs55q4GzVxFezN9S4v2uaebaGfULSqaRg94gpvFmrMNsybnipwStyZVJSWkgikFgjUBBvNpEfHUCwGx3j3V8bDA",
  "key16": "41ccoCN8359QBzYBcqSNv4o6MVaifbMCCpEUr3DUe9fFQMLj6D8Vnx9TR5A949FEVsZUg7nB4re9MskwuzuLxwvX",
  "key17": "3XJ7tnWZGzXCqXsXroHBM9BBZ2LjU3q9NVT6RyZ91wapu97xEspS8Lj7Az5Ldgz8vGtMoqaddPNmamAnVTX4J46G",
  "key18": "3XujGw9oHBuTfrS9nWTX4WLgGbMReb4qasR8EcKZmQsZMjobugC9BxfNJLSG2CpCBawdvKoZsPKw1eP6iEogoLxR",
  "key19": "buxvMviy31FLUmKsTk3XQSn56rFcc31KB2psLdcNoxLLbs1mkdphcn6NHdJXvpBCZaojRimdxEBxKyxvWhjgKFG",
  "key20": "4bLHL4t5Lm9B9HqYfjerxYcRKEEVJYZCmPdPXy22WoDgRH2C6UdUpVgc8fvdkaqfUbZrpkWp3oEwJJTaVN85W9TF",
  "key21": "2dS6ejZdAqoQib6oAQ5HSky341uxe9iXpzvr36kvBQXP3H6RKq5LgqLkStFDAgYFbn5dpAxVJroawPm8hpDw7yEc",
  "key22": "3BMa7rcAMT99bA8yimLH6RJQRyZY7x5eAawkrk3DDRfe6nwEE1epxngDYPLsC6A7KYd2B9ZMsTwQjaH9ZGYrWv4S",
  "key23": "4UNeETa29iRFrJwf61ACEBDGmM4DKLhd1ku2GAtxp317XJeY8SEzdHVfsiA2pa8PsiL9pAE8EryEiSbZrBrsaZaK",
  "key24": "aoCz7eQGRT5SnxGLu9sXbf5wxMS5wSZ1vUmdoTwoNvN6ZC8j13XFh91qwSyurHtXmmg1B7G4VpyvfYYBUNVBJAh",
  "key25": "1mLJAugD9G9pQzwmCUUq36nenQb5yLWuHiX8CJuMUBBPHUD4LYuwKMzo7jQ3fvfDQZSwPxxLZ1srySdU2g1fqeD",
  "key26": "4RyQFmGamSLfWXeULAvzwgFV8Ndy6SJD72KbSFwKMetskDBwDFUJvdaDBG7RNXD9ENdchyuLna8Cf8HG1Udb9D5w",
  "key27": "5aqndaQMPBMSrGe7jHJi5LEP1nsxtoVpQzZiG4rW6BjxhHht66y35tn6bCfDR7dVh3h3By5YCPiXoF3VSLmpsCbN",
  "key28": "43VLh1EEjwpwcWrUonSAU6XpCX1AA18gD1QbY5s8G9Vz3NcfeXqQqfWVcEJoyVDUiEcXiVtpqBgWsUWqjn8NaSAF",
  "key29": "5PjP5sjfwRNXwAShBshhQwdo5GPAnjSUjGJGsDksAfMwN3iB3bRNzmxYTA1peHpHxkX6qFjZgm9SsSPFT6NTEJ5e",
  "key30": "ZftCATwRYByFVENrzGxwL2cRBwLkm2xDnjZfTPjWHreFsywRNsYzKeEEe7dLqqniCHJuWJsMpaouZoh8gL4DRXZ",
  "key31": "4nQKArjkLybNdLSzY1CAw6CD6C3UbwC9taADSoKpBLv145H3QC5gBf41B3TZap4t1VXFcyzSbofQBpptx478MFWq",
  "key32": "35dSXz6PgTUufjVp4nHM2YWZCkBDmAmYpU7wPj1ZLHiQdXFGu1WmMBpPkHz4Up2aTD6hkYa86xNe4havQWgydL6X",
  "key33": "3JCdZsjuCZVm3uTLRCAKBg7cc3xTvSiDngoBC4HWBPDbYiGDoQu3jEaMwAcRA2wc8tsMQA5cEEgYT6QXCLXUxwGK",
  "key34": "2WdNjcGUqF2z3UjdLwM1w9xKNJ3pC8ysNkeRUgqivkzL5HxXLizoaKQgssmhVRvRpaDSAkea5EdxPdvy2vJEguMu",
  "key35": "Y8qxyaHhFuhwgiw3GSLvvDfZ7K2SKhPNHd5Z4pUBsMt9U1uy6MQ8ENp7UhYf5SXeUezdRonyXzrcqgvjM5oxtMJ",
  "key36": "ZDmbC8uvUTnXRJGYLte328QKXgEHKwVybZkdcPA6r8XciFG8HWg6vWRpWQUe3GWkd15rGSkbQakZSiYRztdZXMh",
  "key37": "3i59Rf2eBorGyXtzakFXD4WjPBLbVwuvtTgFtqfLfvWjAEx7DKS2v64BVCUsLqetUsmx6Ut5W5BnvEExpBgqrTeq",
  "key38": "32Uam8WkzG3TGLWTbGCSpYzTY9ktdWaTBMmiJwXcoBeJpHr9Cta26BREavE1fkcGeCGNgXJdixnmARi4SWNS11ck",
  "key39": "4LHVfz8P7sqCXWS1hE3mwVrkyo9x5Z4iRwJM54aAdMx9vo18DPYetsMpG4tTi72V33aTAEJ9vmSGxwbkvuosoqGM",
  "key40": "3EMkocvqStT5PTD4RXPMo9P5NToG9sjF2JiB88pNHjHA3A3UVUTEXFygtCxTp1bjsJKMtnw57kqJiBe6U15VVr6f",
  "key41": "3THD8af4S36F4u9WHUGPHgyCLqrVUCWnuP6EvgPdwDGFjtVKgtHVZ31NRQRFwurBRixQHH12UXVKxNGh97DqWLxd",
  "key42": "MZh9ZHHZqcy8cuqLZddrBAGsx7ufMSBYMz54quQjyC73Yz1JxqvVJBsaF7h9aRpWQtqpbw3MykVvCf4ZJYnt5gG",
  "key43": "4yJe5STvzxxEpbC3M3FUHT2N8bFSd1pbKvHDmjWqF1dq8LupEuTVkfFJoU98pZBkvnZKx5JYLYAYM9AEZ5YTENbz",
  "key44": "5UPEh7A4bv1K8LQdpcxgnE69wKhHw7fT8MjqB6JkYJJ1iXXXsPv9ephN9TdpjtbV3iufU46fkYxKN5wtaZGDt5dY",
  "key45": "5Rphwmfk1G1Ug9QNQoVg1NkeUVeqE2NH5WgEBq34p4PPyk6iLTvjQXeScxV8rMxWk8HURuXk4RcyzHYXumq8nPDA",
  "key46": "3YVBD9nRY47xonJJSt13CnRbyZXiYU9QPPASc3kQkAa2Ug4xQVwSM6kYA7aJJJE4Qf861YxzyuiKFZJ8tVRgXUD5",
  "key47": "53gnwyBdXi6F1kpe5TcJRKbT3QTGiHvFkY1U6JBsEhjXSu97KC3uKge3wZEnLzhkDL7HZSAiDthKaHn1iRqaSYzo",
  "key48": "WkwLybV4xgY8B4wLcEonKzJKwefcyr63WofgZCY9wvBK7fj9HtN2h4kTkG6F9Kz2x6hEPrqrQW1uquGNPp8ZbHw"
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
