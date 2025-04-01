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
    "3pFJgs1BhS3XKuKxB3hxZ3SFm4MQvrP7xMauCqVeG3bwSkRcBn26Hpkmy9PPybyBVCAqGmDnopnRY7jfigm1aTeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtFpgcwyh3A5tetP6uQ29q89H1Fm9iaqF5pdDY3x5j5ZhBYshgsDNKKWuFLyFJthXKwjxeEGHkLJYkp5xSjbFV8",
  "key1": "5aDsuiH4tZh1HtJZDy9qPdG8MBZyAZZg4hQnq5yn7jnzPb2QSJCxrArV8sWxaKsPhWh79HrnLHsMQ1FzBn3SRJpZ",
  "key2": "48P4Kew6GPvAuYmwvVi2e9KndwqdrfDg4vAgzyyprj3KyB6t4q9yDhrnw1ELAyauJbRyKJ3Vfa354n2XBq6VeE4z",
  "key3": "4sEc9bEN4bhVDA7gAYLRrZEpRWWWBJRTNep6rABFBCFv3BSA57R1kuEyUkFrveP5p2mdpwMr5jJgPNEY8sc5jAbP",
  "key4": "PzJerpcfTFiYEubkPa4CaFjkyTuWomZ23zctxhfdPX8yhDaL4qEWFzMMbfFeBpZwifnf9Cz5oAR8g25Dj2zb1MY",
  "key5": "RBzoa3jgvbCmV9ePhDZMtdwKkJ8yAC4iyiChMFPZtRG8DWwjnJPuLMKFXFihsQGYw7vCVFfi2CCRi4v2PQpdxFT",
  "key6": "4nf7og63sMninq3BZEwUqgsgPCZ4fz21pEBULszBPnFeNey32H6NAyZez4RwHYTXfJkk2DnSpb9dx2JdMLyYp1rc",
  "key7": "4DF4AuHgC41g7MNe9CTGfHcXYNcjZ5b2Pbp8gndj2R6ixDLB7feEjnZqyXsK9hGh99SdesmBUFY66xNpW98LLhsm",
  "key8": "3HFFqjk4GZz7VJHkVvoqPMJj62X2eJEp28NZnDtCaKe7DnFmiTmq3kGeHYTuyVaSUq8fHwnuFT48xf84x7wyMBaB",
  "key9": "3P1o9eZk4kLNq368wBGMhChiVzeWdSjjF86e9jsy7Bh6EiqvA4X58QxrUu85fJBqNwPhRMepJgX2JxbfxjoHitPn",
  "key10": "32j2L3C7xekzBdUCuqQ3AEkiuKmHHu1wsT5yBYr1grRGH9RzfuwCR2pF6aCqTqmhX2M9hJMZuvK3fZk8BUVEc3aY",
  "key11": "2CTnYgnn2VbwxhbGw5yQ2mLUq5w5UQQh7MDacvNmqQMUhBAx3ogLUkqnZmchTRTHijgNrPgBvJ8Ak6LqG11PtvmB",
  "key12": "3xBE74ZZFfdG52XcAWHnzv3v5KSpykBDtHn67JCV2ytTWhGA8eVESH9YjUc4o9noHNMEtjB72EvkgaWFZuNNjZEe",
  "key13": "4V1i1A3YeVZHTdxwu1XmcQG3EVdw1EHfayq4efBwLZCEf2rRk7JHYkS5euQVixek4eVExsywSKXtRraPizFmLZjT",
  "key14": "4sg6hzBcoezEoNARhG118HZxW9dVnB5dPK1GzjXn7fQBxA6BVkWr4evcHrsGoPWc8ahW4BiddNHetd89rCn5p15o",
  "key15": "624BewcWknCxqC5Bk3wt8xWuEbVrMdAWaecQi7tNbyP4u6EUmqUN8yNvsUcHQd6GgRa3n5GL5mpHXukYNbHotD1B",
  "key16": "58Ry88hNoSFZLnYxAFFeP7ZjxYZec2n3piTtMZV6HWLApbVbhe6crDcL7rhJ6zciMCcD18yDBH89xqekmokLqsnK",
  "key17": "4y9CqNkLeegCbgZoP61wXiKKHGntRA6soQy8q4kAxk6WSCr5MUAnn4n1RLnwt5pQyE1LRSTU7nJFwkQx41omVDSS",
  "key18": "4AtCFsoo9PbmezDkUwEtWhfk6HA73ufDuNBbGZhtsMS1w5cMs2tmRwtKKiyk7Ks9hs78KfLmuxq5NJMHv5n8itxB",
  "key19": "2PeKDdev8eVEQ3P4FgYRbDX3hHR5GDvLa6EnhqunX32FRwED7CqGv3oQH1JntodLpYKb68sA2qT6EWjxA64i7m5b",
  "key20": "5S5S7x3gVL81brmJffBsv52RwENuWHHsSbLjM5WDaV5CYprag79eggbz8kUR7FytEkgac16fDJWayoWYtPgLZ4hV",
  "key21": "63hmdDSYjQcocHvFhmr1wB2rfUZuycmWnp5BGsHYte2pGH9ZybKwgxCsvxVc9NKdJwaZVpkgVaLTYYsxhwysi5di",
  "key22": "65TbHjFineuJj5Ys7r5MquboqhDe1bPvBGwwXQFzecytSnMAacUUv2uYVpRTWwaUQaATY5ZqxvTW4MK2f8gJ1KCh",
  "key23": "fhf45j2NjtJxZLZKdVD5zw5oMmAnY8qM7VxRLdayyG5gVxWEazZqsJLmKeyNiJyMbdcCQXi41EVFQziapzpYKQm",
  "key24": "58DUf63rk5YMWgKNPe4vwNNNKrc5GMXa2oM1m2z6c7tqsxFDmmnAkRmJQvit6Bft5nZ7qnq7bjsJfeH8EdZGYocv",
  "key25": "3VHp5cF6u3o9catLoT44EFkrGT2PbEEhTx9p9aXcpAWmcN3wVQ73CPBdUX7SzgGTN9asLoFcuR9bZ3FEZt1wP9X2",
  "key26": "2nci51aLnrc7hZmJNsTtoiuUDbYsz2d6oL1FGJvyM9NtuUprVoSXJjKfFZctTfvUDzpX1CV5ERwJ2agUhxDHjqqc",
  "key27": "3JEJSxYYdZrPLwPm1gRbJwJXVKeMfQmq7ceaWsFRPoKHoE1oFM26SB4z1c9vinnVgu8VnzWA1Pg6QVHXQMftkm19",
  "key28": "3p34YDyR8HNDnbju7F7KUyjtjiwwqpqACRo7heQ9JZHddqDPFuqwMKCdJRg3BxurfQ3cCHSXPqLceWFkMUYCEdqN",
  "key29": "2UnQ9J1EM4jgvxFX2L4eHgku9z2njvEuM6uYscobbUXQwtTReuMRZS5epUzUM2S5dUc86qEsrqHgojLRxr7zKy3H",
  "key30": "5BC3eJHSqfBhMbkPHisQtLtZLEbQ9tZXM83emGco1NNVtqZtesQEFt6VgGF4LddqKzFS5skMETgnyEnfbh7qFCMr",
  "key31": "4ef3ZbsKpPNvD2WYUJNkkpBhP9vKNLcxzxnZFGzzSL4VZyCAvLwMzgq4q6UjVkQCtBsXA9z3cjgm7SZPtwMfL1KM",
  "key32": "4bigQXQwBBqhBhxQsZn57fDe3Um1hW4M42KQtjxR87pi6AGtVL1qLnNCKw5TRXavmZxCwpuighBYr3NfVPeNrfXi",
  "key33": "3enLkzASep2GVwqCTzib36w1jk3np1hQAd4rUAZCSCH3bjzSVrwKJnGU3gchtMdyXgLKgKKSjZk8yCqefjDRBUbT",
  "key34": "4poppRPoZSzGwc77AQrwnWcJFQ6Jy8ehmiJRwHoKHJXydKVxuuCda9Z39ZUY96NiqJ2CvoTq1w7F78ChoV89WsVZ",
  "key35": "2RQ7JUTQVXKVAo4Xh1nk4xqe6KiSkQD81w9TjW2YFRnwkdYuF43aCB5mB1jsGuGAxHLPLFmSX7ZoKib6jwECH4yp",
  "key36": "3wuAjv9UiFSpXmYG3RZMgrW7mYyd1kHdTudyCtDjfweBTBWugEJ7HW6ni6pyNaf9nnZPBxPmtuaq72QoMVChHjpe",
  "key37": "3Fp46LM5NT5A1j7E7oKjVpgQMSc3H26skBCayEJ7o8cxMETgnt1m86xBwErpZf4VtTtVaSbcDg9sTMV2WnFxbfZ6",
  "key38": "5DTMJA9uw1HD1SgTSLsTqDE9T6jvQCn4KCVVspe81Schz1kPLr41yuvKNqybzmLGofdUfGrweyMoSddRpPiB2q49",
  "key39": "4eNXQEnUHBBa7dAYM6WMarEnQN2w19QjAjBCxoe48P9iGKhVYUJhAyy9sBHz4VvfHrXSEyBSKrTHqTDB6pSJMGWc",
  "key40": "5M8Xn3mNGnZRbeLBVm9G6oBy2uSZWm6UA8YEoysuAtdDYZLY3qtNwEhnjfjX2UzXv5FJjM4AL3GxiPMXrG3N92Pb",
  "key41": "3AxUYdwjJAV9hBPXbKcGobMmQezM9Psa2Rt8BY3uZ7xmiucKofZgpBUXkVjhj5ofGA2XHdVw1BRmSfCRhMUqagva",
  "key42": "qjfcyJczSpTMS3wnFGeSGUeZevSCcxuP691UL4AYx6xurwdStyPHAmNfsgvuGpNzttETVptr5UEz4PEdA3hWHRF",
  "key43": "36GHBmEs51vHYMM4zdiD19Vp4PvRsmrY2juFNLZ3Fj7jHZKQFnq48wpgUscf1y19JR8hesHbuxEYzcgMk1f8hJWg",
  "key44": "4tvjBLUvddLUvX1o7t6CcsYpBKDdkKUM9k9AT9qgJ963XN4kaCmX8GGRFVtoaC8YKdHFUMM4S52cSV6Dwtxayajf",
  "key45": "4FqicCz81aTZ1ek6MFpT6TL3eGKeLWqYWvB5bp4iERwHA1D2X3ofgXjgyTTzV5a1aupnoyk2ArWfYZEvuZNwa4TJ",
  "key46": "2NQeapRc5GkATxcN5ZLFoaRYEYYgM5gC2Ts6fC7fXVj3K2QzEXY7rp2ALpyVRksZZrjvkdv5xoZfJWwgWEFXhypV",
  "key47": "2EknmyzLNzY9WgreweJjk8zuEoBu18drsj5mXifGzpoxxESxPbEtnbdgW7buueFiJtKAYFKqV6Tgi2eyTrjao4YA"
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
