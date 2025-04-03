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
    "45ckKAiaPxU3Djz9CzWYVnQhVHcY3GxneTdBYdXNWoVGb2NvaPTtEqtPii65DXLPB7WKFLA7qC749oQUCPqdw8zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vx1ZZyhKW9YeGLPSxBhfApNuBJhgpQW7o2tCaYMBWuo5MNCU2LPZA6hh83Kni8rdW4JmJEun2X79GHkibAhmZbY",
  "key1": "3TCJkhq6nKkgtdBudebPrb34EUBTBuhmM29nzR3rnReukYHmjLi4uhQo4nY4U7hoVLr53A6ssLzfEQ8RcDoC2Bg9",
  "key2": "41DAmHzQywZU3MFJQMJCuYmGxzjvqsLRfZhnUteNCCaSs1ptCt7hZSjtz54muYFw6SM2hLz5v5oncBxyS3vYD5RY",
  "key3": "5gUW28i7Bt4RqCtjRLd9q9SfWcSjMRsi1yB5DrNLtyvkQFnLkDq7Cg7Vp6B7fgbgeABqrQQiiZQfYmYhPr17Y3W6",
  "key4": "3Gex5QGk6pixq826b9gZCJhGTeGd7fF2STmgKTq7TrrZg9ctBhJXigBZmD2aPTEoNCENQ2Xx4weRSzccEFaz6HsD",
  "key5": "aFmtmtqWwiqabrtDrMzdSdSpyzcHwiADE2Vtf9e7nEDiNYFvmJkQd2f2ZWFuxNgMuLWh55fQ47hQofYYQzHcEZN",
  "key6": "5hnBCzDA3Kowqqu7UKV2jF22a9VhqkV8kcGqproEgEAiDKg4QU1ETxFqBTQVDtUmJ27AL6QeeCRTHbFHKBi1Dz52",
  "key7": "5CdD72v73U8HKsHUkhhKjnvAJiv8AMxoeumtrYjEiHQ1XSKovsG5Sa8zi3KArTUFFAeSAiqQrtRSWJVe6XQkyFx1",
  "key8": "5D2hNaMw7VTKmXoDgwEF69nXDhwvurCHyfrYf74wiUQ3hehHPN7cDBMcM4LSc43WjUwsEhHecQfn1EjR1z2uyDHN",
  "key9": "2tZT4qwr8qVh2mQM6hvziaggi74kUZppG6Rgsj7zxqVk4krs7Bw7HczQhQBYFrygDyTgDK7X4EqJ7PTqxChSo8Bb",
  "key10": "3VufsNzVqCHV9BySHA23252XEtAeotwJHxcft5SoiaNUk3DssZK7MPbfu8iWyQRoCETsbKzAE8JnQ3p9cWcYXtHB",
  "key11": "51wAZXnUCWADdQvM2K3e361GopbkHgZNBXAXCDNmLVL9t3T1aJ97ppy3jYTnqtSCiSjKyivVwpmkDDJHBRQTuhjB",
  "key12": "4aFnPXHVMmWdjnkqntC8QaJDWdmuF6eaiZgj2utQBgji6KG4rgsv14XW6De6LtRu2ycqs2kNoyFn8FLkphPWVkXD",
  "key13": "rmzxqCoanFsRxNizDjqvGBJhErv5GD1pRQ6rnP3w1KvfaPXBCGzFKMhmSkbrJwhsC3UkSTyGs6WR1KWiq5nXcNe",
  "key14": "4yvaibQbW1maohLp1d1NYHPZ6NKixpw1ZTQw9rQmh93nW7c9rB1kH7DdV2yNwMDGmsPYLjvKfTu3znS8n2eAk4P",
  "key15": "4f5ojPZXhX6XoZSE28SBs3dvLJhMT5Un1efHqN2ofodtWdLzpoJwiR8z3uutWgTvNDoKGXRz3RcNuPZ6Eb3TPAv3",
  "key16": "3FU3F8JZkceLVcuZy4sNzuPRvS1iZtmiXrc6bb5VDtrkfReToGFXZUiUbzMJdBWQ5SSMSe3Fq1wNq2kvax4dj6jV",
  "key17": "2PZ3LUxaw3PgdaeJuGxGQdn4oVHv7ifxnztGchgH6mjzRUixgEeXc7XCU7cGiFbrq1YArRX4hckesgwVYgZzeDbu",
  "key18": "BRjjCCmtf4eM2q1mRqFHAxaRKhRkjtFvaFWoLoEi3GjocJxQcsKey2MzAt8iYEFJvM8nwEZh5ZxZ9XdkfWk2vuZ",
  "key19": "5cakQk1uTLr152SCbc4XYG3HHd94DnRDS1vfndCty5zEk1ZmctfHKsnMahATEcinAPxRNA64WuRqURVd2TtCbcLW",
  "key20": "62LSBVzLQA8ypmiu6CHhRnte62ug5s8pcKRZXVRVqXMXbUiEguMpjK2EzrBEt19sdFmVEP6bxTJjDVzrSnzFQbQa",
  "key21": "4LkD8wSqQkQR9KxtBCkQFJr9uudHid18ZCYo8V59Uu2tMCwBeULFu7h94ex8qMNd2LkHj3zBLPHxVAqbmWwHsHgF",
  "key22": "2Q3rm9T74vMAmZfWir4of5ZHyMfARZ9prWCmcLa9nEsXvT1VQbpoTEJBZ4qAfGDABgxLwrP8MsrcyBKscHmmBNfB",
  "key23": "NMnVjCYfBFQmx9HqzeL5MX7Lhxd2wAWbrsNmYoYjV3weeAPetq6HuTh5gGDdgR7S6qpB3Cye26fqYfH2cdAYPPM",
  "key24": "53KV5SVRTXjJD7sXScXtreAySMgkapvvDX98P1JNrS5hJ4D1KBWGvxyLLvzQcMEf9QAx24ymdPSgseD4jKY7r2Dx",
  "key25": "2thpst4F2icp2cgZTv3mSSL6pmzQ5v6gKaJ8bW3aUjXrbTNUrgbqvGQpjZVs2PeDvYK6fsLZGBSpbH3ftWi8yNpy",
  "key26": "4CUYfkW1proq42KNUQ8HaeLJFsQaaPh2zWMuWU7Z5f9P19LHkze3kLPhM6QsYejZ6g6efZsyYN9d2JFxdwVNex3R",
  "key27": "5DHbXXHBEcHuNcGjQSC8j9Eewf2moWFLkP63fcTw3EoTyLZMCTWdWprviGxJqvQjuy9wvaQnfn68CJYuv7mvcAht",
  "key28": "51nxZQYkZ6xGvu2BKt13f7RxHFCGr8ciUzgCcG8kksA9md4yEeUcAygeUGm8CvJcqLzescoQAS9WXva6WtaYLXJg",
  "key29": "UbktXJDAe1cKTyZUq2B23s7KaUGKF3tJ73qE4QhoLCRzknpKBPhCF4DoLM3CkbHzkLF9TJFKMaijbMkAs4ERJfx",
  "key30": "2exX6Gk9Ca2u4Tg8jXxUqcfktYw1FPMjjB88swRzeyGTimhaq15E9ZFQBhhUYDLJmpbnevPhSV2drXrasuKXbqck",
  "key31": "4ER7EuQWW4imzrag2NBtdbf6FD8RapVc75CUJrWvVC31wgNKckA77LRmpTGzcb2oJnVB2F1yQdLAkjqNbHVN3HtJ",
  "key32": "5AxfNjzSGe3LvFQknYqwcVjQgURthegGbpUYezMeEP1QjaoWJtZXCE6pASLLXUY1uzqJm36a7DDmJX5vpGecRfJW",
  "key33": "3fGrpLPD8sFGj9vpFEiAADiTgPtAXhmJxp7TFFUHHYWmvgCWzmEdWUZFTSDKPbxBFNesmn4YcGgf92PTyir3TWxx"
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
