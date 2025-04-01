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
    "31NDQHW5jTHnSyVfpDy61AdBFtBRZMnma26xbqtkjQMcWrjMh1PtuYkq5qEPwPksgFKF521F5NJATwMjaE3cC9Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbuT4CPDBGFkkf53amteZjHqNmBZHMrpZvJE4ywr1ihTQazNXxdABB7uJDUcqPz2z4ryA3C71kG6Q2e24rLBEtk",
  "key1": "45xy9gU16e9ojrJdGvNG1h5iYXm23wREAHs3R7EQ56sruBpYo3ognmw7nPY3ormJqhzcQn3KFyjuZPVEKPxRKowQ",
  "key2": "4uRCiucYsQZVWqso8FXYTEpVvvonfGTscyoAcpH7eNd4VwMP8xfpZTPHnsSbNLjMPSxgTiAHvkHEf7CBtCAVc16n",
  "key3": "5qnWKFQspMGorxeyffKQnQKHnKVwSRq1dEPSesHYBbhTHVAJoTYa4goDeqjQwgnxFJw2ciX2Uw8gfZjb7ZqNcSu2",
  "key4": "4rMNsTz63LcwAKH8umRwxMUoGHSfxGQBUEAp6BJRE8XEJ6PXNJRu5sHUWKNKDakWDyJV7pwQzLNfqWcGuQooN26x",
  "key5": "2AkxvwmW7X3xnhs4GmUCvgRznz7YdGmSLVJwK2yqk8Erx72ZUU1G7j1icJte2Hm4UeGSwm9gX8yjfUK7273XJ8tJ",
  "key6": "3NwUW99TdMMWPDMfxgq4zCPSCt24JBKLJwDwcqu9pGjcaf8zQAek54XgxcPoCDEMV61Ui1Qrs9pkAqmDedKBB6mJ",
  "key7": "4DDaikHGDNA1vZgqhtPRTHp7bjgcfBopJpbLT4DdpbKFdBhWirqzBfAfyUrhQjTLYQskg9anrQkgjDrFSeif4jaN",
  "key8": "55NAyajdUHPHqSMCUYmN5oHYymUSSTsQaYi5aC1zptQ3H1X7SQafx9QkBuNznfRUwjSMkiWHeZ6qgH58JYVQCQUx",
  "key9": "2QGwFSgQSPGt5V3P9WnLwrqU9yUhVW85TF9yKSWwohYJhNnkbd8Rn3LVWCHopFNxwkgibUzCQaMDBmzDUZA7S3u8",
  "key10": "2tTjUt4QJY4Dz1hGQHVLbMMnU81fv7TZgdrjvu3avRJ2UGyvnupHYPXANYkrj796Yrnc85Xga9DM1RSoHGwATvE",
  "key11": "2i2SsrEfaA6ZtQcicHoePWgJuw6LNkYjir9p7AYJQkiiChjg6FyPPFmAeEu48BrQvH2RGkv3W7YzBes1wSewQFng",
  "key12": "Z7aqKxkfDWXp67PdvHSoyiNVymM7j3pUtTAjCxvmsLFdUwL4TBVDwTog6aHAmihE8CX4tjgNGKscPLbDREAzyCx",
  "key13": "Gzvth7sSQsSd35iuHZw3V6cM1cUYm2ExUjgpqRTiCpq7ikN2D7CNz4d7R3bYzGmsuLt4osPAW1TGUUjUZVSnXAA",
  "key14": "31HTNbjUryrD5htngRCqbCQxPRe5iHtunVqAqWDo2cQ2x2bWbr2g1YmEDuwwmCR2bfqEeQvCtgQdEES34LBFPrfr",
  "key15": "37cgENygN5FHg7Yo7zCuGoeAXto6TQZQCeyrzjULpdv5rpmdBLShjKWwZN86iK5bsp1NJTBqbpS7s8UEPraVxDAQ",
  "key16": "4gws6w3dzBDN7GwNJkcDRVKRZ4aCwsXWi5sD4WX5WgQZJNcNuvWECzFXY6M53h7oiyved6YPHYEz5GKDsb25JQKK",
  "key17": "4dvG7nXgDNBpik2e6kt7CKqdk9groaVUCoSNoAs9CZcjbj7jcaPJQGXwBySDVmjUiWDEZgCB1xZnm89tUnWmbpbw",
  "key18": "xKGhGKeGmb2SPS1BDJLZZybgTp7mUJjuTNte4M4bfQUb5BuwqrDE8mfkNMsBzLQmQfbWhenoYmw5FX9W26zPQhV",
  "key19": "38V7neVMNkCYzNSrogz3uYjY5nU2xoB6FX8UxbrBVP1H2ytRDYyEv9Fwtt62KYjkqAS3HVWY5YjWcYqK93nr3PDb",
  "key20": "5ecG3btV64saKepVffyAA7SJby736KbQs52JrV4QELfWRfLqM18rXJoM69vvDbyuzbVdt1k9PLQj86EQswmnCV2d",
  "key21": "5VqLwaqwAUzo9yZ7NTZJrYbBXjtXzE2mcUfkSdjnXweS95EHctDuT7uFPT4ZF3AyxMNgr9UTaE9pd9xScVdHxoYN",
  "key22": "5bwh8ywBptpfg21maHDE1WPHHNcVmUxZ7BpJLZ8rQHnkoF6gmxMFXCJC1ZmszoYjUWHwgyqMNTEuYoeSqfhxhk7M",
  "key23": "4fgFZFucWUqsHvEPCMeUzRn1hWfDf68eKK7aadqR9JeSy6q2S2Dp5nNNnDayo2EZBBHFXyJLmEZpsSc9iQVy15ZE",
  "key24": "2MruKsvHmD7WuFeJLQdzmNrM6WAzhVNALw97esagN6yzwfJmo1k4dnSiyV6i5LPLLBo1xmzzt1bdPatWknvRmJiW",
  "key25": "5jxpAkfhC4uCrJ94SqGBwGKxxbniobVVmCBPb3SVevSJTBkweCKomrrAQSuXqLNjmuF3gq6zGu7aohYqgmbdmAd5",
  "key26": "2PesNjdf5Zt8LL3tSGEFqPnxsxUtKRKJyxFnZsm26yxVDwDfWdpWT3EEFGsGdnXqGgvkmKf2f8cNV265pLPQoPAN",
  "key27": "3THGGCueKvNdKrFdcncymu9E1t2e9rotf9zZndATLzaRNw85hQMRuLznLCyd7SnrjDNHtWuquHt5nHJWWjSSb33c",
  "key28": "d9qkqcjxMn8hejVtxgMKCmdsq7zFDFuCMMKvVLZVv5A9KwL3wvW8rKtReANix7BymqnBgang1RyUNqMRRwtav4R",
  "key29": "2CRdvVoEbzHf3ABLmRf1NbF25pnYQhrXh7i3X97WDzcURGFb2AwTJf5YbYDz16aMC1UfBhY3ZmPr17abTN7nboYh",
  "key30": "xx1z8tfxkUCKnjmSjixmbpYAzGznaqFzMxzVF3ezmSaRoRcnXnMiutT5cmQbnyTP8uu3mxakju8Lp7RKPrbFgSz",
  "key31": "2pi6u26LU9w6VjQHvaKDP3L6V7QTmi9DFkhXEuHWj18Q4UstgZYdViZTg67uxbYqsCLYb8uLXKLj16Ppwj9R2vXC",
  "key32": "61wBMDM9JFnuDp2U5iucyLrvZCMPf9YDjQxpSiDa4jTwv25KnojJMDLAm8rtzBLKXzKZE6utNXNw11cECiymrGZv",
  "key33": "52Sp1HbfT2UpXiKn5D7N6rCF7sD7ow575c7TbQQzvWrdZJ8B7jVitTyRksiZcBcxQ4VHdjKWuCADQtDFFjd7xicq",
  "key34": "1oU4mFgJDSMUBzvduaRPKhGwkPrT4FJebPwSBAkNuWdKYFY85b1f96doozc3SR5ubkXPb9aAaeMdpTh9TpZy1T2"
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
