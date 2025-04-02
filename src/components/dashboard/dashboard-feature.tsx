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
    "4dB2FTcUL5dCCwHxWXekkg11dXWfNXgdEtBVpGuSQkgo432kSkmAjf7mSzqYdZo4mmDnZFmccxzcQUL1Qth82Av3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mfNCoJj266cndwLgBF3xRMcgTwbDuWiEFxmYApY9WwK9kgKtC6dM2dAaCvfqq5MNrSk8nn3m7RZxfL7uedbQb4",
  "key1": "24tfjKWf685XPD9s8dqhmy1wvehA61N3bWwpb8o2QiL4gtjdshBaPvP4tymxX55bx5t7wMRVvHhm6sPYaPwwEYL1",
  "key2": "3JiG6ikJMoL1YQSsjur5UFQE4wDa2FDeVBk35B6ReuN5BPyRFApBYfEM6jvu2YoKQnykMMvaSyPgtQPjEepUrKUn",
  "key3": "3xBf33MQmJ3BYMsMj9MNmr4mwBzmmrcpJ8Ae56bRcPcS8aKQgmdJJfetzLX24ZubFZ9ohrgCY4DeGKgkdUsXVAQF",
  "key4": "4VrPEue7tUzGYbz6F1hu1DU5FRX7XL4zsVLSgoU9GyhdsJATxxmUqpNpHgoNzXCAQ6UKDYFe9JbD3BZP1yQv81i4",
  "key5": "2QRzz7oasNLDbMJKatWmsMJH4XnLsjEkSaenFXWRrB338yQfgJo8gvhAt92oLAoiGq3WXdVb2chtPwPbkti52TL2",
  "key6": "riLxJQYd7pn6eK6S57FKHptXEGSqoFxZjQNDxrWDVWTHeXJTqpYsR1VxMczketoeJ9jdSzzBJ85NgcLnubkVbh2",
  "key7": "7iVVYTsrWUfai6dyfR7UpsKzvcqyYvi5wghQBuaYpUvE2Mp6nWevtrV5x1h7JtYu56D7sowtyDa5so3PMSHJVuE",
  "key8": "3dioDLnQ13etrDunKrktJLadufdcAfGgBYGX9MhotZuEiUz23in9Shqz4Y5wSM9voNqZS8kFH4thoLDLxE3uE6Yy",
  "key9": "3Pn8sqh3bTP8A6xTWippEL8UVqfxUNbuiMquJYCyuavfMACcrnTN2rJRW7rRic1aWaxZ9y4CEcAti7NtBpKtxH1g",
  "key10": "3qqyeAHo9Xn441p5V6uNd9kPFhSJwjFy1B4Axu9m9PQwuR2gCinHSV68eukCUqfHqTQnwnFzBD1wDUoY6jXeoy8u",
  "key11": "5gGCUbMvMfBkx1QwvXJYGAy3GuHHAgZYmEFYCpfn47gwQwGyhZNKdhFQAab9WBYFoVaNjwXPANszUstMwVrtTj4u",
  "key12": "3VW47T3z4TXpGo4UgWAH7aSys61b1ed8tvhYptjzYeRjkQmr2X9XjV2cfr99pqcX9PZjHZMjWDWaY8sDseRQf9Qr",
  "key13": "4UmwtCkdftKoxhE5GH6jQHpfFPVujj56LTes1nj8Hd4zBuUb77Nv8fhSDABxt6J3juiWAUyR58VriJWDneSnkm3e",
  "key14": "62awtb5NwB96Lk17cdqbaxAE1gfi4JuhBA86Z7qEejAYuUTHuAbdYYfUi1QnJhAGQuAVo8w7E4a5FmoXzhrbzWH",
  "key15": "JmWU42JQqRR4aba4dXxvHKjn4JoeDud3FkKGrWEmeeTTpnhwywjfrb7NZesTriPUxVSAgn4TpvycxdnjbKLcocN",
  "key16": "3hnyH7fHUaQPN9rBQcaonwg72yF59fyQAvcSV9REFVNkjib2FW23qzjR1DAMFUrwjHZ5bPoqKeU7k89xjLGLWxZB",
  "key17": "4PhRzurghfDifhB3cMrGc8CS8gFkKLBs796fUxEhAq2psygjEVBvGZXzuE5FpLi9pMoe9RRgGigFs6uJy7BMRmEZ",
  "key18": "5qSafPQ1t4HSgStA1gRcEgqZjbE3oqvjGXNtqJvJp7tZxZGrTUN9VMNQ7bzQACapTxS6DpuiMVueCps3jPFtGeey",
  "key19": "2fSscq8QZKSrfkofkYYAZFCwB1CveoWzLc3Nhpt23YFgLSxXaTSk9hbWN8yKHCkVi9uWmTZ7aqNrejMUnqrW5GXe",
  "key20": "4znFowBLsVVUyj4FyuWrF3ttik46qeRBUzdLucLJstZTWCB5oASQSYhjFPxk86cakQu4eZZiu9SSPjQdUPz73nxD",
  "key21": "3yyUJmwXA1ojmDBmrbr1N8nfBKzjki7mt6UPLRD8PrskaDbN8zR5pq2m8dtQuxzoopd8GPSX1n6nAn46mLC3fE2v",
  "key22": "497r8C8rLDMiXADBGiTse7JkvbeVqmei8e1NmPJPTZNgBDAupAhcJuRyXUsdAhz1d1PajghhVSknR4foggxMDVmG",
  "key23": "3MfM2Sj4HQcsYeKcqT9PKxULu9e5AacNYtyXZMTvCXAmXZBvnmhKY4vLeRnjBWxkeQceMNq6mTrcR2JhwVPsgCHU",
  "key24": "4MAr5Nr1e2AJFcjLL7SxsAZ3tD5Eie6ZVwVXAJDLJFxjF9RiL8Pk6zGseBARxJDPBPAJbashXRf48ixgB7FHDBAR",
  "key25": "27P72KCnvmEZ3csy96coyvS4uy4Ji4oM7PMtJpRGKNZNGEPbT4K22zY6Ufu1bmZ4G72PyctbmHjWmXmNVY1xAjQm",
  "key26": "3nXJA8DDDT1sLk2NvyTiWE2fVp3Zp4RVAoSkMGudiAmNg1ER9Y84ZdysiMQ5a4zoLtFMusoS8Kb4SYJ83iEwPbG7",
  "key27": "34m3fwK4mdWf48B72UDYCFpnbEGqyP64qz2augqTd8UfSS9eZUMSQgt9HjgPSdNpN2TT5WtL4ZMVis1BYX63TvNZ",
  "key28": "3WTyKWoWQXMdUTdkYuA1qnwodvxbjkXqkYUR7Q4NeZPzcYfpetjvAtpbjde6hdTk5AEQ8xd1C4NVNvGNoQypCyF",
  "key29": "3acu9evTiJAqLq5Wsz7nP1SC7Hx53pJzQeYWafv5ZiHgxK5aPsQGUu3tGs5r11oEB6C6deqdZChG2JpxjvEY4zsm",
  "key30": "5jXHNk3Mnnxb61PKwWobRi4CvQUKnideAijVBRtLNkrSUqmwWcVwomf6g2ZctgeUc3ZibuFefzWuGwe8LL5bzCbG"
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
