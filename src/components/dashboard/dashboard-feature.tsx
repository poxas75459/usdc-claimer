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
    "5cPnR1s8YbWWWDyTTPQkcupiTruPd9YaezLyhP2HGz7GFaWAvy5KkeqHQubNeaqf7JnMCTwh3JVhfUCUBvtWjNXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTAqYFtFhLPNz7f55rLLuSJzd6JrB8LGLC3cfcxfrdh8usNYqVot4Lkxnb5XxHragLcsKVcsJovbK2jhFvrGiJk",
  "key1": "62TvvR4vwrAfetWhLt8QocSQy7d9DkncxFy5hdTLXUiccgW5AC5xEWKN8RTsStXeAtN2xo5cKTBD13Rt582uXNCh",
  "key2": "3jRSB4KvE7JXUyFapfZjzcZmQQmeR2o4azmJeFrH6q5p28Xb4xFGXCYaLRuAxeAy6f4Eh61mkqaeADyBPJUVNTpp",
  "key3": "3Uh3UQ43qLYsJBpy6WDPnYcsnMPLLR8MmggXpPLSrLwREMpfmtCwJvXoiTuW4emjyTVPMuv4wPATiKZaeMeKg2bZ",
  "key4": "62vRo3XE8t1fr4821UtHQo5QUWL2Vg7Jx5n9uB85FXQeM6nNnLyRtPCHVkDwwAb36yu4JaKr8TVuA52QBnLrqLu8",
  "key5": "4nsdvYZu2ENAKRqcf2UPMXbMSMVYVh5S2Tzeh2BaLdcjBMveZywkEYUbmCGVyKAi6Ma8JdrRUad2YYQUU287M5Ve",
  "key6": "2hcmMCMLAhcpvrKBbomvhUWNPk2wocAUmgyWFyPRBdCMT8XqL49gyThRKqNAPRdpfa3kBMHMCoeMDNqMdvFpdbiD",
  "key7": "2EQuc2Qd65Y4pRVuELMsqZ5VmsNyADsJzH6hE4hT5bRsxp6v5E4gx5g3yccTo5JDAynLDramXSVVxV7nf4kSw9CX",
  "key8": "4vmVk8ZE2VYo9iLxnJxCNgcj5H3xeNypEMeG6bTYUkHvgQq6AXEtpW97nC42fdVh79QW3sBZv3QqKRk7jH81aw6d",
  "key9": "3FqewhYDqtDxD7xxaojAJLaByT6Yh9oyQsspGxU9YkfnRLtH6Fti4r5Xo1jcBLVSUCA7bkg74TJzCoZ1o21QpWrL",
  "key10": "62Fxnwbufwh3zn3qK9KhTPvLwFDJmsZeDCED4rapqxtBm9wauYE428Cky5Hdn9UBX649yuS3rGRXzoTWXu7a936J",
  "key11": "2LywfYtnevKQPfY1LCaqtGoqiT8g1sJMi5EYG8i1BJRpQp6kmr5gW7XPbRqqjCVUfYTSTYb7kKDRWGxqwAuNFPaz",
  "key12": "2VBA8aqsC9peutnwitF4ftDfcDmUiTDrHUHemiTFi7jSZDQxKHcVzqvchsWiiB4zD8vKY9LRbUckPXUsi5kUKPnm",
  "key13": "3jSixeMTfknr66DdXZTGRBUoTjjCQVk37C2En7jzu9VcHBu8t4Nqfz4prjZhnQ3AAznXa6pvJ2Q6kBSzggCcyUYd",
  "key14": "4f9pUDc3jr5pxfWypAP5ZHTLcqV5S2STtJ3uUu5E3fpB3y8n1oEqcqfFVFiRrgJ78fBUwomySHmg2RJKBvEofkuZ",
  "key15": "31zA1tM4cy3KRAeYMDqU9X7Vs6EdF9UaWdqfTvysVRGdpjcifbTXcwNEDg2WKDYzhbMLV47MFqXGUyXpe57svmVu",
  "key16": "3HkECQSdcvbN5sLXYDHFcTgnmXkLRrpDZpC5cDVdXZb5XWcNJLXrtGZqiugEQqiHvNnuPe2FuKjZWL6Pb3XKfC3e",
  "key17": "4EYswoNHonF6BE6Tr6iLwf1qacG9SQX5BZcB9hGz5q8bg8KhuTXb7tFudTBPXKth2yRmRn74Y7oqZ3xmNbvRpNsa",
  "key18": "218ZKzWMjJfAJHQmceztNVaBHV2vCQvk3sVRvHrBhaJFyYARtWqiXZxzeyqpVSmMXLDvQu84J5qqaBrn3wroWe85",
  "key19": "2Q4BqyU2RgnS5cLWLUFQJuLuHCX6332inBUkMpuJeC1WV89i3jjJvb1dZdbhF1HhKBBkS5cX9gs5FRLPKrBeV4PK",
  "key20": "F4p3q3ZrKYu9tX4EArLAgmyyaKCWLajQYs9wsNdUjddTtfx1NKgvftZwp5VuGLCR7sRGXxQzSASaRtLyVks2RoT",
  "key21": "5PpB6DSUEQ8kAqYqihS2E5TPXZE2gkam68pFVLdbuWFrTA41oogi9iQQuZkWEkGkxHVCCeqtoGurZ88tGf458HUc",
  "key22": "kGS4qP3UzJypWitHpuvv7JsLLZ8eFiS3tNgpd8CMYKUvfHQfRuEzVaJk7ef6QEybruk3XPumfHVx9n3Yd3dvDGG",
  "key23": "4EM8srJT6YGMgEGgcJfGMirTUSaNvKgzfTszPjSYpgJrDmq7vYLypzCpALxLmKXjSofwSu7ih4YPmeKoxni9N64K",
  "key24": "2ShWZaS3aUDwTrCuUn66HFGvSaSNXXNof1XGRT66Lrvp1XqpS3zpyNzPxJ7h6QRJ6rTPF8cFZTrteWNPzogStuwN",
  "key25": "5JSohGi9jTD5uVb1AmuikpJooXwSn79SsUZ4tmQMaTRCHWX84og3uaahr3oQXFbXZueyVpueWREtFBPgLsiEgMJ8",
  "key26": "3vm8XR2hixGPmpa54uwQXs8VBSHwxfQyQqYzpu3f1FKAccnZBdoqsBbkQWhYT9fBPCSt1C5y4hbTGxCfHGbzdpsM",
  "key27": "4AXVV8f4x1Ebd5zfBopQcrfQg8wnKN6KmjsfQZp7Q2sdkhJtuiV3qMncFDLkEi99iNAjFseyga75LAEJHe981p11",
  "key28": "ZqT4SGZLd6PwjoHPQLtbmCaX2M6ConGQM19GxKTjjCc7BqKCANDHWQcGJTHdoquEjPU9S1JD2KURQXjWmsHvDaE",
  "key29": "3vpWLsYTfrjN3gff924eYQW9iUwzFYPSizt3DyKNGxRdDUhoWwNpXgJnWDSvYTHcCsHGtWpHp4rz3vK5WvzG4mdt",
  "key30": "mbTaSh5GMhJdtbCKuRgAa1kBTqbFPqEPoZ2fCGNeuzm8MgsuGtcbVsDki2U4G1WyWw2wDF17s4qEnz8aYcCR8ph",
  "key31": "5Q4Hv6wfQKjhWbbawGLSg3YAEHAonCrDv3mB77WpAorpjKjxxjm1KQmqgeVLQni3d4WJQRhsbNPxws3tTWJuZWiF",
  "key32": "5vzbR15n76qv4ZsJANYsN3jA67JJgcwkM5LW1jDCminnbsBZLxzWsqNsn8drGfEoQTEDGyGg8ozvSE3dRN9rAXg8",
  "key33": "62sFYC3n18pwCEc6BAYvHWMK6ZcekCPXYWRsPaXW6wMw8XfYmogfJP2ZXxQ3HGWLYiaYPehQhoydg5cHuvtPD5CZ",
  "key34": "HzE8YUXRXMrP9jFXgncHqs33J9U94AqYvo6fjZNAY6h5HA3ZMMQZ9xc5uzYUy7cYiEQ792vJcsXLxAecdXkEySS",
  "key35": "guFRVDeAJfhqrEAqyKn4WwqYNA3rV3gwZav9VHLry1YbqKJop7G3FX5EG4VzAgZ2NjP3MNW6n44wK3oAdkDVqWa"
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
