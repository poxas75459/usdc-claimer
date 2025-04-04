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
    "5dofcn3aEXxmbPpuPARj5dwKeEgvqSUWckAxRaNtCEbQKQDPzqsBs8opPkVF5k6pUVX9qHZ64wKNNBDrJkwVjukf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpA1WzFzqBs1M5PzMTKTf87REwRyu4w3wDhigitMzP8tGnyj6o1PB4iHT3Qg4LomDG2Gb5HePRxXL1WTYhQ6bZr",
  "key1": "2i874H2A7MHyX2Gp8zJLnUMqKC25D5yXXMMyiXGco8BXNSrDWKHDaDfwjLWqXzKGioAtDS6SbRjzzFXUagix33Ps",
  "key2": "5LyeMyGEAHPLmhuoLN4w19cKAJxhezPcpjoMa86S3V7NykSNXEvqym2hq2Ti7cFJBNkVn14nTSNtpKp6T88FZ7DT",
  "key3": "63oC9n7kFRdgVmxsWmmsy8dXRZqtfHRNti19zWtrjS9z42baopFCCs69aTx8tN5JWnBm5EKTtTwoi2JLf6xdMQ8B",
  "key4": "zVKfq9u4KF1eFUnFRvqS2h7pxADUETvZU7Rayw2qLzCt8B19NaBH1LhS91AmJnE5sjm9WU7PW9zT3JxDNK8ihmZ",
  "key5": "3YeD1UMbBxQzn7RnUeyYNSBZx2FH5JyeEFgK367F5GpX9agAaEenZRU5JfokhNwBaYzte8ytwKihPy7XLpkgy2RK",
  "key6": "4AK9tQEqrWdVxSLDdBzU1NXAKpnNEMsgJJ2eXoZGKfB3ZQo1MhQaNCHqPT9sWPaLQPbSNtkmmTwP7AJd7FCxvmGp",
  "key7": "3qVtVcVdpUncd48ZKJrkDYKCCczZHyNKkzNLpzYLjAMmTYXedRE2nkzY1QK8Hen4kAXjLsbfAuH23qwadsPMuHFV",
  "key8": "42gVVqYP5CPesto3rtyXhFQW66MT8yMSH5ktDPUbvVQPH6iAuUVzULs4X6JLxmvRwQuBht8WAcuU3TMGhERZ3xx8",
  "key9": "2nKFU3uykWmsHMN3V75CTS8t4MoZ1RTk6uqoVjB6WFpm7W6bgb1RGUtfwsc3uFQMqQ6nofbDWd8wVmDuJ8YZ6NDw",
  "key10": "1d9LDu2zkQYEgwsqnvX9a9pEZNC6bppHkaeHbJwfjSJTvEioNWcEzzWXJAo2tMSf5tN1nHXdkvakBzyZxgewnmC",
  "key11": "5e6xULbcQ2VTdJrEuaXA2VQVbocRUZ16pNJoErNZXtVGDhVPNT1cq8xjgsuhhG8hfr5dEaQP6U7YyCokzYZT1ENU",
  "key12": "4CdQXtyQJ5m6jqodkDz7zgyGVPS1Bf9BMUKoLosD824BCxLfBjDAMf6jRSaVaPASPCTz3kMjdwzJ8E9upVMv5kDx",
  "key13": "RJi5FFkg917aT9zvqvUrGUcx5JeFJn3tEcwjdGMWBRTmvnK8iLfKVazvJ4cH5oy55X1mPYE5zKo5uV2mvfiknDc",
  "key14": "2uo9ZNMCN1Ho4CKdE8qMwnYGCkdx4HhbbqcbphCaZh4BrydvLkpAnaWgYZvBJW512W1gKr9LXvPKQQB6phv9BVUU",
  "key15": "2TcMbVAzfXoPt9DPmyJib6RoXmCZVj9ExYrfbSBEudiBMKuCJHdGRFvLzazyZLhFGEej8DC5PZQRCtyJfaFZSwsX",
  "key16": "2SSLkaTeufStXK9k8bYxuYm3GJtbYMBu5tQa4gEpdfD8p8XZ6TFLhfrhRDGmZfrsJhA1cpLKsZhRCGG2N9Da1WBQ",
  "key17": "5un9Byvr3N4rtAnhksgZyLqQKJkJVw98W7vJricBHBXDCRJ8eW88y2d2YrdPcMej4PqLPRFnmwskx7WX8zKmVSmp",
  "key18": "FBns5HaQ4q1YLM3zABJobg6uwCYXiF3Tsbndj9qvrFNa43spDSpfokFP3brKPgY2xtwh29ud4y5Esw1rdYt1GCj",
  "key19": "4mwahr4gCe7NXBQHsx4rDZyrYzHewbLgYyvM9SuFZ95HxRN54epQTfU3J84xvNCG4hxd3SUmZ2CwkJWrEmNgvRW8",
  "key20": "2fLawKGfGhFBNrjySEvhg2e34RZo5LvAPWBQcWbmwwzwC8H4U1ui5Vz2JSsZKbNpqwqUQjxZXifcGXCADjN3tKTa",
  "key21": "5KmdvkNSyizpKjTzDbM1Q5ULwY3FoQktLKUHeHQkTD7SGbWarQdXXLjc5k4VfyKLaoP33CGxCQGAzMEDUHLWPadN",
  "key22": "4F55sr3Fuve4cCduqFUx5v5Brtovx87WLMKnomhPyhqkXaCGwAGpAAkgTHUtWdWV3cLxo6abVTRzR5r1QhFE8rPd",
  "key23": "2JxyiXgU5Mdoqi7GmxRUSTnJRRTzw7RATS1phWWyEVvzudMxn7uhKkVaD9ywpYtmb4miSoZQTEKAREFPMrmxPoVP",
  "key24": "2BokECKjkXDjn88xp5sriVT9DVTajJAZBjgSyqEZFKHSpHTt2GGmyi7dxnViXiA5JUCVPnM7fbJbVFSWcE9um7CS",
  "key25": "3xXGRxCuWpWdVDxBazyJB1cGWZKSS3rgeTkM5CUuB5rBBcrAdfC1dUtBoyqy53W7rCxb7gMcrpnnHDT8Wwc6Gxit",
  "key26": "5UJVpWesCU3kmvWk1tzgwVbben9qUo79LtpvB6C6WAjRLGRqFdRVW33poaMjfvFVoGGEktu4VxKhdr2pbNgiGzWM",
  "key27": "5ncNhBed2qTHUMY2R7RViANM7HU2isFQTx2255zg7MAg2ndsmdP2vdgcYRAXzCgAV4c6Syp5oaMJdnH5F8ypZuzA",
  "key28": "3AqxVSHBjocQApQXLa4xrxJoaXmh7EFMBrqpGbogzGbCRHo7fH4eavGScb9PTQcbXbRHuYfcPQiadd1LVubefsMZ",
  "key29": "3odSnCPA2ToKndxD4KRvnX6QAYnio4Ht3jDsSZvtcE86J5TVjzNXypNP3BDzojszcVfio3ktbYBjuHfc7un2j4v",
  "key30": "zZigLCvSM5TyTb7xVSpMHKMN1LPgn6F8VXU3bnTXfzg2NuuDUHkmQ9koaEi57HoYyfaPt1tAbGwtwMV6iiHaxiz",
  "key31": "3JnUxKkmKNaLS4BGJMNSiHfkpyPmFaEDoSbW1z8jRZnc5dsN5Y9mTnWzzTf9GXEhRxL1aexJoprU6jbHdL9Piyfm",
  "key32": "5NEfMVJZ7tcMSGMu2cEenpEBveF1vmp983XSZBHzeYRkBFhns1xgB1NEbw6cH1Bz9urHkLZc1M8wNUKzHN5oJBBs",
  "key33": "4DAfMJj2NEJ6o6NbuLMVVugmmmUQFLc8kGZF5svFcCkqVgmngJigPm5BZf46JtKGpo4pLEBvkRD8pHiopkqeQQSB",
  "key34": "2TTqePih6DuphwHwaBNx2gj6H3aDEyWEXs1hcg4FWD9o2obGyc39Mhy1UK43QM9vFnJVpqfFLSniPc2ssoDMfedG",
  "key35": "W45V1vEnnji4K6565fHfZZENSmCoiawmRy688TPnYqhW1N2jX6xgBVyBxhw8peXWRf1q4oST1bZuePsiPRH8BFz",
  "key36": "3dNSB4Y5iaJ7psrFDaoLVm1xxRp3KvSdm873SgmizTTA1AmLHknVPgzJwxB99W6nqCitTHzzA4dVFoAgBEbTnM8U",
  "key37": "4QgZkgTKbrzvfbb62UzrDTqF14vjk2cEaxUh7CEao2pAMw4xb1ZcKMrhtCocAGc4B6FHfcYCkaTpaPKrq5QQrC92",
  "key38": "46mmaCH1NsyHVDDEtH3CRABPhf5tVwmKn4aKpBfHtsreVfutbhJtE9XpN1V41xVEjp7u3M75Gv7DMh28AeNw7yee",
  "key39": "4rdSyXcQ9TrZYPH6Jpf6d9WTXyrN4NJb5jzCD1Jcnmys7MJKvyaDvHAVN4dLGinDHcL6MBFj1AfUVockg4c9w754",
  "key40": "64SEvZ59oZuEAv7XHX5PPozeFPdQnctd2LAhw8s553oRRi8robxdkR7JJPh4TmKADEdiRayYf2asFsZe2d7iNCJ4",
  "key41": "5p5E3Vn9LmDzoENGvNgKtJgLD7BP5tC2b89aaS7eX4wymghYhYgnDmKFpUUvGH8DwrKnffJiSEf6qEw7WVhZsWbH",
  "key42": "61qV5g25QQ73BGM3siJha2MaXxEM1jztwfBYThgKNZ81c2qvv2JmhQsN8um9NgBFpdRgu3aAtS9yzYM9VX8BAaqj"
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
