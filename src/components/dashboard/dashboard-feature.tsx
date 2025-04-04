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
    "4sd8N8MzcmPRRmqdpcfiTqnGvM3fNP5JZZdV5ooQ6pZJSm4GERrdmUQaB8GNuXUDW8rhTGhkZBZBxvrApcSGFmYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXx6QecD6PEQpL3NEJY8Dny3VQvqos39pENLqNtADCe43oEwrxFGt1TDQsYCbTEcq2C2Zs1WHgUowgJDKG5K2Lh",
  "key1": "4m4fB94DmbqsQyVwcGEvfrKm1Goy8LafMisMHhR8vt8Sz2a7TNaQnKvgrmYVR9mqqtkFY4CgnHfhUFPo5ByNeim2",
  "key2": "Vti1tHnnK8jRkTEx5R1oMEtTSg6kgyyTJCL4CvbdLBu92LjRqsdAX17mKzHsDPvcQWG6aEKWpKLYtdG9U24efJA",
  "key3": "3QMP5VVjmWcq14Snvk6aSLKDU9HBGxo6p9Ccoj6w8EaxvRPNeXZpyyjrNoXPUKTnmhyLc4wqtbW557YbXnLF8UNB",
  "key4": "4r9ueMrzmH4qp7FKrsBcYmhEm7bLLA7mfsPmrcmY4w1pmcLaNVg4AFR6PUiaVfXgbwgeCew4CkbUQqphmxBbedhQ",
  "key5": "38u7ygReCe7zddikVquruDdTyfyvx7P9v7hg3tX9gZgCPkrgiYpsciSPG5nnWgAxFTem7NDefRYK4VUDwxJ5cJt2",
  "key6": "4xhrh4JFtkENPZY64vhMGyYZSyLQHH6WrbiHEquzvMqu8f7nZxFFz7RiLnfu73P4Q5nh4ncr5ACUbQinW7qonac7",
  "key7": "3E9FACnyqGYTEAsC5p87cLcjGVVXJWQY2HCanvjEtY42hZQxY5YrSUtETYwUx19pZ6EsqBqAti6RH5GffPLW1YtW",
  "key8": "3jei6bKQa8113bnnELcEvxrg1Ghq6ZgqjWnirna35KT2a9mgfRiRthGVcLKryLzdQKoaETpWhf8MQkShNMi1u1LV",
  "key9": "2uAiQf73tUqGcZb9TmVJsHttHT4aR9J59gE42a7MDZ4Sh3wRcHh4k5z8A2N7jSoy1ZPGPfNAge93CxTTHDPyjVVQ",
  "key10": "3BvRUGusZXZphk4gy3HbLxBvaYdSauFcEh7ht83oxiF6kXy17yvmbNheboabfir172Pt1rZP8D7hRGDaWDHcvvti",
  "key11": "4kYunPDU2mCPMtRovsTiYoUodbaKoVzbKgc2qxd9tXdPvMd7Ge8iYEeBFwYRwuYYoVshmN8gyGEsWyv2d7ZcVHtd",
  "key12": "2yi9L2hQdkx4PrrV36mT2Ad8MtvNSZ9ien3vS3M2F8nnknBoWqfZsSV6jhpMCNE25tpiwV55TacKyFntoEDHre3",
  "key13": "4jkMJWDLsggB6Kb6d5ocVFfjVEoxERbzJaysGVD4TzvQqZjy2a38NfhUprqNTBscn7HoqYfgaGCBXxfLsskFT4VV",
  "key14": "4CsQ1hDoxq1i62HLBYw3TLcYrLb8HuPMutu9HvLd8aCq4L9owpboffPSUEoEV7kA181psjQYfUpTSj2va6PDqJVN",
  "key15": "EZw4W5Y2V1ubB9jZCRy28HeFAQt9TiJzVFYdAeY25rmTUKSjD8qjBmrQF1k8XnEjEcvQ6sYKZJsB8yZ73PUgdr9",
  "key16": "3vG1DEKUm6A5tjCAH1oLaKxC6bxCeTaD1nG1Egzy7rgtfF8icrLHwgmyhWyTaEcKCiuYKCUUDNU6d34WZrR8ZDyC",
  "key17": "3FEWtpmRU2kjYHmFjj82wigF9axqAy5wjhr6dtkLXmUFuQwHAboZAxHwn9kyvNYxa3BvdWom92AtjeU1WnkRyQX8",
  "key18": "4WFwc3CU2WXTE7Dr4s33Q3VUhb4znqQptsqd3dUSCmE7WkPNFVGCtsTLZdnVpRzEq1qy4LaCo3uoruwVaGmJ3S4A",
  "key19": "5ZUXp3qUBsb42b8wSzyhPj6LtKidnRAFEj6TijnjFNUyBn81Dwzj831EnTa1kiz5rWRKRPY4KTnUbjgBLmfz9e6",
  "key20": "2RpSbhQTATQ4pBk2tEv1ZdkFv4ALPHuyteXXabSid97V7LQi8Zvu8a6urSNDvHYfn2WqaqvsfPYcDWYS8DwGPvNt",
  "key21": "4a8ZnKKo9zQWLd1dSgfo4mRXHDkKGkpYRc5TGxNTZT8pJ8w7Pn3CjesXEnetb5bALtSpCuBMvopsnhyKCuMtAM5u",
  "key22": "kcYVTXafJdrzcSZTGD8zTpzG8Sh511Rnxb7MFmPaVTzGNLcWvpYBRsFUmWBHbMbNeaU4e5c1e7ju5drFnFiAKNs",
  "key23": "kA3BypXfL5G4YZHH646ScYJb557pVBmBHdJuRTZCSXHreWxEAadCb33QRk8QTuzTGwuTZGX8fbEZ1YzqWAi62ZM",
  "key24": "4grYdsPQEgV675Eqx5V5N2BU3U39S7YogDkP69z5nm1DY88Hxjo6gFfs53sZ6tEcWuiay4FsbfRESUoTqYU4bq7t",
  "key25": "3hQRa2gW9qevEZvA6cSe9NrCT9RJNSHggy4ZeqmTo5uDtUKZhYafT9r8EQK1TtkRuU7AFc8Lv2hTrRVJVrztJP8W",
  "key26": "nYW5uwsqKCvnoQS24sXZmytSH1h6RGgxhsRUDNw6KKbbRx5LSLGTEBuhNWURybYsDcHcQpMSis5VDhKiYj1wevR",
  "key27": "3EoAsEZc3zLP6ShgRBb6ps1vek97XrVdPLoVmFUMAG3jZFcJxrGkThfjd1Vm8GbP2FCPCheB7Ditkrn5Rhct3KG9",
  "key28": "4UNaCtRDjypXQcsD7k3gtTtUHBfjzAfazmHzUQrWhXU6JwH86gwAs2bHuDjdNrVB2FsTMpJNaHpb3M8ZZbTfdRhi",
  "key29": "2pCKYYn5taN2kGrBs5CyfXXtxMxGJuNj7kGgCmJgtuNDA17c2ECfoC2RH9wsqS2W7zK4RvKMqeN5H2cZwjSFGx9L",
  "key30": "24FdsRDLN6UVk31wXomqZDcgUKswVCTcjn7zVsVqVepT6uvPfAh5NL9hDcp1URqzGRPooPV3hMkWNbxJWFUqgboZ",
  "key31": "5GxeKk12WAmEAez7HyZQKSDX2tqWpETxrkizWEHD4RMvKrwpDvpX39KHqdhwD5Aq7Z1eapQ9Hhwbh2T2mqdAHgcw",
  "key32": "4QkovWDj9KzPfdSucyYU25HBQrqQn7yvybaEjN2zA2g47rNyM61osZdAtXbto4C5daAVWX6APx5WhqnLkyk5reti",
  "key33": "2PRfp1N97gsQNr5FjkvYeopfthcHn5LrLx39Zx8CtMQm9SSN4MMY2X1iA8MYzxERy1LT6ofZxBa7jRBoqG9M143Z",
  "key34": "dvXPtbMRZNXfM3rBGmUj2yKBoD5gAvK4d3Gf8qarzZdtUspUap6kP7NLEXpkZimMyBYmy9TG315mPNcjVxHjJMP",
  "key35": "ypvdzRQrKFSvzNy9t8sXaJnC74vPD7z42HvoPyVAWuLEG7yC23Z4i5XSPmMjXYNt5CT1XRHJkJQAiuH2rC5quGi",
  "key36": "5xemjdYRraDnWrae6rag9aRZKP6cPK9nWd8DH1uUv4h7uGMouczNJDyZHVg8QiAcZQ7zt4DN5QfGJNgfdskRMx7L",
  "key37": "67iZ9NTLQRu2ZLhcJTs5z6oxcPkpc67Uix4SQVGasz1Sj5zWKuqifHfxq3Xb6wYJNmif65e7FwqknGMdfX3ET98X",
  "key38": "8GQuDSGCZAnLDniQfC6W4A6G491791y7JP1yMRYQh4VhXhHV4aYTkDhPRboX519RRPtqEsk15hwNqkusi8Swkq9",
  "key39": "5WyXjFKv8X8uM59PCciYkjc77kdnvabPtCH31fRuqbuWiS2H1iDN26p8E5uJL9myGFzdRCVEZcuGK7qtf2cckpXL",
  "key40": "5spY4zFXg3FxLbTkYVqSARZUFs9W5CGt4x4NUKSWNLhaf14EFA8jJieqPYBDW11KjXQozB1pVocS2TgxdPDgaB6W",
  "key41": "SSBKnXBdW1ZUpD5T6K9gqZk8A7PvQwqEZF4uNAQfJ75m1spEGs3WY2iYQHu3N7Ma7t1L87yTGCHGTVe6SGYZDL1",
  "key42": "3Q6Pm9hDyFP5rZ83DBSJL9eazTinXrui94BmNWCQQqRYN1yNY3XZxgcNmGNc8zmoGttbNoSVrZUeHMy9D8uirbLn",
  "key43": "2WDKadZbn5xkakGn6W47z5vrE2oZyNwjLN2zSf6A5EfoY1wdTKSRS4S4PezXXTyk41b28RzVmWeXSr71K9UD2ZW8",
  "key44": "xQ6Qki31AJxq3K9Jx3bXNzWbDQz6f1KHwX2Mr4poz8s5Y5JsJyCQg9GQi8XWtQdETFeqqG6d6gL1jEXj1RQptGx"
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
