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
    "5GfebsTJ2rJVann9qB22JE2uy8M5BfFi5bEQqxS6T4U7chRvwhQbx3uTaUjAdU28eq8GZazNvU1HMU6JL35BMB2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Y6nXk1Dts7i1QDKAT4iNzjqFzuD54sqXgURfyjomYoabqJEMcg4BV2AhmXmecpfvAvHHoewzEcheYnbSSmCk3q",
  "key1": "5qpKbfoy9dqDuTGtRD9LFWLJ3bBw5X1cFHwSj9tLMihFxEMYiQxwMDdx2v6fcaVErGCd2q4ZmXiqXrTyrwG3o3yC",
  "key2": "3mZ8XB6N1wcxeHpCnEXYSofvQW6o1y8VHfykeoWTLpBfpgp7abFAzmpeJGwyzf35fGdkLGw9Msh5jHy3JKJw68GV",
  "key3": "xD3Q78DTi45mYy3p3Aju2vFh5iMVFRY8oQ1T7mxfgbx4PtzWEKn6WrSMdRYFDQ5nnds2vCs1ntvCWcpFK4h4K1J",
  "key4": "5GybMiMMgTV8dnr2T4at72P8Aj6Pw7zds7521UEQuFbSe617Y5DpDfNsykn7PKuaxUNSywrt41ECQR4cxFdjA1WJ",
  "key5": "5DhWQAYKUBDUxNDiwSPRbHpUdoMxkmNBNm3vC8ABLpjvjv22cjaMzGagoCdQsCKSzq19HfFv1makQQ4YYFANnQrZ",
  "key6": "KqQrd3mDW3B5Ab9kCx3UjdoPpRkj5Db1H25nx3FKN4ot67Zv9BwBMa2HBFNd7VB82UGkQ6YHVQYZwyQduCPZdPq",
  "key7": "AuQ6u7qbjv3VmGQqw7sxQS7LCs8QUsPnDMRtWaHPuLxLijHLFxPKMC6iVsNpcRskvo3v3Cy6wdpCaGXvTuneK5m",
  "key8": "3jXdmGnxU5Udg4zLmK7Ba2nwQgzoPtgfkuXPnuMni1bqydUhH6T9tb8bD2AdW6msn2hj9FpZxF6o7ppKrLqmsdw4",
  "key9": "rAzUWSaLAjYWpnpHaY4eW6xJL7SovANk2YxTbJDKLr2xUG7CSztp3n6RD4Zh46zFed3gJzcP1E8TSDsq3Wihanq",
  "key10": "2JqYtZyvNMK5u79URm4RmPqgj3ZEWmWbsvv6gn4WBveZSj6UUNx7cXtBmquumNYca9MG2MsZwEMjjFHaMDbw9mic",
  "key11": "5wHKorw213GzbTsn4nZTMcu2rTxmYzzkahdWaMzWWq9NfZ8sCKRZDeRmRxpbtCRt3w4tGkAzn3vFzdFqrnbp1ujc",
  "key12": "3vnwSke6GbKHei4CkXMeeviYCtxUR9uv9qUZPcQFTXzmG529iDieAPqFUwZ3fMmtYhpxjevLMzFe36yEKY5t7EMx",
  "key13": "3vaL3Hb3o58fYiTVVYA6wLH6QiKPEdLsLyayA9R4aMGqbeVzVCFLNwyBc51aU8HG9YRpT1HgMroZrU61TDJjpriF",
  "key14": "3ph51rQ3AkGbgHgUjmNLRM8v8EgQgvPQj3AMDAX2KyXtX1uuMDP1huXd6MmWBYHELSftbkhZjCV8GqE8CodGtU2J",
  "key15": "4311YPhYXEqBTG9RSMii7sHJJaJfPYuBoRmintj6SMSR4gfEBtxebnXAh2CxQ2QHhDFCSqB4ZYdjqSKbAsacDELP",
  "key16": "39G7c6v9dBfR2NX6knFx3WtGc8qRu7PKM9MUQqjgrWJWMrSdo578LoJcyHfNaZ62y6Q4GhKFXWcZZUXRmuVy7chN",
  "key17": "3UtvwyWRZSG2pL2M3YzU2qzMfzpnehALdoySFSZN6mZzczUXy1feLMkCEPkvrHeUDEGu1zyUoWG3ftnt438WBXdL",
  "key18": "2XhTTefBW3T7EbuvNc4xcMQrmj4s2sFV2FdjLeTo74f5bM1L9CXha3LQosFRY1oDpSnroFmforB9TfVDtCD9bH6D",
  "key19": "5QVwpoKkXda9DhTmbjdF1892iGL1i2E525QaqDjxWXwgMcZ5hAmm1BJ2g6avg27Fpp4sdAmXn76naXk95AKCNLvT",
  "key20": "VfG4xQiToEMmGrGGkiy8j27xsJcXSbdWJ6Wvx4G7Bm72NXKHkrrKHPUknMBkMqMGgtQKb2wjJd5d8tW8RLedzzi",
  "key21": "26sLANFSRkTEHchgS8rQhtfGBLm2o71aHsfn6AGPHoDm53km4EJbwVU9dCnMtpPr2kfRAz7MeKfCJXg2gPFgGjsQ",
  "key22": "3MmU1ZgUuAKhEt4RFZFQvXfprYurifoxxUXHmcChHP21HSVKLtMWNjXo8SrwRwdkq6D5nZcBimAt1hngcbBscCDC",
  "key23": "TJd9rxsJmkYpBpVtcAgzLGPj7hj59FLLGCaAQtfr7bBDePtp5JPvZE4v3hPKu4QD9AUYMeUXydcbdPhPX45Mv8h",
  "key24": "3WWkCDczrR2aETnwFGWmzcQfxBrhK4zDveHseC2mk1k72aWRRfiJNo9fwsqdzp5vk8pkLTzcuyVdVkM5yEAeYLJg",
  "key25": "4mrWJeMNpoB2zepq1vvtM1FpprUhv9j13Je4Z15F2xznh3mdRweso8vJz1NtX4tgZuyJtKtWPztMuz6RZEFfd2Pd",
  "key26": "3MvcraH6AQFrDirkVgi4RZ6m33ghWXs7ZiHTCgr2mXEeYrGVPqA4yqfHLDWZLCcnqs5VkEM8S9TNhQEeD4MMR7fU",
  "key27": "65d6tmoQipVkWAeA7sjY2hrukB3czCBPyyHGhqed4YTRN4uo3qpEPTntS6U5MMLY8oXQScGg3KCSBy4crjdMCpUM",
  "key28": "4dsYqTqJAnX6fGkVox6sdU8wQpv7STadLDhJE5EHwdaBLU4WUJhhd23w2eBCCJCAauSfdg9862Y6mkRf4DqjjP8r",
  "key29": "AF62t4sm7E45grBH48iyenHvQBnZuZfrpUdVxMEhA3Tr3cScpAghGk1hd1khka76YCJSNqGAWsvYkr8TsSuZN37",
  "key30": "2fEvaAokxza7evkYbcXrwfHNZmJPSAHL8FvurbD7aQwVNs92dM1rQqYjV5kYwDUg6f6wEeamowFFQG6aNGycoSUB",
  "key31": "NYBJu5hDVpfxvknp3LKZvCx6TYcFAa4GpjWxnq5GmN6eka7xVJHbsf5WTyoGHmXP12xQk1fLAivZ9zQCisRDu6Q",
  "key32": "tLxH2w5Cnh4qfTwK5Va268f7DrR52n9F78NNQgTuFroETDt1ESVZcKd8fdbpoRzdX4CXxKNrP8TJhqA1AhrJcgM",
  "key33": "4QZMEp6vnh9hABjZxjTM9DhysY9Hyd6L7m6BdkVUmpW8kvmbPdveed5fiPYMFiv8B55TtXejFxtatvsgAFCAitpP",
  "key34": "3dC3nYjQea1gi33tWAHGqyeGtMCwmwCJqHmCzaZ9DmQkdDTPqwcjcp7wPzbxLd1ZdSrS1CYKURmHiFfcbGREctCN",
  "key35": "3SBtmCT9uXEZLRSHHnxEmsXqj1AzDFytBk4dhayvNvQgEvHP5K7TjPBjvZ9m5BvSQKQTN9wRaREpodj2p3qaTcqx",
  "key36": "2SqC3kiczrtsQ2ajnqH9aSPU9hfzzt8DXE2EaZRH8fTcQ8HCaweV61dSXGaADtxT9w2MU1cY5HT64gB9iBbK6AoX"
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
