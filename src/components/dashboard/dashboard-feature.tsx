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
    "5b9cqaSGeg2cAkMkTyWBfr2vL1EafusyB15wz8RZTYZVXBEz4RPREVQAhn6UeQKU3EYo8LeUtchn3QNjhdc4yHzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUXcmwhkNPc32ykFSjusUBnUS53CZ3dhxUFntmwd2ebyVcL59zG9zg8SgPs5MG8mxJy82XdaXWd8wgY61P9PbpM",
  "key1": "8A4MFuUBJSkuCqopPryvWEAwMNddssKidQZRiKDZEMsLMizkzKHJo4AtQ11BgQsLtcm7JpsEWA1tLNZCXGiG3Lk",
  "key2": "4dyrnuwT1YLfCZ7i9NJLHgE18QP3LQFVA2LuA6WbZYzcnW9r8D9Rh1bMBE14YsFYU9RU5565Biw2WuiVxpCWgQUz",
  "key3": "3DzDRApJPSX9cAiCcrYyD5a4cuaERT4HBjKykXL8f9Z1FKVUsQfWjyttGU2rgmg7ndyDKcY3vBBr9Mj426Kdihe2",
  "key4": "2b6cEsBe3QKTpNAXUnVLjHBYDN3t6PjpwNgYoxEry5L8U8BWLvPwje8YDG6iw5HRpVVb8TVu28ftY2dHYMgFC2sT",
  "key5": "4cjSbUXcriCpS5MwNsmttLUeHHzTWkTb6y9zhFLihVK1fBVsDq4wcTZeSb5DzK7vKdsUfXvwvWcH6zmX32ZURdD1",
  "key6": "2quBwLPAvVWibAaSzX5k5GADCgsQ7maxwsn4u7S386BoQp5X83zHH8jcESt9uyanvmyXdgH5VFJDUBeKSAtmv7B8",
  "key7": "4GGUUrj7QXnK11ubgwrFW2jvZ6KcXjiU3d1BdpLmtWqo91NUTncAA5SrwgHAPGwZjRYRwNmMA7EKaQofQBFyoBqS",
  "key8": "xkqebAvZBeqxZGRqaTAh7JVF9tMuE2yZxbcMArgQ1RKTmvmRPMipj9oVmygU3mxG2zHCggjHcZMZUzsYJymvHrH",
  "key9": "4hk6szBSjkGZukRepbgaRCpBD2aSYNsW8uHLhUZj3vKUdLxxvUm9PcNvihXpTrzf4ayDS9EMhzLqqV6yodEEbgce",
  "key10": "k555wjCn4LAWrPXb3e5dtyCjYeYiPAEkBfp9GCJhuu57quk2dYXpsPRBGChDChr2KXhNTHT2aYS91TfCkhHfXwJ",
  "key11": "Pk9MRvtiAibC2WS5aeo6B6hm5k727qFGzbpERPuLyJEHV2YtsLdqUvZSs4JMViSnWLkfW9ErGkcS3KEJbaJ93f9",
  "key12": "2VK1FvCr9KVzmjQG1Q3u2Ec9m3V2HeiwAnDoZPmizMpuQA75MCX5ncL4SwEdzcMFGfRMFrdkH1CeocELuNLTDob2",
  "key13": "9dQNovzFTYC31CwjmMqAfHscNvjroyi9cYVVN92SsejA4UuBnxTKc44b51eHGxM4YBEWUbobuYAACvt2n82SNSt",
  "key14": "4xbYcRyqtfTGvuX7vzdo7j5hDbxf6RAXXsnEgn6ix9BJx9zPnZnRigND6iUUpVpX3FNXjhBQ3B47j2VTJ8pPdL3Z",
  "key15": "4ti7BcdTSiUGeboRHzefMVa78EvvAE7XU4RSsRweeSYD5Lqx3KyrtqJxijujj4AB1x61mqHu3onPYVw52ccjk2x9",
  "key16": "rcLLdfASCKwpxpyXZHPiJf1ExkYeqfib3Xxe9Yaim8h9btWCfrYBwyokLHydPiFFQRtkwET6sDZhsTK4m6vN74c",
  "key17": "5ZrYibw5Ptvc858TK5Zx3aneCvsgcsm1UGTsy1GcEnxLPraGQqi4iTLD5E4TJjmMxPAMH4icwaEysou2ngHwpJ78",
  "key18": "3L8R27hCAUznEjz2Q4R1ggTywsmkpwXymWkYzfhj6ABYR6pJijyURJ6bn9Mu27WDLx14PvVrsoPxF9wU6F8zMWcg",
  "key19": "29YdAbPMHgXeovkPSC6jXoEAa2LEVUBwJbHdswDjYahzCSNnmDGCoypqSmmQ7nHxYy4EyqyBdqazis2UVP5e6Pzi",
  "key20": "2KGF7Z3XF9HrkoDTbGxjhnydLVy1Pf6o6zQTrWDinTkDRseHoszX76LwdeZe6ijCXcKgAdnPnJhtVUYDJ4bXob2n",
  "key21": "3zVkG5tq3UvV59Hzza9nFe3aXZvYQxSVUVa37a94Yn4Qzx7UwZmByc1vGoanASbsrupfDfAPmQPwJz4MqjHhF8uR",
  "key22": "2TwTGnC7jFCsUix8pdaE7mWhAQ2BRYDDthDs2aEndQEHSNHSVQDF459pPM1Dyxp59M4m9VBBT8KTrwqAUqEN3cgy",
  "key23": "497hJKmcYspAxPH8X3Dt4dux7L11xthgXxga45Aaow8Mzd1sGrbmuxUai4Xqowiw3uMx1FPKwUNAg3QqGeGNn8ip",
  "key24": "5yoZYYUyp17EQpVHQugRKsADXNrcQx5SHMUH5iwnzi34xorz9Mf4m6feCzsSJEA1DvYt5USq2c7foPqvcCeRutxr",
  "key25": "4MDV73GHozihp8wHcqTMv1UH5BgzfsY5ifdZXdFCtYp7nGtDAvLDM58PWndWaHBHqP7QkFmqkLP2PB2XbTpH2U7t",
  "key26": "2FFmWbViYQFQrd1txdLo8QSvF9HLgEfnaMWUfJraSF56g9bAsZtLSBhC7tDjoXg7pdznKt1TEvAHimRKcHENrTY9",
  "key27": "5Yt2XMohVoynFMtn1MzyYPvfW49g9jJis8GKZ5m5VtvUHX4HXmHHMXSASuPZfqMgi96ZmNCrksUmW8Z8jqCMsQzf",
  "key28": "2bELraAGZBpMQkBUcZFaTB8HVeAyLTHPawb8hzFU7G7fenxy2jd6qTVv9Mocbho171cnGGPgcTVeFM37wK7wfK6p",
  "key29": "4dc1u86asMb7xTkaRJqi3ykfGx8ynoYLKXqboeBRooh6mNqSFD2VXH4ZhTNnn3HVjjWXXdLGbrXUnWHsEWBkhckn",
  "key30": "5ihjbmrSEvyzT1eacMAGLhxXuTTqBN5ipnEmdLppb5UkDJ4N89hyexdq4KMTUHx6VK8PvW9QEz5J7Pi99G5id7xG",
  "key31": "5sGD1tf6ed5gpckfTZBXnTmPaE3tStBZBiwZk6DDo5zyjQC8MRKFHdqPBDsz3u59MiKUvragm3CwZitdRm4nfEdJ",
  "key32": "5oLMrLTE3AUJ5dQmb6jLANDRuRqm4mjdWMcmPwRZ81YT5aHkTyJP7SsJo84SiEDza7Rd3jDqJADyUuA1hb71xCwy",
  "key33": "3AYyXhh8xidHyYSzNHxq6hu5ueCvsiJKptZNUya9r8rVDCVNv8FkbLLLcwg18BEha483dTEK1FhoSRfNdqWvNrGJ",
  "key34": "3REiELGrAZc5QFmwbJpHbZRotWKoGzDpN539dhMft484UZ6uM2BggEdWgnWwqmWENUFJxXxMGGTwmxQBWe9ZnCoY",
  "key35": "b6ZZPEupTQKbwp9E2t6biSqDmSgNZaBqU8FKy8TYGao9ccucVQzz8WAtdVj9tXR3Zd4rDGdxAHhjhyHbJDz6q8J",
  "key36": "qTwmUzZdFp3qfH5BDMonicNPjBGvMbDAYEQLhdMjJVYb2wdXnbP33dQvjGTnonSRyLPZJbPtGs3V9nsBRSAeSe5",
  "key37": "NGnCubHy3EBZ47uA4zqHZpRQ8NjufKszGBhBh5k9hSAeXspoeSuasbAdcurSEvFFG1g3LnQzGETDSVxX3YdrEei",
  "key38": "3ysvMGyvWnG9XEFJ2p3eNkpgstHtEkSZ4TU15G8f23Ktds5SviqT6Ch7DKx3zvMWpNKhP1igvPoKx2y7Ux7raAwq",
  "key39": "26VBhSwYproyJwtU3pW8KbRhrkhjbnHvEwJoFMJ6TSEmcQ4qKcFxPL4dVAW7J53t9h5CKzhULs2X38rbbqoyFwqd",
  "key40": "4QQobp8bvn7V1MKKRf822kWRaRfe8Lp3LVDueK7B3fnKhFRmrGmf2ati8G58CFmRxozdQb9S3xuEnURfRsWitXTe"
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
