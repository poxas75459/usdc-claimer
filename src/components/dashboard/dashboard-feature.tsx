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
    "3xQ8ttk3qHH9HD8WTNAycYTNvSoN3diA5v3qEQpQQaJnKQWpk2wYqkNpoHkzkHaJ5Vt39qxv4Yu2WxtZRUU5rx8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZ5xPXfoYu6j6nwArjkW5zL3ydTgcSzGurg8sPn2qVH7nxHkhxEyEFafGPHhx5JrvW3dXPWuUx3UGycJA61KfTV",
  "key1": "67UamaVRRfLT6F6MPoNPfMgZkFPvpDZeSNbgJnKmpRUX4dTuKMkKQJ5PbSpThSvkgbAyBLqUJprocJYQg4TK2qwb",
  "key2": "4YEtS65R6QzXUHgXMXGU1HvfBbEu91AAifHVkh9SFasB2Z7YJkjcc275bsY99uxan3XzXnFTEmvB7s4p2KAEuhrP",
  "key3": "bsdtfN9MwqqKEQG39DWVhHCx9QHpJ4wjsTrZuVLjPdxUNMJMSjBmUo1b3Una3BA4bdDrf6hDNi32BqHShaqeUPg",
  "key4": "3TAfUFaM1A2vGEUppGpMBQpMBYGUdprb6MozqDC2ov9PtRp2dMo4zWdfGgVrmNPRwqSkYFTbfs73HVejDPXc1vfU",
  "key5": "4AMLwCzy53otELABoxM1MxKAZ5Q5qsWPVLaCEAUBuySY3SBxy3fNNC5r7WmewUnLm11QVUoMpha5LnH8E8NA8UkQ",
  "key6": "5Rg3pxKe2eatbEYLyL3L43FaZBbSMCzmvrFFL17xfASckRFsWw4DKPUSX34bbTkhpQgqYJb8b3a6bN4AhhEv7ig4",
  "key7": "54XNvFkME6RPzHrYRSMqzaVJ8EzqP4o4Lj1C8LkMEtMX8z8BPA5SxZk45ZRz6hcHj5uyXS7Ww9m3a6VJGMkky2ax",
  "key8": "5227ymGVKkEy7GpqkGaQyL7Rqmb93zT57PduXDaxbSP8XvG6kBRoMP3xXNnuKJBydDN7a6EJb4kLBiKfigTVyReu",
  "key9": "4TSqYSoqrehQMjELGroij8xWrgTBR67kcbkLic9KKjXGStLxZz3BdiXAstxswLePdTQc8TdysBMd4gUKCWnPX8s3",
  "key10": "5P5gd6HaiUUF1Gqq2qh4SbRY1HwjKXdWueLPKDbUArXLLtuVEDrDzpDFGfTTPm9rPHCAmCMQyF2GZxwQzTGeeMEq",
  "key11": "2t2kQY4jKUnCEosjUY7SEoy8bDhEysnW4uYdYKLoiBP8LDgrQZBdBTqGmQoz2JKpUjhQcTUWMMu29SE9jCVLr5ty",
  "key12": "2P4JZpNmqwWCg9hBMhnC1YhKkqJ88WX2SGCbUehSQyvFXQ3v6k6rQVCYMVwr8o3XGgspzbGufr119XtMh1HPJvPM",
  "key13": "5LfT7tZmF8BFywX4tpww6A2Br3U3f1fXEBEkg1HMkEp2Y2KHy6wxRQoVhPjt3BFhsofvyLHPCYJpYzJhh572Bcq8",
  "key14": "p1tt52huWji8kqAQm9Lh9VxCbZP4NWVYGu3GgjQnU8JfDfVSygXw7Qp4CqWqokjfSqPUKbVtRCx6XCcFpJy5NfX",
  "key15": "TRXYYv1qzLZKfeZtBGYnz2eWRNC4WwzWcNaoVcmC1PzXsaLVDGGD2GefJ5T45s9ubbWKquZQg3aCWwDaDciwnud",
  "key16": "zRUT1Scx8wiodVcVwSThJAhaUy1k92QD8ofqNcpEcjxPkt9CscM19MhJFTEqzMo4gmZ72GJeoWG7cam1N5YwJuR",
  "key17": "hrvtMLcbMMaK4YNgu53mRRfLJVCjQRCieEne4buxWtc6Ei9Tn77p3Hsem4gDpYNzfMUCYR68nrEbz55oi2mrk3z",
  "key18": "4Srm7MXr879YiSSPFm9b16hHPqyY2TN9KnBpwpkBqSw1h8eMekdLrbvuTTQhZmWoYMYTM6qALM1ida1iEiKJsNRr",
  "key19": "3UNpi6AG5Qse5x3rbWaxLsighLiqYxr5SRvXtYga4f5rMjdqKyWY6zrj2gkac4VDbsjj7GCre5BV6mQWCuwQqpY4",
  "key20": "4Fq6f5DTP7o8tBDSapeJ49SCqSvcA52usngq6psj4HBRYuS9ANzGLwn6d9DqGKEjDiFZYb1wPSHnvn5LE434iJBB",
  "key21": "43QyRzaaS1Fy9PQtKDLBwzoDtGWyqGf1VK5ddR2bntDtAyWZBxmwrUYaaQFaevJowX7GVg6o9bz2cecYPrSMuiud",
  "key22": "3LDA42P54EHcVQj1zpGY9FfAukH6VAgcPUbePNT5YvsV2G73qPP9RY96i93nLgtdJjQfKrRj7JgxPo3Tf6yHQ8Ld",
  "key23": "cePDSHEY9rP9tC9YHDgrEnvpKrXU6sZEKjoaJEdd1cJJAen1zRWDA1YANCXWrTfEEfhft6MizcSM4hSeKmPKjAt",
  "key24": "46n2omS3ag1N4JmGFw8FCmATtniJSdwQ6su9c8dvMpAqzk86hSDD7dQtgoj36GtZPUNqyZVNDGA1mkhDwUGC3VNP",
  "key25": "4oSnoxPLDaVWfYZQyL8EgCbARRzZBfK38SD8WXTBMpdQEs28XqYKcUaZ2jZFrsyxBgy4RiizuuFi3qbNVJph8kT9",
  "key26": "4hsVv1B2HLnvrVHEscbXLuQpW7uXaiySKScUYqA59vSUsi8DBn34uF1j1H6ChuVDFCyinjGAn5eEVTBkxa5hK9ks",
  "key27": "2Fkb5j7tuLJWXRbEV6xe447B952d3RNA4xBxC7ocjKnzYQ25Zfm7GgpBdWLu3Y9ZFK48Xd6aVrvuvAzX4gXqzj5K"
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
