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
    "4HGGSfwreGegSsvv6a6h66W9c4GS1DPNbd6Lx4a6PmKgecd4fnehBU87PfLCKdWgGwqJhwLr1SWL3XBfc5Gph5xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANKoMnusQvu1SLfn5br22BP3N1nVRuLspFr95ZQdKCcB8Lpu7TvFxC7dePbCkaLkYzHp7jMn9tnrUpLzNePTgop",
  "key1": "3dTouWHH1nSyDPnDaHc4Q1VfJk1rVvuoowgUtqo8E7LyY6KVUcfx3gowtRgd2fQLRNURGMZKgfTvq1E3uMRUYu4C",
  "key2": "Pquoj5e5DkMALFCVQb6ZLz7b8ajkN13zSo6izzZ8ZYTrKgSMGXrnhZ4fBjtNzxHw4d7SUQQZwQqwG7e5e1KFVZS",
  "key3": "4H9ipsLspQNLbj9hxdeXbvsaYwp4VpwMqqutqB3AQm7Q1P1SELCzNqs8S57YALZxtCc2bX3icant7hzXSkDCnxDJ",
  "key4": "57VYat6187Vryx4qjUiysiBJrA7DAgpD3gxuykZ6G9VbBLw5vswAygLbJsVb9HtEyH16Y74nAfUJAcpvpu2gmvxe",
  "key5": "yK3pxjLufCxwE4MaYcvhdVzSx193UzUmNetE8yvs6wcXmzhTuNbzJ3d8YwheR3Kqj6FyhU5DSPRCEEGe2Gw9xPw",
  "key6": "4RP5SSPPNFqfX64PXwk6wHHUi28THFA2cEPhcnuYy84yCzqYdx1rhrGAoomsbHMc7DSHuMDuUBku4QsPq8uWi2q7",
  "key7": "LaVtxbgkGiQ8wRGPGzavpdYxqZhBhxGukwmwTn7MJ6knuhFPyNmPEVnNHAQHMZz3Tr4B81paPGMvDv24VHjSbZR",
  "key8": "2RSrADmcjACcEuhuWBK1aNwwGvNM193dDP6ykwrSuYN8ZVou4fvWWdrYzrNQiMmqvNriZuPWsCuFbMg4SdPw2wmR",
  "key9": "3S3UEJcLoUF4qheduJsZFVx5EqPiE17YHtaniUkVAnTGTyjXj7hTSQpMavcNfR98DjkgCxVVGEJfbxovG7fERnZE",
  "key10": "36Zqfhr4F2dDmBRtzVMbg7dPDuDsxnudiwNXdoYWoSxyz8xBaGsnohCtW2FoyAYcutK7nxcWLxKTrAMSjSkisPE9",
  "key11": "zaZjRonzraJfUC7UdgwhymZe9Tk9n6mE6SkwU77zXpTnt3y2r8amrvgMBLty6kFX3Y6q4vAV4ycRdHchuayjjeV",
  "key12": "ufti3vQtYjgD86zdkv5nKnMrevYJAjARUyT9JBBGmDwkBHVqoMcbEQ2HiB3NufLYNyr19WKFuPk3csVRJ9qB5P5",
  "key13": "2DKK9tc32DATAHKUMFNYjLq1KXxc4Rwnniyruy6J4DNcemF1hg3xzG7a8BgtRc2Xa1BkfotpibCiCj2KdPWTZ4wq",
  "key14": "2xfs7XLarR5ohtPXY49M7gXJmdu75R6ctrZwFTjiqBX4MbMoBpDmQisSiddJfWx9yWmZ6ikYpcQ7wEJThCAZrkbj",
  "key15": "3vvtfE9NUSHMUY9qkQ7hHDXmcpTVa8gq7ejA4meZSNcZYgAszyDBiu56UkcvunuZrVZH4yiUumczwSxVR4sy4s9A",
  "key16": "PraDM4UAew2AiiiWemF9SzV13rgUwSa4pCTKFyp7yNd6tVQABHDt48DJu2wYGfZd62EG82meaMU8Gv2knHKJMqe",
  "key17": "58Xc59xHqUCZ2xBSpW2EW2vZU5GvCRj4WjjCReLxg1oD2buvFCeBKSPtc4zn5vrv2ANr4adDcxDHoPxYKWNvh3qq",
  "key18": "qzpTHNLx5gWdxHWkP8wNkCTv43ffBJp1EYe8KrYGFSMtxN2hCXwKK5m8GTpiecCAZBp26fiw142uawAFq9zfddH",
  "key19": "5vEZXh1X9Cyqu8m2c9jtLP3M8bxfeFHurtw9CnjvrpdWYYnXnnR255m26cLYtH3vDc39v9KxGFtPuUZXd8D1uhZY",
  "key20": "2RJeEe68xjCMef5sykkEU6yhoJoPGTL6f9pvSMnq9mcvdwN2xdK5Kyw1DC61AbFW9R68Tem5Wtivt2tA5D8XrCA6",
  "key21": "3tWd3NDv6HYytpkF7oGtLVNr9ktpUmFSTz2XEhgakGDLhvXG5YFJ7ZwvgKejCNyvGiqcojAop2RLJ2NuyvB8Ui7p",
  "key22": "N76gNhUXQwrwxbCSXHuvb1ZYXmnqc2WsH4FW7wfgsMFSMTJprTwzpGCiSVE7pSwJcVqHiA6n4kLJ9RR9thMqPuv",
  "key23": "39zGJTutezFJxuuuvrefZDCHLD3hR4Ski3evrzGrsysrDFy28UjQtPBSjsRbhiHsf3AJivDESWtbyiHuEdm7VzU3",
  "key24": "ENbNhdF6uqkHPxTTSdkQibYG1KBU5zQ4EK5kcytgjzMp9DuxkBq8Q2Wr7g4ARnGub5WrD1Tu6KWgjM1EV5vLJHd",
  "key25": "3CuQhBkrJzzfPp7GPZ3h2JybQ151JqqgXGgQPSak5Z9rLo64cnvwJmQMdVnnpAooy1gVPJVZGsntiwqAvB8u8u32",
  "key26": "3BPoZtSnFi2pMiR7aoaWkcu1PRkFrxHpcwkJzkDkSKF97TzGUuXiMSgjjTvSQfXxdQQ9Y3Mpv7UfgVF9HyjqukCk",
  "key27": "5FmtX6f3zsBSorVsSemhJ7LR8DAwFK3BTZXjMriiNyFPmpEJGTFPNTnYzdhTTJs6HoAmoRCUbd1BGrQu9iL6Gh9Y",
  "key28": "Q2Aada1pfMMzXJSyT2rfkWCaBSW6H5tDjr6GE3PJmwQqRhfucuAqtBxLkvp8TddxcNP1RrsBzTSR7ucG5fi57Qz",
  "key29": "5ZdEqnvcsNUwpXBoXt6HWoUkc5ptS6goGsDiNaqhq4UAoh9KvxwGu2ho3dega198Nj4VmcMHw9KANePmK2XwMerD",
  "key30": "ZxG8Dj4GuSeLuR9usMwUXH5zoZHRZ9XTYbvAin6xkftWzDPge7ihptfxLHekRQTcijjCjCei5qTNZok8ph8gJrz",
  "key31": "6m6s6xjuvydVnHSth2ppESv58jwr7orqXjp2zcK8a4d1RiLoJqPJ5ytMZXrE5qrLXGo2xE7iYi1aqjFa2zJpeLN",
  "key32": "44Y2MYNG9gL3XXzCcdeFRau94zThfmfE7eq92sgGriM9nhE6cqKibLZg5iii1LbwkxpRxMz2y3yaGYdrFHssC28c",
  "key33": "4BUXqE3Rgra3rT1SYpz3VGvzvuwZkfia5wAmNpUzhmPuJc5GmjmoHsyRHnEV5kpiRcZAbS1VoAQtV7nG3P8cQ6Vw",
  "key34": "2Q96Jtfp19jNvJQeu2MJgHaBCztsSstWunpw2CC5Tizeidhqcovg3MwZL61ZyVhXtMAwTvBqa3Deytbg5MRm3HPG",
  "key35": "gkb36B8Msw483E6vmpcqtzr9Gr34iEQ2JUiFfJZryRhStovZ9gGfNyVLRrqCwVhdCv1YLkRcgrWMPV6tDCE9kRt",
  "key36": "vHz3aqhWENWSd7ks97xrnXgD5fwFWxZYBkDmj3uqMiyv4W1RXLU432szsb8yfzM88Qn8Q5vjrjSLCvS8CDG4Z53",
  "key37": "4F2brcv1gBNBDJbXTbVuS5biaNx4Fb9bumAA2xpuxTxJPc56oZRMnyhuwLN9idZfVosdZQ1U8oq5zjVU1dsc8wMb",
  "key38": "32zorr7sGEFciSMTjLGgKnFKFzFxpowUN2LbPcgPDRTqUaKtBFbMEmt1xNdywJNfczbDVbMCqAVdd8UngJvN96rF",
  "key39": "63BRcqvpPz2HUKtt9kFaakk4Jb5twws7nFVDnaddvg7eQjMNDm8rhmcJQHSTzxYtZgwg9SjbnaeTsEpyePxRwZeA",
  "key40": "2g25ZN7E8YUtnRecSivA3dxj5izXvmUNYcRLPa8pjqfztW5a4gXCfcKngVu1f6fiYsdEHkgM7misGTRPj6DsGT5J",
  "key41": "5kLDMiqhqP34kqJxLVF2wTJ3JzgoHKKAX4HDqULuqBGWg7aqahWwztLsgoJrxWetud2fHJBoTX2LXHU1Ntxq9ECq"
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
