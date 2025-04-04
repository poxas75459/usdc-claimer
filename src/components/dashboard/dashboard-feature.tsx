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
    "3U3vCzcy5oJztUKhQzeHH5qdE9jUha2p5TYD7Mw7z7ywZ7PTSeXhaZNnYhyvJgeUYUwJqZZ7GUonRy8DzpyHHEP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395nT1w5a8WbAoKjtQJMBE2djixmKuJANiw6WXTECSpuUgbzGx7CqCY9gkSiokphMegWFEugzmr1613aURStXDCk",
  "key1": "2YRQcmxMyYzaKCJoix7ithML4KgakiWxvi2gA9ZgxPFvQ9HuzN9GtHKMhPmqTvbANFQn6iNxgv28L4TMGzUnMgG8",
  "key2": "LBC4tNw3X5TW5zULrZyJFFMVpxQ6k6uDEcQhohqg8YK3AjSJYQjHV799353M6iCwsXvEdYonETrKqE8iDVypNjE",
  "key3": "4CLrhiSJBbMts5jKqJ3RXsCxtCAY3GC9jZmmYDyGjp3x4wp61VEwsRz1C8AMvYAz5KfjRREZ89LvLhoLZrgD8BCn",
  "key4": "45KVpUWwtja1T3JxUcUrhRCd1ymLkX8VwUJeS8yhKBTLw4bnUgSDDJYa5jPoCE9Z3Qwzker7KB5R1n724oifWSFi",
  "key5": "x6D4bzAjH35HmmHDfnZtFMo1XF2bLtiNSxuajHZeXMUmrrQNUXtXZDWXhFsUA8JdcMtuGhZXkAxsuAyS2dQ77i1",
  "key6": "3AzVYMZGAsiHKQvy3oczuWE14wgWsKQAxuYHhJFsDkvTJvr6ykDUpxercmKrCVPsuePVcjfWV1PzyBa9bLohUVS1",
  "key7": "51xnm1g7dgrTiTPxWy83Ht1sry7ezy3V5Aq7P81XeaoyeHuJTubed7ZM7YBKbGBz7Df25sV3vZ7bRw5MDNuZAeKn",
  "key8": "36N6EaomqVFM3F737LENZCTBPjQPpae7pJUYE9sYRu5QA9bGk3n6gwgL64g8PVD5mnRRsFnwGHEZWKeXXyzmcc4n",
  "key9": "2dBM9yskuGzcH8qHvWMwe4FP9nRY6YtBPWXvQytPKEYd8vgAtH4UdjFFijg84QohQTENx3SQ1FrVjUPDrknVLAgy",
  "key10": "3ABzQTKWDRbAcUUmZVH1CGESQZH6674N2He88MMAu5hAwkyvqpSezejRFDegWf3au4kPtKpg9EHa4zL5KhZdrAE5",
  "key11": "cxVoaAG3MWAcWGYz9psMbqki6AAY5g5Z8ncQGYarPYY3vstwMtQwDRgifYSm9qcHeVG3H8UxzLBQk7yULz9JVZf",
  "key12": "4NRhYkm1RCR3aNpd62QFddG7ceLnd56ssaa2Fe7zZHJdQYzb2N8tsNXm6FxW8YS1pZrUCAgCyce3tVRJLhL79VTt",
  "key13": "2jxNbMcJ4hMjtVotN149NLQWFhRwz4SdCxM9pGwDaFiewjFDPx4jjgg1XRVFVxYeXQbes1FhjehTScZ2a5Qf2D8d",
  "key14": "2mf58ypgu94ZiswFJko8624SZNUKFjUyfRaMLgjNZfL4zRN6sK3JQcfEYmHp1za3K6Tvhfr7tMiwqyF517hhnUwx",
  "key15": "3VUv3TxpxCZakCJxrn4n9eNRXL1zGdjJ81z7WhS8PiunhvpAbKPftziLHsYCCWzCcj7i7XQ7NSVqJQABungDwJB3",
  "key16": "28nhYT1j6ULXCBa3QNUx7vKf2X3FwJTK1H9f2y8oznS9pSZsX3VMKGkNMsYZJycL4qfcWyh2kxUX5PtdnaGTuV74",
  "key17": "3pVKgZNbhM6dXCLr4NWqHqogayCx8eQHmiHy5rokY8BnhNEoDUM4ckbjpZdiWkW5f79etn9roMY6DrNoPBkEXGei",
  "key18": "RWfXwKYkChWKgm2P8vk8cf54ysHVH87ryTGyXkyxnDP4dHpwoCSvwMqbjMprfMF2BhwK9uNMGZ7YQk4vSx2cV3k",
  "key19": "4Ku6bSn19VBLcUq2Pvd1SEWJ4dDcBf54vngWm4uRcrDkAGgvbaA1eTHrhk41kanjEKAkfAmRiBi1wedsoRhMkSoG",
  "key20": "52e5XNSpoigfekmZwXdu9Ymy4hbhVa1p9swaNJA8gpccVjyk8aHpy87ymKaRKEP9oDRDifAhTL5NM9fsbPCanM9",
  "key21": "3QdNDh5tLGWjCd25bDfFsR1ALPPMRh7Hfi7TxZgrhK58M79CmFLk2RjQpBipDSPzFtxudX5oPj7anf18r3194N35",
  "key22": "3qRirAEEk4eGzhJcqqyQwfy7aKx9zumHMcBzeY1eDv4XWUzsDcTiop3RTZBT6ZrWQrVhPifanKz7YpEnfou3iZbi",
  "key23": "3m78dRBjG6mfnXHBnUnifoUnCkVVBQEEk2TW4c3FBH6obJBw3DUR5uEMr3VzdWW4wruEnYeSQkRE7Bi3w7nnGveM",
  "key24": "2y7dR2EqLpkjRStbp1hRQH6wZzrADqKKcWKiowS5zkZnr2r1qy2Ep5uBMXNNdG9gnYUcx3PwSETYgfzE95MhSnJs",
  "key25": "4DS5cVC6CiHh1FohE8NbMbujVVpfZAbhBzUaAYi7TrMvZWuVedn2pqw7TZzyESDHBRUZ4pJhiwh1uMmdd2yHTSga",
  "key26": "5zJxnDuGBn8xkyt7vHTaiB2tJLK2FoitbeStzP4T632ETEZJFZwdpjemi7xUCYnS9GAW3oUXWdim23LEry9K5DMh",
  "key27": "2dJdXvPLayeU1YGJxHEKQoHeU7dEjvGQe445HWe9satJwqbZ4k2nmQF9uYc1kvuHRuq8MXzqJf7UtV5JLUASGC5S",
  "key28": "3cXMAKU9BerW1cDyBsj2kXXcn8uhDE7i1VcBEB7phha1cPhBqGFYUSqQvxqLDfRTfaG7SqeQ9h3rbnjvshu3fjCV",
  "key29": "3nEKhwr5JzshdEqMrVffh5ChppDFU445EDyFh2CKThwBevrcTd8BYLWRR2c8qfRcf29vYR4PX63xD8Qo3tNnUfbG",
  "key30": "3bsv5rqsCPuQKbrAye52k51n3wsY6XJtzMyHyLPNHmUVQ57GQUhg981FT6epPqkc61B3bBef2YtjSBgHaNVc3KB5",
  "key31": "3Hmg3qNuY4rL5JKiG7rJLpyFugT5NQZasCwxosvEZNyZT7bb2SESHhf8i5skxcSoYxtjbFXyGxjoByXHbNDFbdLe",
  "key32": "4fKsG5NJz9o63qmdDLbRscDLXPZGGYH5YebzzzkKRRqNLxFDwCE1f9eUJLeB7r6a3EJXamM7qGiw9885U13gYpfN",
  "key33": "293BzCwGjFtfBYy4pZwB97rNRcHiemBCBSSwW5F9hiYaAetxndwBu5nyfLcpKKVpgSGf2Dho5hZmZdzb8crQZfhs",
  "key34": "5Sa997fj4SuxyGSYs5cTFeH3SySNX8Ju9QZcaWKGW82rdEvVCZJ8GfCv22GeBJtuvPKhTDeqaw1cP9erikCSeSFQ",
  "key35": "5DNAvN5F876umkWGmzfevvoxQHx7vomn5VC1rkAnm3uTCvhjkL1dmPNYJqRk3fNFv8YLi4iK2V4GuhoAYpuxpJvr",
  "key36": "4ESRbbYGCzK7wuQUfNszoi55TZ5EvfX63S35isg4BvnU8btx7V13CrNL5E3zdXrzmAjp6nCVYA1y8ZWen2ZpPb6S",
  "key37": "Rv2Ueq7emKssU8MZhsyauKjb66SwJ5DF9xomwmyRYMfeS9Lv6Usbh3M1HJ3mNLKTL5iiKvVe7orQQcUrqn3Ff8k",
  "key38": "2rjkXQbTj2zhGkSJwKmjdxHUSfEAidchzwCQA99WP4F1Mhm81CPyYUsb9uNDEuFUNQWsCaeCRBHv73eefesGQXdi",
  "key39": "9mwr7unJ6SxjrgvBqBSTktZJ91zVpXG2aJgD2YddkNaQoDu3THhtgBiXXMoxWZ3XebENRRFWtke41NhxoErHtpA",
  "key40": "2TmRveRXPciUxgRQdgmDgxnbQ9P34zHq9DHeWjnAG4CcwefsA4M21XukLZVV1CCKj8FZYBm71qbhgV7Fe65haori",
  "key41": "3h3mP1Qj59Fq5NA92KdwvYS3jbFbLVHoban97FfHfNiNL6ryxpXaGCZUEDsDMVLQ723k3pbL8MTXqxJJ2kSmXwzN",
  "key42": "32pbyjeBbpRVz41d2Nao9LoDTGZNTf6VzH1q7z8Cy35ma7SEBDbWThHbqD5GJsgqTdFApuWmnf9yZXsDSNGU4Giy"
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
