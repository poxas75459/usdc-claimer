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
    "41dCmqMkGY6c1XCL2zqGykKUMUd1Sun78YEReNhwN4SX6gjpDGp5DPF5vRY6PXkMxmj2zKhXafoAKm78oKKHnzMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38E1KYXWpDPrGgAsSMSGJWsgeYf16MhBshT34c7wkF1RQ2qoxpFzLMra8aLW7oHFyzjmfrigXM15kDD7N14mfXuR",
  "key1": "2K2czDRdDYZ3ADyu7Czcx2CF1Q4FrZsJ9E2VhaXCPe1ycUkb7yApeUtqsEYVZeYaJMUTi5SmWwZJLCQxuNcEt2sp",
  "key2": "4y8hNXb9g9r154FuJtUaaf3jnxdGNec3hYZzPbx8Btbjn1rxesERxVNz99LPiTBSoDn5eions7rCbzwgRMDiKxhy",
  "key3": "3XzxJJ1SqctmcMJNQZ5ReASYcpf5Qmr7L528PDo7ZbrHWH4s3AeAENPEuk9wwY85yPb7tqfTg6rJkB2vGkqaCgCJ",
  "key4": "2YR9VcquPZ9vzXMT15pTRrEsQpSHpowwQxVh69u1orGpkwWt3FMd4RnboK4pxbatUyxMCerv5PKHYofoEDCBFKCG",
  "key5": "2Hnd6KDTBd2KQTWMjzt5jGvijyc9UojvLKcyX38JzxgXAnV3u8z52Vnc9oegfnmvzruRxKwCKby7LWPfTKvMcdnW",
  "key6": "64H8TtCQr1R8YCexLPtC8aP1khcb1s32L7GEgk1kWrELkk5zm4PrhGkGCsMjQAMB5nHskHhs4K9W7i1Y8YTVbPeV",
  "key7": "33sqHgqBqtYpds9U7CTJi189sX8sYNao2ntRWKgBWraXf6v9bYAv1Di7Fh6Ku6LYzGcThovnPxziR7ChTx3ogFk9",
  "key8": "574WQse4YQrxFptC3QCYjhgTbeLe3aRsL6ueeg5bNgDih25fSLEAqm2ajJR9ywxNVq8zo4B9M5FouLTcb8d31yWh",
  "key9": "wipkLzFb3VqWsevzQZmahFuXutJCGqzhTTURVSHhq1iE9sHKBtjT8BZc1eMho8HBw8vKMchxr8n9LKR3xUD4GH1",
  "key10": "3rGMgR2bKBYjN9mzCHYjUNVozze2Xm4ZS64GjAX1ygsgVS7AjS7YSmNv6VkkRZSqSf8s688PwSBTdvbu1rZW66wq",
  "key11": "3KR3t6gnaRbwgEAURNU9nb1Xi2e8JAtFcAf7qqvY1cq8USFbkaZ2UeRypUx3s2VyDKrXvJ6QuTmbJMogyJamixNy",
  "key12": "jVncK99zCch7iZwHL32pm7RbEUWPfyrXGqHWAkctRgZC7ZScR6waENBpX1TskHvBUjPAbedjSWGDFEtT8AFiz2G",
  "key13": "4mQh4y6Qbzz7trWM1PSZkpt6A4pJsxXhNcQ5BVhvWk37Akew3nZgHLTbHFaiznVR7b1evu4opp6d6jRvA5ZXDtT9",
  "key14": "BFNsZpgbt5c1mHsrox1ehDPhnPagZsaQhEgTSSWsx4cBDJnx6JtguBcCQ1wNk8BhjZsDkNNsN9qdzz8fg44DhGn",
  "key15": "4cmYrWdfxXKSLfYoS9YwZb5ZQQZo4YCU7YVdqscE9QXAagneo4fTTisY1NYSfNc64VtCCvFXESNdraSxK95bUc3T",
  "key16": "28UDKG6zcvNTTmZgRhmrJCQAG7Yzs4HZurPF4oosmR3Mu512rXVDkkLdgJ58oLuYrwsLwzrbMNcU9dJTH4eyAxCY",
  "key17": "3Pxd3qXsG1TSy4Yk8NrHyNnWq9rLqUvHt8ivj9ccKXqtJ84BkBTKFSqHPhWf4ziCNxS5e3WXfHfvodzL9Gs8VGmE",
  "key18": "4q7Ww3GLosUNGpJUWeUbYayqCiVwy4qAREtj2gfJBH61CfV8xqWutWwJaGAC9mcJMryCpbYaERuzb38NEjf81j7D",
  "key19": "31ZKjq2n13fYxCyB2tJUm7A518n6yRBMhxpAus1Z5oeudcFSa2be4grMVUATyDBJRASewbX5SbiNRtk2rnC6a2C2",
  "key20": "28jrsBsRo6bjjP7MmhsHw2peGqiH82oejU7U3ZnQwLXtqKwgMiGjUpCsuyXPsbxeKxAdwFrCmAjoARtK8kMfTg6b",
  "key21": "dE7z4xq1P1mgbjX5PJ7dAqt7wnNgLSmiQ86ayAVBGeBeXHf8Sz1dgSVck3AK2ANmXSGoTJwcQdVaJ9EryuLwejx",
  "key22": "3bfCKmD1StxcP1YhFZrQY4vFi7Remdo3tPhJ6W3g1np8QcZNKRu7zKKHwA6MZJvgFJPb1i5at4qbbSkr88heT8Fo",
  "key23": "yM4ENpAR1UYFRsAzNtWpeX9TQ1vJBzEePdRuuqf5WxScTvx9csMz4fgSRRf1AKW5banN3ofUywzMjCDiW2di7rv",
  "key24": "3F5ZgS4ps4gSZczvvfsQstFn3j7zdgWDjKagZfv2Snu4qc5TyzmoWoM9je4A5ko5wxdwpgi92qSmpgFCwsqudrXf",
  "key25": "4y3gH5CGCiYUQYX4P94nS8fKEXBa7NqGRQWZvVUtNh5zNuwnqNm8KRK3yPBrr5fgBFYbEtztCatuc6DKNR5pFwBY",
  "key26": "XvduY8rujFxwLNckq1srdGZKzaFjksrrRnhL7MdxATYvUProZBs3LL2oKjMZQzR4cheCxroQdgCfiLVnoFkq2Mp",
  "key27": "53xdii31dzkqtPurxm9UYiQGrFo1FvndrJeJQuavx5V2U27PPTU8BxA3iqLuL6tv8eo9dGkPRUx6fsQ1TfrXjw3d",
  "key28": "5Aie7x38rZASEY8xiVEpyAvoBh6icG5yQpY2menteX9B4mffdDZ9y4GU3T3eN3AgVBbS3Z3ZBWdwagFQCp7BrJVF",
  "key29": "2BCmVesxpHRriBZ1AzeQeJL5aKd5HWokeHdMKz3bG4WshLmS3jK1rJiKUParfYncrKHyZ31WQ8LoxjcV2959zbCF",
  "key30": "4HBFhjBTPSqSsR9wKWAcy3KchH75JEmBp26UZkcBGRau6pS5tnu5AGuVkecQdcLAJFAkdSyZp4aVgns6ER4T3rt6",
  "key31": "2YLUkJ9XmakKVFc1BXxr7X6Atd3qHHUSyPBtUNEMeG8HbsKEF9zz3k1WgTBsSdyzwtuLCRB6R1WS9m9BhXqdESb4",
  "key32": "2yqYLJjoc957yKsY8FBmgmCWqkwag6RZz7PxjqfLwZWVVFsCzv88iFFMTd8eQamwRM5oYTqb41xaXPJyFACNgmUA",
  "key33": "aVs68AYXp9jcpdzxrWawjM2AYhSLaVVMD1e3US2Rh1n6gPWPi2rhMLeqRbzYBxu9upULp4q6j1qTVq3aUg4bZKq",
  "key34": "3cQaoN6qK2bQRvoHcMFnm6e9H9z7Loj1Q6CAXKRPJvxML12X4NYkCtbknY1T5b6DJFHi98PqubEDvrvCvwyMZF1d",
  "key35": "4CAxEswXve1AKZsFk4bRF3MpJxxjnSY3dW7TX2gCn8ebhb3T2pdMSUBXHKVfwALjvReMxu38PBKMfMm2Yh94VxdK",
  "key36": "yRcVyAVjr1W7kmB5NJru2tYJqZw2eCzNA74MtLdUHUVPqkCv7zmMxVGTSdX5KUzB3cv4tAoNs6s7bpJEKd9xkmD",
  "key37": "3kdQtkY4DDQrChxt4naqgH13FQtSjX7xgQfpBt2SLDJ6Zus7Xad2NcdcmocrEn4MXesXZ7aq9TBKyZcRJDEC5ASx",
  "key38": "5u54kWSdfzVboJUHj7CFX2XRWHzXqaksdKKmAn7mUfGW9KPBvwdZzADviiFFMBY522g1CZYkcKtkEmwyGhLaAhkR",
  "key39": "3nHJtYnE4dw7Dw6hRbftSb6FSYcb98LQjTzFsKw6wtmbDEAohLohKw9YqmoRgANQEAryLu6sN1Waf2tViKdHP3ou",
  "key40": "2PciuerT6jtq8PiJwnHyDSx4iVxs6UP6bWV1nTdThgbPUrqG8MBBzAsDTXzhJCYccGAfAXnnsFb3QTbDvF5JLg2b",
  "key41": "47WTCM77Cnvq1feEgxghaYwUxmCzLZ9iFhWN6sxCtUc6YJSHUPW2M2cEe2dWNDeb6AqeK635cLXg5YD6KpfaPfjW",
  "key42": "3GZkrpxeyG2WboEMoqnyuZiznEfb1MMWyN42bxPBq4GBqoXCDK6AJHhJJhML5fkxt3uMuYhmRfZTVXQHsnFLMhRW",
  "key43": "5982UVgJVYoatLVw4EY6RCXGZSKJdsUwP44pJqzJfQRGoJNZ1pB2zuLL92op5W5mWL2uHvNZUM3cFp28LusDGgCu",
  "key44": "3fP6URoXcZp1dnSajR3b9co4uDAsr3i2P42f2de6oD2uBHdF9bkrDEwtnWNj1R6huMfGCMfx5krioN1FBSj6SB5a",
  "key45": "2f6KThDMtWuKAhmRtKcdFAARX5mz1FaueRQsB9kbsWsq9JJGjr32C2Y2EA4jYwAboMEbxoWVLX1pggTzkQdwC6qZ",
  "key46": "2b6zjciXNSwiXXcsvVAow2sSFAqRpkybPw45zwjbnkRxiVhTyUMGuS4tVkYAuPvAHxw5xKBTR7ybqY3v3ZwjhMjM"
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
