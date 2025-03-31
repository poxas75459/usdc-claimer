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
    "5k8avPrGX9mWFn6m7xHt1qivd8kxmaBnKs4pC88rNsFzqv3UPFBqRYHRfYs8yK1nUHdEtsNgYARU6zrXqaRxrANV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Nx9E8HgoBa62MZCoeUNw5EDfZUFWeGgL45aQvV6RTgmyg1xdD4tPUz9C1JJKAtNhsS5svBHqnmUMM1RrL1eCD",
  "key1": "4m6YES9DKkL3f5nFnLH42YDwJ2QL8u75Mph5KMYYQrKwi52dufGLpeysbU7NyTYWiW9wxXetr1WxzQRNrTPk874P",
  "key2": "mxQZzDwh5UAGfi8BYs1se2x4dSELwHgpv8Z3ZVUZTEeTJhY3KVENWQvLnnbyFoUtKj7BrHyWSx8bWuwWXvqn3V9",
  "key3": "4DtXsJXEQ8ajJ5vKerK4x3vxj5HG4caBdTX4Fw3ZDy2yp4GwHSszjicpMx4d5eFyvxaeqcLt6tvjjKko92oaaDdX",
  "key4": "4JQXRarqqJqAtyXVrV5jy5taiLYEVYhVRxdCWgAJUNCmS5HThZHERw9pHwe9g4WpTdk1GhdNKtkYa8WsDjT8jfFs",
  "key5": "4NVUVAspW9nz2QStkruVHTKBNHKmkedue7rTeVvnX7hBQaYmZQyaxGXGWtZX1QeySrsyxVhx1LTxqu8vMtuBfDEG",
  "key6": "53g1VSMG48ZysoG2HgmX3Bh1w1X4QQrWQwr9iKgtKQzoT7wwwBQt4BPRcGmWprKiiPo877VwmtbxZqu1bd5yjgWL",
  "key7": "4dZ2jTpLyfsAaFa5opZ277NGnYen69EWpGMVAzqsCj7TaPbNkGHdRHoiUHcbzzTQKMLHaLrjdJCG1UPNJBXjqn8L",
  "key8": "3DZcaZ399sMgtZuipqncsoGTcnnvJ6n4Kmub9rHw9PVLaUYq3m35LUc5uh4EozXs8rywYGP8kZUeHhs8Toi3d4KL",
  "key9": "3ZnUatKtYhuhFidRmhqCL1866Q9yz3rH2RLtv9wryxZKbc2w9raXJbwawsTpq57XsTnBwWVCnyxx6umFhK9b7n84",
  "key10": "5Kus42E9grgehgdN69o8Zsbf3q4PPF8SNPepPA3ByMHVqJ3StYnxTDicyx118X1m64oz1d7rft516tr5jzdeARr3",
  "key11": "4TBkgw2coHUtnVWq9ajtAbU7EWjiNudxdN8G6LT84RE8QEho5jvp2ySQZzoRxN952LEGjmVgwiRsPHbu7WxRCpxw",
  "key12": "2MXKJi7VhbyLoSZG7bY8M9Ajbr2Urg7jgLCWfCpYzrB56iCgXHaKmqDGb8vapmHr2Fddwv7C39GA88gXb4BNNJWD",
  "key13": "5xvwz3bjxZXHwRUyaQpFEZ1CSzGvmSdAcMpdxth7kTG1SdXK7iigrWqHdtBC5a5NysXKrj9CWkBNMZzrigx18rKT",
  "key14": "5puvtwjvZTBSgNc79fn5XyvoHhVS9VbPEd7qS7FtdRTGMJe2kbvSLDP8QhoJq5Mzq2zg5G4XoHpeUm9Lyf11nRSc",
  "key15": "2Ti3TuZD3bQ2XBYbW5K2PbCTPFgozqxV9bKMWJCYN3f1BRdSke2PZhTbWKVpaQNLCKQo22g1F7ZBN9DYYMpEa47K",
  "key16": "23fUQk7qwuUjpUfsAxgx8RGWSkupz21Tdyi5YnQecytHXea4bDMic7r95gzQ2omMDmTE2ot5qvtiqC6EYaSptZfQ",
  "key17": "5bmea4qjdWtm37pw8YRi6GMzAmXc3gwEkrvfJykEDzx391Eawd8CiTCtZyvCBCFmq7sXm83qYQmvKF8M8GXUh65n",
  "key18": "aoYfUEBSq2qEuQhRSJr5fGw6XXK8riToFWFEGTf7S4nuzgv7tpYZNEwBRioBqRH3MfMmgJmN8VTJDPEK9xh96Gg",
  "key19": "5cgfbsBPwqwtVRxEGZHKq2zo1qH1QVsrVgzwErMdN3MfPAizkdYu6DDcxYZABBue7ZvpBm1gSehBZ5Z4QJuxkY3z",
  "key20": "5Px3u2i1bnqVtUpJLeYr4uTMT37oh1mrVPFu7VtVfYbzijyy7JiPAzWVnS15MmZpK143yeoKWkcTELExuEyn3swj",
  "key21": "3262G3fibRJx4GpGAUriQbeNg4N55rfcsMcA5DeZZYZzoFcTXxbqz9aTRPB6KBWFiAfTjrhKtYWVhdgW4RcuLQye",
  "key22": "2PG2WgvE5yms4eP2VW27hPSB5PBLVRW6F2Q4iHFMqF6HAxhsc5DmGxhPRmzvrhiTCaswzdwGqWQ4tZpZfRSqCuQL",
  "key23": "4akpF12me5yvMMPTJZbN1XXVezEYZiQz9a397fAU1exHqV9TQonJrU3w6vpatMJrfVz6uPWeVinvXgHMCm8LLFkw",
  "key24": "585k9qdLBRaTMAA56zyB3nvUTC9nQcusLaXvNRfvUsXTuWetRGRcMt9HMD6DkNLSYngSG4Yg3rTXtKDhEDfanTqT",
  "key25": "66Vo2Q94h6TiFUeTiJmooqVx6M8DfxmGkaQsWYgeL41HuLwPt7CYzoDVdCY93RRCZ5fDLuNuG6fxAoVyeYvuLNNS",
  "key26": "5jRFPqTwEXvk8aMtLcrASaQWj9HDf1BBTbr6B7UjM7NopZspCHUCNNCqKc3YCyihV58RND2jtDiqftB3Mk83zc3N",
  "key27": "32ufpNzRToJBPiqmWDLrkPzRWUuciYV8ThWGnryNnkCS8SxymX5cii5UCz1tQAZKUzEaieKPTcD5tZuBbY2VRx92",
  "key28": "2ziXenffwD7GXNinDxn7Gq45VQQe5pPrf5ukv9K6h14WwWnkwSZj1KEhcVkkytqftgEqZVd7M8FiREWp3XB8mK4V",
  "key29": "34w9YeaQ4KXLBErKf7mrC4mspBgbTuhyh6Qr5qT5RH57pqm9dzfqpS4qyKiaZU5kqvmUn3F5gi5weYiMmMdGsEVK",
  "key30": "3w6xvpWpus6Ks2oBfA1Sd4PGbsgMrseeQ1PHP4azm8NAgkfqeWrqCMb8bUCFuDMeBs24oseYek1LhpAMx3i2EUon",
  "key31": "4S5YNazqU8aWuduNDVa1MbF5Vnos5YoDfkzcEkoFY15pEvFJkVzTNZcC4u67Aiv3UqmCiNQsQ5i8xZvGz9Fkkjan",
  "key32": "5Eg4LTvSUNH3jZM4pvrYviLX7A5AtfCQJMQWtTjq6BH3odf2r9uMKJ5YYtPsn8ewzvbbVAPvFVzMMUit5sPic7HV",
  "key33": "z3vrtpTTsqq237AbtTxP4cT1cYsa6JkLsM13Z1vaJk8MdD3hdwF5Rp8NRQRqrSXibbHM4xVndMCr2c2ni5geP35",
  "key34": "5bLA9TmBigH94gYw3j711FUdD6X2G97BPAPknGLoatCuSirNjsxfAgBc9seo7F8gCtanrzjDBQmHXewGWfPB4fnj",
  "key35": "2pshAXveSj4ZxNuCiLPoH4iGspkxntaPCxzWPoE3sLNvxYdZynM6hAS9YYoroveMgYSGRnAzsz7mCxdnQkywVsX3",
  "key36": "2CZg9vT9YS8jefTEYF8wTg1b6e4iVK8bEWjuUY4o2cvcBLcJg4w5i1yjPLQg3TApYXuJajCES9aX4JQfVc8Mrarc",
  "key37": "4dEDwFmbyd5LaHd6gfRU2rUygoijNskaWDBzY4kf7grzAKdVUKQrroUfJBoEJD6Fs1h3hw1UyxB6MxLWHdZvy3ZM",
  "key38": "o8m25nJ98D6XM3hFTkkQiFL4zFemxr7w1Kt45BhENTXz84UNtsmBuZY2Bzbk7dEvkjRpiE7gnL9LWEfgBoFwRXV"
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
