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
    "5psfP1QbbeaZgXL8mRFmny1MK9TWsAfsoMTqND3Q5t1tSbwfGKTPLw52txSvfa7Dk3gsepmHSJZCpLN4iQu2pWEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2X5B2cfnP9cjse2hbJaXkZ4wDMETwhVnohaS2UCmCUBRnafMb2ab47tpRnr2EB3X18gmV79xoGRExQJvaL9fwv",
  "key1": "31bMEsGcDksF9wB27XSW6s4165CMKAPDsTGLCa5wDcptdB4KPcBzPm46WHgizuUrAhTobAnNFSgF44dMJYLWvUXp",
  "key2": "DLLVSGsSjFXELpowsT92BhTYbEHUwNw787JAH5WCpxQsXLihEn3oLpSQcitmyDwYMLPMm62cKQJ9YK9RakecCzE",
  "key3": "5j8BtcdD9ur7Vq36P7TEGnpuYDXrvWZU7pZfjX4RBcug5pWjZVx3XK8T2fD8kcmCfpDDngb6vCBRRWBdXPUquFEV",
  "key4": "4o68cfE5FgXNHYA7chTatjGF1CYmoNeWN7TGsvbb1uq4fYLdh7KBz9kp2vKavohqdrgQKsD87TJXvWh5AgVLZ1W2",
  "key5": "PZfnSE4EZ8dmHWiB1WpFqu5wcmxkE3sD8PUgA7tRcugFf9xusgConuxve4UWtxUCAZYK1jTLjrajdX7Gh4jJFAE",
  "key6": "FjhxaW7r3HT77LQ99WsK1DgZ2dt46zroA3Gbrst9smQVfrSDca7h8w5SLj1JY75u7JNrJLTmd2jE1UFkGTQPHFe",
  "key7": "2iEVLNATYP9Fj8we6TixtWszMJMsmYDaq5yqtCAVqVgVGMdFnubwkCGnahiJ3rssHgRkdcd2fFtFwD2RWG9Ac8uJ",
  "key8": "2ysHPyJzd4ErY4chF6iCwzGgeEuG5JuDvaDmeppwDSJYSk28MF24wEcruY7aGNvfaNBd1uoqKcpSPQqhuz5thjBJ",
  "key9": "k6iCZqBCsRxFHuvbiXMuf1txnS4GJ1ocBjQRXGcrxZ7NwXVcrewhVqUXhMCRdX44xEqWHVDZ3ETDBmqguGjSoE1",
  "key10": "5bUZ14oLYXLP9KzThfT4L4nX6Y6wZ7qpYagR5zSxfeQwn3uGVkCjeW77PfEeZfuJa1NDKL7yqX1ANxoQgtPSsrL6",
  "key11": "Hy5wPddXk2gwWQsb5wgowWzb5qFWhxrtMLnFxGcJgPoPHnxhKnsj1bXaqwH14TKg4dsAhrYDpqazw5KYgA8dJMn",
  "key12": "5U61Z2z9mYUzd6E7dswU4ZrQKWRPUoTEvYtwiuoNyutACFbXMJmy5YapomYhbxECYGV52bq6boPp1HQCrZPfqonk",
  "key13": "2ynaBH9c6eVJMuRNmv4BM8iAL4vwZEqd4CQXvCCyaF4riTBMWHGFgCjTaVESrSKD1kqoyfbL88dUqm2onBA2q3Sk",
  "key14": "4geMQoGeS87iJeGYeuYryuemnJFGnkggkjgtb5hoFvXhBPZexvjSLBWjAtHjAXYikJvoCz6sYiEZv7wqWouwyQ47",
  "key15": "M47LrSEsDar2jhUSV8Yp1bo8LPVKruFiKPZ9uMzZz1m3kzzre2tSpPLP9K15NeRkD5Lu29t4NedUUyng3Whb2cg",
  "key16": "4hPB9zvhJu4g8BDD5XKeR7DmpWJz2bu5BtKvi49h9aHAsAnsEttWtqFf9rK4rS19MP2kzdSvU62knC6MrtbKWELB",
  "key17": "2yLhEVhYaZJC1Y9Pk946xNvTd121GZbi4qdJAMN46jvd321M13pSJmNtiXDn1xm5dWkp3zp1NDYNtbP5FN2BWL27",
  "key18": "5xSVGjGreqzXHm6yN8d8kH7eVMXe9JHSrdv7VRkePA9CWSEMjmcLxQw3gjVJvJYNZfAPLGL84G5UTLLyzxLiEasz",
  "key19": "2RWW4GXJottF3nUUjvKNQvzwqRsukFz5nWeRwLcyubc8fpnK5YaK2ekij88BLod6rpo8AQnKFbWWuFfURpsqxC8o",
  "key20": "5vRx5kubwBSL8mEgECp8sGzWgUKBPMbH3ZPNvskhUZTg2XdYPKc1hNwCeNuGpoviwjezme9KKRRFhSfETUHpgo8A",
  "key21": "38n1McEu64BmFxkFVJHNho51eHdJLFsF5yWECk82sBsYdHztFysGq56DhQMq813knkgrpht77fHHjfDZVbnU5wMm",
  "key22": "5h8JXERCi22E1Amdj8DmaQibJNdxx42CSWftoHwyn2auXSkWycKyN8DmbdeKus84uXgM32BucX33amjqVwbq33rP",
  "key23": "2kBRRqCD5Khq1Favk6eLjAahDKxavALcujhN4Z1sLXvH7H5TJyy7jhii47vUVMCgR6VqLBmtYHCVJWFcvFsde18S",
  "key24": "5CECt8tEoH7SBN8urP3z2JfcpEauqwT1nfG49WGa7vMdCS651dJkjt9tGcguYReJjUP8LP8xDZg3cbBpTKcTe8VT",
  "key25": "v6uRGdBVev71ZeFTtDvxRfpbedM9ck4sP2D4w1SgVGD3Bwg1iL8tkamm4hqALpJ4nJzLXtYTgBBQPZ3oJnsJpYH"
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
