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
    "2RJAmFpQ1FwjfMPmnarFDyp5oXjDkuiye6muAfUwrLpAneRygKGziH8WJK4tQkYRadPtsqDLbPdtZDHVUeqA3fky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngWtYUn64PHieecumHEB3tWa9eBMRQcUqZs1mpYYiB5Wq6X3g6dYWvDJTtmYeRwCf1W8T1Ux5nnKFdy6wZxbc88",
  "key1": "36YfDfwZjDccHXLm79JVBtN1Ej5657AM399ZQmCa4V2WLCrtkVEwJ852u4isU3XKojC31H3ceEYyJUzmWgLcCYtV",
  "key2": "rEeKuuGqXAq8eMbFsQcLw7jt8J3YT7CHFsjnN4DnYGFEDte1oXLgZ3u77wqz4kU2XDNNu112s8mSn7dooSe9j5m",
  "key3": "2EmZoerGM9hQueWCWxBEzXgK3pg7V9tqbaMv1F7CYEhMKUbVR5JpHPgvkNazAFH73qzBredRQz9gMHPAoffve5JN",
  "key4": "4a7ChCmGmas84nmArgszUwFtrXkpdZrwqTCNbRzRbBykrej8pq9BXWDZRwh4jis7XiUmvGYHfmznMdQt74j5PL5M",
  "key5": "rG8RwYWEQVu4C7WxRtwWzGpcN1QHh2ksy4SbqF7SqLKVFVAoDSsVbaStF5vnokEbdtMSmmFnfa7SEyt6stinghV",
  "key6": "2ZW9dRZse4L68rKfyC2aWBKbJ3nAbqYVRwuTPpQRU5beWsQpTPVUrq1ZHHJTvL44EYTWsg7Nqn4HE7BbLkb7UJ1n",
  "key7": "4iXJk9uotn7bsCTKraycXxCZpmFJ8spnv1gqWmrVUL3ELmB9HH32WktmZgchHBRznRHKAGUkw9HuUzhoy6KX9e6c",
  "key8": "2ct4VUcfYacCULtDTMgyFFhCAHPou26EHyMYPq7mrbZ2DkeCyw2nSeuCZeeSCzzYZBUNzheJsWZhjqYMvVEimhGT",
  "key9": "yMP9udecguLYzT9Mt8khLL2Ex1NHspiB56bPC8Zry7U96toxuNz8VrTaCZxzfYpktdzQpBRExq6vqjVX51XgayL",
  "key10": "26Edq2xLQt8TXPEnYsBAwcoQZYP8v9nJrz9fPSiwicrVAcWER4H94g5fgqyUMtXNKNojQ95uZeZ4xUJjZVQCaY7n",
  "key11": "35JW9pHWeVHv7k8kdX3xBcFpxkfUQp7R27FatAwJ4nADtbngCaeMYpJGLN5DYQY5sH6gzyxC1bj3RFNbeaioARSN",
  "key12": "3TzeaXLuLeWXea8rx2c5Zf3T6SHwcVNybV2TKaUnCWjXxE5fVRJ8WYsac3Q8MuDEAVSVGDaBGK8C8ru9etC1u9HE",
  "key13": "5f95p67WXm9neW8ZZW59ttQFkvP6sPqhkWXMYecg466rZcQcCYCCxGEXAtsMssUkTJUPxkwYhkESvPfrYo49c1pX",
  "key14": "5dydNxDX7i2rmXSexgfqXrVxkYiaUParnr6WaUzjWugz6q73Fc9HaJQwMG7dqAk4t8WJMutuymRzrbZoDu1isZv3",
  "key15": "3MQ9hHGEhV4xx71hz71jnrA9viegp5xGM7VGwhW822XxyyBba62J5eA9H6riDstJMTjbuF3yK59zfqbXVqQELUv4",
  "key16": "5zLjqymAfXjTRG5wUkeFC1qGMnpLVvcgcQNq6z5NgSfUYDZMYM7EJTtRBkTYDQ761e4H1aeN7NzBGxyrfWRVuCB6",
  "key17": "3xCZ3BAkhSxcCcmdWVLcPbRnjeoBPRmxHEKTKHSN1FLyXo6374yaLG51BTADfaJXcqRBC3doW6NvbiWsEqmXzK7q",
  "key18": "xcwPYE885CcpRPi8AJGdmuSTdUkXy5s9ZgBv6rDNz9ELyMUgS8EuyipHE5T5VXkKMdGfUVogA75hbdgHhqzASL3",
  "key19": "3STAxk3uWDP77JrPfZRxSgLrbjfdfNvuLpYffpiuuMitj3fABjpP5BzAf1NywaDpNHTa7F9qZKMjyezg7DX5UpZH",
  "key20": "4hLXWfdmVq4Wy58XTJB4gTBoWPNirEJTx8yf5ZJDBVyKdQAEXneaZXK51Yu22GrUcVZfxz1tav5JXDDs13K9vEXR",
  "key21": "3H162pYPaR2ChaJqvy6RPLpMskWKt7WBwM3MgAHFZHETGMs5Cz6NU31eWaA9sTQivLoEj6NHi6i7YgjbrNc4uDfr",
  "key22": "5rKmSMSVg4WnckEssawQJFCstiNgjsLM8kykSaYGWthekh34XrgBRE86vF7QWdCs7x9fDmBUq6VNzUADqMSWwZrW",
  "key23": "3Ge1qgGPzFEJpNCHr9EKX5oeJYtn3eHkxu5ZW4QXXBp54fd6BV25ufvxtApYfgnmFdfW38ipHfa3CCfpNYiLf8Fw",
  "key24": "4aDNDvGhEFNbQ46xHL2zHVmGkPPvyt6qmVCjQ86xvgWqj2Sp5Ku3DKS2Uggdzij9Fn2AbwN9m9hFgXi5QYussVSN",
  "key25": "2SMBgTtVPPidUHimfYS2ToSy1xSCRLmWQ4gEfXr9ZaQEGkSnqTLkJmgTruxg6zVNAq314AtGKkBaoaCLbc81aWv2",
  "key26": "4jyaWXvxvoYRTwfdyEdy6X13fVTSHBA9UwT8X4auRfnMFdR9JpmiWEK8g9wA4C3cyT2uKR2Q1twXrmLBeE1yL25i",
  "key27": "4qwucSnsuytt9sF8HeY1esNoGbDgFdKrMigCZ7qseS3ki7DvawB9TiNMEpdBSMj3ke9kmexn2seFxobeBQ2wgtbA",
  "key28": "KyJQnN4uF2zNh1Y6xkUXHzLWHdoyrv3C8Vt1igqqHyNqqe8FtaQvkGeM7pozSFwPqfqeooiAfp3HuLA4PHEhxYp",
  "key29": "23dGgPedAw1zuP6jCV5zBdWdyHFoTdihCtmmoe2Qv5ntSJ6gkHvtpvNxyH7VsmCwN53Tujj9auJ2EXK5pEQeU4Ys",
  "key30": "47zYbUcYZfJekCiTaYV3XzLKFdHp6yns4eDh9J54zFMGBqujHbmSt9v8EB3Myeb5Wj774QJgiLYpoCskpQmgjfnx",
  "key31": "gLCstGTe6YeJqgYGZke55emiZVmgtYzSvWt593w6T85JbcmkGc721u1DbNFQ3RjR1LA2t81DPdYtBU9U8YAMGnq",
  "key32": "4TeuAnYcaBinqdRCFkpSp9mX3snWgjTg9iphz7BDL81AWfqjrTdY32KjKC6kp1ihXgCy8U1YWxrx3tcEfaUNVMzX",
  "key33": "4YayTy3y6fQoedzz7171QHaJn1qhNrVq2Z7gSoBUzkF4UtiCNFUNwT7ov9AH5CjWDMauxgPyaL97Z8hFPdr9gTRn",
  "key34": "3o1QLVGiRDf4jo5EVAgK34GyoHzDTeqFArQqXKAK5ppyBtsK1MLTc9KinHNQrpspom9bmxcvvof8medsxNea9BHY",
  "key35": "21fE2HsfuNWWa5sEi1DgNPgsY78QoRmxmVpcMRpCJunLaYP3bSf4NmkyTsjhs9GvBAmuzZwLMR6Pc7N8xihbgaUW",
  "key36": "2qktnPtbEoVYmTsipd5kfhCPGymBeHaxtFmyNNpej3NS7kJm2y5if6BtCiTQku8x38GvCEMQrcZTjKYDNxEjfhYh",
  "key37": "5vMrQa27fyyDBEQFJgTvoYokAi6dTUi8jPLKSaEcpyt45f7eYg1TnBPybcEXH97y42GM1C7eNTWXDdfJJ9xpNBVJ",
  "key38": "48fYkqHg2BZc2rfmBTcGpNq2UtTtSFhC6Uwh8NpTG2bVi1HL7N3NUbpcLk6fLUYXo3QguxRDuZiAWnuLto57AgFG",
  "key39": "4pEzDrKj4oHci1axiSeTZ4SmmLnaS2KkyEB9FkYNWkVNRBGEm9nfsbWyFFmVm4L4at7mJNkbqk7ghHFTRkuKX1ZM",
  "key40": "3WB5pKRuMvXrknoP8ASajjq1KmoMBmaEQcNzoJLXmcPCMbGaFS5c4Jmb8zZJDcKb2TJs3sBd7WKyyxnBYCndo9D3",
  "key41": "mKYVVgHyyMubbuVgjBqJ2xb4bYv135LiizsfE1Y16hPSQh42JePodxpXcnbmbZhMFUc5DgZDTrVgYU98pVEAhkr",
  "key42": "5FfBsViDuxHXEg3C6SPwaTESHuQnN9UhD81h24iNNUHyVU9M6EYrGqHyr62CE7AFzxQBaBpVTEwBkX5kuRLCJdgx",
  "key43": "3kcfcb98b58RQL92CdDgJQG7C2pmAs6BxQAhqhHSc7MiFDNL2gLAwh5wfqnn9kGZgxGdtWjq88r1U9huL75nhbZW",
  "key44": "2F7BTHBDBHg4ti8UwoEbCUwLA3ckfaxyWhXsWmRp8MpLgPzMBMenhXYMN6qixDnogp82B9XkK7Pm2kCDX1Yy4EUC",
  "key45": "4g5rrbv2GHmYEuBvjRu4XxFiKSnfbhRDCfPB4mjXNRd8uiUTRVQftYDamwwpTGPqXagJjiXciEFPzjfuavzRso6C",
  "key46": "5Jp5XUZxQ2pRjM4rsHZCzfawBEsfmM9X17UVmejhEMvPusmaE3zERNhfPSXaQcoe9HwCfLSPFJoqdU4s9w3d9VpC",
  "key47": "u13pheQxY6jp3QcS57ayr9kMHpAvmbZbQXf5aMKe6C12yifcxnXFgZWSsS3kDmD5L9utWLicZHNy77Hz6rbNZa5",
  "key48": "CRviXS39oJpL4ebSZU6r4rz7sNDcDADKYjuAgUgPg8S4b6pYj2Aamyd26Z7WdHFc1xC7wwi1pTgc1H8sYgVaMkH",
  "key49": "4CYQACy3sq6EwrKSeoypDaicpnBgMmgTWLxDpTPrBSyDifszKYFKRKuajomPACSnNaRsCZXEGoRekNqwGtnbFAW8"
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
