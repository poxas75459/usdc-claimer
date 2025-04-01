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
    "3L1eG352mXtRzntcaVaLvsEZMsiUKGiWaAWMz815ZyoETpgyZJhhNH6WXaFSNWzevrqUci8XtWycn1b2QhDw5Qg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGHv8BZSMVTVBhWXoLLb5ihLnGKTjEj95p32j4DvH8v9ByecfbfoA6XndbuEr82nhSJAemVrsrr24Q9gkizdwVL",
  "key1": "zCSe4ZtjZZQgdj5BZVRxZSW7s5fbQc2BNujQrAgX6yCMjQXbVG5fE3F7fTyX4avEjTEkxxfBKr65X7Ujtauq133",
  "key2": "3BwCuBvRcXZcWPqwQJkHqFCnH2o66KaVySgwXhbZPjPsAM71PsveUZ9G2bGAEwg3C27257KR7eX4EG5u2QMJxNgR",
  "key3": "4KvTMBs29bo37VuAmvECZVd7uep2HRY6x87UmA5ezsihuigqnC1YWZUvWuXqWpAT1gAoLSVdQUJ1RNQKfuDCNScS",
  "key4": "3D15vtAZQZwd6B4m2pwbyFRnthqb6VA1oDrb35d29pVHAAdRxGPDqtVppMse9KCn4XgNuBBdqmtCbE68y1dAUQv6",
  "key5": "2UpD47hZk3bhp8mdrPuAHtiJpTVPDSiJYuHN7uamqj7Vqx9mNZrakCjMozZPgocq5FjXuoiXxzNHprLRkoPZ98a9",
  "key6": "5ctyW68GmyDTC5TSphfR9GqjVC8nnAXYqC2FtHaFQjZj5vuBWZ9hbjfCesMYpVSZGWE47aRXo7FQixWjhbVJgPP2",
  "key7": "2B5JisrSnZkED9BqSahMyPDdG5nK3U3T3ihqmfBoFfn92y5QUMaANbj2PcMXKtM7EBLKB3XER3swMfoEsYG3RP3Y",
  "key8": "X2k2F51qkzJpqwnGtttRqtFUWJrWQgeAZ1iiSh1XTxCdtefW2jK5oBaesjgG63pN2TtEDt3VUbD7VE9SCCW8hPp",
  "key9": "3ageMe4dtWdxvmp6pMxpkdwPXewdupLaR7smBQGaFNZhAtyUU1Zb47LiFVnYC4Qw2GqCewoUTeACGMqkFfCuK8p3",
  "key10": "5YxZzBwXaCzmLxywKd77B7qji6Z7saRUjHghBFwdEnfJQyKo37eSgR83xteKV5Q7hyVu63xgiCdCAiekQidEGVk9",
  "key11": "2GQfe4TjoJP3s9bExYSwbzqZCSjm1p7K6vWhRTKqKyyurm3dvmS25xVGGsEKYczwGjWEenLQR3baFRJFPaWSJHSJ",
  "key12": "4UPuLtQzBYVLeregB1fzcnLfpbj74PPAaVD8qX3LiDYEtG5f8ivWrL1HUXf3RNnoTHpWp4s6kimjyCUnHyYrJxWx",
  "key13": "5uxLLHRsHem62tBDFULnHQMZ8KYLqxPuMFiYZCH9Kbr9uejNHS4ZhDMW6MCQNrKqLZth2ts7ucXja8yMfd6b1S7m",
  "key14": "dcxfB6LcQKcVAS8TBjqbWTYo9ipkJ6dqTZbXpwpisbMBXKoxSgtKj68H5nkQMEJ1awmdii2uMNV6KEvkoYMenfH",
  "key15": "21D2Miythmu4T56EbWk88U1mNZzvNkEXHmKzcHp3wzsYmiJMrN8HzZJES9SCwoR9MikWRFd9FiUn91HdzkYGqWRr",
  "key16": "4qVCp2WZvVYCfMaFA6XHqdELgPKnXSSUmwkTGpSoVUFeS9emFtLPxxamDj3XpR3DEwpxhtPyef45C88N8pQqDCh5",
  "key17": "2WW9Y2QmSf7A8Ryg9jva6Na6yeu6e2ZDRammLGkqSBzwbogv1Yb9TWb56moioNWWtQJJD8SjNQAge5FtgGNgiTyu",
  "key18": "2vW5TbcmJ9R7frn228hsv3GWnLiJAR5gRe8Kpn2Sz8Q657pJWhrbghjfaMj6YMeswKpcuKFtz293yaAYt7siobk",
  "key19": "366QZj31aQewaQZfWMo4TW74UayfvY6hqFfXRg2bBwFxhyv5AKqbdV2ebn9BRLyvUJCgUzfuyVNk6G2b347DMNqd",
  "key20": "LGuhsbrmneGSnoTywxexzw8x5TqdjZoL8d2GkBY1Q7GUH8h9PDimUrtFV7SEGAHMpwqj7TcC6iZUY7JW1EDWfuU",
  "key21": "4hmztSdUsZF3uW9RRKKtMBUhiYZqtEbNpcb8TBgrQdV7qTuhjsF2FAYHn5w6vSK34jfctAHT81CuZxQHizTkXhad",
  "key22": "3mvFknJczZAb2ec9W7ijK3WAbPeVCJ8eacteKRw4ckTceHCpjSyr2vk733ym8eKmMMbtz8heUNM8Dss6cZZ5LFn4",
  "key23": "51hq69cD66KbyPxKHVbrjgHaNophBBotH6pPfy2UntB67Ji6K4aMd5EvrfrCysqc15DrBQnGHKjg95Lu7bfeDZmK",
  "key24": "2g6b5ETCn7LfmdBow7srkbFaPhXp19tTXyjYcg4HwPKsmTJAfArWnKSumJoygnLCRtd9DeNkUZsmo3xHgN29asJK",
  "key25": "2kW8XiSKzxSQLqRyf7GTFGCTVj97E2Avyu3FYnr6xJKZb8MdGXEKUqT2BBMndm99zuToUgvuLq1LgdvjXuQEKwLj",
  "key26": "5GrQmMcb2vnCQP5APuWKpUX3CDmVa6UPpkfPZTsfzMoXxfh6oSzwUFaodvusVvtCx6xZVD61YPvDPxchcnqVP2aw",
  "key27": "4emWYdbxMDjcdnrjqPgKGsjG6DmuDgGYHmhtp2dxULxpSx8RsPHZ8FQp34pamufZij1Cvs3Tpv3pQm7MhqsnVKBY",
  "key28": "3Bg4nmCzEpKpkj4VM5WscEz4xjgU2bcXorW7XKi5kyQrAceWW5LqWTryQnuzoP2SgQd1XMqYeFQSaYoU8mtqcTTg",
  "key29": "3h2jG5VHxUXEWDccbApRdRca8VQKwwPEhYbh2MhgYpmMPtaFaZVZWZb8nGQsrCMTaAcc6p666u4mNcCzHNHDdkrJ",
  "key30": "6GVhoATne8sgPakCosy8WLznyavDFqziu6S7tcyyY9DndjDN9FJjSVR2twdP2rWb6NZ4xpWLag39cX2wFZHhTSw",
  "key31": "4jvxva9vSHkxjNnWwqdZmqaPhX5AS2YB1ajXiZBr8otScNhvbo5t37473JxEtrpJ85f45tyqt1P3zFaTmQqA9Hyt",
  "key32": "4AKuD3UiGDG7ysHimwW5t3DmnRxhWGiBqm315NtWQP6JdHtYghE4YsoKW9WaNHCjvgnSdNpLbySW79hhuLmQ8nNj",
  "key33": "5DC61HbqQBpA1Y4gWfscsaTpw1ykjYYWFUpSajY4EFyjNLzBSHdzegzJF6rq2PMBgGfePQCqUXMtPF9skC8qGYvT",
  "key34": "5KbNvYzdgRy2LCnavZdKFCsvehZKXBn7Gdt2y3ndpVRs9EGkNTtf9kirbHrVRQemJpKDoWdCPA3RM6gT2a8FcS6Q",
  "key35": "56KG81YTR52XLZ7SMGNAfGBVCTeB2rv2rG1HKejFetVESkrUpP8KsD2xLWhX1dWryUXbs26pJDL2LTHocfpgaRMd",
  "key36": "37oNdWMpdP2g5kCEAZSSGF88tmDf7N8wGnYpLoFHn1QbJFzWJq9a18L7dgWfiNuNJ7zrgBNRMjnHvQBAYWuu1kww"
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
