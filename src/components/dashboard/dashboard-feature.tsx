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
    "2WZga9VnqoYT58hG6Jz2WfAdVjcePtHUEdWd2KRjmdiXJNHyzSKdq11fmwhKngER2sEGweMYW99nKmkZPdtuy29t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yeW3jjDij9FuLNhDwQDsRk3ybbSU5dG7ttBoLEGNojjBySE5GwWE5k7Nke1FwNXxCvkbwxEeEPv1mrTmhMSRJ6",
  "key1": "33aLioD9Tt1eVTPatVQNZa7c1EQT7oYnJZo7WigGMYavSpvF7qt24qPP3ipccvuTeC4UkSNU73p8QCTF4euWucvR",
  "key2": "2QJXh6jcDyeiTiHPbvRmnYxAB4kZfTRhaZkjA9vtCdueGZ9DQVfnqwTvC2uSfTA28xCaYXEVywFp2zhfPEcgsqWo",
  "key3": "3HMhrDK1bJi2PmBThhLBWNvc5yEr5cfLiCpyS3rbkYCEoZeCKGvbEi2rxPPYJxxCqtZzYTsA2BY24NtTNn5T94tr",
  "key4": "5Br7rGEgsvf7uKG3jZUR8H29juJ9Fsnaa2UgxNiRtapSZ6mSmPHfE6XVp1nF1BSQUcECVNXoX8zFLygfZr6E9V9f",
  "key5": "4F2TGLAG5qzzTeuEdwBxJ5WQZXzAXzjEbxfMRAsREKoaEAUbP8rQrZp3Uw5gYGwEQMABVMktbJUXugiLvzmyFRNT",
  "key6": "5eQ24nLQLCWH6giKvT5nCgxpyVBguz6CaVHJUBL8iD9NEisLERgBUR34pnEdp7co8ypxLP4SV9gxcEZaqksQjxFE",
  "key7": "5wLb5H7eBbaz5oZX64rSpommHgBLXwu5JR6H4ukYY8n3QZQUe7pM7VFYeAreLy4BtbVZyekowr8CTmuAhmJuQvRp",
  "key8": "5riH8puWaF23WzfN8KUxwxuHneRBKtMt6ZEatogkHsAqj1DLwRkmaDbkStf7P4RKqWWrbNwo3qqPajCP5LVLwh1o",
  "key9": "2dJWb7nbbGo7WRGnS8QCzYJXETHt9q78zivMVEThtqgZjjnC1XFCALzXjJyavjMb52mnZgu3xBirHdv32rrD2HU8",
  "key10": "5CJ1qc99AjMT6h44WtpPeEyS6uQc7pgi5ssW4jk9yuFYoxx6L9F2o4Fx81KLeiooeg8Pe1GDd7y6hDqVqN4nKypd",
  "key11": "Mf6xdYbGxhtoVzzw728sfSmKWL6GnZ8LWryimyv71PVKZKUDUox5iXo4GU1FATmNBbQSQ9hfQgFsJv2G53tWPqq",
  "key12": "63WcRBrq45SiZNvg1uEXpZvqN4jyChmbQMqnX3ypt53sBTwZkgDoVtb1st4gtCgCNXXmDRFxhBCLJ9jRt9GWyQ9u",
  "key13": "Fx37w5aBHn6QMuATHdU96JejhoCxKMtdLfgRAtDhR7ZERVNQW8UXkfSqCqr4sjWQJHuGW14ZUCXh6AaLWCVbuks",
  "key14": "3pX6BXDR5TyZ1AqLNZN792HbUEjDMNCpKVdNyVXDASnM9cGGg252WM2eQy5SULPkJbYj7Xy2c7NybNa2N7JAVVN6",
  "key15": "Y8dBCg1pz28wSanjwjf8QVMKCbVtgzMysv7sEHUPz7WQ1Kt7oiGgMW7DAGQCNmRfBpaePayrGoS1sTQEyHLoSox",
  "key16": "32VS2GKwgKaEQfP65EotN99WJDuo9Bjt52P3GY3CGwdBszG2G7QuWura9kvMAwWtA91GRKQPMxR4FZ221K3A5rdc",
  "key17": "5ytxD6j6YNfyjro89RjnSq51PThcQqnZHVZ73N7AXdh5Xcm6MPB94Ct6b6dypXbLPN49BHx9inSSdsQWAcaXtWeZ",
  "key18": "4rvgAN3BoUVtBLMM7sufTdV26iHevfEMXTWSpxu4ZgACffMmGgWk7pBeniX5qJMUpALoeRJ7VWbNpXbLQ7ansNKe",
  "key19": "4ttK8YLjWjZMEwWYDbNvtQo8o9bAkKFCLaFE14TZyTV3wjLbBpAMmeK9Ufiu6qQNK9SzgybyhfdyctTUZQCjCjHW",
  "key20": "bBeCGgsS9ApH4qF7T7mhEBJBz29r52vVeftyw5hgK2X4ThGz6rc2Qrad1FW8Ye24HMWySg2pKntrs41zNSR73Af",
  "key21": "VCfiZX7qUNLeUN9Bzjm8Dqk2DDariXFSYvzJPNPMKMc1s3wSRJayDhhG8r1jDQjbAnoDqLyexoQBbJP7bt98nSG",
  "key22": "pgq3D6aH7aNr91Ao3wSmQLCLs62qvrLksRdQtf3d9iJueL3QBuiboYppuwFbVM6RYR6rETKcZmjRHwthc9xRMGV",
  "key23": "vkKbRszynrFbuXqzTZYYvjgYuHHgRiAHVZwbNiRvgpQ3iSCR3YPTKPwtPWibEwxLE8S19QaqWrU4RP6qQC4GWnN",
  "key24": "4u8qH7GXRTkD1tZz8FvAyRPJbGpXBiktEikU3snXmtANn623psPF8GnG4EUR3uv2fhpAsR15NUwG5AjEkxDBzJQj",
  "key25": "4jZWjJGhBrWbffWJsAqmd6YHoB36YqfcrzkgHqf7Z4kqEUoKGaQuCwPVruDsJYQnDyfqfdkmXHRtuFKKiKZTeqLG",
  "key26": "24jyKrbXUjo9ouqhNyXobEV5ahWsKriCS6fHPmBZUZbhjE4egfBHjQxgssmG4hzhdaGPWzYK9cNXhTvZgddAMME4",
  "key27": "4RrPEQSFJEBwDChbTpKZva8BXpdy7jgrMEzdBwJq3DMRRVqH2VMW9jLtqRH6dcvXf4KAkk5iSgD7vnjTXRt8Nde4",
  "key28": "46Rd267ehi9MdQraMo1nE8Ky4VXokamHDwCHn3gjtAsYLjSvVvf3RsqBhyY4KHuBwvZXaVEFVSjHStk5sd9R432g",
  "key29": "2atW8sZcprWcF8E2u2MNaj2D9LhYNU6PcGnsB2ivXp8j9BGrAg9cuFPuYZCF4hs3tEaPQotfWHdgC4oYWZ8ZLXFE",
  "key30": "4PeJGPUUDJ3dQo9gnCsrMbznc8DvgqS8Xw2Be4CXsfXH5FHK4SZsNmZPHhMNPiMdUGYYcdgnk6Xhd2HsK5JdM7fC",
  "key31": "25Ng37GuVe6nsn8CLLQ59udvBq9TvfSVYF8ekgoTsheYyRDas4x6Wh1MWm1p8bGbxUVwHbgoWbd2KAwWeyApSWaW",
  "key32": "2gPQKGbXvdmLiDwmQ6S9vVdLns8C2RUNbjRwyGFeyM5Ln7VSf75qkfDvXb8F2TuxtyaXrG39wHxa3e3WjehPeuJC",
  "key33": "Z7ovMHCSpLhYwAdKJf6ikzhzX9dxt7FokdiQG3fj5jUm2rjxopvwMYqdHnDpCBugJTMicqtXZABNbpe9r9XgDDx",
  "key34": "3xghtVejXKZ6uKJF5FZ32CVDUZsR2zynWDMTPVbM9iFn43Cawx7KMfkTTNG7iaUVZZTGUaXoyEDaPHBJSnJWHKLe",
  "key35": "2BEY3bYTYymsFzMV3nC7KdF8YfLaFV8xixWSgZSVjqWAMtkq1vuB9ZD4L22J3St9jdtafanJ5JJSEG2bkrQhhUg",
  "key36": "5AzseJw2baDwFPpQZt1XBUDkWopZ39y49QsByjJpXS2E2RALGvMz7QJ4SrqqtJWzSVF5gMd3Acm283NJJZhCJobW",
  "key37": "5rEZHqDGrKYDjJYsietruxY3kvrrRxAR1eUQ2WDMtE2Y5CWibxGvHM9M3qV1SkHdgbpajPqDUdSLKx8Q6hsSJUCr",
  "key38": "4wvYHojogBmGAtbajJTNNKErZrDbxPG6ZmHaeK1wBgnyGfP5GAmXaxWq2EpJYGUWttWJ2s1jyKr3cvHm1Uz5hCeH"
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
