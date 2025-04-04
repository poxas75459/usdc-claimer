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
    "t31bij7EbPHqcndeFzKiediu9w55bo4xah17JXx3uShhxdckMdTuQ8bHnh4Q8D8LB7vF15ywakM7TxgMVMMhAZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3Y5S54AxRMjvNkWGvN4A5d63BYc2nLUsNLeHrkiHfhNdf3BZdUMDwmvHcmmoKLtKfH9Xc4b11UesTPFAZfqZC7",
  "key1": "4A24iz5EbBqmRbj4RMRxvCx5Rem6PAjkvBBQputpyJL2MzTgNhpVPiyUT1NvHCYQzHkipDY2Bs12iL2satUeN1MX",
  "key2": "22idWhqqYQXPggM1zhN7d1BTz9aN7K5V78srqoCBUi2VzyqKndkCHie623i2dGerhaeEYT6t6LZM1Xv7mJvmtBn9",
  "key3": "5jWDfELJkyUJhDKcpPrLhrejZkawytXS1c6tpwvnfaZnhmLtj6D7BmEh3Dx9YJ3a9k3sfTopmjZa15kkjye62fX4",
  "key4": "32S3eNoTDdYXBWkF9sDDDAmzjBthzrddtxKu3GCs8v5hYMEfmrJ14vBewFJZNFX5hQBgL77Q9BmEyKvUsxXzeURx",
  "key5": "24hNvkxzeZLFW6Pjh3mYm1UzBY5pEuWbfXbTPeT2Lw8Ysynm9bC1uV6sSyQ5h9iGkLxYvVCaj7DUyZB62aKUgQBz",
  "key6": "xV8vAnxzR4VQZzSr6iqSzt4aVjeBuZrt6TvRc8wjKJcxhEuA3kvj8xMVZhpzcuy9rAjFo4zU4JjnMEJkh7QLuzg",
  "key7": "xi6pwjSfivTrvRi3m6a7rxopQn6Fa1xDbRHRcyjf86vhJgYiSv5ESj8rG1LYv1cUZ7y9WjAaoZBMKfUymaqo926",
  "key8": "R6Pq7FQaFgkX7h8PxkNZKYr6viXHMVxVUY4MATvBhv5M6Ci7GYgmFLMZJAVbLxBJufYAEJDGBBKih1HutQYenhd",
  "key9": "285VVfQTFsDSS8dkDaJVthpJRxXDdJxp887xhRzcWFV1Qa5ot2TpDbaDcHCVmYDScEuy2ia4F2BHHbG28tZ5EGYU",
  "key10": "5ur9FF5yRTUB85Dc1uNmKHRA9FPudbK76WE1sUtSXnwVLYvc7E9bbrZ7Qci1A1CedrwpiU29ckGncCpTjWzXn4Bc",
  "key11": "2SLQbpftAW1VW8aRWoBoTQvhnvW7hFTgmFUzhY6NxdjFmX54AZ7aCFdtdXBCyNiUYgyt129P9nx2o1KK7JnmEeSp",
  "key12": "5sD84Bd3Rw6jh4e74EXU3b8r6MhVzfF2Z6428myt4Hzfgk6FZMmGqbciqtXNtNHnGMNZEemFtyv61ZL27mWxybKT",
  "key13": "4gUEVhYEgGkX4eBYmHQHczZQAtPUAruTQX5TNkMjuHNqcg19zu79r61tkHKpDkC1BFf8ctyFPcHKAWg3hsuKwMHh",
  "key14": "4K97qZ7VtdqkW9AhFtREUZPhZqBFYhXg1JewRiruDYmDSDq9tBF1bTUTHg4R4ePHSD9ezwXDS5WF4tc66wEA62K7",
  "key15": "Bs3hDrJzf2tgv2UuYB4efbTH6v9Xh3yCt5FZuFVz3uEdqM321rY9V2qUBYwm2Z5nQNdGCkmdzXcNLbxhXAcFKwh",
  "key16": "4wDjCH4aD2HoZYDY1riAx8VpLj7ememxpThqaepT1g3dLjPEoTGxp4JonWNprnxVyDHN74FmMKepH5QTRrFj1Qij",
  "key17": "5xJ56stsCCK7u7zQ2TtiLkAxwjY1f3oNXw6LS8HxfZ11bgwx5tqQJR6a7A7a3DJ2feR6hVFXAAi786hTZR92KGjw",
  "key18": "335u5WLWcBLpNqsZcE6zrciSG3FTC9enfPfv4jdyRVxjz5G2FscCAi4CRksuczwMvWiBFfum9yqJNWUSBRgKFC19",
  "key19": "2H4bYedUdp5niPxbikhAB2DYfoAjacdMugV6FpAeBiG23ceJX8736wKiPXoiWGsPmWzvbH1wEcPBk3KyuneYGALa",
  "key20": "4XgdEic9eAmfFKhCd95XVp4XbfacB9j9b8tZAsWu9DV8VRjPTQ93r3f6bW1hJtnTwZLc8JT44izY157K9ThT7f7x",
  "key21": "2JpHfQMkKeGCSfkEVvwcgVCebzFysndCkxa8XV2xBVu2gWs7F3EjED1DnKDoHp54L5HSwcEQFkZtNJG9A1xXNV5D",
  "key22": "pmStQMaCv8FFsh5Lsh9q9LnavDNWLz9eSLTm2uhBZYtHeG3Snxi3vCQEN9FWnP3bLthMBgyn95bN2jxKRDW4oy9",
  "key23": "3yoVaji6WE5HKacqrPTsTMVQDQGxX4YDaPgdqXaHEWVRSzAxMg6LMAicor388NBKK1XVUh4qVZTXEojZVawuxnSX",
  "key24": "59RLFaFX1UWg4eMJj6UwccB6cRR5AjFpTbrX4XbhxYWtd8nrAE9HaAFXY9vEfog7mcVyy9MnfF1ovT1imK58sbF4",
  "key25": "QbJRTUoHKKdw2grhcdapkSuxgW3YHP34N3jSraLetBnANLZib4nxtxxWL38E1otveKpcLtto44ELTJUkzfZiVK7",
  "key26": "533Ph7rw2Vw1higwbw41UJG3wji3XNuGewx6JThck22hgGdBxoCqPmawhiGV3yLWJjKku6CDQWPErG91ccZfDRHC",
  "key27": "5iQj2rh2SAVZjhA1a3zWeZvwy9kxim6f6bn2grvpz9vWbmNbDQkRKEoxbGcv47dM927ZPqePNr6rjcw8NotH2kUq",
  "key28": "3BbbKb39AysFTXswZ8aXYJ3rucECMHBMHfxvvoAoXKPXhdBkxxNwxQwMkwhqdrUNvbBojiPNPTw9QuvyLeBczB4L",
  "key29": "245X4tVk47p1TLWWByzBktdMHkx2ByKhhPydFzPEwtPCHTi9QXuuvfriowfjNbqNZ7ARXiwuCUR3JQoGDmdSgzw1",
  "key30": "31FYbHguoj2qdU9yaG4Dkp6E12R6CaQvYT9jGu5S9ZSgfVMudJf7c2YXnK47sdJHBn8gsNChN9AkHpkkw9utweNq",
  "key31": "5Y4qbXLBiEQBJ8bsZLnMdKynK3m96DPuPzzDsUma4szNdPXwszRwebs9PwPxgZdmCa7ZMMRrFyQj83du24Y36ygv",
  "key32": "4HpBtRhoNqtLuin1RpH5K22EKjDN9smFKroM6QUXK1VAXj2m1co67V9GDj2zEqQSBmjKAUyBJhsqUMFguJLkxTfD",
  "key33": "4fiJpSEeZPBkhVjM9D6EGGzh13b9RnmdUFoRZbZieiKB7PR1CroxoQ6epVsJjHNXpsyXiwL1RoJctxjLnFix6SB",
  "key34": "34miQLt3MFrzP2LP1r6ULpdpE2apbMbhAiRc9M9cgHpy578K1Qeuz7jRsAH595V16VfAzJya7y14KVeX9fDXFhzP",
  "key35": "3ELYfRbCzzAbcLRzsDU7r6JC9m8CC5eP8LLAHMGQfdTBmUmyLJnhV4LAwNcvQicey2JViyH2wAfhTuZpEHnNZGdJ",
  "key36": "tse9U5cz2iffyN4eN7i3X7vcbJTU5WFa9chB6YEDjtG3waj8CE4AR7w9aUqaPQE6HSwUCT9YE5ZzCVDJG7HnH9o"
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
