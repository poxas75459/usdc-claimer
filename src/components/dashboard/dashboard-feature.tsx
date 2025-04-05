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
    "ahV1yQed7kx2QA9BGNggWkomhX8NVdLfkUofsMrAhGWX7a3K5LaEeczAqcfeoeWGyY7PNzXyzS8bTWrKFNCHfzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZmszuTzpdjEc2uw2MpPJ8DoMnZYt4Vic9MkyFbe1u5JXjzWKxMcYXGcYceF3FLqbWZvyTwz6MdCDk2KwE1PMQR",
  "key1": "32bthMkLCsCsayu75dyWxycNGae6xyzKEFi17pQverErKeyEBNjmtPaDNuHEedHx6j4Sgao3wZo3AxB5Qyfk8iKv",
  "key2": "2B9ueC7U4MTYsnV6LB9JUeqyj476PfT3Up26brLRRPDpU1Dn8zZcCd3e5VBzWVxEfq8ex5eKD9hFo9avg7Qik7qn",
  "key3": "ofZEZqMiCkYauJmm6TGrhsPh81e44EH1utAr25Yt2jPELKacTVycrhp1srTZd7WiGZU6K3e8dP8ggfKjcFHt8MT",
  "key4": "43wCVrXVtYpiKGhBcyrcHShTsmiTKMYSx9sxWQa45KTJy9yDycjsro7YFxFoem2X8zFW6tJmuNQhunBtmkCQ4Sts",
  "key5": "3vRa1Av8NPkx79T5abRCnZkeBUR78NTsLgx9VfAZm7hvLdcv91EwBHPtSb6dYSXQtpNVS3Lf2AQEYi3VVhnQVCCN",
  "key6": "4kjtTrvgh6LSho49Cxige9iknKVSJPUerN8eCDT37ayed4P5vj1yW8ZGKcWXzYw5Z5dZB65PFoCTvNyng9KXpp97",
  "key7": "45bPedrwQye1yvxFjtXprqhVDgP5sokQmox5bkFds9FS7dgFWLs8XXt8Fz1qdJY7ZbndU5sv17ei5d5EScN71NFy",
  "key8": "3TuAiDNv9QEhAZaVvp2Ngky2rFWGhZgk7yXPWes8PMhJ6uovCV21yf6nVkssG2TRwc8wuwW1y2VPqcucQMgU9SUS",
  "key9": "seYugbkAwnNnPDUL1WCWAwtfBY6noUccPotXSF3E7WQkECJT78fNgPHVcaMatuBWumqoNMzSW3C5s3natsbMwjr",
  "key10": "5rRQTfwdd7hUMSx8fsYHXd1G3dDz1Gdonn4ayVtXXeHEZorNT5Vgk2JCQtmYN56Fk7spdh577zhaewXvpaneuKN9",
  "key11": "ry79hXxjfXm8P34tjtugnChzHXWQjX3gZHFH4iQQwxkfK3Rthxuy97NGHgGbFhL8R8DNguJ8KwDAgx3winn6Erg",
  "key12": "6matNeMRSuZNBEq8WwH8Hehf5XrQyVbHXnMrZxyNvD9ePmCVRN6FGiVZWNvRmPedneRTNZskcH4RbG1JhgsEzZg",
  "key13": "32y66fvy5fqdWrJ1umQfBbK6PyAp5wPwAtbN1HweXUE1aGZnMoZbaZMniV6bqbdPJMmYHKeQiYXvhvETqUchtV99",
  "key14": "4PNmxtgdniAZh8NygT7MH9fW9vG17ykRzUuNHRGqF9ueTX19gRxgq81oLTRmDRtESCxqqoGDCinbcK2C2RtJVNns",
  "key15": "47xYpbguchjxE7o157Q1mKBvALL4q1DsJR7X8y1RCfiN7hQyN8Gr5jmszpyt3ipTc55RPSj8WATeZS9i1ggpHmsn",
  "key16": "27RSAwVB7ZuWp6LjfQQkH45DpSmqYohhtMcMpnLtgPPT5ywDjxLDCmwhJcScen3dmStpkGLky7ddkBvVw5eABu6u",
  "key17": "4iH427MRE7oZUQXskqBtrAdJG67eq3a4wwcKEdrkc1phcB9UexCer7gzFPvGCMGcQ1w5G4ckE9cX5aprf2jQRaQ",
  "key18": "3TWmoKRF8rcJVmmsuJAqWs4Fnn9sZgUJ4qxfQE7tGWXt2HzvmTVhj5rSjuDBcRe3n7gCtPQ8QwK2DfGEc191j1pZ",
  "key19": "21XAxFf8ULA2Sdvh8eg2o1i1NNGNMDXCUYcsESmfvVpU8EUoPDVbBExkwLz6kSxNHYYuve4riUR6K1Kp46cLLdRY",
  "key20": "2W2eBy2HgAZrgtWynsSmufmUazfeVwkHtFTYqzUUhYQTcKkZRWEkzfK4r5XN2N3NUhmDXeRgjestFQFYvDhUAgQF",
  "key21": "sYTLRe3Pg4yEKbmkish54WzsWYsLME23C1Addy9NqGPUkHcWuJjEvUFPAJToShiJ7KLf8PgCvGjH6Wwq3DZBdkF",
  "key22": "4AraQrEhTCz8HV8Skcsh1uhdmX9vSM1PF4RSePX15HxJzBnziBPPws9FwSbuTsJNGMf877i7RcgiyWxUumnNhgmj",
  "key23": "5GyiDnrWw8Q4dMjxgvT5p7ZT769DA7CKgqwDD5oJuUqvhzNRM1391FEGuiPbA3chfrkeQ4jdYic86AH6xUGCpM1e",
  "key24": "2DMn9rYhMQ8zWZGZv9gZ77EwxPbArZgq43oQvowzf4gRtJccqw94KYZjwUGPr8iMFmssNDMcgS3s5yapE9mZsvTk",
  "key25": "3Uquo7LWFY1tTtg7ZjRZaFxRiZYbkuD87bQ4wUeK52jjRrS3eEqtuF7e6SaMrcuVtbHRek491mit3zUpni7ekFhf",
  "key26": "664bjMShqH9TJomureX28u2By6XTXGPWMTAEWY6SyDWshtefDEjUwhwas2rksRY7MsWVfpZkWjc5q2JEbF4sKddm",
  "key27": "PdrgaBtJHtFAuPrjBH4fYmN1t2dq9Afa8EGtq1Xcbk1igTESnwTREJ744j3w8xRBrjKCaudGRtTFfQwDkvtYsh6",
  "key28": "3wWMWFdH8HL3F4pJJbWmXHmFRr3asu1EgQa951Y2pZKER9BxixhqEoRGo1ZLahkPT682zY3G9HYnE2xQTP2g3UgA",
  "key29": "2p6mShGV8vyENf6XvFK29mradQUjhRVmZnktYp8cCfEhkcE1KgCFoMVYWTefyDXBDBLT5cEjpfu9UTNXT7F3qWbv",
  "key30": "5oiQzCTSp3M62nrD7KYuhyjS59kFv4WHA47GRhjUfEQeXFCZavFyfq4XHsQCXUsQU8HoUQVcayMmKD6ALw7sUb6w",
  "key31": "3zmSAn82ew2YgRcLjHNeG7mp7urTbwrND9L238Z7j7tZwad7hhCfk63HCqap7YCQv4YYyfs86FtqZtLCW1vYaNPk",
  "key32": "2YT7pmXw2LpM73YJz9znrnBvUrg5cbDdmeNRraRQiRZ1VsvpaaJL2Qs3Xa2TzFWdWxJrrBR4fs2hT9y1VfLGRKsr",
  "key33": "Gup8CXY8sfc1HBiVkid8res6mE8SG737QfDUq977yhgXu8RbCrxkhiY2E3nMhwsFyBgWNQwg5wsewAgPj6kd9Pz",
  "key34": "5TRo7j2JLNCqaNhQTEeypAiAJ4JBRBQgMDuXXEaKQAskJZEXSHh2Y3ywRLdBPaRnMeTCdUqbaXDHK7eJyDgSrZLn",
  "key35": "5if48ZaFeFAuBT4faRB4UPp3SuPQzfPbtZRMMULGj9ikG2EfdotXURgjftmWEeufEp7UQTqGhuYs9CA5cTpPr1eh",
  "key36": "5HDeyGZ3tJxG5RVX6cD7Zww2Y2tjP5vyNkpvtDutDfWmLK2aWsHE6Y6CBaq4xSbxBTAdYZ86WQoNPyz7zYMt6xAV",
  "key37": "3S6WhJVSjXh33vywVdp4HueHZRtScz1SXcHhpQCaaRDDzvqkSt1fDaj9j9XoED3Bzymnw1DpLLQDpEVuLKXFTrA5",
  "key38": "5KsLgqwRFpaXDrLxUKGtnc1satievvfWyPjBXzXNZVkjd39CPfci5qRptgkWxwuL56wmr8ur1jhQzfTxRb3wwHca",
  "key39": "45Duhttyc6Gj4AUJtM9qAtRgjY8TBbsqQHMF8yQwaQgEVpjvwjxehKoWJBEDP6qKJ9HvjTiZj9mCrFotPW63nS9u",
  "key40": "369HU7eS1haWZrJLNAH7YQpv1KNUzMSmNmw37ebHLu3QSAVyB9vBFYAPP3xnUa7zg67ACyH3oPFJSD6owFWe8KLh",
  "key41": "2NyNKx1uayDT3TW7poTBZSCMVJiNFXKLFvMpSEjoVRo1X6pSQArSTPFHwmzHVsgC1rKZ6bbHFe4VjwwgGSPypDY6",
  "key42": "jeDmyADEAADMvvenVvTX4GRMC1LFoaEEgB33msLR3gAQxPNt62E4bYm53HLfctBQo4Svq5JRfNdov8kW5LNs912",
  "key43": "7DL8gf4H8ecFtr52oZTWzkFvHPWhvYAUJXovAeoCx1xVHdUA7xsNuAkBKLh4LqfnhBPD2Kb66TbDsWXYdkb6WEJ",
  "key44": "5rq9RPnutZbezxDbsAQ9Tr1W6UqLm6jz39sr2QTk3o1pKH5GdqWaP9m76jqsGCdn5ivjDqgitTTXMAaMJcJtyF8v",
  "key45": "3BiegdJZ98tEambZcahgj2qogKnLzmEP2xiSPd4Q9aPWVDyvpHNPDHtakty4emvZUHCQNmM3PU61PqocFFtcVHqX",
  "key46": "2DPD6uts4xNoaD19LwZscad4EnbaBmQZCWntheAS8wJBrYkJKHmPmDsdwtgMs5W6AmGspPkatLn2D1swu3F3oY9K",
  "key47": "3gN5jG2VkqCmWvmRG9GrQmZxppjFpWM6b22JbzWs4XLrwXeCkkB8CcaguuC4StqBXCj543yNmDaq2DHUAZg2A4No",
  "key48": "272K1HzKnkBCkCn4pvAStsiUL4rjNbjxrACBp1Ra2NEsNxxwqC1zTeT24CybM7L3jWgCWbKkXX1wZnSfAix9GPcK"
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
