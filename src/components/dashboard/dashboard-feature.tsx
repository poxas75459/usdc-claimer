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
    "2E186ZmFQbp3Qtz3gs5N67RSsF4eNXETtSJfSWrWYh8CfeD1gA1hagWhT6h1YzVdPRqX7FA5MzqjVY8ZsWtx2dtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCsSe8pjDkGVSTwtAp1iMyi7DA6ktr94amg5yAGseHEvX49en6mDSXpisrAdr1skN1UWzovUFAXdbfVtuCwigjZ",
  "key1": "YMbkBiniqoNZv5KBNKo7sp1546ubtwKzvLUivSJULbNkRvXeBXVLLHAvNNytQgRJ6kePwCK6EQ6ozMijF4WhfNV",
  "key2": "2zvdizXdpFB5DHt2HP9oKx7cmCqQ62EYGUAAGJseEwEjRrgK7t1CvNWyniyDQpWxREnG4gFdovdW718YZNA4ihr6",
  "key3": "5p5Rbn3p64ZMRrjUJJ2z5hm2VN7JLTcR6JNgFxV3kM9CVRVNpPbprscoX15SjoRtYinJTQtri4xtP3TnB89ddniV",
  "key4": "3jKUkv5AntjGqSpzcX9zhkP5sxJw3niTJsCtibTB93e76zvJk3aEuCoXAxrXHkRCLJ2a5qkxjdEUjzirqEZD7VbC",
  "key5": "41VrBsSsyf7TMmDaDfGNB3icnGq9r5VpuxZR8WnnD4XxNBFSt1jfzaCQknK9rFkDi1ro484SdqXgveiC4bYzabEQ",
  "key6": "5gK9ZcEhvTEuCynQQCA3ArT9mvWTsy5BbwwheMM3N3pqzDKg8EAyeNmi7wmXHmufd1QRbyWKBs8i61TWajYnH1Ja",
  "key7": "3TqaA7kvzSZMR32gLMiAuRb5BRcKmyBYmARXhFCjHJ5C1P6jy9vvJM1yFtyRGshtrCzzCYScRhzxxpi5hQgi4TsK",
  "key8": "4A3Qaz8g7tDNZipTQmgK84nptkcf8CRzcw3LzJgzUatbDizvZVq9WDV7AhnANN3xYod7ST4qmKFP5jBwqBp2vEia",
  "key9": "3Jidx2qv6AGUiFudi9zNdPTK8JpVLtLExx8k5iqrbbMHpJC5jfEuyNQWvt1xPf61TGMtt28XAUwNxDn6rr5mPuXV",
  "key10": "3NJyyHLr3mqh3Etz2NzUsvBig6LadWQcDSjTXSTPJooRs1WyY9RiEMv7s82DLm2oogJ4z2wbpd1kTrkmjFdj8oDc",
  "key11": "5YzPtYrxHEiGMu3rtNNb6HxDEUgNF91tGEFouwRBXSTNbM3pJFgYBxNTwRhG8uoo7rjzdjN6Sr2nhCjDewapRska",
  "key12": "321KkAPUBN9ptTpkDv2uyh5w5aqF5L6QQdkBKZv6NFCTRFqxVFvh3akhmKNBseCLSLtLLVyG1rCjQ2k8E4GsQFR4",
  "key13": "3dFHjkDakNXia3PtTjnauFW2YXmAK6qb13y4M8wMB934FppAeeyYdbuxbjzKUdJ8JtoNHpYXfeYpSf5kcDXcksWv",
  "key14": "3n2saF3Hstm3iHdRUBiYMsqe3VNdMN4YxaGxC3evvtZoc4QTbY4F22y6PcpXMg5owpTkMuCUVcamAUa45GqKp4uH",
  "key15": "5VH8YyBGjFJDRQHXTSeeQUG41d7yib5SS49wapYPTxC9Ma41uPzubTn1U1jQxVHvdTCtnrhiF87bJrUFqZGwRguG",
  "key16": "3ieHqFjqpMQsPVs3Y1XPubkxYpUEjGtpZDct9dvdfPFnNfEK6NS27VwX6sHRADoahqMtPxiv4xcBgBfB3hrHAPP6",
  "key17": "3pYcsBVQqPwtZqwTEJDJVuU9QNFw3qr41eFTGcFbgi4uUpmpFmYVszyC2ckoWrhw2HWf1cTUuASgBEMrRbZPsLwV",
  "key18": "5feNVrykZNGiDeVtRpmbMpqbdyZ7tSP5D2s16NZdtw5DL9PEXGXxTFn38jEfgV4pfJ25v1hYPsTTiMRPZPEsy4p1",
  "key19": "4cDmeuJ6S58RPiHSicxnAxTQQbJ27ZVmqpoAuEf9CBjpfWu4XuqFpQyMRkzZxPh5cm6YGL3RhsanKKbefMAxY5Wv",
  "key20": "3A6hAPgTn1bfaPgVD6AUCCLcfxDZzUY1nXb315urLgiJ1jH2fs8QU5beimw132zMvNfPo6ysv47YXkwAq2VjS8TG",
  "key21": "ZKAnr1uvjycKGNqCcGXq5xwD6xN8jf7MDVJZNqXVfbZ8XxaHL8KK169iz2jKbpPk4sDEKejPGFSxQATrZKAXa8U",
  "key22": "2swz9xVYAcDHUYuo4CcucReiDWnzD9SkZm7vyGktQxmtvPknt3Q78NFGE4k3jTGfFE3vBgTZevZ6hxwwiKxj9FZ2",
  "key23": "56HDmt7jtznLcUmwCmEwE2BpYNz9chc3vTN3usk12XqfowCtxtUA3u9pYEiqJQzVgfBZMTusBALjzM83AxRYpDEn",
  "key24": "2aPnQQj9jWDnT8MimHfHZiMwHsWuGZTv61WU34qTeQG3tvqGHpiq3WBwQsRghC5kLmKgr1bsgvFvuQhNXtNEc1yr",
  "key25": "4g4AS64Jupu7ukaMLg8hiknnjoGNHVrwGGLDBko6ZeVH2cHNMMpJvEhh8RFVPgqQzwmXgo74STVyqCYg5JiQUjK4",
  "key26": "5ciZf2g8XD1gNWpmET4nSqbsM6A3oMvTVhE7q8qnCcMN6hcq1PkvUc1dLfAs5TT1Jgkv73JM2VKcTvT5Lqv9ADXx",
  "key27": "WoRMj8P27yN5SFt8uXJjwv88JUtae4VTYLnoY9m3oTzsya792hdxebBuoxGkwNmKU7rAfSXLScCbbCLzZZJs6pR",
  "key28": "CQZdnfdQSQbLfiKF9k8e82nVoub6ENeV4mBjMJ1CeGQE3ZKz7jwrrzUVqeUAH8Q7oFfXiYqjmdnuBfUWorU3cPX",
  "key29": "2uDdAPShLSJPBsbM1P9BvanVsLLMi8QZcN8tMf1Rb3E4vCoVL7kWcwdzz1LSpTJvoqDtu8ya9QuhtP8RiYe4m1zC",
  "key30": "3tNRReHrXsGbsuAJDbYEjpdLBmNMLXjGUxki1HeptQDegzB5VAikxdxejGTamqkW5n9ZyCoz4PoE7KXvJVbcwjts",
  "key31": "5AvYBJNNdgRKS72VjJxjM7zz7sd9wgzkUfBcxsJk6SboywEYjQp39gokrz2bJ72o6kAZgTPxZmwvdyr6Gksukf8p",
  "key32": "2vLXMYhJhvnhPG6qEsR8psRsV3i2HmbdivS3DAV7VTHwV5xhpR2df9yVivNd6L9oX5ByjNt2CmbCg6aX5t4wZNe8",
  "key33": "4yhCjarbm4d5QPMu8KnbTp7hcpBcgVvtUUSZz5newTiUUkNPrWY3g1GYhFbkNU792Gym5GZTcZu8JVf6NNN6eYe4",
  "key34": "5a4xcstatnmJWnFfeAdDqBGuGfkndDG9rWWn234uq6rVo8VD29kJZwU8va8eFrrFKdvgHnGkpphaYFhPVXLWzRBs",
  "key35": "3uZV8BCyo6A2WzgRnurjAZTo8vPH31JCMZ4ZChNq5UoGugxaMsY1B9J7dHKMf6qmBgxrFFKkjKnfFTFcBgJcCbqi",
  "key36": "2A7BthaVmPa9WNDxCCE7f8eLADV1ad3mqdfuJd4bqepzVrbcXV6TMQAqhQVzkJDBbxtpexLtma57s5Lu754BRuAB",
  "key37": "GauBQ34zBk6bdbGXHUVVCxWza7PuRtG8dphcgURK2LMPeQszvZAvuQp7DmbeP9DKNdAuQoB1fRRpaETLFjAST7W",
  "key38": "2L14zDjHnndueyVWKeNBYdv99NjmJw2M7G7Z1togMwFkW2u5pQiaEGrWRpufu4Za1sgyw71om9vw6r17tRmXb1X6",
  "key39": "33rcTTyfrh2Pveh1AQMyCdNRjvU6aySoBrCYuTxdB7ndw76Y1QbEYmGik84qMT4LYA35vZjUiaSa9r3xFWaQmqyk",
  "key40": "48qxzjYSZdtJErKVq74ycsgxsK2XiAJDyYUdgs3vjLcEA6veKh4iVfFt1hH4VQMSK9AoA4fihbtKGLCPuLimPuVX",
  "key41": "373kwLx3dfJ1tMG65K4AeSGDYS9iRN1QdvtL7jSNPxtoGQ9Mk2jaTNoHB4DGHv1HEuhrLxLfu6qZnHEKCTYHWNZ1",
  "key42": "5rspLBMH27KFh7bNiH7uaP93Qjsc6Y9TJARE3SE3NtUqGXD6bn7zWi34udJnjEZRW7MVAy5ujH6tnabyeoGnKszx",
  "key43": "4sXd3sMSrv4favZoN8Trwic1aMvxH9FKsoq3hqsJn4C9hHkuTSGZpSqiCL1cxSZzbJ3g8tL8CaokV7oJ581VGMGs",
  "key44": "5bDj8JjjUxNR7m4pFxcJvZSPM3xhGjhvaGJZthVtiwDwHGeDg2sts9jcUSvBUhBtHchMdyzjLw9QffYQtRHFCQha",
  "key45": "5pcrnWA4FGVvb7rSTP68nQVbySZgv7PbKuB3pdQe6NBCjRyL7YbZY7F3x7nDpVgJozfgv9nmQLwot1W7gdz6Ltuu",
  "key46": "4hDz1RWpCJFsLMmwyP2uWyCLr3Xckza9dNDqDfQm1YBCNV8AhyxkVu5TUiE5eWxdR34YQdTUd6jx9z4xVjv5uWZi",
  "key47": "45msr3pdaqiyaq8RnUQtS1oTTdxFFJLz1s49a5RjjXmQoLN9dwX1chRGmNuBhPbZNu9wSjTQ3H7cGpasvGexCkKU",
  "key48": "59qDM5mR4oL2Htg7sgwvqc1fcEqMXH9iofXC45PLECWmWy3t7fc8vZz4n4Vduhg3SHPRVwzAeK8bWdLBR7QGAhXC"
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
