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
    "3qfVquAsia4rqHMB7c3StnkHYMTkUwRZJFCTfTH4UMPFCzBqaJh2fYFHreAZ19Mrt6MtmvgpnA5cv23AGFuusVhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtx2dxV1pxjKAzc5knFCXSy9vdhCfivqHVWxK1FGZEo3syoG8ADB2U5evwLvbZzkh6aXFFPL76REziCTUBvnUQF",
  "key1": "4txkaBK5GqY9pGupC2j78wJno2buAkVBzXRozjkP2snqKYWE5PzCLxZgaRy4ioXxunHqThUHUfwar9SuonZGqQrN",
  "key2": "4dRYwr8kCsg6XNWQqxQsSqZBdrgMMABpNSpkF52d28eRo7omMxbrdKkd5ueAdy2HFLewmXmCWGShgE7X4iB9ryj4",
  "key3": "2Bk8iRDNQZ9HiV3HpFCophgcHosVUXqzr3UdaCezs51zHyotMuCYAeHvmqakDEuLCE8zSda7cKUZEU9fAukrbu4b",
  "key4": "3uP6hUcC3u3sKjk8xrwLrAma1rzD59vtSh8eiVzkTt6FquNcMfnAFdwt8haYeQTSS2jqEzsq3zwQyhfskxqCLejm",
  "key5": "gKrQRZDaQtVi9gvSnSsbBJkZpH1npD9YdPdHMp7aQpNmaCcqsfHTX4GXBXN6mRMToRx3oMzYKvuy7Ciqcvw5YDY",
  "key6": "5waqAiuELPvgSrVknLXeKcPj6BF8oekA1y7QQ2yHMcXXMdgJvBVuJmRtajp78o9kf1UPdrMs78TFBX9hSyMwLoZ9",
  "key7": "5LQrfkodZdFA6YAbQ864NNS7Q2gWKhqutjrC1UvYjSGM3bs2DXCR4fwspVgxvE7gpUWzBkm4UV7V9YSCn3aY18J8",
  "key8": "2oLpYwDoAs6db2Jr8e3rLor6LZuYK4J8MbfCqxQEM6CvxvirA5mFxUQqZ3r1KPsTe3UctVs5NYE8mHShm6aqWwj9",
  "key9": "iKWp2h1BQ5kh1WDk4woNtXG7tLtBfomXfxjJkubjfaoeQm42UhTcmPm9uDVtpktMVjstHFgcjEB1unsroL1Frag",
  "key10": "3sqXeo9RMDqd2w8YTvd2axK9oKtNHw1RsXWZzA4zvQovdWynHzgfadBT8225WRfRBzoUgSmH4YXMH829Munzm6VJ",
  "key11": "22fsq3kGkyeM75CVCbLSXz6j7C59kuswYCAM7sAe87xHnEa1LojQ65F55ksMZBmbVWk3AoRquK1135rMZzSm6Gck",
  "key12": "4V1uDQKS6rbFt5Wto3UEykswCCoa9nawQxZVn2nbiDb1hadDUGX8PNVgTuSv8nDJX948g8qP1Std19oHPMz1gC6g",
  "key13": "a1amEps7xN925h5NKFuHWz2gz3f6jKMQNFCzpDG3WzWiVEDC2Q8q7yxJZox9HtyRfPFM6YUcSX7BcREGs8giAE1",
  "key14": "3HHk1HfTvSDcGtpUEWE63NmhxgaDh3kDraLagvD4qDLUDJQEGd3ZGDUQTKmmypUFYM6oLNGmgVgsbayPMdJaZBy5",
  "key15": "4KTLmsetGtSzUgUSSyTGHBYtpSa3qdxcmoH21xYfuannjhVcSCtiUTCoPTHKqhvNH7FyyWGi51bmPNhhV8792J6t",
  "key16": "5ygJdE4K57qkVYof5a5sKGrMnMJp9rsfXyrzNQBuJS2UZ1zmsJBGyHmrwn3vkmHubnYPmExwDAaKrVRKr6n7iqtk",
  "key17": "2LP9nTFf1DUVUwXK3WXpPTCLjU22zYK1jXTEG9PavyHtFbZ67mrbNKecpUECgqQhgQagaPXc4Rx4TLX5TErU998u",
  "key18": "DrR2QV12K8yedGHSgJ3PhFZo9d31rQ1ducW6zVka286CncRwC545ip63qWfi7VkZ8uozzx8nKYQRe8e9uzCNgkZ",
  "key19": "TrCfMCT47u2gTxN7kpJhQh2Ld8H7eZ2nfw3YAS1hUE25j63f7CAwnDFzGw7KUxCiFspvgvzRvSkK8EQDwT24VGX",
  "key20": "4ZiKUR1h73WCEvhjVvzXnfG3ApceCzxURQ4jquAnf1E447PoPjETXjaEuxkq6yPH4yzGVFYKamTNzyGFQBSBSvPD",
  "key21": "4V3y8iAyoc3YU5hpDdEhS9WH6b84NwKpvNakCUmTLchzPQMtmkbgxXuT5W2ePMeResbvhmm8tBgG9bgSrrrJS1Yw",
  "key22": "5weKdrabRM3Lhmgu319dHdXLqp7hcsmdsyySmNUQ4Qao7MrPSJSRYMS85Y3SeFmSPcLXC8Mdg4w1AhA5ypyS8sFV",
  "key23": "4TrX6npd7dXaz2RMjVxhLtRaJvEscuTFwLUXxbJLpLsV44XWsyLjqPxFS4CCZqueY8Q8YYjVBs5zv7zJh22F3oS4",
  "key24": "2oEcwXhhaDVbiwUJGHXPTwwADgi4jxGwvexwoVjQUWxPVzzvkyehiKbiFSQqNc2M2nafSuRToPi83m34C4scM1id",
  "key25": "38kyS8BSJsBVTmqPNMPBPR1xaDWpMtfQT2FypLSqTtZzSjnubaT8QZmLSbYYEd5iTyb78VX7eS3n9q79g9cy63AR",
  "key26": "51Qq77J76aaDu2wGevnAJcoERnsLaCmrxn5KEoqu7UzfyH5CYWRNTc6JvE5JmUiE1dFWPQfMQwGVon5CkLG4Jogj",
  "key27": "6fNFVcuq1rtQt7Xsuqxf44Hec9naDDedMEbkK3FxMa1vi5H4WPk6vCE3wTS7ZGicfXXV744sRnx4H8A9yGr7VEh",
  "key28": "4h6rzVp1exsWee7nPGMgh1GErNR8dn5vAhDEvBPwbb9eMg3hdZUGebCJwPBR4SQ9igQvChedigofowqievJbh5XH",
  "key29": "5MzWw7Q7LgSbcVNmSrt5XMGQe8hbVMqt3o51VQvueCAddP6uoRG2A8SGayUmUhoqpbSbt2kJY7nZfXFKQvb2ycvy",
  "key30": "38ZhZPG1nQ53o7NLep93mqj3E7M13CuwJZYvgxizKBq8xjEYmus8MQ4NfrnN6G5NPamKUDyFkLPBuxau9sMateBS",
  "key31": "5FoHxVLtxwsPWTqpZs2xpyKgZizj5zbEepbw5TZU4ngnKc4HfCM8p4oEF1oujnv1J4x65rPreqeh5FJfJG3esMVt",
  "key32": "4W8pBu3TwZRW87sbff9wSTMx1jVisv93wBSncBbc9kDJmrkFJQF6QJyf6L3CYDhLczeqUDCqo3QHEGEi1y9nP1Ah",
  "key33": "4JAT3qAhZKodvsVPyKtYasHDcaJQMGwkkNt47dQMMRa85b6CUxuBFnQSqw3UqGBWYtywnZAWondawiQrQKMN8FzS",
  "key34": "KcQuu8Mr49BW8RHXv7Bhn7tSmkCccpTfozxH6BakNQ3osRQ5bQKt2YPAh9hG8XQ2VuX5FrdAsvk52rhonXMH2Rv",
  "key35": "GVHivpJ8iGgCztDHtqcsQhsrfMBpZFGKU8RtZKemByJa3TMjrm3Ufb3MzQ6uxRyrGGqjodtHPjwGYtfV6FCcWfn"
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
