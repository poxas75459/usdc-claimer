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
    "3hYhSBVmkhNCqi15ua6szYjs23s4xSsq9sUZcxTiS6rtW5BTBEyfhkdMcDVHv8BZbUVqnKN1HMm5BZ4teB2vo3jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9QTvmKS6zA9bu2aa9Q8oJMzPq35nGjmTn3rr14UKdrmuU9HjUVPBYAkFZ6xgooDqb6SXwQkBBmTCTDj4kqHscX",
  "key1": "Ypp1ZM7XG4KAYD277dJhCF4UQkz1RWVAMCfXbWboBFqpQUvK4z9AHZKPhdupPNQE6dAbUuxAhSfpBx3QzuMg24C",
  "key2": "28UN1GDSchQNNKWWhcmHLvPAyXk2jUdTztGT9PXEzoyLsW98a2fee1qEKJEutKHRbopv3x1yzpoUAX4Hzxxhf4ry",
  "key3": "4dYK68F8ocmcpabuQS9ZdWUd7XKSpQHiXHBDK3TfAdTG3wABWnuH3dXzdZD8DA9bYon7u7pCfteCMisB6A2vVzF2",
  "key4": "3YhFkmNp2PSG2Hrcx4JKwrhS7DJMLP1GMKAQnTPrmvRTSaCerYjWcLUEkuvvTRtmLGP5UZUy91fQaqSpeafFJQNC",
  "key5": "tc9fmUUcCkxizpMJ8ox5HNCpJKBBoJxiJGjQCjb8KWAdZT517XmNZHF19kbGU3Kpz6pY1YtRrK1roREybMwmny5",
  "key6": "4iCPUrkkFddkapV7JHKihMLAdv6tNXTd18oSiZZoTpKpwgBNjwcEqLcKCXQNeh13swr6KgMeZFdoDN2tJqtnHGh4",
  "key7": "3Vsy9JiSUEnpuPbvVMmbSBfRTjNrkmYCGCibouEquyVBhDEDDUJD8Dx2aNdLYAG6KFArkfJpQwAeoA9V2cstQrM5",
  "key8": "4v8DRQGNo6kKVWZGpjxHw8SARcdx6QNkU1TvnKAEiZF6HxezwDRzp7M926Wkq6maxnVXqhJuCDkHXuVwGSVBtJtn",
  "key9": "4dV8KPwjg7xrEyUTx9zDJSW8fKn9mq22N4P7rLvFia3BLaDzVjTCLsgeN49E3HUhnUEzwQNWMtHpcTZfByPAyNtr",
  "key10": "6LRxXJr6FoiQ9appw4bPr4kXVqMhZuJh9y5JEd3mPqoX2aeSQfoiZ9qjm3jm45UGTN1UA44xmh5CKHaHgRmxR2b",
  "key11": "4gEzyQPCVw59yaXUEEctsXfDmQY2MDL3VYYdfVCYHrZ4rCSpLBycgEoN315p3oJ36r6DqLF7WbTVgB729KPMzSYz",
  "key12": "2HfaVZXgPD2Zi7z1CyNuVtyAPSiiExxXUE4BDCisXY8Mz7gWD43wqsKAYUz7vZm3rHKL3AV7E4Q4bTBvCkjyYiyu",
  "key13": "37wWZ2ru7TcGgbRopkTdNHvwqSdK7QxWGSBqqCWhbpdW3U1ssTYRF1SF81SPfTV2cwbCDuWFXQgDH7h48JnmyymJ",
  "key14": "5mvveFfat4vsnXsNEVttE6MSWxv8qapVixjvwUMpmGZWZGqVcnvCaCKxwtp85pf21MAU9Vq8KrmRuMCsyoaXCFEp",
  "key15": "41B2RyhwiBLGQFiuq8aA8Yz5MtP9LH6Py7Tkdjv1iqKRTHZaDerEc1nhXhqShsx4znWZvUxn9JKaDshaRbniCtG8",
  "key16": "4SSUa6bZSUdsLMWAwP8YibyFMzgWF1iG1PyWCYx5giLBepr5eDBnSyiTQTCkDi2QCcrearixmAH9Uk6SeDCuxRH6",
  "key17": "4M56zbMBgjpMG5BJpkdbVj2VNQTdH5HLmfWbKqcKMYNvi2BFcM1QY8SZ7Yo8jW2Nq4AvVywk9a6TnSwjnmM7uxs2",
  "key18": "3uwTA7pAe1YshxRPoSqyteKCYPQXao9Rqhs2Ka2bLbba3srKDxCgZerRnLKXkC8j45DMz5ptHYsfaKsTVNUesjSy",
  "key19": "ELLzFePRWJX2u56BKUheE5xSSYHy9ZPUndacUu99eqUAeC1ouM1A1r6fUdMuXfEDVt7ZiJGPtFaSUinRv6dgTQE",
  "key20": "LGXJ3FkfvBzQY7hveRWEvaKACLWYPEYsai5scRjxriP386ZZJtBvHUfPpXdfJPtVMPEZbZwJgKB6ufEax2hHdzw",
  "key21": "HmoEKdz1BK8BWyUbVWnum8a7GoGxY4Zi2q9FihBwTJYJS4kLPjSKnbsJnBsj6WgMTnJZJrXdubL742AimqaYt7c",
  "key22": "5thEHeUhwwgs8A5N9RkiNcQnFs65YJpm9rG6M9QnYHnL8siSmgoVSKpP8YfmSW9fHrnZqYhpfoCGWFHj7rcRgujW",
  "key23": "2oRup3hgykVCysDZKkHw5t9C4Z9S7vrFf2X5wZpqfoh2g26iKWD9KkLamo3oZynSi8nDMu2h5B2bfUscbMHzXAWn",
  "key24": "2uvHqBd34B1zqbxLUYZ1heXjmwXdwYS7CatWMhEdMzxqtrbNtMWTg3kiie5n7zguBLyFnAxwe9Qe9JmdCkzbXhSU",
  "key25": "34TuYcic3WoTphDEUYTzcuvFHas5fmi93EhCKM6v4xCqJTJHyYG74YTe4aaFy2Ri6A1p19BMr4pPsMd6iAraxtjT",
  "key26": "QhPMieKKUDaV1SrPRG1qtuRoA1T5UKvMz1Wu8cvHTXFkuwHjxkxPiSERmurHpsZm5ckuVqYE2xtPMFKoCK61oBt",
  "key27": "4znGwpty3FxkjFrtFSZtSQ73pRZYSQaLBuRhvxh7bDfpN7v9f3SRPfVo6PBC5hXPB5Kr4RF11AqYokmCbWxR4fco",
  "key28": "3dxT8LBNcMKxA8b7R75qdTCndPDFKWrcTbvk4uH8pBebznE9iM86Y6asfgCipAB1uewc7dJhYzFaZwnUqPsSZE5W",
  "key29": "29gtbVFiUxCpkX9UFC9N5dR86DXqGf9ap5eGiHWXTPMGqzTP7HP2wueVgZ74gvpw1JeeZe4v2VmYDEJNmkYeYvZ7",
  "key30": "4Gpt9tp7fcBEmtxymmqkrbWD3Tj5CfoMxwsuCfvbr2pdmv6pKDG4NYz2br3nTMJPeWEPsEv7L9vMQ8xAY1YcNo4E",
  "key31": "fGZrh5ur8heaiKfm2X8WY48ZGvsQ3Pxi8RwPPWNNqsZT4LrGCK9kbuYdqWM83XiUJvmFcE1txLz4tXnT2uGmdc2",
  "key32": "5r1em5jrD4vrtAxM6b5cCkHGXzdScbYK3fQ2qQrtW1R7u3zzKAsPwZ2X46bF8V1AYsu5aYAqJeGvGJi1eCG4BKNZ",
  "key33": "5dR6w3dHwe73kfpQyMf7wJrSoqrgRm4hQdJdG7kSg3kKTGhj3exaTWcpv7pjxNf2oTjtXVPHX2bUdXBYKQt67yrn",
  "key34": "32ZGjEdfLo41wjfYJUoB9CK7xWJkrZvkHGiphq1bEUprXsbsiRcbEeuVFmuLPtdpQ5jNKse386Rst8Ez4mDzSp1",
  "key35": "3DQR9CFXeEuib5fiGQ5BEQbDDqpVUXHbQDnTzyY9Q7X7vdMqkDSnSyAnXsRPaninAn7dayaYnvtjV2x3uPMN4g9d",
  "key36": "3srt8rCxx32TUgQn2fiFTJiZNyD5MdZ8MU6r1tHLXzsrSVDygYaSAJN1a3PzQNVYfQpQwcq6vSpmVmfGG6TeKDMP",
  "key37": "5xPvYZHvSDG11hnSxwGBSvDVoxryfQ8qB1gajC4Q4ev1YNt7SUkx3TbEwWA5xTwfY7TUJrTBxjAMJruBbGPQ8Meg",
  "key38": "gLMeP4BNhwJiAxykVpy4qw8s9hyzYnvMtKTc6nmGDYU4FhZqwuHeRrpJX8hxtDadUhsXcomDvDXRdHk229gnA5q",
  "key39": "3aH5akLGZ9ADLc7D2UKaT9TRVFouxwrtpTJpfjEP4vGVvjkAgnHZum5mUkT6cn1Y7q6CeHgcsGoAp4nLWis2X4vA",
  "key40": "2JJKXmEL3YRVMc5PvJwvSYNuTDzX4y4Vs7ATYyzt348bRLZSAtWWjWgaP3zgk8eijWLZ2LcRwnqLTK4TGdPG1Rbr",
  "key41": "2mYjPiWPyTfChG2p5H8ixbht2BDF34NSKDyaMVHSgtHAzxyLBBNVxHfMbtaHHJQcjLvfoE44CubbfkkDjEzu78eB",
  "key42": "4Ca15VqGgEiWZaJ8BxcPRbSGxE6tVxMxQP5ovnSiNgtRRFKdGRQ1qGAd5Dd62XMdmLUzZ4rreZ7W6vVcj7TZwnHx",
  "key43": "5RiErdiuLJeKXypFD6A3mq2ZWWRTfW1xdL5KjjZhysFEWocMKX5y8aNY99om12a2XAoFmwf34Z33u55GXRC31u85"
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
