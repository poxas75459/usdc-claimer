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
    "3gLqdYwASfF2QYWRZD3PibfRGw8utv8bHUcuBzWwPVanwjKcmGcivAuvyZaA8sC1znTzwm7GDsxWPRaHWKNwPpQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "212zhz4qL8xpUQYbVYgw53rN1NC8rwRQUAtuhQsh9xsrfbwBCpsbNRu9N8L7uaiK9a27mboNdojiW5SsvwxWUDwk",
  "key1": "edEx4QA1Np1SqTVPJJdUM1AKTxNDSJue8VpyMiPfBScA56nQ6WhjoD7UqSeUsGEgabYH9TXeGmtkGZZCJ1EC3KK",
  "key2": "3qcceFfkZVLhQsN3YYVYPj5ngWv9EzDRNpVf2hzuHXGWLXnr1qkVp8bUPNDDHrvJcG4uwkugatuibNQBMT8maY87",
  "key3": "p4CnFZ1QQZBuhoTZVbxSbAydHDAnDoaEFbNJrSmso48g8h2GeUQkLMueGb9XsnYkkaPd3dWdftLzjqzPAJU2bQJ",
  "key4": "3Tgrnx5Z85oCGw1U76kJsVerF4TUrEvgCqSqZXkyRKQbkwvnUEo6YkdRhJfX1CE5teybiYcvMRtUiFXrPdqPjGVz",
  "key5": "AurptHrLrDrm73GVKw44B4rxsroY36DK7W8ceP63unfgDM177NUAp6xVL9kqf3cWV8wDhTPL4yKpHPxMGu5QWH8",
  "key6": "36AyBQ1Ai5cPnPpuPsfUHAPihqVKAiFdhAB6kL1D48L8Hk6myk7T3DBJ24cprUoTf2J9kXpGKGNXv7JYNDWvPyw2",
  "key7": "3DfAfRcHakRkYYwfjnRCsLivh12m3E7QDKYD3DmLbxscvdggDw56YTtjv6PvwT6JqtUPUqka1FcvGtZy1qe5QeQc",
  "key8": "3Yes8LD9rv9Q3ScBUaC67obToWKfwWEsTZ24bhaeJBFxjMUBgVmPu8QpLYQS92FDVaSTwbxXxTSyMTLD84V2VTQW",
  "key9": "5eHqMJ58TqsnZ5bDozNKx6dKbwEqK9gF5G3LU4Yc9CXtL9kfwaBwzd56vyHxieUXcM2RLjdSK8uzBcVk1qJcuPn1",
  "key10": "53yKpiCgn96EqyiZyxmeLcy7CWqm9ckE7t4utqDBRk1wFtifZPczAdKF2EGmGwpyxLTjkEa3PUiinvYARZ11DdbT",
  "key11": "3VKMrEAEQJ5bmuuh89b5ccRU6NvaGp1jhhkjTE8AhztoU9Jap98m6bFNdG7HKta6NpQLQQJxWVMW9vkN9ZJswwdK",
  "key12": "5XEg9Xzfco2t8Hq8JvjvtNmeG46AM4TNbqv3jkpojJz1najbcW5gaKQ3aTfejgYnjvU2oMstHgiQSmLfm2zx9vxw",
  "key13": "3L6qx4v9XcL3xZvbHrqKBVzJJCYytfZWNnH3fa1jojwmgwTNLmccTz4C6RAi2AQ5r4GGJdmZWEpcrYKvV6iK9fHn",
  "key14": "2LTpbJhxGvnaq9FfLEQaRYAeVWaZ1WVNhwiVp8fvtzT3tWMtkBaWq3usyJ3vcCS6nvX4HxLSTyedVWYba2KrFFwY",
  "key15": "66BxGU5JYyEAbapCzePQ5WdsW6uGmW25Px2Qo9vzemNDbiL4E6SNABvsWNXyTamf4Sm9vjupk3q9t4PqaFQBwXGB",
  "key16": "3TWiEpR1UqU5K3sZPgJnb1thFMfwBDRGEQkYQLztRQhJ84tyCUKpWHBexBsWa2HcDRbWuhxpk2vwus8brmxzkapm",
  "key17": "5Gve94HVrWYVL9m1jm6xdqD7CU1Q2a2BC22fH7vFZdjKRifdcwqCBtUu4ca6YMQYLtfsozn5KMd4EXvN7xPAKPMu",
  "key18": "GnJzachAxpX2ibzubVuHXw3GrHQTiEN5zabpHLujZpV5EZwZm4BMGEM8gdYWyTM81KCgBB7ifS3eyo8J2sECSeC",
  "key19": "5QoPVY76s3C7Cg2UyVfTRVLcYen98uJZisfRXfhW8P5UYvZTrNv5TUUeFc3r5z9aoW1fpuy633x3j5skhPeG6jk9",
  "key20": "2uLYNQWpR7JXU6BqDktzZBYhz39hL4kRyLBhH2MMFvzSWqK63Gnti9V4BiwwYnYMEJ6gLTb3RhigYwMSneu6YRAS",
  "key21": "5uJKbQUAdx7KbBqRxFdh9Gbd2ZCNWkQCq23tLwyUVjWv6PFpWRCiD4AF492mrY5SP5ZVzyw6qfyQmbQZjanQCqfX",
  "key22": "5QBQ6sTRWx3r4KQEQ4eS2pHcNK7Qh8waoVd899AmAGxA5QbH13ZHzEF8LkkomCUHnLKhTH3dWrzHBdCkr6gn4zGi",
  "key23": "3XA9GFfb6istJczS7et3WC3bnSd8wGRQMn73Ci54RjjkxdUcieocxw1LCGmJdhxfNqWYeDVqwZXMVQVC9WoS7jnd",
  "key24": "3XY2MALqepd6yFKaThP9YLLHtHj2bLqnvronNwdHJuvV3jTt4CE6ukZ6aQaC9Jczy7w79h2bTMBAznhRzkA9X4uZ",
  "key25": "37N3bDdC7TqgCChhnV1FAKKFETJSBH1T1nptPd1g1HdtW7C7PBn2FywLM23EszJQg5rBwwqFmfktnwwX3EdJfKmV",
  "key26": "2ygczqKhvysq1JVjmi6EYZKxcex1UiW29ZYMYW9qm15bqois72C8gF64gDsoskEXXq8RPebvFbxFQof1sktCfFsr",
  "key27": "mtwNKsTvpc6PtjE5tiPbNKaFx9hSpBCeLkLAAVP1tGdk5uMCcd6f1xjWJbccS7kuPuD5akVMaJ1Uo6pSHx3X4L7",
  "key28": "3Boi1UULZqWtNsZUcDt2NEGfv3PdHEdnVfP4xX9nMRu15kgycNKyaLjZH6xcwJ8mPRqzgK1N7L8q66HHSybakBfL",
  "key29": "2DPSAy4x1tdizo23rg295shB7ykukLJsXhNKf3fM85D3dMqswo8RPXTXyE3CThVJ6QgmvNLvirmujsXf7UpwFrUt",
  "key30": "saFgya7L7DqXKdXfdsdxV2rojKw6zMZqDTpAJ3TYZredPSrJRcn5xQc2pAJqEK7ANZmjxJHQ9wms71Cb4v2GaiJ",
  "key31": "35P4YU9Z4cjAoVSR3YXjFqakZwMMtModmEzXZdGeRAKMc9QgksyUvFLu8rmns52jiKVrSrR5SeWpPgaHg4wd1Aei",
  "key32": "53osDb7mfsBkGoSaETii64wYQtGxycs7cFcGD4WZz6TWcouBKsQMzaa8pogtL59cq86ZaAD88oUf5PbiQTZKnPmP",
  "key33": "4nkoLNaT9Qgrk54HAu9jy6VqiDaR9KF1Ac2ghJfzmySHoiGTXiyNWH927Qn6rYCwRnBYiEiTQxJBPyt7FPqQEJXh",
  "key34": "3AkKyxQeoDci1wWNxM8KPDFAZE2csJsH8xj1qrFBMNZp7C7KD6sugq9fbesLGMhdFgEzWrfqV4jrbvjwJppQ44vT",
  "key35": "2wfotiCwrE42aFUaAq7ue88R7Yj5qcA6SeS2JAFdKVFxiahjX6xGTeTWD86sZpqDY7UAssvg73ED84MRTAgwLo6L",
  "key36": "uQgFUxc1qCycbLUR6C9MeRJ3hVGtbcS6qJdv32dFCZUtiMNQZkNFGnkWrMyHbZcXYrbPpkfWs86f4dNNQSJjkVA",
  "key37": "5KShZX6XD7D32ZrS7rdjFBmXHQ9mgVCsQUt89CikKVBJJcM5HKyzEtqUt5vjSs1oiizJ9C7h8yKYiYMN8JHHvMVp",
  "key38": "4wLtZCiwecZzEYk6MsK8dxuPTmv1xeDNQqXfotm37fmcvT3vVCKNqKpBuVQTMH6zTg7twEdHY4ST7xbnVrxmsHWR",
  "key39": "2TyPi7rRGXZqhUGbwoi6GXi8jnsrrbiEVxWohee6cuAD354Kd5yq6BRd3N4jDTpEyGsyk59ukv7rhSs1DA1Eg4mc",
  "key40": "2GpJ2BFYbvint6T7SiPh84suhbHof2oSEtnaVemPqsPZYncVeRAh35XfYUHTWWHYeAfhXBWyVmBmZdpTm6v9Etya"
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
