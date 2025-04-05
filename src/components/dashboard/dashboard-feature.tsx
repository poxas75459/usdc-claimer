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
    "5Lv5Wy43mm1HHDFLtxunLd2TKFdZtv5Dx4LkDGyMku7NLaGciPDUNx76nYUCqBg58rTxuKSzAH7Eo1xgvSpwZ46J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ui1XGhG4VGeSJQakyf63navHh3KQSTMPyJe1ZarQwqZPeRFDyseNdMDnswYk727WhcV4m9QheHp3SKEf1yG1T24",
  "key1": "PHGrGJ3LhBBjg9UVTQjcagRw5fhJppYtxc16wJyEXuSVM77XczCRkxJxjrUtmhhoYQti6ggaQcTkkQHBPzrFxot",
  "key2": "5QNNux2YyBJEZ4MbW2f21xSFq2T3x26aVN7xgTk7nDYedzwoR26Rkcfytfp2bWjibSdTR7aF93W37yJbRo8Tjymk",
  "key3": "3W9agjYNt84gvWRW5Yeb4XxTNU4Xk4xY5pPNTMMHEsCuNZALWY7hhEtHn1yHxPMArqLyrDuqNHjnxp8A1dk6xFDM",
  "key4": "29eHrjmW28QMnVGgCsH2wpCRbtASFeHJgwk2usQsXWGgkJ2myTxkUyhAkxYMYEKfg6fSRN28zjXa8pvNFzeVwdkh",
  "key5": "GNcRodj5CtLKYiS3it19GxSdHzzX99TgaFsFyZygsw534XacCeP81Gk5k2CG1rH3vj9ruR5yPH4sz32TZhaaMv2",
  "key6": "4PFoSSzq7tDCRPdw45jhFyseHge5gs2rtYKRjbfKZPjnYjDpmhrgftpmb9xcYjYdXhM2CG4pTkzVTCd49kkjo2VB",
  "key7": "4d67i1vJDoQoizsjoxr9ZKa1drPjSmnwmt9bV6RNjUXpV8XvNg4AYAVxJJqv4Q76yMBevtvo8pA8aomAbsQPJq1S",
  "key8": "2HbLWcUt2ZnchcwS5ixnGrwJApXiUPCw6CLzLUCXkY2oJBpSnAoeb9cU3nRHqdFKLJ2jbEpTansGWvMztuHZa25G",
  "key9": "5muiP3poHDCDmiDrbfqAmK7aRxyt5JRbzCL2j2hq4yKoJWDcyzbA4Q9mtb7f7Mj8HSw7c4yxaNcyhbUYS92LGHP1",
  "key10": "WeuVzfRqsWmaUBYRkyvsnmtwW6Bkh1UBgVumrdm9UsEt3z8q7u8HvWhJmyBDrYdADwxAz125j2P1j3hGgP4pMri",
  "key11": "4KwmfSAE53oknA1bbL5U7EbdA8goEE4MQ3kmryG5LkH2opLDVugq59iLfhUd9DjWrC3VVnrhSZC9cEiQME83qGZF",
  "key12": "2VqpDmvp4vF6PHg8pgidF8r7A2NJoQTLqPpVVSN7TCpjkL1TadY6DRTCeBqsMsK3GxyhZzEvg1LVWjh92vxeqVi9",
  "key13": "3hBDqz142YK4Q95JZArGCZF41BkVEzbm1LiVud4HHYgDhduLXbTXcD65Z7KHgyMbqgDbCVksKUkTwQ5oEzCKP2U1",
  "key14": "37kSHsoYjP8R3QqGYfTwa8TjzRFSdZeBJtczHPPF4ntmsVA4PGVFTnYTad4QoQYK4c8d2rUMtmuaBJzW9LNKDWed",
  "key15": "3ui945QkX4FHj2j2kJ4JYzLadZjA82jZUWyUmFWu2wHaQMoFh88v8HBzWsUzr2RDZUsNUhz7uGRtqE6RkNYKZzKR",
  "key16": "33QNbt1Qp6wgsamqcxhXRznMPo3ZgRXbuk5MtPzp2TTzgEDucupUVWQh5uL4P94iUCJCP7iMPvk36EHzi63hQqqQ",
  "key17": "31Gbh6B5mK3z4xrzLJu1hB6YcSnSg2vyG96RyuxKLiE1S7JMxQRnNkorwscezwG23MpEkgBZs8DaiTf3SW22oZBN",
  "key18": "nAxB4h1YiTfS1xTMnup7ebae1Z66JfdyhqcP1p2Aqw9cMW9EZuoQe2RLuHJm9CTxXQjr7hreKuzQ2RU5EEnsrBa",
  "key19": "UHQDCUqU636iu6cw5DkuNUo1KVRrd2Q23Ne7tbfDYLvhDEifZsH6ed71M98T92KgukfEAURMtX7KYhA8N37F5pP",
  "key20": "55f7427RTH9kUMX1w5KbDKNu3PABGfo1RgWP71wAccPjMRXZbmEnNo5Q6dvEPHtZeLbUGXCNPYT6rhVsbtARfV4t",
  "key21": "2a9izUJYPrrRZD6CZLiWHQ3eQUZpB4TgARKTAyiADhiym5yRfdHkhUSE1EBcjqSbTJwRkNAyJgNZYfyfKewr4uqc",
  "key22": "3xnFxrmReJu7QjJMMvJSWQXPsSuTQ2EYz1in2S9aFYsQZyuE5XNfdv3SSMYyE6mS18VSxWM8M5XH2djXUftntVT8",
  "key23": "4MhQH7vAhQyEjo7k4B9JsSSRYWx12uHs1BTWpcDPTUu9h7tNGMSbb58pSVYKT6np3Bd3i4JTgfZTKT13wKopKRHy",
  "key24": "2EbMnN23G1qqtomSshPzJL7gC1KhuYogY9Lh5upfGsM6MnbmedqbKfpqNaPAnL596J5YdKhtpeTdauNfA9QubSZx",
  "key25": "5sF72PgXrssLnHUn4DyjZP88NaazDK6rwuuWp52UBz1HSJUGfJ7XwzU3tUW9mnd5gAJ5rq88UULN9PxrgjxcSyRp",
  "key26": "36CGqc5w5cs66B1XHcQMSnWaHAfceN3VnxHZioM6vpr7uKK1j1JQhkB63mbDP7bLhSo2B9n4k1p4KqMoRvz75qxm",
  "key27": "3UU179cp93GPpjH5j9boA1mfYzfzhp7CxqMqG6VamdeHpxTaQTkQPrGZYDKx52pyeDh8x9gT4kznEuELUXBsmcZM",
  "key28": "5NyrKhcaMDV3pQEZeUeU7QicYdLFqDoZfKxiPJAKSv5Mcn3JdtkYY9B9XZrXGgtrWE9PbxdA7AHfmtnVGefJQmGZ",
  "key29": "2qAck4zrEm2JydrVw7McQ4Uo772T6BwjjCdib5h6DYLRiQhNmiZW2LdepEbeDFkzVicVyrqER4DoE1DjzL4z6Zph",
  "key30": "3ta5RK4Cka1AZj3HWUrZRqswz3C7mPZQ4D2omHwWRGkwfbGa4vcUVrHVyhQNLVY4omXQd9rijpwKzv2aPNH33rUQ",
  "key31": "3ZUbELZV8CT65q2ueK5MQVpaiyWvH48yPunYaD3dtC6T3iDNjMtEtm2TxA7JJm6ytPds4NN8EQazDFRXNnnxfz3o",
  "key32": "37tsS6TVC54wan4NNxDwG7WGrmBekjWqmaawK8At44jhyPimB6xsvJK4UC4m7U5KwC3NUF4T4EFC1EuZUD92ohSQ",
  "key33": "2Qo2hFTmoiiUJtdGcsyvu9xCoQ3tZRUipy7ThNBNuG4BHq49iQoVqvmgVeWpGtFRzjP5nGXPJCpixmavriTaT4wj",
  "key34": "4oxeAPZnuCBTZ3kXoXXrVzj7dMLb1wrp1aEPvEUsfkY3UtBWYpxfoQpKosqmX2746XfYC3jkTYDpKsPYpDvuEyS6",
  "key35": "5CdZYsfDMRQTidjg7usEpQHYGKTYMKXx8uEAwE8Ws3PSsDQD6ATakc3aBYqHxrtAxCw9pkLxmUnFGVWuHGyocKLW",
  "key36": "R6TuVv13sihZCE5kStgo9mizpPQJPASEbG4PrAvN6Fp8pddNiLf8wftbTG8FfHMqTn476aHVnrSQUFx16TE6Eba",
  "key37": "2w5ZhDxu8d9s8xYNuSVapw27L9cDw92XxDM6EHKH4X7NdcVhyo3VsC85XxazH1YFPtcSjXrJDv8NFY7K9ggMSR1Y",
  "key38": "jCZEAyWhSj3BgYe3ue765wC5aGFvUfXRZUCUJ8bYtG2RXNTDS8ZR5esKpcYshqYcC4ZhTswFuDAMGB2NJvntZuM",
  "key39": "9n2oxDF74EqHaTpdREkwMYwRj7HotBkKKTsSet8qQry1g1Ejn8N4NK43JnyGzwdp3UNCGVwMKhfPdnYyF5MePD8",
  "key40": "35tHXPrmtxQpvkFyF8m3oH62PmsN1QkvHmL3P2bQAL9Qehk9R5BiAA5wFXNYfSJEBuUHc8YrAWAa8DKK6rh7s5X1",
  "key41": "29C3psHmNzvVxNovLrWpHXVDf6MECMsD5cFuT2aEDf3sELLoscvKWMKvsB9o1KbRSanXc6jJ2mFTxa5V67GbZYzr",
  "key42": "5EtsikmNueyZV6CVpwrnv3n3y63aUikGGjoR913oatdiuKLrpaDMNKo5xWzqtxN7P5dkARyqdHzfva4tcExYA9qr",
  "key43": "2EptGHD4Ydmt25GWNqSehs1V8q2e4Mu6BVqSEb5YbbnBWDLAtVaSx1HhhdVYCHo8u1xGzXteCyTfgJSA2vwLya55",
  "key44": "5wSPD2dE1jDxzJtC8GH5HjVBKHc9uXidgnCYXrzkbQUGsWw3MRXKCpaYmgcfnZNTAaTYYS7mN4wY2eSLjrX681MR",
  "key45": "UsohxaM7J1HqcAvHU35NhF1MqSHSyGCuxCrc1jnC71Z8rCh1kKwRxWLu3oRmPWwKvVbaoMexp7j6BWWTUjDdvzr",
  "key46": "DnwFa91kFEKD7LDzfvq9meZKaAvvhnvXyAuxy2fQmpcMBySbWWQMYYSfoJHr2uE4ihB1aXoVEdNcN4mGtyHDwJ6",
  "key47": "4awAjJfvWEELNTyGoZVFVo89N1MGhpFhDazYaD2zcVZj82YhqQwm9CQ8Dz1kduH7ZDAxqqPAta85FYUJgRLwTcRy"
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
