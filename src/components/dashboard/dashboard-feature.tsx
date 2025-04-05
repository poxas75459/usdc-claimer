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
    "3cK85dVfmbvhs8HvP9vjiCdW5T7z27Gn68rZ9rFuAKsbvwEbkkUoYmRcFFkAagB7zc9SLGK7PBPGuqVw7L3chqat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WeE9ZhicgXSf3pYnaj1vcTvNnXAhh1fagLNvQ1ow4BM6v1NMqjrq7DbLvwQqRHQsj1iPwT9W9HfAatToHtGEMx",
  "key1": "48yeaqPiYRmkWHEotkR8CmGzM5NpzgppgbkEbmSv8HtmT5cAXFrteHbbB8hT8QvzotHupj5pjQea5ZsR7efs5Nhh",
  "key2": "2tmxB1RvhFbtrD9XXLH6iWWWeuY7xH9Mm9FT2VC5tWfFBGp3NeXfSVCK5YYbCvxDgagWwTcFbh5s4hAnriodnpCi",
  "key3": "3tYTvMEt1NBDj4ZjUEMdVzQh7UaAkz8pfU7xniAvcgXS7LEkRP5KVB5Nej941AWRhJMj7TKM9Bc93E4REzSpZWck",
  "key4": "5y23GFfvSG59VVeWYskN9rqeLnpm2pUPNsnK6BvkRRfc45uyXctLzwqdiWw5AeXbmLQ2C12sEgCHthZLoWPk6YsG",
  "key5": "5VWKaEraoziZk86onZmHQTZF6AaKhSiJDnEwGaQ4GTSLBcKNMzPp11q6AgUaGzuvDEzxA8R5Lt1Qt4hsmx2u7JHh",
  "key6": "sQsu6ZffKMmoR1qehsqFq1D2jPRXvSoAJ19WvS5NgPkA91fuUd3wLFPApUycTCJSSLV1L3yCZ3qTnWRjwfRTA2k",
  "key7": "2sFmM1CvmzFQMHRK643g4y4hEutDJAh8mFjxQocfuDhHt38r48bbvPCdTvKhF6doUtBziQGezLExyjB849KyNU41",
  "key8": "4hnnUT227w7J3yyGvCqZH8Gq8xjAZS2H57a48ac6E9LmMSKd6vzWZyH8ftETyCpWxnETnPBzSzmh4gD6EvVrznu5",
  "key9": "2Ts4YysL4q79awNcxVxqHTuwPy2DXDuZZ9MGrcoLuBtrcwQDcv6bXZpG7e1VLwAkrJTbMmeK9q6eUofbJquikwLt",
  "key10": "5g7jJJKWa3SdYreuWf8oyVfMJ25pziRDYXrrdQxxPSLptV8t1ZFUiefPo7x6SV3pYyDUdsLimdh4jN6stQ5H1Yqx",
  "key11": "PQQMoxy9zQ798VJdn1D6cd5raUbV3RkdP52vKAX7bdH9LEa2pXQVD6BBFHe4WLLNFyn3kQJRUM1SZtft9EKmsnn",
  "key12": "wJF28fA2H9iuDtvqcEmExnZm1gkMzWE5eN4zTocFX8yjqgyku2pSFHzt8QMbVeo8JyyEwDJFKRmr6f3tb9bk2vT",
  "key13": "3kpiDvCfpdnzUZN6TFX4ZWuQ8NLiqF1XhQdwzE4zeHgcr5ryda53HAUqqF7BoNdZQSN7Sizk86Z9rYcFpfFrtuNH",
  "key14": "4SucMqUiCgYcUuU5v45rscW97eziPz5253DQV9nAy1p6TVPJjjmjin273GNrfWVqnPUCo2U69zFVAEfEoQFt1Rf5",
  "key15": "5MKkVzKxbooou9yVhm6VYQc2CnXbg1RMCmVNsgcnR4yYNPW1HTrdKTVMNC6c3WBeUW2DD38voQvxbJ6jyxZWdnQU",
  "key16": "2JWpydhJczqn9W5MwqszDLMKvzX7hCGh8jseyGnjkGzDCH1WdqZph6iwFPHLbyydmNoLsoSa7JaRovs22BnAD56R",
  "key17": "5xMrrZfjpC9U14ViKphVVwB3LaQ14CkUzSr9hpC5y7ex244cyYFfiX9GT2ikUu5mT4s7rzTFqeJfWpdQZ2HwDTEk",
  "key18": "PPAXhf3FDVq9KuZ2bLBiQNWtGvcXuW1Q9HNo5RZMZorTHWnH2iZaS2v4LZq9maGiFKdrh8aojXTQbkC5vrAmeZQ",
  "key19": "kVShSin4MEoY2quR2n6ge3cnqWo65H3ukBJyVELHQqKuntzUBmVUVHm1dgPopJCVz38GM4umuYTHf9RZJGmDMrn",
  "key20": "4Rnjwuwb9E3XV9sZdcsgEzds85ngpue7nXXAApodxM9HXT24ptZKrwYwHbaHi34aFtzsYYK6k8gfrthbgrRDH7A6",
  "key21": "2p5xnuPHDPg9DBcJ28rhUbbkCW7TYiGSfuMskikNQNZUXp36frrRv7svdPh2XDGBrSXExNZzwxKTH8triVCNTr7i",
  "key22": "4CPqLuPtwuzsyy3HEKZGpwyRYU3e4m7yEygSVXPF9CbEDvV1nP41oJbEhjLJjQKMrG3arJNmXJxSoRJ8sZMcRJ3f",
  "key23": "5p5GiqLQrL3K4iQjisbDN3pDGqcu5eoDBQzwjyGK48gTw1XunHVRJXXTsBSdn6M27N7gTGDtPwUKZRi8FfGzU9Xa",
  "key24": "2cjwzf9peE2141G3aoMThK2pnYtTB86hJeYNXG8xBDtW1icD3QXPtXpcShsvYBMqHy9W4hWPWwPNzDQA9JuYfT7f",
  "key25": "5crfzwVLiWMGakkosZH9qzfTZfwmUxHK2Yjkb5kC7v7FbADRZ6XFfe92kYKhCN3WAvTkpepGj6os2PiYQcph43Ra",
  "key26": "5KCsuJsEXNojyfuJkNe74Pd1wCqtZu2B5fmiLTbYNkcGGRnHH5UWySbJou69aqPvFq4nt3fTUFJzpGtW1bDHpHvg",
  "key27": "NMzD9N34Wwhv4LHSxFh6LEz7HUzhctEWvQ6uFm7GWC9DH4BSYiusdsetJy1tU2M3rwXGhz9vjKaGFgkBeBvvfCD",
  "key28": "49kMQQ5ycDcyUJxMTG11TVMVbY7JANhPZ2DeF7WaU1kpb75zgcmJmtBVWvyLBcr75dDZoN24hwdkFnaMy9PTCG2E"
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
