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
    "51Lt1QVDGfWQX9Lw46o1ZsSm2AbXBsmF4LtYWvUiaVT4uqavM8irY43tENxg3PqVd9DPP2UgSfxeRoXhN2PGT8AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTMv53VnijudoztjpcCs51izrEqhSYT4v8ujo4dosBksmiFGgBFMGrPD7LM2R6t4F1KyFTpgivhiyqSFAn9VdK5",
  "key1": "32kXXjqF9sGZtGiNh6VBekd5hAsJEq5VjYCrYbhUKoMgeEjTzpUvyYfp9SHkYumvAvujiid8TjeaonLr56m2KC9U",
  "key2": "4kSK7QVLuZEaWWzebDv386qzSbdMKXgjeVy6zj7z4q9wRtd5rEmjo2Tya4VDBGFUDGs36JBFbC3NfpBibEVhcKQ4",
  "key3": "4bnvQACxvwvhWevCmGm1Lg1U8LnT3Xbjt3ubcyUtn1TmLm5ybu29TfL7Z3xTBmE2Rre6g6EH5yjq28Uwc7BSCLjh",
  "key4": "4d5t15cwwSbVnMyVbRXt27iBrSP89jiYqhM6HhDvhymxiPjzkSCQ47mz8CRJJmfaN6tW3HfNsZdm1RMUrKSbmJP2",
  "key5": "5PfpXAcawRreuxdvR4MBq76j5wHz7DjmfXZzYYHz26ggXM2ec2p1C92aUdJnrmRt1ymZh3okKmepjCJJgU7zmSYZ",
  "key6": "3Pi2WcbkTqD1MfaUoZGxZoAx6UZJheMnPmVRm3M8tbLnHz2cfX6mqGxZLhEemzCzNtSCgLyFGXxTRo1ZCmMiyrTf",
  "key7": "eFv2rsNLMKEVdoz8113BndCfx5hdaxTrcpm8yCcT8YKW3ziWpFmStyQL7oWGr7tMfv1dEBnTh56FBS9Qmkd7drb",
  "key8": "4hyGzFUHG9z5PZv7AQrSfE7T4V8VDQ2kYTpx38wNyn9WgMphsaPPamfAfZkBjSP53MUJK8QtNpUEinyAozYH14uk",
  "key9": "5NtcBFfyjgQgxxhWkfqAcSxuu3jsYYk6z8YChvBk9TeE54JrcJkgZv8PBTNK1YSwPN82uZRaWcUQfaT69Bk3MV8B",
  "key10": "4L7uUnJQGWsahxXcrvDiBtGWU8C6LfNfVY3P5gvCPX2MtZ95v8e646fZFCwnXvCGTY9fseprEfWv3Z1YQn5bgN1m",
  "key11": "4nxGMKnEtMmPddhtttncnQtsttcLDW1ndDxBWZ6UFRHAk73ZkXNqGAGC2CPsa9QHwyLsEVAKCY6Jw4b6hmj33epL",
  "key12": "4a7mmwcC5W8Hx7SHgDikuJPJaLYiQF4h7nDzRWHENMv2LiwiaNyfyvL8VNX7NeV632zgEsk7KB4iwP2UjfM8HwHv",
  "key13": "5JMmJNmB2nApShtS6tGsnUi5kbRyRqBiLPk9y6u5eUrqBU4NuKQnrD3xVJVFmgRr75HQQRFxCfRtsanhBCrwviDR",
  "key14": "ofe8jDLnkpJGaP3vSJL4p5RRmCitYv1a6bTWxoq7GVMfRbAwQafKG1rrKwXW1ykdjgHB67h97DFqEbM3yrCK5cA",
  "key15": "2Bd2kZ7RHAFhx8o2HXkdPb1hTj8SV8PjBifgjoqoygMKduAuhWMFvHW576fmHCPuNGH359QLF87Cr1rRtV1a4Sja",
  "key16": "58AYqx5bgWBZckuyKRVaXzTMnzbUR5wbcBukNqDt1CMA4WGrrrFfGTuQCCSM1RcabbSWvXQDoo4b5b5j8359mNfF",
  "key17": "rfGDfLkB8WgqH9dKQotgEvoCsupQhCycZnw3hfWKYfHauJ52DfRSc7wLR9jwz1QrQ79yZkutN5NTBiLyQ9tLko8",
  "key18": "oSQ41dqNasuuEdW6PvtxmAvnfb4TNFqFEZ5mKqWZSDVc9GFRtWBKC9gMbnpBk1E6VDCp8xHQLvoS8aVVJTEnWQe",
  "key19": "5sb2C3n6S9JM7QauwDN3ocpREWwjgAhGzGZnwJTKguXiZds1ccZEFPAq9fQuR5VDRkYzwiguSZAA8uBCsgirT2gr",
  "key20": "3gqSSMLKhaP3iWBAqbj7W9F4S2ZRe8cJwydCof6MPVZgCFzh6ZyeCkPeJPTetyHe5fZryZHQ2rg43ZrmSuFWipAn",
  "key21": "5CNBAT4wyCorLQuf7vcDUiMWY3pi6YazpYm3ZUEvGEJ2uhctLimpUkRPSVAMvvkFmyi1zBffdMjaMfxLGXzaYXNn",
  "key22": "2Dg6fQmNJqy7SimqrQjU41zuMLMYULFWftfWh7AqET3hJyQXBBU4pEnpRC2pQTDWwHfKWE9kHXGCNx326HVNPYRP",
  "key23": "437UK3saNNJHKBwmQrLxvEzZzNDo3ovNsKsBifEaaCNSJqSVbJSFkQs8JppRpuFLt3DAjoSYCovKPLFxxEC9TqpD",
  "key24": "orgYuekoh3a3hCJoQaBYMb3QaZv7BneGD8Qre3gbiSEUKaSmRDkenvPn9dsKiyYUhEKz3cxdB9E4gySFnBqvaT6",
  "key25": "3YczTK6cER4oMTD1Bz8hxsbQdC9GL9LGJnsYpkysdQXRkpp5zaEeJ1Es6fVo63uajKsQUtg8rQcyr18apWjsdwj2",
  "key26": "4VwACtyySF2K7VVDqr1gMDPD2NbZR4SRUsCcFdHPvQop9677jhXYT1AdGWGf4T1EmcSSfACXrc7egCMNkwozkAxo",
  "key27": "ecjZk4Wz3LojY1nLw4GyTCDRBCrXPpisXUP5jBGQPsSWWcMun8pF42Y6dddnBcJT9YBn7E84oQf6p5eSx2skygT",
  "key28": "EwWahpmyLuXaGAwNbaELrTD5ZaKpAYikFoSNZnvcCLjRspefUmTez714RgR3Z8BqCtNufkYS9wZWE417tsnL6r7",
  "key29": "3yyg2QKqb7HEpRvAry6isrHtMTBwXTBWmJDwgfBrnc65FsjsHrS6cqMiQu8XpWGYv9BWiL2Lv14KXhaQ3oT9BxeM",
  "key30": "mDEhsZuBj2LdurXVf5vNaVQ4tXaM2ifCVpszw8AELKW2PJB9a8bn6wwnjY84mWDJDJ4SAjYUpbFA1XHWcnHUdeQ",
  "key31": "3deS6xpog7b5z3ZykL3DTrenMSB7CKQmXost2VXqELzMwdRZYHJmKHRGk7GMa4hDBW1KMYTzF6L2yNrfCLSX5cjV",
  "key32": "4cfNmkBP8J2uFYkwc54YA1CeFL1JyLyCeXg8DKq1YB4eCpe6gkEGJ4a2pfNRgA7tpM6PYaJro1n2eRLANgqvq7ie",
  "key33": "51hSwrf4utMUvYaGTCtoPHW2zifXhjTe7U8wdMoQzDbeTLyfES62dyjDWdUc1BQrkuX9Q48hgcUG53V2su6r2juW",
  "key34": "46qCAwoXRfUMTP2kKfCSjWrkXjVifuSdiqMJqDGGzqSkgjUpiEYYPD5XYm4WKMhvBL6G9zdQLPciwMqTxkhpsR18",
  "key35": "i82tsbzcf9Z88DVERi1huT6PL7ikfwrYSrGjkvrmKA9YQ6wxH1GHb5wtrkWommz7h3gSLwQbhxpZy1h71vvQC5q",
  "key36": "3nMHHt3ojSP2mEVoDvtFJFNjC53QyNnUwYxajrBND71cU8jVfqEkaL9SyKnSoc26e8tL5BdBjh8kBHPJcutnyt7L",
  "key37": "32MhYK9xxPxdAbfqUQgJFnDir6YFLrBUprqZvbgGHvUW632qkJjad2qg379m28P3xJ4mMQNN5u912fR1A19z3Jzw",
  "key38": "37sB6kpj6MLy2B8c7yjh8kDLEFrnsG6ccwPtQwG5H6JEpyrNhNVuwtL8TfXvrrcv5HBCRT3aZE5KBxJt6ZvRo89P",
  "key39": "5SURMwqnxEzfekXrCbzi9TUfi136qQuRyffryDKZdHCSWqMN6B3MwcqTV4E2qvp3meSCudyPf9WtjHT7mCETtBdR",
  "key40": "49h7yfZhezXagKkVDKgM7tuHVNmqhNNmNvKsimbB477A6zCHjPzHYhmXVM587tKLnByXhjsSUDxXGfgdzShHGuK"
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
