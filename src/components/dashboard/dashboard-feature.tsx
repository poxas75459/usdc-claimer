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
    "3aWypW3HYe1EdoiJkMo35bzBvMQDootNfPqUph4Ed2p7rey75pcB9rRro3B93aHRMK6hZqc9WsAoGxKvjcvzHYVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDyjP6eX9xgU2KVicofSjMPyUKip8UTZygg6JeriG3hvceVY5x6NZfoVgnYnbcDYrYwthcFvE98n1JMCGVc57kh",
  "key1": "3PeQ9k3HMJBjRNsasATeYrAwgCt76zHLLiJrh8P3ES3EfLomd8jixXSM26kqNRt9iEdfZg8xJ4o1NkvYe3aCvVcV",
  "key2": "3RaKJnVnx7UN9UZb3yZZpQ1mncnidxvQcmUwfiGYQRBTyTsXieWpAkW52WMDeGVvyTCvBu3g4ZKHypHmPfPBCRjc",
  "key3": "2s4czosPibx3BCpk8vtnHKu7myFjyZFGhHsiFLSQB6T3bT86vXbfVwHGnheyQeg1YbiPRj9aPH1gmfdB7ZuraMd2",
  "key4": "2jn7Ni5t4pCYhjCwm5uVAWHuGYYBTpAgMXgzGsDfhJXHN6GDtWim4KzD7QAf1rav3uiSRzk5TZd5TR11GMDBeWvE",
  "key5": "vLSKhQ45zDQqZ7jQq1W4c4rj9Ho7KfxFs4M4rfscXWbhMWPKQM6f8j69t5AKHhXUZ8mmwdkiqvFX1WvU5U4cn3A",
  "key6": "DyPvi94QfqNQjFiHrLYCqd53qycofYv5P85efpveNuQcZLWhbs6syQWGTARrT13bdZFtM3EtY8bnuim3j7Zp7fD",
  "key7": "2C3bno6RVnJZGXoxjVPav3dFUBq4QyTArz3ZEixzjL3jeY9CNr5A1nTw45kHQ1b1CxxNFCX4MWgbeauKjkejTxDT",
  "key8": "46vCYxAEbJM5HPPqmGXyTtHR86bJWjr5ubVymKBcqRuos2w9UdCJP6LRgRxqP8Ecd8uv1FjTVgUojHuxWST3b1TZ",
  "key9": "3N9QspPKGCKHZsiaqoLaT2M4tttr4B6n8mvYHBLUuVZx23XuyLyWScRkaH9vatRLVAkwz8DyQs6UoJpEY8Z6AygV",
  "key10": "2ewP1gn6qkbgXkoHW8D51dQTU2ujyHsbSuXSSEMyp3yqYxhkiih2Sow9u9eqtAxkwbQC8HBowQprRxNDCmZkL8Kt",
  "key11": "4op7fmXfdbWJB9cvTxDFBCdDqF628hpCzaK9oRAErS53iM5XDukCbpqfnWzpBYPDquNqB349GkapodsQW8kZoYhU",
  "key12": "ZAdScBWXCaFQhWnGvHnyNiheZ8ajKZi3AQvVVvBjhrpL4CsDvwqQqgxbMDFQ9b7RduJCk2kKsBt2T2RtUPcY8bH",
  "key13": "58jPu8sSGXKbH6eKXHXYYj2cZ1ccZKV8WQS74Kg1JzxR35JucqEpZh9ywLdf7zFYSSkgnLcc1qjSKMmm2ijHxSCD",
  "key14": "2VShcxPNU9ySfo9qeMRZZcwLeDqLmKb6wcWv1cGxNJU6Qx5FcWWnFMYRfRaeD4Zswa1fHjXqDCn31qTuoatzACp9",
  "key15": "2YCurs8h9iRW98xv2JDc6pjWJdmyABBX1NzTznwiBEPwTVCwFGM1MQZ29GhXzWgTEoyakMaWy8Z4banLfyYNAa1N",
  "key16": "2XLQLzi4z4XGrhMTb3X8KdE372ASFxhpqD8jCyeTvWNEFRy1SFeW2Quk6Zi7y3N264T9JLF498UdbZWPE9Ey1qLM",
  "key17": "zYsSgPN6hW9f98uUpQH85hB5NibNSZ236SKivXNESM7cKFuc9Fbiq51YcbikXHhaC4avdy9vvh4WZJVgefxFqyX",
  "key18": "2UddzYSxFTHWMHgx9cMZeGRsFRT1dKNjbeBKwkRTiRKDpaHFc2bK1S95Th61X8onx98oaViuyxFv1HR4H4fxUGFb",
  "key19": "ergR7G3neMuJfhsAcJpiTBWbDTHxBZNsq4YvcZmLdcA193Q2tL1PikvVM6vkvnyPvZz46H1prPTZtvWvC4TkKPW",
  "key20": "5qFtVVe2hB6yLTBy1dsvnXDKbjTQNc5tLyWeAa9LxHwdVUPSbvWpHtAeqxTUCXn41jGk3v7XskumFoPDRu8bqyrB",
  "key21": "3SjmTGN6ZYhTW9ZXj1bis7xxnsRdePYmygNcrhb5FwVErTNgXtZrziZ47mq3FJ23Do6MxbMaJKjCiNUGkgRcVC3n",
  "key22": "3EvBcWydYqKg4iXSedYv9YQPmc7orBE8bnfMZrwGL47Qtc9xjNZUBbjQPs5exykyiEWwL1mZnzyAA2QEpqggLJXQ",
  "key23": "Q1jeYbPPh5St26ipJRuCYSSFWeFvZXYHHYnGpKjaRxoWdM9uEUWnqnPhTfFXKnFnoyJubPRs4yJznes7Ur7a68P",
  "key24": "5EGpRYHjXoiFvgwFuHs9EMDgHVvHF8suXgsfNqPRfQrYxHHHxPTVcb7QK4wkMENp8xxRaw59sRv3KKy8Njo2Nd4i",
  "key25": "2LAdTSRF1XS4dJJ5YUfRfHDH7vhyxZAQUohh4JEDZwCCLBRsp1DkDuAzffMDQnS4hFhASDdqNTM2qeiaBBWrBYN",
  "key26": "5DXzaVLgSg1WyBZDmpbzPWGgAFv1reabS37Kw678MtcN43Btad7AeXMmm1pqjbwZNUyCLdEbVz78yL2uggnMqD8J",
  "key27": "5PTSw9kJ1VQ9x4XpNUepU1f3AJJqEQWthBeMEqCr7JeVxQL898fp4fWGxSum9oNYsybuziktndKw8hazMhGVhTLM",
  "key28": "3KqKq4TdDAk4xRS1xTrUyVsdcKRWDkH7AYxK2s5tdJU4mJQQUmtABkqfeQAx4xvmFdssU95wN1Qc8L8sZYenqu4p",
  "key29": "FyDCQeWpMFRRAuY2Pn15jQH9mn3E78HrAgcVdUD6Egm5LUMP1ZMsf7eXdB4Dk8xRzcKtZWbkJuoDj1yDgAMmj43",
  "key30": "43uuXG7txRYKwopNXhf8Mnfkn1fmz9rPeHQ8e17iQ4eoRGSDD7W4SjygJgAd551QNBQZgcP4hEr8yGV2ViWGqkvB",
  "key31": "5EhTZaPLiemVGN1sjYzxysud6sJRCedeRPRUq4bWUawJUio7SjCt6Mm5NJ2xa5YGAQxgL5N7ZTeKye5zjB491jXZ",
  "key32": "2xZZhxrH3BVAmHNwautAKU3bJZo8hedFYW1ukZh24gXsBNqx9CSsdHz1jQgGdaWXt3NPFuJLj8aEAkM9rXkyCzSw",
  "key33": "5f76RkeeP1skSVbL4wds7ZiWhvhoJAm75JNxCEjktwTxtygRd1HzzkLCCMvG87Tc9jEQTVppTygVvq1XnxF8vd3c",
  "key34": "2L64aUJqGjeKvXHp641ZGMz9CxhkY9TrXCn2dgfWXUYr2iWXCDpJKcFCG8Pu92yxWdrZZ4p5tYUrG2HPkhtrnoJW",
  "key35": "4esoBqGGqaEMN8sKNK5YLqDE13Un2fFsRxMErfEXdMcSvbuaYVJPhWZRXShBLW2Fs4rda6VhXQD9rqkjE7fH649G",
  "key36": "44iARDp8fvJZpjjj1vpoQcRSX47nQpfijoFU3paozPv1XSnG6VQUDcpF5YEQWMx9bKZAsvYjyG71wQw394kPiuVZ"
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
