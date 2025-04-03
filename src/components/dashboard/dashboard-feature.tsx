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
    "2vswiFvAzUcKVvw6mmiW7h5THH8BfDuHa4owfyorYGzSRZLhzWkPYY5BtXX1rgcxikMNjxDjGoEzzG5YbbRk8Npq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jv2xQa12dyh1k4EQ4VSXUM5QHkhroNgEZiGK9jmhUEjXiHF52VMp8PqQVohg2RGVs6qoLqXmVkPQf6wkhCg7CQu",
  "key1": "5SZpbdZNtMFJCUKeaBLf27e9Sh8BvCja2XCq4qUKWYUXugwcR7wDTEKa8LeP84KKZJGTuox5fjKvjfHXjDzCSDD1",
  "key2": "217wwiZ82PKdGezCx7R9qT3FCxvPKBtZyzAnAmz3kv3qwbDerbRg9Q4qsSJRUQ3nntYYZsfsrUyZJ9hk6nf8MtsA",
  "key3": "5DT1Ssdur9zbyXJBsaphjL3XXm5ZSbjG43nft1HueRtdJSmUBS6iBRKT6VbmsXuvZeigFjkCKVW1r2bQDZttDqK1",
  "key4": "2U3UXTyVyBb5rLY7BmzNCdxaqTHe9TBfdouxoNNpT94kswPtHohraX1FssGP2t5z3DZLuuJMUV9EzhRrPmdcfhUC",
  "key5": "45zLpNJpQGpc8sqgh6fsayvWC7dRtEUfFVgkxffLnG7cVWtt1yyzybmHhbxDQSM19hUGiK2tvEDaCK3ho18KZBaP",
  "key6": "3Bs74t5zPNVtsWZoU6KT3fnCk63qgVagMp77dKGdQzesM7mLVM2oYChtLMqJSg2wFYQhSwopBnL7USYrUKMntD1q",
  "key7": "2G6wfzcLK2s5E5D4f9eWkb6zZZonc1NdwTuQysJxaXzHfEBSvYmsweAug4tpMjWFSDQhMQEJMozJkpMwC932xdf4",
  "key8": "2JxWBE1mu8qjfdSY2dguVRk9uVe9qx9r7MW7QdktMcn86THRqVJsV92bhFquiXgu6boW5aHnbJLVvRjmfjK3fQC4",
  "key9": "ygeqgACkgNuqYNXhLiA5wMs93nbKK174zytHedysWUJw58sb7N4jonw9yWhcUwNLyrFBJqW5Q6bC15kc4f1MKm7",
  "key10": "ocSCqTKBLGFKvTFbAYgSYiT3oN9rqtPmmCyysYR55gu1q34rdba6NE6ntzMq12FAsdETPKsj5uPoFZdLoJau6ZT",
  "key11": "3GT2SKXBLgNsMXqGpATRynh1jNswuTcZRe3uH5x9CB7QrHzGHfjaP23LGZn49xwD4bWtK8hanUFANu5r5bYLZA4n",
  "key12": "4KkotboLJuj9EC1VVFEZqGQ9ai44zPcyMoP1aFEn1RA3XpoEb4z6bwES7qPLCPx1cNXtpAN2T5LXNicMWi7PQ9J2",
  "key13": "dw9HXQgqa9DKBKCp1qBn7zcfV7b4H5yePLCFRYNHgh6z2JyaD3eaBjBtYNuz8dV3xPVQc1KYs4DAtX73FT7vBzD",
  "key14": "5jYaDvzeJHPiVpCk4ews5MZa3ZSDkxaJ5QEUSfB1tcaXc6HKWM3qC3i6HSMAgqiZ1BXgM2JqjM7jfNdkxAaCxQ3w",
  "key15": "63Qxt6AFCUzDcnJUGrsHJNog1qKFx7ozTqQx3ssycQpYvwenf5z5rmBp35oGCn5qRQpLGaUMcmPR2hYvbWVq1sBZ",
  "key16": "UXzya62UKJZmEWnesB3TSgYFZNMGDqKieT3dH7sG8Mwbfio3m8PZffVfkPAiht4khh5F34JoLXqapWHX76FHG1k",
  "key17": "4RFjU3E3CYotyA5fAdrTPsvrzxgfKjHBjZShApMiUJsC2brVv6YYJ1H5H3EjHJE84FXCy8cMbajzYgWq3CXKA7j5",
  "key18": "LFgvokcGRK4MwRZxcd4Pg2DQh76HBHqSvyn4uoYdABMrFLMUDMUZPxT7hL6raestSQ66LgunjCPf6db1PxLxpEG",
  "key19": "3PCyNUqzMLCBEMTksN6DPN6EUdG3ASEzScQgaGswAB1z6ZbD5QQsgJWXDWQzKvvRky26mWavfYxB9ZtoPxD9vYBM",
  "key20": "3iSUtPXupHy4fLrAf5YoEHLm9uJ4cUoPUrJ5Qqq5Eu4TWfJ7pEr14ySLLQFHsg7SGJxQhhdfC3xMi5JmWkdVgrDU",
  "key21": "21FacSDMaxgppAbZ42DD4y6oCFDMn5XJfjtqWBzt6z8gYZCjCJqDKgJTKrHrYVJ7uSJuJwxNiK1cjqVi4FHaomZQ",
  "key22": "2wfqJBh9UbHFZgaokBAMvxnTeR2a6ABAG3kc9CwnaEDXVqfDWcqb56ArdGazb6vmH8KPTtb7gFpHdAEsAf4YtgG7",
  "key23": "2kwkJfiDAYYDuMidBPSLPwm7sriSxuYZz9QqJ27BPMcn8byx2xwhNaEAkSvkYhrkBByQzxa6GEUk2KcdRaBbdDMn",
  "key24": "5S3XaNYJ5NoTBhYDAFyDZmsRAi9EGpPPnP9JaFrzGL1vs9R5HbqTLCJd47i5Hz37TWWQWofqQ61isbGe3avAbMNe",
  "key25": "4dgDDGSej3KHVxvyL8V564ADMqdBePYz8GzACewuYqRhi4byN1phAxDUsrtCzT9R8bk6uwLjNn1z9vyTfPwq7tLu",
  "key26": "5EAtPFxBXcjSqoTgJsh6HGGcWRhYHpRz4ufrVN76PQE4FtYZmg78p44acNnRxKc2LrujHbHNKtGYLGvdJtaDwUn7",
  "key27": "4sGMmkwjMswGw4S7MJnBKs35XZSNZsTQvLvHLTdTVZ1Prje8n2ZyoktT8oCytSii8hJVUmvraXdNsWvv61JYvMVs",
  "key28": "5ZhvR1aHGDaaqtfoKnKhgyjDRa9Mi2psd3kcNurUBsUggmR9GqxXS1GeqZ5AtjVBaTXE8cJg3hg46LMRSyGq1iFG",
  "key29": "5pyyUTiDKXm524Tuoe8KjuVbZtEtqmf7cQy8ZRxsmGh8nVbaELeMEaGD4nRZkHboXEh5rQ7v8VmLrswFG7gj4Xur",
  "key30": "3Vo5oWdrqXj66U4SvmruRC1cNVbYqE2GFRFjCE3gqmJj2ar5ts7u7HmpK6pT9jwP9vGagjqkgzJ9iSZCQWr1GGy6",
  "key31": "4gr3qwdCujpG7jtb59W7nnu5Hi8hnTxD2HgZkHBg8pzjy2NTqK1gEhYou8mXW4AiM7RqKVHd9iU1wsdxBUqZj1yY",
  "key32": "4gsozT46mcqSproeUnNGysKLWxJNojWjuxEwg7LAUuXSvXChcytDg7gtvhG1fPwaAqEG4kekcnYfpGFynWivSZKu",
  "key33": "uBkX1eDL5jbPnSZUybrj6XKnd6GnznS47CQf4MxAD6UMWHf9zdkJMwktacGGRfFd5q2823c6ReVvURo4rapYLUU",
  "key34": "4mbrQJzjRZArLLY1QxfJi9LXXFGhcEAe1FUT5fzcacLoP1LqKrbf2g4nYMkG1hwHss4AbedECRteMJZTN95SHgUU",
  "key35": "rZwqQs3ZhbeALuLmQDUjwWVW3Xj6gF2DmcJTrKkJzwxm6worgpkTP5pr7K4xvFWYg6uEoTSY54adXZdXiQ7La49",
  "key36": "4ruZs6AqwRMk6NDX944mqUDX11AabVnkMCke3RkM1aEqucrTP3HQfCZBvt8npqHxo4mN46D1ojQ9F7nrUzHWRLSX",
  "key37": "2g36JL3rZv9umnzfhMbXbd3QazCqrzFKT9L4c7NRHyEjrKBLGXzVobcs6kFfv7dBPsyXHZ7Dkz4P7yz7FWLMgsAZ",
  "key38": "FffNhfvY6BV7eQmygmjVDW8xi3guRGRhq3iUWZ2RP7p7NbLrVE2DGEMmLXTREGRoXN1WyXJBvKF2FEZTZtqT4We",
  "key39": "3FJhvPoYdjnoYJ8GU5BP8zGB1eixn8hoTcmCA4fsq7VGBWnyUkDDupB4fGBtNSkY1kdwYEtWZWM5B33rKzy5CQQL",
  "key40": "5fKGhTK9WDcCfYyPZXsrEonBryPQDRed6fMtw45mLk3mEHr79shGz9zfckuu7aiFwuY5vLDz7JNnMD4vcXS8EYQg",
  "key41": "3TXHFv2AvzkAhpjkDeQ2eeLLJuR4g4zZi4dkh2xLZjiC1aCJtCXCmLu1PUnbSonnoH17Syr8Yu3yZV1zrwMn3B5J",
  "key42": "5DfcAJtE554bsdWcAvkvi3bED2cFxkbXWL6uj2xmzk3PjdeH56zKaNpnMNxaDZpobUJWn1saNd5uiWFeVKeASqJr"
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
