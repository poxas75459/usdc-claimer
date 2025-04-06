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
    "4VVskD4SKB9vUvZAT5Bcyh91aj5faM9cDnptGcW6Wz5ha8xDziduCRCPbrDDggmzoZgTm2KCD7JmPQkNPZx8CSbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q2hqEJJqjnLuvJwFZ4zePrLVvu2bJo7KhWna7Xqt7B8MpsTs5tCb7996sGCNNzqkLuQymAcqa7GpzZj7BizNrNw",
  "key1": "G2dAeZtR9vycTr6v64S6E1HTTksq4s1CK7KHsLZk3n7tJ4D9mPviqv8zpzF2BvPRv4E7xoSeaaiszuVKyQcvS5u",
  "key2": "239FqPa6D8b4iU6NdrWkz1cgowKDDdC5ZtnTTAsAYjwCG6xZcJbVrGdRx3kyVS2kVisFzV6m2dDYDb5NTbC57Lr4",
  "key3": "5RUcEsjfdbdhekbicGhrFzsNdMhUXsrjEBU1o8Q8XgwJTbMaU16kxDaRt45kGYXwiwC1Gf7bxzdSW3ovAH26XqM",
  "key4": "4tiHMV73HP9sELuh4VxoiuoVXQWMhXNfv2eNoUCAXrUtxcKuXLJWK1g16wkPBqESAeUQpVNDy7Eu71usWYbKPETU",
  "key5": "4PHNA4aaR1dmtHFt2qgP8hmuC4ViCJ4oWz9eW8LnyFdrbSPv6s64KQ31s4KrqE5zgJHRo5S5WzEX6nGRNS2CVqzB",
  "key6": "3kQZRYfw9op2MyFgEmSUhoW4DPeXgeHZPNKjDCQTmpsXhRRdC3qqNER5v5tFnEK6mkbAbVN8oxY53zXcnbydSpzT",
  "key7": "4xs2BgioB4YB6RYGVaa4LN6m1iYz6s4rwvwKRf2ZjLFs5VVTFH6PscEZsGRYgGuY6rGbqank9c1ivaYcgKxZJUy8",
  "key8": "2u13oBe83rKn7yjNKiFRnJVWqxSPke3MHBRsfkeBxFR9nhPMuZbuYAoBYF5AJ3x1QbN2TLEu9feNBcjkuQanJ7yj",
  "key9": "4YdyZe5BFk9eBkxdz3yDZ5kNhZwat51vi8VKxLyvKBtqjUsGSdsMfCxQXqfNxuHSFmgGBWPexzscE5Us5dtvBy6x",
  "key10": "3KoeBi6gYgfNfsuHn1KojbvxBr2yCzyKi3E4cAwNMWwyUnq9TYXqST3MrJbZFDuT9yVHCHaRgNRDRYvHyGmo6pan",
  "key11": "248ZFLeR5UvniPTMEHj3JSzCoWgQ3e7nnR4mkgo6psxY9g9cCabRFF8GsgeBZCjaFPTW93yBaifDArwLYVnKVYbC",
  "key12": "4BsdGMBdJjXhGicLFcWPMp3weLtSWTagzMKpwhjv54E5fWuMVnUND2tSP7FgrfWqcjx39ezmts3GEDAPgjNYSjzA",
  "key13": "5wwLnBXzMipxEt5UkC6BR6wTm7FB7FMvLUQDP4BFuPm9n5cnsjZgXzHBH2MkrH4B3f939k9E13CFASeg3dEothku",
  "key14": "5jG9CBms6foaaAHgfFctN9PVu7U39LEawzdYd17VQ82cHFy7Cvcx4gouKPfwjBSNVkxdi891wyKGY1TYJGe5xqnP",
  "key15": "2VeYYtwn2E3L3551FnUdJTyF527DF5AL4ZECfoeXSmGF8LBAYBWGJMgfrhSadzWVg9M6bHignryMzYVRCmncVwox",
  "key16": "52tsLoRBBnzgefcvNYVTFP6xKZMSVKgdP4jHmTC38gcKJgtQ7ysgwf6d4NxuDyh8Q7Ed4zNLix4gjuLHgn6riPiB",
  "key17": "45uRtEp6dGiBu5uq4j2bJ4Q3mzo6RGHG7LXCb9Y5fZc33Ck5kyeZo8KZgRCjJ38LtX6aAZpdK4DtfREUx6Snia9d",
  "key18": "jo8X5mrBnvJJ4r9vWd7DJyMWqhp4Rrgux29MHDY8F4ZViCHNibu38aueeKo84bjjpcTprBE5fjCWhpBFSW4AmLm",
  "key19": "5EDagDVu34h1csCf9PRErzsR5HN9RsGiMSCX8gFxnbj9TNHjzd9ZrDF4EqvKj9VHh9gumb5C1ekwbFY9kRB6izCG",
  "key20": "4Yzqfe3EPghVb5wpPeYBQnSZRwDz31VvCa5QkWZDLYEgK3mBuFP4xWBvK3QjmVFt5t5iRM1zJMWcqnAEQXRYZ5iP",
  "key21": "59By5gseNr6P4hWf7dAhr2XPxmfBCSJvFFPcxmeQDVgKE9T7BpMhfuzLiy5Jxi736GqkY5UabwzhvGvxNHEkeMFc",
  "key22": "42S1tpJtY1t8Ak7ZhVAKEUuZYgR36Fsk8LRC8Mq3h7DBVCFy43TPaqSQibeAG3236sX9iynjffsnAWCgksMqpVm4",
  "key23": "2TSKGbhhSGNXWJBbxgjXVMQjEJDFec7ycVTDP8F3BwBpEFhoFwio8nZghuC9dqggbJdqTgM4DHmRJ7PBx3Wjqfd6",
  "key24": "42nv3Kf8TYSXzcDNEm9MhKwjkNM3P1fRPqpPj1vyiBCKns38Yodd97xVbLQxMw2AdmFdPgWiWWTjK5VZw9DiTVrq",
  "key25": "2mNeqCXNobgr8o3TGNMkVwEEBraqseogShZyLaszo2Kdtx5t6KPkP4H1PmLQFHBQCtw72cEVKCdPYUtuw1XuPVVV",
  "key26": "M5d72UaQUDKCnfZhBtccqU8W7eK7FdpX4hHXcidyRJHgywCv3c7YBZ2iXg6cXmfX2P3iSVihwnmJZUsmvGk1niz",
  "key27": "4mAjofnMLaoXEcRhff5qniXUz7HJXPRbWZaPMoAqx8FKREk1c1Z8AyRVKyBR9o8KGPR6VpRBp5zMLGuChYjFvLUp",
  "key28": "2LmqebzK1p1sZ7L7k3cdDAQGUcknwouMfzjpcPXfiVoCRvzHpPgF1bh8zqLeP3UiBvY9s2BhHkkXjR8a65NoDFbh",
  "key29": "i8MMKnXimdt59hCTzfTPnqG7vL6dJnYJ6WHokzP5vehBw3z22VwWu54VpYtVu9hV8TxZcC6eadXkbQsKNyZafi8",
  "key30": "5Zz57cB5s96ZSeb8V4nW5TH4bAEMqX8ojVxP6RMET8JU3jkXvXquXsDUhyMnHnBbxHJijmNEx35vXJwcA4qnn3Jw",
  "key31": "5u8okWN9q66WWPBu1P8mBxSsufkdynGg8BbyhLVWCJZSeb9iB7feZU21tzT22Vz6hTP33UZ5ZiepN2pn761SYB24",
  "key32": "4U95b1NQdWmXb2sbrJGrBSfNJJozxpr4HJx6ZajMiiUCtbiWjymWqtXnvSC7uxKVuwgXoDARqHMpgNHJwErRDatt",
  "key33": "2V5ijniYB8MKcmKZ4hw22TopP56egTwgsMuW5RQnYtgga2U7DAGPUMWLFoha3T3Yc8GjH37KJpeNEYdEfh9pfVQB",
  "key34": "mvFjacCmjKoxcKumg2B24RrDs3vfKU936gvu6w8LQK3yvtmY4LRhVz4hMa1ePYn75fjbaYCp8nVUjpnVXDspsUM",
  "key35": "3aWochwNpxqWE2THNU6y8Stcfd5kDig7D1r3sFAqajZCpigYTtSqLo6fjCVmajmEcnu4oDwKTCUtmBRur7ftwEvK",
  "key36": "2ZpWuLWPmRhAHqchtrsvzkfgJDpvNJtnwtSRRadsBYcPExzJB9CBndxTVu1HozWsjLtjdv7zKMpUf3io5oVSwZ7i",
  "key37": "393WPr1fSHJA4ZKKS7nhnP914yMjAgcnhefmsVkaRaKSPZcTFWuW5P8w1DfU4NLTroMs22br3dYBaCutpADk4A3V",
  "key38": "2jbbUi1A32VtGnHPPu1CSWKca2v7hztft2L4nqkvgwZTUEYpEKHDjW9soPA7NLiMP7gcy4L8GXzaCFY4FArFNiza"
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
