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
    "4QHPEweRRo5S9pVDPpPXd56gh88zaUWhhL4ojh9FsFUWmDLaYKsKcN8oT1us4XDSSXK5TJKMWPFXB2ekmk8VQQ5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGmG9Mj6x2nFdtDL7gqRZYcssEdTMwT98PaDYnnNGSHrVAGW9QVymaMthLtAZfYG1xJv2aZKj3VuH8HHZhSD8t2",
  "key1": "2vzH9CJXqb2EdrUrzpjEWevcfbxCAS18fuH7ZQ8XcpGhGZPezGMtE8zzzHisHXYQUE4V7GyLTkN2MGZjyjC564uv",
  "key2": "BYARUXJ9VevzA4jMLz8c4niyHUdmaznaAP6kajCjCvZvmJYkvgoHbv4bsBT8k17fBEtsdnRCcUWdDFEw3uVBT1z",
  "key3": "3W9j7ooqSXVi7XFkizrLum97LvduhzkzZUEVBoCmMyqrs4LBS2SpcZLJYpGN7C5vCMvH4KqsosJP6FcX9p1vTf7y",
  "key4": "5CK7BedDbjiuSUKHhfug3Rr81h8o3HfgUTaYosE2SXLEZoqBPYUXnU4aoMyzHUmQmv5fgzAEpxPWWaC7KexN3uKc",
  "key5": "2wwVJKopbLVqsvSCzF9QToMqmz6KLMnRd4PArgjhHyTDTrh7qSeFeRUko8tNyC4KaYPKd5nuHEvJUPAbsHBT89CL",
  "key6": "481Jby3Fu2oaCmBGLq215ETYm5Q4M7Sju5zJo4c1ZyRU8csHesBMycHkZCf3PRUnWxvzQsNyUAoFcgqVfoLMuHz9",
  "key7": "M2RB9BmUPtcTx9pAaUPzseLzT9gt5gHJ4XpWoA8te2Lj7kbXE5y7R2ga45BZNLYWvCikHecPPHsbZcPfaccc2vK",
  "key8": "5hoqkJm1v49EscKbXiMC83VFUDRktp4k2LCdoXJTN7tHtc8uvoyznxcPgK348eEw8tZwLZmBBCKQE1Di2gZJjGBw",
  "key9": "51nEMkTBrrRaUYy514ndHRt2gMpAS5pYDLYDoa2juzXpj5ob9py8cAxqncwRQzC66XpvseJSri3vDASPpFweguSj",
  "key10": "3z5wtZ7QGV3QcDXJyNiozqczZhShJAh81dNFr46qo49bAmpRgRggNhiLLq1sFsR3ScyeU2MM8PmcZduPAep7rX9x",
  "key11": "53NoDdT1kSBBddRLi4aTxe9GptL5sGrdj5Uy4gitmKboi97whu9CApiv7qXARKPdGSbsBYeGYgftqjo7snz7Bs1n",
  "key12": "JjRrF7JnUcTYZYEFhqDq32kKAPARJDiWnxqAuhaxVn6hJESJzumBuq2u8Jb7i1BNariRnGL1nWCM3Gu1CTwyUUQ",
  "key13": "37CUUo37jmY6w6NsRtLXpUsZ85WocSiu1S3HQV2kguwFpHC1xwXMDVrE4ztgpxmNApfLmzp6XvmujVoTzsja4jbH",
  "key14": "2BtnJW8qAfCkpHdHpBkA2jMPTsNkXuq5BtA7orz3CNd85XebJTvkjwo3KsLHTBub8WDVX3xgz1A4qdT6iWytWA1v",
  "key15": "2JUox5hZutNm6hFw28nBy4H2JiXBAp58LC7Ek9u2mVu3WF8D7uUzjB4FzcgAcgYkaNTbcRruHXwAUWrzNnjgY7vN",
  "key16": "S32j6ZsXUY1GJjoUmADxgViA9PSoQgPdHN3J3T6RpMzWcBwyP3nmMytsW8bMkfS2WuiVELsPVmL3VAXVehFSN1G",
  "key17": "XQZ3hhJJkwjXxWwtUQzDz8crzUZ3zrCG6n74kUmKHGnJ292pZPYVQ7WzeTZ4M39MGyJAdVKofcsCp5snbUjj3Zp",
  "key18": "57BZRa7sqwAJxxMxJvKBRfAuS1BMkiptkdiwbLxry8MFhFqf9hYEpXSgS356uo6TwGpSgdx1H3EUNMbSo3SDjjhw",
  "key19": "3B9RdwnxquecUYvizRon2ad47jUCk8bSTG1sBgMZ6nic9XTqqCWTszQvcj5nFJENbkTcvrm3QXFi5TbtWCiXWTTY",
  "key20": "5YYrRXcKzX9Cx4RQNXZVLuA3MrekbCT9cDMbwcERxCo5WVW4yT3gus9YT4FSqwdFUX7iCvAvEgPrUdxqAV7g3nPj",
  "key21": "5ouoLhhwbLZtEa8iza7YojAGjke6mCAEvbaoHnPcquTw1R6ak2dCgLhk6FMZq61Vs6H6tRWFNBS8wybh4GXVUALy",
  "key22": "4Ftk7rMX9KpAsTcLpUr2p5t3oaLdZxzABRYqS943P6iP8SxdCMSfo1XQ38spCTFFyW52RxHXjJK2HzAMXvnE8zsB",
  "key23": "648gMGdrDqRMyV8XY4ChULcXoxqxLxgJ94BhrxtkFvRvrHoq2F4wAxtHi1FKzbPBEp3f2Hgm84c5APTcRCzzLGLU",
  "key24": "2iCQCcGi1gPuxQ9YaEbHjRZyeCBgx2HzVeVh9amSfYbGsxydWmuABz3oikE3zRoPaXq2DxcJ3rVo19SxURyFRQhT",
  "key25": "267yHgefqhY5mWse1TC3okKF55bon5D8P43H8MiVkiA14bBEgPJN96ondZrKcH5zbtDkkeJBY96BC7DKUGuwkESy",
  "key26": "3ZyxXd53ptRvvBqei3R52YB62rJ1vgzXUkMomz5aESXMDui72sy7TEdB8tV7j2eNqXHnE6yy2Z9osUTfECpwjZSH",
  "key27": "k5kaNXx9XRh7soNM8XpGREAQsy5gAMAiS6M5LWZVfgj33HbSD1tMvwAa6aW8gLsSoBWiXrdtc6oAyjK96FNp5gV",
  "key28": "2poKMZnaqoJUR2vHeNrfr82Fq4fprwwtLSmkbxmtsz2NaDmoMG4pjpxuSPDxxVzHP4Ks3bNTs9ohJvc3A8W1txQz",
  "key29": "3TmHR4cmD9RXfGTcf438uNBS3PLczv3QYdyW1cUFvGdydQmPinnmmniSrzpTt6K3FznPxEyCcWduZM4ZRPBhqJ7u",
  "key30": "PjZ3qv3ptaPyHJ6WLbBhuph69evvhf84rvNLc4Ydv7MREs6qfMF8MHYQB4rCD54ki2yqjCpxKQGpLgeb6U94xjj",
  "key31": "3a4eRNojaXKRVDdqVWK492ggBKaBTVSQnVv1sV9okAb27ZMW8rLHdtbiisUpZ49eTaXK5zMarFP17epqcgMvmxuC",
  "key32": "T4DiYbzLYK6NHPmvVYboppdf5rjK7uN5Kvw4tykeWA73NmC6RGuw3oPmCwsRPYQQPV1DzoHkWTNmh2ixS9dYAW4",
  "key33": "5B13r7EEnsLLMqsyizwewEGp25uFJuqymwmMfxgTfPQHugGeQRLqbDAsHJqeCHSmkfWymp38R3HML2WV4WiMJuok",
  "key34": "4v3nECxb36fXj4FwbK3XNQSjzCUrn7X751tH6zvNKQ574wKopAxx2z4GGmotqFtbhXxCUYZdZJ9w7qy75X1Wm5pq"
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
