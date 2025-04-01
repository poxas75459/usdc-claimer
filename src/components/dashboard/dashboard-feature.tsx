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
    "Bs7xc7LtrpuEH9k5PhVYRdXJrEHMGiDajFuAJe5BrXTJA6J5p9DrFpS4qR7ypDDVzCmLpPV3P4QgGJwEYtrkh7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VvD34dyVzSCqjhRwvZcJ75UVbjQneLWeNPTvvzHhcBTy6De9TAVFmasR2NDuXU7RvNCC7PbQZDbMmNbZLwLZXD",
  "key1": "5ovmcZvUwaBN6JL6D5YrjMB6NBw8c5rwbm4Y5enRwm1BD5RqQGgPTp2XtsnP4q49hju9rjbWfJdftkcnpb9Uk37n",
  "key2": "25ncV8VnMxZjRDP4kVJv1DBEPF5UqjbSmJejcAAJmwv8Zh3f1NYTJdGb8YsYjiM4FxcLWh74hvFt1LkQCAuZXct9",
  "key3": "5UtKVaoQwRitnWT8NvNNrixzR85xhMT5QsCwB1etv2Ki44eABXAkap96j7iyRcUWq5LY3PsXKKJAukwZWXFV8arJ",
  "key4": "wwSavto95uj8SEYQoeNPySHc44y9kq7AtwYs3RhuBfqCFBWoD8Qyeu1Pa1tdzjC3YdKv3ngeGjbB6CprGFqWRjb",
  "key5": "3v1zvRExRWY8DFyWDvyXbN9uFnfbiXtg2KLXcc8fC2MZoeA26LdkwmfBDqaMvAnjCxjqHHzdqHWPXYg3cFEe9f3y",
  "key6": "2NfAUfnHHRWEpwVer2oU7BFnZaPTo8pegkvHkpeMY4CzCm8MxUQGss71rBSoqqnED3iJgr8Ko6P5tCSUkuxb4ZYN",
  "key7": "yfqxFEKbz7rGyTbgQHssj4RGiSjkPZ5QWXbwaLbwLBByYRAQRQqpGcFME1LFQpVRkoqQuYepXXbeNkEaekmCaij",
  "key8": "31DbdTfgrXeJQnnkVEiLHK1mWVr4cPu6EcwCAyeCFE5PncoWxcyvfERmwHn4ByQutGHRhnTSJRzGtvc1n51oM6c2",
  "key9": "3D9Egce5scXAY3TiMddEeexABCS235EbphC84YiVEwWEqfmuboi6U2nnQNGLAWBCgfantXitn3TLQx4YNMfmpTSR",
  "key10": "63C71U2wi26ezsqpr2wfPfcVeLH95QUfq7Rz7WLm8zLwQTp7xE5fUWHftCzaFuCauoq13TThpp7EJKPvJqhLuwSr",
  "key11": "4txnMDaBMQocS231cbJziFCXBpb4jKaaS6De4u9aV9NycgQYWQ9Csetu1biuFDCXEsgfxUEzBX6xQ4MUx6mUQAuH",
  "key12": "5mqxhu1oVetn3mkqptHro5NGaVM3y8dc8cDwq8chTcqWvUj2JbdPagG7qa3pZFvvBUngBosTLwvc7d8poc7mTZVj",
  "key13": "4zCELDmgGF21XukRhpPPM6MwFGWw6HiiXJnYpx6YjPCwBwLEdaamNTg1icUEqMHe3nVchxFT6pH2xqkzuuvdx1XC",
  "key14": "3tEjgqT9djQyjGD99RqEuhZFCypVGYZqjWof2wzzAzPs9rarSSdoeyDSxcHVoYebdLpPDScy5TbPDVVUduub2gxR",
  "key15": "4VJ4S1Szw6xX3Fq4QKwh7haBRbLGGYwKtTNdfKV6xVBjPpoAuJrHeAiUeqh9Wvoa6NSPLmetwTKwxJGCmvRUjXP",
  "key16": "4riMhdgh3D9BJCgsjjDkMkGHuJbb7McnJbZdG84DH13NdyaZ8vxZyzuRXgqBQGJnVT44QHPiMDff7MSYcmmXc1DE",
  "key17": "222oXQycypYRMXqroB2q5HwnbwHCvQjkhNJY9TUQjEnmDdQ9U4oeooTLTfL8XxfyUsgPth3LtAVDciy3P4P9j2wq",
  "key18": "5Pd5PhdqnK4n5R5kTPPzmi5ZDuGUpQYw7B16eMNE8ofAMxemXiRAY5RL5S1qG7sj9eUVmvoYX5TQP6MXdgs4zXGE",
  "key19": "rKs8rYiUqEEe2r4JhA9xCspG7XrMNCLD6JjEN7pBQFbEaH5zNQamgYFF4MSxpuVvQN3zSnqBYx4gVqiJzFEiBLr",
  "key20": "5UBL3hieEtaLsfGhMnQniXcfkh6aSVUquNNHGL2eQbDgWbuVmGi2QccpWVzYnXZH8kERJYEgnD4bFPVEW2K6bePY",
  "key21": "5KZyj4fTNhYHXYySsEzXrc2cRDYXrWSQp9NyrtbZpKsP99aLuG73MAMbHyhWB3s1RGh5G9vZydrwyCEDMW3sEso9",
  "key22": "WuSKmLgJSzpUjcC2SSfNbNs8iLmC2UiZqpzqg8XfUxruZFZ8GBNkdHhpRg5jgYkdgUnnKZYhFR9njzR4vJwG5sS",
  "key23": "2iVuEqJREemK2zf6hVi97Lgj1MioNxPgxApUHxVm6BpbF86qUKVCEibB1fmAV8uBaB3oG6ZqfA3XpbuxNoHcmoGt",
  "key24": "5Rj9VUGvdJCHPBVUuyCV5SLnQHtNoYnxtpeZyAvetsErt4WMpPMcynka7Bdb5nP6BnZzpTut3oPdjiseWWQ1U7aj",
  "key25": "3y1X3tsKbeLoLjGKgED2bT9ePvQBzVDW3SU1gAL2iKZ3onW57zakAy9QNhXvWgVRaqGmWs6YjtRrmUjASVJEx2b8",
  "key26": "wimHhAdfqE2yirL3cT5TZtyPQ514aor7i34pmDfLS7QoKmCY7QaGNddQ9T4eFgmnjvBgQz5Rek6nzYQLKuMmUbK",
  "key27": "54aS8ssUNFgv87hCrcDPQX1fSq8xvDXAvwkuYJTZgHskLv6K1UCxpdXz9PQXVqc96RSM2MdkWsu2asEdHWeLcXRu",
  "key28": "5ZBxZ9yxUUNtpecyi3cTAB4c3XzBq4CaL7tQd91TxTfidKMVaETue42YWVR1WXFt9bJ5rkmk7VMzB7FybE2vAoyU",
  "key29": "5kugtgcad5MFcXcCmRChkM4QZmCTtJBQ4fnuxmqtx2SPgvQUU1xEJoaCHtHY3wqCkmfu2nTLcLkUuxvARGJfWaU3",
  "key30": "4K3PwYm8fTzoLsBvajQUgp181TDx42SQVp7JfVTAq2CwiipVpuzoHnQ2Cv9a5Bzs4L7w8BoX42PkfziyU3Qg8dLu",
  "key31": "2E2BeqAw1QuFFUidUAEj9seWuDFa5D7xjbZ9rHCSTzbV7VB5aJeGicSAnRzGstSMQeDfuRDiqyfFtoE5k3ni8Z5c",
  "key32": "5ccZ5DQYpoq9eZNTMVZrPZtFvccMn9HmeA7nD1zQRhNTQiqoSt4WiszAW8mRE1QjASm6ojn4Zx3nJzQjAaNrZDvF",
  "key33": "4e6RGigCFzyb1WhAHbXmjaLJCatpYgSYu5i32Fy6M1FRJgSNdcbJCiotHshei5zLzBvYtCceSyiBBBAFZmEP4oni",
  "key34": "54WCxNe8uzdyzh24TwsUzcuNPrfYcEC9fsjEPGQSzRUDdG9AFqqDyuqLbS7dctNhKWCX2u3s8XoXTghfcVbqC8ei",
  "key35": "36LcufR3nMxKsMmhSSFCmjv1jRjKAv3gLoaoufMMpfRsZGyayMVVtjfiMpmD5LdKDtFVNSYomQQB54iEm97UV6RG",
  "key36": "44fvbMuTvzD4czj4wdoWqNvhbyQUrGoqdxokab4qfDzyxQVCTMck1CrZGySuZ8aUgnNyCWNNxicpSvwS1gNXGLtd",
  "key37": "21HBcELeuvrr7Ki2j5a5YgimyeFPGqzdg3NgvsFxXU6YULptBymBcqKjp5EBKN96wzTCADQGvKUnWkHwzB6TCcgC",
  "key38": "3MrywgrZo8UtLSr3RLc6DPSHLsrrpkxhYd8SSup4XTEztXR8pauubCV7HJidS72bqHQV3ttGanHiXfsDPPSZKDf8"
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
