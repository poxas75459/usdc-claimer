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
    "kn83dVM3p8QUh8jYfebTDGXNv4NjNDdsHdtSSm4XPAsaWtF9h7hxwQcgK45vLUC15NSc1bTwfNVRKRKUDsqwV5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhtNauCSpao9a7pE8vJgqFBqDMbqPViZK7WEckiGFP4WqQbm7dqQR3j9MZC4LfXL9PUcLdxkKFwrnup85Zgi4oZ",
  "key1": "gQbSKkttCtHT87BnvXJSSqdhp94dhVasCcxA6WCDor54GmZmHkmLn1ySnW2mJ2paGm5nmZMamTxCQ2fQWBfcY78",
  "key2": "25H9cYi9NTz359UhCQ1mfEdRA32FuVwGEKCQNfdXujhnrumJ6QcXXiyBRcjhXNoDjVaxUjA39f6RiFNC6DsPHh7y",
  "key3": "251r29QNhBsNrvDDqzjeWFVxGqp1Wmv4U2HuH5XAC8WsVx72r87dQ6mbKCCzuCaZcsCnmzxvZJhvVmGzoNJpLy5H",
  "key4": "4HLEiT6v1KoA28XpXpvQv1bm9NUNuAGjDviY1jUdBYG8hJ1CiHwW9iynqunechznScWopgi3Hx293n6htvWXQJv6",
  "key5": "4LsziUvhdvzMFEjdYvYPHpsExSSWFhrNivLZERRDSKLj7jaAUJfkNuu2R4RiL6oq43Q4qBgtfeWYKNL4TVimhRpo",
  "key6": "3MczodKn7DyPs7bAh5rLyepEzL16KaHkHH2U6bCezrLxnqC9ncXZgfLnPWWZcJrRvzBpzRSvkpmMMdo5ezPinDy7",
  "key7": "4NbeGtZaQHvFRQ7QxZGEgetHaiYJJhiGMandjBpsgmV2W9bVFAP6FfDsh6caJStBu5jD2RTbhMKEiZy3bPJfsr2Y",
  "key8": "5BnNtYTJfeecDQE6RaYPWzLw4neh2rgcmLwEqRtCKB5YNS9CwoPJu3xMaMj9Swd4W4WBtnA4krxXt6A4F8ZbJkXm",
  "key9": "2tMbQNLSB6pub2Sb1fYirgCUYLxZbKb2MBR6cNXJoZoy3RJJqWgjRiMdYnUEWxkcjWnDZibmcCcLJXvRLTPv2VHm",
  "key10": "5mg4zjhPpsFcd4EJj8qqrahosbVAQ3A6gCxeDiTjKB4r3kRSxG27PJ1nLXKeMXbmd37TPev8MuDq9fng4vsZ8k8k",
  "key11": "xkn9qWEXS5hNkRaLNE77DpMGiATnxJ4PtbgKZ9AfXPkQXTXHguCmXf1GfWSVdtBrzHiAyXHuULfUt85TvhpFTei",
  "key12": "379znzZg8Uw5EMd7yaCVTGrYc6TCUJK5KyR1JAAyp3rff9GFBHfzzt5eu1Fi3ZEeuo6WQ1kb7LCdRk9Yr7PmxaG6",
  "key13": "2z2LRzHg4QUmtDVfGbYstvuT1pCBPGjuXQNDn1wCjGiixmMd8DgchPE1JWKWPY161X1NhqLVABkzPWwnkvHdBVvM",
  "key14": "5yptgv8XnTruWoPwythYeQftk4JK6Apdr6aGTb5p4u4QLZDgbt9oPoqNephQUQ6MXhxkULYaNdAddwgHFrC7JpBJ",
  "key15": "2926MDtS3GyZqf3Rs6ijz4n3bSvsNoQg6zErxA3gbvjcrQtNKXAT5d9DT5nVLtSx3N1NXKLES9YsB5832o1v9dCm",
  "key16": "fD99KjXwrgAFCCp12a5rEYD4FrXvcpRoAVeRXxjPPHRJoeyDxVwn7oMQXaFv63tWaEPuSv53hpNat6jZyrPH4fo",
  "key17": "3QfCTQkuGyBkfSBA98fmJcKeVhkuPbYH5Fq99JL91V4SJAHbrzChYVo4rh1jZAQ9idrovfhtHoBRegLuNHtZgrwm",
  "key18": "2GWYmd4gUZBMM9jaDQfxJcdKafZF69ZAfKZKPidXyjj2TKzZJ3zL84fttGV1RAxPLx3BJpyZFCU4VWAmdWYiidJG",
  "key19": "484cBHqvCG8sABr3nFGG4xFY9dmfhdoDbCa12Cc4sWh6s3TQb3kM1NFoaAZHSNHYTTvexxFKbi5dxjQYsrWwinZD",
  "key20": "4n1tXPZs3vzve4fidUyvdu4nrYbBY6vdHCQjsMVQy9dnfZ5omaFNJMHdnJhw3e3LpnFiuusmq35VscfbpMTkgCsU",
  "key21": "52oZkZq6yGhpwtMcA1YPyYGpXJWxVPwzQCEq8qiiYcAiRCbPkABAFFiu8xTxDKYzE7q7DDwe6XpztkNJt91RLD3N",
  "key22": "2yatxKvij2aMZXetFNzAjNcnrsYGJcLpdrmCu5mugzuBxCPdeDwBDCbQyXTYmJv6xYdnZSwCUnzRhLfE97FNTBaf",
  "key23": "54mGYXhmSaP6MtTbCRV5RahkwKsimkKZFxEjZhvnZ3ifcG2qkAgMsseQ7wKdi67dpZ9WHZ7UB5R5zoXwuQs1d7jh",
  "key24": "3zUhMi9gfEp1e2t11bgNjeJXnWvav5RMYjFuFvqzryYaMrR3sKjh2ku8oaS3N1tFD1FD8qjJg3jnptQhR9a6EwEo",
  "key25": "bkpQijtHocGgtTgJZiU5SrhunWXTfkS9QPd9j55gPQL1Pu7wJDu8No3XKbQfEsQzwKiRPQgeYFMK2bERaEEtikX",
  "key26": "AZKUejrnpJm9PKRufVzqPVSmf47DvzSBycNH7XB1EokjpJme31jrCWJLwTAzMFFYnyMUr4ST521XWc7kKrHr9rn",
  "key27": "4CZRNokdirAQCMUVWRS5ZSSdiaQxGPskngjLeqWmpiSFmGvLP4jaw6uW9ETCRPFDGmcHVttMxGh8sHi78VTPRqYS"
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
