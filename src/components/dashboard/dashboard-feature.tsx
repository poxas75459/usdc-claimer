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
    "2SLy5yVnVtycuHkGrktwG9UZGaqBzMrRdRNNjdoYEfpxm3GF2P1PqFeahfeBXZ2SvMyiZkjj7n34jWbboNcDYxLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HoeXwnpE4akpGSDLFhT3q4S41MRTwE6eJJjgYyL1xRrfGFdDfCkKmFZK5VAjSTJCAxiYuWMo4MYZ4jEvhgpx4W",
  "key1": "4xdCmi2W6Dp3GRkJivudooNWH46mC1UUu9keqGUr2WGhyrA6yLufKD67h8imamjFgwieCapDAt17BKAHhjrXYHVK",
  "key2": "395CpW5XdpzdBraZG9UtwmLmV4yatmNRhovhfBZo5JLj53XctS7NqbWxBeifeV2yEAycssNMwxFY8Yc7U93AZjXk",
  "key3": "63miPbgMrJhXX4x9NV31aJrUwvN49JahwZM9J7BabuRSQFCZsRoD4RdANzfYs8wK7g5pZv8x4v8VnmndQEc3gk5s",
  "key4": "57pt2Xdm25MdukC6YY4SWZ3jwqJfYhKR1NDGWQQTsoGEBMgGXtuFw8SPg2ozeyBxFfJ5McoS2X7tXeT2aFz8kzm7",
  "key5": "5LCD8LZvxAMsB4vGdTRVgvqnn6Cfe4LjCpAbvzS8g5zbNvucav3StRbnrfqQjtu8rSPmLMMNp2x4Zn5yb8pHAEg1",
  "key6": "3dHrXNFUXRTRsNerFDALbP3tm7wB4818ZFhwM3ZDyfMJJ71DG6BQPobyfroLasTZnMVJ9iYRsxnVPW82pHastCoA",
  "key7": "3XYFpSaP8PGerNA12zFT6bn8Vr917Yh3rjsnAAiBWs4g82qUQgPHVPuBm6kGuXoYzVAR6frCDbgRsRUd7xziR5M6",
  "key8": "5vzJwx1KJU9pc9hPeSFtdmQ4pxh1mYy4WV1mhfufrwFNi6Y9Yd1xWbz4V36CcQt6VEXa8u7D4QDkmnreWamBaUnN",
  "key9": "2WaNPkXnQ1EKbwGtZJ9RCtd5jdz6XnUby74vQxeu2PGgcibAT9gsJBaTeAHD6r3Xd3cFPuq9YmU5xVpYHHAiEUbr",
  "key10": "tjc17AbiChnZg6vvvyr5sgRndcfoTkoHUdVzEh1HTjHpNcSxvJF9hKoM9uJtjQPizbDvxyWA8mbomyx39fCipum",
  "key11": "2pHRjQ7cKoyoakC62MS3kDwMXJcsPu8PTw13jwKwd46sCtUxa8htn9ZhqgVW5QwC1LZjXa1yhG7KRozs5uMWowsd",
  "key12": "JgXYwjq47tCNSk6eGUXhJj1u66KfLzYRKwunoftUh44CE9D6YfTVcrENdPR5m5TwCfvbbyC5UDvJwJBmagbnfmo",
  "key13": "5bjvsvu3ettbHWZjpjB6igfL3DcZr2331uvmNHVRswm4BVpiMuN5CuLWpodJfPFVPAAbQvEovBW5Yf8L96wUYmWx",
  "key14": "4q5DnFKYLJB26gX6oznTBXiVuPAYDRkDFP8QCu71XTijhide4JM4YmmSruJxBBhzAAEuM8TTpwk61nj54DC7kXEZ",
  "key15": "2cSgqNEqeDVx7UZUxcSUpNFWcjGdm7ZjmC5rAaB6V9WSYVPK8uUnbFqsXJ5997KdztXweDLJg9SDDs5X9wSjDzNT",
  "key16": "4QPUrqG6C2ceK4pRK2AnFonzoCGPFvKHzbxy8eSLBybEBDsGBFbwyLfxevjTXcj3hnZx5AySpYFBiiJ5EDoB3kAW",
  "key17": "bduh69SQgoLY1fXnVkpjmdU12aE7ftAzTGghnerqU9z4pvqiaSknh2BpYpnXn1N2vV2crBZN1xTgEiuZ3Eha8UU",
  "key18": "2vgaHnsW5nQ7YKP27JDrVhn8fsnWjgcyaiJ4K72L8ryxoAWhbU2AkZ2YAojQYrpUVyY76YYMDqvJEV8oCAo3L4ko",
  "key19": "5jhHmTsjZKBpkiZ2nQPRN7KLtTSKRX8tnF3ZU3wWosmCkEbsndx4EbTqpQ5yVA3S3eTEr25Fgdf7mbDnCVQgqdR6",
  "key20": "5sjJsaSKDKkrPYfQqchhwUZFA37PeA8GahFKSR6X3eKnjDVnB76RVSczbtDoqeek7VdbtE3JpZG5vjnPQtGfxa4v",
  "key21": "4mdEG9rMjpDqgLSraGzGUKLJgjfQn4SqDxdQW6DSB7f2XPaxHzWtpP714yJyk9kavvRHoP2EYX6bTDF9dWgqXg83",
  "key22": "5CXfNwbCFzsbki67D21poqmMVGmcX5unGRLdFZFEGBJDDsLH9hucLTnvqYhbxXsvjmBsVUbhdX8EAEiWpzBuq92P",
  "key23": "3M8dJTdnb4JgNpSMBhAvJ68xmpahoaeMcJVAMNZvEqjyxGaDfP1tERKHTBp3gMaLTDwyBsXJkdUyDG6xYkR6GXn1",
  "key24": "4bzBg9Yb7miX2b3rDVUvvtHBEFoC1ZbdCdYbeS1yk5bYYoEMXa8qNpzFmtyBNeoMoW8MtgFUfx8q9d9yLiG76nDa",
  "key25": "56NskQobH2XwrSpLKRzQ4zHYGrwvKjtNS1DJWQK5QBshuuKZTHWy28j2VXaecx74mVLsiAc9VesrayxDUDT8zgUw",
  "key26": "2zgz9psy1comEgxgFetYscGJstumDUj4yPawUCibx2cWLUCtryNktKioHEzCDiZgWFuKgFX26gbcvW4wzSutusfD",
  "key27": "4YVsWk4hP5JWhPUmZPVagcEPSNAG6rgojZZqHXPoy1shUsdnVjVCBsjvkmiWwHWjzR9KSHwqmyD9Fk1ReNXVnvTY",
  "key28": "2WYdDfkcCEm7nLcSUhpogVvQ3aV1T38PyuM3WPV8WigjJY5RVXvdouECBGegSnZnHXkZdFmETxj6mYfpwMn9dgVT",
  "key29": "4A9eXSaGSMDgRAvWoiGsTqCv9dksF4aZHkbi9bbMwf7vC9LZ3VAgSVmr67PW14bBgiyaXaioWqWrcFkHKVWPsJ3W",
  "key30": "5DaPwMhwzF9v44HNzJaybTGWb6SZKvKK4s3WMgkVVxGLkvL1cdEfpQcEJhRpvkroMMaYAHDpCRedtwDztaNgYEoE",
  "key31": "3KLd1ULRxFWdy8gqekGR4MuEDysxmDk5ZRBL9qdqmwogpu4wQZwCph38i1yXrwHbpyiycL4enLGBvLvbQVwjW8Ly",
  "key32": "2r5WkDacNNqN2UhQ35L83JABEc9g48j1HEsmuGZwLgpD1pn1saogPdPDFdeD7zPub2taSsJ2RRxt9gcEWaQvUPXZ",
  "key33": "5bVRVV2eLgkpixKHGdNXnkDBSe1iJxMyyx2MmkSFjocx1f1VEfXZgEgbMHhs5WNaa6BZYH5rMfdeRJ22cGyR7vnJ",
  "key34": "3G9ojocf77XdSfNwpDCEDXewVvmHDdV9SJ7K82MYmbb3gKbKnFXMmcML7HX2KDn2NNCXA2F1Bu31RnV1t9fui2gr"
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
