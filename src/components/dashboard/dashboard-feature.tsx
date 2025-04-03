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
    "3ytwfGSEeFDZeEAyfMzKGwHoACnAWFAEfTGfzHWZU1Dqi1ciTYjpmvEsYRehikKv7xe6YLzZxXbSGERTKD3trxzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1eB5qJrjStU1Hoa9KV7YfaouKCGf74Yzkxr4kzoW2m77ZBg1DWrTqajnBR9G3tMZXGRRTGg4JPgSDqyxTwHMqH",
  "key1": "XtNGXP3nPmPLz9CDfD2tjfMF8HPdkRjF2NW7seY7PgpXegkEWSmMPLwg3Ufo7Vzp15pekceUgBE1bparJxAoukz",
  "key2": "28jzzEFjAJzMAJ5Y6YZXEuLBYGmqC3bMb6uUZL5Hga11dHk83SBZ2qkRC2hjRwS9gaXfzDbmGGkff5fUhoiXH1yi",
  "key3": "3BQGCT6F8ZaKsFXznbAZP29X8TgvfrUEpmZQyTQ7RfUe28fbsfsGQNeeUhoDoDxw4AFZion1yxXNhwUeVoAqzrsb",
  "key4": "4ujaCHMBErux69Q5wiZHMyT12Mxzh46jvkpEGBgp1PjZnhFu2zazLgoM1q19HyvKMe4srQUPFuYDpnLp86dc9W3o",
  "key5": "369SPHp3GJtKu8nWwxLwPKRydd5Kt82X7yKVxYNsLeieT7MHLpdgTb49wNWdZoFZHDBAknUYxcWS8aoGDK9kNo2x",
  "key6": "5AhdSxGAKSkSvvqXprKC2gJd2Bc2nTayrt3xbxM5YbCCBTrf2Tf1FToiuyXV7PKgmtHPnw4xpXDovYWiYERfmpcs",
  "key7": "65e5KknAkLKozu1MjzQj3uxrKPBaMUHd9vuADTZVmKuC2D74qyTuuCAYCckkNGE8Echgv3xxk2zBVVLAS4tUsADx",
  "key8": "2RG2qPu88pAs18eJfWG67xpunpxUs2oczG3YYwvK9LekhZvGqnf668n473jv1DrYkiGvEQVyss726BsHMWVwzurh",
  "key9": "4M4tGvNYUnZ6X8woMa1WeNZFM1DjhskCvKMMMmE3QxUk1Rw1Hw6dvdnU8vfKEQ3KAaZYCjssHcsRaJxEU6Gesor2",
  "key10": "637s8XkApJbPqxbmpvYGdWvkTPSbWazMDQPtuu7f6UCg6D9od9Nr5Y5oEZByDScXtB1KwL72L5W4fecHvjQfj5wJ",
  "key11": "bAWAzrLk7yKccHsH4oCG4c5aAZRcdHZrvyTBHVCBsaLARy1mynULK5BqmCbciUBdVc25FBSEQA2DNuHf6rDz1bD",
  "key12": "4V3VrYEQNd3dZxCesyVBhrUDt2UUqELjet54rAkHbupXGD9CQSSZbeLRjr3PAD6mNDjC5QZycawp2Riq5ogoSPmH",
  "key13": "awfvPyj2o9ixBTA3Zd4UfB1Uj3rKWaYXaodTGx8nc7mppu4QsuT6YBNgA5yVgTc4Hc2YKhvMjctDwLiZViwjr2n",
  "key14": "4LUtmsRpteb9W5BNZ74L6HnGYEV2yrLmUxUxm7yUeJGT7AT8a5WpFkJCE5sqBMagK9k9FArxFssFKUjC8MsnFm57",
  "key15": "5qbstj2j9XNEFQPKXfhi6WaZmCuDcn7RYkDYGuE31c6ycLrMagmxGdbwygQF9Ti4S3CBRdPrVSo8dLAdiT9ggyLr",
  "key16": "3EqH3xzQar1bjjhajRhy1WCVKzY439Zt2YMbZQnHchHdKHq95eDXFxtsEK7xFbdD5zMGx6smt4EXZwyJaBj1QZa9",
  "key17": "3n6W7FJFbvT2J67ocz6rjXcJPQSE9iauGj3uYQo5HMUGCr8HRnr9WkziYsk1NqXXaPSPUWE8RVtwTj85xKRR3z4g",
  "key18": "2XQvM1K15np2TkBRFko33CbZj2dfMyNaQY5gaioUmfcM6ju9s91xoGht6MbFn7MfRqKMdp3gQ9jCSdLcwc9xZ81v",
  "key19": "3FYPZz6rENvuUFXQwyck8VNRZEqxP5PwPaSTwQ1e1VKE3eikHyGXEWvxuhFbCDRG34GeYMzAnqye3o9WwPE9yeGo",
  "key20": "5XxrwPw5bQ3FxTxqX2WiPs5n52dsv2eUZqnrMDikZbD3W4p8fiTtFLhyvta9N65pYoPGXjqmzQYCJeaR6p1xJsJB",
  "key21": "26ENva7TstmiiGMH4MwNem7NRArGXCqXU6c6zaFopP4Vd2TH8stA1LvswhkFyTrfE6xdZmA1coQMr53GEhEdUZcJ",
  "key22": "53cHLY9ksazUyy79JU6APHj2Fyc2sEKyFwvqw9YNUzXWHJvBsBpzYCMdVtKFkr8MEJvUUWpqo15kK6J1ynNsTt44",
  "key23": "428EHvBtqPKMS3B7xJer3jo8ih39ZCLRRKem5FsfAN84uGAdgGZ6aT8AvhLK9EGAXcKjTJx5UhVod8FvJEjAksnh",
  "key24": "2VgNPwMy3FpUy4yHsGNBNoYS2KFL12HvSP3tfT1QTqEwpwnLC3cC9kFbDWAHSV64ybhxWeuhNwqmScHru7FWrbg7"
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
