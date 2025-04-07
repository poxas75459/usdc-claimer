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
    "4W4sxaxZBTu3CFLVCcfPgkGSdq6EwKnSS7UT9JypzPV8YgsmC5Q9iL7fofRZJuhnDkKbb8kMVPcG3VMRTtb545kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxamQWhnWWfPLZNC2FttiPnghkiqPCApJeBBzXVxUZ831BKj2Lcr5i4kSFSBGFmBcH6UVveF69W39zShU9j4jpz",
  "key1": "4tx9HA8azD6rR6cCgkwa8VGUTdpLhMxWvic6E1PkfKaLvHDSAWFmEGhgny1r34pMAu4bWY91aYeH6HDHqvZamR76",
  "key2": "xMydv1h7CbFduYao27HenoFFhQgD85EJ9jmCWCqxe5e5sYhdJQudre7cdLYhYoFVQaGYCrRX9Nrkhb952eyve91",
  "key3": "2KBU4vLbkbMH15rX1s9p6jwnPHg3Hxd9Z9jDdffset6PFCCSumDLH2c6QexSfCNmZkXZ2vxa7ker9RTcQc9599JX",
  "key4": "2xdyqjb3gLfDpGXw4nrfXnp7oMTTWFNqD85wkomiHQFjVKqcVneA1PKU626XYRW9wbmhQQcXCLERVRGkCQ4qFTGV",
  "key5": "3Wrg9iv2o2SKinA18GzeFjtRsoaBq5rTQRyzxdxGDWUHFKBExxvJiLMBYnExAbujwsDg8LJzqbk4FZnfja77RGK9",
  "key6": "5uMheuWmg5LNUKa8uBGCdfbjMLnbVW4jG4BRR2LLWCKjzeB3ZfCwR1pGoiuD2JFGAosHtXsKfJMTLBvLgboPix2U",
  "key7": "31UR6DdmNwxssDuq69qzU2E61HhyqiiBGSh5WoXFKnfVK1iAeY8o7cL52znUY8nCeSoBCdjBtwv9ufdxYdDjUnKN",
  "key8": "5uEk5xqrsQcGoFHgB6EXcugJ1FP8HPePoSc5fYhJJPtT6anmYVxWWWz5BDUGcy3Miu74SF2uuB7h5Fz7zDUbspfK",
  "key9": "5maQpKt58knvacH98hdmUCKikP94ihqyz4wUyLDDDz7oxbbioZPNyePXmERA5MRQUW5gpikNqcs8AHjW7hVzUQtx",
  "key10": "nYREnaDmTFjZRHrp3YGxYLdruFBCEvg9TQmRssjWnfamJ2sRAj6ttGHHPJv3t6SvvaYTXEMHNW36kPFixKL6vKD",
  "key11": "2jCwDhuwzuq5dHjcVrn99atAjkaQ4NhXMBd2PeT5NEjXM4TxY2MHjFNMmmMLsdy3M6t9TuChgCqhVeSBAye8PYmf",
  "key12": "62kDeu3M3Z5nD6HWvPUeFLBSDFSf5oE8CjzfVsarqXUXjCZRaEWWNNjtoExZMjNHtntgrk7MRSoehoU9T1GgjhiM",
  "key13": "3qk1yMHeJpHrfaT6uD5cTtnmAomLYXpMfa5oSsrksMht6NB56PGeR1wosZXBbT9m1XbLDLhtFuoXyXEEGtkdM2og",
  "key14": "opqMgqYGYDEvnn6x9wNJANumvPT738jJiXpSz1YBNrs2NgF9mjeDvrj3oZfX9eKXgRq2rnPGL5GUmhTsiHXNNeS",
  "key15": "2PGD1o7fTVKhr2kBdmyZQHttDfujYQyt18YqfoipYCyrSY5x2jc1PnYyvVF4nB8wDPGmj3t5Rs7VjFUNBzQua12p",
  "key16": "LvqyCauDTMhKVEVdSwjENG1mPWVFuQUNmrrcPDmLtKd6JG9AP5H6S2CZJCvXPzocvPQdpDVKhvGXmBNtVqpaeg4",
  "key17": "2mttLQfCPBrQo2s1PoR1ezWj8bjG7XBM8fhpFBfFBQwewzu1tEAYrymq7DGFXcYNAAYCBrVFVY9kFwGLuAyX8JvA",
  "key18": "21QKeW1TybTRxNywUeT3SNUoQVdGTNg48yXtHfXArtqaHhMSCuQ6tuLWiE52LSt7XCpAQ9ouQJXKuxPZ6qgnLa9u",
  "key19": "239xvqZrsz8LeZLKufsVHYwVjswufzBtVFGkMHdhg9hHF5t7n2xDeScdRN2wYqLQqoVgsPnRNsRmyT9hBuzZ6Pyr",
  "key20": "4axWtq54TvG4GYcxYWBoNk1jxTGk8kiCfDRVZb7bfa3wA1yhZGysVR4Te65oZAyViDnpYGrQBgFYLQKZ2fkhxDK",
  "key21": "54vEH4ybZRwxmKV4Db16mRbRyg9ofzzXBrhWmjMB1JTa36CNuGrunC2PPCtvZkZyUsz3rTmbXdesbfVzAeJBuvw3",
  "key22": "3KW7So65dBJZh8EfbpWPkZHKJm3ykPCHEyHPjSDNtWLUy59fzumi32nSXxaQLQrbJBPVBGddSkMBAqD3vtpW1xnL",
  "key23": "5grZvfJEVMQNqHxkwWwct1VYM6ZuTPaiQodmH73KyqenhycZzkFqEJ7meP3yhnxsfrSzZuYgmDyWMbsSJhR1TtZn",
  "key24": "2LMgsRaugPE5aHxouuQ4DVGQwZUR4V81MUXTvNoUofH2gTJZpeDvePdcPcTGxfLsLaPcVnx2nDJcaoutp9vzhPUw",
  "key25": "42wPW6cVPA2ddLsEZSf3Cpt9L8Ge2XWd4ZpbkZ9u3due4GiprfCMqg3GYWWSKJFdrSvUCSWpwJmpSvdwzSkBGcWk",
  "key26": "KT6mnAGHqXGarBzY6V7R7cUt5C7Dvi4cckT8nz9FDk4BWJaDz9x4ZUPf6g389eYJ2vT3UEotRTNXQLkhf7Gc7WK",
  "key27": "4qcC5wHwHTzuqtzEcpRcPKapZPCzZUjrjH7rKiWh3XPEcdBoSVDEZW8FXwaCfN8yD5oGXTC2Lbwv9RRznCK3Yj4C",
  "key28": "bYCHuKosopKQw8hcfPdSUhw99juScnhmKj8Pup9Ga24zmcXMyPA4URSWrMjTWxzxepvVo2A9hfDm3GfQdGUhCDC",
  "key29": "5wqC8MrhWQ5kpCNLXWVUuz96SZz4MHQnXha1Gkbno1kciEVuBCsUKxGnhS7orPd6odf6HRNAm2rJc9A7mM9mQCKD",
  "key30": "5LebxeW95s5FAPAgM73rQAQhAkKUrR9Ca3Tk3bft4x2tn66u73bens3N4v6BMKucXb9UvnETHReCczwibV6z83pg",
  "key31": "2Fxv6MdaJJHTxHuTXD2H26qweDJi8KWb4fF2bWQXuAyVektck1Cn6DZ8F4qPDwhSFjjzWSZMGrYY2wGnkaBLw8A4",
  "key32": "4vYQvCui7Ft5vE4KqmPfSAE2k1bSsT8TcZFMUuLbw4yZn5KWvqp292t9r9CjWngxkyKzKv7GwWUsU4J8XSVx298y",
  "key33": "3W56omDjjaWWCw8o8ajPExsyyr6GU3ZNXCBKevk3v3CfQjDLycLuQf4XMDxsXMVsieTeHzhHwL7Cg5MtULNdDBoc"
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
