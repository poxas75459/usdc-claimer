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
    "4EgShVbTcKjg6QFCSCnomS3voZxiHLQpnt8tqP9cCu78KcpG2FugueF9ZWM1sPbNE2MUNq5mshTcqyYL8jRdDKev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hAydxLbdj2PWn454yBFSubygWnVYZ4kBUxfb3KhiTYewdV6mGDBiPjxYx9brwMD8kZyc6C8W2S4JSCbBPp4vBK",
  "key1": "3Qz1J1E2DZqomQfSgoE2KtCwrXEkxxw1Tb6T7N7M2sLAQtNu9KgpgKYULxDzLBDySxEXQj7WGJambmtDDwDs4YSY",
  "key2": "5tVoZ9CDfeDz85utvAnSSMzDJDUEN6XDn3xXZTWysLeqp7ghK5J73JDpRa84nKBcsBerqd14RXSaQXRPXzpN17aU",
  "key3": "5qiARRTEjYsNw7dY5Hc4yiX3NeKKJ4CAkinffmPFa4wZ8T1jQVqdXdNk8tj5CueX53qxyzAUfpaKEZQKtcaxpc2g",
  "key4": "2Fd9gezBwqUBkK1eiyTyGzFJKJVeJmbxwcbqbBKKbSLcatcP5QCfcHanVZkb5Co6o5W3RgkLJrcTwSrStRXz86e7",
  "key5": "62eTvF2k6EbknUCHFKQkYT3UVUL1JiR6zUuyqKKygtUSeCfR61dLgQQbrEy7b5vQQ1bkrcHPX6wNALX8dqd3QGp6",
  "key6": "62FK5jvHMrHk9pGs7hWXvxDYE2Tp71zqBcqomhvXaZPjyS2fZXAtA1nyB8EcDDafL2o9sLqZztyB5yoDnLQXCMKV",
  "key7": "5YXf8HjHiez2hk9AzKTuvHCjFT44YRFYnNkdCVZfPHNhyccZkQjAZh4gvhJt1NsXcpezKHkbLzb5HhuNTgdo4LYX",
  "key8": "Wscy7TREMTZfkpD7B8Mnnr91FZWLBXjXxWgCVpLfr6YrEmRMU2wDhRH6aH1iZt61nja1BMdkTR1h62u9sXDVywd",
  "key9": "wVcDtejvW1zSLfSr4Mf8RMpRUfdSLtPAELZz32b2kkN4fXGDLg4M55XxbE8tXiq2GSFhwKcNNPRSpBWUk3duZot",
  "key10": "27bp8Ad6Zvts8WgxvkEKuxWXUJVhabwYTnM3LxD96f6VGNyoGE8KjNhYNPYjrVafcoPZBVCB3mmTTcGyjFAaZhYf",
  "key11": "3V2NVEFWcYDPFtp9LSrvQrPCBpFNtQEbzCVTS3ti7NkmJ8RcC8Xj2koNtXs3r2LEYg6PTJoxJGgyTaPTHqdyUdNo",
  "key12": "WZpv6b6mQgG633avqpmwX8mtwg2PRopXWEG2z9JuzGpawZvXPVgQQgm84x2LwpYURhGMN1pf2ctcVCSqdKLCvGQ",
  "key13": "4qycCHwC1ti6LBw7TbgoepDioUoY1goGJbABLKvmzMSrhrct5V6BcUgNutUZiiEfdT36jXgqWoJ24TwXSKm1yA4z",
  "key14": "dNmfnmtmA2BEwy4Ayyr1CqVh7VyAss9YtUJeSZAY4PnxgjYimwWAX1NrkN4JVBBvaSiwBt1BSGe5EYG8DCtJddx",
  "key15": "3iZDtcKfL5ku3UysXUttMjbs3ZDmPSuRkm8XZK8khng3uacKZy5LitsSstb2LpeYBrK6xVFcUCMMDaLXyrxaTHbo",
  "key16": "1B5dwvseyyJS27PATgUjyFWoJWFbkLqoBq1UYUZ5GCTKxBRqnZ5bbaA8S1iGvPEStNpA4U8Nf7YH2dWQXoMLMCx",
  "key17": "57wed5MoV74rHegRtKpY74oZ21VKVpFeGJXTkeuiANud4bMxUCPYVM1dquz7tpwhP8ykNmNtbPAtGUqZVwzPRFgB",
  "key18": "23GuTCMMpy4tHfaXa47aNHqApC4F3uiEuwPRXqdcqKBLC7jK5MX8mkqCsApDYrWFKKapAbyHnMw3KvqK7Nsg3nHj",
  "key19": "5GD4z7XP5K9WzT5C6Cnv71FdqbTK4jDb59NzS5h61ZTHXKjbzJduQ9WgJNYJvcZtLWXY8N2y8PcLsCT3UxTyuFE2",
  "key20": "3YSykccCQvoqKj3zs4Y8xtNiLn51mCg6ohRsXYHU9LWSNFtdihyBw4mizNAtVyQLxTvUhevR8jg9KGEyXmY5amRU",
  "key21": "3kG3BqwriZbcfNRm6MZ6th3AnNkomLqKYSxE9MDD7PuFGBh48h8JPh5LF1MxVi2pePrLb7s8QVniN99sUR8htHUg",
  "key22": "aQfKhp6Cf6WGdqMhMa93FAUgaMXBXQSDRXY7msPWxMt3odsCQD5ZZhnXp9ygzLNBRXYYCujGWv6xbTRpQqAUTbo",
  "key23": "5GKS6LkTKnJQJBW9ct1KGCujFq89nG2JZt1DZRuDhzvhptebwWfLhfQMaLp4bsHxs5LCRGomBBiJgMnwvj9pFno6",
  "key24": "7fDvoikLJJSGfGgxJCtr1MeQktLKNr31MzR8F5yfLnbMQUojHkVMEvR4MyhR4JwLChhjU9m81hh8xq8YamF9y59",
  "key25": "4SKPrauUtohq23xMzktrfu99ga22GwZk83zmFvXichm32AyBS7CVmcd7k3h6uXs1TzRQPckdDwesdHoncevkfh8c",
  "key26": "5LPhvyVP3Vac1FW2MPz6TpfdRfoQvi7QceKiGpAk6wfJFqJJ8zNUm5MyiWDJLcGw8vibD6Kr6RfuC32NTXzieMER",
  "key27": "38rQpEqX2UxfavHhdwHQAfJmr93FZA6wgQ1amqmrwuN2tzbTCSNx6TTtsXzYfrrcqrkFa54KRbgJL13txS5LWCPB",
  "key28": "6HGdwo6g4FuN5xsaVyxKxb7PpTH3N3dYjq89cWdJzJdUMVfL1k9mimhTXCkeFoekU3GJ95uNmzWo9aXkc6DFSn2",
  "key29": "5JD3SGiKCWDtMrwSn8F4sTRLiG1rKQpFFs9iRadicMMcMR1L7qgfVDe2HHHYCUnSokznPng6jKA1BSuxiSmS6ivp",
  "key30": "4qKq32k6khoWdBr9FURYJyGfQP19GzwyNi6FhD1YPcqxAPcdbtwLLH8pBo1AwG6Qja5c1PVp6ZfnTBT8JEEJTCQM",
  "key31": "LBoKnBkePY1wYEV8je1Bd81wwaX9cNa21w8mWJcLkrwCewSjQKHChgii265EczUbvhCehYAr2agV1R2K6bwxDzu",
  "key32": "4hjVDZWcJ34BZBe6AW1VyogC63CvpuCUtbNsEy6AfeSqziq2E5R2sMYFkav8EtSPbC1QrBg83RMGbcELureKoq4c",
  "key33": "33mopfo4RkWG1LoFpAVwrhdnCykN7ajc4Ck5wNzDHh5esykVuakD3X2NnGUEQzh2gXc5hUcNXnucKa8meTDKojay",
  "key34": "5UPq1F72PbUkLFHGaqrGzjATRBMUQwq7wctZC5PE31YhdxpEA5dR3PrmxJQznYcfq79aNmWWbNyENEzx5e6ggcDR",
  "key35": "5zFoaNeG8Pn3nVwVgDnzY3Kx2Tkv5pQadB3Mr5u7JMkh6B3UWvD7X7e81h2VETF9bdEXWKU5u6a23M4LiNidu9dy",
  "key36": "4wUSzZcuDLdXoP67oiLkYkx82ytM4mR2WjZbAAPEo3sBxJMgDtnBo1mpxDSHVgditqB6fPstfbQboExiYbxdsanA",
  "key37": "2sRAqCBnUdA5SiAK4EiTuXDGqMSj1We5oPMaSxABiyhfBTKZZ1xMnsAa8zW3EWnNoCRXwfJHhPWiQs2SSYCFpJLA",
  "key38": "AoXpojALsNFhaTVjD7ZQBynBmhTMAiQhnhusWc4UURFjjCEDqtgqrvn9UNhgYwznZqjsLKw9s9BzvkC1f1jPWLe"
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
