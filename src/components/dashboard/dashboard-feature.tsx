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
    "3icczzatpzomcwXkWVCbTGEhfbpsjtPktwMUo6ayATstiz4p267mUQx7D8oq4y22BjhCXowAy6EV5zyuvQauxp36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAFmXQUtZuMcKRWNNuaRfHxpTJ1yy1wDB8kVk9BGjSWyg9z1ZnhiVtJovxossnkRwuCemwnG6R2qjny4q51smSF",
  "key1": "fFtpBn6NsjB2GrGMTq2TtktFeisUue1R8Lukw72ixFg3ESjcpizV3fnEy7osLDj4GY5KLoQQbV39miJMpNGxAxk",
  "key2": "4RUH6dRGKfyw91ZWJLkw3CcBBmhGd3srDPdBFD8w38XZn6ebkta7xuqyHjZcMHMJy5xwQhrm4oCdx2JQAMKYMCQC",
  "key3": "hGpAFQ6SiDVenKFeZUCdrBzBvxaXCidctedgpnehfzPt7qxAJ3afQDcYQ8nsXfAoXUUiqGFdiLkLnaLUYAEVXSM",
  "key4": "3LYr5wDV4oc1QpZyBW7MQQMyKfoYn1XHo1Fo5YwZAe5UxSk8CsGDh8j1WqjoudYbpxjvigQ4i56qms7nGLxepXLP",
  "key5": "5WmPMYBV2vyJ2EbkP1SePCEHjhygR1afgLwGmsS83mF2forwr37ZCjuYSMjjSK6ncuLJcc4MGV7uPoB7phTJFsUm",
  "key6": "2enJ4wqoUomTzDPirrTeZTK1KHreoMMkspo8YmVVw1wWUwEPdBKnXN5P2vkQsWqQ26vUn3fQUdi9HAQkWaGrk8Pp",
  "key7": "ms9bNhm2a8JcHEsvvMxP3eG9RmEnqVZTiasDdga12vor3Cu2wAcze1SoR4u2T6aU3mGHiGShSQt97N1e3ntaUuw",
  "key8": "4HtErzU6Ka2SsRm4dj6vC6dqEdxna2KdqYTX6aXp7reWxtAB5inZMDd8fZzWrBgkdGhGoPBEnmnB8N2nX5t2yU3s",
  "key9": "2khgn7BqC1TF7ZSp2oH9vN2K1AR3L9jJUi86ciVs2pBLLKPkPeEeaSrfCfYh9Z3abzzpeYRuVHSAwkzpPheJACEs",
  "key10": "4xr1AzoAESadHJefAMQQRKaPTBCqc89JuEgPf9yKnKgr82N41qHPVm8VWmRyQrnEsN9CbwZR8UjtnmpzSB1hX49T",
  "key11": "37nDxH8eWBuRfxwLjDq8rzdmBRaq9EzG3kU3b12JLjpgHxbUa21EEs6Zfc7D54E9EHrLzCY3CDuZ5FJnP5PUA4uZ",
  "key12": "59dFtuAuB9BFutHu7KzDAsZAvhTxGnG5wMbr5EaZi5nFzvDB9MENrBTaeh9Q43EQeW2fuG1wsQoVWZ66zrtRpXQJ",
  "key13": "216dq5uJ4Tv8zHrXRmjq6u6wUhAzGyfaQxrCGs3tLvWRA7rFC5h3nx4ks4XDqFJLg1LHpn5B1FdPh62xXZzXPeux",
  "key14": "4huNzaWFzcsTQvWi4BKtGN5tAyXFTerxbsXTqPmLkrafWcW9GxFsF9aPzXcnC6LafSB4QHakQsLJiCPhyaZwXNbS",
  "key15": "2oD3Feu1Tqqv7wQMsHYSioboPFZWf7qBjufgem1xGfdgQTENPxzRAJ2UStKCUF8HPzWLv1Z2o5m35LkMWvcLB7MZ",
  "key16": "LbVVaeLFX4UvMzmk3PqrJySwVGGeAixRfAWZHR5uQYe1AjAV1t4GJu3TM5rrXsjHozvLzzaBLxiknwMPkiWgKUq",
  "key17": "3JKWQc8YDPKgF4GXKaGaKuLXsNyghMbRQaxAo7s4vvQLzqG5HZdKvqVwSVHfuQUv2J5hjQsXS8EifA1ByVXybgM5",
  "key18": "2YS43cQdYW23e1noQCnFySHmHKRZbx7sND2ddGAfTjUi8fyqyAeJ2XEfSP7BWNj1iCDz2EknXe57qHMpjUe8VQKT",
  "key19": "TD7Tm8H6Mhim3hf5KVc9KbYn7mfD5eyGwmhNtUmF6VjQJrK2YcWQHwdYFkCqhfL4QzngUXzaw6ire2veVg5PiaD",
  "key20": "4Hu1RysQnPzN9GH3ktt58LhVrsoqkF8mjL2Qf8f1KE91h26sjcFisTsz1BJQPKR4nTGPANKGWmiN2yzsseo7fLh6",
  "key21": "2X36tBTxSjG7aD9yjkwjpdqzzfQxoqUBianrGvdC7SjkedXuntpxsS8XtsetuNEVqTBirtiS1SFsmc6VLqxFrk85",
  "key22": "4dCSckJWhy84LMQvzbY4QP1kk93G1fBswu6Ecy6J3JFyNJPze4tqT3XwHfcYLYg6GpB5GULxBmCnWFFwqpV1XHoo",
  "key23": "3FgTbGbNtJdWF3Let2BJv2soGgHLH333u6wmUoKjGWE8ScpJYDb6o3JWNBXnNrZvCJidxxBcNDZqbVznn6wEjGis",
  "key24": "4UAHbEyM2rBeSxX6keJSJ8zM6vaJVa9qJ86HG9SemncYQ3cvtGyzWtfa3sM3Gv1bPAHRbbpDsx95kNiseX6VwXgv",
  "key25": "sRGzhowTuTBAjoGhCZzoUSxaiwJwgztrHDiWavJeER3uyZQEKut5X4uTzJHfCdVVATDehuCDHbg4Wgc1PPg7dUP",
  "key26": "4DEYQLEApxG7rgrSWVhJW8dGRc65JbaXnPcfoUer9z6MYbSA7zwA5mb8h1cSXZU1GXGvCpn1ezVxwWTxfRWSm3Wo",
  "key27": "2zn8Fqw8qwynNJppuT5syRsjqPbz9HiK9aSkxQtZe9upoNr9fVXoZBVQW7vx7W8UCJLkyvCAmcrCC4Pj8mRwmz7M",
  "key28": "2H3XkBP9Gh31pyc4vnyEQ6J7SBHzEz8kXuBatK12xmeTYkdwmVb1NrjXdRvJkqP2NZMfGvALrZ8c9Mtwtu8233D",
  "key29": "5q18wafy7P4GQpSCwoVnSPxSBstLwYSd2qSqW3cUEiKowzd4Uw5WK8pEFZQLi1h295obgMMGeGiRkgJKBk21GMaf",
  "key30": "4ktK8D7HHP2SrkQfh3tKAzkAmZdisMsLoLZxPNy5YeD8ZFiBDi5yKCXEfxSuQdVxyuDEnmWu9oyvDrjAbMQAEpvW",
  "key31": "KBFzSA4Pt6R8KKLy9c7E6oFd2AKQ9qMKQumuA4UiLs78JjsDrJtqQfxHjrQfKaKrVAr7y18zsdhbCCgLPTWTXdh"
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
