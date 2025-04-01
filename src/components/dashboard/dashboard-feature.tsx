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
    "2Dc5qDmXdh9Pq39Ro1FMio5U6S5vfgyh7HPv4A4Q8ZqfjyMyfa6DEQWxwrBrHhES3uqB7U9AdLq3BoB3Yh5kQ5qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VqeHYvgkk135QkYHBKxMqgybWdtKi722XzD5qCLvE83R2QYHLqDjvJMDrwnKzsERW34FV4kcKbXPniY8wCmCfk9",
  "key1": "5fyLLEE7Mkm9X4tH7mjak8eorWr7Le2gF8xxX9nwK5nYmYLrVRzKT5JYbNypTkPdzdJ3vYbKQB45XDBjy3t5gud8",
  "key2": "4GjwA7xp1XKJwJurtynooBDVgd4HWHQCQ6HeZ11fxXNEZWTbK8ncnpyj8MHiThsmyzFq9n2qxeY2BkSZiDr8RVr5",
  "key3": "2LkNJHDqkRwfG2yJMBuRF38RhWvqUvXUbJG6hksjyR6MrRRB7ZeBQA4Gsudmns3sDBC8kYwhV6QCTNttSAimhKKN",
  "key4": "3tZ6Thskifs6MHnjBzB6DWzUgtX21niwg5nfqXJVi6XBbv9CPSqKZHsu1VT3VaCAJPHpSqLMmzGVWzBSaN4CvtuW",
  "key5": "4zFSHE8vzWgZxsZ7r2m8A47FBG1wBRMrbGHCfTbHVBHJZWXmJx9NGZ74Xxz4DhfmRCLi8wB1iTuzHwrgwqePjBa",
  "key6": "2pDFzQV98vcDc8MWvT9PJGFDVnRZ8LnFbn9VyQr5FDir7hGZJxKSqjczV8GdvdU7zMYNdzztXqqA1F9Lhvv5QVXW",
  "key7": "3JwXz44tSyrXFQKoMCP8rByWk6mupT8zjj3XzyAac3AswsgkntdNjSKRJaqjXfZnpLozthtBUH8F9rkjcHt2Dx84",
  "key8": "43yF76M6ABQonc4dyoCyikr96Vyk5dXZ1S6TfL2ryrBk2ouyJ9uiqBC6uUm9sMSxEGnwafZxXjZt4sQiNVeubG9U",
  "key9": "35ngkqWErJLwH5tcsix2sKA8Tj3srkNuJbivKCP4JGDAmsRF7eawJ6fyrLUNEiQ9L17JLu4HxpqDwRyMVtQ4Nitd",
  "key10": "2NzMTpRDxEKjM6vDVpvST8QHNpeoGSGRouGVvDCVLEKttvJAAE3fVJQQ9k1ZM8fVaZcNXyesRL6M7tYrEdWSpXpo",
  "key11": "kfkc5uLn2e7LLZWN4F1JxaArPopuiiWSpmLtyNiJjZeABWYCtkKAnU8njvGD6JJyakHQFFcYjB5ZYvMBqHELst7",
  "key12": "zej3RbM9P9pdSrSMhrvKrnDS1NThCZdY2oVVPvk7WnC9cwUTapF2zD55g5fRiGXF2iiWZe6AQMJ2YMLwszNjHBN",
  "key13": "33Ue6sJufhetnuwFmhTbquQMCevSsXRipUhbwsnGEFoyusXdjpKpYvWAVgVFHVt7ySKZfnRNjq9RGyTLE7MvWau7",
  "key14": "2or3YuZs99PPY1geXYk7oHM7Vx9Tw3CT41kWFyk5jpMitpGtzjZkMfASAs6TAkVgnAQAvXPKUoCMxbcpMCc2jEMx",
  "key15": "MkrVzfMmW45nMrWp8bhX48kunvj5XWo2rc4ksj6KV9LVUmXFAtBnmjNPZiNENciqkoDNpTitxCyzyFxyLQ881K6",
  "key16": "67KedHbHZo2rXHJrbiaiHPe2pFZWwtvTGTXYXQ7gmKUsR1YG1yGUm2j7DB3Qryspn66ybfdC2dA2h3ohMSLEswqJ",
  "key17": "3TqK4aqTZTs9pnfEPh61v1s94Z4JrTsNviXWiY6pvGDFjc3cb91DBVxmxpYQYM6yRq4rnegixfSNLV3H51CoCNBZ",
  "key18": "4G1qa4a6ikRLPeruG1YrHdEEoRLTV95Pm29vDuoTvZs4Tj7PhDyXZb2r16ozmaJFf2pLNKidm5rN3YuKBrx1B1U5",
  "key19": "2RN8yhs5dhBbZkZSC9qbNDMQrYWMapuinnnmm3TcNQtSCuhr96E5NaotLb6nJ63Dfs5izyakJprtMWmhDs9kx3MY",
  "key20": "5QW8dnVkZHmMUjLUCMm9cc1FaL9mLDJziW3f3DvvTZcCyf3gVjQrxy95EZgQ3m3MNoeNa26U1MGzPkuiiMwXE5oc",
  "key21": "2d1UyQdqkojUGwYecFzt3EWQEUke2tawcTJB39sj8G4N6Gn4V4WhH9psNyRmw7Njmmymy53GtKwn4hsuFWBoWJm9",
  "key22": "q251wugXQReiBW3DJJSZzL2E7zULmjPxHYfSWKkyrtgWJMdh9NqpF9W8xPq8U5pp5YttSo6xXZV9D7k3BFMJeub",
  "key23": "jScYkwHVtzM25MG4qnUrEnnKJGnojckreEvo2YALdu5KFsywH1AJ2aStyG8psigCRF28fHeuoQn5XUuE6oUxHV2",
  "key24": "5LXgTJsL62AVzn4Cxahp8p17Py13GJZvMT2doV1dmfkUk7xmSmFPVvBcjtq6YY4HidNmLL1zt2nfsL4b2X7ZRw8p",
  "key25": "3N5yPxEqb9vUZi4rCcLMLeqstTPMuK27WfJSA1SRpi2pSR5XzmFEJobRqEPbhhepLL8u1hHmtMf6rLCsQy1LL4Np",
  "key26": "4ZsmnDJoA6SsXqARNpzz4xhTBjwqj8V2h8y3ZZFj2aGjXdbhUqXY2vvWHPML2dGLidJPFVfpRZdgUq7Tnj6wtaQm",
  "key27": "2bg3epsmnT75ApsQxFkCeQwEJR2FSh1qxY28vUaqd9PFv1bZyAmemmLckB9m7BCyy3SAMA1FV76fD9vR5HDcf6Pc",
  "key28": "2FBK7CVzB7fBrCALS7cmstMpZmxYZ2gLGnJuYihttQr95wkp5TATyJctGWFoKZXuKSkVYsUhLWHmxLbPVJr8q67V",
  "key29": "2zSdtmXPaMYDsXbKDZuvMHKSNtAEr2TAmySmgs6uCsjHLDhnzXSoS1iW57TtPC58FYxHpSjZiA9EDHLjcUqD6WRV",
  "key30": "2jfs57aUkb6nVodiE2g3vHLd9PcTQr9uXeomp1opjaZEScFPG3K6wZBwbsGvkZjrkuRaeYTFK1WNoUQsbJXatDt3",
  "key31": "5fgVG5pGGzAcD3hruLvcZCVgZAYcRTds9QrvCDLX5dQkZNzArcCS4ue3qFPMhrad7pjgoigz75M3mncfsZxRaEh1",
  "key32": "5QKFRZ7hSK7exkXPHiLD5YDCwWEN8PSXvXMrcwDQfyvCkxTzrZW4UxAEZDsGHhbwQ12kHumPoh7w2HpUC1haXGyW",
  "key33": "2p8bFAEPSeBETcMV88G3cmxafgZKUTTXFDdqeSapWtBBWZZJwG6ErqFtatWT3AKsat1UC2Lue8yNAXqymVTbTxE1",
  "key34": "47vQpytcCjd624ZwYAdqkwi2x5FFSRgRhe9DN5HY2raupXtuNoRFQuyPECXNyzeGtN6TTkRwmptgzvHqj3JvZsdW",
  "key35": "65DgVJnsHtSAjLfmqpNXvMfz7RvFYRaTahaYVR7o6oQhNECLsEtoPKgonNeZMjwWMqbvR7va2YqGdeHUyipAcGtF"
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
