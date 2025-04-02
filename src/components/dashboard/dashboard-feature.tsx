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
    "AQL4VMKF8PzfgYyvLB2RGc7aW9dSSbznHyYSxzu6Vbgw4iiWiRhhsvF4CTYfR84uj6LVc8F4PfKp54VnmBydhtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u91SE7GK46Y6UzDvgwQPyA67MZtACmU7Bc8HmKXugaqprXKxrmxK762G2DbWU66Audn7CcmEi2fxyAF4m788jL6",
  "key1": "4LQysYbkscbseAPtozjEqhLHE6ygGnAzg2wk7MFN8ryK3xjFNx5DCz3du7s1uMnkP8ryLrFFiPvCxZ7fToNZ4bHH",
  "key2": "3EAB9Yysp1nxb8uRZ6DYjAKFMjbYTTs3At82pe1hT1NaqGQ6iEk7eCsX3DFUNc2vdhjAtGKjUX4hrzMDQtRoPdLj",
  "key3": "35d7bcMRcZBybmNuBtBtaNxu9ajj1FUHq43EmT4nHnwWbkMUFpqm394GN4QyrbQq8BqSeNwreWHmADAk4yWmrMMA",
  "key4": "2d9sCEcbGEuVhejqnfJDoF4D92ahsnCjYTqRGEgonzEab8yHmhzvxHr8oAKQQDmayPDMfyJbyVsx23zakEoUEyGt",
  "key5": "jA1pGmnqCSTBhMojztSDJ64aUKyqEcQoUSdUGwks44k1nBMo3BhVK3Frnx8Z7NJ2MB1xSFKPYQ8jT1UxrEDBF15",
  "key6": "57KigDNL2v9JQq3u6SiPPMgGVA2jQuYAZfYX5ero1VNPjNW4tLSvQW6jdU1UWAM2BxtKuMXNr3Bp8QwyYUxLD4Vd",
  "key7": "4PA1KmJssh5BZEV27WYnsLw8hE1geDRemRia5cDva4HtoKKFuZsyL3XzLezMG4Y5hZjM5xfKJHZqT8WPNTeQh6mM",
  "key8": "3okuejhRfTsLQdHz9GHyL3fGTydNFGfn5JBcrYXEYaFwDhSNNvGwHFD3jzyEV1tmwMyRTq7r9zyMvy7BJchVnhQ1",
  "key9": "2Y9pDHFCoU3tnpFo85akEomZVJ7HfZ6LmMzKKczfe4NvyYh2M6nWd2aeGF6r97pfxXba3Tmoxzi6Vf5eiuLsR4x6",
  "key10": "5nJc2XeRfLSBGgfwNSHgCfNeb6xYxPZ66JY6JKE1CEEVsePTUGTGvuw1w9qJoTRmyVkBaQaR2N5ujLLg3MEpMZaJ",
  "key11": "66vaTYgZSchznCNsMQxdvZzM71xT7dCbaUvGBmUYafqWQEJihAsX6YoLdpULREuf3Rot3qvHW4kySUCrbYj7eigE",
  "key12": "56zNuax9L2CJtJcQNZ6ZSKW8iiugjy7W3sJHhB4NHbW8yvA62kkMNV2LRtJ32rxmMTXxGi2r4s5NXytVwBJZJu1n",
  "key13": "23xYEb84hC78TBpbuwKYVdNUFBbKqs4XDiP6gvtvS7vhAJfGmUSVJx4rLsWKWR9LFkgjtjScmUjpSgT9UGsR2N4b",
  "key14": "38m2gM281V1YDUWivhn9ZV8ALagmZ6d2df8oNw3MAftz6mSDQNLf5K34VheNkU9i5myVTZrKw9UD3N67dQb6htmE",
  "key15": "54RqrGcBFfCGZvy3jVxqR8hbpi7p6TjFXyP1BXFPzaf8vzVJzQzSQNKMedi6b1BZwVLQqjLddegktySREt1kV9EX",
  "key16": "5ahNK54Emhvf93L5FRc6HJp4iDYQNdX3Yu1Z4tYy5VZSqCXp9xmGsNX3DPvRRJ94brrEEihcBwg7MKrN3tfgf53x",
  "key17": "4WizGRf3cjWn6gTBCRCXwyjrubjUnuqe5Vui9nuNmQF5dzf69x3BmZUGZe3y2saKXbbPHSXJ7uh3APRck8coe8Kd",
  "key18": "5mmvxSGMLShEm7vJKda6C4Gnh1xUsRw4v6djE9mtiN6s1UqtqSgifQL7f3Vjo1p2Gv3SEK12k3BTi5g2tB7m8rPD",
  "key19": "3kjM9NzkXYHbrgj6k929vvXwLoFafsvkzGqf5ghbBRRo9cP2oBtJfKkPYhtapD4rMqnCZ2WxFt71U4X2QWvY71zd",
  "key20": "2NyAnTAwVpfgNLh7cgpdpNGwYzuXpxRBmULwdRsn6bYafzHywvi1WWGEDTEeoBdQSCf3RPrjWKi35vdaS58YszSN",
  "key21": "55HxKzrn9v7Gw7dN28WxXHNbaetFskexbXvB7xoxeduhCFUP5DVwv3343p97kucSgcZuAa3o1mkBQMVcoJrvNWsf",
  "key22": "iDoYykkvxkULhcLsyhcA6WDN24KheBLxQbUYX6f2uhz9Z5oDxEcCiVXGNNMR3ooD6N8npUXVKq2eK5VBESr2Z3n",
  "key23": "Hsh9iTGdR9vzknnHmvqyhCSshu6UQciy6GZWP4jd9DyimwSAmKh9ZYXT5wUiedv1SoxQ122ZLmpJ1QqhZimDn9C",
  "key24": "2xnej3K43rzttJ2ZJQetm1iWWXDszgBPZa6WSiKgjpq4uojp9A3UWHX2BM7KW81NF3gMvq9NsdSy1Y8QHr1qj937",
  "key25": "J4GhhFsxVPomVmuYCcmuDEwpJUtnCa8L4yUjsN4H4pP44fZiQ3cFCRfKettVVDV2bX6GvNxEiEFwzfPewhHVa7w",
  "key26": "5QD9AhHqT7sjxJA9mdM6pPiYw4DdgcNEUKCn9zZUSunHsMRBqChJKgY2Z9wkbQ7V5a9MiXUeaEZ6NuwGTaWRr8UV",
  "key27": "67iDtTRDPCZpJ8a3ojAZm4uzNMrCfTbWFJQi8zVYCqGf6ZPT4wWScATiYy3MMLAXRNged3Eco37JNkw9BxM4Pmvs",
  "key28": "4cz4sYuufaZtEsBCvtGpTa2wui5zsxi4vJE3NDBXXjksfvnFDT6B1Ey1syXhidiSDeKDZvkA9FVYKba1efKNUwv9",
  "key29": "4BgLoHFre6heW6fsdQJF47MsxiXC4qxHafLVRPCXvvwesxeMKkKcZjpWXR58k2hjfhfwKEQkjRStfgAzwtjSndE1",
  "key30": "5Ez6keH8LJec1axZMPUxFMtgXRkDbaj1j9f5PPzcJYgDSuSWzC8K9UExn9kv6oyzwDpF8ET2LQJ5L2v3xevbpY9D",
  "key31": "2SVvxaKPneHrfc9DB86kWb4DgEMg2r9Tx8atfdjrm5kEMa6tTKHJg1Qxp9JSh9yAuG5PzPCr9Em9uEobXyHuwGc",
  "key32": "63y76mdodmBiRM2oiiuLADFaT46ggiqSgYd14JHMkz6wZY1GaXDpXLqdS89RMwiFbg8MP6UTnYUFMqBgxX8UoYqe",
  "key33": "5B4FCgauJ9nD9kLgzTo1aVHyxGug7BcXy7vHoF3CLm1yKnrhqptPvwSdZtWfYnnPpfYwqdeWjRtixbETk1Q1poFX",
  "key34": "4CqfNfFVdfcVN2s6s4iV85PbtCoTiWyDKAp6tQ25qb63DKu3vJkZNBcFdYE8HYuh9JvE2ntpbxQKuCUuqa1W2QSr",
  "key35": "zNRjF392qZmdXr9tUtfC92Dpd41e1LMq8WdUG4QtNPRwSYw8K8AWHXMwYaE41gMR4ztdYHvnSt7siHVDktvEWap",
  "key36": "2C8A2hJ4ojnSPjASm3Zq39qtbYAWjiZHH6KLmLrbngYWdWtuzn5sQBKk65EN75uPvpX7dTAnRj5p4EqVsdpPnTuW",
  "key37": "2dVzoHpuSjYNy5wAy61o3PFvEz6BHMhy6xdRBHQsjW1iNQc28c34woMapUx7W3MTfnkoJD6UdctPTFZgopyWpu1a",
  "key38": "5QYRFV5Ey5zQ2kxfifPT4zAZu3pn4QM58XCygXtdisAAVS6DWFhYqmUpJfSet97pMh8ggKZJBfyscH49jK2rKx46",
  "key39": "5rRjHM5yzqkwYb1REp6hNcNWVZzJ96sa4HSE6b9E3oGJ6kYob5KoTnBBDZjqPKp8nQ76KRddAAqo3RqFUB1LStor",
  "key40": "5FJcc5t669DjfdK4NsLYSieprUDWzNkBBGegRT6WqCs8pYYVHLu6RHQQXfaJMnAmbDbXpSxgKPdtrqwztcxnrwpL",
  "key41": "2NEh3TnmNm6oR1qicHAGYueC6KKncPxGZsz6niHctbwfhzf2hu3peeSmURiSdafHH7Y4gfAc8UdrmTsLqaVxYQA4",
  "key42": "4vZjy2XEoXrkBV2S3QhqfPnbbJuhC1FyJGcsvws3CeXrJYb9esk1rWkvUqyoLr3JSRFPF2EJwXWAvee2FfW2zhmy",
  "key43": "2yw7odi8JHYHeyRHZv9Rj4vPS4Aq1eoNNgk99tPPQUdp6oVLLccbLv5CqLKYHWhDhgz8eSbbuXxRoZibwrEoTES",
  "key44": "5rL7SB87VLVgssjywCPxTJyuSNkfu7ph5vxPU3QSo8nUGUj1PB7dpju7t76xs3V1kWrnn8KoX28jxJrHRXhBQFxd",
  "key45": "43T32AtaJKYSxk7okXDojokogrERsNJW66pTR6QmLxcmxRcKqCEJ6fxowpTptJiESaFJfK6GmLnvNqUqVYtvsYrU",
  "key46": "3vbXpbo6L7LVD4KmA2yMjrGTdob9o1K1dbuWdNaYLxzWc6doQe2zedGe6ch2VorwqtJZKZ3emuBbfHiMbmHtUoFk"
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
