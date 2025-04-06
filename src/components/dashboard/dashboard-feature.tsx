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
    "XdBHAFRXNUEUFwHFE98hwMU4WKGTFxmJtBo5SkmdJFP2e4MDWHpmqiLJX1p5cm3LVCHW1s244iA242Bfp5VrH8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CyeTfJHfQuZPXxr6KAFT5yVhAhyaP7jxenRs6Kn1mer7JzqQerhHiAqnfcGyEC2XE2VHYWLrcApb42SRQ9aFMZT",
  "key1": "5V9L7zwdSaY81iXAgB2atLPfLK7ihBe8JiwvGYveNz63krVZDt1tn5ygF3McMugjwmLPepE6dZjjiAr4aFHyoeP2",
  "key2": "4F2ixMjgvuDCYaTmTsSWd8bueA57eZvSMTFAaASHu9dc1KLqAQt1C9dEoqH93AYUK4taD3AcoiZzfTaUDZdPPBuW",
  "key3": "66etWoHat7oFb2vvCGAFarJQYyVS7Yk7fPk4A6Fr42sNNYLpF76Zygfye5o7NiL5uAbd7fyMztQEnAQtrAq7Q8Dm",
  "key4": "2PpiKp1cLp1cXpedshoV4zRsxQhdNQzqxcFxxKQW2ABWm99LMLXqjJNbaAn8nQfQWF1czWpfeXjKznGmCi4qzCpv",
  "key5": "Z8Dzht7FZ4rdCBWxGYJNT8e1YK3Mme5Gu9XqnJz1THgQET4x84oodQ5t7hmn23sAKf42SZZNMrom1gXR1xGF9gD",
  "key6": "rkMmKCzZZoWTUvu6YP9yhWwfUXnYWxqQ7HqMjhrWmTJNjrSLb2MvbJn4tN4RKa8HgRCSz6tf2CvZFyL6tY1jkoW",
  "key7": "x1DyYhU8Snb4mdqn9BjKpBf94kL3xNAGN2PgRf2BPeRz9V5tUmNiujs8Z4SJJwFNuc4xoVGBsjJ4uTPc4bvZ81o",
  "key8": "2q566AmN2wKFcyqn3XSNNRhJ6947QxBoFRKjLVQH3q5ezdKv4Q3bUjnZZDxpr5nbYGFrVSPXEjCTxU4GM6nsoxs4",
  "key9": "CMjpX7HFFJNo5jwvg1cMhqJJMypj7fSGeWcBLPLiur2vV9yShWSwuLm9J9YbrBp2hm9EHQMe3yBYXzby5XAtSZS",
  "key10": "5VLmaGptnRcTJGqQLhP7Zz64uWQGACfBGdJoEqEEyPKTKcT6dSZh3uXkm7LyFyKFKJSbFjCg9Q9LaTFbJTEJCDWs",
  "key11": "63NgRbfirCaHJanRPWAAYPG5NVFGvwchaUnnTEzrooezAgD5AFMYVVkf6RzsSiMKkTtJuGSLXgNEdkW8CTfbYgiw",
  "key12": "3FQL3z85SAz3wimoCMLzpTX1aeLFoay8niEYTJiU8B7asNJah2yzQ2ukaVFhtYLx9Kvy8wagfr36xjKKuSCEKe6S",
  "key13": "2uCUu7pNdy7PfLKR8LxUW3hnuDS8gdDveNdvHuXsoRyKCPKMYqXxZRoDaz3S8eTeNNvYPqtt3tR78bcKiVJP9mPA",
  "key14": "5oKaNPwDfqA6rFKx2pgKCCwm8Lsovme8TWMTr2LcvXPNEqeoNSFYUwCDzeeX8prnEbDGYyXxxWqfnqixNVyHmXLP",
  "key15": "3UxLAEEYK2AW2B2JjJ4Wn3LpZ2rDhQUU7wyRLSe5cnXXS4nD6CdsA2AnHPe8JXdfKajYE4vjU8YwZHjL8fE51aJ3",
  "key16": "3AhR2kuaN44cYejzDVsCAfbq8pDk9tpKyUCC69VropCRXcVJ4BebqNHBBYS5srymyudsu2TfcTAWCxuKnWRgnLat",
  "key17": "49GeRxEFibi8RikV1ph2Bgwx9uCvgmPxmZhZSH74xBmdPcSz4qWx4FaK4wit6AEBpeQmDyt1Lq8Heem5i8JvsBBU",
  "key18": "2mNXDY7epNP1hcafVowHKxtmt9g3Y9hAtL8SEkdhP3dpV9bURnJbwgSL8ZUoYr9mjH3KphtR3cCtup5XBV41XY2L",
  "key19": "WEWHV16jvqmhwxe6BGDj5oLaDFYSTSA2meRAcc1iw75oE7KUWzFjTxa2H8PagMZdpgMYYrMTq81QBo9yCB2E1p3",
  "key20": "2MiahJGLWBrp47viyccAap9QrTsWU9sXnvPS4AVBpm7PnwCe1DnSCy3RF3fd7S9YpzEUHaWB64bsfVgZiQwf53xs",
  "key21": "53vfcALc67rPPTReFiGBGvayJpy8saaAW2bLBtV4wMjY4MhGRuFAw4zVCmbH8dKHnpyYbq3ewUbFdGgBqBSC629S",
  "key22": "3ZgJCbt2aYgYZRW1TVxxdQfgih7ZrU3DBfWV3yEzqt6jyshQEvFrKvkFWZMC83pYtT5h5bDf8wnEiyoFyxhunQQX",
  "key23": "9sg9o28TxqgQgdrqZ1mX6QZS3EFxthmFtPhZEKvFRxpmfCnu2j9mE76UjBTJ7LtQfxRZfbwtMwXGa8jPLUr1ya8",
  "key24": "2rcpw8T4QaZKY3Q6Y3Q7hRgFEArHcvK3FPay9vECJ6oVHuiUr82yXXXYTuKwHipzGeCgXzNFXFEGnhg2AQFKE145",
  "key25": "2tyifd4ip5GC4xQDLganGWCAHD1Lrf5NVPJenPUZJFCxcEZtkFYKmCXJ5snTgxTNVJUsuLqp9RBYscBEoZYhMzNz",
  "key26": "5w1UigNBm62m8oB2XQLMicS8LGHi13Q2xuwTsWB75oNJVZ9ucVEh3VDMbDwbsFGngYzNkf2hodW5KMNNbH15vzug",
  "key27": "4LXnFCgaRPptZbMWXGnYo9J99roaMECeCESHVL4NZiqesjAbwfGEBokX2woXHZpQynzxbfAacYoMsgYiy8jPXbQF",
  "key28": "4CXi3mrRbUYjkgKhEbnTyaBA36SFSmCWBSWdooYExnBFAtaC4HmMzmsF24MnqUzb6Gg1eGTq3AMmCeFFdTxayarn",
  "key29": "5sPZJYAuPtLVsJe8WoTydRP3HXXnJNzA3nVEDLKeW3dD6vhfYiNXNNVjUntnoodvZiD725TVPkjjWsyAnwfFdWYd",
  "key30": "4zhJ5bUvMMFNJspoFB8t5YijSFkD2HFkCwtdbViNnGGwFY2S6hN13Vu9mt4sRja4Xk2rRxHY8F3odS4aVWDdVTNv",
  "key31": "4zFVh7UepG58FPQzpTSoYhNCmBuZ3X3pVbMMANdzGGaWKyyuuvA3Whzu8hsa18HtXvNSFvdeEe226Pn79XuY3Zmg",
  "key32": "5TKk7h45jcvCtb1miDaA5nd7nJstcaE9f34UcPxJEW6zYGKiG4ywDkfjEcQeteXmgwcWP6Nw9nYET9DLwgibi1fM",
  "key33": "2w2Roj2JMcwYw6incdfbhwBMgM32mH4nyUwYimc4e7CFJ1JJYdto2UHtPFZBJ3rtoPB2FeQtJfeGsoK8N3Y5kCVt",
  "key34": "4r1ky2JsbDLZ1G57QYRKaHhUFfGBGJGmZk8WqEv7Fzd2xA88AXZ15uobkGBcu6zVyB1f8ZTHfH3W1YoWzsTBw6WD",
  "key35": "5gHR53VDUeB91RpzKXiEnCJ6jPhRhHQ4maBvKpDGUppZAsDvE14mBJhmX1HjoRu5hKTWRHQyNB61umEXSoB9zsTB",
  "key36": "2HpuoPNndNSHYyvDTbcAtsLrnpibT3pKnTiTyZjwZZ5s4pBv15S5SRqRKH9737CZbiNr7ojKPrh1FBHga3YvgsqM"
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
