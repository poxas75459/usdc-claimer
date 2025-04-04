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
    "2CG3wEifqFGJfzdXaBCLao2FYJLtLNDVfwpDFBXYeBodTWLcMbrSKN7s79KnuayNYKqsiJG14b9QaLMLX4DNQKJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMtKGrCfvq6qfbYhNW37LKALX7H49xfFBmHjc5vK1ZSUkTrYptEKVEzs3nN6oGXPhTSjxfHxSMf4J5kCvXnDUCe",
  "key1": "3d5G137tg7HMeuYZyav2kxSfjSo2TSguov7hBWNKKg4mXUd7ArPKDyb5v3BZgox8mgZMTknNz9HJps8D6wb8nJds",
  "key2": "4wvBtAu6GkzboNqWBcgeTDb2a12hCedHB97gVV6u9phsVhaS9BUWBoGdwvFN6kARd4TrAmLAS9K3No8c7CAiTDGA",
  "key3": "2cv5dmXNmvk4M8ZkdmPRSnWRNVYqAfynP7bPvrLzgWneVrV4Q6JArWsmxqWNQwuuaWEipbPuf4Erg3UaBCPoGAVi",
  "key4": "3H2esAYc5xnXPSUCNRCQhYMLmgyc5nTowNHCmuDXF3iyoANKF2byPFYZd2SqYe8XWD9gJtzZQ4BEGZSMFMg1Cs5Q",
  "key5": "2GBajpaNHUhGELfyWynt24eeAPQyCuHXguWeLRmqaBweUD9NNeYEQZSjsDWAFepgpUdrqqtPUNuyrvyoBb3d8VHH",
  "key6": "5E2g4zHHQSpupUCYZBSxYVJBRHAPNCQzSxppUoUDuDxt9QswprMEvgBwuSrLhq7pXYjZ62X4XUwse6dJWfwq8t8",
  "key7": "sChcajwvXKiFosF5paDBJ2NnpVcHf5Tvqp9isj6BrcMLXtbrvsHqX9zkt9rtC5HZqEHtQAGLNhTXStFz524vyU2",
  "key8": "4smp9JenqL1cNjmbJNB6rgbHF3vo9crA45YKzcWEeweshZkcSoAmjMU84Rx7hPktYJ8E2dG9C6KZqzGHJsDA88AF",
  "key9": "44cAXmJ8dFecYgbrV3SmK7QywRRh3qjpR8P1947fxZDJW2jhquF6WcWZiq7GmoA84M7KdfE3UUcq18gSpQCzgoXU",
  "key10": "49KJePWdL37RvUv8KqkcCpLUBmEFzNnTgJpRgkBJbiE8pvYWPx7z81Qb5kp9HfBjN6cqDc5XQHx2hNwtUstbuVrh",
  "key11": "27ar1yNdKQYF3kzBqK7SuZmCUjPbt1WnBQghhbehdWXrMYTB1MzuwbHqUH2zi9aMbGpMg7mx1xopjNd2EbaLdrC9",
  "key12": "5EXZpRYGx1vpCrdN8oHDx3XysC3XAg9oA8TWszn6EEL2GF4ssiutaLzKF1Q8ekjrfRDFg9yk8iMBU7FFFyt7c3ha",
  "key13": "2jbS2vKqXVJDtqqnfnAkgpLfz4xFrPQUGFEhKfE48B92d4zGk7pTjxowS1QCeuJLcvKWwH81YYurQA9aM55HxQeJ",
  "key14": "5N9HFYieDKzCthojQ4xgGXorgnnj92PSzVQj5d663anFXndM3pKfuytjnMgacowvaAoHyLDBSuPKfVXfQuahtfWw",
  "key15": "4vNXEFRRuNomctkc4qKcQoxE6T3ND63iiEHktN92RQZr8S5uSTETHPYYWgVhJXpH5TJAaNcgTB86LVGGNLYFuFT8",
  "key16": "3qCKBMKRWBWiarci753NCi3WxV7uEdi8pzdv5FWsRECDVJ8rCi6gZVaGxE6Rn1b3QXn6mhMgps5U2moBVaQBbhkQ",
  "key17": "3sSqNjkH5DV8UVcQiT7cqshdUVpPp2Kmf2LMp5ABi7NxsTfd6hiWzPkN7MYja5ejzkD9zfMDKfYGghE4RmUNt4vS",
  "key18": "9Y9L1guaC4vnfhe98PY7m9tukowLvpFw2tnzCWs3ji3kSNLh6K1Pa3UqDcJCdqAixMsLxMdr2Hue2GBTwvoW8uo",
  "key19": "4X4XZgcAzjdUaVVZuXJMJP3bpexqqE7mrmBBHiRgEdot94nN871Bd21Z6aPgg2JnbaA9dHwkv2f9eXZiUS8qazYC",
  "key20": "44WGQY1ZfYTN38yEWwoHik112XMfyfq2a9VuphHawcGL8cxjT4P5NNKHBUu75iBpyJqwCYjSyqqL2PZrdoHCKHxC",
  "key21": "4SiUr6wHWPosQ5EHLXoBo7TQgZwHQx79GxMWW8YSf2d5qymTWeYM7K6DaPowH4X8HhJBBSFnq17NVcp8VFbH2mpe",
  "key22": "4Tsu3K1y28kyopYxRTqReZAWVRvJTKCQGW2eWnksnG27uyEf2V5WRivprnVxFHi65FNnH1cboDb6RYaykQ6XK4iX",
  "key23": "5g7EL1hRRHTyntmkY61RwPJeHdibGCbiDVRKVsSjymE8mgbkz3EQPRjvqsyG59s5NRrgSFpNRWZHVQb36gXBpHDa",
  "key24": "47o2Abz9yPxvvgypqgiV5jPtb7QutMVuzE49REejYiSXCbE4urHvzWdGbKjt9ZCWEkREcgZvAejgqeHfTRzdZd71",
  "key25": "rd9M5WKCKA7yNNUiZaQQbmPW1PDQXQ96DDUr3nnKBXkBbxEJ5jLd4qEqmCPgJriHNa4DDokBpemP2a4M2MUCm8y",
  "key26": "3tj3TPm9vEv2QZnbHjtkAP1LJgP6CBwkUV5F8kG8wYYtxDyWtC1pPyA5hbTeGBRiqP239EnuWDcCftff7MgEZdHK",
  "key27": "5kq7PUhGYF4NzpB3EhXpd3WVpWGLNa2ysqeRp2GMrzGwvFGrW48B4Gtno9Vx3LQrToCqK6NGTRDW9KmB526FJFbe",
  "key28": "3R8yhhHB1yoXx8Pbu23QnHf6VqPhUHvHjQtsdFqeitKCKoANX6fp2Rsk9g291jpm9KoGkTHcr7waAoA36nbMZiQh",
  "key29": "37sd6ArgtbRatwCVVWQxd6RL7A6SnuoMMAxG2yoXDuaaDqQUHrh9GLdXFS3DuxGWAgMtoLTJogXyCqyqLoWCHxq5",
  "key30": "pjvXuokcSt9YLc6vRZzB4ZDiD9zRRv7ggsmXvyYPM3XxhAJacy5L2tmiKn6skECRwoYCNnhaTdKAjS5YUw4N5h8",
  "key31": "3NzezRiZAT8i5AoSpoQtxdpP9NPT3pmp5dkoFSNpHPrZs8Qzzf1jBbTRRBMvkNC8m37UMc9HxshYisBkKqQYWjyH",
  "key32": "3m8ghpVS6x2BDWKZQHJSTh3FUyCT9UCHAMnEhswMWdvuPV7WuCjrNDru2Gq5LESqLmJdbuGheUNoFejp8C8D9FGN",
  "key33": "2QP1NL8DpTCNNZd1JNgcQ6r3TzETi7k3D4RHASAZJjPUKaZqwqdXHxqZL8DBSxgiCrsT4bTDLKBEmRrucHZJY34h",
  "key34": "5muozWAwcTQ8kMgvRbVxGgebEX1VqdkKam8KDxbeAg1qwXDC6Jtt1aAt98dDKy3UuGAHSPGLSiCQfQkZRQ3Xiumk",
  "key35": "2aXknBFv1GqGKcPrayQdSJJoiuNXFs2czu65vF5t4PfA4BL6dcyH572P134Jr8orq4SXYst6in37shb4AMN4JH6n",
  "key36": "32LJoMNPGPAkqYGkfeLDUF83qHw3qVynMHGfiHgBuNZ5NpBCBpcGwryd5W7hq3cXybwzD6BVKq1YMSNDhJp6KNix",
  "key37": "1YmgXWS6Z9Q9eEH7pU7PArDCWmVvQFNXkB8YLQkuP5iVhmcabEfrcZLrGp68eGxBpuSNgmg6zKkTEEammemrmsu",
  "key38": "a4AfFyUTd7VeQtrgU1eNYKHn6mqYej8xQTa2gubZZ3UmpmQB9e5E14GL9Do3etn4kXBr57kEcZojvQxXGyGDJyv"
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
