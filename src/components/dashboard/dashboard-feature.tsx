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
    "2Sjp2dnqDXSmjHxMKJgBUCPCVJayBgD3uBRy4MJDuF918uVp8T2ZViMLZ5abZv1JvkaoY1fB3Tk4cJguPNrotdUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69HetzRqXAzjrz2bwxW7z1yLmFMUBudsmraWDHzjS985TxYNdNFVFojrhvDPQF4Wuv8qsyF3vPtXVVavRxbFQDW",
  "key1": "3qpCy67UtcebqJcLiasEZEwkZGBgXzPcNyA4Zfg14sfKKyKpaCSrM5i36BKuX46gNbWMFG6sxg1vHigvnzZRysRB",
  "key2": "CHppWxeXbENFnPmZJosq2RhDeC3ANeKABXDd1K7rsRgYZ6KCCWACq7xnFYkJE6AmbXEehFs3JnF9ZRf7hcA6CAj",
  "key3": "FhxpL1WmZAJjT3jce5psibDTHP7wqNWHzamzQ7129SpycDTnJZg2L1bpuQ9kbhLeExZFSJxyBne6dZYoSdQJPjf",
  "key4": "2JMu7ZBdDyQKUtKfPKtYsTthfABeavtTopTGsbCVpMVxvBotTDyknRxFfKqPXitbsV6ZPBz3aedp29D8wNAYWXmN",
  "key5": "5j1hQXKNiVoUsNgnAjVk22oyXnr2uUZ7bx37NkyCYFbbRdBRpqXao9wvfEi1wG1iMpzpJ79ZSHNCzY68x9GuXCr3",
  "key6": "opdfefHQZ1e6gXuMaw4KgP8r611Kn7qK7XtHk7DPHGzV9fMD2B6UHnd27TmhKwsvUs6Z7HgLZfTxfjgj8Wjx4Dc",
  "key7": "4mF7iKWHXMEQJQpjCHg9yM6AbnTp5Bt4LhRoz9L2KJbiHLztHhQXGSv1vsMrCYUr4qDcpG1QZynKfRzkmGVBPnqp",
  "key8": "3XyMkDF8FLu7MrmQuFm92BrYeJvJp4GHnzmfezGGZe895pdbxxjHWKKiBiSxtjghgkiL5jZJ9Phxm12ahVYFMvHm",
  "key9": "5sQY1aedLwaZ1JE3BbZd87zvuybrJfdj3xrAFhcr6oyo2nttyQW59cU2oT1rah1g2ZeRovAcaWsNHmCzYZ3iuaji",
  "key10": "5yNQxKLtAnbx15BynTEiJKhaDBbN23w4BEhJsHuarWU4Wwb7E284ckYfGrdvGdLuMY626t5WBbniEcckVEh34zfp",
  "key11": "3GeRxNvXVePrLbg47qLYWF1HH9s6F6f5BigG99pvbsMP3dcDEk66kU6iUSEdCDTYcoCeJUwKksoieV7cyox4jSrR",
  "key12": "3oTYzWTy9W8aA8TNodwynEW7K5dPDiKRLyHki2xPEtUoNmPccZmwj14hFHMXwSbU9Ggi3KPsWGCASgj8iR5CGEKL",
  "key13": "4Kzdr3oCitaPEwtxa8EBdUrzsgnWUYFUPjWBBS7zM6W4fAaSkA62zhwnvdySXmDYrqcMveHoxLj9gmX1de1gADpL",
  "key14": "4ySdtK7mbGoSpyfuE5pC3A2MgpMJ4CNqF22ZZYNFb5tnkedp4wKHFxbur84gZxuvVhSFfc1H7WpZcamEqvHYMHbU",
  "key15": "46Nsug9rDPvWKRqB9LepRPap4ctk4vg6cEprMh5YeNZT7q5YUGciDgxxWgCdU95UdoygVtPve56zWkpMaTKuPivn",
  "key16": "raDv3Ad1SQYVerkf6pL8eevzB4qKwbSAfHdHsrZdPYHLJqJSrTiTTyavmkRGv3Vm1DTjamw6sYjMfrcejQoJsxr",
  "key17": "4G46EhvLD2A9PR8qaAX9eLnhrGuKfECmBdxy5p13WWhwXUgUYRAisktgtW7W1H6PhrdEpX89SEt4RyiudocMAobi",
  "key18": "3Ar5ZsP3U2HpfZiC8hpQAW22NbtQgCBAuzVq13MTx59Pa5LPH7VNB4efNA6bLEBU8qrDYEso4YUKwte4XHrKLVa7",
  "key19": "4ukJaPRaKbjyGq4exQxxbc1Z8k24SirhL5ok5WrDUE9tNvrawdiBqYAVEv44yXPvkUbPrCPhcCFEzoGUKCPNr4eb",
  "key20": "4Ye4wqRMgjPwFqH1VYFM1vegnsgjLBVbszcaRJdA88o7JGU8Tm8zrxmoo4vomxUCpnjj2T5vYGgm1R4Ds8vKGjE6",
  "key21": "tS5FynMiEo6KmUcccivwFs4M8ckiTm3h9RZnVJdkXw1wtWccSaSvNKqHNzCrQ8jAmKPY6TK4tXgSgjhBVXna8ZA",
  "key22": "52TM5nmBx4XV8fKV7vAEHu8jmc1DcUTuKhATmBU9ZXNBwbDAZLmwoEAr6f3jMV2uZUL2MgXVBGk6X4mzhqGC3g49",
  "key23": "3acuUw65RBmxhNJU4VQ6BoEvpE2FHjiz2paA1GoP4qRixxthU665SwymYjpByJwh5nep8bL7bgderjLvsJc3gcKR",
  "key24": "5XoM7jazEYY9tdrUvW6pcsWwRuo8YfotBRPfEvKcsgu2b2sUf6jcB3KSiQtXw4GH5DbbgCFBsuq9VRis7a4ricUd",
  "key25": "4TWBuLE49Na7odop72xeHYfNHX5GQuQKWEkxC6bJCCWGBsixQC6G9wMsJQGbtdPFVprL6McWhpykruGhyFKU26oC",
  "key26": "3sKufxye2Ve7oF98JieK4o7g74JEsRR3x7Q4T4z9tN66Jp3noS5SbertjMLoA9cSzStg9exSPXFcbM6J4xFrH6tL",
  "key27": "5qgv4USK8cLBWGEdbhVYQNEf3nf4knPueYPr2KFLsTH6EEv6NJ1q6bEVJFtS2BbqV697NfV3EEBabXzhgDw3mFZN",
  "key28": "2hVTHJZjKLYnHQfzqSbMvzcTxos256WKtH4r1NhvSH4EF2L5jmrNmApkFC7grGZsvXyp9gbbzNaS5us2nNWoZMGE",
  "key29": "4tysvymRjXhbJfMoJ71oVKTi3hxfQytmVeewiFMyZTkDs7Vq5xXLFuusAynrsL6NBSxskTPahsTkv5vMHyqw3XSC",
  "key30": "2nHffrxvhepf58Gt4uyD5dvAY2mMq1XyCZwdKUtkSkWbm1aDgpXVXFjWJjPSF4yQao9ktJvpixnUbTHtu3iCgod7",
  "key31": "3VMSB62BEGoyEHwN3Uu4XjXqBNBhKK1fQfcSNJourbLMNTjjyvDGzrVMZCExr8GF7TSGRBX4hC5U6iwipMfeLZ9m",
  "key32": "SqtPrEt2DZqzqzPuXqrWmzXcvwQr6fGVmtqxxXdZYMJKGT8u2on78HSaqHq2faRZ85sEw9XrgNkTMbbo5cuH5gf",
  "key33": "4pkhQGA52rVXctEBc1DaAC5zyD5o7fKcwb3WPf1RAXyDqBJ3E7roDstD91QUXgiaine3peAbm4K77VYTNwZjd2E",
  "key34": "2a1mq49LjoxVrSkA1782qKUqFWKL99hnp9vZQY3cfHiaejmyJLYca9nvr9PAMkb8zvQv9Sa4fa4SY26fKC8ECwJZ",
  "key35": "3LiixMJSebFLuwg6bjMN4FT3acxsYqx26kt4kxa1eLaEjbfG7F3pbRD9cya4WxdTXSn3ERxV1JLsL3dbzFR7WA73",
  "key36": "3B2eQXG9VAVZedba2EbYtwxU5sixcQZTwFxkJgSVpfZ27Sp1hHBjyomDay2cU4G8NSRcSUMC3GzvjiXAJAFanL6s",
  "key37": "5Tm7idcGNf1thDrsKUMByTSb8SSwgGv2Ky2Em6gj9QwTwQjTFnV8fN3F2PdrCsmiuGVsPuoVKJoGZzADUxf7pt2B",
  "key38": "qDLLPGNbLFe2HfehewoSMmTqobwJKTwnmoQCAA3HN6ag6B3yNRdoQ48yKLU8xXAACYz6x3jH4JEKWiFdiDQzNrr",
  "key39": "rE4Yq47XurUpGgkqD6jihiurqDAr5HthSS6QfJD946EA8mQk46PEShxzAthsbiJ7iJfmsxyMrPy6k91XpT5uoHL",
  "key40": "GCnDZLCGLfgxKrSNnxAHFEvNmT3BZxhczbSjtPzuqXjZMV6ezohvB3qG6645SaTNSsx2SkJuE5svcxMqSTcKx28",
  "key41": "3rPVjzF7V4nf4qFP6wj5izsVUDJU4RbcJ2ErgWXE2dBKj88kP5m3sy6Tt3GiYDRfTWPSX7UZtneRYN7JDyScoCYa",
  "key42": "Edd3oNy7KirsTPEqv7JCQyKRvkaFi6yqF9PQjQAoWKDeTH2oMH49PNAZXEQhBoYjYeLwb3ScgSYcNM4TvtmJXqM",
  "key43": "4Mk7wg2GMupnyEEtkw6872sq7FXGUzwVA5n2ZpfDc82jeF7cu1FiyeNuMNLTduHQXfhbN8wT9WuHAG8QqBgvh6wg",
  "key44": "2MBefif4v9ad9VCsFDo7Y8Yh9ReRpnEYgvMvw3Uyjz4gEtzQTBdSAnae646VFK21PmsTyD9GtCoUMmb4AnRS54oj",
  "key45": "41kHjqEZzaeWjP8E72TNNzoVZZ24gQkZQjLp6QLPzFtBjnRwxDYLNmUCDWBWiwhnRwDfXMsUoN79NmgMGdDfo7EN",
  "key46": "4GKNJzdx8hnjbeb2L4WKbG3MM7zf6Y14gXUrPYk2j3xwV5Ru4Qu5bE7cf8Y5dW3RMGU2j1D86haYQ93P9QQDqELY"
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
