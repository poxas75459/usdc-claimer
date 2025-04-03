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
    "579gzKFyRvPBjRmqkLrdDgB99MgY7mPvfqbdGqykWnHQ1dq292KhiCX2SWDJwLBB36rHEj61mrTx1GFqtAjHF3te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrWvCXQ5x47Y8nnQu59tAuEyBCYbDJmMAQHDP1Lqov5PaHN9VSC3vnnZ3VJoBPCMaPejgxTaHbVuQbjXqcXq2hG",
  "key1": "37Aynq9YjjGCgyFYmj6s77SgfBZtZTPKdoYCt2yzyMguCm27wdcuBLCL31n5k4o9EcjhoD3qd6ShYSKswxJbPXnR",
  "key2": "4xUwSZT1ssxaW9pML9QxGoaEs3i2LhdjBdTeJ9S4dvsMhDig1JiUXN5Qa6gxKHTo8kN4Z1WbAXHMBtBvnj2ETvDA",
  "key3": "3u87PHXFkdy7Rwkbzseukow9Xq5pKpv8J6X1c4HbJu2v3PDyxeY48h6RGETuvr6hBd8E8HLgWYQZ8Urt7Qs3eN89",
  "key4": "LtY5Ro64y7pyoSxXhAc11fc4U8hRotJ12rgAAb3sP6JcrH6egSrjFv95SFQVCqxLR7DiducjoAVVuwArFRf7XmE",
  "key5": "4BMNVeJaK5Ub11omtAJVrLfQSzKn1X81JdgfywhJNM4TqrgeXByzKD94fzbQsmX71Lky8TF6PHAnVr65kogoHjGo",
  "key6": "2wHgHPHsx6NyPehBAGaLjK3uHhoSLtMBYH88nqPwiMYiaL79tkB7iBK7aAuTG8CWKhGVb5FdKnkcQzdYExSPwzsX",
  "key7": "2y1gUnxsRuhvGcjn3tZkeXy5M5jFbsPugo4QaduFdMTornjYUhPk72LX5oUyrH6j9kCedKU7JsXwU2untaBNdLaB",
  "key8": "4gHvYnWzuEeEht9r3wqQpBKgL8XDPz1vQXuwEAsqNXpBUiinHVcS5duY9gxyPxuHCvMRt3oS7SyguSrPVZx6dFTp",
  "key9": "56eE6k7nrPWSTPNQK8VGioutB31hKK9SC2Bv9XSHk36w4ouqQo4hUKH8V4jp2PaAg6RtnFP6pFBctUJPB1Rf6rUJ",
  "key10": "5qrPnMMf2vmiFiqtrpoWUA34S3xYsVRrWFfWLdKA43BZin7AHS3bamf8audorbLGgYztuvQCvYSMvKZUgaQsuu9Y",
  "key11": "4kM8XTpCVY5qUVS6bCMZ533jxLtKFz39gWVLzhYK7jHqNcFaeKoRHoixDGnXZpAdTbKqmpKe3TzhZnDZHtVfwh16",
  "key12": "3sPdYs7zk7gtntZwAS2cf4MYXvuAhwJ1Qb3EKWwuJGzSwVN3cMm4Sx8s71gNZHUoiVitWZ6BzUfGHb6UnGSmPaps",
  "key13": "45nG2Dn2jHGxfWYUDWHv2e9BbANbhZt1AQs8ZFyF41NHgdjS8Z7tLqVbGbETepGRCkbwnbphQkydtNwWqncvW3Yk",
  "key14": "5jvMK3uRhXSeHXFWPmfCmuyDhUjqmp9mETuqKmp88ZeqSaT8TuUntUMtfyNEjaMAARv9kngCCcBSsTw6GBewCKmu",
  "key15": "5v9vcxAvwpu8cedBBmQv4PHs9LKAp3izEzMTkr775BBTSkpfkvUvtLPBFBUhrBkjoQfrVhZEWghmoCkuenfvsTd1",
  "key16": "5NaRGuCBx1Dh9Z4MCdW1mSchm4Nybq55nDN6wYNNt68idhBXvXqJSkhHNGnos1UVGDDSMMW2YsquhEyTvmoni1jT",
  "key17": "4vp33bwz2ZjNz2LzMhy89yniifU2G8sxJPoNmCcVBVec8RySDKxJW9EB2tg9MoXEh7UCGuBZENMvyP62jToPpDpm",
  "key18": "QRvv577xKVK2BgDueVmEcExPvNuVLuKchbeVxdNRaor6xWX2tatD1pj7DsU9L5jqwSUqaD32ucEmXpSd86SdbbQ",
  "key19": "2cCBd5AgTQGR9hCdGrwDPhUNetXiRRJj8hyAYt1EnoGmMsNZt4xgxEbvjNuBXwaPCsw7FCh9L5mv9uXsbT7HjEAt",
  "key20": "VBAhDChjQD2ztCGua4D4AHpd5oJd1ayBAsKVwQGs4PEPhiRZ7G5r3rUPiSCcbadXEfiuGEXGLi8QT3Tj2kQFM2v",
  "key21": "2pv3SM6bTuiL1uDpgxzqwzV8WD3eenWcAfvbK4WAn2Avr6MTiLLLLJsQRbcyEU9gRFiowQn1vTWyLkgSBDGyswff",
  "key22": "2iMvwuFV711xPtnXT2TcJ2pMCjEYAZ4Vcqrn4QFt5a8Mhuc3nraYTmeo1pK8srWGFS7qg8wStPGbw1xCieUo1kBd",
  "key23": "Utf5uXYKUwniZ1XSY8FDg4q3Dhz2HLWpevMdqparBbxHuhwZY8E7MrdwFTqTrYgoCpTd2bDyKPqsdYFQbj5vomG",
  "key24": "nviwfJEgAftRNRPxTwwNY1yNNqp5iGr3Pbjtq4tEFVBrFJJaqVbj9yfdDjR8f99HHGsL8MCGDKWiArBjnZ1tYqx",
  "key25": "4nrXuaWDDcSsaaibCAxLo3hQN8mLBci3pnRYGatLWX9AANesXb3sgQWFttHk4uLcfFnimVkV8pyC4TTi4SSY2P4z",
  "key26": "22u54PkY8b5irJQRSGbkeRedBeS3etiNC3uoqAFifJmCEQjp27VT6TpKczsmXvi68UTXbgunMrL1EiU7LKGE1RhQ",
  "key27": "XecLwFvBBv4EA9pqR6psj87LX4Z9yTXjzzCGNHGLMXGUL9Kpqy61azhmJ1owZo7TFLYDPGsKvwFLSQ6FyrQNWCB",
  "key28": "3J6pZaVCTk1xmLJPtZsokzQF5uyqxJuxx4a2RhBgHfWsC4JDdfaB5CPnApv1n2DqXs8xPKjTbniYEW8Ttc2TvfNi",
  "key29": "3jyM5B7ifCzhKqNXNMpz1ZtZ2uMZKcLvjP5KY4Pm2XLgeAGkYF1He8uDEjiw36ATeQFEtndSz4cSeeHsKrGXGrFy"
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
