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
    "3tEJLYhmUeKBmFaSXoYrDAqwc7QydJweXSAE6fsGwu6Th4tvconNh4esDMuq9KrFw7avmhVLvRiR4pNaFLcHpEkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCF8rgLnpQhcRHvaFL18M3VhbYW2DcZvXDhtCXU69RGZnmNj1smB8QdqGCBZ5LMF7TUJR6hAi8x1cczSit2B3iJ",
  "key1": "2m8rA2VW5RoSvYN2f8oCD5gWmxjeitrTJYvv1EBwTrbjTfQGhMqXDUvPmTeHLZMQzLsM1v7bqjyDQiF6vtyTUG5W",
  "key2": "37xS5QadCVdnRBBYRkq5q4G8ZKQXeHrs47E4z5SjHcvSKdjHHENFME3qRFVK2bH4G4kxiEAxcQPeJpzv4JPo8oih",
  "key3": "4JgsAFPLzmGP5rEzXBkCxepsxXJd7hf8pm5V53TfdkVYFfbJ52fCeaGDQCsdv4hSBzq6dizgWjYNeoAB8CUJpCaf",
  "key4": "2Qjfb8dvjLqKkZDLsrmx8ANha1S3LhWB9obdHFFQv1gjNh9cxb77mivPPhHw8JztuLDSMhbbJVxhnYsnQdvBozWA",
  "key5": "ezqgLLGPuGBiaF8oRjnPpPQJkF2oNbp6JTk3crzUEFoHL7RsmFpWbfXfpmu4QhcJGHnqEYAJR8LXQFZ9WpopEoh",
  "key6": "4bM9R9QSYzLzc1fTKpdyq4dYsK59xaHp7Ehvqhtd7f41SwSoWuszqBKfva2i6oELGCjgnSmiNyLTLsD1PRXisQiM",
  "key7": "5SjVqvaPisER2giy74NSwxAFTLmATi9pvaEcDdnrrhNTw5wC1VJbD6x3xCqK5ivudmhRrXiLfFeLY3idR57RVpRA",
  "key8": "2DRcYVXNFYhzn2qu3gZsWib5THeBXzSdfxTwYNexYZj4iw5ReJEgv5sR7YGzFiHHT5x8yVPMJKUz1gYF1af7X5N",
  "key9": "4TmSPHkJijHwXqUucSpGwotbTujCC3VLx4vQ5k8KYERepikTy6vehw356RmMe5DU9HVpTAWmsjyEC9ims5AdVJMu",
  "key10": "3Z3myos7asoZdaBidQPmLnss8c6aP6zQ9bEVyybv9oK5nBiWSBD2Kgy71vdk9vGaJoC8S7UsMG3oyKHDSUhGzEsq",
  "key11": "4bUs91ziANPrED3zhiaoyQQHkb1oXkJxWe8RRn1YC58Z4VmLtv6vDTnEac5J2zQ3wzEtMv73NDrT8spKVPbkbU83",
  "key12": "3PM7hCDxytykPDGvpwmVLeMmXeAAjpoRa27RQWNfoTKXoXnHoL6sCv6BFaFWCd8aA2uALm84Y7V9FzXx5T1pizwx",
  "key13": "2gTe8AidNy5dTXtiTU7jBh6Agh7p43nGj9rPV5e3DPZgCtj12KCX6essMuVyoUFQx91Vab35aUh3f9YE5Zi9uhdN",
  "key14": "4YUgGWs5yrc6TsKxxduf48bkQ5Qr9cxvzgQbsoPBocHvpYL6ag9onLjqeu3haYXNcpc3GWVp39HQdkeeuFou6HHr",
  "key15": "5Cb5bBGSXoR2t632KU5aw895jP1VTirYW5kWTGbAb3WFzQkbXSMShc9GrhsXinqarXTTvmoZdMZbrSGdiBzvTCW",
  "key16": "5XdmYxkMHxT1jwgNgR3sd2pHgVfXcCiZvThKx6NittzzeupBRkaa15c4mQHfdyaCNCWjmiG1ECR9nXsXVUuMjSjX",
  "key17": "5U4UT4LTkMDWPfmBjkd6M24EcVjXe5htj4bWFceNeFzZxAqTCj8nuyvWYY2jJXcwQFW6257WabyzJ2LHaF4GKcQx",
  "key18": "662WZ2LUGGEtoZ7YSwpEFWZM28J3UfsgwKs8sRRcAF21epcv6rXGsQbE1jKMLbwmsHm7PtGa1w9WsNibvYDeLbHN",
  "key19": "3UjhCK8iBR5q6zSLgqwNoP4cd73pEk5cbLUqkzXo1x82jxoWudZPqCAUMRrUopMEqV5wuLkqnCJWnQB1LkbBSNMg",
  "key20": "5jTaRexbtmEHnVW1T5swjELUYUgrYodhE5DkjSeXnoWnYNCqTRAnWKyBycFNqUZzJChnHfkcqeYYSfPLyJWXspK6",
  "key21": "4G1E2no5ZA6yZkYTHhGDAMXgi33H6LvSCNdYs7SqEpZbaEyXHJe58SFFFRJ3VBryjTEEGpAQkyM9CkQu3X5i9zwq",
  "key22": "5UYVKv7ASvJ6nHn37dUf8AG5rzL8VETkeq2RBGDMVFBvZn3bzvGJRBtG543GFU3pUY7TG9eoMZnzaZ1HpGoT3ixo",
  "key23": "b57vTZVPHtL7sahWCuVio9V6iZNvR1iWoK6BgM6oRJvjBxSpg4XwCbvc2BXaUM9Xj1PnhKWTFeLGTcprUELVs1Y",
  "key24": "33kYTbKQY98CsPmpjqzAYzRnsoJvvsxNbfP9TgtBH69jNoZdJZkEUXp3mfpYFhcDr2aeNdcyGAWa5nKMU3u46ac4",
  "key25": "3XNePLbuP99bCmUFpTo5JyqEnZSB4sAQdiQumw6DdE2ejayRN5mN66LGAhvHwNiKAGVhiSgVnFqakPrZvqYiUP86",
  "key26": "5XcBckmx4QoFSZNQDaKb4jaDQRpTkM3DEcHPoV3Ku2APijp7dkK5ZtptwNMNCXVew5iUhrvduDnehPUVD87Zm8mg",
  "key27": "2n2CB6er8bH2d6WQEqt4Nws6zUBoDQCLTSPTdVAUutxftPqhQjjvo7ReLshCvQXk5VztmY2zSkxw9zdr42nGMjF5",
  "key28": "4Ece7arE34WK1BXyinY2fjXWVW3vj4w5LaNtMFw1mr3rpmrhZs7ZMVibnktVgNMU43SnJSCtgrduyC5G7zPBSCoj",
  "key29": "BMGfQBGy9tXMfUUf4V6wkeqvdxNUr5cnaPvrkfRipChJ5xNmhvPYFyBQZ1hNEr7pK8oxnSQBV4JM5BmNPV7Kx1k",
  "key30": "5H2og3oDEdqbzBpuypAP2t9y34zFeHnDZcYFCfbLiDAwAJTU234bMfNZKL2VY8ajKRdKvyupnDjMhm6XRNo3Y9Eu",
  "key31": "2N2zVqTEvARMd65DfkpRqhi83GyUWMpJAxy3aZjfV4FotM6Bv4pKsQnsy2MwMxUYKRkqzNp93tcJQRidsb9z3L7G",
  "key32": "3nBjj6uaEARCViaFWCpCymer7BSgWuHjQyoLA1BnSeMs1P1f1chPBYdHpSYjJ1HiZqWMPpU3sXtodMYBFfdPxft8",
  "key33": "5TGYSqq8y3qKvUL5vCqEiey3hrftGX4XQNEZFmQkjFcjU9oZpnAhtHSNbgBWy7EZS1ez82rggktQ3gMQpYxBcPgQ",
  "key34": "29V72cZZJUxJuga5z2ykAc4WT92RK3st9xUbD1XE8hbo2jLjfN5xXdGE9QrwYXnfv7xu2oJFFskUUgM8zV7LVLYc",
  "key35": "42gXQ8Ruiv2ecezdwiuqqanXq1VMKKstxMUhjNUrqgD4rMZ17ZHVUduKr1NQZZ1tJ4EbCe8MsaiRbz6qEJbFPMLt",
  "key36": "23BLwJ25tjN7jsa7YQ5Ye1hh9bmXYf2iHeCasVjEAiEavAVwKhYEEwD9sMEgRF3k2pMVLXBVLngnVnyGjKcs5Hpi",
  "key37": "DCBMjQpb3qghqeL2Qfvqxo4Dqzmv4tAoPyDC3hkHyUsQ7bs3vnSwmzbCkNXNDwFV6s9edYK6mF94XGFzTdPHrtC",
  "key38": "5iF1CuUoZq9LiYK64xnnEn8damXMyAPsQM3zXFZdC9DeYAdkG5o4himDGXCEEchfuWRJd5NBSZ3YYRf8D8VnTLj9",
  "key39": "3ReYryijvTPmdfbGWYf7fuaLs7Fe4uArB2TN1SeHpkhnQtCyyK5hT6hThaJ5EUxxn6fdcmAgWfdYXYzYkycqkv2S",
  "key40": "b1UtViHFCTfrAaEWEdsRfUn5v1z462QGqkivkHrQk2gP2zivQLW2eAWQK1g139cJxzMaDePEgTwmhspavh3PsX8",
  "key41": "5heEXm1qvz3Qe6YNu2SJ53pRuB9Mic3P9jDbFSeKnzNN376eY6A9s2ax1XnGsLSVxhh1VeCJEdbhrBdcKWtneUia",
  "key42": "4QbKY1yv7mVWNMLABqEu9cWh8xueztibLWvzpFhfRVfxTiEshGpf3krPB3SydAyMzwkGkMDkWMLr6CDSHdJ96sJQ",
  "key43": "5UUPQkvrJeRse933v5Cwqe57CDEGJoLQmKSeFG9aiEenNr9Jct19n1aU8ccwzqDFpcpprMTrnxTSLGcUx6bDmof2",
  "key44": "38E4rEJ5zv5oQiNaU9D1XdQ2MtB1PFFB2TYTqiYJjYdUwoWcXpg8xzaa5pStxTYxDqDLRyKApjh6TKqFPmN4ZzpN"
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
