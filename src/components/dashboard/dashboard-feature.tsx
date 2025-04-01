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
    "4Z8ANJYqxu9BRmGsGuhKtZfnaPSZqYJCmbTs1XAXYc5mXFP28yxikxwtnu1bh6Cax9B3xRBScPmpK8DJQzWYrdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cLEqwd5hZcSFuEAEyLvVNCLBM8vHU7yeBLv8HV5yWuDbXG9eA8kgQP8Rfizpy14z42FJJNrNLZ6QtUURwzQWy6N",
  "key1": "5QTaeFodT78GqcNXfH9gYqMMRsSE61TbkUQ4ZUB4VqE94n1cKiRmtDKHB3a5XJDqAfwnMgX3TaLi8pNuMCboFBAP",
  "key2": "3mSDdy2DEG3Cbpf25L1J8Vf8t2FKFQJSRWG34ahAkWELbpJq1vmnKXY91M55ouwdv9iKGBWaS5tac6woBFvY4X1B",
  "key3": "2gtpPTBA5HseCcYzWEwGhYnowmdprzG4DqKm4MQwvGTYrS3Fgi6LRUNwS8ofETxPTST6TWDmcr1PoJvsQVoHQfjW",
  "key4": "5AtzrKsEPPmCkVzivMx1AYxYhhaWKbB1RHRpr5SbK3ygYGbARS9mo3syzij9touq8GZFepgQ9oHznBWoFZDZ4333",
  "key5": "5km32RTek9JEY9SFLkhFWpPCACi1XaPpQXkAB3FxniA62bcEjkXrRsHb49xy8HLYW8zyUkFb9zwZdqqp1x8RPvwn",
  "key6": "35xbPUkLx53EBQdWc1Nbw8Ex13koicdfDinqDEQMFviRUnC6haeH8EQMs1W2FspCHnQXHz4DQd1XspKBHf5QuVe2",
  "key7": "33ZX2pG8DDdTrtLjYB5tmZg3N3njKb1yzeDMYx5qAbgYFL843A1eedQnwz6UsbAoJDAXqMAYSZo3VYw21pp34kEu",
  "key8": "BYK1P6QnpWirYyYFutgmR7DKQWi5uuLjokr5vRdkmcfba2KHBR9VFtGqvTgGMFYLXBWn2W77z6MrozchTAT97YS",
  "key9": "3JBJcixD4dzjGhLwNrX1T7xG8CSoVkoqiFUhpe4WxTz6m4VLtnkLzUjoyTepBU6qyymQFR3mKGGQMhW1Lj3g1JPL",
  "key10": "4rSYQxJr4v2JG2BRJkMhBQMPrHcDV7yGmh2GdcZHjQMLaKehyo7rK92es6dsZ6pguNRCXAaJZxHQaqDk5zu3RKCr",
  "key11": "4N8axFeUk5qJs2yufg4cumGW3ugZCPPVvY7MN5GXDNhQfJNV29LZmQMkB2XEqzLkVDecgXWRZstKjUwkMJvZtFQ",
  "key12": "5uZ4J1KhX3WDfPb5YuhispG6cFBbmngE2iQDxtPgNM6XZMXTjMzyp6on7Hb6qvHjMYZnWLcwSUxMwSV4U8QoSoGM",
  "key13": "3j4VMYG6c6YhqXUeEKoXzw22xAca6FyAiNcCVSz6GLUvr1ZZVANRHE2ad2Cvy57jxF5Z26n2cizFXPGnWgpjHSr",
  "key14": "719QyP9ZX2X71zfMQ3LU24VD5vVuHLMzzmWRUB1RGk7QBRkfMiHb1tQM53Zw3aCy5MCwwaKwuRqXryKAXpdfW8p",
  "key15": "vf8Nmvh28K5keySSqdGKPUUbHsH52Jz8eTPC6T51cpbT72MYrKVTMCPTh5i5gYVRQsau4VddNGoxTXzLX8qbYmb",
  "key16": "BiVKnWYYVMkqqCa8T2DpQh7tbDwHB8BuT7u4svaGPGzXjfhMW9siVZWx7i3TS2tUhfDBP4RLjn4KJ1LC9Lf9duf",
  "key17": "3g6u8tPsnt7zS6VYm9uStGWVKhPQWpPf4dHnFbwYQonxVmuzp75XxwYwmw9yp1csY3y5Bmhmv72YpxEQVaAXjeCt",
  "key18": "5YWGBchdXb8rpXLBh5AFRpYFZYR7zGcE9tVsigusY1x3zbW1uzpmJUKtLG1Zm4rxPvZvrieFigdA8queCByw19Z3",
  "key19": "2TDkR9o2jmGkHAsqVLYnSEDQVZTRVg6C4vgXEPBPdxFt8nvEs6Ue7rVUQENLC8jCGkhNC2EW1HoLxgvgCw9WkFV3",
  "key20": "5gaFZJL1M8Z9dRHQdxVuYmaS9or5VrZeL2PdRdJKW3kuyigj1AQ9G1EpmtrNBqbXX6xGjPphHx3HcpvSSfstrNyz",
  "key21": "5dcXywBWX4xw9HrEbiYzEGuMbQC6JHvaGoNSSLXzaTRk6ZDDMxtSTh2Jk1TuJX3dcernwg8u4iBv147xrxrhUkii",
  "key22": "ygyWkpuqBfsn2t8GJUK3tSEevp2KeUQCq4botsXkHpDh1wnJcSHeX5JRsv8Ap8WoAsWYnw2LX1Xd4EpfT3bYcXB",
  "key23": "2RvHh3Qj38KpyQ7H4nZ3P6ksaWhXm9e8L78tLV99nW3objNDkxsGEpFs3x1t1REDhyHqm6F25sPk7f2nCtNgpKt7",
  "key24": "5GNvqib55Qqc4CTZ1cgU7nBWcAkPcLV1pjUfA52QrfhajBDrmxnFehDELzP8RuU2QbZXyQuGPjMofq5XGnXPsFK1",
  "key25": "2UDi2kBZzbKus9R4ABrnSxW5hBGRt5KESuWNvuBM129TKmTiKvAB14hfNMkgcxHunQ8bFkLDgirNsrNTCvjviPgV",
  "key26": "2ee8TXaua4y41zB19MqvbWo4f3VqeddoGYXqCNdcAS1EuYJbb7BygcBrMK17Hv5CnXe3tdAYbv4pM7hBKFNNQo6o",
  "key27": "23t7pDS6CWhYvxuVXFzsHGhXTKpT1RPeJHwcTwofjVgAqQwD1burcSEb9qwy5emDBUhPBkjUWwWCHTeAR79YbDSP",
  "key28": "3Gpgb13X9XZykCu9Epwb96yTEFC8DLpV62ejWJbQBbH1rk8jmoC2guNG7snSRwPb2ZPtTYpDs2zThhk83cHvXtoG",
  "key29": "21kbz3fgoW6QSTohJ89NWL3Rw5TJk8R6t9kEhH3uib4UXVSuvQHyd2R6aG1xSGfoXUE35U3bMWXS6fXs2R6bpWL4",
  "key30": "5oEpi4Zd3hjovCzVBJ1pcZPVnupsW9es6g8qR6i3q516uheKZnyDrjQx9rJo5vcT81XGq2nunVgFwW9CQBeZ9Rhf",
  "key31": "5JwPazSJ1a89pcNTr4HdXFGp1ZY5gPg9mQHFZc8refFr2sjikkJfRjbxv5BBhdbM1DmTe94NvWtuuoFEe54Fc197",
  "key32": "4pBv6sa3ybgFYWCekqhEPqEcyWm2KjKufXSpx9vLrjtCVpexUE9N2W62SrnoMj9BAmn91nX5ASUPytqwPtD93nW9",
  "key33": "3Y2dGdVRHKt86QgjBMQZDoxtomX9XFjL6x4m7dgkhvugkBSSQbUA4nM4wwV6JfxPzY2Nb8Z3iEurkLE3opVoqWix",
  "key34": "3YBRGBVrvDX4t1L2u5sTtYNNTmbL3wwsZDHUjQcgr87pUPjYGB5WPaqjeafgUdyeDH52S1DRHEvUeBV5BbJU8fVR",
  "key35": "4tVcdBk8LsiT3uEcWYJHYAaXTH1bRD5Ki7pwRGhcxCpBEosoViXdtyzm71WeBTCnRvBCoCM6netgaA5mhgub29Fb",
  "key36": "2LhvtGmRZZgEFQT4uf4Yd9otujHVMgRdEF6tn9QYAxiSfV9uHJsyn6NCuZVKz3arf1TbvprzSePGVq8CLyjc6ywy",
  "key37": "4Hojtbva483gbU7FhJyu6MqsFPbVggEg15p9hhRdkjiL1p5pGvFyrKSjFBzqq14Y2P2dadNfRQ219jGTwykJac4k",
  "key38": "4Yy7hCcBfiNwz6yyK4NPgjaSq4KAL7gjipaZoMPAfg2aNQyZ5kQRGap4XbRGMkY5Dqh7sdwYBVnnp2fSibbun5TB",
  "key39": "g53fkXFAkkv59xWjTmnAMtgwFzAHJbdo1vkFVBebmnh6pqPDw5dJ2q53BmzUMND7bJjFSkXNexkiizV4UY1ivxx",
  "key40": "21hreGcgTXnMjAPNBbzzeGAAgxq6gj3wq6hzimuvBKuLMJVmp4BgK6TTxvRhGiZs2kHbfSsm6iY27KojsUXcTr4F",
  "key41": "63CR82uPkbu75XhTKRJDrpQbEUV5SeNktLxTyFEMcpuaQ9QLXwxqguTb8r7eFoPRWjowfZB9yfMJm5vtkJ6TTCxM"
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
