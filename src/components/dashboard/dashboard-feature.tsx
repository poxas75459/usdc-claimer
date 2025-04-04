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
    "2CxNHL7qhz3T2KViSkngLYyWRqWk68qcffgd6u3xsTG3KCzQfnn5pNTV7y1z6zHEE2esy4d7n5BVpF4j8XjMvdmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLnb5VntkXvkvw5cmj4xugoCCAVgQEKNcaqV8h3ZGbHN6QUE8QZ3QB4JMUxXLvsJVkwkcHKHPRw2QLRPJEi7PXE",
  "key1": "4nL78CjWGzuFvM65RceFKQMmakuryCe5Q7Yup6J4tWhCYYyHjN9USqnD9tB522H3jVyzyitiu8pmUCZy93bf4oXy",
  "key2": "RdjozgKU6BLJh5TzjLtgxRGK1gnSEasS7LqMa9ZZ2Wv1ckqtquvkiiWnQVBo6tGxMQEoRLsB2CRhAcbuMTdiKWh",
  "key3": "4y3V4nN42bf62DTYAQBZiYDHWcuiMXE92amM2dqrmtDpmU3ZfDYxiLSDhWACpRoKczVvX4KYftFFsCp46jXrugiu",
  "key4": "3L4EFK8TWsFUXksahMq2kxBhrDwroC9c2X7yDdwf2DDxD9h58TY1Q25bexbrviRDTdxVUMGdjpyYztMmHTKYHwnb",
  "key5": "2kWbAooHuS7qftYjqskaP9KF8pY7dYxTFJVfxrvqtt5w6P3Meda5RrfqN5JYdf7whD1BWkYgKQcjAUHpYcwsj2pF",
  "key6": "3ux886tdPHrKawVt79CyjJoGT65TuCEvmP7C9AqjGgXHWcrhzDd275jezrSyhA47FCk8bANydyWKQU5BPxCANx2D",
  "key7": "UF6hNNNeyTB9LbXsrirgcScVj2vNv5Ub9aHXemDQNYaePbYFHYJxYPHmEqNCVZA1f35tV5v28H7sSsfj7jeSWga",
  "key8": "4j1NBy6UD6hppbSgbXnaJKh1vFn9Qsk6J5Pt1WNPswEwEjvZ6EmSpqjebV8moJAMUcybSG4ggbEfGc3yA4Ehzx8w",
  "key9": "4tXmWR6vJBYFLyXFh5151G1Y4U2FGvPqBs1mzA8u5GoUTKm1ULj9TRoofeA6YCa8FcrXtUohid5KT3FcWADAK6ng",
  "key10": "xjq4hf3SxRX32BaqyDdfsH5tFxmbzwnsfViQizWNYohdVvkcPJhHqMg54A4B7hkWWoYJ8exPPf9ZpvF2m3jbWzw",
  "key11": "5NCx93Ny3C8tDX8pDXNdW5U5FU5p6XQkr1HpBsQgD4b1jCSc8hF7UHSXqbiyxcMeeW9ecrD4Z13gFjUucLWJvE7p",
  "key12": "4LjW7pUwq7gX529MF2K4VgB66iQ5SKouGiViGwXV6GQLJLPTBKgBxmyPNr6jxcS1xoryVpu2eun2wRaQ6zx57kuU",
  "key13": "2b4coDd7QPM8ZVisZRGKdkK9xAgus4EAimtv7x4dNT5FMwnhWsMqEEbtCnWYqYcMdWjvh9bruVM1wDnUdVQZx8pz",
  "key14": "Fg9NSAS2mfapXCgjcc5kRnjQpQgzeJBj2DYBM7SHnTAszq5tPvSs2sBPEfiQQvnotsSBHctnS4Z5c1o2gQcPLgH",
  "key15": "3YMnXPpQrtm6x93Eddj7oDRD8SJRqjQJs8FPKSy7YNhdEWUwMNwrpkFvqcCkZ6CNwYDqYuLUigqMLDrdR4FiSRGB",
  "key16": "2X8xAQTudq9eAnnMPJByCKYFneZoF3TEppk7ttjKCvYuw3ctNDMU6GKdrCo2icKwbHrPTHiFmsiQ5ZjbgAirdmau",
  "key17": "3Rm3dK5gBuqQUvwHNcQZGhs7Qzh8vCLWFZfTcEu8iXezMYfbzFuPuqqMHKeRXPnMsBh11egG8TYdq1MvMtN1GvGK",
  "key18": "ZyVWst26yfFFf9K5e2j1kUduLDi1AWf1qVpyfYk9Q7hJq65NrQmuBV1q7zrgCHziyV2eL3SkNX1ui6TF6GxhhEG",
  "key19": "6fF9smdyU9PfhpE4vMdte1RTBBQntdn3yfUX4Y4ToLgMpM3vhUd5HXwQMK8DbCZiaqYixZxuuwcLWuFPhVmKaNh",
  "key20": "28JdNsEyXAoTrYm5Es2iuTaGrnW75Cyq8dAmSN1oQeKEcg95deEfLyDzdDfEYjoe28JtLZWqzw79LNo9fbK7bTts",
  "key21": "2KXi6zhCBC5xWfyY8Y9ud8vJ6zyUeS5wEDaN8iAYfa91QPJcY7gkJ3PXA3uTFZPT6fARMCZ4dBKAyLRTRqKLBhNv",
  "key22": "2wMaZvhdiNbA4fABPwj8LEnduzgE6K1o3VEGq85SA6ssswPVHEVqQXxhJ9g2Tq1SyKWTvTZzbQSwiyuP27aRHaLJ",
  "key23": "3tfSaZy1QLdPWcEhHmtMNCADF885hUHfsc4vEeR7aJ58dq11CKiJ8dAVJiaQLnN5oMWfsyLGmbajejTJQ3t5embL",
  "key24": "4VHbhyneinBXvrdkDoKBGWtXLCeVaQCxSbBY5GSJ2W5iZbxty43MsdqiRJRTxj5zxJZgWNDpbEQL5jPzFbidPFYi",
  "key25": "32LerCwrzvdQLMQ1hsaRG532GQRHAAJwyomyvqCmUqkP7Bb3usXQk4NP8VK297K6JfRRPJ2AjgC5wsgCKi3TYQS6",
  "key26": "3CPCKKgWMhxEYXCqxZLgCbDfbD8WRS4MXMTpJL4LBCPpuhao5WC2sBBPR6tSwCskerDNqoX1xeJGQC7uLiGjuP77",
  "key27": "2kGgkRFysBfdn7d8xAts9Pn4N2WPmDLWci28pZiyrHaX7TyLJXXwEUBxWdEcZLYiEZZxca4pHB4B9zYGE9YrjA5G",
  "key28": "57r1Gw1hotJtn2VT8cELfzY1PYDc1GbessAQs2xCXvqGaEYBjkVsSSpvQCFUPbTpwpWB1ibUzCmJxhTr7km1fDk6",
  "key29": "28vYnpeELo9dKFUCFHTaPUcT4bDR4rRb5GrzoHsL2NqjsyWqzMpBUbseZs8cy2o6juyJF3qLsqTzYumqgNH5M4Rv",
  "key30": "2D2GqrRxwJu15mLiS4LkCDuKiHGKkb4X3dgieFE3JfgvbJU8tePTerVmKfzwKetWr22L3MJV4pjrV6YzHCKZ5WoM",
  "key31": "HDvEVmxjuUPBvmc7bReb4hB3nLftCG4eUVbK5jSi75wiu4c3LkrTgoJA2WRHTwHpuELtaBbjKm23CAn81QsyXis",
  "key32": "546pTGv6ihJ2rsqvBB4hVFBgCb2PkHzkLUEeqr8zNWC47s6o7nTEqjoGPpsYpPVUbiq2zZCmU8EQExzM6dUzjdES",
  "key33": "58USeMbV2je479vRfbZJYbt1pmLmXm3GBwwZxstmrBoWA9pg7RyMVzUKSvYr2FFaHehX9dga1K8MT7MfHp9L4gF3",
  "key34": "2uhXSMXRbYYEr2hPTjeWVKhC7F4CtSDYj1egpuZeVs4ejk3BxztufMVjqYMJcoFCyEBewXiGk6PRYkt3cfxZnBEA",
  "key35": "2Ytm665RWPXWkjzw2QMRUeC2TKFwZEidhjtJEQ2WyMD9m6PDqr69hjwbvKksA56CvWNuxUHotDKArctpdukqZFFy",
  "key36": "3ycQYx7sv8Jaw2NVkJ67hnoiFHvbFGW7ure5kdumvJSF9B1NNvBkzrzyd3u4hyWMgNnnQZcP2iQSdC2VWsMYMpby",
  "key37": "4kVVqD3HW6NDpzgDm8xdh14UqCEG6gc1AGF4VH7g1DqRkGSncDbQt9j1pWRC64BiSYo1qWeFaNqCpHxfm9qJjY4E",
  "key38": "5Zrc79kUMFZ1CY6zgGoqFa1ViaC6tdpM5w1DQMogtfWqmULUXku7ojBFV6ZbdVK4tSQ4veSv8jJb7PtwyRaumqxo",
  "key39": "4hWuMrNsM6Dxx8cMWgKQcYD7KwWhmUNRJCXWnt9VznSUgoXENBtDTMhiE2ta7YkyGQ2RqGKbgQwGFcNF9T94vszc",
  "key40": "2J1tvvhcvCdcqR2ECDFDJo2BB5PPzVvhVgSb21yqEjaqMJFUWVK1opnZgFmuoNKAtqnzKhQ15fyaHrycDpBHSbSC",
  "key41": "3XWJY6je1cR8EpYWyKFgkrqEB2MhjBS3cEPQcfQc8yLwfEMWTxZpDchKHCYdfMYWZ3bSHBKEAzG5NgWHgvr9MPZE",
  "key42": "2Nkeqd7qiDNcewQfsVDvB3gQzuhyHtxydEuoKHc8B4wzEATyddDomMRt9ySs7PGBXny6H1HFYVy7jgFSVGfygN1V",
  "key43": "4cE2GaDUGo6oGjpcd5T4wz94B31nc5JSaAKAFWopcqTNYnQKadyXLBZLKCth29p61iCyF1pzfiWj88LYA3B1uiA8",
  "key44": "4jNAbSyCUSVSEz53fn4o3qy9X6n6wXVYLCSFsJdqAKhEwNUshMy9DvHrc9PLGxtAY6nXKgA8HsGeUTKy2GdGpg4E",
  "key45": "2uRvCL8mpSFraGeT8YUiBHCdcz7tYu3y2oQBL6NLBVnaA5qiWVV4XcrSQQZtN28eYixcHynT4USpeg8VQA81RCHF"
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
