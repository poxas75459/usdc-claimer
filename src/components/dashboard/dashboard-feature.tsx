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
    "4DuarbwywiSaxGpGkBnv6T8EeJFgqrYPUiN4PFMJunPMFD7ySd7UDLMAzB2PWyLuJC42W5L1GzcsjJx8Z4eezXM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCtmWWoDXgthF3mKm4K42aB8CdK9iYPXjCx7cbP3N6L8ezFruBL1kkpu7Td7HonAEstt1aMAzdCGBsBbQZHnFH5",
  "key1": "gzP2fqCHje9rhTuMdbmM43xC5kX1keAqiY7tkjNbYV4qkrE3nrzrfjkYL2Kniqz6Y85bCRTL5Y2pxCwQ1e1JS79",
  "key2": "4cfpxWimaMEJxx8G1hXordTpcq74xA1zsz3w4msZWtufsL2FdJb3ihaydytyMue6xhtB47tv6Mj9TB2HjUzM5khX",
  "key3": "4YXeMfcTJ7XnhxhBMtyGei9ciSJaLiNXHCzFcW9CdvFuZEUVALf5CuC38AZYtibBthDFiNZF21ZaXuctnDpX6ekL",
  "key4": "2yHLQ6ytc2DjGnnEL9XcDdQkGr5jtuZ52AtFDDQEJtG6pNDDGL5ZfjeRKX8z2D1kH213fwE27isabwm57cx1nVZU",
  "key5": "64unZxBdUeUVyxVAKiW2bxy3LRuWsoprnq7Zw8U6DJEzdjViciXjmeshhGHrvKVFXXhtpUG9MHtxgbUDmV7Grwi4",
  "key6": "PbDmmWckYpC6kyfdXUYem1bMDv7ET1tHF9juY6iHLpvS712aEgtEVirDuUkAJDY7BHPLD8JrnTq6hqb4BJY9YLM",
  "key7": "29rh74b9q1PEMLhNymHweWcG6o2ZoWHo2QLRDKbkpxY6ATvyQ4U2FBMvWkCE22abZM7Ksn8vT3bZTmYGCoKv8QVo",
  "key8": "5dQ92ejhfpUGMLqFMWPAMQnoq9ganb8CNSqyN8MPmewm5NN2Ad86B44JYZu5JPF9aStr2YQxxG8yQPaXThfyTNMw",
  "key9": "4p1RUcybgWR2MzvYez1F1rFvXLfkU9R8fKQeJmYq3vB741AXEvShgQZFAaFpVHshBwoPdKMamXhvUV1vmHVufYDQ",
  "key10": "4923TGuLv1twuXn8WTJUyX7XhquMeC6y57RcSDjXxFaj9sCa4wHW8FKBpBPVExnsvuw4JQ2CMDrzCbSqtj5caama",
  "key11": "ejTCE7QXDP36pv89FY2RxbyU8yBFjYgnGSYGBPbaWiWFt44bQZjQLVvct7QupuEKifj2onZm81qDYnisiCFkAZC",
  "key12": "4tM68Wo779ebkfAvxcm8U4BRbnHPcmrZp24zLNBCPFZCFkgbYBeqazaDxWhL5hStDofvPXEBPCRxvfFRSwPXQt1M",
  "key13": "4Y5u67QkL8qJHUQh49oXDxQQ4NMDFjwF2669Bu6nhaQtRMushBoE7fabQQYjpEJo6UDJ8ETxp5MLCvLbwLKPoj9H",
  "key14": "4qSreqKAQr3z2UyAjj66WxCFWsLGzRYMfa5eZAG8DCAm28fcx6J8Cf97Svp8XEFqtfWZJoQELzGgUGgfhuvbSoJD",
  "key15": "LHdQ27t5PwvLaXPMpgSXmQBu4RVE6dZoSvngzS6UJ3kN53uLERjEq9b39vha2FPVf5ftYpHBWDV2DX6NpJjeN3S",
  "key16": "4vqxLrTvGDT2k6dBdzWWpxn96c8PRxGbphRbUenj1yUJaEeuEJ3UUZx4TrA8GxsjLW94g436ySBbxbVUkLhPffWH",
  "key17": "2EmcU5mcBaNyx5HhZkRf5rQSNHP2sxN3c28BiNm7fmoDgpHunyzgvigrk1EiU2vQDtW7fbLEQUC39bErhN8amWb5",
  "key18": "4Qw5SwLsnE9VDcB2e9sMzyxDs6HdFLf1u7N7SEHWMgRSUiUh2zcyj8QKU3Y8vHnheu9Zf1fsnGCLteBJ4u3WccDD",
  "key19": "4yKoJ2fBhGYV9QG7y8QgJkWVoHJmqYqyKQrVZydXUJnPqaqzX53b7Xk59SeAhpnCn3GsFpjWS5N8nLgpDeME7gKm",
  "key20": "3gT7bYKT1tNHnoDJvhSRrKYTdqEfxYcWHY8QYazTo4bUEKc5ydYjyz6s2WAt8xra5juWydbJ5Moc7EZJR3C5uavg",
  "key21": "3237YAfhY6DQaKQznfKz6JSgQ8bHq7Jt2tjRS33fhpuepH3hLLVtuuZsPWVo4ErPhUorM7kXgnC8oP7HzcHALBGp",
  "key22": "613RDaUZSTHdhGBv3aAuUyEPoRG5ia8qWquF1JAaTxNDukqkxX3ZD16BFXdRfEcpowKX35taMx2QUtDfx2imdKt",
  "key23": "2kAeqvCTE856xUtJF3Nf9xQugHdKAZ8qKycP4r32usPHvWxwcTa3KuQX1ZgHb7KLVC9pDsMMNUWUA5tvSUAvgrXj",
  "key24": "5p9FhMTHGDTD2iX5e5LKVgYZ349bsQFzWXPPYmaiCBRzTMEiyHLe5uTJpGF6cGLzgnrzJ4UmiYX1o4kDLH9Rrezh",
  "key25": "5WfozQxu7ZQ2eVkRSDN2rF1cVNCu1z9ak9v5FBk5BHT8T8CVnXmuJ289PUbKheNUerY5kZADrFovfi4iwBRLQyUv",
  "key26": "2rFosvXLxawKbJqcJ39hMGaUfNFq4hKnKKNN5nPewMfaWRgjfuewduYpm5sU5oEuNZXE1mKUHVb1an3L7xuA7Ed",
  "key27": "4UPftwZkxBzov4CAqLDndyTUMXk1NmjEDzTQP6pqHhtfBs3yE33UdjsoiNVGbQZcVed8NvJx4B1bEd7TNjhS1fxV",
  "key28": "Ta5Rzr8dRVntPmnCAM52UWjcHGc337ncfX9DodS4EfhPyCGKHgR1bhbvhGh4rL6bpgyxYa3iySTy4q4bUk6vHyA",
  "key29": "5KY2mA3omidM14ywFAvsMK3oQ3MSUmHqifB4gcx3J9iiKV7C8nS732ayiUYCUw8v9VfUpFr89mSzqd9MLaZZTkJ3",
  "key30": "4qWtrMggfhsVbBZjZ4RHyM6omKGQ9o9cDPtKHnGxjYSDovAdUqSrArJxtv8EaQzVsDU25ese56PGQYKGby2damNj",
  "key31": "2TPRr7puyp4jxzszTLT96AJtpcUG7M11wS5pfyJtK5BHNZD5cohdPPhRYe7jfzGAFsStBboCNnNpkXnUYNLrd5RP",
  "key32": "311hu8d6u4Mt4XUoTK344vwhnqTFvQ7z3pn2cU6phyeXDsMG6QJGBnhsdEpajJwHfwKxtCizThTeHcKq8tvHMTzG",
  "key33": "2xo2gJPjtqgGSMeyPqUB7w1NHLDZ4m695QHyPNEdDt8wAfTcEmy4qg6peHhzF1rurN9WzZtZadNDqFTPrsNAVs5c",
  "key34": "4uihravzSSyVRYTaVzCWtpirSB3CxDCQZhqPWjqCeSy5iXFbgvtEejgNs7RH1ZSt4nAC1diPBVMbj9kZG7bczHQL",
  "key35": "frLjmvHqEbth5wqV4QRghhvnmcz1i9KpXVtwY6AJmLFmbWV6Rjec77zgxLKTayyGWpKoJAaMYWQSkFswQs9kHN2",
  "key36": "P1LY7gDsFDCsej4XBbnpT7S8qbdVWKczfvxNBCo7eurTuqy3cKP8thqpgWwKLbswSv2x3wVBgPsHdqYfrde6qb3"
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
