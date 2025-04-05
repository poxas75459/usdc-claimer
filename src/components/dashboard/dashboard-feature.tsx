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
    "3T1ipHTvh7PRKnD3tkWiEEN6Apo4jiZNdcezG1jGQz2T8pRJpE8CTNL99CjFqvvhUeXADp3XeqShdkNtetGfH5Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGJENQVhJZrGhT1dicL4xy8RRK9gHk5VQ8hbzPkD1cYAE6iqEet2xN9pckqm1TVWjBytaXxjmMkZQ4Q8yMv1qCi",
  "key1": "2CaSNHEQoYHnGYzednU5huv6F2QD9PZuuyNzs1m2kx3H41t1Ytu42vAqZbXRUtb4KAoaGEC2i4hc8YbABxJUhRiS",
  "key2": "4JaEKNNSu5iW66uLxosQEWLvWoQTMESNAw8WCGetUK4iPrxu1r7e4Q8jq618SWtGj9ev42VxRaFYton5ZxYPFPhE",
  "key3": "2XLyu7bMDpZxeLoPShGDjeKjs5CRFhGGWumjs418UJckz6nzWt5MnLQVYVkurPuKyrfn1zngRb5X13MJky7agQA3",
  "key4": "3fHjCt9Z8sU6KGAJcpLMHrMd262XG1TPrnmLmhWu1FH4af1FW5c98GKQYYhxw5L2dpkUgUyGAuXZbWiKaVZtKB6C",
  "key5": "4PuDaRyNmFHtDbhKJPXZ45cHJxpzJggJzNc5ymzzQC5nKgJTgxrKtwYir1WVRvurREJPrQ6VeGSRD6GCmm8L45ob",
  "key6": "3grac2N9MJsiooxk8aEFUcAh24WreNY4pP4xVehv54wkDGkwC1YUgtix2F8SWqKaMdJ6SX93QGgKWpcp6JNEhJDc",
  "key7": "2x41JRtvFDytK2pFmwPGQMoxQSBvUxVzg85RCirpkoQiNnNc36uSuFuC7pgwFhyMLRgn8rfMS7oNVYuTsZVWr3Db",
  "key8": "3GGyt2phd4dgmAMbbhtFYS7oGPzsB6hM9ZpBjaQDJZkTRYun7YrPT8XQPMDEeerdxpqVBicwHmxN4ZkT9bFtBJa8",
  "key9": "3XW87TnWzA4ooBfVvTGiTaZf73aqAtv8PrQPFxU5timKU9k166d9uMA3ZPZ4xdhkhv7GN2mpnUbwuMqiJ3TVV93R",
  "key10": "3zEmzGZWMGBVTaYrF3vgjX9ZbHTwjz22ZGFt68yAYXtU9kzV693hQMsz5H27NqWB7SaC8PXDuDhGBdR6ZqW4XuBP",
  "key11": "27vcAahSzpNhhWSdaFn1fepU8s1pp5oaZGAyFdrcMtz6nACQY2dkxtNZFoWSyMKpmt3NjokRP9v4PSe1Ljd3EZug",
  "key12": "4v9yQwiN9TuMEi7qumxQudDE8ozowoixt425ZofS9ifXXMBJrpRasi3rKr8fBecdKkfoh4Drr8b7gd3WwpacXtNw",
  "key13": "3jmtRwviHyxxwy54DyycU8pVeeeYaAR7S54CbHCjEaAX9hosERRXHPnExKeDqCJAHp9DoWhX29KECy99WeDp2FHR",
  "key14": "21BeEJJSPdyZZWpwb8dumszZUYPqMBpBU6yBUAcTDpAwLjZygEXBbxsjvmQQdaLKzbyAArsyqZPZVRU3PRQxwN9J",
  "key15": "2VBfDHZj3tUWSFzu4Z9RsqbxePNeKQskYLgrhykhMVvRU7jbztMRKiCnNAihuSbee7oLyNTN1TuLpsQJQYX57rY1",
  "key16": "HscfXxSEVVwMEiJMmuBdi4UMV2xMP5aKp4kMFELHcNA1MGJXd81wdytbyozXobMkn8hkoUwqVLEPMFLgZiBAuta",
  "key17": "2xvQchqNcB6yj7yRZH5rWzZJyDdChBmwpGhLXxiVsErb6muRpVD4B9zuini7YVxQMbu359oxKGp4rMmsWg2739fP",
  "key18": "2qtudPVWfJdoriQcgf1XYSy3rpGHWHKawcZiAqFDjwnQvYyBsNXz4W9v11WgfqjSoGDNGXaZNuSEwaguxwX2eH8L",
  "key19": "2gW7rwRRuJGXXHBZT3cYma6XMbwfjf5kPBnHEbQ6r9QT8ivZj4pVPYmjz9WneSEwZurcx58DxERZK7vfGvQu1W74",
  "key20": "isYxgz9Rj9MvNmzm8E86rv7H6DGB3P62wSRLgwJsD5fAGZUWCrLcnsHfCXksuRWeVWU7bSDuHZAzF8zF86iRj2F",
  "key21": "265TqvkiXEYLu7fBGtf32fip6kFhfBVKM7Ed4yzFiirEPVSje3JYvRaE1GLLStaRAXMZwV8WeDcftH4gNfJMBv1A",
  "key22": "dqKosuqNa54Mn7vkUvtSheUV6uv9BCyJQbqrJD2nPSgu1jsSXGKpkirLwnCju4iYWzci1ppWtSxzmYMiG6NsMGF",
  "key23": "tQv5DAgtQJbvhmikvn8LMrijzquQPurbuM1NjNXvQrj4qtjzcppQn5WBBEMbETvJWVoiuKJXe9PFVEXGjjJsQ6T",
  "key24": "5iFV3D4kddbQd7zmmFSgq9ymGwXPgQDE1W1ji4AhTwNSuVbSdU4FE5Ak6QA8f33Yj3PwkxwhwwzbYPdiNnWMZbuL",
  "key25": "4ysN3Cpr54hVd4qNRAJXZxeW2qHmb3kKYX3zbuc2884gVCugs9QUv1vQqKQbPyc5Bio68A8T5qhgiDu7ApzBUJ5n",
  "key26": "SXTggnsRtiubedxG1zZ4cxN3WNxcr1qG8jX1DnLwbLZFyMKGff3Kg6XRBH5m9TDvKPQ9zWs7oGPjiYBZL9DyJZN",
  "key27": "4MKkoPX1K6jBo9Foqczp2cDhHyaNy4LAnsNumb8kYiwMrjXS7FpTchCqL8PXD5EY9vBssoPxWnNpAh7JgtY94hZ6",
  "key28": "4s14W9ZuAi1EF1LDa91yxmaRnLGpjfLsdzyuf8yuULLnc6bLkSD9n7nd4ZfdAUKA6vuM7RFbVwubjPXMAV2uWC6P",
  "key29": "5FS9XPqoU29yPx7oTHHjytG4uP3eKP3gFcW6pcPWsWa8VwXfKHd9qvr7E3RnZBK4FuWUpci7jWyx9PMNq76fMPZW",
  "key30": "62UyvyWtvc2HhkuPYkm27R8EeCZSZtFZLV2PRyMuuiq88tzG434G8JReEE2RpPrJUsDEnJ2t8GADE7HySRn45u68",
  "key31": "2EA3bmtW1JJCs24wq8Rpwn3zcn3gLqQXJxq4pWzWBk9Frp4pKJeW3zzwqoebdXyQtRFpS1ur4Yq4wsaWGAmpR6Mw",
  "key32": "tqgXNdZRq8MxyTZnjhELTUn9Tt4Z8eGBwEPBNhcQ2xJVGmyhZyjrXjvhTsrGeaGFwQnswx6ranCMWv8oYBLVxsu",
  "key33": "4VDQafrrQJ7odEhCNsLYBqhmfB8AQwTkm3QjGhM3STSAM1sh34nPymEHzn84MznZvGsfzUiAXSXvdnLvAFkogBHi"
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
