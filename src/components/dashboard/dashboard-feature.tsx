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
    "2hCxPd9vmAYeu72KRGpEfNUN5kL4uPZvLDBmqQhQ4C5qkqbiW3rPhTeNJmda1CwDe1acTGXPmgxSdn4cWaioZDwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLcLHiH6468YQCbCaVM9G5T7yn61HJFTV4kCFABZiJpVauNFPCZSAPMgxJJu7oBkFaWCxsB3pGQCbEqaMLadqhv",
  "key1": "soEtUfj7Nyk2r2QjtcLLH7abdtKHcgqny3kfrgAD53zQ8G71EnDBb4XnNdSXyDnLrcJ8eNT5h7uf7qk4kc9AtgS",
  "key2": "2G7BCyr3zzErS4CyDmKXAXyUFMpxqEa8ZqDAkJbDjpk4cfE5Hqeoe2fVVEEmna4pEzYRjbrq8utUj4TmYz1c1VNr",
  "key3": "2AXVC1r8Ket7XGLWgETNTKWqarCvVr4eebo1dcTg8d2hQ964vZXbeQbS7eVPoNAc7EbHwS7mBj7PAyLCywh1jthL",
  "key4": "2USdanc5zwgdAYd46MEAZi8eg417GZXkUjHUjkLXVbRX6gpTQ7jCWAHLPucBLAvWfewGRzDqU2poo7s2LRY5cos6",
  "key5": "5vAGiqBjqJXLeDzZa37xkcP2yWU6EnqZ5cTfUG1BPJwPQxXAZcLTyF5xbRX6F2CtY6x85LSFjFE9Dyah1P6CHxEw",
  "key6": "c5Su7eBDjU3vVS3W2s234VnBbYNvX5H87m4eUTtgayq7fRm7ChcuqkjzS9GFsqDhTk2B1ggM3Y5FgbHrFxj6x5Y",
  "key7": "JZpQ57L5A9Xu1M3sH6zUm6fztzgbCBws7zgo3vNPETbfTS6VmwLSm37p8iSgyLYcSWLKnaTNayGEpHk7foPbDNW",
  "key8": "zr2W7oLH29kf3mEV4XjVGgsAW97w53jk1GMgoiegFf49Z9jen5CQuhNQNhQe6k6vhy8ETGmhLfU16VK3X4PZ4i8",
  "key9": "5Y1JVcHV2a2DL7ootnDqYE9wH3NbJ5iRzrSFxEQdxLEzYEG3z1itPdBtg4jTERqjsPAAep9P6jxWL14TZsyoA3Ro",
  "key10": "65NK4gd76iqmP45GMg7MXpEULUywcyxc1J6rY4vyBhTv4EdinuiJAeujTx9N9PdVVTKwhBBgwfdaVAz5U4PGot3w",
  "key11": "3AxAyRojtfcJMp3JJ2Qto87tuN21C6H3hoMhDTFUx9DwGYZmcFaHQSEwLs8vkavcnvcgB9g2fXh5qospz9TXUEpZ",
  "key12": "3ixnf5Gw6EBZ9LpSnxYeoKkXWvXEEVZG4eQtFkyfPdk8xcUyccZKAGN1SU2u9DwE4WJ1ja2UVYgQx2tWVq8bRpVg",
  "key13": "2k129ZrFZUATqciF23qz9B7vbAkiBJjt8JnoQZWrFE1ykDZA6yBpZEz7FBLGFx5idDJpDkAu9iepQsbGmmTyE9F4",
  "key14": "3Kb9UXFJ44N51EFQwTnhwoaiuRCGznvZ3gchjJRCfJRKuSANv75Sovo7uXcRLzL4KppuN8A1AfsN8vp8wA4kMwzG",
  "key15": "5kNFa4LB3wYsseBNz5XrxZgLs7GKJt6L6zdSmnxbyapSh4jb6cGcWPCQJtpEKx6KGtXZdc6XNTgwv8uUbrVm5N9p",
  "key16": "rvUnuSH5tX71DfYoLiJji8rvBQEYUbvZ99JPMXJ6RL1DDGJvxjRqNsbatQXpJXZxjUwPBPGzg6fZFoCNrssY18X",
  "key17": "5eBYdPREgBEHGb55DbWTeR4rA8uciLtx8iDQn1ZkUnP1vGSY7PFpy752skrdYxda37bebNQaN8gwXym7rmPxNcQi",
  "key18": "4QDaZAkKUStU1aFW5qKEwz4tauPEqnxbVuSysN8kJRkWwzxca1P5rbaNe2GP8e5zSMNLDTXo7agWL3f9sGpkNJ91",
  "key19": "W5oxWd6yoz1FgRLMNEwSqUkjEHN13t6Sx6EjC1VPDJtE3hwLeXsThgmdL2Yr3kRVSQoTvdRPxSH5XwkaxRVuLyx",
  "key20": "4E7TZKvScMt6ab1MjZodAmTPE7zdvY1tp2Hsk35JZecSPQpXYctyMY4xYZR3tsRVtbaurrNAeGD9CPwhWiYVyCwD",
  "key21": "23qpa86rXirMjTVaTfvxAtDZczeFL2rBqKNSgCRTxnDEehixLG68MXDvaYN4jrsgr6tjn2Kaoo9TkQX6CFnE5kmY",
  "key22": "2iNtRqHxYJroXwZoeZrPYEovT4DuCLXHvEGwLWRxTqtaqPnN9yDXopfmg7WseBYz6srgdiNo2Qz6qCGEiRPnUtcB",
  "key23": "45nWcZwLjNomTwfR3ZVqVvjENReoDNbEEiuZprqDPotrVgU9XFVihzJzXnqoLaVjuko6qaNNXCrj3yZbqDqkEKfh",
  "key24": "2oqkUEt8CbHTJwtotGZGBam6qa3zLf8DoC848dQxnhKEZJKk9abYinuiRjtTB1MT3eh7Q3HHnqdQsPFBDLfuLETU",
  "key25": "3VudFDdFAMREQQCXS5t1MFBFsNTcEyKVXU2Y7TCfT3viwVuGXgdEThYz9hVa59gMVagKAv61jZGKBKbHsP9o9bAo",
  "key26": "qrF4HukuNQqJg11RKBsjj5UfXKTbJis1RWVie9RWugT7V9byjUFdBq1eLarRyxyGeYdbXrJ74vsHLaJDjikU27k",
  "key27": "2BqZUDSbxWyDXSJ65KS7NqJgsCQrjhDSrkcNEzMrVgCp45piB9WMRWcCs3H4iU243aMm54WqAg8yYC9ZNKMMhZQv",
  "key28": "5WZTTV48VZcPK7mDKEMUBZ4QMiQK8tejF5E18g1QDQbW6URP1BaCsG42QPuv6CYwn5gQqB6JroJeUmqLmGmv1uMu",
  "key29": "emo7NGeZcqVXDB3LfcDxrRoNHUNecjR3F22anHvEbVqawNNxV78myxHaL8EmrswwbXPVeo7Yyf6vibuSKPg8rCx",
  "key30": "5ScR2gZQELc8b9HPgfKNQSL5w2Jxcc83tpCGm6TcV7BUz9ovbgVMXxpfkcjgZQ6mrBcVuimbxe9PF6TPfukn3dqi",
  "key31": "5B4QCyQDTEfi1tzhJUY4DFh77g5t3XhaJnDD5m2TuSwF3K4BvYbwsacTHZTqu7jcFtB89jD1AP4RTCsURvzdNb8U",
  "key32": "4yCBw4XGsLXkDcSbWNSTkwjwy1sye6G4L8bdZk2aJL7sZazBk8av8nBt3dDNLVrNY1t9mThzyuQQGSCHBXvRhqHH",
  "key33": "mR7dH6AkAr165KFRxizDFqZ4TcbjB17ZviQDCggMzWacPV9idQw59TQBQAmKiXQUqe6xzqVp7QZ6Jchg1THRSuz",
  "key34": "FeQyMvmBwWUS6aRGrw73K3UQ33z72U1PmWGCgCfaYUueq6AShg21VXJd4fipiDeVSsXhH9kGY5Vi6cLmu9A3WUi",
  "key35": "21em52D4XtQuaCgwiUyyVmNpR8QYDWBcUmPG6J2ABRzsexg8LNn2AvkW9Z9QEL7Ry35n1Vkdjdp2rmmpoKU8LoS9"
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
