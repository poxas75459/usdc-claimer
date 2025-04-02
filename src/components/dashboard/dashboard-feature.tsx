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
    "Rg1f3QtLXxSuMAHGwyz5D3Hw6go6hvnqwtmGcpV9PQWY9Uu8KQg3ayZ7AWXSAKow8ZvxmzA1dL5gCzdJaJnRs38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UsnEZXCHTFxudtH9MttMddzAChNAgMgQh7Dm7RxAsD7quWsmboChrGpJuysAzfAKYHawVLNLAot5W88QvTQNijf",
  "key1": "3hDkM738fu6ZstTaczwsc684aQvKp7NsFDz55TPDEV5FiDPvaZjH3kaWEF4KEyfTeGzdS84r6Fu9ZaqbRJiBHmxj",
  "key2": "3AadCaH4eFZ6CqWDn3uQ8h8KMfJHzotUvUTPMa6WEUSJnWxJkCzRNktJB7t72SJfcjqjwH1EwJvXv9Uw91SzwcB4",
  "key3": "4t7TDDb3eq7uRkTavqkjamRe29491MNFuBkv5JDkCaAJaxep6qgCm9SvBTTEKg4TaoFqhL94BQ55peHxYjcM9j6D",
  "key4": "3KNsDmgfpb6M8KQbTDyUSMsDA1hLQExRn5Y45FUcueEBnwQVEW8fUrVGsQ8TVPHg21Y3jGJrnkLoqeywCepsC8LG",
  "key5": "649vHNqEgP5jXeTEfpvvWVd44xC8HsQppu5fiFqwykLheKEn6eEprYjRx2NjnzTr4CFafRBzCEEFABxYARxLQ7TN",
  "key6": "2Fd2Y5XYZMwRsGqVUJwGSGgKmJQqMxhGqYu4CWs14RCRGk5buyuBpMpRvPbzzuR6xiLtReQLkRLxz5jmmaHL9cAs",
  "key7": "3toXDX5MvCS1zGnDvoDkYoZ4PHot6kEogeE1LjWACTyt2w7XGZg6rDps4x1r7yNceN8Vmm69VvSSzQSQAe3BbqM5",
  "key8": "4epkV3WwqSysfUeMnfY8J6m333Ni7MZwLegR6AUqPLTCxkoQ2jiKfj1mKrKwJp2vi8qGK7hJuUkeRd149DT7mfDE",
  "key9": "5Ld5bTbtYYfNcL4S8hXY73kw76g84ozLaebwc9AY1cg7SajFMYbiC34DhuPHqQwdSV7XGPpuGNWgb7i4qtAneJKX",
  "key10": "2AASeZaYLTKJvBNYNpi5Pg8rhNwQpEvDBy8Ywu1Nxqu5qMX7PsG2QdZxLMmKi8SYReziAfACAPEwDWNcpWixwJmx",
  "key11": "QgWgmnh7jpT8N3qagnZm25PyHTZzXapaJpWkQP8fWVNESAVQCUJUTCQpK4Z9wDCBKECCzxWuCVZz6QEZRsDNZkm",
  "key12": "NZzNAR22H25dZ3P2aJ1bouzpXYXPH43htYeuShifDdtjCDrdfw4GQ9naLGYaQbS9iU1QcBVorkK7ZNDJdtuNfo2",
  "key13": "58GFF2shR1YBv2huL3UGKTa88yvf96ZXH97U9yM3qrS2MbEVtueiU6BeociwKnkHNM2jpdPAZJKgDFrMUkPRMhC7",
  "key14": "54kvHopSMYqxkLPEk6w8tEzTcMKX4411tMyXJn2Sirk1SLWU1G3RS4RNTzjefLHPXCB9rahiv2R86aMhhEXbqZQh",
  "key15": "3xMxhriccWJzTrcevH7gZ8fPAkFPhdiLYXTPRcqfFi8dBdLmLN1z3FN1uBGJQqQcZyvHG1vmjvDgUFqH6wv9aaFZ",
  "key16": "2FnGxx76GTBz22JspG4tdiSSXwZ8zeStWxXbhgwNmT1tWb4aFzq2DJBGE9YzsqZgTiKCxFfNiEbparW2wyFWXswN",
  "key17": "27rnY6aXgM3mvUMLXivrdeX7JWdCx3F9mv1989CBf5ZZWa3RXUjPgaFTnFkEbss6JjFCa1K7yTyVqL49NdieukHd",
  "key18": "5P1Cy26FPCjaLmFSYmJ4CaQ2Y4C9xEVuNKnW2UkSH1gypz1roagTNzEccQiFxZ8ckzZeMhSgJS3wa3nzFAxyZcxk",
  "key19": "4NDKwV9TGtGyAW695JTpKo1RxCs8kSsnApa5CKV8xch7yodAR8c7CuWb3J4mQY5Ve5RvuF5GCiyL13kXxfQeARjd",
  "key20": "5JRd7Kut12C6BewRrCnFuNieSfu4QUCqmBR4ZrZe5VmKnkBTU59HxbP1UxbLSVDERW3SiiSxLZdiAYQrk3WzhYGG",
  "key21": "CPgL5sU1QpM38uGoiaSNvP3Ressw4hQ8UXX1buDJTev7qoqpAHY15jzDPDeR5wVU8EmvYcro3Tui1SfNMzfev63",
  "key22": "csBLWnPTLbJ3ZeHQiKs9ESUasG7jNtypSspoAScaUfjifpKy11HVPetcdj9CNwuJ62Khg9PXm9hAJwqQzuTDM3W",
  "key23": "5N4FHpS1wfUZc6Xg6wTMwvhsiM6wNSnor7PkM7jiUW8cZRrTjJ1ZTZytMdXZXoScpGkUJpXkB3zy6hWDcwEzKCTb",
  "key24": "33Eq8rnibyq7LXv7tKJpQe1PaJDgaMgcGWDK7oFqfpiQoVYHJjb3juKxAzKz7EG5bPoo7ihWq5TVqWn6GUQMZ3pN",
  "key25": "3ckzM7yjZjj8qbGsCb9LAnPPEsFZMcnn88SHbVYUvT2hrjFL1JPhxEV19osVV9YcVFZj4n4Gw8EgJyfyGStstJvX"
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
