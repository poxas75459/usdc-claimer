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
    "2djjfmTh8RmqimoftnV96ze2Zc7BHoaenjCnqaJrFcMU8Pssm4qt2jenS2UnAEjSaJ3FtSwAkmqPbJWZi8qbYo1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noKfaFCiRb6QrBGaDvnn9kByR9pbt62bFEPzKN3JwPAX3zADUFx4sZyVRqos4PTpnvwqmk7jcBo4o1pRWZaSFw9",
  "key1": "MwxkU1qgpRQbLyyAjio9KEEE2XEw9ham4u9vjCUXVMZTiQgrcwFsJ4Up6qTL32hgxTi1qXBbNf6kW5UaGZm3AoD",
  "key2": "4qsZHVdbBJgPXsxZZniYjBLzynWypEwEoKhf2MPd2Ks46iEqnP6DYYpBkwN7j9n5bcx33WKGCfkkiEySy8oaq3JD",
  "key3": "4oA41b7ir1D5McT4s6URizRDGY8Hkq4g8i73EL1HvZPSouw59jrtV4DHnZNURJZ3Wfuz26QWN87seLdpyqT8TiMP",
  "key4": "2SmSUvxDnWk4y1nXE12UyqGhg1ojhqLWmCYzEGV8JeX3RyHAe9NX42R5B9jqGhKboFaM4gVjyPiMWZ5dg468T9uV",
  "key5": "6HmWtoFWJbxEoCrmBWPhWQDwqeUhkqEeqhCAx9xv6V8r8CoU4s2PBGZMYRfqbjj8EZeMUYCS6JLeqfMkw4tTqe3",
  "key6": "4yUoX91wymHqi7R2NJjJkVgyHEEM15tDHvywDtCnVKJuEwi5Zswq9XvJ4j1fzEuXibor9e6B1Fk4L31ccBd33kCg",
  "key7": "2LfrTuWRRkQxUYkxFGG6borCg3Mu8EnYwDPQAbvX1BVDaJFwNopTqccT6Nwdsv5yyr1ws4F9Yuyaekk7PjfBsyvr",
  "key8": "2oWxoUhnkF9GKKHDNnKuQ8VF8TGU43tNmTPXcwwF28uz5yx3Zu63cjTzS4G5xm9zFs92LrMec8d8Z6KLvCdkDEou",
  "key9": "2M99qgLRPtN7eecVHHQybUh4C9Zwo1sENbwe7DgabkAhc8t4t7vyPzyHD96uNK8bG9o3ySAxpgSTEYFEp6FQbHjp",
  "key10": "5gMCDBvxSDF5QDAcctYrssUGqEYAFBc2n6GSWvHzE4WckQUY5Ei2W17TAW9zPJhEuCc73sUYd1egr8wHgjhV39xs",
  "key11": "Sx7kmypwYDeeM6qC2tY6AU43pNgYjHiiKTcXAjeDr7boSvpH3DK6KS9nq3394pe1hZ4oRZcy4ba9aQopzuxe6y7",
  "key12": "2R1yUxswKLYL4kSk8EAwpG7wmUQoL27rNW2EX9b6Sxwo2svnFteKvHXM3orjjWN8YiZS4iPkobiiTMfM2Zqzk971",
  "key13": "2cg8MZGT6nEoHmJ2UqYaqX2YC9fGGx2AMexZk4rdnoMbA8jUEzf2NzUj5vM3f6MkbypnBb8v4JHaazsgVuFRjWvQ",
  "key14": "3Z3Fcg6EqpKSf6faDQbbgHtMoALPyfcQV6UwkicpKVhKS2w7u3TQ5HQAhbmt6mVocx34NcbaGLj9nJfiUZEMoDQL",
  "key15": "4PMMZTpjiN5GMk9K3YLKGZiiR7gGuqEhBdPwaPK4UwfmzuJWoUUdDagQcLu14YXxft1dPvk45aFYfmMF3KgoMtMn",
  "key16": "3Ak5zWppCGvFrC3tdiSwpCpVSMTGnb5hPRwRjrWLTXMDBGZaijBdWAZ5G9279PkKQ6o9LTUkTXjHSMcT3kxw6rkt",
  "key17": "4xhUQywdwD2mKFNTYT8AGiszdeMPqPWkhubUHp9vPEBmZ8YcP6AjeGU78Rcy8Z34VwmXhHxjQQiPoipFyxJJ7z8d",
  "key18": "2SnNa3eNGnNmuaxmAmNTyNjZM6pGZbH882J6NR6JTMQoPYYEGuAySb4aLCw4wHmSR4nHTpcvzYM8pzDopZ1BLQts",
  "key19": "3KbTd3dDVJR1AowpDReHGCynRV68Jiye48ft5jpHLSGLH7mK4Uu1WD8fKoKFR6aM58qV1ikUcX74bkLMgn1QzXuE",
  "key20": "3AiNDNQF9emBK6yRckC3sVnQ26nEgCrbVQjSHQwsDmpgk3FStdn1dgVNJbkdrjtRcSX2cNj7nbb36f6ByNp2xPJM",
  "key21": "49LvreLF1oQwNeJXxuXUjXEWFgrdizbPvCykBCvPDHvcpbNDm2bGsGgG8q3xtKGenY88m9wG4VCf3sbWqxcXrUqD",
  "key22": "4zqfFQvKgA74jzBcezAuGseM8iAwEFaEcMZQkmKyKcfS6Qk7jqT2bXGSvPdKrZFcoz1PxJANjTsE3YAEScRae8X4",
  "key23": "4mCTi7iC1i8M4M6AFxLLRHedbs2uhR4q5Wmk85nVNZPMPs68sbrAW1rim24kPjWYWWRHmZerZijMZHkFqD1oBvGN",
  "key24": "nF8Wi3wBUqqxoDDiQiowmj1s8HeEb8zRYZsGH2cbnsvE1E5vGPTdMcavZpeVmkUGkukLdXVMu3hkxetGz6ZPsg2",
  "key25": "3bBPdiMPKz2E9kwtWkJqGW8rHjv6TW1HgdoZe8ZpvTVEwxrD96uc8iA7PTp31UMeziiZsKPicX1n8vVUdT2ntqUb",
  "key26": "DnDpMoRsiKjMRV45hf4jFkAzYgvhZSkjWvawrrDR3iVca2QpmUeMM7RirxbQ5qGTfUawogdmLCpcZ5Z2QYxnyuW",
  "key27": "5sPFkwPtD99zfjgx5sgBKkp3kHJFMoASaWrbeukbuGXc9hDpFr4rr2RzgmL5Gw6anC3JoPuACC6PzMtXUjzwsd4q",
  "key28": "4U7xjf9m2zt53nAZAYzvM8AU7JfqP9J85fNYJzPQBVrXpB8ChwZfZHi4NrUjCfoxq2SywAGUDMd3XYjbSyH47wUt",
  "key29": "36akh5Tsp66wHTBQjo5i9fir5fk35ZnyzMdixBnewXzx1UMycMHWEu6NHc6DEFW4CYnbYHs79gYxHctWDU4xrm6W",
  "key30": "3eur3nvnYeV4k9AkvZQqYuLjbracG63y478WW3cyQpgbrt5eWYDYQJwei2xRyG9bBfhi2jQc5geosT6Gxe5ToGk3",
  "key31": "4tVJVgRgsposqKdvR2GhHAX7xafPpWTbcAaX9yEVbRUhhyqGMRPRx9srG9vybweTxELGQWKk9whW3UVEAFL2Htwx",
  "key32": "5vy1rtpbRFjBbbiuDmK8hsTSkKQZUo1D2mxb4TFm4372k5nVCcpptqgqiky7SMPw75g1RK9nKbPzuEGo9Xqq8UDc",
  "key33": "4dE8VsPdizGyuw6mG6TNqVdiMyDrSLz4SsbrLamx7mq4hCEfR5Mh4Qe45cC3S9841T7zim8wARrG9KczNL7FRAPL",
  "key34": "3xby3LqwoYyn6tjQmfbXvcJmnBfAbZfCT9yLgw58X9XgYgCqibZQQVipVyS8XmCnRXX7uJ1Wq1hCQsoXmeBHBsN2",
  "key35": "3mTZeUPRwVgyc8CfJXKz2HU98GhnzDeLyEoAqhXem8sP5p8KoCMtDtMx4x5atzuVQyadm7odLHsaEbZSC9Xjx35g",
  "key36": "5CbvtkMJdtJ1Z8Qokx15rCZDVrAFnuQckJY6ue5rSXudyzjgGSLFauyr8Br26nsttsBc8BvxkG3B9FR6bUHkYSnA",
  "key37": "aLoniwxgCFbeygz6LhCLZBi3JBNuVDYR328L4BnthN69SRuncJzD1Zugi5H1FqvxPmsdSarxyngeTnNh12w4SBj",
  "key38": "65tUzrWMLEHxnJr8Y1MDmYpfQDyLAjxFKznnZDkK5a85grJyH6U512UTZYHW24uUVr6FSmF3y6Hyxt6CEMZtZJzd",
  "key39": "3S5HxhETRziPETttRnAP9jbFe3xSr3MN2PaQUa41MwvKym5ivRxgaBtopkq8U1hfWHCsPfeBHXPZ3TtZMrd53bb7",
  "key40": "5Dk9dCkp4fFepdTekqWf13DeU1KikxHqgmBGh3x2wsai7qz16YAsiwmsEEKxdofLs4g9CGY9Tb71zYdWQGv9fmpK",
  "key41": "LxRjbzUeYBapVcqqUF4zs8XcduGzrCxviRX1QNgyCrXAgvqHhU8w6Q1M9Ghgvwct9NhF11j7vQ84zCwPx6QmAPb",
  "key42": "4bgC2dx2vzGh9ZrTN9ftR7ZvwPgy16p9ebagHSHcKRXC87EyAtGZpVyRpdMMkcbq3521kjpBfreWU2UHhZVYrT9M",
  "key43": "3bDGXDMfdVgqnxEdSufAwUpVcoCfm78Cerr6sY16REzDNbKZsU3Bn61bevZpj8vCeb8EhVGxYQA6gsCkoCxbKWKq",
  "key44": "2ccWGKzGrNtCjamV6MAydxEUNUAcQQKiASq5S2VdS6AQZMukcf6oCP19QzN6yrW9Hjnc4WY1mZppXRT24KAazHW5",
  "key45": "3i33eFcyFTRo1RmgkEvRnSi8yHcRWmdu2AA9hYMj56LHypGtFKKJMnmTcLUQSjkiqqjQcoNPWsXPtbJeXSTsJ7dz",
  "key46": "4v4HeUZnkuk5i8v4eABDkpmgv5nuSDytY3bzfGLwigaWuhciorFywE3xgav8XHuugSGG5CR1AkRJNnynQtjBQzx4",
  "key47": "5efgXsf8Ww3FfehkyhfhdGbA7JpPPjqFJicW843QSQTqwcY3FdGkBhRDMxYwyJi8Vu2YpB5Hc7Whb9oJabFuiBVg"
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
