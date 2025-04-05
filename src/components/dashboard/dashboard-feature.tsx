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
    "KCwmshd29JyG6fCk41VPCrpDx3aexDmbvH5yThAgydibg2XgSmWxyukyE7mV2T5wmN4iRNj2yYXqCfG7jWKFwYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jkReifo6KiAVmPnLcP2bZ6wuSqoFf5VNspo5vAP4MtvCWKqzP2HVLp448fBQuCSfRkFmRZTrB1vmipN7V11eZjG",
  "key1": "4AXrWa8EanuQC2adJ9sa4zVY1hefeAcpH1GtbkfaDibiXZFUJJEbD4Z3mZvh6xTYZmXo6fM2XcXyWXVt3P19avMc",
  "key2": "2aY9ThLUWqcdVcDN4FeVpmd8gRzR8d3X7gP2YjshUTWy2odhpQ8Q2zxTeRtPsnCoHDoJFbDkbDXEJK2saTKqY9SM",
  "key3": "5dJUBHaS86z6dqzBUYkcKWknouFMu8HD5GvYzZG5pGUX1hicfA93Toy4tGGxHsEuvwXrMEZU5eScTrfCXuLJSp2c",
  "key4": "3YF4y1VZNM4TjZWmdpXjBSju4vqp9VcPUoAmYmKvTX1ka6tHnU1Lf57BFvsbQny4zagtsozfM9vf8tBTCmrpD2Pu",
  "key5": "CqsPhNsUte3SreHR8wrid2qeceoHLbtR26aY75UHQCqRCPmZtzLN2UH8WjwwZtrPLotzmyhoPurA8AWfPc6whk5",
  "key6": "URqteBbTUz1p5YfujesuHk4MKLyoDM4T5ymQgXpHip4cR1BfhBaKizcQG6V3Vk3UVV7EBN8ESxtq4eXdFLQUZhg",
  "key7": "2JHNLb6tx7vpajK8nyv1d58BCL2rC1zmdbCgqFyXXp7TGo4QrZktXctFk6YrzE9Wosxpha7hjgMwwQzPRRt2e3Zv",
  "key8": "3fXrj95Wx96tDznV39qSdjAFTKBeNB6yt2BiBotTPnnsaujUfoAR22pMtjHzMScSYKRFBvFyPQSUDCeNpRRRkVNQ",
  "key9": "5VEVadCWmvfrVcryt4E8S918Mik58vQPCaiKMjsZc9KMS6Xe7F9J7TG2T8cBJZjrwZEy9ofiShGycncxJkLQgF2E",
  "key10": "2hS2vjfVvQaPnfPQZsQu9RDUFeSVPe6J6Que8AcjcUFepaU2eT3tFYDXhE5phQuv23GbbuaGjqNEYDCFjk8pJZFy",
  "key11": "3bNhX3ybLmsrvAN11Ri9UtDwhfswnXxT1ZWSQTa4xftsoVRTS3W4tLJmEYPvGBETPj5K71HyqkCYLuRQEg5ZLEjU",
  "key12": "5gvuV52pPkDi3jQ36SFWSUj1y2hTA9ceR1JDbTcPzycf32wZtVGxEt9FZgpGrky551ERhKXudJmGrCvGZqH5EmK7",
  "key13": "5prsTqtoLTBuQzDNmJ4XccH8zNwSasU9Sz4Qeyavqqrbb2wLQW2XmaP8qXCRTAgnksj57UUxeHEjTP8sqvRGfjyy",
  "key14": "2R71euNVVknUVi7MUCeYXqYERBqGfusGSJZqmQ5ScGQUkrzK1Vq92nWmZXPa72cMtLM3HV9wG58rmaknnXxjrg7e",
  "key15": "2AYpFYxXSFGYcrssSNZsivYRe2kb7wJZXxha7W5HtXGkejAvtN2iSFD1oT3Kv557uVFBLJhRWv5KC6tf7xDE6Khk",
  "key16": "nHwXCy5m4GbkJSWX8vVm9Y48QQZ6RDY8NnGav5uEMKgAbmPn381ymbkQJQezFcDrNhisAZSZNHyEYQ1exi1ptwv",
  "key17": "2v9nA7ADRDx54GbYNkWfTqYkvZuuEgw499jU8fasBxzXXAwJNjnRUnSerCxo5sgWmEoPEXFXJdVGY6tjt7LepJPW",
  "key18": "3YM5naXUTeHyadx34nKeofooDkxgZn7QYWLK1xEVsq7gZwX3kgVFJWy85j2iLeL5ysQ2QbFwk3xWPQBhoJWej8CR",
  "key19": "dYbGbpac53wJUa2f6EPCwmLmWMq3xanYDQdZjo4TNneEWjEQsnKHegRwnrUtwbCsHSEDPgLAmvssduDWA3RjJQt",
  "key20": "126h2WP2475vbEhH86u3FiFLTndrXe3SYVe55S4K9JYt2tiGKtrpS9wJQrVmYhAFQ6ECdUYsVY5U9QC7jeCDY89N",
  "key21": "54HcHxkUuHheAkbE3Xnmcxe3xoSda9n6rAodom8vuSsKqDviZqQZP2zSt417BmDVUDFzoVoqpqgS1CNM3VaPkrdz",
  "key22": "5Cj8WAFXWmNPnmZ8AJUFKjmXHqjnnCt8PeQ2bMSzwniwuTCSHNq5NVWiUttTY5ucXrhMsk13KEgexa8e6HFSo7cK",
  "key23": "4pkyYDfdoAbZ5TaTYvmz1ZmUhn7F9P2dirFKGPH5E3AJJhknhHshG1SQkG9c5xCYyceJJNXxkXHiYPn4rH9Pmf93",
  "key24": "4HE6aYuiZnc9CpjyU6jgBjSLQxMNskPXJx4VYh6n56E18vZ3vnWbyeGT15w7JJYsFtAWXV8SjyCxiNNo4V226gnM",
  "key25": "ybymnsUDLmQ8Nj1j8B7sG4tH8zyzhHMH6rkMwGY2heV3o5tsgkW8ubo8jqHSVVY612hJeoHqbhr8Rm2AiuVxGrP",
  "key26": "4iWMVpmpRTz7NV2GHFcZjaFQCZfKTAF76KDndKVecFo9vSK3RsS1NrqbHHEEXBqQoJAi4zgiNmXWjY3omCJXXSku",
  "key27": "2jn8kG35u6sCKvrExh1BN1HSdLimcpG49TGaZAhZ1zwJyQJBj7hoMPKBXH2BktyRWYU69UHRFM8JyrCFJhpz9PQD",
  "key28": "5V2t9x2Ue6nm9R29hVRa7gTdecYi9SHAgNnUW2DEjGESKrvHEzciEmGH1xKBL2kmeugL9a6xXkVjEH622gP297JU",
  "key29": "NVZwtKgwKoxPhHQbrh4R2MqhxcraGAk9M5wTaSaFu1oNUzCHukYYf7tWXD28oWv59116upCLjzLbN1mNkDYdpUM",
  "key30": "3p8LmpTErzy1GgPJgVMWqNp9RwWi69NkYgWGtk2V8FUj68ULTFakAYddqJdQNojFy6ZjhgFphTVPBTimXjiG6kHq",
  "key31": "2nybB3tXh4CoQWWGrxuwUckY2nRra2Gefb3RoLQ4Xp6xvBhrh6EmcHWDS2GonC89qZ5NaimgmwN6XCJUnnRBWqJ7",
  "key32": "5m3QJd4pNgQuh4t7gnLZb94xC53X7aUWuW27cL23mbidhbbWyrbQserGHFGu3Dtv8GjsBSijKrwHGmxX5PfAWnuA",
  "key33": "2ambhXs9d8Uztob6mpm3j7YrjtSUDcbmhSrHeJmrZFUn3hEeWnwoyrd2aZgHq6CWLTTSdEugJibqgHXwweo7mFYo",
  "key34": "2qiCTBVZPvsNYTxemcsYwJ6rBvpS9XpD9bGZfFX7Hb9Nn64caxwTABQTmcUeba46izpoDrGNxSXByTYSTS9zL2mW",
  "key35": "5cPMSy63KVyRtv6gfYRJwBnbo7DUpTPUa1n6qrEma7TcUWu2vVRHq7MAzui77PMBJhbASJ16ggJPkw5Qsrbem2zn",
  "key36": "5ArPqHT56uDtcMEbn6WbwqtyYMdps3v2mkQGFU5igc5Mau8To1rQJjgfhKwGZtXmMkJJymRh2FQRgZ3GJxEKKQwU",
  "key37": "5Kb7GunjHpn4WMbFAapByikbaS4ocZuTUjc3yfZ9AR6hZSScEKRCkoMwf7Czq7TAo2jmfU5J27kYReKMePJGtgf9",
  "key38": "3s2LFL7yyQijaU3kPgydZojXvE8Fc9rdK5o4PrnUR8SCo7ujsiQkgUK4aKrEUjXwti597fBpkKFp2BKB6Gf273VK",
  "key39": "3Xn3KgnJVaN5Dik3xhNne7dHgvcjnJA2u5ZFR36M6X2hReZxxZUvWyY8WRKVUAL5WAG2jFQ7GNhAMRNGhbhv2TYX",
  "key40": "3QGcrUanLWQxPxW4WXWN1nNHbFc3PsKTjc5MhExGrMpXAMt2TrdW9dqLCaYdizTvyJ4AkdwCvaRon5S3ZgN7WPYz",
  "key41": "4mL5GMbsMEz7H5u34fNTijop5PMf8du99B8r8NiTLfvwzwg56zHPHgHGCMUB85gjejHvdJtQwm8mWqXcqSCJuYsv",
  "key42": "xkeJfYnxQNPBEcpp9SyN5HUkNfui36k9g7TiJFyb2feqHAwFcFoHh2RQCZudBdQVWZmJjDohzUr3UEhXPsqC9sx",
  "key43": "4hvr1wEPDdkSxFW5BAKbcUpDGECJT3egJ264LYsijmMKoMQ8693RfmW9ZA6WjCkbdikJGDwApD8mssAfRMYmX2Lx"
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
