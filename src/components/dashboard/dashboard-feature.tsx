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
    "2CHFVJuezYWCdTX876BntsVc6fko3fG4J5qh1jkrByvTq6EqaynMKFZMTMttyVPihGEGBFTb3UfGsFCpgciFn3r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZezRh3ZDmyUzcnovjmmEX8G8ZHkBcBJvBAHrZPdWKwS9N1wzq2zncLWC7gAjx2igd82pfTP1gSm8x23U6LzSLhd",
  "key1": "5FbEtiox4rWHz8QcyAw7mGEYN6tJdvswV1kVamv5YMmqm71Sd6HRSMstaVnQU7WdDTw8oEn7i41brLA6ERfjb3ZZ",
  "key2": "4qJV71GEciAThBMkVKAxhUnfWSWAi4Phu4WmSe7dAZ28aq9rWGCigUTwWmARXKsjFUPUzZ7UYHbLBV7CuVLrEE1R",
  "key3": "3usLMTNjfdZqSVoWLXfwpW6uJXZYCd1YFm16mAjCtvEa7AW1vpDufnCMyratHvw5pgGZUrNdEvD4DpLRxXfCSJgF",
  "key4": "UWpzSwZZjVcWkGmFNDGeVdP7XciVn38kwuCPDsZDNW3Ytu4xSyz1GKuZY4zU2hmHqZdSnzc5PGEZVuaL2snMcoX",
  "key5": "2qmrKh5JXSdvwPcLZe6RBQgUMbQrxSULEkbBSaTyBwozwuS3XzbLXqdq1DU4FmrDMPftAgcPuWnick2Q5igiXHkr",
  "key6": "4ApbPqq9jArH1qGwSc5fM258Sj21tMFwLi1YSmwZJdtDSRreM34KeRb79hyZGApuLHA4V9nRZjmiYn4rjFMJrTXW",
  "key7": "51B8sMTYn84uUN21uVbCCcLPr27gRSuhVsv4BGeKc47etnRnBdFgEAfgnyUzBCNKyz9qz62EfBGBto5KMRS5b5rC",
  "key8": "7EJdgqbrXvDbakEJC8PFM5QXQgbTtnFTivyXnqb53kjS71n2SywucJjCLXPob72gzDgQaVB39kyREBrz8yRdxJE",
  "key9": "2A3JLoTSo6bzvzKJNnYfvzLnqqgVnRm37C3vmWisatWmVPwzFAthnyumQr6vPU5BuJx5A1RrA7jN8W5DNv163b4A",
  "key10": "51LxibkZSxy9w5uutLrgMsopgMqJjUYfBSR9PwGABfpx11Ztd4hexa7fR4PaYbA2cjwWiPaNB1sjMzaNB7TWXHh4",
  "key11": "TzuQFRwDmjQkVgy4tpD9cbvwnGeksu2kJr35XrCHiCxkkJ7ehJ8mMFn5ZkEY8Yca5CEpmF2rTNRUJfa7ofoDYjq",
  "key12": "2ez1VC8H6quDJhfryJCSJFaxsfa2wdJZgLsb2w4TnquGaKjkcBRxTENqLm7o7qxfsgjKnehsGn2ZyXjS4v8v7oge",
  "key13": "8Qek83qZbkGFcSNUDr1zqMTTCkBcYheJh7jCoSbKGKwzFdFqrmTRRkdKxwQ9BVLjCX6hBEsRTdL9iHN8wDne7qh",
  "key14": "67SDRVcEezhcBbLwXRrG5xdiVXBCLy3R7WJf38UjmMHtJjX6uHSCEZdeWXCbFq4XVzEVgrBcJCW9aTum5SHNWxLW",
  "key15": "pNzZx8RMXzZYPqjk319xhSNo8biesGZ6UYWE7Gv4zQogJxUY4Kycg6pTvaH7fFXSfdGcmaqWZn1USu3R8QCgzx6",
  "key16": "fR4oWXwUVnQxh6J2ptX5c52Hp7gqfHmbYVjq75TyzovHTL2UYrjFsf3xrR49CLEaMDN8nEnDV7uRBtaaZr9iMsn",
  "key17": "3EgF63xdGUVoA4LXtDp6fcCJRsqRqDUrSyfGPfj5Fd8BXnNgEmZgfHypArMiP8ENNjWACY6dc9hwRFSi2NzUK55M",
  "key18": "42qiFokvvC68SQ2R2YfTLzVdwUa7esJHCPq3kF4RjphvcuBd6S9UuSGSn2z7rM7Xvcww5V4gUocw7dwXMpPWsYBp",
  "key19": "3MaJ9EwejRRFpmnU3fBYHp8vyTH48LSKNKodRK3AVf1Ux25KKVighmm6vTSYie15pxZ8fLuDwB3vr7VvY5VR5K3k",
  "key20": "5icQ5ro93hrnzaCWvWUmANB6VQpQbv53ZGadMC8RYdyKHwNRt8tk8GNNsMqBkCDb6PeF7KAJS1pRaQC1oyzPVy9j",
  "key21": "5eLtZ9XxZWSV8TbNyfH5kg7xNbkqSgiHXhB8JdFzLR2XMo8zztikTzDGT2cKiB2Mbt9JRdRCAHAdHmaEDReM6GtE",
  "key22": "4yqj2J4vQqu5Ati26HuXx3pZbYimok5BiznaFBZeA9UYtbgrumR8LsATy3YaJAoGCeRX6vTvYWoDLnwG5b2M8Lkt",
  "key23": "5WGAfQZB1KRTPLPFJdcFxfSBFSJqLSRFSqy8psMqMhQYhV2pNEgeiZdPuwUzM5CbNvewFg1nVEiXW3bq9sQYqrHP",
  "key24": "4RHTf7hmqndjQkUaRk2tmW1sFjppY7EJER176Kete7yyAuewyGfVNXsYWYZcHgcnMDeToxPtoQ6fxTFfBPsgvu62",
  "key25": "53KUyonG5j22Skd8Xris7vPWNC3EU2C2BKeA2WA4uyquGgX4DdD1KKQtkhT89QxuoZbASfZfAN85zRQkHYMjwUm5",
  "key26": "56uZLhceGZWgwLucUxvKVpxoyzymBz5Yx3p2rmnRNu9Eyk7hCphT7KgeB2jj4nquVmFTdAsTLUyW4ZA5QvsWWkZe",
  "key27": "4jgcyr9yfvacjULRiNSBtXwZby4ESDu22SJfo99XEqkBmKMLKYwBosUsL5WrjU3prL38cegy228AD6uqu5ds5Wkb",
  "key28": "MDPBG8ZHmwHxb1iJNi6LYWDaePByxXYxs8rbQXtm7hJtKgjwJfyqkmefBE8mWFY6u9bc6HentmuaFxvmhejGs4t",
  "key29": "2ecZp6dUsSEatn3ZejhqCkxoANKDp8GotEaNC4iQj226ZA1EyJYZLm6ehJEh3GUBmZmoEoHNzPLE3BsH3SE9EANs",
  "key30": "5j4uo1hcGAowpj71sMAvbH5MtPyx3wbZjMpk9KUGK8bsu3q4ZZp3d1KQZQYZEeiiJVqu4soSe1RjaaGNA2PQcuTe",
  "key31": "4N7XQgyjXxmiwwaVtWLiBJcESMq7drVAq1a7wk3xXXWMj7LQDUEn4LxVt2MYTKPrvqJnie1tprDeCj99nwbhFc4R",
  "key32": "4xAKZT3nixTDYVuDKqU35VKnJc5a1FC6BaFqZGLbtzNW4rSA56ovuV594cd24GE44mSS62Up9K9Uzav4BQidnVUo",
  "key33": "5jAUcS1kZceSCpKpyqPCq79LtNqsSK1deiaDtCqTkkqzpozmHPJ7afkNwKhCipDoYw8bhmwuFqVn9omzGV4xRmfE",
  "key34": "QxmbyZUn6uurHnooiVMQsLNEnN4iyadmkVGtR6ipVThTSGr3EvCEnYrQVgbSQwBYp5qoGohUaqYo7eqGrF5vfaa",
  "key35": "4yXwxJ8mPRo7aKhB7Dg97FLrBN8qZSJhKiFfiJLkieVnc9chcjHoBzsP5YtnynuK89wagSvF5btspiXcsX4igvR8",
  "key36": "3QXXY4s9nAQAfQNzNmvMo3rBFHxZK7hjVHek54NzFUMXrfUgE5ZVZ3NH8Xx88sFzjWaAsxAA5QbS6rVFps5aqtip",
  "key37": "4N4PVVHdpW42GfnmEbvKDa5StjZFyxq1UTcqmGnebfsi6uyLW2vuAK5eTFTb2t14iNqfXe5DBSZu1jqG3WuFbFaQ",
  "key38": "2rKaucPi649pR9gcbVLzCL34WjhMuh2WWn4x51ri7R3wjvuRXzDgmfHCmNTmxNKvH9kjDxEsAgs5kZszb1uar6ua",
  "key39": "3bTgbudhXX5ktu9KojkMoWG8BZGmEazE9T7r3duhnZ1gnRFPQEc1QWu4N13FmxbK6cvmDuexEDdkVkfyvp7a7A8N",
  "key40": "2J6kRPRAKRL5uTYtPeu6aGwYq58nPmE4aFDtvKSPw2nv79iQT6UVucTyLLGgGR51Ax85SxhTN6WtbKdjWaG71Ub2",
  "key41": "25Nr2EPwnGEcf6Jm8X6ZpBhyLmQG7ti5EXjeBiyu7tAo9NPG9sigeMg1EE6c6nNYwpWRuBGkREsFNSRvrMtRqAS1",
  "key42": "5UYMeSUcDSMEfRFB8af7wYezXM8TySFEEQmcdq7v8jjJ4FHxUz8hGDjEgLhGd6xwTPQTqiK76EQJjLPq5kmoM7EY",
  "key43": "4dqHr4CH5vsNRyWA9Gw4Qt7Ua5KGpuC1s56k5G1CiLaKZqcqzJdTwM9urwi8sq6NaYDxBumo1PsSVVoiU6VikS17",
  "key44": "244fC2DqEmZ276V5sr6hzTbjQTUskNfFurCRyf7nFDz3AXrSWANJBJ8jygTVCWcdNYMXwBr8r1PHLqpaigEKkJNt",
  "key45": "3RPGUfNnwpgPm3mJ8ijbg7V6qhDj92obv84SsFpzanfASTCWPN2WDEnQRvhDCeBiFze8YMRZDL7HTo9bmRu9bagZ"
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
