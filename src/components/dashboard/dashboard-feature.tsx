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
    "4whhjdzmsnjPHfyqTPb1NNPGLFrmQRcrUoNWYX4P8i2sn11G8z7UV2y91gaYS65S1jAq66iPBYmTs9wi8K915gvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xR9FLpcSMFG9Lvh2jh8e1FRG212fThFw21SNZ2f5AanPKf4a8a6hBZcMxBskfw63boUvVVesyTF8jZM7hDk5aq3",
  "key1": "5PgXFtFfXxadFim62GjE8f5Ap4ug5pK7pi7zkwtLAEFGLqXn9K5YZcC7922RbtWVwhLMdHiTwSa7Z2k2t6JGDgbR",
  "key2": "5hA9NyA2diDkXFED1wxgqu2jHs3uoRo8iGhXzJ58NWDkFxEsrMLRDFuS9d4hS8dpFMnnyZbG6uuzSvaAoo12zd1E",
  "key3": "2YQa7oyzoBaGVVukzZGnvzHADnukWWZjECdF4sohbj3L3SeBgBB35x17ibTQ7Xj5XdtsopgsTYfjWcx8nPYhaqee",
  "key4": "3zodRdr43564V1kdtPmFBnQrrLzvhQa5y7nbFsrscp5qWeKveZCRayfRdKvk4RGoib9zTTwW7dUuBTYodih1j74m",
  "key5": "2QM5FDQ7A79yPUditH1UQ4QC4rh7BufS3Ab8oqPULMGhRStMNmYZmimdPaPULjroBtKA7sAdswajS9GfAy3APsLJ",
  "key6": "2ofopq1k8UtUcT92ShFq2LfGHLxXPuiEQeq3SadGu33QeRwgbdMSXri7NLyKKtYbvCHBHktPjA3GwQun4uLpTMUe",
  "key7": "5NMqvXUjfj6z61jBw6XLXqRnfnA3hRx84CknUxzCrVDRbEJE7Y35uBxUDdXEjUe3ieuT1PEHBpK6b4MxNBb1LPdG",
  "key8": "4Vo91TKnuAXRwC7WW6cnX865jHQFFUqPBoMnmFCpd3skevEwwhJUkmevUZBb8Qp3ukn24W9CiLL8Dn48e1FPt4UE",
  "key9": "3w5jjNm652BsYNCZd9SpinNywpsExftuG8BJXfaYiwHYqEcZUxX6tKwctvtB1FN6fKZQCyidZPz9Di1VUmV33g8r",
  "key10": "idSL5Whno1uh9yJfUuNCVABeogCJmM1eAJybZE6toUerCDjazkfahwyxvTYxSMUcJYSeSCVTA7cWRfM1r65LRv3",
  "key11": "5NK4ojTxQ2iNh6k2gZHZWSGqAPqK3LfAn3UyGjgRFEVnkVxeRwLJDoG9NSfXG6ZBFRiNtUqMrH2JCkMMf7ig4Qdg",
  "key12": "Lqj4fVqAQACLSXKAGP7YRSFf15Hp8kXQqPqzW2ybPS24dUj7QYrPByyhR3MjnxP1rJvBcuu4mZxX4fwboDDFTje",
  "key13": "5DpoS3ffS9GVTsDihBQpRLdeEGqwFX2ZX8Gwgw551N5dznBTaB6duEPTdKpLaCytY3nbVxat9tsdvSLuJXGcwv7U",
  "key14": "5jaHjPXnJAwNpDh15htU6oEEVRw2ySf5P2hAUZxW9J3aZ7JpuNb5nbw86k95dmZQr48zAKm5YwzL55qNT9ibNQ54",
  "key15": "3QupmfjLJePaBcDTJoS8k82wCHBnaNdVExA2oVAkfsx9Ej5bZFvCQaJXwYWEvttwkVExD6Ni5AKHPFpUAYcNDqZg",
  "key16": "2t3KgxXewwHcfhcHEEHvbzhvaPRsyiFoxNqJEh4Z8SDhAGW2k5msB7DXPaLZs6YbgaGKrJYfUr7LV2eBvkVKW5Cx",
  "key17": "3AL7ECymdHqWEzX8Z1VyrbVPjMCjEddsdNdwSsdCiP9oS3FNYCjYzRtXKZsNeXqcJWr8yCJRpZMhWqAF8FcMw2F3",
  "key18": "2gwTaJ2sP9KU2W9rFwvueQtQH26pweWcxwxoKtjqRB9JZouyj9ULHFYpEtueeyuJqVT228MgSaLk5Lj2UVYjjKZR",
  "key19": "H1VDUtCw4QtsA9qf4QbJ4z8Rtzxk5HttJ4FieLt8FExTCEWRoXspGCwQrFSaWAHhD13BWJvTdqjpSNy8sMH2D9Y",
  "key20": "wfNng7qsJvhchoNfhx7B6ktofnAouuiuqBRP5xZWNnKNaJfLnHXmN86GTNNoUgY94oXYu6Wfrax8k4v6LpciWDU",
  "key21": "5xwsqxpXyc3mXPvawbRR3vvomH3A8Ak1L3HpxSwj8M47NaJ85y3VdHnG6ddw4rQU2zJ5inmgFv9s3MqJgAmjaANc",
  "key22": "4mKAuQkUhU6wh2G3yCNHHZVWXFTaThkhv9A4Y9RmRUvdn9BiHXPxxQNRsxqGQyPWmFw5nUpCWCDAFPqUb91SjNg8",
  "key23": "3bppBe1DDuKP9ZCCPNEr1sg11BV1fW46iYVjn55wRXrPBfApeiYFPzpXqnGtK8T2TawCkg9qeJXEYHu9i6LY1YRh",
  "key24": "25hDndQKn6yWPf2Aj668ik5wWMc53dsbcegxq8xy92Ap7J7oMfWLrhAhPTEz7foDfkaUrTedgAGXMMEhU96pB7bj",
  "key25": "3fk95GTV4ob2eSfDq2S5jNmfGreqL9mrUAzRP7K4NixrF3iwVDPzsGrwfg52x9bkVzbbNxxxG3rv8FztwTQFx2xM",
  "key26": "3qnp4coupWDAqNkEDYoycVTcZVdnwxmE8j4VQkRixRW4yz8xLcbX38wKUDXzKf4zZzC67RodAEnPtiqjnrGTUoLh",
  "key27": "UhijfikMtyAf71zNyUvdyfEdSiLb8asJD5BrvLouF3hMbkLD55UnmGsbTJN2PAr1cHh1tpAALErmEyqv1htUQcs",
  "key28": "j3sZY41Unz1Gam6vUZqTQuhiQPzYSMs1R9juexMtBvotE8CCdfCanewjSLwiR9gMqjwZGKfM8dQPqENc8cgSXs3",
  "key29": "5zhNga1J2JG1ge5AXGnBW5sMJ8VdGPuuC5EaLxjn5vXxqDdrf393ixsK55eY5ycDBiMcHnqLpxwRhcNBMF6BZWJk"
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
