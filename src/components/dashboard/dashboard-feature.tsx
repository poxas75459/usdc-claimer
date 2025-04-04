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
    "4UbpCj9Wz4MewzCDaQ7jtabpMPBefDzsr8K4WQKw8cyVaCsyGgHSKwyawx5ZrsJfuT3PphMcN5Rh8Ebp7mYmrXvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dyi79pg3eWMn1DSsebBRn6UHDcwKifTv6MQZ1v6B97gva1yfgpATZGGd5ZU7JzErqoBQMCEB82NwVf8eGx1pQap",
  "key1": "xgzLbDQN3EkUtxxquLvu9qiwY7tGgKznkFCXnJ22DHQyFZjspQoFpctQtz7v9w3Ekx3cRHK9vxHn7QKy1bvEcPi",
  "key2": "2rHPQLcSoqePJs6DQTAv9PpHPsfFfVZ2pPQ6wijFzt9KpNT8SjBudpa9pEUA2JVT5zWPX55FsDLxNS5EqigWYEqP",
  "key3": "4GcPkTKdKw3edgMG3xn3bv7yrmjz7QcZ9aKF7xcHRvwLRvUtqxF4pYYoY5c5AVFLkVfMxUmKUFA2aLsZ2EnmHZZi",
  "key4": "Sb32C7YqaF3FcnXAYyF1XRAu4VJ3foRcnaYFPkEBmvVhN2rPdToEES87CkscA4qDbDkCqJLmQQbeJ6MqMVubXty",
  "key5": "2hpuQin8tRucTW6YP9ebLx64BnZcJbuTVnKkYAe2wcakSTirQbYJww4fpHAJckeNB92z8Q9SkFgG7p5HfZn3V9V3",
  "key6": "XGEzfQYdsgiQdupzpToZacqwyh5mows29Uo4zZdfcThUMnb2wWfCQB1xr9QwzLwRnzWCESuiyY2aa9v29co7QZi",
  "key7": "2Dwg1hsefAo5HQpy62aYtBZPgnwRkKkoRutyBP9CwkiWTdYP2FkFtb11vJhXik2RHStdHwf9oJVQaRgPsydw5sU4",
  "key8": "4qvGf86j6WMQHGz4nUWrH1hNpTuUKRTDynM942417FTxuzFcnE2hE3n8R3ib5upg3gyUkqgZMEuqni2YaUNxd7Gq",
  "key9": "4hGP8vBvMbv8o2k1Nyg4s2tXc3r37CmLDZwSSR8nvqfFo2WDxc1HaHVNcVV1XGouUgqEbYpM4vBTKkPFKEMwtgS3",
  "key10": "esfKZ2eE33qKGPii7FymAaPUdp6zhDs8d7ZAFR2R95avcxUxFrEDSCsB2pttAD84qPYU4V6rM83whXB6njtKJkm",
  "key11": "4vuzP4UP5WW1AHTNMPDuqFrsGi6e9TnjGQcheREKCiep6g4MqUNxN7mThcjFYfQMLZkrEFyPkcyEWTCsUj3GpNX7",
  "key12": "DyNAPQD28Ek9qno9HVgAA5gfWCif5NiWFWtPB32Uvtjp7hX2G3Pzu2AL2eXA6tZVniUccwP8c9jaY6kXKFNndgB",
  "key13": "3oNz7EmCtmdiCxbkBCeHmijXGncG4o1Y1EZHjxkda7EPjEbedfW3VD1HT5VEunRw9vRMceBJTQK8U9CgN85GzFSt",
  "key14": "4Dp1ZuizajRM1PvZ8c1dtPWv4WLUNrv4HZdBhB1Hw4HYrmgnK5S9KQbP9DQRLok6o4jA5BnkAEeoioiWw8SbDqSB",
  "key15": "2htiwMGeWey8YPQN8Yv2Q4xGQL67mWEPdrwcDcypBfE4MN2m5unBXsBUR8E38utmQv48NkRRzCVkV5w7aAHSYZZZ",
  "key16": "3ETso9SsF4zg2cssWVavZTaC7V1zCUuuR49M26pBFjMK5D2Pfs57Mmb8XDaNCVazfUVMP8wEMeWC8D9GDkFgdWVk",
  "key17": "4HZWC9WekKshyGwptuESDoqfA2Wj17ZNNRBpVScec6Hgd4XSxYa41RkHvcN8pAcrQWJPpCH7xzP2eRCsZ9yERpgV",
  "key18": "2NaaDWaahY86zc1rxv5deKKmhJuh5nTauxuobBKnmFQDYkeSV7YWQZ4WTuMkXUqSARnbUBbsJAbLGzvCSzxEiaW3",
  "key19": "QVEG49CYCUU8K2YwgMDn8FM3HwX4eFR75QanyLXigVJy9xJxwHnizgzQ7dpPWqiiHLtfk1uxqBbJMbmMa3NPVja",
  "key20": "2xKfCBv5fe6TL7rKkeJ7585unS8ra5zTh9bmKWLdMYWWnY4XXsGbkT1aTAsoDdhhR3d6mcceLTdTX43NvKhkvvwY",
  "key21": "2kusTGcJj1JrMMLdkfh1a7S7ipyfUbiJT3A32J5DCAuhMD5TJid2feS42hQLYWum1ZMACWSvmZ5ob9fGqzMGmfcw",
  "key22": "4UcH54YYbhMSjdQNjibHrpsdf4thbqFeAvj6khkViQKzwRwKwwonNLMBZXhpbLK7t5zgJdCfDtto96sGotLKUbMM",
  "key23": "3vK7dNpoL6qVGQ9Qzwyxbk7djdw2kS911SD3xJGC2RZinMhmBGvdvx1huPh51YMf8VC3K4pdaDP7sVvCwbUQCbTr",
  "key24": "29jEjczfMMv2yozVSshhTHpbYPvQHoeE4DebsTEnQ9PUEUiMHUuRL7JtPnyWbBJWugkZpY9BS6HD6uhW2wjCb1Qj",
  "key25": "5VVp6SJZckfhYsiVm6poJtDMRtCozPBWSygE8sgiD8kZEVk7YwBH4ckbvRxbUyxAyU439sMTRwNnWKtTDhvyTEzf",
  "key26": "2CWAU1X32u7WCe2x1MDbP2ByfnJhKrWNJBNCVBsKHt1by67YYuaRh4giid2LTvcVky5qQXTjj2npgW2SVMmqwAzb",
  "key27": "64x7vBBdBjvQS3z6am5RSJ1q7ft1KsVZDqboWjFMvezvF9fzA9pWz85vYKwvcUrvM3SMkua7LxGJoN35qhuQqnRN",
  "key28": "4maMEwPEvnvNxhTfTeTLXoWM5QWfw4trsB8id4MzHCnBtUCHzGeiHHceESsNJExBVwp7tjSGwGVpedGRWXR2TyoL",
  "key29": "5oVizk7fc1oHeJhPFZw7sQ3LaRc7URfVF5jMJFLQSxCjers8ZbsUgqeEQTAPyaiggzq3Py51QRgkN2RpgL1ggiPw",
  "key30": "2QMv7eUkQHfQrYXYQDZerEpH6MAxMSv1Vjz6f7o5KeKgsQjSJfKT9fEaFWkPtUh4s9vXtyQvUaXeHgEDXXgGUBEx",
  "key31": "iJrafYUbbJ6pC7g864mtSSSHenSGH9z5bCfGP3gyn9vapVUqfm6dWqmSLeKWqGMiouLZtzwEpnNtbxxNr4iP5B1",
  "key32": "4CNq62Yxq2qR7LoN3C2QpBM8vtCFcWpj3isjwTqZiBrLZTEu2jQw6vJEfLo7GCpbe2o6j4gbNArCVPCNQvCiSFHF",
  "key33": "4LeVaZMUsPCCeuGHeLPwssMMYLFymhVAA7n8GcbzWpSQ35EcHShce2VFHG4LjdXyKHibXtBHqkTdnhHpw85BF5S9",
  "key34": "3qnyWLwh2xxbbFPDzBuDzUSonWMK7dcw9Uorzou84oXCbwU3RGXTPsZ4x2GTAPezpWyZsKLCfoHfoU9Ujw9emrt6",
  "key35": "2RXj9LRLBUAHzvDsXrGvFSMy83SbtmDmTQj5bFMwoMiG5vLD2kAtaheztDvpxhAv66K3LLjd4aE8EH5QbhvAwFh7",
  "key36": "3GRv2tCMfffMvnGLLU6hPX7PVvfRj66ZWwBe9MWosBoYJTJNLfVf8rwbj3S5nJffd9kZyFdQLvzxNmATxxqJdGrm",
  "key37": "5WarbRwLPzuQjzJkMEs9M8oKYcdyoNnrXmgvGbwoYDB1dawcMKTrj1Ei7m29De8tUqVuasDeXXNesWEgG2pYRyvX",
  "key38": "7gyqd9GQKqk3M3EwGgUhsEpoyLscexT2UJVcABC7kR7KaCxQ4mQBsxPWwVATcAxJKtuWins3Vu3nkKMMBg6Rupt"
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
