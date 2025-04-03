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
    "kL6WFY6arpDTMfywMgyT87LV8CF1qPqqZBuHfJxWz1bRuDVDhaCZhavgiLpeu4Qn1FzT1AYp49JdgcqsbaFVmfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpE3QipQRyBjijSptXGkhYthE44qfyTtHM5JpAaz1sGF1DVVz2afCoioM8KJJRXp7US8AFbr9M8c7paHG4BBhVr",
  "key1": "4mBrDJpxHmzB38AE1HoD55efz6kcK74xPrKMWZH9GqQusCAQ7SR8Jvhx3zDRb59ncvSRANY9rbWBPhhy8XrhN7Xg",
  "key2": "5wbWfYFWrayXugfN8nsmVxYFnpHa54EeTpAefWGqyqsHTUeagapkL4cikzxQntbGeKmk8TGF5c37X7ZAvUnvbujb",
  "key3": "2DeXR7PDtgPf7iHMUDzi2Wk4rQ5EMkwqztQccY9JctGcrjUexoyq7xAqJd89Yh6ugiJFdqQ56oZoEyAjtYFJdD3y",
  "key4": "2FPsHPPCiFMvzgxojSJzvqERxEWCcQUpftjN9GHaE3SjUurpWNEVtEQivg9vzXGZcXgZbvH4842pjCnFDquHkNa4",
  "key5": "5MmAUvLUmDdHGAhBKBPfXwjuP3vHEP69wdYnoxA1sDv76MnikrL5B14i1BLY7xbnqNqtGVXZyv74C7zonbqwYH59",
  "key6": "pW9zRuBxAHCfbZAFr49EcJTBXiQgQLm9rk1F9ATmakojQet4JB8QGq7tZtypyoyWQefJWa89picgv8nPKAQo1Ae",
  "key7": "34e4NvziJps6qPhsBtn3uSWUWwTAcm9efBLoohxtXsXEtgnpjXoLpZJczAW9r9KSHdwZXKMnpKmWhfTHEhFz1KPu",
  "key8": "5urAgHy2sSxHxuHNxuZxeSkiBCM2xofV93VBqHRsdeXtbPBYgAkTvkW6nCYevp8XV5br4f9JKFCLmxMSEX4F2wfv",
  "key9": "4epPheRemvWQV5U7TLZ9xQKAiLbmV8WfNg2bdnZRQtsr2K4LVU7Nzgn2gaaSATkHfsGHUWodouApLYu5diLDHqEW",
  "key10": "u4prTiSehU7pK6XJEVQ3io6nQH6WycuJzUtjp2bSevvQhfM98uLHFuQc4kd5ik2mLJH4omxaaHgVWvTzozZJHyo",
  "key11": "5a3D3hRddStrfWCotxxjqsWxsaUVfwQc4AZw36cUwrKNmZngA6r1NUpetzTxyim3dsrWvJkA8RxgbrJJntWhKZ6L",
  "key12": "mrzY7Wi1SiSVJ9V1a2Vg8BkFyUnyqcLwpegNxDmF8KdUjRdtvQFU9FSso9ArcVMawpMrANBmsvnJ3H2vuUeZ18N",
  "key13": "43UPr2LHzhSUJxhSfrCB7At9WqJpDJSabzCUkujEpUMKos8j9yPRraKc8Rb4SGk7Z5ZK3parcXTgX7in8Zth4JKU",
  "key14": "3xE7Cbe99qGwnAYhHftpcmcwJetr1c2X52ePzVNpr1p68EeHVihQ9Q1NJHVXKefchpZCmYXRKxwaCp7jFXkBqRWc",
  "key15": "R9Mqr36dd39RsP4jpKnD1VxvkYKK3zmpdTty7CoUrKyunRvNsXmwxVJWXsVZdeifJGkoVwmzUcQa97XjJD4umWy",
  "key16": "4MNox8fNVop67Up36fhv5Bw3AAr9B7qS5CzzMc8CQ6BABRsE4aG4GWTKnT79SFF642VkFjRpiKQgcsziokn8Z25J",
  "key17": "2b5a6yUXWVSUMq6V7V6ZqKZW9uSG37arFgjtA8x9f5XM7mHfkg9rJzZwrejU4EgekvSncApr6BgsN5P5uq9vZDz3",
  "key18": "3bdVpMkCazvgn7GU6X8HmExR5maQLhoQkxomvgH9QSdWVZdNyw5La7Kz6yAMSS2t7dr9ydTGZEqBwuuKcK9hCNey",
  "key19": "33f5LKGGHoRrgQjg9fVF5YR9Ts2ted9oMUna99u2tHzLNbrd4cKiSDCTiQrwuW4twaQcH2Y314SHasTf8FzgR5gK",
  "key20": "3KDgv97GMSgeCyCNDHL2pCCXS3RZSncJNvyrMqjSryALyJDdWjcAsUbrEvUhCvY3GLddovD6ghrSuwc7pdzNL9vr",
  "key21": "2MCYJknW5AQdB982dBawyTqzSS3jS23JnmNdwdH2HLb79XNhVSqt9FYiE5cmFnw75Qp8457Jwm3sy6EfeACvXj56",
  "key22": "KzvqVop65eGRV6h5N15kneg9FeDq6bfZMGsybaacZQjd4wq18ZuhgLZDnuGoANzgh8oXfqi4AHApDzEuehFyeYx",
  "key23": "5Xhi1Ay8eBJuVokSd9JypXwtahKnVXCVf1dtkUHjtftQjwmuJaj5Cmr7ij12wuPFDLSJFj9XRizBEB3Z4Bus5NRU",
  "key24": "3UM5mo5W5o5mTCXb5YEAjUDbmwKA9etUhiiXS349TBpzkME7SVjStdnr2whgiZDrH5CLSRUKDnwBvei2dMGQBA9d",
  "key25": "QCZbsJqAFxGLaHFnehJTAaBSxXRZzmg2zWUF5DxqELCo4xf8WEpyQYnbZff44BGkK5mfaLQ1jUjhoUEPi9sJ1VY",
  "key26": "2Zw5GbkKJjURpAVPFUGg1eUgR6CEMQYsi7iTixATKEQuX71hv4RihZze255eyZy5io2uAaMy4vyGbBtaSN3zPMov",
  "key27": "4bi8ivnbunphsmbjc4xrTBziwqYYrTVhji8RAPayhP4TrdfMBokypGhVhN7Ws2EoupZFroR4XvCNsYvnrEtvckxJ",
  "key28": "2DnhcXDxtcDofTQRbfX6pxtHShs6SjnPbm9NUHTwQKKToe37ZF8w49BP8emZUpnU8bbroj8SDBjDmu8TJwaY2sds",
  "key29": "4UdgSxhqFP2eHZDAEbZXSJB2XVpJtrAdsRqc5qJQxQx9XL3whn7ryxY5n6p4WGURWcRaS6Kdki6jGoyhJb2s4aps",
  "key30": "4yY5kkEL2nn1hM8rv1Z8cigFqPx8ZRcs9co7KHPXGiQTPWz5e77AV9q7ipPewcf4nQA6wBgU6unCambzkrRkAZMG",
  "key31": "53taBzpSxbs4J48MrTiyqwzKsrDQpPeWsdNbLx1vzxHmLmU5pRx1kJ4iCYgJgDEU656NtpUBzdpKxX6bNg7nEFeY",
  "key32": "4Zjo7XYkL9ANRNosdgWuYPF8c2gzWSzQLjuoSkeBxz4N34sxdHEtNUDGQbFS28PMRoS8awRvSov2tPvew67xYMzZ",
  "key33": "3HiCKUgLXA7VMr3RhhU6bMdNEJmnpXXU4gAHWP3Zmn4czaZC9zJNmLgrm3q44qaX7CPJUpbNMNYxRrUtmwigdePJ",
  "key34": "45yEAty5JFSYErbTS38ggQwi7WAFJujLokqPun2yfDhWVUCtbmkFfdhqaFXYCKcTur9UkUTq8aepiEg7fojACnro",
  "key35": "5gWknDjsP6rrhCprz2owbPGNNmXxidhouPSj6vhypUyy2Y9JGgx5qo3hxBfpaDCuzD5uBakoih8VM33MZKMLpS4W",
  "key36": "5rRB8RKFhUr8Y8RDQ8C728yW7ndtifhwNYHnKAJsWUTNZotUSWRBfdDtQvdB7Kk1wRqHe8xyUH5V6BD17cNbEhHo",
  "key37": "3QxSNYEaV2M8av2rXFxfpm8Zyr5t5zYUw5SDL3CqSZrXtccSxgEL3uHBfAR52vR3Mp8GvRHoCR8teHXdqKrXP4YF",
  "key38": "3JSPxFku1MmGSGdVDF6A8SppP4XGC18MWzgiWq2CWjEoeAHS6G8btiFiu55bV8Goz7KhF6btMJziX3jd3g2h26QG",
  "key39": "2Pm33aMFMkA6xHXUxSEX2tqKaLXWhSe4AD8tMTEn6VhFdJFx9nh7m3nfwKTgtyFRuKxncjnRADZV3q3wJL21fKQT"
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
