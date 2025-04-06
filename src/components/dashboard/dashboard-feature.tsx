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
    "5SbVcd1xHPAGxHCbxLCZK1VUGRXWBduqWLSYnTxRfrVLYEnv4DHtkThhScW9pG2vbzgBH9F1GbM48TYHyMGZbSdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xUHspUcUCmyRCDtvnxLX4PdiF8yKED45StZznAaub2WtCFRgccWaWVW2Npw6BGZTao3XCcaSaqRg9GnVb3fsLj",
  "key1": "5q4pd1wYY4vPLRvyBk9L4DinMMffMdZML4UnRpmmhUt45QNWDN3NujyZrTusNMAE3V464znVuWBiV8AP4wZJiZyn",
  "key2": "4ziKoe5T6jU538MJobLoJr5b74CSiNvDgCUStNKM6zGMrUJ2EyLvqTtntJDX4Kkp2sdMaGQ6GJaddNphfXs6jCxo",
  "key3": "2o4Lh6cTYHMmgshD3pe7Y9j8Cxu3P9j4u5exLC745DLMXCxpK7z5AZkR4VKFb37iLGsRz7gPWxDjqqRAQM5dqrR4",
  "key4": "26pYYq7z1YzRCYKLe3MndcLdP7Ur7VJxrgeEphGQL1TQC16o4nbTMyAS7BfqXfco23foZDeuD3jB1NMuFKgGnsAX",
  "key5": "5JVc8uoz5wE9gx4b4bo2pLgQxFHBuVph4VcsTfDv4zPqzs6MsFUNZFMjJp149rfNJxp1nBVFuM3Vvto6NXq9x8UM",
  "key6": "47XEWWATkV3dGH5UXdCDntrxfPPh2B88Um2AjmZcmkHBz6KoNz3HsTnX8Q5mAY7w8ZeUpCiZSa1aEAfNc8FjzwMB",
  "key7": "9tuP1AZxgMWzbV7XAECBrqtLpgTgg92BjoN5u8kDF4BZf6peVhJVfTkeBjqp588K8t1E8bPhz8Z5ADAyvkwjUy7",
  "key8": "vJThH9FJ5f54guTsLpo9Zi4P2XEqdszaQonMMit7FQcQFqrXNSGHCfv1xHNps3E4jW9aWpKcsUE235aHvhmZgFg",
  "key9": "26qoyaZqgirMqZWJytZY9MZe41hQtJiUtMSDJ3HqqttZpDXc3KW5U26BHGi75HdjM9XQx2mpPRiBi9C1RJgTGj1y",
  "key10": "FWKLKQHL6nmY6FbqnbbqKWQPLjfsrnaCN1arsD9mxXEW6L2LBjVKBwMhuW3gsHL5fTeRbghHofBXV5oX9CLiEQm",
  "key11": "4iTY1oTBwjhuC7acxChHhSSCnMadYrfFGaxEHCG3RUjnknAyA6X3cBJe5HmyHG9CSUwFogRXiW9qG3qmSnYnTTX1",
  "key12": "2JovA3tM3ft1ux2Jb6U9daapWvoNXipMtxLnwiae3ZLP4VfrcFWd7WwnyNz4Tx4YnA5NT1t9FNMar1SZHRinQNwi",
  "key13": "2VJcFdG3wuBvQg4CPLnCExWmrusNSWiK5M2Zv2g94TccUNB18PwfCDUh75pFo93PSvCi5Dtqg6fsn2UqG2zQ1kTJ",
  "key14": "UvUJi6g2AiCQcvCc4NfDJ6CCDGADCCaC4pkQi7et2FbrYw4RSCMWgvVN97jbtGk52YdiFEos1kdyw7eFX36Dc6B",
  "key15": "5Lbc2ZnG2xVn1rHjy2CJU9SZwkTCQtRoCowa2EoyboEsRW9Y84wCMoMSG61mZ9dZhzpx8oDeoPj1d5vLDEr6PeJU",
  "key16": "5mtFfd3qLg2NEJLi3oAjZksoXrob7WedFKHKDqp4U7iZ2uBcfhqtR3UomjxmavRzwRXPzCrCgrhKYP7qa8i58guM",
  "key17": "36pXKU8NHvJgwSJ5RWGJepnfw88AWkSW5SntLFUWVRrrEoMkC81yvDatx5RBS1sK6GcbuHejfvQLH2jw7jRU4Dht",
  "key18": "368sCzgNkMDDgAeBggnoheA8HohduP2gRFqNSDAM6TxqDB7k4gbTLWfabL6SJGxMUzKbhSobPADNthny5Xydvx2q",
  "key19": "4GyqAqeFrdJcgK8LKcNz52jepm8vkLatgWgi1XTWuXCK94NtYoznyAF7hsfnm9XzCfMcKzzvGa8iZxMUHKij3Ag3",
  "key20": "vfWRAS35a9Mgdm98gU6Jc4utrsbreWVRBsCPVywtYxENVUHTzuS4P1A1PPTLymkBivToHEym9WWtXaN69xVoiAN",
  "key21": "5xqRhfwL21UTBeChnnXTLmyrbxgXQdy79C9n2qQZvDcSGSgETpAtayDqciwbuxnQ2g3K9eB9rd3vNUD3nWdgQoFV",
  "key22": "4V44wbXY2NYZ5cxrRWzojvVMSBtNB135E9AVBp63LoDuoTzbFd9Y37XTWeJFVniM3Wzipc1qW7RQKRpaNQ8cKDCf",
  "key23": "5gt1MxPpp1jSB2Hq5GZLD5GsmHiz7NkNcPPVPaEeGCPLNAE8D1uEWkaxg32AZdxXJzTmJx96JuRFQZ9oUAwbeeS2",
  "key24": "5AhJjXbuFxD55L8XKgLshqyWHvffEbz5C3EKkbtqpPr2DW5AudpdYi4PFgmhzAukYCFabABjUtPqLkLWnTNYMUnq",
  "key25": "2Eh469YXJjhu22CPx1tcc3HauYnK6zHePi6RmmmJkCeUo9CsezXSYCpYmdipNzAZgHA25CCLZAMyEpCNfSz5Cd7",
  "key26": "5onQBF1JsJHQcTknjjDrhSggkTs8Huwo3HTWUFPRZqp59X8FfAZUP9877pYU3FjYoJd5EKGtLhcckcsCUZAn9tih",
  "key27": "2znnvgspadkpYDwxdb6SYfcFP4pcgqyo5tzF32JbPeAku3bDp7pJjijdRRzEDwcRPe7ZD5MrQfuw9ayEaVpW8wae",
  "key28": "5x6L6heVDG58BySd78g3ZS459J8MBYcoAiPNGzraA6FAQQZsvVxq8Vr5rb2BK7EBvTycWkTy6sjJoBD91QFsRNrM",
  "key29": "3kPLA3qrxUw9Earf1L37dydCXM9dbEAfpdVZpefhcaup5eKnEx4ELFx8Xiwh2VaAa6pxJfyQZz4qsNDZAPiGrNnu",
  "key30": "4Vj19SRngj19SZpjHFnTENLPr8Tj5dvLnzbW5nyKftmmeqwEPewykg6ZtYXU3DRbjQoVrMhQYo77BXg5C2aA6R17",
  "key31": "3yaAof41zXbELDhNUAdx6PUBSQwauBJ316vL6xTDKtJ7mEBt8qsesfmph194N6ACGvtvSYp9NfBWVpLPdfKK8NnY",
  "key32": "4vjnRgbeB1PdW1zQgUXgKoPbF5VE979WeCaA2juivec5Q2uPDVnSM7tbHteGVXucjqcMnii2xxdAaDUWjpiSvRKX",
  "key33": "44EbDfWqKmsp2QEtYaT9ywDg5LVnrJh1MZRyj2587Z8to3xdTj35t5r6SXMDhx99zgGTNg5cnhSvw5yWgvDo4a2f",
  "key34": "CdLHbrJw4YTNXNRco9ZLE7LbS5NN2sAEjjbTwQtsNSvX3fUNzHh5zjitDJbbhGCHU6JP54oMPnqhFi9vW3MwfCW",
  "key35": "3XPPsJaHRyRydPvQPG3V4GUcEPSAsecwXWeCQ3BgirobidSwbgo1RgAiCTMtDAHdPWw4u9sS8aixprA7apBkQjMs",
  "key36": "2Y4ym3rw6x4ztTrq7NXRup3WqfWHUDRNwZyCm7QHW67sFviBBSwmm6bDYruvg3FPZZr2mYY1LLNMVuSb5r2k1Y78",
  "key37": "NX85ZueDgCA4Nn2P5T7RUdB2nCi1GdP1DjpYqpai6iM5j3eJBQXUiUFH3TrJMbe6sumz86kKGCAkTkiC7eVjwyL",
  "key38": "65SB38NYBHH5HA9eq4WF42jzRTxSnsoGEX6gWkoqeD8pBn9CWBVhmCBcWbsQfegcXAu4zhdnYjqwTCxjWv9dt5qT",
  "key39": "4hZyCAUmdS8C95WEhrP2fWw7WXKDBGmywApbFEW8kUwWunD8dorQLCHJDd1GWXSMHEnZepRvWSR2yvcCgLrEtvHX",
  "key40": "4SrFgVJtoRurqmCjSqthoYcYqsBxuKb9U4pVpA2N6eMxjrNgpwj2E4Srdx918gSwN8HUZJazicbBCzd37nFtEo81",
  "key41": "2bNL7ZE9B6wtNTfHNjAFPAMMGY3icnWKR34paY8JwKrQb6bdyW9WYVyYF3UZnL7VnAKKS6Mb4ikj5KcrVft3AEyq",
  "key42": "3DGVreVgN5DmEbazYcDVDXrJ57B5sG4a4ugcqwwioJfCB9RUkgNxLasGMXN7vU7kqoe2v9HYFxAAhrS554vWq6FE",
  "key43": "atjaCyJUZ8BRuKGd6VuLmtxx9Y7DuLGua7fUXfFgyQtFsrZ7MAQukNwb2ywmWGjmQmGpw4cqgAishBFJKq71RBw"
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
