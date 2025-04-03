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
    "35TfPK8DinPBZyQq1jWfRwPF7urzcUU2JBDZy4SsTJmw3bS26kiMkbaeP6Aru9JTgo7wEGhkvEd8C8VAvnbSWkhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DzaWZAm4vBNNUKo2m2DUVq5g4nfb3rNLQefwmSV93Rj6UPvTE3n5hMQNzMMuyWC5kBeFkwqAxEmRb1dM7Cr68GK",
  "key1": "5FMyYUHcLbamoW4FjwgPPUaqNwYoJEUbBNdwbocXc8ei3N9ET6kHbkgDQkdaGVRWjPFr8HFZnpm2btmZra7CADig",
  "key2": "54NKLURbM5ZdSssUu7Kc7LhVQqjL7AMXxaaTVVKfiLRPPizN9U6m2MDSq9S8CUWGrPtBQ55Lypw4TCUsTcLofHqm",
  "key3": "5cCbKeQaTTwih1fDBYVUx9UwuuqYaCqFwzVKuaEtZdBkdqyznvJhnM9Af2SmCLH41jp4Drf1E4cDX2X5Mb14VMaU",
  "key4": "5i1H9wZ3fDwmr6H1VZTGY8ahRL7TBhp5awKCG9Mhya4vpMCEcsNSmGYbc8SvGQftKvAtviKhcAnmhER5hZ4LUwAT",
  "key5": "2jLXhmePD69h89EreKXX11g4JwcAvPc5mGGTVaVWpNmw8vGy6G34ryHnzRoqKUuSBQGMpTfXmarFJ4x4KbeJmHSQ",
  "key6": "3egYxyLhyuFVp9WnuACAoPrgtEspaqKXqAKvvvKdCrUhSqUNxikp8rPBCrJekzEPkwF5c2jMQUKZeHAqWWRxq5zr",
  "key7": "5i7rBDgzTK2Lsp5J8FwJWQZk3LHyxSDPAnPXpm7ffv8Juo5m2C7nucUqosjnzNnmQAQyfm3PTkbwBd8999whFuzQ",
  "key8": "cSaKpqRgHyuuAKBthva7y8VuekRR9GrsDNKzM6Wi29PB8hwE3bx28QBcPkRTLXZyeJYhJZtPp7LLyxbEdk8mhWe",
  "key9": "43GjQdb7Avpori37CFS76Td6dxLQ13jRyXtrfFnkZeyt7vQch8YXoii8QAJf9twYqoKGyDQgi6hGwhW921HMfAhT",
  "key10": "4L7PUMaFdHwnSJ12CmjCDjf29Fz2YcvCf5yxPTheJjyiUW7vYKfKaFUaYt88gZ5swAPQWU4mnZi8QFjESfDR7d8t",
  "key11": "zm542wxpkyGJ4KzMQvmRMaMZmrkF1mh7nKC7KZ93FKtQx1gZZnN5AUaYtM4g5otHvcy3t22q2rstVbQerre4JMj",
  "key12": "3uejnChehJcrXsCQwpcRfUABWvfCqmt8okz7JKfTQ3CDJTJMhSacnYgQSCMuLyQ91NWfV2V8AwNhwiudGX8TnfMh",
  "key13": "5BVqigYygXCUkUhwVMzTduC2J3WpzjnzGopdTZkQ5t6w2WgLvAUCNC2n88v68h2baczrM5z4K7w9nC6hiyKKUcyU",
  "key14": "pbNTfRDPES6KYg2wQEaP9YJPFVxRLE3tmisrdgLbnzdKTCB3pN2gokBCJCodosHXJcnhC1bRHdVkb67MBvxhT3W",
  "key15": "5vNWBQLsqW7dMSFupLouc1VeAvrGYFJHpfy1VCPd2wnfVWaHzG9DFhCkKHJWmMiYheUyTkiQLBiSaCezLd2s6qU",
  "key16": "2rpoMqr7ySR7CXsjQi1vxiHxLED67iS3EuSyhvm8YPLEMyKJJ7qc1aq3QGVE8bNi1dUJrhioavK3Qja68xgDpmhJ",
  "key17": "ezqK4ruXi2WaWwmB26dAgWYG8TjaPqLfB87zzStJiEvaLvEM6vgHkQxEQDKCh1BQnVz5JL2QM6LWLiEC3dnykDF",
  "key18": "2V8qxLoAVMnLFbWyjh2ni3Emfowjmv3CzsvSrwYkksXQw4wkqBHqbL3hv6DnPQ1hAUZfc6yYLGQiURCeduZFZ1pi",
  "key19": "4jiUatzZjfXGu9LYegjE89HxCKdJk2NjQ8U8LbAwXdHcig3kMmZEEc9wbiJ5wBDmuQU3xXoMGSLTd2ytGKWm9Q5a",
  "key20": "n7haYjGjvEpE5wFdEiKg5q7yj4sPsFaGWTPyMQBKDuYn6o3nCkrGxaTJiQkRP1DDLvPo6ovSyHvyWgSct9YN3gD",
  "key21": "2PTjqunsiLiEP1DS82cexvqkm33cJjF1hRn9kipcLcjnes1SJ6Y3uev4Prume5vXEoStBe8GgrDuZKtzwj7Axx3i",
  "key22": "4nnrgBeBWiWf88338CaHWn3pTAhmRQRAfoDNT1osPsHY2KUCncK6CzDB4m19Tj1kKTDgjbEvJrySit8zPjw6uhVr",
  "key23": "2GpRacLU7D3tuv2L7GczL4bftAntfhe8epYgnBY4YWiXPPZpTETeRgE6sExhFMd4gqZN5kvE7daaBfNiYbws7FCT",
  "key24": "sRyMTJjDGTbjq3JjxuB5avW4LXc6mzP6B9joL49yCienoz81f7zzMCqwjPVZUH9BTMzTVk6X8974Ch5M2mMPuuD",
  "key25": "2cLRoRqEFb8H7ZoE5MXyKaBr5NMh7VTr1rpSAxw1huxKSvfD4ouHADnDg7TEnG5nLiaNx4JuaWzjcsGPn6XzF9X7",
  "key26": "5G7aPqhGxehBSxZsoCUYJ6fVui6ZKr9eivdCNSNpFYeXxr6guwYyGzZye9rit6ZqfJ8Tms455JhpDLWYCt4KrU3a",
  "key27": "4ng3P3FGJh4nzajDACMTHUH4mR4J49Q5RcVz8s329ZvuE2W3xWH6Nem32FQj3teUfoNBMzR1SnYSv2e2sv3G4M8o",
  "key28": "PaUvCySbM35svioXBXRW7zuwqUhYVXiEoN8RmJKurngwzFLEtCQ6XYzDqntz66whYugwugwFZaMCKvsyiJLH9ak",
  "key29": "4PXhiRHVmV9K312Rc5oT88i2qKeWfDgzAewxBSqBKVEpi7CMVthL9AXGTY91R7E7pUCHP9NDKPfJpWMnrS4qE9Ry",
  "key30": "47YL4pjWedVdWeziuKKM8mPUZ7MNTEvhqpZB6icgYomxcGADL3NtdRMHTrjspGBfCbkKp259tiE7rHR1S643X7rG",
  "key31": "SUmKV9CBx2r2Ycbjf1xWr6H6KPvU3bQsuinQX6nMSJ7DmPgXvUQ4q8Gpn2BWzNcmYpLNy57iq4mZDUMEYXrRgU7",
  "key32": "5XtywT258QSU1UpPUsPMKedBzvPnHYmQfHJcas3y5kXWNvBmigTbbcXSi2Rv1CsQZQHw5Do5prS2gmAJZyXBGnkH",
  "key33": "4d8qMh5s2pCHQmVuYvin1rgnHr3W25BXWgdo38ar37cspnMHxtHJYehQWDfAT6rDeubgKTStgiHLr1fL25oLzQZs",
  "key34": "Su1P8rTdCiUQaVGtHWuVSSwsgiU35BLXZwy9NPE77CS2vwC2FVLNnoqsjV7rQnw72kMajMuU8jcHuYqyxRaWzDF",
  "key35": "dw9KVAoj18o9N2wGVE2m5PF6GMi8ZhZ976jr5HgR8fsxc69dqmaWxNFQLSPhg45e9driNkBVMNgjdoBYWcUWmZk"
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
