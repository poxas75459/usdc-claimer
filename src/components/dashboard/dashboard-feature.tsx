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
    "4CLsoHzhaaLPJkcnotCx9rNL9f1qiMJjKBYbTzSGTXjyjzTFgcoLMmfbXkxk1o6CLCvCBvSq9tDRcpvZQC8zGbZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLtoAZnsT4QsF8F9Ha3M9ev49YtzbAb69eQKaR1jFTBndbYWrAK1Z4FbLbbbmoAZfLf6wxAt5mmgNyByd3AKJyn",
  "key1": "5djmugCWw4tipTAN8K9krpxMzzLdKyo4B33WCn6xr5RWCwqsg8cTG8xRn741RMzUbXctTc3g8vntAiYMA9GoX8Y",
  "key2": "SEJu7zPmSMZe2R3appBWJB1ADyHXQeWVTinmd3kkb5BrSGPvNzY7MgxF6xem9VpGB7nbeiuVbtc4LRtkdsY4NeB",
  "key3": "2mxKBtVHm8v9CehcghzYbLhGFs26Rbr38Mef6zbieGrjRQQaTRGcjkkNDbXwVpE7BHNA6UCsQ2HNYAS3ypu41uQ3",
  "key4": "3XoRi22aheQgrgQ52qdF7BoPatDzJofu9Qou5TAETi7ETtKv7hQU6RRvAfWUH1VKe8t2XEzeuxrHxXisC2pHQ17q",
  "key5": "3ysuoeqqcm1qp2zvuf37o2j7XV8pT1aU7yK75emBn4pZnC1WChT9ATB1a658hTgqBqitQkKZJkmDB142nsxxaacZ",
  "key6": "5Rk3vS6bpEuW5Ym2VFFpSfjTLaRyRFW8EMFe3KgQR8rSPHqVX8iQPSS8v9wCqkS1qSCsUM5MAff7NuaNjb3YqD2t",
  "key7": "M42q4539huEnNepVZBTB1Bekp75nHdtguT1WkrFYoKeySrk2waREMxf3LcVcVpNGgdF8TmSGdkBAB41ytkXbThZ",
  "key8": "3X7oRGrQu3HXDH1EBExHAzGvQ4Z8LEpbHZz4yUnE6dLM2zQvcqA4osKUBV1KWRcTXNLCbdsByKeoEitiJcrFTxCq",
  "key9": "3UhVBa7PdTrXGwczoufsyneM1EhHVNmh9AVFKKRiqQSuC3jwbGLEYseDfxH8165Pt5kZoiPAZ2vNEuvez4592qyr",
  "key10": "3zZLwC6yXK7UtLSHqECxC4dQCtXmBoxZp4a7fj9w1iFN6S3sW3tYEcXv3k4gmQAhrMWVrcTYUeHpRYe4NFZ2m23n",
  "key11": "w3kTZkeZfno2ZEpKTAuyyNWRM1TrtDXED6bFumbJ1qpLCCTjyBhp1q7pHJj4aukgks1G62bGgstBAn435WXYS2N",
  "key12": "5irFbSJBeSJBXWDsWdVc49tvpomhPEvqthJoUtxbZUzYFVF8V9MaWMU9PpWirxHvUUkDyQqvgx4Vxwb6VNX4JJA9",
  "key13": "2YREzC2tseLZHBeZkEnXZvkcjZ2W6gMa7Ri5ick52yaaoEQWHiUr5gk3xdctPkbLL52jemXsoyUqDFvd7rdfxBcz",
  "key14": "4M3Hh1YqjabZyfb4xY7D9RuXnaPjo3kXGRinD856Uy3dqrCupaXNBPUrvHUzZq27XPGjGPP138nAHoAL5Ad3R4RW",
  "key15": "53KpPrS9xr6YVmXqL5U3JPtu8jVEmfwS3GXUsAEkq291Jxac32A9SVuxXCUTpzdb3GC6fCbrfx87cKEwqbE7haFz",
  "key16": "3trY2y8uKcGkTfrXqmddD9TUXzunbiuimjhewU5NadQgtbTrK64yXVzWvWR2hUC8G3JPctD8xNG8buDp3zfxjgWM",
  "key17": "2Lo9jCwkNJWApuviahkAapXuVCc14ADDs67vdmLXuD8xtMDEXc5DbTwhvWoUrTtanvLixAbrfwMgCweSik2v1rXr",
  "key18": "uedUHWkWebq7sqG5XcT16VjnHvZgzD3P6RvXx6Vw3ZGzuRvmcysJwzJc3KQAErg9yJq6AdVttthTWw3o5cEzvg6",
  "key19": "4zRHg8v28HmiR1E2UKRhDp9gf1C5yKRdHKyyKscAKRAN6PeMgNLjNmhft6JVPfXYkkjn7JsuJfbzAbzUpFNohKoQ",
  "key20": "2u4Jh5Pu4tTf5PGutmzhkrvfiAhAs24X5rEkhAXWPQJpLqE5DyN4TjChhNgJknEkrV2ybkAHFsLnCr9n5muTsKYv",
  "key21": "3xEywZ3KMXF9iupJwrGY6cUJmqfUt5LkE6v1vjV45ziVULPa8JXgS2Gae9EqfcPQtsiRSs1yiEn4XFfnUzUc2zwZ",
  "key22": "4uov6GQJm8MQ9Vbfid37deBUNXXyBwPSpttzVNeMSFUSZJeMRMUp2vHzB7xdfDzt1JCch3bGzqEqYa1FE3FfFUV6",
  "key23": "64Z7Zgi84fyMt8v9DhaFNRC2F9HZT7D9CPzFQdDmmK5vonQpRNUD8HEDXmznzNBY3evvKR3xjjUNbP91TjrwSV4k",
  "key24": "5n3isvK86a4axZDvMngGcF9U2V4t4YpQhBYgJ5UeSnhnUkmdZXPGRKmjB4kxtFMpnfm169Q5YVxccMavTd6u8Ajn",
  "key25": "66VpS4ujWrWYTnfPFL1dZLdAXJpAZfynvhw8EbDd6LKPD1AUpW72jMuqMnDVRU7681C8mb6CKUYDvD5MNLZSz7tr",
  "key26": "2vwEVngto4Eb8p5ZSH214AynJwwwkuNCiJshRuiA49ZMBryJhsRLWBdHu39ej4Q7hyFL3QyQLrEoUzEDciTbKpx",
  "key27": "ZPSYkqBbDejtgqAPyk1sHz55rguPVkRPYkfxtotapyrmtBBnsQJmS5dVnNrmEU4Fsp39LGpzp6Ui2rs85nqkpYG",
  "key28": "42XH5SuzxSM6ikydv2nQKSL9vbwjcZrPwk8swtZs8oEsBHvbxiFs2hdYhGnYLPzNKcLzbrTY2NuS1RwyFzqpBo6T",
  "key29": "3pTE93Fgw2qKoipmKQQUcHHhCgwU6ZK3PJhwTZuigXtDVg6Fc3KwKt4xLVNw3R6XwUFLnsbGnnUb6soyBmKxh8NF",
  "key30": "4Cb8XV4wnuHKaLKPrBGGpLxd5QUHixr9wszeexgUAds8bgWNzeT7KjomQaSphAdWhnkHUKMSJLtmXdheMdkGGBFL",
  "key31": "2cdpsWWTuhtK8HXhY8hyRr4QSihiBC3drEMAQExjw8JZP7fMsaTEcRWmvjVNrWypThzMrhiDBvZh5vWp2vbkkoVH",
  "key32": "5DtooVXfsEAm6AcGtL25YnH3bveZfmdB1QTNtKqGPJPFrew2gvkNTzfhvxHoxvHiAZQTYqZhQzpWxfFudxrgno7c",
  "key33": "67mFEYTCez6x6Wcrgfp2NtSh5wGcBHo6HoncaiQSoYcGN9NYNP1LqxUi1Dn2v2WjDLc2Y6Xj9KRfcWHDpGy1BhQd"
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
