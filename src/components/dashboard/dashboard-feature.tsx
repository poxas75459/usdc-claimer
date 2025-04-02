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
    "5cBEUfqY17v4yd697753QfKsBMTDXaVZudRfZ3tX4i8DHaD9F5uCgMEdpjCZiFDwPhv3NhxpL2onfg4HdDZRrFDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32p2ydCy6476fKG19QFHHVKZbYBfUW932RE7ep58xpjgAn5wXUuN7oerNfTXnFFMMNZK3NJJz2HeerYZtn2MbKqV",
  "key1": "2hHbx3vn7bxU3ag21CMSRwt5KZApaBqi3QMEiyEu3VZri56drGpX8UgDb9S3Ff9Lz8dYY4sco8kCdg2Wq1csLVcC",
  "key2": "uhjD3Et7LkBE5BHYFW4C9iyytch2tTKSXzTWWVWD42PH4EgnDLvcQciQoprvCYKrgr89fi8ts21XaFyxc2Rx838",
  "key3": "5g8RKzvJSFrvyAMXXqJC9f5XfcmU6CUEtrfexG6DK7Bp48rYd5q2ZktwAWGwnugJceGJxf1Vds2dxASdp9SWakGN",
  "key4": "jojRizbo2udEesmJYFkxYXZtv3Csamj9HZMBp9pFA8DVYSrSX6WG9QzeYyjonsE6UbA7jTGXJL6eX5WTvbtMuPR",
  "key5": "2HaZW4SfqMgXcnFVXVv41YQ9SBasQGQUedir6t5wQqgTs7CVHJWwpg1nhA3S5g4JJLipRHRvDasBJMS9Z8RoET98",
  "key6": "4hytjoCtTjnayLrJATZ3Gsu3YknWv5evmJ2QtHLoUWNRvweGztAzzWEmjjywjVRJwVY6R5YD5U7Ya91KBxqYUkK6",
  "key7": "2duJLgHftLVfLKJd468Ny2FGB4sVc4PSbGAfAP6WjL4LWatEhWhqm9Kc3LcdPBAD1ddMfqggC7Esf5eYvvmeUVxi",
  "key8": "4cumMVfmpAUgz9WjBqFv5gGD2USi151seNuzywS4DR9GLhjrvRTXe5qAfGNkydzLr9NcLebyHUZxUcxyfc7L4ySi",
  "key9": "5ABMRCE1AZZkurJPRYLptKfBfhja71phijwxNKMQP3P9Z3svjEsnXBVanbiopexUfDx8haCMJjfcXra47vorARE",
  "key10": "4i1vrLbQPWzajohLbP5WbkQUtBDZ3J5DZEKbmyfrbu8Q4GV8iMvtYqyqRZzfLMr4B6iYa47gaiNRdkvoLznj7Dw3",
  "key11": "2AgroVgM34UYD2AT3nsqGSRsyHiHjDuszeyDy3yUsbArWQvDkS7D3xCqUftPBzKmtJNdPfETNCrT41nT3urC2x7i",
  "key12": "3y9zMBb9nQnfwhKQL74cy6izN2qWuTeAnWQNfDnChPAfwR4aohWk49o6XthPR7d9pqqjWf9nW2kwLhCPSjXwR6a",
  "key13": "2y4McLb59L9C6U8CZwX9i3yZdRYXfLJiQpKVVZwR4Zh6Z5GbVYC7qV3U91w5t11uMzFJWkN96DFFhqrzGKvipJKy",
  "key14": "3BHZSvaut5VxPWuishVM4snR1haAyLYq8LPoTFHcC4Q5x4bT4anScob6dvgQVY9yXRp3S9C5gLE9wUBTvNPAkNqp",
  "key15": "3NUfgLNHT2TD1qiUqXPbXKEb7wH5FyFbBe7RZQC42NmDH5eKKEbWVfXKAxUpF7f2ZXxGkge3cU34TZXzQi6jxiNq",
  "key16": "2TmiRgFgVV15trLXz3XhxQDDpKiY9wbiwaR83B35HMbeSJ3sA4JSwyUMwwazimecxAL1SpCLgtdktpGcGGqZztu1",
  "key17": "27tZrSSWwMjqLQdkn8Ezs5sv5dt3RkBK3pupmSGuNAhXcayDvaRzKbRCQq4RWgf4S4qPExfzG3PcBXHuDgiwzGPh",
  "key18": "5SWaVGWEEjpLE67Yp5io9NvuG5F83uBLxEhhjNP9Stfhwc282MYKSveGs7i4xotgbJAoQMBvCY5HPhSgh2vxmh7Y",
  "key19": "mmMG1WGstw4Kc57FBpBEWhN6Qu3zTCmFkjTYcL4gm2KLchuoaa4dP9uvvX6vVvVT6FWhuV8D2MRiAGAECL3WtAa",
  "key20": "2WsFqAZQPSwDDwvMxn8S2Emk8Mdz7F7XXewDEf6MXp2nJQEhVbPB4QapfYxNqToNysJzLxes3f9yrnTuNCfFobb8",
  "key21": "4ysSFrbsvomYG8w8nAf5MtDzUCcudf4gbfJ5Jg8FVodWn4CJDKBPBBZsjuPkrCsERfGGbNWFAV5TwgvNP5Pyeb2n",
  "key22": "4Yjnpda8S9bd3wqCUduZrDYzUGgNEYMoFo9Ky8BobfW9apfzcPFz33bn9qhbwPYxTVejsnydjMNBkuYsR8rQfncb",
  "key23": "5NC7e9xDA3jZDMt4sd1Gan6Xoq4tZDej67r17AeHaqULCc3meak6SsYj684bn9eNkSj3VAvPTFu5CaFJ6YEE4una",
  "key24": "5NcYWJCtgJKypRTxc8K89zS3PCNE5UhcMMn3ndjchtCB6D5wGgoFiHuzeWSia1rWKSmU3NbdXZ7xRZh8CS8L2KdK",
  "key25": "4YwkJTtzRdf6bxzZNUQrvHDacXo5vXHwQMTxiL5aec2TabADkXGLscPDr5oiq2No8hGrr1bf79C2c8t45HpxHvFz",
  "key26": "3yMnfc7KWroWezgxzksonj4nb7CFgvv6Y5dsWY7vb6nWxm2PBjdZtRHBtczmQAtg6YythGDJEfkArSdA9bcvxmtK",
  "key27": "KuZdQpEEcX1MFC9k3vaMSpnWYWNfWiMPFZsHL8u9DNLiJjj2KwrAy5wBfQ1E9a9dFpGoxpcUJ5khTUnMu7xm3hn",
  "key28": "3163RPN518ZnXHbHe27tYMTNr4BkNmgLHKY6hoztetPKU6dhNHfj2WLYC9KxQCZn1akUqzyNF2vxLYNz2UEP41gG",
  "key29": "2ANVCG6oH4zbVxTLjhh5eqWotHuqaCBGwjkvM2yQyRLW49o3FhU2wQvvn2nrpcEXcZ2mUdfuDebLUQdr2HHKtbND",
  "key30": "4oU98bpaN7Rs1CvMdzCgmUW8Zc8WortKLquzaoozzERiMPm8ybEFQFvx97r5Ke5PqbAjYf3b11APtSs45hmYDF8n",
  "key31": "5JtRRsfPzNS9YaFPyeGYe7P7qFp4rraXA7dn7VCMYwYadppuzbciRUVQ8fjkqRZotE4MhLTNC5sdhKswH2DncdL9",
  "key32": "5T6NGo2WVf9bJmKQD95fj9p5u1uLb8jHep5RPCZ3jejpEjwYwzcb44ZALiYmrFyv63R5gR8i2d9gfnQ9iz6zx5tc",
  "key33": "3JuGuVQJwuGnGZKySYVi9ytboHRNPkwWfLL1aky2mNjFLnRkUVxtVqSk5bBSn6Lcfdwjrp4BDA27CvZjS4VV9umB",
  "key34": "2LjUrgpiMjgW9kpejTok2TjQLCJ1ksVw2gKniaQTx6hL7721dUC5AXUfb8sXi649JAZzfvW9Lx8ZaKd6Tg9AP5WF",
  "key35": "2jDdT1bLhi2GerjWErn25G2R3WZ1ffTD2VqTVuxKFUGmbdGmU8GkTCeUybgfvNVdtzvCszaawDP88x4gmtdcfLkU",
  "key36": "3TzsvSTtdnAYssV6hcLpuwkBCXjWUaFmkDmDN1VhHRS2yMr9qchKSN6bxU5vDAxtiNaevb59VYnbRr6f2ypoyqLU",
  "key37": "48VZ5vpANf5RX261srzsbPYmXNd223xAxoFoA78GNU66hbsHZazR8xqM2zaTRVd79RCZSvZQZsLf4C91LbwTCtHt",
  "key38": "5qBfYXGV4wascSPf6mQKqNJDviejsjfYGcDtSboHim99n1oSrddqXsxZQki4EScz98UdLzMPT3VW9cUKSHZr7kEw",
  "key39": "39rViPSUmxbVNcANMMqUu11FuHf7skGfQcirvy7PNdQpEyZBYSbkRbWDKfcqsjRXrsQ9AXPCLPhM54rGGpEuXo6g",
  "key40": "2WvnuzVH5uL8VD8gbRERa7ZukNftpbLxswfq4KBfdzk3eDaZRGvb1FJxCboaz3h8i2Lv1v7sQwNpQCcDbsTT4CKe",
  "key41": "4z7ChWbWXXdZzqSBvVEnc61bLNq6mGimUqMbppdDRzV9KgHVf16oXX1zPLCSgteLkfH3BENQfDsoGZoHkXqJktXC"
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
