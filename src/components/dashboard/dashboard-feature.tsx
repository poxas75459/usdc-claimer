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
    "4WrDs84PyA6ToYdL592d2tjmb7aZX1eEWqhm4kjc8zp3Aa4rv2uEFMSdJPPRYgRcbxrTPD14w8JR1vu5ANZ3RwFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLUMgWtZz5FTfAHAiUZbHvnd5v9EXWhTNSMFjNG5UaaWQ2wbxCA43QiAbwmewyi8oDDtwykW1F7qMVfy93TY8m2",
  "key1": "kRwg2CLWGx4JmBVtpLo31LVRxXiQ8zSVGrKBWs4Qvy6rdRZa5Q5YiJjJJdruXGC2Ugrn9HKTQXavxVnbJwCEdKu",
  "key2": "2KpW1zsdrLpTsem18MMQUZV2Az7VAcR921yQyMCw8cze2rdGn7xaaftv1b4qEwComvFhZY1yRAWUc3F2GhT3ecZq",
  "key3": "2fZndztHK9YdpKNCGJgiFaFuqv9WT4YkvuQhgq3DwG1iKaFzfHcJhu16uguwDLXCV66w7u9tBtf3zYr8jzHrXhQk",
  "key4": "21wbEGeKmxnq2JmT4yUT9THYxJqALg7PSFCgJ4a7Z2JvfEc2U2uiD6N9uC7rxi26yggNik3mj2LcM6D8tkbBdW11",
  "key5": "3tQixXRTR93guQYVDKE5GfZgxhzrpeWgNQZL1nopRFt76JoebvepFU2XCWEcUepcoBAokJTJ4RQfQSA5cXhExu8G",
  "key6": "4o4K9M7iHXjq2vAEwWGrcyKTXzvc31ohdb219zs57tq66Nnr2bFRNGFwYEaAfGR1b32SWYaubjRDHmoch4eK5T3w",
  "key7": "2RcL4px4v7xWnaTJkRcxzhLS39muoY1osN3RS94jXJxRZkQCEFUXB1iMp5QPsV7ZCNrZv6RqCLBeCawEyGPrzZHk",
  "key8": "2DGvPFTTkKbnpp5d2F9pjHChXBa3wZMCUgb3asNVxNozqjqRQMmeAy5bTpaWDMa9X2fXiHnEHxTnVuLcMUZJCZtn",
  "key9": "3A8cQMqrp8p7c9n8Rg4asUhCxmzbpurzFCAnv35BqTRmjFPcAGwFjeeiZ3nupNt4xCzR56oQqL3gSDuzuuhnCaE9",
  "key10": "1VzCCTqrLuqQCyTGkDeSEmF1XTQyokqZESHSWbd2viNHhuuKZ19k39dz9oAF2jB4tuNCZQU4ApFAm5ztVbB1Wj3",
  "key11": "Nu18jQDiuLEkGguH9vMDjNtHb3Rtd8xHD7UUSN3HHEfF6Eiw8Z9WKf3NYKocKp6fZMG8Q1s35Ui6oV8THXTaoeh",
  "key12": "3n9qZjNffXZiaT27iPGDY7ZAvhjzkUkAX8NToZh6yRNqzy5XvW7hQtCxdUtuM6kPqm2T9Y3wW4avSjfufKAyFS1x",
  "key13": "2RbDveDNnVrk2LGgSqetUwG8h3eBEBXrk1varyaxPBwWMjP5cbrvTe7CHwiq6hUR2ttV766oQ3HSv2xt8i1xfSJz",
  "key14": "49ybDh8hjihUGNqWEKHJdqMbSfmRqCzc2A2MLpeuySHHpVdr6d2n5Ar7vnVpwfKwbS64RdMqmJEYpLBUzdisYC4B",
  "key15": "3CrsKgLJBkpAGeqFa1MfC3kWBnA1SBPwVEc7x3uUgKrhr5cx9bykqQbgQeNPY6S8aAwkGrCKerSWNpdVuhB4ku5T",
  "key16": "BZYKw4GgZBJtCmPnN8GmdBDFqqp6T2c94EKEheJrri8y2GMFCP1G6cenDGatoNGo8TFnVrrHPHLNgnPAcpKdmxh",
  "key17": "4pc8HG3WLGfTvpDaXMNeSo8KiSELY6zx6KPb5p3ruUsoe3ykKk3AJgr19G38MWdaChxbgnYrmPPQK6wPEvs2y8g5",
  "key18": "2ZUEwW9H29z8dTWsrNpVsrFQf1R4sqA1ZXVrgRqdvcjS5wj4DZM1pDMNUS88ZJw2a8NGmkzu6r5nTAzoYZWynNrk",
  "key19": "4Q4pQe3wFKkz48o5kYwk4obQEUZRiVqmwJaVGQaXC3i9edmhEfskkKeyQcqUX329H5Fvfvx5yiwBqGyRXcGYop8",
  "key20": "2c1JdDXBLcmyeXd2pZq9LcerWDBMLK7fvG3qyNbDui5n9qhWCTSebZSYr2P6UazGfaDmVkT7arLox6htNLy56jpK",
  "key21": "2fUVY8aLL69oM6vH7o7RdMbMvWDc7ssD8UMCTmbpcpxdScf6D1SngGZ9TyZ1SdYPxpcoBS8pEgNJijwjoDWKkYg3",
  "key22": "2uwg281NpZ6JjDAeFDGMhfr1yAQGoCuvkaeHp288AmhjnXbVzpFxEDmvKMiwVznvg5KyQZEMRu3rjp9vvQhZbQyx",
  "key23": "5J3sPQLQUUYqnHCpRNQ5navbZwp8ZaYCPrEUeXJ28kJifipThMGyXLaiUMG46gBJEWUKWiEfgmatXGHs2wiuNBS4",
  "key24": "TCA7ytpN4qxPV8Urc3jQkYNvdcf5kQtKBnHFDKYsLhyjoQZep1KCERPWR5XHiNRq3X4mByY85jArhMF4VbURQrC",
  "key25": "3CxZTN3YV5tt3nu8swUgK2ukK4EyrKQembbiASccPPxvUdqEMN8kH3ee5AMppe2MahAF5mikNM349aTgw71KXR8w",
  "key26": "tiadqwLCZexi4QNKC82wEY2Dc5Zn7HxobUky4T8z5pXG8B1VVoU6YpJjBEdxFeyuxmsKjJ3obzXkbVZfCTsfKsq",
  "key27": "3BFC8ydjCnWXQq92N1iKKJJTwvYQcQa419Km83hEQ7nQt6ThV1CvTZ2geFpoGRQNq1kqafw1boFbwe9nz7bmEMuD",
  "key28": "5VBk6gZqd9aZ8Yha8o2YBBNCSyaDAFY4wp96smzMyGzeVW63Zx3V11MiGF2R84J824HZocq8sz58rfKKJEF1AV5n"
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
