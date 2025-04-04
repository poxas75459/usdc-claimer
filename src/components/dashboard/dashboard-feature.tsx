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
    "5UhGAx8gXyHX4mRovPfT4HYdB4eccbmnXrgADcfUkyRuyYfcs35ctKgUdjVEtv99zWDCG4zskr71rD1EfWrFqkHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XK54SXVTyVQeJi2sURLPXN1DKdzXp43yDyRsMqzcvTR8CtaqWiFGApNvs2tk3b8adUygfypnY4uVv3CQF3f7Kro",
  "key1": "4UTp97gqhdW8tTc6zM3rnSUssRgqvAb5NCT2BxVQoaa1hRZhMdpBZHms8cZWb3cP31ikLJsBZvpgzhmvfuLPJapV",
  "key2": "64jsxdVp42qQmUtbL4t9bu8Wfs8UYGuHrdXJkRuSzs8MRYcvoZ6SFKCC4F1ksL8V7gxjQr9oHBheEBL3vPSKQQPn",
  "key3": "4UTRqD6k19WMv4fqDjKGCPWcGNnUx8G3ois2sSxXSutn9Uv3yRdeg14MZ6fMkbjeczXDdJ4x7VvEpqusB51pPzTu",
  "key4": "2cAJhfcGqR7g7BsfHrhB3FKB1pbSpcWYpuonnaUS26cTJovWsWQYDEFB9SFePUUruESmP8NY1BnNqSLjhJBeDHg6",
  "key5": "33KLbyXXn2zqcWPRu8CR6wvH4HmSMtVXR7GBNDoDxMuat3qWAYtuqrj8UGvKpvLUk5z2tVwvBgRz1tuv9592GEzh",
  "key6": "SboK2PBY5LiVkQQKkwdNF1oHXcgY9WNiL53KFAunvQB3MFEfCBwPaRNXT8m9n6LCCrVZHewXSuZhKxXUDBKvuGW",
  "key7": "LUXgjncxaZzLAjAP31UdrkRJruu5yeF2atqy4Yaivy7W2dRMxnrw5iuuGpd2u8uk7jK3nyz3oaqN86KJivCgGqZ",
  "key8": "24npNEvRNVyVhZCfADyMWuMg5tNQSqSta6NsCNnFBVBYhkA7cwxj7CjEUv7J2e3uwTnK281msN9HkAB9vNFPsRjj",
  "key9": "2ShJtpvY8kqixmJ7gntxRSAND9c5iQt1XgbsaJN57scTpiGmA7mK1cfK4C3zn6tVTkDzKacSzY1acCFHUGX7baxD",
  "key10": "52FrsGBtWZqgWYHFosYJqyUavMGotXXV9YJyKjKUVxKBCWn1SNmffnpFz3yMdSiAPssNEFBnK7DuQn5QnYFN5Qv",
  "key11": "5WAMSZ5mEaEWL66UwSJn5wiABJkUJogFtXanhK32t59nb91bjDCzK3U9txVYivAfYAPALtGDTLy1kj7XCpkaZYvb",
  "key12": "4QAMMW98BWq7yZQTPFJmrDS7CUtmkZdEGBNKstM2jCz4z3aGS4FscmjGRi18XnMXU1AyU2ppHJaNNfHJEFUKzo1k",
  "key13": "2rzmmE1b9mSeoDVywCy2JvteVuA4EonLPA8bimqDp18d9cjMdn7FwMvJk6DaDivAfxhCim9PKokTtSCKikNdXZ67",
  "key14": "4mYJmaAFXZ8jpRD8a7wy7JJKbzZJwrePnvsRJ3MbZ2Dz8AkSbwKVdVULmf9kfDLmXStSJmiX2sJCNB5AKKr1qbth",
  "key15": "54vjnnZ7D4sxRL61bRCcVmd6vv5SaUAQZB5rkH3pwBYhjwg4fNMsVzkDKUWV4mW6EQ5mdZjjdK45tTL26TGY8qgH",
  "key16": "39KF6yaDRAy3Svj9D56HWYgS5PidyxrKRXLuh1tHhQ45tfuuEAbPj8cT1VGXCBBngWLzhvP3ghXMQnw4B9JSmDoe",
  "key17": "58M149SLBogi2WrGNXmDzXp2mTEonCaTYKDM7BURPzhbwr3qH44sBXuidviuS7q5z1VqxNvNwFSjTCZv8utsj4gR",
  "key18": "CgtB9E4Ah12DAZ8o3kSRCF6SDgw8SCCdcGnpxmv5HSfSm8MoXjwTHSNYhcyiQphSHXnPxq5T8W24dZmUMTThygp",
  "key19": "CZBEU9nPaGPwd1apM6XPRpBH2d9c4WHdCTzPogAftKFU4nxb773yRgmcTXnq6Q9YUVsnXWBGbrtTnFepYAdpUp6",
  "key20": "fCSgAL4jKyCdsDzb4V4SkfRbiA6Zt2vQi1LPnNSvagGttxfLNdwJBTYaoFcULvnBBiRe2CzsL2ahLy1gWKNua6h",
  "key21": "3hfzdrkpGU8RCh8uneTxBvBvZjMKYwduKpmWJkEvSsgaEqN7zAA2RRNqUzNoBhFpuqTkVpniDbTvnJLEVtqwA4QP",
  "key22": "4McRtWpHy6Zi3h7KvrQzon1Zw9VCcH58ZvmbopecYmfhdrokd3ByFRsArqu8mYMrWUxrJQ5U5Qd5v8JF7m93w6Us",
  "key23": "2zSXY7shwtkxVFvNyLns14TuczNqroyQPsc44cNK3VGKSE7oJjG8JDGjAu4knNipZQBhE2VpiQP8T72bjhsMDD73",
  "key24": "5iviQERWo17ea1VaYXgwiuCYJAj8brU4gz6kpTcMNhKZSC1rtiYepUA4W3B9vtWfbEGducZzx7nGYryzqAgVjK9G",
  "key25": "5sJmGW2gf7FDTndyWa8sxAHBSXoXLv5qtH2RYmhhMHWhFZ2Hseo3j559rBVBeAwGCyk8RGFgCsHsZrbmmr6UvALq",
  "key26": "2J3b7Di2xKjfjbS795KXDRUrtHPbMVcUYqbxFtR1KPXGfY8GJD2Srk4HiZ7s2GEPLtffXZAbcosCuFgWj84sg3b8",
  "key27": "3usy9WB8JLiqzPYbXnSzUo5dihvZnhaDBq15oeXKFmW2pTCWmN9dPtPmXeN6LvE8an5RpzfU6yGF544HMqHGKb8o",
  "key28": "37c65cwGxXp6XQ61VBbhNSys41NLvHXy4FqD34GRSGSVRbbjXTBjztwiFsDmyVUoWYSBsQxhGWUuxr8VMegvSBKP",
  "key29": "weu81AoNdswXU6D6b3P4s1XxtvJhi7jd9CQ1EXXVanhL8pu3TZefRaq6G1YPwU1z8eUmnpKAAJiA1ECVnDxP3Uz",
  "key30": "2LAaUguhTrgRiADzGHChJfizZgEWeoxzQ4HUAjomitQCoPW81aXQkUqEyqYHTdUK42UNMDsvghZqiUNWFMF1LEHo",
  "key31": "4iEeANmc55Vu7KtyTwaXnrMCw9Q4EhZyoaHNpsKfbSiAGqhzz3P4Lhnq92r7jE6LnZBR99GnFc1ZpL9ePRWBqDPf",
  "key32": "3LAfQjFERufCN9p5vasfFzRoF1yvf58c9te2epYFqjdMNP5qZCChgAxAgnZXXvwa8BXctampoMD5cRkkTb41aWKj",
  "key33": "4HgTDVkTT4CiMFCmf1h1tV8z4tWiaxqzo26T8xB9f1UmDzDpXMtb47Fu3rgJoN7YA796TWATR2WdSGpsS8Z9G6dD",
  "key34": "4nWKkLX7foNYHk7hcdxg53X5G38ZE5pBXQrFFz9wThp4JDq2ZMX9NWzYs3USpNEbG7CutgtPjwgM388CdwxAP2kQ",
  "key35": "41g6r8yEgCD9UANJHZaasCb95ekh9UCWVVLdxf59q56bPyBeABSsHNbu8ZyXzsYpi8BQunzdZq4a91UrrXbFU6zA",
  "key36": "28QZbTCeCpjHDzjvfoktQ3go4GJPjCmSkfNHXyEimQojJWkVq9oqcF4Mp95pHqaXiYvu1EBQckmQVgq43a1kh35N",
  "key37": "2nDE1WuzjkC2CEhWz6WcjLQc94U5XJmhrreXR6jst41m3HCSxvTsTZ6YTkuUi7kCro2FqVfoJc1S3MQqCufq4Xcg",
  "key38": "5oLEYLcDQDzZ5vM7ojHKXMJDY8zee6q7nH76cyRyKU5hkLp9L8AhUeP98MVyCQZfLQvYqnGwAq148m4zhziGZ52x",
  "key39": "3vKyYin4t7eireHX1sXhFh5VHMaLdrSzwvHCuPdiEuzv6ki9RTm5BrZMjwkd86vHYztTYSt3pzjwax5kwauyNWUe"
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
