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
    "2fvFMYiBhqry7rGd4L44o79s7xDMjwz7TkBxaMUDa8Mb8cFp5LMXXNqeQAT59iXBKgZnvbvxP8aMN8S7F6p3zWoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6XHADrarmD4BmenSPawpd19mTJPFfBpbfNfYZSvZQC6jeX2fH8KF4rTrDgd31fpJgzjqM8GgHajNLih1oRBR4A",
  "key1": "J5G3FXmGSUgS6tnFokYcYd5jowK351S1oHY84DbD8WPHA4sTruz4qmwpmAEFdcCcfQ2UbDdSy23bDhYDYJxFXwG",
  "key2": "5TQdKyDrq1ND93F52XNfULVKQ91WsWsLJsnAYRrEL7NdtokuwqQEVBeMGgEZkpSjJzp1GDG5BjjJxiqVpdNxAAjX",
  "key3": "2PE8zUx2WPNASC8WqDgdBg3isK8LyDw37PcTAxc36XM4fmqcVWE95J6a5oUTU8RARHdNcJsgkTDJuSAnz6LxroHu",
  "key4": "3Ch412QFSyopHps1JMmgStgEUpYp9XS2RLQRwsRrcrqMaPV94YNqFEMbkkvzmrXehVwEqRk4y3BJiGECcfwqGS6C",
  "key5": "2f4bNoSmdcR9cVX31GqRwYbidAfHNuuCNvrJk3zthHM3FipSZiyCa6f9mehGrenbEeMYmwvGQAxeHofKsvX95HVa",
  "key6": "sBmQLBakpu2pHxzKjkjbqkPK8fdCVXik5HAYsATUM7cXoDRiYQAynrPM2BCLXUzdoExbe832bp88ocZs5e4vi57",
  "key7": "5eGgg9W89fkRKb68VDhoBGERhigrsDdFXqYzAkUfCJK2JHZjD9q38CUBefTgCXA1KGqWJBkhvu4BR7rMmTNCtwSd",
  "key8": "2NfL3u4aDZ1LGLuA5xxxF6A9dcy7Q8QNEVD13HvYp2hN91QpAdaM6VzvpVcEzvPiBLfhhorsGH8mGp7wwLbtpenS",
  "key9": "2GBVPkPR1Ji2t8p5w5vSyqZEq2GRXdvkv6aKeiDdpJxpSzM8wzZ9skH5g5BeDvBHxzeQp1n72ahp7mNU6Bi9ukzY",
  "key10": "27hPZPucTpK17mtcf3mnvMSteJxBBywSJ56c38KifMnWG3W1TCDoZkwmT6Pifj3qXmNuxhF8ZV7UcMHdpVQsfnCU",
  "key11": "Da1cxbvaecc8um4KYgtEUBKgpH2sxCpbhnpn4PnjAaU1zRWKDPQihg5UGkMZrED7zn8RJmMUpjy73x4gVNg2QC8",
  "key12": "5sUTK7MpEqQZKbkXmHEbeYjpUkCv44sE4CfGSYXa7uPJwocypCJDbR6VZtQCFXsQ9txgZpLdFsWLBBF3pn6aa2bw",
  "key13": "477314xkvxo1i9RLY1gBdHkVhGHyP82qyENhiqob54UNUGpep4BTULhRc3q17L1Eer7iFsuGaStdNNcVn8Qj3pyM",
  "key14": "4L8bgwPyovh6ARSLdG6HMHsQwtWsyU778fsJV8jp7njjR8qFHJ9EY9HUudjDpgktj1ptEWWWYUD3WYJP2uxqjusB",
  "key15": "4R91ew6dryNh3wo3BVWCjQv2ckbKCpeZLZVbcD1sbA8QxCCKGJ2j4xZFGNWkad1ucoa3zzKQgBikBQp8nRkJXtAQ",
  "key16": "UVowQmiHdbDSr69smWbVeCA9UWSBucLrRHCajAJrmrcfUdUG75RkxGnHXm532UfXSTvX4gTar5YWhu3BybqgSS9",
  "key17": "DmSfMENuWKV8LQFcU5XYwPmpHHxKEVDgiqTcSvEGsEmiXdoeN7CZeJkwRv6374qYC4rKMpWAPkDtNt3pGcKKq4A",
  "key18": "3Jk7PGWJ1yYHrqZDo552F2uM2TuEdNShTHn9c2s7cRXhG5xy6sJTrmd7G8zrcLteo47Niq78pWwCAXmiqDj6sxzn",
  "key19": "65UMb4Zn9841ps63kePufvVir99qNvdbPee37BGkog8cqehGUeEznR7UNmvrnQoDuWAsY78Wm5px1ZArqNeu6YPA",
  "key20": "67QsDwcJcCiTuqLEa7HdBKABngWbRXRFpBoqFxajqmUyfrjhu7JJJHJ6eLADbvmQkqZgwDmU6WmPvi8nS3emM7Jb",
  "key21": "59N4nrqibqQqYp1Eo9jKJ2vpZmpKEmTzWiByMP1ut7nJL8jSyPibVzLqTJ2qpk6wc24NT1DCKb9AkPQd7xY23xhm",
  "key22": "4UDNnFxUfEAfsibKS57BR2GSTtg37CEa5EyDSE8b1LXofWA6dZKVphv59g3U1Qv6cwEAk6dHENqFQ8NweshpPErP",
  "key23": "coZUrQCjAPGgzNDNgP7g5D57quzZnJrdJFLLPrs75sTvxxPBJj36uM3m1TVuPnGHG5brAT8v2XKJh3QUpGHVp93",
  "key24": "4nS5tZc2SuLQ9c2J5jxEt4vcYJmmB9zrMPYyKTg8dXJSsXm7ZuJgaYrVJVSJpvz5mpjZD6sp9w9MCrYrnWBTd9EH"
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
