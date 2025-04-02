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
    "WfjG5U3sDrVbrZg8E7tcRJYDrrUoTzEgUmbpHQBFPBEEhYGjGJHsEpK3JT1eLssDG6s2smXnJ129dMFoLrgmLh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyWYFy414afNPqGM7oTE3NjqGkfJitdv7xHdZ9iCG4V3xpXs5XdRS6RMjLBcVcwRCRzjzJJEMSSMgRAPcLpiphZ",
  "key1": "2iurim9MVR4CS3Yw5PSUYoM8ST4W9fmfST43MYUvyYVpCucxzac7b5GFD29kYjGTEMc7exmwyDmczY7WbfDSQGvt",
  "key2": "5pWKtbxjgkGMntRpe8yirWWLqcwK9ZeFmHakgSNwZGBmNBZkVxtSAayvUtsyf6d8ysU5ZF3feAJAfX25WBWE8ouC",
  "key3": "zTA5HdyJoGLc1mU8ncyfMAbTb8r5aqVTnruWJHLRCj8j4uzMX3BwCQjpsy5yd3foXqaGzShpgowcoJhLqeDrnWT",
  "key4": "3dUchWUiT1aZyFk81hoSiEmPy2uDgM1BkmD6u2HE7CBuGHXn287SUAk3PAEECDbZUNNSLgFm2i49BKn9VDLAXuEE",
  "key5": "2mBQxU4gNG2J56HVqXgeTvnqLpokbkRNgKuZfLXJctxzYBPEWzF95hFozKzfKyhV6D7fLzEq8XN7qg1PyjMUpozq",
  "key6": "5FRiRqB6X4DegzVZuZGwieWUxdn23rwk8hDXbbpjgSUW9g9XCPy3jG4x5ANGHi8iJ3QJRm4sLATdjqFjxpiSyKc7",
  "key7": "4tNAw5UiwesmTeBBZSZMJKkLb1MJkaFRezM9CASq4LooJq6F77diH8ADWhmg11Tfozir8u5142Ci5sbz1FoceDif",
  "key8": "2SRT79ueM72wAjBVVxGYof2ndL2w9G4r8yqfvEAbWYdZQvjyMFpL2EnXKfvPC9xVVn64aAahgAjZDQCKTNK3R11M",
  "key9": "5qZvhqiRxpazUxpjjKhVJdQqtmcoFFwQ2vgeHHqHZTSyFDSNGuc5EzAccaLgrZTUH5nJoW9m6hVNXCh9pY65B292",
  "key10": "Cc8NptkhFxXmQ7nUSwR9uVZWomXeAsQCSrHUAfHwuLBLVoNSLRujj7eCnNGLdTM2LhbjBi3mLnUHj8gR2K9wmBP",
  "key11": "5oRiuKfrT9qCzHsH5xmv6pdWJU7VMt1zV9Q23TGMMvszXBFESCkHyJR5hLUWWFcW8mXaaaLsxeoG8BBPRbVxcgSg",
  "key12": "3e2cwbBoxymjTWEfttBBLq6TrKrSL8V3azkFuQV2gzqa6RBWa1L1tezrwfqsLKLfT219a3SMXxkfjMxoPVFf8hig",
  "key13": "2DwGh3s86xY3Qc5ZWwcbC8p5tjgYkEEiA6eWQ8YeqrTDAp4tCKSSZHXCzwh2Chk6Z988Ef8nCbTRCXFqLYbLEBa3",
  "key14": "ozAUaBU7zBfFowFP1xv4eFVBatyKP7JHT2kjvoqesoP9xp52ntBzhvyfkhDdBTpgw7QoMmu5CJ5idnqe8Z1WkTj",
  "key15": "4zt3ditGsBd7KR9MKvwvSFAgP55WqRhsmriKNNa4QXCgN8zyDpQL6BDvULYBVar18VUqAM4k3dLfFvGwHbiVpYau",
  "key16": "5S6rgeStHmZcqMyM7NfJSiSLiWhM8fMcDy6fKRJwmbSPapqMkdD1y2XXzvrSk1HJcTi3hdLgA417TPcQBC7wngyR",
  "key17": "2rj1sLA6recEDq1MXvX13J6ier3a5yKV88YhpHGhjHnMxonaQMruMZhRwj7maW9eCNkxYMcijTnXdugD44c62J9C",
  "key18": "4sYdsS2GQHJJRDKUsLYoHhVJ7AZCqL442qoie8n8Q3YrUTQAc7phkjh5W4vc3JBbjXnkcHBZGb45pzG7ptsTYTDq",
  "key19": "A8ecSdoQa2LyK3ZQ2C5tMSP3kJ7Lnvyih1JvXnXytHWGvLD5Nqe4xjyt7iTjX6d6R7oe6V4Pdvh455c5Eq4FEWU",
  "key20": "2ADAS5XkgJjjf8LBFQ5hDKn7PgbYL67iTKV9jUWxpHAqjQTXwTzQ99xfixCYg6zGNocNA9NCyRKsxXzDvnkYFAyV",
  "key21": "4C8joU3n8KzRLKS4eh1NrSo66FSZXZWLvfjRUVMXW2p2TZNXaN7c5ZuectbE9jaNgqtofeAykKCKpCm7dodGrd2P",
  "key22": "2PKEj3uWbhreaTYg6qPtn3HhHDg1XQx66kakwysgnKfUKHshDEEmpkA47FHfUUmkg6TT4RraYRa3HPXMg68YnjAU",
  "key23": "3nN9b53L6qgmvVT5quCr4TXuLzk9Qjk7qHa1ju2RbnNxWckqnFgJGeSNue2MHGUreuyBtgmUvYWivFTcAkeBZbiV",
  "key24": "39UEjEAWD85zgYT63LS5RT4tvrXo75hvQXdVQd68FP2joLSimA5uPmzPQNrLxV8x7qkxi3SX1FDg9wTe6BxVYwmM",
  "key25": "43BPRe1fdzU2BttGVBC2iM6Zw8AWeP6pGVcXSchAevq7n5KNSG37dPZFeh5hLa1QfGEbXHFZWdaZ3NqyyFoCvHDr",
  "key26": "2w8YKH4TSP6N3AC2JBiXNkXdSPvYcNQEsc1GUhXzJK9qKy2nrZtVVidfnAcAFDRtygUSXEsSSczrDZGAPFaZkoFB"
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
