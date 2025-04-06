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
    "veULqc5WJJT3Q2yBaM3onvrdoNfxnmJwqirC1cTsyNd6LFFrzzvHynaPJVA79pZERXdFpuoWN8VUVG2LLkEVcBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CHkY5BYNN6qL6rcEuSkU7mRbxKffE81yznZBjeSshwxzv46RSsw8ziQ3h2gschnDedoLJNHonj8fpSLNsbKd8YF",
  "key1": "5YeGQ1LH3hWwiFuN5jMCAWDyLGmtWEYEvojFzewEr4R4H472tbBzGFg2GS87NR7mFWfXQcMXKXnhsD2VwGUcqJmu",
  "key2": "5pnUFXd6u8r2UmkRCmms73VUxrqseLcRYhWyCVunJbTyiBkVLbQ9dfnnU5GsVGvydDHNzSVBCvbTEG8jbYGC4Ee9",
  "key3": "223YPfLuZyqYXjE7V1dLhyTCopuMnHoJwdR1w8L31oizsS9JgpkZbprHktXkk7DUu4wgP3PeYNowKhjP3wJtnpVu",
  "key4": "4PV9CMJM4YNfyQfmTo3eQHeGG7m9KXgnibNY7hdvj2V5EEJJXbmDxRtx1jAmXr1Dmys3Tc4fGE4n15PfoMmbeDNy",
  "key5": "5B3HCVgD3cW2FKoMyjZ6biTxCSGYT4TsDgAesXy2etjYiCqWyXCTBpsUmSZdRasY26yYmFUf6BiHDFSw9g4gzyEN",
  "key6": "2CygY1Qk81yiAVuf2KLFQJbXEkw35sDVf6W5aqPmo4ar6vw3FWuGVyC6z13b4rmpsdpAKefYjWBchE88QhWpcGGN",
  "key7": "34kLQppA3aJv3xoxcfiWqRNPEXZKd9BdVPCkhLjYyXLpo41A8YJ1ARgyXV2poofTUYPqeRHvrpyjN6jhMzGbhFqP",
  "key8": "4gYkQsWn5mn3RKSKtGXWHgSXQVGVSpnqySBmAEgLomPZjTAc6dB7Axa3iC3Q9JZMeKCcXYK3gDER8E198pEjUuE",
  "key9": "JTR2565CW5AFUbeW8EwLu4qfFGibtsXtPnWuYEB7HbXaQved5wSxLXPLit97FeKgXnHERNcTKcQTn46wBAwJZur",
  "key10": "2WrVrS1tLKF871VarKNVJ8dJXJ1UvAwHFnTdJ82KwzftomccbcPtStHMv1kn696HWByAY8LjvN8WsbnpRqKtabqf",
  "key11": "2vJnvYyHKFG9fD9cVyWibVvciRyE9QHfVxHPKoFvJmY4UqFQiweMhbMH4ddndHMxzQi5jLKaGKqfunCJFSbS8ox3",
  "key12": "4jamrZTWu2XrqtAjMrYjvKaJ2d3Ray4eDUovDy4uPyp6Se8JR1zPeGnae1XdErPK9oSC1gjvQs2PdRURBhykuctZ",
  "key13": "5ZJiMXwa57bBAxaYBmpxt8hmarpqziD2ondd4ySoGT9U9j5tD4p4Nhwd7vs5cvE4aKcqmPSzRg5qmT74HtBNe5gX",
  "key14": "3v4XVdpiCE7n3v25rkftYV1oht8swwvphpenyonoobWmPcgBgtrBX6kKzXtpLHVGuZUQbiyEaFrreXqkxD44UZeJ",
  "key15": "2nUYaBPd8vEfNC4TqcEhu4z5y4SXWVVMEXDJW9NnaGPkmgqTCYK8jCoYgExKsLze9axdmnEtAWUbgnjn6a2eZHEp",
  "key16": "4VuqimRgL8B78iWPi46fFvpg8Zo7zZ9PecAfpqEXkWQiz1KTpdMkoJP85wahT8DwBft6vWXKvwXgu58i3nDx7Gwq",
  "key17": "49pS4tNrHFD4UqXWgrgrEtxYvzra98Z8u6TKcWVt4npfPK8pSjGFnDM586xTDCnMZWprr9RbBhgoy2DyS3fRnwaM",
  "key18": "3XCqjVJaFgizuGv8V78X6uMmXuX6wbxMaejrsiwEJv4vUTn77uKhZJ6TnSavYCwA9N3q9QxP7h7HnfgYP411qCW2",
  "key19": "64txUSqNSJFsJZZiTJnEdokyzydWCb7nN9nU618drrNNCW7WnhiPgdQ4DGg2k8Ee7njAinXzExu3sXg9DuMcVCZ",
  "key20": "2HDhj1Gc8wSsuweUYK2SR6UmQ1aC9evaZHp8DJCKtkoePiSbUtWJySajcvoJbcqQCWR6AJD4og9pCQymVWpnwmHw",
  "key21": "2e4n5AzhdhhktL8XUXx3uQqradRUxuxmG4A4aRik6efrWo3MGDMa38npoRRi8L18r7bNskzatRkNDWg4wAoGzNEc",
  "key22": "2aJnfKCmNA3a4eR3quiN5sRLtGu2k7GKdHnAYBkqmXxuj8BJKtxQfTRCezMTzvjcByntzstTA8cXe3xTQKHWxRkH",
  "key23": "jV2gG8rkZk4QcVsxSeddTzaZnGRet5kaipy2qy1GiBNutLkb9VVUWKQFsHNMAceB5UwPrawKhtQZnen4FRR5uc8",
  "key24": "mCN78rtsRRhMf4vvHCSsFonWzqo4rqRMAN41VscsUfaDknQhaubMrzJiY3am3dHC4VwPV1jZjK9SqTDdFe2jKNj",
  "key25": "2dxt9uDAsgyQ8LwYLYavQ7yzdwfZyWVnRt6TMDuLZdRGeFfSRu1BMxp8CPY8zxffQYo6UHjcByLNAp9rRpvkACyT",
  "key26": "4NiLSHTH3FzGGvsH7WpGBDiEV8Fs5T1YZ1ZiMwKBjhPQVEdDp76HTMSfoefbTBdgVn4wPXrttAJ45wL9cbEpaQBC",
  "key27": "5bkQMgXvsCqPuAFnpGLVxFGjNKLa8Hsk8rqFsFjQndHegUBrJb1f1xUMMV5JLKyMyX5doTeCH6Fr2SgPvUTw88RR",
  "key28": "3P8qLGuPxgornLgZWZXLrHPkh451ZBneGRcG7fqvQPTWt3gsnpLb6iW4pMSj2YrrFR9SomJmwwFkqqUQn8e9MMVz"
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
