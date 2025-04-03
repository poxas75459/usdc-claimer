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
    "28KscRPy7fWxpjXJFrg8NLccWcnX7geQkBjbqEUP2few682wpqyrVLWBUjDRv6HZAFaLJT6oc9mWTNtQ9FBGrajS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sb3jx6zjVeTTGzN8oZL5A9Ch2hD2UX2iKqnfNmdGMXG8KvV8pYMQdJg28WWbcQvyXyjJkWHFDGc3YegYr5kyQK5",
  "key1": "2i6WeKvj7XYZQuf6KVMQZcGEdm4emH2NdSQvMHy1hKKe841RKTyicRLJevc43TUYUPoYgbg5jB4iCgQxC7cXgajL",
  "key2": "4wxm65QWFagE4QEwnVb4qgPgLUkxeaUi6dugBPD96X6GhecAZtsdF6UBGaSrB2V1UiUE8ybyrfnyxsipr94Cw64E",
  "key3": "5KoGtMQgPXSd2vPtHuszryMSXdEr23MwQM9idQ9g3S7R8dn2KKt3Jg4zdy789aDczUBXSqXEm7Z8WjqhBSr4hRci",
  "key4": "4NX5mZmSeuuP9oUYc1NqoLjP3i2Epv5BDjd351FaNqNaYJV6HssAH4qtTYuucH62fBT4yfxkK2QeVRXn9xWfoRis",
  "key5": "5A1rbnQjbkYVgpAvHZT5gzJQzya4pxoB2WsmV7wGXaqFx6iPxgt7qVvpmHBmBhqhBbRD7p79iM9C5hJFwdsXECj3",
  "key6": "4qQPjtbkJazDJEZtgVfuSEAvqCfeMFVkg3G2YfgKYA1guaTZEr3K6F9cJR1R3mPpGTDzxrzaeYJ6oEWngwqGPws",
  "key7": "hHh43riYLdj332G3JZUqLTAmJTFPuc98CAbpBJPTAYVBa45hjm2mFzkrN2MUCLSCEgDAA14rD3QZNM7XCMAZADa",
  "key8": "3VZoD2XuULJ3iwjLsUV3Wfc1CHR1fj7d6tSuJw8k2iXge4bvhpFuFtaYrGsMZc878sXRY79hoWUF3BJPinLLLter",
  "key9": "256rhiujiwEKLQxMDuufzzkFA7zmuPgjEScPiE8SyAcTLnzDPby4HDRgJtc6GRV3RRRXAsDw18YmnAweHnMnzCf8",
  "key10": "5qYUmRiGvfgaBUcy7HHtJr7X5QSMEbJDte2fMU5YXwMnUjZdnUgNWjMt2Fu9qsD89VhXM15uFAASZ613Jtm2ibT3",
  "key11": "5HvF98V2gRStYbDQPJpGVoi3HJrWKJF1wah9tDvHsuxNNqsedNhhMxJM5BmdisK83ruGQVWabDrnmdxbES6AqxsA",
  "key12": "CEVSJUbx1u4tcjVKPEkDtfcx2BiHhFre1toH1WN5dASc7J3583x9cspYxc2eC2HKrgf29kaRL1MGXdFndHPSMZG",
  "key13": "4TzjHoMzU5a59SAudXWWPPiJPLDPGhBXq23DzkEnY9mb9pDmviV19o91EFJJtvqzAHdaxdfjQgmqsvPqj5PqnCJy",
  "key14": "3xPJQWHQoC9hh5keW8yseUCoReE58zbWGfgPAsTbr6ghs3utxwHtkh1kkZvNcHSm9FxZiT17MwRsApEbyNz91XRL",
  "key15": "2db1vAz3bw1ggHgkdY56aLn3uubMaaeMu4g9uqmm7HYRbnSve8tWpDCnNcx3oPZrvhDBcDkVNHHYpYbBMsbJ1H6F",
  "key16": "5MmH5Kjfw6oQgrtV3UxRijmg129aDaQDUAkmdyRhHSkxvaZSszmZFji4MKMt6a5promW8Z2PUX8VvZUQAbivXYDK",
  "key17": "3vPN8qowNNVj4vx8VnPucsKnxBmXewo522AFWRNxxPHNHGQ6mzKtP2wpTA4GQ72AfY24dgfjcKugCEKeEV2zmC3A",
  "key18": "2qDzt7q4BVqZEmrEtXzEdT4pF54GU9cZaZgv64JGHvNcC4jfJNfJ72qJKPUkz6jXNsiyhUumBGjmcWSCAosdXjSw",
  "key19": "3oXNVuduJGRYn5vKsuD7T6kJE38CEv1zru19vrepFszGivcqCjSr7LrqUMySCvVze46UVkD9sehw1cBG7mSudpKw",
  "key20": "5UxceRaGBGFJuWmzhpVPaFNBwJjooEbfv5vQzYfgZAzcwoyD9SoF8oHWtRzJbtwdfCnWazx6TbZMf9kNN92nYmNe",
  "key21": "qWKzYhoAMvo2BkcfvWMu1nYx8y2AtssetQNrgiCpu99MYsLjxDMUmEaHZBYVSv7tK2HZqRGxJSYU8gLrJrFedfV",
  "key22": "21D5QEtP63efBGKPWrJ6qHfxiVY4ZVwprDwJHztou8i6tnbwGz4pUPnq9xtppnJUbvQRZ6Mo3a4q6bRTRiD7hR9X",
  "key23": "3CxvpMk8RG6pHNoK7fM6d6KwrECGzD9AFBNSY82iRMj6ocj5pmVPiFPx4kG76Jtuj96LkktqrjPt2zqr1H8wTZ5q",
  "key24": "5S81G9y2PMyG5qFMmDeBM2ru6cUp4sP8wNhboN2PZF6QAk2RG142KFGVwPQPNwa1dS2dDsMPobxtdVZojGcsCsXe",
  "key25": "57UT328hjHBUZCUPtCzahcudW1eDcUZ6qJJ9ViAVDhcWsAbefqgF1gsi5vScSF3iaftrKddBtPR9ro7KDFBYMd5C",
  "key26": "3kwN2W3yx8mXcNjQ4QW4y83z14pKZ1LsvEJrmxS5qdhuhNFi4EHn2mww2Q1nr8WkJZi5UXCznsnQfL6WVUkKtUVc",
  "key27": "4BVEJVXQb35VxpjYSzWAGBQHmU9SNzhKQEkzu6cGYZcJnTmwo7cE3H7tdGWLDdwJ2PKHBHkU4ztqpUJjE8zkBQsr",
  "key28": "2UaQxH58iEkUjueWBrAfhhhxZxb5szX7tefvCK33jWG5vXkvYABHQaSgDVLk7hMSBn6iswibnc82qBkVDf31suj3",
  "key29": "39XYzxEYNxBKQgWuE1UpE7y9brk4cPFTErk7RNXpfZhyFjUWzBUQnF9rmYbXxx6yc5SdkWvbYJRqESG7CMjomSLG",
  "key30": "4M19KGv786Df75sMgvHdBbbvnX3j94Pny8qx1tQg7EjYpvuXvTknaFWA13P7GggiikNAvc8VqqqozHcFT2N6mJB4",
  "key31": "3z52ijN6JHebT8T3pqGZtRruv2oyfbnud1KsAWSWEijcT4KHo65X4giWh184yw6G6jVbsnSjgE8jJM3WzR2W3hRV",
  "key32": "44PNaQaA2pUCAP8cyeFW6M7VVHMcZ2GBBSoarqoXJafo6QhGLG2dYsrUj9YdimLKF1XiY2MwPEkWZdBTjJtSJQBb",
  "key33": "4GCma97FPZCu4gy8FoB3v7hsRf6h6876FMzSDxWq2MK4Xq5kEZdFL4GNdQMGLThfAYkQtGzU85pq2R1MPUcTykHA",
  "key34": "2KE8tTqQ4mo1cLS87vqsTe1fppzo3h8nUZCtH9nfNDFTft2mKyNF2ij6EQDcxXwqXuZJ5v3Cuq3pepQX9eSEiEkN",
  "key35": "2v824tdxoKrCYvSJhN5r6DfGw53n9FoNmT2ggRGJZgnn6PzxyVQjz37WyJS6HL3URjg3FKoVwCp7EJnn2AnHGTgM",
  "key36": "3f9aCFdWDJV2nuoXtahRTfQRF49iESQTJ4xhf7eXcAX61QVwNR6CP5uJcCEiVLXvQCq2xdu8tuKmYrCguXornPux",
  "key37": "2j3NtidQpk5aWUPnjnu4QQnoYhxLZXa7ZHECxiQn92qpkA7u5isK2Rrjy2z5araeGztymPMynFp9Ma7mLEVV8yfN",
  "key38": "4L4Joy6VhtYf9VivcTbXEgXqVibMS4s1JHY2hegrzs7XDZrwM2TjFqTxJTEHrhUwAHqLryWuosYagQp4Z8zZ2tQj",
  "key39": "4QU4Jp9R5suSqkpTp3WQdwvMR7nP3nVqV8DNdhh192cF8meTUzh27RhS3aWL39q9cMtZc8ehxuBgUmWiyfw2aGBb",
  "key40": "2cRp4aM7dNmCDaXp3s1tagR4xnqi9G5in8mHjeCt7qqbibkYvo2knBKYJ95kZdq7K3iToFdn1yoCcRDKYqGJorMP",
  "key41": "Nj81fDR8BZsXGm5jmDMy4g9cVFe7H9yWQvQniuTcSSM8geGfNaHqPumCcicenUpGNVswMbyZ5nTLgsfQ622LUbG",
  "key42": "4f2ttHN8S5XF9tVEp9d2nUYkbqi7d2YQvhHNNsCRGtJieRKercWoJGWabkYj2GBxog6eXb4Fh4CLLWkM6aB14w9q",
  "key43": "22wXEeXS2onvvFwm4xhSpiC1XCqs1H8NwHAxwE3CBmoDAvCWgCtCWprVkH9ULpA3W2YuCjwqktaC6cHf2XVtJ1df",
  "key44": "Cc7kkbXvndeyVFA1aDatXT3qPkPtxdmTARirFZ4c9jfsj6it98U45YrnfnGG7jiD5WTSrPSFReGXZdmKEsH5gkF",
  "key45": "4n8vwdKSQuiY5B4j6WZSEuBeyK4e8LHwngoC5HE73nm5W8TVi732mc4f2FBFVKduxBtbGfJEpHuS7xoJAyTEkKYL",
  "key46": "4chXTdLkNcBu35Xr6PPBYPUTh5bJHTDKgCJGLRNggfZsiWLjMQur2znq7rVMechgMkk2FsoatX3HHRJtUPy6TW99",
  "key47": "4mciCPnGiJvDPypHpPuRVtEBci4wW212fkonQXWbxfL69wEGpd83aN29mBrWETeNKV6a9MfBcTuhYYqM1DmBMNK8",
  "key48": "2v3K29j4YVttrZvgBLuNHr35tnkin5qD1G1KCQTjDEvS2SggzFKeowYAxR6D7TPnCL9QMSt2bfR8JsZaSkgtpJvj",
  "key49": "5wTUzJR9XYavGzwWszdRfW4YqMes3b1Jga1H5xgMQDmCY6yhRkpLC75vRNz3Cxm3JCgoBu7XMr1sUQ3qaqBHEWzD"
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
