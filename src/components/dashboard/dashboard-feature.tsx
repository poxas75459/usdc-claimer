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
    "3HNJYUM7TVZJfwn9jaHqVoyjw1MjkpPJLkCkDxFn7vxZ8fsoGufbL2jor19xsRdxbnd3nqDn9gBZ7rCACtJJAhvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635ma6kU1VAsTmjn9CZM8NFmBgGaE93d2o9UYmNUbnaDfEkV46VH3b6VgrFAkZunvcfVdGMiJhwvPDMFdKDymSgZ",
  "key1": "28o4zeFqBY62a6aHh7LMTW7ABM4QLJMGhSgfjJ1BEH5oZ4psXWxEzFA5RKPyd7CcWFE2ZZc89LnPChf1oZcDpoHv",
  "key2": "5g4Rg5FiYTHYqdr3UHLH6wd55NT4nPexvg8VgMAyLZaGoBDBD1dQAw6HU15VbekGafEqTPSEgDzS7pm6YLwL3jvZ",
  "key3": "5dZyHwyrYxhE7otEHvYrdnDf9TMtsYrd2q5i8WyEu6xNmemeZp6kAjmpab8DLWs4Pe16MDAQ2zz7rknTzXCRRAaX",
  "key4": "4Hsjfoq81ijkHgrKmjRDUwMtQDQzDCY3csqrfnuEaSeXFkJoW1GhueJgVpoGwjEmLTTTJnognyxmRaKJv6pFyV96",
  "key5": "3KJ4ZrHwhbDSrBhmAVdqkMYk13HGdAn6KBQd67PNtT3hfMZxzQHZJzaJRQrm36Gt3BvYiCvhYSUFSR13UyrqLhzn",
  "key6": "5g8JNkugHVTDJ8PWme65CnqZcuz1DjHH14xH1buG8sg6GQNpkXV5p1D1Y21v86vanXdRrhkyfjzqbHPNJAsmprnb",
  "key7": "5dwNvV1rej9ubxoBhMAAUuqc5ig1CpccypGPgeey467AbKuZKKcNi9YDvkLyXft5S85L4KNaMz2qgt6jDHQPtmmE",
  "key8": "5HYxXUBGWaEGT7smin8jQUFKvfCnFwTr9HNRvUhGtK58VJTAoBF5jhDBbHttFfCunA39AmQMZmk7WZHXq8utYW1T",
  "key9": "2Qi2PJqAo9rFK9xsbvkBGLA8mbHcJTcdfQw55NGPafVVTBYW3kA7ZV7tA1WeVDKZM2mjmrajRc31trYnkQJXD7PA",
  "key10": "3Po3VhWBEDzfz3R5dZQ2pbqge9pV7LLwEogmg97W2odNBBFEyATNfcYS53AS3N8bRUfNVoQALYRdstPzZmeGTvm3",
  "key11": "iWD2up7UsuQF5Nq5EiHrordNxKunoSbxAium8FUeRLjDdbfiR2HxCVp1Cz8DkdqiWTD64iMuJRG9YNoDwatuNzA",
  "key12": "5cUpnohfJVbzonK1JAffFbVUPsGxWyx8PRq2q4yiYfxNMYLYQbpGLhn3RWX1A3ZXdcDtznL39gh58h1eYqJRanaD",
  "key13": "3TtPtdaFyavGwrbe76RNgoUJUifuA1fxyoKnTNnvje9eh9uhTzG2hUfkcfLuYDzrMgNTW8C2pmC3Em7Y1h5iRRwe",
  "key14": "3P7eWLoVNeZXiJ1LJqDqbcbBXQ3zdnQUzaiN3nYJSSLF2rkyGy1pHaZ4rVs899dZZqd19fWhVeB9QGEYjLJmCnVu",
  "key15": "5wPPnZDargRCC65jWXJZ7ikuS2BuRQC6X6iX7qZkS1NqCL6nUXhKASpGFv1ncUD7bW9XPiAtE278HEjao26wjQBM",
  "key16": "2fvX6SeL9VGJUdHUAD9CiY3CUZkqu3kCzbVzu5j9j3A5Gu1gpvqjKPnZByqWLDiZ2eASEcn82FsGDYiDRR9HPT1P",
  "key17": "4DxJGZ1CDPPtdcMhKnFQhvSaeS3vcgNeKxxiTQTeYXbNUb3ZCiSE9xBqG1VudK1ZaEVQn516MFdDfxyPMXJ4xLnJ",
  "key18": "tq6ZdqA8dsEeUMbdSuETYWyujokXdUkUHHSetMSQ4eQE85gt8x5HFABqJoieihza6W4WiiJBoi2qcHCMU7183dq",
  "key19": "5eWUoCCfQKahVcF2VkqJ3sruebkZPD2DzowxpcQ3PhyoJXBQPnz5W5CGyFeHXnJQHd9dFQSqvQMYh6piANmsP5fj",
  "key20": "64RK6MKrFoFc2XVwLsso6jE7wdtzDQmj1idwxGKSQ4UhELJjaNJj4NykYAQHubpzAeeAw78cTdpTr9BRfxpJBx1o",
  "key21": "3nKHfboG7fzreMibQ2FAXUPWxhxPfkCCZc6juJ16vUznzNTifSVLaWXUF9MhkYAmqWUnnFFCRz8sYJ3QUYYNJpST",
  "key22": "2TSg4gpbJFGTuRYFmELFwLUGpWcuXMQE7QTE87ihzJQZLaTT4Ljci5SVAStB4N2zwJ2AYjDQBbf8EHZVpcqKfAuK",
  "key23": "4saZjJoRuKNcfrg4WobrsL8eh2HMgaezQnfhDqscGiu5WCNaVzkw6APRuMqrZewyn9ur4vJxEzJq6BTXtHuGa7Gz",
  "key24": "jz994qcb8bMr3pobyuDJpzKXY54nT3oGH4C89QvniSYiRkFgBpWnjeX4SEsZTVz4AZSL74MWZvisNiAD3uPjYYv",
  "key25": "zRkyQago2sTHEJjiSnLNHHSP7x9kj35LZ2MM18tHJA4X84f5aCPgRoTnD8rZtf7fD9fVMQ88n6b4a9vYnk1yZKp",
  "key26": "5PKDgcUcFRyP1QZ5KBDQiTU8duBrEjrYWzdNFpmkEsK3wb8wkVjoSRkAGZS1b3EYpzsD8W7pQrMqtwKt82ktBDDf",
  "key27": "2AFupM1FApo5EXM4z1yRdwDLQqM6XUy51SiWwqfzJWnCzk2GYvVazcCiND7D5HzU1E4x1t5kJweUgqUkW2LtkkBn",
  "key28": "L2JWeqv9L5coYuKiXGUYB7dz3wRroZ7UApD66k1iSvPHnCmpAsoFhq5mStpRcsxpngAkLFmSZ74EqPAEUZepuf8",
  "key29": "5iN3vfuRVfaigYAABANUHqpXyMJUC1bMWvU9sN6tquZc8ZSjxcGPM7X1BtGkFiZtoSXwGD8qKEkkbfW4FbWCxajP",
  "key30": "4Us6dZbhu1Qf7XxpRSpy1iR3ZGMnCnpqunPwH9V573XRpdBJxnFR4uAY7hrrJMVZUYhyeL8f5SPDzWgcuwd41eXq",
  "key31": "274NRbAfmZwM6UHTJPNu7R6tXft4N62PrkeQAQwu1otsKVHxofBhK5fziyKwqjHeZRVWpNz8dKWuTALeQZg8untt",
  "key32": "PFBT8RJc93KrN5FgFqp4gr7F19kcNBFCmN5rKw9HRCVSc9x2JjshpxTpA6DwQW8pwQpqVUVMt9Tc2DomkMDDotT",
  "key33": "gSV5dyiSYFo2TvCUuku7HBpv6Lk9qA7Xjrii5whsHBPfqb5e4n6pxUsM8LG3D8ERjhQgemiL5vGWKfBjqTmR16r",
  "key34": "g7GqLb76euKQtbZByESL9Y68rEwJpSda8q1iDtc5gJSqKZTApzXNS3rEUaTckeRST2V3PMGTeGCWFsCZJyRZQET",
  "key35": "3Mft36rj6kXy9ZiU2bCjAGQZKJRKZgc8TirWM9qXGGv6ihvgwoqxRurBzJ59PeK7fpBZrnEmUYXSqC8SDAGcGnQC",
  "key36": "4LuL762mUzpxtgiRmknm2NERsGrGasCZsMdwaGY2D3hE4mSBFsmM7W5xmrXB9mCe5FMBSU9WWY6SPmJUjqMeXodD",
  "key37": "9mvpfftDniNd3qgpbu3mqqdayzYT5hZpTKvzRQisirPUhqFEpJGwNvABQVs53qiJxqX3ywQ7daPRBg37eC3z2SM",
  "key38": "2mHyLvhntQVHyPKkPnawkg3RxStywsXQaXwCWwRcLRdhigLCn8P9PnKJS2GwuET47fW6WwLtefv9Py4h4KDmottP"
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
