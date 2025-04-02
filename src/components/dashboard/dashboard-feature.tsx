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
    "2W9QGXdVcmtUQcZ66QJs4nWWaJocWmkG69GmXuVMewiqSd3UPJEwPcD8Kxz97Hg4KG833XfiPVoAiRta83E35jmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aP4PTTuRXNQtwMP5wr1mZ5wxJVQ3uKNKCxQ7onbVXevEW4hDqkTjWZFQqYvEyuT622SdULvFWcS6tBPSLYvkFh",
  "key1": "DAFqncZBAng4UhF4wNWm8J1XEryxQScksQTs3s9xiTn7RRKoyiBTjvu4jTSneW3V9FMUxAbn1VhGspcjFk2UxP6",
  "key2": "5BagU6Xs7pDKtn9HuJDB29cQkgqh4vDMRt9hk2qx7WHoPhnATdRcgLdYor4WWt45gaSG2K271kBFjpB7YYDPTkig",
  "key3": "3qPacxCZrQ6Tmkuaoq4RhHA2nGvW6nFHBHffK3KNZ4Bb91Fnp9NZkSP8sPFF9BhREhKTxRjLJLC7FgYQtS877sQ6",
  "key4": "3DQhGDJFQktBQ9e2WnZxd2MwrCZ9RjctHkX1JkVS6h1Z4Med9YLKonZPd3yce7VDdatFYNVE62joZdjbJKSz8YKR",
  "key5": "528kT2pk18BWrPmjZMeQxGAtoGPczPesAVRFzA2vUrrXVTNfwGCSB9C66PbTp1vwz3UnRzPKcxvP4uJ5SWNyN4ab",
  "key6": "3WAwqbo1cZ7NYWwHwqZfxip1qsdzt4xEbhcHMqB3KksstBPGS1Cu8q2iV3NG3EMW2e1RVqV29EcNhiTmrKLe6XtL",
  "key7": "3kMb4H3QogsvLkTKCvBQ8xaFjmJC9mafUM67AuBZmnhjZshZmQespAXaNJUyieNmR5mahdEjEtUa9WTY64ZaEjSS",
  "key8": "31RJarmJiRVvUGVAJpKZ8JnTPXfypL1NHyCAvJBLd9KE3hhoubxndYCG9BW7VGpWnJmRpFcYPX95kVNNFa5HwPhJ",
  "key9": "4n9j4mwjvnHyPxLqWfF64g6c4Bejg5cAv7vRFb2EF7VD8xd9nYNrG1RtTeRaGo5vPJt967oj75vB9PgU1Vubeo2y",
  "key10": "2FxiJdpnfLqybbnqKQe23gAec7ZU3JMAQxftRjk1qj6pkDhVtsMa4hvuQWVcwHdwkHyehFMkjjg49ofjNiSnfM9F",
  "key11": "4BYPdKAPSyXyuYvWq1ETcGSoSELDq3UfLXZ4egoocZhJTPj6y9nvqz5tBUk5cQcWSS2qbpT3iQLb2EfLzn42HnVz",
  "key12": "3A1szqqbcTGa1yxLC93q8gxksQ449wcZUdr1nJLUr1qJsg4HMmBQsAtPnERC697w9FAvfLEiy8FwFosvQk5tF7Wm",
  "key13": "4sUv3Jp44gbDTgya731Ndwi8ZmVe6R9vv677rRHCRWnJPCksqPBTEbEoncgTmiNiroTEsrb528f1vGx5MV1pU3bM",
  "key14": "8vYMjunPWZAQdt7NUTubK4N5ZHkJG1taGZGApGisuSYvNUB7LWFzBq8tiwtPzSnWEQTo8QKqtcC9PWbmJoWdUmR",
  "key15": "325p952oXKHGBhNsJY5XYdGsNcDE5hdNcqh8xnN52rUciM4KU4Myoc4DrTymNss4ccy99w4sxpCJQ2LCVJdUgm2J",
  "key16": "2vtbT1bgPJvUVeSVmVgcLmc8tTu1W6vDmqd3GXhM3gHhqt35J1HDw91znGqmkrMiNWSkYFwn8hVtUWjf76ishMtk",
  "key17": "5MfRCZKhn34H2FMXvNz1cpYGa1nHgVrVbFbqALkFv7HJjMhQf63ewJnKR8teFtsYuXXi7P5wnG4W7BNGuoArPjce",
  "key18": "5nJW8zr87sbtiVb34Gs843QyUvLA9jcQM6hWDzpUQC9jH7GCqrQ79xhZwBa68UqQ2qWeCp6dQuaahb79h9GCHapd",
  "key19": "58RwXaGdQWAkqYaB78ErbiuMnLWNiaF4SCgmFJ9Q93hKxFvndc7KHDgKcCLRSDXyb1MiE4xJf19ejHKuFj9z2Gnd",
  "key20": "5rUYF6B88rsjigfKU85WMo9RwrqF91uH1nkUGyPq1Eu7cTZhrJ4KMsT5qB3wcSUW3ipiksUzEpi78S1rAS96jB53",
  "key21": "5Pbnho5sQYg37pJtQhKq211ivzzMifV1SxW8zQzGgnWRmGGv1NzNuHgD4G6gSosEC67JoqLgNfne7XyxgtBF7Lz1",
  "key22": "8b3mZCmJgfTAFSp9Pyj8s7K58YtcgnK8nMfvHAX96YimPEJBNzvwBxuEacL1cqwJqsy5zcycGWLj24ZbJekyM16",
  "key23": "5nuX6oRbWkCdc227xhQzcQZGQr7QicFeZvKU9aPwWL75WfLWx4q75XnSXyygtyJTXvDkpqjT5VeoP5GcgPnyvB9c",
  "key24": "2MxKzvSR98mFNJFqVj3e817f9dtdpNpgznzuw4qe7LpozMdf1oFCVCqZrDwJfodMKjRi9iCN73TgFJEJEG6jTXVA",
  "key25": "kyq98YHUjSpAtrcmwSemq321zJjoHfMrjEtXxw9B4YF86sPYL7RaV3UDT1bHFK4LuXaFr3iCFiLJDyTSNpt9F5j",
  "key26": "rrj1JVwU1C9cmou82mMLPeMHEP2ffdPnSwfabHeW2NpiHUdaQ6vdhkQNSxwA3y3LUwaDy7ihpDy5rgo2XWATkQv",
  "key27": "56oL84VobFn17pvmtaLdZ7j77ssV59MdxQS8dnum1AGnJGtfpDMKh7nGHeSAPAzbToGbTAz8mJRFFmbioPzE7YTr",
  "key28": "CZNK34ftVv7wYi1QYGrbiNG2YfL5PxmrEG8BLDN8AfVWcJY3bdKWNka3nkLiPmNBK8MyQWbZwxqPSnVcJf5oC62",
  "key29": "5cXnmTWErVu8NAvtnBW7goY1teW481SGukpJpq7oW2YpK6ufRLt9k7TXvwGh6NyCT4McicTcpt6SdXxC5tJRZmHr",
  "key30": "42jW4KjasLqGqqQugvwCa1sLyZpFPfTZbVE6seJX7cRGQ379NLusAdpaH6Hk2fGP7TXkY53CufJJLJ5PKmdkbdXg",
  "key31": "3Kh8EynfDXdgqTRfo4RZVU3HwHzLR26RzrrfwD9MQDJ37tgK7V1p6pbm5UMiZ6MgBArrGCT6hyWCRGdDyKjwn5WZ",
  "key32": "5j54tmAM5NsSaBhgUSr47MsKmUAVS9qVTrr82uswuVUzytuxUYGfa5mCVFPeVdHfLQ9viuto1GbQSmgXAJixnyx1",
  "key33": "4sLxvzK5L8VmPdNANeUnfhaNnF68bUSEEi4eAFX59EZHWuG7EPWN4w2cCF7M74aiQcQ6vMKKdjp1JDXGnb8asFnD",
  "key34": "3yAioaJevkbiTTj3CJqX3zxd2QGcv2AxPTxRURp31wX2PQx9U6nJccjo8TNnio9Yykgoygm2WL42PzNf1XqNrmfE"
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
