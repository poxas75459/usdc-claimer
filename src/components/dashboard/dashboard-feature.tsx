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
    "3eqwcoUat43rLNHaciuwzNQPf8p3Nch4iBBD64WNaTXSRQFGDPGBdyfTjmovr6fVDiAd5FsNZ5qYZoMDZEyEUzgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtpyuKg1WziiytK8gfSzcYWqtk4uEVX7nS6LQrvud1rNoh2vQjZHYnkjumoAgEEGumzFvJL3EeZvS2T7YcyG4Ya",
  "key1": "4RB5ouqoFEKjyhXLbGUBovA5bpD8TiYzvwSw5gatTiiy3oYRVpEiE2xe1QupYU4zTNEZ2bN5mi6VgMzBs5xj4k3e",
  "key2": "5Gd7mQ8m8XPXjaXYmTThYbXEY4mcLNuZq1rte62awmPYCUd2MQZdtrjfZXvzMjkL9bwHDeLVgQJh144bqcEdEQsC",
  "key3": "38inPPxBzcLPCEyD4zFnoiGSqpWX5Rgsi8dVMqJSu5a6r49AVvRXE6H8GCxrv9t3tm8piLFE6Xbq4HqQqbrBggfh",
  "key4": "3X9Uin5wMNcEipAYWkPS7f6Q966WZ5wq5WUBYok7NqSZBdUH1xYwY8GeH6Wgp9bpedfYwP5oySSfBkN3Nk6JFPNH",
  "key5": "wcZZDhzhU7ACMHhvyZAao5GsvZxWT5qrbe5wtFQHBuZkq8typ1Y8YSsQA7xqpncF1kf2cNEzD1DyjNmpHfTuNzT",
  "key6": "4cgg2Bqin6SDrh8dxtvPf1WJvff7Xekf4BthqmzsctzWLCNvCzpuuU58AcbF3BJAnYvriPFfEwgKJPg7CsEvU3Zd",
  "key7": "3hUD2ke2LkJniMPiqYn7FTNQRRue4a6xiWPMK4mC7o79hHwjAwEBJPWm9wXUgTs3ktj4QzJ3tnW63bB25JYvHD7U",
  "key8": "5iMcRA5JKryutaPf8TfmXRdv22TiGrB1wRkQ3wYigZ2JdJVrUSAUfFu3FyCuFZd6L1y46dd8rxrFZgxV6uA5Ais5",
  "key9": "3oGWxzc5mxZwZicvmGsN5FGz6evXxn2VYz2CC7XnXuuznSTNZp7RPaqHedbEybhX5R8oWTY9u3NhRLZ5erzkvome",
  "key10": "2z23Hbcp42TzkPLcmNhRzMFPjEZEaX2x8Pi87LGP2iSttkbXge1mJ5UDiF8SgE1ik2xSiBfzTKiYesNEXf7UV2g3",
  "key11": "LPsXV1hJYX7LAeTpKW6JTpWMvDALKHs2DLSXoWTcANZ2a3rgyDxxj8zJQ6hjMpNuufXXDTkRaoHWLCfaMtrU9f9",
  "key12": "Lh2S9hCNkZ8ZzxwDV46xxQx8CQZfWCEeaEapbKnkecvnhmgeSzXD3d3r14evK8cwHZBWf3KSQ58QcmHiNJSmUGW",
  "key13": "3rW2pRChKFGhCoJbn1Wg5qWKyRRn6pKHCnoNps9j6ca7SY3z2J5CB29eSwD5PGi2zmK5bprshSD8fdz3sByAVnzB",
  "key14": "3qadZnFURxrPcURQ4zqjHC6Jo3YFdiPxNeEae1i5NnjKkeqqDEy98Yk1Puk4g5XYPXtqrBWe7wQDzMpYb75oaXaT",
  "key15": "4fXCtiTGLtELTDBqwJcausqS8vsANmENQ6yu8A4c5MfArk65NEui9Aed1aJoGbWLbxR4jVs8Miun4yqtZtKAFHGn",
  "key16": "3UyhworRAgNFoAVZaAPc9NFmExRove6AtUf2Z6tPnXkUWyQHyxsRgt22eCkC1WH67hi2gtqsMArZMPb5Vp1yU1Vy",
  "key17": "554PYHNM2en4dBRZo9PpqMaF2qQPPpzteaFE48a45kdzrKgaUXRYd6j5E2WYzyyv3DA7cUboMaSCKd9iaEF1RTYq",
  "key18": "3FVZg31K7N6Ni6kccHTDPL9SZuLxkPNP3eTrVYzHR7TmqCa7vbc6Mek7wVYQFEEyNncbRGztmAimf2DWNg5BuJDB",
  "key19": "568KnYeaLsRpbu9KeEaxz8jDAHBVctuUyW27WtPWeWAqpKRGH7aRp9pYqNoto7r4NwsC2J4zjngHtXN1KsUUjpmi",
  "key20": "5cQiUfNK75qXW4txCo5VdA3a9qh6ZQQHhgEmSL3EJ64eoMRgg2L9NsHv3Ju4qZU1vBQSYntNXHaorC8B8bDBtfcy",
  "key21": "3BND5GmvFkCCLt7AWmEcE8S2jHKhoTnPeiegM4TXjvpgzdGccy4Sewrcfcx2yhjVEE87ov73pcCTqh9L1vMCGqqR",
  "key22": "3PWdNxvfJWHgr67ee6WjthNuRd2kjKSm9NGxcJruAHaFQHiuXLefBazephtLfHX2xaD4SgA4PaN26xWXWNWBBckz",
  "key23": "4n5VuLAGTrbkvffLMW2cC95sutESBhJrN76vqmGrVDzcF8VaUKajqo84V7NameDkByGr8A6rWvfipccUvZ6aYNfP",
  "key24": "5ioJnJLLyntHTqaVpJYPJdTfZxFPMdDS8CSU1BpkypLmEa4MAWBHBT231cfPep2tHWQY42gDtL4WRTBTKSHMZUKr",
  "key25": "2E1nDkUzaYivZRGYLqcSd8w7AguapbFBJXfp35QB9oguAkKVwJBqubxvYxpKSdeSZzCFS8TPzxwxiNhfosqikbw2",
  "key26": "3dgUPGrATjGzrzH1KKn4c2tFWUbZtbbdG41Gsg9VwJxcShyyy6ScF4EDYt5eXvZejaqm21dKFzPFzoPUUdYQR5wv",
  "key27": "4KUCjNjNP2atpWmG6RTCArsJi3D5gqcD4d7SCnesW7Byk7SuscMNFmGdmCD3NXtJacYZ2GEHfReUuzP2xEQ3oCWx",
  "key28": "4Ja7VxS5BMLbyRsyApbmZxm2u4Q6xwALfXcm1sEerUwn4EXSUqkS9jGWk7sM3Q43SeMNU2FDr16KRZ8vE8ZhhCxx",
  "key29": "uwMtXozQK4uS3dhrNFSmL7dHNhMK4hrZBAUmj7AUFMvrBafjJNfEP79FsP9H1EAQ8QtXGkjtLGfpsErUkbySc2W",
  "key30": "66LikJBJAVgNuWYAmEaQb9MiCfvazX8sKdXKwW2NuP6obkUJM3qt49VDRvRzLWxa7GaLuijYtwDMpPukZsGU8C9J",
  "key31": "424ygGq4SJ1Z6ANdGtRqx8KzSFLK3ab4k3vvRo4RYhT7XseZj53pm5fZ81jZeawNEKfDE4vNyjzdEBHjkKYrP1C9",
  "key32": "4MkqemuaGE5mG4RH6wQsDJzKYJNWuyyXKEzKMdqcY4ugPP8rVV3EbNtWcWyFY1RWtmV19zYTT1wvPJEw6Sox3dSB",
  "key33": "3pFN3QF4anWL2bxYgrHDdgYSXbxV4CVvMp2TLqQwNZLPYvxfpGMYFUvv67zaoGa96ZBvQky1YLJVhsR6zGpgZWRA",
  "key34": "2JPnWuva4ekGj88n7ggHarwHarAvT94J6bNAyxddtCnqDuJJEy6Qf5WcHW7ejr2vgS45xQK7PN8DXt2XCm8We8Jz",
  "key35": "5Fa3nE6WNVzc2aG6qS48u3dW5gS84g7nnKkYscX7XWbNP2gNDStSNyiBwqeDn7iFDs6q36tFdvaaVMgt68NvDiZ4",
  "key36": "3R2D1YZvY2jFtYFDvgkLi5pvUh1rZoKYH93cfJFzN7zVRvJ5S88FcKGrUndi8fUVfEphfUZvwDnXe6hFpnAvjKKS",
  "key37": "4kpbWmcBJSgkdVNcZxme7Urw6T7HSPeiyUP7FZnSTuva7tzCAJWrBAUm3WF3rvTuCgU8axvhd3mbU1HtwUo3NBuk",
  "key38": "ououQgYxd4z4BaFeyWrYVHBwv8LMJpFbKdduXLg3VTDsEvSAcAnvNVfExvSTy4xKPW6J7sSJ99tfYqCHPHCGjyW",
  "key39": "4NSnqCdMbsu15qxv8zimM6YFxpDvbdZ3MQkDDDmoG4YVHzb2fQxC3DBuhiQ7FQUHXwFL1WFERhpqhKw4ZKhCBbZt",
  "key40": "3Yz5ZCFZJMWZ6eUzDNeknGV7zn3M6SVSru3xWmY6h26dJ8Z9kguxQuYK6ZVdXQzDDhjWdRJ2cK156Rrw4qrMk7kH",
  "key41": "3CubHLeFVsTnrnu2fXbiadFLmKnAUYbtELoQhKxoogDPJErkvPUQ6VaxeSez4gDvuy3h6GhWZHYYypuYR1KTZusy",
  "key42": "2kKjxrj8wy9pZaZRquXJnJz98X8tMLmcm9Sfmv9UGJid3zDtsNvWJz5vHoHKhEEAr13wKBNQ75F7TN5i8aTKimyL",
  "key43": "4Y64C5qE2FDAqTSbiAnNuL6h1JsKzhY5wLzEbDmxKyevfeiro8vgbUhy7j6AQJgzETddz1QDp7Vb2nqFZefVTXyS",
  "key44": "LzWGz7DPD9SFsfaRUE88R4ozbesqTjTbpyhiacxzF6ZSqoY6GgjxTGn3arsZnvvYyNrvpGw6BCRSW3u2bQqnLj6",
  "key45": "La5XeyRW65RPNey1dLKnmLvwD1qK7jq1gnpTSytr4ioY1v92SpANvEbNx1sbqaknAAWxukpY4E9uxaEU9AkmJ6s"
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
