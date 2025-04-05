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
    "KcmSoqXMafRhbeuLhHUorG4QHiDCmzjShHx3hczuyHLQ9f6jYEfqv3UcHsQMMXcjFon5LUF2ZMcng435mHefrhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qSAgRapk7qa3sj8yzNXjdnNNaQP1uPYZJXgnLYiAjKeaSFRVTLbu4rZ3tJttWraqbASREyCBmCgJDPLV37DQRH",
  "key1": "4rSscrHkhpieHwcr3xeRhYBoKokKUL7L5bw8nofhurx3oNFAPixYgQFtyZzjeobv63YQkwM9NdXXWs8DRBbzy4Dv",
  "key2": "yXdgvV87Lh3d5tBzidkJUFy8XtSHrUtkmxgLgaKqPXaaUTPRMnmaSnN88WR8Kw6vMwsqsxpwt4GnvTHqzkRkLbQ",
  "key3": "4ps64rD8Q7YJDoRSVcyndwSep2KSCdDU9UZVasKWG1GstSvjw6frLm3UQ5c6KtJRkoFVn51565xbDXaGGGouovFg",
  "key4": "4Db66nTB6f4u1AgtfbSKgDmg1KJd1xYvmZdLqXeqgaQDGc628NRcNkR5jaFwBwJQD35W6fpcAHWAyfXU16ffVVum",
  "key5": "doUkWwDrXcddvpChBbH9dcMP1CJeUW7s8eJ7esXDXetDnzYKqjjA2CB3hveHgo48uJibopZ8MT9JaiZJ2C2KPne",
  "key6": "4S2dbkTzuReXKbqEBL8dbiRnLHc3Kum39L1E7yrqGYMe2A4WuNLKUFG3K2Mb2S6cREwbAXZDBK7P9TTRYdVEHQZE",
  "key7": "3bNikxeE7XJ4bN5Av4oGFXtQqgXYWEWjk7aqd8nxwgcfyGo1pexh4TVgSSi5tPFV7Ez86astjwDAaiTVjbGMQxqe",
  "key8": "6jAFCbQgaFLyyLKodWAL2iKoFcmWh1nmJfSuPgMpcFfYkDzRLimF737NFc1Po2a94Upx4fMgxn69Ab9oaqudcU7",
  "key9": "4VQVGT5qhyUvCkQViMcPFWiqCrvc1SeUoitN8UzEszEQ5kwuYnWSrnancHAR2uz87fJYGP87JY56zqVGhzEPijyW",
  "key10": "44AEhnxNswnDp3mHLbMeDRWWb4usApCg8N8doEMph719pVPFFvXbx7KpQj9WxFkqCm6FLQ95WWGuANKDevnfimyM",
  "key11": "2MciAGWVuMMQkbVBqNbksia91qigdfMsBWTc6ssNUqq8843w22WBKCwh8ZpN5G2ySjPYBh4Tt5kpM2dMNwZnAvLz",
  "key12": "Kmyx7HTSPAXf7bCfubTSh4U4th2x9G1WH43MBLbrMSJ1SwYftUgV2oFme3ziepXk5pBAG7PD5hMKeBqjFhAXCod",
  "key13": "5YJvPdK29TtrUC2xAUc9TBbCLaNb9CwL2awim1GR2YnPya4wJ5EX6VjoHJLsKGaSUCJV9adv9YAzVADAFLbWxxbm",
  "key14": "6fWpZc6SNgMTzooteReWTA3JT76fqveTNurqEngRtjdv8Ck4Wh9xgwLNiG3tVUL1JCqU8XJF7hmUKCvgJhem5sN",
  "key15": "yp9iz6BTqxZv6EXzjPucv6iWruApSYoe7qovPK1hwTbTed8ze9kZTdLpSKUJCReZ6A53D7WL8h374Yv7YrEgtkf",
  "key16": "26baB5vf2ALhWdgqeVKPvMXfd6ToM4tm8ramtFjYqvxfHxf1dypvmhEPxE2GGshYDdU3ZCEBRuVer7CKwjdt6dM6",
  "key17": "4bNTyt7LDonDLKP4QBg8ac97fX4EYuqn2D6ieu3LJQnRnxPYoYTwosZr9jEx464YZMMXDTiSioNLQ4u6SLK4epKE",
  "key18": "5tojSyeRDoESqyxeJMuDUSkPbNbFySusNQaDRcCn4GQzwBUg8tEpmsxThGK7AzF8bufSpFvEvXX8Ye8jjEYBMfc1",
  "key19": "3tDJepwMb7uaiauWa7HNVRst79cHqeHaQP32V3veVfJb1JoPVhMh4BNuUJBdaTeLDL4Zs8tT9xMqkxh22pJ16Vz3",
  "key20": "4K1832Ptxy4JYX9ZnXt9k5mmMFNQ1VjdbiLcGMQuY2AkqRAxUS42kSb6yweKQBjJkLC91zpA7A9A9DK4DWFwMyf6",
  "key21": "4NSDnD1CiUESrJxDyMVqfB3pPcbahaRqYUa3Xmj1Dmap4eEqtpq3zrhq5YeVwcxpa4uVTrAVsPzP8YkiSLBHDptW",
  "key22": "eViEkmpLhbHzGpR3YVH4vGJ4z1D4dgCw9H6sVag3p3tbAEpeHoL8qipRkhFFKRPHYqbmBcJYh6RBvzyFpAw3qV9",
  "key23": "22ZuxRY2JWzc2U34b4VpL3DG8pJq6xiCfXLnKwzTmr7kzjDCHxL3bLBQy6bxBehMM8di5q5gvsH2iMgG4t4zFTap",
  "key24": "66eFxZtfiwDoCccw91HCr9T2uYNBQVP3Sfj8ZetAvwktzAkzcARgZ9H3wFM7wJJ1pyaAKxr7ep92G79o28R5ibnL",
  "key25": "65SW39GCjubfjCf96RM5nFofVByrUaa6vtGo83gVMVbnGrVHJTUKf27A7vWHTfTYk3GGvZXojUwiRA89sddoygv",
  "key26": "2EA8tqiMa6AWk2w1Xyc8ry5vWDithYTEBTx46UB1zkTtYyxsRnxnMGd6kdYxp1D9EphYYo2BBjVkkixyBPGGNVN1",
  "key27": "2zQ6DKZaBF3Uq5qt9o6fL6YsaFcDaxQpCSXoVNAW7a5s8XLbVwKVfTSERbgxBJHRKNMPezKU4y1rjEb8xw5SwpJ1",
  "key28": "25jSnYmVQqhMue1ju5EieCeh8aT3mVPu2coKCupQJ1gAy6JRTtkKDDs6pzZsr6rHtRtWywEvgucjVGxn2TKERMbF",
  "key29": "wWNNGX7y5ZVuwU4GXrjMLa9m2r4CWMtZRBdRsqp5zsyFTu1SydKfUfeUeFzy9aRGcj7xSqAor6g3gkimPDKTxiC",
  "key30": "3XSDF28DsjoefuJx3jG9EP2qDhkHnRmzVzy5vG3BiscoAZP7Lnuewfa1xddqU56diFURe1EFEYTEobcG7rgdQMGH",
  "key31": "K2JzQm3FVmt61J4yYyWpgg41MoBnPXpo9W2ufp3iqAY8bqiR3yaTZsqZLezhfVQJwc37cUHh8WQeikgPm32CLwv",
  "key32": "59kdmeMFDcaV1BxQpPi9kWsX7ijY6KL8A2kzkmZKBUfvCzfWUbjYaTgz7t5g4xXEgTzwqxTym2KwrqfFtUU9ANZ2",
  "key33": "2cYJNaihCgcnFN6HJa14T88RK6rFQd1HwezpyDiEsds8wx7cjSwhpoH1kVMXpsNKHPDU65KCYosr8Wx5tSyz1vKd"
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
