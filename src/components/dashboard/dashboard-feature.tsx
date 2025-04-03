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
    "5oK4o3zsdTTZmpKhT2Fv2yGNagPFj5QHWk3V2rrRzkjN5iiWP7SRaJytzqR3cJpPCJ8wm5JvAjZH4VHpieKRm7zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GftKuSaYtZ6dq92pkiMHahvaY84E2jdQqY7bah2cwcmTGLezRMcqxhem3R8GGJmq4sHFGRzjfWzHrVG1QorZk7",
  "key1": "2Fg1RSA9xU4FTKfhhc5DeYtSdRXnAyBwb2YK899FL3uKkCtq5FsFGxavvAVcY4QfSXYDf6RxzEndBTj6ZpYUfLpF",
  "key2": "4VxoqmsihLoiHQ4Gue3ozxTAXdqWNpxoPJnvNdJbccArKWtMgt6JEsovweLan2GZUK15ADaZbYrxLanFMgkKRFhh",
  "key3": "2LJyZihTtwcJW7suzHQfvVB2QTycdT6bMjoxMqYewge8wmdvFTtVNsNa9bRsTJnfooY8hrWXSwRpixJCwQrdkq2Y",
  "key4": "5nBhnvbpu1ZqiS8A3LuV81E7fooiHZpqHRQWPqGwn7p2dZYcBz8xphQeuxwq1JRjJHbWu4tRK9EmT3L2NhJAuFSn",
  "key5": "2mRb6gPEuhSSvBrHrYf3UYZBxEc56LX3hKZtfcJbnah3znnEthik6swGXuVzZ5vmvwFKT2mfYi6ey8Ye2vpWo3f6",
  "key6": "ExG9eNYZqXVNx633U6YPUwbGZUkqB8dSSQZNmJudwKXATydEBDFr3jHEVk2iLbWEWhxXnb9kg767EsWwwfFh8Fh",
  "key7": "Ai836Gs8Qut3tta2Dzfa5uuGJJcZnD8ywBjrDvK3acVaEgxNxCHk3z9vXnomR6YvU4aXRFNGaa9woVRmi3HguDh",
  "key8": "z4LvPEb9yqCQANGXBz1GqKkjTFn6DiQX4DWLAEHDNnM5po7MHY5vbCpAyNm1YB65EoMW2tyccQqr9NX5TEawSqz",
  "key9": "3epZicNFD8pUF9mxy3WAgwGmZojiDFHz2qiao5wUwsjMZRuKNXRfc6kPCH8Qnx8P34TvYTq1ogt7sgqraDNJrYCL",
  "key10": "nRfyxNg7Tw3nAvAmCGeJXtfcED2C5nXTL7KuornPGFJUJRp1HzYwSiqCsTf4uioPX18hnTHkBAimXgCS8wmSwo1",
  "key11": "5HpsUH43JLAGDdSE2W8xMCvtLccLMcfE9aBQvPLJq77ngaaeewUiHH9aPb9YNk6vbYYhqGvQWoB4BEvcWEwxWG5p",
  "key12": "3DcbPoNZE4qDqdm3qzApCLfwZzcKJg1xkEJgA9VrPMMc1AZeF4bneG5KWaKqZ15FMEnNzCHdnV1zx9q9BKT9aYcj",
  "key13": "4UsS9WxsiQX4PUWa34nSH9y3R8gmddar17wx8kFz7gN4abXkMvof1jHYKVzVo6KF6o9zwA6YmjWzKozCQBHgHw4W",
  "key14": "L4D4tc5Kq92cGgqp5LfZo5LE6Lr5mXQAw2sV4jiHfiGCwefVTbtJnGDJc3W3XPQXdXBomjLo7qk4e78iyLkpFRR",
  "key15": "5D6pV77da7srodsqydxjU3A3JFTLwYE39XJ3WAfACRPJBtgXL3iaDsTd5gQwPqCvtm6qpfuVaPkDKrBAAwjkjSRM",
  "key16": "4irsWYgwVQ1q8mX4759XXUsHfBYigTpQVQvkk1x7xtrRAm1YHk1GEJ8uKxMwUTu3zsKk5AbTzht3TFzCcfny4fbr",
  "key17": "Qq6LG9gXQ2nwu3dFxe6M86onrCPhHfPazFB2YUiuDDLB5bBkwNgetxLyEJCDny5aQU5aSRbJzDwLJ6iAhaPGPqq",
  "key18": "3Heno36AMT25ypWQioYQVLJJnhnQaZ7ecQzv77eum2F7cNEUhHxS3WRivS2Ecj4ZR39vvDRUmsiopGbSBZu68fsA",
  "key19": "3YdXxnNpvChBoD44DHAn6XabFNXshcTnG8WvmnmQLnCJa5pQZum6LmzkDEYzKeEYa61ubzUdkNms8jPwZrqH3NVB",
  "key20": "QTQqoAPmJjPcgxTQ2X5hwTWyVYUasVdQB4C2i3QRxoZRmPpnaxJyM5Ku5jFAuvYQovxbUCdZpD26zzrKxU6U8oF",
  "key21": "384ZgLp23b3JteHyVLwTAaCxq5mUKVDB6yJ5knCMKMyYVaPbJcwsMpG2Eu1gyCoBNZxzqRnC6S3c5pb9bHrk1dtt",
  "key22": "5XpkWCNmqTEbxadqNrx1yoX1u43P6oaukkyEoG25JVPWQov3bmDbfM4Vvsbz6BjwtAdJmoSCxWSGTzA6FuRNk7U5",
  "key23": "61MVhuBhAEKT1Qwi9PRRcGQGpTK5bnK382bmVUEnjvVXF6qhGwKVWGc2fmBwxf134yZgDFU4NwqGK4kcKTVrJRsd",
  "key24": "5ReCcDxPXyU28BBTiQJ3cdmFC8mjzHggHSNGVhR2mbhepCVKHpr2wBXdoVCXzihrqWZxyPFQvjQBM1xz9Bt47zsi",
  "key25": "5CxdGqnmz4ixRjjgj5QJhsykMTn9oYo7zmdR46zbReJSzj6ZzUXVY2ZYk13rxrgmVry2MdtSYenRDEF6km4qrSK",
  "key26": "5CyCcoeRYvmMHk89KJdFLe8hv4FMLKLMEa2imXoMv21cszn21xKj64h5hUeWkiZz98smjy8p15Lz1zmypKZc4SL3",
  "key27": "4LX48ZG2wX5qze5KWN5uk4sk1bzoiiWYZ9EqKSwTWcmU6F6enoHAPxNpMjGzzuw86YE4hDyd34ejXog3VJsji78n",
  "key28": "5GDdpBUuSfds56oDKc8bj8XJddKH6VY9Wi5CmwwjHw9RD3bW2jMM5FzwrAHBRR6pFvVLDjLTXAyp81kwa9vysB1m",
  "key29": "64iJ8MAmJ78emd6tHigJqBYrYaef4Gcz4F4DsN918p468q2dzFzBueFKnqqA34spd5nvzq9ifzNdee6YQyiaHGaf",
  "key30": "5EXkfecyXpCkDrJzSdWC9rFRSNvUKuyXdb5PNo2bLMthKv8Hhm7MPfvyZaojMF2YkyEqTvXaEMMR5GYdjYekzzAj"
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
