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
    "3xGskgpyKxgAmByaksXVrb9wjSWyuVXSjD99Do9zM3qYEP9ajmdvpChEHK3ssELo571FtE5ncMAZYYcRaBjcXYsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1R67otQbhKwSvTFGx2fcwA15FbMmJcbqnyQFvuN3X67mKnvHugJc5C7Mbuxr6ZrAcZ1b3sNPJUuAWccJdqggfn",
  "key1": "2ifTwWogCbbE4X2gV16U8tpMD6v841zr37NXMyya2fxNB5efVM1gN2Zkx8jvMHVKFL1GpQVGV5nQrCUhysNncBZh",
  "key2": "3xBNoYTQkhMaEkmGVJRsCX9AwxBnswm7WyeDpk7ai3dow9oQrjBjkpNr5ihjyirewXHCYLXf1KpDtCSpSxHwNXBN",
  "key3": "fth9j7qGkQSYtEiK2LkK3yB3YCcEn7m1HUshRVv1VkDsgAH9rje7aV3mFEtxYd6t8hV7AsE9MoaaHTyLfmJADgB",
  "key4": "5D7oHRDaHfgn3fpwApdHTLwLfBdcpQP75ibXmtzDgdn5aA5NQWKG3vesVAyivPg51h3rEjAEfv8JteofyySKrNnv",
  "key5": "5csJa9GdHTqmFNv5q5NySbS1GFNRByEADdnmHTWuzKvjr4LNdJRgJ3qJ6g6pPgCz1mQ7YEGtHcqmvgYhnUN6kosD",
  "key6": "2QitZRGM3KTp6k8z2aNgyo4GnKhxsqfK7AVvHoWN1XtyjMPDabtdb5zYv7UHugeZho16nydsBe7ZjgGWvKaCsvCh",
  "key7": "3qnoaRXqix14NzNL1L8LiEatN3qrtYQwTVz3haRVhtcna7RgjNYSHi21xbbV6VfwxDNieCaYLqmzWwjLhCFn7kFB",
  "key8": "uTPMmq53ySR1vSEyMpXHGxKs7Enr4yUyzzTir1xVdTNFipeykwEzMConH7pbF3bdMHSg9y13sD8jzSAzwVnYYTu",
  "key9": "2Y5uzYCVRjk2Q94CZ4Nw9fynsvtFWbEDv5ZhpdVJR7A6vW3yyY7U9G6bT9hqEXdjC3fN4ZhAd97hYXZ2MSawJLT1",
  "key10": "62AqMF2uREL3DNJXDoyTt1j1ucQNYrnpZ7byCsto4PQ1GiuDLG9VBaYNKe8j5go8wEaYqqtzcbfN6kodyzPv2T7G",
  "key11": "56DfP69FfoaTx5o2BzyG9JRrTHJ5PrPXn1hhaHpBejkqdmyRZfLRnrBYVZLdzHmnh6NVdoq5yE3N8YPGPFSB5s4p",
  "key12": "5BQbStYFLY8d9dCS5e2hvAxHSuVnsCDxcymGFAcCiENvshB4MYNo4mhYJzdVgfesTbbpocUuxcSqjhT1RRj1DDn3",
  "key13": "5gQJ7k51vgySdkLyG2nNDmVCiP8ewsByB6pnLdRG5hbU4CDZ5PCJgsuXd8yNLjzSWs47DpFPUonwQ5k3p3JJpE9q",
  "key14": "4gHiMn6iBEJeknEqjP5edC65VYW7A8B2PF78CKCBkJfZkQLGEdbs6fC7g912TpDufxJMFmNnA24X1Eu6zLbcJszP",
  "key15": "3UR1pj5c8d4xNENsdZRHuyVSjYvhsrbQJnzbuoQVHuDbPs75ZvANL8u4iFhitVzF9tdCQxd2FgoAj1eaFFKQKQWj",
  "key16": "4QqT1iVZD6gzbabMKr27CbvxkprbhVy41DSe5WaQPQxZ3hoSgCZ5RnPFkS4oiHLoZM4LhAqjXiazzPnTJ42Tho1W",
  "key17": "3UJ9Knj1sFerqf4GnxzRcW6kwfnE4EHcAQ4CwbNftosYhDXfFF3kWZs61YNXhCZWhK1ZR1ew4CfT56nvgsfsDHWv",
  "key18": "3v3vNDXtxeVrHbHNb2JbLE7661oc6tSvTFzstKfs7o2gaszbdxJuAujDt3oW9Rd8qto2PzgHwDSFf4BaHzQ4xT2L",
  "key19": "3pQRDzNMx1SATFsqqDfZvSqZw1vtP1YP45NRXqs7jXcDZu1YHhJrvjT6rFZVWFrvrFQgRFofBxf1QXJocfPHZvkM",
  "key20": "2aUxx5dVsF7CxK3arzGCb5dkd8VkDB4AQhXiDsYGKhhRFUXqrWhZcbi2GYgz2y4cZeqMbfu8wSox2nobQFkQjG1k",
  "key21": "5HS3bFBKN4Kc2uNHGMmvuWauayUnxPia96VFrzAwtRiURQtvdJ1hcLQqF9XgEzxrsPayZbqPZA2FZcSKqez5UpGR",
  "key22": "52Urf74YSGYgxEMhhGzieuDNHzMRd8AN3gZQNTrgxzEaohRDTRanD2TacgAUtGiFui2JCDFiMLZYJY7yNd3oc8Mc",
  "key23": "3jgpxi7qJYUuHHg7wZFkSrd6uGM62HkLZQ9K9xpv72BYoWNAC2so1XyJS1GMmfSExjXyxHENZEui5zoQnPH3u5Z",
  "key24": "3J3Sxm4DXt17FK2gnB5JuwAaT16qs6kAy3NNCfRB3ueqQfFZy3AfKv7fqjFcnKX7qbQk1kTZKiTWt2gv4ng9Mied",
  "key25": "4qjCztPcQQFYPbeQyorq1hsYMpPb8GhvwUpsf7hzc6DcCqrHh6njc3wWNVJp298iZUYxGNH176rXWPpw9hQAbBax",
  "key26": "2EyJoxyDyCnMwxSjcxdmXDrQAL7ZzXDD9meP3Ru5yLii7oJYPnmaACPpK7zt9FP3wsw5fAA9vdMipXR2xfHpJDJa",
  "key27": "TXVJf4GBPihX11NhVXRbF4t4kSpi1GDydDLWtnHJvqKrevER467LFy5xLUJh8m4ZPVNHditcQe8psxixsiNzfuQ",
  "key28": "2ESo9hNhDDwYaU45sjrCu7ZuoNR7hYM7MV7JNTmFRkgo3gh1wXd5tfhvM1vVy6ey2KhBATrEtUwwuJ5wa6nX2rXf",
  "key29": "4qmkJyuhztzVbY1wp3ZJhGj9t3zSWvndePod4Rjs53JNPNCKAAKPkWc1WTJqRsL1ud2dm1N3T4JiRKCV3VJkEj5T",
  "key30": "5SUuHoGi86GPRD2YjGG6bJrwfSKS7sVbbRTgyC61bi1F8SoXd1zqvZeKFcMTHqLgwBUi3jRkjVP7ovHMM5KHvCWB",
  "key31": "2TkNq419TcgRqMF7pSjKptxMM8fHQtLdEd3NnmrCiEwiCmmHKmKmifLM3CHvmp9M7LntCZg9pnxrHrJCyTp8HUEr",
  "key32": "4VQ7uje8ECDiHTd5nQnNCRYZ2Q6vZVL9i7iKJt6fB9hhKiDcAnfAuomhSeZqNwuNbhNAordLZ9iXBT1iiEgAq7yS",
  "key33": "qM8N5PDRsHfnV4Lm9QBqDBdyQEciLHoyGJKNBM3ikhm9FH4tusM6MN97mLp7DbvwaFxMi9Awj477diQeD48h4ko"
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
