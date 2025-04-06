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
    "3hqPTommuieeAzo9hXboDgxoQkDJYjRWeckvG9A1FYZzfeN96SiGVCRZYK9nMbvCMjZMG9z6JGEHoynyriUf18Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZGxMsvpZbv4oZZaWUBR3aYgPrqeWQWZfGTg4ygiAvfNAJtgZfLCDqZC4fJUauf9mWaUqNMKraifakVKVNW5dzr",
  "key1": "2hzHHzShrBMXLBKcVjaNidJbZAwP84uA742uhjbd5ogiWWGJJpdo2opBjWonVrsr51NYyLdhLDGRHYMDoigMLECW",
  "key2": "4JBd8f13ns4HEsLoQZ6LjLeneosRR3EvXzApQJEkS3rpNNiGmDGRvfSUXRosDru67wqdVp1JPJ2vXNmjsRVStgEQ",
  "key3": "tWAqCyFdDuLYWpBPvjNCyZFRockxKhsepP8JRVA6XZzjtshhM27x9m8k8h466QYRirFhHQqqyibYTtiUGwBw1wJ",
  "key4": "25V3qVPVazekJ5HxQKVd2qZucbt8NNs5UgpJ358tMgiBUDqLQrq8T6XzrHqG6Gk4h4zvAke7pqUtuxatZXgn3uze",
  "key5": "4Ezi1EqwB2amDhyunM3LGjNudBMM7snJ5D2xBgzxFmScdNG7XcTLnY6X4PMV1tQtfekaga5NYvjtvag4F2RZuJUV",
  "key6": "5pwW93eHcMhaofyBY3B8KZMjAKBqXvuMicmTdQ6CRCMbZihe5RFQ8KvS9sjav8buu4ZgYxZZGiKtsxBdSFvSaAEr",
  "key7": "TeYGakySKaY1E4ov2WfR53K1c3eP1RwwDQcKVHw7n9cSyzc2Y9ayH3x51yAvJV2McbGVwJdUuwxk9BvU27RaG7b",
  "key8": "zSjrN2DkbsYfHpsfc2mFxt2bJ2pNWUELmapXNKvFw1NNmN2MxGniYuMwCasWAEF9nx5PoEScyavy4hGxg2QTDUX",
  "key9": "59g6grcAFPEEFu4JVEKHS4xuvetQxnEne2GKASpDEjincxVTrZiM6tY2iwKSpYJMEhoVqvyEPBk456uKsBUUbFhZ",
  "key10": "2yZfWCZkHG2VVzFu1iFYyNvxkTx3BNu9xRwvShTPiiVWDURkuuoytyzvPpwaYUCtWLHD5WAswjUexYDTSeZdbqpA",
  "key11": "5AbvpxKTTbTnZExMBULELN8kc33FQuAtWfQtgJnvqm1N1HLoUCRq5eMgjPupzufWvZbuvzngb6U6FWaF8vpRrrEN",
  "key12": "3rgKqda7LTtrGGKEb1bfsED4N1ZMHjX2dzTHxqqvmPkR2ZAsFb5H8vdTYPUg5W2VwWtS9dQz92Vqdd8KoPCdzGMx",
  "key13": "4AxiCFFqDgzNsGbaK1fkkenqnRFiqMhZdncGAyXHmbkNxZaN2t5UAFu4mfJn7ycJv1sbPJ1KAHSD3vHDjaf3B7f8",
  "key14": "HdwFe6ruto3jZ2UVBTr4Na7v3is2EDBkGGg6QZ2152m2bk2PZf67i63A6wPwRTGMbVTWdNdQUz9hZ1ziCmfjHd2",
  "key15": "3Z12KBipYkKVSMfRuDbTvfvTfWwN2EoYnfUQZGMwrHzjRZajPWHqPdLwAXggec8vDwn5JPbwcx8TmtbDWUPYe3xD",
  "key16": "3bKsXDBXmsq6MdViyzJsTH3jfbWnGbSz1KVJadBYoCEutmbZfS4CboJkCmTJzKjiFkb3K3jvUPwMp9SJKtVNruvJ",
  "key17": "3LmSqFJYmTGuAePiaQTTssKFBiyMPJB8oQra4gGNyykCKJUMrf4ABRmRrZyV9k72pyDYzx42JfZUKLxLhRUemxSY",
  "key18": "247JDzX2m98ouaxo3zS1qbnV3qUSdNW2oMs5FhCTur6cYvX2CxzPx6UJXMJ1KQqXdXEhXqYkNH68umiMbiVa7ikV",
  "key19": "49bxXBx58MzMvDsgHnR1Kd6BGcxZTm9Mi3L4bkaENJH4CJNEUDD7uCbJqgQYh83m1VwKPZfKz6J5uwqqvvYTEdJo",
  "key20": "2eEyxma1BoCLuBHExNfXjRgbjqzQth6jvbfytoNYzuMFxRMRj6SGjZvocTifpFduB3cggdgssajpuik15eGozamD",
  "key21": "2wBfgaqB3SEQPBxiA9mrskx37Y7rFbSpbZkEzkLd8Jzb41mdJsqjBKQHBdLakJvGJCiCKC1wVepCKza6NTu7pMcz",
  "key22": "DntSF6zs8PdS7HSELyRzsYWgpDfP7G2Xe5GJq4cG2jNZxUuzFyTSjMB4BNwzuGYzz75yWd1yvQJygybEW4mnisp",
  "key23": "8otrU6HkF87h4rZL99b5y6t86oGedQbxMFd4DpE8nMKn4ka8TRHGL73VWfL1cASTXTUzvbbt4y6H4skm195eL7L",
  "key24": "2WZF1LDCycXVaq9DMsm2jMdTfCA4yZUvhiqZ6NAgioCzge7E2K1crqZYh5wkPfxL7eNddcitnMkgYkjpTmyXyj5N",
  "key25": "236rnLQvPcvEXXCJ9VoDmjvSgfQ8VFybgWHt3XsMV5LFVJ761U7m5p7PicfF7cDENhGfkVtRX5QKcrcWEEes3Jrd",
  "key26": "5vQ96RqdCPejkFDHrnCwF4cDxp3VV3ZTacz784uWNzXNs7R4EPYmzoD974mkakqbubcoWDUcA4iBsmNUmXYSPW5M",
  "key27": "66k4LEu157q5xi6DysrFc4qEyYo17oEqWdYTzYhTqFZ1XudW1LtQwRVxqAKcaMj8g4UHz45VgWNSXKXrwn51gCru",
  "key28": "5NnvjrxKrd5WgPApzoniF2jNpNUHNXrdwNPEwoxxRJ799wacYUNW5SmoFGpQA8XYaCxiaNzz6Qyktdms9751YsLu",
  "key29": "65E94tYY7XWxBhgmTMmU7Jd7G9VTMkdiJEVUQMBRLMLRxr7Jx2gwtJ8TocrcFEWmmUF9ZYiixqsdZYVrRsviJKTk",
  "key30": "3Kzmidt3AwPvSqC6T5aAecexDLtUikgRt8iqtVnfRkzkG1k9QnSmZYCySEQasp8Tqy4bagaD7Zq9z79jpe67oytg",
  "key31": "47aiVoRbpTYXtPYt5wmmewjCNLv6qpz9TBUmxZfuKLM6fpzkz3cGtrASxjVTjpfKYBVLqnpaKdzyqjM2S2RVZGaP",
  "key32": "3E8RpMEw54jsUsdKmqR7f3MdZ3ZmtSUwuCTovTjfjwHE6WqDt8x9mFihr6e1gHJxRyQh8A3cJK4RWvwPqDwzGMrB",
  "key33": "5NedkVu1TaqRszY7edVBwDQ3uNYVx9tM5qaX7AL9wUYhh2HNdkrRcBeqcFobH3dErPc5v88BF4hB1umU4tN4gAtW",
  "key34": "3CmsUj8CqXAtXwA7da6ALiGhapkLDHwGoTZ4ACqXrJa2zTbM17HSJLGjGHomihtFpg5ard3HPWmCXzB4hj3et2XK",
  "key35": "4ifmmC2z4kFLJAi3cmtPJxp6cuQZwqpm6VbLPjqV1rdPiddwL1C7oBNjSFxTc5f1NqjWWkFs8DCZtJqQVGe3DfW9",
  "key36": "5BYnuPVcZQWsTLNfYU9ocsjz2bjALBkzz6fv1AnwvRp9HfNi7TrJZ9BfjDPE2CAPZdykP7dQKJHbCD4TGBQQcZhE"
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
