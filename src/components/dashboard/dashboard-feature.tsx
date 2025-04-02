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
    "3dvYnLH9wFy3NyXFLq5p79jdcdrcoKVYt5Ko7TaKsCPpdfg9ZaMihQgS7MHKTkKpfKcmggmJLk1V9K3D1drjjErC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QUs7wYYJ2oFL7K4K9uJoaZokhhkRDaEENSHzfkKPNQN1NaYz8LUhbTYBnyRwDTtQfqqa59qX8nUACcPqsn1UVR",
  "key1": "3BfAUAUa6JktUvVRKGrpoRxYwE5zUm6U5cXDGvzEZdPoeqSJ6ysjGGWPQFEModbifbMmYgnPJzf6be7R5XeJERgE",
  "key2": "SuEEwkgGQyrd9EkEzvAeteNKTZefSgfnAdWADLrqD3pQad5n9N93n1PQtnoZx68kkWTXWq2zbxHoiEs9JyWuYCd",
  "key3": "5NnvxTo5RpWXzTNxGzvR3vcVcsUiApHdyPWh71eSGpkaeE4Bj9wUwtRAPZMeYCNsypeQ5AY7CAbmJuAvJqQQ1rtp",
  "key4": "5BCnCgrtMoqhD7YwFhpXmg84AUpJxE4H1wCf1ZCTTubfV5JCKyKhsuvJ6C5wyd6suD85JmDznAtNDCMJxkkWXvpu",
  "key5": "wfZAoLZzvMkDm9FrPFHAXfpLRGzdptZmcs6AH1Pdbqr9DYBXjsf83iF7PqtXUQP8dAsZcSDhoPxvPAFHgSjdAxD",
  "key6": "KoDNtKsa6xRZDJGVsS6nAajRV4Wfaz426YELbKaWPjGk3fmDM6ybbm4rHYZCjoRLKFxrA5ihiErRuEZso6YsNRL",
  "key7": "2Ab8LKTzmfRMx2W5ohcPtZMTNXDj6unXvc4WwrceMk23D34yKjYCj9QjGwnKcukwJfrPeQJif4KhYvYyExZAReBm",
  "key8": "5Wcw4n3TXc1dACWAyrBkR8is4syT3zU8hrVcgYSh4g3pypqK6EvKd8qc9hDMDkWq7kmZYcLFnjXs3uYdxdzNS2Gs",
  "key9": "5GrACRoiswr9cqUBxC95hKSvTZZTT8hP66s1eViWbnw9qmMRdMtMBQr9RZq1T9ba8tvQczwJHeuxrhbvjiNb9KW4",
  "key10": "5FZSL2Hmh8p3QarDbNRUa7j96n89uVkdSXQx89r4UJzSi1Y6roeTHbwzg43JNXBKnzqgAPWzs16T2cxQ7fkM17Tx",
  "key11": "3R2FwvJFfmBpGJzLKDH7ej3mu4CX6RoyXkhwURoZirzcB594gHDjh8nU7Bt8gNFsM2TjKuSL1ssNVpZLzWjDYfzk",
  "key12": "4y2mJiJc38ELXke4TdrbXejtcMue4drgDewQmz64gHbZdHAdmGv9a8DhVLRHgF8VQkQDtY8fpRGCAwcY4uMx17qL",
  "key13": "31kVkmq9CcWnYDpVU3ixz6i4jS6vL4qFeC7h18cJS1mjDyEDN1UQkn9nwFdesM28R89npH3DKYsipPJP6JGn4kbi",
  "key14": "5rY3252mPKvu66aVeZoyzU1tiG6eGuyPsrbG5nbXA1mZrnHfZLdDde3m7QpbRWa8vvxWpdcLFArnxDbtE82NfjhZ",
  "key15": "3pNU9QxnnjQgRULxF23xAW4LhHJVjMJ8Yn8dwARCwUedFdZKCbR3JUjxKeaQrtQVapUhcCsLfbYSoSZ5zz1By417",
  "key16": "46EmyNbzqKCYiQwwTfFnRbpfMnnEi1Wr92QdqS1hQCgyZCbXi29REHQTNqgNvGbDoxC5iNrveyxjpH8kQ9ZLJcSg",
  "key17": "byyG7r8MKzDHVVXvRcoH2e8aT7zjBw7ipSUdjNukMdmF6PS39V7Da4c1JZBY5iZA6ShxHeECXXj4s1E4Q7K4MqX",
  "key18": "44AjAabM2ER3PVkZXhbD8ma7NbJ9oKoZoPNgmuNY97yKyXKFHQp9uMNBdJMvhkYvFxxir5F1kzCkm27ew3z6ktZj",
  "key19": "5jCwZaNFqtHaQYfBqzxrCbQDthjybtUkdcF3suUgND9Lptf232vcoQVimY38UYdADVq6QwQ3sg58wQ9n4R5DkWVD",
  "key20": "3De59b5dgTrYwgz22Zj217tDgxri6tJZxFbmEhk6p6UdiuU1N8Knxm9sW9ErKBRhZHWzHeJ2fwoxV2A6j6HN6rh9",
  "key21": "5uzXZqi4F988qqSu3DYKomYSZnk7oJLgCxwen1nJZqt8iAqkEvThPCL2bCFBzTHRkJ5fhMCx89YH8ppK3PbFxgFG",
  "key22": "UnuRnt71Qi9YjqG7iTa1wyyYwzCrWFuDXCXsMnVpa6U92n5DezB6CKH2U5PvqieSgh6u12zpH6no7kH2oQPF2F9",
  "key23": "4fdYUwXGfmBxGQjWoptAsamC6n5Bb2WPZGg3ZQNw8tWACdfKm3qPc5r45ETj4gAcSp1TRwHuTXookoMdGuiMsCN9",
  "key24": "4K9MPP9G1eaYEgt9e3iQbnAi3PkG33pE93ALZzCFxii64whwxuagK9AJrE2tqUGzonUG2fLdTf8ivGT3DfrJzkUV",
  "key25": "3KvG8C8iV7PLMozRDw2CjcH1gpn2pE5eQ9We76FQA7yE2wyAcFQwb7ZGdRRNpXjcfG5vmW5nGf23LbVuP1NnVjtu",
  "key26": "2NtDb3h3r7capdE3eA56d9Wkdfc2mEqYN17cV6qTNuKGC9Sgu435hekRpEqzkHyfxmHTVVWvP2DfY9v2w3AY13R6",
  "key27": "9zPKfaMPQLbbQ4u3VVk4pwu3kR34AE3asqcF3k4bnM8SWsTkYog5MC2Z5DsTiSfGvWuaUADZddsBPL954mfo3v8",
  "key28": "3PocjfpX5dpM8gXBpeWVGzhMBvJRBzvTiPsuMJxgaMqpCgw1P6dV5no9iKhzxu5BtmwMuF3BVhRTij1Je8ToyvjT",
  "key29": "2vaysS33gBeiWXSMtrjXf6M7XLzss5gq2i39oH658DFSxiBWYdoUpuBojY66JjwaGHp8udiScofDR8Z41Ruxca4x",
  "key30": "4sWw9Q5Fwx1zHbLjjtooRGZqBHQ8WrSW14DwA8q3RWDAq9qKvboUQZqwGffPkWHAhuNB1y4EjHqTTgGmHnsjsQ85",
  "key31": "56NhNfbFSKjDxYQ5tRgnJTSLRGRY9dkQ81CNqbZuxivRAgaUNyCnNeiabcieqjiz9KoV9e73C6aLiWyBae8smLqL",
  "key32": "cYSWX793bj7RRG1YP2f5q2Qds3D1Wz9kH2MGNkTHSjRWnKTGmxX6Huogf4iE7RfDiVttDT3dwvDbrTMJfRnfn3d",
  "key33": "4yNbGVUuho76yhq8XvBBDp7dED1CbtMpH6ACwHvhr9GVFtmP697gKH6LXQkvgGHcFn632SEC3SmvHFKqLv4vLnnD",
  "key34": "2RtWc7VpPaBC3ksSngJLqUhtCzQCamyaNqeg3WejnzgDHmCS9nkbWrTnV7ZsTrd8D9LTuyAr2eiseUW1jbo6Ms6g",
  "key35": "3XdHShUMJvvch1SztJwdiNw3uQ34KHQ8pgDhoLhuWMSqQp6T6btjeJvCWamz9qKYbQAmaNaCRXQtnJzMXC4L9Cr5",
  "key36": "4HH2HeyLwZ3nspXaYiTgYjtUt2VkuK2UVM8B7Y5D2vtvhMgbCgG4MFsnwB1G4w4Wy7nkDJBKwrqYNCAHBkPZ4Jt7",
  "key37": "2mUz9VsrBuFMP2pZBgDRAh8VUPkuuMJSUT4tHqyK5Fh2KdevGBkod9fXk9tkLS2eAxcRtatmiGovPRURm98oJ8L",
  "key38": "ErdwveciYdJUsiiwCC6qVFrwKTaV4QLpQ1Ev8UZ5R9YXhL47Mz84UF3gSy6yoNbR4pN8GcEP4HDadLDkLLWgiq5",
  "key39": "24D8VJBkNqcqGpy1XRbfXfQoyuM85WMWVy5oDvzK51h1MLpqcWDq9yVkXUKdZCruLdVfoxBFjCCxzoTLmoesgT2k",
  "key40": "3CKxig7TikZfXQyCj6ov1wKxN9WKr2xAhCQGMUbPxL1xTvSSmZ4nonem4EDkDRxG8XLpygDgemXqcJwCnYkMZuUU",
  "key41": "289Attb8dZycLdwgbrbUSUQ4Rfics2E4E9AuwCE8KEiHcJrvmWc3Gn9eTHQWjZam7XJeVLQ7P7gFXoLJqDUpSJvM"
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
