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
    "8X2tvfky8VU2vdkqkrBHJDUKy5FtM7NJ8rhJsRVpSyp4wK5kUDGWkqwpdHtmcakUVBbpfsFChu32fQx7t7Wad5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVcvM7ypnFL7KiNGayvpQSSnSZMnZ7RswapKj7aUPVnHxEy1UeT41gXAc2CxHKCwVNmj9Q5PSbVjSrUkF1vm8g7",
  "key1": "2B6HoN1r7byXQ14YxQdEUHkV8BKPFzxsWic59aZqCzZHn31YhB32kgxtrCSbiDd2mjE4e5RMqV1MaaopS2SkoYwC",
  "key2": "ABUosLisqdpb1fUtNRdtCiVYMA7cVpzPMmMtfWqxdcBKPG3i3fUzNWpEske3JLwA1nxCNVLEKJXykkmGPNDiQTk",
  "key3": "57PWJ1Nt268xZ1CD9fW7Mtwxw1BpYTaj5tico2r6YJBa2it9KFyMfLeh7RmsuXBpJRBi3LaQcdjYEpTJWQ7GRYfU",
  "key4": "32rNKA5zcLUgZmc4L6fNejxrCzYzN6dQFuWh5JYiAvT4fcB8Czk1yvPQRWW3ag32ihyrNUxYAv9TxiUeFAAqL11G",
  "key5": "4T5182tY8gNU6eNYzT6Q8JSSvDwFjdToDUpRp4mL1f94cAdjqN3Q19iZUkgZ9BmqThvaxq2YKqXZkkgndMsVTvkD",
  "key6": "jajJhM5LwaUFVTVXtUK7jDJe1Y9Vz4WWB9TwnzWw4664SJmtMdjwJaCJpyknDUAf3bKFmprCJzvByh1Ct2ea6jS",
  "key7": "erhPYGmDEyahKNGJ7GhY4eQJW82SpxUpuPyYGT1WRggLDeDBjrqSdajdjrvoiHC57SntTNVkhCkXCWVS1EgweNs",
  "key8": "23uPrXw2AE7UoGNQkBu7wKVguiGqvnZ9gNKusQ4FFEG19oon3goNVvjY7fsWRnSA4KqsdjeroChuEiQjzxePX66Z",
  "key9": "4NDYeyUBbnUxaFYKjhdPvLeV8CgBLTCSei1TWNykQaUEuhihUXFPt81QJBZNfVV6sKFtPEPiGtohg3BX2xgWFNEP",
  "key10": "4LT7XdMiEPwEHzqdcwsYPzbkUe4MBBc1VcF3VyCqK2afaWAaNyBUwrcSa73MWjS2kJkFrazMv6xJPbJtDsD5zi4q",
  "key11": "5GLTVhruHG2wPaTcEJ88Su3aNvikH2SbuU3hWTXpPoyrWZj8Fbb7mxFzkuc2CrQnA6gtX4X4hKixo16mKKNC5sPw",
  "key12": "4H79YHE1HoY1sD9Tp8tZHNWzywVtf9Yw3FouKfEPZMgS3Gi9cgGRjEKhLat3ebsuTFkrYAi3GjhU7ACnm67hhwzg",
  "key13": "2wRbLaUJkBXBiy3mbHbYU1Mgg3C4QnH6ZeWTSWu7YrcQ26KzAqwyjYri7zkfK3aNwBgabakZ4CLRepV64PtHrmbG",
  "key14": "22vXcmrsC6Ax2vyaUgZQKuBbTGXRKern78EugUxcGawxS83ZGD69CSbzDXM1aBdj9uRi5Y6MTamr1BMVJj4gYPnd",
  "key15": "5o3qAEwS4ynnsvoto1Yf32aPJXoggWDH3gVBmdrZBzh79jibSS1a9dBTA8Xr9VkQhHs3wCVGTfk2FKgCertxBQjE",
  "key16": "zotMqcnsPX5JnAuLDkMXwg4WXsVo37UAu7o5zea5UwseJs1XsANwf2e1km92LCfgxwdyTaZirb1XZ9FNvNgxTnt",
  "key17": "58GpNBoarr8AQjg63XyKL33PJmb5PWCB8kLNtsJt4YNC71jG7QBWJcwKuMxy1tKe3HVvY1irmAwdZHuVXwMjDmT",
  "key18": "5jx2Bjp957QEQRdVVQYnY7npWbDzCZL1zCfnQYJJ5cEMgqQxQdNVPYpiMUoD3GjLB5BmNj8BBLjPBjwA2oW4icGt",
  "key19": "5bLxDBi6dX73ScY4qti7vQmjoSuxmxqwxEwiVnYAENpCijnTp5mG9vbg9Q3yEz9KoUso43Y3yXtqXtVETHHJv9qF",
  "key20": "4mYcuekj4fdx5Fy3ypLtEaTnKo382MFoS8sjJpGtt7jx7hEh8gXg1MH4eoGiEG5UoSA96UPo3s5JMF4eXs968otJ",
  "key21": "4WP3YT8n2TPxwV3cTC4nn3VXE3NRuFNt2yQraq3x3mjfau7c1fk56okbUbc2M9pXAoB8vqrnYGDsoX82G8KfcYH",
  "key22": "5rXNN7eckb11ooJwerqKab4zopMdML89eVCqYFxhPjfzv4oWbHxXiKDuyFj8KfUKCamU4EiBRjvWxGrZ1sdSYERT",
  "key23": "QF3NZbLVCnxPTDP4mXKv7H4ePUJcxXKLUHsFzc2hRaKhgFxUJwTfNRRrezZE3t8icAEAHuMyBBytMPB7ZHqM2uu",
  "key24": "64aYc4AiYHXZwwhgjY24xzPp8FFxHnTaLgLQGaFvwgmsrJ6CV78LxEsJ3KmFM3wcMUHsTx8N3D4BERsxvjUp5QWu",
  "key25": "H7n1GN5rquGeLCGJywQjY3Mq8mFUtjjLSsprDCHcvgVjRqA9K7edE9eHan8adTM4HYDuYFwySCQxAHFhLJ6iDpC",
  "key26": "37DLbnvtHs6HGS84zBhurZS1zo44ZB2tUt8yP61fKEMfnVYEizr6sqWUwU5qH4oWQ7E3UxYCmFKAwitqNw2Zhsgp",
  "key27": "Me8ane8VhQjL3DLvzVcWzdgWZV4XSfKe331b9kmHEQapDQzJEzQm9NCaof2o882mYm4pJpf4J1j7r9QnLqjpQnM",
  "key28": "2hQP69UUdVuGgWEtkyvT71EVahDSgFy9PxsUZ98YrBJimSGAvr4SLmYEHrshcFEu6kPRLxFhdiMq2YcLJmZjGmGM",
  "key29": "5RFYmszrPLuCDM7dq1p4RVTWokGfnuUnecd87fCPkA2TURrXaCBdkktq3v2rP3FeqhjTGtZt1HFCdTFfTSoJ1aZ5",
  "key30": "4vB1uWoC1sbybMZ9QXnhiQzKTzEPDxfgkL8sLAB8yWVfYhHKmx8mV1e4cY28EsosSwkABAJgCxhAAYCuHkHAf6cc",
  "key31": "Kmwh2TGwUy6wmdNoKciZv1jJJH6TXHoRQ1RTnw2uwff6j7mVmSYj7xHCd6bRvDaHah8tDcfzGsrpWKeVNi3d8DY",
  "key32": "4arQmSVTQ1WXgLPNbtvgzcGeRq39VebG9YXUg94a7siUvXFFDcX1LLKvxrZbygwcUcSe8xR9UUrRH5usHoBqRRz3"
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
