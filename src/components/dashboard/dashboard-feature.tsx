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
    "5qoZPMMjchPjcP3k6oKUsADPFzXKCSLLhH5bw97XGXfjfGfnEH2qdBKeuNXiDgaZpiX434a1Ra7qjUsUvUapSrZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qv2gkKheYVFpSAigbJiidEpyz6aSeUNub1qH9KBsuVTT66Z89mNZxWS7i8FFq1kmbv9b6pyPVkyxsVmq8HU4DT",
  "key1": "wrTUmT5dGbR1JpuuYFWhdqfSwBtw1S8s4g8UW4LKwydUCH5GN6oMiefPa4VoxEHifNCoxXxgQEfomRGfsohfgpi",
  "key2": "27M8bLjrGwWhvtudS1Ds5e3pydB45TEUL73un7r8aENBvXAYZjjXFw7H6eMiA2gsc6C9VcVgiwzxfdaBx1dt3VAC",
  "key3": "3W5Zhc7rrrk3Sp9zyU6eEuzrBwSw4iNEHrKJNPbYhNhNvXGK8XBuJpqxWuG6dP4S7voNpsQtDmkB9phr6ANaM6sp",
  "key4": "3G47dZEbm7bwzQBam4sCxpiEAXyAoKcfhxiHynreAMwh3gs6ei3Qn5TivtQYaky8EZEGZujnVqAyNSVwkCcRWdf5",
  "key5": "5XQvSUKhhx6SUBC6axyKVa7eVV1Jz4itJxbYvanWXjoer3ibWF1Lf4PtC4xnK2R66J14qxq2EFEAmjB8YNgQ5t2P",
  "key6": "5DkkjRra7EtdmXpcct1rRTKhNPcWoJGNaDyw6sdvuiyrHYq7JSaRYydvk7AfQPJW4pqzGuHHsGtK7TJBsbGnmCY9",
  "key7": "2oEoXifAzk42Hk36Eapc1mJuiAEmvaNbxojiXAyCfwk2EVWEXy87rq6WgD5JxGM8dGPtAXHUnDvuYFHp2LxwbLe6",
  "key8": "51iSUEwgorL4CKGhLJDt8ogYy7zTDkbMn44SvLdEq6bzN9QoJbLzJFrQkni5XfeUd8apscPJ6T68S5TT65G3AFhk",
  "key9": "3KsH9CJpVKqxvLQnJiJt3F9znSVmzRUbdEQDDEyzhMsmpBc5s2tsoDJQfcj8ZhfPM41Ze1fPWMoZkZDrhZqqbnTZ",
  "key10": "k4M7QHfVgFAY8g9Lqqn7rbhgm2toy8ykbARjpdHo9TGtRALv63eE2iToi9etnVmUqd7u6VejoHhJKJ4sXj9NQu5",
  "key11": "58tkJeiRomiJ3rBzdYBf3ynBj7xhsAKi2ZdgYDTx95UkF7C62prwtzwaYSBxiavjbfnFVUoFumS9bZtEuc88ZCBv",
  "key12": "4Sh7KjAHY2eDALWQvifo44uV23uAeHCUEKKHccMsNaGmwrBN6pB8wButdjbuRBAJcTbbzGLDjFGNGFgQYoGetVDN",
  "key13": "5TU7SbutenniaQS47Ux9yeg6ujpnwVWYr9vZ9mwyiZ9Z7p4EqNdBAEZCG4aKY5iWfu932WpaMEZw6sYmcquj6N2K",
  "key14": "3fRoTgtqkNMgzU6wYfwxaVfAJohKb4s7Ja1h5j1cbB95rzPfJcX8sqtvWFyCbRA8hTXjYA34vJPnTWwBRf56YhzP",
  "key15": "6727YkFTX6Ax7pVHsSx234aAFhcCqKqvynooyg8E1nDpmmF8Nrtcwd95Ez4wjepsv8zbhUWHtPr2argTCeu9Joch",
  "key16": "2qRhX6b6cbXWPAMteD13i1LKZMUUzLqhGjhKwU8pqBCPJbaM4MFaLXSUp4upxZtANH9SyUwxaPbsiYC6b2efDSJ2",
  "key17": "2r4RAaKnZnyMoc6iUfcxxgbHwuSR4G2aTMxwuqvoHkXeb1Hd2y8bYErpXo7L9cKAsP9P6KsRGQfgU8X6SPvrCJJG",
  "key18": "42F2ioK4Z8f3kSfRpShon6SjtxHdLPCHCKUMYTcwNKzkAXvBduuoZdU15KtN6AqHkxsACvZWoXjwaiyHSxAUHPib",
  "key19": "3zfSxHWAoUvkdtk8xyYUr8QFYGaC4Gya8CPRCHMfwRR6X7WhxoF58M5gEWEfEocjvFiBd1ZarZZzT8ZRjhR38yV8",
  "key20": "mc1ULcaVnm4aMKQrtd2QJcuDY4PdK4oUrAKHhcetzctXFP54EkD5Jj2Tb1dW8Bhmjr51LgZPJFzYywQ7VTzqeqe",
  "key21": "3SHxEv2jMBLWKDscrMjoyD1EfMdYHSaAiMpSCxaLhEMJDC17K7iGKS6s87vZvJtfn7Z5Lmmk4erNuVp1r58jkW65",
  "key22": "2nxqJy7FkFrR4XwAfALL7vYSe6VZDbBuQhA3UiicfJRHtgsBGCTzNrJiTx4oMiwuoRtqtpiZtkcc8AzcHUjYv23z",
  "key23": "2sfh22Qatm2J5cAdyH7TPQmf158dqiqBq7ntdpeWsHLBbAL8E5XPym4LjgjAcF96fuiZVQpyNGzv4BSoHgGWeB5C",
  "key24": "2i4zhsekft8Agd4JcVp5bBx1Y8V9ADb596g32B63KcuYE8CsKX7ouc8RM58n5SUPHjwxu3csNXFd22eLXFkYoWeU",
  "key25": "56XokqrHe5EPrnJrmfy5Fc9fESHhYLanoG378xkK9wkyZyR5mbcECcSW4qZf7DSahppxuXBhQoBRQV9zWScbeEkA",
  "key26": "4t1KWtZ54b1hjumWv3Ytgv4ZskSzZcn2Ld6cVRUoVJVLfo3374nK9QVs3wY11UGcvuqjNDKHZ7iFPQFRjBFsgqF3",
  "key27": "52yX4NNVqRjnmJ8qfTaH8fDwa2fagPk4skryd6zoCeK98RoD1VSdzUyJBTo4Ahx79sbiUs8yNZZary6bdTxQWL3F",
  "key28": "4GoPF3yDW8JTdeQuieU1gvHg1ejVe6pzXNR3L1puZXUGavrxyS1HWAU83dvh9AVevhgVbTrzc7QEjVmc4eSNmoxE",
  "key29": "4ysCG93cS93CibJox9te9unsRNB7faSu1gVRCRcUpvacwupfdDBuSWRHZiBPaygRVfFztbHNwnTxNccuDay2P6zQ",
  "key30": "5gLnY9LVEd9FW7JoGXjmmNrzcLYAKLdiubZtMsCUTSHZ7c6sypKmC81w6Dx5NgQokvm2gMWNLVymcED1k92HXxra",
  "key31": "4wjhqfZUpcKMquYAo5sgZpeKz7tWv3JZVkEyuZA1uBsoVjhXWpwQ55EnMRts1ZA5gMChASinmBQKKaxpRXizBycM",
  "key32": "55av48WVcDGk3JT33hHeNhcngm5QE4XfUz1AcmDBtr1yg7QbBwqt25UtCgHsQHmdFFcQazWYu2N9bV2ELfyEh77c"
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
