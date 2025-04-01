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
    "LDxhWaGNrKuyQsxYYcxJZSVmFjSAc3KjLKiy2d4oQ7QVQqxobyGo25dWFzbemaBsVNTTfsvEmBTkmR32aEz6HWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iC7ngenUZvYPo2rmvVpRSgnoWfZ6rVtgjLf4VX3DpZjm2hZLHSyKSBhfjVnFkcDhhhbsPUeCrosHHGK2pZggUhf",
  "key1": "4HgfeKquCoxDLA3mnQ6HvUejXiiosddtyPVPPrkoTYPrJUxnwAc7hmExbCvzaKwR3JtmeGFT8M8boC6km8X2aLzE",
  "key2": "58ePheuKJMoHnU2kY352VmGikTtWMtDANhihzVfCEnNd8y5jQtjMWoXaSk5QZXQVgMPE87FFxou6pPfBEeBvQunM",
  "key3": "5QknnFGFSUZ6J6NNHi41E4hdMyjouwnUueK2qEoVXAuYqstyaPKvt2tGoUZCq9suswXeHaX7ChkcemhQpoFnrpzq",
  "key4": "37DL8Duv6jeaymZQhdWgtrExTUJSov8GFag2cnEfrWKykpST5YhLQzo4qSBDEDaHuZsvWUdZuye7r7wPps5ucVJC",
  "key5": "xnqdXpmers9jkFjKknEUrkMaei6xnFU2AveCAKNgt5sipJAr5hgRKQbECkQBmnbD18Bbz36tUYRbKspNNWC5Lmm",
  "key6": "4mAoT9NXAaKcbBB391hjFarNHi2iay3cd1gsEGsE7FcnmNxr1VVuzediAAHfGT1cK3kbhQ3Vp7oCaA61EuyoREck",
  "key7": "22wRRStVU4pnPY4JFU8uvntiRrohNWn54RHVyhGBbpmMz5eWeaYu5tm1VmnzTUVbU7oM8KREQgqWjAVqiNLE1u32",
  "key8": "23V2zjMVZZbU4mjMEtj4sH83jv2HoXFCHMuFauQ7kTjPNDfd1RDt66ymjThw3u4qeQusko9hESDm3foD95cEjBRv",
  "key9": "3Q3nwaEPz14e9AeUdgZFFF1u9oNvaAJZqs7uUetVZ1KHtiMjukNTrhRDv39n5krdHAtsoiYi4P2FJLhH6oBLKQNG",
  "key10": "3hoPav6939ZqFPeZM9gQ4vvzzUncqT7akgbDs7DxHWgZb9Uxo3YiE8TFhLh4cZTEdP9B3WmNkdsHuVFNBDX8WuMB",
  "key11": "4UCnqSRW7ertsU3q3yjQw3uhsDLSkxgpmVGGzuGpKDdqun9wdWzupa2yfZUgsbgXfW6bohZdt6gXV9parJgxJ4nh",
  "key12": "2i6CJzzJVK4eWvKXgBJLEriKUUj1KS7cpX8J6yx8gHhvmjpPEKkiq5S2jfjmigAdGyGwfRxrM7nRe8NUzFKWrD64",
  "key13": "5Pjh1YBxM6gUXLBoajSrtLmqwLwYYDhCQCnNChrVpeAnatm4SpJxkwhB9sdhJL23xgeEUqPT93ivHWfEHYAmvdix",
  "key14": "ushLbFj1F5FddHjPcTKCC33gToLtcBAPnaf6FEA5RL5iVyGzWbghYqyvsvZaK9MY4atFbNArom2f3gZcRu81X5a",
  "key15": "4q13Yw5y8zjZJ3TR2soR58JxTktUsjFb7ioqknUPdaB9nXd4wear5H5pUF1wmEWKGAbfATwHf7rYFd9AnWLzfe2g",
  "key16": "4EwXXGDMBEWmGChx9byfGvzZDcreEj794LZs3K1txWLdHCk4ZPqjBmvgpKEfdtP5NhyGtFVLxsuH476ktXpKem9u",
  "key17": "4e43PfVeeM8ijUJmoGpDDxdYtoAvAyXFcjT3dNRSqmwjBbRq5QhkdQ8RBi9LrKXpEwMJFWtbhPgDUVKk3neqZ66p",
  "key18": "4Upe6HYhVa3YJ5mcu98yJ9qz64JK49ZxZ2BceYMpXSgjwCSucEwNWvXLtYtmuu2AJKpEZVniTuG5BdwPNY55qHPA",
  "key19": "TZfgcijZQWPBUudkpx5Adzh9PqbbwaY6fpnT1gjcKSeGidUQUhUjJ3pHzLpGSJLFR5QqE369o7PGiHwi799JY9k",
  "key20": "pwDE5WdVSP5ERHqv99hYmjThueFZaK8SEDgnTeEQahEarnyh31Ga6Gf3VqnSoy2sNbvihCdqErJTdyZvTVw6oRS",
  "key21": "2YhMkuRP6piDqJd2b62BPYCMY5Xz8KPTBsPqLvxvd7f9eXNb8EHZgHFuDt9YFh484kLTc5woivxFXPSk9scqNj6g",
  "key22": "2NH5ooHYiqbmraRhbnEKNDqrHsposNAuhkhuhgp82Wcvy17THavkBEU57kQia5yqjmF4CwYEodzXFrFPtnTp4mUX",
  "key23": "4aDShXCcvL4NG364rmumndYJ8sUc16yHudMUHehSJTqLdbscBxWmPFM3QDDGwZz83AnT2Vzr9MimofWsrcKheWdW",
  "key24": "3mwaQtk2obGCU2C4ktshDHACCBWe7ACNpvvnaFCugNKPuStKgZsFJRs2j9nYZspsnXJjgeFtModCM9UvLcgezPxt",
  "key25": "5Bf4aJLntW3v3yeL8kVbJZmBtPTKQ1WM6Q3eGNDyJXPCrJwgpki9FmCZuqexqHDR9mABbMQPYmfvQ7gcTFLjLR5o",
  "key26": "LApfQu8wvN5Jw9mqCxBvvGJTerAxsfowQEAydzsq9Y9x1XmVuHBmKuDv4yfJLwHRmFKPMyjas83wcgXgSi8wGmx",
  "key27": "5zbf4A17agJVKSAVq9BdscrtNxe9EthjbVoKW9MiVMNsVVA46Ei1qZqyhSxe7DcZTSjY5aHtnrhSqTH6FxSYAHeS",
  "key28": "3sWNZriiqs3kuQeTaj76vdLEubYy6Vvspx9vLobRqnGbHKfU7smT8LTvxYyXFwKxnkQDjF3n2Wc6QMGztcAk16Yp",
  "key29": "5XS5BCh72ErTGcFZmb7Ev8JvwZAHnrBfnUUJJDnkw1Ybi4DNz6ZjYTN5nzHtXung2jsyJoZY4epPzTE3Q8ugSA8F",
  "key30": "2n8ymbLMb8xqp95kbkMd9paVvP4uSgWZ4mYQNrZoUFqUs2LtFLU11hHd8jjPRBKWNPoSMzWnFJDDdHvFWYGNVJx",
  "key31": "LrTUDfmWwRQQRBQofTjx5S5KtAmfLWjfPdUnv2M1Fp8uWqG42sfsw9mfRqQKxTT7cy4yQT3D3Y1FSUUm18PQsbQ",
  "key32": "5itWB5TZUrnHH8393775tMeEUgnDs144TcWaWHKNHBj6vakXvEzdXTdLK3uGadHeC1pTTNvtSbc2CehF8ePkGrsY",
  "key33": "4JHx5R6yn6ZbPB1dKaXYQdBAUHQYs1bNuTTj2icf9f4msJvod9aq5mDUpkvMNe2jSLbB2dDrzvMQwUhonbdYRSW6",
  "key34": "3Mm4uNVw8RSmPn733w1a3soWBzcFUgviG7aJcvCUYCcVczeTPF3kNH2EPFVgesrEo4FvLMdRKd5uoKGQnjoY2Met",
  "key35": "5JTDdrRQVXzvM4qHrcRzmo3VsE74zLjEWo9nUZKhs2spSiSMEwpekruZGhQhHyErqyPDjNKdFEvjearNCKAgeHS7",
  "key36": "2wP1jXwm3Av7HR5v5D1FFRBbpDY3dZEf5ScEdSsd4a3p5diDK2chA9pmw2jdUyM2ZVSmEo6pSi9ndQgNjZP4kDc6",
  "key37": "Wm6xjU2TiECTKoipzuoUbeFNGN25uyP7DNNqx6jyy9Fi2m6MrcKquWmP6DzkaqVktWsy5DNLCQQgKuoyYdPkUoU",
  "key38": "22BSA5wJFxQ7qSpwyWfXsfBJ2KDVJr77ZwTwjJaYjDD3WPDNTSZgzhBNmiGhfS5UaPX4hRmbV8AKRmu3ndrjc5E7",
  "key39": "42kaxEwRHSKzqofRsgWKX8G6e5crgF9pQR13Zj66z4cn6wUWW46Z87dzCZQ415FLadYuXk6ARfHf2uPtwyVrFrhG",
  "key40": "5Wvt4pjKeNiqy5qfv2NyWMurZG78Zufzr4tpivCBewnJ2uUQS1gDjgLuErYxPcwvbRzszigZhnBkJ5d2gnkamMi4",
  "key41": "5dLAWEG4DWazmCWVvS3LBcBhEdHU6wmQarjvBYaW1qkPQ3X2SMn2dKphiZbhkvrC8R78Za1M9FmPwqibBaX92WzR",
  "key42": "s9ZGbdMsMYVhKGKwDaRhNrwVGSKi3YELWWwcQNtXmPAnDM4KQSWNhskCqkKsvGuEetdahZEkYNqaXAXe54HFBhs",
  "key43": "3P1HN7Ve1RdXSZF2ungYYHvGe4NPZ6G2yayG51SwKidGpuDn1HZyzfKNU9vDkmyg3ARNzNVvV4LLjy1PAJYJNHsS",
  "key44": "61wCuGBU32brYHmQTLPiM7BgmPbAVmdZfRjwK25u2gELLC8EWA6m4GWBXaEBoucvmx46jDDveuryetf3LUsg1Kjm",
  "key45": "5W8zcNQ5uU6UQZGFuZdj16qjQXgpTVvmJyMA5gwRY5UpT8pDsgNne5nwcz4Xd1WHG78Q7sBH7ygsJy7VuqjRWPHR",
  "key46": "k8pZ3tfnFgMu9Si6pC6edinGN8TyY98Gy42sjM44LVUVL1mz6B9tBx4bazZvDpe1F967pBh91vUytoMSj9XD99r",
  "key47": "QJ2hidbWp9oH8pjAEMXPhffxRZYPCjwdYEfK8TgHnGap9nZS1BPfeVhed8sDYMSJx33xAMHnTRz5CbzyALjFy3a",
  "key48": "49C7atzM6PHRQSAuNxywWGCTgG8VHngLtviRFkg9iUfPmRuHPr8Lv54mzL4LLK6hcRuL7mYwq3tZ8UA9L8QSB3Xb",
  "key49": "2R2EuDJTqAYNsYNKjmgpq5UEqB1FN2SMdrXZ7F24WuB6ajeMP6rNinbAQXQRYMfbVDjKpYAkJWbvcF8RHA32r9qf"
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
