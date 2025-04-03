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
    "5HkKSE5X5AtYKAbkjeUJfWzojMLMtNANgxxcynf59A1NAFHwp21FEy9iefNhDHzFaXgD69uenwo268tQEgSFnXdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54tr5UuTZJectzdfZz4ouVdqxgsLkUDFJsXJV1tWvomdZohDtRSwctS2q7FLSNs9JdSBZ1Pr8Qi2vT1Bzhp5M4ni",
  "key1": "64qAptqPHq6qxVXr5SERZ2YUV4XWEhS91GKsnxAdYGaBTY5CmrDAbJ2aZPegJJGvoGLkVSSARYksc9qPLGEc614f",
  "key2": "2gjs9dcVztXCQmkJzZMGHq69aYAmuaoEhWSznPz9oiQ9LiAgzL1yRUPM17qwGNvkPD48GN6nM4wQekUqj9DStuT",
  "key3": "DSzxiWymwoR8LYjZt3SFQqYHyBbKXxPJ1xZb3d1DvjEqSekWydxVo5NTE8k1VrAtisD1pAQcsMS2GkvLeKZ6nk6",
  "key4": "3odkqrGwdMjQrjfXp9FcmJMfMQpGD1HMg4gkb8AAyCGh3qFLxwQPh2JGTpv4bBKqT8L9h19j5trKg9cL4vq6QLQa",
  "key5": "54NXNE9ragL2N8R61wNQo1strgwJMXvki8HhdVvAGUoSVnB6amY3LnmjXqJhWySQsS2Nsm1WaZ9EMzXkzZUmtu6d",
  "key6": "44Lda2JBtHHN8HnqaCCgtzveTq6Wh1hwK9bWceYsTzPijLPAyuSiv2FN3Z9yomA5Zvyctt5kFg8H5o3y7JbJJoPJ",
  "key7": "29LUuyajEQpULyPzmi8tGTN1jT6N3RD151LsbxZhVx5K5x9P554xDZyU53xpFXqxckJsggUHis5fzAnQFuHyC7U2",
  "key8": "62oMZyCoXG8cSDRm7pne7fQQSTrmamceRnsVgLRHnqNddRwcBvEZKvw9m19Vw7H6jtEFqtJTWdr2UNHMfJRABcmH",
  "key9": "3tAXtMZRwRptrfWtTEZGiYEzXZTCLieSCqfxvaY7BCUU1Pi1ccnCW1bQ51LYCEHU2EYrFoiuFd5vNXzxrRSiWG7N",
  "key10": "5ntwcQ3asSzsmrZj7UemWeZLpiuxnWriXc71x6hSpzKZrS3q7ZLbQbgPRbER3Be5gXkzSwpFtu1EbQfsszibKmwF",
  "key11": "2qg9T7p4roaMMvmTeuNFvDgHSrzGEE9BKVFwQtDj7GssQVxNswMHmW98BVKBWEortSB8FTD77bFN3pSFbaoU2uN8",
  "key12": "5xPrR8FJ37K8QBWgdR9PwYUkSDLBpHmPnV1mrenz26mVxhoyhFH6Xx1LwbhhQg9qJJNYr6P1ZHc4ywqZXZBTz3aM",
  "key13": "4v7kpt5kfpf5BbPU9citXLevGrJLCrSjjNAoRQwqRtz7SKJ8xvTvEQAnD1FCHo6pm991P7suvWnwYYmwvnDZDTmh",
  "key14": "ddHyat6wVFQsokGGQQcb6QJiLYKnf2LZcJ63kSaYfcn9xnbc8KV8fBoqhnxs6wjUknyohPUCbd8qBbbgqa8GH6B",
  "key15": "Mi7q7zzbse6wmiN9BX2HtoAcMm9tDBFMCzhML96M5QJF8mBneZvydBtd7rPrPim1nXna3HRBA47E9K7qNdFSUuX",
  "key16": "4zybFbeSEAMED1yLnYxc35PaZD6eqtWJcHEuJCJAGfSt6ZEEX2ARF1mH1KKE5gZwRnaaeyiEJNDePs5RLgfzU2ub",
  "key17": "4UVGZpb9jhmzTsKEaciLkzNHZmwfQqF28zDxKF2LhAHp8zpfcosSSHgf35Dn5FbSMhCHNtfPzdyyXEU5LRRK36pL",
  "key18": "2UEBtMwUDqEHXJ9vdwA2WStVqzCJyyHhD1zWHEpMBxBqnCK38br4MKDNH2xpsg9Jq8UfHkV4JGBgGoU8nn7Xdj9P",
  "key19": "3EV6EF3mfesjP29iuXdKu3BveThUWa6Zhpk5BxX9HJNxwWgTS3Td3A8ei3qYB73qWqVNb1ZoWk2jeUjrqALBx8Y1",
  "key20": "5sHtJYnvt4yfSMb2bMs43KQ9B2RSYvZrkpDfVtXqsroNrzvDvmzCx5krnSBtay8KN4LaNkKxoyCNHAduuKHNTdoa",
  "key21": "27ZcXxsH6CJoQVUNc6a1fFXD22MJnxY2fK44T1c94XntEupPC49gfhnT3wdzoxV9ZNByJxXcETwAVGQwyLcdQiZu",
  "key22": "358NMzAeE3JpqQQD8HsWf11EYWUNfp5WWV1wmb7so27ctcZQaSZE1P39WrKS2iFR6A6sL1UmDvCGoTuYA4EtoZVj",
  "key23": "NDfKhQhUgfL3BztfeZ9syxg6SvjCyo77sBaP1FphTqZBcwqHYNTAnRNzeoFkpomRHyXfVLhnaawCnW6MytDxcte",
  "key24": "4XCVhR68wSJGXFfGi3F4NpBcVCcCxnjY2gwJYzm2RbHixS3y9k5HGJ6YurxtXe4RYVSgwBifsrBwsDLJubknxJWJ",
  "key25": "2icV1pQHPBGRcDBmKNintjsfpfAQmqabh2xZuxmTnpnUcAZnyyTb7qqigGvQuvMiQrZ3KzL1fQ7wyo4AzY5ZYydf",
  "key26": "45ZkEYQX61pXmGVtUT1ikEk48n2SRfnU8avFZVRAH9G6quq892YbvRS6bQLeTUkJvmwX2eYSxDtnRLgP79ukJoMV",
  "key27": "49bpxiqNDMd1Wnoj9ViQxWGdLnEUDxt8YRYR42KEiGB3WKnhaCLFzndnoBmXXGJVxEn4vBrtyze2GNJ9TQGnuvex",
  "key28": "4RkeSzkfxzRCfENFLN8JkA4wwjE8p7DHD5PyNqmfDJf5npDqRxX1vfT4yzr9hsc2p4RDS6t4jizy8ibL5ZhHK6eN",
  "key29": "2GrvU9yTydiuYWpW8i18ZS2P1Wo1PN48rkkJmmwWmbAuY6Luv9JFEQKKXk2rmf2tiAfowibT1X5R8c69KFuFwdhk",
  "key30": "5tNL7yeVE7RXBRxtP7tQK3rYippFXLgswgqNhevp1TEeAzLxi5EwGNqbNRurnaEGYpthwnh1HpBUBTPKjg8jvCqt",
  "key31": "vxNDd45LEwhzsPfxWfFT6fidp3Dfw4zmckJv41ab13wfLtha48KMd4JKJJBmmpaZ5vTzZsmKpehppgvQBZxUsbj",
  "key32": "GEh8SdcHy43PJUPyKUD82vHrZnuhtHPfy37vDfqMnppFMRZ8YFhWn19GkfNzZ2GgBXitezRVRDocsx8K9WPR4aa",
  "key33": "Qg5Fr18D6wccoprj7QueYecbiwVx34W2XxQCKicaf3y5NvPv9Byu668oPqxjdbAgSbqNPkETqGrTj5W5uTFvP7Y",
  "key34": "4VQu9RHkDMiAszSu62ruc2ZYJLMXXsS4b8rqy9gwvA8RfB4R3ShWDkYNTcA6evfA5EmqYUPohSUcPd5Uqyxtau73",
  "key35": "27Yk4jBnfKRjtBFfJmqq8sykuZJRnwvi6DT6xih6X5X9aVqFPQnj2VUExgmSts8Wn56KhcLTe67iCz2dJaVXxYtw",
  "key36": "jo7Bf76ARNF34ezm4QcouVoSeaPjKQQgGpXQ2ebeucKgMfK4jGGdrGGuCxUPjZHNV4HCcbwmDNYu8bvZegsQPUq",
  "key37": "5djuQxYmFft9rBr9qEkSmK9pmvCUZz6hkDjZhQnR6ZdSsv7qgFjRWy8SbDsMJ5SnAfGgTDqWCBUHEgfUTkXqTW4g",
  "key38": "dDtBMzLQaBVYXKSMDj11jqk4XDaNrQL1wsHKKHvaLRKU616zsMb9qeyab4kBh5BjiH4kDLKg3tDWj5oRnx3VxNs"
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
