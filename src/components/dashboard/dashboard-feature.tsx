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
    "2uLqn2Kfo1319MDanmKKxPiSeWbCkszhjjXvR5uiyRTynAJc1Xb37Pmn67jD12Xx6cbeRuSwGRbpvGyfatmnWKZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZraC5gdquwgVNAf9dCn5jJA4U9waBSAMTCqJcZnUYPK9EcisvgwcCCBPgFAnhAvH6SSDdEp43UZHQYmo8XLWWAH",
  "key1": "22NoyrpuiFbw1KaqYLk6KQAhDw9HLRSbNQoeHWb3PwAnummmUhkmjx5du58iH5Pvd3nA2XVfDDa3HjAsvToSgbAc",
  "key2": "nFAqth8PjiYYwV1eA1gCPhUrv9zpFzpisR1AmWSLEB55BTimbHCmcaTh2QnGx4tWtGFJQyuPXXefJ9yy7cgdzRG",
  "key3": "2DB8u1VA7toX8BVQhNTLbs6MSdtJa66JQLPFaXUV9GWuksM4DR7Fm4nDxwjcVMTnkocUP6G1jyLzJBRsLQf3cMM4",
  "key4": "5mpnHbgbrWbXAoW7rcvwVr8kaQXWKvSDzF8hBvryzf6uGyEjrdjXZTM6f7kXwkniHyvTS3cYYHpjt5JGEyaTauY5",
  "key5": "2hyMSmZG53iUFu1r4a9zr4xbRyRXimA3sFwsi7PUnddAieuKSTHu8j2Pqpb8XViPSPw5zfDiSA3LkvuMi9Smypnw",
  "key6": "4F8q6peSssgNBfVUxDk9L9TW8bw9QYTcJzj2gt1CPKMx5qhf3jkUEGnLVTmaDymrRPP6mgcUL7sFHFVM9YcPMb99",
  "key7": "4DmCzCPGtGygxurghcnMfbgXVobT2aVGBQ3q8yoZEYujvbg57FgDUEpGapNHjEPhfo5aYAekCduycHN2K4367iUE",
  "key8": "3AMb3ZdTXH1RRc1t91EktG9uhi2xhJbJSR7RE2voutgW1uJ3pZcoRxxpomM5iJ9BXXdz1WaSVutBh1iWKCsNTis9",
  "key9": "4eTr5xr9MreKv8XicZVQn9oL1qtaKyiBmPZ2FMFwJuH4NQSCQr58u84vFxMrVBBVfwGdQptDkKEnnBjuqoex6BqJ",
  "key10": "4UntkHFVzumiL5tsgrMfRcnnXQzZWWXwhp1ayu4R83TejumdDK7bWyEMDmMsWz6kN2pY2SUjfJSNYzjwbKVTpapW",
  "key11": "ePMmEFYEUZdeUQVxT6oXUavpbQg6GvpiUqHwDksirUv7Te7cUyytQCTgM191Gk5epF1AwYeCPJgdNgD8pjzHkms",
  "key12": "Bgx396WWuaqvsiQVaHWSyEEeHt3exggk4YJ413zVLQsSJkAGB3ZP3eG5thEmxUSdLHiP6HcMtxcHwR4Bjd7kfmB",
  "key13": "3c5JNAH7NA9fk6KFfkdXKVbQr9z8G2RZeq8T3VNVYH2q5Wy4SxALjNHEMpSPVcqNCuda22Gqe5WvbUSZ1CMB8bvr",
  "key14": "2cHQxjzqDwTXD43fno1YDKrCMoYdcstbjb19WAebKyNmRj1B7HWWG15WpKDC7EtVCLZCtp9QvTsgo39M6hfETqiC",
  "key15": "2NashQjsxU1nzCf1yiMhtDxn8Wmq1owzjePShE47yGkX199QvKviNfi7x3c4AVr4EHR5fp3cEzBPTPYjJ2EfMD6o",
  "key16": "5JttmHZQNi3z4BDQzSBSTVEVNmHLFn82GrzWLeL8LoB2DvAFhxNX96N6GkZaTmT4C5YdXziCCzPeWzujjbQP1zk3",
  "key17": "5bLfrGhrqh93xUDLVsdz28BdX495EUH3SXyQy8ompkKz7z4JCwyG9qX7Y3xr32juM3xo35zFx2BtTQoyJy2Fs6bf",
  "key18": "8oBDKsHKRqzT8aV8ANrd8X1dQrVxRNCnLqPXqBxmSYxaTC3ax6EuDpr4vJ3vCweEKKW9sWERd4zeTkhXx9r71KK",
  "key19": "3kbGeedwGwfqCPh5vobrwmNrqyFMLpqb1NsTv4zoGh5U57883gdkzTbmXVSFCYUDPxqpb4tC8Un2xd5p3sxBRmai",
  "key20": "3WGQ6WBsrLZGbapZosgHSXWbbpafgDv559iXpLsCY9j4cHYRZhap1rSk8b4mvYvucLW9V2B1kxwgFEmFWQ7zMiM6",
  "key21": "41ntNsAdPy7Xdyg5AfrcgCt2Sz95Yvcmmoq2b9tVcp15NgWbK6FkniYuqMQFxsteEN32BYSz4eUUV68C8MG2vabM",
  "key22": "96Wdoejyoq98tfHFfZ8T34ef2WJzU6GPWXKwYyo42aJAavoWsjwrBFMcy4xzpbeE2ZubfPjcB89VBb1s2DURZAd",
  "key23": "o4UJGiPhUCPFoqCrhBQ2X64JoKzste5zVdyETCQUKXyupkJMpvNbo81yuaqpw1CzUtXy6J2U6fgcZUQnGHyHp5a",
  "key24": "2SfCHzcj12m6UDiggFi29P8r2JJWGqHKkkLxXwXvZSQZqBMR9ZMfDzuAxWPCquDREHvFUkUwBi6akDVTkqGcVeXo",
  "key25": "2rqQ92GPab3rjmG1jmFpVy8PqkgzpKMjwFBygFegFDi9swhJLxhE3XkAAy4NAgFYWjqTD1r8mj58NCDWH3XZkmPn",
  "key26": "2PqhxLLPdZRTRSzTbmy9nmV5eERdnURyJnFWUkJ1vMUwpYjcsYyCgqsDYhHLmsax5KqyvSxBBJDx5XsdsHq7fmuT",
  "key27": "5115aySTLvBnpC5jE6Zs9LUCffHYzirsYCGaKAP5fKVGFfCBPJxcr9KNK6uctKgvoREebZFRdLAFgV6ywVx5aH2u",
  "key28": "3ryZjZYjtvQwU9328kd8MUNfqaU2XG8UWYCW7SRe4xJhgRx3AhqzmopCj4oJtKp4PYyh49iQzmEXDEVUzAD6zUNT",
  "key29": "3WRTdEw9fCCyVQbo2RQwuSa4SL9YzCRmH3eEgBp31B6M6gUdbGZUwgMuzSipwkgGsvYGJehbp8XZuwzQiouFZAek",
  "key30": "2LX6P47eFosRxKH59ikKTYPNrxEGZABjp9wZ63irG2mnMcby8a5qcMFX36shKvkxJE2YKDDzgkf47FjZKJXCufoQ",
  "key31": "5dfoc8P627w4hBWg2yUdoBecLgLqHQoVt7g1QfjTdWeynbM7hvotKvr324xRUGQ4qpP3qu3WebeafX2vJWh51NBy",
  "key32": "8EfZX8nQiimHBqWMvtkpTBTmZHR935HeHsWvCJDNQZHrTv5yqR7P8CVbKsqXknzScyoSXbj2b7PfjrsN2QVTbfa"
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
