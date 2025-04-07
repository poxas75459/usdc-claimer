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
    "2kbYzx1RQLyQGu3TwHUcntSFs71wzYCG7MbcneCiJddFtVyQKjaAeBjNtxhJbCUc1AxXUhs7Tg3gxhMv24P6bUuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmGpdykwCCEux4oJpFZ3WEmZ6RC9wTM5fKAQ6A8SDbpRkvWX66TYqWMxU9G8iiHGJwtE8Ys3yG51uqLfpDycsZR",
  "key1": "j7dy7xbYZfhoyQ4jkkeWyktCWt5gjCjhckW8AhdFksjJV9tRjTK3FZn8HYkpCvVBacpdHUE6XJSUT5zLCSv3wqH",
  "key2": "52Vswm5awzkditjgA1XCU3RnYF7YP5yRmwxajpnkxSSFAuoarMhZXNfHmz8BxdvMhj3gCZ1s9mpTXvcpb2yA9ZTZ",
  "key3": "2CrmKtZjyar5ZzEo5MAHCA9BEzokgKSYzXK8s1ZhW6dNdvryG3W6TnduAMvbB2ZJvZ6EY9qNGVunwbyPbzgEvfDm",
  "key4": "3UVgtGg9T5hMtAQhB9JjzYxNm9Tyym73HkyLkx5mQTM8GZXthhaN4Dm41NixMSBDD8geS3eTXogLfHV9y9ctyMTa",
  "key5": "4sX2HMfnJnM7WW7eBsg3TMwxeSgbUb7WBa14x9dHSzoJMpgKbzYxnPPwCp35KHKiZFLbgyxpmb9dLHLZaPL1xzWE",
  "key6": "WjWHhydd6eyZDD2N126Yya7Bmyofe1BvjnTG9HWca9giBn7t54TKS9g7wwWGZeEwrotz5oGT2pRpD4xKVcvmR7A",
  "key7": "tmZ8fJP7rdzpQa3ufEm9WTDFYX6yrAkk1R4a1cqANeUJkyq8Ge71rMDTbHy78mwKc99tZd7BVQfZSdjVkW3iCJe",
  "key8": "YprpkAu71G9TTQ1ACosc6gWNfieGRLwDGo87GQyAo6QRnfHALUh8moen8pbYz3KDgEVMj31kWRTgSi8K6TG3P8p",
  "key9": "2GMrJS8dqZDboSw6FoGM7Kd2NA6MwiNCxY8srSF38AMhdufVLQLGD7zyzLzeTvA6WcwLTtqQHGP2JUjXdB65DseL",
  "key10": "GeoPSRdjwDd7xnByYVVYcxhmPbybFxvWwgv8eexRypugTs3ajLYcDhRTuyzjEzGZ75wFpPC9XXydMS8757rdJkq",
  "key11": "4itwD2TxtycoGnaUH5UWLYgSNVB8JvanZiDmst2d4keo9gF2d3uq1HpzV4PibZXJTzynLTjK3Y6MmAShythgxFGE",
  "key12": "5rHNnpTMUCjiDt4NdfbopUM3pLCbdHi47eVkrFkHDGn4wQxLSAW1pGDQeu1ZcUBL4NFsMRRhK2V3zJMbheREtCSg",
  "key13": "4nCeh8gYQyePufqEbPNdwthgKDYge6v2LyE8yzLYpZGRNkzNkrgt47bLvQtfGNxBnfBCQGGkqaqEfQd7W9Dh6DjD",
  "key14": "5FuECW2j4DWRKAE3U8Sk6RLXfyrHNm16aLrKx9hFBxLjTto8Jd7jGUZYMig8d8PuYVryf8wEawqMLPjXC1URUqo9",
  "key15": "2RchD9Yi4TUQAyWV1wqqFY1mTQnRMsxipfp4dfXtSfCnDh5WuCivviekE6sgPyP6GjCsYyEinNYjbrDib2uw6JQs",
  "key16": "NXihXFVt22h2pYx8f5kTtXmaG7RmxDaYjweHYmvgTDe39RFDEfU1FD6MFVCrKZVttkSQwP3UhNwnpgF6bWRNN8G",
  "key17": "28C8YXRNPuTSziquSvfLRmLg6cewVgknbqFDxKUsppuX1weoXSDJ9B5A7EE2geyFp1R8NbQZGJTEZMCFS1FL7fit",
  "key18": "3nPut5krzHwsiAWfAHnPcUaZq7cZ39xAGwH2uLJ84fCpbU5k8B4bjbUVvJRftiubiDiKcwJaX6MwwgSDii1G4G9L",
  "key19": "3GGdQwxcg6QGjYX46aTdY8S8Ni3ETxEKrjg1tUU4HZGUueGqoarT4zQvez42XdLsHju1BSZCc7guQyzCUgywHsLp",
  "key20": "32y4GsfMmi4D13T6x7SF9EvR9NVaj7TMMrAv2dPxsfaDXiD1xmH8ThTgT3cMVhbVVEwBSVJxXycNRK6Wk3rgkeKB",
  "key21": "2XG9AfaZdmVjxmPZh24Gt4PnuTxmnHNaakufqNq5Z3gJdhQjUgWVeFAfQqYqiHMBbAvoyK9QcFssysYiUZEfgbyB",
  "key22": "36M75ACDX1TWvP56iftcHBwUEKJZp5TwgAFvJBw4dvoyvTfJE4o1713Mz1G9dqsFJWphSFWodgzFYKAAVL5MQ2Z",
  "key23": "5SUBKBckRt2wDyH38JHi73B92ghrCUSqL6ELqKCL1xrfSuPQWGqSwuedbFgAv6nnsySKjUNsPXAfdDVK8mPtRv4K",
  "key24": "5qHXWSWN9ExFeWohF4Y7TFpQdvFTNdFAhsZrzFSLhaDukU3G46ES6CMmg8B54sgF3Mtwsj4AT2vC4ej8j8o7dumi",
  "key25": "5huzx2aJfCWmjmmvtSbH7HbAjnGV1NzBXanCfVYT2LsWhDY3GX9VarZBLCJpq7g1roBwf8A8t7zy1Vrwa8Xdixga",
  "key26": "6uHoBJPWK3aPEeddAQRC9PR6t48EPx6SxJx41XD1EVMGTas3fPstf34a3EQMMKFRTXGhtcL7KsUhdAdJHFtUMHN",
  "key27": "63pnPQ3Xg7PXZaxXjLQWWTNYtGeYK34JmkS9yu5nJaYCJY6ZdgV1fCAqVkFo6kptLGBXkwEKDmEd9MSZL2tCDvAD",
  "key28": "2h3aYq3n7aMAWTCXZoZ7rpxRusENLQAkWt1Dnp7n5JVKVe4fWkXZQGpJGBJX8bAjuSmfF9JSzHa7N1aEW9tCQt3m",
  "key29": "zwAcfP1pLMRAnF6Cxji3heaRHkBmfrKgjK6sf6qngBFZc8b2tLvKWEKg3ELCKofMvPpJ1Wf8BzxV4xVebYpCguy",
  "key30": "4JSiJmfTvVUZ35eTZcLT9QdnUNGmrTJKsjRv6ZXDeA3C6ySYhm1mvXJj539d3mnnaapyguVcpqw13xjkNd2TVie9",
  "key31": "3u8LJGMAheaPMBY2NkxvH6kWnhejLUPVXGki7T9CmFiZqAyWTK7rpRCufqVgf7RJgdDJZnh9FiWG6z3mt8Sd1hjG",
  "key32": "2R533Un5PVbXjjuHp64ihMMRzv72ZLJmyGVembscWbUzoyMJAHxvXpD8hvBmqUzTWp473rP3ccvi68HVLCmT6jV3",
  "key33": "4VqXXqqVhndFrAVKCRdriS82hDkVuntSof2m4umKXyJgbD2ERHkH58hDUqSbXXUGeBEEEV4DZpQqw2R5t1LLzNmg",
  "key34": "55FrLEJEgPrRP3ANPkkghLtxDuXX6iw3GbEBy2GETujWQbfBGbVJjQkvFamzP3MkPm9AS4YqLTypF5ELA1QBLBTU",
  "key35": "2NATderoNkaEnEc2T6ZkPSeaDdii2fyYdkN6fDPqo3JVpxh63EKqCZDTPc8f9NdADskZDQz4RoUi3twGQkiwQ5iU",
  "key36": "4zNQ2XJz5DZha63X5cxRiZJNKFhmtqX3jK9UmbXvWhzhKi8YQjppvCah5tbRi142isk671PfH76RSbZzBSvsPdY5"
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
