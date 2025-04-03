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
    "2bNfDPKSgf1TsvyB7p3Zt3wR7T5jWQFNKuBQ9LYjMq1AgGgcuHR8fkp9PjeC8HASTvYoraLyXanM4v5YoEYqxeGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvH8BvW3y54kC4hLRaSr9URXWQ26amFed3pnsM8riqzJTCQRU5ukQXRQS9fezGveKgeRyEekZXaD2YmAJ2zUjwt",
  "key1": "5DkBVuAouaTkhHVKE4qEsF2ovwG7vDqBkVkhTDdXagdf3xy9E4mZQssYK97TZx5AtvpFrR3K7prZL64kU5KCWXMc",
  "key2": "5dvgWbrAc8sruKWC1sGXKpJvfdTRWCym1KYQTiWeBDtRYFgyvHmQSHXU5t3XVR4waCDmcmSBD9CqMdshAxiVShMm",
  "key3": "37YKpMVPokBqY27aJbZ1VdSWVEi85zBUDrNqSsDay2i7DajyVxXBUQKWnQYHK4gbihhoW1CD34x8Tesf99ENhWqv",
  "key4": "2y2hwABMUpB4pg129GDEVhvPTkE4Y7BvfUaAFwq7dPPKg419xsHG8jqTw7p2oDNJEAAiZH4wFsNmtrwCZRkoQkVC",
  "key5": "3jPMY182YTUsyFaM1PgQEses12S3554L8pv5KKoRFtcTtaoW9RVQ3boHQ2chtSxXjbtEVkCHBJeXRPCmEGYWZXkK",
  "key6": "2QdP8wGLQs7RRgZj5fyvZMHj6JQmNq8QWSw2saa9so1KhUgg4r1n8f2dh5EDpoc6p6Ynnzjwgma9ei2t9PbqMqAy",
  "key7": "2DeaWtFXoxYzBfdSSeLTz1QQtWNpPYYPsqK1Mvb1mvFfTzG9S988pomdJSWgFjEbuqfAXmrzvs4V9RFrQ1xB4nzj",
  "key8": "256zCP1GJFU162vnHn6hiLaXAg3FQ84yk6427LCKJdfcMrU4vxn1EKdZbyiYQyESDkdW8ReL7xivEGov5ZMynKDR",
  "key9": "5RjCLus8hZQR7MffutmQguLeuTq4bgfYt2Xw3iLQZL6f8W7LmmrNZuq8pduMWNaK251CMFwBxrCGzpJbtxANK3Z",
  "key10": "86K1rmUQjEpfNkkGyWYMJ1Eb6QnyyhooqsjYNrQmgHRDNdAHqJTjjFQd4UZCogX6gd18Z7TJFGnHhzhGaUkBQnK",
  "key11": "2kcNem7LqqXAoz9xAvyXgujEBCaMM6hZj8khvG6Nc1hvzg6RkQzEn6fbLipsCxNXAzG5kz51pAeVQoeCWiMeYCUY",
  "key12": "35hmcLHQLMiFU1rHK6VYrwm3vKMZ6SZ62jNtMsNdAAaaPcNJj6dUWapxnTBrR2r2pQvACzD86DJPqUiiTSUy5Bbw",
  "key13": "zGjjAiDjFBijDiHrXee8UmjjmZFt7QmF9LzchEXrGcTCGX8oQVaaMq2uhJ3QizV6VHaaraBfJfUJZmKcj2h4zB7",
  "key14": "3pH3EizUoD7tbYZicpcSGYaodxrjxiCSxrEHpwm1n9RGeUfQjWRRsg3LQD3yaB3kjkzLfroc3PvTu4VD5fEzsiVb",
  "key15": "5PzJrsGNtahLLAHPaHQDTBLTti8mpGoDVNetg5nmt1morF6pbTuRVEzTF1JX1PBnLu64rjb9aLKUK97X6DZDN3QH",
  "key16": "4CA9PwY1XZemdHqsKVZqfcrMyuxrj3RXhrZugVvRk7xBVAKYJEp2VZPMvcexW1jJHztvc4UwNavrp53jyivUJNK3",
  "key17": "2Kfgod9jKDJYkpMmhMVAAUwWRj8a5WgXhAso6L9YwmQjP7hi15XLyuvzcRLZpPdtCexQHYkmzVvjJYTgfbn3ZTbn",
  "key18": "3ZyDvt3qqaPB2Uy43ov2dgiufjCQgc14qJV7JANB8MSSaq1aLEcEvh84MPLdKFSRU17edscDZSoiHS3qqsuifDpD",
  "key19": "DdWMgHXXFcfiXhAPZEbj9pQvruQ2DmankU7Pca2eKopw7pR7rnPwiY2Yf3Rq31xHXEdhiPSxNaxdLdQq1UgpT1w",
  "key20": "5LNYRFQ3Zkejd8Pk6h2YCbFxvKCZzMvCvwNMYmdQxrGKePaHbGMMEHUToG9QDZbvK2o86kaktwBQBRFBxFqnCFjs",
  "key21": "3L7DwP8S1b78kESEkdvdHc45z75wLQTkxPsCG3AdLn8KKmYNKr1Yq8UuwtmzzJZuXMW8nMHGUAyiuNuEwuUSFHtW",
  "key22": "5Vrk2rkTBakegRpJrLL7yPc95YR7awLYyTU1rDb1PQd14efns9jQ3vow3BNpdswdpqLGG7KeTGpdFNgHFxakw7Nh",
  "key23": "2dts9kvdAd672UN6wmUk2B45qV3fgrKDYZehTzHtWZoXbx81K6eeepwcHgweuSxhXfvKZh4TYVHWHJPza4HWBm53",
  "key24": "4STJBZY6eY3Ycgi8i7v5YKL3xs82J6B24Q8sfRWBp9ATKXeJv6EE6sjFaNCk5n8HnRg52kVCF1tcrcn5i3BREbpw",
  "key25": "VmEv9KT5jyAW9vA8tDeaTZZyxHWFadAVTTLNx3Ma9TRHh5turV8bLTVZdC9wNcuGL4ximVDQJCKabTsdYF3345U",
  "key26": "28geganCnVYKmguftMx9EhWst8A17sZQBvShNvvrr2D9XfUaC7rfjbczNfN24jD3TyqxJPSWQYYwKuYqh2iPscrK",
  "key27": "PMdW6vs5dYxxeDLwuuS93jvrdTxzKWjCpt2hU2cFGWkvxS4ZNEaGD6dpmq7PE488sFTkbdzT7LvAZWToQXjJPiz",
  "key28": "39i1My7b3bg2TQbT5PcXRyN26VHbqmdKEoyWqhxSp3ZojCXxtVLfBYpzKZ891M5LUyUu1UQmMBLirMowtcpS1xxr",
  "key29": "5GVH8831rn8MoJ8kN7cDNh7REaJbrq6uVm9PRBZ2f3TwZGhonpJLvdeB6HTmYqM8h7FJnibVj3Qi3CtPvhcRMgbW",
  "key30": "3iJQ8tqf5NXsL9cjKSdUbwrCmPfK525F2NWtzZTHMXZVWM3WSm3CQZoa55AMs4LGEsFDkBXP5f1H4aMZ2c29ZyRS",
  "key31": "4TjMGvz5uxUFWduC7Pw4dKYw6pmELQxpTxqYP19XaXc15uEaPi6Q3FdvnUXEbL9o2mTSkqtsHhLGEvAoF1Ricgt8",
  "key32": "xN1ZxmQN9NuVzvwsXBF2nqmqjVCtTXytbY2q7wUtdun8oFFvrESk4w7NFX28dzsqFYJKvmVUyYrDtBGBE8KLK9S",
  "key33": "mqiptvXoYiihTSaxGDeYxgkrVgsJL7mUKHLeGVJBCwqVX9CP2RX3xp2Wt5vympzMXbAJEByK5sYmPMNupvADmKj",
  "key34": "5GZ34Ht6JSKjFCqspuuqyopRjnq4aPJfNYATaoYFgcBUUQZEQNyazFmCefh348bJj2DxZ5e2yAx5Ytcr11n8B652",
  "key35": "62kxabBJf8z3aHGLmLGV4oh5t3fewytTWjRJGTG8dt3h5wqiGWefJYFLJEPTAuVCpgEQLf1srMkctknB7vJBhDTG",
  "key36": "r1zKXd3VpUxDK9Jj6VEebZSG92kfjHijtxyU4SUsYaKBV4xrMZ8ijscpTQk1R26dm4ojTiEsiMgYaH5FwaSVgpm",
  "key37": "4YiPfvXo8s2M1SdkWPr8GYxcdGDxBRdjUfesunm6kNhGavHEDWFTPdwt8bHrupz2P3hv4gUK2TREfQcn9BwBaCDJ",
  "key38": "HhwRuQNuviGMQRZ29FP2ACX3Kgj4go1n8r7fFuJfMRn61rwpi55XbJQuD4jxkLY9XrKWwX1fG5F1EWW7cgCKUnL",
  "key39": "49KqxxePXs5XLPZcny6ZgmRpSHL8qKmb7xzyD8b3kkv15Yicu9v4NdZzB8x8DSb4P2bTSauNnMJobYovWp2rX5KW",
  "key40": "2EpgkknQtQQhtDypZeM4r31EJ8G9nt8YDpNwiQrgF9MXDBAViXJrnLUnzk1VN1iYtdYGE4hQzCVXVZtmv574431z",
  "key41": "HmSBnNp5tREDwFj26MmqSoFm29BjN8akKdh4i3z5LSyWoFs7S4pxEeEMs9uL5eUiyuytmjjANSEQwBxgKfx1kLj",
  "key42": "QkVgcPGYPtjw1dJtKX4uBqQeDFfFYbj6uKzkjyPNePAjvTbN165waRu6DpqVtjY9xBCMJxCu8SKLfWkrh8igUD4"
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
