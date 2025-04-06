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
    "2cxzzxsWPbKJTpzSreyiLN8dUEwjUihBoRMLVsXRPqrrCtYUvibUduJXdNeifGwKdH8Wg2hPfXGyJ1nsY6eoiePD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxLfd7W9TsiLusjj2YjgSUHoRRYNegoKiWEyGsdSHaRAEFYMMMkdWCznbrtRRbxBfTCLiudxtVMYfgZ9NfSdhLd",
  "key1": "42VTMYivdiDsPaU4bB1LK2dTvPCHhpBP2juSmtySEAPqw5XpjA9w7iq4EnbzWCRJspWCD3SeLGDSPk3XUDGXLaav",
  "key2": "23UD9z1ww9rsdUUPTrfhvs3iWhktA7xpWEDprG8WzDehT7GpXmPhPt6xxD1bUuynsUd9VyYJvuoRPmC3ZVHpUFKK",
  "key3": "vTo3DY1BQNhcagDHs5yVLfNMe1avKrfpfVUzJSwFG4WPJ2oDvFj1yGyKtFycYdX13hdQdRrNXZoGV5aY2TLi5Nv",
  "key4": "67obfgANEsxvrgRNKw2ZCK3Zo2a8b47YxMniHsD8u2tqiZm2MmRcdiFFejG3cnKYE86dd4acwtYwbwENaY9JeNA6",
  "key5": "5U8aSKG2hJFEWeyro2DDa4dERPKbzfgputUA5dFvBnNE22HW3QoWb4KMZKgUsyAjHrQyJJnxjvVPAxL86MTwYXMU",
  "key6": "2MzR21UmtbxNYeZVLGFvCBCP7ZmNJ6psH1GqGacKUAfixaHb8tbVVzgzip9te4B1HoWarw85eLhASKhQMEkEJAvc",
  "key7": "5Y1mG4L1r9QC7zDBqyX1gFfeerhWQUBfHgP94Hvb2Tsfw1vVK87a1ZnC4oBt6kSsDPiiqYpL27v91FxAG4iMPHp7",
  "key8": "5FU5Y4bvrhA1CiYSGBm1oZQgSHRtA8NfVPs79z7CMvk1aYBmbRm1T8PCH1dZh6Qs6eXd7Hvnw3sufwJyM4cPGVCa",
  "key9": "4Dp8yENcozDnaNdB3Cyad64AZ4HHYgVSPsYrockxPMjnZNeGMVGkgMxeatJ7D1MwzNBabFqadrD1nJvcqNpJx8pL",
  "key10": "4GZJvm8GzXo6yF3BxX6x4K2UJ6ZtMzUfWo1guLjKmNeBXUvVTgbJFGuEboqL952xKJywM6hd1KHeXyAb431qAYef",
  "key11": "492VGoLz7QjfsJuzrCvUwaBnak1ERfhPTtXVthm7wnDZNBTtEhphY9F66EZjhn8ZisB7tpgsS3MqUBeCX7dw1sux",
  "key12": "3qNjg4JNeHQP6TQdFD1wzbFBRhotjZJ95GwKE9fNTcxcFW7jYRGKKBKYU6dg99tP8omK9foAL7ocZ5Sgr1yMiSkg",
  "key13": "5HsqHzGCXWfQh6xiRTuYis6GhsSMCZxWTjXNjQpqYeTB4dwVdC3VbDABRG9C27yAPdFJhtwZtNn5Q8KFtEaDrJX6",
  "key14": "43XcRC4CnrzjDuiP3gfYfgqiPhy698mAtSux1PGg2dV4pzfmRtx5MjfL5onqWMLqxEo89vKoj5xgrDTyKuVxyrqr",
  "key15": "2pPv5YtGjcDz6onnyPjNfQ3BFto4xmto37j5khd8hagnkF94p1kHajXb54NsMQshr4XSKW6KF3rQw7jU6AhSWS7C",
  "key16": "4MHFTEQ5EfrGoMjtysan3yqftw36utKicguSFM1PUvUEasCQGB6uj1YjnQj2Smcdn6w88QmPp5FZ2VPvSgNU7YzY",
  "key17": "4ZWF3jd7Givj5VdZBfuLj3BZDcs5g5f85LjGxPxoXGxWKPdZqkFCxctsga9PDwHWvVfiNg9bhxZMZ5yQqgSe7Exw",
  "key18": "3B5XbgzzFRyTyAArgMGVaaCYMoCU9F3uLWnRNnxKe4S9AMaYXJH3N3QpyDw3ZKXTmajcbu8hRhZwnab1rEpYRWSD",
  "key19": "4TnQskk1y3ZJ6cbiuZ6VsRx5FjGexSHXUTs23uEkcBA9pYhxBt5t6gPy7JHB7qy5CM8GwbDo9ZAivNiFnn84Ftba",
  "key20": "KBomdJwm4WqbcFnDh1XK1cypsd745Zb1bGFNnTxKAk3oqbqLPVKcmiiqhr8gZUhqGDvAU25vXMzab1JfZ5RuxRd",
  "key21": "fSuneiD35kxRJGm1NssmvQ2vmVxazRztfnWskDEJcTiJ2g59qYitDUncpEaCxGgbH6ctqPRnvsCAKN2kJt45urY",
  "key22": "WZzznrxHjzs8TUk97yUVFcaJ3kC82cDgAfqyae2HtdESTLNY3oXG1PZzs5MfEtNd9ZnxUZzhTyJQaEBmtdKETmh",
  "key23": "oqsPqyXNyyamKszCueuA5A1JvugQvbsAMF3rNqmqGTGjSXmF7Aup158RUzf71sUdYsvqBKhAQJiUfvi2zHeHHhC",
  "key24": "4h9f45ZZiagp78VqFhfZNdJeQJxG2jdUaTyn6zMAbZ3E9E62fYVPmFeTdpvra1xtQRUK8UDCyicx5VxnR9r1u3xh",
  "key25": "BWsRYN1PUYR2jvxSeCM1ooep2z42ZMMJmqj2Ft93kPzZYTm9U529U9Tnynv98cC63RpV4XMHbtEKyCDNRim1Hdz",
  "key26": "4Nh3eHFc19s1kSV32DZ67Wo5m4eY9BtmnoUvKoHsYtyeKb39NW8dDJyrw3Z39m9X9Dxx4N5aizqTKyYvFcwDAr3W",
  "key27": "Q3vL4Qdx5PWyynaxb6LWbtYURodrD21ba7Au82pWitrFszWAdvYmdMezrSZFaVkB6SGdJUtnVrBaazc1ZzsG3RG",
  "key28": "4BL3pMmJNw3b3hUepvKJdYTbXAkwbfQ6F9vfst7xndCpL72yBnggV1JEeTsDq4PS6547SUK96vkYvjPMTQzPjkZH",
  "key29": "up8yra9QhJFm4fBawRvrda8UzksW2Ybbuuf41ygTedkPPSgY8aCNXmRhUuaZduCQ6DmNAd7rvrama2QfUCYckoo",
  "key30": "KVbKQ5TqAnigTf4mG4vFVXTX3HGW3EsNjMVzonr5PoiP2HX4aMrvcBvY5662fEpM1VyFJSuq6DE2RSHCYuEhLFj",
  "key31": "4tSNk4UTVV8nVKYffoC1JpqNPq2so3T2toB9KTdZdsJYGimZc2JhiLmpXutoDqVtZb9ivywCghSGnSVYKvC9tbUx",
  "key32": "U2cW5ZxgBy2D4bwNd3EhogVDvDY4HqUCw8MVcmHwtGYqoDFDK2L5L23yoEmdb9Zr52M4qZe7Mpm262ZouZrPqsm",
  "key33": "4JicJMWzyYa7dxiTPmcewv4LUhicUQS1MRms3Lo116Gf5X2DUoY8L1U8mEMJf4giw1sP5qvtbvhBnoRM2iEwfVbs",
  "key34": "3sf7rjGVa69KnKLhVtJ5xgD5RUrN4udgLM8HdwCH1mKMyTfqHXx9FuGYGianoHx1bc6qJ8FCq1fx9cFKJKJCDQNS",
  "key35": "2rbs56jAqveGZq1v5b9E5VRjhCiP71ciBoxF2HK7ptbxJtuATw72MrTArweec7L92n2hPwJEzAWH8LnKJ3nG3bD",
  "key36": "4K33h2pR37yfgqNht9idD2pqc5nNgQeHtok281M4sjFmBwuqXwqbmgxPa1Dke3Wx9PxpuEYGoDUZnwWSc6ahMzYz",
  "key37": "4x6wFG426o5WS6sEuv2XU68UrJqwcxfrsxDWbY9px3PTLCd9kwPjKRGktUVcjziEohtriKCPVtNVE6Knk9C7V4bX",
  "key38": "wT2oM4y44JLZQHcFTBphxQW7pUCD3DGcF1yp8iG6JQtJADrrbCV2bPSDXSrUknLMmB6jkyL8Q2UT7sptq8LeuWZ",
  "key39": "5Z6HFKfN2oTeHo2FGnrwHSg6LFrEitKiBaPykwwHWpjZJwMbnRCcQ63ksLV38WTc5yYamWucbBD1K6SzJk5hjKNb",
  "key40": "3Xwo7xUAn9x6mLjRKVQnfCp3Z6ZpbVZSuYUSd7QJBmDgmXiM3FeNAYGCkzG3Ze4grUQGwfyoKb6E3gHnEqDvdVeF",
  "key41": "23UBXz2jbczZ7NuUBBEenqikrqvB1md9ReRXmWPuXS2486NZ7XqFEQ7FqZb4XAhZohewgmrKaPXke9FTvLykfUBd",
  "key42": "4FWLLbzgG6uudStBqwNVKNqrLGhkSxGyyqRw5dFPbUjTGW4yfbEW3F8zz9WdSLnWuAxuc19g1sQubEpmVVbzzvxJ",
  "key43": "3VT3hUPsQSdXVbezcyx2qRvjLdGAX6yioo6XCyZasNQkmBjzgXeEMed7iw2U1YDTGdn5aYAmFTEkPmt2Cd9EojsA",
  "key44": "5vakb7WrQ9khq9EFVh57M442A9a5VHUkvg4pGnJZDp7HswL17qrxFLfkLnnZNWpdCkZAQRQjYrgQHWqPierf4sFL"
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
