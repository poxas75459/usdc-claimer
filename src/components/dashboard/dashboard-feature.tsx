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
    "3x5YDibCGTnXGYmFs2339kKVo52oMgWfKi31yUJjVoYjGk3KSCi9Mcp4v8VnGmGkpqWyV4Wo4pka4iRi8ssQ2njd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkzgRWnPSjrxjaoEDLmTi97QdYXLs2UYfRfTin8az2odT5ZdGQzj7zyX3D6pDFgTwqN1P57s1rfBqtzz7yU2yHP",
  "key1": "4m6SL1kbKuYNT9yJANnc6YSXy2CqpAba6eZRL633F7fqGKeYGnt7pp1Ca6VnqHDLABcZSvR9kmmbaVpXpTqD8EW7",
  "key2": "61HCvjX6ksSMbfCji7RYfWQ3RdLd2J6DF31peMWmbxiBhk5TPy4NJsvJRDHbX9W9VgKJFVxBp3d6efTTTDPwmY3u",
  "key3": "2Lq9pTdi4EtZam6hjXVPcRdjRt9pe9L97PjC3FsoYxMY9YmBXoaYpZcBww9SjZJ6DuYmoPYdriC33CfmbutQfsqG",
  "key4": "P4UsXTmcce3RezqsKn1DPSogq9UJ7UaVyMh1WQ8bkqFuVXQZUpSPpVykU5f2rvLZQwuDXkHdQYX1tnP8meik7XC",
  "key5": "r2WusGZD4ty1MEsKY1eSS2HqpiSFDucWsY21D9ZK6Fp9oZMHjkxKzEVEJktEZq1oknGyzaob23fUB1m4HdTSAW9",
  "key6": "Xqmnb1NHNk17R2VUvX4kRxmWmVdRiTsatKdKRFbGTfVZke29vKZLgYSgKzWzqikr1cHVburjSUdyWQaUxYYewnA",
  "key7": "3drAZr4dvmT8mQgD3TiJNynfn7LfqyS5G7BaA1P7ugu22edDPAEd94d6Fr9mVBxC2zyk8C94iboPVABnmenYcZgA",
  "key8": "aCyARWGZY49vmnPzSpojgEmpWWbXseUHm4aKDFmwtFFcoJ8jcPGPaQauNEgUc6HFPbAZ1oWqVtRfDjvCmtmoY39",
  "key9": "34pZa2btQf64optut5dagvqSw58oYmPYqJZZBCrcVJHxfizn41iAvYUr4hYXbVcvmGe8iEh1afQJtkw1yLNJL6nx",
  "key10": "2h2wktKyL12wZSpQhtGZQYAF7ncJTzSDtpZMyLXKfahWQ5zJvYsjZGvmdvfTb5Mz4pzFEbB2TVgiswMeTVhzCP3M",
  "key11": "2DD1jdwjXYkra6xwwn1WnvCwg2Wr5RZ2MFinjW18mBwyCfDPDrGigttJK4KjYHku2exe3c2Ho1cxkEQ8jrTx84yg",
  "key12": "61UPBoVsRAArjAC5MDrSeUwpJtWdBMLi933spSSNKu6EYHg65CqXio4v79QWphgvH12GKXdWSSpneazDmLg9RcQV",
  "key13": "3SpbTFLyesXKui4uAwX7eZ5aY1DVWMXZgNwn5Ew8U6MPKDK5nHJRf884Eqwx4aGP4hTurc7r5AzJs5ELSVE78eyG",
  "key14": "JhjubX6qHjCkuog8zeNrCN5fPULCVe1xwVYkRZgD1cSq1SXSPTVsxGPnXWkNCJQFRcSBmZon1Tra9jP8N77rPo9",
  "key15": "oXcDxxAKwFWmfUGm4vKNQ1DUsZgiAKrF6uiHLDonCAEB8j6CP1vRtvfeypvsUW1CSJvL1ZaSAs4wBQhUjENB96B",
  "key16": "53GnZJLitwzdEH81hdYYQxxDwg1chce2gZrm94V2Eki6v6UBdDtUMczQEnsw6QwzmHFQWNnjxBwfT4DcQVMDrAdY",
  "key17": "2WcD1Q9q8QrPe7towFyxNDju6RYcWHoGRT9KsE4X1epRbARCeY8zq71enfmHfyaG4JDvJx4Qzs3QYQDnSHBMj14f",
  "key18": "5xzYPH97MvsdgGsgRqHN3ERfRT6of74oGBfQqpt7zu6CpiVPTVjXtZs4WsK8sAd9HLmkagb712nor2iXchRrnSQB",
  "key19": "4N7FA3dkmdC4cG9ap1kG9RJoeRUty16s5Tspxm37NjstAButcGbz7A4Lepxu5tXXekgZJHPXb7oNuYtTxT1oHRAN",
  "key20": "5tX1V8WGiq56cAFTbXFG8qDXwJWfHepECZ7rgiuJVedvaUZktrncUa3kihqFrHPiv4TUiKeiwU3wTxxfomP3ZqZm",
  "key21": "3z3fJtnkSFj8pBNV5Sm8dXQPi1maBchxvrCwe9k5C9Yx4h8BHBs9wM8ARfksTE1t2vksHB3zg4T9HcmzJhmdVECe",
  "key22": "5Dv9AbTFWMcyazkepPSq1B7LHMsAzn7ZiquqiaQ2iVBeSScxewyq7TVyPhAX62ywEgF3848nBYkzekR6E8iiUChH",
  "key23": "43pd3dkfEv8c8GKc4dJKccBTfUSxKxBW4PepMQcHQ7LVjRmfmeJdrAAYbBtBSRwWvrTUw753y3UPVWyMxvyjrRkR",
  "key24": "4sVVToqk1MChRtdNGALVc8kSoCe6rdYsYrmpYsRpRfDsvvAzXiZ5T5VZyVVf6qj8Rv1B4hQsDFeE7f3sPhVPMvxe",
  "key25": "2idxk52X5o8rT7wZxkMmrenpqKo7DTfhg1hhsc8qkxrMbvnbsNFncj38CbS8npFqts2jrUQqwwnwAxMUZxJxbWAu",
  "key26": "RtPkm82UtzLYEhBgsmNrrtTRqpgHkbVbja5tEkKnRV8GPQst9g8VK9tH5naSc4v4A6vsq2GTrF6LdbKDTGbC2hK",
  "key27": "4McXcmezTb6z2XL6k93votT4ZvXcZs7eqqHBsYajgmwAvrYyNfMFREfgsCuSsDMmNvDh2vpj4TsHNusa1pQa9hRL",
  "key28": "5P7Qi4SXSWTMBMdNbYpqriXqwqWjBQZonGt9uVLJwikHA4DoTRQrsNejetJkjUYdz6WR5rQqRvMzBKtsv9qW7Rk6",
  "key29": "417dJDDe4uHREKSdqWmNgZdL6mki5SNVMM2Gd2q5gmgP7HMMUQC8R5ALeXXC25Qwv5cKyPbQkWHdZXo5r3AF41VJ",
  "key30": "2KnrEZisMroTNwwZjLJhg93Zj6xS6iw3DxSmfSdM68VK9LdEx3yZThv8L8iH1GWqi5jb59HwUVvamaNRtdeHiAhw",
  "key31": "vtyLfjw95TjfU8vAL3BYgioD9K5fkLCfayCmQrXNB5jTgsBk1iAq9dbWhuxB28XoSfYRu5PBybnqTFKiSEf1gfo",
  "key32": "2VkUo7pMdwazFhHr7Xsa217KUNarv42ZXpWRRTYXDrEvT5Hvcyac2E22uohS9Q4oVQ8mQtWNsYBDyGCDnyJnZjnQ"
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
