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
    "YbA1NkebXWvCxP5uEQarMg3XmokwEF7ivx3hwcffueSe69x1WXeVsqVxs7KKLTBsZHRzjnqHCESwM6KHDzvgnY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGrtepNDwVSX9ZubncwJ65RqRkoy3jnneHDkjatjUmewY6QtAqLe6N5M3iAbFRCW53GUyov6vHxstFZFxJ3v5ur",
  "key1": "3XTK7zzhReC5FnRNFJXRyjmEVndjCMfskkRa5ym7y3ipDE3zfX3jz4qseDfuGG8d9xYQC35uERpkJTdbvH4dqAH1",
  "key2": "XVGFjY1HxuR1yXeJRJ26FmDBLnoPb1D5sYFdJ1oYZEqEu1oPc6rFW5eUgLqSqkW15ES88auEAARHpC7NzpugWWo",
  "key3": "4QryrAPLmKzU6hoYqE4vUqoDwyqMX52hiiNuns3UknCbqRwDhXQEWQKFsRJ4SJUiy4fW7xn6BBMEgpssYFokCPHt",
  "key4": "3SNLUFZbw7Ea6gD8bi8k4ign9k2AkafWA9Le8zYBiwdNUQaiqPVDppyo4PskvKKRUxoBgQRXZ47AXCVYtw2stE35",
  "key5": "FmUEchmGu8zqpAJ5L3HvDb4AwhR7VDqQn8wubBxD8oq4H57wz3unzB6Qo6psnVBL4gFnRx5PLBZMbKaC4GV44c6",
  "key6": "5pto5uTt3VyEEBi8eQuq1JEKFaumrBpBBPvcjQZzdsRhRLzAWc7X7LB2QQ7i9exLNED4aFhuVrvng5evWMtTEgog",
  "key7": "3iK6Tr4bgPr5qY2V9gbtutTdhVzsDKc8DNVVfQupcPoJ8T3dEe7nuhQwtWWVqHEekWWyPk4MwvPyq614DpBDVnHf",
  "key8": "5JHenW4eRkKW2cMjgK6iKgAXWjwPuu2zyFAuj4yRaFS6osS6ogX8oHLKRHDaHj6dXZFQwHpNb5UE9TvZoEAjQJKL",
  "key9": "DM9yqJAfwyyhF82xC6ksev6CQJVYipcrdmeHyYHgYTGzTRAm88ciqRp569o3P3CqruJp7QeQZF9jYmmzxtnBUh7",
  "key10": "5mmJ43oMNYrFrT3gtXbtyJHmv7GNjRmyWvqFuFjEAAQTUzNbQVFj9DFUDALsgS3R2bVva7n5YFkAi2n3GjGvfucH",
  "key11": "2wmAJZ5PAUxdsPR3A7A37TJkWxw4FkrcwDK8zepiyg1k5QTVRQ5Wvw7vLotqjsUtDqzoxh2NMgRGcqpkTEGuZkiV",
  "key12": "3FAVA1449sw5oPoyw9U5719QDHsCRN93fiDSTkKRpp38YjMFCVtdtSCx3z5aHhUgPFgsw5bjqSYSCCz58fq5wryL",
  "key13": "3TyzayxpUxniF62MyLRUBgjYeYfaRf4pWQGbTcgSNNBGwPnwMSU5E5exTziuBFLZjzYHpSG6Aa5uvSgmahagTGAB",
  "key14": "YSwhA3hPVHJ86vcvvjAAHa787bC7qp4z5oez7HzcT4wFobRhRRCqA6uvG2iX7ssTM9KKZr2442Tqkq1P9KY68o4",
  "key15": "2PvTb22AtbDdKJmYUp1vVEi6Uy2rLAqdM9kyXgirWo11BfQD3eM7589MrUkESprE21Yo2pwVXjrrvhydEKwsxf3g",
  "key16": "5VArbytaRptDQAteBrhh2FZyeTzVWTFWjXNFDf5DTMEvSSzAPe9JP6LiUFmXgJCPrt6hZegFTrEJzo42zQd2yGsE",
  "key17": "3e6CF8Aa3E7hhtGwYZPCGq5zECKQR5SRLuXNrsiRSbUZdYffmw8g6eigZXzaYzmsRzTHbeh37tt8XRMKHUXGdac7",
  "key18": "46LtAso6D2qN4C9vc2KwBeq1BxASxQQrcrruwt5qpdyRks1M8PW9nwQEZEu3cneW6hWsFp6epQ7xQo1r56yc2vvh",
  "key19": "5p2ZQf1Ni9uxq5v5KScdLgCMBLjAWkQ22bg7jJBHhLtrNahbxRFTVhiomP8RcvfQX8ZvAWApd8xxw5Nrze7vkAZ2",
  "key20": "4kmGNC8YemQbrQh6Kodb8aRQ47WzA4EQGLsSRYqBAHEy85gAQbQyrW4xxAfBUciZvMmxhjEqFSLHemAzmBrSNXeV",
  "key21": "5GPAdPDVJjV24h3XefLahB12bFvMZksb77pCC1Yn7VEqtCWnQRontb5dpJjgyBk2wuXHxsqHRSwpt9Zf5Ro7ALWm",
  "key22": "4u92FAGaqhFvFwK42npC3DUkDvkH98uhK6ycAYk4gACVRQje2bnYY114PcRGdAf8hRgzStnSnYQLnH356Ha46ppw",
  "key23": "5Luqn6rJ64q4mhuG9QPPTkfHWjQNLvJfJWSrngBskwPgckdMaEdgb79zpGAx97BiXwi8PxQFYQ4L9BfHVFVv8vHH",
  "key24": "muenkdi1ACcMUNMPNohgkTx1FPVNTYoNjxxejzTr4itoGPvTRGqf4f1eEhrJTY1sEHBCQbYE2UT9XkrrvYiBDF5",
  "key25": "KP9RsL5DdBkTaZedgBSAkPWiSYe26NqWTDK95rXBKGnu4cWE2TS8ZPLr4BgbErwnWSVHLMq3VQV4fGEogWPmfKK",
  "key26": "5W3PnhGPvZ8DBw3v2zYEP9y6MSHtnQqGe7dJYGeyrVTCsx6ntyhxQPZehQGChwU55R98gnERCpWv5UwAGhoCZBHr",
  "key27": "5HPy8uS4XQJ34xuJXqGvPtWWPrtsjBopfkArY7tBdQjDHXxDR1xX9tbF8aYaE4QFGKmab1hLVgma9VUkFZZeYzGM",
  "key28": "3MH5PksJW6eb3DxD26stMcnTTo1LaYsHHvfDd6P7UqmDA1JjjoWnFHDsXoZqDEoDAKBXXUuSskWe6g1k4Mw743zk",
  "key29": "PEmkh1Ydna6sLxQpf9WFEEbmbLuVkzmrJkxKDwMyh5nxDf9aaHiQ1TrPEpswi5kTjx4jPb7fkbFNtM4vVp5ZA2Q",
  "key30": "64CeEJm8o9zxPuSybx2jMBiH6qz5UTTpvAQ8Dp7rshnTqo9dakGj24m4XuVHh5YNopdsGydyYZgk4hL9JMcC4MLw",
  "key31": "3SgBKE9oT6mPeBgwVG63DCrfapTooNgJJsWJrjmziXmQKJZ2UoQ5sHaDKByeCKRLsuJYsePmkZo7ca6C7Ht6HunL",
  "key32": "2Ef8Tfuop43mPnKGcwMUsae7NCBQZHxYmmjPeZCxeh5hDEiisvHyoPWgeXacPxwg6SzwSm55FfhkgbQt57fzPjwC",
  "key33": "5aeMbJNxTjUsS1PM7e6mspixhttMQP5J4zGSHcLJmJg7DsbimV2WM5hSu5TEsrUK6UzJtWJ7MPpbXaMq7o6utNG5",
  "key34": "3Gxd8VmehaPgVhbV85LKvyaEnLe718qLhTw6Z2fvoZ6mZEUaCovT7ZKDYxv45GCfDL1tUc5VZyeV87UkNDx1xztP",
  "key35": "5azjBdBm4zgyS4ZMcKmp3AcdceBbww7yteTvqMVhSZPcMVL9QTXdoGRp7tkZ8Ez9a1SpbcVsMDcMZNDQfQF5UNqm",
  "key36": "5VaWkAPgrxxK2hD1fQxvwPU2gPnEVbfjzjavNipBbttRugoe6mqPBdZJXpGa6MuDEQZZVLcdmL35MVv5Q6KfzC6c",
  "key37": "rKKPmqg9obaJmTZaNe11kt73MgPob91QQ1aWGFhFdnAV28pc4rSXhDLgcXbDeft2bBU1z5P9XBq76rEKSHiG17x",
  "key38": "5iRKjTa2oqAbg31XWPhRfzYgQvtEouszfcXihzkdXv64ufVqF1xLwSXpsZ3D9JjbX4pb9PbVqjn7AQuCeAwWisB7",
  "key39": "276udGNtZWH8Zw1Y3V7eUEgu4ddoLEAhtK4K1W7mQnyjUt55D7chAjer6ChxsWZSYKY4CMvqV55WDtVh87LrkqQi"
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
