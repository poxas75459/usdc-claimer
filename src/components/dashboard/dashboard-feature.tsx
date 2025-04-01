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
    "5sdTrNvHTR48LfCb69xUi9NB8gKVuVi43U7T61DWrpkYWtPztD7bG3vQPcdjYxZxhF6aHsFeU6HGftdwkkCEGLf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wd2dPAW8GBRrQFUdCsGM7o7emfHXdCAmGWJCBaaQYfHvCxgaX6t76zZkPHmgvVx4ZdSxBHWV5dRbbr7r8c8BVp",
  "key1": "2UiBih8MemTmniXYQif4ytFJs9K5HfRZ6pM4neJbdJFehcFjTQZfp7ZXtBt1nwbeybd5isatKV7mxCQF54fSVdwa",
  "key2": "5dfm4tfGYwdjoiuNREF9hwnwJWUTNMyPbRwc3oWSX6KK9CXnsuTyrVHb2hSWhUopc9XL2drrMeBDso6NGnArUxaP",
  "key3": "5YxtwfveqgiKv9tFvzFg2PJhA4tWE1EhGpXy2XVN8bzUXaXYREc3RcD4SStKLudfUFGxEA2sN9bpK6CteYbNGBie",
  "key4": "vPFvn1JqYJTL3wLX6TVtRx6guyXCvtSNLWdZT37Y4shLZz78wU1j8U9m612n1UD1arWPhafdCeRXp6yXWF8GXd5",
  "key5": "2vRV4RzfjETfDg6k5fi9jcWhAd2cbbBa7C7qaj2tFJCxqksnD9dtZjBuP5Z6dxyMreDnFdhoi82gDMmQwDt1XEWA",
  "key6": "5vhNrU3eHXEhvm7PzPdCtoo45UwSgE9QPtmwfHkAqA8mHpXKG7ezEHD5pQ2cENFshTZzGy7Bvk85sZY4h62eHmem",
  "key7": "3AYNgKT2aE65WfXvva9BK5JwZXzCJFTWAAeWqzDBzTJVMvMQF252tWNwLzSmx8cJqEtwy5fn98g9ebU8ErLk26at",
  "key8": "4TjpFUbyPPPx3Uq5w1sPsNhWY6q8puZpRtevJryGHCpj8iPyyL6NQxnV1cmX5TLerMFCJ65PcpT3MdVdS46pnGik",
  "key9": "2HD7zz7pztowHq2EiY8nyWsULAj1MBT2Fuqgjh7MiZ6Ygmuf8ouC5S8APRWVJsGWgUXDo4GcLZg8fAJZkyz22GAU",
  "key10": "4mVKBEF7PUgLF82m5iKdGa8v2bY2X9hsJZi9GzidASnTmmFDg3Lf83aKmcEVD5yMwcmZZVA46sXXog9AZT4XpYqg",
  "key11": "GMKiZBJkH6PugmWzfg9jWV573H6ChwSd6XViTcuDMA9crJqu4TmHwEdhjB2JqCu6sz4B8mov1YrC7kuHAALEKn1",
  "key12": "BBGRptZPefFYLFdDrFeHz4R9PJDv2uWr4rEaEGNHs5Ug6YoT1h4u3oz9qvvPxcwa78RPGonyFA8xwj9PLrL7uPr",
  "key13": "YBhmmTfzc3vqvL27MdZEy4qCbVrK1fUjHvQY1YpHfgyGtQaPsFuB14AjutC2hdSAH738j5oSN4poSf56NZAjqtn",
  "key14": "2dJ5egZsqSmsEgAtTv8tLi15qH5jD6S82JhwadM5oNHESBa32qiKea5KTFKxf15Qz2JKRb5GeZkNCMgWgdFKjTGf",
  "key15": "3GjhuJsTCgSWLnqZWvx75pRqKc8NWFZ55T65dWdWA878sxk3cXe9d8TJAo54UVSnzdj1GrSGZFGiogvzkcvGb87z",
  "key16": "5jCLeQBuhzRVz8H4HS2VjHEBeum8Ubpi1JUPgNbTx6ZqtBTs1y37uKaCom2m9qAYixonZ3n7YnKxNG633gTraHhv",
  "key17": "4Xw8PbZk4Qq3aBc7oKNRbUjSwV3sejZp23NMDteHn3GiVZEZDwYYuS23TT2Rtb6uYbSW6VKXUcpqLKQFV1wenFiq",
  "key18": "3xEEeonuwHhJNaUSjon6q9R53PFqyMiLJHpPp8ndufzYkrJweojtgWjyWsNfik55sSUf1J9eTfSbksCTj6JD23cT",
  "key19": "5mbeM7vzz1qJDPtVgyJVVUkrr6ApNPVbo15pp2HrLpVscvhJ6AJnpnMNtY5WjzJDX9RWVYDxEaec72bppmxod5mC",
  "key20": "5emPjgSTLRvxwkYKMpix49VuLGk7musdHqtbcRr1uMgAnYZrEZuqRK8HDaNZUUDXNAF3FYsYhbuvGhoRT5Ww4V8R",
  "key21": "613R6bFVQS6G2J5dXXLDuZwdLMcHU3rqQK69rooe4SUW9GC98qWw2KmN67qWETF24N8vffztBjv5qsDyvh44Sbnd",
  "key22": "51KnHdCmW2s8BPSDoNsTakP7e7po8QnGVgpFQzFn3PfvCR5jumRyLhV7PoKSGw6VwchHEGSYt62mAMqfqK3Z9a9k",
  "key23": "3JdKF77avbDnLCS79k2Yi6JiPogCX8i197SgmqpVg9zbSsvZp5z49ZZhozKt357yojpwQKT9GpBf4uKU7ziBFj9T",
  "key24": "2PGiZKj1ttrfH4mnaqYPWXVFAoRZHXvBJ9sByBXyJBmvJoNr7sbVmrvMCxEjH9gvozXprhC56s6GujgTwcY7W5s5",
  "key25": "4krNaxMGh4SyY9cSSc6SQHs7Wmc5caZHArT3HgYzS7HcAfXMsdEg2ztoCmVNKSTEqzCGEz5Mbjpe2jm2c8XdWvE",
  "key26": "4daae73jmBRTYSBQTRJuTABqB8iL3ed2SBT5hvjLWkZrQzvZuzsWbMEQyzwZyJVgnEER2ds6EvxXgtkaGARNHsQk",
  "key27": "3CJcYoajoM7qZ9ct36Hz9JWVsrceDctjurNrkgY8fkfzuC5ciF7jbSioaQJynQ94Sn7DGj9qRPtqnGN5mB65hTFM",
  "key28": "5m1z41PH2nVWs2DV6XsAFAMyCaV3AFQXES7AZwxiNpVguKsCYUi5U98hAaD4eMnZ59wrien428GQew6E9ACxqPVH",
  "key29": "3yRUoubmVuiTThVEuYjLvLiu1EZA9we6CNdh58gfmHF4SVimpemsUuYxPZh2zjAuUpSe16F4DB2mxjyhoCMy8dgt",
  "key30": "5WQ48UhMknvgqcatkKWah3WwtzM2EH7y9Ccr9kA3k6yoQHq8LzfNUWbWu8CzeBLfD11xuamZgbmmnmq98kRrnUKQ",
  "key31": "3baGJUCzeaktRq8wFZrqVFZ7CcnVAkbQsqjoRU2LYPZLaJ2Zn2DpDoM7F6QhTRFMxBfk3sDY56Gh4ap8EZobqdV3",
  "key32": "29Fwf6Frt91DwZR9vwKmWDVBTpphRScnFD64KqSLd4EzJVbBmxtccoh2L6diygGpLoTx5gz1pQZB1q7y7keYsDbm",
  "key33": "4xhE3vrK71j7HTLzK8H6m4kN3vsNx3QR6VtTeGfBPKS8ej32bJxGwqraJeNxwFqehaCUzJ6AARZbjMNP1UkUQqsE",
  "key34": "nLPWLWFWZ3AQa3DwsrGcSkpbuJSWqYyWtKXiTWQFyK9g6Nz6y6N9oAJGYLMihJt57YaHcBahSqSuETN3Mcfom6n",
  "key35": "62zPQnngKAJXmyLyedX5HHopi33wTM8M3xojwbkFkLTt9LTnpk5KQdwZnbixinfZb42L3BcNbUTCXN23NLxfADBi",
  "key36": "3WJxMNqu6poM6U1ze9HgAJnFVVYhf6GB4otDS1G2xsfEap2J7szw1qW7BZRECizqxnMf3EjTMBGGUbSf8oU7n7Xw",
  "key37": "F8Yk9Eho8sjSWbwtkGkRA9Cnr2Avg3VjZ4huQ4anJCuwNuJYXaCaUA2QP7AyXGxFUGA4xAcPYWe7yZFgGJLNWpB",
  "key38": "63ksksEk61kRmXYx2M39C5YburnqMuyuQ9AWFVt3xopEp14ndUE1yh9h53Y9knLoLe7iJdRTjMrUjhdVgvymsC3N",
  "key39": "e8xaSwUGM5cUdjhxygSyqr663yEmagHGn9TvGgZZ6G2JYUGTfdEne33TwJ7pHszyoEfdGZZreKnZa9bjtwscAog",
  "key40": "2CXHcaakNsm9NWswSixPqDcMgWgA83ntPL4HUkwn4VTQ455XLmk1uqQosRNT1jN2Th6dZA72fpxqrMyvqaQFRDz1",
  "key41": "3872rPX9ecKypmMFtU3fk5bY6GFYY1K2512CqPvM4jvh6SKahNKFefDBDKHCxZbxEKaxMHdU6mzTPSzR2p9JbkZN",
  "key42": "5FAeRGz182MhbB8BpNTsRTL2tb4Gn8yYAhBSAbSHaU3ireTHEuyVSk2sR5CrWBt1pKtaFkzgHFNJRvz8oL3Fwso6",
  "key43": "21VGyKksoduTFdCg5ncg5pYJxv5vJCxWh6bLVaHPTyvuQbNVndK1csVqH6Tj3eNku9mjopmZX5zFAvBFp84JpkHV",
  "key44": "4Uy7HyKkV8nsVxAh1DUAzbBekdStLN6Zihxg3HEG6Rncy7URFPxi3RDg6WuU77iS3rGrzgq27KzVBY8okNqG7gFf",
  "key45": "5hyXLGhmpWwiFXXs5jzNtVRmezSMCPsh7LSNc6HQUp1dqUKBUeTJ2WTPZ6VXWP66efa4nY9Ke6M1Fir7Djpt6mA8",
  "key46": "42A63KAgncmdANk89Bm3zd8caQnM2u2xJ5Us5wvwUpMqtJDHSs6dCzgGbpyirc9F6bRVqzW9CMzFBERRJp9AdFzH",
  "key47": "3hb4fhFkVGsGrRnLxGrtB81RGKYL7RMzzJRhdKR5Tp4JKqp1d5zzWUSxM6dxoHPjeVU5R536V8HhSCDFiwD8ixGm",
  "key48": "3i4FJPxN2pi7J4XphZJXX2biAEbHoqASTmCjzrAUp3BC6VumuxtJ5ig7jDC2q4oXizePGhyqmpCywZS6evvXGnER"
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
