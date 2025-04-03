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
    "5GFTn5AGBt5NvFHwLookjUuJSVtvhnV4TfFfbEzgSd7NjbhJFuuZXLWkfaWaXczEx6e1es4FuqGP29AU7gAhUNVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgmPQw318yqsn72BbLFNE3R5T4f8yKPRkMgQkbHQcPXECyehhqrj6LmDbxFfwbLyHj2WaPZY7KNmsLw9cJxhMDP",
  "key1": "5cbKWU3mrszehahK8MQREjWYvCdt7rC5TZNum5TkX2GZE97dmJ5Nk3GeekjBgoVfMAn37VwXoVXikciFvpuycbRf",
  "key2": "V2j5mRJCLirznebr9Yyob5b72GFb52LV5G89tT6ii91v2aYbd9AADAaD3J7LxT2w97W9sLvQ5cVqbvqEUK5Com2",
  "key3": "g5G5SdptsRKD3fGpHG5eARkCuXp4U85a99h93wNJraK5gf4zb28uxSVEzvPS3o4w3TL3KPrW3v2YGagL6b39t1p",
  "key4": "5fneLNogrNbQa13J7SW71JYNpLgnaG6QKxctAAHTaXMAsmtM4fgZkpFnXdoH2pddMhwoC9czUrxAxiFx5QH2cYu9",
  "key5": "596pKMnFsS4XThNvDLiLbDG2o22rRSWdV5qKde8USVDftN1MfcfHYaFUEufNYdgC7tPx2QcL39piQYbqS8ymbTce",
  "key6": "4ACCqbbQ8SRrVtktiKZpjnKb3QFnBr712MANYSk8HbVfuiEDTwvKw49KNidzBRxYpRcT7T3gsRV3JgM4hHnkoBi8",
  "key7": "4ZbYkmGyQ1vKuiRDEzqgKBW4spBtraM5GAjnMHzvRrD9enmFoF89cvyeu7qVRkzARyhFbAaWfgnjeQGGzkot5Kn1",
  "key8": "5bxssi8WnQDHNyqHPQwee6tz3NpkwDZiVbpdBTgtJPAzaoQFXdJGGzDioL1EWfhZ3jY36Pzu2wfdgiJHBYXCnGxx",
  "key9": "2WcVkgmWo3gKKJTmxSAcCd1GPHjaDWwNNsfp69PVqX3J7BqzmeY7LnifExzhKXgNVm7VbzFCqsa8DBbRUeryuaFC",
  "key10": "3NELkwnAKuG2Z6cLyQDb4cJJovNa2UGSnJoY96bb4fw3FaLDd4tgG8yREtybCZ6QuNNHEpPrCP6Ln8Xx7YYHFbrk",
  "key11": "2AkQXuYAfAN8B6B8mWeyH57K9PECUtiRUpYobMh7qN2UCbQ17K8NAM6DtUxyxE2v7926tNKczQQURQADyMpvhoWN",
  "key12": "3ipiFvsmSqYJvupGBCFfEdWzumNRp3ann33hPzCN2Qr5dBxtWCgXSAWpd1sFPb7N4bHLuUPFHvqzkuxYa8HSxYUW",
  "key13": "2G2Sfrw4XNBMg72H9T1ZfnfNb9T9BvZquHXo5RHYR9mBWrNeV3eztoAcGK2SejnoKAzk2e6rsbsyJqaexpuEVW1n",
  "key14": "2cuJ1r7CwWhKmXQuW96GyaSJA9qh379tsMQZLEcGH6GzU3CKfedYoWwWHJrBL8f5eaxsvnUNo6tuEJeKp1urB3z2",
  "key15": "TWUudHCjVozX9vD4Ydkv2fwvEnnqzyi6emyaEycfJXbBQMK3DQknGH61BfgAJw61YXxXdyeVngVWs96DecAqff8",
  "key16": "VYPsS3qWGheDTU1ULW1uRuBCDM6jj5oBoU85iAykCJWCKzRMdoJeiE8YYWnMqc22C6Y2BX7rAHv7McA7EnZ7p6w",
  "key17": "22C41p5e97eUuamtFWwnZRHBmzdy3cdYkJhCYnr19NqsMcipkvHvdt9MYYjnxo6sSN8t9guzTeFWKGYkWsvktF7h",
  "key18": "jCvtxN9dR7q9nsCtU2b7drp52ieKh26wSFcBo7FW5xsztrfgEsTHcbE85756G9Z2et2LGyAbajvrNhC2WJS5GQm",
  "key19": "3RGkkwafFZsENn7gdEKFU3VDD9usJJEz5FLsDbsPh3pdifx7vtq8urYAyLaR2xbWA4Ud3ZkeECtF56u76h2bfPTH",
  "key20": "4nQmXrbuk69eYkgSg3K4AoXzxCiGxxkxjrvsMkkSKeuHUJPbxvw7V3oYGEvBBj3mVsYopfWwXB1sHBXPhh4zANH9",
  "key21": "54WrkjbY16HVzEN645dtX6nmc2t3ga7nRRTpTeeSGxGyknQWDWGNp7nnmbxgmrRfHUgBeucjscD6T6aNwPmDQusg",
  "key22": "DosjMW1N8oKQRBJBaEtcgYzwzS4pojXHnuFYYgDS1ZEvBxzP9Lm5UazB4VB9zvy8eC7U2w7vBKQgs3T7RQgyko6",
  "key23": "5XWSmm5YXmZB2u3Ty53XgFDeNPgCKEmwxUmAL6Rco9nywax1rDtFUj5LiZdRrrcEhq7jcd3B6YxTffkdWWrRe3rk",
  "key24": "5bAra2T5WYq6WxJwUpG6qD8Pd9hZXFZ3FvaeP26EDwUho3jVMbYB3L9CADJjmkbRU5qVN61MhXF5M5vXsVQcJykG",
  "key25": "2P2MUfdgSEWjyS4gRC9ijGQBoVhSkWYEEA2Z5e2xzuk86HLnstEARxpqGE9bfb1bChRMcd5xUxCgREmmYBFCK4ju",
  "key26": "2uAGQLahVdcaP5aDFtcfZym7LRYadfkcKKhSk4Nq7FPRq3zJGJ8asoot4MN9EJhrUmEBatQWWkcGVDggNT8qwh8M",
  "key27": "2oQtj8AULxk76YdKoUvwxW3cvxAiMwXYPgqmCCvwtLkqBVUmFTGpPM2BypqL2Y63q22Z7wGFPw3g5UC8Bhw5r3VY",
  "key28": "25m1XiZWBrSLfXwK1gNyFESEGiu4gDunmwY9aBuPs54w8b9xm3565rn3xpf966oxJ13cN1EYWkCjjhVNNH2sYicm",
  "key29": "5K6AQheJa2UAQfnrhDxq35HZKTTwUv1mfcLtmZCnN3nf3TMqA6BbZTvKyiwoNFNRb2rWhQyvAN9PVXHoybsDa4fR",
  "key30": "3kCqA14KpBzmGJF5VyR6t5NkjAhGnRoqawYZf8dGcnKjYznwMVEcm4cohyFB23rYri3dzn4VA4Mt5u9y7E4giSEp",
  "key31": "5Cb1wGFTkZNcjZGThnivPCVmHMcCuRFeT5FWJtg94CVpUZ7xycMe4VigJhP7RqAurYTMNLmD4GXJuCvGQPvdP4SW",
  "key32": "43Q4TuE7nVUK74xMSzQ7GBR455H85tmWKoD8oGcbHNrrrsd571QTBW4G5q1SfLCvsWtaTe2LTPtUtupuPwQf1XFf",
  "key33": "3RYtdEQf5vEsnSc2x5cCh8TtpoCC9tZJyxMKnStX7iPhoD4RANVVZhQXyhjs24qkUpMsd8eboYwUyxkrdqJx2y5T",
  "key34": "2tAqR9wBWyM6F1AQmt4yocPfwQFeNR8rzbgppm3JmDwBRDZvaKtSycWJWcQ6yRUc4nvjsWrzuPZCbqrpMNdpbg4X",
  "key35": "29EZ7yq6r6VYEk18xxwLwypVwGzzmRT6rGQ1Zi9QYMXULzn6kGzm1krvknYCimY3E8jaVB3KQ1iYm7NcWLQf2iM2",
  "key36": "3yLd7ZGkBth44yrHC8KRo7G4xV8m8zcx7qV7RzWZDWAwyyiVDR7PRkM6sXUioVxTED7Ga5HfJPFYoipC2yCVwgUh",
  "key37": "5z182Hb9nqyFtyRpQw6svV5CEDFQhfQyrq7fKV3F93bVMjRXeCZJqAmKBfXFA6tcsNzF1mDQQKPucUyPH6ca922f",
  "key38": "Jgz3qMNm3zsXZD3EcASxHJ76uEViPuQ2NnrnKcFymSC54qqW2Q3ptGdwPHHF6wdJkuy6aVUKLL76uXc5dkvSpSx",
  "key39": "4FNGZSJ9UagD3agqd9mtTEnXAUaQWpU9yAeFbGvSqueaDSLi5grvESfeozjGYrwhy5NEAirpcekingbmX5ZyubnL",
  "key40": "5vKMCiiHNCEff3FPxPKvRjXFSnSghTaUGmo41VZoSScXdRT4ouwATzmZdbnKbrsuup5kR9HQF6NwQHT98RKdhY4V",
  "key41": "jhWBrjX6uiwsqER7sSVHMvwVUCwvRPLiy4zBPLooXsCPCz4xFFqU5oSnvB3dV4YNmEuaxJYQXGAJ5Dq1ugtyiL2"
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
