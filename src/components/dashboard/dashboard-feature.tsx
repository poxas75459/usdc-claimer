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
    "2SufeEDV29BPyicwnd1Hc2196hAydT8XerdoiKfXRXKdTWB1vhCBd8Vwg7Zv4YhRMj28UgHNewaxD8CWQsYrppWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Htci1eKRhiH6j2DnG1jVCYG6x9XcP8xt9WL5q7jLZijWnTaMEEnas1SfRyjUm4rH9dgriRBxfnztUBSAssCaTcm",
  "key1": "5xTGzCqfighz6UTxaQq261NNeMMfSW9wbvy73PAoRbYEonQJRvGH7sGTBteuPdLLvW8GmEPdoSMj9e8N2TFagjtv",
  "key2": "8GTPg3M84EqHPLpCd2KV7XFHxDychxovG1ftdE5ko5698pPSdVkJ13PDMBQCAnGNaASrG5zpgY3WavZ7zYUPNCF",
  "key3": "3Ub4uSDMXT6WVarZwd5jRNePrrQXFysNNURCEKySBuZCJeET7S6cYxWa9benvPyADxTnZbPokzwgaC7wKNrZDRzp",
  "key4": "4i5vXpYUqVgPR2XsS5ipWnSKBnLWb1J5sF8BtMeYwnK55m3apcEF4Wf7AqYt2t1nGcjwng6VYoJf3U5xyuKRt8Ev",
  "key5": "49jntfo1KEdgkrVpvLAFPfCMN4Mv5u7KoJ2xxEu5uaKWsY3BNLqfYvgLNj5Y3aR7pHCYWMW115bDjQw4VonwUBgd",
  "key6": "423ikxJvRN5FrgkL1qySAtMo2FHBgEj5K76dc9AzVbBtiEr8AeJu69HdBxoK9Shv4gFd67bPvKBk5eKYjJNKsGqg",
  "key7": "3qtnr2CHshNsoCoJ4P95kDwtgY4CKAb5Jfhw3tQg2JChGjSZD8DSYqPQxy88jNmtb9p5ptc5hGdvt1o24k1u2ZdF",
  "key8": "4yxyXhmLBTA4ug8ztn2NU6g9nVX62WB1SejfKwpsJa9KeEX9RqCa2emBm9o4rSKCMKyC2BXYSHkbTQT2eFPRiizH",
  "key9": "5Gz6uD8i1TuaxJ16YP7UUhXzGiZaBj56P5hxxLjCW9CGdZwDv8v2F26d9nF3RU9Yde7k76i3YKyCnvXJsFPtAmK8",
  "key10": "28UTderHbUzUToNUowr8faYSFoTjHXZGgeN9NzKDAvqQ4NbNyjvZZEP67SLtVGmB3egyYsYGPkRuXPhN8Q9fUJRV",
  "key11": "4WRRgKz2VHZHZLME4HM3RSmZgpT7sDDoi7LzDeiPugjDHeB6Yjst1o6FfvrwNAXz2nm61X3HzqgzP1WJDPyCGiDM",
  "key12": "ZYgBbx7MfghoWeSsZcr2RkW8KvEs4aU7MHJPtVHY3DZr3VioUjJ56NNnCUutwkmLuTSST927zkZsDqW4fExNPv5",
  "key13": "3rbwhMPJ59f3Snqrueu1chCVF8ntafxEFGMoYQH6ufHwBMJ93jxj8bRDmNHVdvqZLtxEoroYuXhMBeFBzaVre3qC",
  "key14": "GtpSe66MtQ8cAyE2R26sWvifzuBKXYSarDFNhkyFAG27wLMu3reiCFNQ1HYXwS16SoLdbNBVK6KW9SZ758WDkAL",
  "key15": "4MxJCSFoZ4Xz7eY12pZeQeaZf7ckFvtyrePY7dbuJFk788vVHpE1bVmhsXLgs2ia5eUb2kBM4Kr8frjeb3G1gkup",
  "key16": "3JdqFREv4SbvzHNiEs2LLwau65XEgdfP5b7SPZeSNBSGipHBmWc5jzmvBkvEfW3oJxtb5zjrM6GqTg5BzWrRYhn9",
  "key17": "4AahD7RPZLLc8Bj6aQnZ9qMWnhgNhzH42TJUBf2z2AmM4ZkfxJ1q5mYeFHQZUSYhEXupg9xqf1NjatBXp2tMBy5Q",
  "key18": "4pKpGWdBQEFdGBg9dD2h6TZmPs3Uat26VsrXcmH9GdKBRoLm7BtdtVrhresQVpXqBjfv9DvNARgcCcPcwHS8PwmW",
  "key19": "67BXfYER6RJUziAyi6NY9enqMbRx1TCxJFr156AKVTDceuW48XeCJ2XBoVvpTiEmmB9ARD4TNwA6y1Fa55gjmVjC",
  "key20": "MBCNRrKF44w2oeiswXPPMP4YwhZ4ibhdTA23GGbEeHVqtc6dnwRkqBYVMr76wLD519nDYdgp9ALggimV7ATGxya",
  "key21": "4DgLTmkBBz53HdxC6E3HHqEaeDKwP4YcMHoBrQ89K9LRrDnZkEJWA9t4afwrFagKJpoL4Ebup5scFubL5sWkNNiB",
  "key22": "25jvZEHm8PuZrUdkL8n7AYjXzS6hBxNngwUM4gqjwkL1FTKBrK3FFRr9L15VjCwdABvvdxmS3fYjpLobX9broZbB",
  "key23": "wtt9geczm4Twt8qUxe9yy6sdoCgDe8fRmim7SsQCysJyfDaQx7gfrK3B9mkjV5vbYfULJS1uviZEp2rXqcwBmvq",
  "key24": "67GYrsQQ1Wqp9WJJV8dAbcWeVibqma68rDrjVrXkEkEEQcg8pgaKt8gqfJfdJNWY2fwCNrpmqhZEmXumPLmki6RE",
  "key25": "5rJzPnNJS4NSeNKUvydwGtF8d8dLKS7Gw2qJw4mwdJxJdnUebGNxwBZRH369TgCxVpNDpsS6uiW6Lmp1RMnB9DET",
  "key26": "2YmdK4ypE5YW6uEeLV2fzRdktMaW4Eb75BKA6PLPXGirNdhWH6SQnaCqec6H7CffLgtQ69X1MnuPyMAEeg3CWAKR",
  "key27": "4scEBu1q4xqDh9ABiuK5owdixJapA7e7TSyvcxpCjAwCZEHYs79ibCcr8U9kwr8QRQQT2NqoA9sPTdPQmHbAddQJ"
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
