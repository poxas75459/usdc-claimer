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
    "5CogNLzT4g4A55LQEzsjDR6mXtYButuH11iJjrjhwDxoKAcDQ8hmXuG7wQMMtbgLaoR4FkS6ULs5cpHUuKGk4V2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QKujTv2YgCNB2F2gu2jPZYNjcKmSQBZoeaUTjx2VSnokzHxB5zgwuv4u1isUKskeu5Ve9Lf2V9thJUvMxDPTYz",
  "key1": "3iNxHGgw2r76DY431MVCTJa3JkaEcVppyZqxqNinh8VGYpwthxiV49cZruUZoh9hSUUQPn9dPcuhQsAetHprSLz2",
  "key2": "qGG74kkCMxxKkHFEd3rq2VWmYHZ3ppmaZvEMaHjpsN765XQyWE1Fx7o6yCibrLpwLJhYB4JCcTBvYnW7EqESXYr",
  "key3": "3R6FACQjuhPZEVzq7SNatixoVnHqZiCmPz7UBFfE9uo4wfpXqe3noro2hah5a3dm7AX1TJ9b3YVgGyazrW1cUgti",
  "key4": "5d8CitA6n1WjbzvebGTjJqemBcCmqh8W4X5iatfSt7GAoR98daFipzg4YyVRNS8Kwx6Sm56TJic36JqUcq61qtCd",
  "key5": "5Bx84LX4rvSqsMLvQM7e3sVFFQNxaoD6nekws18pou1CMjK35mUdcPUYXQzqmhy5T2JuTpqPcFNQ8avpWo9jqEY7",
  "key6": "7nJ6aAs5dupKfaL79wvgSJmXzYJoRwtAjDRP8LPxPP2kb7B1XAGufwqXREuj1fJ2bGHNsY6mTgznhumDy8uAbwE",
  "key7": "3mqbZXJHuLLSMgN4kwi2v8qpwbLtp3tudP7oaAGjijDri722As1AnWoBPJd6ueGxobXahkPURvcCahRpQzKa4W2h",
  "key8": "5bwcKzb1tChLDJi3d5JxCdZAbTFWGArqLyVkxnFLTbXhqAJUhFc9nwSm4AeMS7wtkSydpBqAKJvr2KZJuqyjRyxN",
  "key9": "5qCqNV2zFLmjMXcqFdqUM9tjyGLxqTC8Bp9EjpHAwg65y63TLjUUYFmDuZsiBLXbJEfxiF8EL738KEdxv9Kjam5z",
  "key10": "UyVQ7MxKncFaxYd1Mc7NBLRTABoSmwL38XCa5tSfcHScXS1oUgfzuM8Hv8tUjaUFGpUdEnkQEtgj5v4yMaPh1mZ",
  "key11": "5gqNqtJMQHAoweYVMYoNwSfk22cgj568Vmn3bXEQJrnbrMNuA6L2nsDqmePyxWJfYB52oAG88CHqNnkKFXH7QJYQ",
  "key12": "48bA4zwsZ6wiZ3PwGuus7Wf13ti75VbspozfkTVwzWm5KHbMB4ppUU5K5zNjbRLxNff7RRftBgp6MV44B5iHkYA9",
  "key13": "3rF56uxQ6PW7PDighxNLRSySmoiyGiFGkbMcR7gyYguPVuQwHjxuUt4aynBP7FGqGmNtCVYvXEmS27nFL5poVj4L",
  "key14": "2HMPz4xU8HZ9SG8HXFRR31UpTzpVsdVd6tJQ7tokHN95mDQJz2emc1bhMJ7qiASE2koHNEFhp9KzN7RYjvoTagF4",
  "key15": "5yRNWUJ1EUPDk7sUg6qyY7Go6icTVi2eP2hp4NDEQWgYVXwwY1j8kAjFYVPbFi9mHASmXwmyUHYs6ucYug42rWgo",
  "key16": "2JARhv1XWBgXTxr9fF5tmFnBZPvgkamy7NR8BEr89fJtBDfbDoYwGc94c28v4qDaJDRG9ERRSqfzTYBJXBbZr81T",
  "key17": "bXVo5T5f6hVy9bMHstTmjGfcz1hhHMk9nzNUWY5874AMkH1u6xLj7HVfnxCezoSCar7AZbarg4a1VxGt8FoNdaD",
  "key18": "ciSfWDJQTL6xbZNrSBCEqje8BR5KJfhPxUZUvifKEz3D7cDPY9J1LSRy5oqMom3tAx2y1283BRdFi7L5aebNaHT",
  "key19": "3WWWPfFDWxDrBgR7rJKgELM8cerMDtDUuz2wfYtZE2dNcdvvJA6gUJizdWJQvLuTLMh43dpsWj6dV1DFdh5pTSV6",
  "key20": "5zN4YvkYCX5h7tswnzexmxkyth6jwq7VHmZbRYsfyxgPN4bBtDLy5pCEP39ZFEua9fWpZ37AKE4z2f2pBuP83Jx4",
  "key21": "4umfbK12bvn37tzQq939rhyVV3SWZtM3ZxEUnLMtRBpcmFGna7P4osqUtH1WYs3NZpaifSfj3yZ7Yke3JaTY3Ny2",
  "key22": "41sFRpv4yEtj6mqgLRKdMqrAu6bSCdXFxxxJdhWGzkNQ94Fw7WYsR2ADCz1JH6Xz2VEpxhHjaE6sp38ng3gWyswh",
  "key23": "3Jb9qyRc8Zaxc7UoxPfqxYaEYcqg237Ecjzx5z25feRBffdvjrzUQ1BosLjpNAitkn4M1jfXBQW5QLd133BZ6e9P",
  "key24": "4XJ64E5WEQ1aU4J3Dbsg3r3TWBVDbtYp4gohj5wwWHrMKFUsTPbPMupLLTu4ww5j22GR4EQiEbtAU46of8qiVwpr",
  "key25": "3oe7DYFvJC4EoM8wYZvUULZJAVnjsvfvxgr1aisFaiF9dgLpPqAZbfSQqdFTmFN9QRtfXTwWwfsBeQzAtPaAzDAK",
  "key26": "Mj5yBgeQ8YobtRxK6btVxLLQcgdbNggdavzDWDbFzhodgtN3UDnYHnHWw3V6XEjPhyvRoYUnkCBykeiTDewMBq3",
  "key27": "2v85mUz532rtfkxgHhsZcus9E7bMiqzfHqTzHajQ3jKNwn8uMdiQiFu5qXXCPM4s7ZhuhhuHxtnN2yUhq67rPejt",
  "key28": "sbnHTbJZsNwzQEAVSPK85LvEcHfU4kgLyQLzLqxAkydEPHUDajcC2ogtVKtx1n4ggpbyyXa6DZRgVbzdZS3yLzm",
  "key29": "28N7TaSnMddasmp5YMYwJA6Koa4CXAD1qgdZ1PEa3Yqrv3b721JScE7yQeqomTWfyih5JdZ96nPLpmpY16nipb7v",
  "key30": "3izMxFLPF1vNrzDecQ9TRoWHRE2HgADGCtxQd6KfobdkrtAV1AA1g4nMFkuUo6pFkGJUU2nJ6sHbPSiL9rmfwti1",
  "key31": "3BXCCe5ZKVzUa9HxfTsDSJNmgdug74gLRJoncgP5J1XterdvNTgZEtjVnxu4cWLUbWiBY9wrhvnPYq86W8hoW3C7",
  "key32": "sgrQoUiZCMEPaNmrhnyLt9YcWCfCFSRgncrJKmvGxDegqSBQcm3JSWFRjYkPLdVGzH3y8dq4T2U2ckmouQ3wszL",
  "key33": "3cKtSVWtTJ7QofsfPEHYZVhXTk84ZYYWZ9pNuihkQ2C3tgVQM5pAsYPSj5YBavou6hwzjb3Hc7WQwc9tQSKLr2n7",
  "key34": "sd1AUFrH7NQgMrQ7KdFxAvp12wssiCSXs1sPH5aQYHWPcaZyJL4DwPWLz6h63XLpRR4qsNqM5ntKVBmdmqw14p5",
  "key35": "3u6JZKtaeBafv8JJf7TPSyaLmfwRA5R2bqLSKyKmiGiu5YdS9MWafc3H6BYHZAyqWQvdcFwHC5prS44WJi2HLQm5",
  "key36": "2AG24Mqoib97rSwsTgPWZ7supm7BnhTGhTxq4azFwwpHbDCCYe287Gm6pRmt5guHotBZzoyCwBkCazp6q9dDExeD",
  "key37": "QJfyPmYQYdvmdvMjZ9rDyZczLwRvqRhEumGhihhQ54AyoLTvrjGbZcrav7A6XcZ7UVzvmwxqLXaaPPsVHQugtet",
  "key38": "4vNmp3XMc8aJpeE5H2ZjkSV2sSFERdpHACq21wdnUbFn9ZQ1UyJcq5RXgqcmkDktwC4ZR4NkHiyVuzP2bkRTwziq",
  "key39": "45xExhjHSRWtAs6LZSYp2GtGNRS1N9Pz87W3jvxtHzbAxUsw2oAEUALeJk4tTanQnUdgQzZYXrabyyp2A32fehfR",
  "key40": "5Hvbvk1zv7R9gGZaEZ9Jo1kLxe32xFFqwY2LBZZpPogXpyvECFnTb3xNW9fr7XbVFBNoWD1ov7nSjzRh7jdm45i4",
  "key41": "3MVjyYsn7fzsj9inZah61RARwWxnmziw56nLY9MWvJc4mv7dqboRmH94ikJTNf2i4LpoHmXZiSTYDWyG4cgiyNjx",
  "key42": "3LhXfGJKGTs6TXCSdsCtduxXukxeorbN95x1XWL25ZBzYMe9AGuifBkL6ZXipoHhn5Sf2tD87zQLxRKCfTyG37sG",
  "key43": "2pUQHWhGqgoeCERPHzTeEFEjYg5Jpt9XF23SvqjWrcYE271M894b8mgkY9MrMhweBePAEQPZb8GjX1CDGKcK2W55",
  "key44": "ef8DCbsErL7XhZWwB4qJKRzqjgYvPajfaR8EmuyEG4VzYR3YQxwZnyevRxLyENVEYcBoFjb4wnyXwD78qzKwNeY"
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
