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
    "4eQER9xjmLRshGVZiXzp15PZU3avn5NpayK2csH1rHUKMwyVxXMH5AFScyBXTfT94VYJo8h7QbnNUhqVWx2qLdLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuQF2X2fiT3syTVuVueMeo7EmUWYKUv92iLRXJv7mhbJXWXKtQoBE4UV1HaCoZp6KVtcagNjoXNqpqe1B8mUbZL",
  "key1": "4ngUj6vf6Vw7rUF5uxNH2h9CiCKBJAk4RvoFbc7u4Mk7uuWxREMV54w3VXzNpmY6TDicqpWsvqwDbpX4XzENetXb",
  "key2": "2NMr5c2fC7CYeoFdzpRJXsa6UnYggRY9rGbNVWpUHyhjxXEwP6FXgzQEywg6bdnMKcMc5ce18CR5f3nj5ar6fYCR",
  "key3": "39T8SRmiVK4u5sQHGDCgQ7SLhRhzoZ7hmcz4XQwwWuFh9UcqjDdVuMTd7CcG7vvCfski3xbrGSPnjwVZBY9TspTT",
  "key4": "4yfn2DzdqRVGEsrQGRwQwm4pv4bFpgZnvc73jF9PG9fLznL7AQayhiDFmXaDUA7oaXZjvYZG9EF1MMYuD5LEqMPv",
  "key5": "4JgqvSmGNBBfnqnvgik8m8gK1fu2HHBchxaCKk6gpRh9bhw8uTpUanUXysRAg1bT2SGGJmB5fwuo9KccXJqc11aV",
  "key6": "2RJtMkEpKxvseRLUKEsLpQmSWEuNXYyiYLBN2mJ831YRgdE2kK7pPaBdskaARYYfX5FiDqwSQXYJHqr4R3GryD5b",
  "key7": "5uq5BPGRnSww3qG6n7SrgAtHF2DXx2fzwXYoRvx8LxLaPiJZ8YUBQesRjSpD92ZqzbBneKy4czAj6E1o3AG2YTJ6",
  "key8": "39RqAkkzyHV9ZbQtvkLQfGgBDbQsKyUDcMZYf3DqYnpmu8ychsNsYWLvvU2vr6AXTuzkp7znfny9QTX9RBF3bTz3",
  "key9": "3jPVqW1bfLHnYhFowMMNKHPYf3fsefSKNGZ2zeZirpvKDdTj2zmqHCczsi6HvWPRU2KkBMWNXikJiiJoY8orcsgL",
  "key10": "3vuz2rRKz9mbMQgoaucRypGB5HtxKQ6itJyHrAGHupisBPD5venGVfUEgM5TiRCtQWx2uLTsf4QUcFX9KKWaw2Ug",
  "key11": "4xtnUXPU5KEndSZTU1MFvizxATV6YRPCAFDzNxouXZu8mwvhXW9XP8rhYvF967VUiECSc6RntA4bncGcxqsoZbw4",
  "key12": "2SV1vmQiqRrpirvVwEQnDmixi1BRqeiqf7gerFuNKqZf4NL1AvYm1x1UNaxJCutAy9Ji7Q7rz4zGqWZmUcbfZ1xo",
  "key13": "9BWkCPAJFpc1mE9cBb1qwnZqJakqcZv3sCVFUi65nkT4UwejggpoPfQ1QgZ41YCoHeSoLLyHn26tSAVAsS1fEoq",
  "key14": "4iqK7pJn5Vx27FSg3fCBmDnhdKE9renFpUwmxAL5LcLEWvi3Jer4tvvsWsEnD97p7UdQLyLHPzw5pGsBFnSjfNfy",
  "key15": "3PsD7yUH9BB8gm98SMdtF8CChEv2sebXXBAb4V7iQp4MGNSDC65LapxWZJfhohmEUPnwWKmQjBtZGtKHmmTHZVwa",
  "key16": "3fWrFSDwwLhanotiyMCAGJfSHPRrhBzgngRLuDMfYJKbrymsM5gw98URbgLJbUXwgBKgXTXj9A69B41DSZHmpGuf",
  "key17": "4ajpyUL9cdVKGHnhQjCvQZcxdAEX9RjDMUAndAZaURrD9xbbZJdbvZneg1JrBKXVw7kEzuUiJBHETPVSg9AMqzkJ",
  "key18": "U8viekTaf1j3qNNA9963B7uC1wendg7ReFzXWb8jjVFhHEDwk1XYyE7fhbdCD5Axg9NxsJHPVVfsJFw8qWN1DRy",
  "key19": "5UoCRMnTtuV9U111kyK9Jv9hC1SA1TEyNrvxsobqgNArgmrXRK1YSRPoUW5BWTfh5KmTK58NhpNsAeUemZuF3hut",
  "key20": "4ddQNY8mtJwVX61bWHdDFudTEdYf3ymg6VLZpPUMGVzw7wQSPhKET8oTFEJKYyhcqrjrkbQPq3UTueJjSBBUKxzf",
  "key21": "nb4kj8JLWceWZ8jhoRPubWTdh8R7op6sqHoXL9CAS5MA5MLSGMBeQgjiBT41eewog5suC83e7z2fwAFkabtEHq5",
  "key22": "5c5zAm9pEg3WiYDAtAf7aCZqnKHeZbKfZadS4kY2ju67rzSEks2RayCCmLNi59nu7UALLnYJ4YuaxVA4bCCQqj11",
  "key23": "3TRBRZnQddQiJaU1pxvwcTLJEvfjJus9hVkeK9cNJvuP3WFMFVcT1vsHTpWJq5dC7sLE8BNijbpmZqbgtqpqSCVz",
  "key24": "2ssMWnkWq56dg9ac4NsHKBrrx5gwTqg9jPbu4x7BSvzD1cSuj5hnViouH8o73u6o2bMxPi2eJdNhdZMfjaux4WS5",
  "key25": "4gSKZLcNxNDDRbVFNRxVrN2hx9gQ3Srcm96KAVof1Xyi4NMxqBJADq3cNSYt9VUMShQHs95mmGmLHGoGXPWcc8Qb",
  "key26": "5SR8qrgYowdkDhLjzJJwVPH5fJTFarsNcUNV8sQCWu9wj8eQPCZuR1RwGBDN73PBoj7cSa3dUisfbP5V3fof7BmH",
  "key27": "3CDVrJ54ZvYJkY1RZwRVwF7UP2Lm6ux9U9gd75AXK6dYk3rmPd9Ao6caTYeDeWvewRrXVzFHtR1VyqaR1DTAjYBR",
  "key28": "3nuDVw9CMuF2j9RysgqeHovEDCT4ZSUe7KPwAYaVVAyG1py2vPNzmR8F2uyHGP4WSPcYprRxbzoaeWpuhEdyrHU8",
  "key29": "2GHecjX62yxvpRYEehaMubnACaTf4Ab1BgdUyW6Evkub9ZDBGpKyMXxVwQK8kHsbuM1g8TjcBoCEGBbKuNMw8nJY",
  "key30": "55kdMGKhiYaTHC1q1KLjrE5KonkSMPx2hxYVvyvmWRTbcADkjc7wiWCwdy9tzL5oHLH6ycfNTmmh1vbvBQCSz5Vg",
  "key31": "23NnCTsYc1QxrqpFPuH3u5c1k1WpZnGw6zmcDVawfzmXv27h45BASCcFw9a7sGga78xHd4gHy2bdNAqdj7r4HzrA",
  "key32": "Vuom24kdCiLDGDR3xsHaFgHdz6kaK9bUEesZAu3u1HjcaCbayc4Gg3KzUXk7eshxFYkQQTD132dqEUQ2W5jxeDM",
  "key33": "51NY2MhwbQ3AgM6xYF4ffcaphkbqX4Gwh8cwymeo1yhxnodxRouQAs4CzhXv9r7jxTckzoX4AQj8HRt2Wky1hB81",
  "key34": "3aRagEEF8LpBM3L7gfGWp3J3VsDhNjKkRKrbN1B9w3r6Bgcx6JV268nVWsip8NbUCCCCyALJAqgCTaLQ8WYsiNxS",
  "key35": "37fSSbeHXh9kibS8cAwxMWHp8vYYz6JQ1TQwxF2AaRrShKqNsTkSqGWPPFiN7Xasc8Eu4ozaT9nGrAZjP8QLWT8N",
  "key36": "ZrykGHAV3A66wt3UEGuTBBdWvEM4qKCNujj7aiWjc8GTVbXz9QuSbhsouTp9hHUFNXLzqAmyRyww32yh5PXc9oQ",
  "key37": "3mKt7P8D73cHQNWcBYd74VHJBfLuCpZwWHinYVoyYQEbnH9suM5yb8Uj7Ac7Cf1Vh7ypwDwN8LnMVErcnF3gzns6",
  "key38": "4CkpKUWbDbFb1M82E5JYT9LAuNTHnzw2cHj8XLhic8XJVh9BR5cLaAkfM5ELeQWbQHbUvCxNFn8a6xBausseN7Gc",
  "key39": "32uJYyPgw79zbNnAjKLvntzR8XnXbqPEN2kYtxi7KoUFMm51cdmuFzvt1AHLshYxJfwDCQD1gRcKbdRZkFMn6EmH",
  "key40": "25smwoQyqJqCoZb96rUQ8Pq4JoWVEh7JBdFunt62ghWVU8UYX3j3GbsLW3DhorjgviXC8A2vEV8g7hG16NCy1VG5",
  "key41": "u3GgoKiav3RbAMK6qoQAj4otoizz27CxcWJoNm7xEgbqLdPXD4DqsHgTA8ctLPQbGrFbhovQeKk5cD27ZDkE3NM",
  "key42": "2gggHc1SHjd3oeYJCYAtRpygwx397D4iHreRxZyhg5BEBuFrdHqozXKPjBsD15pEZ95C495x17LUDm8phCrTNUku",
  "key43": "5qQoSJKUZ5p2s71FRnUtBBcRUvkSE6qpmh1Wm4buGFADhzyc5FZJsUbtzMp9rcncfZJRp3WjgAELgBVfhSqH4W3r",
  "key44": "56F5CqiYMmAcmHeoir4RQk9xPCV9dc1xwCyjcKqL3aoaQqic81FeXRcRjiz9UhgEhn97sdRxmY6EErqUrDs1MfZ",
  "key45": "5HCTEKnhoUfqtRbS1eY4Mx78yyUvmZuJattQZn4STcvs7EvLYKensVBJqiMwEojMhXmkqKQd4SGSkomt6FmbeWN4",
  "key46": "26sbkfFBbXRk33A3927fYBgX8PZ2jbyVfoAFcNriXdUAS5V9gZfrmnRNBMf1PJ93D5qUswwKxhPvwHxtawcEifGL",
  "key47": "4eb9iDCznxXNpxbgCGVzRHcYjNfhepaSoRMC3hF17oyiX2s5cMfK7WAsZk95QDvDPzAFEWaTvF5RoShwgApYcWv"
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
