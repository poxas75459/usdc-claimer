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
    "5sNDDxQtrvyh8FE7tFTG6hsKabud2TcqUFK7mNBtRkC4ucSkr1HbJK1XNr2d9HAxSPD7yJ2rCJF2rfea8QW8QYnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8xHSYGq5PukLHKfpfEFGnUkWtB5fP6F4aSatGGWtx2hbTPG5Q4fMRvH4DoKZDnaKXNhLbWU7qohQw8z5P94kqz",
  "key1": "67F4EXZstDPd1kMEkM8t9d1dpLHtxomt5kfU6bq7LSWHpEnyQxp2V7bkf6kdkrZfxDRqLEcWrkNnQX4G3pKkV55m",
  "key2": "63XEFYCJeKoirU98yogUVYr5bVNnnzC9L26ohiPQPYiEGeYHxwWyPAWqg9W2Eb5Mqs14nc88RMbEaP3xdcTrkV68",
  "key3": "3EgKJWrD8k3KyWjHa5zRDmU1Lt2VgorTBN29bW3GkCrpbJHFXPb5G1PoMaKyjF6gEt8ckwTT2mSSBbvQ42GzkwwK",
  "key4": "2g1bzc7iEzU7B9jhbvjyVGoGGVjfe5LSyL6si2zBG4TDBJvhQeQLhoou2iDPwnAaXfqobLgJTeWoDgn9FmqQTy1v",
  "key5": "4FVz4SzW6TnCX9Fu7BSZMkwx8dDZcZ5n6hRREkA4ujKt4EfY4vHuqakMa1hBvNXyDF1RBJP1udAsurbSEvsEMb9h",
  "key6": "4gFFHozxXpL3NSQxSDByXHDLCwtSxj9HFVNK6sU6awt8kPQSqXtt3JbfXiPR9NM83Uxc6zxY6hRce7stbYnR6p5F",
  "key7": "3TFPvTELdSuX1sye3vCuFzdcevQCsEeVVk59Fk2HJv7hJYuTjCBhS4zjh3MEkUpRxCR5jqYRMdtBJ4JByhqV7gs2",
  "key8": "y5e8bJtvDhUQESDmMNeJPN6Es61ycDT63WABi74V1jWnqHY2R7rYWzYUTNLMXfbkGm2BWqjwaHkUuU5dD9nYZnp",
  "key9": "2tzFzWXSWi4Fo1vf83H9ccT61GUECRnYrk1tZKrmv8WUtPDgPbqwxRQwhYvuTrUSaifAmyEDgiY2PFBQnMdGwKCW",
  "key10": "3Mfg5FD8xToj4CHQ8FLKCNYDv7Tq8ReLWGbGXfNxecbg17gufutGwP5wamTQoCN4M8SSoZjnxYJLewdYs3PDyNrA",
  "key11": "DV4PhGY2nzHk3SxEVgHzzZXzYSMPnFrEkUjoPrVaRH3hBCHz2NQRWeCAXzzdc5mgnXrR7hEUriodUv9kSmWySx6",
  "key12": "FGT6vgVf1DomAGScR7kUDwmZpDMtZL64M9yLThxkJHAXcDAewAsFTUV54HbMX48UYfeNJrEBJw1DyDMBzkBg3xB",
  "key13": "yw44EncfqxdjPiEinjCWeG7DirLRRA61PcaDTaYZiCoWYCPSHWK8DPXG3EDtVDisiyb6WwdESoxcQzcCFJqgo8a",
  "key14": "2ygCMpJr15MMAanKhMahtV3vPbv8m72mNg4MKt499JQ4sUMBuf8KQTyWaMRVEaV3rzcLt9cgWECChXeV5B9VvWX2",
  "key15": "5mRXdAMwqDQ61g1kBS95jpGyLXKuF2hVZ1sYDN14rrfkVVfKbtmQ7iBRXQHwWBcDHhsB2eoaHi9swSRGScMqUBG9",
  "key16": "3kGgSYiJkFEXWrRUUicUUgvhL6ET4tDGBk37AmMcEeks5eoaFPXTJy3KnpnS6hehvbYrZnv2NaD5qjBJXDCP8NuQ",
  "key17": "DrUL1SKqGfJc5KFXB6GDLF7D22shVWJc3JG6nxDoWVpsRG1nRhn3E3FqYWtXjhN36aWpkSHgtRZyCvAxKaqhXDF",
  "key18": "4TamF8zMmofacxdj5t412drsi1aiegMLr1tUiPeLTRYRBTNa2wovmNyBYmqHwgg7CiAaKKq2RmZ2i2skK6xrrWCg",
  "key19": "5JnBqU38Joj9txf19dfMkdxpYiT4xq81eLosQdsCjWvyP5qUmg9N2SZaSj4gHcmf4q6mVL1ze86hnzL1BK5cKPoW",
  "key20": "4SAgeC5GHvnkhCMWkrQ6aEX2B3wVMhDdgroqUPmZfBiuGtBCJB2vRLdrqPPyzKs9LTekyP11r8FS5T9G4XKF1uSN",
  "key21": "4wQLmxMce7PWf5MpyuxSW9CF2qDA72B4HxVpwmRrp8qd1hxLUEc7vzMPzP794j9cXuuGkovdZqDS6ZKSHwgoFM7P",
  "key22": "26tSBBVvFxCqbjMgMczaA9WMsLhkQyBYVj93fU3XodfaEphw2c7JVSqaYjd3bZVuk4mqzgxNSt2XChW1xx4uGtbx",
  "key23": "2kPirJ45GqmAbFvFBPq2GfoxFYUTQKyPYqwWy6Za7iPrK89HYjfAyz9nuSVRTguhUB3wdS2gnX96Q4KRbuCydUSJ",
  "key24": "3fThSDa6691pvi5862fcBbT3ui31AcApAte9DASqE7Y1HTeG2ZMhAd8muRSoz1xupps87B4xdxvLZp3DHXukbdzJ",
  "key25": "3B2WQcyo4YQgXdwNe6MNFrHqYgsBFGJ9k2So7N7y8eMs1RXH7Ww3rX94RymM4nNvxMz5chztKaQrpcwFofLq857t",
  "key26": "5W9ihE6KMXMoUvPnfC9q95LSiRMpEZSf3GVEyBtTzkkdVEE43Szfe8srQKqxJDM61wWNJedKtvMKaLHFRKjo394t",
  "key27": "5YPH4h7qw4tgGCTbgykPY49bx7Ze9HSKPythrAUAno7HgaDyqrQaMMjCbuJQp5xy8H18iYzmeVw3Z986b78L2WX9",
  "key28": "5SJCNkwxBnAAtq8af1i9srqKFpqdgBMpqXN9D5CG13CCppwrTS3SLWERm7w7XN5rVEF4kMsL31fYDCN5WSJD45aR",
  "key29": "64Hq6psuG3nqn651CT2cwRBsr1h7fHybtQqXvwB8qdpvGak1iiTyJgbuUFVRArvWPSxBb83HirmAM3UuWcd8m4WS",
  "key30": "3fkKcnxEBJPw8JAz5wBnxQfM3SphYpAcvaJsfk6XjoVH19yQfHDqrhVMq2S1dZFYvojyexTZYjjXPH3o8m2mSc6B",
  "key31": "43kNQLbGzdntGFTAKEqcBhHy4GxEu9KD1rfxPM4tZEwTGjZt9LTjJpgqwHTaL2kpjwDzdWB4vYNWPc19kgB7Ekaj"
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
