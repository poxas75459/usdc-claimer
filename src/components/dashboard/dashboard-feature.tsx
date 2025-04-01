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
    "3oog6JMVK2HeyngyvhBykEgtaGTrnBWMfeACwSp9yYsPWcXBgTQxSmFGfF157AW9NFDMXCHBNfrbyj5hsiQi2VE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEZB4WtEe2N9ff6uBXDNAezBGx44V3x46jqx2FLP1Z2kwUo3SXHnySu3MZGErHexqkP2v2AYPinBsYGrUoAa5th",
  "key1": "5acP4fLnpTZykfvCRhZRdJwK2xYQVzn8fi36yQGXiBLFKdj3CLKyWcSgRNJsTMNYcm6ynVHjiZtxkVmoRoCCcbq8",
  "key2": "5yhPLCmEP8DoLqrKMZmbYo2fCjHqXbzqxhPhH8rVtwHtk6JptHnwnvUveSZMHenvqNcr3qUrr7y7cMyjyjdoPgMy",
  "key3": "5hKuqVJSuVjTxmZ9ut22opUR3a1HRPbkZUMBYPxYwBVzRRVBWszCoVRYWcJTXoYW4PKa5f18c2JTvimy5MBn1JgV",
  "key4": "5mxaooJxHNjbwRabNJ3xpmBbZDoAwD5F4HhpztESYgc1NDbqmtC4kYsVtsrpkzvcGrWfrgdfY4GCmDUSSnyJu4gx",
  "key5": "2xb5puLJEKXJiToEUc8t6wu2qtgJ2VZfADRbeLSkCoBTFaG7umxnCV5szZEhmRefp8wjkXWqdoob76qGRXLMxWvt",
  "key6": "5kLyzPPJSi4mF7xqF3axotajXCDEAR2BpZ4jUvrU49p42U8aSGDv5nF94f7idXhD22SJqSkp7YeiRzRGEDbRsdT",
  "key7": "3KXAuUwxCnpBq4aGVBhqaCX5myjm4tSrW4n7GdmFrBtkAjzKjyyvJDvy3LgVfiVZMyhahc2n6uviie1g8KJg31vT",
  "key8": "2c1h2KBgtzk3PwS8RWbUx4WqQ8ZFexh9Aem2EeULTsMt8rCeUWynhYiXzAP7FofSqhjFih6QLxyWXSVycoNvkZ2L",
  "key9": "5aPoVAUFADmpXxmWFZosKMTjnxVhzkfaxrBkvmyvFE85QXrYT1a3sEobttsxZpHxZzdCwb8hw5DeCGZRWSZzs8Rd",
  "key10": "iC8vyvzwZ6Sp2sGM1opHhtExzH1BCK5fiFKUX9BVzY7eSADqHbr5UrkJ96BZpYV9p1RzuUHUeW1A5vcrPsiEQgk",
  "key11": "4yuBRCHeEJbPTjuy2FihEUhSisP3qdMEs49EueBvtpqBcvy7dvAZcPUT7D92U8sqHWVGhhhxtVuAmRah8LLCKZcL",
  "key12": "65LP1WR24DegMMPxhgoUnCfNXeH3v6NTduLqakQe9R59txm7hPiGJtNcQxv92FdfCheQb3dT3A3BhSARXNeDT9v2",
  "key13": "2EWi99L1iBaRyuY9sTEBb3ptymXsaUu4oK3LMV8Xrevu6QV4JFUGYtbQfhC38kewxoUVSX7M7y21wdkJCjaxjp9f",
  "key14": "9heBTddLZZwydUABVhos8RLwE9bruukVftZzwJHp8VpGJqG5Achn6WdEk2YB1ov1XQtD2Spw8X3W3ynvKJeVNro",
  "key15": "3djdxu9HZGnxzt72CAvG82fXExrGN3qjeMgBiHQzZ7rwoUG6xPL6AaZMC7y5EVSxf8iUuDiKTdZpKezK8ZNuEPaM",
  "key16": "52nb8heeeemscEZDHBdCoLSA81fG2pMkEaPngJhjGveBbGQWk2ahSFghdxNqjf9PjhKuLB9VfNi7CzkndSPRzYga",
  "key17": "53Xm7CU93uvswr5b5R7FyHVvZssYzMFkJFhpnUHv45gtXz1odMeZfAVzyBE67s1aD8HatQf9C66tfUzXZbguF5X7",
  "key18": "5Syyp15ZWEocTndmvaU4puHcD6heXcU5f8tGqkHJEJrquPR8NwFJqkR82VNV6njQnceox1H8nLVQ32isqkNdm3bv",
  "key19": "4QNo3jXX2w3WcdyxYn9YPqkaoqGRksep8gxf7BBJ1D2MNsbJ32CndrAMryKLLUJDJsG9VpU6iBeHiD5TvynvyZhw",
  "key20": "2NipUi2SSKbfJAqCqxS7LLCeFfrkrBHymVGQmAQrBCMehVJRK7PMEmeMJLqw2EnLY4xPYrMEwJyfRvaXocBtwY8R",
  "key21": "5suP7zTrJ3AQVQVPjmrH92M5SD2zMb81tfYBLDn6VvcovGbGzrM5CcqaK9xqh8zY8ugWycYFpqhZgA2SfNfTJ5Yd",
  "key22": "5SZEE1gUa4VBuZDULpFNbjRwLSssMRy2t9VZSjSXYkfuwsDxWv3qZAA2xuPU1ciy89KSi2XS8rxtfZbPZyvmjWDB",
  "key23": "9ibL26UfRGwPzeGeXo2rxDf6Y7Hm8CtR5ZmGUZJacG8rkewtpGLVdi8gKZncfisPRS8B6NdNY1pABWq6qreHvbk",
  "key24": "5LGJbraivfi3RVri6KJtEhF7wrUUQihzd1jCwbo3s82mxvVn5oDLZE2EWC2Fc9w9Q2NxHKnccVQKgKPfHhC27KSz",
  "key25": "4NNtnhDHk56MduwvnwC6okKmpdDZKqbhgE65BsdbnWh7VTvKoEibVM1sjucdDMYV38gn99T2v1hkQDCubmvmYqDU",
  "key26": "3ngkaqBFzBDbd5bT6Nyfra3Jj7W7DPbfTX6uriNX8Bm3SSG6MmiW8ykDZb74Sm7cC4stUHSr5NMQVzXrKfHj3atT",
  "key27": "37Zz9Yfa6om1zLrRS93KwPGa8jGEgcBdFZEy6gaqEvjEtL3qPufxCS6U2ZXrPaqNmbjXAWNfcihigCS4AiSfwJmf",
  "key28": "3pYvMBg7oGjRod5Nq7pJNyaK5enw4RVhWwhvcVeWoTDHZtxF8pWCSgtBaimPbWZbtyN5PN4yHen5Rjmo7Z9hgHZm",
  "key29": "5WNPp2C5Ap8PcGGTw74RLKtUaS8wXt4UvsaDMHBQRXTrGNovqf1ttuEcFSpZhYJMxxf8vAT3qW5uBK97mrCr3Fmp",
  "key30": "5Ejzd3bKHzLiTzCU1x369Z51SsXVdYxpZYafGBFhGtnPvJJkDewAzQXa8jZHcJXXcBvi2ZzWEqxqo1PjMk5rCHu9",
  "key31": "2VTmxWkm9tcVPMkKqz2zVAy5yFaXRf5EXNP7txoS1ZwUUNfp5fmdeowsd27BuzAuGtQ9r5am5pWbTkVknpxoH9uN",
  "key32": "4sLFu8biWy7nBWTFeSoq2ZjDMxUbX92dJNfbQ2E8BYkYx21oEZ5zadX6axkjVFrUokzazbZ2v5qE6bMU6poH2opX",
  "key33": "Ttozef9THBbwjpBe3AY26xHhefk9fE5j88XTj2fs998kBFzBJB3ZiekBkCLSTm1k3XAKVM33C1g23pwLCCLHuFQ",
  "key34": "65C71Xu5TF8gz6nG36GcV6Gca3gnM4MKvc2yqPCoKUjhjN6wcKbPnA1wWEKaDmk74VT4pw19QJUKjNDxZ1c8426d",
  "key35": "3jXwy6ykJmb4v3viYLtqJD4XYiMmi8N7M9o2RWCQx7JcsR2cugVvj9HtLCHfjo1AWJ1r7CGfykxwYPFZy4tfTRVz",
  "key36": "47fTt1cHmruawkxdR88qJPeEZ2WdLbkG9E7C9aeYhyskjdX6xzxJGadCPzuqnPdRYBia98q2npbinKZQ2WUd97N3",
  "key37": "5hv4rt3Qq8pVRHZg1UJ1HFPbum54qhBgVuJmR5fxtadjoUavQpBMsXAEwvYPrvbnyJvZZgaPgZVMxxU6S2NfAZo1",
  "key38": "2PtgJWj6sukfKUcZrE3h2om73N4YSZpeV72LFzLpzscYPKqo6rk1qyTypaVjJp1wLExQBGP2G981QMMRJKPzwtj9",
  "key39": "4VP2KWihKF4K21nTEJu2RQZuD1epa5hdW5cN2AHo7CJ46EeYYrftyfsXzLvaaaNg1LFFgH33zqiRuGMCDPYwnfyD",
  "key40": "aXafK6TXUjCErQ8e72qyKM5sUBMxt5C1dUvkgWjHS5STgXomVZ1bvjUpvXRqBFbh1o7ZLTCsoX6k2pUYG1MVbwW",
  "key41": "4ykA5gRwSkq7vR7Z2KGS7HjeKz6Vj5iAjd7TRhp3g3DzZhkQnymHFVjXJSXCnjzcu9T6diiQRhuB5XoPNomez5Qa",
  "key42": "5N5mdLQG1p4Dyo8mqkmYn6dMe1zpZV93VNQ176PFwAACLpkJrsmzMrv4RRFcqoFLNDagF2G9rbhFA8WjSHiYZQux",
  "key43": "5S4Cwu8Qo3DxteD9Eege8faKPHZiHtWT8H827FsTdSSpVX3e6Jccuck3wF6QSSY96vCqBNoLzSBK8xEb5S16y8Fa",
  "key44": "2uETrpzjwgqJSxMybRrBrc2BjHYaN7ytAMnM1KvYh5fg8FDMCnJakTV9fMJzsoHKi67Z2E3EtZ3o19qhdoHKgZAy",
  "key45": "3TzDxgR5CAdHPhNWppv9koTVcbhv2Gvp8zKcLoF6KEJDbPeCVDBiA1WKwHVY8Ua2m7TrCLD2W9qAzJgyhrMvfnkU",
  "key46": "7Kq4c5xFFmbsMybxeTWS8Qh9M1P8mMvqF8jeWwHvCDcd1YKPhEAvPsKiuk7hmG17sPjfwtAXqdztGt31BDsCpXb",
  "key47": "2z5Jrc6NWFGd5wKR6GXSY4BpFvuaRChFivSPcu6JoVop6jEbSLoc2GxHkkGDJRhBWjtPRViX97ppEAfC4yYThx8G"
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
