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
    "2CXLNEJ88EySDp3EfvzKzjv1h8VNctNXiNKXU5eTpbgvMEeGDWEw4iM18EBbwM1Zrd2Tkc6meQS7fi3nQpe1F1C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2En6CYczy1qUJYMPhoGYG53F3wYtxXGgQLpw3nLC7SDj1F4CNPmpE2q4NMP7k4hqZSKr26GTQjYdJXH4EHjmZhb2",
  "key1": "5nk7y5x82AQbonBqGmpqjCtotft7m5HmGyvbdrhd3yBte44L6Cfk5AP1YWkCfYXcfyWSouf5d8rNbt3mu2jq1yLo",
  "key2": "42eQm8ySbzm26PAkRyf963zJMD8cKMJuA24R7VEg6xAAEpLACqA8cqPimfAQ2T8dqW3Wx3pFKiuHuDbrMWW9AMtC",
  "key3": "4k9sjTuED9Kb11d3jyvHG4F8U4tbGZkA86TGkQYsvN1apR7XEtpFf7Ft64uvhCKxVf8TSbErcaoyenkvL2UetARE",
  "key4": "ToEJDoD1pLm54ajYV6H3g2CJuMhticQaJG833SGHeuzFuhbGmnzVazXn4VbfWuuZjnKVcbFdkV7t5cY6XVLuN4B",
  "key5": "32P7yRcwDX2EwXA8PXSh5vKWqojEu2bEvB831oLyEEdMyDaUJauAVipx6FaSYo9AKSChu5d1vEzgMjKrf75E7vVb",
  "key6": "5jEWj7gtHB71xboZhNnF6cw5RrgGyAGo5Ucujh4NVV8Y6j36BWcLG9nVYVmjE2bya8GxuyaUE3wMzf9grMqwDkRW",
  "key7": "3eWmmJZhByEGmWpGEg139ugGVHwzcZjyTJGZhdSfER3rhDxEFdk1RJQtHAt2HKdBJkTiHUaBsFpsoV1evxugi3qR",
  "key8": "4uAJY4vaBGPN42puwz78QGsL1YDm5AdW7x1SiPHneL1WaYqeWGEYMzxMKHSLeYqyH4i6XtbmvBvnWAGn6XoxAxfC",
  "key9": "4HBvWtNaSPENToJ98DTHDs2qCfPAxXYiY6Sc5Qgta2XoHYCLjyxXKJTNJvfxgWuwHMLs1eDVxfrP9YGC61QQ3DXb",
  "key10": "YPbCVkLSPkGRrBMFUp9DTxrrndeDaauEe9Da6Co7mfoBR3y43s5iYQaMarWN3g23rK6ibLxCWGrCJqS26TGEDb9",
  "key11": "3U8oGoqXQSU1FLRBKsuaNCrLjMnRG6e4bPkCpJf8iaFmhXsEKqLxFsEia1dWgtLAdDSE2whwUfmeTt1SNfF1dG3M",
  "key12": "5NUArTtfHjUNGwn3euYsDUUj94VUZQ8F4tXNZB17V6CVDyf3VDmcmqm37tHhgvB4bNvBVb1G62R81GR2coB7oUrE",
  "key13": "WRc1h5g4hoWwRVw8YEGFCNeu7a9eULF6Q9bCGVwEvHzrVRfFsVfDu7n2t9UDahWxut4A4Ufq7rEUrAyyeTErsAu",
  "key14": "4b3LsZLLQ4gR4QLKWA88bpbn7P7X34gnW4RB6ZALQ893ZQknDdX2FLk2GMix3Q81W6S7V3brR2XuuwMM9QWagpYK",
  "key15": "24ofizUwnHSodQiqbRxxBxtkTmCQ2b4e9XqU5v4T1HNB7MXCPtuPi2j2p7pz1CGKbZwLFYqxNNH8t9zcpLpg9iUG",
  "key16": "2LLyxXjzw6XH6LJT7ekHTKtYd3qv8eSp7UrWeo8vzRaJXjRa6dpVes8EUGs22Vsu759MywgufHnXa1hWYSENgUpU",
  "key17": "2QkioUyY8qBJVbXBHGg4CEq8RyCFf4oH5E465YnArDrn4rMwk7wmmAdJMJiLN2H6K17fRrMsb2SgBEciyy61EMF8",
  "key18": "2AFEzPvBuBnzmiQrU3H79ihgeGYf82uMmGicp9qSEqjXPvwCTeUYeGFZYWob64L8jVucWUtry666Df9D13criDmz",
  "key19": "bb6rzdLdNHm2LTZo4N97KZVFdJWUAFUuoHtkWzx1trhTT7QniizHzKsnM7t8qw4KzjCrzorgXyTyANfzh3wdh82",
  "key20": "3NezytW2AgRTBGMMLY9d8QbN4EZ9wxq5JwExSjmhXmnEtAYBkWi2LGiDszAzYukaSt5wjaC7xGJWy5xXibxFzHHE",
  "key21": "nffe5oTgT897R4uPiGrTLoMktgHxRDzMnwysd8KMBH6vjHPX1YrgEt5C7QADSxUXewioVco5pSgH8Tz77F61NUv",
  "key22": "UxvKJ6cTjP1hshWeZrpfesxs7HfxsJMgWZTXnpy37EURCafLEbuaxoPgKGfFd3eeQYw8Q79Wpag5CLw7YUj2A2T",
  "key23": "1PzpvBoNBYgc9uRwNFWP7paNwa3KsBFucwMmajmCMqriDiYBaazLaSgnYMUgxVF41JtJ7MXKMF2LowhLsyJ7g7W",
  "key24": "2i2NHHp6Ta5x7FHyHJGzWMUkEzi7PssCfehs1vVN5P4z2b999KUmYWmkkd3s9HaCDasWBZdiTWZpmZCX1rWpUoBm",
  "key25": "624wDRAZbkpeyiSTSrdvrN2pCea8AoZuoMV1ipF7Vas9Gvdk4p738KneWejzJQa7tUxVMwMrLhK3tLYHVBA6wCXM",
  "key26": "3YeA5DFiKQrZtJjnRry7Pi3AVF5zpQR9u8U1MC5fh5C927gYZfEhUXAg2pSSXWSLxNqDWMVGnnW96C4kruQPc2NK",
  "key27": "4E36kR9C6K8Sa7ADmjWbZhFP2UuFYqk8KtTP7aKQPmphRb8ba6YZCV9Tw14Kho2kkqJDi4uBm4voXyLf2HCenXBQ",
  "key28": "2y1C4L544idcFsPx2iLixDUc2R9vuWoZ2QJ8pMLv2Hs3QUywUM6hs2CMt5DWtgMdip7febPHB7BbQ5RU2tnonHGc",
  "key29": "ZaMN6SLDHYfEBnvrDxoPCAHpAXCvhY8unhDcKd4pv5UsL9CNaEC6HWKRxdJRdAMa63GD9JABq6jh4516XAfWcGK",
  "key30": "5nmDd651918ASgbLrCzkTKuYEnYFvnapEfqxBA51BrH9GdZwTet8jdxFvuvwYJFDPdwjeqsrUMW1LTiB6FHdZTAb",
  "key31": "5puVRa6cS7mS5oSCLkVnsTSAEWcSEpBj7cbx9EQyLkEmdKhVib4iCfm5Jb347UJMjphCrhfi6o3FWk9YpHvn8Rjc",
  "key32": "oybGycphYnEb7MeD9Foy9J4vL77QUJTjESjJXgcZ8RBt2YwWAVaiCmYmckLbhGJxwpWwpLB5vq8p8nBPBBkB6hb",
  "key33": "5PD2v6cm6aQaXuviTR76YHuC1ozg8puLL6ysFcZCYHQVxjgBQnJmq9mrvz1ELYj3VSPh15mNYTJAJ31nVMinnY6F",
  "key34": "4aKBFcX8jTSj919s1WBLBLnadXhrqXwNKf6T7yhp4G99hVKCqECWL2VKH9Kxy4cJbwjGH1jWKCx2i7hBLkbj6zYw",
  "key35": "5mvpzTKAuW1XBwpp5XubiVKWPHLDdNAvHsoP33PXqwqvV9sW2fqC17ev6Dvimju7cZivEWoZR6Eynt9tRw7LSGSL",
  "key36": "cvtmSXmVNjiJZeCHBfK9S1n8gCbBaPrES9HHLyUE2RXfbraXj7FarhWSAGbEQVt3DoJ8hLyaMqxDSgvs9cstEVt",
  "key37": "32F8VAkhayV8mGZHuXhcs9LSbn8rmkiRsUwoDMMUxMooCsjig6hamRtiQPJZjm586pkUs7By93BEeymUvp6AGXen",
  "key38": "5KJacmBshyVckm6rTLR4ij1GK5abC2KfqPs4TS6yCHjnoPBsYNoJhvNqjheG42G8VXTRdLVkdv89Rjsr8zyoDpjR",
  "key39": "4p7233UatPCvRDTCiKTMWFsfDRNU7Q5pCQFWFrdvEhAbVv5yZZtsXZDNFQWYuhtnLX3RpDzwhpVPJmL8pjGnuTz",
  "key40": "5C15kEBZfKqKVxM2Zgf2B65PoAcxeHDgQmux9T6UAga1vUrivQmth3N28tfwZBHVegp6m6iwHV514GH5ygxjUuV4",
  "key41": "4SE2XHjwRnKWRRnp6RQ3HYXUqZn1JSi1sU16AUG7GwNaztke8RCbxgmUbNM3dUETJGVDBvS2Cs79zeGDzNTEbJC",
  "key42": "43G1PHNnM5Ddz4AeTh7MxmMm2TV2JMYJ3mDC58PRKqWd6qUeSBp9ufpfePjBw2cBHT3p3Md4hpNZfBa4riMj2ktS",
  "key43": "HDhji3yYKgsv6GF4j293oc2g3eTekpU7ieyvEH6cnyb2mya3DR5MEBnfe89LbAY6CAmvApj7HjwcwH85CQWXCNo",
  "key44": "63MAwzf42qqEBRPSooiEfB2QrvL9hp4aPRxXkLksNgu41i2umzS7wcibym4AdFya63scj8Jm13esNR1SjCLrAuxq",
  "key45": "35SC62kKNKDMyiV77G1Bc89QDd8vTvUkF8msYixvkbq7SxUaZB8REpsbuB2eQTWYjW6TyBw4viXiRDdH1rY3Yrdv"
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
