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
    "4jfbafXxB87EuA25FioWaXBvEXXTGF1FA2uUsZezsFx7k8AG3arGbHh24X5DjQeeW4uaxsgypDREvmE4P7ThfFWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MdoqCJwHViD2b6P17p6XoKwwzi8hduts6KmcHMy8Y8jaEong2RhFDTsCPxJzU13ED3hazt1WVjijANomCVuCsg",
  "key1": "sPGdmnD3e83XYBxjRcZgudbFThBWh94kyychmbDGoUgmyh1cdbzs6RmtqZQr7P1FmjpCFHCUTHXY21GLxY9agxH",
  "key2": "3quYx25seAS5W8WKZWhMnd9gT1fnasMpn8sE3hmfAah49xu2juCU1HX2gEXCtFGjPs6UME5xRXarSrnE9ypdemFk",
  "key3": "mioXq5dfNX2DqagKy4PseK1sQyG82rVoJAgXcBCk3CUu8Sdwbt6vX2YcSjYNWaUGdxsKuiKJpSw6t1hgJJEXPfN",
  "key4": "4PMhaq7FzSQ5gtC4QnSw1ug6wezpSJyctsjAZjdT9ZAQP4ff1hRStxdEMoss57DAJEu99Z9tHfhCn29uqytqx5F",
  "key5": "5yCd7ZiiEwoJUp9SbkjY2MgcTUhMGzciPuHk1MNjPwADZQLBvCjY7kaToWMZbRpYEL2sbzBjv5JUAvaUQz623Bja",
  "key6": "5hYd3CZCjf9FyAHNmwVMBX9nubuajAUrfkBpjThKzG712qVqFPybsCuZW1EDTAxK6mFKPVhj3Y5rnucoGVnk8tsi",
  "key7": "5VyUTMbFgAM8RduJE4537REPVtGardXXcf9sybGV277HK5ThWLdTFtouj82Rdi11cQVGXHULD65fQfER44Dim6nQ",
  "key8": "5G5BMm1AbmJpZi5ZWHu89RpJi2kXL72zdJajycax6EWgyQUMcbYAiFT6mA119honaCNTJzG4PgfLACzn1TGcxyz7",
  "key9": "2EW24qhYXEvzqVz3Et5pyqy3VKESYfSegRGCgVxumMdKqyTHCpmcCJjAxnuybh7rKR9dMvKGC3yZsNPE3YSxt8M7",
  "key10": "Vj4kTYXaLWg3no8UqX6BXH6nWTyN82TA51r2TAghXPYaxxQ2UScEbuZczyL3jup8iiBjSLvjigxj8M7ro3tePEw",
  "key11": "4d1rpFuURDHBrmRxD32EDrkPQfHTZp2BH9bZ4RJgGWbeWQaKb8Lj3MGh7aFjJ7KbWBr2FH5uJxy6Z82Px1pDc4zs",
  "key12": "4AG1uA3XiSrLJuuaj35cuZ8sFduMHDrVFRLkpszJPxPxcgnCvnNEWLr6t3fmfuTQFazPggCXXdWBcQ5iqSvXHDkf",
  "key13": "2Kr5aELpkJuYKqUVr88tJR17Ai2La6jmrJXMd8g1JzeQa6n5jYMoRcqBCfBF2Z4zTcBRFoBDfRN7gt7gjsD1d7ph",
  "key14": "2jDEd9fRK2f9SbQkSpUmh3WXDxCTMR9q1KNf41ew7uEbxNKjJ5ov2FGPYUqaSZ8Rzdy1ahHDpHSw2J9nNVfnAMQh",
  "key15": "3PW9uG8wP4MY7QwvnWiSsJAQanA2CHyr1rV79eRuE7XkcRG2GoRU1fPS2N8PKLJpUayYbzwcovQmzL4g2SXBHRUc",
  "key16": "2kbbEpZEzs9NS9bsk2NZZoYttSn45NvrRdaGrK3o5VHQq5tddJLgDdBK3oPPD4kk3hjVDEBRYY3ofE5K9G1odowi",
  "key17": "26gmqVJqwQHv3Mtvn4iJH4mHbWor7JF4ek37htXipzjrugDFxsJwZa4e9G6xXjLasrv7bQsTKBMfRi3BgNgm5KD6",
  "key18": "2WBhdHRy9sY8JMXhbK3d5jBfsBFyX9fV4VZKJA6gRMsY3F4f7CGmuYCz2WZU9ZmoidnkAV3Ycz8orF7LpWPqvY1d",
  "key19": "4EzZiJZH2HqPk6Pyb5hwpw3hBoiQnRdk4aQ7FhcMYNS5Q58Adcg1UfPd78t4ZmqPcp4xxJUwjLLnnjZb1voxy6vp",
  "key20": "4cNcJnrkj9Lh9YJxpDth5kYC64ZbdxYqVuFVv9zw2ytvvZVjX1cp59hURTawDXvsaYjyBm53ehFyzSb4ooF1UQyS",
  "key21": "5HsmVZjoVmnx3azi2EFRfqvdWh63eRJsx2qUbEtkYvT7TrB2A5T7GhAiZ1QbDjhwcm5Wm6mtpAQMELnmE28eyJde",
  "key22": "j4zDPaoDf62Mef6x9Q5ZQxvU5hQxyS1D2c9nj7tUx3n3SdT1EgGMBhUgEHbSJWBBtzuwwCZDBz9aVd8yShKHeyg",
  "key23": "3BcgcjDuN6UFdh3BRHcQoWvCJSJnJSsem8gTSXqw8F6SzdSUYgCSNJhpsXVMEQCbSteh4dbHXcMKNhENNggP2q5j",
  "key24": "2pFUjZTzemnhQxoBYAWVeDnUFai9vGSNgn5E9W7k3HYHMABi58tEyeiQk1Yr8RWBYepNEuhJDJYM9qfwFro7MFxX",
  "key25": "5Kwrj4Vernzp6rUFpeY9JzjiPQmkDM5t8vkmDewxiuQfGKDVAmYGXDygHQgmXQjEFt4y1zzT1yv81pWGtfUKJK8n",
  "key26": "4dYei8XiZHgmcfr9zEXECrwbJK4B3oVCUTDGfUJ6K9ciLfta1ssj7MdYUdFLgvQkKJKWy9wzCotvoWvBn1r9aLox"
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
