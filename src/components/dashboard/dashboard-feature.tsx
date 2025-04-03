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
    "2mDg4J6A6LJAXaKPk6iZDKzBF2Rv5RZQmnC9V8RX58E1dmEzuG4JYJznXe17tywwvz69eUR8TXp3p8HhXSWTH21s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qg5xihJGr8y3smHkyKwwmbwSJGNh1q2qna4H6o3amMFLmoc1vSBGxpGerpMXR8mMrp8NJVY5xDo1CUyNV6ctcX2",
  "key1": "KaHmQGGc1nmHP9ZinmSrvBVjc1DNNrrSzSo1xtUmK7DiHGnFAeXtyE2TLt7Dpa5NrPQfbHCHYA7oY4iWAP6m7jb",
  "key2": "4kYazfehrHPqgcnVurpF5haRsYi4iDgJyHm1yDJN93BHCVH4M2GFgexcsWNjMZrfgp3JugqBgJpTxS6pKwK87cVL",
  "key3": "4hs73oKHAycudMikY8k7dE8YWAtfUVspT76eY5KtFuMRMhX5e6TQ7WxbHVPBLEVGZ2cR8D8dyBP6cbnfxX7MUXXM",
  "key4": "5UAGRkNGKuFSEwyj5J7YuwDZEk1azqYCwLbnSqqwSefwP5kE7YoRd2t7bk57Di6ydXx4gP6i6xTwVKGEh3dkCgWb",
  "key5": "2XT1YVejFMutBb7dTr19myXJCb6CQpPxPA2sTRUi1yeYMwRPv1k4tGzZw83voNQoUTAJtGivoFNJR6JnTKGdj2YN",
  "key6": "3jJktPLiMT2qBXJKqK3MkbUHfqsAaw8xLFdSknJLhDHPeCb18ECavBBmzMy8HYAaJKpGgC7Dz7aDm76Sax5ExMhH",
  "key7": "2JeFtigQuMYnGtqgW5vUiCB6EbPs7biBvHhZEzgEkDYCkxfCV3HKLfUsaXUCx1M2ZWxyDTL3RL4Utph1vUx8zriU",
  "key8": "4Qanw9m7h6JqEWSgSTToVRqwXsMu8TD2yAPcJAQ4LT2vLANtTxevj23Jry4KZY7kFU2sZTsgzKnKNKx9dwcmNK3C",
  "key9": "5QhSPzjGdVGPMJh4iMCwnVdxshue96chUoBGweg1PRMVoqoWmCwe1LHRTRqRCMNu4quxm5ZvtPg2xPpQgDyQaWUG",
  "key10": "3yrYvdaTwGmZVW6N3k6zUtJCLEU8fKQ8D2uFREGTUSNmppcPBvGEzpjakyrSWVVPYPL98ZKMoS3ocmwaxgzgrLva",
  "key11": "31QKrwSAuCJ4Rsucqhyzrg5RMPhYsQ81qutSQHFPkwhTcfGweu2TB6dV1H4ZweSahfUPyFYMoYUp1XqtKb7yr8WB",
  "key12": "5MAAR2KkuP44zQUDZ47TCyh8XwoHLX9htwkbYhWWnieLmna9A2zzYeUwTfKfuy7ayrrytwgBQ2JAmuwHzW1zLNUZ",
  "key13": "3Niw1UuH6Gjsdt38bzi8wg384DQshZ2cgrrBE4GDk4y8PyB7SQZrH2Y94jDZDjR1z1Q3tLZX77SBPJ4kk2jqGEVw",
  "key14": "2ze76TogBzs8wjszxZSgyJfV6dujv2i4n7yoWsBexk6L7M8YEVySuvcJ8JYj5HtJ3ZR4FYq2RKusv2sx2rURZWqs",
  "key15": "57VCnpQVAW9koR1dru73tCMkXhvxoKhGRTqZw1FbnA4G1uyLUt9DaXcG9hDjWSG3MM95ScDgVTq5uma7M3rrq7pV",
  "key16": "3zwimmFCCAKEVGEa99HKKqTEQrsgY3F3ZmcdDy2izGMtN5wpXo8kHXJXvQh2Qk59tQUPvRv98kEB4EFEaYoSQiMh",
  "key17": "57ju6hHcFSFYp5XA24dd63arWUQFhgXMFvqysvrQNkJPfu2oHMQErm9dAgzyUY3KsnhcswV692oWxjQMoAPYEi5W",
  "key18": "3RSuMEEdMVTM91Bn5qBza5MR1he7E67CqK75d18ex8dz4SyfZoiQaXvv8jw7SfmZ9ngJb75qvSY8eU43awp9447x",
  "key19": "41R2dbjbY7cBgAuc2XcnmiuhUtYorJSFZ813hakgg9amPh56JhizeY2KUgSz1NN3juP3sndtYgDDCQbmiKz5LvGf",
  "key20": "4NfkEHMWQDMgjU239RgVVExaCUQJw44z1fKbVFojecf1iMgmbzvrN6rtzY9uZ3UaPnkU8FPgiZWbrW4UskiwvjWn",
  "key21": "2WbC5zv6Q3RPQY4wgeDKboU4akboydQmYC3RshnAdBNoiHAEX5Bgy9N6tbsvPptGuLANyRtcRsMRb5do8oUsQzad",
  "key22": "2E5tirmae1XgNRQrhGHMRDENy6xtVpRKAUShWCTsXce1qNrEHighz1VbhKN76U5xSBhvmC2fVTmUKBcdPd3YGzjp",
  "key23": "3hGR4PpU47VJmgAzSEPMTEXeSDpZGN5mrmoZ3mdyZtJEdWeWe8xV9sNrdnhLoq3Hsr5iX4BznfgjJmhBQpyoUuM9",
  "key24": "wFkekhanNNeMLZXc6mjwPUL1dUA9ifcBjMNAyTyXmyXCgpDJbVWJHaA484jsjw35mW3ABoutbcCzpCpJhExaigS",
  "key25": "3k2Ckvd5JsukhQuVM9YGCjPyAN4ASeizu5Zh3sKDnKtUU17ohXcGacg4Wo2QErws2bggtupnaRpc2ibHxxCqJMDR",
  "key26": "kFhxVyJikZnXcJXzWiZ5gTVPdzmuSRNQ4w3e6LBaWSTZhSb17x2aMJjS16gS4okSpDBp54mdtx59HVXNvJ3riNp",
  "key27": "4hbYJpKfe28ewRcCdeCcDL53AA1w1hKMMQYqimJQyHsdnxVoBtZd1N6L6DYx6PGNZjG9UFxao7i6Wm7y9BcqarDj",
  "key28": "4YxWWLU3fQpr8i1nneyHCJ219kRZgu79UoQGPMxeYCansjzGhk12G6Qp8MkDyn3wq54J2MWThV2cffUowXbYfLQT",
  "key29": "64Z4gVskdFC5vrriGmoEVEjeaoqiyxvDsja5X2HvE4qxJN9LfXAZps4GH6NFWN1jdeB6D42ZGW3aEouKVH7TkqDB",
  "key30": "tfW5tbvAF7eH4wv3wYzZhs3X9S9TrnBGSCBNcv5wqdNwHrRaGiRmaZWAq8Aq3E161u7YXSLSjVYTdDA4qXwbw4n",
  "key31": "2DmTdUJBQoaqWYhqBrFdnA1rQTgXAzmoFU4FRqWvoWenwE3Uy7k1j8wqRi35FNsUJD5M9ycLFhHwBYVo1dhVaaKG",
  "key32": "SGvKjrxpTQG9WgYqLP8cSWoor9LXGGTWvAZ8A8e1jHMTYRnncmbebBHZs8DQn7kUswapfrsfrsqVsGVXPQ2P6qg",
  "key33": "5Qj2fTcjngyyTChrux9yyc4QVFwYXRy6WfY2MFLvanFL37aFqCDrLyWTHfG6G9VmDzB9idXKkE22HQEKRsdnT8oz",
  "key34": "5RtRKRvRStsATPedDdqhaBjBkc2Dc5Z16Z4XHSshBhzQ2kqd3yh4MZq4pfwPTuyjqsthqLcwWMPLvfoPuZULnW4r"
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
