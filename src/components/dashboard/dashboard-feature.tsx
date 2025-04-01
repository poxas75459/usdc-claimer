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
    "5WFhLu7tS3TZCR1FSEndhMNuZt2HyciP9SbXCu1LFLg5a1nioZp2eiedzfpys3zMUKWjbpuQvBaxyMGGxHTp18Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3TE3N6E82NnvKeNERYL888MppWG7pFrdnCgpvJ4wHLaRoMdXGdo7oHkDj3onPPmfS6xboNGhiQHEtGDvLaeNaP",
  "key1": "5kCsEavRUTR9MMR8hw6deYZpxa5eL6yXHp5jHWoiWDmgX7RtP9opBuL8FEewso4Dyg9Wmcj72bUwMPstb9mzYvtc",
  "key2": "47uC9Lu1qjSpueJzYydd8S4AdxhjY7LtFnYE8FeF4fLXF7owHLHnY2AJz5hgxtMzML4mwSDTidBVWY7G1irLCiV3",
  "key3": "39x21UobVbhJkrs6fUxf2r7LT1fDEUeF4zFrHiR6evvJa3rTUytpQYk7jHSWRz5zW1ddQFzCTyS1Z8i2mLpQ6GMk",
  "key4": "7PSWVRvtK4xisG1nsxFUqnHZEBDQW3SgpUahVGvPZTFtVeBoiExxJDfmc8TbxQZ7xEDA5TahD7yEXUgZNqdcyAb",
  "key5": "3NqMTNtWwgsDBcQbSiXgpEGyQotrrAofG7BXJLXREjkfr8KZjnxT9ERX532jP9UbZ87uYfAzvpWLVwQE7LzvJ84n",
  "key6": "2QqfJHCc8dxVJoGsJvsPSYJHhv86zazQm7oTKLkAuqPxsAjqQBG2JpLZN3tYcJjRakLCdCshGa4LDZvD29SJja8G",
  "key7": "3jEovQiPYn98Y9jiJL7mR3PZFmNzgYTWWKGAbnWgKKDpjiSD8UxXVviSrwgzLexP9EjHsGpZippcV5KgER9Un9mj",
  "key8": "suqL4nRdTT6vvocxKUcvwemjWcKTCB6xjr6YmnW4Q1gKm54WAzAzQ3RWFgrQaJaTUK9sgcVYY55ryhuxwdAqsZh",
  "key9": "3VTiZzkvwjw69QYfcyxnp2USM8RtkREvM5vCgn4rLGpLjEHbdnY5xUY7w56NVPJKnPufEPnibF9uqM36CU4VWBTc",
  "key10": "5jde61Mtqva2nkF4rErnVYp7yu3G7jE4mb7Cu5JA6QEpyyrFZqN7z1VPRdi2aCsrMR6wvBYn4DuHFuEcuZa5DCDd",
  "key11": "24LAFN7LCzwcS4as8C9tD8MYQ1nPGVmMZBkqdS55N3Uxkk92WBae1Go2f32CMhv8wKfsFFfnUcCVn5H8uq6qHHVN",
  "key12": "65wdzWnhbKU84TxiYbfC5bb4k1FHWm8UufmfGX5ok4NonUFGsZCTNRbU88HTctNynF9S5jnjq7CDtNXkbfx9DcqB",
  "key13": "2QsmZ6NVw5CSYS2Mq4iELeU9qV9Y3bKgWNCAfqPq4spA46qYpRHhVTSPP3x4w3LBVqefKNy1Lngo7okLxzUkXWRi",
  "key14": "3mujWZUNBmx4fDcG4EoEiCfXZTYNdZ7hqts3wunGC8UCXfSouxQz9Zei5W1ZGMHaTcN16tbGnFBAuh4Z6pfj1pJn",
  "key15": "j8rzemrqNaPstPcPycRF2YUg9FrPVTmTez3ACJuyFEXVzX1UQU19HmZbv4sJpmDSKTUKbhRpXm7XqbbyJhhiZqC",
  "key16": "21obgLPpuuKR2qZsPApuygr2sQo2JBA5U2azXcb9A3SgMCZFBHvqXGb5AYK6QV6ugps97fY9Qwj3ojbARmmNGDB9",
  "key17": "4pcWL1WnbFxYW5Dmdvaj1hXuVN6McwDKvp12SqSyPYa5FZVjwW8t2fgs75AuVbQjoXMipECPdGWUfNoWxF3bHesF",
  "key18": "31zkgEbzqs1xCEJFbsTJvEHU8Zw4ZmyK2UJL5812tvZ8qQzy3GvGsyxxq6M5jDDhUzCGPaGS2wWTZrsM7oHsEnnr",
  "key19": "3tYKQ2zCuBqm3JAYNtKjbvHr1SYrPfJGVG1fccKK59xCDGX3PiNddegps7gcfwZkKWHugh35ES2Cmvz3hYM2Y6kD",
  "key20": "2muheTsFJDRPLUWBs5jX3sX8kRCcU1KBr4kn6xUSmPNRGdVUV8qF9HCHrBRPnzBtRnbFQG4WQxG5a8TPttYSqcwL",
  "key21": "oBRVCLKFrL3jQHkAnw5LQxKaDj6ZZXycWHS1pJ58rJ7auWUw5rQE1wx3D5grgC7nqYqYmZNgcpS7FhhLmhdfoNT",
  "key22": "3rcoMT2SyK33MhPy6pqptLkVwudMLejDd3rs2BmWBeC4hmAAhMKmNxFiHN3D7TRutnWfXpkwbX9nuXDa4R4c1xWc",
  "key23": "5LevZUXsSz5JPi6joAp4HRG5PxLUMgA1sXPXFBbsFR2BX8sLfAkCPcoBGbqzAvMwNT7xodnxk9G6FgdGDLsWkdD6",
  "key24": "58uW952E9doYgyZfB25weZ1ZVv1BHvz9jgLCcDZowid4G75U1FhtfYihFRqgj1H2Fe2D22cG7tEUchNiApYr7cfa",
  "key25": "4Vfja9oJXPuFemh6nnpHLEq2a8hpkBqj8PYYk5XbXhyy5zq3hZYmJpauMWG4Vm7512y7JRra5CtcjgpeTHbuaZRo",
  "key26": "5UnnGpXJeuivLGZsQ5kT2UnT8E7S17GXDsuZNUkFsvFkq2Q3C2gdVznjppjRVSPUYYE3n4Tttn74PFCnVggFJrr2",
  "key27": "3REBpoK7xL4youqPM5zmu9tigst7LLjB5VEvjzVkzFiwf8Vf2JupbHxpCF11Si6wskrpLWjkzBTVwXQW7iPPejFy",
  "key28": "2tGwdUN3sz1Y2Lw92pv11b1B2Qf5viGqNFFeziHGUmvtjDnWEt9aqHMvFU69a5N33zXrJVZ6zvYAhQMRFZLzb2eW"
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
