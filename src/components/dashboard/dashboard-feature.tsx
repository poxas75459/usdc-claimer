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
    "34EGqMhxES5UJsjpKxPVWWYpdoTHsPqNf3Ki3xDFkxZTf7bLqiTYWWFQp4S3TEQ7X8HKgV3TcA3Lm7Xz9snAyHb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G896y8k1Tgw6pLxjFJdA8fY5iuLyQXVAcGe6WeJWCst7QnuG7QtpQD51hi8L4SmSQqc1bUaWBuTKKbgLLAGf3Ba",
  "key1": "4A4mi3y4UXsxmCK2QJZAniLChGsagvbeBX7ih1NnsNUyXFHHhH15PMrqmQUCofRANkZYwZ6ko833kh1kaA5tBQFE",
  "key2": "GC1aCkT5M9zUpzdc779hCXipTYu6cppWubFDpLSAg3X72u55BBtN1fpLZxARdK7zogbj2NPyzaJcwn3AtDeDmrJ",
  "key3": "3ir1pWsMENV94AGiLaqoJaVFSCzzfgwKePQjGZXc1BXUCvJAFrnaSMWd7njyw9qpN2x5DUZMudXW6PL6SYD5D5kV",
  "key4": "yY4SE2QBbRMcAcvczU8HWurG7PAX6qPJFMPXBNC37S1Xys2Q6kjnpXtmPgbJ6yjDTpK7YJk6Ro8Fq94be1U3RN5",
  "key5": "2w2WEQ121qLsQDP6x83T2SSMJfTA8gypNCKRf6N8C8dZh55yLsgLp88RVAHT8Mip9zBFT38zjv5bmy8SdZye21Rj",
  "key6": "4gqs73tELbBKteo3J9efh1pdNudiDReWYYBozAdHpaZjpWmtTiYEFfypugV4NtZXD76v12RmF2fvAT7qaqWB4rzt",
  "key7": "djvmdbRN2787jTq4Fcffe6V5FRrKt4pJpBAHZX5jL23iJQjpBJ9rEVnjERPGv4vxqEy4NT5UFctakh7rKmx6i9U",
  "key8": "5XU7nudaih9LPHNBrkfvbgN63mz6UKYrDfGfPtfy4RjeA9zfS7veNEJt7Wibjj9Nbu2Hx3xY5yQWUTfXNKpiWjW5",
  "key9": "78y5Hs5PbmbHHTFEkoukfZNtArtifoeqGhtt45iJ8aPYhQTVz7uYhcwu5m4bnwGXG3uPFe7NoFZV31c9Xfigp1X",
  "key10": "3y1xpVgEpim8T2N4DqEkoX1CeSg2woD28rme3M2BXTVt2Ue2kc8fW4xUads3xKUmj3eHYxNDpVwz2bWZKJqbMVZJ",
  "key11": "4YJzJ5TwDP7JwZL4bvnxWiZ4fNyPNjX6DUVgNRCMEi5U96JTpAJjXgse873oKMw1Xs28MKNHWcLKE88XGV78PLKb",
  "key12": "5ekwC7SDb1HskvSjb9y4cAwvzr14HwrcbPhS3useEtDdh69eez13eL7xvah2is7fqwaiQmVrvJCVkVegKzpP1bwb",
  "key13": "2xQdCkAMzHC5cRQRsocs5TjVfMWybn4bmyL6FLx5PMDRadaFHULGh7n8gTywXRmBDsAdTMh7fVQRwKZhjXwnyL1G",
  "key14": "2Q6bULH6ag72cQeyua4Qv9pcVUpJURnAf1nktYJF4Bux16S8LM3hT7GZv5hV54oCTf5EDE9GBAwfJYkQS1mC1ZxR",
  "key15": "24YgN9vEavNm5QkbnZrqYrRoeWSX9YQjMZwWiUxtFymnFLE22EaaD2jkHfPtYLoE5Rt8gtdBEDQbYEaiV8MR8P8J",
  "key16": "2nSbkKrXvduQwsx2Je2MzwDGq5yVNuRjgvqqUtV1DUTqgi3NJ8FSVNmDrpSqrBz71fhFzR2WxsArG3sntqWAVAZj",
  "key17": "4SxhHfbrKJJgMRmGXkjXtiXjcXxUbUsSFUqF3P1WitEVRSdWVdDBHcdvJLqT9agDZcx7cH6qFq4QpYfrYrcaEJo3",
  "key18": "3eyUCkKqAsP7uZ95nCnm9NNH2nyNzRJ1KEUMYPEo43SrG5KMoukHzBcitcsryjzB4vznLMgxaFyNxgQkVaxL8TKW",
  "key19": "5A3FH49ErnfexJjorqyP9wujX4dTFaySSzh2bnAyov4ELN9Tnibo2caAgMXwhx5cHgR4YweVndaX2C3XHaae1JcF",
  "key20": "2jHgzxzwwiGcFDk8mTc1t52vN9oJwkDmK8KDNadw5en6dVFdGRKDBBN31C6AuHLhU6ae5ednJQ8ahAnBnnRz9QyD",
  "key21": "CeFrHpC5aLNTukYFLd6sX7vaJXg5xEUVEQX3vXe6eouTo6AUqeK7ftx8TceiC7cThCQYwCxF58hxZL4Qt3aGgQF",
  "key22": "oZfhkzbbmJdPHW3vyATozzhGQGcwQ4qdvYMWaAV8y3TuhYk9QJkDZmSwgiubx8dTppBZY1RBhAV3oTGjWpnREku",
  "key23": "5s6V6ZqaC1QymeePkzUJALtBsGdBZpgUVnBL6LNMYGaxf8i1BzpngFp3sYUgzswZeWasNiqdBmmwYvaiybSxJg3",
  "key24": "5WRzFLwVecA8FRb98CNxVq1RTHfQQQXn4vZ6nLHZUfzchxUhwoWQwt6TvuKD1cTNKTjYJRnTsdbBRjj1jGP5H4q1",
  "key25": "27zFmLeg4JGL7X74SWbtTHwwmM1MvFYjB5XFWDpVtrX9F2Txj6RvGFQoAFifHzmKWUD5x9EFU8Te8mTdK2Rrn5hc",
  "key26": "FVm7kXTqHVZgvEKgRKEScAQMo8b9AjrGmPuPuWGv7E499supg6KLLbxZ2kQr7cbE8LLn3K8spk3bX7AFxRVXegM",
  "key27": "5oSRgQpx44dT7V5btbWaytj3bWrJr6MVCxhkEx2fcWJPifKiKcC146XjujY1bye5GqCkRvRY3KRDQY6mK2w3E5JK",
  "key28": "269w2UBXW7RADEGHafuadNEZ4g3BvbvHgGnWSf2k39uDpQpvhTpLZL3CZfjSHjLq3j1ibsHmQvFLhzX3zu2VBVzA",
  "key29": "5EqdTvrC9YDoNEUn8ob3PpEr6BQyd7Kdjy5AA3L5egYq9wpFpbAEBXx3UcJveHE4ka8R8ZkEMZsLNnwoDiZ9Tp9H",
  "key30": "4vQPVAjxcwajp6uF8Db9aN7kRZAuq1MeP8o8ER1uR457aKdgxJrDEZeQbASN5dXZ6tCry1g97SEBztr6DAmsE9tJ",
  "key31": "4xQDxLHS1ktbXVo5aVhzu1qgnofFh5vCs4EDk1HRboAJ9saKbEthskvKrvUqcen7EufpnZmr2egtMNHt3vxyWDJr",
  "key32": "5eNiZ6MAKdx3hfDqoaB2GeBRZ5vE75W8jAQ5sLJdicBeMjM3B9U1xaPEd95R3xkKfYw2TXb9JbgBb3YmJyA6kqdk",
  "key33": "FqWLKBSMg45CWskG75zczyABfLKaLvbTdrrAj4AeJHa7XjcK2bsrmVFteDtBgM18msYxpQ32mvLJHYGA1Ab9DZy",
  "key34": "wmkF5SoWrFdzFPGGZc9LUFaFML6g7RkTgsnFv57MyqXav1Z4xEwsrKaq6yyABHzUkmyRrF1zK1nPtPNKcTB3JtH",
  "key35": "4PREJDPVF4F36jfQyZBNnz5s2uAwZ9C9Pbv2upwHqbaDX5ACaPG8CyDcsQDxp3ut7nzYNXRqoHYqLART79EAkdmS",
  "key36": "4pTrgaqTXxwsEXB52Ab4mQQqP9z3EWz6KEJRckxDaBHjhNFbsoNTVkB2AXsjrb4cftpepNpPg6owPMhPjXxmhuzo",
  "key37": "dq7p9nUC1zUgaxcupCjSs4CCSsP9jziJytDwSVRKTCxqJ89eH7tJy57dpAaYukSSpHCARmCAtrfY9LDP1668NmA",
  "key38": "ABsdfXsfaU5opn7PZqmEa4F3vcybWyvJZzFPdmMHtBEsbzPUcXmopr9snr4A3C2qJBUFisqWzTRKXWtCtJipqjW",
  "key39": "39t2qiNn5s8peLrZ2mYR8mu1kk1JsFFzpx69o9fvWp8S3biX4k8gQ6ski3hJddm2oihoU7qTDQ7FvmbkK2yDHMxR",
  "key40": "wNLEfAZ6AwvMsGCdnRpC53TYLTwW5fnooXLkxJ6HN6nHYHmiEjdNtxqYzrr9aYqA3Tc5SVifrckBr8XQQSyfjqa",
  "key41": "4K38GuLV9kkHG9iHA1YuJHahRJjLeYT2Uz5TdWrAcwCWav6w1aiZgQYQhsE8LG51gb9uW1kthBcVmaJ9kCV4TG1B",
  "key42": "2f4q3D7TM7sK9ZZSMzVduS1y6482bh1j1t2MVbpzfnSGqQuboYAUHyHx6EDUH3EyqgNnWM9e4qDtwgwhPv9Hxevz",
  "key43": "2CzuDUAzSwwasHRXmwxCzZkEF5TeEm7jYdUxFmJGfhFnJbUSTt6FMUz5Cxj1v9mv5AEXLkz1PbBRhptPrgvHX4pz",
  "key44": "3iHgf8KoToNYNsqKjEMDC4yw2FE4FiAAVCScZoRf6NQ3sMkDeTyeEiNChPio4r9g2E7vLmS4XJV2pqheqqtfiFwp"
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
