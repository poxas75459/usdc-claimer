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
    "4GZLSwYWqGX5TkmPWpB4LiTDmPGVZSEk3xb68KpX2KLfxgfHJmLFvHmLgwXV6kmUQ6HUtnxoUJFEotpZYWbxZxSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39P5pGqzA5rcxqfvYZMVtc4FUSEYef6zkP279jEjpggN2P9rFmXETbFBQrKN8EzCEYMvJTnzcs7ukRrU3WuUrj3K",
  "key1": "449x2dSBwNRytPGsxudwBz78kqJDfH5xFw9rp7tHyX1JDQjkgCRbmmHWndPysSdK4qMhKrZr2zu8nXSdDw9oyyqq",
  "key2": "2ydjHpQrMFLSm1kbZrD463QrE7ryLoGAs58BJRes8UxfM7YaTvwnYQkc6YzdUPzwx4TE5WmhTzpHRx6nqqh97xyW",
  "key3": "KXNDRt5jjAYnWDwgy9fb5PyQM74rzzp1Q1nUeVFTkr94pimsfdSY1mBVUNwFacgA3H6ePmc1bHegnsjn1oY1XCE",
  "key4": "5vbswELXDMTnh1cy8mh2nbDfAjBSJkBDw5GRUbA5yFhQKNP8psrii5LRL3u5xtJvaDk8pb1Jba8WKd15sJ7fgH5K",
  "key5": "3sz6kJvEi4Uq2HF9iVcTpd2e5dBfe9ZhJTK4Bm4HsHFzDCVHjr5cK16QiqPvSCjRpH6ANoy8v9XWfJdxL2apVmP4",
  "key6": "3e6hEKECDvTWY4f2QSxNhvHKqLHdhWvMPRchu7pDWDo3Br8LCixKyiiVh8KfgZmF7kUCTcnA7mduCgJwLNhUkBJK",
  "key7": "4h37wp3u62pK7bG4aiuEikXRLniS7rUdMrjZSoMQ5B6JtsjMpo8BTjUAhmpyK7M1B8UHgZKS9KGGnsmffX5C9j9Y",
  "key8": "3gd3oPAsnMnQAdjP7j2DVFbxbZTRef2ZchQXbawpvD9oVn3FPqbuRpvsCruzuH2k9wwg4tnwnf6NwiNhTJBU7UH2",
  "key9": "3bqFWShUHP2bvUdCT9gvESJxGRXgs3PrGQpPa9wMLgzecSnU1ruGLkWqA2Xj9opSHTU31oTnghuc1FvurMzdum3m",
  "key10": "5qR9sRmWFowVkUmg5V1MzwszugDZbuC4TmGYNp6u6aYH7Tf6VzXVgFYjiuYumYw8xwyDGYAhAn5kj2yLTPvSb13s",
  "key11": "5cGBgAA9UaB9mLoxweFGUzHgWJA8KE8fJksn3nGE8s1jQgjxZSjQC7ZbQT1GgQwamj5JQzhfkmJwyXEQguLgqrry",
  "key12": "3saKQaVsagvLHEQKrNwX7dJ9GfJqnkxgH5KX5ybjaPdQxpuaPbjVE3WF5VNv87PwA6gM5KUMXYVFHreUBgBF3xWt",
  "key13": "4T9akiuuPzdLZQkM2zvW1ehY7iZyQc8kuH4dS57FqJT56NWzakguwQYpfCYfzqQarJrsWahB3ixo3LZG2zAu7J1D",
  "key14": "29YnqKQMHAFPRrC39jY2MzjHfEjKvSEK1jQHeVrLNtrK7NBU7zPDCUe2Pas4g8bSxbmYP6Mr7XdrvSRnAZ15GJpK",
  "key15": "47Ev7pjEEk14V1nJfvKHiqNkopaBMVGBPKP9tcnKrdudWy2yHKSYRXf75QamBn4hhaVViT2SNVcpeu1zycu65Ast",
  "key16": "5zbfaSczgovyK2JjvhisuPXz7qyBvSUfeJZ1zk1T5z4usJ4iTz4qywjMwmac73wRxRMsi4jGnQa1JpLyJtxFoL38",
  "key17": "32sDtCV8SrR5Gb6RQajgmS6BWuDDcro93Rp8kBeH5pXhc2fv9HjyYJTbBCKCDQXu7hxkaP89gFEV4Q6XBe7cjtTp",
  "key18": "1k4F2g72H4Dg6uJUYE9n7YKDwccXGFyJxc6mziwG3zhF2fPQ5ZGxm9CFTQCnBfYrMpeYjH46XkAPv2Zfaq6jVee",
  "key19": "4QjeHxGtATLBB6LCWpCk9e6fyU5V6JMYwrBNGPXvNCjvhR4TALS3A5Ei7qzMkeeC56FoF3o9W7mX2fR82FznfYYe",
  "key20": "2p28qgtGX9nnzXLT7axDYzuzpDpxXLtRJwCc7fznHiCk3fWqNFPyS3bW9QgsxJhp2UVec4Yiu8cWapJCxa757F39",
  "key21": "4bsuTFdZ1jqDdZ2M3as5oDp9nkEwceZ3W6SPUbBbo6t6VrVmz8aSQSgsf7AvdpFHaVtA5Q2gDGosTs2HrxEFuvVW",
  "key22": "2vReSXvkZQqhhierPTHgWUhN2pPkDtR3dsMfPPFod89uZyTKPoEvXH6LbrCqd3dVp1Z64TkT4BfrM65kdjWuB4a5",
  "key23": "3NEJrrYQxBfscJWgZ5JDfjtEZJ7KNRezMCJwWbDrp9R7VDAVr6mz6Aavoc4Ncrq5Qxcx6KnyrLt2ixTHQ4dF8d3Z",
  "key24": "5jCWf3n6kYnAD4puc4AQSYYGyzT8x3RFJsZ73hx9GdUf56hR95baiDPnWX4s1RxStNQFLPU3xU2UNr6JZqQjQaDd",
  "key25": "2aMwRL8HYfq7HSHPwVgPx8PHjFZepveVuajEaCdCrjrB5BCcUMvZQHJ2YGB4zGiBiLahmffJcXauPAfXPVTYk39q",
  "key26": "rsNHjUpvkEN5KwhM7pzUwXkZ9UB8urgVB5i7EaEhQLJwGHKCLRLoqdZCmbA8g8QwKGaTGnxgoisZL2zbW9dA2NH",
  "key27": "66NPXY8aALKvSe77TFRaqewF2TJwvd6ssDohjR1xQeqsgoDAQE1bdohSjDVFx6axr84LDwkAAkmjLgPTVRymxCyb",
  "key28": "K6iZgmwvdEowDFUfs6QfRoVsnSfR6pVz5dcEsDF1dDE1heGb2kqmLSRnnizWWgt4eGvntqCiNRrmWokjEr7Qcf2",
  "key29": "5vapbr3Z4rh41Cu3pSn9ePaeNBsXRrDBDXaKnHk5GfBhRPzPKRWNW6GiCfAPLUwfRoJ1dGBdi5Y5i4VzTpgbexQK",
  "key30": "4ro5yacPfCHYuBMvNPVRKKEtNTSGxYUg25b3Co661kzbb8quLPAugC9G7zaEwNfXNxq3uukDToufA5uAE9ui3tfd",
  "key31": "5UfF4GnskaYAUH5YweLGfUkkXUhXDTzPtWHj3e4oCsF8MVa5HZ5waPqnMstmrGfZNBAWdNjWxVFKGuAmFUtoA6Fk",
  "key32": "5PbFjq36pTf89VrV2wNjdN6H7XkCTZ3pNW9WmwSu6GEqoa11N2bTbGz89qMRCnCJc8LP24TtjJtDPQwcQg4SmkXC",
  "key33": "43FV6thXTjxn1a5X2ZAYwVvhY2yTZhPTjToK8unPUZgDnw7HDXt3iCZ7knRZL1yEDH3QTHPZWtxt9oTZZK3wGx7m",
  "key34": "4CawQLMddDQwpiRcWZuyiPN5219T9pf5vizz3S4CAx6y3DAZwoW9vu6EcQksiAWvzFRqBLgkCAqcGCuJLu6HQTJB",
  "key35": "3Kib4ZXtDojQYBtFdpLUT3EbSasyDHbQDKTRXPyhbhR2YbmL9rNCacqSLZt3tCuovJQeBHwoJiFekbpb7xoCLVTL",
  "key36": "52eXMQSdChHDdNNPfw4aadX1Z8PCaTTBkrrf1QTSd35ySpd3oucemf4QHWbErJjF4EkR8qJC9gqKejUMxpMD7WMS",
  "key37": "sNxXMT6oY6dcAvRjuofW9KKVoQ47W2S9ARxTjmvmoz6xNVre9SgfWYRYmg71ogGUpYL8ibxe2rkGn5iDtVmuttX",
  "key38": "3qpD2G5QgeGzm9Lyise53X2fHmF4XNac6JeBi4kAXf9FhszxgbYUxTfS2626SoMm64QXZ9HyH29XPw8uDRSquqfB",
  "key39": "uBrn6ujnAdxdeDj9HUMXapw8gmHEiEjiGW2R6XBJAc3vuvJWWRV8RDnp7paoPrhdzN7Laq5xDEc6iZ4CHANJLfp",
  "key40": "5GKVrhjsDVMHnnvtigUVr1Cywe8wn6dx37Mw9iPzftTfu1uuqYBYmTbYMBoEwkny5y6LGoBWLoWz99qZv5vMJ5hC",
  "key41": "3FiqnUi38oDLp9j7P1fGRmdutgBjWtrZynkdwrAmwuAwhRsNZp82ycWEeGXr3ZQG34ui7CoevtFzUpnxLt1NCDES",
  "key42": "2t1hGzgtztxYuNKpmzpeSA45ML8sRPMq5Yufd2UPzQaUnSYzCkASX3WwvSWTt7JdGRo3DiMqnddUtDFey71bmYNA",
  "key43": "5zaB9qz6CP5gdvy81nJmFky6u5t1YjkUU35uSabPCxbpCRed7UPC5GKpbNsekbGBpaHWArWdJkGUbdi6v5iQZ473",
  "key44": "417RQRXovZwKhs1SuVWbtsVTqymeYh4rFiCBL38EYHYUFwPiREx6NnjhCrhoQp4DUqcHSgzzAd5UKLruRjkygvUM"
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
