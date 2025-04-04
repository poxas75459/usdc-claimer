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
    "2u3xzQbiRcuJBy9kzAxGj6tcdupZFikKzTT7Bs8RzrrbQVSCFNR7v5N3SWoU8ANuTH2pAcapn9xgALd9B69doSLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61pJ8QegfdJ5La6ZhtHz3RQw7UQNKEDhtrKQm15wp2vE93m4hG7Pzfbqz1YK9c6bSWTppgjbYAV7Vn6WurDE3Zf5",
  "key1": "43X59DqJczxk72UvnkoABD3gMRo7xJMoMNE9zfsPoKTr2ZGD5juxb6yf2yYTz7mTBVTRb4yummUrQnNbRCX3ZC83",
  "key2": "4GwrmT3cyiidKJNm8bKhf93bFFLZbvh4S6my9QsX2F4uHe3mCaBv1frfRJmA8uPneQ5wUkxP1P46c8a6WXvcqt9J",
  "key3": "4trhRUkgn3wLwgCms8YRTuxMUeMwy6xLnFqrvMBPBWccRHfE91vTsxTRZekqkH1GzdgY1mR7s6uqup9Lt7KM9DrF",
  "key4": "wQ1fiBYVB1CtQ81vPtyZoXBi9xCmde8hwefkQUgJdRmCACDCjeGnezfaucex47ZPrA74dXFXLLDDphPMtf9Wwph",
  "key5": "37SUuHVG3QqYAdju6TrWGS7U8eZNJCv98NPAdqDne2SGMQv4EEenkCCaxoKiggX464meaXdmPSRP3Q4AAT7B9Dk7",
  "key6": "5LdftuWV6rnKMa9XNPiqAFu7SyxxuUFw7jXq3aKj8n87L9q1xcaj1c3RfbPnT6KgVTer3WzEp8TmmkA4xvWGqyi",
  "key7": "WZT5fzGtNnyAsNZguGZLa1ifzGhV4D8HhLa4hBSgN2x4cMKpEHpzSJhG1VzwWXVAy43QoHbaqnPge4xzQYzPmr9",
  "key8": "21gSGdwdJR8NNLXQqMpReyVZSViA8uCC5LYugmx3r5k4hi94m7GZCwLwGq1ijYUKyuQL8mSXMC6NCCgM4i3XPG8K",
  "key9": "vcstJKnxnHsUsEopJEggXDjNRYdAc1NUEac1t5xQqemMLEqbRBwo8TLZtEPJxocnazDfHzikNeVEVZ4gD8quthi",
  "key10": "2khe2URErKB43EcH1LuxQKX2ezVNn5fTdx1EF6CVU2hoNJXdAZazxRhg1vB7ckFV6gBS1GijvYH16MRggUynLCyA",
  "key11": "5hCqZk5AD3XoqHRhk4UUw2hPyKpp3uggbv27DYQiH4ka34utw7k3hek3APdqgG4qnXV3NSNcByrAcsbzB8UchFnx",
  "key12": "4zZLi7SspDaAKBj6XaNqF4AeKZ1GWBznpxNXGGbWJ4AbaAcfUvZNJe6BroMmF6nfxF5Vib89o5oWXqEJ8dSdqi3B",
  "key13": "9kxYMXvDRWLs6Ubx6sXsZdhV1kSzByqSLjWYEiu7JD2LBBnA3A6EECHQjcoACa4RLaz1kTWcbxF3x5z3aAxaNUd",
  "key14": "R8K5EzdpxoYPmwrkbhSuYGCAYLNYSov5yQtay4KV7UGBghZK9eHa2nRzrmhspeSPsRraeNisiuQTzGUQfmfUvRm",
  "key15": "4QxHm5vv2CpNs6YaLE7RqGZ8NVc5C9muCHkhZD3uZuFjs8dN6BXWiLYUg46WNPbgGLTE8skNe9mGZz5hScNBFUXx",
  "key16": "238EqxdNPxkTSUrwVjbHC4AWuFxnXSn8XpgQV1qJ2xAm9nYCbgJsCY1hwQcWHYrUGm2Cdz2UPwPeGoLkQZLyj7YZ",
  "key17": "3sKaBLx74qxo41KRdVc5kaWYx7dR4SCcfpVd8zqbRS932sAH367GRYXQGZqPH6euKxvJynCeGbyA16JamTayhQ2d",
  "key18": "2knbjWyfd9jNGhZGLWr7QxpZWGn2kd4esdw8xgw3P87j49gzegv8eZbXBqzafBdp9iAWYk6LEDCWCtWEGm11jMcy",
  "key19": "4nXZDYVtM4ZNWRwnqfcEAh484XH57HCtrFf9C5A5PsrnZdocezS4aFjJQXoW8XJ8noctVJD1LTN2ZDGfSYKRFJVy",
  "key20": "qDFVYbCdvwLSxGvGDbKgTEzRL5byF1AA6jm41P3D8ZNjPTv9bEZ4J23AvoHDPh3zDDAg7RRqHLD5Aq1tZCkktqC",
  "key21": "5HfGeiMQh8Fbzqu6ryDUbG3TJJ5cPVEmMEPq3ZS3LSQ3NLrKzMK1FpACVMEGVoZzhqZMTfzoRkGXk14zsiHhBvh8",
  "key22": "2CFXQbA1CEugQK1SeRrGERVNsdeZbFUvVRr5cuPpiiP7cALGNp9Zf5umwVVjwDfmCfYabLiBeqGA5ZuE1h9fDfU6",
  "key23": "5tNrmGBN8kescq7Q7XMpStCduURGieTktKYr3oYnyYYnxonCNoNFFGprAwWQwoEDvGQjX5gFmqxaaNKd6FDZMEvB",
  "key24": "aaeU1EKXcJioMFZ8ebJqf7tNZe6pzfMTfL98vtCxQUw9XA4pfqPdBhA3SLVQ4wwy4tH7gxurvrxgDZGhzKFhiX1",
  "key25": "2dTCQaajaGkrebZHbKwuTYW5nFv8e1inrcxush8sEftoWXZ2UC8ptMMj5ohKzcmjgSqXq6rn56qmBSPgzQFi1Zu7",
  "key26": "3rYskHmbGbcS8R6zG16LtrCakcjB7rTaRM2WVg7dy5GBsRwmj4ztv4WTknxHrxgqKXNGfXAwBKWcBMFV4pNWWn3s",
  "key27": "5Z65EurHNdr7VFn69EnGLwkHerqP8rwMdRqNcdq9eiazAjpaJk7htDFfZ8nnTjKYwXigcZzUGeaFNXNHKad55Gbo",
  "key28": "59ofkhx8NxkXwoNtAasaaSbEEW7VXzRnVjCuMsmGDbtgL7xmiV6iXoi8XnR18ZxpeFWmzLFUkqaU5ckpYZtn2KPs",
  "key29": "6tfFKtD4YgVtEPmsVLtxt8BxPEnAnrtPwrWWWuVD4LeLUP5SzcFToTcQXD31TmEfxM3o43B4gCF3Pf7VehMfF8X",
  "key30": "4tFMs1kZZmuiwafFza7rnH4sXGs2UH1L4Votgo6uKJS2rfheZL8zkzs69hTySuMZuf2eScNKZKYpRz3NkWE12TFJ",
  "key31": "64EsFF8CVeNtRYymfsPgt6B3fdbscecX8YNG2Lj1P5VTawZ1tph6z6spjBRUjTvNg7Kao6duj7HXxMKn56TDgkDw",
  "key32": "qAspU6xUEQnvsAu59GeYkeY8XwqVoaxbT8vaHCa5k6CyCDcdTQPx1vBHLfe7zDgRvNQDTyZrXPeL6ioipBUqGbx",
  "key33": "65bS4j2K8smEx7iBs8kLJp66uEeLgEXUeQb3bgvqf5D8vKso7EYkRgD9mbWpv1EwaHk63MWGwY4kgZ4RFqprYB3k",
  "key34": "3CLYjq72vZc7xbvUDU1dytpNATsxEa3F8kcBUyJ9kV9SkYpXUi8obGXk35r5BCVs8JZ7bRg8yH9HRBRCbeWu4pTK",
  "key35": "2uwT2ADRUBWTCmjFFnom2RfEXNjc6kUor6daPCosoSAdepZoc7825VgoLKAsQLXPyxh7jYguWLJD3N1QBGteCg5b",
  "key36": "3B26Wc7h1NLYDTxAwZN5o1ayndCeygDyuwUq8hYeYHMYgFry1pxuK46GNxFmQP8mNeUkGDwvt6uRqaC85rkZJezF",
  "key37": "5ys2GiW31udh6xhiR2FK2XpmMW6DmUeRef3YdBoabmmvg7nL44raBdo2BbZPcBpxNHfq2ZV3NajDSDbwKtgvikYw",
  "key38": "2zfeURWRHXPT1B7D2jSB3zpoAx8iG5pRFJ6kQJCKDx8VWvcgqysUp6b3WaHZbv34yBmGPJdWYaJcgHtMj3dnK6M4",
  "key39": "vRXDdShCaxCQ5jqvqi4ndN6bkad6huX6LkopGaCt6YdHbHFzLVT5U8gAacYRVoYQhcz4VqV787KnV3LWh3MNL74",
  "key40": "545LHYu5nsZTb3aBbk2KheRsbSrYvzJWLD1bmMHrG8vRPgtpA56Z5cKcjA8AXt81sMxxaynyocCgKaqRJtDMHNxP",
  "key41": "5urRH32Ab2Q6QfgF1LRisF1XV246FqtJg8p7kXWn1R2TQ699CVX58LkzrmRDtLesWHgFExC6SXWL3ZdQyBEoGMqu",
  "key42": "36Wrkv2oFpDy6SwoSXQrxjSbTEzzeUGTNh28NdzmJ4s83RAGXtLeQeftPDHx5cWEsswyyog3WFQrDXszWYVaErvu",
  "key43": "KVjecC1WeB7PnPK9ynssGyBHXrFtgQ1apK3sA7bsw8wxz7tJuDqPX54hhvfWSXSuAdvT9gKHvahsARhPdutrZ4Q",
  "key44": "3eR4CXR5S6kcL3Pj2fwGiYHdh3LRBpxaxY2zuMmJJoJETiS9jcvcbeqvxZTRa35vvHhDJPTg81n7GNZ1rXk2h5nn",
  "key45": "3jcoaVpAtG4mcehN3uaBcsjcDkmyzULz4qkzr7spEMTsiGwxYFHDFKsahHx7bnT54hzbbxF3UzYe2VjYyvTgKyVp",
  "key46": "3QuJCKhdjnEW47eJSLCgaaLCLcci29JDtuYv2swYKHMpWELVHz6S7d8QqgGnvbf75pUU27T6NQd2QsKGFsTvhtQC"
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
