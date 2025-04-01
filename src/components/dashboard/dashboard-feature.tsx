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
    "VpgpUjBSQRnT9Je5FaUHEPTDBWfGL5ukdkUyeDoge4MeDx2yF6Ra7oCZ627Rps1M1Bj33QCvs1dBfExwqdj1xzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsW57GWWm34J9ByYZZmgsxzT7HseFof6z9tPgoLBuiPY55M3vSNgcvHLMqAJRZmZHoEKpnFRKAKB75PmhVKqW3m",
  "key1": "64MQdPo1wDpQyzVc55yjARzj77h4THkjH4vMBhAS5v6jqdp1vSvgyi7PLCr6xd4kS66aL8AmiZriYkw5vdxXLgkk",
  "key2": "3XqCX3ARrkB9LTga8ZcodU3XxwYRBMZYvvaUhUYJvZky68DcsQW6ZokgCKjCrQxyasafc6XB5GHfjEj78V1BfKDA",
  "key3": "3Lr1D7YEyHJkUmNAJocA3o5e1i68wPJqfVEUi6bqqrAyNqZiBzcpxWChtZ36wXjDUMKWmULMyqLNMBj4oaJ84XJe",
  "key4": "d3MoMScuqpQvV1Zp8jbnGf7W1MJsMooLPVVgXF7F2BdE7CbRzRGUKQz4V2BtP3zAW4ketjugFELaCLrAqmRy4rz",
  "key5": "5gpKgTGXAqVMPMTDMZNzqQAxH7zKX3Lfaitv5jhXaTYcWiRWEShYBUXNbeciq6k6vCKZ1aaQmw5f9aiUTtLzzVG2",
  "key6": "5TQT9srDpC2AcoLHKJ5G3xb4HgA1swUdCx6qyN9GriMe2NAJ28zmgMJvFQNygSqJmKbK9WzkQzuAsweLwEYph5MG",
  "key7": "5dNFt7k9YXtQU2TQxevYm6uUzioce8SGUzZx6JU2aeHozaViaRZnuXgRQqj6oKswrM8tNSv9Kn4Wg84biriQrZRv",
  "key8": "5sUQawgN9J5tA6F1xDK2CRpRGCEz8yFxccqek1Us3yLUBx2KZPqT35pTeuoNgi1scZ39KDLnUuA1AKY3Z76A5Q3v",
  "key9": "HWTPWXGQ4jpdoDrck1JCUf8fPcpByyNMPtMDqcKpvL9DymAsfjER5anMoDNJF7ZwhgQYf7d4AhqzPVnEy6ubEqt",
  "key10": "45GvM9VVWSwPRwqWsnStX5JPPZ9mw3LhMB4EZZxcawoY2kURp8Sm9pfYUPxcLGkaTrcAJxp3aB8mMjYy7NUP3GV7",
  "key11": "64esCAUuBV96gNjjvzyddvnFtizN2pYNuDadf2W1RHCwf6gafk5gXKC4znV9YDvGeHNd1YeMrwx1KeREAidzTYJq",
  "key12": "2ZQXp2vnmcj4UxukkGCb6MQHxxhmujsr7iLfKtZZVGTvo7y32ykivQUnKoBLudM4KVKdyQnoovGq1v5actYztBKp",
  "key13": "292wzLXubdgUKpcrAxUTyfZiwSRcMp2b1X2N8bu8Zx6f9KEJNEonJMN1w7z5dU94kTxEx8wdTE9VKKxWuSoSVUuK",
  "key14": "5YRAp3d6pS3hvS3vG22FMQwARLYdzFoaKZbwG1XDV5WPZu1D9cp44STUiHwbnZXwQN5ZaaSz4AuC5CkKLK2WLuoq",
  "key15": "4nDEfFMUa2gBhCskbavGTBYMtyzqcfV9xLVCSRsTd2uYMpH53PavwdGCKxczx5vx72UueKLxouohaz8uu7vqhBHk",
  "key16": "dwRhZEjaPwhTHcdZR85TAnXqunHSZ62RBRedcwC883PJ7aF6akoCs4o9fRF1p2n4u3KALNjbd6t8UPsKTzMRckz",
  "key17": "2eRuw2Gj1iVc962zCc4KBPhbYFuH4iJ4ehcgvH7VCJLXdZhr9A6Y7KVPvzSBb2VmErWJiio5jGjQo6YbBvtZTmtQ",
  "key18": "51AFs9CWUHdSJp7D4k8PR3Xdz2WySUVcHyFUg8JhgCPz8nNk4aPJqsF6W25kbaEAxeMd62Ferfxi3seao9tKD6SJ",
  "key19": "2FdDJDeVL9wvYixkb8DtZbTTxt3No1GQR5Q8oZ5v66u21hDGZVh7qaeDhs7fKnKqs2q7oUMhweY5ew2SUSEU51CF",
  "key20": "4bSgKAb7RiDnHKiMuWraBvh4cLjyPWzjyLjS9A52bNRBEqjDR4rqD8kBZvFu4Bb3JRPqG4nGEmFf2LDQ3Fe9VU9c",
  "key21": "5DAe2RD41wyToouauEZQyLRVw84UMi9Rtt3jqmqRXkBB4hw9xbkrcNjXkEQdfGzzDA5ozZ59PUW9ye7gaaUegb3L",
  "key22": "34HQxsRa9u5gToMyargQtzpUNyiirNBby1YvGMS1QR9JLi6JsDSVvciZCh7fhxHyrqrqbAovhAA7tY2UXrivKQ4v",
  "key23": "2pBbX8aUisb5FxymoqJhgz9rVJAzdeSPNeiWvRqUy5omoVhCcExDiqvY5qgFC5Jt7wdJbiNpppERfqkD3qUjAnS3",
  "key24": "278iGGqiPL2RLC7E4UbT9ewfCoH6DkFFn46LZDr4Jga55siY2be2t79SfVbBXggKGaFShmgPzwquCFN965JD7ahi",
  "key25": "2egNoF2QwCrJRKWHd2LUzxTr5QSFX13eMuGYcZ4XoWXGGaXiffhpABhmQtWqp8LPLyxGPivADjLf4FouJGC6ZSj",
  "key26": "38S9RKCoRcyUsvDSy81hP8dSj3ug5KV9xTshscXhV49wRAcFMvP3dYH4XpmJRyYFvB33V2sTx7LpojTeAY1S6pME",
  "key27": "HmT62oHbm2bk92fYUq138aASV5sTPVVG5s6uuJ8xbzNPZvpmf4gFfSAGZENdmkNo5DedSX3zCmpBsQP8ZWHh4rf",
  "key28": "5H9BUZii1w6xH7EiinczVWp4NzHea98QtyXZSXzDUcrfiFS9FgVr9TM59KVnb2rg4Sx9CNT3Q4MzuYm6QoU9Arm2",
  "key29": "2pARUFpx6tDED7i2byuVBBHpWu1BTDR6jy4UD8QzPyXwLtqSjWJ2ZtZYTXukuhPLyLrTq4k3gYoN3GbJkCjY1trN",
  "key30": "4ALPoxTL24ujuMoQFa8wQyLPbWoLtRFDGJCsf9MARxZ8wYXGxqCLTLBc6CrReNtuaGMo8EhqMvR5sFx47sPTmmmS",
  "key31": "2hZ9HpUS3iVBkvDvPSxLMK7WoumcXciL4AnLtd5HWSWnQQ3ZQXasshVJRbiuovcybvo1Rkjhyye1255LuQwrFFot",
  "key32": "39UvP9mMQUP75QRGuCV7qDNwty6PhmLEFKHqsobBeLZhXzx2gF4NLZtw6tmm6LZ1RJrEjUp5QSRZVAvnodRj7qkz",
  "key33": "4VWwGmfbrcCjfYkDy6VYa59SXosWTD9ok2NgWsfusF9QCqaXQNULYzdXJdqXFc4C6Q92ZBhLiwiD5AoDg6Cd1VCj",
  "key34": "4ibYx9z2TDwo1iupSpCT5CFoRDyPtGp1da9j9aN6CWxx1GVUgb7ME8PjjGKM11eQHzqdUiKzTydFwPWNhzryxNs6",
  "key35": "285jSt98FV6XH8kKb4AVLkfsGbNThp7fpBBCi2FyBvyHWgL8rUto8JwGjVQMKNAfNKXrudvueRx17tL8eJHUdHL8",
  "key36": "5vghSYin46i2WanmP7EZiLUdPiRkzC8VeKf2ZCBJ7YuqLT6UG6DNtNLdtyH2HxLAVthYb2eQsqnLw5mHeUzZMUV",
  "key37": "uZfifoA7SkjmFJ4wAt23tRYeWF2akiHdwUP9yzPK97GicJ9egQJEP6XTV2CyZZEPdKP7xYX1CFXRDkLnxvNn2n5",
  "key38": "2JHbWtqD3JGCYLMDWboySWWvAUREHhDDubJMjpw7mwy6pcAWx2QUNUdAxxDN3hJwp8GyJgXXWuHM4cA52romQ2os",
  "key39": "3D1Yn967jHqyo1qeNACfZ7DMXouaGDM19SitS8MJ1cBKTLxZimL6uCaTEgc4LkLFo7Su1jqYAdzjq8Y5o9iTdzrN",
  "key40": "2WA51KNchgUCf2t9ybiMWVvMW7hGhtgWRmyvsHdfamuBbZBtqoquEjYehpXDF6QkT5u5BYSgubVngfWjeHTKDBHu",
  "key41": "5aRsznchZfGZYd1xu36s3inrrLjXstVtYnXZcP3Bqb1yPGJMxwZcJCZAsxAnWxcGsYUEJn6pFDuSj7Mt3xFZzvXH",
  "key42": "4d8J8tPkibcoGJ9yjpKrhq7mbcM4sogSWWvhs2RM22gMyUE4iKd44riyyJPTsnD1954SGwEcWknKwG5ZCY2tRT5w",
  "key43": "5xx9H5aNgaohF9iHm7W8XCiT4yqPJt3wbdZL9DNbebcUjnDHs4RatZ5GPH6QbxsFiLiS1Hvcgwkkj6p8bwY9q2e5"
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
