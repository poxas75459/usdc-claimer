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
    "4cQk85bH4otpDaSDr3XsZTeemyFyCtjhoGeETXkCYBEJwQEBP8DwtnmYkB4ucdvv2zuAXychVAjRbHxdSLX61Jrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDshmfvq65VMSJktUf8JEVKddiHbLZxmZAUMJbaJKzJRrJMuKMXrMyW31FmpHAcwPuj1MsckXrqJRBDsmNqqH6p",
  "key1": "64umYCzMRYiWtBycaiRePiSwuqv3wJVmuR2FgYLgtw8WxT7aXL7WvGaXz4VhYKgK8ZT9Cufp4CNiBBDZE1GMvepo",
  "key2": "3o9DQotXRb6fXbZie55AJzpURESWcRFqvJeo45ZqtNWeJh4za5JPbRp1f5r8Xs6ykN6f8zaD7CCo4k4BZuQTd1zM",
  "key3": "4CvjR6W3PB95FiDvtUAL4n2KvoZas4GpUrdTm74m2AhNF5sSCa1mrATiQxB5yb3ZCvLLWJAAuujeDbxZQPmwBwvw",
  "key4": "4n9zG9ZALfkh5SkcHcNGYGoGY1843KjJTNV1kNT6YaVxgX1HvW3RkxnSGNtmKTPp74Y9vKZDKtUoKsBAL5Hh9BJ5",
  "key5": "2Gcn7N3P7xdxTdD8dYUCZnegGCcNCjSWZfmZTh1DSd7Sb2AVesqP2jo9jV2eUk1bLzCcGozaXq6SB67m8CokhE3c",
  "key6": "Cbkk4dAszg6FkTEyv94hxrJ77qEitULiQ1jmsnNvxzS76q41UvPbPfM4rsuxaWBS3uNd5PgH4upSXKtSuu6bgmi",
  "key7": "65SXKnhNGDU7bBYt81Dit8ATiu6Pc1L3EEMqs4QDzLEeQtdfkkWd6raXDozsSiPjpMVp1Jn9ros97iCV8iz1VEAf",
  "key8": "3fBvrpMRxZmKSKadrqKx9zEKHVKoZfu3duZjwLpkBMB53b9LGxx3YtzGLCpme9ZxSk3fH1xoBNbCwi7fUUD2RDrP",
  "key9": "4V3W67gxhqwW2coSsCQAHyiCKrh199tpTLhVMXUgcSeXJt8BFLb6NoT8qsSW1xn1gtBT3ixoJXXkK1uvQPoQtqXx",
  "key10": "3WaRpp8aSsM7jhG4jHsYYYv1yQ8DybBDHGMHdCAm23jasbupYLh2MWVsYhSxt1e36zb1tiyTtmmhZg5xGi4P5nRc",
  "key11": "5uKv7u8Szg7cqcRjgaLLKSXti2kBLVovtao3h96rCj23few1hoGVBSZUxhAiQRHXBVdmnzu2qYywfRwYwyaFzDU2",
  "key12": "3gJBx5JoLYxFL8m7Nsoo7UVtSViezXdvRHWZWNjdC1gMpbADFBNT2ykbQ36D1epZAi2XTTnm1VpJF48ysHY6uAHv",
  "key13": "2JXQmGZTv7jCYHPHrAJ34sASxGfNUmN1CBL3kpg3LkGWHSmvLCGUh5TmUFFMbJHjchWwsr2x9xnDGweoKFgu4wG5",
  "key14": "63sPwuwehqRPa4hpaPfo3XuwGhZcHKcZgGrX1FGhn7P1epXb85Hc5AGSLHAsuBxQxzSZLdBaG4cXX65HZnsbhtjz",
  "key15": "47wT5XgJZqszwRiS5UJEzPsjL4BNNDHrhPV4DHq9q6jsdaNQ5sqWBWcJJVyrJab9nTTmvjwZzapHqHQyFuaZU8j7",
  "key16": "4VF4WRPWicXFyJ3or3434JPWwzeVcJjRrcRF1YNBbdSvsfDw2cEvmE6AXMBbjJ3ZhbMRidhurpzKSewsf7L94jiA",
  "key17": "2HCp6k9uqETNs6KyhX52UTwt1nSkPqb5hHHmUq78orjmJFRXq4BYczYgTcEfFhozB39EKo8n7GzgEZXyuzaitdjb",
  "key18": "4QKZ4cWrg6Eiy3ESXnbZdFkMeb3DQFoaFE1WyQfvXXFmUZ4E4hbYajr26okZnYBXXTVbPwkkqb6DB2qQeQDVzrho",
  "key19": "5KskZMmRtB3eHejoZpCyrVhteiXuxKxaxRBtG9Qz3Uyjbo3fjPVkvKkphS5MsrHVVqUVZrc49cidcvcCv3bzAnvM",
  "key20": "Fzm3vAuM73qAgXekRo6htSMeNj9VmBBCjmjWYFA1NDJn1Buz46GgivSRWB8NCBkb41cQPracDnHehNKfZpWFK9i",
  "key21": "2VXPjRU4TpedraTfcgMHqDRK1JSukrrxnZF9opsSpVH75J1kDgvCwpMQUVrBaEZPZN491VDbC6kdv9P6M9UsVvSp",
  "key22": "2KMepeLwiVVkyUtFCvPjKK5nDVChpho8AZG2oWmBvUJAMZ2MJ8GNJLD5JfDf51Jio5ehNwBYFKcwDgtbjB2HEcK6",
  "key23": "22DE4DEsEZcFeq1xV6MJfFi68oQXBRYq29Q9qbPMhBees35UxjRZg9nv4YnfEkMMDMgUJmK1W9VY11E28VoSfwmA",
  "key24": "2jvCrifLdLEuQ2MNnkzD27aztnX4aGZ6LjoojCHug847ckiM1GU9UWBWQLzQwbqzx9L7P1MWmWpLDcReefaboahs",
  "key25": "5T8WW7uVxh7UjEdt62ZNkRDBZYUdBVmXVkNPcJMQqZ2NN3A2TNPMkE4xgg7Xz3HdAGbtFH5GXV97DCSJLfGJWk8L",
  "key26": "3BkYJJU7XuhcSxkKv2pzgs45T6dqCKQJyHaeacixhX3cBoWuVPMguwB6sxK6xfnjoJFgTYBqzuQgex2mEBokD2ZC",
  "key27": "2myDkLderzvgLjTCvR56tk8BmVdSUmpH79JQfww33ht5mLHNUqKv3uUqJ6SCQ8qzFkGb5E8bissA8weAtbHKeLW7",
  "key28": "31XQy5AF8sYtgALLyCwN4xS6d1BirNrgbfeWsVTF8qCe2Lm2xUJwLWr2BHJSAKGBongwmw3waBVmek13DkVk8Tm2",
  "key29": "2qtHZMwx1AL27dXecQ4wc8qKVwLTxktdjDcqTAzxCemvpapL1CWxxMPqW7GhQaoqij4m6VjFXJtgY4SxZMxaopZk",
  "key30": "4g1s4yv59mNESvAtwra3UKRp8UBT8JYeeMChv5z4JTTyAUXPU7aos2Txf71CJLDqiQ1XTNuVWYzq5WNmXFxUd4nz",
  "key31": "32aEskEJEPZVYYRQVLESv3U55zSD29EwjugZiF6PXZ9hMw8gVjmVhdF2W16EGT8gMuuLPzFSqTi5cX7Vgd44Qj5v",
  "key32": "32LLK5ahEgd8fHH8meHfYNyzRB1vo4kB26Xr8Zn1HNQ8NpSRrubfm2JWcZwhQPhYE3so7urBPp2SJTDZKWsk1bXr",
  "key33": "67M2mA4oyWveXH9vLSvHVk2ec1e7k64MxBchaeAmKS8unf6ApBZZjNDdTwCUvfB2WKTtaFXvqgAQ9kUzWiqygo6G",
  "key34": "4aLLXD6zYRM6nbmoJKniLUwW7PZty9HVgjpTVyNgbF6aWfHicW3SAb3f2WZ9euTFsuCw3LXs5muF3HrKbAnK2cTB"
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
