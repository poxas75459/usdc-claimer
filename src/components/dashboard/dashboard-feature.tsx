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
    "2AjfPvqwye4qo1jRJ7S93Znsf9xFFbRMBZsa1wsBkdfayxjuUzpG2K1PC47isp42bEs29hAstv2QSShnw2asnN5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bcYxcqVuhdJRvkn7ge86WSfdo1s4JSmZG9JxjLDmua6mRoVTzXVHK2zAx1yv1j3b6VfrYSUc15MXkxDvmwJ7dUp",
  "key1": "5H8JvZ5eXt2ji8rpZAnF67E55Njx4fst9XtaQoWcdt9hZsogaTY9wY4Wz52JnjZvuosjfo1vL8o2Fc8kTeAcGbbD",
  "key2": "3suTPX5LYQocjkt7GYXd41QEXkZkZjgEjw6ENqFnFViyqCydS4gRcMPk6R6uuN26voLFPBE5zpWwwtMBhiMK8Kmy",
  "key3": "53TSTtWPN6QcXUxp1Af5jJLjZ9AUDThCDKDiD4kpfJu7jRtbUDEeqHktRbMBqp98EanfCXBP4ottXVFV4Zk5chNF",
  "key4": "3dwq1Lpjv7eduC8B3cwNDVY9EsucAqP5HPKYwnr1orYZhJU1TADJiVqs1eQF3dmnrPNGFZbuaht4Bj1w2xKwWcFQ",
  "key5": "5fsnFVSoCtgRwDLvrrLvjuavVSe5FzyFVuQ6Ng2oW2sSk7ZshpXxinA9fTSCFHmmDZ7MrRPMVUpnaWEKKbc62BpH",
  "key6": "6zQmQCbouR93cqCk9sFhMnshaL8X13sKK9mv9MkKFhHgkr9nx82Xo7eVRRcRd1Kju3atjmfduqqDLuPAdALdZUn",
  "key7": "3wGDekNSsnByQNNmGzGdce7Q2mGiD4yFJ9AxwGPWRcjjtBtSRQGSwFp7H9T2v6FNGbAEDwvENgViVxNX9xtX8cCt",
  "key8": "56Qs8Tyss1ZLxGhhskum4V48scXfuz6NePEjjuuPY4b1pF2LauzLvM3uxKzSqyhtNzpMdNyikTmqFDwj2zJibR21",
  "key9": "5xtB9CWX4wc5Ns1w8TJ7TSD7Zt84dnQYatcwZ1mJqsZsUrpbiDMvkE66skF6DgPvfZ8KS83PeZL73kMJgAKGDBZ3",
  "key10": "38XsVdc5zbBMAAFMhgZXg4oBZEUhDFd7LAfs8rHEXhKLYpo24dzA7kw3vMVAmTiCkXDFAny6LxGqiP6E38bTSWj9",
  "key11": "2BqPujShiaytKgf9n2wLj9UR3HecomgdiTmAKf2ZD6cKTArN3eCzpxJxvuskVapRc4gmDhuyT6MWXF1GRDUJTebW",
  "key12": "5jpMQoyV6YjWJEJFfSdD9h4gMbivaikZrXmQDn5TaGu3A2rLyzA3VCRB5i4x4pNKPc9wKscHE1j4KBzaSnW7Wgrt",
  "key13": "3WT8Wo7oSdxn9YR5jtec4cuMV4QpR7gRHwasPYQRMUTSHkZSzBg8gMw2C23fPayPfmNR1B6mg3vyEMTANwFFgNLa",
  "key14": "3NNNyU3copRdnuqL2MsxhoMwGgABQqyHDWA7xuPrBZofSZJMkcmY5N8ZAmryo8bVdcUos4XugahyTZvnwmVXXRPb",
  "key15": "483VFsx2m98d8JZf6hBcAjouo9nCNmy4CDFuc89tPtKN6ZjC92NeWntiYV5eYDUt1Hm6KoswPZBffbivkD53yeNv",
  "key16": "4wrWQzc8m5kmTBgiZegFU4zEdRJqXWwKdZLfPQ9Z1Trwx5w3Yn5ZAUyf3GKrP9idBdURBkmByRnWcG8A9P4kFrhV",
  "key17": "4FsBD6JCKBkCm5JxuzSs6LXMrMFfnNQRMZDBV2VDqjGz2rx7skL8u8nfxrttZ9k59ExScBh5LNxMmA3pmA2wfxL6",
  "key18": "4pUFLkE6R5gzXwc4NQCZUGn7UWGKdpEWGbmFYaSJ8fgqwNQPERzYAYeQdVyaeZZjAM2GjdJoZpkt8ZneLvEvd8i5",
  "key19": "57QYZa51yQx83A3YJwXEtTFxBMyTh7YJDRz6qscmD9oEUB3N9ePUbhbt891XfdW6b8EfXTJiw1hLLDrMbZZnJNNZ",
  "key20": "2qUaZRjk9HEMxusHTGViuZhcBqSQYd18jaccpYU8Jm641Mesm1i6GcZ7RAnFUbJ5ZroGdJviMfJRRXLR2fnDGGdn",
  "key21": "31An4FZsEMevvd5rfcDCGKeByKZiUhJSFYeGLsWgKyin8B6wRYPogbpV2GgmMkbNqcdcVZ7FWyBrbGKWPA1GMwhF",
  "key22": "3momAAwGRczWUuWsaXtXzjYJyzKspwMRz7zZQdqRYFiQwVds6YoKkq3LMB7kPEpZYKdP4KbVy7cjHPNQKgzhqfb",
  "key23": "21UzCZ8affuf6dQcunL7deoErH5Tkg2UQqndHHUBwY5P1mbmiaHZZxwPaL2PYqidz4ZsTvnuzFpPpbQr7JpxFsGw",
  "key24": "GfyUXekqGNdLkwT3CkhKR4xvuHNvujj2iYpYzvRCHjgwjNoNZFfjz2AJsaUbW4LNMNoskrzqFhq9YLAJBdQZNM1",
  "key25": "5nMvdx8g2C3T8hPmw25qJAf6AZ4rYukMpJUkC3eQfo6ysMjXeDhAhTyKQiqHqYaQ1CKgJx2Lrj8rV3D32S51sTZX",
  "key26": "3f75dm7ysjxSfuis9T6FeM56kWiBmvBjLncWTp4aUxCkt8y2trCwhrgfUzSAfQ6avnnjbnh3nNdUFJdm4go13rvw",
  "key27": "32S6YgCo4EZ1wKdr2eK7XwMSJvCUUhCVNhKZsjTzvymVp8xaeB5uBtuF6aQTHDoUx7jz2NMoiRPtifQTL1SzHtWJ",
  "key28": "4Gf3Z1Ji1n9Psczmaf7VgXuvH2dEgvTCZ4pWzKHB2ziw68BRnNhPayJCmBRfZuFvZBE9zxNPQdRgra45AuBWZhgf",
  "key29": "3yudxKrTM6QBmFseztXjuRELyxuLc3HibMUHk13k33B4mUtXo9k2kiikQiFK7ieSFta8hDyuzEzHNqgFXhgacDG",
  "key30": "Y8tZwqCmUSi8q4snvx6fDW1wtSbYDKPDgyGNS1S6mbqN1suc392MZeSHDPYKzh7RBZJ2qw8cC92QScNV84ncAwq",
  "key31": "5T3zYNLnC5PHHrunECBDATKfQXrkxRnC3ZNTiZPUZXVR99mCyZs3mMqjefPtvLNhGHA8Z9ZjaJuJZkfTW8c2453n",
  "key32": "2qprDaoTFvM5hfWeRRSv1kQEU7Mbjqm6xVSB13CYbAsqMemSw97DLVEUXLAfi8bVCeDUPhuGz2MHt76MX4eomUQN",
  "key33": "51C3a1hVGqXN4APph2jvs6saxn7ERdM2mFaTHGGVjZh5nzNbyBfSNTKTK1Gc8AhC4dfzvta1EJEibymDgtprinZU",
  "key34": "39j2hhifyh8rDbG9Q4Jax6ABZZieD4Z69fQ7BS7Fsdfy88SMpa58bNJpaxvazP2wEX2HKzsWfxVunUeSDBNscYyG",
  "key35": "3T8o3hanPzd7EoV1iXmyWgVkCGGaKXVv2LxsexGs1bphsPFSHy7N8eNKC4J5856ViARanhT35EQDj3jghobTJYfm",
  "key36": "4MVMf6EQmDFEaAoPgiFmbjyxuyYVG9mqBMeSJ5vPgwkpHCqgm5EQpvntDi7hvLGvzdxAG92sky9o6oeUDLDsTctB",
  "key37": "379eatrU5mMi2jPyW3pdVuGjTKJawkbASYdTAnS9DkiGjqsJkBENSgGhMAzKonNs9R3LnZo2jZiAKN4LFWGHwrEY",
  "key38": "o1UziYU7jRVCzzi7ZZTkyVmSEX2QC756uTjkSAb9ZTDtMBdYukzhbnbCKhmCBQhGLtjDtQoCfUHCdXsToouzMew"
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
