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
    "5pw6m5YgGsMVUKDJkfT36hiK5ND4TWwRa3U5FRXE9VxhinyvhYmqZZbjnxUYWCHwadtoyueatoHSrvEdju4w5cvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcd9CtQBKZ3b227yZKBFzNhLNx9235H5yfREpGCXePdBZvMgbJ8VYGycazGpa7igapU9zByKGS6moYPnCtJHzMr",
  "key1": "2Hpxkbqr7cjGcYuA4intQMVRSxBX89ztCm5PNRNf4Q9TxnUVLJSLRGSwNeBrusfhpdPjBES738mp2npC7W2ADX7D",
  "key2": "5EmRrNYr4ugJ7acArsvW7gitRDzTBirF3HgQhb4yYacpFboGV9EV8uD3ckPSpcTBWy7XL4bvCfTcwWRbYnrfHZ8S",
  "key3": "AMAhqXwb7PE4WKDQiAxaUW7EwaVWrdAd9zUviroVocCS1U1Eq6kiMnFoH7a5HBAGrSFZ38ZJWMiPax4ZsvPrmef",
  "key4": "43uQepvXcZVkGXWXYUiu2mergUdswpX8KmVbrjKTj1araxv6PM3gNQzbvm6GfXw1YRiwU3pB8v6BzoC7ts7p7HGW",
  "key5": "3nKPCbi9ksQYJreu6CHdVANNZE65E9qX2Phi7SQiLgCQ4pAeRM1ePV4qRVSrcuyu5EqF8p5x8gkMhf9sQsgPXdEj",
  "key6": "2RFmeZnKhRuMFcAeJLrUeBJCQuGXY3iMdLMoS69LtNrygUzwSnuFiQKLvJo4H49eXLdRWoBHEvWdTcgbf5imRCXH",
  "key7": "5wM2qek7XnbvWi2J7nLh4aVmcvKE8fiPae3yc28UsSvz43SuBPL5NnbJLzZwXTHCiuK2KexHkPwSnSffwBm6bXzP",
  "key8": "5eZ2Abyu5sMkGkPxdMUChmhRU4sgKERg6Yh8NUMqGVjCWHzN9AZJ7dVtpgpSr13oXWMdFJMw1cgAb4CxxRdUwFVs",
  "key9": "2MyCaYSYurvZQR1hXpv2HHss5UXroGSHcsCmfJ7cdFemiUHx3S22NNXd43MX7cSfKXbDbKC6yn7XVeTfj3Q4CgSy",
  "key10": "4ayv2QnUyAgM6affPCWDRAvGJg4GEdd1ixnBDQXcqErDgGypf2kfJQim5mFKLcEbqd4GPqMKSPgGS4WbZbHWKsVg",
  "key11": "3dW8qm5eHuT1CQCpWL4ZDFxgwjCrZH3avVuHNt895qXtqQ1QFUGedrJP65sqzW9BvkrQVNpWirfYAypwtD1a1bzz",
  "key12": "5HmfvxjfGVUNwQZ5wPeQCRf1Vt7VPYHmwiDyCMeLbkyHHSSK1YDFJb7zQeeuuk21VWRBRDGKFXDBqiiCBRMVmRyM",
  "key13": "2CEyz5YWLzpL7H9sKzJAHbw6nvp7XMewMGEPHqdbXHBJMx6Zx2JvCAsDjfrXW7XCx2kwxQVHMyxNcPkDrYPrHrRe",
  "key14": "5FzxeHyvdUq4WCMNsaB4e5bG8EVc8Suwkyfxrm6WZTX5fZaxUxbutFZw2LEXD9TacdJHNpgK4pyEoGLGHh8AaHkP",
  "key15": "5W1J6KALSMeQnbY6aFvmf7yaaG4i9TBW16d6uVmymz4UAoD74zoghTdCuhFhEPpdhNB9Pfd61njw4ud1FnSWDZWV",
  "key16": "2Y1W2so35EujgoBuZ8AKH77LoTfqbD4gx3pW6eipZaZHt6qahWXF6JoL8rr4tXEhuMAQxEK99q338YGXtuExZmWw",
  "key17": "2QGWb685beyX46R4t9ksVTfwYrtyUv2pfQrsDyV8u28TzAgLRz1bXCT65V6Kvr9hGX89d2k1j6XxgH9BZmnEqRiY",
  "key18": "5TxLZhqJJdo3YBAtcBZVbNN8GFurgrRhoLqtJb3Zq6dVtcZ5WSkiDL7Pb72XywcsHD8MbkFxZW41TAMwCTKu95sX",
  "key19": "5R1swVVQYzQXD8PskuDNnno3Knq1DndU1qtQmWUTV6XBteWBZyv2tGQaqbskCxay4QpCJvAhHN8MB97vLLJXQgj6",
  "key20": "4bnWD5ethpwad1tHcxg2BrrhedL71SPmqdB5jXgCPYWae6B3vjbhHeY2atgUqA2eq7rzAxijbYjPvAZ2JKNWFP5w",
  "key21": "4JNcKWhv2MUGCLt4TMjNykpfJHkNkbvprCJAPMt14R3xQzc1pPcFMrLjgL6tbEFmLtcuWKn6bpt9qvoJcvpmPRdB",
  "key22": "SDZptNbbz7GmfKuwDMGgYhdXk8h6A3Mzs4zmbjYZxKhz47tNrYxWvKhjcuZpgswRQHyZxfe2XmpUq8jYrZ5mGRQ",
  "key23": "2yg9dXWZzeaQiVG8w4iapjh5nAAtS8kNHX7y5WHfxMS4NsVLBYPraakuNZEgubiXkbD5chLFQdjhrcozLHgpwPHh",
  "key24": "4PB9zEonXwYLV5Vmv6fqwVbd1Lq3G4zwT7pogE3EE4iRNgipQjBTKqoFHwCZA5Pz5gK9rrCYW8g4v3a8NwgDtRcs",
  "key25": "3NbYrvfaHVD6czkipeyZqz3jLQFneTg9f6fdooCDRSpzhCtoqdgxvn5D729zXBmrog63t5z98fYqiNqJUNtykrJ9",
  "key26": "5NRyxeAct5n6iXbSFdwrqkojkSC2D7nLR2xQp9uTjKuhWYRnMvtsP6CmuMogFDPvzy9Ums3hDqw1gmUKPeh7fVVs",
  "key27": "4mjvGcGGsMWD6oRN9SHqWtVq2LjrjtNMQsVsKC1VLdSWYu2XSfA6TYZzobiyaqLsPmhNd5ojTBXb6QJMAVvxe3wn",
  "key28": "3h4j2emYEtt1kawkZWAAruZjD8f1xwZPLnYZZQCaxKfHqJLgq2pH95BenduwzSbkD4Ac8ZZvqdvpJ2EhyvdKf2LA",
  "key29": "YmseZhV8UC3tRzKYH5twCvJCwu6UzcwAUg3vPtXqgAbF5u1MeFBgJNziALhLD6Dk5eqHhXz3hWVxaHCednPFX5K",
  "key30": "4FPSHPmDif76By4ujFn5vusrqA4YgGvcx1PNrngLMc33zPhHcxvEbQe3gykQgcTrv72LuetNE2my7G8xWxKzCddw",
  "key31": "285ZcyG6HPugvurch6ykpeRSaTtqdWKpApaJPrx8U6RikLuMUv1j1CPMeGfY8af8nRTV6i35FdtiHcGsX2jA28C3",
  "key32": "4Lg4PwTzFLtaKjXasgsMaBMwFBSXx5NASF8WdHNTKqkU9RjyGjq1R9nPNZRCzo3wzTdJKKqthtfRnQnMJLJaCRSi",
  "key33": "S7sA4hrgBrBgz5iTwg2ZyoFRbSYczPDf4EuUS2VN62kio3WnhiLcP6biitziWqSDaeznqipybzFMZJBepYTxm5U",
  "key34": "3fq1nSk6erptAKmhQfNfcYCN1qpKVTfmrpXtjR8yrZGFxZPaAKYnoFS9Dvwja3Fjz8EnGPpBAPKxYFAsYVmzUqfP",
  "key35": "3Uh3wju3416MwDYpwCGvtP1UEo12MhGnxXUrTnFfvcxGy7rNMvEQ8hNHPH9TGrWy6grQid1DpT1YLugZn3BdRpdd",
  "key36": "2VzE1m91KeUMkFsYLtpjmq4iCCikjmhfLsYn1erzXDFdF3i9jMuVXKJirsAortgH4H4Z3zMJESG7NdR5U8WQ7csn",
  "key37": "xcdM5nt6bjtNb1eP1Co1JHYLm399YH7AhNnMYvAvbYagjEPxuZNFBRz5kKocQQmqa2DcP4jodXRKEyqppsYDraK",
  "key38": "5YyejFdAPeF8t8dzUTQPFCHzhaKfKmMX7gXqRvhSt6NmFn4AbLYPtEAnemRQtfLwFev96LeM5Da9tjzKUZsWc83c",
  "key39": "5qTK2vKM2HfSHZMYN8HQd9wW8UcaYq3Pfrw4Q8kNsy2UWx3qnMLRxBqogvQYg5fTSsnnmvq1wr7AiZccWbEMzUE8",
  "key40": "B4zcnp8b9sixDkCfH1deJrrPmbzmVEiyk7RXAVaPDz7YqC8qk9wWt4fSNcoC1UzH6G7k2Minj2n9BKXrqh3TJHw",
  "key41": "4aqtuAMgzbGgjufJdZYJwvGUMtFMK77QFUVckPkKmhu2764MNxpXbcCjd47rVjY5aD4FEqriXymAdVc6jmTq1YjW",
  "key42": "Y1PDFzF3fmsKn82tjfAaNMnW5sQMEMd4wrU4t3iTgEp11VXw6aEFQoncDE4FbUpEGZ33CcZ37SoiZQRLhAXmETa",
  "key43": "4PoTW95ijzUWSoj8SA4S7ZNEkeSETgh636rdaa7wL9ERKedoCfu9FoLQ43bHjwebAjEv7nyKzmExBGfRCi7LUHiu",
  "key44": "74BKDxATvkLL1ULHSoeD1HQMpHUR6iTQbbmusYojy7BjoDdjZqP6pv86P7RHhobGpzMPeDCPLcJaoDTAcFYhvVg",
  "key45": "5QtqTUsJgNUPkqTPkjhTMtTZPVAY6QzsS4ZF6nAAVGNpRmWd44C9Ljc14zYgNCcxCiJUtNcUaS6FrvAK9xETMkH5",
  "key46": "2irvaGuLn52W2ukBiC6XNhQaHzgG3F3D4qcHjhvjDNoduj169KUjwCrRBLBshWVHSwywYUAC7x1JyrHcm4b4gDrx",
  "key47": "2QqGf1mujX5xmo3KMd8yTtNEBYBBuVTMxiEi9xG1e4jQUmVn1VuTqVHtm1mkM5oogkA8cnaRPzqwWxnSvNtdtaqv"
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
