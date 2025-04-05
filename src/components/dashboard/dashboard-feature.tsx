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
    "3BvmJXHfM5Ep5qaG5NzfbY4hFUu9bsEnnp8mAewY6ypst71gCEmZWTvjvmwaugWvWzWnbDLwuDXAj2biNZhjAgze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vq4dnQKX1FhmS6py4yk7Fbk4P3Waw9MLBQuayfJibxy8iD8Fp2jdkuDgLcMwVQCNUj7AMyqBb87E47z5xQH2c3K",
  "key1": "yij6aPfXNaykCgn7is4FUaxhACxaXekXq3az2y5jAwdcAcWpZFEERBxgpBqdXitSCBhDwoiHHt9qdf2iaap1Pmp",
  "key2": "5NmvVkrmvo7pkXjh76TL26McpvpJ5H9uiQXkhZin93tE8BoB5zTYMtGgJSkdSF3kyCivMniMEsVUKyPR9pf3S8cv",
  "key3": "3HbJ348hGvgxrV1dAWXNgLxL7i9XQMwaBTmzxXZ1Dc13KWW1GqUzTsFBGa3rNyFvPbDPpFw1jDA1sUrDrkJbLofC",
  "key4": "5LzJU349CtKAQNDxMYdszAtZRcvLt7SDeAzS8fSguh3FFeQnoRBW8SDou44xSWDgNaAyrSbKRRtFz3WhEcGZYdL2",
  "key5": "5Ffwc7nkkki1deWsB7tTcghL6Dnw7S2MtpWtk5ScbbtoBnR3uP4Y1hqZv5TgKbPiFKTtzViJdRdszY7QhTrd1Fwt",
  "key6": "R9cGRQADAWWT8NLA6qKMhGWLxkfE8etywBsZsQaHjefVgjrzm49kFqtwNcUYf46t1g5gTx6aHHgKahm45RCwoWE",
  "key7": "4hCnSyr8fakGEnCpWLfNYCBrP5R7yWJyLDBZNraZuweLt3kRzjGH2Qv3357ECqg3XAcDGgxfx8kAiZ9YRuPMS3H2",
  "key8": "5e4REo3FU91wRb3KJwgNdUo389eXM5f3qszuWbVK1zjws4WTKM5LyJ5jJrsHS7PMcZ7hxn3VakebuPxrwddT7jfn",
  "key9": "3VzStsjzaAHGf6Dj8ab1FTLEtR4ibDEqL3JFsa2vnmqmUm5R6wJJ1E2uReGA2VWVTnGpQK7WM3Z28zoL8FXYoxd9",
  "key10": "4xEiJ1mJmzct9gJy7US2bQXKr7J77GxEZrxiZFdVkfebfeBAUFMykSYdxJCywUt6z2nADvgcRy94S5bQczFs2FZE",
  "key11": "2Dbt3VrP2rESzLzS36VUEqurE64xY1cf5PEFeKNzwdAaseWdKPePu6FgSmAr29E8Ep3Wku1e5oiqM2J8vpeigdKC",
  "key12": "35HBWpFBByAz2HJcPMCBv2JYGV665KnQxnCxaKEoP6PB6ScSZ7ArXBzzw1mPkFcHC5wgX4cbENZ7ABiM2HVDYaNz",
  "key13": "4Be5mBmjrT4wf2c6BnVYUtWutwEAUKNJnGuWYj2yCv9ZzZ9EegPDzs5pm2aCHv9ze3qePcqiCECcMHsLhRofRChE",
  "key14": "2FoUdw92mRcLv7WR2NvRjJPfWM2FMWHZAcxCmy4VMn4Vm6w9D4r7KEBKX2nAPWCiSjtM5YXAypAouKG9BH2UXk7i",
  "key15": "5eCf8DCKE9pwW1gh1p8X2NAvpfZaDwVAfhdamykGhEzZExN8oGaRtfamvYJcfzVmgzEYQMMuU8PBHEa8jDtko85B",
  "key16": "3ykny9HKHnswgfcy1R5US2NjpfWnLQnjm6BdC1dmZAGni7Tu1m6xJ59hvKh4aNBS1nTFNFgBq9juSRrChM1Zxv6Y",
  "key17": "mWrvJ55jBejZGjqaZJWREYYh3LVkLsDBJw9mg8kMEZYxaZJhoTNyKb5CTz9ZTYZRSxDuUefGdKTC22x7TCQkBem",
  "key18": "3ut8exQHxVrHdPwcsjZoTUgRUmWsjkQv6wUV7EBeDJVXwfbRDUD3apZH1kyvHnv8mJLc34fjJebSYBaF1eVamAF6",
  "key19": "RTHXeXaZn567Ap9KnfbrE7AowcaGPUuwCLRnEesdbf6y6KsVFjg4XrDw9LkqLrtzo3Kjk5SEvYVuqkrgrD4HGkX",
  "key20": "Z13RzENuiTPFswz7NZ3qJhXBc7acZwhvs3qBPsKsW9kfXtxSaU1doThv4cNMbBUx8SjSEYQpkzVknYFF75rmq68",
  "key21": "4xu2uYdZ68t6KmZu2Z4PF8bPje2tx7JJcWqDMaABLdNGq1GPCKJdauyVphVHzJDZip3mjjZqvoqtwhtMrEUJT2n3",
  "key22": "2U1acCn99Auj18euv68LKx4LzM48TPAQ5KDNwDrWJo9ZqsN61L5mthUSnQzv44EBLDhXW5QZJkyDmV91wHW3xE5h",
  "key23": "c82hyv4tGAishUpxsjnkaDtjxYGrqMA82ucmjRHcsGxGybkHDor6cGSxnwAKg7XSzaZgUHRn7jpcVMc5g6JBfnV",
  "key24": "2bkztwtxDN5mWqjU6gvvA3Xicw3f6gVTYUTcqA3Y7PuZkavqFTbUdqu5NwxbUBkxm6MPCzhRyuMxeFtE1zjiBQb3",
  "key25": "5Pr5qfYuXn1TDswMXufBxgvKgFesYioCiy8wTRSAeZt47XXqt5fcn4FPuTTaoScwNSNj7jrSB8PpPwUdSPcoACGP",
  "key26": "25d7tX6aKxp67v7BW63NUuqEbiKSKf4JbFXLidiHXZdsxKZgAwZpJJGrEcytnJgrAgUzjE5BJx2RLbPmCZYWcobC",
  "key27": "4tkN2wLMqmxKndq4FcyyJhsbezA4Re6mXpFhYqFkjnsLP4xcHTNG4P58KR9SbihnbRtRj5AxsfkCHvunL2qH1YnZ",
  "key28": "5H7YjvUdyaDvmyYiCkWgxKMCLSQitNeXcSd5Kzo77RMYDK4wDk8AhsEeYEEZGhCoZp9bJxjyyKz2mvLjBZF76tHA",
  "key29": "RWpNzG9xFpbj3bSzCs9mRqaRkFdjDDRNKpXEQeMmnLw91ztntkzzUNzkMxMu51yFunvtJsMZL7GYqfU165FAd7Q",
  "key30": "UQg7Tzy1Y7j4ZakvvECu9VhvxdbBSGpQrjddnh7YFsYeA2rYjFz4hpDTXYN1sNbYfNKiaz97a7RBQieotx8r5mN",
  "key31": "tZxLKRvFkqZu11qBGJ5HMzabzCRhECcnU2UxapxDxPgDxxrjag8jopYpUixgHV5pHCDAJb1FWp4Q73s7Qp4JQfj",
  "key32": "8uuRdGQTULrPgeg8NE1UruxkwQK2g9FhsuTMcqAektbsaPRscFqCXheQfLUy3UfoVusJBjvM35dtY1WdxETbv21",
  "key33": "3Ycw4GdmMLT7HgnkkA4dpYAvFXX52u9LSSNtBdm2MR4uRbrf7bnMrNCzV3moxMwGpm4WyXCWah6WRsbiibEFjvL8",
  "key34": "5QsDFNdYTow5DGEi8VqLuuwiLSPRymEEcjvQGWWN7kVjvFNATrefgX5xLHgseASqowZdkVWBeWBxvNxHZa1PSNsV",
  "key35": "VxJaxPvMfB4VXTc5zuYv4mYFR66Lb8nUM37j81Sa9gURZsvmnzQGzzRs3WUTH9oMd5fgQ7LNNv4Fhu9ofhb3Qih",
  "key36": "3QYW1CtWkVhSkkF3J7iFodeUj2dVx8LRLqCDFtq6h9i4UKS3BRNkZ9Qp8YuHJ5BFW3ggqR1XvdG2GaYtJ4aT1EkE",
  "key37": "8ub5YW8ZvXXS7yGtuF9EZaXwC1EmJpPcny1QJ6VnhBr2WZfk84xJGn2sZskWKmnBg4qb1B48Fy7yUTt7KJRg3N8",
  "key38": "2EYC8gfB3iXNT3FeNZSJuPFBS4mDxBTeXFhmmpwRUtHANTbrZvNvdGY3i8i8FJCUQtzQQXsdxd39s29Y8VhTehwc",
  "key39": "37Z3muwA2Tt6Zq8prLwGFakU9cpbvygXCzcwstCDS8hQFXne8sUvgnQx8Ja7H7oWg3tzJ6hNhiujQoBtEHbHSBuz",
  "key40": "wJSSEYCb9qHek3nA1eun9h4Y6HPwV3fwC1kADDAcHPWRHAFPnAHZ8khxezfLQjFzhYyTnLQNNC7Dfni1K4XBd7A",
  "key41": "5gXf7oTXQpEExmixc3ajGtWYEwxLTMNGAQ8BTy7eL5HjQpfpAgPz7ubp1Q62tNCUgVDEEHjjL6ZcXnyYNuNPHbYF",
  "key42": "2VEmngFXM3R4yBcYaM8r7t1tEJmV2VH9grQcReteCpuE1mgp2Hc6hgDZtGBXVGMuQbVjQXCx7pH5Zj1KHJYNrnh5",
  "key43": "nrRHaVkrTonquP51q5x8obHFYksyujBEezKzV2rvF28jdVFmDZkrFXvJ4oBgEfPdpkQiwpuSahVFBKEqJE4s6VC",
  "key44": "5taw3VEMvLmsQE5DY79BTgM5e2hPruE1cfmHdX7DpzyzypbhMSY6R6tp8e9EC6nxVwjQ4TN7pnHgW9NhrZCwDhcd",
  "key45": "58AJJAuk7jtJB6cjVs7FAJDMQEQtWrYxckvqjtAXgakGPgoeWA5HG2iTp5T7PVjB95Pit1AibpRsVpjqEjBDsdgU"
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
