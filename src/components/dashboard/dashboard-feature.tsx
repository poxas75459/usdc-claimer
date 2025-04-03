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
    "4ruRfRkwUXDzyTBSm3NuivambaVYceX4p4FeznsNTKSQ8pe17KSkmHwhn7e9JRBtRsYu2Lduyxx5yfvePRmtCrPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGa1ri9P6foQszr3rRrjiGjX9FBMg5h8Fk5RHWd334a6GaCZmtdDQnN5oXAin91Xs35S6Kky8G84V2s8GfU7i74",
  "key1": "P2ysjCSwf4Kr5DJuz1641rRGFdeoQXbCFXq6qpsZAVJ7ng7yFQXchfBmhTypZbLPBT67Fx4K2FH5jDmgXYAApvB",
  "key2": "3WPc2fuqQrjTqXaLvXij3aLFNcPh9d6MLND6cMACcae4VEF7oEjvjHvqYTEvHW8DKhvJcdWECP4AwUrd8YzcX9kZ",
  "key3": "2zGpFnPAZF7XChjd34RAA3GbE1xVWKzekytrx7o66WKqqo72ggzqLTnoH7NQMLPyw2ysewdtG19GyDPspQWFA6Tg",
  "key4": "3SQbuCzgmSBGqeGuZqFeFohnMcWpYaG5GhPHNy8v6Uwv44o1t146MNCZNhKDj7kRyBjbKyRRB5stPFKUM5QzBe7E",
  "key5": "5Au5CqNpzs8psdAb99bubK3gKWcDTgtNuA4c92MSmagJXLYp2MAv1gx3UWw6ixWQfSNr39boJsDnzcVWWpJEAWtg",
  "key6": "3UxaPrmsRb7FmCTwgLB6eXmHAAV8Wi69PqFUECEG2hd75T95S2aiR6GvsjVWRKuF2Nv8jcrGEahutvRE94bbb6DX",
  "key7": "5parm6KthyHBQA2QM9v2PBBYeBLbByw2oA78yffGawSf5cmJy8WLK2FvxyqKBY9tXzcXTB79ZC4yNaf77dBx2zhY",
  "key8": "2wddtztHmKuri12X22tb8eofvaaU54cuMq3oPKg3ampdFztqePXGYMAy6553S3MCotdMkszgz35d4DoTiLhZEaYT",
  "key9": "317Wf2ggxwR4xZT1zs5Be1ZftuH7AgbemNL3LnsYvS8juFjyWvUwfcvsXbDSMuDkRprt7REKdj27gt9yrf8WUTqs",
  "key10": "2zm6gJbPSnkhP85DeUoMTdP6M7L726W5DyQMAqWNKrjHjgSTjFWytDXyDjZJz5JUUEvLifKs6tggwkj3cVuEwFej",
  "key11": "2hDkh6UgBpiRiUFJuE8m5NJN6mWeBrUbsYueSQJjFUxQeyWVjEqraB3aeTh1AgGr4RWLcozThi1EhbeVS9Mjb4u1",
  "key12": "5vArbQfy2EuW1iD35ctEc6UvVxP28EToSty4b6XQYdhtZWFtr72NsRX1cdoFtcUsGD99nu85p3YzMsrFc31Z4ZWK",
  "key13": "HyjDuzYN49nKfRa9Db3uGmZ6inTE4nwJtw8ojCtb2g51yMQWqVSaaXQAKckAhLRGat7cywejCrgqV71objmVrUS",
  "key14": "UgvYEjZ5eKWn6pGY26DwJcKEhunnFQ8ddzEntV3zk7RS4RE6QZKLSihwf2tWGSUYwCFdVjtcKmRLxbzHEwanEB2",
  "key15": "smB1XK27kHrehEDhSAfZtKPyL78KseWyDpRYQqB6cvXuPiLFmTzvtKBtYwmUTx6ip1KEG5idcAjo9Q6oB3px18u",
  "key16": "1j2xX5kJFxCijedgRV7XjyhV8qnNUCaE51RG3XpxyGJguuDycqVoXsz18VxwrnNnTUXCvZSTrjvMsLjpjNA5MSV",
  "key17": "3JvVtLFvQYUuBHAxFMFkSagVBxXsXv9RetsBuMmUgbso3FiKhiwmwL8HERWYTg3RSpBUmc84ibRfsWAeNEfR8Zo7",
  "key18": "4GqXyBcCYkZWJ9LWy4htTsTmxBy9JZjdFuGZTVEKUqcwX4bC64KTVrj7t7k3DdfFyah3edpogA54mAMibe2kz7a7",
  "key19": "3Ja2k75vGcb1VpyxkfJhH6Ga28x5yipa8aQkma1cga3c5ZBhNpF6tE9aKQwc6vK77HUtj3kfa51uST55fJ4pNdCx",
  "key20": "2bKM8H3ULUdHfbMk1ZotncVv7Z9zxPjMYXMKFszAz32rr2G9ETLvVTYXwXxXZyEjpwuyrWgknGVg3jBDy8Lu81Yj",
  "key21": "3p76WsoqgrTHSQwcBpNPf1qs5zamZSu2L1PUt6Gq1XRm6f69V1HsKyEt2TPwogarwsRXKmT8Eegc3Rw5RBBbbT6F",
  "key22": "ip2Xhw2UuGzKZD4Gvm7WxiqmqAVNYuzC5fWfmaT8KPnhbCAxsWscKJQZ5WskGjMwNWK2UTWrWfRnwPg6bbobNpP",
  "key23": "393fZe87dCw4G6UTckX2pgCvYF3cXNQRyYZEAUJiEGa7GNYrxagx6GpkEXjk5ECjY4RpxXzQYTwy9G2NwwstKvcj",
  "key24": "5WpY5Ds3Ypuuwq4LiHbAG5PrZRodw8TvNLUzXCRKrEgvuKvxCwfgZVn9XcBwTWVUX5GDpt7HYEu4DFWjMhUCQF4E",
  "key25": "64Aikg1vKwkoRickCoeeawxvwi9KYQf7fRLau4zYgdaCiuXoGLe5fozrAMoAbw6VDMerfg1UMivXYdBuQHknnGtc",
  "key26": "5Q67zJY9xhWM6QLrvtyffr21HY6XA7QFYa8txVdTFyfKY3TSEcfu5s47GaERhgcJbB4Vdu2nmeRvTVdaD58gyHpK",
  "key27": "3MvxFfNAvwXEqsjR8tUzeCPowPFZMaHAmLpPEYwuBfapkv6hgkgMTEfwc5mkZUmmkgjoavCxqFALWBf5trSfQ2SZ",
  "key28": "d1zyijnRJuzcYKxwQa17zajvEq3m9UHukuCUpKyHXEKKrDQtxqYh7PenZZczzPPrwUT3Yrq58YoDXLVNUvnqYbW",
  "key29": "2d15NtSKs3a9hucLu8HqfW6zxScv25b5nsAg5sYHF6S4RuCwYMkmGpjnYSyvvB6TgxYCXdWPTLQtZwMsg6Cq9Pj3",
  "key30": "M11aNrz4vMzEKXFJb3e7fXevPjWWVwwSkcwnMER39JE9hDeGYFb4SqD1uT8RmdudxAkVYcmb78HuF9aGFFxDGuY",
  "key31": "Euf8DRmqYC7TsHXvaTgLG3x5fMUsungSLjZQJ2XRPE9yWqShpr9SQjoLSwTUiXF9bs36SExo6NECzusxafki1xX",
  "key32": "22v3HyQFT52fkfFZtCdaEWBa7vG5uCHKgB3qA3ejryEZDccaeobpL6imP739YpYYNpoKaYEEbJNDZV648cBFACrV",
  "key33": "4KQbmqLyy8RiWzTsZDsVXcJdEqS6qbdbQDkTvscYgRrUhwFzAaAA6EmovA8ArLhbUtRTCBcQtFjWxBK69d7fekCo",
  "key34": "5YcoHv6n7ygdHuxvfumag56V7CxBaYGrdx1BFh41ZydxGFFe9myLMjQFnUV7iBo8JUcGgsXbEkkAi2dme4sW1p8e",
  "key35": "5U6izBerUWc16xwgvHRRoHQ3bnVxV4QQdd2zoBEdVr8gsGmas8Wdgpem1QamzyyfME2bfWSXz9ahZc1ZgQrAtHLm",
  "key36": "vD1WfyVEDKLoVTjMQt6FL17W7RmKSdoyKQzVCK6Sai1JyrCDfs73qzNrFB5uuejBMHgGYT5PGpeqCqzjDtsLTx4",
  "key37": "h8PMhvM6fFGebf1kmnqEZ68BbvxqyQ1mqva21KqFkwcvhaEQNcWvfU5mtsbZGs6DF6eC69czpwcAuBFxcbUwhUz",
  "key38": "VFt7FDN6AkqYDboChkwG7qt8y46ihKWHqoJaZBM3V397jSNzW3hu1kYbsvRgHrVvbt7GZSLR2kfnvrqcCehWBYm",
  "key39": "2s5aSPizYTE5MBAsQHnB11we55kprQ9xrte4rs7RNtveVPkWv1CK1DZBNJ1dzTupfP5WANEjoxks8bgjY3JCHQew",
  "key40": "4D4ge4qa6NQGgg1PJbAbjNTnFLKYMHop94WZBmh8RDQiivuBF97o7w687AMgkCjJgKRhvgn8pn5L8qY6eXiqVJqs",
  "key41": "2wFcSuE8awtB8vMBPBTCXVhcusS6w1jFCgNkUW3dfRWCQq8nA7LPrb4nZMyg9ZL8gwiB9aG3TdBKk3wmzHNB4UKn",
  "key42": "4iaGNF4FofJjXKpY9xqe5LfUaUC3nm1jST6ctGkooX1G79iLuDcDBoprPGLDvxMA5tpopL8cbtPRxfbmbQRkHRQW",
  "key43": "5o6voD7aWCdhjRPb6dH7LbgsTnkBvvUpdgYVDDkvXq6dR1uTmsrS2udhg9GrQwpMEAqPTPaZPjkjajuWpetPFzhR",
  "key44": "2yiG3wZ3kSLJxxJFWQ7b8qSY8GQiTQKFgbN7DXax4wUyLbMjCn43wZBTK18o9piqg6sUJSCFBShnviFVdqvWbb1M",
  "key45": "3T9tK2pk1LNAcqwqtSRJyAuPUMHURZ61G1i68DPNW2mtULHhSx2ZFFyHX8ZYPWPejv8o4Nd6faB4w6VTc1nbEmuC",
  "key46": "22aQRs3sHw4vezLQrGjTRZR9hxh3ShQ2mqbnWTDJnXF8XsTvP1ppj9VHvbZvR2NmtDzFegC16rcby1FQCmWeP5pn",
  "key47": "3F6kCj28Y4oEdhBiT2vcaXTEHoZMMcHe3v3TK1zu8WKTyCu8238rEAfxw771gbEZpfqW2GBVm6G6C2THYsTLB39r",
  "key48": "3ejMyaN64hPKC8PuH84k3Khz23mAb5PcGoKAWYBvdz5qduS4CUeraPigsQK5ozeEzFrqotQgByxJ1C5Fw9hyWfrd"
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
