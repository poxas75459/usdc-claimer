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
    "62SC1FkGnMhnuqSnhoYj3YZTRSExrgU98aRL6JFqAocySLzKV96CHeajgMaSEC28RQnrZfZsF3KXTRaRTEMgy6ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPXLZD5J9Zg9TuLceyxMppYeYWnin1fy8KEiBgH3CfwHGbzFwEMrfe7zhWCfKKFPbcnmMhbJatjZVKY7W4Lr76L",
  "key1": "2stHDamK3LATgoQXoVdGdfusaB13R9fP1F3mL1QjX4ptc2EjAzPj17pMsBHykJ6aVr1JpJ2P9XkZZFNf9KzRfDnT",
  "key2": "sn9tkXVo8Sr4MUKA3Z4cSRJAUW45H6cmDswtN3VpcUzndLSLfEMTe64uD8sYpXH9AvJ86xvgvb7QDwmwNNXSQw4",
  "key3": "4zSmUTHE6ZfY7oG7TQHir7G6yCVCLhgvuMdud5Fc5V9zGTyPdpheC8FxACj8om1ZLH5FUf3CtamRjQwG6KqDxkVa",
  "key4": "64M4tXyuMjhNChU3ScjqgQPYkHEHf6JLEnn5LiK658d6g3w1X6n2XKTRwKrHRDxvJX9N2Cxu5Jr9d8kM61mxGWBU",
  "key5": "3fkFGof99Co8ouD3jFr8NAXPQx3GWv7JEMSX9WUWKyR5JscD5bST7kZ5E5YnXtxotSBiUfxvac1Dxah6axfVo7uP",
  "key6": "4nX7q1oLJTabwkDT8fH16GKCmAr1DaFCGBKs1T4Sz1jPUBQNSb9ZqHBdzeguCe8V83yQFKqbWsnkLef1V4Wy64hm",
  "key7": "hM7UTnjdFCLW2ZuxF2aUTK76J4sPTNs5BhcqmC8MqzUVqyisxYTL1XjMrVh5gNkUGhUPBVbZpaxihJXrQMNB8df",
  "key8": "49UAQkxtTWUaHQKCNvZkgXxcDGGivu498nVc8k97dQqQCoiB5qYU9sUJ2oHYZ73pWbgmzETEjQ44fZpmdh6b5XCR",
  "key9": "PGjqUQhzGW8sLnVCaGhDMVW6mWwGq679s13eS2KAQz4zb5PXKSEcX5oCgeY3HPPBK8c7FRe39yzrx1hGhoChtg8",
  "key10": "3Xiecu5YxUoLmW1DqUgzbMWwEeJiqJBvTuvHrCPfizYw6ihhYzxH3tFZdgmt1ZiVdp95aYk9toD5RgzxAoiYjvFt",
  "key11": "5f7kW1ER2bUtPWuQxGngSWYmeMzeURcFGTVX8U5VSvNvZY6gCDCmLpccfuDqCABm6mjqVTVrchpycn9efRHQiTv5",
  "key12": "5JEa2CQ55u1ei5h5Snj4pV92uhzoFZboZAgwYVudGYgQ6PzqcbWtkvVFfFchji2rpLpiXrJAKB2AHqNhqty4pPcD",
  "key13": "2ehq2nMFLFKog88R8Bnva1JdgGh12RPReLbBCyw5BaeXGjU6AU65fvsMqpgGMfsS4PspBCg84QsPS1tyGaHZqL4h",
  "key14": "3tgJVovvGGbALXUXd7dbDX6Hj5kkRSxjrwakno5TUpR9gcSH8jGuiCGt3Pv8HcSp2McH6Qf6NqUgFMjAF2WWaCVq",
  "key15": "3owo4xadPyy6e4S9fghQMw3jMhp2Xk77av7oVA83pYqRFgWkNXbDYHoKgg2To5qXTPBEk6HiR824Q27GYPfasT19",
  "key16": "37mU5iMv4HNkDgiNRYjauR2psw1wyvEaBjuQdHkrf2SLXqsX1DCLFvKQMAURVvmN9JcQBWV31o55F4PRBWjCKhej",
  "key17": "fT87L8DyFk1cRSQhXq68gfbXiPyS8op1zsE6mV8BtAVji3DqwhHECbWHWbLwpXWiABtSHyXvh24YuUqAyKy3RYP",
  "key18": "2eaqMgRbQuGu8PxiKKNpV9Akk3LKZqKVSp96BmrKisj9XtMbxMZeS5bW4cbqGYFa1mSM8xkuSC777LXadKgzzaqg",
  "key19": "2RKkRqXhYokfKpXqi9pKWeMvXNiEQ7h3enAeAhtrYKWAm1gnf7ACiA1enVdAqXsxyLMrxaCAtWzt4fzfYoFfB69V",
  "key20": "32afpg1Hk9W8LbD37xXY7TwzxiVuMC1973W2SyX5NU6Yxc4X5g8WuQ4g2UKR44rq1EHcoEYemhpTC4JXAwMt3SV",
  "key21": "3FP3DisYfHgigopiquSZN7onbqrWu7F4TaiJEyR2hEg1vfxpFx4Q1icizKQsctw323Mp6zRNvsDb17r4kDw8Z8oa",
  "key22": "4EPSX1nqEJxxDuoQMH6wtVzneXWzFoymzc3dfDNCCs5ecJn4NWW3fAhwjRAfmt5WbXcp7GmUi5r4RwUsmvRtESJV",
  "key23": "2MrVhVG9mLLoQKwEaGGcJBHmYnioafAXc3i8uMZ79cA3bWbnEtsKx8KsKHMQ86NYC8GNetXPDpvgBDCEhzsEhxFT",
  "key24": "28mqejCy59La1aY3NC2DLacKZGGKskCptL8wH829agKATLfN8ic4JxQKvY8WYgpAizuXc1gmfTaobipBW6jVH9wp",
  "key25": "5dXYekfhn8oh3M3Bw88UftMFskqv8jzCSTLKL6vTqnNmUb276d5ssBFhHgfWmgkvgMwHDa9ZPYCE4okmxFVQEusf",
  "key26": "394Qi8GAxoH6T3Khjta2UgeYPdhGHvVpb8NSL89rvXLHYNTWTe4TjtP5mHGiYCUUbAymfhhsfh2xYntCrzFJcbxB",
  "key27": "36pRzhFjfzidN8ttz4q74omaTtg2xLCz3NW1U9H3McnvRfHegcQMmK8NHDZQymTB6cYhT46Vo6o3NYiQUPuLvYAD",
  "key28": "5ep6Cs5vHYUiXaUUe9PmV6sBdqKjm7maFJMn51DmMPu96dhQgpzpLH8zyDjaQjxKL3QtE32GAS7r1A2jJ5WLFwz1",
  "key29": "2VuqCaABGfhjVoyNdSuNK53rWTDM7ihjA9xViTkit6Ert3ExZbUgoypMEx4j77PPZQ5GiViEYq1J5fNUwfC84Bnw",
  "key30": "49aGasuCftQDiQKyjyFK782H9BucQXPzJ9Pu5uBDws5xsyxsQs2XUQc5TX6KQzpxCvCFH4DmpMWdo6EbJirM1YMv",
  "key31": "SgcZvA71xxL694BvFsVkZsmyC5m41RurTd2BfH3DfGQVD2Y7t9duLRPmXTxjgzBAAekAKGsU7jCNaizN1zXzC7b",
  "key32": "3syum4BiREbUTK1Gp7JrDEFZkFRqheK2WymGBVfEGDVBL9gNLtVVBBJMXmRBNzukhg976mcCumsST5XpnDBsT6cA"
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
