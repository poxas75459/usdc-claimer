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
    "415eBb4VfcLwBb1H86zt4RSQnuKzjTp9hCxQHhcLtsZDj6ijRNxKnp8bjg7ejUTVx9EUmk3PiyFYoBKEXuyDBhRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HxX1dxuTkgrsvnV7qtnetrcoiXTKU4w9eCaCJPTfYHnbnpu8VhGJWk5JoRUUybBLJJYLHfttUVXWiZQCGS6UdLC",
  "key1": "2tcc3PmngsS9XtiFCBn7aM7EVEnrGvWEXsxVABJD9QAiy4RWRQa5mYszqrBiCWcvhx6hdF4zv1u1SjbdU9kk8xod",
  "key2": "5A1CJRybyRPqrtFYyQHNnz2iSZU3qnJLe3C3NauTZMiYhrrzR16gjyUxU9kmVSmUXG94UfdKwMPhJaq8MSUQPNYM",
  "key3": "4sSQdfy1RmWEExH1eBQi1qpEFjbK2dutN94ZUHjVFK8eVcZKJgvjT1pXkX16MfctiS7EZARiWqBFo3Hnr3QT2SUV",
  "key4": "5Cg5MZXpWCbKdmq5bzwbAxxxncoPPzrYecjBcY66i7M8oiszttfUogW1poKaMScX1UvTAMWy3gKhuTNwpoNCrk4i",
  "key5": "4bmEBc1tyBXVWqaa4SiUxJpE3fw3yJ2AvihvARC3rR1QnMvnwnmEEwC9AdSgnH1N5yQnaScmX9WSy7MjexWsoJEy",
  "key6": "gEgkuB9xHSfASdjFSNW8t2nsjdx1MaGwhHh6e8oaq5vJj2Tp7ViDNneWxwiZVXSBK1YycXKnHWdsdAEXrRqg7NP",
  "key7": "4krWN8e3GjZ7sLwPs5Yht64WCctLzcokFXu7aHq5wApKbsMNHfTSeRXq22FMoHGSknf5kA7MTw5kd3twoLsm5oMt",
  "key8": "5RrFPf6jCNmfKf9ZL5dnEYY2G1TyXY3waiMmrNhm2tuV6Ly4cNK28NTza2UC927dGkqrtHwQxTe5LS4ZL6jLDGcm",
  "key9": "57rigaoTMjsnUvqZdwMSkcwCNxkbEAneQ5c3e3XZ9Jgspmai3c9NUH5rM3CGMyLnzQgZnwksMeugYih1XvwyL8N3",
  "key10": "3SHjPcZ6UK5EZ6fwf6JLrnQharA38Xoqp7mkif7wk19jJ6hU82giJC9W2Eqr12Y6poqQt2mJXFuntg193hPavtjm",
  "key11": "47QnynVufdzPzaXk1NjrHRas1sXjrFV4uzeLM8qQi3QCfLJdh7AXwtmgnod44o4PUrfViAKkiDRmS7532Yzu1CA7",
  "key12": "BudxXLi3uvv1vFxA2sHCn8NSRFYjf9m15tpforURB9ahMRfyWjaU6CA4Wn4dLHNGRCwr3WGNm3W67YsVqNg6ugK",
  "key13": "4xbEaqz2JDeHrU3ECXh6BGtP6WGiRCq13qVoBfyVtmxxjM1Z1ZHtUpPH5hW74RJz8CUriSNKj1THZGzw5YaW6W8h",
  "key14": "2wuZLpQctiWQ9j9FL5rmQm7wvMk4fzSBfFGpLVy3MKcMWEqh9aX4WCFab9irk2G3enUGtP2WPodxfu4KPgJ3q7K8",
  "key15": "4P8fhYZMRt8yDJCjrbV1LuLfdQv9dNHmqMM7Rs2KhpmXoZFAmDkKRaEMVMws1pRuCjTZB2AoR8FNG1pTxk75yyT1",
  "key16": "DUyRYduWHMb38J6TbrsBnKYdphZCLGLUWnG6dN985vwFJdSvbVBB5Yhdr6AEt1r74ysRccEQBKWnXCwvv3K1hrA",
  "key17": "3c4VcCBq99gJZtX758Lnc9wVknigcmebf1gu1sqUncYjD8mdYLMygGYsbWdU5awwp1ujNWG1xCnSFciDvhANZKxE",
  "key18": "5EpjmCajTW2zBhr6ZoAUHmksEy3vHKdKxNjEi4sVeo6WSxiuKrd2LFT11Exrw4c3UKKKYa1WrhFyZQVbNFwxewFs",
  "key19": "6ZxKNRhqLdzk3DCrLqh1oGhbpEeWNWL5ZzsWzuf71eg9biaPiMLVTF18BjTpULiWnPKJiaihowUZYNe3jsPA95A",
  "key20": "3RWmryMfrFBGL9MVFoPYeGFdTvxntN7vJ5omn4xPyAymFUwh4SRYJ2tHoWB3wh3DtVccUCPCmPfX2nJRbKoSMNaf",
  "key21": "2wu4Xx1NYrX7XMYM9vB5awtuBiTt8mKicN5s7egpUipRhGdcynaHQfgUF8rZNf6i4WQc8S5Xn4DJvj1twYEJUW8j",
  "key22": "4m5kAypSfsn7y9qP8wZzSbs62aitNHHcd8fdD7D4uiKfpHywVYwz5aGZnb4F1BYgshEf4tRceMwuUKyfcScTWMGz",
  "key23": "4omeRfCsmJQa41icDByfUme6BAU9oapfXuYJnCzaUYTyNJY1qmAJwBKUJRz4ou9PGBv7PPJSyPBJoQB7M5wWidy4",
  "key24": "GsZQtYa7BvxZGUxNX6Eq2KrsU5JdtPnbKdMHJ9WQwNaEfPJ4Q8uDoYzzeHzcgY3uDo5vpp1Zzn5QxMMN1HCZA1C",
  "key25": "R1pZtDCN9EWY1763HAMn7dNnfzHT4sqhPpLQnooKTFWRS9RfmzRXnuov9AVY6izJmNr5ksVEZrKy5xpjT3vVegY",
  "key26": "3AUNfhHBocGcvpBFsn3Z22acj6Nn8LXpFxexCVbV9dBYft44CAydCMiEK8zZLY2ukKFfvXqFeBeEruwBtFaVVbX4",
  "key27": "2Y3LQrjcTTC9hANCc4pcppj7dtC2xGXdTejepHcorswAsRuWvC3enU7MQCgkJ1yXMZrypZMmPKrouQ1qhzRT9mRN",
  "key28": "3ZouWFZYDUo7oa5JL4duxbrEegTCgLPjXwL5gfrKcSPvFwQfMvxv8a6GnarqqgiNL74wMTGFTCbhajqEVuXd1ZG3",
  "key29": "2PtSBYAwc1zHqZBKib8nFeqEN93VCe6ppmUztUZWwosqip8dd1niRbSPrSeSTK18ySdbgf72BCEvNt7pdzT8ZUYY",
  "key30": "3ABEvBppW9AQRqpju5y761VySd1LPByXZ8Yq3Av31u95ocikodRMRVvXbL6LUevbPdUqaWPuWf8BqiAEYvqcQgsZ",
  "key31": "4iidH28QwTZGm8vN9eWkGgd4nDFAZsE74kLLzWEM4jCSDbsoV7xBhrVrEyRFf7UBJmykhURv9pKES6gURsKA6h1K",
  "key32": "5CXoKtXXQymDrUYtS9MFtCPbwe2wiEo6FSRHiDnVmYhXBkaeguFbqXxgRBkW4jd4Le4rPY8DJx2r6cWqCrEbPLZm",
  "key33": "nEosK8BUswnUejFwztc5FUHfDNb3ZxXVW1mdoUViKmmVPVwkRdGaaMSeUfFWukEZbjRA4A9QsQ3rx7prx6XtwEx",
  "key34": "62wJn24VTyTNjQNMN8DnzHDuuBrrLyqtspKSdZ7Re3uuVEZRfonY7e4ZcDVVyoaiqPgpwBxYvL7ESKtbEcnrFLDh",
  "key35": "4Ez4VidcfFpeVbVoKZ36nFn73FD8y8HpffES1rAhC3g7mkKZn1L3krLExzY2MidFgFsgTSmuXchQ7BCH4zsxACf9",
  "key36": "cZBCiEMFHxSXg4irkT6iT5jqsqxxM3rk9znX1v7khDERQwFxmFr1JQfsEVVmvtJETz5jxs5NUm1paiPogmd81Ms",
  "key37": "2jPD5kUdSmBR7UdpJpjnYv79jkyJmFkL1Xvc53fxNw3ZbUsjojYYJ2AcZ8xmAGtL9wt3Nyy7YnpNjfRcsHp87K4S",
  "key38": "4HmEsgtezobQrRSUDDUxnJtasrQ5a2Apkb8Tw1r1WG6gcm7h4T1CZhr7Sijf3iip7TweX2KQYd3B1v6c7wGktLY3",
  "key39": "5CXUbFVKjyDj4LecdHnqm4HLh5XFaFm3wRjwQvf4ugwK2SZipLetERiArEpsigmZepDFPGe7G8mAM7UfVzsUmTSQ",
  "key40": "W8o89P4MexT1Yq4e6Z16apka6bMdCTYxYihYYj1F4Ho2NjJqRxgAKtenMQu1Tn1zwjA4ev3EWZ9EcMVckYpVGaA",
  "key41": "ATdep51wsaZPWwNLfa94pkN7VF2wqAwDeSNxeezsWGjMq4dWi1zNM2BvZcXa56aW5URVX7fFt56qaX5pjtKKtAe",
  "key42": "2SMSW2zLTUqZ66yxPzUTYgEmb8qMGEaz1YtcnkMz3AZwXDbUQCwMRAQqc1dXQyEAN6LAitb6xHbtAKjAmbr7YXoJ",
  "key43": "4BFXBaZ2NCoagcc431zMcSgu1R77XzPkBatPq3c8Hu759f5j2a5NJqkUQqGVqpBvQ4bZJjBusGXzmArJdzMe8hR7",
  "key44": "4ZffpkLBLdiRsFEKnAKDBu8KJCVZdafypvhfbXGSm9g6osPPi2ZqHdkJPsG2ZLZGHG7jQKAQBZbvkiAbTr9u8oz9",
  "key45": "2fQTacoMVjwn6havBxcibpqorTGgx1JUYnNjFiuiZA1dVprJeNTPJBMuHLPS6RiaKi99cwgNDPrr4PwnX1xRbx3Q",
  "key46": "2QXRknp5Qs1utmWG1bd7aYYcrj26tsH8SHteSvQcTcYLwKwKUJAeFcNJfFnaUJpdHpi6B4g3wYRW4Ax3ums7cRYd",
  "key47": "2FKJcVhuxHCT3tPe28VF3TQr2VcheuN7K1eYWSJeg9js7J2K8PArG23LHkE1nRRwicPquV6cgxy4ZpYztousKMy7"
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
