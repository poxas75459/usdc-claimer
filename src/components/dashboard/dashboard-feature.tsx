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
    "563vYkd7NN3MfDnk9nEvYiJjC9E46XMyz8nojVxCYmdvGDCZHxZ6nKB59EThpMitUwED4ArVbNKbYjhTTQiUkJd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32KLsKrYZKpUPu6w2S1fbkMnUKYCpjrQWbtPbx1AjynmGAN9bfPsmndK6f8X6UwpWBHWnBWgfzLrLowHHmyZKWTa",
  "key1": "DaYGGRQJjKWDaWuhwwmRyRbxZVroAeNWbi5kF8Rvx3HcVeGARgugPHQxTLPnwsH9yrrDuP7NDpVwMUHaSfFiQLS",
  "key2": "5qk3pUMpyK979cqPpjwo5GvewrfbrJMxPBMCvBdjyQfGdMB5F7uuvYA3dfASkYzFY8wNhfrUdHdC55iqojTVeweG",
  "key3": "4beBQuPJDsorF9cCTHXj2ECLCostkQGge6nXhfsKviifrCNmthAe67cU8YCv1acMzB6RSKV3dAFbvwXhCQNwz5d7",
  "key4": "3FjZcjAtnxNGb5xARTtJtvyuinV6BnzzVVWqwqSNDoJPZmUVcctaQz7SYn66m8h8RXxEPWwzk3LbvSKifHQp4gK5",
  "key5": "4t9WwkNGTF2nqA56n82yD75LxfDWk7s8WrbFD8EUjUJYtXPMZQrGHQUjWvSfyRTAZ7oMvEAcXTGFtLun4n3SsCFP",
  "key6": "5u68K6YRj4KRTJXvVqTZETvjEiPBRSamsgVxnXWBmqwGf6UB5ESXJHccLBwqgkk5sCnVbPKsiLjsoPuru8iTzAf1",
  "key7": "trxZiH3RHwkb3RE8N8v8r9emAXUPQ741vWLGPQ9YTFZ5cts1Q8UHtrp5g3mqV7uHe4LUrtedt1D9gtVrcUgNZyn",
  "key8": "32pUgq6AkcEEZe3odC2X8sWJ55AFZMy4yqrL5sk7Wyuox9vNfPCczeg291aVZBBxtWVQnHMsUb18PAGCmjuF1TgS",
  "key9": "2svho6BatbYsjUz34ujzyxAbJBi1ZP1f2Tat5km6wz1673YuKWNKwGygPmF8V7rvWUFR2DpEDMYQQ6ya31YcMcud",
  "key10": "2T3oT6D34gPN33knNC4nxDErqjcic7w1bzbimaBU3jTmsySQpXyyRtgY3woLi9EXzEGSiw4Wrb6n8Xes8icZRyfL",
  "key11": "5CNUnTThuPWJneqG1qQPNkSLsSo3srFMsgEECQ3tVSTkW39Xpis76WK1d1BWCnhhruq6agQuQztCxVihUH2DJEYY",
  "key12": "2J3pmAmQMYRfv6pVk2GUuif2wT6dhjaANeYVQq5TRnjqzuP6d2XLbySauZVABkPxFv7LZRb9rjqh7LXK9VVMqTnC",
  "key13": "p5Hvbf66jaergUMz7xdwk49S3iLW2DqBw1yjPAUun2YxvyrFLJRnHK9PRTHoDjV2QyZMkpMxSmgd3KzZR7jcK43",
  "key14": "2ARmnCDCja1EvmtFYCQrsGJC4ZgxP2D68u5qmy96uP5wkDMJzRnJpQGWywEekkkPDZiaPGVsWDj6U75TDbWabKpD",
  "key15": "5FntE1rPDAV77DHrWmsD1RZA1BMBYsawLP8MSJfakEWee9JD3dyroPSSb7advNoe6GFFxEEZ3yQFS6CEEVWivPRN",
  "key16": "4mNrC2G51f37HAjdBpfFaFXs3j4377a6oU3yBEcDoEFkqs4Mednc2piiUXmxYz5dWxz518VJJynToenusprak2B8",
  "key17": "CYsQMmwJ3xX7BhGXAEgFWaXm4sJ4Pdg5JhMX7PSK3f45V6x67jd5c9qeQnH7HYXeVverhMEy8YNZxEqf5WBXer6",
  "key18": "3qvey5wZ8R7pRc7Qwu5cDzn3XMojkBPKuZXiRNeNxS2eupPGEUpGezh7S6p1dCh4tqnLYjUkhFnhoDAopv3AUqAj",
  "key19": "wvMq3LeJ2UEw5oTpLec5TRa2XLvEKX883HiStXeUb4HrA4KPw3iaha5S7EoqwSwzHvGJgWmT6xHTeKAQ2EG8GUR",
  "key20": "o2om5x3hYFtyqEewUqaF2UsCDA83V9Hm2E2mszdyss5XLQVe2ynaiftCtYkkQfuRBTHD2i5ySM17FYpuD1tteub",
  "key21": "43udjmzhRctgTqd2sLNAALWxcJzGPLT7CuYFQe7L9ucBGeeFYAmgE8fDS9J1ywnYMDfMgFkAuDzgfEhPq3gE3SbU",
  "key22": "2rJZGDi7fZtwWnmYBGVb8YHgMqevZTDjiWWv3gXVYGL5J4WUfe7gk8MUUJMhEytbxMyWJtqeMUNJzxHD4GcFoKJy",
  "key23": "53Dv8j14SLnuEd2hZgVhiZDZtmBhMd6X4vTDytRoX64Kp3Fy26Whmk3Wdn2tKe9NMiWPQfRd1zxhLbVqBgRQkQ1G",
  "key24": "4kv6pgYWs3wm8qcAMbYGTmjw21yQDP2nqkSzm4yT7b6Dmp5LTLKz9VEBCrJoWRd8cMANJs7cvbkJYf9CQRHHpc6p",
  "key25": "2ZqAsmAuvoQH33HBZqgzf9J545JJPJjnbn1tqE19yZ5SEAEgyBNYwdwhRjy2G1FGxWCczBrvXLXd3y9xwXSPYqAK",
  "key26": "4TaCD41GtpMYz2VanWfGm7uQe8fFgLY6tE23WmCmGyyVXiR7QcjGHnyFd2NpnrtWGwjRx1TH6AvGGjSFF15z7hp4",
  "key27": "566Z9jVcTBLAAmZR1gTnbML2kKttQT4g9juYH7WaZCKfYf1ZRcZsacQCWE4bCMe9yJ6jYCJP69vj12CgScHs3PbH",
  "key28": "69EWfLXiA45L5wRgXRLSZ1PLF5xbAMC6A7d4D42cW4NU728HPc1GUs8EfpZVxpZPPhgTawtMgaMm39ewE1pGz3v",
  "key29": "3q8YZVfHsKe6YzN8eMFLNXPdXkXXnTo9ENBa9ty2pebF7gPaByfmDKA8Q39G1eUVCeaYPZqYb1S1kyWuXiUEoWS",
  "key30": "m5VbxkWpnDCRhHYgyoFYA1wzZytczLVqBR5Rtwhd3Z8ArYkCVo9tKTkGDo8AFq6aNj8d2pgLBko8AFo9G83DMvi",
  "key31": "65L6pfMSQAzmB5HxNJVnnEwkMR7Nsk4atQAKpKistgs8JGA285p3y1E2nE3TwdWMjLVfZJyN9AZTaJCokwvNTye4",
  "key32": "2rveSN8RpjQ3jFd7ecHZHxHFzFaQroJcwzN9mHhxexg2XcexL6FYTnRsCq71f4CKvUPpuSVPGX2vk6Srvz5v2HPf",
  "key33": "4tVW3C9MvoFE4CsEXw34FiJ5NLyivSKBxNTVViXEWTHVn45u8xRpb9p7DXznGqTHAKUm6rEpirr9yfCFaVQ6wvzf",
  "key34": "3agVMkcEF2vQJwzR2nTuqmvCjCQpdiS3Drn28ziRMLjrgZZQ6B3zAX2uBVUV8taUJgSyVHp7TwpNfzUCTLpciLbC",
  "key35": "5sJWP6NFBcsezGTJoMcRkBi1qnXciiNHUppzPW49LGJ2ybb3etcsXYA96Ar4iXP3LBq13zNvYLwQSbadnPxfjyDd",
  "key36": "3YsmU3qSdWL9bYzpQMEwtYvw6udwjwJ8wwXMS19yeAzRwtDUzVS4sbbizAmtn6MLog2u7beD3uDFshegDuyrAaJt",
  "key37": "5F1NcydCdLYukUETE9mqGwQMjJNEUenbspN6KSJ9Hn6aeVsXpCn8df7QPhTwTQn3ZLD5CvYfj46aTcrsyKdf6UgQ",
  "key38": "2Brtk9n6u1sR6g7i1pQuQR6u2ridGpvZBocdUo3jwXsX77jsjNMnB8gWSSgoEZnVXwvaH164DPDjiUdKV1yprpY7",
  "key39": "4cot1JdsznwPkQrsChcdrB7TKMBHC13X6tJkpWaH7Ss4qSGtEvr8BFMmXxwo66ssCEetNQeMb7B7TsGhGa38u2Q4",
  "key40": "4HUbgFRYG4ZXUFh2fAzUoMptpDzz7ndewauS41a7BtWQ6oKRmGRiggTZVboCajpaUj48ghiJ2tUU5K3rZJ21BqMR",
  "key41": "3sHEX1V5M2iGbbf7kGrMRLSNXwNJJTS62u7uxcKK33JXttiE3UaGoDCbnqyWMpE7M92MJDxiKAEwFKyaKGy3HnM2",
  "key42": "35EN1mcCP9Jh9HefYv1MXm1HiKfegQurAtW9Vfmf4ZSCMuDqGZMybDcvoyDNJ7hUMC5XCtidFJn3dhHU6bkRdjFZ",
  "key43": "Sd5ad5jFfNHUFKagxDk6rfqvsEw2kBnx27NNtz9mXeC9qEXQFNCPaZfD5fGEbK3ig6akQjXzSRuBL8SSck5HUbd",
  "key44": "4oByYF91QXU6h3hP8CTemDc7hkt8aSpbBFWwYjfYJ79iS6D3onYjzdPK2ywEXFYyFTFV7ETo1h66DPbkJZCaptQy",
  "key45": "398SePbz3hkws1HdijbyBnmwUcDAvMfGRgMoLYuztXvrWZG3c62CEywuYo5uLBJQozvKV56RJ1cRp5bVXPkwyXLC",
  "key46": "5L5YsaGHBE9WiJn8qgVUMyMfzGyG5gH7Mrdt5HxSEeg7NPkuRdkBoR1J7RBffpSbiR3jcddK83AS7tHfDQtcZeV8",
  "key47": "2koBDuYHpKrNdUMckq93XF19SDE4J92GgnkPA45vyAqWHSVgx9n1NH4RzUDJyGs4ZuKUm328bDWZDnEzK1eHSjdu",
  "key48": "2si39WpTZjV6UyKRwyeaHm6cyFErP98Bn1QZf7cxLJabrBwSN6oreUyVLqyJhW5S5o2CSYbdGwdwqRV4nN7ZKgor",
  "key49": "5KoM9RdxV7w2dLs6wZ4JMtv5F44sqKRF4MkwJpaV6TVb8sTJgsnXjEnfFnvqSuf97hsut4qEozRPvYBNJpvdkejV"
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
