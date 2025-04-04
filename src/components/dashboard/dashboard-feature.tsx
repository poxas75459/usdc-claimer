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
    "61Q2A2dueQH9BpcLsxvamJ2qrMv48jQa6MnXw3gz2jfheCnYtoMEXb48mw7okTW8covT6jDYXw6UJZJncaQPCZQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opm3f5aSUJr43moxyKVcuBMmfmHVWcBzrJaMGzRMpB5hAVpbJ27pzxtB393E5SMGz89C3eE8NhF1dSBFwD3QABp",
  "key1": "2oNqhTYiiHiqbJ65wnMeEobdGvdUE61HWRdV6YbTfEqxDhoNzC6r7WxhNb8CdmSHFnEGXN2tsgf7G6x3dB18LT5r",
  "key2": "4Wd2Q2VEzPbh4w2yNHw3q7ayjLbop2c97oU53PCaYcb6uZbf9GRQXAwiMumWqUVtzQFCB6KU7Djcz5o6pNx4cxHW",
  "key3": "2vDDPALd26kRtT9ykGGLyLyyVk8sXEaEvnnSSjpGao4txrYfuLhtVen4HPTGRZ5NXhW3bQKCmoRwq1GeUxvNuJuC",
  "key4": "3Mjnxsc7vozm5EVy3RTkjwqFEwdomEeobTc89FtPb65TzgvWstiRnzunyJM99PAYR4w6gmyh712yKuFWvQwvsb2k",
  "key5": "5yUFbAw8MSCN6hYv7nkCE1C4BbGCuP3oBbRVR9LwEkcSrYS5eXuQk8uSDCyrE7oqJfgsjgQRGUsQJDPuA2nKkMUy",
  "key6": "2PsFQTPWZpS2QuzKs7fhWNJ2Aq8KhnARhQ3ZwqSKoGGcAdSNR1u7CHEmXDK6XWz18MBF4bWLvdNhydUdMSM7YoFD",
  "key7": "5qG7eytWPEhCRUan2Kxv686UFeWesfysXiRRfbmut1MCzNariVc7vwijSa9MZENdN6KwfZ5S2TBBCw4LvEVRWJz7",
  "key8": "4jarAb5atGEgbUuKoNE9PDfihzGX6VD43APdcMTrrM3g7VzELNB3jCkVRyLKbBMGqPGKuJKtFHsB9tVv56GrccxD",
  "key9": "28SXcnQABd7jd5yEhwJnbURgatE5wGq5UjDYeZKunnqWznj7ZJMM3SNShBjTnQZUuUQ2iLddXXu4Da2KWJJU4H4P",
  "key10": "37LsASXvdc81WCXQGdZKnT8f7u8y6VkY5Mfy2QXp6hG9MDm9PwNL35SwnsRLWrxZ8vR9ZTbMcmnNTk7mJMuDgcvE",
  "key11": "5HCCRaCCcrRfgLWzuVLqhiWKhd2x8HJq8mZ2RwJBmnFEUJxXgpC5disT5KkS6ppDfXnEMJVMVtAsW5nu6pvGBaPd",
  "key12": "5zVdBXqJKbS78tZMX27BuwTR6UCnhVjA4bQvd91kUiFUeMQfPgWrhiwSeMxCavfi1fdHrTZUPfuJieMjQLyat6Bx",
  "key13": "3bvktQowLPQgvjnfd3HhKbskhrrGWDLLoCa9Y7MVZT5RM6WWZY9UzHGZVGkwERmn4qyn2u52DSYYTpRoXVDu8f98",
  "key14": "3spVxW8vqPfz5FHtPiRR59tT2Xoyya9MxVFCixJEibmiurQFaCFG2Rq6Nda8rAc8uX81GY2WdoGnRVt5Tx6tPRbb",
  "key15": "4RhUCvb3Msz8u9uEDmuf8kmdojUbPj9XagQr7F2FSwQMoAAsuhyx7QdxQLYYLSE7GNwUUBup4kceeZUXYP3HpGbq",
  "key16": "2kyqhUY6JeBw1RGkYoNDghgGfSBnKHpsZUmDyumJW7G1S6dDnr2bUGyp1DwDdtn1RzXy5FBhtajfgVSB2KVZqsDF",
  "key17": "3S1BZGjMkTyzzPzMvFUNvQ6vqrBhbH1X8tNKTGv1R93Q7CTjvty1r46YVn1CvkF1XSMj4yRDgM696tPG3duhUfeV",
  "key18": "4Er7eFzmzwx69vCNMUjVXDmGaFLKhFMzQPn2g7yukJUYAxi6BfBB3qpBmVXELjcoUzJn6qC9Cdirte4u6tRfPGWK",
  "key19": "4fmb4o7d3QXLws32B1YYXZM8i4vZf8J72bcffagQua7dsnTmy5p2tqRMuPGWWvAgUUadC7aWsn5npZXU4NLbZq4b",
  "key20": "w2Mpwj2sW3NY1RjNRwvAZ1TWdiNH5KVq32k8YjDpPHFm3xBsNKSPfdV1BtM9EWnTNmNek3TFbfHqAVZyFN5kvGy",
  "key21": "N1YWhGfRv9cKLiHWX76HVQiEoL5rcpznz9xmBdL6nFBAmpEjJGJRSfpEZ9qPqyytnEuhJ2psGR8QoTmPmCjUbHh",
  "key22": "26qdmgYY8PxSSrF8rp1NPpW5TUeEwpAi8De5g46gcLXKWGvVk6qHKiyTEWZNG9gZ6fyquLokAUbamXevVZmMCmm1",
  "key23": "4T6P65BmrbaNuwqhdzPFzy32A39i7unToF1CzqQBvWqE7Fa6ZQ7f8fKaxdwTqnNPX34ShwZPBSNKKojUnqQn1Xjq",
  "key24": "2hEVw8J5rk3qWa8MHgXpJdhKsQrvZdwPQ35ehSk512BtD29r8kP3LtRvtyWguUhmHBcHhTzCqYtCpq1kS3VEHg4j",
  "key25": "2vDd6UxPqgf3cQMbGKN8BoQUdXZ99vYUXfba2Wk5eVVNKsJ7gPxeGZWwwpLvNmmrt9pycygruYPE9HpMwRqxa2zj",
  "key26": "2Jg53cgP6rvZEVPCautf72uaXwa1Tg3TE9VpodpVinjg7nss2HQoK5rxf5bXcYznAr916XkcYR6yNsGGLbVCMtoU",
  "key27": "2aVL79sqEeWSXbsS7CqFdxxZDMS8S9LDfycs4Xvsg21gBJKKEzedZ2Bs6ueCJ74EG7XV33f3F1MgPukZAcLzop6V",
  "key28": "tCrr7KmmkhWKq6KPttpWgC2qpMwHYWu3F7chhQgHDp3cG61ZEoNCYRSHUEmBS7SbZC6DcWxWKmnBjSbEj8MsXGe",
  "key29": "pgJSchp9KgZ9XoMUSCEgTrBbuMe5rKTZF6x4EAuggx3JT8e1V69Ri4JLdC8pGLic2J3DK36JBWWpEhZjngBVo3H",
  "key30": "2A1u2F3g5FHn9a6QZHKX8v8MwM3xkfVx1hoRd4nrcPqVwhHVp943CBccgvPhZKKGBN16pj16Q2CAVmmFKA2gCfPF",
  "key31": "3uMdyWHmmNx6ZRrnW416vJq4dznnjkVkfTrXY2htpGVsHxSBjgXNCZokStGw3ZGE9jRXoMTqDycsEtZT7xLtch8p",
  "key32": "23xexfw2XGF6rMkGY1JwJSuuQ95cbZ4xwEcQLMQxURHiH8zeoZqKirMHQYgymjmZ3LqyewkBtawTC34QRg2eB5DH",
  "key33": "5Nwx9xyin39eQsGt7X9J9sk2oryhdfe2W5T37zhgcGaXwSVZkinvYwtXfXYHwJtfR9Kv3P2WkExYZ8sRbJ3BqNKx",
  "key34": "3GNoyHQPsr72UcZj3YvQNmFVRjKp1ZMKtRNnX2SWo5TwXYgNkXDGhmhDA5FCHwJCWMB1AMPiNEzmNAGTXL2QvBxv",
  "key35": "2d2ceh9g8CPoVoRiRtTZu7E6TBkLumdwerwMfuE6kFtLBjqQwCiww35HjBzqEMJiXxh4QZSVytz4hZxf8VoYVy2k",
  "key36": "5tzSfz6nRefi3BtNko2diceKNzY73e1xkmvH8uMYVp3iwLmMW76WwoZ69B5xVPBaGCxVNJzVkyyK8wZDKuhrdsy9",
  "key37": "dYoUsxCkz3i2VFMzYpy7TG93M4Aw2VQkw2QQjGnCmpJHZKPUV5WhA2Y2CZFBe8qGV1FmkztXfvpbD4X6mcd98Cc",
  "key38": "kLHXaF1sHsLCXHKVcZXeHJeQiU9YX2mNNd9tmivVbtRKxRYebcnngamgMUNQa2ZgAwQ6fRwzYS8cTNhkjFKHxgb",
  "key39": "4vVHJ2H9waUf4LCCGX6Swn2mLMFpeiZwRbaZUQmRokiErhU9rg89kMp1xXtuSdjLYrsMFa3z1YLz59MPjeyjwk4c",
  "key40": "3UYDMK4pHcrte9JPrnxPu2bhx3WXYRFbfW859LzWDLrYeeppKEpN78UpMDdDzcDHjdFE86Du25eEWe4Y2bhbmHxk",
  "key41": "5tZkMTYo6QAXq24VRa994MnnUtbE1cyHLy51QxWTBu7BcRFEUKuWC7rnfGbsmJBXVVivHHhh6u6BaBKV4djcRmGk"
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
