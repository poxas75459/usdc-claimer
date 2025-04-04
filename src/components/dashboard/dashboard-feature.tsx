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
    "2dZXLkiYpS13VwJKmMoWw7La5HTexakcWPKDFQ7dJyNf9XAsLp1BDsifMGWDpGB5H9SnVe6Tf8CeSNubuUkCTYjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oca82ry5HfrPTdn3WPDqTUWpvwswtPEBVd9q2LCJ5M4qAcbC4WU9UMAJxNLaGHYJfPSERTqQCta9Yq7XEDC8wFU",
  "key1": "41Feemu87ZSq86qSCRQ3DoF9Eh31K2s4Es4Vr8xZdYahyvWM4Tj2WZDGeUcB7fSBD4u7NGMp6rH9bmnZARaFGPjJ",
  "key2": "3YUrkZsHefYZGCfTNFKBF8xsob7YV52ZEH1DKHCiL6gVR4LSTsQsqLkvU6x4dCUW46b8CF6YKaWDuEcmsMfz5mAR",
  "key3": "5ydEeJG6zrXZ7CRsEs1nLqHVUGsvcJnQQKDwwByqX1tp3sbefWu8BUMg2jWjc7WHbKU9U7mecYfgjtCKTSML2fGW",
  "key4": "2wSon5KPLV6XHsLZfDF6BgJgWPtKu2YezBbXCYHn5wsRhFTDZ5bmuhRs4c2udUThAWQnkUrEEEWvznyvrYiNaKd4",
  "key5": "2gkahhzaherdiY3s8LTTcKTDs4xoMHqh1JutbcptpFNJqVe1nXzKC7XDYqGMeJmmbcgAMq27Zth17iLD7ZZsUU5f",
  "key6": "3PLH5T2LJGZ5wMPyHW4gX6xyBpKfyYrGTYUvPepiQ7RVLRJAZVZH4bxgnaFCeiqhcHoGRA1h37KGtMkFqf4tDzJa",
  "key7": "GBR5GXvsAN5LB3qL95EibkYaQ6XheGsNu1JSvhsFuMQnWtS99SgQa7Zg895DHHtYrxAFAgEY3tUf4UbrReFXcrU",
  "key8": "4BuM5z91LEumawoqzdRBws2T7Djy5ppSsjR4YqnzhBpe91XPbC2Do64fEjdtbQGvQ2tpUfQ7ihfJ96VUUFiXURTX",
  "key9": "4zsR4crsbHJApX7dCuxVCweRjxAd2GWx8wKhaCXGtEWcerkpDqEQFm2rZMF5iRh1jXTa7eVVtB5uYhU4D7ZJDqDi",
  "key10": "2AjVXqJwdz8EyXzYT1FdjMWduYS8NzuzB6hG3abhJdVcSk52m1jLWVeCpaXHje3RZEdciDJYNQLLEMqmwRCjB469",
  "key11": "2VxpqAFBnZVkjYzH8NGpDB2SxL22s6s7ZLxf6iicTz3mDqfn1CaLLffgaxy4exqFyRK7SgnoUK8m6VpQ81pnTXXt",
  "key12": "i5Lq2S3sQmU8dyJvRJRAs9Y45w93GGY7NiQZyVgMHWnMfadxqQuxXSnYwejowwFRiCjN8Ty7zvBY9zkX7qghQLm",
  "key13": "5v5PF82ghbBAumDkY1U2bCyeuQp3qoJ791ShcNPacF1K7xkW9QnL983bEtVwaV11xNnAVt1UyvKkLdjxZr2qaps8",
  "key14": "5StRwciU5EarAbtmuAsSa4TX9h4WevJLGKWvE6VHNKiJ93ybg2hEDwHHXJsJjzQr4N2JseKAJwirBcYSbgM7ycVP",
  "key15": "A2SFyTs3j8HL7UzERVqjpHoRYuYhsiVMTGraMcwdvPXzqNQdohEhx3rfSPk8fRUp987qZ8d578gCacYg2RjkE3R",
  "key16": "4AKSHWBLD3jjFGdZ6GjPWRPkoehR7HnbSCXLZHKwAmzu328aDBhq815MioTxarzg9CYARuEwYP2ziRE2Vo7AAPjq",
  "key17": "5AYPYWTYxQA2nSshb7TxzXqVFQ3fNQtMCBDnRv1CxZ7QKtRtGzERmbeM2fptm6pHtMMks1CiNEkexPwPcKYf9B9R",
  "key18": "34gbFEBoPcpHqTwjbKiq67ibKnztuqgahrz5gSdfb8EWBdgriAyx7BY7vXboqtY1dXf7XtfVKJStews38DNQdH7i",
  "key19": "2Mkac9v6rZXfkHgQhAydtbm8rWrfioqwneZ7VZr3jV33txQUD1UPnFHDgoJkfRrjrw3BtgW6DTBVD7L4xgThtA5s",
  "key20": "C491VQvbQGiXL4j2jsgkpUCrCvsYi2QipNfF2eGVdVq2cQ5P2zoFwK4TQhYExp4FEH4cwzUjYadYryxxTb8P11c",
  "key21": "7WoizHemZnRfdPT46Zv81uLEPyy5YpcJv1wZezrY7hdfNwXbhiaVjeY1GX9K5L5QyoFrg6YkzLKPS7fYH6C1G3e",
  "key22": "3EojxrmHxDp3gkPfC7giQjGZmesrxiMtmxxai6hAtLkZC1gYUgYbAnYGAVcmuR3eXKsjVb5dfmPQvnZUwxG595f1",
  "key23": "55vR8hmZPc2Wn8DecVMztmqsA7vkavZ62tAwunStnhWHdko3vsLddruR3uqN2bU5hjYiBJ68aQSY2y6kBHzdGB7",
  "key24": "imiYCFG6aqWcN6s2jdmdUS3ng6tRoFYAKCypGnf8UikZGbt2powsZ2qPhQqqb74Uk8SzEs7tNB7Djuo72d2iSof",
  "key25": "5mYRMpwmgzZCrqFnFtvHbB7sSAYWVZ1NstCjLpnEvbTBN5VtJrwquVcXRb6i5f5UjvDSAaSVnFbL7z4L1S3T8V9i",
  "key26": "2vs7SHcF63vidLFZH93TaUHcJ8RiizhRTWZtmVp8iyqrhUL7ZzNdMURNgWxvEYiXwmrtbtkNgvvFgpCfLrah8Yuu",
  "key27": "4kfGhziY5DfJXw3JiVGF871jrboKRYKccK1esAP4oH9HDWbH3sq5zYVVNuD6uaTsEKSjcT8mZHj4XR8EhbzbwsQj",
  "key28": "21X7DVGscvxCHGbue1Awy478vwnGZviCgJFN1Gsi1L6o6CsMBmDTr44KsqHtsfAEQeydaipGGVf2mLh2ZRJAQzeZ",
  "key29": "KEjoDkZA6eCrGwufYpMUtC5HHkMFhnDZrJLdvGm7VzYm6wXdSt9e1ajEhAGo2AFBJc88i8vKiDkDT1GCdwwbESs"
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
