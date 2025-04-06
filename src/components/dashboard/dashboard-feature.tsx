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
    "37WiZgE5KCaZ5SKT2J1fFF7XJymz1wQwKFQUJgiQympwUTFnYbLE6UezJtv5TdPV6xNFZX5cTsaEcJnSBoZ3Ucm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6938LBjMFi3QL2bfgEsghEcf9G5ttjuQeNXvyPJsZ7khL6S5x5qsvue8UjWGPBLtjMnYs8zvFfo7NuBTjUaKNp",
  "key1": "3LadrHwzAfZHSQxqtGpBkdBzxyf9tDLc9BAAKTXQTGJ6rU2XhpKd2inRgCZf6LzieQa3dL7VWqQXTJ1yM5oHKBzT",
  "key2": "5e3gHcQiGctun6e7kKeSJtJm1kA42Ntc82Hqd9hf8DfLcnUpKAVajDkWVprR8TLzHWEAUe3RXtLtjpMzfjYMovrN",
  "key3": "5az9gEEaoWTvXiFRAQ3TSHKW7sBNuxXF1o954TLeFSUcq9wXzVL23LM3cbUaL7h5JXW61TokSTzqzWDeYeNRkKNS",
  "key4": "5uTB96BVSwLcxaTqdJQ1z1jf63QgbzzS5Via2H4x5ZYvXBf6gL4E37E4HZNU65dtAsLZj67ZfW1jJ8jaKjygdPRM",
  "key5": "4tGXmK9R4BGoyHof6gtFks8cjnoERNxtc7pi82hzCHcgC7xEJ7Vy71mD1AHokDN4gMLoUMvUjQ9EuGWuT2kMoEBp",
  "key6": "eLVzYHC6wdJ1g9eiQewXxfMfe8aiJ4FdojT8PssDhHmKyL5hR9tJXUYvSB4HxLv6nSCBG9cCqL3EpRqLY84MzgC",
  "key7": "45m91QU9J6XnxpYYKLytzoFrVgTrQ1vFtwKuzJZivkuY7v4Pem8MkqcXba383j4WLVjwEAFK1g8TDwYkUVWRnX3X",
  "key8": "5gTUQ4pfD7UFM5rLB9SMrQnvULhfurQSwURMffFtcdp5xFksvM83NH5t4gge91AdvEV7x8JMjrMaJjMFTtBYrt96",
  "key9": "4LYF1Tsr99qnq6MCKpPA94MCzJpgBqzirx6k56LARuYhGmnnXxSD2JpyMj4DQrYinshtNkjUNuCaDnkmrq9k2Pjh",
  "key10": "3GAVAhDCmZ1DG7yWwheV1pt5vMhEtqP33wMJ8BpviY2xVJD4ZeseNwApud2N7mMj5FtNtzBBmPkGthiDK12zgC2h",
  "key11": "rfJhzBwbrVPhVXCg3un2sJqzSDBQBaaJ7XttcL3dG9iEUC9ojerynumfxeyxWAPCCk6S3XD1rN775VNcgkNZZJQ",
  "key12": "4dfThLuXkdHy8xSy3AqTZgd5T22cYctGQwfcVsLYBiwsEyNTe6gsmXitMKPs667pwox8knAZ4RQQN1U3ZBx7Eijv",
  "key13": "5pdppbeKNnMvkpS5JXW5djfMTeU3VEeTacmTJ2LXqkxbPyEuwh31nDLTeENPCmcoZ8TMUgpzNqXSWhmQnidx5Sg2",
  "key14": "4X9E2M6RFNEaoWRj1BXdnigJB3woioUpjdyr3os56JWkrmQoyw39tZLCLJG71zjXUNaiim7ssdDUn4hBvBibUFho",
  "key15": "5YND5yrkwXiNFkqv87FLEwaHrPwK7pANs2TWZ8GHeJgpDFqDLMF9hEoJwwqBn5ZJRgzNBViMwi2DLYcFv9PTDPBC",
  "key16": "4JGz5wotZYkL1cZzsoXtLBYuRqTFy1iy2LPJoXfGdtHs6qeTjeFCLpcWiPcuSPFWLq2jtqa3yVxdEYmv1gi3GBsK",
  "key17": "2SAM8YcgLiMbf3QKpdkK2ZF4ajvetSsU5zL4VysWpnekKFLbrTvKoPVfApNe5wsiHKwkaS2eKnsKZ5oZfuVLpEgr",
  "key18": "4i49BWXRvLZAhhqramdHGwnS6s8PZSzgWWNL6KLzVq2yqh4PSo6Q8LaSaDgzq9ovNVeG8CpmJ7e1ajoJMEyNDXnQ",
  "key19": "3GevnL6ekg6Hs9RzuBnp5JSKpTiDpUMvFUXKhbUUeijn2Ju8vLyRfRwR7Uy644VAQKbVd3FSs5YTBRCH8rSaetrH",
  "key20": "WeosWqPLWHLvp8nVsY1Jy52nfNANmxZ8RewvV1QEeAroELSQz97eroiaekXMsKvcTGv3KhNbaAL8aEFJ4Rk6NcJ",
  "key21": "4MieNR4EAzzE7Mo32ty1WqnBHC4WPUDpZ4vbdoCc22hDYE6P16btm47EXMAQcwSRgGzw94xzXcXofUJjiVzuHkLL",
  "key22": "3TC4c9mPdv6YzfeqtyEwpAzCcxwawhxfcMoDGkHX7uCHmZg9YUYjhuquZDLWACsad4nRS5Mr8Z9CjxGovRB7CCW9",
  "key23": "2ZAU3ZzBSbM4ZFi5Z7DAqDB3PuKezVSWDpGHecGrMeJafWAu7apFtNA7Nm1CWTXFqQaC57LbRCafB8kuwrCfKrJG",
  "key24": "67dEqCj9UZsLbyvonjYNdvUsPggZkYPdHV8kaEK27QLmMDCAMGuRzcUvK7UJB7pqrQpxMjQoeYKbuAKoUsP4sUiQ",
  "key25": "4nYrR83zYVPNt95aNKMRn8Htzrg5tWAjXcex1VPQEMuc7rRNXwYsyBDvYozSZv4efBorbVpcassvgkhviSyHUEJX",
  "key26": "FtvLyYromtNa6AHNZRLaPSzooqtVg6ajDDm8BrekH9hKDVA1FYuA91JdAvBzjkuYXDybi1pN8vER85f3NeEPazG",
  "key27": "bqpFQaDsLeVj3n8WsGUWYG5wjZaHiJ6rJcDc3PAarfSVoauwnfEw8DvosjFXNnYJ3BnsmuSwMPTRoGoCdJPijiv",
  "key28": "4E6xPzccZnBkYX38buX34Qrrqz3vHBrvwZJzDrvQz2x31dj9k4bHnBXcjwk8bXoSprLhL2dBrJjudvsCHRRFrWR7",
  "key29": "2Ev5kHk1QimFak6vFSffPiaxZEPSnXNvp9TMdo5ZvgoWZvfY6eLpH36gHfjPpPk3y52sHcvy1kcqsZCrQKBgXxYh",
  "key30": "5EaZFZWEoUgPvz85EPstRRwWb9w5KqAvZvZdKV8t7hTem3carKPx4Hs7ajPypr1JPWoP4AtGegwq8hyXVCjNcurd",
  "key31": "swCQrmwaF7pdAmcbzT6EzwwsAVRENKJ9Bw2onLNkWnLwa4xKKpiY877dAq6HMfLbdbCCxkbgBWEuKbeEvaKnRZX",
  "key32": "5oxuYwotnk6dHsJ86CVfUz9Wx41NnW3XjBuD7LyQSHN34qjFWkJPXEraaa6vVrcEABUXAiEp8WXfphx8Akik1hK1",
  "key33": "4tU2U55tEomUbYgFwWSVR2d6zMrGU5SYtvKyCMHaB2249XJogG2ch8LqG7BYGvAWPhwu4suzcahBhzjGfKUZzs7R",
  "key34": "2UNPZ7TQHV3JC7ZdRaJFemLjZ84ChByeGHtMqaPv6JzuuSu4b6wK91PtjP4Jig4mGL4sky1NP7XFF3FcXVyoS6bp",
  "key35": "227Cyun9wQ9gdGLvTg9MGM3CYmfsJGFa3Ho8cDmzMzAkTQgLhKnEbe1KpcFbpqbf9kYETkJREwYi8r6PVDfURMTR",
  "key36": "4wkGd2zmDBD4PSyZ2i4Lcms1qeYFABmgyVxsoaiHpghRquJ4BxCxLD9u6nvGk9TkzfJVpX1V6G8mAM7kWmuyMLTY",
  "key37": "5qbYZXtyvVUMAPYLdMy5q4AK8QTdrKpin7kb8r19mWAUopkgQmdADu696z2nSPhEVBz3duyTBUC2fvM1r7susGvU",
  "key38": "tiNdHvR7govXxmQoZkdSjr26cvTcpJicjNBK73Zz1VEemvi9MQuDJdPuPwjMCNCmTLozEo7uz1DruRULucE9Jjg",
  "key39": "332uPHub5hwMejfVUBtPKDYn6bqSciBLU1R4DamnpNx7x9Lpxg3dPv2ShrEviuJCUpFJimTjszez3iypabJ5UD6Q"
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
