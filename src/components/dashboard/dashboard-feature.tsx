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
    "5PRE7FCmtx4jSQQYX2rRaQxWfx8a89XZ7dN2GZZDpDpTK4q8LVJvkur5HWX3UaVtArvE91i5DMK3CFZ8kFfRnbbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkxfnWZ7pm341U9HKpK7pt1A8NQqNGDvtkDuMRPQR6JoK8BUKCNMDo3YhT3GBP8NT7XysWjFEn14KMbE9TEiFFK",
  "key1": "3bfYCYgaY7xdeDNX7tPRHYpsc8RL5G1Bigssh5LNmaaMKxqbFxkiJG6XNHm1FS6QpzcEK76gVLGxTSVc1HxTzmfE",
  "key2": "61Q8UhwuuC92UvzZzH1svvYSVKCjo4NDBbGwKo5XJEB2MzSLuoXFjeuGbUeiuFHSRBgSq2WBE1bVc29zNY2xgDzD",
  "key3": "s3u9AqN4kaagzDa6j46voPuncxEG86tt1vpSRQX6yKhvZ3i8Duhn14ckBNnMxQef5VTPV3aEA4usHn8KzwszQNt",
  "key4": "5qPkZgEfeWvkMHw6yUmqR5ThBCBk5UZwZ3wYgd23tE5v4N7fW3HDLCGZTHViz3zuJiaeQ7tpTJEt9jLHbJRVoHJV",
  "key5": "5oUSTaNjFEr6hFBdio5wBaeU3BhAFDynm3ZkXnqGUbSJmo2T6x1vQDRMKfdvJTxvC1Z8NN1NTv9jiZvbWn5KU4qZ",
  "key6": "52N5pLUGMF7hTzDLWZYzMwtw9bMyfqU23ocJLputEtGrajD7jn6Gv7ixmDBbgyoxFvGL61kAK3Lci3s9hrQBsXrU",
  "key7": "46hLbX5aDED8dJJWUfVP78exhDEALpx9Ma8S54mF8eKijf6PhCiDAkqsUYPWTNp3kHdTvY4uchfbN5iq7bJCfVKQ",
  "key8": "2FWz5pY8VMsfi7nocumbkzXkPBS77r79GaweE7R9u2LgtvRKKZyLgF8SsC73NFiccWqNSdFRaXZLmW7W7x7LtvQB",
  "key9": "cpKQNtBbioE9G3NnVUV6cVRkXmwTCNoGn9ed86MMJf3kBG1BxN6RqY7uKdss4uzw89otbhgo1FdBxysT66oLZFB",
  "key10": "31uuDW4qpJ7St7KQ6vDdJGjW7LTPt7M7kzwDxfPXSmjHk2sjngssocbd12uL4F52Vj6HdR4nAh5ZcLuxDNkUwSGc",
  "key11": "GkFAgobMAKXDDAmRogn4X8CtASFXPFN6i3nAnB7MhCabBtHUwt1jqnr96PqDg6v1qCr2NkQ49AAYyvmQrhirJuj",
  "key12": "42jHJZQGo2MJtbhPdY2k7RP5knd63UiodLna62ghEA7xt6RajU1LZrJgCh3o9VMdTSuApx9aH32eh11RREMkGUb2",
  "key13": "64U7faYDCgi8c1ed7re1PhTdDgKbDx5wZ1yTJDVQTpjwthe1CkMEBBVzidMRra7T8KTa65JEJHkMhdKqbWzuJabS",
  "key14": "XYJHN5kGtTRT3DJxFhH86MVnFFMRRnZn8Aid6kTPcagvmTnbruYFWfgvxJPY78n8yKorYLbSgzbEiLYq11iNzkB",
  "key15": "KzusSVoRCL9DMAttdJ1H6x9R3VPqcFW6nWc3Lzf8GRDaYFD1ae6aKhdzCFSCw2riDoJSA7g9Xx6VzjEb4zhLcGJ",
  "key16": "4mfJar4UCTDEgLT7MaeoWGtpcZHcpchUxzeiqJdyhyN9a4U82LE83XY2d2gFACrMtr9v37Mob2HX5Epv3NtZ5VzY",
  "key17": "VjoE4mhiAyxjTjA97tAV3goQGamyUes4QeKNSHhbJtMbWt2pEzbjUdoU4pygE42vo4YccKzmnZKWkWudMmRZXPi",
  "key18": "65oyCGG5iCykZD7tfhdbVkn9kmMprZ5oAdKyu1J174nVSos7NAcAEkvc724WWvsurwRoK5NnYUg6vnmCAcaXACfA",
  "key19": "3x9TVSwcTWtJpsDdY89dbzxNppErdp14gZm5gfBrUhtEQdErH4vzL3R8cvZr2j95oVJRNpVoi4qyLUWSt7caub8Y",
  "key20": "4JHJ436zQyJHpKMtyQaRDYRAqRqFwxfN71QrP7zPHgK5kK2vjeeJG17dG9qEpp2HaL4Qh6TqJbZvsCRFosoVj8Gf",
  "key21": "3gCkRgGuwQ6ZJWrWs4m7WfYq8Af9puoSaPwk3JT3MX4PJFnrXM4BebudC2oETi6QAw36F41SXYQwmMEGqADbykw4",
  "key22": "5pkFrXaynDYtAXyHwwrRVLcJuKL9ivD6APYqhjZwzLGVpkkvhNaz3WzWrE4jJcCAEd1MXPM3mibUFqQwhPykzeru",
  "key23": "65ed1AbcVeV8UtmPHoWuKHw6uNf8AyDt48F7JsR6CqaM1QRiVsHJxgUPx247zFx1kikiskTR4mX2RpuoouRJTtiH",
  "key24": "5oVvPyvdoGy8vybbnSbXjttETtuC8vHkPqR6Crg2f79JXhG4ta6SzC1o25vMteNT7udDMTGpSChuZ2RkXfYrQBwx",
  "key25": "3ZoQUzUGdRopD6FgrmTvz814YDTLy5WyPnzHHTXQT2YFiDJCP3rXwKArBBe6WmZPdLGVG6JZTMiTQwY9QcJjXSvU",
  "key26": "5H3EFkjGFBRevnnL2w9mBZVG4q3nYSCaGdE5hUBobJ7gX3pASvTFoF99VE5z9iN2oRPvhtW6TZketSWb3CKBvYUp"
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
