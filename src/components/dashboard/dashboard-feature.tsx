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
    "5fdyuiyk6pZ8ew4Sy3D6LPwTAHLWoEYZ8vExWHYM1Ly6ZLtHNBXKUDcWXCM6SN5JkauoBSQKmBGQ3VzdLEMJZSsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaogSTnR4AffXrqPEapLF4Vs2eAA3rzt8pbDFyAyab5zGwuEeZstrr7tD5AwCjYCC4fmUz9AD6yTHhbu8d25Bah",
  "key1": "5917HYv3UkjzVeJRrHrbCfRwReQWsqz7tJ4xPneSYfHumLTHgHBty3Lj1E89D87B2o3uRDUsoubRgJbUgf9XxojN",
  "key2": "29xv6H6WVndPczB5zgFfQD5AHfH1ykamvFsewrZKMEvuT6aZYhta7R4GcjRKjZaKP9ppYBZtWJjCxbG26FSbTfhi",
  "key3": "5HfFLtgvkHjBwej4ksBVAXRHRzhwCNk8GhxJKMuAbZVB7xCTH26AyhveVs1myLcrThsmw55rU4eVxB3gc7v3FntD",
  "key4": "2Cw88bLrKXzg5MDt1HYLuwczw8kQNSEpZ8562EAbqDTWBSVmTjDaQEonZeVgVGiQ3Nk6wb2NnV13dMmRipeCgYxg",
  "key5": "pBKLVvVGafxx6EBbrAif62KePmu4Drkuvs6DZ1JmdzGi1DkiKwQx3jdUPPQUEBLzCCNfcYEg1okJ7HXTpy33vcG",
  "key6": "2Cqq3g9jWvozCyA9ETbPwSaRhGPLuaXbQGhfkQAF3TLtAkEDxXCpXgKKXC3jE9JqpzP4eP3QCzMReatqEqyktcaq",
  "key7": "4iR4RecmKfoKTTAPmNWrxNXgZ3gdvxZeSSHUXCncAbHxUENdLR9UfFaKYLx5ZJRMg2Ta9PGhmCeKhmjweg9ZKHgg",
  "key8": "624AWDeuLHL2azEL3uVNSLJ1o53h3LdQ1Yj3qpXUnJKf7FciYe4jahgcvj9N8KjspcNMSz2yma5nrincwbh8K9vC",
  "key9": "4CNXDNniMo6D1NKy2CYmsdbgvYEDMYTnof2H8HBj713gqqGydEbzstFxsUBw5QxqJcKDacBkzidGNdgZxb7X76Tt",
  "key10": "39yDwJHgeWdTFKJH3wg6JMN4maG66khVW3DmcUCsB69FXfR5RFyA5VkvPcX7sTfT5wEtVdCixNdwRbDkHCfxAskV",
  "key11": "3CswsyjyYfnft64de1AZV6wnW7doxDgCB4hwBo5H6YamA7tURfsZW9SDNPbMZwbW8CaqD4eKiV5ULFBDm1Szy4tw",
  "key12": "4Yy21yfoa42Wd8heymnEfRVyG5uFsrpzcELbMjdf5ywY9Gtn1KTxh42H4YHJogasLTffcoQfK1HNFXSC1PV5j6dN",
  "key13": "3koSZ2syuWDcu8HZKHdRQiNwtyhB5Wt8U3CrKuNCZZtieBRaM95xxd1LgNe5emghESTLh58Tsdy5La6pKZkULtkV",
  "key14": "TMiqq4oWGMzXBHGjATbKWccu58uA6MvGJHnqFi11g5bUQxQQpvidyGBNQAZNL5UNCVUAc73ARKB524dxRxs8P1N",
  "key15": "4VxxSfhVhjs5YScnpph7bgUFu8asUXhyXup1NjaE2CKStR1HEdrTJLb5GFLxTK3kzVBK1V9RsXeEVt45xAiHqZKG",
  "key16": "4ewoczW7gDvXDgHhjXyjRbqJa9mxsCbYWZTUK3Du5f74eSEdZeeR8RLFpe9Zwymx1NLYYxXwaG2MCU6tksmhxfVU",
  "key17": "3CZ2ZHbaoYj3ooEQqPHKvSkqdDaJa177XtV23b6BPpgKaq5Wpyyc7tfF9wqazVb9v8AKnh7RobHtrCrZNqrYFfMU",
  "key18": "2974zUXtbTfdRXuFjww9UhWui5j2R4fYtjZrs9bY4yNPn3PwihREtQbVmahNLYSnntfLBNa8fwQaaKQthpDoHnBF",
  "key19": "2UER9SaBcWxTbnLvSoVptsBLvpLEHm5q9gX5tb2ECn7Dyq3V4iudFqHGD1gsKPbMQ3iHok2fssgWDfSd7vLsoj7R",
  "key20": "3EPjw1owvmoFmWjxNi5G4aDQNUN3FkKVVdRAQ6Y3zKpvmqK6VEReh4uktT4ygYavXqQtRWWSRgm7sL3SGX8hao7q",
  "key21": "48KQh9isGnTAgv7Y2qHFwCwyKRhNquhCrPEZnBhtLrSFz9FYEzuW5EVNvwT3G9ejYsKDU3uMSzKhEKE55f75DPDQ",
  "key22": "5jJM59sDXaVwwfsxFjNM7FEg9rR6wk7b3yBiHXkQzhStruykdxwqcFdhm7UrYdxaG1eNpeNkbXeq7gytRBUPp3M4",
  "key23": "kHbA8hu2ZsuQNfp1JgFwuKp6mXGZrFqfYumYRUEyn46PsgpriJ5ofJWWQs5FFvQ2SugpkkTPpBMpeagiN58Lyyh",
  "key24": "67UtYyWSxqpG9g2ZesFxpNHXp1SKDr7ZAuLhMvRR33Vdsd5ugnjTaZnK8DhVNNeX2rbX7Lz5rcrMZ3Poe6XHnj1c",
  "key25": "Z9cYEGN2pURcE92jkhsofVjt2piJdibJRu6Q3dS57goZ9LF2yNc12vHshzRegwU8Yd43woSDN9ow5L1d28cewjA",
  "key26": "5WSJTXWC3ssZ2QFBf1hLCt52zgeqVKUYUWSz3cA5CX7KN3HTJa8zyzKubnM58VNdrgooiZtifjp3jkGSk7cwtoi7",
  "key27": "3LfY6AiJrGTReD27CtTrwnT48Lb69kVsQnz3Sq6Vmct8t3BJ4bRMRuLeGpSa34Kqe4AbD83yAkueYHPRdpddobUG"
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
