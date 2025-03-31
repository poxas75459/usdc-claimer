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
    "3WfR25A2pdnAETVx3UqJPwiCvd1VoGjweErQgs4DbD7QZjJdRwUgCGD2weB2as3UZFE9x1z5987Zfazw5yWdJBSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3J1MJ9FoUAnXngUJ9eCgpTxPVXusvMGhvsBu2SEB1NVjHRADV76PNDco3jzjmj3vdUe2SztbhhSVVrEkA52BPH",
  "key1": "47QbnuPy7Fs37snKgQG9RVxqyf48M6EnXXkUSAxkdNcdjfhVjiDW4ddasVvv279L8B9LjFvnbtVcR13mF8oXLPKT",
  "key2": "5UoR2ut3EbQcyLEZJW4gzVqah59VE2BCaFPpwAeX8wKXrQ9zQJ4s6kTsoPSfRvtLb5npWba4VhJM7TgYbtg28Ez",
  "key3": "5kQmNnBokT6fdFZ9xoaghYMityBC8gSqGnt4zRTJDukkGLgvj257t7TQn8G7nTrnoguMjkbo65vwTVJdctgxZSWo",
  "key4": "5Mwsy4rkYtef8bstsyTB8b9UzfuszFoFXCwEgprQ7K7TFF3owTdi4z5H2jZx5wn2vBPU47sX8qnjgSgr4uaTxt2H",
  "key5": "4MTrdcoEUqSaXWqkeMkivynte47G2H3oXYYhBdQRmkvWVRuvjEwoG4DLF6dxguTFiWEYUn4DfeGXpCaNCc1cwg6j",
  "key6": "4Dmr4UAbLC1KXM9sxdg4QteCs9h71DUqDEVhbKbXwuCCNZBzSERYGJJL33UAuc2UxaVVHThv6vdB1R1WsMz13vYc",
  "key7": "4bPwHzovAJLTYNrhfFXhfx7wJCqvyosRpykRyk3MMAMx66oqCxLeSiWLgsVTc7zkzSTEk8q1DFpWMs8ZvYi7Kmha",
  "key8": "3k5FZtv7PQtJf3eGHU7uJrzuA6g9GSxNzJA9yxBg3o8Rst44v7v1wHMz3LGQnDCqvB9EwX2MuPCTphgjTdUMzZkt",
  "key9": "2m21UHE6b85i17YtkzoVibYa9MNoK7T6U6Np9GJDoJcAFH4SGt4eWDwXGikn1Wtr4ufwPkBehHQr87co2JDBuStr",
  "key10": "5EXuH4LrBj4yPr2P8jZCA2PHGgfc74P54GW7KSY1oD9vFMhyGpnHriJPHttcrf3GAEiqQ9b4hTL45bmwMpLWuvvM",
  "key11": "5XCrHtvtJigftSAJZCTpNgq35WvYQfG6f2R6Ge1PsSW2tzSP1R2SrdVzWtQ7fP2xwJSpK5hjxcuEvt5NAX9tuyF2",
  "key12": "KxEJ69wACz3JmtFAFaMzfbJUAFEiDqb1jNqeNTqnEPCpisvtbE1jHndndVai2fnTxxUWdNsq1i8yg9bQ7PoFvww",
  "key13": "3b8cCPNouJc1qJtUf6YEp4MEkG6ByTQm3t7oAbviPqcRAsEnAtqsN9aEJqh8i9b7hMLJqbcGpouJJjfax5CHnDhy",
  "key14": "5zohUMAJPtr6vxfCgjx428b6LhgJXLghYE2HgLC1B7YYga73dhu75BKqcNUfv2pR5A5j7P61u88GGUfhomPG7Xfb",
  "key15": "2nPMQaTsLoX45wc9bdWNN658YPocoTT1iiZ1DWkaC1STqrhipPZCkUJC1R96tEiVUwgqzzRE1xTHxq9oQN4yp9bF",
  "key16": "5tWexySY9zYyLqHFRyScFtHHfgCEhbDxt9d4eKAzxTUovcdbFq8BjZ2DKUjDPpYRRnGhC84VYkVftvuEZZ2Fo8w7",
  "key17": "2CnkmPQSXq8TmRiNMZakTb7yohxgWkaSi1sLa2JCHjQ6QgquKRCnAxMPpBa9R161Umqc7P6KgzBkpjoeaxM2yCzY",
  "key18": "CXNTSkQcWkUs4ZhYDLvpw1kuJUVm42hhFUDw3QeUR86icZJoaYSVGHS2MsgiW3RnTGAjzVWfHSpKR6cmEvcQ2FT",
  "key19": "58W6pex7EmRAoSVVLiiXbGooiDBGR4owHFZzs4cPgoUKxP7VHpKp9Renz973j5B5aJa9eUswLNpmtou6Fm1b5pN5",
  "key20": "2x5Hk1Cp4rx1LBjYw3D8ZjmL3PGCaoNzLJrmRh8X7QoauMAYE9UH4wZFAWHf7PWXdTZzxmmmv1tTsvJc1xtyTzCL",
  "key21": "5jfNUr858VYsPg1EZp4b9a25s27CHMqTYH9Rx5GbmkUwRDxdqYgBPKy9yRUWiZPkzxSToc3fgrian5DMBqyFg1U7",
  "key22": "2by5WpDn2uaN8w2M1G7XUNbhV59KVgYMsDgETAYHwgGS6WY3PTDwwS8LnFcziiduygjAYEhbcitXEgESUGDdwRtL",
  "key23": "4qNkjSZ5Ypp4LJvipfKMYkUmgNYRreESe8aJcgkyXDPy6ZghFJcEuivZQ4ode1cr9ncrNUKEYJ8ATe5rm9BbBKN4",
  "key24": "3ZyXfz8PuTUyvp8QB8nes8ye5S9e6wvg9vpwwGUdbgy3rX8awMoPpTTCZ4NaL7vN8UenHyYyWe8x7uQErDjdxU8F",
  "key25": "AWrqDjCHxVL68xpL9Y58Me6DdJ9GFBGgtWCNaxpCoEwD756rmTXkRgHuKGGMRx3wE2bQajSVQcdBDyDuxGvL5mw",
  "key26": "2HUn4xn5Nvub5CFq3hLEG6YMFGKA8VG7WN8MdGnsX6NmLt2YnajPBG9t53Ch3yF6LuqUz7UJSb79UC3nN7yVZcWH",
  "key27": "8MDi7zBcKooWhm4NY5XhFLTpffJtamCpCwtsJMUihGciGGhBfd8sUL53H95HQBHHh3yztPFJFF7q5uwS8D62qdD",
  "key28": "3QW7SHxsk8JtoGKDMHRKQMTQs2LgnSbUqJCYJ6rzewCLnaw9MB6sE57ckf1R5BymGQpeKwpaYQ7649XkmCCfenBY",
  "key29": "AkKUbURk1bRSFbgukZ5rKbUxBvUZ9uNghqf2z9AtH3d6cy3Niy2JrPZx4h1dWj3otXo2dues6ZD5xaAogCAoiMR",
  "key30": "5AraMNM9Lk235kFpb4VjQKkwfuZ5ZpGwjAN1wdB8ntqG68TvEGqm8f5TbmApfx9iMKZmywqy3QDfaS84QLoh4qia",
  "key31": "4y34xGZQyeihoN6XfiTPRwkaGVxF4pHQyfZC1yQcXTEVKCoA16vyJvWGyTzJ3hJQwMTBgTrx7nQrrKberz5K4q9r",
  "key32": "2QJvdcDbwZtFMry2nfkT8G3CrPh62ZB8Ka9nsijJhuojLompLfraBgd2FpbvdWxcWnxm2RkNzdzGazy2Neieok1B",
  "key33": "2ir7V8ksbCppD8uYRktRkd2s1wSacMZ9XmYQSyjToayzmxY4RCdAzP5LdZkpA25SjN3jmv9FCCrPhMNZge9rRTjc",
  "key34": "5WjL7t8Ktt3W72hDz5hLXi4vCvcdTtyC4zW3DKhThZe8EDVNUuRw9jieaHzZgiPeyaUkE97EWqFDE1EJkaakEr9b",
  "key35": "2axbnNKtSYXQtBPTtiD7W9VdEHoH2159EKHhWdWvSfwADxvUCqerfaQiXmH16kWHyq3hzWKBotiFg2eZxZP82Juc",
  "key36": "4RSxCVyoB1HXcKjSxQhNc4AkGxXGQqt5wKVUANsFSYLPNRncSb4zJSWUxyy1au5iDs42zWTrHpPLixooYMWt9AuY",
  "key37": "43gfvv9EYdrgcWpBphy91c8St6VGrs9ghCQ2Q3Rx9zgVpYrGNs5ADMKq9m8nUK2NcStaDRARDLgk1qeu5FZP8mKq",
  "key38": "bygZm8b1ZLvu8EH678TcRXBERssRNY51EHf4UWzkjMW5kcVfq3ALRQUC6mwMCbTyicPDkHpbACa8CLhoZazn7tW",
  "key39": "45hyW18C2NduvVP2VAK5ce9nU2cdshoNAYMhYUkdtzcDsD8Zsgdp8mRgZnVrb5YTtAt3MgNtabqNpkzMk9cdqpQe",
  "key40": "5Q9pnA8sSzi6MCMfHWF9d6XxaLUY62nWtftukuSMNZeCJBMC4wyE92hbAKqG2hZUHZ6YWw6ixauqWCqnr9VY674P",
  "key41": "26MXiZN3eQR8kUgAQhKzuVUa31EZ7hdKTprzmZiLD25GGjNz7FpASuc8RerJNZi8SUDzekGReEnewT1z3UUAcqHs",
  "key42": "3aRFRqkoYotZ4JeVpiYxtjKYRsJfJmFirenJru5Yth4fqkgqTyKzpUU9NAQHGP6VzK1xu32JztZH6uihmCQf9Tdw",
  "key43": "5H49RFXTBjuB9aj5oW1Wy4TDpcwmtw48jsAgGKMbVkNmTzsKSHUPNrx2NFXo1DhJ8cstFy7sQkpGgXsa5qQYs8mX",
  "key44": "5q9xTQLFMAKrwXkGRFMwHZBbBbMdeMRm1iSTiVU7Qjdox3tptL3ppNi9xiLRB1JnhPKW6VHztwY5XA2Us8LfEP3B",
  "key45": "3kRsK9aRNSAcSQNNRkwVjCNwr4xvr5zUpJswLDs4vCoTkr73oHP7WZ1YUbyq2AzarczvFNrnLKUY4djY64uvvNf8",
  "key46": "562Us2Pd9d1JytcsBfSDcpqpWMw3X2DyWnZSgXDyzgBpJKknarH3eF223uM8QrEyE883CnfxEy755FSCRf9QDueB",
  "key47": "Cw7s2GDV4ATrg6EmpE2gz7GEgmoHodCY8r9cBoSPH9dx5RjxUWMSutCgKpS2mU3socxcvVx5tqKr6MjBzPyF82h",
  "key48": "5A6gJzMuHXk88vFMBZtBoYCEiGyi9eA77UmaGr3Jxf1paFCKbENTxHYHsCwbz9kAE8oELAQVbqrp4fjkcC7EvBUq"
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
