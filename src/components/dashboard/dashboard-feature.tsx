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
    "4YtNpk3BWx2sxJ4CWmwWscoEhdF9M48TCBbRgQxX4HJjcdWfeux6seuRTDnYTw1UzKzMR3jstXSvo2CUm91Xc8GD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6RtM6sQTQqEX8uWJED6MZUB6RqbZurhhKGDatRVrSDoMGMeDStDc2wabtfSrJrcTqeGzXqt63gG3dD6VEuqzaC",
  "key1": "Vq33zumYfqFjnbqnVN9xEkukPppqzYEyTC54tCEnvVnsFqKJjGvASt2a3PuzBAzPDoeJ5muXWjJoHrbgPmZUqVs",
  "key2": "vnSNVwvd1ML1SX8vKgHqjAz99XcUfw5QrTbU2tzLumxZdj576BpaT1yXGVk7mnfB4xyYVXPKrM912nCdwcy3yKs",
  "key3": "2buPpsuLpi22QKsoFu6sku4iVSKKY7FYPmQurBEAM8rCiHubznyMaKEohAaMdVMoQq7M8L1cHWaAEALmrVNBZTYA",
  "key4": "5UXjjFxCgHmaeTGywEoJ5JEC47UbKJpiPZV7d1o94wR6Xh2gKpCctZdp3DhczTRTZMEcrUxVfSX3Fjhz6yLP6EZr",
  "key5": "3WFTqY8trjFT83yufFMYsKT4TBbvVjvMu6tW7nZ2wgV3Ci2bK3vnDbTXW42uejXMxRDgepQgPZCmzNdoa65brLdZ",
  "key6": "3nuKxkQS6DDumkEjW9XNJvHPTy7mTC9Hz6ZTefxGvnAMXN67WpcTiDeehqcQheEmM1mKShV2WZb9qvQVmbftKwbM",
  "key7": "ZkQgCSafTTZpZA7emUQnHopQfoXMbxHFMS7MdpWKxM8LK7zuzBuSwjPBkeRH8oo9ivDnvAd8GQoiZaKGnFcWt1M",
  "key8": "4zB5FtmDBihMtsMRrtjfhT5YLzVYP5LaQssSZbXoGH1HjFhfBLDj19ADn6MxTJybKTRt8cgqytnVC8ozVAfSpPYB",
  "key9": "3rrRuASrRUMgbcGpK69BpzFizKfxA6PFDaftNgFeUD9yjxuqkDZCAhMm3PNxEj8BUBNp4XKCebWNjXnX2DzBduA2",
  "key10": "HGTv8r5KHG1vw94q1E3VuqYF4oxw3Dhdin4Tf3N1uzp7X7EgewFcpLubpEpP1mNGpc9BMo12A8c9LmwoPVHjRkW",
  "key11": "ip5Rb2SVPjXMAZdLKCaBzQZjgeU8AVo4yasPZjVNjsJX6bZNkucx6q85381eH9rYmFQJmajJrDJ2fWPfsjp4SkR",
  "key12": "54QfX3mR77wmZP8VBmw4e3JuyCspFWKCffjwQueU4scaLhKWAnDUZcL9Sqtm9fNwpLNuj2vWQHcJjPnt4c9t64vv",
  "key13": "374wscMcJVa6ex9rjzURCZ4YDrFT5fZ4qkPggPK6nzBo9KAHTKFCu5GxAZE6bAT6NevDQpKvLsisc3K9m5DXZYhd",
  "key14": "57SrHsZgiCKPs1KB8W5MwWUi3Mx9LTE2vLkQmc5rNjttrBf9kNgKTsjFA8fR8L1ZqkePdGEnspNupQrAvh2ysG2y",
  "key15": "3viSBMDk18Jjz3eqQ7bxvX8a49ydvfLwJwzFqn2MYmGMF8cVXjbyd7KKcmFnyPJdpzZnLXtNi1nMtn7YyeYYLe7m",
  "key16": "4Khj3UwjR9ZbugXAXFWcbsEht3pQpVPSquhpszki6ZvAAN91iDe5YE9Y73TqStDf6Cn3ftLsBSnQX5jWQ3dVZoW1",
  "key17": "5VDQpMWsE3xC4AypzkGiEvc7Zgw5kovW4ypf5qyxDCkJ5ZaF1DxHxQw1dNYfbCu7Kmr3Adbs7uwg3nLxsLfHpDjz",
  "key18": "ZuqU2o8YqayKdQPawgQ8UfY25WgXhuijsmnpxzNGaszmmUHLF9D1kB1WHTAHEGxGrdVNyqENcqHowbC6twCNEfH",
  "key19": "5kVXMK1Kcx9DA8L4FKRXNzQunXkgqZVyNZqdBxhx2DTxKAcDYYciv7JFYaDEBqYyuhMFG8f4F1CNBs8MMU63wf7X",
  "key20": "5r1EvPqU49LeoaLTrwQQUkqHRp47Gswts7wZYzDryxUYpJDqcR12NRT1GQN6WJLTfiQAzruqvMeMu7sGML5b5zJv",
  "key21": "34cSh3cUPqzXqCvwycsUTh1qyFtmwG8T2DzgquWFfaAmhoQ6nPFt2LnbVYqcZ2RszpEEvfLhctN6fobcqypAtL7D",
  "key22": "3AH7vSoFhK9KKhdgkmK3TBV4Uw8wLyTGwQxoF2aDed2u8dBAXyWrT5m4xWvfKtLMkm2kygJy5y14hgNiXcgrPtbB",
  "key23": "4kQ7ASA8unxqyLhEgpDR9Y2E8d5RsBT1yHidMSwcAK2uRKqWdV5nKtLXdMGB7D1DwBaqJr5Wf8jZYigJAHT7rwdh",
  "key24": "3CWFH6g7h2K1Yt5enJ2pFXR2YA9xK8xM694dfo8wNWNScPNiyoyv7mwUxGLRJiLV2RifZW4FA3iiGnu29EhvzWQH",
  "key25": "2fSC5tFMpNKfaEhpV6DzuYwzsEmaDyiLW1uV7inV1qqEeCvfJqES5VkQDrcUrncz5wGHjBkXHryUrahbYKRjVrCv",
  "key26": "67mpqh1RkxfcKQX7xSqrR4t8KjdFWsvzjjhwQkUr95ESgNeWqgTdvqJ2osPAetu7QnQmH6RmwuFLnCnCjxNT16iz",
  "key27": "4KK66kFPtBrCZgUbRU4KimFTWLtzPdv8PF2EwAgYyPsjucBy8LALxKSm4NYxpPDgmDYFUp8mGURydrEHoeXBmUZK",
  "key28": "4c3r4fVYuhPDoHpuYoMaiG9YY99GGxXc6wtP2ZP4BCsa6KN9PrdgECdiQU2fMWZ8MKdSzzkdHYTznynKu3QRGT62",
  "key29": "2JAKaZuLPzbqHfGY89TBiy63Eu2eDY8zTKwNp7GupMnmQDtJ8NuUUVun2zupDFphdfSg8TX1s8AFhzjDxT1fXNqP",
  "key30": "4ptPKywmuYLvt8h8o45yCq1NaBaoEixpQJmZ3XP2G3PedbTNXJHMxdqXUj4wEp3YyQUte8HrEGXhwD6FgaZxdvmA",
  "key31": "2Yt917hUmd31WYkwxCT7qqXqKjXxCuH1MJVASiGEsotbkHoemTXAerYiHsk5kCcwSW7Rq8KfYH7Zc4pnHd2whrU2",
  "key32": "5ERis1vsaiWpTwYkFRF3qNkCJDkk5DcrNZ6dUvzm3BBAwxoKb8JVGwmLiv69XrAwUmsEEAZscVmpMv9TjF9v2oQP",
  "key33": "2Unb2AKt8SsrF8FhC15e5V4VfsxTERLAdKHE6TeD5JEDk2ygUkdAUDx4NA4GUcMtntjsy3ZQmnLWLPxFzQG1xorH",
  "key34": "624mwF5pcbGo21SEKkLSKmUiKxp3S5C2oHCfG2G5PiJ7C4dDkA7eRyvT7M1hyFZ2TLgLif1hAwD3QEyYRbmmXQcU",
  "key35": "5pXCRg6hw5zw7md3EHJgK9Rg1tPfd56vdqSRxzE6aod8PzWF9285wEUmqbLLUMhWE2SR24uubKn9QpuQr1StW1sA",
  "key36": "56eFMYAqcwB5MKnFQQAkrLLwQe47CyPMP68dmX6maXKy4veWAc4xXX4iMxk4jqzBL5bbAbr56t6XuUFki6eCkJJQ"
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
