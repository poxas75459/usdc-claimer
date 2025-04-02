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
    "3xXqpLBD7Cgoq6NQBLm4DDz9xJKh3FDsMSw6iYczecPo2sU8TTJfckJKSxQALk5x8vyYarTLyYoWLjEZZUi5LnpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Y4LtAqrCuEKHHCkjLZ4ZHVkX8NTkw9JKvgoamqBXyUJGi6MJEWNrNPpBvYEKb9o4nJ9ngMJjcJDYiJBpqhUMEd",
  "key1": "qNXBUECKrrCEpjb7wJAcZtEtUHkpkfYZZAdfCx9SxCF8SGN8Hom37q3YacWSiijchPerijWo7V7EXq6qS7mGLHH",
  "key2": "4pmAcKzQanQVrhghiAjBjAFWE4fwbnY2yhR5FZjRAJsW7wSEgvZKtM38GgZwUwHm6FwxKgJnxrZonFpeL9FnfBZ2",
  "key3": "42fCUR4czmWXbRT3utkS7PZp6jRwgXwCNsncYTpmn8Dn9cZqiGS5Yv8bScdcZRG9PodT2XsAvukqFuydJRCMKWPC",
  "key4": "57TVtk86srxKFVkEkMboWLqd7uuWm3cvZZGfGKsryYAq5hKjuvuTV9w9vHKmMK735Vnsx1xLtJA9P5J4RcLrx59b",
  "key5": "5duQWxeJmGyGNde1jwitbMpBPDNigTRJoZ9yp4DiPXTdx3zLSfftbWFBG3uNY1RvA1M5NN8coNfbxPhzUaw3TBWw",
  "key6": "4x87A4gxCL5u4ARFvmiENHRWLtcVpdF3h4F7oTHFm6ptgT1JuGoxdTJjBCKArvst5eMxVNjWRNDsjDsmB4pw2hgm",
  "key7": "3XVAsMg6Ebt8sS8cW4jEdmy12APnAqEvJoKakr4nuo6oNwv9F1RVqDdjsGyFLNd2WU2mRcyNAd7rs1sifTETSYzg",
  "key8": "GkanVuL8Ppwj15GPF2cDo5PsJSfdqE76zXCuHQ9wBeKNKCo4fjx2LJw2brG2QfA9yBoeeJjUY3BSskoPQn978k2",
  "key9": "2aNr5bKquM3LUJGed9tupu4XBuV3VDJk1sHt8TsLGFGFxWbsAiiTkikNJW3b1rtBfmftYhCuNEKFcdyYDBNfJvHb",
  "key10": "qNxuUwR9o77EZ6hQsaM99L2y8DBJk6ts9XhLEiG21z8Wt6onUFh5g35T2MwvDy1aJ9ZpVWmnwkcnzrjy4vSr3sh",
  "key11": "63sqbME9DL964dXYEU9azYoCbZwwgQzncHRW48ptdAb88GsgGDUMqbM6sc54Y76vai1FxMPywq6sj1cXrJF8StxM",
  "key12": "8CVbUn4H1oKUzcHMzLoATa2JoStP8KCXxw7gdC183um5C4viyBFJDeAdWTotZLBDZShBfybGEci4UwKNAnoUqud",
  "key13": "vpRpPrrhWzm2LedTmT6ukiP57SnS73VLaBzbPLQe3hSeqYm3KgsP8qGssF5WC8YfhcqWhgVyQyNkheXy3thTprx",
  "key14": "63sRy3EGYoDa2daXUT9Va2MNrTm9nF6bPTDtV2tbU9YRxLWAkv3Xj25JcbmMuvopciLgNkNRqDxtzezQbm9kz5w",
  "key15": "3wtmYztZJrJinWkjsR3t2xd5Wf1ptfNsJA4MrwF4Q891XdzfYRE2YoZpoFAL7xYUuqiyHueiFLYV5q71bkPMTRzZ",
  "key16": "2jrB13adYFfxjohbnrTT5pM3Cpcftu1sYeu9yWzzdvCpPVT57R8qpijASb2LZHETFUb9wQLy1cGY6PJRSNhNSsti",
  "key17": "2YUov3USFjAYkzUiFUoKXsrJvXfrGMP9k8Gd5cFSdBaRH9yUBHtNY5VEatci5jkZLTf5izQN1sg8bQm6iC5YN7yS",
  "key18": "4eXsrWKTtDEFM78RHUrpasrLvu2zPEQHeE1NixUtyKyx9ZLZe9jE6sD7iJDEwdkzqMmjqujJJkqzNaG2pzv56sPy",
  "key19": "3S4B3AY6NPitDMS1pJ83QQNJfCrwDvVrXLJQQbjEW9z4MsCU1cBSyPJspH2TTpcxpR5p4oWC41Qbx37hdCnp5Nmg",
  "key20": "STCScA56Fzwvev91rsKRZeizmgQ27i6S9Bq1XjFqiqh1CzDF2TNxFqpSk3mK4dR8MPo8Ebd6eC6uZcMyjjKEhuE",
  "key21": "5pdTrPGaVvRmmHugwfYe3ueusqfr5fH4YJxAUoxqhFQyoRowNjFvUr58ytbPAqF2rjtHNWs3j15ALdwffDERwGKN",
  "key22": "5EGNrfTUgNtrH11EoMsQEa8S9fNVSf4ctFnnzxcBTXc1R7yGLp9TmhHWw45dbM6rsKEqBys4KmMA21KJ5YpP7ZZe",
  "key23": "5dC446TZDZgq6MirihhEHDA4iQogDyHrgwSAybhouUrzaFxRMHqNvci81CxTtJkhPcgQTRW3AbT5BLDVi9mUuvg4",
  "key24": "2V5mBVPvEDEByc597xEuFc2ZvmLJrDAiD1nMch9DhCkLtZE356ufNRA5s2fXnicXghiZrHfqrVBEGhFAHdkQaBCA",
  "key25": "5AED6jQvuuGrBAgJwT6TCGyDX6gKpszjfrzCUNpgN14F75pNyZBPcr4EMrqjzm39oTZcyiQ7ACD6p77E8ERJYFjA",
  "key26": "5YdmYejwhen18eBZAa9DyCCEHucVnPdswhcFrJuSfSNPv4fy1bFiLxhyzxJpjUj7MAxFh7WJASywVUq6G6sdKQow",
  "key27": "EsZJspaRgYVds3Upw6wMqbM8wH3QN5WgwLnhxDmH7HEBsLp6oG6ATKF4EermuSKRKtTDZPJeFMVWRb6cGWcgYFJ",
  "key28": "4kmfCgbSG5Dk3WxKMT2JZhi8eWvUTEeJivPxQLJTPznnUr4136zjUvQowZquo59fYNtpW9gRFac5Sa49KX12UUzH",
  "key29": "3cR4MCj7pBdVq8NmRbpP2vnavxgtboAfkxGhndSDanX6QLNQtoHzhTC8pCqtfL7R46xtDjxj17HHVz7L5aCybHx6",
  "key30": "3XVkTPAQc3w9tLNwBdu5zz5mfo79N6DbYe7YKsCHfVvggMgcBYkbPiY8PHpeoCA5FHcL42fYQBzveEJdJxuSeCo6",
  "key31": "4YEgjpikdM1HRWhH5NUEbxoT1vyM1a5sRB3RCdutfoZpyK8LU6gieZvFxrZdbs2jNMMHGKa25kwExTHqSNtbSMW5",
  "key32": "4doo5TLCXzai3zQqehmdary1KBEHEjTRxckCbNwfLznoHhrdUxKKvzGcbLV6GYiQKVfaFQ1B78umGPuK9rHTFdHk",
  "key33": "5N1kSBbw3b9boJ9TbLh9bDBVtmvDLMCp9KpYt9LzFojWxPVpKnMUBwGYWtW5dbEBSKoJUhkcRczz4pzCntoTvWwq",
  "key34": "7jMcrPhKNjaNwuBXutYCTpaDtngxJQ2eJUD8vyaaDh4oB3vS8dKo5Kv79PQNiAPFxSPYRjbLHwYSc1FsDtue1R3",
  "key35": "37w4agdNCNJFCDTmR3sMySYJuwsQmmtWmF17MKaKiDgwVr4N8fSfiLR7JjnAShJM2PVEgAyEdRRjYsvkktFWnmk5",
  "key36": "3q8N99iBkZ3Hfu4Az6xQZa3VyGSrNBDyrqMQXY2sLaGS6ouRKifRchBwNyXxjZ8TXnhLFBHtcdCyvqeaWSGXB93P",
  "key37": "5MZQGsfqm7ETZ7c8CQX6JfbaUqJr7N3789V2Lufq5vjpkyEDh3kpC2xQnyDXebegYf5RJ4FvFvg4FYAragNQddwG",
  "key38": "2XcfNfJ69rW1WZnKZrKM4mnk3EzmRZqMqr8BtLdLaziSg8CfMSNFAkNgBJsWkpFTAuVoaFbdNGWedxey3bm5a877"
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
