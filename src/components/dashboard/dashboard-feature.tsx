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
    "3VwP1KHxaK3qspi7iQFKnV3YfMtiJGCYE8AZB6pmWNHccPF9bPsHYBZo9K7CSakfBRky7xLetE4Gtse65DT97hUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyuZVGmRDLB7aECQ94ypxTabvXe2yzwZ2EA2hWAqaQiksuxinau7mp1PH8qeqfmH4qTEnvsh39zCw3oBagJZbcZ",
  "key1": "56doYBefgqQkbyV8CW52Tiu61JZRhgtrLhzYFUVC4bUM4gDyBp1EuzZAwXGvTfYigiz52MjFhVq3khSDmfzTVuBH",
  "key2": "2g53NLW4JrjJZ9URnNFwcPoyuNcjwMHbs3Y2DfypaepC6jBfXo2rV3c1QXowVb1fb29pqXMkEskgg8p3mWWgB2id",
  "key3": "5GBEzQeXhbcQNRUh9Hin4YagZr9BAX67DnzAxFMJZuifqGouftddz2oZAjmhxVcm2uXosyYjjNKkBDcMiW9VRgNY",
  "key4": "6GGHzY2NajGcEYKxoSvDR1AGDbNKy2aqWcJChMjwndQL76dBPuPAgCGedvSuBuVPuptsnZJZXxyCbZjG4eu4f5s",
  "key5": "5qZQ3G1pNbfX6ryiBrTKkpgwh1pGaoH2pFhKcsRCkE53nRBZvS2BMPgQ2w4QPnSiQL88zdHeYDJqVB58AmPxCsPY",
  "key6": "3WmGrZjwpiyMLQXkRVaHec28rWWHJheVdqa8vbZCVhpagw1w64kgPW3G7zSLnsK7tQMn7ncdL5S8grdTh1xgdYDs",
  "key7": "3NcVUqK1zyJgb9i1KBYbAG9Vqc1iXPnP4sUykf6G6UwXWQhpe5fQVr7pUt5pVE2iD8bRc1o63zSr91SXNnobQt5G",
  "key8": "3Kt1gHMB48x6b8wSXzBCSvEAbAgHtnUZUtCcxoXD191RUWEtWnmtMYaQ1LkGWe3wWZhhNdpZPsDQc65WRxKSGkjF",
  "key9": "5LB4AS1fii7rNxX3U9LPy7USRou1rXmNYW14Zzse9626RZ45YfHKVfS8V9zjJYM1sdoypbkodax9BAfVwfg42Gdb",
  "key10": "4YFyDFQ3NHv98B2qte2tmUDopyNcY8iV6QATJTwkK1vRJb54sD2yYbJ5BRE5ZGa3rbmnyGshjZwBMRMxb7j2p8AF",
  "key11": "58BkonsvvJs2xMvUYsKQhcstVMoSqCePtPgy5SYaPAYC3ZFDuG2qRee6VjnMEUkRYXS2REcUR8P4vKPiUza1tSFq",
  "key12": "4J5knNS6XbcUVW9ZUe9wvj61QEJHrFwsh52rXAAaVFZjZh59eFhc49zk4NFVzJn5tWA711VPewxeC4jzHDCxXjxV",
  "key13": "5BUpgVx1fsEKxQkkDQDD8BsFtNten98vCXLzTxYiDpX1fdLxx4g8sUe8d1WYoZXZRTAxj8XCjiez1kD5YRxkNdd7",
  "key14": "4Zz91gu3PfsDCTJEL29ZXVDtdbvJQEqTuqCXNqhr1mnSS6ZRwGyPGrRHakUveKvv4NjnDD2BqSpUmBLdKE8fBSqf",
  "key15": "4wYEwQC7mVwFZgmZWyyvWwbhstSzMGtdFeh8nFBtRziCJb7P9Q2FWm7S7JYmz5K2YnYm1h9bmXgxcnGV6Cn5QajW",
  "key16": "N48Mnuzne6MzY8ESpZgSKXATYBe3sNnf1aTaWTJWPczgbipvpbrfJSaPzRUNxz6FW3Mr2Fno8sj6asQTbDe5wSb",
  "key17": "2oWFXasWV7P1VTg1eJipSMAC3QD7ccWPKUrjPopUByZFfh6JjfoJTDyKFB8f2ikse3qDndFiaNFhhrHCqhT44kFd",
  "key18": "4JJ6iepAX5R3HwzqAszYVM7VVeqzPr3TxoWkcqLtwSMetsk1FRifJcLNx3vvU4gamYGzpY7yrurcBmRajSmARZR8",
  "key19": "2GLauVL4eAGFR1qMhZhEpnBhkRnj5ieREBz4qBiqXJA3hXr1QSf8ydbMnZ6sZA6BAYC2EQ2A9kcGMy9TmAck52qe",
  "key20": "WYaGLp27CBK3ZiiZMMVfir2NvkujhamN58ts8RNKtqnd3STRzTVBfx8D2eK1MNE4x8EMVcWq5dw4om3qH2Bnvkf",
  "key21": "2pvSmAKAfD2NwTqE74f9AmniGxgo8RrL8ddr1dtrvYbmMrxSL279FQtffRCHS3ACrdQvN5d8ZkQJ7pi9cHFgkgNC",
  "key22": "5nKgw6YaTxpY4Hw3hm2xQbSDnWXTEikgoq6edqD8uUbnojpuD1zDn34RP8HofaHSQwaU4mpSorP4FgVj2ng172F9",
  "key23": "5bVShXadkbyr8Bi6i4qFfPfE2ck8JCoSLufpjfxwTdjPEgSmUU9Xexo7vHAALRWqdp4HazhpkbNWS7BZmBqHxiPn",
  "key24": "3H1qkaQUKx4Q8yvC8Hh6viLd3cQ7K1ShXwhq4y5DrmhK2JK9Lj41uGAGcoNmvWWCRsmexfXP4ufqJWd7pQh7iebb",
  "key25": "2WUAeAvdtBu82DywwU9CX7aE5kRR8e9W7arNr4NRDDRVkV8zXqxfFjBk2GdySNFHr7bfPbNqWzfqbZHszDfeaGgH",
  "key26": "GJkLQ6y24zptnvmKBQBYyQETVkBYub228NcSzbVFtwLaHb7Frf5qGMP7EnuFN6hgghUVnrYYreVDJhmDZE9CPDq",
  "key27": "64gJuuFPe8X8mbELshJepktz7U5jv86Tk44UHpeKwMGtzVmKuZ5Ed97qwZvhnPJu78Qq1SqrvsJDk8kXT2hNTgT3",
  "key28": "5SRqptKRRLnN1h4UgtUocr2edEW9rQua9fMV8b1hFW1pakevMqk6A3bnBeD4GsNoRX5FXLS5WPnKEiqwQaCbpHyw",
  "key29": "44c67B7YU8fPPPgYrLYwVa912hFBt4yZHwAWfqcDm8HSx3nUTYTcqLvUuv5Vynmeudj69doFhJXiwvfjxbFjNcgD",
  "key30": "458X8zjHAm2dDyFgcPFJrjyuLcroaAn6FnzojbfijTs5KnzUrTgmctZSdzWbwqGPeTuqTG39t5Lc45iWrg3Hfhue",
  "key31": "4bQSySkecrGvV9Dzj4sLQDVo8nRbFD1Y9KKgiLViinA6NU4Vu7dK18vTDeQ1cc43TN75h9SYHhpuaLNLm6fVyCuL",
  "key32": "4XaBopZxnV5JVuurfiaHeMewvma6AwLXpke5mJLKYKteGUZhBe5agAi99VkdLHiHjnxYiVyhL5iqctNymQ9DQysc",
  "key33": "nJba4dww4unP6noaWaYc7eXLnkV4zTR4MK9QmjkGoutqos8a6PFdzaQmbbW8Gj7oMxz6ftu1FhqcccFw9VgpDA7",
  "key34": "5CZzmNrDrDE2HRWgb4ExJh9eVjPE9wLGsX6ZNcJDCHBjAtG2CYyvZ4gudvoiSc3RKvVKb4Pxut347esfYGgpDVDj",
  "key35": "9uNEUjbKQxy7gYjbgLH6emDbC8FS1XqnfMmYnnoxbgy8MgtdNUHPmStSCzHaNVezZjUi4TUmZByjVwyARBBVfWs",
  "key36": "3oYBE7RwJMUc7gPusCHKSCzE6QViBm2VjZZRdJZB1cp4WfAvh2bYNVh2ajMn26PFLbHeMkwTUB4QD6mxKf9s7D8z",
  "key37": "2QN2GW7WdFkqFTacaf3EnbmKj7jW63SwHHepdbZtt7wum81XyYQDAAdqNLKKmycJcBAtA3Kvr1NnRsLTSa5p8csw",
  "key38": "5weidxgWFYma2ff2XnZrY1xG3xB6ZKxJF7Z5UcexSJdrTta2qXRU1gPn8J4caxvVyNqvTxMMmDYf2Txm9JTWUQZG",
  "key39": "2Y24BuRiCt3WU5fiB97G22grCLnS5aaTyUi7oMHJBML6L8XyQjSMBMLFRTpFt66RdrFdTb3hi7j6FNt6uYEYY9Qp",
  "key40": "3QWcFKposECtEmAHGFwPsEYKJ8FhBxRWJFqsLX6iC6Lj91JEhvMHL1WEfsqY5kWb7tBSVVPrf71qwAy6Ch4XuY8J",
  "key41": "2iMcdveXZgrBsvTrjihmjgpM9QWHsdYoZvuRiaHLwfYCFSJ4VTZJrzgD7inHgFMmNHsnP9PC6QbJFdN1r1EXvooU",
  "key42": "51EV57Stx8BHKkoXa6t5dFAbxYCJAe6CbmkNABkSncw23NgqgvJ6WMkBGu68WfhA9SYeW4kEDWiddRbsdotMNyFk",
  "key43": "361sDdtDRFBVRqs1S2Ayx5ZHw5UZAFhskC7q8ayEbxUFKJ5mcRx2NW5Mr6Dc7KobYyXZhhXuFGDrN3RHaDCy9WC9",
  "key44": "33wP3rsZr4obFhbrDEZxR1vMWrEtfJTsPYrhaKfsVg6PMVh5FoyAQHsX9x1TeQMEuPmiGjLXUvZLmzpGSK84UUGP"
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
