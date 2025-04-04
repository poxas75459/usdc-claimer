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
    "5iq1LTsqGgXkRnwNWinrAxWpNtbc8mYzz1AXw3kXwrCcu3ShHtUvGiyjruczYGZp5pcc6rKQwPQ5rMta5vZCNPxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WbEpqLVw3ZB5PWmYVf5mUL6N5x9fWorZaQQQZGYD3pUwuR9CbPZrMuQs7T9DNWxB6PhPQXg2bf8RH3qTspsJfBZ",
  "key1": "5EdTEqHr31CoiRKB6tamYXrdXMZuoGuaHkowdZjQyjwE5EkNnJEWAjne5g7y1rbhY287Topxyozh51hhBajJXV7M",
  "key2": "3otNjgZNDe6NTH2ncYgA88BQTjens1uVKNjaWEDZmpUVmw31nXXu4D1SfFpYGFVcaV38h7HThL5zNFB8hVhcuxah",
  "key3": "4S6z1bjNjEobcrvfg4VLM4amekM7Pd8tzztbK1eF9RjFpfjcSNAk27qKH4JBCt76YwfWTYjvsB7RFXhbgLg1Jm7G",
  "key4": "3eiehnBFWc3MssvstvWB13kaLqPMCGjYHcPPvnUiZoCvVeix8SDVXVD3f3GmsU96H4UQEzMHaK2MHdFTEGifB4he",
  "key5": "5LeCRXVp7RrUQ5jHytvgoCc9H89UMvfQngLnDEWWWVUAuLNjFLabL5KSA3z24zrDb4K2SGj5PybpPz2YEP6KfTYY",
  "key6": "kU21nrcMDMnBWi2Tc8gn7pwmSUHTQhdhrY98xqawafqriiQigTs9QnFPmEH3CnRBLqSjQKFGWPCZXzLWyf5WCUN",
  "key7": "5EdaaBxdLGp2uZhkYx9KFu2dV4o32XVrqNedTpdC6fFfdNS6iGn9RjoTsy3J5pNoRmd2u7rwC8drHf8bt72djQDY",
  "key8": "5Gzng5EgQcuNYebMnauVfWTmwjT6PGpbnja8Z317mw6ECQ6RqajBK9ydSBwbvohxiZayRBhsmWmgAgDqnAYTfhEP",
  "key9": "5Ru5nGJ2Gbn8A8Cb7fw4C7iBt9oY9E3KLzwEshM9nToYgnBF48kzxgxWBby8Dwe1L2tTW8oNrzwyz7EmPcox2pMh",
  "key10": "2PcjJgat2qxDr6XZpkBJSiwBpdBz7YiCZbdAjJzzMPR9LC6H77rwia5HJYtHB41n2tpJQ1oLvRM3gxq22YMzU6nD",
  "key11": "2NfHHAcHGHTfWdSb8pntj9P7bdJMASDBXJxQoCbovqGuRhBPkftatVrbRVTtnmU9MF1LPpmefEwJJ2bMPQntkR1L",
  "key12": "qpRWHfnsB5knsw6jo45Xgv6CLo8ufWXqm14R64jchuUQGyHAR3trjkqJPxYkvpCcpzhDjzVUbdV4g1Gz8YMK5c2",
  "key13": "Ap4xv8yL6A85ifq9DfYWxxqYomz7tYuMhfsLKYui3VxS1HfPZFQdX1CAcYGT6sddi2MHjnAV1yHcJmgnmCStxhY",
  "key14": "62k55gpqX5yWK5j7GFXcbnfWSh3kUvmoqWPX3PCshgot34ea9cnqUT3uD5AVgg8td2zgmaYQvmfauUHdQcxnJ6ep",
  "key15": "4UtMkCmSGKaV4SJYvvovoCNbueBQrRnK4QRxRmeCexrqrLd6AP2bai4s8bQpdQQGtMEBTKKj5Y15ACzNNLRoNA9y",
  "key16": "xpFDDGGnBTa3AGFyzXpPHpBpYjy5GF3F6DPS66fvLAJjbpgK7p9b4fez9iUWmYKFNdR5GwZYnivHDb2cQBguSaw",
  "key17": "3LYcGoBr4XAqEajPoQSojf1onqy9d62jF9KuiWed1CTfu9v3HEb6JQHWhTMxGicHKrXLy9my2fMfKcxfQv8HHZ5a",
  "key18": "5rViSNLgtKqkCxTKFELWxEA6MLahk95MHoFmp3dgmUp8DxVrdPPd3LWTqYSXUSc1YnEXnE7Kzmnbb9s5ssfoXihz",
  "key19": "5B7YYYsGtRhBXJMD6ySTVBKiYjcSXqNx19R7xjsBvpkavhoxryZku6fXZtxBaksRNd5658GkpYekSaRhw8Dgmr1",
  "key20": "dPhYnf1MncU7sWdpP9qvLsYW552FUfTqwuUUExcEQimTgJ1nmXYcJKQh7FQjW44YkEZmYm2H3cqZtXEs7LKvMoW",
  "key21": "452M6VZcTaGRxqgN4Nx6JormXgCvq78yed7Ck3guhPyeKVMfqKrqtWYYXuny5zXaE2AKnvE2LhtUEHvs5EY7Q5Rz",
  "key22": "fr9Jr2RM9SAUpSxhRm6BrEiwNYCsSnMAgD56vgvrEBpNFvB74tjeTnKz5JLWPSdiw66biU37hU5ufj4Zp43qsmD",
  "key23": "dH9Q5t3NfbPRTUSPouiCchksnR3JanaxQsGgjXRHGGp4PBGPyJbPSQHJY5AigspN2vw4EirPJkWMT5L8h2vPXBy",
  "key24": "TTsYzRVXbUCQRJniMqptGeD2M66BSQHe3G8iDvvWLbDgJCgbYcGd3HmsP7yNzmFwNRqxvaEdH8Bf7aSguXt7Xkv",
  "key25": "3BSkh6PZZTknXwVuufq6FBFcgGJqXLgRWLvwdFfVMpmgCuR7pnNZSar8CTCfFZN1nSFdXHUDWyQw4btLwypu4sE2",
  "key26": "66Abh6NP1W3QtYrPTCDuCVCuWBvT5cTuMKzNFnTyv9mKQSkyK4mYe6FUV1gCuEqoT149FW1zHg87LovRACN1bxsH",
  "key27": "3KZW6huuBz6Ds5HJeNjV9HuQSS8cm4Z2smxZBzwyuumPhWxei7M5crMSJtPjM6ZrP7FMKPY44QHtqxCsMjhfv66P",
  "key28": "4rGVQ8YpPnEh6Zp4FPGAmshoty2tb8DEV1QHQJniFZRikTkGvLyApKRJC6opXjtyV3h6PGMGWNoSLMSJbHSX4CmN",
  "key29": "63bQw7picCyht3Ap84xHAJ1DDjvyAHRZ4qxbPzNbgn65hmdPrLGg844tBGsab7Ao8rmt8FZCXxuAdpMxy33yrDos",
  "key30": "8cXrXhgHGrdiPTzogrw3vvFG4qcfZdrkqTQQU4b2pEksvAb6B51nBwJ4eDEYCemMJUWR3tsPBBMqddgqVXi4sU6",
  "key31": "5rQreGbWR5xEb8tazKrEzFTJBahwtbdD8qvGebiWxgywS2r2Lt7Umioo7EJtUYKuCJGWZnMrrMA54HNTzUsKi7Kj",
  "key32": "34vDXKmCnysYjRMh5vfA1bNvqKzSrUKRTdWez3HjRgmVdTd4QmyJ6TwTpiGPHdaQXp9gLZsmw3Ch1ej9tmNbvmo4",
  "key33": "2jsFQkVZ5PqUFDdFz8n6TobmbajsBT5LKm1QATShr8VZUMocqyPwa7q96NH5YVSdLF2nBUW5mX8bwtw5yWBzRAv2",
  "key34": "58EEH6NLm2W1pRT84jEekT64UAiA6k3NtheEgkiXuMwXQfR4apT8JBxWFkzERBkXvHvphH4ZoVqRhzoRn83SLLbS",
  "key35": "4V8zaPyZm58DVAFNLWSA35VWxcyJbeYHfKTD851dnDEjCAPSXGmYzS6GujFDrn5ZsZz5rEHAr7CKFkaDJNDXCiMQ",
  "key36": "3ztiqiHiQTU8iEUtPKBRACpChM1SWUmFJCLS62PhNqJ5BKZXrV83t9a7frasHKo9PxB2JCgwEpKoNmQf4bp2L1hu",
  "key37": "21dpGU1ujxYsEVu9NSDba6DznjVXXNnhDMPK385KqaXgvg6Z5z5Kj8gSb61SzjLdbmt8MzjZHc6MSZnMiXgZy8rL",
  "key38": "242wagpCSzyhVNRBSDdD1npLcBaF5WZqA9Y3tA99c9gKTqvkFkPVxyAasKfcSrJpcKK6RQN8uP67YEBsDRGyrkki",
  "key39": "3gCoYRH1tEVEwYMr1VN2ppqs2PDYbSwwXF4UhZa5LdVzACedDN9Pwc8FiyoF9PkFWs5gi7xTQ5VYNcDtjkMQ39Ue",
  "key40": "4xv9Z52gTbYtJ1wNRThfK6wdgsaaEVgaLQZ8kRpyj7yAVUxRfWddN8Mvjb1CB38dvDMb4gkegugGy1NhzNejRJ3n",
  "key41": "5AiBVLPPxExy48nzYBDuCKHSMvGLdXWPosg9rGohGqs6Uvg8JPgZUE47MZWWSwns8BT9fFACsNav31dogoPgQsrx",
  "key42": "B65DJvE4YXYQExU7FaAQDLWqkWW1ivXt5tRKpsNNftM7wcMGFm5KXZDwXs7iCwe8rHV6hoXF3FERH85WHECxAwh",
  "key43": "iuN62oABVTS2H8PhL98oZKqfL3BdMoC8zTn8WioKFU52uxJ1FmyYtgDh1dhTaWmeD3tiVizzhnzhrdEUp1CNw6X",
  "key44": "21p6njAkiNAzMFPyy1khKzNzj7EnyUkhD2L4FkSNnkqQoPEKrBXmvfUh6Bc4FmP9Rrec9gCiReDFhAkXH8Y48ujK",
  "key45": "3M7Uf971gMumcmAT84vxWzBSw4hzvf4xHY3K6329Gjc4ycU1E8RSHSaRxSQVpHQASwp6sCUT6K6BjUWGEBtEhAUQ"
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
