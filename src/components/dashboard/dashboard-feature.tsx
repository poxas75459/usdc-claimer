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
    "4J3YtckFejRuUrq4eTmsGzFsGJz2X91w6fDms2uSAat6FR9cwbszoCyUxnJz1A7hTA64PnxbHNkgVcyi57fPvbme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cTnV8kZW8Ly9Bxzqc4XPCEyUWe2DeCMDi9NRVzrUwgFF2Qfsuwnj6ihNCFc1LGxstmFCfe5WGu6FGFnXBkbrpLs",
  "key1": "AWdSVfPMeimHo4tmT3TB8g45Q47zcBviKYwCLvTSALVdTk57vMXSLxf8ATETdXvyhruLyRM6mHXrLH7oKVhWW39",
  "key2": "4uPqrn7p2keQW2XYtHo8vhQq4wNzjPV8YM7LWvmQdXohni5dfRL7gSwiLgBkeyoFbaRJDpuwu793iXtjZzLrkL7q",
  "key3": "5AuQyYWeGkdDaEV89Q1yfkyyox79UByiPyuQKKhPirJkek4YxZSC3NMtoSLG8B9nSkiyK3cYNN3nKeacNL8jXbom",
  "key4": "GhDUTP5FGFr4xGxtZtK6cLPTeoFKTzneiYy9duwoVCirid5aSTLDJyAEU3CSE8eydN9KkBYGumoMNzFk4eSSjKJ",
  "key5": "A14ynBR9Jy6NvRaUw7p6fNrC8PS8PsUyPEBhGp2swYbzgFhQxV8gZNrPDEky7bjaBKCt8sHZ2FAT5yeroVojGo3",
  "key6": "3GtFEVcX2SZvjzuU7p9Sbe1B2g1RpdabZxtSGPnsmHFHtqa3ZWuAhEknteDjSYST65ZHbVL2tKJNGFARoK45jfLu",
  "key7": "2tUGrPmHF8YtPZCFPKBtAEEjgACrBHnD5fdEiyS3qdKG1mKPtFR6gGAkN4sh7pTz25CJL1Utn4fmXas6DXMKj12d",
  "key8": "jsze9DdSTWn1cm1GE4W7FsGM97TW6xFJfSnMoMXDfUHRMEHDE8bzfMCkxoipGZyXvB4FHVNZAhhE9x4FsAf1u8R",
  "key9": "38h3WyNa8RK5AwiG1ao3MoPkuPadTtcw2QZs1uj4eEFbxfHqWDFzPwym4WSL7WHMVqhrXD2z57h1sAqcC74pUnRX",
  "key10": "3t2TADQBAwRdaWvKM6qAqXvFKoMnYHQp71s8wsmMgjjkEMYDucYjbB5bKy9Dx3Q9JWMWzvYTBvtkaw8mHpXiGiQU",
  "key11": "3XM721gsVmSL6Wn6D8gcuBQXemdgtXbdN5QSqXxfjvgn8WUfvXkJUTPRerxdFEypxAYN4342Z49J1h92cMfNZwYy",
  "key12": "2b93fKePKAUQK6YnSapuGZvkTty5h3fCDGegL4iPNLBwai9QiLFHtGFNhSzqza9VJ3H1Y4wXcK4eo3Y3yY2oMeX1",
  "key13": "65quriRPKUGTZ1hm17QfNqk6LGLeFMBZnd5DhSySFhn2oyM8RfWpZ4ELKqA4cS2JutoT3Jdj11K47VHXBV9b18CS",
  "key14": "5zNn5Xw9N31ZfgjFSoMkaU2966tBQ64vATBUvuCU3coeYnhLc8BMT1fzQAbqdjY9QBeZJq2xvcqMGNorw7vFr9vV",
  "key15": "2aXoa619T7HdCxV2dgSpG7g841BwYWrSghZ9KFZvc7NuxPXtDsgRMLGKrSwDG9bAEubugDat9di7frUAnyjqA6Vm",
  "key16": "2cmbVstZzvHGTqa74St57UggG9dqEGNwSkDo3SxfpdizvtvEVRXEHF9Ahs32GHY3ciEMpuvEeU4foVVqzHUx8HLE",
  "key17": "ATL6hLReC3o7a9SRvQxQNnz5KSJ1bA4uzfyWNrkkx2mvWeneeWcDEtbm68b4J21UGZJjhue8zBHvtz1pgXoRCzD",
  "key18": "33BmCh78AQa7MjTPSUqqdLp8XFsJZXjQ77T914xwRgt2fJ3RovrCzQc1DwyffVsPoVLmQqQ3p6zurgVa4cH2D7p2",
  "key19": "2oKeCaERQXVYhqAdDjFjeETDqfcN2swBXxzFQYio6Rzn71d45nupkEMKbxi82ZZ46JWgzQ9y28p32GF8eL1wp6uz",
  "key20": "vhYg9aJFdXEjcyPY6b1URKZsDw6cVwYcrRX6aFRE6423Hjgh1t2fmFyc6wbJnJvNUcJe66GnvAZcSoiNpVMSp7W",
  "key21": "3XwP2EM4PiL26kJskLW3h3ZH8AMFiZxYC4B9zfdFeZ717aAMuV5nRGnj8HhsJkKxoa77bULcLVjkwx3N9QpZ5YRF",
  "key22": "4nui87tvJXThDUiTwqJQdRBTGmWVT2P9aZk3GNWCBA7TyMRuTTu6JGjwi5b6vzDPhjVdew8MbMkL1DbDdEzjKkHR",
  "key23": "N2NVhq373FPKv9J1LNbdkDeYjrDC3GVtniJzna2aYkg6mteTHrATJmgRxcPKVRRVRP7xZFYhCgknMhLCPtGwKgR",
  "key24": "34WsQzwBadQzxYog6wqFeNkhDu1dfKqRYzcePUaXosnyREECGGvvGhK2eLBJwxSNfyYqPRvB8d3cWGkdqRjX3Q1k",
  "key25": "onCcz4JeeNBiH6oRt1CMCFjhVguBey5DBEUNm5kpEY2PCRhYzexu38MutmcpeoCBtcnSi8kmM4nJqYX5RaWzMck",
  "key26": "2ZeDeFif5T9jbncJcFXtZDyN6Urn8dJCDNRhjVzV1VeFFVBbNEhwGvH74jPEdQzyDdfERSqsQyRWH76GmRm8kpTE",
  "key27": "2dfH3dHqgokkDHcXmiLtt93wNiBFfSeQxbJ9dunTd2kvEZFEGfT54XFnENTsNsgdxgYPANDFEUYvHjsXdsyD534x",
  "key28": "sdZGXfJLXbsxT52aZvM3HFFwLBiSvJPCJvox2V91CoVb1cmwyxbfJ1mYbWHcs1JrvBsGvX81KS686S9Vm2mtn2B",
  "key29": "4UFVMce6cPK9JzhCVAUwtwDBA9BhXRXsTiFaaE4WDbTNiTsnyY1KTTY8mN78wLsYNx6ME4YbRWF99VEaiZjJSsY7",
  "key30": "3sXqRnVDbne7TnRgLs37Fj73KVvFvMrWgcFjTWjLHkLcA3AXMMF8sTgpPKEfg7KwnaJmfyJwvwghCAEMBP7F1WfL",
  "key31": "2jjQwJcXnu16Q9iUnec8y41uJdMokmmHZCmC8zmnt8WJrK1pL95SFryvjrnPowRtPSNYzeKexT7KEYJrXZ41DKts",
  "key32": "4JToDcEwe2RgbEs3XXauewP74GsCfMck6Jqw22dAtUgjTuzSfaBsTm6efUGxEYS8yJUxGLuUL96qfSfr5G3QLoCN",
  "key33": "2DPwUxeSKNcHBYjm8oGz5GFfEfN2XjqmmRQ4wfsF8aK59WjY76Y1KAA1pb12FNMPMQP6UFS7JtEUBMtNtmrrq6oH",
  "key34": "47dsSdVkGzbwJ92ujEFdU67bQkmc9nPoPrbiNFBEqBZv6DoTU11Wh4P99wEwsW5Kn4kNoyx4AKiaFqhEjPqUJs8m",
  "key35": "5ZAgBrUeCiQKiZvYd5x4QoVCpAV2pKxrZDUpExnLbubeWjmZzhtgrfenU7dFWJAVEAbEkn6Ys3Mnjp6qPLk2qunJ",
  "key36": "59kCdC1Dm3GknLxUkBgKNpviBJH3ZT2qtgsHUqbnoZzvq63in56BLPDgZzg1EctKuBnabmSgZy5vbaDq7eAhWdo9",
  "key37": "4yGJK8bybqjdREFQAxuxUitWVxoTMQvJXheHe9ev43nQNvYnNLvYLfEMjqRedDusFnRHmKWjHx6EZMtMPWoonLi2",
  "key38": "4ycaGQPap9DPDcptctnMuJg6imVHvYoC5ddc5V1Z1wHLex16o45NGCs3etJyzoQK5tov8euacZYito6gnN4in6qY",
  "key39": "4wCprACjmBT6svHPJYAy6gJMTEvgjuFDym8ZBAhbS2z92m3GBP81m11JfzZ6xc8pbxJGqEMu7XQcVTyhQkJ518jX",
  "key40": "BeuU9ai2eAeBSBDn7HmtMZS71bN5Uuzyjx2dSPSpGz49Aw2NQ5iYvkmJzaZY175YHazXarXeYhcpUVxKFMcxPBF",
  "key41": "4xuNdzU9M7LWQzFcQMM7A9LrCp2KM2NadPTUoHfJzvGVHFP7BjVcwuqtc9xZXLiJhuVJZt6xE6ZNwYE9SGrryUci",
  "key42": "5n1Gj6szc7Vb1Rt38FJkd9UB15sfLVA8zec3hXfRLvSy7w9MSvf9TanFiNFq7VwsXdF44Rmjnv7SXfJUDs8saVmF",
  "key43": "5jaBuSiFhVSU448iPpELzkmARz4HCinhd3GzzS2xDs5bqe5YmLhXzH2ZAsx9Vu1uxXxXvVvY9EtHmM8aRomPm77n",
  "key44": "b74uBYWzsLyXvc5opuH8Yo5sMK16NZifKWpva7DwhyDLUtRXZCEQocBMsZixvpLceGmpkjsVZS3wZ16q2xispCA",
  "key45": "5nRzUrscHKpUnBXES26UscPkMRUpFSY8Gg3oTevZjZg4aPjr1GFxFteo83wZRGwrRBAuMLNEUQNftK8sQqUfKpDQ",
  "key46": "yD1mgYTPDQXkLgoa8qHNqPBUfNcg5aAoYVTucNPSnjTTmCiWE5KWuDnTvPJkLGT8aWjgGw1DJuJrUVa5YfFBx1N"
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
