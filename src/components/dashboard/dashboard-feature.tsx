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
    "2feyqz32JVpUiRb6Qr2BPJGuWDaqzyEoMBTsqtv7m9isZhcYR4KzpYeoa65q6gJCUnWwur6AURzVgZYXX4fUpkzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQSKERa6DouoYCgiHdJ3ALxkE3nS8Tf5b45w1JMUKvAfBkNAwcpuMYo59kLbWCvNU76RfLQ96qv3Xb3sZZ3Sc1d",
  "key1": "4KfHjV2ryJuaELHWuRboE1BMJNduyzG9tJethnGbYQW97UuahDBuEbn4B62XJYqCKcz9b1HddE5XtEwczw1wbwjc",
  "key2": "ScUZrQCpTi9exrYn1b8tzMrstXYuNinVCHtFhKvZbYhx69nEksCt9pa8nSTG3KAbo8t4P5KWnBa8ikLxpR7cMD4",
  "key3": "uVBUtPLeoXZyxVf3qWR5HVfsodNJKwBKwmpTj4TxpFSY8LA8ESroVuESJs7CLjp4HSfHEgttAFZ2L1pgYJqgUDz",
  "key4": "5srCJfJSEsduCbiwix3cU9NtyD6ek3AWSjpZ4v9kgyd7MW3zuLkcVbXUzsZopkSZBuowwyUNezRZaJPfszRMZyfS",
  "key5": "yK4NK5P2BW8JNjkqM4KUzqtYsvcUHLRbHfK1NCsGbvgAp3jt1mQ9FexFL4HV1uEfuCn6vzqfk78pjNTUC3nxyTA",
  "key6": "ezppuAxpf7mFkakFGsj6PaDAhUALEC2qfQnmaWUXdXiTk7NaM5YSQTQRZhq3LGEbcdTqCdtLrZ8uL8oN7QjbqQa",
  "key7": "4RMFznWdQxwdh6hN6azFPHgptHT9by3kgMyhzUhC8DV916Sdu6kNthjjrcpH8GspsRbuwTs4fhz7Tx1zxYUCRTAB",
  "key8": "3kT7nkJvVndYSjrgaLuW3rkJhMdkzqNkzoJya81gYAmHRKbouAA9XYRr8fzNi7xWKhAdCxs8EKjsuCj8EsEiYhtf",
  "key9": "UgxpZpzKMeRRQUfm6tNHzADDLWX9p6sBXMe1bLW7nZhU9YVVedc37Fh3SJTHzGBYKW1vnwxrUDzJzGxUEXakGrU",
  "key10": "2jqpdW4vGEshG8Angbc212PaqMHqczihkS3QxrSVb7NdPBnZafysL13o38nhmD2ZJNB4WGKszaQwBfiBgZxVmPaT",
  "key11": "3qJGaiAxYZsbKLvGHsGdAhk7jAnfKvUR8FtP5LWWMTg2M1nAhDRd2uLi5vGRL6rLT38oqSVe2RJkzHcyhcMgkENu",
  "key12": "7zXsPgcuwvUW7tBHSRBnB4rp7v5z9Ln8ZW8hiwWXmdyJXikRCjaSPMb4r5LmmdhBhYcMkeHG5Q822WmRcCbL2AX",
  "key13": "PoRCTpNSQ7s2k1SPVNuG4vKviu57EKbj9Aruw7u7dqQ3UvwfbtD2SN9xhHH17czSrj5Nd7SHiv4fDc8AQ5DNTTN",
  "key14": "122171JikRsDGx6vEMuzJs9bKPTbxzNtxKuentAqP54WRNpmhwZZTSWwKU82Pg1oeGjGmcv4izEYJd1kg3kADpFW",
  "key15": "66dh4n5yHR2S3ThhxmCqqKyq76hfYmCCkJztM5Txi26h4uiCDBbXDUQknXuqqPQLjXW3QJi1SB1Z9qBi9qrMp1Ed",
  "key16": "FxPFyhKfwr25AvwPvdhU91Pt3rztWnLBEDFhaE3xcnajHu9Q37jceqTGwfz4m8BnA9dzCVw7ENk56MYfhLGDzkP",
  "key17": "4fyKsDtcBC2rPYDRc3aQJeivX2Ny3M331tWwYh5mneoyhKRfWFGyM8V9K3qd5HYjVoP3sTwwR79nG6gvHHrQThsK",
  "key18": "u73fM3uUJeEmkk4LPWPQYVVDZMSp3miWBZL6zvVUKFhz1vph8eZJytCsgjAS6tTTqZYzCsmzFrXvkMTs5CKyEtL",
  "key19": "3ktggVkTphChHGVmDJHPDLq7jgMJaUKay4LYgeGHAAPik1em91Kuo6djvjg5be4Cko2L56uCchCdAWWxgwHe8atC",
  "key20": "4oDEJSUCvACMypqaQNGBGzXNeZ5w4y4UbjtSSvmrW6vCSj1WKdwepg1XxWNGy1ghPLeXxhWrjEU9tHoVATZDi7qw",
  "key21": "2f9cWwkhfRysEhXbfSevpJWxdKYG9249qYSL74GMYidaB8ysM9Sz53uFzsCjCGWEVbgn9hokXwCDvFgy3h7XGyyc",
  "key22": "Ti6hdiQE7U1YEgxAEodAASYgf5RVRL3ZPJLJUyPf2Fsa3mNX5b4o7ZGECVyKqbKAHV3oU6gGEoMcUzgnRFU16JT",
  "key23": "4CQA65UgrgxT8S14DpKLhqS1BH21TSSNy6PVSfSfJVsFpdacRSzLEfkDFqkQppvwSDjvJmMigbKPXmpiawhBQ4sJ",
  "key24": "Qpr8UPj4z4C44FWrajneBusT9gM3ANFabwS3cBcSxQuq3jWCNxQxmkRuBYgnT1cG129QNPsY5sTVNJKbXhEjHGo",
  "key25": "5Rj1QTn86xJK78CMLjuBY2MQyaFnctaXfJMozrnnu7Jgj5rvRGTQQV9CSP5kZsKgnYqzvku39toTNXDnjQei5riV",
  "key26": "5mkhL9Y7ZtCkN25ZNgcLxuTq1DeaAeeozyJtzHwHmhRtuy3wFmF6cEkgVcL8z9xQiK4jrmonsyEK1YvjYNnmcZtb",
  "key27": "vTzn1AB3C2MXNZK6ZixDY534bDupZkbuQ8C8TwzTraiyHBKuN1cHTny5pZNehfNgkWpcCkbN8nXSYp4bpk6vb77",
  "key28": "39S4AQvgJiujPCKqfx2LTEbZBQ93Tmnx5DkuUWuwkSgZWiGG1cP42HkVHmK7z4j3eNq3aGp1B9ab5vxRmqrnN1bK",
  "key29": "3VhYTjKrBE8TkYpR4qTyG7dDnq54iaUDkTQ5T6ybxxyqX6GfkjP1RDa9AMaRnwqrsMp1KpRmFHKeGG9ZUkiyBL8d",
  "key30": "2Z4BVo1jnjFKAhrZcQSDCPsGrkQLvUK88Pq12b4sGDMEVspc5aE2ZjkwhaHjJf7ATFtERuzuCg8TYuEVCJ5sZYLc",
  "key31": "3hcMuF4JTRkAVRgoZzHjZNa7XsPgE6QYQwn742qakm9V6PGfVhdBWz6d939pMsTXU9Jddda4QMnpxio8JdqtVH5L",
  "key32": "5Ntx4qm3yd2YVeXqKF7J55D3u62xrx6KSxo6CZEJDAy8vmxQwwBdEzKcLfR4MPL4dGfbxUhbf9HUvnRwMwPoMzFq",
  "key33": "5AqQMN3VPFNJtEV1mb5HMRcmfo3i4sK6ieRKEEfaVS7u9zv71Hq9jALwkYUMxxQ7ngeik8RBw9NVq9uLZ4sHm2wA",
  "key34": "4YFa2H2Bh2f8QB79aCFn8YzY2fBrzFxTkAnaU6TzCHa8K5nV6EnqPd9ZjaDwDpWzrK97g5WuTsgQeQ31rTV7vn9G",
  "key35": "pd4mHsuqhXEc6WwViCgNkxH4LZpQ8crFrYjszkU5dhFkmuvmQ5FdAT3mwmnV1GJcv7XSsQ8ycwmHNAeVP9Xn9wi",
  "key36": "4HXm6qftsBKUkxQ3R4PRpUZfaVziFaVMX5ArnGqkdsR6uRgC1Uy7nCKf3196G1QEzekWmUDq5RAzyj7AHznP2xYb"
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
