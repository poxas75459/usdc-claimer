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
    "5rEtx1nhm7ukrhm4MaVnKnoUApwNGRdMKgH56uyEVAwSn9A4sQnF8kwy3VF58nVGAGHMNMXuwvM2nzAkeNZVF4EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZJ85LZd9TC1fhQBoU5SAkxXS9pdBk3DfFToWYG7pGt5HPxnVzuxXG7Fu1bhfYJFuF1m2oHfWm6WS1pS7gDJp7Bs",
  "key1": "3EYXNxeFVcL4YhK6ugpJYExzmTuBBN5xdBvupmv2e5X6jqnjgHZfaavbQCydRbKexpNun5K2ZtR4L9sSbBqkPZiw",
  "key2": "qAyKNPZ99LbGuHjBn8fbF8mmKNBT95rMhkN8MZgb6zj5ud4kmPRQA1vtqxZcuJopTKTFacxL6AQ8DTdbKrCDwih",
  "key3": "662bBELZQK6aSnTU8gs6CrKr7KvtzgL9VPBBGbxuADbxW2cDqNaFfUqTqRBRMiUNq6rpnXUG7D65Mhthr2aaswTT",
  "key4": "4bbicnmho9xgo9pMiPTjf8gta28ii6efSSnxrTsd5jbVujw8R1g994hd5y63daJpTxevgYAAmkDBpx8WHkvfFxDu",
  "key5": "JSyN3P8Tm5woAfV2SmcdPSivtjzafuRNhXrseVERMdxM9cdZeXxvsfBXHwNcXwq7qbS85cHBVByAQchZY6DBTCA",
  "key6": "fzXo2k8NWe7jEvmmZNBcZnxffth1R3rjbvZSndruS66wLRi5ka1WaHADMAGTi1oDMwx48tkjyww3UCyGqzeBvHf",
  "key7": "3ZoTHTu7mGb7hLfsRryhBmXP27nKsh1L8f8AkpvfePvBVTdDH9D1XY4QyjuABsvNWhnnqZFVi896BFiyvNDsJcGq",
  "key8": "4ny3WvbaZyk4vAiwFGBEGKphVtNLAU6Srm466D2FEENe4ZCFJTjJ5GBVJm7kzhW99QjrjA2EBV1uLvUHi7djjN8D",
  "key9": "3R6yf26NAp7RVgC7syq2pox4VmN54ccovcEFk3KunFuEmczniJh3wfQADr8GmPN9Z4CXuvzkBUbnuBp513hiyHPU",
  "key10": "62D54wLJy67k2k5ZratWAD9AGSQG31GRAmcAtFqtV4gyqZBPi8erhuNqfeHfvJWhjVrZqHNoxcZMtQpAgbreDREL",
  "key11": "23MkBcWcoUuaUYnCaPZFz1DLv4nKdvmQE3uhXDzSuzcPRcvfR3hc6fta2g5EQUXP8N9C2BumvFHV3X1ivNEA4eud",
  "key12": "2NJ9QuUcbzGjx15XbjzYv2mHXidiHVDdxv481EpF3tCXudyYQs356Nn86T9C2HrSH8c7TK85V83T8BZ3ACujiu2V",
  "key13": "63ejP1Wjs6731Q1JFmR75QCEaW5kbmdGze6AxocHriCrbG4jVEDk6uACrurLx9qRj88YwN1N8C5DRtQtKbMUyRFn",
  "key14": "3pp6iSfsQNq1RsSG3gKabQFMjabp1Bo4hLpHyMkUaT7PmQCYJRoxrmUGCcmsZchzS55UGbzzDaXLCAeH2U5X6A97",
  "key15": "3ZWoj9wWqRqX9ryMVvruZaNQpGYu5uAqeGy723r1he1C2iRbJuHtPe1jxyAbu4TVbrkptJvvqq7c8QgEek5FVyib",
  "key16": "8bdQa48Ne2Vs6oZFmPYERnEE3BubEuBpRUWoFhr61Efwz5gRF56jX94UwsLDCHfeREmDFjFvc5UVg78ueP3y4hL",
  "key17": "2v3MEyFC8Dbvi7Bztq66txF8uJnq5wff2VZrRMs2cf4PyPcvQea8uLsn1rgAjpY3DBtAUKvWYT4XEggoUpqYVDur",
  "key18": "4BwLKmrDaRqitkpo7Km55AZJnwtDzNfRnj6h31TSNn7bA3g9zj1ETzD9CSe7TDYxTocinZakQGkBPMVziFydEwaf",
  "key19": "3CkQM12M3f7NCri1aNc86PeKp6XDu9EK2U7ma7Tdz5M2W9cZ3ymm4Rt1oPrjoV67ctkexq2pcvTjWWuzFs4BbPt4",
  "key20": "52h15czRQULCVUvTT6W4NRvE1wJZaYQFnSqjcC3d4fvtBxDPqq42jMEer6sMQyAs26PR1XL69nP2MnD3XmKHBxja",
  "key21": "3uzfec41cs6s3W2SBn4KdDpUjRDht4wdvHCZKSvFRwhnuva1PptdFG73Sy7MLSMz54QPqz2oTkwV1ojnAEhvq3gb",
  "key22": "25DEstLenCmJYcc31bHVJ14kxq4DGoqzi8voJ5J1kkkTwbGJwrwgej466baHxyak8LdLr79XUJysta7m72eCq2mU",
  "key23": "5ghhP7e9P73NbzxH5aDV12L6uX9VByX3W22VbukXhNBQzNkvW84qVbSPGvheLWG2SWmnAaApAneCe7q3Fk3oV6dg",
  "key24": "5nBNCnq4pMT9cVCZRTzfBn5efsH4uQqnnuNFTANDjNhz3h6PcWz5HshvX7xFYDnS2zMdt1eU8xTQWRDGJMRjmUrA",
  "key25": "2jz8Kx4H7Q9rzhqQGxsZQDHVE46e2mkgciTG65Gubsc6gMHDVQZRbmahHH8RrZztzL1QdoUcBpZgoNARabkx16Ui",
  "key26": "46drrMDH4khrSYjBWiUDb9YZGhYhNAZCcBPum68h3Eqdi5CECj7R3VvtVmhwtD5VCEXYbTXNmsiThv4oEvPEdG2S",
  "key27": "2HbU7J4u5NtxU5LabiTY7obiEzg1vcQpDxVh3dnbXjR3v8DJ6qoru9AqoFnMNRcK2Q8VhCVfRyQ7aDgdEfZ9L6f6",
  "key28": "Jp1TZBBY7wpRgVAebc8JvSeAxvkyBwhKUtEt1FnRfJdJ8E8yCEa2cKLc5cWfftwf5Q3yMQmjsM31HMLD5whF7PX",
  "key29": "66dXFndnir8Gce7xgTdDa1yKkjjz9AbPcBmnmHxipcxmTL73Fd3Z9iEF5a8DzRDzQLaXdDiqLXgR64H1uodCyJ8",
  "key30": "4MzKoj8cQ29sUL9ssrUiioZ8auEawKm6VfsBdvpZoLa2QHRutbDf8ZBmHLQVysaigfPFkEysy3vS9pWCZ8jHe8QK",
  "key31": "5Whnb6gwiKqTgAdLeLNG7WbjEkhxshtUMcECLFwLpbEyQ9zcgd5ty88xoKhtpCD2UyAFNResFGxPDXWaPAkjdgi8",
  "key32": "uUwicpUZv1pFkhFbEn5JLNtgEHjsqQfpk61z9sU3gNiM78MRFYipE18wqyr3yLtaSMhqufJCB9r7SwjecxFwzx7",
  "key33": "5SKDfCuoehRyqP91ZijHoz9PWtT6oxy6uFwso5d5PnU6iUdzqLmsuXMyYW96Jy6GZiVVqbcPaipzwD5zMTZ59DP2",
  "key34": "4T4Ebu1WLP9SCMPTm6S66Mk3wV1ZH5B7MM58Y6Gx86Laa2MY3NkfAinp5G1WpTzXpZvGs7X3jUCR8QjcWTzdC5Qw",
  "key35": "2pcN81Tm4WsqYka6Kr5jmoSn4CwYCpeMVQW5RxK9es5hmSv5skHuUH1ctgkrn8kJ3pcpbssUqje9DU9LabaGyQfq",
  "key36": "4zB3NswSu6UcSSFo8GYd481rpGhm9J2ePYZRbkN6f2cNoTZyVZirk8gUPx4TDKsduBS4xyehUGh4kXPAx2sLbsYy",
  "key37": "4TZ5C2Wqvd8GM1edevAro9ehmg2xre9UxARRSWtJDoYGqm7focHN1Fo3hAeM4KdNG4Tq968AecVRarvFWoeGfFwA",
  "key38": "4xfw2wBth1vNvSPeayGPqbpbpNwQsVHTFbEzwNYyA1tvA8hzuQW8PQWQKpmbWvkCk3fkKKr1GCzUbeZjAp1uv9sG",
  "key39": "5anVtVMZXjmYhJXhe1ST8XY415hy9A9TpMhCNj7mdZU5YUUZYYvXJxpTEfsk7vtgf3bnfriESnkTgcY2sK2fFS32",
  "key40": "4PN6VrgeJCGHu9bYSmFFe7cAqE1JQGFieeWKaaybgjAjMoxoEPKjUL5y3jSZCeNPDUcva5VJnedfbKmEYmbrvgHw"
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
