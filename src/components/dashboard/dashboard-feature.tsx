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
    "5krsf3fJkP3Hz3uxo6rKTYH6fTXJzR76PShxNDh5N2rNvNPN7gEur7e63y8uPq9Xn7fr2nUpidhAGYN65Z55S7WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ap8NtNHdR6WJMvtF7AHPKnAUwBMRGPLFPnwBT5srqLTprCMFBoBmBWJXujcdGd9eXQUxXUSgKTeC9izDWL5jouw",
  "key1": "PE9HBy7BdX1mzasgMRav2Ayb5b5YX1nUr4Kfgccq82kXt8PcKc7i1omkJr1ft24jF63h4kvos2RCQhauCz8Djnb",
  "key2": "PztnGSgenrX8JB45Hx9grzV2qFpvu3QRp8Scod5JzakH7cVokjxxh45bCmCXRPAvHy5wuU3zgHFQPukLbJg1NXF",
  "key3": "5dg9A47cckBn23qUJ7rpZeR7YXCnBUvEgAF2oDRSHZFbWeYk6seZ1TycVW1MYba6N1qu75JyoTrJNnQDkP62zMZr",
  "key4": "2J9idYdndhJL54iYZbgsD6xVyHo4Ftbk8GPwr6nb3RhXpTbAqHWzZJbEqfWSB5RHH3UDMvi7wpxdM8513LQY5XGS",
  "key5": "5M2h4CppNDwbuYWrH9vj1pgt6uk2QCW79aoTmGJfFGKkr6qw2xYsHKDK3JZ9kAGuvs9nypwu4siuQvNcTUXWawwv",
  "key6": "Yyn7xJJ19Ugv6cnu5J4wWCrZyyRvVsuZs7HY7WU2RpgB8cL2XvYNNL7GXVnVbmmXo7zt2Vxnrcb64vb2RKtHH9k",
  "key7": "3BB3DwA4V5R4x2ExKuRW2ShpzWF32kRUHnsa7qKKn7pu2NVuAsUFNU5XiiWmPi6M7Kp2fjXcGK3Z4PrNGkmdNAii",
  "key8": "3ihJxVnSkea3JhqRYTLH63DhaCmyrXMSLoufrGnDkf7HXyLJgntFJNr4U1FbGo3CV1M7qCoa7mVhXUsrU7hBWXAV",
  "key9": "4NjoNVxCLLUmW1MrUtShg1cVR1kjLDBMpvhDJ6BJgtFo4BuZkosFaTdhU75wehuMDQmGkveDQjdvnimGNAosiUrC",
  "key10": "51WmnH2sjR4WYhZjr2nawFgMYZ5hjFqpJncv5dtLJJaqNzHX7g6qgyHbmwLHj3Xnp2xjNu6dqgY7q5jyqPaGEAfV",
  "key11": "5ircM7ZqQB5F8yXhZxDU5AqsBptM8hxJKb2AG21oZx2arzVihgxBKATXvc2QZGEAErN3qKVmGSZVyGPs63uqnyXv",
  "key12": "3XcP2QocV4BFMKLShz4Cj74odbXT6kTRG9QzMTTVbsegY6x4iCwX4ddSajUJfz3T8nxLt1kpuntyXY3h4BnA2zQL",
  "key13": "3gWVzXSwk87KuScUJExsMP5mu2gir1W1wTyVERHP7rMWHpCwDWjSVzBv8g1gtJMGHHYdTSinjqdZY9NdBtjKnrKN",
  "key14": "Vd9NxN1HXeCyoXPbA7P1hK4E6hdPVHk5CMbAJoHrvkPY75LdyAZaQ2E7PJJ4uq5nbT4gJbNMfDLMinmMRiK1FFE",
  "key15": "2oLNDYtGotoEsWXgnnhwrXcVZUapd6x6xbrbqH3FKPhHDFRqEbdV9VZbJyxq4YXgf3RVcoxfAXReZfZ3jR5MWsBm",
  "key16": "2kncL81gPMQkwsU68nifQBxiXsTS1NyaJAGGp2kYiPKv4qEeAfGijswskivXFSJNWjceWenu9S5zTco3afvq7XPg",
  "key17": "3LCQNUYYAoBYTxt12VUZRNgmASz2Z1G2Y54UC7iqF7SnPrc4AHBeqznzZhVLjEKLoJKF8SqpfNQxLGcsoxh2fqVj",
  "key18": "22Ywfwgj8MzfkLJ72Dy83daAgxaa4HtyGNuK97gXBE8YhbWs7BJ89VJunYS3EgJW3bH2SHsib9RUu3T3yYh1hvUx",
  "key19": "4gcEuQQd4i6RAEgtDWLxBrBfuoNKHZKkqC9ZzfrJPqiUSkwW8GaNemCRNY9AppWj1q6bx4BhTrAZPafgxef2MpcQ",
  "key20": "3HxR12AoVEmZu8L8HSriSwyeFjBNqnEynkbxshjXTrvVV7C51uhk5Ka2pRC5Eru7UN2c11mjGbSQDZSBgrbNBSt2",
  "key21": "5UWxk78JFvNUegMmLUW1FcRiHf9afX2PsV2fuGjg6pY3UVmp6xMswcZnTKNGJkf4bb2yGUbSvaswjiuQwykjR2av",
  "key22": "APxYh4W5Xb2S1stQWSGJfP49zvyiF4LoaEnWNo1BzYz2heDdphsZLaw9wUM9mUr9iqDZ7jGfGCUa85BtfQHEPp8",
  "key23": "5pXPBtFpkdwE4Hbp8abdPDQaKWpjwx3a3Kw77zLJcX88t5Kp1xV891QJyLBQkgAuJxk1TzRkXGrWGPxBfT9Zd2vd",
  "key24": "Dpo2n5E7UqixAAUmFcV4ywg7zGTjQsFmLsX4vVPYZ8PsyVVNUNMubA5zM167MkMmKsuJnURCM7pLhVWSRyv6Ryr",
  "key25": "55DEqZjhQrSeLysaziMmgCfTAcn1JNyt9t1CRFyN2uAgQmi8qvhDs9ceFLwwdG4PaVnZPYUuztRutzGcjosksJ4t",
  "key26": "52FuRoi9ZJQ5TP35186PaTRTfFFE5URBfpA4TFdZkSafodE8wNktLoHf8MewkcxDLUnfxQedM7kQPEJ9WyVRECti",
  "key27": "46R9NX3whGpGwuUR2hCxW13pysHYsakWHFhBpZ7cFLw2BDJAt7j7YLGTwW7UqT3i8V6hAJvpUNjyf86DSh7m4gAV",
  "key28": "3vNBRLTcycHZcwJj321T6HPzCoMqCARwGwRUSMiFs2x9V1FqtMX1ZNockqvQ3uKHcP6ejVkXTGURHDptFqiAhcnS",
  "key29": "3P8k3nB8JCWL8Rux7b2eAfSpLrd1SnxcsmUtL5tQwJyCanPKJVP5C9S8hfq4Uic52kn2AV7ujr5DcVqNqWE1aqNE",
  "key30": "2WiA2QsM3jDskdAZL1TNPM7uXzUbE9BNevNWLqmCiy3pLeDPWJU2p618LTUHX9ib62TXpXEffFRc3dgdDtjM1gYY",
  "key31": "2BRqawLMxAKAPDsVQwHPnZtGbHdNQgpFs754NYJ4Bw2ZfSfEdSYTqBSLT1VPFQ4eG3THe92ozyN6PUQCSxLoBX1M",
  "key32": "4C8PaNWbNHHctZ7XSR5TfgQ31rgdV1LXjhdoKUF8YAWZfLgeR2Pmi8BKX3vuQGbS5BLjnykY4XdvH56muFpfed5W",
  "key33": "4TVpQTeU8fyVp5XksNdFn4JKYRDfydhZBgBBEqjGJGEiNtepts5snqfEd1LwhChXksfuJQ9uszz8nLR49zSEwGtf",
  "key34": "5ABd2XCat2Bn18CTkZbA1LwMdkB6cX7SFkv79gswjWbQZrXsYHNJo3PP5ZVNoyXDuiHbHqshsycR6mFKCpGHhgn5",
  "key35": "5FBfXuPFU8oHDRqajrvT4MmumXZLoM7p43CQ25RrQqJPGQzmKJJpjXQQcMpZdqgmKuoRh2C9ajnekKsithnXQ6zE",
  "key36": "32pmHybE3MUjqp8kYfCEfG1pdqQGUVPoH9QMvn1W7C9fuin1Zo46n4HzatXVdRKSrBbttMxMdqyXrcp7RAo6nWdj",
  "key37": "5UsjbvTa9fZiiW14oHwEfxjVuX24bzTAxXDGvphXVvXW5VYdvdWoaPMvEN1qLXRNVwHsFfa2axWFcuxV6sfhEGCE"
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
