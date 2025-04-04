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
    "2AGNZbk3nFTSgoVkhfjvpBKixNWmscQoKrHHHTbb5H6XLXg9vaoDsPum765fRstWKLjGeGEHSCTrJcavE89hCZmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeC8u1yKicHroNqMyi1YipB1XNZtQL5Bw99oTWuWF8mn5AnZdDyccKcy9ErkeSq7eM4gWsivtEZiRfem7freZ9k",
  "key1": "4SYScWs9eCUsndUSAzyfT82GWLJF32VqDumc5hJUocGxhoyV3zYPtpWj5sCvFajLw9PeNiW8JNoKTk27poVQgh9A",
  "key2": "28YYPCQLq1nPhgNHDsqRL9Rsbgo4RxoYgbgrxb1a2RjNSsZFFzCPELpZSYtdfeKDmNv7pK7pmeppZK5Whvi8JezJ",
  "key3": "2uWrF8aBT5XUXMAepXe9XoUBrht88fMLqQPHzg7C6zqp6sQTHSeQTW7rKANdNEz4KPMN97BXGp4ZroKkvqJjH6GX",
  "key4": "3tjmz6RxesFbNV7bM7bTEwWt55KgF1uLR7eQVCFytRthn7uQzGk9guyZdpUWtWEEEKzpV34zTF45wQ6FbZeq4Lsp",
  "key5": "Ns77m1RymQ3EmbFLjfDTwp1tFDESwY65ta4PkdtRW5MQ3GFHMzGWs42Mey4bVu7cKgFUAMsvbY744AEHYZskvX7",
  "key6": "Af5oQw2jQYeqh265KhBLhh6rPuVY5ZWmLRHbTGpav74Ej2QttCFEShx6qSRi9QmyNyTzMyEhux5zD6BN5uC3yJz",
  "key7": "65aHugUSK3Tymk57eQV3ikmrnyj1v7R2KBnAanrh6QfuvDWnACYMav99Gagec4STXJZDHD3RbG3y5cFTB6hqXBdc",
  "key8": "5TqzhGFHjvwskY4Cutq9TPvJbv2zPsfn1bzMEibc4Hswv5m75xdPucJ75xv6XHhXnxoNGTnv4GnZfVGiRqa5qv3m",
  "key9": "5uUSrPCtA1nbcN8vi2ww4QtuvLB4LJdzX4eC21KMnsh5WXcJNC2UH9H3eW9QH3UezeBVEGmxNzSFBgvxQMu3XNQb",
  "key10": "5du1TUnmABEFecVuBbfiFGvFmi9sbK4gTDXddNLhNTLnrXV59mz2Wa2rBybRYzg2SKzkJJB9Dgk8V1NnCN7XoPEz",
  "key11": "3rmEzXuKn2qu1PQgdkeUYhiei5MSKGaF8AEaMjsVVxCsFMLfTsdfFC625kdPmzquozjJrh3nBNeMini6KWg54Bas",
  "key12": "5LLGUeQCYzcrtnhLxw7QD9ZEotPBLDPpudKaf4tEqzgDJzCkN2Wa8scrZtsCQsA6Nqx989xu4U6tnzx6Wrpu3W34",
  "key13": "coFD6wRwuWXXhFmTbgirWzkwoHSWSNjWEqkUJD33rgZgo2bUhaQckWShLJweveeWm2zBiPjydcGGYZrfjNEuSBu",
  "key14": "4ssTeWN1RqEag26oTj8p4yEdFXvy7dHHgTbHJKUpyoyc4L8yL5W2ogmXgUNC7qZaZDvryg3UC6qf3jqUDwov2Gs4",
  "key15": "2DossjZ5urNYz6mGebTf6THs5UKuheG68pTLWDgWUBGQ4j7gzhDPeVywpiX5eo927bTRSGwy2LLPhTypzAhvhhrm",
  "key16": "2nsQGLoEES17xFqGn1F8q3kzXV66oFLHsa8q4XxAWctigHkYW3XMdRD5bauR268wNUod3eFZH4FGXU9GR57HtkRF",
  "key17": "3FqPL1LwxsxydAPuzyaHisoipD4GhtrNFee7j2DGgLxGEbbxNdCJKCSm2VuTDW4MSHd9Kmt9gXXE3nmf6wj9iEtG",
  "key18": "2KjQhKWREHJAFNK1aoK7Upye5BNnXPx6sogvPRnqR5FvD5dWegQxg8GBxNqSxiFi2Jkrv7JiBQFUgnddXfBdQrUv",
  "key19": "3j8FM93DWh6kKMKfop26GiVTag9HrQRqigq88oUwGgAPfKpZGJwLtiSbQZWgX1os64WecAQaAfD3LfVVF7EXGwyS",
  "key20": "3W9QmhFq252qUMtL3qHPSwANfpLsKQcb4w1Uvj83rindtWJGEjC3zkXMVdgign492mMqq53waVSuKyE1xEBAyj81",
  "key21": "4QWayoZyCdzDudZJ5QnotbAikKtappAFaiUBPCy15bGYtwGFBDaHJj5T2jkQF2Gbf3AWD9pHGKhAEMxkEkZfHTz9",
  "key22": "4A8Ncruqb3qAVNmirJHMNa4JGPemPXQDcocYrf3NfiyHX17YXUVKHTzVEbEcMXXL2hV9wD83zvzhJRCMKZz1wE3q",
  "key23": "SBr9MDTptc3Pc2cBVVz88yRYk4s472J9CUCm8C77YXFEqHfmrJSB82sQxvASQPfs6JzuVou2JZix2wwwpAgqv2D",
  "key24": "3fA7YxM1VjMRZgrvZUdwYEMAZPFJxitJEtf5LosDAUQNutXM9TcbQ5T9ZiNdYEWJ4BjdM3Cm2k4DxGsp217kEC4D",
  "key25": "32oXywJ5vXSvLTvABbHwqmWZC5tkKvjbuG88J94wcwBTzGWb8GXFR1WMaavPAvt4REZ7Ytgxxx2iRdWZrtfcNfP3",
  "key26": "3UjK5pUdRsgeBxj8BZBUaMJfwKn2vdLPVru6XFFvqkiJBxrp9Rg8RTiv6Ya5ZuYzqhbFaBNzDfakwsErh43p2hbN",
  "key27": "2xTYU6ZJpwnvUtp8bP3brCaCQuWAGNC2W4kvXkhpPpjrBsH1duFZ14uUTodaE5uFc27hx41bSuNPZBrgjazCRPip",
  "key28": "4L8cEnCLy8a3bY1ySBNuPRMCuykrZTpsNUiTCM3pgSaNfzr2zeqBu6YySGisUURqEeftdQiGmRaAbhEN5jP8f5hE",
  "key29": "3KA9FfXGA4SuCUyUff46HbiDBNRCZLM1vNGQTxMb1msk8ZaENsfjBxmhE3hxL8KsXYmUXxneT7yKamXs4NQR9gj",
  "key30": "ZHZMurScMon5bcVdoPnbQpjo7VmNW7kHhJ1p16jGjZAYo8aQzQPbzBPRX34XdhAcWZqbWWYRw3a1QRN7ANEpNET",
  "key31": "25bRVnXLy726nz2sQiwrXjmWY4fsnCnB1T7nm1oiZYRWvDRFcM325kzRykUTXmNP7Z5hhhT4mdYHZDkrX2gcmmsc",
  "key32": "39VGFekfHZT1UFMMJ1fxafABfhVocdFP5dSAnoo733AXZ5GZAtts68X7duZ5Ewa6gSw7a3PQoKXBrPBJXkhfKR52",
  "key33": "5S7G4hoLQHFB6tAzQmKYTP7nVfKfMPZK5BcVoEu9Pms9sa5ePGLkedbJSUrUZNfvUDAjYNSBxPozHM2f45JSFyLe",
  "key34": "dVaRqdr77hyhAdKD42Q1K5iqxjVCfokY8NaKRYf9itg7HQjKezHNEDAV3GHMtJn8gjR6VfwVUwDW4tVr1nqMs7H",
  "key35": "3o1zMpx1Vh8Bs1egnfPHAha3CpHfDUdaQ9nbNDUiEgrJFW4K2wJMP8pdqEvgChU2KgNiWbbmrCSXxXftWhqti7QW",
  "key36": "XKRSAZWT3BtUduEZiffwhEwgkYXgC1SGLq48dZJViT7HhRmL1DgYC4KmqiF6MS6Cve6o2ZzxWQbsJezqFgvkkrk",
  "key37": "4iyUNLWHcjeL174K22dcHgAHa1dtJng7MLtvHeRs8iFuNyAaLQ2BvxfPfptQiX6SmC1XAnVYWTHb63ubmhAywdFr",
  "key38": "5vNmpxFHsABEKMJv4LusBBfEuCpfJaqE2y9JFptQM5F2WXMPVuwMwoe51m2U36HdojXbq5kWNyQud8oQ7XYKSyzV",
  "key39": "4EfquinHXMT7TRGP6cLEQAJfhg7Pt5VrWT6xwDYutsWpd68Lp5y2WabfcMx94DoJgrPwmAfswZJ8if2uV4hqbR3Y",
  "key40": "5nHxgm2NVwG1z1JzL4rnHGTebFwNtkxcDNVKg64fKowAyE6RqRDdDBre6E8q6pNtfYMrX6h9RrSTL7QN82ZiKcKQ",
  "key41": "4RbdL791FGHKPPRpJ3fUNUAkAZ7WjCWUzEuByGtu2DR7RgVABkwihvgBAv4cK1UMF49m23ZTnbpBLc53ihWdnaL9",
  "key42": "Aeeu9kdnvU54pM7FWpCjL2oHhZhRNJWc1xgz2mFgpkcPL4EvrsoNvLbdfdywrFdYUzw47Hh5q59B63tdg5QwzLo",
  "key43": "vE2h3cbQVWVr5NFWZjw9pvxUgkHYtgQy5DNK1uAvCQ5ZoP3UHXtRcWbh9kQsuFjSqW7cy337rmPbxjMPjojc4Lu",
  "key44": "25RNLsuKP2BVMYK3QtC3D4YRwRzVFjnVBNjUHeG1MTFzF7u64LFuEU5Zj8q4M3FMvAahs9hiqffnyUC4Qa4zkV8o",
  "key45": "2PaaQTv2yY262xYTb65jMK16kRyR3R7rqCibwEBbeqdJCnciptr1c9R67AnUVeMJtWvFwALfa8A1hYGnXnxpxfyL",
  "key46": "2opUf8CaWHcac45FVD3ikobqUjqwZ9GH1XRdx5RhiVExGDzXgrhJMgWKBpPgk3Xx46G872Q9i3vPaAvDwN2Mpsea",
  "key47": "59GLR1TUME3rH7pUQx4yAV1H4NvsKhWaXQTZpw1X518CqdSTaXeKgzD7yCyRjsviPkPmwgwWRmyht4iU5AgbkbC5"
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
