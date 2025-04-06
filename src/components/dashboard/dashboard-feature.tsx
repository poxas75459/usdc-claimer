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
    "65JopeTSazdVK6p5wWeoggoavNeaUi2gB89zhbA9ZG9NEcXio6DTsvfD31ZgPxWErMuT9P7dDv5zeBGZMzLKyBt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQHSZHbhcicUwX8FzbAE9cCneHkwLBCgrbXHo4jTe1VVaEAy6WrrRzcbpN8sRvYSqjhn8WhiKaXULmW5943yNJm",
  "key1": "5kopKc2nayJaNWRkQ8eDu2D3eD88qkn2GAfddxwddcndACXEi9LaE2JzxiHzeRWKozEE18Xbq7sFFGv59hTdpBH2",
  "key2": "3HsJcvWBAdUC2CMEJRwjgJWQUjjdWrnKct1cQNzg3utSaCkxXaLCESbhFsqdMYLU1RfmrUvqycwgV2iAtWac9jmA",
  "key3": "5xF2Q9DqzG1uv1MNuYoJ1bbcxiwLPpKzG3Ldobmpg5ZotvYifgkerL7TdgjmjmiqgezwsLuvfTPqcWUCxR2Ydgvw",
  "key4": "XJC8p3wJ88rMBGps4cm15d3xuypyPnFU67N7qbx1hSp3PbGbhodKnzpcsqaMNdNfiN4tLBLY4qXdHRdmMfh5DQo",
  "key5": "65WcRnJNCUZNVyXKy2xZXLAP5fuvgyoU6ECgLF9NgZGgqiZa5h476uP63ZW5rsxFrf5Zk4b1eFTph9yKaYZ1n6H9",
  "key6": "6MveEpQxSPmBDG6WL5CSdRxLUiuKHrigBVCQP1z4V7FRApQDD8JnHEq3NvesjbB49ixV65d1kJyivgutXkGhC1e",
  "key7": "4d1d7YfjMtyYv5hzaaGkQKrBZgeGZxyTdtA6ZJbphNs4VxR5uDXHKP91o2poBGgu5SB1bhdksBgVQrnXgAnhyi3Q",
  "key8": "2o8JL1GWjGdex6DP5RMbLKyifa3cQQHUPYeEXiXAqgBTLdRkrmTD8fbRhj7oYh523Tb1bpiCF6Rvd8DEFKwXj8TV",
  "key9": "35HYZ7B3WYEAgjxKA7pabhzLtDMiPPftTdRtorMy51vqxdyNs169E2Gr19NCai4nA6vsCsGKsm38aWc6RfyeGFUy",
  "key10": "24bFEhEo9yzBGaMJKHcbzoQ7QSF545G3kA7cVb5meNyNiMNB1nC7v83ioASChkqW465KGDf8gp6gyCLDeCGp1ATt",
  "key11": "ZWjjRFTTDGtMhXVrFEbwHpQBV5yGUqopoySRBYEAGteyf5Y327PoaHDpohpMYbePkB4MF1WVY7JwQ1rc1dtvbmN",
  "key12": "3tZog2qzCFfq1GM3pG6vJQuEWfTcKiEDHFk7Ytzwi1DDqMELzcHcNspcYWXM5wYcgUXFJKJvsXeAwFwHNknoCwht",
  "key13": "5YcyfchVC49Xk2nvT1j4d1H7qHmMAu9D8N9aeHo43eXuN5dU5YJBZ5wavNzBFLw1ftXUA7VQT7VbX7GJNt7LSnW8",
  "key14": "5daD986QPu7azXp66ZNX4yxBB2ua1vF5Jn5XqfiVrwezB8CAUNnUeWzfjRiHCEBXG4MAUAGoc6XDR1XBVVu5sMxK",
  "key15": "3EeF2f3vgDzkxHXsDpDcToSR3j3pUQW36nEUGQuZctAJJk3JrazgbdC3niT6RESzzeysteLP1HG7h3pgY938sWNG",
  "key16": "4exwge15aboT7CNPVA8Ndcma8Wo8bmohMdPji3Gaw5ttvZmexNFFqksF4qJuRbQnTX2oHeN3feC8KTjQKzintW11",
  "key17": "3KxMoxSQKANZB7KLTuzUvhGeiF8BHMFGxxSDM5krsRjdcDMHXvH7KkWAXeKqYjB4LDMD77aiTKYUYm2ZscDCWK2B",
  "key18": "37mh4neCHhaqv4yJbaCcajo41e2Hf12RuswKMJ7vxr6J8au9A9AoSqiX9A2DU9oNDug6SqDsx9p2CPBsqLCmx4yx",
  "key19": "2s1k1ePjL659zfjKqgfaU23dgZ8XWQCafrQDk3HhaPvyLmzvQ7k8ukqaBtT3ovTWpYoqPyBDnBHoyAXSCQzcFySr",
  "key20": "5TaGX9eDLYsALDaymcKewjf1gDj4QjqH1NADSgM6tVbK16TRNHQGXCZeHpBTjwmJKQfXDo9KYTJCWJ3Vnhivj2PU",
  "key21": "AfWmF3cnqVtp4kJJFqaPJzm6fL7BRDbKHnZTcjsMoQc9f8B1L1qpK25d4Ho4mYQxeLDFpr9bdVf3uXBxVmgZU2Y",
  "key22": "JqvZ5hCaQkkwtfADGtH4xw6mcZaYAhmz9rLccJ4pJsHZUnAFzadAx5Xd6hEJwMNWdoqLazJjRvdPmPEVDSKAYXp",
  "key23": "5yQfw7vy3HMZceEMn9bDj263kXj4nSNtkGxF6tQkPeaPjDLRt4qgfBSTbNhByENSLPNiGboDY2CNF6heiipy8oPT",
  "key24": "3YN3LL5KD9qG4eqACNgXxahFJ1B13pyj515FgZSXESqwoZeWEQwSTxDbsxBN92jz15DJS8mPiWXyfzWxV1iEq99R",
  "key25": "QpdPui6bQCRMuLGn2RudXFzcYcGjFzkLb5D3DJQ5XP4ShE8rGoqisqubKjS4PY9TjzGeZggFtUe5jnVvC75zZgc",
  "key26": "3YzgpFn9y4of4NkFTUMTZB3zt1RvFCaPzMomkLDMo56PkYpXQNBHDLrvH4R1wxzYMT66StLUMrKwSpDigyAVeQ8c",
  "key27": "qp4Es1jNV8U9jqKWsHSpNYpzNs3uL21XHRTXddxhjYTus98pVB4LSnmYZGPJRbUiQEKhBH9XjAqbpseLEhRLG4t",
  "key28": "42PzeAc11uskzzeLo1s1Z3BAuwt6ickPCDDnPmMBRxqtVXEevXLmV121zkNZK47k6x9CtREsqJFFZWGEUqZqoMTi",
  "key29": "4EJovcsdBDRvsTtiFBZhiefTJ6gMXbZ6ZJKMDpvPT6VuySxrzcyhtN74xfmBg4Z53CwVRSuTwS7Vi6qhJR8w1jWb",
  "key30": "4g1Ra8sfuLH3xXMuxFh14ZNK9fTFZAPEbg69gbYGJ7DuC7AzveCFRVz6hXnAKhqLoNeLtCx48VCit1fU6U71AU7F",
  "key31": "5QDF5bHwBFbrHUxsJGfwzkWzRBsqEjasXrpXscqaekhVy3DuSJ4A38NMzbNzcBfRingkoP5BmF1XoUwgkpgjvMBn",
  "key32": "3pK39TdWbvrNT6x5gQnReGfdxCesEuB72Pefe3AqL3i4vVTfebhQsLC2sCca8CjV2DhFKe1YwVDHQWEDtR4DAJeX",
  "key33": "2jGcBtyscYFfuJahUHpb1pkgHYZSEk5iGxTS4FQvKwU1XGJmBzbC9CbvKsV4UXv3ETawLXxScjRpa2dgRyXhcgbQ",
  "key34": "5VxqoxZq3eJyYJKfLnk3cEeVyfUsXPudaBESZnUxAJtBqYGeaVSMaqfBuR8xsKTFkWtij5kw7LSt3x3BSekQGbXt",
  "key35": "5KTgQzp8pZLWzUNY5XtjruHyGmtSb9Ky3mZgwQN4dcCDEmhfPbqv7wwNikaTjLba8bBAHcoeozfuX9P3FeRQ37N5",
  "key36": "2UxPTiHQhFXyduJ54vc3x7htG1s6UbmdsgDfnt7sEsAUTernfKyw6znnWbF5dp5eowe3BpUFkxn2s2mP5biTonmF",
  "key37": "3J5tavCbnx5pYDpEkHNnk6L7R6LRZPjF7UhkMz86qvFJKf6FPsG8whsKriotunhAM73RRZBtXFPGQx4bdnhGjUdN",
  "key38": "4XFpens4VWb1Pppev6J4A4ne3ziqaA7K4YF9AGHB33xNmCVf43HE6TQg5aKp79M5YMmV6uKJCgYsER9MQpqUcaNS",
  "key39": "2YQgkPUSgAh74Ci2tCDU9az1FMxS8PD2hhJHXrkjSAbnMSFTygLJsoLJBw8EE6m9Ey89MgVfphki3g4AvBLsDEJr"
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
