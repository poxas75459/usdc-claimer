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
    "5b2UvL3VCmhpuikoBxRtb1dZRpfyXEJN8VfTDAgFpkLMtkku27BesZdVo7EB9BAkZUPyEfzt93G5kfDQBwPxALST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9aCd9S9dhrz8t8aEVVX9UkXTcFuLHmDoAVuh8M63Ywgg66fDW2EvhYfVZ7QS97q1geP6fkR5GgE69KySx5WkZd",
  "key1": "5q1QwbLRCRuqawh7Ni4AvSB1HrerVekYzPQJs4kJx81YX3pagV5iU1UPFhdE2goD6j3c2desrWN5ufJUSYYY5qbv",
  "key2": "2T4YyfAVYVe3qjjnLADDUcQS5b6HUMTRGw2PUrZjZHgAZrgMSchkbshbdXYDiMg3Euiryi2sgC1ibSSE9bJkySW9",
  "key3": "NteiVCrM6kuTbYSjgWA5mjkVbqdYPvABzmW6QXPVx1z1hcigyfsvAFY6armKf3ssxRBmD1FyRRLyRbsBmXmfb1s",
  "key4": "49JHtNWLZPDNXah3HNKdwu7wAQaVzXRBfkkdGnNH6FiizZCgRKejzm2kRjznMbpmJUVAmTvW44EEAj8G5zFNzX9z",
  "key5": "5Zx4DCg9GmSAjgqbXCU6X2ZPbpwT7FR8Cm6UdvhKpJS8EWX12zxMHbDsiFo5FZQrCtwGph6GyUV3QUt29qLpHDNj",
  "key6": "5CqVf899ohkiuHNKYjkzWvjYDJzR1YrxfyALSShUsUBRnjTYvXiJfYkDzmX5rBD6swiRCUEkJabGBVy5i5jR3PAX",
  "key7": "67VHQRTd6k2d8ESFAVr7FYTA556rfKBQR2wiLHmbEHb29uUS2zNceChvndAUQH66D4fDdEEwRWrrB4hssXzw1aUh",
  "key8": "4CfLUDzR9i7aCHLdR8DDBWZiFzF8XDZYpdYCfqHRVV3iC2rms8iFNbqgLcqJfRnuYAQkUn4MooUFngNuTD7kvgAk",
  "key9": "g4ro4JwczbsRu4egCGXDCfcpzGQcDGp2sZVYkKvL23paHXVPmxYNHTStjTMShURbFBiPnHdyz5DFT7BMaf6xhev",
  "key10": "3NnR456hDRL9KJLJDXPWUYBkMKAsXSVbDhHCRsnwUwjEhVKcYCnx1rtP7rDj7R18GmeXgMkwZRTJg4fucSTwqXip",
  "key11": "52APnT7R76oaK8XCKwUvT3QRo9iFhcXGeGkogCkBjdqLkXawUs7pWkVT8AiqFPPQZFxKvmUzAHVTYGhCvKp7X2gs",
  "key12": "3YRRodR8eqLUM8q8HR97eR44NwZoTLt1ChBrSY4VTkcLch5pSRd555YXg54JKQeaPni8oXwW6gwFyixFYCjN78ti",
  "key13": "4EZdBia9YFgPryYtaPxpSfB1ujmz2BkRoCnNTgTHUzmStu73nt6Xz4ss18cWUgCruAs53bPd6vFhHpfUtTqGGA6D",
  "key14": "CB9ZBEwCkZbJ1LZvtgzTigXsSGwsKLJetGoEvvBya9J5dQ6F2zS4PVtz19UDpu44SbcrD2E3L4ghegamTYSymZx",
  "key15": "5ErPvgzCVsT7fPBzvaGfD1VR8mskjPPWY9aged6gSkFkRcnkubufWQGt4Yir21qzPDyi3ttFqJTmKVBHestTuGDG",
  "key16": "36noCsmFVp6zBPJ6m9BmuVyc5dX8e9xEHyQoe5z9WpxcwDn2VdekU3fztbfp3B8gMYMVyhW8SQTH232Vr8npu1W6",
  "key17": "Amwe9JHBcWtekdxMQBHNw3xtn89KwyLwPW1ZsLX1PLXAZ9cFV3TeGXB19qTPUfErSamMQjmG9Kr5hmxs61aG5Zr",
  "key18": "54dYTig5zv3keW9VfwWFQYpdiNm6VMSDMxC3JiRJE9Su7ckKvSw5z3u4gtSQMEj9b3RxcyzFwCNMuDdtozpCWEbH",
  "key19": "3NWjLSqjHxTgMVJVfLNB2oUWmZ2vGCMSLtNhWaQsbAavRSkzkTu5KjgA8VLhLtxJGui1VEijguGigqi8yUaEsM8o",
  "key20": "nKgoBLDBxASrEPhDXvsoJNfvHhwvrKPxXBiqZ9TofvbUWzGfBiWDbQT9EM8UtsPyXdBbD7dwJiHJAv8zqhAro4f",
  "key21": "3GeincFyqR6Uq2wUt3mn6you5qzMts5asj2tV2sddzMzZiBfQX659mew1yao5sZ5diDsc7t2DpUDbQCqqjU2qdak",
  "key22": "2tYyR6ByHAydKbaLCBPQ7LzCgjCUjhHnUbEStdzSF3gZiYoH2aXcLPyDbntZdRcmxGB4rWvSwCoW2JmzYyYBgxmR",
  "key23": "46DjnGD9zD3VDvMZWo7UtmCyBkkfX3PMfZSZhfFJiaRGqtR3K4AN1cZAK4PDNf4C76w1bUoJMrutbQrHhT8XTGJQ",
  "key24": "2AGz9SsTHoQkZXDsWopmySqBwE7rcNcHpgxTsQadFPd5M3RFd3YTogag97YrCXGokZ3Gwycr4hpBfAzorgGkVrHZ",
  "key25": "d7hoF9D5UqpM5xPG59qQVQZYnngipnTw5jBc4sy9ZK4N3mMTQijJbuVvr8Y9ZfKJZjFqqtVGbf4td1MCt718TUa",
  "key26": "4TFZzALPpE4Fw5zsFH7ALZ1XL1nsjNFez152guv5rcNJY1UA8v738U9wE6D7r9d9gnTvGhaqwsNkC5a5X4T2NgMf",
  "key27": "45cbFguJKSniFtoHiBJyoqkXTAztN8j515M73e8TcmBfSvDti9ivrnN4pMkH6Bd98hRYDwuTFcJSpTDfcf8h1AuZ",
  "key28": "36rbWc7Lr66anpSECnmeeNPYFxXGsk9NuLhC5xLB9nSZ112YJDKMYNKZZVzJXeLqLQXah1mPPYBHBXk47WUqeSop",
  "key29": "5rWR687zUqniaAEB1mD6UMax6NSwK3uDu3gq5NgUE6jCoGdFnb53wM3ndexL4xvxgeofiq6itRpfwNiA9uRqwfqV",
  "key30": "4mgjvhygoSQ1JkkekJZNY4SS86zLib63ogkg7aLGTGcjEovW7eXvbXUSo9s659wkkExuqQYpJSq62V8AVViZ2pXC",
  "key31": "4PjgUCgQgK1i4V2c7tshAU4t6ebojZNf9wEHUJPuoRf5Zj37uTPpyZWnDevCG7JFG4dxeRE5TKhPToRiYEVBcaCe",
  "key32": "5LKKgUnQ3Psj5K46rNtXr963ZgeFMV4ScFDe3rRtHz38PFHSpYcv8CwLa9ay9TceqofuyELJ4JDK4ph6gELkGbGq",
  "key33": "2Efp9wMCQWxD5TVWM1zZuFzgZwSX96sLpe3zwTtMVsznUJUNzMwo2BrtsA5q3xjegVUfPgACjyXPJ15WLevbrLmp",
  "key34": "AvfCCWEb1uNwC2nMmeg5mFJNgFMDbnWWHAJantKXQZEuymBCGeUFRjrRzhZkDiC6gkkbazspAziw5ggweJQKfm3",
  "key35": "4x4xr77Tzdaw6SR6YdyfL9sxBXycavgQcSrTrFjHTzxovBvzycRyD8pqKtbkYGtaSXDWeakrpGi749zxLG6nNu9v",
  "key36": "2jPivHr3vKr7BRARqSeDCYi4t3y9kuZ3XFh8CTyN84qgjrDZjmwpTzNHXGvhxEjUPq5QSXKEnpavqHWxDWnJWoFw"
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
