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
    "5uK5Ng7SiM8uRkE9GB6fjuFBKchzTgFE2uWSQzJhDxrgWzfm3ax69oz9dEhYbhghYLuUh2t4rzupvEgXTQXoSUNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66GHFH9eK8G5kAooWVNC2ZqLdhUKNWvgE8y28G6fFKZ9hAKr6Us9JCx3JxkKRQVtd15XiXghosD4v7cndv3rzBWf",
  "key1": "55HypYkn45ErPbMGhQnamg89fhWE1DPLc3bDY5tEhqsLjSWTRSYKPL8EHQpypDZ5qsPfUmivUG5rkvn65XAiru4c",
  "key2": "9J4vqfHyU13rKQG7BY3DmijSrYGMsaEBQyvFH62syP9yh71Jq7S4fgJsHPcKsrj5vUkkTcrhDGPrGSGVrsUWF7y",
  "key3": "3YxwfKgoGu77cQSjtnLrtDqf7qUKwgn2SpmQkMK8B5mC6D5xjoCVEH9YjgPrWsqDWUxWnwo7UDsGtp52DkyHzy8w",
  "key4": "3aLdRYNqckVN3pSdWzbWN8A95a2Zu39YQqmj8fzjVFCKXZN15vrxBZYuBPXz7h4jR9euAQoKmvbznVWaybUVE4hE",
  "key5": "9MK9BRYLKgX7WNqis1hYuGzG3T9tu5wCffmTYsNPBW3WsWgQMuwn1iFzdbzVdy7vyNrjX5P2epFJbrxxBVfKPXR",
  "key6": "2znqjmRVWkbFNr8RbvoooKoNkf7xaTTWwRAEG2GyNjqZcaDw8JQk7oUvAcpBbJGdi4UEV1dFeJFAvQ4TKj8HdTg9",
  "key7": "LSiNDVXAxfE4HdudCLyWTcDQx6VNCjxN8mxMFBW1uW3ijtSAHy7RQ5dY78DHJz3S4Eyi25tLNF4CBAV6dDW5MJV",
  "key8": "V4MTfKiE1miFe21A6azfA5Gs9bgPR82tSJomdG9LSifYicHYu2dc8SjWTMD1fW9bUogKnYoXuAt3ZzbzSeuK7Jt",
  "key9": "4tPJg8bz5yBpSJJZo5epj6Fisj3P5pLUjpeuJ6gS525oFxsySEx3fBMZCTEM9uJ6TskHckiRsAjGcjUkZFEiRpmv",
  "key10": "66BHWs2kkwsHKGdcLi4r7nKvjZdU7928xt31jap35T2bDvmKToNucwE7FkjYQrnEKB5658eG5XKrK6FHrhPCSL9y",
  "key11": "iUSvN7a21bK2ieNBiwpyydyNgDaEQUZM7ieHZrkAJcEYjZibq4Xspizm7LNVTikpcC8iFMwqApD1V88QoXnFF2q",
  "key12": "4MDDfbtMDLP59tgb55S5SpwidwFfvKGYiWLzi2FdMyVXAiR8PaQC6pdHYFGcFesmAJsNEUcFPcJA7CvfVYqowrsL",
  "key13": "JgseJnkSDPcTEnj9kJDYtDYqy9EMpTBTU9rtuZckZhpdPRPJxoqfAVBu7t5iKs16oZ1LxXjjxdsgngP65UYrzCS",
  "key14": "2FWZ3MQbQiYZNsyPGda2CjZvXpsntwo8NSFXA8QvmodPtyEBZmZmsDZ6uQZswmGkEbVQFKVQ7dX3WzmFJoYypA6p",
  "key15": "5Mw1byaCRdx4rQBgcP3siKw3a7DpQXF5yzE2MDLHT5aLFq91b7Rd1gcKjgZKq6Cwo8wCFKnERknbAUj4Dt6dDmhF",
  "key16": "2DkEYErvVYptKoqF8EtFuT3YToVni8fw6j48SMcUx46wKrqLFsCuVPPY5gPK6bPCg71BEzezokgqY9MrNS3JqQQ2",
  "key17": "5SE6mNUyswbnprGqkukMU2uAyuthK7HDtcs1CgKWjx8iQJqTYeL837gZkHNPjBsS2eHpNYgSRS72htyEYrNAHdZv",
  "key18": "6536bWG9RYDpuQc2c1hduwUDMAvAwGXiKARLZ68AUFpZsYjecdEEQZrHMtBgypzFrbKNwopCCzs6pGXmhX21ob4f",
  "key19": "3zg2SV8soBGSLQsBkdrCKJXFgrkh9KMirLwA4qQzWke1W3d7ed97jNXDs1SrQhy5znX7wkYj8EdsDXK4UrZ3sUeo",
  "key20": "5svRiQmakjf3CNYDPMNn9BUrLkQsbKuVZ59J2v1AsTFuJYB3yXan7SR1chTL4ZUHsdX5Wo6TvQu6K5s3j3BjQN6N",
  "key21": "njmHqXs6LaTkFdcpnP2NdQuRKqSfoskuA7pZvvYcN8ijQK1wrVFRJMJNmrp8PgN5rzvRAXHeSPw8rmv4GqFokH4",
  "key22": "5TRh1joMfn7hgEij4DqZBKf5kKUXb1yPHghfCAjmkymBN4N7N3ti2BaqKqPRKtVo11NjPtv2odnzWtbgSPkLtxEv",
  "key23": "2DxkeYv1HVw2voK5RAkx3zvxdrwgxAEo49fmQ8hCKzpkDUoPCtHZhLK1fhC2b3aQKV8Wg3bLCwkqjuWWx126fDeS",
  "key24": "5mhFy53WxBZfXG2vzuqEdZjKhmEPUrHDVz8Sr6VynKWEsVoBg9yJznXFSaae3dXJUAwX3jkDckSJkfp1k1mYhzz5",
  "key25": "4HXDLpJtFqRQ8AQjmjnJvAg1pcsBxKsMQmYbEoBKt9bXpbedcGRoK1af6VBJ82wU52TNbhbqnMHF6MP9cjyGNB39",
  "key26": "4SzwehuTVQ8mj5QwFdKnYaemd2ZtkjCSwMZxRfS67eib7otxgTn5exwRjdG7toK9X64WxmjrfCdUrBAhiG7i4V95"
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
