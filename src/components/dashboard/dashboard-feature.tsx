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
    "4CruZLXyezts8pZsDEVWmvZwKJTfkELjped1yiZykv7UMbBwDq172BmAoH2poCzEBWVVHGJu9riaPSTwcCWe5PzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBBBK56v8WzVNDK3uRq5BS6eujxJFpvdCv2b9yj61Wfh9CNer7cNJSAvaEEbztQ2PQrJdqhrjBc8R7jKecto3Dc",
  "key1": "3aePNt1qagZaE46koHDYfME3zWF3P6Fuxsjtc75vExRKYT2FrSNLH1Db28HAKE92hjJ9jL3S66PADqYWdPovn6jE",
  "key2": "2WQuoSYc4nK57kmWrzdybqNDzVyJJdAfRwfUeDLfZ2cGPyB9HFYoNcWHmtff9FrRbqoZqa4re8VhEYZpeGQGbaZh",
  "key3": "4Yn3M4PLigPSUQzf3krq5KEyVywUVFHbBTRASiEPc2mYWELSiC9nJAidBT6GPpgSxxbkuBQiMcycVhRP5RhvKpbH",
  "key4": "2ciyuu2GZZSZaKSGzax7aPUmNev63U4kZKrbeCKbXDnCoNpiY8Mb8ZU5615Dg5VReE6izG9Ym3Cbcx9ANPrzinPh",
  "key5": "Ymt6vuirVqK7RrFkLrDeLjQcoSbFKKgMhxkjyWToPDxVbKT2WF3py1DSY1iWTUqqeBaPB3Z3ndV5VU7EyLExHzq",
  "key6": "ko2aCDe8W631gfP3no2Q5gma1qt4SPwJsaDNLnGXYe9XsYea4PW3a98S9zH4NSLsQ2HKAxLesKnjH15S2vSq784",
  "key7": "2Zart8wqzkzrTmNteZukbTJZk6Zoysamrau5K1Aq74q5SykFUjhQcjn95hbiy23G3AWz8H3829HARfdQjhjUj6SS",
  "key8": "26DKECusT9Rh1K9jXqEWt3UNSv5hCN3Pw9E6xuudMRJRuftWyKaNaTSRTPuArNNxM9gQ1kNS4NYi6oD3sKXZMU1n",
  "key9": "3QULWUqH2xUyAGp6XW6PRKfiG1U1Nv5AsvRmjy9f9RBYeuEfgr2x47GaUpQtMgmV2xvS93dknAi2AZ3JQXnPtHMt",
  "key10": "3qDJjptF5EPYU1cRhGtDhPy248UCpRAjSZVZ7prRMSdbQtRvBGo8aSMugjkj6i7uUbQwZBzxzJ6ADKEEQMhQaN9T",
  "key11": "Nt8rzhmkcHhL7YFW61mYHN4vU9VFPLVcyWosAJEUqeRx4kBTMFwFzHEVg15Pj24EbyXCKyNv93CBJ9ckYrMABWu",
  "key12": "5BvD35nRF61hbBgBYF2m9BZGuf7CiaPtE9Rk16VswQZ3PTLRVA8sqv2iGrhz2MiNNfYVq4dRJfc6gRffm3wvmgCM",
  "key13": "3NQC4F3Cd25qUBbrn8QraLXBxHEybNg87VDenwxVr8586EZk4CMWDfXqtg87Fh3YJ6scs8cCph8mrzb7JSddAGH",
  "key14": "3oUQW3MVYWiUCC8PrVRFyUxdJeczX6KWqJktdkBXq8MsXVHrs1xnebkSk9iqv3jEBRmSiNPv5iBkCiGrP2RFovSg",
  "key15": "7gMk6b4fcB8Bxvwcqggf37LJmffZfJCJFqp4rUKKnaXujGAS8CGZArVZ1gb9U4Mddcsw1fhC2QSvQpiuNQ4wDeY",
  "key16": "4h1gE84bBMcr2gexNXQmGRPS3DDk2L8gx3XToJvBpHFV9RGiFUfs2tC3Eb8ws89zMRdEpiDjmr5whtn6n6e1fYP4",
  "key17": "2bbHG8KB9o8ZxiuPeJsXCM14ynPVFfujE8fBzyhecktVPKx5C257gdS8GKq3112Cu7N98sMKP2k51Kq11EaRtbMc",
  "key18": "4p9rtb8eRGraEHcEZBPBu3RoL3MysGSSmTwX4G2SESGVDZrqK5hJzUHoR1iEeG2PYouvQSMp276tWmC298amqvqm",
  "key19": "4bM9EzoEvzh6u65DZTSE99bnQS98eu3KSkJ6NCnLM4nrsyWenTw1tN3sNjWjRoQphnmiaHGow8RxJmF9nkHSEs8k",
  "key20": "2kBM8mQcy6BDtey56RnmEaDWBUhsEyhvbFY8tb5qSYifsnrmMmBpkxJAb6gTqwviUfHJ3xBo49XBGkQ75YW3kX7U",
  "key21": "aCD8914bXSqbYzYD8XzieM76tTqmPi6uacasw7uN3n3BvKFBqpmRPuL2mKq9oHiQHAXEAGNxU4Weg6TvtN6p6Pq",
  "key22": "34VaFkbKPLdYhjBJLVPtQVbZegd4AewdW55dSGBFBwbV8jNEYu5qLjLXLT7dDrG4af9Nw3qdGLHCts67Jn7gb8ro",
  "key23": "2Z84uiHs2eAw3zrf6bsL4Kd8MgcR3WBbY2RGFdwcDc8vMf1mG9LB8duGAvGP4YyPawBPmgpqzUisU8KvLWFRLMVH",
  "key24": "3L1XPkqpBYNRZs3FfP2dyG4vjJYsrFuxdNFirAu46GJWbFtUMy5sN7hh7LRehWTgcupripcKnXTQDUrxs6u1tStF",
  "key25": "3kXU1La9K9dZJy5KSpnXZRQUFNKGVQ2gV7tDHn8g99sts5dbwc72uowYcXMSWvMtxg4gi48sibwhR3YYrxoCbFGw",
  "key26": "5diLnLd82ycb1rXwp8MAoXqYRn5AYVwtfRrcFPEwbZACWsKnvB881Mi3DXg3Pzxfqo9p1L7bG1oGqmDasmMiMZHx",
  "key27": "4uguojiYriGkQ84Ng6dmhWLiV5zZTRaEWJxFePKqf4sfLB5zCHzZPirWzFX8P8YPVfsVRfBujjmTGN1u4oyu4X9W",
  "key28": "2hpsnfiTJcwD6TaeeUpsG44SMoRmmrQFXY5fowjU1gHrKYscyMzVjjdNTGRBDpWMY4ewvfKvQGZwYU1daXNPDtKU",
  "key29": "H3i4AuGhUauR2qBcQm4BYyfXo48jgLQnTAfKuZ6LP6j1tQzLXLMPrUCjLdn9QFy1qYR72icE3LfHUDWSxvqssWu",
  "key30": "4EsMwUt4A92mp7uyQXJpFxNmxqKeXgTt6NATBGVfkm3GytsWBxZURkisMujGPPENvPEL9mdHqNB81pjZ4YTU3dKi",
  "key31": "4ppz1k3MJwdxb9eBXbS54hGxRu5NuVVNNxswt9pn3D28k6u1MhfZeH1SWM9aqbNaZZoWzwWfNkCq4jFzaxCQiytz",
  "key32": "3WGhVjykuD7PiDh8rBJWSHDYYEdtGc3UjHNKNyZGSn91iDKzDaKbd4XJRmAfRJoZ4za8QvmN4N5SQmFs8dSdrdTZ",
  "key33": "2WMsUeR61DwLs5hZ4HZPq7bLwKkzvR5CfxHMzPgKXc7dMjyzARQdVeTk7UJL8QxXhe7bKWqpwhi6yuuNUxcDSwuu",
  "key34": "616Rv1QPmAMMaCHku1hvNZDF3GocfLXLkbFMMag43d9EQZwP9ndqRpkwNpKdEcfWS6CgdDLZLYMotv3txVCo9AiE",
  "key35": "5yHqKCNKygWYnDii736XUvHiDUqJyvcUbimBaDdAAerRvRCFwNM1CDiBCHgBC6Wni7Yt3zSb55s9sRiP2u2aB3b3",
  "key36": "4iekSG3MoNghsgBNjbWuCuarGc2pLc8hPk9Rmu43ws8TTCzqHZhrNSBuWtwk3YjGpdDh9UsvQb8NEq9opAPdBXG2"
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
