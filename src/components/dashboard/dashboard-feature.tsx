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
    "4QFE6tZn9SMs3YbhYiCh1vWu3qGEvn44jRsDYpk6EGWG3Ur2UkgUyAys786aZbCzMv4cpLaPf57MJ4hS2su8WQHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyaqDDXorRodB1GQ487HzHnoi5UCrf8BJ6tbwnL73AsfKtNBfHDifR23oHWXpuyShivNE8RVQ6VyYGUbYZHMR3Y",
  "key1": "5wm6cYbCgZMHv62spUGPhnhLFxStNurSdZp1PJW6BiStohP8cXMJL2zjaq43Rdf8dEPFpmVRJS7ygt17mgBYKoRJ",
  "key2": "3Cf6FgypofZ1Q6mWFwUxvBTAymWZYuDJcCTjgGa45AQ8bohHpj7P8Db1TfpbmzepySerY1VVrkEjiwvLE886vbFW",
  "key3": "41aes2L8pi7ty6GjMv7GHhRkXGLBsRsE6L57LkKFqzp8KRdALVmRJnexJXsgjxbW5P1r1WeHqUCUqEgPD5pDV3jj",
  "key4": "5PwHPhrsnVCaux2fqBJn6GX7AoapfaHrAzJeUiTCstQpPjsrC6PyvEbjq3MZfbuQt95EhW2SkbELhhHygsZ7x27k",
  "key5": "5XCv2xUQTVqnBLsHW6pcQ97uPirG6DsdLSQCNgiy2L9my5eRSj4knnpGQVZiDETBtva8v32XRfKvJRa4SDQdgjFy",
  "key6": "3PhWVKoR89yJs1SCzhL1xWSZQrX7Gi9ThHFPiSWjmY2j8M82AWTC5ok5j7hVFQsFND4zpNShkMkWDAemgrLBJC16",
  "key7": "4ZAL5RvsDDLvDfHAsc4FpzjaWBQYLhduPNgU6rV4up9iQUEerJEdY1QxCwy7rwiR3XQbKhEiep326izmy8eWp1yX",
  "key8": "oHJTxKXViCGMoUhytTHm5SSHdNKseTjT28kenyx9SeadqqW9sUTxpcaiEMTPCCxNXfjpmiR5FQ3JnMNkKg1iyoW",
  "key9": "eGchRZ2J2eZ5KXMnAav8fxAFhbPg4asx8Sut9MZzNbCeHzSdQKMJKtxuN7sEK339mWdbrHzWZ8PBucYPv1ECwSD",
  "key10": "35sYVLVk3325uPaskLbCwuytsEStUa3RJEEgjaEfcwKDuUjHbhbkR44dcDoSUzCdvioTSM26vJx3sgZgXyZqbb64",
  "key11": "4frCCihEeQYG6cWqFoSJLGJ4U66QiuGjkbGuYbaHEFp8dPoZvJ1EL7SRVLm21esqMQVJ9yR2ffJ59QfGyGVRfgkz",
  "key12": "2dM54Mz5FvrrnC1tu75oWrWubg9yayVCxHTiSJZ4RUTqSnpsGnKg7hwwTUgjzus1JT3fmhH95NVtnqRCX8PYtXDb",
  "key13": "4W3tiZbkhUsrb7YR9R5gDy75q3caskmNAZvpjDGbVxjKjbdgcjAzAPdgSE5B5axQSraLkSLY7SM3p2SRz1JQggc8",
  "key14": "5JFiDMEhhSYUrRYutjLFaAPQssgkNfbPkeBqe9KRBeu3p4mcE96igjfop6CP7qWi1KV6RnYwaV8W7byujHGRqxMd",
  "key15": "2XGhLJKEiPLos5uwz6rCjCBHbKD1mMaexxga1N72SPx9aW55kcvVjFCr35EJZquHV3TnDZJi6bLVcSNS3pZZyECB",
  "key16": "Bg5Sy9CRg2pfE1XyZGGNnrXFFzREFnyGAefetZMQJedG1CjGZdEEA14rXosA7qTo7EFCLwLtLvtHXmtixPSRUkj",
  "key17": "3Moma88Z2ZhKmjWZtGJ16oZxoXfGrdrm3LCzxuVmvt7vMWs2Nre7CsYibwNyT6QjmmQc1QQG6nX25HvdjjikSxHX",
  "key18": "4bA3yptTJ4asqq2d6qzqZ2zSgBzgTgdmNfUjS2EqZvPR6jftNwcAf7BfhpYRWhJR3vYUt8zy4JAHehWdEd9DESRy",
  "key19": "2NWDzU2NrLkYG4EpHGHVVhFUbjjds6bumtEY1VYx4z3QHHgmCdKRMdZbY4GAKxfTKLgvAnJmagaSRpvCZeQyqP2U",
  "key20": "2Mz9H6DXmSt8phuVnPuHFnXccJ3UxduZLFuYV4Sz7bmggw6uwEDg8kQicMjaEsG8ELeFKkNbgjBZg4ywJDCZnKZ4",
  "key21": "4nuzhATpQ1ZoRLQALLLBiC5MM8L9kXWbc8fB1jywRMk6NguyLW6bYyqUoeLBZ6bn9iAzpuqEDcB5mxTTVmkDN5A",
  "key22": "EEQJkTqjRCmsRcejBLwBPMBYHKssviftDiVaHrrWW8mT6Tmu66aWEC1VXsfdqcN5HrQXDVPXEuRZG9Byab3DQMt",
  "key23": "5Cg4LPsZLmivL6TMKAABmv5JYY5vYJsSVULeEXz5KQ91PvAbRzoUdQB6AJVRViGgLh8PQpyX4dhxtBXnUhLoif3z",
  "key24": "4o8puw27y3ednd8CXhJV3EbpuB2Qk4XgbwzGqzbBPbnmv5z4WKRnoASB2CLNB8Dwb5mxVYw8jcq3e7DkFV6Nf6D3",
  "key25": "4H47yosTXSU7eu8akrcGphibi1tMARjCbkFus4n2CKf1qpPV3SuHRoZ1SHZEUYkFcjp5q6jjdHszkkhEtG7svUQN",
  "key26": "4PE8S7ZWPPQLoYmzMKUueRonn2uq7Z542iXNbBNv47o9gNr72XysgVhUmWQWPuHj1rv9AwELWUvfmDEc29zjfToK",
  "key27": "5CUoCoDGnUavNiiNYZCSzPvzBpCHi7o7cG7vwG8chgXTMNsNi2inL4tTdgLxWBMSMw74i2EKNfuV4PrCnXTLL9vJ",
  "key28": "5SVodXhhQ5i7ZfDQnFmXS7MBEDiBVJEBcXEGHm878JzHmMGMjJjkmTPdQL6wjgYJkFot8wXXTPW3iASnH8hLTXDi",
  "key29": "2wmkHgjdqQ8HA1sBFBTZLUyH2bXAAHcRgY6wr9ScFXMYiMHqEdFJbZ7wgC4Avujs8LhTvpjHuiPxR1shLpfxYPL8",
  "key30": "4Xq3zCePcXVM8WHBHVFSNjMkKgdAbdbVmJ6QrVDXAkoskRNbazmywsm8846GHRw8AwPg5F84jBhnHWznakS45bvM",
  "key31": "4bfeBDFiAnGfSFhTUQGQUHXYQz8jRYUoNEd5ELpVqWWybHdCkyQfBL2VUrGf1i9PhX8dVxLRGuR5x42QoQswRRMk",
  "key32": "3seoaWjfVErsNTHN5vKvbXj2X6SNrQb9rFZtukQ3m5mtN2PqFsogmMgJG6J7ULFogdKaxsrszNYh9KBTgW1cc6A9",
  "key33": "pi9LABkbtvynxgNVWdLsuPTdJEvoh86faMB7Qifu3kmpANYhdqhjSVp4Yu1JZLntzzkRD6qr1vg3Wo2fgyY2m99",
  "key34": "2DcaWrkLX5ddDHkqvXTAZc9Qu5BoXKbs7trrHXDLNBBBFK3SuR4wp7AomdP9jYv8ijJVLqM3N9kiGSpqnffq1W4p",
  "key35": "3MqgwZbxCk3qRZArGvc6oJuFyxJesqTrdgNhAcUZe9Lw3D9zVeSWxE6B4iwy1DbpEqGhgAf7mD8rKYsHenAJh2kn",
  "key36": "AWx11Gpp5hv7Z1anB1LFzVUnABD77Ay8nz3DKDaorhAV1kWKnJa1ttCgguRMCFCPvM9vdHPyPmu8muW6Gv8gnNT",
  "key37": "49RaHRjB3L9vRTCG2vD2kfKz45cueXyHoHc4xY5eATKzJB7d1whZhixkUJqpCWPBh3m6Phghwc9JqsB5wCH1jwjK",
  "key38": "3uBvPQTzVHypjeb4QF6qdowW7mjpAEe6E142WNyHwRnyDSxQRe83MZg2oKAnKoXfXwn8CxKvbzaQsb41aLDbPWqZ",
  "key39": "2P9Ti8dgDTp6fh42wyHXesbTKKvvyPZhRCJXyp7yQ8zR6gAxZma2s1uZBBc2trsH7Wj6Y2upukNBHLMCDepDrxcE",
  "key40": "ZWpZQbhHtLeRTAWHmRXz1917agB7EkVZbew4Rft8s1JzTCQ31sQBVLis2cJPjNYt2pdfGKivdvhJ8erAmTQ8JnC",
  "key41": "27eDg3ryVT96rFyyS5CLHj4zyfzz7U96fTRYZn8NHvXmkAesSACSHSXZeECEoPEJu2oHZ1NhutBJMSmqK9k1HnhM",
  "key42": "2qLJvFjc29syHZQkRxFTKebvgEAsHVWdH9dxcfT7Ts6S3fpifhLszkXzkRirvN5XfUWCPDfkzi9DmLmhWRPu5SXJ",
  "key43": "62jLD8qkx4t89gLFwQLzqogUKJsXrY7zDjNAVEaEQvmwfCqPeCuG47EEMXwNF5BCDkt3mMg9c6nZrZr93eeFraD6",
  "key44": "Q7ZQtG3agFrpC5cUvVD6affnJfm9pwajgtEZFZZfM1wyY6nt5zPnDSCandm7KXut8uKTYRF5ebUk6pRGHeViUZd"
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
