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
    "5ZKZ5vzTk1XsD4pSuR25H6Ppb4zcA8fVz9GZ6u8CUJZrBT1H3gWcGygp4Dkm5zbPjde15s7kDJZ1emoMHMfPEDzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7bnM3TFpapK9kjmqnmzKKyQreCmiDEoayfo1wmRApadaZ1rMDC8YMbpHn1ruEa76z4m4dXrfDsS3TseBFmw8ZX",
  "key1": "3w2JbdPXMTdNN4HMctbQTjkJYPaHnZeD7S3sDBwMuhF6pnqyAioy4KsbPBNWf8MN96XwU6uT54UzzNoazibLmq8v",
  "key2": "m7rjbjZN7hgxez81GCf4XoHs5f8ySe5pVrMuYMWdUYpfY4SNQ5wtpVkS8YR32XivVxnsZw5g3vdFNshTecEib9X",
  "key3": "444wXkY8ANuokHH38E2oc2nqQCky6sCqp36fwYBK83yzq79mJQkEQwhiAxcWhZ596B4cQnGRDfM6ZXnAokprsuXR",
  "key4": "5S18FMAZne4YdyAs5JsyMtt4XwVsYYMnevtYZbRi3cA2Wem9X14smzJ8j5TEdThsj2G6xF49m37nefPn2qeb3ESF",
  "key5": "PqFaVzRsy7G8Va9SAT2i7sLydgFXEvzDXB2KMXM1MPKy4Ud8ErWKmBh4Be3HFvUArpp9ifUKtynxhmDwzgWgWV8",
  "key6": "5pNuwpfoVpqdNa7ueYgZf9oY2x1gshKb6HSFtsagtWCUa3cGjoJ325WVjU8Bo78N3zyppHf9gNXaWPhXMpS2aS77",
  "key7": "fyj7k9P3V36u9yAyUsr9QxsUb1CsXqdxUUrCzM7KcwpvZgu7b5pBazYM7uTiYkPERA2snFvrXbAdSaqpLFRVNat",
  "key8": "4Mo83Kw1gLU1X6gxZ6jn899BQyEGBb8LUkdVQdkxSzuDdAUNwFEhYjy75k4fwDXgUDLvXEc9h3KvsG2FaGYDNmNy",
  "key9": "344Atb4Ad7SQ2iS3W7cUssryjDNGkahbsc2WjMj8CPngH2ZdDf5yhcPJpuW8gxDR3R7xdvMdFZ4r3youWUQrRL1X",
  "key10": "3Hnm6vMRwdWitVwdBQVJDTHZRbQoX8FUYsNrb161UNkCKwo7ubPC1ZyP2o5vqYGaiuVjcXspEpqHU3ZScTdiPXBo",
  "key11": "k3wg6pUXD1P2iKgy3mjxpZgi4pLzRtDyryRpup4MYJWeZktviPAEZJFJCLgqPq3bwTDnAmF9BNsnEVnqyYsrrtv",
  "key12": "4FbBhjxvDqisrp8cw46MEWp7JNdw878Loq6w3agE7sKm6KgKPcNn623iEC7bYFriJixGhVAZ1VcREo2BvU3U8ktA",
  "key13": "3sNjJXs1LNFLuKoBRBo1Rv3DwQWyjoBG3xK86Q19N7yLBkC9i6B9L6A83WWA69MdBb8yPfMdREz1Lsug257VKwzw",
  "key14": "igCSRLPXQUUdN8tjFkAdM9dtYg2kyuTMTkS78uceh1xKNHiVjhPXHg8SvUuKKHoFADdnodu2N7dj1sNNJd2aydN",
  "key15": "5bUsCYJbz2w56CejxfqsQ86PzRz7C8xTv6oxK667GZvzB3g1qbQhNrMqGZqTVTHGLgd1oxc15Jj6m6er3x1Fnzcj",
  "key16": "32uv2mQtMoYCmys5yeNBhrkBRxz4tHGoAw2pJnA7RenZ3YgC8LRF43XBpZ2LoaHcNiGq1V1svD92edmcAkizDpgt",
  "key17": "4UEN4z8YAUMkwFbSiMqFwwEfsUchkqPB2SZh12MdDjP13TDJ8NW84ffGjhHgXU4NfBx2XzJvb21K5DQqCGSxfUHn",
  "key18": "28tNSnqBNtgZASemtmotST5e1QtoPRo9kcBbamfC9JcBJ7ED5uwcSxRAJ42mros2zdQ85fNhGmZR5do8RffS9mvA",
  "key19": "27481SajY9D67phKTS9Yng8gjsMKW2LDAycRArBhBJMkgeqVYLZ9gU6WHBZ7UowAXhpgJYXSVW1gzjP8fJ8XTFsL",
  "key20": "2sw2y97vZ9EABiqBZWDcsgMVw5ywsuAEL81iPqT5PuRxG22ECKYZM1ko4ukEkbBUACAWkN1ZUaM3Std8r3DbNswf",
  "key21": "fMugKJkvC9HPoWgHWgLyuPXH3UmGvR8W1gwYeea6wXf8Lp5n7kKrguCtB71Q7zcgUuY1gW86RCaJ3oEt68iFqr9",
  "key22": "3rGFEJwpuwEGSAksJgCt6XTR4Zwd4kTinAJwCsWT2huMe65rGV3HLEL82cZ56J9eLQAPMryWtK3Kmqv3DaGKCQ3b",
  "key23": "3dT61HEMr8CcrnhpCLUGRw71eX1krbmFQVom4Y3Tt7ZWxrxUwysRSMQZ7qPhXpr4xADq2dsgrjzNCUAjeuNmZyY5",
  "key24": "4aZob4nE1nkaxXoDCG7iGfBRXUDkVsSveWmkz6dP6UV39gtkNdC82YBfG8Pqdw2GY2zBxAtiLY84SB5ovCMuQ6bH",
  "key25": "DAirHwhowvV864Pyn2cvP4Nm5edf58mcRRiiLMWfbSNJ9nfZQ5hyTH2gFwwYrbUGEPmN2kxMSRBT6NPvdRnqvsT",
  "key26": "3wHEsR8Cp7QDDmm4PoMYoW1xfWmxcq7rxhicStWqo3yts32JZAR3NdF8eGjWjUH8WeeSnCRWuAKXb4XzMkMg623X",
  "key27": "2MPKc1opAhERzVgXTQGFc6P162j2RpLZeAjyjZTpGJrYzrk33vVNpSwpsGfrCfdUWaubiUkNJK34wWgXWhRh961N",
  "key28": "5jbdMZeKsrKJeowkvgPKsaJwd9uBtKb9wzQED4SHhUCYcFZuxS14dgYNE2q8zrz7JUWMs4QkLaEUU4Fozs35Nyf5",
  "key29": "3ub4UVvurVa8GetU5qdkXHTSA2rEcqzq5BjNhomHNaiuyLey23SgUQGRoCAax3o8Se8dQ8oaRUthhSS8tRCVrPnU",
  "key30": "3UPzXHMn62YkccukrsdWCrkvZ5DbboPDtwyvxcG5DAEZYX9jyT1FZqpHYoEGiGkSzYoWMj4DpJALrtgZNeqK43kn",
  "key31": "4ciQVPfSshGS6ZyLr4Sk69HMqwMXTRGdrL4dzZavNPf1C9FGcijj585xSSEyirS1A9MuTfzzN4Wz22yW3sRrd5k7",
  "key32": "y8i3ZDv2p2sgwBSU4UV7NBU4s9itkjFuhUouEvFGwc2w4TYG6dWoLvdGFPh4GKt7GjKo5M715NiXMNFVJhue1px",
  "key33": "3Gme7Rm48xxUHyzFxCzUo5fhnTfQX6jq7owqXZvtKp4TTsqheGzP5QnbTCCg4Zr5wb76pocuiLgitzEq5U5X8AKy",
  "key34": "5fGwg11xrvnoUbdG92gaVF9saZmgwZHs4bqASnMpCQ7G6CyGEPaK9tcGy32Jgx15wFBsaKx2pCUvmQtzajUbSX8n",
  "key35": "5JkBLgwg7mkdwCbgKHrFTwA7EFGg8yNDJFjgb6XxARtEcetgro3wqkAMnQ4bDQT2ZcUJVYc4JaGzwsZRWtgnHWrb",
  "key36": "3mZEfQ15ecSuYZDUtjgvzUVbZWTpTcbjgsxuZ8b1sZc7k7fEqNHqnUZh6YQ68hJ51jRhosB6yXGQso8KohGydZEe",
  "key37": "3FNuHKkbNzwQqAL6a6CeRwxc5mRYkB9dBmz8ML5vfh18M1Yj5u95nCEeq4XhHa2K4gqZys39cfkHRwRJGZdoHth5",
  "key38": "4G5JDYcDZnB1BCQ83jMX8k4Ct9ooWTasjTz7ZgfxuMtfYdxEqDtu8tQJdaPuL123dXAErU8TNW4E7ecAByEYA9ei",
  "key39": "24y4YHwrpD7M2fNwybVHXugg8koM1P9UhLxmUwKTL3enkkwEpwYGm6gmtf1qxHknghdGsttdsAqiY7aHo38MUzq4",
  "key40": "2rkFj86A8ATaRGZAhrZbuAFfX5hmDRNCF95Bd5NqqmGwhYpKhjiT5qVV1irvrPKMEBZoSfJnr4Kyo4YQtd7ZsPQQ",
  "key41": "2QFUuQRw7JtgtdaPGPZ6emaYd6oQHePVmaQd9efxgY8x5ogVWbjg8H2kRUxeuDyLpvC3D9CCEB8LypnFuyB9KLKB",
  "key42": "RgXzkZ1o6KVjkTzfL6tFNMvUh4pBX9Kwv68TRy8D4fte138kPVGVejzp1E7x7ccc3BvhY9sKXfsRdHdxsAjn1DE",
  "key43": "64MJnE2xqasXRuXmcZfjFfZLEG7QsDgFDhLJcgsz1UnEpGSqfdfxiBeCWNEGjV2zZocA6SGFKtz2SRATF9fEMg8g"
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
