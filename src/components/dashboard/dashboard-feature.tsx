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
    "3iazonsBfAjQPAhmPytZvZcScFuvTLrkJ2AkDAAuwKYzcci36jEzwwaQBZCLFZATCYXPGVy6AqwGx9SSRY9Ctr8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eoQdNaC6H91ZTbX5DuqCHXZxGrTBVq3m7qDygVC4JCojRGPtq2gYrd9wzZizKsNhDPEwxEGarkvSGwMaa2T5bKt",
  "key1": "2Dfiwr1dLLD1RRXKGvErTqZ15Znv96BDBeEtRtcDuTMhVpSbH213TyrNoDbacdaWZwWLQEBzbD9jVgeAzcByoiMa",
  "key2": "5zTJNcU9h1e2pV2MXUXLe8kfSH4LUszQHuGTvVvdiEasoHxP1RMn6ZUtCX5Ahswjj3K4fUqyGxJSAKL92tZW3577",
  "key3": "5ZsDKykA5CFEQVuhDsWenQ3YVFUYMwFBekvWF7ZZNSJNwkhxx5719YYzwLvFqcQLbZwA2NuAZVfB1LfbgM8m8dbu",
  "key4": "5cbT9HugV8CR8mM1nqF1wyahGLbcwLpdBTt1hMNF9rTVSuZb1BPjzrAKaX2muL9FGwrTU72JidmWVMb6Q5qDpVUs",
  "key5": "3qwfQjVo8dAPg2RCCzCdrwB2M1SmTV6eDCWWsfQfGQGdPzx8W77qNvNW4QTSRN3oafNVxkniyTaRz4tXxL55j5pq",
  "key6": "5oei8uwumn3w1sJybVPDCgLUsxo5RVfUdsrUxyrxKYeSQEJYy8U2cJ44XD7Xsm6LRtKGuyYHZMSTQ7S16Nms3tFe",
  "key7": "4fdeDZS5BTXSnpHYP1grssXn3HprSsbKkupuTw7CJL2mq5L4jrFHxkMLEt3f6KXtzvvnPDMpfFKqtqKYAb4fbS1h",
  "key8": "5MXF2xzQabAsu9nKkFChjEH6Mf3ZDzsXN9faHvsiwE4csgSU6ktMtKwJmXo73zLxcq1UeBepcWNeQroaYxcqBYHj",
  "key9": "4XRWAYLjuUejZKPW3FqLuX9CKtao55ijLX4qLMKmbnMKBoDnqSAneSJhh3dyJnUBhvvwg1EnUkXDtUamtqK2ABch",
  "key10": "4wKuZQyvuLRuzdmzZo86eeFuP5PXACtTho311PJxcSGEH2tjSVnNUSjLkUDNWYzMnt5kCqvFNBxR9nj62Zr56eri",
  "key11": "4DFqz3DLAPhfeexTKy6JjZRdKUHbMeAmxoc9PFzttXPeDuKd1KUCpDpadRokDrE74tEMgukMVsSiRdM6LgzLJFac",
  "key12": "3mGRoCPP3FNhqwmbMfuTwLdkxNHVu5j5sJjdpfVwsCQmFnE67onCb3bcW62if3H52bGxo6R2VQCqaVv95taaXKqY",
  "key13": "5iKe1v4nBxRj3HF4uCPVXdLtJEacwrrHvvjU2ycUzvFRepBZBaJPuULTLp5vD15gSVrWkSCQdtzZSx6UVgLXdG3d",
  "key14": "5dhMDoQCF9KBvZAgTienC4gV4w6FryDTeMETcwbFR9aHoEY8HTh6SLDpp7PHEs6cX9xYhNqsK3GAA6QaRWFkZiqQ",
  "key15": "3e9s9XWecYarFnvCeJGYdU9iCnuBDDjMaoH1C7CLg6FNAzYTAHmGMFcwk7mCo81QVsGKHkxEcow6Dk1UnBjBhxK3",
  "key16": "4NiCQHayhPrTWkzkeCtz6z87Fa1uKHSYG3CPPAMVBN22MattaVVD23oQaKEh3hcEtyFEC42m5cnE7yxi22ZZQcP1",
  "key17": "622eLQZJRrCzcEBBB6eKSGULyK3R1vzupgLZcZunuX3ZWd3WTBwruBEfjkgPazjXghf6JDEWpkFcoJoNFqcoQ3xe",
  "key18": "4DPkEhCCsXShkTYJ2kwCKPJfmkvAXtRGb6kLcT8pTrf1NgZ82EHvrXMNAgBDZPjtjeUMwvWE68y3fg6pixGb7wP6",
  "key19": "pCxtfi8scBghKEfD3osTr1FvNpFBJrqWvN1Bamh5fJk3bTuV4PWuFN7YgS7kcggdaMhirxKtUTGRwSdXcLV9A93",
  "key20": "pguM9ffPkjzUGrmxpFzTBqwrgCQHouMdRRuVYLoBSHRFu9yHnYvkG9z58LK5XBAY4GpPsg9TD2WN7hWJGDAGijC",
  "key21": "qTVnJpd4z1a7onEtUztpFnsn3Pmna6FZFmyjAxH5hecSWNKe9NoEDofZDPxtPGNdzybsWewtwXa2ht7wPQ6oH8b",
  "key22": "5FNersMM83CSC9jpSTogDbHtPZGb3E6pN2mcz3GJeeFaZMXiy5SuQpvhRHUdjJyxRaedv3MiXn4yunQrrpHmm4dN",
  "key23": "2EEv8717jcHxe7obgnLbWw9AX4PfVSZ3YXEcTcMTTs3L21XCFYGHttSS45xy33gzZHA8FyUeYEH7k3muv5X6wqcw",
  "key24": "4YAGVpLHX6c782pHUCRPF3bf3gqwn5Lz3jc1D7DyEXVYw13S7wWgHVuQeSo1Meavvp6SCkicW44v3r72nB9VNX1y",
  "key25": "3YnefZxyu8K3eBHfKyFCnHiwUvqafDvNNA6HtdWfQq5oTxK38THkaMcdFSTv1rwAapUvvefXHMU81g7yGcaYZNfr",
  "key26": "smVUfGZkUZGva1gSLNbvLb5LyAByZ5heuURuU4v7QjwtyQvRu9nmA8juxXZisBy9gKur9TuZrBaNuwYpQoRWzQP",
  "key27": "28PRN99C78k38jUe5W7Uomnw7ZZQzZRsqxKzL2XNfrnhQmDkbw31p4Jte7QyjbdtH757GTw1MupTL2FiN4bQs8op",
  "key28": "58FQfvzenrnnrSKmmyDgbU4xmmJkriP6EDqBajubebefd37QkZyeTa3mCoK7XBHqmujNPEeMuJBFjvzDxoaiysay",
  "key29": "2AsDYN3jnWDhQ167WMwjKmWvXSoY5VbwSAYpNY8qPLCxV9ZBMAsjn3HinZ5roS4yFWP3z5xLKz6iDqHSyGZiXcbo",
  "key30": "4Y5eFBe6FbxBKE211km2QFS4QijMCP1j4WKi6uScHiP1a9QjZUNHprmjGjvv3RnNJWvneHWnDwzKjhNwLhYRqFpi",
  "key31": "3ftiX6tMFK9LhpkfRBvafoVDAZKR6Cosi1qmgdBNQ21cBkeSu6SREYtgDhFZPAXLJHygomnkLonNHXZhHQooiujH",
  "key32": "22FYVZhZtPZ7NknskFAHvMNyMazEtR9Cp3CF2PuUBnBEWXajkfGuJKCZVHZdJTiFxU28CdDkuWw1FSU9GQ4Sxq3A",
  "key33": "3d51gBjNYio8Y7c12YhstaZkfZHjY3HPzppWkV8zGwoLArWSVVGm1Fwv4WvzS6S9Rn7vTeDZVwZZPGW8dZDyprPz",
  "key34": "3bCxv5F2Y5JRDLfti3aWodaxTXrR85Tcvjurq6aSH4hbFyXeDwgnW3uHEE1XVadE4rdFK2VbBYM6mM316WjagCNd",
  "key35": "2gJzpqdxk8YMqnvw6E9DooWDsxRZEF5RmbgkuSafn9koatSQdrXNcpfhUXm8dmz36M9MA8LWsGn3o8h8w6WcQQH5",
  "key36": "2reaGVx5fhhGxpRFVRWPHAFhN2S2b8by181NbaCuQm9m5ayZK57wMm7AXrXL1B3GGosThSfqnhE8RJArCAUheVwD",
  "key37": "4gZf2SLyQkeutPddxFWFSEvZ2BtT3ZFNs5UQ3eyLdufr6tRcNj3Yg8s2HS3cbANLw7D2oq5ztQp3wZpJ4dtzRAzT",
  "key38": "2snTZTnzuPokc5oXkr6dQgAfN9MH3YP6GT4XczoRhYKes8uDAuDknzdjqsQQx82Zzg1D6XPu34SW3S46kVehh61U",
  "key39": "3CZ35cHGd4P8K77AYYVTyaveJomuxoHhTT7P2C92wNddpD5iptq2UF3YwnFPhFMQ4b3LfDHzTMn91LjTwLgYrEqM",
  "key40": "otJkNEhUpbT9hE4ZuZM1ZBu5jbKtdHVrXsz3G89Pd7azZfmU9vPMsP1tCvgkQYUfp4283qd9NCSoXZctm4DYA6Y",
  "key41": "2aH2XnNmVQic3MrADxQiYK2f47ajw5xbRzMbXMVW6fumzNMq5yVhiKKjW8ZR45aTTFpPt5wMKEiyWaReisQMXYQd",
  "key42": "5yZ2yhLVs4fgfbua7qLTSm5ogKRGsdCuEp5kedVqVuNh5THSoHKHEKjfmv6PX9tFSDKfbvWb3QCdbBrCKZReEwNg",
  "key43": "32ofH7Uj5rx9YPVtta9ED17213ynW9ct8tLCn6jf8Q9B7c3mYUuVGuzKbqfRcT4XB4nn87eG4kWDfnpXsztBsGmM",
  "key44": "47S4bHKYS7TiWkZu3KYfqgnLvd5JAdFhZGCR8Sm9QLzvV4jKgoJKHkrWSsP4sMc5HneHAjRevHUCLmG7i7ynBiGm",
  "key45": "3ZG4r4np1B914XTbsmkffDxMRmNhVh16n6TNk9Dtdcg7rufGZuVJsrU6gXjmH9gKvzPhsMNonDiGBMBfE6ZmPnMm"
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
