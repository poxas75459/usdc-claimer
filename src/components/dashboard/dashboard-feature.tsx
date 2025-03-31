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
    "3P69T4NeFpWzMhybK8TCstY81UVeizyqmMwc1MFivSp1eD9NQCUDW5uJu7whibyqzwrYYCnoTWUHsNGzLJWvHpzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWBws5TeeX3iKtbrMAox3Vy2tg6AZh4xK6vNxcofb5S1HVAaYS2LAfbxe7ekSmdUMZZGCop53H7bi2vcTqwC2MS",
  "key1": "5QUj5Rych9wrp1mRya8wkMNHzmGXg7rtjcrHW1do4b8XQjrkmzyTdhtPazUSCcZDWCZeAKCj4cTQpE4ryXDWTSin",
  "key2": "5zCXqc6d5ktbJsd7f6vYHyPwBBSXuYbK47zYFeBXUuGCyGPiK7YvTapjuSPNy3mRDjwhqPS3JesnsutWKWxUG56B",
  "key3": "3ZCwZWT8GJFdpiVg2xMUjxjeDNE4b3DmCczMqYM6FGcbU5wQQqkZ2CYPr7AP9h1U1UhXz6pei3n4PBhWv7x78SBQ",
  "key4": "38sy9tjRKuxB6UsuRedrnXyFfsUJFJpQK7a4rZjDhoZA6Zu7DKD6NVYafQG4aeMxV11A2CnBq5xhgPwwxdZyrDpe",
  "key5": "3Yhbjb3tAjHGcqQqeMkcr3GjJNd76u5XeMNcqPxrUC2DyH7rfwTdzFtYJFVZR1iQBLoSzNBFvoppbjNsUnwtRwL2",
  "key6": "3eApsnvbp7xcWUre1MrJVzkLz8JLwfqWU8Wabn8Bu2z7q5WNUQJSZGAibw2GxtcbeLmaN5UGY2UK7PBph8HHaFiu",
  "key7": "3afeCUgT48Q8ZgEME9khWfE5fsyKrXHk1ghTV9uYZEUJsgFh4vxK5rrPwh6nhmhy7sgUHVKM5z1REfsauSFRBuL6",
  "key8": "f9riEZKrCnpQjiXwhZn5RcPsRowg4uL59MdiFcrzCnHVXpozg4iyuDdyMawQ43AFzY2BZZWM2ytEmgARdMhCCZZ",
  "key9": "2C9RQLN9nqRV7r5aT8kcYF7HSkM9nGYSUEn4MJRQGHvGiz12g3M3jQsqeLAN24L95w92WEhMUqq4CHaKPRMxrRhv",
  "key10": "4bt3E6gDVmWZZSuSEb7ea2CdUdarRVz1cZxWKZ7KyjESWt8hhv8j3pmRegs9uwqig8c8VypadHvXh2s4x8avGX35",
  "key11": "29pE4QhSU1VASzqqyEEZvib6gX89KMfxJ5sA9XrJSQHidwZPocxznuSeQbpy8gjgvJJmjxLMsvyXsg67Wp6FpdsN",
  "key12": "4fkQaEbgojz9PQf57hwGzHUTxuXVnLuHWqMdyaYjgzVSKDoAB4ioLaoKG8v3Ap1HSdh2wHSqRqnL3qwtf9wGtVAZ",
  "key13": "5TB5spJ5ofSYSB3jw2FQo4xLZ5qKpVjhJUtExesAAstABouQpJD8pAt3dhfGqJ9p3ME5jAoWK5Sw7JwD6FzveB8V",
  "key14": "2ga3XnnedmsC3VMHiaHNMH2iu7qAQRAym47i38ckECSQyY4DfKF5rDkhaPTau6dkMtP9jBRJs18TGGQyEsZ2a74P",
  "key15": "3UFkyeu9GM5ZMFb91HFWq1bAkgFVtdKDzX471YuyLSEdAKgCizKcuXCeNMqZ1LEcDddoZGgTKHU9EJqfJHM6jckn",
  "key16": "MiWR8FxsLXJegzumXpzjJq73ke5ZFcmKmNSUG8WwvFfNzzvtJzMTwgEsgmU765UH7ZfztK4sGZgSSpLqspqZDGa",
  "key17": "4ZnyMxAgRxj9YyYhJh6btbnFZsbB1kj1qUH7zRXnpUcrFtB46EvLKsiynkocQoxRpCQ8rbkaMtp97rXJPWWkp823",
  "key18": "4BWfDqvtP4v2aJSqPQsTtpyPUMPWYNgGURNe8bjfQ2sVQ6PtzpUxPJbHnXWczKRkribuMhicgn93RN5azVPLmCrs",
  "key19": "64Xg65fVgfqwABcjaPCMip1hopjaYxHLF1BJ1rZ81NtR7rvfdi1RzBRHcKAnenxceV2CHAXwik7jvAfvmBjEVQBX",
  "key20": "aaC1Rw22x77TSf2hi5YmmEHEkFy5b8vDPiYwmrvoMPkhhVPL1rhNtbvYLgEzNNSFvtfEsKitHUqRcxVKZM6pX8Y",
  "key21": "54HjkkQ76g5P4y4GvGM66rA8tTn9ZhRM42a1DrnhWvmALzqck1QX6CEoE15xaWdf2T7XsDQi5z8RfftQVypxVCBN",
  "key22": "VnuXkzUfejhR5t2u7dKj3TxgxaSyc7dhUsebbpu8K3t1ihaPmrgEsdzezUPGj7oANHvbBDkzn41NQeJG3YVQXHL",
  "key23": "2YcLEvh4cuZSaagtRttWNZE4x7jQzwRgTSdrTaMXN6MLvWWzqzZKGcx4CMCJzSahuQTiadJFvT4g7LKAyiWyWoPs",
  "key24": "5pgp8xCntYVqxnRb5kWFBi8m2X16o78vBYRUDcsLwKpeyxzxNM2JmHtwyueyQZDhgUiKFuEVkGyXMMDXRr7NjReu",
  "key25": "5nDQLnnkQzAWh2DwQDLYCiafkMHzz5Ua5Z9FyuSaDEedP7xsp4Z4MgAZ8t4YzLfSsiEepwrCsTTDRVhBtGi4SzXz"
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
