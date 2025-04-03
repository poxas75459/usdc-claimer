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
    "2gPdkxoKZddgLU59KDtpxBFh7NaVc2kF7dEAq2derM5PxEWaUCqWV5xbPB1qUQfqveY82sYr726ATwjXvai8TZQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Bx8SnE9vGLSaDFKWSPaUF96RsDXwcwrjGMcB759JxKbfXPTsydzptk1YN75cesRzhywKtwEqh4TXBG1rrdRr17",
  "key1": "Ygkx2WfyFBLAxNoGYrMPT6EEnF8iwpC3MkvNkDZt5CUmxCkm2nm2m11DigFpZMQZhQpzPBBje7SkMh3tHidn2ND",
  "key2": "5AQ718hkB8VXM8gmWrotXQ493hQ9qdoQwis74rAWD2pTLbAzYqCuzsx5TVMkeGpzvSRMVZT1EvsxkqfpV2xq4DVT",
  "key3": "46X3aDfxbweA5X8b39SdxEhgUtrm6HkVwuSVvJoTQu6oznG8YFoWeAyoHuZ3yYUXNf6A7yAz5Gr4E3Y7kM9uLaNo",
  "key4": "4zHyqYSLYrAdEtKSFqFsytygA1py9cLRc771XuTmGD71GwYW7kUm6CTh11viBSWgqU9CcYMXRQ6cPhDpnbcEAsX3",
  "key5": "4ySjH7k7i4SSe32eYzHP2R2uyPkDpqjaqS3nNsf5N6ykabZiLicfxTrqByvb46N5xqxHBXujZEXDHQExFnzKjmxP",
  "key6": "sX8c4pf723pLwbvTEyZU2ugusXC3BdttvLbzAFLcCxtT1hDoNYhZea1uBy9kwmFtAcatXz1eT2N63rWeKfFir1m",
  "key7": "2Erj1pN5q4uTYdADtvCKbV44vzBmXU5AocXExoUyKJsz9rn36PBYeyXKVkNTn1rSPRqPzWavtNqVeAEXcP8SYXAZ",
  "key8": "5PYBkutXJGqbi6jzxGuSBvmQmScoX1G5H93fkyfgdeh3zMQDjFAwDvktFE9gfPxTxmYwLvsSphvPhk6Yop4ue4ib",
  "key9": "2i1nZJW6XkMrEUjq8xAcZTNxRzauGr3EtyEx86jNUxqAvdJSWY2ea14ffFo4HeN843xnmdMuaTtbcDA2JxSF9KF",
  "key10": "4JY3F7ve6abd5rTCsNEHwbmNHmuWbUroHuioGvfTtQ7THZeibkRL7xRRkTPguH3ynnPgkUQr2UDgVR2D4S65ajW6",
  "key11": "4msWcsBChMQ7FqjmtJiVjG8VPvbLKRiLF5yShYKFLraAXYEzs2HHMJk2CZdiag7rfXnYquQSkmvq7VmT7zMfZNuC",
  "key12": "3WpfwxWaL8gzzvDwVVSWZyddJSSVboQwf9R7SNWvKJCap6FPa35xXKLB8gBLZUn1poKVemkom8H93Np1daDqYxAe",
  "key13": "SJ8uQgu249uVGTAJ5MV6TaezHx235hxmzoxh4Ua85prRQZ1zAqjDUNcKc87pCZLwZkJ8n9djbRYV93k5BQaPew8",
  "key14": "xNat4kD5zgoLSKAtZXzWRVBvQ1PRf35cWSyMTUpQg8ceMhuB7BrTziPTP9NEo1qkSvQifQLXf4GpVTRYEuF3ezQ",
  "key15": "4Rx7n4HExg4MxpcpTmSXq8GgXVQPodDRY6FxKi4UGgrLUydjQzNQwhoDwvvhTtQBhHefsybWgna8TdAS5mp8VUGq",
  "key16": "64ya7iWg2LmNvPzq4Ws7Tiw9QQYX9QC7UvWzwqBDEd1zPyML7FCGvzxH6uxKaB45DZFJLBFZLWM9oY3i8pVFYmPR",
  "key17": "2mSQVmwYTuhGpKKyveKdK6DeoMMA4h8YxhJQZLr6hboY4r9A16cUUcH5CrTL1qiVSrcm2Eri4j1x43cTwtkKs1jZ",
  "key18": "3s7XRi8gmzn9aV9zQTfbUiTWfL1Z6vTrhFuKztTV3Vk8L7hjVKSQtvQRqaPNuXoAKnwCxnHakTogGEViEsqtfwhT",
  "key19": "SnpNKxxJivmaHt8Q1LevyFS12PTotahjYNojcpTTuFQZfepTFo3ewoGbGM927ceBKSEufz51U3TMTy4WMGseiyE",
  "key20": "4vWPgjPcKUeSL7p4E4GPoTn3rs7oR1kZ9SKTJMMvbDHSvXcq3rfogRztmmcxeuE9JtnwC5TswnX5ki47DGDh9e4B",
  "key21": "5LsE6r4gcWUTysYjg2AVpQaAoXrbYnUmaxY7hmKUQoRQAHRodKPmxUi5o4RAJdh36chk2L7gB3z1gio2WLQDvvwn",
  "key22": "7JxCcivtqxz5jqefRrtsTuVhrXDa3dF4WajYShU7DwR8v6ZFp3JyiZsqsgJppgkWXasZ7iK1r2Am1ETWecwMwNU",
  "key23": "3zGGxbwNmQ5fC1vWHqvx2q6fgPHZLU16D4FzuLHe3Mew177o3gq2bKH95ucngEHDVqvZ3pdjApcKnwpE2QfBYSTS",
  "key24": "2rUAPCYeGdSLhsd7YWAk7pKjGueqqCvmUrqHSv2TzGTeNk34UC7eZHAyZWjJJ6Ysdt6dmX94KxqfpuZrhofzKxJM",
  "key25": "5s8Z53bjYb6Jwd397Ui1hP9CpRhX8v8asaqGj4kFVqg8nYx1m9EVmXRTjG4ugC5v6oukUAAqYzCjqh9y1AYZ41yy",
  "key26": "3gZLTAbaZhMCk5KFp5zR6s5iTpedY9qDC2pMLbNiEQoz18z9UxNxVzCYXt4nvDUaZu8QzdtFVrCPk4cTw5uLgRcV",
  "key27": "rKdZ297dDPgNdiKSYFpoqid2APQJtR8uu5extckyusGyrDmCn1nGUZULTUaC64VBLFabnqLGpGiNySsJPVathQG",
  "key28": "daaeGexgtyzJAySzhBfcZx8W2ethPYkRNi4uNUDac71ebAVKy3vRKwwiTjxpBvQBkwWFgV2W8zmDfkSJfwvFf6c",
  "key29": "3Pn3eDgMNZoALWh5a1jrJSVr294q3eyT2muVFFqwXZSoBcCBRsX6sRc9NC2jyH4w55coj6a1AuQs2KbUUiVqVhP7",
  "key30": "2rq9kmnkjzbQGEbAMr45bFQVQfNDgjpx8NjG2VUYrH6QYLQuCGo9gVZJvJMDM7C9sftNBtWU6gjUmhkpXG5buHDW",
  "key31": "5axxGasESePoBHfDoRYXWkKJ5CfmoAMwyn6WxZJ8u7e8vq1QGyxv1dkFwazHCFvE1uv1DBbCVGG7y8z41UYrEWDt",
  "key32": "56ZnMVt6RZUZTqu4JftfCCFwVHVMWMH4zVMTyjn8urZdoaXyqbpDkWo7ac4wZeeVr8wDd858m2528snF4FdEgCL",
  "key33": "2KHrZRbWsjJdDv1vp3tNEBv6Vjc6xX3pYest8NJQN61CW9dfQXcAafduEHr1g2U8HwhAWhHghmtkadtv6ddnDnCi",
  "key34": "3PXsJBbzddRJ6gjGNigaPkiQX8bCqtmmSAuvb7azd2KRaxTCQQsk5QRNpSaW1jEW2kuse8gb81EcixmuLFtwZLRQ",
  "key35": "5cpYMqsgEYY6Q3YbXpeBhtujXkquFfmPqmayuSNxqmKV6VXKWKsS9BXV57f7eK94RZD8oxR2ibYXAa4JApDvvuuZ",
  "key36": "234EPV1R2Jm4aYePpigsJJjbBBgN3bbQqrQiQkc9o5d693AabK6UmQq4xDyEUNRa2KuV1JDPY67roESp1X9yTuSQ",
  "key37": "5Ur2PQnETypWDhwJ9CmsW9cWasgfXpHJKYeK5LYCVsk34NpmcwqsWzixQJw8ZkN7EtKCswrfUWPMRWSWH8QG6cSJ",
  "key38": "iMBN2oYTkcKTccYHKhCzzPWoJawVcsBMNFFmk3fVC8cWinSH7xqfHVmZpW1HYzDiXAErv61dLba1VNraiAjT1Uq",
  "key39": "3ozDWNgsgQSvatiSgA3E85S3EjgfQgv9NUwupoXyivKWWjZRwjeEodHqkaGLuvotw9DzQCXgCTFERuhF9UzV9gK9",
  "key40": "5yVr4AKv8C7tYAz94cQBmSfj8gQ4cJsNdCQA6PS8qqbL8NQEDX4xzx3C3TFYiE7cqbjmg7vhSwC73pYfNHFJtNTe",
  "key41": "5iHGqXQp9768PmqbJUHk8qjQjVbExMZm2MB2imXqreLx2nimd3t18zauCYYgHYb2Z86Q85KskzDCwpYKxwLQVgxu",
  "key42": "3Y9CMTxrhq7vtVDZCTNZVnwxrqkGVt7EYTjYTY6wKweHWbd4kpCeZyEzgHdXHxB2GyHhamP3cUcSW4UDaaTaHauD",
  "key43": "6qzcML6ePgfke6LBSQjZr79CDcEeN7hGqVgt97LnVxLj2HMaVNiV5w7UxGYrtYrUBTneCcv7uSA7qPPG1JyhDJM",
  "key44": "iSwJqa6z2X1KaHqAmKLTSN7WNbsuShqbqTcYcgUwp7QkeK4ML9wGHvywcZyyLfsWBUi7gkF9jPPcxxJQcW2WRXs",
  "key45": "5m2GFz1Xagr8ETQ3ZUmX6vEnb12pKfCmuKX51XLhgCEkaWXaTEbGEuLYDRJp3QqWDivisJZu2thYu5czYtrFeScx",
  "key46": "3BXZ2J69G4wLwe6FmkVKoKuyiszH7maZGMCEZVptSr5trJQRfuwMWckStcAWYMYJVCc4PtTRk9pm9McLyaBPZiox"
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
