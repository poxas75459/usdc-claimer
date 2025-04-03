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
    "5YaDzqYJdAFwmyUUpvxDUzoHVWjZLre9mXndqXt4mUqBr3Q3gq8XpqRtYon1iiDebaKsxEDBzfGq1ckfiGpERyiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNNReFW98Z9AaeK5Z2yvH8jtE6KoDB66jf9wjaszrZZmB9hn58EtFcDzf8yGkoNS7AKtAyBeYDUixgVkvM2nGxY",
  "key1": "3bhEtT697FZFf2qPxUcPUFCLQMgeb9sLZTbG3vu7bfKWWMDgNi9vVYQ5SGKDHzgMqAro276Wq1apNjrcTjsk5zsz",
  "key2": "5xWzhqVUX4ecot5ue16iUkzuWBR5kCpQkKVuPJgFtgJG6AbFoTJDMinpjVYAZ2g7YEFqsJBdiHiBK3UxuatCboQb",
  "key3": "2hy4VwSvqSLbvyRE42ZYkArLUnTzAk7m98qKsxbEq3mCacvfrA4yqWrkwpXhet2nyXixAijPHeWSsU8Kn9M67fzL",
  "key4": "3sk2ypN2BK8DkZKFKKZYw5Cmh5UWLemSQYSmoHnoi7TC568EZ8RRnK7iGgXdf9n5zENw1Z1zRvDZGSZ5Sv8hnvwZ",
  "key5": "PGSEsoxzkgNftNccVKruiL1jTwbUmwAsrrpgA2KAbvRbTCkm2gdgSUJZ7JueogNsPViTeEP69nMQf8Ffh2Zqs5u",
  "key6": "3gwUJhJmCqvr15hNsTUcjMbVNmHtse3kyHyefjRNgTs8d1cZJaxGJDnrXnn2ZWUnQ9w4dwKq73inwzY6u7QofL1r",
  "key7": "4duKnfjrs6daHDbRKnBbjahkEXe6TakYzdjaieeoCRP35UEzaAQ9H2aVhczRErPwUZiNUz54MGBQXHom4vFrXGbY",
  "key8": "3zwU5rjBqCJWV3FoUzRgYj7t8Ui5MJaJ8ScdjNsqivRcvUvjvjdCFjrKisQhBU2umbzKC7zwHRkZnTNYtnxRQJUw",
  "key9": "2pC5QjoBkdkgDXZv3CPRnSwuW2Vxsj4XuEv4uiK5NvwpxCn57RVmrbZwbE7Y2C5BjPLVSh5PKz6FFtrKoB4Csmx9",
  "key10": "4M3JSahFDSAM9cuwP3DbvtK5YobXJfH6155edYBh8iRLUD7jiVDb3bBijqNTeKhSsHXc9qwieaVe8bd81kvt1KRa",
  "key11": "3ricAEYujJgFMgZxSPrFLfD4AsqmuTbBKs3B3iuQYAwWkTZwyKN7pebLZqHyaukNMgyt3kbxbVMs36rhxy4nyPDU",
  "key12": "3yj5846Ed7rvb2M1YesS9uq6efypw1w8NhEmSQf1cWDBtnXbWerdraaWPpvvJztAt1MwKUMT19YyjrrZu79PHRia",
  "key13": "2vUeGEyjZqu2PNuVERPEKGhdzHCupMpQ1j8kWW3X1sRbsRz4wRdEKCg225EwkkzMng1n7VyRt4mDdqXCTE9bdQMW",
  "key14": "4i7qrUuSa2phT3t26Dtj1c3eq69PMdQ8nc3u6T8t1hhwpr4VpgJZyfcnP42jy6qJ5HnZ9RdJAy61RqKsvgRcTpSj",
  "key15": "5rzLZt9BSboeho69g7EtqcqMXJfGXiNPpvgsUBG4CxX8BhALKeN7NLCZ5nvwQwjVmTTirtnbPpZtvi5pnKUsGvyt",
  "key16": "4GFfXDz7R7zhKhevWxeTAevWZ8UYXbhyxrJKLRUBRB24ijDsYCX4biHccHR55ffxymZhqUVLagsQg5WXNHpPQPHq",
  "key17": "oidQutovgEEoZbe7VQFz3KdRLvJW2r4o1F8aRrmX5G1d5evN4YADX6hFzetDCLbG4d7KWpWKa5UPp6ZiNDiV3DF",
  "key18": "4njwaYwgxPBv5Yp7BSC1t11JyMB4b8hptmkoymybxMpAfsYxnD9HVEv9y3UQqdSV96BBPfRzL9mFKkYgEg4M2Fud",
  "key19": "2a2qg1oBnKy2XG8CQbsYm4qDimiCJc4L5WrkWozUpQGpYRt6ZQEDhQsY7BTxwPchN9NuuGtiGTJnnSczxKwbKXrn",
  "key20": "2gn2ry6s78oRQZ4hz1CohwjhjagSWWgYX9Pptxs6VAJVfr1wXyf3ciVPo8Cc5eWVoJcjgW9Qd9eGpyXJL2NBP5dv",
  "key21": "3fWXFcfZ39juKizqa2dEqYYEiGFnGiSv1MiZnq6YLywg4TmfhXNq4udK68AyaXLdJJ9omdK3eToKxRxud114ZqC3",
  "key22": "WMqwBLPiVKvzv67RssZCBkvUYTXmvcTZYamD3sGVeX13LJBpReiSLT38bR38mosgSBukNr4cZRMHuw8jugJbsvK",
  "key23": "4QGPcJKt9k2Zd1vPJHUAmL4REJGgh7fV9j5d1GYhTDJnKkHpPFWCeRtZmc1SLMA1SnCapcvwqCtH8smXa2VbNDhA",
  "key24": "DeiVy5svD1H9nZZNzhfgA4j2V17LMx1zKnEMgR9otBYimeGvMQmc1XGBoc8MGt4afCxJmMZBttjcEQBpxuwmq3F",
  "key25": "4hhB1qL2WSSanwuezKzdKu493f1q7CBJ99dJCmRXUShL4a4gZcLhVPGJxqbVXvpjJMVKGLYmWpZcx1ZvQDqc1J6W",
  "key26": "LgeV3LoYBZeusduJ95ZAq8RWtsQh2K5vBxxoFBj7mHXPWrxfg4CETmYMjRbQ3V8zvTQcdH8NB3CaieSTb4PvLM2",
  "key27": "3C52EmwwtAQYMxqPaioSYpZU39dQyTZoZJ5fxBkhMESERiXUFdYk8vM9n5uRrmwKUeSYVh4aeYXGsz3MEum868cd",
  "key28": "iGWEGAcRutwihayYX5aDuLkUxFkSdu6hS8rxqSE6ky6c7e9usJKYSLrejLu124eLVDpzKN3aDrxHf2P6QPxdACU",
  "key29": "SetkH5hLwai4HajSNw1wq98wm415NXts5thp45jYVMrrZc9kHFP3zcvGSKhB4DxuDWGMru8xWATmZC4c3F2pAuS",
  "key30": "LDKAP1yiF76brgzx8yDYTpL8iR1u9wmTJ1MYFYzPUU5v2JcDqHekTxDWzLYqAaVdY7WUYgxR1mjjN8ELJurPrc2",
  "key31": "4o5kRD1xDuh1BgKDAHHjEdFEr9a9BEjdVbukxHn4dDBkVc3MYQ1XLBfhbL7PZG6yEZFHKUpw5WqX2JVFC4PBk2GC",
  "key32": "5RYsWkbtiPr5uj2dwoHdc7P6rRSzTNQGZGTvaz8tXvWnDuzv5sqtGALDhQ8RDqEWvrdXcteLv7tUFStnnabNR1XF",
  "key33": "3nMm56pTYJYA435YjMKJ6XSrUSBFGYv8rLi9Gx9tRHnnHKTAyv4vA5ootArgRduCD3q4iLPdMEGpYcRsb8KBn2h2",
  "key34": "3wAB5xeRnVTTLshqGaEiqA611qVgzPM3L4zsrABsrVBySNFERQ7i37Ng3UtfjqYfd4jncW7FRxr8soxpNzGhSE3J",
  "key35": "58W8Yy8QTnhDVfiZebkMp7tPp7UMCy69R1ax5GoYLxxkHarHheij2TrXQbZBiRvzkmEm4BJBc9WrsY89Qym9kZfB",
  "key36": "5hPqVXauY73g83bMdj6Sxekud6xeFtx7btHpbSVMJWMgaMKAW4f2XHzH79cNbJHfzGGdhtYdZ1cxvKTRBbidSuwc",
  "key37": "fZagNxqdvExgntawRNE4i8GCmBZ1YX2nopXCQJSUX8VWAaAqzuWukbdT2vH4Zp8WYuEfgefs3wM78SFp74vKkpC"
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
