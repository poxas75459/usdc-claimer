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
    "5zKGyDn68kt4ipFnXUgm9kfQg2XRKDfbPRq6Wsob76ZxcVCKsa8cfjiRowXnrgTfJXLvgHpBogVTv4UDt2sGK1Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522tYqu3v3eWX5LVDcFQr3Pr5TG6Muh6nQMHzAZNUhNaGcjGsm3VY9SNUMYK87uU5B8R5w44Y9LxNRDtEnwKtmF3",
  "key1": "444VYD9xvADm3MWyMkyXVvYthW85N2x2vBuFMqrEzyXpJvYB6CCzHbvpnNVSGtwqxAcx3ujTmqhevZAyENqRdHhd",
  "key2": "4Zc6s9MYW2YZxViFMrUsN82ZW7nAHcGY3TCJbWA3mzdg5ok79c2VcMWRierDkqZYEm21dVYQ8SDe2AQ6fNPXE7ei",
  "key3": "3cW9i7dcEKdCy2SdAgmaX1ma9pzGZqA2hMckVRQwGn35YjkYsfA3EMqroEvV2Tt12TPicTrxYgM3Pr3DpyLUnirc",
  "key4": "5o4Pw7rCv54ZhiNwHM3Mkr1si1vvYeXRiGY46wcXoauhyvd5tv17B5Ezuc5fSNR3ybA7kUcBB56SSWWMYHexTj8p",
  "key5": "54fmx44Af6RebhctdE5z1QVQRjc5RB8igxyw5o7ajFaN8rkgwVg2HJXyixVQwqkFCDMEm8a7PxBGgyNLhSqAQcP1",
  "key6": "2bJTdLFhVxv3K5DwasnURCLFcKfBSoF6xyKHxT5SwnVhjby5HMwpcoRCZ3sBSNpDw85hmNJW1DXuYFUHu2WZVo6t",
  "key7": "3ReAG68vARKDZWJihgwTiTwKtE9LC5aEUpr6T2YhhyCnJP9RzNxbwohRuJzSo1KNuvdQ1zSps9qetVTwjrFALu2n",
  "key8": "tpubTYny96Lv4myER1GWptX19UfGPQJRYVdM3vHmZo3fW1NrDrTYEc7nBVpYJAjQ9tuWbc4XhCqpf9uc96GuFwE",
  "key9": "k5xzf73ccR1cJmgVpbGeyDeer7AnATyqmUXsYYuNrLj3xYv91iTs4e2SN5rD2bcPwtAi1ppbUUgGw9VcZF5ECg6",
  "key10": "4DiYom42GZtZd26oDtRcyFxhAT5taHkNRgbqEPa4bv62mkLED8qn9kYBUQLNv2JXqhETXpUiauF5CbxQpRwfu4n3",
  "key11": "5uw8Xzs4rZdAdGuqfuFsGaG2HWd1SpP1YboXw31eGwXAevRrr6LeaKHBEQRrcCVeQtFpXJt2cBuHFkG2x76zUnem",
  "key12": "41T63tcmdv8o3aDKyshpMcRr7XqiaLDMXi51k2Hej1gK3qc1VMKHCcP28gpBWa4vzh8h2e8CQyEmtZykxk5FxoJH",
  "key13": "2wSagX8KoWnzN1Fz6cwBCY72ReqK7C3kmXHcNNskprqUxUhXwyNhvVohV2zBD2jCMzecg53iJ2PAkPnunvZCySuF",
  "key14": "4KCohBqtFNJzQhojCMZcVwtqXxCxTphBBEAPGQKXSZwm49KvYzh7ZLiZvE6NpNTT6QLfmf9uBHuLZKvM4bvQCAYD",
  "key15": "4HuhGYKUW3S7TkrPfHHgWXLhbBQGqwDwvnkD1CaG5bfY7mG2wgvo8zfjdKHNbAKf4o5TzM8vML8sqCe8RGQvERmT",
  "key16": "2qKZVj2A2RsVmmsQs3r3f6R1jb8xcxaWkDfb3Pb3SKmdhy2Mx8V2b5iBxEmBsrHN5yTkCrsUVihWfu88bXu9eHE7",
  "key17": "CupS7JwvdZur7RmkdwN2D4CnmrqMe8aKQui2bPyUJ2rckpy9SJ4wKWSnvjjETyn8xPtCU2zcxSaer2ZUAx5Mhqq",
  "key18": "3U31MVMQc8y4unysWUbus91xYrPAUNXwkwgmGGpw1yb7wJhqcCeCtb7SVa91abMwaYQ6p181aHw8eVs8rPZz5GjA",
  "key19": "5WJvducSCbGdJ2eaHBfWVfb3esyskEDmsLPHDxV6oHgnb91ZFCy2gP9f7uYXYBSQ3qPgNPVQkasrBq74kHHb7c35",
  "key20": "27Srpdr7B13DxNHwcPRFAsrUP27W15hMiLnjoptnx4uN2EcudGEjcfPGWAyS4kCesMpJF1RCL7Ggw8raQW6AkWjX",
  "key21": "2cusJBDYG1UEEVNGQjNbgnnwds74aEZUBgAyHgJeim2DMhrRopxM6JeRUkHZMePEW47VfZ59TNwhv5nskurdDvJs",
  "key22": "ZD5WhSdHGuCiZW1BwFbCx2pKCtD8tPnR5mSWKbFWaWz2S3MyQ6bDH8MrH7vrFhAgLCkQvwmxg9uBwGjiHWvJTfN",
  "key23": "5SmL33eRTTJBLgS4rgVuJSLFjmwHV9o6KUXSqeMzCbb2cnHw9tG9sT5nqNWurxTThxTugKiM1DojQusZj7jSZsRa",
  "key24": "4q7PJfkjM9x7umoSUfHGXqMYp9MLiELT5rELJc8HoVv9azHRUJv4hiks7taxw6aJ3AUqJZc8TGoE9rV9Y6cviYqc",
  "key25": "4pCxU9fH6TZpUmN68Md4PrhKHKjyY3iHBcgEdAcsvr6QE3w6Nu5NtcGWXvRBeYZgWKQSBH2C1MxSetVNHoveu54L",
  "key26": "3dqmFWHhNL3EiBn6S5kgCNkVaX9EU8sRzSS6e5mAasLG8snHL9vtAgYbpvL1rHRsGbDTDvCzrvEU16MciTvSJsZ7",
  "key27": "3RWBtxvty3W7ygJ7rRyFuU6Db4qFGjzfi2oqpk6wZxox2FzzRza6iZshdpe7sFAmUFTCCQZaeSx2Mr8vEDw7orEy",
  "key28": "5guHoyQdcyAQQSZMyzc2AaLADepK8vwDQ2pSP8ZGTp3AEJNcpEAuSewtYzH57bfxCLQxZSkrYCsM5TWy6pmA2njf",
  "key29": "5Qgs2azR966ctHfBbkc7RAU73YGQB4heBRyi2TVScHBMqMcqhCX8YqMMLL11Y9Hq9Fcfn3g1uBF5QzzWxefke7gg",
  "key30": "2S2P1HbFBur4ruWYEFJiUdsREUixpXWmK62onazkHJchzaJ3sQoqnfU5n9t1pZFv9GNokxVULPBr65V79A9et36b",
  "key31": "3j1hziNDFHT9RzUJBUTbqpWUKRvXNvSWCdXQ1UemA9H4274eNMTaJCkWJXSvMRbuKJjNzPvLoUjNGFP66FVVA4g1",
  "key32": "5wVSA8T1F6L95zUK13JUDUAQbgfCvs4nBjqvDs6i2LmNgrtB5cy8hyykqTV6PXkYaeoFASZpaH52VkRgdLv8p3UT",
  "key33": "5RDHJFJu3PuCsnkyBYQ4NE1FRr1xEfmMnZNgpyw3ufGab3RUqeX35QXNkZxx9KBkUx6b5X35SngisdX6vSudV9D6",
  "key34": "QGpqBnWK6165Ra4c7FEdmJxk1nXPUoJ51JdVbzCbPMVeUGpCj9SBaBpaLtDKgRGgsKzd5VopCFS7yrYs3Bvu826",
  "key35": "53Lm6VYuPgVERLVnR6yd7C8ErFcc4xVQyCqBXudfQiDWLknzomQaFMDb2FUWorUSXmRj5JJSd6Us4PeDxLgVtXUj",
  "key36": "3DgZ3NvKXKpZRPtGdygh6zUfrUSsyBwCcvFC3yTC88VABNT6S7bMPhEKD3kbYux4jLgA1T9edUapN2nLQZnzoFn3"
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
