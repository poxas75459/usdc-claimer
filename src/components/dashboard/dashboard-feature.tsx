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
    "5nrCmJHa4nNTKyLKswGyUzwbTnqSkm4bhqBD62YLTYWHiF819ek8nHNxUNuxST4B62rmWqpf9Z1xDRu34XmqmxLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4STACXthUtiP2U5kXMNy1gGofCUs2u1VKnsC3NFz2zSGqjtqfNZd5emhMdF1BdvPsTGWAoSwzz1g6ynLM4jH7QqC",
  "key1": "KBMruRxQ8Vpwhi2Ep2nVoWKMMJMPRZD8tevsh49DJcXVYH8nGbmmztFu4uSTKUrS44miTs1ZrYPbNyXiTnGSis9",
  "key2": "2yTZztB3EFhdbPSxY8o8wpT9mssFhTNtkUTvtwKdPbzMGCQDiuvfXjXb1nt1eL7DF1nUffsanjT32JLoawFXFvZd",
  "key3": "5DeDo6kf1YXJREZ7G6vkcS4DGnfq3b2f4g7h8JwizbJk3Z4bkHbagvKXBX6TdkXZK6kf5GbhajehQsTojAHrbyrV",
  "key4": "hYxroQVPTwbRqCq62HxuKjbGNuFDi5FM6BsV48QJXb8sLLHmYYdecjkv6sdoeHuoik6saFGes3jCs5dXJxE8pR8",
  "key5": "3gLZ3VqRxis6kUQUDoLk4LPJYvSpS8i5vy7CfZoUbEXuySnpjbgAC1jQkGuUFWuaoMQPTHPYCDvn4JLSnfrTNemr",
  "key6": "34zGaLNbr2u5rFej3vxHR368puNnrnMLjCvML9aNoAjNBMN59kbzEq1JrGJ7RdnPNHuZbquAp6QUSbqeqycqGQYj",
  "key7": "2kqUKubxdXZCLPswbJMSGT3hmFHZtxti9tMiYu4rHVWXnpSyEaiKXHtoyuaP2bZX5X7TARnMzDJJdTEMuhxABoJh",
  "key8": "28ApqktZkR7BDcpgFBKkrfFDL6MBsohHWtb475dL8XTdUtkAmSVKSqvy9K8XAZ4uSUGEwHd7RuacWEyPQao3zE4d",
  "key9": "2ZAiLc57dqpH9mazuhmSR4a5Xot9EEWzLEf7py84cKvbP59mKWpi3CxFj2Rbi3H487w2qQAxNQe8xU935BzFGByt",
  "key10": "4BcBK7tmX8z99PuUj3sCj9QCwGemTKnnYV6J9x1bWEuaDRoADEx69S5hLqHExqDoAcot1839LhzdQmncxd1xsZ5F",
  "key11": "4LuVworyN5sGihY3bq2DEbjAgzJHGpiNtzBxBUtGGorZEQUTFcY5x9gDHzAPoa3DMnWXwU5eEwZYGTF8ECdgnuKx",
  "key12": "4uCfPwg4b4t7jxuqxax5ovJjPH5e9P6M761DAzKSFuJNJ23fYnj7v2sgxDgms9DDz6mcUdga4au76GEfJXjLjo87",
  "key13": "5wgVDtxMywBWL2eg4VksnpopHCWpLQVZLVz6BTsDB3QQQDXGqtTLVbqjuUU3nFQxJ8AZkRqa9f9ZRaPXzB4xqcnb",
  "key14": "5nV5bpPefVRbU67TeKgCm4HmeDJzQ9gQQVDVyVrR785kVXTRqrHSoQETHnwTtWaJgsYMr2qTgd4Fbhjt5M5FzpZU",
  "key15": "49XeXDgTM6tfLPY5krNAPGrMk6jsaQxgYyoedujSGYd8gGDkPgJ3C7R3MjVdBFXzxBnZ8aNC6kZANc58GYJzeRQx",
  "key16": "32MBHnY8mvS16jWqCJzbWAuDY736KNBqDZoovqDMn7v67EPgr5WMNJpbAdxYiGEuGCru68sNKYKD2RMB5Vf1ntve",
  "key17": "9CZTRXAZyDFvdPufRZtJhpr9T6BSaXDtaDFsRNLcQGBxw3w28eFcyp4AjBmo38MU5CERnk1sBfHX8T1cFBNkr3V",
  "key18": "5hnMrfFdDpYSauqS5pKMZewA58CUmeHzLDEX4bSMG6SHXXHCmAb8gAWrDQGidY9PaDxMtcgLDBaeg5C927Dvtscu",
  "key19": "5Wxtju6cJBsWwvvWvt4QekWntk5m7RsVcb7tJSVFgaeivkg5JA6CgY7QmMQEmnL1pQcddJJ4nUB38yrWW7cL84s6",
  "key20": "63A5cPsBCw1pJny9iaLPxkvHhyvV2UjnDnoMCXbV6RoFf9Uyaw3RtUE4VjAiyeRB8k4MXdspE6gnGeHVGzDh5yJ",
  "key21": "2m3QwDZgRXTgWHuLyGWZiaJ1jNsKiuyFiFuNDky9VB5duyPPzND3QWkqZoHbndcpa8DhWJf3S7boJVTJ5ueGZrWg",
  "key22": "3DYFmB64mVag4T2ns9rnUJSB88NFVC5RcwLetayYnpmdHu9vcPQnq43azL6LtPGKhkbETdA1spHPxsH8gYmBN5Yq",
  "key23": "5up3FimrRKq2nGmvxzWVxv4UnN4pXVUV5jKP3e9JByz3hyykCK2EVYwYRhWBvU6bNU55F5eWoqL6Rw9X443nBxoZ",
  "key24": "3xAnnNsEj7WfafbqDxZ46kWD1qh4BF3zKfxva7j6Sa5GzFZy8w6XtxGC7oBbR9UMeKqcbM2wYNBVgwijxE3iXdRm",
  "key25": "vbkt3cpr1kXttPJ5bFRLPpmerzc3y3DYv9EDCqrFQ2sDieesDGjSY5PWDHLaFoTUuQfJKAsNRmna7SozyfyrAmL",
  "key26": "5uCEUoXeyPLvUxXCGxsduZWV7mnnuRyTVWYyzQYiM2iX9ikzDkP3SUKRt5SD2BJAzCuJz7ycYwA8WzSvqwRZBzer",
  "key27": "4RzQn88Wic6JH62a2QUVdSJttefvjcMY1jxNuDQf1gkuB3w8gNftyL5qmsmbugN2PyAf819JRJtfKw5ygDdhAmMt",
  "key28": "2AAmpxdCeufyWs1wduh5xgGcjBJExwq3fzCGVVZrcfemJwaQNb8qFrerLrTDFswq3sfGBmcQdWj2vPAsUV4Q3R9U",
  "key29": "Ps4nxHrDyEUxYiYEsPzcMuuAGao6iGpEfEYKou8NoRkMX32E5xRkfykdLhEJ1kXqWQGHfvYYcnsZ6E6HcuPrRn4",
  "key30": "5U4eW6qjAU8nfGDKK2u5mMouXG8o8tiF4pG24AmjwF4Jnj7XKt65KnxbyhNj3LG7uVQmut1whHWngnSy8RaYY2ae",
  "key31": "5Uwmut89QuxtppUWq6rBvyoKYSwTAsSYvzkd2uzow6PPmEmR371MK5uuGjB1hoJHcEA9pD7y3tMsE2yZ3Yw7Ht97",
  "key32": "5kDEjBy2obLvafz3yrGswrvATP7EYPaany9nvtuh9YwixCekahFuiv3R5JNHiJHHh9Hg2H2obZZLB1iemtZTffzx",
  "key33": "3Vw4a1pZJhagkiaCgQXx1zi8zFrb2VS5haP5LB5a4hmGDcNS5vAWvAKjgMkHcdueYQMYHtNx2Np4xRj7gbef8ymQ",
  "key34": "ZF2o4rPTfgUdbMf4JtZ8pRv2cKzz7aQgdiazsBBkcn1VQK694zFFpXUgQhnR5rK6tMRKZ7DJSEYzSqX9wbFP9kw",
  "key35": "Brg3mAzQvkA9dfNoR22D4xZWpkWrFoE4FLLSjv85NVjgW56QDZrdGmM5diD4xKDDeVqTnkitDpm3Z8qcjVNYigx",
  "key36": "4RJR76iLmTierimeL1UH2McSYd1ERZLaRD4ABLrFFSAPnHvv9nKHn4esXyj9iDNK1Tnz1EQZHJGYFkfgaMEePrRw",
  "key37": "subEHFDbPjmiczKNFAWRyMtaP1L1rbrmN4WMUZEYevqdmiznc8Qdu7fy4iEs8cFFF7A3qbynxAnjYtBAWcUKNpb",
  "key38": "4U3fkTBNHfFEFoz4RA99fPPeZpq4u1Y8zGVziNPdVDPyCTFTs5Rz8C5omeyyCVZq7UD4TXGZizXDjCZMHeaToS4q",
  "key39": "3NmVTK6PCDCLVK8t62yPpBewtxMrZ6DoKWi8eQMvBycAmeFk3ZRYhD6hXFza5RiF9EKmrh8PHsoYb8p3WoSq95yv"
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
