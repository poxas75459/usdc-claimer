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
    "4jShhfev8X98bEfrNy9oLTaBVQajgLvMb7cgj233coKv6QSAQybBgT7bp3rVGr3hnEExWx6PoSQtDAYqgLz6mYxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54svGeAAvF24dvcVZYsnjhxQRisJTUT6mutmihY2PDQfN7EqXYppjTxacvdZKsxgW3rY3Zb2rSzE48Fyh2VmqMbD",
  "key1": "3qydR6VFAkBMgqj9R6qpEgefZu4oys2Koxw6oGSVJ1vyeARA2ArEnM2yV6S9TWRRypwvxyNDRV7J1kPLExXGmKLu",
  "key2": "4R8u9CuuFexbyNE5KGXPYGGR5kqRqYvCzv6imhUs7JKAtRz3gaMQx35Mcs6vWToFPKrPwopnhn1J1SjVMt9wteyz",
  "key3": "4trnZCyz4WYU8jD96f7KwzNaMYe9Vx7aZQs2Jk9HURFDecf76MLnGrmHKzPkreeKmSS9manJxUZL1fyGjKacyGE4",
  "key4": "5nLWFWqkDdzDBMWMYtMUtj4EwVwjfcreRRibq7WN7jpPT4V4sf14Dazxq1SHAA4PfQvskGEbGL5gkZSwXsJsf5ea",
  "key5": "Dy7S5mByCjM74jp17C8mpuhUyE7iCmDPn8pRJJWejrNwGygomsCE1ZiPoDerFpZCJigB9JzrjVzEdZDhVngtVDy",
  "key6": "QkvxzXqqBSoz5zfSu5XpQFiyj8XG31eigjjdmy5s35pWfZB3Vv55eeA2f8b3tYZvaAkNcMd4dsHC9jPYbBNwfX9",
  "key7": "2pJAZyzPXGUwdD9enCxKSRHxhTrt44qHGxx9cWk3mu9zPK3UHc3inqvTKaqXXhCbVRVyLrgPAV4b3yi7GgRjHCVa",
  "key8": "2q3kfx4YMDQw8LDAhaprhbkq988wkzdTXXvTg1vuwKeiGdS42x1zHiywPg9yzTuYeh8mkvSNPV12m5T8hVFKkePm",
  "key9": "3WXQ4BZGZuNGoF2EcLAerY9uTq1urn6s6qQquJ3fkGwLaEjF1Q1UFNh2NBc1TfxTzi5NgnX4w7FSgUYrkz5R8pJE",
  "key10": "efF4nkBgDToxdJxpXr99tMkvEtqr12ooh1nQ9uJCbaYgAAuKXKJfxKbgVSpxKL6QmAj62SXJx1PtFf56ryjJvur",
  "key11": "5mPdpdxstVhsa26zahPSsLGWxBUBZgNZB9jCvY6Fd2yCv2Gi86S6m97N2zV7WvBZDtCqGwg5E4mdH8qsBYVf2bkn",
  "key12": "66gzvNpK6zfmKYeQqmxC6pSFXfh9RjsKomAVRnXQpHo2LPQjdaQonnKzoVdKmF53mqwqNzKXFHeSqdNphF81ycBF",
  "key13": "5ZtD1Gy7Ammef4SHe1JRGNRnBoAGXX7SpEk6EPNLsSst2N4SG1F5XtEyjMSqsgv8ygRp8KJviRESAuDXmKSbBWgE",
  "key14": "3S1DQ84ZDNQUWbjPMe96jwDoRVKfikJes2GQZSJyNgEdBvsqgSx52S8W8jA6cPmCnLLQW2VA19RrBi6mYi7aRGJe",
  "key15": "4aRJbAaQ8mXVkoEVjnJ8Qr1pvQfu8zKykdxCzSvkzaDBEksqLLXPRzWAZxswR997fUo3E28Dd6MWo2wiLKqtoL2o",
  "key16": "4bd3AZ4UZu1FmYs7YbnG5T4RCqmaC2Y3aaE5uQcc1ebmUVpFHLrNASaDBqSLZTiHETJrKRgFEwtgh5YW4dSQcNjZ",
  "key17": "4v1qfcY55q8vQpguhRmimHQKYqwFz6UYS2gvoS3qmmB6uVoRcc6Ko5eC2qSuemRqSGeuyo4xFFziAUWTzTPcAWKS",
  "key18": "3YZiRD8Djg6UGZVYyuVXNWCY6wkNd5xrzTzLmKkfnDJzMRaEm35fi4GgEtqz23Yd8Loema2kMTqWuNrJezFwFn2r",
  "key19": "tAohnrknwwfrEuR6A9mbQMe8fCwkqcqixUL283MAyWmYxkGnmZaCxr48j6eyD8H7cx3BqebVvZGEJofM1wjwmGD",
  "key20": "5RrovVfSwv3CyaTZdtgEyruQEmy7YMKHqWfoBRLRWQrtj25ZyPfKWEnwkVeNCw6pwRhh1qKrWNntuzk6xh676CZM",
  "key21": "qjbjwKdQQw5KXJHkUZqzHgrWiaps5zQUntek9PYvzYccpaE3wu8pJdr9MrwwwKPZ9KVNXdW1WnaPYUf22E5t5sV",
  "key22": "2qEjbmaL3M7N2ecUgUHR3vbne1KYVi4SmzbzT2VfWrQhZ2HRMckTM5W6pCPTt1U2A6z31aMytd7meRHRnytB1etx",
  "key23": "3yYSyjgvGskKZsz6kJ33eBbm4Gg2NM9diHD2aCfwS1w1CagLDR7DKs9R4xtUHHJvV6stBrB3RK1Gy53edXBXPedd",
  "key24": "4j4k14uv3pacNBffEtor1uxarCwJxAQrtv8h3xSu8MbR4teyBqXgUQKptaPK3x66GXayiFFc21e3uW11ttqTxz6i",
  "key25": "3yjgj8WPhpBFw9XmH3R4zH1y1mgLUQ6e1aWcrpWbWa317MPDQ3rFJT8p6AydjFDRoM6jjaQ2gCc8HrYGdbsx33Qj",
  "key26": "2kaWYRuQ5326PrBfwgtCJ75dtM8yisx31xU4yLtMf2pBAuy62vD6XiMAxeEmzX631iQVrs1nQPdqENsGsAN7TWKw",
  "key27": "4WSEWKw7q53wfA4UYwKGM78ZveRQ1CZ4Ck8LwdJqB8DoVkVTUcE69MnegKm7Dgvz3Zdtx7GfLkMCxm6zW5jEAHRk",
  "key28": "5McXN6EzNNHedJ1vvXwJeHcyuZLcQUMiXUVi8vqtDJLezsMC8MfyLsWHotcekuCQ7bVMJq8D3PXU8tjtndyCeHUu",
  "key29": "2iNdvykBpBaXVHiCy5aFMEEhARJ2ffou8cbU95BDxyyD78e25H8VYCtpHqYoX98Dx1JM7soo6FYHG7P2MZnRYGXJ",
  "key30": "vmaVs7LVdCdDhBBkfTrTigwc7xZL2LF3Zqg2dzecbTPogtSnkFHuhPKj3ADt1k9DU97zAq8TWrr1g7rfH4pz5nm",
  "key31": "4fGii6zUFzLMo5Kj3swgADHbiQVaYFAzYM9Z1wL5Bn79xNCxR6H8udsD9zqKwS2pd13gHADTovNgRMU8VUJiWG2N",
  "key32": "DMgh5ZTK2WCTQ6zrf5NbRKGkWdWCxJWwLfnZWQSWXu2ADdubMM1Ybi2WdujeMnVEMUjiBcg4CoeTZtedWvZWYCb",
  "key33": "2PkMeqAkb9ZZPf3AvS36J7Dg4eX2UBkgW4y1s9A2Vv3jvxBAh7YDKsaHqMCrarGRsdQw7fsJJQya94MmXarsPaLo",
  "key34": "LKU6a1d6sVcw7AsBE1yjbBWf7AA13VJTZyEppEJDfNtYLhqEVXufwwMtq1QP1s9CRJoJrQFbRUH545KabqfoEdd",
  "key35": "tZnU8hhYdJH59G7ZJYj65Zyyy6mActz9fEifpuhLWEtJ4DNNFWBuEJ9Sd9Wg1d8M3KNw7eGHpKGMk7e5jy61QY2",
  "key36": "3S3DqBEqq8q21rYyb7v16B3p64ypnueHH4KM4vFa7RGgAbtKT197tpKCzfZN7hG37AocoMGD9vJHn3iKbieEtg6z",
  "key37": "3eMXFYjFzhK4cEwiCCkNvv3dxEMcdkJHu5sentpDcXnCrjEhNjYCe2kcoLxAXJ8rPaXJFCXgjtHWgq2oVLsfyzUn",
  "key38": "4T2bpSQvEu7rGXjRuSPYSvtibpz33ozAeHRbYr9GawjwHQsgwH5xZP2LpV8uqHvN2m6F5uM3vkiywGdQtcEvjFLC",
  "key39": "dKYyqaAaPBBK9hP4933jjxig4HBdfXb76xFedr63BXFyWG8uUGPFfxCtg3VWsMDPyqwRY7NH8HYACmy4mrgFoYw",
  "key40": "4DktFYT5tKDVZqZezGvK9KQkHYdb7LhGuA47tjZqhDq7UorNm76UPbuHaFCY59rHCU8f5yrMicnYx5Hp399iP5qA",
  "key41": "Dg7TZcGSpT7JGFz6NoqjXotBua8tcqqh77M7qHYCrgX4hwv1hCJq2wWEZE8dbVH6EiAZiqomjDshPAjSgFohkKw",
  "key42": "4bvPXokgV3F59F9FoGZw7F1uRARumQftMmEN9KpicPfQQ9FVQn9EGKfwB5k6ENcUQTqSdfub44zq6HnJZXiTt925",
  "key43": "2qxGdYnnvnLvGxRQ2VxBewEqxt5wGzhCptfEwegWZ3jEMSVoYsWMs3qQwJiXiutPYokyor7sqJBBa8Sa2D3ega7D",
  "key44": "3JBb7YuecgrghWRSC3Dvetfxmup1F2Pzi2WJ7EVd4UUb97Zm9P1JwgZpCZUWTa1azNYe24NLCHXXvwp1gHvHrMdW",
  "key45": "4RNXQJCJCtDzWzCArEj2MQ49C5f9zVzj24qb8dUPo1XzeM4tHc6PRF1TNQ9gk4ASrSqJEAUythHAsxEY5psKQFG4",
  "key46": "YxXb5n9JE3A4f7m39CGBPuY8bzCVc1m44RGZ53gYPNwCrdD3AY2WaaNuUaRDaxYATF1EBhXq1qx7F1bBwDmpBd2",
  "key47": "4tT1n89zzgUApoajNKKTLdoymEfDnMogkfYb7gN1hkYXiZxYnJA2kLu4yyYxqT2Tj7w1Lshjr1zebpfzKpXDvbgA",
  "key48": "ZYFKKG3fyeF55ESudA65yb4ASm6BcUoQAi3Kn1Qeztn1X56HK7iKdVmBRLLj6Dp3xN7RrnqpgPqPpsKYVjnqRYS"
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
