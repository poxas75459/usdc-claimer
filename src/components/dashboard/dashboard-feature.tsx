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
    "2TkaVvbHhaQM85vH97xNUK2tuQLevVKBndjXV2UmZXSQuDdtUdiMrk1wC5FnMuLARyy5PTr8hMYrmj9yja7gLdFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42o6sZd7QqMT2h3WKoBjp59dwDSqRXiTT2WyxnqYskoYieeJ91nmebXvqRSH6hX6BeA8FWdWWuybkRDjqfbhe94",
  "key1": "6bwUo4Db39RCGhKLXo8UMe1gGz1qCCjovib9wAC6CU8NkMpF5WKN68gRQtG2oR4LtrSBSM1rXA4We68PZK8dCBs",
  "key2": "4J5ob8FxygNDGJ8bfgZFp2izhduKJMJw7vmXentsEKM7XzPy4f85rXaQqbmtZW9VFwC3EPtfCVWi7iiqK3A4EKiu",
  "key3": "5ANksqnDj7ZbsurkFZoNCTpba66ZLqjU4MLE1HXZjWfFcdY7rra5KJbqVKwHyFfGqZa5fhqJFeRyDVY1PVDeBMLe",
  "key4": "595SLWW38XY4hyRhz5r47hcUAmQ22zS9gwkQDzz1Ezg6Uz5zES2Cjwad5c7sxigP2WUTBBGFKHTwoASrAtXSzVJH",
  "key5": "FU8vsiohFmnmuikLTpa1Lu7yc8E3FzEYq7i68xVJd99W3km4E5hxzACRuGoFC3RLXRs5arxtEAZLdnY5JXGgbSb",
  "key6": "4rEzKVJ1VWfRrYb1syeTYD4frLQouAHXy9ejEWuHspMC6AmRues8zVzjkSZbfZeDeyZbpPmQvPxBR5W8nDZbbWi6",
  "key7": "98Dktucm7mvHDoQRvUmokrURWbaQWKoDW9LWxJVQEnEnQ889uwbhz7jhRTodVUsXh9pa5zrNZbAwrBVDhZCD6ak",
  "key8": "2hwXcsYQiAeYbNnb5zo45TKDL1eVSPGNhArueDj2M9aU3iizv5rrAAQ1wPjQfFj4BNkhsohFh6RHoWfdoK8X41JX",
  "key9": "2x7UfCjrSmfKa7yWpSxXnUhFmRWtWJbfkX762Uw8FBw5fCTc6UQFnXMBCkkBr1AVG6RBsnbW155AaDUSEooTQwk",
  "key10": "2uXcjZZkobYE72yQuMqD1YYdxiZKRTFfiFboMKeecZZfeJdAVLGcb8vGWo3kaTfsn85TUcRRBHzwGBEWpSjCv2av",
  "key11": "454EcsSP12XPLr166JmD1CSun2ZNQEbB7ru81atRrZGJkz5W2djtj9s1QfVCvpQveWmus64CZeV4rYG48qu953dZ",
  "key12": "3Sjt9kyFr8tgM7DkMEZQPrqWPUHz4kfywwrTs4Q1Hvxtf7ST7g39UVk4apghZW7NAAMw2moF8KAkvaVWGCdH68uU",
  "key13": "36a91L2ReenJ1PcYTS1po7ZmxTwutsvBM2ez7Q48tPW7GmxUHzeNe44o4FgP1ejuudMnen2q5oZVRFPurc4cXyjK",
  "key14": "3ZcUYF77Rm4DMbziLovzfAZBivQSg8z8cLV5f7mX87qJvgHNdpRk4qCPAQjFeqFXbdjVGQTqZfPhFcxpHmifZLer",
  "key15": "3utQq8g8ejjDhY28726A876tEszEmthYZkn2C6s4WQTEPn6m43gFSCJG4tmLwaPSqWaWCyvw4HenxYhhosLAAhjH",
  "key16": "2XuH1RBNQUzrXCWvVcbHsu2SSThskWortTqS47n4mgUxTMkwYPCh3FoW2XDuWYgurfEbtHhZ8DDLufUJXHQ1GsUP",
  "key17": "DtVuL7ijPHdQqXr76G2LQrZhxnXbFizEtQrWodyX9NM6hTmxXqaDrVAnAEs5mGJcVDSsWo6NGZFn3Di8mSimyY1",
  "key18": "2UzMUKp2fbTXbB6eFjbTb2WTt7r9g2xbFFkM2GV6Rm9bTjY6zYeTyUTqsW6NL3oaE5cbk2oeScuMjcKLZVPWcU2w",
  "key19": "5NPLKvoZUVWoAt2Les5vt2excUjhCsbMoJSNzvJ2TTxncQ8rK6mzmvyZXMYcAZbHsSaD5hDTYiDycb9ovGFNnjQj",
  "key20": "43uMu7RvmHqFKkaYgf8zFk25AUMreWUfZbixZnheLnSLYJuv2CPotnggYSveXHykLUXGmYPb2cP6KVUny84KXJsK",
  "key21": "2Z7EVWPqY1LgwCaG2r2o5mjgP4jhntH2VvCCLcdnQyLSYa3PbTWDEKur8oT3PinUSvJdsduCiFJuPwowMFSMknpe",
  "key22": "4qEJUDuJZJvPXVBjFhXnFxkeYvsJBuchaGz49KEsezTihieKrKjdyUH4bAEngRdbKQ7WsxLbyNASggQ3mtQx4jwq",
  "key23": "3vzdAED9TmhecawrMCwaeBu9grbyivuYmAgM9J1JZbDHbKrspvCJL38r6eBjZMMBNF68k1BUZQbxjSss4YLqfPm",
  "key24": "4Xquo2av4tui2Pzw87rPg3vJCVavUq37xhbEvZftuDzGpzSyntmikLLLCRMnwC9EMiXWgjU7MzE2ReDtkZJY3W8n",
  "key25": "4tTPqob2AJNbQNhouMAgiyzNsHkMB6xwJeoFAeQjqvsz5UjZUfT8z6bghmHyRRxnqdF8bYpZLi6zHTE7dAWuuUo8",
  "key26": "4fS19DLRN6zPGG35W4Uc33YagDXsBkAVVLEQorHh6yu1KN5WTX1ZoKoyDzsA7u5aEmsKQBcUMNVqKMZFtuSEJu9e",
  "key27": "4mPcUn8o18eMJU9CQ2Km5ccUWMNpQ9aFho7ohAYPuhqrBRVivaiwcZueTYveM9f73gfWSsCqGYUtYQVCK5akgMr7",
  "key28": "35Ngum6YSukEJxKbtxr8v9gynPsUwoJY5DpQwMYtsSGPxFTRpuF5A2wmy2Edj4Tq9dBXTy8FdJfTzrwmrwdYSJPi",
  "key29": "2wP4enaBy2p1qHW4BxJmqG4TsozfjyVftRGEYFgXcHFJvpt6eHPGUyRBccn1b2exWbfnzHzGcCpSxZb3SL6fxLfh",
  "key30": "34sBGdLQjT9vRr7P8BAMXaQhho6zdVU24P62ENGcKA6aNV2wRtX4ckKLnsKaF1BG3doBfYKTUfsHe1q5rdqVKgNh",
  "key31": "5Tvfp2C9N2Fs228RMs7cmaGGWEbmhQp3qFj5esRiDyXmfyaoSgvtMrHdcCn7FKc6VvbXCFtqYCpneoSQoapWuEza",
  "key32": "tkCfwNQAwXe2gLW1DthzZAFQA1axc6TapHtAPY3His5C1CBorLHskMAcZDt7N2zfsVYejWcpEjdC1zKBFkLJ3Bw",
  "key33": "T22vByP7VTeP6vRUrTUjSEfjGxdD9sp1cu1cQSV5oQXAaYwtpzmWH7xZoRce8KEQZedWNocYfm6iFsRzrX25wd8",
  "key34": "4zgwmjFCZ1Dvf5F43ugRvySfsh44wLjgAJdoqBum7LRuJTF66ixSDsDpcv3C8kvDmquyz9nzHPUUGQgq5Wpnhbo6",
  "key35": "3GDWNbJqpWMfN6CBkDWBnFRKgfhcncNLXGyyZHnEifiX4xfFrYju9uLG3KBqMNLbcdL57FFbWmokCrUsZ8EtT3WD",
  "key36": "5P8qHESZoLPNetMp1JM3u39fMmtn38fF9sWg5Tdzo8m7MRoGuXzaxzHK53XvpvuhRY3j1w5zHFXEGDPLuMqDg7bk",
  "key37": "3NywWCwp6XNED4cbjqeSnGL49VQHeTv61p8QubJqc4jwRT2dG6MkRnhC8bZ2rJgMdJioN3SriAoxPpVkDVxN813k",
  "key38": "8TFN9q6A8fyKrGf7xgxTb3n5bfadPJNcusvKSjho95LRTMx8WW5k47zJ2kRr7wpj9RwbDoKxSSZMeEEgG9aKK8f",
  "key39": "2dK5A4CvHcReKFjM1ciLFRffsgWL7gNDQbCMwzkAkDH6w7vANpX4j8EMbhwk8AuNTFvKrzPgmdqLEx2nhoobeiNR",
  "key40": "4KRHDm8e22uMNsGSMp2ow1GxfJ3F4HGuDzLpRwH4LoqDTBYKYDebFLTWMsyhD55ZR4hP9G5Pcwoi5sdkFBuWDA9a",
  "key41": "5AKmEtno4kopkFx9UYnCMjYK4VBaSEQt6FEVDJciJqDcDQhBHGHcxAVvsNySWrCcQh3hpcZyiDoUDieXbwJ4ohbx",
  "key42": "efCBN3C9Ssy92YszeVmTugUKzXpNr6pexEBRQnHrRVSoQP9kouCMXPoHGYi6pc6JmyAifiPP7FwWJXgYS9QvYz1",
  "key43": "4w3vT8mJNGvrqUaFzKGTbVihHv5JpbWiQQP9Tg4waMsVtfrB1tVcp7uA7ws281kWGZDLX9KumtEr3ErANmNuaiAa",
  "key44": "3qtXqEeoNuhXVHLYamMVHuu4eZByFSPFVspsReUuVrSx5r3hqnCok4Stap9WtX7cByDDjKFMs6WRAJDz6fAn5swC",
  "key45": "2UunMYRQgwccXLL9q6WHC6tnnSwRWu4DGHhbBPNrx3XfqHWVwUAYTE26GB66XNASf1CA6yCm7xxPU5f2XMwiR5W6",
  "key46": "3f98gmv1b6ybzkoDGw4xAXKCFLFYCDyENkXKey2nuLBJtoKeYa1WsJr5HZPNhsEdAcA22JdgrHUj6i2tefynkvCp",
  "key47": "5wEeaVAsWgQinMcViHwX8SP7R2ypFkP48i8HfzcangbMdDFvu6ktpgnaALYyoYag3WqiBfNxJ5tnJMJYx9c83Lda",
  "key48": "4PYLxpcE4KfKLZEUgnf23ur3kvQnDvmoxzNKZ9bMBLAPDUeYNXyQr8piXmddA5syUe33MxrRcAGAS9DmnX7FbQ6c",
  "key49": "51RiYMHbcG4JQUj8S3n4LcR13G13suKexddEGFsJ2JwnACrYkcFVcMGiX7L2uXwa28xjQCDx7yb8dk9MU4XMd7DA"
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
