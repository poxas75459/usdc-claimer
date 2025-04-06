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
    "2QXE1KrFjd4SniFNPfNNmktUH5TfGEnLQ9aceBGC8DVz23ULTQTn3fWR3Arrrq1YdkLtbhBTkTCHiQ47izq59JMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGNKdE1ub3omGpbPYj2AsJwY6TTCrwY8e5YhhioNao2JN5uVdFR7bdqsfJHX6BizyGeKV4oQv5Aup3XdDpnUBYU",
  "key1": "2ujAs6rTBGCEs78DBYrMzGi2rvBhbtnLNaE8KpkLLdAmcrgYa31xQvCquF7zPBbUtxVrfcirm7hd5iTmKLdpeSA1",
  "key2": "CwRd269q3XniSjyQJEedeTPEzcZdZ6umQ1qdz3tpj9qt86QT7DCrRuqtSAGNxPBjZaP59XqQRYk3XeADK74ADkF",
  "key3": "m3C5fJTzTz2YSuw84gsimemtXmXRnXVFHjmh6XecsaX2DKXxKN77goM9PVxPDDMhbwmGiNGHquouwefwU2nQC88",
  "key4": "2byBWVGxc3Py8GfPyjL5uiqiB86eQpVzFUkkgejPSSx15WuZazehqLNjTmiikX55jv7XotRsx5id3MH84BfkZTgy",
  "key5": "63EQmzhHcWeoD7PDGsM9TUHkXftfKefXNAPi1PTSAsevE9rTXegmU149f4DKFvYqe48JxuUFXnw6SYYRonRSnLUW",
  "key6": "5cZrsdEgViDce5XcUWCLwdTx2ms3cy3bPpdfnhSdFC3y6DEwarZvLxdsSpMqLtVg3ra45ecu3D51oRt1uyrKK1Lj",
  "key7": "4YYzpHTfkwhN4a2VM3zi94cEVeC6zitbEU7dY9ThaEL1bisrxWTJfAK6Y1Sgq9SeRgPiPgbPGbq19CUHTmfReA2W",
  "key8": "4ExsTmqSKaXAysLVKAVmCZJqaVqX7H9N1rQmZdLMXzKZxqViwmdiSGyHy1CaK1tBYJMwQELPXvEoxXajDAdym5aH",
  "key9": "57WJTq2uAidoj1K2NtuvXQN6jNUr9JDs6nfdaMJCYS6PogCcZF1FvDkx9J2mtNCRR9Enb9QveZYG3kqwwav4zSFb",
  "key10": "4PEzbWWMdBgUZGZgz7uUixXqqX3qStHApa2xjXS8czrxJkHJd6A3cApWbxm653QACRWZaj6UmdGt2zhGhiwgYBFg",
  "key11": "34zykBsLGoBN26XmGNXk9JMKQoZH5Vg4dGzZeJJ2EcC9z3RYdQbQnZrKdkYUa43XVuPq2KWhnjCWFzzuFkGA8gE1",
  "key12": "KdmTrydGHqJQs8Ta9YKApT9wK8YBmF1YMVzh1xxDEezUyQKEhX85CCEgjqRiRDKTY7fp9s93DVWv35rhm6omQqw",
  "key13": "557h26fCG2BHdLfWUzT8iHkzL2A6iwsx61Q2ykQmC8khzvzQ5eYy3HgRav4Qwgj59uQt3GDbZUrmXPw19Hb9wdd1",
  "key14": "35dHEyhUAh4VxWjFAp5UNu5qTcKW5fycoiQVDtjgpymfvNKtwchk5ep57cSVpq8YQVbXELE9uWzadnmX2P2T5q7o",
  "key15": "27Ln5aWgXkbyvqA1eLwSg7ZXW95wmHS3p91mkxrQTheqNJc2eDYLJMBjLFcfe4sDQWvfgPJ9cya1GiZq1s5S5L6P",
  "key16": "59BVWRv46pQK2ZpEk1GPEFEpd1UER5Uz7GbHW3PjeqdAWdmSu8vHE6q4Z28RmHfnGTKCKCtgrAXf8d7K6G5jfDsb",
  "key17": "21MN9tJdPecWWcFJRa49PKpHsTaWmk97rETQR5eWY4HYVn57ortVWqEjiMBUYchTgU8GR6m9J79iPX1RorJhtckR",
  "key18": "2vCMqdKiog9ZbUNUdxnSmPnazXEdMtHDfCsRRxBbZ9zsectbDLqhSbJv1An5hEeY5uh91HyZo8jk3Vu6Hwee3MGf",
  "key19": "3MacsGuN5KjZeAeqPjoEpB2ivWbuNRDuCxDsiCL1SdViM9kyqSk5gSFfKfAkd4HeKCjxgnybEaPTGVM7h3CMWqV5",
  "key20": "3h8oJ155bQzE33V8UwLR2d5AcZKkVz8vUGp7srFZndTwoRwQXBonA9kj5QwEUuRetDZ1dRfynx2eSqQW2A3fpXDw",
  "key21": "59twNqSbendkLs7YuKRVCttUZbx6a4vv2PYTczq36dyihFwdgq2T42qnuYnxgQssdZVXHj24UtwQa3Jg7bX6GFbH",
  "key22": "ZoHrCqHaTNDDjQMdLqCULzsPvu9S5fz5zE87CbX7bgicdu2s87YtUdnu9WMjhoiDsw8MpqvPBJ76DvyabWDTSWz",
  "key23": "2X9oWbRK5J5eKrn6XGZMuWTuqqeumuBBe3VoeAJJsDPFMTz3egoAf44CpJnN31Y2kqwcyyBSnVM8Qd64y3homkRE",
  "key24": "64rN4UhVRDQUEwstcNhLwypdE8qtJepG4LrYi3y8YFJXrtpCHpUW7rRDSRHuRVweTptTqYMtPbtjW7koEoVkkvvv",
  "key25": "2ewAPd3cuxNshkuzTVLViSvz7U5ai2M7shu6YLcq2UgHzYaEMDjxSpRnQb98f8F2EmTjavSRMT6TG6fqq5LCwK68",
  "key26": "4D8PfwWqzEa6WvjxqAKk1TXynokeXicsSDbsxGKV5WGS4LzG2MDQwZeMGa5vMRcJu6yXT6nJD8L1peizMNwghsM",
  "key27": "vKpVC8ouAg5hDtTWdqLXWMYJf52eXBo43XuWgaGzUTWnKHQnjuhziRJCEgboUUtFFd1VvbFT8RKJfDNUZ6LN2hT",
  "key28": "43ZkiAzreae9mTh3cAHxa5xmXV27Zn3NqSowKY6Z6eJDF1CV27Qhb1cAFnvbJCaTjnP2DogtQMZWtGU5oPnTFaLL",
  "key29": "5EsspEmZ5NwitucQPRsLvpj4QPq6B7K7E9ijrjZS2ufbTaZ7fNdZhRH9RCeUW4k3qRzX3aPyteKi8p84firXbBRV",
  "key30": "38jNuKGQpYJbqi2P7iBaYdWJBcUpnhVMXH1rXtSBizyZwcR7KRnGphpkxe5vs2BuXWx8ehRbJ9bW173nEvfN91zk"
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
