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
    "2dtsEy2Td9DMw4MysVA5qqXQhHA5obzsXNQBxDGCtry6jzWZu8WM6HkPQj8f6JAF1RgHxGQ3dYCWFJ8a65utfxTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYdaRJXvYpRDuefVnk34qCQwe96NwGEivuSHUHrVoNnXQk6naFFqhb6wU8umyDRn1rkpN6LF88crCv4dK5eisaE",
  "key1": "5aZ4TFLStvCxiKHXSTk1GqqucfugiVnpx36wXut7m3zHEKKG3FUcnw21KYe8ANrySZQvuoXtV37DVUSTUjM2CQGJ",
  "key2": "TjX69DjzgC6kZPxv8GfnQH1MefVMkHJXHoQDDdsFNGTg9TSvAKVh7rYv178H1LiL7xtgPG2YSvYrUuXVF5CEQ7W",
  "key3": "2r479Zb5L2WAV3s8jGJUNmkwLjfS159VTK2cbd4fSyCyPpoJLvGim8Wdqa6fmyiN9yrSkJcUFzTbRan8sY445GcY",
  "key4": "2DrXxK9YfpTB5RFzzqqhfoHcuFCZH6jDVSBv63F8MwzNKbrx46zZVk3he6Jxg78jkLmRyK8CXyLSSTnhbEB42MRt",
  "key5": "478WxMrrexGNyeJyrtyg4Ca2RtTyAN4X6FovGMQHRf8iadGQ7rgpontk5pqZqsQgLPRXkUWGbLDQR1UvBQbHGYDL",
  "key6": "zgZQJS8AQi4gTtogTXxdQpemqebyKUHjQ5bgcb8sH62Pdhw2upQ6A3r1vDPZDUk2wreaGZLZHfSDRJV48Raw6G5",
  "key7": "54Vpu5h3ByjEbCMvxXASYVKrMFi6MtWMc31NjyBALj16SVNivoJKz3ms1KBpdL3e2UZCvXGynDnYnRC4YQ6mMsNU",
  "key8": "5VY8giV4WR54kE9UaM1nsJeEJziTBXcTdp9PEWZpXyp1DizQWXonX6aGVZdbEGHpdwvKbLoLVN3p777m5ueBE8nS",
  "key9": "2t8Bj7FZy2MNKgjJHwyUevmCt4GyathMSGoPnzRnYXJrCSTsgNeziDuCdq7ABqFSxiKqiadYGNGwvXiEi1oV3UzL",
  "key10": "4bKT9MmwNVGvmfuTaaqLXDmFujZZo83arpbVXANkddVPV37VoBSqwN6TqYN3RGCqXAd4r8vRMp2f1nH7udBeQpb8",
  "key11": "4wSDdpNQtzE8d91S3CPnSyq93FUFj8B4TJbCRi8WRVFGVMdK4aeDa8zyPJNayDmHNdRppm73YwRASHsEUkY93LP8",
  "key12": "mBZuPggng6FH1qos4ruCttgLQv8McufV5RKwiCAQSz3zFLEqT7fD4krXkELbfSpMbdCSXjU91Dy4UUXJwmwgmST",
  "key13": "2pRuRVX4yZNgVWwdcfTF5NaFsAk2oB9X6saPyCfpapznQQieP3J44yN7vD1Tghxs9JxJpPUefHPPCVo4dSfAHnbx",
  "key14": "9Ubo5mrQWtDSKrudzZeENcEa69BY4yHvKZ3JYEMAYnNYvj44uBJtaPKZ1eHgHUdnfR2LSdazsRUrSguDZdTscBT",
  "key15": "2MLTFQ5c6t31M1jS2p4uTqvXGh2XxP4MjhHgBddF3e2ReDxDMS2YFqrNSMyUTYzVBWHi2SecLfcSvsJHMFdxMQ5V",
  "key16": "2zFpHYguVbXENyonEdnmVEFXG876F8Bk8GctBArieBqJvoxxkNe2CHsKTr6XMgDLfLdNC6iH6T3tiNMVrmn1X83c",
  "key17": "oxmiBhTjfBCRJEpRKaiSmwGRU32EPzRSgj3eTSb8k58fn9z1TkY9cZYxRsRDsAyrKYLRj9FFNE5xvixfU28wmPz",
  "key18": "3sQQD7q2DGhcQdhsJYwnnxNQNQtJg5WtftjzTgq4dGLNHfu2ZBs5G7yJN6PDnsyjG9gUtQNNUZzfKX4GZZF8cLUA",
  "key19": "4QEEWBuT3F9o2zNCvfeoobPJkZW6p6vocBUJMALeszS7D2anaviBwi4D47EptAjSAcdVyH5brpDuDitZXv8CTL9P",
  "key20": "3iBNtqkpJ5Tgbr6qvdMYcqQGW6s69QSPzt9JDUdwGpK8KUrMAiHfi75CgtYBP1Q91fihTz3HjaRGJESRLNwQgjBX",
  "key21": "5sNyfDv3NdTP2cqGfXmyrVp2a5Gk96pPKBXA62Rj7pNBYuZ32QUM3c7TQQe6QATGShmesn43VhEqxCK8HnHRJokv",
  "key22": "5GwAq6oyfknp6H9mxspc5ZBZQS195Y4v5LzYKPLJLP7E3WPwA8dpJAZzf3c4oSUvKL8ArfEsWRbegGip14Nf6bY5",
  "key23": "3QcVhNPjn7KGgka5L6bUwyR1Teg6exxT7wm8A7PYn4Jh5Q8bXnZJupxM19vbZbWaPZBWcd4Ewg83hQEWT2ioUZAb",
  "key24": "4hLoB2Ka4XQAnbMVu7pxNeKuKaz4s4nLt1LPL8Fb4GcawsXNwYGYrcQtT9onAdWCvK9uWBpeiFxjwnJs8RrZ8x2i",
  "key25": "4i8tDTQ1DWQGr55bLXXwE58WNBUJsbCzVos7sLZSW1MuShvU5kCQWVzVikovEP6ibvQqbjvE4PLUBaoSTvsgg5Bn",
  "key26": "5Tj1AFGYrJZ4qZkdoVHY6hXNPUZFRzXSWw2w9a4zK66t5FtDyRztDFjLow7XqBfczxW8Xta6G5v3iAxZc6UsqfL5",
  "key27": "6c6NhpFzSSmyWmJSgvVJhTqckMRSd1bWNSMNQZ83WvTRX2AxGxdAWEEbsk9XwzZ4RJJbq7nXt35yjRXcVMA1RL5",
  "key28": "5JwAUPXMx3vKidbAqcc5xvKNq4V5khapfGMNRDNbt5e1WqyB9EsjcYbbg9cxq75Dn4Te6aSABJ3cUDsjxffuQAjb",
  "key29": "4JN9QABfCDZdSE9fn1XshaY8C6RG3T1p6wvdKJmubNsMv5dEvcDJ5416ab7atAipYZD3WkKejCrGAYjiQprF76xm",
  "key30": "5VwsEQwcwNwNedY57Gj99Q29MimZWAEBHVKrNqB1UruzdMdQP1ai1UyS2rSJtpTKm1zxamDW1V1QiHcWShS9HvyW",
  "key31": "59aYo219tnt7HJPSoA8uAWdQH6r4A2JNrcsLzPmBsZ3UopNLP58KPLspAEjFX81eYfv1D6cdqyazSzcxX59RL4iw",
  "key32": "5cyJaqJCk27AUARu5BXobXxiKdQgvkduhcKpaMetTBDUS3XVgzACogaWanVicjVzJbyxNyVxEC9tqC2s3GKXek3p",
  "key33": "2Lzgjmhkc8GARJxXUwR2tciiU31XKqA78VsTpSzjTZBsofEm3oUbtbiFZnxEaVESDUgSjkJQtSvVETQ3DYHv3zvq",
  "key34": "3a1CpmSWqujFuK8XAjuuK2eEUpYBc8a8GfwabJJEfG1SLxJeiZdM4PQninHb25P7W4Mc6z6TWytso1CscjDmiRz4",
  "key35": "5mTMbER2Gr21oWUDYkGPTHwyXgNZY1juZdX11ADy9hsd9NA4b1EuF3cWQU972bt8TztgXB4YvLf2oNEKVKQM2LwP"
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
