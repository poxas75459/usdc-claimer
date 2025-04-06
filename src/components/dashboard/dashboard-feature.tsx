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
    "3LjhHFxLXj1DjfWwdS3Ldg5v2hqeZbGCqX53VpeGSwrHXavP9tedw4HsjMF8FQQcrMZLNC5myazJKuAcNmsKFm6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLMi281ShqhcfvckmXk3nchP9CfqG3gQPdi3C9tLdB47F6Q4KocsceaxV5jMKMPT9tFjWUthS6q3XZb2zLkC2gP",
  "key1": "GYz8qfyrAQSiRKrL7rbNmXmHubuYL2k7SquyamCAyvGkxCGLtWYQ7jiPiZwMVP6RvExuyhCwxVqNTVzavdpcrxX",
  "key2": "qSWiRD8ZNQMuQCe6SZfQdp9Gzcne9CWTrbhTggGVZbK9o8iQXNhKR33U8sZwBWbcugQMGLYAWqm4oLeFKGCbVv2",
  "key3": "YAFvAV3XjwqiE5P7CjUWcBTFMDkgB5PX9vN7su3acMiBypm2FbTqBuQqXxeZp4ccXJ1DteEVGvKLuwoNDCymHSk",
  "key4": "3UbcEqmucaYJ84MCEb3DyTbLmgzKvdK4HyFBbrFtD5PZT2bU2TtH55k5P62CWcHzpFyn5gWT85ctKVgpsFt7Q1yg",
  "key5": "Vztj11Y3jFjZmganRku64T4jU9EM1wBWHbJ3Qac8eWbuabWnRG8m2s6qJ2vWXpGs1dsdRuo8MjC8bqceEzK3QXK",
  "key6": "3jwZkipQ7oxcEwWLwogAicq6m71PpqLboLffAsq289SzsUkghpwnLc4xBCcu6dv2dtEhEyCC97uQ8Ai248msySJU",
  "key7": "2QFhK5zHnmxMFQ7oHvSa8gbquxzbeG6w8MPRbEY12PQc576bpnmPZxV7jqv8bAmbsbSdn2zGA5aVhGxQ5x4VbhT6",
  "key8": "2ChrU4AbzP6VUrJzJonv9ZhbH4AWfgm6XZdYzpoPzLps8EnDLfymVa9hzB2iBWMxoE9jcaf1nd2d4F18cdN6Dp9W",
  "key9": "3sSDE5pLLZRFhPX7CkcrvMazwNfaC4SVhCyRJEqAs7Yf4hNV2hbA9KkkdfJ5TteFbjFuRwJDxNGPNxpFwgwbf3FH",
  "key10": "2U3FbQonp4Kwj4fMh5qiaSjtNNTvjEymA4ah5G7bfoZbwyZimxebyMy75iavEJUncfFyQogEnCY7rPdWtG4GmizA",
  "key11": "5ZGRnnB2C59FJ29BwXn8hSKuGhr2RTtyAA2YBydKqfRVFKsuJVzHZBAmAWMUDQ2aCVBNiRXwVgz9zifdt7nWaGs",
  "key12": "4PHzaCSBB2sEexh35McYtioe5sGGPdvBcA4UjrTxDhmjh1rmbctqDUtVZZ3yEyR55M6hCfkKbojqvMqA6nNsLzFM",
  "key13": "4cxc163MkRNHaPV9J89mKhzaMMxvkMUPcpiDU1UtfyknoLggyPjwxscFq61zxBRfph2v5vugtU3P95iTVcfjQh4W",
  "key14": "3P4kmAGWehKrxZRi9eb5MXzQC8ufXhwCcqUsUPytP8vJbqK3oe4RaX9gFWbCvMUA2YMMvBmGfXqRokGErdEkKv9M",
  "key15": "2xUbvnWhnZYj4rUd8uMLk9RDkUaQx2CBBbiVE91s7hZ7Vcn1nhDXJxJmNJyXB9yVWqwhNYpPiSB3h8Egon7kpFwx",
  "key16": "3AdeqZTsj4rbfvQSucEgqLqjut4W4TZEwr2TpFSgeuWcVBMnRR4ox4nJZwtxfET2bRzbQkyc8g9o1CUxoagRvQoh",
  "key17": "4rVyThnw935AzVFvwTrZpqhrYjwZy77E3qweeg2MLTsmXeTMVkRnL3ygxwrgFyEoXvknsRbvHayCGdVaN7wEsKFj",
  "key18": "61SbXCbb4BZ7FCsyNDs8wFgiFwkh7hF7k7XknKTCwGMmHhCGgZv38cKaaVY9d6omq2rNKXU7v7AK9BhRmhfaaAFG",
  "key19": "5E9rYbu2khaS2jojdf6PtbXgyWkeA9DFNhaFSr4YjWLGJsxvvQyh433QaGSr5VK2FFEJWWRn5cunJ3SeqeMWzQe9",
  "key20": "DCQwYG9VGgRN9D1dJttNf7pe9fm1jqe5DwbvtCyDq2LzYYcyjmH6n32EYbu2SNFueYamNELt3PoTgSvzzzvC5x8",
  "key21": "2JVjqAXqUmH9mUDXgPQEAq6m9xHtHrrM3Hcd58ZnnnfS8vrTUzHv2w7ZNy5wY9XSaYq4yxyxPY53M9mCmYhS2FTu",
  "key22": "jgvWBA4MPE8dz9gxn2EzKK93nvLuB4bquP1upUZDQrfrNebFxGdrdxDf8K7GqcPF22z6BkRtKyaJxFoRpVBnN1t",
  "key23": "3FEvMESFZCzvTpo3pzqwepjVw2b9nsApjXBNmPQkouX3aKwyf2aS1aaZx7g7rKGhp6KcJaHZXTjotQ29Nje2zbb8",
  "key24": "416x7xGbNDJ59sJMYDF6w5QVoCCmULUKQqsQp7yjXmd4VptDbj6411e1U3YLrBq5PQnaP2cQPN8auDR4VJeVnMsR",
  "key25": "4KvgVDKAvZtaqYiY64GEwjeDcpYkUeRNFwA22evqWX5qtJzcYSswnPpVKhvQ3oMNdCAAUnxaUj5rt5mZNx2CvDb8",
  "key26": "5dGc2nh58QWnksgyzChrEhXcpGNV1DZLj9jKqxhiA2prPQeLXJELwaVXJATEUTzPuPiVEwN3uvCoE18YMXW9bfT6",
  "key27": "4JktGSaAh3F41yHErXvwCgTSyVScfBEhhrm6TABv5cdWt4hKgF76jFfPESWtAWXhXxeU5BaKCbLwgac9DbfP9VP",
  "key28": "2eUSWmpQECu9VNQA63wCQmZgCBzaFbxrmGyc52GE68G2dtnKHDb6iB9jeB1hjDru7y5HrUbmRjAaZDCMfeotGwEt",
  "key29": "2y74FC6BbmZSrH4AdamVM6uPjqjxDUk6sK6doq9S9EKHauoNoUrorKVSBLdRNVRC6YrzTmfF3BQRA1wMXNt5Ksbu",
  "key30": "5M9C3DN5dfEfHzwPb6m2iyw3nfQEGS3kMsa4DMDn5rmiYnbR8GqG3QzqQvXHJyHwFENUpY8aHNhkeYx5RytteXr1",
  "key31": "5XHtXS1nkm9VuhTcTs5vghHMt1hfAPmzD6wydvphistXpvhuQ2X1zeQJHbqJV2bm1e247XVmriLgJr2X9Bd9icYC",
  "key32": "4gj8jjR8srENLmi188LfQXRPDCsGzfjxsYt2AANXP6JU8qLrrk9hXj7uAq9tn3pu2oE2KVWGKJnvusRahWqrRZXA",
  "key33": "3v9639PDQHVpxwEHhGu16jFj8iBCvxcbP6rCyS3uYWqu7c3voPAoiMTe1bxCT9wTRTR89YYgMbHhQ95r56AUmjMY",
  "key34": "S2tnVJFhFGEQL6GvXRtVVohN2o2c59r6SjFLfnavCRUEkARX3GwMmtK5Y1rf4zsb3xXz36ZetZQcfouztgjkgae",
  "key35": "GfeEM5H1Tb5TgoJdDNTjzqoAyHFG8HTFM6VzwvnwmbQWtYZCkKw6GFoTnhfGp7XH9rwszQGVz4dyA3dLtqr5HBf",
  "key36": "5tRCdb1XzqgFB8FKPdPbcxCEVvH7MjQrWqwA5XyvLfefx9p7bkt2nbf1YZLVCwLjJBf6iWjPFE2XvW2bcS2jikQA",
  "key37": "5M7jPZVT7MLmoEpfYWTCC6pbzhPmGaJCk3v7T4NdC5kGq3uGQAanmPLJJJBK884hWVt9yi3MCko3MCHZ5tNJHLkS",
  "key38": "2PMLSgrirciTjtvkbGdi9ES4ZeW9QGMjN5Fq5QvuRF6dU5mE3xbwQ1m5c7XkhdJokQsMJ84doU8wdqkTqqrEh9Ao"
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
