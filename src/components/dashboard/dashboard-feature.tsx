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
    "3aLjxXp6ndp9oCaUTU71CxHuQEPfWmhkZWaRzzwbB8J2xUfdbu1F1AWXp4fscCafcrFAW4tRSemR8PGVUB4dFbqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZwrBSVBH2zFrvdzue8GWma1pj4cs6b9ycuEaU2rQVC4mChHJznfmLjL8VmXL316SqVB1jno7VqW5FhGTVv441x",
  "key1": "4RRHNGuphkE21WiNWoPut6CEH7AAvSMkjX2JKbYCtDJJzsp9M9w2CsWVBVnfYeQCMYkMQxnaDhqg2KhYnM5ocKem",
  "key2": "4Pt99CevxqvcSUuZiiYCEfy5nvYGhfb7MGdTdcXqxwvwWtSKo1JUoUrRugTV1brp5D7p2sTjSuEb3inSuuDEfYni",
  "key3": "2fXEESeLmpn8aVEhcdmntW72AmngLt1NXKqT14HMC81ftmhjoq7CA7yuu2ckdff8LiMVMXnfjjn45qcvX1wNeFHM",
  "key4": "4WW5bMp9QM2x9WWfcxvcDe8RJoqBP14xa5cCX95BjzjroJcG5pySEkb2Q1poJ4KbQctWnwMzDHZA1zyhCVBprPa",
  "key5": "dvMeiEXnxs4mHR8nAKjoju91NdSZDpu2yVotTHz8q28FnoEyNswgF5nxf7wz8yER2Ev2T29jGMSPmRprLGL9s3a",
  "key6": "47MMsGKBjAWdNSvhs16kyoNzChwhQXyZp1e3Ko8B4WrApevc2v28K7sqVh6s1SEKfsQaDzs8xiq7C5L9smtA63ki",
  "key7": "3XwUSFfnhTEpfEjbkJoiYdcEvfq1kMzEg2JPBcwWow8GPMcpUJCjmKi8wsSDEjfb1mQ9BPVfU6RocTCAvFjjvJgN",
  "key8": "Aqo2fX6rY45cswRmr4kD9z1RiJu8UaV2LLb6sAe2o7h8Wy6NwTXBVjJE8szaX9K8JHQaKwjmBzRyzzP1TnVXkL2",
  "key9": "27eC9zdp8K1jgM5CvhNYFaer3S7DMVVYtE5xQ2qbfPirvpesmTXpLtKDk1AKEZ5fNJdw84WDYKHo36eesN8fDiHG",
  "key10": "3tcN4U82jboKUdcMT6uN8pUhv9SXyfCYEUWigiwcBgxYbRtMk8RdY64qddosif5UyxBB5zGMM4ugFSiRW9hXsh3h",
  "key11": "5zcJ8VY6F428AnkYvRwQkchHWtWxWFo35z5a6dvBouBqDLY6opV9gnY82w89Q7E1rG2WCGf8VPMUAvFaQwFyvsZE",
  "key12": "a8vWQ7HtoKLBXp2kkeCqHovZZAuPAvXTV1Wy1nPXM7gdsPJYLYadpX7XHBPtEYzHe3hjGHcJHZLUhZg6pXZbMbP",
  "key13": "3JDFmCr1kDt35mkBh6vjNXq5K4twQc4TxNw1AW7NLgSUCEmH5RtjVtLiYURVhh1294cXsYGfgSCcgc15wLBL2CXJ",
  "key14": "297DLK9gz7LxuzpRzfgBRhdvS5C7nw5Dbe9hpg2tki48j5WwohBHnbCvfkwJMt8G4VfCMR6383vxS8NxsXWbDHSg",
  "key15": "Rv38tVGu5Mitqt826dyMAcHKb5kHe2C4teaCVSYknuHf4LcUbyRp4xKCHtv5RUqFjGw4JSxiGjqyedmwm4NBrQs",
  "key16": "ZKRbAGsRqNhe7t4rq5fyvWU2VCT6KCLt3pt1VAXQQsZmFEReqL2bG9smSzLqe45FT5S6BJeUjmBdxrF1MUvoztB",
  "key17": "T6fMbhfxR1SYvXY22LV875zyCuno6mFjfeHtFEUPmNvesoWhFZmYLRGa4XqeTWnq5fjFNkmMcSHpDAtuh7mpZkq",
  "key18": "4GX6LUiD7KsXRVKtkdNkUnpmPC8kSR7DqwzPSJtq5mw79hFGZBtSDv1cPaRUUvjQCzyaTnxDvGD3Xc9nvxPzzz4q",
  "key19": "3sdQBcTHcH5QNV6Z16SfB8N5LrzGqwTU7PpNab1qJabjtPofrix6nsQ4Mb6DCspFoFhkE1qe8KmZhJX8rvzwyan9",
  "key20": "5bDtmWC8HffwkipdetxaHd3BUfQxcV9FFsjmafpAEhr4szjMiQBKp7frN1xLfWDxNCBYXimnh4m4BUqoVKicYCJD",
  "key21": "294e8osG17qiXHWaERzbXZUkWoVHgSTHEBPgGwjrMvSsmYeJpogFzuY67af6Yi3XHMvDdWaZ6gGG7D14B2dTHA34",
  "key22": "3ehxpMp6hgqnjc2PNRKVxMshJegwAZD53hYRpxTUDMFPXAtf4pJbUsm5eonVwes13sr69nVYYe2G5Pc8RhUoC1HM",
  "key23": "3ssRVAKkrtNqRS5d1nwa5k4trct6g3uJdwawLFPMiU35AaEksGqLTa6LG7HW6yUwzmx1SuTsTf1uJvNeDyEnEJcM",
  "key24": "2PnA3FMrNcDayU1Fj54Z5DMfQ6crnCpXcGEbeyY9PerqjWg3cu18Rqp3osUGGM9rCEbf7pWkNFo5dDENFf3a1YFa",
  "key25": "4zcLXEgjRpuFbJwY4WFNPnuGLbNdLss8KccP88jEDDzH1rG9bPvdUUu6rKxXnJk7fteEzssML1CDVjpdkEuwTsk2",
  "key26": "65nmJQBknDr6b8vhxgFQ2jr66TYrxSqGScFJiT9VWav7ZDxpEW3pesvoZPkyoAxisC3G87CiThaR9kijqentWDaD",
  "key27": "5fRs8KRqkcaAEQUAEjVcgKaBKHUYBbzcCKtASS1sstis915cMQ2JYGhBh2bjFek7JfSiSK3qZuwgwwvQdKUpohVU",
  "key28": "51ifez7kyYjCCAEW7XyrAN1nwJsYRHfnpyQPsZJ5KHNZX9Vmj9avPRGAonGcStE2XJe4AewiQMgHaQpgKV8WkofJ",
  "key29": "4Xwnet843NmvUzEHH11yabnzv9KYcrV4bFAvw82XAHapxzaW7zmmSZ6m344ubQ9vspJ4nnjawRpdkEMEvHrrp24n",
  "key30": "zK9JDQUTiexH8WFmjoCha6KvLHJEz9fkm2jG558jzm5d9KAF1f86DGVpSfxG9KRtrGpYjTVmAyxSAvqfCebWZaL",
  "key31": "5bzRceofJonTXqmpbZ2PNKdX4e1BUr5z6h9rfWKJHY9n3XtRdpgMP1Y8zMwqwTEX1avJvLnEA7sayZHFZSFmEWoL",
  "key32": "3uRRMythiWTG4vrEQJNAPmvHk614xNMt1sQMeKQvf6B8kfLFVeK4HP5WtXKkEovacSvanF9UuLYUn2YodH2Zy1VE",
  "key33": "2CBhgmqH4wQh9yskeVYUTrTktWBm4DcB5YcNYyXCiNz2Wj32MYrSrPJYfdhvM55HHMerUk4NeL9w7dt31y6AvpRU",
  "key34": "2eZLaCUAYSe2oarC8L9fUxtVr9iBexxZQ4KSVevFJ3Nk72KWCMX3s48DRGJXH7J5NxtfrX1Mtp3iqYisZqNsSDa",
  "key35": "4K9z3uMnS3ogUEfvpbftceH2KsxSdspc7P7afNbf8vJQ23EcdrBdCjRBau4r55KSwFDJCBi2i7EpzDt73b8pBuiC",
  "key36": "3zoefJy7iTBzRJLVfGe1aD8DqRzhJmB8AHat5SjqGQ87mWDQzHMEkZ2BYzQwUS1m6V72riKxNb6o3tPpGk7HxeRg",
  "key37": "5PnVVCtbbR1XdoY6YbbmPmEQfgpJxqUYEBmNzpytBBeSRY9oXzKPVPQU9pb4W6yYBmV2cBVYJ44enPGhqnVKy1jM",
  "key38": "5zkLnpzJuNuQxKry5eCF3b9pCnemLDdguhh6hHn6q4zfGq7jLzJLFQmDa9VibxbtcxZjuDJGFvx9SrKEnKqKw33L",
  "key39": "zntHEwLpnGagpC18PxUh5hDrvecGu1SYD4rkx6tKkdczEVzZhSCrKno65EVeai63sH1ejD3RVhVE7rT2RmYSALb",
  "key40": "52k9pFF45WTWLhhEKpFfDioduKo8MhkdQkQ2hp2BqVAiVwznZuG1UKUBmEd2uau3FFTCFFycdJ3zRKvoT7mj8hVK",
  "key41": "po6SyzsiVNJPERppdBFeEUzZDDYf1KzBdbytTbdPkjwM9xnS2uCQBpUZdZpasJwoSra38W1MZQg7n8eqKj26UJi",
  "key42": "22KkRB9uFDcc7BoomcjVSMWinpCbbRW14BHaa8adpCuFaUqWJvAC8qQz4FQNQRY4tDerAxff3TtKUNnnNpwUhpDN"
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
