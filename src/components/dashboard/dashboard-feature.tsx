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
    "SoGa3hTmVXVoZAAqKzTFR4LACsyvyTd1ukVQf858vhoQUkQyoYK6mLNeeCWHkTwRkNy2k4ykzYQSrSXV7pE3SHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ye8uBiPaEjSrBMXKCo7KrbDahxKzfrxqTUUFU2JnrU2hzyCQugCLBuh57uCRcJJdxTEW8AuQ62SahP6SbN7LWbR",
  "key1": "4LAVtueFQAgq8R6f2A9gi9gK8F3xZniqL9mhr974EmLf2kKvcbW75zGBdLSv1ZRTuLmgsKW5QVWkACMgvGsC3Nn7",
  "key2": "4je7856kWp53Y3QuwpYJ9PXJTrn74y3C49HoAzfu891JiGCWwHdWbJJ7kiRVq5RK3mGQ51hETepYcQh8GCcj2kvn",
  "key3": "5VsS9Xoqreg8cbBc1CpdQGJnrBjjDbktZQEb9oLwrCG6wTdApBWmwsTKSFT3Uj12WKKfSsarwTsfnvXVTAjv2qSB",
  "key4": "oFg3b9fhA4GJm8DMuo8HnuzYrqvSFWkc7V57xHYz43BvTKUrjhUHce38Ct31HWPSCQN2JaAex5jv8j8SjGaK1Pz",
  "key5": "5bWmjNBskqWko4pxjQXMT1NpezC3XwnWgmetbXnyprmnBAJhLT7WdnQ6NH4r5fR1QgGJgqyYQHH3a6e4yxwro3dk",
  "key6": "46da1rY6Yq1hyUcHqVn2sxpS8s7WAkX9Eyzon6b7pBGU5YM6tWqLFk1riBrMBC25wkqHQ7U4L6H7PF3efrmf9MYU",
  "key7": "52ewmXxW1Qn8trfXWU1u5CLmxsq6yHLkV7VmWzSXgzXrqghK6nG6DyUdgpyedvDubK2dbzMphRf5GUtAUsq1EBFP",
  "key8": "5cZUe4H1wy5PWJFY2v5LHF4q9osxUFxAQiswJdoXYaD8FfzG8cuBFMhEEqUQcw83jjeFSuefymsNDhXLUWegVBrV",
  "key9": "5XZRh62uQCJnDLvhAA2qMV5SuHCnU7eeRp33cwsrU7XxZ6sNU9iUWY4ofYFtxSwCn6dPEWkRLtFpr9EH6NoyJEVQ",
  "key10": "5nA3a7Yq9JJ9uPEbC8nCK1dQd2iZyAVcdB5ewJUCprkxPwGqaezkzAwfqT7yc7GbZPy6QZs7ZZbvfkfkeG85r3wj",
  "key11": "R9YQBeSQmMmznfESnzgpQkHKVe6p6486vJrrZHzq96XYsiUeYBHSybzQEmqjMScN6xyR8VVVEQDMYoLoXhrVx76",
  "key12": "56yPGJ9jbSiUniYDDHwUGRqKP2QCiL6LmokWwwWgoqEXcKvTqo7mQktjZNqLVUsoWVQ15LV9YasEdh2g85DsADKJ",
  "key13": "5wXKdsYZhZb1PTT6SkShPG1ANSKDsnqyPdv9ruC3r8ayF7rytVWw1TMd8wGPyE8eG2h2jm6s4GfbQPVtNCap5y8T",
  "key14": "2Pnou8zkFh4SbCobXziTSqBoafe1q9NBLpMNA9oCyQxQitUTSALjRHyYJDKuqHPCq7wEhaXXyBVZD3wf8dnejzaA",
  "key15": "3GRjrzsCvfyaSrJa7PBQMLSnTJATp3XdvJQFXTX81iNMbQ8fTFfWF8mNXy45vuwLKUkyFAKtpc7gfCPjFJiHfFRz",
  "key16": "2SEbLYotGDB54PH5BY6YWGcFqoE281TWz5GHz5P6S8GDJrCGgHxxcVnKa9jrGMwjQwEFfLCRyUWjB8MXUQVhMVo4",
  "key17": "4GN7fWkcoyy4VCGkVsMA3xvJP9uJj1KGXGpdmmLCGJzfoCyLtHvidU7ioTWDcWL4RwA8dR8NrrHCbwHdggmApR9Q",
  "key18": "3kyX28amxvN4JVDE8v6GGUNYupgaZCGELdTvqbo4NCRPQG2147Us66e4pGs27c7RUxXDSezphDPbU735Kv6c9vwc",
  "key19": "dqQ1iXWii1UvcF9hTKX2PW7myYHYetAnZ596ZLXQhnbYjWJE888tQeEV28TmCmQajDNh57aiJeLsUA4oNsBAcVg",
  "key20": "2r9VKhubgoH8QLJxsajzo9dyy1yHjs6ipg45F8PdtPwo5sssSjgHix95S4KsGC53psLW6wveEB3pY3d7NDRqF4Fi",
  "key21": "3EYTP75syuVTKd43YCBHBRKhcFaS8K2vnBeXkicY9vH6Xq9gmuP7dRig5Npf81MxmK1SFetKTFhcXYojeKj9iiBL",
  "key22": "4p9wHdiUyWrcjJvGqeokTr6ytE1eLtdqBVWBdb2sCN9zsUrgoftKDg3Ft6ma3PpwdRPikYDn18j72WWBja9npJJa",
  "key23": "4eBC7sxUXxXHNxKdWTd87bqsQC8hvnZUqb4SWowpNhWEHoERNr6GUiGEMd33iJhB21LpmobFNtw622m7Cq57faFA",
  "key24": "5sbvND4otaGp3Uh5KKztfvBezsS3sELdC27ARseeudbAoqjZ2Wf1uhLFrGkogciPJitUnH9jhAKgQh4xRyazBD24",
  "key25": "5m1S85T6qyPvrLPRa3MEhsuDsakM2JBgdWz6MH1r1B6FBSJ6GzMqvkxCUfzEJHDPQkVWhrSt6XXMxS3Qrj3wEHKT",
  "key26": "3CXTyEPe6bURX1xNJcsAbN4hoaf5qcnsy9nkR41bwnmz17Q7G1beWQXv2TtPTyndALagaRdYMfdZpHZc8mpUJSym",
  "key27": "4zrdZUuAViuPDUyrnAkHc6rLf2ZALWgrWsKdL2wCaB4GYKKPdjR4vrWk6xcqwGVF3aspEyichsFigVrSHuhrxSqq",
  "key28": "5p7FUtbapPLvfN6mx8SvHBaAwz7HSUYTxPeLHvNdgUQkQFoaVXxwttfqn6xWXoz3kG1h8L3WVNN7Na4UJGC5CGNZ",
  "key29": "4qvWPP5pFxo3vzG3bx5r7ezo2ThceYPrF31NYMjxXGxbUqRCgBNNYCsNRZwrz9q1SDAymby6WJKkKNwZr6pfWwWc",
  "key30": "s6ao7MDePDng81zreHn5ZjztBQMVQ16s4awE2sD5ucfsuTCtLGBQnLtw1aqQX1xpUzaQJndWTSsEmUyy4F6qfsy",
  "key31": "4KT3GTf1RTjK8aXEwoqznbancDbCuZEAxfiqS9X242inUkPUgQGec8a29sxRmWptNfdamkh7bBzqYZkCKo5rDzyJ",
  "key32": "4F5ayiBfU75cKSjwUDUh9c1DhRXHhTvpEFqNVyGLW9pDbVu5KgBWTycVM2mo2go1tErF95fwWurC1BcvKReqQYyu",
  "key33": "u6vPayBy6ChbZMfV6sTPqoJtWZCkV4yuinZ6AnKCuRWypMfQWF5tTjGqTyuAaR4YvxpukQmxo1fMM4jHoy9i8DY",
  "key34": "2dKyLLATxYCiu9KRV58DAcYkLb3nMTeXH7RpWmHJASV2vPwEvmqE9oqZ1RVzLoekHHEYWKeWFqNCHw6f2L2BMTsS",
  "key35": "iRay8ZxB4wGgFaDszcMFQJSjts18stJGBW3YxdKut3uGwQCPffPpWhCzyRpGqUQBS63mW9X7EpfA3shHtvJjQ1H",
  "key36": "2wQqEqmCX6swR9LG7qAM57Jv6MPjdjP7ZBJ8LuMt1k8PojVHcusFqNNN8HrXPQB72QaWmJd4SYj8r6cz71P1S3Lq",
  "key37": "4FKNEepjm9uS3mm7aKMwhwR6jNENPwTKjxPQRwsS2ktfGai9QnQJ4bBhvPj2Sq2jsDvFw4Vo1B8L6GsdXJ7cbUvh",
  "key38": "2dwxKmhttLcXLGZmNYni68MjKucFFMvwhjpBR1VBn1TdwAFZdMsZaRSfMk278c68iArC5aHmQ5jgD56tGjpGquhA",
  "key39": "4PLXmtNzpgg7BxJ9J2mi8VUcWD1jAMMUXYL8tD7BnK2qGVsC5E7uffa6ANdsDeR3QkY9HAH7K844P17kp6No7w54",
  "key40": "5sBr8hxi9g6GVph1qEnTQJMD7rug38enAU4fHxwfaNNZ1vbh2bLDpVi1UXnhvWUQfV7gdZEDUn4CgASY1CnHxqmb",
  "key41": "23jh5qy4SK8EZUtLzJM3jcAam3jeKyWXj8vpDacDmHmfxp7G1KzqnMcLbc62EkWtwS7aNyvZQ4Z5MZWXRRiJTfMd",
  "key42": "2khpv3aQmkV6GoNnNENgGBkcWr5BsR8QrCYNQyJHK7cByz28vAGHp1pC9KkodPL2UjjAY6tU2Snz1RiP7S4roW3S",
  "key43": "5STrxeDeiKEXGx6M3NjB9ZqfBefy6dAyyPP1Rj6Wi4tU2qh1G4kuAKYRbF61Hi3tNYSgwunQGbgBvMg8QGE3Np79",
  "key44": "3ucF5vAwLeQAieKbj9tUEKr1tneHA3zxehiRSvHST5M21ocz4iEyVBTd9Ct1AhZX32byVfJqNQgt4yKXRst8cpVo",
  "key45": "3U3EFdxFrrxq8u4GRbbVYBruKLMHSLbZcGow3xWrYjSV3PJrzMa8DZctj5wPEYRZCjbc2dxx6S4vYgXG9dp9japr",
  "key46": "4XN38BzZnuWP1ovTyoGW7NNsmwbfNsNrhc2yKgAQHDN7ycbMqHA6YmhS7g18Qd5X9ofoNMuEZncxi9Xetbpkgxqy",
  "key47": "4NohaNMYJbt5FLiKCP2imm1tGoLwAv2WQ9RRr9TcNy76ZQdCCb363GCyxnx6696o7UUUemZJQHkxvPDkhD85tnfs"
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
