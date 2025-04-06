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
    "47ikL4Aqx7TZURfHLZkTqLNWoXzzERKyCiYWwZ6Qp7iiqDuehWNJv5gTarMMccNV1tdvtdZoDq85qHbfj1vdDV65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359fWxfnng2FKW95katuzAgPRmmAUzeUh1PPvAaKeQxD7eFQvMP7YXfDRD8XBDipC9nErNEHUuGaRxYKhMt9dwe1",
  "key1": "3dSK1djnJDNAQv3Lqh35UxZgGDGEwZUgMoVG7dKNm3jzRaZtHbfcWsCnCeLTx9zVfrxeYJa4nXuzSetd1kHaya4J",
  "key2": "2s5qnRuQWe1n77ExmuxfXWSoQbqu9bzsM1422dH1ipwWvMK4Srwy2BqKxjUJHTX8h2t5N6RrMfgV7mi2drRTY1d7",
  "key3": "1q1RHvaBmcUQLLxqbHp8sUFQQ4Rf31A4Qx25GvPN8QbAKpx79xjUqZCgHdpVZKLEQdzf4A4ZVpUKkFVSiDcM121",
  "key4": "3zuUp79Rhq6YHVCJ4S8hgQ3tVVW4jRrkd1HsDaPjB1FWWauLzFhUvFBMoLxQnbue9RkFmEist6gpxSrcnfTRt3eL",
  "key5": "4v6tzUa8kNQ8Z6NwjNYkFZqpAy1VLoxYGDgkkg6s5fvQRgpKiZc7dgWVbcX7e744soR8UjfYzyK8oCDcYTUHhmMm",
  "key6": "4fubiPspKQ9LbBjzo41BYqe4sayX7acatFLEEdWpa9cunym4CZwydmQUdVKMSt5wh6xqRDERebAimUzVeJH2A682",
  "key7": "3SuDf9N3WvoVm2qL5fo9g2ZHW7NyY2YEpMQVzN4gpHPVR8A9LmugMK2AgJeqzaJF13WSnp6tRsanSbfSjrxuAgS9",
  "key8": "3qdrfg397rhZUVhK5ja8Mq8jyhtJFyB8e7hGLeGboi8LzzwkHbxPVCFY4re7z4g2DkcbjnhJ1teHBvk3fuuKCgV6",
  "key9": "DKNNDne4uFUrkgTyFYpQTFS85LnL4Yi2X4evCPk6i2AiaPjvmXXWQpErPVEEumJXkVHrE9Hm8TamM4JnMJHB8FV",
  "key10": "2KXMmJRtBGu5bE2DNYgBKckATQrpmB3bEkne8rc5mCrQ3F6WCByUuPw592d6krd6sgxFsovJRSk6DaKmJtJNeXJV",
  "key11": "5ofJSrZQRWG9MimFpibRtkGJvS1iEeccCmMU1NfWw3zaYfwbzBsB5iSrMUdVVcwDsMgKbGqg6WtmKGKgU1oxLH9F",
  "key12": "jSmEinFj8eonq4SjLRYa3ow1koLadp1EJ4s3KrsRqKuyDFMRrApHkNp2FGUVEAF5nMu4smKjRci6QMUwyu3ARcu",
  "key13": "2sjvvtz5PN5fKuSdR8eCeDEtEC4Jt3wGjLhSwrQshc7uFeEhGZ4Wg1zt2B6h19haTGHj6kfFo3K5a4vn51F5rJAn",
  "key14": "5HogAHGS7wexTteKgtv9qXXBEhNJ758xH5tske4qSpEqe5zYiJvUknGVa9GDtn4NjyeQBfEFBpiyLcYEm1E6i9pt",
  "key15": "5u9H6kyhgNLgVF3p9GV5ypRTSDGuWNSyynouQtNduxeYzFWNZWhiWp4GgYBfYpDTQwtVQc53n2ZdnTCghh1Uqjaq",
  "key16": "2A4hHy64nSAhbbe3x5tdDn4Cutwp48cUV2QCc7ZA8imqauKUnDRVVnDNeN3tUP7k1LA3BKZ4ynHrBN7wXKfszAEX",
  "key17": "5Ve7t5CNwDfJsZfC2qVt7M2xbvacRFV4akKwyUfaQVXNZfFPZMCqTcixfaFtBEWoyb6qZVYtMeNHLZB8cmgjnT4v",
  "key18": "bLQruEhqFBjv9yXa156HZxENc7iTAfxxpPAhxoiMzgJtaUGxNN26UfhLd1hb4Ke3JZpryUwwCU6MxFpQfY7sKEp",
  "key19": "5xctpctKV2LawyuFSC7ZzbXD7C4UunE3XM6XaygL5SuK9WgdyquzRmA89c2zyFkkVzK1EHzhjRdnobTqA54L4tQL",
  "key20": "3poo8y46uUmVP8Ro9y6YEe7KHpnymoUjdVMynz2AX1VHMUzuQfcM7NLZQ7Wn8TpAb2LeDsLfKy9UZ4dw8eG3WEhX",
  "key21": "52av4MNo3tgdBjwSWN6p4dzVq8hx3Whi3FtFcp1aK4H6NmWgtviDSVyGT3YBKj99NnnpofjM3MqNyWJFRxMhU6v3",
  "key22": "8TYi7PmqPVPRLBtfcMKiZwNnt2t7CZvpThB2qofyuJpwDsgxaBqi4uN5zWu5KfEgrWTrP5ZjMfA2kSw4LS4W95m",
  "key23": "2XxecBEF85FHV8st2viu8mg56pXUZ9En77FrQuZ2mfhVG2854TgFcmx3aEZ6yvB3CpgdZHV3tUTX4CHtnHbXk7f7",
  "key24": "pF19ZdSuPB7pLkEPuUnhS9bSYeWdVkN3Jc8uPtVZffEQ7YUf4NUDqGYe6uYmsT2CqhhdszxcNX1xNGdVXVdxax5",
  "key25": "39PV1qWT8rPGcVTmMPg4hgbV8YrgRCnmhfdyEGVUMHZTcn6oeNaL86ViLVHsv8ueGitqTWS8FamPhyf7yRdPLmR1",
  "key26": "2fDimRXKS17nBQcsG9ro6vAh8QkokfJpRUUUTMXLBLzhkptLFXD55SRFY3RvHbtdMTtVqjKwYcXyBJkhmJVCuQvz",
  "key27": "3FMzcpoaLpgsvGkT6xm3cgBbcP27tWAAeTGmoXBGGfFdYXpVuGrvNPojNoXqX4uUBcZFYNszCHKmAidK6FjySJc4",
  "key28": "55SQgjjQir6eMLDhwehVBYACLEAoiuYuGeBRgag4gyqW1DHjXvQsnwdpDWDnTso8VdrP8M88SkHFn4GVMG6FXodY",
  "key29": "2nBs4bJcrCitY4e5Po3rnLKvSGM2549gdsTqSyFW8rSwpEnaVyjwetFH6RkvszKm1CQNSdHdt2AxqvwKUKcxbqUt",
  "key30": "5WYfT8gpVbqZZYd3BoQKftih6AXsh6qmxTUsGr4vwfnad4VUekJRSyc4FcqU8896EGayDoXPPCt8VEY3z4fZWzgx",
  "key31": "PXoGRsJuy6uyED33buCb1ZrcAUPgDeSru9pgd32CZPaDTkuBRvHHEsziLe6ZKYT5CqRrcemWNpjRuHsUNGwj4ER",
  "key32": "2PmXLozEdQffn9SyCQWvDhHA5RD3PLDiqTjRVgC1xEtVbNkcrnKjp4dUTee2ZuhojeuVgJWC8eYr2XDQTyJLD5qJ",
  "key33": "3SKfqVbQPLNkwW5nX7zdXx1wbjKdpN4WhdoQc62g7vayfKPgtzaMEnV6eEm5xYEsqTMCtM5e9uvbCwXCfvhztbcE",
  "key34": "2DtvWGRXidmHkz98WBLp7qJRK3DBEk8qDyewAyDWYKfTq8zaLdBdNC3pwhEjNQc7fxtCpPQV7G7ZUtY4SxMdiwvF",
  "key35": "5FWhFm5gy7wxkXK3x8fC8v5bf4K2FcVUn6TVYWoueHpNfv3WZMP3dxWiaXqxPcFyFASQiV67qLSZgVNmPDeUNZq",
  "key36": "5qVYsBwddPVp447MivqwGmGgc6CWNCsLoxaAZ4HaGHgXSoLZkVPUuNhepZ2VWuqmXHpYs85mHxNCM19xjRaHVxbA",
  "key37": "631xJmoRfZXCHQRErg31SXn8KtSQLAcD7uUxtzd2aF7JtkheKcXt1gCDTL9yQ8KsbQriv3EdN939LyGMyVm7PiZR",
  "key38": "5GrmRP93KnMLiDEiNAVGG74vUVMWp6wJAfGdsYG8GTrzBNWn1nXJVwinCZutDappBnh55yibJjNvvi8NCUSbCgRY",
  "key39": "2JzESVxYTMQxYLsoahDjWG5GXzUGPuUkWLBWXkF6m2s8FMvko9sRg3zKkmmAvYjry4cVV7ssc3inz76Th6LuTQQQ",
  "key40": "cDLRL1rToqwQZ3VacULzD9R9w9y1Zw16e95jn2KjCaSFFqZVHX6QiRVQyT2FHjGCB6wNgiyQyZikvzm3CH5heR5",
  "key41": "3beuNqkwkdthRmsoPdHcNgeM5LibUUAfLEXRbKoRi2EeS53CGiZdFQN3uyU6hysfthMXSamAp3d7yuGBgk1W4cji",
  "key42": "2VsbED3yMr1CFBejDe3GYDfFpjZMJvZHfZrNebi8cK7e4R5M77QCQRXzYqbPYDhqP6vNJrjKfTfeibZHnXrGvzsd",
  "key43": "2gCXzRurVcdXdpWNC66UpJNBU8dRN4EJq6SrPUf3h6ZdgiC8EVBUasxuD3Xs57LPDuZNBnq1znYmj8zrQDgZQUHR",
  "key44": "3bzmY6Xbqyz67WzCbjjnMTZqf83U8WxouA6fQ99zmfQcavryqnKc54f85VyRYETzvyToC5RFszT3VFK6eBbbPwLc",
  "key45": "2duDaUBdDyphwozubTtM2h1vXK972hnBYSvzGY32cFKAaiKagA6tKaZMNZ6bQnhrkgmzTZ3brvBKbvxYpdb7ME9K"
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
