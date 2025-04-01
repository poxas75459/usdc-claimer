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
    "4gZ2RRhoGzE2sZH4ABtaw7MQP5DLH4XBTSM4XnZCbx8ETCHQQZU6a6cUZgN2qy8H4nWiY4dgXhgJprbD6DbS16V5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfR4g4gMnprjtKo1RDENCnzjHFCSUYyVk1f8YujJVuom8HmauJer37zCnVAenHZw2UBJaAndvY8DkqdGkjMQpJD",
  "key1": "5KfHxmWM78opMYxUPxRbYhNDBcUu17MN5WebxmBDtoMd321y9hjGGYdcsYBuU92BwpZR4uFYpaJuUacQgTQdF19Q",
  "key2": "4f685vV1gv9wb6wCvU1CvjGBJSYMFtpsKzPP3TesRUeoREZF1zMZk5ZDQgywr7NMRdVwX24ARcwSQ6QxYk7QDuCf",
  "key3": "yudcj14mTEoYEBhTaBu4xY3tcT6jqYMwQonbLHTREh1PyLh9B3S9KvFwf1QgHzKzwUa4mVm4S9SheLhv44aEkyz",
  "key4": "2G3Q2RS9xQkn6mkXccTXMSxyTYQKitFbfx7AePWKdY19LRX1unJ7vBEioytCViDGM4cUaQSA5VjEKRKxx7PUjgbH",
  "key5": "4Aks1nQVo4aEbnqWbX6xxciVsdLWndMg8qZPQNQrq2q6oncb6M2PqaYERKTHNPWpfHGhKuJA3AVJjya7G1u6ETtN",
  "key6": "4b7fiHz3G4qW5LCLtfBHbh7ASXVtCzYdgVghPgYdWhJLykjoAxB8f1onHxBTeRttPmNSisD3vUGEZBuUMweaUsmM",
  "key7": "pLQoaUoQTJTMzmDDTQEEkYPmPmWqHLEW2ZfCU95b6R6ksDeaqMSSSHiheHPXYUed2RwMwj42DmxqqWzLu1Dv1Pr",
  "key8": "4wKLDnfCU6YGDNt3pt2vDgbiKk4CvJdc6dPY48qHeSdAKaAEX5TCxgvM7ZXuowXN8DhrXtLaeRSQsUWRdHTN1uLW",
  "key9": "2V1UBJYmm4uGTcUe7UpRU1EQwuxEagQnmbQXtW4f3p9jnsae57Ee68utVAuDhzGHD3sySYfyF4C4x2gNHbFqLF3X",
  "key10": "5gvMEjRFh3aQHZ7YJADwBtyXxZbCE2bWK3P6yFpRZVTTm43XEHyYbugabcnaqPRNATKzJVYa4UywcvbuU6fgKYBe",
  "key11": "65kCDUF63CU2ZTKAMthdmQJ3A2YXHwq2o3PmxiFayMUa9v9qhzVDq4eqgcfZ7Yum2DJkuYPmXd1eQFqzZk7CXfUN",
  "key12": "4yPge7csiiwrrBr8jDPbLjZA4M8uME8gAy7jq3Y1vtF9tgXySMPmr3tVtTwoudQWSKgkc5SHXPAsgCdNEwxhy7yM",
  "key13": "9sH9PuzMqNsnoHckxJQG7tGSkKz8FqhoJd9uYQpyWg4nzTMdvi28o4aKV5RMQcvExfc3gCYbBLSQDu1NsyRqfhU",
  "key14": "4TKJQH6MviXuzaeuvBPAzkjjcdy9z8AcEHxZAPonqPksP6LD3ASwLrfgS9gHcjGaCm5mhzmewrWZRAhGxi7qNEXK",
  "key15": "61GF6M4rrojy74n7enQDRV2u4SLuJQm5nyH5DkveXZs3D4HMsL6CrxsjsjPi7nx1Exd8Pbutdy3F5NiF1ecjcuqm",
  "key16": "45eUsWsg5pFphGXFHV9xAJUWwLQN7LcZKf1Q6ZHB8KXEBTsXSPre2TremvB7ZRq4hrAeDPFh1YmjU5dX9tZEYpnK",
  "key17": "MbCHGofdVagK5dAdRhAmCsMGtPYheXoKb2s3BQY2sV7A85qYKfMSDVCbZyCcqMqA6sWXiVgDWyJHZBJyg4Jy1AV",
  "key18": "5T7BPXnFrzfyy6frMx5zoLnCKUxqjD3FdFfL41bTgUrPeJQZmWDhWdkJenewvkQyjk3K3bqmb8UG4itihqagjLAQ",
  "key19": "4jnwKb8xGRPPWztqdx7UbLJk3N92Z23GpQY1efamuhMvkHforWPyWwMiXCXhjmcq4S5wLCAh9eMV3mjig73dDUWx",
  "key20": "2TBoXYGVW1RUY3Xz59YLsqJh8t1QsZEzdEp7u5vUaF848kBtCADe7qzMp74Bip3UAn6rdWRVZVhwRdrRcMn9cdHX",
  "key21": "3cDhw3UbNNPL3wdHCcWVNUM34Tv51NWMyB6XqciFzpQuDyZjaXdQqgj58qgNqczZNjxcRnfGeV1URebZvk9DAFF9",
  "key22": "5VZ9zZJn3PLx16zEpwfSx5U26HgEWKW6ktPHBZX4ZpiLnedrQPSpgrSaEPBjYjKHzt6LG6F9GNhL197n2vaxECDu",
  "key23": "53GGT5ayGqTcsQbK8rpBY37UnBykPdGL7nc2ZhHLDpCuC3E2k5af6DBK9tYMpsJ8xaA7i1DkMNA4gPZ8nsk54jyk",
  "key24": "5BbP278nFnuxjdjTUihq1mij8p99eGbJ2fAHpB12KngohWkWtisfoVjZyzf7pTgdj5NUNGaPZruJrUWg4V2YA6DD"
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
