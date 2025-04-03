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
    "4N3ZE7FTVjd8MAw9DkbaB71bpdqB3wbWRbcqdg2bMh5o8YFY6j4H23w876JWVpV1p5NuNGZPNzxemaCDVD3y1XZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247ygcm2TiPwC5qfFDwD1KVRrPvxYnmeK3fKS5aA6GGQc26tcNQcq7Tw53NCcZWzoqxwkAnSSENNv4RDxiijZpRH",
  "key1": "653RwRtgz1XVFUQyMnAKfTF7fQuoyg1LRLGZ6WJQJfW9u5mXedZPY2H5cKonRbCfSTu45SaSVa5SK8XeqCt9K2Ji",
  "key2": "uEkkJiP6tWjqhA7PkfcARbpbZbmKcUDsGwP1jfC5EtWnheRcnvGfjGz5Mhqi44ow71yuqvfQJEr95ZDEqbAGkkk",
  "key3": "2bo3SSbxzY6MhF4bKYbtDHQ1vTovTE7vHt3nzfnjCKTaWSY5xZwaGH8BDevv1GMwTVFoxWZKZDeU1nKEyioLo7w8",
  "key4": "4XyTpMktm1ngZBtac4xgrSG5dxjkci4B7hZy3NUXJYsmQPRJswKemfGwDLQyTSM5Nxnzvg3oZmJ1wgbakEp7MEdf",
  "key5": "9eGrKWQR95t1hz7Q6QtoJSpXjEVhCw34gmRsGifsF9ekzGen3wHSXcJKdDSgA7ufDUzkCfYfM5yeK17HA2TMs5K",
  "key6": "3aw24oY4yAz7v4KzsGsrEMQ2xtpWtcGRTyzC6WLpaABFNEBDsyU5GLsG9YxNMVESR7pkEEUbTiLdKduG4mR7NV9f",
  "key7": "412fzrq9nnZs8srtCC6jyymnrNVnqpHjPbpVcGzHyRRH3G86uwjzcUdrXrVHPDNyutxRuNxh5t4dcZyAU4reQxCN",
  "key8": "cmnLZiA32iqSiKbSjQU2KD5xM8o7XpaYxfTA89sSY8946eUcqN7iqqCarspaUteDJHRVcJzHCRSm8qw6SFoUH37",
  "key9": "NK8tTr6d6cLcfnuUrZpTJHVNxCr8LekRHttWVcVgsRuV9pKHioy7nmSyaadgQPgW1S3YtSindoZAVChvtuecbMR",
  "key10": "2ozNUZEExzX4kVqPpmGUVC9SgLSYvBW5fUqUhb188coVuDeLx2iYAjCksiewVZUqZpBAVAow73ppHAk2NtqytJrk",
  "key11": "dqLzFfHvaNJSko6nQrEu1X9REmjA423aAYq9bdZ2YCpxT2ZJcrxi5VpxM7ikQ3Y4CRCRP1cT3sz95FJPibuFb6e",
  "key12": "2Qc56fi2GVfbMhrxA3AXuzt17qaxyn4y3ehxX2ME3KRztHbuY6HpL9XmuMJtT7dTEopgFD4rXMjJ6ctxLn3NYqvg",
  "key13": "4Ztz22SYhNLe6vuF9utjs8f2LLRMYZjTxYfFMmNwJUP1DfcG6Yw9s4tWooJQq7CG4toMzXdYo28iLpq9ES1hknPd",
  "key14": "4D6pQBNPz1x4RGjPaMnrw3dyaLk9ArqV9WbBXEhGKDbJMppfkakibNCukv5rQnNfJt9R337aX8mga6L82AZeN1XN",
  "key15": "2A3H3GSQLjGm9L7b7rx4fD1rNRVtcoRdsUcJHnj2TRctPVZb3jXtF4ypzy4Vq184cv434oLNgyY3qeLWCGxSeruB",
  "key16": "43krvGszYzovxuJWCu16atasgdygGuVnxj9z5vRJhByv7s39zvdmwX8NuYKTZF9NDr14Uaujr1Kvfit1DW3xW2Td",
  "key17": "2ubxzd9uNo9hqy1SvsUj9KPwE6J4CU45qhFrX45mvos87MvEEMWriJUYavqPZqyfVoYznxUvYkNcMM2nHepeYkVf",
  "key18": "37VeiTWefW2osifgWntpfNy4yLWq2jdLpBH6KE1tjecxcW2jVnzNVZcLkVygzXnDAusnnFtmZNR3oeZspYZ1FCMo",
  "key19": "3PHCd9dhNgZwHHaXNXr6Kh8es6ik4Qe5C2e45HoGnuXPTdg1YDWtfcP2bLd2cKwf1yuMugTqouTPRLKadUERMRfR",
  "key20": "435FbnvzbhY9iTe1tG3WoJkw14YEdR6ncheGkDNGLzFepmra1Awy5grhbAydiFKWWtTs5NF7uyZDHvJobXQx8k47",
  "key21": "5LdKFhjR9VV1Xd3vGnzLi4BFjgLs8hZm16kXsNRonsiGZkm3GuUDwCTZjZ2wx8J7iw5kUZEDT11AJ3st4V9Y9juV",
  "key22": "3YDwA3quy7qpgeNWhgDyagJLAXqGEeaUwk54hWJnSoA2ck3VUR2fPMwYuSmpkbZUZeZNARMtGT3tmrKAUScoWmyY",
  "key23": "5p9poBFeuGjpthsFKAAoS2mf9G2obe7f7DgdN8F6KMwj7QkgSvt6wyPpUvAf1gpKLhGAb2RkmDyaZwowvCNuu1ka",
  "key24": "66TutJ79jFxoQDnUKgarjcEZtstiVGtDp7fZxKbdnkiMBVu6P5oH2L6qqoTSucKWrZKUuapaa65ewEuy1fPm2Tin",
  "key25": "29ZaEkiJmoBBqXdfShcMZfTm2Jp2TLcdhyd2hnmGZGANpcAzvQS8SgLyXGVHRoPxm35jkcVnRmJRvSijrxLCYERt",
  "key26": "bCpN4kyoMAGhE86EedXs6cxPHz2NoiNyEzsWm5wKesRJybXT4NKLfxMcyZizd9jhMwSGdeJQgpBra59spuVF7Fc",
  "key27": "38RZDr9e5gV3HzdEmYf3NBvGMUt8FF3a4SxevCmXsbMXPVKrcdeqHJiAZsUZZ4sekPBDX4DmNgiysGp2DjKGDp1g",
  "key28": "5gRGw982PpGJgRrHNvLKbxDfuqW4sRy7hKrtUsrhRWqMz5Yj64D7wJs5KRgKGBrLvscY3d4ScgZu4VLCc8RULmjB",
  "key29": "QwbfKVeJJTvTvR1ziZ76oneJRKGpNgTiFz1xU3R4oJMhHWh1NzPpvTiJp4cQBbb27qJy7TXE7B1N8ikJ4ZrnFz6",
  "key30": "4MRGTG2E4yyzhWEKFzr4D5zPyvzCQrYJZwfgS3TFWD8ZfWUNVax75xeS4zqw4GouGdHQSmKYM1ptqabthPVxfDpU",
  "key31": "3SKF9iS2RzLXDreM7S4VDjUvHMf3iuBp4AnDeukjh6qtUcC87fuJgkMHSNEHBFE328rWtKRUrgZ6PjHFVXkFkGx1",
  "key32": "8ZPgUvNPUWQR9zHa3Fxi4zEGekoyiHDBkgdepjVE2SZnLodqbUsb8LWKvG8JFVHbSxeUTtM3zazJC7CciDGbwpB",
  "key33": "4JWsXRtSt6mBs3vuRwrJt3rsGXxgoZwGemR76yMbyFBxMbrq21METYf4XKZZjv1bi6FPmq64TtKLahujBnMRsR7K",
  "key34": "56DXXpFfaAAi7oecwYDq9N4BL9ef4WaciGasRXVdZTw2kwbiWyhJWXvrA5G2tRGGM7h4G8JffeaVW6UPpismAYAF",
  "key35": "3Jcrv2XcToVRDF2orhHT1ZKXEeVsHC6hDNpUwWY9v57a6BLtKMCjctXPJ2Qo88VkvuPS9VPN2j27w9BtMa6EXiZ1",
  "key36": "5m6CJHBKVAk1qxRdHc7uTX4aTQzbbhRrhAnSLKUU62fSsjy4zmLDG1DYzXj2QDZapnSwQdFCUnzXJAgnTyC5euT2",
  "key37": "3FvszVZVEgTNUF2FcYzRvt5Cm6aoYzKsLj9QsqU8ofn4RaVS3gnt2dVhDhP6jrVouK3o5bTdC2yFwjhX2G9JmS8r",
  "key38": "3TwjNTBiH32zTMSdifcfRRG5QFy6jh5eAMmchrDabga1MeoiCtfQT4oALdHZAT6hUQbaCynfgW3cmyARjJcnMTYf",
  "key39": "hqeddA6G8ivTEH9NgLRMZNiqxct8fdaWkoj3tDQbfXcnNCAEmzh52mSE73VtAATykZdN96ZeuDkwGaBWiTtTAZ2",
  "key40": "4uz2r5SKftxUHa2K1YQRff16Zw1ChLvTcQZAJCcX4QYbTf9FyfNTRwftBsxPMthPeMC9Y1wKmsBW7hYUPDKkjQBb",
  "key41": "q6SxoK2wyyZtr7eWqKzT3tqzwJHaAvY7VAzcQXRmVpiR7m2Jia5guDo5eUySjfKSFGC586cuh4RtQdYA3J33fEX",
  "key42": "5r4L3JGWWpCd9Jmj5nLgTPeZWQUWij8Ns7436zr7NjEZhgGr9tddWB15rTs4hqWLodbdnjVK4B6qr6ejzT7zoY6Z"
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
