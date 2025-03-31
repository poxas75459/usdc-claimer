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
    "2KagXhKftW4XxRx4Kc6se2wr1kXDsSorCzuq2jn9RqqfTpKLgK9AE7eRPiZm5Hxe6k8H9LXnV32Nhi6pGNTT9Uio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327wMUAh7owM7TE2LgpbFZXrpJCnFkaHnJYsZtA8vbcHX2HVXST2B26m3Dq28yVU6ciuxba7FFMgUdEvm1zRGT8f",
  "key1": "3rKqsbRj8zqboNZ5g5qa8FmCfjzBWnBVzBgsgqT4NGWFUH1YoJGWy7VJGem3SeJaLysgiRttdwe7okKqHmvZUm4B",
  "key2": "3tmsEyAHWgdnH4YU27AHqrpvJXQzd9jCTpNXPMaVa5ejHzViGBF7gh3S5S83TSApf169XZ7YDMDkRePFJWycZ7Br",
  "key3": "569ZLsKScrzZhjosMonsE3VRV5TfQTX15sKpp1LFKwB1DwMfik465BiWQWJwUWw7xj2KqTFXq3FVQEipnrhXtSGv",
  "key4": "4kqHyvW8ktqj35J3RKijBa1sCDT5FbxQDd9x7bfzRQ47jaFYSmH2Sqcsww69ib425QyUrwvgtsJ5kubzeCbWuEbH",
  "key5": "cNznoKv4wQ47kZtf6n2CDSMtkoYqdcYxK4diJUrLK3Hy5fbM6tsfB5HMmnW9UgNhJqPPPTY6wUS21abSDmoBXmu",
  "key6": "bew41d8dwmte7Yzjxp3moDoRY7yx9ovHHJz2B4xzxbLCvB4oxFBF71rE9ehJrr3sZfffAed6zsKjXTYGhhqes2V",
  "key7": "25S5bgiGj3ffCWGuQQbk6bZxzeqdc3g6nnZNoDTgA7sat7Dm5wGVMGVbVsvRR7imoWBnsMgqbrMsEZUnULYQQfS9",
  "key8": "3NgevvsLQ9jQ36L148RVtUMW5A8kwCXdHEtcSCgz9Ziv7K54F8k7Ew3qkivkGstZeNZd5P6t5iDSA9MEUbwCWyW4",
  "key9": "5KFq77wWdbRewPmM3o2CsNcFbHwxnwe6QjC7isTo6AnG8M1NGzBtAuXUbXFw5GTVp32fYdxqru5DjvMiaeuv4cjr",
  "key10": "ePNJisiS3XzwbEspJzeyCmiwhqRGs4JPUd9DsXweYTJmRbvU7MN8MstgJVn6sff1T9KWS4iYpzjJaS6TUZMQfzb",
  "key11": "2Yk7xbaCMmF8h1w3VM29LF9zRzEjoK69pxZaUU1P7bVzeQ82WBcGHgTcG4eqhrd5b2bzSArGMBbERRw6sDCMoiCB",
  "key12": "235xDLG2g8LpaYLVvcV17FjFwF43yTUd8zdJ4CbfdwfoK8GCEGHBRNbTh6ZRPScU1kWJmCQHQSPVrmhy69SqZKm4",
  "key13": "62cL4LdeopyPWzV27pfPmUAuntsXenya3DLd5jXt5edoEADPUH2sZLcntfFoGSp5CtKNCWZZX4YvHmktsXoU62nU",
  "key14": "2zBwRY7dEFxFk1nu19vVEksMHvEWANXG2Cwkid7q9u3tHVBvCymwNGAThMPwkZZTWBc1N7YTMttfz5UD9wvjCjQ1",
  "key15": "5GAFkuMRdzEHjtULmAfa2JLWSj8H4AKdkFahXH1v4iNCW8Eve6Mj2wVAuDX4aD9HwfJpCEukc3w1WyBePeoPc4gK",
  "key16": "eUfXKzyNJMBTLtPrtoHz9gGs7WgjtqDpwNP5saUcixDwDd5LprZo4pnzDe15CfyooTMT3xhPy1KMTwMA2D6K9DH",
  "key17": "KoWTvrrdYBTtzz3mp3tx9spzuHuDNDd5oed75v8hEyBMMoaJrcRJMMtrmy1XvGBkRFYYHUuzCudKNNyC4WhzkzC",
  "key18": "3LfeS8svDxnyHp39Cr7C9TeohdafViCC87yvY4aRsLRzp92xiXSm9TyMgVhrQ2cBQWifWT644auftB1XhYpTEEz4",
  "key19": "4xnD7WPx4eRAZQc9Fo5GiGQCoEsLZ4HSMk2PMS8bEVtJtEuMK6JUSv4f5Kutt9L5TzMbrCG4sys3HcmjA7rxDviE",
  "key20": "2v8w5MPZvYvkLR2J3VTA9JVq6sdsXde12PfKdeWC1A1zPpLKW46hNP2z7bkENKXt7LYY3NsMHJfP3e7Zg6cZF8GT",
  "key21": "QpkXoSpFPhFsYg2JigjJ36LauL7oB9NKTDmytVSKWjMsCGzVeoQ6KqLejMCNmnc4obVnh4BMn6JxGRDoMcCNXQh",
  "key22": "5MFY325GS2TEokRCK412wVLxSmU5nXercCcQ3ApHpB3g3ChVp2B1WjpMN3NKYExaH3gjSRHNnHkEJjBBjv3XLTLZ",
  "key23": "3rX7TXAJ1ycMW81m9PTbSwLFE5TXierzSzQSEpE1eJ8e62a8ViAe26JpDNZ8dJBPYewYMW9ZfFfmuohgRDiV2EKX",
  "key24": "658hNccMuk8b9RP5UJh5aro2JAuCkdy6gzwBTbQjZbvRbJfb5w7c6h3hzqWGrUa3rnynZSJkifndwD926dfAyL3j",
  "key25": "53m8XwcnfoSaS6zPCx6EUJgDBsr5SSugj3Bg3a4LRHtjeGmXz2wy26vCpdQmcQ3QorMbHWuaiwniLVHU1vbFb7VN",
  "key26": "2niUGWCx54YJDuGooPY4aX7HA2uYbU144MJNXBGMNMiovvQ6zAL4gf51mdLtLBQvJsLvTQBNWXr4dxjMGknsL6AW",
  "key27": "5gqyPYsoSUwenmmHQKZXVQo4hC5j4iRNvyZcU1Ru4jg7iVzLJJ6pQzu35aeV8YZS18aERCQrAwDQqhQVmC67UGJi",
  "key28": "TKsb1KAzbDgw5pFbqNkrWABpuB8i8hfikfHxUCJ8XU6fYuBYdyZw832N8hzwQ89ACi2ZHFAWakSiFEetQ26Qxbx",
  "key29": "3AKRAL9qT3uG4DXRbmzpfRATRRAoEv5eZqpVnhJY1MdLrWnrZHkxPHeYUHETswLi7iy7gb5BskNGjjQKj1LxerY2",
  "key30": "5ZAN58cfqpsKV7RfymFphQUZnSM5w99Zd4gR2aQF7Uv2k7fnnPPEi3iFEdQsiodaV8yxYqvxtLjijApy3U1nLYVt",
  "key31": "4ydfM1b91t8i6CAaASJbd5BgimBrCLjyi3bmDe2SGD58yjdEiWmurGnqqgjrsadi5BT7mBaeKPrf4FEUJdpFFYTJ",
  "key32": "4YM4haLczJsXsHkeMekZTa3CsrRgTpaN5A1cp5bWJpfM98o1BqLRvMQafpg83f3CZeEEUhuQucY9KCcffECuY3qZ",
  "key33": "2nQ7QBsqxv3D97BbN5hsJJB1HpKjNYxBvBFuQSg6sVj8hrUyjNkAbFny5zjor82e2WCnwEhqkJyPd365enF7Cg7G",
  "key34": "YHMkoC6ws4i2hUxnxJMakGSbMe8SiqwJaEcZo8WUXzMFr3U6nKaKwvr7mssC5r2M23PhNoNL8HN6C9dgJem1Mka",
  "key35": "3Ug25zeMchzRi8LRQrZCWWNjbE23HR34T3ckzB5cAQh7JscDVNN5VYca4vU26Qx3uX7HkDCdAxB1GRpvfUeVnZHB",
  "key36": "5kuV2oWv32VqfK3qNXJ9TJ7zhgUZ2dXdLMrcYdaC7ktxAsVy6BjBTbsvrANuAiy49SR1hYWYhTQV8s78eLsph4Vv"
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
