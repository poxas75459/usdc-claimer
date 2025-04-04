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
    "5K5SSwcJtHr5a7cyMDerrm8ohWo4XV8nrRuVdEiagbdWdqrBQ7yxX5LrdQ9LiZWEYAssaeRKAWwhqYSGkCg6RFma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3edc16Qn8UpR5TNFhDMoPX8M6Ldw489mDieo6CADvgUoRyj4z9nFcjHM9MqZ6hFmeNKhQEpiWicbyEy2FxVmiJdZ",
  "key1": "SBBmKwzYX73NVeKNo2uXq8awT6Lt99rvaLCnxovazZSkky3TWZbkYZbhbKEKr3zjSeSJGFg5EQqSGx3KPuFaGYn",
  "key2": "5Jgh2vYvqS85h5VWgyZ4funDUkRLcZkKmgzdssjFkQKRDxpoRTA9hPxn5tQ9iwRRZ7mVFUz7jEB2siP6iSxAxHQW",
  "key3": "DTVAiriNtJdDndcbKRe2XDY7bF2cJqQfqhnRCz2Wx2DLscVNjWiu1azEiz8KoSFcigQ4G54YtTEqxwmH9mB3Fuf",
  "key4": "qxHe51WJkgXzQJ3zVuFigk4yZdurpa8q55V1MUGRQU9Zm9A5Sa9NMPss9UuH9aVFNfGhKaBRvnLfWPbzrhbQuxR",
  "key5": "2T3DFcysoXqTanGrbFPWVNaUkpFk8fw1KrQzmh2GSNCiZE9psP3WaJiWXEtRqdEKxdnWRRFnED26wZNagJxZPFTA",
  "key6": "2hxaksWtpySK4KEJQP1EHJMQyuykc9QpbkVSMMQ7o1hJ45JH1ig3TK8Fk3EZDyWYgZ9aENsVa2LhLryhYbfSY5tL",
  "key7": "4RLxLkJKo1BYoNvFUrEGyVwnjmbrG31zhjGnCuDznQS1VGhVNpwdjv2kXXfQmXBQnpAV8g2BNK5qpUX91Hb6FDdJ",
  "key8": "4s6CKiu1WA8qKjvhj5fevzonzxe7W441L9gD2CJuyP6XWnn3Cmhmv7QuQxGBSWYpaByZ1bcBU4jzhsU6aWDLLDUf",
  "key9": "3sJrt1PyCx6QAiSD9DEHohtot65WhZXNUYUkEZNdYUV51sjpGCwsJSFfsJMwMmi2KHXAtwFwcjGrwHZHHejKtpRU",
  "key10": "2e2HQ9FE376DPtZK3MWq5e5Nf17rB7vtcMG5F1scVjhc4saAQx42yive7ZhjCJ6gpqbVycYvNeqivpTyMwvi7Sne",
  "key11": "4EvSSX1XH329ayo1TkXjbQ3thAwz9ERzkRwsWLT6bpKiRv5SqT1fVCjZkshHp2xRL24CMXshKmQBPz6N5EvQYWAw",
  "key12": "M2eiEt97TPT1UmsDBic1BhQhY331v8e1xNbGTjqMQvLME7JxzrRW3KWuCHVnFNFXXTprWY5v7Xv2j9ZkZcUJFig",
  "key13": "LCnU3oBwjcKKUXB6NDrwVXR5B4FzspeQqCvw7wT3UPhszs23ohVYWLhAdtzCFiHrWe837qh774HeoGmPizhQcJk",
  "key14": "46kiaG5V172QysJAFTUgoy8dwv3dFDwhigMRRyGJKhgBtSVVa6sznuiLp2Ydpor92rqAc9HyQFYejteYbdnYgHUp",
  "key15": "2chFZbL1fZGusA5se3UzjRizU2ZZwspmbTbtKCJZvfZBwD8vUEQL86LG86kNZdBVsMeQNpdL4vgdiSxPmJurRGAh",
  "key16": "2BKsMMexCp3nrmS3khcJCgeDE4V6TcswRq16RGVzwSdvXuLvrfBHBCSGp2DxKhBcxZBrJ393ED8T6wCBgsnFzDhn",
  "key17": "42JWdQa7ipKcgyDt95XkvHno7oTpk76inRJq9vKx6VnEQuPzRSf4CTfJXTK2w2gZzEtwL9276U5bLjNnVaEsZ5cf",
  "key18": "4Qx1sZnuX5EymmDrs93cfowAeeDCxySGhPBy8MzrcyLj4VCnm5CQ3JmQh4W1qQr4hQx2YrXfPxo57nUcihVahVFf",
  "key19": "5ikgzBEwMtNdZUMfQJ5o8ZBBEHQRNLVxnyRa87n8BspwLrJfvWsSwswZGjSPwVN6BSxkksRMNL4qn3S2v4h4fQ4K",
  "key20": "oujeMB1BDzkjM7TkeaJhHmDQnS9zn7L7wfAPSvangyrTbCvXLvZDEEToXNDwpwpxw2nqbhqLAPZhKswDS4PHexC",
  "key21": "5i687KPArYHC5XWLSd2s9Q4RiCcWhfQSL3JCUMkLRFVMbXVsUxAgsTEDMou8J2HSaJ1hjtUNSHzXCJSre5gsKe1p",
  "key22": "25BMQbgbWTxQGzV3mfy11DA73fosYB56qwRdeCC9PUBske1LLY3wN18XLLu9A6EsHbQPv9PCQGhVgBpSD7URvr9U",
  "key23": "5xnDWAgp8NfNAYpDUvKEwgWXEsaXSGrvtzxjmtnpgesW4quRBLcKn6sMLcGhnBqpr6wjeR96rqxbdjmkATwSFQ72",
  "key24": "EvM9KefLDsNhkEYadwA9us1nB8ZRofdonyMr2C22QmcbYSiwXqoX9GpFsLAx6UX6rqbcT5kTnvmKzY3CjstxfEM",
  "key25": "2n1VcSTQ2VEyvPbjvmwWpWSKpB7WmwTkmSGEpfq6bTa9ao6sepn8o2qyvdsiASXwmWhUCxe5TTvPPRjp5KNe9nmk"
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
