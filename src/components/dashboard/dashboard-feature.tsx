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
    "4YfC3uGhxhxfgSYwEUCJwBnQhKMfJ7smEiJW3wZuz7aY779D42tumUnHXfkxu75YW7GDzkJ6DvnYHm5rjDA9uU5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8jbXHSJ2SfNodWv2Kn8uGBxq9QvVA2ymLPHXpbkCTDxcqubNYv6PHUy18TbEkqY6kH5SPuLyFu4s4Txx6Ymt9G",
  "key1": "32dESUEbe38F6pMRQt2zEpyr9tmUSUGSHYnXkouKqcmM74eLPkGp1EH8Xmj7PDdxabVxAj5XWESU5otDJLACJHRy",
  "key2": "53gpGLR2mbJis1LP85yWwcNYzUJsEkv4QCZZMAyczV4xKniN3GQZzKm6zGCNVRo4JgbJwvJAUSARCqDT5MVrG4it",
  "key3": "2sMvh972vAyta92omLFdkd182snaMJt5VDP3KWMRPByWpXfAR7xjML6LF6A9L3xcn8tcqUNe67TyPDL1Mb2j1cRT",
  "key4": "5xDoWDQs8VUCVfM48ETUSPAVVWkFuP5d5Y4cFiDCu2i6MgCBXdE6avPUmsoDH2FiXgQ4CHUFVrHMq5Myegr3WJ4H",
  "key5": "2vEC8Q2JhaxLbz9pRrdhc3ZyUoiLS3pJ95pFm1xN4DM7JiQcB9Ln6Tzt5H3kYZmPKv1VxEcnPcu6pqCS1T1EkyXT",
  "key6": "CX6NUqsXcEcv3VWBu47u6JhjN8oyoCn5vtP9wd47AGugoaENfYtPzKfB3PZarfG1Hcu5tvUTPmETmMSu8FEDdEW",
  "key7": "214BFymMKaMcBfiRovtJzaUZstZwPuPXXnBgigYWijdorZvAacuXe8oaaf9nCLfcKLJWPGzn4VrbUCThrhGXrfs8",
  "key8": "4XKm6cBwduRhC9QwCBm2EUZ1Rten7ZBKuM91pjGeCNKaiPuqvAFDpGRCpWUHfkKktmsH5KWd5U4WStZyJJvaxbQ6",
  "key9": "2LVNRSyjPNWrbHykTeFDUuBGLVseyt1SeaLY9Vt1rJo5H6gZ3AywuuidvNPyK7HNM1R8ZhtYpJqCfyYU2AN7fCcG",
  "key10": "52vPovV3NCjGrQXmeXjj8WCrc2PCz352PtGEdrFPeySGws7uva6amNoxye1Ga7yJzKbfuubDyBehE67SYRAa9vhD",
  "key11": "21FXrLurKDZGuk9yayrMpR1EGFvk8YErUtY5LjEg18aR7JKjfzk2AcpSxWLVpps566H99NceRQitucjUbxm1wetJ",
  "key12": "4DtB468M9kQyfP57uvWnSRUCpSYYrPwKq8Tc69tFhwBBBuyx8XsvGchYK1A86dvsxgMd5fNfW5SMZVGBWF2PgNAP",
  "key13": "39dDPMSY4arBiCQECpgopur5GrBkcoJ7B8G2jgUyChbJd8rimhMzbLSwXgF2u5XpmeZoxrQToQ6jnQNqVFhpZbdM",
  "key14": "tLJFmnXA38e7cDFRgNJWzgro5qiW7iPF1KvxCUDuhSCTurcAyF1bHRNk6Jd9k9jyg5LkVAaJnxZQysj53jJ16o6",
  "key15": "3MY4tyfbhGMjxdFHeTLG6kjL5m6XUX1eV2ktwsf4mxCtwcLjs27gCCny11zsAtXxrz1wRhTTcF7msXjrXnhot62d",
  "key16": "4HM5XQKPU1RuSGAayDX34rQVJHKeZggrSbCFt5862MZ76Y2Fb3AsyvbVePZRvsJmjofacgoYxowfpPq2M5YDVkuy",
  "key17": "5eFiyYc57g93hK6HfDJX7Bu1MTc6JZYxromi4Tt9qJjEHqGdN3wt5waErgkMh89SFHswFdDZmBroBUghbfAmAjxM",
  "key18": "247giNxvRFN9PxJvjbWej9anUjjnnRJFKAqUsNJcsGkY25wcXJafD3Ej1EKLEo8sg9QDNc8gtvEL8W2cEj18XpFK",
  "key19": "4XLFEBEgLZE6kNViuXZUM7JkTgTmFR54C8vYnivx3Z6iUBGnWH9Tfrzo9rSvyjMUuaT9gBoqGTnB259cdVv9c6n1",
  "key20": "3fytZKAEA2o54L1EaZh8khvDyZH9WZXx32CdaKAYDdvj28b2F6AXSAsLE27UQ5Bc96jomhXsmLXBXREs951J6o92",
  "key21": "5GcnWrRm8hZbygqG3ag6E5ZE357nUAEj5n1zq98xyaCR72jKah25qMtBsSsbRa745Db6zPezbWPWuLmpUsNiznnu",
  "key22": "2q2rZDqMjR9RC2BpjVHZL1wj9iv2eh44kePYM5pWfFF9PwsfyD6fUZggxGqcUT5nj2hQ3p1xvG7ZjYkHyNH3pxBE",
  "key23": "4HXsw5HYBVm6gav7jXBq29CbTnaXaXQhZeNeKLiWnGKL2DQEUfBFmb4oNggJjTRkznZmdhSG3ugtcFLk31ueii6A",
  "key24": "3Bc2qiymJVkdVxZmTmKBYrfDmi14MPFr3t73muQ4PKR6p3X8yhz5SCN3ccbDDY8zfesh7ES2nytWygu544btnU48",
  "key25": "2yVts3dRHZr1CjYGmCqThGWpwDLBqBzzTtSER9AtyYcMnNGYhsB1MGUvcQUHhYEpoCU3F3W9NWgF7XgTfh2a9PUd",
  "key26": "5yGBQumGgXwBLL8PYyUQjEJw2Dg6DafsQYXrR6ubpS16LE3SdMuKLaC1ZYUuVzsddtqH7nVj4rWWJWYCLJ2z5DEJ",
  "key27": "5dfBFCpPFXCbz67MbvzeDWVxQb8uEsiVUEaYSs83tXQMxFAzZ916emZZnRje5gJF2gztCD7wXXbvqVKwN7X1JxNL",
  "key28": "42856piC7jATLUE6Lt3w5JmLTH3BVGFa7eJCyvr8ACp69odkfYLzedXmDCvb7s5FSFHWZ7C9NT6SJgTMVwX1p5MG",
  "key29": "4LomPUYCmE6ViUEozt2xafAKjYiFXopm2n9CDada2acN5KZx6fZX4RnoTZ1yJopyMjyaZPRFn5bEZ5uygTipA8Ph",
  "key30": "5esm9iSXHbax6h6B8dpThpLVDqzyraSCD6H1z4SuwaW65LFMfLZQz8CZ91Q8h1Y5w8F1kqbx6WPiUdh2GC2QiUzE",
  "key31": "YWy71zmWhF4i3S6s3Vq7nDGMVq6CHisGHiSp8mKkkg75GRuFypV8GP4jY5N2ffhjNH4LL1dua4uYrxYnTnsK9jZ",
  "key32": "4p3Z8UTrUGeTBPG25kJ66sL6BGbNAiq2fgwg5erxBAWXdDZTy5P5oGQD5P9euTMErZ8DFxy5ma97bGKMaky2VkN5",
  "key33": "5QygTDA4TNcSYRewBXD4zcMPZwA9xpYDhYQixfj7J5aUxNifXprAVXT44cQF2YVdVqYBUr1oSha4JgwbxJmzCyES",
  "key34": "5k4TM5WwMvogK1LWSB1mF66FMM73RMyzBqid7gDhYoSETwRCiUBBzRnUcXZ5cWyDeqkMxksCZGWEsvpo5tWS2wG7",
  "key35": "3T6tsZ7QTQTHycogHqvkRyRcr4ZCzKSP7hqhML9sd9iRQsR96Sw5uiGzZhPfxEZGRSYqaanWZ4H1c2WHBFMdvLJF",
  "key36": "qCpnEpx4oYMHed7LLMUYXNKJtbRnsJJwWASqLnQ6KRiQ9G18VHpiTaz3fhCnYdsE85kk1h2ZxbxXRz7dJwNw21C",
  "key37": "8ZJQCg25DvA6kgaqY5dw4Eabrz4UxkeGJh7Gi3JDsFhJkDEwsUru4gVv1uiLkv39SVezwx2v93cfUVbNgFwWNfH",
  "key38": "24sGG1aJLAx124NUa3kxbM6vRJDWN5hamafkew8EpXJjG8JUkpeEETrjjGMRdJE9B5QKwGrRsDC21fKDQP6gw94D",
  "key39": "Af1sBgzdPQrLmbkNGJ5D9sNZmehPu1Frc8sV9qRnxsDrDcz8zjXEdea1q5vfv7UsJaomvW7tGfsQH4p7K53wDyJ",
  "key40": "dzcNRD8j1UmAP9TR2xjofCyP2phGDoGyT73t93QywcUu54ZFuh1RUzzDLggJDHjNM9Y1JHhvttoJdDS8MMQtzR9",
  "key41": "3zpsnzHUaN1ymTU5we3XBQRfbYkmADHKP9HDy6C6PLqB9599VTverxsCXeNSt4DjpFHSwXbXKeTirQJFbShEaYLv",
  "key42": "2zeTkY1gLuUn3HUWRcudxLUnPdSb4qWr56Ln8kHEQFwxrdtRTPCna4cD354BYgjaRHTb2T3Wf2YhSiqQrtJ42N7b"
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
