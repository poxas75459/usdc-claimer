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
    "VWeiUY3sD2jr9RxVzQqgcTzQ4X9ZabDLGoe1eEXb6UGr9jLMBJtosfvBmsG1dus1qkdRxt2wQxu5XvWZmQkv6W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJHyvHS8BahXGK9tsC7KXnN3dvfqWtPLquaBAscmWFdeTNTvUWjAWtSY6JJ2uQhsXRxbUtcCLAiHEUjBZ1JJPxh",
  "key1": "ZHaCWFDQR8GYVNvxVA71jaYQ7PaXxc2VLwvuRvVnhXzAy9xoJ9UdaBtETjpcdT1LEE9YRfoK8S1DF3TTrrvxJhM",
  "key2": "5NhKWvqyijYqrx2jpKMghFXrc8RWjXRca5d8H1FknDe74vuctDh5mzzLSHKMvjj8j3q6K6Uxdz4kXqxAYd8XUg9b",
  "key3": "4bEZCpY7ngC8fqtyDQdxuNyHUbqe2bNBdyewjgCdQFB6q6GGUFc1NVFKP1thikaqtVXLSbofAxdfrrqWoTeo8kds",
  "key4": "d4XGZnfBZRSGYNVbDVSNvrdVxcVa9ithh52MYgMcwwNidJUEGtWEJ9gG5aWVw6Y3vQSPvNnQem4ZxSto36Y7RhR",
  "key5": "21Ei3J9T8ni8BJFGGiBXaXMP6kjDSbBDQDXNbWBh1GeyWHfMnJLktT1SbALHNeb4nXzDSZpXWE698gAykETNABdV",
  "key6": "3rcLV1VEoMTbM7fKKwRnK2pZ8ezGhsYo2erVMK3jHDmQxoVrazcsUvvXUPLVSPwH4odqAVQA4zsRFopnvxQhxgjA",
  "key7": "FVi92xANEZkznkK29eSANGdgd3wRvJ3VBn8pUTP8NVqYEKL3akn5EkaJFTmKqxZUmcM6Yj15RRqqos47QcKcF3J",
  "key8": "2XTnhK5o5NcuCG15Ko9oz9NqqChYEAqnq9NVQj5VNy8usakxbm6Aba3UHGaeFXUgUdsuBybrTjJ3SNPtP3gZtEJb",
  "key9": "PwdigyzNjjdzT4Dyve7YzS7fGfgR9Rrcogb3RLfFrwy8aEssx1PFYVQgSFpwDRjXegnmMMaie9JnFZGTKmB8gwq",
  "key10": "2KZ67DZSMv6zhS41f2mpCcKnAC6JVzowzFSQZgd5vATT3CasDZQXZUY4pTcyjbDtb7Y1FVVqLBheikMGnw7ZEzK4",
  "key11": "2HLRWJmmxp2j8aJFQNaDW1KG4trq3s2KuV51ZU4BK92TU1oNfZTWs7T4ofMa9TsSbYAJjgy2veDnM2E7f6rLVhm5",
  "key12": "4ZDv1WhJDsZXqPgwhCfRtHxb4sWBKHjb9k2rgZcQ8RjvTGJRMYYDMhhsg7CkRVFXMGYZdmJxmaRvVs4JppKrsBbo",
  "key13": "422x4LApfFwq3djFTvU1Ptqh89HRMLAGgVnPagyrU9zQPW1J32Zu2osqxuoJwLDo5f4Ygv2ZKZB3ctQTFfKUfDsh",
  "key14": "vRHcj8br4s7fBYNHGCrya2ESEFG1hDtUYdZ8ParEZVxcvwwxRuffVjCGx1QtVhftgWHouu6keeREiWqWcBj8ZTv",
  "key15": "4vJiFeP4B72wDscnqM5WDBVqLMMeAoKrsH4iSuYBod2sgcfA9zUXa8dJj8b7Cbwi5LvBPHBAPDnAn88K5zx2MdSP",
  "key16": "2vydwvSU1uVzAkaNn1DUucccD4SyyPStaQ98jdXHEbNCrdoaax6wSM7Wnk75RxU3LMofQcsKk7YbPS6aFPxqRc45",
  "key17": "4aGWmFvP1BdqvvWXbgAKVcLehDZ1FZTDzSjzUNtX7ZWecUMpPPCsnnWz87stLfUv2gDScZVhtvUyk1Qxa15J3UGX",
  "key18": "351i3c5mi4nBw87FEYYqzp2jSsX9JrkcTDa9TFwWwEyCuX46Cjt2JA4QZf6S1ok627EmkjZQnTbAcL7j8h75k9cf",
  "key19": "5jcz26NjWRzUmsNGrEFJRwxzCokiAuCSHeGJmhVRf2djv9h3QCPtEB45VWHeTPWY3Bfy3kdwtoj5YM123hEMAeof",
  "key20": "2Dxh4eBSUs5hLb2xNz6rFUjUVKQaE58LcKJhd4mPGDw7sjP1Vu4bANeBHRWjf7ZZzSEYjohWzYaHz3EnWuQXNfvG",
  "key21": "3UQmpCZ68qeWCM7EGSA83LcKf7EUztJLX2TgMd44zEAMhBCMhcP3q2AJo1Y5c9vVGdvmoMqW1s8ptY9uQkhSGrYM",
  "key22": "4KytVDMk3UH55XJUxZrq1dz9RNvB42zv6tmp32WSLr5DVmjqSKhuAFsJYkonU2nogdWtnH3pSM5j5MzSKxR7hKW5",
  "key23": "3itfxaWwPZ8CVgtXiGxGqr423bR9C6nGLZ6yaK3npbHB7TeMLTioCoSPDfVVAjKqQ3FiSTPBCZiPcrBrskpfJB6r",
  "key24": "JBfk79uuk6jcNuFzJjYLzFfJa9CiWzdA2PoZ648Wv3WdXi5zFMLeUW5asgcDbeieeffa47CHzVacPp5icYKcRo3",
  "key25": "2y2n97davzn2MqN6a6NLRHg7yXdJaymd4gA4aN65EwBYd6W3RNzvGvVfpAZL7gJLEzxmAbtJKA4PYaYAmP3XTZpq",
  "key26": "4ftgNmAAaXxpH5vvaXQ33hpUdxaJZv9pmiBmsckQAZgSU3nvUYwVdZwznxnkXkzJtDLKgB4QjPqGT3tsp5zfhiyZ",
  "key27": "57gJnLnVAFSAsDuxzP3mv9KgGG4F9LhaQeKPezJ1375jjgSGNrdsaFuvuNTYNTxBuie5eqdisaJy7dWLGXid5UCu",
  "key28": "2YwiCSe5nRtCydZmKsuDSeQ8hgjWiJmx334mrjpXZGJSuCxqwEo5hXiPE6ubg6FxK1d5Ycjii4ePWCZUsyMnB8w9",
  "key29": "RjFwYfkBoL2S1FKYe5J6ZYhabXTorM4ym66XpKJ3scJpPS7mS7sExDQ6HHBC1HhFDB9NRgM7waMnzFZcfGR21rR"
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
