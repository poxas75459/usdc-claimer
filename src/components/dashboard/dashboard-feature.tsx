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
    "5sctz67w9YHXXvvVRaHgSCa1ZWqedKfDcMYmkEfRUT4QZPT84hEtJUypDLSiJPqUA2qPyoumZ4cUUzEFw9U5QayG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyf8z5sLCnAPgnmB9FMHWyHbeTXTa7scxdx5kj1KkFo2NFwXoPDGEqBjEp6fUzooEazFQHL9Xr6CA7mriWVzU7E",
  "key1": "58BrEwUVVxpGMAEyEsDeiPfdZBfKHv5orEHVBejCM9iXqzrZhiEsm9Kws6sXxiqCzyGkwhcxZhUBvFphEkZJzQDp",
  "key2": "3nAKypGvGWT255d66oW5Hg4ARkCZC2Np9d38Ac1Cay9fhHAj71pNi9xZw5Vo2nBeYXhdWuJN4KZWMcn1HeE8mvrt",
  "key3": "3w6XSZKkaLj3NWcSuTtDJ1seTNgXiUEuJHhboduUzmNQQSE2UXWTyFTeaPjXgtz9iWTKSH7uLKgoWMmJELMwm7Z3",
  "key4": "2ZVjz2KBFYpNbi26DKRnKqBVLDrvyv4X2twq7oSvPYk7qu7uSXDG1XaM4KfxeHtvzEk3wnBoHLbfWXrHb4JKpTna",
  "key5": "45SGsGZRorNVzZFypBCD4nuAmcK2Uh4LrZfvbPNR62mYWFtM3fqeMtXoYJgzQo7ML7FKe32FZgTvy6QvtVVHrzg6",
  "key6": "5vi6cDRZQNNjxYrhyFJKw3RGdMfm5ThnqxVU7uP8YwPmiGRgk6unfZt9HxdNtMY8CCbepJoPkaXs4R5S9aUaKAqX",
  "key7": "3p6DvzHcAvfTMXKpq5n83PZAAYQX3fanc189LK11CCjyF5Tem5WdZCbyk1AjkDGt1EZ6bKUyMP8Cp6Pi41frEuLi",
  "key8": "5v4wvmeUuoUc6YC9xjhMwzq37hicoUD2MAX4QoFJfE3db2EXytwMvWLJfGh7Ue1LxvZswcVek5nu3vPVTE16n7rC",
  "key9": "3TQVtotq1BQi8DC6MSKfrgYv22BQzgFX9e7r5sngRdcUjXht2nAmQeU5ayFr1gi5EH1ivj1HvH9JuasPu43CReKh",
  "key10": "2Vp7LmXNUzjjgToAeurNCHZojpLdYDrdcd3vNzdWYDRAMgRxc7anVJDaK4T9fgj4YJrXYUsM5WW5r8wUPv471Stv",
  "key11": "57dboPzvZ4di9WprVrfdHocB34Q6zVJxkeTPnJVwPEWZm2KRmBYpR5z5tp41NoTk3YKihmF2rFQ5SbGxWqhhu5EJ",
  "key12": "4y9LxSmkN3qKLeV6CH1t5MvkWFhTGA4eQVoWnwG6fjFkYiKvRmsKJ9DMwK37egoJn4dUBhDDpbmLGqg7qScEhVd9",
  "key13": "5oTix7VWv6xCbQAAeVAikYcMYZ7V7uhAeJwnhv1VJg8QTY5pX73v2SWYqZwM2qe4rYRa9b4EkW5BpKtAdcMLqE6r",
  "key14": "2tyqDvdzL4H6DwkKUvpLZ71xWodSGd1w1ifAoXU9gE1ZaMH8tjdaGrPdGekRyq9zuKzakT1MsiAmE7RMkyCVPcE4",
  "key15": "5XE9bvz38G1MUV7fdqFKZPCzhCkPUSRA3L7EkbM3p2coZPFrrDFsPqeFCbgUmNViWytPpwZn5P6omfNLP27DDExm",
  "key16": "3x5J3ZmPZaqp4xmgrytgpsN6MmCZpYJaHnqF7GCg8ZrQRnQPZYkRsZtJbz3tAgaE4hmFTH7P4d8ziLRopHJHmr6B",
  "key17": "2DfcFSJSCkAvGa9b1XMxvg7ZjfCNRFAT8xhZTHbYjRSjEd5soEBpqzmw7y6xmwU5XfTtw8RDZ68ZbWAwJkyn5CY7",
  "key18": "2iG1jAkFcEadH2j6vXn9HDjLgw3sNtdQWAHS41GwFvpM12HtXBzXSArect4y8G2D9Hax2T9yxwbcxYY8E85hsWGP",
  "key19": "4ZncjScYqKTrHAekiPNHz7iZaFutfsnZqxVEh8ENpsuQK3HkdNjyktoJoM3nLCCJZBF3UNWBfctUFRqGNYgUFXu9",
  "key20": "VdMpVrgBVSighPhgpp6qzgjJZ47We64D33H7VSFhowgZq8Y83Hs9EEpCMFebQgBp3z1GTtU7pMcq5rZ2HNwfWwQ",
  "key21": "4ubsfzX4bQYKZfekwByvb6iKLvUR8pv2n8f2HjcrCJooBUxceZSEVUCNf1MZi5qrMT4Dt5RmPutSk1ny52E8qqUG",
  "key22": "56Y7PBqgnznB7zbsSS5fA3zAsPgxfEPnXNJvhZudaZKM5Dijk2soJT1opjhZEsLqRJx3Rgr8SqLQiDVbqY9kFV5A",
  "key23": "5jtzwLYw79orQosXhTK1yKviwzhgycwn4j4vFjoY6ucXf8R785aMaQhYwCp4du5NLRHJfTNfHDUsiYKYW5xogDie",
  "key24": "5skMsNz6df9UcCf6JugLjMQfpg77kTCGrWX1g46EDTS6WCkc98S5KFirJVsD19L9ouHWbszJ73pUAu1941gXCTJw",
  "key25": "2VmXrT6gkUuccTuYs2Pn7aLySK4gkRAWm5YsJC68zrYCJF3qqwGBSHe6yk7uDnPE1AyphNSf5ouFuBct14aoiCGP",
  "key26": "519TA3YpmjFFkYahLU4qXQ535wjaZTCoiJDwtzDG1z9PJYctoXEivNmH68S3xarGo6LBCxtLKh1b3jEyrqCuVpAL",
  "key27": "2N4o5mQ3tT9aDzHoRHCM4oH19Ccc7q2QQGJkRhhZYQXCjidh5g6sugKrLjC5HAg2gzuQYYCptYQdZi5boGJLQWig",
  "key28": "c8hpsWsAMPjCho8oXjcStFY59sfDWqEkHeMJ6T5iQt46jP9oKMc9nQveKr3zLJeBQHT8JYpzFTf7LwLZxgTcGRk",
  "key29": "5cSHsfbCvxMA3rbbprmZFFFwaethyVDJUskibeWyMAJmD2onuKwC6kY7Q76HVD2FERqYRn1BkHU6s6JLQVRxH2T4",
  "key30": "4rjNJaLx3a2NfQinZZNj8QA9MbLiicvV89ekqw6mvXg1dEA6NmSPdnKmc2Sr1LiNDyY24Z3Q2keJViMbXEQSK3fU",
  "key31": "5xQ6iSTskcE7PChrmQgkPCw4yZqBiLWPEf2Sob4i8A83fRvz1MvrczVyHzkocGxbDxyZbihS7ZudALrVhdugj7mr",
  "key32": "2A5URwxz9C4AvMyXTSd7U9Y8cuy2FadHEYHWCG11GzB81qNKvETRgVfTQkCo585awmPRMzqiZ9A9ka2s2e3q6jhi",
  "key33": "NbG1h83Kiv6DZm8FK3QnKLLZWKVGWA9tGe2bx7kJWKGnpkysdaV4SSnsnHZVK9hq478oDDsQL3wNasbqjVKWQxL",
  "key34": "2Do3SmX9nYBhgcpyKKhS1bGg2GerJvMtZWwNnDMMvvNRLcp2NhJigiq9nyovFandpsza9V9EYFV6qa6oTY9DPFvr",
  "key35": "5Xdv3L8MDogfAp2NVYHKDH843Ym1AQuE8meRZbHZK7aoBicvnRQDRHSg5ptYFRC9mqi3FE9MmrMgZJzXwx8Yykcw",
  "key36": "3iht2M3fT4Us2abZTfpHm8kitYHGMWgxNMdwysdNwreAk12ThE5NdhyUuaiYznri4XvH4Vg4tvxhtYAEAdym7DpH",
  "key37": "2WA6mwrJBHeSW9gLSdwgHtGrewnMRHT72tacensNCHjMamWPbUJY6wabjjW9jkRbBTt4njaV4VHo7oR2Jxtxhb7Q",
  "key38": "3EJnpeaD5DVB7GkHqPGjss1ziHziBVZucTBsuvcw4Qddz8EaYJi4UYQ9qGD4mux3fTtWis145AiMvrk6i1gYJWKU",
  "key39": "4PikkswA8VPM5hjuCwmXAkP7A37wfkP65WndEfq2cGYYrLMi5Poq19jWZzZWCpw8mHCCmhLyUyvG1cHvD1mknua2",
  "key40": "4Sbm133Hmx7Mz2qbEfJvgVC1XbCq4CEG6RNWsZpiwhtV3TeYx41oh7s9hQ5ncWWYzNwCNTWj5hb7XMRgVKnvXURb",
  "key41": "Mv7TxqaGZSBDaJSCM1LmThzd5VByqCMtXpds2CZ8y87KD2dqtENaapiG9wf4w4CRCWqPxnYVLnrdmVnmJ2rMmLC"
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
