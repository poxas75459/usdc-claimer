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
    "4d2vYTCr68URCRYbpGFMSiaRrfhr9ZTgJFhaVpCV9ffTorMWCWTttoNCWXco1AnD1pWspy2zHnvc6aHr68kH6LRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQMMn2LrE8B4EP4oD237uuGvjLYi77aiGuLZkr4HZXKXu11MgsfdLYKUy4ip22ahzkWcqoMLymtbPEp8x6K3NpF",
  "key1": "45cCRsQrUSaVdv4npotY8XCaG6m72mHwcGyZM3SdM392WQyRDjrfVAxDfzNQ5rwzgadDhk5wE2Dv1rZNJFCsuiVS",
  "key2": "4aBYebGRWyvP4jzDJYV4YvM759QdYdbkJdk8cb7zuiw6N1occeyS3rnZg6gi8FGDdvNdF4cHVcDUmnLmP9cBEGCb",
  "key3": "CXwHcPFKcJSD9NgX4Pm3NLTqoYLyv4ovtGxZdaPjFMnLQQbpYbtQrujw7FUio7pUNfLff6cL6sT7dBPeaA4wPLR",
  "key4": "5GTiksHvFkxYC5JYm9PUfJfcyaLorMBvmceFMFgyXQJVi2BgvZwe2afqK7Hx2LBD8vW8V9pZXB7smnyqSeED2aop",
  "key5": "3DNKoemDFfm9AyZqoVu3CAub2B3AWiE1xgABAoWiW2TPfPHAtik5auKDq6ZgNqpMAVUeTHybRhVH6JQSTF25iJtx",
  "key6": "2XAfEzUEpTPfj5VXW8iDHm1PbZEp5ZU75pBrMXZgSx2Sgpntqr2hcGwYARwN9pAeon4BTcs8mYgaDnFqEmwk6VK5",
  "key7": "4nJPgaA8sdg8YEAKEyxSsPJ1oebMbDKTZaoJsKiWeL3dx4BxLQnRB1MNzUmzWScxuht77CGmHcFmen5vgCJMVEr9",
  "key8": "5z4p9gA97K8uKacL6HbfRbma5voDVm92wLzDuQWyDuCEZjZQ8Uguzikt1q7xSz8tU4uqMv5Mo6b3Q84jDxUjztbb",
  "key9": "4EsEGSYenB7uXZpYdDeN7tonvev2SD5WNjcdf1qPCJAfCgALxUXmQjnEwP2BCPM2ophyhPw3qiJpBBaUmiRkt5uZ",
  "key10": "4DUuKKwjT9YohMpCC9JvcG2b4rW14SVREAxcfqGJJx4GBcfYiAm4QJvjcfekpF6wYuCs1rmxzRZBCtyC9Bt25Fyu",
  "key11": "46MgnCfU8fvJ1AqxJ6kdtcS5NBw28opPevi9Y7ARjpGah3FArVcnRGTJZ5YY23eyjLz2rMrRHXVqQ4FDj7auefT9",
  "key12": "2bmCCno7uaKZGnfVW8iXVTPK42x3s743F3e7LQZvMw2oQNpZzeAVzbhPBTK9qiB4vf31PVLE5qd9uECGH3CenUMb",
  "key13": "31NjB9XhUk5opWHkmmNLVssYVkzaciTdkP6m53NMSTrkeDRVETJ8FLq5PiPigsx5RgDhVS6NVjMXaS6shMu3Pv1c",
  "key14": "4w7qz4DH5koUqjqTxqTBzocVhjrj3S5Vjj8VJyaK6AAjkPLwnEBLRXCNLbsnA3KsZbnYrVAFvZaj5oWdKE9esE8r",
  "key15": "4zFmqDFpD943ZaC9SwpfUmeAi6JqRBh2b67bCeBQLEfMzRG2JRahzoUba65nVwxyv1q6tMNzt9NV73z22KcXw7z3",
  "key16": "6hNMB6Ee1CLd6nTChsZt9tYepqi5yBzzNFt5TZDAL7unzoZ7ocyHuaQBg5oAXycuZCXEECfVDJrmuxshKZuBNrG",
  "key17": "52swKpDVnqJbUd4RYLMbUmMdZazVnN7k4VfR5w8TPNHcE5QPUkkHV9ufLNfUEJFgBR6enPVYaEoXJYoSYXihaLuH",
  "key18": "67mXm9udkHcomYnRFeYX3LxqKsLnqcJHGiAorS7E5CayEZkV7JmheM1jLa4JyFnD386AY69wkUmV1Z9uRaJVhRDr",
  "key19": "67KCDpgghzuy13JUzmjxVeFfyzkUg6bLyq4N2UD3CDqvxx9swXx3QnA4Tnz5itdqpcs8jtmQSaChofdGMzGBCDkd",
  "key20": "5RKEAQENuoL3N58EgJHPUJyELiJG1nzVEtmgFt892vAHVFP82sDkwRJnkPv35fcoXMWKXWhFP3usk5cbDqLBjwdr",
  "key21": "5sF4UiEJS5B8SrJSMp2J9P7dw3ThUKmFop1uVKL8VA1z3p71jaDsgrTjHJSct3ygQt1S8xGdmwBvCn7vTGtmNwzA",
  "key22": "3mSsMN2vzmkWsEpoMPmTa5wGdZ7rBsFCqoQMsu1cpdGBMcfjv5suC1WRjCDGs2PMjZuM5Pzh2ptCQBbb2NL2FYu2",
  "key23": "EC53G5XY8vMUBGxfpb9iP7cjCdH4TY28rDe6a9ztF1UACa3K3E5GDvfefo4pLLZmnZEUmnxAdvpcoBgAXpJWvrs",
  "key24": "2RYEQnZ7RPjzKmrhKStbuVnQHGYH4GYKPcHjD7tLaP9Q3c7yq4jSjjvqSfoFkdYdY242Y3siHPdBkF7hczm5Q5eq",
  "key25": "3WoGC8gGE5ikW3mn6gkkJRAZZKfryKYsHZec7tgC8MoCSbfxYHQY8LnGd1UCoFHmc6FeZJioH6pnwCeFmgJjfWVQ",
  "key26": "1HoG3XGtWeh4YYHSbMYWbxiDnT7ots3kLdv43iKQEGGxZdVFsg62XSxvRscgR1PkvERQ9yjsadsA2GpRWxqVXwE",
  "key27": "5FJXBM3KiqQhNTm4ysW29n5ESdXur43nE5uEfFfgUmZkQBchNmbuTysKwBM7ng7QGpxLnKpKKMD6gVm7U4hyx2qL",
  "key28": "5UKMmH8aUN8LbJeG2UqKhwwsXVtr6YexkwHfWUzHvtrdfFz7ciiqbRrBRG3nzsp8HqXBuC93WzbgUdykwfwv5JkV",
  "key29": "22kuGSGtsjYGvNWQUzhrEEz66JVvJs6c3Z6MBcunWZGJeDRh9HZoCuAR5vJK1zwaEmxmU141ZMYWW6GgU9o8kp53",
  "key30": "4xwtMCPMKZbPgDh5sfwqdfQ7pDtp8toqoXqxuuFFGxAGHFiABUpCmuEpn7FccFkLfCLYaFyxQWs4WcofPpNyiUAW",
  "key31": "2Ljncu1TAm3zg7i7yc4g6NtXdADrCy1tEg6o9XwpEZ9wcnETD9SFfyW25VCxCbEQeaoxiEgKyFhjmdocjGrLP6CW",
  "key32": "2iuJnXcqs1R1pcdtpscMkWRkT7rn1Q9cLrqirdwgkQ1ztMgvuz8jhRjCbSggoXWWorttYQEzdLGUZBGKK5ooRrFG",
  "key33": "DYBfaYUzCA7P5DtyKQxUUEdtygFad6E3vGxP3LSRy8CyDrpGmxmmqeZAN4BGh2rJ4RdYYfHqh1jkFSymL2opJD2",
  "key34": "2eRUchFjouwJKMtTuh4aLCVkxikxa6Nv3RKhNJ6Hk9EBPUjHipDV9rcXfuU5AQToG6vNZ3vtthM5DWLarSrJ1zpA",
  "key35": "BiQ5t89B5d7jsM7aPwxTj5RnDX59MNJykZi5TvutzaghPKvLf41jrEh4RseLPBfezFxNXVrxRmnMZUiys14Pc3M",
  "key36": "hiqJbcD8yJaXNNKbrgBdCqk67ByBtLBBeSM29RoXe5gtWLDrzN9CckMACQ8aHtuxGDaBsvHLCC8KgBVwuyYuG1J",
  "key37": "4e5kycuBCw1FqQDSPFXTnxdXn2kDNs5NQYVnm9vyGJfVMXvNqDG2fxWFzxmVQr68b7BR3Sm6a9rvdR6jTCi3TE7k",
  "key38": "4qGrDbNdB3wBk8b7BM3yDTw7LDSrfbXk4tFvPJBrVWHUyEfiryMznuBsVtSR6Vdsgrgzc7aCmSBFmY7bX1PNz4tX"
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
