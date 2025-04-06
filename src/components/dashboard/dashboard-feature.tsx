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
    "2tJyTqtEbkjMTuTz6bJ9VsoCqheJ6Qomk5BHCp3GC1r1L1WViqWvjWXM677hCTHqDi1Ri95q295jjEP8BXFtV9hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SaFndeWtpNfVsfuQu4cQgQMvpLzju1sCTntYSMCn4SAPCXis7EfWxQznVgVAXdCBRWDzBH6AHJsPp2AGZ6iFnA2",
  "key1": "2T7YmoUSzTmDgaExqc4Kn4Lbp39DoGBYSEX79jzFh5vwCfZHFHxNYTfVUS2o5p7tQBDoAMAYF7CX5RKxxh7HvQVh",
  "key2": "3Dk3WKWAZ9fRLKRQWkxoZem6dXH53u8iB9j24DYSABHkgzr2C5U2G6woSUCPdX6RxwTQQ4Vikbjaxo96dErcaGLX",
  "key3": "2BAcVemZMSsvm1bxvEz3qsJffuWZpwyDty3ob7bi42PTdLbiXLrKyWpdMBHj22cdvqpnYjrR384yFP8ePAMV9FRf",
  "key4": "3pFtHeeUgNayEbbq45Cj72LZu9iSFQ3ZJfXxyKe65i7vFCCaFTyotkLTQGDxZwKYMYaSodEmcDxpfgrXZjBxNpyM",
  "key5": "5znXatGGp8zhFRu8wzQaSqf6QNLmjqH1jSmGgSL6cBnTAGwhyfSYYXvc68KAsLi3ffUvAQ7c5YY2aDkENiuTU3we",
  "key6": "2NCey5wxq7jZo45kkZkhqiMC6Bfxk9vE29QurubcRLXk5X7To6w1DrKFKFywoumawpyD52pqTBSsZJYUf9YZfnQW",
  "key7": "kyGZCd7nX4PbQQSkJ398BfrTgwhQiJcKC47UhBfkre7xmduiZSyc8Nu1q9gEDB1oBXxCtKtHWW69D836eVEyHU9",
  "key8": "5p5duHBNtKZqB83Sp2DpYdKmp489p7E9jVnP8CdW1QP1VteoJhKWp7X3rN4eCQnvDv4oYVErZ1jUhSGNERBAfNf6",
  "key9": "43gXaCFCRzC6r5s6XTCfCaLzxaVGhYoRN7FUwgZ9rv1MJLdP1m7V5ZzXppx6yxSLR4BGW4yUfEMw6SMwjWkFqTNN",
  "key10": "SXb6Nbed8pTVLkKNTDRVzwMCM9hK8wmiESFZ9XK4odDfxpS83c2xiB5yTLFJvb1oT6rGnoN7pW1VR9auY2zhxwq",
  "key11": "125QXMh9Hh5xFSqqNn9wdYq118ZqR2kENkttKuRpkqfwzsZNNUvVus778ZtD26ypSVCr2nXYuvLXKx5QTvBSCTNF",
  "key12": "4fqfKrPuxgtEZsX2QoaF5W6qd2xqerepqCWRkWxeofwZYZ7M6NmzYhVQq94JhfJMPpxXnxzXMd2DYFCebZLBrpBM",
  "key13": "34JxbE8PVzHXiqZ73CP45ngj1HK9amzUCjd5LuauK3Y9CsJE7fKxwNrMTXZXgKv6BMaQBKrJfyXkC6xe1CFpaKwf",
  "key14": "WGq7wQKngG6EZnAX2ST84WoshS1LAbztvApqCm62S7idXd1txHvY8m4yTZPNmAtkQWfnLmp9zQMc4tDmdVexqRL",
  "key15": "4skfFGEdtAPW65NnemYS8mjprXComXcB4LdDdArDHHfrVJAcXHbMjJPWMgc2wFCFeiSmgixzVjijpqzRNhVSss9d",
  "key16": "4JFDCCiCvqbTEVioFDN1CGYsrQFmT6c8X3fMSsuEEhcSunFk59zgsmKdRhy7utzW7RP4UUJzLNeUd3ipVn2b7Wmh",
  "key17": "5LArtNkeztwmHnnMbntMBeqRxFB1nYipvz6vhwanL6kzyNDQVmtviqE3H7a4SPgmb1g1GecSKcSS7q3i47XC682A",
  "key18": "23jxdKcCG7ZJrtvVavASBGtQGHvNjokUM3QaDbstYgFpYG1dJnhCKZPhrLd6CTrcKNhnjEpihSWvS6PaHiHUP2y6",
  "key19": "61DZckBLXHU9U4Bv8LnHsrdMTGCmi24MkKvLF7MbTT3bTCs45qGpB3kq5njxuJmM7xph6DqobHhCHzYDqt1NKGuF",
  "key20": "5F27CoXHuGYyetF16Tdi5Av3ZE2odcPyyfn8qnpTJUWohAZXKfab4m3J89RdRodZNXRTcRiLCtThp5YTswD4MRfs",
  "key21": "3AVHq6CEEZVG6sB2NzQR4jRHBEwBk1kgrNBm8DRWBSarPy5WiHRc9rGzjrQW9PsY6mW758uDXD4NVVRupa6rMgz",
  "key22": "3c6ZExJBwdKsqHem9tGB98cnyM9jNBeePXGZMcsCE2AqyF2KNunJsHbpuA1vsWyXXufgQ9oX7SgmzXQHaVSr1Nwx",
  "key23": "4Nemj3itxq6F83fte6Lttg7Mr3couJKgFnFKfQfa8XtDpbhvy6RYfbtjj66SjTwMA2ydFmfr7mXUWnyEywXdQXFg",
  "key24": "4CFyPDwgvnDYYxndpztKWu5GfJmnc3yiR2eqdvsdRgpu6vkCB8KpHL6tdyDCkEdDBinN6ebfyL2uxdhYJkBizABz",
  "key25": "N2Ea4fSXociUNgcP9uKmiABTRake4qR22ofuM17VGeu8VmkKNDBGiR3t5X2LykX1WoQ5qftV1ikyoEnwxxLC7x6",
  "key26": "448DsjUwCekaAym7XnfHaeLqwDLHCw2uyaRz4J1EhvzdLPAAP7S65bMUBBsUgE1VM3YZjC6HTFLZDoosa8W7ed1h",
  "key27": "BujZnVx7h4VuMfgQu6evbyTPdSJpF5GZPbCoiQyXqiQ2nkAh7MijNX2ibekH8kYnrkYmjywUymskbBce5xHPCpZ",
  "key28": "4KDAjBmVtfBXzXzpNT8eXBi8xR4k6otXyPkpZ4nytPwcCfuBTj4LxB42XwiosevxbGjoEc6YifP9SB42Y42n7pK6",
  "key29": "37t55Dnp2snffCTPT8P9285UDGCFrmZ6M8KdcdLNNYD88dcDwNgG2j8yCNTgefnb3ZgK5EqhyLutq5ncehXEvC82",
  "key30": "2oMVsLqTSeJPFLTBZhfNa7CcQtHcJjSzn22hm8dcAzjCK2qqjPCzWeCmfVbqREz6LRRk4X5F5vmGozFyrt2q4Gre",
  "key31": "4nAfgeY2C7GZbf1L9BPavkAv1Fm1CnHCDg8qNWZEGQNwzDXCa9jcc34RMpvj7Y7NxVZ3zWGuCqDHaarhyf7t3Rkn",
  "key32": "4UmZBUmETahj7B8psHZgpnjStXgJew3Ja6XfnWq2wuod6cTKV8A29Hd5fnAZGHVsFvPySybSEAiKUuXepacPDJcN",
  "key33": "3neU9ZNfGLUtoWsg6nK4eH4ttg4rirzNhszLxtK677GrZtRiAt6TWfJBQNz6gEZod6juTuivX2PtwA2rX6jTSCP3",
  "key34": "5UBMQHvLt8KUHe5QmzQQ28cPmVqVHtDKw36iCZNt3ZJBEAQ35MjGrm7JwyXeCzPBdkDVcNpn8BCABmjBdVfmjWVc",
  "key35": "5SRsPV1d9FrvEiM6UAnXdY7eRDPmgENvpmmNzjuS1zCY6Pue4mrcedhuri7MDVxBPuEigdAXcb83KAtfbaAs19zz",
  "key36": "2oHvLMVLAWtW5kLjKMLG65FLbC2iSPwvqXFrK29cRUNTiuwUvvLWLrAbyk9WPux12nkhsTSwj2paNyMUEHganvuv",
  "key37": "2iYfXsrDvcrAhiPU9qZghrd8jPfnxfsY5svWVzkxnUsjvHFt4WxsNZPo1jbqGANC7R8YChxARzvDXiJEPabuznu6",
  "key38": "ziGqHa8e1AJvHEayraMqKSDuvshkApEKenQ58ya14ChXxhboZndecLNTKCDPcjzhfJeYLCntEv4L9ZR3xdv29cW",
  "key39": "37iMpvYTjiMcFe7S2kjxoGojRNSmwtUJaxa6ppN1K8ZxZFFN7KkrwFiH6YvYACdfvMrqRFrmqoeUHCVMqSYjpLdr",
  "key40": "4DavwoYP3k6UswduN4FoRcHyojHURnitjwi86FyowDZoUe8G4XJB3rQdmpcyT2VhUmvt6rDYxNRwzAzbxpARxJTx",
  "key41": "RQR1t7DiKNs2dJnanNknsx3teeJxFU8uiFhTXkaFqLSrsZ3WkdLQ7HTGLndZcSGFE8uzjNvhVEKDrUuyKKxVdtu",
  "key42": "4LCWKSTapWibiRxnFKgoB5hEYqSaNPKFLYsWL19dcDUS1T96vbDCKkPYCA1NkbzxdoYRg9eiibatL8pvYJw1YrcG",
  "key43": "2yVSRzx2CkpWFTkjAc6cP8qhYHe11T8m2kRLbix5Ysif7Vkdz2k2weE5vUDqW6EaTfcPit1gFqYzKxqZ6wMrPLPh",
  "key44": "2oZH8KicPTCmbcjH4cEtguMV6SfjRtgUBqCcSdjcM9vpZaG2QJTT94Sb2Y9PWzEYX3bPuk13deKyQ3ndVJvui8vE",
  "key45": "33LdxqM9VFTrYu9r8Kv3fKK7XM9tpu4gEF3GpWMqRYEgJLB9aYAz1HBsc1S8a4ookPwmcrMxR1LmtSmmNw5SVK34",
  "key46": "4Wyxk78USMaCbG38NsV9rE3YSDoo5KirgssdQErmKR8xsq37SCFFV4ETUWcJ81bM3reEx2zY14tAL8gzjVyaqVvx",
  "key47": "2YqgqfzMkbZ9sv3my8BVG6w9BjuCmtckuGYXNCehhnL6fcFSMjxhTJHJHKdXx7ea2PHEmXKQMFxYbHRco58GcrjU"
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
