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
    "4cKon6vUzfVokKsiuPXVA15L9jdRHd8hoUstweyP2Jn4zTn6x39US4Kqf1kKzN7N6vP52T29rzrzw9Srdd5KJpNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKosyk42AFbSvFadAdVBpwXN5T2Yn7jHk9DDqDuR4aMgguRAGLmEaB6bja97vrfVoLbXkkeApPMKy4k8tEBUXry",
  "key1": "KN93xGKz2QD1dkyi9bPEpcpzo4pMt4XK9FXgyfSkdz3TSvsngEtixPWK43XvaPsNLvSTaDJYPJnWmjQddXxTMUL",
  "key2": "3TkZG2TYf8UCsjcVazBqdetBdLY3KvhBiaMn2DNXMd8Qvm4vwJRzN7vsiLybvdL4XnDezykurrPB9i1A5L9stFwB",
  "key3": "4RFaF9upiDXA3D39FQqtx9XTYQGYsgRDghKAnLzo8t5SBiRGmuYX32dqGDxFCurNe4YDewwVZRHweEV7Ma5ambqy",
  "key4": "4xr2983dRrMBniaFukffTvUBWRWsdLunVNYbnKQbLrXMzb4XxFf3AHkAJMb6kZCeJZv6EuppLBKMFhjnTfsaFQ95",
  "key5": "2vSBiUfvW526t534z7bd4yvghqsWiN4j3yH19ZBM2yFWK6qyzRhfDA8wdUiJLeXKy4mWb48rR3nJd47ttAb1sJK2",
  "key6": "2PBc5Tuq6NNNMvQw7L9zTowSi8Hgj4qCpQ7DgTggticq5mVduDsyeramFshBBqKciXPevTN7j3bVjEzLFzjTrqUs",
  "key7": "2VSbv74MKgtVSbnyeZz52DRRhEBxCHCe9PNrX9gNw6hMfmUkKzzZyK7m9W9K3TMjxtTfMcCUErBF132oZzW1yTys",
  "key8": "3u3FuWXLQ58bfcuQ36kc5HQm9JDzPxcQzY1NWodMB5FQH9TiVEKE449uxXcUpRVyx3onn7bmLTYK8fkZnnvBHe3Q",
  "key9": "31M8bMNVUN9TD5TVHry1bpQ92fJw7kVzWBoHKpgaWgzTBHuaFHzUmndZkhZWcKD2UrPnqNutUvEuH4ir56BvNiNP",
  "key10": "3hB6AetXexC7CC16JAT4aqnqWKiiKuw4PwDYxvSTZsm2mVnMbwzwqT4BjHZEjxYovD2nafDC3yrZ5MSgmXCxrdH1",
  "key11": "56yNDc5Kp9YmQg5xiQwJWd74YmwtKpn17kDSzidh5dPwTF12mTRsnDB2yPqbCEnbpFpdQYZamACbbQcYd9Puq2rY",
  "key12": "248ch1P4g2R1x9xf7pftnTYgHgtYeJfgMhRuvQSAoh9TL72iv5uCgbSBv9YRDmPiUJ7T7tMAfn6NajF8qjRe3xGY",
  "key13": "4NWb5twbusdZxDm3LLsBa1Rf1A2ACq36RtZTeMNjCkPfAUV7zd1yvoZCCYmpeeJVWXhpDzmZeCJBeLoBcMSik53e",
  "key14": "3k2sQoMjf8ezV7vSX8RAhMuvVzDVNidgyr46BVFJpdrUQJymXVyCPoGh3qCjExgr7Mcw58wvmVVgiDvweF86uHSQ",
  "key15": "5ZyopXAPegLQ6AhEVpXtZ3bvKgAiNkT6W5n7NCPwBrxiVdzFnJZE9BWVGvJqHMuZhSCTc1NpcJKsKZp7E4dDZqNn",
  "key16": "5XV1ckTcpYcH42gqBK4D7jeV6jmAtgmFtuXjzRBTyj3fb6ZHW8FJvjCWcDUzf54o6noRGhgRDhVMoMi3Jw6SNYV6",
  "key17": "2GiowBVumwPQPcULQJ4YDriUzQhB5opeJxANjkFbjdJTMmmUWhraEbU9ff1RQV9MoMje2adXTiDqJwLUAURzYrDf",
  "key18": "514BD8mcbk6gScGBzmbnYyN4Y1vEJ6hEwLUL6J42bRQsCHijUM7cnnSxX1N8NDbdP5CbVWVwcthNvFYjGPJXt3gR",
  "key19": "4mcpVXjLzR1Z1Mf9saEX7Xdp9M6KczT9eXGjYopm4zrQmmdbKmPwLaJ6zbAsoZrzjdLXCH8siGkNbkLpbwAA3zDw",
  "key20": "5gp3imMK3We25c7rP17xT1FRPErS4ZeTCMnTUaesFUxkkVsxpjtZrzTw9zS7SJip7ie6wXBFkkV4v29Yc8cGt6rU",
  "key21": "5tMLmS23WFhRVnGtAM2sBr74FauT7LZTnqe3YB9gyESVZ2SQSzpAMoHuESyr6rpEAkHAkuV4Nd2U2bRforZZERPo",
  "key22": "4ksp7M2Vr3WoSGXacSZXZhatyUhmPZ3yPEErbmhSKhFFVLRFaWf2CBB5GD8x6Ln6KogPzWYaZGX8C2xgU95xDHpS",
  "key23": "3wSQeQmSfVvwugfk3qkNHrV4PjcrQgCXXLJJkKGzWbmjytWaRmWAS5W2AqBXJgZwzzxZzz7wLEstvPozpzRoekTw",
  "key24": "33YagKra6Pi4zWdJki8HfHPRzvGjGc7e316Zb634Mk2WVGiPkmqPQhY9R19o3kXqhJVh55TxDXASHQPz7GaSsECE",
  "key25": "JLwUs6PZbf2JSu3LxQ84AjjZpFzWbVV2dHhuT7mt4P8ou5G8fvj1SNwiAHAue1ABmyHCTffqFcHVw1nr2AqZwgN",
  "key26": "4SK3xeP2spYZyWpnSHJhZi7mKDfC9NvAoaNLdtjjKTNzwe8WKMAovy1G9VNnkcGh79XwvKdFDcyv6CSk7PpgHGeA",
  "key27": "2K9feVs5u16MviYZoMAXf32m3rmp7rnBdnwrmnQxpFa7G2M3tiF6fdzjVhNywuQYb3b6Cwibxqvrgf7Ext4Vciq3",
  "key28": "fUGyhufSc7KssbDmURErT6u82jPL5LjemU6MA7GvgfVw65i5ABVDiwgVeTbpwgJ7UtZ4cfNrxMLwJuJehmgiTSG",
  "key29": "4bTC8mVWisi8e1esHcG6A25hNjawz5PwDV6Tjgk3GgcmeQPUR5nEac6K9FZ3NwHU5R5Jxv3zdjpZsAiR2uC7DMBF",
  "key30": "26D2q5Ztjs5Z7YHaQGPzbqScxeQvbexiqTiFryyER46S2JVHmDzBruBTbjiAawwrpGAeQb4TkmcW34McpfmnTe4w",
  "key31": "5HCDgAd6cM6ZbEjREHop7pLsG6meNMJvgxMp7aT3sEhavGA1RRNFEacESf75NpsrMtJ2xVRd1MWD1mkht3UtWrvf",
  "key32": "3N3z2swkYsmVipXvdRSNUEvo3NfjbRcMEx3RB357pUcczcVnij68mYKMMapD9uswbbdSELx8LGAygvKj8pgUMjYC",
  "key33": "3Q9p9pBrUxhNpY8eMPwB6TW3hJKd6FcdPRPcjJT1x7AS1eopYNeBGTyK2zjGDavGRtGGMxqmAkUZDoaXXhqevJvQ",
  "key34": "2nBYx5WzE9yXnKXx2CBQ5asrtpefR5JqD5bvitWNbfWhvYRpBVP55fq4ccDfDFkpgxbRWVf6VbzHERdspUoAGQmW",
  "key35": "21LdcbzVN6iLesBZydWen6qEF85aB5BjoKpLRhWGNM8sikqxrJJQZMBc5vqgnhKisgUwrBAGuQ6zg9EuDfy9eVju",
  "key36": "5S7Wx26AestshcVBnKPMpCuLxuox41M3psGDXCrjacDyBe2geuKDwSq7hRBkyzr94ttNTUXf2bzYonF5NZRRTft3",
  "key37": "4MMgN1Zi7abSKtt9N8BQg8HdnSMHFaAaQSpMrKiX86zEaGycYrBBPDcka7PV5Sa1SqcrvttEbo9FLfzKXsUWbHRw",
  "key38": "4TUXnqxRLUb1SW6z576Lf8eYePMPyyyQS2RJ13Lg3KuY2mi4xa2pGG2ksrPhy5QX63Y4GDmVJvZxSTFz6U5Lbzcu",
  "key39": "2bDZsGEAQWEScFrEqUmdFGh7iBpUozis3BjrKrDw7wcVZJTukwYwUruR7D2TqyaUULSen5johac1efy1jBqZGc3L",
  "key40": "5Gk89SXy1ryEE3mRySjcGJFDnrtC1bDEBEcKqwcBgnSyPdyomqLgpSDjA9zgA4966BdBM9zAUfW8RK5dqbQaSFKB",
  "key41": "39fpiyXCTKT272uVMLdcczAhKjF7cyHC84FvNhtC37L8bhTBidoUje61XW8HQT7XWCNmzZ3SBZJWU6bdXT6ZeaWD",
  "key42": "4ptP3yXPLRDEoombwRzG8wnWLXG1HPiDxxhvaNGw6AhbrfWgTJi9BJeL71GxgBAnDn2T4H37GWBCqofXzt5fMVYu",
  "key43": "3ziAnVRNF1ZLxMt7hepP9RHMAZBJQnTpbbuC64RreRsLneMAG9HezcqaETViqMmi3uoFpo4GYwZ8PPMwHuXS1fzF",
  "key44": "5XQkZ3DxcSWMxKgfxvHG9a2hcN9HDhjoPc7HEdUJszFN3MmAKGpFwFqatvFG8sEzvRzJnydYwvKvAdbLCiRXAvhy",
  "key45": "3ck8NRkqBvmFrThW48XjXTiLxhAVf2JFmndDKGhJiRTQVeLqe52Ary93RWGmZuhXM4KpHWwhBUQDSJBJ8TUU5L2h",
  "key46": "5XP2TGgBZDUpxTSThdQYmYZ748XZ66eQMmLUYTcfzSUPaXywpmbHumTU48234XcRzKc5ALRf8MmE19BQbFfJkmBs",
  "key47": "5Q1YEeiXtEzV4g4fYBQadDuXfFRCf6cLWSXLM7oGyGMQbnks2pMM9wTwvQVmT6MFVhH8kYH9nhJy7QZ6c48UXDnp",
  "key48": "5MtpVTumtYgtyNaXAp2NjHiYQGCT3nvXy7rTDuAcpYLGckVT7mYin8NwjH9rbpmKzpXpCbAUE2RiFusB865R4V2t",
  "key49": "44Q3EAD9vyNJudUPfWW48mGf4hTooXBn52ZiBgGfTq4HR6UhMVsGn8HfPpKcZLkTng5LwPqXUafAYxPmwqd9xvz2"
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
