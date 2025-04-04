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
    "5yA2T9qXHJVe2AqtFuSiqz8LuamvGeTjmUK71DzDzRVG28SnF2T4VjmLfWtLwWwq1t62wDqiUd2V6rcmn3PcTRKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YrNx5fBdB6Kfi5uSpCxs1HUzvb8F7pTdrtQM5kLPsSQ58JUWPks2BFLLyuy7UQt9QwSX5J5gyZZ1pZvWkKf1ior",
  "key1": "2TMRtLLRjDKw2wyyyFDsk7EZg6GoQ78FddFjfDtAiSaj7JGzgh1zrsBWsxHUajaSwqXEdL92mwEwVjwYpSWo5Vo4",
  "key2": "2cSdb56cKE55UoTbAcqFodGp8o4SMtjWXrxaSbZca6DEW23ea3tRvFsAgDAsjo5k1MjBNDg7aWc9TmDccdV2xRDS",
  "key3": "5PnAhDL2WS82AFxagG3fcdGFjCrcnHxhfU7m4UULmgT5QgLP5nqrTzmnVk2iJrG3pkWdadw5Sb9LninFfgnKtuHb",
  "key4": "3mouQoMJwGjW18DJABjQFBknHF6xknPuAZ7BbVCFfLPAbr4D78Qab2VBvErSBrBhVJujdhBMZomxWhBygbjB7C23",
  "key5": "5BUmzB4ai6yuCHKiqRv7qiYWEbB2cvt82L1rbbD773yzVxEvafLEUHN2fcki8uX9vovJ5TqHFcMi5xtZhSMA3cDh",
  "key6": "5FzpAjqiygpuLuLi1qrN37KMZVjje97qcaiKSZzAPnr6U9S5rKuv4DJmDn4vJcrz729vRg4Dvm5cDiX9FSVoTs4J",
  "key7": "3UBiXfPSsQS23w5TbqX99A4MmcaMmVnvARcVx1dacMd4YDbY2tFUDdnqy67oSaTN4AdN9PQZ9uTH6E5upDvLfKFQ",
  "key8": "4BQka3fMYTDTUMYvMvHon11npCj9xt8WNaGjJuWm1S5yNa7jDcTgfvz9aFzszTUMZZRmszR5MNEAdYroB8uT92Jr",
  "key9": "3zMcqXUC2bpNBs2vwbx4LihSHz34o8FGYTpAU3417JY8kip3RgRmooghABJLZQDMARoedoJjwC1CXErbPd1euUiX",
  "key10": "LHcRZcUysqy1tTK9xGJFLgsA8JWRuv9xPH2rn9LCKo11CEkhXhZeaV3JZypGrGy5TwUts6ZouaNQmfKZKA47C4g",
  "key11": "3yCA1Vr23iY1bbXEdL8YBkifBBuDYnru6QWitBgHd4h8wxznp1by3P2S89m1EijeyHQXzczwtsFMmTAGbWJdsJJn",
  "key12": "4diu85JYNkbF6dKZdb3ZQ8NecWh26BhHimHCNKJmAHGm3FqC1ijAeXcckDsynY5HWYDHGXhN4BpJaNo3SBUaKqc3",
  "key13": "3yasoxPhCPP3pkiFo8M2eEo74ewVzJWywHaz5mtejnnEwJWdebGdhY5899WETB2jEVrpZLpDHFkFZxFL8WbJgB4s",
  "key14": "2v3n8TKYJ8tFziu3Z97RCBzct7peyPKxe21MH6r2gDrWW39Jnhow7zCdLV6csgHjPQoPpVYTRowFiJbm7jY68TVt",
  "key15": "4huxVYNDwnrUAQoXDfPv7rJKwuumYGUu5wpMJqrLKopu4CFda4mN7VJuZoQmuF3erGnETuXCfPkVKv2h5KWsYt6M",
  "key16": "3WSt3KKqKqk17fioq1HbAqBH86Pmjoc7AgHyhyaMcu5u3ZYiPb5RGghvATofwvQo68j4VQ5zmqhVFvJz8S5dCcnH",
  "key17": "e4oxTQCRxaxmjkbYoQLDAaDi8H7j4rj269vR5hyVw51okivsNdER2qKLkZ3MQ2pQcBo4jqvZcgN8sjEgsN4C3ZZ",
  "key18": "4xUnUrsp7jcPv22aErpRZkCxvgx2fqxdhLkMRUSCjsXx2ALhQ4DGTGtugiK4euM8bWXLbR3Njg9Jn7S6HcetRGn2",
  "key19": "2AnvYsNoePGga6rvRUMRwAcatEGPwwF2YNM9wgK6ZVArq4cqHZ2n1LF9jCs62WdXahNTdXGAUSjadPeUnjjazcVT",
  "key20": "rSVzZu2RHuqvQmDfsAvA1PX89f3nRHCUBjdvWTNv3tvjitSzmMVRWH5fCjaV7XayFh1Aoy562E7rAys16uYkpcU",
  "key21": "5i23xwnDCnFjMohLburf9Vsc8tPMLGn6o8gQWappEbHqTdax1TCs3grCDzBLDX36bz9c4UPAgHxZANx3QEgGgCwC",
  "key22": "3G3cv2g9yTrV5Pe9FJ2ivjbMqLTK4zfp5t1TxGnMAtAKdcUivKu1PKVRJhXqWUNdaLCcKJrXFuY2KaE3rCtb9QAe",
  "key23": "xFcFqUW9t4s4L8Utsu1eNExAVoxWi1Ysrcxy4GRhGjqddvLgL41pasHkjxgNiQRxJM3Nam4tWCekfCKEC161EAf",
  "key24": "3nwd6Ubug3wAxGNknk7rptbQQxWFodXFgvVsQJSJn58ahxK8qt8PxX8BbvhvC6sSXMQHiKgsD2UEry3Qe9Tv8U16",
  "key25": "3kG1SURiLEKBrF9D2sx2HaZuPnLoRP8AyiHQh8xttnYYa8t2P86YhKdr69VN3UbfTd5zE4DZng7qngVixrwHRtAu",
  "key26": "5m8zgPpJgz2ykxQx371DXQZHtpbiwTPaTAKtBmjnq8sTPEAhFDxunSSMGY4Mb53sXmNcxYzNgj3cgwAaTwX658pM",
  "key27": "27So6TztDzsghcoPtCkUpW4KM6mDt7Fet7WSHj74C7kuWKbEbxUaUQFpdoTApxJStYb8wKK5SXchaZ5psGKSGXNk",
  "key28": "RaRfcGV7LWP7L7uP1vdrxSR7w2KpjGc6MT1Ys3VukHVQg6jZkZij4HCGAdxn2rVBbWtkeeecTbbaoA7x8LAUjVQ",
  "key29": "ipvsQM4pxzYA5guNySwbwCe7ByYr3vPLPw2qzw9v48NsqkP7icN9jgNPqXu7gce13UjDSc2txj2eztkCtf5vGRt",
  "key30": "5Pj5Nt9xtjBMZrLjV3V7UA6X2Q6FjxP1DqwVSnHfN9QG5JdZSg9RraNjsYEiwj1Mc57Bvvb6bQDVFxgPnXMSGoXS",
  "key31": "3KwwFrpsMYEPubhFegiJEDNaD7tYDfqXCGfs5tNa8E1QSvqDA2sj2RMvfnAvsSCE4mXwpxUyM3q6u1aYt69NV7fC",
  "key32": "3ZaMJvw5MWfY3qqGuTDx8GRkW24MjTj9ifvx3EjN4B16iUcaCGuKaJgzXBxLdzf9DgJswPPCXdUyqX2xoofvo7sL",
  "key33": "kqunrRNyhKpNDbNLFMZcp8kd4nAefkVdz1ysGwDL9UbeXw7Bzk3SeLDSuWQT6apnr8q41i7NXXXYkEAJA1GJb23",
  "key34": "3GVyVRTWfeiqBPUWNcKbdqK8szRxUQzRjd1gMpr46ZXmoKBWC96UkUuyFPrfJ4xovgWsipqQnwmFy3iEbHQAcgLf",
  "key35": "k6hRQkLpbMfbeQozDPCfzCCkchG2236FfzF6hiemrqWddXVLRez6sRrSY3SYe3N1qySxsvjSVwizdj8BATUk9sX",
  "key36": "4ot7bnib28cB5qXobsxTPgiqxZcWQ5vvrFA3eqyc6NzWCvrHLZcnSnzAA9mc2xGNNucRPCmKvFjq2Nz2DmiF8Hnb",
  "key37": "4mzZQe7PyqPRQBKRihTGRHk9mHJKe4dCbTF88Hsrzi5YAzxZSh9ebhami3r8v4MxXY3Copp7HbEg8hMdruhYEKeS",
  "key38": "gLazrdiKtXvY3peGs2KXEGiMbD5rCAKcxdWHCgCVcYLn4iPYbvyTSR3bSbKfk5CHPpE6nqrrdidp32TPdoSkXLK",
  "key39": "4n61aS3CKQ9UBcTkpCZ6LzKeKPWmf18TTHyZz1Fc9VkPK6jPp9fyEMK9Eto5mDNvMxweYDm6JvJwg8FjDgB1HgSm",
  "key40": "krFDv4WeCKEJHaNECMyqwjo6LSPyuUnpdWJiXSApmUQBPDtQ4mmJuHe8KfUg5Nyu8NoG8xkrrPLQXCPVas6dpz8"
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
