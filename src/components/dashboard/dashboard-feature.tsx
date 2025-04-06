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
    "38WnNmwcaE58mef1JvRQw12jaEuNoaK51Ya1PAX4oKpbCZ5UL9csXCED9rdY7Vq8DPiseYyUE66N827fa7a4qyp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkLrkgemwig2f7qdeZ5Lx5Dgp4cNo2YGb5hE2y18KccR34Q5vw1AV4p2hoj2xawnmFRAv6tk1mb4Gjx8HWtRCGd",
  "key1": "2s3fUQ7MgxPXW5x1Yjtpd98RAukqczV5j87EKXBnYVEoB22RyxCEeFJxA2ewmi2CdHnCRprM3b9DZNyCLm5YrXK3",
  "key2": "5uQEp9WhYgdU3PZEYTpWkUhEgSTeBKe9BuaS1xrbQkuzy22iBpGCuw87gsgPeVsDTRaTEEjKfQJNpiaPkWoQcniK",
  "key3": "5o3hmhnkVEtQdoaHRkHr6c2r81AvNhBU31S58CmGbtD6K6ZW7DJoE545Tceks5UfHeCTuyYUcBdszE58sPE5auz7",
  "key4": "5227WgjMFNggS2snaBxXzGxwwFYX8C6Bit3654QKyBZQQKjTfCkUJN8aqDZzeKYKgBT1VDCyvb6m2K5MtdpyjHpF",
  "key5": "oD5SVUsEgVxRjiBThJUqgjh7cNueTeqGdRMKhdBipNBd3FSHUSYEeBYPaMmbv7W6gfYyBEhnVE3NGwpLSek8vzv",
  "key6": "2keeg1wsmh3JfgwwoE3si9p39q51YfBeQQKGAX2jfyNGA158AAYnzbr7AFkcyXLqwwKhyD8X8k4WthTgrrqLKJ5x",
  "key7": "5yJX6TLAGbgksM7BFTeuNDEPfTNveT2ujCngAYqA9HmP37vg6NsrB21mDM7KF3D5kx6WBGwtzP67bJc6RQfyhZK",
  "key8": "Kv7ZUBSKdboMZKL1S61KCAjQTt4z5r13XnwuQe54Zyymn8VbEM4N3MCuRkpBBpGErB3isPykjjCvEEWZQokLgri",
  "key9": "56he2UeZyeo5zwPVhjqJgtwtbK3rVzUNyupudoDq4sbZiq4MUSGvKWfA9oS293CsJ2LS63g4UzaEA47pMxYHaevx",
  "key10": "wRYiNTcSPefpuPagAZ126JQ1As7BcQJJ17PfaBxCR5ybekZ7DiVirT3rRGq85Vf8uqzwUjWfAr7Nnf3WeC6htPm",
  "key11": "4m6SjQnQR5ei2k67qGhnv1zPna7DBaHEsqQGqNMFwgb2Uty4qjEpEE39j7BkaKMYAwqHeQK8u7Fy2uQfUazMYziP",
  "key12": "5qaztnSPu9EQewd8zykUhntQH88hRkKX8EZGegG5Riy2kb6oMEUMoA3n6GHB75n8nDMa9sN2XdxfBX4XMegfDCAg",
  "key13": "buuuLzkrpAwnbjPkYDD1vLMdHCL22tQZvMje8a7vaoRMFAXfxy6RMdVxdLNVrJiGjpVo59vHmybxwHR1vbJBHqg",
  "key14": "4Wwst5kExdttq9wf937s5wHj6d9Qhqg7abCSfYQTMLsu3rvGBWwCw6VD7CA5gqGXU92ejqXaA7a9xQa9Azm3GQib",
  "key15": "53FCHbq9inZp4Wti7EFn4e66NSnWDSeSwNb1L6W13scSV4cgo4Sutq3XEiWdhKw55ZyvMBSi6TjWEW5y3fhCUAob",
  "key16": "2naWSr6VTJWmbQGgRsL5z76UiCfQshiSHYoNgpYifzkjGPG1BCqVDSAQ9MBFndtdx9sfsgasuBftmLqvLuczb1My",
  "key17": "45NBVgUUhhDxcuHVQw3pS1LQVKSUvgCjPvoByvLwPSD5TLndaGY6VjcjPcaDtqHamr73vvz6u5REatL8FjqgyLYZ",
  "key18": "4xJGzCG26fFDFaiRL9zLjxJNGXvJ3XR8aPQZbWbvSJEycZ959qhjqcNgZUTMATuQFebhRpvRWtomH1Psq8K3WNgY",
  "key19": "5ks7YGS6dER9rSXGCi2Pf2HWsiAavkmNSaj55MK9z5aUHHECUYLUE28yPtMP45Bg6F4Km9o3CNGyHyV2fY3TnF28",
  "key20": "5gaZU2RckakteuB9bu6onTA1jarSyDnmV5NFnTRdWLbFRXpXbHKKZ6umqwGqYXA3tnd95qepnwvocFyMXcasHEV5",
  "key21": "3UynxbZiXZna9J1StLhpH1iSzgCuBpNodhJ4k12qERce8S1P54um3xJjHKA7WsXKi9y5G5WM1sANFMP9Y7gNryoe",
  "key22": "2P5MdBS2qM9HhDsnxAhaXt8PV6HrjULynrkMEvhM8vkg2FseUr9rWfGfkhunkm6kGnbni8CUKhyK5RtRFcMt3ixa",
  "key23": "GYV8R4RkU7Rf8rPQxBacotUCDAhq1zjGwqMxEvaGsWLdpSsJSX8ELiyH6o3wbY6FS2u4DPEpcscavVT6WQzb8fW",
  "key24": "3Xvnai6wyG34kweg8d5Xk6wp5d2JkjGcemH5Qs2tQezTxA7ZjKZFnHJKErXZ8jGRn5sdhVTs2S5DG6evDbCanypb",
  "key25": "5hgHfayDsfDzhCwGraH8DSfPH7DAGYXcx9oHPFKGAVQi3wVuuMckicjxzoadg9fWjvXEEBypE3HTGT9Wnus4fB2y",
  "key26": "2CKmrK8ijCWXeovW94a192qBfStRgVvNoBMeeFrxEpSHPqLCf4rg8aDQmtTXuUNJBEBGRFjQTiMjwtr8JtVLdJd4",
  "key27": "gz6Z1dKALvSu6TSNq5kptDv9sjVWeuz2oadhWVGbERTYkEBn9nDpXeVrvfEjcfsgxazoM5dAvGLaGqKqSxjDbwf",
  "key28": "4y6yTir9aQni7SD87LzioRqDnXaSej77nKwh2ZobjiDktCxkJy5rRN2kLDJuPF6i5dkEZQBX22qe99hJhRfTqQyS",
  "key29": "5wieQDUUPWhyxGicsRvwNe32F4283D3mM2kSnv7cFMjq8Q8vDfBHPxTTz8hnR9NP17GEe2voLYrmtRTCpDkRXJWZ",
  "key30": "4zg4e2G746gwjPXATKsraN2jMu9m1qGguYMXTLmmJULBPoL1AuPuJkkqiiQrqFmF1od9C5NZbweN9o4ZX6WQPQta",
  "key31": "4vNvDvXkc5dUJStH2J7CQya2wnmQAFBtJHeYzugLiDAqyQJQsir1KdTHsBLppCecsFf9uzHyVK1NC7JmMSQ74zFN",
  "key32": "55EFVbwBPKf51mDu1FM7vux6VbFxGC3jkutaTQqmmAFGyuDDuJNb4UoEpzMVZjHNcYBofa2a2dcYnSSrQRfzBhMr",
  "key33": "39BU3QF2DUbxY8hDwpLQt4i1ahY9jv5Y4n2n6v1NWWLRajFvSqutEaaujBVXbSM6FMUt1XQtr9UyEW8M3ZQF8Dt8",
  "key34": "2yRBEK5arZ3r7v9YrwiyiQHTiHAg4bteivrgc3zhqWSERTQxZcHJA3HTV6qDNmhzk3HxFFap9paWj9zNDzScxstt",
  "key35": "5YSmS8G5MXrphNcjJ2VsSFmuUn28QCpvz6G1gBLeAr6usAAXJmaVuqRzMJFJefbrgRNk4BxS3ptxNF27URRzt7AL",
  "key36": "2kaqmFLyH6y6k1nJufJsC9at15GqdBFY95C5y4Dddj5brrfeUAikkvE13T7cHMonemT8W1RzD5SRspyNn9zhYFfT",
  "key37": "33dzivC62ZPSmhYfTrmABj9kA185Z2b2yEUsbfMWziARmXTD6okxEghgHxKTmmJQzY6mL5A5ukaeBrkfUekgjehy",
  "key38": "4MEJN2S3wmBKk4Berao69oMeCNAZfoUPUwneuHGF7KdDEMZym5WAUC6XRGQE2RM8UkczRv4t2ABuxJ6bQBB7prXx",
  "key39": "4MbxTthejWydGh9emai2iR5FxcGfJcZHoRRa43cVr5yH55QLEqrL27FkhkArzcuwH7RJjJg45oCTXEo2pYukWpKW",
  "key40": "3tvtFqMRL4AUovMppMpa7SRiKqZC6SFk8qV6PZNtstkCxkiJxFLtVxYtwzAaPDBoEcFKYoYTaVutQUfPAt4uGcQa",
  "key41": "2JkPD6YbvWCXDTzmEUWUss91C4MegiieTPTYc2h8tLvPNsWk9JiKP6UtkKkTJo4jfpFec2Tqf19zFNNUDC9rx2BN",
  "key42": "4jL49Z2C2QDKDu3CSr38JR7MoUpy2qqYDGPEd9cgso7FobsvLxPMafQTD3RrjBzTn92fPF3ga6tycPzgCnVvaVnM",
  "key43": "3imNUr9aZkkWMHxZ7FbsL1frmviWWvu1aATsa6VYuD43UMhj4ybVuYCjTHenk3GReuggygb629WqK8Z5FbCvdsMU",
  "key44": "3nHK3FMLRw7XtZesQYRsLT1UGZeufYtSxHPMhsKQYQZYKBmpgs9vr4upQdGc3qXSCbirFHwZZe2Ty11sjYdAjaSh"
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
