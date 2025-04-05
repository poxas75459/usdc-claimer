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
    "5AWBhHMxbwU2MxhCCMsQd6X83CS9bbf7qpwG1dED2rpTjUpqWMr2A9Yvu7c22eeuSVTENmBVmY9A3GNiPXPPbKJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fbTwzwMTZwXDGeis3hdL7Rf5m8BX5s2fjxEMoriWMK46Jyy4mKPRHMvQg83RNW5MervJ22yXEKKwtRMocqDGRmd",
  "key1": "47tuBfPoRLkHHaLhW4dLd1w6gARf39jNBkZ6PfVqZox1RYgWGcLZodRCc6y4tgR2FuaQVBtcRMrLNR3qzc9ibTDr",
  "key2": "2HpfgQMFCPJUSjjSP5mHZMLLCKDtCJfaZuWs9nUrx2jwgnZ3qtyHdgHGBXQ7WmkafJNnAmAuNKVr3xgwaojnkxp3",
  "key3": "dUGVHzHAf16Hy6281NbUZfrWwjNNxbRBY1CTBmXdhBbGmRCDVz2xrYUEHZfTQ1Aq6mpmz3KqMi1DTo5tFhneGuW",
  "key4": "5EED26N2wofucU2283o8SRjsSjSo4JSpntDGWjnnkBR7E32fmXmvhqLGXTqK6c8UoWexYyswP4sb5ihtEWxnZtda",
  "key5": "4mJDipSzbLKT4EVJGWGTEycpSG5wEuPiLbzxc8mYFcKwY9Y6rBqvkBDQ3CZMmwyL7LxmuLoFMNuftM4g24Qb2AU2",
  "key6": "3Q7dTqJj6YLTWh7UsP25LCBeLrNFZn2AG14MkK2dvSg1EKM4iHmovSiyoPwxd67h5bp3tbqvA684Zi3S4dLoXxLk",
  "key7": "5584eppZWMRucsEbqCHgdcuWCmCzdfg7vorhAzj3pa2kiDJUyioAQJbQ9r5Jp8JTukeXQQNcWHyYteDABpnKJw9p",
  "key8": "3GV6AgV8EHJoE8gKweDTNVtXks69ZcL1hBZhDmTQ6mcHc4dJ5vV4zSJAC7sHqyWRLWxUzzD5tVD2K7mcZbLzrSwj",
  "key9": "3YHRBdQb9J9C4KqhQhQf8XDiQ86RHZPNwEJVYCULabwiaM8ZXDHu5x7apkobbyCAQJKkfck7MWweQQz1d65DAkJn",
  "key10": "3FoXE4vvap8HuwsvHNEZpx9hjUa36ZQbdDY6vVQi2nLoYySkUytoRMjBCXujcJMM1LuubWnbTAgBgMtf21iSmBTw",
  "key11": "2KrYySKzb9EjmgLLjBth52kDE8wAS9dYta3pA31K31wqQroTAHXgUFFopVM47aEMcb9r7n5UyRdS6P7kYDi4Bwdo",
  "key12": "e8tSqPh5x8tU3CjZZ9tZBsEWCUyLT1diE6feMyNpM9vYxdUcgyTVfbo1YftuhMYH8nqc2hzFjhHMJPaWwLkj62D",
  "key13": "329vFM42uzVPQ8j4wHChoKZvtcaSTx9ZdHiaTLT3JmgD7sqvor2g9BZXeR3vso49QDqaA4BrKBsPujDdexhca586",
  "key14": "2UAG2N7aNJf6MGRNDucYtxvkzNnvVcA552PtsezTtbuyKvEhespZwgB8rx1e4fyGmS5NMj64wGnUVb1Z8kRrUa3K",
  "key15": "2L2hwaGLYaN9aKCeSQz6p879Tf6DTwVLjZj7KnGw7KZTpRWd35sPzaDhBoaoJZ5Ca8aVYyZKRCHxGQ5UN87pkw72",
  "key16": "5dgyiLNpgM6DgFQwAWScmWBFsyXzYidU1gAxqGzNpVn4efNtfjHvm2axXU9cfUiT2LPYiToA7TtNYPa8o2D9xBnB",
  "key17": "5UUvnEea5ZqiyMGNJq6Zituo2pRC1Pn5VjhrP1Gy5mLXpJr23pubNEAKnn8a8VGyPcGLvkk5MCB3fdnbEWoRMH7A",
  "key18": "2vML91o8uSTW9bVoRwnzQboL5UYTdLos2Q1yKmWzMTdYNhTx1D6KR4SQHJzE1eUyzVS6fr5ASKAeToaAbV1HPmbP",
  "key19": "2Pu14ndgBj5Ma1poKRR8Y5ex5iiWxXCYA8sY7TrnS1SzmEGSQ86KwUmqSjTNEBbGBgNMxoGzm8PpTYiaQGiJdsbj",
  "key20": "5TSV6UqgJLk755zFC4scBx3SzM2yvWhHmEb6ySFCHo8tVgZjQEcdLbcFVe4b2TXZxQ1oZFeFokvdF4K6UB9RLaKH",
  "key21": "4AS5ng9rdv3zvC4mo3GCw2z8YxzYy29DLYbh9nQmhoYRCaPdbGSw4TpfiknW5WCmnY6BrC7nHkwLLqGn8zikJ5qa",
  "key22": "2E5gM4Vmn48ezReLuRWSH3QV9xxD9AXWcvLkrQePzjUcLVB2aG6MZ2P31kstk94MaFWVVd7pWs5BiQ6aJKpHuciQ",
  "key23": "2T64cMppwixjpQ3ppeRepKS7wQBBGCQ3dh8sbxVdx7Sb5ofHDPWSj2fJLYKPQ4p3YLHXgqjMEsVMTdVb28R1aSZ3",
  "key24": "4w6fBgsHsWkFTmQJ1kcjxqwyBxypMKDbEFkQ75JRLdH5wFJJJkGbJwpLF95yVcuiZxMkgzg9rzTDRTwSbJRptfzf",
  "key25": "2EdX98YhFTZVxb5GsRvMJnQuRtadrjccgLsLPB7XTVwcUMVT6AtUbC7M2hLreDn2JEKJzjtMbYzjVdbZCKoMzXrR",
  "key26": "4ANYQFrfgyzhHqgo2Jm24e18KPgrnMM8yYrBdTGZmdXfxtXN2LBHeVpXr6q3vaTzwsGhVyjzsCDecCxn7KwzyiUw",
  "key27": "5UscBFhTquMMhEPkAN6byrK8QipGST2QFPmZH8n7Ex8qS7X3pftCVvUAGRodiGXGf1jANsHPU4VCtaoyDbCb5oij",
  "key28": "3cKNdpfXTH3PNimKsGRJ7C5Zr1So3CSZCrY8LcVTxXiwFTkpzYjaGcfoGmCpXQkwbphSC3xXRQm5T3DTcZpP5w4X",
  "key29": "4Fo6kkFcSmEZTMy5JxPJ1NtTSfguWrmncpaccdCuzEuj7G5UwJh6p67fsY8ZMZYmMk42fRa9satuk5ziQVBtkUCm",
  "key30": "36J3QJtGuHzD98UBfGvzZByW3hVPfhQByn82vsmo1wZZEcy1Q7CseWgsG2dkaUrYeroGyqD3H6tZeBLGEKEMtp9B",
  "key31": "32ESSYwCvUUxrRLUDK3kbSVGAafyaebbBEXX8P1WUFNeHqjGEpWfHWxW1TKT33B28LwRCuxFMGbZmiRRVyyL2qip",
  "key32": "bCh7Sw19W18PQa4Qack2KTbL8HBkcsghxg9MfxpaLTS9Ay6uGAwq3ukgjFVZnyxQVb5LWZNrYUwoZmQey25QGQU",
  "key33": "r5y7HiCpqosstJTUNVapmuCux4sTjDBw1h4FdpSVE3f8G8urPae5aiWesm1cV9jZnZcocfGvca22Q7MME7tj52t",
  "key34": "5oVbEKiyj3xkokiW9pyhJ3FoNVT1nhn6m9Lbq9E4txyCu6eXBxpcrUT8xv5axeFkMoc3GGhsvMH5Yw1aGfqetYd2",
  "key35": "5CguG6SG4jZ3m32zMw75GSUtZKVDkJXpgTcj7z5Lkp3fnhAnXHN6aPkZq361bdoQuVXJBUsD4oCtJPVfjnzcrpWK",
  "key36": "VUnFqbJV3uUv5JakcomEoq7hmBWUymzD6xHtZBQoVuTKhqX2PH16Za34wfZAujtqDR96ZRwYMy78XRzNhUhKs3Y",
  "key37": "4WVyDsRD22vHwj1atbpg8p4cVq5iSVS3ZKPtQXC6y4YRctT4MFB4krbE9mLNcoQuYGuGVCM69NrHf7G8HTA1cKFX",
  "key38": "2oYjk84tYR6ZXQ3PgbKhUk56jETGkPwZjWswJFpiMUW433RHuCH93MCN3F55fZxFpWFVN1nNZBp6zKKaHJK5MVzX",
  "key39": "2f8Y4XmQJyEVAWjVThfY3B6iM9jmJFrM81iDnx95cErL3qXpoXgemm1HyUBpYqhxRMRsv73ov7kP71SfRJrtnM7K",
  "key40": "2zvsN9dw3S2PRjkGjt47oXSZRBmt26Z5hWGMudCEkwvMYpNYwcWSnh2c3rC5PPba4wh7UhRG6wxyRj6odJHybe8a",
  "key41": "2NQ17oiq4Kv11YX5rEPespbmdSjovFhaxqUwRWvoBiz5cPznGc7xREuU2WgrwDfX7HvVXRyFs5bXo3zgZHjV7Le9"
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
