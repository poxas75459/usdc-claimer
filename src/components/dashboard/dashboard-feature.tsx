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
    "5e7gqMG7PgeDMx2Co6uQ5bjabKKPbEASSjmhte9KBgRVGSTbN9qRN4aDpTbmKP3Wxc18HLE7d2KTypGTEdVXc1qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QFDa3iM7p8Aa7nx29W7M1ZQKFv656eMSz8VWNuXrBFRvvwm6tPFjTdttxDsXpsXHzgedYh2CarnbkDMqjHfACP",
  "key1": "3BvUwBuYCK5J6RCE7rhnMNQd5FssWQrdq9vAEMk3mkR3kk5V26bTSk4AFrD2TDcobxGBGAAuSf91qu9HPmN7e5b6",
  "key2": "3vUCZyYnFuCmRFgCJqX6cCGpxT3RKiSwGMifH874U9BMjhWSHJNNAL1EevGSzX8ubiAEC3vvgxaktGbRyRRjAaaM",
  "key3": "4sjoXFimtUSQ2iPYhkYkDubbMM2vNXqgiiwWKTdKjPAyRgcEcyDfZx3Hja7wdkos8ATA1fEyRVKreN6h7fRiJpds",
  "key4": "2tLbL2F2weiEmiTF8tPgjrg6avAiUMXW55oB9WowxYP5vydJ9VxynN5fJ8BTpdz2U2YDudfnjxE8DaRHpLYssnXM",
  "key5": "4Tx6Uo5EDtP5M1FxDkQFB4QtSbjkc6xCYWDoPQrcDRb5VTr5RSDDqkbBttFTNZK6kFX2gdLiLQ394AyKURThPZss",
  "key6": "uFPyp1suxQSDwvEy3KpXRXguuaqtVeH6u8sSP3LWbxrtzLsyVQ8PQXmUsahcYLVsBkwgsd46CJfRYKj29q4xhhJ",
  "key7": "28MYeoLT3m7pKPULWKZkyavPByKuLh8BoNGxjGxQcgmbZ74id39gSateNcF3kxxrLJNrYAhRyCXV4NpKe1sRW6A4",
  "key8": "36acrRh8jTRE1h28nPF23JSF3n7eR1yjNBFMxW1QLEqG8A91HHaP8FEJVwfrsKU2AYbQmiiPHAzHQmCBy4fghugJ",
  "key9": "3V5j34q2untqFeKvH8BkhMtTihjAXyqCs6Cyppo6C711WHxBbzYmhogECw9FHiQjcaZDxajF79z4ksDWNees8iUY",
  "key10": "9mn7Xb3ERUBbNKKbABczeup87HVogTHF9obUpchaCDp2G5m7HdD6Ssc9ixTU5wQiCDtha8ghvT788J7ewmfVhFS",
  "key11": "3KjW1T35RgWDNVYMBbxUQKC6BA9Ayw3Lk2UK4GVLGitPzesnDrPKap9aNVD1WY11KZaEBFBLnSa9HhB2rhYKXhZX",
  "key12": "3XSgwCWUbo6d7ttQZN6LbZiJLTeaGDMVbumac84H1xymzHJq6fRZmo5YKfC6rwzY5iaW1aBRYAVFKn5yHALYHa3o",
  "key13": "53Ku7HtdcxVgdvf6oSpYNArW4dmeCNsJb7GuD9BscCAf6VqqwJuG8hnVhnXE7EYfuLaqWHTqMnBjA3kWHMWkYP8b",
  "key14": "5gkhEJpPvpH1Esj9Ef2LvoEZmdA9ESbPXgjJPV7MRGX6TG4ActeVtecfccrW4NY13MfcRaQyMSNan6Cq9C6gDzkB",
  "key15": "3tBrxq5QTpsQiM3iz83Bmd7gtcyS5hCz1FzRWa2QAkSGYiN9iyQVFJ37VaDkK6GRjKSFiNVqTp5K5TFXGnqh6toY",
  "key16": "3QtxSovmxfwHz4sr66YzLNjYbgDcvptqYR9rUhrU4YJpFJxbWy5MRx3caipKRk1iV2QaBBPJBGowEqtNDdUZ6eQw",
  "key17": "6bb5ySQcsGN5qbAU1HV9qkwCtdK29FqW7jRoNchM9faPqMhYxp4YwjabXjV1RLG8RcW1YsMzsavWJ9GcM2VKFup",
  "key18": "4J4BifF5oYCAGbDF5Eah1b8hWXYwF18ukCyRBThnaopBJ2SsAAVMw1LHBhNw9Z6658j1PifpdZT8dVFFNEqCceP",
  "key19": "2Xn9wfVWWGFsNH9qyE1ZPTBz1tp6egyzjysUU38tKwjgCYTiJoTvj32mhGcdp4v59bGng79i929godEpT93Sdipm",
  "key20": "4KVKjL7MDjbPmeaSXJXr2ViYNT9B3oqwqcNfK8Qd82mvjPt9AbQR2pnxqr1cHFxL8c8XL7VFFoCnaVbZjxLGcHFd",
  "key21": "535jGYhsRHjqJJGV9y98hqqZFPrYSy2vZCSCpnYsbHrigiS9d6ZXaqhoKoukz5cE67UTtfJYwTEgejx4bQBQfqEG",
  "key22": "3XwRhwrqEamZSqnsWShsxfyoXDQWPNhwg6e3LjmqhM6ehGqatJXm365Ps2uukxNwQFKQoivzGTeZirRkX4gfnxs7",
  "key23": "2H6M9CGYruzvLcjVpYteoAf2VD4VBPHvss6HytJSgWuJvLi5jcMnYfqpDnZL88ZdFujwUSDThitN3ZWsbshhbua",
  "key24": "2KNYVBuDaXFPZDCsPpKoqpujx6kqEF31yivTok9caZ2WqGNyXWzknH2ohU9GxNV7mxMVoAtGHwXf8GuA7EwyYSuN",
  "key25": "3oi3r31PXJ6vu5wMpikrwYMocwC5vhjxS9Yr8XPWxje7vGwbzc6LasZNTZSF8bSbwa424cCmoJbKu3id6Tdenw3k",
  "key26": "3RTtrRdjBAyA15wHX4fGrv3DNkZCJahb4aYwZb6cTntUjSsNhHwTgnCfyViQkVwzgX1Dbh62qND8xDxqEEo9hPxS",
  "key27": "3fnrGHqmee9CmJM6wnxxBMzSD3uDUyGyfd6LZaPkvZvgKdnXdYQmgmqPxrxoD9KUcGx9sGFphHeQBebWELXWUw1S",
  "key28": "3rpQDdVzTYacrteW17m2oFb3eb6UkVUuGqAyV3wqqk6buePpQKopqyMCjEqri2BQathwCoV1RL6eKUzx9dkm1n7T",
  "key29": "3pf96FAAKSegmwr4MmMRcoPH1pS9Mo2vtiwmVHzW2EcL668qHdDiu7Wkd3P3xiiMHoKdHePonJQ2MdCR97bnwt1i",
  "key30": "67G55TiGmxfmrdNwnroc2m9rDTcvM4JM1QjrmV4Wz8EvKmUh5N5rfhdR2kYbngjpaHrZAogbqFBBqAHYTj2FdQpC",
  "key31": "4FvM72AUJFZZh8KXo27mbCcxnBVBTJzZgr5Q1sCPtq3B57K8s3vQeBK2GmJQXAbHHYV6m3Yszjwfnn2x5HSeBtAr",
  "key32": "3r3Jx25UyyZtYia9BkhLVP5J6N1C5hdwen4hzKjcTTa8SYL9d4X2rtzAepuKuLULSHAw9PsZiMUxZaQxWwNduLRg",
  "key33": "3RfE1qDZDQkQRd9XhFqi8DmXPLJG7t2nhcQKBnLREf4kFeTMMuDsC5drEDwy9J9CjeXrkZ5EcANXUh83RH8U8SJE",
  "key34": "2Zasj6nuTq9ygWSGWz6QW8ef3HZkzmQd5Zr7Q95B2NrBrA9KETrxknQdNM5oujmEFszcfXRFthwKYTnN2fhyHUw5",
  "key35": "2Bi3WDiLQJfaAHFrwpb87p63RFxJ22ztCoTzZzb9Bu3oGbm443c6NMu2rH2aV8cF2kELFgupiUZDSMgbPmQzQqAA",
  "key36": "5zrkTmjkJ5xjtpBgQfnm3BPie7UGtoZNR8DyVn7cgqkjYeZswcWq6P7e5MwZpYoHKUBzuttsWD4VewkYy8HSxq3d",
  "key37": "3DLmAwth4VPeoWAuFYsxss4CXiwuyrk56mvCXzZCPWLEBwzsfiGeyUrGyacEjv4tfv9J8fXGBE1Wtm7FLYKC9iwp"
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
