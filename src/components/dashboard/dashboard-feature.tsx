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
    "2FCFdTfLGiGkUYmoECMb3SFdopeHzdyWaL9aSH5Wu52y6jrNXvsNf51mGbQMG6XqVMDha7oXurSrHCBsFQcru5Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WL61ijPgFWUHtMD9CKbQvQbS6LfK4DYaBhEgXhPCDNSyAZRUDop2RiXHuEv5C47mA1UeuHmrcBHZRKbFzUEETAP",
  "key1": "p9k7QiE1UkCkeA77csoHDksA3nSdT7QkMZ3szokuFZojMEk6mFLyGqmf23arzygFzyT7DvRmwtRYchTwgtzZvgQ",
  "key2": "3p3G5G3f488xhDsjZn7trMQ5rBbEgHDwBz9yR8S4R8NwxmpYyDpU5Puk7DLYvH9Fx2HR7BG2MpqwFqz7W39HqTuc",
  "key3": "4gNHXDVnBhbESyeeC3z1EpMe3iQLi6rq7oQZL9a5HqBZuegRjUDK2fS2JBfAy2C8L5ZtYESQu8TeHPKqSRdurLtH",
  "key4": "3EGswo8fsjWkRwkQZqzHQb94JQ73A4Pkb87Lh7FbEY1RAwcq1AiRMBaUSqnKJMaDQFFqmLKUbHg2UukHp52FEPrp",
  "key5": "zA7ECjAmzTZxAviT18jXL4zGAqh3pEDbNVgmihM3rpke8sNkgbzeWi6JvgnKR4wfpmhUdgCNzuywjheiAmEawjy",
  "key6": "2ydMAewPNVponwn6Bik2thNkm1JeDc4H3a39MgTm2uzaB5qYj1LDWUuVXT8DJFDRpjaoERhP3xyFhwgv6gZEQQQp",
  "key7": "2ELQfGLVKUeR3wyiLEc2cyLno8auJBSn4iULz1fkY6NZF4KCzq9aoHj7ukQ8LNPd4bk9d1iKim7DJTUYCUcGPhcj",
  "key8": "466yXs2VeDdGEZVp9nJeHAwinvoRM2PDdvhnzJu1fGVfjw3y5Cd2cjCZWs78QUswBnYSe56WcphoQoQvc8nGX8zy",
  "key9": "4MxjR6aUwJbqfaF5WWAWDnVJ3trBLPuso7ADmJabeohpDBxP6xzr1BKAVGv4SrqHphxqhTcw6aJCFkGqNzKSaGAv",
  "key10": "3qVntpETFb5h1AdF5mXYaEhXAHR8xR7NrqAJmfdhHwU62EZVKzfhtRZApjGHThccJdoZNUzn2the8g5SaDNjR7pN",
  "key11": "SZeqvHCHrgjewcdh19uULXMXqayFjg4wdWmEgSvZqk4tgmDgw5TRvcdKcxGbkcSQwFkpa8U3aYx5zXWopVgqYgq",
  "key12": "3sZh5LaUsf3f4AmwNJt7Lby8HFRKmeVgqUin5s7KDi8PTCjgiebkFxiMAFe3BDvkFh6UsupKyR4FB8vjg7BqKhRj",
  "key13": "3QNew6cvHmAYPBNEChKEoTQDrJNiLezom3zopoPCoVontTumUpD7P6G6f5DrrDTCXhTntGRcgtJYQSxDNX7rys2Y",
  "key14": "5Eq8VT5GjtDoigbX5PozQwMSAg46MtZYGjCmZc8iUuC7reQSs2DfQpGTH9UCYXoZX3YapGNRsTLpbChZKhGcg56C",
  "key15": "3QLwRApKyF9nGSmPc7uMN2fXM2i2g2zoX1uk5NEXVZYU4SwUPVqm3z8AteNerJPunUFmMDNyw7HDBtaEBKS2fLMk",
  "key16": "5hNVTCukhsHFnqz3HAXt7PEcZdikARXe5hZA2rVVhESfjWeHTSeYQVz6jxxfLXoGKgt8XS2ZhrVL2L1PrPAMyJRP",
  "key17": "2KJQ1SFJY2aVNGScewdBkWU6PsReD8SCiF8WUsZ7ErhMGuRnEVjgNqjorLsEE7Bb33eHfMF9rkPaDZoiKr5ZJzAN",
  "key18": "3VKfuQcihDzAUXN4Eu6M72LH1iYRZ4BYkkeq7AJLMqGk1z1kJhsAgbrrZ9czXizvw77ERMcUjbEaPPtPs6tuvPdt",
  "key19": "432sRKkinbF1T73G6vdYRvULb3ZhRuHiLeEns7rpPuwhemfgH7XdpfgbiEJ9HwmteF92t4urLaE7tVkPFFmA38fj",
  "key20": "27U6BD68yV1F4yZPnFxVoWCnp38o9hKNgDWADQUXLvwQUJ8bMKVHfhQFPQcxsXQ1VQB5EgP2iZgoUB2MFtgk17Fw",
  "key21": "47KeHLqRDXqPQEoHBBHzquwbKKD32d9ANvVPeTpSG5bxv9JMD1oQA2ixjx6RYjgeozkiMgsFyr4xWMUXqU6Nhq1y",
  "key22": "58jTtShFtC1uLVfcNubint5GmArCCDGyDVEguKGVZ9KFcV1gJWXPG2MT6KWu2E3mmqTQRRyPonxFbmPzzhQYg46G",
  "key23": "5ptKWJsKzfyeVpCpgoCLhNSKVkC7CYgi9Fr7yCCimCai9YXUNFBqjJpJwbU4nz6B155QckGawxRBgYya8BpBTFrt",
  "key24": "44d3z8WyWybDRfzwAUNS1gaVZkhhihetM6HdKU2Py3xDduyMf55SUuMZMsvKwUFGLWfgRanjJHSbHR5U7meXZ6j2",
  "key25": "Tf9ZZQFTQ1Ua35J6VLaEjwopjGtTnSyFW7VL7vjiEaqRjGNhtbWNjSaf2JgX7XNrYp1Mwy85tA43bsAuAD6Vahi",
  "key26": "4dZVZDsxM4S3u7FaSXweNcMRGEVyzC3AAgXEqNXFM6NDdH6L617kUZzyUiD283xBA954U8DxvybsjkjbWNh4h9Ut",
  "key27": "Wh9BKcxv4KPKzbSAuyqJomHeK2r7EyyVPz889xcSYghMsp35whcGKrL2HgbfgkPBLDtbv2U3tb8NbMcWFwHhvoP",
  "key28": "252HUUPQF8ZNXxf48eKsHPJw1WewC3gkYBc4PHFNEvnkne6WLWHXYSikSf3a93KoYLLjTXuasPBDZvZV6wNynWoa",
  "key29": "VYZUj4V4LxKxFeJTgY94hfdnqWzJ9ecHfsyD4iDWabD3JCPctRdAgTfjkzTJ7JQjkcEzKUKLVafzFw2dDB36zuu",
  "key30": "4mmq7TjAeu6h5qsVK461xteW96HBLXnbZjda81b9mmawSbEq9Ddtz1bjikKhBgqZcC3Qjm8Gd7csLWTbHifJhLkA",
  "key31": "3cNHiaghZ6RmzyxkdDhx8nj4qhhosQxaX2zFmPdUWcsRZx8PCcDKJVLieCqWCYU6vDkxMybo2JFXknTAeU6aZMvR"
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
