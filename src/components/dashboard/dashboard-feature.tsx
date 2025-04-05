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
    "5xeQAs5mz8K6VEt327VcFBztF4G8bhNoDhSjSif6Y2dujGVntYfmRoRkW3LyHYUuYK3Ni1opraG6BUeCboWrNbWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkuVtD4HDk3PYfeA53zKFSB4kNw3EcPunui2NGKVHoPXNQ9pwfjE9u8jgq7GDPDE9xwLa3wvv1k9MiJExSFGVBW",
  "key1": "2esqChaapKawJXPbSY9Yyws24FHD5jky7Mexs3YbYeucHctHcBfF3zeEXAQq8sSyerivcz7mFJzctvqghhTFojXv",
  "key2": "3SBL12j9QfV227Lu1RoBUR3oStkzCrVEE3XSLineBLab8nP4j3S51nN8Vn1TDRTTNCwpwb2q9FWt6mqwr1LfvKUK",
  "key3": "D1qBrSv6y9up9Jm8Bh191XMzFhfNKGHG3a1KYsozg9v8RmCfLoH8CckTD74FHExBuus9UE6vPVT83sU8E8CuDfd",
  "key4": "2gGuSGLMBWK587gVsSwDgURVksqxns5XevCnBC27akYaN5rq8UqWSjqKdG2FwkYxRtzuzYxp7nxREkLCY4AHYao5",
  "key5": "4m9y4zsyAra5M6bJH8GjGaZiia4Bmw18a8JEfgd7H1gZPFat9FbcVMFUc8Tz9jbwcmq8fiXDJpMx4DiuiXE6Gfb1",
  "key6": "5DhU6GfyN5777WW4vfQ5ySBTds8hxJX6wh1c7TjpahMr8sbeyG8kxFe4kHYD2EWJwFvCZTxNCrayw1cUtES4AheV",
  "key7": "4wURXVr6QhwoPGHTYRvXb5RfchHyb8oH38UWCqwxZEydayVoe8gNeNczZA6V9wmkmpaxApii5deDirWGZmewGkH3",
  "key8": "2UmPh4Q4jc8SP2vELWs7JDmVx8w6UbLR5W6Aimku46j6nmfjTkqDFbKiM2dTY2whFapwn1Ti1BBtVqtMXmrN3dM1",
  "key9": "5thhRCSrpb9vVBzpXYtQBVYi4fa3Rj28XL9JpQgNopysjACamzYetGRELsEy6UWn1sbUpkkqnqBi65PpAErFqHyL",
  "key10": "p64RpFKN97gqMAxAPvgprByV8Gcu83qPg6kHGcRnwVwuvCPCV3mJXTvYezEYUw9gGV3F8mHWtxzFHq5kbPZsWne",
  "key11": "4gdbfEEoY3FeRT8vdavGCzaSXNxjWMZjVhVC1DgAHNrryehoYKC2uXYNyqVMvuGtbZzhXBSpgWs5pT6EzJ92BF97",
  "key12": "v2dC3y72kLmEKUpHUd9siUBf8KTDinaY8ZnSRCdCvVUiG6zPiBjddiMZwDmeXSuA9Ve5CX5nn8aEmSm3avYs68H",
  "key13": "4dU4fhZxA7LpeYdTcVBgu5s3cz7WAWusnxPUaKM4B9Q5xginHVh5hEvsBxcX1Zad3wjaEMCQ46Men1BvATEZEcy8",
  "key14": "5SSmNfpqfRgVaWz995KKjHA1uuY8sfrcBJL2JK5npFxPvv3GwWg8We7TakBmrgrkgACshnKVZqcPC55yQoo8PFyT",
  "key15": "LUrc9MjCNLyRoMmrGwzSiR7xDU3iUEArvReoNWpEBDFrZzNDtywisA1bzTNjW7F4CTCksJLr2fti3HJuZzXSHPR",
  "key16": "5ZgdQ5JUkNdsnQAdNgNzMaSmfczaTvn5i5tVkpTk4nNRVHjSBYpZ2XVLsnjCFhQg6GfBPDY6ZotDxSrzXr9hHvqD",
  "key17": "4Z2dWioFrnxSFEYkiQLnkzYf1UfLwKhcsXNudkYQvhoYY1wh5nzXitNsEBYiSyt8kn4bBfExLApfSpfCKehVxreD",
  "key18": "4tE1PCDz3AaRVefHZqm1uaYrcRMXh97mgDRjLZgJaAypChqArmjN8HocSTSnACNmahbP56QidA1LyYbDbZBzUHzV",
  "key19": "3FtYUg8NrA7oNY6wBiLxCfDjXgxRfNnYpWEmRcYuoMJPGNrmAx2UdmGy6RKmN6s1SUW2DwG1FLZq5nKXHiA3g9f1",
  "key20": "bZ6BhZ1hGdwVAp4uTW9UQMPizKop6X19C25hGAs2tgoibkgWa42yTvHNrq7fxb5Ct898w1orkG8ECbr5ECZCWSM",
  "key21": "3nGFYa4YvVbMNZqw2S26NwkU2kmXB1fwWz5P2TeGJc24Y58YJAUDTA4mKTYWSJv1Ga35yhxrqxy9yrdDJiNtJ89q",
  "key22": "3DVdu4sGrG5BJRwZFecQscCZ2zZ51mtT8PzFTwjczizSSB6KJ2k6N8HEKy9Qbork6u4oZKvmsPVtsS9jm9p7XBgn",
  "key23": "588kuQQDWaD1AVCVqN8kwdMvZgkGzYVKc7cFKQRWjd4XNNXHADyft8wrihw7FnS1Aw8FFrgjhhp3cyNaa89L5rhr",
  "key24": "2qCLbVmNwFS4arAYmwQeeLw7tgKJhkbAzeeM8Hs39ommYBW4pJHeAMo4DvNqyQS8qXnHdywSjsgbAM56uGhP62Ri",
  "key25": "VnAh6YuXYPQnNQ7zZfPkMV6Fpr7hzhSDSTVPpcV3YJ36rYa8paDEVUyWU67ooRvB7i4U9PDBgTim34maRXtRo5R",
  "key26": "3EqZMhVqCCMf6syYj7m1PJWvJu8MkPxprEuDW1Hz2LWZ7oi2SiYX2VF2BfJVjyWcCduSM23v44hXhgpaaeDhHbaj",
  "key27": "2UhSVf5hQbA4C5aBNXcfVGFj9eGu5reudmr9aGWX4XvXTGzNJSGp2PEgzuDYgJvA1a3g9YKvDPTUUU7y9KPk4PFu",
  "key28": "5PVzLCkW91rkLWw5Gjrp5g6eUBa3dyrCs7QAcew8x5H7ZaqNJ78iTNfSrnuySYXdFqambb7t78qCTocJKvwBzA7m",
  "key29": "5R4bTaM4opE4KA1o62Jf9k2BWH7nzqPvokZaram13vuvG44fUu8eb1DussUokihnPPdXxaxvzXTVSz1oKdZUCwb5",
  "key30": "2smPk5ksk7PLj3dnu37rPdBH394TvVusJnYayD77k71n2T4AMQhq7oUZwybaVAX1kzQfXavUfVNc19gGvo1nci7k",
  "key31": "4z7YZjLPKBigt5grSeYKWpg8VUMG1UD29V66bXcHqjkaBJuwcBszK1dXyZ5WR2gnFiTL11Usgw1kCWtbQ4FGpRvt",
  "key32": "4mW3RcFNTet9nSoTxXymLKMUi1cR5KFpSyt6JBjbrS9btXT1jkrT4KH3XADDzPAo1tEVr396GAZuyLeM1eDxAHo",
  "key33": "4eA5diVrq1P31sdKF7vcUAFkdkeBH5dHFF58essD82tZh6z7cZVsab6mfumzYx57dhuvevRdoqPRTwh1twpDveFH",
  "key34": "3fjtqcBRViM5QqjWRoC28pv9aXLmjCCps1qSiX6Vb9kU88H86CEuqsMgw2fNqX18eCbhsZWCiGbQNuXKYyhUVkcP",
  "key35": "2ZprRS65ybdimcuy3h7MLhgkmTtwRrVGb9hSdiHx9QmgRNJzn9fN34qo6a9iuG6vAXYMg5o2tc1UNCrFnaZ8tHFk",
  "key36": "2V6PAXqEJ5AAN4ZLCnzeWSPyywFERLsbVZdLEV8bgMaCqkEBwXphkhJSfqyiigmj3vgaKQxr1M4YBk7XzZhSLXSC",
  "key37": "2aT4WUKsm7TdtZGT6dQMsxhMdpomc7kRdrfWURmQgXo6UBaj16xLv6BNmVV3eJBhY3vvnDypyx5fkFfZ1W8sKsWP"
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
