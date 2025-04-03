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
    "5jMYZe8ew2PTQQGTiXRWCFLC5grTSEQkf5dBgP3CGVzav2GvgEf3FknKNVSFvh3PQq24GCifkSRWTTGKx7u7yhh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UvYJBouroxCCa5xhUZ8R6fudEesoo8Fk2ByPyoHmNyP1XpiCwdcR4UNSfGqPGd7KghpqsbETW2xGddSJEfkjWwf",
  "key1": "kxq5uRD7YLFYpUsEYxyMpFZeJ1RXfAZm5vq2tiTKUUTvcRYT7W6TFFhvsENGT4TL1beMza4B7DeCJhLTB3g1Ej9",
  "key2": "2HaYGkkc6nCja7ZN4WUSGfcqbmDr66NaXZmz8Fefx7pCkfLnJYWkCACua9YaqLzymbVn6QMN7jpgv6WgWjNH6FEG",
  "key3": "q7B5szrdEJDPE8Ydnq427o8ExoZb2J35UZVFsWjCiXoCDQSLyL1zw59wzznKSCEVwumjsnboqDh6efJ7KwkgHsg",
  "key4": "55sNxGrVcAPEa23rHmtH9g9foSf45pXRWQSh93uTeJwxwboWHWJSHLNopeV6wU4C7SSiSk5jCTXuZxuvLRuatTUc",
  "key5": "4jTvrefoEg12XXY9FWHMYeVkfSyyyGgkswnppj9xqvW3RGLwfo8Np6HNj2r6rvfhjzbyocozEjN86fAH2Wbr6VGy",
  "key6": "49RcfrnEx1bXMSfQP3ovBEVQ4mT6ieQFoEa6DnDjyKGWB6fo7eSoSZ7L5Tep6GLHQx9s6Y4CTs126Tnx4ZpvYcuj",
  "key7": "ykFdZMziSs2jtWPrECt4Gs5kzCZmUMwTd4UucD7AzwSv9B195JpQVghNPthicqBY9Kju9pRdJr4jRroFQqFuGqW",
  "key8": "3GBNztkFa2X67FkFS4L72HrrEMABmxa1KxsvddLLXFUM2gZCfsgQnmxgNVKWppru8KBq8Jqes2Fc3SfQtB733gxr",
  "key9": "2kp25ZZe4hCVWgWPEyP7eM89eCYGMKPtHbqrxmjdGLqG8yN3KbH5LYwjQzki7EZ2WGTJiNHM8xfjf915puMaecaY",
  "key10": "33GoHPmuac57Xmz4tb9jwGXWwqU77L1SttAJw5nTwVCiY9Nj7DzBvvmvMNvKzgHj9jmD6wshbv35QxUcoMrsrWmx",
  "key11": "DA1YptV5F7g6RYyGz6XnctTPnAwNU6KkoZhh41UcnCBCmhzgKMS3cZJAPwr9r7wryRFQxsEQ7HJyKaK8rnotTXz",
  "key12": "2wq6SsrsckxtLzLFhtULNe2ANSYAWbDUDnUoc5eee58Q6cY3sFfPUr4jorshZnJhgWJBZmSBwmNs98jH5gM5TFqt",
  "key13": "23Z3QyocbyffL6FJ5D8ZCGvF1QdpDE95jiDzXcdLrCQrVYK7Urqy8WLiG82de7fBkb3r6bX8o4C5pXZjXxfDJEkm",
  "key14": "3sEC9vNujHHMicCa1WPJY9tyFZeHQZL7t21yJcXqxwpdTqvoqtRV3Pkddyms4TvivSRNQCU9FeTRxxzn7yQkbch7",
  "key15": "mN9vgfuLgWYRbdviKDYDAYUhpQsfeBpv4iFNXAmP1KT2QNDGUQuHhNenewXLf1YTXm2dNzmi4CCpQSmvrma3CqJ",
  "key16": "5KKodyAR6bnn2xE18SXVjZ9N3KDRcBCzDj8U2vS2kPxH7zJtzxKT6uwrvUFUU927evoywqWgLPkWhQwxKZ1UGKte",
  "key17": "oobxNy52vFTCYbgZk2PEvXfHKku48nZiqBGNqQ3RZZm5GpdnY7Sdpwx5CtyLc4mis6Pa8VwdeAvEHHRoo7hvRGD",
  "key18": "5jNYu9Vs3uHTMiAFhJozDmLSN867U7XEJig5jHPQPVMfQPZNGUoCAHqjQmVMm52YNNVEp6bbyeqFVrb3pid1FWMv",
  "key19": "2jyX677uQMfrmGZqvx2vVKfphvK8NicfPoxzhaj16aMTd6oTyrEd9mQ7AwVaRa8PmoZ9jSzwfVE3yedGXXL8QQ4L",
  "key20": "4ZNmWoVCNLr3V6Sv9fXtef7HqXT49mQZj7QZ2PQwPC2ajjedATv6WveD6zq9zLqLiGwuvLAPM2D3vQrinrhjQUVd",
  "key21": "3LQcLNn4eHCakY3MBkaCgXSCDnVTReoQ4JPNf9h2a8vZm4m3k7FtFmifGaUh85gzjCvVNoGQprEzFJLBSLZXWrSg",
  "key22": "5a3aSZoNmwBdqpgELBFpzAFhQgmkXM78pUFuKxE8ngvy9VbVAmcs9qo7szPeSdYc1FVLBZcRZy9se3iKPw9STSt9",
  "key23": "3UqV21T9Jxm9sSpTHgoZ2FqVpo5gPcCnYojgFmqcXeP5b9Zjxdzy7UoWDv6gGP9q3NDLhMGLo8HYJMggqy6GYuon",
  "key24": "2XSRD2qFjJNxVPbwJRKpX4sUqfTrHT7q7YxsMK3qg6Y8ZmZsBsv8QnuDpAUc141FhNvEmjYYKZxKTUjw71cAGVrt",
  "key25": "3NbxbWzcCj8ia3YXLAPBuegbFBR72gMEi3sPuCnC589qZRPUuGWoR6mB5vMDcKwnPHTQU7s6PT33ZnJm91o2V6Rd",
  "key26": "3ghZLXJSJa2iiuZz4iiaT7PNAeup1sMmoRmFLxMdDHDSh1LTwwKW1GTgBqkBdv7pNrWS4J5HRKd5sMcLQyFCqryy",
  "key27": "589CqYv9C1wbHuqUBJXjTGqAVpouXCkbJN9omK5mLGvrm3UWV4qwHfHqa7x9ierdWt9kwcov9SQs29c7kfVGfAn3",
  "key28": "3ZbhbC22YKSLrDZBTixuYFvWB6XxDGxwcox5ojAMbKAkhzHJBUsxjby5nCnJtjkvixT9PjfFy9JfcjFSXQoBLeY1",
  "key29": "47GETCYRT3inUoQNhoekQXTDidmQaW7S1jQvjJb32ncFeumEvaxrMCXnwZCZYD5YwVcWqumdHGHRyPPAdvTQei1n",
  "key30": "agyH5hV7oj4TbDVa9GfcaEXaD79R8BkqtKGhVgRykNCx1GS1CbMLkWSRUvnYziM8XagzHmszWkUnaTDENh5zESK",
  "key31": "4VoNFGpMfWDr7vbP4nf7dxQF4xYD46F7dbv64DQ9UVUKqciGvmbWY9z7TfwXj56jD9vT561u4XdfNXTQwzMAUZmd",
  "key32": "5HtxjzBtSyg79cdQrJfDd7RgFVjRsVGEoLT8BnkbXX9Fo5RLXiLWLbrRHT666sFUpE1KnDcNRb2xsBhR1wHDxJQe",
  "key33": "2LnEC3P7mhW57NW2Y97harMNgRBkbL9G8SVs87GFGhMMm61snPBP6TWXMaMsQAQZWdRS5C8MB31PwRRutQ2zsaVT",
  "key34": "2sNHiQZsD1H3Ssb4ii1MVBMhYcn9kVuyyCekdRrKoTqBXGtfJPnLunst7tTRqCygUTxfZowzvhuN24mcAjL1hxgY",
  "key35": "3xQ1vs43wFwKMPUgBhWKJhVbdKGCd6G1Wu18PAABGph84LpQCxAZM3diCYxeuWzuXbHgRYEGYCPu2cUUK7NwwjxU"
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
