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
    "35DUDTzdVFCcbb5drRDDQRNvMYG7s4R6FhGVXiuRVpPkbfWsdpKxwpgrAYyWZ6u2UTqYHPWagPpfeQUS835kJjLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6YfvHtwnfiLAuVXXzji9bqVcm2jiwXJYZxXxctq2HW67Z72HTQrCjWeaPMivWHEqDBJPpTkbiwKYnqwPz4sWfq",
  "key1": "2La1Zg5e487K5BENo5iUqhqMamYdfLifsDNCRJy1kuKFS1C9bVFfUqW1mhfvCKtwUvgyJpa3M39yLaU69QgMTdKQ",
  "key2": "53X58mFk6xePhLwZjPqJFsVTqVUXCjYyAYFh65C93hTJaqHoZNN9eQPBqQTqNFqxxndHJ7qrtWAESSoYwSKS5zZp",
  "key3": "3EY5vjKFmSKnwYq6EPBJyLb7uiBqtqL8LhsjHfsTYyJjsCeXHQGQCWphtrbcZEG7AUFoox2AzJ9cx3XHP5JRJzcH",
  "key4": "65naNqSkeauEeDkww7MavBYYaBR6VQhMxBEUo12ohKLf3Lr7wAiBtoagqAqH4TyWmAzoB7S1c7ca6Uos22SJX7xX",
  "key5": "24EjyG5q7WYMkMUrdbq2TSL7JERHPqvndBMVDHDZF2RKJDo5DwLA3KHmtina9gWnT42HMfm6MuaJ44fcHKe2cYdP",
  "key6": "22GPSxopGC39ozA66TsdZxbGqNQZUVCMoc81hFG4EJGMiPDLfEemM85wifYr2jEJJNXo1cHVCEXYAcV97Bp2rSnF",
  "key7": "5QcE28s4GJ2GYGCQzj2pM3vY72SkqQb5oycggQF1jzAnPyrWSR2yKcUK8LU88H8Hcc4uERuqSaHmVK3iYWzz3zEy",
  "key8": "3syTVwug8wGcMsyPQmXZ7yFpeqvcjkMHZVobwJXB313WeNqnVCoAHgJgSJipeaP9gpqGJ2p45MDRQ6nrQsHjfk8d",
  "key9": "22TjQmeQS9ZGeNidhwZgYJTkNEKYXH9nqzB1GBueXChnird8ph8rHLRnUeSAxzsi7LWAyBij7gDMCEWxapnQwJ4N",
  "key10": "2iEceMLBA1RfvUgwS67oFqHtjd7hJjAanBoDsSW42hyaF5MMTzQwnsJ9Mf32r5PkQQYTrYvZLrkjps6x3bJujGnc",
  "key11": "2hyoyc86puWrLUNUTw5vdSA6oKUHk33dZNLpKebP1s5chJj7rx6jTomUacjgPjjTSEPnsaXCPnYfaGCfuvmi7vB5",
  "key12": "3jbWDnXnwHbj2NsLjKn7UkuagUHAg1pY2TUfZzJ6V1TXwf3F615yBjsh1Fb1aVy5zwcUvSAgq6kcEntYSs9JSBoD",
  "key13": "2b1MzuASwRqihUocq1kqKAm1B4Kw98Nu41Zk3vR9DiUva95TySoDeFURBq1UsHasD13j5nWkzek8z8sWVh46NnAw",
  "key14": "39fdNFvQLC1EtiTA1DGX9F7kLxJtqe9K2p9HxghsjBoSAhWg7DUMeq6HsM27CADccH6oo4Pmr6Dnu6isPBCjdm1N",
  "key15": "5QrgfJoTuUkjgeBPEykpfokpshLXiqxfHE6SwUkvcshxgxcywabmU8kfb5KbfB6Swqsm7KpoVthLkyFPfQ4Q1Hca",
  "key16": "2sZ6mx2PeqXnaR84T749weUC3KoacozgLegYb5hJHw2AoeSoBwVm3fJwJXB1wBeA9nR18GYnmLPtchSS68YSeQhH",
  "key17": "65BkpYwwrps3rv82j8Vkp8Py4sAzM84otiBXDyReuYoZPCTdGtVgUrSk5hZJTMr9QBdSp6x3y57sBQ5wAe5ywAzW",
  "key18": "mRzHg29KWmB8xKcptiYLt8y3EkKsFxZc5fsv3PCg7oF9yum87VKUEw3tFb2qSo525v9RSPXw4f3W6umLr8ZKsPE",
  "key19": "4LPfrGdmjB2GYnUzeggjYJjRTd2pZ3kmNymLvmG2yZA4wt8egfuejhfsPcQHFHDSBCV8aNstsQ4JzHdSpwAFttrQ",
  "key20": "5BkDxCc4uR2mcaeMbqZYYo7ae6DRfAi8GUb1aFc9gzCc3j1FApp1aWHJf9urpuAi3uoYx2FR9KMiFC7CjgTQABFV",
  "key21": "5z5ZYV7mLs5fvbjk47wNTFxowRBzDm5hQRPDg6R12VDxtejcdLJVdtR1mpo7AbntGMGxpvXuQkxEnMPyWUsijja6",
  "key22": "2ZFFKZM4YMe4w2hBr2MHji45yRn4E7sEHn6WRLP3staEKRjuhYLckhUyrrjVgiR3W1C9rRjcw8zLPFD6Jm7X3GT8",
  "key23": "3d6TEfg5WMJTv6SN2SEpZKqHifpvSjymtn2nvyqiCRA7nzJF4NQdDCrGxUv26Xw17eaG2waVbJHKmaMWmdFJ3idw",
  "key24": "5uPTMNLPszNiqkvWH4CKfYsjr42YVBzzeMRVduYPVV5n29vUNmftsV5P6cuobePM9YEFSDiif2qPSD4dRxsnritN",
  "key25": "5jKnxkAgcQaUMniHSRg6S9spCRBVHDL2ifmc9ms2GxsdGZYNW6cWVS9WSK8YYVizdkTfyMizCLr5hrBaiHCkP5iz",
  "key26": "2rah3UfceVHeUMsDxzTGTgiDnhTzfKe6Gx5T4jn8NYZybXeVewfpDMB2eTUBie6HXpqWBgNTSJnyua33hAVXitXz",
  "key27": "iz5zdTLXQ6FJasW8gCBgwgAPQsFovuUTdc1rTm8y4zwL2qRHjVB9MBd2BoUd9EwAr8gVnu63ZsWB8gzoXPb5qYs",
  "key28": "4e1vs6yULKZn4dqtYkwiKPPHyKMNbWTs3GrA7r791FEdcTuW2Z2XuWfHJSq5bL3JjgvnNwebcbo1qUjkdKTVPLT1",
  "key29": "3uUekezUgNyHhCxyZrrf1Kp8huUx5VpqXudrNR6s8TXzRK5YMF9TWkNffDtpeBN4LcTEPW7edaBLw5DGdKzoAg8y",
  "key30": "4DF9BwzqjXNAkbwMt4PsyDFvg8tCduEtQVpMVzSXptF2qJMAMHXPxHGcUeGZeuXi94svHHt5cngTBDX893YvV1fP",
  "key31": "wPKXWvXKs5nTnNuAnxezYSkdqGqbUoUhJhF2KrVLfFRfo4kD7x5ERmbjc6LzsHm6pYwqF2BRNbhPtUjjb1zrTZH",
  "key32": "5PiN3QeKNKvqmSXWBUTkFrzSM7d5Vc7rnGL2T2QtfsTzkk7n1WkXPSWjnghgUcYvVsvo7JG6zyoJ3eTrBm4aTmcd",
  "key33": "3LsUciB18bLPxYLSQCnzfQXSmwNYZmTRz5ytSMQeMWoT4NJdn8LxMKuUbqPks7Ceitp4424czSLeY9Mh4tD2fCK8",
  "key34": "4sW7AYzgQCyhBg5E2evoJFknrrXtRCYCwDa8waTk7ToxqDoWRQCFVpPJV8Z4ji2xRqG4WapP5cmNSEjGsTk9hxMc",
  "key35": "5FoYpp9bz3U7ZH5fJdRTUdAAyh9Qukg8ADSFr7agoCTcp2XMT7fNzfJvEXQKxcnEDVBu7yu9NjANFaZZBWvv4XuM",
  "key36": "TYt9fivKoY1TaUxkohRZ31JZtXuE3yEikENFNJxmMqNhTjsMbxeKkGFkqZSmqx5XT72zHUqVauCQYR1hNrqyyMr",
  "key37": "5MoBDZC5jwj4F2BfLzXCLt97pnKMPwoYBdenjouGQdj53sEH1UJscL8BefvmNcdyQ2o56pho8wj2bDsXjaHEU63U",
  "key38": "61X7FHc3a5WJkD1jTeQJNYXyhXLrEmsMZFBnevp3FmuoKMAFJ8CqppZAsstjneqhpvvA1WnyZp2oiRZxeGKDaYw8",
  "key39": "2ddcfxEz4dkLMLB1kwqVERJYyKuLixhdBpkAbivssrpc7MW2559Q9NUCXw3tMYyz7yikEhZw882up6pUQwvUqiae",
  "key40": "3ZMmATBxQ2hrFvdD9ZSH9nqdEwKuD2Yfq7JAts23qZ66FDt9iqF1MswXmFJwhjexuw1dof4d6p9DoXQcGZaw748D",
  "key41": "27rg7eQ3PMRysxn5oBifvL3nP5GwFLpvhs33Vwnh7urPVJwZ59C8qQtf5QHEhVTnAvCGvymnHxYtt7XcycozAi5W",
  "key42": "EbuzBCPKGuCNFNJcfiGtRuvdquWrwfhrujgZ2eRxWQfnyrFe4zRKAh7Zo9S9w7j319yB833nw4FRqKctU2MkRr2",
  "key43": "2UQgXNEWVsWSStb7RNNgMsGLTsfmiFFH635bU6U3bPjoWLiHF3sTXMiXzsZ5NCy2gB4sB8wzbxvwMcnKYQ8JcYMp",
  "key44": "3sbxRnA32A5Wy69wNCELPscV5U6uZWqGkqCKkLWjEj5BRioc6dX35ZdD19wc2Jfn5u2pJLdfvTMxWxsy5jWik8uW",
  "key45": "4rWHA66HrxpVSZ3Hxgyv33wKKKe2aibw9o7iRn7bqc6SgRc1YZibCtvWt1LMhEaW6f2kqHvMhDQwT3Kr2vWK73Lb",
  "key46": "A1M2632Q7WSkRkKY3o7QpoAjM2H9TD313FGFvtdKwSWuhF5iGDoq1MWrGZSWmQJEiPuHw2M36mvZU2f7u2jcDq7",
  "key47": "2J932xzpp6LyUNMwCKDGiKuag7voNpVEvQV8SCkuULytz6YSg5DSVRsiu7WsWFrGZNvKVPziXScWR4DCz9dREG2z"
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
