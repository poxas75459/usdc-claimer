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
    "3Hx4CmzaT4GebK8r8xqxcSHa7Q216V7D4pN4phFQjDFLpANDLNjT8cuXe1R1mb9bdvTQcWhRgaemmp5rX78e77Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ce4T9vj1NsoR18kp7vobsUJgUYN6fXpa2sGLJsJN3pUFUd4jcNA2o7t8BZsZLbC9cN6SgkdDCsyd2Uo7nwWU5M7",
  "key1": "3bcg1WhdYcLCjxHYBBR5BraxT2unJvCFwdhxZZ92kKz7RPz3dBWsb4TxpMhC9AgMEFz3quXhbAFwVeyN9QTHE3tq",
  "key2": "55beg3BQBLe5x6oMA33pUhKuxHvVKBxN8MsvAmnc2VCQYtMNBQDUpXSgRGoFupAawwEezoEZBLWg3GuM1UaYc2vD",
  "key3": "5BWcfwTpkhSKGdQqa8pjrnW1gLKw4Yd1LvpjSbkBmxxW76gbmub9AobYHW42SfCNh9uBgpVnG3hXPb5TrhBwcTcY",
  "key4": "4rwe3WNYJ3EqRDJywCkwJT1hc6eRALGJm2xwFpXGkSQtrSiRKWV5WU4NcKe1Gv7jdUwx7nBweVQ6v4TND5B1Udaw",
  "key5": "2HbSSg8SRqHUyUzrvspQ6brkgGbK4m7XLtuL5q88zMQP3p5ALZbrBkQriznNjp4DeHDYdjVVVePNdSGnCvpSqRw7",
  "key6": "2FwZLEV5QdUvZjyc83diN2Txvh8epoBjFuR6CXMUSupY1wpj7s7dRy7KXpv4k7VJyqYigcfBdf79jiwC899CXC8S",
  "key7": "GxfiVxjrXSvxoxXeJijPvvf554egMFg8XpyMdkNqrrTXJfz97Gz6hgJi7sMwcemnVre99bZP5MxT1Pde5BudSEj",
  "key8": "5QvofKjcSKPLUH6T5JqHAvVcXrXez6Gu27CeWHSxLmDiogNewHtbfeRgSw7o7acE9QuAtBfbWD6uiALAnYTJsREw",
  "key9": "2aCJ1mZsAg85w78fgBsgDGCKjoMXSKiCgVi1Nn5stg5XFnEQbvjYMV52gNTfdaDK1t6dRbpv7DPFWFs2LbmAkL2Y",
  "key10": "3EQsaThaXQ3gZSiexKaAvRY93uNKXLYdtXDzVd1ijLNGkPRkUBp7ETkXbuumbVrywF5FsfqQvn86Q4GyEGaGqS87",
  "key11": "2B7QAGcf349omLb4oXjQfTpjkAivrknNKcYm3XZxzBqTG8qU2SJ4sUJCfut5NPwxadGgra4kPQ2DrqgUDzdJELtf",
  "key12": "4oWzcs1zsKhdCzN9uXuYXQPN2AYcz5Yux8ufDuMirut1XZSsqr6W6KPJbUnZmbLd8er8BbFtzMUxho2vaj2Uqk2B",
  "key13": "56c5QKmqFuTJTFgm25po9Gyhqnaccni1hjGjZT7Pq3rQnZKEgtVYvbayKg2NrdkFrn65PynyZgvXnvEZoSpsVYR3",
  "key14": "5oF5hMfvTa6ymjhGfxtNeG47csE7bZBtEzy5KQACYNFCx4ysTzuAp6E6B2dmS8Kigc98AHtP8SsWHhYdmanxqdHk",
  "key15": "4d7fjWc1mS8TWzJ7wzdCR1Lbgn2gS8L5imBJdZRC1tZ693fbEXE1H96hoVBapHkbnnMe1HpiTwE6Kj8MUnDxMUHv",
  "key16": "2z6DQJRmvRZqgR91sZXiABBuuAnN9JHm3sq6jyQAvArCKFaVQM4jhdXjiT52Xyo9EvbdR8RBQcyakyD4nhFo9vPs",
  "key17": "39zP7dUxfErogVgSjNdGsGMK7PVFJWDzfX21tdHvukc6tSFxtxts9uX1GU1C24bxRj1tkCbGtwW5fETGvV1kyrtA",
  "key18": "2Q71GcpWfGEadvoLE6LVV8atcLXqyvoFv3kwAfDdUbTqAwYbkchmGAYbVgRdVQQJWx1c3TtDh5CMpckQ9C8qVSPP",
  "key19": "3t6r1neYbSyudRbJh9VGXG5nogbbZMrLMs56pitV9jDLygo5FdNoh9Ggj8jyKhTsW9BU8qkduEiDo4EmhFhXbEGc",
  "key20": "4i3GgU5nqv2jjE9uHxRC8y1bsRejStYczxP7t6rH9Fc6VuhCUaSQ3Kr3nxYc85BAEmEhorLmi1xA5dXiwtJnTnYA",
  "key21": "TTRhgBo5rjMv3h8XGbDKcaCtUb5Q7N1fD3mccWRMCNfdNbH5qgrZ7hk5nrJVcGUftJRNqmRBhyxfH3KY8qq1ZaN",
  "key22": "uSEsPmU9WxZStEB6HEfCPANUs9h7EF7F5kxCvRqRQwE4YCkxrCf1nqaYq1GK1zH6HBbFd9a1K5WoR9RFHrpWbhB",
  "key23": "taGJyDJorARkQGksBLkfeRFoZEhfjwLBvgsd3ZX7uo8AGcYDuH7nF3DfbijwNtUXpyhxmJvX8aNpYx7w7ytVh85",
  "key24": "53A24CdGwgdM3cv8XeaEYH7pMgEkAsaew787usB7ygL4jCtuyoE7jwkspxqZocWTQmwFrVRdfZ5yUqxAkhyiGH8c",
  "key25": "5wt7iLNBNKexa1tKz8DPVVjr4UyYDcezKxz5tgj9rBcv6cyRYsXiixVMEPQLsw6QqWFButVwddVT8HqZ9a2iQTej",
  "key26": "4aaBAj5MTPWqgQckqsENcK2CZxUUgA3dcwyYN8ns4zAqRrVSDuvUd8XkJxq3eXTWHPbG1pBCVW42KbLhNACVUp1q",
  "key27": "5hB8aGoFYuR2rAza39RLeFD1scRCFHc662qAmF4drbGw3aKK9dRuaPvZqMnrv7GCe1J6a6NoGcEVfSndTMx2qeZi",
  "key28": "5E8Kbd5Z5MRhrMgS1CG1EynMWnFf99tbYzMYNeGZHWQJ2KBHsyPwhtykzroH9esEqpQVtwasHseufegCUbdnkMg1",
  "key29": "4aXGDKZJnVujheVTTRNZmEs4TjWVuHGySw88i5ecWbLm8tWsvevRDoPVd41NZDjHpttf7Aw5nigsea8P7AcDc3FE",
  "key30": "4YyxhDR9tTqzVnNhQfhdDp4vDP2XZqHsLdAoP9RYCFHeFdv3zzLkdWQmLQXbWRkpahvHuY3fMoz56qViTaUpRqiQ",
  "key31": "zG2CNZFhEE6dz2My8LGUkB4kbMP7TyWSwVVPMyW2agoUD9gHVD64eU1ptbLm5dnUM9kHKeitcivqsAAUyaXci7K",
  "key32": "6APEobBLtWAYHyrN5sYowqUiMSBStzxm5SiAEAJ6nzwiLXT92pgreciM1BZdnGjfyKTwfhvNfRb1RSXzWRUFZP5"
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
