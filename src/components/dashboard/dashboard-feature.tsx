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
    "hMAAdrrSL9GyRmkCgMraApNopKpgfoCHpg5Gau9GGM6itTrzcGYNKEBAqPkxre5NLYPRgJZGUGbzML6eDqusmTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ebCBfu19dgU49NXUAGKRTEQ5t84vE5G4XZpaSJFv56EMVkziNfPMFQPDepiUawFzX9nDtG2PQUcxPvjzmVyBNzF",
  "key1": "mrQMBS2qpZERS7PsW4A3jfWB6gmT9WGX8EoaciJaF29v7GFbHxtY9mG3c6CL8mogoVyxVYeVUNzPEdiBgwikFi8",
  "key2": "3HNUnWaw7cTb4dwjrG4SQGAM9kytej1uzy9UBwRc1Rt9b7czAu74c656EX6YcSyHvCsYT9K4TUgr1qG4niFRDv4n",
  "key3": "4xMESREkDpwsYaFDb3hpMpU21BLRiuthsmaKMGmW4mGCjRR9ZWrEZvUitg4rSwGAW2YyWSwsY9XdvtwSb7wFd38m",
  "key4": "2fZybEKYHoSBv7y72FJ3ic24XGPrGyd7nan3SmaVo9xSpg1dx1nSdXyiYQBpGqPDJgERuQJhsW4DA9BmGESVsiQ5",
  "key5": "3HafBKVXuB7b8ST7rkPDBQ7ZrfvFN76vMiAftfV5CXusxe8WzRVqzavBZyoPNNUDHm8EShBXbFM3yLyCVNAkGQFF",
  "key6": "G7BBPRPHzZmV2ZcERdyPukUqdW72RVcSMerzpp6N1mcHtME4pYCyiao1WdEds215n5GxwUG3eEC43DMiqDRUu8v",
  "key7": "38r4sKUMhFjxHNRe9ATVJnnUYCoJp8aHcge9HfD9LKxUiVrxX3D4x9vXUHPR93mSp4SErL8xWfX5wD5qdqZzGuNM",
  "key8": "2826PnnyQXezBN6UXVNK92q9dKcTEXM8oc3JWHErGhrv6TDjEzyWn2Gp5Gp7CkVwgFYuQX5dbDiSxqUUVrjJufra",
  "key9": "84XE6guRKvoxGb9aGDBE4QbyHEZJfnaj4rst7qqzsb6jmtr2dkK7L81Qap1M2HTxsgmz67Jm83D2vueHH3TB3XX",
  "key10": "2jSgADPvkraKeB69asrxQ7NbFrbGZnPcFxLP95jcdqBTWWrJoWCHw32BfAgrVKMjETvHQq6HG7qKzqT68o45jx7K",
  "key11": "2TSAHc2dBkJUwkipyvWf6JRuP3SAUx22rErRfn2h9XME6DxkmFEkMxRWygHRCQyf7XXEEPfdFtJMHzeJ83uKKiQw",
  "key12": "5gq2m8myJqReoVoqYb2JJKkj9TGoG7KXYm82mZkQNEvi1tqE1WmEZYgYUQ5s1Z9LnYjCMgB5mnRE7jQP9wR9MJHg",
  "key13": "4orkf9ngHLohQbNYZETWBxaxAidpKmwNQfSnhgBZVRfvzKk7iLRjb8pM7zYDqEWBKYVkM4o4kQPwtjtKZtfR4vwr",
  "key14": "36nPHJdFP4fN6SYEjmPgWjFAFiXGVaS2qmNJgiyV7uTZcBwZSXFg9jhgPkp2JzsEyQwGRtbntUNTmCbmfgnjLjbm",
  "key15": "2JthZjggMRkFnF9Zzmby1aDqFYuvBxhXmg2KgnGF4EkAwywozgk7RsJmocGKAr8sDxwWuceiSqjvqYHswgHZAF5b",
  "key16": "4oNQmYLhkfzYkVYnTasxX7xkBpjFtwnoKXZpxaQtjoMz28SzLPD7NuJkjvv8TmFxwHDqSEEMy4vdJauFvQexqg1N",
  "key17": "5TjkMukn3r8ZCmfVPLJrWdbXMe4VTdhYUQi7VckKWdcRFuWzn91fF9sUU6cWhtBYUT67U7uRMWb8ZRj8V6d7RhLT",
  "key18": "3haQvB6Wd7pjK1Bi1vFqSGRxH5ZumpRR4qf5kp5DYTNK2cXR7KEN7jJX4T2CAFgzpbzQG2p4hi1wNyigmdPo9EPy",
  "key19": "2wi5LjZbUtfPWTKHbvm4iY7AEvpnp9qKAPEXxpTTGkQDo6z7zkB87qWRRxtiscUR7kSuk3VDeAjr74Bg6hbdRFxV",
  "key20": "2FEB5hzvwk5ox3EkkZtHfgs8jz8F2nR9UUrWpNtzBfukCUeUQibZDm2uZovv1zca1vACjUnL5ba97xAwvY41Hyyi",
  "key21": "5kpickkUKhLiAt9HPbJLrR5K1qKHiCGZSaUt9LT9KuojVasNeMiRFKndZ2ayFj22y831ohrdXDAxXwqfrxVkEb71",
  "key22": "2ZfeJLDfU1GYEKmWznuNa8CTELdeTQXcPg26LmqQDxqf65w6KvD78x9pZwMFe2JKLaikWqFAaZSLS2deD7jECm3b",
  "key23": "ihPpdsJTjVtU6HQZ7mfJ7sUip1THCGuzbijpXpcDZ4KWd7UmCJcvrzNwtduWA2eUmkArfFz46swJepmMv9uuAUt",
  "key24": "5RE2uW1Cn2Hk67vBjU5fz8kLheQbzwbYR5WnBwfk5WVbdJzWhX7jUgLRkmAyNotcwLpov8mF5KJCaye7rLD8ztqR",
  "key25": "5mQkdd75s8bLTKiosHFbGwR5or2kBsUgE2z4VGP5hdCG8SGbYYrSfeqhLy4h9rsnTc3VbwTMzBfbspTFvmhgZLDW",
  "key26": "2EYRwFhfC7d4dSZmAzk78RAJrf7GyBaump1a78T72ZGqhiQR9Jx9Q1XQ4f9VHJLi38RWU9iWFGVGFXbD5n7pYM1J",
  "key27": "5EZhJkwHmVocDAs2r2kh7CscG8iYf5wwY5oqyH9Nybf4SN6zGGeFiVBn7kcxEbj1i1FfJAAYm4LDUaaEGok9eNyE",
  "key28": "3UjeEbxFPVkmfmsrYPDw86nD6CVSh8qfFbNjBYTL4eojxncpXSxYJevxLsD7Rk8cPDbwE8vqkzHbnVi7wb2sJCEG",
  "key29": "3y2D4hKQdTSfbRUmsfkmznbJKuuWwCaXpQZKKzqCRs8Ght2eHN1aZgYaKNQwVizQet5SpDrw7VGdNeNmxVBjZBEz",
  "key30": "5Je3S9zmrH9L4eCmgLtbbyyrhZQYKBNPmmVo5xGmN5wd1tyvxXE9toUshjerx2YfEDKoRKJzDuuaboYptRsrvq7s",
  "key31": "39vXhvf1EUv7ppFqroDySXDAynfKSnbg9pLFYkBNcF41mzY1F7nJrtrmUL1cguF3XFK4aNuVwuS51gXHF4HE3nDq",
  "key32": "2xE8vK7wadGqjQttFD4crFHZ7L6m7Sikyt1J24CDmG2appgJkWp5kaExzf1dFe2WViN8S9qNHprG7tqSoohivh9P",
  "key33": "3MMhGaN6UnLeiRVVsaG9wdsYKjM4BwiPhxHyK35cRT45EaUSdTsxyN2y1Py6KJM5FUY6JshzCZxFKKdMfBBNadJU",
  "key34": "3mCZd9RCdaBUyGpEaKa3ABYgBjMYTbDPF8rn13KxaQmjNWEM6GocR58gLQa2idM6UYGinvFxcmLe2EfqGL9m4GpU",
  "key35": "41ny7zbzTLTuZeszBL74fcnj8Jf8shJvbRrJaCoVuDajsKa6Gore2fZamm5uJrwgFCTE4caya5yA6CogpYNNWTj2",
  "key36": "5gePa98py1U8q6gTyGwJZWXX46FYYt5XxuTwPN5RXF9YNvF5JmfiK5nuK6tdX251SPL6bjAK7QCyaZ1hW4aYTEhw",
  "key37": "3yhpjmxpHvH3M5PpT6agdjPs7nRZqd3E9JVoYPEtfuLBWWM5XFg3YJHz6N3DK2H1TMUaCCaSGcxTUGK7WYM3djnr",
  "key38": "3z6Vs6uRTTguuNxVDcUb1ooK2hxC7S6Enzo2ykfEyxJ7T8JwkYEUg18UWbVEcQ1QawZrnvp5KNFS8FcQwC4FPhDs",
  "key39": "5JUDaWyk4fswYqCNvhRUoCeq474ZRKcStowsTUZE2bg7HKALunrWyJRT8nwi1K7T5ZpngWwqzGxMDWEmsUau3w85",
  "key40": "2fNes8u6gPXZ6pieauAHRQVKqXf3yMMuo3Jh1d7veuHx6azDr53ptp2h5drUjvU9MUwFBEFhDcw59T1km4AKt7Xq"
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
