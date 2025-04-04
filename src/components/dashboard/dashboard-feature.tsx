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
    "2wy92pXnLLfWNeux1X53SkiKMtUagqCuqNWSsF1pRYFdBMDiLVVWw2skqvXndRf4J7aTHMvHrg1FqqeSWhw7U2qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpn4UAnVoyGvrud6cVtXtFZXQYCct3QeNUzchgKEkeCX8tKeawesF6wmVuKP5toK3FCerayprTWKTxGZafZsg18",
  "key1": "2DFFoPe6Gv672XLU7mpQfhVQS25UAnFaLcMsbRpmWH3LbnyfpSXCtXRAnVjkjj3VgCTJAkV8vdGHCthTUEH3y5qy",
  "key2": "2HSpEEQUbEJHJmkJVGzFHYVMHYzSY2d8tJuwNu1h67tado4MbXp8pSM5aFJCJVeU5fqeYQgEfsqZY6DYW5vyBhYk",
  "key3": "2Km1zZd94ZvBuXfPz9qjQCEPMxXzMXyREnRH1qXHAfCUuZ4v7A7ZpjQkz1yPQeUMTPeXQc8aRQHB9fBGsbCLsaiR",
  "key4": "5LAt1nkxZNkFYDZYrHB368DW1MHHsrUTLcopGv72gzinJUn86sALomaRb6vEi56fgfgbo6Kau2widoKeVh2yYt6r",
  "key5": "3rL34DNVUZ6HgiUQ1fP7pJkaKKqTCMM4SayTh5k96xpSa6USJ4ZbZNKgfM5QP5eySzaLdhbf2uTtPaQzix3QFiLG",
  "key6": "4gXQCJ3UQvt2sajusbxR8F8TUNnYy6bHgMinXEM9o7tp371pbEDfut4zN1s3o2wVLR4Pjx3T9dcQtYEpuYDFJhsp",
  "key7": "46cySpWtNTqZDNBpuYMnQCZUEiQ44bx8qpdzydHqdZ2gGw8o4JLMN5ZxUoZrY4hzdxvZLt4SRZUeKWGkDDEU5ETh",
  "key8": "3Pkat8zJd2R8XSK3xt7UmigdaGCdG4WKzeopGbEgbJtCBgcmhgWfvvFD4iekU3hEnLtmUTWcABtvYftGi4PtcPC5",
  "key9": "3pBHbCK6vGw7ZxLWACiawtLtXXBL2zJ5cxpicAzcGRMJ9QCT6iZkHe86GXbuLbwAcAAvcwsGA68S4QPUzP8gCehR",
  "key10": "4RKnAJ3jBFEc3tDAtYW5QSMjYeeiGJ92fhDUQd45kCVdGsG2TxP5g6asgM3m2BAkt3RwYeaZsxu4cruQHz7mAcYB",
  "key11": "4a4SAfCZ9S4R4gR6KDGcGgCfPwSRa166Qqhiyze2sEtH3RTZ6nCswakjtUxotUfktVJv2b7zS6se1t7p6gFyhse2",
  "key12": "63ubB5shv9cs5o2tn8h8ZFLv7BHMBBRWbr9UUHTPeYYZRWPeBDShbFY24LWyndnYRDDaDBEckWU1afqGkwfpaCnG",
  "key13": "8yX9YwSmX8yzmdSwwTu2swMNnSckgoyrduZB4R95WJvWgitbFgaDMwMQvPB3XZ3k2YtwN34AWzB7y1e3ituVn5c",
  "key14": "27i3QixmKopdma8A2ZRDradDBuMZmddHFQSvEQEi4ucH6HWNKUfTaT9357u6diqptpR4SkE5rDQy48H7Py2SnVr5",
  "key15": "yDxUpf3Nz8AjwAagNKc3nkazZfo4psfd8QikYvhyGZk5JrhR5eUTtf393zsWqiudzXm4FoW94fXfxZZb8xycmrY",
  "key16": "3NDyXxDucjfzohZk4GchQ2nzk8UuF7rkkHdxkQHtwr7uus3dJYVRDAMXfdugXTtu68FVip11j6LHYrJmexPxPA7g",
  "key17": "4efrGniPGr3EUmoieKiAHJSyThM8EBH3PUHkHJ4AE4idDWUsz1UBJfx59cvBWVZLbr7zAW892M7ynLVD3Veh88L2",
  "key18": "3dd75DLEZKacjBLjkYG5ThKMYUJVnANRzLHgcebg78ptN6A8TQZjmWys228xKCiBkNSbHXaPZkAp3BvnVkcEc2vd",
  "key19": "3osqGVDjWLfyhQ1XzxE88rHn5ui9nVgNiRxf7L2HLg1k6fGssPzeWu9VBfGH2i9xhexvuAQnyHSSA243KE4tLJcJ",
  "key20": "5udK1iShFjxzb5m3TBrvPuus9b5tvdzcygWfSUuTxCkN9fEYUMBJEVayY2PZKMXwTxtXK6968AutsfAdQTokn4Z5",
  "key21": "3WgC4JFNZrRDQpJMBtu3LjytcJdfphEmQosW9iKcXFkDWLCNucZxUMVuCrz5ii9ufeZ8X7ZfmncK916qQ1tZFNW2",
  "key22": "3b4LqdGm1BtpkWKtWUoeXbvLXVNwixdtAqKVQPZjRUHgawwFfMzFfzAWmQ6hv5Qv7N9rzpiWJhjTptUYdBzeRU3m",
  "key23": "3hCbt7s5uCb4rQXDoepZ684yhJEDgbrz5HmyyLRmfzsHCvAjJe2wMxYoKipNgUaLqkfesGUoELx8yFnLr455A2Su",
  "key24": "2DQ6jZWEnx2YWJNt5fWxyx7B7kgf3Lo2JwjWHpKwjiE6SWhjBUSrth1t6eU7eyRLso2riaoQ7TDtMwtyKdvVUDAw",
  "key25": "57veBan3Gdp262EPzMndGgfrxSxpfbgNkNHSCVBiTETp2PNHL8fBshBj2j6T14P2XGcGgsX3GvqcN9dqCJUZyCd5",
  "key26": "5wYijyE8dvBaVLH6Ui1Vtx1Q6CUEz5aKAhSALE3dERWhL3TdGQncn4nBy3UuWGeex3PzZ9ka3NvLxg7qpC5mg5Tr",
  "key27": "2o2ag1fgCKmk1m2vFwLJLA9877nnEszALXyvUeN7ujQuwijZm6Yhj96YrSHXBWK9mx2MYKTT6nMMutnmZLT8qJrT",
  "key28": "4mAZu9W3qKasucwjq4SNEzU3QUkEWoajY4F5XuSGwhoNieTk7KoRVkzSiwArWNtatWq3FVRymho9yRNkPGFFgr5v",
  "key29": "37RssN9KrgyreTZr3M5pQtNiAB1dqHssFUv5SUGa6LaJmcsEPDf4PU9Q9K5ALsChi3LJ6BicBu5pQ7gRjRNZnVJG",
  "key30": "3c1EJ8R91k6tS8TbiGc5oruZoNp1SYN4m4LsWMJsVkXfVYmCej62jTyb8SNrCYYH6BC42ZUoTp3w4s2u2WKmZqNq",
  "key31": "K64Ro6JymfXk1rzPDHrDgtN2R6U8rrbZT8P5M8YXUGWFcgUn2X7Yc1RiRBMFc7J4ohmYUNrVw1TfzNwkeHi7DsF",
  "key32": "2u87adKxnZ3uRVWkxnUF9Rf4yombSGEABvUmGmfvDspXjuYemAYkJWm8g6aUrkDaSZWTk5PtC1humiF3LHPnMRef",
  "key33": "6AMjVgTKGdowspsXZmjGdxbRyuuhFmKom8HfKM5fTd325EcMWdnZvZMWz6ZFYxe6kRX9tQDsE2yGD2WeVVfDHnE",
  "key34": "t55AkRVx1jQ8awfMpByT2VmBWJFbXV3RWhbgqC1RLwmgToLGsfUjXjiV9FpiW8wjQAgn8vEK2gpsZaAVT9kfWfx",
  "key35": "3BPopAZpanP7pTyimjSm6hobV66vfndQ78CabSntMiLXggB3uJj48KpAv3PTSSrN2BJBA17T1Jr4Yz1xeVB5EmUJ",
  "key36": "56y3Np2cn8d2xK623iUtt6Ax15byB4UV8Hybs3DUN6SMTzcz8ta6LKLWJwwZrtQP5pDJBhhYiaTKgTG661VZD8KY"
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
