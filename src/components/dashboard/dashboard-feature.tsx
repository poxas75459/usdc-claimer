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
    "3m8KbWRhik44yZNBVpc1xu1vTQvDVSvKhhC2Et5yz7ED6eVPrRnvXaUVMW1T67obxLkGcGvmVbW1Zv2wzLxVt5KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZLn9H71cuCu33vCFm2N7GoYVMiteD8yVyUgHXbhHtRiNJiQArtpD8qZmhf2nFY8nb1mKSmujmWHjFiGzKMSSyC",
  "key1": "4EdTS4Aujei5xCdLnVeQ5cBSmywVTK35vk9Wze1CQsedmqVnm4HK54zzxGysWBuGAmvGiGVgkZ58dMKQvc7EpkTC",
  "key2": "2ZRsgDrvRPbzzKfTKydXgDMizTFrwrWWVtF7sKFgKo8PbNxtGJdMCXzeqm76mQMhrKgJKYcopcB7nJnWRx1QUF7t",
  "key3": "2nUmpXTT9LppDNsZ2dRtjf9Lsz3SLHEHGspvig6W3nS6HDNcPS7CFRczSB3aJFKv5jqPoGBkNQi4UVziLoggtj4e",
  "key4": "2LPDcd1SAraVUPyxC3y1Vp9XCYAunjAFecEq4mdpwV5Xz6dJrf7Uv49fjPTLgyor6tAB1dxQURDYpkNNXri4G8Vy",
  "key5": "28ugrNgZKkTpZCzyUVJvpq9j5xpUxdqyphJ5T1RDEYao4tCuXe7WxM5EdjseeJmzxAE3egNSjbhacL5YJmAimMS6",
  "key6": "2nxYMc6wHgNGonVw3dSdBmeMe4WzapdQT8w4MApD2DbW9m9sZkXi4wgF8D3h5eRzibUdQ2c4zsq8mEKr8TT9h5Pw",
  "key7": "4REiMtf8rUQaSvFCtX483tR6j8kfeoYsyD4aydH2sP56zNRo95bfGHrRQjjQRtDs9KtoxLurqcEhsaNrLd6unMp2",
  "key8": "3kA4KaqueERfP9LR6wL1DAwwEV9uyzN3bQDvW6thsdNdDahoPr1rXMHusgpAtU2w1LNccY7nH5VWYJb3pqxmyqXV",
  "key9": "4ekD1EU9FUM5o3k2CmcqEzg3y8UmHo6UgoKhRjn4u5VB3KXPYutkiSpy7hXU4SyFjGpJcTubxDx6YDf6rgYjV3zr",
  "key10": "2YVZqHz5B63rUP8xdsnzaDgAxyDX4K3gpgq1RWS2zS7cXvdK2zmLbXM24rd7WsDnV79Qv97ist9Ewqo5x2nwTVXU",
  "key11": "4tMX4g2WxVCA1cP4LVe9MrUkw1ZkzEUWCj4GeRusdQjAUu4cg29zGX156oS6wtngbuJt4NHUQzGRFu2HjnMqUQcG",
  "key12": "5cy6EMmfDFieE1V87LSCBGDAabvdnu2YW2VQKs9PZvg8jmYfu87ZPqNgB7Zo3xVVKpswpid1pJhmCgtKvh9aecRp",
  "key13": "5pmqHAwceBNE194h7m2iRDcteW18j2ArVXarbZ8YjSG18rRQQsPEgigu6NuLsCU4ytW7J2R2uBCFo3zi5ysWhrtx",
  "key14": "27Xo1Mg6LEpVxyPDKcv4jqvczVY11rJ7p49eRCXAnDApQPRgZ9LXwrz6jjE9VnurEE5qPAefEQBeULeqnTDcxAZx",
  "key15": "bvJ8xrdM9Vtrm9bqUU2WdHN4zmW2FLGUhp1CZG8gQUk5XC5PgGD9QfNAmk3ARkKyJ8ujYQoKvYkSNBCGEAa8x3K",
  "key16": "33FrjGWf6Ym7znWdkRHbfuererhaURVGFDY8sf67RWoMpnknVc7JMeNSVYAHi3Qyq2ciBpBcU9TETqg2mMuYM7iP",
  "key17": "3AvATHmtRmt2re3r3FajcsEJqqb18gisZ14Wh23i4WAUbcxHhEKwPpxDhCRqyLjPznLZXngzraRmD7dEJ5tQ3dwL",
  "key18": "44dki833c6aTV8MkGZLEKaF8xhKoCgw2RGJbHNSsdVsPueptmjvMZrKnomBTpUUyDGTa3mRN1KSdsDW1NBKBzMTX",
  "key19": "sTpsXQeNNVnfKbegW66pGt2QGk3xEbZPqxqibZ7Jgezi31oLp1ss78Fe8xTKEGbWoqu1QruTe5bkkdQ8UC7oiho",
  "key20": "5woDpoU58fVKwM7ptz7nBUSbEfCZzQe3L2RDLk9KZSghNPH9LRzRKe3DFBvq9rWgUzYpkhpkvCwaJKWfjBG9zC6m",
  "key21": "5yhMw2CF7VP4YQtNA5JMf9TaEapTryLdZpGzcbZXh98k9BiKX2NahVHJTGzUpJave9gmaY9MkL85iwfokmWPthLM",
  "key22": "2zCQi92uiYGv1Amhhk3fFf1Q9FxpgvxoagFLhRG568NBwDzq9heo5skUJJHSJaTkXfQhyRHzFqp15LF5PcSGBkgB",
  "key23": "67hWcTWSJFWsdiLqP3TpfX49aXWcCSCWeFiMwB3oZMpMhajAtQgbmp56zCLauJzbTp3Yt2YKzKi7iomFdiokHLVx",
  "key24": "4ZJerWbkWAPxFMePVktMSj2zhsrv1k8YaXH2X7VducLKkrTmUmxGw411o5mRbvrveHx1F9cqm5oGQRJy84x1UmQT",
  "key25": "3b4ZxAgS9ewTKRJb6UsmQTuKuiGtg3ERLHbQ1v8Tnt53fe2dnFdnz8NSSt8BPXUThT3Bebk6F6jMDi8C8heEXP5c",
  "key26": "5SAPDHTtrBE75fRcjB4zWjYp5rChHNWsEkgveaekfQTauGLcrdxof62t6tF6jXq1AKZNXexuaZ9wUhSvDFSByuin",
  "key27": "4yaWQ4ukWJaqEPfx8VvizH5xnRLpwoE1ixN9o2w8ow9ktt6Q2th2HzXBX7nSmAXx75CDwSBUpnitjj4A213nap2K",
  "key28": "3mZ937kwLNUfXB2Wsg27qCevcxbE2rNh43PwrQwQa4XVrPeVJbM9KtTeSvjdyYXHD7cQMZH7p3K8NgsbF7Fo5AJd",
  "key29": "2EPYj9HKDgTJGWnLujfSXKeeHd4BSc6TZb5kEF2Ba11UnKpaGLX8RSYSoJLyXiuxEViCkr3M5eHxMyeZCjs9Jw3A",
  "key30": "5PNj1c3FpsAVyg3xsuq4HGcy7EUkjsJNfjGnrdBV495o3sfK2pdpdcftKrQEmJ76mrSgHR5MSVQdY81fEbkTZG9h",
  "key31": "5EbPRg2zLyu6Rxg1oZ5HBvRnrdYbcZ3vcoLUeYgNbYSkDnkmE9U8GCpdcVveeo4QtvsnaMxeLVNkWkW1EJwtGZpZ",
  "key32": "4AB4zkrwFZFKjYGh4QNdYA4iYJpG2amLvdGT26f74QsSP3qGazaX7dthEA1ZmD3Kad5nnXHomH3UrpST7UDfte8m",
  "key33": "3znP14bTdJGZW7SWqrUXAHEV2tS1EMqA2MsB442ULcSnU3ZEzmYvLGpHRYehLpeYfxitGcqw1E8vrfaaQySBphWi",
  "key34": "nwfP1jTMPB5VHYzaD823gLjAnnDGWCLQNxxcd8WzJG6kyjSjfHE98CaeikhiDLA3E9NCWfF7nxUjTu3FbUDSCJw",
  "key35": "2ANKctPY1nfjctFzmmTck1eAoECgmTSwAbnuAq2uGd4TPSUgob9EamjhQTbJKo4DLVsAmsyxcvsgXP5TtJb7vLwb",
  "key36": "3e3MipnwPMZDE6wQwVocMqNJfC8xZHfYK2uy1yVdyPGAE4o4NLGN8huVNS5ZRaSNVvGCtRjnMrEFtsTpUVtBvm2A",
  "key37": "21Ls61U7rjvAkG425vUePP8d77K1yiUqAayjLhmzc4Vp49kg37PejueYDBQmLg9YJcKqV3Qf7r6gQseCGyDHGeFm",
  "key38": "TfmBBvjCD9BKV2YBJ8S5WiXk3pwagrrTqho6vphRsgWemLzhHApAmamidSrhwr15mfkTZcoHTNpaoMukRADJYvP",
  "key39": "4Ahp8XmJyp1MMAjcw3VYThbgWTvbkJp2fVdc8QcMmEPFcVeYryf1i4u7t17sCsxUA3QEupW4XQS3F8Q1NhkUxA7a",
  "key40": "3wWzAX5oG9vfGmhY1BbcYkcDbr384ERyXnnUkrF4RMZbYJp7hyL9QjdbzWMinzyneEzw1vtjfzQJVgCTTX91dhBX",
  "key41": "3AimDbZW4b4cq41vP2egWSxaDv3VeprZzzgv93CmUD3TupNAmQcFmAwuoXWkkCiyBB4HttaFMVANu2ikbtDe6td7",
  "key42": "43RWy4CVAGG92C4G5MMzL5rUmPHjZsxfUo3PL1F1wSxhDbGptmBzW9Wt4KeRfEXFEEdeEKGkfXp7Z55Au5V5jCZ6",
  "key43": "4qRNPxKoRBW27fbvEmBXY8WHfBGP6XqBX6X9vWU2Tm6WuvyF3rNCMdfKmfLQ6gvoX4LLKLZN7qcBWJkgRhheVGkp",
  "key44": "2EjL6TeXHo4iffp87kEmZyQ8QoUCooYf5NKA5EeADJrnd4U672Jbsgn1ywzDLWAj5T5kJb1tqAy19w3ZjNhqagdC",
  "key45": "5wLozmwsMCDgdTpyoAzjP3smwj6RmSQDZKWRQkRbZLqYPcZ6uPtVfGwDYztX5adLDqWhUSDC6jwh45gC9WUPcrp4"
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
