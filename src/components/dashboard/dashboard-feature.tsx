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
    "2hHMVmoKy6SQfHyV7tBuA8WB5JY86YNLkHvnM16nb78xsREjpyBMNLM8nbfht7sKJ8d7vNbwcCBEoJzHB2eyhjJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5qE8qZXEEKHnvCixnLdFhYF9GZ1JCDCYF92wmfKoXowbDGd6kaR7h1MDR6to53i3GDsnyAJrFv1UpwXL8pLEiQ",
  "key1": "5bGeaM7AhGh6br9dgJkTcwnUbsWHRTnFQsprdvwhuYqFzEog4QXHc8aUeXJSRMxGfY8DqBW2woS9JKUMJEyVFV8H",
  "key2": "2ERPAnwtkxrtkvR6rUwXJTPcjTNHKaAB8ADjivY6wUBjn5RbGsWnvg9wJHNz34TNrdgKU9a6ZfHd7Sr4mgYQPWQ8",
  "key3": "4WMGnCnctHS7hhVNaGPkfPm2nT6YV7jUovBS1PmW4pttwG9DxZXqgRh4wEs3Ss6wqhgPinrBNLq6AF8rBQv4Fa7W",
  "key4": "oKnbhtoGxWHvyJ6oc8gqTwMy3iu1afvt5sp3uwBfn4BR7M4cinkxExwvyWZRD8qyog5GevnMFBTqgGoajK4XPqZ",
  "key5": "kwY8QE4oAUoLx43kMhUuzPzaicKy4HcPyujMcDtfqoEzS237oKrABfrjB4t8Zwo3mM4dLcFn58AyUjDYoKKYYjJ",
  "key6": "2c7ZLXUU6kMgz5PzsipupdP9GRaG73oYdVtgv7nN6cupbac9PbKhcyVedLVRmQ5g9ok1dmvcJdk4oJMieKNtMnC",
  "key7": "5EwBzRLpf76JCJyKRN6hToYwpoy1AgQ8453nCrVn9jZKWtjaHmFbNhDCQET7Cp2TeNrFqQ7fFwKXcMaSCz716JPT",
  "key8": "3ZrjJQuF8erRDXr9Fut5VhFv6P2bxxW8bQxXrdR2rBX4sD4sFseKWa1sU5pkDWMWcJH15RcgvK6ENQRxmRHPXTRe",
  "key9": "3URMir4LsZFCZTQjhJxpsYeUT8FcenbR4dxePs3jTHRwvFWcQzin1dNHWGHENX5Adv5TRvGYnVooXsYUVMsUUXNU",
  "key10": "67AdGm3wktx5dSv1v8uRgkEqSWkpmo1DGkYYDYmcsGU5UCw487TTp42dGWVUmFeVTdwo7yfh4XVWZz5nQQmZEc4X",
  "key11": "53Bk6gk5C9zgYk6kLCnDP5YJVgpHvn1MjruvtAepRssqu2ZtNQ4D8k5h1BBgDREzPE3D3m1XCCNJFNX1VE6p8UX8",
  "key12": "2QppsMLHsu2uFE4CQLA5hKzdZiF1bMEnKRLR1vz3UWBhdykcTbsUKmah2RcdmViCDmt9Pr75Znnz2Bmi9ywvLbEr",
  "key13": "4WbjTN4BjCPmcNyqZUbUsgq9dY4LWpk2nDyGj69Jxghc4rkyez7wa3Ne4EAxRHFAknzYnCtt4L3ASkfyvdi2Gi5X",
  "key14": "juCknRjRTeKxrZtLTg68EzCkCG5A81s52whLvrJhKTSASS7VcNoFhyFQpm6WZ1m8bviyvHrFFpd6bBDNFUmk3PU",
  "key15": "2eduYHrNXb31vEy6rHHfiV12Z115uoGJCyq6Zi5jkexYZSSQiqdYtxCp8xgSmDoefA6VQ8f4wooqasc28f1ygUva",
  "key16": "5Zz2J2qfgMUDr3HFM4yQ71Y2eezUkrCD6m1N7wFKB3pTFotJBUyfPyE3xpz9yrGGLoxVJY77hF1xWYUETJtqoB9d",
  "key17": "4fZWr9wWD12JCC8iYHDsQAmFsT7AeNmQi5o3MfP8y25M8bjgKc47mjU8CXUEt2a2ZptBW3arNytBMLBi2pCX3AqQ",
  "key18": "3D8LLQJAZUoXQ4nuQTeUmx2rw8aoWLdnUSLiy7cjGvnYqu8qZkoxZ3UJMSnk1v1xT6cnpQAqzeJCzNXMhuBhTXEo",
  "key19": "3fqrUpUQjSuZqtxda46ptUQ8WNrmhyJmT26yY3vEKtXsxbjy1tFMFxTWNLjQAWWCV9BX2UtbSmFG4wv2uYSpSLNF",
  "key20": "46wg5TfXFCXeCuVaUDn1r2Uny5Kc5dWxyC54KfZJBUNtMACDt9TCxtFF4jr5c6BghyQ7CT8zuZbM9YLDmdNQ1GEd",
  "key21": "2xDsQgAyy5XuhzGRHUqF8iuuoUs6wL6AG1REyhb23HxrpQ7DzLpLjvfYCTaXsxAgvaU7embc1DYMqEBaqmoyT4Cy",
  "key22": "jzMpZ8kF9199hFFF3viu1MKYVrxHQGvb8dFLn2p9QdXxVH7AY8Vh2w8izdukthFtYoFpzpaSU7w1Lh5jrAL5Lct",
  "key23": "5p9N7WBR25dUKntgTo4BeKhJHxgKDcjdr9NDWS8evZQ7yKAaJyhViKZB7AHV7J88j2MU48fKSr1XY8MQq1hBRjvJ",
  "key24": "38AVyhNC3RKZKr6hQuEheWZE6YbtEdek73NHyK8GfxFb6NpkfsAc5gtt6uQvaPHgcwoNegKV5XFZNxiUjdmGaHiB",
  "key25": "3A2SpYfMaiEait1itsrBcYEJ1hStrRM1sJjtaSXEdiyHbmto2sLVWULL7VDrvrZG7mcNzZwYiCiCxkT4gFzBFsM7",
  "key26": "Nrppv2foVXvwr27CZF3PzrjBqKhicAqkhPkaSKoQYCtvCTfsZKKEwDyc75y4RSUSbVeBLHKL7VFA5oUKonmvNed",
  "key27": "28og2qD26kchpXCAatBZdCothtB1XrEEPQGaYr5AuftkChRWwThu9FVPsKXxZfDuJyrybdXhujBaoSe6PyEmVRB6",
  "key28": "hUbSZ111KimeemETXkBhDSc4oHkn1CxjSiMmpTtefJ8G9r7RW3DH6QuRAY7d3xrG66eeuPMtgF8PfzZBBxxVTCD",
  "key29": "27d2eSJ4SM7tNzY9a1PfJfLE4yvUMUtCdTxGxBP78vJfGpfMedhXQ3j18E7nNXNyYi3uj2rtKPvDLGdfx2YJ4pQn",
  "key30": "3ScMHzEGRXMsQbjrDzUKia3jbAMUeDKSk1qFAYxsCk4FsEPYV5oMGA52JpYB7Xf18E172YeDRH8Eo1UvhE9QCEFa",
  "key31": "2aXCtPMQ8QJHR1jsF3CxJk4rrT4daAWTiMzEgLpTGrUYeUjWiobqosSkykhbZ3ohXEo4LiZpdTya3RRqZNRbaZpA",
  "key32": "5ResECcjQdSKxHiawDwLcA1a135zSu25VwUniTNpDBJJxufFCvU48mLtPrtZf6XgrnTaSyi1bpxVeLk9seSkddp2",
  "key33": "jZjE3xUiDKXKURo85p7JVSkJLUEU7Kum9Lob1VSDcA4W4bDEDUquZdJ45P1JfwMQGPLn3fQxMCGqvUBWY52QetU",
  "key34": "2oWFBghK4jP8ZNfsQBhewZWrcw2jDUEbP82cTbPwBWvFDvXtozQgYKXXbYuWhrc3DuVbcm4FTPKST2bbunMHZVpz",
  "key35": "4SLEmwoPTAWZadHrgC7CXiBsMasPJmYcVFy2wUBR77cVns5b8KGptsrYwqbMBP65G7ow8Kvwb9Qb9MRuPhYRkqEW",
  "key36": "5Sx8i2utxRBFnFtbgrJnVu2vzG29uwTnZ9GXT9mmaxZpjV3H4wukT3a8mNjpKrv6FvdthMNgjXtw8YEw6fcjzc2i",
  "key37": "3xt4vwyiVJMFb83VsfJMKhsmfVc331YZYL5j9zDfZwC3mCwRswqSgmoKScyCE5dusLqu92TwHAoaqysmQTqAtWWg"
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
