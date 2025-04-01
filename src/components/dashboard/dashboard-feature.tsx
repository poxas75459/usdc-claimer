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
    "46UkAd4YbRzUU5SVLPsyzH2AZU5NHsYsNE2HE9abKZ9G89px1AqbmXR7NQhxXr35VzGKvKny1vbev2f3NLUY7sbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYrKHiGdueBBuskTMeBvBQsdeR57VwgUenWJ5oFULZQdHCgkm6Wvf7zgmGXKdt6hF8sCRmkVMc8MKbXXZcyXQ9v",
  "key1": "3nrg4mhNZx47UsRUzpPcr4fkm3C3kU2bZHCbgQTE2p73wQAR1J5QhYkbRZzMR9nCJBPo2ixTqB4FP3APgd5y9Zws",
  "key2": "36DiwGvATccVEHeKKSqNtfA28mGcQxCgTkDbdVjQoUguUVXvDrZXuavgEguibekJnforc6VDBUYxx2SHewRfyefT",
  "key3": "2hU4WfW4fkiUBWYb7L9zCToBd2ThSQA64oGqPvU5ZQ4Hy29RbeeCZ7jbPm3XFti2kUo2gqzbhJeG5VQWCvdKgBfL",
  "key4": "2oGB2NwDBpceYHpXiTXKDLhoaoevqBqvb3oUw6uiwpUiKt5R7bUkkPA6AWpefBXGpvxYNisFYMQLJdsKkh75H5SY",
  "key5": "36nuvn7zUFpofHaWwXeBJnE6G7ZetJHvemJWudUPEUa5ZbN4X9ydkJoCAXkkEN1DjABNa2xALH4utREHdDSuFU8w",
  "key6": "3vvyrk7YXkzE735m1nAqgMNQ8uQsD8hqLtRy7ERow1CswzF1m9hk5DaNc7wYreNETRrN9VXUsZshVNVvFu6DLWKg",
  "key7": "2JwHDUJxPkWbgMTdZCfThXw7Ty9rHFqtLgEUEtZedWisT2XJaQBu7CAitkcpuzMnWBrW6B1C5D9SX4Tr9kPfmY2c",
  "key8": "3C6DhPubkjsAbKeAZ55ikvBgobQpcLt7wq1YTM88AKY1n1vE9Jj7fGvhuuyYinKS12aKHQL7YtLcsKcEhvUb6CnA",
  "key9": "jJeSV6DLwJibGLRQ7cqXDFvgpRdfUA9tGhu4QMnVTbqhcS6WHZEBSYAP7XJeVRuPTQEqHYYdUjYTbWfzp5ZnVGx",
  "key10": "4MyjJCExJixanBSpuUpQzxnbfp9abRR1oyNfNphuBodRjXTV9Ba3Xf1GDS7QiWwQrmVGVWaF6ua6BLcaYHue6mvX",
  "key11": "43yQ19bfkgeRwNuMBtqoynZa2QDTmdQykMXor1rMV49S7p76DVA5SoyiT7ayYzJiSWDnzqnMnfjtKpBcgDbRadDk",
  "key12": "FZbwHsFMikbiBiwmjaJCEz4hm3ArHFcKb5v5CVkbCeTSvpXNqXaqmMFd764W71sMymVTHG1Dwu9xXkoTuD8Mp1S",
  "key13": "5Fk8pzrDcC1fmi6db8XkPXfBkFYdzEUEYmPqbZUdZACREALcwNHGxeecMAa8uPo7ZJiz1GUovkoVc1oZR5taK36v",
  "key14": "2pfoopjZncnTVMrvogoP6HnjZv3f9TKecW9txXiw6rFrnZrvQ8dUVA7QcGmMs3DkTmLeecwuzzPzF2whMMGi7zhi",
  "key15": "2BR79mPsWsmACbkaa8ZnTXjE5XYFfTbNDz51XegCUxNef6uNU9SENBx6NTvayS54hMKMP3AL24cfHLkARnPjPWuV",
  "key16": "62aBz81guzJjEFX479Q8nf8KcFuKSv2eci7Q5wpcGUwberCzV9yvLqJTUHXcnekiMw4UrvNa4jJ6RVdJSvpt2gcP",
  "key17": "5u3FtRhi4Ypooc8uMRimTxxNd6tS9dCVZmciyTGGd8wk5RNJVoyCNgHXojbRZkK1vF9zSdv3ihUVtZXdMi1oTtL9",
  "key18": "2vrk1oLqzQfEeWiBiqgLeGD7SWCg5idi8MdWbxqTPfgDsWRwVj9X6s9MPjK6FHWDpb2iZnmmXCxfV4wt2UGmPqVH",
  "key19": "4tRY8h78tRcBMQPinzQpx5rcsQeAyGsARDhVXcWmowiGk4E8JHLSpvNvhsF4dwNvEjZeJNqKdQhi7gKzw6AYaQdW",
  "key20": "3XQ1vZmFnS6RDy8PLU4AcRTQzxwaxjQoGPAS6WYGZnqmSShsMsAHtn4hD22YAdjePzgK1yvou2PPDXw7jufyAvjZ",
  "key21": "4MPZyi3eN9cwS2PbQeSyfKgLZDkBXc3XdkxhtBGNTk55uwHCiC3otod8As4VGN1k8oNKTVAPM6PbFtoWbDPpxH9D",
  "key22": "3FLqLBdSY8dTFyAu7AVCbwHT8PTvDDoWdD7hJ72VqQjhTuUpUX2pfEfawfXsyWCXTY2Xa1iTv99Snj1fczbKfjRv",
  "key23": "KY8LSMnPRCPUCHfrS9habez6FxKzZu4mPyEFj6g11Ljfu3nZfzcu8rd663RbFHo3dawH4BEGwPLjz1BUjZCYWct",
  "key24": "KfPtwRFNJpy8QipijezoUgXzHM68kh5cB7CfZnvWxAi7QAHbvw6ATgXNi2ET5NsZL4kH4K3DPqzRFxoak5xTSEt",
  "key25": "RM7tTUKtHGviMnqqNpKKG6B3haubgoVKVPyFwi6pvCmNE51Df9fi5wgd5pV4Cuh4U7CDkBv5jrigD7Nj8TmZr7B",
  "key26": "3Y57MyvG7qXn1pgkciyJ5WDtRn9N3n3BTGtchtGpc4okRibGkRCeQvsBmSsH4zHCpWMRtpz3DSWnQvBygmj2q8Ra",
  "key27": "3DEeErC6AhZKxtpAsf2VyWezBtD4HpSvjnEVBQaHfxYBa5eK3BzpNTSnMEGMKT55s4HW7mJd3TT5Goc3pkhN9VbL",
  "key28": "43Mnb86zym2sy1Y7ALiX27kgF9jn4KpMurv4PaYWrha21kshzbwdZvp1bg5dMUWWgDSXoz8gQRike3FJEzFVSwa6",
  "key29": "4AbSWpsNedFqFhb4xZsxKN4P3ivdP4S97JjBXZ37JDHy7b3AG4A81EZhn9vBb8QQNw85JGtn5r4yU8SjfiEjDEsu"
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
