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
    "5ntf5Tj47QXRaHhJ4ieBmTvm79bVqgmznrpFjDYDFhY1e5WfJpEUy54DReV2hmKgTDdMmhjTGm49YVbN6gwtSYUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnzuJFXUASJ4qBkYFsG2ViyqTqKpSmSmL9gXoFWKZM5hsWsaKcAXWUkZe6W46nMN9HfQLuPNATXdrYRHR9yiz2U",
  "key1": "eyowVvByK66uY5Uji6pDcW871rPpQDh6JydWpvE91LLDG16xCeGdB9G64UV79kzwmia5KfFYUZyvLZME3jrhY8o",
  "key2": "2ZS9eTmu7R3ZteEASu5v7Pb41K7qLEuDSz18mgbrnNq3i2LWnfoegveFPFQAhEKJnUKSENVJo3aXdF1Fof1yGSJV",
  "key3": "jwXzi1ZN6xKvgBvy1tmxcvQc8StuLgSVCHaskhmqNLQeJCQiq7Cob39i4bcBBv2DTtzcwX986ofCWgyqRgY9wc3",
  "key4": "2QJTt4hGSN7Ujhs1UNDC3FxgWjHqAGDj3SRvyenKpNUBYDMxqCjDbsLxdAttqidRdUWdaUTpXJNNnPMuc8Vgctzd",
  "key5": "KngQTQhJij1HP9ZkVjkp3ec8FC6sULDtvJSWcVjRasm9rPMBF3xANH46pHaUcdwYj786LYkfq7BKvaeBbAuYjPL",
  "key6": "2veiJECC3wnCUEV9hDdG8UNLvznRDoX7gae7dwXFJLK1jVCcsZjqMH1PXXy97c6ZW983UmvEpEHGinZayTBHuWSc",
  "key7": "66yP7uzyqgm1L8jnUnLwNuUMRryoesSoN8Hzj9Lbq9xjSkRHQQUtUZCPrUvN9kLJrcVLLfyW3yHGAf5jS282zHMu",
  "key8": "3ycCTeS79a3h5rp7zF4UAH97UaymwFkZ6fWY4xWabNTExnP8WTuDr7pgH9KSmwrTWb6RgdVwDHetD9ZcxUiPZkQD",
  "key9": "nTYqDToxaterqkfT8CY26VPEW3FDi8NtQ8madKEaH6jmE3xuMjhmBv37CN81F9iJPPqf5r544vG5tcmsPhYpfhF",
  "key10": "56TmMkDJcWjDHqYeJgHrxn9ZLESdS4J3drohoiDubzMgRoAAPudBZxJLfEBTabRuHihy9FPwiwLbi7AxBThMfQ13",
  "key11": "ebG3zF19eVUanKFFeYrxwbwgFZDm1NArETeX6QsGujHhY7woAbNRvX1jM6HszVp7viXcxWjnZ67C3MeJXCpumdc",
  "key12": "5LHGQii57RgG2BN1vmK5VVF6FfGcQuQnUzVkb7RZrSN11Y2Y4j1NrWYHdB9ADNZeJGKC28kdsYpYSnwM2RyQr2Sf",
  "key13": "tRFcpAayZa9UgDFaaxYnaY8rA1NhChBgpnKRDbyQgWuwujoPD6LyfPFTHcc4qdrrDg3iCwbCg2QvNTPgxfnfx9p",
  "key14": "4pqNoPsquAs5TGRKdEUTnuzXmaHQZai1uP5Vtg1sgenXktaUM748UgV9iveFn9yNKKgziUACGoN3frE5tVuNk9Gy",
  "key15": "27nVJPdQtB5C218nyqvaEHSUJEkQagS4rC5a2vptJVgbisc4dqVMNiemz83PhtvJtfeEpefssp3HFqmGeFVUQKiV",
  "key16": "3bafgteQvoUUPnbPGm2izbPwVRXaThfK3xzEGcpJETnTCzo4FBZLgaUr69yGMcantMe7axkcJHwEgCtxnXMU5jPi",
  "key17": "316C1mmejMBgLfiPmTBue3L5LJT49ec8RNhgeZ1qFBEK5fSuJ2iZasPPeBMJVGhxHobv1WWUhZeNfFJGVrS65yaH",
  "key18": "4xvFk4B7cB2rkK3RvYXno2htNrsmEkZkt24UbfUmFg7MpqJKYrH85UzwpKidbMPXV7huLKxcJaj65XoPwo16t7zM",
  "key19": "4dVjHECFrSXzpuJsRxENNS6uffA4hL6CyisSbpcQhazJXMKqCkXd4v7U7ptasHkmrgo4FskCXWEwkX2fJvBg5Lfu",
  "key20": "2iLEvTUPsRPmpF17rsoSGveKr2cdmA9ESDAwN1eyqBTgSSX6X9V2RVbm4FzJJpu22gwpNYVmqjDsDYVhnYpfS7qk",
  "key21": "4D68G1SJ6zNt5u3EUd3uR1co6nBRMEgEvJ3ebY4tvdNhBaiyoAd7C6MLaqvddo8SydZ9fSxasXZrQdZJLbQMfLEQ",
  "key22": "98EcdAmf4BNQZVe1xuYgcvjU9PvKrEZutZbcZwAmfPkp5VmKvbCsqGNh8ovQTPgJgsck5qYinfMMuwAgNkGdtDP",
  "key23": "2RUSgDueTeehYs8FmnU5PVwBdkTawinccsciShkrmHGz73e9wU34fhMsMaJjnDYqoHrrAyxB4b3Wp2pipoi2qYMk",
  "key24": "cYCFfNeQfNXyWyDaphVFRHYmjr7mDNSnS7haG1JPnuZVQTmamkKLNp9QnuuBEwK1G51Qc6vAaqgcng4KMs1BNR9",
  "key25": "H9SqS2wVmmton6YBM2vnapYTJA2zLHkVxCFY8Kc11r7EFFU5xkYNVjgid44sxcq5uW2pVcUuvk5zsQbZ8u6RLDM",
  "key26": "QHGy2h6ffQpTpYBF6kiv89PD1QFwFd8dqdq5UwYTbagc1jYmMZrZkpmPKfsmzwPXSxsVcC3c2GtbYeK6bUZnVza",
  "key27": "5JRK7pqHdEL7o3YYxNjc4NLSEZMF6xCcS8WEB3gmaa5X7eBh3yCeXmpCE2B84oyq4NQ2qsajoScURtevVqtBEH6t",
  "key28": "2GCZ3YfUd6h4CpJh8cyV7oNiPpTQ9QwxQA9f8H2HattrHotWVdpmW2AYEWUfGe8aJnVNQ4UmC2ojywQ9fmmv4thY"
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
