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
    "4VPhjmeYoa9oiEnaX5bhQNxGoejSF9nzXa5zsthx2Ez48X6Vre7Luc9fdFtBvv7u9uWhtyzZJuXQBr4BpiWGemsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJyWMX3Dck3jxsXmo9WjxVPudd3Ge6LBgqkUTzkS3fR4w7M5s642Ny13C1By9GYjESXvwNMC64RVATveyFLuf1X",
  "key1": "5qM5nQHjCARQi4tZJRQRiSFWSYrsWAoMjcpnpxF4Wu4d3Wgo3GG4rHJ5y2DPATR7oXJDGdMXrcyTMyV2AoEip1ai",
  "key2": "3i1YjEiyeSXwcKcfVvnzpHzAQMZhN1b4oKMDboCG7Mm48FFUwdMskMYpkC17mJYzgBk7UqRw2XLvkszCdzt1p6ck",
  "key3": "4egninVjMJJdaZuTVjQtnQQ97JQaBraTK7ms1Y8p9pcqmW69JfnXARuc6RmS4dvkoTHLFBR2E3vLzetUtsEBX32S",
  "key4": "3cP9giWP3ivPYXinA3PfGoASfPkqEey3yZHmCmWMVMWZJe1wsCF85vDsb4kLdqx8Ne8HWPRz1XLS8QPzBVEVVmgX",
  "key5": "4Vq8EUWh9Sj3gYpJLjkecw1fHnfZ8jqeEXnoMciJquJje9WeYyfRiiqouTcGBfuVLqr9AXcMgdzf5aY8p5c5S2vC",
  "key6": "3cvJ2n98ZcwhQRoVRfoA5fVULNrWbtdWajdddmF9jwLStXf5z6A8iDDmHsvq27iJp5avfX7HGyCApqkUVXXx1S8c",
  "key7": "MtqFKwJmRox2vSf4sfFLrw3GTey2YNBU9P7a8v4qWaP1SYtt4cfswSbfLAxk1QdzqUztKS78ho1zmFgDdijsYxa",
  "key8": "5DeW8nmH1tLpiVJaBDFNZwoH8qj1B6mTFo3S2q4pyDL1iDJejzktUDKqHXvJam5pWn6bCyT365Aem7v2QEiqLPTu",
  "key9": "4dXiRP2yXJPABQqw3FNXKTqMTaATYQG8HTp9itRGbzA4uk19NMj8Y6fahMK3yVv3gX3VzNiHo4bfvxBtJwjgjvvZ",
  "key10": "2zU4ZEBdJULCWXT1L8VLKsBUC9Lviy21Vdb2TgfpTwwLML9Pg3yu1isrK49LrdocmKMusQRSvQ4kYxTrMG4d25b8",
  "key11": "47qEwiXfbiqxtnfjXfQnft9o2ALMSXPYCtusic4VLPDS8vzDqWqn4BsSLsBUDhkwPdJ7bgNA9aP4thsjfdVST8EP",
  "key12": "53DjEYRs7afh3HgVo1wW7QVoH1PuNcrtMgFzLTZk76SSZKuJw53dj6DznLn8bW7DP3mJmPusLD5aZXebQTRyRdcE",
  "key13": "26KS8UTdjJREsMk3924PvJsni1uXHbTDjoCvWM6amzdWYsQsGmsRSboucrM5pUNhKap1B8qgwQqWZfu1KiHzA45r",
  "key14": "3tyDaVa5JRAN2sZzC6RXJTVjSkcsqvJ2Y7nyiAjLokJBxovwjarRyTxeYuzUNcU78xxmqLwTjjCxgttFknPcf3wV",
  "key15": "5KJmoVfvEzhUKiQi52eBPXCyjr35Rw6jiBYvHS8VcZTdhWq12eGrhzhAfJK4CvuwsBdD7NKqAPHaYhLcFsCryDtU",
  "key16": "5MB6puG75nwe8xQqXRayS875n98jkDhFrXwirVfXK3QLG3gRb3w88WHrFeqVJb5BecVGZ2Gs3KpAKZqU1hwD89z7",
  "key17": "3tmQsu6HUsppi7BFKoDUNgWwqXWkAn7ZECWCaKQhFHJugnCgdc2CmeC6bxb1K9v6f2YhDksL5uXHRqpnWKpmxjTz",
  "key18": "2z5NfqBxbKqSiHrnGUHz3X4VDSzX6VS8T41BEp8oyDy3mTgc2heYUZFn7zmZZo85bigxCtYJzubUFxXQKdnukJaf",
  "key19": "5yJQXsnAAv2jtrC1KWhfZGYjAHT5LJ7gvpbn6AJTjK5skiZD7w6hPi7mCkvTHkXosmWyhUFxQ73CvG1A6gT8nyY5",
  "key20": "4xZDSujdPEPpsok4PLNb9vDDpnGXkdTqZUQ9qtL44yYxRcfWFvcqFLkZH3HX73V3NRKjpkkjVGTUoqae4ahL8KnU",
  "key21": "2VxRQRjcTNZwSNY2eVNs551dbUdgbCJYrm54mgdjfFPq6HPz9zAEF6S2FvjXNLPVqxKf9UY18nwLsQzrCCiTbJQu",
  "key22": "ZXKpBeCrKfDBqYP6xNHY2F9jEuqPjmFaU3MxDtatjWx1jwnX4vTen7a6eoJhBu2gNm2dpWEy2UaVryh2hG88prL",
  "key23": "5hMczejsCQ9VJoujV5yTUjaNXSG6QLuna4q93XxYyVoJbbA7UtLM3oHicmntceCijEVuXKT69Xstr2JZRXCF25Xw",
  "key24": "4K5jSnLXCr1CQsAticrvh2vLoQbT4jgUrmWygueHxoakqrwePqJnYqn7qM2AFg1idLbRbBGBuvwCWgdf6cUruDNS",
  "key25": "4S5x6gzQe2fCjF5yyodtEQSaNiZxZwcgkmLfuJXjuB1e6tbVFcDN3E1g4rFQKdmDL18TSL5eyfY7Tmg6asxytsRt",
  "key26": "4Rrci11i2LGu5hymvNVtgNmTiAH2z4xGULHG1x12s7vTS7kNYg51h5kT4n2J7tN8haJJgjQGp8QXph6tELMk88cm",
  "key27": "4rQL3t1Vh13MCrQuwpbnJNjEHFK775vAabEkoDrFhAURjMVqcHB1aMhtBsEz4iMwcxYbd2synWmUZPpjYp2ntiap",
  "key28": "2F5RS1mcjGQKTPC1Ydxrb2NMnwfoWerwGWG5CdjAchzqdLoe3K6ixDnnCSTCxXWmFekr844rwJ91CqFJ2x127VNH",
  "key29": "zbtXJF7p1BR1twYJmd2BRBYK7XLp7mWTSBCiJuYCVrJ5PL2Y2RrEuMSHeMVhK7J1AjQiiXPLZqx2aBXoiQyQ4ya",
  "key30": "5jWeEEJXRXW1iipiXWk9q2SbkzGYHUuYpAk38awyB3gyC6ZmDYpBSuEQVgZGX8Fm9GD5MUsA6d9h5mJ3ud3qNeCH",
  "key31": "4DGqTiRhpq5ssprX6SsDeWzRPfMb43aRLJDv4iYnYSY96fLnPyjB6ssTjiFmCVEvCQcTy5idqzZ1VokTSAxaTjeD",
  "key32": "SW3qHvecQZbQDUWeiL52PXCswf1AtzGdYQaVYVw4Ccedtauzk6v4McwBysyJBahqx3MqvbR582PCtjJVzpxqkiW",
  "key33": "Up87GtXBJE2z5EedgMYS1ZSwQEEWGfpcmmn88pxwtaXVJaDbHSoCHRmWF1LMsUh7LKzxCUN4TsjtZXtDMHE2LPg",
  "key34": "5xr3hzZbLMNmf5wx45Wjdmec4QTfnEDYw5YiZSQJR5YJiR9sy9fT3A5Ew2B3rWKVK6qeVQzhi9Wpnx3Wqp3Lqfiv",
  "key35": "2aSiwRSNERVjW3dJiH9Fo7ydh6eH3EEC8uCnNduXNf8t49GWQsVojq4Awb4iYAbqSdRH8ofxNdjkLhoxnAdTjEJG",
  "key36": "4SkMVKP1Po7mTBpgxg4mQtbxyWWJshpkJ5D3jpvXTb3dd6sRjqBVY9kVWywBnxPo9nG2GTEhoP7Dd7U1cyAbgMuQ",
  "key37": "2hXftaNJ7ytbw44P5NAkMUsk5QPtnQVDwxjFuFC3CPZP3PBtQ4UDgBuhBi3HqDdj9P6RjBtjKSwGpiKmDznu1v5s",
  "key38": "2SowStfUQrzUytTTN5TJYEYq6m2ShPoWJy335cZpYZT4qKeANyw7kTVdKcdbEKxEUrpMq3wYDchF81CVcmibRFsH",
  "key39": "5YrXg3v3R6nBMjHRr9c6D2HmNccWuR2BcnEyZd9GXKkLGFE3LqSFq4y3Gto5DQwgpJSg6HCLaXmssgjdd6zytx8Z",
  "key40": "56f5YBHCqxjH9NWwpnMXb87HrDZCbWesGimVx4frgfrChSz9v7vFbXjGcfruSfoJHzpvN2yEp18uxMEbQBfiKdCN",
  "key41": "3TXsGGw4V25m9adCRko7gWEDtRhHDHJRF9EEJmf8De7MSCrfRrRiSQWv7dXAnYYTCsH9iSDptrLAWRkZVde4mpYJ",
  "key42": "3q36FyKmYCV25TB48SfUheuNXJXRHTxTrEbrCvPJeQR6Q1mjPNj7MY2y3AphcurhM9NBuCDvZC2VtswjYjqM22j3",
  "key43": "3rekp75jPnEHjPpZ3PJXETfxyNgUGyQN4g4s3ybonpakQ2SJG8dWYfUpig6GeCpPCZxp5inTG9CCwfAgwf4YSrm8",
  "key44": "5kQKK6fEh3kdEi5gizdFgF8h7MM28GogNwT4dgriHHbuVxvguDnJTgXtScdsN72TsuJ4F8KiZ7TnyGGv9idefcai",
  "key45": "2oXnCrsxdxt4vh1VGCbGP9m5VCuraani8y1KHMzvLJNf8fM8LT3iVZxVLnPXqdyX6EGcKTcwg1TFNsXXtTxFWt6q"
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
