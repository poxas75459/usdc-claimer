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
    "3xMeDcfAKwkRXnAVFmbPjXd5VZv5YTnT6GkWLxcGJ6i3mHA3tqcgTdS2ULhbVjn6NM12hpWZZ3gwuQWU9ypq2xxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pzxteaLE3gMDmisnf1XLZfNSvkxC2fkg3YLfvuyZDaL3VAcGZvXuKQFmAt1VukF5yqz81XhqzfrPcy5kbRzbxk",
  "key1": "2CuEo34vefaX1MbMh9EDqTLTFgUDJWyFJkivziUAS7g2hTexeatLJdWaNr3boF4TXgCAu6THt2PFnKXrjL9hVXyK",
  "key2": "4LYykRP4WUyaq57BTuSs6Hpsp9V8nsmm5xicEDDQpkzAmc9HWrtMQ7khhoxXePhAqXxHNZ3usr7WAev1AA7GZdC1",
  "key3": "5PCejZKwWUFtF6vJ1XwQcjqNLSNT2GDsNDhK3V6nqMxewNuQMvX4kExMExKepSw39kPMALnCLbCkYED5P91fwuGG",
  "key4": "3b9VcuEBur34hKbVrfCvdXDJLLxpzPDZWhDL3gcHkT32WRbUpxgYzXbdRNFSpjEFBoqU9htQZ4q6sAsztAZFnAhk",
  "key5": "5BkZAkvARGVi28af7KYrrh6ejP4BsQKn97RTSXjZE55xPMKFjjKxAmjLDxQunCKCxZrcGvr58dx9iDhz8cZ8CvJN",
  "key6": "4Pqo8grZD3TF1vsikmZJwBFopsRPpEhJeku8yQNc2NPWq5QuaYscQRpLA1vJJRRf9JEXc3iKSB6yg8Ws3kHRSGRg",
  "key7": "2i8VfvCP9iSyaajhGe3FBoXpcwdkC8RTV6LBeNC38UL4dzV6k8NbtaXnWpnCm5xxQtwkJuHpLG96mx2cP3yo6cxW",
  "key8": "3qqaTuGRnQ6SjTZbvgPUpVo5pegTmwh2vJbU67Z8vVcq234Dohp1inLgzycG4ESfz8QugPa48sKTe6NFuH83Ef4J",
  "key9": "2YMEZarZt3nZGSCBYT1hPPK6Q4aLHwaSZM6pbC5wHdTBoUzb8iX2QqW1LfAH8ZQXWJAFf52c3yzWsKwNPiYyG9TS",
  "key10": "4qKhd3uCBktzmHxoHaEPaQELb79dFU6GDuUjYEzsLtXdKaVoHYFRauF4A9Dwih2X2nwV498hiPyNQ7Xp2pH7qWu9",
  "key11": "3w5TdmwQDheUa3b8aArrgq5GgoweQuyDvCpPUvHqEuKnF2z3wRvVeZUjabMWyjcvcaNAAxqKT9UH9thTLA8KF5BA",
  "key12": "59nT8QN68Xv4YEesUr6hngEdcY3gBY937ft5fMe3KoFNHxj1dLBvACpCHibK1s4711VvthmtVbqrY8H7TGL4TjBS",
  "key13": "2zRXUZtwZvoJCjdT9nGuuL6W1FPAPW8BUQCZdN9kUCu5uXTDkPAyc91ix4jNRbEjJM4DQJdYektvexMBcfgwpLR",
  "key14": "4XzwNb8PQapbwptiHk1d1NvQ7urBYrCKaqGFa55NiMrddAfvReJCSsQtPhRZep52nSYjKiMQKtPo1kWPYxRpBEnA",
  "key15": "3rruuuF81wYU7JD8KDfKaveUNPpDxTwYhifQVGhP7sju5hBgt8ZgWYq867xqJsAPxuiNXmY7QpzLzLcTmUhGiJro",
  "key16": "4R6Wbw5p8V9fCReZaFgv12YaTDBno8NWeMRfxcbfcCPxPdc6u5iWHjxjcEbVSj7LRwjDYnKc4uyskp3gF9DU1m4A",
  "key17": "xNYL58mPVT1L73kw1hhaExzTZcMuhYKEAY2fGD3qCMmgeqVPANsbDvwzWcHS6iisC6TxHw5kWUR2eNnpi3ji4CX",
  "key18": "2bmRMXS7g1Waq2UVqscQPSbvNrYHBN5EzmAtvKaUZ9Lf7rr6C4uS2UytBVVksKfk3vpT3FDKmooSHrieyWVuCofy",
  "key19": "424PoJJQx3rTsibwaWoz8oyKVSuW4to7LwwM1p5tiUoSH4uzTetM9ELxjJj9euh3NsYLrG2DpMYuLW22VeXuXTQg",
  "key20": "RLBdipUpuxYgDnzJDxwmbmy76JH2vNXRXGW89KsmwJFNxbVFEBYPY9LTEjXrA8b4U6GXTHHN7gFG3Hq5Lhd6wS1",
  "key21": "2XbHGqdpG9qTCRuX7yZPLJFLyFWGNaGGwTuNTxrB5j2DNqzZLrFgFrkSx9BAFaNFxGYGnUWPxFmk1yby1fRbaB6z",
  "key22": "2t93PBYtTkmdg7BGJC8zoYU3bTU7wm3qiqBhmoedy2eAWh7DneyLd5i23N7RWKMyPSWLdfqnUYeh3rxMapLEMmy6",
  "key23": "57D4eEpFTPzhJ2t7vQQfRvYm4kEYqtvTzg8C5hj9N9YGpjDBAa5wSEeGkf5G7wtZQk8oAYE8sY1Kw1cZ2JkTcjDN",
  "key24": "5womxjLeXLywD3ADcVymwfE2asdxEkdsrib4eVAw7xZ3L3CTKPTdJsDTdNQuCYSx8n4KYwTSvtuAUPZ1Cyjwckj8",
  "key25": "VkVwKHnz4BXTDzceRURfMu9U9HqkYAmThHCEst1SRt3ufCZCqqkDExaL1DGU8FLnCiEtXjfQmqigeMPt5fpfBhc",
  "key26": "254B8ihR4cDt24QD4XGGUaD52f5JDLxHKqtEs7ziFKfpMEKA5iddQpRW4peU5NNALGN6nxTMByKFy4KXarTgvMJX",
  "key27": "3Gj8rNUsa6mTB72a3u22YTMwEJitVomhonMNhrAnatvwJYonHGeUqiXtYs2E7e3JkpiLaQ84vcn3CgUaa82AJVcK",
  "key28": "DmnLCbNHezYMJ1pMfCjmFTgMi6MN4UCPW141ACWouxurCJzkNPnBu5jP7u162oXqghWVNsmTCgaTs3cxnTX66Ch",
  "key29": "Dy7DBQp228T9qfubCP8jY8GdeZaCPDrTswc93jq2wY28hzp58idaUffUJu8pEKw5433gYbMJKWcuZDa7Xoo6eCE",
  "key30": "H5ZGQbTQhTn76GhhkFKBEwUBwB5v9oLaqTadHKNeuWx1f6JcFymVrAPYM8kcsQRJYBX5ybvHKVLNckQruur7osW",
  "key31": "5AwfNCKdfqXTVYGM5hbjG4vop77b7TbygtdjYSkst7oLYXYLYWARbuLyAA58YQxLQcUpf1aqwavGmrNKZQcbXeEg",
  "key32": "v4SnJNgPvfgK7yfTw7pnuUPpD6m2HTT6TCpxGo8B7oBZebaX4ZPKit8zgu9772a8FFtC9bZY6FboeqpyBX2uYN8",
  "key33": "51dchA7DYGHc7FReXMSjA7RATZjYoaByNQCjB2CqSnjLvYUznfxx4cFHUWDrKoRgru8AhQgfbUMfS33AwT4hFuA9",
  "key34": "2nSkyvokR6x5xozM51U91mUJtGKoj7wCfvQXM5ekK4XL4S764mLXsoVkD2ckyPyqVw5Se791xuRSCBoqYEif6gm1",
  "key35": "2RZn5ec5bv1VQxHdF6pUcFH1nvXVof5pGH1oppkjtkhUaAALAmFAY2DTcozZnzpMk26WBHJNUbphJHQxbBRKiDvd",
  "key36": "3iF22RPW3EVnSY5ESUuAYJhvCD3yTbtPzY65ncHtiPmA9v3cgpK3qg9hFYgn5Xn5YUii2EppTq7CsM4iUgWD7h6A",
  "key37": "3bFTg7ygz25xbw4Yp5u348V7TpqBTaKwcd2Uv7Rp7WGq6dJV3qUcuCP3stYFq8e5JQdY4g7mhVkGZv5XDriLbZyZ",
  "key38": "XJPJaAcDAPrBMTNETCHbp76fnBxhwgFBwGsPfdo9oAFY7Czpjpaj4D6NboCszh8kWDf1R219eVsxL6fp58aCWDj",
  "key39": "32DtovNfsf6kRyh2cmUKNDqz6b2w6F3R32Uz3WTA6GjycmLvk1j44e91zGLJ1et9pkdn92qTLAdAq4BUpMYsxhK7",
  "key40": "5ebM3xhZRNNmHm1zWaD8c2Yh9LvGwVS9uiLUzon75Dbxj5Kn74bc9FsbGKGNKTqgiTvL6mJgNZCp9DJzgsxvs4fR",
  "key41": "2h9kT6LWtA5HUpny7BXYRAPiABzanFpVPFpjga32BHAUs88LiKpRJMNmgXyY8sEBfwF3dAdiJVMdAb3EpDcsCwut",
  "key42": "5VARouAkWha9mDVkxyrXm4pgjwsAGqg7aScca2U4Xi1aQn3sSXTBQCXjDrX6N82gFMHSicXj2H6f5bW6HS3XjnsY",
  "key43": "3uVRaCa4ceQESAuCfFPjd65xMWQ8QXADrB4jmL9ssavnaFovQmghfHNhP7EC7YFdGohvtjzEQCWtEjnoMt1q4zSV",
  "key44": "3QvRG8GeWNh8saSciPPq6BSaoXc4GDLigLFdVoNKdNbvo3YyoGcVnWy468m4qj1zZNvSHy2UW5x2YrD4QBmy9suh",
  "key45": "3GPh3MDnKWBxkxHLcbjz5e8z9H2sWcaERrr2wZtjk25LEt6oaS3UvcWgaV4UVrcwkme3Qqoszvn1ARqtUg3ZrGCy",
  "key46": "3dfgDXtQkGi9zm31DyaLfiwfNCGSPWDT6KEfztHvQMJxozhbyvFr9BMsz2mgKyL8oBTnaCCVaE3MAP3ghRWqb6RS",
  "key47": "5S49yodkrpE7csjv6nUAFWiVJ9SpkLUseyptid5kRbgSnKx8j6cw19dUwgzQoYULibNdTqrFPuxjWeppGpzptmz6"
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
