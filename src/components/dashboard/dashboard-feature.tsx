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
    "3jQDfWvpgNQJNh9dQrVnhKweVuzw8JLEyrkRDaBBM5JbovV8v636NSx2HfQnUjjyHcFanCJsoasVsHSBuW8122uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVUH5o4aGWfQszfcd9qRMx8MYRhSdfTRsCjLQ2hPhJ4VdRBDzvqQG1GBx1hWeHK8hd7kPESM1eF87g6JS8mJvfc",
  "key1": "4uufKsedpvaYiZxbFMqzJM6p5dpeuhLMfjm69uosq93bS9Mcsg9SBmh8sh3M7obbRQKue1Yhzen23q6jkgECUKky",
  "key2": "3fzDJeZb3kgbdvM4DaVo6gGjEdbfYTJW5C9WHdiuXSCEJtRZ4ivJ2nuXqzrVGWMyHia5DtYLdzpn5Sk7tD4mphhw",
  "key3": "4YqFBm3VJcJ9snEWHAm6WSnYmB9aD7MRr6VQph8vhDKUFWWxxgKhZTNWGFfcTVsq1qnGrpPVUK4Hz7Ke7jfWpCgN",
  "key4": "4rxhHQxo955FMM7gZg9s44BfBKAW6Qw5ZDWXDDvpvHfTPA2PfqE2i4DbvPQ6CC2ntUmgZxsUjHztzKDQKn3tjZF6",
  "key5": "FXLCRHm3K8SiHnb85Qut4XxeyShGQCnKzNQ2Mn4px4dAzq8cse9BhYkt7YzqE1uy8P9F8EU3A5K6Rk2QUUUVax9",
  "key6": "PtU3fBnGqiCoEm7ZnLNCWjyVvMeG2fJmNXiDfF5JiL8jw9ynK9cKwnSyRNtEpkwtUjf8wYDajdTRUkYQzNLyapw",
  "key7": "3pSeXifuF6sE3VPDmSyjYDkHY9MnECyNCba2j8hYeLpA7GYvdtKDrsTV8hSAxBDaqojQNAp4gv7PkpcYK3coEJVp",
  "key8": "nSjFeW475V3x8pZfk2FG2BrPEnFUZY1ZiZ4yraCJeNpzeDf29E9aDFVDUvdUFryzULLzzUFahXUETBFP4WsdVA7",
  "key9": "33chtUdgXqs9e3uKqGmMb7qUHFEn1mvzfJpYWh3m3jRn5DyVDqqmox4k7qAqQ5eFiGQhxDxUR27cuMG3Ui8nBQdQ",
  "key10": "5MkjwfWeCoGRE1hDvJXkvU3naCesB8qszni5bV9iw7f7MW8kuCNbUSvBefQ9G1atehrEPYAY16tsZpeYXfjAgmDu",
  "key11": "2vWNqZSkmHn9AxTLJMTvPwS6SVsrx7KHESX4b4tUqfjqgLRFj6ZcPwvfvaoQNzvjBsnR24ARYRBQv2PdTyPLsE25",
  "key12": "63MxGWa5pTfHwCRgdzcBQkck4nyavhgJHLueq6De1gcZ3CvcFdght7VxgCfxxCe1Hr4hYMmHTJz9ye3Kzmdk77rn",
  "key13": "3UD4dqyHmM5cFiPevVF2aWRsg7L5jsGqghniSy26K1y4x61ufki27xostYch9tnHKh1ozWJSdReoeibTZLjSv7dH",
  "key14": "4VbVuPTpf69rLBEb8c17yrQ4Sf6mybvUtGS1ZF346NN8fPPXCqMbFw1foZ5RPMZypAi48g5i9M2ZDt4H79QBYaqR",
  "key15": "2wx7WUXmZ5pvHUq9VpCman63nv42AvYUjJY4uShjnZKmGNmKNGnXuC5ybk9ycTQAYxHUUhEH9enkL4Ut2WJhKg5J",
  "key16": "4nQqaFpSh7r1nqHB6MNpqbbEsHqJx5Cjpz2Xrb2dRjTRtB9Uqp3asfnccF8wDc2zkKtj2zF4DcLB2xzLEcfQRjfz",
  "key17": "3oCY86BJUUPdPDmdxN7q1sjxysyXJKHjpbYk88f9bR6DyPt46iTkXyM4QJFKbdMKMwsFx3SULWnKWV6k9ZTqu91e",
  "key18": "4SqzZUAXkwoQqYj77JtrJ6fCKYqDBgDfVXEdamJ56nwy3KUhCaZjWpvq8uiaXkuiMERrdeJU2xrg4BRoFsCN3Eez",
  "key19": "2bfKseU6s8Mj3QYrXP9Kz2NR7FNpwfeBgcgcWQJEeSnGiWumWN3ZZzvWcTTt4oLPj1euMxxTcxfPok4HsaeaKZfi",
  "key20": "63McxGsNpofujiK7P8htpMbsNKdXv9kK9tD5VjE2ieteFR5TJXLEbPanBEaKLV3TkZRQuFLhN2ahAZauru9UeJUD",
  "key21": "2vgrbxVwLkYresofR76qFn3oS5vLqvRwxE5vy8NT5LeLoWdZXspeb1VWC4botWm18YGDMNUAKSMC2eAunvvuqvd2",
  "key22": "3ekLSqUz797CFraiTWwRV3kPGQEJNSQGENWYdybCjGfH4wyTStL1Rqn9g5giXyELQbGesAUcNpkTJDumVXj4QqpJ",
  "key23": "rpdwHtKWsXvETB5YZCM5wJ5cni7tQsAhuotXqRNrLf7fZsPtu6cNVTQg7ZfgXcYumeiFE7cqYt52uX3YaU6Ljxz",
  "key24": "xmLH2AnWhMFvAHaWVUnpA3gShEbbv5Hh4XZCEvvLacHrJRa92i7ogoPokat6HW6WWiYpw7uEDdeDcyAWYawVwkh",
  "key25": "2TKYyMPUkgne2PK1RFdGdWZepw6MpDQr9FJFDQ94FYEkcdgBsS8iHmfYq7VzTG6X9fro37Nfkn6vjqgC2zswPnew",
  "key26": "33ubRdaVUwSeatdztv7p4tCQart4v1sWWf8wibga4k11qLt2ySvoMuWXNU1wDXCcbmTTuqQyjuSd3dW7N6DF15bj",
  "key27": "4U73fXhPqsZmHuZ8KmbCXGA8dwjGi2ZbVPFk1D5kfPPVkLbLy4nSrmebJhkT8vZW9sneBsZenvgozwhM6JP7zhEh",
  "key28": "5UVE29Srb1Txfrfv4fMdrMsPSfZJHe4t27Xm5aFQGwYBAZTPFyQpkpqe1WMjkPCdf2N2xd9zsmCdVg6cyFZGuego",
  "key29": "2TjNV5ePjRNpAa3c8MU4Qpt8PCXSSWmRLyw28AKemRBVVb9dQT1t5axgjcJjgJYWAum1pFPtxjw1VqtLtSRBCA8A",
  "key30": "3B3i71HrnBtC8tqnaW99r16m2xjEzk7xdjnFT4jP1ZrXaf7hGEzeTH41RnzFWQAegLaweryg8myj8cckPLdtJsqT",
  "key31": "2yiZpN422NhhBxQYmxvtAFt7SJSkCrXSkvomZViqFZyteV2Te7nhNG4FbTicikEDjg3vY1nnfZuiFouyiSCNpMjr",
  "key32": "469mz42FJ1Bp112JXkiS7D8ysnzVrnkaQihLA4z4mBcEQoCnTcasiYfBq8zF2H9yHQjpcLDLoLZoXCccxpm5FmgY",
  "key33": "28JsVqrGjr8n2FMENvpWM72GXFCC9iigSYd5KPzrQkDJGL8PwaGWFQHoFePat6ERLcFtMAbQr5AmQQB26dK2iAjB",
  "key34": "2m49fz6gi1cKEMR13AagaDfe62FnpsjGheQp5H6eksdBUTNLfmS5W4dK6g6sY1civdD4i2V7rnwMKkaw8gRce53u",
  "key35": "mhH3dvrNpJ5XtCz9AuPTyEFnJ3jqeporRHABiXEr5Rwhi9Vqq1ASmD8ykLexbnUfubYZm3d9M3ntoYx5qxpkEF8",
  "key36": "65gXgEzG5v2oKgxHCVnUJdCicUFcr4uwQn2phz1k3U7Kq9iswDHwqJ7shL8fKWQqBAZUuvsXxTpytFyHfjhyXXxZ",
  "key37": "4K8hSjB5JVZpzzHQrPY18RDJ6WufCX7msu89k6HLjG3WUUwXx5nEwMUqn3CNxua68PaaZmmKnzMsYxpnzfEJ7pyZ",
  "key38": "4Q8deNeSYnMFu3CDg9BnGvgPCxHrd5qNZNhs9HCNxRZsV7rLFFoTNpqeV5GmWuPAMFqz8Yc17C2iUMm1fbQz3uKE",
  "key39": "4tKdp9DhVTjueWzLTboseK9vq4dnYe3aWdpmrAi6TTWsHwEtxJrB7rhX7YX868y2sa7EpkA47ax3wganbVeKF6Zp",
  "key40": "58vnWtoNt3PWvugS5KY5kPLfcdpfcWrpfxg26GMV5mBpLHKhkEmcuqdrDiZbn6vB7cpGMGRcL82zFLcd7AcYvka7",
  "key41": "2SWqyh5Bx7vBBoktUBLS9LDY2W9ofB653vyZXxRu834ax3jRDd4xQY2bD5JXRf2vKQzTWvx81FUUn1gQFsn3oJ5v",
  "key42": "3y2Wq3VSkc6nQnkLEJ1fUyqtiENT2p6yCsdugHjEyoyFKn2Wh3mrzLh2Lg4CpUeUehoxz6t9FoxSVkeie5BYgqDU",
  "key43": "5W4idF4xY2CpWhtXLP1zNgUGSFU3BqUdewjACDJHn2frCrtkaWpEVKLiX7xByWtjhD4aq1QYoKpEAjpwA2sZ2jGP",
  "key44": "4kntiyDaSmnbf7ZJXzaZZiY82NNYo8411y97yPFf8qKEvrcExQK1X8KXgMw33vGz2kftGfPnrVPkbJ7ask9sHv66",
  "key45": "4mhTg5gEPunZehzYgGr38rzSckmBJFT57nhcgq49r4K5GVG6vPJ7yxuaLxdFfELffQkLBgxqkr5tbHX8LsX3VJFD",
  "key46": "3XrSnpKA3PpP8S34uphyoQYorqBuDZ21xJJhs36cQGB9fULJt9fBgDGsTJYHBaqcfzBCfRzXiKLavKPWxY8spYrs",
  "key47": "4UwTT2eoQAEm6f8vXCVRcKrcFM3oEW3kffx4qoa5iND39tUT2ywYsGqqA9isdEsVEA5VNdjFgmbu3BEN3mURvyUv"
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
