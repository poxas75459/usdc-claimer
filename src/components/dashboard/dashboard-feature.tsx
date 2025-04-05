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
    "2F7sCXbP16gz9xdorWsmvLcDBXMuqX6e26j7rvkE4KfjuixJ98FQ7g97JY4A55pscv2R3Lc6yFvxMG2e2Qz5X43v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMPnsHGpBhtLmfJ1P48LvthEfpwkzKG7xYRunBxaXeF3cTUhig6cLE4U3Xd9BwvSPBbYrZ2oqH5hB9wwV81F3nD",
  "key1": "VW3Vey8GLGMevt7nifjzZxXXGnTGuji488MdcUHtwkiTT72Xg8CXyVJNtTq7vLYZAJD3JpWq9jT26rdZ7M1XoKn",
  "key2": "3LYL4TAojZe5QvQ1mpw5DQp5LMUyBkUTY8DiEdYPWZBFGKPDtsazWAnjALnMQFQA63259Rzx36fp6VbLKoVpQFw4",
  "key3": "5m9nuU6rsnaJpJchungdcCoJATftjCNFyJaDQjsciNUqkBhXrp7d4KdNj2tcCy55JSBmEst4Jwwg3au7YuptS1QM",
  "key4": "4SyjzSXx8AWrCk1BLY5cmHeTE64uxWghyrgzHKRJktXzu6W5feqmZDCCHgvb9ytbasZX2hUVvuiH2WYRmd6u6BMc",
  "key5": "4jMKXBQxB2sYtrnDB7FQetq9KiX25DHQbPczbkQ9GHo61PGE1TCLR4qSBfbZ9TuUAVwdYKEQKdss3hBJD5RCH8DA",
  "key6": "MsHG4rnvvFq1axRq3gqWiczVCakF4RhTHTRVeZpjoSGxxeWnd4wBhoxQY48R4fFAnGprpnhcBkn6Ke8g8UGbL5E",
  "key7": "47YYJZge1PULJQ6USKPmsh4ihmwCmUeYgWPyiwkogHfqxEKCDyXovbtzZUp3fmdctiDHGEjfvxwWGv7j4bktFRZ5",
  "key8": "66YZNMH2Rfxf7TPCEGTrbaB8k417FZr8FgjWv1sRo8SGDnQ4MENavkcybkzwt9DtNiYENqDnsd8EmuTgtz6WYwwZ",
  "key9": "28qDMqBwYSoXVcKbdyg3c7Ve4V3iujzzHxy51VMQZjfE4MGTSaUsquj3tpkxXJcNhwYWk9gCGgipf9D2s3SRgXXo",
  "key10": "4RfeYUxXDWj3RCde4KD3976JxFP716iq9EiWZbqHu73PcpV5d8HHcQS5vfaF5HqFieyCFcupnLTeLwhj3J1AdQ7K",
  "key11": "4nZMvFZHeNLMhQxU7wNFko4o7zr5adgYjX9f59uSnpMi78nJUEDiV9eCB3Jk4fAeFT4RiCLkC8gY3VMEdQAcGQQ3",
  "key12": "4A1yfbVCDm1nWmGtwaxkdEz7RPxq8GG8dCL8TkSZfM1JwTvCYHPrATEeHsLxaTZj8v98YzYFmHn3vBSMkjusfYSU",
  "key13": "5Kot3VHwgRYejpGT9jZrFikYamc1wQqnGs7EfEySktpJVu6Q6mMEWpdkdjDPJgbL6otZBRKV3qX3NTJ9Sk7owJCR",
  "key14": "3yRrBthkTGmkCtLT9QhrTrntUvpk1TogfaAbjv95MuKBQTUBDw6tunSq9xiTuMCkCtSVCSHphnyopJq5n39gdzi2",
  "key15": "zTEsjwSCqMT1ajkebHJ81hz9EVUyXMcEo7XMrk2pBtGMawewqpmDfR3YmocmKHeRVcDar9WGxkY1g2dR532atj8",
  "key16": "CBcVWqyNdyNJJ3YZD7D8CEX9wtv2NTav4nikaXAPiwuNwx8ZH6EvG3EowSTFdCJ8VERGdLexFrGvVWBBqq56SqP",
  "key17": "4uwVRhKsUx7VuaDCnoAK88Zzsb5sDYjdaJXGRGgdz7vPFau6J3Diposb2PTG6Hnmht2EsGstBVdDwNrMqkYWNh5p",
  "key18": "4rCMAD8whP2RTtL7bg8DeMuUDZSkkvU3Ae2zn1iM8iZ3jMhNj9KF9fw6RnccnEhmwGKpGXy7jvVV2JHBCfThHrGr",
  "key19": "5irbwNgsiy4UsScFB7B6ye3mRG5hmRYhdUN3mtD6iintDnM2exqCoth6mkhoM6s3aEs44qr1TDiCPLgHN6eRosqn",
  "key20": "42A3SUZWKDEWYXakJg7zavfaZ4B88KAqKYEGzZzx9fZxg57x68vQ5HnhPDYJWM9jNWFv5kMMAdduqEPM3dNG4ujQ",
  "key21": "5mVT8vT8AD67k1BZDaB6b5GfqSVvUei2B19SKHQf5LkdRCnzZMrRC1Z66qtVaYPnDGcV3mRuDjFWVY8nnf9gpB7T",
  "key22": "3Mgr5keosGGmVrwD3uLvwhUjW1kXHogXF1sAwTrSFprmaDm45JPvhAs5Rykn1xteaituLNh5eW481mdS4B9wGu2J",
  "key23": "56UmoN3BMmUF9GrKLCxH8uz82Ti38VmA4SzVKYdtob7mXF7s5M7jEza5JT58MbtBrMvMiJPx7neCkXbgzhH7x4vR",
  "key24": "38FzSS1BgMzcUVeqNPeRhpWHbJcQu2vjT9owPUSsznvLp1k7XhHzh62WD7GvmtMoczrsDoqAiTkbroPUcaNkhdKt",
  "key25": "E9yGo2QTC2GMghF2TwVik7Ltiw5VPhMfKLJp9jEDS2mufceiDEp7cmYyDmg5f2hquAH7NKTLxV7qnfDmzoZhEoA",
  "key26": "K5c6VRbc1BNzqt9JhQxEQfZoXzecHa1HFwUeFN3DHHWGRbKxRVbHK4LMRX7GpHWx7UmgZVvRhhEgb7zBnt9wng7",
  "key27": "4hLchs3KrMExYSbva5XjqsGLW97ZEgAuCnuKQbaeCXU2kdMHiKMwSeWH17QhH3XRGXS3UWcQQvS47J8KyAFa5orZ",
  "key28": "3AMdPFRVGwmzYg2YQ87CVr4Wd4FKUHmcGaMSLsDCwefFCTJskL6bJWmJuCnpfbuo9Zx8wHWhFL1LE8BTqfdSPfNG",
  "key29": "2fd3td6yh3F2kqbafcLqmuCxf1TbYkvh9CPmJg7jBdhKUgJbqKE6e8NFozE5B1ReB4yrJoWaNwGT5UCm9LYvVoSX",
  "key30": "3BjvZGZFWTRzdAXRTx75rpR5nVH8mHiCwGBTtfBgS4Jp83qjh7ChtEaydjgtutEcePndtHAw8FDySWkha4xozRyo",
  "key31": "5coeFL4V128tvMqAp9rvKtSyKtgQew68D9pjesG7bPfCg22dR9V4RdugdP7F4BqdjxhtmFZ4Q4ajVJfd1rzoc85f",
  "key32": "4KkLdgJTqn9HEaZFzmzs9PWrkjCvRGm5UmpgNrCKcQLMpD1aokqCVhbiJu9eVVHoxfxieohppxjKUPKVczFLrJXp",
  "key33": "78esigqFJiDBvySa8DgkQgdx8Cy6M7eosAYR582wVHPaQfH4aRFEDWze7X9fHiXCgrL9vn3LVpaJDDsLznhULg4",
  "key34": "63U7voc7e7yopYLHLvgKiybmrzta997ByuwDBfKb1fV2gCPFVH1FjvggmWWYkmpCkqfZg5D5rYcPkG5z59twx2St",
  "key35": "Xb5uwqDTDD9KuBqPTNNPy8rv3Zy6rm1PGsauAeqtMMyFxj9a94CY6Yp5jErFi2b5A568TxsxDpWWm5NqFhQC6H5",
  "key36": "61gZ43NjeN4YpSa1pT622vFiVXwzDM6hZtCazK6zxm1anpazkSXwJpmnBtGnsYESuzhsdr2u1uTJLJgCNChThmjc",
  "key37": "7KSsydZR8oSgfXz18KGq8yfYoxAMLtxZjHc5kuASRy5g3gTh8hrm14qUp3EzQrkA8n2dUaYMrXcKqMv2gVMRU5v",
  "key38": "Ld8CGEo6yNXpdTuZQwfMa1Dsc8t7HnD1mX1UVs8C6ibFZMDrrUBqYyvVUz1CgWjHRibNJJMCR3aeAMn1KBSjhgb",
  "key39": "3P5tucNPYLBBhC6tCorF3PFtDmDpcaX2W5fU3iD8ew21DfxxGDP8aNahGBHMVEbH8EEPhP6hyU1pk1BVxzRN8W1H",
  "key40": "3wPUyQv1hL68Nxmn8AY8UagC1nstzGBYpAouLDbkFmYXTkUsn65k9wRbYEMFHsGQ4KReHeMwMpNvZ9NviudDf7tC",
  "key41": "roXvzSWdqZ67t5Q3wc11shQd6r8dLFhcXbQS3zYBR4gED7cHAVptc8CPiBymG1Gt8DvppFC3R1EN19LAegPGMNA",
  "key42": "5nSBkkbr3MiQUxKxf7D8SpbFSu5eJLXdxAt4DaBt7rA7am5jP6Nx1HMaiePWWPBngEJQh96bKar18h791rT3wKrS",
  "key43": "4wgMw7RiVe61vkhVFcyVw4T9Z2V2DQB1dFBfdvfHRYNLuWiMVYJeB6ZApDhvsxXwfRTCgZxvp4BteXD47aaPdTis",
  "key44": "5PcezDegzVUFcgwGRfSJG8ANTFBksyADL7NfCycJsta6LVSE6EBCfWnVjbWbWCvPrN4RiNQKtbnqs8vxsfHPyBKK",
  "key45": "4ibEu9jz62CaJpmJZVMLaEq9jtK1qnzaDqSeVKQWJ5gRoiWubU6PYWWniNudCob2mB5s2Rh7x2PurfSDqnTckHyZ",
  "key46": "5GRCKte6sARGkeE3XzbPgfM7UP1Ym4p4bPmrzwke9x4biQv91mqaar4xNVaGUTsUHEjWTS8XYUj6ytT1gAbxC7Pm",
  "key47": "5xNidn1JKiTRLbDMaYTgTJLCpkPAwHtpYotZ29TJRg39mZTUE1PZjkigr46yWtRAY5z7Na5cD9d7vXjgdVG5aGrS",
  "key48": "4VvsHecsBNVJui8PHndi6mv2ZfyexpYEJQzfk2bHfX8hVkADe5ETZqzt4zSm22fo1NX5Cz8MmLM4Bur3XCGQA4ny",
  "key49": "4n6MhdYHNaA5E3cga6L2wQz4LBmHhEGckwGY9z89wYx7bA4z4FV8hpQkqAG2kHP1MbRSqwfQ6rqePWfVcnpDJqLX"
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
