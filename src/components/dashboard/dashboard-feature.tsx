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
    "5jJ1voEEDbSBnbaDB7fB94CmUvdqYQSh5XusumoT6ennFy1Y5JoHWYbvMuFpq5CbttMx9pZAmtT7pAxGMrMvjx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmipnXZGYK958bEhcL63Qp9Sh3ZqtK87uoLgHdRR35D8zYyAExLFsPeaeRBL3XonRb1ZnAdRDR2PLhCfXZur6Lh",
  "key1": "2MSSwzEXbjN2W9MGF8eTSZ2X3ZygnfTQxfzrWFXuwp8Aw1cwuahwFmFj297gtPZ5kCyFuMGrCqKapXEjeHHkacn",
  "key2": "3GbCYjHutQrDEs9xq31AqDAQoAxUJcv4SGqWknrhAiijN2hwSeyQfGQK9LTXYq47npSa7asPCtp2rQaaAP48A9Bs",
  "key3": "2VZGgGreTgt2DLmVqh3m7Cycqt9X3zC2BhBLcKvDWRtPuUkJ1PxCQ5U7arkyTfhM83NPL61p9bUBZKb4Fi1GKoM7",
  "key4": "5XTkGLGUgNSFdAD6svX7YksGqk8sqwur7GrXPNuikrATut5wzdQAuZCWm2cnwuySJye1vfw97p5P8rE7ERuApwSB",
  "key5": "65ZnchdVH67vvCg4wYWPrqsc5ocJdwd8HXSdU5XD63tKHSbeBPJ2ozzU163UgLvd2hN2KYoa3zRSgBmEesCDdhoL",
  "key6": "2xtyzV4L8Gysgh4csQmSqFUswcNqMDxKpSzhpsf1VocUfH69nbzA6FFtuY21yDYN7c2cCZVLWJJbiaW3qZNxwZsh",
  "key7": "4qttg4MVgym4PKLcCU98YxhXW6VhG5bZARsD82uxKp9eVRAXyeoitThhQDdNXkA9mLsrxbKvf72CpuSFZQB9E1bx",
  "key8": "5uXpAiAp79WbPmK73krXasirvxZLfCqQXvwXPzQxCbYjxYHkPQJCMQoYXYo9Lr4dYYNs85mvpEZHxJvhhczFuTnz",
  "key9": "2sHFdT2kYDXwsA2QpmG5yWkiuCTj2VwFB9ZKir79AnWMmBPG6hhEzNnirhikmzif73H9va64rQrqRiGTmVMj9HjS",
  "key10": "5MAvp1eYDRy9nG1XeUBduSBs4msWkmSMaLbkwUTqmDgy45iS6MyLxgai5E1sXSBHjYYoKnqPwG4TXzJeGEQ5B5bY",
  "key11": "5tyEVhmXiA4VcUbJ3pEc3k4UKy85BCJZKmq7ZhdhqN9ErPYJn7wAaBmRXQ4rWDpeRR79FTujsFKHFQ7xzXypDFqM",
  "key12": "36Z6zHudGbUcVgZFxB1RRNdekSAJZYYHzsQgx5GAyCpjzN97Abc2t6K1HmMafETV4MyquxTc1PVVv8M2CPHHn4ix",
  "key13": "51wmKF1cZMsBkFQkdTWmneYmXufidr72UZjkrdz6E2AcCNDonfCXqvripgLwUFsowTM2conNJKC1gDTao6XmfvUh",
  "key14": "fL7BTcJbocvdfyVUpAs3XYqzq2nCqqbw9Mhu7habNLw1tTgcsAUtfj3cgBUnnyGtP2UXAjtk7e2z4vc5oKW1ThR",
  "key15": "4zGFiGbvrNv2juuD3c44riyo5yqWC9cE2cHKj9G8VD4KicZWvqZ5kuTrXQBnLX2aRQdmCbPBEDW1LPXhfpk4JZaf",
  "key16": "2md2iiCK3ZHzGKomHwLQH5nVvj1CuqhDkSosNmHBbbo3MESxgboM8ypK8zZ2zynhwgpAbNaFKTMJ9fQDvghDoef3",
  "key17": "58LHXTmUXh6UGJQyeF6rWYoQJLsCvwoi372RHsTBYXX3crF182smBULezoAq8gVXan3YroMTf4T9ALqwanXWR2Rd",
  "key18": "5jq7RKa6dBLEazY5VQSjwsknvsGLgNdM3dCyR9YkzvJVqdDfaggQVjCbBt5qHoAa2fasBkKu3vWApNT4PfouZRUs",
  "key19": "48ppV945Ta6FAe82cP38ab7Ear9HK9PEfU96y6ddb8ngkPYy4YXNjL3TZ3HWPpkYdhsyty7tZRKBcY7eb7Ande8Z",
  "key20": "2AsJszQ4BtKKYmVe73E5W2k87ghHHKNp311ir8SWimCKo5Ah6g7Ev6LZHZCy7Eb3LmjTyzzTfWMiQgWkDjGtNuXJ",
  "key21": "5z4xHEzKXh3XztvApv8TESH23csLtPgcaE3Vsop3KPNHyDQLDHmCv6qmyx8rqxqLPhGEp2RQuGFwon7BkJBVMaD4",
  "key22": "4GnBdorDsHcaUyYJUQpbqQxar17fKhDMxyv4NRmCyyZHzkKy3R8AqDbz85fCpT2ZZxJcXbxmvZqL9FE1eQAc9ucw",
  "key23": "zCH2efzqdLwZKhJvRM44fRZe73aEhagcdkR2fLf89UuVxVfNZtMz4H6hYgRD5wKppXVN6zNsooGhtFJA7kjCZqY",
  "key24": "43caQFQj3Rc4Syock5vvaZNqF5Vz6EeYeqQ7g3QAxBMfFtKx5BTunadK4L1EhxLhs8EmeY8VRL35v3qca65oitD4",
  "key25": "5ZUXmq6CS9p8xLgsMSpcgFpf3bYHrw8Y4YQraSFLhwUKsr8sNvZo5iYfiEWG94M13krufshMm1agpmJZNpRxEMbi",
  "key26": "4svzYU7wXfsc4gbsvg3FBmatEm1bJ4T33Jyy5pL7jSNDerfVK9ZrKnkJB2VnFM2zb54UHx5kwuiFxNKpiAb5PbjB"
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
