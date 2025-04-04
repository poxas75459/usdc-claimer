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
    "5ALff9PTX5PtyqyKBrp9rmChwgxwDQWNSmi53RNywBqBi9HMHbqPRkH5rAuWB4L8sdGUtVGh4rGJv8nrYGSvXeS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gigYaFs7QEyEaxxrkMeAwk4sFELPc2BVLaNUMTJYA5YxGrnZbHg8vhw9pceM6QpRe6SG5mEaE3QrFxBYv3kA8wj",
  "key1": "4o9VnGDMecSJVJNNQmxHnhFmDh8B6GxZXuvJ6RXG2z4nnwhc1ppw8WcXh8oyYgt9epRYivAGoUWwLSapgCeLGF1Q",
  "key2": "3cUTStRc4c4HWnR1raeoobhcLSX1MQY6sutDzg54EMybiJJSgP8e6Rwsr7y1B5MknvGcUVY756PhJe2xB2vfMSYe",
  "key3": "4YgxMCMhSTMPh6xh66pUBsnxMGjgMhNmkMMnzh1V63aF31F1z8B3t9huAKx82duhy4sHPsCCLiaVtmUagvXgMqJ8",
  "key4": "ck2NUQargcyHLvFUzC5nRkmjJLH7BHq7x6EcqiNALGrHYxzXznEjCTsY2zZu4phfdCA5ffFKKnjw885YcbFDr1h",
  "key5": "46o7u7cuY2M74LfF4dJcjWyPpQPeLSyd1Q1Zs9zx9guizZpQazGJw4C1L4TVXXzfpc7rUnEDNYCvscm2iwZbqKbc",
  "key6": "2DoA5mMcHPRtWwPh8Vz9MR2wUiocvcAyP2URSYqt1cGz22tHuggqUkjoi1jZXuawTXqeVHDYUq9Kuk5dk3Pzbd1H",
  "key7": "46KceBVRwdMrcFULN9LdqLiJEdaGvT1w3LFtsCSJZGzKEJ7mXJ6uYTAqq1XaH5nXEEsHD5MDEZ1MwLymFEgN9wfm",
  "key8": "2d3akYHehSaepcboBbz5Q2pKu74FfQstfchMQsATvoXgb5m9aUhvn3rWoMndMgiXP6aVJFhZt3UzpECUfc8XL8xT",
  "key9": "5eDwbVe8nWVtbCtWsbVZH3AgXf17XcrinJ95ifEKkXzLf15FF1HY9SxpxfDDhX3xWu37GiBqCYNDqLvqu633Ev3b",
  "key10": "g7EJWbY3NnMHq8162Md6A9x9H1Ka8MeRwhX6WwHMd9TEjZUAe3byoCJ7DX3zPQVoA5PydQUbzSwgbGBQ5SzDtzd",
  "key11": "32M6LUcQy28G5uLo8WCujXyMnxMmy8JBwZ2SUW7Kuo5oKi4dJGAQL2wteevBnkq3hY623jWFHu2ZzLyMfp8dpQa1",
  "key12": "3F5izy5EqMJkoBTbb1tkqCqpmA8zuk38kZdx8cbSXGrh3u2ybZytDcZXvNc1LT1uFpGFTsaFzyYupCy77hNf2YVj",
  "key13": "3Zr45Un3su82QegnWBVxtFrbQjMzQ7qn9wLt5ReTc8pojZCbDwvMXyuxMLcud1KqhwQDBRga7moHmJKWEkrqtCDu",
  "key14": "57Aa96ucsaizXQM7Cs5PewXTTzbqCj7xouLCJEirww6zzJ6p3QGPaG7UDf4gP4KhY1jfoMv4DWUeHNYaXqpT4UZZ",
  "key15": "5WzkE7y1jUvQDBxS5RudfH3C3k3q2GXVqf5RuhKSDxEpc83rJZSyom2P2b6ttpYW7m1tCLtZSmAMXAmfNTuNrNVq",
  "key16": "2Fp74hV9jmTditnJr22MtcSQhHo1JygGevPSuw5HhNMG1xJaX63QiB2RJ8ePruMxSWp2d2gx2EeJGZ5dbG9oG3ex",
  "key17": "2WSRAQTVzhFBPFj7gM8ECrPBwdprGf7D9YwKe7P1mZHzqG7py7g4NizZJZ2q3FmJeX9ryvpyx7Krpjd9oDzjZW9w",
  "key18": "5WLCPb9JZGxsrRWjgaSvskkcTXzxSdpPLB5M88HiNjMBBkyN8ZhD8TgPL1L9DUjrgGtnjwjtHvPr43rPR6uKAuwV",
  "key19": "24RQQzZtXTWH7LZBLH2SRgT6sT7sKRiQgS7bKw6D19RdTc4nV7G1LksZdB6F9gCFEttmNRXB54bA4LyeVnzsEhAm",
  "key20": "2oJAM5zcSuYgv8D1WetUX5dG94vKdx7hv83TTu1MNLWo18s1mANcusrJdBKZMrjtm1FCrQ5WbYrJ3uqEg1DW5BHg",
  "key21": "5k74fJ6zyNpWJhpUUrJ9k2fcSdqJU55uCxa2V2qvP2YruPXduZCkWSWcehSy9MvJRrFyETdKCpfmkqNUyvq2w6wY",
  "key22": "2UhD8WqD4chThqFmQ2dx98gCtWZMHn9ppmjLve6Np39YDgw1ZzrrjPspF6EqRPNDJQZzT9bhPACye7CAMPtysMQr",
  "key23": "JfU5YcjxU8S9DNp3R5rwVXL6GkjNACf5TNrEHosd5SR7Qa1P7vuNY3VL1EXfmMJhP32H79YXfVUhc6ka8dkg6x7",
  "key24": "395vRuS9rDTHVoouXsvspkz4TUyoSw1AyWxpVj7WEmXKqWHowQJEsSo3JcD1Jy65rFRdTe3FxDyBu3wb2XG7qSHS",
  "key25": "8q2N8VQGUnDbAFdxYPPd7X4i4owzENSW6xMsaswgn5kv92uXuDpBb2ruJUnK5vUtsC3ppoDhrnTKTFhjdZpSx6D",
  "key26": "5X85K2NSpo9KEEubaqAphZbyQPpyNVUUbEni11V5X7DQUGEsNXccwy8Ep3TmHByx9Qd2wKuxsRQ1vBn8nXknMuhc",
  "key27": "2hfTdwGf6ZFiNNyErJwA4fDvWdvWrYaZzD1jHPggAimsbh51SQM6BNJ36z5aRew1yb8S5jxdvEPchCVgj5MHigQv",
  "key28": "2gH43oC8mu3NXfkCC5oqdziKvZ2bNfQ8qk9JTspbup1AamkSgGW5SdMV4DtRX64NKtrhYsB2pj6JfXB5ffLsUeA4",
  "key29": "McYKMgVCrg35vYtZnzE9kzK446GLtvNZYdqLcP8LRMSdxj7wcZVb2nUvwDVaPPRWKTD74UQ9aXYiFXNVo1xFiYk",
  "key30": "bdS75Vjb9LZUpqVv1v57Hr1ejVKhtzuRNtB5SyFwcQc5H69PFvQxVtSaLXnKNbwkQw1sWb89fiik8uwu5jQrxh2",
  "key31": "3mWBQNkPNdzmFynknrvx98nmRpwjxyVcjzFNMmKTNq5iVMdu7x6urKpZTHAk5Dq5rDa6mgiWw4vHmGNfEXdJsNYu",
  "key32": "5wrhSsniLFGSQzUSqrjBDRwb9qkdmKQBJW4XpDLZwq7ZyPGRh2X5bja7Zjsr26TtSzyDfNP53a5jDYmWWoAr35Tj",
  "key33": "5PPdqLgiihBZoAprZnDweDy1hLFhnnLEGX946LLiPX6WFSmgJE11uvtxcG3G7Zdam1MpsY84u23MRB8rvZ4qt8kq",
  "key34": "4cnod2o4ShFJeBsj24pNjWAfA7BFSvxmsVWB5v3daE3hMazaB6YD6ihn4dysF9r217kg9NUbHyVCjjt9wyDBFR6P",
  "key35": "5C152sByXKNMp1JUh6sYBDbfm9JqeMgmsUhrbYLwi7Xhp1VGuaPV4gJCSS1dwLDGJw6gxfPZcuWx1685TsDMzxGF",
  "key36": "5R9bwLGfhfh2L1XzQDR9fCwgdVYzAVu5gdVtA6rRfFiouWicdhPQqqMftrQ48WsdJ6hhWAKjgPRCsGJvzvUDruCg",
  "key37": "3BhdUioKzjqrsxzpvk48tGDPARbbWKrxoYjfbPPQYqWzwhySY8fYRoBCfrxXhsnPG58zZD4wKGfEFM1rchuMrU2b",
  "key38": "ZJuZqAWhsYSVBBdkiTmE4SPWKhuoS4wUwEEZ4okhfFN7atXRN9dEYhLZe7oXxpEDSPGCUPyaQ5t32Kiz4zDK7U1"
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
