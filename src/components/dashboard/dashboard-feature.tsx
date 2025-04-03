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
    "QPSEDe5sGQ5kDQRYoxdK8QHgbbzyoSsrS5ybzvUEGstR27JX6tRNxxExF2Gc5JGAUBT68kCiVuaEgQFT2jRYY9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFnbHmYMUg4VBY29TfhzFoLBh1z5GHAan5xgHm7BJRewe5DeiUfzMp7JqXzWAwn1ddAcELLNDdUnfvmoecMLGQw",
  "key1": "3u7kCfqfJSa5peDgHvbapzg7it1DGF7FWiXinyGCHTdzxDjnTo8SraVr1QTs5W3QRUyBmFYS82eTqR7CFVBnEcdK",
  "key2": "2U8uQdnsdTBRUrYhHfSFSpJjhk2zhTDEp9JoRNHZBVJDbxkVoDQ1fuvcXZu9R4rHGQgmGC5Wris8cMtRXsy1KtYE",
  "key3": "5oWNYAoYU6j1UxaEKgmJHGiyNxPnzkpAN2RcWYtSxYMqir5yacBuTWvJ4hH2mVBH5PBsTh3TtwMgp8RdfJKHJ94o",
  "key4": "62DC2NcvVNfcRLuHs6MEjiPu4YUf47CKjc6jno5aaT5H1DNF21LLnuGc9YLZTu2jbvEjKgCFCUDmp1n6LK8xwHrP",
  "key5": "2oPihKTrnht9kF3Q7fKuwHbGG1HBhW43ijKMSrPZ6imgqP2WUVtGqqyoJPDYWdx9Qxq6Jo3F3cSMqxZpDYS3yC1J",
  "key6": "qvRyZnFCbkvvCWhzBmSMZFkrvCZj1nZVh2ttusQW1H8SAxXRi7riFtcy4AmW4dhjq3rE8FB71Atc1dFzbXcrmhb",
  "key7": "Kd7LJwR2kSWqYGzhSRAZeD3TKWLetxQHWBQFDMeNsJ39nSGu9QwvT3yEvpKW1Lz6PkYR6kKwBD95UHiTWd5iNh2",
  "key8": "5e9RjohgSZRA74Dc3BpyBjiw7mfB8B9yNiFmJtsE269w7qeNb6VvVWXFLPaY29zWy96uqbViwPXpguaPEzeuKkRz",
  "key9": "rMnrbQWK41hWhWuaR52GN3kf5XErE89GRyySCHDEiQGmzMNp4YTY3LnTDPvRS4yGhWy9UhFGRSxyRAmJcdK5jAw",
  "key10": "3MR3Gt5KhBVFhDaiKbHSw8YmLgAAk3dZcTsuM19JTq6p7kXMoTTbQNcnMKKBKzDiB18QjUkAKJCP8xYgPG1uGsF3",
  "key11": "5URrieSjk7kHw8dRXh7sbnke5JncfS7VcWPWFJckJpn8fL2oXnZGDSoT94MtVZ1DPzQxLRuGJjedratwHcNAf1x3",
  "key12": "4k3H8KoMQsj2dkXaypEbjZ5bch41moXMDgeqtidK9wgFrKCYK6Uuit3p8vnW8q43749XXWhDXC4ZreN4FMkj6AYv",
  "key13": "61RzpfyukXREdVp8PDDBKtMjabJ1PgyybXAeeyyomJWFDzErixgffsbB8L6y1sENgu1qzTXR3vSGxTEa175XkeTg",
  "key14": "2dDDuhfGkCyiPYnRSdbwchj69oiNYL7VghyT7Hrg1HMxXBdUM9oM7TjdaGSCudWKR9P24Bp26mESgFpR5nz3H3jE",
  "key15": "4Sn9Ai4tRco8zoC9hyfAueq7AZqBaPbxwfeTHBrM2vXTftg3bf4bYhCGSw6x3aoaZ17xE21K9W91jTCw6kw2ahFY",
  "key16": "2ghA6GXfKGoLJWG13B8yXn4oFyQWttfEbCgB7AKwBUXXE2a44nvAWAEqajteVa3dPW3KyMvj8v8hye5ypqJpXrwV",
  "key17": "9S4LNPNKKnrZV5Zck6WtjZbLshf5UfdBRC4uC4fGTJ5YAj6Mvc1M7PBEfQRwvxdhhHHTHnCaQ84fRgPKi7D1nX1",
  "key18": "4WdLouA85xiCR88pA7X4Zz6VHSZhZGngfKAiwkRAV3qe1SQCPGqW2bhkFBcz5W3xnViKDdN1xiQKcXbUEUyFRrGX",
  "key19": "3ZKsKfn54H3F4m9TGzkmPipVkU5r68f4PPDT8HvaJPKrqymgbcDyEsxPVtZmd9xa7bNXwEhwJWtg69vsJrMVNBu1",
  "key20": "2vGeZU2e4cpXh23JrsJhHWf7gMAdvHLMSvvTh8uUBbcfkTuJgyMVHsxqHJSjKNZYnj4u5qgNnQXETBJJC3PJEbbn",
  "key21": "3LSUR62aZxnLyLRed7w9UBQkadn4caaQP8LiNsthKbShtkbJwgWjLThWPwXLm47xkgQqJwfxYx8JCAHWpvFG4kYo",
  "key22": "4hhqBpESEEAsZtTGNAz6JkSDHwNXjY32zpUojgCQK1tBwq8xzSuK6ZPGrRsx8w7wvd7eDWKeDSfKXdbfhMaCyqsY",
  "key23": "4EgdTcPYchHFcoGgzcH5y4mpnR42kxWTmG7NyCywMcDtNeiBGWH5WkRUBbzkBE5r8RYwxY2ppobzhmHqwyWGDNK6",
  "key24": "4PyN7vyDBRtzDyaZzrWY6iRGAkb5UgKEVwFr2EenNMRv8FiqxfzLhsX5qcLVBEropqSnzRT6ZzG23TsmKfMqofvz",
  "key25": "5Kf84fRnxiNtQ2pZr2WZDWonEjfijmb9Jgk5fn73u7TSvgnzyPuEfAKNC5mMPHwsDmxgBfaAynGPJy7Q4aPTZDs1",
  "key26": "2PNLbQzCcUKowX5NPWPyCk2PkCfdUjxmkrPj61gkSzwJVDwnQyVbQMRSDvGwVJ2SniJWExU2h1riq2AHesuCbG96",
  "key27": "33zbX1kFKX7C8UqRJGHmxMVNiXvazxiK5w5ftemtjmw3yjhKjfUfH7579zs3qvxUD84VFSQvxRdzYxF7j2D9fThR",
  "key28": "4xBGZ1uB68gfSfuSMhWCJRv9VuJNWQYFaYNuiCCXMFF9Y5N2EFbYYsRgBAApmcDGKjcsZ5fUxD3ZwgUS5jCfibhj",
  "key29": "2KyCNPTqyU2vfQhwq3XChdh9EHqwpLSq6a9bKD4vQCUd9nZNkn9iSiPhBpt4Y9YuVvUnS7K3YaMP1gzmY6veFrGS",
  "key30": "UYU7XhHjvhPtaG9fZm1RjmULVr6RytZKn6ujknmMz3f4Ns9Gzrgr6fXYqRFXMy4CZi5Apr3TT2aTJT2uzn6jEvH",
  "key31": "3eJpPVqqYyrTV3iAPaixYWFSiJ4RwmZr6kKPEhGZ5gG4SLYpY7xU5bGknKY7SS4NVN9eJjrSZv1h4a96E3LJcz3T",
  "key32": "42CUZ2MAewmaQNEnLamvTrDcyxsetcsMCeRc4vHXsqcGdwf8fmvHYj5GntmaDeTNKRCCmxuVrVi3GnEPGLoii2QU",
  "key33": "3HsNHNfwc1hcUR3KJSnKwVAyr694YzeWaSWZfte5h9fT5GHP3ARBz1jxuBDepPtRGxY8RX7sagWSBZxWZgZWHYxY",
  "key34": "iu7ZaPVFxoG1nGwpUtQyukkm88iiN9Eu6vbJyZeMfzuDoN5X9dWrDgykNAUCVKxNv5ikEUHNN2egujMS1oHXeLR",
  "key35": "3rabkkR6modRcgEZCEGM7QRorTDezKcaGufPfFKjNmCS2tYq7wJhXy1bJntokr77FEjbZDK3dcoSu8VPwhbD6vpn",
  "key36": "24qovEaPRnUvELT8tSsj5uGTzwJJoujpPjKW8yMhaurqFrKvx4Ar9A3QnMGNVN9M6DZrkQ7XN2eUfq9Wd9gAHGTU",
  "key37": "2GZw4U3hFWud4rLLUXofNa2fb4swxcNe59B6DVbCTxbMDTdXy7WAbRchoibJaDE8iEEFn5YCqnbD6wi2GB2RFV7i",
  "key38": "C4yixNjMLNTGfHfcVo32Bwd2T2Dk2N63WjPkFac2WHgVvzwBzBGt72F8YbnSB7o8DhCgcJw1urN1K7AguSNDF77",
  "key39": "qrVsSVpBgzDf5sau2T43JLbTKu5U4udrDQSQ28ZECkkZc8tAkBpJBGQazL7ufpzY9Fn7Viru9aqyxQ7MTLT7HnR",
  "key40": "WkZpSqDhcucUCmXdg8VXMrZN3Dhh3dBVHU8vfMRiCsvwhnXBfKxheFimFyHSJFXnwzoaBNCYeQqRLHE5iXhV8ez"
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
