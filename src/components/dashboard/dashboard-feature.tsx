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
    "5mBZJdTKzNGBTbrWFHZou4Hgbot7jxP2xMkHJdBHZZYtnz2tnzkaovfCZNpdky9twM5JeTmsVnm9kLArzaZDC1qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJEND4X9ykmksLXEfvPk7f7DGoD7yLzfqp9d8eHg5pF1sAzT1LvJ8y4thMXfp6A9m4i9ZfHppgL9rt6m1pggP2g",
  "key1": "5Q6cBPHnzo9AAuonqaAB6FjZmWEfeGdH9qKSvYSqzY6AfsAxFywettVimQCxpKoWUnbMrKf21z7Q8pbdWgjraCVf",
  "key2": "57TdKo2GwFUybmixRnnUQwQkDtDfhftY8YS7qxuj3r9n5uzFJrMuNcXAS8x3sYwL89DpYhjNTBAZVwW5qTsY2Vzn",
  "key3": "3Pjc7i7QSr9W7QL5sP7fXxLiwx1qaxvLVgtyymhwSnFPyfDtucA3kpv2V7sSFd6bvpPmPJ8CBDrbvpRLJXg8s8Zk",
  "key4": "2HeyLLJc17sG8zUpPYxCFqcGEM8ao9KKc3ErBKJwaEymQfeMjcJJnEy3UR1o6MrDj6YZQNhHee4pZLyDYMco2Yub",
  "key5": "3pBNTGSkX3Yc927siZ3fzQkwyusRtBRLAgyej1W1bFPUqSKUZn9g3y1wXDVe87CG1dN7ZfGbjd8PA2ZYwyGgRUYD",
  "key6": "4AAub3K4tNuvSqKXAe5a1ZvGNagD8ws2APNvYu1amEWSUNXksUkT5HQeW3gYAj7hGr3WTzvqTHbzZFm7Hme7QbB9",
  "key7": "5nvXSRVY2da44hrvfLbLpYh1myW5Xd4P3Gj6fDVBepWd5fhM1pNKi2aim1sx4vBqr5waP2ph5xNXp1jRNwDr6J9W",
  "key8": "49vutw78hTPXQQbgdT2hBtaCgPDQgKnzXiwcQugXNWh8guJLB2g4LYYyGESxdjsVL14GssfHDiMnrQ4xvBqB1Ccq",
  "key9": "2Dk4DJt1SY1qWvUQr9uWNeF7VaUKgaW5TbDqwrhsx4ZicTJohPo6U86kn5ybnRJxkzL6z36sD68XVfkzjQcPP7aF",
  "key10": "zNSE7RLD6nxtWULwa2aNG2WVBMN25D5zg5Hift5cKkfu8jhQf5JR9BPjp73jguowFs9SKmxWUhZVCxAXBkGEEhs",
  "key11": "5xic2Kdj4F4cMAXSqBvppjStoE4iSWBAYNiv8FHB484V7HTtBhFHJH1BoGqHg2USU86ZEJXwT15ZpJ58v6dXLK9N",
  "key12": "2eXgFZaPaynCgzhZuZeKXTQyrsndHngaHLMf4ft2CgEcB9eF8H4kFGUNJfi4rRsjo5ohhMPRELFKKryod5HLHQ8P",
  "key13": "HR3NYvVyZX5Ug4s96gaVxmLUphsbhCeFAAnMfWRYpeMfd37hhBVni7rMnvzFzyYwMVozyUueqxZu1efnLnReoiS",
  "key14": "5xXSwFxkt77rwinoakLn5rEVkcutukJ5T8Bp4TcKimc1fFQ6ddfYXBZmzAsmvwKkxZquwfCTUPWXtfrLvBaFhAB6",
  "key15": "26otHbAZXNNn5ZyCdTodymfETb7hzHLPbXdbj3wkVnR25QUhEUVntAMicHoFiFdDtasHXiiqiagvS9aeWDMoRfdx",
  "key16": "5Yx4GBUFHPgdgAhnd9uneLNya4LM3aNzne3w8QsMJpTZ6RCBebe61dC9pLt3bqqMdbCQKN5yrQkrzfuRgk159CQ2",
  "key17": "2ha6BH6Xhvj8pjDFRu4wUkiLt2i68zvbkq33s2BPPuLfwJix9ufD4pXcBuiNM6ZN4oK8hFiUonMR6urAQUuBaYhk",
  "key18": "2WUSJRAKCY9nNokmNFtjawAzAJqCLri63yKPdTwPrp7eZf4YJLQRBsXGeCVaif81LNPQBFtyvyH7wJUxKt6tZSGp",
  "key19": "4osfPhEa5PeQWy2CNexvznuSLUnQbCrsukX5y2dBXaDVAVsQAX2FA7usiYh9aSHgkfbMRVHRwbw36S7YiJNawFxS",
  "key20": "5LkfjvGGqdVqsPiKmsMrP3P2hkMb4K5a5qSKuHdyyBLzXJASbxRGKmgUvgAcEwUGuLaeamzAYWB7bKwFLNXRLUsF",
  "key21": "5ntNh8n2LL7EWMLNmo5aMdjp6GpaeruLDvoPhQEnMERK6wPW5HfBn3vHkhv217SYQ5QFVc3r3MrZyGsSCgw1JkK6",
  "key22": "3J8MqPH6CaFM8BCzADaX7KhqYGobHpKqp8cxipoHpTEcEgPC9QwsKJaFYLJoZYaBZ9vLE95n2yikFFYHzV2vrz2p",
  "key23": "2DRekF9Az5Q76jskseFbFG6LR6A38FMCLX9iPWeuQt5tuJzjSCo1jR1fVDQbEX6WQNpfYviDkegWHfXqCAH6Fd5F",
  "key24": "4bHN7wx4Kv9z4e7n9HPWGLu88oEsjoDaGD3zjeKCAttDdK1TydJW7cuxgBkuN7gaYX4QvMxUGTYtcs37BjGCD8gu",
  "key25": "37wjAaekXbQ3RhBrDExXxofcFtXb5j3inpF1MExuWYpPpLAgCFxmaJKeLegDPVz6NZdKdm37upHBPviN2fXWe84R",
  "key26": "4vAa1b1vv1yUdZ6eEXYyGMvs9ndZpxmG9mDTv6k9fRMLBYusL6q92qQs1hKov783ufayvRViXbkMAe8RoSasFPnt",
  "key27": "3bNV6X4s2xog4DEyx5o2c7Pq9zeARf1uBptgJ1x7kDVPMcFJcAPJUgpb9fBwfXuXVUUGx5ySA18UNkUQK4tafo1g",
  "key28": "3FwQMnFhG1BoxBB2ttRaYQsDMKuUs3Zg52yxGqo5yjm7UpbK21T6UGYXi1PNmUcu79hj3K5G4dJfWZE2LZPJ9cHA",
  "key29": "2vKi4SAbR2BPYTFD4oGisrimixLPmhatnzGPARG7JFdWnwNjhXFmsMuJwF7sPTnKSzacv4NechP6qMC1f1RmYv3u",
  "key30": "5curLnZhaLBBkGHYG47pMSVPQc7Zd2hwBhDuetUebB8YGYcAYutQcAS1cbGXpJmBoHAjcXAmazs5dFUG5vdQ6qum",
  "key31": "5MKmNSU6TKjhvP6nVfUeKGYXprf7qBewErYQqqJJeTQDN7G1P5rcoiQj152ZxKB1t3xVZDWP7yyqRgb3EcZTRoj3",
  "key32": "38kdeqh5TUDf6jLViKNEVEGQogEYvQb1jCgWvZqcRNMNPkYGbRLjzbgLmmZKcCmdTHBAGBiKP1if1kk8ZYFg6GVd",
  "key33": "3zMR48SCHS2g9ENmWvPc4WLSXZZ12MPBn3Wy9ddboJxGi4u8F3HY2otSEJngftLVxd6TuCCUa2zVMigRanj7BpNF",
  "key34": "4hwzdLcen2fshXdSv8zSHN9n7hXeBMfxQK4nLtuCUucuMKt68P1aYtXAu8usG84i2M3dSCeAhjzbNa3Tfyzoqc6J",
  "key35": "2hKsvjxpMCRW2TmAek1ZXXT7t5113gd1o3dXegs4J563egnFiRr6ZgLaz4QLgZuNPWmRhEwkYxqUK5Mx2P55hmdY",
  "key36": "5MXSJwnaVh3bbrXuvjW32bqVmSwgsNjJH7RvEVRoXwjLv5hjine9EVTcyRN8zjGTCuXNjTdXYEB8A3JAPErGDzp7",
  "key37": "jpjQnUhn8ZtX7iNkH7LUt7vJhGYMeAXUEQXJZWc9et4gTFKAG3tPd4PuovyxCFuHXxssBqpT7ENx7DFYEu7HPvH"
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
