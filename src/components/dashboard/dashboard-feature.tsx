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
    "4TGxBxqXaQBewL8y2g9Ed2ThLPUPsme4yCdemBkoEURoYDNeYPmgM1gGNsDeguBX9gonjgcmxxuuZdJm41r1pPHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULwFHgsRD5J44WNpXqWPww6FYuzNLbncujeq5Fk9MdwBA7dBaFagQQX5RQEBakd2L8aVm4RnEo1Cx4PxPe8FLv8",
  "key1": "3x7nCZNd9pxSN4ejTAuyj4pi8Lv6jYUbBL1V8nMVZMTf6q6XG9vPhHeWyyJyK6jF5ZNjVMre9GSfhsaxiW86dUmg",
  "key2": "4ye5FH2eGfDGgobQdXGVy6Eu6bFSQiT1d6ozk6fDrhCoA4rS2YfMgXdgwdZ8mDxub3WkwXG1uakcbi5dWga9sP8d",
  "key3": "3gbibihhvFRFWiMPUH8y3GW4JB4meXdqr1nAHsMQoLm9D2ePhFdr6zeeqvtiVnswEyuMjpqsHuctjgkFsSWdawyP",
  "key4": "5j5f2qcJaaqnh88Ke3oF7iAmczVYM2crmtD88MaaJ18m3RB3bfC2Mk5WCcRnmZp3tVyxnJFkQobR7vDBmQVjHrHE",
  "key5": "8ZAsPdECg6txN5h3PLSYE4PaLiuuppCVmLz3HCL9ymWu3ZPD8oKpj5nJ6MtguutDwypBU2BAQyxK1W72UYy6tBF",
  "key6": "PMPD9Meiv7s6AHtE745L5gVC7TPuLxuYmk4GcHaxpXnPL9M15Z77kUuxj44DPjYbqQJqqi7Ja3AotmnUgyCY41X",
  "key7": "4g2jmBF9cAUqNVQE8S6uxbAcKc8reVhMmUSpSPWMApsNj6o9QpUtuv389oVEpnq1SuCha83CiTEgvm4ddQTu2bf7",
  "key8": "3cRKB64naZTLe4AzdkofxLYgNN19rqp276F1MQR6UaC9tgC2WNFGKj87UcxuDWPd1pwtQgeCGXkEchqN34s2oTDB",
  "key9": "5RpLQAxF9WUHCUKLH8CiixBWrGZBtQh354hnVw8aGuTSQy4zQfaLuzXU6pVxoL26312LX8uGUJBbKVGNieDhDhvj",
  "key10": "5HwAvh58L1ZEUndgYS2JMxdvpMxmCmqUovsEs26pCKDXb7wUWeBsKtBrjwS7fkAhy8HCc1hEd1QBKuXnWzEcY1cm",
  "key11": "5DEXE3KJYVZVWr1us2ky7tWM8oDd4esBZySprNAAnWuwCPuVNv9DFWyxMXFn8o131Nhh44xCP1gZLu6KG6vXTUfW",
  "key12": "FnjJyQFJmWGqve5tLLFgRY8Jiqu2Q95eMpMZHwbJogFSYkHouotsd11z69WEpc4dsnDodRnyUyEJH47EwS1Zo2j",
  "key13": "3xC32gDazEDSKFAGh1NDEPMxiVQta5ZMZWst6ZKXAtxMv67vjM6zzMjrAYRoxYxFuj1M1Vnf9XVqj8jn29vgSHSY",
  "key14": "31PKV9AaTZ1Wu1JrNZsHhNUdyomAQG4DDGN7DpdTzRELez99bTdt5EDS9aBcDA7CBK1LCvyFSTXWzDwcKqscExwg",
  "key15": "5ZKfYdw1G5Dw8TmxxmPhMshXJ5usMhCtmDKpVdgq8APf6V5x897EK8LE4ALPnfJS93cwFpHJwTB1LdzkrSEFStcj",
  "key16": "62GcCxDV62pqwbh3UPu5k3R5JZqLM1GzGZ5NhS6pGWRmtrB7c191qC8aFxp6GuKWSVrcpyQqCtjM1drsjXctAga6",
  "key17": "3nF6SbhBL7vWrjSy2dFawRMhDRQ9w7xacweqyUwwcFaAdZ6JrcQeeeBJDv7bL3iRPzmDs2D3uNBDWKXRw2s1eW7k",
  "key18": "2Kfb3WF67asn3MvG1UpWdgmAqzFVJjmQJmNyWtuZZdqk79fsy8EXoFNdQrdRmpQBecKn1WJfbV2YAuXpSX7auq4p",
  "key19": "VSSY5mhBad9GmW9fJcdoPEUDB69csZjeEyo1vpiyvRst6S9DuffbBnWZ2afkVJ2tg2DKHAvso7979eqao75dhxV",
  "key20": "7ZVpqSeTRqxUvEnSzmWA5RKgJDmvXC8LmdKoCUmY6WoU5XsSUqfcNkY3uXJkX9LAiZ1kcZMsMx2syZRhLXQBYhv",
  "key21": "5vt5HxyirVFwXYQDTZjDZ7KfLeNHXNahMkgNGyX6Fdh1LAJomAZBkmJxgMyVMdyohLLR5o33kboQySdjyM2LgtTG",
  "key22": "3kqSyZCjALqxnCLskcctS5KE9MkLpemEi4w5foDK3C2S2hYmeCdmkuZar37ZVFHUdsZpNGMMYpcXXxu6Yohasu6f",
  "key23": "3nFFrozCCzCGcBjQ4NfQd7AhsHuDeaPCFx1ZhV2bKLw2jmoXLHRAA55NXjZR3V4YWdM61BDGLSZtAuUpEpMeyzQa",
  "key24": "5GVSmZyrFcFYookPfyoGHNmWE8akwKEdKQckYKT9D6f4HsmRkBCXucUZpVp7jFe5MUnDWTRFgovGTX1fdxqyGgNC",
  "key25": "3LcxWjMiok5c9Em5Jb1D9eCH9nkWoTsaguYsEtWFCiomAGA5oq1JPW4i7gUL1FCe9Af8oUiR5GgAzZzkRZVowx61",
  "key26": "3McoEP26eqtDf3eg1Lx7VuzQ6HgoTYefkDgYS12NdqVEnzi81oHdWdKaYZrVgzcCiY5cMGNw4HnzQ12zSYJbaWr9",
  "key27": "4uZfXRakXydrz7UgyQ2ZEbTQTYPKVyBb1SsziYsNVaB2HUf8se7iZApmiteoNc4sXmdirVkNbe2CfXbA4NnRHynm",
  "key28": "2CShjhHvxH8Xj7ZkVh3jHCGnabt8qe2cEwX7Ass3KhDNiMoDokJvNXYYF9cxwP76PgJdJHZd7Abg97M3SXnPR8jZ",
  "key29": "swDWkNKMiYE2oMMDSMWgusJr7ueyS146YMAoCo312C3eis87KTkkjsA8AFLDyFgdgrtn4xedkZ1eVWLGW5swAb9",
  "key30": "2nHca6DBDErbQBJi9eLc4VzUu94xnqJimjSmY6QnLhbtSpbUC3xQtdwbdCDyn2Gi2A1gU5LdkakST1xpnjSpymK4",
  "key31": "3vfKwg5w5cH2pf3fRjqePNNE8Sn1qsY3SebhQA2yxxjj8ZPQdXwUDB1cbQcf8Rp5TMJ7JHnZTGKJic8YDuRUJ115",
  "key32": "4WZ5XPmS7P8RZRjoycUYsCkR85beEAcbQhh3MN4qpFsRUZEEDY8o6x2bYtkqeuTFAGZAy3BQ8hzJm1YojjUKPtCt",
  "key33": "3zYvbKHr5HXWNVu3rQxtu4HsUtX4weayyenp6pWGZMywKUkVRWCwVG8EQsMscGWUUDkWcT9KMC5LzYgEbKJsSUbU",
  "key34": "5s7MPZPKsSUB23kNsBFEKFutAcLUfns9TUHUAe774CH23By8wmM6rN41iHWfjLNNDpJuhCre8cPmbkTdJAEScYUV",
  "key35": "zkLyjafkbDroKWCdTZbfwqobH5vXtqxSVewE5D6M5gg6MpYAPpgCREMr52uSNWoA7973ZmmB3s8dF2wYYi1RJje",
  "key36": "5PJfNrvcE8DTxLJv9Ptdwj89bn3edeQaYHSpHgHeiEgyrSWtzDETgTt3wmZ7MEdraMA98YZDoEUQ9oC3FiUG2Ksa",
  "key37": "43hiJ3PxDtZpvh8eybACPy9R3b39YQ7oA7ZoF9jAdfsVDWN5XHALitMMtzxHP9Bh6qN2uqhHTvVU7ToUcTai9484",
  "key38": "hPgEsc5qWCZUftXNtffmCfzWF99LemyrkeRTnfrXciEP61E4SyMNuJQ3LaDCeWG4uCzksGLsHZPrGEQyTwCQgyj",
  "key39": "E2mVwkZNLR4g4VRH9caxiN9YDZxkoXtCSUc86Xap6JCuofVeGdGDjZEt4sMSh1F7HM97dV7PC6p6zkGkhyFDXr4"
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
