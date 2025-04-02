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
    "2YudEhkwv3xicrUzdxBmv8sS1h2bLAWkh8LcwqEWJJyBd5zrMZ5ExWpWeSSU7P92XUqpGijipz6xs52Ax86QSYKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMoTqkq27eT2wd5W2ZqsfqCg4G8VHnUP5WVP7yLhZjujUTRXkNLeqxyHGziZa2q2Jw4fkb3CWQwZm9RoZvw6kaw",
  "key1": "2nCcbJqT3NZjVPzrZkRZNY2tnpUaJeENnPBBXyWR6dfmFUPK9HMzP2S4JkFtmGMRdFDdX9d914V2CRvxRacMMhGn",
  "key2": "3Lhm8K4ty1jHqiFKEcQhtc2tEEeZuyGuxWkDxiYmSywCdoF9M8f3wNJUTVnzzauJbxkGGPFLFtCENNkLsmuYNhX6",
  "key3": "2WBgwHcvWYGGUFhqKPqqzomrSg7raQpJPaM7may1P9eNE9FBpLVM3iTBtsEL5wLPAhxhJjHq6Cot12c8wNbHr6yH",
  "key4": "2yEp9hhvVDFeTMUfhuLhwJpXzyrLAdoucCZgzJ763ictpukpeEKKRaDudz5aWK2kGvGR125FnLK9dUJATvTvbcCj",
  "key5": "3scbrBx3kzR78AJMdaQPXQarUdgVrmBZkLP5kpgNKE5scjnEjGvWBwmCt58EsXARSiwzNVVEDVVCAAXtu1qJN17W",
  "key6": "oPMqemQBBCyU5xbNtcRKhYoJypQi7jAxqVEmDWqR2ePHGGhAAMJ3PDQr4xu2xTxavCBKzkRfTJui1s5EKhxz8Cv",
  "key7": "4r8nbzL66RRa224a9QjREz39RaTL2zZWR5UFtPPU3YAMJS4sgjEvbSLCMsQoi7i2LqGaLFeT6C15FXmKRiMsavNp",
  "key8": "2UTTm6YnyBKAw3MTRDqaSTVpD5288gZjaz1S3A7Bjd4KWc1pDTwWdrex4iNzTzDxMc4Tx7JAm7N5g3a54SwHziRS",
  "key9": "36AmS86j4wEUZrv5aPe5BWTMBSvo2q9qWCLPPkwNBYeJdnCEw5GwwmrgfyFFCXQ6Bam3vSSNouqzrnVnMXxkg6ts",
  "key10": "jvT5XhWhFGqJmRXBPkLLjapednZQzvUypFVsYY6VVPwqiLStGUcaPNkfKsXx5nL3HK3yX8RZhVim8jX2QVBwWJx",
  "key11": "5S9MTAMMb4bXDDTrSZPUaxMeoUQMwhotGQ4YbDqoeoUCDd8UumGfYpiSWoG2AuF3pM1DEbugeiZ2w7DEqawf6Y93",
  "key12": "57ZLAvzECpWZsurV5xeDVXVTAmpapqQjpvm4JD3sED5jA6MthNhhZv3GA9JPJ7WHq8WhvWey5gSLTm7bV8TtKLTo",
  "key13": "2k8sg568Q6WoE3UT3QzrLmvymWKNYAtTkpYGRa4DCmpdAyB4v5fRQ6CoJ1To38A3Biy4yCFGzZmRjfyeU9bZ1oca",
  "key14": "5sm9fTbLEK5udPqMmVb3De6Maxmy9hLWd7imjyh8L55c4ec3NCGapjd63CbZ5cpxHQ7eZBtG5gCj1KxptPyuc2iv",
  "key15": "r8iWanuK5S5fESGc3hpQKThkdTXsrvQ8PUvxv1XWmxTBWurRTMKos3Hitv5KLNdreQhDLJfWpKcxUbQmK62YPoz",
  "key16": "5o8wdn1XM38CxmmmC9unLXhbPoGtKHgSbCyqDEBmv6azZsv2XcVGJMFUqCey45RSDW8M7YdTLq6xKNBEZCPJie5Y",
  "key17": "4W84tZcf8uKJzaep57JRbUjnbMGCJa7PMwketLKbqaPEESrLRZGhtWai1Z8evv6f8vJq9BaDnsKXx5XinM3om1ZF",
  "key18": "5XscS3p6Jc1aX23xakKcihc42eTj5kEdCg4CSqrcDriZov82T4A1GjgajGpGFzT2f4ZN5FUymg6KpMBrouTWwe7c",
  "key19": "gYQgpxbXeACEL5pfaYMv4X1sJmzFj8dnsJirx4Kv7agc61cQCuDXeeFMtQ2bod38uyTJH8GnQxE7qT53A8SJ1fg",
  "key20": "2tA21Vg7wT7cm6kh7HUnSD2jLvWPMptU87HnkLqCc6GMxGNh923FEZ9WQZm4PFr2r8SmCRLdgUAbv5jgSbQWzvf9",
  "key21": "5QNeg1jiHWa237i6a5rt5zLk8J1kJg2sz8fewjb4eFUboJiqU2tXFxpeSfNn6L4WHdM7mbhXo3hk39L7niDQjWxN",
  "key22": "ASQMjYtLMQRDXNxfrNe6jupU3tLSeeNrdt64DwQA6TTRPPp2AMxMKqVRzMsSBi7G92DM72StdGFjEQwFvfNy2bn",
  "key23": "3bzjNyDok396vrLS6sMKXMW5jkRd3JMKJ8pvdEtmqMM3ptrNJD2JBVczT61scXBBV2Spe35v4T2M2hKR4auV2bKj",
  "key24": "3GGQ5ByF9Bcq9GVPTqDrdSeW3gyB28jf5iwJokYyMfTaVSV2obnio3btoEm7Lon5hL68Vg7SJgm1n9Ej81mQHAQN",
  "key25": "4KHTvmTTY3UjAmhhnyeEzPfhhEWup3j2nJN4hMwJ1EiC2XHy3U3rYHJtzDoXzbyNhbeAWSE2kDc7GABWSg6FuRyj",
  "key26": "4mCA6EZ9dLDpzVDVgudsZnUvi9A8c6Rpsy1KRzXHK41Ysqv4DhHf3jkimcZJvZeCzbEuA6z9MzybKeFdExoYjDdp",
  "key27": "4LeL3jwwerPwksUH6cXdddCSbjKvv6qH6Wb6QY1HJnck2qaRyhatjYxyw3hEYP6vqXTesaoej97UCsmoB71YMbQG",
  "key28": "XeU2VbJzhmTsDvd84Qvy9BvJK3NcQot97uZkVQfFe55yhKuZM9Sv8gpfjviHobEgKPTpSZCCLDEFfvgWzrzcsJm",
  "key29": "29ZSWBWgw1m711xN8T4CodkQxBQgeKnGCJBV37FJ8CUhhspP9m1sPYWpJuifA4Qbeg2vbyVXVHRi2tQv8s7E42Ei",
  "key30": "o2tkimoeuoHxYXZsXCStcNNfEs1DwzMjzQ6oEX9ntoEbt3aJqarbGWGFnekpyJVAVky9Yg3Tty281vEoBWf62Y2",
  "key31": "5EWstLHWcrzsZiwVr8qvLeqT3n5i8YaZfJW73x6qwN39RbuaPt8MZbXzEVVEKbAYGQrATdA32q3yuiqNT5kHpK9o",
  "key32": "2q2DypcEHhN6Pi5NrL6jmPCLQk8T4NesrGYZqPgrjNBWN5JhHdpMU4EoChhg7ZP4znveX4aEGLZVV7HEUD9j1Moi",
  "key33": "54d5XadPrbLzmyEdA6ghgFuAVDaHy73i8F5uvNiQYtwBMe8cVATTxH3a14yqtRYWEzqnaWdHJzBYWDyCfygbWUx9",
  "key34": "5x17kgd6KP8xsf8UWjYQGFrQPUgHApDWc6PMvjkMgW1CxuuvpjhJLdc6BZodrmKbAHKLRcYrZGyNQrt9DLVNh6DC",
  "key35": "5848HgsrMCpgmkXRvQqK6maRw9VzwmFW5QPjt5YajQm4F88kwCW2yG1frAoR9YPtY8hGtNgioWCfa7MFsfMYNJGb",
  "key36": "kKugXbG2b8ksazH9RE1UCKd7qp2miuPbyjnaNB6xvAGEwh2jmWiCDi3V64569Q41CUtaoz6JMBFSWWQH3SaFAs9",
  "key37": "5mN5GgUVMkMY5PHJdSM4oEny7UEQENrzxiVTf9Rt9tYCvfk3yVTzzThuQ9pS5VfZgP2gQ79jkjpWBqvvTjkbHjho",
  "key38": "x2DTDkDdMGNM9S6YAEAx1HpriTSy6sDKj1ZCZcH8mWE2qjNeicekYDvawUUhMtc5HpyqaA1irhtQNAWFiSVCFdj",
  "key39": "NZhs9JnbjY8LWHZbyMsJMmXdBA6Z1Rzqp3QcyrujXN6di8QVMPVoJbRutL28tDyv5bnX2RwJWPJMbNhpGbD3VPa",
  "key40": "VwWwat8DzKKWa3PYMigWXNgW6S77hFRnyw25FrknMr3EnK4a816fUVW3SuhktZCAeKNNuyuXsQkCyx4Bz9spicM",
  "key41": "5iA2WUMCaRVGCPfQmSKSvya9B1KgECizE937sexRutR17CbvrBRpdCEP5g1K8X5bbWLd8vjh8uRYVsYBhwyi4yMG",
  "key42": "4YX5VbYwj7tv3EPsHZWRQom9vCj8wnmrazhn9EHoD2Lp9HiWJrc8x1cUL96rEdEByZRS83fcXEeEG9AMXuhiKTUU",
  "key43": "5hPdEiDZ8xXbRrNbmPLSThcwYed7kzUs471Z3Pvcj5AxuAPfvMRhUMb2KfSr5gyFog6as4yGdFKYeDaZg4hWPMum",
  "key44": "3sTHkLdF5o32r3dLmi6fe7s3HezcVtXVAJFRR21tgPiJ28vz57oYMDimSUuZcXyXdDLz6xQCRaAhkqF3JCzAfkg5",
  "key45": "21U81MfBv2LQUTMhd6g6LYm96LrbVtdvh5SUarfowW4FgGqLNmezUBzUBtdpDhmkL9CUs4mA7HJdAcZb8VM8bnqx",
  "key46": "345JZK64WfLJbqfRYQnMqonHyWioMGXS9VZk1BKDMScpvkrUhf5Er2fVTnxcwwtoMc5XjqnAaqvedPZi3BwTXGWh",
  "key47": "2CvFV2S8MZ28GBaWSYRXE9fEQ878dFxei73CEQSFvhZL7Ur7vUQoMEfays9P9qzkL2kjpRzP1cDwZNZjqWanmvWk"
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
