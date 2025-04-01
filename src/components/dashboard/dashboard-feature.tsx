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
    "tDPNeV4cmqxGUrDiVJUx1FWvXV9kUVAjNmXsyGN8Fs2qH45LQuUcxRvq4gaLL4a5MeRRArCCcsg6yRo39A9Hd6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLW2cTJFbBGauFkJwdHZLWraLEbKd7WCJ8BfL7mPpsuwfuS4z3uQmux9Zh8egYA8eZdSPkXj9eV5nKbHyFqZxa5",
  "key1": "4q4Zyw41tsHS6ZMwJGmhij4eNbp1ucoEKhEoZuWNZurb3dwxy6KB6m8b8z7uyUp5NGVQW5tVRvMvqCZ4PPwXxwHS",
  "key2": "63ZaTbkNcRengHAjgCEV7ZVqt9NhnFRmQ1Dfs3P2L8bx8rpZvy5AE1YibfUfCennGoXUxaYt71XeGNUxgeUz7YCi",
  "key3": "5q3J37dihgRNsARsNGzk7R7x57NhCk4MrDqGcy7RQhWGaKfSxkSM8jz97Rzu6Gb79pMAvPaRz5WZo3K6CuKntUbv",
  "key4": "2poTKdreZHhngAtmce2BE188CErD4i1QgbUsyJkJfm7APRnMeqEP6Gsm9BVZceu6jVp42PnvVorYbLdDw2Ys1uVd",
  "key5": "2ggbaXtidta3EP92smgoBuEWASYv8DACjKSr6thdqa7ZAhx8crqozZVobrxhFJrnHCUdZVGiEAkCMEvFAhyxw6ie",
  "key6": "2GUhYQTFfpcQJTsFHiJcGGhJWCytuCacXYJ1Wez3wHeQKm7mEP4CftXtwmYHLH4gR5QSq5zoUgFesUWftu5RL7my",
  "key7": "2TatxREjXzH913Jo7YXoxQYHj8pKPho2nckWpJdiT7gzXd5qPyW8jgCS7RUAtfrWLPfvUx2bPZjViYv7hZVEDX4h",
  "key8": "4Ak8zMW8HWVDXgxFcv3ue3JGUzb18R6ArJRAwG6sx7GDx6PmScMZuEhy2EL87DmtJAE6uHpfFiMG4pWdwU6M98h5",
  "key9": "yT69YYuL6E9hHPphbkzGmGKeHCYrLJkWaYGGPL6o8o9q84FVUAPaBftasiKdBkGRLFaW4MdbETNTTb2y1cJ5yai",
  "key10": "3XaDQ7giFvprd3N4PHShHsAfk6MGWtizx3jprJnXdwcu97z1U72frdW2sSwYRknvGJ52Fr9XK5CUeMqz6PyNnPJs",
  "key11": "5z1EyX6f4R7BfvtRZ964ewJc5ZZgtuF4AECBZx1ZzfoXJhSEPv6h6jU64oLo6T3kqW9D6TbQhwQQodq6AHLD62Dy",
  "key12": "2wXdQwHkhrt6VPKPu13vDq9dq3tsYyW357PhjkpMhyG1BrJCSnebsFtetuUraquDpEPU2E6PKsBQmSU9kpZ6jUaA",
  "key13": "3enKM5J76oXUtdiFZJ7nAhhd4bKshB9yE9GQXptW2J8rfnpiNSAJjPrEm6RwbUrDGrY5WL3ZeUr5Y9hu3f9YPndH",
  "key14": "3qRsxACPEQHgme4UZab8HVimGLPeeDJ5B5k6wmoyHvFXSy5G8Vg3bs45EFjWGPfWkhgKuti7SQ7FaYiLBBgnYw78",
  "key15": "3VEp4PP641PRacKrBJeDPPuYrUA1mDP1iA13RYzbjini4Y4jevWHCX4T7bErJh5eomKt5Nja3xxcNwHbWdcodtD3",
  "key16": "5v8jTgFp7nR7sXeraR1jvgez4h2uixWYBidAyW47bMfvKLg8FPNU1F6Gfihd5arCKeX89RUFeDMWTyH15vhMPuhH",
  "key17": "5qhpA3oFfBGS1v2k1KpzNRLRJo8DuJYoty3B4KkLA17ACb9m17i6ygTk8dbE6iaxzDpayJBRS5MzoMjNPpCfTsrP",
  "key18": "4w3FWaCmuXPwpLeKt2pJcFL2h8Xjxc8NF9jd3HxJRYDf9XsPCRkw7NqnEgW3vF9vWFANcr6yZMCUbGwXxRu2jMHC",
  "key19": "5zHtFAHns8bwJUwcXzsy61b2pZvSrjdt42NEc4qrK1UiCD2gTKXbptJyo1eot4TCogY3NKoYsfDiWxsXrFBQGXmn",
  "key20": "2agfxph8MmzdWqk4SixzFcrriw7A3R8AAe6fkgxM69kh9weFkE4EyiFKGDog7WsPvLxbHXyr5cYPge4pNg1vcUJ9",
  "key21": "5AgsEFT3Wit2Catx2G5wSA2Kkqgjfj11ccdRZvThjQu6oNoYPi9xbf4tohV7EpspaKzHSZtfsg2k2Ncm9n7BWhFv",
  "key22": "2gVcHuibJqgkTmnbYNFnqiTaKB913Uwry9sD4AbbuPJ3jFfrkBd2kCZ2RNqhc4Q5T1DtMJc4g5DcfQNxZQwHnEaF",
  "key23": "5xf2mha8AbGQLnuJqNkEt8DGkoJuJw5ZDiPVAYZLcGMDGZ1AZDKvjnqvjWQ7A1BbDebGTwGEMbngUTo6xWd1twBo",
  "key24": "25T9uKyA1ALppo1n3nQUJET9divbmgQZ1u6eTW7rKbpAJabYUbCv5AAw9ZQyDnHfd1faw12GxhkW5eBSFyZ7YfTf",
  "key25": "3rnh3yaWN3XhFznAC15sHhV2wJ8ah9wEexAhzoYxgFvHSCubq6pewXtSJiVsiB6JHmYo8BC6AQdugSQrCMXntD9V",
  "key26": "2fgThGkgnUimriSrvNTStjtCHz6hmTJVEi1wmgfQWwqnkh3enGcA3MY69xGfWFnZcQtx8r2x3xWvqAmEhCK4nh4K",
  "key27": "xHaVJS9a8qajufyhm5SgsyC8hgAYEBYdmmivgV9Aub4a6dvyDGr7DNuQKvF9buL2ntLRuWQwd5YVpsAoiZZ5miQ",
  "key28": "54bAHXCkvURkPhX2LPxc4inPMyXFJnjjSPHXqGbgot9KpoTS9q2HYW1haakPqggQyMAjT4jLHDvBLi21z1b55Gug",
  "key29": "2Xxu4PshYSE5n2S3VKXMag2G37ugmsLUoEdz6SqiGGvNeTYVUci5tW2gzxX4oFmpF5yEGvKWiy2U6yiRaGfMfXfw",
  "key30": "4QvXx2b5Z1buMPTEvT6cmxd9fQTDSdWdoqYPipXkHjoTz6wjxDxTmEoZsJxNKPvPyYEqbXLVQRzc8wH8jqvmxtrG",
  "key31": "5KPaX3LUcNNc3xLkWYPtkFED6dtdJrH2qAm4XguA5tEfbKr5Wcqe5drrWamipq8LFfE4BAwPrUWeLz7f2MiBuMYV",
  "key32": "LCUcSZppszrTBumhscQ46ygvLNnBMGjcrs7MTSNc5XYXD5JQ5gEzMwAdCPLECKgu87hsPoiBuR5G8GtkGYJt5Nm",
  "key33": "37vXib8v6XGCHXmZvvLQMdBfC6GfNaEzx77Zscu5Tj7WXwktwUfTtkJiyJSBrMfi5p82rmtV7WZ1LHxby8FXhxss",
  "key34": "2RzzCHw9BAWibUwqBbDywUnvdu5zuB9XnhkqsRjQ8VbCYi9yM8egukjVoScGh9wnF5drKw1NxZbYe8JrgCTJk8hu",
  "key35": "tjk8vcCLeGN5f7gFTaNa8vb1T6kHGxSTsqC4p5eZaxs8qrbJ5npGyZiDEz2gxrjsZWuY9HiJQbAWYJPBX2vQGAi",
  "key36": "37HXbPutX2QDcT2STN7NS6beQ4iMELUMvjc4gwo7KNirUqkpGseQHRzGBYbNEvbWctSKXPce2w3KRZvCURQa9pAs",
  "key37": "gDSyBS7NyrKPnn1DhqCLxkUsCVbo8pms25arSwiE9fRkcrHjEL4XkJmoSXZxQegQcNPZRxFgSusZ2PKgPU8QcW3",
  "key38": "7PRDXg4J2DLVw75MYLYjmgLogUXgtwQyqaExwX73PKRDGucmbHRPZPfdHufY3tCMkeq8bDfj3nqptdNrtPZ2FKG",
  "key39": "5DWUbvCmeuRGvNEZ8t3sBwhXgXRK7ECL2phBgHDR4TufbJtGanoNVuUxkZyJxbpwPJTpUBMo374drPetwdZoVWXo",
  "key40": "xmeidxVYNpu6dJUjyrTGLEbe7tMCh9gDAZrPywHTHWtKFv57Hxs6p4KkoTVMygKUuvbwJbcMSrajriMbjHUJr7r",
  "key41": "4cw7zJUrhPEDqtZPqqtDhf4U87ukVU3fcLmgkq9EB19Hj9xjxWqBRmqupjhLviYcphWtPf9BELEChkF93tYUZAJm",
  "key42": "2th7ysyUG5vXj68GdXcGd4gFFXZ34Hk9P8TJaU5ZnPiSAUnqaKGg8fkUeNVsSqyyd2t5QCYynjSmJfuQJmzvw9D",
  "key43": "TyfAjUsQv86TpXy1jfDuH8GM42ArJBAkHov59m4pLtMoXa3FMZPo7EZJUPHuL6v8HgmCejf1QKQjT9vdN9FsJnG",
  "key44": "5GKC33WkTbmSXwRKxE46Rh93HyUdmbZCPrmDo8Prdq3kPRDU89UMEbhfSyoJ3TBwzQmyCzUN7TQ7a8Ccm5LB9ofW",
  "key45": "mjVaJFBKqBQZSqgWCcWVRkj1gRYYsvRL3PqXvdbvesUg3NRHTUaqd2oK2hnHycqGyZPhJNGskbD83LoU8rMxyXn",
  "key46": "2P32mZcAkzjBJhiJ9db8FLR6wpvRi5AoF7Cuo7kS7oUVHHReT73oDf9nvpKCuRHf4R11Pb1PC5pevbpVvo1LkLTN"
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
