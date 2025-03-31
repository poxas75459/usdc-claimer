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
    "2P1An9N4daLcj3eNraqfadv8jjS1boDQ2SKiLWfNrEAdR1k7ZW6LUAJGqGejbre2iDpgLwccLQoAuEbcrgfS1Gf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LadYN3RLpMY6mDw6uAGvkfpW4MFd2J96wfMaPw2xjP8dgi7xgz7qxjbse5ZueT5K9GNtxwAqGFSeo6L9r7dXCx4",
  "key1": "4VtNjxKvNFiAYFi3Z62SFLkLj3XWo78Eu1m5yoJd3KZpbRHM1Q6QWhtd6iieWGsSRQMcZyeog8MiNLdoFrCbxqTx",
  "key2": "62WZMb6LL8yyAQ7RvzikTq5y9832TTJBEBudgxjPgDyAABiWjX5dSswLS2tp9oGLFxFGnkWbvNvr9GvPH2LsjNQi",
  "key3": "2MRE4WHCP3rnwCTDNQTKZdAhHYiy3dnzLzhGuMyCEh4qh1AyGZBH4ij4GcWJP8LjSyWKJm5CraC8oYPtwziUv62T",
  "key4": "3zHKb8dKLBH6bPukArqurE6cZY7jAqHzbGKTwWfwPAFcRjcFSvANBZjYsXHN34RTPtFPR23jADci5jZUwc3uwZZm",
  "key5": "263CYFtRqcR8Q66px81eczQpqtgA6GR9UcmGP88Wbrd8oPPdCowFybYiuGYUx4s7V3PoXF1kA1PXg5Y2AyxMiHxE",
  "key6": "4NFLhqPtaje6DhyBZVrSfEkpFwp4aAgZoRmJe6H3uvCL3MA9Aj2ZPM1yRzzi4uGrPvmk58uCG1yRh4x9JegkM2mn",
  "key7": "2EUJ3mQ7zLrSL1c6qXG7QS7yW5pK3uiyAjDqGRKTbSLb3wECmtc5xBnEiTdQ8Gu9bTeDPdXvByjTX2jjaoTeJ1LE",
  "key8": "3GWB9BbVb2zQwC1mG23xHpqmQ3vGSLJ5tpmn7gJYjYQtFPkaMQdcyTC3c6Yg14nR58ckyWnTLQQC54oNynjc7U9u",
  "key9": "54AYNCw2piR7BgFG62rE9ueq3tgWo4ZgeaW9LWm9cwVMEKMd56BPfFrjcgwwdhJn9HZkUxzmsGZhybuo2q3cQ2ME",
  "key10": "5yPDsHEKY241TZtfe98Kr7jfpGxK7JXXVwpV7ecVeUXttDyXiLUAb4yDdLfRrTAwFMh4QT8cohvXSTCGv7TUMVh",
  "key11": "FpPNYaeEd3VX2XdzdvZT5ijdL3zaT11gFpyfm5WP6F2u2fJCeo5pH13oQpfYn3R3BY4BJJqhnYQ3woHwegriCoo",
  "key12": "2CBzFjMzHAaM3s2KA3MoncvGvKwnmKixePT9PesskvZwBE6iMAPQstyz2Zddo3yWY3Hh3NY7n1rgwt24yeAUtDRG",
  "key13": "QPhdNp5PP6nQCrBUDZNoN7xWXwRLWXn5GmhtMxLbUtdKmwCqjcovL5xFrPZd61XJfzyGANu7YPGHDFs63jXxVUc",
  "key14": "5QFLuBjcza6NoSA7bY8kCufjq4N9DphLG9ENxz3Cwox9WVze6vev7bTXBMTwUGo5CwTdrkyTXKyLJG5Jbb2aHyqB",
  "key15": "3eHRUvTuzTBvQKpGF5BBN4KKHVYkUZ2B7pNM1NirY83ydNHZ6Ya5zPvnxTibtb995yeqrdLSeQsnyUb6f3nYqXeL",
  "key16": "3xWPB71rVxQsFF1wGbo2JetCfbbBDsP2Rf77uPG2hfNgWdyRoXmpDTCfnmTytekZPY4kCz4NwfQjCki3SNjGsDoN",
  "key17": "54uvFJasWXZBv8yruppse8EwKNYPvmsULybWaFrJuyDYXAD91VBHc1chYpUg32ooxhj4NJMsVSkfotVLLEbRRZUT",
  "key18": "5JFQ99rW3hGg1t4LGsKQuhUd7Dzqtt8TwrN75A5tmc47QvhcJ6d8F49DsWk5yCBGhJW7cnTvjAGpx5kfpZT2kAkg",
  "key19": "38HsYRN9noJKrsK33noc4tagV8wKCAnjnuLdEqsehgwvKY2UrzmuidvPJKSQ6aCWkHqBBDw47ecwog248u8vKWRi",
  "key20": "3J2VBuN39UtTYd8jMtKsDL2ZfX1GzGwZSCDEX1Y6NV5xUtSNFzoj377sgraAs6DV2CaUcKGBCzyZV2nqfuyrxsYz",
  "key21": "4y3Wt65wi78sR9UDVQnZszZTvKngFFD6aLXHf8zMzZzH5eKnK1PftWeZgeeYojbmUn4CkVy47VaJ1vXzoksk4RXQ",
  "key22": "2kVQSPfkeyqNDMw2LrANNgFVEyKB5vwhSk6x1MVSBpbJ3yQUbBZNviKAaPpeE8J4us7Z9f2EExcoTQMa9sZFDWtN",
  "key23": "2DnPZfP2aAd4Ng291u8jkB5KJ95EXRq4fiUiMCBrr4TgfweKQvV8bDkHUrXvQ6hUmAmGWKs1seoD1Q6bcLxXpJgT",
  "key24": "356JESnk254D9zMW1mnL3Cz5KsYohqzRHe3vWaMDVo7UdCjzd8zZ4zo4aLyPB51f2Y83sBNSVyqp8KCKumooBN8x",
  "key25": "2YCy7bTskthApUtJpEFUgc3CHEbesqc5PMMENNa8TZ8hqrmVdb3yH3sK5QzdvzkHsei9SNrwWjkubiYcstkd8Epd",
  "key26": "5WvV2JwRMXxEeTXVm2n2kiskaYD4jtWCBQeAYFngaF1TFuU5Ls6kygTMjpb1V3Nk21kXh5mN14ghZWPXYk4NShGA",
  "key27": "5upyDXcnhAQpeN5sKXSSrQyhCAGQiT5TYy7VdhuqsN1aDA3qKU2GmPCvWJPrjdVUeMHwjif4CBNNQircc5AxHwkN",
  "key28": "45GzBWtMTY8CEraX6dqYwge2nHJukuJrT21fixFG65dwLFiygV26J9tUwqvY5iBpG43oAbe7vPtbtfDhTdn4JNNG",
  "key29": "27f5SxC4kpokNMvgtsjbpDybTs6wFxYpLDGXQnh2ZSfaokSKQJkf12MUPAzRPSd3yPQt12THwWHD3ehgUNALs4dV",
  "key30": "31tzLmhG2sW2BVLzzTzjWUQ742EZwW3HL2eYJcocqaNnd9nEeEVmNn4aJg9T95ZszHprdTYqfGF5qReZuHsxipeg",
  "key31": "2ZtH6aAwFyakktYKtPb8cDwcuogNyHUNfXVvXKmRsZTmEFdTFExCnS1NyqXhxjHbHWTzAum34e8pX5G5TqpNPs7K",
  "key32": "56bfpFeKjjdnqbXDt7hDmRpHH6E6f3XunXroTraBEfyh51ryD7oRtXVwTgmvsk6yNR5D6iFCaU4Ge9cKXcSfxsDs",
  "key33": "2txeyxR5ev7UajycXuJ6EnqdBmckVapPizXqVtVEJizXxDbpUYah1noozZ29n6FN8PqBeGw4w1zBAhhnKuUopPYd",
  "key34": "28Xxf6URKCbutx6xUafLGkEMGUimfZU5ryw4FUsw5o9nYPy1Uc1mAo8h6scanBcWmcbA1PQryT2eHRdZd4bZEnSv",
  "key35": "eai3GhLMkVYpRTSYTswaxKXGcCWCUYL3rgExgYDLGmMGX8tpsTpCvposhKWqKtC9NnYNaBLZJXz7oKwPvDTKgbt",
  "key36": "3TuRTMWTUzr66sLQEg48j7XRU9zeaSmjHQQjJQRLgrekjxZG21fHspQYQB6ebBM5Zf5YQu1U6JiEBZ4z6RGfjJUx",
  "key37": "3oUkNzdZZ6Cc5upbnjg1b92sYWQTp4ZyHQyHGpr6H8tXsvkJaC3XwW8Vxn2BZ7vp3d9yyvn8n47xopKb5EjaHMT3",
  "key38": "hWP7tmt2NgtWFqqmRPcfRuiUsXUqsLkHtN5UhHjrX6vuYC6KBLCWnuMLzggSiYxoXdN8ma7ejWYgWmzqGaP9qgN",
  "key39": "3rjic7YcXLBPHNivbRtCNcAh6tLjCEXmhWaDVmtg7rcXGCx5JuWe9ms9dW1YAyJJEcHsmMNRy9dWX6BELNugHrLf",
  "key40": "4MgjnnECCT6NUVwWsaR9A7MmB2iC8GNcczZNih1mJfbCx1wPiSUY2vFiDsUr1qorbaWSLTGq8zV8DTozWPpKtGSJ",
  "key41": "4aHCVTmQxcHWwxZ644uHeJC13iXCbTjUuaCapuTe1fHQgg9Fh7PiAyzbeHRRN35v5TTeKyYG2LzjJoWUvdLTTE6T",
  "key42": "5G9W9xEvF3MFgLkBkyPz3PPBRmoTVMYaB3ur8QLwxnLxr3nL1puSmvm4EmyhD8tJTNWL8NXNpnNnv6KVcmSqjvzG",
  "key43": "5yCendf1ABdDxWgt9B1HSrgc9FQzCa4rsmobZLQaHBhESxjy6BxmDXxkPykGHVAAnbd2dVLMo8sMg9x6xb2LnG9k",
  "key44": "4Wxw34KMM88PNpLcAAFsX7z9VXh6whAwLbCBfzhuF9tZPV54tSZYmXu932rbyEZTRKwwoVVa3mv9rjqhhHPZCnTz",
  "key45": "o8vc29FfZLWR6ktUMv9WjBVLWbeVsMyUTe9DVcgzVc1g3HCMSRTS7jf1VWAwseM4WdLY3yWHD7N5pF8Yezfbc7G",
  "key46": "45FymhScx4JE5EK3UyJCxiz9UZgg7Qi1yDBpJ5UcUQRYsNrKLdWJdpcYk3XjmFvBgifkAKdtisgNZrbHRnjfFzQP"
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
