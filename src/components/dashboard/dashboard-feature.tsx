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
    "iJ8PvKgYF4w4E8EY8mZQoMrTjxxnZa7kb5LKyh6ukRxYfVJWZFFyCWkQZ9frYSqGzmP74mpsH63mpUJYGHx7XbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tKyXkPAyf3HmNsvqSbeHZTEhAozGadXF8ZirxiVuAZQKt7GKPfGtYwiVcD4eZ4i83zcf7RfxNrgM7nNXMGpqdd",
  "key1": "4heykDzi2UMxVWzudtZhwT5TVzqnq2YmAJYS6znHxkfHW9bVAkHKtvb2P7sgv3SqcuGr177UYquJ6JQo5YsLZn5L",
  "key2": "28SxCg48XngeNHp3jb18g6D5R9okTdgNZrL7vsgGXva9oKDzr2UnuAqNgeUwFUcfpxGQxV2Th5ZpxuV1dvi6ZVAL",
  "key3": "2fou33RiihD2JvmB2F6DqDbUn2EorQ2dgLisiZTZDgVcvTUG3vSc4scfERL4j5SpL51JzzRx2xwBZEUnhbWumBes",
  "key4": "5ZLANtpdscWAR5uCkh3VjkRhEx34E4Xo9farSp5yeHTbDPYdevrP5z6nKbszz4DMTsbDAD9hkGDabcGM1ykJRz4j",
  "key5": "4FSt8B3cYEdDaXw6bGHKzXeGkaPvyKATi2TwnqeZ2qwzFHKSfh1Cntqf7hFceXwrQ4sJ77DZ5fgmTcD9Peq5PwHS",
  "key6": "4Ecv9yQ6mmkSWeaa4ABJvDt2SWF7Riqo5DRUB6qWfGDQtR6P84ndK4fDonCurSfK2rKoQRhzpXaiHFCuFgirpiVQ",
  "key7": "4oR65nBYGTfAwfxc7NxBDa7uzK9aVzQn5bRpJVMbUkhGbmgeWcszNjohBoe59TTxP8h8L7XG6aCxU26tPfo9osp9",
  "key8": "4bdacVEn7LXU7o1SYpmBreMeQHkULHbZuZdmw28q9nHSyBdGxUgPVkbz93CApZw8YhLwNtBiiCDqKRX2LwHq1WEF",
  "key9": "27PXU5ExQZeww45WXy9SR1cJdYggMixLj8rx55DgPXWf98ePJinz9nkEV5n4MwSxzSZbbLmeMDzRnYB7TwYcX6Yj",
  "key10": "2iFSzCy2HddKqwXe8j3EjNZFYEPiSmGQtXQgKGu5bHz5he5AafRiPgssK5WypoyvXyAxcaRRB6xxRtgjVE8HFjFm",
  "key11": "4kKDjFEJgnk9bpo2FaNc7bXLKE2z9NCSLHaPZjG1VKgSt7pagueeyEfWsAY3wzXgZ4qbrCLg3qe3pNtjU2cXoC13",
  "key12": "5XFi9LuERWKkU4hUgiasTQMCZ7rrARo66zE8T4Dq6FxoeNmcNki4vehGjj2DHi4neFg83U3YsCoKAoStzNfes2hm",
  "key13": "4dyqDFNoJoF24NgsmQtCzoQtAsub9yt8LvUsRB4xyqVcANATmJCEGvhFMmFcvnAoK6EJiqXVtC1EEM9o6GkaP1JM",
  "key14": "5AX79U9aPNjbv7mzfrUwBuA7R8Nus3qzVDGPcBzUMU3ihDKvtFpgWQBc1rtQd4rmiELBNz9NeDgdserTjpHvRWGc",
  "key15": "2AUnvVUXLojfFy98jPSNgPUwSSzGFZ5Lig5zhRx2zM5M8JSEHdVSuHbEaRJTTfnR2E3gTyWmPXq6CdvPF2oxUGFf",
  "key16": "44dC9GfWUaaBDk5D78zVy34VJG7oEUmvsupRcTXJnnJWvc3MU8Fqt7KDSCu77hLuwX9AC5shUnoCZgpeGwer5RXh",
  "key17": "4M1UmoZFTBDtiFsL6FR8uQD2e619H6f8zHzj8gAiqyZov8rhcU6sJuSBuTfrbLggC7ESiih3AM3pjgf1S9GjYFnK",
  "key18": "2nS9iiS3gSy77XAh6YgC7bL667dKESE9oCkd91QVT7oRJNc24Sgvgdfjt6FziBG8v8gzjUdoXiCaVmDiK26nP4J1",
  "key19": "eQLhU7YJztWN7vnPZ4gQuCEjp2rQKYThrgeDLeRy7pGdQvchMcxBuTWT1pKJnWPu29qNtaMFD3bNVBJdqGfgeoq",
  "key20": "54C4QtZqbgff98oxH2oPffVTgoh4SMadg5SDpdS4x3hvK7pFozzEKrDvHvswsbTdesGHMvGPFB5JswYbizbyRyMM",
  "key21": "5E5QCSrs2SrtVa39oHFgnhpzqeoX9qJh7of6ScfR8FDA8CnyruXpQKmiXcSTZepQj8WGB92cpHuJyMBnS4kKnsm5",
  "key22": "2voya52y2i8NRYjnA9fz1SuBvFrQQVMgwuCQSrhHv2iUDFAmv3mfwNx7BUt4zQeGMYJ2veRqzzyerejN7v6PACgA",
  "key23": "m7iRDv4h7HKqsZcS25mWpEprsTxBLU6pzo6KAaLY2RFchaw9gjqzK9ofQdYhDRv42F62u7pXZS8ANYdcPdaMVqp",
  "key24": "2HLKc8eyuvXfaJowyxvNizNbboXFCqkeJ9AVsTfouF1yEp3hYwv84DkZ8oHp1ioR3tYH4gwxYPaBiZ3DTnW1REXU",
  "key25": "46qqYazeUoC4MHste3ghAKxHTkcVVuegkNgGoMsXbf5i2XpyGnHokNMFHhQBJBP62ZbEngs2Py5ZDBRmUpkqSxeF",
  "key26": "4twCiYHuQjMxqtQBv8opWMqe7VAHEnWqZ3hmGE8ZM9uLYnLy6BgTwiRoYkGzRPXogrDXKCUhpTgHPE4aNGQaRQio",
  "key27": "2i8jQw6Wcet6qUcLwtsnyUhEkUBbQEAofaAM4GBzF4jSBVE9srE8KcWLDrF9q1HiqvLb8KRkmZhYfi6ifaEwGPkK",
  "key28": "4WaBDEGbP7xUCFjunG2awVQFuSXC1YuiFfC4pPM2dshmzH83euZzNh15XMZJRFvCVEXjXPt3BvwLozBZZBX2mYpX",
  "key29": "2zNRSHKV4SQum6h2P2VabvHasKSz71B61eeYrmByu26jth56CiiuFLhmmqYrWi4trugRjGi3FJ5ayd1Pb4UrtUks",
  "key30": "NrcNejo16qZcGcYP2QfnTszC3nhkXLZQ5DvnJucanJSDC7WQ5kk16QV2x8Kmj7G39DM9zUUMrpGG8bZZvKtF4ds",
  "key31": "2SKNWtC21JKQppCZnG119cxgV8PdVuUw1wifDUJveaVrjQdsf5XdefXxM2kZpCEPRSNLdnvtX3Thhe1TGigqwZhc"
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
