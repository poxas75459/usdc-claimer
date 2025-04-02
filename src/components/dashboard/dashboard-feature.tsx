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
    "61vHBZZWK2CGhZdtbCZzDAGufyKJssDTT4GxXp6oVpnf5VDDcw4eYVyzXLpdefLmKMp9Cp51smdMdxFtkBhN9JRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUjmRme5RVepJLuCQckcNjVbn7SdDH1MABNwdCEmCyGHSXAeJd4dcYfp2Nd7xZ2MT2zvtv39766xan5Yp9gkLtW",
  "key1": "3mgbHQCBZRTEf18fStPcv8cH4AhadU42qumV169Nzp3C2i3rhpesfJsM67mZsfvRphuPNFZDhmgMzbWPSChgGK4E",
  "key2": "2pMgMZKt7cTrcXrcNkuuaUFcgExgQKzc7WUujpeha6JkwseYBtPCYPGyL2e6f1qXPVLt6mTU4zMpnfmLEAM8fYG4",
  "key3": "3SLYUJN8PDMkKTYA5cMQfd2WhuTmyaLXfGcDA7Daf6eVWKyCGvrMSqeMMDJimqvtckvmsqevs5W43MKsv2tZcbDu",
  "key4": "Ac5GK4wbo5YkM63aNg6yChSfyJQ9VwTJahkP7VifGJqmwaBKbSWUghis87XrhW38LGaY4M3FN6uUn1U8ieLD149",
  "key5": "3khFzaGrqyG5J7TA15CqXKByyX4g2MN7kjQDMTpj7vTcAYVKcHpEGjmjfDZNPXJEfLennzcpGu4ui6bBSRgWnkUm",
  "key6": "5D7yeJk2rgb3ciEcefM59HkZpFVLGu8zr7a4wBYbr2FNBu9q3vnA8e6mWXuBwBSGCDUFKBn1n36xV9PqreLYDBtA",
  "key7": "4Lft3R61DyhFEkEkoBy4BbvMCTPnyGLpCvMTGQcKGZasSHFd2xBNp3t85p8v5z7Tkdsz9iGYs8YSrJaGpBsUHYd",
  "key8": "219foV8PHbF1fpkbnS5UviF96Qrgch9qtU9mC1mhPLpgLcGUTJ9bpcqfK3MrmZq5fKdCx16dDScW6CV8HgRAm1H2",
  "key9": "34Rckr77RLVVGKEDvVNThT7nEBY3zw2DqHvAm8fnuqNUhgabJMK2r8hV7o2Ddq4JS68osXsGcqgRnpmtjReNF1BN",
  "key10": "3EuWFtjBUyad3WywtYfjZRfxDBDXP3NYRHU66hCxQPwswG6zEidT86iAP7uio4YPMUoYphQtUjQ5BQJUdeQMJiiQ",
  "key11": "5ZooVaSQnvwJStUG7S9aSC6Dk5o8evXK3FZ4opbnkU1tvLVdnrhqJ1ibsv7ians7KMrCjR1fn9qk9djRo9D1XVjo",
  "key12": "5WoQDzeG4nEVdfEc6LbmVUwNokeM7hym55qjpErWxA2naeGa2A6gVKovR6xswgVSC8scLMFMGreQtnZsmG49dUHe",
  "key13": "X6BeN5cUR8QYLk8WADFK4LQG282gczddLQ6RtaFFek3TbPF4tEcH5WXUbRnUGyEf7Hch6UeYowdWF6HKs3vt7eA",
  "key14": "47v8sU1xfqTW7jFc26z3svnQksH7ybvRJBvWpuPbom8k4t6WGrb6hrabJtqtP9Mh1Qi4z13xbZFFiTTN42cG1P5K",
  "key15": "5JgooVmonsF8GKLg2w9RXmKwGSCQW9vEWB6rZSL9o1PCKKBZ3jw2Jq4QC6cKg73RCNnsiReTndRGhMxCPWnMhmdb",
  "key16": "4pd5h9Lj4Shbye1Db7UnvoWRFrV1cRg3rjUsBSEeTbWwe5W1YM3fmM7F7b1G7sEetLZbduoZ141Szno6Ja1bHkdA",
  "key17": "34UrJngvDKfLzNVpsfPiWbh1r1u1TJxnkPv4JsNgLhLnazPXkv8KLQQ1guQ1JxZJRDpKCCitbjHb4b71YQU8NWQL",
  "key18": "396AUFoM1UP7TAZc9EXEFXaA3F9pCR4LTGyMtn4zyndFTBDV1wcGzxzFZTw3DBP2WgfFmZjVbXD1vwNdzhyejT4U",
  "key19": "2ARnSES5KaJ9pE9Zq7D7pfD9bhpa1GZ9oQ11swLWZ2hDmY87ovUhRXZpK7Y6Bumh1dkk9suKCBtpxdsTEAWj9rbc",
  "key20": "QLPteqiSxWcz2tnRWQWAHbpfqyW1Ak2nqzWqU9doLKwZkHgQZQQJLU2HQqF8CWiBPLM2Pp6jzshBvCBeXxGzTNM",
  "key21": "3zndFaHh4BpNAuCsVvcg4wwVW6yNtAWtdMQFc7fes5WFUqqxhX1kcrBkyG79LijsxMN5TwBJs8LRh76tsKHPPnF4",
  "key22": "2YSrQgYynHFZ7fobEMuBYXGsNMbzuJCsfcS2vvzGG1MaL3eMaXoYScYZcmKEFKKgtTDQGN6tyMhW6zr6XvyRwYNH",
  "key23": "2at2wcNvcAoVtztdDBpSDbUxTfffrSyHBKe7JjqbDnV65KNfzWv7k2pXmBSWna3fMtHPmt5K6EeNjZgZZCp1oHxH",
  "key24": "5E23gHR1J95EjszcsWsc99pJbrL7gf2K5k3Nc7ybPfVdM3hcyAwh6aHotFYc9w8heZRw3PZJxhiZV8GLNhEDt3W4",
  "key25": "5v93NN55xi743iku2r3LYyGEPoikeuRt2gRWUWotwmCmuPFKfa7LftSF1BGzenT8jvu85byzqbSe1yNNGUtYxDoM",
  "key26": "5Dj4JW5a5kDgEk7pMoSzibZ9B3Ts8SiJLV4BDLoWeqjAWdhoqaAZpxK9dCVomi4c6xAgH3pj8BUHg13dyS5Fvod4",
  "key27": "4N9F3j9iZhihq8MyagBgT6KvFUodz8XZUEcwcHhoRDnw3dobqxQQrGuqqTYJihvVXgPrdZDQ1hGJX19ezCM39vrg",
  "key28": "2wa6h5xvSSTFcFj1USQNrbb37eHb5jTXRxqTKHtPgPctYYHsQGpM1ry2dTmyP8tGLRmmhvb3mrcr4JKaqNUVs4ap",
  "key29": "2NEFTCzY7pmYDG3VDR1SDYYTx7TvWtKBCzhBJdNfj1kqL5qwPqFsniajdWhuRQv2gu8ScsJ5jApGVCWzr418NFuy",
  "key30": "3y1Gmn32szb18JWboePNYUy4Nc88AECKqbMFz5LfT6gZbXt6Q18c6C3bwE4mR5jrHUKhnV5APGshFArWVW9PzZy4",
  "key31": "5RupNrMjTMifU8SAHkbQrVXe9Yhi1xrNquBubobkXtKErhUSJeSoVVJt1iPs5SdU1gkDV7Y32dALYU3R5mpefpVf",
  "key32": "4eF5TnXQf9SKgXdBrG7N496XRmCQ3iUuMXYVYqwvvY3hazeMTLEJjeeAeJah23db68sZLqmCKHyyYmVw2vjeSy2X",
  "key33": "5LWqxh4aBXYq9PrwWzAouDKopQqUpJVyoSZiE7v2uWvz8Lh4xA8WU5vX1QgaNQtAgTxZvZUNc4TMjET4MRLCCu3w",
  "key34": "mHe7mGbYRworDTPx6oRQ3ZDx2PBPZSpXhJEgrmAJXQT7xdpds42AMhm6sRpCGLutBQ7a3iC85BfyRHhVXzhNtxX",
  "key35": "3vX2fdmbtAu9km8yTBd1JJaWwCJrbd6hYTwbDjm1HVaZC9KeaXBMB59SqqX42CftZkw79DkY843ZHUJCbD7dqWAs",
  "key36": "4w8qFNW7ssH1kna6p5jZJW3Wp95koTj2g9SoHrhmZoQFPVVgGJoTmxAh4sXc9eVhHZ3iqrR6EsgZ2CU31v6RH7mC",
  "key37": "FG2hv9f2Z2d6SBvWXAyE5QKeKffnQUyKJKUXNb4AvszovTpqBZG6gFmh2hY5kodCzLsN9RqUaS1PxSaKGxQNUgq",
  "key38": "5Lgdix5Lomx7Vbj77m4dHKAzevKUwyuBZZBgvYejvj14QqooxoqdLKGg8moXEug42Se6CJCxedQxdiZkBc21eENT",
  "key39": "3S9v3jNFqjmsUADEGGxb3m12HE4XJwbzsvjSveJzqLTw8jP2uEj99uQdWHCFcfULmUghDqtjFPfkwnhMqyQAxFAV",
  "key40": "6LcY45TU3HQEDrLDkLaBnVwYUeG3QxDX1yGRKbm26huVqvMeco8rbyvoD9SMkJdPb1ytXUPJHNfAZJXdTh9GaRB",
  "key41": "2zsZTv56JgZiQSdxSxvLszfPquZJjN2V8NqaQTZqJ4JP5FQ713Z7LvAUyzSzXGihyh2FqdThxwNQEPaJfPzXBUzx",
  "key42": "5LdLKPCnGurBA9BghYAwFmMKZrQrxaMhRrRLxQ4qqWA8vjX2DsjgAAb3dTF3pEzMEqjD5b4W5P3Vf8GQzWjajq17",
  "key43": "nmwThWo3eU2ehKE611HqVRxtz167N9k9QK1rExeXfiktFWW6PjSTckd9WXakG4y9WiX74zNwRJhBQ8BkLW6iy2P",
  "key44": "2b8DLk3BekCo6aFJXNP9ENH7ULPosBoPxniSAirVUX9te7rmTo3CSrsJUFK6HzSSpSTY3LCMuvAV2mpzNZj6pFGf",
  "key45": "5x8MLcJSMMuG8SS9RHCRfAVPrriXAAowXnL4qrToFtSsQBaytWG5huW4PMsb7DWaK7vYkDBNcCPWPLmvy67sowXa",
  "key46": "3fXBZTbCy8LD5SksxZVfJtEFYnBGEU2dvbqr6zTfk9d7FCMTpGxs1Enb74g6vMgYVZpMuemfXMSFi8jFkKprfvPw"
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
