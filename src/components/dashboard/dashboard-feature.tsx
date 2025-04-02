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
    "3KsUAknP62k8ZbRqXZhaiMz464D6wUPByXNXQNd8eRNtKAieADmbBUXfsMHrfiJ5DVGECH6i3yaJF4SR2aYnsdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8fmZHdwZb79cDnHKURRRVzdJhMHtz6GGPsxCVfXx16yTpgyVqmwibNhFDxEt9AAhqTAhFU1fTUev8Ew2PMvZFY",
  "key1": "4UkhMsrjQQmjcNGzAFvAqE91nfE3v7D8FptEVBgMNMN2av1aLCiKonEkDfsURPUQkJVvoY9Lgx7zspsGkHAoCWgc",
  "key2": "TjzwF8SXysHRempmqXqbZNdaSasbp7QunASQNsiWWkkBFDmmxcF1rDrD9y2jcjBSY2DkNwjD4HjteMfrckSzKHX",
  "key3": "33rMdBjUdH7eP1b8iQoX3euaNSUsN2LYQjhrtHqvKCuZ5w6TrqNtarXmKHZzvoYf4R8Gmk6vQmd5aqx58vAnb8y1",
  "key4": "AeeaXGurEtqKoo6dF7jMBJBWWyPKR3pMGXJuGHXyGhtMk3KFob8VtSXTjqjSMQykc37GQBZnqzKhagLg1cjPjAv",
  "key5": "2EbWPTtQqfQco1b7joNV1iUvCMz4XqqQLQUM7bLqdaCpjt6saL9LvXnLkUj21yMxZbAuqXdB2VbiUwA7Buev8Py",
  "key6": "AXuv698XU7bS7tzzJNAUkCPkpMK2WCyiSK3Z2ibji6V4vpXdrwsD1TE5asVhrT1S9rX4K3AgQFF4YEEBiiZGPuR",
  "key7": "2okc9u7tL1z4eVws7M3yPfoe3yNp1R4ngt3AMFyZXNHvKU9QDt2f2ddkYRCrWAnAUdHmkKFNjsPx3kvLCqk4Lubn",
  "key8": "3TSDGk18NTD9Dbm3MAwTDLRRidXz8qRAitoHxJpU5w7U5LKGha1PjXymSiSoRcE1j13qeeg23uGyNvRzay5JcULb",
  "key9": "5cvGWzDA8xLENYMcbA2kA4j9d6Wu6nbTYB6YtJpDL9gchmmQPnAmg9U6Rj4rrBYPUziJxeAF1xqbU2hUmZjH3HWQ",
  "key10": "5BQbYJhEHsQFvk1JzDxH7D54mXDFPptgZw1BEiJ4KPHPyJ7sTT5tMmyzQo5PE7EpvJoRQEKDwDjh2oLmnrqE9bxF",
  "key11": "46H85W3cui3tPaqrqTst6AjhJbKwRPhXGRgwRpqh8Qfpo4KsgXnkxuagponNwjPn33wYj1kzUGKbogF1yL72criR",
  "key12": "1idTcWgFbri11KVjpqpzL3gcg2oYuDybMGWEkRcE8gGL3QpEkn8imocxxytiAtJnu6L2i2t9pJQ5rBikPNxaLTY",
  "key13": "2mHjxP3PJ5K8oDLSMagsf7SeSQj6tFd63RPiXpFiGAc791iZP8SAX2piqVfTxUD81Pis2u74V9LKS3tZo1GF6ud9",
  "key14": "TeLKLCp78FKyNcnafXQNRkFue3KUDs5E8mP7EhcWiYLFZ374B6jEoq5GxEa8VMKWanqAdQEqMREX9ojcj3GWtNZ",
  "key15": "3b8VWxURXyGrdBBWFFk97NY9fr4vfjA6VnMQ6JFpyM17LVNE8vLoCJMriFVwTUFrab4JcxW8CytXJLfhraS4bkJi",
  "key16": "4pp5ybgANCV3CGibTZL5vuPPKi3oW8DTh4NHW51sL17EgvsmkapPwDtYkajN3ZuZdNeTVgN6H9tJzE6rinR4JqFZ",
  "key17": "3KyCFHS8iLpNwYyiXfJoJZF5rJcc65kdGXGmrBoQoCmt79yeWUQvFAGF2SgcsAL6CC9EKpkQNy3B1seDauxSr9ci",
  "key18": "5jnaY4sxund1zzfY2NSP42TqTfuHaTZznFpt8TCaNPSfYKq9vkNwBs1rSMUbAoEBC2rFs5mZdF1hj1m8zL4N9mxn",
  "key19": "2s5jLnZ85cBZtPk9GD8oMCqfC9piekkF9x1fViDsSqyhP32SfBij7baZ7zqtrJb1mwfPeQfHMVHarD3hdEYnPVHY",
  "key20": "vV5WN1reGenhUFHXTkiGBR3QFfshd8MqTJZ8p4qNfJUZvt8PNk8sHQuBTwmgeSNfnAXqXimpD9vQRmSHZCJQncx",
  "key21": "2QJfgonNxuAvjZJbv6E29MrNDEvjvS8AMTLJ3aqG8hD2R9ughEbQ4HE2QJh9BAppeK3av5uPaFvca3n9AVcusrqJ",
  "key22": "4gk8AcwBnxT41oorojRiHTSQQPZfykeMDjqHxrAu3yfWQ33ErJ3MwSxLKTca5YCdsYdSZW5CiQaLkTYiQU7HR2wS",
  "key23": "3Sz9iHfSVBUqL4eU2tTotgqG8pgyWHRNjHQyentgjqj2XNQcffCPHLceLNxuBUgnZf2EnUQHLXNjUybqmN95qsJo",
  "key24": "3nBu5YE229jNunaXJWuV692gf7jeuPi6x65tJXLR5n4XbGWPS4VJY7CdhGj1wL6jVxDWz12RhQvKCDRTAiPE5yAR",
  "key25": "36L4qXDj6hmwUgMr2mnQ9pi5vYYujGbFdpGrjThvJ5YTQ593SJGp97zLeaFZybWhtZHhZ3SVSQvurVRhiDCCUTd1",
  "key26": "4uo1bCPcJ6KNMRUZEtrrkyXmRGdmbRVNPF9AuB4sZaHJ7a2PvmGKPND9WAvZ84tn4XVE4cMRnuDDHazvpLKcZbCJ",
  "key27": "2peGvXZBYzwXxCm6yu1yCnu9EKBZodZ7WKUNmQGNA4vnNRdSPZpaNZvBNXDdhDQLmiDDcJbCWqPtRU9chzAmPj7E",
  "key28": "5LrD1BsUvp9xBRgcTBZu9yDMHGAVGwUYHxNVryuiGCtivj7RfyNrapHJF1PLjhnpMqECpi1NNYaNdvhN44Y5K5Rt",
  "key29": "35nns7WZQdwq11PVri9YZZ8BdjzrtkrCx2JKY84YwmecFTB2QNR3pYa51WUZondUreUJK2XXdNuL1DPLQ1vCiSeB",
  "key30": "4a6FYXGrU9Z7H6F62j7GFTxGvsngDqtNWSxJuN9obtgcJARSXBRzGLFvi8cP8wZD9VbWAdqVucZ3JtduLg756XAt",
  "key31": "5KPiwqC7SNNgswrSc4a781z48yHYrGwhSobsTq9gC7jd2ys9Fj75iTC7zSsEJkud97phrFrWf4aJLJ47ucGLBzjo",
  "key32": "5YSRWv28HDLnGTeWDKc6PYGcXKatkAbNxoQW9D2yCU2fy3iPFhY3sT3fNDhTSz9Zej4RMTXHPVJLn8ydegd8PVk8",
  "key33": "5q9P45kqa9ZPmquHVf7rW4BvoZQHcqk848jWa2XMzCkPbGphxadJGxtQs7RynPn16jQPERSKVgTdQuNmwCpAhmx6",
  "key34": "2Xrj7aj5dQAoF6bQ5vnAaEjTKre8MBk5LtUpcEU6befDRxqEV3rwjNcwFjHZZoSLUBgq2hqVd3NQcxQn43mn1ZW8",
  "key35": "Y7D7NamVLcWxwgnKven6MD8SgVhnh27r5q1To5UzfW1EqcGBr32oVFsJqXQCzVoVQg3UfHnxTVihwT2cajRxAUa",
  "key36": "rk56zRCKKoPJnmQTaiyGc8GiZne4Dq8MrPSVPgRZRVpzCmvrozuBmhs8HASJYATnnocUoShxQyXqkwKyTKCPrGs",
  "key37": "Kjp2Xu6MBQfvXA3Nx2SkqnrCTko5kbaQMTePeqvs6JYxnt4FnQJTzFsFfxGykFY47aqbj9Cu6RCMVewVVppmgQ5",
  "key38": "3rxkH4PygZGXWvTTUXY318jBsqs9tKrSjJoSaq1S8Q1bH9V45C24AFRHesD5KuNn1AKrvYAvLhjxmffzYYeF7SyM",
  "key39": "2e9FYkFcJhv2YmtGgw7C447gnrTCRauzdJo11jgZ4zjTh4CoU6F6xV3MsSF7U2oxY2cfRM9JBd24dFaGJauSfonk",
  "key40": "4en5swTxeD2SDsRCu7weCnWEj5hLF1sH6XpSmSniZtamkcDeyjHG2XnQv3W2MCPPxVKqWAxLF2GRgeodJLHejdAb",
  "key41": "5BF5NNw74UyjVrGyvTXaYhRYCpGHgx9T3UTDtQkc4GPiZYGGtpuNRySSbQJRgL1WkLmuEWAhjE3LQXqfqxKUSujy",
  "key42": "4HHHUtLWAztz8GC9YY9mw96GEfEWcyTn5SRVoG5zfc1ddViY157dP622Pn1Z2h4xjKoGHEJQsKkKFsZWk3Uuvufb",
  "key43": "5641VwtxDX3tEcWUGrejhvQU5JhH3eQuexDBbu2qWkm9CRoANxTAtx4QhugMBo6DWnhaaoaqB9m6bgNugfQEJoef",
  "key44": "e7Ub14ZJpB4PtVK7PYHGd9PwciMhLZqUHnqeBhNuthjtHcRoVHXQi4MoG6LQgcfdKjAGwoUiLHxo79iyawxaJBo",
  "key45": "wGoUWGWRfgrhaQ2SU45so9SySysCL7M5XRdpaV4j8weNLMEmjqCUeF9YbXLAjkzDahNAnkUacf6pPW2stXNZvDJ"
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
