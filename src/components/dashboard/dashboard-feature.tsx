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
    "2Mk3bcbSGtUdjBs2Vzw1CQ4sQwNgXAaQkX4scboRiZwTCknLSLcLgTEqMzPsnrWhkpVhSJ3W3tjKjvxbau6ttnUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HXnmevVCYzL2HvcnhgjLGWpFBK1u9RoJ1M2SS5sBJMQPKPoF1kNmvJiN2NjKc7pWVhBDzzYA8Yp8mPGb53a48Ap",
  "key1": "2faLZVD1fcJhTHzbSqDq3KRtAXFodKodnHzqppaDeMsJtFASStedMGi15x1mMGUecfHaZ2bU3QNAkWCmw6Xe3X2r",
  "key2": "567xHLzezBNb9QomYrcC96NRjtjQRgKwgN29JCvPPGw7mmVxiFRZSZiZ7UB4vbWiPkZzFdwkv2SuFp9py2ouQy3Y",
  "key3": "kZeqVoEAWwasPZB5DcWEvRZ2yAtxB7ThLSr2b5rbsMrjksHsxUNVaY1BwQsyoj3F6MkiQW3de69SsxDjrJo6672",
  "key4": "5bPTy2qVUEiNprMBHdeobR29nJyq8juYC1xZ8sCTPYmUui1b88UiJvPrVHRdg6TQAMes1uVdRJ7Ri1RZEC4RLEF5",
  "key5": "3UNrSYC5sCPFukbthQbWm9cwhbJzNjUocf4xkkpXsuoZFMBUtvMjYurRyThMjPiPDoL81CyjermEf39jfFAkKd2j",
  "key6": "3ZJQzTp9JHpHKTkBzHtDSfgwz6sEG1qA6DSuF1dNPwwfJRijGv7PJkbmkqDWs4Fz2BM4dNbwAqiPB5bofNUnGRSz",
  "key7": "47VD957oHcKAR9mpcFVK1fY9JVm4d8qpUjbXaS1NevRjLJBESqmHqC4jDdnqgRUGVESRCv8kWErJFLp4Jv3NexCN",
  "key8": "3mTz8gCzsd1NT1uJW1TPVRLbVCuYZ5KRu8P6eYLWxTyB1R3tFUNTsXr6KCc5AtbBR6LV3GhHGJaFWoXNsDHhTZ8S",
  "key9": "26SY2C8SPbiw1U9ZyLsExZPp5pzoUQFXapf4qaDeuVCLGpJ9NuN1ifJ1PPUk86nbpuHG6EvpMNQstFfXbUzG7qVP",
  "key10": "3JoXxRAhNTyjHrvnjuUxRPBS6saaoBgfCjs1WAsVogsQZBPqtkTsWagoWZMFYeRDDp2ZWGYuRqb6g5Zc15vEJ5Yz",
  "key11": "5ernWxeTrN4SdBF1M9eWX7tUxTVURuBv84q5W8dBpC9TRhHpfNGwE48Uxq9amkS1bXihQZRXg3B8iaCHSwbTgiFc",
  "key12": "3u4DATWREnvJUrU1PqVKPqriZwcXqWomcpY42Vzn191BAcy1VQVT3eMvYXL9DQ5bsDLETK9kNhrD52BjMXcaBkz4",
  "key13": "4oweiret8RSLQQkGKNRmckzNDjaYMWYqY8VBoXyfNHiaPhrraxhqQ69jE3SyLFrmvPW65uiJRwiVe1AP38VepKLg",
  "key14": "64X1nkZsUE5bYH1pkGYFRXBTqPU9XXS6tvRN6mLdLF86i1NakeBJiho5uVqxMjVfTK2nBsTHkQKntdMCbXTN1zWB",
  "key15": "Yz3QPvXzDf5wcA8ycnQ39Hav2hNimQjTJivvUNA6nVrG3AAiaDSLBQYLKxGdV82oSnbSrLwhQ1UaVj7FGCgPvPt",
  "key16": "36tgCprAzxswsYbRTP4hrS9et3K8R1Y5QnaCmqqDc7TXi9KEZenBDG9MXduFzjhjdxRqGVPvxA2rhG6d1b6LdRib",
  "key17": "5CvysDryRnjKa3VEVPPfq7bEDo5aCfzvD1dUi2uLi3tXgz7m9Qf3FwzirxY3enSRX9Ab9WvGgbkFcGE4fbkY5vG3",
  "key18": "5d4VF8LLdt8baCZ1XmHtEs1gP6m2R2SLUkzWMKQw4HpBo9c5rCZo9JHvPaFy7NFJc6aGY1UXZxgM55sViFc4x1y8",
  "key19": "3k15BdkptgCUzwm2gazPV5yH4miGkx3rZLVFtAzRtPAA928CAv5E5WsYrH46hUamiAYenBRoJ89QbtwBR5EAA2ft",
  "key20": "254ieK11DCDaF4XrpXjYvXz7amm1XaNF3XsYiKv2XGWiMMt74KUY9LoYsdhcSRhu1A2NFqMUacPkRv7f9a4o34Jr",
  "key21": "pnob78k1N7vKSyrSoAK6zrxco6ahSe8QY6GugRCEdrx8TdGFhBMavvWuZw36PAMHB6mYS7urfka2YpyyA3cKS9P",
  "key22": "44HPooK6G4qeTVkfyHqdE42B4L9gzphZNc8hLVWdNPQEVR1b71hX2x6f1dwdAvppkyDXFib2Wshjckzdem8aagaQ",
  "key23": "EoKv3pAV1o8tTkdyZMhmZmbEq3fSxQN29iHgZSjpZbUS7c6Kpitb5kpGevF2ioD5BQnpU8fc1mTNEBCqKjRyMMe",
  "key24": "3s3zqvfDXbu9z8VM14w62auAAafGMAUKntBGyDAD6UCxUSx71dyw9x5fmW1a6ZUiuqJ4A5nFmdjBMMPru2LJHN49",
  "key25": "2T5L9pxvg29NGK79e6gaCzJUTi9q6ZgrDUyJKyfRQkdUE2rKmAVFzku2vvEwdFAmQQCFjV519946rFBx1mE62VWv",
  "key26": "K3X6an1ekRE5ReB4w3UszoYCdrmr8GCyC8y5fGaT3yxpqZFkdbu4357SoTh4Z7ZHNL7B9wHBmZTUhnRqiG2Xz53",
  "key27": "2ZsQXWJS9o3Z94y6FQFqq8KVAGj6QEVpBG4v2jpsnoxYRJKomPhZmxzdRWj2hTYFEwZxUuzFFFm5sGytHeUGwp7m",
  "key28": "4YUymFtQuRWW988FquACEtYeKaL9Af55Lx5K6TJPMdLimY4eKu7YASn4RgYYvyHTSmUps9yGMePQ6t6gTJ8VVxbL",
  "key29": "3WEbXKhrMFfZqtEofRwCkUkbE8SUFyKem3NdDbrF26a4zJPdL4p8sLDBQhJeLVu1YCEiFVz7gQLMEbGWHTyHdDMy",
  "key30": "4pLh3rdVvtvAf2x4s52FYfPwePomy3QQn77ZX4Y6AMkgZt6e9isr2kbwUWUv8foFzFgZ9vaV1VzT8AD7qz5WcXE3",
  "key31": "3bSHAFLsAapgWGs9eSdDRd5mQtGAhyHkCtEyNbAsxZr2zzdqM3wkb6vUi2GHDgCpSxTp37gYppcv13Tnw2b1Kvy4",
  "key32": "SS9NjTTCEyajpEKnLNMMSupWRy4x8zUNynZEgMB2MRxVYeQjeR64nMGByNGFvtrbGFKRJdFMvX4wfe5DK88ML4v",
  "key33": "3fsZ4gRpsNHe9SN13mBiAwssDNVuUG6dxF2BPuT9hz6Vm7xmpaRATGokRgb9atgYz22aLa8sxvqXU8KpTBLjV72S",
  "key34": "24jn9wYxANCE2UeEHg7gr4yES2Y19cxhEDjpewF7jF8zDLGA963iLedUZYX923hFDPYBepWYdkbWUAmABqzMMAs3",
  "key35": "3VgNHWqsBuZ7tkyiFZPnNuVr4oJqEdUw7kWbXvEMVYfD4qWxrYuAJRAX4qR8etsG6Kf9i16LLtD4ZS9pEtDYj834",
  "key36": "3seEuuM8AMS2LDUh8mPtJw4vrZdCQa1LTfENZpJ8TEsBzJpjjzxyeGZ8oN7SrU8n3DohcBS4s87MkSZYiEwo9vUv",
  "key37": "5HNsWMXqPy8kEy8F2kcoHMhsCj29CzFpgRZpR3PEBeM614zhDStTWQJ3w6M5kRgkAVGjuZpBWMdZocSjDfmAujaB",
  "key38": "2TsSSxr992fDRiF8sCarWkWjbLb9GZ1Wv92N46XQpFzxRh3h9vbzJyv7Zgu2bYoyd9gGuBkS9CqhKnBBR6mrLzdB",
  "key39": "4se2r2kuddN3wiG1TpASyV5msnW2dHfVcToFq4RTjn87NWLLvcybgbDEshrFrvKgd1Kvjra1WcF9VRd7Qxh1MJSA",
  "key40": "4pV9pDrpMQp5g1Mn9PSUVrRReTXt7CBW6QH3d2KNkpfBuUWQLhBzCG3LaAGhWqqijiskxurGA4s3DhpGAJKZEZxj",
  "key41": "557SH5ZooZD73BcRLe5eBcRKjQfEn2QqCJoc89AUwGKZ9B7PyFgaFYm82ghYm59M4hdwRj71CsmRBZya6izkqrbq",
  "key42": "5xMVeV4QhGeA3HfN8W9miDrXtUYDxS1sc71kWX7BSDvBdF7GcxLwSq6BczKk6kYefNhHRBxRf3TxeMdECwbMXXYD",
  "key43": "3Dz3pd8jMQ21mTzjFw6jr1k5JUY3Kge1F1LPxcS4T3rMG7m3CGwzYjUvoMDLiNJjEAzhBKZgqrnv26y3eMU9FT6t"
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
