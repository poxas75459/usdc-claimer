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
    "4i29Usfzpdds1KAcKf8gXtu3jXoFcYzvngPrduDvNWzs3H41ySuQYRkYcew1YDAHedvKpzyP9bT1B75MRrxsuVmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QUCCcAypYT8JsiJTtaSsUp5NNthzRDRu1TCbyupC6ur6Fwq29ShGvzxihFZjoJdFtJPJYMSqJfA6jC3SGydS7Jj",
  "key1": "53kXAGMAtHSaGXPxTbhu9dTdF1haRxzQsEiKMpXFTQnHGo2Dw4zLHozErnBxKbQouTc2VuG5MPpcVTQsVoPqXydT",
  "key2": "3ukM9UFnXAutN6Qu5QZbfyxFz3RwUXMHAV57R8JK4q36CXDsurJpZHao5dNYU8v19bcUMFmDqWvdodpvMwqzx3ex",
  "key3": "2t28eZfjLhdjX3HLAzM4YMS7HLdHaMfCufEwEbxziw58U6hCorUiPdyVXyBFedq5JLTmK5gtbjpziPEMLks7vFhb",
  "key4": "5c9tNiZgoZBPJmX4bydrPu3m9gTofmyaaxNZ8Rg9k9MSoxiohySRmPTTzBS8HuJUmXLWM3usAvdfiYHT6dDiqSH4",
  "key5": "61TpauceirPLVG5Mtvp7yGnPM24WRZw9bsbHVfuavhwziyJ7SDyA6ur3E8ExqSDajPG4e9ZMp41HBNpuNQcuH2MA",
  "key6": "5BJj9HLCb3zTBk21QzaiAq2k4esZNi32ySSpngwufSsVwGnZ4JodHfNgA5FVpX1yMsAAKYQptxKCGXYXD8MgT567",
  "key7": "2LufQnV5M5HbAhmFtMpSdTzBw5FC9eJttLrYJTchweCJbnRmjck9E9gai5gRX6TsB5tGwzUyYCZd57zucTL11ot2",
  "key8": "2u383mromJiB6yK79LT1t2FZF1Wyk3xbLP1y5NNCn9nFVg4xYTh1Zsq4egZP14CQCXxFsYUqEjht9aQFBbGNf6QF",
  "key9": "4m14fdARZSKMcU8PXoX5jN6kQ9vMGDus2Y4NGi3Nc8F2xctivWJ4dVy4WD3TEZz4JmUjevKpUAiyqKE1ivtKkQA7",
  "key10": "5LSnQMu7EXM651pPufQiFAP3pQorC693kEk8t3F9t7CzD5KtCaNL1DZxPN1f86ua3wd1ku5NUbKSTvPjmkc3sNLW",
  "key11": "4y5rhdZTLmZLEiA9pXLojJhZBj6D6w1mhtyqkmUqduCVhX3tDTbEwTQ5DdCwuYrukJvh1JXbB9hnJemRVZu2pVYP",
  "key12": "4qBatQbSBUdwZTohZV9uRotDBzqLc6ZmtyURvoTDfjCVZDZ53myVzjkkaEcXKNrWSexg3a3WXafNS9mREb67FFZx",
  "key13": "5PcCUz3jZpuvGJri9AKjxM8WnPn5pY7Y7PfkwTsVr7y48sp2sS8ULR1enQtSa9jVt8fMda2Vg8yYGJ12wydNY971",
  "key14": "2X1u9ndHpWkkWDnX69k7sHzHkHEqCFcDyhH3PqTo1wTwtsDLkbaF3zcMW9wJD6CknxwGefNQu1neBFKgVwEviCZ2",
  "key15": "5LVC7Sqc1P2Qyq4zz4K8Rdo6C2XMRsbeycrSpP75nm3C5Yvwe8rFXm5RBtomhTPxtLHy8mM2JdHWJ53za15g18wE",
  "key16": "3tXNCYGqdAhFeaaAcCXEHNEnqkTxd2d8yyayzgPE1gZMSfDdERwehHvgDd9j9QKWKp1wCw28DR4LN1mp7ijeCCQZ",
  "key17": "QD657NNehjM4TRu115s9dpemyNkMwUA2B9h5NCZTLWUsy88s1XfqxxEwB86bURgeWZupdXLxpQsYPVABCuAoCyd",
  "key18": "61e7wbxsHPCnV33xmsrQJAgULk7imThv1dfL2MQRckxa7NX7kTfByypY2nDAnRdr5GpQQiWBYp7FHVvr84WCKWos",
  "key19": "64E4N4VtBzPYS6M8DLZNkSJAE6d8fXJYLGcv3CC5XZpXXQwjY1pCWXRhTbUPoafy4QLLThMFWhRKbLhQWD7JmwA8",
  "key20": "4sdhPS1EsF6CDgwitSQaQ2v6UWKYZ3aNyebjXPoZCJkynBfaKWFo3tMAtS9oHHmZfvw9pkF3NK3HHTANrmTCMJJ8",
  "key21": "4rXgxnCsBXUwkQFff6tnJf6bAXdAg2eqpo32zZmey3mKDxnbQcYn7bgNug3bwFZ9troCqTeS3VtkucU3Zb3TueNS",
  "key22": "2Ht4eDdXPTjqvc1NUQuimG8d2MS8H48LA4aokcgTBNQkSNaW6WLqCzAeZbcw9yyZrePZYUQ5FrHrZAzbK51Hx3aR",
  "key23": "38fXn4pqbrmYLZ4mLBcbwVtD32J99tquv3jVCq2r6f8DYERc57aJRp1KB13f61Gx2ob4B6G2h2hiypwnm6W46oxi",
  "key24": "4Tyhbe9vWPkujY36kvVbdYZ4pkgHjiXBjEwucjyc8L3avF6JixwJyGTALHT9JD4S2BWi5k6GWZeosPFDR4dvUahe",
  "key25": "2ZG3ZEWT46bszc6ppW51ZiA3E633FL9NZuzcXGvGNsZX5x7eeyZNRQrQAL3aYTAnq53AZUex8LKgCghSDcELKYkG",
  "key26": "5WT8K3szGypfyMJ7p3oMenVmU6tojdo3GoUg75UkEgESc3rNFfWiaaqhPDqqosdvHjuLexYbqTVY6zybX1Yx8Twr",
  "key27": "5xFMdQfDDof5XdSMkiPH3PXJYxwzVXg4dYcYNc5k8HcPvAmwB7HB3c7CCjExgNgbV38FEqLmsNi8Bs5K6WeKeLh9",
  "key28": "3SR7VvfR69FDV9Tvij5RcBeyhpyS62QSEgqBjhZMNV5if9wAzYe2ukbcYsE24xnKc7oZ6vDysWq4JiLWfYQbWKq9",
  "key29": "27ucuhrk7V1F7mMxnnynxpL6G3EP99oN2DDFeQmJbDkNEU9VLhqcEkspPF2tgKrDfLN4ZUx3TWUMyipjTDWhPDnk",
  "key30": "237nq1ER71tZrRRJj5TYzUMh1aYeAvYr8ao3zBSqit8YyHjPJ5yyLeNd5QLM7CUo81dQQd7egGwdug3Ttqvyshc5"
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
