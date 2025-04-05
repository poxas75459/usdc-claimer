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
    "2ocE2G8NDjy5CJK1jBcUFXhcS6dqtToqpAXPmWJecCRR9d2tpSHDBYsvoDpGyaYUNcAaNAFfb7bLpYAjnuMm2u73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFTSyLpsVcQB8aKLdziov3S3qkMLyqd4ja1YKmSkkyEkhDgTSqo1uAYpqa4shZrhc2poXq7naUDaGwqqg996GaU",
  "key1": "3RfmcmRwpW4kuLSX6XCVj3JLTJvKd5GRr6uqMHYDuk5TnnKWhbraJAicawVkjJzbFaZx7DU9ANby7rCXFcbecT7t",
  "key2": "3TdyLj1aN9u8b6eby6k4yoBDq86FG393VcE1WrLrKTXxyvCumtQp3F1sXcNmv9JFxZk1QNQCzruudusw6gSqPyxJ",
  "key3": "4Sbrt5kES72V886VjvAyxqVcPXP4pSZrz1BhRSARDr55S71HLYc8Dgc4hvXugGWQuybNukYJfp7u1BjYRGjKCC5L",
  "key4": "4dHBfJdSGne4JL2Svt31XhPfJTAhGYoDU66Vw5hSSeNkRMc7e27zPucEP5Jhb74B5Xy4WC6B6GyWCn6UCbnqTUQ",
  "key5": "3rHuUjb7vJtUbr173cHNtGEf8rnVUHrnL1NBfk6uKZ83GL8VCZEauYFTiyzSyLBMLZLNttyinqoEtDcczNvjLZeq",
  "key6": "2Xo6WxKVCrQFWJupNNHB1hNTLBSS1BQiELmmFqxcS2kSv91QMQr5Q43aD9hZ9FWzkk6gRFkbkjGAwLNoiiPzTd9D",
  "key7": "2JgzpmLGUnLMvRoRdRLRPzhNbiKCgSuktudvCXq1AyBu6j2TwQPEw9DfvG1eTZiJqu3CcXXeUnUipEhFRqYviQx2",
  "key8": "2jfGnzd1zvZ2fiReKeFdK4Z2QDBsTqaKmyTzme41jQKJr2UPMnuZpDDxwnetxeTgdc4EnzWofFUEWpbBYxcsNeem",
  "key9": "7xeHvCdJ1226Ei3L7JoMCXthvm4QqxJbk9HA28GJ7bVcaYQpnWqkj6jw1ZxtUCg1DDeapJwH1c64fdt557sSavV",
  "key10": "5L47B1ZSGxtra4F6nNZVpLepSyEpEEVx7za5oHY1oFzVh6tizGt62YZVj4mitRemY2PZvZDHdRiESP186uxtijVS",
  "key11": "5ndf8W4ApLu1kSAHL3mTVZ7imFGCcCDFh9os4nezjcPNbGHFv3AePRGtw2fnDEY4U3HkqVJ2D475ZLdNPaDthHQb",
  "key12": "2mbYGnMTmUB9sTM9Qz5qea7NH3axMng31RDfAwYhrKKwVQ7zKjfHRp23TxLDiLS9GyfwVREVk34F7S1KK2gwyhi1",
  "key13": "2DqWnb9FyAUYoytdoKbKzVRPYK3KxNfNF1S1kDUe5daXAuvyXbJGnrGzjagw48N68crLTUr79jQ8aPs7gAPKfJv7",
  "key14": "2uJDzQuVYJZ6VPqsZKjKyaNE947BHZbnUoE12GasY865F7B4sNiGCDvjPThE4sxYKtE6SxbpLy1b3fNVZ1hf3NLf",
  "key15": "2CgqVZ2MGtxkXxqN8C8kWfzkaeQjERtnKMMU5Zn9wFVM1q3vY7sHF8afekyjvLvMWD32D7QCLZfRhMQVGZKC4Cmt",
  "key16": "Y83QWechyYTHDdZXzVvBejThLkptRWFhH2tZtTat7h53UaeoB9xmCmEdxSPHCtC6fYLE4wNe99rqPs9WfBMxzhp",
  "key17": "4FDN62JPV2wE1MUotjMkNhogy4TfCir8mY6J6JDFM3VR5TTMkAviPUvG3PU1EVjNVDNfP6VHs1u3VSpvN1JVWVMM",
  "key18": "662jkmMDpkwSZpXUWDiD7SY6AkJ7MYWQPNa9aHqokcM1e6cjwcUM7psMsFP1QbsgE8oXR6aGfDs8gz6KjhFW9ZoQ",
  "key19": "2AcEwU2VniboJjYHpU7ybk3vCEmWKhfBV9WRK87NTaSAyoS7JzpeeBQgfSZHS54tFe6kkkfZwV9maSqxdJdSvHZ3",
  "key20": "2v6zuCiXwoVHru2fdWALD29zcphFLoFovAjp3zNM2igsgHMZuKAY4F4XMUqipCPkpjoo9DQf7JGU1ZNF6PMrsn9v",
  "key21": "3qqkqQ2x5Qo8ZRtHVvtZY5tawEPm888DiTwpZ21ai3NFsXyrqQiX2Whp9Fh1WjFcfJDj9uFJPRi2aCWSYMCfUQhJ",
  "key22": "4dYjZjWjh2nXSmVcdnBFdMH7DverhTNFtSbwnoh3WGT3spAsjrjfjemhVyXQYfdE9NKgWBquVYDLczAbMomtydXV",
  "key23": "4YoPK9vnch4Ps8e2ucp5rTxhAjVSf9sPp67f8UXCXK9BuVorHRUUNtbd3KNVhRHRWQvw2KRPq4MaowQ1R4D3XqKw",
  "key24": "4ycER5dKBmqXeWeENyb3AyeQQviY3UU9YpB2Pc9WDf9cutentjq6BfAe9gLjckbZY6BdckT97uxvps3xtGEZSfqQ",
  "key25": "5fdVLRgy48Z6Wsrm6697dTVLZdqFd9N5CMtp5JjueKJFAqJVqzNeSEB5GSPuZvSaZpxNn7PtzBG1uHpW8yUrkXpB",
  "key26": "5szS435hGJEdpHyuLnY7bh8aA3FjGSGwVugrKMQ1KQ3dd4AmUqjopwYkX48mmb5Y9xMvStoYNA9NsTKYG7FxkN4"
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
