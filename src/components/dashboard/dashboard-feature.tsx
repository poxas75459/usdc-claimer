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
    "3wHxHBZ6dPDi332eJpmxnzSZ7oMqLEmVK8ABPbXwxwpVGe7M52i8RLotJmJLRWADXedHBrvkG1J5iz7XiLai71hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APVsv9NnF7XLcXFr1JAvVbUGuXfAAq2SSUUh44WPhNpUeVm2TJ4tvD9Q76A3cgG7sqxDyZpUYWnkBoFamjKVWjs",
  "key1": "491N3Mn8gTSXJPzm6V6g9MMn9prtKScY1g4seZPdgwH9wMEdZ2JA1gavyutCTuMfJGkx2k2TE1vYjYf5YqZMBVQx",
  "key2": "3tRZVv4VHgybZFFZbPU5ycqNJaTfawuCQsCK4AnZr3r9dBuCDB2P8xQZNmYt2m8aBquKtwAVMBKAajPcaegfp3NP",
  "key3": "2VcPnVSykocT5dacM9DcnYvkkULocfdRH8CVzoDbpRUc4ZfsnQ7aztvE3ZVb5c7ZnA7QjBs6uByCY9yJDucRMXD7",
  "key4": "5V4VqKXiPAh3zjawVyXuZtTdn87cUUTr75e4uQmx5Hqz6SRtTpYRWVpCPFAXfyaE3jzJAfNK9hYc3s5zTxU5v5sz",
  "key5": "3mnWAnzXQ832eER3fBaopZKnHbEk6tgoKVAK1kwtzCkK6NmvnPLGMyKi17XatSYxdELAnAAoKQ2zBCJq4L7djj4D",
  "key6": "u157esiUkZbnTMBt5L6trbkeszBub8d8F2Zqmq1Hwq3pNb5PuBck6gJ1M5QMahDr3QCEJU6dwDa7PFjMH7uT5ny",
  "key7": "46wDLEQAN5S62HotqRZBkJusCpuBhi2rQcgoTW3Jr5bGKUi9XxWBWtq7wPJGwTtSZuU1McNetjqRcJgPDJhhV4Xz",
  "key8": "5SRknjH5r2ZcAkS5jrzLt8F4hDKA17V23zaM3G66hJhwtnLYFF8bkt56KR9aNsLP2T4FbKJbDmXtTzdPvBzCh1eo",
  "key9": "v1y3SEsfQ3yTKR3HK7YEBxkK6s12PdSFBwckYnmH7oS8qCVxFw7TfpMDT7EKeCthTpGMAH4LMV2nxkH1CpnwfuU",
  "key10": "5ota1R24939FkFWFBmQ5bvnKagBEH7Ui2Ggda5aGZL2tgRCukXxu9tFnTrYEN6SPky3NqkQWV8Su4mQ7smiqwA1Y",
  "key11": "2QoqEMxuvr29zod2dfvpj5SRPuLJMy2qqFrJ9nZoQPbHKiS1dtD1tp3G13DKWUFQjq7YCh2nHzfoZVW17Jshbf9F",
  "key12": "3FgC1NSoVcTdUabHexod4pFBMk8G4G41UEiP2BzK3wE4gkm7gfhE28V1JicG8a4c9CgyGj5ZCjQRLBFcYqDea2t9",
  "key13": "5bC13BMGyDchBtGjCBfMtPVvPYTZiHTomqsWc2gGQFEQWQT4ua9SZJd853cCPiHW8g5HoZa2dV8gcp7FteH4DUQu",
  "key14": "4fExMnBLHcvMN4KFYXaEfgwquu3S7qeBv9871r3AG5keSKEigxuxqmw4v63GqsQLyH6MQuYLVNeyRmjP85ULTHEP",
  "key15": "3jd4rJhSGtdG5bg5rBgCwokKvtyupAvayr5nsxZ8nJc7S8PgUb5RcbPJd4W3PXRJnEbvJTD1fAQbNFcj1hHBUxGH",
  "key16": "4R8V4nq78oDukzYLeUSXfDskS3PFArFRDug6qgdzgRJYVZoiRLgyM9j2ZewzSA7g2H89VCMbM5iEEEY8acfvWVUE",
  "key17": "3WqHp75UVesAZfzS2wZLntPSBiS6i2mJwDrj3yjJd2nnmGuHKW6FYxra1wpuQQMxHRDXPBANDRZnQv4FvpcJZkGf",
  "key18": "5zJ8qfMh7WxvFY6o3jKdHpzaW88eDiUDk8Z46czBLY2F12CEyRJRDxS2bFE3q4kiw5DUxVrngfA7BjxSLEmrCx7J",
  "key19": "3q1t7YBr6QdzS9D71VaqNiTaAYyLYpaFPHaSLGzqsHBdygCy6urTnbFBCzmhF6zAL2ne1EZTT3vw8RSEuEDiBZnM",
  "key20": "wmEauPcCKe8vmz3imCk6Jet324yakdDs1fEciViMJrRLD3GLhA54UA1NYfJSkbAmnFAT5fqmfp2m1STZuYtzcNE",
  "key21": "2ozyT81T5q9mSMjt3YzagHa4tvdjjWHLZ8yPW2XWeddxYso3kp2cqZejWgEjsyp96XxxqHM3EL4FeJj9HA47Hpzf",
  "key22": "21JVvcZTKKFtJkBGZ85EwDeixecPMaXZANAnxPsC6CzsEHiEhQAsZ4XB8V11NQh97SXbjZdL7eMcVgh9SAcibFr2",
  "key23": "fjhxmmgyYAoFDFEpS3HNVQ9YPD2sZy37sifd8qDnNxcZ7BRnceQNoYucLD6A32mwnRMuaSjmHhR8SEj1XuimqYk",
  "key24": "5yimpji7xF4dqwCX1wHxKBKGvUHX4x2W9bzfRXJJLSiMz2o8EQQtKgeM2FKhoUod28y3AySDy4y7XeDWaUNqa2wo",
  "key25": "2yuVK7deDGcFuCdQtYpScnXgBwLmgBckHPN1AmLX6Lh4aQYZ2otDjNdW1CeXAdLAiFHeUxstaFtKUASGLF7xiACj",
  "key26": "smcRoi3RPTS3bXfebMF24V8aZpPkHMETDkGudRVfkMg3gPMmp5Wt7PvLEE31fM7NdNBkJ31GuMTaGXN2PsFwhGY",
  "key27": "5NeWuFWBdCE3G3bvt13nWJadEvF6vAo66CWVAujEgVasmNW21VBfE6hDSXkFQZjfK2gHzrjSL2s19DaCiaXDKBa5",
  "key28": "5r4B9bX7TjqszsAEzqsyaQoMyzKdGmqWYSW28o6iShyDAtQn2rGHcSmLb5ftqqFrcLd1qHT2PBLFbYZfPNRtRq3r",
  "key29": "5zuNerteLuMzNDz4xmrYtyEbs3t978o9awNx6GaywNbdGsgHHAGLv3ks9KM8GzawuPHHebErqrNQ6mxfqcccstdn",
  "key30": "BFgAGCdX7WkSnWbCiwqkEByrvtFqrfcauV7oQAVsvGJuc49iePFCys55efCqNu2tA4cXF1E3wHFTrtemUwYUeA9",
  "key31": "5EHpWKy4L2uZYzPHtenNuidnXp7QGWyf6sxx28NEiPnQhQYW255gZsnwF6F2HuibCT6Ex96aE5QjASpA3wYH7Yiw",
  "key32": "2S8aAa8DeDEP9hgnpeps1mHvwtMejzFAFmorSEVVDFEioMkSFs5evUZiZCTUUBtvyktzKqsjYCy38yyXeDVXdPjf",
  "key33": "8kGTKtsuTPVCUhsS448m2HV8mA9i8sxeHtJh5PcTUAjd72e6pA97VFstgeU2SbwEyZNibBgdnG6uaZgZ62ncCZB",
  "key34": "5yu9bA4zKc7n2RJBbXwoW476NkkRVzjvhBRbcedeeFBsfTZFQDanqX3QHYH5Fc3JpnPZBvmRGbMHsGbYSMU1knUu"
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
