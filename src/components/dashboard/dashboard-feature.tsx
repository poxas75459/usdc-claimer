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
    "45Uh2JNrnA5bhdFvcMWWgE8KzxL7hfyeRJNuFkUmPiEoZyaJpwmxSo4JkZ8c6tSMhT2NjieHsnza4MVQ6w3dYLzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxyusAcGMPPrpVFF5ou86xitfjzjDigUV54Jd89CnjdMQC8AYwpQFXXi5DEYd711SXNUDfXuB6646q3KXu153Zi",
  "key1": "nEpgGXe3DN7mTFyuhydHMDwxe2ocGP1Q6msRRxhdrwhurENZSko1c9FnkKfjUJNqfqj5E5f9fdJU1UFhm6E1pTc",
  "key2": "fnqwFFJn72AbtMV2gxFVKMXmvFuLsmuZujSpGGGuhu4f8wP1dMoDNs76cfnsHDepsYEcZGpCJRYewzFQkYsYfLN",
  "key3": "2nAyekvMvWKWSmjf3wH6EGFveuEgfZPFEjBoc1MjLvR42tcjZ26F7n9bCKm1qTz94hh4pukijMcpkqX1Krkkqx3p",
  "key4": "2pFExuhAhX5cDXzJ3xRseY1fG9bo8X9p8gpxHaotRTsz2cetuqHUYYYQf1yocjuA3jBrH3vP28N54cpjLaLKHqf5",
  "key5": "5nKxcksvMyUYwr3ai9FTGQdgU3v4RSNyyPVvNPjVqfHnDmGmMnF9TKsb1JwEyokZKP3d5EFZ8bfcvtpZ1PmJayzs",
  "key6": "22ALb9AdvV7toUtscHGd8E2KhcTPzwC3SjzHN37FGHD2QWag46M3tJrmV9p2u1PVShXNCkEHhkTm7WZfHxVU7wi9",
  "key7": "2BFmH4QNS7nKgYG8WYFCMk9XKj7YVkmX8ryNBKWbN4Z8XcMSFu57CjMbeMVQFf5RMBGqviVWJxibkFWdcLoGbPLY",
  "key8": "3LHiXN5YCfBrignf9Q8siHmQqmTED475PaPNiJ8h7QQFX2Koej2bFB1Nas9AqinrLpVoPkeDa4aSgqJbRVzev7uM",
  "key9": "2dZqLCLnECsJcPSe92KnYPez5yRP3mghCqMKJ3ZBxane59hHEj9eahigqXj4E7XjmnSGiFRYnWjRVjAcDHP6tXDd",
  "key10": "46cXYAboRK829rLWbiLzodk8nZ1TCBY6zkRe8Q57jUtzQwBpq2iTYgbSKJM6DgDTRU15tiADcdTXDPPi3b9xWKaB",
  "key11": "2kFGfFdxxuo4xEMZDBfM2FKnoevvgV3kVyHMC9C6kHG2zNbz7b28BYQP7JJ3UfakFX4jbQVwYGhrcERSLefCSzaN",
  "key12": "4jgrf2rVoG3t2KY7wWwGYxYSmGLuno2LMRywZNpUHgyY7Xth8dunddHpwWeqQiNKn8KYGBZBrdC91pKDTWoap3AQ",
  "key13": "3hHYbgTnEksfJzsyGZtF1pg5YcYHkGnkHHZr3xcctEEm9rMyHZ5Kjkqw88xREH7N2CibhZXwAHubT3nirX3QvQHJ",
  "key14": "2xcQVi2dMaoGqHFT4wu39Dco5ACyKnTMQA5Cwr44Bq3Yi6LrBYgWfM1w9B7H6DtK3U73VnszkCqCh9v7G1SEnMBV",
  "key15": "5JEwNutNjoTaXW8guA4vEt5q7g8Q6M2n1hvrqzryaSwr8hmaBAVkz6iNtwiwLBwmKETXAGuLEBsN8ByDs6cyvtyk",
  "key16": "omvs5fBPqqqGqHJX6aUX9NUrAjpvtDsge4UE7CRUau34U4NJH5fvowbxonfYKr2qjfxwBkWrTQNqJv5BNJ6YHSE",
  "key17": "39Umb1tRp8f39EFnTD5ea6x856rGJxAiFWUnddzUwt7Ac8gTBqq7BFCbGEK2JyenRPxCnKrykUDmhJJFH91yyoLs",
  "key18": "4HFtjwJNDELbprsxQuCYLtJUGzRQkAWXmoMRwvCWS5hUondUfbcvqZPHZWR4h26kDgdiB2S6YPqCp1R7HnwdNy5T",
  "key19": "4KrFooL5DRVXr1uVQMCq9bVzWypzko4p6bKnukwZvibFaJYe8aTHEv5qDtkbiya7aKEuu5Cy6oAn1Sts9uR6Xdpj",
  "key20": "QYxYtFEoZr2YGYW5WbQNX879mQvkkoowPi52NhA3mSGDUWUehwB9oE2qMfcLr6tEGZNWT8hszaCUEkWNW2nMSPs",
  "key21": "4yPQNG2F2Tj5t658bqjG1rfGeTjcPtDfQq2Xkapg9kRRtuivFD5iy1rt53MnHz4oKKyPiojZMZwaPry8g2TXueYX",
  "key22": "289y53G9YLPWSE3waTttYoNVnxTaFnfuz4XCfwUDT55xz7ebLbNbsTfFwTVaq5Aam8d5e7313MvucvywepCXX15d",
  "key23": "2y1gNgsHSHVgC6aBVM7afCToKYMYUmEJd1apq15gjLNYn5y2fc5CABK6i8as18TMJuY8fjeLiyRvugrstouoW7gp",
  "key24": "dxMbZFZPHpbHe4mCMYTmXFQw2DiNpVJsnngtvzcb3TjyFcRY9YXUGHEv3wyndyqpAPxgchAqMZdoCMKhrYxQfZY",
  "key25": "3HWSSs5ux1AkuNpVFKZYBsrwZVC8iiSJAcFY5zX3g1YcEHkDHcBqwYgTnm6aH4b31VHp6GWzZeGnckasgSvdSaAH",
  "key26": "2oa7nLRFdi8N2t7TTi6b4Qpf7yRT5aVBEWfHdjpiawQoo5qsqEPeiNHFwS7tRJ8VZFK33H4c8gAV5uBBT5HEhqDJ",
  "key27": "4xmSxGe3tRH47NmWKexAoWhA5qo9RVUTs7RdbhM9T2S6pUWDefxXFeLXQ8G8Ue6ouLPWjKooYz4Vn1nkBr2UN1Mc",
  "key28": "5dU1jdau3Dh654PHeB71Q8PyGE625iorKTWkybangNnBmHakVcgRBv69oxND8rFiTmJpso9SAvwoTr84H52fm3uy",
  "key29": "2pGJwfLMmnwntbhgtBKYxPNBH3P5np4FPiPL7oHBoe5shLXZtjB8ZZjRxgLRtksVoCgdesozAjnjChfwsFo9gi56",
  "key30": "2h2hau42LEW1m9T85w2ruGTBVEz5BrvifnsA9BF74J6MzKj8wFCVtKei2Lq6TdzQh8eP3vVrjwc2wW3hwbhkWy1a",
  "key31": "5VF2yCkvzEXj9K48qmRbTeeEX551BAckM7NiJiF3dWh91ZvDebT2H3cFbpJ5u92XfG41CokSgrXdMYaQ7TWAXmkE",
  "key32": "2fkgMUmXqRZkjxceKM6jBAZnQ8rB5uMzkcyc2Fm91cWYUc1KBDiE7Kpb1Au3paLME2wSDdW1BjSZHiD82nVRgz9t",
  "key33": "2BvCpAPqYd3PTeV8Pdx5Z1q4Hcvccyzgk3rakRrNbDeqUcC2CFjo6uo1tzikK9CFumYuwLH3VwRaq9g3mezcFxaZ",
  "key34": "5KrLp1uBnkkpf3DcXtnVrcwjkPHAykrN9eB93deoovDVCCxNXXZx1uL82mQkk5x1WqiXxePZtaqyauLwVSq3mUZu",
  "key35": "2BnaTVGixmH95nppc78KuTCiKRBSUHMXtpbvRm8urRQzon4kRM6BERSYxRfxMeBuU4ZwSA3X8RZv4mpow9PFckuc",
  "key36": "2498xixjUSqNLAnvUgMYWKab2mJF9D5fRFds3X7gFTAEj46u44M8kDLU7sgWAGYhZN8oJQFBTnJRGHvt86AQf4Hz",
  "key37": "2WAZXxCHKCTGjAMAgYyYsfVNbh9TG7cLU1PpQ5TMb5z1ADRHoTnd4na8fDvEypndD4UMc5o8njFWotmjFnvQh83y",
  "key38": "2a94rpaNmBcvG7n5rVHoQ3ph8NF6D6amRQszbdLboSfq5o63XyejrfECCbYbsp1PfJCqaQKxNiy6a5pCsFJ1aXB4",
  "key39": "Aha4Nk7wpSfAAmQqeNnqGbkGgd5kb3c27bWCHwbxkftyAtnKZzAse3G88b1ozSSuLX8TLkik5CvHdMLFGGx69qg",
  "key40": "56VqV3ztcheqy5MQq5cF4vN2bVc6kZKM4YvKQpsjHxYDkfq1ksiuq15nZuostCXvHjNpe5xD5Ry4AQzhRsGoRoai",
  "key41": "5xA1c75T2WASv1sxQhLXJ1h7xgERZr4aqb6AVBgoFuvys2ToP5zdCUdRUYAgM58fis6zjTVrzsHTojDEQiNDbN6S"
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
