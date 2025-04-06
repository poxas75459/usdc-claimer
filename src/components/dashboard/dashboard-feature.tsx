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
    "4PzLauwHSxFmoLNiRoQwAtL11VpMjqXExanxNrjKGXs3fG1wjaZQJ1SwhDbko3nstek9Po975n556W2uX99gieuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgpkcZDqGhTXCcSj7zbZJTSQd3uNdSaWgZ8coaZWq2PtgUPBPqTGfZKXAyh3RHGoTvnMRFdJXBre5mDpGMHZAY8",
  "key1": "2p1T2TSuh7iYUNH9MKAKHUKZv94LJErQvXFzH3wyEKQaiezYQraSH2qe7sRz9PuZLRV2PND9Cw7vE3p3dUwQfZSD",
  "key2": "5uUEtXuCiByShmJsKPet7UgJxoP7JvAp6AcmgEpuPWz9kMEapBD5PvSyNbnYkF93Poc8j7uToVUDNVxqCfZo5wHH",
  "key3": "4WCuAzrasUEdzJ33pChKP6KyZvGgeFQkicbTgqPDJPmtYwvkkvZG9K15WjdbaHEt9p3sU4TocsZZEBoJU7jXTXRc",
  "key4": "4FScdpoNhZBZTtwcL1GCEWQVCcJQaXWnwfCykr1KcGAw7WzjuxhzZfwfqtbQeY8FwwKMCE5ibdZPwPMsuVQ8pHjh",
  "key5": "2inhQ2frxprwcb3Xmxoct8Gr3J9zxMbz4ZG9XP13BbzVbnjUkdgibvwdmKqQaxqoZhGTP1wBqBqS4PceapAiJqEM",
  "key6": "2kqQ8dwZgxQtjzFkqc12TxU6PjxK2TW8HhM9bhDwNjgHM3XJthHsXLvHaXdbFn3xgSarBDrA9bMXsLkNjkFY5dwC",
  "key7": "2SbgEhQggxLeycgzfKHtdnhDkHe9FNbAV4GJqaCz9g9E5yN15W44nzkFEDoLZbJUw2jCPraC5ybJph1efEWkBABR",
  "key8": "5gGyTVRHSp57BwtqFJbRPtHG4mHLTvoYshuSqHMBYdDz25w4PqXZNxmB33Av7z5ibyDAKWFYFc8zTS2boi9kz2V2",
  "key9": "5Nw84B3Ehopnh6cmgBYG5YEnzjYqsXSd4NrrBFBm6vGAn4ESoPAyLE1pHJcK1Ntp5czP2QUVjB8F2hnGgirJUDV8",
  "key10": "knrDJjWPmM3tXXH33BZ6gZ2mH12J1wN4pJngCELG7zH55Ee5qfSkNyzfFeApwjeGREKonuYY3ycoto8dL5vZGid",
  "key11": "391dxvK5CSqpressC3ftdNZ3aywi9Qnx5UAzqp1YEG4ZpmTpoVCJVA8oxPWe2Y8JAHfp3rCQEYSJ6TyNVzVaWy66",
  "key12": "fycMdeCQLQbet84HMtgBf9um9c6XcfNDVjHSQu3R9MhYZ7a5ZgfFTHoR1EaYAbE8obU7uoEyQLP6vuiKA3rJvDt",
  "key13": "gBkVPn8gQyywnVA48nTf8XfAc1SE19BeEwqcTCqN5opWxxPJutxSePPQRgJhmgM6Kfw1vHCErJgexqZeCuFUnot",
  "key14": "5262iCBWdfvhYy1C2iFz9ZjyZ26k3u2e8bGizyqcqrncuMLGHQzpssaqBxC1yQPV2Kdyit7UsVx66WWDrbvpp3x1",
  "key15": "3f9Yksptoynmfcz9441kb5rVYEvdWHAn9y4zr18RScpKGGWgjLsWnkfY3qyWbkbR6bmvTnH16pbeSbLJ63eEaThG",
  "key16": "61eAvM6GcHbrvTjKRRTypUunL23rABDkGGcvxEFVwwwcbsSDKT1HwSV8qJxZ3czpPBWqNxJAeGD5t5JudDHm1g7t",
  "key17": "2eDZoQQnrYtHdAyxHcgGLT6jBu45So3zkoH9P5baWnNhnCsgQ8gnmjVwu5BxPxMRmqxhko96VAxLacTqE5WGGVqt",
  "key18": "3YvJHmTAXW1jS1apmMtk4YAftcYWratoWnW6dhaFMAofrkYmFWWpVnQyZRsSNDRwMGET5nLAWyTx8Zx9gTHcLfoN",
  "key19": "4N6eJGT7x5pPY7QaidEGWZ92pGGd8Zi2nLatTN94r3r33CrBMUh7Z4PL3JRkiMXAzPRkmh4TobxPyWgx5xxTeJjt",
  "key20": "5AiVJtdiybk53n887xnBxGJFfCrAKpw57GFEprvsmL3E4oTsPavWFn2iu4g644F1JNV1CXwXnGYn22zwbvzLTbxE",
  "key21": "aoyc4PAHfrQBhC5Qwq6Dcrb5CbosPn3yziW55g9jeov2F2MdPtVW3hDMaeYXMzwGFyDh7jK67xhtwk7hV3LwDD9",
  "key22": "2eKNQ7f63urwdU69P2Mzti7dc3QQGBYxhxeSJmSfuzkyXMV4ov5qqJwwLXNcfEpy6UyeufefF6P1ixA1B7E3DpY6",
  "key23": "2S7teBHczVnfsdxL1vLgtJanSCyJz2KTVeCt4TfkZW8v3inSeSkpGZ85vUU2GpG8Q4yyaxfwp1U33g781Wc1NgrA",
  "key24": "2b4QMULAp4mhqyB1bHUcJMZazWoCKMMkpdMLTHeRFU2u7UrN1i7i9EJsuDW3djxuHoNrYM4QwRcTg4zuNWqwCUU9",
  "key25": "4dbdXo1ZgXeWSbxz41voxUQbtwHhMasaSqQFSU5UpHsRsXA8xfobjhqr5vy4HBf3NSoLkWT1w2MktKSxbt5hVo9M",
  "key26": "3duEevBf9ng1VkQDNs8tc5dsSat5aEya41MuMaZNgapiiDKd1b9fUTQKE93GYLQA57nMQZcDaWK8jvPjPjCdby91",
  "key27": "49bjTwuhedC1SCn3qVP9ZraRtGWhFY1CsBq7tHdbKKUAcrrFFksb7U8XyKJ66acoGzmCv3PejHZeCaU83D1LcVkU",
  "key28": "5NAP5dq34UFy2mSoqja7jFR7Nm6wwvBn75SVZqXgbWu4Pho9HcgWTxts95gknFni6k1FtkDPTi2TCdpv17F1YoU3",
  "key29": "4cggBStqJr2TSeyCAtUgUkN5Epow9eqvHSexvz2EU1b8Q55vMKRUJADTnTbKuFoaH4TKQqgWBGQpYnc2shSb1dKA",
  "key30": "keYv7rpR4WdDuprupVyyXpChdwjjFK7KY96z2e5R9eQmUD8ioBvurim8Qwwi43RcZ9MaRxnC8uakgDpP7y4dzrK",
  "key31": "47pbbvDC4pgDmmxV1FUCC8CjM5BmmoqzeKeMwznqT1LbkBKQ7E5FsNY41igqTfc4ksiwqTijqxYD4T2AK3bhoizx",
  "key32": "5JfnmsCcFPtmZt5N1QYBJpzERPW6GR2TuokUyVDpVuLYxJpLrxsxy49fzdC6RHpamoCbqgpmxh8tiyzKJTjfAZtx",
  "key33": "5KgCbB6gEwx8mxenMhWjj3vzVTRUthUpgPFNaWX2NM1hKxy3WTV4nNWg3ampCgFXYhPw3ubkg465hbwDsd1z1DCz",
  "key34": "4ybfVeDmDgY3xfvwKkakrMLaD1oqHgDuZ1fDs7taCLRoyTf97YooPbg9ioUD4yuoePYPe4cWVt4PLsAsi7kietuY",
  "key35": "2dnSXiFGvuRg8Li8xKn9DmRpVsgexmpSzqriHsrUdmnZ4skpE65krU22ApP4GYYzFvU1pUEGZ9UJRfkKnBEDs74q",
  "key36": "5feZQfzyGtg2TTqQKSJ8rWiaZRiz3RUYKRqg3BRHpu2UP9HE7Tzbn5ha5dK8ZuuNJw2k4WTCYnAjxKWQsyGbKCed",
  "key37": "3xqzkoT8Avu9ngi9rznPWabkLt47N55anuHhdtSf32N5a4YJUzyjFpEtr6zK5nyF6aUiieUkuEgYfTuW1PwEnySv",
  "key38": "2HJQDVyschSeCLVr9nXzoV2uHewBM56oFumfwAhYE4MMxtEHSvXxPuYnY6Zkz7ZzYC8N6e5CYyzRaHNe7N61PxgS",
  "key39": "UXvNgHKR9Qh45Ced7TJxt7STankss3TGpH43s3JtDhgeNdJei9wErckrjvJBtMjtwqahrKNaVuS2T7tpA5KVE7v",
  "key40": "jhti3etjUm1YpB28jN12bpWGiQVuK5i3j2UNVH8Y2XJgjvFmgKkQsFH2rCvca8zMdv1JkV6JAwYrEGWiFMQjwyJ",
  "key41": "MZ3CaZjegw1xWQq2ZwjvreB12TmPhRkkWyaeQPJTYdtBEEZrKAfDjZ2ickwo16VSK6mUx9gRfv49Z7o41MPZvno",
  "key42": "5kFVmfyf1ffSXXRJeMwShFU3R5btMvGBKAtADqNo4V1Ubp3hYpjKvtLzdBMdZPaY4B3Snwr4rPjP7wDjp1S3svCy",
  "key43": "2tpQsUc2FoVHQpQgJc1oszeqjtofvNdZWSjjbdNUrWxZgB1YeV7AgNh9kwcdmSvrJJ4aKf1o3sMXg6BmiUfQzqyH"
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
