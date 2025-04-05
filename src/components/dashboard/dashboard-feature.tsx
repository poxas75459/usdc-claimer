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
    "51ejrjRwYrLwzygpYPya4b2yLQ1E2hN4x9Wbgk2R19JCfZwChkQG45uVukGK7eiHhsURNyMq4XyqUCUpwZBHnoph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4junm2ZWPFQEBwxYSYiGTt4LSZddzkGLo4b1B7L7jHrGDkz368FwXTVqKAMq6obndSSKBnc3TbnfgjdmQ4aVACrd",
  "key1": "FeEKhJjYaxgD8RZcuMyva4dLmE5icnQ3h2LZTFQfDJoNM5ct4RfN7Jvwv7mbHeHkgDd5B3FRf7vqshgqHacwQrU",
  "key2": "4Kw1tB9hupQGnZELKk1PXeQeGcS8BXevdhGkBzPRn86khD9Z2P7ENvxSSho6TCLKNYC4dLcKhUSqGusWwnoUHg1D",
  "key3": "4CYbTrRr8GqBDNF9CCYAj6YjNb1CtPfm53iQvZEArnvxuET3hfZKzRvikGbajK2bqWsM3LdsoMJoAVbK6a6U3nnW",
  "key4": "32d2EwSfD7FuSdJTBVtkF6r9FE482jGM37jNtjYfbs76hpo81jhFANX4f5hjicMmq1yPs5PoZiuMiBoDyKxcnqw",
  "key5": "5CjQZYmRVCK8NXNcfx6QRoGdiM7hT1Ew4XoJHFzFoCpUnEqT2qiCoVFujKMLuiJhYSwoKYDpJWAnfNCb9SFi2kF2",
  "key6": "D7gUWYhzh13eBhzPk5qmmB5WiiAdSG4MUHpTLH74Z8XiyG8oJEchb5k7stPK6y6ipWomrRhC8S149UE93RSQmyQ",
  "key7": "vxJbjnpsfJ3dgJnGqRK77NPjUtyV95HvMG8NtusnksNamL8rojMGjW3VLSBwDp6wi6Zh5WC22q2nWTqgWRUCGTR",
  "key8": "45BGpE8gb53NPh5dnQ4w7mv8SSYG8TW7ERsrAZy3JiupJWnDKCG15AD3Hina3EtPzfyYHdT3yLnCR9mYCxNdDLWd",
  "key9": "3YP1SYVpCzYHiJs4rFTYnxGj2iL95vZM3s24paD8DjStkXL8ufcSdzKiJ5DygWrgA9t3uwipT24VoqskgMUJLLPx",
  "key10": "5mygrAzPViBHZLqeVvwezyPLiSBpeddZ5NwowdcKWSezm8gUQLnz9AVChkHKBSsLLhRqvcKwLpm2A9owKp3x9UBw",
  "key11": "2HBicE4YGoazYCGn5wvNMDYdJ8fAPseQJYTxp9ZN7oAHtrRtzwb332tnLLQJLaubAoyaof1bD3RACamWLwMq2kUN",
  "key12": "5vLLm5eRJnBnnJfVfdTj6CWTu1bvdfDUX3SVAkqUGnLzBiXRLurd9HgWfMQ1tYhCUCqq4U4oJW5LLiubdZ4GfvXu",
  "key13": "2Chn7jFrKZbbYkyHP66TjvmmNKjn6xSDFkS6W6MyfQw5sCq87ZYhz5w58uyaxvYT1GNW7uxRQXDJ7Bq9s4bKmyUL",
  "key14": "CwPpHBP2WUcyS7PGqpvi4UPRLoEzJx5WsFwqWQcSdjkam9eREMEAEgUNsZJ6YX9Re2Qy4Sh7DLDJFycKGrM4hAd",
  "key15": "4eV1JNJ2BQMyowM6qXx2sJZdvM1CqqECYaPEWf2uzt6isR2H7tE6LUB6dRPEo5ZURRWmx2LvF6nNBY1rCJjU6WdM",
  "key16": "2nEbL6NRe2AnJnQ9V73FMvDWQErREVBuCbYLHad1v1aafB3ahu9qmFHjVWugyUGvEoNjoA5UheAfc45sNgjWjzCz",
  "key17": "4hcRbVUXU2dy49CBcstzNds9JA8chYvghvqBzgYET3gZgFpMjHpyDNpp6WcPFcY3GNowBizc3xaGvwaaxVUN2FhU",
  "key18": "2RXLzCyniNFGX8V7Cjgtf2ai1NnaFeemxTjhhmK4mALmkh6pHh59eqqV65cqM6M87zgYpHtXxgEr3xB7vueSzVpt",
  "key19": "5YT4xPyS4gU3jpSTwwpzYrR9CoRqAooM9RCtdMfDV9bAURwqcZkocq37HyZjbPzH3NopmuwMJSZvgE8f76dvBmXU",
  "key20": "QB588QQAfkRUT15gYCuD7iXwvt1vbGDBkYSHp8VXca3KfYpqRjExDJmA7kVZw8uP3sQefqvZ2eQPESqLWgepduf",
  "key21": "7LXxm4VhVFKnH2XhDwZW8pYvPE5ff7s3vAihuQMgy51vJXPCLdyUr7uqa2NxF3bQo8rutDqDubE99QKwT1v6ynB",
  "key22": "52ztpvionmHQrc2UUYyAW8kg19fD73ZXdSD9tR3XD79WGYT11BheVrPNif22cC3NBz6wqbj9WLPaHQuop3asqdJE",
  "key23": "35b74ESKm7B5Upxp6ZD5bFbm7SLC6WAJFZbE3hj5zbke1WigmRTvNNY6ssK2DosyJzdh1VdPgrB5F7bMnnZSLmqu",
  "key24": "2QuomRit3erA1Fqz8YEc8hteuqFwdfbwbJg61QuF9Z5wAV4aHRxXXZqWfvLsshucNZzYfhL6Hifffehajj2dupaW",
  "key25": "5PFTx8wSR3a5m6DVHqa7fCojMLkwabfjxKvQNfpvWbdiyD8KHytVcBUkaqA2pPyjLG93xsa9QqC4z5TJKnaB9XFj",
  "key26": "2fLZXCcBuhUz3jdSab8ZYWkq5MbZEqFSVdiGN4B2jcsnd77fahdrMXQKD33XBToFyQuK8PAg3fHPAk1m17ryemoi",
  "key27": "8mMRSycV6QM7jgSxbDTzRcc4Xque347S944aDg9GsCkd9cTeeYpuGVfztqB6Scye7q45roKR9wBeeS9CBTvAGLP",
  "key28": "ruYMJmHfdhbTz9L2V7RLAbZMJhJ7R1v5EpeoohfBQ2iHgTRZc7d73SFutaQd4732DrpcQZBqVNDYGzfiPzX8Bb1",
  "key29": "5hNBitfat26nSKUVtDpgdft4L5ZNeuNQUrFp5sxTaJfKzaPE7FsCPRSCXkLMu5Cf9F6LNVtq11rLvxvUMmNfUbwL",
  "key30": "2KZuEqujTyS6tTDPJuKfyc67ET5vYe7175m5tp9pf3rRnQ6ukpVQRV3FoAozDmMErABRnjxQNbnDjiCgZwA38iVd",
  "key31": "4K5F4oJszB28YEP2RDBwumsk9PXqsEKPnPcscoXaULgyQqfJgfVz5sGuQQtfSm85tpVh7fKBeC77Kg2eqLzAxvE9",
  "key32": "61ajbP9pR7CFqfQ4yxFeJGETsPahajkPTWVKXRRRCfQhxi4qoVs1Hy2pc8VTzgghanGhZrUYBAdAQyQekuH7redx",
  "key33": "2gwWB18q2fP6CizYwJqNmmbaDHuRUaTHZrhAR88ua2US5B7YAArVDyXMXtk3WZfPebKPqyznkeohVwytdHadkv2E",
  "key34": "3faHDuX17u7HqjrfC7RPQ3pvtk48Aed6EPBmfACycqCn3KnqpEjseWH7QCacNuqp7Ns1ZRpwvtZjFo93EWvqwSMV",
  "key35": "2B5g82ZDUdhBrWuvWUZMntR2WSVCrhzvboxTLoY18CYDXG5aGm5sW1SgJj6AgMracFiJXBBcAjx6dWyPjkNdubCg",
  "key36": "2LxoUPBzdhTwogkrP4Ren7fdhyfRmLK3VQPKYG2VDQKCT42Z2oaB5oNSXQxHLch6os31qLCg6aXaDSpf2QXi9KU8",
  "key37": "5Q72VwWDisLEvVBSsWVdkXU8GTcLNpsggHbCixdRNdJyFev3XpNTR1JRgDLWzjaBvPAsXZ1wYfSzcC2yTBftujUH",
  "key38": "5JuuoNVbJ68GtRjjBqYFpeSfz8EXRQmWrY8BdLkiys5sAsCsygakadhQ2RqKDuiT3A8vFuLgM6fViHeKCWQ2FQ2E",
  "key39": "3XBwiWhSu6zruMzgEnUs3C4hw7rgUzpUynQ6jpGYhq93vcyKMRokKxsBPGNNTLWpW4Uxh9SsYudrbPyJ5S9iA9Mm",
  "key40": "5p6eUhwAHqeeMxJmsPSdEHyLbBZVhBpZRnVeQaJ2fxjui8JFjYtNgju5uu27Da3FKs6NiTK79N3WWpzFr5r8VQLx",
  "key41": "NZaiHmfHiAsqtnUoEXddmGf3ZqQ5SpXdfS7b7R6Ry9rh7N1hkfK7n6iPX6iDYBtkNNiwSzFxmyGHy8vGRobwT3d",
  "key42": "4LPdaHPjFr9YP2PMi5LKTRW2KtiXobwn5aKFCNgchzepHz6nyuzxfJ5RA1o4shJhwBgnAa8DdDL4vhCLC3tvQu1E",
  "key43": "2fXXfxQDUNcBz9JUvbEEFVACc7fJHdWCSKJdLjdhW48YdgRhRPyk7ArViF1vNsaDR3MHr4KbtfArN66UR7GmogMQ",
  "key44": "4GumaYhDxzYrohEJZHycD9LKXRYdHTct4J7rxQGaWJDWe5shfqW7GsfusgMRGtH1JwMzh6CU7pagAqaNUmLp3akn",
  "key45": "4fyC1s1LJDA2X9jRt5GvmZEvH12H8Kw6BBhKrMrYDrChXP3fBrb2R49p8ZSkD9zerjyGMMxENBDCxxTMonXisd5P",
  "key46": "5fN6ACciv6D329YXgj5DJwK87CURKf45CxZ26Yu2qsoLquNCiPF3gGkGUaAy2U4iZ9h1a4gvrkYLuZZHDZQ9sY9g"
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
