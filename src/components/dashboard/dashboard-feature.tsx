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
    "5TcvvJGakph3ZLL43YjC75v3GJxgEAbd87Z6Cu87NtRVL4EefmmhjbzZENVeSCEaPPVus82sHTnZMobTNDsDbxbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HufqxgyJUDGGncDMS8176mmMqdVSb2umc6jZyw4DCCiECXGfuKYUKbC1igaNdShnjhgKZFFqb6CK4nU8CgqDJ9",
  "key1": "46jpURxnSFz8RWxSWhkUDKt5x6q64FnfhUFNHCG6QhtXfGFZqbkiWHF9ShjULNh432aWCBHRQAWs6Jx4fztHn7Js",
  "key2": "5Q5KpCBsjyZVUggsoBKaP1xvEhWpvAnQ77qdG175W8wdmjZP3UKYfFqx9p2XK5FmF94YQW81aDyY7sa134a8GQqb",
  "key3": "3Vc58eqqpCfMwG5HU8tY2g2T7XKvp13dRPnbyUdJdRJsXQLYQasNt7c6kRQ5SSUREp6tpPRCTpNrBBQnQFTndV2b",
  "key4": "7MHntPHNDjkwgq4TpfRbXoCP8Ep5vRLMyurCi6MjgunrsiJ4T6Pu3un25YARMKbAmMTdrzQ31RzpKaa1HWtmh6E",
  "key5": "6vQoUfDBR8WYtftCqh4vV5XkCLfhmXV2TjL1BVKGyWjBhTb1jXhe8dxri9n2nNcCM5zPmJiWCgUKk96qZBoiUir",
  "key6": "4efJf1AfAPXKZTK37X4i4P8gwW2mG1goWrSgSGzUuSWieRyeQFLc5TrCVhU2S5gTF8cFpCjPVyoJoJCLEovx4Ltn",
  "key7": "2XBK3WUPWDfDKxXX1qPic4sWR5f7b7MYLBXH81LCZXf3GsCKZhsjBhbnirYbvQ3HjxBdnd4gDuue27NTjGVDZLDd",
  "key8": "3KbXiu9UpJ5Y8DETy8HUc44S1QaoaxY1qL4DJNui9JMKEQc1KJaroydi5XxgvE7Px784xaQXerHRtcfaqve897CY",
  "key9": "UcPVwPEN9tJWHDp9TWpdrBvtFMfb14152Yi4omKBT2rmw18UHi2tNWg7ZcRiH7shy8GJJrCAmfzY1ASkhMJMQuu",
  "key10": "mbZgSi39LiqJZAEUNUBiVMHhAsZdkjwvMQs5xg1vxsTbTZjY6Xx1MXuDCizpgucg3LasSudemjFFcLFYjnnMaNQ",
  "key11": "3ZvTN5VXnsaZ29MEwwoJuSzsKRq6SniiHmQjyxPNGK6JkAgZ2SRq7XUdPx93c5EFpyesuZiBCiathjM5RryzQjGi",
  "key12": "2as3jUj9an5PFp7dC5tdKRezfje8TWSbZFX4fBzQEt3mkVqs7ebo3yb2AWnzpKudoQ7GZPoVBWNLowDqPP3xdk8k",
  "key13": "epk1bs3VU7zoRUevMnVwfLSrsqu9UN15AxEwKSLA124RNvFDnViCpMp8jrSjpwzNTBX1f47dYZjkgqRJASkSaMV",
  "key14": "5AERvYgxzRHZM1848yT9ZprBpJddtx9vLztF5WfvqFhPqJLeAsBDNqpPyAFKXtTEZgLosGmBNFrX4KvCUNnHME4z",
  "key15": "5o3VTx49kiX45uFg1qV93dpRBkHd2VhYHv7BvdMDWct5mckjf5bm9xGHW4sRWrKNosbFHbzDqq8m7ijmJFY8Zk6o",
  "key16": "3tMELSeUv3i6E4fSuGvfeGwM8tBVvAoLWZ9tdZuYijEMVukKPRL4yTvhbEs3tVSPdaVBcccXQkinafCHSEgiRZQ7",
  "key17": "3RFbGVmvbVK4Uw9tVw4oq7eEKcHemhsmm5ufLYBL7vaPCB71yp11gSba4zcsU7hcnXrScvCh1AQs1aE2ExrKYySq",
  "key18": "4HvF9AF94ftwG6SdJYheNsAzUF8zjexggtjLSmcVFcFeGGThxERqMswZ422JStxjwjfyzjoxUW5FDF8YeoZfwyd8",
  "key19": "2GhFsfyMmouTUD6m4enGg1gJFVbk9maT85GnyBJGEYf9y18QiFh2PiPcmSCfougXbH67BP6iqfosyYxXyLuFdwwp",
  "key20": "5dEc7gfSBLCFh9vMQseSf7iSG56YFDy27YYHf6namiZFb8kWteQbRGSvysN1zhUivoRPTKEaDTKJZpZdxUVmw2TZ",
  "key21": "4FcJ5k1Zdk2yCh2spHJh4SQRhvCNSmrrTyPUzmtgMNv6Fv7C7z3hvn5EtFxczHg4TULtwodprSH7aNVoTmAQujvB",
  "key22": "3rUAshYfqdisBeAgmjv4CRMn6tjKN5D8fFzitD74RaU2Mkz3UGnNzWMyW9NUWrknP4SmuNhuC1wvtWoN69LqmkZJ",
  "key23": "Q2ejmcJgGbqTgouXXtXwRjgfy88DzDE8reJovLf8dG53yDkWqZ1KTcKoFG1Ytinr6Km5cwnmBWz5Xr11zMG73bT",
  "key24": "5TKdBRMyWjkL6VStbnevBCtrrbn5HYTtiozyDNerCEcvt5nBkZmVXWgLd2kbi5eDPGhKqgERc3o2UW4EWJ7Kvigo",
  "key25": "3jnMxWfR9eqHL6SFon715UKoM7Za87ydFTxkMszb4wf2kHjxuV6kpLyBGCZDadUxB4qhpZ4FHRE7BE6rYxh8384S",
  "key26": "5QBaQpBDiNHDhCwc5iA84mH25H3QWyCCBc7zEZobS4qsAej3eL2U9F9JGW9qwcWW6aSKqj6fkfVBuoKtoW8hKQmt",
  "key27": "22UUerMVzRZyQHtnpFyMy5rPn55gWS5vSS6sMvK1LYCSTwhTnh1Z1cYvV5KdHJRsx3hU7LBnRMtLiUBd7gRhjGXQ",
  "key28": "gGPSgmyp4Dt59xNxjzbE9RdEWmdhn138khNxLuzuaA44taz5gCVdp2D6Ch2L5FRyPNKXgYxTxSGwBPna8jfKr7L",
  "key29": "5qDnABjCcjucpbCDeFQuKBaghx4XaibjuJb5is6JkZGM8jBnwE1vSz7kVwKRSW7B4RRayrpWqt1vXwqh2XaNSDTY",
  "key30": "4BUUsR61i2XrUS3z9UM3VvbVf74buj814crPqHn5trkEWkv8pd3ejehXyHYNmA2WvzzDBPcas1Yd2dCrjdFHd7GZ",
  "key31": "2eWUZ2FYydZSczWWNHLDgi2p78XKpLqAkYSYPFdbrPhUqGZufvw5Vtyd9w7SsDynoBpfxjaWAxCQiXxwtraaPvXf",
  "key32": "3X1WtUa8n656NfvAzxZcZWj9zL2HvDMQnbMEbrWNmnkJyXR7fsoqyXFJfc69HCs2gqGtrWTFoAfbuorRXRPEAPNr",
  "key33": "2yiHw6BQBF9aZFjLLLuyQeJqGBw2ZyGHMfZbj5QZXzaU69JGoKoh3UkL9KoeczMRfBaEgQvqmYnBxeNhvpakXCt6",
  "key34": "5iVYbNC3ghCam5i8HuhSgpMGrF83JnUE4g1D6eG5TMsYnrLsc9c146k4fM66cKVN3YLFZ2zxEeNa5dRKRfsjfRyd",
  "key35": "626XBzQXoUFb8FMPZpYqPmKzeUMrTo9cicgGGbxFi6xfgNtGZx3ZXCuzw9mWD9XqaKFwNW3Djg6kJG5Juv89jXfz",
  "key36": "Pp471WkbKGJMBAF3JXZ5UEXDVkrxkS6JBynCZCYoLsDftmLJCCvgAMBe5Ed4MCwTuBA7o9rw1vk4Qr9XtTJAXvq",
  "key37": "4XXt3jps55ntGXQrDLxF4kA1ZVE2EduzTHphZNDFKHQT7TxNEDjVBsQskB9nrbSHqWdhi2j9cyK7sKfAsDLY9ZnA",
  "key38": "aws2v5L1HWNMrF6LJMWWJ8aZWf4LRbHET9TT8M6dtaNYqBqKPeBJ4d7WJiVSwv1zs11CMRJ8h1NkFKrFf17NSYu",
  "key39": "3YuzWKGiZSGn8jbMGyLMu9cr178pBwqPYBFqxexkHPw97yMTMrnUpZaHAoLFTUG4nJa9RPpDmnxtJtDA2CNmRtdn",
  "key40": "4HZGzZK556u4jVuRgdLxxqvr427BnMDGYr5XPoHArkMAgrEWzxuKm3GuBtkxTzhyWRxK8v2Ti12X1t3gXWctPeG7",
  "key41": "4ns8ZWbPeGcPDU2aSVRYgaMxVoe6sTyF4Wjd1XS493t3u4m7F9Y6rjM893iPBEnbZExFqSt2jvHzCPUk1vkDiM3P",
  "key42": "5voZn3fXgnZKoa7UxdML9wL4zuGXUjtCvNRovqyFawMWWX52Xa6e3RHbdYVS9hNhNaEancgNHDrxwnBiDRFSHLwG",
  "key43": "3oq8fGh8sXGxzkBeGejn2u3gdAsUvEWQaGUUb4QpJCCTV5yEcGS4rDNqx8NB2UuTbPMTbAnptzjwFDE9Sfg8BRTu",
  "key44": "5UAVyejPL1jFFpNtJmtj6T2DLqS4n2wvaag5MrwYsGnSsBsKwXoMxuFCKj6xbDbpH6nob7B3VPBhzN6tcJNhvvP6"
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
