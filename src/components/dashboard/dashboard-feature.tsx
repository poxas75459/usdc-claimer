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
    "yudREVTgDTrqYmUhfnxMCBmJVtSER2noGSCLGnbaA1uCsXCAvMz4ArUtx1ajRhL63B86EAqvw85V7Z97Vfu7fw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iri77Qf8x9fTFkzPXgoUZY48QwtYC89eQjex79LycMvfHMkXXDVLNq2xoFJbpyjdws4F7zVhUsRnjruAi63mToH",
  "key1": "3RHYZXHPFUfTssFaFJSjiuAh9xi1rPxMaND257VyyvLpLAATbh8RQ5b2Yar3C1dKr9vfT8pcvaFMxDhc6q26UYep",
  "key2": "5McJpTb3YWi739F9xNd9VDJq2kjPTnx7kmwQYCxk9bndcrpnywx8RnedQFEq2xEQTUQtvZYnSfDATmJoxxEjiC2c",
  "key3": "3eKkfEkrpsb9PteZhqhaDG5o6k6cSsUxTrdZbiKvQBkGBrLvkJ2MyoJ4xHFCBeeYERHRnKcBjGSd3jM75Svi5L6f",
  "key4": "cPbNMxFBrEH1bWmGehgJ8PkHXbkSNP6FnQHAenmt9Rg1fAFhzCvThPzuR745gZx6atSt2ESKBcKr2hLHTYFKVsJ",
  "key5": "2RhXbNT4JzbGtSJvm4Yjd1P9ozyZ9Bow6vSHQcQKTfXpkLAbhNKzuKzZUPzprJf4vCvDVbre9M7GQLt8nifbNUPD",
  "key6": "5HtxaneCauomDihBbhaJZh8aC1SFNSGPBbEVmLTT9puhwLnvZ993Nm2PzBYgxUKc9jCDjS5Zh1vJ5boHXCKtkemC",
  "key7": "5EaSotUb3MaN5r2THrg5RZtjvcMrLEPmDnqx3ebova9qPPieU2FW2D9LnkskX58oWHCDMkwbVZxcmZymnMyVMdjo",
  "key8": "3PJVEHX6opAbXGZE74t6aM2azWU2vtf66szfFpTAoAU3sLLfYBgzVtZXQ8TxvUY2wz9bLL5XeuL6aeiRrcJAc2o",
  "key9": "2X8sxEZs9MDftnXzMEVMCQTShxA59NcGsmQoGvrjdE9RtxZG3UNZvAWZLEQQeAuiLyVCU1rQcYD5r92G8aTuNpTH",
  "key10": "4ZCkWHCyhBUFnnH9HLWNspzYJ7K2RiLzSLnt8DqWwVqJk8xMjTg1rHQqmNKXQ4wpansmbdjeccWZ2j5emn8B4PBb",
  "key11": "3BR2XNvt8cdH2hBWbn97Tcmr4PM2YjzuvaPqAEz2AmGYFVsuqcdGAd9dfvVxnmYkpe6862bN5ZWvL3cDZnU6HTLZ",
  "key12": "4aN4shqRqpdY6DmuBkuPtPmwoL4VmSZWU3GhfjsBnAcmhLUXwm1SzeUTX8vJPTtRnyXjsvFWseEq9qm7FWPbwTH",
  "key13": "3NQAYdHLGhP3F2bWs8V6TS1veoDwCjarXJ94qwCAXMdq7erxaqJN6bKYPRRjrAWBohkuxtBasBq1H8A73xTwoctJ",
  "key14": "32Qng5rAknWFkJaWUZPkocNSbCKnVuQyjrUHDNEMZrej5C6Ycid1WvsxT3tyxqapwQ79L2qUmBYCzYdGkcP7hs9C",
  "key15": "oqw4ywdpgjfXSEamj3FNaugaf3ccvgucrFMM6RpveD4WYmh9Xw8MKVNGw87vLpy7RSK11aLwco6VwXZ5SEiU7hE",
  "key16": "3HdYLru6VuPXXopSTMosCQDLHQ1MciGsL73ht1ELqzyZJgdfP4guQMbKu18GqpJpdUu5ozXrbpjD68tTTJnsB5NG",
  "key17": "2kUy9zvN9LfkMXEjYL8HJirHARVWqvXCdqckKmS8PfPQ4mfmiecP9nWh76QqRDkS1PmnQcjmBP92kLFoM5Lz5KKd",
  "key18": "2Pi15DzdJHb9EKdCDcmRYJQRMdCaz3FfPLUiyuGAotLsBP81T5X4ZKhgENZEPTFHC3YErxCzGNRJXFVFgXUmcrLY",
  "key19": "3CiwhWNqAtF7QSLAzWnGUviJ9sVAwAeQeUZjgkTunyAqyfdFEgrVx687nZmrRSUyPpocL9tsAWcSgWML9zBmzVBD",
  "key20": "4FCL1sJQNk19HXGCDMCEJMPpV7T2uCsd4SSMfvffQxmCV6gEtRSNh5mcxhgYrnK1MbcvaCAmdpngWfCYqC471Rqz",
  "key21": "dVZTEzNN7DtkE3VXaYbbK3VEmgBb9dznaeJd4QHsaPaxD5HjgAnLbkWLFQNykH66S9RRriKmoh3yfaiNDubvhNo",
  "key22": "4Nss5tDy9E8S9AoGbRscqUY9UJkX7dsawW23BKdLCegs5utaqzFTyMxLmjpQEprGiYUf1isLgySoeeAwEgtqCEBg",
  "key23": "632s62mvXJvwQ2wR1GRRx1sRdXonaXkDNr6Mu2Aw8H3K6MgvAnbVFk3FC4TjZpWHrqcX5T3nqLUkZW8iuso7Wefn",
  "key24": "356CgFFapehGxg9yYUHwCtW4iqhMneTEAt18EPcWqb969LfD2tWweEgYFASTaCTvtuadyvar5s2E5D9djgcs8foZ",
  "key25": "2qt2KoemcirSHXxHQTkyC5yaH1XshEzRhmaQWLCdHGDbZUf4wXVLZJAQDCxENxKWPwbzmkBxChaXDXf9EFiY8jkS",
  "key26": "5jhgxFvDmKwsFArMMMwPrckiAdZteGB7gdSkveMeocKSjgQDHNNS9pEEmz4RKaEgsyE7wfE7wwoTQgpiRqeHuxPU",
  "key27": "3EZdP3kZvABdsPTyP7UiUhNcgfg1BL8XvD9Uwfi6TH84E9FKUmcwCU6zn5osPKo8Lxvhe7kGeXHgTh8DRtUQZjLp",
  "key28": "5PGQpRLGJmroCWBWdsVJsuKYHwtpEF5rTzfqkL5WgFXe5uBSTUwSZuKD7Gi1YTVJvvQcQbGC6Z5UYUg8DQJoRxxW",
  "key29": "kFi5XFF483nyS8XcHvmjjCueYXpFnUC4aXa7gv9NBKR5bXiMxy7j4aDszwEniiTXtpgZWZEZ2L91oXcp2pcbTTj",
  "key30": "2hAdRuzRgCAvFHRb76XZYwZxoQWMJsH2HcmRWgotKxJ7x2Tae7LADjohhFV7iQMPEg2idu3mvCVWYuvDgfQro8m7",
  "key31": "tega1UdnJZQygCrfuEDks3bQ3NoA7QFanLH93jCaJxBwFGY3WGUVGDyEsqYYVM1vkPajqRpuAr1UaPCKHmszDyS",
  "key32": "2VQzB2xQthsp3HiaGCYpxk6RXA5Tsb5cdvn4eCJqKtsQLBpgtrPLyuYvAoVdWey62G5bgc1o8pxY6r1mFiMWoHL8",
  "key33": "LRy1Z64zsGWLppydA2uPHwX65X4XngPgmGtu1NstN6A21Pbdznt1wYHXZDjPu7XLFNa3r6fa6rdpLyHqm7sWHy7",
  "key34": "2f5H8HWb9wcsQp6p7QiNnmZ8FGWAzY3MejxPVXmfqFmdqR3dVrNhxta7WEwVcDmi626qg8qUk3ChoVNRAvF2Fzkg",
  "key35": "4kVrT2kB9sZLZLvkcfS6ukZkFsuiUZmE1ebsZ7vy6Px9SiPVrje2RC6UvVbpaBY2vCXXQ1osgoKNGNLJhxEyjvZF",
  "key36": "4Fw8L1L8R4qpsgZAskHLhvfAPf2C1A1jVYVhENPejQoKtHqnujJujSzZMJUaeJL82uw4qbxM6HEkTBuFUpcGPXKR",
  "key37": "3tcjao6djidetw4CvGrmaxPBgpqswxUF7XDQTJGXRGmTAeMTtgaNrtzZrNmLfSRS6kvg9jVbuA4VXbHrmfhpTify",
  "key38": "45wJTovjgC8UtAyHEdbC1WBqfM4B7YEt3bZqd1TgvEPL7TovxeNyWyF4An4pb1FZJBAYTfEDyWCQno6Cv66gz5RG",
  "key39": "3hqaFZhFZmYBd4FgjPvmBq9uuN8kKLZiR2KfazVehVNd5MnkhcFVFhVfN3yKebupaTXqVZ8LTDLHVz6JVz5ZuWHe",
  "key40": "38VvGK5Dnj6j1w5bqxyiE3y8pu7VQDV7hJ9SyHuRUXLVLDMBgZBWcZJkYMKW5mpEk3A6GgqYa9Ee6wM1ZtDgq1ks",
  "key41": "mgwV69RXqdnekxzf81scViSMsTks5LWjS8s1auHFbTgNzMTrrhRoTHszqWa6gPb7K9UWLZ1momnuQVLhbk75mdo",
  "key42": "52MSyNKrKDi9PgLtEQceZ7GiQZtHvjwFNiKHa24YF9JZ2wEbR6dtxjT9TruJqzgp6nkypk4D8sWWoe75kUnQjHJs",
  "key43": "5bEFwEX2hb8FBn3ZYfNFFBoKCs4F11YyvHDvPqaKPhyGaSQwn7QRJzcZDkNgdwtiVQjcqerfSgX1NtaBvpyKrm6n"
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
