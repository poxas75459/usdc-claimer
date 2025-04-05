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
    "2KydT5CgU2sggT4ckqMyvXutq94AEYUfZBMLzc2S3T3sSGaXLm45EpQuddXT4aLvQJdaEVm6PHyy8Eh5jRWR4aHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugSew2GGZeHM74C8gic75zZQ73aPSwpMXomvzqhEqy24D6wxJFQRF5znb1nN98SPSikYehxfwiMPznGTjH9oE9a",
  "key1": "24ryVt3WDVFJxpEYqcFerPU6iEZG4QVBHec58FR3fQ3tzFXbsS4q5oSWD4favTUoLm6uwNNvd6bieP6x2TVKkB6k",
  "key2": "3qjqsx7kHujBvbtjZ3XhojucYNpLWmkdtuPMwegypUrcZPeTpRvUCKHHE7hhayfVxUZs377JbLitVsZEXFbrXiym",
  "key3": "3EwgqrixC7JPTm9rArUgZaEjiEymQiBLocCm5gqixwHgf669rKvsWne7NptxBGiUZGtVY8sQBZruGLtEKiGVPDfR",
  "key4": "YSgRRLd7tMmYAxgwVJ7xSsSWET4kRNTx4dJmn6eUiGP3CmxsQqQZ29726kvUF6YiPekMpG8Tre9xTbFJ47na1qm",
  "key5": "5vjqkoaJ7ZvxWmyQ6XyxAbSNnLeYijiaxqfTzF4td8i51iww43MQCrsFtENPtEteUS3hR218wMmmXVJyRSjToaz4",
  "key6": "4guhpSqDzPFjMki58saS7tqBP6Jj3rXryxzdPnWApBnfimTehez2hoPqZDGT6iTrUAkupTP3nqePHbMR5aKtXJz5",
  "key7": "5ss2ZXzw9t4LbFJGuFqXxP4WD24E9yZpA5NgnHkUcdqCqGEae5w67a81mdRc699HNmDgx7vw9c5iwwqJAz8AB8Hj",
  "key8": "32U6DeCLV8F6C9qCDb5iqTvGWZm5h5v9ZLmXPJ34TEQHLYwzs42wEYqefFqqNW55WRJYzJ8ksZJsMUuSXngHV3DY",
  "key9": "4NCc2doCmQ8s8L5iDcAg6L96FUswfMFLoBh6Ywpfxb5mMpFs1YHQRFSMHvLMf1eN9zwuVzRrH5hvHotL3zEx7ius",
  "key10": "2fJvreGRJzLvoJXEQuGXeFH2vbnx2BmXtcdiq9UMKWyvAN8TGcqvnbGENxZTCuAxfFXVAcod29vMiQUAPPBh8QPV",
  "key11": "4vhQmtUwn8TiyE8wa4LdNiSeTpRnbNJ2avP9WYwXPdVofHohL12chMom9J7QXXZBdaE3p9p3co6zdn2BJdESTL4G",
  "key12": "3J3qvJs41ZQ1Aqvue7eKtt8pCw8zwFZmPuYTM3JFNsE1ibAdbg8xWXKPXcf54qbG1PEhUw3ycaepZjjK4RSgGnMb",
  "key13": "5P32x8hqbdfEY2ZKuwMneLg8HWkgFuyyfBEv3uJWW483LkNM9EKYSJsM8fXXEZDQkypWwzXKoaaJreTbH57LZo4y",
  "key14": "5ThptYMmDuuZtddTfk5Y4qWnfTNiCMCQ8GEY483TVJJpQPRDwhaKMJjCwPtZkwVkdkkpP5EPFGq2R5AQWS8SYUzk",
  "key15": "5kTb9jiFYcJjJiftK4213yqfiUY6r3cXCgLFUdu7vWj28yceieMjnCffPJdHdHbqYnSZRF3dYErkNmaWUBwDZdFQ",
  "key16": "2PVYXQrc6rvThdTzDbFc3a4LmF8gaK5S1tuAWHX2nEqvbwhcaChbDCp4nCDbsr88F6ARApFSGgSTogpmYSNhjCk6",
  "key17": "e1XLqJvCLguyJmXBjECSKaKUzzGvVJ6RpJdpnTAUompVHsM92AM7oUqmQ6PYQX7nHKbqYULByPx4WKE9Hv2kgmk",
  "key18": "4C9i2nBhTzoqdu8PAeJL6mNTJYqkxxZtDiwoWvQAotEHkJqDuxfuhaw6rRyxKDSRwFoNUFniG3ouF97L8189k9mF",
  "key19": "FH87KVqnXdeWRCVs5pHM5pAMQo6DhfNhAbF5hRFhTg9ZsXPVak8EoT2Ru9xBs4o24WxKzyEWS5xWXW7PXLEuGrD",
  "key20": "3ZUnWEP4dF8MEZQ88cRT8QeqgWT5P2yG2HK5GDHo5RE9KewyUTcAUV8kt831npms4Ep7maexGzPEdjWGR3sDCciA",
  "key21": "L91C4KFZfo93K2s4CQhgCMuYrUFPMqDK636m5oXYiE1kX7HHhc4HN6TZjMYEF9YyLvwV76CPS9KHWw3D9WSzKA7",
  "key22": "5znNcP5QyGZEm7NyWR65pomN8vmwRJ8qWYJgvxPfW1NsL72umKiV8ipR5nMjxv6ZyHnnCwhTeWMuM6PxiHYw8PSr",
  "key23": "66wXKczmeZdsv4Mz77zeLMXDu8mAGWv1tmdCa4DoTE7xyhCY4G1MQBQFF2VDHLHVS5LDtgCaGsiSmY58gLL78QjY",
  "key24": "3FJ4oUxkSrMXZgogijKUG8H97YfTrjKjoUMLtjCLf85tqM7scNiSkjWnM1CNFjkSNnPiDSwZ1FQBrhEgKUwcqWtQ",
  "key25": "2oq1ychVZbvrq4zP8pqREKaa2stFN6QG6XTn8y2qChVRoeiGTfx9mhjHGt8gyFh2zY6VkQb2osyXjQZmF3zQHBet",
  "key26": "5sDYCakYj1VVkRXuvDGZgPzrMhENJb68EKrpTWUi23q3ReFVoFzMpXCAwaiFT9e2CubfVfV6eN5Y8tZ9oEswegys",
  "key27": "5bQUWDu9HUrMmjSJ5goycEE64zMjV7ovNEhimnVGPFk6Bwuka4mHoTsWicNwN9kh8bHPBGpVUkf8Lx88Kz8DGtQC",
  "key28": "4wz8SvTgWqApGZXawM4Sg16RAB4CiBaQ8yafceD5y31XDsF68MEyb1vaAv4to5AXezV7Bxc4jhrkyUBBdnsfbC6i",
  "key29": "5UyLmV4oKi4Ms2gx8tUQQfK9yvimgkizYajuA7LLjxTMAMiGTwvtdgNdWYCFmhxeukFWzGPsj2ovbiW8BXWdzSQP",
  "key30": "3nC5ZtfCoUUVj6Z5wYAh8fRwM7EQfg751CWphZmP1dKWJB4FzuQo8eRZLjedeN3LPAB4R8uiG2j2VAgL8h26dHNc",
  "key31": "4bRxCo9Er9LAUw3GaweszWFDhwnbm7htcETqdi6yZuQmEKVAt6eXfHT3Rpju73JX3znTtQuLCLwFit6JgY61Hh8R",
  "key32": "hRd576Ea2xBuC9UUpE5qom9ytT7g97KsH2uZHrRUaifBaiBCDCArTwyjSvEeaFzTwxY5beJ8i9wtKhLAYo7d2GA",
  "key33": "4fUwmfGHL5Gpy9QbP5HXadp2cqWpgJ214rUG88ajh1jkS6UtCquwDJSxsuEGCMm6jSWNEJq7h71yhSUeSm3N9CLw",
  "key34": "3eu6DfqJb8XBqpxxzWbMFooSnwvgSifCqfFZeSmw3k1DrkVRQmGT95zgauCdEHv11dgPM7f8ozn9sMg65kxJELBg",
  "key35": "66brpBYq9QRcbQoe3MsiVJySdfcMe7UzG6pg9FxHeHYFUkBnnhqCe6m1XybAQQEppx6khFdvYZjwDQUsE8zAsYRA",
  "key36": "DbE6XkwNR44y3phrDFaSt1jVAzChb9LWmb5Jt84qmJLaKKXvXq21DUcrvYb9p8g1vw2ecHkvgg5jrEksbufkhCf",
  "key37": "3z2TN8XdUGUBxdzLB5BUxqaPc6nDaos8f5BixJLcrnU5qePkWscgBDimzV4PzFf5FfCWFji4nDhw1xSii8oi9Sxc",
  "key38": "48RQHRKjNVrJ8H4WinBJLzuah1G85sNVKgRu432WycY7RztMGSpmCa975xaTGZmrfCysHgxQ2mjpLWn2eH3UinCG",
  "key39": "5TsASxiccPasXLfb8G4t6yNqdaSyLXAXt448xkP8cwEWPwQF7Ws59S15mZ37oxw2cEA5dUKJ5EDDbYjqRVyv5hP9",
  "key40": "5rNmuAeNKXKn6ScCfMtp9tkK3QqJfNaiqXtDE18KhCMxrpfTUjwDX1H4i6fvzRT7mq6Mk8oHcUZmgHFSyME2vSPg",
  "key41": "3bb39JGx1ofL5ihkm8QkVk1iRbQw2qWANousYLNqiEc78udQorKUjBzUC7TzAcM9VubhnVi8VDwdojubpiD11quR",
  "key42": "3zzxmjqKJ2nw4xq6vfTnZzCPGNyQ7z2XB97KdXgZ1fqpqHLmSJSngDGAoAbiy34mWKDPP1457yxaf8hrVLLSqUHf"
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
