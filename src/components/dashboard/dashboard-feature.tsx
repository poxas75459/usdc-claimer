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
    "2LSg67yqaiWpYwQaeup5cBos9xU35meqdkp3gD5Tx6YjGibnSAATsys6MZqHpKa95ZahpL5LdGmEQ3VSWT6KR6KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P22ce1nj8PTTTDhosWdu2SSDYk7ooMtjuwpcM2fUiJcRcmrDzvYDWs99KLbZUKuYmv6UMgqnJBqa7Yk6PVTT2tz",
  "key1": "EQVJnB288ES48QfnW595iAnPKBotmeocCTuZ2TVsT2VTqhNwLt2tYJBSjtKR9EShJtnFRvmaEjw2qzgV5vGgamC",
  "key2": "2ieVaVBYZtrRh3MmENo19FQwRmn2QX4WdKNdHBYY1GVLH8jzXRYsHcLLFxxq38CkKCH219rEU6xu3gL5xQr91T7s",
  "key3": "2fJ5BLx8oAkpMXq4fC2RepD7MY2vFVGXK1iUR77oZTxr85n8iYqEhUYAqH8hFJBdB4Ljoho7MjTFMhP7oHLmom5",
  "key4": "Fnfvf7NnDuXh1N5JRwLtexjR7Sc4oi6f9BmYQDy57ikQqJ91ZkAPn23hmKCkxkm7Vbpq3WEyXipXXUV19ejtUgC",
  "key5": "5yKJxZ7HjAXHbQGUQAPQ8y4AKWRPaaoTnrxkq1YPVJg5duNSZj31WMBkwPRuXFtVJQzpyXdGqXKmJpUERWmWpJEu",
  "key6": "cpVZVYxKkKshVdAf2mb4Jhe8E8eLfUXygczHRY9LGW9eFFeMEGUcr1s3tADYiDAbEbgFyRcx5B4iZBqYkK13bod",
  "key7": "5aWHwnNBLpPHFxrx1WiXJCHKJoJqYWmXV4Z8g8EQfjqV1WHnbyk2HH7KiUxDfrke4Z1orBpHo29rNow74guBi1ZL",
  "key8": "2vFmoEkXAd6g9nH3NTUfoVwpGyhYimYvLxDHthSkmhQmf4DL3jANA6ACbD95vMDS5Zw4iqxJZWcDejMaBgepmWX3",
  "key9": "2hxpEbajPGuHPisbZ9HLxLrqLQd243KuqnAXphdZidgaGAxwdzXtv1wDLxyVQPra8o362tfcLV8tXZosZC84Bcii",
  "key10": "YHxK2BBj4CKMJcMLHDykRxsm9tpgE2DebuE3veMUJW4ZmBXNyKRL2xFFKNVup1GQpeEhST29oYv3grFMRJrAsZ3",
  "key11": "28is2Ceq8vqFdAKhjTkqaBE9AhJfBYbRdVkMKLp4PR82qCpveZ6KLj8PBe1JbqWHJW1CniphVLTCXTLU9ZqtGeda",
  "key12": "2KNWsrhETpxSNXR6KA3j1ciP2hzrTBDjo4S1vYGfRVP3Vikf3ZsU4D1xXV9nQkVfR3LgCkxHfJqa7ehNyUaoe7UL",
  "key13": "2sTatLxebJnu1DTYbgqZeHkbLxdanEeoQVQRg1LQZmkkRjmDBgm1ZP26KitwLhzritqadQuX3PLHKv1FYYnA2M6q",
  "key14": "5pbwY31YGxejPV1Zouf7HNtqSbZSYSkNwQcrEunxKxPNF7XiEG4Va7Jp5cpVT6Am6y6krnC7k951dQnk7kcCqSeZ",
  "key15": "3eX7gULqg3RK3acfgHkZV1zxjrXzos3HWZaSfGjABiJVaxvbYvwC7rmhvnx9e9WW2Wo1bW8xaT9Jmc7UA1TJ6TkT",
  "key16": "65pzNtucoZ4HXJmYZV5WUWxbG7JQRMS9HadhdDBT9hT7TdjmTSyX3swkrWahYuf9et81mcBpi2UWUSScPqZLd6rC",
  "key17": "21Jn5ENTc74bSoGUbifx6kf6aTwT9z6i2kZKC5fpuYsugywfPH2ZXRqySZcxsKNU9gG5yuiAE3AhSWVTQxL8wfLW",
  "key18": "4FKDgH8bCKWvpA8UHamSbdfYWC7jhSccL54fYfV2f2BWepDySF3AbT5ykgVpscytUHPbqzdg25BAKi7kD1Unp1if",
  "key19": "2thwLB5A1vH2gEh7aY27WtxKgzbmW6bxpt7PjR1tdUPVzrRc3Rd7aQu9jVooPJSqVdWH3mRrrgvByvJeTyvbpfE7",
  "key20": "4ZqySs57XMzX3SCYX998RgeDbpC779NVu8WF1f5MwDYU6e34yQL3ZaaK12ay3kdb63ULWV8qGtwJPYBg4t2yvAPN",
  "key21": "23FmjXm6Hw1QJYvAcAG7eLDMucumJ3hiDNT165CEBdpoFxsBPDJkhQNaApNaqPDHi56f1v6EpeeGuY17GgbApH6D",
  "key22": "5iBxVa3mdJ98PibgrCPFkaTbkMJhAukN5Xe1BDnBuAJMgiKesaw5kZXtB3ZWuJdGFMcJagUE6Vw4VaDcbJwuEEKZ",
  "key23": "4f9FHsRkBN9bNjv3afgnd1wHRYy3CnB7kVmoZeK7J9FYHcrUMhAQZwp6TwW6vUrBUBtKcdfrjHoCvGzXNwL7PLmV",
  "key24": "2w3qPz2VeYe63U5Kvx6embZP545NgnsZp8Ax93Q2DDGXxsYi4CqQEbhvgPK5xeRXYifDFA9PtHezvvi618gKBjNd",
  "key25": "5b9C2jAy2e2FbAdbohWWdrr1JT2tGrf6c8mAJDnosGoL4o61bFc1zDob39A9qQXk7Shcwj38GjKrbYqj4h5ZFvdD",
  "key26": "UtEYysscEvLm81jp4zQccrzUAcAK6UXzopUqjEuuYribRjX5AeomToD7yP522pR879fMcRYXqqcooDJhAdEzpHu",
  "key27": "Z8h1gMwMeZy71VP8P9RRXuzge8XGZDrvxZDp7yTCugsrAoei6w2YMDYV8MjBU5qceuGxM3irkkJ1VFa6wxyWtEM",
  "key28": "4w7MWxQtbjcLwYz7tRUzsEqqgUtWFSfm1ccjswKPzdPecwDq2Q82RoFHbd2Sma13WF7SZFJZhF14kkdfx8kN2Fga",
  "key29": "yYwxrpDFXVUTxNSBc4QawQQqBgGaJvqPpLr87HgFzg8xd5ZP2sidXZiYqyT74q8xcSJv6EjbW19pFPbmPuT1QMu",
  "key30": "4yHHxZuYQF5VQ2E6Hqnrkx4p6jSXLvi3rtwRC56gSwRSgpHfUQKLjhscPRdXsaY43SU2EmNrdGjLbgHrgTAvhDEh",
  "key31": "4qsm8m9TrQTJh5RikVGRdVKZfRGTuiCUGEtW5HuVFR7Fqn4kxsU3dCpZJ7ZJm111Fx6DK2P1QtkcLJyv3nc6Y5t2",
  "key32": "UaN3EEZQ3Qyu5XQC6cSELJHBuYaimQGanxHdaXPzMDKNrFU8wtuLQwiouGciPJjZ1HyctXBh74pjeoFZdTJrJE2",
  "key33": "2pCpwRiugzLUt3h493xBhb6cEKEMv6rbu5t85kBJ5v1Q1BvoPf6B4YRZboKe9mZtqPqLySmrXLCbXAThXvxvmMo4",
  "key34": "ZbrpF3XHQNSz2R4xpS9YR65iUQ7ymHXsUmaS3MtsXVMQNFkraSB1ZiYzoQvjiRQQ2Q1obUQZCkx2A25zQF2tyxx",
  "key35": "2Ko44A3P5agRdBVqnD6Dd9EhMLiZAQz35mx3XSdWMPUGTCk3njZwtHhzFFbQYb3XM2bu6SZzrCpD91emzwUJVjRk",
  "key36": "3oiUGWYGztHAV1Ev35XEcWEjXQTN1kYWvLx5NzzRjfmSoh4FRZwjWRXRs8fq137N7PmnzHJ87A6ZUbtUd2u1fuiN",
  "key37": "xJAcBJuGqEiC61MNo5A7jEPVnfRwiCBLshRHbGgw1ztTdNdHYPfjgKHZLkUyMtChH9QDYaBVGpCKmLKaET4iffs",
  "key38": "55SqxyprMSuqLRurEXPhtcyLsoVBvrNKrrJUYv7c6Mmx2S9maEs942vJ57Uev7rfL7gSrWVBgirD5bfyhTFgfxU8",
  "key39": "3D2yzCizABNJZ8DqtkpZYsQLoqkTMHqkNcygWrqxLU3RBfXbw11yWBJVpfmsiGBhWtQokW6WWognhdBpLC1u4FD2",
  "key40": "3UBFn3h3L7YJ2VXkgpNAaTnduDaFYFKUP7VchWKVcuAAYYKvX3ccCtMrwNJCMd4uL9C7JkgDcLigx2CkBf3rwmMH",
  "key41": "5ftBcxyvz1SAgwf9u21uM57MXyR8bsiGaDN3VPyoCoQSkVvXfadDDDyN5siWtzMWDov2bbnjKy8r7gwpm8AgdupP",
  "key42": "4DuqjJyFaLGmnfbPd9ibG49ESvg2PgNFitpz3V6Di4bu4Y2fteQatCyKNuEYf3eBQE59r8JmH7qQBZU9PNST1wcu",
  "key43": "22C5nWy7ExgTjGycQuWB6VPmiK9bD4amytKAGeK8Duxu5WAfdpEuEnTBKvtqrPAFNcY72iUAvzjuWDtH223m2fxu",
  "key44": "5vuVNFTM4No49X9V652ZFu3zKTNCcdWit7aD7J7MT9Pp6N4viRxZfJpfMkQBeXipPFQY9ExAGyXeBktx6jCgSTV1",
  "key45": "3ZNUVJ5jcQsNMGngr7c3v8Tyh1JY8ms2TvLWfwYg5A94ZErKB8wnKyqgDixTnnMwpNJdAvKncsxkTr2inPts59sa",
  "key46": "5VNJzGsc2Ye721pqjiwKytKGZi3kaVdmwjJ5Ct3CnXoZJqqcFZrbu7nwzvWxywz4A7uZVknZR61dEcZhX7YgSLiJ",
  "key47": "3nGQafGE4gjDjHyPm5h4WdamkiCJ9qT1THpfoZeeBNVpa1KnfA6HRFwci1gZUgDfbSFQhY22hhUb1syCE9htv6hC",
  "key48": "2drS3wXFKypy5ne9n3Eqy5JEk7R8Hm2UDPnRocUtvNCdxD3Ma59WKsrqxySAheDx42aBu7uZAGweAcn5TdCFUBfW",
  "key49": "43yQQuGNzhCkKor1d7STz7brhUFg6kvnL8CyZprdutbhVADTZ2ZXhtw9QKk1dYKDhCHuCSGBAEAc8Y1YQEkDJhic"
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
