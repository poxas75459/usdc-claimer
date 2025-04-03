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
    "4CUn3fRpD6yh6q2wRCHiyJpvqd3acCq3i9UQeo8QygGKmiux8cTDgrX4bxWH27zvK2zt1PELgTuKAPpMDEKDT8tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wxWvZJw1SSWXhfghS4zqGbvD6YgvGHMv8PGpC6EiHXqJ2yu72mQxvGqhe6GY4nnjtdvwm8fU1fgM3VsA4Aj1SM",
  "key1": "5iRwxWiDu5kvE71bQ76CtC7BZoUWJcWHrQVy3e91xtSp85ksThCj5vNjRdXnvu9ew9GBEJtkkMWimu4rCPftqY62",
  "key2": "9h3YBZSgjrFNXabFMEwzY2KYHqcGnjrrti2ijRRc7TDEpMXfCUpGAH9gfwdkdtE6F6ttFHhoui6DixjaPEoVpYF",
  "key3": "kqofhYm84gGiNSFKyYxQo3qQ5JuVwKZFQXQ3rUBspbbfdD9bgKvXsejdChCRTuvAPjELVHjbAnsc3nro8A26Cxv",
  "key4": "3DtStYHSnumuxHR5bHHLRdfACRXDVDPqmENihNdXPe3EJc1WuDEqvspdGKQX8YNqxG4K2G8Nq1mUZYFbTog6zsbz",
  "key5": "678Ft2Px47vcYMLnN8JKdnWYKiR22QxEwP23gVuVW3i1wBwG9HG98NEb85rXse7VDraR3FSdiXxrmG3VQHo8E2E6",
  "key6": "58s7m9RDtpi7w9HRq1BJvGz3ti7UgzsJznvNm3ircxUHcSh2bkDohRx15FTZo7FQPPTPDBGnkuqCiRi1UfBCMppU",
  "key7": "3ibYJS2kWcYnDgwuTenC1zbc6Suy39Rv77apwh8tj2s2fYLkwKgDUtYwGfwXGCbk7rYEcSz6T3SCcD6Av2SSKXG6",
  "key8": "2gFe1tMCJAX2nNH6MCFVoQB24bkivdMMveHcSgranrMXuFwN138WEjouBeWvoDk5U23N2pNEPVbZQ7ojuKxfP3eq",
  "key9": "2S7fTXPEBoswj3waYcSKR1pi7bg7usaeiiJB1nZ2j6wphemZEyAEaYp3carMo9N7E8jVPArQfDYCNNvc1RNZEsDW",
  "key10": "4fcjVv9HrVYyUYxTYBKWAMAdd3qP9pr9KPMLfxXFCwAKTBBzoeGNMbMTexHsnFaS4QKasxrzxSM9U6SdQv6HNkqc",
  "key11": "3kur6BJz2AuZFHbAi2daNzPtTEGiYsgGiUEQ7aCDXDv1GpnAXTXUv8ETWXgPLPnyiRh3zuWZVz7ZMps1yjMAyehW",
  "key12": "3nS3dzCAxvJGjotGzMFy22jRSbwz5KtKBgqbs3efnU96QNqx5UWj8otj2ibsrLAbUfpt7XFxeer5RRc6Erp21rQk",
  "key13": "4FS9nMXzmk3koBZUqtCXgonD1FhWviTCV2bLr3mTqfmCmyyAjPZCiY11Fz1Zx9dpWgsxZqdk9jwKm7ahd1yPEVfu",
  "key14": "4WCcZaf9zxqdmPWVvP8wWn6ocnpJ9sHmGJASJv3FSXHveuGZR8TSggczV4onSe9edAJkv8v3T3dUi8aMvyN1GGQQ",
  "key15": "3zdouq3pEPgDaLp3odUfQ9LjGvzdxtyCNijQy8owv7By5q2Y5iui9EXwQQHPJCR4EK4g8iaqNGNjTZFHCAHtiB2h",
  "key16": "e5C8xaCCCvsJm7VetFUGsgvSopUcvu3BpLy2ZuodKR4XE4h9EUxq6y9wmPiLsu8EP1a9DXVqsNKqDxUnJeUyAVK",
  "key17": "5xmwQv77rQXwnKAtmNmLMiZa8oGzGyq9Gd2L66uT2BDVydQukWhXLVwMFk58KV73fb5RA13LtQdLuz1wyxpu7ZJW",
  "key18": "3vrTDUAS2vqfMnVpGQFPmeVh648AgCzxXavYsbkJdEjt6hrJe8M9mkZ9UaXdQGQQNtdvHBWMs7noo4ZcdF2ExKH1",
  "key19": "huqdraWgKbVa8SqgJVhGJ6BhZ4RzKbmomRP3SjC3AB6PAs3rUi2Yhha5apXUZKa2bnZryZkAmdaaaT9AzPARurC",
  "key20": "2423CBBQSWUXkDqAZCx3BAdnm37Gv5BRKFYghuHnFM2AMvHTC1mFajsWPRf32LLJFbY1YPa21Ynpa3kWE9Qmgzoq",
  "key21": "3t6L1dk8aP4mffUeCgRBDCKkBBGcyQEGLUFiTXSG37Z453D5yEHQv1V7gkg4WZA7XGpG4TengaeojYyHUY7VKzB9",
  "key22": "29o8wF5FLzXhQZNSX4KJWiqGJhd62xcqa2bjy9VGxXEzVUa5of76mXytqVnFu19TdQ1biqEAUJyAAEgLGQMmLs8G",
  "key23": "2m1yXNrXD28pnZa7UMgUHiJXNZGuRFFNMLpkpPZcaFecrq8i1mxKR9SssmJRwqoig48QAWDG1U2RkCJ7aYxLaJfz",
  "key24": "61Hg2kWcJkgsD7ThG6AGZwxN4eVwJ6w46Fg465bq98RqKMUSkupWXGTkPaTbVdzYuF4gKvaK6NUqTVPD5KGo3Pnt",
  "key25": "5wsuCiXvnd9yehPQhHuJWK5cvJwZW5VJ9719bdnuS85wGtW6CjZ24rhJqGwQ2U6fcjzEcYLE7dKJEzfLr5JwbkBc",
  "key26": "3bBwGD49kyPrWbsqPvfWpxCnmXWyiw2nxs6rmgDMSXbLvH6Sgi1K375R5DmjsRRzhhVZ7V3G1MQVR7ZjJCycRbfB"
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
