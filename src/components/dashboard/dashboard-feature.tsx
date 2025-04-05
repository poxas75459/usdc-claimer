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
    "3fC98DsRC6GSLHzM4hndzjEeAr6o2VURhM5dUL3QycNecQs5moJPYKfC5cL63BCn7vR5mWperWoyvoPnd8rpWuiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29oxswsL38c8krTj9j8Rn1XYm6cDA6y4Xp2hcoXNTXhjmafrqL22XATLnWG7BAvufEx8SzwrjHnBKuF6954JD76V",
  "key1": "4chM7TDRu1hjHPV39vwQ93LxrvMjZKDM7kpoiXcHRs6xXZC2zXSscvgbUdbcK6jydB5TzBFVyi2qtqk4jpaQwRM4",
  "key2": "4RnGpR6obkuq2EwaJ4kFZEmEpg7mKkXQXiJSA24tmqiVMr3ZZa2UM3oAwhfABEmqepEF2px2wYqHiYcBSNYdGfch",
  "key3": "5NWBsZ5gSmkbudL23kDHAM4F586jF7TW6obxdDuXckWeuWRV7h1NyRNeWnzcH73bRoaSDk8fQURxoE9Fu3t4D1q",
  "key4": "AuBu7oeoMjdEHhVLCPm2Vh4qamb8qyugtb6ivokZqwbNopepH2JEhNtjqiutrRJqNkkyaUUGsQM7zhQLH8Htq2t",
  "key5": "mNGpeWtBV5PieqfT6sYBY5qsdWxU55Fir2b45ymGhnhJJiHhpkMTWY4cCJZXhDc1scJHgEcnPVGPxoFwfPacT8i",
  "key6": "4qR8zL8m7Du9RedRggtt9NYWxcsJTGraRDj76f4uHhuUrDArSyR2fruv1BzD41BzGB1tbdC9EZCaZvLumaXdBy7y",
  "key7": "uzqWTB2phWPt1Qcgb2LpKYjhxDxykjPNHeNhtX58W9wqoWRY3mmwpWCTLK74jgdmk9tAfqUAsWzqbsJ31WkYRzQ",
  "key8": "1uw7BDkEjvGJN3Jkp8Jz5soDXGnA5sLk774UTQqC21bUVaHqucZQjAg9g2Pmftiru1p93jUgJXWFEw1dBqfxvrG",
  "key9": "5375z9ppV7eAm56iMjKcbPDotAixxE1r4GmkvFabwjC5TpDMhwqXQ68f2rqvTFoVvkBtpi2Akso41kkMCoQWXXLn",
  "key10": "5TMVYa7BURnVJHURmDZWP55igCPaxgpJqpiPYT7eTrowuDYUhKLhgUhrvBWcK2KQCYGenkCvBQTCNypxHG3KNELy",
  "key11": "EyWoCpLYLg98HxYQxShYAcQtSsDqF4L9jujvCQSW19QQJVhMEbTM57v4ZRn36uzhH9u5NkRg8ssQZJAHsp8UGmM",
  "key12": "1YdrVmhcW4pWFp4iL8W8iwXtgAntsRVUBoSQx3L2CJU6p2Uk2R2RehkpXM3cAMHdrqXHCiAJfYZqWXxzEAn5aJx",
  "key13": "3KARo4HCkv9XjusbLztg7C4kb9ZrPRTnmuJWLYqN1cfCEJMw4xSWnFeTeCPPMo1BDodFegqrnvUSmC4NYKK6an5d",
  "key14": "HUAzDemheNVqyg7vt7GWpnp5kuZNrpX8noeRCNp9azSz5ixKyPg6nwoAmAZbGQA54wrYgeZ9hrGiJDAtcNEs8n5",
  "key15": "5dziVZiS7Hw46ZCzxms2nA2owciva9Q84yqgDLhPvNuQGmJQS1aEc9RUQZtrjLekwLL4GZF7bgoeABmFpjzfEGuo",
  "key16": "4gcnjbXdTk6qCMURmdP17dpSyuypicNCPBqw191f58AEcXVRFPuow4o6HYD2spDDFPhx6cneg6rE7YmQ1VaYV3S9",
  "key17": "4B9GEJqjfHW6AgVkJZz6DAEAhVayWyo2jNCCVaNQWw4HTFM9THsYuJU2tLQD9wR18YqgvKrbWfhecfX6vXGEhRDh",
  "key18": "5ds16y5KGyUQ6dHJm5GA5URQU9NN6KXKezGum41Qr92jiZprZm9ERSofzAgNWWURsN3RaGfjYYLsoTBVjcr7Dsfc",
  "key19": "5U7P6HJ1TyMy75hjH1SKYyPBi1ybKBrQrHrmDjrP5aTtKQnceM6o96f2yBjaEyiaFvTKCDPR9xbrK3xivRPcdKPa",
  "key20": "YWwjmry96GkH5NrWzRSDX7XPVkA5MFQDwhnBYHWpwbYnVtrXKu2wCV2dKby2UGWf6hSxwy5n5QF4NHyV7xjDs21",
  "key21": "Cfr1L5Tng9EHcP9F96UvjGYRSCkXiLfdrWYAaYBHURd3b1L51Dt6YeT9cQbRNLafHuiFDsMmAgCRuVY6fnvErKM",
  "key22": "4V7XNbvdFw4rPud4Nu92hjtfwzEqhseV1ceJ8JWUwGRqrDqjTYUnE9QhkPTiiJZykmqEuoa6r2oQZcdY568GxXh5",
  "key23": "45UidN3qSeHaNWmFaUeCkU5cN9WchvTZnLRn4BtY3oFW1skey7VWKu2C2C7fjNiJpnfnL5ZWjmxoD4a9GYK8sm88",
  "key24": "58YmhEKXJ3KV7sJC8CwwaedmDAeEPVE4TfCB9t9uFMbWkhqDdAPwAGWPQsGrnWs3tgmDNk1QTGTeG9C5keixM9hB",
  "key25": "2pJ9xrrTwomhdNdj78Jd8TSbUjhTE95GmciMFgbJM7LSvGzuvViQsFx2gjAgjWZ1U3kjXMvASmcQBJwLgMbHSmLM",
  "key26": "4kaV4bFGJqTtoGwx5rNCVhEsgpffDch73xsPFGafT1rY5DPax1FWw11VAE92gAmQoB2ZWRGCex4dbwLMYrpSfuGz",
  "key27": "3qRDdabj9ffgmXmPu6pwTzv59BA7ETECmo5ZTmFA6nZY1rReyGkBCLypYq3SJcmwSGjaCJhJhfKhHKbVVn2X9gfa",
  "key28": "AuESsjRTjGdn3hrB3MC7kDYzLBijWvYXjzmss3ypqTMGTupZimnHXBrqGpw2KS6oKB3WZWrrppaG2VYQnwUBTxT",
  "key29": "3YwzpbcLiZbKfs3TB2A8D3aEsurVv286NUSDKW3oHmYsfJwspdu5k72zVnFmwiLRvALYDtAmdcBebW7a7We2HdEc",
  "key30": "4EDexLzFqJgyK3gENcH3sub8ewHCGYgaxA6dZCYVRS1ymBrvXi5ab1vuQuJWA14V1MjuTsRvWYJvsRgzemvuVftR",
  "key31": "3Hem3BuTbFKuMhPY3Ege39qnCRunKz5a9yFNX3Az8oQPML3BzihxhUkr9Jtpi9nUjCYSJkCdQRfhTnF3g5MdSYoW",
  "key32": "5qoqm8AxzpLXVGpufQnmctbUCpsMdHjbULDWP51Y846nCnFs6RnczYgeVpz1FZHiXxTtGNyxCLK5KjPSMkVWodgc",
  "key33": "4d6E2KUw7XhstMLSwBGtzau1k3K2nB1SYSNRsYHoaFk18oqNdDkq2MM4tysGozRm4VRuLmkaM2jaJW9bvvinZhNL",
  "key34": "4Yej4s8iLTMpUto8eXh26Tqv2FAY9fkPt43o5UB3YpaNBZV3zV8MbZUudkMCE8CiwVxq1hMtrswv4EYJn6iXPo14",
  "key35": "3fV98DJsGJcmvGMbSwbJbmgzb3nxaHcGUKmEqpn2MpreuZ54cZyu4Famfdp74Jzh3HFhRWPe4vXU14mfTk4XS2Jt",
  "key36": "dSyqobszecfE1dJZyGrpQMXcagdmSZrU2yzyftTBf69epGTd5AtN6w64MGPUg6sNHjttF2v6yxiEaPrPqS3ZSM1",
  "key37": "4gLoH829JGAR6X2FtS2oB1ggBDwoztxLAXWa292RKEQg2bcJV3WrgAsmzp9TBMQwsohgNnZhqPPY6FikNjPekB4o",
  "key38": "5WZhWCsUmVK3xy3u8g74fgT7ecbGpEuUkG6KaW1u8Z3EVyPpkvkSgZeEBC5SBQJ3oLC19XhNddWKRYeNbS19XWG6"
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
