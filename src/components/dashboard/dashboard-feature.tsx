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
    "2gcv9RbSTeC8mvP6FnxDTNDtdYMTQnArAuUSy8xDp49i2PnsqST8oQSxyTwXPdgMhLUGisyQQNpFGYdURPzWQwqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXPhDeW6t2qUW9xZWhEvM1WZGvzFrFwDFS2WuFutMbHR3nnCqGZPHF3jLzJr619Na4yYq7bvB5RrA5vdYKX445j",
  "key1": "4AgrSCHkFufa2nFTDg2Sr3QCyM36szPRZdmVUbC91fnfLvronGNADu6DWXoPqJ1wEWaCahfqkubXcQxqjXxziNpy",
  "key2": "qdiRNK1omBkhEGEpfa7tDFhZf7Q1zNNUufrbpNa1n4tih4Hxi2twxuHKchnYcf4cNt8vQk1brchZCLwrvTHdFUM",
  "key3": "4r6rvWHaKLo6MLLy5KgvU4tnkkG2xg56wbq5KbApzMhUPJfezX2mDSvnbkFCKeFzJBkhqY6dzqBMmZKkTKYiQCQF",
  "key4": "25nLCLuxET4KEitozyWF6qrkSsdN5GeqvT4FuZU1BJYfrbaec41LEByYbo5XNuB1W5eS2qCRE2t6qYWrrn1QyfKs",
  "key5": "5eq89MDaPBq63WybphBxKTrkcKguNBWZw7RUysZ2jY7dZdNqgNmXcA9N4LG1ji5dnB8vgPXhG1vRM2Vt3GZBenxR",
  "key6": "4rptbgDm2AKx5WL5cGsQyhLUtRqtR2iMuRTME4Beriw1HqAvHiPmPoeeXp62Ct3SdzMrALcUTLPcQcRRfcLDnJf6",
  "key7": "3phZuRUAcriYZ7bVBi5Z2nUB726XtrGH4U2MNzXXFfRqhcjKWsiXxq4zp4iXxfYnLB2ULaLpRypyHyz2WxYpvVYb",
  "key8": "3HUHk1Sz7aM6LhC8P5qqNPa3pWdE2dWn95DGPyW3wvabSci5pnuqQBSyp8z1th7KW6u9Gn4iwbkM7g5eWvmmsLEn",
  "key9": "3ZZXNLDnQywpaUgcyvsTJj3Tbk1iLCnoEjXx8nwpNMXhrkthFmhNqd9PDLz7nJouGrS2dnajRnqfsKAx9nqvE4ev",
  "key10": "3W6Mupj29JNvTPWgYrho9eRLBExixJhZUTT1ArC5eWU4Yqg566QWnDrEdwTiuuDjyszWuBwQ4neYTnENiRoaJCJk",
  "key11": "5vqYQdpbcp8xEo95iei3r18qAastNZyorvX8BZCnA1VFA3nFRtKAJbLcjF6pq2gn3tr1earMnzKyEWqkFWk6cE9Q",
  "key12": "sEPh7VkabpxbpvpBdsmAHmBSrcJXudU4DmcFZMtoa5ymwfDDdQjZAWwygHQqpQVhn6Mi3KmoxdZDwsc8xBbkaeA",
  "key13": "2xA48FnktmXAWhAS8LQawpnUaPmFvSy1cZmXh3mj2dGY365aFMrMXZ8zvJWcS4wjAsSxY9JHuqPubsCTqneH7M1b",
  "key14": "41QrF7Qa2XtCkSqhookFnLwRVV2gFZEqtZMmMWHG6jeHvUVa3UjWK3A6KtXkkrYzTwwPiJZvYWtKx6qUWXzPV6PM",
  "key15": "39rQiakBnB1J43rXxexukbC5yKbS3aJ759VePkvfzXmhLEHPaPBCd5BfthLy9RZNmF9mU2G4peFuXhT2vGxEFPji",
  "key16": "SJrqywpr1QJDxAZpcAWzaoxj23p1vSbpr81eMuw74j1yQ6kddL7eBoXci3w32bD17WVyakHcYCgLT3sFNsty727",
  "key17": "4fbHt6FQgdt6zg54MqtCbQJDktLkVnM9Nf58JgLHrLPZgZert4BMbM7Uusnt7EHd9eifcccx55ey1ifM5Rt2E8E3",
  "key18": "3wTQ23fZBAGs964gHWKqhWp1DRWt9vWN2pJwCHiLAt4iwV1aiQzC6V41v63tSSdLMga3ChAyrep3vKjBCS8Meg6x",
  "key19": "54kM9Gvf4bBmF3JjRAYa2PTHPKoXMGUwFqqKSwW2GFnyNnaGHQEvM4kN1NhQzmcnM8GR2Hbnq4LkMxoSVhkJJFV5",
  "key20": "3h4uQMft8bKEuy8VGaew5Q9R7CSWXtdkjFDnTdVJeMtUyqXkPgrUWQDwfjEmD6vJwi3ouc71dMVs84jAsdTfb24E",
  "key21": "3dvQydUYWDuHmBKxQFQPiMA8SNmJ8J9f1rPszunEv88qVCmW87EhcvrYkykTno2Gk7ea5cUrvovXUtC9dqM5oeez",
  "key22": "3CXFvpsxo39X3JmSUeKKVcz41k3VCvGkT6R9bL5dZdVYZp8hNv8FVMXgyCSq3D4Mi9uqDUCVotqqmfARG7VYZYa3",
  "key23": "4q4voh3QtygeM1iWTYxj295T2UiSZTAiB1xQ8GkvgWCvztntj8QZJuK9aFDjtqaSjdfdLzoeCwqduj8vnJug2fqm",
  "key24": "5cD6pwj6AoioBaZw6UacLxnyz2qCY28k53qBNUNh1u58AARJ2mkKuVFzdagF1nzVuH4X9geN8u1J6cwunRWjWuMp",
  "key25": "YRh951pt7aNDstxe6bW4w6j9ZoEk4E1wx8bT5yUfcqB9i2it9BUN9snrdfYtCMBAyX2Yjhzz7yH6M3CaVSmvAH7",
  "key26": "4UsL6pAG4m7skUGW1mwKoYSEqvhkz29VQP7ioa8cQviwZB8jJ9yg4bH1jwDUbZNJrcE23u1mwiXnSkjgGGHPzZR7",
  "key27": "4E4VqXnvrvFcpe1NWHrtLpq3RMeCzDPaEBJUiAvrPZHYbMgz4bpr72VMMs9ReSL4SU3Tn5jpegzjieBzyrMHxaBx",
  "key28": "L4UqgGjZcqV19EVDnw6xLvAeMQn3QXecEw3kdwURWgrqt7aDX8zFkLde8yd8Ls1L4QbFSkyM4Np41PSE4rLrYww",
  "key29": "3F28f1jfED8RkAcGd5NYcYbVquA8PqXpktux3vu1LNttHN49HDwZ4f33uNfvKNsvxTcdhTdrPV7PeyrjkfY4be2g",
  "key30": "UYgY4GPsEMDF3j6561ZUGZ6x2iVPt8xuAhtCxxcejyRhun8eiTUqyP3xtiJEYQ8rbJsc3mCDYdmw9qJADr4m8do",
  "key31": "2qyhXS25Un2meo38xqyMWjSpmX82J7xqiy4NymFJaAA24SS9dWqHT2UcyxkZXzTCpihHRojLc2WUDGQpkz2ChBy5",
  "key32": "BgY7StMvQZNrJZVaowWez2JUVXn83QeNWtfoZUosSM6MWKTFGKurxNX6YQFoMtH5VnjPG1vPgwmwhN2ZMuikaHN",
  "key33": "3EiMeTxVE6tNagg2d5dh2iWySdeoB7Ba4fjbxVg3Hpn5mYpSckSSVCiMjy9BW3XdLwKkcDeHpnHSe2rZvpKUCaqT",
  "key34": "23Nsii3ZwoVQDD52BK4NsYHEnXX79wWMm37cgvGSXdbF734Mwd45yP3MBh7tcnKjNckbEWzQeFDYoJcxs6ceyMHV",
  "key35": "2DdB4Zmmh1ojFqXhCdef2hdzxGWLeyL5gGpWo3fjCx5DsLsPhyu31xnAVZ8DyiWHmn9GiHptrroZMHqgAPA1NoBc"
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
