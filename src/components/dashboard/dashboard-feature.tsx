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
    "3ww4os2Rnhtgci1ekQcFzHQw7DBtGM7374qmTZAacyGSiu9cgwU6jBYn3jANAHKyjwqPufzbNRvvvgvhXCTcZpYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJoQL7fmLathk94hChXwfUqK1PWev3gFjo5Wxnk6J3889ZkiBmtmtHNi4axtSez3VnZZuEk8YU1Md95MQi6H67M",
  "key1": "4nZDXVq1E5SWcRFgWFMuGn5vxLjBo8sPZYot2McD6wJtfjw4jVUxoW2BQFnGx3GVVnmg8TbGTx1QCwTHfixoMnbJ",
  "key2": "3zkLyLk8E6VwGKmGdM5gBvqHsMqtPHLVybUdqUZvUPys2JqGsf3z5ToDVjiJYJkswpoSWYT8de8fogxUDku1hp1W",
  "key3": "2kgdo4ceDCPS3r9sMuyAe5mSdxj5tou1hoc62WAiJMrxdGRNxRcLRdz88pF3hBGzBnjimTxpDgxvjeMRZmjzXr6B",
  "key4": "5BC8bPFGRLFeoFzQ2tvi1eoBQQHXKQski6U6be77htbtiRR7kssfAUpxHd3djKRX5p8JJe5aiZ5BuQx2hLbPEXNt",
  "key5": "46ZZdpUWqEhZYGh76k8KCM8UsREdQTucWuuK9wP8Ta5GuGBN1ioQfghzeM5msTZmT9nnJ9UUFGhbFg3BeM45DWuB",
  "key6": "23uLRKU3tSa3Yuinm9j94XrYY2sKXtgFZDNWdnGX9fup2jxkjnLevsJN8f2bGcLVLsecvXUN1gzGsZ5mtUqN9T8d",
  "key7": "3hq8in2fyqbVKFJzKpEYBQMSAC1omRLRhUBMHbQK7WcByk9SEL667ts2CsABVCkBKpu1rBsABi1Lp3Ba5gaXgqkq",
  "key8": "5jwUyxcRFCMMrsQf4VCJEAcuqmqxcASLrerYP3dv9dp2bPCigoS3TJYWwSEfwfnSnvX9hSatiLngg6wxMHMz4k3W",
  "key9": "2ShnrBE6VfV1jL3isdDMD4GPyGGRMAVMuWPzazt6AGLxovmM3CMH8bvcDJRCitRvwLi3cMfsUMfHZ5T9epQKwcDt",
  "key10": "2VDV6W4xqnT5poGRTUGg2imHH88DCc6ZZdqwmVbn6ABiWWVsiL39AiMhiF3vmHjADaipr7MqXGnSRpcUCAR5Czr4",
  "key11": "YBsPZH9uftRDizVdDSTw8FBshDNcj9frwwfYhyW5zD2kGiyktxDYWfX7dM9nJbYDztHBsmfD1BtMWr8GXGCrxR1",
  "key12": "4VjyuKvsYHWWfwh2ZXbdkWH6y7FQacSx8aeXnuPiVZMv1Di4QwXvBPPZyhYAwNsrL8hyMVBUBuw97wVo2JvX5FMU",
  "key13": "5wdNQsCk4Nyoq3pLH5UfLtP8iZFszpYZqbaVCxVsMwnStM27N8s4VLFuf9UXRdA9BHsffNEtSFw6Xvp5Pr9zE2ce",
  "key14": "57N86Zwg4Fc1gUiMqzAQMumGaCaQq4awTQM3FgU2xx9TY8mXiEkoWRJNFHfGMyZXcGv65AAVqj6gBjQDDX355JKF",
  "key15": "3snAvfccwhUZ4KMHWqMAd6akxVtw7uantfDKt9xVeWooruzFhJUJotewrdeMAyZen7dYELweNfiy3TscnnpwBV39",
  "key16": "24XYvG5oyHW9Ex1Eijbx8R1ZW6Xp6yoCkTx4ditAyv3SE7uv5y38PX8mUuGdGkaxJT2d9HGCHyWJV4HfkfGSFk3F",
  "key17": "2wTyjACQqkQY8nts6uWZdR81x8dV8LvMnV3sGJtQZeXhZhmnGfcAkF4euaRu1exQLCeXRxwcQdbSJPBUy4RRtESs",
  "key18": "2A4fd9BmkTAA7KwgurCB2Q2Yb5WvRMddaZokLdSUAkkKqpn7ube8q63hg9tuFgh8SrTRAq1Pq7xBrGRw6aZyeXVm",
  "key19": "42RF1HDC1njUr3FdWEKE247aHtfyffajempihmiM4v6vSwTrD2NkCYG2qyDQDDo1ytiRqdUTGBqBQzhzrCsYAev8",
  "key20": "YzwSjNfnsCZBg9pxqLa91hgvrvhrpMimJ6yLTqTHrGrHED27youW3Bz1gNbJkp3SGwKZhMNs7FcXiuagwuHeNmu",
  "key21": "2bnbdmPp25d7TFgExWnz6jRnGKFgvWrtKctU22pBQSedp9tnkFttWXAKYS5Sxk46hT5NDH7G4GyrTqNdvnzB33uv",
  "key22": "23hwaYh6g4NH6hBnv34B39hQickv3tokuTmchrfqweA3KR38H3VSyTmimNN64gyvHQgC1HPiBasG6eDqhjXLwMCy",
  "key23": "41MKJsndyAxhFttd8KKoWdEapv39yshWKq8Mr9JzXsuf6QmGEFyiTUhccN8VbLPknD3WW8y6s3Vp6EdWTBhjJuAN",
  "key24": "61wC6mQFKpiukm1B6r1qGVkXwRbBDE6cNBda8zS5Ri7zLqPB4R3Mk1EZou3oMQqPdPp9jvRpcYxZkrSJ59JNEZmN"
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
