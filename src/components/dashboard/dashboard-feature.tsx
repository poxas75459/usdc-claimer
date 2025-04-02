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
    "4vvkcGNyLuSutuhHNtJMXRE7PywWfnr3F35VdH1RGZUB3AL9NTwrUvw6YDsrSJ36D5QVxZ5oRBZWiNPRKSz7tEjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YRTwrSdg7zqniW95xnLinzWsuzTF4ndBfPMnrUHAK3eJ9tUbCbW3nAcXjVr4c4Y7cGnPxFcNx6AY76hAZgEhFnk",
  "key1": "2APBQwxXAYAy4HgfWAigygGRHjC3Z3iLxKgosANHgW8FGevT3ZuUABgG9MRNwNwUKm77CaGTNu2B2Sy3CupayKxS",
  "key2": "4HrNMNfyM3Gy6n3nJ3EnVbJCjxsmHA43cntD7U9ik6UtiQia3j6KoMBr4NGi1ziLqsbAxkbsz5hgc1VQfyhsccAd",
  "key3": "Xfh8JSnh2XQpTBAcgRWTmqxi6CAW9WpodF61LciaaKqZtiyEH7MS7mrGiBN4oDmAk683oBjNQCooy8gp6fmrQ87",
  "key4": "4AhUVwru5127Yg9DNnMFKM6nJXsDU6Cc9BaGh5XZm4N9M3Kpr8z62xJJz9EEZHHHm6R6rEUMpU6zJLSeo8kuRqmH",
  "key5": "4xJqRQf8HkoBocCXFs4xmPC5yRnoHuLNWaU6jshANKKk2Yx6cLzrBG2iLs27q8dDiEXAKEiTVqPhSJxqgeo3P3EV",
  "key6": "5U63S44B2bLXbyGySAMaynmWwKMEHsQxHmjHzip9BFUQ6uVrGr1um4EqccEfK2Z9tZ5YPW4jzh5rxspb8g18YWM3",
  "key7": "5TKUZF16qcqYdY6EJCCQiNzfnLtsR2XWWTgUimvwK6ppW1fSxWAyYWmszvtZxcngTDWBfuBYViz9Zc6sQDR2WUA2",
  "key8": "3qnUyC5BzNj9mT5baabBfMsQ41Kp7t3qgDiJFrtCZxw45XkfKjnReVfaV2t234gwmJbjCMMLpEaKrR4RQuj1PAEQ",
  "key9": "2g2P7hpV26G4Z5k3wAjvXaXtWshe2uZvbw3Rq9PUi2Ddq51fMmD83A3EqsLEnwRvERBYgMZVCdkn1BXrYsrUiCSb",
  "key10": "22KReygAeXrGCJei8vTkVBdWyNeMfDTVNTtaRAvsUVmhXQGGcShKphHETDmG7tqQT7drUUN4ZnB3wfJMqEJMhLvj",
  "key11": "2motRdfkQSnZVhqSpWh9oMPiV4UgQCJpHdAxSHKtUrGLz9QuQLot76Lm9oQDri2ukcAeKWHq8N1XiATv6A7xjS7T",
  "key12": "4kVV3PqgXNVtYg7pX2ghvukTLVNg31oiKRHQDCkc1Bu4ZhDgkUXWWTGPTekiQZ73SEZo96FvceiPAAu1hDp7g5KC",
  "key13": "ThzKQYsnWYdMPrR9sjszX9hSrpNmL93X8Q18y4XNVSSXTLrec5QcFcWS6ArFfxqZAk3uAFsWSyHmzAqaT25AkJF",
  "key14": "2haH2pgm7c7nSgkCfT5XdhbaUk4iNAc6RiPX3rdeZoTGuhs5ZG75zXa6WRBK4u5aoMbyVZdrEur9RPgYy57YoVVX",
  "key15": "5oTM7R151LbL5NGtvA8eWiY68mYrRghZpdLcFwd9DLDnRUq2JTwy6S9mbtK9VxEKPfVxMz2aXmGwzbQLkCkFUUzh",
  "key16": "4PEyWXGYB4jkqxuRbj5d3f8sKpCbFhCJHxBn2Qa8STLXxascnASV9e1auWv9VtiJUGV2EN8tvTcaF5rXyWqSoson",
  "key17": "4z6D7Pzj8d8gRq8RWaz18yi6B2FHyX6famTn6i1Wbdb5hXXXehsq74hj2aqpGv49REELry7Ww362jVbq3ryvFWjc",
  "key18": "3wLAPX8RAGEjmTZhFUyggwmDumccZpKREq3WyQranegTeZaaDRhW16DBEQyz3CZNZQsa6UgYusQF8A5G18MRr6r6",
  "key19": "2fBBoB6XohQun4JByHUJykWL2wm5goKfESi9iZRNNMeUV1xsYXDXDNxytdJU985TPrSKXDhn22J76FyWSCswMU6q",
  "key20": "dJyovX37tg4RbkjHx29wYxhfPCEYqRPfHzgAkN7mGYE9KE2FEPwyprcejCNJaNE2LkRkkvfCPNcTsTcnQtCmRii",
  "key21": "4nRMdBT2BRqrhyyMTw9xM1unPxoaoJWHiCgZ16Vycv7turtdABEyLhMRXaL9UqhVzFedCP6JhkKJAoZ5NatHGGKh",
  "key22": "4ABtyaUa1GtfGzrK7sUpK3eoqcC6KJMJPcM9UtmUh6ZTt9SeiaPduorHzcwNZvPYeaDaeA5e2hYSCFdzNmQHg3g7",
  "key23": "4oo5z24t4w9bgaJHvsauaZ4tKxnN1bwzS85yDeKjBG2sN8a5RbeBxHB9JrfHVtvTdq2rH4iRoPGRqJkRQP9sThYH",
  "key24": "5CRrKEtnMZECxQ58jASwTwuY3m1edzKQ4zkFmyGrLBsZQAUtVVxhuhW8rzj94X2A9zhhR66TGJVkEk3DccRd38vK",
  "key25": "3j8izWxrV4iYaLY6eavbWTfHiGAM3V99EiC6qzTirD1kBKh7rkXn2QuJVVkFqvnz2znZfBr8NtzdpPEqHTMWB3Np",
  "key26": "4v4Hmv28JoPTErh5LFT756uwuy6Ay2y9JUebknXqoj4EwbM1e5itB9nVHwgoxfX7Fuujy1QfoJ9yKx6kpmnmrrpx",
  "key27": "3XBSjNb334D617ERqFeMsiPnsDm3ThDJK1GjiyuqjkpF3N9F2x6byY8U4cqPbU4UVafvkXe5TM68kfttXzEi6Gjy",
  "key28": "5sKLp7Sx85FYZ9Gm4QTZASiveT2NN1DDT6YyU8D3HPLsaGgHH1BGgqsF2PwZx9hacjutFozWXdifg3K2tW6cQApJ",
  "key29": "3JsozCta3magmhHUxeFXVwQPTVQvviqyQGiNvb9jdJ5nAvyAgiTo5eM7qhoipoyWGfHv9aePpNLMoiBckee26FJA",
  "key30": "3pLXqHpt9ak2DWj7AiqdL416AACkvsv8qoSLFoqpagnUaN5U1cpKGEYn9hMMGWY7g5HU1LDsTski1MWh2w2ekwSp",
  "key31": "48UyATSc8xCufZMLEHEnsGQapkL1RYCcuJCPHo35JGuSY2ZbwvdUgfV7gSfNppZggpfHj4QeqynkmN72NbWFQdcV",
  "key32": "3j9Vg6vPwjA6z4UoiMXbUXyU5bmzpxQM7RRef8LFQXibVhREfZc4LvPVcnTMCsBCzjMDyhpR2XxSGMVhe5Y9GeRD",
  "key33": "3muTunxAwoGJp3KpcbSXfmWDHcvmWNEFg2PUS1b4h3cE6PqTuVH5pA2aYZgBqPzYAF2UnHTckdpawokHqoyuSuRK",
  "key34": "9ya1JPU5KKTuytQymNqvWXdKT8udQPCSGsVWaQFTfT7qRg4UuEzRwnmZHT7dhh1JsYYb2Sj53QGt8gXJehdZs9q",
  "key35": "2xwdt1YQduBje1pBjfP1HWUFMfHwZ7MSSC92hLErnAUV4M4fNBkkmX51EKoQypidJxt4BH3tDzcwg6DTnE6mmBi",
  "key36": "2ujB8QaApKftswUFSG1rMsEsDqTFdo9N1ZgSyi1rX2tV7ErL56KYtCwG9mY3CDyuRmqnZG3xLtDs5uf4W2NcPo57",
  "key37": "zd9TynQFzswzXqydPNkzs2nKGthAZ18Gu1bZ559YXKmBwHFBpbhDhyNr3KZVzSypoV7uTRig3dTEohgg57GqWwg",
  "key38": "59RNk3EKSnREjWtSvcWjsAexyi9Dvp7eeW6QX2JznkyTKpZacgUUZiEy4GZZZ8kEmoeVF7nUnUdTR4sejwQkFe4j",
  "key39": "4gaZNWrCsS1G7hTNuZkvp1fELTiZmYPJRHgzoCVyaYTa4Mp8E7MTszKW81q76NeA6CrLHczAANiKbR5tLdU3y7JH",
  "key40": "296H8dVCbj9g4YeRNoMYKATiw7FQ36DG85aQwrLxbHnfX2mHDDnQbdXXNtzATE6evZryTbrosHCRzCqEPFC3jviC",
  "key41": "2hGYRUaSAZMAGSGTNaBXK31tD6WYPq5h9z6CnSMGCtt3A8vBLmM7iYdt4xGN5vk8avyZLPFr44oHYmYLYNqeHP8c",
  "key42": "YtaEb2MrDNhywiRgTiRn1BxWdayJaiCKnZmExR1qnFqjLED2sVeAnfx7gsWuoS1BaAj5VczB8ojpghG2dMcaRVz",
  "key43": "3J8xCPyFSaVT9HCTD6yG91BCRkfF7zGGJyFTuHrLqfLxp43UCySsJHHuLAKSXxz4ctLdU6wTsFxJRoGWZqWUFk8n",
  "key44": "3mGEU2ZNDBYqB7csu5x94LpSTNFct2j2XqSabga8zxSnL5v8yNzanXEjzKKwWepeNTickyQMnwUDNDJvhxpk9fnB"
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
