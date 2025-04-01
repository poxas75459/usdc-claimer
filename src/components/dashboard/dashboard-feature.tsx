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
    "3uhEtoovdy72tF14HznzgVMyzFd7x483BrjMspSy7jXmXfMkr2wkKvQ4j2SFySJuMiJqJeAfsbEGxoDTzwcQMVkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxF5UTAxBD4bzie3rVbtfTU4MS8YLB3FffgcLSLmKNJLTohJWFVHSCmQjV75NC4934J5HnMkSEAHF2fip7DrHD1",
  "key1": "3FLjRJvLQyFo9t74WvSxfegeC7TywRZrXNXxkfCkmDtiJYE8pwmxX94ySFBpX6sD9uPCUENSCQB47zLdGEhheKox",
  "key2": "ADYik68puLUzeb98MjjFNoTjpUp89v8ybAotJkQgs6RUETBS13aB5k9GkNsDZjwU24kV8kbP1318eZSWPZ3tc47",
  "key3": "1aJgbGPopegnreWnGy8qrEQEpuc859c3UuHhopGENA9h1eJ7LGL12c2RvuiSJpLiyFNy9CCm6YYJVxZaQfAWCwb",
  "key4": "mbjnee4c5bq7ndZc2tDqQ5QnnxEymLNZscvZKSV5QxsD5pmtArKQ6YkRDkPDHTzECViNgcZfwEpT6eYTW85yYSc",
  "key5": "46dxhNLYnS4XB9HihRA9tfBaYPCdRUDkCpe1KPj6jh2bxdTX4KWzWvt9zN3ZP5gDeRb1kjjotLEdi5R7Lscyt1Yh",
  "key6": "3gN17dk4ewbVuuWPDDxPxmyodhdRfTqbNcTBgt1sZhcbQN4EchzuwGbBV4sVRPkGMy4XFEdmNFUUfVVpytFXJPPL",
  "key7": "3WtdQuU1RMAXufv7KrmEEzhVfMEi8E3B9DsAPXkosed9zmSjFKZqp21rtrGNYJVQYrJkjQ8foG2w1ZJb6kcGMyWy",
  "key8": "2GFNHX31QDByvBeYRvTXBvjQnKZcxtXVVG1fmG1owuVr8J3Xty4U7FtBEV5eNrN7kPrxLNy9JKbCLapwxmiSTeCo",
  "key9": "RyY1aqxGsGS6PA8t4SVykXQbQCCwZhAQDhaGC38UNb8NwcWxQwRyJfZ7jypUudHCLmFZ9iNF2BKj1hYff1CQFSY",
  "key10": "3ycGY8YmcNSaiKdy7pVvABjwtikgoXreXCPC22DaRrPiQbv5rYH6d7ZLfQv2U8XdDqD5LmgV7vDUY7zWJU4jcr34",
  "key11": "59fLNm2rUTjYRBg17PAqwKuueuYB2cZZWYrTGDKWvGZ3oY2KtwPfPZ6ZhPRyzQe8aqApWUzkwcQDvMEvu29FrL37",
  "key12": "6GmMorHfiK5By2Y3N6mocPXsNdmETuNZWcTRNy7Z4VxNKpEEaSHcv4YxunkqeVuTfBAQBYmq2fsKHs4rE4DBhww",
  "key13": "2eomy5BTTRLaZwt1h3CddKvohMDXJLKFnYAuNgVZwHwQtr4TCFteXdKL2sh9R9WGNgMbFfRK5t2aYgh7gpWfTJx2",
  "key14": "5tA3cep5LoBaEABN3ii568XKnUdGaqTi3p9QRgSfV94fFuWSqTv55xsF9WJFqjQeegSukiZiPPEYan8jH1bYkaPi",
  "key15": "3kh3ojrzx7H1BhYBZbers91qCe2fjXb1bNi3YWgMPYGpLwf8ZLEy4VkreQBvvQ47gVhFQPpitQhpCD2ig6eYnMm5",
  "key16": "22XEuq1Krh67QdxFoVrHpCdZmnVP8zRYFFBAEmvuNDG6saCSCGGzyx72DXmiSmL2YhdMvNvNq8NcwJfo9U6AdY8T",
  "key17": "tuoQLB8aC5jux5seQ3W2NPrpE4xzHzGP4HW9Wtwc9L4yvQsu1DX9zwSj4UHPGbP9B7EtUK5bVN1y7UfCySeepdT",
  "key18": "28vu4Xo4D5TV5KpNSyUAuRxBPmJYwvaZn74QazbGz8siUNRbTXVJ8aqUw5qYJYLhaidgJfbNowBBZ5F4xdSD5Xcv",
  "key19": "2foXaoZCEYqqHXaui8RmL1SpA7eYr87AwUALAZNYtkmUrtAEyYauHuC1G9ySzuanmkj2keyo83GWRNWD6zQR7NSU",
  "key20": "39voy6LGrNTRHE4GgfTsbD93gHCVXNeo3d2dQoJhaVfTCbEVKZoTHD1dsEpw8JumNDuZR9FVV29VgEoCnT5Ztw9w",
  "key21": "2X7w8ync6MDqZcMCjEv9rP2uADMFVLFevjwcC3j9wyaDXaRA9xNjguFJPGvJCQ26SDveZrydpr5JY222MdAFKCpS",
  "key22": "3HucBebwaPJsZDvE3rgZqSPgRzUbaZathA4p16sLX8wo5JvC8DbCjkTSPVaaphBHVd25cLAXs8HF2kLJ84gTvRWx",
  "key23": "5Yexq4a3mt9qqVUhGZPYFyyADJVeSk3dw1Ca9HVJibjBTi3zNXgLhYiVCT3HstYQL2uVv37q4pWMf7vmDSRwc5wU",
  "key24": "5tQoMq7MmrpUQqT8p4RfpgAWfJztMgM97GyS5PC7sWB5xgqjGsdFNGKGz82cuwZWXto6eRjzbNSGiJ841Zv5axdn",
  "key25": "3Lh1TQUurvtozdX3xjTBtHAp5wothNtXxJyg2cnm4AftH1ybGtuAgk7U4J6gUDicd3nRv3aj2PLNFqM3NsGMC4ib",
  "key26": "3S5aZeESyVo8A2hJVxPHNfNbH9awUL4nQc5DP4juuZpKCdwnRTAkycKSe4BTwrrqxqm6R93uDQ5rHtDcaDoGeFUZ",
  "key27": "2f73V4g7yoF8RrnmaX1WkwNY2VLEsakuQvax63YZpzFP4byJeW8jpGaeQVQYZvoE78URug6JQuiBT4auFhXfbt7x",
  "key28": "29WJmhm3KyFKBDWhzFhyMn4KwDRccPgSMh6nTJURYHMiLbeh8aNGg9GR6Hnm7BJc4rJTjeJQUsiYfQkNAxwE819V",
  "key29": "4nGMLVPWtPt1d5WfsNokpinLvvdENi19Tu1LP3VCtGgsGYmvruKoVzQeF9LZ4kqWMuHzjdKnKw9DaD57t6baV4yf",
  "key30": "3jZmapzUA91NuR6pZFNaztQKHa61LunfhV37phM3Be4sYx969Zug7JGaaBbQWqGNTRjEEJoikCXSMhqbBxvGaWEy",
  "key31": "2jZ4nDnLjTvK9Y1nfgRFiBa4bd8eMhMFgminTQejriBu5p8onZ6b2deWVAmR59scfXH2VVDchfGer8HDwNg6dCNB",
  "key32": "4Rp7soE3Q88gcQ3wcouEEQ4ZvCn8Tetem52UKcU9Ti4fYZ7RcbxT3DXNPDz1ik7EKTRtYAoAV8PaAnXZ6iCtjiL9",
  "key33": "3i31EXm54HMbFy33s46FH4zD7kVFvvibJJJSjx4gcFzPNfzCE6biPtjgYTNzbArjuSRGShaeVN1p2xHwWt8XhZ26",
  "key34": "5wyqV4NuYfG1F5TLiLjpNfAmMsZmG1EFBq37oFSJwDqiw9NpVzJwbPbQN7zBQaqFxMmasPZT3hZubxJ6ezMvwomF",
  "key35": "5dnGa4xcqNqXHrFm1oNjbRb8NCz3xgMqqrJos6Bc5Twh6s1vMpx7bDE1vnMgpZUgV7hQbgkV3EU9gP9w5jkMxdeA",
  "key36": "4mbjK3WbgCJmENMdZ2rmUNCsp8RJDQSJsnnsks5R6pnGnEjtUcpMRT1m5p7Ng9R3LcpH2G7nkhqauGRwqBWimMhF",
  "key37": "4gFkNTTf7hUdhsHzGADi7hRR7Eyyu3Q8Rok8mT2iANLW3gDNbqxgiPVRZaqi6X6MGSuc6oDi9NEk3oa8svPry5it",
  "key38": "3VCj6sFaoHkPW6u6LrQ8ZqG4UrqW2TnLatR7qKxbCqX3UFCF1bXWPsa5khJUwqHRTUMzAtxmUxFTHy6FcZQPMLLi",
  "key39": "4HKHSukTgnuJyoA2ewAhfh3d3A5xpU1a7QQvC1pvStxRyheHh5Qu5jGY2ujWAnLxHGQ3nppWB6Pm3gpwVPcdVbgE",
  "key40": "33UWu1Z91hwX8UPqT5kAnuMctjiDYp1moxsTuB1vrpCZCgNvRRy3pqWu7xPu2yiUiWvYXj84dRzqfg2cudqSuRzj"
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
