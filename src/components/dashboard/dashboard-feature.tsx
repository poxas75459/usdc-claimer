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
    "L8x4btFPXJN2GUTBn1gwvVXj8Pfkay4o8TbbZY422N3XP5XAeJphG31sQzfnQ9bTV8ngg1XYEGcCMTmqHBwi2Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sLBk49BujBgPDGcx163jseWD9oNwehAqLifxasruaKG4fAmaZ4stayBTKFA4naNs6NpwZqUYQ61iQXgs4vuNfJ",
  "key1": "TTuwC2cDnniihW1p7SdWQCMz334Bse8CSfr9VYBiTYSrHeitD6FL2m1S7hn8gTJJwArNwRtSovoChWpxUZiPLZc",
  "key2": "4Gu6g2Fid47wkU3SN74CrtxZpwFjFYhsSn1HRb6oHKLG4yVYryFbwpubNHF2tzHYyY1g2WbyS54KQLFGtsyzP5UP",
  "key3": "2WC5PaaqoyLisSR3Apb6hoQTn3eQ2QAuEkvT7yPsvsYxaL2wH6wfge75NEVC23KwjVt8VthkutHfHwqxdUh8qLvX",
  "key4": "53DoTjW2yRGSQxhNin9XEQsrhHLw8aM7SyfdKekiTs5bn9EFXpeYokLthoDh2T2hoSzLT2qB4oRJbEoQwwni6o3k",
  "key5": "2qdd4J2TQzi3TJSggMFmdEXspKScioMLuqn9WvTb9VZ5dzhJ9ZpSxuucXhJ6D847GQWrbnoc45adEnyRXVy2hDmb",
  "key6": "3x1QKcMMnomv5i7ycxnfuhxv1odtYkEWTVnkFLUKBGDsngFx4viGj4AixbJijF3q3vUaPxR5cdYsX9eJfR5LstAw",
  "key7": "5FnBdnFGJbCUeiTirxBzjBsYV84TNrSMpDFEaNe51CPzkqMAL2JagjNqbT8oHcmgo214FGSodPuRZpYES2H7QGU7",
  "key8": "5gjjT1vYv9Kv1YHzQCPsmNvhcrb8JHekmuNu5VXwQCCFPdUUdXzqWWdpH44fx2WAdzJFZE3hmUie9Dn1i6gNCcz8",
  "key9": "3tenKrETMBiYYBf3p27nf8PExHczBpxsY1N6WFLG5nrwamMuKBSgAw839Gj6Y9xnuAuhs2s8nPSxBHcaLM176KN3",
  "key10": "4zJjTvSqJhuqkK8uYaS1d6mMsGCqii8TiJqKhHkfSTFXwEhvZnf4rpSiYXu3kGEVgs9He1C4zQ6gNiKWYEyRENHR",
  "key11": "2udATBC27wpPTn8ZiPVmutXZcnqCGm4cYpE6uaVBEpeexeCNKznkDDnXmg7faiiUYLaWtREMSsMssBRjik8oNnkp",
  "key12": "5LDQM4RxLkqU6h2AbuvW4E96urGC3CXyW2AXnPd7nWws7TiDpQwtaYcxp1jJLGiRaSavHTSwhdz5Nf7iqavkTpzy",
  "key13": "5rkuU58sCHhaj32177Mb7z8nH2MfGMxb2JrvX532ZZVDyA6HLc7DheVsYMKWTqtR6GGehAKb1LPZGQcVvmM7gSoZ",
  "key14": "515uZXEM63eeTAcTr5qiWCKb6qPqXfJuNTMFgUpt2zERwCNpVQgXyjMEWdTf7gJiELC6ZH6UUhwhGVwvWfnwy5vB",
  "key15": "NNkLVEGg7A5JNZuV1C2D4SHTRkf57sH5A94Hdph8PVY4FeBJy2EEGnLkAzYKVsSGGLgTJTXE5xHXQKh78HCfjxC",
  "key16": "23FvHRgmpPTdDGsZF3X1i4SYSnmTqj9kQXGofCzndQ3CSiAEswYBe7GN44HtUMU5JniZTJ7yVHNUwQ6rQQ5ctJme",
  "key17": "2eAdnxKyezGG1x3xM6x2tk7QtNJktEgij5jfKyRwTSnwm7RRbejZT2b5wttUxHs1YqQqjJFbCKMTFWksv3wEEAUE",
  "key18": "4mLzBv8xeEPJfMepUWKc8S1u4mhtMaweRnhtF5njYV8Ei7ZRobFD8qje2n7YLnenHLSvBi7rpRCcqMyN7pSbWVuW",
  "key19": "3X62xTF8tFjqTPPaonUNc6w21xp248vMCxJyu34dDp1X6sGeApcA6dQjNPaaLhiK2izbhL4mYo2fzUETJzJPauuL",
  "key20": "EHucHjk9zFkMqn7yrF21xVNSrmGGBXRfkrRmGcrLRnngVAJFaHESqzbn8bXhwvFTA8XCaveFcJCvZd98Gu2x3oe",
  "key21": "aDKyRd1ic1t2dkRtmr3QJR4cusPUegjrgBmS1fFvEqfJZwGgWrRFhzHcsVXVConwZjRJ4RjXLvPPtxqokZ6nWHM",
  "key22": "3Ng5eiEfRxhRqh3uLnQESh5kXXNgHZfiAx3xctqJCbQr7psCvAZ7rVKfs4s8gtFnZSBHyY7jPZjmXJqFMJV4o6pV",
  "key23": "5QdvSsGCmfnUUe8LJyAacGoCocf2aHYuZ269mPdZBm3C75prjNpU6mHzncC4CZ5aHAdhWk7fJ8XFyD7BQL4tJZ9J",
  "key24": "2HPFaruMLcY9yz722uEVvHNi8HSsC6dnoeUGrhrR2iGnaBsAFpcytooG3J1jHVoCspjksbVKDURrPW7ZKX5hTPeo",
  "key25": "28g8nnbTJcmZmXqLE6Gs175Ke77z9BwJ8UdYwmcasjzJpb6LU2U3izZ5RDjEbFdZcrvDnsd8FnJZdAY7Uaa9qUdY",
  "key26": "3dgQQgj2DU3egCW7P3kuqgararzoc9eCRfRsMG91yad9QqchKwt5twqPNAuDrjsRMfhK5iMFAJfFGfpaRgz3dL1R",
  "key27": "4qsKQQNQZ2Ueeyf3V5cYZHWLjRD6AoemkwQ6FKNmDfdHZBhXDffq58bBNrW1sbxE1byBMsruR3efq84gjU9Kwj7n",
  "key28": "4B8GQToBqeydciYuVQdeG1fikPkH5PBNs32YkckoapoLtpLWfKWQcZeHKrNFVvfJz4MUAKiKNvutNNwzm44ErJSs",
  "key29": "643Ga8T8EmpQJ4YfJppMhYVnuaCSpao9VtW7BuZu9p9t2ZfMz7roYby3Aq8zipAhi1f19c9MUdxesV1YxQbYa8aV",
  "key30": "4movMjPjSHRgpSnb1hAM2iiJrEhQqQcyrNc6NeF9B7Gjz86CB2U1uWrGSHdRat98K4oZ38d18d1PmigAM5H3yWW7",
  "key31": "5C4vDrjqZGEaUkgD3viG4ABWH1Xrjwy6RTKwqzBhCX3PCWMVnRsxrkCSVQG9LAPLi4XXjmBipCBhKuMAJVjxvYdu",
  "key32": "2ebyggPYi5RVfx3hpLYcRPRakjDppY3UR69T49GQUTmiyb4jcceZFW4aV3StnK5ayS9CXSkfcoSiNus6a673AW7h",
  "key33": "34ocKutwFBTzF3yVsZijM4EK9ddjUQxcsjGsRfrgmPFnDTG9pDPfNuwwVvDEJGAKtecj73HrHBw9196M5QyzhKvF",
  "key34": "2x3b33bcPWuvkJQYr2D55KSbcxZCu2bSfJrivVxck3WxpKQqUEreNEF3riMZjYPZXwL2VkPZHkrV9qKoafNQY6FT",
  "key35": "hhj3DLD8TeE2VXrtP3hFoUjDnJdsLsHtdiCGBueaMntiTpuCyPQEZRT6eMedt4MtXj6Uqimm3nubDsSjJXQZc6d",
  "key36": "3YMgyoay3a7KS6HvmCbUZPaesgB9DPYUncKZNXmWk7VThooHQwKADQxKYykVh3k26rK1sJ9dXL397GFGFGLc4vYE",
  "key37": "59KwZfQqjSGcY7if2n9K4tf9oytZeaarzWThGtRWPvyGgVSS3WrW2BpkFeugyCgoFRweNV2DMgaRj8p3QHVHbWWn",
  "key38": "43m6AE3KWBkAvBYrvx5hcCLaGMzShjkEb7U2vap3PpbKe3zwieRQ2BDR2USKwFt4LxPSRkZsqKLkfCv8aF9fUyqt",
  "key39": "4scmykWeUQEFauf4fnEVYEj9F32v7JfyVumHQCWEMrt2wpRTVcrdVs9uh6QKriPw9DMif57L2smutJ5FPkbxxQsB"
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
