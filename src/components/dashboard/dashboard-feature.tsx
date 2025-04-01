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
    "2PVXzt5du3uP9pwM4NnQ1rptDVf2FEq8s8R2sSH3ZsH7bhaaXequFuxqXXozhXXkb3h8ZS91LoZTNZUqvQkyJ2rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuYDdP3x2HZxxW2hyM4cUBLkieq3PDCy2oQk8Diou12qFMDoF3LLFv2PJM16ns8wAhC7HupzgWzcX4wihEPr2x4",
  "key1": "4iMhd8zS6YmXLf6inuUo8HwSWQWS716n9bse9Jtec15EQFk9eX1KEhrj61xdkhNyQRQPGdsi8yaU17t1SssanGkS",
  "key2": "4GR2iK7waXNYKXNpnwXWdTgQ8ncSf8U3QxT3dAzxgTkw9GBj4iTAHmHhEm7MnKfR9z9tXnc3bi7dNApGDTJcQiWH",
  "key3": "62gREvo1srFNKFTeEHM1sx3PRuzvfRqtS1CVGqvLP8QTJZGTNdpB8fvRVo3xor1kaaHGA8zUQJVzTduDmiKrQgUZ",
  "key4": "2avkJKY13PpQkEg1tKe1DbNTFCtcuSBxoby1WgYozYcedYJGcDHTqwnuoQrjZAZKSWdQGc9JWkSc2DSsSQrn6z3g",
  "key5": "5q74USKfQ12gLdib2o6ZQ56Z6apHndsxP6FsVoshHeZJ8JDuhHzvjNjkEk6vMYmJPik18YuZL8CJPrnATFa1N5DS",
  "key6": "4DKKVjLtiKPyNQwQHfP12gytjah29eD3f6GLHKfoDmrKSWwbLGYhsGwrDg76B818KQpsrNrZkHHTYPgBhWWqGYHX",
  "key7": "5X474qJpN9AJtnL3rx11d8Qmz1Cjg3QueWwosP5P6sh5UosVerCJCXCMxDnyXi88KSS9ZZw2UvPynCbh98SM4CKe",
  "key8": "4yU1bchj1GU31Gj9JAVykFoUhG5mDKiLWZ5daULXfgHg2rvP8F77t89JTUdeMtwVBabtvaqtBonmvsTFqZWA4R5u",
  "key9": "i61P91xXBbLU3mHpyba84voPnSUg2wCkp8zo9JcuUBLGRxoCURzKGeW9WtQF1zU6E216txTn19QFYxgT2vefkkW",
  "key10": "U6u6ufYh8M4p8Gf2epxJLdyvtBYyhAKjbeQeT56Sm4TCmV7VkAqE5ZEeqZ1fi8Rkk3kXHDG2zMvkEPYgjJo5s3x",
  "key11": "5h9YBhNAYgWj5VeZ6z7rURZfsDLfj2HaonzehPTxCLsLc177ReYTSP3rz5xAAojjDdWiz6qoy5jw2XdLhV6Br6TQ",
  "key12": "qjnHYuiPQucBgK3euTH6PpokdqsVY4KCTBkDDXpq2JCmcthrNpmoJ8nCQwg5wEHAqjxsupy6Rhn3PxVzNicPx9q",
  "key13": "5hhtei8VT1nZjKsK7oKpTA2AwAzV2gnaq4AymjBdropVuNLDTnqFFfgiu445cRgUy84RopHJVEateQrYwPps8jQz",
  "key14": "4QGiHngx3Nvux3gLLs84FaK6x9csZmKmvJ2MNwVpRPWXti5rZEAeBjdbXyah2AFqsBXHdGi4BDSkWYos63zgCARH",
  "key15": "27XzSgWQDoRNMvMUwFmFvXEbjTLUv8eZfSi5wbnvTchUW7zyGmMAbMXRaXpuzNYH9RFjpDEWbNJKJhnTz3974Bxg",
  "key16": "xCXq54jQaoRJnAAagXAuvicPWNVSnBELJtn33mPBumbvf7B6ynBa5boGmdGFR5hZk8iuid8zssiBcx52i39Q59F",
  "key17": "2mtZZXSoT8exaHf9BjPBB67WYGaxDzM5CUGrwa2yhd83zJLevafSgX9DPz6wUjVbWRWBZGyzidqNR42SeRfiadVo",
  "key18": "t5D9f88dJnyt7pLwgtuGSFc2jU7DBRjpFwWYkpgEyLofmMPpdLrCc2Ye8XWDGmUP6hjxwSeFQsqm1NvuK2BF2RH",
  "key19": "W8Q8XAua7k8Ky9mXbm5cWTee1Kw5mQSpFNgwKE67fDWZeSm8XropooJD2wU6zKeC6S1NiQAYCB6cgGPjyn71QZL",
  "key20": "5PaacAVvzzytbqFo78KUZZCWwVuDkSwHSSXBhAcZJBFHCjdmejBizQYeaTN1RdKf1AAkRawg3dWF4hnwyTkTFtok",
  "key21": "652UynS3n3ecXpAsquj1Lbfbt8pF477jQWetowqBHAjZJ7uDcNWbaUCGjEeqBBKP7v7yYe7zeK2wqdM31ZZxPS2C",
  "key22": "MUPuWcqipWcsRZRNDq35MiyWP4x5XZvM9amxSKGQfiw8fAvCFwdnzoJY11gd4uKtAxmKwUWDQL7ieKtUMmmvE6j",
  "key23": "TWSdnYQQtj7c1FPVDXQ3ZJDnezgRbV6RLt1h5sw2z5YeyDXdyCTWFi35vpzHfNubKcpFxifj4coudySUebhHDHu",
  "key24": "3RVcwBLRdfXMWMo2sUCef5eTfqCbsJKeZ5egTxhJX2xiMHNuzK6hXPurrnskKcVgcpeYeoyqRmWYifVomkY59CEt",
  "key25": "3TS6fCMwNUpHzR9uUsrn4tcQjHMVcgpCu3exQapTdQVzk6fLpvZ4coNth3gT382LLyD1dR4KRf6etGHrWtqYzNXi",
  "key26": "4Ps9yGzGPhVq6sANR5zsVGjCMUH6oonHxXrtfzHWcoTARp4WXgNwWEhWY333wrAvrHkLLqqmBv7keRsE25L2QNEz",
  "key27": "AfVVVjUhUp4rfaLcSR8vevMjzrTA3sNNeggm8Cy6ndUMqe3218eDb5AktxdpuMQaQ7twod17KGHn7nDuCLCsbzp",
  "key28": "afYcJuguTvxFs4TVuoAaBE8TUZ5d14WPuuozE4945V9nVfbNEUYSMUjRgrPxgwBZVEF6u7hAYpGE5EfXYLiWGMA",
  "key29": "4daxPqCB9XdTZyA4rqHgpWYvVFCjkrM89QfYpQtXnXMHM1LexcPfqC7WdMucK4UAiNp7sTTSoE5b2Zs5ovUkS6m1",
  "key30": "3sYmZWFzrZtbRWuwQASbVBtjUjSPf3Qjq4BsQ5jX1vunCjWbR51FxvRXrzoa2N7A2wrLUVgSQxLV2sWRFqp4qtMp"
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
