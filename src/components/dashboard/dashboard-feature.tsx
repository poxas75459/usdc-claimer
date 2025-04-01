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
    "4BGydbebNXiwMJ97w4ezTEwKBVfhXBpVT8cLYTYHmfX7EmxTZHPWWXxy5KDqBjX1Zjti9FSFdNseytw5fJ9MmEMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYMnV4hf8VP8PtgciMTgNqXJF8XHRMQrKaoicAr8Gn5AfY2DC1d15euUAg58sVoC7ukMuK5kZm7jSzdEZQRm4t4",
  "key1": "4rj8ho1r1RFcxB8kkVCRPEyiXcQHrALCUVY8oV7dbF1jwgMeVNrMEwAueYnVFo6zDTnaLBXTR62mmgiRsbAgsnWJ",
  "key2": "5bwRUWKLQzE71LXGgBFtznYWizqFNVQQBTHyE9T3vKsuWfi73HXWHMYksxDDiuL6GzYrBwFUK5roRXX9Dg5shou4",
  "key3": "2ZYVE5vPQZubz5F6sptmwhf9qQ2119s82QWeVbiRf4qMZN9EixEr2wTUPD4k97M3SqKv9CxbuEQtKTbAV8bavfhY",
  "key4": "2qv2P1ErcxS6hnBwQjVe1tNBm6xEiUJtJKBznK7vEAeMDWFZy7YoVP361yhCpTzQWWhCWz6tZT3Mbpba2GiDV7mX",
  "key5": "5nbJ5X2HqZjQYwxXY5FY27fwVydpiDCwbB46JPRYUY2dzoVLEG2yue4ksjqEqG8RNkQfRARtncj6Nuduad8c2BW9",
  "key6": "5h1RKgFJV4YWJFvQvvQKVsgP84xAs73s6dbEepci5NkgEfwBMR8GhDRv4Dbq7XYfmi9LGLxiyEpY4ep92rXXAeoa",
  "key7": "5TsrkVAtpxoBMmCp9zov18qZ3TfZDFcuPiAwLTPGGNRWzwBVmAfuP3KwvYS7Es2evji9JjDXC2Xt8wdY1ndyfDiY",
  "key8": "3ZMSRF3g5DA325uVrg3Pmb5WDjVfbB4Dnb9TRYhA4QHwofKUmeMjdz6XjWQW9NS6ERZZQRsMdunSGQJdqdTXnriW",
  "key9": "3SGwfZsL5wzeJx8mzButo5D68F6wkMG8Vjh9mbXb9zH3RyQNc8fU7q7kySxwzCXDoXQznjE4BEAK9ciV65v1cxCp",
  "key10": "21biKF8N6xvfCPK926BFrfqSTLoHWE22NPKr2MRrNiyam6AEBHzs49hqu2T9UQefhs5jvx7ibCRuL1RRCJr9Jksg",
  "key11": "ALos2frzLNDopXcuXgUv4LjS8B3zQArmP3vHkcjV3aY8xjE96CYgsu9pZUZEcd278qED9xoLgagh3Bb9rjhh2fQ",
  "key12": "2bkZYRDJPn3iTbUaM2BRgvpF5Q58TpyPrgXew5xYaicjWe9E3NzBjRC3zSVqACUMfG8oFiuvE4qoj1HBN3QyEThy",
  "key13": "48dVsX3rQWE9rpsj1qi5VQAsZ7PAbd3j7JqMrKxCMCKHDWLV6L3T5Y5oQNQMQePEU6miAJqXMSdvcEvZQpugBEii",
  "key14": "2J7JrXRKSiS9TnvyqXVbTCrvkw9TnjYL93brSeS8zPB1wzF9Z6FC7sstfh2GkE3CP61BmicziLFzfoZboaamtpkw",
  "key15": "56PVKcrTLsBX4ZzhokBqpzLrf6oAxER3YJ6nf1zohXdf1oETSLPkxkzB6LisneipGXRiJw7DcWKKUUVupQvUdovC",
  "key16": "3MfWS9yjpQHt96KEbizRCKAKSJiCUde17RsTTVkjBxBZ8gWBBVx794CB63bjFXKa23kA5tHpsMuo3Q7c5yCNEX5W",
  "key17": "2w7uKESzZDH9aPvrf4vRy4w8DdoVRz26ykDUypNpHVMpqfeDXzwTRQPXg5gPZ2p3GJnPMvuBqQRJD9NMnofasfTU",
  "key18": "3nmcz5KzdJg4oxY9d7wL7WLd9zhCnot76tL2xKFfZEp6P7HEcJxHjsXZ3xmgQ2EyXzYQ5q6JQRaUzMCWabM7kpJK",
  "key19": "4WGAEx5kTT5dtTrVxrbDxdPUnK39vSWf2JbDs2qdzN2nW3guGLKfSKRm7qxxoWKNxXcaMuVtxuHJwwAw2Neb32t4",
  "key20": "6a3nvhXgeFCU3gzbySzrFQm8TzyU1F8EhCy4vABYzvBkknmFumLWNko2Zad4GW2Cg3A69BGXT854pNQY8ZPCPhH",
  "key21": "2rUErRaGVJqPR13KAVmcMu79uw8qJ8A87tDDucDgBXkPtVZcJwBJxBbY2pgcoUt4xmFSJTt1dFmNwtemZZ9B9KSU",
  "key22": "3yKDZKajorCJ9VHP8ivmTtv7mGXrxhRZyfNsrXQDVkAnu8uEtBwLB4T1CtdPSyTAn3AHCYdwDneYX5nBN2kPNP8q",
  "key23": "66Q8ryxRY6K4Yd6uL9PFsPWUEqhkJGTowae2q6s3Umds3hqKMXxsTMDgJVJqGF4JnxA9496sEakHB4q2gzKHTtPi",
  "key24": "3opMi9mQqsjojWFNyAhfAPBikNXKXuvufncCDGokAWvP5bLd5GuRLXrqzizyUe1EtVGneHP6ALNWBfXxqvVHPqeu",
  "key25": "28VUFvDPAiWqJwN9cuxkvM1nDeYeb7Djoh7couShcDTU4dR6d6oAA8akh8DNdV8zsnVpNQ1u6RqsU76HrBXCr2Ms",
  "key26": "3h1AEUnAHaJhmnpgWwNyrKJDTfMhrJemKhxeoPQKHc18BWm7t1k8R1FByW5MEoFzoW7yS1C7zNh73G8hD5XrLasD",
  "key27": "2mh5FRBnBfsqpRbMd41Xfzu9icuW92EzHj9uxkjWnZsyufzUPovbsDMg6DsShDm3iby6Vw6kq81Ys6hQ56cf1pKJ",
  "key28": "M52ZNX1sPxMyzTgXZWAsU9RPKPYuFQuVPLmgEGP2zmfRknGu4B7eRBDnPNrJH8E9sTi3beH8J9HfFqA7mn3JDTm",
  "key29": "5KHYBp3mHLT1wcfztaJdQvwcZauFMyhx6VSvUV2udQesVmHCLU3nD8dL6T8vyVfckstsZkYwfX9iXEioKRKuXpiV",
  "key30": "z3YvTEmkZavLLv5NWiD9kPkappTFC5Yh7n8T6NCfraN1sNdPqcaY81Xbbj4je4VwaSRdU6nYG5vjvkbGfyTKHyE",
  "key31": "5zK2NKzdzqFdKcCuwKC45wbwrfPgwKX9otL1xF426y9Qw1JET5FLpJKVvqojvghw4MQkBMfBmXihxWFYndQXM1Rh",
  "key32": "4NbY7b5WWs9Yp73PXgRCmTxSdYDyfBAKcnBLStNRSsmStLEnV7F2ehZbXqaebniT4TkQgzFm5UUhm5FkjfEC5WrR",
  "key33": "63nBiJfuxWGbhJYMnzPbmaLXhx2ytJBBZvaK5NxV8yora25MA2F6azXNEAUxJUt9hDc8HpaX3Zu9kHjTu47HHgnu",
  "key34": "486LtGmZXjZcgK1xEfznDA9q6zLJitg3xbkCh3yScMiM7XMppchtDDoFsnRAeuZQKkbzS2r8D1p9kM74kv7jPuZ1",
  "key35": "5U3HWxYpJ5BuGriBUvrdftfz7fUuhzSgr6HhL8DqtYVYT6cNTUz4MMyNjMA3GRET3BZmo7AP4gujngkdt57RMtWu",
  "key36": "ArCMNtNFvRRvZosRKKLUyqKGkNRnKbaXsLwzRn2WRH7zCnnd7A4eDYAhy5sH97SprnstNHktDyacXgHeYqW98iV",
  "key37": "3TjprxfqVm7nhXs4AWQ8cwBQb5FdEKnrejqfrNvTBJEEp2yAcV3dcFBme12dsTHHUMg9Xdu3Fh5yPRtSPbZC1MLn",
  "key38": "5oEK6icY4vnBLuvGpd1A42QpqS3fVmHJ57jC3NdNr5EdQB1PfH8bQpXPG9PsxbJHpGRXoAs3bt138KqJaDLH9dV6",
  "key39": "2kGkmqsKcr8YNcF8oWLz9xuTh7rrFmc2Eaibup6Dhtm3X6wDrvdLozdCCzyd9UU23mWpUE7DMLrjkPD7MRpY4uVR"
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
