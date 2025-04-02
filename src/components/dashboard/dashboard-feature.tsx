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
    "rgtAAxL5sjjrNTNYTodC6s5XK7kZ1bFyVdv6wBUpFaLGfrxJTZAAnSy7Msxxd1CKgSYcz4QtntWuMQN7WGLm4nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RojUMKt8j41fjukxYCWhrzpGRmex3iWkYK9BkRSzbBYkwJid5NzTgQPw8fxCvz3rMdtwJyTUbNB9Dyj2L7u9hcj",
  "key1": "259utNNmGknCVJUnw5xKJzXsmQVxYDKZuSDhxz9XX4mXMZfc1AHvR5VrH4WNzACW82E7aJanPFjNNJYVTmk5xEHW",
  "key2": "3LdMfnZPsFDfhaoAHYbgZbzPgw1GWinR7qpjEuf2vLV22WVhQqU2pGbtmBdGvF4ZmCgfLEhrjx5TLt4MVzKN7Mmp",
  "key3": "CDPyZQ6gpHpRqz2bUcaoK5dRcfcTkqGRYU8uyszxbSbnQic46S7GZLF3TgUVYVzZLAz8XAVdSP3iYbrBgWDRaEs",
  "key4": "4Tg4t1JYqB9DWZ9QYqfWuiUcGaWm6r2LVM5qi1Ya9k8ug3ek2xK2syJ6JM9Wze2Vf4RFZFF2CaqZGs5Z33Xj4fx6",
  "key5": "5WUktRgSLNK4NZRxmxGV2nuqUvNWxGa2L8LuuNbATvZKq4T3dmTyYcR85abwAqdUdkZnDtVZfybiURwEouVyCwbA",
  "key6": "36WojmQ51MtfrJnWkZHcth7hkdiPDngz1Vw6nszjXT6wfAAx7cnsDRz8jRNLt7jcbstif38ViQrvFjDidrYi9Auc",
  "key7": "2sHBZ8h7VjsP3hyAju7vFEBtto68zFY1A2KoGYAVj4tnjGVkoESwJgcDRpGu3LcS4ySCUpo6PHHJAakPZoXQrhg7",
  "key8": "4vbRhCRWeNxMiYXgYNux8GBKUV2F2RpwdRu1QDVZxtJCVHxFp4h3EQKj9oHw6AzNJqaFhYQhXCTNNxFtd4WGKr23",
  "key9": "3UBcFeaxvaPRVJusEKYeyKWWCbdq6PqjPfLRxogUVN9Ezkddh9YzcQpKGKdH5KK69ybTDqWxZhSnscvQx8Apc3qE",
  "key10": "4HLQo6iB5gNMwuBtoXHWbGPxNpeeW1w5DADueLWkjqT3t7qVCszPtbAkwNr6bj9yKx1vVkMzY4CwDS9y8uR8AZTs",
  "key11": "3359B4H86vr9xQcB5Zf2QRGmAQGb6gvqeYwFDgcjD52Dw7VdXu9zVqWhogPWVMXifHp2kSUxGonGyDFRCPPhUzfW",
  "key12": "4vqDyHxRvMpSo95inDBJtuQpjnCdRoB5ouWtwfAH9zeZBGMJDNZWP3dwvHESxVozZpZvKCiv1nSakETVJj5QUERB",
  "key13": "mqM35524X3mUvMKX5F19UDFKbWoYxQ5SPCHmD5FGJ55PGqYt5GSqHWsiWf3z8JVfDpvLtF3DbqZCqEqoZHBgh88",
  "key14": "dJL43hDTkyo2M4L2exGeAeM9ZiSusgunePeCnt1b78TsFFgwJhyX1xPBtjZk2yFhxhQtafGLFwgQMqKF7qaAcMS",
  "key15": "2DLwZ8uNpR8YAqqa41Quz7wwt4MQyE1UwBugnEdqqDjjueDVP9L2Jwoc6CFtJ8iMpEqYjARtDtob12cp2b7A6dLP",
  "key16": "5CqcHUWs1XJb5G8iAfjU151MNi3ssvLFy3HSpqvWh12Wvb3Q8q5TTVPkMmmJxB134uyScqXsmUBEc3Km9oWTSUb7",
  "key17": "2AbLnpLdFnEWnig9EwG5b5zASpVoWUSo14i7sUs1jjnEM3LrXxWav8onGcKyJH1mi64P7GD3AQcxGyC5SZsXjtMK",
  "key18": "52c7yZfgYk59nGfbSso4WEDBa6qtYg3WqAfhRVYX6pVTcvDvX1kAZNmbehY2rSysqArj6WY2rLxgzbFtWxfpxP5v",
  "key19": "2jfJrDfht17BAbkmKZQw4FhxzacCoeNKfW7TdrK38BPmdX6fvfQVWbqSD3HaNbeiq7ZT4uyzGyGWAMMzUwxHZkcU",
  "key20": "2kLBoi2pS2uqWQG6doMmxkEJC5Meoif727dfe6a3omRQtMXunuPjbrP2nq9T23yyZtFNykZcaXzRaLuFsQjHfFWK",
  "key21": "3jvVtisVAAx9bJsZKt8j4cQEGe4MmrmCKfcdvMEtGT8CsPhvTkb2kHvibTjp4VFHybGNFb2MFLMenq6aC3TTTLrn",
  "key22": "z7d7bbYFFQWqx2vo5WrwcZc2zvPmsEUfGMo1asdvi9GUgMn3PYe4zNPLVEak2P9EtxnuvArAyt5YCaodPxdgb9w",
  "key23": "4wYvKAyRj3rw4afzUAGENubYNMi5G67rNiEQR3qyf14zDraqcP4kA2gHTa1c26pGz4aBT9S3QMdcpE8AhZCm5gVM",
  "key24": "2AXZZVczdYwWWRcQGt7HqX3uDnp382pbbRwhRUVUc12WpGUD5L3Qc6cvNRmYDAyQ6z7mC12tr4TaVYFa3NwTvWmQ",
  "key25": "2qCPosSPt3ExbDC3yWxorcNFaugaeHnLz5mqJeiX8AnEYVEFDtTRoyHMXUXDAYCuyQo2yrBksgBExbV5wVStuuSE",
  "key26": "rApRVvtdnxaxjoc6GKEGJ2vwi1ETTmgXmJyU9ekk9N6Lf59ePjm1BoaCnaUSQa7TCtm2Gq8RmsXGMcVMnA45nFL",
  "key27": "2dwVnXrQaqfAiHSNFaAK3xxkygYjGGba9qQ9v7T4yx9DW4JwsmqeqtPD6EjGLMZLzF1o1pfoYDWPaJoBMyp48ApT",
  "key28": "2kiQpL5LTuuG7hFkyTBciCQB4qppYBybv2j1NgM1xiGSvi5iAzUfdxRGvbkiWbgKHXYXoPd2D9vTpcwEJBLDaaRY"
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
