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
    "qi6DzGURyLVmPRwhKfje4kyooP8t7XjtvqzBLbYHciQ2E3cdfAxcS22P7bbu6FYXVis45yPTXS7y9ED19Q8Weus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rBRtHhPDorHEuCZ9GT4cRHgwKmW83xEj7zEzaoS4HkS1Dp6dKB2edYwZx6RThxU9mBDjqM7D4cRevFci6CdnGJW",
  "key1": "3gWbqixT28unSFHysXepQN7YC8CYgET1Ar1MerezHv8TsUk8xWVTaradnJmzBm14rsxPhSkk5PTfvhk5KYq1eatS",
  "key2": "4bb42AaA1uMV2RAsW8uTkPMDmnUPT28B3oLYgB6Kbr5q1spHFLjrsK9WJyJUbN1oz2TcQ8C68DFAMU4Tot7d7Skf",
  "key3": "4rnj14e8eNCdryEer7o8mBqHLdhYZ37E5DH8t3LZzqSzNCNtqk5MS9vdTVXYPeAVQRa69ZiSuQ1HWxpyZw4aYqD9",
  "key4": "5rXSnSEKmGeJ7ij9r7kuW5rKn5uXMCp8RTnKPBADvvAZ5DRUgqeRb4RtG9mgBPtLN4KCF4GTWhb8PQWaHk5RAZMc",
  "key5": "2ayAHAdmuVhhxC2twbB2Nf32KMAqbyt6ECxA92FW3rZi8wuKk3CsHUoYrUrqF3Tcjxx8h8xsABgBmbXRobh3Dfwp",
  "key6": "4YBFnGUbNT9bRMD5rWg2maDAUTALqqnZd7G1UPLH6odws71sZAfQL2cPLprSwdoPQ4xWVeHqREDFAdKLSdYdPntG",
  "key7": "XQTUTe3ZjMXYNusVD2itcq6gmDvwa9kvTqXmzEz1Sha9GbydEGhXhqbKMRNCxigNbwsHPLGDF2vHsAw24UHrdSK",
  "key8": "NKjAt8BxzaVXqGt2Mxd65zEn9F1u4HaTFAs2pnr4ioCW4zYw1oS993ZnZRJti57Vbzut9z9NdHf3papk43u4XYD",
  "key9": "3evMtNeq9m2D7PxsNPXWQ5GDWwWUmhKdE8621aLrqRkQqK8HR9y51zv554JukjsL6DCbzcsHqKNgg5SEo52abrsL",
  "key10": "NHjrnvXLLC9i1ZWJVuHxD4ZJewbQ283vY3ddgRrTwsWM25ja53wLFigyafJwygusfSJTzPQeE5XDBr6dkwfxUew",
  "key11": "3wwU8kY5JBWGt6rHh7zkjD5fhDJEJQRdzQ6THXSukJxaSRh7fiMQAGyu2uifDkGdxpeXb26CFX2oxtQtr6WKK5PZ",
  "key12": "a4VjKgXp8xWj3dtS5uWwQwFvrfZBHNmmXxbNpLwGkefBb1zVdFeNvVZo8pfezhqrKQeprqjQq7gQLYMKnofFWEf",
  "key13": "5GSpTQvEfnxMhpB2zGBmzKuofnKWv89ZgWay16gcjAGy4ofrys1YLeJr7tbT3Aq27n1CreUUV5eg6CWv3bc9duS3",
  "key14": "37hHt7ariNeSoay8rZC4doKB4ACnhEaZuscjHRH5mScmB3xVGfrdLpzgpj6GiGg5Hnm4aiVXS5yPp2UmwFXAjhwV",
  "key15": "38F7fgB5qRoXmmDpXWPSQ3NjiFEAtfmHectWdBMH5pX5m2f3V1oEwjfC9VKEfmnTBdTFS4L5wJSGQ9BhRPVACLnA",
  "key16": "FeSTXmqvMSFmqwop4Af3gqFTbUwiAbQW6ArsAwXgeBXSm5WJHgwwFgyUiRFsJ3f8ngQon4fKUsDYHwFrvzLMhRv",
  "key17": "5P9NxT4nb3CHyc81fLRcF7uuEe89ZLMpS9LtQ9P6Sav3qJmrJHbA8uFLncZzch85toAGJ8vKi8W2ojy2wHdvCPLw",
  "key18": "2Nd2Qb6PeHmhnZxZWbGN1woaebrcK6bpWj3PojRXfVbt7wYHV16hgbkABKvax5VUZ8F8zKdUQX8KUHHpjfokx1xX",
  "key19": "3rxPir3s1zrN71DpmScGxsCeRMGaRx1rsJcttuaHET4HMH8UzzjmKLNoav23ibdNVQ8NQGRv41kPKnReZW9AbLXC",
  "key20": "3E4azUqDW1r7TCNNyjRfu7jBuWRN1SLqdb3ozS2NHCnew1ZNevtCwxsz9z4MvPMaqM5tb4gP9HFxz4M5TYZS9SL7",
  "key21": "4zkGMdbxQsJCfTDUfBfZYZfnADH8nB4YCJY5QSmSx5FM49FrEM3RhDY9QAPwBJ4dhAk2qkaXBNSPfU5LEkokQUQ",
  "key22": "4oGVsyi6LufNjX954ABmcwxfHUAewCxPwsxUbwD2CTVdsfxoLrz6GsNuHEGfRBMyjddAa9WFJEisSmH2Sp56h7t2",
  "key23": "2TcxmiWEwGH7jJtxPXtDvtygF4jbThUu1qoQqgT8MCA769mngcXcMprW5ieZcDksBBYSUNscnnRNEzNbfSafXHWH",
  "key24": "4Lk7Gv3JzBxBhAka6TW7H3AEK6SRRAiviNkr9VE9U4xVxajjmPjppbtj7jyrbeBPxWPmwXbeYVeW9Hu2tDuaB1Nk",
  "key25": "3fB2LJTeD5HcdkAmUiPTJo7MTX54AFuMNJW1HrQBDrpAM2r9C33xWqSiUof6dxNAT9zfYHc2kSUZDUdjeybTGMTM",
  "key26": "4EAUXRA6ZybYhziskrbC57Hku238RZzTHsZtLxwjbCr4T1wmmTyVmDs1qksfWhKHfjqm7LCXvza2BLxZ2xKYSPpA",
  "key27": "35pmwrKtAPqWsoua2B8wRw19DsWHtH9i5vRMiTn29CGT3ZzpVsNNb5QMGduL5iC1YF1X6o2JYKvLomLBAwWjuoCo",
  "key28": "BkSUZ8qJK1QSwcMVxhoGZE71p42gNFS2H1UBstWY3QJSoj1rnqDagwkyzxKYKEx3qmmjzeyKYyE3YgZgfUCaLVf",
  "key29": "5RtX98uaBxxW8d2qkLFHJCYEZYRmpBV6M61gArVo7EoB3g3ZSD49G4coArSQyoiA9cLjwizP1bfCyQQg7Gbm5ZeU",
  "key30": "3RiDtKV3ikAhe8n8WLSn8f7ppJT7UcHQ575QRZVijQjp33acoTnEmYrPqTebtvxmLezXSZdfsWrCZqru8dmNRtZd",
  "key31": "36ZNzUkRk3ZwfPzNFM4JvPYiho2mo4ykNHQLh9YepLst9CZToiNWX6GPfq1qHRxWnaBp37dGWKM7RJJXzHZmCXLA",
  "key32": "3ZKE9DNPhPp4GqmFbAy5c3msxgPXFrHkQxXrZ4wR39zaYQchitU1Jg8xSZnkQTrNshQXFVcTvEQdFL1UkJ56Lxat",
  "key33": "2Q5WZrQSznKgDc9J6BxigWWheNDSb5Lh64mC5ic2jSdSzNBkFgDQcpR3NP2fkJJVifnZLgnXAXXYBqDcqZuH5oid",
  "key34": "4dQ5EFTUYBjHvaFKzTR68nDk95s9N21Cf65c9KZ81oWxEBTc4Q833bPSMixMc8Z6K6obYdRo6HLDiRQP3yYXiNs",
  "key35": "65vXiqZ2BaFtgszPaa3DfSGC7KuijVWVM4NW4iRmjqpPygm86yopZoPhuhBj4G9ZXEeeRXkdSZoFvRW4tEvvVyJA",
  "key36": "pnhGATuU9VYUCkS1nrHoXj6Y3dq6KxXpauU1gEZamofChi9yzUb27vxA8r1Mx1MvftJMngV29epqsr1Rm7kfXfb",
  "key37": "Y9Ys8buZMzjgEMq4g8SY3sDeW2M16HiqLk7dVF6BuJpjg4tjLFKbwKYLtCYXQAGVPfWEbK8qQsbmfdn3zka6qHw",
  "key38": "265LDRGHVr2jrwFk8yD7oo3NCwzYAyAyVeC5qs82beZGYaVoSofyMVj2UBbgN3k49RtqWEwWZ3fAHkyGdG5oCZbs",
  "key39": "2jCySEKXEei9dht8o8MKX5wZLHQMSHNVoMomJFWHB24JBXRgP2aLq6cTtqCFQiQFT7P16ex4TmptEc2ke2pSMDQ4",
  "key40": "2DDSuDhMMR3PTp52ipNA8FoATSwQPFhouS7mCSAuqkmKve1FKDfRb5g1PGxjamzNJkkPuHnghHd7P2TkMw2K4XFY",
  "key41": "38NZQJnxLaCJfRxuCCiQU172JVwfYEEn4dFrYGpcA9xMketB3LG2UrXa8Qksf288yw3FuhNHq77cdtysiL3w5ZzJ",
  "key42": "4ymadEYpggiXvtBqAh6kLngznneLWy16WCunhpWw6XrBA6D5czMMBDDYRXPrUAk72LybpGMwLNjH5M8XMQddcku5",
  "key43": "9GNKJFDvakWySoPphuX7cq7LbZZWDtPspD3qPRbMRL626mSfUrsiKhb54JNG4mnZN7Uez61Nv8cxfDE4hoViuRW",
  "key44": "5sUyDdj9i7W7ZB9KG7N4JW8RfVdr5jZ9thEZqW53eDaCqvebYG3i6KDBv16pemViaRGt1r8gRx5sSzQAwb3DNhXW",
  "key45": "3dNXfs7MR4bRxNc1ifyS3GMAR4Ub5QmgqQBRHBhC3nTisEtGondrnbzpy1ihk5c9oeb75wodY8AEecy45HSPEQ8L",
  "key46": "2GSG9K8vmNBY1YTSacvwrZxVqLsuRp9PqsUG8iiAWxZxAtmwMo3qWYoQF3FhCJhB1HUZU22vFDxpSHwsbnTPqqog",
  "key47": "v5QjtUhKk5hRnFcbU1fjGFEJqh8R3cYa1tzyAJYtxzr6Dvx3NAtHEu8skmG4Dzg4vp1tXeNgpAJX2spxnpPDsbu",
  "key48": "4JN6f5pC1RzTixZ3KiHazJYHcgZSWBrR4CCPX28PMse5undiFAFNYgwfPGGhuzXZMCq6TcAW9iXDCEwTZg3dz21F",
  "key49": "fAfAkZQJoxPr3to53ub1fVZPkECQYyiZoLFvSGeGJwxH2aSSTYM6CAhbgCC617kRQpqDSHBsbhwUGDDNXYYn3LH"
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
