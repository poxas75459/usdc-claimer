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
    "S41gfkmVCkRfZLeS36SHHztcpkr2TfvaCGJrVYsJr4bWYLoSzFvrnC5cGS9zzEkfb8y4x9efM7ASXQnqc5WXyLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WFdMM5PvavG97VNgDgQ2KSvtfDGB2nB21N7PmmwHkmXy83mix88m1AbyWyhkUqw68piCo62xAsPDB6ebvt1vKFy",
  "key1": "5WV4JMSweDEkEcggBgFs6RBNd6nqGPZAgZuuBDViyL69puJ6nFbN1G1YVi9JfYUTH7rMmWgMFcnLeSPeUMxjETd7",
  "key2": "2zWimGgU3AcbZWP6tCcTCyGmF7S7szkPy2HqSiahtDAAyKX4WLqBGCognTv5WGuBGv2jt2Fizy6upATeS6jC76yG",
  "key3": "bvZsGxdEGSvtxkm3dz8hfv5UmGRQGAGjUHw78zoaBqJcbyt7YzM8M7d6SDpN3A6boUf1LQcouD4VUBALmVVdZWr",
  "key4": "3Kkk221u68MtoxVXeCryVs3Y8xL5JwQcpDKbjhPTfnpz2PiPPYNjW33Vff5uAibmT7Wkfm2PUcGWUwLbEvtpt92m",
  "key5": "3RVvaSLCDHCP3JzdBscQRgZhYvZqsj1E18fJpEmTfBHCGGoQ7zwL2ecV3YNae13tzYSzsaZh9PQ49C69KPqSUB4A",
  "key6": "2MPvEbUhrvPZDXL13XuoYm3StfNrjC84X6wpcGxasYvRcALnwbuCdMu5jSk1Lwdq7ng4A2yAvbv4PC7kB6BNbmRv",
  "key7": "2TCGx4cd9pi84fWNBimXqY41dYqMCMGp4UEMLaGJTc6hTompcsDguBTUxrxziADM1J7XQTYUYssWP11jH8A6A4tk",
  "key8": "3UhQoBYWdQCfjsCm9Grwpf5gXoEu9htHWU711rfzXon5gpkVr5yc93pf9cPTSFpAzeHAs4PCG5chnnqhNKGU9vNs",
  "key9": "2i1pY4JCjZRsyy3w4qkux6oKCNNqWyUPZrGn65UvBvzJZZzMQ4k1pHWAPRpeVkPpFnagYMy6J1RHU3ZLqKSXhcLu",
  "key10": "2YVqS8uXSi6vkGfba62NWap666h9MY1tPTXedoqegaqvv8HxMg5HsED83w7LL9gECYjQByjdfF3DpVGiBtLBNtus",
  "key11": "3pxJhRF7cBBrKWbLSaehsfe9ih951hGnsobX7fVW9XhgfJhF7DVjW42sDjJGVTFmTKgGLvbVCTXMPxdQ7brdfSYp",
  "key12": "4n1tpeiYiStPsuCYUCFLvE8qPD7q3yyd9tt8zMC3gJGuE4CjL4tvkHFQCgb4hVTTB71kfUYkNwFMjgfWWPGbJhQu",
  "key13": "u7LA1jFPvWtdxeNBi7M1VQCHGP6gNtUwSMK3uta34ZK1A8BDEiArrw4XYzJWLWsRrR3Rs1chKsRCzzd2HxeViW3",
  "key14": "5wuv1cfLeJkjPTU1wE7Y5g4VgdWUCAwn27KtDk92UyLTXgiQg2QeEKTESQchvpffQZR1H8GYriZzFGZch5HjZFiC",
  "key15": "4ERjWEvL1EdSmLd7Ku7siRpBXxv9JjkAezyk9QRUZCA9pjfyCsSQEeWbkUtseFaagspnbB2hx3LiVgkwjSeBUkQ5",
  "key16": "5xXeWgfmARbGCkgqBMabQ7LwjgcqThJzg45wb8wnFs7qAN8zbDV75sMv6jGtvT3KZUh7acGnzRtBv6UbkwwgsYMf",
  "key17": "r8aaQd1WC7qYFgDXnQ3cNfZ6xXDXQhgA1z4DbgJRjBLm6v8s1dMb6AdHigG4oGnz4HS8goTrNHTyXnoq9tvScT2",
  "key18": "53JG17v36HVNtF1x1HYhRWCnUMzD2CaPWaK5MCsAxgxxBwg4QnVZHZ2L6rVcXtGAxxFm7xYNNgNJW335e5SDNYf",
  "key19": "3GMa5FBXpB6Zid3BL2zGYjxGnJNkv4jqY1FmyMNAbFReHWo2YCQJnirCpBA3pjLpLez42wTUnSn36hrTZjFJsZG8",
  "key20": "4La7gZ6VasbYfWFpzPatPKNsyKARGJ8MUHGUMmWH6KZxGZfcYeGK6BjyvK6hRVRYPVDhh97xs59YLQpLPUpTQmcY",
  "key21": "21oNZaXsJEMhEkDYzhdZyGdKfBcdHUTbutVykUAwM6Z9GYNkoUYAMDJn4m67dvqvt99jisc366kp9JxpJzQi5WYP",
  "key22": "VkMkJKURZKvCqZhcCKuBmoWQye2FcakM8WSqYvntED3QXtJX8B6GrQgdL8b6qdKGDBRguAvGSpxX8bjMddPwcKC",
  "key23": "4PRkqMjE5usZQDqyfic5cTyxE3Wd77dr2umiA93BMiRDCS7gdkMBEtKBMQ49PEQbqeXzCQaxcsmjvBsnFENQDpcW",
  "key24": "V1mZgJHtRATDT849cx85GjgBJwrkRApLD9WYQTbrjaHtSF4UQNydhgUbyx3DWHVPjMESGPwU8z47YexhmjoXoqb",
  "key25": "pE5A1ryHfSG293ARN3wL6uNDnD9ePPh3G3RtGiLeX1o26rfFNtg8SNxYDWx6aVxWTCLBo9q7KBfx9v4KYY2sha5",
  "key26": "UxyrXuS9dcK7uBvaRTnkpa3wtFhEXF24cfkJ2R2JZFuajYR9o5kCJzf17T7p8ocJvBviQF1MS77UyVjJDkzusHw",
  "key27": "536bweAokmduwGKVipGmvUp5zQU6xkqLjQc24peZKMQc7nEnKg8c2eQhqMPdS8hUPishLzVeG5DvLE5uZCu9AEbn",
  "key28": "3vwTMUUDwSEEKgA4icFpSFwPhWmAUiVpPnUHjBtMcu6yV7zsMJK91MN7fqYfXGm7tMDNv39wpfnuzcqGNt2ypewV",
  "key29": "4VA1zaTWTg3waAznxuRXBYLouUDD7JmCL2KoS8QxzLzJqQGHG3ETJKSHHoCtcrb2ZNvVYn6WuELkq3bnzQiZxDVo",
  "key30": "5cgqfb3TxPAyfoWAQTxjszyjDht5b4ME4NGsQfwKiGqF1EEDoxgbGzpeCdgdR9di8fxh9VAEFBEPbRTHcfRKwpCC",
  "key31": "3qHiF2VfoDB4t15f8UfGqYmYFCFWw4PTQac4PukcZkkVXjvnN2Eu7cwdT3impe51k2DBUzajyb9PzayLgckJPLFG",
  "key32": "5WJaS4B6HLbBSZXQU5XcnVCDc1G2qr7SPkxhKvWNTGVkkBLFTDJLQihS5Fw8jkyiS6JHd4EyMTzLyFvPyRXjs97p",
  "key33": "39ND4Yt5gGu4UihiPfVZSaKXrBpqoTc2rtoStSgAhgTNvgKmASh3j7R29Lm6LofrfDebJaMLrfRmK8iY7f4Q14dd",
  "key34": "b3tTy363UyMBgiwSGQLA71bFiq5X6xWa825ZUDsPyDKSMcZJrAcWUnPPFo6eE3zG2574SfQiLcT7yzBjGwNRV2A",
  "key35": "cbrWJ1g6cgUCoQCZ2hZrZ1k2mR1tmAcZs7W3nLC4Z3FG4SXFfkYnmftETYa73sPBoVYNq2MWC7ijRhr3TNDPerV",
  "key36": "5qetJExKgCC2TXRVAHYJB9bSwZhTA7vmcDT3F7XHV3T9j7PyMvBEBqECKkBFSSQ1tXibkPADRe9x36wTMGSTAX24",
  "key37": "23gnA6XpWGtdGgXL8vCEWbMrVMwKr66fEX4GhtbYzZHV96c1iQ94KthTyHQGc7dp91237Ez4nF44XKBV7hq9sjZA",
  "key38": "2PLdD3T4KBGGQVukg4w1YR7rYe2c8w1AEyw6c38XVWZ7T6dnp7RQAAoU5cx2wmuCJafwkfBgrrbRdC9bw7qryofd",
  "key39": "mFm1F8jw4Cugzs95UUUwuf6FuWQwLogDfxbDd4QYzNV78usteRZjFnCEjj3BSnANDhCQuFPXfea6spaor4vQebK"
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
