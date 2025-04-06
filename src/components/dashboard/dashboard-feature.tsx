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
    "3mbK1i83Hqdqp82cqouXjJ4io4nV8do7tg2KkcfDJbniEcfat1Ep2riR3s6otTPapWT9C3tLeFUxowzZRnYRnrii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FVSzxC3j2azKu3rHUFb2ajKTjQTLPjZG9GNZu8EMpVNnQDaQQr8avAR2AAx121ECxaWx33674xRBoEyxUCNbwM",
  "key1": "5E8gFXNr8NrCyo3s4WBH18B4aDKbca7JtcDUB9m7UfzpA8rxmDECCVMr6AyVWjr4mcPTh7kUZXQan38NaxEAX1XE",
  "key2": "2p4RyBSmhg9zTHgYFZGcY7cq9Y2AJNZM5AG3RbyNJLCocBVUzbPftMsvHGqgZE6WiB3oXn8YbC8giqE8QCvmkwtz",
  "key3": "64bu75F3De1jHoQGRauhNPdrABuWd2syEY1cNP98Wt6FgdmFyQwgP5mhpedmrXiCVEHUBsCi6CedeLCYPRFrhqfG",
  "key4": "2VFka37jRLSFN4UYpGuohVYMngToYGEutaie6FrBjijFZXNkE8inNgD6wzGi32AUhbHtDSUVadnmX2qWj2pHbCmM",
  "key5": "3YMHd388xzaj8y4JCNeJkZadVzHPoMvasjfziUH9wS1qKYqaPGNxbNARCvv7LXePxfASKDinkoQF2u1oLidBF2dU",
  "key6": "4X7fzmS7L34tAGez49aDsbHSrwFFPPYanEA85gWawb8GsDYTiKFNXNayat1rRxbtF31jZwZrGXf51uvQQ3EFpyuk",
  "key7": "3vPzYsQ5FccL2uJCk6x5MCvBDtCa6d5C7HhXb9yG5qPkXS4RN7s8hy3oFkMsFCSCTRJg15FP4Gkm6ngitivTkCuU",
  "key8": "3KtN6RVRfwPDmzhHECX7UM6o6PmR2VWvQEqMcDvDE1Zo45RYiFvJWFMqYUXeD8WKqmWzTJXypesttbYWN7WJC3wr",
  "key9": "2Diod1TpYH9LxqfWY2AmePGJ1VbNvG7CWAa2jYo94FSqvNXRcMtdyjLd8eKvMedXwpCD5ganMXk4DFWxFaueVqKk",
  "key10": "2jNwyKJmh6TKJdhRvSngrgKcDhqiprXaRzdkQNWazZqb6KxaN5sR8pApRZ2MnzEeLZr3kz8eY5CtLxdYPrCVp4e8",
  "key11": "3y4ZfpZNhNZrXJq9CwoSAUQjPkuCUEdVU2QDxSkXfuoKoewaGfM6jibN3a5c3uQ2q7uXipbzkFjPNWjuq9rd3Nvv",
  "key12": "mfRKfTwF6ivQJVpubYzgCypmS6NJDxdhcjZMUUqELLfUGtig1NoBiy3eVWYHHiR9Ha5CTee5eyxvN2YEJDr6cAp",
  "key13": "5GstHUcTK3FKxcqzABBxy6t5NRvtWsFKbFBitvphDhjFfoWYTZCaNgjYHRCZu338WkK3G61ERwp3akGr6qCBSYaU",
  "key14": "xVFG1yujju7YBzDeDnnEa8o9AcewWMHC1SakirGpMmomHs8upQxCGejhvgfq9zf36rSpTqZzSzBFAK7xGrfoRiL",
  "key15": "4BrxihQoaY4T6njeqEP4xs173KHdYsrrjYEcDQpr5719pZTUn7sAERqRsWUJMajyS8n7186WAj5BqcRa4cxH1L3F",
  "key16": "5dnThB9PYo7xqvK2kVCyTMYaW2m5FzPfx6yEdkMKLVvovUetwE37pBZbj7BajnMvMQSojQvC6YdDPwNhURMPtBtg",
  "key17": "4rq9mFWC1Q4qEVN4n9SaBiizBP7YJBHG87YfkHbFTF48v7AgDk4pRUJUb3ZuweVC5mjzQzkbCih7qBj8c5zVwjgV",
  "key18": "55Ue7w59y2hm5QyuW9Q3Q3C6QqZDWtPSTvKfkLqDA8dDspNJNjbBJShGDAhz11Wf9R6Td5ajacjfTeNjLqRPw4ap",
  "key19": "2qHe3GrsGRVDxRysAWmFzagR5dgPL7Bzaz7QXE5CFMgWJLTfHZGEHcENaTKaS7EPxonYUU5HuM9gi5pupp6BJPna",
  "key20": "2vTZUBywxrjM34MvjN5iSNQo2MfDhQQNFCKGMrr9tbyfDA9JcXyDaZ7JqwQozMVp3mk5yZCLjRzG2tQ1SfQGpcxg",
  "key21": "JgY7GhtNGkoGzxqszUXYwZYSns1L9KppzG6cQjQD1vgYA8FfXAE4uNiiSzzEZ393Uy38g8vTuNvxcbGFExN3U3e",
  "key22": "XrebGKgub1Y5UaaZ18NrjGxLZvdoy31qjurAXLdG1frEUqVKDh6HedU1ESrfMuJ1Ri4VZhi38pMAo7ztZLWN1w7",
  "key23": "4jBYwQvHdg9yxBLMSh7qXxD1zqekuf7obJce4hSN4MJBJrZYvUYpdG1qv34JfG8dt11PrtFxwrWBGRPxpHiXD9pT",
  "key24": "3wsazCHwdRBovSAWVjk4vSfkMd5GYTFPk5svGFzNcg6fSGXeo9Fh1zbuzfzDsaPz5QTRd2mcRCpJyKapZA1WKZs9",
  "key25": "mA2UCNddLMteeezkg9S174WbEs6P6UC6HTHv6rpK6zLviHhB5fNpcnZsPRkaNqSJfaht9BWBBXDiBk7zdn5g8NT",
  "key26": "59PW76QL7THcNife2kRxn5EjUiAwz8EX8Fiys9NkZSrT1kFR6q64Kghtkc7d6EZjXGf4WtcjZcq2qmLAHcsNBJs1",
  "key27": "5p8oWkW6om16uG9vbWHcvJsVttu8sc9D6zFVkNnXDLFrAKXQYCK84mjfuHmYdEpg3eud2AShUyb1moMxfrYgcLZL",
  "key28": "4DWmCKsgHKxevnY69E8gu3xRZDjQWaHz9TXT2QuDHnJDb7PARQWwCL1ECkwPEH4rv2GLVfFnXEtqRkRs5s8FSXud",
  "key29": "3SMWS8WWVL5uFTCm5fmoa97hH3LxXHbjdDXY78g6J8VuKFiq4wtF1RT99W1NKUhfPjk2Vk7eSQSA44eZsWpTehDi",
  "key30": "4Am2xhD4ijMso9bLxfutZbEiR4zYi77BUUgY9yByB1dZ4s93SXdVK9iThG65NgSHCkTJ56hrAxabTgqq3ZYPdMUL",
  "key31": "3RVxXadwo3mNhfT22ssZduXNWXxnYSu6bCKCkG8Y1Aw4j1Boompr9oSjhZ4EHYTAzjgG9SYi4Art3zC3TTzfKoKm",
  "key32": "51BHgi13T1C2uTRq1W2K8HptbEWC2NRUTMQziFPUZtkq69GbyRdT6ae1Z6mPrWW9787Jw7rESPLptBP6dFX39fxj",
  "key33": "2JVHAB7HChxh7YgDA2WjQryZBpkkGjtr1ZEVHwQbHyQox4SeoNSubmDocFSPEUTyH48Gk7k1sFbit3gxrCcoRvk",
  "key34": "5YgkMnV6764MyPnkgTPyrEQkPLJwjd2dmCbHJvvBoJUrPXJwp11cy7ci13TSGStUYxbK3gbybbDEzXFZJcLx5bYC",
  "key35": "57r5r2T3Kqy123Ls6EosNwb5x7kouPJLSw8eWeGrDyn2v1dsTTNT64qSJQG8WDZiRc2HmxwRoicjRFA5PpcAohg5",
  "key36": "Ymi9m2e8MPqsNLWhQSmMj3apC2L6xG4gWR1bBAHVyrWCkJrvTC2DhJt7bFswnJj5XMhL8SdEN1mRSACmL6AwXeb",
  "key37": "zejanPBKBpWVEA6VWurw3jB664deHinj296dPvDRmmuGYVN2jBobYxcsmKk3qi9S5NUaxfFPD6bNwXmH6ma5qdZ",
  "key38": "2T8K9UTH4bMxGLLEuATgNbQU6wkcm314p2LsuGR6rmG1vZec43NTptSa1mB9eqJxnpkLZQK9fkDbUhGhsf3FLDW5",
  "key39": "4BiosE6dqRyjPwWXFKYCTNWeV4pw4v2gJt1Kd8xnxZkYUEYFTTMGNwqca5Sw1J9EKNNCRqzNXiQphG1ra6cGpZUv",
  "key40": "2WDDuQS9HJFHbUgFoxWWYtajygL9FrsA4N2H2ZWtHHvhxAdKkkdWDyjjqmx3eZRDLcVu7Jwdz4cvwrU77zT7xxXv",
  "key41": "2gA3uXmxgtFYr3KEpga92ms4ihyb8GQxfUpjcuB6jc5AfUiaQ7iyCeM6i8SuSdF6zEc6ayp9mFQX79cEwHmizcw9",
  "key42": "3yghgYvTShVR8JKAXKb3gpVguJ5r1G3PfqkWYind8GcUGuWXXUAvFMsGGGACCSzGHhn7bzALwe84T5nNGfKU3FHS",
  "key43": "22kaN66HTpApjZB4dYCLXRJordB24mQt7742Xttz2tLDbjzEoK22dnu9sWPVjo5CboSG54f2DuHA8PrUdZEbEfph",
  "key44": "4hqKMYwNuunTCzwsUtsfrePUW1EAjNKrBVn1QiLDqDYpmhEQvbXuHkb6Wmu1sR9ovX3RU48uYbznswtsiM9AGYAj",
  "key45": "3oPKTbA1RUq8SYwYApi4RKNvckgQCspQGqcBfBVFAtmuELwcQgvbhVw6EwvPpa4nRKjwU7Cb2m5H4Jiweb1RunWJ"
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
