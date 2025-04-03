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
    "38cw3BXBELSc65XuT3pXQfYJHxXeY5yYqdm25SSKAt1kHK18i9PsUP5xGtxp8x5JUzfKHthbK1DBLZv38LjvCtbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drSk74XdxN78PdD3wDSewHT68cn5ZpFnqUvvMBUroYAk7GxV64HMmTbf48dHDfdmdCHJBrTRiZTNS6rkgyyF9Bb",
  "key1": "UTDLrAUgYwP3NsuuXgQ8XtFsDYqGpgCBoe8rFAob9iwVWZc9a3zHDbuLeMfWd2u6Q713gFpUQy813Wkv4x1kCYy",
  "key2": "3oyVm3sjzos1iZJ9bi7tjt9h1wCiHLz4Um6WoCBq6ugqTUG4anhQFtzu5KDRHBVJ9ykdVnug5dNM3PNHMZdGrYJ5",
  "key3": "22CZeUmJuXuevsDRgrzvHKcRMHMFWoSNcjPRm8d3oscjGhVadiPh1wDW6UeDorum2UVFp8jU7e1wCcwE96XYN8Ef",
  "key4": "rsLRMNrAwpY3EmwbupzBUJ5AAE5tejWTzzAiSPnZCANq8j14W6tE6nHUfYHnPxhdiRSxiUJNrZRJrju5aUEH5C9",
  "key5": "3NUBDVAr7V6NF1A86faVN2jrEDiScPD8aoo8P7GBT7CYSBTaW7fZP13DT9LKvhYZpvhQhGLZQp1K31ZgxWCxen8t",
  "key6": "532j19ZXaoDR6XUJjz27FCS1yj83gi1veguuwtUr5Pg84PBQ2vgEvZ3s7Vxw1oTqzfAwmkdz6YNjGdY7knxvXWRL",
  "key7": "3fThmTESBcd8CuTQQoDP298AHeUQBvq7UJ2JP5sds9xxSgXEqEJfWg9MuG5pwMsRL9AGdzJaPjbrEYX37txqYYW4",
  "key8": "P6mRuKvhYndLxgZiLsddfXP4rVmJm7y8vAMaEQ9mTyJ7tVYJJQyYa4WxJTgrdgwGE4AUZJLWeAun7maAbFFyRpZ",
  "key9": "4jQftn1r9BNX28JjcobQCpyxi5ZuevPFzSKfot2iTkHWrCjCSPkt6BbCTo9BHvSWXQkwe3LavLKXwyjfFEehXehU",
  "key10": "4NcZa4gMQnXLmkw3XLQsV8TpqSLrekiChJr2rnPigmod1dxSqnBsJ42Rkxtb5ZwYLzg2wrE212pm4cUipcvmUWks",
  "key11": "65SQf8YBeWEGCSxZAH9utydBmrew7FAAeuhQzr9kA94NDfWCCSUGGoMdEkdDX2eo269o1zSY3GBNwycBn7ymsAC8",
  "key12": "HLoVGVV46mUinedZf4sW7w6ueetPypaxjCme1dSYVwfW9QHGZrrD1xv7jtrMs8FKnrC9EUXx1yjyKfryNdyheii",
  "key13": "3QqXHxyEFwdJBhLGBpwNmjmfhNANTnwRDLDokcykhouB9PzV52PNZ1SXTWm45fJTabYi7gxA5mMCaLMFjEFUUDWW",
  "key14": "3nZZTXgjKpuGfo86ir6E9WH56GYCtyeSgm6E8ckwdcT5drEEfBYFqKH4y8d31HPKL11fvdUEszTrqP23pYTZ3fap",
  "key15": "5q6Kx14mvSLeRYqrHHcG9pkyNtZj5YZpeCJxKoCYxKaJjwkpgad57ne9jfE7PQwUCx4d8BaKpUCLWmmNVSqzEmQg",
  "key16": "3EAGvqe3PKfz3wF9D6HUzJeUb2zxe2wUcpee6NwwjRLiBEPQLp98a4AKBfg3ceJ6zGEjoiVK6gdqnREQcYeJrXhS",
  "key17": "3G2QfirucF5RbuaEQnNodBVFM4egXFXYdFY8hUfx3dHJ4DsS5E1n7GHSjrKEp7v3yYE7icFbaV4ty24Q6ysBmAyP",
  "key18": "5HjgZ75dteNdEPLo82V1yPzbiSWkLwimkZN4JYqvpK7pP3G5wu2Y41A5fgf2UmDpPmWmbY8gqNiDwbgaTbyw1psn",
  "key19": "3mMRfZHeNKwfDZVS5PKQaeriVUMCkFbc9y7BP1WeJCTemJe6yn46DA5gpVU1XqAuSNdzoEs5p9KQNizWPcMkMV8g",
  "key20": "3tKSqnNsqnFkA4YtkNBEx9by1irs9ppZze91Yf3dbXSxit5KFNrDz6UJ3Xe8hqat25cZzPTUmyuA6vJ5tR3zQVsf",
  "key21": "4onSfP9HQErtudx6LfhrGmcuDArkUTUHZhohP73StMpuW37JaD5zffmbk6TYf8qrXMpTw3b2FfLFhVapNiybAei4",
  "key22": "3CnJKQPXQKqfmLJHUVDWnUGyrBSYFn9ZjmtQjhqTSRQJKzUutgBQuj3eGzPxHUzMeQ8DGmZqJj1uXMUzf5c4h23N",
  "key23": "5oX4WBW1JV6JrNCixFMAMwANqCWwjKCdqjPow9k2xbBLX8RNDkynR8zxrRUs2nWWRKYmCM6wDe6RLkMkZEdrT2me",
  "key24": "27GDzrLnrff4TUrQqLkTT9P1kWRQuJyva2iSV7M2QzVS1WpwWJcL9gxgnZNkUcX2bErdEroiLBjySkepkZdSQ9Yp",
  "key25": "4XEGS5Gzmd3V43AYBYsFy69AT7xtVopuRTraAaX6vhvk1CWJGppvZRZvngasLU6JcGoAKq3FWx5jSEbfjiZ5TAPr",
  "key26": "3d44XaeFg5W3H2sjr9Fb1dmWu6arEhztegiQ1A2AJnMiXJBTCrGbonRUYKQLccirYkh1hZ4J4sCeCLBvhroQ2H34",
  "key27": "2iw1V1qCb3oiyZURx22cufdDoHTC6HxEtstVyiNzsTYZdZfy4jppsoDTKGZk1PFvQUj3Q7g4Q36CZiZbnYfYTkiw",
  "key28": "4RaHDtox7WHwLUnt4DGMCrcZx36Rt52LWCt6bK767hmuZ5evJDA1Mx8SfBVaXp1yAvqLngP5oRR3qC4qVvLbisi5",
  "key29": "4VgCNzysXiLXxQhpag4Fu5gsVfoUsGnPzuYWrT5Pv7tHR3P9J1F6Prewz3oAbP1d9qGHg8hr59vUAP83L5YipHpD",
  "key30": "3UqbwhRgC2Piie62H2Hn4QgP8X2hBGPzdjZdxJ6UrfW5MCVg5cyv7HwfTRMNBZ5HEtD3WueB6tpkBdMzBowd54Si"
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
