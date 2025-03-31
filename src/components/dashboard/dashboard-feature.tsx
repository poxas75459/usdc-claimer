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
    "2WnoK1YaN2DCzsP41n5hnixafkQ5gJ1GhfTeN5RMVPstUyJekFPSr7c9LZWRkhMtPAarCjUSFSZqSjuQGqXJLxRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMzv4GsENjivAAc9WMCifGTeVpNAgj8pf2Kcr3xDnh48foqGxqYitqRC1Kw8cMt4LKVjdTHLBBGUXaN3eJdVwuv",
  "key1": "3JR4muDPteafpegsuNJjV4SCknBjUsEDK1hPzH4bHLypToHVdnTGxwn2SVqWGgKYNcY9SeJbLnrjr7JkW1eLYWkp",
  "key2": "396qRq7r7vRh5ZWaD6nrQHAbg2r6dBKnfJTL62BBujpM7VXZV1NU2wu4FFHgvTrtcn5NwTovGqJiKasCSFuzRxzz",
  "key3": "4hoAVXrPDUC2twox3Ks3LHbGbzgafUFtkQVHg5Mx9aYGzYiz1k16hmVaaq1kVsN2pY9qZXJ5RSamtS7njJHMgRMK",
  "key4": "4ihPzBaJi5g7u8J851tASWnZcVw8kPEEbTkpPvPAn4yaBuAFwwdABkmGmXmUyRBi6NKJBTubcnvDzZpzNHQuknzW",
  "key5": "3V2Vt2hbHezfAzTGfuagC8QZD9xc6SjQQWS1SKxPo2Ze5PKvMwn1fYwBWme55MJBNhYrTpzC8sT8rU6vWKBcn7tK",
  "key6": "255XgP75TqgriVXiu9VhgvtpT88f7zzbEbrRN9BXMZcC6qqeBnJf9cbWXRRKi5wWgbhrnKwS7C3bJCzdU1REjGce",
  "key7": "54FEC88dMkLbRNqE9HVfoJhoQhbHJwqjeJJqk52XwyC2TccdGPSadW9PTfPQVXVrqrZdjeV3nDb92V1E9snotHVY",
  "key8": "58aBFts62fRwMqHyEuqbgKfppCumfzRLNEa6jyk1rrhd4HLWJanMVHXKNf6BTZnb65qvwJ1fHTJzHSyAZzfnUaCg",
  "key9": "4Yw7a6Qy2c449ANEDFVU2CFFVjpF5CZ5y3R6PK8EETwoKhTT2dDPKXu8RnkLa4ZU7tSzbhHxHDS4Y75qkSeXxxgQ",
  "key10": "U213V7UMuweK61nEtxPn1RAQytYYrb57gtrPa2GdggRLZwbsWAoQcd7xFBDiE5pwNMtWAwzE5SkveExLsMVg2b5",
  "key11": "3HzbGDAgpgNFKnxHFGxZfszfN7zNML2DcFyY4VAQKzhdnKeRvmoZZcyBqEM7y1tRw19RU6D3ipN9TbLhruUdaKBQ",
  "key12": "4BxEXkymJtsYTyLrcafqiLMe8nNrB4cNPUJsG87HxQKRkKVCz2C1YRUZg86pt13nVD7opj9CErX7RCeVLMp5VB4f",
  "key13": "4djavCRQj9yDhGJzH6nwReLWoPJTjnS7QNtr2oJNqiuVSecaXAw8jpbTh4UUoHSASShq9kfTxMJTz1ZLoG1UDYRi",
  "key14": "5xqLPV1SVMX4dfz9RybEpaYWvmafCVqPtNgEKMg9U41cCBB3naYwm8dyezjM6hGDyRdxbBDBEwpNiCnfhyxkmGGs",
  "key15": "2GkvqdCzimpzWciUXmj8bAxJzTATmLUYjdiCPNA37z6wSwxynLVZNYcHJ6PTqxcEMvvKuAvrEgDvmfd5kUJKaaDh",
  "key16": "keqVUh8a5vEgP3EqJdHruG5KkapHPa5qntAYryJrCCrc3abU5USFLBwzZb6toMHxaJBq9gejJX657B1CFa41rqo",
  "key17": "5KHjE8UPrk4WPo9srWgxpCXK11gY1KhkXUKPy8UC8TFt2eEBvawdsVJxfkEL5TpCpgJw6gkFMLubX3qUe1tGLR3h",
  "key18": "bevhMhJSQogPAQriZi78XCYqkEtf9dt8itEJWf4JhheqbJYKft533QEy96AG5QAcsWVjkHYsdpVZJTs2vpQws8M",
  "key19": "2BajEUBGxRPEZT7Jb4WaLVrJ76eWDU54CEdPxJD7L6qJ3D9uVag6FwD4gHiuLaKmcVKpPRSQRLL647G9FGiyxWYj",
  "key20": "oBqcMSg8pYjLb87SZUKRkKqix2RfZRrGi5HE8tRL5ydn6UXHwcp66mEsi2vFXLXNg4D7wU16KJcjoHTYWqso1CH",
  "key21": "3Dem6bnQ1Mo3x2DzBSuQ91o9gCKoEhqshP2888qamQ2RonmsjteBkdPiaxKYMiny5GYv1kZswaRCtaav6EVT5rXq",
  "key22": "3dkouJq8UYb5YaRhAgshtTov41EXuEkBi8BCtsK4B9KFPYTAc3GDeudHHgH5oEMGLKzziYGCeGM7v72ikZn6LoJa",
  "key23": "dy6JLMo8vUMtkyxijW4YSFvbmpFxEFEKxpCUTq9Z3J8d4YFUPa2VYDxeiSbJ25ZymnW2fCT7B3KDfKqUueC9C1P",
  "key24": "5k7bozqdBhAzKZgyWrF7fsJzR7VYVZuV1459GSGP5VYBe1pmdpzzJuy68xENzJPQxzSvAQxi85HeuPssVrbj481M",
  "key25": "Nt4w5q2U9P6J8RZKz57vkpgYNY1rYwoB9wCHeBwoYecH5BNzaKCeBzWArNKU7Jpcgnvngw2Uvt3ZcHqYkHR7VrS",
  "key26": "34enkDucNr44PLZwigy7d7Py7sAEu3NdgvyH3vgLQyEfavUsREVeZR2eJak19GcGrXL7RjaNjW76fztmMyga9qN1",
  "key27": "3EQ7QZE9hcqbSVaHS54HbyZzuEpY3BELBg2gLYhUwC4vPThGSLdZqsGvevdCLk77EcpArAbk6ZMfkMqmg6fwnttV",
  "key28": "x4iLNp8sq3aVKbXTxvLba8TvCPeqZYoWYKKZvzEXvDWWzN5auzqXeo1YtFsmdT9VcGBJocQbaEVzkKARMeghNDY",
  "key29": "VpXxp5xBRR595waj8KxQavD8L2KeC5SQChksuXKvCEY5E7LvsybF1fg32XMDMskV38hbvHp9BaEvQUv64YE8jzq",
  "key30": "2Ky4hpFpJK58V9UfCHBwkhaEJudFm4TCkSU4XAzFBKUxhp5MtTbYWAu7bZwEKThqC5kMYoUe6ycrVTCMdFrV77UE",
  "key31": "4ZuWWBCpwNPTsyeX8WqJmuHvqsi63XKC2uQdQzCV1dmwbDAMHkDp73oD3sTL7Wp4mg513rvEjeyVfPzGg1cGUirk",
  "key32": "5vUpjBgScF8pvJTdfJvF9XzNRDQqebVbEGmZXZoEtAAyx5ax9GBDJ6XxWKRCMaujBHz4W3VrdVYiWtU3dpHNsv1Q",
  "key33": "2GrGRcjKMVvwDFzYYvjqS2V2LpnJFp9RmiivrWbkzbCt1K833ZuN1BLVcqEfyMfhRRypoTYUCDWtMFDYc6APJa5N",
  "key34": "4BnPZYcPnKD7E9woEYuF44oAQ2exAMTsk4zNXxEf9x8E2zR5MnvpwTNwz1jUSX67TrPG8J5SLwdiMZk7zpoeZUH8",
  "key35": "4g5tySuSZcgj6DAM7A9dW6N4fnWEn5R446WsAkhY12574tkPB8uAAp2Nm5BKjGxvY8snre8GWUL2tGcBVcHCB2E8"
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
