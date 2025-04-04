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
    "2USNfN3dKKUZJUfNirryurVjsiUHmxuqpCy8HLKNXu8UsZfaSctY9ptgdLn1MU3vKpFfy95wX7NrwXD3UHjXiEno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CSuN4RbahtD9Tsx7pUbiF939k3BttdJVVWWUctZrNcyMGNaBLqH6v4Z8LhASmAFv8N9cJ6eeFfCKQikPY6Zbq85",
  "key1": "5U1gor91gDMtvn6TRjhQR6wso5xxHQrjypiMZeXWnnwwufAaVKE8sovb57diGQ9hUcYpMqpthFok1tNsyyQYaqoR",
  "key2": "49vhSSAqvFynDXjsLCZkX79NTkVp8PXwx6NcsKAGNA5G6V9zDuQgA4fCMYN76FUH5cZKxJkiMZt9pJupKP8okqr8",
  "key3": "2TowB8aDVvtq7cExjmD1GGAksFkk6mV4ah72gjwxMMLT6pUieKi4xbj1HBtbpEtEqjETp6U4m3Svq3NmG6LFGHLi",
  "key4": "4U74PNu7mxgo3ypFBv3ZYwbDGLsCvX11FEP7YTTsVWdzktqRaZjrjytPgeMnEpyAHspagfTWPS7xY37nrXJQoNmJ",
  "key5": "3Gxw4hJtD25TiwcpBuDdZXXf99qwWfryRAwcZpWtNGQJgeRSjJybt3B1JUhgnJYHqixWxTcVv3exdxm9wJALgYuS",
  "key6": "2YHWv9tAX8jpNnLipbjh9oCnZnTwKPaJKNU31pSwW51GJtTmRd38DV6fDW1BaMVVxbE4Cn4EigDaeWmWxTv79cvU",
  "key7": "5toxYhvC4bZU7PRqjQVmfEGydeJmdgaEkfKEuypHtDBpfotoe7xm5MNfsv97sW6HSa9wdrnQddvMi5JTFrfXaRi7",
  "key8": "25bpHWY1oZLbnyvcuhPDQnWQPCPB9qVAik8rvd6BVwC1f2iANpxdfo4gfHR4eqewa2WW9iFa5tSBgP8iNcXpbucw",
  "key9": "67jmwSKr13tVeYXAHcPq1PWH3J2p7HpSAkYcNyoumFxdM5ykNnpEVViqakqujJSBe6vSfBaYgg1f2bWxRbeBttN5",
  "key10": "65YKcJGrunzLDpkmHd6niF2ZSM2374PJ6SNJiZt2zPVgRbjUzxUoE2rF2nF3iwq45xBBkcqqBz2LNfptAzj3WDJr",
  "key11": "5xJzgXRqXJaQXzs4Ng6NFhx5WbfXdjWYn1BYfrcn59LZ7wvz21HkcvDaUzC8kd1CVdSaWbY7Zjy54cg3BBLR8KHA",
  "key12": "6148kqva6gRGUh5nnYTWV2RPb3MBLeFMwuqLXR71qnWfLDnAbaEUeT7ged7UkErCxVETfzhfYju5ufhJQWPZA7ZY",
  "key13": "4ta8snEGaqsZ144CcJefWj7rr4XMbcCendm5DXkEST7Q9XkaWEypxa3WK7syxzbkuEPa1oiYFLkhZz3na6QNeazS",
  "key14": "4M5ha5wFpja4ixAjjKjgv5VDibZbxEBq4GcBqdByAdghKYdohEfBbWAiEgtn2QpHDyW1HnJDMU8LeNV9dvc9UUrj",
  "key15": "o3gGeCTFg33oDSyuKEsMgVAGvWhanmgaWGzzCWdLap1vpCKa6Vj3nDDFYKXhWWc1ATxz1Kg9B6KoSvxqyViKVqM",
  "key16": "5Gp1YZQDHFsHmJg3CBfU38fEbCsCrvdGqBiK3C9AJLCwGsAKbGE7ZqVLgXmSu25bPKM81ZieGtXgP5v99tKQ18en",
  "key17": "5DznU8pZtvR3dfAVQV9N2Tw2u54Byq9fFQrGDhR5aLRhnNuvtPuP8mmRaZa3DddYw67beBaMDFsb7uGkN56Z7WWC",
  "key18": "3jF5FYGkaRMW9KWxpp8MfBU24myHsLs5WC3JJWm55mKKBieMasE1rdn3NsJPgnZc8f24nV3fkvCsKt5PrLwf9mbc",
  "key19": "Bc85m9PtzA3yiU2K9Qd1jVxRGo8q2GoMesKYvtqNaZMCVJuTs9gstwkDkGDHqksBCKznj6cRZLouv6C1Bew5XKV",
  "key20": "2HEmQ8sn3xELca42tr8K2MGrWX9g4gekzv8cPKPEM9Xa7ekVFtgAvrnv8rKbxwDQbRwPyBYvdAqQrnHmwakigCKQ",
  "key21": "2DtnUAssmpDaKtZFRF8ieqPWPHw2LtsXP2FhhDdSRfoHttGV1xkWkohNBQcn4j5ocpRCFuTPj2jbfqSFUKHQQKK4",
  "key22": "54ubGtQFn46amPr4dYAu7vTheb8tn11ysZkGEqbtLdXmUevTTQ7hYqsHxUzLXchj5Gi7aUdhaoUBv2Ywgez8wq95",
  "key23": "2aHQwrK6tLE9gRCptWbeDTiyaEegU3cm1X2WZRHdFnnPSR5XXDyCRiGxuy7zbedfRuSC6c3rJPxzT3qsQWM8TXbG",
  "key24": "4CYHjjN2cCWFpK1AiKfmMmqZQDs8WFWoBJ4QafzrVtRw6H81EWvwUV32s3hsPr64L7CSmKFh3xB1LK5BmZ4wzVkV",
  "key25": "3Fr5SJPnWjpXJ44YjMkLCDoytcwYvtdSfYvmhuib2wJVRKAxSeiG23PuT6Hwq9qECGEMdCuV8cpxKszmX8kK4cCk",
  "key26": "bjedcCd6MgMgWVNzeUiQt1Z2hMxP6uVB7f1ycFTUc4Sw6xkYimeGV3RhR2f6skA33HAgBYiCwsZtJ9R8EuAwZVX",
  "key27": "88LDCcmAZx7kckVQ1pdavcZEiJ2nvHcEEaoANre4kgyNDfkqnbVZ5WD7T9gG8GM1iPqDgrrbbugko3M3p3aE7jz",
  "key28": "4PTqDKXr7W1aBrFC5o5ub7q3aauKAB4TkxpdyfhqHnPiuArXvDApzSwTZyRxHNpe4WRKMkDg6wStrMebLWaotWm2",
  "key29": "vFRHD7i79ohkSF1LRdaRJqcuyFRDKREpA92edN4TLLQXDQ1CEHd7WK7jhVR1isdrbYvXFBFSLFGf7qBVTFmABg8",
  "key30": "2hgj9EhGxoqiqUWBRLknp5gaBiEZ2VrU6pbgGhbi2aCQQgUQApvgiT6BuaYWvAU1kNAbAAk2DNHNhoxwRkGLfcKg",
  "key31": "eLq7XVSu7fQY5HqSocYTVVDGfTRMKQrEW3qYAWWXTzELr7fxfX9uwMKqk8MsJ3FJ64GAAGjmYtMEUwyECSznfZj",
  "key32": "5D9HdBcpaJ4kr3jNqVyi1bWZefiLyHvPgcKux8tRkMUB4ovGa6tkEzf7vmAEKN4iKQgmYoW4CrZHn7cAv1z9fhZb"
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
