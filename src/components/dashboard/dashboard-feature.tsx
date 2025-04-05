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
    "msczc6rrivQeZuQ9Hy6YNLY5LF1bw5uhPc22vufZhw9ekNxCxsEAgZxQ1cKdxSzPwQj85DBTqfuNZYHHZLDknk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpUVhexgukQqEtpJBEwqodvZELYvqafVQWGBwyHFZKifgKjuqVnoN3bDuM9eRVayvVxQBzcDpGDNKdD6zbxzfFo",
  "key1": "67oyN25KzVf9hMEjtqWp8trAnwEnm6jrL9BJJ96zA6hPx68ELQA9wgCyrnoUMWDA7R3pY4fnxzQ4HwXk9ShAo4xW",
  "key2": "4zwYpndWkuqYGrBWh2urepAuLjK2X5TMUdns9ApesXdh55g1NRvu7pSuSUsBaGUdjtwckguw3mUP4E5rcdQB2QMi",
  "key3": "5PoVjZwezB945WphuwJt34EK959LkbmZmx7qkuaE2xr8XJfKGefmzR6BqFEvvpGsPAavydyZPFT8byT1r5x9TGra",
  "key4": "5n5UrMttsTBCze43CVvhLcQRLLcQfST8vANy5btkKbF17SJfmGcdj8TjYJdrW3mTWP5QTHKcckDzVwUDbWcAUg2u",
  "key5": "5HEmSD4yiJnbVeitCeVLhS5pTJqaWkdbbNdbAimhh2D5zvP8oUQmAS3jNFWpSCdhVW3qTMstbSzpeUuNTUQLwEbH",
  "key6": "2b1UVzEnYYTjYXo1CkhPsVDnja5yrE3FuRvBGF2FBZND5Ue77GxbtYm4cR1d9TEcD9xD6LJeJk5krhkNZfzkFMFa",
  "key7": "625fm24MpsXuHWKFUHG5Tq4Rx7CzsqKUGhSjwGuiP4FsR9F6kSJZoesiZPLCUnyoLXvKYpnzq29ugxjZoJ6VsiYa",
  "key8": "24WSRJhYxF2zoXDKHaLGgVVYSHxm6jZB1Jm9bagkvxawPZkCHRENX3qVtKnU7FZZiZm9YLbs7dy31zteRRoRPUBM",
  "key9": "4HmQCBZB4zE1J9uKQG4euuXsnhCg7tQh85671qaygx5vTbrtDJ93Ua6ak23pgGfMCtSErTJWt7LHHVwDsa3JwLkn",
  "key10": "2VwRmAESfMJMFkBdWTuWzmPeZeuGsWx9yGrfiNYPCxFdBv58VK2kzTkzWSJ3o5uoY4i4dv2fsiqzAWSDdKsHRUjZ",
  "key11": "21xtrcVAuecWt2SUQooCGrC7aUwyGJHzL8ViSHHH9J2v5EWu9kqcvxdesY8M5AorktPZXyQDx9axQNLeLZKBd3Qn",
  "key12": "4NTm77wkJmDiBDRqQJEJpZGqXFsAsQz9uijzXDqqixUvFesbSGtisvNdzEPgqqyk6Bq41PhVczAc6Wanp7cswUfi",
  "key13": "2zNByaPLPnqbPjFZND2vuJDhpS8hkg5VD2ytqmdocoE5sUhg9ssQqTV2V7uM4so1YY1piMBhKHaSFe7vP1KUNxki",
  "key14": "w3o6qwrMUUGJjEnqb5s4FwxqbwsGgAW9yJaWjyNw53Fs7ZVJwTdwoEarFs9LV5D8yNWtxnCWXrAA6Zv1CgbiGoi",
  "key15": "4RKs5iutJbiPfwQRzprwGnLH9KdtiYMrGVeK1cQFtB7FUMUd5ZaXdV3xmC85oWx1jvvUuyEJEwmKtB2nBiVPMtyy",
  "key16": "2EJRuxdxej62QWYLU7DhAm9S2zaf8w9yFt9jaahUoRfxhArPB4vWoFU4TqxF86UeZ2wNQZDAMChgXnGwB9x2wiq4",
  "key17": "R5GiMY59kwnGbr2pJ7oPUxbsJpxi7Zt2JM69HkyuDj4omYcKW74RXTZrPdSt8P6yhpzMjb5ENa7ngZ9LuiH3r93",
  "key18": "pZydFCJLtMNFJPFAEzn9kHEksJf7kaGz7o3dNJeAFV2KBGJmSRPAGDN9Cv2pFAWuek4xkFSAxFYi8hnjbEd2utW",
  "key19": "4w4EaNHPzuyES6Geqvk7L2Btb1haARyZvVuxupatZw6gM9itSeRw9LeSHFGR3Yih5rAGCMFmXAFAXr6ke4pYiHLh",
  "key20": "4EXGQSv15C9GxF99hetoEEmPtyMVTthd4jGcNF9P7UxVgeavsUSLtD7USwZ9BTCVDvRwsJQ5vBuiNi6UnD9gkwdf",
  "key21": "5rDAaVCHYMsp9nxuZTjr8RV6HaP2pbbhfdLM35HVujbhfYErfTdAMxkhL99cCecT5ktCWojKGva9ABNGsuqf7vG",
  "key22": "5TMBzBqAfqacZZwof1ZFtUCTXHupVyVARshzvgDgzgNQ1HZXptkiewhUPYk9smhL7pRBNuqWeCjXCnqeSpBv1cwy",
  "key23": "3aLTna1gqcdV47oew4Dy2o6bu4oxw69b3aSSc5QYQcLYFf19bdSnHWLWxgK3NUeU5kNCTmXQqfZVVgZD9cArwN6t",
  "key24": "5rAHM44bQusgdYMRqQavCHyou8qxUdpEztDbtexD3GftvKXZK5wJYpTjbHeueXdyvKWn2eUi6nyzsQtPhxiNWQWb",
  "key25": "2Z74CC1Kwo73rCSS4vxFBSepC771p6bqwt5ztZLqjLGA48VCGUviRL9GbDPFJcHyGMGmH2r8xs4iFonqwk25fMGz",
  "key26": "5cGAX1dntQVyHvu8bRx7nAiL4QAKociFvHDfeE3jNw7d5zfKtfty7eEmHUYr5Upx5QeoUUJsJ4ivGvmDJN1r9Sqo",
  "key27": "2FkdarL3PQ9gL5nqPA6qrug2ARYCmDzji9K2dguTNovGCMV33qWyhUVhPQ1wVkDsWJpGgJxqfbnkSPxTvpfyuARs",
  "key28": "32FDDREdJxH6CDMBnJ31XtUQHAHZQ7KjenCARvuuRrRQ4CVT7QyAe7whYRnY7xkHFKiyf1NzfVf3NzW9nYYauQAv",
  "key29": "4h3RLi4GurqAEpz2bSK4Th5m58Kyp4LxABKP56tr9G16vGjVMwH5cHB6jPMu3LxBmDEom6m3L1zKdTypV3cy2Vok",
  "key30": "QfxUa4BUrrZvyPc3DVJeJF1xWGp5SwNpch5rzJcjXGNiHGag8L9j7CKeBZv8TEcX8yQyEQvdyCL9taCN4inT8Rj",
  "key31": "Pr1hAY6DHeCU1TB7AH1VUVEstXGssTPYLFda4r91XiHBeqWNjKw6ft2B4mwhTv9QEHwS2FNRjFsrKCEm2N19PWv",
  "key32": "2ts9mJKqqfJcEyuXGL4inogeyz8DkUWrrbCrFRAF7ocaAaZXTsKfTZxzk52EzbkD7T3GCKMJEDu2HR3q1k4snK35",
  "key33": "4hPiyWJgB5t5GegYK3r3yWanxyGhA29Y7x6dn3NBoqh75so9naL9Rr35teuGT2pg1ZVRjKnwJhH3KMnB6uJEXBHX",
  "key34": "2VXyxPdw79WcSMiyPEGoiioRmMUNLBeyfiXcvRPf6VFt4XTYchDxM41NLBkQsJQWuw53JH2wQtqD2fXvpeWfy2tj",
  "key35": "5BbVV8CWurrnuU63vnvcRdjgAViAqMsJQw93visctdRZmJR1DTRYvtRK6E2hu5uw9VkgG4DxAain1Kpyo3yqS3Am",
  "key36": "61vRF8aqRUmSQQ7VTbtc47KoPc7ammi76xkSUczahfnaEkv46H3JCEiihBByLUo5i8gKPDVsDUaqvvMYGA8bdLNY",
  "key37": "4TXisP6G5cBuQvzTn6stLenAE43nZSqnXp3cJwY1Qkn2gG5vQ2jwmscJgpMqK9yDZJr52ZL114pAPJyZ1fQ8umN8",
  "key38": "4XTBGZ1iLgXyCqYK7dGpJXuJhGRTZnwmCPmPV6fW6Qvw4E9z1QSVySocQsywAm8MnxqEBMgKQpBsvmCNgnABZon5",
  "key39": "44V2HXfPqaSVw3SaRLcXiJfb5vRXDQYiF7yUue1ZPR2Wr4bqZXwF3eorbovPjDhsj5jvcDSeb9Ytap89pE93DkS1",
  "key40": "PShPQSj1SphPvDDZ2SvYEF98SsmfbQkhXMMdc3CqV9VT25JnbGucWJgvVQKFHjR6ZwPcZSNgwLb6oUK7YWhW3HQ",
  "key41": "3uBEecdSzK9Rsdg3wX3zREBF1aV2YfRDnJq43CndcmZ9svVxdGD6VSWsNvpYZrDdi8gtww6ozAdqTYXk3DtB92vP",
  "key42": "3DifFZ8H2vUYkAiuhbscyfsSn4XM5qdCkJxyWWzbid3fpbNFYLJqV3fVeLzoLdXoiPQZBSpRTFaoEQyMfjQ6ssnK",
  "key43": "GHr5H1M1cyPwrzKxnZbtR1PfjyFCXmzHzUVLCR5S7DD8FChrxjUKvJUPANuy44KRYTPvgTXS43JadNwW5mCH1ZN",
  "key44": "6PbXQMomAZk1ab5UNVM2FKN162d5NgYuYSnLJB21u2zY7kbhyQEQZDEcmM7gJ8fknwzuSTdpwFRRigZc6Hkmzks",
  "key45": "228Z1xHNSf6LgemowA8MPh2spbHBgf4Ph8KeYxh93v3LNGRqyDevKgfj2VrRvg4u5YGL3e3XQZnZTiSB5BCM2ddT",
  "key46": "3PecfsAKWfYRrMKC49Ftz7pFJRPpSLBdHg1u28F2WA1nVSGKhMctSEqcpNtKYtMdqEgNx1NUz6EMS1ejCAjYWLhA",
  "key47": "4pP2xbXX8ZXXoLfsu4P2YhLXzQ8wfn1sHdu65bciZxY46cdm3dBWvNDNaboCXfTFiDbcniE81Lzr4qJ6inQQnUPe",
  "key48": "3hkjh6LhH8wxLEErCzZaRc3FiRScbgdXcDbGoJ9DUwVU7YmNwthXrJtz7ci1r27V36aPAFjhrJupPKDJYGL6ooRM"
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
