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
    "3xqbwxmG75mQUEBd69CKDxkrfDEMvJN1c8t55hgisQ9t8xyuYGCbYh9HXhyUsP4ogSV1MCpoyWG6Sc5cuEMRxCuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243GD8txGM3rq1n8mBVbCwQgoRqejXMwqk5nD9To83oKW5x6A6P6NFecsjZ2d5WpxNzhAt2LBRrBLr2qpjvN1CjM",
  "key1": "4MM2AZPULb4ZgeM9K6HH9zcY2LbGkmWqDiTu4NKgLQ2ptm8qp4jHcasSU7a2rWFYyARWsNmde5fMBAxzEoEHDtCv",
  "key2": "2HxgM6sL55dCk63NAniR6rgdoP6sNZxXndX7BTMw5mXT6qeJKocDkZuwSZiDk5Ed2NBhwYNUdJjX39EuFoMGaATy",
  "key3": "52WUixB616WMqEDuvGbF64upqKEhT8ekSCbAPhRWZ7wUU8e2135VDzJ3gKGM2fjt8h8oVsxF4S3eMMQfmZqPCFh6",
  "key4": "5dkkRijM3Tqr8ebvSjoAbnFXdMFjsVwwfSQdXcT5piVLzH6NDjUKT5G99c4GyyYXiK4nN5ohRdxMpZ3qVCpTPsfB",
  "key5": "4bMcmgP3SCvBn2XqCjhM6DAM6FV8MivDckKLecTQz96CbnxwfWstffwMAJv2XEiaY3HvNcrbnMNviZYoAnxNqy9h",
  "key6": "2MqMRLqYUxN1tnwvKbBSq46So8FDCd4KLCVYognpsAxo5Jur3ecpXvCPDASJnNucKnPfkBK3cxdV9W4hCx8Ethcy",
  "key7": "5hJXDm7sZcM3C6kWTHtSyW131moQ46RrFVD5BxSn8u4ui9Au9swpsHnuZvTcnd8U5Lvg2s6ZpjRPNua6Ep2k8gRc",
  "key8": "2ar1XC9ZoPrwcxo9gKTpFxYhca8amqoW6F7vzN4arUq9fgHqo7fDxLqstxeiScXf4DY9GmB2XucuLS5FTtCybB5w",
  "key9": "4SwfYH6SbvqsdripAjHXN11q96nqUTqcJudgzB9M5TLd1AzJ4Zu3Aey1ftTCk7L6dKBStXCbCCLgdqv2PEXKLv7D",
  "key10": "5QDCFvweQuLqVSPGYiL9dQYgT6A7oJc5DB2jzAfT3oiEdva6R4JnCV8inK2RP1kGc3PsMyUDJqU5m8t4djWqHU7t",
  "key11": "Ue98JacVooJxpeb3Z6M9BSWwZaFNqKKJf9c25cMMNvUwFy3gWqJrkcAGURhZqiEbDG2hwrS1e8MPFjHAaoZKGgE",
  "key12": "4W8J669ZczaxwaA8Bscn7tHU51w7UgHtwJntFmzuuR6V9JbwiSB7bKvt9sD6zxF6t1rUhPiu7Jrr9KbEphyw9YSu",
  "key13": "5vYsntgkwMsC7W6wdczuZNXbKjvwKqecxYoFNMUpbHGHp5Px1gNSvEYdUvCsU9tjV6kVfMPPZwveEhECk4xa8jAo",
  "key14": "3YJVnpmxJxokuZgcBi4NQb5WxdLzHZepWVcweD8daLTURqchw5CYYjM1pFy5cEj6GDoG22Hhco22cF5buNWrAjnr",
  "key15": "65xDCtZvWPEusDBfGG8hmUqLfnafH46waeQzmuzJbKNPJHhjzo7CXpMB7mrVUjRNEJnhpMejsrYb1dzsQcgn9R2U",
  "key16": "35XB48N6FvHp4sRy5VzENb7KkwXFWs8UG2YfQzALT7EfjG7JLsso2G6Nss5j4JFJtxhtqrQaWaiQLTdCoMnq4c5R",
  "key17": "4HeBhfe9VTFvRP4F8UseXsrmntq221imgECeMF6oYTi3dcp2LDL5xeYDiD48xAKceKVdhKMBzArtyBpX5nGojAUs",
  "key18": "4hxjv1aTwqm2dD7rGa26Kh2yGPmNEeK8WvWMuz1XyzxhoKB456ySNJMzFfW3aewe2aAnkBwydvdAXcXWRyt3f2NB",
  "key19": "2B5Xv7e4C1bLC6ig7grA9CfgT8BSq2a3ek6dtZQ4go5UpsF5p2Vv12gfczfbuqcd11FpK9D8PPcjx4gMc1vz7hJd",
  "key20": "3SQHh8zGZ2CV6yWdpmNp6GVCXU5wGkQ13fCoox39qwFURRUPPuq3Y4tfCpsNgiYAYCe181cv2cgSVvj4L5YDgqFm",
  "key21": "3rwB18iR7m4471ehyUNMzMfTSMfTD77UCAQMA1Zw5JLm4Q1PczSybgBFXj51bUwh8VybQgpiWJz6eg71Mm7es3Do",
  "key22": "4MrMHrW5se4p5JD4VoNCbJ4Xrwd8ytP4kVF5tBbEWNcm2mzaCo4Q1GF6s9iZCtkgpshR6SsdTGScph2Qw8kTBWiN",
  "key23": "2wQk1dHXPuoaZQ7aLuFMZRKKTYvcG3YtyF7EjA5nDg97xs7Yz8uv8eadnPg83BYTGAMgVYGGzRY4ycY4b5fN29f1",
  "key24": "3Cfy8Nfrn7wXbR6y678LU843SvSMAPNbigFvePbW3daW7H28cD9QYqpHEf1DiuAB1vGt8e8K7v7zMego94p12Meo",
  "key25": "2tJ5hmq6KmPrvMcUBvuWccJySrTjsA2NvtGP5CPGM52ncAQvaQuwUZW7srRF8kzXnFFSzzXDLjrbQNrpUp3jdkrd",
  "key26": "RHR8Ke7LTJaz829pxYTsABqGuEWL54Vwzuyk5MMk5KDxuToikBNMX1CzBvYZkS8U4pnG15fFbHX4mTBpLqX7SnH",
  "key27": "V8ezaB74w3sVwf1wSkaRq7v8QBDvtpzDHmkUBTL1haKfrh8hp2n3aJTfaG1q8AvdG8z6z1Mm7VPR9SifPhSJEL7"
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
