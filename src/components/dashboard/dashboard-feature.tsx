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
    "4G373ibzkKzraBFpBTDiefB3m971LeKfUmrQuDBySmo2JkVmtkuyWcZ4JeXw21hP8Kk35LujGdQ2BNtnhNGbFeY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKK23VUF8u3tVRtxDbqmAi6rhCDGjsX13SUPZRHLp9dqsguNVxXYPngNjydnT3RJVMsJHPk1DQY9gEJi2HF3Y3c",
  "key1": "5v91pv1QdmXTdKuaDARDQMbZrRiz9F2ahVJPhdL1271XiCoYnySLXCua2xLKYSpS2KJpjygRnxMTxu5ywkneTvxh",
  "key2": "31KRp4tjggNc7ds4vibVhF3ZjE4ZJqHyTUhNPBpV9k1Qgr7HpQHQDprdSm5ugKUSB2CLDqetQKVmUaKBDgdFTuxK",
  "key3": "3W52QYiRHDqCLSNLX2PWZBsQH4ucZjprehDL5VkGZnkUyXwcgvg7P3kajtHRWgNS43FiCHCK8VF91McAmXrGhUYw",
  "key4": "9xrnYMpp9LPzzMRK6HRTSTwwAKrCqz2QShH6z4GfbU9FuCsU3dYAvP67BwPcwm7TzVJEPd8dAiPuRNmp4jvifpt",
  "key5": "fK4eJs5WQhY7kpGN1d7XVwHbUd5P582RyTgQQ4GZDCXE5csfyjzaT3TjMgbpahngoULkBYtpAVQfDmLCHE2Bxk8",
  "key6": "4RLdyvDEKiQyZBaNXkqjM11hUoPXxajxPdTFGghLdXyAmmDnbTnEN7zUrKmxX5sV5YZSNjVeJWoeV53jchiu7TQs",
  "key7": "4K4PfUWZwBsimbmbNPMo36bd21CXBA3H9mBb3j1tGQ6fm7Nq4HVveYjCM2EsDHudaqQKLZYPCn7muGpQTRfPGK6n",
  "key8": "3bFhGbVU8JhTcypmndQR8wA1w5o2rqSPGeiXMfVKtjBYJ693UjunK3wt4DoZqpwj5FV1dMM9ah9eB8aawLS9vLmY",
  "key9": "4cLC568rj1L6f1LkAjHQTo1JqWNxEkuGixdACp5WFKQC2am2Yg9xSmaJdPjDs6qWAhSdw76hmUyZBNuioXMfYth8",
  "key10": "4jF1YAufmK7D3pTp7N7eyQxwaefuBGqMMewHCHvY74x3iWh4ny9ZsgJGUVhQhoDL6qKUmnxEEvn4SUHH1RRLQJoc",
  "key11": "572oh9vBAAy6Zr1tvrRE5PrHUtcMZECyrFetWmgoEVWsAZxb8HUWXcNEQuQFkFRKNvtHydngDu4LuLG7pmK3joUY",
  "key12": "49iqBj2pNDJuchj77wVemao1hvKJtyK4MQWUCouqoGPcqgpbs8g6TvkT2BEmms5fZbxeUVGTW4cSMKD9qQFfcbmP",
  "key13": "67oy9zvVPDArMgjKi1YMzi9DWGjZ2YBfLpB6Xf1EcUFYE1QaqFcdfp3ovFniTQ2S3PrHV5ay1Thmd4bFtHFdQhhK",
  "key14": "2sfitvXtWoaoF6JtQw9keDtzUncyjxNxari94j2WMK6fWmdJSmfb6Rrn6txmi3Q7cLiZrfuv5CrXA32921QDDpgN",
  "key15": "37X8DmFW2eFvLTeHHdpQG6uUYrCvqLBGdEc2AtPHsRoczy1cuk5QVMxrJoF5Lh7fLrPrqPFgp7S5WPrToj2YnfBo",
  "key16": "5oEsj2ruhVgtC56QFxKK57rnyrFrFYfCRkkxbkaVbUDBuaY7i63TcwNNcWrXVMXEx4Q9ZFqDTmnbb6427DcA5LX1",
  "key17": "51qVUMTN2WPDjPSjpQyiZgVpZFePgCQftDcezifWSVtQDFd8o4mhaCcN6dYBaeRRcesj4CJM3LqfYADgEa21zQMd",
  "key18": "5HUcTgigAWe5S1gTmSjEfnmqJYGCHpiwyZGbWw8wPCGYNz9ere4JSAo9ANKQsbZKPf7HVp1LVKFAk9JJc9oz7MVv",
  "key19": "bLU7CkzvjYCpqJe7DVJ9HvxKfHFE3TqyigiKgEFD9EAQErvHheJjNoC4koccYCekZKiuaC3nLivq2uHcta93Eoe",
  "key20": "3UuYzstTi1FSTwXz6jo2uULprHoj5gPaqP15KFwPN3pxsUjUAT131MbY7MqjWz3iduddfgZowdeW2ZpXbVP8yTBm",
  "key21": "5NA4bVSdVXa3SeF3FcRDA2ZvykiHmuzVarW2kEabdCe43FRXTM1RDsUkJUFb1JRx6Lhwyrq2mfuwaQBsULnxhH61",
  "key22": "fg8tMjcb7xRFNeW8s6yyrB4cpVAfspNickhtGzCEqnkaqA3uBhexfPo8q1HhS7VwMfyKLyDP9jQugPb9wM2Kg1V",
  "key23": "Mf3M6mC9D4zh3R24nwZT76AseoKKL4YVaFjXGUAE7s3g9o1af61Ab4kMbQngxxzE2GS5z2baedcQwSrDSE9bJv3",
  "key24": "54LwHwGCXFDXb4y3cv2kD1LcsLNsExGEzQdGCKjVbnYSm2CAKqABA7DjLLrtwzUXhfGGqQy67HJ9jn17tnapq6jG",
  "key25": "4zdfcCnZHumBpGzuVXUDgyReCMtTGzfWUowwnanpM6SfwrLvbWhxL7xXMLxir8r2L4NK1BRruT2pAn4uArtn47MD",
  "key26": "5yMmXAvF5iQZVRjhUsNshPuoAXGSEvNqCiWFtEGhWY46ms767iVQJ8k8DxtY5bLQisdbwHauTVc1jViDGeUgu8NJ",
  "key27": "4NNAcmEQNNHyCA89T3N3gT9aY8yYZSDncp5DmDU2o9cf8S669rNa9b99dXeU3aUj6vMtDxh8WRwoJmPqgvYjPPVU",
  "key28": "25kNBGVYwtDjrHJFWWHCsAJef1GSPv44dwQEnPc9SX8KscThJSmbPFcTKWDbPuochVy9GRX6bEoTxFsw9Qxpr88L",
  "key29": "25h8CUU8K22z2XBo29hpYG3VmN1pw6Lji49ASCT6A3rH7uPLjZXra4uGLG5gmpWXJE8btFi6hWsTgjtLR8SHSdo1",
  "key30": "5hkjs4EFuTu1rmy7u7JGqcnDLciozPJBHGmK7nX97Zgp9uEQz9MR7nASgg2tjWhcDXXjZwDYAJLwABP2RGH1e929",
  "key31": "3SrxiptPQqiMt7Je9hi6aZKtqdEGfsPDN6BXKUSQEGH7Pg4KiyptMTXJQvmWxvMN76kYiYupnkzrqAzPVEQfpgvd",
  "key32": "4RpZmP8xxyBwsriRgqcUhfWV8AXY44CvQNWczp7hmPavy1FmfEGVaCYUaB1TFdsgkjkFLG9smTvum1zEXv3y2FrS",
  "key33": "66FMfgqwChvSF7xAugVnba3QJxPoXp6Qpk9cR5Smmv9UNetB9k9UjAHKs5MT2nXXbmi4CEo4YQx1GqAunrdQ8k1R",
  "key34": "3RRCaFmHf3LUSEg5hmF9F6vEPUTW99qzQopZnTybwJYLndnNwo6XiUBiA7XpB83nzhVFHvfaZzBTV6p8kpRPjWF2",
  "key35": "4cqqrUryQxfFnftp5wVqUCrh4gedRqb8WZSrAR6U54F47Y1wSz4QbP74c322xcts4GtbrFGDkfiNJuepXCFE8KVr",
  "key36": "gxXuQuGwJ38Bagi8x3DKgJi3bezNoi9yss8ExTtvHnJ51Wz9jVt2vXMpx7Mz1ozyg53WtbQGjUx6PW2zedav5uM",
  "key37": "4AxAJN31wRq2xWUxS6kpnLYi5LKewpmxNzXqWVhMtqgs269qtNdGZTh4YDCV3joxMZwQdUC5ZM1fUfr6HkYXB7Cm",
  "key38": "3NXd1tHUfg3qWxUL7d1kC14U8f3hXfmaQq1rhWHmD4P1qZ6dy7p9myyBszT1ZXHP3Vg3ruvwJKe1kzHZPTE1aifD",
  "key39": "edNZqpqG6VzPzBC6xukNgCSTxTaXCP7CVk3QcnWm9kKU6RgRbLLELe49EcJoDcVxQc4sy3uKkKiGYJJuV54jwvz",
  "key40": "2HZMzny4EDPbjdtUXxcVT4CvEoqn88PjPPGVuBcW2HBcqx62PRhqjVgKdECCb2Z3oyhRDHJP4aDJwxaR8dsgQPtT",
  "key41": "2ukgeungsNH3d4DU6zch3771Ly5EfyczkyaizacrSBEMFLeQmeAa5xWz52DLT6PxPWZEzT94nvrvCid7ft3W1U2y",
  "key42": "2wdzHJH6pHkJXPM6oARmQcemXL29Nb2dR6kitDpLL2EJdaVQsDtvcFwHBX6iREgaje8gB5oAasuEmRUJGpTeJKEJ",
  "key43": "5i1pkfD33Hv2gxUM6YGcfk1vzBmJV1W7nKff2pp6Bn5cCWqaya6Dg6CCxf4aeJF2vL3WGqzbLZTEuy7ww5qmVQAj",
  "key44": "66cvhkFbb1GE6rchSo8yxDUcHqrFXGoHAGfCipLdNXKNCLcqMCoAJ1PptjVx5suJEQEdN2U4XrjPGMLuf3XmgYWY",
  "key45": "ETt1TjBDMMmMFyLuUQ4W2VbCJGZvy6en4qgYgfxnMatMki33prSZ941kBCuzWTY5sVh93VUnVVnpGR7LHAJmuhv",
  "key46": "2ztC9zWxsW6Dri6CdKJNt3wFZaijFo2wyUn1gcJmqcribEGRf8r5zdx2dwo5PXJ4cwZLwZnAyfE8QfNtV8SmPmFn",
  "key47": "4jPYbHmara8LK2ByKmuW5McX3naAD5rNhnxm5rd2GBcbudqyHkBBCGh2whvdCxnQrS4iyRYU9Hp5eJ2jRuM9CmVP",
  "key48": "2pmkmyEPredv8YuSa77yhCQbZKLCi6MY2AwVuS6yBo9DiLKRBga322hue1wgQcJsm2uihbfo46etKvyS9yZaE8tW",
  "key49": "5CVx63H7Bh7hxhPwiLzdg9QZAXdQVuVzTveM2jmYF1mgr8Kiqpq77wuDW7mGUAaZVtmWDNbGMixfDjW921o4ej9v"
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
