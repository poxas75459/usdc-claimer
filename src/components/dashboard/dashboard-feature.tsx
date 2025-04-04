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
    "5NV66Tx7o41PFqCiBW466MewvmLTzD4oUPv2NmQA6kCXgM9yTqHLWs3WXoPsPqSjL52LHBRd6wDSkWYUJvwT6bMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jt2LpMSf75LkieaxfPsnT8wfE3ZxKoz1bPLafbA4cV6X4D4uKT8bz6PVVy17sEygp6PfmZniZTVkiiAtnwacSzM",
  "key1": "4hSdJkADfxVezyWzCWysestWwTEX1KfudfaJfzX6o82rUsp3sKDwVcXW1UNoVqXrZmiw4XmVfwXi1UzzdcCfQdwW",
  "key2": "5cS6SvoAPK1dDF9ZSDWBFyDuZ1pRmpfntwHqtZMJjBakRf1noDR1BBEpiyHicZeVJmyU47spicAYBaX2a3UJFmx1",
  "key3": "54T12xQGGWGN45x96QeJR5Qntm7RZTTchNRed7zwSR4rtZTrp1x2sB7y6WxWDkMpXih6MogVMiGC88uBeYutDMpS",
  "key4": "4zpqHGyinNmwJLUyQWJZka5nkBo9KzCxjhyKTRDa696N8mSg7tpCbphiJ781GMvhqvXu7k43dwndWDGNRaSBgHXc",
  "key5": "4iLhJuTGUMH5oo2KdpmjtoK6uVAri9oFZwyydirCpz9Pdn6T5GrVjh2LQMRDr1aeBVoKqSUjeCYGUmj7P81AqLwS",
  "key6": "5584qkxUbgWsxWbcrCu7SBhvVwkJ3uAX8LRfJrDwsNRqU5Fjx2hDz5y56m8Qd5TCX7AyD4VSBPNLoMABNh9hyFox",
  "key7": "49HQKTSSbqNBKSUWgPckdG9oHN9A8Axv7HGyw1EpmwR9ahcPCC4p6M3nGX5xfC5oBo3h3fa4urG9HURouZXc7rYk",
  "key8": "3b8Ym7bWdng6vSyXLiASdhSEfiKBjbU5NKHLyXzLtgKyq9FkEYM2C3hqDo8wQYMB6eCmug2N5Caiw3PhmroxEtpz",
  "key9": "4rBZAyjTVQ46HQqZAyvJqEC1Sq5X6dQaE2q7e8erE2KmDG5ynz8iQpTZLnQsXZQM1sAtvtg8KAuoZqv4TSxGKkPE",
  "key10": "55HiHirTdUEJkyokb4mNoNyKhqxiuoqRtxgZrBMNVwgeJeZCp5D4Xd6mmGKfnTmLHggTx5fzDC2V2mixKYk2yrF4",
  "key11": "5aMoVkXcUhVjeuRDQBj6vXaWYBo1Mr5rkohPyPwdUTPqkT3cBwtCq1F1UXQiRAZ3ZJjZMkmTu6FHLajbmBGxU5Ei",
  "key12": "4qVPAayRt4Eggyk2pGD9aMFZu9Z9v5YcXaF4GoSKFuyatcJDxQ63JNiw1X4w8DAyBCahbsZ3E9okropULpCpLHy4",
  "key13": "3v8D3n81HUpVbmKKp1hf7d6nzSBgLaB4ZjbbcqKWBSFGfsBdXDjAN5wnGUTGVd5HUBnWJ1wPdRsZcmgePj6mJE5o",
  "key14": "mUdsa5Ue61ZjhxEhsZvKYLuqKzUbG5BHTe4uCCBZvwmRNUhaN41pYZfWsjwSEoX5Si7RDme4jBAfEwz4sWvAP8T",
  "key15": "dNVh8D9F4FFAHp9se1ZdcfW9oVvTKKokuE1JVwB5F98C9Uc69cjtnTHTssdz4436Bszux516L4PofQADSEEYjrS",
  "key16": "NRkGfoPvPsW5VgW9e2cEDoAKNmCrotTxjtfV3ppbxiNW4DUWMa3gKSDTeCm6tUopgeQicAZvn5M4U3XPfKJqDNb",
  "key17": "58D3HzPfAbKGLfk8myPjBJKA4TipVCEfrZP3orQY8mePDV1YwJR6LuifwCeVkHYHQFX2a87jN2Kvydqx9XhQkdA9",
  "key18": "4R5eYJi7HFkqdqineu1tmQ7bZUsY1PWbHkJ5XSiMjiCuPnufeKG4ztxicARu7NoTFVp8NEQdTTrF4YCLkh2PTm29",
  "key19": "5omNXKMwB8YBfca9XxRRjANi5s7jysYCSFz4zLUFwBkZ64KhjawbE63S4E847FUr9iDzARRwERyfMX1mZsqb2CWW",
  "key20": "3yxEMhvMsA3v9d1fQYm1vbbbEoi6GeKxphfdxs6XJfput12H91GukEDicP2DR5MLMCpKEZZs3FGUXMW5ywvCPTLY",
  "key21": "2Hvg8jGXknE4QnL88M2FkLxoQtyJ2qwxJXEQQr3qAazeh4vmSKBEQEW8r5ceHSupGknKD9pzVCWyrBGWgHRyHn4W",
  "key22": "36eCUaXsAdFmNN6VPQXrH7eVq3mUVw6Z827CxtvzScJU5Buf2753754TuDzHxdwWuScTTsqYrs9JTQvBXtZsVePw",
  "key23": "uXARPh8J1GnZCZAwkSUMrvPCWnouxUQ7KhVyRPKimFXDtKWZBkir4vXxn4oBUXUA5GZJRWobz7eEE5NA8f2qpEj",
  "key24": "3k7KBsbdg9vXUpfRaAC8ScSrQj3r5yWsNLk6HzFk7Yzvj5waazSqHCUDZbm43DzLerQWU1M9GfLJZUb5m6WRVge2",
  "key25": "24WiRq6st8fivkrTwMRP6yyWYca4WNnPzkruT671FVdtadXw5ts5q2V78N1w7m4BHsPgfW3TDJ5wDQY4nHT6M7SN",
  "key26": "3Zmcop8FyejwwSD47wY7GQorEsB5ZKjXAtmYeeD2dUmENQArtDrXofeuFKsEKLueLTKEqstC2WYuRUz5844P9fBu",
  "key27": "4GdNa9FGgsLTk7URjj2SgyPudr4keiinJuJRXXHaGdZ4ECr6MZVitXVzpfozQVYkCyYAMeHA3ycwfraHNzK9zGCa",
  "key28": "5imjdojeta7oSdTnhLDdCZrNZyAr2XQHDnkaKR51ZnA1dJhqnpPfu2K9d7tXgP5qm826pZubBRa4Lfy86XQsypx7",
  "key29": "2aYgdfuTmREUKbnTk7SAaxKhQuUeReUrqEd7UktSvfZP7DNLJ9UUBcFxtgPXH4wR64KEQ2d9Ddrc4yEA1ceWJjR3",
  "key30": "huQxsEzzpXFCV7j1aheSc7vckMKPWEVTEzdftWXm3LM5bbp6k2GMQznLYwjSCPD1sqKFiwy4Yy5HbmGS4vhPRy6"
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
