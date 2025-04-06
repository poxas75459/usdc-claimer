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
    "4S5gn2RD4LEhssTokNS8qnivQK4JG1M2qECcfZn4mow5oXP336cr3E7h48Zrp5W1Uc5rvdYCwjKnYYgivu8fnBtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oeJAnipsA54Nk47qn9YLPpt1C8zz494udxQ4p8Q2CRuUpieS6FFFad7n2tDKsEqTyukJjBDxMnTbcRHMmGBZJgN",
  "key1": "Wj6RooqFsRkC7KGCMk7D8DcbGdM9rNa6aCrn6rdeYHsFtipsB4rY2JU8AS4zvEKZGvaQpb4pvCEyNiBuDYKsMyp",
  "key2": "25jHCfvBt1bE9LYgddJqS6HjgS7CKkjTevhBK77ZaZfDERixppJDPad8mZSa7xa2Qpg9VenLELFfdMnfjSCqr6Dk",
  "key3": "51i2gVCaBcAye964xvNna5RFTC8Pv1zcixyRZAnBNCZsS8SwPuPmVi1mUVZHrkaVH1Mqzo1vkzj37wDxAMRmcp1w",
  "key4": "33WGXj5dfeUhF6PEhnbdzYmCs23tFhHmZRZZvwCtX9sV7PYhTg5LLxCX7P247jeA9ssTuZ18i42fvFZgEe7DxNxS",
  "key5": "3kVUXNZjywUiyxRevE2ipf4GJn9cjykbyeWLjHbKVwQWPNr9xz8ZRW4L1ExTwfVwo8d8Xbo5oVPtfQiYwJbyN6ZJ",
  "key6": "2VG7c52wCE1hY3cR65L37YU8yAArktzWodsRM41uwzaovGY1mK9srpoAmaXC4VUumHEHa5wzWohCKeUFBSsvLA3S",
  "key7": "4vVxKihs3n12KyfHvFPR2kfyuTMYb3AajVzssNzS2RqY4PvTvX28sPShHJoUvpp6qRTL95sV4FxKb9NzsGJYBdsz",
  "key8": "5EBV54S4V2K5xfgEk4QXe3NGnScX6STvvdJVs4CS7fmyE2FDLoSiToQ8EsrHdLN8C87gt4uM7pTqPFhfAG8RxLmp",
  "key9": "5gXjjRb9ffxRgAREw9C9fBow41S5hfyYgkcnkG98Xtvr7ewic6W2n9jgRMp5FYpTzhqgtzT4jcABvE7arR8BiZax",
  "key10": "2p8x3agM14s2SbeTfDzktNzuUDMj59K18EeGCm1U65VagEg2SNa9QwmyjhsbTYhJLFw9XKUtnxcbQTsUKQvvxtTM",
  "key11": "5wX7vyPNvgSoTEAMEbE7AN86ccZ4PK6UubHjn5TLoVgogo9KGjfv1m8XfbTH1QhYTuEKiutZrQPx6y4roCHi53aR",
  "key12": "48y7Ysim76kVyhhuMAsorsZWkemGMwRGJsmpCLAoN7nTTFytBRN6nE4qFb5Phn1HwWY4VwUiUtu5VEmqg1x4Lqut",
  "key13": "4zNqMpFGjo86n9fzb7PhQQ9ihyWxnjjCACcLdA53oYuTEL56dJsozWEKAVS8tJKFXeuwugpQsd3Dg8ikk1ZbrFV",
  "key14": "3p1tD3n7ZNjkDPh7SMx9QZxjgAQUxWEACkzL4PHgSwAja7WjXeehGrzqP6JbdzB9uusbZyaUieHfm6ug8Q7ivZgN",
  "key15": "S4UnV1u2cHQKeE49doURr5CtAGQKeUPCUhvARVWH7xFPYppdhQ6MFw5fQatuHtpDRm8Mn3WDR9gsUQsXeNdxp7Y",
  "key16": "2pRD7ugRE4Z1GHuKQ3DnJR9zQGw7zVkjjeh4UKaTupvTT8DkYvVW9UjWWtWCMRzmqHBrDJYz84Sbk1hhRnY5inVR",
  "key17": "UKEiEtEtmh9bMamB475SYu6317njWanMajTkxmSsoTgVVQ7VdiC2imENsg7ZgQPXpUF46QeEQTwVvbmHJVbB1tS",
  "key18": "2GpDUg8ySbnmLnY33TFH1sdU63vW56nSMYkyY14cT458izKzCPESvB4aqVeMf9fLq8my3uzxHBUUbVSAeQFu6Kmg",
  "key19": "ynczsdcuPYuLkPiTkbz4CS5yKmE4ACJA63G92gFfWVBjWc3JL4kYHHExH9VHUVLKcNjCYYGRfZzm8D1qMixnWsW",
  "key20": "5FY8d1s1RzHGzY1jUSyzKvEFnVEsmYtM8DUa4559X727oRLgDC61H3nne97AGQYxP5dxNpTjNvNmWQakJzjkacKU",
  "key21": "y8tgxWbvXmbCbYpoj7xzr3Ji674t4Q9o1CrnukbsPbJvrV5n2ukwonaUtLNirrSG4UMfzX9K31nYy5RvsF1quf3",
  "key22": "bYnNtzB7nSepL7q7jeniYR1hZKL3HgJSUV3STxCk98HU6PyULFc4JHjjNbEgCwgGGtYiVoo4BuTCM9REgtCaqyG",
  "key23": "2j3UobmjKwivqZ8iBh3JS5LXjdCbUh7zLQ13j9vquHJ61962NLksibyLBmKaDQeko1fNHSr9dWmWHv5UwXYVFLyL",
  "key24": "3kEJczxZgbDhWbh7JA4oWKf7TwH2bFpetVhsVdchr1aemdUenzMfpmeXDzWT5B1BRdVXNumZA2zyDrFGdJckqGea",
  "key25": "WjfpXVaRiRCmsL88KotwP15VXVkriNiHLt4UhEVnHR1deLdyvQjkUVtFiz6B3mLeR67gfQ4zvJVdSLxyFkrX6iV",
  "key26": "66QBGMkHwwwvTdrZpyUFDoifX8qcKAueXsY7pofhYLyL1TCGeHPi2DaR6x2hpvonsSJGjDp2UW1Rm6aknLKbEZ5r",
  "key27": "25kmEAarsYy95Zy6va6tUrh7UTxUfN5BDKtqSKad66XwP2bPF8GYR3kLX8D8w1KZMYKp5DC1RgidL4X4omibwDeW",
  "key28": "gJhJUDxNFHY33azJfb6NSD5j7kM8eQCZa9Xv6EUqBZhukJjdSFAERaBbmAtMefT8GGBJCgf4D13qQPSBvLroqAM",
  "key29": "3WHqHX7gG4k8kZLWVSZANnJok5SVsd3VZokx6EmJwN1HodXrVgmsEWQc4zxibP6cS63wLPE7LXRwNTTsykiXngQL",
  "key30": "3aYPfp1c28fhgJiA4Ms16ETcxv972Uru1wW1FFmuqW8rrbh1uj4CKuWrp54vikHwThDugbNE3CfFMZbQhX8J6F7b",
  "key31": "646Zgz5q4A699b9eLf3z9FKCSXVQWdaGY7ezXgQ3VPhRzj6zXNW5iqVywzWyR6HMdDnxu8KuhdDSMS8LU34aHL1w",
  "key32": "xxB1AJ9qXubt49hJGBoHinDyjsVYkTrkVdCvcr7ix7eefQ8VkeFY1BmNuKwPutp3y2tBxiLqEmw7LWXq4xPUDQX",
  "key33": "4vELSMh7wf2bNcagxae7WmUZy6CD8bohsvGV84BVi9S7w2dDiR8dioxzVCkJAMDUD6Fu5fpuTn4DABbtDyRyuYFW",
  "key34": "4jMx3d6QbeqnmGCgPSqDEfFddQ9cEBMNKpQopUgcaPL2naWjZTA3BnarPDE9znFKgDWmQZLxxRGV6YG7MTmuUcXx",
  "key35": "FzDgHuEKqy2eRPefpT8LS7aykw6bcj7pnNTqmooesk4UoGm8XJSJQ57DjAX2Q6RCk5jhgTyn5unydFiJ9FsrBhE",
  "key36": "bP74Jxiq4myNEWwhqsL4DVUCoZQobjdcoyceMhMpTDYAfdj8RUopW5muoc6wLwJKVogcD7aV6tJSTasnVYtnmz6",
  "key37": "39z9y8T8pxw5TDRAh1HykV33fXAmwGKPGkCWRSU3URE5UVjgPEKv77FFcNbSsVTwrCDM7CfJnGiPQeQU16k34Xqy",
  "key38": "2b2mCHCw45RZyWEZ3P2KU9fJge9Wn25wCmrqiCrqjDMvxZ6jmcjuiw3X4gtMZeAUi66Es28nCgTjUxap24NFtn1p",
  "key39": "c6oBMzP6iLif7BrRP85Gk1j4TNeAkFJKbatzMRXLecAegR5WpFACquiFyq92LHf6GCT7YLBfqRhhzaBMBmDYFRz",
  "key40": "5YWaS7ozpRb9GTtCZRBKSdu31B1LosvJJzYdVqr865WGf1xoySfEpbdMnLzuMskgPPQZozC2V2ba7ytotN5LKX6w",
  "key41": "9R1d45qeLEXUa4PLhAToAgvUdRMvyp7z7V8735XHuHsT1AYBZSVvYi4n38ydYSryD4B1rMSbB5G6mviUJMfxyAa",
  "key42": "2cTgfhitJuE1qFg2G4CE862xRn1VAX3PUjyeXRyE4ZqHHY86CzA2X7RPBvrVD4gy8vMphJJn3d2nXYjb2dbXgHQ3",
  "key43": "61R1uqrwvJZp9gyAeGm4bqUMQY6ibtvUPd97gLE53q13UFEXcJE76fH4EciGMAtCm3e2Vn1462zpwxma2VJCc3tB",
  "key44": "5p4xRMCJ3qZ9mfCS8X9hfANjGBVZS3HWsBt5cQosXJq7vsCkTDiE3uYdx9J6hdThaRzJcTUDtX6bDKdHvyJ2DQ3X",
  "key45": "356LJ4NBUaRv35eJ1HHF5eMu5VAQhXxkv2bmZJ2Ta5D9FgQooRkTNy5F3KJMvPPsHKKY137Eukza3HJC5mZcib1g",
  "key46": "3YXNefJDNoarR9ZWWeG7uQhyLG3BYdmA3Krpc65fwbSzGvRraXYToJKJiGWSaewV7mBirXF8poNcBeDrFrJBafcD"
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
