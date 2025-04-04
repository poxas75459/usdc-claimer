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
    "2rva8Bi523Nz5fVmB5i97mHh5Q1PjeiREt3Hgjt95aWUYaaoqtpv2gn2Jc9rjMG26y2iEEbFbhCW3W3C52izip3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzuU2wmYC9wPWRkVxUc7wJ8pNLFA49LxvYpv8U4gLzqsEaAwvqbKtiLw6T3gdwqDCXbc4pGWTfbXmxeaAPps5ou",
  "key1": "cWXhtFjrU92p94zCT4tmwXwQua2NuXWPCC556PBEnxn7UEXg4v1S3kWzst14s71bM6yFiPSBibAP3aYZ6VwGw8Q",
  "key2": "hgx7vz36qgpTp8AmgySE9vhfXznt4QeAeZEM19a6j7KEvxqfNDTSNYSL4Vo6kQbeEUXbnZgpvF6T1TZ3CwG9Fvg",
  "key3": "3BnRu96n8PDAqzyrZAakkiFWKLCr8RLM6VJuQFbnvJyKrMvrCyJ6mkTPvkTRQZUBwY1RSiWcpkY4quTGMam6foFP",
  "key4": "2TjvURLQu1M4YMUZ3FK63HfSdEdqAbobBF547zQn6bNPTfDpQdmrCirm7qEdwFc9rTYNkUk74T6wJKW1i8mmDuew",
  "key5": "2i6AFqXTtMkkKhyrkbPRSsDYiQQwMqxQv2wZg8fbYZYKuC7W42zHVE5KqrVubX35ykGwcJqYnMKX1K5Urxz9k8GJ",
  "key6": "2tkjQF6YbtsuVhf2cqGkHWs3LE5zjGXpiBv4n5oxH9METyNeNiz86H7RkGkRFYzcCB9Uv7ooBSEWUasia5DeJBeC",
  "key7": "2XTy2KU15KQx6EaKJixQMjF2XmUPCvgr4PJgNrwgjLoLW8ZiyA3T5rjsrBPAXQqZPQEu7fPacGFmVuKgG2pmgFJ8",
  "key8": "5jVvtqaYTqVgrGG9Y2LuJsaHEJGv4pt3sX8y7rxNkpXxpA2NJCufuUZZRfgLrjRubouapR7QToxnrzxghJ8uBNPQ",
  "key9": "4VuGojQfB7JZ9UM74kpSUzUuATPo97vN5dvsx6SKFFikDt3YuHTMw8JyvjnAd4qt41PtX7X3mZFYNEZzBaGkHBiU",
  "key10": "83r53GuXRgDPJE6JNYLvDi2pw8hq79BYsG5Ab52dDsxgMQMeSjUy7KiK4xzRB5gbYvheKbHe5Cztz7tCiNAadbg",
  "key11": "4QSnFEH6nFfFzDFC3cPLD6mTjSYgfG8gDSf56ZGYH1QwZUfqqjHBHvyCVQw8XEBcLseafMB5RzrMttBrkm7zLNVo",
  "key12": "Xp7y9FYqptm2V9HG1soyJ9ViLWmcckSF997B21xaex6nGHmqdz4URSKvyi6NrEweYVAJdax5FmyM1RhhtwtY1eK",
  "key13": "HKDjVw8Fej4irR9AYFN8R7SCgQhxHGhGs347qUzBh7MTtfZ3UwRkUDgjRyqxoDgQdEE6316fmchtiLW23zJzjHE",
  "key14": "36cmoQ34TiDsRPrKJxf5VLBuJK3YpCBwxVCAsXHkke9S18hCdAvcxEWVtcKrfnXhxQbvVrfujwSNgWWz2K9btV89",
  "key15": "3vfZ4rexJNeezwypBiwSmj2GKYjwgk2MPVPP5w3HCnLNdEA3oHMeyRKLuTVstuZBG43cqjaheKUXKbApmKZAFVy7",
  "key16": "bPVqLR8Di6EsPM226xtF4hdJKnw4BXik9UYgG2szEQ5zBLjidp7uJKU5ibN3X3WXTxszgAzYkakhFqJR2uBT61m",
  "key17": "3cESZrSoiN3jxskY2ryjRbN3FmjvPF92nRConCsQETqCAcp63nn3wKh4UJxKZKCAGnb3H1Smv6y8u4c7XnvYCrCa",
  "key18": "3akvWQstqEdeAPr6LNDF1tL7YCNdk2LFFAuGGiQw2Xma8mgcKmZWmvNQ4RAKmaSuBerFBFzwaAH6UqHP6GTTDjVW",
  "key19": "3kYurG4EsMxAw7HFrX2xfiRJAVGKmuD7zMf5cH1uh4kZpQGXk4i7Notn89covcrsepdFFN9CDJ3y9eiJYhhMRYSA",
  "key20": "3yvDrTHJcK81nYoKdaZxYXX8J7BUYbr1Nw8oLJwuDd7ionzuHcf5YdG8paMGcSej7USXu94DQ2rK4V65GV535ud1",
  "key21": "5k65gX8x15JTdFqZUukAcR1JM76MDdhqUKzsDZpHdnsfnnPMuZ9uXkrLty7pHim3AEC5tq8QUMts9EGkB3tA6eef",
  "key22": "2ifvEe2DyCk5jNrXFJKZMMWvKkQykpyEiAxWGUVVRbdpx5WQYMC5orBfsrSvUvxn4L9osBxeB1aAmfUq2PgScEps",
  "key23": "EmpTRhxKmb4Q8p6MJ1XzuUBdLHgfnKZ7GeSoc9ocPi3bvh1Cx5pzBqrmLdNs6fpxHRJwF3W1N63VgfJu49Rc5r8",
  "key24": "3XKM6TkxRNjZcmbNn34hYfehUFzVY9bXLCFjjTU6Qn3i9r4RwqKaMmPRHGb6t4FMSS3xBTUfJK5iRnGXtzpbtKyE",
  "key25": "UQHPGATFoQNXWGUaV1hzL5w37JjbVE3caocGm7vc7A3JUgishp9cqJuPu5iedkCfZ3evrJrRKG63Ung4XV74ree",
  "key26": "3qLzp9vDdoxCtprbp95dUzWxdC2MshD9MXaZDtJ2k3dWLEuzukiZDSL8mD7AwMxyHEcsdWWvK2iKSMHoP5sfKT3J",
  "key27": "DAHoqhuVSWvYdyhtY7kQU4pwqNReKg2h2GDLM7w2Ed6TP6ze6axDYMHzjQWsWQdT6ukUt8CLhnLGSECTR35bKqN",
  "key28": "3j1P9D7HVKiWRoE1qdqyhEiC7aekCBiNyPLr6g4BEZhEGCvSW5P6o7gDKvPJ8YYgFM59qwv6X4Djinq9H5UrRFdF",
  "key29": "C1TcU56AWxXckLCJ2YQHK8f3veVNnCUPqvM18q7x2oLWYSq9kUmndewxEo7Km77GwudpUhEzC9w7bYBekAmzZ5T",
  "key30": "4KqPNLqgTfhDBNLLXpg5CnzUawXcZXaLUAnEmxXNcSuViy77LuFAtRUsTrC6Agce2WShrbyFQK73pBXvAySYWxv6",
  "key31": "5qVxTTWqDdXKTVHyQUHZov2MvB5YPM6sk7yuWVM8CLqj31RyF5YCaRK6Xqhx5dZnFYQ34g9o9oyWSbQX47KtwXdq",
  "key32": "4CwLkB2xU6iGvsLk9uUoNCt3TFmquT5HEjCrZxHVQ9p8vh7SpCYdbeVXvHQ3JuYY1xY6EBmtAEoxJVKqP7yKPJPX",
  "key33": "5ZT6ZopCT1Qf69GGGXujqNUzYBUEVQDaaydB5bHPxvUnNaSJcwwodAKMA6CK3Nb2C1zqXTxxB8hDPSJDfisuJpVP",
  "key34": "a1QxNn6bWsBALV7GbKUhZjiux39Wurpdsuo6VvwyK94dateHwc3FK4inKGBmdgBXf8rYhRpX3P1cLNignyrVJe3",
  "key35": "24tg6qRgW4QavdM4Ps2B6X6wzPPUmk3ujYGaVhC5vSM1FBrHMpUzaegxdQ3dzuouEmwtGZYjGgnWTgeoZ7gEdKg4",
  "key36": "22z5pSvZK71CLAeEAEFrW5TLxZBWqzJSG9QCJN9LMC4YSQhhE6bARGQpRiK53FSGiPqh8GXhSxMYmHnCv6bBqa57",
  "key37": "66Rmv39KzR77proUpW55esVh2it2TwPhU5ALxrtcgvXvqaw4JNnK9vdn38XnBqNWUcqDryRqYSjgZhAk8WwP4pDK",
  "key38": "4icyUXcXL9fk5RMxQ9cqikkCxKsyBktWfnqQCeRCnYCT4iNyCAQGWpDgXMF5skRg9y7QRe4QXuiRmHmrERiBNEjK",
  "key39": "2jMyRh5b1inkKDh4rmeD1fT5QCdvrRbtk9qa5LpXJQURCHW7MLWvY91UmqvLZWhSvuKGikcxEBbLRUbiG9z3esRv",
  "key40": "5JwkmFvFNcSa1oo6nAcHjGiVZFvh35WgkEQYkwrMTx19eYAyNaGybmNPeYUiiqQ9urgfrzVDBnrwocbaD3sh9v4d",
  "key41": "Z7DvNeKW1wPgVQm2yBoh7oXFeXeKLwHB1yzSt827EwYwbcpcz3TXbVe1Vtxurpg1emKhiYUmAukqM6VoSX4Wphu",
  "key42": "3XAbXtm6HvFiWHjdyDLCFRgLruPTixqwnyCY138P3y2jvPe5NoxjKfrpKwPaZCgmyQdNHwd1kWudrto1Gt9w13hc",
  "key43": "5bteZ8dbj41ewqoG6TZVA8utKeinBL83MANkP5BqWGCPqSoYKjohoLRSxSgYaNw2jyggDWcxMmoVcAptiw5nBeGg",
  "key44": "5bkK8izNS4Prv8yWBBX49njHJ9YVYWW9qQPEnJSGs2RGhhCXa4TCHPZYs6k7vbg74LLow9Sm7DwUAZYJSBu1bLCb",
  "key45": "4s75bDbBxYfm3BatMWC88AuFNeamA21Cpx3fdTz1TNDaTx9Zanfv8bTLoYeTq6DYyJr6ghLfhhcComFH75WtDuy8",
  "key46": "2un1mk5PdaaUhLBtPgEaFwUZ76VcvKEnLfB8pEW7ihJ8oXJZhmrsuHPSNrNGFhmCo4Rp1QFiXKbHXxEGGo7Dywuf",
  "key47": "2NpuKwTYP4tyYUbsguRPWZwsdGmXik3L8jjWp3rpVK9CV3dtUgtrJWZUnEtPTxXBSWesiei97t3SXhMweo5BiC4L",
  "key48": "5H6wCArkgjj6r85TFx3xPXD96iB4SDJdib2P9QFaamyhofHAdqEjWPUa4bDdAPJRZERVYLkjCzbQEQkxBKSaZ1u2",
  "key49": "3BVUFyv6k3UUCWkPVVG751eLaUobn7ADpWf9LJAi67KswaCs1p1t4TG2rvMVjfCCDJNxmqRRP987MsH8KffnYaRk"
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
