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
    "2KuLfauefAhVHFF8guvmDFDzjmNbGrDGPh7pDVs1tnoskZnBqdiELWzwrCysFNn1o8QWYrGzh9ccqKPNdSbTwwtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X786rv81bfZhsCr8V1s1dFxa52o9U33FMpa1NM2wk2V2Ej7EP7tpMqzNxYa5asZdhodfXCf3h4t6cj3jvqr81sd",
  "key1": "22Mcqssf7k4LbuhdR5a63Pb9Vxy2Qsnw2WXuwopksjHnuBM7XMMMWZDhxgEB61CVLFuZdtthgDzGdexFes2qcHA3",
  "key2": "aWFGXmzp8ti8CntwYNjFGKftPVUtFoxM2Trs8Btb6AqP8cGTb1FM51HcokctNQZsRDiCNGytPC1zkPH8Z8HgtVt",
  "key3": "zQvXfvCJ2tybNPepvSMoJiEeSHxD8H1ZHwpqJCiQ2QPcRWmrghamVQ8uo6hMzNmkAbkRLxnHSjBWWxCP3aKumKd",
  "key4": "5fS6w8VEEshDfUKqNW2j8iTuMyzmhKWzpo6VqMszEzesYocq9EYnWmvxLqdDLGnuUUGmzDGZftpwcNo97resQTEJ",
  "key5": "2cVxgVVd6ib63WGcf2mQEcCcM1pkmksekVn3NBQkyvzux6jQEz5m2obw8qnpgBNcuM7wWZVJzvvAS2bkLoLCTSF5",
  "key6": "478XF72miLwuBrgzrgwX33PV9SF6eUxQ4jVbj2gRkQZvLzm478SWd8WWDEaedkYKsJCdcfa4BiyMMztHQPSTPxcR",
  "key7": "3Nqo4ecYTyHJ8HCnwM7LJTDEhy7qLv1re1KscqAYShh68dADsSxyqkxruzhE7qupvHG3w18TgVAqmkbjZi5Jwv2d",
  "key8": "2XVsTK7jpTFQaQUgTNgdt16oApPVnR3UVLNd9bwFGXb9X1t4WycBVDcnCoY18fNBHuoVA2mQEy8UdupLzPKPVkwh",
  "key9": "326Hi4FwS5EWxg2QGECJuubLxrqSGKAhTMgESaGaACqR9vAwPUkP59616DdmNpSz9g3jXVNrKRtPY9weToPdWDmy",
  "key10": "fELyqAhZ97zZFNVEpjZhDzK9WNEKQWWtJ9UBjV7xnY9R7YGu3U5SfcqAbeceBV7jqJeTwFXoA62MoxDsRASEYUa",
  "key11": "3bfgDH6seNdoqLvufmWk2SzeDZNrHHBXPyMncQQx3ppd4LzY3dQAmKEvqgoVuF6YTtV1S4pJwjBDqWKXNdHS4TD7",
  "key12": "4kQb8MADwrxRXDkghVJW88xwUksDittyBn1qmKNiN7SKkVEkFECq4qjfhvQ4sZKYDDrs8sN1UL58c6FpaA9J1GZJ",
  "key13": "2bKZGWevQiMp4dKwHmKGzbia69NQSj5TayU3dVFsMvqvsCRy43bBi5DD6D7ZgKXhpKyWxu4mRYkA8ixSQgp8faMe",
  "key14": "4MTQee4Lv9MSESF5wzcdBNeAJ3BbEey1yyf5zETAy5bqq8RFG22d16esjiPh5tJPcWdQ8sZmiJgn8BWKarryzZZh",
  "key15": "591SSEL4McwgFhnQq1tR6XuQxNLT9F15Dra4QmWrfQ9BJLMMwCn8BdoTXTrFrWL3ZYkfFsRvUF3eefjY2mKh1EhA",
  "key16": "5abRbmE5ogJHidP4ky2Mb1GTzdte3Tt5A59Xke57F2EWAwVeQvsRVfqtEsNFrqyyH1z7zyRRtj25bUA8g6yxox86",
  "key17": "2DfMmHBiRDahDzhTpGxhcupgSWyG71JEStS9U4baH2d8yPoLqjJRJTZcHqnFy6cq8WTrB2b4KvCzMzFyregvTDzM",
  "key18": "2BiBsGFpxBDJMG2jyBZyCM6sqRCwX5qeCwGBQXXeR31dZhgzN4moysfRxn2qbhzCovf6pEEJUr91Eu3q1KeYN5do",
  "key19": "2iuC7ohLn2nUouzSnpdnbmEf9jTUHN13SVr6dKHAVKdmxVbszFrmD3JBk4ycVx3E5bDpZR8r73MFbfN6mMzpxvAU",
  "key20": "4JWjJyiHpBiH8vpHDQnXRSgCJQCYYuTCAxgtshKUb6TcFhCfNC4uR7MAp6SM5WHKqYPn8idVmSbBkvR6V3vX4CEb",
  "key21": "ba6ducK1jN5YnCwNYHUSwUS8vjSVQaBpzyFLsoABvcwyNpgbBGky1opbA92C9ooqgh1SwjaByy1SLX1GxoVMErV",
  "key22": "4Twjnm5wME7KNXD9zUZ1PUyuuEvZfZv8TWKqEv6DHBxxZUiZjsmezrhPqxfbutjYcoWKfnCw77XT4o2jqyc73m2B",
  "key23": "1UVT3xG9ATFLQw1B2sSDtSwUf29AcXLWfU1xzCSyXZAegL5xFkj6GBX6qKPBej8YfUNhG2b9fHno6SAXVUyahKW",
  "key24": "3LyHivzas6q5tawDPAmRdevfHAyJb67CDGnZQUCU7J2BDkgxgtKKn5ekHsU3veW8xmSXfMEd2LHJocXBGG5491qH",
  "key25": "5UtAz8h7aCmkaBdDrmFxSjFHP2xUcT67iX6sYFjS9WQzpmEM3L4cuTHuXXLvS6UUjcsPZAFeUyA16hJMs8M91kN9",
  "key26": "2x78BqJ52XvygEqfmtqtgnWJqWo61D34P2KrkGqD1SQvorL7HnU27QXPRan1rKsvMjTKdWpKkSRTQcUWZi65cZRE",
  "key27": "3vACQbmNMmgx6nAJhzFRd3HGhXcHpriFmYmMJ3tvDfHdeuqkvRHhSHrXyZVaQBw6v477PxDdMfWCAsRSxQef1BjZ",
  "key28": "5teZyZagtyGrpqqKK9GfNv6Y73c63SMFv6NqDZnjgjbWcr5o8Bnn1tVm1jHLAYHsQXSn6DzTamK8bLVyoRLToHf9",
  "key29": "5aKumuX6Fdf7t1p2PF4kKNsEVYUGHcZ2wRDVhBepXFewqY9bDG9YiqtXcLZnBzAgzoVuBdBTNVht8hm4yUsfHZLm",
  "key30": "2cr6K77PNJgR4qPkwGt4N7ByY3kpHEgy6fewgekLp5y8s3CJ6AnDUe6oChTt2m9dLGULaMwvrWUk4Xybv2CYg1Q6",
  "key31": "L4e1FTJJuK8Nx8KYxgMprgdcuj4FeKMxLwRCqeK8EGSMadGBqkt4GV5GUPzLuW8vEzffS8yF1umJPVPH7kTR4Yj",
  "key32": "5otjNPvBbe2pSbgFMcpYSrYEn8khxmnhs9MwgxjLZugn3b1Nw4khtvupUaNmeWi6gyPUczD7hDp7PadX4a3oz88Y",
  "key33": "5C6R5T2Hf4p5iGreYgWoc7FR41jdgA72errb9sEhWr4q5Z2jbqyeDWPNdPMcVA8rHGRha39wcCirNB2gx4Vv7im1",
  "key34": "3NhdmenqpZEGcXu1VKEdXb6oC3xi41uthWxQhCtiJGo8fK2VrQEo3nyjDXMN82FouBtkK37J5C2vo3BMym4n4ndd",
  "key35": "49FahRx5JVwvcBBJYwPi2gHGvnnchSFFV9Z2LJtzHC95mYCdkHPzRJbML6TgyPgAGXrZQQaa259NDga3dyTniwUc",
  "key36": "3hxaMLjjcG59mwkRVskbTbFvCDNe9q2UXwRaKnzeMGCP8WXf37yxfJuSABZPkjW3wFVJN4zq6rTuwca1dfrPJD6N",
  "key37": "ZYeC2pEPkCvyz8MQbgggCg54GouEkQrq5vsyYzV2ejJXunTuXwo8XVhKQwxAuAfhjRwQbRfZGXGdXbefzSrzdv8",
  "key38": "5ftbyeuNVLHcx6Sqj81yEY12NoeWRDmSY1UvmSyk6zmUCn5LfMLM13QvVw1S2stkwyN4Fd7sfmDvVfZcVeGJaz6q",
  "key39": "5rxgVeGx3NeibaQ2uvJzpkiEuf2oy5hKqH7GwSjUUxczg2TXhGgkTVKqxzk3uaV8WsSZs4KL3aoBHnBqbj8LWyG4",
  "key40": "54QQFnZMaKb1CYVTSVVHgVAj4Cis8mRiixvRZn8wyctSwE783F2Gkz6sWtdbsXeWFKDRCxHNtVTCeyNZp6p25nPX",
  "key41": "2UQpqevUsPtJyMRQvx2gdD2jkjzWdiEkjVN1w2Jnp9j8y2PjnDFEiSZa8mUEuguZyYqi8q7KV8vUq97x1DLnGkvd",
  "key42": "4Ws9CSJDd9jmjobqtCA4fBiD2wuNdhWhR15zL79GNnRJHqiru5J8fdg6KFGS8FXRrXap75wtuoQ7W7BWKuqZ7dea",
  "key43": "58gQ1L5qjRXBwpWroN1aYmDXi58TohbqDFfZU5CHNbSJqyMGYygdjDTeYmRgk5PBH1t7aVoXkHDBYpsBLii7wSCB",
  "key44": "2sYbK1zybrN3ouSQKJp1mFEFmnEJgsNuqZe1WxJKCZtzGf6UrvdrQLKoNgFL1SqrE29s3BjgDTSkUryRbgG1HRG7"
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
