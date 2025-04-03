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
    "sabRAF46dFyMg9rzrfxF5smHifqdqmuyxWHfy1UFf5rWRaVjrqdqduwzmemuBcCxZ5sxkMJYzE7zkVqgNzpjyix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLDY9fTWxG9oW67Xy8gD8f4wS2WtLHo9sBN6e3BAx8Smy5tzSXMbrr37N85W2wj5WdGZSfUtK6oWZL21SHLdqDE",
  "key1": "4TGQoLC2wrzVRY4CFuYyNQRz4c5ebfdJqJgHT6eVXBUjor42Aakao7V7g7rnY5bxBaoDNgFfQGSMPZQAahnTmkin",
  "key2": "4ZKek6aD5n7RgY93yz3b5v5xLFGUU2hF8RBUxGKVfttxgi34HL8RJeQi67xUsqXEP8oJs2rJuRiwdwYa8APeYZws",
  "key3": "3xqfAAGdjWn7tHXv4vw2x9J2Dd5GZAskc68xE3RtM9ac8C56V8KLWEcYckrychCD4PAkwLYbr19xVVvSTmQKRbLm",
  "key4": "2yrdqVndiU8yS76QDofE1z9ak5iTK4UHsDo5Mavs1jhZyqL2y6r93E2ye3zD5GtrJJ75P2gAonZokHGF3FqMXQLL",
  "key5": "2DXrhEnYZ9s4VQNSXfxHDWt1LYB7o9k4TNPZVi4q9ijE2EinXcq8a3Xi6Hz7D4JgEA5Tev1UtLY3HE2WxRDmbXgi",
  "key6": "58qBmRcLYGXYEnSYjCipzxcKuumHvtyNbrcP48XWx9QvQjpaAhjRnUqUUFokmhiC2pdtmb1o1pGmnG1FV2cACzUL",
  "key7": "3mAkhUeBzvPeLTdtXP7JSmuwfqWRCWQAMsQtj7c3CHeVMXBprpBxwkdh8uVpLvUZEcvG95AEJ74mfhfLxzpRmWsr",
  "key8": "5XjDQYg6JMZxu4KDL7xW13RzS1wndMNv9cDjAjDorJxKuxVv3tukzoFbCX2CmnFAFS6xJ2LsrQAwYNU4s25QXcdv",
  "key9": "2yHYfwPwomaZboMRJ6e14j7faDyDkbqX7Ly3hBWXtUz3TUsRAaeWzhjj51swrSFPq9vwj2UeFWJocvtnMqGNx6gR",
  "key10": "62S6hfkhcsd7z7GFQK4pTxLhpK4WiSXbKD4inFXP3HrXovSGcZnD1Hu8tr27fvV6nGCGVLc4YgNAu3EqFLvjsNpA",
  "key11": "4sPqFVsHpyphgtVVMCTTbw4BhJBxzGwqYHNUQVSgk7gJCRmgBbkUSm8b7J4iPCNw3dtAhSZVrk1SGWrVxBTvQReD",
  "key12": "pqtUdVuFsZPGmYDN9N3BXMZDAT1vKLkPavh1zvAtwVEUNWk1JfHNL63XACYH3b2D1TQxsYiW9V7dxKDy518WWLS",
  "key13": "hhUHqgmQL4z1Ea7va3scxYzsfi5sWYdaTYEg9z3JUbPPEc51XoaqrG9xDW9Xfbn7LqC9on6gLjimZ56YFspdAE6",
  "key14": "5yyeQQXtwJyXHxHEpYAWPHzmyGu13eVz9j8zod8jNNDBLrZvD4suvRAjvwf2BVF6KR1cpMkxvTM6CmHxaPmJ18xF",
  "key15": "5QtzgLxj1wpxdds1rBXwz2KUAEVoBqAepxPD7BEaCZnZA1TzvWbfnpYt3uypUdtozpaYwKA2yhPim8rSyAnmBV55",
  "key16": "4FNSUQzCLSESNHVdAfFk3pCY5NAKTdG8LoN7k24xHySTQaZwpBG7XPT3cJbZro5uUtk1SF86haZKpFXyyfdrQEKM",
  "key17": "4woTDHS4jGpKMa1Fq2L824bYZ9PDrSdFd93ShmEHnifVJMK5XepiYVZ3cWec4QBYHFAXXRReF2NrQWaQv5QJ6JZq",
  "key18": "4jwoAwREzshUqrgPEmuwPPX8Xdm86PkbyhoWffBuxYYSgxSBPzoA9XWywuQufuAbKVVRtJDdDkewtQ3EKUBteRQm",
  "key19": "3ukhUQ1TxHscrKKnxJEVoMA5aoM6eBJ2zU6qVUTBZyGXic8s2GfoFLZvtedHbQtC1tGTznoCnqdksgKTkUzFWkGW",
  "key20": "35PqEkd4i84cW1zwBUdL8th11yndzXHpxRs4GZ5XoUA2JwdDFEtsq5KPMeukSdAZ9UgFdMhahA1HxVrNKBiiA9dX",
  "key21": "dwAHAZNHzJXxa8vJLKq4xtUrBw8HUP3cnyDv1Hh5kJntjSbu7nM6yYbxXf887UuoHrdk7TrSdhRk4g6r9yzj56x",
  "key22": "3ma4NMkvSJim8oreVwqDErBSjwYYUnD1AfXiZAPfwdMnu1ZvLCi2rzTPg3AvvCQ9ENznBUWiP28J9Up4PhU1nodz",
  "key23": "2fChRa1aCArjSMBE3w9z2s3PYFazEtazeqyTWRqiULu7xbC5zWjj9Z5XJjzH9LJ87R83fGZR8Ci5BxdYA7UB3tkL",
  "key24": "4uBb5cxRugSTDxP2RMfFmgy5uAtBsUU3AGFsVkWXrUJkNW7z1Sz4AEh8wsvrZwm1ss19EJxziaYxhmmnSVkAx97v",
  "key25": "4utuR9V5FKooLJmhwvRt3bvsxbGfozkA9jCygmpBWAzebMmGoHti1G7yGQRTphRJVfZmbLjJtvprnaLseT3nRuY9",
  "key26": "4PazaA3dGQmjPFtkgxi78QEu6yPYJFmzAx6mXwDZSKsa13XZtNujrPVfb2KTiipLoJ9EtRW93zuP8GXkhKA44Bz6",
  "key27": "3f1jUjpf1LjhcER6cpBH34t9ivgRa6JqAEezJW17ym1ShSQ7eUBFEnpJaVM2qvMpGb8vQ7huHkMeLbbB2M55GgYS",
  "key28": "Uin2sXeJQUCM5dCgeryWEvTkrNuT3ewDmzGJaLjPsSjGJAFSMHbRM47ifGYSPwCTcFCGubHSPCUP2n4gDv3Z5Zf",
  "key29": "UHBRdg9Hu2MqL33EScV5BUF24QMekGmQfMqaRs4gUcFyhDHBz2zixGSBdthxsqNzE5ERPfAdD3izRBXdFGcaqFb"
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
