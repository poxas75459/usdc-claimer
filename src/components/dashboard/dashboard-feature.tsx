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
    "8VpiT5acXus6knUfi8bia7PPUSLDHdKwaXaciTcdGMfaFPbkWBSbokLAAjS1ekuo2irryxmtEt4m4U1L55bXbMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62K64kkxAMAXNpkQWLuynsevtt9nxP9Tp5f3NRcMLpC363zgYZBFXgz8eMxjAaB4GpikXV3yLGzvwijoxwUkyF53",
  "key1": "2JgF88CGo56x2ZWNhPCCgWnjDtLuzfu8FpPxvMBKvChRCeRvL5xN4hEVz5DhjMGZPJYV2Wo6mYd5xfELJWuvgepm",
  "key2": "3S7K8TEK42P7J2gctLFPjuGX5cwCfvu8tzKXDpcUGA1wBKLvXY6CW9NKeKKJh4nXvW3uFLJpGGWqgMABRq6h5Lpd",
  "key3": "25jFW7E7wkEqz6MU127msZiCpkArSrkb4JKxsTRPeQcrDsXYUUFzjuhznGqTqgdus8rg9M5nXE2qcqpBu4Mmse4h",
  "key4": "5LnK9JJhauMQ38sdH7dEqtpfgyR14E5K7Jz6GmewgK64FPWmoFKF9sYJ8JHnBwi5cV9JXF7HcuZkzUeDpeZ4MBQM",
  "key5": "2unshsxbYbtLEF9DX3cjnkztKCwxBQUsrMByWaK7eWZZY3KkJ2wG1G8ChvjZ5JYH1cShArpnQoFxggU7akCQx9Lm",
  "key6": "63rZMRuh1ZR4EFpL9STVkje5EpfcTNmhyvUhNGe4nX1f5vT21iuLJocgPs1esQ25Xs2vuaBJB5hxmEp1GtQwWWX5",
  "key7": "4joqnvJtipp4MLtZ6FajDAQm8vrjRz44hFXAJ5qszfL9BRfQg5FQMD1NZLxdNMzKbpeqbBBsfZesZ8jyumCkTzSB",
  "key8": "2cAFsnjr7Sj9GGFMZUYDGBzo6LBt6DVv8U2VMLii36RQ8Q29PN8aWEUNMcRZbJcrQ5R1MSQFe2SE7k1NR3CppV2h",
  "key9": "4iHzqeAZFY8uEPdiAsLeWyqMPSy86KfLWoNvLZtdkM4CPy6kNxH6E7YF2vnCnhgeDCD9adGVHGyoGU2wwazH9fmt",
  "key10": "WmvugoPsm1Y7GcNvVu3SGxxx6SYbWAogbP98E7wmpR8kf43FcKGCtvM6mtXFtJgMdPHLezL8418GfJoDyjSW6XA",
  "key11": "YXdwYfFbfuYvyea5pm3x6xobcMFoncT1aW9jdsHmg1a639RU7hGzekqjcpqhTM7zhAoGJNYfNmi2ArHzRTV4JyT",
  "key12": "5QbmUCkrcQA7ZLHmECqsKaRUZ4Gq8LnfkhPTheMkrboFAKv8TWhQCEgxHco7tUUcH3efiGxp5qSDPgPVA3xFFa9C",
  "key13": "28afJp9EVqAMVrjBkNQv7qazcgzUeH2eSxETmyuPZeJeQvq5226BD36Vu49w9MwxRq1M2A5BC4MUhjmtGkwv83rV",
  "key14": "TJ6mTQYNbZCihWKXbPoaZ6NWhCpXPEqhvJfqDM3TBt9roYGLB8y8qvMNi2bdo94Run51UxwAs6Jk2NCKTZo7GYx",
  "key15": "2MtJuRKxdxBhy8Yk5p3pwu6hjZw9GN8bpgZRFmzNyy578WT9yukpKQJ2cE4jHPeGgyT3hNdMtMZrLFdbNwDUj6NQ",
  "key16": "2VvqiWHze4nS3Cgi9irt5VkLHBQJ6Vya17AxX571euTT4qKKRsxNZfqU7D5f3RSNoqqC5mgCZSkokyZ99VaewQMe",
  "key17": "3giVr9xn8FSxjMeHq2mrzdbbiGZUKQKQnBZ93huubHGytsatsJLvgcbVecjUeFUPRy3or4Q2m18pSzX5fqDGc2Hk",
  "key18": "2gkgYu25XY3q8XuVRn67raSi1bCrnppFVhrYr3gofLHh816wzRNVb6wuTSzX8FRCeTNdLbK42dZdto3ppGNjdfu4",
  "key19": "dsqom2vTKxavanHdzht8Ltwd8VLBKboAGJaZQG6gdy2B29mAnFAUcAKdFr8XvDJvNUUpcXmk97DmPcHK3cw1mrz",
  "key20": "54CMSoBywfucm4oihx1dSzgAjYhZQxK52PfdQSdUGQeR35Pn7BytKVjPAHFuW1b652DPgSC53V2X1aD8igQPBPAi",
  "key21": "4Gm8ZHF6t89Pn5kZyU1ZW9DAUnwdz1pxZ5T9evccRN2HZ4yaHqKnmLWiF5w3rKu38KBPVtdTqFj2QpNYmwPNDSnn",
  "key22": "cDM3nFEJiaf8H7Q2ENLBi4s4d7Uo2iiS2XXWZN35m5kwG17XGpWJ4dzs4ehSUFnR8PMWgJDtHhxkSpj8qcNAD7Z",
  "key23": "4wVMduuNnhbyrfjbCdqvThG2kFhx2VmeAqYQSaEqFiRVoe8RX95MDx43TZ2TKPgJTPAuwTcke1YJrmmwjiUzKsus",
  "key24": "5yQ245CGA2adBVAcYini9yuHcj5jnK9e3Pzy3msL3hY2WBtvKFKuUWJ8g4m64oPnwjhiX6dEEXmZASRU7GKsKBu8",
  "key25": "3krKxi2W9nqRqTzSDoH8izr9bMUMwMvZe5F6cN2KemVpDwPXrR86EmXcjvGWApqDnPwTFEmCVPmioPNT2xvj78kR",
  "key26": "3mjRG5ruoddK6h5FsFxSgdZsbEtKNA2oNyuT1K9D2kkQXBeEriUWii5TX5sDZix9aMVx1AwhxgsF24nZXepLfWtw",
  "key27": "332RuAkZzrxHc3QEn6uCqXsx3598xrBRgsu5fsdi9kM6y14hYYJnhZ6oB7eL8srabWn9xamZH2q9FYJVKCgEd5zy",
  "key28": "4yfNC87uUfCVNQWwivVRjLeFo8kSebmjNS3KSJdg3DemLE1gXu3tGZumNcwBbuY41CqChUtsUCef7kjiv7XLxH2n",
  "key29": "3RQDVSq5qD3E1cJ62emCGZMULjHvVF52Z9BbWstsx7KHNLBFSq3CYEYKVKZ2Z3HMwL8rdzvT7S9AnbhD8YHm95BZ",
  "key30": "52vnszXLiEZDfGp4BQs9HeS8iKCQr9TDYLzUjWHQVMQgae2FnyRU3RybH25rS2L4PwG557ZbFsAsFRazZvtEYUaP",
  "key31": "FRsHdbXi95H47j1QhneTUAVGD7ZTLjcP4LzZJWavdWHJaVyvyoxaWmxrCH75LQEMtw2gGckV1fhSv2mxSqJD8Te",
  "key32": "2rEsHRPsan59iPg9tvRYiXtD4j9r44buKeQkE632uAN4p7qA1NdQBtWRoeza3MrGnyQe5cCHSHNW83qucT6wuUf5",
  "key33": "67p6B7a463an5CvJVDgLxWHBkyhgHujVGt9HX6kQMrgBxDXBfXZF5A9g1nyLSh8cbGS9EgjdEVTURBRfmCBeuoQu",
  "key34": "3zsJGFkXqVRy7C1hKST7Pvj1QFWG1AKAKbXH2NfgsrV76HVC5syrDMZ4hz7ifAProS8USHRFqdTMEJmSHSB5jzBe",
  "key35": "3EwA2iDpJxRwLnP9giYfLswe8ro8ustGf4sJshXDp8roxzRXXKwYpPw3tarF6CZgj3ZxUeJehXQoTcVYmWAMWxvD",
  "key36": "2MnHYnxc5e3AtYjDYPEVTmPj7aaLKC14FdjxGn16D1dLcf2phKXGRuMvJtGgiWTSJNZ4DVwiHVUGY7JzmuWLmLFk",
  "key37": "HmrETKh3Jz29KGZ6se4k8i7sSKVorNrAcrkzo6xyeXeEwDdEjXprZQD78RuJ99SNidc3ziFKJd1cDSy7XJKWNnn",
  "key38": "5Q3LL7azXPHhx98Hh2rr95BzL6kzw6EaTb9ryya6fA1x1en7KMZ8BgoHQK7NJWR7kAMF9UuYmQkQU1ANJGJCeJb4",
  "key39": "6GcSV3K7caQZqLHejvSwprToL66Pm7K6La29WWCwYgemo8bHeX64NUFX16KR7Z9rtfDCEna3suT5uhRVctEo3Uo",
  "key40": "63WBj932xTA6HLkspofKvegWpCStCBKAJEvCduupCB7H9Ee7KCR2sGrnNbLBMkuo1MvyoWNsWs2nsvnTg1a7yQZk",
  "key41": "2SLKv1GFe3Nuk4mc9mUUVcfdhTajh2jTGbrbQVGADruF6r9D58wR48XPzxgUuqZcRQtmGP13mk39Ftco8k8sK8ZJ",
  "key42": "e3JGYQxqJSiSPDfuEj9TX9ACffCHjHHKAbCVxehPETnHyVdE3fauHK3dPx2fdEEQbXQzqJfhKjiGEJTwK5C3E6a",
  "key43": "419qn3mrSeYAHkgxmHjXuinytYEDcNdNLKgMpnGwusHjbAzMbkF8iexGyHECR7CRaJxy7Z8fxA8mRb5AYgF8MCMD",
  "key44": "rRY7aipUA8jsGunbbPqBV7J9s9gJuBvskJ5FY3M2JEJxpHmuq8sxsjGa7TJkMHYuUsAekYuecySc6bkuSLaKKbT",
  "key45": "5nyg8c8NADig5vrPGuVM5gF6z6urQG5GvqrEe4TXo9ikmTgB184ZEKgaUtWhiSHffZqmioWkzxdmHiHC4vWfJGqp",
  "key46": "2m9UjXHkWqAYyPfva8W4asyc7YT9eszBRb75WgK8354YGHkJNgQ9dc3f4iKGbar1aLu4XQ5ysHaGkhn4v7Zjzrhe"
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
