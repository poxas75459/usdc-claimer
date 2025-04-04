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
    "5s6dYYGDUrHx1VYeeJhGgYk7s2eWLfiy8pz1KPAKrksUf6DtkwC7ea4qWePhCa713FNqKgBWQoeVyMwe4Q7Qp81Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtQ3X7KCDJtE9obgyzqmnMWv6KxkhGTbneAP8j47LnWKqintZ8ssy3ijveCzWNYghhYkRon4MQPGqgiug9feujy",
  "key1": "62dFpDcb2cZikPSBnVRbtd6rLEwUZgKKyCqxZFi4JRR2Me8TaKG6SnGSjTecpWDBq7FKSpK9jFwrqYx9szNwpmGR",
  "key2": "5JaEcST2iErTBaV4t9TcNA9JEAyqXTMzAMwf1MzSpnNZX3sEmw8zmCvxiXyRVyqe3TUERscD844bEP69XkaceWxa",
  "key3": "2eRdfsdS7yRAfwdZqr9FvGmukdQNFhRNurgHPxmgaVACVgZwTuAqoG1bsHhKka6ef2cuwEyzbskTKeqafTR8jZQq",
  "key4": "5frCN4aMZ7XWHtrxWQ1gNKnphdoqyZRyyuLz6xXKaMyKTxncwD3mzWNNXCc1EtRRMTzxsz6zH3Ezw3UboUSnP8r4",
  "key5": "2NYhwbbaaa5BV8p2Xz79EZ3Nb2ocbVa2fwykzkzxuwNefsBzNsUoXZ1edzB9Ewa7tK7JhjedKczf122VdkfoA7Ds",
  "key6": "3cAdDojPMEEV8b59LNrD6rLgEWWLr2X38Ra7Rb8jYV2LWt9qbtZBHpbyohforqKL2RCELtrQJtZ72F8KtN8RtkrU",
  "key7": "cQeeeXLptJUUY7biGBAVueFZM6p63jdPpL5K58WUmJMjk3KNzJHk6yG6QUwko5DBknfDVCaRzAXaRXD6eECvHAv",
  "key8": "2i5cpMSRRJBoJao861LepbeG5TmFdXGr4ayC7ia7NCLDKvF6cqV8L6Dn84kyPfoM2daQiT3Lp5TPsyHP9sof7KbJ",
  "key9": "5jVHHNsKCpcVK6D9L1Kmi8ytQAdrArUhDG4XS7MDVeGSBpH6biikvLThdTHh2jLr7VTJnKxoA1dsMPMjMoEir1Hs",
  "key10": "2sFLu8H4rXvvfUmJ2shEa25hNACMQ8zLzS3vnDFVYq1sJSrnteR558XG7FXhGwLxXuLzz8MaTy5W43KeiNtYWGBP",
  "key11": "37s7ASE8zC7TnwHrote6KwakdzZzT9gzNz3iX64NxLLanzKrCrw7F8hTW1FQCHZYbBsHRBtSvFRBawFPeNQqnNJx",
  "key12": "C4j5Yf5ja1Rz5MRJR5PQBbeZDZ1cmPD2BoC14NrUS7TNb8cWUU89mtKJqeXRSjmZRMX4NJkr4u6GHSVi4X7u48N",
  "key13": "UyvoGnDEiyQcr7Tx6zTngm2QEQbUCdkKxDtJUYrFjgpEgDQkcDznJ64N4i77XCa7CNvpwPwZrX1ysyBhakTkSup",
  "key14": "4CaSv75GuLv7ha5F1Q8ub25X4RGhgb2mtLDFKW1qkQDFtuLuHuo2ysyX6wmZmpyiveEY4MGBqDTxDgNamxjW4k8v",
  "key15": "woWhAd5Po6En7UFM6qGcJPiFMS3QrUXP1SCZiqBNuc7zeoq4Hc2wpWq1hmJ4HB48DnTr1PVSB9a7Eh1CpM5DYAF",
  "key16": "5Np5W7osc28agaL65AVWPsUmMg8GGAx2in1F5YJ4a5NBgt9MvuH5rCFsYerNJtgRE4wJBXph5jfKGrWhfWcNcrSD",
  "key17": "4hfmK3r5mxroAcUJr4nJsTSpD2xLgcqErf9KAKcYokTMmTxRwfWFiLzAJpeS5xcxK3X9WGDsyvqJNQVaHSrn3yGn",
  "key18": "5WziA6Lk15PiLBtorqbxjNQkAzan4WobExvwpjVKUiX4UrpyX7YLDoWFkPKBA6cGNqXFYhFGz6ArJtpPbE9mNroc",
  "key19": "5NJ1voFT8L8TKG2Jm68nhhHjdrSjpc45FAtbUctWjCErw5G2KxyFjYK8GTSmLZUBb66UJ5wioWHApk5RQZG5GsJR",
  "key20": "rxSPZkq2kY82tDzTv6ggfmR5wFyWwpdL1seYcJu4fWzzHYWv9q7pq7gn3WptNjxEuMvnqigCQSp8Nt7xfEP5CCk",
  "key21": "3m9mUetP1kMSNGCphxUPm5rgdmD1joFqPBA9Xk2fXDArTMsaCtMWukC29X7iSUWMX2qXnLrJUqtTBQkxqh5poqCC",
  "key22": "2SxFW3nZbo2z49kKGj5HDZPRBdmY7haTFgK8gCY91cecGKuQrb2yiQTsN7gtuqdyxJUaGitXyHuGmwEL6Cbf4BhF",
  "key23": "4m53GZyoGBo1g3QqpVCgVMy3xNihTAzZtrm12JCWqPW3mFRJWEQaJ2bvVtE5BQF3KDDt1PW7aALhZV3MempJKz7h",
  "key24": "nMNWAcqs5XCEXTo8KQtKfXoa6pjNeXMpL7eSLESb2Y7MP9VSiSGFND3Yd1RjFD499GBmBnS2nZZytaHK6ep3x2J",
  "key25": "gF57dm2BSjrAsD6r257PzZ1XPH9HXgxVQaCCmPga3E64UKfknsPA8HMSkGCgRUvfaXQfAq4KUyV93Xfdn4oRV6L",
  "key26": "29RbjpZojD2i3ucSKWNfYybzCtMffg9bhSfxvKmFr4ACu9haRRUbz5SNt6XkxvUtRqiarjBof1TYSQ7zH3F1LaWD",
  "key27": "4XXkVy15VVkebJTxJbgA4X4voSGMVZwsj4krCCxTgkyGEQ6qvfqvqZj8pjLfWkmJqRp1ngp8X64R2CJGt39icthV",
  "key28": "3GDnzGcR7RTEyQ1sKyaUrCpfEyJ2bwHXjHGjYN2mPJxoRDuj2n7eDL9VnEcnLbpn3Zy7Dca2XeE8WNfeXTMQLXcj",
  "key29": "2fpFVmmttymVaRAo6NweM8gBCcL9ugD1NgwPqK1oE4LeWKDajVViJC91Fbqx5uexQwbfxakUwdDV2X575UrwMkbF",
  "key30": "3uQ7CPU7n83c3AAFDNA7Rs99qXyPAPuGNF7e99Ls7SuidzLbu3JTTkJ1gCb21bqdSwt78C5t5qDjMqMMxjuWt9eM",
  "key31": "5eUdJ91fPpR25Qyj6hXK3GP9b9Zy2YMU35JbvVEx9eA1vdjYsQSH7PFofvACj3FTKDTwGXBY3vCUpMkcQLJbtxqn",
  "key32": "3DNonPPiAZCPEKZ53FEbAn2DsgwzWj4t9x3zRQTZu1pobrbGt3ktARCwhD22xB6pY2nmKF5M73KtBP5qvqSvyWAH",
  "key33": "5ART1MtYtqshzF5DaYqzk3v3ZXhFKaxRrBX6cTNt4nHqzDBgg2bdNtFmrV3LyZCyHiaAT5gDgdEAthCu5Rv2zriL",
  "key34": "3zZVjXEDxTv4F23N1Njvq8RzmSNkRcnqfBNL9KAyS8sEKDrfVoqCnqjQtBFqqkVfjQsc9pe5qbXVNGniKo3TaJQj",
  "key35": "43zUWp5qNWkA6w7jKmYXk7V3YQMHb3arWFQCeFmz3ytwzoph2HmsJudrXiYk8pv9Hc9B75CfHNKpEcCq3eKBSnB1",
  "key36": "2HiDDBbMmoetWyNVpJ1Ew3L9Fpvtw2TL2LR9Xjs926wDyDnBpUFmvjRLKgFxKVkESURi3QncEMMaCVYzNGUvs5A1",
  "key37": "5u67GTc2TCMvrTJgyxJ8Tb2tMpkMwxnouXSnNFdT9Xm6j99DXAJinGGzpVDqKsHqkUStqxyivyoksTfFuRyozHZ4",
  "key38": "2Lcxc8EAMYQ6vhgUtjGhGsRM2EgnFjpYTcmFpoBNKb3yAhohBJYmAGLaiQHBnT5qS863JBqTGbr29NbhqcEA5FfH",
  "key39": "61Ub8RXH8aVuhPqtNw4R3tF1DX15ZGCjbx5KHk5cN24fTshXH4q8VuNtxZHtiy6jVRAHCFvBM76HTVMniC32hYK5",
  "key40": "4v2UJEWyZMwUBUQMnaE5TTicjHY4HdbEiD52DdJhu9dhrmZQHt17NJDCVT7kpEAaTrE79zBT5YZmZosGPZ2UPBY3",
  "key41": "4TqcLCQWMNww3W8F6gp89ZuUcdrXySXgKwc2R4uSWHdkCGT9dgXkxdZDsdU86dXmm3UPhqQAFjWXrd94vBGxAY2k",
  "key42": "5Yer3dfZeLe9nqUE4skPkdcu49dKZCGBav1A3Lw7n2pPjGsE8NPBJeCHSbDxCAH6EQuYJGQ71miMEiBEham4MaWp"
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
