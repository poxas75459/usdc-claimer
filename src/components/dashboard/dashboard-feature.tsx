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
    "5vJee5zxajPqmZqhFgtghvyCWqe5awX44oJFfGonq7GcVZSQBXX5cxudSyxFrQ8mMFju87QJU1bWp5Cj2txd5JnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9PP43dqzHjGC471Ci5oMpJ8tTexL8K8m8ZYojr8zuj7dZyJegqWFhkvb9xjaywUVZVWKrmUwUUeAuFgMcicZL6",
  "key1": "5SqjtP9AxrVxfPLLDxwJAUm8GsNamaRxV7gfazrzef9pstMRQN3rAmR6F47bcjnhQBiQwWKZ6wEL86MbC9kC4zM3",
  "key2": "5RzoumvbVaoMoLo4wyWu3GEEAw13mMU5GQp4kRG32Qw3LEmVPiGYZZNbmfDwukQ4gDmQai53n7LVdHFqK9eYm355",
  "key3": "2XdXbzvx1NFUYY4DToxKJFQpejRwoEz5KXSM6uvcU8EwqjXJnZ4yseaNVx8UTxEBSUQk8BJx1ZpFYx2BJxQ6dKEs",
  "key4": "2aRvU97n5vbJPhVeULAq3KX4cdgTsfvk89iTzxmvzH7EbQUrWNnzkhEDbhdeKktF2Kac1aMpGT46GesP2vM5q7gR",
  "key5": "36erCMYqFQbgZCii3L2y7HFqrvuz48Vp6ppYAYvjxRVU8nT6BFLRR2UJZmi7c1az9KNun4o2E8kwUJLeKYYspDMT",
  "key6": "2AqsJNNopiZJDV9e7UWSm4Y7LUj95UjwvxBAaWWrfbmz3LR11spvaiwekdjjSjLdfXqCcteeXx5xpxeCdqWt7eFe",
  "key7": "QkWk8vRpAbniCAcWT36i6r5LbgemAkjLVEEP71KNYN9aEfMV76fvkJw2YEA4xCS9SxEjhtJ3SaZscNoADdvPY29",
  "key8": "eAnhEfGUigf13jiMzdEwDCSwrBvdpKEnXrJUv66KEZgDf1aF5BnpW1Mr2bhZvSMxm1iwVU1oEbUKiZYyLt6j592",
  "key9": "eeGsPUmQdAqs7s12Q6FjzDQSE4Fjyj8Jd7zcqyif6DhdeQanUZmWEUtMYzDHfS5TEesJTkXLGrB1Hm3mjqfx53o",
  "key10": "3VUwVkSfXudftAFUsBnCghDXoER6jPk9hko89h9PUZmaSEi9GEe34B8fgo9YeDxvFsXnKDHg8UmfEHSRJGtkfD5t",
  "key11": "2a3qLK9bHN16TeDJ8f3g7u7d2ebZRWAoG7gyLszRcqjoreVMwXZ7HH1axV5pPQnDxdGFvE5QD715rKxXaVaJMdTB",
  "key12": "4iuA2No4DoeekmKuDVZC94yqNWUdBmKxUHYK2D6tjGCvs3ny1dvodEeknjxF14kEj5EbJsFQapZ3254PjhvP9Njd",
  "key13": "4ptbJsw574oHsjyJ5NCYh2QQLjcsdknuCQP8insGY6KTjeWsxxpJB8JPBW7BhsVzx5j7jd4UcCEPJctJHFxTNqP3",
  "key14": "4X6UVm6EneuA1dSci4w3ADfmospZoFZy6uYSNKruHmgFJRTrpzyLwm4kYZCHg3nJLUdM2r5GccvAQGGc9KgmmMQJ",
  "key15": "4YsHSUEvpJPtTRuf9iLR5ez4Pke47u2sVNCBzXRGyotkqf3XC2G8XrLvSYt75wGiuhWuuQem8X9f88KKBb2F8rQB",
  "key16": "4rsPBEfaZtsukNnCuhFAQQJ65E9iaSvTHv9RRALDwkEae1bMMC47cPuoGLVpTjgLFfvaECE8TdhAwmjZ8icmgDJP",
  "key17": "4zSvNngbcXee82GUwxrUj7Qn2A37dvEYptjzqDioaTQgzGnw9zsLtY38wnvTJQLbkpjxVzNvkRwX4YFFRvRFfrA3",
  "key18": "5G3Zhm57oM4cTdkb3to2BxBKaw1XE5qJnzXWxVDyzoMk98sWmffYdMMBVfG3nJMjDy6QyqwZ8m68c8j6j1AyZySP",
  "key19": "3duPSKeBtuV2dJXPuS3v23NHrokM8UCa1VUC4ufcTCzEBW1ibcVmimr7CbsFu7eBn8cZTZLR8JoPVzn8jggd6cdW",
  "key20": "2tdBSLFuJXQzGtKXqiB3ZNSAHqeDSr7279EfQQw7AtitNwcNdpSMXpkZu2unUZ66BajWrgj2VFVMNa5mQqbo34vb",
  "key21": "2sLf9XLP4Hy7jBAYWJ1z9ZFyTL3vjhb6k1vQcbjdcpPkeHz2PuvmSZow1SBXJHWmd4VkjznCrAVxXu4UYUazyMn7",
  "key22": "3SJ9Zpb62ptd4nvPoqxmgT5snkxqvrifp18hyXnUG7Sdf92Xt9bLVbPjazDFyWjX3syq5bogCnF35Jxnz1sGbG7E",
  "key23": "25x8fyp6ACUWoDdCMndMkh2qcXBUhottxeasDqk4zoRhizxEf3J6MAnVaSFeiibTZiFTjfNiLH7byGVmBhQc7yJA",
  "key24": "22r8SSVcWUbHc12F6ZbvP9mZRJWsHAWH4UFcpSWEnBKC9GJ92GK8RRun57F1s5eTVbrtb8cEfZvcKe11XxTDeQiR",
  "key25": "2gaRNvTJPsfMRsK2EKnCFVVvAGMQgp3gLG8uoqCKMLqp6tZwywmb5G1UK9PwZHxUzMkqKz56Pdkv5oJBW148a1wa",
  "key26": "bFhtsDDi9k14nYboinDAvL53M3kF7tSUc7uogwGzoVARE16csbbn7ucFnVTBSPWUaHQ377u8oF62anXJ2qhTcc5",
  "key27": "3hajZuCKTEBBBtNB5cutdbAon94smr914LeW74HmyQZ3C3LFo16hKp62fmN2pwRoceFtJhCoNT3GSBZSe14G5uCE",
  "key28": "zDQ1A8MPAYXmwThm3vg9a1PshTkJsjnkAdysgnLLXuMfTM7fHqE7BSNhyyFeCgqWJ9WTn2W8wgWdkzDVLBZ69Vi",
  "key29": "4CgZGxKsFoWEmhX5rSL9SDBmrZtvypHuXcGTKTCbXQVZoNqzoCLereQ33TmeaY3rZnpjyquB7Boe1d5K9eoDNeJX",
  "key30": "2UntUzNkJcitxdksgJREWS39X3bgtmPEgUc6ZDXqxFUZQxze8npCz4hmNFGkhRu7i3QSWMJq3ZRQdqB4JQchTGUk",
  "key31": "NhagZ6jDmo48pxXCH7yLMMBG81cX7jXgaG9SnD9CcjA3xbY5juk9PahYrGdw3ZiJ3ma1VrJfuHhmta1XAvaspsu",
  "key32": "5pBBP6s68GQM1pU586y8n7Bwr1XrJD1pJFg1Dh9xFhXvxhZragF4TPYaN9ABs3D97X7WW4hKxjgzjSsAkkL5d8Gc",
  "key33": "5cPUTK11C7ecE9oUyenyECYwoNzDP6nT9f6Q1oRb9Bkd8X5przHtoWfseX5NGsTxsN4cDZeJWVS2uzW9aQPx7swB",
  "key34": "5si3U2bfJZFnPQh8Xp48BWwgbgBhqGRoqgHMa4V1kbN8rAkDriKvdjFq2bfDpAR3CmxxcmjueQqfD785HAjJGzVt",
  "key35": "4HsXsNWadHYN2WsmQkXSfZ9XjJGSyHgocghjaVTs8BWHJnuyRQvnpT8cqACH4MRaWTvtvMSSWPa4VFcVmBLHe82R"
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
