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
    "4MpjScpnBsfuQU5dVqUe9pTQDiqbG4LUJPRj726oz112XVZ5D1cZkDqiTbmwnzzsjTTjMJxGoTd2uE4pFCCGaecA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUJsrDwJGVT2gzqYfTSdZtRT1Ngve5K78pstF1DfhxRTH8Whf1r2ko5CdPmKgzRSVAzTLKVnQseE8Tf5ovb3bf1",
  "key1": "3nA6Yn6nvnXNXCxYaRgJs2xZkN8qGkU4EACeEneeUF77CckEvEzN2NkQkeQGeyj6NQViBvNzDGctgr2aoWf8R4Tj",
  "key2": "idjqAscwQh2Jinoo6m4BUw3T4rGyQF2gxuZEt59hAfcTTKZMymqduf4zQ7Pz7vzkq1LnGjzQgHNLyws1jPF3ocU",
  "key3": "5Q57xkVhKNq3Zxu2MNxcT1ET9hTT3cP33Jxkwh5N9G9n3SWLygy4JoLLo82KMXrUtRm4zktuuBvFkZHRrmkySTtj",
  "key4": "pkwrCxYZzdQTnLspVyVeEJewmpYQkHCkpvJspcnaGdh8ob3ZBg43YLVJtrJe7JPJKP7H2tDr1XWGVVCoQUGPzN2",
  "key5": "5wgyCYZSGvH7x6gQx5P73ybQaTYiXzSGAHyvJAYj7M3KeSFE8GXRL55WA2EaSZfEUQobiKedVCSN1fMkvKAVT7bs",
  "key6": "3jP6dELf7JVBokgNxw7BYWJsbi8MjDuhmzEz2UJUL6dXCv5zZUtbmBaeAYGtu34WkJ6Mb2BkC7VEmPvQ7PpuKc8Y",
  "key7": "3j8TBKmKoWKvD1vk4KuUnjbSjpaBoPLQysA1YFj9kfcBkyaKxkfU2XzPc2rNx1zBubEoyHB1PyAmnDuUX5kBcJSu",
  "key8": "2hGcsbZv66TFoDpGKoVwKNogw7hJvJENdbmx4MUp8CXop9op56SnQzkk5vifNV1ynMJQrin5zuAoqi69TYn5DNJN",
  "key9": "1NwZrA2r1HQsYsiVDU7U4XhQQw5PpCVBo3avbct2o26tsY7kSZ4VNaEZb1YBT8NBxL6wiUBo2tvkiPEWAmpeube",
  "key10": "22isECxSSbRchQhjcxoD7DSbEqQiwMeA3WJFsrpe7PF62RQnkSLtVWbh2KwZTZapzBNGkMVLX5J5AoASRJJHJBHd",
  "key11": "5W6oahdMtneWrusDdKpf6YgXCrJVCvxdvBa8KKkAceBzFAhv82z4T1QereJVcFTrfBHFJkXRpYR8hLwhY9JVxst8",
  "key12": "3KMraGqqLemgA97Dg1hG8xK4xpo338oofaub7xwkbXzk7y6K9jiakzgUcZYwpCKB3oWxZD6v5pZkFQXbj2bBzP1B",
  "key13": "3Tn6rUmHsN81soiiQRcJA2x3suc22quE7BaCpqkwMmtagMUGpfqeF3o76ZYRTrodQAkUiHp63ToZ4sWQRsd4TUJM",
  "key14": "35AWrCBc2JFmHMGkfkSkfsv6KrhVAgCX1w15T3t9xqDecaKKHz19M1FnbSddmvto9MJSBacsRUuUqJkX2PCqhMvA",
  "key15": "4gdqnXRaDGCLeVf7NQZ8gY45Lj5A5e1xqr4g9ibmPgitC1UHLW5wSNgcxCnpsi2qcUzh6ue2ENMAund6zu96LqYw",
  "key16": "2D5tUt1iNY6DwJJEorRgnvZgY1YC5BFSasYnZ4oXWL4G1t71ATPhDFKBKEux4c1rZ4GVEYW3tatBikhhKsQyAksq",
  "key17": "35NmGogdeHNagzHPHjcgGiqxqQaSkWym61MrCDMT1hZcss7cN4vERWWjTmedXz8m3US5mrHCMDtbAuu6kwdMY1Ud",
  "key18": "2X87n3vqpaVVQ9HkCtJft1UZwLsLQniRXspMSutUNpuq2qwiSjLfABpDa7icY1kvvKaRVVqukQ32b15xDb5jXdUj",
  "key19": "4KpJ8RE1kUBmaM7mwqEDsGstWqiKhJdg7Xdtg9q51ruFUkXE9ck9EiXJvQN449oZZHrTj7pxpM4CRUFFTVQFtq66",
  "key20": "315VGbJdjKwmYa1Gitbu2c4sb7ABzZhBzbhrkZQwjumL8uSBw1DSLk7BD85V3yDkL1Gzo6AYpDiZRtGfWnxtWbS1",
  "key21": "2KLUh2mju6hqe7MiAMwre9EaMM5koN5kwgeuCQHECp8nk7tjKWsQmjNiZiEYdbEPhFhSZZk9mFozXYePTCwJRGJt",
  "key22": "3LawWHX7DRkAQwiqekPJ3zzkdFbQK5FfshdUfJfQASQ2nb58zBynpdtMJb9owKZDn2KiiZG2RsehL7BiiSYvpBbZ",
  "key23": "3JWYck7rV1pg5eahqsZWY7oiKUsJ4zG5wgfDsSsJjbbTpHbR1ui63bvLxekaWYHShjaRAWCxRt7g1Hqj4PBWrX37",
  "key24": "3fiNUSFZ3HoYhHh4uLi34DkiGV82CWY6Hc1vWvyMyEuiMpr7VT6w9KDTz5RDmcAA3WAF7Gm3pCq7x76ohnuPtdUq",
  "key25": "63HuVZDVr43QZX8x6fapLvUaQK4wWva1WHJtzonoTx6CVb8uP7JjuwdjapbJoE5j1LyRbax1BW9B9XjbfTBTprGn",
  "key26": "4om86FyPqyXeTSj2CcQnZBznPcdsnBxjif3vffouc9rJ7K288F1GHeGZxNVQDNKm4maWQCiafED5us7EWTxSnQUj",
  "key27": "3SwHFSRcEc1irKmgM6f1FTzKAGcdezYXJKxx3mbAiZ6Jy4L4rScadxiRmkv6vkqBoaMtJ1Z8Sfsp56JLZ5fJAyGV",
  "key28": "5RHdvLGRhdaLT4yp9HyKDb9v34v9JAcVTZYED2MTYQcgUqCMTTWRggM3sJsJS586QBsK5QZJrqW9vJYkoWr5bNaw",
  "key29": "2rrSdXd9ga2aqQo5qBHJ8B9GazKgunmZb9xAGZ6xCMAcddEPaVnvM5zcBcAa2bb4FDQfAu9kGrUocRq5jRZE5BJS",
  "key30": "5hQpTL9tEBFpHUddoUqaBiRU1K3BbsPpbkFr18vBDQ3vbxuwxUNdr9w1MviSXeHGLLPTGf8ycSqvvHBqsSeoARzm",
  "key31": "QkaafCunV2K2TS7dnoQswkoM5ECbWUdDEgbTDHYLU3Pfucyk4ymd6oh8FdoST7wXUZe3LjqAzDSJJ2csP9vZzWb",
  "key32": "48gRMzxLVCFBU6V2eMqym12V1kJctaCX3K2AgffqtRh1ACuvjqVW8UsxDxinrVQFHqfXbQ7257aMBYsjufs7jL3i",
  "key33": "uw13m5MeBrC2zp2Trbn6YPqf7nnUiMeYitbGvJE2zqJYmPhcwyUVzvVU6jF8g2wXixMaZgQGnGFf9TZuNuqbrRt",
  "key34": "DvkuZjBKhCDVAjWXu5dDgzGs9RCYjfYMC6whYJA6dwS2EMveq2wMrz9deTsAJpvWomjwBLSrsSUrVefC9Pjx97B",
  "key35": "5MmSJZM3ntyYnpcbDSTv4iTLbnAA9ziX88pXyApJyqet2ycJor6x2w2AnyQQtf3Yp85k7ugKDhokHauDGsTtUEaM",
  "key36": "5SDAmutj3NhyCweWDJRKHbfUgS2f7RnZgRo9xwy6HLE7U1TTKV7KrUcm5Cy6fFWVLpGZmDEWjNm4xkU1fXspXf1k",
  "key37": "hsYW6zPwuaU5ACKzQ9B9UHNu55bKdF2CxyWMALgWJ29E1YfKR3LrykskEktnbbamje1ZUWMWLAe1sEjukGTCx3Z",
  "key38": "uiW3CWT8ogMiydGjXtQkN8aucjzAkPyML8PfWY6z7zmEGEiPSrxATib67PYLyYwhY5Xs2XovuFoxGuL8dxTnqY6",
  "key39": "iCp1CgzW2qFq6F1geqpRvYKKEViAMPTbGrmg1n9mzhHVNLMoUrX9HskTerBwQC3p7ENX94dXjNcqM24UyWPg9Ra"
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
