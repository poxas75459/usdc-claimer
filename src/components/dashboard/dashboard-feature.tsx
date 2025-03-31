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
    "KVYk6CGGCTaN88KLDs3UMHjLsbEJuDRTMyCBorPU1oXoXy2dERVPvRvT7db7776LYkx7sL78obafDkBsPPtJC9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrB5GjuD9JhS7eU14bXPH1cWYQTt4b3fRvKURQ2FcJzk5S6CsrZKoZT5DcVAw8wDXReeMAWVMTGL7btu6GcyBXQ",
  "key1": "5368f1taiNpCjZferjfH1USpBN8hbH4rYh6pnT9ezZXUxJGSQmkqzimJkPp1gdN5kxfBLonaUUoEfED29sBGiFTQ",
  "key2": "5MiDzHwxPMBeDkun52qJumQLezdCD8LhjpiiD7sUyx6caTigaMrVTng3ucSSVULe8W9eVVPzuHf7JK4UHiixesz",
  "key3": "rD9WX4rKSb3tbLsubX6yhKgvbTVWJRAKKKEZ69ucdReaCzzWvgp7aVqxpXiAcgXftRfAh2kTEF4J516iigLg2uV",
  "key4": "3rCcmT97qx8oaC3asXLWTNwHXQkazYHiga34EcZhavMe4UF3nk2J2aaVCCw7WxzYf2kZBV2akr935KbAsttF9ycU",
  "key5": "4YVXgisDYowqdjaHPa4XDf5udu7rzaXUptNE7YfVhnBXL8EqFTuVWbeZTkpWeoedgQZZxvJ5LhheWkVu9ftqqgb8",
  "key6": "5YQzakMbpfa5Ye94VizjgsrrG5C2UBw8oZBZZRqRaJ77f6j6FNLFjEeoPQV5f398kEjizM5kfc3t4Wf8GWWTipbS",
  "key7": "3UW79joiEDD4ZgP4aaQTgddAXykSuz8uag2553EGMTUu7sBktg6ZUHVR5mSiQkjBuShDTxkWTjZuYBaya4Tdx5mc",
  "key8": "3vunCp9RVFVwSAhNM51VfLiroC1SSX2Xo8UYdBUgPWJ1ayutr5im2UJc6gJUi4pcG5TM1R8mXCo6EhezH85zocnB",
  "key9": "2Rv1Dyme27QgraYXTiKBc53wcz2vHrocWfcRFkxtGaxDeXgz9J2pdoZMUTaicqKpMnEnXL7CLZbdbTrmv3WpXiQZ",
  "key10": "5SgxgUHup777muhQiKrQDvTuGr2GCfYmzCQPWNoFEEhWvZFfwqJgfsLznDBR5wJnNo9vTLpUjC5J1gZhqsCNYuk",
  "key11": "5zNwJV1KwAfViq4Ve1FnRHfuHXHB3HexUc65hTSN68whB1ZYocudEq3GwL7FVN1nnfcMhCi6zMvn6aX77WnTBbVD",
  "key12": "3ffT3sjh96AEq4Cb9UD2sYusWQUjPV5MSFwxFB4CGbn2U4W4QtiQbV9r2jRqAw99iPeTzd2SVxAFvUsWxosvsjG8",
  "key13": "36MCyRj6xv6iFTNBi5xcmfqGCeWR9wT7rvg46P5L9LvWQ3PE7nVpCE1atavG4N32FWzw1PtC36m8mek2ZYc9nFy2",
  "key14": "QfkswSBZ3iiM5VMesBfBJyEg9jw2rFbnBeeLthXvDpv8xvGSsXzHaL8an6AC8D2ChBHLXMskJzDqCPaKFHt7fUd",
  "key15": "3cCMPJqFwqAp6oJHzXFyh1zxVvx2xeL7aj8GG2nwcFujwbPZSXUC14XrJdm3B6XqERuBGYZjbpUo6hvivQia1Qwd",
  "key16": "5vQUADefcFP2zkx2117DPSBTCeXtgmE8XHT9QFXdApHBaSm1vKEouSq7DP4JgpWwhvA213ntikqAj1Mmfuw8nnBq",
  "key17": "3nqWhy4TBupKhwqKSskUzANb42k6WznYeSxi712R8SuqLNo82vFXtrR4hrAxbAjAxFJDoLTZ9gNz3bw43u6H1W8m",
  "key18": "3vSvVXfzpNLc6sk7t1Q7VjkvdEViHuumuWbSYHvhMYVNHNErN5Q1w4whYHnRhvDVSxFeYWkWCAPcxgHTQwcvMXxh",
  "key19": "62UftFerMx2cYKNmBWS8ajtkHstVQgaMBePEDvJmabpQMRBNZyHLBA2WpRiyEVJ6KUxoMtkSNgj1rbRUj4gFhR7w",
  "key20": "4cHLFURzZudLzKNwreuEvD2kq5eSyimDrYYoGvZUuWwQ6gibnWSwRxGPbrHvbtdp2uHYGysowGrwuMkK17SomqUx",
  "key21": "5gPKmgHr62CJ9MNX4mcBwS7ymC12L12tM36VraG8DyuCAiNQEiuerUYkACiAzENG3XFrG7P3917i16p4rRma7pjW",
  "key22": "QobbsqVRe51Gdh7k9RFVr2hqwzPitniuF4wUnWgxp7s2cuPccumMcYw7Dsnic9ZExZsD42EFVN2d9WUoHc22Kfx",
  "key23": "3TVQGrpdoXEfv7xQSjcVXkKfum1rc3cPrH3fu87npvcmRc9TFcNDwmm4RoqzQiDmdDnapmRPYTDPiEW3N7awFaGj",
  "key24": "4nei2XQwAsaMAVPm8mE8ud9X62g4N5h8MwydagapUjQDH7sLYFrXrH8Y1zmJFXkFs4C1W7PZVk1VPqzWAL8Rmvov",
  "key25": "3EsrEdKQqKSRxuFddWMgNW32D9Ct5QwbTz7za1Q4hTGMTiaFJK4HfaQnxnj1hJSqxsfv4o2XqKRdNirGDjbmfGHY",
  "key26": "5HjtVj4bZUGaQUe1iUuoGxsTdJv8RHbYUXcHRPu1Y557u23CGa7mi1P26CvXia8QPvJA6KF56pEUANfSvZkYEMqm",
  "key27": "YoQgdeb6ghLgjGZmdXSBbnuYEV7sRyLtkaRso2ZbvoBGF8UUrAWYGgttUgse3qUF5TFX4oDaUZEfhmtqiCW8H74",
  "key28": "3vCF2daW6QQZETTwXDQfqEgVnw37Bu296LVzcBXqJLdkPQ7KnhHiPLgUaerLHuFjjJqeQA9hqexKQPC4PGweQ2rZ",
  "key29": "F4u3YC91YJFeC5LGt1janFdEw3vu3RT2M7sVqBJMGPrUA6jspS2hkhPYTr5BRkPdciZ64kc8enJq2qcAo669wNr",
  "key30": "5J1bSyw7yQPUqxB6wbjmMy9HpvVGqa6UcR4x3tuYguw1ruhk3SrNozA9uMykraNp7PHxgkFWDS9yT49UmhWnJ1tK"
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
