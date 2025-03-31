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
    "2Z4tFX6UNACxCpJm24X5maLTTZjgceqw4ACfgfdeZpEbG3b75P8YLonPiWqTkQ2Z2gUpFuH5rY35mBRQXjvjk45E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLctRgsQZwPMQEArP4ZKNkRzWcUa1w1FfUHTRu4rrMo9RxpLKEGVncQ5GNkMJ3QdmuUehuA45DhZs7jj3yfbSr2",
  "key1": "4766eH54pJ1fRkMMwoJKhsXFfiQHyCxKcycdmG4yWGGtmoMCLDkRyeJ3jJ9UFsKbkohAFNt2UoNkTTJFGXNpce26",
  "key2": "5bstpGX1yNqn93fprPoamSzMXsn8wGc7NRCwU4iPy1iCU6YgDUfGDHyJmDWUjuCivYq4Brj77cSJbnAXjbF6rdDX",
  "key3": "5hsB79mJPAwSmRfpeCroA49ciioXZx4bapedNJdkmovDDfM9DVwS2aJbuivEbY9uTGySN1gKNYG53kiPiCYqvVny",
  "key4": "56EV439DBybt17p69aNasQMs5oiPKxx8JeKKc9F1WHq1Vs4iRRg5zUQSqvvraxeZXiQ2wYUqgUpcgmomP7QEoESM",
  "key5": "2xFupbfVcW3FWBJsuksCLxUHiJqizNdvaGGztokdkZGr3bntgZ1y89fGvkiyXKx9CRvVycFbG16dshN5mTiG9Tsr",
  "key6": "2whShptQoUpF9PM8P22toDcuPafxkwspWEEucqu1YgFxLanDjFZa7HtkQy9ofKGh7A8zy1kr39ihfn3ga7krRCb8",
  "key7": "4ANoKkRaGxtEB1Tfds7sLX61vUaAE9iQBTFYsYkrfCDjXKFiUUk64sdHWdDJEwvouZCy6RuVNvEwXD54p6wuu7Qj",
  "key8": "2zojvwXYzsUJbfZQda5BRKZCr3mpaNG7Yxw1LDUFn11xQh6MarqETVgjo49qPMiGBwuq6PeNWKvV8ctigT3oHhhi",
  "key9": "3LK3FuZQSdjW4bQLMNVqKDu12sg4Dmz7uWbYEJhvoGBydqa7C23hb4LfPSgdESzbNRQCUYJs1dr99ZLp4aQj1kRv",
  "key10": "4n7KFRgM8MegwYi8FNvHXPmihJaf5hYK2woZ214XGdh9YSypSgKdjsXoDZz8gF4UbHkxDjR3VTqRNV4d7T3usRy2",
  "key11": "Ee8LgJzGntE589KVGT3bCFL5CDjTxpDkecAZQ1UvU9W6kUQQugUm6h7iXuTuLTvYWpryvf8DqF5BKnNdzBvNPy6",
  "key12": "49eLLBM83RyaJ9b52qKbaJXniTsCrfs87ABhNsccZr4YFQ4K2tAkWV3FN6SEsLafSZyBLuCoRvYDq7whUtmnrPs9",
  "key13": "3VMAjrSbshP5fTLaQq754HrCctCa3N5SneMZECtwp7GaygKqChAd53qwSZTjqBo7K2J1NRnk83R2xRab7rW7LoNE",
  "key14": "JPRqzSegGJpWuMjdyR61iCjUDHaiSRw4C7wagYqoeps16EJyTfrr9J5QuKdbAKtS3oczqppHv6xCn1UuPUx29SN",
  "key15": "5AzsvDRvfMS2WecL7DGRjFdzPPgtx5n1AXPGm5h8nAbZFY6gwCwGoaAMQg4sqqmwFrax9rBkgL1zFUHFm2mgvEND",
  "key16": "RYF3dyRL4342R8CaVJUSW4QDpNhyRXy7tAtCE47rCKHXMYUqob2Xmx5GZgvSVPE1ZEv1VghLnLpT7bV2kTb7wSF",
  "key17": "2F7bP6MCHQDFaKVa8dpQUEscsU5N7hAJG3PvScWNTMdSirYGaiPnAvhNkXYK4PZVgTBp2yqmUgzNwoqMvCR1AcH7",
  "key18": "2QhsBH3PJGw24j2rH5RAeK1zrjm1BosbfEpRWzZqNrb2H41N9q5bcTSZp9QKVU77AC9BShHucQ1dUBhWrMVreqUi",
  "key19": "5khEUo2ns7Umj1DaAaH7Lu2jPFHAmcRaBFpK3dVTYUhnTGGPP2PDyxhhDYtFaNGp9VyjNSRmFwCX76kaP184mMQQ",
  "key20": "39YXXZFE6iTwVkihnZs5fEM4ywbza91p3ztwf1vd4NGQFRmbZsnUZJ6vTUeA8xVFyJAMiyyTBQhgiRCFMxJRV4WR",
  "key21": "2XHTvdWbFbZ5TTumhBHcFVfCbjv5jN9FxkSRCk3pBgooUdBB4PzxWeVeyMp5Pr2G6KzhwcqK6AQE3MVKPKPKBAUJ",
  "key22": "4FbzXeCYaeFodQub4fnWevpdGtHiY2pw12c2kWR4KBtf6qbcyAU2rBA9HFEXX8Fgz7dPWB3eD7nniuiR1zhFqPqq",
  "key23": "LyxSwR7rUDEmy8KqCK22V29oKSmX8zJDonBJSBKDXxdZNXWPwT4QxiHpE9DHi13rqqytGLJyRVLu75sENt1kuzb",
  "key24": "2e4pxTtPCvDTria4k79kXJpzvtcV63FJHDv6X942A3qHdCeAfFLzJtxwDR8FqqPnt61beY9mmj1on9yxtn6oQaHz",
  "key25": "4vVK3qTo7xtcxabd5uzg1wykMnAB3bdkPtgFZ3x497nserb3xFKH1QGkQGdmS8qnWgdQgA6BqC7WszhdbWxT9oS2",
  "key26": "3YYdi3fT3StgsLcGvVqfXWPzLLX2WVyWQj3YKCZUBWQLTrD42K28pYjwiV2m89HZ1HT5R6QSy793HTYViotY89fp",
  "key27": "2eJLELovN2vEH9SVZ64JEJoWa3Z5J9KTQrfCGNNxY8CgvX6eyLPpA3Zm4KoLuGJufMS9K7xz11c5Cxne3xuxq8WF",
  "key28": "44xR5hDU3G1pqggcFn19RveFU5LVYpAHzVo3Uo1GdMvLvoWmNcnNYuW8dhcsrU331PKLnB1SnojvsFxs88NFWy6k",
  "key29": "3JPtMhiA4Wu8i6FdEKXrEwubsurQ1yR6mtKAhipncU8d5MbAbvuQ92H1n9YjtVeTJP9dXDHai8r7gswRyCRjjk5b",
  "key30": "2AchGpBuCbyLaZePd7xXUDgWmmRMRK93iR3MMnzf8WmCy7fQXdYUxobnAmzRR62z75BCSqGyTejwzJZkZfysj6gc"
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
