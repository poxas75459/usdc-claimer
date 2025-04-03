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
    "R7oghAbMdmdJJFNpni6j82jE4KcQwLth4fFsXrGhTfL7KRbq1cyrTYG4c9fz7GHfNpfuy3KCt1tzRvxXEb5ypx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8U9Y9sVeJuQc7pHRFshpqVLRbCAS628BjkgLUtpZghSdvi3p1pwaosyAkBfBmFotiEtaJWzYs7fX87YG9L5V1Vh",
  "key1": "4jqNThBr4wqPseffwwZNYByXRWpJTWbRf6dFDMnhKKwC3nP35fCCzY16MoyPx9EZKEeVUEHWy6DABfUoGVVEUjSE",
  "key2": "395re365hy1VwuCpTi3mHvqYfm8rtxGCUGKZ4y4UdEp7EtcvmNRgYGbKaUrRT1oirVtLWJn35JdE6mvubPyaTqhv",
  "key3": "2aiMe7sHaypvqLrYUW4BgX75jFDNpKSEpiu695t18ApPsaKi3oSMCZWCKLfg6Vn4DeEPzkihnUWZP6sEbK3qUoJf",
  "key4": "3s3rbUKL2pnC3HRtAcRt9mbQCPh6uoSvoiNipWC7Yku5VUdRm1u53CtEm15AkUr8398djKqBBrtsEKeni9SFjyRP",
  "key5": "38jF64UjVXgkPEQKJtbLP34SwBePRJ6NqprAQ5bVG5knmAT5Zv6bb374fSZCwKg4GqCLS97uH9Fgx8jc1QSyXYM5",
  "key6": "2Pmg75XS7VBPAj6BwnjEPYEKyjg4aEw4Xinn5smT9tZa4qXE3F9v2EqaQKCJx5f8j5sQpgWJeWyVvpjCWevLRgzS",
  "key7": "5oYQGjUusqefbRA4ckdrS1zYkrzpuJ2YyU46zGxSSk1FXKhrhVpLi2btocV284MytgxSnkz3Ci6Y2uupDXqK8Ppd",
  "key8": "3Q3SBxZzVz9qPaE2mK8G5TQGp4pwyycPSdFgJumKAcJHQUDWqjxD9XGRpkYvx1EsMqvNX7Vhtw9F4Gn1orAUZLy2",
  "key9": "5NnfsPihuHqoYFkwYUymGU4NRNkDsXfRvnqKSHQUcfbTHzhvdzLujNsapMLFjvNE3r3JzHstNk3Gf5g1w8ZyGz8o",
  "key10": "31nCuhxQTz4gtjEjcKhTmzuJpvAdjLM1vR4tPc726en6Vivhc3k8G8M38GRGdGD1pm185cVpssmW7S1axSBKt5F6",
  "key11": "EUnS1xUFZ8hegJXvHiKRcYWe6XDX7TicMdJa8eNfdGa4DaDf4vjt8rdMC9vHwVDUW8uQzj6oBjawuwJHZnq9hsh",
  "key12": "3KtUpz1dHVxJvFCuHTgjWGzLAkhVEjmSzSX4hyvFZUwJmcMLY12K4RNhCssYnZG8ZxPPLF6o6gAYoB8iGFq83kko",
  "key13": "2pc7E7DBkVmH1PUQB2U6TVJsVvMmjvUwWaN5gzXdzCRFokvAvazdLug4awuQ3UbU7xsCwBa6Q6CwVJ6cK94TCUmR",
  "key14": "3EA2ybPJr8muK8zgmeWWmgjxAto1hFzpSejJbaoJ1TPdPc2uFFhXrKZ5VxjjvGf3ZZxvKoq1RzDA2g1fCSPmSD78",
  "key15": "4BucPBfBB8qBVhCjXFQd9UgYF9y4ULTdfP4U85u674YLu5vgUuX2JafMHkvcCUF2ZYQ8BHwRM5uBHW8xE8uq54pf",
  "key16": "3kbVaWnuYJtqqoMkg4RDsewk7KYWw3QqrMLPYWCsoJKKNPGMFPDfPx4aZgRJSEz1ypgh7hAVkMprAwfpVKYarbMq",
  "key17": "4Nw6ErQEFdjPctqCrhJRC8dqepH4zD6bgBLF2f5UehnAC71Etq6XAEbPmAysHueF8DXKEfkkFd7oKrpS351cfvrL",
  "key18": "5jYNyW4VawfL5Fi31KrXf5LtBH2y99tjqmKSXACyWpmm5XXdRA8K7UfgHvzifNQLakU9LcbuL8ZrPoVQBsGbJsgD",
  "key19": "3EMBPzjoRzBQbYB9Y6m2SaroNqjhT9GjZPn1FfNSoaC7tSwyES9kcf1WqsPdKaZPe1grgNXmcR4M3epLHWn65Bm7",
  "key20": "5qS5dTmN8yUKMhdbAZggnTg3jSWXSGLAew5BTeuMFkc75Bkgq3gct7KVLXEDtDPS2WhXgva2hKJiW7qPCw13zo56",
  "key21": "N6cwcFffLWTk3MmXaLH2wRByqFwQ13aHdphg8ty6Arb1sqCy6LCB1rFL9wXNiTEJaHbVVVdZrnes6txNFGibS1U",
  "key22": "6N4snbCofdmXYoYnDZopVWgqDbHRfJo7L4piqxrNGt7Gh6enMf65zuNaDVYhpBWU3FUQFWEDfL1RroSXb5KFoGi",
  "key23": "3SDXBucxhZnFYZe34BzovA4yR8jg8WZTr8QUKqdVTPXqb9kv5QW4tV7nnba8Dcjs851UcywfAJGFcwZn2a7omHX3",
  "key24": "4NgyjM61QC9vrrv1pV5C9csTBqFCXyzroHG8ondWkBKDjBL8XDQ5GmZy58HMridUYs9fguFKLtLXAD2a3cgpPne2",
  "key25": "5PRtdx3d7VuJ42vimDpadnPK57KZb5ifdhkVXQMF2Z4iyNFsofdtcYcUA9szQovUNVYJsBU985ufEPmF6co8JL9",
  "key26": "123LejvYoV8toP2LvKY6aj3DDG7f4HEsVoqNhvCm3Z9X6kssYwQA4omYBUT8MdmDVrS8nH5sq9juhmGpNogVFwGD",
  "key27": "2cG2MitnZ1isMYmCQzHKFxzzSG8AHA5twvD34rHNMYBKvJdJqL1zJLPygcPTPUCFpp1Vjxwk8925H8tfZ2xZzksc",
  "key28": "5b9vybAEZk7Wwg5EGakP2X9ZNkQCY4fSuQPk8oG8itvV6jFzb8QnNkQjLxSh9TMqNGNwzZTsh9AbzKbKdWvdCGFB",
  "key29": "4MpCGk2QWCFQdCn9qvbAPxMXD3JjTY7dLFCeesz1tbudJEMFaWG2E4sNNyhQ6EjnMj1i8qYXtyikkRQgTu7QnwpB",
  "key30": "RBmFdLE5umCXdW3FfhC3niGNR9rh5b78m8LFYSY9Fbkc7x3Gq81yT1MYmLGrudGVy3t5f4LSgqTjHY3ccNA7Nz4",
  "key31": "38apWDAZ5jFccoojnDYmJXFmM9y95wZLDXcmNoRhjBc1dZN3MNHbC9X7XqRSAyQJf1hFyyn1P8NArwpJuamxdmAZ",
  "key32": "34wEE4K5u1HaRMyLdo5Jmeaxnw5LcxMyr9ZKVmVv6cF7WHsShjgwdTHLCqAL23U1A2yrhD1h9MwfsHNvYMddExWa",
  "key33": "3Htki3aDYdx8u7CPNPpjMSNwVHPWecU3kkcEue12Jc4D5TqJVPggZZMipNQqaczTvzG68RVe2tSKUvPbJTJsd9Ts",
  "key34": "2RNHMVYZ5fmZbqX2Vkfk7atT9K4VAZzg1wCH2rXSsk7q8ka6icEakmceEi3SNZ88rEcXjvVuV9u74B2pPa2NLoWp",
  "key35": "3gTCJMLbeNonV5GuJY43MfT3Vp1EMsE9q1zHTTzdGsJzTJZAyFcQ4ZkvPgu5GMJKLBGLoSrpGvrgx3Qs7DLfBjvH",
  "key36": "4d5TSDhesNMHyyLtX3NMjbVZtsupHKEahtdFoxpJbWif92a4s5YSQuqM4A7cjcZovZC2e1QTbfmkfxvKkqxVdDeC",
  "key37": "gkbTkBG5ZGxPzwHMMzFx8BJgFKootjxCsCW5ef77rCmTFjv6gUfdV4Pt5XJSBo74sqrxtQTeajV624cw5u6z4eG"
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
