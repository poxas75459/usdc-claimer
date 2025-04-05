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
    "58ipNz65tqjnCRnwdQrtAAtKzzvti7BQjbDxH95ZsWpKv6CrhQtevyG4vjq8U1acyowfk7howoScCP62N34CXNhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UUTGsxvfTgpF3K98tFbmwXPNd9pgG4ip961wJNoZY4fVAugFQpVy3u9oyaWzz2qjJo5pQLixb2hjr7mcGpX4cH",
  "key1": "4vBKNQE5xXt4g8MZbfQ9ZfEpUAGAG5C9VfsGC4HRih7xsbgMYdrxNfEhY75HjkyZ5s5oUqXhJhHJyx2ubkD5v7tb",
  "key2": "28BrFMNjLVd5ReQXVD1WGii7hqNRUvNNwR9gkJG99nAc3quzAkxobRboBoqshaQtWT662pbbFncQUjJiTGSJ9M6e",
  "key3": "5vtzYvzVThyir8JCsrrgx8Wt9BqvzHjU95rf6FdThjzteb8KAksX4RQvyNhqqKWYK3MEVWHBFfGTzwUzXm7EjgM",
  "key4": "HwJRDGC55AC75PtRCq4WqfjLk8Hoytsf2o6UKvJfpQ2tSoRJXan8Gd4qbUBdJNzpT1ohBAZXmZPmriJteH19pMz",
  "key5": "26wo8yaoS3du3pw11kv19ZiU6PrqAZaSgR57Gpag9MUjZFQLPwL3D9bCtqP5j8UPo8jV3iJuFf6XgvBxz2Vmo3Us",
  "key6": "3oCph78UXBRHcuRYUUabHcNPMstArwnmN1pYmxk6QYCrHtRNL58bMe2nszZkhb2XDUAzwiJHvG32YthXb6t2yaLS",
  "key7": "Q1aa8zYvuQ5kXuKuyPjjTooCVvS4WP7xif4TTAiFqU4jXK6Lf49sDPDSFR3hmTBkiFCs7CbACFpgmoQgiULJVtD",
  "key8": "2FCCNHyMmhFnFTQo8x3CTkU1rgp3oZC9Zskj7jX36C4988BMdgDUHZEzs664QE3sx4XLDfD5Pb7bw1btVVUTUcSo",
  "key9": "51u9UAtAfyp95ob8ohEw43sPHFkEbFbzcNPTF6ZPBbxLLdPoZbnKfi9Jxit1XxvfyD8b21zuUsLQiMFJagfGtuBT",
  "key10": "2X2Wn7kAUzs3uSrJSMCWrM8xx2KoXWfxt1hHdmF9WaUH1xLw1HQ8q2eJ6fZUp5Fu2rcnmWFof4TSNSMvWsMXPfjn",
  "key11": "tTYXh5shtHG9uCph7NVsgH3mWwxefDfuGB1msKLnT8CCPaCCzvMCh1BoycQ7WL8NL3b6FxBZ8wwaM3WhxByFiyr",
  "key12": "2L94vjvmXPaQVeNyyLLJgcgj53Jy8egTDa78f4AWHntjrLkEN3n2xN8fJgrdqdvYCS6254UYrkw1A8QsMzeJeVhZ",
  "key13": "3HBTL5KffVUkBcRaNVrkawDwhGFAwZypmGrrWZdY2yRcEXvXppAuzzKGC9cMwHvfqDBQhZKoRb9PEwqMU4HxvbEM",
  "key14": "55H7zUsvn5ANGEbpXBdPfsimAWWFe63EZPFVHr1TYxf8S2b8KLwmRYKpfqTrsNhRZux5QnGrWL4x7AfEFFF5srLS",
  "key15": "63Ep8ucJkPjfMFreMmzSxijMaYsykwhUBwBqBnjQ4THBUbLkT5JPD6aXpKTVX6HYwDNtLEkRqqedTSzkPzjvLH1G",
  "key16": "2fFFdvq9TCe6cmm2cd8hRWkiKyKPvGJiTKEzLuQqdqwAkypJTm1JMXGHSQLR7Pt5h8YHSttTSuTwTQYQQ7oxwQYR",
  "key17": "2NV4Gr3TT5tGGzkiVgbENpG6EzhtX4MyHHDcjLezzh3w8JRoVb1vBG77atws2CbXihrWwVJ6d864kXxJrpdhh1gQ",
  "key18": "2zVVnwu5w5GhgzM2hCdeA2VJGQRiosnF9shYd9JGfv4FBnEDDJgdwDRVGoDqQPzUgmuEvGbTz6rgHhntyAALXsMH",
  "key19": "2urHvRBdLn2knW5f9G3tTZmkGS6Xrh97GzcqvfDVocDaBpqco1ckcXW9Gc88m52fDDykxyzjnf5pwNntJUs2QGuo",
  "key20": "2Gm6aX4hEySnTxac1EYys6ts2AoNAS1iTkdWaELnptYeqeDHDGPimMkZiUmSF8vt1KceXFSfG3GaNM9XFNw5Gh1c",
  "key21": "2vwkzddw5PQn7n7Xs9xdYADcgWSWFgiMkkYo8tdtL54hSA95GpjBgkDaim3M9WFBXFwcq5B1quwXD9w3ghbozNgD",
  "key22": "43M2qNXWMtpedVEqq1Tb6JDLcznFhW1h577tV7e4dJkNNdR7qYVveE7vaqht9kSnS49KeiQdzwzztUhCQcWptKrN",
  "key23": "EE8BaJjAeCRpFKsBfMgW9awWhBJ56JkidLtCxW6mJn32ejK7Di45Tm5m3sUbeukKidssyRjKAsz11HNYbtkt3Z5",
  "key24": "2yJqJeRhE3t8kJvCBUdiwHrZfEHd1Vd46MqxqAEYmxpTEvAb3HpeGteZvi93dt7Bp3ahrowNH1k4njkVuXBd6x7M",
  "key25": "42ZVzKKuajG2QrXkVWb27LtsTy2YVwyL5Ha7CVoXrEmfjewKZxeevp3C6x3vjASDgsomrtVSp5oAHJ6sEsdTwTjG",
  "key26": "3FBXs59WKHJjAnipe1ThU9yKgBFiZmTWeXJikUYfwcsqWy67fYShnCMGA8HxJXcAHQn8XTJcbqxzzH2jcX2JY8jY",
  "key27": "2qiDo93kNQRbVnSLLYu2eZWWSm2J3McZ49SsMtHtG8pKDQ5qVwBmTTvuTEX5EtTWCrCR9c2inZZtnB9KTtvZ8et3",
  "key28": "iPZdjxqS4c64SzkYmXBZ6YEC3oLzK7igL3YpNVzGCDQSA8z4rT4VRNw3FKb6L5kHxMUt6T9ik3HF8YoDuQtAgTr",
  "key29": "2hcArfTGFTxxnj2ZFUFPzos2YLxkC2yfTnnouWQ5wzfYAuSR6qe9Rp33ZCGT5YgzPnEzMq2zfNXFNdpvTxFKFdxh",
  "key30": "5iLgyEAqis7nD6wwnYCv3pD4DVvMqaGC5TPy1gdMD3v4ark7qotqC5L4P6Ghr5jgpGEyBm571jkgzT2ozR6NiZj5",
  "key31": "DHTjrL3FqVN4Gi5BQEfKE3f3o9B1hDHXqGuibn69sRPpS1ChwdEX33CRVCf76UBMvJd9jiY64XGcyLbtFM9kEnX",
  "key32": "4ZmEya9teA7qpfBbLNvCawKAvJNJWwNaqH6sMLLRCPnfM9EMu1m2hBctrK5Ppeus8D7B57hBjKEdT7BYLvhM9qSa",
  "key33": "Qtxx7LGgzmiWQdk98ZjvqZjKQrrsDwJ4JhoVnGD1Wxd8fXDASsAq4dE2CKNhfgzEYJc5qYyYhzzxVYgXTRg7GWF",
  "key34": "uLtjSVutCmBuaX5HWL6PmBVjpMDjsCSeUmieJEnASpu9QFA6iR5SesaceyAoZnXjXBxav7Naz5fE3vBpYVoqvES",
  "key35": "3rGjHo8HnE8quZbPWVvwkummYgWwK8gcSkMGNywxU5WU3fTwMw6p3BYWsRShja9UiA7RBUqK3SczweuFoX8KdRnt",
  "key36": "2kHzgUY21wduDnahHtTeMMxWnK7UUNC7bBg8Cd1uhYzocAe62F7hKx5wbECf7VnXL8cdkzwHgGtGAy6jCmN9dzLX",
  "key37": "ikJpUZq1iZnX14v6Nh86EQ2wpTtrw4WJJqYT1ArRK9dK4xP8pGjJVzB2MmBmdXHGDpGrPmsqaan2qSTNYPpnbpU"
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
