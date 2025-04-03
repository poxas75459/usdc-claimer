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
    "4oiNwrX7bcxnYMowqBRJwpydGaBm2CZm4t7bDhRhrMvfT697rGcrsHDTjs7Z4fKw78mt4rqSEjhHAHaLT9SsXMRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kKhmuQ1sJJ9vgzsg3SvX1oCrZtzhRKcT3vWghKTpDMGvkEZD7CfnU3qXbevRuxt9LEigtKp9K1uiTdXc9H5SKp9",
  "key1": "4bK6Hi2L5FxAtWJamd9d8Fcfgpv2rhbG7JNW4ffhgQKgPfG2fKQxhRYQphGwo3VNGiWhzxmgHa2jxrectenUYp6L",
  "key2": "1fbCFmLwaiCGmHz2SpdEjHnv6BJpDNMGTHMdfdyBhiWj5x2xJYLusthNScQfdKVUakCUDvfNEMHFJi1oeBvCfbt",
  "key3": "3Ub1dh1FJAMG9Vmy1gEZ7vzomhEihj4adkYJERYHSHfbSnDFFjZL2rKPKdDhbNt3acYtcn48oKGjG39djzuMMqXV",
  "key4": "VJV8ZkrAbXRHXMt84KHrQatyvGT31hkAodXgGmEPyAB5ujZpQH3PaV9zvghb2k4HgckD3kZASa7w9howNn55UcF",
  "key5": "4YErTwrH9tLorfJEQZWBSv6J7uhkyeM32fhgCgyKxPAuH1y4oBgjZHuf7mZyjWAHzCgggbhuuKZAYMmEJWez8W2N",
  "key6": "3QyWrxfndvbRgABWgBZSPuxe26GD7YVzCkAPS7wCP5euhDw7xtaTQim1ayW61FaHgfVWqZobacnAUbBu8zi12XaQ",
  "key7": "3YHX7gBc4e1kPnKKt9XKuqTskF4qo8mzjSso85xLecdkqcuyjEW4FNnjLrbqTtNpCJy5xTTkEudarNCyvDiDeuhe",
  "key8": "2PqqQ3FSVJ8sHYx6Fjv3Tcdgw6UvMFfW3VgqAvRQX5HVhNQB73PBrpBPMPG9ocuNkY4ix6egyCPcMAzqyZMyPU2o",
  "key9": "3ZLHqDwwq9e6Lfd2HdiNRMNML5ZXkHPw4P6iMfDEVhaAjp4Eed58oVb8ZRY1xmJrKNfaMQczY5wjhkxdbAmqEZ9f",
  "key10": "4htjDcyRfs7dYzYdvgvLWxjxZuEFLuQ46zDioaH5D7fw9Pky64R5A3tyNXeXLxpa5NqNHmhLHJ14q4yM8L254AU",
  "key11": "5DfjTi8dBKCw7Rj5xHCkZYC7GbxKpFXiVXcNPjeSFvGBnumdyjUUhscZjdRT87GXipQMjCAMv8gvejJVg8g5zqNq",
  "key12": "52a9gFaSVgpTVP3XAYrmxuVvHbGrDZxE3sDRU32Q37tHnYue1WdKUx5PPUsdBMh6qghkSryoGpb2cjUSPJhGPrdU",
  "key13": "46STqBEPdfyJ7vcPxNK9PLDicyKvdXrV7z98HjSmCbNCz4ZzxeWnYXS18LsyLZmRmkuKMNgsv6N3gJLsjaAQCpvC",
  "key14": "6788vNYuwH8CBA7FCnZsAU7ayP6ih7AhuMmvRAWGaDbS8iwDntXqq5Td8w1YdPPSJWteCfTar59o3QGkS4MorxCN",
  "key15": "5LoN77jpiZwYKHBx9ZYnQwu4YmAvAui7MR5amBfcVoBzg4LkM79hr6aYPuTwpi4RXgsF3Cn8bBdGQQteooQLVdWA",
  "key16": "QqWF5VXKHLn5bzg25PfVhReokqszpmzkv6vyjjN5Lnp6ebLKomhKJcFHP9NmNp4hrswpneYytKESVb2qK7kqw7N",
  "key17": "4QKeGYsK3ubGYNiMf5j4zfpgj5RHU92DJvFkhd7sXXrHwNG4ndSHNHukxjd77BJuDCNyi9vNHtPF4cdHtFvzsj6t",
  "key18": "baFwLPZFbnDxa2tUyepYYpADBh5K4W4a1BRyw8K85MZD9JttN8z7f5p8pJfadY1NHfTbtceJ23UR24eQ2y6qUT7",
  "key19": "2qZk6SGZf3MN1ARJ49co1Ymib5i38DkHarDV3dDFMBqBnEhahFc44Y6zuHAbVLWPKs78rtPtmsk81XhhgjuspcQu",
  "key20": "2JCTwfHp6ZGMgmGbE3QpvPLV9NY89Gmmd483sPiCYUkdNQcoSJpuHhEf9bpRSAhVh4jEJRDSoFMir5JqX1KNj4vY",
  "key21": "4sAy3LdnxQYvQeN2TF1Lt1xNCDYwKgGD8dmjz9U6vvuPsuptiF59JG2mh3pVWavphrSPj9NzRkjnzDp3Bra3qbvi",
  "key22": "2uxvhDUUEpryVepPjYhMaLYV3yJdDLNa9FeJ6GdNQJXruwbvifAXahYXL49uA3V2PbhXzUYGpsBqt5gxdQScnTyB",
  "key23": "45AYn4VmfYL9tpehwXjUT7rbNUFPzvbugegB1dZpYbHh4DnjUQJjxgqJHpZGpfzw4iHi1m8EZQ45YcvS6jcZgCXY",
  "key24": "3nudtzToJSdSd2ww1d4vNApgmiXDQAhhX2LhPpG8HSj5CvMyyouiDk46U1rVTySn7gMUspUxZ1DRMkZD5jCrBJmZ",
  "key25": "3GjYqac9roNxRzDxnYp8j5UtZFWX1vJPdYYaR73ncZWFtcnLMBRJj8LwdHLqoCvR1oZPZPUPWZFbnSaMDvyCjUYo",
  "key26": "TaK7P8nah9GZdsKoJbwPJRWPrKNbQVxGCgGE7cgLxuFbNNRYJAKiADjZfbVoWwJVQGH7XqJf1rPx3jtGrZYXdjc",
  "key27": "2ye3bVKG8Mjj42Qig3EEACSHcn7aJiaKX6iCpp6QQieFkQpw1nhKbeHeJpMipUZ1madVH3Y9d1DmUyouThHyZMMA",
  "key28": "4jytUVxy6cbaBzfUVxi3d9tEN5BHYozK7GoqSdgdsKL4CB2AYgEX1SxeHgMW2pePenVYxhHAsFoVnH3hDwLFM1Mc",
  "key29": "3TYhT5cKQxhJJsDLYeG3J1xaJcLp9HMwCLmt2jSDUqa2yN76dAQgCYzaVVusrgWEEXkkQAxw4ZCfuJVonefrrhWw",
  "key30": "3hJZr4q95ARSugJK1mg5dtXPZtsUJCAkwXKEhRfNqDLFsApy8KuZpWRQXSwTHiZx1tkfN3wincyyiCQkwjYUKe5h",
  "key31": "3dE6g2KK24rRkSx81bEiqG555JAtG2Uu8M5ttcfg7kKEKfeR6rwWGXFLumuMD2dDEZwFNzjjXZzy84qFgeEWxV1z",
  "key32": "5Y1mk1mnEPpKANnvbwWaaTDW196zmr68yfJNTsouCjYfLyknatH2kAWUEW4tHiXfHMVsYVwkV1BPkCgPMCTynNQZ",
  "key33": "eSEasjjVrSoWzHmWZPxroW1pBzs6cMQ11cimbSZ3RrWHMccEoDr1CCb7SW1AqmokoKUPqAQ6hu2CnsLxCtjk2Rz",
  "key34": "27ZpNARtuwAJJkwnr8WUchLKyR2qZfgAjxTjAE9A6MzD89GenzfvjXcqpnqjn1STSpvT4JVAT3NmLNih2a5XsR6n",
  "key35": "2iLtmDhDpvFT4bscgDZUuh7o668ZdFF8qECP5J5xMDcHrLWMKcHiadWWSzM7mJDbRShXQnZ3qNAS4TGgmbMiGAgL",
  "key36": "4xjHv16K6aShMHfQBg1ponChCfczyNQGBuRAa8gSbZhfDwtPQPx8nqR3J27Mii5sL86BUhNffDes15GgDUdDp1k2",
  "key37": "3RwJXyaLomSx6veEGjeYscy7sN4Uyh3Yo15bZvNN5MRgxvFYFSNJCoRWmema4bgDtPvEvkQXFmN15EbPMZnJ6sm4",
  "key38": "34Hw8hcRddoafM2jfGk1ihjDwSGGr5y6rk8bu9VkRhPPjDCvm27xncFK5Pbto53xs65E75mQ375ocTpuswJpgAH2",
  "key39": "4PwjnVEtxAH4HYwn65oqfz8YczSETTeJYD2E4jjyij5HQCBZxJQQNBNcKXANEasbY6jVmPtZgHGurL6Cq4wnSFzz",
  "key40": "3rj9Gj2WbJqntEdBs4D7ZzotFWVYWVpzbpQE7FbCPVM8PvTZLU3LQX3T5WJpAWHGQseL78DPRmaVuRK78KrTjngR",
  "key41": "3rHgaNwxR5ixzZHgcW5kXP9p3JYkMzdNwraa2MgbyjwW5nCK3Pr6JgoGZcgeFEBv1MAW1Ls5v6WGmmct1xb2HC4a",
  "key42": "537o9YgPP7zZkcHSaeQ8musCaBJ7hXFMohiZewCHnVavQNnKFx5tHNkTV2xPbsaVMdvMPdo4HeR1f4x2sNCYttQQ"
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
