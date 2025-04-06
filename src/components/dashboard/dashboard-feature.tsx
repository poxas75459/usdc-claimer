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
    "3RWHJxRoTzpZcfZmHkA733wVJ49E7HtYdcwVgRtFxXLf1Gr6Nk8EZoSVZNnTBVh6Yu6VPdvDqQFEKjQvsWarJBiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VduYEst947vjm3uQH8bgkVgLm4c8ZgqNCnGHR4YKN5m3XdMDTBnA6KxtRzmbkrTwk9NPVk7PRg9CVpgaaWSq7bA",
  "key1": "2eYyCdCLGaG5R3ZcYCyiqRVEcTw7k65tmzS3rgocfxGGLpwhrNJiiz4RdSdKA51hSnDJNMwUYHb62Hti74BXTbvK",
  "key2": "5G6rKF4LxmxizBTFyRDrTBDd8AJambs3nHx3R7Z1rwDjyRNnzSdbHfRCr9CAnVn7ZbgYXUjFiSJd88CS6w8aUJkk",
  "key3": "2SodBJySMywM1AP8ZiyRvaQYDWrA8ttCP3C1PLcot7kaq6AYJCDcLV1rPfBvKYagtC2gamoHf2AYcUYr27hvYXo9",
  "key4": "3ivrRmp6iM8PLwbK228ssdSP9GEiTQfUTNWK9VRqjgmhSHT5VaYSstGt3VudyKV3KrDQXDTWyzaiKHgaobnye9kM",
  "key5": "3yctHq8AU7K3movdzM9BeSS1bz1mGUhwfLYVcsvbTKi7CGEX72ALfqVcWgLRsfTqZcKVQTgowvrMJSuKomjQHm8W",
  "key6": "cTTsURrgFVFKHSnX5mV5o9uTMtZcn35VK8fANMTc7TUEgnLd3kGpErYfh5fvJEtBXpFRTisMcuw4bWPJHyNs1Ux",
  "key7": "LBnj2UQL9TTh4j3J68Ev3LqDamAehykFRKdufQHvjKwPaXbrq6zePYezVcak31auJdSpjZDbZyJ6NeBoopWd1bS",
  "key8": "p7MJMkZ9kD4kCXnLzLZ5LV7yeeK49HxpocbSGfugpkfwcXZc92dbADrv6iqGnZYDRvdLyhZYMaYKiwyoPRtU2Zz",
  "key9": "2pRwFjwJpQyxoJmNDXaUtkMaY37zPYGUMeMDAPF38dSJ2mikYrM3K5S94nJUwStP87yK28CZHpyMEd1B5krjxffM",
  "key10": "49Vzvm83wxXEwBnbTJUuMMaw7FXTMHFYsdB7BHSgGQv9fpzjaocNQ3LCUCuLMAnDykfBGA18vQFPWo5EKyXA5wgE",
  "key11": "67cpMfqxSFQMsHB8TAPWNCqYPD71EPrJ5DdxegazRcLvbEKn1KfU1M2yysfnJ3rCDZqDgH7Z2w3E9vRCKd513itK",
  "key12": "3PaTPvYBiiH5XTtba3MdUu9CojqPZfBn93oD96NDVbd1zTKQGVnRsHyho4BqUkGQNhGGJn3CWZkDrK4V8bFnivLm",
  "key13": "5r8CqZZxzRd6QtJfsZb3fGAdUBiMtxSwbcH8g38dJSiiYPkhzitSBjBD3AbiS62UZRet7fzthZMc3gRJfeeFkWwX",
  "key14": "5CWgtunyQ8BqiyA6MXk8FEjtQ1UzBM5pXR1L73sdNPzsJpAi9kYHj4FvNE3BouhfsN3ksmL7C1ZbHKNJx6PXkQHG",
  "key15": "r8342X6mPeRKNt5DKVCzCdBwLjzVfq6Sv5e9A5v6HSSy4bV5uodVhF8wRXPNxbCPM6LJab2St96Z2ExTN7qpKpJ",
  "key16": "4J6SPLuEYvvmabbTsBPZHTqeQedCkdUq9C5RcRhUmeFcU5dh1kUGqUwXxTJayKsrBrct3U5hPYUvnSMQnzSKAX2F",
  "key17": "3i2eaVbkY4zqbh8sSyKsaxC4YCxLFNSmU7Md8Fazz2i2hTzkgtAbaZFGhWXDJb2kWVpxrZsAG9Pw9xzVW9AL9X6m",
  "key18": "3rKr6pDnqdVQUx3PwBZTfgVwNo1Eg5dA459iWqDG5MwJ3LXm1dnRvVZKTVMsFFLP92fvsXS9VqmF3quSHt3K8H9k",
  "key19": "2wqL98CuQYwvP8FFTzhHY4LLEUo7pF5Ck49Fd4ayP5YkGNzkaC9bvweqgoXJYKNuXD4MD5bCpgiQN3X7fYxSvCF4",
  "key20": "56QxEVJHHrD1TJ77PDQr2mQkuANtnb873daCYV8tHjJvb5LduDFttTj6m6UJVAVnpFzLvaXqNyQKCv9MoGD1bXEj",
  "key21": "3GGRwV9cJqyNPEHxAG2FRi9zVxFmyEfNJ94a1CdX6zxse1zxEqDq2ggbdAMhxrZQXY2bpfiPsJyix5gXkSj3q7UJ",
  "key22": "5MqnrnGXU3MR9MtMJmDgNiHY3kaNN4YXXJCFhEeVnoa4BPD2deUaWKE8zYmXpECE6X28dE89MsygaPe4fGEXrt6x",
  "key23": "3PkPwt8AR8SoSkEEcdTa64LBu9JDYtWm45ZS3ATJ8r5UVnAkU9jmyasfeEiirAzc5DE8ZZpBtZhyAugN5YC8Y1Bf",
  "key24": "5LKM3NsmUmoTZWm34Q1LGyvmTEenyBecc2TXVhr8jMhCiaAu4TsN2C76h3RD3ZPe5tu4yhiy5DTTjDejeKUQieEn",
  "key25": "2ekvR3YFEvrSZHcpVmDPkyVx8dc7D1eVXGEWoCsThBJpM7aKuAMjfm3wBMgh8kJC279FwEfofQyLBzjJRicMofeA",
  "key26": "5BXGsJXZaLL4dBK9vgfTHdzKzt9RcEx8dWDBY5HVPgU49bpdpPGe5MpA5mNEXqQzgSG6cqPLfpyTAid37DpX3Gzo",
  "key27": "4wYLthBNC13ZVFQKMDxCANfLS8xzZKBdKs1hFaiyfZ6MUkKoyQb2N9EsRhzDcMBy6C7jmBw1jZnDsQM33wWeSAZG",
  "key28": "3DumXGqHRy1i3xaNKr6Y6VdG2pUadogvxeHhKm7TX5RpK4tTVeHLd9dcbRNkEC9rur5UBSB8v8UmoYgzmeiNGjo4",
  "key29": "21yK9TwQYg9H9G9reWbvjVZ3jJcMQSVJ7DcQjyo35ePLgp3PVyHfpkHeuha99vdHagSiUkkRiFzCSCeodA4j6sUD",
  "key30": "3far84CjbhFdyGNuGT8AZjW7JkSF9z2BeJQM2uHCQd69cSr4iGVdFxisiR4KuwA4BUZSVwYk7KEGUrqmstN17PNp",
  "key31": "4jpua3935BmvfnSst8cMFmNVjMPYvuApWSRsWm2jEPvqZsUDZ8KSgyHFEA5NNnEepxbeFqdvYMELgNH9Ed97pPjF",
  "key32": "3HbzrCXo15rifxbNP6Hnhx79H5qdchoVcqUb7onwyPSTn1oXYcxLTii86ej33Sq8sq1uUQDSz1W3ogtSRFy2oWtz",
  "key33": "5gw2kkefiVq2hh1H8RGxXw47hpiaxQxotAEjSHuozd1Bqbwy2JPdhwr6fPeLyd8zzXZhyfugk8oPQUXnsoMzEJoU",
  "key34": "2RS1FhFc5aJ6AH6LtqaEtyvjYQdQyqNYTaW4St9pvVYixUnUYJmX873xVJutrKUga8wtkVvT2KscxfEascRY2CL7",
  "key35": "4BnS9VsUUS2chtYWsoFeMRf3vgbU29QD82T5y5syCPViLRvTwhNJ7eWgitCL345uqGfZ7b6HKkc19fJKYFbxuhSc"
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
