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
    "3gR5NWbKSj6yTijAnzm5Q1QgNu4X7SvpnPyxr6Rhr3k8jxfCve5tkHPRtXaeTckbzhsKfgxnZsr447Gw4oSFnrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncQoJdvVsbQC6RZxHyYR7wdq8opF5VDaC7bdCNA8ZPhu6QGiTjXbjnY6ZBdVw1Cv8MzX5bBH8rqEQGEkvDkRpkN",
  "key1": "63CJCoFRH8KwvJqyps9MsGPFfwPCHE8kVEEiMTzA6hcp9jGFbJX9h9KX2938Xy4EiBa3smnG9W5royRUAh3ppcdK",
  "key2": "52oaFzT4a8VqghgfuyJmK7xXnsasbrpEppxxsh1TMdYDYuDWvnMYb46gnafabP57z9s7ZSP2YKfBHaVWXK2a2e1",
  "key3": "G8NuRA2SDf1ZX5SWDver5cVU4UxzbE9i5bEoaubccBGJf5St5jLxBjayjoAi5QRzudooWGGaUF7znB3QE1qig2g",
  "key4": "5Bp7pxkhMwmrWZviWWbBJbNV4gU9Ed7rGT5VQbfAVYmMJu1Hf5Nj4KnGAiYE4AUKH2mQsjX7nQsB3pMZQKwgSaZG",
  "key5": "4dzNq6cnAJMfz8ZswuxwArtBJPPoZNMBcWbGN1auTEhPdqL5qVCSgWWdhxpYaWdQ7VfmuQVSfbrYGpAxi9yEj8Xm",
  "key6": "4DJhWNXJfHFUeyLKaDF5UkWJwEzzMNj43hKjQ6KbJRhxjg2RbfhwUDQeUwhJ5Tz7RDQ4jDd2LVoYp7q2q5ESbmvr",
  "key7": "4ZVGNm1LApN9WRrqM6aedS8kn8pnBuDdrsTcsN76hgbrgdpVgKC2zDh7vUnJHgUQxQ9Way7sjvEh6MrZNM6pnPff",
  "key8": "FfnEkL94tABXA1ThtXvMNDC7dZBZpVZLXh8HR39M7CAmongYevJfVzLpJ5v99KY5omvRJ4HZ6vmUaXccPZEWseW",
  "key9": "2zt7A6HhfW3TMEZyCnbq9C82JNMVDHLdg77wobYfcDfyiFNt56hL8sxB52Z6DzcoA63DM2NCQCYxQ7PKWh5yKBdc",
  "key10": "SNSniPr9eBTLT9iCyKnv9mxpLghHgMkMA89dWJKUm4zVdbNWrCdsGnr9jdsrcWm99oCQ1VJcBT8CzdP7p9AGDtk",
  "key11": "2mKNckSxR8g9imHDHGmQsWTNUQRti51STCYCb9CZFzJCN39uzc211Qhx8PsbruhRfBcn6CHATsULvifvP74KqXfh",
  "key12": "zKviphELfY43DryU5Ty266waQ93gTQcCcpA4CBF69fMUvR8VnfMDYgd7tVCzGRfW68AiHUPAoHHXW9L5j3tAwNM",
  "key13": "2PvvX8cCMRyJJxEeTWdbXxCtZE3ndJwGMhgjgqH4yUr1VE4wktCbxRpDiCNr7wjwQ7NJ1NN5cpocANYG7T9RRB87",
  "key14": "2arD7XayrDcvr47dxai18A4YiAwydCeTHXSKZAF3MujjEUsoVG1eEvdrmoJDfzyWyGFSNcrptnphEH1yzordaK6M",
  "key15": "2x7grP69LnkxU1ZEeHYXbQTvV8z85gHY6wyH9mQ9KZWhpSHvjm5Hv74hpcjU9SCCX4u62qmqF4tisfyK9jN5pY8p",
  "key16": "4q6uYiEeSBWsepRoobjZ8yDgcBWrG8es6TFfNMM3La5ZzNG4jX2b87KNxjQSP9xNbcc4BqSzDpb6VMkF7xSdDSnL",
  "key17": "57UPZqAKfCCWKsn8QpS36K3f9vNThcRBFZyicpXeJNCoXQoQ2nKguxnf22NZeHY39JUSJHW9b7uuLCv2CAmaXMnH",
  "key18": "3ShbACp3tcYhqSFzjfoob4jmqLraR5ZqWN8wkUAnRARS8ggFdQGG3kEVEa76TJv9pC9cNmSJeRQ9b1fwpZtiYAir",
  "key19": "2bCjKHHLbqYRJcje1pi94XjvtkXejJZnsTHzpkpV8UfGnCxjT5fxK4bxQve5kkyWvHJJWyZo9t27GY3gdM5wPepk",
  "key20": "2fYPpc5EQudPGmXtfUr5GCHSFhXuK5L7Uq6iaqaUwfpbMfiJdGMQt65MW2dTo53wxgXox1L8U1funVDfDEuDvyNH",
  "key21": "g473Ai1i4Mq8LyBm44wiAeHEzjfNY3t1F4GSX25ipWqVFAfk9wHqcpKTcyvV1pnczWKYyqW8jJTthTMzFyvdsaw",
  "key22": "4vn1pjVsHGfGSfeqN1pWW91fvdxyQvCC3wbeE6PAtGCQvHJ8U4HomY5Wp6mVMKotuaeT9qjEUmh1JbtH8pSbbCbR",
  "key23": "2PGV9ppNCbHDYhQrSqFKJ5J82a157a51dED4UcGQnPPJs3S6pyprfxHUD9EmmCz64uU7AK5nTEMAX5xGvcZvtMKp",
  "key24": "3iceytZV2CqZmNhTsL2bRBiUJq5jfJTNJAa887wZedKdUvBbt4HqhR2j6w3oBobTtpJyZNEm9MNb4K7GopC8SfQU",
  "key25": "4jw7nrK8bw6dYiCn3p6frHW6Hmp5J96Xob1ByKeTGnyZeUyQJCEBwuXBBoKqxEU3v8KYdNVPh1ArSYyk2fcjSbZz",
  "key26": "5M96jrB4Mwvd8VYBvGPGMJV9Lrso7JihBb8HehrTrqfGLmnDFJmhefPvNa7fMWC9GhouyvEtPxuxFYLsoUz6nE1k",
  "key27": "2SseStrzJqBkRbCaH2m78zCvmNUUPZ8xis72gdBjvGucHVTEscLG24nQR7SKFPqn9sJrP7GemvUEDDgWshcSEFyS",
  "key28": "2vkegSPCUPr7zPYthVfifMFPE39yeybAs1UTuJQUVZ6DymddU8hkLxWbeS4CAfsCUEcqbdEKhhJ1f5HYUbjizJyg",
  "key29": "2S3gSPaxM7DRV4raJEuWY7oh7ucSwptEqWR75HDkg45HnebCXCTKtWqbJXixUhofjSvau5QrfhPBHLmeWFJ9xuCb",
  "key30": "3L6x6MTNM4MS4xfF7Mjaab2vdATVY4q5YQfqMy3g3M3VWaxPakQCsAyj7yzEwJRKNpiw31iXK3LXybuNeRd7HuA6",
  "key31": "3K3oBraeVq41pjzQnHGZNt3SdZ5ufbNMjXKYRvH8SHwpeLpWkMXQNTC4EbeZPhLBXBuw9Jwbouce4RcrXwR7raXh",
  "key32": "5YvqbT1KoF32MxsHHFamtgwMjbpAsmiavNbk3HyYfjvvS8yjdjWDAbp7mFGAoMHRtsLcRz58DuSE9RDqAVQQngbL",
  "key33": "2Fk73zteNnVkMhsvxGzVEP2qZnyK5tjnx58Tv12j7vhaZwqbSGa4Nu9R75dgeiktJ6oCxr4PVX1K2go5ga37DT5z",
  "key34": "4Kn1AjFgnnMdvywtVmXJZE2YbaoAwEzGiypCng8jG3X1gkS6jmJay8LcoJV16S11fuKt5qB9QbBHvSFQ8KHQ6aJE",
  "key35": "3GPNou9X8idimcDaXviDDivCfNzBzNz6Qx6pwPF52B8UMumhFofQTDV5nzfFPvcEMfR7dtUFuUuMDmowAb3xC62z",
  "key36": "5GAzK4MFi6a3u9DuQxLzb4Wafie37UHPC1cFAnzrktmqJq9tMxtcnTDYXEmxuEx9kfcmkS1JFfREHWD85AcR4gY4",
  "key37": "5sJR8As49qpUnyn2WfJAu2E29kM8xfpKWW7UsB9gePNpsjXDZwccYta1MxzWi1YfaydrAs1p3txGfNyTFSrwDb68",
  "key38": "4MaPHJGvfz4DZVf6hrDCSDuZyLKzWYz7MmNHAiYnjFa2rWSRRpS1tvbUEQYAhjMsnrPSeEUCGsKJRNmc7cVkajBJ",
  "key39": "2eejXhACJ3t66AxhJmJ4d6CXWYWPEVGySowkV6xQtNyipc2Z8ebeyBUmM4mFxT86Ts6C468TP6TscyyoW1Mn53Tr",
  "key40": "VD8aF8EajtMVQYeSEghFrs2YM61gjBnkPk6EuriE7uvTyVgY2SGkbGLhwAhcoxpU5xBENWzoGeCF45uTZauVKsN",
  "key41": "yhwqLT88N2z24a79Nfvhwn9h7r3poXWYk34pgqCgFm45Ctz5yzSEGR83LezmH5uL1fV3ZU7j4y6Q2iHmaWPLoRi",
  "key42": "4KYRnM2BPRz3Vd3Czi1hYt3me8AMcx9sS4oJTi2Kr9w15XgVxB2NgGNirVr9VFbR5RNMRjfWWGEmWd3tweEvWz1b",
  "key43": "63f5JM6CRuM7oGimz7CBZ1R8cvBuzCeAsSCAfEJZLZ448j2kWcXLynLPSFfKXYCB86DGPteUnhJHk7DNGWkc2ba5",
  "key44": "5Mk8FseMMFj4HpwHbaAihwXVYp99jSsfMcVCuREujrUXNBYt82atEEmn8AVDVSbToYMwM7efjMTFvNp2BPgEzdTy",
  "key45": "3a8cpMakxYYwz6TWP6gqiVjAuFizCUXHS9Hb8WrvHmqxAFmzD18FpVRuc5djA6xc5VvJZtwekxqRE5ant75tFnpR",
  "key46": "67pwCCx8Td4qrefS3ztBeQB1tSsaWRYnPgPuAvRLjTYbJUKrQ9RCdtvuQ178Vscs7C6mddQHmUhkTD8wG3JgCi4v",
  "key47": "3C49WXYzLeHfpCA1JfCB6tZSpmwh2qb6kQevTj3zvxYZHPT5rwvPapWraYrTNGrdBstaeqLXSijfESobtQRhdBBK",
  "key48": "5uVZEqAd5mkquQesqNmm3cEMCtG1A19WGehJCYdJW1h8qyd7F19td3dBu25JGzXcyxBnxwACNpiiYEkALWXDxhYA"
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
