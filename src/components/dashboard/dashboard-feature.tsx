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
    "hWZ7CEYKZCZb8XkB7RTD9HGXJE6CK8i1pAbXJCMdxfJ1k7beGZvQQ9zghh4NiVh46WpcBzU1nn9AmSG9XzmJ79C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QckaGUDGfcYTBWpP4wqn23KVFHZdeKvP68T3behBi9Vcb6U7DTCspLhSAQYo7CdwsVN9tndFKhrKPC3C3t8vb6m",
  "key1": "2mtKRTEqxKFVbVUZETqyNXzgMCc6TUgBUskuWJwBWRR7Ypj6rTCwPxGKhKSDEXzqCkwCaeNzJQTEbGnU98JwRW8U",
  "key2": "3BBFbdPeTyvBbyeEvhWYsATvgqaGZnFybGdaHSvCpdkbcYzMGVrsBsJqYkqWBY2yUdhSaqLXEEXeeq2swoJsDQjj",
  "key3": "5MEEkmgg4jCcURYFW61A1nMkGFQZKUHcjibqcbYRxkk7RBYd42qXcZ8VKhkRBipokMYXQtsy2MPCmzN2QiQEFcJj",
  "key4": "4CVvaptTAnLXnxjmkz5Ptqvgw9qSMXCSvbkuAmMFNw3DqtpQQSkUah1HdWscdtMKQYL3F89zBubP2oRNxyrvfd8C",
  "key5": "51z1HAR8rE53mQww5YHPMdoVxWBpizaZfLoXtXHS1HapihnsCBcAjneJnm39fx7at8hDfRAFTEvc6sWQKWuTQ3oV",
  "key6": "4CUS9mENWyQAyuJwys1zPtdUJedS61uCGg5KQy64kbxueyvudGyfWZtyM8zor3FSmWBZzN4QHiiA6cVAgQRpQiUm",
  "key7": "2MNnFge1vpCVGcA7XwAvxqmzTd8erKEM6wVJU6AunQMoStopKSvMhAiyAWQsxmgQerJFMsUcAzazPtEUPJGS1J88",
  "key8": "2R1BvbUKW57cmqUQx3WVsJZ3et3jrVSxGYntUSZdkovfhLEB7dLCSmzpnmPyZTHSwmu5eKzwJks5bnuvvARf1UCC",
  "key9": "39KFRWU85EEN4kfoyVtAwCL3QjWDJFZ7N1mRTbexBvLpd8R1ELZ33CqipSLDkTBffa49yGUmKac7ttqqtAR816he",
  "key10": "56TtqmyVtnq1CoKQeBLoCxwBWWfLpYQ83wqZeUMjmMiM5HqsfN34ZpTjGZQoxsAGjFeSvzbqiazNWKQ4tv2k2hxo",
  "key11": "3vA2oQa6g97iTiWbtRzCxCNFVJRe9E47zPirvHiSEYV2ZSSZdcoG1kADPRxeELL7CkakAXEiKMBPrHsbB7RU37DX",
  "key12": "3y8WFhJSDMbsPph2VtfAL5zineWsY7Erp2Dot95EfGyv1rvsHFUyF8UkDTEyBkNZtcHc7yki95uJZFWQEvcexsUd",
  "key13": "5m2Axta2LL3Vp5aEeGd2ZLejbfe2ybYauRpma4wjL77voYvCRaNUcTuWkmMykKM83wHw3fpw1SGs8a1hWk9ZQnCC",
  "key14": "3Bojxt2QiyYpBoRZnKJA2z2EbyAQrY2oNAdvrmEiqmYXs7N2wRwLy1sTSMhE6ZSACgY8CgxDjX3E4PVNktgmdara",
  "key15": "5rK64M9wGSsxbjtuNdamNpmHxgEDpCLzYSZjkV1hh6DSKNez7P4QNoaKktL5UWG6uPaUjMWeqq5u7yaCKRkvFBZw",
  "key16": "6kPvjuz9Vok7b7dJDKNGMJXN3G4gZUe1zePiV5c6Bbrs1QxLNHtMzH6DYa9hqRcTFEhRZPSay7VPT5dk9sVNR1L",
  "key17": "3rgE2SC5DKi945YHrEe62ersZiujsbQRBr8eqsEuHzR3UrYmwWYT6QN7fHLvFXxiQUzsYVRxHC96oWhgoi7rtbUt",
  "key18": "4mqXFmvZQHPqW2hune4QVKYaGeDuAwPfFpdMTK8titVtu2vvyuwmbgSWfYrkKepQTniRsayWwjRUEceDXNdU591a",
  "key19": "53KCxGt6rez9WnvGUVjFSq8eYQftFMUpr2GAv1BScn9bkUnxLbErrJ4kS1Rvo8KUN459FvoJRo7xnHZEBsAHtaat",
  "key20": "3H2BooQjhsqL1RZyvp6aFmxB41NXFTRMqC7dczGbaXvsL1Pa93bBDzN8CaDk4SsaLUmwdkSv1S2zVh8Yp63p2g1U",
  "key21": "3565Z5Rp4EUwdeJaTmJoo8gvLyBK3R4RzFxn4ZiQiBa1Qr7gs97QTem8CfPnxtG5KBuADchq6w8dssfaioWYRVfQ",
  "key22": "21cPrxmbn5q67e67dkw9HPELofbYS8PXEBkvhqjkJxMhMUUh7kKN1KjC3yZAzZb1ipLLY3nhPUnaEQp9JJbcXPkN",
  "key23": "9cmv8pL73vf7jtW25x5MK3LCmrDewsM4ZCbcmAdZyfyukNtAZMngngkrJfmhXRBv2Pia2aCuMdNwoaUzfPUYSTQ",
  "key24": "4TU8QWZfeExVUXwbDptcbVgAGVDxTLLVrGDjdgngAbim2ESEmg5im2MEhicsXjuAQgjvLR4ezkiFiF6ZgJTouQfh",
  "key25": "3vfFDy1HqYsdAGnzaQqaZMLDhnj8oCpCd8r5y8U9m8K2sS9CTUhXkixG458snKSCcKZqveGvexsAAnsjscamBKgL",
  "key26": "4ss6j82NYmD4EZsYghsRaK44rbfCkVEUSVCNEPPFuWZ8s25EAyDXJZXqw1TSayVu1kmRR9zr7mMUyHa8NnyJKtSr",
  "key27": "2EBDcEiUJpCpJtd76ZnxHVMfyGW2HaH3kFtAy6oe4sYCVn3KdWFoP6KFAcj9icBGqgEGwJj1KzhyNjzXfTLxMcMZ",
  "key28": "2mWuro3zgGwaMjVhT76jjkUhJqX65vyvKfZbZEtWgzHCjicmtFNZMQt6NKoKcHYAdJxCFJATpsmmvRMbHp8U4xQG",
  "key29": "4LM4fPQnSVn9aCRR3AJ9ApKn58ifaiyKgGJFFYnzy4W2FZ9THfYcXMyw5iNcrKhnNwJy2Zj9swGZNzuPBWdHshZi",
  "key30": "2zSSgnrns99bzq6wNzpyxoUnbYp5ZooimTbJCWqG8df7FG3HjzYhYJCBiZN7fFH4rAVfCwQhpVaCLXuYMHJXJxhC",
  "key31": "37DSuzvVzK6eFkP9v9QEmykbjDvFL9P1CegrursBP5qfC8N84zmEWixZsJmDcoQCW3bZbBci75KdQNWi1R4vX3oS",
  "key32": "496Rz58gr5cNxovoeM7mxVoRZJuasa8Pag1uUddk7g8992mypsuE5nqhPhpRiveavCcx8wZpC1bAmEHFLYxMcj7f",
  "key33": "2xzWEqoWpdw5vffxaVrsUWS3bqaNXHhZ5LfSJZKNbYPraVm9T5RxN9vKrjkkFvuRKGmaxq69wapsYLJiX6THwPnJ",
  "key34": "3WafF3uKphACpctw67TVKeoReUkkQJxScStGMLa2enKp7rbyBVUtfrB7HAYuiETmJcqvHRz4SJJAAv4hEuTcsHaH",
  "key35": "3sdV9iBptQLvQ2pHNnYfRNwmUxG9FxnbK2YkPDYTkq4vMx71SBy1Feajo6BkFmLHM6KzjAURz3ggNMWdMgXjcPM7",
  "key36": "2dESgEr6nVUDaT8pWSK5ZFHGYsA2a2Ps3KqELVkZEcvFEsLvFSDGCYvuWZin9o9kTAVNosQb4X1scQcirV51tsZn",
  "key37": "aY1VcBaDgpkGDxxaEPjAnfJ9c58qxMgvC1JDqbRWYqyDd9kaajzPA3tVWfxVHtwfd1eAEphY8w2GpviyDzjkuAQ",
  "key38": "5GFvTpHtkBXihVsZh1JAooZ1bFNNsCDWSxzz3AZNgpsR9Fh8s1aA3AJeKn5MAFEiwFpJ6eNYahyLyLKQTNmdGMFJ",
  "key39": "4sEWJcupEQ2jpogFwRTTj8w4ybxChwduHYH34Brwmyxri4LhuWsJbvhbTSKMawzETF63xNz7PYici3hYcEofrCWL",
  "key40": "RxDqnbGcc5Xxi87bYmagmVMhqpg7ZM8PxowVroMPqgsNW6DGvLqwKMwSQ9Jbkunsb8VhZMj4VTNPqX5vWVcV42g",
  "key41": "5tNxhBgoD7G9fBd4HNiau3qFwaTRV9gH9XmF7tdCHccwgzz2r5oT36RVgTcsRdTh8GXxUAS31UNn2dZyNZrvMGk1",
  "key42": "3dzCGuq9HXU8GfZfTxsHinwQytp89tyYg75PczFeemS67cWMszGyzwYng7mtYVBD6FAjot5k7tnesvJcASPxdSSF",
  "key43": "2DR8JLHwGRk54zLAg3KxzSKDnXJTSvPtXgYYukc17sEkbZB4xHgMSfPdSZa1iR6aTdoNANYzjj93qGJbeuqobATY",
  "key44": "2iNQPeDQUzr2p4tBByh5MYxvXqBiHEStSqTLNi5NrGpXexPUdpwzST9Eu1m9aQGEKmecVzuA2H1LbQLfkNXdKFvg",
  "key45": "4gscCYykoFbPswgdE2v1bBSgBckAK4skhCmw7GKDwTfXi1tee9feoJYraC2efP6BZWqEWw3V1Jk4qHnmj1AkWG19",
  "key46": "54R62gYwpCmW6RWXbXB5r1ZYEsh3Mh2oNNpfCYx2JbSFuCksQT3d6j8FnqG3Nhp5nDw98r7rJ55dNZCR2GisjUKc",
  "key47": "4fZY8zpwbjv9J5EVdW4scb8mX1cG3fkEZW6DNmDbjiDSMDRrmPiQ1vZ84h5PWHbyNe1x5eqLX3aTgK87qoVgZdb8",
  "key48": "4xVhAx5oXJvLQp8sdZVYHAjS3zTEoFLjjxVNQwo6fayTFwdbrWBw5e44BoS833Ry2aLwCfAzWrh6iiERH91BkBGK"
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
