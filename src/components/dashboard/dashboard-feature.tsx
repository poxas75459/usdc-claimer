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
    "5Rwk8gViVWLpCKUBK92oyjCiknvXQDdU69mMSwdMUGYhNBoMtBJK6TuD5gybjEa9az9U7nqReofEtToqRaVK79kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWGHJR1D3BJSKp2xbAa31nbjso2B5Eh6XR7mTtrUKXVUmuzEQU8Dj6Bqi62r6XkH3oPTSTmTvpVQGA2Pv1kgKW1",
  "key1": "jL726Fk5D8Fpygkm9ubibFR67TAxbN1jfiyrM6Zt8Db6yfzoLXFriJAdjXGgtg8hadb21Awg2usDmQFfM3craxr",
  "key2": "3jEANjsDxRQhdJJZuRdmH19oi2ptYVGKrmFEgYVfwMTNmc46GeRuwqZXtBdkrZywKG5sXqcCkGyaiWRfqLGcEszV",
  "key3": "9RgECPHbmWhQWb9K9utgiLjcS5hhsZUKSdxh41YKwVG1GRFoB15FQoAeXjrcwtwPxoac8sUoeQmh794MNYBPnAU",
  "key4": "3vM5sVTuDL4UqcuRmVRF7nWTDunrsJZLDMjcuG3mXV4ijM4Qdnm1HJ7RnEsSmJvCoLadCt8QmV2mzatW6cRZMHDb",
  "key5": "3Ys9evMh8dZ3nE3HLjKurJeK4nZuB6SCDp4UZLG3A8T7CJxuS7dcDxExfTsJgGEFRyAe3joYbSkcogHdzaCbAmQ3",
  "key6": "Q1mtzwbhB2fyo4ek9k2u2REdyog5h8aDTyUL4Y7JkyDhvJBdobWr8gUoPNEzgn3SB5g6Ws7tAo4kZNJREky7NaJ",
  "key7": "4iabAa1FksEGHuvRXGUBBjYhCpR3UT9jfeBZuV688reHvxd93bxosekCQfLxuCV2wcrMEdLob9wajTTcnqiSpjWC",
  "key8": "3hU1VCnjiceB2LZncdYqxDEJN4Q1xuNH7ZpqbH1o71qMEws8iSi2xrMKB5bxbcFi7CvJGpdoEnpJgD2KAgn7roXA",
  "key9": "2VL42dXoAjMsVFD3bifLrN7qYg4r5AMR6if7rQzKMqtiDP1Chx1t8vPa4q99prrDSBDhqW8X63w57dLvpk3GeWjb",
  "key10": "4r2vRtvQzJL6ndct3QQTZEDDjnNFaJPsXBAdDxbYtNuuaBKvxyKq8xoPyBPMm9p7WyfGknrJvQ2PSm64iVKMCSFK",
  "key11": "2hdhWAoNT15CkJRfSEMFKjPBg61DSBoJoLaRyAt6LVR5FnP8quHBDf1pzA8Vp9tZbpcTEXckXkpuGEXgCXQFQntb",
  "key12": "2gayVdXr35GQpgZbEp8MVGBvxesZiSskr8CDc5xq3s2PXFbNcirZSx7w8hFhhzNZQdFrfYp5jjECjkZcv1VDryCX",
  "key13": "2rgdinMXkyGQqjLkhmneo7LVJ1iRK3pW9wYJWb83gDibeYijC3NxU49UybKUqQmn4ePoLxZu8ommhQWRAAXMScAe",
  "key14": "314mZ7PWFmbshiyDYM48fdcxh8P29kWqZEadFunbZkTcLRVHcArkZZ8C711Md5TjJTvhfH2u6b1w8MHNnj5PSKZd",
  "key15": "h9FnycYVgeQESzV6snz4eJWR2xw9jn2kLbrvzTo4VU2bskKv2f4UrR23PQsnL4haTQhcA7ayd13gqkaEugVxC4E",
  "key16": "5bLQx1Uz6oTQpacVnGBfdDZRyTWzhRQgiuyzrEvHtPhC2RZCc6LqGtPyw4AzzZQQJE71NgQB6V9B5EmiRx845Xm6",
  "key17": "WrucettJcKzkGwdQwseDPLTfiyZ2mvUmiHgriaKexy44ykZTxtAjoy9wSFmFAQ9g7XhjujxCASJKV1ZBpHZWPpm",
  "key18": "3aZ9AEZdRtmtPLdB6Z3XuK4bHq5ptGZXcEg7F3ucAT8pDxAPMQzTmnRni77vE66d2gYQf98JRNn5UdJHT9Xae6TZ",
  "key19": "36qSkNuiEKxSqRQAcAm23HNYWMz7SpSCuAVeH9c3ZbjLeQCH3DhTb9dQJzL3iw9F42t2D5vNq3skHMscyKcQAjiN",
  "key20": "3v5LDtyLb6ADJvTyooFfhgHwvBPMZrB8fjbxFKMGmm1t1Yo2rjw8CJU2BfgHTEs8KWhLCKPmzTudC4avndst3heZ",
  "key21": "4J6Qp9dwEaWEU7kUS2uE3Cdbcc53T8dKEjSXZSEqYq5Ts2KyZgFXexxuZEEdNggj2S8rRfuM6m9WZ8nUAsP4Gx3c",
  "key22": "67LzcAgZevPcKsfA4nFmPLYHsLaFYjSPJmz9W4p6cr9Xc5tKd7FwPycLFDpcvvX2uNpdvXSk2xrBXcnsdYE8CUE5",
  "key23": "4HHM9ZHfqvRg24n2XGkgMPu97J3JHjRdzSJhY5xyb6csLiDokEaYAgAvSibcND8KHHSeKiBfYkkJMeSisbTU8vFp",
  "key24": "3s212kcaLTM2ituSnHVMsqo8AA7tG7jaX1jcDuZtRBLbACish8jJX3Ffm4YWm3C9yHibvGh86kumXgw18TnYirji",
  "key25": "5T33tzuFUXU9wYGQ2uyL46A7UznUKsVN9FbMXCq17zsn4DG7WUakh1Km2pB8xZVRjBBFoswxuzH5WLW9wN3ZtRGe",
  "key26": "2ggdHvnBg5NYon2e6yadYYecaEWSqjYfrQeUfukqLoVTXK9pJ7J4TyjqRjcn9Yavo9FXgh9j1abTiF6sqkntbRnm",
  "key27": "27kCmwuQr3u4WWpnsdbr1mfRR8f6F8rKBr5oqpUX97zYuES4WQWTzpimUyQWC1BGyqPawUnLSVuwTEmbjzaoxUbV",
  "key28": "3GwXzegfV3sSCTePG5vEhXvjePog5gmoD8QbDLWvRHSww4B6ACiZury3a1udaXJABwXvZy4dR9gJCShbHXc7B8VS",
  "key29": "2RwrikyLVUVZnXDrUEGVPKoohGFG1MQgDexCMr3W4GTueBhewYhx5n1Uj41XcJFCVCXEm9Rk1WA2dGcDFPiAMjqL",
  "key30": "4LUcGndnvTNK4mBMqSvs9qepQJiCYKBbFvjkg2kZqPD2pTTgkBzxLatiGqRW188gwEhGBv7aPw5wpSu7wrZ8sHK7",
  "key31": "2snrajmRdL15RvHw9Zh9Fy5F6afUCWJ55dptqWnbNywcz4TwRa6TQcrtWLPTpGbUGPWv1iP1ri1KwipGapohvp2a",
  "key32": "5osK4hFDgSjs1GsCwMXNDwRUhDPPFamZEicpmd9CUHDWjFhhLx6XSAwa46NwQKNE8enA4BudVkoS8r4Wx31YbtkC",
  "key33": "33PtLWGYWJ5Xxed4S1AUN58HkK7N33XjwuGDUDUnKDYZQ1ojDVzzekMebt7tYQ2vsQjUQEr6nGT4VHmnSzUpjMBq",
  "key34": "4aTic2J94wjuc6x2zbdKZxcMg8WR74YGwkhGqBcu64KvT5fV1vfpo7Pz3KGEXLVy39Ck4d8F8sQWvbZ534Ae8Lq5"
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
