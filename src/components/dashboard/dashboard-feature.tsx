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
    "Vs6faDDvYJY7Q3hEsWujmg3fYsha9HnyARVRM595n4KLk1XVzTDfxwM7BZ2rGgvVsV5DVGMwr2b9NxH17BjbXjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9r15YPhDdKWo2TstVHLHn8xusZKK8SuyS1s2hvxrnE9mD5QEtuTtz7jskrtE41QQ9dhpd2j3Y9iKgmTCdktTu1",
  "key1": "2SD9qXtf35ALopBVdquFo8Lrtg8rT49tHgdDaojqoS9LFnSx4uW2G9YZ8A2sAmDt8qv2HaxNZghTUzDGNqu55SNg",
  "key2": "2c6Jhmj8VqaJwpku6Uwm68KTsfvACHSkbxJH1cw4og5HdPQJBhgLHGcNhbiAy54ACNAtCyeaZufdRWqETv9QyjRz",
  "key3": "5EEcuw8LeFSY3oKEdNheNbzkk4ZtPipff3rXpetKHNATJyn1qhhSWdadsgrB6F5FMMoWG8C2r2FzQjhshGDLJMCc",
  "key4": "3oGA2ggvzcreJ2tv79j8MfZtsfEzaf1d2yr8MPbTHLgcjMRcEfT9TRq6RtN7CaRiaQxjUn1cpDVQTGsYyLx2u8Tx",
  "key5": "2gWBgUauHGCg8GtfkPwNyRvoZpK1NwVpvgT3LiS88SGaGN6ShNWaLbiVpKrim2WykzdZyEbe4XUS6MZZ8VDfg2wW",
  "key6": "3MPsj8KGFhtnbaRUZtqTfsEuwcByicDjKhKFvM64wZXAWjm4hBwZzXN6NsES5w7jxf3fVLbH29XeLUj73B4KkFx1",
  "key7": "5fW4UzyDdgqjCZhJRWbsLRbfHsV42D2hSe2vL8YxR1frBCemJ6qd7wdXUGX68SEzNvmzuWHoMtKqfPi9KhLEvv84",
  "key8": "5fvReTnV9SaC9X6KH9um8S34iCoHqrp8BNK7fCgKP1Uq3qcj7PpDCBHSLf7LYYuGassxfLSVeEvv4BD6MBZsAh54",
  "key9": "24JCXfYCyCccBS5K7yR3fSAYKj3C3coWPpQEMzpeamNNxggB3o2F5HCHNX7X7zwgtoo8RdLpMhr2k7Jbjb1WRdkk",
  "key10": "58jakW2WDiWz6nBrLJ8RGZHWxmJLoD491hmHBQpStoxxqvCZpWbTiTSLxc6SNi41K9CFnNhVQhsu9bUtoERWo5N7",
  "key11": "5UpSXNupLHnmEvJTh6DjMPHJTYiQXFcLSzaHcjqmktPpqiJfbNRrQrERu7Qv2qLbdRwtAGtNPJJ52SLtbNPvDKwa",
  "key12": "4zTB1F1mhqVBXJoFhwLLrY6Dzdj7LT7xYgHmZqGdZWDdhFErHNTUqwqLwrfVXACspmWakeuuN3xNr88rA3eRcxpz",
  "key13": "5Tbb6PDeB42Sqs4EoV4dhZXAFCcDjw8S7Um3QwC6C8pq664TznAaUP1qJhrKNWDp13sUDaLx2sSran6FH4n3PQKt",
  "key14": "5VgtVKMYjctPSs29t8P3ReCasdiGcwn9Dt8mWgJ5CojqZtUz9fMNoxx2EfcTESDzxV9eAr6TSvJp5ZYQq5AABGHK",
  "key15": "6rW3UkgBAcPywY8NHFKU46HYbfuz3VJnyeCUm5CExVZ3mN3HA6KhHs6YuGtxDUt2ZjT5TEP9ZvvRnbLvABgjgvz",
  "key16": "RMMapHxhhMhbbPQc49RKtGSSdJaa2iMvZqaQKxP2Z7WPt52YEc25SG2pM3CfjiRh5q7TRumQULW682J9rGZiLSH",
  "key17": "291fj21X6mD7psQyz1CkbopHN3nNMpqYRmHfz87SyNQEo4L48v9kMckCcapzeX3Hg3urZRpcbpoPwxYqP6qXRbw5",
  "key18": "5GLD6GpnY9q9GREdXxcGRbASymgF7JFKXMqgdf63Ysh6xuP1PdvjQQmQqRPYM7YVMpb8Gx7KFyhUHCRxTVhzk1Qv",
  "key19": "4yaNRmrV5kwCS8SeA3fn5u3A45HL16UrYSEoLiJKFYkfxYyWCc2zqESzbW2B9muhyYHrNw8VWgyFnrGNF6a2cEhm",
  "key20": "L5TB7jGZk4wEQEJjwn7C4H1xs4APrxXESWbZB8BRx79iWnE1e1WN5Qk6GFGg3Wp9CViTMQP2qFLB4orVWFpbxD7",
  "key21": "YtDnzvEfdegF11c2xQnWaJhq5t7sr7y7jhPUHAAgZzGNJkunzRr3TD9vH6AKEw8Ww8b7QbQPRddgviot7Q9LLp3",
  "key22": "3JPfzHwHwpinvFRUkHcjF38FLLgNyr7GrTkigUnxHmQ8cgo79GwceLAYo2PY1iShK4oWwyp3sGVMdJGyyR3utz8Q",
  "key23": "2eT1gzWY5qX9Si4vjKNDxL475tG2QsuBTRZgN4UJkngyTxpiXzbbCmTfGG2Aur7DUB7NWjDjdTqnhdGiKWjbKo2G",
  "key24": "53Cnm52PxVEbbPhAvqTuhh3gBeS4wLWKwduVc8jDRo1a5BZYTorHAoAj25GwWAL6BPR9jZSxzXqnmDJa8ZYitMEq",
  "key25": "4DmqyiugsNz5REbW4ruhFF5yZmV1dmnYdgFzcbubX7ASn8D3vbF55AH58gpFtq3TX4EeCqLUTpLvFkhNNzGii6ji",
  "key26": "3BYLNwWCL9weAicTdznAcbYqvUHPLM7HAacNdYiBDS8B9DAyDcBgVBh69xA9zyxsDsdtjbck1iLdzTLdSX7BFTt9",
  "key27": "2xvjcG22qjqu1JiTspYFJL5om5HgwLBhFVWvUGAT4dJjHbADJr3vrhHoh115hykxbkngjubzWHfjgr6SqvmTXHVj",
  "key28": "4f7MfXRuoSNrN1F75W8HyMfSeuyQk9a1JpJd7X5geQeJAqXpxamK4u2nP4C1d1oAjSGXMwhgc2WBWnKCPAr4MVsi",
  "key29": "2JPPY7FetLrJie2yA6SzuXWz8ojRajYxGqSWF4Z42sya1TnjHoDeNCis4C2nDu6vphszA41qatHfgP8ScwbBGLC6",
  "key30": "4zs69CaodkWkJSWTfk9XPoYUkfF3YzNNo6JpuaiHsPHqCJaCfoaNiJM3cSLeGqxgkPkiLyBRvxbFuhTEk7pniDe9",
  "key31": "4gvJbMuDQwiY3LERapjCsWJUXrsSfarHwpvZExqXXBmX4BFGxQfjJGQhEa2v2xaBHXUkvH7MmrRNK5BHErVUGHF2",
  "key32": "2E6pEtXZ9TX7FFycDHfR2B31RVs5yZKnn1WSjwJcbHr5FN9NGTcpV1mRbLZmrrWtPGc2e9NoKTKxLzsUP3FWVhjZ",
  "key33": "2ZmiyQj31otAiwi1VoZC1uyui6fxQCHah3pKaVZ2z4RniVRqomyvuXdh8JZm2ThGjgvjsgh77bfJo8mJvCSMrWqa",
  "key34": "3xs8H8i4zhVzZhwBnHnKzbn5buu7tsdfoKsZv9MbTfh3Nv3EQ51mHGHj3NJv3U3UUAcysu1eMMgfC5zEbYzc37a5",
  "key35": "NpJJTDykGNNcRxzXFpozC2AYoD2oGvqTG4XchpVmpd8A6xsWxvSEehwxZBHPrduvNnhCSDRpEdPUF4zdQRae67B",
  "key36": "5QAL8mmoEbhjf14a9ihm4TBJyrG86zqxUoPwkjg9qqXxTtBtWWZhH7tythLWwmp6qDCVnMtwraWegyr3xQsMRmai",
  "key37": "5Whuryt5CAwdXC9bJwBTSLqvG7Q6TudhDDaMvgZaHoaAjyPxqcz21Qr7wdfB7Ls53wcxnopw4is2fAwRRutWiCeZ",
  "key38": "55p6EePdQVnKPb9WEimuB3a7Rz5oZShDaAd8ywUCEq95Syi3VF27b7B9kJVTrP2SrZCeNNzsca6HynEC6fUYrf2V",
  "key39": "3UEQySrnX6yAguk1hNmebE9ji3BHJzui4LXSbGP2gKXzkUm6wQ8F5m7giurCPrjMNVhPgfMVwCs7a3Y84WnMnHBu",
  "key40": "4dQB1W7Yhx5r7fB27q2Qk7p3GYXq6P3BhY3wLA5kaXJDYGatPSrddJH5TDZkaAtGjoKtCqDE8TgTEY1uxXGZUM54",
  "key41": "2jX6vzCV6bFpXETWkrHMSuvr8d6yqMGtV1CvYt3Ljfv3hRNcuj8wGuCmMnmpV1fua3QtqCakkjfAJg4BhjJxGs3t",
  "key42": "3b94nRcovDMhUiawSPJVW1rNMLR6vgaVJFKLpDakbRLo7Uxf5NAwabQCzZEn9gsk2RMMWAbuTDpjsHBNLgvyRuff",
  "key43": "4HjjEMS5wb8NuqfWHNBp9Xy81vP9tyifm8NGMY6FKMs6v7oMYDtEsp8LeFu3JrxcyD2yoPgcUdoneXLwvAJ6v6vj",
  "key44": "4tEpSvgjECUXyhgCEaa6KvnReb9jcQqXQJn2kVe11ZnywBvehFujXpYMEmp2dR148XNrVKgQrv9HUkSsRbSscbjx",
  "key45": "3TDZda3BS8YNuHLUxYjNT2XEw2FRW3to33qSmxkhxNKNMMMfThQTN882zAXYKj399YkCNioa8o6tYrnSLs176taZ",
  "key46": "42UwGEduHRRcbS5jnsjpsoJN6wcR7jQdLEZjZEBykZmqJC7NG3J4CsgY8UMKkMAzJbvjEFnDnxQmSdgWgaaSJjrj",
  "key47": "2GhWnSPLhhQpY9taWet7k7Yuwhwg4G7dsb5onFeFxkrM1wJtqzjd4v2Mp3vXc6Z8LuhUeuaraQgE8PquHuNUuaZR",
  "key48": "4Q9j2ZnRW4y3egtZcxcu2WorqHtbhGJdsv8ccEwa8y3NaBqF5t1yRPVvmjapm3Uuf9GsdBaHtRGj9ZoAeaZ8G6N6",
  "key49": "2LGckMjhmF1KqSrvxXmBA6dSi4aWabxK1t769Ga1H9YVqwap3oyH1w7p9ta8wbeayGQDTLeJ32oZXyKm6PCDCwgQ"
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
