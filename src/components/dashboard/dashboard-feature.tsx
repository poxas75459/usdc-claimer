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
    "663SxiE3mXXssdbWfxB3xq1HmarYZPJPpjmSAbujVH3HevpbBL6Qtbc2TgegdLjBYNL4nM5ngWvutZsVmxyrnXdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYoucToNHfvqyHDTzX6r5QgZnZ6uJzGmjGc4NUtwQ4qKgijN9FPbH69t4SWftzs6ATSUL4uCPX2YmMQVs194DdZ",
  "key1": "UvwVGPVy2FVuUiBvBT1b7y9twqFBJpF5k2DPorpnd1gV75niU8BJERnKmxZR3nZYXdydj7ZiyutQCDNP57pp5GJ",
  "key2": "2zq5AYX9AcJiYUesPZJW3rYNtQo2UxQ6R3tY3sn9k52qiZt6dLU3g6S2Zu2WmoDR2oTESEXRtWeRs9hynkMQdgc3",
  "key3": "1hfTNVt3NwautentkM3Z9JWWcQJQ3Hk1Rhw4dxqCyvQ8zyCjkevs8g2sCpSJGJAgb1gpPHhJD362nqPxToDm2kv",
  "key4": "3tpJ92sXY34xFtjZayDWvzS29uvzUCKXEsmtew3Kpyt3gxovawziJHLbgor6ffC69Qmw3yPC8GoLXgAihp5es78C",
  "key5": "41P8j5h5wTWpjarNY2YQejEUCwWRa7cR2C627ZxyZb3mfT1HHKTFnLJzEdcWxN9fnpCpLye8sp5XjtxzEJjsgCHr",
  "key6": "21fteNe5YuZ2ypAwA4nLy6wZpGMRwGo5gsEtui3zGC6enNKtyy4MYU3iioMU1zrGqdyh9n4bopBgHEYgFM6MSHfB",
  "key7": "4EHcet67uX3RZaWwGWfswWrvzsTpSJ9F61QRu4SnkktpRBXY7kebKMBJqCXzDpJit5ozDgUGMwhsQmpTFkL7APHp",
  "key8": "27ETTFCVKq2ESnjwkcG8G9bKwpD5dHZvE6bJuxzEpizLKuEPqproq4JjBzAtuvUvk8JM48CyPdxovZ3ivmFwQXWw",
  "key9": "4hMLAqQpLXNaiY2qtogrpa76B1ckPxMj5QVUtx1nbiEybTKxUCi2KofCzdpmjuAvyP7x3YzUKLM94BxfRsdWc66o",
  "key10": "cBsouG23vQGXPL6oJQH98eWUAxAe4CqqoB7QnAH1HCYYvp1ibyM8eJ2EzA5hYgyeKULMKeRYJutMoFuoVv3xr75",
  "key11": "42iEnisfg8priD1AoXHXNpebRkdmca3tgUqNp3ovg9b21egXEaRAmid7y2EaQuLpvvA3Q2ryTicEpeuNKBskVtrp",
  "key12": "tFP69izpF1VyNheh2rshfUzyWSfD9bi7LRkc5GLu4CKQTENijanbZgaU6usNkWdanwvNJP9GMhHMXffLmhncTbN",
  "key13": "FHYuRP8TZsPFxSCuG1iyqwTVE32sjyW2x9HMDxuzXg6GApp66ievkGzwXLmgZ3HpcK1KMiTXtfbVU7tyttMJNeJ",
  "key14": "2ZTLAQh888dPhNGafKM81iX6SBidH8gcyPm5SXz2oVz6goPgpqUhUV32kM2fmMZ8mBKPtQXbLHdwYHwC5agMBLsN",
  "key15": "MQJRCS5vXp7RVDLhhKvmvGWf2RaNHpGmw1CmULf2tLZBcTTuWP7i5PA23s1nshPJjS8DAwDPAfEzuFQ3GxeURGo",
  "key16": "3kE1SRCgycDrYV4QF68jWbcminmKMFngwYD2sj7GfULvpTCRBSnxfnqioEELxYixyHr7N2KDFuPfm92DRwWEREdx",
  "key17": "4oz1UeNFM9CEyHvX5DGthXJDv5fxuG1Fo8aGaVpimpS2FVX8apdC3Jfqs6s6Euo5TWVnJX842ferdBSHGR4jXUGW",
  "key18": "5MfazwYxhhLTSt2JPXbT6NTrXiLiB8V2WdZw8Btk4izV3guRLt2Uu5dYvtUi6AaqbuPyGwn915SvU8s2Eq3tmN2E",
  "key19": "7bATXLDvNfvf7TdMv1YrZtce5urCTK9zVxd2tvCUikkJpUD2tKQmES6BFqSzRVcNybij2gcSFTnhenPJ2SCaGg9",
  "key20": "5PwqTvT22PYa8n4BzMipsVVJAXXzMBH6WRusSFcSPTJyXBdq5aAyetTuQ5RDcgC1oMFDVoK4H2utzeEoidZSHGTk",
  "key21": "2mGjYpCncUnhQsjTRqKp6onMEUB7qwEZA38JJU6mjhArUhvi2BjqYPGnp7Rp8uirtw5AHJFRadaVKuRGps5XAew5",
  "key22": "iSrzbv6MxKN8CZdgfymmNGo7E6PDAt3G6bs75gh3qAZzcA5QBq3P59aNwzuupViYzkwCpjZf7dhQYFzjp87ix5m",
  "key23": "3QQhrUpB1PqaUFmDjM6xS9Aqkw5g24Fau2zmRy8A7FF57cjZycPdrYUyqPQcEkuxRnyTucDHsyyJdE7X2sxM9hb4",
  "key24": "4t3PkfHeLfAiq8v3kS88xaBV34euoBuCRzjtruLCo2636rMJKfMCt1MFGFLAu1aXaPoschp5SFfj1jTc7CwgtkH2",
  "key25": "37F3qkMZ1WqNASbKhXEMoRdHE5kHRoSfdrdYcqZcftdAXth5FPNwbb62q8E27tXa9HqkCZwZ5446wT31gzGXHENH",
  "key26": "49LWVKoqeWupdVwySsw6Qgty8bd4psTJ3WPSpp4dQ3s4guN4wffBYf6NdgCyQ4RRs8jNfTQ4xeyWA4p8BYS5bo4K",
  "key27": "45uTh6km2WJQGKqCtrsH4JBpQRDV2qt16TJ6jAv7YT4UcyvdLf9h6tWMGWH8eXVuGfxZQsPmzcdvJwen6vxmt9hL",
  "key28": "AD8XzyM61S7KC8oiLDAS2nqe1YbKfhd7hbQwcL9YQNdLsDTBYTptesDRS3s7EvMPjH8pNsfiC1AVQdnev11tb1D",
  "key29": "2mLTRgSCJbnHBSHiHz383uA9PsUYnhkbEHTryupQqw9RgtyGuLtqtvK2HWANDNbRC3V2yDxnUjU7zegX8KtRLaqs",
  "key30": "2G7jHPSSa2ccLLVcjq1BYiPbbT8dYXEyfTKtZCPhBFzZ9ffb721MPtejrQXV68FKhzu4kJwDuPWmTFC8V5vZgN6s",
  "key31": "55PgjCBacUHNkAmt5APoPVURLbvaQGfMWR3Q1JGuNtpSmybdX7j8zzhcfSQxPK7V5nt8in5iS6p9R3cxBqpWTyPA",
  "key32": "32dEYHTUTj2M7BSDMiYsYHTTfYZks1HWj2fm5gbUdHavNQ45C8AapxzJCmN4oMgFNFmkLpz8avj9W226zhz489Th",
  "key33": "5ey99bXBXevWPZF8JmQh335yNpzon1nK7vUBWa7AmWZJ1mMZjQJUtFXP53prHnuLcn6pokiwiMzB4Azc5VzvHhXn",
  "key34": "2m4ZcvG35p9RU9aKNkdyZsUD85kx7AssechAWviMc36j1nH4M5LyurThwQsH2Xqo1kUUyB1Zymb2rMnEhAvFM5oa",
  "key35": "3hQt7BnxySewvNhqcKbmrn2fAmet8W2ZEyaeSxLXPeFWRceooZSYPVGSzgpQDYdj2J3yEVpSdTexZJ1wEwg7crXN",
  "key36": "kBdzvPZCSXVRxqMpvFSfvjs731WQYHCdFVMgZxhr5m4ybXopoEeKh6iSiYhXoHVfedSWggQGqEqAB1MeSEWZjuu",
  "key37": "2ncNEdkW4QVS9V9rM9BJHQWpZRQW48kEwhTPXaQA6dgJ37RVN4JXxdjwd4CYuPjFV75VbyzrHc1UTC34aN1LBPE2",
  "key38": "2bwKjHBP719qHYUGKDdcfEqVkx1pyEvsAAG3UH9N8VueGRZPQcxnVf89UzTPkA5nUgncUvXiWxTLjLN813evsQnn",
  "key39": "2HEKeMZG69vXsKEHx1uoRfTjYGARNu6aBctK6ZWbtNKRTqKZnpShxCDe29YEkkTFJPSh2SGe1K9YyGNQzGiE3PRf",
  "key40": "3ihee3RSTqDTS6rCY53Aj71raJhfTEVzjBdb97dbDPQzdqoDFePy4hpV2qJB4NCqDrtupGBYDASmJKorzcV4dyHV",
  "key41": "aMQ1LwKzfwTgZ614ikcDuignudE7TtXc9oV1aEx5eHWF2QmwTiBzLn52AoUWwcMFSFDK3P9K3Xh4SXLuiCs2iD7"
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
