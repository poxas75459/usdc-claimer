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
    "2yseHyWSeHDEAY2Qu1XjxZm7yYqNVLzYNfBhHXFaa6JFR8Z8NQ57ivekY1E4jYoL9NXVou93eJeHTFUicXRmR4jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCvYxqcx1KNhT3VdgVaUstkq5aeYNcJQ1AscogoFaAZg23KDdEKPHCze6cQLWAudCL4p5iU3ZTyAbBHELkVbZyH",
  "key1": "4swTn6dsRoiF5PwUTn9pcy2drteiHJLBuwoT6pLoDnBJhHccVYeDGF7G6jkRAVsvdtivXhDvPWwKrSTHKaTQ7DFh",
  "key2": "232HGfcaZPUCmTE3mDY6EY4wUnsVq1BykXyxZ45sw8P5nYR16NsqMdmvmRuH7hxEFWgq1N2XhCsYuinUV4FfKkWX",
  "key3": "4z2vuuZ95GWvYCjuEEDWeUAxDiZeu1hPEmBzCtXNTvXoA4Fh8iTMd893LGbrEGfUDgncWSKSvcrHW13H1uMFTwMx",
  "key4": "U1FN7wnJ95Lc23kdKn1w1QoBfxV5cjEg6FSBuDFxYkhhYUbiMTP9Btr6SDsT8fAEoDdKTRAfYsd9tLxMBvVLY5r",
  "key5": "4QRSh45UYQQPfj9pDqvE78qSrNVwUStwrUxskeXe5HBfuMeaDALXbGonxEsB9NY6bntztNxGXsNvTsEcZPAkZ6wj",
  "key6": "kcreCKi9ZC1yty7CEvsAnX65Tfqg4E3SemXfUGirvLZThLwxkfFNBVEhDe1Ns3ytLSUVDu4ank5FXVgs4mTYNAf",
  "key7": "2RKowPKhqKfzd4y5CCeL3ZvCoiqNTpEKS2d1PjbXtCNPVAydHeGfE9x6PjViAc1F3px8ayZLKTZTrFzcLCYZytrM",
  "key8": "x1DmxxEET7S13ECCkPhj9R243VbaNyxuARFopJBcvWm6v7aeeiehSuVtvTRryNWdx9zeFh3cuDYuUKKBN15f818",
  "key9": "kmpkpkUvEaXzsedP4c5hQnP29AHs7tiqBe5jeqPriQs8Em8FaqnpV7Brc9yAYhUjjAPsqxUBqiKQ2jzartfQcYd",
  "key10": "4SnQPHQeDnjNoA1wHFXS9Fn5SVVf3QXHJ1daM5uJZS5FHF7aojQGhRAdWMMAbHXYvSPASLXGbG3soQEqPsB1XDcg",
  "key11": "3F3qKD5zxyMG2ijtPGKHvgRzJ4CyWXvB3eaWevspbjNesYz9kNhJRGh4kwGGrMe79E4GsYpHA7F8ns6TJHSgQunX",
  "key12": "45xLLcrxpCtiYuGwBo7hpAnwUVZbK4YBBJDU4rVxQZaxZzYJm9VV8oH5XdwZiwh7Q1n7oLc4umQVBumsXwpqTJp",
  "key13": "4xp4yjH3aH5pHYWzQGaW29X9UwabXeZiybkwMzx3ExzEt8T7Njrjg5TsRKPMCSehTNp3CEuxWAeroqq1toZiyMNH",
  "key14": "FzLrYdBFgFU96aeHTUY8cZFmLkmovzxkYj49uKqpv9HExbsoiqGxTBJUzEXZm3tchEvUZ2Vknf2Md99JPDwBTfT",
  "key15": "2sXYovByT3n26E361ieknSvtgN9ks5WC5pFRy5HXCBoLKVezwhMRwQPL1YPW7FG7KywkU3tsTg1LMrnpDMTpLVqN",
  "key16": "5HBfngDd3Raj5ACBLA5H84Dr1G8h4ExT6MHfaYTpymbk82t4EUDyeCW8sMztMhLuFwv8Pi1VRSvbY366PzBbJ6NW",
  "key17": "Rp8Pwe39D4yhMtJBbiK4MUfEYfz6igBUqQAUTJRjNuLpHcvnMrEM5b84ndvFJqEQ6WtV7YXGxBWpMGVLmseZAAr",
  "key18": "2wBryr8oruVfXBhpfhjeMFXLHxDwrnudWGFuQLA1eMJHkctNap7hmguyb1Bq6P69E5s4VTX6myUfL3whJFuMFkZN",
  "key19": "5H8jHxjAiSGVXJAeustZMux2Aro2tic912GZm9DTuC7HRtAXRRbTFqqvWtDujk7CgJ5ZpJv7TJL7qBbi8bx7nUc4",
  "key20": "2Jdn8w6pKuv1HBTFFLuRz7JYU6fzMooFLqZjzvAduWyg8KQSJhpgKPr779ALoxkh6Zo7wRhxxcL8QwSqovBHsFwb",
  "key21": "5hPEuDumaBJep4FGpQgq3c1MdXcWjsbSnvo4qqWXaFCJc96BQgro1Tq9AUAEjgHBb5WytKWn7Zcn4WwmYgt7Kc2s",
  "key22": "2oAG8U1xhD4Y754gTYhRMRnixPDife49cQM9X9Kagq2jBAVrGhEDy1S9sKtYFTNSZaqQTG2bugtS2vx814ZmQqdE",
  "key23": "a6aGTMZ6jJvQSgX2ygCXPygT8PohRF8Dyr7TKWhvatcuBfgGTPAHid5shhB7QR2FFLZn3E1qa43FKvN1gtNWbZ8",
  "key24": "RZgSbZSr4Xw3CqdKWCqw3ywvHMPXqgq8uhSLhUTRgyRbJb1LFrqNATFSe3bvCM229N1tQaT8MXr2vAZFYXC9UR5",
  "key25": "3F6Bd66EdC4sWxjE3ZGVEbYcxfEztDNpcahyR6rWg1MyzYUs3SbR3N7wcYRPMyVSYdAR654ezZx17t59hr97nJ8c",
  "key26": "3dy9uVCcKeq8jn8MamMeRRfsjisH7BrchrYxTpJtf5gh4xnPkM4SnGDBgZgFkkjUNC3t3du8rjfqu3EWnCc6e44C",
  "key27": "2j3h8MMg6zanB84xP9MYudNUsQaeCH5EbZG7fLed5UkTbkJy3qoHRzm844Yky56Xawkib5kwwY5M95GD2kAtFXvo"
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
