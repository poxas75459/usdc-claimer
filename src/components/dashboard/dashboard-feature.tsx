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
    "5uhicwWNZt32bV2PhLbjzT9PDTFNL52tMhjUAabVXdkmhEUhxV3YVo9waHdtTabTywhm8fsourc1T94crC32r7Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZcLS4KWQnmmNSVnWDHEJdBzGSyyoPSA7aDXqqqd8xhJ7HADw43ZB5uSJS6uE6F3bRT3zz87YkiBptszaR8sgXm",
  "key1": "kARUqaDm5kd3BA4Mo8V1vPwSHXYweZzmWBGqMERF191Ubefo6zKrYytu3GRHSzxANwNXzmoCRmY8JcAuh3VS5R7",
  "key2": "56ZAJt2sZoSN4KrT6rWV8oRcKXAPFPThZ51jHn1VEqBWfFGGP11A5u3cxG9ZYbFeWxjuYuKsrCu3qXUddZjG6XEs",
  "key3": "5mWPhZ3QXFm47asAg36psfBtCDbfJkdgNpwxwURUYSbfyK4CrpM1nsmz5es5DxAQBemxYA1gBq6w7oZCJd8Vno6W",
  "key4": "3kUahuVCreJuGPMQJsCDYzWnQQ4Pc8EKa9hs13BTfYds5Rm7ZzhtJXqVNPFr9nNbjJGXmZ4kwckcHiUSdypvNFtU",
  "key5": "5Pk3hgPzx1yAE6iBrMBfyXD4hsUosjRTFdTxqpev6zvTRg7z5XpZX6CEFp5kjMZCoDVuEszq8LbEyTEZqSw2K1D1",
  "key6": "4XH9jEaaYMy33dmGJbkAxGWZs1QmWcmXq2chKECRyqhEmpWRJ9r8RS1SJt8VhYPD9Q3owf2UWayoZgvYb6B9WN9j",
  "key7": "2Bw29hXQpgV5QmpP7g2q424mnh3ktYi4hMH5kgUcQPPPUt5GqAxNWsk1u9aVQH4jJxb9SBhQSLHXmHVBAGBQmfmy",
  "key8": "4D68KUYGspNeqGTFBSWMRAikF7pNSVHzgnGczURkpcteRCXS3XkUMUmjKFNnCYrhXYbRfjm25nVAdMp4ZXajgJXN",
  "key9": "4jNqDYENUmzzSrisrbVjdsAexP9HbkiRi7cKxKNUaL8znNo2Qt38LoTcdXWfzbRPuGWK6MzaBzWqWMbejWMxntXv",
  "key10": "koLB2xihVbaDfuhAnXecDMDy77JshV84BfwLs8A61mPutDeJgdxorYAtzZ2GiKu51Yi1X8easuLmrC15KkEF9Pw",
  "key11": "37RZTFSDy4mh3bEpEpNYkN54qoVeG4SDokQsTp4cfMhZgCN3GUkvDEgRhFoqcBVqz8TzfxSmdjkTVEuCsYELAaGG",
  "key12": "2iERoTMLY7qzBpFdBbxMCDMnwsuJ8ARUpyPSwK7rnokZLTjZs1ethpSRPQKXijMqsgtQJ6c3gGqJEU2VvvkieAVo",
  "key13": "22b7ELv49HWiJVY9EUu55sVALxhztUMd96aiwehv7MZSVxG8Sa3WS6swwXmVaSdynYUg9NCPFXVmAgTHTfC5b9Jd",
  "key14": "iybZkacZ5tU8agfxWt8W6QZ4jdypDEBWSGtmthSka36LrBeZYxEJViX9F5vejKoep1zq9FHVwmg4oqzxtT51ui6",
  "key15": "5EAU4TNte3MF7kJVDnuzbtgn4ozYEJw1FvaHAtHFh2CsHm1VNJN2rMT8FrDBDwE1479YkNXrjG6ad8b3MVLpHB18",
  "key16": "PPXz1qUxVMMxhnZUMKG3KQn6dF2KbKgy16cchLtFgytP2TUp52gzr6PeLFwkpbaNqK4uhBjAAbuphYE5D8veyns",
  "key17": "5UybsqyPtugXHvZ2YrELHi11BiAGzuWx4V4GckTTkx7Kmw4466KpCCjrr3CjFNer3tW1xkcFyyWY8BMVNcCra5K9",
  "key18": "5Uj1o1UQrWrEE1HK9HXjCUhrj5EM3GWv8UqkzVu7w3kVKVD5ERWTCgsMBGD87yBQGQxBohGQa2ZP8aCzH7rnTYKM",
  "key19": "4qoZMSv135aK9o6meWJzHJTRTbePXwvs6AUXRtX9pMaKyHjSdQHEyeAzveWLACk9DMu22dZdG2tRF2LWTTCzw1ri",
  "key20": "53fFKvJBehUCYmSubWpsauRGFFNKNcqBurjiAD2NaDh3djEZfeQyHi4AwqyBPCw2fXoUxMm9cwks9GQTyFMi7VNQ",
  "key21": "4EamN3uVMvvWpJJfoY83r7T4mTyhLSQBTKoNUWFak4Qxgzkr9qusAGg9qiYiGWScb2eLQA1Ts2YWvwodeMzCt9Rf",
  "key22": "3cYqp6z9KTxgs5usmKMTRVEk7JpCBySVcppSU8pehtGVBXQwEdd8PvVq2exacdQBasiokNosE4TXFSDTtfqxWsH6",
  "key23": "2LmqJhxrfxp7FrSLc7A82ELi1mpVtaPUpDnuELX5S1qLfSVTjBt1s4zN6vuTDiuazB2m4aHKxtaaEiDa4ahVJ31j",
  "key24": "2yA8wKSvLuGKFrr8k3ZeTQkZKoQD1x81yBkSHFMbMKcMLcwYCKP1S2qZ98ECDMYhagwsfRGvPpgY7fMssjQ9qysu",
  "key25": "22aZbFpAnbePb1BaVQmg5VeeJ4ZMc8QjTytvfCoJ4GJw7jMWU25dZGhVRFuy9W9WTx3K4wgQs5nktz3d5RCj6r2d",
  "key26": "j8vJLGNEvwrRzLihTYAyi2imSU5Zy5w5x9d7gkjKu4ZsyPBVRQTQk1AzLeBszhsNM5csEHFP2ivedXB3vpcc7Us",
  "key27": "2f9G4ndhakgQRo6a3xy1GEC7fg58qHxqaMmMjgPU54ZBN7XsAx98ChSQf1sZmm9DB7KtorKHdsnE5KSLcodUVajZ",
  "key28": "2asv1b27BeM4i9uW7WK8dtsQ7Zhiqvo3pPdcQSiGvKnBxKooZXsYuAiRN3Tan3V8PrGf4UvMk6c1nsGy3PSuas9p",
  "key29": "4mGbFGH22bt331g9qvNzE3gqBa5pcb4MqW5tRkKPKZ13nh9zDdaRXxrALcXAYSJYeVkyEY5gaQq19vv4NuoiK96C",
  "key30": "5bnoXsXPCWp9VGJcGTRoN7Zuhpr6WELzV5psFejo8oaYjAoe29CicK6MDEY6NWrZRfnJTJWwm9PMRUGxt6jpCSmG",
  "key31": "5h3zCo5Mnt4EiTpJ6QLBRbCMKDGgRfdjEyFqcvsipTio1SMGAVWyossHN29azjRzU5DMYej4aVGHvXTR6WQgdtcV",
  "key32": "2fMa2hYmntjmqCNUrRKsFYacXQPvqXx8MLhbRDxGGDZfTKp5sNctB3jxbwWKUVHLy1MJc4BydpfoBNciFudmJqco",
  "key33": "4ko3arnDLDLPSuyCe3dbhRZ3cdxmcHBjBnY8TujDa8EZjT478dowwNzCsrCeH4f4AYtKuHyPXdJN8UgieJ6EN7sp",
  "key34": "4Lo9JHjeawdPpDDT2ZP6jcULMw316wU8f7PikimHRppkCL1qEF4k6DAD8VbdeU7DSeUMT1Jv5EsRf5YwPRBk7sgx",
  "key35": "HkcaoZXthobTpUHmfzZXMQhsZs1u6Qux4jFvkTCMo1gZ3JjKJ3EeWbx7ed3yt769brNM3XCpgM9H9FymVzaBT48"
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
