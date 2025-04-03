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
    "28ryo7p3egeiQpMSMSxsVheMNrcHbWK7CCSzUoXy7vrEes5XhVeagr8w9HW7RdBXBrbXK8LHkmTQXdfM3ydAV6Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtKJcwNsFZPFWEhD1U5YcKm7oPRUK7NmSanRDWCRnwBuF69sTiTEKcP6cw9uGKGj4Ku9HGzy1QXDYB2oG5FqxAZ",
  "key1": "3RQnForMTxrN4UCGAKkm2ProEYmgkZCqE2gjdpg82T74ugLTLvBBTGBsvQQz7zPsypCMvwimxjD7BwJrZwQmyWmj",
  "key2": "2KKDt41jYefTb3w4Br8GEyoNUTsao5t4GPQTHfVoyQdPmpzN6r6mFwJHtXcqCJoZxxzYhb2Yahqdwk6uHCJhYqYY",
  "key3": "2regw7v3uqfh3yuvZUazvJEiRtpH6Fh8rUAh1hVusRCRdKHkQR42LXvxPPWeGqB48c46TQdT7SZSq11AxcN8sv18",
  "key4": "giZGVwjmgsEw2573ggp4vdoYTEBj8hLFLrxmnFWuf6bUusDqyGoT4xTgvmuUmTGUUhrm2c2Bxuyun91FLvZgJT2",
  "key5": "3YhkfBjYhj2LymHLTGLtzymhkuxn3agZK4AeMXgYitPurjsLo8ADCMHNBvZ9rXJTsMQHG2W18EyuchdEHsLTdHYp",
  "key6": "2Nwhc63te1WkuuYvgexYAVxRrwiyZTGR2privk5mvYosqjNDnXh1ApAqzS2gqRgU4dmzcP8YFGBaMHN4apTZSZV2",
  "key7": "5KEeDkqggUk8u7xsNnnox4AArtrTZEeig4EoKcNetV5pNEzjH6vCjqem13XQvM2AnTKSGY6hPpzCtxQsURetNQet",
  "key8": "3aYkKrNNnp4TFX6KLGgQzd3QL9Mby9uMNveM6KVJpVxLW7QwV9i1RB5UiqqgsoqdnQmty7sRaSQrkdLByYd89Z5n",
  "key9": "2aKygCYn9ML42t2vtknNxcFwiTtAMvydd9rcEzDk2qPjeLmJsX43mXXWHgNhsTaGDF14JoecacfdB27g8AeiDzoy",
  "key10": "5UUwb8kXEbSVRKwUw17k9ov1654Qy3Kfv7t2tnpTzknx7h1RJvwc7crMTeU1UFtyx8QKT84N2Nd447stxto5srzh",
  "key11": "j9KPimtLbK9hL9kc9xxH8TMWghtZnzn8P1YXRVUvfzA3CncwUXc56UM1L91A9hGGBqWk5CAC8arKv39FrQEZ8dX",
  "key12": "kDWYJQXTAFp3uwYWipkLNoaN13FbTMsnSKBL7ZG3d2bj8L7KcZgABJTswnPHjwYo98wpMSJdZC3qf9F9kupJPMR",
  "key13": "655xKFNhtdtStYsWTUQz9m5voxhNAXt5h3NWW4ozDWtesEKuacHocpAwKzZg1YotdV4zJPuhwidAQnqymyx5VMKM",
  "key14": "5VSSpMnJAkcmH7we9gfFdDHpbSU1AAbWEBgPhYBNfkdFsJ4gJ3naUxADQqxrS91DHNqry4RAvQHTvdf24TrQeogR",
  "key15": "3AmdcFyDbdpYmYjDTWpsGg3gUSE2cJY8wzgYTsJxFq3ktwY9zj4wpRW6Ht3S6V9szrr6UKsmHJSQkNGBnz4gGi8E",
  "key16": "LLZRNpULf7CAMVDnDgc3BY8TeWVHshyjZXiSy4JMqgqCx5cSwKVE7GUL17d31QUA3j98qwtNacj2uXWyf2RCAtr",
  "key17": "52gwVidos2hkub7bmAVuZfK6ExzXRogazDeWD6NWoHNW76iwqYHLBXQsV5ZyuJ2MG99tzKTUVrCzxAmnJtasK3WX",
  "key18": "2dPexwy77rrhfC5cDjWJJXSZq99R4YedCFRch3siBh3Y2xFi8Z57pgLo35hNTMCwV1wRFJGzhYwWaRuT5apCyB5i",
  "key19": "2J8drdTHf41CQecSnou21qyGwP7SxtdV42HtKmNcEpdLfw7Fn4VWxyRnBQYZ3To2voVJkwUVb9bZxGxxVQDfHF46",
  "key20": "zxYAAzALRyBBsvue5Mdx6arAqRQjukZZi5JdKAEEq7mriqjzVsYfj9ERn2KzwT5nxEBXdYRQFN6w7ZMLmqfhTdt",
  "key21": "2NchN8RpDsmEX7rYADKTMSatvC5dkMnvqjXGZyRLbvmW7VQoPogedAtMCiiGyQh6aq5gwE2FKknsHKZNXgRkWP34",
  "key22": "334uUTGxLtXqQDYB2E5PNUohNHNUq1g8dtLLYridBdUmgKx74yzho3ZcNjEXjfrtGqicWxtteYu3k4UiNuAjxbWZ",
  "key23": "4gxczgRnbZAfbM5nr6CeGSJ4SMw69XhwFZmitaXyyQUnZTxeJjM13SP6keTZGquZhWzso1EvFkf4kcgynb2rXPcy",
  "key24": "eojSiCmygKNin4Fp3ztSBfSG6VzkxF6NUiNpn9QLDUf3DttFN4fq7hFt4Pure3ZTzT4MMn2v3drkQ2W61SDEV9y",
  "key25": "24fywpMGh2dUk7QmVLA2A5i3FvCywmmFgdPbFB7r3UGYjqAwkCKzTdqVCD7j1JTpSUkXmubKf8yB7KTYMT9XgLd4",
  "key26": "mQhBfoUV382Rzs7bivsKtJGK7geyj7dFdbNwzS5Pt3mtDoMfNe3Q6t4g4cRb678udwtoD13HzfpKzqbv27YqyA2",
  "key27": "4yDu7LqTnKv8Y2Y4qL5aUaUJfGVVKf2qTPXdz7B7DEv16jRFhDgUc4VQRgrTQZKG9HAyrj7fZoUbhhG241qtW9v1",
  "key28": "4t66wShde9kiu399bX5Pko8Bnadf3FcGoXyFt6iSYRwsnUjZYeGLfNcNVmhfH6UrwSxzF6adqXSxSfe4GWj25hyp",
  "key29": "3NFNYrFm1pXg3pnUsoqCamEbJjxyd6gRsGCC5nmVUgUosStAiR7438nxGFUKCcVhjA9ymDfwvE3Podraz3w4aRda",
  "key30": "5eXRHXnyGbgYs19kxtQSKZmKVAJaH9fe8i4wgacbGs7hNLVgPUDfWS26eD9o9xCQWcseG3cP15U8hvSLRzQPcqb1",
  "key31": "KX7TjygEzWMr6YvxcUq8U6D9Xxxk25H9WPiBsJEBThF8AfdpLE8dAZdGbhtmCmcmacAzNCm7j4nxfLyNiVR3g4d",
  "key32": "45cp5XYTkgTYQ5cPkad1d5EzoypsHfNmu9QeMizbMqR86HhEytVbTxxRcnmuocmrsvuLuS78Dgv8YCtJm9vsxpEP",
  "key33": "4KexRK4ecH9uFBuv76L5h5PVZRBzy4tXskK8JpXF8Yx9jtnAGFA7Z7giUHtXJqEENfkmCDTbvtyCsKxQuE9zbUN8",
  "key34": "5FL8syi7MgNRLoFURYd1piHRcWopK7kEgzhFLCPd1UwNrewj1jSE7iJidc81Nz9g44F4gZ1yBrEQy12A2RYCYWGL",
  "key35": "G2Pw9mRF1EBpXoTpDqC7xpgmj6nqi6v6VjPZRv1AtNGQx6QMx3vupt1wxZaTfQbbVp3furVnLJSkAuwaucrKS92",
  "key36": "5riQKEPZaf8VLPy2Q7Xxwmd5Aeka8sM3GmaRLZ3ZKw8ekdYmKREyKnPWgUfmrTNeP6DWkbMBudTUpVMRo4C1QFJD",
  "key37": "eREiUz8iigGSZP1tcosTAgcN9ZFKkZvEKUgGcN4nxD1SfJZ5sAZF4gPb2JFsXVQJ1k84Gw5WJAc82MQqUVEu3En"
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
