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
    "4s4a7dnkfKFEKri1tL657xVr1npwMacM6SPaVi9zsp6vhpig9iSBiMQJMkBJ7xgmN72EcWQc4P5ngpzs1JTBnZsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7cFK71ToMakQ4Mg84WFN5RGpaUvLj93AKZjuK6nSRJEJyw9kj2w6KHQi2NKthEdKm3T6PAwMBRq3nYSJd8CRvw",
  "key1": "54AePHHL7vcwx5V7yhMnDCKT2YskVwjJuQVHo6p7hewNkKKfPuTVrYnfr1EarwPgtbtjPXLA19jcwR8Kzgsqh17v",
  "key2": "5Z2eGJPGp8R69NqZc8xHDG7JwZb4jew6p1kfV1SixyH84oYNf3e7wQDA1EgGph9rLekD8z9dW1TkaJ5KPdU8uAL8",
  "key3": "PvXS6EhcxY8eWk17p1TbYwKu5P8XLxMXp5UvTwcYLHtQZC3qBXpVbX879jXVj3KiKhK8Aw7foYmjyE1nUUoXkN5",
  "key4": "2jUuEDM58rt2FD9Wuv2czBCV5ti9trwrhkxeXWXXzvPXc1mjpAxfhaHYQv3rGn93wcdg2WWa1n5UDK6vxATvv1m2",
  "key5": "23jX8VSnwe3HJ1FaPKvsRGXMmcFbTiKKL7ZNUvaEJSMQJoY6WATupy4YyPCxiNUbbrZ6FhrXzcYAPdmvBZw3NaSM",
  "key6": "2EcJnen1B9NaKE2kbNvjio2QQgwGwA79rHB6byF7ciiWE4A2wcgoYnNjpGg6QZE2BVsSskkgXCbbFhdnfScFRQ4G",
  "key7": "xeRgqLB4aWbfkKwxBibcGAjmA4FeBcEaqj6T7aZMSHQSu4NPNiCXAkKS8vbFce2km6tJSRmNQr8ePAhY6ie1R6D",
  "key8": "3hwft3QBekmp5pXWCPD3sjg6G9QSj8HnCbgwQh6bXucPfBupbacAguvhFMnxm8fohWhDSvnwHxZqQcHNvxKsz1Kp",
  "key9": "W2DgZ2zeHSJtwwwQVAHUsAy2waTRYsQZhN3XRSUKv5dw3p3UFNY67eHEM6ybPwqcx6TRDTBz35LRNUpKhcPkZL2",
  "key10": "2w6KNjGWC3jFABXCnpofHN4r91jxeUgFFk4hSqvF4HRibix2jkbDNp5KRj6sSbPAuR9G1iGGrqnuJFdm4h4a8pYd",
  "key11": "UVhsNrspagmUGgph2Rw7yGss2picQCuDxaCc3Sbfq8j4gPpjpTNGiniyZQ294fTYvWyH1QQczXNoXwiSTZxjxvi",
  "key12": "2mnUVzZY9mzySnJ7vEzrL8G5YC6qAMPA3qC2pPK2jtCsM4SzD3eKcERUHkPUmyxSaPYoYcbdwz6xTvn6h5mzKNpm",
  "key13": "36gQ9Pv7y4BUHC6NysYi3eqKmCTMPS5LRKUQHd8R815tTHhKr2ahtor6p64CoCfLLW4B8ZZxYW4T1AvuP8fCb7v8",
  "key14": "2ntnV6CpURqkaVaCEcSWH1Zbqtw9kLm7v8ox915MHnUVtEmbLjfy8DAMuuc36uBYr6EmwLfPQ3NY5EjsiFHavZa6",
  "key15": "2tyuf1UTumpRBfVbirurE1AhTqjhK5PRe9aWe4Pxun8rb6txrCnyyt1DJGqBXQZPy8L4s3cdmHgmfgVyH9hq7YZh",
  "key16": "4tznqtzzLhXGdhrAJGGj89tEmJJq2vXvN1FB9vyeoMjwcndY3cDgj95ipuvHBQcyni3FCM6aog7q1csDPmDzQu5H",
  "key17": "uX7Ud3vzxPXqkbTx7RJLN6Rnxphr5t6ubDdAQ57GDp8fsnUa4AxLC5uTJXBeygBNsnSrc5fWaXm18DY1G5urqbg",
  "key18": "43WTUE7co1Qd1f7tncVUczGiHC81cxpqWmcZUqNoJ5dy5kH1TVWtTa5f7qg4VFsA9ZfYeb9jNgcBaWehzwuBYEiL",
  "key19": "4dYZ5fjeREgzJrhkPCCKpG8UEFtfAGhwjjum43razog3eeMUzrJtKYqbCmz6XVsb75vS5swK7dpajp6qV3Zkavyv",
  "key20": "4p4F84f31s8QRtVUSZJuimLE5TPYj4NJLkYbmSxryvpJdgzrq9H2NPBqq8QYbqUcpdWs6nH6KpDrTpthCcsMmStr",
  "key21": "3PakDiByF5zYqBpdh4Xm6ioQQiA2NjaqEKDtHjr1vpCjQ511vfhXWVufZWojgCjcxAF9ftdw1eH6rbQbRLL4J7hY",
  "key22": "4zQWFEvXVMWocRndi5YUGF5NV71zkvsyXwEe8mc1PTjvhwd8L9yPRXEe67gsuyvTPFBA3w1mWR9LrH7Vr1nL6ttd",
  "key23": "5EkW7V26FuMK4zTaATgKUk2mLHfEXSAQ4esNE9YBsS3bgunc3nprGyEK6QJShrSyub3RrkvNzDc5uskLKkjs5Bf9",
  "key24": "2yjazRoKkeM8dRRXYs8qCGUCfQ3Dz4VK2Auak2CLTRCxatjjNw7RXcp6bRHJnz2E5TPJP3tGhT8Rtuj1CQrnVN52",
  "key25": "NFJ3XeGw97FxcPonTfH7p2VwAmV6zvtyhdTvK2fHbYnyBuB3QQAAYw9D89zTSQZMRXvpfhjaDdswMhtwopCVZCW",
  "key26": "2yZMXjyMCQn5mhbkwwXGrC25JySuxzfVSE2e4VCs2u9Hm2BTK8p52wC9DiQkpJ6WzAmDpBoBrAQ4cQjUf9CgTpKa",
  "key27": "5tcHUee3ncPpZVATds9UHJFufmKQipgTo64YikEKbP56vbNP1Bf7jq3UTwRc3vNoZgA3npBWUiwbsAVdMMN6sJRR",
  "key28": "5kfGHGB1D8nRXnUURxxJ6AwTuNFPS3qSF3SypKZrb2dLZFMbG1pLMQMB9MUeJnwEancxGJ7t55jgshyLiTkhLYz9",
  "key29": "4N6isyaWk8mBEf8977zAgpxDvWCDu1WXrna9X8BcDscNhBhTqLPKMCV3QQDmuTSD7UnEZkEtT6JJufjv3dXBvJLc",
  "key30": "4KXDUNHGgzGDvaUP96ijQwJmLfEooiS8vSAMbYQ89mFvrjwJ63Umg6LM3roHR6uvzTJc1omSNHffobTtsJasHtvx",
  "key31": "5SLP6LzH1UdZBa2BtAyhN2MqYZAkb1gaNTARjk3paZq3PkDs7DtkGuJTQZt7FvGFMEeRBzTr1xd5emNJiDZff8oK",
  "key32": "gGfk8EAxsJp4sP9f9ZUZgZ69h8g522yoknFjrL99kYv6AY69FqCT1dXm86CsPT28BCQ8Ku9WvVeMeXUmivJuAqM"
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
