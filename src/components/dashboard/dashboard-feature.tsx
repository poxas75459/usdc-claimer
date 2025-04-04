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
    "2gqqQu2aZppv5XJfQAKDu7DGmBe9bpFXYnyFYPhZcmuaAifmQnoePBFQrsoSUJd5areeQd8C1aJMGtNd5DxUgqY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfQWEZ9TykPWWkChrPmycxdFEPsJbiCijFBCCK3P4YuAtW6Gv34TVLtDdkk1sBb3B1AqZo1uJhLLXBeS8EX4qXv",
  "key1": "49biMb68pZnAnWRpbkXbpVvKEz54LruLs4TA3h3eRsNXKAS2txZD8k5C1j8T7gH2j2V4xrDb6wPdLHhJzf6AwJAk",
  "key2": "2oa4qubp1FXtHYuU7PMQTTw5pq7bi68QkpwbMDFhKEBZdb77ZSNW48ZS6vtw2946vz44DPegx6oLXQmHCBH89rX1",
  "key3": "5gFmGDZ7iVZ48HkbDPWN19Ji4f1EJYFfsgeDd7V8RpSLvqUf1wP9hmGwas3CGd5tj7Vi5VCPBsj6w8TqyKMQfJg3",
  "key4": "WFJoAZrvzcyVm7W9dRV4fQSub9ukvA7zRmfcNn824cAryL2KvRpwtoZHDhF7iC7HpBiZ32SULGPFXRFL8LLSBcR",
  "key5": "3MayvXszUZKyUBFravNTmgPBfd5scknQkFpD8ZrnBXTj59WAmokqNbu5wYfXSSG2VckbXFSz1okebKqCvrm8V9RS",
  "key6": "61Yj3jq5xcRoNK16gDS7jutEKf3vDckfBMkZbwyCD19VHp8X3nS28ir5PynBnfn7p5kUYTf7UEypkqYM8Zhr6e1q",
  "key7": "APwxDeLfkYkyS7iqcFKmnspxQyDG4CyRfS5AvRWCfHapUtGQjRaiDayP6LgbJHKgHjqhDifTJLawQCnb6vxJGSn",
  "key8": "29BGo433sohyj1uMKf5CB6dznhEsH5D4MDyJ4spk8QRuFa8pQKGPcr9pWq7VfzM6fqwrSJ4jdfhYYWSyQEV51CrE",
  "key9": "31CdupeXWW9xFMLcXCgf96mZ3t6vTyoYQtnnjuWtfnrKF1HU1thRHNPXhkcs7sV3osDTcFmZ7vt4SvNir1A4PtiP",
  "key10": "27UaRHWUbPcdTvJu8GdCSsTpPpMXyHqggnky412q2ZctrwqR47HntUpYUzcBdm6S8hD7GsXqNeCvBKhjVxhqGEhr",
  "key11": "t5QGDUjvbszjr5YiPNEdj5CypWZRgZ7bQ4r4ARka2ZMqAsoHiCDkzfYtXPTbgqxWKvQwoKfk7nhHPTPsF9FrqqK",
  "key12": "4DJXJg18MNcvcvqFSggi4Wk2gwko1Ct1wa8tfqw8fuKi3XsM1TbfrKrsNRCCvz6ZZ3H5BtiqDyGoayozUFgjCWzP",
  "key13": "58R1EYrTkMJiJwSgfzgjwAZ7qZudkCuJhBUokdjea5hjFbfPhsY3wqdRkL4MBenUojXZybLSRhdaXBxYqhYF5qPU",
  "key14": "44uRSrkTeHfU8TkTQ5diPWixzVPZfEseKj4P5g2uUmcigWMGW2GtnuGHetQGTRuhd2zESPzF9mH1g9j5NmPTYPpM",
  "key15": "3wCUo6mYwygobKGxyga3WZMsLgHEGiqwfTEQyVW7Mhav4hV3p4o9ZFkTDRJREabWxttgbFQnH2vUugHQeSYLVVj8",
  "key16": "4icjNjAHtG4JfUkfSQM1ctNkYEUqY5ZZ8mfPMThh57Z3cXNB8RcWKQNvnTGvZ2Y9igHzMhButuhMoekFE22FvyEL",
  "key17": "4eHefxDnfvRcanSjT45s3KFX61fzs3P3KKjPwUodL5LqudvtBt4DxSzo7gg5VgNhj29CbJ78tHnFxtzUcu581E44",
  "key18": "SSM6b9WwspYAsQtDzKKb4afcxmzaE3adCeHzAWecFNfiAH1HxwexU7bLcRH2W1pDo53MFpPFd3yGWQdotF2cLqs",
  "key19": "4yr2LxKzK973Pnn4rrwQ6xKSKZtGbKqBpvXCYnfYfMkTXe5kD9zxepoLGLP22Eq5HhiFnnJHQv2dCdFewAeskvWx",
  "key20": "5Gr8mPnAWNR2zMjcGM8VmVVQnQh5citNb5xcdx88ZmaU8gfHzRH65wnVu9kJfrMGvE2aZtmb22GMbTKfST2bwR6s",
  "key21": "3Lza7UT3tsaxLiab5QrWfEtA8gdxjqyb9gkgydXiCSpCgj6n5K1ApxgnqqG5uhDunR5iDxmyQZCyJn3uYcP39xgn",
  "key22": "3Zx6bHpjMt3iMxyNXcpFLfsdYPx8pRm93e4EgZeZQdcw2Ayi7ot5Mui2pftC2fYbpgQiJuuFxJcxBX5HHbxKDubm",
  "key23": "5nnvtR6AuctupAWrcqZztp8ijvguMu6h6ZAk9spyiwo3QENB2Xj1yESQwpERGdpNj148cphDEfAuB4HzA5eaG4Wt",
  "key24": "5DTiCdQxcSh6aMet1cCKHKRD8RXFG2c4UBbeCzYbnQrZ6bvVN8PiFTbh2ZHxu6wyEVtof59k5ez64HnF4tMt5p13",
  "key25": "4JkKsEV7DkQaGje9jnodui6TriFtCxSvJm6tapqzLFkJDHXUGre2qAzWUYeP2sTgYDywxhD3WoDyokQeTAJgLpdX",
  "key26": "2nvGt6hTXufYzvLJeSnDZRwPou6sjSkgqr8puBYoDL5s9sK8PtCAfQuhSUmDWMmAyp5wT8vbCPJ1PKrZEkAxU3PX",
  "key27": "9Cyov5PSdFS4Q4xXHByEeFZnqtiwztd92FMn2bxLrS9kpHSq8FbcPHQB2mNSYi6RZGsUCuZvD7Y3pJ5XxL6zuFK",
  "key28": "4AJmFUN33fBXrqXYmiYLxYGxB3G89pbNA2GZVbnPnhRNj9XqARVXq54sTMaMfAWn4b5zTzf5oqoyehzhswukkgR4",
  "key29": "3imry4uwQdW5qYSrQA6u8VjLcr2i9Yf6sshpfg2D5pzTo3zxt3n1pce8nXztNJXKK7peSdeFPmgWdEURohUsX2PS",
  "key30": "4VogA4VrYcPKChiEviTp9F8CavTCtSagNGLyULC3Pub8aZrPC5xBwDsweNBojTZowXh3U4eqHGH9SDkHswTvZaXh",
  "key31": "FmiKRSM3BJmhXcUdayZXdou4z3Gk8oVd9Dt6ksApQPdgLs3EvofLonT1kB231AVriirR6oYpA9QU2otpdjXLbFq",
  "key32": "4SQMzxKn9ByCDTVroWykuYvejSbAgfXoXQbGQkyViYYSzgx6VGg4XsrwYzdaCvMySkBg8wTZCqS7Z2s7QmAVbnA1",
  "key33": "3c7NscoSCreS2kx7TgyDiSzrAxPEARp9pNmD3n5Ah5373w3qo95BFcnTMCr4VpxrYYHXsQQtFS43o8ueTcwFnoXs",
  "key34": "42g9y5L9DHPM7ZCsjxzgBCS7KbFzu4gZUNMfzXf7sHpVNwpTur2dfFRRfkSDF6B6EQCDdTevrc7cdBVMe8E55kMN",
  "key35": "58CiWY5k4MMq5aY23ygED13Cuj1DwgSA9fTDem66eAxqmcDUm6DdbxzZu9NvxsCKbseYQPVBBhoSdkXp66j8tA5A",
  "key36": "2DEnssL4rEyvxaMztgeJLWE239E13DLdzE3A1chdQNMimQ1qBvnaB9dAdWwbnDJ9yN9cxg2BdNWJL3trMsyW5Bw3",
  "key37": "4Dc7ifiVNp14NazniX6pmSBZrcJSFZ8L8e4v6oesA1wACyn7Yk7FAEncgxH4wBgSvvd4qws9oUxYtDyeDBmEtoZd",
  "key38": "3oGrHnSfvBJqX7vCi9A9wof4gXJgL9PKHubzdAF7LLanYyNYRdhPC4dntY8rKZhQiSKWTWP4AvnQ5TZ3J61D8eGg",
  "key39": "52X33tVzqQitthBiYti4NbW4emt8R84ZeZQdrCrqXdYyLPT3YZVVFF28cg1ssyLYy7oQbTRrt4ASdVxZJj53Gb2m",
  "key40": "5TQU5A3FsqBrk2z4k9mRNmZFVVPX2TmjTGvLqVKJNtnyr2x7UqBMK4ahuX9g3ghr8MZaimMBdFK4ojiTkVBiSVNc",
  "key41": "44mPHPr3duQzQeSfGkhKpN8nSuosd6v7nLokyvg5fW9dYCDpUmHgJn5L4kR1iRkSRGbY3EQ8oKy2CuixCzckQVqD",
  "key42": "5Ej4hPAwsmxhi5Y2gJNFMZD9QABssdoKmgvvW865pzNWcaW5bKxb4NJVusnVzw34iPnj44H14vMQJ3qLJH1oyX2x",
  "key43": "5fPLmoaRyqSWfGhMwx3vcGZNDWtGznF9GwR1dAhsAYhWjALpAxn4YQvEvEUxB1sN1CvYraPAUG3M2PWh9ZtVBHMq",
  "key44": "4eRZFSwjCntEkAHr4gXcgVsvY1FjRDLiZMVp3ghfQZSDspZgu9d321SwNCTiWTvWeUJRBSAxZKCjYTbwT5vonKQH",
  "key45": "3KKM93doxgftcv21zHkEyVaBS9YBUyQAtFTtifbdMJhcgqXB25Nr1RKPxvNqEbuZTogXEH56HUve6dQqRMd4ka9H",
  "key46": "5AgcAB6MnKcxBEQRMw4b92gWyJ4bTrQhH7HVwQFG6vmpF9P64tMbNWxRDjVGWiCVdFP38zuiQA4sCqvpMcgRyh67"
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
