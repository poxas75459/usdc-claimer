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
    "4QD2jNo2FpkdwU59fAVSuduCM838371up7tBV28mCJVQnXDMS6eHBjdUvahgLMLV3KnTxjUyiQSMtUKDapRKStdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ZhqqqYMQ5DHpt25rPF1vm9nzBqD9taeCnaRkFfuSxqMvTLMdztL62iX8S8Dsq3fwCdE6uYxfknvtoz3D2csYZ",
  "key1": "aoACUy7eaVotwyS3jL6Mi1S59UmnoRxmm5BWLDWuzkWTYKchh6eypKoaqWDw99MzxbmXc84dvbKhPwHL1zvo43Z",
  "key2": "4mbaWY6Gk2YUkYRu8EbctaueQNasEuwxR3y722g1spFCviim4phx4x8DSirS4UpGYtDnunvFJbrvcjn7YULDa1a2",
  "key3": "XB4tiEBUa5nUXnrnrjEnaB3LaKoHHXzcPD4drk4QkBgPHJ2AQEYHv2xmVdFEGvJ8UEJWacUMZ7axS8ZKsQPo6EF",
  "key4": "522cWX9Gcsff4zGXg7z9EYujWLcRyrUFnYc1D71zMg47ANizfYLVNqEpMFsAj5s4pUMFKkznUEg4Q9EgBnsgPtZ6",
  "key5": "fMiJcBB6wejgK1YYgZXHtaHfmoumN7h9uAqVTTUT88iKNmfM2mwp3GpE8wWauAJ9VfCCM3Z5Gpz9YuLhU1wTNNj",
  "key6": "3AXJAGiYpK2ShJCsZ16fKHQzSf1Ta5z9pznRouw8hJpNe6WGnxbDnUoLKMadPx2qfWbfFwxq1g1G2v4omQGDDNi4",
  "key7": "65HsBhgkqYzwV8kaRabRVifnSh3VCqL5DwN76tftdnWhuhG17qqAhtNor2QgidbXNNRG3mfLDDWwVy9DmRo2MWDT",
  "key8": "2rZe8DCM1Mm1yy6TBw7GimuKp61qWT4FD5Pt4N9ArELsEzmcmHhxh3rPhK6vgww5zuFEXzPzvWN1uhGV47pmo2GE",
  "key9": "7kTjjHJvXRVhc9ShQrSTRQiz8i4436hrZJNk1qx9tSLKgvBxhqs6yxGmqwdxTyDGyS43J8cn5YDu1v5ENXdE692",
  "key10": "3xT1B2ATRoh6JCDByACfygKDQGwvwtKBDjU5ptSYs7K2Zg18uym8imfkG1jxwAT5ubqqP8jUiao8DzEf9275uUWy",
  "key11": "4mhzdxqiqbWjtPvrgCgUPnKrJF98ZsUUxHyvp2YpffgE2b6WR8hLa5tJpApejstysB2dTnjySPgWjjNeWFzNBaUY",
  "key12": "3e6Fpa39h4Dap2RaosqtfbtsmFqdJDHRfN9s7iurK11xxjw3grRWMissE3iCVemhh1m15PiVNRQCjgA2TP1t2NUs",
  "key13": "51gY4fVnHD1YzwB4M8dMjNr3cZJmZZNwQsfEn4FgbDJzbYPDxA9miDAi9YkmjSLPnsTJEhkwDHAi6rVCC96YQMG6",
  "key14": "56cANqS8mVAchfgnEtykvy31XbnAzVd73RmoK9R22HfCbRcbsd42S2KPwaDJHpehf38gGvxDWLXdhAxWuZEFhKJ3",
  "key15": "3129vejpUp1mofJwHfsnn3JER7ppnCiFLExdz8yrfcJi6dCB2juCU5MyF8XdnaPRrRgCd1PpofryqYmDZnKK6mHG",
  "key16": "2fQtLak81A6esMcFoXsmLkTxCdadCm1m2ii9HSWRjcieQtWdw6zi6KGfo6gsPD9ZjVEGVZhqejzDcuGEv3aCgY5g",
  "key17": "3ZW5b4GEF7xkbWka17YjGb6poUGQo5oesdJw3qRLJrPnkYTZ49scPcYQMVKHYxeBsdHkqJoRWvWpMqfUXk2bUeGf",
  "key18": "47RCrgFFdbSg6BjFdNjY8CkeBMpgEr1vz6HnNnWq3BzRUN7Hi9ZRpKoGomxGsGMijS8F6RYEM6yHHud7ePWNwJof",
  "key19": "f7gMtK9qdbDC4SEs5aaAwyrD7T65Dw2aB517DeEcps7ryJvyJLKTMN4MvynbLKaMvk8Q2FKaxyPCTwbLA9DhEbd",
  "key20": "5djnPsQb2YHcj2trXtsr2ud1NMZw8NATEsYaWSDoFLYVbk66oVcjKW9xmDsbY6k4gfRFERWiJKH3ei58wZ96aTvZ",
  "key21": "wawKeocVZnYhxVUdt7U1usFtT6eyEhxFiTsX87V3CZY2KrybquzNWuwsgzU1EQ1DAiRe4x6wHyZEh6JyL77Tifu",
  "key22": "3TjyKGDbik82BjL6jWmAamoVS36XrRj694GCMuCxh4stCWzXVWoy3RUsGxaKZycP8Xtgx9V3DqDbeCoaoFBjxiSb",
  "key23": "3k6NoyyB1f3e7rnStR4BCdtQhkvU5ebHsYHKdJ5RvA6TTQpmiEUwvuj3N9jFoFQWe9kKx8ekspLYNTDrLzqkZNMq",
  "key24": "4v5fj4PMuoqoQDdbRVYDhgqabZXEZ2EKfyeiET9MPWdL9jAKxeC5BN6wmTBQNG1TzocrJbT5KVtMqMPVcVkND7t6"
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
