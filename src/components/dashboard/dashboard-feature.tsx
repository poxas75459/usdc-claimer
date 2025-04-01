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
    "4D7Zs34LbXAGScxDiz3sTnpaHzg38P4rmSRZiFqFkt8sEkgEa6uakLVaQZiK8yHjtGUNqaoRMWzxfpN9hnd6cfQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Lp715U1AM9SwoWND3M97ZWr7iBNmYYCCWtXiA31iqeZwzsG83egfF69JvpCuWZvJwV7V347RK7oBSQ3uoEn9X2",
  "key1": "3iThHWqgyK6JBmdwqErKh571AaCwwLD4j8RfC35tSUNmCW8dNfnu2LYSkMJQgSFX1dL7PgCL7tS9Li7kx7Y7dhNd",
  "key2": "5cS1mBLYMaJtGJ8ytobNmbk22jdhkrrgWWz65zfNoAz6fRzVQHChTbygbjZVcFWqyH7xGC1xWGNTXg7dJp7gDFdJ",
  "key3": "3ZY1SQEB3DtfLNXzRz1eMVqACVMEHhjV7KMPp4Ly2q6TgsHjB4ox6tnnLyxsAsW6zVc5uoFA1pxixGMF1D5KYnos",
  "key4": "4WYkB8P1NyRpfKgiqYDmaBEkFHdpLM3CxqP4rF9xoEyuNNhkfNr6iuxheykRNiJmtPbgCbLRjD4XwjiZF2eAEAPG",
  "key5": "58hJfdf71REQf4uptV5BpX3scLCVquRaELAcspdhKQmhbiQpU4NVMYe2jryGDpWRxAXggov3t6DBNyvfTxQ5m6V4",
  "key6": "2bF2iHUYtZAKLMF4T6UrveamtJJ2UynLFoP55VPEJTAn439uCqEhxnXQFhw2MLdeXoedSPR1ixrty1BvwaB5ZNX5",
  "key7": "2ckVtQNbePMV925AQZvTZtpn79R1trtDmrTyZV4jGDs1VKqgyah2H4joN7dZEsRM48WFBx4dkwc7u1dbymt9khdp",
  "key8": "wFDjGmgXE8iG31iqk8G1gUe5djLrAyKtkqYyDdDjRh8RPRzzzLybER2rwS1rmPw3JdA3zr7P42uS3LgcvpaXr8x",
  "key9": "3KyueLXvbUyiu3ereTesSjCsrETSvSe2BNjkFBVe7kPmdywMPHy7SXkfJec7frsaD6SHdiWGtnEzcix2RvagQzGZ",
  "key10": "2scuw3o4VGbHrSeXM7xKJthLTZSxRLPC7dw9ZhdDLeuSCvStG1fEhNPffMHGcir3XBZthc4r3jZa3EsaFYZ4FYu6",
  "key11": "44JQvVoj9Ck9qRcJGnXTxeusEWReHH2y1LDowhVphM4L5scmcmiszmU78jzZiok8ncjHobJHBmdYZRSBJRGjPgbv",
  "key12": "QKMbiqC2XLCp5yfDjF5PJxZojTuAx2bQymkRFVFLPmL9wnDFfWpYDnYz7dAqh596cvDgEqMY83erUDgEUmG9xyL",
  "key13": "3Mew3eWqx7cC8ybYq7iVGid3CdZxv5TxCPYYog76sqBXdsLXcPLjNxDyTXg46BgenZWEs3NbG2trZeWDfgRBxdv9",
  "key14": "uCQx5NrFNgG8HTZraM9NLB83aYNemw4zhFWdKBPtY9NhHtaS9UGKR4RYCFrWEJZsXdGsnogWhTYMkMV8AmqB5tk",
  "key15": "57pqqX4u29bENYNtdtX1rbLudpyMfzZSLv2eFm2HNgiJi7TUWDxsztt65yjaFYK4gEc7Kto1RT8QjULdaBPZXtu1",
  "key16": "3hJVNi8U1RJ7bk2VfhicdDX9pZzbfe5WFUk33yN35CVQiDpYvkA9P6b5KSZnGt8LKR4EXPjm44TqEJ34wGrURm9k",
  "key17": "2iiKGCHLDH15rzazhE7GvN9moPRXzgUiKJAk4kBqdJtyyzUidDSxxpe9sMrCAaWhaPEkcVdJ65TcNiLGgptmRrnY",
  "key18": "4tUXc9twnPUXzZ8XYkjkZjztowDqhKLDcjFss4DXCqUpqnbi8vJ7zdud3W7eh9w4i511C2t9d8Jo3iucDM75zSqH",
  "key19": "3AfUmGLgn3bgKmSFMbHE2VpC75UHXLUrA2fEqMmtmF4LoiFsTQ2rRH2o3mzgiyMdfbk15AVk97UpwqtYHDb3eUsG",
  "key20": "47gs5BwLLqV6FemzE7LqDvTbCr3AQzrhv4NiEQhryJCXyRho7nym9dtAd1rgKayeHmQZGDdTvye7SrEETLfLK83i",
  "key21": "4i4oWUiMSyoiUsUfAHM6fsw11bvk3C8LDDNYSfjLmJQ2huXfFKtqBMo2R88wDkwEgzMtHUmauB8GgU9QJj5FK3UM",
  "key22": "4C1thcooaokpqQNwitA7yPVgdmzERMEAvKzW5VLYwetnadY7NvAHPzFt5ht5YZSZu2xsgD1LCTfKg9Um5aoYwueY",
  "key23": "2CeUHzT2VTg8NzM9rsxPcDoFkMACjoP5KQHsyrX1H1VcjEz5H1iiuPQfCq2tk4J8iZdiDCEZ8artpqfcZZ5tQgmj",
  "key24": "WRiv6BMwYsA9KCshkoHwbwu2TibejZsE4H2X99tgnrKFmLNK8Nk8EqzyF8AXPSvVkiapkfJvc6DskSyCLQTuWQx",
  "key25": "2822Fj5vtbw1tpEiinWWNr8h7vnNrNk4wmjj5tb2sVvpusD9hvEBvWnqSajsnVwyXRoY3LcApWokAbgGUwr6LsXg",
  "key26": "2vh74E8LpLNQpEVACqUHwH2RnwFHXV5mPY5MMWeYUg3PwY2wLBNw5eP56B9qTzGjmjK9Hd3owiYQyTCeGGevRf39",
  "key27": "43vJvf2S5cvJxx7PsQgzK1R8LvyMhWKetgtFbbCpDEXEySA5D7MXSi7DHLTuWLs4XtYuXY83a8ZyYXEEa7ZiY7PM",
  "key28": "53e9TjocLagjCuedwy1eNo8N9TaNnFKE74ym4G3P4LXAEZMKdsZ6iJHCzFeWyUK4gSiWhiMFF685JJLCsMkEkRwm",
  "key29": "4YzMpDQHLgekBS3sfN2xmmEwLVYCh3RiCbs9DvhXvgkMfs1efFnQaoxztLvE3aY7TE8zgfL8sBxbBVCreSRcuKNe",
  "key30": "5PyH2epoVHAFhaeGtGXbEU2BCPp663SD7rHHryLLsAD5CfBPtSuMQBBTbCVw2EuoCYndv9vdeiSH7bkAVS6AgaFg",
  "key31": "61nTjR1a2fvW4Z22kxkysRFpWNMBmsoRat3wGbMN1XadUWxiihsYzV1XtwaLfm3zTz5ZUt5pCpUYNn8ZPhULcqqE",
  "key32": "5mXTFX7ucDvzCCyz6qV771yqmroXL1Xv1mAyVG2x8Zm4AnaoKePgfJri9B3APX6L1GYwebZ1pq4kKBRGD9YTgRrX",
  "key33": "2E7wpgHYNk7ftcVFU8nTmA3qxbGJpzRVoG3cQQpF5CZ7mwTznzi3Epzj6z6tDTiX7QxMw455SQUf1RRGwPCr7tYi",
  "key34": "2G1eTvNVWgrCm5LB8PYfKLttpxMthEnX6BHDtxxeJg7wSrPNW3LZXi1iMfckiYTdve6APw6HnRLNgRUnmGBTarCr",
  "key35": "zB2bozvJzD7DxD1JyatV7vNstTw2vkbPyLNCRBKNFAXba8x2YKFBCgam4QhZHvTvhDBd1QS8RzwRFeiWTmHqaoq",
  "key36": "61B1JHwmvGL4KcJympTjhpdy4aPLnoU3vvSXui4FpEiV6CrvnvhhbL4ctd8xXZbbvVCw5vh5GeYnVWusULVwLQCQ",
  "key37": "s7Sg9CSdMftHQeoKCcz4WgsVELbbirdkat9p9G7tU5UmjbnXjFsSMazZdpqXYXuztdJiGDEkWrkyu54xEV2nHQH",
  "key38": "5cFqvsXytxfphYZgN8MTnYRYt9ttzP7UrBBptD6uEoXJcjd4nUf1XdToBVrLA2WZY3KyoNi8QMVuvGjptJHzU2gq",
  "key39": "5k1tkW8czkjy3uJzpzUop9KfFr9tYL3Tq67dDChLdeuAxhXgKnMmTU5n6uBmB4D4g5sTfUiLQ7igSBYe1dtDWGQN",
  "key40": "4yd5HQoWJPS4fSa7gyTe5Wu3fFhTGaN4A8KMaWCNjVVKV6RvbGCnKYnudZgkiDC7DpziAGH2Yx7En7ncZS1GpYo3",
  "key41": "2LHoYxgCA3LU4ZQoEX3uDZNqQLJQEztWUEx6QJUGSwtMGy3MwMXHc9EaYJyWvwBZeEmmtRRpXs98xcmu7vugFJ9U",
  "key42": "3QLAVHLaTPDcpFMhSp46ta3gWYJoUDDbKbe2EmDCCzHGs21oK7Evpp1Fhhdqk7VQizduw1mFk2UtZ94CYZzk7kfb",
  "key43": "xgfj8TsNbNhNdM5L9gsbL8pUTyz4dZ4F2eW58CrLSSeWZPyq94cwbZvTmAnhByLtL7CQBTXyEgxLXZTvvWHjGqu",
  "key44": "5JYxeVUPUCwCXfMXNT4iPiv9cBy6Rk2Ga1fCpFmxkTMqQNv4AaNzFiG3PEPEZdbHea9ckqAK718RrZLxuftfCGWm",
  "key45": "5iPxdiwjyqQqeJs36kePTrrGjfLqKGpkCZypeyATNFSWpF8hoCHpW9P2BMLtcSWgZMaSPyUZZijfwxZchERFnq9o",
  "key46": "4HZmQ14CFm5t28N8Au4ZpDo6Cwn5WFF7w2kvkT93XKLTVzcukcgThLFPYRKjXwSkJHXF5ooDbP3MvC7NYa7GJstw",
  "key47": "43x6kxztcYCpyQzJsMA69Qwn7Q6zvhFTqbWqbCJxoJMsXqnMvcgVqjBPifMYG6YfoxHKrcbbPXjgVzkNt5Saib1t",
  "key48": "4HeiAF2FN3xHhhDwZrurVrJLzb7a1xHU4eTey3Fe9YbRJKjgYRUZ5j2u4BZTCsV37hJk1MxpGTdyT7Dy2WE6cqUy",
  "key49": "2TqqUSw9r5YKDN53T4wUYoxDnAhkAu2BYC33gbrHxYHt6KLvqtahnxbiipQRtJEuzBLT3j1eDhkJ6r1VX3fbJkb"
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
