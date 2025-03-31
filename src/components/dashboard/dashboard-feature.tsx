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
    "2xhxdqbzCWWq7XVUYyuBkd38grpVm69s2T2KHCbaU8FR5A5P4q6Lvvr1eMCgLC2vvJgebGTwtLgsmNFWoA9MPxyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWC2vz7nM6KTQ1YUJFJN6R5sPyRSE9Xi2ypLz5LjxXAZfUtFZG9RtTEiuSxFZtFUNZ9795F6CPFrSQ3wXa64PDK",
  "key1": "2rkJqWkHjX4VGXxjptKXN8FEQ23Pp9fqGDAt5kxBrivCJmPy1iXYndVYwFBEZd4wBuNyJNoQGai54nYTQpon8HBN",
  "key2": "qxVRXKuCe7Twn5WHtitzQjQnmDMs5FEYYPuwqS4JytMCYAVUQeVPEwxsLVx1vRUJNXsHzm99KXQb6NRuofgMmwm",
  "key3": "5bZnC1N62eGN1NjtiQUahE8ttBMHF98SVkDqcqwpeUUi9DDQzZoSnvEjmY285qnkxVeJ2XNr35b18rFztkv7qya8",
  "key4": "4wP9ek1z9zknHEM5DhuwPtYt7cRZSXrokVCq2UAFJFaHRjUXgc4nBPsJVhD6B15NcS71eCz5VZAzNe1MG8UijDAp",
  "key5": "2wFovdwsY1nMFKt7PBPCcGCw5C66xWHcFFkFWSPxEb4Rz6RpUxrVE1NzQDzncwCo9kc2ZL84in8GWKKKCbR6FhZa",
  "key6": "5eg1GenuYN5J6wwEDrXdu426zjEBpeHEdwS9rWDEAzFJEv98aeXipEvobECZDtzVYZ4PyHttaXnDGXq2EB2G1k2M",
  "key7": "56XtxRak623h9EyTQz25Z6mpy7aPFqYQbhDbR8kpX6yFj7px9zC48f64UDPEMqNkgQk3udmActRAKj7BgVnnniJv",
  "key8": "4txXsaiEeu4EyuoE3Q3pHnK1tc7pt8BB6429yWcsxYdQomsoYCcnNax8G13fiDNcdDbFcJCZqA9paAmw7VnUDXFT",
  "key9": "FXJ3zZzLYH3o83DcQGV7iWBawumeXhfZeLKtZ5w4bT23JJQyHqKjrDYVz1R1Cnnc4HN53opZm8EVmcPPqubAyyq",
  "key10": "YbP6BsLvehMns61HrqoCTnRbf5YhmWnRhPpFkppmfbQZ6FLNtGeiBpiSJ4xECTDXArbzfoTCfrBtL6aT7NRDcV3",
  "key11": "4Ww4C92bs6XuEgRRD5gLpeb3BAShVdk9WB6FZ583M2XdRf2bHd564nfxnjY9YUMyv9aeRsTb5YAxVFqPWzm2ozQm",
  "key12": "49Z7XfsbUhxQ8Bi6ULCdJfUGNBRExNFMMYK3PZyRqKTf1PpjGmjrsFRAeE4ku6MVoJXu9YXnqdHpf8Ym5ULSQUPq",
  "key13": "4zo1tebzAC8KjEn72eAnXjVcvLda9i6zkLJh65cp5o9tUScepw7P3xWvuUUUove4hNFZSWz63AgVrdLFFTn1wUzr",
  "key14": "4GK6FGHaTgVzdx4XefZ3MepHt9TQgb5eFif9FHYyNhaNfhMCdkGwahCEWJVTQbVg8xNx3iSWZjR1Cvdgeu1mqaMB",
  "key15": "iFgkF9a2CzsLmyDwugk3bb8PDdN8EK3QMWf3Z2wMi2YMEh9VNd3cySoqB8TYLYVGgvf8rswJ9NFVDefoaLjqoSp",
  "key16": "62VTke6PBANJK6YuK8sGNp9nJPfGG2cYd262dJcQkFnAh7ZtMdn7USqr19WUxcGSu6fFbqKFXndW4RvXtipPNgEV",
  "key17": "DcFibE4eURQnuZBZmojqJKirJ2qy86kXdrgLWNnDuQEP6ZdtkE3RsjCnYdNgzWQ18bSDGAKFfNnBDNLjr97Uu7i",
  "key18": "x3fojgj4XsYEFBnbFjThcZxgyDwJr3JmCc5DxXLuC59BbFdfK45P6wS5ogwQyU76m9BAzPgUJfXWjBCpGrBboju",
  "key19": "iy89aGAGM1v1TVyZQGLNsm1UA8ZYTX4gYfv8bf7C2Cdb8fa78nE5jN7bUseHVWrC6hRSiPMQp38rBJH53yt4fpq",
  "key20": "5SyKbgeFWtRjpSozgYqEiYeUAzwA7YfYQrpKCSyT8vPbYkmYExqgcTd84cCVvshoAx4Nb38kaZFowJQceFuEBykW",
  "key21": "x4F5QAusdXA1bKx47mGDsy1gtFPQYK2MxmRU46FuTLE9Gj17wv73GdKKBxXCCzKhnGBbKikjo1ikmvehP3b1Lhu",
  "key22": "3iaEAv8koPggKnstuwhMmaqBrgrWMtfLFpNktabVyRgnWFC2NwkgULxT5aZsoNrwTB8P4hA9AhVxyt6A79qmLEGJ",
  "key23": "3MyhzB1eJ2pPsrgvrQyvCsnukBNyh6k5q2dVZcgDMPro7MA5fo9rgEyyNZ15qtehS9pezvbfzKTUrRVHrhMpdY2Z",
  "key24": "2ArUx6k4Kq3ksKNRBjkQZFQyeCjjF3CtmwRfji9rcgcceD34ZF7FrFxGMD4wEAjvs1pi2dtoodeQKpvmtUyHPdxH",
  "key25": "4zWfjVUVe72v9PuoJrtJ4FKcJuTTwPxGVbu7v2vywbUB7SAXFFC9Xp7QGB26hxw8x7hKZh8VSDhjde5ABERmmnB6",
  "key26": "4PRgmkF2MdjSFXZokxVGmkPvNCfbdxwcoSwp6QB1vLsJF7cbdZ9k65c3HPJx4cGV2wh9ZZzGJdsTcWJ8CSNKYFpA",
  "key27": "4B7om3xF5pekjEsUSFAfnNiSPiGxHwZDx8r86KPeDScS9piAJHLeY3m11mpWEoc6bGV8FKwdGN8fyz4cCPR6fuBM",
  "key28": "3pQtG3FaKRCoH49fK2zCNxv6k3CLbVJsu5cwBXXa7cTSnfMN5pHYcTBeyycE7iusQVKoLTVN8BVc6XbVgAFzUE9n",
  "key29": "3mobw3rpLbnyTNgyqpGTLZ73d7atvvdW8BKxCubbJrW7Cyh7NjjZ5rcpuMD91axwBAXjYRz14Aq6sFcFhdcXFE25",
  "key30": "5himNmBZvgtYKBeJ9nDzHPgjvYRdDFoQUVGdmL1Z6NXzW1Z9fQJGHCmb3CdZJ6ZzhyZhZBK4AdGY9yYq93dVQpc2",
  "key31": "2SHj4KVCaW8joxND9ibnKqM5n5PBCpc35XBwp7ehwsSqmFcCbc99DRnuXGAvNxoUiT3WVEsHPcQ8Ev9eEm19Ufar",
  "key32": "2ahWMEQfMQPcuHDJfN7VAWoGY4QYuPkBNxY78eWnAYw26VH1qZS5JH79zcPMFmEzxq33JKvbuxSCUVe5FwGXqfRn",
  "key33": "27eumxgfEtixgRG1F5thpvBjGpSYSJ9227BkZgKDuELoQ4LU4KZJiugnJabKZDqFTk6H579QshE1xKJdB8uAGku5",
  "key34": "5bvwteDnoENVfuXqzqPngxL8F2HuvQV14YKKEwR3VEDijqpCoR9szdwmW4r9cAQKk9pRgcbYaojUP6uN3PSawqQZ",
  "key35": "5LgMpgCvtXrAVq2YkzhLRyAELVkiudfRkzoRtJcxSMAJ1E1rpfmRgU8wkGShV9GeuxEaYutna8DkiQYaCs3qdLA5",
  "key36": "4oYC4pX7LYfYH3W7WazgXSBavLUyMDmEik7mF2wS7juCPWMyrtEwvDLexzQeGTENv5uNbwYRjmqcmkMG7jLo68X3",
  "key37": "4xWgu8Pjvn4bN5JVUbYD1nQwr81t2FZY5iYZfMgLKWPJfRzVRA2B3SsUmhBDnKCRLnstsjgDb3HueDHwv7yxPoyJ",
  "key38": "3uUcPwiNaFAWVtJXpxYWfm5yeid1oBxUoskmczaMuZmhqVPbzEVxjyWreuKNTycikVHtpw7BqwLMFbdehMjXtTbv",
  "key39": "dwXjRH6WMmq2XJPw8VXgQWBZNmoP3HxKTdGyejH5CQ6Ri8DYQa1vtxTz1S64ngjNhFPyRo99oHFUCx6Tgs7Cypk",
  "key40": "4S6EY2PLqb6HGpoJVTDEDPGkRZ94B6uebBPjg7fe1ru5m3tA8kLYKNSZ1U1MnHJgyKJnC8eGg9Te8WikWScGfhkw"
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
