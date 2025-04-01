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
    "38VnanQSmG5LYHekUTjKZGzWJUgSDV4Mz2vLSf7bRitwT8jdND9CAKSs7PGB9bYAjF5VhYGmonpdU6jivCvTowgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXdcbQ3fiu6Qq5CQn3MW3taayxcZAZKWEuTtGCxwexggnWDs9M3a6LbXaKARBysy6Bi1odCnnqJo12Q46cm6jDk",
  "key1": "44mQ71jfTHRfGySBbTMhrWGyYZLy28DhXCZjR7NLogYm1jTvSt8RzCHB3pc7osCrRjA1XTNCmrrLV7iGyodUb3zq",
  "key2": "5Ne1VvWZMiHxeChQ4VHn2M5JJueVRYv4XxLkRzxVehoW7szsVP8G5XE9spRtYJRNbGoHdDKvPdYAmpRvo8aRXLJc",
  "key3": "2GP8vCtTXiKpvYXZQobH4ELmBnUnWt1vikz2VACTnebwCrZA6WNRbSUsJcCCCLaTjBmyxRU9jUkhsvw8ffnytqPE",
  "key4": "AiCVQvJMLSH2STQQN11iS19FJYMTgqJFuwwzmr2od9pkJCZfGo228aTS17G2w2NVhFzE7PSJwer6zFcSjb7hhj2",
  "key5": "5QeNFASq2Wumy9Rgi6BUQ6Shg8ZEo4JXPbCLZJGR5Jjo81kF6Vy3uzKM7xiCjFRfLwWhSmTC6wi4pY7St54ncFqE",
  "key6": "sUkZ9DjacFGwBKAx9ZLFxgbd96Wzi56VWFkd22or2fWtqiiNQLsxWcr2RWanW7TFx9RQ6qjhScaBYZCLGWnmqzR",
  "key7": "15znmWAm49okG7cSiKcsDBXCw2g9hKzDbLrtZxyfTJRWp1Yyaroypt6i89dL5Yp8R21kbQhz4Ke4C9PZ1xhT9T3",
  "key8": "3bxP51bSoTM67bEunxUP1Srwx5DJh7NSzRwKZEAUUvwv77kG1k2afXqLwxG1hj9nKhWLVAKCjNdQHT7sbPykgXB7",
  "key9": "2ea9vzJfwqHMujVNfSxSaT5Y4vPK2duQKKdFbgPcsAgh7mVo5bjSTteBnS6hGn5kLRpjhcm1ViM3wxueY7JMpBCk",
  "key10": "5LzrzXiJC9xPQfQgRqtWyA1qLmRRSw2tV1QtqDAebYK1twk3qby7siQmgJiFS728TjURx29cyT4hsV7Fw7bvUXSY",
  "key11": "4Kjm9cn1u2ze6MGJW6zBFqDyNUgTKcAefU5NzKSLV78zPXHgsFHJPm5cY89dgzQBdqbqRK9BtpCGebEi4BDsFViG",
  "key12": "JQFUuxAYcnbfNWLKVss9JoTRXgbLWyz7Hx3aC64Bv2rhaZjovNsx5UywX9juA9mHVxzZithPdXiehrRtn7viapS",
  "key13": "4tcAHWqFt9Bz4uDJMARisES2nMErqt3HSTfHBm3qJx6amwTtCF6wQ97DuTcg27hvkemMvHndwJraLctLA8LT79F5",
  "key14": "4d7At5JWGH47hRKwrhnKs1jC24vcVQsBKSuavSYQVWdr78DybR35M6WSSTEDeR3ZrzTCi7XoRbDxJkDksNGefPon",
  "key15": "uF9hGCjsnaZxc1GKHurVo45ttc4N18CUUy513EM3zz7VGufYqqtbQyn64ddu5gWrRz3K1Xwb66E2SxZcnJ8k3i1",
  "key16": "3kiFSDTz12oSHbvR4xVD9t4qCHQJhrfrbSegnU4EJ7cFoCwj9JmXL2K24AFhYzHz4eqoQPRu6T9xfTr8DngNruWj",
  "key17": "5w1Xq6oj3rkBLbQyiNhkFpJgFUD2qm3ywoNK2aUqyWrzJf2uupyb2jN2qXzucETbdhdT5YUxJ5nogCQhffPceMbR",
  "key18": "5e5FNpx1umoqYCxX49fR1TMtxU2Z5Q75uqbLkTz3dfjYQBWJ4nmtPPMRynw64xQqFnU1r4Qb3E6EDk4LYVPtzX4A",
  "key19": "2j2uMHy66GVrvYyrx71tyenHtJKZqFtBajuzH3eZVfx4uP7DuyRD4wDZRHLbFbR3DqAthgXK5jtxH9pnyd7LeFj1",
  "key20": "4Z1fG9qGQBVrrDjMRaesM7zyzGfh8FHKMBvEY4L7rzqMdapsDF9kuvNNTkY7C5QQxxSLUid3PypoYPMEPqUfeZai",
  "key21": "2rLJTdJidfGTeBjzN6PYQZgKffjooPBoST1Lbm6T4xynXjZC6DsbzXjXDgySsvkRdZEebm58QYvWxdQE8idinhkD",
  "key22": "2sWW4P7C55843QGt8kq7PfvyqruT6ZiGg6TaFyFjV1c1SHtYUWjFAunk9pij7nvjokCysr9yJ4HbT1swqe2Ef6A5",
  "key23": "4S52yBTk4rXN8oquoKP8BF55Z6a2o5aCwYQCdcpHLw8bYnHDqh4RZ2YfPu6WBzBnWTqHbeok4B9JAj2yxoux3J58",
  "key24": "4qnWWb8kJFtfQr5x7UfB2VqXb75xzUS5mpcZz8VJSfjksgob7Su8ixMpf4QRkVjQmS5EZmBC7r3jpx4rFvcftuY1",
  "key25": "5e5Laj3dsqbGhRvC1UefkEDjQELwW13Wn4WGCbZWNe2vFfxuCLocXjuN7xnj8JDasZEfM1sYAgrkxwAHEuJwgrZs",
  "key26": "3dRtcSKQxLfgVXd5ECJqnis4nCuiVMsFpbw72TjdpyGZ3Vi5isF5ud8PuDS33Q77jB6keVcZd4jmZk1RMpBrk8e9",
  "key27": "3fsgX4u9pSGj7vSyfrJT6sF6nyx7y2XzUwGYvDCRzN4ha4ESVSAHGqsgbunqtU2p1WaL6RYnYoj6nEbjGJHzNcBg",
  "key28": "5tggJgSUraf3EHvi8tb3Dk8qzY1kst7ZyBP5VfmxXZ7ADT17fQdxep1XwJ1Wf8CZBPYoAGivs4rsRXgAtjCi6LiK",
  "key29": "1cGYdsiYEfCm4keVdgrvyNh9oTtrWzaLgvTdXHswsGJhJkWNJGoz6yEdDvhzyXt3Zp53FrHf57gnVVRqmm4KLXs",
  "key30": "2BqFghsFf7vTV6YPGvEjckJxg3CWvUYhHX4t9ZJ9ffj4VYJ6xywovzMjcxmULxQZHvR2REQ9YvrED3CEBfnw4WEK",
  "key31": "4g2MtwkTf38nkmBtH15noX38docSXKXEx9rg5q7rPA7NPWxVuWzHGQeueayrwrCbjgEWoppMxairwj4969M2UtaT",
  "key32": "4Wz72HtGqWWYJPLP4DNMufZ5ECJMJtkmChZoX97Pc6EdVi6yANKhVcgEyvdwrRwys6np46Lcs99PoGFqkG5conAD",
  "key33": "4SFryqZ41Yd32zJkKJMVjAnyQahy9uAbg7eCLt9PxqbUMwS3X8dC4PKMJ6g4gZmDCdt3wU66YzpiS4d7bBxxniab",
  "key34": "4NgHQK6geMAgnjAsMTYje6iJvXnqx9aF1nSy6JZ2zgkapsAo4pqMFdbDQdT8ge2doH3WFav6GSdkycme5p59NqgK",
  "key35": "21UKrYsBirQuxryRA5pVeVnNPdLCNXz5EWcq1UoBaAckK8LDmXs2c9iGucsbbWc5KogUdkiKbo9x4HA1qEbfXn5W",
  "key36": "5y249UHzFBNdNNoTGeB3FN9if59GVpdi6RnWmjsLEV49nodteBXjwBtRZV6LoBvSCDX3VCm7m2um1aVwjfZkktPd"
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
