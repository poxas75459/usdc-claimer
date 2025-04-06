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
    "4PEvRwhf12b3XLMFbhQVsuiQEhogH3qK9t2yqXfbQb1JzjYag6k8fazMWhPKfPvZP2c8whyKkCc3uDo1Hn4w82j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWAdqmmtPXeRvXz82Kh5Mm73deVfTuyy8dZTujiHv9CfPb8nMwwdsux2f5yGJFKG2MuwiAN9g3mGtBWcDrGDPAc",
  "key1": "4u8njxyW18S96FiaFDMxw6NpyY3Rt8CMidSXsgrV9HPGPhBPwRW3i6SK4scazcmJdw2xoPtWM2qhQRqzQ5AceahR",
  "key2": "5uLupqKS8zUoL9MsSo4ETZmuJmE9z9ivvQUFdTTEhMzeJLydTHPXXHhW97hZoEjYDcC9HJG3igJqK4fCUjC1TZPJ",
  "key3": "3xRNPujPSoZ62yTkovZZ5NoxCa7qJ75nvj3jYPVXZWw45VnxhcqXsKGQbs9avDdXHgb3vELZvoLiweuK73DsSm1j",
  "key4": "4pijuqpbpqcrsRk7oW5oY2arVqBWmp2LzsApNWwHVjT8Fr9r46AzZ3AsUsTbVLZEotgAQmJaa75ofTvaosi8Ubb3",
  "key5": "3Lsmh79TKq4BoC8XEuYZBoWi6677PkB4425WVK1VZeP8wymXudR8tX9AZA3ptTVny9eY4qTiwaKwhA94sffmQdT3",
  "key6": "41mCRJXDQWmut2DpnfKx6i9CdejUu35BccGy2hSRM7uMKmeLJLgkH8WteWvz4JGagGzwTkApem7cDqK1kYh1hwXf",
  "key7": "2EDpNeuDBzpw5mNHcVoDgj7oaF8diat1DkvdzeqXLRBTE9jw2ZBcPbKgmedU9G7vLb1cvqfDQpXADfvASMdfN1mf",
  "key8": "2Rbmpq84159i3aLwcSAgX6CqvwfErgrmHE5RcY4cs1QCN19d9oeUsEmH5zxPSMjrW93w6qLtDw91gHzgFaL7HLLh",
  "key9": "3wXr4vyFXkSDSTWTY1ASeywPN4GKA3jiPnZ4hRci38iFrqLfTwiCvn4KfKDtwQdNcNwM2X5D4pPNqoCG5Fpce5vA",
  "key10": "2UNaMC7oBedomfs37vP15Dzk6wbwMk5CVbVNB848GYYszo3w6HWMJd2D1hd1t2e19wjwGHG43ykSJGFUhtJx5Tuj",
  "key11": "3FC8U6jntLu14QEWQCV4xnmuQodtuvXqTxHQUwPnry9QkSf5hhMbknsjrat3imnyd4iZxgiy9gJD2yxCiPYM1ozW",
  "key12": "4Q4xCt7b3fU7B3tn3TUMArEAxGTZ7vinVZN6ST1g5AkRii866hEUDmt11bw7L9JQBnymRRyvSkBzb5ZG1p4ZVwQm",
  "key13": "5vbauTAM2ZuDBgskiy2MNKWr9EJJkvVmkgfmGur5X31LGupAwiYuDvsSWP65pgxDmXJJAbgaazeZcG9HeKumXg2o",
  "key14": "34sUmBtLAX3Ypec5Win9iLHUQRvckUY4nDaWHPDFPygtZA6Xyhvnu1oqHndVom3moHmreB4fkmTfpGhb1QK176n2",
  "key15": "9EfshwsGwqnof5CgJa4n1uSLbXR2XaTCQ2VMFnPjgRb3JojpDspGDLKLAXnWwz76hTA5FQjwVTt6rSucBq2fbuL",
  "key16": "WRJX2LC3taVaX3imH6Xgxq4YEo5oJNKvHfvGrsJCS95GEVBcSXZr2Lg68qoLXeUAZxpwMAY18FNPfDtux73DXvn",
  "key17": "4zrYVa6sokzhPf3bFde8Cikqpxb2JWWbeeyEeQFZHo2LQwRi1jEj6qHaH45R81MiZJ1Hpf7FmTTm9ihjCboRKVsn",
  "key18": "51HuJajh9j6w84RuW7jUzC8vnAamje1GL43GfG8iWqrFxwuyEjqgYPtEG1YFPbE7TSrURtRUjRz8Y7HgxRLFApUn",
  "key19": "4haZsom8SMRiukYDQptwkvZef1eMeFkHw7x8JY64nAdeYaofirGnRuUV1msnfpXRKhZUwDSqnb2hTeoqW9hArp6n",
  "key20": "2YxV1Pct8n4jjm8xARGyyWBxdnYrWDWbxyiNZ7cwd5MmSb1veCSsDmSMUMtTPm1Bmm7FYomtF5LK3ZcAYM2Pk6zh",
  "key21": "QNPavKeazy1gUMB2sRXNtRXtHjvQYMEBLXGs2H6BeqnYocvnvSrW1JetzeEZjVTbi7LJZgTE9ikKoKpXDSd7EbF",
  "key22": "5WvQJjKhoy2CPjyXvr2TpjDgC9BL17rsb6K2UyXB4yYP4rpvNVz58ddUfjFqv8d1zybqHgKBWe3spxEjZxYWYHeZ",
  "key23": "64VhDHx21bPFJFCt1vR3zBPAFHaxp7tmAXb3tjWTZMRQCk8gcZ1ndVDWjEkJJnBVDAfJeixXdgZ5YXNXGQFF4pRH",
  "key24": "29R99FL2hcb1h1bLSNRw96iuNz3189psMkSVAV5z8a2Qgx74mLGNLVdY8R2p7eHtPQ32mfjCwMC7so7THkrZMGpF",
  "key25": "4dVXUt8GyMJX1PQUSoNnKrMz1RmWCAyKmdxMQ6iLCtYvBiSB2xQVTMM4H61FxVv2vNwDo9rv1zZQfToEZiLzAq12",
  "key26": "3mq4tTx3Jtsg18WxtTDsDTzqWHRxNzSd2pnvtJkCHqzbuG38NdWpQh2ye5nARqbuVtoxrpnDL9rsKsjZbwoPnpUC",
  "key27": "4Wh372GatdCZjfKW1tCs1E2mK6GA1HbacuqSb3tg9jJcC1tBaDst4sm7T26GcFP6wnDrZPU42dho1ocrjMqNfRoM",
  "key28": "53KFSrYdQGWVuZaqzQTBgxv6DsRSEV634Puvrd4EYBTTXCkjJeB9ivTWoKBdDfv39JbTXzJTCEHBV1AYaiox2sGC",
  "key29": "2oPDznfBZ3gRk812zRom2bz6pxPz6YTkYiPWvoQRxQ2GT6iaohFPkxMU6gycYWNTC6WRTNVy7NaRUvptrcb4d7uS",
  "key30": "2867qUpVe2VP8GjUBND39yWd4t7fCs3RQ6G2K4qWpYReYMeiqxVsJ4faFU2NnzBv8hdqoiJjK3MVPjyf1RcvAzr8",
  "key31": "Fbcpd61GKHNcaLk4sXJ4Bp7RJEWsWbrBpZTAKe9nrNaKeUXTWpgpY9ARf7FNqjmSrb7P1QCT28CpEpt1tz4eBtg",
  "key32": "3fwfgC61zHAyBGL5qr3VXqd7Es1qVQsZ3Lqtz2t29kVqFJ2hf69mD12ynxnQyAKfAcHRyR4kjJ6nE23pddwZuugD",
  "key33": "3r15nTgNx74RnDxSHnfY7jaqinT6mwun5so8QmsmS9scTgmbA2jemQ4hrE8eB1aZqqnAsrK3x5nHht7sVFjBJxai",
  "key34": "6368RByXfVMhWKvi5zqWedSpVkm7XJGJZ1oJwGfW8Uc7LpPspVfQXG4bL2bT1P6c3nmkssB9YPZGbBTsns18TGys",
  "key35": "5uajC7HbcjzpJzPJzyNYhFVahbxomKkW2nZtqezDpj9crQYBUDA3fg7xyZ8bCRYw2peax9rg7RCCfUDTpJkJcmBq",
  "key36": "2o7img436md7KiYv3AdB7YKAPXg1UMkxta3Lxno3CzcvfLzc6SrHhAJBkUPev7vaooJ2yXEbpLrmJi3bvrcwxqun",
  "key37": "njp8uRZgLXs5zp53D3iLQFEvfy1FRWogvFRfgyp57AcNQ2ccCaQz38fmaLcwEw8qGqirnt7VtND7sX6opmbXeKU",
  "key38": "GJqAcUSKJUaqwMhSBrgDgP2utsQj6ULdgs9bM4m4D4jRja2ky4KAcHeSoBr6kbYdgb1td4dEMwjMhhbMe2M7Pxc",
  "key39": "39ibS6TwhV51ruD9m1B3CzqrA4v82jQrKXxm7t6fT3TwY5QQYu7xxHRJtaoj4pReYnDgL3nY2gqXnQNogT6MtSu4",
  "key40": "57zxHQXMW3xPeiwT3UpmP91yodwy4MWZPuDy2gZLkqNKn23WTBZuLJYhCoe5npNpA62oLKfvQAdkT9GEKXruqMVS",
  "key41": "2XUDSxuFqE9BAGHrzB9NcCSsiRHyFMusRLFP4uZcRxdRgqKETDW6m6F5JJ1i3yDh8VkVaTawQpttjL5wRiq1fphx",
  "key42": "58aZsUbEWfbxSyThNbf9GFxmJivNwhn5Fo1wtkQvcFtFkf9ii9s5kxKj2w5c1YbFG78oeAHxJqkpTiMGPRZ1Z2b2",
  "key43": "4R7cFCJJ3juTw4DzikmchhBRGPZ5CDNdDp6vKjztDi137LErncNqENKDp4g8J7Su9VikywqsbUJBzpgKB9bNybvg",
  "key44": "41sa6bac2nUrqBC2cRPjeoHuHP63dAhmJiV7uQ6UCLuAgGRovn4qfD53R5TqsHV7Zt6i4R8kSwLNBc2YQPrsDBNL",
  "key45": "4ZrSUkXRD6oCT3hPeVWgG51aKS4EBd9ABBVhgo4u3PJgUoDXphKZ2rb945npTRD6pzFZA1tpzB7arSVUxVsfcyV8",
  "key46": "2iNTRf7nZoYhmJcLzcvsfEjg6TjyVmGku7NkphQqTP4zwLQVAiHJNyfqU9cTAN4p2btDjECU6Jg8tNZt5jpFRpkb",
  "key47": "35jKK2SiBuJjgjWnHSdZSQP6eRrJZHXrsJCkGcuoHwNynRQ9235bFXnKDdZS6rhchdM9J91xnXEMNBJZQX2DqRED"
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
