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
    "5DV5JjJx6GCUKWByHn4PvqeDTxcJvZPnJgrjYmGR8wTEtqRjJqaiEn17ktdHDM8rHZ5jJvCukXSL4UsQ4xJUfXJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPDp7e2VtirbJRUQRfH6iZcq19RAhaverGiBCxheF4TU6Gqi1GnbNzS35xMoLhawpxmTaRpid4WTyHfTUR7TXD5",
  "key1": "4gQZvJmYGqnrShVN1sZJT9qUzbVtPyqaKej2zUUsuzsFwgUscifrSzRZibN4vxeNACET65bGVrh156WmU68fg97B",
  "key2": "2zAYaHYhnFBqF4j6kNpQtvLC6wdWX8GmzGcibHnwYfgHuYgjXwpYAArSyW4yQqWyQzEbHhFPKxpTBG6NR9xgroMN",
  "key3": "2ZEooHakbZk9nbtVwvQrv7dCunKWVDSa7RotAuEVprRnnGufTzrq7fgL9VwM7YnPNr21Uo91Gk96GzY2PgbyhMek",
  "key4": "5PwXAyv45s5VCpV7akGxohhJZGsFgYoKgGga6v4EEZNqiPudwfhjXJRAYh8Ho1C5jDVxNVqPWp6qBYrATwK2u23g",
  "key5": "3sZ5tkitd9TNixh6e2udFFi1vA1y9xssGAvs9d7Gu99fSPmKZb6m87S4XrB1ngr8RY2fqLZXPN16MnWL7F845ktJ",
  "key6": "4BDutjAx1mteZnN6Cf9YSy3aE18dC6aM2JkcuSSirycp2VK4Ss5UUmd9pYXk5qeKvMCoP54Zjr1jfoJDernemEGi",
  "key7": "4pvrVEXTfigZZmRWo5vwpK8v2fnTWAkPJ5wzN9awbdtozH95iEFogCcmi411uANsuB5f8RksoEFgz4pCAWvfaUXX",
  "key8": "5acZwFccC6sUoxRTJnu7t5fxascru9pQxGFM4mw4Qb8xCtBQiEZCsYW93KRcaNhc5zXrqcFBCrz38C3aLegfyfXv",
  "key9": "5jcCX7s464ZughdfFnEpzJMhnjYgyx5RyxK1uoyj29FiW6uuJqQPmanYpKiDGyKRmqQvVnYA7neeR3dJkPAsr4DN",
  "key10": "2ZHxjNVWRNYQfDuonsex4BDzKWaFznRKoQWUz4V2n3qokqeoX8LxcCJttEz7cYhgghzeQ3A9BjkdPCaHVfdTGMfU",
  "key11": "6qwfD44NTZoKHAuZ5fUEj2Z8T1g5f7pAN4GX4nXcPUkF6fLTrzb9M96ur2PBCsxa686GxmaFYB6532qLpvSDmoF",
  "key12": "vKZ2bLPS4J3zuQCZyypUosVSa88CjLy3j9e5zNh4yTcRgUoxKhdX6e2U1cctRAXwkHyiPxDSbMeEvTT9t5v8CWJ",
  "key13": "4edZKTaQHDzJxkjNZBE6Y86ttzfVyJAYEHzDRLtHdhfnLHoqNJMop6ZjFpNip7itnoUpEFGTQQGUaXR2YmCMNzVP",
  "key14": "5D3v7KvhjZCrZE12NuUiX9xw2Vn1qjRj4dBgcJjttMbaaWZL1kjHL7qzffkmjnGMbyTfEPHWTSJNqDG35rvYERMe",
  "key15": "4f4J5TYfSutKgEnDmfU3JfYoa8aWJP1oWLthRX5cEKSwQ1qC4rq3ivTaj8zttfwuWXZLQvnR1aHDVpgNELHVjgLR",
  "key16": "4fi1YfTa7EVE9RKWmizcnDc9nYVk4DzQM15XajjNJ2pGTnWHBaxDuQkVZG2Hw5HMSHB5pumULjfLiF1fihYHR1oW",
  "key17": "CqmE4t7inpPH8pFeTcZrQCqT3x7bwtQrjRPHAx14ZYgKjbyArGENod7CET1RTUs3y4ePRZJAMTeEa4EgSTPgpYb",
  "key18": "GQs3GErq6m4uxdNAuXrGpZkjUwB7wRioaQNwbzxgkPhSh743RKw2xfhnsDioGdR5mNaT5cAvqn66aw8t7RcEsVQ",
  "key19": "2xvTxd3QYNSxVK9z2zL4dc4v8HvDLEYo2RLMx2vP63WccJZHYMvPbEPMuZCQJqe9EsyFvCmmWGEJjGzavcrTLU98",
  "key20": "4sbecFZcE9tx9bdTf7u2AT2YscDr2oDKL7S3YFmGcGR7vwCoVmeLFB2ULhRGA3eSwCZAs9WTtrEwZyoUFX1Q16uk",
  "key21": "i7Q5W2U56i3fqdgdALmMsobbRLijESWJuwtkbYH31MnWqk53Qudn2c4Lup2EdcupHcwa2r8eonPB3WwMuxDTRLU",
  "key22": "4nTm9UL67PtcEY2PXiYhZfeHkVC8XLozK6obGa4MqrsKhJjAW9Vx7zupZNbaFaYyBAq7QpZUj9QhnS4GrVer2fVL",
  "key23": "ahnmtNrZLyzKPygC4LVWq9ABKjSSPDWbtDhzjVX8632VrnQsqHk8mxPbPi56CTDEukHH4YEwWdLY6KftMZGrFpU",
  "key24": "vHknjz93RiKniEvJrSdcQb8Dnn2gRBrXX6UUQXyspDPd6r4C5LbkQMURHVNKt6C8d9fbWSGjuPfX2cHLhDsZbcX",
  "key25": "ZkNJ1AzpSyBCG93Yc5XtdY9nWoTSwcCapCSAJTrnHjfkp9T327VrKij8SMuoh8XswaCQYVUNkEUYRKUK3GH2BMP",
  "key26": "5S7YmmfgmmTuPFJveJwq4cUGp3JmPo7ZrbPtRFAoMLqvWMY4k3rcou4a2XydUqd7U9Xq1spW4ANkYsKhoZHChEZR",
  "key27": "46VjRvKCunVNRVaZt359GY5SKVdcwjV7MNTzk6ShLfAs4jT4AdVVaHHTqZmrhciyKUibb6muxxYmqxDmqikUhgw4",
  "key28": "4a1gMDTTStAC7E4reQuuPSAvtwYpuBEoAcaVXofqSJUMqADWFjLrxWZfwedh2E3RwDRtEcJbiEhZ3hgzpGJrTqwg",
  "key29": "3pkLGBg5EXDVtXhg1i9tPpHmvMmqwGrtPLDsYDv795U7W45Wn1qCq8kCnCJ82BspfKgMdtXDZKc3dvUu6WavQ69Z",
  "key30": "rVABSCmb3dUZ2kHViQqbb8p47824JiVQ5prPoWNDUxuhdcZSDj8CTjDs3j6cEi5ux9AoZXJwHRsbvbFR86kVMoE",
  "key31": "52AKTj54eeudfwp1v9FYS42GmmtKoJg3gSbcopc7ToAnZw6DvPedJ1eDkWLaGDPf6TEH9umBJQJ3953x1ttPTfku",
  "key32": "66pDVjuMGS8CiaC3BDF6gA82W6pj9eCVkcrZbd2uXMHQKsPxmtTkw616PEnX47rJC71wP8ahAHqL23T6oiWi5sxN"
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
