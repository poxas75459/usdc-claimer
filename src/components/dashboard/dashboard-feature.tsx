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
    "3YKKz2nunf42HCAd488PuDjGwsNbgTvT7HLEtqJaAXE3qVHwguvQKjfoWzqbYm4zSAnjrPm1jeSBCnpbmgeYeePm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfzzv4i3abWmQGBLUFXeHLDbW3zgavHub4KZNZCDgBgmYg4KHcBXmKey9XM6T2pjh1aSoB2exxJFjYGF2jzGdFD",
  "key1": "3JgaL7a1r1F1Ar6RWyLW4p5dxoxu2VVwaYTMMq1xRALjm8dNFgQsgXkfyL1vxPhrCgzAAEePvNx1LZRL2t1RSLxy",
  "key2": "58vHfeMRPUopWL63ndRqJHpBABRxMuYfBDSmAhEWdEe13FFnEj2w9cCpNsiAhkT8BqF3gn8woagodK7Vpuo1qXaH",
  "key3": "FckwL63BSVGExdgzeL1z7TKC8LMsYeSWXsCgGTejFt4v9YZ6bjWFRzHuB12yvst4aydUwJ5JSHXswbhAsmTj5vz",
  "key4": "2uYp6tmSAXyGWyqYYpbX9Xqrvp39gNtmJs7YkvLgcV5zBWobibRLVbPon24sCagmP8KmXgKiL8HiQKQAnExrtw9a",
  "key5": "5N4HPp7GaNNZeSHML4muLsLcFEofW9WX9NmtHGLwnfhFeGSVFnVvT8nm6WVueHCvgLUWe7imXtC5kerQe3viNEpG",
  "key6": "4bqjPQpk1EYL9A128CafGpSMFzMJRPSweospuhbDjEW8Evg24xpz731TcsCAaFkbS9PbxF24YBVsQPx3cPF9itWA",
  "key7": "4KDf8Bs38trSt1CVUAru5EDjcVdwaJrYtwuDdPKHd5DwD9jX47EFUS3TdWiy8y5xFM3u33uxDZ9qqyEhmvosk6LC",
  "key8": "537p61MZddcCG9diojR9rvnbViBcREaEf9FK1HAvHJS3RwAJyNG2dkxYM2w9d2br6aWfrawJ9shVXd5c2189m97Y",
  "key9": "RZHeojiN25qmPuQA8aftvMCgwqV5HoEhALGcSFwc7enE2iVzQrRGrXpirmoA7GUYE9PQfFQfhNRzkKhsbQQsvqi",
  "key10": "bg2Nd8K4huxpUzHqzEn53Eb3zg84cXYtz9PVXYFJuiPAwB5oeeBMjUos4ohCyhczbF7Et3hVYBE17s3wRy159kx",
  "key11": "31hd2X7QK1UYrNyW9gjA1hLGqcnmg39usfZhjkF264FEvYoqEyYy2yfA5Hay4i3uSawfLsCxGYBwaTD7MWAP7GMh",
  "key12": "5UjsCtRszvyKS84paJEV67AMVADaNRGTyHn29FBv41vUe3LhRR6jPyCggRBs8oNsPirQ4GftgHQFtULpfny2XjSN",
  "key13": "4sLxhq1LuYx61wJfsMgYE6XLHTnPETusx3d7NoTWT8KcerBUBry26KsUMzgaaynnhDjtWVqn35wr3qmGTrHCKrDB",
  "key14": "7HZfo5SZqWR6DunfpZ9TDJXGJ4HDp1PGkqGiEEw7fF9Y9dQxN7ZDv4bWkVGiY7dRyKC2kZGjjh8v4PiS2JAzhHL",
  "key15": "2VoJdqFAjPtV47vV2mduWsrzu9RFRuD3HHJ4DbK4T75xgXkzwCoNwSnh8U9SaWw3xKzy5MhuFoYkyYPCv9kgT1td",
  "key16": "25LLb5Df8C2jJE37aszdRfe8pa52HEWpndWebwH5JuNrfhKSVQ2i3uwZx2XsQsgzGwWjx1Tr5FJsM7kUHEqSYcnQ",
  "key17": "3Hr26tozkKiXytpcFW2Fm9epng9BcupS37TkYJrhZPw9GVMrkhPcSqat6nAmh26oEs2LeAGvqaAmsLmoFJa6HTTZ",
  "key18": "4sd5tLSKyug41KFdfWWfPQv7uj1H15ZPuNehHqnoNNx3cy1BA9UF8Zc66LjKSkudPZWby14CmENJFLbR6Ce6SmPV",
  "key19": "5sArmPgwH7jNAxYdrDXiPpFXjcmmXLXECL2ffnWggCLpfJiqSLrwq5NfR8tsbGyMZ3c7rQkJ69SvVeD2bm7s6FTw",
  "key20": "5PmkV9bBmukvqyLXFBEB4HEk1mqEK1nFFWNJTcNwRWfcTWavXPnwy8rmVGsGf9bQbWJ7SBKeGCEtmbkTREnEqgDZ",
  "key21": "4qTXYEovECNDMsiyZs7e84tEuc2NfR3wjAUFXsqgj8DDWMH2RB7Xk3UctZZ24BqjrwpsF72hzJkzd4AR2SkDbjsU",
  "key22": "S9qHwPH1NXoiiF1dbGF2ASVfkeGRYD2fPYrwbGXRh77LrpgXaVE9dk9LhzAgmswLr4EoXYzQ4GyXnqURFXdr4EX",
  "key23": "5gg3UzqV1sNhLHjR2Y6jjDSLntJ4ntqDBiDcK7chXQXM8Hszgci6yv9EnU5oHWPfHTd1oMVBbPQmG8xoLyJXoBsh",
  "key24": "2A7wPfZUrHisfZS5sbPGkYmPfvRXfxU3MVhAUT7jFdHSd5CwX2Dp1zySPUNa5MBnePhSP7w9LQczRM935yYWQWus",
  "key25": "JLR9YH2PFLa7NahfZ3oZUpz8FmWke5NwkJpiUgEMr5qf2RvEUPV8kyTEGuxVtpDjuXBkorZUiKjqJyEMApDU4uw",
  "key26": "5R4LzSUSyE2TcMPBKVjDtcPi46boDNvjr4aL64krSMBp4yjgUKBq6WLMZoKa7kGNSboemvg9Mm49DJa12cCFpQf5",
  "key27": "2LqD7cU8Ac4T1dVVLsSzWLg3cCRAKYQpMDQ6BexX2kAkmnrviptAFvtput3FLsWj8o2Br3vRQxggaQvF5cuswiyT",
  "key28": "E2RgqJA5q39no2skaxVgX2NZjRCfuMQ8T5RyuuHuH283Q1UtuTicVBcge4n9xvNLYAPLfYeh8tphiua3XNoT6VE",
  "key29": "4Y2nwJRSougkV524binZb6B3HRDSj6CAznSLCWFXakrp4ChRtj3ZP6CAaqZgzUZ7B3ob9K2n3NiE2TZ4N64G7CDb",
  "key30": "3mmYNsgzyR286RzgbGcNHy2HHsPHAFpkCqADypUKbx9SdLPdAp5vLczPzdSCHFgDkCG1jTjbwB4fnm8NFek9A4Jp",
  "key31": "52pwYZh9CVyLzBJ8hLg4drVX1jW3kVFDPimFPrPDx3aUykCbAzpHcrK1ybVPWZjQsi8AJHkQMUPqcDCk3nmCUe8b",
  "key32": "23JzK7C6n4dJGNC6KL33JxW4iibGoR98CuyKbx26R2Euqes12iG98fG6mVBfqZqQXks9rgM15fpp8zXQ1M7gxpnY",
  "key33": "5PG3wqvFcT4xxydNALWP5bd21ThnBgrdHtX15aCAnWtUJe1BynwhaZYaWjxuhsML24ZFLyQQwt1ZDYf8sDfoASFN",
  "key34": "WGfXKo9aNgmyXhcwinHAYvoTSXLzWzPoKKB2EaaNquabZBx1qBHuhgehWHxBBQVgvDCrUFqfhPqQGFhgp7FJ7zA",
  "key35": "4DdaAqrBfYnNUozHw7jHAEEgKgbADFAdbwfqpkjFHq2q4G8JV9TNjizdukp7J2hCs7tqEYumKHBTUiZKNg4afKTi"
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
