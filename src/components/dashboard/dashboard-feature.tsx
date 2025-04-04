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
    "So5oTt8ZVnQaqAiaqF2893gV28LgJrar6qMfvBefggwLMjHpLaWrGPpbBhQpKqFWZzokYfGtDArghoJ5mtG9v9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JM6B6yMNtCg3yf9GZ5LrSpEXrQKy1vtjFGcrPJE36EvnPLDZD8tQxdc4adq73KrakhfGqmbi3RbCp4pKWeAHjnG",
  "key1": "q3pEobk93KgjZo5zQUFzpe9AyvSArpqBiBYKhzqqCX6S7xMDEEsRKGAfwmjfyVihtZsYiqNdF8GSnXvvApshMjj",
  "key2": "2czCwspQEU1498AP28HmMSBikLrxdXD73jbU1UDQhVvqLCTSNyqKJFL6RKCwu9PmApxLbrVsqDjrepz6KU3Tu5xa",
  "key3": "4wNKVzhVioZuSG8QzYMxQT9vwXMjA65LgHEFms4QcLdFUTg8STJzoiqCZrh6aB4HJzLuXcDYWAb2EnN6CyDoTkQP",
  "key4": "44jRRRpzKvX4tBbvRoPW86U5ZtUg291Mp5pMckpcm4Z7jP6bVoR2cJaC5CqcimNfEPzC8C8pVAJ9ejQjVydwQtBH",
  "key5": "57qNeuCm1fuYZamtLhRKCeGwyF5Sa4Vyb3Tpy6hECLV7Ad7WQcK3d6L485WPm8CwbBSXv9ZUtBnq7RpNMqfWCXnR",
  "key6": "56xvxfRowoKauB7YmLACcWjnwd6E3mLeWqfbWxorhHrWjfW5x2Q4LfzkSXXrLSAC6JL1eWKfhigC6xrzsL7QaWJF",
  "key7": "2NNNkjjs5JHxjbPUVNbQZCWnFe9XN6jNe7FL7F9rN7uDVD6wR46JUX1xqXSUCBpWJbb27n9bEPamDW3RuXU6CAJ7",
  "key8": "4vfHytGsPCGS6wgrUHvBSSq6vxcbNw26PpzwzVKMzSNybRATYeNYmydHdqyD5zsDpEWjVssY8Yey2NLST6TtQu4c",
  "key9": "4vtXkPXzSSJsQjLpRx69YSRkHJyajYYruAjwZVVP1P73XSZ4hozQg85gNNBVaEAzRm4rMyN9JUHFgeXi5r81gNFW",
  "key10": "8bFehsHmEkavxKw9zr2JuM3dWopw1qpdjScytz2sPMFqUQAMAt6cCX9JKsnLPMZFu3gAwcgbZYsixVVgML51sqk",
  "key11": "2cDYd7Y3jcWZuwagWGsowssTFJBYT5NH3BwW4Y8YSWVz8Nmhf8RhN8TQi2mt379gj6D7t4Xtm6ungXkKfTmkB7wf",
  "key12": "2FYgZqzCDjnks8c2UPCsr6dfumboRAXoxV1XpBrceAvGUWJYy1StVc6dhysBiAM9XJHEM6LiiS3gt94pwvydH1Ta",
  "key13": "5ibhhzJzHETZJnmvP6YdYfjhgHcR7H3CdjNtTHuycvipoZWYnJorg5FQfSoRWdPZqLsphk9eSBMYo2zukWkVXCfn",
  "key14": "2xQfnmDnyZfnXHNc9G57XRkaBv71q1Nazu5CTMHwZmNWAUDvp1T26DeVGDKwURR2amittDiY7VD1F49S5sR1ThaW",
  "key15": "49o4QaSPg3rBdAezRXUnwDrLHUXxJGf8Mj436YCovJ3AUHohYw8feCBDPSHTqgKsMWqtYzdMFSid7YXQRYycJZgG",
  "key16": "3pJBT3hzqGoS2mXX2H5HVFWjtcdv7uxp1RMJDN5s9yEUkF2wr8P6Rr8Qd5KBzKZZi2DJWb7gQxPHke19xaBvq9YM",
  "key17": "8GaFNjuJ8qa3BCKYU5uBvjtiBg3xQJenSR8jBEdtj8hnUgDYYCubxEcWhpKZ4dFzifb7GthDPf3rWQrHVjFp6EN",
  "key18": "qX2SRZasus1aoFmY2StoMqw1DvBJMaWSqXLCxt4L1NEj8z5jDo83aSbTSaeoA87WRS8dEnXiYmW8Nv65xUr4gcs",
  "key19": "4eZgXTsmY2JHNVBqAPwAvfzCTGj1GV3Ed1gYye6sRr6KuP8oYrBay9Mp8gtiSvdqzPMsAjVgSKhsniUd7LyCEQyj",
  "key20": "2gM318S53NEXXdMtRfqUKRpqGd8EZ27vdp7GmkKQ6n3fJD3qBzAyrR92xUeJGARP3LechnMUV95JxV6XfSpPx3u4",
  "key21": "XwVNzUCYrov6eVdcNH6iyBXiUoQLonWLo5KYeZVDGNMMVK2BCZuJ1cXsmwjSUPUb4BgPmErF6KGE3EVd8tQHDHS",
  "key22": "2ktFw7uE2VSRch49huaewnTZRCgDDGYBPJS3Lti1tEQBPdknT8A4mHfVAq4xzAyUwQr3HpZ8RK5oMHFJnYmDKCUh",
  "key23": "5sdSVnre85zSGCgVBtKZnLs5wtzPB7eaEtikXeT7w8G6RhYN9hdrwm6aGccmWhthQAFzWs85qiPBcNNVPkBZvPLT",
  "key24": "2xxcFtsmLDo45GRTr6DWLPC2c3AXg6LqUewCiC4MFuk25WmWSxoL5b8ckngSyNUJ3LroB5khJqe5Hbs6usHXb2s4",
  "key25": "2h8z2UNrJhkwVcUe8h1gdyXQwn4J1M34gy1YHxABjoaVnAqB2J9Yj74vzksFEYWPyEt5qekxsm44kkqpLZxKtCkN",
  "key26": "3TR3ZgzMcC2LuZXLcnGCxqV41sqVmjpRzXqTvRsNM5ahshEev4HzK1esJ6LrfakspJFun7Dfw4wciBAgr1URdBnF",
  "key27": "3i5acvjyJ3C2U4frpsg9rvDuyGJdUqoYn8HHpWN2a3baYhjumw15rsb1c4doQJUtTvC6tZqrBNZvNGJDCkd6n1XB",
  "key28": "557yLhe7xEfo4JKY4zcWZCvSVM8FfDxy1vXxSPcUMJjApPn5V5LEbxL3MJ9bhyuR8BQ7ud4Yj18dViMS7JPfN4NL",
  "key29": "34LJWBHfRVshQN3axh9E2BjA3yGB7dQZJTTatkTU8r6SpHiYDqUN7tYtCZw9Df2piTshUsEDMttyE1imuqPAnuQ4",
  "key30": "3a1k4bSEQZFEFcBdJTRRz4TaLVFdkUDHLaes6ZUkFAP6mXDGFYoDy5GDzTJzv8Eyu8K8VqDHaoA9innCxRYP1s3a",
  "key31": "2gVhCrkzMSSANptKANN9tUJyF5wFwnio2CaXuy1KAWwL9qfzAvxC2nTCkm2g43WZZV3pLDorwrZo6n7uKRpyRZve",
  "key32": "53aNkPcMisqiFcNiwMJJrt6v5RK6QjKyoAuwhFUTbpLg9zk559Qp51jt8RquaNZ3FwL26mBYwKMuH2kQkytEN4KW",
  "key33": "4g5qbWuP8aqWJTAF1JRuPbNUMdjhrwbVdZTQi4bcipbFACfFct487YFHALFxXmtqRW1ZZxMrgzMgciR9nxVd6qds",
  "key34": "2AAgnJS69upTyXmHPCPK5Rpg4v6hDDixPVxz86pRSpjAsVbeqbCNbxz1KGsjZeJ4VXqug3QTfDnHmgkTibLPpUkb",
  "key35": "PK1tbMtRYE4GvhPXX9NFCF4doy2kn9cs31znhb4BTcYTHBvwHLVf9zyef6TeewCvMb4tnnSVYBuiXfxNJUPUA4E",
  "key36": "5TkhMzVnLuXz8eBzPudAu78te2Yx65vLLNogXYuRRJ73Ez4VVWRWpZfkeQBMCQah9ADjwMxGtzkRH7ySZeYEwxRv",
  "key37": "4tzyvqsjem4FENz2Nv6txotNGb8si1ZAUYnKYBNaPg4roZK2XUDgdBa9QksTmMqLtkmuC4tcuuqe6UfuTeHTwFg6",
  "key38": "5t42bnZY5fxYJy5WivuJvBpS3hKo9raDqWYFMahT2ev6QaxneMKRtNnjHLkkVNpFPLWsuKWKTzzYR58fRKT3NGqF",
  "key39": "668hRjYNz4sQNxv25TUzCvcAeDWRZfdhxxL7v5anekoJPd3r453m6EQA8gpszcEEtHqY6zGzwozyShihqQtvNpoy",
  "key40": "4EMovb9u2mTBMBvnL1NPq1Ut5eZiSd2XFxc2NyBBDqykJCGqEwqme2kZWkyJyiRg2twGxkHGNUAEW975WW1UZrFS",
  "key41": "5WMnm4kPDt6q9DCAjmPW48egc8SQeQbaubRyYPQUwrdgy4vdEQw8E1EbhaKVMaD64G2jqY3JfZCkG8fj9SEf2nZM",
  "key42": "2Zxb5jQwwov8U2mB2piVCff3NkqMpiBa717F2nMGNoQtEvZfTayvVettVRKnePVEQhux9KbNri3GYCzwXFsvD9J3",
  "key43": "35Yhae49nF35pDaKib963699T9AF8w3CG5LoCHoJKDEzJvdBmQZEkfDwoLWg3GUPsavXXoxLbRN1aEaznacgqvQC",
  "key44": "585m8vK9AQxaesw9321rc2tQEjHkv9rDDS1DJijvRuR9JLc8LD53uxQTC3e4RtWe1d27aha6L3sr5G8RPx8gisLH",
  "key45": "5YHhYpTb8LvqTQ2RqKbjccgQJwArNQPrVegEzFEmyJtrzusA4gRrAComNcs3cwWEioXz4nuPLxWn4jY6LQyAMUUK",
  "key46": "4L2GSpCPgbg89JtnFHMeS2TgqZQPcJMw3wPexFSEGRYpKdkQCG68RJDozH7sokfgYUThsQH5FNjoweWkH5jTiG5q"
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
