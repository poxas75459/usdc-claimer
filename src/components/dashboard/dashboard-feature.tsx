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
    "3uUP5ku9HQPnwLzSGP9h4j1FxYeqWkn2jug8ZznRaMdoQH6S2MTXzNBWvVw137GBqp7ZW1TpkeG3wRvayoHCYyr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGuuYnJH2R9xcJ4LjaZ5udqrGz3uzCJHnAGaHbeuxKMKRLWM9qhrWwdpexmLmLWKQYUMVXmWq68QmYzHRHFvudj",
  "key1": "5pK5W2AcAwZFQK2twX7YJR57GHQ5Nwnwd1xKzu1zXwR9GzxyGFdf7XcqnMeDask9JSxVUwJKptUJs2Uv12f19PjC",
  "key2": "3BF2kw3TMYsfbYE115k2eD2vB7uS814q7SnsoVBTrevJVa62sHJpNijcZFGX7aJmneYZDp2537ZQbxSDScZDrf39",
  "key3": "4mjjwjw4DcDeb4kiRZNAoVQkePYJgNBdRSD6DLihq7pBjbf1mKebzALZC37ZNC793EoPfeTrnBfKRJuyAV7HHj7t",
  "key4": "4N1D52Yui39BLrTp2F2LYNgzdCkT8mHSt4CgYWSbKtVwtLDBE5amcYt2QNKnf4YEg9KkMiURHChmwrg53CQ1PDF9",
  "key5": "2EpnceuYSn1sf9zQmf971RjB9CNgtwmPGuSkaZzvkN2fhRz1GtcfAwztDeAcx5yUafG4vcyp37aCeutDDTe7VKuq",
  "key6": "62Vc99Zv4StCXGeoxc91tHM46SziNeLywovqqy1PGSRCXbfQaCFWohmQiW96gjcRcJ6Bhhmjfw8BmfheZcyk4uAt",
  "key7": "3obWNWeNf3L2uMdpCyj7r6wJ7K26Sw1JBAQT21sNLUpNbARRrXhAwzrCDtcUJpWroP3hiV5c89zmDw8nEEbeFiJm",
  "key8": "Bz353GDeuBiXNyW4JNijXjzFvKJueRnvjSxc5jEC21cj7KuoVMC72voDGqGvkr65zhuj2fYd56PDPLRN32o11B1",
  "key9": "2n5F6i4iL5b9aQ6tQEDpbQTBCfR9JDSZK77UdfpwVQqAfVmCeJQipkK1M9XJSryC3PKXs8u9Ab7qNJmA8gPV8zfS",
  "key10": "4EwSaaJqH7nu11kTVzF59AaGsQUyVSvXWuJNRXCwojgxNWfkF1z13xEXuPoEV2LjeS7fs4GPz249dsqtgDxgGWif",
  "key11": "3i7v7VJHuG1C2Gr84Nam2CBAoTe78pSM4eHji6P7tM2RjqVvk81S1xiHqV7ahYfproTLYhHnrR9gdoR7TX9yC6K",
  "key12": "253LzoD2nP1Xgsw3yqYWz8XF34DPor2KVRZQabSvRBP9FvhpdWGHPjkXCF556jPVyWc53ionBpeY95NUwR1qnRU9",
  "key13": "25gpucdNBNzMpXY46ntYnZ5TGEHvkvPPgabpyRHxhHZRsQa6FG2pfacLkhxuhc4e9iE8ZiNzJez4NyWa3YuD9rYG",
  "key14": "7pmfQBXkMxTxRsQfKHS136J1E11BeYgnPTCN45Smr1obqAoDZe5zYTFWvpZnEtST1yiwR9kvLhiuNW7puLumZ94",
  "key15": "WPzFdji7U811hqf3uF93eSjC169ifWvXbWvcqnnvLPvBm24Rp853aJmR6YCVh7oeB55QVrVAEWrC2YfkDHbLWv9",
  "key16": "3ajS6RX4FeorQ2mA7MCKKWVZeEfTcHaTXa9P3NkwbUNFmofMAME16QcS9sr7g4H1F5V1TczqevwKVdknQoyDBB3x",
  "key17": "oMRddkBNxCp7P75xyPJXRiHwjg8a5HcYxEXGY2foNy3v6Zf5daty5Dt2LYkvEVMTussWnUKhF2xNBz8bDcgjgs4",
  "key18": "3MTNCxyeTmtH7zxtfYc8WyHrdqB75hG7yQofSgST5D3y5b8uRBLR9ZyAXUam2Dg7YFBQDdbDrQbPVkXcFC2asuUP",
  "key19": "5QSahD9Kartm5B9MNEV5oQ415bMjsQ7cYcCPGSKrahod1x9V5c9Gz5auwxZkVXEe7djdd7A8YVgsGq88RhcbDdvj",
  "key20": "4oDLnAm6r4GRAop2dd1bnEuypFaXEqoc34ofrvLrfgkSjdsyYs7ffuEsANxMjo3u7PkNphimnCnc8dhmh6eckmqt",
  "key21": "3ACTqmLq4QjnNq3evXqXC6pfFjHzPn1XduEQhrm9DSijcRTJBdos2x83RhT3yMzG6UdEKqVxhnwPMFwDi8xAuu8P",
  "key22": "22iAXu2DC8Wk7UB6dLqWtkZiuVXDoGdcV1dECAYiQ3PrErqaw16E5kyNZeFM51debe7KuW9hYDfusBk9F2YXZNyh",
  "key23": "2AHgskd18VLVoPeDctSMLuShbgQHiGB6UnkedVuUFBGa45ndsvfadrJdDVW7Rf957xt2qxs4Lcw5kHPqFD7sbXcb",
  "key24": "5APKAYE7UZX7VTk7qWLWLWMUAsRTiF2rmKxUBsB9aJXtKDhwZwY6CqP3TwHDoL8hBUHzCuvz35WH2Eba7HfAxswg",
  "key25": "5nCGX3191SrNcGEjbBU9gfRvSVvV7RzSovG8GrTULDgpnChexVXq2DuBHFLbxejAameAK4RfDu82Y7LSrNvdaYSw",
  "key26": "3w1uZ9vo5EUuv9twQSCY7qVWJGvM44pg1XRdToQZx8x7DYmB2U9nFpvTG7p2t53Ftsu2TXF4fyJ8eG22cH1gbBnR",
  "key27": "4aYAfWpaEqcQukvo8edK6vEpExZopTpbZ9s6WLfQqC3rNEAtJ3sTtQAVmCBBbf5Vbcy5yNGk36oNZmjzkGfAVwFz",
  "key28": "3ydtkzCBS2PNK7GtC92CeK19ZXNnCLSpTQ3xDNe3fTCsvjXHWn2rkH9y4TCgwd4YweJhwMfpvC1y6StsdRTjLkPp",
  "key29": "2SRZPtx83MqJHJr1mSSx2i9ByQi1WqxNdSejWGkkocL8dwVpV4ZcjFqda8SUdHtpBPyZQow5sn5hBGswBPdjexCp",
  "key30": "x8YmHdofBx1kEP6K4sbrobpNbd6zutCLLYHnghTBaZPK8pTuUk9hk6u3BPtfyTd28vEjJ1zJrNBin2iraF3iLGC",
  "key31": "3aWkZfhddCArD9ahei4x4DrvKG3VPwh1gMnJ5Cb7LNh4J2netJtS7WW35ipT5wxHBMXXK1v2937WVj2DW8Te3QGx",
  "key32": "4MBzACHtFTV2Nfcq7USb4N2Rjo6Tn7g4iYUQwH9Ea62zYCUXCCeBcWpNAPAz9gBCcVbZhyyUHUdkiFpmRB2QUAV7",
  "key33": "2NP5N6iPK2E3AapFUCWgyhmRDLnFj1e5nVW2jS4tcPQLF4Ah7fM9d1xMMhto7BFZ5LxAspxWEUbd1L6rz9cJi7ef",
  "key34": "5CpVv3xc4VhCsV8CnHmzTjn4dbceAgYmoM1wdk4TmQyutPKWCrdHXWQj34EiLMYLtGKh9c4EK8K8ft2YK2hd8QeV",
  "key35": "Z21NT6sg92Bqx1D4bUduu1JUES6TJnESZtkinQtjSSBySTYjBsBD8juPCANNDCZVxvNDgEPd4gyveHqk4eKZXdD",
  "key36": "5rq5VwuyKnoKzvRTXN7NVmCCTaRvk3GpsEoRXuUgcN3BpfQBCUQX44fLRMwR7ZaB3LiHb42njpk9BypjuqzAvMVE",
  "key37": "3r26YSfcRwvAowM7Yae55bEGrkpX2vESpk7vRZLNkqbtsjbWhgp8ETyfwFNiUqopSc8CKcn4ep2d4f4UoVxdwm8d",
  "key38": "2GnVaBcCKXgTnzRFVi9CpAUNnV6tMNfWUHDrfD9nTrGQ72P5BtMGpvm7vEy3GFKfDUB56ruYr2pJ2MmKY9DnZE9",
  "key39": "2oN2oXmDcxT7aDy22yqXNsgx4RsH8qw8LYvhNoWPa36ufyKfG9kPmSCRSzUeEky14fAx1hh5y5uQvf1wdQ1e6TnY",
  "key40": "fzrUN66micQEteATPfMdQsf8o1eydcGYcbgSVketP2qRxRt49aagxMhzCHn4gScbqkdfe6EvD43oVjEqmcb2r12",
  "key41": "YirXhqQYyApYW5CKPtsxVL9McsFJhw5c9zhtGLXX21JeQE2Kq7Conp2bK4KDMyn69EcwAifuxwSio9Wd9KRVMA6",
  "key42": "36op7VGiYUdEeT24DWnT2NvRqPPXE9sj1cc6TPg6f6GrWvhSaK8LxgRk8uvX3ipy6oGYvYWBJvrdJZWZYowZ2Z9",
  "key43": "5EA1SGBq42Fn1ZMvAvgzz58VfRGjr78tRA6cVHYAbGtD6ph8B1uzBincuFe4vdEycFUuhEgdTyPk2i1wGSp3dHQV",
  "key44": "2XamxsoBvSfKS8A8T96FtP7yMYRQECDTfKKuExVVxkuKdzS8xfaHqdG1Pta91KUAiidinogLndwSsCD5NoL8SycA",
  "key45": "4H7VGGriKJLckryE5hRq3yLNDQ2yCx9NwzskHypRkLWz1VjAZfaMTtwrFCLE6eReq6fQkiCUC1dLnzVkxBnPnntY",
  "key46": "62SXMezNgxtbcFhrD5nQUpiXPQ9DeXYsatgEN5SmNKXrpmFjBuJTGR1VaK3MM7fyTRZyip85rYCbFqe7GruvWDrF",
  "key47": "5dJZ1ycZxAdPzRFs8smiwnr4cUQgQafSDD6L6Ff8bZ4GKqkZYfppJeueBS3ySB5AQee4uSFmt29pjGCo715hH7SL",
  "key48": "2iQTAMpFPbtGbw9PiKZFHuDXNe1Zekt62gtjY2B8Cx1sn4Ru6Unhtit2cLuyDvZaBk8bmnP3UWKEV78xseHJdV4J",
  "key49": "511B1Fr2a48yKCXQ3BuQ6RZRHp4tMyveQ47z5LYwEcGStBDviRQAUu7Mun52Uu9Q4gRhmgGrEhpDcco1S8iT7zXx"
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
