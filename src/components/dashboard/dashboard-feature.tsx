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
    "2pDYGFBVU7UFcYGWYbxg3UBsTZiGpCbqvWW85Wtsuv6h8iwSdUDk5oqUMEYa9F82M8V1HiaWX8urtLmFt3tbPx54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7uTBjDuweUwenty2tmf1X55KbQNLGWrwbXcENdCDQdgN3kaBHkBMoMGV5A8EEZVoWMqNZiaY813Pp5xj4sg9kV",
  "key1": "2ckEgQYHKto5f9gwHNWyFMwkX1fu6mAEgc1btVX5TigpJf5ZFf1n8TokFNXa2HTon2pBYeWMneNc4tWCPAi7YfwR",
  "key2": "zuFLSGa69wEtvfU3fZvLi9TfNigJt9nuHEdoH5zCfDa7mtyyv5cQExUCiKaLYnFtSzstZhmxuZ9jQu23FUSs2D5",
  "key3": "qckAjyrWciaA3Ek6y8gRq2WxMhCHvbsvwMzmsuKVQx2bFH24Fp8Ku5cTgnMCFcyk6rh8CABh3nmkKxd6hAzVbgN",
  "key4": "4gAG8eraRT4kvop1rHyQgAkYwYhMSoMoX6kv6v1GWUL9M1GBWwpPaBBHBvw1ct1fBsBjouPBknPrUcits2DBi3vy",
  "key5": "31THbvviCEhupfPVbtzfu4j1QeWR7LR1W3j9rQ7bjFGBPwJv4MGASBNHPURtRZiC2ePyBGaM9Z4k4Pv3mkWXroor",
  "key6": "o2dGQeXbkrWbgcYrAFqqrfANhRkJcgvvgrG4DmDwiiJftXQRS4DuLeQ6uNQbtcN7X2XBDinv3Fw1F6vyZJvn1U9",
  "key7": "4MoWXnbPxPNoXXFgP5rYSZrbtaYs6s9Ghd7QgdErbAWWkxzPUgycRr8jHmM9D2gKDbhWV5WehTsw1r2tHonobZPZ",
  "key8": "517R5Vixq7vkAP91jEHxBK9MbuSXmrtBz8SVdteorDWfq4Xm9v9k2GwARRoKvCrPPWQVPKaS2EcUtdRpM2mLhHwx",
  "key9": "4veBzdXy2xn8hSyWfKwLLe6HFzm1GhnWcMUWRPAQ3Rrd29bRdjRGsKUCfHN8bvVvvQ6KsFrFcm3gh9nFD4AfuT9A",
  "key10": "vpkoBwXgw8Fux9jzuEahgjoqBU8PjyNE29Ef7d3xJTsAAmU2ExNkQggAQ7udt1ppHJ3Tu1Js5VZEHf2cLTjBUvB",
  "key11": "2vutpwadBv53vus41B5adc3qmL3X9vz9XsniEvkwyWVVuVRWetURqGBG4enwSpUvj5zFG6VYrq77QYDKTd4ZTSP",
  "key12": "2fFoN7RZh8gibbtnWRvHvDomZC4yheYFnRnWw2ZDLtavQS5qqqhUfBcV1cc4Dc6AFHz9qVz3D32YrbwmhnWPQZC7",
  "key13": "4ADwAJMCHfHm1cG1NqQvAPUnURt7gjrrZVHMnYVFZCCn2SpmshYvKxxm8KtRVaPHZS1z87hmGHXVqjmh21tchZm5",
  "key14": "ZSXHRPBepJMi1Sz4javj8rYzAjmtV9UdLt2Y9CAu78p1cDxpCWUDnPToDC5PP4eai3wpxMdzi9bFB5yR8mR2Gvy",
  "key15": "557sR6xLZgEUNDjAyH3bC9U11pgU3htuXhhV96Lkw7N6mKULoRzdCcUZpt2KrMVxFoFbFjoTNM4ReRw2QZc9K8t7",
  "key16": "QmyCNGkpXJoTZ6p9T4v526VuGM2gJdp4BxHFtVUp9yx53tiDmL683cYPEUbf8qjYzLk5coQB7KEGst8rsyZzGpK",
  "key17": "3jC1gQonTDXXzy5wx1jD6eMytJzREBXwxGwGuSAo9p7aDVyuSYDPUqJkMa6D6R5HPu1VGjvgKqrEXqq19pBStBkG",
  "key18": "2hGk8KeKknRKsTux9AzoFYUBWqgMCZnH88LRc4vq7vHAnNAuAVqp2NR2FFcxAWhJaScvX2yxpf3rEJzbMSi44CQf",
  "key19": "2MogSZsQCzrsgfVP4TpJeERT95SJBcnvR1sacUG7iCNpyK8fsEeMXjcTTRc7khq7hPTz1HVNq4qvTcYR7G5WX1Py",
  "key20": "4p7tmnKA7GZ4ebRTH5AYtaBaJr3bk7ZXwRwUFCENBWucFm8wrgzSDAk5s2uUfv2zwqctYNy67r1JGfFZZXcS9Srp",
  "key21": "3ibcaHaaYGR1B7AtpuoiVdBxAm6R5QNAdaeXjeK8VnHchgdz2621hMaEg4LUNgsdwsg6Rhz4yw7dDb5e1utLiQL4",
  "key22": "3kd4KcTyE8RcjPaNTz5kLkeA7gJk5CfEDPXQe2EgUAj7TJDLmdk6X4Cm24wBaUUddqPs4YLC2W2UtWBrsWhEGjz8",
  "key23": "2AorHEYw8zp8Mdq6GQ57VRSPRMiRsSmnc4LbnQnYqe6qPwVT5Lcf9G7DG6dUD7XtHH3761iiGLsoMQvReH7M4gzx",
  "key24": "2YcHfY4xWizrDYeRnrUW2M9FqZFfscmnanxN1Vb4RGT1Trg9nsvFCGKdGW6RS2nvyLcCsLJKYaxdAf5rwPPwB9KA",
  "key25": "7TGoTCHeGuH7DY6UKZnC2R4CXDHv82K7MD56Bx87jpvoZYD7enhfbko5T12rGcVdwCtnDZC1Caro5nC53g2innK",
  "key26": "2AfP4u1w8323hbBEwRrarzWzxvjvdANg6EB3rJnoBdoh7Nks7LY9NKy1LHuB6BpDd1phUfVtMUd8qUNTLvDCAaR6",
  "key27": "23G8YkmjSWUKU4B5yH1GmsiPooTNamvD8YtsexHXFH4aRxikf7majpKcQV2uqpdBu53JYi4pUfz6dB56Sbwc8UtA",
  "key28": "5BtwTKFDTbtpHnxsa2ovz4aBCun38PJdAAfGNJHKeQ6vYbVTvaeedqqoodQK3t512mW5L1mQE7tt1tNsVarZRV9h",
  "key29": "4Jw2zfqEc1XayF3cg4DHFAafo2Mccg93B3QSFMznBunEL3aMgzCs8a8JDcPrHuvnzETwtkynCAMZSNGEmFihYjMN",
  "key30": "5aj5JHNwcaUtXJBQMnRzpxqm4PRHXTgz1WE34qpHA4MqU9HRugup7HQMKBD6VwnBt4xaGaaj1m7Ezjd1Nxktjc5b",
  "key31": "5HocDycgVsreFiXC6aWgSkgX8Gyp7KJyhSjrKgsVX7tHxq1zpVDf9sLV4BhhfNEq74kRYqcs1BGBSPYCsdoTusKt",
  "key32": "3nEoMczcDrPgXYLyV5AmeuDJkHtu9HNfcWJukX99shekqwYpMQGcZYZKsAigGJgBAc8KdnTL6dPwDrSVDRYnRGen",
  "key33": "37xjLVRRSXjxYMdcyAD84VxMWB5XD2Sm9gDzYhWuGsua1ifheyJVvRrb45dXKvKuwUh3t7e23MriZGDPtwB5KgBg",
  "key34": "nuHcAJJXREAn3swf91kKhE4usUSDrpousuonXJm32YXzmSxPd1g3LjsSrGiqFqSrxZaxs11TW1Z9CRwy7it6Ven",
  "key35": "35BPuEj2XTiSkpa82x3oY2rjV9ku9kg8JAW6PCgFqtjPrY8G3omMfdY6A937Wi7gbnJNf5RoJtZtez7igNB2S1R1",
  "key36": "GMwHSBxa62MWHqyXKGrYgH5uyAvCHXggEEcAEoqXDSckdQUw1VumHTupPvqeDmZ2h1R4xboTyEC7FU2rDSHm4jg",
  "key37": "5DWK5rbxAgryZe7DA3KSQAefCrZnztQPK65HgdReEcWNAkx5pe2Rop7BYkhDMa7JpX1bgGqWJoqPtxkxVWPbsQtG",
  "key38": "3ajr7zu5wYhUidUVz6ZKV4j8kMXesWCvFz5irC117KE8ELZCEU82okYkDdJvdwMp3bTA3UPLAjbyP3w6ZQD6L15b",
  "key39": "3W6jZoVBUBCwfzYHyatUrWWgPm8sjkDqNRDUAGUakYTqAg2dKz6MYzzzTCVKYYURY5sB8PLqnYZLyMFKyxFiuKGM",
  "key40": "uNoZpspJK2ockLnv9CpAk7SyLmitTgZsUH2DgmE65bGkSanCrPJpMDDFUogYoRvaRRm2k9LPrWTE6uxA4PhEv3h",
  "key41": "4JHgy3twEmTAt6ubvMahrL27jPNTWvVSKRUF83iJ2ZvYuAVxfhMqeY5YJ1bjCv4b1jQb9jq6FdExtwUfkeZi8pfm",
  "key42": "62VT1oo2kKEDegRLtgieK2f6KeQKywPAUbBEfUN2fDZKcu9v3sR743mkGJFd7ULXAjV8YPRYqGQd2Y5mscLvaMZ8",
  "key43": "2ynmsubSy51XnYzDRXGjW57E83pQzXJqoB3jPhfeqHjWqtyjZPN3NdXQBP3f5zpbvZ4TCQwvG2GPuuH6aQm9sPeq"
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
