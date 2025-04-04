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
    "5os8Wt1wE7pAZsnvHZqMpNSNeZhaSqrqz8A2tgXoyDv8EJWeaAg1aCbgvHsdCRmZLMtobqfw2mnq94ecg1TK2HrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DNFcU28NZxLJVma2jqJC8QF6DAUHbL13d7Zzan3i46mEtVqD2jCnzRgC3UGpD8HBtK5PGN26mi7FLKhhEHDGJ82",
  "key1": "3xWVQQKepTCyJYm7wEtghhB58KfSDvAnBrGUg7s2R19SkXBcaSgjNFVgi3P6KXC9n2Jr7VLsttX8o7QQa7HScg5A",
  "key2": "4eHZokQfCMQDx2Zu678YV5ZMTnrggcr8aB3UKa7DtAvSTs4gCFcD8uc3SM7uWKMySMTXLHiBQgjhk2HXow24igfx",
  "key3": "4sZZqDNfsgaqvYPHSTX8vjzyh7a5ceARw4oD7jceesVvdpEeaVqUjTSSa3B1ZVZ1F9Qu4APKXaJRtpsGzRogBhe7",
  "key4": "24vw5T1P9j9AXRB9RMFhyucS4gRBZrXWGg2xNZkZXZMhxxXHM5Gs2R1FXeuC5vjPj1ZNCG7311VQSTjAigGK28Q5",
  "key5": "31Ggt78cPFfwwp3tZFDAFj4TwEhrbWBtpbm22qTZbhQay96bUrHELarauqDdm1GponoRvuqShgkTYE2XN8HhEQLo",
  "key6": "5bw5Kr3nnnyXSfMxoSLHhhvghhZCBPZ3qrjnTwr75ZT8LrNNPdMWYuhujYv8rvNhhD43eyMFW7BWNp99EFskasVZ",
  "key7": "44gsB1ikqCpNi2U4Fz9D7tGVhuFAdaekxVLpfSczgc84WHs6VX826xC5Y9b9rXHBRbN15fc7siQW8HFoz4oPSXGk",
  "key8": "2sXARLew6Tsqdt7uzJ1231oRMGmwjqwK4944aujDUL11V7NjTeEfFaPRa5KHwNJQsqTy2Tj8NxaEN9dKFTEnL4HF",
  "key9": "2S6mfjasvP8q5UCBKpoHh1CSgCqEmdNT2Uzzx8kZHWTY7X7YE1XiQoYSpX3Fqrd69Lv2rzRfBPzR4e28T9J2UFVT",
  "key10": "3sx8W5RZBtqDMaTGBgTHaDZhNgBuJjFLM6F1mzX9LEB482Rg8E8PnqDDw8LP8TSx8mxy8B9esX3SmxzXFvddMJRi",
  "key11": "T9D3rZs9cjYAApAPVX5aW5CPM1FshxDVJvN3mSp7DmDaPXz2ff5mkHiDMqsc4whhshA8C96Q3KMirv5APqKKd6H",
  "key12": "DETRnHdFuetK5BMiVcmEHXr2KfCG8njtbq1FhWBogJfiiz2ee4ntAdBmy6uDM7LFKjRSP8vo1FFXvPirkBgZ965",
  "key13": "5Q1PXiCNnnwWr2qPhSahyHgm8xPcS54gZbEz1y56o9yJ899jWehAJULfBxHVcFc449jmZ3jQRCVMaaDjVAJUuKBW",
  "key14": "2YgqGGeMgVfFfgNammcvVVM2Z34PjUPGGVhU5PdKXGKkN2LdmdW1QCD7Z4y1BxRE9kwTGBZar8oMnST59xQeqLLE",
  "key15": "4XMz5F1T19Bois3eyQNKGi9wBHZgaWPSFCZnTSza1zd32XcH8wrxeMRk3wxn6gFmg4AcJVe6t1c3WYaDubxWjhu9",
  "key16": "5rTaQERAAUCwB82qCKqYThMo8GofBAnvq5zifgMcUY5k7fqCvoAQLjjGK4vJTxbJ5mrEoLJrhzAa226GCKrDQbk2",
  "key17": "5pHfqACy97zxuX5MZw2t1dSCNfh6wnwXx4cqz8S83GfW2TTjw31zZwcjE16sejuozNWCvVtWAzTecv8NedVPUnFW",
  "key18": "5ZCGdzXad3iGjEEQDT3U8obdpB6qj2a3XrSDGyjYTaBstS5u9uJsrXWLBSN6JxSwUHnk8mB1cr5wdTdrGYA2suYa",
  "key19": "4pm8LN1h3JwaqzWRXCuKEXdaugaqjFSUJgFR5mpPZSehpQf9L17E8hn1o6X5EAgfR36XYmZSUfzXP3PkLNJyER7a",
  "key20": "5795aboAsLRhMVjjd5Ri4NWGtVHmAfnEKp1MuJB6qLq8Eqj4g9W9gD4dW7a3R617BhuY8gzuH436UkUh9ojUkaeJ",
  "key21": "Uijw8vDQqj2kvgGW6caEhCn1bqorvVN6Yh63hsY6MSp9e6WA84ACmmw3RKX7b1YFh6pJ4ixJtmbz5m8XgAiNzdg",
  "key22": "3xdfv4e9FVDD91Fg5rR42PJomN9xsvDbnDggGzpPhaKTr5cqHB871bhbHeWdMkiHLahwnFpauZJAKyabAab2unkD",
  "key23": "4z2coU5iYBotDy9Mz46tcZjBGM64vCp39usbEYmreRpdqCSGuLfzSeEAgBqtLFwsp68DptMgPWPTtNd4uHsfM51r",
  "key24": "LRsrvcekYVuoDoVMUS52GtSRUZLEGZ5NfFkCtk6fBZAukgEqLtzCvh4TP1LCFSP34cEE3LLVxGc57naVQD1tfgC",
  "key25": "2Z4odQ3RrJwdWfLnguyma4dW2TknwrMCVhkbhx8nJX5Rz4ydS5LkkwBKfWUJ9vnm7eqYq3gNvUw6JcrXwP7Cdn7S",
  "key26": "4Ess4zum3Mq4q6wdotDNY6jKrVGtcYs8v7HFfLGzfraj6NMPtCqe1tuLAWtr8RY6qc7K1UQx52ZvEBXuyHNMhtJ",
  "key27": "316BZTXZtUnGvUTaVgxcpqQCufCEQsMu5Eqmt39suB6FoQSNMr9HCtkbqaQL5AiJ8H8zyKM44djkWJWQyG1YDf8c",
  "key28": "37zboauMMn6bMbZK8obUQvwktBVq8vUmh5Lt8UffoYRfkWkje8jSjKYaA9exm5c7HjamYj3QK55qjn2Hi1s7zZ5A",
  "key29": "3uwDchiv6htQn5rz2uL5eAt6Gzkxiesk6Pn4AJkzieJDr95zrfUH3z35LpQBCetnmj6sDeKgWqYfHUFuTLXwGsaH"
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
