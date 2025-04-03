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
    "581UD6ZgGPxDc6kQ3Kta92tBBH3b1kuXLvESf8b4DpUbe76VVQwwg2SPc88QEDPux1sQJVEhs2LPE6jzgFMnEGEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qdjBVrH143q55ZMLX1E9kgDFKBr9GzcznVuordkmFsSRs9zEQusFjzfwRcF2UXVdBy7UH6UVJG6asR9tojTGQAx",
  "key1": "5AAu4xHgfmm4W59tUTMoqTE4PD1EqXuC6PHWiQFLrMSqeDhPFZr8KiFzKZiu9AayTWeKc6RXEjz3EEeqaECwGo8Q",
  "key2": "4uSjsP1U1kAugYWwRxwx5bjpBXbBWM8vsqeHTv7j1GrXBaLbknDXAhyha498q8iRbA2w76SgZUSaNAoGdmxgzJW2",
  "key3": "4uk4hb9iJNMeKKQErAz9ts3gYpdzH3MDjiFshHdMzQFAP1vcobJS26eGsbh2oW8jac4vUC9uDBRXse5m6k4jwdZ5",
  "key4": "5yDrFhdGBi8mCRPnJdaVBvoJNoxjnrb8gu2LAiTHmSJKJGXW4GzMvroayZseCLpE223yzQRM8rLqjK86QMB4vYHZ",
  "key5": "4DsqcNxkbuLKGxriXBLWHJVLPwG93td1HBPwY5CXqNPhcywtyeeVu7pEEpuy5ja6nyoxuJmNDrNFivkfK2AW6GKG",
  "key6": "318weonEJVBqucrtxhw6uefojJGpMKSupVPa77HhsRwK1npSha77v2DdS818VbTTtENFRLXgAtZpzgaCr6hLcfYk",
  "key7": "2iBZKj1hvToJphnicSYS7dxYnq9EJnSrUFtbt1g7aRVcgnpW3f38X3ZUUYvmE9ZrMNh6H7Y2tyHuYTYg59bpNhrV",
  "key8": "42aDAPcEd1eKL4CMetyTUpc5UxjctpMz2QFHasurUodaMraZBtTY289wCvGx9X7ZSTGQ1TVj4pTTZ6X1kGaKyVmu",
  "key9": "2nuKqBb91KXiWCgVU17gmsQLxxv2SExWx5ww7LEjuaBQWUAftxmf2L2zKuhEYgbiak6zF9rMzyo4H2VKxohT5HGF",
  "key10": "4YKqKhD5nY944NHttW6PTEkZ9g6MeNyrqHw58N3k9rLFRT8eWymQhj6omg4Xq9Brro6GAxQ5EXUYUqYTBP1y6oaq",
  "key11": "2RumuZK3C9dnEdXzJTbQjo2oZmD6v7vV4TawFvhNVmavefRjKYSkaooVL6KqBXm1geCVfsvgieB2CcrXFijXuhzX",
  "key12": "2wT2x6mbVQCQxZaHLKqkpzDfVRSmxWAeozPbadniFa1XpruTS5jNsV6Stp2qXRQ791nUWPqQQw2TxGwUwgKAqvkF",
  "key13": "5MeQrJdAeVLGortmxLkp85X5HZsH55efCp6CTanf6y82ZMXa1RcnUwuhvSEk5eHCN9uFfL2ktUvF5uKVguApcsRL",
  "key14": "zPa7ue36xY1CkWQh6pGNfFA3Wc6K1q9ihiVrPtbzawyzfvJRJJuyrCjZ5sXR5FJ4AuebkAFomdAqiLdHCFhowCA",
  "key15": "4nDbZm4wH8BhiquKNqgf5fxtBQd8cgU1h1U4eGjwviXS8DKubwswWdraiHi39o4pjrcZq3v5Ve8wriEUJicxuvtD",
  "key16": "5sSqrKNt18gLHaeRswZxgLGjzc2ofHrU21e6jy9iPhzGtPvCXurwkLapF84mwZxmfYN8FWYRwgxqJquAGxks4iDf",
  "key17": "5vzjWhsCUdg3zbRHWGaazEqAEGbCmLfb1oLbS49YTZi9wVkeg83jUEj8FqC5CkEBj4tnhd7s8hkbxByYWv5J4wUT",
  "key18": "4c788pW1hJ3Vk13Ve4EQmgjUUpjSbLq9Z1uczdWQFqxYxKGodjTnVVSHdwGehPTZM8YyCsQUdC2vxrWdVmA6PQHF",
  "key19": "5Ew2WYz2VRc7R2mTiXDSA7AvmkgTiBoBXeiaKbgVer3jKDDtioqvmj88hWXL73B4GpMPW5H8gs3yoVpXqqY2gpnL",
  "key20": "FdaGp2qZLwsq7Z6fKdg2BB3hBc1xb93G18DJF72WuzFWQghUwpKTPZK8FMcWfhobfUJVxpNg6YixrZVy73EhQHB",
  "key21": "4euKMtfdRCjqhD2HJynL2qk2jXf5WRDgsxN9tVPUBPR88B4xkKZRAREsknqZybLFW743KL8ccimEnWf6JcoVr1o3",
  "key22": "4LBPuyNTwf8uyo95o8j3awKg8yic6sQ5QkHgeYcWJrSipFsJreipgzqAw7jcGCJdx5hFdE7g3dksBEWGrCmdUA92",
  "key23": "4xreeXdTBjPoT3BDGcbxVuqDVN6WeKKvZaL6yYHLHRWq1PfgCRbuiSiBUkqsykYEumedyff6rcrwu2iuEnkP2NZE",
  "key24": "4GBi9CYtHBWBFV6SN9uk2oxnk89yBpZMN7YmXP88uUDErwbhdDpfjCeRW1MHM4fPBXK8udeUe25V6cTJhfWmCTms",
  "key25": "3gWTzitWVYmzkpDVjhcaeN3SPEVtogaydHpVYg2QkipTb44P3MzTKL9ieq2fH7mNuYB7CL1oJXBY5qUDLqQqZynb",
  "key26": "53M5i6oojyVNw77NG6kbCEESqWQ9A96U2wHcwWBabVs6ghHfSWkko4yEveA6b2CVaFtahFaZKCmiRhokp9NtNYa",
  "key27": "57s1QBXhd7nDzTu9Gk1LBmCrJPMTRT7sjeZxZH2sugxAGxpvQ4Z4KMh8rbFwwrPM4XjukU64p74CwZDgr1cpoAXX",
  "key28": "3fbakzmv59omp1MC171aJoKpgRY1Eq6T3u76T5BNgDX27NcWWP8V15XMVgQd1wHV7ZLDGcTTxTtCwrJFg1Dy9GAe",
  "key29": "2zpJzHjNPLihnL59LnvXXA7nyjv9tht9orbz1t2p45Y5ii5QKqnugLR7rykqHuAF7WUiAJ3Bz3ejFFXfvVmCbtwm",
  "key30": "2Z8CwFr75fjLYgJMfe5pUGuoYJcdUc2nSNJwK1SHWfR34tqLizAkcg2RRTeJH5ae33BkvCTBvwXeeQ6JJ6duZDxx",
  "key31": "4KxYjJ776KAxJJLoA8CmJpxDnDXYqbhD7E6qz4io4VhyxVhxGKsi4pEeQL1FKWBKxSMicQG6GmcLD2KoysxV1UZQ",
  "key32": "3KzwVT81VyGsGLNC3vhMyMv8wVRdb1sTuhWrANsAG5iFJbf4x3jXWTUodeitBRLPym42zGmWUU5uyZuRc7P7TFEK",
  "key33": "2WE9niphBvyAhQTmHW21cRhTpB9JgNdZ7mnvhWkHWyQowzxvUQnSjrReh7hJuCVisCSkbyyQsFMaVgnNXrBNzSZ7",
  "key34": "5FTByt4kH9K1mWQZfgWDMcTJPZ55mzZHGYsbiAcAyitRZnfYM5rQTg5vBxfuRY1RYyYiWmpekHqm1kU2HFrGvJwf",
  "key35": "4VNy9g3dGVnjw7YyRmhuBQHpMpmUfCmtQzz91hq3yfnXvyvj1gUZqdB1UssMbBA49aYScAz9qrMiJxzixatXVUeM",
  "key36": "5L76WojvHcPGqhkJwwtTGEhB58LaCf6Mn3kmpPdqLD8pHHL3mRms1Tcaa7TawZT4nQpvwxQWAw2ZwLAGuxHpTfGk"
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
