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
    "2cxT1gN86QogwCF8F1DvbZXucSrSyajKzoDxaFGr4N9TBMHrfJmQVPJnX39u8x6gqK1DoAirWur7hQKqBGwu7mUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hj3UbFpg5N1xVKZUU2EooYWtMvw7dcz1c1KdZ2uxNYktSCVc98BEbrHE4qJCB4DBQuGMFcuWzajmBb7WWtyADro",
  "key1": "3G9iBxLKKgd9yrQD3nMx8YNDV7D513uMfdSH1xDedtTU9iykJMdJ1ojNcfM74yHu9YBSSunu4eCLQUbscHWxhRfV",
  "key2": "51i4xsguhCVuv1CKpr6mnLBCj8b71FehoovdXcwPm6sZyZ6Rzt1hPDC1C2SKygwAJXN7aYRH4Yw2NyzstEU5AaQu",
  "key3": "2SZnuQGEhEcmZ2UtzW7oEvhBm5txp2Q6eGHC4JEQsrwg1GuQyZzQVkbnr9PMorzqRtvFfGjcnRmxeXsBgBuotYr9",
  "key4": "4GRZnXY6CzZw8btboAt5xKe3RNy9h9aWtw4MFQqgvkyFz2HNHKFbZGKBEfuSmQ8dMSJZULypxCYXJC5iEGwem47",
  "key5": "wxoG1KrN94nyeKNZDqhEUHQ2HfC8XaxQ9oU4mV7eevJhCkuEJPpYz1dFUUNY2b48mrqPpweLiQQL9M5Vf1WFRmZ",
  "key6": "4BB5DzcFSBQ9AghiM1R1D4TSxx3BeX9UwdHoDStPWs6wsRayRi2dkpQ3sGTgi8LGbXQGLpsfjPWRCNEcXT6TNw9n",
  "key7": "yVu7RxwenQRHVcLoSUvd6qCLGdWJ12Grb5di7HA326Bvi1XAuyiZu9tCzUcD6awGwK3xU5CVRCLNCrommdeNZsx",
  "key8": "2Wm4DT42spXBa27naFEYBWUnTk5kSQUSYLop9cMMeKTcCvRfYeMsniqQz53GzrCVqha7WJLPYe6Nq9z8Kx2RWMcy",
  "key9": "3h4sX8S1eh9uTN4h5kV4kt73SqMuSyYqXfXmrA7tdRycKxoFeYKDkBhN1ZLWqUm7HBfQjrwZfNtLeAmzNsfd6j1y",
  "key10": "4xzBxYaekRRwXxQJf5gqpvLdWHgQVYVUgyEfZMi3NCggHoPi1UWtqaDArajDhpsYZQuCrJVHrvrKK545cW18Rx1V",
  "key11": "3AjmB3LoPJVbmnac7GkqFc1RGjDnKa2oNPykn2AQsEwKuh48JPvCFxtETeH3tKcyC2H6o4yKohWf6zYNwdrVTPSN",
  "key12": "2kKnayq2bkrU9PUeaHQowKya4HU7dy4JcXEicv5rPtTqUoYWfuskmhznNdKtAzVwhWTbtFhY8TdzZywdxiMaT57o",
  "key13": "QR2vShmE2NMGLjL375dRUDFtxCMsXV9QixvCX9eUa56k5C1JpnC6gJMkPcUFYb6FjxmmF7A4mc3H6Y2RomtBG2W",
  "key14": "5TEptZfQYPaS66h47U9pVCEF52mUVqqYHuYM5RBbasBNxeXGVbkXK7p31NeMBaqApHJZcQDcWkn5um9z3oSWbcdq",
  "key15": "3H6Y4WFwkL9KmMNTaRW5i6Zt1WAUWG65Uuwroy2uTKuH6PDxqPMDxdN6nTzYPx15DcVzL5SsCKva4ftvz3JVDncP",
  "key16": "35VVRRQctPu66PZvkkvmWBXd6L6zUAaWuUn6KVmQHbm8mgZGHZXMBB7qXCyGwGywKeTjLL5QhGrwVMuq3VXPCAkC",
  "key17": "5N1CrmLatDkMcsjUmbX1692kHxnvhZxSKWvotPJikuaqZhhLVtEFkAJVeF4E5ZvXEXW646jTZ1vpSayH8PMxMCG3",
  "key18": "qeueZDbPfhV9k7WzAzS6cYB3fLUuF1diwWoZwG2NwaU8RLruHvS44sRNQAsi4DkiHXzYzLCApHbhey2cbiSo2jB",
  "key19": "4LoMXta8qSufBWXN27UXPwnS4mWS8ZZdyjpbCePycTuEeubB9nLjf7nXJe2PV8LvdNtRjn5zjE98cEKQY4FZUCLd",
  "key20": "4HuhzLdr9c3Ac2sR3aczTmbNWJaFAgBtWWBVCgvbiATQe2MfLGk6DRqSQYpzfnYYR12Ku9oKLPUCoLWmdcRhkn7x",
  "key21": "2zMJA6fDQw1WnuH8f42992VJSf5sStbc9UaUBeaGrEKHx3Go7MZKKyShcSgqrAimW3zspSUSnKyyHcpsWncQUMVT",
  "key22": "4EFEEcaWpXy14DWBNgS6rFAf4XgV9fk1MJ2h4JCNVGodugebei1UAByawzEr7ZnsKDNJ9exYra1wPhNb5J67S2MM",
  "key23": "3rnABcrTCRahL1UiWDK4ykd7mQRfDJsX65Lo7n5KByPR8j3exZchCREqfDLocYxckXWA1d64t1142NSu3MCWzL5k",
  "key24": "5dYDnqb8Z8Qi68j35QSPC5k6r5VDrjBjg7t5as7wWQ6Te8y7EyN36MyHfBhykSiwy6ygjpyzo2skVxTa4wXWBkR3",
  "key25": "HBD5FzzYAcyht9SBSy5uru95pvsxGJ5PVNK8Ezn3GBzeh8WZKyp2jNtwkjmQuet4Sc3AXZdm5YLa5KBnzyyneLB",
  "key26": "2oHTZAWfHtFeGPx9kwT4Bffa78ht9sdGQUFhaHAXBx72JqiXr5CisugowFHy1gBh6bck78YZdFifmtsztPqiGLhN",
  "key27": "45Gr2iEdxZb8S4RSgWpVvv1WqNj1hr4Um6JEDrM6g79kWSVmtGnRmN5mjAHBGLPep7r7KzKvgi8QHWco6hgPqxqV",
  "key28": "aagajTAtK4h2tnrxiZXyovDmp2K7RSdWiuKbi8GqcGdFj7uuGqZEZhrudCYr3dLBHWvyPXkRxS7hyx12Mhvu8Gj",
  "key29": "4MLTWsDaK1aKe59j7ZEkWEEVpbRKSS1BbC7QS66ky6d5ouCSyUSC8sfzdotDB3Ncu1BHRijcKCCt4veNRApNDof7"
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
