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
    "bSELhR84drunQ9AZhx7rw5SFpN5nHC1Av83Wn1pcckfVHhyNCTmv4wYJeEqmdCUbmM3v49B2rXdGCRrzZzEuaTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6txfuvFEdAAfagisQXFVViH2RsCMpXvATeNaC8Aj4ucLbWsrvtYVU7nRe4JgBzNQ93kp8QFktpUu8hXfgjeXrp",
  "key1": "4AjoDtBgLb8MiwJ9qssNA2b5meXA3PTUWUdHaHXDJt7DWwigjrkr6yn6C4b7oYvN37PuYRESfWf5xvUxYwEkBBQX",
  "key2": "2xn3hF4BsqS7eEWmBsDW2ZCWiCcXMSvSjKV4vpXB5X4VK1JUY2RUpNv3C3wenMhaHcMLKUMsRrPJ39wGSyEFyWwm",
  "key3": "3tt1qcd9GUTfWqhpBxcZjdnig1Gpsnjn5GN9Dv6DAZbrcdKTrH1FEczT18tyBA1CoGXSG8bx48uibRfF99Jd5bLY",
  "key4": "41fLSbm4mLchCLs4YoEs3psGaWfaZCooQVz7jQUt7NVibpLa4w2SMXC5DvoZGRYrCsa1UFGZUKT3DdQAHWJuUCvi",
  "key5": "59kQKhuo6MKfVZuHZ4RHmhd1ngTbAcoNNjiH9XFXDe5PSVfsGcMxYXrWiU6s2b9ZFRjie621dnoQPUqMv9Q8WkN7",
  "key6": "4VSvBdrY7NcFWiuruttDNc93V6XwYpTE1W94qahD8nk6BSDov1sRe2gGoCkHLXyTYnkCeq6tByZzq2YaxZDjBFoP",
  "key7": "2kQ78q9Jc1ya4dvPMBSTQuPQsrNtZYy8mKLW5SFZPuAMY7BVE4SBAURbx6hKqQ4SCb8XsmoG3p5cd71eczr4nNpk",
  "key8": "4J3NMyXksTnEoFv8sDs4zvMgGKZ2FWVFSJouGmoxZf4GJr1Etrxy6MfEiguE5nafDUn1htPwHh1HgpzoJ5SYAgrh",
  "key9": "3j1dNotutbjfWR8S2cf1Nj2xNRmCQw5ycn3d9U2dGhgpRdx5X3bdFZvCEQbPZnFqE9D5tgDFfEU6KwU44PwRtsXm",
  "key10": "4UuNT46MQDkNE7TbsLQ23q1mGHYQFC9sisPntE2GQUDKyLhD1Y4CpwVpzyJXfQi7Rk1D1vGNtjCRJ9ZweH5aK9aj",
  "key11": "54Bsbo66znNPwdicJ4KpAi2bVahQuKZrDBvYHAyq2sEMwoNjRrLznCh8VfgRwNjyMKkzMzjyGqtD42jAdxTLJbWX",
  "key12": "5HYSHkCDkQPKK1bAzgkxHc4knEgD8B8o8gr4BvZeAm3zYHzxipWsD8meS3Hx79SxcniSXzUQ4wnxrmLLyj5ppaVb",
  "key13": "5JYjmRefGojkBKArmuuo4vVWxJ92KiTx1hv6hpFnxRXM9FDgqyCDo573he8LFg4pEJLpVu4d8KFm8sA6zyA5JMY1",
  "key14": "3SpPYYi5wqnY7w2c4fMBQtQxSS4XiWp2x39DH891b5CQaDNxxkdbxtSgiq3rF3vK3FJCTCrYnF3AsNc11CKyhJFR",
  "key15": "ZPqxCMkGCFdXdEZ1naLLjKnVLBEoothmw5LoQiGmSbs35bemqZQa2DbJRasN5btryAdHqqURo9xBeRmP4qa3LAr",
  "key16": "2C5uujw91XLniAP5eswZfbz5cea4Wr5hjtr84SA8DsWPoa4jr8uk6tQnzzCrKbPP8Q9Ub1obB9RZzKJRpEUxgmUT",
  "key17": "2dbWcPLCXgn6e3jHBsYSGhmbPbBg2QdiqUW17UNvhYTksoG7ukyXWm3G5SKfYeDxRD5qYmzSVwjERZfWMUBRwdyr",
  "key18": "5EjEhC4WpDbdY778RbkhLLjCQWmybKHdN7ZRqzPURuPwneELJpnQYiVsauqYJNJaBAQHYTtZ1XMhgL4WfugWCmnL",
  "key19": "3DTu7Xc31LxT2vtmfGMDRdoUmJ2RC9ewfc3byWSvSU2EBKJUkZXEYWjhVPQCi7hFqFXextGv6pu555aryiPdC3nH",
  "key20": "4JzpdnyFcYupACYao9TCeQF94Hovf9Kq33CbE2bc1Qr3yjuwDUpVMK4N4kyp3vWKZGsMZdF8XDXPfvNHgn7xPB6c",
  "key21": "4T8eYdbG1vmigwx3uK5Et9TExG5wAU3KXHyeF37oWD6CUZVEkbhDWcyFzQP5L89uTz8boN6UsPjiVk7fwtm2pesT",
  "key22": "7Kb9xcz99358iM2d9XVJnk7jezWLb5GtB5K2MaXoFTMm7hpcxd3Tia7HavHrBeX6dMRUj5Uv2BTqYBiyJBYeUpF",
  "key23": "5yKKQJKNBR1GuwUuLMzEpggodkLt5u1dtB9sx777TcDeCSNYYVm4i8zZeQ7RcnSju8HS1WyaNaWQEmT1Dm6wnRTE",
  "key24": "34GGEQYTsi7xEN1BXoNzpoXhZBWsrR89q7gZDASJyEbww2aaeFHv9hViacPmG3BZiL1XouPC4wzefQBniHx2Bx7X",
  "key25": "5udz59vC5aAbHvKrw5wZiLFS7FcSiXq8std36WimqTncqYX4kCa3dtmQzZkaKRwqxJnQFDk7TGzvjRiNwxc69kwu",
  "key26": "iNte9CAfhQkzk8C769qz87J1oiYufC3DLhYdssNZJcNsZGbhjYuUez5V4DrvBDUEYjHAJ29YfHTstq8LkRLkta9",
  "key27": "zLSiGfZJeifV6Tu26QV4DHLjyFZoL31D1zM5Q9nwk5jkvs7uBdLyFCN86RjzA397SQmNZMYYHd6MDMVNpePEbw8",
  "key28": "4T9BAm6Pj64BjRRsU28ccgupwm4RTAiSWP95UJtjdjZ13SekEkNRp1tQXWWrgYCZBKtiDXPmCafq4z2xC1X5LtN",
  "key29": "2KmaMRrn6if6ZJFydNXQmyNEEdXd56MWa9SEDqBcuaas8zpowaHjXat46RbSoba2LTrwQnHLpWFSm6opkHoDDwDK",
  "key30": "3LihqnFgnSAFXDps7PWybbsz4TFcCywxx1U3bwWT4qwEF7jzq5ARbv57V7fAnxW5M1L681aFLvsGhEp6vPPrVG97",
  "key31": "5q2BKYwqZMcJZfG9TitwHwbXr1NaiZqsATaCu85E6m14uhdU8ABEcJQCsARe4g8XkCqP6sVuk47WLagCQ8DBDua1",
  "key32": "9uraJR9vQjjFNKJprU6252TghHSYgUCSAsAhd1atCMwoUZDd1oyJRSc38kK9svtoH5wLMhg1vR9ySFLtEfCJAS5",
  "key33": "22YDGQ8x6Tw5mBDFaU2XGSUNNhkEn8T1H9xN2mBLMaFWjHX2FBRmMiCJf9jpLoq7qfMhnsDFmzFAbLC2t2Ldy7hD",
  "key34": "529oujt3uS8PoAsMNAvDuRLyss31a9qp5FbRZMiqscb573RZc6HfCWy89UdggVPAq5GepaV8uX6Xz573ajZmVqGa",
  "key35": "cv23SwkRRGEajbB8stg5W3yAAmx2QCSWN6Qrp319TRhZfF3wjTLyMWdpzoeYcH5zbjX7BMFwLQBcPE5SFJyy7mY",
  "key36": "62uW9brMdZUKroomfBAqdBJNT9duKfzRDS5t5EyBa54okxMyNa4VfwwSVsRpefFuKUvox9VK4SgjFXAjgLEPGzmK",
  "key37": "673C4vkEbwPBGpy3WJZBrxfHfjyvZj4zmo2r11pks6BqVyf9NCgKUxUmnYnKZ6dvRgQwF2TP4EXF5UENRzB5axkM",
  "key38": "5HaXpaCwdhGqFUC5r2b2jcpj76jLUzLAiYQKEKwHxfN6dErNBqFSTi3qzp7qcKJyJi14XbW1bbwuVbJK1C7HKenD",
  "key39": "4j1bofGMufuxhKZGtXzqE64ehDHV6a782z59k4ZwDi2cmbNKSmXtzWbDwd7coQNvcJbadparfHr7yZFAFMEaZhkP",
  "key40": "AX2MvmV8kLVxtSzn2RqBJmceudvqhH5MnqehAqUXyLaQrjxg23v3VDK7trVBm4QBpvrbsigxW8VRxyk4RAJA611",
  "key41": "4KXSxxjxYBGUNFaKKqe1UyymjLEnFmYSZzhH8zZ87RPTLw4FjY5vj3bqs7dXbU9TKwJE3xXmqP6JedydsKZM59Nq",
  "key42": "2xY9HQm4oU8chQZLaWBXtRuPBzn3cYRYUoMPoYJwQqD1MHJNAk833HNY6xjKjRwdGbvqigKzSBfUeWzVahNDeGFC",
  "key43": "JoBYUn7Uv6x362cpSgCHXoc4ovLWfBppg9yjaoPQ2WnTKK5CkMvguGe4Fd5r8MDPpdb9NVGpAXnvfWjWSLbNmmA",
  "key44": "5GFsAi5SQyHEZWTGoJLoTSJ67fuJRU1f7CC9z821UMTnCUZBkGfJbExXqBZTfoojG5aSs4gLjkTtQ17QGmUMH9e5",
  "key45": "2nFtCDPUdcpimo5yamoA4uPDqZmYP4Y8wdAcD96ngJmAScMa3oGnNFzoi9MzF67vW3VDN2eLzdcrofLHuvkNWDfc",
  "key46": "3CP9ASPkzY22CiFfKq4gA4hcCH4kvy5hvZ9EjGeSenrm4yMzNfbM7Uu2WsDszcJwyYLVoMcHKkFrWSY478Y1nWQ7"
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
