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
    "3X75v4nkT6TkrMswwU71SmjBb39MkGmzgi9P5W6nT236NE3Qeyy7rymLHkHzxJtU5zANqUsKQX2auvAGnQjJ24Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mt8Ejrw3Rn3Hy4SUwRtDQWJmmxZkuCY8pgq8eWmKkGnfmRAK4sPyfJYbjGBie4HMBHGt6cQhCf7BfNd5C1TkW8k",
  "key1": "4oP5rQ6LU7HFoGVrAQNduAwF5AepiwRPs7Hc5zeG2jiNEhwBHMW4hmvQWYP67rxhZLRuURbpHskekGxujG9m7pC9",
  "key2": "34pfY24MMXqgg9qQy2XU9TBMGBmScbdGRXJSCcoVaPPR9MBEzRqy1CdgeL8ycEh9PzcYrnZjPBAL5e1gTspPnPKP",
  "key3": "3qjvoK18H1vNFek2dwuPLv6frDoVUnnwXLK1GgZNVYX44WaargAgPqLMdo6CnbLuaXD71AfXijkF7mcGQ7esKyR4",
  "key4": "2Q2MTv4zAfcE3cnivjGLmgPrudXgkFbZGWqHqNF9CSreMBVvtcUFSztferfkfcv1JHMebeGxfXA3HCbPHWXRyF9F",
  "key5": "4D4amNdqznWAt5M3yVM2twjE5ZXnGazqYcd1ML5pXB7akBYDXiVmoFvukDTYnhMzoUNimxwtFFZ3wNnFNDkuPAus",
  "key6": "4zdaFmJaUwdVkvjEX3cKhU1SpbVymYypPeVmgTzzUY4BE5QEmkabPpiRmR5jhgcpuYp9NuiJ5cHdWZYM2XojxYWR",
  "key7": "3dB8GKgmv6uTUqcrKb4PopchTUrsdC7ZPBRcYAFjxuPsqkaHmzu9tFvdp9wAuke1QN42zLP6wPwrbPfFshzaGuWX",
  "key8": "3zvuSZnB7Nad8hyjwcEt5QHVsBvLwK4FzvbdspwcYcKpkYUKckRmW8xNDx245bFWDyxeT9FcURmUg5E6vcSNi7hg",
  "key9": "TnQBf9vmWHiQzvKyqZ9mVqMRgm4jgincFE8nUf7qq8bdTFRrvvNM43YsDFNfhGqQvY2zvA4Xz1dQUb2UXvDqkxe",
  "key10": "gRt7epRkmW4NU3UCkeeH34mg1FKHNaLNRBAPukuknMpFh9bQeEcyJqdh7amL6Zyc2dQbxXGSaHY1zjJieCN6Dvu",
  "key11": "2iDVQE38zxByoTYuDH2U7iqKGpGJmrAqQh2BoJusZ6xjvhHmCK42MABRNXgxM52FDjCVYpeX4qakPRJFdw9uqzPD",
  "key12": "2377zFr7n1R5eT2dcaADL6C8rxuZDth8K8EcBr9NwHbcnsXuk5nYeigZbb3YJaZ1wwm62ZeLRSJ8rmt2yUyYptRH",
  "key13": "2xufdD1qNQMGUJDLq9QcdJucX4WUeUkT7KWqWsiAq4BhHyMKLMh1RKu74yMqyJmxzQ4ZQUwnCF2mKy7mLP9G5pUF",
  "key14": "5Kd9NB1vAYBjLgVTHbKTT2u1PxYkphMKcX4YnnyHxGm2PxbCKXQDXc1WKCDpJ1oMaSeA5SysgxtnHmd7pyG1iuXz",
  "key15": "5xSai2rGch5ye8Jc51Yut96d9FKgRpgsFduod2PW9sgAKWi9ywpD6E9veqmouxSAosjR59Cs2aHPvneCAX9aVs7E",
  "key16": "6pfxVpUZ9DG9zBv88NHEXF8V7wViwzQeSh4fG1zFFpNCG5Q4S8MgBkMh7eXVERaNGuQRzDWdw8zctLRKc5LkukJ",
  "key17": "3RQ7p7y94szeWyBhmCKx31eoumBj7b2J8hBnL37ntnHVvoNpbKVqr3TV2SFX3BAFfiCNjyq6NNppCCcrgnMsMJxP",
  "key18": "XAXJYxP6moGFbLTTbk28Hxu9zpa8gteN5kJtbMVF9D8fMQq3u7Ux89WQLcoerhk5Yoght2LEY1MmsTtqKn7T5dY",
  "key19": "25vtKuBQgwvH7U5rfD7mUkzJr9BEp95W1fjxcjFaKmMPsWVQ55JfqY8vnE4Q9mkh7uYor79Q1TYmnLdivH74SNiX",
  "key20": "64e1WBRyKsy119ZEXvik2kXDTPf68wHzHJGhBEezczT1ktEsvY68AsFqzDScT9N9NaLS7Dzk6ZhF3boTFtjuqajK",
  "key21": "2gg4no8wEfCaZenqMRvMr8WtHvZqqviDpjzhV7fnN2Y7jQJZoKC6LyJ46Yu27Jw2AVqSZioHKZioNbnLxKFoWX7E",
  "key22": "2zbE8oxe8LFyWSQVUV4QAQN8QP2woHtZ4AB25fbxxXsVFEp8zEMsjRycH2Q4rLoLitx9Gk4SBac6mreQUYczyBem",
  "key23": "FPCR9GcVpAiTe4JpDF7e5RJuHsEsHZPiy6wDZBNDQ1FkrL7kJQE2d3cLyJuNPPQFWxsz6KLRVDR3wFBNQc3Tao9",
  "key24": "5gg5mZu9KX4gjWugqzS3fJYFZTbfPv9boDCGvRty2kMtYZwyEyoEwpeazh3aFkzWVMc6QReAu8sHHKW81XyWY3nW",
  "key25": "49jCJcmbQwiqAcXK5VF7FEiggd9fsTewgpAHk5MEmvqVMxjdoarjjrzYtTxSb6EYCqVJu5DwgHFow37iqtp9NM3g",
  "key26": "5oiwUWWXNsp1KiA5mus5BknMtTZrzqDZbc2RcYoiX8wqo4epcRMK12g8jDK9DDedYJxr4XmokASejLKziEVa6rSJ",
  "key27": "2DCRyVDKtkkCutWcpg1TJCpTAA2DyCohuyd7X22rnDmMsqGKsJQ9LchBbyB2n1Tr5YcLiixeeUdLq8ymHbWCETEL",
  "key28": "3L3vXmDuknqMZ8urhDKuA179AVgFhBYLPqDeFhvpqNgBzGYHXNMoS4ccYpifYcqVVNu3mKLqWSbNa7TUX6d8vapW",
  "key29": "4PDuvqK9T6E24Ti42zgAckW2W9bYSbFyccSeNmqbDGuhGTztb8RhJ7panjKAtkGLyf3HLCXntxn1XtMz9uYdYeDM",
  "key30": "3rxXB13Kh5MpKh4NSVzAgDdAxzQaaBd87BA3CAerwcAD3ER5FhgPfrA7FUD5aQ9RdLCDg7cPjph8eP26kQuNWadU",
  "key31": "DMMMdFr4HxtWAwmTepTfab7paeFHEj8EBKw2hJhGdhSxNyneAuzSWS24u7ttUHMXr3afgiGndTWfxPbhPUyf5XZ",
  "key32": "3SPBn6hhxY1apUvoGcFxZbZZT4q5LKDYyoAq8yJ7y26seRiLmBBvGdQCdc2PisigJhyJByThu8Fo8YWWjfxACAXF",
  "key33": "2te3EKd5vUCkNY2ri3uz3Y8SpGxUWFYFeTkSW27EYDy2D7kmnWKinY1EHneuNkKmD4q9gHRJH6LekQiN3ctWACDX",
  "key34": "3XudbV7QTNRCgiBHvCmTGWjnrjrfeJ977McHnsjrvZFvPbevUgBhhwW69V5HEC9WMSYR1QtKfd9DUDFQYUpowd7R",
  "key35": "3jhKCbz27DE2oWnNfj5fq6onroTBydr8q3QBFytv7qKDY54hoT3XSVsnhJDpn2oMUon4W9nm5ct5E6SWoPh5uRj4",
  "key36": "28VC8QY6QRpoXQLMHwNyFBSC6DvhwdFK5a1onKC5ZMGdcr78WsQUPfbFomLN2Uqh23nsVPyRSpcSAnjUzJXRv39j",
  "key37": "4FRGbgNAWDxGKxasB3tejajY8kwyM3pLykZkJK8FqkYst9gLKK3NZ7V5dbo41k35WpAKSHF1qrYwqsJT5T7GmL3s",
  "key38": "4vG7995u75GQcsi9iU9bTD84cfbLuwmjnYDcNNTm2N4uAwT2Hxkf5QRWzvPGFwGrgsBfT7bXhS7QFDmXqjPiSKSs",
  "key39": "5B4YzVBJ17jtaVAUEHGSEUFhN1W1rNWSrCRCwfuaCUCWE1f6CNdSD7gTegWgdvsKGBzSHNUeRkvUdh5TRKxZrdna",
  "key40": "4jCwW4Qsxq5qSz2TSLUFhW4mgZeHEFRd8EWAqm6iZovqEAMV9puaPRJGQWJNoSNGfdTuNPtfKTB6VVEKree8zF9v",
  "key41": "fcRBuEsuHq5vA4Afzv8TyNT12F1SK3BHhDnQTFZCrMrMJhD356DGvZqnAumMBQnnVUT6uHBoaCS5KX84EPUSpiD",
  "key42": "55oVjMMogg1caQ64g1J4vabB4NkTrox7nqFnnoPxZZKbjZBwTjYkTzcQuswHf63Gnpxgqybn1gTru76iUzaxfmkH",
  "key43": "j7szEGkWCdyvDN62Qti1TuXAuTekxWbeFU8iodfWbf9qrUSndowGNLyF2znpkvqJQvsmbENEWyUwmnLPLdyqFXU",
  "key44": "4CppQY3qpEdS1yraf1cc2YyNXWTmZgf4NxHsVpCWwVeWUXuRHLTR7AnmBzRZC5WjezpT7LC9s28jtxQPdCDQ5pRg",
  "key45": "T4UFEm4zM2ZukdfyGyNRdyzjBnnqYXXHLgUAAtPadqJvEMwepX1ZoKqFgfRm85cHQhGFKaPYt966xzTXuWzwaYa",
  "key46": "4mM5J8nidqTk4LFmNUXox3WQpRWouUt643V4j2SAjB3crZawopmMxqM2RRuLGdwvvRUZKVW9LnSUFYzmF3cwNkai",
  "key47": "4Snw5RBECb7ZcNTUZqSMSUr15GbWjCU7owCkMEfkZimGZwMcHDhq5o9z4t9crazBYHzLJe1qbM53Hn1pbSHZVFsZ",
  "key48": "gXLPNAicbxWDnTuJSGVRZNnHQpNP1fhwDVgR4p8RopYtEAo4mJKK5aBg8zwsQCRkvzGnaaG68HNZ9Ha8gNPB1u9"
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
