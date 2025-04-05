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
    "52Kjp7bKWrHx2Zak5icg23R5uNKN4QiiYxo8hFeEQL79zyhZhkXNUPzNhr6f7u5F4HwNhPBR7xmQBedY69ebJCwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akArt9VPwYtNba9whwkVPpbdTk85VctKB4HfDbmyPbkDFAhkyNfFWBAfR9CugYYppNoRUMtUu3srjP2Jm45oosp",
  "key1": "4EzU3GqEWjpZikFMW7GyX6q2TBq9PAjjsyQf7AZgHQvoR866B3fMsMCQNd5FLEpB2G8S7nBX5A9TSX5FyNDAfZtf",
  "key2": "U7H43gpJx2NugtfxocAiXbZh49WMoLyfvg5VYjyMj848conDqhy8vvypDhsKR83gu7MeDxvBaPwn4SZTTrKoWt8",
  "key3": "2Nqr5tdhmE7YVocsU5vSN69pY7hjBik1tTcst5mzSxUaqpanGQ1DPDdrKV2p28VJs1shn7zNtHjhqiNmmvk3Roeq",
  "key4": "4rDdPi91gGEVjyKb5rZpvZDgx5ZuXyEAW2Wrw7HbbYQvy6oEcuAcMFfdNRw27RvCmaZ4CVJHoXZBhztCSL2SP4HJ",
  "key5": "2QVSr2rAuFnrb6pNRKYzsL6NmAsBXPSPnUDzzXFdHXwQtgR3W1d1pijgEqVNVgstfULvnWH7gyzmTXVmHLTueMtJ",
  "key6": "ueyFTcsskhTxaq6ax5LKB2KHcJJ3Ugsu3miUsLDKCX6ZyLV9QiKr8hATwNL9wHEPpbibgxYaW9UMhe5UBsCkN89",
  "key7": "458V5YiCqXCbRgG8ffjg3SvCQy7DGhfM9yLTfhW8h7NFHG7ZfR1F3Kgpi37p8W6qKL37ccKaPrfahgiibA2Zu4Dt",
  "key8": "2FhnnMXDpMCrSU9jXnsJ6bsfbJodDs8ip8B8cph3mRg4v4kzSN7PNvxwQLunQYai5UieNLD9Yu12e7pRCsmUMHW9",
  "key9": "2oMJGT7gymezFnfHS376sBZJ8DWkGdRdFLPdenPWKNCY8xsZopEe5KjB7xgG3bhzriJ9azxaQxjBtUFjfRbubzsQ",
  "key10": "4unCf5XDvoLcBsYCFT4FV18wRbLYP6Eqmb1yauUuwAogkW5AsPQgE9rzFVGmuyNiLXzYRdpyiis9B7EYgZy1uRmS",
  "key11": "5XdRs7c38FbxJfjERzZBxfRLjqYydZHxHT376LQkB46Mvg2jbmK8FZAvbLtPFngQYkYfG7sLi1zetnkKDsf22rJF",
  "key12": "4JbonP3TSyLFVGb2Rqj4EZHFdA37bpFpAveY4uYCPmMAt2LQ3eN2QHW8GeRpYBiW1XDsT3rpfJPwSZKoZzFU1EMU",
  "key13": "2Aus2dFgekL7swtSBo6pkz4XKBYGorNC5ytEfQn6hJVVv9TNDVBMegAs8HqCQzFkwyhSo8HsoMD3aPV6j5Jx4KM3",
  "key14": "3w1vPgZSz4Twvg89j8xjFYhRZgk7VUm8t2x8ZbYdymUqTSUWEP29Cveswb5ShGuLNPhCmJzoSc9zDLLo4wgwoby8",
  "key15": "2q8ePcnJJnWPAZvBRLcJJuAYHygRrYBPY6BDsGmTeMKcWnRmpgx7u3b8EGD1xWZZCLP2XjLKUxbS3BQ54mDnhX2M",
  "key16": "5xTTXHLfxR8RJH1M8FoBcFDt8yfy8qhN1vLjJimnYZvbNs2nJoCeWZjy2j6dRnjFcsUNY2v8dEvtTWr6CBd89RYd",
  "key17": "4vCbRi9p3kKsLksJP6zw4oRJTva546Ax7iybkuMLxcDVStwYCcFGGWss7T4Z2oTc4sWcdrCq7YuJEuxC9M1Z98kM",
  "key18": "2tEFuxNqJ6znvCrAr25TEpM7M78z7bfshk39fTWZtnr6XrusWeFUKpW6H5rhoUoxavPy6skkkBmATsUQQZ4f1y12",
  "key19": "3KL9xLBVvsLDXFHRgF5FdWvjHpf1SqjHqfauBYsn9586VJUSdozJYsh7ov75dHiHvQkSVN9JCcvf3Xmt9zw9ZkXT",
  "key20": "2KDiwbZjx2LjNM4uXNwp1GHqWdA2tuN6DhKLsK8avnAhX5bSmtQeiY2NAfDQ6QJFVghjMuCMhwLQWSFGiCwUDHan",
  "key21": "5iiBf6KCxiGx5JvmyoRykVHpLpRGtV7t5DdJxA4egDSxgxp7kAQkGjk4R2cEuYaM22LtGsymAhE96UjYUR8s2oMg",
  "key22": "3NV6hHAcky5Ut3EJ9JsxbLZCg16NfnuNufkmAwKQ6XLFNFPGM2B4UHTk3hRdAHgtt6Wa9ghVHFqo7RKnzcsn8SzZ",
  "key23": "3Jp829g42Sbaf9Sv3frna2jzqq4bJjXt4k7bigWVHWin83CxBCxoZ9xmmymdWQBoYn41mQcn9W18LaPuRVmtaFnj",
  "key24": "1i8Mq9g4ozRaiUtteKpAWEw3KvDm5gwaGGM18Vs9RYmEHbHxPhZvWvT7kxy2fkecf8cqzfssWYN6WkasA2cx3br",
  "key25": "4uXRL8BujZbL6zBT4vWbyMvSxhyBJDYbmRUAGd7wT9qPHW3ep5cvMYAi6xwcUUhLHTKE7tzMUFCdMpFcUBU2uyEb",
  "key26": "2xthcCRaHyXJaz7xTovRkNftm1HeGaa97CyiEpuLqDYXb5QudLdAr5kW2MR8T6PoHP7FdeCfnMkm6dmcWb26qXJi",
  "key27": "5r13s5dGus3HEYAvLke1un5FyvQ8URDF57g4bCFQ5c9mtL6PsPRQwhZWb9uY7qAogemku7Nk6Uk2NZCPdEbRVNAy",
  "key28": "4DjX6cMzjrWqphiRt95KtzC773HiY2cM6373pRP8exhQbcpq6indbmSj9rUjnqpnsY6APYE3kHptHfeRgWV6FaUe",
  "key29": "2YaUFi4wfJGaLxZsuVGEcxnUsmhbnN48dS7sFotiUfsw9WgBn6baU5FEEycmr8L3VA8KPv4sZSxrYHKPXBarfPHo",
  "key30": "5koRMJTnrgpf6r44wuDrQLER8xiTjJjWUZ1f7GcrinWQfER4kbdfMikxsLEdJ72s27H37q5P9wPnfQoaML2nHxoZ",
  "key31": "2KgYyFUd2TJ1FYKFHxQ9XAbDgpEQ2FutZMvgYntEzAUGuFNbYgz89DhCrrZQkBR1vB6fk9jEoYmCC4FKU4pgZLPX",
  "key32": "5tky8EhmiRTu1SQcMXbc74mG3yJeQYDhqTFTGhSfPoE1zoUH2WaapCamYLyAcaNHrdnxNtjnp8zWbZt4mz6QTAQQ",
  "key33": "5tv73CQBPGvzdTps87c7rh6BNHZvjGVC1VqoTw5dKpVx4zyN3JcLSPTe15X5qSVbXbSqG8wj7uRPHYFMH37DZVQw",
  "key34": "3NpcWu8qZp6AUctSLFn42GxK3NSuWKXA7UPwKfd7HR8L7hZy2GMsr9WiCCvMAMt9S3V1xmeRDLsAHrFs5bzRF3h4",
  "key35": "3mVtgCRL9TbuGExgx5XjGkUsxBRdxVfu4B26D449jTNm2Cyckrw1XubbkyjhdmwsrhZAAxAFcxyCrCYB2aFeDWV",
  "key36": "4LHgs4Gn5aDUmMVmcLUz37eLBLe7j8AyfD1f8NLxxn1BUvEZ21wZmBsLt9EsKHpbQE6Su9wGy7sLnrYsfKkZ2mRK",
  "key37": "cGonSuyRxKpDpp2A8SZdbmVwHUp33E1RscNzZK9SE7MzUPHDuXxzs6rwiyHaJ8Rxdr8FEFMeUKcAPdwg7EDm9ed",
  "key38": "66JdZUZte5u9dkz8Tyi78LFtDFqt3t7bkVE2NMHceNBQcNDzTw1k2cJKZ1XpMpRC3pDxgxusWfkeJqf2VnsnxQQk",
  "key39": "4jnwjLtcawGyvokJydgbwuoTUzJAyykd7dxykoSSMQxiaedu7UDn82BLuzzAuZvDMCC3qvDnQrQxnar6FqWobm42",
  "key40": "2TNAdijfitvdAR8mWAeMGiz2YJfUv49a72RFnxiCnz4Viu6TQVeFN5HLTVgys9ehZd2CdJRjKgXeQjvrCQPT2exq",
  "key41": "QnQgDrfBExF9GJnSUq28Fparo7H9Dk2LTP3PkommSMnNtLfVgM2bShSAMNqh8Yq3sFg8iowhwtDHauTjYp3taDk",
  "key42": "4YtsoJ4NqmqYZmhzzKzJ4WmGM79iaATxoWbVbaKR8p2DKaLAKxFrFqnt6CtEomjfLivKp3A5WD32oqU5bmgunXt",
  "key43": "4TGophEN6Twwki68B1dhPhPYyXByFzv3qaTxeSrpEW4s1zftSV5Qot6y1mtCKA62xLGgkDKWtcNZZCYXnCR2EUA1",
  "key44": "2j93U6yLMnUk3dNvZ4dL9zJjNrRregVBAvHsZR9sJQpt9bHSU4DM5Nn326qHNUtFDgcXxWwaEru58HjudRwic9tB",
  "key45": "4fRqy6bnQttfbAE2v1CQH6RDoREiXY4yKFqUiFVFfpAEV3BVvzY1Nk56t23urCR4FzPbMAkRoioq82QQkSFuWqKK",
  "key46": "5f1Tqo6SH147NH4X8eQi6L5PFXvuu4KrBVx8ar34Y8wHeA7yCYvXebo1qodAx7XCAaxe8zUiWVEVhfXqxteM9y5H",
  "key47": "bHPz9YdEaiEw3BrhVD4WCWMEgEZuQ5HN9wAvra7hjGz5Amijow48iFtJ2mnhHf5FK5wSm3mPNoESptRjGcjwBdK",
  "key48": "4SoCDD8K36zFJNggDvSJiSjZZjGpm2vSomathv9DbMToFdfBbFJK8JdXGncLa9sdgZbcKjgZjxzKEkBqTjMLzswz",
  "key49": "2fwZmGSaSpvJVaCPXkzrf4RngFC3Qcdv3ouNz9kGSy8XpDyKgZ1sxm1xVC4dW6xt76CbJnGVJmNy9epM5wvyTQvq"
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
