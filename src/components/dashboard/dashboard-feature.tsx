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
    "2BRN5anGQVnGfFdFTZ35xsVUaaGEwabqbqnFPJgSJphhAy2JpfCvFByFwJszFv2rEig1GcTusMM2dZ1kxavrPCE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WimeUcAw38uxDqkNtyoDMWnZ64ds2vZ9Z3GW35DWKiHzgVhuVUzuGJgTx7pEKdL6ud2fGHEW5a3jtX2XKRwESDa",
  "key1": "3UVL5QFWaV3Hhj29fFUbxwMoEWBKwQhpeP8x74V83BUAcN7mhPbnCNU9SAyRbJ8GE6AMvTJ7Efz137gRmKENz3xt",
  "key2": "3gUqFJiRjdmAP79GYTBK5EFamgyRLP7QX9t3o6pj4CsLJgAC925YD5jNWgbyXKTFv9iMWJffYPvu1oe1LpJ3akKG",
  "key3": "3Cw1L7g6UexNdDh2Y561TXJWvytrN8Q27mdjjygDgYHdhbGXDtuzSaRNagt6LeSfMv1CiXASozajV6gX1kdYAF3Q",
  "key4": "2GTem4gmbg4rPqpvuKCh6PEpZhGSwtBEd6nzJWb7uPs5VwDFb7SyJbB7r2ftrEeYsyG7ZSUQ43jRwTsS2kudcTaw",
  "key5": "2BFQnC1mseEk2Mx3oagmPZWKdtnzdttTmBuNxDaFgefAzxRswuVWFagGBggF561GicvyLD6Gb6A7uVyCQzb4QSBz",
  "key6": "38K3NvrjMuECTUfcgzocEHLFPGqsatW4vD3ZZnFDGfMp2G3zGK1zxaz52NoqMRkqAVacJU4QoKreXesE8SeYfGMX",
  "key7": "sGN84HbTg846YEvVwkvCAgdhJCTjbKzrUGB6chTMQJVBgSWByrxhsDaukycjPCNKPGJYJS4kYZcNKT2f4MJs7sV",
  "key8": "e2u5rPS1TmoZxbEkuEpYgVg5xyYwe8Axvh5HSLXuNzt42m85uzLVRWX4S9uMnYyTguzLyq7jdPhEwhUhK2fiRUq",
  "key9": "64jaUmC5XQTiGsfDugXoKRAYTBQ4bMystqRE6PQJrjc8hxJtempzqDhxXPphvF3Q4dvmHWdpEcn2DWSWtJ7v7Rsc",
  "key10": "2sEtocbvQRMpkRXBCoZoEqQMkhpxCzs54iT74UnA9mhNtgGB4kVLjb4K5MR1KffgZrptCX2gYsmnGH7NkqYWD7xS",
  "key11": "5R23oSZVEAuMBC68ht2SyGWgsB4QUqa9MSiVGRyFQWFKGn1pTBvC4QbDSZ3i7JHFQRN2mcTYPHRTh6cELvYdUEqh",
  "key12": "3iRfTBsax2TvCUKjHcDkDLjRykB4dkrnJGUVqv7QE4wUspGj89cpj3m5BpzTELg7Gj4vGsoY8DWhzDR8wRHX9CSB",
  "key13": "5XvZpjFDKMhDNbixET4f5W5Xw7ZbGqTbCdeJqnDrF3oqFQ951fuWdptodUqVWpqQT1A2DC6R1UTbgPnvJw3Sdggi",
  "key14": "43aGeo5ne7tgNgP9G9jAH5KgYRcXRfCgTTdiiyZYziorFjbgkxr2kh4qhkb9HdT3azy3jKLYfc34hJdS2aZEX5Qv",
  "key15": "rThS4pBuf4c8HtJMLtu3vV1EAZtqsXW32hU9DhyKFF5wQStkhfYojpcpDJJLQFjbDqNWy5B62qSAcsrz9ZDHTei",
  "key16": "4TwU5P7VumoTwKQGcN5mDVvojXSWPgwd2M2Avi1GMZ9dWxJqoji62ApjMckYyBp4yL1VvxjwFYVQn9WM45PGMBfd",
  "key17": "3D8cJL1GVWdFKyPFUeHWLzwePbCiXzZau5n8VVgs93fR6jonuN211WbM5fDmURVD3XCuh6Y2wqh5PN1KYRgD7Sbs",
  "key18": "54JKB7Wu7ta7ribavvwcyT4ZMh1BFBuyeXBv6JSiXrmZAB7uuC8edTfX7LnFj1cZS4D6yAF2nd9PBVJ9h5gxRvT2",
  "key19": "2QmnCe54UXPxcX5iCtezPDbrmcgd3BfmLS3J2yykLMYaaDXxJZvT4KUSFjESQBBF4CV8gkfTuWjL3CUSyT9gXH93",
  "key20": "2dUfVjhTDZxSwDZV6CQyB62yhdAASQkJMRsqjAHXrMAcaWNUgxXswkUZM4dqN4QvtEvbeZChQ2qXPzrdDdFkRYX8",
  "key21": "4NwRKC1oi4HVxqEqiMHhDe9unWZqSF8W7pppaP6iDad5oydJngyaQVMKLbxVkTuxbwYE7hXx9TyKqqCGPZBVgcdL",
  "key22": "2HVUCDEMp1ta7zgzqGusJvVjsRSa6CBPVdWwV6NsB95h4F16P3p59nV9324faF8j865pPKrGejy9AhKJ2bsJSDdK",
  "key23": "2Us55c5WFpmGydT6LGU5253GTti3efxyVpiFyLcJEkBZUooQud86TnuxLxN6GheSAzTeFj1BvPKf7N2F5YtccDqp",
  "key24": "4n3AapayYRT6RWMtpGE7jeD7cE2eoEpNqbotJRMxofGEkkNR28krZjLdbP1kzJrEcTLx9anJFT6yUHf7RdNS6TyE",
  "key25": "4ahn2PjhPEd4T4Qd6XciqspcTYEQVATyz3Fj1ExUXJ5NqRijH3AXDgsZjZ48iN1heq1Yow1eAhG5c3TDmxSDUHHP",
  "key26": "2hWGALnX4Ccn6QcsT2ocVsfFqQ7K8xbWxeEwRcGaRkitQdriGFCkgcKPUec5WYWZMyafzUYsZURhrPDZ1sZtRQQc",
  "key27": "ekMvBqcBUpNT5oAPhYJjJMTGi1U9UxGG7nx5pWqhwY8svDmqtbt42cV8tJtXpGmNRgzLeKVDG8RUnqi1NtWxMez",
  "key28": "4C3PYDDMeLyTBZ8rKqDx1gPN2oRCDrioR2uK8SFTafdzxDBmYT1ab73Ls4GiDj1Vck2d7vSX9BMA69w68LhUGScW",
  "key29": "3e3RB18MqBM4vE9ZG7brgNgwyf1vVQiuKKDcRmQACUL96qaqAKDWhzu3i9LBaE1TDdjrx38TdGHBPGg7UAfYxVGo",
  "key30": "2VBDEGQJ4ipG97ubWwsBdcTWBKtbuHkG346bE3eoJriXx8yWWEEork4cUBqpc94eMawoeM7QicV5ScpGdrWCywa1",
  "key31": "2owvBAwu2g7j5yisim7NxvRmBznT5hpxGgQo19ZvotLzgUA98dKNorRK3MR1yKmN7RLZSr8bT1TLnnfSD3trYtmL",
  "key32": "5Vi4EcDpZHoYMfnS2Ndwmnm1mjiKsi5NdxTCn4iH2k3Dt245dcz3z2y7oTgweiZkzJsvmFdXPwaz7zxAGCj6vWHg",
  "key33": "3kozF9se7sQor5QpNQEp9nBBm6vqXmMTUpkA17HAXGbLrm55uofdvpGeqDzBrxw9W4WYMRM7SZRq8ko2JGvh2SAL",
  "key34": "4S41nGkk29c3ttXdxGHitNAjLJwy1DEumGanFaMUpDANNEfRfTPiDjrqJ48nnibRLBwTqahXfH4edohZrWM79751",
  "key35": "66CQa4bryFHeTCc2mUqbhyuQKGDVnnSKh4ncBvgLrZiHLVr9JVdG7cDCSStQ6y1roDBQwRSHXwAzrduMYCQbYqmt",
  "key36": "2sxL2ysTMyAg6MQFbENZ98DKiLC3P5Z4D2Lr8eU8HQG9m2JXwXuRC4pbYjgfByDC3aTHAASphDtbM6XGkjnEHnS",
  "key37": "Lc4QM88yDmrfNDtC2iqzL1PZFQ1ix24GX25J7cks9TzKt9XVZeQFhmah5xT77BRtqrQsy4kkSMAaFoLBjCDspH2"
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
