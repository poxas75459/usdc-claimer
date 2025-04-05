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
    "2bsrnunL6K1SkoanokGu1S9wtcYNYDS1PrJaH7rmw8v7UgzkGsebQ219Y9MQap2Vwzjw3kJMYZLRnW1d8xFx6Dvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GizTESQmHokjoDbeoeBxrwkkMoDwFdbHoUtVX2jrjpjKqVBbBTGknwVa7GjTq334bDd2yxA65xS7Fv9gcb5jQSk",
  "key1": "47CcWtdXyfU3cH94vE2DR2wtNJJroUvTQ1aymCgWGraDSaN7qypD8iz1eAFsKHRzw6pD7XxfvCry3bkL1Zv4rre6",
  "key2": "5bdUgFg9NCTqE6Zwq7NzRzCtfCQfDA16F9Vn9hRAbhRKRqUGxn31VMjZgS7kXPimDA3cUrL2aRcHvXFTi4DbGEvm",
  "key3": "3yTJVLdApUujSnNYkVgT2VBQKdjbWwUHNvb85bYvNEBcqrbs2MjGzg3stFg4F5J2qyuqsfPbVkuVkf1kUoCoCuu2",
  "key4": "3AhBeQr2oFhJKJ9pgruLPV39qAfxoSEocy2QnMAZRhrur8FcCwJddkSK8V78MmwhiLH4xjmYgKvue7f8roPMsQKm",
  "key5": "4NviK2asfTbXwGRF7qXirVcJHHCj1LQAwsLWvQrSJYwDgHoaZr5uYqMLZHAZa8AuGGW2c4cjsdrYVAtn9scVMw3F",
  "key6": "2zuqo5hasp2M71FFBPhvVgHNw8Kj8rbumgTnbz3gYfZZFmHTDGFCqb7b1kmThPCY57g6sCHXP7Pugogqu3pfkW3p",
  "key7": "5wBg7igitLNkyJ3HJd5svBVdYNiVxASNFuony38k3WXpm3jq8hVDuzbDpGTrxfWPu7zh4QsoH3oVxUR1uQ1VMicH",
  "key8": "387socvQtBSg4uJwzJ2TFgBACNjDijQsbkNonnY7Fxs5tTGRzTMdGbc2oMEzrTg1xADvrrdvwxkCoohfoFNptALX",
  "key9": "28PzcSz3jQU6mcawrNXCTsrWmDJ2ScHyRPffFWEv9WG4nJP3NJjtkuqLCxcn25XSxE2VXQ2fDxtiZxUqpZPbDwKp",
  "key10": "3fmuRorweaqV9hzwk3VhewwQFjYp42i65wd69qvQLappwu4vF4T5PEaAEKw65VkHjBh85hEsmdnih2CQyUyZYYSF",
  "key11": "4h7RAEvXFerwFWfCsvo2hZmdk3ZLNAAv5faHweqYDHiHs7oFngT9khwtqwApATWEKXwmjL3EygZD7FsXbkVT2gwN",
  "key12": "41dDBheDHskYt63GW6C3bDFz6hHkMKoz2Ec2dzz3UF1x6sC6FqXjBh4Vo7tgSpAgEqcVUumQ3qx69R4xRaC69TyK",
  "key13": "4seoDSaqseqR4sxXSy4LwV3FovW35rKtMnsfpaFEaUSXK8L518w8tVR1WVVVFyw8E6L2exyTs6LBAZ9chJJsuSD8",
  "key14": "3ChGvkXFk7DbwQkDXTWEPFa5Ks34aWNNXMQjR6QkZQ8XQvy45J99inbnp3yeRfUVfDGFgu4k3FwvDBt8CSjZbtMU",
  "key15": "2j5hQZU86tToVchwQTw7fxV1MgrSkFmhcvXXEu3kcjs8KaZa9citm1oSpT8bdz3cfoPrziGgnFCX9Y2e8JARxSku",
  "key16": "4uhJHHxqKRYtFpwLHCx8xHQcc3y8nz5Mm1JbkQt1Dq8g31Sp9JF1UdeHTDC9CRkq3bwJw9MLbowja7cRuVsimGab",
  "key17": "2DwxYoqHyEDMcBqUgoUBcJtKyjyqdqYW8PdTquLrmDBwkfq6dZhzTrQkVDZjyBkBRZQNTDsgXJeWjdUUWYTUE8hk",
  "key18": "23XWzffeAGgMhQDope26m2xXLM6B64sTSDKaPkytbrEfVRk78iBjNv6ohN262LfSDMmQmfCPpHxsERonyFFN41Jd",
  "key19": "2RMgio8k2nZmxW24nFnLdD2voD5R1EFU51JLkyTGaiwuiDLo92SqMupYEUriJSsRpogdKK1cNJa3tPWCT6H8Ue5s",
  "key20": "4CrdWZEjL81fHvKjUbGHJviRWcgE1pEAgL2MZxwTA6pq9nKYtWDHJh61M35VWYzodo3TorRZQ5KAUTvkNhyAjyvU",
  "key21": "4CH4ufVohnfG9iUQWbjJWFyAi2vbakKFDbDCXX14JWVmAXjeaCkVsgppYTQ5Eufs7jvp4yFYtisWDDyQRnAA6JmH",
  "key22": "3UCyuPnDRC67mGQAUYvmLg66ERe6sSbitchziaxALSfxh6qsEQar3yrM6mG7h9mV32P5jc2bo6tnhcAHmDaFNVv3",
  "key23": "3WUsnr5AEL8pHFrqqzpQ7tvVguLG2AFSJY2qJ7r2WAhFv1Kv1UG6i1VEWnBp7ahhkAukurVR1YQnKfaChmQh7tEA",
  "key24": "w41gSKV5tydGEHR2M7Fv84k9y6FhbU32kzmmfegHgomeXQvknA92DayoevjwNbvH5a7GTYP3axjFqAjTdeFio7s",
  "key25": "465UvUx8ksdajUq9qpX9mDMmMfShTLGJnFeb3LAsm15stJMyLJsHZCsN14XcGPHwYBMtp1jdKSPD6FJ8fe5PJcbf",
  "key26": "3e6jvRdZjUV7D93dR6Eg9tXbe5gzs7YYC57an9pywgbgiTHFvPkCj3VbWxYHyFUbdKosMVXyCEBaQDrjMFN7d1zf",
  "key27": "5rceobEWAvDCd87ECqBVJb7GsqTgTprQWZ6qfCL6aidDV4zGt7zgFWvgj2oMFYz56RNEgMBrVorVp7yfwkEmbDe3",
  "key28": "5q1JXiogeC31poLkAJGxabXGosHqqHZ7ff78TMaf4TehdDfRsKSBfWPNq1qcx2unW97hr59Er12za3PT7iTpMTHa",
  "key29": "qx99MMod2cHnpDxh18vED6Mmigw2MeSEN3w2Ce1SXRBbHSVY8rjVYwdprDSFxnsW7uKVwrxvGFBdYa3zCmTCuvW",
  "key30": "2hbP64Can9V3zQwkbQPhJu2e6dccBxpaCyH2AQPuKhTeGG9s3fYT1QKP5DEaqc15EzYV8u6aj1tKiEESjBUxr53D",
  "key31": "56M86v8z21baUNwgjSzckkBH15BuiZPRr9BpxLS27yQdyofcUmrpVFgbPceCNvoqKJ4SvREHmDqAyEnCxNeMhbkq",
  "key32": "3CEKhACUuAT3hZNsbDaiZAHvze5pW6s1ZAkaANCizeZW1fhdXESt5CKzrXBjomvBEGWYdu6kNX5CQuLUBH2ojezu",
  "key33": "aAxPxGA7PEHqW9hpMiDTp6EXBMjmCBRGWdU5iQw3PBJruvqCR7WBiu9V2e3o5jAnMdEasu8EYA2VL2xrof4Py2d",
  "key34": "4twMcoz67ByChgy5VydnmfRWfvBjjuhNjmducAFNdafFyYRXwC4w5EodyHAvybaWkj6WK4uzn1cb5wK3VM3PmeUj",
  "key35": "mgjkMUx4J5ZcRzxaFJXVf5TFG6WJs3QH5f6KqTFKCMNfegdjybcHVGpQyfSQutv3f72HaJE7sTG3iiwwXtt7oLy",
  "key36": "4EgfmokUUB9pwfEV4q7hAhAkcF86oseoQZG6Z6y5v9ArxmnRraNERqri6h5oUvtjYEwKrM6eqfog1BbrT89tAn8a",
  "key37": "2PXnLxtfLhBTExoXWBEJPmgkqJD1yuVpgqwnTe7uHzaaBe7Gf1YmYNhcNVZ9zrwMYCPdcU8N4jFNQrUjLSviFbA5",
  "key38": "5fCLAAdKVD3hCnyjNsQtxgg5HBcmTopARhceFpkUzwa1Wznec3DmuMDNBadfithWGhnUhfhZQbhJEK9PqhuaV4mF",
  "key39": "5Qrs3YNHvFo89LcmYMMkzWgGviWGrDNct1v1Zr3XMkTa8t71wnvuwGKeTzboWd5YoPsBFa8yW4G7WWaN97cEeKcV",
  "key40": "32ak1gp2WB63otfm3mNF3PLtLHaWpoy7vV5az4enrAhwk6xVTrczHzUn1kj1DLZSknFiiPBs6ZcBRUGaW4c1Kssj",
  "key41": "Si9Fo8bfmjcBLvAHZ2zQi7jmoXYfV69eNSJUKURxX3kCyhNE35JiWBGFeUfKfFt2nqU3PdXoeCUER3Ae5jkFAh8",
  "key42": "3oRThJByhRvK4waWmY87QSqEndjiaam7oeNQJRTJExN8vjs5K4cf9UhyqKy9HnBaxTwd5bFte6nStwwu77yxRuDv",
  "key43": "32oAtro7ZGKvqbGpCvDpKdUWVLmrpPGctvJYjmNH667ke4EYWLwhPqADm1pEpTbALezjV8SQRNBjdakzvp7LH4Ek",
  "key44": "3tG3AApYfRQJFsiur6df39zNjMFJgw3iCH4RV1qX6KNtbTouiewJUVkKRGxVbFxcoV8oJDxx1SVFxY2ULYmH5Td5",
  "key45": "mMxv165gXSTSxbnrqcvcwBvWEH9QhZWCUccTCpDxUrW32hxRvfnTYkzV1U1a5vHMTKv2GMutHALoRmo8gen3ivT",
  "key46": "4rabYd1PE2SGUbNQgmvzv7c3pgukRXZtodBXWG7qrp5TjXkiudqyNS2b9uBr7aYLhpyZS29NcHgYm8HbgwsLeDz1",
  "key47": "4R7xHkAf6Lqv5nVNWwc1bKCBw5io2GM55v7DAVxRywaM2hYZPaieKBLPs7cju95AfKDpP8HKKMWeFrCrPkaaWLYT"
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
