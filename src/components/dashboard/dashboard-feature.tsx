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
    "5HweaYBwg9fmAiaCj7zr7JAgT86JruohzS4gHDYMq6zasSZfEQkqidceXRSX3oGeeTS3hXHkZqd5hqWGZ6Xk4kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwuUEEGaC7aHM5Jk7G1t7jm6H28XscK34BzymdLTNoVrZ2KwjTjpdqYScu8ztsWbACBn9poUZimBYMsMu1CCEcS",
  "key1": "4eDYHieWztiXzZBHcYT8MJjtdvTVSWiMcCjjWzjxMLVbxfVExjZcpRjMP5dheMAydsWg46jnbzVJJstHqU8eA3iJ",
  "key2": "5KcuPnkk1vXLFQs68GVq7wM5fjY83ftusdmMY3RpQac8ryP7tUHSxr2Guqq3gYsoVqktTCNP4bUTcQE6fFKScRYW",
  "key3": "gNiofbjiiZvzgHv4aUDRvU9qPm3T2skmRAJFU6aMQ6YjtBShGMLAsAxhCAmQszRkkJthSeSWKgZZt7FWXakukgj",
  "key4": "2wv5gATbwdiM5NHvUhau5n7wof1LS6SuL5W9jLaLHi4h7MihGvePDmjm9GbmFYwBrPuEEUGCL1QE4aESKVLBYbmq",
  "key5": "2Fib1H5ZJ1LnkrTBPM4UTwf1CPgfFr6jFthpyZhyLxHRfmWP9HQHYMVqM5YgDWdxxSA6MptpeqFjD5fm8AZWvn1N",
  "key6": "5i5byypFunYhj97Bu3MevojkqKweLWRgT6AsnzxjSG8pVehpTTXaNEo5DydBzc553uPnRqUYohkQnpVWbPbkKwCV",
  "key7": "aqN1datXv4qCMWz7FQnqZwBTofTCbDaDgKRxZ8YqTmATniSdYgkdhSYiVNbF4TpwsUwQMYGsCqffYLptL4MMfza",
  "key8": "vmXZravhhmg9Dz3GcrYccU1LmHerCUWNYruK45YtkW5BYaKS7xuwsT3io11vVub9gUdXL5EdoEKnPX6UvjC3W4b",
  "key9": "57rvPbAs2yBrBrVUhqcCoMWT7asM1JSk7CKknT4GawntF11BXn9WeU5Yw11dhtwXSdXm3zzbuHq14yNB7f3Sq27C",
  "key10": "3TVwCKVRCQQMDVXVju2E3kttzKomBsg3eSNFTieTApeEMNDRtGYUKmpMPQtCtgYhJrLVfJpEePiSuM3hmduk5xcE",
  "key11": "3bHHpVCQweMpxA7GS5gJSzxQWNot2MF4Zdv4tcj1BGgzPxjq4JSrVzUSMfeEKJCZq6KtUR7PQJXpZZh2yNsqkW3Q",
  "key12": "5wLccUF5iR6iCxayexLKibN1PZNePh3FC9iD4r2oooLm6UCGnvTR5Jb9kmFCgTnTfkQDhyUMCnHsCKX8XK3N4UPF",
  "key13": "5B1R4S9D3rZaJiLcLJ8294zREp8aCQCoi2kSFheDNNmTebZYG8kC1QjPmYXNJRsDQjSX6Dmf7nDoUHhfGwf6JFC2",
  "key14": "2PNwQiZEaECQ7kw1rTLEY61dUMtcPxufs9dZ7thkuDzczzjkvYNkERXRL7jpkuMTf7Wx8RTkn3gEpPsCZz3ggH6y",
  "key15": "5grEbpquHWQjWcnL1HzgbLAXm6FgukvsnMfmDG2bdyo9gzSLiyHveiS5fBwpxjrU7TG4M9HtWydsomvKMnsjMqH1",
  "key16": "2An4T7Aj3uEVyCpQrVx2avwC4AsRtmb76YSyaJesMWVyh6AFzDc8HYtPNsV24Ux5W6At6NnJ58N8GNNjkB6eCyxH",
  "key17": "q5FVTejjXe4me1pqXpy5jp6LeJR55wEZHjqJfSz5V6Cxp2muJo75RpaZTZ8i6bpFMG1cERAhsfMx91jBZc9i9b6",
  "key18": "42mVjLFqpsrFBwayyEAznwNig4XEzQww39y38NrZ8zRG65Lpi379mpLem2j5jVNTTEviMnSJQWMDbNJSahSzGcUV",
  "key19": "43zT4ZLm26kwNEF7XmBbgnUzRRrhKMFMst9QNteTC8N47T4PkxeEVU2YXrCVEyAQGpqq115KUCDaofydwdy9dg2L",
  "key20": "65m3Y8rKBtqUoVP2VgUQRdqpHUaEYUjfgghxmDAQSjjGrCKX98JLo7wFNKeshZJjmSELpX7yBM7djL3dUgLtPBT1",
  "key21": "2VKhb4szmnbPCHijgJPmgaD9kpK63kWAAw6y9oi8XGA6hBZD4EuVeaaS9yVkqMAQsbxF1TwCHrHX3wKADdt9uTx5",
  "key22": "3rv6mWo9GiLV7CTPD3ndN8WPksPyUdWRRrN9b6hZ1For48zTk2asAcAziTrWBiZDtUsSYuiUo5AaHmpvTs51GNEV",
  "key23": "Dm7s5EFwk6rgph39EKhrw6ZDoKw8qcvd5WLfwLgkXedPa5oPYah8bnjQGQBFQZJXdMLmdD1yMRm2DELXtDbZ1yq",
  "key24": "5ApjAPQZpwVUfEvmkRRi6nRVZfXTqcFUz7tYDg4WvSpaf4xmNnB6qqWB6WY8CbhmZsdHxpf9uutnSWLzoMe6rRrf",
  "key25": "U42U4seM9z8M8isSp1gLLW9YeDAcG4p5LJHrBiYhf5gwEns1XawMWEphG9NizMgwSBtvi418Pijr6HcioBYCZcj",
  "key26": "3c13b7nCZwfcF31P6GCN38KBVQwNMLD1HnDRqfpqUZhipdv6Xjz9HL6rUaoGVq7gaRGYXFYPt8SS5bGLbpKA5i8E",
  "key27": "5sRayRNyi4YdvjtQ9La6agQLt3MU3WFkbZoR8b3ZBvLuEtboeo9UAcQqc8QyVooHAzum4g38Hc5dpxRHZTfSHYut",
  "key28": "r3dVtFJTN8rSZWsbupu3UsNq6v28qivAFxvkde1n2tmbYp7KqQcmPczy8dhHwdFWXNA4CKFvZYEz2JYu68R3JGC",
  "key29": "2SopAApaMyuQUkzTy55wsTXHXxeev7N58wtdyojAQx7qWdJ5zVbD4K5uxzBszeuaLiwK4WvLRr9Db17wQnXjbAez",
  "key30": "5JJ7z85xq1qsD7RNonkgKuFgkD1YG7mwpT7TeMCi8cE4SgFT5JoyQ8KALwfAdfiqJjUutRBDcjPdEJzz3BvKphJ3"
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
