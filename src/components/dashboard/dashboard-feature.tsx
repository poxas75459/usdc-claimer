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
    "5nSTwjUXrn3FxwApbup9S29Wndy77borBaC5LcZj44Nr2uQJPk9gHHXVqpkcBhECCJvgFBJRJWTQM6g4jTUurqod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sQhKqGX1NS4MSR1e2CrmZ2Br6SswQAByqCGq2JthUkxtfjVR1uKdb49Y4z1aAQVVnMRbxpa2JRDNsxzM7qF1a8",
  "key1": "N44qTmuPaF5LWphmLspbruYRKEVER4x57kjigMFR5EBBX4r4ipe8PkqxE59TbBiZUogKZASU2AJgaGGQuGke2x4",
  "key2": "4diCuT17BGTHV6DEoj4KPi8pPdTg9AkKNQD1HuZZL8px6vZSF2tsK5H5Jc2QZnVD48XYwNT81mSofYXF8tq6ZJ84",
  "key3": "64RiMEkq3aww6CtqLp9tQ5FTCwAPWHYPApBfJw7PM1A1kGAPTmrg5V6XDPFodES1RNt7cJZgCDzGf8Lk9WnjWETr",
  "key4": "36o2mZ4kwqQXxn1WLBWtapBC2NZULSQVdWQPJVDR7zF8yCZxFNkyMS5ijc66omWgq8ighV7Va9dPZAxAWpwfjNcD",
  "key5": "34496BFKwp7tPyEJ855isuLePWKY2PaUPRk8pAhta2TxytZQqKoXcHryBvzHkmpHUQNwwFch49ru5dkhV6AskHn1",
  "key6": "xYqHxR2CoDio9ePE9ZYUQnA3hPX6V2Hdcf5DzVPEQaL23UKmUKYgi12B5q7NPygsR9QPgceLKNBkHFw8uJMGiTi",
  "key7": "Uz6w2idJADLqTQMPys6kiUKkwA6i9Z5A4KWY5TD4YCVgVLkFsbRAGLq7pKKCUX5EuzJheeKCaeBXBVdDuF9iaKX",
  "key8": "eTXcctZXviGuMrpjN8CseNPE6uuy2Ssgd3rwQsGtpRWF3tftBfXzhNALK4LjohYw6Wu2TDzi6d2adYLbo6Te2gL",
  "key9": "49Ssr9LjVMQqfBoHCFuv7MzVyQjqZ6Jk6LWjUsUQpfhL2iwj6mQiFq97F6cDwaaXQi8T9j2xsLrSoLAQsZZ5EKkN",
  "key10": "rYYQPLyz9kZ2GddKx5hn8soyQ5ZSiKnjVF67DtcDNUU7B3XqrvRMMw6MXnihDc7gtrNk99phiACRVEhSXHuF6th",
  "key11": "3soMKvYFfR3jPd3LYBzkDNKYByEFJrsqBPqCMESHnR7bEAgySULgp5qT36gWfEjrDCYCw9g7is295JthyqwE3oH5",
  "key12": "43r2ZqYi7PSDdtGT2aoN3smhLU8HJG3m2j856vVjbHMzpb6Kg56vgXGMtrUqckduykJXt12jZ9Mce59n4E1FeLzb",
  "key13": "5fV1eLEKSDiCCkKxSwtD8QM3BcGx6HFcdyCMbMBhFurLCgpVnJ5ak3eADq6PdhdQTdDKQZrvZuJEkFG25MS7W92L",
  "key14": "cKmF1MxiXNTiqPnoz5Tw7Zusqex1N7t1pmkSyjTZ1TG1zsRTu833PccTjz2eBAaqYkxdWanZSvpH3nY6im4UNNS",
  "key15": "5SJ57aMEeghphcvy3jxPx9ehRX6BBZmx1RU3DaMpnJjD8WBPKdYQMrxDEjjpicLz7NAPyefRCyMvmz3juxfh2rLE",
  "key16": "3633iK28FM91mnznFGYjas81scWT894rH7a9Rc8b29ZsBMa7YpwJ5gA9REDTeFWfdSvPHPZzzvJdrbcBkAYyYB6B",
  "key17": "4rpQfS9nUsdPRLR2c3CzitDco62RiPzKm6yeirHpwr2WVza1CsgyAHcgJUpqTeZydzh5Fj6vE4Bx4siMBtTNreYp",
  "key18": "4dfJjPSCWHuaqNvq1gNNpsDsMsZfHdJqytB3mBSkoLSayK3WPzZ2ZFExeiyL2V9Wjf87WzSrp8ztnNYaE3BMGrPS",
  "key19": "dr29tGTa4zibACVzWwPY7NwUrcgmNdRsoDecagHn4zwC5414iUofqCTJH7mNywZ7gA3QFtECwFF2NfjSwEf8NME",
  "key20": "3eJ4a1KT4w5ZbjShfZ423szoCgWf2pqY4UEdvtzhHNwSW9wJfQ8f98aWMfoaY1yPcydCU3gYZC7znTr83xSayCow",
  "key21": "66PecFUZv1cUjXLFoArBPuCtx9zUjXGfZ3XPxcrAX1LKcuRCLwV6Mye1Yr1wWjdDLdpto8LRqEb2tRVcpqBPKSeq",
  "key22": "jqrWitShUQGCYDCDAcGgCoyHhLDDgVjFbVE4txd5unFCpNMEgMVuCJeETjfSPx6qreQSUZ9SxjQjLZgnYDeViwN",
  "key23": "5P1p94N7ABa35sZH8SzgYD1kNB9aiow3w2LRMy6WW6ctvfGhE8maeWjGVP2SgJ2U8XMxNQegaPZ3fELKFK6wfLCt",
  "key24": "2i7owwLMS1sZ8p6h39syngqXu5b7FQYC78A9A58VPg5P5f2oj3gTyrAphzudom8SvZavEqhSJWzJvU1nzWP5eMmG",
  "key25": "3n4eRpq3HuW2bBzo7jAes45sgva5bBuFCEsxDHRVtp5zNY9VbE1nQHp2A7pZhUoyG9mbcFPhzEvniK7dnUkPohwn",
  "key26": "5kDhBP1t9YYtkydRJZxGmzKxtYy6tPWzT6W7TbAdkmBnYREkcQXxkTdSicoWKhu4QCNVNDtBmrppfHsrjZLLRcP6",
  "key27": "wUk22wRAZbgMeaDkKhjLh61REfqcwcTuAVed7aUBNMmEDa7Ycjwdoiys7fcYGroqxVUHAKS9qFLW2moDpDr1hyf",
  "key28": "48SwunuAVTTJP8MMhp5JSY4RWSRD8BbvaLwz31iMt6owMzqAWUQaphYkcibTm1qmXpdW5gqBoSnz3MLxeQwuYFeK",
  "key29": "5gPGkshNAvTKWh3DsYPd4TjW9pCA39w8wEPiPcBrSADb6ZHJmCSK3SDoiB6zxd9DMBkbKX39aqRXpp6upjMmYJxk",
  "key30": "4Ae3qvL6Eg9YdDggBgcMSNHLEzMZRxKHaCYFfY4wYmV3NCn4xrfDE6KXiuEhia5DwvVGsNsgpy4bRN2qPS4WYvSY",
  "key31": "2wXnVn4yZetAqva9pjZoAajJdnBuLrxyv4j53j7Hx6GZu7q1QgQ5rQw6i2pC7YrjcmNrgbSsmZiyt6VWhooCU5Wf",
  "key32": "iyikB9CJUnbuBgXJQ1cHT429gxtxg4pb3PjaZB4Zibxxas4DefQ9ZKWZxzJuEADFKwbEDscTTsA72ZYZSQuxKSM",
  "key33": "2QYRHEtjcsDntgD8hCgZoUbcmmKoAyPBb8rTbeY51Kd7M4iXNGTTaKWm7XWAEwEY6DnPCRsRGQjw64f47KiC84T1",
  "key34": "5vNRcx4jR6mPAoFTpWBtbRtRvGrkM49cUWj7Z87KMFWH6MGbH5FrqCr9NGZX4Biixp8hyarqD2n3DPSN3Kf3mUFm",
  "key35": "2HE7WmDMVt7qsayxPNrmM6UMPNEJofjZzusFWtRgeakvwVUjsMAq48b8LivbXwwNoCShjxD6J8v57UMQ3YuSzhWf",
  "key36": "2RG2o9SQ3qZQAFGSF8jpRDUL2fJH9oqMYuuJm61XPpnbueKDgeUfSjMmg1DY1WurNeA1aUnqKu65uAkNdMYqFbtC"
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
