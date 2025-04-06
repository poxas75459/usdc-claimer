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
    "22532HYPpto1vNUa1NBDnWs84ZefLQ6jSptp89SfNSWuY1y69Z951nPXTjuK8oDH4QRjocds4obtr3bAWCy3zn9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5yBkMSw7FZ8eCgRKRoW4r6EjskxpDmwm31mrJYE6CUywdvkQiSjuLcCVax5JVZZEoJf5AgW8Enstx5cMiSoyCw",
  "key1": "2gcenCyaAHmf2en2bffTp8qvz7RSCUEtjGURfTZdmNRpdTUsWr9fDVPBewwjyTZysrrg8R6JfXxsEmLmXS91tvVH",
  "key2": "4cVQBkD6dReVRnh9cNdd72ef1aAiY1wXptwu2Kap3hnGC5caWgfZfjHzLh55AnVoG1Y9vkCPGVkbT8V7F7cgHMN4",
  "key3": "2DciUPiXAitftDwEtW7G2PWtfUJvB4cBsbJNfhWWyeBF5yWuRwNiAURThEnP3E1bV8pKVSkCo2ySVW6CmcyUukzR",
  "key4": "4jyLuo7aUGpqFf77cUts9N2gAaTU7a2qmSYnsPBrisctpvnXWKkvpdxFkqq8YzjrQbZ32xhi5DpkbQUuEgEXxBdu",
  "key5": "3E7BPawLJgAwX2KXuetwBjobfxAJ2yYTBNo3hWxiUbgx1wHRLgHmPyNEKuT8VXbZU9NCRMMiRFzkfUt4P8cdGCUd",
  "key6": "bUS8EfiZdxyRbAFv5svxZ9EveGq8tjYdeKWqBo4RBV33NrdziChpAPDGLbhR1SnhaRqrBho5dnYJEL8v5nJ3FVi",
  "key7": "mSk1StqvoydkvjXmhwKvNGDXNRnhVH9E429VjL3C465Dgf42F6qpcjc4x6AkAaMYQy6CxnWHhuxyKr57tjvkVpV",
  "key8": "FxHurHjp8MQ2dtNnEp6RamZpBw4Lm2cEFg9ZphbckarunFA2JxoYa24daBKE3aia1RxoUuihFSokDktmvEb6DNu",
  "key9": "5RGx1Laj2JSBxoK9s6aM5JYvdqoArLhzoTYqW2hjAtPiSrHdXynwvbhHDbotqGkfsaRKzV5YqrYAbu2a6hbcQLYW",
  "key10": "4MXhg4zVsdBj7ViDNg9LsFH5sFdTkeWVyZdiBDTMs6D5htt8HTjtcZiQE19oiLRSNYAt5vQCrLBYFfkDPd1taKnu",
  "key11": "2u86hXL4kbLT9fxH6qbFFqjbrotAGW8XPRf8ubejTkWThziHt9gRBztcrJsb6P5Ks8wxAT7yfoVgN8XjAzyMWdsE",
  "key12": "3fZUNp2wuikoyDDSuYAexF7wgsFHzSwiQdBkKAh8pFqhkVsMVFsxDbpFqXXZtMZLXsDMzYsWSnCMzJidiyyodwj5",
  "key13": "22ih25zs9DzQcZ98tb4wZVB7nhcUbKmnf9dXNENsTFv4UmnFs5tmcwCexeqgNMpypLhpeKq1K358CwX89CBExekH",
  "key14": "5mZHAZjheNqo1KP28BVVTWmyTEbhV6xPenMgtYo9VWW1AaaSB9v9hxzwskwSg4aSHPtKzrWq9nCyLeX7ivFXy2ng",
  "key15": "6hEhwtT7BDoAFDmXffG9LN7WEQbeHrbUc8TrBibXSpe9BmosiPNaTtkQu8cWZHoJJ9jvWTPXG7pCUyFWac9bS3p",
  "key16": "28CSNuXsoqFqX1r8oSw7NTZsvvYkdAuWxs76Wq1bugabLi3eSXqLvnhbYxGKhWWck9Vu1iaXk1CEMdDnw8m6Hmv8",
  "key17": "2ryMYDZWX8yVehGvSypxZ9sDjZUdYu2cGZdGax7cyZxBdBS6shbDiXNt3WeSMhcGhWQCzKcYvxjqAVZXot7wGYBY",
  "key18": "2NJZcuHrowEwK6eXmCSsN9yUvQA74AU2uCJToTK5HJ5YqqUU4oejJw6hFNyCscQZFh7oAzugjkWBw3aHRdscQyck",
  "key19": "4dBoqdCPARjJ4iRZBF4eiPajea436mbbBAL7Tu2br1Yj3gyN6vqz7JpiEh4RFWCxaXDcBgKCV4CYNSyBFmxURDLw",
  "key20": "pNsoY9tF2GafvNThXNAhNZjcXP3YPWkSLsGz6EeM15gRwE9ELVDcXj5LBmP8jdXwwHX4ae1Dpiin2awZPaULtUo",
  "key21": "UTV1M7THK6rnTQ1yGkcieAoyiFKnCocLyKvtXJjU4kfsyoFnBsnsRxmrSicsAeYm2cUSUhuCHiowW9ccabgKpWL",
  "key22": "aDj69PQ4acumnJn2WQp5Y5BSBMujP1AuE3nZysFvVyyctBTbhxgMLW6HCZ4aJTofsbjyUzUDiTTyQVgQJSq4UUy",
  "key23": "2fdBa75zup2mDPVZefxGXaFSXVMw6zZjfVkTar43u3LjDTdi7X9FmAoZTtr7aeJPzJdPN5KXLjodgHKCqKt89xjV",
  "key24": "46ro73BWPfcnqQuQ6xsei2rzmnGDAnCx5gi6UePrhehHshmjXA4MZYuqVRjU2ToZfaAbF3RetvdfHAtYf1cPQEFz",
  "key25": "2wJRQV2tEqdwWYeaixBDNm1bhCwy19CyDAKHHKLuDLGa9P1G64tX4AixtjyNw6PwcdWBMxkhN9PKqMycVtMocbkw",
  "key26": "3MLoahuwGWjY2WtHRbuYpRMXRZYJ8syx2FoLcEGfVuQ2YPn6wxQndwe8xu8iHdHz8vLPepWCyBzkEt1j7AYMNHRA",
  "key27": "66TPLbsqTvVeTHSENyCie2xnxyJRkDYNoVcQ6A2e7ijB1ogZxgUfSqqMyc2TB8xoK5uY3Jo4YTQ8mVWwHQkQBkMY",
  "key28": "5ReN7B5DL5PaaSku2vqSHhFdJRxY3WhdkqR24A9csdSKNFkhJ4jN381RhD7ApWDBXzogQHPGkpS2VRCZsUEmrgm6",
  "key29": "2ZQ24Np4XnXwmvP7j14sGkN9wPGAUSPxB8o8bEgmrsLq8vV41TQpv7A6zwR8MfH7w46HceMc8jB4HCQX2quv14nx",
  "key30": "QCwuT72NkJLzvTSzgpaDGwTbzqy5KfBMK2yQwViutJJMjiyxFoJPbeJZH4gLxBhmu8ZSK6oXoNcQazgMchyxgk8",
  "key31": "2y8vdjR6TiW2m2ebcyTjxKXJWSi1hKTLCqJjQoj7vSy9Xc7Pbuf4WyCgETU6PqEa7EeL6MQj1AnqvusXZECPTkGk",
  "key32": "JehUJdyLMpdUUnstxANEYUB4UVvg4YJfiPUpzC3XcyijwMXuHF8idePTjiibs5KEErZdzzChQpdMpbavDsVHTKp",
  "key33": "58rFZExhhF5HTKNWmUn6WnpK9X2gQywn4jxDruBMoxPg9KnY4yUYxGFGrSFvy3t5goQmqaJLKFp4By2h5ir1UQv9",
  "key34": "uNaGGuGhEinLHMVu6ZtHudByVdJfMGu2ZQqTBwH18eCCcuVz5Ae1a5oSm9i4T2GR35RHnsS7TFkq74yET6K1A4v",
  "key35": "3Ku3rYsSYeNT9zQFjsHUo4KtYRvqD7iiAa88NqQUX8mzcKZxYw8xKfgrnPt75y1pvBT3dFZqA5ikVhu4yjhwsoYz",
  "key36": "3wH8QHP6rki5wnqHxuK3kEgL7vCQZ5SxQhHVnbpffv5XSPRVLCrTDbt5D4cygPqdst8TXwYy2eFYvUZZsytjD6gx",
  "key37": "2UycMBKQuvEKTE2daztp9QMfpegn9SuYkbLxMCJd4AzUa1HhbHv7qHryAGPo79UQYcvoqVnVSmkTi7iuPimBfzQ",
  "key38": "5AcH3NRy3kpzZa29P33n9tBwPMPaTP5qnZ9LQzsf8FHxFtno8mTSBw8d7bP9rNFKmBaC6cZgvf5s6rpZjsTudEwi",
  "key39": "44C2yTKh7ABAtpZhjUtHm7hWz2DkVmaGX1RTn8fyqcUYs2HVNNPKT3CmFvkd3u8nbdjestwi7CJWPuwLWX6U4jim",
  "key40": "36vVhHTF6SWbYJCN9CN88EXGVTkHmnduurfe94KFEcKzPFNBQh1A4UXAVsSsqxnwKU74DqFwcp4pFhrvZmxrtdsv"
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
