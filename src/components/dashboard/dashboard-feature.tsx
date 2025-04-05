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
    "3TXD42qDG19srvKuSB2DX4XZHC7JE1JJeENcrE3acMaaz9GodSr2NN1yUMYqH35U5unskDvATK1NDZzGRFmVN5RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eebcCun9c6EpSFDw1wiig47Af9vRz5rkwYkFz19bpZJU7NErxYNzwSu4BzJacTqdDBEvTngFChUMprFyx2YWx9h",
  "key1": "ihoVP9AGTik47W3UXqoHMJueHMaPTdJ77Cbhnd6EcKnatDjm8Cc44uGL6DaHs5pE8UwjFyqxu4ACb2XKG8jTVXu",
  "key2": "RS3rXZNj8LGbC62Bct5FJAJ8nWqpH9GrLKvUp5GGdQxWEDzVdaqb2N1K4whdb5CTBRBcCJeh7gxPrTjQYCrvM6Q",
  "key3": "4Ud1Z1GQVF67shLhicNB5QdQMEYzM7J81afPvGdWkwgZPYxu1bJrn9VqbdJY9CTdBwLdM8EVAmbSFDvgMxge5xi9",
  "key4": "2syxQJtqtAMrBX9ioK4ze5GZa3ZNs77L2drqJqBxuGLuETKJXGi8xQmw5xvWVZVsoRZ1V8Zy5Vn1obtdgxDhu3qN",
  "key5": "2oetXg7Cxe4N9LBiU5vbyM1YsWGQ1DFehjjErfETRpXVx1QApmn4c6vpPBSYGmPYaDghyMyZoxRAjstcJfM93b4K",
  "key6": "26stKxXx91dSVzj4jTKDZwegf8PPurkgELbT3xNRGz1Harb2p2YoyqZ3MhDWtQ7ZVDcVMmHH4xSsYfWi1xbmBsGS",
  "key7": "5j7EbzsrqMNVYyuLuj8P3YN4W8qA5pXN86TWZyVTRmLw8RpSSehM6eknCEaHZfNreQSccX4PuLpDNQcmks8ixT8H",
  "key8": "P1iuvaTFBoCX8fgyQK4E9xYbsNFmyWfD3LDwGqeWmP3RcwpHVncdVtHnjmj3xPPpReE2H6tqvLBgPCzZ8heB5Rb",
  "key9": "Lr3cSF5T79ggz2txyZCKANtnhfjp4k4UYdEeLczyd1YErV31cD8UkVbjndGq1NLpMX6GgzYN6xA9dUDdQNn8dr9",
  "key10": "3CiPNEpheqwZe1kMkFYxv3GJburTs33jjEqRfvE3PjdZ85kjjbq1U5EG8GJnWzVZgdDk1s3trbv8QPehDU4MHcMB",
  "key11": "rNGn57Mtr1fxjSapa81cUnTybBFBBjwzPk8pGPh9pBTvHqWkwyjvZuJ251YBzhcStNBQkqvZzERRpsFvGuMbLyE",
  "key12": "4dFjPHFeMe5yvqmqCXpzhAFqKTbNedooXWA5q3KrFJsxBdfZdwyk8mnnYUMDWRQhDCCmqSorjDsEhtUUXRm2Sb1n",
  "key13": "2VtrGcZoswkGG1BhKLzgLj42VfNuBsJ32y8Zbu7FSJXXPUXm3KuGjJPz1Q8pae5ikdB1n9tShsFFp91eGGCFBbCQ",
  "key14": "4ZaoRLtkZqHDhxg18RJm8iALnRUyK6KRLKqxaEAtstpk9rubETrpXpRf2D5jBEuzaAyTdQBkj9uHz9HGgH4JwcT6",
  "key15": "3LkKBSxs7mbGSVwV8HTwTdrRFVno4PjCGCGQeAvCPu7cKz7JXVmkuuEG8ZHNxMGa4Zny23ri6wAsmGAJMgNyHMa1",
  "key16": "3hDDKCGRM8aa88uEhKfd9w65yWxGETSfjE5pZtWZmgAAS83Cfr6ttsERCjuoGoxKGLCHeJhk5n2ubmusMsmPuQtD",
  "key17": "32kV2ugyfypdURQuDpLtzgTB3v9TQUuJRyvVXdaRQ5pGHgumkQ4GqZBa7fsb57CtRTkVx5jCph8X4zLZ8jBrKmpC",
  "key18": "4wyypujQ2rPo63GhNQCK7tb6qrSzeaTc4YEtzjV3vHNs2G7HYPK8tLt5gMUThXcTqRaopUjU7EptK1VEmX7vZ5dh",
  "key19": "57hjXRHPY8vYZGQBcmCmQM2oFJagZ8QcKJoj9ghsQHHS3PSPgAxqz8BnfZUS3fnFT84kX5n1zv5ZKuEXLE7UPVKj",
  "key20": "4xvywYtiMg8QEakk68SBEE75j3sNP7XbqeVWQT7Ugsne6XGv8AhMuZrUu4zgXqk9QsViNsiAiWMsb9PL3Vs1trVD",
  "key21": "281pdXMFETqA5TGMDQBgSsTgshUQdsozWayP6CTjiMfSLPB6opaWi7PKfna4u8pVZ8H2V1Papnu21sCoyA4NTSpJ",
  "key22": "5BJA52Kb6qDGEdSJJtFUSkhY6mUzeXu8T4QqyZYfp7w6vjpcfefvHF1oDpGCNanSEYMFGeR6QdTtzUroAJyCnZAf",
  "key23": "3qSWATv7R3pJ9uTPh6rMfvHVsRVBMdg7pFkoq9qNAsuRjFWr1BpKjhX5aovwmp5BsWR416qfCqrJBpWkxwKxp8rY",
  "key24": "2zAEhbF6ewtQaFsLkuhpiHPESpcK3AzjKWFHpo1txhrcveKwi11gHuJT7wzVudCWstkxdiCEsXm2BRG8wCsYSsLz",
  "key25": "QJD8ycDFNomB8WimSatPecobMLEMvhvar34KhQnporgvmdqbq3wvQjupZEB6kTCyB9XWr3gEaXvtF7hnFq9JgG6",
  "key26": "2YwhoVbMYtAxosrMwKFjueDMRYUzuNS2YN7fiWj6RYL58rVjtX9iL69DErM4KfAeRdKgCXfWGZyRftWetgHjxLrf",
  "key27": "3PPpLLCQYZZ6uoaiyNojuVKj3rN43wNs4xN8aFpux2sWHeCBuKLVKzGn9iQbxPUE8UxRxvG86qTGa6LkQyNyiivT",
  "key28": "yCxLa9Btf4ZCyfdjsQzerZdLnkXxSS3GyTcnyskBJ9xwBeprMkS3K3dpxoMFhuCy7GKDwtfNMD7xFLc9MFFQyqS",
  "key29": "5BjL1ubhx6PsVwfV84KdqUPoas1io3eAndwxTKCv4VgP5tXYWmrvuH7sDFpBha72T7fDNYg6Pwhs8p5BJcNTFVRz",
  "key30": "5F6m4uqZKdWDDoxunwwTncLFgBUSD5pRkp4ufQRPu65bZWHsz98c9CjXd5zCRretpLjgE7QLfHDqZ4RLXYDHqFfx",
  "key31": "3ibioqvMJmn7LtznvbZfUKz3XFPrDVHM4W5EvjRvgya5Ka8MCd876LYPSVL6zGQKF22EU2pPTS9jpcUQuWaP5i2Y",
  "key32": "1UuaPVnrfzd2UPC6Sx8aQRE7aEdUAgSv8LGJbfUEepvwDMDDH9rPmPX2UDFw3t4qiYLdecsx8th46dHkZo3pTNS",
  "key33": "2M8Q2X7vN63h28aa6XFGhEFSPuZhLpMydHMiUf6vPxXyfey6DpwRP3brU1Fs5u57tRiLz8wehJyVqZQ3Vox1sSwq",
  "key34": "4jPuJEy7A6TWVXf2HfUagGQt3GhHpTbQBpy19qpgd8oWqB2zK3jGCN9rYnqVJ8pVq1Xbc5nFknmnqaVyU1Upg63t",
  "key35": "2p3YiyCd6wetWL3q8EwmDyHwnAPjibyp7qftu1XUiTxnjBAbEnz2xtDR9tefMd9okvWSRv9FjvmPXEhf5sY4E7Dy",
  "key36": "4qQUJWmjH43tiPQyHW4eHQ8zaS4qBNWU9EAgf7qrZMXriwTcb4QPqBehZrJqNsnZi6GoHFRcqv4YrJBhhgGBMU57",
  "key37": "3ErzjHypvzMJWpZMqgYYSBubUDoKqW6aPW7m3AykcsFftC5DksS65ZdwuQmPeYGKKx7CK3Si6XabCwjg3Kovug76",
  "key38": "jfCeBfs3fMgX3djcze2rs9VjFKtKiGRCdNUjyaRBHLKYeNtQbnajErTemXs8bYCsts9cTdPYN3fsdTdCowKbZnZ",
  "key39": "5A2cnu4E4sHxEtqptikH6iCBtKxGHQrKmZjxzumFahpsh9SUUB8usRPybvagRA3uby9mTjH8aWpikJdW8sASRdaQ"
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
