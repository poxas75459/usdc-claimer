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
    "4cabMxwPoojwmpHXfubx6JdXtHFr3oBC3nftVDMsShqSLFJ9H889AdAUUMHaoUP9rpKM1xzN3Bjsrp5JvvJimMck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxrxFjesjJ436cwTYCnDKEd9Up4zWVz6zB22AkG6y1wKaGSkFQ9dS3viBPyuKgcJKvwNwCJHNaRVJUgsw7r4Zcq",
  "key1": "4AuL3UxWPQmbc4ib7JWj3oKUpUiModtZoHEGdQ77AEw1VTmufs5V8rZGRd5eLRxSCVDUmGWEZ8ovkjgKdyDCHgUN",
  "key2": "5P9gTxCdbhHFh398vAYYc6wPbXzNvivgE3MaJ5YppnwKhHKifsUkCYgAyC3kTFfdfhHD9cd4YGiPU2cxda1KxqTn",
  "key3": "4f6ofFs7VT19rFbzGfRT9Rkk6qonco7kH2dFS9ywGamFFb9vTpSycu1nvLRQU7VC5ByUu3r2mP3KGeD7bRPFohgX",
  "key4": "zfPSStL5nXQxeht4q7boAm7hDY7ir3jsifsEwTVKU7EykxSW6ZCpRLakYVSWNjhTr4mVvHmDFEHuWjtU5jm9CZF",
  "key5": "t1S3s3LzM7U9ZSoqDtQNNsXsvzCEtdScTYSfTYezAA5wAgPcv6qhnMhVdpNrcN7LfBcxnxg6WRQrGPZ8Nj1Lwaz",
  "key6": "53HaJw3udbEVdrsK1Z9bZnrexddD7jCp5irRikQCYVm4jSTrpGfFK8iMuqQrydJWVk6vqbQ8Ly8rpRSPh1tyncXe",
  "key7": "jkM5Go9mb4aqsEkzKuZFBCXvfL42AwRP3gVg9yDrUEN25QASyK7U3D1Dw4MFtgZWDmsfj5h6cXaRiLp92Vv3FRk",
  "key8": "K9CEPif7sMyfmhrnBTM2RWsNmYeEuLK6kyxNPw4VWru8QoveJyKDdQ6jkNTCtpRfM6k6G88hjPQDmRuGExXexWB",
  "key9": "QjHr6D4fZp7a9LGQqgKamLZLUTue6X8Fr1ECcKKQX41v8bpEDmQkrkTQpxGYXvvp2yJeRsyRqwLujoaPgNZTyMN",
  "key10": "4VAP8J8q6rNPknQCkFLdWyTV933gd7LhogT6sJSkQVcCGtBfUe69hnpRrdCGbDgPkaKz2bxJC49bWU3vWrxtheUv",
  "key11": "5s1tpGWtTu9JdtftyQNLxFzuuxMmw7jRWRm8ueoH4EJ6NeyGwfU1XWZDxew955txC6A8uNZYmB7NjvqRx9oScf5t",
  "key12": "39G9jLA5XUh417kRqt1Q31Uq3k9iCydN1PydBCbKs7sZZBg3kU2CyEjBp2zTKhPyrdEakoawxCpd5S512BKJ4za",
  "key13": "3FLGrVot8huxQyhcy71KxkQMkMHpGSK9vbvVuiPCZ3ZzzGVs3pKmCtsdHSCHmC1JWTDzuEZwZBePF1No3qhhTHkp",
  "key14": "4iPzKLLjTuocW2o1xUCvDwJhcvz1ffEZy2HDzWXTsQwGUQTnxtwdfzA9qJUVynkZquaeidhgBn5TBEg8dsF5tkgV",
  "key15": "3YNj5JKbR5hnTf8g2dDmDJtYU1QqYpazyPMWNTWrSjQYq49NmcRjckRNyMKZ7BbFwG4YE5Bxo6Raori1F4U2dJ36",
  "key16": "5PQWNBhgNvkJ2Ewavj6mC5JaWT1EHLB9599jbQ568fbmajFzhAK5kSv9bbnZz2Xh2quvoA5ok6X9JLvnKt55j1bW",
  "key17": "3ci2eBd9buiy77Xe6ZyJkhBh8U2vM49yN6TQC38QKqtL7qJdgfmVL86wg3obVqi8Rthq63gA13UHxCzN5cVFWknu",
  "key18": "N4LRaQes4HbFvMoYabXwHuibHHmDJfLzKVd1JyJY3RVrrnuBrgHBvdMWXoc9isBSNjoLMbY3hRERvPzi9cscpwe",
  "key19": "1MHDMTZ5ozFCKzbUptQ7UY2Ge8ccRaXSo8w3JxRaHuWZ6FpjddXDd87eKBP6CsHomFx1hmwz7vHRCuKvpCLUZi7",
  "key20": "3PSZdmpcKgyu6QrTPMhnCkSapYhWQbLuCuQcPGCLmcW7ASeLCeXeKP3u6PwvsdWvGGT1c5D6tDWTXmdKYhBccFrA",
  "key21": "2heV12mf19mXEfpktcKawg88VBtpY2JYvPgNFpVkx9wkkAoqWxfzHk5LvQ8GLxH3ruU1vpFGQ8gKfcXhBN6MWFCF",
  "key22": "Ng8zGkg62BzApWcnjpwGFgfB6cJRvKqcLpQS2CuaQcbjm4434MNeHMFBytwbu6NtkdGcHVeeYiMtPxmvpR7TprM",
  "key23": "4D9L7F4juL8t3MXpDxNh5g8AAWscMu4DPQT1HvYEAaQN786VbvpAg45s9nGWA6FAzsW1ZdPhmBwuu7cKMEu1aSdr",
  "key24": "21PJ82mNuEgTb6DJ9TEQ4b3j5chMfyMBKxNPRrAQFT5hh7u1VQGaFovpCSzfxvfgr756MBushXfA3vvSSBBeBjzw",
  "key25": "5J5KGetgjZxye6qFzsWR242h3QF8FAytxLomndM9uoSo5LdSgE3LitCujeB7WoUmQ9vAfQBaGSUBEBLGTMM3pzm9",
  "key26": "52Tr5kK2Lv7ZJw6HkXb2cshE1zay71tnMu8Z3zbqeuoz83chbknw6eJnZUQeoaJ4ZtP4bTNZdRBmQuWQeDdVwqDh",
  "key27": "2fxYxevyTH7A9a4a9GzwUtVjX2RCvbgqTgGQBqDfaTqa5LEQvsAto8DLcqfy4X4LqupRBwVSuMSiPjGZbWVydMCK",
  "key28": "4LhubLB5bFVkyuqCBXFJprVv7eWexnrppbt9w77J9jfGREfCuSo9NBJdir23YjK8X1jNC8XxCiG2rnMRBs2AUrX3",
  "key29": "5fXcw28QJiTyaJM6wfL8v9Jz5DKYM7sghBmnDFfhBc1dSPjqR2f6BSFNacJkHAdKT4gLX1y8p8URkxXDWMqF91yP",
  "key30": "3PRvUazMhmJT49jKsKDH1w58nkbMs7mS7tJSx4cX5Ek16Me6VbWergRHbgfJ1vdcVD3EE1eEPXxqKmT9DcBWfQNQ",
  "key31": "mbB3nP2ZTH7gV629EsUJoru4FHyE6pz1oie9Vzair2F9sBNctUoeRTX38BexKRQLyxxq9EPRjK4uiUgYioBt83P",
  "key32": "3uSaX6V3jqqwf9Bdfyu7FdbfCDonBs5wbyqtDZHSUdfWQDECHp3dsyYpejjzjJ4cxAmZkoaRFpnZ4qhSfpjP2vmq",
  "key33": "V1fCXT6mUFy2DaKYXSLmF9C28hgZw4MyFnaGkRYRDBsGhc2HQYoW9K7yGkd3FZimBNusbf2Bk4Vv7j99J2Pz5fJ",
  "key34": "gAyPGQkDuFdci1XyVUHXnRT6z1SnWntaWxZREkEWvoRU8QsXovieyqUfPfnpJcpQa8uBHLX8ozqyH2FpTVS2oQR",
  "key35": "3bqmt1cbbR6Lo9BGTTAynsUuP1N98i12PvxRarmyZ6oNHT7TfN8w2MHp3BZTSsDG9BQeEohKjefKtdWP3ZETo9en",
  "key36": "4mBDKit9FGT8AioNsGTYxMtcM2sabNdFNY7tajoxFE9V7v22etUKfUbQf7GUStEAopK4Hz41eLUojtcZcFKmBy8j",
  "key37": "2zqo8923dTjX4yi1RCQcH3yKM8mEen9MLdho9hT3Cuof8Ugc1CPgksYtnkkyCDfipxUysQXJ59g98t6bCX3t1wZK",
  "key38": "4kFzqLUGRf5eitnQZWNYEu1bVvz8MgXfRXNBo2JXrKuSPgjLjdf4FkHUB8r8jPyb2yjArjf5acNsU5bJnLiouKuW",
  "key39": "4VS5DBrV7itzBQLVPtPXs4vbq34id8NDwaNqFLXVimCXTFik9aUWNaXfXVnUgiz7UmCqRcWekF3oCY6A4VvfyC83",
  "key40": "4PUUDKkucaxER2agNuyyJhEAwSwZCBvzLGssaCYCmYZkcY6DL565B1RbzynSt5GAezt2PsoaiLBWkWwMDjRMkXQ4",
  "key41": "5j8hpygfk8qCm5DGARaef2nvwEckAd1xU5dvFQRCJLrdgqVuGnxDdenRcnsaUR89vceoH67meayuXarC54YBq3jA",
  "key42": "46CDEBbn9VVTuaGexgTBpP1B9sXSViTP8XZ6FtqvjNKNcCmnHuGejHgQ3FXBFpUfZ3GrtnQa4s2yFT8Fvyb8WZxY",
  "key43": "4THRW358x2gw9PJV81Y9QfUyeqP3ZDH4XDYyrCbJNYHEhtoUrbbUVK8tXj9Nughx1GzgwJ7DrQDyyJmnKTnwnERS",
  "key44": "3nYhpyGMFxNAMPtDrRz7u7jQa8YijuP9bmz8zTRF8jV7EEwCBcfJ38GxFico8rgFT19SLDL6vjr1QXSVJPnHWnbp",
  "key45": "5sbex5qdDHH5j5C837u2GpMtbTV8YUfD8GxR3uRZZEpYuuW594JPyMfHifpvNrvmijV3315JWMWpZbNVuqyqqZjU",
  "key46": "2QPZpJCpQMXkDf7sp3ZMXp5gEAMPXykbrJtjGfAA8U6KdV3gTHCk3fXgJtiYB6JZn2RVRpaS6Ki67nYgcuYNRcd2"
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
