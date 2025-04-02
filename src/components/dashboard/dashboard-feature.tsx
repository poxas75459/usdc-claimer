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
    "2wvaL1sS5gNZFCDYUA2Q3ids3mLBMp8NpS5ibrAouJMwvcrk7VyAz9ohmBaJVDXxNqDDKueos6m7oPi8NPR3Fxkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAeXvghJu7ipebEodzKAKiWGkUKEVEKEKrUhLtg3fHqEVVcVzHfpUsZfYxSHUQ9F9P5cnnY9L7Zn4BAopBzTXSP",
  "key1": "Cv838Sk87dWPwQ2b8PDYpjhD5EGAZ4cziuUCmnWPvn6DE8rhJ4qq4mqN1nbqTuwZk3QWCP3W6dukWTPaKmweMWR",
  "key2": "4v1jKYbnae39ZXhCZ1qT5eHecdxn9PGMGJ3EQRUqAkm22PtKoyZkdv8uDLX71dS6Pi3Rx3v7MkzRCPwRsiLjxc2J",
  "key3": "5KMrJHB2xn3KRVKfGABNXFsyjdnSNxN1bfvuXFTHr9qteRAqpLEpaNtvMC1BrwS1ZwMkFh7Xr1ePeGpGcWHon11r",
  "key4": "3pHvfDAVUELLnaf5uunSgpBB816gQTnYWV6PusV9y2CChrbDP2KchipSAKv2orjbUNJ5upUfrfe6xSWF2YBYfFc7",
  "key5": "n3XGjdxEQee1ppDoPvXxjh4zzBp8ErccCpCD3iWDwFcWRVF8xJTiWA7YaHtM8Qykps78LHCrGRvUpQfucLN2sHi",
  "key6": "4a7T8W6bLogsfnfnTWzUzx9rQAB8w36AhyYBYkN3avoKuBVsPN1BeZk5vzHvs8FF1aKFV2Ddtwmiy44zRzdxFvgv",
  "key7": "iMhqM4ivhmNMAgwCUu9XGsDz8bbq2SVrHiC4Q3bSU2QfcDvpRwZ8EpKgPJi4k7qT168d51hEQPpj2iMzamSTuag",
  "key8": "4qWZ4Su19xxfpFdBgQ4Rn8Z1z2zPmTU66BLeqHP9tCzNcaFLRkJuYgBEBB6zjRycZfVLxhN3LY4mbeYdTCnv1iur",
  "key9": "33UVAY9StJHpNStwMgos15ckHnqGqguiixakKkaMSyGLkb6EWj5UDE6tg5rr2fbdAfghAkf5iZW4dg1g3vKoaMQN",
  "key10": "21C6dbwjCWDkRcNHpGbwnuGyoW5cj5VPZNcUu8BEFV1LTGLnZSSV9zLyENRMceYxauUF7efU9jvB9JGw5gVqP9Rt",
  "key11": "2wmAy9jfqsci92vFe8cfVsmLQZQqCmLee3jbwVw4WNR4wRVAnBKo83Sr5VawitXT9CEWdm2N372v8KFxU4tnJjiR",
  "key12": "44myy8nuTMGwHemThJfQ7HRGaFvUXAUDJ8aijqgW4n8oDjM34nBtpT8eaxbKcn7kGGMgvrhBqxtpx4527JvZ2rHd",
  "key13": "43uffYZJa5KBSJY1Jxs1eoePq3gg4a4UTpH6VA117iESwKfvh83X5pZZeiLt1K2WF7z8N3DKz3bcZtLyYA8ZA3ua",
  "key14": "2dBF95D5Q1scNtJ74QKxUrYRaGceJ8hhVj1WhLAYoVrumDtqrxyEwrZ7GmWRh2AkZC8NHVo7yb3zPJvan4fKajtA",
  "key15": "nnyHzcADG9AXGVnhpzByjcEXLtQ8ssZMCJGAsK9ujRwW8yE5iAoPWgSaPa77c7LtHre1EzvWNCvzSA3sQcAs3ax",
  "key16": "5D7X2T3BUP4xcSZSeFukYJYgbzmNzNDXWJ4wamyhyK7zZs1oA8tYKgGRSf1FVkMm18jCfkrq7Duwm785UfDmY2Y1",
  "key17": "52FuQCBrwXFk7QXUmTEEvpEuKTfcnS1sUsjJjzUB1ACsJR6n2ZukGrnHLg2A2wiW7q6Q9rGnEbJwXi7DeHvJgAyR",
  "key18": "4vGErx7sLGPU4K3j1qr4r3k1AgrdS9fL2fCDcjyA4ZojjYxwzgi57sGoz8toyyq6TDxhYqVUWzVGPenTC3wdvEti",
  "key19": "2dcdUHqS3Z5y6dN2ogWpKejJDpMjQN5PFBGsM5PS5ke2dBRAWfVZRRjeLxGa3Z7cCS3dpqW2zbgKizVF49v2THgR",
  "key20": "2nRXTHAE8uJebxDbAAAUgNoWksuYUquWbopxQAs6iGMsVPpkPpdpM7WZkLf2mQCwyy9bFZa9vJinCaTnN3hagyZC",
  "key21": "RAZHuMywCteMiGenXuY8gveSgvpb1eNsuqXdGLgVHfj7qvmMA4hZwf8PjJXzbcngX9AxS3Nt2Z3ztG2b8ZGdTT8",
  "key22": "5Gvz96vEXNzzMGhvFtLaQfw185bmVVg6xSwVSQs5u9J6cZvRhgf8ynF2NofbdXPaL4FbaK6kSsgqBaSSpWSkqLZA",
  "key23": "fov5PgkXi2wWTwnoejfcq5gUqY7jFF6fWw2NqxyoXp3RwbFF7WHG681bvDDvf6mJjSpi6ehFfWgM4uJX6yPEzJA",
  "key24": "3V9xCVXW7ECDjspRiU5wEuuAw8WkJHoXqFYVYQ7wdbkASfazqsS7W7jPWDWVBRNaEhTr79NZ1UzH76vYsknJMRH6"
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
