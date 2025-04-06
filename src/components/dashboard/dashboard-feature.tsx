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
    "4hrhn6PHRnv6rmPBSjNPdpcFhoXxWbCYxdYdTJqqzyYJzk5T8McM6kdqVWhkRcGDCVuukKMSFZiZ3B3h46xfwFzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jzvydZsiGzmM2kCuXPfLCTvR814YHDPpGKJx8s8wjc6VjRYUn6Q8WPpX6tUTtyPzpz3KV4FAYAJZnh9XfHX8Qz",
  "key1": "5VDYzm3CekX3pus1uMC1h8wAxVbdLXWAsjKgahGAT315ffNb7d9owFWiULeJnmXfQGFhXVCJvfTygwULE8pvXA1Q",
  "key2": "612sn2yMZPZZq5VTu98peoF991NGz9dayvvFQCFxM8QnSYeQyP2qLvnWpkj3r6VwqbP6qbpiZRWa6yh3uJfDzf6T",
  "key3": "UnDca9uUh5HEKDQWkdatjn22ZptUxneQkumoZcSBAEWJErndnbMGsvBL3v31aR9cWr1VejPfNkHgwifNUk8JCjY",
  "key4": "5VM4eRqS6qdsD5TsszKT9PThmMPREKTrVHUpbqEZxyaz5rTKpMKaJJqXvUGbwQ8UvLqzJzEQVEZqTzHQc3QY2AtW",
  "key5": "2j2igrc7fw5HY12HXxmxZCCKVGHaLWvxg4tyw4VvtCUWeRtq3LNrVr1btzQmTnzAdamha94vYbQ7PWDD9NBnWJ2H",
  "key6": "4CHfeFKiJgUQ51KY1yjNgRM3zg3kMJAr2wShKGAvuDGrmGoVdAgZkJt9eyfK4ZH9UdwXk9KUoEwoMfVvCsFn1vCp",
  "key7": "5jAmJ4p97XCjRKcmHe61vbG2XTvzGFCCseVc3dVqULsTzjVHUG6rxY9YieFJAzBXgtmd4ggYxDkZ6Ut1CJVQCkyE",
  "key8": "4wTDC6saqf71ha4brBd4Tj9HL3RCf84bNfHY7ymkTiTZDSHRbL9iA4bXfctvpEZPFYe8qjeTsmc5GVhnLcrYAW4T",
  "key9": "DUruyZHf8xpKk3VkjPnycKZhZNoE9zRgnEgX5y5429yb7i83TshJwP86LJBFvFC6H7MYLhP3jxUQcsdPRXb3np4",
  "key10": "5TLKSXx4ZtRvmb2xaHU8E8fkuxoVQCwYJWUtKLQDRuoySJ4S5Kj5X6Gi43QG6JdKrjL7qBQyihLBYSU4bwCi9dRJ",
  "key11": "4XAa9TXvaRo6zieEypUi4tqEcqri2VNFW4jDd39xHbq71isZMq9aDYuduAxkhYpzZbG9yfC9TS36dR7RhdvBqQTZ",
  "key12": "4SAgFj9gXfWvHzqgGn4Wab6ThJ2c1khnrrkeNCMNi2jmMTosoo6PWVczHfH7vQUpo4V8hs6oEUdc5T54oTVkpnPS",
  "key13": "5TZHkstF7XUEYuvRyRg2XjgGw9hLb9kGd8iGBfpTecNDsuAWd7ezqCtp8oKQp2a8ccqHSA7Avc842k3EtrMmrVAB",
  "key14": "5v4aQRZE6hPxU9yTjtvvntdYvVcZCx6LtSBEGyLsHFgDakngboLxWcra3CtPW3ZQKx7UVbcXkJ96cc5AsT5XKSHP",
  "key15": "ce84H2kqH1Zvtbs3QLMLWSCYVbD8J3VyA71pVD5mSDhHxUcFMrkR8DyToabf9ZnNa7vcUXKXKk7sWAYVfK7DnB7",
  "key16": "2NfgLTPmP9vosAVVjuoWGpf1stH3HUhk9DNm1DDxiHDWWRmFt3eakvn8LxMbBatovX9pg5nQWcin8FcFAvsA8BdW",
  "key17": "3UeknE29vQSd4CFb2H6Xcw9W8JWwejvag4sELAQ14kTM7fUiifqjYrPHgENPJecz58YH68Nt683dRSfPBJ3rTMLh",
  "key18": "3LKuCaQPezpvUobror4pFC82AkN7j6G44UKuVhj8TXwJJPcWYCWN6Y7dgNqREXMS8bigbKZnFtVnjfo9zWzTt8kf",
  "key19": "4KeHAiazBt5HgsjSkMiojWzEmLrDNMfBZEtUBTh2suaSSeMFdwUkyMdZ8ebXuF5zGVYJsNK5FbzPDUHXnfPQnhZV",
  "key20": "2i49vw1tbemax9WfDKDQ42itigyjoox5GPTksh66sSnscNijDovmUjC2KbfrZwzQrwsaRaK4fhgsQ4gQdxnqMJ5Y",
  "key21": "5Na1SzEXGpaEC8ZMDbqbDhSR3hyBMx5oiRt4ruXDG8mXPPVSrxha1YFfEZDeBjNS2YnqyNhv5KS7ZPur6CnuBB1k",
  "key22": "85PQLqpKEqvuQnpfxTMu8vbEQVRGVM4E56rVKjbfWksHimQCt2RLvpz8thZ9GoFC1R8UurcDCRoJUQchVXGt3L8",
  "key23": "4g3BNTpiqqt1Gnd9ZKVJHW62EfRodQCmMgVdKsBnUNTHmUUFhDL6GXJuGE124d3xYijVXbecNjYG3KjEWy1P1Rwc",
  "key24": "4P1UooGL1A5c2z6Hc9ngDhD8aqtt28kv9VVf2swENrmsHBxX4wQReUHdjVH1jx4CVa4Sx8ghNJ9cL9tSgmZFDSxo",
  "key25": "2yh8fvp8ZAJJbEfkyX41mi3tnKoTHhfij4qPZWGQDN9tiZVzyJvBTqz3LEnFeHUSyr2PzFCjzyQvrM6n3x1UCxYW",
  "key26": "ojPProebmox1ycWjcANy78aCfyWf4UHDdbatDuvFWsfcTfCDohRPt6DCfGLaMt4tK5mxSomqGBpaa9eGupUyXWg",
  "key27": "42MLs2zJnmwneWVY1o7DbS5meoQddgnSp63bahvDQENQavY89byvhoaBWJsiC6DFe9b2HEvgWYNgzMScH7THx2cu",
  "key28": "3V8V6xkTfdpazeWNz4aykKNRQFyp6bNnpYSWZtrs2EDpBZV9dierCMTsx7NxEAb3ny1BMm9Wo4DbLEWfBGgsNUz1",
  "key29": "41rMyCXoy7nPbw57DcdkWYFZ9Y55b74DMEYpQmP4arfF8r8gJYNW7XMV2xQNkwH2ZXsw9xKnLoKaNT6HR8XvBYkw",
  "key30": "5zgBaXz3yKPW7Dfa53b86Xunni3H21uUhPBcREBGG1TnM8Ead9Mq1yVGCv5rxm7oY3kS1VJs218QVyxXTRphYv2J",
  "key31": "i4kX4XhCzQCbCFaipe8RSc1zkcojDwcqUDzhdehu9SgtYQLEmRSTYzBBfwtyb6qX5mhjMjhXv1o9AyZPqT3Y9kH",
  "key32": "2eWp4pA2sdPgQYV1ZWfcnV5oPYSTeUa3L82ha7un6YHxAjLRjD538jb8p55peQ93QTA7FdZhSuJRzERQPrySi2QL",
  "key33": "4MbScWHFWv4its9oQLuxDJaS3dxhq5N5jfiTDM2yC5UMwnUNm8Rf3SLx4so5F8xavZPUCb91GbbpsMMJwfUZnQUi",
  "key34": "3a8deyRdL22FznWgcREfdfnBLr5skqdGSLMb6b7QyYRMgunpkCD5apmFvQkaYRHk9M25zff5zAmo9WzFQs7RPB2b",
  "key35": "2uZuLPpsE7w3Y9Jh8c1VU4B4EJfsEFUXHXKgiegj1TnsrQxmqHZDSZ2Ruq6LiKGdFjz45ebRnZMWDtxgummiRCSU",
  "key36": "642zgUoF85whTM92xwqFWJ3TieeRD4otpMnmCqiB3WuQwdRXswAECXYtWWJXWfgZ6Xhg5LD9MsKMhLkKoNrwk8eC",
  "key37": "2zFNpzeuR2UDQPwTpUkqavPUWRVGhKSeYzqRkNpgwS862PR2ZikaSagufCjVqGrLgTYzzQyp2PYCizdADfrmQaLQ",
  "key38": "4kpp15gqayrUsah26JhW2dqnwbU7FCaw12i7DgNZ4VfLYHruPPtU7E7wYtJCP4z9mrPUw7WGGJSUKZqAnxztpDzE",
  "key39": "5MVfK4WVPBUwdGzZPpthCHXkQY97QkbSKdDSSCk3T1taGgwRFES5PDe2mpsWVo3scvPTwzs3L9M1VmMLeMiLns8h",
  "key40": "4YZWUDakDwYm1p9h2V8CZ2dANBjHzhHFU9K7vpJohZsV9n3qB1cVg54EKZWLa4BpbYLcApYRqw6HNTmd6K9tuYnm",
  "key41": "5RNuo3h1768gr591dZz25PipBjySwdiDFau86hr2TDKU4PeTVZtAQufdY8TSFwkxkdPdtV6jrzTjdnwthVbCEWSo",
  "key42": "55ek1NinbSfckkYoZ5JHMMHUbXGjd3x2NMvc3QF3Z4NXPBmQpY1ZdRYRdy1iwkJVxXejhRU3bs1tBMqUuFBvVH6Q",
  "key43": "BttmT89w5WAWCBNqRFcyps8ZJqUA2Q5FniWBr1fSA3qEgpnmmGDgaNF5WUZxA11YKPLjf12CTKpDwGE7t1vEVHn",
  "key44": "5VN7628ZLugc8x8raYBmpzRMi3dho4DoPwbanGaF6YnXwo4ge4xmaXbvsuC2VUASz4kWyFMoP8F5przSiDVP9Ht1",
  "key45": "k5UMy4KYPbRFx2h2HrcNXUDZZDHyS4HMHKxH64J9cfJe8wmRFA8iNdAimR2VACg3zqt5rJigLQTK19zXbabM7sw",
  "key46": "2zYPEawY6T12J9HH8MFfx9BLxLK8EzDWu5z9XnJazBM6nKa2QvLJ7yNjCZHzZMQxZZ1mNcWimudg7iZQqFcF7piF"
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
