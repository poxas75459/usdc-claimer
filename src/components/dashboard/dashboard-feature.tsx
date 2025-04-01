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
    "2HvSPJ3Y8gjHptmJ7QViMoqD2YMKTCuAAuTpbCvv8rt9NPRZVGsXq3Sr2Z2am7c7qwJS8C7RnC29GNg7h9oUprPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yXVgCLUhBjRKrjYzqL98Xi3HCKM28Kpa1mAFNb49teuXLsk94y1sAfg6TtvV2MfYjptshycsrYktVn7CcK6CmS",
  "key1": "3SvyeSq63V7DDjN3cCmCL9y4ZKetNiygtSMFP4FCkti6KLwMbKi2gNV568Ymg1ChBhMd7QxRwy3DzxN1oSjhMkpK",
  "key2": "eDBjSucnUvjKSHgBMUxpQFMwfqzhH1oJkeR5e8gfJNwYkjnL4HVTPGJapykqk7oVH7RGUMctFk5Kx2o8E4cgRdy",
  "key3": "3RDiqXD5vQoxR4FpAiWUKmF47LTLLLeruEzVQLUh85qLA6141AfPs4GwaB3rJprnvMaQH3vKUq9fpPJHxHtNTNiR",
  "key4": "5W8pD5HVhjhm43UGnnVNLLrv3HVtMp8Q3nfCTQu3viRhZp6iJLBGFL4Vps5aeYofs2nNTgL28mxjq5DBgDKwJG91",
  "key5": "3LhYjKDhyRCDTJ1jJGDGBKdzJ8NEWiWeNzHgkeB4ryDWwDiysTX9NJcAk3ytAUsUJHFDs1fBKsAyGgZgJ99zbhTL",
  "key6": "562mYsqcKqiP8dXgDnmWsBmHxHqaXiWQF6V6vEYqriMt2eRGuHAUKFodzuP1ppSwSUACsVZ7SAquoQ4SEwK1H9Vw",
  "key7": "5KPmVYhQSUoYW318S6JBBv442QizwjU9KW1ncKhgR7B9GpZSGkVy4MaacSV3vNb52qEEKiENxmMT12mRJYNsTjDW",
  "key8": "55zLzDojfd1qSE7GNSeJj35jRcSxZFs1fRiXbPUoFZeDqhjoK5G6EqppDdL2pyVzRtAoPchxPaXEdXiiLwCLy8v8",
  "key9": "5eFJ8SZmNd7bBYtusK3RgZba4XwB1FUdRsBpvZviuhk3tyvToDkWiW9RRNjbrYkgKkUGJD5VvZ7gdRGEFKJybkG1",
  "key10": "5pQRjV8jnmJ6GXT7sZkTsdh9EmMFWjhaGMUAS6Tkr5RtUeAppS213kPbsTuASckgrVsVytJw7V1iPiZvMgVcGDNk",
  "key11": "3WVVvdsfe8qh1GQXKv2JKFd4aKekWjy7uRoxdWiZdCBC3nY8ZDaHoZgH8u8PsoGAaVxQYEoSG8ia6qLzPVkf2bh5",
  "key12": "2fW8YqQPaHhKTeK8EcjiW3qRPX9kuCVvEvmRcsLVwNhJox4yRLv7ezjAi7xCRnhUjUerhKp6diSWjjRFRvPmkwjj",
  "key13": "3qqke8K8NdYtwTequZL5e2bDM4ZD5UuFMBFQnjkMjG32BZYB4iZeD8pECs4BcyL3bZx6GiYsJQ2BPA46TgnUpF1H",
  "key14": "4y9NUEGVx6iUHJi97MFiqfqWQr42eVHPQS7WBiUWnmmwgpagk921tx84AVZ885qTKhGrkjdWFgH8oTNcHZKiYzMz",
  "key15": "57JoeoivjYdLhajwDtoBAH57mm1auYon1yXqCShjG3cKx7tXP5uNHJJLZmYg8SkVbU37pWS28h5thm3Va7YjaMJo",
  "key16": "3vofXdhdFPvWv8LFiY3MyPGHq7cnsLAQaxGZNbAhdXstTY6U53ZTS9EFKhbFtvGk6MyLFxsVBgcwxzz1onW5cggK",
  "key17": "25PFBE8UhCZyE2ikfjdbYSAzxxfrfkNbNimZnxTQx7tynbtjxx8At3CBJ41aCfTKdKMmfFnLojKGPa7cv9eGCGZj",
  "key18": "qXWUkpoR1sbwuX8L6d3BNgTMMWz1ps5hbEgWAK4pkDP81vuHFRVudCG7KsRSNZEYK792KHxhBJMQvrNXCaR5fUW",
  "key19": "2B7RCfTpTzF4ujqrWXdMRUdYYE2AiGz8T3Z6P3ZvBxvezB4hwSXjTWSJfNHhtYoSbnUrzLjaEs3noqpukNjcM258",
  "key20": "3zbmMv7wkkLDncLqTncbcuTJeW1vLq3JUMCogJ67vVbbnCPXUVRox1qFA6rnaxij3HZMyBB9s98m1UnSaSG5CD6r",
  "key21": "346JXLZjSsWcoRbRPyDNWBpPYVvAwz3eJSAKs2dedopfKJBauc2BYipYw8iYwUttTpHXe5oPQY9ceN8z5L1RPNby",
  "key22": "3LYg714b9zvr4JdGRCEDffRN7KcaAks9GBzAqpdKQfNKYiCDyMH1cFsfjjfJNkNTgrU3eh5foDS9irmvZWPa7kU5",
  "key23": "2n7XiUrKFmjLcFM7Mzt7aqZHTjpvfPXtdh2wym2E7sMyN3uRk1gRbNQCNRUaeXCPoJ3KYzTTwP9TMqLRfYsCFANX",
  "key24": "4RzutJg8tXjX2VXMu85K7RCYZcYVXDkcfN3y5tEB8SgS5qt5Tz2cxgF7F3gcHDMHcLvC6MtMpEf5VZod3nPnXdU3",
  "key25": "5e1szieTzWYNdQewiuMTa5obLnoYwi51knq3ERjhNCDviDZBCUJyKgvGy732YAYst8aAACoJ4ZYQX6tkZvdHKRS2",
  "key26": "5NADWNvuRu69W672ZPFSjyjt8WC6HqkC9FHtSCrzmf5SEvgTQgJfpLJGNQdoTgW5iYLcjcvFHr8sbNHrPvRroeXS",
  "key27": "3Cgbowv4jBdmYXRN3CU7NNzHHPa5m3ctdKDVpspHiDFFDAYfJ5CmUi2tBtcWPEfrDUs124o9GxpZ8bBEuwHf8aTK",
  "key28": "gSUdS3WYjJoGRL3bPRVJDy1PqAmoAMLmo3Wk4nL8oWeoPTKwVzYTx9UbjKxNZWbUmfF8jbbpQ3RETMtWCbQ6zW4",
  "key29": "5ZK4ikAmhmariVv9qTr8QqpTL66LsB1MA1LxyNtMH9D9P1YiqErLCSQ3NFihNDUQoTpMyeug4vifwq1LYDXk3arU",
  "key30": "4KZPemGvoXXJYZGFfJ9twn34L2WWcgbPFYQ9EKpWcdJwXawWzEVT65KVjn2kaYJmTG2pPcXgNg5DsbLjaK4rDJBY",
  "key31": "5ZeH1cmzdFtHnQrSHtYP6JR5AvK6CNJ5deYtxdT53WLe5a5MZbtZMmDLgmhNFyHeB9gXwReyTLm39EL6FeaJLhN8",
  "key32": "51gzZL1bMyfwRSoxYE5iTUAZKMjnCNhQQ6bTAzZStJBhob7rAdKUHonULwBaYFsrBfxiECbFZXPjfHGM4cpBhXj",
  "key33": "67FdfwSmB7dEd9G9hXfUbYWhoUFgULt5qSW3G2GFKhJTBPYXzjwMvQKuAMMobTW7TUoaBEakhqvUf7aj3jVbmtK1",
  "key34": "3jGAWFSqyTZPifUY6BG5CMSZPMkbwZEG5BBukHvGz5iwRX1B4iv1nwVspgf4RVXSBgAZKSzm3gLTKKxH63Jo8mNC",
  "key35": "5EX8i3mKWpuMnQJocwQWsbf9nxF7iozJ8jS28rnZp7ZohFqsdCzxatRjNPYphmT3hZfzDxnr78ouUN6jwVXqwhCU",
  "key36": "2NhuZXTJQodsWudq7F1TukbWFykAq9573x9T44RxW4Gs4gwZrgrdSksqsFP4UL6gjuuhSeps9REKUmX2bNZGJVDP",
  "key37": "W8hAdq3JTGVEvZpjdn3UQgD1DRYSAUsz3KhgGJRiSUyWsYLGDULbEjsBWXENFNh8MMEjfNvcYu8jKSEfmB4dGFN",
  "key38": "23fA1YRvZdNUaovtWPsBPmHuxRawc4DG75mawFjryYZwfLHSUAScZQDFkccB5eBU6UujY1VXgBa9wiTvxKyoGtE2",
  "key39": "2De1WqqScgpNZvGVS8XMGnnCLbboPNGuvagmcRpdETxqUFAQvdkBQN2w7bARreFYKQTYmyZ6KhXC5Ge4oyjDUrSi",
  "key40": "24GmimTdZpt8trWRYXn5qCwGTj1SaVZvX4qnN5pVua3pCNWx4N4zjgcWrKvsuMMuvvnX5jXFxpE5QH1A1YYj7Q2z",
  "key41": "3EVhHF5Thn9wLQZ5obusAAZvfY4DQWbLBGb8DAXKYrSrep9vVq6qT4pBgHRmUGyPiaTDNFwpnrSzWrYfv9cwN8or",
  "key42": "3ApAmCNAs4Edmee3uMWSGSo7DKBXbVJxWogubmBLbCKZk6ZRXkAHMAPnLBiK8uh2AAj9aADFy2rS6GE9HzN5HmS8",
  "key43": "41oHpY2bnLQNQf6m8ZfQsyEwuPNSQN69LBTURz5VmYQkRU52y9nphcBBuKt6joDb7Xe26FzqZKT1hpoQR8vXavgP"
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
