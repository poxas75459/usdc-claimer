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
    "2VaPukVYswUDLaDvUpQexpHqFshjP7SUszHXLVynN6eZkyLTh1udn85955ZCSJYrd9vrUcpjQmxH883Kcie7vWNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zUiLQ8ZEC4jfJXawMpqAwe8hoSUaXA8CxDTRQBDj3NwMRh2X1URc4AkLuGK2M5BZPgzPbrBTYmcX1FdDz7fjP48",
  "key1": "6ruA9HRXLxFCoyxe8WoDNMGjxpCyiKPJQMhbEW1nJvfTXswt3inLXZP8yHizQ5XuA39D5LroLFqt8cXh33LLqe3",
  "key2": "AKpNV5BChb4UJeUzT7ZCrSg4PNFUfRtudnu8zZroTEtQPHgSXTiVevGzy1ZgQenAM8WTp11zRrnqC1J5gqxmuY3",
  "key3": "57UGAo27xCcj3WWoSEKGhdUuwaQ7DvrFzmXMCTh5gT1n4SPaKC51wU1BMyUJNwk4uttHd6GvQFVdcknMwrztAvsq",
  "key4": "4FbVhXjPuCDzi8J9hyk6hQLqDoVBqHFzEu47tdGFNpUgyP4kUWZEnGBiELbY5TY7ppwfS5omK1F2eVHvmwBBkrkH",
  "key5": "2fXvCa4R4j23QnVwi8of7a2S64dntFT9Cixwx73vMUTiRKSSN6Ax7dCSdp7Dt9J3hrWnp6F4wFrpEqnT46Lys6qC",
  "key6": "2J4pqMZdcDrs2DnUJMc3U32ZP6CwotpsaccaJMjmEcZHZy2BT8KvMHUxo7cXQrz9shWUgjzyjXLTS283uYuyKUrL",
  "key7": "xihuAa7gxjbRjcFcfpQErHUbJXh35wvU4Si7Z8wCfzuix9XXdTZDHxf1EaLTcYaYtSHJFfpxoRkf781Lt4KEEb4",
  "key8": "4SR8WtHS7vSxtL4b5w3MGuGJZJ86hfzaAdxGV84vi62KAbWB9U8cScx7uzgECrZ7ACiY5ADhNcq4BtsJVrHhAsEo",
  "key9": "4poXXrBW4rCiwxea3TVsb6MLSJtd6GDEkHCfqW4FaMD13vDBURGwYpEYK4n9ts8N8k7dgJXRyV7zmwkD39fJT4oK",
  "key10": "5aodLy4fKQr2GrvAWBXVdE5qbrS3w65iDyxnQSAMY3b2PaUMaMP2VWy8TJHHkjezkfY1TE14XPiqHTzE2xnqG9s1",
  "key11": "5eCe29Uo5sxbn232btqD97nGkiT5XKBmmrKMBiqx9AYsY3WraeKCXgH2tPRHnSJt33uBadkQhawFRAgBWXFoxKkA",
  "key12": "3wXqGVSEDHrJXowjfLAxS7XCwaJcTJQV9v7gcgR14bhb2aLDP941z8JhSLL6CrT2bUTWtfKYQRUZpvpiBwERi4wd",
  "key13": "2HQobCCzLxaZ9eUpsYMyKFAXKT6fHHjubjFNfsciArYwX3YDtrjEDv7odK3DtsCc6VHVZYoF6LFuNpav1gjoXUjZ",
  "key14": "4bRRU55FVXNEv7h3g9AvnsHmQvz97Cd8Y28TYt6cU7mAanHn1TiHcALTSQBEQhjJfhCpH2YwDGsPeWZFwhtBALkW",
  "key15": "3ksSsyumtebEeht2xFbaEdaZoqVGV6WZJ2Stk9gF4onZJuGZZrbzs2GuGQ962VrRYLSdrPYgk1Jj9DJBmmUWx3cQ",
  "key16": "2WumJnanh8pqkhAgUqnC1eSpRuBCP2ZB7TaJfXCFjUbHxFaQDKibC7KFqrXF3avgwFVnAuGjByf3K9HvR6U5Fu19",
  "key17": "4DznEu5EQthPeLrC4id7grhS2bLbZvbtuUFmLMPYAvQxeUVedk8MNjGioQ5EViXv5d8hCv9hwrhT5Ec4KyDTn5vF",
  "key18": "BYiufGWwknywhptCyFTrgntqA5ujp9Hi3d7UYhBDJZTvayHFpmvx9cz7q8Cp289rko1zgzias6trP97UTWv9Wqg",
  "key19": "3iyWsApREfurGLGYvdk3FSp3GKkQbzW5HtPYVRD9fiJXpDvxeYa1aJcn7LHX3ohA6NEzo2ZwwenB1JgUo4oDSqNJ",
  "key20": "35MeXrGvdzmJzvLGQAHunL4yhVpYpeiAbuGKviBGLFNCM374k1W5Efwq6vjz4gTprCpyC5ZhDtr3H3vYJSF8ozYM",
  "key21": "3k9cB3pqXLLKdPVxtKQSjMRemDrkdHtotxLxNnVTxZGEohvapQQDe5vepbvU4Kc3aGBwZitXFSxUTbUWV1aDczTo",
  "key22": "4xK8jzoDAcDWareAkoCZ88yowADkvLDkbPJwDhegTEKsv6Tks5sWCTWvtkfqruwXovXPXdaarwWqf5bq1VShgvaR",
  "key23": "52cEB9XvU6fATmTqKAFsU7J2NnDJdKnWqXi9YLvQh3qRBPfmZGKVAK6TVkoAKEYCF4bYQYvtVgMJV3E4qrPNgNaX",
  "key24": "EUDrokLHzfVyhYRvDqxYAAuRGSWeJGS4LKxNiah55LzVf6NsvreMMBHcVF8GFHiNwvDyQG3NZiNm9fgifZrEogG",
  "key25": "58so36ur2NwEJvGdKzRqAXzqDb5ToJ7EZ6mvX9wLDQ6fks6XXCvrCy8XLSTqxyKT5VvsgZtjiJx3u5VjBRuhp7sM",
  "key26": "2ekfsoyqrjBAuLRbzuT15uyM4Eik6rFU3qD7EjNNT19dG1NPHcP7oSDzE6DG1aNxVzQXjUhsPGXGgrYSYxYi2SVU",
  "key27": "5yksvVYaXWhYpX6qd5RTVhB3Na6ooqqriUaoRc7R7pcMpdwJdVAyuE8vrN1bHoHAE4YDMEysLgiwQub8joYFJ3KW",
  "key28": "4Ttzsf9xYSZkrU72s6AJKY2kg1h5pzy1U7hka1Dv9U2zXNkwMH2eJBrRuPTTDEygDKPDDaPoYib8yuqEsibAyukM",
  "key29": "f52wzfv9e3FtZL8pZr2WtceknfhHUSdYMziF2hh1rzMYyyGY1BGqTwiMAnZEhkYGMFafjtWGiiDjsSoiRv6s51h",
  "key30": "28jxrCRFnjHRT7FQFwaLVnoxAe6ZVHn2y6bVCirSYovkzoEAhmC65fRWqueBtVYr2uNLGhmqbrDYzLC91KJ6hBRq",
  "key31": "39ogonxFHwNfxGyvKLaE72or4KWP11GLFdThxFsXfkhajikwYrFUAewNG56YMJVtCGF9tC1mfM56R5EDvCbtSj7R",
  "key32": "3g6SRA4Gvyo1izCTS21RHJdvt174hU9FEXT9ing6cNmWYo8PUMHosgXbDS6bL3UTzPPntg4aeC2mmGiJWCHWUKp",
  "key33": "gS7porTKuGwuXvWWdZibRUv4MaEYJjdSyGGx2CLV8QWtieBpcweY4W4dtze3edckv21gCVCG5KNyNRpvXLNxHGC",
  "key34": "2qjVRNvGG8D2BtGpLHuyBrQTakmAzt9G2f5di1FdZoEg1KrgkLmJvXWt4UPfqMDP68ALkRLjJ1EQ5yPAq6MaX7KY",
  "key35": "4kghXrMuciGYNi5CaeZTFHuUmdxRXpgJh3e1cvLues1vm5Mo7LVXrvDVS6ANGxEWtdGvVb7SMdeXKH8vtULCvNum",
  "key36": "3LPJ2FZaeVkjJnDmLR1Rfb6JS2WoaCdHytAzfcCCaaujsRw1ZNT6hW8z74qWM7K3vmgMzTe3nUTjxMWmsZGAvqzf",
  "key37": "37XMTMLmnJJHbnEFKMkCHDKT58rth77NGEUqKsJt9hneNpfmHnnVDkXBYVHizWTPBLg6HBmTQ7UAxPPETaom7m6u",
  "key38": "2LEzAZM3N4nUbXHHqGrt8MzWCcvw9iQDtcQHQo5T7ECThfL1P6zTZaRkyQ2PZTjseF2PJLJDv5DhfFE1vqynJ3uh",
  "key39": "5pG8rm9HSyhFbQgSqBBvfXHBE5uhnGabtchMA1m8egnoDnbWra6aVVYjAgMKhvYhVDhEpZycyXmpHuLbLSqjeQqN",
  "key40": "SuMi83WCWK9iJnveba9zvL4jcqozA4kdEpjE8CuomBBYTsyX54QAiVpti5YGaJuvncGqKHnYQ6Zq18EDMGUvq2G",
  "key41": "4KR9FK7ttdk5PqFKGgstwTP4vQw77estDLzm6kKLmkEB4WchWswWYrh2c8CtmxVP4UN27mSYjw5xvAiF2skCFeVH",
  "key42": "3KyqmT8wJLvZkDBAMP37uKt6mM3RWtkDNBMzAC2rVtdxHG2Pga6j4L76a3jYL22ZBWut63RJVqsX1ujTUi1nfN1e"
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
