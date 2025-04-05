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
    "dudCzUSkd6dtJDNEmi3UXm7tKZZeKi84j33Q3bMneD6UnL1s6ytU1CXGYwuvFD95jseMt2MH5CHuaKa9nqnT2jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RjwwSM6B3ZT2GZ4PFPzWJ4hfKJ6bDvprWAn32TWz7nnYzPxNZbFwdpxww4mzyJYZ8QQA3cHeJURrDsp42oRE44",
  "key1": "arvqzK53TkbXzyyEJMbJ4Wix7H9EvmRPAByqK7MR3Y1Cg6XQcpFxa9gnpgJCVxYbcAZuXLu3sxNTwcnu4c5uV2e",
  "key2": "5o6E7J6iGjh56z4PBgCXWZih1BTJVQV15Zp42W3DEf9tWPJa1okrxZpgKK8QVCwEeYqDuw6nzryYipNcToTUDxd2",
  "key3": "4WZXeDB7qa6944mezxLsWkaiZpuiTCf1gJe1qWPhSpgjUYg7bPVrNLjao22dzV1N6hSixs416rmidPMSJQX71Szx",
  "key4": "5guoLUdCUVVkFPCBv5MNpzc5828iUwPrVvQFpuw9a9nSWEcMJTFAtZrqUpRyx6EeJjjpfJnCDhoTbLZDJ8orEZ1J",
  "key5": "2KBZddyHoFCusgFhHZTiDzWEXdkCzud1uzovjCcMUJWhRdn3E7fTJFpZKYtmAVLQSrzdYg4dRx9TbxjHm7yrxXFL",
  "key6": "331M1GRSBCZjXF3VF6e4JWrbuRggW3PFM6H5m5yrTkHBdLJQVjyYzDr87sSRpDoHSBsCA794dxoidgEQYkxQyKrp",
  "key7": "3wWQpCA2bSmD6dMa8A6gNrZRfxMk6vWmhuEQmVuLcdexF5bpf6Y3MdL1KV4Zy2v2ZwScEhZqK6o9bAyu9nkg2hU4",
  "key8": "4wgn1J1FeFTnboqn2xtB4oj7JNnuDHPSY5Ng8rzy7uNEVLgy7j1MbKctQViADWqbii5kMQ6bspkxcLnTuU43AfZK",
  "key9": "5r4T6fh9kz9oDHtYpo1LfoGwqPBGK6PMHhtWwietU3K4JfJnGSquXa1CvrwSMEsURQfR3UvXpEhxbSTUWHSG8GjD",
  "key10": "5C2zGTxzRsTzpsZb6641fFk26obWXjYuJsSTDS2QKzunBvTvr3B2pHshHDPoWogofJfHRGcWvvCg7ba6ohUMU83x",
  "key11": "pRimxEAjfu6vaknwV9FCipiHfS64LN86ZS84txvXoiEz9cSv1ZUhZ45FCRpeHpJ49JoAPaDs6ogJznJDqtQXrga",
  "key12": "242jFcHKx5nhwG4TvfgGNFC2qdMpT3W7BEUja4DJrnb2oxE9GdDLxtfXJgtydFUVmV4c8hdSK1THM94Z6NLt87RN",
  "key13": "3vu48iukVGCJcZZDa9aLcG2n4NA14DPRnnjVgF8QK2DzAEhJ3Ca6ErNhpULVRrgiMnk9ghaKbqeKR3QcvvThFGtA",
  "key14": "3zeqRbdhp3mYuur81tUP6QnFRdsrZPdWG45emHSMx1e9whCd7MkQnhVdvsE6FL8UhzpdgPpmnWxrD9rEoYbECoyF",
  "key15": "5762Yyhsx9qxctLTubxSVtq4gBYigWumKWF6X5xBSYRvqhkSMUYJ4j2NfUjsQqxyM433utkkpzwKNhcULctcqz7p",
  "key16": "521raQ2hbDdnuSF3e8VmErRRRkTuikMo4o1nCaQxrMdtWQSuH1waSuxr9LMbS3A1LRCVWGeRwxAyWN6zN1rBLE9a",
  "key17": "5McuQ3CXVpJyukTC2wG4q9h6fnBTWj5Lp7yAx8CehkLtGJ6pzPxeHJDfsEQ5zdj13Vo6CV25GBZFs2zRiRN4R3yi",
  "key18": "4URU9HeaTk8uxa54gm64qx6D4gMBWS8gU1Bk6r7GewE5uDJ1akxZwL2dg5F6RqwvJ1Upy3MPX5booe3K57a3kC3R",
  "key19": "4BtXdDNfJAWHZ2Mf1tGSTkRLDjrEg7m8Wp1rHsGDVy3rRMnjiVeyUdLiTMUJYJ1ET3KB4oKYYQ7XScuuRMWqYf4y",
  "key20": "38Vc9AuqksngtDi2NTCCsmAPGtGxPy2HehQenZpCHMuqCF6ZLRPiPTsCLoLeeFeUjmdwbXNncQpUZd6ZDoGfgbPG",
  "key21": "3NvHoHFY7kqKuaLAEhEPUgK4kziZ7Wno3DfzxxCWcwMaHU4Jbt1LDwYgepS9EBfB7zt7MrTA7PXqVkfEJCKUmiob",
  "key22": "4xt5f3xXm5uvsmNfvvQMwZVt1NVDAC8iFmv4rDC3Ao6iGVqGv4cGuHQogjZvFhxcT3pEbmLcjrz63yod1yiuJNJq",
  "key23": "BEGTiVsQn6ThNHLNzHoNqm7ezKVPuXLPVF67B9eHsEG7Kg6NU4iiRHzah6xZwLtvTBs5yHt3adLZEUiBeR4zjJd",
  "key24": "3m5RU5HCE9Zxi1QE1qrqC7NFJyoTwqUfLtFcotz2HGdWEqiy5Jn7oKKxF1jCZWbU21sAGMnwJ6EqmFa9dcVUQuHX",
  "key25": "46EFusvnZWYjJs46ZWRfW2dLhukmHLuwReULbtFN6SbT2D6Zwj1G44Z2UR7Y6i8grstHNLeaD1z2z9uKLa83enMz",
  "key26": "2whdnc7zoqdxwmLzRYwBHWo1JnXcaNf6dSNMnetS78FGSnzKxh5NVXjYZrnKEJDjmjhrx91GYBCdga2gAgb4NZMU",
  "key27": "5g3Fe1XLQAs7NyBW3vGnQW5MyUjz7rSmmD8bngYYfxLAi2XVs78axjSKkzZCCtmdyy7WtEjxe52RMgSRjnPpfsEp",
  "key28": "5cKJ7Ay7BtsjJ7rC6DXgPLb1Mrb54HmTgBHsLCV6t5mvd9xyCbFyZBNcxVqa1bnGiETnFL79nDDCftkBaiKmcjvf",
  "key29": "qAQPK6XshTTnP8urCh3CwyN29r32o8crWEbz9nBTFYPo5q1eFWroM5UfVnHuGBDnqRpk8BqdkRz3uYoYsSbKKpy",
  "key30": "RvVtN5G2MaxLQP18sS5s3PNAnVgFRnjJAzkwXayL61SEnVTYFb1FrcqbRYakfgiGefC4VeUd7aXJFUbpXumqSWK",
  "key31": "5y8FgCw1dHzRtCLTmWtHwpJJY8u8gF79KzNkKtz2M33HpTFGxNi4npoegvJmkGwS43i55UYm2H3yfQGGNZW2thKS",
  "key32": "59Y8Kv41qx7jM4kjr2cf7ksW5EVJkUJKyfuVKeQfXs3e4dszyQJ3NrG8NGkH7rKkVVPJDYG3EMMJrjmyk7Zi6543",
  "key33": "2vNqajpVQbuKM53nJRp894r2NJ2fCc13XwG7QeBQFX3TwMQX3miprvQ8nXPWDEG5JoVJXHTs4fRwher3GphYb6xm",
  "key34": "66y5gGVW2fjcdvFP71pavqCR1rU37b4WyY4NLmS6N3WzYRm8eW7Loyif4ppKLeMJa2HQ2XJzE3qv5RSuyQLqx4cp",
  "key35": "5rSJso6H6N1WcQaFMeAJvSNakPM3qvXLLQAx15WRmnE1BQjGxa9zzCdJbMh1wALeMQsiuSL84XPgBXm7Z6Jp77iL",
  "key36": "qvqF7k1pkjkZqYqdM9TVUiiPGacoWufcueHyLFbtd92WLWWcPJwiBcy5khX6BjjtZN9VpnefgHV5ZqFfT4vbvZY",
  "key37": "5PoVCLHL6DwnDsMqZVWJKobq3qnLaMd66yGerUtQG7cZZ7jT82XvG5feyqULn1yKPZ75fi7SXX6F3gYyy2otsur6",
  "key38": "4e5VLST8tp7emSdyPZTp1DQAGVEWvHioDhzYZ13vwB3XidvQpLfiP3paU4xHMxH8VZuiXkd5h5MpCxx6BrLLrh8h",
  "key39": "Rrs7qBjJJ1D82BW3Dsi5sWV1Agjtu39pDHs2abKrNkZqR6tWFPvBVZu9xtmAmVfmk44fVieQXPkAAT8JbNGNNjC",
  "key40": "4dHdiofv7NryntNauFLyUcjSGVWiizkrtGY7wpuZZNBiDdgRenb3AWg6Ecv1KFA95rKknqU5u3GtngfsCK18p4bs",
  "key41": "5rw1FjP9gZhodDw7oApN7rNteBEFDRc4CYh7s7NGo2VtFYV7hpeKU8bWiqYTpzQJGiVCbSqsAyfGdsyWotFq8cAs",
  "key42": "KuokqQuEx2wpbh9sv2f87xieJdti4mJZer6h8nfCi9Vkj2fngEZASTSTUwFe6JuGSPyeZN5URFq5ELJCouhu6TC",
  "key43": "5LGbEm4Pj65Md1Sd8jWoGccXZbKx9PKp8Yvgb2AUByRxWf6qsGsMuTStbqjVZYXyLb8S9fVKznLZQnbTS3azL4QN",
  "key44": "2zzEC6owazptEf3fdUTz79cF4MauFte1dXoMjAwQrb8QNAtKqrbjv1bEo1u7sxh4KLL6so4mJCrmmKw9EPr6CfJa"
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
