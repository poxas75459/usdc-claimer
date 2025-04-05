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
    "d5EQHWtX2uehv8caL4xUtcRpHw2GyTomixf6b6pBN1USKCzPxSqMGh7SfAxpEZ4WskqZeDAJJE1iFb1KpSCP6XZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xrw31eXr8mU1KuPivjb4wDn8mHzFnsfGVUsdvjtQXPzrvPcqKfceR7sMjwXPJGvyzEQ4j3k6tfq5A9bnP4fiPim",
  "key1": "4KejfBADJz9jZRUMGW9RfhSeMrcykgb9RRUV21YrMgouVxQKg5EuMKurxrGnJ8tvjMKXKd2QBBo1s6qjyeibtPMu",
  "key2": "5RHBzHZcFZj2hUNtJCfJQ8oyM2JznPRc6gaRUv2nhs33YGuP8G1cDouR61ijqM1BWo5SCq9Rgy9f1xM8vSwWLwBy",
  "key3": "yNAyzpKTbiyqoxDvhxCiGHYGftTBDvSUxvssAXTgzWqCEA5JWnz78fGgKd54PmvM67cohmEM3gkgRn9YU4gAVvf",
  "key4": "3dANoKdYpbKd2VtqcBTChkwvtnHzVKXBSmgL6f7RVBHeuc8r2FvVR4E6bn75WPw1s8HS7ZEx9935yKXP1zgJYjF8",
  "key5": "3cvhQ4N8m1o8MXmqM8DCKjyGdqMge9a613ES5Rhii8M3GZi4yjvruQde6afi1cbZwB9YhTGaR1yWnXbYrFEEbkNM",
  "key6": "37tYhBGJyDT6rjwoKcLvqWtifc2EF8kGz74hU8TcyS2x5G88KZddSuBNh5vmTnQiyseDYzbbb9r4DTtEVLzpXyQQ",
  "key7": "2nEDSspghAR64L93JdmZJhxvquS1PTcYNDeTdiPUwXQ1jMqzdPmrDebsCir4uAjCCFuE3rMXpp62jSjzU2vuBoRy",
  "key8": "3rNtrHZgQB6W3hwR3v8dwUBnE1SkqUXV42kaXDHiYBCZuxwgBm74BPDfkrMNF6WnsdFBc8HterUHJAxbnoFawknn",
  "key9": "4xdTKMGR9hNi1YEiiBMiv2Q3nqqLqDaDqR3YiPxxR4QhQ7WJk7GYCKsGFhc4hsNVyVJJ5GUvtdWHxKCqh1EC8ewc",
  "key10": "4NgNkbFXKLeFH54pH1rsmWTyDU7BBPoXkM1TT62aWTwzQtvHHhepVdgbuYUhDtZjGyFPk6HE8BSjxkyKHdeK1XpR",
  "key11": "4hngV8dkmzyuv6sA8pQ7QyX9AbckYMLiCTet8bdrAWnnQ4AGAtvrpXWtUYnhbBHWFXKs5Y4AQfzz4gDGs4a26dY8",
  "key12": "4c6B6VyRfphPrhsTwZVxY1B7HAYD48vmvZxHF3dkrqFPNfsqCHboBGAQ2s9Q7SNaSSkvkDijEG9RhnW5WPNNo2Hq",
  "key13": "uiSisiz4z8ba4XeCGQLE1rpe24Qrw7dnX1k4K4WZ1xnNoA27NxWZN4yy5LC7Am6JTSLm5WNa8v6G6BojagLgwoW",
  "key14": "4RXzmJzYNaTEsLUmKRBNYHjE9AyYuGxt6bsX3wLvKpEEjyZsSfFcHuQJjgvxRhHXo4QMZu1ozsfiLfvPCwi3zb6z",
  "key15": "2sATPAFu8wKJUX2Cu7gJ9ctSq42p6LdMcNsuB4FxoWc75sWk7BpWpBa6R6DqZ9KYBY25YVRXNE1eX7K6zJuZpY12",
  "key16": "745WNwnPcuyVjaYuFLf2q5zVC6AtWun3F5txVtP3iF29opUZNGmeuWGiUbe3TdBPwTH69a5pxpLTKQL9TsoNnMN",
  "key17": "5fAietzNC579beqQpj3M31D11VeC7dXAewz3uA4qdjEXGGVx4bFD1r5PMshCdLXyU7nUyGEyScBMVuYzuxrsS8hk",
  "key18": "2tmccsjVJtvSki3VEpMmyFHMrjnu8j8eubTkUjHzQVC5TfXPPKU5Cpo9G6cRBiPqCebEjeMLXpNckD8u155iWLag",
  "key19": "4MXipBxrrknbpPdRCEcnHEZnWv3FP7tUJ3L8sGWh4oWYbpgarPk6UrcWd7xwnYp84iFPqU57aMBePzPRPhUYRNs",
  "key20": "5YRNduwyziURuokFu3En3maQehMq7fADPr4GCaok4sPDqHsjBMc49aG4Rwe4qraWLn2UdQWHGLEQLXJyUGQp2T3Z",
  "key21": "4tq5Rw3TDz9B5UUEv8U2ybCmNap4dhLpwvMkherjQBPhpsEp2dUhTQH1cXBNDgQKetaCt2p7GYKFxV8oUnesdRsu",
  "key22": "4yosavwJunv8nULfc4fnavM4rbBBifU8psCkc5Y8jBd4dqpLigYmXJGayMESSs8DPJZfegWeuF71Yzo3GpdtVpmG",
  "key23": "4vuDRb9Hodr9MzwuBnAcwZnZrp7e1R5a9ciGpboiSouZNPSR3ce129CXLYrzF86GW4XaKpyavYMSAAhtFtqe3aeH",
  "key24": "5c792uVkEUF4c2Jk7U4fFSuGk3EAPrhobmX611irAaeHw3q45nNsgEkrZXD5xiQGzrPoeKpsL34mU1jAfLTL9nFJ",
  "key25": "3aVGBuAbRj1aftMXEYwzLWNcyjRRXwDLFwKL2gw72EtQfnj1g4YW52vEy3q6oyGCmHMt3aRcBXooB8CdwTQ88zs",
  "key26": "2S9QhxtGAQdMx3zTGySMo79hrkufLcxHUMtXZUS5qKPi21m31M9UuG2sFRSYCiVPPSSUKBcpgKF2u1rEJiC3UHYM",
  "key27": "QwDAwu6sGWheqSiNHP9238LWa1HN52vSvkdHVPEzE2V8zNWjKGQH9KH7fCL6iFfjRobqaARL65Kc2WrsRcCZUrx",
  "key28": "27fXaPvLv4gGDUByMDbJ7KBymisoxSWBDNXu39JkVErnx4Gbh7Vc2qdBbsZBH6QXe2MD1bAKQ3StK4UWPVbKeZ3y",
  "key29": "2GZZeoxTv8CJ7Aa1s35X3D839ESZg4gjzAdgZLpbDAoAA727Z1JDg3bLtC7w1vptG3oGVYyrd8H62v7nLpTrbyCy",
  "key30": "2XHmZNWvUBo6m2pE28MoQ14B7b2cJPTa3zPNfrfo5VURT6chS7RKNQp4dguap7RoGaWdma8mMafmuXhpaqFkNsLR",
  "key31": "nFFRRdbVv2adQvmj3wmFtrctGrXpjw2AaWS56j2gWPSY7VZrnXXmRBiB1Et5zdi5b3oC7d3HXAPwAvpkkDtLjcP",
  "key32": "3JQtXEQbKLeKZZviVCNYh3ovucPWBTDqjSn9WVNodF4SGkHGZFAs2Nbxd1TGXQkpWQyf4rDhCdYXr3zaLsiJpDSu",
  "key33": "2Dw1Efqs8Z5xxuoRZHBbvqYCWwFYfuoVwJKjknCaPSeiwWaYkj7x3S5kPHdgUZ2pCpbMjBrN1yFxwqMw2P4UJtv7",
  "key34": "2BYGzTiUKgiEGuMojDKRfubb6oMCPowf37hKd4RH3ju9Mn83i4vPeDx7zaJfc1ywugEMsGJi8vEophShk3iLNR5p",
  "key35": "3sGS86AdakgPha7GuYChqWkhsLtZivDy2WAbYgcEH7DPudY9egRPKgLJfkQ8ptxWUEEzPp5vUz7pxTgnnq7VhcS2",
  "key36": "4a3RQZ4HVsoQ4yFH6UywidiVgzJGQfp6Jk5LHeFv1eQ2y6ND6tvbL35pkohqmz1Hse59qqbghmvnmDUQJXWXA9jG",
  "key37": "34YC9ginhYtnmFUfF9GwTKhrDWd2asHSeiLNkRtCDFayNQTknWFhGEvUfh4TaZvpENkLj9fHpnRZdgxuY1iRUrT1",
  "key38": "3ERMqUsvv9SfZjLphTNLp27xMQvGVEgAJNmMX5fuHZPVoumrUJ2gG75256JktjWNYkBHcEZnRyWtCMQoFBEJGmmc",
  "key39": "46FqJHjZu7F3Y3fDYLQxuw2jUAPgZPrQujhkwBsqKRrVxaZ4UzWnhXkkuQrXm9NijrsJRWYHAvDSAMrQsPwNon2b",
  "key40": "5imZukmQ1tV1n4w4ZmhvJcHVYk5iZUnH4KrXBXkrSHsxs9nzvbsxZVqgnN4EQMU525cgdNPUKsKdTpU3CTx1fNeh",
  "key41": "5xw6BmczPCDAAht5PZiEjVuu2JXLyMV7RkpKx2zRTckMbxcmy5m2T23AGae23xU5GoTHVp5tG3XkCwqTwi8steYr",
  "key42": "1uEyhNYcG6gAVRo1LTmdFVmWJsBoMWyFiJ3XCW9BES1sZ46tQkiUHNHFbErHRWVV2UaN4R4V4dQRcKmhrWg8BWB",
  "key43": "4Zb629GAm6EPDSvNbL3Fk3AyRokC9ULR8UFkw5MPGdpv6SPuHPYyRitDE9XrMx5wtCZ8mT3i8rP8WMi91vGtUH1t",
  "key44": "21vkLeMeynNuTBygfEvJn3pFTvaEECchzzUXEQs1uJg5p8zgN7HWZBcpGs94UCc2rbL81pNpoBVFNECUaEo6KeVd"
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
