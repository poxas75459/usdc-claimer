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
    "LRYqSCN9rXAqHLNHtk1BkH8YAsXcDPwqArraBheq8nE5DzbzocxYPvF4k9nV4P1T8f9FrHpoiMBYrNuzmeKZGyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47AZxkkWvBXnu9SdvnGuMWa2minUbYVZFhVuokKjTJBjK8yJ8kTANtjpMk5JU6jzpcAuQ2qdGpB5FJShGJymZrwE",
  "key1": "4raMC9zL8XMpbPSMMQ5hLtcQdXrWTdXTShva9GzsCJutGzFZq5yqLFgqeNmRVNxEhNBhtHkFeYddsKNaL6CvEM2e",
  "key2": "5y6tdUmUcrKUGyzPRdnCsKqqPteqzVUfUNaLqSTGZtyp2edgVa9iEGWZHPEEWyc5dAd4u3ppPArpQDkaUMGQJPpY",
  "key3": "3CJpUHLZFWHbwwv78fpYDtASyvg8so9TEs4YLWdAaYnuGZehiW4LPoDjEQjZcqTn2wiSzAFuqbMth3fMVrRkQugY",
  "key4": "3bTJQRnpsrTiDiA3rRu1MkzrhjRkLpEqmdLTqCj76waRgDVpV7EedvvMMz3cbeMWhxVyZgSGLofB3TtVfRnNJMcH",
  "key5": "2YwX1dt5VKz5SemZdCqGMjAZSoqHJrbWefbNKJQ7Vh8MgknaevodLL3YHXh4Rz7xzdeyJ12iUZKuwXZpVWCjvWs1",
  "key6": "3gGm3BAzZFNZ6FWcowR68nB6rFw4SS4YAUwaaeGDF7L4u5tGsrxEfnNH1kjCndSHXcSfdrri3gYBV8HCGFeirQEe",
  "key7": "5jBCFFALNYPeNbpYjfcu519S3ie3e8kiCSLie1KdiXjNJM5nruGJr8wezh8d6d1rgPQEfRZvtvhdrHC2skfPJjPC",
  "key8": "xuc3BjbZ77p7wmXFEML5464SwFEDxCtywy6Bt7pC1RvCHj5dfsLBRrMuE36a5jRhoKZMzsVCxw2oeSuBHXh68fE",
  "key9": "3v9L1fJasY4HsCUoPmZK3c1cLiy7n9E9GzAkfudj1xAqtRVYYi7Zmjq3fbBp1g4GxqfxzG5GRqSznCR2r9537nA4",
  "key10": "4t5SyiyPHUicoqrMsstZmAF4WVF6XRnpipMVXb1zG2xvXikiZbTvsUbcWWHKaKQ7VYHvJxhvZXzdeCysUYcGtNbB",
  "key11": "ydHBxfu28onmT2P9zsn6tew5rae9ArytqWaZEznf24LzSdv6uWXSf6yZjCkA71bnGzZrutFekKVpZH3HYnD4sPv",
  "key12": "35x7d8hegjCY5L34V51gWnfanpHH5Zjjds4KzmBivMH6HFMG7tK3kFBCRboXEGRCF2sRAQpVR44xspUDdAEvniYK",
  "key13": "644TAir8iZLng9ab3kHiZNBwWyRXasU5rS5AtFHs77xUYVk6xhbiXFTJYgjoMeXQkCk8nDTvgNqtYP2z2Lo6ate9",
  "key14": "KuvjxxGfgr16WXjQeNcFz85kJP3Dxkpz1Z5Xhtr6PL1CnTnQymc1kPWWZREuNY3HUV4Doh4rW5C4VUffvLZLJvr",
  "key15": "5nfSWGEMKXDCdeiZrJgtutPqzvAQdyWXaJeBXiMoow7ZAvb6ZuebvzCQ4dWhnkyiDb7Ye4b99YnY8Q4b5g2FCpLw",
  "key16": "58AgMp5M8ME65ANmqFYrGLH42zYebs4apmxWZAJEn8aBxfAzfMFSsJP7YQMxWVVS99dGyJ3Dm1bumJULVkyWqXqK",
  "key17": "58jtNz7CiRqfdXWLzQCDKAEs1oTwsFHoSMd9b455ZAxa4LtKd1QWQntG9nNujG2JbvYh231GV4BMRfcUVc9je4aj",
  "key18": "AcZSH7MciKFyhQ8AbS5P6YeZpDdSdsFN9j7JDHPC3nezog8Gvm3M3F3NJAwM4JEXA2hR96oVcsYAJVLjHZpwTRa",
  "key19": "u2WWYG7Vn7HX2xgKMFvKCxsyaFK6bSDkPtehDXK4Sn6PTRmtr6cqs5cUDSKkZsMsUUw1z1D8ABtDgqjaFQzU7v5",
  "key20": "3fs514Aj3scSdGqcEPNUqWChZgVS3xPFzosZ2SL5xSVUv1tHhqZJcwrdWz1Uj5jaV1sbsGbsLwC9zqtD7Ex4xDLP",
  "key21": "4oAPqxvMopR5Sf1pbpPhicBHfgr98vx41kRrfkeHDaaQL2MvewXU8u2sQVDxgk6CEVPn4i54q9BWTtYKd7YLD5cM",
  "key22": "5Ns1Z2iHf3gVRtrghZvitosGuTzaQZSQGhVCMdnqDgsX3bbbteWEPcnFDQR7BUqfhWi1n8eCrLMzRoWKY7LPhzNj",
  "key23": "2GvE283dxzcxJvmk3m8eXrAgfxUVeXiZ7G937HgRYFFCEn9widynbrHzjjsA5zCfyiWdxeEPxEAQaZ8JXSRXPeEU",
  "key24": "62zXLAogRmXoTkGvmqC4GCEY1yT5M6gJNJk4YDhxRYisRxW1RBRGwZM7i79he8yhadFSMF8ZuR8qGfJuNwdiKcvg",
  "key25": "63gjbb2rS9Jx3zvZAfy7ATGZwyYnw84AZFNDJQzNUQ5iSEg7z3u1GkPEG9QgD1gky2eXLZL28WzbvXnqdz9UthXV",
  "key26": "2icujt8k5bxzdR21HqtEzd3vXhYSwGtc5TXK9BQXMEHbwj4QVgPz1S5y1rF2vNEfPAKe6GBgDq5rfUyWyw6hAgdW",
  "key27": "2pCwcceKwLCTde3DKTX2RmNrGaUVU6LD6hN31ViV2yPLS12oEceeWifrBwvf2YVgJXqNmfaQGSZGf9YHhE9zdStA",
  "key28": "2HDn57S9UcryUVCECRpQAzzVv7gWn2SpwpjV4df7XmdLKzN8vq5xXD5iHN2d2H4kGLFHRKFYf2YzKa7WYvVLP19v",
  "key29": "ovcVF79FwEFrfcteVfy1xFJThuUTciyR64davSH7THgNPUSgwgZMaq8PsUbV1vA7aFTBVThN5L1ZMmXyjVWi2Ci",
  "key30": "21rQTD5MVw2VJMHMr9jqqV2bUJd9we1gNgzFFZa1CPHhuzb2HyGAGJRRr1DRNKpGmGrDvgwDEetAKPjRMTTKg5ut",
  "key31": "34Stb8opiwmNVuwULaUyaN5fVTVEJgQzDdRCnrFmKJ7BsHSTMsjxcBX5fyhnfDmBmjAy8EQjQNsgARoV6xhtXspR",
  "key32": "3HHZVMJvYxhHq5SywXNsq8aJwjZBdcdZzkAr2ssG3Tex8GfhCcLy9iFQnQDWYMvMNvW31sgwgjkheDHYd416apd7",
  "key33": "rYXLgA34s4wh66pux6XGi7uAfAzPZvMvU6ZDFKma2CmyKhSLx4VMShracUHWQQYhr9SC7SucgRcK62gCtecKe2X",
  "key34": "21pqgsoNVWepYioW86xheXBygHubNbe6KuErtrSj6sZw9PrrDEthvNdYTdacLwDv4notnUZCS1zgB2v8t7nNn2WG",
  "key35": "2YTTAed6y6uaw4FxqY8SL7fPHdTexS75hRG2HoNEKBoVzLbqJo7ZF6DQDprgVQBHzJJodrdxJCYut7roTgWXuzxz",
  "key36": "3XhSKkVy4fuoivXAgrNmxvp3EtKbvKcVbuRRA8PMBgLWR9kbp7fFax5bEXRgzQJMnZCfkSFZf1pYtsTPimu29J5M",
  "key37": "4ADkysB5RmeGH6W8mGQcysMtGd5aQ49SHha61jbLSSsLjkFsqQZHZugk9KwJpoRxt5B4oG6cnnWx89hT5843hHjZ",
  "key38": "5vTMfoLoBPMWJ72nojXqZU5FPwG758WSHeEjV92mSXVnRx6wSaHz19p72Vr5ztt9wNVbhSZ2J3U86cXm1Pf1uAJ1",
  "key39": "63pR4yEwL6rRbL3ogyxLpjhfCrq2Ad6vost5Sjp3Wz1csCjvpZCakTw4gvm4XGGXJ4JQtUbeJafCskoWRtBrcC3d",
  "key40": "4z1iVfU3F2c38V57Gr3Yv8i3p4M52o27fLRFiumSdpdvzVfumCgDhh7umstW6YBxBt5oeK2z8NNu2ETMLXtiENYB",
  "key41": "2wdRAq1avAC55rbfnK3VBatvjVrowFP2LxxDp3RZEgxDp6CCBiNHP49ehfSgtYPmxjACPB8k2pwbnv3rnCqd2aTC",
  "key42": "5yK5Ucct6UqHAKDFGheUtcDf9AUqtBn4p6fiPwH1EQJdPVqvwebTHaZi3GnN79FoBznyDde2PARym54oWVDeMmiN",
  "key43": "23sMEvEfRvhTo4h2exHLiUDHDZJc9foXiQTwBsxUUuLxXYwMACCiw89uizRCJrJDeeeZabyM97aag1npLfN7K7Zt"
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
