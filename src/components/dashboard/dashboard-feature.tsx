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
    "svqLq9VjK3DmNy7zuJRZm8eZ9FHSgmnNoGgaEhjDcjWpQYj1g7X2JDg1i1KDKEmrdMne19MvkiTpByqwfG8qSLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcsWMySW8EQ1k3Ro2gJeYdsZFYCnrvGhXcZd9gLgLQAfVwYG4q3CYW2RPfaGFtxUYMgDfoQWnHQ6VCs6635W77k",
  "key1": "3JYs3KSAwQeB7yZSRDnFSwXzLQt5two8Bb6F2Vz1Sqc1vyaDsARnYTmpSyN2KLWpNsdWpwvgVNX7x8T4gC3bm96q",
  "key2": "4cCoBpYfMAMNZ8eu9msDcYB2jh67X56xfPdw6X5quG4fUMQJpV9VgAW2tSMwL5HH4wuGmmqpUr8XW83UVYgdEY7X",
  "key3": "3VXiqwkjLTuH9YzRNgDhc32kANcq7KjYncnyh7kesC6oiDeGa28AD4JSxrSZWhyo5oEZBaeUMR55nyTYPM2gBTVj",
  "key4": "5nXiHJCzCTTPbPjHYtT5FPBuqjSBBY5a4xTJFN7AfxCrLTMQhZazRjQ73xvJGWoCrpYgjHiRXzsKYS8YeGK2R1qe",
  "key5": "35Feiu74mx4MSnWQMzkqFRZLCuf5vmLMDJLbGbr8baSwr3nhuoDNr8ANQGcU3XXWpXYs1vrMiEbBriRBdrkRGziJ",
  "key6": "3S8qbri3pD4ezUuhbPaqtNhE3PfscYfrbn2DFiN2FRG1iiKNzQxQEUqbK8bAE19ZXsYA5YUuF6i9dM6MbWwyxbDe",
  "key7": "4JojaE4Zs8AEjwZq13vUQPMES6BWiFyAwbe6D4fuomLBi1cYUsFR6DCVhYewChvTzXWD8ruHZqFaQMarByHvJFPh",
  "key8": "5A4xQXyk8E44PVKna4QUjGQKsTgmMDREgmR1x6GxCFMLE63HRyr7sbaVYPTgTRuBWRpfQ17VG4Qwq9KYNosPNrpz",
  "key9": "2kCjr5i8Xt7Bwo3f2bcQegQ4EAiVHXKM4avzzixgXSK4BeAGTqTXvRsANLj2DgjAk43323WD45fVWA6k53ZgV6XV",
  "key10": "3BKAjJV65xgJVzozXSToTbKbk1z9Dm1qJpagPeB69LzBwrXKviZZTeF9rZJfEAtnGL6P8qe7UrNc2u7rceEPM2d9",
  "key11": "5N75Jxid5PULgMVV8LQL4uhVKF8ymr6ePYaoipV1GAucw9JY7hsTkDFcLhXd2r9F4mJNyESqTB5CEeWwAdF7cZB3",
  "key12": "4ZaKyTRwchtLyCfej27UsmViqEe2ZgvWbNsaTrhHqj15pFb5gK4iVMw9rtrooKXaiQnENE5d4ePidnCmjuwsL6pm",
  "key13": "23uaEqPupYZtzUEk4j6233ZTqBhJFubDdBiS8ujsMBhj3XT1atfbgt4dMktAeGQ22uMXHvKmav5MtetXKGj4Krvf",
  "key14": "3QVr8tKzAZoKsNRnmq4u6F3GDsaPiCzG8qj56DkCnFysZFr454iTLyoBbGyjE4e7WNzWVrhoHVccCHvi9erJwPPh",
  "key15": "4irPW49vLTAUF89edqrigzjj7qJq2ecZUV7Ddrx5jzfRBh7crP9U4YzBGGnLsRZuz2LQFrAfgDFnxZJrEofgQMva",
  "key16": "61FuigmJLzrvkFPQtSTu83UjSp5VbWabnqu8ocGAMnkH7N5cZWxoyfsZjzNRZRs1uWrqcoNtX7ejd6cWwBSjGnFH",
  "key17": "3D2SWAZB6AhfePiLd2swJrFmA516LG9uHb6njSDjQbzmWTp1KikLSx8a3gpJZXYJW2FW7Qr3arnbK6yeNh5qWQQB",
  "key18": "8dgQHfxGZh8L2u256iA5m34MfzPxdYzuu8Kez9MNwikQnK63Av1iNLe9XpQBdhpbL2M44KGtsFZLEiACbM1oMrA",
  "key19": "43gAjXHSaUVVRaGTn1YC3W4TUh5BVrNDb5Wtg9m6oubBYaftArmHdJQcCkB3Y5RJX3wEgB8Sqo2RXPLAvviNtuFW",
  "key20": "5wY1mN9676z8HJf9rGjq2fMTGq6cvQaUAVPjW17L3oiPKx4hjbgofYrVWx5N8ocETi5nAN4YModhQHEVagpgKZ6P",
  "key21": "Vea2MxvA9WyXzDog7rtE1G5YSNgCvieFH1zsjTpdEDjtLZeTEo3rkjiAaedwcXgdcxbWoMdjm6z1bBcQYtFhr6q",
  "key22": "3MZWa3Zz5hLPvseyacpBew6xwYnSTFc8md1P2HquvyuFKgzgkpwsqj2C1FaSNn4NpdgaoMYnr5f9im1QrgsrK1WU",
  "key23": "3FoPDSwLZ8CewZd8z95V7qtV6eHn6kMk9vunAoL8BGTMVwSbLMr7mRKAnLCwCXV9EKWxB9RfhzCMNYMAgNai1mYv",
  "key24": "4TRNqssamwe14dHtS1DtxBWrKPopXwL1cEVxE9mYS5ag8EuKSAuYsprxtfQEw8XtfJrowbg5AgLV2GZU3KZM1Gch",
  "key25": "4nMfmpopEw7HPFC3jXFmjT2jb932dExXoPUjpvBJVbTQ1xmJLCbQnXfsTLmHSn93k6ig3iXBWg8iNnmfAksNj6Zz",
  "key26": "4wWu64RVNFn52eTVEg8EbgQHhYhcUXWYmnewhfSVbyJhfhm2qQyjDmaLh8sj3y33mzwTAs7FfbUYnzfupvMvpwxd",
  "key27": "4bUEthGoFEoQ4MTrVFURjeq8vsLnmNS4CtpaFc2hz2MTVB31tGeokF8T2qd7X7sEwMRnShdLYFVKbNwfo6ARxSpo",
  "key28": "5e4bY19ux9816xFPEmeuGkz8Gi1WjiKdq6A8t24vjWFdBxNRUB41w1KhHf6vSQcSQfRFsJGrX88P6Prkr3frZNEa",
  "key29": "3Vk9A9mtsUfRySRXVdxLhWZfF8E4AsnA1YanQJYkbUHdbKPJUK1iedM9b6d4zhuJjpB7kat6eyGjMw4yUjN1cMHE",
  "key30": "2Zn13933r2v6zjYJupkCt97W2ifdVrXRVY5pm5XUQdGoKntDF5P5pFS6isPfXd8ExSiMCRpydY1MB5ERj944UUS7",
  "key31": "cwvzRizQtF7B2Aq9dzkKrksqhyRfGVZHAVNAHYNL89CZxDnTrqH68hoFb7HivNxBoGiSMFGb72SkKJdzTeAouWG",
  "key32": "gGqTJNbScjzpDQXiZSKNczR2A8upHxBu4kHuKEGgzh9JeDZ1LR9eK8PV3rNHtRvi9nt1TbNTNhQzSUDAyQGEhMB",
  "key33": "3En33cDqQZG8Y8LRzz3aK1FSYiXo57uVSchoD6VCiVUtC7dgS5xHg13vz6p6ZRdBQwF1k3ZQjqq1CjmzUDbXr72c",
  "key34": "2MfwhdE5f3U6TDeK1B7pF8MAu9NAMHniXUAE22Pn47Sj5aPwjfp5yyU184YnZH62YtZ4DhRskkhCzCFiXprU7foh",
  "key35": "3P8yWZxU4WN8gv6JTH8eQnipCEMnwQAU2XDzSpSuoYnAyM2Vi6EgJrxgXg97WMsZyMypPSn7mcwnWSKkoYa5chSB",
  "key36": "2RchFKirvmsNbsEbcfPwU696anHAn4mqSVtZ3XTQF5KsxoosihqNF5sztZ9RTwJ1kRdRfyov1JrkB8A3r4Qqg6x4",
  "key37": "3mL4mZjDpEzu53zuyofet9wc4M7CPoTHxpTMcTu6ZduZhUF3j7ZzVGkSY5WFsF9G64hHD5Y9XHofLcg8vLQHHSyp",
  "key38": "5c4EAdgeNeU4825Cm6cKe3tDpNSujvtokgRfXhbeQRANLNQr4eRzxUtEWDwYq9wWXVQf778N7AXngdqrhwpPBc3c",
  "key39": "3dyJc7ANfyW37DbggM9k6wXiQNeesv1RsXiVoSrFrUqP3YM7wcrDBGctbbhG22L6zv37MpckBMVQxoA5uiyM3nja",
  "key40": "5A1U45NmD5k3erRCtsvWdobPqihtjkazdRxqwSU1uYkx7cit79VD8nEe9ZrpZKRCdWDN1FMU8ygVzFXwgpK3y6KS",
  "key41": "2iDEzHuG5q4MZrpAzvnLdUsnkmrsRZsdSGiDAYc6HLp14eihgryjnwUj2UeXPFBf8EzwiH4ziiWuHBGVpi1hfrpD",
  "key42": "46FJtpF3Twm3yLgmXG33jZjtWyySzBXVD1WRTk7P19V1eKKSmhgsZi5zAuhicpycCqncYXR6ZryW6TNSdKVwR4mA",
  "key43": "4Rx6Ck5sckrzC8wuHve64gf6F6iGiELVXds3To2QjXccbGT5r8iqfw3BiyhHicp4BXU5ApudQjgoVkndbPcKp1h6",
  "key44": "4rp47JrbtcUdYpxw1JcR9z4TTZPDuLFcTEV3uMeykniJN8dauaC8WQ3VonarVXKuQUfy7Q71LJEUScDfdfD3A7q6",
  "key45": "65pPjkXQ7EyN49rkrjMj7bvqCX7z26RX4XA663TCDUQZu7vk4XdeF4nmAe52nwPR2uJXiJCdTgvoq3xGsNJBgHRE",
  "key46": "4ymS66axor8tzTBLW6DaTLj8unKxr9mP6AySshYkkr8yM5jdSJ5TgzyR7xvmLLpkyBRUtor58GrWBvWEW7aNVmZ1"
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
