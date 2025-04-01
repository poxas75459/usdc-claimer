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
    "5Cd9qsm9A4BGtZiNszJHAbfFQW5hZQb9ogRoR4xSFiDEsCPpvze9VpTFDRapF8wVgx37aUaiQrKtQjhtDPTd88Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qqiksDYzwnKT9mPVAnKgwX41E2cGp7Q7i9tSneGczwg5RcSAdfc8miKig21S2hjpkcQV9adkRWFjRHJbZv7V5E",
  "key1": "3ViubY7Wyt8GFTLdYtACBuGFRHPnPkgNyJckk6tz5KLJwQgVd6NBbK8UNBxjJPuq9nrBzmYt8srRtePCRu1T2k2E",
  "key2": "34uv3PcNvcrV9AMv5m34bJnD9jNi3URYufasgZqaSG6rBugLZXSgqtYiGD12u2QeMtoF3Y5KGvX4RRidRSarvaGD",
  "key3": "2DStgLpeZCeayCPfaWSad4znWF1oV4jfzs6jEAnFJzNeX3YKVy91fQ4d7X3pz63w1okWP8tF2AKcHKBgaL9FbMAS",
  "key4": "5fMerUX62sMGSsX55Ki7FPsioK8sDfkSqttoT5QQFwrcfyTbd3G2auasPuHQioErfjMtPBtRv6iDgJ2UY6XM1qwZ",
  "key5": "3zbRMc1J31eAbYfLES7YYJr45cGsQScDyy5aiW8kWxJdY685ytqRb5BmsXdRiwgPUjMDnHjLNxipnRkFm9Bqs5Ye",
  "key6": "2KWFNcpzv85YEmSD5V8EG3oXiJ9pbwvdVqGWnwvHYf471a3i5o6CKzeKdaVmKybQ5Up5MJm4JBPDWhv9NF1XwbEN",
  "key7": "3sFvgR1jepDT7m4yuLJnLD84UCHmcu6NwbkpjeKjC6ek9mTXovyW2M346JwjXukGP6Xt4g8EwicTnedhdqvWv5Ba",
  "key8": "23pKrcBeYqnYG4qJ69Ut4ma42vHnLjTkw5mvT2MYbLSEF2DBnfnVrWbGgfy6g1Na4kWrpyHJ4UnTqkcP5yZLzRh4",
  "key9": "2m6dJdMtPrRQ9H2SD7FcaiBvPWUsHuN8N7jryZJKfTwB6VKjUppEiFoCdg3NBo94uZbuzKjd8ASS6KU7mzSCXHSG",
  "key10": "kRCdYX2VzLFNqhxoBoXnL6dZEWQ3LXyRmLUZZ3WeRjiSnHwTuVBX7c7mGkXjN8aDJoM2udMfL7S1Z8K9CgfZMhB",
  "key11": "4yRgADE4cUb1qCo2ha4V8H5Lmm5uT8G5cmXwKWjE54Yp3u57n5hi2tm2iaBQjeeTod6qfHz4wMqWmuCuVw4kiAS2",
  "key12": "kMq5Eh5YTzYqTG9uDPq2oWB47aKR4QZrx8VMagKMFnxwNRjUyoskzhhSHNHEw6mBRRh6NoDG5qbSixrastEXt6w",
  "key13": "3U9vwkBmGLPdi5ZmPkEPuziQoxQJq83cUyCcn7nWmqmc1D599KNnQqBmYb7UWCZAuhfZnmsixwgb9yYfjUP2F2oL",
  "key14": "5qUDFH4vo5srTZ57WCzwSbAqLsV5Wk4eRGyJunraPFBpfZZXHoiTaXbX5WwUjpFR6CA7sefaRZfjJvjS7jHtC5Kx",
  "key15": "2NbvKcNjAPDpoUH9DcWefd2viTizCGh7d7XMPVPo6qPcp5MZUwKD88XCBckr9KGeNKEuVCDRzEN5MoZNQ61qVZ2f",
  "key16": "3xz53FnPdwssCBZjmo21wF5EXRTEt2inJ2ZRbCHV8hLaSFBrQ5Q9KHdfHoQ6d4rrER1ngHxrtZQ9NPhxTQnjGrNd",
  "key17": "3Q3vViNeiY3P9hmpoXzuSgHcp26QZ5g12YWT4wWtgNRDfJaAwMYycwNXAmAKEsACZysQFZ6p6owRCjvqFUTRJ2ke",
  "key18": "5yCgZsVkgpTYJzBJX4nUtiWq7iscKjiMHTU84yYjaJpphRaov8QG7q1jFfjjy21xzru4uqLzZYyxZV9L1QpS9wnW",
  "key19": "64EuxSC9oYQsr3cEEixcyNZ9oZtxzaEVMUBkeGJuaARdn1t4YiRkYq6Ms3Wdrw6CjwuNG5WnV1fYgkHMu1987NWj",
  "key20": "54EeWiEBsa11H6MWgPdSU6QifMnLwHP8t27PEy5Nq8axuyhEJKJ88qtest64P3Rtyq3GhienRQojdTc68zCb7nJw",
  "key21": "2sUz8NWqVZez5D4JQbj8qchLvBKLmnUZAaJNrP68RiUKpPR5mH1fayY22cupCpqgjCTjLcNmeGJq2cdmdcRmhTWn",
  "key22": "5vKC2gfeWwfeTd52osJtHWsMSY3qqsVSYZFuxfKv4bRkgxw1F3uMzL2YiE3aFEckDEBzakJU4J48MWqr7a2jRFzn",
  "key23": "Y2cGJpuigjV4TP9jhgimtJR6uM1DC3tbCicWoUg3xaeKeSBrF6sCUPKWUr4DbFn3QJ4xxZjMWTZsBm2q12tLYRR",
  "key24": "nG9GDA68BibHkCH2TY9678qep6x1WdHCEFH3Hq2sNBeNJ5kiPmSiV7zgFvYt5kqPctUdk2Q3Mgnmy8np81z3JVH",
  "key25": "NQHmkBsLekB7TnqPYLdHV3262TzBtVDM9Pr4FPuMMX3pHhCCspurSvBz7qA15jZUbb5GDrGurzCaZcbgqtnXtr5",
  "key26": "3DCm4Uh4Uef5ni5M4EEf5wizabnwRUvj1doHMTGQhHqbm5SeUKPr1G7TjgQPbbdVF9DZWs9pSwJJS7MBWkJBZSo4",
  "key27": "3x6TDzFmPVw8hJUmFBb8AAbXNpvjFgA4Sp5qpBkTRgUADjyrpewFVfgbdutJNvM2RGV3NXbpJ9J5cC2uoYrgrgCZ",
  "key28": "iV6YFQVUtfWUoQGEGokqXxgaZTVwLRAGnyz3Sast4hvJCgg98MWy11wPWhPwNRU7TNpDaULGAavS91QAeH4yCg8",
  "key29": "5CqyGCFaLBXHXfc7NuHX3pVztEQaiDcgVp4dEze7bounqubZ3N3aSYRSsjji1E7Azes74rnT7FGmYqwckqYbHnXp",
  "key30": "2VG8PhDvKdgi78ujYfDpkfAiewWCMmC7pAJL6jiuk3QzNS1a3jinf27FQR8BaJNA5KNPbU8p8ytu7vKZanmRFDTD",
  "key31": "DS7J9ecG5Ey9VBurnNN55kjMWTwhibvCEw9HNHyS2qd5PdQpDyBcis9czUzUHMSCxM7vuBM4WbcrEvdZGgems73",
  "key32": "2W2g9xmuoKYdYHZYQ96Ro41mpAZpx6JtJo7AakZ1zQ4DWZ6fLnF7PhgYc3MawivrgpHvnGqGEDcvPr54QS6FkvPD",
  "key33": "278o8qXLbGVZNXyzRo1UcuB6ptJw5dfBVh35gKEFgTHVSmNKzP1dMH753LEsphDjx4kmhgh7kotaeiAWKyFz4435"
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
