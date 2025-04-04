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
    "61cL6moBSMR7F1ALG9bCj3i1xY2y5AwWctHqFFdkE1xQ86nLw2VgEWySMssCTvEQznfC31SaEo7m1EVQJ1RwjdrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEgPyuAFuH7oiWAsEL3LgXsych3gGZe5DAmbzvyJestgMwfUX7mVNAR2c3UmaxQ4k8C3TbwKctTx7nSu4mXBovY",
  "key1": "4EffuVoh2zwHA7Kk35Wm96K2tfVSTGqRYNVAS6A4KxQQHr446Bk9A481S6ZhMKW7F7P6UVBQp9EZ7g58yaSDpysX",
  "key2": "3m4hScWqMh5RH3QEP1PuLtwWMSUqtJJ7dTfyZtnF9dZybgmcfMgcpE6moLbyZh2vJFoRBaAGsjhCY8vu9BsmhrRT",
  "key3": "34QvLaseeprN76uwgiMvp6myTDxDCRQBJMqneVBSdFkRJdJSNPnUQvpb2hE3egcbYt9r8nEzFCsWdhxBKuKwaZ3Z",
  "key4": "2YJnYP7k1eFwLG7AmVgQSSgq1uin5vwKo2TTKBDxNShoBJg4in1Pd7cSnr6twXAgyL4y68pyyq8KsAdtBBJ8oduk",
  "key5": "4M7wUjdfNQvY1Pa2zTt4GKguej3p9266zzvGHnez9C6DwZ5Yd3wm7qCHJ3isYMvEbbNFD9tF8jQ5tSZXeUt22Xf4",
  "key6": "2ATKGtURxBxP7ky7MTDSAtqGND1HZfrGpcA6aMY2rS7L7SdJsGpt8oBY9i7Zzdxg13uk3429TojpbM8ZJYENYXSb",
  "key7": "5trRZ449i6HQGF6hDVh5vu6SLQMw6SRrrjvfEw5JRLiJwmsfQfkkG8FjcjKmQsnqA8KuKuZjaY2LgqBtf83Neuv7",
  "key8": "YwGvDEY71vzYr6ZzUhgLoBhjrgCWZBMY4nF2BfztKQcvkfc2MehRG93KfbrMGChH9sbfusfzKfQZfgx9PdfQAJz",
  "key9": "2o8barwYqyRePUWidVuPUpUPR4QTShtRZ5PyNug8hpyhY9ZjKsJYiDijKjLA8BdofdVSNMMEFod48wMDq68bb9QM",
  "key10": "4jxaunoGVNcEVdn6D2VABBLS9Spb1bJ4Hyp4FEXeNjbgbz57db5ms2vnqns4tVU5Zy8b6aPei9f7oWcyf3C6zo3g",
  "key11": "5h9fWAE5m7WC7qvY6qMX7aZfQM8ytEAoBBQhh5H3Z1Z4qj52FDxN6so1MudaPpDY826hNU3qUUa3H8McT9jWSaQp",
  "key12": "2XYDf7oi54zD9SgAyaxdRGLJ8BJJ5ochmEg3B5MHd4vw3ZmF9ktTZtsqqq1qPD4b4h6yipX8xiQQUHEMJ144X1KF",
  "key13": "va7uESzwCDjjRgSirZ1QqqdD46u6FGQMddxUfXePY8BExrNrDXgg21R2sPBgzB7s7gPV8jd86ELuhramRAjjCbN",
  "key14": "64rZ1pHVDxVwGkPkZ4HY1NkGVHGwVcWet3rP2v9RTw15cK8ZE2DYm6AJDSs9mqE3u5r5V8g4AN9dDSMVTFfBC6Bd",
  "key15": "4c4KywpbwX94GM1gtikiQC9NRDoyqZJ8PKhDXF8FLn3Y7QiMZyHYEit6QpzPwo7TXY4tEBomqD7GmfCWLiBSCz9c",
  "key16": "3FKFZzoigVkiGXpipm3pPD6S3v4NsYewddXwBhuC3SVJN75R2qtaaj7gAyi44oNzHVnT9gSpYdDW2BFACCqDmN6c",
  "key17": "34PhQ9FBciNLebTNYozibG3GhSWqXVCj3quZW5bSY66vbpryW4jQd5Agdoqvdem5UyDJyp7i6ZeaEdch3LE8vWtE",
  "key18": "2QAYRT4XrwMBQCRtfsCqkyP1xuQHDck5h9mUcGs3j1em1ft9gS1ZGpcHPQShRFp3NDCXGvVkT65vPmKfYau8zvod",
  "key19": "4Zh8bQFPsNjJMrthVgQge8EVNpgjKHnJT1h2eYYEgxkqkGbfKKD4WdhdZ3R4V9kzYKWfZ9QrEhurgrGf4JhRELVA",
  "key20": "2Gt6Dfnrn9dYusAxfCzQAsaH3GjNQrLoCFsKAuZ46YWRgmjin1L9zPv5TyFFZyrgET8JThwndETkw5PodKDCizVe",
  "key21": "4rkiz6Ck5jt6ak5j36aTDNqLvH5pNT8YrLgqLSrnhsa3DRrJztVGfvZsmrFyRUYaq4pwHcckm4GpGfYY9fwmiBRZ",
  "key22": "38mRnNUdyXn3UDjfSkhkpps5F6GG6GS3BsPa2ARkAQGcPpz45wF6F1sYSS7FsW3MRpxniy1H9xeZiJwZuBGXcoDk",
  "key23": "qZ1PYeoAiQYQywqNAk6LC3GPVVXwhBhB7rQS79ddZ4WAZoU9nqxKi4kdP1ZbPyvaex4xnQWJUXRr16b5RCNgE5J",
  "key24": "5xpz6zyT8rEHb9TXwJZLA9nxCmtZazCebXifmmf3qxa1vfKSUJMVyd8fvos7KxkUmC2zp3P2j7G68sKc6Kx9W3f7"
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
