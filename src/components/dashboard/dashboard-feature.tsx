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
    "4Aa59HFevFpLRcHrEkdW6C9NMHhXDt9iFBToEP6LqAdALs4UscZ8Xw25R8gsdgfuaaxcUCc7FUEARwGpHA3kGzWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYC6mBv4omfPf5j4UgZRt5sHxJxmA2bRohd6BbKs9Pg2YT83Mim1HZAtbzpi47gApPzbJ4dR1HEfdxqfEon3aPx",
  "key1": "652nM4hYHzf9nsRzCwwuUiSdQVokJScPXUomdBmEvkdfo7X4vegKNqoLZFLZ63qijti1xrjEjKK1pQXMLwLeybqT",
  "key2": "8RMbsUBj7UqdkTaCi6rpnBrL2jgqdrg75RuvVQyLJxrt3SnqozFp1B61kBQBKxQB3n9Z311mL5zMnhSxYVxnw17",
  "key3": "Ma11BjvqdVcj41ieNKtf7KU19Qk6CPozXMydSzAw9dkpjEKbSQntouVQDnSBi5Crnh6StTu7K32gVfiPSVXSNa9",
  "key4": "3tazj5UL7mM4nzVChzXpYXNXhJL91UUkERweEkD7sL6HXd6j16QX3jvFvR9nY2jVmBT5kD9KJmgde5LP1fJDq3oM",
  "key5": "cQyW7kVM6f8JMSBsUAjBU5dBLojjHyB174teGY3cESVrzNG7rSGdwJtckjLm5m6wxAaJrYCqD9L2D6xJSosi2HM",
  "key6": "29ok1DzKpAEW5FJ3RdYDKMRyqjGmmm8fMYf2pN3MJuKV22MmcM3LyFEwhh6wHRUfnBcR7mnaBnsKAWkTFKXjcSKZ",
  "key7": "4Qo9yhEfDhjMrZuW2BfJNjMpCTw25UoqwTRu2AVNLnhKRvZP3xN1KLEiuWUbW43cDyRrod6h5xrMc3nVqTxBTEzx",
  "key8": "56vhEJPcEiscVZHLygkjgWvFh8RP6Fsdzwn5YeczLrgGAPTC2J5PZyGGhfHdSc3rCQtNsiCDxSFjWws6kaVy2bjv",
  "key9": "4Nfm2G5CsPYZkgTaKgn9o71ZNvt8njbc1hpr5jCngraq5xfKCa7pktbUWwtL5xbnyvFvwsKJdvXqDrxhbtfu8i7o",
  "key10": "5KSkSdv3o89kbTxJ9GLbyCHzPoiVokfibBkk4ohcdcdoxLiSdn5bXXczztvsbHqPy6QaTMQTBi13CuVwE5jz7tto",
  "key11": "fsD4a5TSCy66Dfx25wtd3SCPjAMWe4cRZAMYL1KW5N3WSh7uqvc8zWCny1m2XDx65W6xyxAFHAkw65uDoos66qP",
  "key12": "4jt9XvfcCmXmFqF2HYn66pY6D36UMiNnKBeACK3rz4AYJiE1BAiADkkocTuomMLjFvZeo9rSs2q4sCQHsuXWf88j",
  "key13": "2bngFMxDKMbjReUUbFZbwEHh4edHTgBaoxDknqQ1EdyFjrNVZmPvqtsiEV3JZ5VHnmrVRtqy5GKBYuKyZoZKFFKC",
  "key14": "2JBhtssaKXitxt1N8YHhS9NuCdxa9jwYPkpXtQUFDmViAZCK3qV1c14Q9o4UREdJYp8mXE1kjmQebEbMSwnSJLWj",
  "key15": "3CnrA6NZNZU3ERB8SmrWwXpQKzxrbu9nS2nYV8Cat4bttPqCB7QFBz4KuyJWrRq91MQKkzWbiiRP7SfSKigRKUgV",
  "key16": "tJcwz2i2n8d4kLVfumicHMPvtqpydxH6uBct8sfxbPQdnH7KDP5vLypNdDH2SEC2QNZcPz5xJ6tg1pLc6mK83Jc",
  "key17": "62DXeDP3uoSz4BDHajqHdvJcSzWxrxvFYCu3Znt8uNm3Kmkdo2oCFphegw9p6xkEdfizBcaaw2suxrop1oCRDT7x",
  "key18": "5TXnzynyQd7djEVawuMKp4h3tUEw1oYBUxLL8TC9tKHrHNcbs3cK2T1usVCkp6o9okVU9XPiAzTCdESzAwoybzzP",
  "key19": "4RBVhJGnsH4iXqogTNnsfKQJb7RHq5SEfeSYsZDFTeJ1W8fCaJkigKH5aruwem6hvD6eEU5M7x6xw7ALZXtkgUir",
  "key20": "2QEBuDCcKC5LjqAU2SqBcyezKqKCb2yTMJ2q5ANyiG7SiJq6qiEdpKVwpkfP4ssYXLeMKvGVxYc2zS3ck26R8kLu",
  "key21": "5oNY5Yf93AZoft6ZWwwMj9zxE2poKDZa2ysybR2pFPhAHyCfGPmAKGkcrdEaSNfhZZjPxc5N3hPWgdUUGE9LquKY",
  "key22": "55H9pLdRoJtn8rjuYD5YnyhXmdSaoD13j6Z3x8DWsY5RsUqeVFPS7TTA1njZScWy7Krq5KLW3KzHnvdBF6XKdu1y",
  "key23": "3yqvaeY7D9p9HiG6jeVvP21oWiCK3UtCj87Khn2FAeUq9jhuicnNWpCpvrYs2ZvvyBmvYLtpsCqfpNqy2MTz3jv4",
  "key24": "2C6nsVmCpXqRAkkCfYZhLrrvvasj7oMbLQrZygFSSSby2CsCMdRgj5P33JNYjLHpYEaN5gLRHn3Ttq9ArYvi5h1c",
  "key25": "hkK6x6Jd2TNH1v1t3f5CyjpW5BQgff1YUSKejekjVocx4e2zjH3u4C5ccbrdGP8Qi7xCQrVFGH64cMD7jAsd7yw",
  "key26": "2BVdbvfiKSGsXLrZKgsWmVAuXxwg3qnBH8EUywCGS8nG7UoYyhn2u2rxvGZHy5SFEttUUnskohLKtgjmcBLZdffM",
  "key27": "5qGS11H9wyDurxsmfscdDr8rLCwFs2F9BspunDwridwpQwpVveU8upEauVnvFbrdYJqekcDaaRQSxRiTrT4PbFk1",
  "key28": "3XHc8kbewyN6kHkPysxMHMzi2Gtn8PSTWQBTcdaYaXsvvLsMbKwgGGuJVedxrAJnvoDH1bWmdgeCgnTf64DZTFVo",
  "key29": "aZ5o5M2i7BGt7sU2MKcvBSMA62E5WS7G8fdck7UnfKPCeWbSQjkuAV6vJkU4dGAx5P6Lh5UqH152pUwddnWUzP3",
  "key30": "3ZhJ2hykb1WdsGVA2T6GFqWcqYjWCvchGc6nh4RE2eiUsynSNDMZeAT5qR4ufv79n2XTeiG5wu2dWHecbnjCtngY",
  "key31": "3Lh377E7mrnpJ3cv6Sef9w95eAiLhRgFEMdcXwSPq2vNRQno3KauDkuYT7TjNBvc7BVwMVUpiR4avNuQ3t7zQCCv",
  "key32": "37pMCPWbvDGLNFB8emePPbEhNZuZtQowHnbf469x7WtP3KLiPR98LggozJi8dJBRvszf8yM6R9dkGLid9o9toWUp",
  "key33": "2iki71KhEiehnvrUTZ4dc27KuFKM1c5rYKksrra3r65PFDZ9yRFUKuHzChJGuPrjbjFNMoo1uD8CcmXicDFVC2Cr",
  "key34": "4mcV5d95LsH8ZmwCArbC2tDAU4v4MvbJvfB6Mi3uCVVBSReu9cKH12JXjk2xVtXDMCgZa4AC56F862NSe7czVT2J",
  "key35": "5bjJK1qyFv5VT5gdZHd8c2Kv3JQx76fZ4b4CPPccwRaeiz23EnRVSYXfibYg2Agb2xMEhhZTYre4VwGJtcBQyVrj",
  "key36": "3c1H5aTp1hN3JpNUXYwNZe3rjXcgVUkmigXUYDC24HZxsCgQUScjPiCe2ka412zJwPmBGVPHcU9yurSdM7m3Noh",
  "key37": "hymeFhEuw3ajbht6c9UEry8H5QDaxbg4LmAS8znyWuuceaQHDCGjM6vzAYfomzv4K1AKXedTwsKvXyCcYhiENsF",
  "key38": "63bHAc4AjK6NC6jN6XmBhyQxNC7E3MzzMhgkQTUpxHLSTWZdaaPJd4fWnczx8cFTDZKYPrUBN3qKL9z1w2CLau18",
  "key39": "zFJMzj5Eu8eWyUJgPbWixctNLtbFPBJTv43AzPKzUo9upWciypG7CfUt2tadYG1LuJg1AQb5NeWSorwMzt1aiLB",
  "key40": "2ycR4RdM5otyUrRXHBqHYtvvetUq6n7asai5qhtbPi1yfMA4Rkr33kQerR9jLm6Pw2DQ5pskhPuY4ZVcGJNPpJAK"
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
