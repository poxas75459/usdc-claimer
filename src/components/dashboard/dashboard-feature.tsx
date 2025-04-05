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
    "xTC2T89AAmwfzC9vYBhJ2Q17VjGdkTmye8KYWBvdbGhHrFaVeXFGcBpw1VymdNVU7Uhiuvh2KMHXLsye8e7ABnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9rKNzPFC9ChrR2T2hpDbS1MfMtN2VN2BPbvsn1CQ1z84mjGsnYAjoyqMztUuRrek9QCNAagcUkPvmFQTg1ZLLV",
  "key1": "2tPbbAKeAVKGQhVqaAYz9NwzCzmgBWUVxSVPWAC97GFpCdWPYT9b24BiZEBQXmLCnqpAv2QFeKLeqPF5iJecJEHB",
  "key2": "4AzmGCnm1MHwnRMiwQeqXM8WPFoQKPUbs7Nee76bP2Pjba6qxgjQDCUHCzYh6CCL532aZZiBUrn7Z5d9cFgWWqeS",
  "key3": "zm2cTM7HLfdNXy3aPMAm7BMY5MuCQ7wXqbbmqPmVMSSptCk87ueEm77QYPAp71F5ScPNBH7ZTtFMZ1FqQwMfN33",
  "key4": "72KMwUjA6pX829rR1puPxN7tJPzSDf13AxdfR7YU6hS7hvC4CnPEczLUqU88uqsDxyJpyEXQ4yjiWNZ7w8MVXT2",
  "key5": "5dsBxaP2hoDLHRRxDRfGiNSydsRj1zF2Act8bGc5nHX85UhCQLik56dGhxTUHstBaa64gpARrKM3EH8qsALjC79S",
  "key6": "4DTQNTkaWu9RAwhExr5fLAJZsYNUcwiHYvXs8gCCfLvTu8MH4Bqbcmzpi98vHKHaBX5uJLqKjUpAdGwAMACGUWbT",
  "key7": "3vSsxbM9P61Fw4E66vUne4na9vXJteFLY8repZNsYUbroGD9MMWZmSEKbHEFPwR252o5veQsoAdvw7FRk95n2QyZ",
  "key8": "3K5CfBoSN8HKLFcwnHgTiiKbPPfX1n131DyGbCpgYSFpu95d3yAKcQs8LZMuLCagpByAUi5LJHy9XPmQA7y7JHMc",
  "key9": "3AJWXamAVd5yhE6XajSzGFFWm9Z2YLnufZC2psSLUx8GmoLnixi3GXnZYxxQJ8axV6boeWzFor52FVLtcUenwNZ3",
  "key10": "34fQMYigNt782gUyEP9wTiMmthbnfcLUNiZQuaMmwpFQnAoM9ayuc43vns5trd6Pmg4K44YAGE5UgnkQGrhiAtPm",
  "key11": "5JEY6347JXxsbAZxiqkL3zr5Pa3Edewv3fKpxBQhYghppCjKx4xFDUkx6cB3Cg16Ho2d4QX3wrqA6oyVXXQ5Wmdp",
  "key12": "2S5h1graGJ3a9ogmD4rgr6ETKgdDLveqU5dXenuJbheLpKhvsa1S3gHSpmBeTwxSSf8FA3X9RGV8mzNxpWmWY9Ea",
  "key13": "5emaM2VQ8th5RwUZTpEbXUqN4QVgHT4zn5UyCGbYwNNH8xmpqNy5J3FZDKNTXEhxbZvsEDNTtFwd3sCmjARvuRgo",
  "key14": "QS7VgvyRZjiX8opHRBpsJpfBJ6ntsmWzeuu4Q4yeeVr72SQhTHjJ4ATdqcSFhJxRzTBna4ANUgZxdpVrC266qHa",
  "key15": "5gSJ2CjuLfQjrDD2anorkW5GguBp9P23QWaC1ZD94MbebUVFG9VGp6znzrGXGRNkHnJeFyW35jJ1237b6hCS9Ppb",
  "key16": "2ZYhGUtxWgK28HxiguYs8gaqDs31c6DfdZyteyuukW3yNy2o8UbAeseswpFVDEUowwy29eVBoe3dYhSG7PGbG79A",
  "key17": "3c9qcu3xFCifupqmreZsyBXNq7vgXj5C1e6nNGnYi51Tbo6EyG2rUfPoLQhpsXSU9awEp1dbtzz9xHNubDC8yUc",
  "key18": "4w9ZnyrnsqguHbLxif574XDSxH5QoVt1y2D1rhrZDfng1mmctiMbtPq8k3HFvTWt4XQgfBvwbRamCts3uCNDpCap",
  "key19": "pGgGatuT2XCwF6qotTRh7VaQC7Y8EwknxgenvLKcSSeRRqNA8nN8R3VSWsuQbDrnotWjXjQHdeJtN7j3dAeLS78",
  "key20": "54W6fBqLSi114BvescaETmvqN9Bg5o5QNdbqbpm2sv2yxNn435Kb84TRysHJkzt2Ch546P7FjYQzK68rM9a7NoQ8",
  "key21": "48FN34CYPHkSdSXZUycBSJuRhSNy2ybMn6iZXxpPaFhqF1KAEg2yVy1Vdee9WacSX2EQMxkdnf3NDzSogY5wus9x",
  "key22": "25qYGNrwYDC8zrwvqDPJ54KHnmRmQVudF9thR5HoZxAfePsiWNX146DRn8YDbr7xxAtuifUTTdN65WTjvSnFw3Xj",
  "key23": "33pZ2NnqF7cVsnvKz6U39qiuiTcXD1bePANJYgpBaNdvajCpyGDy45Vm3F2pqygrvUCuJx11JXN3tWCQGE6b5rPV",
  "key24": "2YvvG2ZYyhyLo7y7U7eDA31JkFpMMcj71L3X4sAVCaLL3T7m1zoVFzJZN364tK66J4deGgHx6iwWbo2FQF1KPNat",
  "key25": "2H1T2fLYYemDeCRz28hWcmfm2dHCN2hseMTndnvjNNcByrnBa4aoukReuMbMdCt9PDFGkbQMVy2ZwDvn4YfF2ngB",
  "key26": "HrAHweWPWsmhbNGnKiwmjAeiEHJBoJPtZZLZSeRac2BedyLYSt6cdxoeB67HLFmiFawyTc7hHagrniodcpAyQKf",
  "key27": "2RVV8nnCGQ5BDyi3k7VfabXq1pnMBnSrtm7n4et3UecHZyARLThtgNiWL1LJK8CBTPtFpi4At2hcBVDVk8mpje3z",
  "key28": "bdM2Myhs1zXVbbv9GfoaYiWmeeNKd8u9g72uzx9hT4Z6zUJpoXtvRXx5Mqrde4uqSFf2FVJcn4vMQPs4rnZBWuR",
  "key29": "2e5KTgR7Gj8F8rtAtF7xyNukWE6mwW9kb7WHmWUKQejhfVa2At5ge2na7YKCc7AnfRDJutwFUJQX9Yj8TZzseWUE",
  "key30": "4Scn9Ky8Pkw1A71kMcpdur84DsirBFpwzSwN7AWvQwMDdVgZ7rssQkhLfN1Hqjq94a1byBrydhrTzQDLzGsJ9GKp",
  "key31": "3tPp7qJLcAEmFmXdqDw33fZta5GxnxhKvtmwpRMf2UA6hVnMLbhBAeGpwsRmyDpRBNasfwxLPERDCF7MzWbcSTEu",
  "key32": "PZV8CxKUdAVWxAPFZbsU898k8r4PT2mwpJdq6zSiwiE2i1cu5zhkBSwPqkVzMNs1eGnWVpg2PjvSbY2J7hksHff",
  "key33": "5HQTaKMtGfWY44GZ7LsoSreEbZPdQmRQ1SghMMKn2fcjSXgdSwGduCNmofQdpTAKGVECGUzqqprNY6Pd6dXSbg3r",
  "key34": "4JdTTmMqJksKFT7sYfrPpHadZu9QyTejyq4YU5RQjNEat5x5TRH4QBw2b7TSHR8ffEj6a4aHy2P1jaE4U9KoYhhJ"
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
