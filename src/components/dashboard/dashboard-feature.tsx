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
    "5WdwadwSi3S7P5PvdjzidbcBbLF2bQbBxREcZGMUgfZGN8mXzoanprji4yt2jSUByyqwMsZcJi8F75m6Gyd1RoWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mG1zpKJyxaLGwvkvjxC5q75HwJn7y6muLmER9m7kbie5ksFgPfHaRF5Shg7yRVycwFVKpZpyCkMeo24UdRrFUhq",
  "key1": "2jQwscXGCmiFaJhYAhcnzeyAWbj4k11J1cXZesmhR4YhAPHWM5y2JA5MS6QQnNDxfRJ8PahbX62fpqXkYuJCMkKj",
  "key2": "3i67WM8XbhmqA71DdZrvEGPbX5bbtPbyFNpdgn1cj1hQ9x6pcYDbVL6EdtadrAQdhxdVbPaYqBNc5N9k941dk8aV",
  "key3": "39tuucD5jtQeorCYrYvHR6JQVJ4ihtxAyNY3VWHijtCHLmhLbQ29QMaXTxPHm42ny8JLTJmakGAJdrRB3QcMXi73",
  "key4": "4fgBpkNpH3etuTNCLRKwHYquXcLJBCWVuaLpaHPoenb654BWz4gcjbxWQdRj6AtQmLAwqdTK3w9AY8v9FZbqL5Lj",
  "key5": "4yVLMzt26kJ8KVWosMi6c9rtck9tmxshdwkU9KavU2zQkPNKyejRREUNssTobsKSWV1YNxXx8q7wKUxXreecwZqc",
  "key6": "4tMMoXFxawzwiLgG99SkipL8VBLoKc7mU21fGHMyhVkdp7uXFEjXRMWpsfrnGaBMGcGojF3MgUpJ4bytQRihsz7X",
  "key7": "YEoVE6GnffkwThstcXULmwJ2ur7dwKxeK1NUfuK3KJoTWFM8xhnjEXvBebEyGPxTdckzpy3C1mT9baiR3RGtfAW",
  "key8": "3xtBCryDTaUk7fndwXjQkFNXNLdPLBUwRL8LDewkHAGmoLnHY5k4pay455nNXwmHqEECUzdnwAp1n7wwbu7JbCKY",
  "key9": "2byPTqqRHJ63U4JFv8iw8c4XpPSiePYQH6gAXTdne4wgdprosi9SDFvDj4dCVfF5veKcXTtULLMKyPTDiG7SCyQM",
  "key10": "4QTZCMzC4VW2mejvrzBQyfBR4YuKnmgCqZqBWGn4N18zWDb5yKyWFprPj3cuevJ7v1yoRm11aUe91tWemLkeyMgZ",
  "key11": "5kZsMPwuYkmzufHBXnFUMqvf8rzUDyo3F1KaayFX5VNXs5P2tGmdzukAqCE8zuZXJ9wR5rHw7XVR7rfgxN1BuenV",
  "key12": "3233gZqsqHiorrv4fWu5LWac7P5yvht1ifZ7EH1BSRK8bC7TWMzKjjaURm52symTJPfGGBEhj1NZz4fqGYRSp5WE",
  "key13": "3jcTG86twNSvX1e7XjSMNrS7oPbzrejPzbJAENeNeXRmJQ6YATy8TJ4icZ7bGAaEwNmBcBbkECwPMHMZpaCn3PZC",
  "key14": "5Nymd3zFgq9yEUwHi6KuJEgdYi2uLRunkCLBeVDTizk3FmdYF2EquJMNJtVUmK7foHeideNQ8EWSefrm6BM9jQUR",
  "key15": "2TifT2n37RPk4yQmaC4xfpbRX6NeZ8awDzttqG5q7oPKDDHZtP9yHBv9XMH71XTCaixFDnV8EmfXxncPwLamj5CQ",
  "key16": "AuSP5fCcfyQqYuRRJsPzjNdKN4E6WY6D8By3YX1ZNjmGE2wtEsp1Kn9sggco8YsuTvPkbebEFjfe9NgzN7f5cWG",
  "key17": "4PzhVs7BMLyLQyjKqTF1c5apTnspbBuG7NiFTVqyonGLCGJaUHsKFJbrJz7uBESujMfAytB6Shf7qWTZkXh9dHMw",
  "key18": "EDtwd2jQXRj2tQDfi3YKqkoyKqNSpgr2ejMHes3zTDL7Ec7TqWx9Qp87TzJhL9FVMZ7MBUCKzVNoNq3a71Y6Lzy",
  "key19": "2BkyLa7UX3mNkX41GWFZe4cgY4LpfoPddSRxCiWPVrLJu8jt1VdP9HMzeJRpFXmeUgQMGRY3rtcbYnnYAaUqtQ88",
  "key20": "2DbgskPGdfrfFit7VXiREsfSU9os8H1vFnTaKrTLZuH4kcaqNBKcsYRctri4aruF4CN45awQtfU9uHagyh4LXvgH",
  "key21": "4YLoCVsqn8iZd2eT8x2W6t5pFb4LzRTK7FzvqHTUvSRAzfMHGqwSq9Qj3wTrgYU3bQCowaqhPXEDzua9sG1Lq81G",
  "key22": "zsBuPkG2ML5CEX5WPL6MEzVVXrS32njqcDyELbppLzKQN5jhVTbhkm93QpWcYxvsiF6MmJ9PzDMadrGjqXmHsuJ",
  "key23": "5H78hHZTbzYXinfHPNY1J3q4qehGgpWpxAwL2Cxeg4YfYeWc3RDxXHin6SEqwReyzCf7Vwy7rsdpXTcGuaso8NiL",
  "key24": "5f7qzakU87TmjDwi4MGkCXgEpPKa3iY29cNfmkMXYkBLMHcLCz73QCmbg2Sp3QUWwpmKd5JSwaNg1LdciH94atpb",
  "key25": "Uz3BL71impLDigo1GjHijnGP276pTHaCap1WVQo9sXCGvubZhy8KmjBJKTur5B7qTQRdQjXyGKMNsEGPvXCwajr",
  "key26": "25Xw6UKg4H9gQvhjSS3mmmcUxV3ZW6uknHeWMjEXXYAmPNorbZFCBHUPMnJktXKe1nQeLeSY4W9mjHngX4cno6BV",
  "key27": "3YdPEq7e3e3bqMCZJ7hMbMnCHUENjM9LE7HZPWA821exAHAwdshGxHvtKaokjz58xa98Fa2DL5hhZVsKsHUdy2aX",
  "key28": "4Tq6NVT2Zi7v9rgxQQVomX4Ug8aeXDhYgk1pjLFBpfNd8DpYKAatUKT1FtSf3jo4ihwaUvgCLGTYVbSZW98Zjesd",
  "key29": "5GEg1ASdN3gFkds2UAYvJ2riguiDpcnGBF1VW5MWCpBaEA3ocJRxJmmUqtQzGcMtHVkB45CukKx7c58tpdvBggNY",
  "key30": "24UPCtJ4ibd3ejfvw3dxTqc1FEuv6W6AT4DgKeTUgdVhPvDpBcFwQi9vFKpHwCgDj4ZMJLwqsnKBsvDtYJN6PgcY",
  "key31": "2ANfhEhmxbr2NYZb3kURY6DatxtSPzSV76DFNy6Et8UkNv4XNpbcv1tUU4p43HF6FpcLJtHWhVwvYLurLrKfBrAC",
  "key32": "2eFNy27L6eUbXyMKvuXu6WCBZwmapB7A7UtJLkcTM8AqXvPB5dczhjuwmN5B6L3zZyXtZbWUezWVcw4C6wYib88Q",
  "key33": "5gGTjhY2gVtvAUToxdYaMXYEUZLdXE9sRQB5uBNSnPt9ScY3MWbDAoGRpxkkqMKhK72T4AYVktYtsQzWUAd2q9zn",
  "key34": "y3v9D4UHkghzMtmpqX4K2rvZAKad33aSzsYPXQQPBmiQxHGr2AXWvkpR1JzXVYUPo1sNexJqPcD8bbqemKTJ3ub",
  "key35": "2DT85naioBearzxPATN6toF5UEAEnhHfbso98mPAaYhdRECAGVTu1P1Mtkp8NMfpCFsUj1T7Pu5XYNip9csTDDga",
  "key36": "2jjDbbM2tbMHFUQ9Ec6CCPdTyiDFm4dRq6gz8RaKZrZath2hdrbBetreTaCXqwdnpZW48tdYAgNG4W79aMv3mzxU"
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
