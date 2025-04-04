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
    "2siZKDNFcvHsptX5pgFAATEaLPwNxhiEMXTQ5hQ44577Pi1bVhLFF5siFGS1byVdvDng5nRky1aoESyhcy6vnfdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z93hXgW8khVfyfRGsPMZsmxzfdCWnHMcEvd3nsYXL6V24yyQg6wBNEKMZr9bTXDcrySgfN8KBkq8e4LDUvFSP4v",
  "key1": "4Vh8kYjw98yLkxTpnrKpTTUVVr71FV6WdKvV9Qt7Tua1odPEci3MNS6zcDDfjuN3xMAaWX3MVR1muUwQPWfYDkUQ",
  "key2": "3R4hQTovc8FundaPh8jTWFbra7adoXoKGcYhPruWpwCLLNpZHmgd6UPb2gXpBA2EXGjZrnNvFd9Bn5UdEbyDfC31",
  "key3": "5Bp4WG6WthZ5A87DkMHBxZfc83FVVBwXVhAd9m3xuGtB6MtgS6BcKVv17LzN7DGXZoTFzDDbmsoq35kD41K3NzCN",
  "key4": "e5Lt7NNtX6oMymXVPfSqQCZtGVTUqppESLKunetbo7J8nof34ubZHMbQebnPfxuJ8iBrco9AW4t1Td2jTpek3Ex",
  "key5": "44zJwMgHhKiZnpnM2htPpKtqoh3vTgks5FL5FdcyMFP7zbC6vpmvB8ZuwrgbdRaBupMNYBBqTVi7XKrF1GxayjFa",
  "key6": "5ZGFwc74p7dcm5jMW8RsHyp52tengexDoU6F6enQUkePZ5TJybkkvooreDrEBowq6sds2yszuF4cQSJwzgZzSfyU",
  "key7": "2dwJCXTSWGDx5dqrkUruh3KYvKvVicVXDjsGjSx6iTtAApQH1w2xcWvgUVyACHzkCFe6dGsk3VkKKcQzBaHLmocT",
  "key8": "2TFU2XzSUYXEYdjNqc9gJpuFfS3vmSbpJxFYoLE6CGt9bSjRMxsRbfu4ERXbzEYP3R7M6JaWocdP1CZyeqqcV1sD",
  "key9": "zaaPCJT5GKYT32P32gVBqk6JLoT3tkGjywLBrGJgyv7HXrQQFZMLWJtWwWsk2M1tLzKEBcM5ymCT1e6HzaauuJE",
  "key10": "65mAFvv1EUiT9qJ2pEM9e2Ue97wMjMjamwtuoJe1gzAqn3g8oAG3uqivf4DJqpbS5YYyxcFe95eunbC49MbJ2oAA",
  "key11": "A1YuuNeJkWyUaE8aaiHiM6vQpXytmYvp8UdTeWSYrDzDDatw1EkRXvsXchRhFgJ2yQ3fDBrh8tYgttx1vpC3r7U",
  "key12": "21V9CLGy6iMTBjZHbAT9bax35nGsZbUAoof4sd1SydRer4p47adwgyrStaBK8j7hxT7Bm8VkHd2MerVY3XzGYBoT",
  "key13": "mRvKmjdwSYWC2t51SWt7gGn7cCFN2bCU5JdHBhN4shF4uKsHDXbYfAz4SQEXsuLfYxJPJrwTrp6bwCSgZqdwu6v",
  "key14": "2L72KM8LWUpN2WBuRQJoG314bpMqvg3sMHDRHbmbfwXJVoDzxQC9JFYzU41oDqTjhsQbXTi8mvDoKus1ceoZ2HGZ",
  "key15": "2AveA4zqFFPyuA8W9WoVQvH7mVwq9P78TUka2nMQduJwpepa8vpXAtfF3WEHkzsiwynPuoNwjeTmkbRcgNLVfdgf",
  "key16": "k1vVqVQrzpebcVsTXdxFiJpLcBkQ1hVuP9CfrbK4vxxNGFVCdepHFyN6UijijQGoRcb63YE5nsEAHs5MDEvoRzG",
  "key17": "4UYxVHdPSzp4iMbgq2PQdQV8BfZ4u7tjkai2cNjSYvYQ7Ah9RPZ8XZfwZgkh5SD2WPiMuXdNtXRfCeznNh4gJEXw",
  "key18": "5stVCraM9QWmCk4Lz4L5StnPEg8G5ufJCmTr7emjEMh7xU8EzJgrWtU2X5SzMvbMvuy9AzSDXjLdaXUxLMP4kZpJ",
  "key19": "4FtZpVzKPSqgitwBzFQRqX6rPFB8NNtMxdQpPMbt2GLFZHz681gcdjGJsN1ADm8ohZHidA222S7gtbmiacMCdGuN",
  "key20": "2JjacbQifD8hVdk7AhUNpnCZcRbAkhpN1gipw1frfQiYgF2eAWU2HWq5kXGvj72UNPovQuXoaiGkNduPTBYnvkF9",
  "key21": "J97QP3PkQUu3UPXJ59o7TELnzkfR7LbNcpdLaTfNVpgxG36D4h24AdxDVoCaFuT4wyBpiaJAVyYpJNbxtHkrqNq",
  "key22": "514wvbpLpoujQWLa4b76yTTUP6pQrJXWeS1Jy9dr7dj98zEGKL3jngqiKx2FfJjkgG6ieKrWDuVSQVRxqk68eW3E",
  "key23": "tBhb361dFeMVTPUUdwyScWWRWbEGXXmvtZTZqtpq6h1FUJPdVvxZx1m41ppnyEB5ErEGYwn3eVxCgU2ERtDQQwX",
  "key24": "2PbESDJjmnjaqJzyT6BzGEcNrhXgxnGm8zfFf2R29y4GdrqeiaYSKTfr2gZ68pNLu58vGQVa3b3y6GimvoRSr9mL",
  "key25": "2eXem26syJhzH24UYf26JMx4yfT24KvknCaieSsm1n8peLmhou2u3Ad3oWrQAEDjK7PLU1R89k5zeUFVz7DD3BrH",
  "key26": "gN5sid87BfXVHM2rnXvNig81y4HERZeQW5c7dvNtGmp8LG25WYTVyD5uzCZUpuHaWEAXyxRpoQQtfSEEot2rN5e",
  "key27": "zpaTy3KWCvLB9mC8rroV82ixREBw3aDvS6jGDqUpq58Mfia9FRGzHwuhgfCPiTXZQCibrWo22f9hnhN1e5eP3ZE",
  "key28": "3yuu2gLE5t5gKjKJWBwPUQkU8Fesg4bRsLfWNkFYBj3Po5jTVGZgZwegY7syxgSSLRUUtJQG8uQ5nFJczHaNNvv5",
  "key29": "KYT4yWTeESPb9rgZyZLmH9PLJM7znQXiE9yUDGnKBj3CwJAp5k288NfmM4PwHbZwURnhKv24qpxdkXDoniqenFC",
  "key30": "5BN284TAqB7BeYbDemYpDDRzfFxiwSNbeT8meGwQQfcefpQPqRH3YGQW8YLAZmH5CPRJWA2m8UXNgLQMcutH2kS6",
  "key31": "2kHb9y2hU1p6D3nFHqsAEX6K68DQAK2NopKfV67fnF3p8wMBD4FuetBVeV1o78Xv3MiKT2qmCL16Lxd3sN3JEzeY",
  "key32": "125vRe1bp1DTWJ7gn2Xn4AVasb1ajuM5DEAvSdyaQVQU5qEkGjUfeaSjwe56n7PwSe889WzesygvKSfp6QFy2gR8",
  "key33": "5KozmHgZ5UyP3TfPGyN8ZktuMjRnNdnEro8wMfDfEXMKGLjcDiy7wyTQNixVdDwkGgrDqrxQA5dQGJTxkBzuWS2V",
  "key34": "2Xi7P5quo3XZHoTJPC2waM85wmRyViWCB76vrqyePTaW1GFyjqYzvTL5PnSwrK8BuVNB5sWnWsazRAjPmY9e5kgB",
  "key35": "2MMRDPxDz1qs8v3VSbkuH5h3HctBVRYDHY7DvSWdJEHbWLNEm99mv1k3WnpMSQ8Skavw44UmJXD8KYkHG1T4gNbj",
  "key36": "tYgkjUz7wvgYGyS9b9RtuMPRtqFxenFvW4gryfSfF4y9HtZU87XVMcRA6yNBjtBynRMvJpJZTdSjNFWig6Moatj",
  "key37": "5uoaS5yoLfeRRBGy1w3DpdHwqxiwftFBuk4HsitpYoVEHezhocAMePnJLAkvs38MJmYjMTzw5KsktmizSsBKZbnc",
  "key38": "5hUd8hVFMA9FXopd3d5ekcpy9CixG2mfccCkAzsuvC2FXiUFV5yNdMkhfbxYaBShumiif3w3Jspv1PBHkem1ePJJ",
  "key39": "3vmLtctZGQ5hJwMjYVStYadmXjxwpw9mp4MgmdXSxVkXzyBbKyxGQsUKinVLQKjfjZKD9aZeFzMfGzfJKegsrrsm",
  "key40": "xkgR9CTncPWTvsGekbZtz4M5xwkef35hfgC422D9oqmcC8JopkrNF7CwDYD6ojBTFi8abKfhzo6dbpFUZVqSkvN",
  "key41": "5dSm4sC3VZgfVzK1HJuRTSYi5BNKtpZLjCgNXbZZmzmcqEPBAnyTCfJp14YEA7fRPQVnpR2G7mBbwRgDvoZW3aS4",
  "key42": "3b9WTbHUo4YfKEVEEAtJvBpCEi6qztk3tcR2QSXagFdww1eMqqvmPuLKsu4nYUH8mGkPB4oNfc2szdtDMNzWtTTp",
  "key43": "5nEBuHLh4LXVBWfSwkkpGPEZg6nWgMCggFuEy7NBkSVeZWDfaCkvvof5WzuzK1RSsQ8936fWJ1r4PfMJXv5DyNx2",
  "key44": "5vtWfmcsrbHstc445HcZ64fD4DbABSyvLxrAiZt2XCdFr7LNHd2AqzP9JKL9VqrZxiGCLtBQE6ueDj6FfMjDSkug"
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
