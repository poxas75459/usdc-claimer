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
    "5xSr1QJv3P8VbzYU4AD5KoDKCaQp859xaSLc8EDc95B4Yfrk9LmoBNnVvnnGEMgATfBSmXCGbEL4dUeJnT7v3XjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62FXVFr6PRucftmVktd9wfDjgCjuafwpg7PikvcypLtTkC7fFvvLPoUJaW2MKkX9AssZjyG29Du3modptMjjQNDb",
  "key1": "3u5rv85DMuBL7V4mvN6yKWW9PyjUgBM21iGjMMZAgQEWPRdowhRcRj7gbPVSjorptHBjbcuZeUkpH2PrNiayzUeb",
  "key2": "3aJRvLcYC1SjFzXq1Dfp5Uj2Y4hD3dWdVmRDRin7oHz9nKyzU7U6JddJALN7eNvmETSvKTEx5YSh2WJ1rs2ojeMi",
  "key3": "2PqGPW2KpZYFgj3Wce3HBEtxFHQNingxcJjijHmTqd9PMj16RnWEDcBob1yHck9wvHZwYzhMJFypDZr26GmGHLc2",
  "key4": "2h2bDfYwtn6qWSFtrphbk6ED6Efa9ou3yxwTgaTq8W1L1sjB2gZpRhhWZUPZCr9C8o5gC9KsUy8mxUMYey1fp3FD",
  "key5": "2m4BnpERoaw69D4586FATKngSbUrwp9Gi6RqmvEs6TigFXDkz5Z9E2RGZ9vWfhbS8eN6izT6VQGyA314BvQNzsF9",
  "key6": "64uzkeL9SX1CEiKVcTNoy7VJJT6pxX5h2daZJpqK9p3Wzr2i9BpiKjVZwTNvudL63nUcbaER2Yq9muaeKJBXNq3S",
  "key7": "22JUHSQTbkh2rkGMFdChiHpWDkQWRc2uGzkzD5DkZZF9i3Pu7r5BV6vBqnvcpVD7D7JKSFEpeZoNb79wxTKtTLE4",
  "key8": "61UhLLYcgxaXWyqxPZxmaLj2UbbKpiRKxtXiQ9rm5Jyfdh6zywrKxcVqbPT9r5WMian5qrCiz4C7XNCGgA6GRRCi",
  "key9": "W7AtF8yRnLvWtoNCaJYCwhKEf7dquXywdVSbFJt1VtvyjTFte7b1fnHgM6VwqaX5e4d9SjTiM9cxswtCRJ3HSzB",
  "key10": "4wSq57PhNZtHn42TSp6puVvXxQirw5vm8EB8nkmRhShpUHB48n81MtPJW6GFHQJq8W1wWbKwrWnUA5JXRVCNNDne",
  "key11": "bDbwBMKMefRevDN5EuFBnMGx8EaFKa2rR5dgWs98fP968PH6VJpQqhU4geVmfEUVZwfpRxLvtjmzYDhZEAT7LP6",
  "key12": "uuPN4138vYkYk1LdLHmGnpzcXqGndXhKaJYtNbnkdPs4kioKcGhWCS5B84LgtVVJHnBVrEVi2ZUZyg1Ex54xycT",
  "key13": "3t7otNKvpyKU7zYsZeANHR4ZBTBBnVmtjDTockdSK1PRdc7hMFk1Sx9bWjNxWnmWsVJYaFjDFJbGLtSgtTX7cCaA",
  "key14": "5MS63bnxLnFQrxRxXFuovZt4TSsMU6XLExLr6LXWcNxrdF6X7ZCVrFc1392zR745WJKmDyfzKKp6FqTG77uU3tZc",
  "key15": "5gWVhhDHJMNgBm2r2uGyWdaCUqsyttvMyJ99yN3uPrW1V1Lhc9v8VPZeBWn3J9R1hWAUdDpuNfDyB3oXrGREi5pR",
  "key16": "3Dsj38dW6QB297MiXPnD3UJEMhweFuqDtUa8MFEbcfGffSnmGC9bGvUPJXsSYdhdEyCAsbgxzs5JFwZn9PADY3NE",
  "key17": "2qZwvMMCgZDtBGrT4jLTJKxmXv4AYc85dzLwSPqCgQGjnyjd8DNQQLN86G9Enq3o98Br2L1CykCKUHUeQ47gZFWA",
  "key18": "3WdG6Xi7kZHwv2gZeTcYT2fThD691unLiNcMYvdkeF3Zdaxk7xLX3QCEfE4HPGt43FreSZtPgxa5FfKfLL9N1Gb",
  "key19": "2GMextJRN4Eskev3ee8wFPjbb9xrPtJpcqcerTvSj7P7qs1ZGR6TQoG4BfzajjhFvafXJMW4AMvzpg36htUPcaWy",
  "key20": "47dQT5CdnJbAgF8tRBZZbwcLTBETszq6gpR4nQ5n6qxuMXkPErRNbzVxhFUnVQHBPAn7iGPmt9JtMzzAwjr8pZ5T",
  "key21": "26xMLZSwzmrXTVms4oQtzUiGMPLEkXdarv69z23Xnw6XEYJpd7UjKHs27W7knFiKYKHi4d94Bo6sPXa4FK6T5CES",
  "key22": "2CDAVJdbKPyMVcoaVgA5sDhueQHZsW1zSkuCDz2DVPXT6MfAKbe5pbmwEVRo4sDZ76KuuezEen2iRTLcSDCXd2JP",
  "key23": "4nBQirVm9Uhi5YPpgY9Dkhyv6NEdzi5zFi3g8RxonZbxM6DRf5L6N97ptqs2zr2groXiLezh2iWwmfcanWwGxFbn",
  "key24": "35BagQg4TxGtyqnBD9gBFuQaQYMfu67rhdk2sx1Loy61TpbyMGE5jiwMeZDMfHe5DPeW6XNTeNUtnABmmZDQMKbn",
  "key25": "3v7jLHTPZJHqEGowjcss7BTy8MYpr6ZuEJvk9RnvkrjMUZxJSRHReTPbwYPpSUsESDNYgHQvL3KhUwoxnkUJJLa5",
  "key26": "26td8SfbAuUmFygCJfwgeAfn2tYmxwySy6fMhNpQC357mFHh2R2MzEWoYk3fuxQfAmSgga66yX7NAu3UejUFbAUa",
  "key27": "5W1CXvzBTR4BACmrtCamQwzKTDfvf9SZBNU6ANPJkZ4nEDW7tdz1asJgGwCgPmctmHHTPmd8GyN9XDu6pxpxpzX7",
  "key28": "5cJ7majBraYSEXFbKiCQSb1ZgkTATjPwYFrdFtDkErk2QWzNSkhSht71V1nTAGAXtkrvnXC5yBFjSb5o7d6Cg9jS",
  "key29": "5BRTWMWWoNqcbeAouoaCzs1g2kZfG55FBPpajTV2CGDWJhzY4Q6xn9LkKeHEhyiffLXYjquyYY549NcZzrY2HdGw",
  "key30": "7bhfWFpzL8hrdefpK178WbJc6aCcU2KjKGqpz8DQu94fokbQYkqd4kR8V7wGNMX2tc6FRqMHzhhNpfm4aqQGWVD",
  "key31": "668e1FBJEtvWYXuYWNxC6zhVbjZv7YtyYzBMS4rBHRL6FEdUBTdbJZHimndbRLDwKjTDiEc5Jjnwf58SaigDNVZZ",
  "key32": "2StksqeqAvDQdqzwdPTokg75LA9oKb2bBkC2G7U7xgzQypvvdNTwqKLriAU93FtohwnyMaXiKzu5j35GFW9vq4kg",
  "key33": "3actgSgtTC1w4sXUYCgt6CD6eR3hpQcvSeytiVsyNPqvEULurB1sNHkJpABZRorHU2KwutKzqc6qdhRBKeoBZfYn",
  "key34": "5oMBiH5dq5Vd1Aa2JcXUHEzNjCSBDUqHuz9zEA3dwhZ9xzyCt1pTUCQyNi5PcQdhX2VJEX18cGwLxduBgh3BVmng",
  "key35": "252pUF5zBBFXt5BxK6dwz6huF8qCQwCtYUuU3d2Jp3n2Vtm57vurRjYhcLFNiiWzhSMHuVYNS1ZCV7ANdKtxkjLY",
  "key36": "3ycEncGiLybKADRGpMELCrNqR1HrY8p9WZf3sLeFmo1UNRwKaEEtL99F753ZazJWMckCRW2KyviqQFLuuBgyKcHk",
  "key37": "4sp7iUvaL9TghZH2Jjf7jGrYH9PEYZ6hk1FMELsNoFkQRRFQzH6rg2fsBZq6XKjtssTPH2JPQ67T1rFnk9fqogyk",
  "key38": "5w54ScTUN3xmumLdT5g7Ly2Cc8kmjpAqtSkwjZYz4K4JYfJmPxKTntYkVJVCPMpzjmHkRPUqa1eWpcusbmR59cRM"
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
