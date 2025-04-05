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
    "PWTv3UyBpS2vfabAF9wUZcLp51gE7Yn8wsY1Kg9SWDsxz8x3A7qZ1xTfSQcNuvtmDWRhNAdko614mcFmGo3LKRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wonSwm5jxgvUuPXYpLVeFSVuWky2S4HNme3UF8cL82SCDef9Cr5prEvgJXfzzTqsueJBx5CEt6HbG7JgVXMeEtC",
  "key1": "JpYPJNXj2Lni5pLV3vRhLE3x6fKZppBVBJmuNGJVgvMNMZXDj4TZAfeF4TsW52Qv1H6aAKBwQCQNfCKMbHCJF5Y",
  "key2": "37YAEnqyJVXve9M2kABhJgFs5LbLwkqMAAWajFVXnNdPXsF8WmGK68sjkLMcP6Uef7c4umqCsM8VBqa5sagLLkFU",
  "key3": "5mHYiV5HfcNjjb2RwkSu382JgSkqFUgbujqxXoHQhmHhFiPhLp8SKzh6kXGJkcSsMzEK29aPJ5MG8brWLqKDYk5A",
  "key4": "123auA6XmboYDZyNKPTpwPPUzA98qSZQXyquCPhBKXvNQrUyj3aSg5WD6EnqTrJFeurRMQTt8qDLBYkrnviseX4p",
  "key5": "4nRGTQ1RxLwQmwLW8NQHK1MtwKNsS6DY52CguC1FggewXBEC2sGLSnBhEChUWcEVsd2tkMERz2phv2gUwU4fg5Cy",
  "key6": "2PWXE4XUp5PUzwz2DqFyrzmheyUAkG8EdP2AhzakTrfn8GeGFPmGjbof6uHDE1GExvUAjiW6FhE7dHeagpCywYyJ",
  "key7": "6Ci4jQZjBPovdFzjscVmBS9ovHXJoAX1SC3hQ4frg4yUzQVHGUKjscj2XNNUF2tBf48Dywg1jxnfraLRADXXvfN",
  "key8": "5iKVzemHznAHissXoApWEBFyuW1WnqS9bidV5x5PnzZMAcmFk9P8pgobaVMvsy2JuYXxt8cmR7rrQhikeEzHNgLf",
  "key9": "4kwNA2UafBQxviQEdZT5gtLjo4fAE9gw1jRmSuqvZYEyY2w9uynGsM5ka5fV5A4yLePTPMoWqF1SQVsV81aNq3Ks",
  "key10": "5pjtffgBBS8HcKGkYEaRTNK1zuw2q8pabD8Y4kCx4sbZeYFV9st9pF85NffQz2LAdiFXBdqU1jmWTmd8RN5MoGAG",
  "key11": "4B8hsdDivr9Ldwwge37y4TuKP9cwj9sgVtqBCmMxcJqSCEy4fZpgPDtMEF2LAtvB5T2QM48hc4j4vtdtyrBbTYW3",
  "key12": "2LLWxL3qHdtvRHxTnfzyQzenf4v8czUHcj2Br2J6xPC9UTt6MPd5MShUA1W9LsHjSD8peALwtFM8hY8CgDhTTbzH",
  "key13": "491pmKvBzKK2cb7EvHbx4NscwMoT1h6RrFXd5Kvb5LME1PZsmMbJVLP68apkU7FS6n4muzaubnZvGPtsYe9KLexv",
  "key14": "5eJW22k63V9qobErmPZXR2Gt43XiNyBFTK28QixdyavGTfbTseQEsLbKSwJQMuwXJJnfW4WQFyZ75PE4zYvbgC4D",
  "key15": "4FdakUQx7pbxX82oQFePXeGCfbmSh7mao48KEhC2CyFatYrRLuCULTW2pcvh2g3aj3Yvw5Mmo2WHiifwpwDzaskd",
  "key16": "4wD14Aujyqi6MBy6ZC1uQrV1BvURn9AHVqPuAWbbSEsYRKmjkgvTRWQsfzqb5AHqYPc2YJ3sPpLwptWAdGWhSRNM",
  "key17": "4Nu82a4vSmeULJeH3R8JL9dTibuGyBWba2yEoZj1Q4ER6wtdgtmwCj68jgx5V6FFVWcU4DqRzFcrPsWweribVCpB",
  "key18": "bLzQzkYz9QJmtegdgMQvMVvVnjAkppxeA4afGhHVumCFLQNV5wzV3EdJwHwvp6nDNrqJp5JzEfmgtG8SAQcuJHQ",
  "key19": "G59QD3KPj7Cu6DDG7LjhPxhUzT2ZkwpZrJT2nEr3GDTPw9aLxEvVYaFaikj3piC5B74BecSTxm4ow5sSqi4Q3ep",
  "key20": "DsisDN1dGCpWAvvoBjVHF19d2M9fCWqX27xPyjGkcFJeQQVD8d4wQ7FgRkgmFeGiAyYAGpYEQdHw5oMkJ2647Jc",
  "key21": "5o3Ayzxm9wSLVJQqoms4eHNWi616T4Mmt3vTWVg9Uaju7hfbGUE41XttGpgEMfPgMAuekUb5eAzozJLeeV96vV5X",
  "key22": "2XDDTSEJCChhu8FkNe4pmRF7QncEY8hMqLpme4U54sEUZgQFF5msB1pmk2cyZiQXneCV81KvHbquVGsxAM7EGWC6",
  "key23": "4KeWGgxVeDWUarLuemed96GYYhd7GqyFXCazu4F5GAgMeg7c1p733Hu3EERk4P8eUbrYztLJWCr2orWmFFfXGqzG",
  "key24": "4DmqSPG1kUrbJrgfrNGaLUtJuL6X13aeun3mQ3JKegGow2JvXTiMZKAM9yHFjmrFpDSPXzRhfiJru8FwTrBivAWW",
  "key25": "3t99TFV9het3uRkJHmWVHizzjJZEc3CqM2dkCb7tBCjZzgn294k3cSjUGeBdBKyjrEZhXqkZS2dmiFtN81F8b7Uf",
  "key26": "5fGNGcWDZJK4xPChUKZyegPXQorfJUTHhEetbpwHAUcBvzCGfEXJoYPM7jMeYVcVRq4tHHEBVY9HZELBqibeB9pq",
  "key27": "3vvu7NxGZa7n8XyWnvWMKoGzNZPvRKsRDctrtT6MgGuET9cQLWd4ByfmtJLkvx5SqHW17AUHBWmSNFJLhMqGqqLY",
  "key28": "4tM2nqcAseuZu1Y91waW5kfH2dakBHRf4LVe2Tjp8jjjDNKm3xjcRdiJtr1QMjX9z2Sgt5iLaJpEWeSnnnCSoMJS",
  "key29": "2BPxpNatRbFYFZTcRrQ48DjtVMVTsWwTxGWe9h32iXn2K8PT8tKvWh2NSPXfkh2g9uSU87NxDCoSdjD3tMGupdaK",
  "key30": "55BnbS1zfZca8g4TwPCupMtpP7r21GowEQTE37zXLbGHqLNWVKnuxQMYSj6RRN954ab8Q1jNnjwj9kktGdTd8k3d",
  "key31": "53jviHY2rzaMAzfa3ivmsfrGnUmKrWK7kWpDqcaTVf7omPJQgkxceH2hroU2XEjhE3i1RyLVstd4QtR8zbn7hFs1",
  "key32": "4XCUZrjBZYAjK5xTfEXK3ruu6ZH285iW3DaWPq4ARWLRgqbJ9wFbQJvHpMkps85nMUQDfRjckMebg1UMnUykxXxE",
  "key33": "2kPSqBqnPHfc8zqpACpMSZkEUDQ34Px5wuekwroJDdfMdn3YnvFzQyrCkMChB7kW3xAKKjpwuXU8YDoeToNVxeP2",
  "key34": "3PZusL93AYjmuY1NcT9bAuU9jwYtJN3XFte5KL4KcPMenEKS5JGQApiFh2fBZmKE2kQbDnzGaTPEGi8Q2nBJSGCc",
  "key35": "3oYkMq2pbSqZvVb95BPJjrf4b2rN1TbgvA2ivRTfQNruvj4Zw41YV6W11sK5MKHN7T1oeJNfoAtX1tMWZcxfUtx6",
  "key36": "ufNnyaNhghRtwFnBg5xKzbK5WADmTb6aDEW5jti62ZcLEDfB14dvFop7YJeh6Crk6Ysr3SE1HywseHaJLMu8Ld6",
  "key37": "4pZEmc7Nm1qAkWrRQd5b42Ga4maPMywfYCmKyBK6koywAx4Prif9CxSHX6ZhTpiW4rdPbaPzbX5KVfWm7vNMwkVm",
  "key38": "4UEkyoPN7o2vG7qCqSPkVFQfP7Uei8ep3fPPR4J4GZqNz6xMAbFPasHrpVmb4wbAgTwwPu2WqYoSBTjKt7mQhkph",
  "key39": "23aX31DH4SoewD7vMFWTQ4AX5eDXqCzBGjSxXetnvQCLeFJNi5eoQbFAFZiLB9ttGkWqmpP8nN59ivQ5j1mmXjyb",
  "key40": "TZ8udzYMU2G6sMAKcxYsr33rTx55e3zQffmzG24Y8vqXCKSyhQvesFu8L2jL1GMSys148fsmTeT9dWTCz2Pm8mg",
  "key41": "3K7QD5foC6uLBPniGJEkceMbzG4bhQUaq6UaRBbJVaobrbsJrRkK3YYdzbQpT1aKtk9tg3sgZeoBci7s5JaZ4M7h",
  "key42": "uFH5ephoZuyLGpEGgYB9Wgf5caskKRenWVVW7cW2weYmfAVLPXxWG9m6tFG6sWu3GWQjLgzVYF2tpBfHnWyzLP9",
  "key43": "1HTkCJnA58mLRZx5BNQVMSPaYF5oF3pAoGH8TY7F58kzBarqteiP6R5AyBCJGTHTrP2A9Q46khuGm8fVJZwGMh8",
  "key44": "4wfUcjtwCAJ3sqgAokiUSZCTbupeGjm2v2eYhq5gjSUTeXhQdzfEdZi4PrBuHdiKtRJwncr5daDeUnkh84x4BpXN",
  "key45": "2G6pFvRggPz9y91zgpb4vE93aU1svrTHaFTgQJPw78YGbp2v2rgt24KLFmgqC8wEFR8mAVvxAQ2sKm1wMwzTLMfM",
  "key46": "3QBHcxsmWTFQBaSkjuk981wTQwnwsq3HrdfxSKoPHYtDVoXAqktukzF6ATNoAEthqC41h9A5cTj363ntWeT8Pcq6"
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
