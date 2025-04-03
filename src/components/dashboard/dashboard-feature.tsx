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
    "45HfoCQCHe8U7ZJu7HnmFH1eofRfbg82DpLWufATZCxms16poCtbWPs6UjC94gri3JNAd7oLUyXP2sfVbgHxREor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AguWpf63JhAFaBDZRMJNCHwjTp5tPm3WR58HCbBPDxMxS8nsxtGes9pyoCe9E8iCe9vunMozEavoPUND7gotCzx",
  "key1": "4iKDf5e7sqdH6otie6CN7Xj7rhx68n3uWNuc4whsEKPWBa7rfs8Z4reEs4ajC57ESJ3eM3UviwkjP3RnAKMp1jBw",
  "key2": "5DXVyj8wuPXrdCitSVx3dhvbnt33d36AYNToUv2PdwznNQfo86VxzTzJ6G2zB64NqQrE8H8G6bWMvJsQUvtTn4kb",
  "key3": "5Nw66KuSuyVeUbSjzhzA5L9wUivKCBpa57h9LDBCGVBv7DhpMydaWF4Copuw1h6uek8a4rW6HSAZhxpxjrSktHMs",
  "key4": "qqHN1YTzG33aKgxwx6FSrvWndZGLPBKPaAz9ejfi2eQ5AcspEahSrehU4HLM7HnkjSRtcrQ8jLzZqMhD5prpEgH",
  "key5": "3vg2VQ7wNqWLHRyFDEAiiKMcsmAXY8V3QtLkspjULz5wQp3cK5Fp1KRXSjqNsijRMNXo7ydGEz2cMZ9cE1UQKYL3",
  "key6": "5kTFLZjrV5yUZoRMaoDdwqpaWDn4yRPAdEt6wuZRfVxjCFTD2FdWQLtU95Np1i4sXJhaXxQ6Prh28SVPRxFH7uf",
  "key7": "3Ra6jzunGPBbDq5AZpfZiHaKVDc38xu7XKW8Sn8sB2RCSPHR92S35W27KK2CjbDBDaNUaRBTcXmbbtP8SkJwLJ5n",
  "key8": "3UXdYWyrJkU4rJaVKETVWYLQBe34EWv9LCHBpY5iu1Rjm2bksdmxQF6DaHG8qqkYrPL9wLJyYz24791DJJKCAkqR",
  "key9": "519uQ6UnU6cY4ohqVqVqNDwrvThPXE89ZB2SdpxdCfnBH5Xm2iytjfpyBbe5QCr11UR45WnJj6sNspJzJ3uZrPAh",
  "key10": "4jhNdWhPGpJGfCpxYHhzrzp93LxR4ARWph1NYsaJJGSWGpSQhUKMtdGimjWUM6kvwsuYozvyN2WeQWWJKKUpYNtd",
  "key11": "M7NGh1zofsXHo5qJRqQtWuNmY5NvEw9SyP1L8mkkwpggBFHH3au4io9hWrKe4JAUP4gh8KQnkSidvESkLpmKcNM",
  "key12": "QP7suFhAgKJo8dzCeaqJNGcfrzc6tg18dQ8gkJcNV2HRzAtKapfiE12dWBeSiaWKM1xNv9CCMPcEH3jpVpcoBQp",
  "key13": "4WorNLJyffXtA3MFweVDpxeZjiYaBroA1H4Xn9mrpF52Dm1aZB4KMXUKLJc8rbv1G37nTEqoHpCcsPTperdCrNr6",
  "key14": "4W2oVouw4yVQZrdySHSXp84Y4ZfhhjqJCrShLTXwT7dpk7MQgGeevPaaWCyBmnEU25bkxWVky2m7WdX8y2EEa3NC",
  "key15": "2LXfuAc6qZpCB6dFWS2PnkAxwFa55VXncGS21KYirTHPXAY24sWH46voC9n7EHveRvq6ck76kwyANNJddvr85yqY",
  "key16": "pbWfuEqomYYufvp8GHaRq1fj83G7eBdBLMiPqxTATaiynRQTB9gaoaqFr7Ez7M5QKLnGnNwA6Zwb5DAyv9Bxzxw",
  "key17": "5WcP6EJSMveMNVcGVB4ADttpMuw3yTU1K6PtH5QfRRcA4vFcUYL3RErykXQJ8pA23xskH3pzjmgsqLKyPbEaLhPq",
  "key18": "5PCi3VHoTcmiMcyp1FaNAsdFJ7ZhvuaEZRqqseun94TJMHEKaWdgf3W7Fy9KYtvxQazmXMopAutYLPJDJ7rSEPu7",
  "key19": "3L2h2ov5V4hpMHsF9o4pzJwpUPmZuWDgkVeqFdo9y34cEjpc3UvQqvAJwcT6ghyrDXuRFt6aYB9EhwUY3Bnzi32",
  "key20": "2DdAtpD7Xz2hCbKDfG7ZwWZ9gTqdCGGgNqQd3CKCikcKmgJYSRun1EwBvtqSYGRPvkbCGf3yPKQh8ZWE9V42ToJT",
  "key21": "33YQoqU7f4UmWiJVXZ3goXMsMAFWmXuHieuVa9qMj4EJRsRnzvaRk6qJSdjmy87DceYZbHDhQf5su14fdadtv5TZ",
  "key22": "2bBut4VHrqRhHqGNpbpQQt3QxZESiUXtR3brdNgMMGfa2CGkBTCj9X7YtrJJBpFogg8TPNQtwafa7L6b1mgf8mLq",
  "key23": "4XcTFXS7wvpnLKHBgoArC3UcnVy4LhjJopcVHL2QRZj3J8txkEjRbVqxX7QANpB5882Drhk1MCd3qez21omTfKqN",
  "key24": "39f7GuWcny3rCFqadzqkbBYr3B13ncSjtyEFDUEcicR1rPuZoYuZJsq9gBMqdovaUMHfk2gXb2HhVMLmcUMhrh8K",
  "key25": "VBZQKq5cY1NesRUkNmyyAauJfpw6SnkvBBsgw2fbNHrx318ob8PQSoS2dd5NAqSG3h6ya4YYES67ScwVRqUctAv"
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
