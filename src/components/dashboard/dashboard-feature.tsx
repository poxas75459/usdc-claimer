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
    "5RU6LU8ftNfWb3VPxL9paFa7z3thBErSdsHzjEJ3Gc3CJ6SQ8iWihWvsLZ7WcjQG593WsxukV18tH11TTBDfLjSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xo9V2LrUK2cXMnpubrQhSvMUTvLStD6NbWiq6DKEVaQ8z6FcTcfRoXfE9XvAUCmjhJABuWGSGkLjHry2PVAwfCw",
  "key1": "2d5BChJpHDbaMNGy8hJxsmzbWrsG73bdbyLhqtsvZydBmCJvdmBwJq7ywHEEAcVB9YD1zMeXLZvNn3AfsFHbyGzd",
  "key2": "5iRnhkbauN4QBqRPGDJiR28zM5HezC2Wy2jwXLUD2zRMRNcjUFSVWcMrUo9MErX9ZVFaqqURCrj6Gy5S2ZWbNAQ1",
  "key3": "3hp61CoumnnQUSAJvD8a7rdL66EpJjHX1gpQbodXudXPwQJmbhvX9cXXhhMghi5TwtoMdQKjMaWw4y3Du9F9sZgJ",
  "key4": "64YVfmpiQ49DUQuZPv48MK2CXUBfpJA2XrfPbjGQbP32SuWkwWsfUZRYoGUM64EKpF1poGN1sEFqi3jxjrLNzNje",
  "key5": "3svcsfq6qDAqDKvN34NYsX6hKpjGhTDGLiUpoF7UyC5LNP9nnr6TQ3Et277Y1xipRePBjrBjpDj39xvihVKfwpoH",
  "key6": "4vzmpaAmhCbXzV9V1iKF2ZLeJu2Yj8xL8QAcw1k3L9t78B55ufnwNRGgvm1V3fv2AAgZoeXzuhjA8xDBi7E6avqA",
  "key7": "4b1kKPK5ZkVQD1DkjsP3Z91rpkXusg5qnpAvN1mS5Ev2yTp1Coxk5U62uSSffEybXfzgSrBBYrYECjNaL8pcMECq",
  "key8": "3Mejy6LJVobshpps8FMtRV6ETdekT4KsyFXFcd9F4oAuywYUqzWY3SR1WQVvY7zDTUERoDrS5FVu7gTXsaeyVhTc",
  "key9": "4NsVQrCYfjjBj9GpBFBfxKAr8cZydvq9RZrRr1sgBjUQMHh7ZL2jBe4VGDJjVYjtnzLEw4uSjz9m6GRUgoPifhxH",
  "key10": "5UxvgbfNhSPaUevm8yvw9pQYCD1GUDk9Y9Xvdj5kP6oHwMFTL6c3xvE6C1pP2Ra6Kqh4DaB1L218JUjjxtrBk62d",
  "key11": "661DuUrhNG4TMNMxDgBSV6jnDa7dhqTtXThFnxiMgq8GGKjuvwnaApMCqdS49FddhHiRKYon2uqr4pYGjHDbf7tL",
  "key12": "2r3ZvbYdGrGbpYsP5NFLKa1FueFjQBvPork8c9GP5WUgTQHypy4pKAYozQbDgkdvuvjcFPKKFAALpTNUnFTXKJYn",
  "key13": "5PL5TpeKrLqhVD9RRzTxzDVuyQVWnWavPEkd7WymsM9AfWL9aEkeVnns59kyQjdo7y4dSd9Wch3JVdJgrWReeopA",
  "key14": "5tpTRyncHuzDMfL7SCXCo4tn1yXCGRdvvV9yFd6KrLUvDDWGMWnNMqZSp6d1iajF9WpDQvcDiKUdZ7naye1bRtRQ",
  "key15": "4phoFK1oCRV6MMwcvZs2B1dZkf6vmAer8NVfxpZAg4ZF8o9WCo5fV7bjvtq7w9Px77PCAyPhS1qFvVkjCth7rnZH",
  "key16": "56Yy2wMUumYJBP1RUq6PcvoZdpfxJxXG2GP9wdksGYFvNVTffe44ZBvHN1yEP2MzkHC7fxDKjMYo4cGk3riKn4gg",
  "key17": "3v4Um4oAj2yTq4DXe6SiBfspexMnM7H2EzZtZsyTf3dFtukv39BTqXekUtBCCpuHF8nR5pYhWjo2UV8BjphBA7AG",
  "key18": "3EHNfkXNVdBcFNd8Vor8RVafcCjrvAQVtaTNazr3GvLYJX2wb2QfNAZ29Q3fuMooL61T34tPUWrgSRELsnB4WaFV",
  "key19": "3v7NPg6DgeZM6M1KQThvntPoeMoMfpgpbCiZWsxWvxwir1K3JuLoGCXnYD1m6oAnFGUUnVqrTZ6ZsV4zb5SCFXkm",
  "key20": "4HgHkgKoSUpGamGHWe15RATwdmqcv7ghR8Jy1tbVxQLUtdJRoxVs5fgDRBwkrGP3HJuP9v4NnVZtv7eqXKQGyNkJ",
  "key21": "2iFA5FS7Xkvi67APekWeYbHV5LJRbWUe1HaiqBA6UERwchQ7XoNXuPgHnqJHsquHNweJW7T3Gsf88FYfrfMdE3wH",
  "key22": "4o2pF9v3vUgtumGTWeWp3GQqKusNRGhMKKWNQD4Ny8U1m7SwMh99oNU6vc43ogoQ1WfM4EGVdXj7URRF2yoBq69c",
  "key23": "2pEeB6u1HqY78joR6987RoFMBFW9JKE9BGP6Vz16M6csvmFwGXXbboTqYGiphyLzDmN62ACWbYMLJGnjU4WwDFo3",
  "key24": "equni1ktvCZANWeQaeToYieq6TEXMNW4pefeTyUmqz8V8dHGGz7Bir5RKfWjHjxwrASK9fC3oQcDw1PARfSrNVs",
  "key25": "2nfmXL5a7dJk99pBxBYTBskCxE91V2AznE71zAxRGJ7MNSJ2sYsPQq5FnyBSPFGDDv8Vp9EEhiJaQJSHvcRLjfWB",
  "key26": "4kqQD5hQYJ2ffx8PnRhs2Q4XbgcCFNQeVr8WmB98sy3yKbYnMBFGyW3B9Fzvm3S1H7au4Wm6Vpi3MTne4V8DmP8z",
  "key27": "5TizkkTCdTLzjqijx9pmiB3aumXSuRwNXcB84oeK5Rp1FAY48paFihGThcyD31TcqkHbq5cqjWTij31Xvp3yWftv",
  "key28": "5ffxvrMevpdwYCF6qySEUDXzYFLXqq4sYLSF8McK1C21rECPeJ7NMSfky7ipy1nn6pzfzjzNqiiFRqSTop82UkX6",
  "key29": "65MK49A7txFjPmzJ68FEVdbmWzMj4KFnEeJpPLc6WHC2rbXC92q6iruUMziWrKSdALmWAsRGmLsZum4GF8b5YYmx",
  "key30": "4Xytxv8GAp9kM5tJqzoDo9pWaQGBVJ2QWCVwgueR43dDH3Uhj1NBGWXCPbwhFptoqbZP1QqNviowDctmVzFGTHRt",
  "key31": "5ryTLJAddwEtUVcYEiSTmtN2RH7itr6veU12i7D1oYytHj5veHYJcRuJ9oyM2eJANfb53cuD396FRDBcny7ZstZ6",
  "key32": "67hj6fv9jn1kYnSnHNFVk7TjkhGfiWwfZdUvcQ4tR1ULyKEFTskS9m6dNZ8bgkLdEQeU4Go3uqid7TY78cyWbSJN",
  "key33": "5vmCcfUrmewwgYb7abPkWbBVEXbUGNHtFAWjfs9ChEYgbcMsW885amUoyZ8N2i5hwCz2SwCXc6kCUWcLZhAqzmfj",
  "key34": "2wqVaKkV1qJ5pB9dfMyCE1W3S7VLphrpo6sj3PsDxRK4hnn3jM9qokrNdKsmW9Bhxb24iMDXtUbsV6sBzysdxu5P",
  "key35": "5H7WqUBbJVG8WqmFDtdmDm5bV6TWwRezBsJE885B7YDkaJKh1P7xs1LqmGeKZJ3AQtFNW76Pz6opFhmJTCdR3c5E",
  "key36": "4hVrBT8Rn3uraiDzmsmt8ax26pd8WJHKkBAaQBaDYLXGMNgKFc46NagCm5FdKTi741q7BEAEcTEsEcbprarabpto",
  "key37": "3X5iyAEhDmVAKftjjfKM2HS2PafK7tgc6rLYy4wJaMwodFnjomxhtXvMoCuMRow73G6F8kBUMFkhG1qUZ56cpPNs",
  "key38": "5t2aVQ9cbWTjeojxmG6ps9XmqxXXeT4nBTvdaCpHpGrboZcRQG75VwnY816y9HHhcTFCE9rZQoKdKpn4HYTqPGxL",
  "key39": "AVBQ9WUrQbauE6baY7jcHvDJJgCGjEiDPmph2HF7oqqVF3DWghf3ZyaJCbRnQNh96SuzZKNyfFvot2PDFjSaFy8",
  "key40": "3ftbwZogjjo3eKvxshXRRTXsksYRDSWFxzEYEFmFBewb2t8XsVCMrLPk8PqjgwJxodB5dpJNXDKXnUeniTiJvoA2",
  "key41": "QJJpdZrG6y3biSHb8LiDEgmciomW7HVo58dfUYFSmrt7vuTmCjf89CFZHQNGaTLzVWQ147cLoRLWJB5jWVannUJ",
  "key42": "5B1YJgpn1CQpnbmutxyWLwKWJtsVYyMXTtLJoQD4tXHTNUvDqmgknJFkKjhQYtDDmy8rSqbPjdJkiNRoHffCytyZ",
  "key43": "4VHyywD7JeJCADJAsdtkn9itqzNkk9Q9zLKcFmQ6JvfNz76JAUjrdvxxbn4FwSW8DPdfiqf4fTaEkYfLH9hzTrYW",
  "key44": "3GcRVShEVW9HgW2MQo65MJ4MQkZaDGmobbnjse1tPKpbUzpUZovh71cArziUQ3uXt4JTwaCQWuXZGbbGKV6xDF13",
  "key45": "4SZr6BCH5W2tiYqNpPqsUptGmpUqYM2ZGoZLoPX49p6xmZo7NGSReKZwqNYxJcYQEHoNVHFxYRaa5yQeRJEGwbAH",
  "key46": "2fdZXyTmRAZUXBNYmb4igs8g1cPBdahYhJtmSUvkAKfbohGxGQ441aoNnwEPi1WjnU8xS2wrzpKW3kUygeCLvJNP",
  "key47": "37BGfKZ8hWcQTmcd5PHj3UWRKkL6EJBhnMGtDyiv9WJHPSh2qVS6rMF8TmdeD9o9gzAC1ePExkNgNKbncyRU8NQy"
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
