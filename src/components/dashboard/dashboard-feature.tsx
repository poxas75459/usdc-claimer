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
    "3z6xVnnLmbHVfNwKVaQACNav3Xe32fnzGECcs4ZZuB1E6nmbDrcfvLhXfq7x96wVEGFxBHgZuEkhRQqySQsZmLtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DH4Pri4PN1GpD8v298nkd5ygsmL2GaVMcbVu96cqwno5quFQ39WABVXcQSZrGcseRDwNgybFTYacne7eeTM7iuu",
  "key1": "3RfyJaEXMz5q9RR84nXznr4316CcuuKAWfDDmtwA9JyX6rjwXpkxUprhs7P4nGsYmBmk6bxt9M7RtMiH8wr98c7a",
  "key2": "2DtQwLXMYVomNu5peT39AP4KY9WDL44jZvr5ZZZxrpysd3QkWqrr58qiEEvctRjfwRVU4W3fRRgcCJRmkQLrpJJN",
  "key3": "5YVuyFA8VwcDLm9JuLyjhbWgUxHjNPjhkSRypjHUgXaHXF2LTHyB21mJUhGuThnELpYuLbuquBQ5H6ZJe92tBnwr",
  "key4": "59VeUvvgujCzT7JGE3Lax7r6XVbbmxVewVbZQzQHbcjTj2vtjYL2pmkxDeSAuSD6AQAk1FTYoohH3Tc5prjGAJTP",
  "key5": "35fzvFePZLit6B8o1TcoJgZygwUXSUFFZx9dYH7tnVimU5LVrGw2ScxamxTs2NhtsgT9P3WRuf2EPY1t9Js64jAE",
  "key6": "4wMHnA18sgouuHJTT5gGtMgTDhrvpsXV1EBNMMd4UKD9oj9eG6h5D2P4UarubRxDo7g9rC2ZBBd4Ab4yU42MPmsG",
  "key7": "3hRsTB1qFXEpz1AvA6uMHFF9UBrWr3fLoBhS6q88bFTUvVWWqQ1ztBeo9vWKAppum5SDtU8mgbUxG2mxaG1SZtma",
  "key8": "44dn5QDxrQ3GXc3QZqoCy6rkwBGDVukLmEnbtchBaQBNyZ7iEnqb9PM8V3KJvNpDYdyWMAJE6VFiiovK4rZdzmA9",
  "key9": "5VyMe5UbAo1h1hM894Pm2SV6GZXjeyWEJ2C8f16F3vWs8ebNTDZyTnjHP4kmUKoi5w6B7aVQHVTTeKSXp1SWroa6",
  "key10": "4xWWiwSWjoDj9wHiFTRJ3hHn5cs2SBifYB4zTCNiWUp5vW3ieqsfQZHDAjyRs59thGHc94wrjGDhXuzvhZmbf4Dg",
  "key11": "4rPjtCeRCPYsYG4hhwfZzSWS6USckRXCysMMNj9ez9NJgU4NPmqFLy3BKx26iKYMAZewbn536iy9yJkWXSuYSQYt",
  "key12": "4LwZCpUqtRnw9vvAP499nEkYjZjxtgzokdYi3CZ8Dg1Hi9xofLRyak3e1W6wPH9pBr1iyizVbG91h2pvoQ92oD9f",
  "key13": "3RCR7cywPLLLcd5Fh84aCFAg8RKa3G6bV9VFus15ZPHQWvQKuYKDACXMhMzkG6G1GZ8zb5zoVFGjZVCxm2UQsaNz",
  "key14": "4bkzhDkVUhxRZb2naxk7vLjz3GFxpKWhABEtbtF3hWbv5tvJsJ6iYAXE1ZwGnvdKvta2FZeCFdU4L7P6SKs6fKLB",
  "key15": "4b6F9kUBFA9c5jpkQeufKGZa5s5b5JbfC9xGWcNi5wHRsgsMxKyVnnCcA3H9ykhX8tfR5XD7wrS4pyNqfmQXTaho",
  "key16": "4cH6erdh5j4pLkN8iXPNJb9oDNtK5y4DvYjfGP94SQhZVGonhExinh38Xe9HDF8fLKz4tWxpMn9Na2v4nE2fdpFb",
  "key17": "2SV2Dkso32SWgZyNBbHruKLYKyhkXWZiWhLGArtAFzrvLYMBvUBHm6vDHx9rJ23xMMdG6vZX6BZpz548taah55ok",
  "key18": "2o3fMxXhZBZmUN5xAW2iufWHwqcgqD2SDsv6yKZfrNw4hAGT3X1mwLUajd7asLz3WvJ5gtqiRLsAXwDGgs9PmNSB",
  "key19": "VmciYUMMd7HBshp65jkUjPsQm1BohhrgRzafixKorLJozoRwg4ukduKf5qHsAsSyzRjSjpCZQA19ZAwSL4jYzAv",
  "key20": "3WnUh29EiKFTBjb5SVsM7r8rqrqFxjyx4JZuJp8Qizd2kz6dHk16cwkYv22qacwgi1DqtMweRSysbRoPoWcr2BC1",
  "key21": "2vxEyrAD8WZHCimrvbU8VpccUGEGhicwPgQsrtKFYHVyq1Zciyygb2WCw7ivE4HX1fEscxKHUUoNYX2cPvtPxGV8",
  "key22": "5e6t7YN3wQVGnNQNfgXpMbA8fu78yniD5UT6y1zqx5JNzPvYmiWpJ6zpVHmETJrmb5y5acBxNHvYfyZgHd8vcu8r",
  "key23": "4Dm2fsa43uNTijvaQMWfUDEY1QMgA2YLRqoR8jV9qHJL9msWufDSKBgrnd4Zz2RGWA6e5WaS6yT19f1vkAJ47rSi",
  "key24": "3SZ6nqBe9dcRscKuLNs37o45f95ur9R2USDnV1hywSo7McByJTVPTC172rGZ29uBhVLsrzMHbr3AkidFEUzYnKRg",
  "key25": "rKKEyQrjffW2hpRU3Jk4AA4dnJRmq4qsqNi1Tva25WmTyeJ3jCRVt5GdeMW4TjxNC6RgP2aMgAX8uvtFS7CpmBv",
  "key26": "FErMVE6XVRsgjmxzQ8JhZxepdTAGEXgCEm2neqvh9TDff5xvPHtvdzWRuod1zfQCEBCQxwTaeKtiwYo2Hyci814",
  "key27": "xZ8G6o9ve3PLfDtyADX5CF9MNR2S77Bpkg4B7VEPA9Xci6korD2vYXsvYNqNWsughyMwng12L32g3Z3gy2o13YH"
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
