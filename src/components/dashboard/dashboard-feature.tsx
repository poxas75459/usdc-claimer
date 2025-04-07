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
    "3ERaexLY5vivNZGWpuSCYnQaDqKExGUDZYd22hDF9AZKBZadtBPrc5tC8Zwt45RiYVUUkiKJeiMfQzVDKMCg4UWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MVPpAEYPisMsGe7YuAs2yt7d9XLsJiaq4dWw3V2BFjLQtQ37JsMpcJHUvKzMd5cay5G3PtYgfTkGs2vAAEn3rV",
  "key1": "2JLbtCURNMwM1HG9aCbeySWwvPosdx2aH1bEySkordq1KFKB33EGqrJ21GcjX45ZhAKYur4FEh4BthpiFt5PRVUV",
  "key2": "4Stm88ngpQ4Ep4bXicN8zJSnQ1Y1t7kHRv6MaJPPS8gQo2F65Niwj78q1ZbrH9PUQtK2QTA1bGnqrUDaqJUJRmWP",
  "key3": "5QbaRi5HTT4buzXQiWBoJ7ANY165JFqFM7UC9DTn8Vk34KsV8ye6kjYdPDuRcKsDuqR1BTKyZCMB6vm9LKmjLDxn",
  "key4": "3oa3435MFGLEtrt3DF6uepSCgFZFnZiU3apT7jG84m7utEWTojmmWsGqMUBVqnNLF3hqyEtt8WreWTPsQVePcyjA",
  "key5": "4LqVeCWfoyCEY2AXA8dHqwsHfYyZVT1Vs7e8jGnCHj9QagDh8KDfjc5MonCfZjXf1u2RUi9AJib4pTcQqWbaNNqu",
  "key6": "4FVhAV8XikrFNszRCm6zQsGBKfy6wwjVxgyx36AB6aZFwiSuWWMZmswtD2hfebDYnPxLNGXHAwpoxfvYqmRbBwuh",
  "key7": "5oCcKJmCcLUZyP9b97XRdz1vapbn34z1DCKzmcWJpPBEYKw9V4AGHPCdU7vmkcv227MSqzPohKCJ2zygyhBVMHGo",
  "key8": "5KGp7omsn3F8G8MZ9Ad7qE4EK5inEM19HRz21JsZLy8ZJQsP45ZpqL5XH8tX794rnoDuhV5eXyFxgq1jwfCiHHbo",
  "key9": "R1urACCTzcEhGMqxMQhJiwCHiyiY3obvy5hZPCNaojoEt7rkwcPmBHnCE6qekPc4t2cqVTXkKe9sq4ifEcLZFnG",
  "key10": "4TZGt3MKqzMHs1g621s8A1dRzb9AjVaJMSBzX88Y7iAo4nyzkcStz4DNkxu8a9v1rLdHpyrciZLFu9jLY2nT5NHT",
  "key11": "5asE7V7vaXuBKigFurLMPskRYcX4oyZHpD9f9Y56FC6C2CzPKpVdBTyiSeP25mJ42x3pUb8z9t5qRqLQTJ2bGp7Z",
  "key12": "2HwD5ftDAbtAhk4MNeXTVey5HU3EhrUmqBCUASiKuJJzifWGM9zETptmMsLP3C1AaMX7iuKuPpTNYGZWuTh5q7rk",
  "key13": "2Yw4yyjsSQvAjzEDVbgEuK54v5QcQw2t6ujzLLayFKc2bvp8cRwSugxpXCTRiwHeK36ZkL8s8W5tQnZk1uucP7Ko",
  "key14": "5ZX9D2AooVGhziUB2Uc11kkTJq23ZAWzcZuVxfytnyZaj49NmXTF2ssqwVAKYt57UgmSHReixbgvPuwndMZ1VKWB",
  "key15": "5az8kJkt1TnmGDiDcswCBC88LTPnLgCL3ATiZEf34TAcsxD6pGVS4ziFYHtBz8DVGreqDn1LQEfUV3eoA2c5GhWG",
  "key16": "5rEsdQbrS14AKgn8T34csAgHcLCpXaPbefZhzxuWBMcatYjnSSW8kY8K9CefTSeGMQCH8kMYVMjGbJGA8QZrM2Yk",
  "key17": "oPTrQ1EFPgS38Go692iE7KbFBgDyEigFKC7PNCh3pntYk1cknShGzUvr7MRtzpPpGLxv29J8efwACPddjXodYF6",
  "key18": "4PFnTq594byyV9qPV8FykzS7Xw87LBg7xkSCqythYGrM3ea9WpJhN7BLhzTBRj5TotovBE2KAnvW9iLo8FoSazNE",
  "key19": "2LwUA7qyMShAJXPEyRBKfnE1CHYR1TdkQXMJDNd39dPVm1Bzu7NAXZ92pmrG1vJcutjP6Luiyiyv6kUDA6ryjoYz",
  "key20": "24hb1hmLyEs2aNHavZXtiz7Z8JByanTX3QwYXT1LZrQ8QvgcFisfYdQYNqf2xN77eJAk8C7pUPrLDCa3QUg2J51p",
  "key21": "3Gh81GASz8QfkCfD1isZxb6673TDMJaUeUr1VJ1AbsHFToc3CtdYrBKFQbvkPSfr1qDJLXhyB7KKLrTLWAFfeouL",
  "key22": "5s3mxgYGNo5WGxPiGrrETDmdHUcTGpQPp1THtpcu6keeZKu7FTfdAj5YrqnwynqcGPPvJkBeHCo1Ujbq78DhMr7Z",
  "key23": "2aq5hFQSJczkZsHE6ikydy1E1kdhdWGkWhHHq3UkJfYkE2vQryAXBW6q3bCB1zh5N1zoNUnroEvQ7yEKhAHJUucY",
  "key24": "yHegGYMQ9MuAz6EMHqFVhQGd5NRjRtaKGVYqYJQDtLggbTkLgh6T3QubdjxJwHjA5UszjmC4VszxVSyUGTPLDH4",
  "key25": "45xESzzoNV6VvLWtGEAw74kb8cPf4EEfd1U1EHa9GGqYAu3oC4p1SqHwb9M26YuHfAYuhguzH6ebV79Nh3HmmdoA",
  "key26": "4fKFmfzvE7uMdcDSDwuhm5QXV8STDyiJ4nUp9ithWNo56fqT2WtdGMAx6rHkJ9uk457LMwNH3WAS6RxB5M4NP6JC",
  "key27": "4zSqLpdSzxXoT8i3ayRFFZq985K1wFNEpDGARwRwZHX7PN2hqBWcKBbEDpgLhweY45TSAGJy8a886q8mgtYmpE4S",
  "key28": "28F1jpw6W26zBGZFn8jt8xtDrGbqoKgJamEjHoVMMe393qtp9VQPJcGx4NT4MSNX73B2oyuJZAEZBBXtjmY6H9Zc",
  "key29": "2Qvn6iQPFKwQozeQfz28NR3WG97adePjnNLGUkBxBDSH772vNooVkWQbp1AzRx4yjasXYBAUmJgeZ3v85g2THdBC",
  "key30": "4GaThu1kU82R478euTNn1tjtGdaQr2VJXKoDYp5xkuXiE71knwFxrtgJputXSabWNExdPZoyPexfPDycCUGkAqA9",
  "key31": "3dabeqKybzkRw4cFqjjg2pYeJRFPch9e4vSPgFhKUJhZbYr6LuWyM93qxG6WTJjmgzjxKC7VHrXtdQzKfHrp9yPq"
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
