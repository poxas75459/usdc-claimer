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
    "38t5aJceGou1kQvT9k8XFMgfS8cyQF3bwnUkkSVjQDEriisXY24wPAp83S1DJruAEH1wRpgQk6wXUf4Xm2cBcugP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZcgAqVfxRX13SEp3AJ7RC9h4oCRNA4EUcQ55ZfdptjrCjJeVZp6xEPGdGLKUBZ7bWoUXB6cHU9RkNPMscTJQez",
  "key1": "4v657A5TzXx2zCwBfr9nc9YERuJiiE92vyMhRUk1udNWvKgPYSyB4FVWBA7rX2VAwGVawqZ5qkBjXW76axM5JTzw",
  "key2": "KPF1ijx9mYyPK1eRtEtv7hE9oxCpEr8rRxLNKrHqjrtTSZkRKsLG62eYpxTDDxSpv73H5SfbJG1qWhPNKwKvf5e",
  "key3": "2GZ3DRN59hMv59PFcYjz11rECV3tvmsyw2h4kEsLGeUQ8VQXcmfoCrCaEK6m67PEbsUFUT2as6zEkoaMWMWaxXQN",
  "key4": "hb1BgJZy9qyb7CBCSLFj1PnfvhHHAzEc6bUw8PD6VwUKNWhzQTqY2LiZBRjX23etSR5XMsLtYTb4JE7hnCrb1vw",
  "key5": "2va1ffcihuK3RxMqpYYt5VhZUEjU5Nz7yEfSuSTM1oaX1b5WN82fxKGLBppaNdqDeHXY3rCVW5KKCTD7B4z31XYm",
  "key6": "2LWc4qfj5TrTSg3McGK9tFNCsDUnwTPDyWArahPY3SRo7zc2ZXEoNaYxjKRfzkhAUvZdt74cguEQRGSCvgP2XjZ2",
  "key7": "rCQ9ntrN58YRWGoYdj147Xp4cbpQZExu1mKiztCpE18EPfMChkb8KW7WUNuhSJ9x1hT1Q6RjtuQ3d5HdPejs4un",
  "key8": "2WtinT2nRRXVss9gPSYH38WfJRv1UTbt6XfZ5D7yemWoT5K5pebkv5RRDSK2jwsVVBS5LxdmS5dZzGRwNscBfirW",
  "key9": "5DfoEumU6RMiw3jsYLNaqbJZXTt3tgvvsE9P7Pj56kHJvjhXPhjbYL7kzbTCweQWJWeh9xN9VfmJQeY1uYSdMaVA",
  "key10": "5hEjm51ADuRbjfkfT3sqiaZ4SnYH96PULLpCsEpNgru5Q4gL2pJAptrDoraUTmEtd83FjjAANRFZvK4sYWAskqiM",
  "key11": "4rrxf5rnqaQimhRbXptsYmAQJza7XUHjjPqvqxGF7aYEQU1uUdQuEPLZYjdjhnZPpmsCigtCG5KxhcYonm6ug3Gm",
  "key12": "JNtgbeaRkDtbFKh9RjZLz3V1aNARHbcEBT1aM2zwW1FBcnyeFUzPZ1vBsJLxhg4H3tyrGVmMZ91wPiMJugu2UxJ",
  "key13": "3CNjH8GwJSd2LsRcvycuLJp8hak1Kt86GHFABhoznpxrHBCb28LFjxpfH5h464g7KGXXnDujWbr2DRqQvGNKNQBS",
  "key14": "vhS3qSnNn9TCQg1Hxc5343pbwJVp8EPfqLo4bKk6BVLwbAMCSyq2f5yjNdkCRxu6nafY2uGPXK17gpCLNgE2P2f",
  "key15": "wv4YFSEPX6s8oJ4DK7zNC5HnEVhuWG6xVYsnaUpFoNTxamZReDHzdVXhjv1Snw13SXK4tLbXuNidnVUsW1juSz3",
  "key16": "63dHK3NVzc3DrvVJHJwvuWqQpr9hZ5Dq9MVJEJVdjsS4dDq4detp4tKno5Emtfj96Jbpv4unM73HLuJWZMSbRhs7",
  "key17": "2nyNe3CkzGoWdFWFiWkuyecBUe2KJWjmxfGo2CgpaciaQ67vRGAU6yHKpKPyCPdVVP1KNWH6FwM57VeeEJ88Qztv",
  "key18": "GU7QNRYT2TFyxwb86sGvg8CsiiwpoECdK9bX37jxmJBUCShwBgExHMa29uRFZeLJsGGLwXfpju1dmJtpBLHvLMX",
  "key19": "5Je7XXE6iehCd5wdv4CrFAb78AUbeSmPHArtHUdqzT48nwWe8EoFLu93oqdtMYNYLjwYXhWL6VpQUs9msyCe8M5n",
  "key20": "2iW76ocSihwECksyjmZvDzqhnnq9GMYJMXcHEt8wCZiEVT8mcLUj91u3vJDC16KRyu7h72X3S9JSwYZFLA7RPaJ5",
  "key21": "4vELBigNJSykLFJi6jDQRyidsE2ioTopWJRwJPZsJpG529Jv2iv7ykmkM7eEgfGHrgPihE1PEgHkvLL4SVx3YTfi",
  "key22": "5JHiZKBNNWisnSdGFsoWogpgUkPMfGGWncytMegrUWy9vZhs1aqUh3sPHcG5AWsoPBKqd458F3cUiMUbx1usJG9w",
  "key23": "m7Kib4yitLh2tt7AcJtgZAhii96kAscM4ykEsr2qppw4qJe1eqmCaMZYeX3C7Rqhf12J8qsnieG7vD3fGyWGvtX",
  "key24": "2UKitAC284ZTELus9VHEx8Ly5i2FPoSdaeFaUTV6j5xo6W644fsnxhqWyLcMV9JNP5GuJh9zSXdA6t9YtcaYwTiC",
  "key25": "2nPEhYLTmD1Z4B98LN1dpkweKdWm8FVyQBQGPVhebsaHXJKuQdjwhsqGfn1BWBEKXnZntuKyLWt3wSkp8EHyYDNZ",
  "key26": "43NCFnL3thVJkiUjKv6JwjmgK3z5MVtHNM42pvWrrPNLMUn6JwNi6oqvqy6xsysx4RKvzxveKkdTNexekaAnJZ4H",
  "key27": "xFc2rRbBNqp5fFxF1Xsq7BfKTXoyBUHAULDcXTxNEP8spxVC5ssLavgWVKMXLsjBgBLWp9qpJdSv1wY2vQ4Nyfk",
  "key28": "66hQKNri9oQhp7Nux3oYfdr1DTbVAGqV8jjttLghojrn13gyFFAQNWv9giXpRq5Yat5cfkkCwbZwgao4Pj5g3vs8",
  "key29": "3unq7W19MbAg7zRD7THLi8Hpo5Fpe3FA511CWgaqaSM6DtKyRyrB52nmVhVPqsBL3cScJgDGPbHEDDpzVeqFTcii",
  "key30": "2seWBxC47CMShgSGK9AJBwpiSHTn1UkrM1PqFTKkHtVewPvooDCKt71HUPiH5tutZHM7mGHXFbmZyM77joh3oVth",
  "key31": "Qdt94YgmKmTGfhegGkrZkjs9W79uJccACcxVFb6RNhTRfYvNGYxQz9TjDzwc2AkYVHC4iPR13cH5vPS4KipDgc6",
  "key32": "2UXMzWdGCQSzzM9MzPC5gZ2rtpPJp8PhkgVAfz3C1x64CheKK6pPDjKb4FukGWvnM83FJzxRK1Hb2HchQmGCetWX",
  "key33": "ePyp4Bp4p6NuiMmGjeUCXdHiydPVQ4Y79veFJ7qmyEmQ6UR52vGbLNmmEBAL44LgF8asWeusGQk4pHUmXPT3fff",
  "key34": "2zPYSGWP7ZHFypaPVBRybGdHuHu9hpCmxCc4RpotnG2JGdimuE6uN76jmrJv5AsSrEjV4jZwRLKxTCMA6Rqxwtq3",
  "key35": "32BjkPPMohhLNqRpJz62sWWmPjLEqunyZVpcwCrA44VQDXG1U3VBW8kRTv1GZgM48PpXkDb5y7cNLoDxBaKkUtNQ",
  "key36": "2sZedwXYcseByANLC9xxL8VcaNQx4XF3Vafkwnph17XMpB9qayuGnVHjtLknPfLveWEFjqhksNJQbHT6Fcj5jUbV",
  "key37": "3JShg7ctBWG87boKz8QWSuvoUrunMMzLQAexmLv6Ye39u9Q3PYmtCSTG3bws6ZaQqB4d94CJehFLH8ky5ACrRViK",
  "key38": "39bfozkQaDmNUSA7E67sTGiJGJ63UKpMgdLGsu9rznyWGeEhRh6DB6pTRjiqPYXeSNn3StgsY8ogF32Dze9K9g2g",
  "key39": "XKusbRkGS2PeGH6r8W8HAExGrAJ6kYsZKJocfZefkzSLYAaoYdTsYVfBoft6dPdu4ric6PTnhARdomc7mjmCPCT",
  "key40": "yTWGHwH4MdLtqBVTTQqeA4Bymfme9CBWLabo6X3tDfviyQe2y7QQ68DZKrTic2UoACCFfcSWbZRuRXNgn9hZMqj",
  "key41": "5hfHeGwFiTyNHJ8o46UWSAvRSp35jgDgzvh8kGDBM8i3BTTFun5zq18ByYhn9RqKbmiJuGRCh4ynNY3pVkJRZMqW",
  "key42": "dt1D4RKe17J6aq71EzfpEScDJxTn2QqByhaEdjsmqt9pnXKM312Z7F5KsDmTQ7aZoTt3YgXn2mtMuuXUEttwrod",
  "key43": "4PqozGzK9PmGmXWeNCJjVyWpAgfZvB1go46qJDFwv84fit6e4DNMyi6YYdLB1LXaX564AAiZWXan7onMj4xTktih",
  "key44": "5CL57CRtifMzTWZPyyB2SqR7r37qWtXSxjdJYdnCDrxm3adPHQJ9Qqxy54To4FBXcy6Z2BADoekayr1CSZMcHebA",
  "key45": "23Q8tqecU6YKcE4KcqmYhzUYyzcCwwC5WFqha2JFCvRxSk3H6irzxQHTmacE97m8imLpRAxSuQrxYaHFWbwZDAuV",
  "key46": "4ngH5mJsDgVkCvvH5ELQk4qQZKvbDjWLdCUCriJfrAShB6Md3qioUwjoi9oCKt3GHVDrrd13TQtsvMxofrKP6YMp",
  "key47": "51yYJKiGkk3h3jNePbPJhekbhrbQNphC1hgdwXdymqnko91iBhajivYWwbzWja1fg2HKTn1sE5FveHi29ihy95Fa",
  "key48": "5DXwSCbGdAJy5xfZNpGHi5jSPY83TSJD8UGdBfDU48AsNtWSh6PgGZfzcCpGu4j5iBvFJuDfAxd3s8ZoGC1xdJR9",
  "key49": "3mEiDU9fCkqkaoFCsyP1YMWsgnp3GcjQ3RHKJFmBJbSnDZpdK13sc8psueTrexMgQQ2aEHdf3etGs9BB2frL77i7"
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
