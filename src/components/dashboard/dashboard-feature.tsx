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
    "4xpJGYECofQ1UzaTUAjxe65rwJZ5DYqztthsJLD2Nefk7CqnHEDAZh9BHnWZqhiS65RhfFZJrUSarvK6A6o3jCGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cP6xb1gTa1suQMb6QXQpR1F7Dd4oyiLKYzgcJVn4S7o73FburiocmCtUrFucRwkxST2q5upedTHpLL4ghwGjvo6",
  "key1": "5bGcwNHXtrTCb12i1Q9Pj86DhxAUGwESto1fbaXhjJm7rPjNKZBtDAxzdDZWQg7sYe8oRQLBiX8M9GYg4pGzHprR",
  "key2": "4cDKPrnVoRHFk8WUbJXszqS6hF4WrUfETDqeR24rg7TyC8ozA5JHU46ew9pnyspcALoeimkdo4qwpmFFgrZ4khEw",
  "key3": "5gwWRNWKanLGzTcqu5TphWFwfzyv7eZT9nC1seTvnMPYZjR819Hg8wPkkyYvDn6Ht4rTQ8CfFKQoeKAgcEHvbbZc",
  "key4": "4tvZCjy9PeKwRASHakqtVozcgqNdsZhYX3YdJJS5xekW76nd45iea4vGBAHi2u2bxp4dsp3B1VGm2bEjQEYywA1o",
  "key5": "5GCG6cK6EKPzqbUVpcEpRx94q3K8ruX5kphXqKKrTQbwpZ7fHKi22eV36WdqjxBJVQZ26X7kvpvQAxycmhGrwN7H",
  "key6": "4FM9csB2WAUsuCoP1knso4HucXJM4ryhwKvSRCGP5UnuzNxFJRc558hj3YQj4jK5gV5Y31Wat2Gr87NsDTXT2LA4",
  "key7": "2CcoyVjoJR6psmEBRUAZVMi8FHdXcJyqgpFBy5L6aZqeTnMdqN5N4kH3BbHrftWU8jWjWtrebXRCCcHL2dQ9hvdZ",
  "key8": "4iaQW2qm5N9Yh1TsSvmyfgWQD7zaNryJPWpVvyNBEbomSUpDnEZUwkpVZkjGxtR4kJfBS5YGfPBC8h5dbegW98ar",
  "key9": "27CV75kQS4EVXcNMztpCxwPcArUY9J1ei2W9qshDKERDrUFhfb9f5c4o7J6hWHUsYWhRABTQfr6GzXqbHyBmN1jn",
  "key10": "3XgDizXxFQk77eFzHspy91msrenvs9SCYpcYbt6jocSZfz7k6jkm76ryGD4KLJWfEXHmuUsDVuHua377A5YtxYUt",
  "key11": "4YWZyujbcYh3pp1Ets7AfL8DDwYen56x18UWaArgBFeomZhnRtf6uywWfssWXuJW6m1PFeqi3EqnNPjc8frKUdd5",
  "key12": "4hjyPXC5uXcRz8abvz4d5vkzLVrpnPs9etFVsEk88KfFw2MevDuR6XxwFypZrjCZgDkXEfbBi3tTDGTzmpHPsev6",
  "key13": "5VbRaGCdrcecr5hrZ9k4kbsmDQBEuDduWTFZaT1sCekPAAgUYrhUe4XZsEseE1FuZW5MnqmjWtzPTyjWhAwZLvW5",
  "key14": "5cMwcnDz5BzZbHnUkooXc9bNkSWE9JngvF6mRLh5wbgrzTt7MZvnoDeZGsvqxeNMSzp3ri8A19Yuwx6NpCkcaGP4",
  "key15": "63AhkwY8BppBTEdArpHjPdfozAuzo8xhodB3QzT61BfEVjxuvDzS3Dj47EAqUiBDjamFCbmEk4KqXiJwXCDNqko7",
  "key16": "3DrAYMrRpmsFJmy6wmACa1K2FD5veus6MkziN38HQxj9VW2Cm2jJfokmRUkv4KCTrXyLdhZnTWk9chWSFRzdTvLQ",
  "key17": "4yeSJK4gDHZjbovKVb3rxXg4qTgL1UR5ENELUDkBmCwMMTdv5uZerRTMZqyR3PaapddJXGqFZhGt5KF95bbB9DZS",
  "key18": "sh7hRwCk7LLnrqeuMRESUjKy2shQQpprfSQvPP44HDznqzvJTKbg2ddNrnAxFCb9MCHWuTNJwmME38WPMkUnnjc",
  "key19": "5qFFgU9mYg9To9b1YWxornKehskHLqY47EXt7LYbX7dF8CPFYngAQFxW7w2ecAeTvGfXmpx9tnzZUdomcPb3DXia",
  "key20": "wd8dAsyeSbBEQad2XdzwQNcRSYxncrH4KzjPCxhqagCtLEB8ShDaosviyRD2GJtuWLviaNyQnFXYTopvMMiVZtU",
  "key21": "e9iG6L6gErxpdCSwicm8FcqPNEF97Xvbqiqb2CtfwpdRegPwvoAjVDtB1cJWSSZyM2MPCnCTfyepdQVWzDLPUwc",
  "key22": "4oKQ6TjDLfS2EysDGmbvppZVcvYE7GqrsE1j7sGHC5Yrrc9XH2jm7dp3jcdRTqAevD1Z7Fy94U4XHXxsTfQhXAsk",
  "key23": "3TgCE8bZ7sMxxQmwGMpXnsrCwmdA3tPqJUkWAvwR58T7GDtoPbw6SvvxNmSNfoxBYrSKWpJQCkxDqXvBn9VriiQz",
  "key24": "5232RBibkhzDTQX9aDRdr7kZBhEwi4hDSqtnTXo3TJEBjZm5KAxPvuGiSpWLK1jqPN9p6tdGu4TW9SWhynLSb2Qp",
  "key25": "2bAKAYGgyp9zFqqhqDUSqcjafg6zpnKb6wVYW65QVQTAowwicQxkUmx5LGbrTgu8bbJYCvRTrvFpnNyTRnNpuxiw",
  "key26": "38JvaksL61zV1rNG7r2f42Y13cffvEPAmBCvUBAe3aK5kHHjNrF3TBp9zKsJjPs5xHhkxRUE1Ti6RmsbJ6TE6KDC",
  "key27": "SG9tQFiAJvLTcequKhkZVci9wJWjahxG44nRh3ijNAk3dbVQUzMXnePysuRwzbnFF2qJtfnsW58YKo3L5CRuNbn",
  "key28": "3Gkhs9rgEnYZ1z6vJTzznyYXqKezSNsUiLcVauoKm4qkdGkpQLf5yzeF4M3reeQW7GH4wwJjNMsFvSz1GFqRo56a",
  "key29": "3Hoi9uAPKX8crZyLeWfLT4TBAt8iWgpqpwN4jkY9UjJg8ZND2YoAb3dh97nUtfJ2EarWtfrMgvnWKSEqqfjK4Hua",
  "key30": "43mpquHEH8FDcNHsoKBeHYDa3MxcwVxzJugkmuWmWDifU4N71U7nJ5vMhD77bW3cCvWv9NiR9Npy3a4vMgtU41C6",
  "key31": "5wRa8TaQEWgAicXnYVG7SRZ16BnsaM992wFpgM49PYRaiACbgBsPVBQLgztJXky2zXDFGY6x3mrAmx3a5BvoTdCE",
  "key32": "4tt6LLM1s6sAwsBXQ2JmdgxmF9fnenTk9SdBcWrxw3xPwWZHY8StucVX1qhyT6Sb4JsNjSrHdvcZMwZBaF14yCaL",
  "key33": "2UEHLsqnazMgdsz6pvmQ5VgptJBqGXLzfxv2C8pWfcwT7vDn7Y9aAPr4ZeGViBk1b6fCj6h1G3VrKrHxFsbaKEpY",
  "key34": "24xM1wLSSXzvLDZhHqXRQoH6CdbLu3NyJxdu12rTbZmRiu5qM4wAwMEw6guPQ7zsfGTuyr2e5HzxiPJu5H2iKu1m",
  "key35": "3ZsbVbD3ZFw2K3QicPj2bQhZCKQym1UnKSSwk8N8n3LAWUj4e2K1F8xXnYYRXoSpUDTj2PwzQPjVijx6VYEixp5L",
  "key36": "Lr95D5G2eywiVVmxHmAyvsPLdwbbbCp7zysyzdskDKtEefyQ6P8v5frsohSXe3N2yWjBME5fkGmeBbPVKv1CR4R",
  "key37": "4RNRGQYRwfXdqhJCq5EeBRL8kfFeSNU2TCNKoG73E2KFChaVp2bdZaTqkXnAaRAsbon6NzLufANr8SgfMmuCqYV5",
  "key38": "3DLZ8B2Z7geGcCGEC5mxWngvzdU8R4GArACwVmaWueJbha3UFbbaR7ygYtDi5ufZD3NZN6m5cHaN1pSxaXSdZeMA",
  "key39": "sx5469yi5s3XvCuNpKTwb6JpuzR7JMjZj9Ru6AT6AZcsviSo7zorp51QMMZVTUJctxiXY4xfm2oTpny1PUZw4Yw",
  "key40": "5BUD9ceEWkbBeibbqbDH8WtXdgvy8dqCb1GMBXiRyoLnxEdANJm2abvvEbdbp9fRK3K9MTUPC1jd7oTxRBkHJqxk",
  "key41": "4EyPb2modCfsJEUwQcFC7YHjaNPqdzQzXmYkrpwE9fjL6gNRKgM1CpEsH6MaYSLkg8zUgd43vrz7gEnbrgg64QzD",
  "key42": "2zPuXusvpV1V6qn6uJwzRFabjDTwvc9C3xchZ7z8yzcUkUgFdAwDKGqWgFdi2tGsuixGC6cnfDuwGDNFSaoG6LBj",
  "key43": "arCAdHin3eqmGnRUuesC8n9h7ZwifLDubNwvY5F8QamUUGze8ACbq7bvrU2YjYHfSJv6ahBHhQVGJ14NFmHvpuC"
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
