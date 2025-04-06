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
    "4iGMVCNwHRYHmpuxPh3qrU1EcZd5g1GiVfVuPL1hbx5AMC24Poa4jmai7JjcdASmcJf8ore4LpS2wqSFj6Jdb1rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKSJ4iuV8qthBy2VHfSR2V9J48rhDag6Yp8mVZqcaeYEEEaYobtaYah2LF4ohLsLgzkpTBm2PjHhFm1UCahBrNH",
  "key1": "4Yi4CYkrM6e4orKrXZX7KDhuufX8xAQ6SbF3LFcaUjBzJrwqtNbozUj18VvrCoRo2AoYDYBDkf3fvgUheaUPzPFd",
  "key2": "5utkJEhC5ghVdescAqCJpqyHZ6dmcNGijzFiipt233aPws8Mg7Q4Ug6EkC8iyByB29xdLjSxnCuC4hKPfcBDGuPz",
  "key3": "oMG8qfsiwQEb6NjTMrwtrMA7XgEHxgiLkMA6w8aRCiCbn46yzompt4w9PzBNs7aHbyb5qp4tySRMjRpZ8vidwLh",
  "key4": "48L3aiPX8mTbYAoyB9Kzi65eVPkiD47i7azoLhJ6zaECR1XZQnRHfh35hwoZby6GAccsHNTAV17iHgQuQgo3hosA",
  "key5": "UU8T67suamEnXKdJiKPP5oiuDEzu7UJcXjBj3HK3xndRQbzAf29mDQKjL2HAJHC56sPFhVBWoYbWxmCZq4aNFJ9",
  "key6": "4saMwdLs3TobQP1mHSG89qSmgkvRfW8QfaCSttW7UfsbXhFvQx7nPRfhKu2JqmtuooysWnCCWuWw2gZazfNt23VS",
  "key7": "2GnxmPbHicGpWAoRj4r9jrTnVtkXMX6yKKLkox8kpAUS8nGvy5KfCxL4uwJSr9Mp9h2Kgj5ujsom43QL7pCc1MvC",
  "key8": "5hXkpFL7TtfrtrR63FDqKjeJ7FjJKKeDdM21MpeYjEWdx49QQ81gbAsxbJTvkYBKKoNLe6uzPqwtYExK59SqSvqq",
  "key9": "5QAoYgyG5j4h8beTW6UN2HsPS5oNZ56eLiVDNKJqZmQ5yABxqpmVzWYtnYEhxahTm5GC5eWSqtpo2Xfb38M869vK",
  "key10": "2BoWnHt5CUzANo22pD24V4hAHQY33rtTJkMaPvQTwCXAzzvrbUXNDrofUnHHRQAErYiKEUs4ZDNbnL73w3HAzwBf",
  "key11": "4ZVbh2B9kdAvnJoMbkGAsJd9eYhTE6tNcMuqQE43TmPinNfJtkt15ykLJS2pr1RwKSpGko3bZ6RATvCRjQKPZBJg",
  "key12": "3VM8JChp4usUfHojJ5YmeTVEahexV9MoiFoFDYv53GdhzdkXkNuyvYPK9UAerVjoBvsTkpVKPHAs8idQeecwK8ag",
  "key13": "5gvFnP3Gk3vnoydHXndHk9GqQM9eF9tRxG4Vz5WCayzgHdQyiaDh65Pw8L7SwUbYPfm2TCXhu4Z9LnearKoZfhc4",
  "key14": "5TtbbmhnY1M1m7LmmGJaUM1AeavR6PiNs1rmTTSk16vn35B9MjqkZ8AWtqQDvLBKSm9rswLVTCETr9GH81BvKVwp",
  "key15": "2vMGQy9inu1SPHiUaPARTNQTddv3UR41dAXK9NNUbCgGmeMKn5i4e2qFPY9abN9JktBQx5V6qenms6w4P8BSxJW6",
  "key16": "4wrzrcgeNwm7Lidi9AcVjsVMjbdopS9mBAVJDdSAgDDiPvp4ja7Mwk6RBdTQuhFat2HFCTZiQmKWaTTpW92rYtM2",
  "key17": "3A2CjpcE7KqwUMDebXVct8vzPxBqup5j5yLVX5s4pJ8TYRfRynSLkdDYc7pacUZKqSwEBedTQYJGQRk6oHUDfFrD",
  "key18": "66Qzh23DYPq9N8oZPvHgrDn24CMEPo9jpuPovyrNALmWniVdsC2GsQPHiPF64asegDb9GVntQN9hNcrEJnfV6Hnw",
  "key19": "4t38vRvteuQpddJW1KzipzNQxhc18yLRhQ8eqxDsy7KuoUzF3HCyEckk66GunJUm8kEkwMvRpBvw7QKGxZVS7TTE",
  "key20": "mBkf2dRsmHZ6PRimdKiNGNu1vjLz6ukLzuLa7PkyJ9XhVsFB97HrKqTjUH3CMjgnrx6kNtMrwFD2y7T6VxBgCLb",
  "key21": "4jWHHsSJMZCPtSxLxW5UMK7jqJAM8jKtw3VxDauR3TFi6mXSNDrwczdMom82cdHoXZ55Tz8XeRqEt2ux6XuCBKUR",
  "key22": "3qWGFtAnpXao44uqEyvcraD2itWCNEcVQ2THXP5bLfANTLhQ2ThxYJdSxLgfdBK45cacNF63eynupkMDkx1eQKuf",
  "key23": "64pqPghRxGRyuZiEFw9pGhWWFUW2K3ebs4sbDaqnZPEgD7sZLcGTAi5RZ2addnbk8iXPKzpiN6GDbNJAS2tkrgc9",
  "key24": "3YT2kU9YhNwkVSDGCDahpYUTb4TaMkdP8bPbvVZk6XAn3XoGZCK3SVQeE1NxFVs6BtQ95mbRCUUuZNyxmqDGjUTS"
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
