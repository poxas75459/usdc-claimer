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
    "jeMzpMioEL9wFh6xousbnggNsd2ApfRUa13igD24zpJTT6qNPyeSab971JxpgjLbmPD52BWavw3p7F6Tx4v8XRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KPa6MMm2vAFuq9zbqt3hXhj7kYV42Us22eNMrJNJrVbpFYqaH7M8mwSRfHYYQjHUFpN5GM9c8LpcK1DbnsPzzW",
  "key1": "3QhPJ4pAbjrad4c3TgQYosMCJYR6f3wXLRvqiQytYfR18yhpyow39vN7quq7YvjZwe4vxbXRoyEvg4QyjwxWF1ny",
  "key2": "KJnWDBM4YWgveRasgViuLKqRbjETckfRSnY5AfggXHauLWvCqAXiAaJQwJtHGRwKJLPYSNBoS8UatQtoxNPzMQR",
  "key3": "34Sz1KW43HrRa5h39bAAnZtkouKub9YFNZL5K8SLJqoDiXhEoD7h9tKumr8u6dNtsFKfZuEyjLpcV2e4tffumrPn",
  "key4": "56F9ShWeH3Cgykmw3AYBruYLSduDuF64QHduo5FxERdpyMQn4z7kPSJ1ESfci5HZKDianZHc2vxCoB2fdrh9EbBm",
  "key5": "5qD3zY5AhEMpbd6FXBsZnf9W8PY4dRfqW7EyCE66GeAY1rXanucgEHbwfjSPzaBxkHyZVibL1xQ1vQusVivBkMCg",
  "key6": "2B1jvV49AebEmycALu5yUM6VCRKhhitjobCQFUzNf14TEfZMGgfu52xt8XKuqJhLtnyhDQdUG8LcAt38ZdwzxtDi",
  "key7": "5goe2pQSsgawy9xVVMLoehopfPqdG8aapbir6SoepWzJoyu7dQUHF937DLEey8eAZQtbeyjxhe36PMaLyA4WA6Yc",
  "key8": "3qcYWfjR83r7PuTTATiocMFJNrazaPhcvRrWGzcYnwrKo9cQomovW67Raiv2rwMdmDmdoV2jqGNkMSPzZ78HtCR7",
  "key9": "M1E9ZczAcwFgjbp4Aj29igu3jizUqUQoUueCEi8mDVjLigFGaKWoBxzT6tYYxVUhuTupScButq7riLRs1BoxcxU",
  "key10": "645rRGHTHm4E1PSmEYZKaNX2PLjSAZAbprVxMDYRNF16nG73VewTQinn76uBXJZ3rQZsvWZYRSCybJffrrybkD1A",
  "key11": "2MzP1n8f81ZyBg2gWa8MVpEXLEnKtgtvUtzMetMV6NboPPfikJhXpR9gUogb1jZmtzdojqw9fn5gz6uTFJaJqGvE",
  "key12": "2u9s9Mo8BnRTiZ336QJtNZJXnkRHgKdHZ26CRKoLzHdshFJfNHxYrvqrpLrvGrJ5qT2Fq59PjnNKKzYjmkvgacJe",
  "key13": "2XVWKeEUzPpBLZbKvz3JWjkwfzudSMJTECTFAVwQ4nEaY674k2k9Ze1RNerZ9bDfBQiMz8NKjMsw8BrsWR9sSuHi",
  "key14": "3D8qiqXgWKzygoBVMtHkZXmTR9Sn4tUxQD6FJmMDMt3TCnZmCFxD6oReL7W5PE8u7RNKJBdL1sTCRQnYJZE6GeUk",
  "key15": "PUejhDLQzKbqAYGBk5i9U4pc7rQa5ZjvA4Ao6RWEhhvYPi9CxAhYoY3ZTd2cYsG8q6h5Fth6CrNhckyosp2f3x3",
  "key16": "yPVjRKH5wogfkbWvqXvrJXAYU7AwnTCRhTcFV3WEnSHUA4rTkgCE9LRRjUzLvgSGeRMBFY712vH85vPHdoJsoU3",
  "key17": "n3vwLd2umE1X2KtJ5eCo8MQtsUJ5Cf11yQxCGmzx4QRxDJPaMBUcmXtPpsgPNzkdL24SztDLpW663D6Rc9j1eLn",
  "key18": "21pTeYqpBhLYDAT6YTgqXBKjR8xVfdUZsBt36sDXhfrBhukrhKb31H5iBTvPn1xJWrZRBdXb2ZugTLt8b5Rjj7jj",
  "key19": "4s6FCc6t6X9LKDzmWgVW5PaB6UEsAfNxQtbKqHGrRwjVVuAhjbLu6S1uyapq4tbWyWZtn1rcmLmcR1L8oyRSBS9o",
  "key20": "3LiHGMMPMkp7HdN8YVnQVSJMx5Z7tfsG5252EhRwk8ekyPQGxEmYeLX7NXGJjSLYM1qn8Hri8ZV81fY66UMn4Zqd",
  "key21": "2Wv5zDU2MEDdJY6HXZtyypt3zeoDBDbFjRqDfN1HKNCX46h69Kn4FU7qPPrtc52LzDaqr6msDVUTSvPjs9je7Ws7",
  "key22": "3rFscbE52VzFbEs5KFnvsQAhE7W5T7r1GeHHdZoioa7Roaj4uFN9ZxCGrhhbtbsWW6vGbjMQmmEFQJgdj1p1ydoj",
  "key23": "2eaaY4vk31AdU8KNMEUq6QWg6QyTt7cvCiXdzDsqcYmV57cvvvdJG4pXn2eJvR6yP3UhtzdrwnybuuxRVPoPMDdT",
  "key24": "2y31RNY5jdC975pX2ua56jGz8kxq85sPfeuKcmrFpDgS2kQq1NKKAvev8ncZd1EEEZMo6yvxudZWMDa2C8kgTQjw",
  "key25": "5dej2Vkk5vsPsiFZ6jran415pfPsWHNjxaw2LDaDmooRZErLmQmyb4xjK4a9gG2ioKU7UC6QMEWh2fHpdH1tnqy",
  "key26": "3ctBf9DHtfPmmMQRTLXd841wjCaEKiaM2Ao5ErXRgquErVGWqNBgAsTPdi28AQfNuCxse4ybtNTw6kHUirF8kxPM",
  "key27": "2V4LD5utpNKoS5vuDfBRcfWccNH1a75pTfgniZnh5iC82L3hMap5aM1hc94iYEiUSAwrFYFMibBao21guF68d3py",
  "key28": "47hNby3925ShqkzdPkCfFcUyk1L2iAiyyaJUQu1EpBPx7wd2mpYNSaYtrtf8rLBbL8dmRQVK5WT2wKeeNGa9vEiA",
  "key29": "4JHakoxLf66rfQQMCN5yGvJxxtN1xVNjRWzBmSMCeSfgig6XxKcLR3DfGsw2xR2ZZ4Tkt7GQBg59iHND4TFQGxBc",
  "key30": "3w3SewjR2yGtq7j73YLHaPSvWPnPWggav2ZGRTyhYZERuywMZWMynKGP9BMGrcpCuYHGhsuN6dbcdTzLH6amScmZ",
  "key31": "5Hab1nxrkVem39YnngKozn2jYUqiQG2s56ZZFKkMwxeadAqaaXfwp7ejnkJzNUfEAMcMHdq1qP3cTVSZJjR8oHCM"
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
