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
    "UwMur9LJNtZgb3vNk5vvMda3RTWMBcjvXXF2UMjZeXmw8k71GzJiZMussy7uUN1waU9VTCwMiuwHpMZsxt7pFjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y7iUJFupUopp4jLbeXdFztXUoZw7xtxtAN4Tj9rUDUbjDTuP6CEo6M8yGVkLH35e5Ha56jig1oW1q1wKWkmj9KB",
  "key1": "22GHJVefjPg4C39ZCfdGda5aceDYTdAFhRS1acANLNsWjAxi8R4BAdvEthvcSE5nJbahTZGZYY3LkcLtKqQaPiL6",
  "key2": "4YJUAqx568uHhemSZt6a56e1ixP9tLdRRRzGCZZ5APf4PBdzcGkSwLeb5AGw82n9gnzZNsjDP3WaWRe8BvJiVspB",
  "key3": "3doyasnQUZTKPQZXiDSNKk4S3Q61cTcVRgK2TJ2SWLRQFchbt1En8LaydH2Tsfz5hdcGXgTx6SzG2x8YfqQaGUUr",
  "key4": "kWdeSV6Gmv7hbs1CmgicSncY3K5zNNaYSJEtXVtpH389cwCoMHoWMj2Gq9UdQo9RPg5KdJ5zpRDJHq4DfH6gY8m",
  "key5": "3MEaY3P5vE4wwpdBM54WP9Ljhr1zuPdsh92SHYUDjvMFeqNNQijF9WEZjRWxvrUA9yM64w4ShLKuQYqVYwk4oZbU",
  "key6": "2DjBNzBRSvkR66yq2FS8AXExKY4CozXFLtvyAVep3t5wZo9x494FXiYF3wk9sAbK6ULSfawUQCoeQRMpnnTTSrYJ",
  "key7": "2XiLJCypLednDR8mBq83mubNwJkiSVV7txdwsdTuExKtJiHHz61LyxTTvF5SG9UaBdfV78pixwyR8gu13Luikuai",
  "key8": "4zKy6Jc5GWqCqiiAdwKvxeTionH5suTt2pfsEh7WngwV9CFKS2n797UBbrTeDDuPzz1vDjuaNWGgtt1i5uEu9RVk",
  "key9": "5cBos74suR55Uja9BhHY8f6wTUAaMnh8MoFmGJNCzRhhR7DzWMvnc7KAWvVXg5ENotchUYbFUYe7iC4oxGR9sSFs",
  "key10": "36kzReuygLVxYzWEPWLQZMvSbDmjyRXXtDifF6TZgqRgKPsCkYNAJrwDMBMBQkZH3NX65mUwbA5WoMicm6RVfFMK",
  "key11": "5FFXH8NvTURHFAMoiZoXVEbCrkpanj5JpuE8WwGbhAY87NKvWeZrEG4a9kvdZcpnpDD75z82R81avhuEk9DKZsva",
  "key12": "2xqsru5eVSfsmQpme9LgBfi2i4yCFyoipTBa9EsgMKCPA99J3TqxRVnSEcJBYXXyMnYh2kiF4DwFHnRwfXN7MoVg",
  "key13": "5k9dNNCQSFNJShh7fh8zFxZxwHZ2xWe46DZE2Wn2QLyVjHrnHFY58NE1wxnKMkYwDboV6czqTqX81j9421AydxvQ",
  "key14": "3mqNFsn6RmiAKPj2g9SXzL3TyLoUCEZYWKy6S69VRi5yyR7QTFDWYp7B2voAA7ZFEqZ35dBZGi3bnNQUu62Z1cG",
  "key15": "3qPdLR2MaKuUp4oQ9x7cwW4m2dPDH7D4Lj5qFJUfT7BXHgSw4QEqdgyb2rZAmTFA8MbZMomYaex1zbC6tcNnMS9s",
  "key16": "jxa1AcuTCYxX1nKjpQe1JgCBgMN1aeg72Q2bgGRKYQbfHpSKhiGnNLWvpuM4prWgCg18GpQFSxygLwCoY2jxZzQ",
  "key17": "WJowPMLexPTibUfUwFHpuUMHKc8M2FYKwQXie2pRE1wLFFq245FdGAfDtanGzZZ3pycsWBt6SLaDJ3SSaMDY1cw",
  "key18": "3drUt8xEbfCzrdnmbtMUivUSJWPSLGbpCaXoxekjdJeEL1ZpLttrJ1BtitcnnAUbQ2nTwasPrv9wgqUAs9vDhqRk",
  "key19": "5z8ZggygiXjasKQMWnxzpxxtJ56YBGpxCRNKqK5ZfrgsJANfEzGQJbqcQrUjCKEYb4m3iPSSYh1bt4Rma9MrEDef",
  "key20": "4VxdUj3nSWGiD1gTq9NmtvKEt6q7PwncaVgiTwzdGExWuaphtesh4CWjwKxeHUEJbAz6VwDPn9PHtM2fE1cJWM5Y",
  "key21": "4Eu9ggoegX66geD6b2DcgaojHffb396Qc5F3KuHH3PxtWE3CvKT3LT54HG3chxBSMm2gu1sCGr7eBJMtz3kQnDik",
  "key22": "5LtF1v2jXBxGextXXaxpHCAmD4xqhtcVqd9tcD6oiJ6Uhsf5CkWcVJS8VjArpUsa4c8ALbEg65UTQufuZj75YLmd",
  "key23": "4SZ1Ahfsn19tUtnqb9HXKodAMfQYnJELHYt2ocQdyxg6VpV4DRmopMQqjyiZ6tqNqmfhVgQ76CEuGVh9SfnEN1sf",
  "key24": "1fkvLJv3QmXiK6H8JhqJSMtg2QC53EwXTwMFxKxQfP3VtuWkuafHFaYoQtWkAgvGkyfVGRnFCGET6KFiSmJkzhJ",
  "key25": "5zsFPehrw3Xq2MnFUpRcGNx5bjKHm7grwVmCRqPEVYaw1VU7CrrHP82JXQDmSrRohNi4hCp8qrVmDLkoDVnA4wHG",
  "key26": "W3w7ZPxRHHvBaeNvmyq3qVgGx83eCMdYPdquyJvXzwbU7NUJAb4BMqLHt7aLV88zGGsjo7mGLpVVCJ21wwQsqav",
  "key27": "7jYyUnFNamvxGunmdXXpHha38ve7ZAo5WPiraxruCpeSaoPjd45EJv4D2chGVz685TUGCYWNp1Ku3SbPesvjkBS",
  "key28": "5QcaC8n9EJDFUzoqU3YshKP7bMqW7159XouiFgSqtVpedJgCfi7zLXDsMPLMvj6yH1zHNTB5Rz8nbZrDEbEJXh1u"
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
