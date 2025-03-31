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
    "4DzFY2AtxYrffdwbWjDfaf1kic77ggh5kUwakmdnCboYcbYt82N88jtjRRwj2KfRyxH8TnvXb4yGKTMeSDBWnGbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kty9p8rKrTCKDqhvLNbhRbBd1PhVkbRkK2hENKTnbhFg1SMqxuP2tSYHyMcaA3v4hJTD3jQcVVytZSRv3RHofsE",
  "key1": "2S9aVETif4jif9h4cSv9K8NxM71Xtaiiw9eyTfE2qxZm9tia4SiSPRfmNV6AZzWV4mjVm1GQipmr6keAb9bcz6h4",
  "key2": "59ztSwRdVVFFu6j5jhPRKkwm54vnfAPKn5EBvCNy8dT2Z1mcUop5TKscyY2GaokJ4ER93d7DebChXu5aUNAqute3",
  "key3": "xxBveeGfng5BbpvNHZDR9VS7X8t8rB2UjycnhA67PVHHtybs3PAXrFXcNBz1PbJtjW5JMFg12SYgtCivycKzSDv",
  "key4": "5tzj6SPtfsZy54pMxNTJcGPhL6DVEZAj3NU7fe5o4525qsJc3t24yDK4bMYvjhZYtDvLpfU2QmcEDECam3TT4gDN",
  "key5": "5SgNhJ4BiHmhPcKe8W6aoWEh6t1DVBWEXMM796mBW8Y9wfrMip7qCBKQUfwVB6pmiJMUeBZdm4Yt54RUGmb6Te1p",
  "key6": "3bus9cCVL3YWpCrgxSnRd85zMiaXTdmiqHYQCeLQAzcyGpLYvzdjawYhk6Bp36nPQA3AcxwyV9LdmkuX4EYRRCa",
  "key7": "3v1Sv32fBUJXecZjRfQCSVXGi2GzLX7YzWaTJzJXKZGJjjc1p7GQtmxPXuwzWgjK96hyTqJjGkSsTXE8CCVryaJf",
  "key8": "55C58ZD8YiyPYDErjamXxPC3qcJbRj327LP6YJeEW61m8UyEQY4yczYrj5FdgvSB9mNx7Lg3xx5WbTmj8ZY641qj",
  "key9": "5oMdop9JYHoQ2RY9RM4b5NKN2gjpDAHJCYq2dnn8s4GRFLWN1F26HpWYS9ct1RMrCDVtZ3Bg81iFAdqz4vRAUJGV",
  "key10": "2uAKL3TcNnsJkkqn9FHbN9bJEo3nqrnovtFp7DdauDYp9ejYvwnMpnJTVmmNwoMzxtNfKW2sjTxncxgXB5xZE6K7",
  "key11": "5fH98YfHNqpNJSa7UJR6spGcZU97KSvCCtGDi5dciDSP5Jg5HWDZiop8dn67Yq7h2TfkCQzAgRzzMdwjG9G2HZcE",
  "key12": "3PcR6hxVdYwKUF4q3LpFReVMdXSTCamGC8ERxLiqN6vckp2TFRCGbx6AkKy24hbY1XBauhwCcWL24PkGPBH7p8UT",
  "key13": "3Vovic7s24PFvsWhstdWJPpSgJwtTsH4x3mkEKVhaVo76i1FWuunZpxGsZwL1knaUjFqUV1Fxzwe6izTz78ZWNnU",
  "key14": "3EKN9civ22YkvD8wCQENmCUuTcTnABM6q8CLhdujH4U21C6Kp8cAYbc47DPiyHtnPrnvTJGBUT7fEMhNjQKJfAx",
  "key15": "4c4nnA8TR85Chc98n2pYB97wobyYvbYJerj7ZQJjS6yZpjx8F2oGEYLVEVmM2okiE38ZGoYteYVHGNT4AkbgPGNc",
  "key16": "4FcSZW9zFge3CKqtXbL1LRRup7uAHx24LRNzfce5hb6fW5xqM45Yv1xG8ma8YsfSp76FAXTy2zMdABfakLxufbRF",
  "key17": "5DJNZ7kNAQ2C1gCZL3sBYxHUuE1JNE1GgsYGbHFMH9DsvkL2L4YVEVL6YHmaYNx4pdtDQo25PUkvC16pbd4iGVgd",
  "key18": "5ptNtg5i7TWiovMRmCWbYwgFq2sFQ1UMYJHrrHwxNLEEMQPQNTeKMaLkJQuacicJry7UmSHMWKfypT7U3574eRJy",
  "key19": "5gKHSm3QENCaDYxLzzDsV6d87FhA4EnioCXND9e6K5FEhEjwqF6hKnhJBwkj2UCNeaD2rkcx8CA2pww8GW4cC6W3",
  "key20": "67g6h9KqLu6uSiCLZex7aEiEjuRV52jC8TBvVYaSfAeepNqKwwYTs6hv1zUEQ1ve7GLMmjRVjVw8QReuiiy76kCe",
  "key21": "2YPFrPR78zEJQFBw9jVPh9MBEeMVYntjV3YbyFvQYTkU4NwqTDZLYGQDN1X3KZW1aiuEAYVyJGZTm8jsjjJ87gqR",
  "key22": "35gqGDFBjCEJu5hMmmx7SEDVpJTQfpN5YZTqaj9VCcse7R3rWpazL3B52zCQdR93BpCmjHb82yP5GZL38V2E2Rhr",
  "key23": "4C2BLhiK267m9cPGvVEehvnNgqYA4k8fM3jN4WFQio4pY8zyBZoWxSGed6Yo95mnUDVM8PTAKPnVNxcxWGX173BW",
  "key24": "pf6A1rYuCUjBQ1D31jPtRdfjQS7qdtHn73LjK5tc9qSJcdirRFhzBi7mVBYZozi5rHnFzzHqxXDuaMNAFcQjzYE",
  "key25": "6yB2SKPocdFjLd9kV9AqAE6tJ6ey6aS3o4fm2UXMgLcJhswbxJ3ZtoWyxw5C6UFqG5zVixn5EtbYzU4KHBPZrPr",
  "key26": "5FirTSWekyACbzCEK4i7wr9nh29NV7PZCGdWtZ1AsoQQMEyzkHbwu3QR1mxZdqqSzT9VLXTpDcy2YfJSogoMenMy",
  "key27": "ZqXxxjafzAupTGix1fBaEZVUnyXWLNo6W6qkZByhoxDWWciBqE8tNCRJjPywHEHEPrEe4Nh8bnzZukeq2wXFufP",
  "key28": "5yNuTaL6GtC2bZaQTwT9QVjCpw4dBzsrfxprdkLDx6WtnYpSZS6WTF2U7t7PjQyt7TPV1KF2r7Ki4vmeAfHwGtAs",
  "key29": "3kghdMc7oUCm7zXJbpZL4jsPieoxMe5RMey2aWMwWbB4LhDym2rxumvBfnrG31wZnJREesD5LfESErsV5EexTdH9",
  "key30": "4FDba2D6sMkFsfYAdysCE7iYkQYwumCxgsGw3XEbL6ZcHuU8pgQa1knkMAtWrfvtV4ie1FXotPSugTy2siLisQT1",
  "key31": "4NM5DXSFn7phE71Rduxebfc1csndPXJE2oyN22zsBWF4jtQ5n57cKMkeRdRHbuH5s37vBhXzoGjspoNEbeag7y5d",
  "key32": "4opLGAYP1u5K3eFaoqgPMwUXR9sZeyunmeouv65MUPd1EXkLg615MKQS4DsvhJVMTdXcD6PYWkGz3HEaZge5oZDM",
  "key33": "K48zFxYUE1ZZikK5F86QWWxEMv1hhGFr63EWEaqSJv1ppK6dNStgnEPR3iaf7UTqV5qyF9eQjfmWUpjdRQ3Pdqa",
  "key34": "jj7UszVtMBGMnZoKXhKcJH3gYerJWVpVEFxyYcidyePqDUJzd5Atmys28A3y1yZDEZvrbJhJ9fUBZpJY7WcSQru",
  "key35": "2KytwLvvrbyCr6hKKHdbVQSzQuzGtouMzy74zAHpQgQPs2jbLADqqZosUB5czKfodCQL9sA8sqBfrPaD1a9KKWpV",
  "key36": "c99RDR18fJDBboGR4RN9hpjp95HsnbFxdXcE72AuKxsgrHYedj7V1HCYaVQAiTWFaMssp7HpFJzmJWgyR2ENGNX",
  "key37": "67Vjv8eF2qr84XzHMRbayoQ4Qy81MyK5an6mE4NbDxona15jsXcspqfSL4NX1XN6UYdoFftQ4b565YnvyNwXPzUJ",
  "key38": "5w2h7UUyDRtnq21Z8cqKpwNuot5T7t17ERQaqnToYbHH4WmWHz57YBhSKKg4H5k85Kp6136swLSG4dYYUD25Fo1R",
  "key39": "CTWKzD7jS9sVVbef4Af7xRUtbepTTdV78qkdj63AqXanm3BoqPovc5E4V2P5bZQgaz3eTcGjGvdhsGSd13UvmVP",
  "key40": "HncVg4E8FdBM45q6diu3kdB3drbn9nbZxjz2SwpF5ByycGc1b9dMfzD62iZcU5vCNVXYhzungmgUFA467VN98Sx",
  "key41": "5PKFHzrvDZn5VNNJaVsm5kcpnAkqLf3XeiXUt8CbuiSswE2XAU4DdriYFhXsNPGNXp4AxHDmw7qLqukJPEga9979",
  "key42": "3r7aNQp2MzYTgp7TVwsmwXND2NpUZJ4MT6sYr7eLHyn3MsGQnfAhMX9o7wyxBxtJqnPrDyeMxBd4HSFqVysUNYmE",
  "key43": "5bQ5nJtEzBQq7pB96xjQzYpZ8UGaCTkMq5VmESM1NUzj1DHPDqnwf3uh82sTs2SJPPjLX7WxzCFoe9kjV3x36Wmd"
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
