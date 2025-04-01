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
    "4MComsNmWeALTBEZj8u7r2caCcL5zigEBw3bmjQfdqq7ihosmroJ2PtMHXptABfquXnvoTV3TscimFhWL7HS1Apa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65q7GXpHoN5234XMkt8XAhMtkHwGiqAAscK1rZ83eTpJ8YnxFghasQf1TXL2uL2cUEwGXjVioFYxUKSJyejGA5hr",
  "key1": "2dNQ4mLKbajayZtMdBmukgd1HmtfeJo2kQ8Q6rAP5ufP2sH4Pv6Dfw4Hokr2X1dt55Uduck3FdxA8wDWupUDUTc9",
  "key2": "6GccYKKKWNuxSduARMKWSXP6F683LBg54fQZFgwajVU8f4vTSmCJs2maRFtaeNhAyHocHEhTHbwd3yQWdnaeCUL",
  "key3": "3VvBz8VaATzoMobgWKea68HmAzvEg5yZAJrayrWz3JdGvD158R65rbQoVHzcttJNwvfZP9m5fkEMb6yaQGQCXwrW",
  "key4": "2P7cHsEGH9ChNUXW15patR2Em8UT9hsJoh9VtJxpxRnRUtgAfyS2899oVixPKLMNJufqTZjrkZbQiZ5WRhJWUQ21",
  "key5": "3ZY5xzEevQP7KEHRFD5N6RLUzTKzF3dP2zakvPTK8hmvAzAxR5NpPfTrKqqMKzpRRWHKC482AMPg6JoaELtVKHbc",
  "key6": "2WuiRdobwSnZcZFKR8eSCNrPVfxk2qFdtXFr4yWjWAXhci3V7apaaYs2K4JUaGhKUshtWK1FXZjV926pgVqY2uzF",
  "key7": "63uS4s2PRVap2Untf15AcCXqjbf1TP7r4Cgcwus5ncUZYHKogLKu3VFcwyNT8GQ9zHRazqRW14iQcT4E1q5T7u9i",
  "key8": "3NwGTPQvwat1Z2RaPZufwLeHY2GxYTDQ5Zs86YR3jW9SiMjN4XS8GtiaMUAWUZgvYm378qxV2Wvxu3kTKbAPLQd3",
  "key9": "co6CDuzbMCC5zh9ZFqNTdTaWDMVQKwbv75VbjxPVq6HGqMBQBWWrGHsF3viJwxuvLe8wpKxE2oRRZ7iBeDqPBB1",
  "key10": "4t9eemrzujK1HRHjZsqbYASc5Xv4TsBwKHhSzuapCBLpGEbXe36FTAiqxfawhvXaaFxGoQBdeRGcodjNUc9ieG58",
  "key11": "3xDntjsDWDZqqWFehLQUStMupfVsMHnkbKwT3ghKS5ByFHp2zmo26J4cJUs8qcFzuYqNCtnuqfg9xA67DH25d23d",
  "key12": "3rzxqvcXw6XYfmaUQVSkeCVcvKahBmf4EvT1n2agd2Shjpio7c3P24cjVk5PQEAJAgkNbES6HsDpkug2WQBgVB65",
  "key13": "2rBe7zqPpFu1pZD6CoHC9aaKXbJ6E67JaH8M1MaXFZLh8neM4aKnSxKLx5jvfRoo25RMC3CT3nztEdA32UJLNKnK",
  "key14": "kfsKS8CXLoAdir6QdGJZnFchevWk4r7qWw61vMhDZPTb1srSW3GBTHWKsabde89RMugUAyRvL1hShqgRu4hpWX6",
  "key15": "43Ny661mBBXdUA8pfe3GTLeqxtyfhgcnmZh7XzJYUcqLzBwW6omacL2K2u22kbz56ofdX94zcPBy9M8tXvQVozoN",
  "key16": "75wWcBWRGYDvpkGDnusqcD3PUtjRSEBiaASo7mMQZKGcYQodXvyfojv576pXPgZ7rtbexrADn5U5muY8nDGDenR",
  "key17": "33KXhUFroWtd9B9o9RCVnhgjeDaouhJC7pJG4uLRhTJYdBbb2d7cSXuNUAkrQQ3mh8JyW4pR86M1hRk75PFRutc",
  "key18": "5RHwtd65fY14WZqc3VD2qXgQVaBSvm8LwbXfT2iVoYSNC9BNpBLSLA8XZdF9se4k6PQpZS5R4ogNXSsT5v6LGwUf",
  "key19": "546SvRpS7xHZkcVt2RQNJLVuUEMr13MqGXZwSmC23kE1Nz1XyGUL9vyNicFhCbrojPALqW1dLg3yCJLv4Byp5sk5",
  "key20": "2dtK95BYL8q4Mgj7Ei7RsbwhuALHNPf53RwzoXZ54bsSG35GifRNsRyeghEAQwxjFbqo3QwxmC1LPA7RknbNDHJ7",
  "key21": "58T69mkZbyVP5MJS8QZtdHfTBiPq3UWFM6BUfwkUogTChbxP1EQdk3qbRYX5a9vSYvnfNec4tmPwoEjumZL29tTL",
  "key22": "TmhB5q956F7pYQHQybycUuFa8K4mmyTWaRXdBRd2HRUzaLbRJQdhHUVsTLQmcCG6WfFcCDjTpSPkrRpvtEgPTLA",
  "key23": "5hqygq1z8c9GALDTFKDSfTobVv2hDU8MEBuZy9EWbCPt6Cup3kKFUk2FbHwf4fXtgxSFbV7vjUbtKfboKWutkLLP",
  "key24": "5HMTKM6YNQctntnvXjakcDCPDmpe73xTqozEWSgbGgyosmsj4XKakwcehb1N9osWcv5q8kX1rYge6obQJCCnCzZa",
  "key25": "3oXsWGb64kmFoPeFHPUTAGyrsBuTkb6S8xoViSAut66TPrShN8yughop7nnBW2A5iefBESova7owxrrnkbm6oefj",
  "key26": "4eL5WDJTUWFbFsqe9GuYFCMBB8EXCBkYNs8D6q4XktjBPv6nhcC5SdKzGamRw2yW24PrXTiDaL9zrA8uVSm2cXVw",
  "key27": "3XceX28LvWKkcQRB8y4Zp7SQcLRrpsi5b8oYYFVt4bV9QmBcNiggPGhsj1GrdetmrTsA4nFQnSXqF7FxNwWXaPUj",
  "key28": "59PHGNuxBad7rZybz9sVFRy9L1bMzYiUJtKpFX8FzPo5Xx8Fe65TmKhX4c2WCQs6NX6s4nVBVnKfM7gKNtFiRkag",
  "key29": "Ho96W53Wf9MWTmbAmrobpN4DHCEyRPmNZpgvNJSmhzK9HVD1dyvKfM5wyoy6B7Whz7WdHpkkeobGEFHPhwy19SX",
  "key30": "486dUScyezSi7bck3gxfnVrVt4GoU5Qphk2em5X3SxGm4LRzxdHDizJzJwTnma5FFHJHxCShP1rSSHCvyF9duBsV",
  "key31": "2JcT24Yimh3D331Kf1UcxM7MgmLvJJTt5YsVfTQiigBtGCQGvKyPt1qb32vFcqBtzeooiWKEQY3kpo2wmzEG7NFg",
  "key32": "5o2qMV8SaW6Sm1PRf3voxkG9iKsvpwnYC6N7CKfVfxcFPPj9jyBWxL2m1LpWRDBbUvJy3oUPEX7MfpT4PFJhVTjD"
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
