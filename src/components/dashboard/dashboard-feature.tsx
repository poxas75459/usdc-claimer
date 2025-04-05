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
    "biXJEZwgpW9WeUQuouTH39hEZ9GBTZvutEHNBK6mkHDqNW7utE8Zo7L7fUdYdmRyvHM2WYc8MCEV6gd5Hbpf2tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iqzEH6gPv21g1PqnfDJFYz7TeSxqzUrzBwpcHTFLAeLQ8jfa1ruMEdExcLYMTMFTgDkujXsAZcZSxTse3u6MDDG",
  "key1": "2nPoN5FTiP7rWXUMcE8hK82d1vyumV1EjTw7S6AHwvVqFEgyDghFfHKniPbi8JWMUFhC7ym58JZ49MFdmX1XqbLE",
  "key2": "XTYGFRcmfx85jBtphnCFnGYVXr3vbQtf11aMq1i11UdoRRKcr2xFFnn37hkfMnmMaioMrGvPDuUy1FfvAafCxD4",
  "key3": "2iQ5HpXQJgqQSWML1UFPQgyrVr7GusjGaMLx9ANKeA3KFKYu2KFeTkK2Ck9XKMjnMeuSPbRxAJVXkyEg8q3XhDDQ",
  "key4": "TRZhZ7voMQyxqPYz2GXApEgLYwsZzcFNSwRTiJna9GLKx3ExBB93bo2L8YK2DzztogaQCL27h9L6EGPSe2kRpQg",
  "key5": "2jzv7ZvbBAKEgJ3Kriecc2JCioJuUfSM8n1Ffs9vPkv6UhMxi2nremrT7usRAGrdemSZ4YBevEzkXh2s9neRr2BE",
  "key6": "uegVwgaPRLRXifbdoQcnbrY2Gox7BdiQspF3bymk7JPFbCTobMt3Dx21RUJ1jsj51bV2eNPjQ4oAQU64w4KTdQy",
  "key7": "3xw1JT3F8ppLfcNnqis9y3rWqrK251Nb8fazUhkV3wn5r59GrCq7S2P7Y2MmV5HGudTpp48Kr32ypPbTiNvKQWWr",
  "key8": "3x5MzyvtPKGCFGjD1kfKh5J2P2JkHjveGAoEovAhgh3JhvLhid8cTvNhojcLEHUk2UubikbWy1HuwSrhdLoTsdSC",
  "key9": "3eCyJoXZBwd1Eb9P2gvgDnciyhd9qEtbhKEt956Bzw9JKWfdH15NTAcrPbP9jEaZhABcS7aQYderBSkc3zXmS1S3",
  "key10": "32SnCsWVi5RJE2BD6d7mTjY8QTtxJhiSxgZwYtSANBoZsaxJLVnVpY95j1T8sGLsBK9XUK1hSWicZDqXs43XwdFT",
  "key11": "27x2SicyEUGs65JW9BK5kP4q6ahiYYDjguzmbFaF7inJEbjW7BfePnbe7dddCn33AQPp51wzw2NdAeXFs7nXsPWC",
  "key12": "5XKv3bnzVpK7tFDZ8XMydmtJuNGXm8eKDQisAbV4Q4tajJ8YMmak9NiPYE5cw9oGkJcgh1dNVkgzTCsFjannHA6E",
  "key13": "szYddae1VWwk6u8Dgfap4ZtVdzzjAEybCM2Gg74uVHxPXUvdbd9UujhY2XESCES3dt8iLYHgYRrXaPkthnhfzY4",
  "key14": "4J5KNHsgWWHJegeZSHSUd3XQHzvnTtLr3PwXALXASuKoMDjZ1EprwnrzGjPmorjXPshzpy9xuqhAwtLvSUHNxqfg",
  "key15": "5m6XtDwkKZZDUH5ofNYWcgsSgwvUR2FUMPb3x8ejUjA13cV74KZvnjBrUingHfpHaaS8XbBw2Jm5kJojDmfqaiV3",
  "key16": "5a2UiegpGRJnZepU3sv6Qh1oeZahUS2BJ3RL1TEUCr74uZFS4woqpiR4uVVAMqe76cmKd32KchjemyqJR2ZtWDCc",
  "key17": "6fwup73yDQKrgFfDtVxx2gVzro9tz3YraVv4QHCAB8R8DWfVnmxikF1zgQgZ1U3ZuUB71awThZ992fDtRZaN6WS",
  "key18": "pJWPBY6KXZEs4H3xqZfjgUmTqxiYVBJ66btzFTRDC8dmG2YnLvC2k8stDTxCRKvYU54LxmTVgixcDf6BLLf8Cab",
  "key19": "31vVEkYgoMTdW1obnVfsUjfWkAsF3goKGrVyNxJ7zpvzoMbZnAr1ZKMjReYmBUAF7DvjitNZNQK8i7GY93bpMVnX",
  "key20": "5WGr5iJn3AUf35DMNAD1XDXv9X6WLSxMsmvj98H1sixA9jU7RfUzdhiWCwgwMcu2wtJzqt7a4WBVAmdXAQ3q3c54",
  "key21": "2TAvbRQgzbPNEwTvQkAwYcnNykdwFhXnYghEi8w8C4fgWi2xBBGY178qsMMXSxpdFmJVn9k2hfKc13aQSKJr1DQB",
  "key22": "2nP9rtWogeV1wR5jvFZg4sXZuoVXck7ccguXMwgMBAYQCMihnGAvFDa3soCbjqLhtxhcrxHeqUTpPYcVQzYTShHw",
  "key23": "4MjxeQ9GXjv7cBwrQcU18C8YZp2hqoxHW2qQPZr4at9xiWZCCxrvXi9B7UG1fYAYqVCYRJAqpU5JkqgVxd42drbD",
  "key24": "2sZqbGid3zrcxVsbPEodNvtZHeJf6PtC5qf1JscZMYMoFkWUux338gHXm5o5C3gFV44kQp1fpTRo3kN2V5Vsm1vj",
  "key25": "3sRGJFgFJaPG55DwStJnvR47MNoGfM2miQzxhptvoBav4xBcwKnWgoeoj7ZuNAk6XsNuKP4Xt2FRAoynLhVVgwe5",
  "key26": "4FXh65MmFaCbsHxWLtMeDEUVzF4wb1f3kQqadVBy3zzirtTN8ksjwNbwV5aAWQFKnFxmvYJESDWhEgse8mYDhG8y",
  "key27": "3xhHfNESqKJCWWwu1gdW6B1pxccVmR1GbYRt1nURFQd5mFXU6eF5xSVANiXszXaPvFitHakRjUZwcNgTPDm6y4Xc",
  "key28": "5ZgbJ3tqQfmZYyhhnFRDrxzhhYvDERBK38mmnQpuM47Fsoq6tt1wCzJ9NgK56WCZYLwMXajo9bXHWmq62G6V27cX",
  "key29": "4VdfXCujP7BMxzxJN7DerUfqJSBZrweJr3scvRxvL9k6yGJHMALsCjrqawEPzouGJMKTQpXGXSjJi6NBgRM3zjkP",
  "key30": "3HUJorhMmKwaknkhXLfbcaHP8ERVHQvPqA4emxB6ecyqLKHF67rfa5PNKDEBHmMBQV7BD8nbZdP2zstrsftaB2Qn",
  "key31": "3oYBTMXzQYfuLoCJVuB1sjjkgDBQnLPM5m6dtFNigEEMcNT1esHefpSogzkFhvhiXd944BYspsHX8rDU6ZBjWsKc",
  "key32": "21NwXD8r3XrTCVPwTiFC4qzF6jRr3NHATqPPD8mSFTCNCAepJYUVxVRzUX7TEGSmNAQk3GvVXZcsDKiwZXFQwsW8",
  "key33": "5MNetbXiomSRbUDATdwJE5ArZ6j68TEGNoKwc3LUehjQqtzoqLsoor5rawsJxJzr4o4m3mZt1JQnmbLGSWHTGhHD",
  "key34": "2V1fUEVNBiQZYCoQ991rb4qCBTM1P9MpJafwBrmWVWTcBPSgYuZ6WCNNeCAhtBXdzwFrRHjmjNKomFRhPXRNRJyk",
  "key35": "5GoaPsZ7RpEG3wcSndbfH3fhstgFjoLYEDKFvYYc9AQz8w92pMkH1PS64NbC9mUeKEkJTypHuPBRSUuxZrVPtwgR",
  "key36": "4gBnjNds6oMLe5CPgPSJxRVLrLtXwHEeyxXnXsq1acPkwXsyWmeWoyqKJpNNJTWgn8aw5oPUp6etR9jkpaa412BE",
  "key37": "5YKz6DTLs2XADH1L4DvnmTrS2yCtAY8m5kXjWMYKknvn7ixGRgxHPaKtGpPKSLb17LqR8tZ6TeTxLyG2g3XpQETa",
  "key38": "4mGoqRdLQjHHa1DyycH76T77pZqJq1qH2wVuXCnaS2QnWLW8ExCX9YHcDrFtN5V7d1ndLUyQuP6JPnjRkxUPc1GR",
  "key39": "5TjxKEFLqAcYJgUd5eKibVsLH4wXhFGHR4VuajLy5xAsQj5kH83KP6QswdbCTHXxAzV3P4nj8it6PYP1MU36v7wz",
  "key40": "4rwxQXWGGYTqcJatZUdu6HgnsG4sHFr5vwrarNhxzqPvcv7DwkygtWctzK5sV4HSgyojHVehavhCX8jAcDVBoMic",
  "key41": "41ciHueQ7pgVPM7reqXfyajxZ34mEw4yYd9AHrdGvFPTYBXdcW74sbuykjshDUMEqW1BVwThZdn5PNPYxxdtHeiz",
  "key42": "3kfJey4V3ndGRdRNurN5x2Zd2X1Uud6g2tbmXt6hvLF5etQPNAth1Cj2Y7uZpgfXfX6RXY6s1UdhGWwuoEf8ThAw"
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
