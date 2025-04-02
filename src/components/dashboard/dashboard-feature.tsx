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
    "dGDD3r4sQYQqjAdUcj8vJgZiziiBckjDtzq5kmiqPybAjLUT7fVqp4CHPthDyCUYTB7CrALhbbEebJh2NNuTJTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFiuvNxux5SY2wCWEzrnirJiU1W6D9FxVaAhyq38uXHhitAtNxbUicJjt9j68ZbnzyYBSvFcSLKeESAXS9u5cu7",
  "key1": "4dw5kxHrhD9nSxviU7x7thfUPirFnGVTJSyYos49LEpH7FAF1HtwehaEz9psvtsSxW9V5oh21StC2XGELYGe1iee",
  "key2": "2N4cJ5mKQiAzTWgcDSTWUSuNio4uPSiLexfWtuKJyHYpcxZyNH4UThwLvjnpaPHGbhKufbMCouEoySLh1kWjueVi",
  "key3": "YtrX6pb4KzqTo4uh5gE8z41Ljb72NfNTj2YNuzWXLGoB28jJpevThmXojp7aVb6DXMkLjge8JwSf4Y8NzXQYftW",
  "key4": "baJtz1rwD1B6VVevyFy52446vPjzam6FDfMGZjYnG5j3wBLKYJJ6Y6ds9Upap2q2DteT42pngq2zt6VVUZR2jNF",
  "key5": "26LNTkU865bdKpkGEnxoB75wRC8RseZKap3bZSWjJYKEGLDdepFayeWmky3ewjSqrdwxd6ZnMBscxKYHSrqa4HSp",
  "key6": "3qeWWRuXdhtheGeqe3u2vgUfD95598MZzUZJE86vYS9wd1rdVx5vb2jTY6uyCBBTwEndGEdV1EnDDmu4X6orod3V",
  "key7": "46tuLMq4gv4Xch2vHk7WdHnKicT9ovgWvrVuS9BrQ7ufDH9axPTTUi24C61K3H1JZDbF9s43tjvDygkT4GxMHr8J",
  "key8": "BpeKfqyjRqa5eM9U8vG462FQYuDVqovJodPCn7YhocwcqeKHYFixKwcqcaddxmnWt49rfoq5wd3LntXjzFBW3QS",
  "key9": "4hzEcympAVVf1VtoHsNCD9vMYebXkASrTAu9f1y5otYxvdR1MBbVJJ7ow4jHGrnvWpJCJR7P6vYrhpU3ZXatsa3P",
  "key10": "3n6GET1xSLw1oUsWtX7ztLLsSKJ1ENpJUvweDERmdNGn5rsntoqVNUJYZfr58TqZV4JoU359Jjj31oLNT6CzheMd",
  "key11": "4NSDoWcH43r6kUm1raep7KgMmAkumxzgVFFyB9BT8C1wqXUMdPQ9QVQCM9BvYTyJjQfWsAJV472Psc3zyocDvAHb",
  "key12": "4AnU5dHM8cGWuyazNs96jz8hrKRP4BuPTTXGi5eixCLbjqmXXqHwxde7mKLBzRcAfgXMNpC7rnkYDMiA51RvwZgG",
  "key13": "JRWiwhEsTjojMP4aJF8Do8pi9Rv9TR4Mhbnk6gFN9BHFdNTPCGq8p8eU3XJnn4JGTmd11MdPz3smk2fGiSXZzrP",
  "key14": "4ZFreS1NCziHMjKbK9dsF6S361aPXTHukVrs2jsgS9mZCoWAhf9uVWxSv8qVQ8516yoWsZuTcf6mAEze8Egm9Lik",
  "key15": "4XYZeQATvSHcVvChqkHiYDipVg7zWxJyG355Y2YnqYgPypJweNfvXwNv6jjpjABgtqxki1VMJwKBT1YeqcbsqkYF",
  "key16": "128MTbk3d4D5d1QFt1TA6zXdppomKbhZoZmwVJqwF4F5hDx5i9qcwUz7CZ4EtN5aquYBAB7ELQ2o28vkKFQSzrbs",
  "key17": "veFCEx1QpM2MKBM2sguJYeAKypKWXBRXeD5YfPuuSCWFK57q7iJhkWFAxM3qTtgSDULpvtNCMD57z5ZfdbSZDHq",
  "key18": "5AJbhx7M6KMccapdCXhaifhSwKq7H6yKzrRjNxkw5BtHLqRJTRsnJ2FhHtxhntLNFfBLMQvuijtTkYS2o9YG7PGe",
  "key19": "4SrG5reaDV3o4Cm4WS22JYJ33Vo2irbV54RTc8CYqV1szAwR34pPtaRXts2v9nqq2X5VwdXSwdcq1ZGz7aET9PQB",
  "key20": "3RduhhonYuxmxgcs9ZAewSDtnQLzsUcWEMT9CfqbWhR1JivHcb4JQ6VDEvAW3oaSGTByJRKMVmVEjnxpEqH8H3uo",
  "key21": "3fgYvcVtNJf5HyB5o2gUVjqn4vKjMgTzo6ySmbmQTjiNJ2xBaFSNPK8bqiF9pq5Aaj2QE5Ti4jHvASMTA1xu775e",
  "key22": "3rxq5bUJ4FCKYAerwiJGuSPRwtSXoE8mms7kqn2iPR6WRua931ygY7PwBbNvuxFYStWFFHeaZ6K1yyMr2Q4xcnxM",
  "key23": "5XeNaHa2x32YxzWy31Qf5PoUQKFB3r6gNvVZEihGWq64MYHf8fjRgQDaUbSj6QMU28uoduoGohqBWzG7Gj94vuD",
  "key24": "5i5e5Rg41wAN2mYNQ8xvw1xGtnQ3FWJyRJifSNEqEbfr1W1k4d5DGL2bT5cTDHKLdthWjR3Sk48wKBwiHaTG2j2Y",
  "key25": "5obHT6dcPhnHqfbeecAvPwn3F82qfoXcks4goouQbhfRMrbZb9XKvGTZag4k3FKB8VhdBBzeRNjYBodZkhATZ8B8",
  "key26": "6xKU76Jzin11MG99zPdmmi4pUnLw7yyEi7uNP2CvsnwYBq3FxSdSoCfupQshwu7bUnxbEfTByqmWPWqQv5PzrJZ",
  "key27": "3UvQUC9CYP24NYD7jfSEVjyTpTKHvPNLzkLMQfi8r6qSx4qSCwUng3PKiHeUru49fXBgjesGnZZgwwq8ny1npkiL",
  "key28": "3hQYZZVRvsvws8DziGEgNEcwACCW2f3GNz3Th6SkFP7B7vCVUyXTzpSR3iVzqT4AQki5e2yW2YBENQtsYEj7G73x",
  "key29": "5zmB2dCXwk6MaEMEM2USNWTVEL4JXZEiEriW37jgKaJQ8sECPKVyK4Z3tMXdNrne2ZsvrEsdkp9CfQJ7rYNyN9sH",
  "key30": "QCXCJ5WVWNwsxb3pxsKbTvqHTnQTjkM1RhspcLvXUHVjxKTYTg6vrSNVzzXNagYmGJS21ZFyGvqGAPE8PzH6HdK",
  "key31": "4TcYSyascTc82wgwKije9fV6nBV2zx5hvGaWVm4NRGkqLX16ZXTwQzHSR76XG1mjoN7HWpATxoPu42p8adg2Us9i",
  "key32": "BmPvhfcuEB6KWheUDX4jCfnUC8msoWHn8YJdh7pwxEdSb3Sq67TyZo5VmZc3joe9nrJLo6HhTRPbQFT7ipCR484",
  "key33": "5sC6rnTT9MysAsYMS5U4FXtkMmqxgnvXsoxQjRPPxEAqF34Zu6AhmXxVL9KXoBy9yd1CtreHgdDNzUvuwM4xyVM",
  "key34": "3zVJXQWUMHLA8eqq5XzJYgL43SeyVZb2QYcqivyvRmegLktW45ARXXBp1xssi4ggHy6baCdaeNucicSpAkxsEEKV"
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
