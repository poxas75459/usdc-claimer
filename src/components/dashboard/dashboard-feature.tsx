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
    "5r4fGcMBMfeUdbu96nCA88dTWtmy1noZLyBNMosKh7FcDiuc6UkgX8Z3Nk82HsNgo9MKBqEBAuQffvFmGNFTWTtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCXxFQ9P2b3ssFwmUMGwFgknzNhNNsErCdimRzLjrwnMCGuzsndtGZk2YqHmWAadZdDfMamsDVHafeFs3xNnoyG",
  "key1": "1vSQMWMFnYjUoe8vn6jYrC4qJCtxPzNM6nFVPPYZbLWHGeBSv2Z2HqRpTYcpSaZA4ArDi2b9zjvkFHLSf9eCgmf",
  "key2": "3Jt4vPrxuF1HHSpGLcGTHsveg3cuUPAiP2ry6aPphJQnWdx6rGVBNq7jmKeR4z55NpR7a5xnnvSVP7zkWADTBSsz",
  "key3": "2bhg3abDjec5KUGuLeSxYwJyxZNtgFQFnqErKMDh4hkm784cjKyRb5m5ViohXm4T5HojSg8mnJEjhXKdVr5339PU",
  "key4": "3X18miX46hpYFWjahmdH66gmLj6CFdQNF1ygnQocoj6jYWptvUgQd8jtrVSPJZKpXPtfi8FCBY8Y6gbLjejGA5U4",
  "key5": "2WCcU9udgG1DyX2v1z18CENfGGa5kahQTGyYi9obupM9uJ5hwtBYiK9tQhwhmRn85PP1LjA8NgVzqi1sFkCpwKgG",
  "key6": "5zaXg2GBPSrbTbGKtRJrbaAHfKsayGgDX7ghG8FZLujJZTtzPwUVLXgnNNjULBB9Pk5QXVJBptfzX1iLxJWbgibX",
  "key7": "2hZrcpLusLiW8faXXrt2mvTN7tjJVwmWiaVrz4cqRpgVDj4dS8UpUp5QJkXg71HspYKRyNVFKYA6a7PMXtS2kqmu",
  "key8": "5Vj8CvLB9tH5Jbn3XNWaNDwMtjv2GtsDsKgTcm6gHkEg4HzSTQAntD1qRsWJy9FwnJVdj1gAvZvTA5hQkKMknC5G",
  "key9": "4T6NyLf4oRhW9WkFZfMRQ4kC3aX8vWU1A8RTvhGfE2Cb1haNkb79ujPCSoTUxhkJTFb7UzwYaq3s3mb4GntUWP2y",
  "key10": "2JcDL7bg3YaM6DekvNX2QLvk3wtX2ji9YzYSTrWCZze1HBjKhSYZq9e1HLXb1LrgEttie2cE22aav2g3Gr93FVWZ",
  "key11": "4jQq2skF6FTu2cUcAu2nM53zaKf8T9fu9Tkpz6TEXv9mqPoGijzEZvkC3rUxbqtHjtdJguZKwgdeMB69og26nsuf",
  "key12": "2KkUwWoEfnVQ8JeT6YF5vAa1koRkM3zbE3BADWr9k8uH3zbPoWoshHB6XXTWKEbv33nd9itrtLmD1jjAKNr14eGd",
  "key13": "2tH8WBcxjGWWxFiW7dMGzJorpxtcGb8DMdAw1gpMmYgQQBPs1KLQvdRGHh8Gwk3N7bcMSTdumpm39P1UNyjHhaRq",
  "key14": "4v57ZT9fwug9aMYo1QUKCDQKZhHY2ybDJ8uM6giTyUoZoDsx41USeKrvPSDCgyeQpoQsB3MGf3cynYAkDGrHfrRh",
  "key15": "3ZtbN6iTiq3s3cYzqRiVz73quJ4mPAtiUpcv5cqi7MFqhpUSw3mVXyTRM7a5GFgmHgMAHGRJU58viqSXFFgd9XsY",
  "key16": "2iSipJA2hx454ou8kiAxjsWpQbBCgDNEj1mp6BaWBHRKuRxDbKo4eZX8qBLzPWMwTdxrxXSVo3LkG6b1BLUS3wWv",
  "key17": "5WxRz3PAMoqeMjkhCQrKvNu7gyE79c26qQgCdngmFqj93yyWMuSoJsXgGWJEDhndF5z9fGiTyUJZMyLhxnMCQwDG",
  "key18": "3AcNt9qtBQVPFdwcv9oxgj4GsmwEtAM4gvw2dxk6vusqrKGFtq7DqmPckwZvWKXJURSNQw78foD8QuH93oMSDhXY",
  "key19": "aoNnJfze599gkygHjhj3cdwv4FqiPBtakJJGLoHSE9JSr8J1k56y9i9LBohdeUuFQTEB7q4KyxSMmWdNfh161FY",
  "key20": "Vocx1Q6LKMdTStzrM53KZ9cGTNENrr9ZgshVgFp4HPeZshMaY3kCsw8jfzntYygdqxf7jvyLQFrqE9HVaKE3Cdr",
  "key21": "4ADHKkPULq8H5tMqi6TpFYNuHkBk9AcCkMJ312UeutcZFKsajECVrxz2T21jDR7VJmY1ggSEpUYuLrtdhm2LrATd",
  "key22": "4nMWJ5yTgrKmSPVHowWbkvKwSgTfcb7Mf2RnC1ujsxCkTttvZ1efebGi3CcY1aiCCqVa7SWSwvjAjAgbtWLmgwtm",
  "key23": "MGhqtzmx8mWEGvNhJYo1NZxo12YsnjbwZKt4anUDDimkatgLpYgCeoRi9hoWG5zAbasohYpBxzxPTuzGBmha91Q",
  "key24": "2e1JuGPRbXhW33PMv3caWEaoieYxCNEge6bcCmn2EYVAnWpYrrQAuAbKqhQZHjaZcbUgtjzPJCotRQa5Ky8ZVyxx",
  "key25": "41BUDW2b5yLJB1g2yNktxFoEaShjtXpZ97oBvYhn2pn9tbHgX9c9iQjLKBEo9rjuoyT9MGFjvpm41z27rpu8BYTJ",
  "key26": "5ouDWga2W8mbR3ziMPyLtXGQKNDmzAaMQ8GCKXd1D3F2RryLd5BfeSx1Lbkt1ZTrYGEQ8wTyf7ds1JirNAeRLAAN",
  "key27": "55V3hLHZqfH7aeq9JiZS2YNsbuMy9nSy6KC9MPeoxxXVcA6eftQWm2UphchMrGCAhUyvAzgARTUPq26j8eHRtr7n",
  "key28": "LYhsLNFVVwJtRZTjBtqjwt1BdS27Wq9mXY5tDE7weSyfNXX1aLM1ouUPhm6GAk9ZHPokeuqkW1dwFRCMo39NZF3",
  "key29": "Dsx9hPMpxfiMqkKcVAW7Jnx7t266kXtz2LcfSZek6DwbtGDpi79PdVVyv95zYWi3NU36DyW6tzxZRLZZJxBd5Zo",
  "key30": "8ZQdTnULZV61UthpeojD9578L897vmESxoX6yEtsXZ74ceHayaziyHpPDWw8BhXWYhqxA47GgsJbCc1q5V33A5K",
  "key31": "2kFnVzNL2ghS9tJ35DZrR5T68gpjVHRLfMLLHYvcPvZpTZaeSH4Hqb7FBLY8zXFemY4tKjF4gp9RuNraLbbeahgP",
  "key32": "3W93jc8kB3CXyuaV2u15f2DpEoFaaMa8b3BpQ1cJqhpPTdEugE6wmYE61BbCSJBSJZoF7ELrRsgfkXV4jziYzfxG",
  "key33": "arvkXziy1ZvtD9B9NvSUh4ZZ3uvgHYw3Gj57SFpkwiFFVe1fevuHgjfnrntBuanipixMCC6HMWoji25YjprPJA1",
  "key34": "2jw9BHBe1p4dw9UVPReVmTvDf13coEVfshC9hHqjxJift4dTPW8k5vrJsspWrEYXYt7836bFHWUqGsC7h8RhQEYX",
  "key35": "3hCCZE7kqtm1fxcnNZcivfMYwSLA3KLqLWGncme4cLTikiE4GQBMsV9tqXkmKvoWX3NxnPoaqGtLPxugdkAAiYCu",
  "key36": "5Mqvb4zy8BiW4rw7KcX544AtmtrxPEXB41Db5v1BfnJmeLvJ6qR5NDfk4Cx3Fd7So4FVzzB3TsuW4X56QU3BYQRA",
  "key37": "5hstNT17fPbBw6ygnWxFMexWizch628L16An93BqqUuYzz1X6eCFiAVhAJiHYugdqBhJoL6VZg34KYTbDM92hrHu",
  "key38": "5si9P3fKkTjvXkH34998qWQ7Q6xiXkJeoBxEMRPt5PhQBhbKTSdta8R19JdMF6RiDU3jSMQdWH3Duukg7Qp3QE1U"
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
