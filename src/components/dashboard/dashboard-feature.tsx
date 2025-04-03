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
    "55YgSd2PEi5vfDkzdGnhzCRznewHzEZiUyBi6V82FM7KLUmzAcZrapoJopw1fpibZRWyeBqfiZuBygrREJpAh35z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7frF2tQ7L2JD3yDqH9vSUsbf3ConpafXS7bv9nhp7R7pQbzxGfJAPPgxQYsU2C1K8HS3SGpe4bY4TG9KykaxzB",
  "key1": "473tUGQrQHLfV7d2XH1kmvkFVu1YUVmaptQJNXPL7HJ486n25Y9w6qQh1JXdJNE4Z1ePUG7UcVYYXxnMWjPNHZxJ",
  "key2": "KVYQdToAi534fyHArfZxZojH7jFcatte7truRZuvdkQcPDARiqDQ4tWyoY1NoWVGyr8ZZiQvkop7bwcs7hf29WV",
  "key3": "662qjU6qyjUuNmeQXEH34DSgFAt8drS1bmD9Y55ea6xN8iLK7XwiuPbtTbWF68qszk9mtxYvAaYgnzNPU32GM6UE",
  "key4": "3XBUXKQUgv5fyCEz6rCXeygcThwDyZUm1qLwjmMfdXM7QnxpbqBSJBY5jWQ7xchTT6t4jjn2DyAfx8RQCUtKUwLv",
  "key5": "5cTTP1E8s32TThwesUWNcuSrxCdyUDueVEqMScNZEZeLMqGwRv9CE3foVZDLwxrtFb2CemGUFHPCD9VojHAc2uZk",
  "key6": "36md4pB1hJmuM69CY42VPzguYUnriPkBrNfviTUDE9B8v3geGik3qaaazg3rip39bJKTJoRetK93DBBnPmAGx1in",
  "key7": "5eGsQtyUqiQonKcKzVPqeqzwqcw2bHLTniMVDMTL4AAXVUUhsRB8E8bjLrpmGCJT5vXhdRap8zxXZfAyFr3koL9o",
  "key8": "398exwoFeRk7aHjNTAcA7hR1Pxf8VrVNNYbR3DpiEbtssC986kt5dhC3e6FTbLN9mKtCoMAPSsY7iRFCJWh6Ry9F",
  "key9": "5X1yzroZQzgQXSCo7qAR8ENhptVUtfKidUnLtgAGYGeXep57fZSmRHACFjPB39L69ULiNvDKF6gNuUQNxDb8h7t4",
  "key10": "3o7RNKPKUhKKUQpdkt9rxP2GmpKHqRCvKHELKs5QQYXUzLM1Z2VanC7yVczzcQZctcRwibSQnn3ujKSVD6VNm3s6",
  "key11": "5RbFBCw4TVzT8iqFybzVHq4gEhbSpT4RkF1STjSM84e1qTt7rtunHefjHyfJTwhJs3Ut8xayjey18eixviJhdLsA",
  "key12": "8bWKHEz2ATtCUrqewRqBWmyWdSarMVv8RrAghJ3XhiFpj5c82wgNZ71sBXqaYXTzPpwemVh1bX9hCXhvLPwA1Tr",
  "key13": "4xYt8cD24doYFRSYtQeVRsAWPZacvUEMmwSSLA1c3DE7u7minWibDZMNHNatf7KTpde5doei2f2DwfJHogpu9jcW",
  "key14": "2jQjJ6UWgih57zhkdJH45NMMBsZp366kZ6ZAuftwoawwsRrQjK4NpjP474UErbKvC7XhVxoRpcVUTvVU3LPvTFbp",
  "key15": "5uLgJRmxohcRTMXb6EubpNb8Z8vEoaNQrNk9mXLXQA9Np7CA1FsSYuUd4v1HDJoCJY45PygnGAry5PudYkgUhmdY",
  "key16": "38s83Ugf3aRhYh3pQnqxKX6YWD3yAUmUqpbbnSaofTz76p56Kag8rR2SaRaPgWePJ3tzAJX4xWkMexPmMtb3ELbM",
  "key17": "28ttA6KHhqgH51ADbWHPnvNiBUKUzRw6wVPtgrzxmGnrndvZMuNxqiHNAoc2J8vCyJWtjcCfrznrp7amUsakoKiz",
  "key18": "4KHXvNEvkvkS88p8EJnGWSZsMYtuWBNEuYiaVtkCYc5iF4ocLBs7Dx6sbc93PVFXzR6BwdZGnoNGkTPNVqk36QL7",
  "key19": "coL4EhKZXnsBpihp3HaJ1JrUiW7iVYe3Wp5GVE3QhuphE2XbF6E2vkBAZXoxeraKPkMXKUPEqjc2VurYgDPjJDm",
  "key20": "3pzaXEfeavjcw5mucceCDMKECC35EcSvntEo5NJSwzh79WPA4xt5ySiQeaMKD91dPi9k19b53SzJqrdR5TaFY7GE",
  "key21": "2XhjoFizAoDWggD68hF57yFK11s1ZmYCFE96qtuTCP7FLteYxrcVgbDwf8mp6d4EtPLmHnQe9h5aocFmdfafXMMv",
  "key22": "5o1bE8SfJkj2unkG9WZThspdQbaymLCpzJSVg7VpT1mj4qCdwni9LbZk58NUALRZeaRKZngwUnf29HFdgPFomDfY",
  "key23": "o73mxFCn2BJqjZ1P4zNDdiWBgigHXtqcgs3oAJez1n98zFMBUmZnSKMvuwaDK3igsTvGFkvZeZV1tW6A6DfYYZZ",
  "key24": "46F8t8uPYb1KoktDEEhaZ2KvVoQ4YTYxN6w6U23dbjAuxRicAsDBjtyBvnXzUXA58SXrpgNvGRPAg1AEo8i34Ldf",
  "key25": "3wfJPW1WBvyeFeMNr8jtmvC1cGPqDUMGvkWJ6wZNuMHvLjydoQy27irUQBaRrX6FhiXjsd4HoVLfsVPkBmJSkwR4",
  "key26": "5LcPz172aLkFsnyHp4qx8zceUhqYrmkXc1NExg6zMLAx91Us9vufGDae2vikwTiVZQz96C2MVZsSWPz3NPTxBvnc",
  "key27": "3Nw8GDnyLyBHw41YKuRHxmRQCutJx49ZhgHGzy9Exg5AUYX6g3opRP2mvKEQt7sqvHqiHz2Gd6BqdAp5kXU9fSKH"
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
