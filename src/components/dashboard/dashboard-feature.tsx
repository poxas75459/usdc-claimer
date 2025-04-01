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
    "35ppyS4DeZmbfzs1LVvBWAiYHhsGMkDdBMi73PGN6kXeLtRF6xa9hYUDXp5Xxn1byLffMSfB2JHEmhNMAMLRaEZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7VtzihAvnpEW1MF58BjxUkVZUCzcGgD4QxkFQ6kMbEktuiSRbaeKTTYP6WL1U9qqwKZVFJXWLPKMjGELjoWq4n",
  "key1": "5JyAmWTQjpAhAY3bDTkpMKL1wMFyMzVGkQSU1ekz6Axx5Z3bBswQpejFJqn1x6fYKjDEEwVtk4X33HFAM6TNmmKJ",
  "key2": "2iVcq564Kzg8rM7c31z3svEZQ5hfug3mRyU7fF5ntRYBBJuFw5tttE79tdmD6Mk184XYxBpLo6rb9VkVJ3e8tKZ",
  "key3": "5HszfrC7m1grfj3NNdc9jwW4xxbsVYCk65YQmSWx7i5o4oPWWbm7v22vXCes7aZcXt8wKKizc4A9Kzp8HXPE2smM",
  "key4": "5MeC4Y787iuPT2QEQNJBKNPhYcPNL3rfv2fYYiVjtYvJm5iDUwA3n6fMgcYht4kqjVTNi8Y4QhnveE5VuMkVBnDW",
  "key5": "3dYg1oe223aKPh2K9o7t1raPyD2naZtWgTqQaiMLQyw5BJsd81NZuhLeGUgzE4VXT6tMru5o1YTtuAngvZhCFn7x",
  "key6": "53TgCgXp74FwY6VVzmRZvQTJN3nSQeczFWiSHikXdUov69fZfMHhPFcerPmqs9hDy4CRLmV1vB2DJh8rCKA1oHje",
  "key7": "4JG3ZwJ9FgbrrY5XoLxoJ8Qzv9c7mj99MNLaoVXGNS99gmx9KdT7ERiti1rUy5giGczvs5sFj73NaVqCfm9BfQsi",
  "key8": "2DjFv8f4s7b3ucWn4EFB1LxJ4Q7aqRGtECsXMUnX6ijJ3afmUYFaZYQWMxCBgoGRmdor6r713kX7bWcPvbUUtyZk",
  "key9": "Epua9GpjsBdbc8BELf5r1k92mmB4HRwqrDvyMeQxDKPfx9pLQFq68HTFhBXMJbuA3VJwAWURVAxWXPGYKQgVk3b",
  "key10": "4kRkx2VcSyR3n1akXbzaFzdbYn5ahrYiGtZ5EuzQyvx7FXzEh9JhUPioPGRHxp7rp5hqkiT5h2WaG6Nyk5HBMZSJ",
  "key11": "511RusB12VPE2YDNgY3FhWZ8yHikom6SXeUwaRadhTTiXz6Mssihs4VMd8yh3YUPB7w7wvvfT4oso7rAbuHj5YZG",
  "key12": "2hMQYukvuVg8pVRvmb4AACD9g36V5vjvQhEYxcs6rzaKvVuxSpzkJNyV5H2axQ6C1Mh6Fp2kFFzarodYtFn6QFKH",
  "key13": "5DzyC8Dh4V5xfaSrvK8np3jrs88wAnPdFZu1qsAudXHLihBRKUXPfFAoe3jbsvZZmybjaNoqnrSJLvWkCybmh53Z",
  "key14": "4KxGeC4PhajKprf1QnXDip79w18phXbw5Yfy7xESwyjcP5QHJGrbsviusHud8pUnTaSbVgQr5zbqLajcTRZHB3Hu",
  "key15": "kx9PySBojFeyEgjjKnu3skFmi8Wykarmq8JbZp4VPmt2DPzCQeeqUd6ZvqkZt2oL9vaTG2ZurEhixchYA7u5eeT",
  "key16": "3LCTffphH9voqvoZ7c733vwhLs8kANMxrZhu15mkLgGQzVkjUfachqLFSiNxdoXkF6fMhuYAbh2kj4D1R6bPtQJ7",
  "key17": "5FV9NqSsfPVW6pMWUwafCwGHucjMMxDsqByYfveCRPoe2J21gZRKXtvZbLLF1Qdd9UuYvZv9BymhJ1JXujmHqpJB",
  "key18": "2WZVRMH7qgDq8eR5E2wKBq64NhhygsVDDPMUXoSsQ8UV2vsJ3ryEr9Rw3reC93YSxWggFD2dsKXF6VSkAk6SjTjM",
  "key19": "5PHSGk48qF5C1eJtmMLdgxVGpQ33QAYPfbrLqWycgNAqPgkYKhrcvdZNCJTGiAVq35kGaZoDzGLBrAjLcgQFdKyH",
  "key20": "5WWBkUivCWbWMTyN7uT1uJpVwDFZhBiBPcNSrgi8SAriraW9XDrqxuM7v1hRb8uWBKyG1vBTZvAsewDLhzNJZJ6h",
  "key21": "4LriznjMKDPn8MtDyz69h73KLdz7hc6nXkAwXx3ysTBcnz5rX9ptFfzd2N8w2AcaQNS9xnPARv4RjZeHyAmew8ce",
  "key22": "2xSiHt6qjYhzK7he8AhZiDdMdGZHxz4mjLYdeftkncpsd3cjU5in4kFu23Cp7ghyqbzukPqyYLthufREqy4PmbtS",
  "key23": "3Q6sBAU488sKgongc9LnXJtWZPqZZ4hYB219rZPpyH6kPE2pL1egyVQHqmz17wVMt8VYabVr1q9QfhkP1odRijQf",
  "key24": "4t76mk6X5SGN34aTXG7P9kmo4y2pZMhPWjQyv9st8tWsn8bB3yH71ztH64g1UrgaaKfAmptz5LYwRK43yBWdpoe6",
  "key25": "2K8Yh28N66giYG74SsuJz7PCZKfKWqd2aGwcARVG1yaqo2RW9s78RW2cp2XufC6hQ23wapDRyKnxCUdFt2BGtH5q",
  "key26": "5uAdDVeottajnoVW81g6CGwQPHZhr7vmGHduAzdBX4ZJGPU1T1o4oG9BFcvKH5CU8RzdzBYqJaNZXx3aKcrknLSj",
  "key27": "2of3dfA1HjH9o3DVXzbpmomV8JfHwr7VT3tmEZyFcDtMcySNvHVs2m65pL5zXeUbLCBeAQUeiHXtyv9rScN4xYm",
  "key28": "9AJN1e4h9Q3QAqMCSrAvB1MReuFzFyiUhhtbfteHwmoBYEyY7ubH2EX5KKJmZsNmSvebGy2pnhBxo9BERbnw3br",
  "key29": "Zaxn1eXhE1QEY9wEr6x9tduUwT7HQ7EmJcr5bTTJ1KPfqXerm9ifTkFcdUQZEs8kELMqSdAnnXcgeBcBRWdZTYH",
  "key30": "5zop9vY7PTVtjgU5LpCU2U2Y98oR9MPyuMmd7q1PidCondCct95pC8Rg2xpLF6xxnJrxijuHNhHHk9DDYKoUA4Zh",
  "key31": "5TGuEEaJU26FzBGMjun9FTA6YznJpLPQjVviFWEFM4sLzhQ4xa5gVzDuiwKqbXLjvHuDPjWypv5HD94BDt3obd1Y",
  "key32": "65p8VtJtEjyy3qRqi7JRK4f8iaEcRNtaFDpbv936czxPfELBhGj3Vx4rnPyAXUKbpyXD58mW721RNddGnNx8xVmp",
  "key33": "5AUvr1iuaNtys8spWzT3vvs45m9kraNQ5jkcWmzuWRGoiGX7rJZXvYpMa1oRUpVBRneg46Re4stp1swQPMkKbMDi",
  "key34": "5iou4HJKXdRXxRTGaiRNLAryhzKqZh51qYiwaj97tGgjfz1EXJkWszgLVFY6zb3iYeNNm1ynDVEiU7jeLdTVRm24",
  "key35": "5pTqgzBdvbzQJoXWUEqQeKY4Jgi5EPujZDqRVr2e5jSMzu5gDPq9KhTtaiuVqB74cVXzKuiyuuG9i59SC7xoBvkm",
  "key36": "27TrJwWjiwNQQkbe8BU8jjtYEyYiHb8vHmmFmFpKt5rvtCjr8WHbB4uieJ7PDA1sf4VT9UCqhxyUp2g6BuvgQXBo",
  "key37": "pJGzqshrXFHbaQnmjf36Y6mvVmXzwEZkRDSyzvv8C9MC3ygaquvDizxyee6Fuku32767FEauoMjsbVv3xj1gSNN",
  "key38": "36UMkGje9vs1vritwYyMqgvPqNDtfG2QDdZKCEibXTj1pRD1aAqh8T9MsVYqHkMe4FwpgYGZBW19G9mb1ZFPenuM",
  "key39": "4VLvBXUWRtugrMTa9hHwuVr1XkgRUFw1KmoJ7RmLEEa5suwKf8UhGJJoG1qBv4UwJERUWBstegtfZQ9Spz72CjiT",
  "key40": "9Z3eoLzHGVgd4k4X4Ufg7BoPCgDHqVse9c81Cd3woJpA5MHBpEzQfq2F3u6ZDv35jvCeQSUDMiRCDWaJEWJ6MiS"
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
