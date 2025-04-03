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
    "4AUTmq82XhsdE24LzWJAPECZU8AJ6jifiQ8muASkb9TJd2ZXKhxM5eURzk4nFYoMn4f3Xyfz2EYUBD6KqiqxXzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etHG6hRRDNUE7njy8kXbdTrUkU6CXot95oYai6hSmYYp8PTW7AZ87LdeojAgVTtqmaLCYjJ5tpDat1dVXBgmzQL",
  "key1": "5FrBu1P1Q6B4yK9KozzJm8DtpH9EqymyHX4jBPG1rT9NoJY3evSeKyvK9CvRreSRiFNVXTEYLdi2N7EiSd9qAm3q",
  "key2": "5YVyLoK3ndaz3it53RXmNtPWKABwYsksyyboo3p1pFUG4P9wSeMh98QHDbrP1kci1sRRN7uxGJ1YTnyamvRHhveC",
  "key3": "2Yx8Veew14QSF55SaG7hLve1b4x4X6KjcNqjo8Q5eJ1R6xURPtvKACQ55Yk5SRwW9fWigoyxbDCbU6PUTxkUBLe3",
  "key4": "3UhuiSFopgfL4XAHKhqbfMikN8GuVEG8ZuqRRJZzw2ZpYDbRcrWNeb1XTTzMQaBvSeWKGeVX8QdFVWfd73pgyW8n",
  "key5": "4Fxs3nEkPWWyQ9VBaJpL5VYLzobJR5LApm6fSMBjm3qzw3eC8FatMcWr2h5avFyDWftxmD49ZiC3WWaYo6zjhqFB",
  "key6": "4WxCVaYqaHar5wK6dMWDmRRB789tJ8bk77JkJZcRqo3JbBqNoLRCuSa6DJHBm1HhgJjFMSNVe5uDhDo8sscPjQ9p",
  "key7": "2TMaKb5FaDT4Zt9H5xDkVN7xAW26GGsQv2Z7w96qHP3qnqxCg7wKyxk8n3uSnAA3SH4zKamNtXDE6H9sYuj6Rp4Z",
  "key8": "VtvDTrLvpv82PVCuPSYwNFaLuhRkHj8K5T65eeHZTdKnk7mn28HcmZUSmMUyvzXArGB7mhJwVfqHgVXMk4RaFpj",
  "key9": "2q4B8Z4yjss8VtgDsHRT6NZRwDPLKcT1weA8cqijC7NnF5aRXCprnA3s2iQ79mdQPw1fYXpVya1vQfEPcqMvo7Yq",
  "key10": "215X8EpvKsCh2A85Wd16g3hAyBx9xPAd8aC2cukFh76kGQYb6bU9aFf3PX6wJxoBXJwCmoHmbv9A3o7qEiCC9yhT",
  "key11": "4Kb2CxSMvzTN8nAHNjgCgUF1HpkC4WevrwEkSrwCfN644i9R5eYDvfdoY1FEX2gauf6e7RZUZEeMCUQTv3AW7qKa",
  "key12": "2MEHCT8i3ooX3NMjF3xEE2H1Vxv4Hussr5bDEXPLWPcgeVh3fSg2FABY1Z7gdhFgfHxTZbeTWqscSY9FR4Hv6Ly8",
  "key13": "VD6rq87bVeVMGNtZPrNRQnV1hn7FDKwZtpYB8yt3MCMQhhMWyHRtFiSrtjcEu77qAjwqButKvjNhStEU4hYZQQZ",
  "key14": "4xjZ82nTrjDDsPpXg9ZYfszKopGpJiDnVsBLp6GumbSyYeJY55LKJDM6itsWaDLH6CeaNXnPRXcUqGRgRbgx8mwL",
  "key15": "oScNhgs5eB96Z8dEWowgzSAgWDKptvrSPLFoaoRJoQJZ4dmtXXZrYkFfrXybKssP1hATjFo7a5J1ZZJcSRpJhuR",
  "key16": "51MzExF218oBFjV6HWSQWXqseJnDrKZcxWzjKJFqR5U8XwQnHjBjkDScE4THQytbKJrtsMHCzzRQwjrjEHhVCrrT",
  "key17": "3j3SE9jyc8QgnwpC2SjTVnqonAePmiiMfV7euH3zKRBEnQfo7a5Sq9Uv5xccosnXdDdXnYuz8Ae48YoeQV2YXv15",
  "key18": "J8sUSq5mKJHRDhPYfNY2GbMvWiGErAmaRcMdyCd4DMLeyYoiWaos5V87fLtBnJWmM25DabhcgCbsx8BZyUNzdMp",
  "key19": "4KW6DUMuqgwngRCyk96ZqehtBQ7SdA1LN9rAH5YiYNpLngimxdfE3oRFgPSqToT1yGU611Eksc7JAcEgpW74pzTm",
  "key20": "2uWsExPjj6eGReaF7Vzxe3X2jCLXp2dQ4bypaCJXCZHMwed6g2PEcA6df1KuCBE8sVdSPFKw4nrJMHMPAQikj13h",
  "key21": "2yf2hoMCeEtgvKqw3tTtsuhAYSn41JeAjor7BtbdcsirD8ALyDSv4tkRRxeNRppgCk2FokGTLJDg9Bwk6tpj2a9j",
  "key22": "WVXfe1LceScnMqUt8BtbPSNjeiTLyrhuDxoMCgMF81qfQXqsrJVMKyqXS4Dvfn4yrMRmciYez3TzmEYLVMKiYJ8",
  "key23": "3fUFbccXM48A4diPHWc4h4JQWoCxAtw9jmTbVPMQSMXdgJqo9JeHkg9VjgkAnqzPh9itcgGUmQU56FTVb3EeA4Q4",
  "key24": "5k99YGUhjeQgxDTgfCof8sYtRW5UBPqGqR5PwjeXii48VVGgFjRfwDjpANUmFMovkPEFMYPMuio3boJMTtWG625X",
  "key25": "3NwdMpRsmaXrhJewpnvYMu4xDQoAYLMkYk7ESuhHn39G6nzNhnwCoCdU1ArnsKdNZt1KggELdSmsuiRyCANi7eGG",
  "key26": "dq6Yxue6AhuW5LBWT2joPGAxLgcnRRdae2xM7cCdYKh6Gm3Xg2K4YiFhy32uAw5N5i2pxta75JWrzV9npV9ensb",
  "key27": "27ryvfqwgBpB5ax4Y4RPz9Z3ar2zeYcb2LZwvhpyphNzYaD5FF2p2EATXC8cQRZ4Q5JZz9eSyMGeZRJyEvE8GdzM",
  "key28": "KEwPwQigjMZxhyvaj5ErEd2BfzQKQGWFrN4ocVYkZq8Sj4mWwwN1EevykuR5Vm12srjxrMVq3HBGkZ1uG1XVoph",
  "key29": "5mCYxbTkk1Cnz7nUowgrN8Z2VPdUGaiC2LgUrAcDzXwFT1DjvcE8JaiW8m4Bv1iXRnB8r1ovsjTENMPE4hYRdpsL",
  "key30": "Lqrk1iZbWchuKwasPYmMY89oneTpQ2v6425wczaiqPxyivgN54VDH4e5VG4usXjjreoJn28Cj4ECmtpvzezRHmr",
  "key31": "42qVPyTBynZHiQwKL2epBScf3gZduwmN1LW5HVcDiTVXHfG6ndZSBqbqLzagxiZz4WMZZj7fMGWYhDeeGDghkoyC",
  "key32": "5opStMxHPQP2DPj2cvVvLJuvHMQEZFmjx67iCt4JgfipRdm6K2v8wKFZuU3jgEE31wYJxxgWyNPqTcmPSoqBoZiL",
  "key33": "5N9c3oA9YeTQCqYioG9uyo4Ps7q3YJ8FPzw3fVmaUicwHDnFRkZC1P4aZuMqVkEBXAzscMhtGVTsj2fDa6qiHMjg",
  "key34": "2Kir4ucsL6dEgUy6Kp67J2FqqprgUHMnoKt1c8vpzRJfSSK6wEGbArCNUD5dZpY7zzLmet9usp78SnQy1eRv3kuh",
  "key35": "3tp6GN6ykBUZ7dZjAfC3XMhFqrC8KGxPFaXHiF3VSBkN9BDU8YGwZsvafBtiyV5pjmDM5bhHNTp8FKvb91EwsiuC",
  "key36": "5qP9ypWzj4bRU82HyYUeua67msuQPrfsEKvJv9pm1HDDP8vwgivWipQeBbNo5UGaWbqPQxk2VGz2jNswH7H7aLF8",
  "key37": "2nvGFqk6RRiRctEB4Z7Tj4dUuppJNsD9DCf656JJo2RPKEe45QLvRhB6q7SEgfcaxFpH2upxgCG9eAjcvPwNzpda",
  "key38": "4TvqWWQF4Xaz8GAmFhWSy8yk1KD8pLfDn1akNzKbcX4ebJJAAWrYmbLrPg6zMf65onp8SQk4eQ4XRTUZjqAcs3Yy",
  "key39": "39VrcyoU4qJiaofQNs5cKmrCZfyBwkehs2TUz8muQ6zg2tiVfHisBzqGtdFMKYw3FwjNvDaHz7uZAY1haNWB1ec1",
  "key40": "3Cwonmpaa1nL11bkLM8nfXjqwi6QXyywkLJiGyMfTmjzBFAWWN4uHXhYCxJRGnmk8zCszpE7eGuMvz3bp7yWCLEr",
  "key41": "3nxFFAnMCBDgHukjSTPRAwc8JE6BH4YXyoQJdS1jM2Z2r3rxUc99WGHtmum99gHZiZ4KcDuHX8rA6jaPydrbELAm",
  "key42": "43NYcsEdtJQCSiQN1mWfFgo2k24oBnFUBcL6qToiJpMCHvU6FeXy91zegizJizwdH4FyGUBMDpKtP9o7X6LgWC6A",
  "key43": "2VmG8Z8XNv5KM6ujPwfSnmt4otbTjkeMczpnxCfF2HpyfwWMds7NLXqbVD6x776WRcYPM8Tx6SDphFDkK44UdeeZ",
  "key44": "4ekbiV29ziRMaa7Fcy5ZvTeutYr13JAY89VtV72eXAqnmm3VBrmK39Q5vv942KF9SHYQjCQ4ApHKnfzCcCczqqmJ"
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
