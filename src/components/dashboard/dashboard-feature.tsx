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
    "3i57DSDa1nn4aiuwKrKcmcynMWBbYkDs7JnyTJ7dP6cyUApgJQKTNmeTs1Daxw45UqqhUquDjs3bsPStfwpAPsYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fy2AgusKDvyZ3gF7Wt5qNxG6EtJak7EW2qUBQmTDaiYEqS92ijpQQyk3zZXmmVc5kfiNroxkWFACS4FfStG2y4D",
  "key1": "3kbpTE1RDTuPo5sDRfRnj9sZBwobeYqshHqhJtJ57PPgXpujRENHSCSSVf1hPMJw47wPDGKf2MbnPFW838veVXuq",
  "key2": "2zfnnW4YttsDXAucTTkv5Qs26XkKE6V2E9jChwnffpxHDNpuPG1NYsWWQUhNeARy9sHCjgQh348X5bY6pD1ay1Sf",
  "key3": "2oQ3fnhvQmJrvGzNCcyW838yEeq1mVBpEZSuBKP1Zi1zGoJN1AbQgxZXTAhyzaxVjefnMEY9Q66ywSzK5vRHsg97",
  "key4": "4PJEKe7XaC6e2Rwf13tddWfTaturmPN17sbynRSXrjkT4DXFNFnwg713KxiJT1RUvnE3UnzjuaChcHeCLMWeoGzK",
  "key5": "4RKmukzEzCNQaSRRCdPeLEWSVrPExxywqdAAZhqgFx5XV4RVr6WFM2BnqWXbYZjWzYGh9wYf2kRFD5q9vWZBjVFq",
  "key6": "2TuhKHzGgHCdVQLTfR3A3q8xqG6zTPTiJjinJXkHhnuMQN5odVNPoBkEcm269g1sB3TVBLv8xXMkunWfctix3sFH",
  "key7": "49EW8qagNcds8iHj6baeh1gLfYT1TjBbGEEs1AHZNMPRc96gjRnjpQqQChGrFwitzw6LnQXLgViZkz93x4W195Js",
  "key8": "3Qd5LHeEaHysijExieYB8CfDZJfJAyj1vkWzf3jqN3U4ZV1yaH2WFwo8kYc8jDdC5JHDufrHqDkTR3ZzjbR3dAuk",
  "key9": "3p3vBioz2ifZXJ3NGBmjhNgTACvTKjRx7miwvYARDk2Y3pAjJun5PZLfyQvmfndnSUMmEuemhwK56a47rAzyHxFE",
  "key10": "3uDsn3LJbawncYW8y13tGmJ1YGfBBnRtFFRdFoSqHk4V8q7Vw8Jnav9pvQS51fnsvW5LgeqHcpAbq1nvCiotARv4",
  "key11": "37q36B4QrKAjQzhoVWd8q19px84jmyn5Tc9yssnge1WLwceJywV24yizX3KpVC3NB3ud7gKLKPR2xJudWBJg5vvH",
  "key12": "3v7X9bRA5pkEZUTLZWVN3DXzMfVV6yLFqr62SAU3jCUTpM9cRVMTLmDMNn12AzGywy2fhoYr5gjq7bjUGexfUeSD",
  "key13": "48WCLu8fGGDDEZGTrdorar82Jv1peRPCDxmUsojwya7MH5V7PL2zwWCQf1iVhpeaBmbnJtMu8KqXbkxW7VRbG9sP",
  "key14": "3fqetzGriZUsRxAiwQxE8GDs93xasFRt25oHzkcAdP3DsDUMCR3hgRCxuAZ6PNg1pRV1Zbu91r1cqfMrg5yAPcHL",
  "key15": "532Wp8Vmg44vJGDnj3Q2c6GxoFZbRkMQPDHb7FypKUXKzTavf4bAyVX5DwhLuqwPvyvdWaBL1iW6dtK34MVA91iw",
  "key16": "54a2YEGrgdCbscPpUcLs8XhQ2UyKdvrhcoD46csGdzKo8B1x9HK1sT878BytqKunCg9fLm5xj7jYHigoi1M4LhDS",
  "key17": "2RxLPQv1bhyNJeNoEZSEWTwSFJY6J2JBefhTjugAStruhrsFKKNBTipKJwfwMjD1Q9DTeKUimDLw1g3aoUP2uPHZ",
  "key18": "4CQm7vXRVxvLc2JpKLTy1gdyczvud5WzFXLhX5wo3CsfpPZE5ZQMUg2jLNpeE7uqKSQJyPT7PbqFK8WjqaUfpWLU",
  "key19": "5FBcyavNyPR6S2jtaUHEoNA5Z61VJECYBCZnwjPz684h7Us1Eyfowh6xrMPPP4GGbPbCrtHnj9VdBkgcX1JHSit3",
  "key20": "3aQkFSj5exjisAwGyVhyMEM6gK8yNCJXfWhbs7gizoo7Cj4t5a9bfbrAP5EukZHh1cDTnaPsbED1GQtrECeKt6HZ",
  "key21": "3YGGcVjNdx9KiShMvMCJkaJdPts6jbeWu2noNTywqyij8C6xyPRKJ8mJoGYi3Q32AR22btKY6dpbsfHgrs6XguF6",
  "key22": "2qb89912iadzixJufXCvRRF9HwRYttNg8MGufYU6w9QTfiMiUMaskCmbtqbcH9ESteCNkkKWFg6bchHH1BvCGSxB",
  "key23": "5XLrDp7UznH9JPeRofya51Q48a7ExYj2qGBz4mu7Yo81JTLNg5aR8TyrUUsnKfvn8zmQiX94PozeZLzpZV1NJWHo",
  "key24": "2duQE7Ez4dHmejuqBQSWTooZY3zus91R66mfbDVmnoYuLDKaeFZHp2XDRXCK5WotwTz9et5V1wbvso3ukJoYfBqZ",
  "key25": "2LPUfbqZy1rydBaQW2dKiZHBehSTa6w5KoF3M1bw2K1YDn4n8QZnT3tomACEnQG93bhhYjxwzfT9tT2cZ6SCdrtY",
  "key26": "4QvHJeGHegrzWePHVYTWuvDLFjzNXgQzxmHpiCDMmBP7uguzVcPbu7FRzBF5MvZRBP2sgb7VMdxXipyyCkDevfmK",
  "key27": "65dYZbiLFZPtBGHGnqemveTUgmdBeS3RkdEN7sUta4LAvvZcvhkwT24qDKApnHoZBSZ5zoniDpqujikLZv1ydXcM",
  "key28": "ZEPPbLfzqei3Y3gZVZNHEeJJsYQajS7EqLdgCFxBQWtXrcstzjDZ7NNSieF9C2WSaNj81soPvJYbgJMDP4WMZsb",
  "key29": "3WN35Ep7LEZEqviUgD2fmoPWEVGqPxLaJihH4wpjF4DYuNYcXs95vZ64ka8Vst28e4eV7wjREQY22zbxKyZEBexF",
  "key30": "2dBR9z3iUz94Y6mExGMAYaohGiquCS5CqRYngPG3HbzZe99NpBRYmzYLisE8p2GfEP591BDfs3SNEXseAwPCArrS",
  "key31": "5V5fy5sRwWAuwLthFbjJXa8Z1XzXKfHLu1KG6YikaB59WvFUKisWbUU4pXQbRFpYSTbFRt7UcwbjSMGcLTWY8271",
  "key32": "2JBACdvJ21ZdunJtY13Z6QR1ji8vkf5ESckYdpkJpELq5Wyt1Q8KPvZethdirEVJX9BQ63siFw9vZEDNebe1ouTR",
  "key33": "4M2bsGLHmvmrMDuGBDvaSr3zDQebXWwtXpyTvUSgLyWCctvygmRnbXuQPG6XJ4DgG5MgMZQUPmECRLwtN9SeVdN2",
  "key34": "4WUN2ndS7Ama9Pc4Twj86Cg6ZartMf67jRgxrrpWCsezFC7Lb3uxHbfYKoHoSCMS4C6uPFSkDCWunEqnKHxktMQP",
  "key35": "4KxgYzxrJwAqd5SYEAoicP7QaergFzZRA9PVkzB2JdsYshxZnVjZPdZEKu2Y1afzrs1kDqem1UvZhmZfzz8W2wKY",
  "key36": "W3JikRUEhjDMWfxco7198hhcTiWcc7zFBhHJS4sZzYQxdenF8RfbX9wMCCs8GSrGH4kFF6qnsSpCKLR5SdVcC6q"
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
