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
    "RAdBa639yD3W7n2sVVeYtJ4pDVuXhawreMt9GpeUTvx7P52raNPWZXihzhEXfKrAG1gG3WFvMzWorYpWeNJaFDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4isUgBuGqLpZkUc8kSM45ARuLLJgsZRKbhhV8ku7bKKnx4JpCd4YSCnGh9kZAius4xmFtgvkkyJ1ZcMd7rWFKT",
  "key1": "4dqgYFXbf4DrairAr6q1U42f4rACLqfKUmwESA43jD8mKZ7QfyFSUXjwR4KY8ECMXPxvAGsvntJ2G1JcLtWonV1J",
  "key2": "2krV5F8k1doKvwZjQezg6a6Sa5DWkretbs1vTk7kwCJRPLeSatBLMMjTEVTQass5o8raqgFVRqaA1h8JTqRz9Rce",
  "key3": "5w6AmeiJcAiNfCThgtQiEosKdhT5nr1VF8PriTtZ2sCfa3mm2zZqboyhvSMDPdwqr9VPyztqRoCCwEe1ZkqFyyFy",
  "key4": "SmAJPmqojHP8JjbDkNMnR1szRv1ndEvP4uw4CxcjbBZD9XSxJeobW8ogaYPYmTmpVdsxS6tWpU45Hf5VxXYkWY8",
  "key5": "2aVB6meY455AxytjnPz5Wsmidt8bm2nMfPstkxtCLHYuNUQ8QXygKyu2E1nzbgSarqAEUzVGW8nvvoXeJtXiU67s",
  "key6": "Tu44h9cPthen5GZNtYsBtHLpioKhqJ1w63JLUdXMgN1E3kw1T6MgWN1VKV8jCFD93HEnGDirwavxjPeXfaUXe7J",
  "key7": "3FvjDEkPLkawCHZ8A2Pqu2Gw5SsYiQNZdn7Xbpt4sxMjbjw9qSKwjbe8fKn9BC7KCABgMxjQbRw3BdVnUSo5PcHq",
  "key8": "3uQ6V3iNTCd1nNLrXqoYR2GGkwaoSkjE4gqoZbjUjQMvZ5SB98j6pKuobmBFR5rj7pvqK5Vaj4AWKkF5ZFb7V51E",
  "key9": "2dmKV2LYoPn2KSNd6iuh82RRcdohkLMZiSLktvyGg9c24RKn9goNhEwyxiqKvRkhBvMdgZPhUz57rPxNhbsRCehK",
  "key10": "278UpHKsgCsyt7FEDp4umzEvzoDPdSaZMVnNHyT5hDUWLE5LzkewRiZkaoXPn3zkPVWs7m8ekfhq2NXahh35t7HY",
  "key11": "2z2aBeRqZUxrR1hoLUoyja2pTCXsKdMLWDo43NnDTzBWGb5ayKr1QMWxyLyXuJLSdQEt84QPT72oNhyqJnp8iZpp",
  "key12": "2DbCFvjehTZZV3aTgggH5aT2x1mJRU3hDYc29rPnWY77N5xoyv9KzJaj3AJtNgbND6z7TFpMEPFcrPPWuCVswAyR",
  "key13": "N3XAWMV14pQuxS6FgcSVyvGaNzwNGtxZgU9YTc9rQUCQcLXV23M5DQ1MtbmweFd7yXDVyTFpNBxFycrwkGriB4f",
  "key14": "2qt45dKYifwK4QfSbfeaMpdsEwGg93YCtJRoUWQDPAQJUJfAjSDgzovVM7VCcmJDBp6mxtmGku9LeUpGaCCMwA1P",
  "key15": "3Vk1hcCzYwX6chUGttzCMQB9VwkHxkm61VUZNDq1P8t2F6JKH6y29UGCyNVi69ieSDBFkV5ZtS8gwsnfxESWZoiR",
  "key16": "2Kzz1ke6VbhoE3v3jEZovBw4nLJ1xTNJxMqTGVBiQk43tPUswcxJi5PrmkgKtFJDx7DdDnaDxatBw24dqgFsg5RT",
  "key17": "3RwLu2sUAg35uWR2NdbBc4jKr7TnneUDjfMdC2pKSueD37pKYbjfD3JBPQbdozt8VNx7B7PTwURrrewEky5SjZ5r",
  "key18": "5R672TQX5x5oaGFD1Ahz5gwwaMMPBbmrkfEpRtVoByTMWyTQiF7X5RdvaX73QfmQAJ284WWPRJxr6KFGsCcEb4kf",
  "key19": "2SQc27pWkqjcLS8vg8e7ovXA2wohPkJkbmdW4VdDT6Caj2ABPzSok3chGHCGpg6gNZFbZ21S3mr8xY7peZmiLLJD",
  "key20": "twWRcK8vagiywKBkBbhiNjcgkQ4f7rwVPMw3fCPHfcUqErHkE2mYDH8VpWGXZz8RiTSaAPuY5uGEDzA2zDJnC6u",
  "key21": "41iM8jez2qfdBXzQ9CVVv1RAxab8BbzwcCv9vvipwUvke1KR9LohWZL136Y8XJ3dR95Vg4thu5MP6NFpw45UWRc3",
  "key22": "47joVir8VVdNbKtRGWrVCqewjpcMfG4snYPNp1k73gq7DBNq1z3XHsuXG9hMvfy9QS9DQECSyLnGVU5rL7E4p9Hv",
  "key23": "5gwwWdSQpX4aRkZTsFBFFFVk2Kc1x9CbAk4ogaBKXVFiY2nLpZXbafez7zybXKoqb3y34yPiJwEYmf3eqhi5hw5J",
  "key24": "2KfDnuSeSJCVuYRk7dKga7RTx5QSL3Lf4WD2cYVwXgN5zSR6UVUSk3ZAKQoK5Au8hay5FiF6yvWm7ESrMrhyndon",
  "key25": "5G3CK788AtNU2sVZSN4e6K2fovk4qAJqMGM9qrJkAASLXrLFNxjBjz3SiJ1jE1Zkb6phZDceK1gGJNMmdbJvXHYa",
  "key26": "4WyEnDN2KqqSNdwDfVrhVxiYUEdVYfATYsDE8rUTaehzeuFHFJGKWqbAm6D5b1SBmf3uCacz4RavdbU4xtg7EZTt",
  "key27": "oECguR7HjF8JexM4uC6iFpU6zTAgi7icRttpuzBXGBYLUJvXXixwyuTWmvg3VvL8DNggsutU7EQt4XWfLia4QJo",
  "key28": "4c1xJ41h9sc1ZtMhWsGoTvVDRmZvDj1tuobns3p7ghvhEu4RtdjtW1KC32PAGRhFaoE5dEDze3tn5gDcyCbXSisT",
  "key29": "4126gETGoDFNFRZCFQKXADpjiarngfoeUBQRWbMpgh4SyAoZRFDNsceA6dfoKqQiP89ukdkAPo3MrHHJVXeVL64k",
  "key30": "5TPqnU9ZPxeSpx8riXLEUSSKWdaWDbJHpNeyi5fYmMWEsyoh86Hqrq5vthjFxhiV9A69iUbUwkhGbgeN4ZDmKsAj",
  "key31": "67oze5tYhL183ZSZUJy2wcNPb8BQQ64Qy932ZwzSTT1zpUfym9HDxcVBTBtMHtZ7sfStDVMSr4H9oXBiRC9LkaT7",
  "key32": "2pdY66tYeAJcCfaGBYiaqCuyjsfLSFBzXWDshux6GfUvAdJfFY7fffvQSAn3QzGk36dCXhvinf4BZa5rdNhCUEeN",
  "key33": "4nbK7cG8E7h7Wzr9NGtyduUaxiZ5yhbrp8WUGcriM4nJaVHxFp4PvMyDGBkiP6tg6MJ4ELiGFD4NPsM4qyg5nLmk",
  "key34": "2Dnu14iNjNuY6F2TTBgYPHq1nXR9nvpRUJLzdw2gcZecQ8WLWZgtAm9wum6Mu5NtWnqCsXStFsWPRCzLCvmxb37y",
  "key35": "3QbxrfZcB5HipwU9Zytnd9Hz2GAbNvRRuogyP4irzzqz6amDrBG4rrtB89CR33kdWirkkWakoDLWNKx46mTiHRDk",
  "key36": "5GW1awmWGSqL5MDY7NRb6Qqw14spDVK6qGDz61PYCmomeagG571KGdwYetams1S3jyQ2PgiWSXEeic8cmFxwH1oc",
  "key37": "5PraHcr8v1oYprNX2ZySfAYN1KCGYtCxb45sZrsUhePZDqEwfbuue4YAisSHh4sZWZCnR3HeQ2jpritzoAMjfzW1",
  "key38": "ZXqcQhkHeRAk84EJmXyFYn9M9Xvx727o1ZvTjam7X9Qqp4YeMmuGtgK9EuDcKLC9kFEbzk3yxQjDwCdGvF7Bcwq",
  "key39": "BzC99pUXS89CyKRkxxWWgvvkWWQ2Kz3UBHa8NigcpSpfkHgFKeyfujJczkQfUod4Q244ySJLdQGQhrdZd6P6uXo",
  "key40": "31iGqScRZv5vb5SH28XbL8buBNPourLmvetXKZNQxr2Q4CxpuZaRtH6fPGueedtwScXp6EWjNNVkt9437uYzHNCK",
  "key41": "5dMesnKKxgct3sSd9U3vQECWRrtumLigzA7uCk4UqtecHrB5CfWREbJYHYr4Xq95UCUFh2ohLndpjQJW5BG7coaQ"
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
