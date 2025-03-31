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
    "4h1srkd5FNnV281VzSNZofFmphrQAKhKH5Y5WrULWDwd5o21kEcSA6csQG1PPCjhLAbw2v4vCuXEbVbr8ufUAevp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KSbevxWWcMxWTkWmYftaoBqwBQynJJM9eXoojkcreScLfoiRqD5radjrn2UatG8tH7UNULfK2cXjWkHqc3vE47y",
  "key1": "63kpjibREUDazkmCN3cHUix9zkU7aXBnVqZPG4y5MBquw5KGxZ4G97Zk5Ky1sZB6GPzshb46taTPf1Kdq2xv95b1",
  "key2": "daZPbD5YuGzuiM1sXeYgm8rEQqV7WaD8beQ2LzusDZgZowyWpokJVzpUepYZdea63Hk9x1Lhp3QgvmadRvRhgwT",
  "key3": "5hpcdux2zsmsEdLQadpcpegHdKcXQDQALraPaA5m95zpC9Q1wY49aPP96Q4E8yLcFNF1LriLG1vpPndVNRh6Ye4N",
  "key4": "5NLyBtYJ1aXzvPs75J5pCbx25x8ab7m3kgiWCirhSQLjQt6GCA4ZxWarx6i3ZJRayK9Aiz4ciE6qqgWEX1Qf7xDc",
  "key5": "2aXDf9FKYUtMG9mh1fCweiKXZHAm1MwCJTkfwbgDfczrgqmcm26EdvP4NkFzBU2eK1F9BeSHm4bZx1343hkNbDFr",
  "key6": "3c4Pe7a1vsY4vjZ2GZBysTGVXEg1ypKfr9sFjCJKugmi5jvbQEQkC3ZD9zKycV12FcPSm8DR8mAgm8QfbLwVdcx8",
  "key7": "2YrYu9xfbJMsSkxP5gtQ3WM2mJcaDps7oew8pbhcdfkynDoaF2p1o686cH39rGthiYFPK8wnwVuTKr4sbVNehc7U",
  "key8": "4UM7WMVMgJNvh6zbzPi6hwMAU4k22bK1GBf8GXZa4KsvNedKh6ieuM3EtkFpRJwSHNWWDrSc5B2oHfSXbR4mfJDi",
  "key9": "4pT4BBtkJKfgWaoZXuioqSAhduh5Zq6nJm72zoNoM5hMKxu6G2G1qPMnWY6jkfL1KAs2VvaDstKxTqmndUA17emj",
  "key10": "UYyhojunYYQS4985NYu3c5UbZQBBpZh3tuNtHTVZLpiHxuA3BTmSXh7sxQ4YSCcfHvjJuovVQnpCkKLNbXVV3F3",
  "key11": "4tpZykdsJPHiB5p8Q3XAKHkTxzUmJ6BX2aZhnARYcDcWEtN1qppUwZgy6ZmZpsSuyGYVaxbmuDfRPaPjSiQ16Dxi",
  "key12": "2FYJZiXc1yzfM8rVXsoY6qGzPPwiSaR47ULX5EZ45M2GVu9MiLuT6Mucg8FG1pHvqda5dnRQw5hGJHynP2xYatS",
  "key13": "3LNYX2TzBPdiANbPmq9iy6tFuouYchM5GHQnxVBSnxTQLL1kdFkiBux8QCQcCgvZx6wsrXt3Xf3K1o5ACEwTkSLw",
  "key14": "t2RkSysycagzphnfAgEvWfw5bNGu2ZsvTNa4Jvek9rpeQq34cZezFKmPABNqzESbvs6ZnKRx3ZMwsrgcbV4X6Tt",
  "key15": "1c3o2gjhLhsHixe8NPwZ9gUsQYR6U4gXu3evPDsN5gUaPi9Pyz1PW3TK8EkFtBwarfQRtk44JkFPX2zziHWPPnu",
  "key16": "5jXQFu7xFRHeJDgpj7su2qtsftUVk43fdSs7kXfjPR3iuh8h4vPCBbpDx3r7eGFQDKvXdPKocp1NGVja4gChn36j",
  "key17": "czjXbtVtvhN63EVXYgXA2G2frP3jxBd2hiGXu3VD6y1XEuCDFegT9q6KZUjnMXsgqdzh2T8J9byStuuk8vZMQ1c",
  "key18": "rZDskGpwN3e4SBiVidhtgrhQw4wtT8ob7JU7FiwYXrgv3xfaH8YYCsVD13gxq5WJ44j7aTr9cnakdNKys3gLhNA",
  "key19": "4mFXwfN9CeSBgKe4c9EtjhLLx33frAKxS9pmScnMtL3FtYbSobJFS4VERxGq2wGKxYbBob1sbCvHZaVRupokNtzp",
  "key20": "2irZxcUX62y5Xz7X3H88QECjEqSAg9zBVsdeHJknvAm16w5kiVS49RA6r4hwuc78xPPcC53841y23a1aKdRyNt17",
  "key21": "2admJoDLyA1QpLmwmd5RjXFAnwaE3eCvoW8CVjG8hT1FX8ToTLNAPyqEomMSY2iLzaoGJB5ixw83bkgUoFCPmkCB",
  "key22": "3E3uTAcT5w2zXuwqcg3HpRDubAWNEf4YkzEbwSZ4n3jygrbrgPcXa1q2SPR7sWJrxxjqgxSxMxvbdBRbzVjZw2i9",
  "key23": "F8hi8Tg5SeLNDgPqbB9E9vUpZUiEgZrxvEjhogoZMYqzLnuhjMLZDZJ3kvHdsThQozqkNxdUJL16Pc1fGroG1zB",
  "key24": "3H5VNB4aYnFR4nGprjaeDh9uL8sm3Dq6hRhuqRiy8WhVoiqmGMjNRKjJ545HGGAb4uQui43ArVDhmmo4bmLAgQBr",
  "key25": "5dWqaaDAGrFugnRKr8z4GmyY8HE4TmMZqKcnFzP1Woji1BzWRtYVYeK1sjJNFmCd2vHUisTaw2h15cTKdkWvvoTM",
  "key26": "65AzANumg5gWEjZhKf81yZwauXkTHBorfQocYtAa3F8Pu9JGHimRPHYuSCjxmZXL4zsFd5UZdwmvhTLQUANLCcVA",
  "key27": "4Q84eZujUnYmwF2bMaHrGdQyKwXUfzgLawE8qJf9tESGVxYvKg3NA7Mb3napSAJtYGY29c1kRULMXsYaFLcThieB",
  "key28": "33nBvowY7r6QNhcB1JnTh7miy52mSMHgdihA3YKg1yFsoV5SvKzh9xZiDbZtLoNqfKnfNfT2AwbknQjg5wVv5Ka4",
  "key29": "21vzdVTSbSXQJiD3zfFWwM9rX9gSKwtUd1RcG4fQuizF6pW5o6YX1TouTpWMs4V8wqkbsHgcqqGxA9T92wid7Yr2",
  "key30": "31FsaKDdkEate2WJ9mHWoZWhvfETDZcsFJTrKbarfaM5e1w3o4wgNAJyczqNRajXUZdpd24NZmMQPTudoaTtSyYj",
  "key31": "5BXEFUXD2MSYbKq6wVBkEx2eb6DqB7hkifKZovJLZheY2zdz4U5m3QGWj1w6jubhzMjVtZsC4sJuxBPsr3RFfno",
  "key32": "5SoRgwwCtsmpHQDBfPCFDMsd6X8pXzupdpMw8WNFZKdvHPProEs1P17RUimMxswfwYDkXFGQ4nscifQWTjRTck4J",
  "key33": "3swv4nvKRrvfVkcMDMcD17eYi4uk43cCVLsE8E18mpBDhPqccup4NtkGvgx2rwZTQaQ1SdFppWfkTi2kwgFsCy13",
  "key34": "25xKfXNNWgwsYe33BwqyTM3ti21jgkihdGQhF3HQ4v65epC9FxwXrWFuKefoVsgSkmPCeaDYM2ubDcRKe97bdvCa",
  "key35": "2Ts7qZwjeYtRD7AzcqEdif8o5bMPHyQr2xZmABDCyTm9in5hYwTy3bnyenM3vXvoK4WpdZQiWvVm3seCFvUtpWuA",
  "key36": "2wM1FPVDYTmmAxpGZEdsGSxGTKLboR8KbcPvPRjtV3i1bmnHSW8f412cff7kEPvmc3LC6JhM5eK7La39yqWTYi57",
  "key37": "rcK73xogm3XeCUV77Dvxw87C2wAGQGVHuRn4tqCc28SdmFPP8eLLWWbJLC7c1EuaZvKvLas4EtYW5DYif9infTA",
  "key38": "2qMN3qkbbfspW7GGW8fSjEepNQXfLh8YbsV6wfFrEoig3HqhYX37f2txPkMAE4ZL96kiL5acnKTGuG7bG6Nr4JfQ",
  "key39": "2qodryNevAnsMvZo9knLgM1BDnNDvbn2S6ftbuHfKHJSKXuYDcK8bM3QLW2PBekFMt1o59qx8fPydeHTUoYt7zSe",
  "key40": "q36xLbnhEt6PqurVXD6q66xUk2GtCcA2pxbt71W7YEXkQm1ozceXgGdgqfWVWjcXyu3MhcoxZNRrBuYx945S4wL",
  "key41": "UQ47mGg7MycgJk5qbfqryTnNCn4GzhkVN3oXfScL2pEthuHHHZhrj1mTkS5yCR9qzHeaqEmvELFt5tonox69E9B",
  "key42": "3MBc4e2W7GnihsDVN45cd5YBJcMvsPok7Ws1KZtTvN1QEZAussLnJ4CoekNLNXnTnZDD3QvGqC3smdLCjUzoRYcU",
  "key43": "61z1ZLftfiUgGruhSVZnSi1H176tijLNJenFtF5rThV6ga24ggMmzdhWc1WBDga3xQAFVjvPnQiXEdQ2LFPLWuBM"
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
