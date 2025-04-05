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
    "39fD4eL84J1bq3GuFSjRJ8wAKgXrgTmBwLJaZBDQ56Sszzg8TFkxU4n9bJRasdFnkibw6T7CSTCjo4Um4wAw5WV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hh3zUDnj2EkzaCW61px4ukdZBa3P9XQSeJqRELMVxoMN9yNkwdnT5J7aNZ7GAaCDquAo4YRDiDrNkBzdhXoiDXN",
  "key1": "5PxtJbEMV4zLjdgb2PHwsATXJvUksBHjdQyEtNZTFEcZHLUEJDDJgzXep2rLULAX5XwRWUf7rEN6xbfk3arBJ3rH",
  "key2": "57QBuFe9tQ8K5TkPv57gGwifr2UVVhSWbadzC1Ttjggkbp9AXSK1Z428oGfyynVJsNK3i2cKgjoQwX2TV18KXgkB",
  "key3": "3LXHNbTzagv5V8P7DDK8fHUfvMgBB86iDAF9JgGYgmc1ar2Ht4DrnC8fJbgGq3fK6zUeB9NRQV9zm4Jwon8gP9HZ",
  "key4": "3gFo6xaN3z7oNth2eZKCHo37HgowiLneLtk6MLd3asQT5HQrvMoesK3ewgYBmeTdUSKG4JVRG7g6kskfGgjLyCAg",
  "key5": "2Uezqj9xV2wUFq9fTTiEmMYHCW957vYeWW3cbD9Tm9stdmbUwKQY99wdgvEKh5VgtxSvoNguH8q2DVanvMQbNYAS",
  "key6": "37rxKCjSu2CZms2EMntWgXnumGnNqqASjxcN9NX7khttyKUTBdL4uEQQjXqXFeGZtnHRaUSusoud8uGGjc83PkHZ",
  "key7": "3eKE5NXXrevYd2rAvhQscaSDy5zXJjc6EWVswE8iNaBtEPvTJz5WqoT6UG3iHCQYjYrx3W6nEhw35T7VPDBNifjs",
  "key8": "znAm3bR9kUBRMKSeTMZJFSVRR3EgEX1r4xFEeTrrSphYUAKPTiMUL29Wd26kcnjwkuH4MwRXDX9ERbp9Tjb66w9",
  "key9": "4bEGaGp9P6CzJdU5yv49UzQLFZF1UuNNEgAyvkeSxVZVvtDVmmBPnuE6xqEoKbGH3YhWY4DFQgDb4nRJqWjigv7a",
  "key10": "5EKbeags95ceNbR2ARJJtgfrz8J4faM2rWnSqQxCzhrbtZPJJGteuYwp19H4JZSrCwjjWH3s2NUbM9ZRMGMGnHnW",
  "key11": "41EqcyomhSSJuHS9d9TmR3ajFrr5ADwoSWBKWiMJgXWEDUJnjZQh3vGstAgDvkdBc1AeyLny8pGUebNQ6MsZAFNr",
  "key12": "3qu5bDYdrfw9hh1nS5XBcNR96SKccvKvKhLuq42CdVmmotGJ54gMYqpS6KnqTzgjtVfNCiRw3NXy535646nj25EY",
  "key13": "28CBoqn4ervLmj1Q2p9NWW2Zfpk7YiscVCHWub8srr1yCEDZguk54ZRSWa3vgF3Ho1xE713jd8wQHQFwGUVDjyJg",
  "key14": "TrJGmz4Ce5zvHcgh6sreoL979NZ99oQHGr5HJYd6akbZYv1mXH8GTdah2qR8krhJ5W5q5R1ZoP587esz3xh5Avr",
  "key15": "5u7nS2ehZKg4bJphET3V8ppdVW6P2Ld1jsPbQKNHcDHiF2VWbT4Ac5Eq2YZ7umjXUoRmh5kiGGMkgx3rx6ZPJb6Z",
  "key16": "5pCek3fKQaYEuZRxPcVUvM5pDLpY54y3BsLH8sUpVAakK8P6o43QkzVLs6eef8zf9aaXYYLdwSJEr7whqNrVZtdt",
  "key17": "5VEKeLd2CQ47z8g2Cryxeu7dn8scMBNkVw7TLYKS6g2QBH1vx9kgkRrhHCeQtkUWd4QBV15LtGDxXVjcGApe1m9B",
  "key18": "TeqPSSa58ik5CRX57aCufwWWqow5eFMyjqDnGgxMdu8An7Yyx1ZnKSPFXBybQ8AQrccn8iB5ywhC1Xag1PRUFsY",
  "key19": "2CnCEp8u2vxA3BDRGKoE4aUvBRzpvUSzKXDobYgMJGopizods8HWHE2B98HwLa6QDpouangHrRu879TVF6fji34w",
  "key20": "4hd9nPpGzWTk4ttoDVVyntcKNSJ6tEVT9KDzN4hjKvn6pZykR6vthCFTHKJobLbd6eez3C6SdSYgeQpqMS7V2Zg4",
  "key21": "51WQfv2bBPqRLmVknvciKRWkGJLj6c5ypJyfnQFMN7qKiXXPb6QLp9z5eaMeSsXDKCNRaJKTgHHmXEvhWFPAutb8",
  "key22": "5LFcgztHNk7VDvdBPLb8RPBMNPY4ijRio84Dv8ayr4cez56xeiksQa7WTLB9yQJbNbUUjkJHYh6cqPLvFg7hfdpf",
  "key23": "3WtP1FGrJJytvd5PUYuW2YVgeP7dR95SiAtQRECCu1vH1QgwjJRuRqE7xrVh2472XHGNtkLBmV3CdRiMwHR3RCsw",
  "key24": "3vBQPKMjXAskxYiZ7pLXNfCQ5Nu3q72iKCQVR9mcvwZKp5cdkngTud2JPxKSWFFJ855hDQ6AP9iGVs4KzUs4Zrkx",
  "key25": "2LWGFevSD826Ra4ZjBmew6JjiXJu5cUtzji7yDyx3WHuWSZRmLx7psLjjDKUwvvGhik8E1BQRYedpH64MnwNNA8m",
  "key26": "5rx9RL4aPqEbFGovjqbyNpP2pesd2CJHz9jq5tHBzkghAZqf7za8KvW4tn7VTHbZa1k57NwBVtsHDGUktR3XeGJy",
  "key27": "3jWuK28Y7GKW6Ae9wyApt1MZRLWp15gBKgdspwV2pykcXy3bHA3Prn8GY2otmXm5oQkNPZ31F5DiRVtBG2Srj6oL",
  "key28": "5VwceEgNV1eyWQt5fZ2ZxKWDgLk5zoS83PkQNy8p5bfhWbE86Xv3vsTvaG34qDtEFU8p1sWobQNmC8f9FtaxMmSA",
  "key29": "2fBQ8Grx2dtkyeAKbjdMpzhrCipoU68HTzoJGnwzAYnP7Zj9a9ijJXGXoAvfkd5n2ZZVfQ92GTqbxJDtAh3WTogQ",
  "key30": "cXzRbwC7riXcBqApW5xdPp8sawMcRbjKXcSodw5Vj2SbAQ8NnWm24scGzTpjNJWegiFn138JdJH5gwN3KRMoZtq",
  "key31": "4bBGdX79pugUuU4cny9Tnr4cwe67nVHZpr2DVuu5xLYiVHW3MT55odoNxbLPnAvv4Ed5VdpCHqw1Z2UbnbbFW8ZZ",
  "key32": "2KNqSWgzzdrQ4Y4qsNDZDd5m5zEXJ6QYjXRspyrE4oRJaogUE1LLrrb95b5Yb1y9mApBKceWDfaMSaE2qRrha5pW",
  "key33": "5ZNodHydjGgvWo1LyqpeTnB2Y52ESwyznbF5s4Kec2JJ7fCH89Do2bqacmCsYR1C43jxTTHE3krAq1XEMZY4UHN6",
  "key34": "2hSZFzXZEHQdssQX6axMxMWPhj4ofbtQPWVpJXGTQWokNTcmW6qc46SjY8fsTDspdf4iRGfyAqzWWWwT6J6qSPE8",
  "key35": "64H4R8vQxyZV2DSeirVbpopaEsHmWw15h4dDVcxTjm9YB3v7yTrBMuPym2z7R6mD4BmvUEdEiDqjh5Y6QuAyXxm"
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
