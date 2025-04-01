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
    "2SUq2Z3rkZt7BsWTmpnFfZk52x64GRLyDQaFew8H8GUG3HXWDBsp9iDj99XF6WLHq4qf7s6BARq2WHF6WsNXqUVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2Z3qvTa1QLnxPAgbZNBMjzJeBFWuy8KWPBaQM9GTjw9vrhiLFSGkobcjCjNLMy9WPDUEWwCm2o7tRqrSDLo8VY",
  "key1": "2GgPXh7cBgMicVPHC59DwasxUhqbTSDtkAMN2PTbD39ChW5WGuyce1vQtYmGBDCZ5pXVA9d9p1YkSc8JVf9xRSD1",
  "key2": "5H2YjSTP4eEZXJf9BTwT4pJXkxWmcaRvy7KHKYXSNYK9RiWL8DYSuK4S8MrNcGJAUSzZVXQGZ43Bv21hy3L3yq3C",
  "key3": "4ckoaGkiv27iZqz3oBxPTJbHJU6ZkN1TS616Pyo9ULabJHSSxB8HZx8noE1rxESM3XBhm1bixZwe7gzTGqvjyMfN",
  "key4": "5arYLVJSYVivHMPAZgZ4UfRKQLQjyUfA931QGwZqzyBtXpq2Zi4MtQ81rxRmL8PxdWQuGuNBDrH42tRuoiubwH2p",
  "key5": "5EmiG4DKtSmbqpd3fXjaxprzxmupbHW2qvCy3twCxqkQfLSH12WXe8fDpgPHoeA3DsuHnr89i5DYhNzSM5mGmAx2",
  "key6": "2nnGVMDy8z9efSCs43nQNNCRwUXg4Q3JPbudoZ9tWss49ddfSnmTToF8GU4bYWZg7rLbnxzwuFrgvfVr7RojnSkE",
  "key7": "2jSdo1CXoKi6YXd1VfP4oY7Y9K68QFM1cPgSmHBBvNu6SeeSTXfsyyHRJKxgBhCGwuDzutav2Bk4VbsZDxbS5tRQ",
  "key8": "2USGzhwxBp2q2c2ax9EbbnNDrxhTGp1Zv4XaXiN6icQThtEHeC11DtETGsQvoMR6hSuad1qCt6b9pr9DrQ815Vew",
  "key9": "5AUQW6tEy2seFPr1VqudFxipGES8uBVNDrChMpX8PDU4YUPkXiTZJzSZ8HeGVmSm82wsfpwM412xZsYDD9LBu316",
  "key10": "5Xx2sUgmT8hTTNva8WV3ztheyP1SLY5Mji2xHHiNoQQEzt4KxsYXRewWq8hWDtFmQTsZP5sZoYwb8nQpSVrRo2JM",
  "key11": "46SB6vVZaBp8HMMy4QGRNtokwt7iXE43HqhvgLaPmjR27LeTV2QV55VFhTVDaviBvyz2ZGWb3G2W9KrV9PPWs23j",
  "key12": "42JjEXYkVVN52ASDQ5wmsjYPfA5wG23aUDyEoyxZfkmWdXcS8CbG1Wdb9KmtqZysVkNDkMUv7p4fEbpWHb7BGmoJ",
  "key13": "536rHZs3ruUcF3n6EKg6661Jgu78PVdqNRggryNrKqr242fuHpGa3PLcYrzir3HkYNXmXnMv4kcHA8oEGxuNJN29",
  "key14": "3RuK9AiybWjxfzHQ22eWq5vouULU5N38s1KMRMPCM1wn2yMo4kVEdFqCwSLkDLqrZJ8Z1PhP5pJRCqgcsSTeZCgb",
  "key15": "3a2xQVSN3ktRuYagYuvE6KRUryECiFGepeDrvTo1oQfhvCoSMcPXEaER72QhWV8mu4CWbwT68SLQn8sv3KwAyz6V",
  "key16": "L1WkXF6j4JQXTV3p22Gzm1qQmQymuFbaQLknvUMLLj4J9U7FGJ92NpUY3vr4EcUKhUufrKiB27DnUg1nVD7Z3rp",
  "key17": "41ow8Az9hgNrZN5fhBCNnvH8h1r31DstQrVuvWZ3pimz1a6GQ1NZcvYyTsbaggoCupCz71hJWzuNKtTqJ2SBaVoj",
  "key18": "5XnNiYt6RDvrwiK5yMssVTcoGMR2nkhsuHGsaiNwXhveHeGWYzhLoeLKxmqVwKYX8PXE1tHCJRfpTosGkBDD82RQ",
  "key19": "3FM5mEZma4fprrpyVwFG7K2WdDgTo9breGswq63B8sWYPNLyvLKBLRRQu2DDBcq8fFFm94HwT2Ks1iQLzBx6KUKV",
  "key20": "sfuMSfBoXrztYzV98vt6dpjDGSc4NfMjasXwoVmWvgQXziZTMnDRtzgLT7ZHzZhTmYPnuBo1nvQMGUKhPq6MHnW",
  "key21": "1GkkDSD3Zzr49kdW9Rz3Ho7JyXqnCemhqZ3K5ZfciBpfC153PaL7WyEvBp7wj2WwBS3GQvRZ1zF7M6Tya4puoNN",
  "key22": "3CbkAFGoG8GBxmLoJuKbbNmykY43jwAAztDQCs94YUg4WUjMH2MmCMFJHoxEqKkn7HmGYinrpt7s4YV2VtcxG2h",
  "key23": "3TBYDnENDfWx5rB3Nm57jFWoogUbbW6J3m8X9qAJYdkVQN9uy4bsYd5WgPt2SbwNtAhzwLFWgUMPGJdfuBpgCFg9",
  "key24": "51CgFmVfH1FEtRnqjhG5UeW386fxmm8t7V4KMpYERUwqn7XvC3v18ESQYhpstMVVNmhqngdLP2tQ6uBProk1FKog",
  "key25": "5uGEzYRwKtjayh6yRb8iqnX6QegUU4VmsH8HnSWsAKvP54gdVpNbCYFoMK28sSWU8gYPCJzGW5BZwvfhQP3ReM4V",
  "key26": "5MMKf4jWJSbkta4nVbq7mfghb4mEyyK9dKDB1CFPiM3vWFGta7DWGzFhXm3NBpdcnSyfNyrZWFeWebMNuxopetc4",
  "key27": "3B4XVZrFgiSCCwqXkQymaBMihSNgMFnNFoXpjrnacaUfsUZ3ejgYDAQK8NawvxXwi8NYe3ABrXnNa3RmJkpJWaQo",
  "key28": "36BWoPXtDzrRSbtkYmUFQN8smBUoYZoahcmpVmyzbDvjk27CwsDF3dYNNbGTc9hxWPAmf5uHGoZP5rkHSVbSyzH5",
  "key29": "2cWsMmJhSazZchZq5QHdB1gJKRk3XDksVFd8ckbVkmyN9XrMZw63AtoAZjB2WU82B3zyUYxJVtNFkosKAjHKVKDm",
  "key30": "5eP4fjupJogYfnK3R7zm2CnvwUerwYL4nZecnH9Ed7RpW8FG4rC8sSaSytTSu7p3f5ynyzPWJvnBBKG9K3BgNmfo",
  "key31": "2VoFS1Ams422o5jkv5Qph8Wd4YnWpnowQsYR2hiHudKoSgWFjcfnapqB2whyvKuE59KQSjiG1vrfAm6YbkDsmPq",
  "key32": "2b13y3AC1nLCxd4gj33WNBoDm8sFifgRT4tS9uyhHjpWeoWMrJ9bWatoyY3VkjPoMPAJE8LSQ8M6vjcyj7XtRiTY",
  "key33": "f8gi8WguQMfaYC2KQeFmGyEHxUQNGBx7CmNeVET4tQvX3YFZFRU48xR8x4f7dPbcmzbAnB1gyEdPhrM6S7ktwzd",
  "key34": "2u6pvxwL7Hn1A5vrNY2GsirCnsCAtSr2vehz2VR2me9q8BSQWBDPahj23Hw1VGSxG5auh5yD3iysPTuuVhpGBaXU",
  "key35": "5JHMEQ7EH7kWk3rp43NgBM6VtPyRCbsgJsxFeXsV9WYrdhxHpVgzN6PC9nqFUTiB9UvDGzt6HgtETu8BZRdwsjxf",
  "key36": "3M8CvbguBtQkAHUDEy3sJH3rekxMfEimkGD5FQgSqf4Fce1uMBmZbdGk772QNAVH2kjHitz6eiXwtZmni4zr8zBu",
  "key37": "36bFJdvUMuduWTfkq6cP1X8iPJ3BfvpQd2KsFCTKcqcv1rTMiYgmnksAzxJYgBLjdhpkZuFGCvuaMVDfn91TeA1e",
  "key38": "8reqhH6UMCZCtANHLxrVP3nniTBxRhj3bFnKEXH9o5r6E9Z6HHK7DtVBWrPNd1x7G5HBDUN5tTwdg2Xfn6XteUG",
  "key39": "HcKzSrMhwH7MWoW4TgBJsjsXaREUWVyXFqRbvc2ujiYf8nDBeB1TJ4FUoUJRydj8MB58XeNLMNUyFzcRC3EtB2w",
  "key40": "2KVXqq1QvPjoeoP2KDLrMKdhwkueWptWz9eenwXsuJFWKBGpzz1dKWmU9Lm9XFULRwRuHvHuq3dTFKderr4ENBX3",
  "key41": "enJKhwrLTnNuRGMVTCBkC5H3Zr8pExRK1UuBMKZuGJ5Sac2pnmsDnN31GkADFVRwJHhWn1jsryPpFxoqZHJSKJt",
  "key42": "2RPmCD4s8HbxJqp3DHFtmeTHRfjFBnBQaJAZzHYgRpaf4AMTceSBcZdnxEoSS7cxEvwaKBDzxjbihfc6zsnowsXd",
  "key43": "5vR5wENRZxreXPA1imqxQHTgC4fWErmPKbtw3Tt8XXMS1Ff4PazHjnVCZhr2FVVpmjzvw1Ug6apcQiomDb4YzF9B"
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
