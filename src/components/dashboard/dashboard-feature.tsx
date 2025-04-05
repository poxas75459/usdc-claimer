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
    "5nrWpK1s5s6Q3zvZZuJ337ugA3jUxDa9GUyUGsykR7M6sGaN1fsRRgkv5EpMJzsGahdVWNqPg4UXyJioYvtM6qJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkeACJa3QeowCdsSfW5PzKyf6QxHv9bqMdsd5FniPLj2ZZj5DQ8d4NFV9b7uTc7o7DoRQ2gXehYSiZhYv3MftDd",
  "key1": "5DtdH6eMHMtfNCKoku9xUabfXnY2a9DdqS2tMnXxoYuijy7DwQc51VY1Mi4HWAghZ1WF7jhRPd5bFEFqHi7vsFsD",
  "key2": "5idML3zCfZsByoTxSqT9LpKt3aUprMaQAAAMi1sMgpwvQ6Vh4T6osjWZW1VFTH8RQoDq2sekymg6tm9wGwkkJCR5",
  "key3": "4eNGPLg2rCTShFqai3VBiRwy7wcvkwbh5hvWV5ZwkazL3ksQ9YQtdEzkRXVhZGgWSnjLCC9NtQs9uq2wLcA5Jkmj",
  "key4": "2VCq74Nivbzge2u6kJi4XsGV17Fsib7U4tYYtjgHxJSYauG3CLfWEVjJd274mUUZFdCBniY2HnkvDNkoArKxQkvn",
  "key5": "kJTwbVpRMdjM3pDsJpiQRALbRSLf7SXuwM3VYrNdM2hhontc9YDi6RBimYQwqj5syu1YJdNCUXZTw7X7BTKvY65",
  "key6": "6kDbvBStygn4kSoHFQjJ14P5Xe5t9Krt4ruR1yiKCBqB912a8rg476QQbHYbgybp6QRY44PRi86FAFxpXkwtZgk",
  "key7": "eM8zErJiKyrBmvJv9qHc2GZejpcAqg8hpRkcCP1KGC4qPDJX9nPgnUdZ3yMTxEcQiVbaVBLL6WBd88WTFdKhGA3",
  "key8": "5P4ojriS44TjiGuyv2gYhVeZjF5mgAkRd55anvd3wUfJTxHEVnVxPwr3xzXVAugfwZ8eYx8RpjzGeScVsvWW2CV2",
  "key9": "fnahVfmdd5fUzS8UrTh1gvhxhPX3y9JjPJii57iw3Xp4BCmFu53HB7cgY7bA2g1SQc1g1D1aoPPxXy6eYfCRZuZ",
  "key10": "5iHaNyEh8sK6mHcmniGFaKdkaDKA8wUeNPeV2i2GeC3HE5uZfUGbPjz7yHCnkAajurF2Z7XRfuNnFF2obrEwWXBu",
  "key11": "gPw2HTGgnWfrrHxAdjxAJUt5WYhpKAqhDrmzMcgwJiarkM71g97SZkYDwKrgRbbVtwvnT8wrCBVGv2jBX5XpHU8",
  "key12": "3KvsWAJNNWKca6a1rz2nNMM6Wo16KxgERnXp9PRhA615JQMq2KZRvY8boAGyFSyPPh2TDLtzpro2ekarHMdSkygV",
  "key13": "2MhbbqNToJqSx1LxcanMbijvCQZ8xXEQXiN3q4r8Nx6yYgtuKNbux9vfEYusGmzd8joiqWGSWizRYWYTCSuV8JX5",
  "key14": "4GgxdF5prQaXYNSu3HkE3bMxzZdP5XN9QbYSvkw3bEqQgj5AQWEMR5A6XLQuSZFKEJsdaHYFx3KJW6WXqzLm5BG6",
  "key15": "2MfbDzqgcJCSmcDnhLpJeb2Cdz9Lm3qnzGPhi9aP4zRBntMFpTANNiktmzAZNM5rie9od5mnx3D9hvxefYhW2Hk6",
  "key16": "2pv7wZG6cRkGuthvtGVHaKvEEMneUHFe3uU6oRCcDag4fKPii756ie3GimwhJPQJsbQY2n6qzuF6QC8rzzoF5HaA",
  "key17": "2mUXCQTEF88c7vy6wwuHj88XsRbb6Ps6wrcX748HiHwgrLeph6hEQi121Asrzg7Fr2uug3kWZJ6Lx81WfQqqh24v",
  "key18": "StpoZUa6UUoJ9YDr1aAtJdZ4ktqtoqWahXim6j38XXsEQWQdDyUypUKsyeiwPZKig6a3X41ijR1EQGKXcqQeujk",
  "key19": "b6CDdVq7XkaZsYBhsan8wzjxqnmChXkEjQa39rtrK6irczR5pVUboKWkEkXDCu5pbnfwwjMGqixvKVAtB6FtjEj",
  "key20": "Exanc4sbZyf73h1ApcDmRriKtkfxX49GUZ8QgRbbFG515PneWvvV1CfC1PWXBseZC9fS7AWtvYF3WqeqYEqGdfa",
  "key21": "WVo9Pvzo1vxagQ5XNs3rbhCmiKqDDKrWMCxU3VdYMsfbFm69NknyAjzBYKZWBMzRGvvk7aHkXNMLpuR3fZpsXeb",
  "key22": "5qGpd6hu6gp7AetYmcXQjTjjYuGb1Xzy2dJAgz9DBKQHKowzGMrBiZWjc5FCBb76ZCidpCTxAZdcUKyJ8xJU8jBD",
  "key23": "3GRM6MHw3wUZ1c7JEVBXhaaDh5A1QosEMP3Uc6yEhq2GmwCxxzQu7kNP4dKcn9iVzjxtEhuAGHtenN9rXNvRDm69",
  "key24": "2UR73eCdkYzKEpNiKxWQtkkVxUoQyqJqx47xkdrZMV3xzeU3AyhkYjK1LYB8TU53UGtaHcYkwBYv41EDVXmt22Ej",
  "key25": "346jiWik8AQkpb44DrFjzJSnjiKbvWkB6zhxQqB3BAUQJy7FVqieAYX4E42kJMQGNXmZYiGgAiLwWWopX9q5Hip3",
  "key26": "4RhM6koGPadG5nBqZ3cc6GzPMqeBU4MzTK4mDPtBKDumvZgaYmPg6WLjMZaACHUAuQoA8D4zmCTS3aDw5PovNUS5",
  "key27": "BxZXbgVnUGKUzKuYpNLSkc7X96CKYwFwY3JAzjfZVdD8SNtM5wFBUdBFvNvWh73oReMfWiZUqEThXa4ghnGY5Jj",
  "key28": "3Sxu84sNV5PFNBk5dUj89dihgwG3mUwAJwWwxHB9kFBrswjKGtA2e6b5ND8env2wBd3LFHMPzRjwYLtvJyACSuzL",
  "key29": "kYNrwrDo2rj3T4Nk4VDtpScM7Qw7ismmaVBCBtUHGgAjJEZCE4HmAmoZn4WtaZF1qr1ESBrciVX5t7BsEN5Ld7V",
  "key30": "2nog2tLRzABUaYQ1ZuJVD3widUV2J7mAMMKWL4QEo84wt2BhKzNo3yThGd9526P2Q4NzfwGuF7knWFwa9eoKw2Li",
  "key31": "k9aQgyYvC9L197yyDtzauGCGKgL65CNK61wFANPr9nXcHAkrcCQCRQ1qWPnuBxGFnUCqgLYfAkiBVLU3oamcQmV",
  "key32": "3LQGTRGewHxBJVrfEfRsuwwdTegnhMSFNMtdEGukDtgsNtuewdvLNZFgrm9dtf3Qg8uuGQsMgowgh8xr7zbQposj",
  "key33": "nLTRHs7tm6ZgRkpi1dSvzoz8ETD8DUEqhdq9mqQL4hN51zcJze3ttED3HtGKqJZPmDRGQ4NqXyXAG1UyHnRnBKT",
  "key34": "2ozG2gg615bPGr71nGHJymmX4h85SQcjDweQANKYkzJ4L5W1n7iV4SHjdvKmBzWUQUJjYLBnirTtUNcFobT2nPyG",
  "key35": "3uwR1MCwx2Qh144B31F2N1KNnKG9RgC86117P25w37QhVDhtfPKUfztHW9ANfzdsMkFwiBiJQ9FYhXg1bB8ayM2v",
  "key36": "3fTxhgxDe25SBTqEap2nwPpNKeNp3dbv5ctynbu9JJhsQmDU4xzSuZmTcx9r5ut8vcuAS58JtwV9auhLBcrFaYad",
  "key37": "4oXK1oPssE2dBCEkYLPa6UJ5FckB4wFBaodTNHdUV33PegvhyZVX41RYg3qz7G5oXusCm4Kkf7bparu7JEpdyjDt",
  "key38": "4rdWGJWv9zjPFQWNY9tNwL3pBqZ2ER7w5TWWPXiRXD96EQKpgt7Kug6P1ofGVpYRg4gA1Xb693NW8cXCUNWGyaTh"
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
