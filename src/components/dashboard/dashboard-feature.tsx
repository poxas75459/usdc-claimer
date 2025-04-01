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
    "3csteyy3bx9aiew8fREi9FRstcLWnMaMiB8XD4ghwY2GXH3SwAiBJ6QRuuMeNxY9MfV3iXaGuwr7gRjW5fBdGRuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wuK3nLKvpMvKFzK8Xcc2UTECqbWcLN3iPgBa7zZnTN8Pfa36VBcvpvHzZB8wxnWqqw8ecvDZRozXfHDeeP82p4v",
  "key1": "sxxZUSEhSyHgy4kUdYqDSGKRFcbk7t4Fixijm8zR5SN9Wqb9casjDfV8rcrPtcyfTZGJ6Ya35CSJGxM2BZJzWea",
  "key2": "4JTQQc3DN1uqP9wPAh1Vky3ycjgknbm8MixZa3HXEhyqDPAKCSuhEvmHpGVggv5trwXm5JZbKALLkUHxiQA5Ch4A",
  "key3": "2BDRv1rDLqWa683mK7LZETrp3iJg4iCek8cLwFcMSrbx76xZCd5TjiLZDR9cuF2GsyTH4mPMQefvR9mhevXrYaxv",
  "key4": "BLp4mqnjt2ELSnNzptdygcnnzvcJUUnsepSuxoDaVXi8MEgxCQBtQuAtmFWc6ZiQRgeTWy4x9xxPRv7nE6T99Ss",
  "key5": "2xWs3ziU5kktk8UZmWvT2ApXZ3JMqGc5F8XdmH8uXJmPMda7qvRcmvSU95CfmiUTJdRXo4jtNBHynV6LKZkAZhgM",
  "key6": "zPa72JJxPcC2iVfRi9p7YPtu2k3KZoLyL4sPcpdY91gEVY7nDRfyZXfp4RWY8cwVmpf7Z21y6PcMuTRf2DLStPF",
  "key7": "ARwkxynT8vPHQinHUjrTzTYKqrQnjg3EpkjMYvAvBQbxE78cyCmybjJGZwXW2csbRkPVhnw4wnwnTV6qXpy4sqD",
  "key8": "oRbacqQSar6AARAru7YuoV8E6UrWHXb93tB8bkWjLA2ytsFYJrAdCATeage2KbvvupN9K8Eb9Ff4hVcZUcaTvn8",
  "key9": "2szo2a4dw5t2otop7pHHWmQRgoNznGYZuXwWSnhhhSVbe77nTv5BDhXcx5WnRCZfYJy6vR2SaV8KKyXvna8xuvzu",
  "key10": "2txZBCVior5VCsGBcQE2yUyp6DGA7JsfyS2oNVSEsNptJ46yz3JQRh7FF3DUJxKRaLLnc2NaDi5YyCAXnKqddR7C",
  "key11": "2s7dgwFHY8mPEZdKXh6W94BUC98Tm7omxUH2uYeUzTtXrsuhEZKMcrUUy9KnenasFpGBauXmpi7tWk8DatKe4TKS",
  "key12": "55FX9Vtp46y9Z9yFGn4xY29WhbJounwigTkXT7e1Z2xMmfsZwXJJ5ZozbWoE2CM9bx7m38NcMXLFi4NCoSQ6FZq4",
  "key13": "cRqtuhsBwCDjUuPxjTtVUxSNZc6fZH5rs1WtFNiF1ABYf3UGej6r8fXBbwDDaVEvUsozHkpf4fW3dWD9VYohN6D",
  "key14": "22p2xwtT3SkgataKJ8ATzwthspUxoEJF1G9i7tMYt593MZwntt5WvEpvLe7X15gK8b51vj7Aw9dV7RAo7CHv9Tr5",
  "key15": "4JXrWMuBV57LcLWW9ZfKxeAo7Sf3KfpgH7yBEYowig21c5MYByQNWnnDsjBREe9GrXnsaVVLKnuXwnpbrdHsDD3c",
  "key16": "2qKLH6Lmree4uM2N1DvBM7Ms56d8gJWFnsfdnPRv7de7meGCPCz2rr3Wmwt2dXJXn3vt8AiTmnp6y8Xwe2C4cnxc",
  "key17": "5nRrFYJrF8DckKw2sP2hQZcshvYrJUxDx3bRW2sPCpkrvZVn54VSR1YLQ7itHPyWVgQEXjzpAJmDhMMU6XtRcPD4",
  "key18": "qM9pLtYTjACLCHyqZxnkDm4yrAGcCZw9PRpMjLLaySSgpiC3qDAbufsz4e4JLq1jmPa5msu4DTzZSUaXUx1FFqR",
  "key19": "5Xpr23JXYxFcMAdZixyKtPC4FQoMGNVwAckaDRXcZYwz1fkj6vEaH6RtvEJ31AuQnVdBUq11erJ4AamUMURiJcoM",
  "key20": "47VcJ1Ei75obWYrPtWtxP2YUetEm4iH5dZ38Bj4NzuXQYg4UsCQGMN3a6bTEwgAGwH8P2fmKKaMF3VMzaxEpw4eY",
  "key21": "5dPm3VLBzCiJGct1ReLUyNkHcUy5hJosTof2kDKGNGoEK72xCUA8bdqKzpHRgT2o3GrKUSinQo2NNnaJBFpVrNcJ",
  "key22": "4PKXndHAkvmk9nQN5KhJDULKcUJrZw3GXsy4ov37a4Wiv9sEmukwYyFFnQoT9tgyTAmcUv2fsc5XH98LmMQNwu1A",
  "key23": "3KAi1humF5MNvPpDHQn3ttnuxoCqAbonCaNtcscTq2unZWoFmk3BbiabiVPddjmVMTLe4CVYSkLZiNYuBZn3os7Q",
  "key24": "4tSKmg7vLSE7as93hy4J6dJNxY3E2QmV7kfRERRaxmL8HPq3CkuAb1wXTa3RTgTUt2TJEbP68FFBEu4X7iN1Amw7",
  "key25": "4b3x5AA76A7dFvDnLoPe9yDvNHmqipJAVekKh3jyh1XZLSwxPGJz8nWYQ3UBek9DFVCLzQ2QTtj3HyUsk5Aph9j7",
  "key26": "4DfEwpi2faJJvL1e6wYh2YdtQx41k89jcgdQhK7oVXFhLhLBD79s4mt2UduCwDhzNxXG6rHWoRXrobGf4v8FpyrC",
  "key27": "iVyfxXRQ6pdBhmuoCKLYyLYwVjvruBPqf45gZ7AV3J85DgVweBkiUGSTeq3aGWgqEho7mX6M4eyx5G1PiwLGb47",
  "key28": "4GHuPCp2Cn7YPBBxh6qGBxcBZf3DHmpg7ZnVXsfxqAsxdoiTTGk1D2bgBhH2DyLWRaVBpPBur712ieHqHRWsoVbn",
  "key29": "4qyx6YWPAEWScUHs8sPocvDEwhriKXHpAYr6ZwDrSbYmD3gMTp7MiooCZuthaVHz2YGnXHK7vEPUm7xscKofohyp",
  "key30": "33DZoqh24CYPPfBsDLEdrTGuv5g9ey7mLMme1qUCHGRPWDscPvDCywNaw64BDdUt4XTG1mknxHpGVgFNc35Uswdc",
  "key31": "4jgGEHjHiMsnf3wEHeybxUhXtrbp4Wt5D5fXmLxHXX1sgfMC5y1j6tfQSsay3bvkYdtuMkZvZcXN8TxQ2J21dnYL",
  "key32": "5Q5nid8GAX2DPHgFhMmwoaxso5Aqd482vgVgQK3So1YMZrsdjvrBFje6F47Vpd5sjJX8RAKPgtbTTBvo5EnouyLD",
  "key33": "3EMXEdsKZCKvY371EpByQcGxCyEroNwfS6wfhp9ztHUwhAn5jMRY6AsAgsqAG5Qc8ChZdJnrPfyg7BZH2SggTTc3",
  "key34": "BA46P8weA58HhdnJev2Yai77xz1WodtJxViF4SDpPYq4KZ7ShJkSVKj76oNyJNPnycDYVGsp9Wx6Q8rQvS2Q1qn",
  "key35": "3W1w7VbNbakmKXS9YxeMcwFSemwUinntu9hLbBF4RPCoUYoyes5qtAVK4NZxFzqw6sMrQC8v7aDDaLwcWUa1vXBa",
  "key36": "5FmDVwLRvNWrQEFoojTCmnLygTbVGCqLfDJAPBcKtmRKcBbjiUNSj3U6ZTJBaY8Z8JYAJyw7998HdeW25eQ9suc",
  "key37": "Qg3wwgDcVHecArAU9QEbJCTvr96yeGNzCUC8uHUWdKvjj4YJFMKyX4r8i5PXuLcFdM388YRuxHA3whseQzx8FS8",
  "key38": "66YBZdrwJvZStj5BKqaMBaGiQYwe5Hs3WftvNvaugm2qnVpcb4U4B6yF5tdzUiSSKHeB6f7azCCHrt5cyyTDrZyM",
  "key39": "55CUhiuMsor4o6sWqnfMks2UpDPL4ApxozgrFd3RJq6eJDh3vXpXbqPdUbKh7UUCMTA5ew7qcP5w7aePzJ8A4aeC",
  "key40": "4ViKDaJqe9PQg63TE9qEkGy8F7fSVp8jhrMb1GW8sSQ5rZUp6AEJtXNvgcnTckFbLRa2y1w676dfA8ngJdd8PaQj",
  "key41": "3pSSQSeN5UdF8Xy5D8sEHrsDCRNTwH3FYEWTEH9pZDHCG4778F5XzrTobc85hQ2Nejy7sbaGi2t4MqFLd9pGxT9V"
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
