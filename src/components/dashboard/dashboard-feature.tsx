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
    "4FBdmgpBvzWUPA8gUvaBCor15gD5cDeqVaWqK94HYg87vuW3ibh8A93HRdMzSPjTjr6jmuB4VyHH6bFv3fy94kxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foy2k6uvP2Vwqb8pjmhE2xn4B6LJ4bkv3CNgLHYN3KW3W5Rm7nwDWdEwZwxs34p81Rfs8UXuwfgDzqdZdzXyV2d",
  "key1": "yHBZ3tg5oVi1arpTdXW3hNYMByDdDtYXsvJpeXx9Y9yaR8VaRjRkWmiGac2Q3aqNE6KZFaaYbpDTk4hJtoUjagy",
  "key2": "5Zp82NprDGtVzM8pB1X6NBsPxY6YmW1gUbapgsphnqJ1YAX6eLbMxMEKXMGLqfjnF574qbWLsSFCP1VKKrTD3Sw5",
  "key3": "2kfRMkgCEnTNHRxigSxAWAdtDF2LyiTi82rh1z9XskBEHgzs5E4i5AAqQzQ2mHdoWNA7zycCK5bsLZgQTSX7LNop",
  "key4": "3HeSfthE5QWmw14Qfbc2EGJReW9XH9UToAg9jehTz6ePSYDv3vrmv5ZQt1uLBbdnax19wuqY5Hgum4XcHQKQrYu2",
  "key5": "5XT1JDVuMXQsfyecuhizZRS33J4FaahbgEY98np48GcJoMjEPmememqnUsBhMP7eTUfkjy7VaZhqZTcLij4o1wrQ",
  "key6": "eagpAaEv7xsscs2Mqe4UGacyrsvL5PMnUsDMzWz19yxwUBwwc7p8U9DJJQYUVD5zyAR4Yh8ci6CWHZH9i2bHSfW",
  "key7": "2rXCaEGUsSAZn1vUMYGLqbCaryELLFkyBYcVFmrfY3zyvmAuVwSPjk6rmneKVEkjo1WRees43hVQe5ik5sDwZFrN",
  "key8": "4xAf7B39RCKJUzfVMYPMZZoupSY5Q1YVmyueCiGwWemh3ZYDKq1cGMKFZ3SmvBbNABDr7Nnmg51GhEsMm8oSoq6N",
  "key9": "5YENk7yK3zv43CFcTnEg3E8S969TztGcmFTiF51isDtrspqPM3Yph13b4ZnybVwZCFKRx37eLTtjqdppRb9QKhzF",
  "key10": "3ojBPo5Yvm12wb15KJsmbJXtBQN3UETCPBajXf2CwCtQCHap4xzxT5YrMsh3xhdduNf4yRmGVafL4dgDHBbXCvfE",
  "key11": "2ZFtanj8P1vgH6VS4NDQ1cutko2CL29FdNZ2aKmhfH6c1riQUgGMxCLFt1sHdzamrU2eypAWmCzxGVJ8j8jDdAWp",
  "key12": "4uW2e4iX7D8u2BD9rUVFir4a1dDtj5eSp8o8d4MUGiqE8xqoUfJpYRZPaeKPpU76dBASotcakoirhsp8eEBWEovL",
  "key13": "45F8kBHv12VmHudPhcb6Jz2hHeVFp6gWD6cC7g1tJqAvLUFWPTT6XtP6789RJhVTzH6u4eCmU63bbroUnjLUP1tF",
  "key14": "3dTgznarb9GMvXbCiqskQVEkwubmhfk8EQx7cRQpHzWSXQAjsvhJLNhpvhzBGrbMRr9J239H1PQqk3W5CSFeDpvd",
  "key15": "67mLzKAFHgwN3MtGJQ1Kf3BdjQ2cXdHRUQoJeMNRn7YVcR6Tzuu4rryB2sSR3fqTZZDyKRVwMS5M9ASwm4VjTdBE",
  "key16": "kARQ5wZKVDiTnqZUpxcQjXvFTuJszRYZXq1yQMdsARoHkWJedhDZywwik9eaFQpGo7SXMe8D2KC8TC6Z1eKEDck",
  "key17": "5a2KBPW77JEKmeDtiEtu638tz6Gvp3u4AyXf4cwXGVyurxzGjnG3xFtcrAVWMQg1z1HxadRQt64hKPP6KWLHbCMX",
  "key18": "vuuPAA7r3K1i2CUpUMprQubmLa73RDiCG29PEnvCseh1bySupyqDzD3V7HuyEzLaUjaxefg9V7CeyVJwS82zvPd",
  "key19": "EYnCchwhBfzTjM73dB1ZS2Up5L27y7qa7cVSwkAXqf2FdtMPtWRzc9Zqm7w2Rm77bBnbu4GUEnvNjSsd5K4iTjq",
  "key20": "3qKbktjemvSEgdJntG3tx1FpFSTebpb39c7WsGo7FipiwnzvccocoDZ6E9gXMKAnnrgqUokwcBgzLuxjBjA51MGT",
  "key21": "QPqFh9Mpo42ufQVhEw85cKTfjYwn6HU1GPeDaF2a9a2FnAXAcFKEwshoW8JP6YdsgLMv3C1XsdvNfzwT3TKc9ix",
  "key22": "49Dqa5XV1Ujta6qXjhH4T5NvGuQNYGxz7Up2y54GPPRSH23NvyM2rNG3wYUKtvgkQs3XXMCaGEnwLMgFawMf8QvK",
  "key23": "22JP59L7CiLHinaVBhasYPEMx3vJP7AdD24ZiiDvfBJ2MExKWqTpen7B7JS3mTiG3xeVndfLn9cDE8DiWgN33d9e",
  "key24": "5WZ8CruZE2RKWBNPUZ7WXSMpxjrTiY2JocHyzr8kNQRf89toa2GmsY11vAcrv38PD5Uzao1sisEFhbxv72rkwGQP",
  "key25": "5f65NNrH9pxXFW7j8k3B3egG7M4XSjGSxw4C5nHXsRrJThz8Ek7JDHkpRgMpZHhr2x2ZyscdroWRsLS69iW9fiHi",
  "key26": "4WTX9tKd73PJbq5QQNvagZxTwp1N27T3MWPFc4Wh1dtr8HYtgRSWLQNYPD5YDUZFdM5Qjq3hbUA6GUDhTa6zzyoW",
  "key27": "5C3sZ2UgcUsJkqJf9pSpUsQeUL9G7be8XF4miRpypyTPPTzn7SqjYmfYqbGbjerSQHmpq4TNYiDYenVyoNvyX8aL",
  "key28": "4fme3VbexyqyZrM1vFZPqzh1L97SupWuyjtw4js6r9f6J9CzaFavqFc9ygmwa8WkanerqQ2t79Pefgqu5M6fZHm3",
  "key29": "2LhSikPaacWhPqfpS25Kb5BM5ifTz93m7REsJcvfAz29gRCs9sjoxNJ22h4cvQsrYp4yoHyHej6feHuifUZqVdqk",
  "key30": "BHoV46j993QzKodsYDgRMAsgWf8Au6jTCHbCeMWirYhoMeM7Jyx9Z925ehdUyYNySaZ5ATx3sWm89Xo1wPszALK",
  "key31": "5azLmq423ies7BEF5hFUg8HhTXFczr1gCK5tYh9JxHgka2WPtEzBkzZ5EqJQWcG1p1EXW1qG7f1xMjxfknjLqsvr",
  "key32": "a3rrMB43mFGwUXV1Pa7X649CF231B7rNxTZmtNRGCVArsUiwd5cBE7AM699ZMhyjMQN8CWF3576G5LQwutGJpqh",
  "key33": "2eP8Xfpj1tmZc5WmbCTZ6zLhxxMhv9k3Bh9i3CujTnWCBQ5HqND3QaWWeKRggdVSEsTs5EiSXbENpwA1SNmtTNPK",
  "key34": "3u2CcMhSN8Mgq8jfKgwpCSEboPnkUUqSWLzX1TCwbrJTcgEMP8dgB6bR4fRqwdZ967J4CGdBPszBJmbjQ8DbMFEm",
  "key35": "63gDvnj57Fot2GwNyT18VFWVJjvDLhDJjQ9m6KtT2maFpQqkPoRKfQKRBGaEMW2hu7Tdmr69pTsCvMtcZP3NdKAe",
  "key36": "s1tNrDxzJFjCczHrCJ3JwXiaCa2rHnznN9pZEhPL3mZk8wnzwuBgtzBfj7dXkvxuxjxJpnUZREhz9jXnh3L6Hgn",
  "key37": "2Ffpjj3rPkB2RydzLj3rmngtwCJvcR6d93WDnnwvdaMhBRZekHqxrdZSaq1sYTQEiWwNLkFXaytrAsqen2UvYUnL",
  "key38": "3MpCDp1DnEXiQ6SRhAjreQBt13wMNpF4bCCsUerb7g44eHMWRFv4GaFVpyXfFEsoNacnBe7xa7it5j4j3gayoe4Y",
  "key39": "26TPbKuf8yqfrpqy7acec8nGN1L5gwsG7APf3MhQvLANgcW5QLei7PdLqZy1mvQigcUGCUnMBnBMpMnenUWGgqfB",
  "key40": "Jm3S5dLgwY1M536pXpbTYPhditeKEejpxChWbkxBNzGzDRVSbTkJV6q1nU5vV1AZpZrnBnYn2fR1PcEfjafHKKo",
  "key41": "4ooaM6cicj9Y3M9HfKRp9uDV89vT7wBDotmv7tDJpDNPZA9hxMQEtyw9EEcSzht1z1GpAxGADzns9tyv6Fy8iyFA",
  "key42": "4U8749khwyzhoWMtcRsiAdmGTxHyYhe6MzMnxyEK2eKsu8s1cTaEsfpUrvPTcxSqCBYepWnHp1GZzwLqsSbWkYPe",
  "key43": "jRVVxwgZ3F2c2AcRrfqfLvWb56mgS78QoWfeZd7iPNNozWdSdThNSjHbYiu8Cv8nXZDDJWKfJc5cyty5ov78XKG",
  "key44": "28g9xo5YPuMLvJhMe7nNS7BPXM1G5WvNhfimED6rdMjnWTaynnB6s4mTHa7CCAMZUtPNJ2GdvkPpPb4xpaAoTzjV",
  "key45": "Y78rWrb9Sk7jhTRYvAe14UHRb4t6CpDWwHvV4YLE3xptuwCfh53MSMyYD1jf5KLYM7MwzhAhmnt7oC7jQQnMFLY",
  "key46": "3VW6UbhNU1FQKsfEvpnpQhsbS8oHxzcKifebJdc5Pg9FYpnUXSBuoi3riX91m3uBptjNGNUmm6j3SZkGyZt3aEj9",
  "key47": "5YvuywFy2cTfhwNuZ29vBp5eptU7pzVnXBrqT4Jeys7mR3WgdBhbpiL8QFdqNiSUK1LbmLEW18Q4Kk1kpdyuJL1c",
  "key48": "3Rqh2e9yG8LwEgYHpKqQSa1eqHAJLsKS88ge6L8CwCA7uh1d7S7jGFt3FFSp7SUo4aFdphTZ348zpyTNZZ5W8er2"
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
