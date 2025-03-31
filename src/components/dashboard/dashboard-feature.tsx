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
    "7WMLZNysLAfrPtzgLW6KbaREeQ4gBaJ53wgCArjtNJtvZR5YLEzUQZNRgVCcZ3pUiPP3UTFvNj4HNY3n7aHMhTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5PnjraWFiTxZkWLhuUi4FNPuw2Mr5hAnVgDGbNuSpt9XbRS2dQbEJ2HDpw37dd2fJXGa91yk9sF1ypN7LwE3zA",
  "key1": "3YmnmeczGYyk536KtEk1ma4BhweHKpRHwo4rtT4Qu3gamZcUPoLadfpfCThnb89zNtgSaRxryUZVY8zViTGiueAY",
  "key2": "3eFtiLGouvnTiRcm2eBkBfMeuvABSjCuFqdeNJXNqsD2HYmvAahdRqdPuuaxAFFeEcaM4JL3pFd9qpCwd1cDcAPs",
  "key3": "6SrboCkauGdmnuzpv3i8RkGSioF9ie6L3HwsSn4K3vMUx4GjVPgcGJhN3esf62vhhJyfwaxLg7bPJ6fvcDhjj3s",
  "key4": "kf53CUtkEz9Yirq4EvMhzN6VDTnTjFJSRUDaE2xYEzyedT29Avxvs1S1Spb9eQMzxmvGu8Gae5DAwhyedEbPhgh",
  "key5": "3jbFaKSH3h3e13GBJkk3LnrkDDHhEk9exJxRfsz7btrMtyqqkxCF6CxZQp18J3187cC6YC4vcR2qFNXdyn2wVdMN",
  "key6": "4VET7GdJgPpRQUHuefiNS5VAqmSrXEPVpdTTaUrJERUS6QBotieBrsnuf4Qghn7EK13RbaoA6hSK4Scr2CWM23p1",
  "key7": "4t8AE87j7n15nnz51VCtUPUxtWU3P8jHpiqsHofoUWM1psNvEYsCYP1BzXYLB9rPzk7Pfhu5UyKvd1228jeRGjDw",
  "key8": "4yt4mT33Pe5B8JdFM4zDHumYsLQEn9dtqcRchodfpTwQwZsYjWuUFoUn3zTSWYok3Bwokywf8dsS3ZbKJkuuWtDM",
  "key9": "BNqxduaCWGdFCnRELJ65Zx17UbKr7UD23B4j2b6j1ekMrigmymx6qtXzSjUjAmBY69ibbvFnpGyqHVRQhLMRenp",
  "key10": "nCHykUeB3wgd7HGjHfZtTusxoPHQN7tAkovANjDJqrydRqhvdKZe8z8J2YFCryiGQLYeXtL5rCm12bJH3NPK1tL",
  "key11": "3NzCv53mQ1acdh2ws63T3tYC1DFFKPC1wbZfhosMmMPhhftyGVCUHHjTNekAro95jBsq4KYYPWvLVnmwbbShgh6z",
  "key12": "2gzoqU6XrWC9yytxTdSppveYrH4n7cNi8zGMS9ww4uYgA18bAhXr8ZNocb9SQgfGmNWCksP6pqR8ue8xLtPJuivo",
  "key13": "3BqjuD6GEwmmeutoq2TENGvma9812eeLDuoVLpBDvBNzXgJd4dSP5mdLfwL5By9UfogWsTuuTpBWtDGnP6MtKjaM",
  "key14": "5ibpa8BCvEVNLzwkgr9WfXuAm9TYRmzcfXXJEGu46N88UD5JvudSm7DsANFGeKwsahDpfQNGM7V4MPCK83VamhUM",
  "key15": "2RdpGGEDJdW5BwUhZFVxrKdeqDzWucqG9FUZLFUwcpBktPhUCb4f4fsy6bD1yMTHnBxoRemdtuqZieS7ztW1DeSY",
  "key16": "5JSc6dMynFUxMzdtcgk5E6ASsbMpHC8FXQZwAqNLoJE5Hj8dSPPRYVGQffSjAnQyYRWPWe6sQtXvVXbB9wuusZjb",
  "key17": "4wXrxj4dYCyrRfhXBj6gt5EwDXa11PRPauhjC3aRGCgUyiqu7rghprnQK1YpG9sLRetoxFRZs8622bHgLFcAQ3Yc",
  "key18": "5AWCA2XV16QAUBQMUaLrPhUjyfbVSpujqe12gK54s32fNics4cipTu8g4FML4mw7tniM6Zw7F5wWWhM46fJWq1sE",
  "key19": "5KRRdSYMYChu3NaH3urfbmq6BGZe7tbEk6PuoJ9W5r2sRzLMzqwzxyapwxmiAdkvDWLCsqqCh8cxxwmjcFCe8XBn",
  "key20": "2Qd6ZRbdaWvdL1462CJCUr2cDh9eYK28Dhes7xYzEpuydondZDL3a5nP5y1LbSqN7GMHuGC3qqPhvAXyDm21tCMa",
  "key21": "2P1QMZkQSgWKET5GfuwRN444htbzkLy8gDyYVmNhs4JXWpGUfq5Aod4jAyQ67HVNhyUnN3Xa7mgT6Xb1DtMPZabU",
  "key22": "5ezzJwHW2RVsL5o5z9oswVKfsftemr7TbPsD4aYs2XCDRQa5wiYexQZagBDZfXvpSjsLxwMK3BFdqgVn16arHrtf",
  "key23": "B4q5SuhfnxxbGrAH3e2RUct9fp2eZVZ3Twc5tRpLBA5QX7hLunKeX35VNV2iyrCmGogRqJPGyMSQVJWSMMByMEm",
  "key24": "4LhvR9mZujXA48QdW6h7L1qNxBEvq2Dk3YSWujCp43gNpNz8LC6hSjt13ovf8NreBDFvJaQ9ER8Wa4vAmAr6JGCM",
  "key25": "4Yqm2mMsAvL3MxyMszxQzH6Za71hMpSuhwBr2dvYtTYdbxr1fpm9YQ1PB66D8ZG9js6Db1eYeTXUU5qQ2iiwcH5u",
  "key26": "3Z6ucngzsxBTtbFWg4nSdG3iuNEmrVcJL4D8o67KBta682iH7mFJFSfBRVq7NovCBLqSUeB93G42FBaAcnKU5oM1",
  "key27": "37NfVaj7ipfcFfCkrzNLfqBbbQNbznsjWuZs2SRvFvqGZjhT8VBPAmRFwerFfibycKyhBg2Ypzj1r2Y78hAmXiRv",
  "key28": "5Pa1BvAtNig6jhLP5j8NwyDYtv81wkgEH3nXvY8zFaWUjxmBB84Rpar8x32RXheVYtQQstdLtdHRFegNqZA75YXB",
  "key29": "52LpNq3uvYV4zMa88NMJje2vSfbwo4TZ7QTpJq22EF4ZXH3GcjSap9vPcHk5W76ECQsLCuaXYmdMMWKzJ5KWYdYF",
  "key30": "4VN9WSHSEtnZndaj1tSSg6nYNajiHb4q6DxEmvoFM9oSxBW5GH7gk6vBfKUhCkpka4kQAGBH3UnK9TwHbTZ53mAA",
  "key31": "4SirsqSXk4obLHzKicrdMrSbW6bspL2Yxu1zKWrSjgjMwwMkzUBEULxdUipTcYo1icqwbF4hFN1pBacfoQpb4zqy",
  "key32": "554He6xTB5zb3KDRXAg4RBFPcwUte387mbpMVmhC5ooGQ5wA3PyTonLWgeqmBWZdXxgPRNesCXE6ZnRBm9Pqj5vS",
  "key33": "4Ndh4Dm4doa7TfAu2toPyR4V57gpdTS9PuQ3mKH9pErkjGK3VaiEvEec7KmS88rPWQHA8JuPSe4y28ZPdJcGyFU4",
  "key34": "Cvi19meY1s49NSJDKH9iTYHwGzgfGU91BDa47DvrvHvQL8SCyT3sSg3PKx67YCd9haN7HMuy7Q5tSPrDF546ovs",
  "key35": "41bn8bocTFnBgWHuQUE8hkk2umnJJB3fRMU5UGXg2dSr5KKVumoCDno34k8a3J55DVNoqvHBQFx6UoBDF8J18BkV",
  "key36": "5BvGX8wgTbutDymkBCxfTpv3omJPNzdwrNFJcsVKapfjk29JCj9WJRQNxqEE8GXaYwcy4rgCcSs9HnSRAi5fJbNK",
  "key37": "2br8KGnNE9DyDdXQgcct2gELeEwuzyAp9YZtv8A6wpgxupn92m369mC5AUyuM8PPhPqfQaru3HA5jLQP8RGQKqon",
  "key38": "35wMJV7DLzpwbUFVgb3LzQ9HBF9JgDBSZ2e5ySe3KsQ6Vb7Vcmx3wMCL9VBhMg4ZqNDCWVoi9Hscea1K35LSHzYz",
  "key39": "381Npob997XEmEGjoHQH5wCHEHoXiBge59GqEAk98p79hmWfNAgHttZhwd6mEuDT4ttSGhsDfA7pGVdooNsiWuYq",
  "key40": "3NgK9223oeh2zhuWrq9MShNJ814NN4sTXgfBKG2af8tzM3AXQzqpy1qZnJEnpMwRB6Mvxk7XeY1P7cPSUJeYx4wR",
  "key41": "2jfgZ9SjqHPrqQdxw8XXcGqP9mtXf7gmZS1JHAWfdpcib4DMTpGouy7hyjmvN5M8VjzdXvBHM935dahkEwX5ekAd",
  "key42": "5o1TM8wWWGjvyLtcDsq9vvSRZcUTikEhX7KiQc5KBVuQAWWE7yTshU4qZNeDDeGkt61xf59fK5yJuG5NbAiH72Tq",
  "key43": "cu9pmF6JpEtcNJu2xc7dEtyicaXLBH3KzoBeR3qyTSgZnvbW7An4crU6s6NUeXMnNZszyHV3aNVZ58Lr2EEH1V6",
  "key44": "tNDtF4JogdLbuGN6uPEXNhwrciLBdGARnJL9Fn8SNw8hFtW8rMpYKzhyvAXKGGWhpHspsi8NkbUzz11e9VgYZzY",
  "key45": "Fh2VEqktJw71W2iWz8bGDfhFD89cAF1nm3nf5TnG5sAhfPN7E46NNcD9gcAWtdm2Zwkm42RmubQC7biYqKFFVaU"
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
