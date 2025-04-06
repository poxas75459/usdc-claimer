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
    "ENHVqwR68L98TWA8BDuz9umLZ3vBmjiwm6LKr5fskFmiP28rgpjsPgnZ2zZcNA2B4uKV89TCtq2tPE64MnSZrQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZreC2kRhasPz8mk1xTUHMnJh2xrgbew7ejXUC5uTKYXLQMXS2m9CgDwPoit7B1hDVvFhxfQqe8SFEN87RFLZ1f",
  "key1": "52uoJN4BspRNwPehCUuCipySm11W54MdqcSZKiHR5LFHh7YB7iiVNLtsDGWzbe8fEbT8nR6hajyTdhXa2bzQ3oVc",
  "key2": "UM8trwioGSgT2PtgSHFKhfRLuyQXZ5uH8xYCu5Ved1bKsLCsGgzrJAitTd2iq5jpuD4xWsQ8BJ8vNLafU85GQZn",
  "key3": "48Sq6rSQmUrxMYnrpE3fJDAj8u9iFREbANX5g4XDiNUrphGoRSQMWAkQzMxqwFycvPt4M6hFVrCmUuUdHt9Hw2of",
  "key4": "4C7vrwuFFyZX15vFSbrGb3UJuZueRsvQqLZ1Fnv6AT2WCM2qtH9QLuVFbQkagMz1qTvGzqScSExPmF1TVoqNsh5F",
  "key5": "kmFLgE2XFPm1Qb8MZrnkSuhoDPAVc371LiD7hjsuPRqPbrxqBydDE9ZFHA8aZVLoy4RLnEV9BCbhmgnUcpE9i8f",
  "key6": "4uFEDwpsfNXE8rHkquzevhtL9t7RuGVeYPjg5TKwtm3KbUyRakFj11tdQFaNntNdKi6N4YjgeYeZYNAzd6hwJcJV",
  "key7": "3aU3hp1gv1FiNxeQieHGaqrnmA1ZjEBpmYtkYLV8wrJFG7QiCJSs7bAJDuqZkFnPZwjvgWWs9wYPciYu14k6DQqL",
  "key8": "nsEVAqjyLiGsU3mSYXdmCthrvedZ1xrm9SpRG9hdKYuGh4SReX3CBE42kgF1hg53vXnnFednWxhZhsqTh47tsUz",
  "key9": "44VzA3qCZCDyoEhjaqKt4XaF4N5SjqTL5htw9tr4rWkTF7yhJCkZMgXwqXo2GMmnWtPYJu8qBo8PNQWyqqCzvSs6",
  "key10": "yRTRRrSR4vs5nt5PGUjAh43kXDrgT65e972yznGgZcfwmyFK1JHPB3N2JwHVTQTFC5EW79HV3EXRM9d9EjdnVHc",
  "key11": "41tmSLJeySm6DxqofjCxaXrbf18Ygg24TQ3GWaGH835gitu4sTnRoUWTBCPWNS7GA8rd5hieEoeQRXpqgwsd8mPq",
  "key12": "3km9tFvFmr2J7zPb6njSQxspRsnUCwduxBTohhoZhCoLzPQgJ2ktvrcbYx4n4SSpoCCmaGEjm2Fd1x6YoFTVe982",
  "key13": "31uk9b6vymAtYekpkhFkAd1UUAhNovJkqhai2uBywZ9JtDE1Sj9MSbNtjWtBFD4F1v2hVXiRVNKJ4gVtU8bDtFqZ",
  "key14": "3fszaaUBn55ghsseCGpticwknKh3YM9u43zPFYipYDFKMDPbKbX1Eq2YHyywLiusfiRBECUtWPn94sH3vx91tTig",
  "key15": "4K6BQrH8Y2axemGmn63eK5j4QA7NjikMBKPVX25vf8g6XnhSYZdXTEWww8ihxeXXzKzx2QYP378bhHQXzMihY71K",
  "key16": "2hPEdTRXe9twi6qhDAkKsdt5PqSegctAriiNboHHYB943DVf72nTphtYQMaUc4GLabo7HLNv5HzrF4sdPEnNd2xB",
  "key17": "Ddti26Zmq3qLbGivAdAZYYuoe7b8TAqxaDoFND9WMa7w2VcCjT8usqhFa5GzGiZFA5b6hEtKAdXrHsaNUUV3unf",
  "key18": "CwB3hx2Npt7X2gfKP6Mjx7vR79MQokNAtgp8wySs6faQ5y2RXUb8g3g1ijecqeq9tbWMN5g1aMnQTpU1n9MvtR6",
  "key19": "3W6XJfQUz1vpz3KW7XSEYyMu6tv8xsF51xGgE7kKGwEKYFsgznbDgTh3ZzNfksbCdGeHA4CR7EVwVmuYVkZT5RvA",
  "key20": "4sx1Xmq4KHJ9zqXWhsbUd7dcYQSLiuuck2wUH6QgcLRuFHUqzWoNMtC8WBLMWxvie5Nr6cFXDJWvvnH34t5pA7zL",
  "key21": "4LHNk9dAVRJDwMf6j52qdQ681bBDMcDxkDVNknJSDqHV1wDC5drtx6a3QbuxC1RkdS1yiuuHSysRYDMchKZvAknc",
  "key22": "YvcBv2gWLtvDBGFf1eSU5wgipwkh3oVLPCh87Jin2Bfak2YAVVn35JHjuYTqt5qmitLjxzohK3WHbgUhy4DL353",
  "key23": "2d7W478oze91FSgTSiDZNf4r6QFgucYWNSEYUJMcYErrH93bn2PTxJKBEa8d3r6Zj63X4bWF35AngTbchGc6TVZC",
  "key24": "4xEFcRA4fAefvfLrWzK8qNw1ucX5uhPB4EWjf2iKmnuXndvPYZNJW2SQ5M63hGDrp2KjnkRNAkKpuzCiitYVLMoG",
  "key25": "5WRzMahkDLCcdEtQWo9M94oK3ixGqC8gt3GSXWzanB6TtuoC7bdFpBPjW9gP4iwTUu9tF31zEWhvpMZhCLP8r17J",
  "key26": "4jEg3duCk4V6F4BKwejv5JGsTgcRHWzTnf7y5BhcfyfGApFVoJUiGHo4BwVz3sGMQSYf2iuKNVmgNXorKJVcTaqC",
  "key27": "5QmMAksSjbVCKG1zQUU9EhUdfMyvqKTJNsiBLWFtxFUtbvMRLrD1gLzeSvfJDiG8QWMr1VxcFTLTZrNSRKzXbans",
  "key28": "4G2doz6WVehAmAugPRprt8zoiTEsfHz4NVRubj2YQrPUaqY5YC6Lt6gj34dpV7D1qAxsfMDTzyW15DfMuf8i8Mes",
  "key29": "3sFdFe1wwv9xFG9zsc6QbjbR2Wt2zwTSPRVsb7kivRTy2iwnnbDq2K2cWfSVqWHUgdhf8znGH5hUHeKbL6dNDxhv",
  "key30": "5gASJUxh4jxAmwnWDEzSoRd4jCrXqGiW2KG5ejHtPEWxzzMRjdx1ZTtm7WMHgWwpNTAahxnHuBinSXUYW3dwPe4v",
  "key31": "3xV89j2RybPGnBgY6z8TY5v6UniRggJwuZo791whSJr4e4bKGtzPasesPgUd9pMJWYxDL4CySoiMu6tzznqcAqv9",
  "key32": "qJjkvBnDYcDEev2Qx9t8DG4TGpwNZeE4YPvCMk3yfXTdVV85SebmecEy7wfJV5sw6ju3Dx5mytEgUq4pjm7esgA",
  "key33": "4EHZASdFY3pmCsTD2GdYwmWKvUiTc1DaEA2R9ez6gK4uhAPKjwUYhFGXSoJp8bWTGDNhGx7UBRQd3w8w7PBhYbRY",
  "key34": "676tj5DoboiFFHdjfeL7zBibTprs45u4j7DvED2XpHDdS6xPz62izL1LvjUmWuZ1jMmG2125zqkmHHBHxzAU1Pq8",
  "key35": "4qN1h2t4eGcRiqAxFgYA5Vm4Gn6Bw1DKvJMvRvVAoTT68PDbTVkpBoqkH9Yj1CCcMZLF7wgGsqRkPoSjH7PxiucX",
  "key36": "VA3VQ5wtFGnFMc13J5HG7xdTL76YkYTBqeon3bLwhFAMCjkGk9SYxpbyALzBtYASqR4B62DbAnGG2SxgjtthpaQ",
  "key37": "v4HYM4MsN1wvQ4vjTfKTQzhzERqqW6KawNhQYAxErr2jeVpzMs1s4uGqZqThDRHcjY8L2nfSKVZ8geRRHzrzJo9",
  "key38": "3M3zLsDGJMh4TQNiC7Wd3QvL17FFyptozw1teoa9odAsSrzcMBfUggqJ7PZSFbyG4dQJDShwrLsJaBxicvLTzCNX",
  "key39": "5iQUvYonCRuiw3aFvrPM2Jxi2xAsthDA5Yni9az96Q6rRb8S4oQuahFJToUgzNebTqtbKYiuP3WSjZG2RXohAF5y",
  "key40": "4DaT1kWd4hvYEwcHsaBwVmCNUKe2hRvGZPBzkNXAq3nkBEqxSzC8nv8U4x3cuqABFNHWPN6yspPsehknoyYiMt99",
  "key41": "2QbKyjFgHVwrpGuZniSYKZZLqAbfKGkYUKbqegm5jXyDn6HCoBG817ykCXvyYNMRsD3mNWXpiWMbWppXF6uG3BLR"
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
