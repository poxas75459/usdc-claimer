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
    "2bEMCUnamiSm5f2kM8epCdQhkTGRaNy9cUGvC3omMxo3wdrkgAAWjNL7GLjYXeVDsoxxwDnTn8Vr8XHgLtM5tmdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzrEwWSPNmXDYRNTpevcnx6pR5U8oErWvjM325jPetiGUoXH5BVDoE6P93eBox7ZB1ezKyYrezQzmP6qstGmVtN",
  "key1": "5ZrsRDs6wZB9KvaAsApYS3i945bCjFEDevLmwnc2sanK9Uc9siaVWAZjobBNUUBKgigM2ZQeiSwKq11WR2Lwnbrp",
  "key2": "3GC4jSEq7B8AZePpSKzjTscibEszH6XMuQKMmbNDx33z7rqggnzjdTKLix79qewUFmufDed8kVLbuCVnJcUMJoFK",
  "key3": "45yjV7PVSphwn12K972dNDd46diPbAznSDu141X34gyRF9k6HfMmKJvX8Spo7eZje5eff9XtzKWSd9UX3vU4cwJw",
  "key4": "2UCZdLJyaWfCF3pLkPxXMUc4zzVNeLhyE9ay1xBGKtezddv3ztTLKPgoXxcmzqY6x2R2U8iqZc6b6MkRVqKDmm5H",
  "key5": "3Ygh31pEFWwHMG739j7Jmjc2pHhs4nF1fwf6C912ijr1PPsTsHAE2S6kN3UkHWKNB5QjYwJZsrkAeX8jasRCbXji",
  "key6": "2mtTDP1MRRubHCsgtr1n2zhhNALwFYsBj2o9kpqkXVKMdM3WM2PMA3W9pGVnzWkP1yCp5VBuGH1aPvwkY7ijDxFm",
  "key7": "4LwJCanDesoMhJQvNeAjJBsaPjDkzD1jCD4EY2yuW1J6QQEykZxcj13v2HVYCPnSejBGQvtpLdKQkghgj3d1wmrB",
  "key8": "21UPLsBjnoP6SvzbtffkXgzpDEC2mkKkhPAaAeUQHUKe1HFq3U78db4gFcC1DdqMdeVvPvTHEJWKjqu18TkFNa5y",
  "key9": "3kuQREexLwD2eny3JjZgwpmbDkeAKcVFaoQTCpHvTsUpgzmVmgyhH8RuCa5GmPPBb8gvdE2xAykNzegAmNb9rWxa",
  "key10": "N1ViczTjEZ3qN5AjiJjBQ9YjPckn8Y6Hzb8PVEPLxkcj1V62dwMG2RfrazjWgGdQDfYs5o2ex8PgoD9CRELe3g9",
  "key11": "4KXJ5sUsrLhFsQb1qSPtyVQpMA2yzzkHtEBNPZknFH6xFZh1gSvFiTmjqjkUfd59q7Wg6zjqcaHkW1GyJwCgYuaX",
  "key12": "3E2dBCiLQzVxeQqgKdQ2yuqroMzWKwVq8SAoCUvT3y8wVncnwoc7tVw4Me9xWsDm2Yd4oZkavZttQAtadcAzpyUU",
  "key13": "notiVXuXCWhY4YCAbqU6BBCz5UDix4BAMB2LdSMQEphRDhJsTZyzqMGhrQF588XRR8RrYM51gnNDz3gTKEhMZqE",
  "key14": "2kP32ZPz27LwUubQcShyKodrFMVoYTTaXse4qwhg38bti3zbX2wCNt3YMHpmG61Jr8zCWAVsncUb6k42vfDSMPdB",
  "key15": "3797yvcBxagazP9vo2xf4vaiCkk9gVzT9XFyjAcBHdtVb3YSf9vgcg3Fvjtvkqg88bmMdmVeRHkHFsoSbzPPn8yU",
  "key16": "TtHzAXXuTV5us3qWnzMfVwSwAaZWKgmbJnHgL27v2HAKiASQEasvbco3zyvfTyndbcWA4kT9wbLqkN9TR2W5Uif",
  "key17": "51XBPyLzkYLzzQoPkos5TNFTBQGkHM8yoXCVUM1HQAKDtztv2F2sj7tw9FYtGceC2ejMvsBtui4zdT8StFH4SEAt",
  "key18": "5GfeYxR6vodekvPhkcKLj9UkCZvSUAc3iBCfJgKBjAurDHLvh79NGnKoEwxDidHrVG2YpZNCERSPM5npXWi5sUs2",
  "key19": "3dLupX4e6xmyPQFqGnkzZYUfTqM9DdFQWQB9rpHsRiwokeT8xBWcUTyqCSYBKSLxzbVgyGf4w952sJh565QH73i6",
  "key20": "3pAUpJiEfyMT5oKSbaS16znqoLJTNYG25nTJXCgZdw3dowgivgEB9jp3eEg1B9ifpnnkWURLJWCWk4wrP1YjYQUG",
  "key21": "4HpxUqpe3hTikvkhKhwQXB737haaKVDiRsaRsqxgRBYqYn8HLas13JmbmLxf6791b1FpwVq84V1G9hYRCyUapw5C",
  "key22": "5JmRhc4ZHpFEJoDr3cvyXNV7XUN9PuW9wqaJpfRbfqcfMAnHbY2rBgLTcyPoWMXoaNu85UmFDbeZ5v4iSyCHi5XF",
  "key23": "2PBZp2CK41yuTesVHCBEKScmZ5yoCDqtyNujxBnVY2oVzDxc6YYx88MFiYp1iZmmADAQhTNPzt1CiiYNYCR7LK8Q",
  "key24": "3P4wXcyGpNjJi4RtJoPzi3dcQx7sw3nVZTwysfk9xgrPMZJsjJxhhbkauQ4LGnUfDU7yyadK2etf9PMAKqpswJmN",
  "key25": "2WXrs1MNuRiTLJvie3K5qfHxde7MNdL99zywUN8QNTLZgvLdxhK6Eit9TJdS2VkLG1CcGtpYKo3Br5F9RCmaZG3y",
  "key26": "5RbxLKRcNdnn5mLwrx4PXxzbT2TxqPXiutYBWXfjQtjbg5cXgWEEqWvTzbMTmfPKjLgUPYa67ubt5i6C249uXZB9",
  "key27": "4sJ2FrKVLQN9QGFZX9Gp2RNQLg5eG4BhfN6DNXqCpvSZZPkYDihzdpubHogspxvygVMPP3WQGHgDhD3u9oxmFUne",
  "key28": "66J2E5xySxK8U9xgytd7UfQvUmWXdjLqgN3kQujN9x1SE4WGD9fi85WQK6dbHkWkCA8XZDyY1Cx7zjVW5dbyhASG",
  "key29": "5LDoBrGT9FdLF3qrWn8VJW1AVFdxPggyrDhseSJ9r7yW16UAf7Nny5q5bsRbjiaMcrBFcZRVJaUuwQ4y7cUDeqzd",
  "key30": "5kUtesT99Jh3H4kMvPPyrwH9mjMJkQn2CNScE9RR2HMwhgZQoiVt5VaQaiKVhwVzb9k5uRY9d53awk9JqfCrBb4b",
  "key31": "5dURXhFEwYDCb8nrWYLGpBYRF4kkwYbNUrET5YoUXxVeyX2xbjM5sqDWJNLFQNUR71LaVaCoLTaUVCxmP2dw7A8h",
  "key32": "5BkYPeuwc123kJ2jFPY6ZwFAinXQnrhf8nDH11s6N67KWNhf5z6Jcp3fmmL9A7q5e5BMbLRApEjbHGtzg1dQdgid",
  "key33": "4dWUcK3CwPeWwJx7vY9oBh6Ey6w8ijiCDphYXRWaFcugEuTAPfYzN2MkQTSTb6J4aYLmibFgEoeiqrrq4ZND3q8x",
  "key34": "3F2UDNi4NRwh37XzCxtXE8Exk3pmDMQ18VaaSGbG7kSoZfDhKVoffS3EmoMR2dbGovuuor3oN4HufuXfC4XihWXt",
  "key35": "dCr1qFrSCbCwPtTmSkmT84F6vUFXLrTkEiWo1FXpMrbiZpqPpjdCu9HaUKBCghhCnECZkWs3B9e8C8desbTzYn3",
  "key36": "JxbK6yn1oUJthQagxqe4vdU41mdboGmzLFwxLD69t6SfDumAS1HCuTN3EbCeWrL576Z2mbkS6cR5AQn4XtpZV5g",
  "key37": "4wDbLZ3w3GUM35iiKm7n6NEkGxqQRNhTxsUPPauDMRTyboPaZ4hjjiwcw133zJ4X4tEWrNtewmrXhhsLGPJxUycE",
  "key38": "5M3zULtjfhqmvgPCK5g92vjNqejZVSyMSV1QrMzf963k9jU7Vq1BvKXtiWsTydcisBhr9wzwjRCcv36Uun6FnJ1J",
  "key39": "5SSjyG3BowRftu9z4z3YQK14grzYj4kz4bQkXa5qoAtG9Bwgn8hYmwGSNRXv75TbRczXQLC3XUNjjr3amDhARjz5",
  "key40": "f4c2qtR4XoRdbQLEmwMjCkbRxwnE1yE5w9B66LCNr8e2PCsU8J2PBgp6f2XBdTXpxwVuDtwJDAUmAUXX6gDbJrE",
  "key41": "3qK755fQmsKoo666iKqTdJrs5LPxnBktsKCLnyYDxzTRVJA6aSjCxGrWjxymaJRKtJ6FKKVqwZvgyv662gAzQupE",
  "key42": "2B2hJFu1LGmPscYoVcRzwcdFKcmhzYTywPqxj35Sn5JtoSvAbUtS6mrhoFyjufr4WgjoviQZvM3afctgCGbjYnuc"
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
