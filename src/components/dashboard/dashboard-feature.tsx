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
    "37Lx69KD9nGTDNPeQRGgf7BfvpnvcxH3KeJVoffBypY24zycd86Etyi7aDDnUwNXDYcEvMxeJzW4kTcD4vgdd5U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Vu7Svr7LbtkUPWh5heTqoDe1S8nFS64C22PrKVsmFqNjrpaV4Nz1eXmgvvMdPGFcXhmtJT3cb7hpJZekYfpANZ",
  "key1": "2P1HYGoksizpPfZ8yGoAVbHVUKtZdMVt4qXrQwRLHXGdgaRNdRhGGN8qoPJi25BE7owU6y4AakJW5vydtYDQHE6P",
  "key2": "ma55VdYMoj4JSn6m4ndPg7vApDXD6EnjXsQt5PpTRzWYVAevbnj9aB36aknn8hZipf1FaFxrVeTS2VvxcvKhnkR",
  "key3": "4xpKn3PA5HPr3JQqF4Q4MrouvpcNxBueXF7G1xz25UF8zymrah1DXXDKFUxEVdKtCm6CYWgZt9heK5X8qGFWhvbt",
  "key4": "4zX9Dzxas6cZZYUUbLd2qsy6Eamg8Xz2sSCtrj6EyWsff9am5LV3qwCwQoXGVMLkc29jxZFH9yj2u2DBuiGRXRwb",
  "key5": "4LWv1Yvt9qKPDQEmD7sQypKywKzUEAuyumvA7aNaqkCup94oAB41HJ4oLmZwbh3vbbqNrmcnmxLwQcD9SuTsVNTG",
  "key6": "4Wcrwi6GKmPFWRv6cqEUN4BSoDjYLNEMeDiLuuR12XB2coGsSVHFLx2zt67Bv5gQ9R3yQ3UZJ1JufakhbSnBJHW8",
  "key7": "5S1HEkUCp38ooYzXAWHXV4meVmSoQSVmB9H6gAUxUUL5qVxz3JUquifqobk2qGPvadsBJ2TENKLkukALXE4RZSVn",
  "key8": "4nyJZxZkMrpMjWWJVrr2i1KpEsDBXW1tbaSTJvgESWgA4UAX74vxLqjzdpygjBqQST3wj9TkNkF3eNsDivkzrMx9",
  "key9": "99RWAupmd7USwhwuErZHkxUKs9F6EaETwMnXaPeECpADz1WGz89GzaYKdMdCycn1wmsnmdni2LgaqzqPPD5rkEa",
  "key10": "5jyfGzPgYKiuGKr1sXRMqbiMCD7Q2eae9XwUkrJUznFcq5NdJP4hLaa1hzbGXch87cSjNuYpjY8Ez1FY6PgtXKjK",
  "key11": "4HuACusU5gDAJF4HQTZqpKMufgkWaFfjLxzXiATgJY5m5x2VqUB1LnikDySJ8ZTc3YTW9dyzQQqtDjfLCviseLNX",
  "key12": "XYKEiAaD5gBbfjnJYWpyMvn45sxYTdMBpq81zcZ8ue2AdeQTYep9yzC2YuBXbZeHrWMX6K86KdphPUcxvYjJM71",
  "key13": "2GcdsFRiYSu2XVCwgyuibHeNmyUC5udnypsGHVAgQ2phEzEgigj9Wb59eHhgprL4DQUCuWqhMx5CheFVitE23YBP",
  "key14": "4vevd5cmT5cQx7AKQiz3Anfmo1vKhmJFDoY8818N4XX9qL3Ne4GKepSuHjBpicH39jaWCgQpATRYeEuV2ruiqwE4",
  "key15": "3WJZfbd7Xbap293acBt27bVnNjz8kKSE1k47ZN28nsuJ8kexM8aDoCBDFuhye6yzipqRuPAWCxn1gHpixDruWrrM",
  "key16": "F2pjjdSK3c45gfXdhUZgHG74ZUcv5M6Yz5DeFFcZTSETcKDww2fcfFsoKf5TPbUYwiCf4u1dPZfjReur3v5EyEn",
  "key17": "ccVQGg52xB2iHdAiRyw7ySxtq4yXxNXspt5FXp94Pvsg21g9F5xne19ivLrPiFTTkMx7dmPDEMWsZWWJo7W3R5N",
  "key18": "4jYm5xPQ4gL31GDFNCnVU1kc2cSkEVJqfKTddzQ5pkj5gA6YXV4F7eaANHnYYYV8LFv5E2WkpM4Gn3SjNB9nqstg",
  "key19": "2igD2xS72soAHBhB2T9Tm1umkstZgYz23Vhi9jvPuVfvtPRerv2GPZuxfLm5794zvppnUkoqihkGpuKfR5E2vsdm",
  "key20": "2BtMV83kk1Y8MX3ZF3t4v7TxmgPMJopr1gGtGBdS1LvzarGWW4YzZWQkymmcfTE2brKnUBLcYynQf6dYCTey7LCw",
  "key21": "589wL8eBrgsweQZHVSrmmNReYg5YwLDVnqomGhtaVNqTCAM4vhmTKdnX1cL6cgxbTvjjBTcd8UgQjFWhGbdiHYbB",
  "key22": "3mzmkLHirmdf6CPJ8vio8F4jHNfVqNeyqX9KyBvSGW8uH4pyACBYi48DcYM33RYB5vfNcXjhyRprhUkgD3zCjFS6",
  "key23": "3ur2Ebp4oeZc3Npgh69CJzoRfLAhhLcF1bz8CEVCQYxXsLfw4AF3hzasAHuwrpu4WNcv8x2Zjh8oSoaMdtE8ganW",
  "key24": "3REraaJtUE2xghnMNJ5HhbuMXb8Qxh3e4KFXT9RCst1yDUZ3i12abYjNmQMC5Tf2JMmK25oDVuveL2FZmY1iLm59",
  "key25": "2uagJGnZDcvupCdKKXwJZgcPWNme4AM5njNoeFZLkLSn2oaZJLXkHBupZr4XGQ1TMKvWKjrP99jxfLBCVw99koYZ",
  "key26": "3yx5mULBFcM4ricg25tdPUMfNAJnAcQwYb3Ek8Wibbb9EEirEWM17quQ4w9dF1JzFV2EXvi1Tf5bpMRtcF26FH1",
  "key27": "2oQqhccAhfhVuAWwAu6X2yj1JTAVp4dZhUJCJdPcpWEwY3BHaBytCtk65kP44D9RiCovgty6i3iNqvJNkJfrK6g3",
  "key28": "2zPGkpbeTuAnzc2nKvfUnCbXJXBDVXqXoTvPEVUWzPsjw7NRMgjouzJ6adrvG1NFCS7YAAwt4FmT3f9xWXP2jxJp",
  "key29": "4rUMHpZo3oJNWQrYyJkuxbBBfEsTtTSNCicUD8XEsvqkRaqoGKZNUtd3oev3nKijdVPWkdrMYtUuaC1zot7pzEix",
  "key30": "52dgpwuBBqrf21Y7KWMrskA8BT3YcMwibtmraSf62amrUM7K3xjXyTrwod44Sh4ShrT5AjxVKeTQGsKY4QNPdmno"
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
