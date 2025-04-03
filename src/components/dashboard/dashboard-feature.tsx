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
    "38fmaLF9DjVD9BMy3AxngjnjA3cQNaHsRt2G98XY7kJW5hXbX1PhpqNDmofLC1sJAihGQN9yqVN1bxbhhMxZmvBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RscGQrBiAPLR2MP7nnaqQbSBQcFEi2M4pFaL5zExmR5ze612AgUG1hK2Dkhqn8K2zy4LicQGtocU2jePWK6Qcna",
  "key1": "havfRbVnTemJVUwjbN6mZWCQLN3PVeLSoB4rK1tk5jKwgdTMF7XzDqNtN3Zw7KmsuZEsf7NbcijcBSiw4XJt4sA",
  "key2": "41EG153viMwXTxagEugh749JNHzNFdXZwrojxbZuYnURFHYeyUw24mKhzYyTDLehRew412qr2T7xdo7LQCB9eNBi",
  "key3": "2AHRnuaz1ka4MqRN8qFBEjsv7Pq6uuTYZmBSrYdFwsdVNwvWRgsvamankzWsCAF6Q1inWE8EYrTzEC9eB6jBJD3g",
  "key4": "5e31QVkizxvSpVjQY9L8qbJ158KfLABHdJj97nswFR3y6aPSJkJGqf134BAdLahGaDfQ3g2mTL4RfFoZfcu8kdWM",
  "key5": "3qjzVDJu49UbGeS37dwpMDkT29tqVcFaE5ukpt8Piq4krh1QV8YPJTUL4pEbQjizE4XFwUJaFiFG229c1X3pvf7y",
  "key6": "9FmnjZswGcEht9HqSR2ZAMsjkRwGAunpc6DLFz4DVr2WVdi6Ru2HhXmAAPzjiEE733MP9CBTVJjfejpXiQoW7GT",
  "key7": "4QX64R3mQxTWyP5DY2nnScBf1u6ABNVkFPWx6kX7uGfUSZVnDmABrUmUJxa7k6jxf4JCjHYuFWvPNNd9hRMYY27C",
  "key8": "67ktJ1emL19Df54RSprTg6mMQW8oc1heiEGMLBeL2scJvfeYyRJqfDyGvZTzyU7Auzub6UbgyWhug7MZb8212Xv3",
  "key9": "2Qfp2vjfrFwfufu5tU6c6KXjw5iomyhLD4pQeN2iyPjNPTUXxJvszEhjWk9uX9jCN45v1JTKf8bGxVuySbXi7xkJ",
  "key10": "2EBmdupA1AR4G6F3d6LEKKCD2une5U9m1AxnJb3SZK5pfFGuAsNEWcqRg7uChWZrsVtuf6RmEjpyrxUStK3Y2P4o",
  "key11": "414ycU9kbcwdTcgqHbjCXdB9dVCR3BsuN1WQ7Tm1wSEkHZxCvzAabVPntdszEK8Wo3VLMauYRbMU93QgWsWWpcXZ",
  "key12": "RVDPACqnbYJZ8zcZZCZSW5PGo7LtRT57dxxrtnK4DZ5swPZbAfXW3CjFm8VY2LSvcNpiX1wLRo2LyVbKh7ZLGok",
  "key13": "2BQmxKk1GnhRqJ8ir1bcNVyPHQ3pgBNuU2Z4oNsPgqnNUW7cC6R58NU4sxFSTLgAunaV7f7i2y3j2rHke9Q4jxtk",
  "key14": "4csbLj8AURvpPjyLEuMv36wY4T1XZjDznaVxKspb6qKdjUf1cLjKwzvtUYdmyK1qEkgq56kYUsyMLBS1TbnXNwUq",
  "key15": "2HoeC8cQnBTuBmT3XCg9cpRNX39Yh8UDaNwMnNwpEVUqKECgFW1uknKJwczWrSndx4HqUXNbt1z46MgYzKYHZj8G",
  "key16": "2zTqwxJ4TxNA6Nvaj2w8nL2V7DemS8gibNQsY9R8uQ6DmFZwYeQ11S9sPShtiHELgURxnNWHcWABiavBgLUS2ey2",
  "key17": "5XvGWsDuBpBMWAsxYFRECgX7S8iTAAP3Cd7w7ScBJJomGbqKaPNoBwG2DP15kG4mS65iAkEkhi4QCh9w9VVc4TEY",
  "key18": "3mKFHpzMPPQaodXB9qL88HxsKM2pqHPNb4eXr1ec9XrYVWieY38EasHtyafFiTdYdHDx2np6XunRDdUgWXtn8mgw",
  "key19": "3y91LJDJ5vt9H8Lh3k8273txHpUYcBnnkbRr2W85Jpn1nw4s3HLSsiS7LH6pnbXDfdn7CneRSBfb8Ar7DvfpcddQ",
  "key20": "3tFJVx8DtDzJBmFhJwtsqMnu113ZtijX7T4E1Zi78YZJNc8Rih48MSz7xhTBMqqstR1M1zktGLFfLKYpaWEwCdYc",
  "key21": "zeHYsTebozoKAxRv8sxEDR9zqiH69Pxj2KNknEnCu5qWDE2cN1Ftr1yfgvddFUB4u87YWeyeRfoSEttADMbpiNr",
  "key22": "3LJZuXZRaqRSxwjS7jyxK2kbs3ZQrzSg4XKLVHGsdUHdFr86mXxcoYjFUdFE6Fc9gUQ12PrmtxrNXusjGNY7Gfme",
  "key23": "2MEKiHF5totEWCcF9HtvWwDw6rPnGpNZL5L7JRz4yDnPhAUqpxcqcBwUddtNU4uLwRZSZmJtbcqydkmRfsCpD87V",
  "key24": "2FzgFAffAHHjdWxhtuu7b2SScpMQgP42YhBfzWzg53EVoMk3EdckSBRPYnGNHRNS9TjJsKsYzejeUQ5tv5u1Kpe3"
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
