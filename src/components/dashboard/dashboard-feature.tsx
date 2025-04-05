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
    "3uwsrhCuL2F3zfbwaF4FeXHMV8tEYDoS79uPNrSbBqTQ2CEnzPXhzMTNnxTKij94UxWRHKSAB762XN68isJuDFoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64oz7LfYPCaE9KwbSWq4Nc1bDdVJMcGbt2jpUyrRrY1sirhf8KxLzp8DW8NQrbnvESDPkXCz442pmNEa38ZWjJWT",
  "key1": "223sdCgxBrf6AAmE61GVSZVTR7CabtZ4JoZbsEiUuNcdMKBP7XpvFov5Mz1qxB5bhoD2o12E4SpNgJ6Y6KDL4hCF",
  "key2": "2UB7Uzy8VPpiruo3vRV6XFgJyVaWA8euhy2FDDHxdtu8Ssev52wsWZKUvd7tWSdJwQF8sxoJvtUrcXjRXn3bw3bU",
  "key3": "5UrMxwnohcS5qFTUouLD364ZDvhYnXwTAYSFPwuhhzqg3gxNi7HYSRv54tRkVoJEFMoa8UtSkcE5DDw2pQ8xP8V5",
  "key4": "4Gi8MeDfjU4F2DsnQAZHuy6Qhn1rVRfHMP7BDKgjwfFxksomWocCKfjZFWLnddg2SaULBaS16khbQzcgdHBCsuGQ",
  "key5": "4phKZYtGVkUXxadAHaoomYm2nm2Fo7vURYbcUGvTsK9de4AbQ2D55bUE168BHxCZD6XucQmXfvts1sC7vCCdb3rp",
  "key6": "2Ck3cHXBjgu4bpr9DFhXGb3EykLqyNpyFj5B15C5wvSrfqJx5brmSuwRkFbVHMCUtb3d3gkYbMa7iFKNAxr9gjzD",
  "key7": "Mqk4s8kf24jVm8T8HCrHk6AhJJZCCdQipztz8xWdjcrCXF5eEKAMKFwExwitLkXgqCgxyCKNkbnavYKiY36d49c",
  "key8": "RZMYR7aLCo1MgDjLFEmERYEJpQwegzrSFwnjJefftBh3MDj3wdHwxah6RZZtyReRchzxZeAEEYSdqk6g4fQMyys",
  "key9": "aF7TnbtSVpeNAVD1LX3QULqtAutsJkDaXetRVYpoE2qPZK8nSuocYBTm8Fpidm7K7ANoVVEJn3sdMkFgYtzszGd",
  "key10": "65XTGRk1xHkguXuDiHiT5e98Z4rbH5q9WfpeYpoA7bKnmGb8JQiPx9kMCpAUJQdqrgumLzETwaNYgJPMPeLQ3ygm",
  "key11": "WN2N5yEPNx4szUBx56SH4W6hjeTN6Y49sKEJmJMXbCKNqwG5VphrsBFDnE2ZrMY3At9iRCTzyD4YUwzBj1SBWBQ",
  "key12": "2se5wzgxzWtD7rBf8tz5EXZGyvxQ5R3yR8DdywzpNkNRjFLVhcfQiwphPBHDx27dZ3EjxnAHJdxrMRi6vZHmuscq",
  "key13": "2WGe6wPeVh427JMTSCHbCe7iRzkEJt85oAdLjVXwuq9YXyzPPajqdKZHPKNMkEEp5qyZuJqRQ3viLyZk1PfpUaM",
  "key14": "4fjynZpxpPSVNJ2RvsEwBYRz614GqKrxHrpwscB7XsU5RQ1NxPMtuKDvMgkK51rJnSTjeJqqWdUpZYbqeyFjzT3C",
  "key15": "3XgWQyoaioEKgfA3Mmdh939hN2eaLJjF4rz3xQvNh8foM4e7FaPRqd8emSKfWzcdUV5QR1pdy5PfTE2okfE4VUpa",
  "key16": "2Wyc1uCK997GLRoFpts1io6fboVCAYuBxPQ4V7bJvFvMtc5qiQvw7UaDoLFfyv3exUGNuE5bDdcW5ppHxbhALqNi",
  "key17": "4fhd8yLBxV7WMZMTsTfihmEXsRd2kAZXjs5be8dGg4G67f6EuDnshx7zm9R2ayhN3Rxvchy9BnrxSo84z9bdGwDj",
  "key18": "63gGn1QdtnMx3DKBbMqA2QLGXJT8LVj4Y7t1JrupGnYaymxNPP7XE7NXU4muEZ88uF7WRV5BvXFirZQhoW3zRqws",
  "key19": "2V27a3DWtEAnuEvFA3JiNDJTk973TeH3swWRFrYJtQ6ceNY4MyZEB6W9dq1gs8e2XznF1S1MqJLG1Wfi7Wx6UCJP",
  "key20": "G5HkMezReMBPjoiXZ24u6K4KtffQHq3jeXqUVVYWArx4ystZi3UFxs1oLgQSJjgE72FpW3DLvr268sv21buvq54",
  "key21": "5z8TMmGTY65vX6uyijdN4Mhs3duX8pAWaKnL5jzDcpaYWKyifuRhKUgvKSwyr6roYh8FT2YgXciC634VBtcLqMb8",
  "key22": "2smDM473fGSPy17Dzb8GYgsaRtYYkQbVrM12jfe9LUaXRFbS67ukPZjWKJzYi3rb5S8itRKRy3Zqd3Fo9jhsz9BT",
  "key23": "3Pd7esg8kpLa1mBGJmc71pLLVgsUY8XnXEmNMpnZ1Zusn8xE9uv5yqci7PkDpvUev9vS9YVk8snJ9nLbtDAmGqVB",
  "key24": "3Mmo1hyUjvPuXRmtfa41awvAiCA6b2NZQi1MnE3a2mbNjhxoG3JUirf17h1DRdMFrJMNsTAaEKLnXvjYGH1KgiAR",
  "key25": "5NmzT25WPScQqSGveZAU3g9tiRG66KEsE61K1q1G34nCYLJnjn6BWGzm6Vw5m8dGzBkR6YGMEpVckAqMo4uDDiRy",
  "key26": "2YitE8MtAzYG9AFSG4H5nvtSTnvvMYNiM55XcnKJ4fzf7rGLt5EW4sAUejAdVy1Gu42aoS9y64WKQeWuv57gQBd8",
  "key27": "3esRy67gjKVzAAQZttQyVj4qWWiyQzfNqZM6VA6uUKcATShErZTtEwFL6dTY3JKQTuHXpbtibW12PoRa5bq5yKEQ",
  "key28": "qdkJMyM3cmoAi1D1Fb25BzsFhHA7Mjxs1i9hpQuYwRxa7xq4c3Za4Brabtbd9v2YpdnnNadP7z3FmpWdJnnk1fp",
  "key29": "2Ko32vg88tAv7sNnofZAJv61CSbDJaTEnKsnsPQ57EficU9NGv8qH7zDNYmmfUdJrDLFjbvf5eo4cmW5hNCmcdeC",
  "key30": "44TQuqF3S8v7EqiD2KGVfPQBjWJtEnVv1CoDyvBc57vx7x6ody1rVKgGCnrCG5H3AkV13nBanNw3za35h82DhUTH",
  "key31": "31UMmWhEzmFQfgYMchHSaevHeFyjXM9yWAQGwA3PTdEukHRkT1YH8QtLy6f4JWaJtqKzKEqarPxhgjooHVwng97V",
  "key32": "VR4vh3rbxcrTv6KoYJBmTtyAWcEXP88AHj56MxC5MKWHEUmCY2tdhZ6H5u5WYvBBhBfm6gdt5rWGiqN5pUT9137",
  "key33": "4rpvv7QYkCHjEMGWHtu8qP4sADjxcX3xXkhTXqRyGoYwvpZR1Rhky1zkJopyvqhUUGUMAYCAPKCcnd7FwAiT5a6e"
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
