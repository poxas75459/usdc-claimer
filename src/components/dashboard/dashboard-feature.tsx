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
    "4XtxSN1VTdKdRhfdDpfbSbXiD8qWs5m2ajrsB3nqY8PiYtjHy4oJF944TWfo8rDqTFeGX7THR8MPGAw5BA99DNfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R25jCNSEqG3jhuS5q2fXSSiTUVTBkHhBF9dAu9gTgdA9QQipRWFMJP5zEEVTK6P76rUiJ9YT81J7MLTKxz3iXAu",
  "key1": "3FU48coFCMhPiqmMNcah8pp4wU6kiiw68ZbssNQLX6Tnz8ex1oos5MgANWPKoXibbQAPfwiMgJ7NQVVY3Mw1vaLZ",
  "key2": "zpdr2iCC7pyr54skhK1T99zY8tPd4i5Sf9EimypcrPpUYeXjLGCLtE9YXW9Xt2pqqV3oxDFHjrhPUDU8B7SZqnm",
  "key3": "2UTzGXGC4NP7QPXEEa8BuJDgdL8FcwEdT4Mv5Yen8z4mvnBsxbciGVuHXAvNNYxdvC9PJvbiwyWtaQ5ydH276EP2",
  "key4": "3gqBWzHr8Wm1Ca6osjZfqssXR2ZFNSXxJMLtraJhDATWUJFSmQW7ww4QSKXNBPU4QzTvH3ue5L9PHNgUZCtv7DYT",
  "key5": "3SgLiWEkUYkes1ZwDfy5Htm1B3P7MWbB8LBAGjJvEEYkPWH4Js6Nn5dJhESGEucXpFJjSWdySt95kXLzt7bAE19q",
  "key6": "5CC17tDsn5VnyGy33bRUNaWojMM9TJ2BiWZHkapBL9Tm8Yxs2tqSmwLooKCfQZBRSnFnA6D6CGyM9NX3uVogy7Kx",
  "key7": "4fuZpNPP9tdEPBYLC9ar5iPtvFq5TBiXrv1iEVrYBSxR6qsKbKbwofM7jvYfc1288AYUauCSgsSdpJTHnCMaDDCA",
  "key8": "cLG6XybaJQFkLJgYzJQg2dakW4KrAVUpWCC3usYzGMktK8vq8MNAbyYQZWhiJzfut4GgyLq8VKJGkgWMaJEbeFW",
  "key9": "5zeovkHuPt11i6EeXeEnAzFb3EYETpeky6eczfwoCgJ2rYxP2jVtS5GRZN3avCC8dtKVULByRJ4MYMtthP6ykg4p",
  "key10": "kfEid4cWe1j63CpenKnZtUMCFHEh6JhkRC1A5qJQu3MtiZPM1S3VrAbi2fX5JpJQE68cvD46Hyco3tEWV1QJrLS",
  "key11": "4sH8FntD9WjeCcdp5XmcuEYvtNBKFiyGn3Wh52NuSA6oAGRjWPhttGLLVYAiAMrgbkpeK9QkQPcM6DAgCp3teEpe",
  "key12": "5gZedPxkLBstX7cg6CvGDcEXf9dC5JjwVL1P77bNkFVmHbkH4wtjDFz7T3hwx3k7Jkh7ga2LmeBUydpAtLVbbSF5",
  "key13": "34ipXyECtrNAS1qMHr9UnuuyWRsDNdaLoKE2NKWgSVnJZxgA5KmnuTMX1RYggSWFp6BoDvsH8sMjkBAWFU4xGSWL",
  "key14": "4THHBHEqqgztK8vZe9At9oL61Uas7Y4bU8JZsNEKKbpKmY5wHqxd8GVqgKxCrmS5A4DC6S4Ka3ecWMLeMhyLiinh",
  "key15": "5zPXaKxsbPF8SyhM4p3vYVT82oDpER5SDwVjsHtsPmAVkU7N9joi2p2HUyGJuN2986wvkU3znx98vifYiZswKYmt",
  "key16": "A6EmZgiBUEgQUSxjnrMTBM1nL7FAhhLhKNvRZXsrBKNB24KLx2UtydrcF7d9eKkyw3djA8emhsaCGuV53MbhV6j",
  "key17": "G5HxtJQaV6aeVxN1uX7Qc2PwuJ6ezv8h3aehX1Qz2k4PWQGCEjvYDLUxeAjjD71A498wzhwMgyHg1UcC5dHaRUF",
  "key18": "5mnVyWu3TyrwGadM729xTTcTes9GkAK9LqokJtvwMhBiDSLvL88VXASmyoNq87ERk1zVd3KDK25fULXJz8xT3foN",
  "key19": "Ft2viQXE7vg5mUYWpDz8DeQCrBYeAbUGujnLQSb8C4cwtcXJEpRDn6XsdACGSLxa59QjDpCBxcrd8bTvq7oJFax",
  "key20": "3xnYp1gd1RkZfL1Av86GLiiwxhtqMkDFEM5HeK1AqyN6kUCuyTKd2sYdiRZeXAqHpX5sDMKWiPjEmztSUMdXYrr9",
  "key21": "4tZbeLZYyxwk8mhVWnHEQQigJrxsRS2CfHE6EEBJnRbEdbE27ZbP43L51CuBGdfB8tyApCfMbcC1oF5LHN3QZEGJ",
  "key22": "5Nvg5CrXApXP5sZjM1YnETjqwGw8dRu7S9LamT7sTRTC7qLDBmw7VzTsDHS8fNYe97D6o2fM477uK4qP8hftu1HD",
  "key23": "35pcFEgCTjTQDqt2JQQynKVx5NXKBbFoHzvGGK9nqcnHgweBHFCH8qQmeagXY48RZkCLqRits9idKAAFmyyDATRK",
  "key24": "3inLaW9K3P7fwrTfTxPazc6V4kQ2PP8t1sg3cLVA4KAaCWgCZuA1Bkuuav5dCq65b7zPWfCqkM51ad5Rbknmjwpt",
  "key25": "5PptRnxRZ6rUo5nKSRMfnDqCMn6MUg2dG8rEW18RBhKEHZi5Cn6euuLM4Nq6LLp5SzMPy7k4CShKFTHntCfgFeYh",
  "key26": "2zXFZ3sQCpPV2ZAwZ6QXsRf11NNKFx5ZieyvN4bBZbeuuEvYcqChoKgufvscTAMJgahfjTk3tm1tPEV6jqpPDnAB",
  "key27": "4mRePZtRyWi9mAZjudttKobae2vrrvpn7jcPaZxSMM7XWaZewL2JdBeZsoyMH5ANCtxGNU9qzauRVLC249J4KKgx",
  "key28": "5VEgy68i7G9pVGTQCNozKD39cLmAZ1fLtenDbN9hYM35TmVT5cnxASRYD5nQCQS7NEYKV3dSYYg5wK3Qnr1KkpUg",
  "key29": "2ayzQ2u2ub8qJqxtxVKbtVNuQTfDmzeQ22j74kT8HDYc6XF2GFQhecRXKX7cwEEjvY1BNkVK8BP6WuMbPEfTqxSq",
  "key30": "3dz2dkCEabuuFAsFh7ersuzhpRdZtgzxRrGGjaoJtY3cBgWh5b95K9PH5bsu1qhJ4e9rJ6ZHGb2Gk4zTEg29Eimx",
  "key31": "2DNAcah8Yhe37RBaPZtrFB6ULKLaZHpNPwGPTQM5wCGMet8g4C4L6XJt3BZ9KmKEdWFto1GWkgF3gvzsuRdYCCPk",
  "key32": "3mfmbSPL9dnz8UcFyp1pPgXVjKFGzq9n2E9T8zeqdJG8Jv1kj61bqjC37B3vQ8wrabwJ2oUeNmQGkeTk6NHyNcX",
  "key33": "5EV5k1X9pnpa4sViZd4g9nVeea8s5pk7mCxkP4U6hEutSphYvhpX2TC2w7ECPGy7B3DvZfHHRNDC8LwnLhnJFWu5",
  "key34": "3UPLoJ5fAjhVZSvjSkqVDgCLSGZwKyqwDweU1wqudNiAE6x87DThnjxKPfoesB7w5ZtL9718cSoUr1w9Wo2UkL7L",
  "key35": "2XaXoGHM8JsYBevZW9BRpLAwmGgcGZ8VgSM4V3p1YpZCHKgXVoM64x3dvFi21B8nfBmJeWnPZebiFTTCquESCN7D",
  "key36": "2Y6UPHWk6XTxM2D7af8rBgAPNgMZaNPo1YteSuMckRVaUyvEBjAzQQ9H29o4t4oVqVWq3fMrTtMHZacBonZY5ZtH",
  "key37": "32nFQj4uufiz6H1b1fXpXvkaMbQiXjcttSqGCQRxzGtriZPcT7VurvwGfq32kC9AfvS1w7H54Hfg7jmWg5bYtuhD",
  "key38": "pT1nNNbEXNFDVpnefmnFhwJdhz2NkPqHUX7DBKnKVEABQEzaEaJDTk1jtEU5dU24Mu9eT7Eq2SzQuVJiMgPT8DJ",
  "key39": "5bckvy7gYCaZooUSUz5bUdWdUSPXUMrYEgoGa3tn8XhenQS1hSNdbATpukaxArt2rfHt6RZiCC8p4vGQ2GhAtnVr",
  "key40": "344ZtHsUsG6sipwZgUPV247TPzUQAr4bwdbPsMEobraF4cpGZ3beEQdT4DohAUr4roCEj3c1GLBFe71JbcdizaxP",
  "key41": "2GDjqqQ1KvTW1J6UyzhnEUgATEiF2vdLJzSubALWeuUXH7jd1vjnC4kpEQXVKL3Eob5wjmZZAsxbR1hJ9LfLqU2R",
  "key42": "4ovHraMZEwJTCPJsUEzr8JHH3wnsykN2ui7ed6qGNdENgnDbeuzKL76xZrywAtEUKxLGcgzz2ykZG3eK7Hint396",
  "key43": "3pHUZaA3ntxwHbBcAvbgga6Aqe2ir2a4afTRc3zb8huG9Xss6Dbcd6iaxJtVVHCzG4JKwcUnDuZ6YhzbWpJuSNzC",
  "key44": "5c94fPKNJLpLtrrVNsWcEETmo6S3zWhDwAt33KQN6vDVAsxVuz1K3mUTEp7Y37obfDbSf65cEoEpeWwKyMx3Ny15",
  "key45": "5trtSKDa68wgjvG3Qm8q8g1uCbadK89tHgsTqDC9jgj7gPWALpGgFgZChc91nypLHGjL7af1wG9dwaFtxXFjSBBN",
  "key46": "2J2Wg42A1U8siN8kgEcErGbrNYczg61wiicMypMjWu2dMtuGkT9hyvpRw7yzpmqEG2mw685ZwygauS45KTXfgfLT",
  "key47": "434h8gjPYajfykY239FjnU2Libx9gQkww8HMGpsE4HDedoouaixcnTHsb6VWXmKypvDD4ED9Ay2cCqFMSC5tarfE",
  "key48": "3C9ekxojLoMxDjgqMSb8dRReT8E9g9Cg6KiGq7AQeK5goz53CNsJaZXZBuqHwYHRLxcCAk1xuTeFBPVhefExTFHQ"
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
