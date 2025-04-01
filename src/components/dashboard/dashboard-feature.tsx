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
    "4MPmDgSF9dxfv9iJHYN9HQHoYzuirqK6rQ5dAJqENqNTrJwWieYzCMYBkTacWTTsVWenApLjehku2SgoNzQEdz2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTokEwsRYhtHMEsbaJk7i8tQV2Enq79SEzmq6uPDDoi43bXVKeJvbv55fBVW7gMNHLcg77ZF9EooQX9y3Pndjfw",
  "key1": "5v4aNdYpBKGRU2zSCLiUYxmNBGWP6hZkRHQzaxmbYBMyyFVMKoeYSQQEDL913AZjDEXv4E6QjGxR5gXit9z2cF62",
  "key2": "5HGUUxPyWxBBhhHvKyss5bWXH5E4RmpXws8jvbSyeWwmjLD2QS6GNsX6tT48CpMw3rLWaFs3smQJ9BRieepv8PfA",
  "key3": "9fjwuJaLisju15T8sQgYzdd75DxBCnSSh3EvbK8PKBdzqwatCrFHBnfZsn1vdPWhDywziJTJST17mmWML5ipnbg",
  "key4": "3DfYusMYWpP4RkxoFqGgz39TioG5zVsLK5YQg6W2hQPEevrjV7acThsDCB3JYGiNmaM6c7wN42we4GFbdbdYFSnJ",
  "key5": "D2LLJmn7Wii1jjaXdigaYi1Xgq11mhQ1xJHt5uQZZrwFuARVZQffgLoiFQHQ9fdriwDvzcqdzRgKw9MKpQ8uCdp",
  "key6": "5o7XetKyQEXWtLvWpCEVfEJGki1pMRkhYpfqgSH8qaP71jh4P5qBengFJW5rkELHHN4gmatWKWEzVCbL2EvqYz6r",
  "key7": "36R62jDKvrE2ZksJmNTCW32fNmeV5TJxKpjs2eeozstYMZFcAaBipPDBJtEdENjCYDodo6YW63bRYuwVxD7DSHKM",
  "key8": "FFiTevtSNkqF4oYRyujm1kunjVUL5dpqy4ZVTbtBbGptC3ywaogfG39nujz4xMpeYiMn9VYkeYo9krECsZNcenx",
  "key9": "2ifvyokf2NZfmH72aHkLbC15JZ5m7mb5AECGPSBtJfGkjApJceYEupjL7gRPPzUH7kqSGQZXLxYqeygyiFs5CNMr",
  "key10": "3dtwHmKyTeJnej2RBDvMV8hDqHQ5QpUWAH6mBvXzGZbqyhmHiVJKRafXeH8cRQALJAZ4vHNPoxfiMFEnjHWLPu3Y",
  "key11": "4HfJkyFGRuauFoayc4cWf9SPrwHJuT96ComveG2uLjNg774sCTe9qVLLrTpmbU67wQoiM44hAjWSiALTFEGR9GkB",
  "key12": "3bhTmzYthJR4GCr6zjQZq4TeMGbTqTnZcjHu5XGV8fwaQGVvN9Lu5S5VgqvaP8o8JYk1EgnaLN26ureTo4WRLMuL",
  "key13": "4qprzdSJCLsJzA45xjF5FQuh2TEvkwRTx1M6TXMKibgzk1mUhSZs7RM2cgyj2d2RbXafGAqJho3oWgQT7P5kSVUe",
  "key14": "5hKt4bjYBhvMb8nFvpWJRfov53V5wLtCevtjWYKSmwUYjiQyNEeRAgxfZ5vWeRaqFUvbD1UvL1QZG3wUjyxYQ4xF",
  "key15": "ibzmrdBabBNwYCKtA8mCRHoRsJv2k5eixA4ypxfNAssN3kJhUSNc2xyNz9JLLziFJLFcaiTJ63EMBigokgVyDTX",
  "key16": "4NknAD5YF8LZCPMNfsYLnmR54TeGWcybzpEwN2cMZJ1HiXjCuKLFKuNdZtn7zHoBwdyU8EC9eZNhTzbxqUFUxNFt",
  "key17": "2s1GRhjG2TRLujzJyKGHtAAL15duEdG6yLEUUAmAsw4HW4Dbcq8Akje9hSrnsxuYsigUDWvo7Qxv78vhBiDzQRQC",
  "key18": "3cDJ2uqxqnV4swbr1gnY9GcZAkWDcezbQJVoenG8yf9GFptibEmSmdUHys65PxjjmMmc4z2xcszHFJ3FMauzFxZU",
  "key19": "4Fn7NZHyukbgBsrh9GwrSfMDrHnxe66S9cHDBBRGL1MqAYbAGgeBjFvzWadrCW7V9xksdCvwzwB4VJSwu3DmGFSF",
  "key20": "5Eo9Br1cYuvitrDWQ3reNyN8cUHF1T6ng8Xc6ncELmx7LYw3JWX9XA3srwVs4p2R8Uy9eCJLpfKf5p378v3LaGh3",
  "key21": "332kjnGoTXyrX5tG4zgdV9XYSjbq1YqdmMaGyUkzt43obp3o3pddwZrioB8yL6XJ3c6UaMFtooSP3t7x1DD4ck6b",
  "key22": "3ot3rUBgkUw3DLDukRd41WKBdZFCsk3eN3WRLfDqmUGNC3tG2S3L195WMWiTJXjNGy3BDq2AJtVsGpbz1CwBQgZb",
  "key23": "4Vws4YmKx7i9jE7hSDUwNZnxq8MezQNp63PRZzn1oPBB4DDHJ8F3RmwAzg8KZqJjgzjMK2TxbiTT7UmQGJeVzqTb",
  "key24": "2P6eMK7TTAAPzBZY7KFhUiYnGwELVzyzhZfTAim4axvVXYdVvAN3FoN4GmpQ6jtVAUCPDPJve2UFsGnz1UR744dQ",
  "key25": "2NBWBB38y4iuwudoSSwHrZpKrXHpJnssS9qX8wt8rjA1oPDMiaTMU5MnkUyBQuQkdWzb18YwhLDYnu2KwHdcPv3M",
  "key26": "WiJn57agDyXTmYrhdgqnqZd768QF1ryNXK4Zei8khPn4r7XynRKNXeNtsRJ4Bt4ZPG38sYcSpZ1ZKcdhMxTrDu5",
  "key27": "5Y7uKcW1ZEgRrKpVuC4FCXaBUNn2KCcdVbJ6PjeVgBWYNJX5RfHzqrHYVsXo95owrM4uWdcAXsNfPx3Vhznp2giE",
  "key28": "26Lu7nCp2h3Ca2La41raergArwbo7vefhTFBLS3AW8GMw7ZqWCgWtEygqEEGXadBRESLTESMzov7JaHkZBbv1txE",
  "key29": "5qtR293Y7r1frkJBHv5YMU3JaTS8iomeNu9cMbpdceDHXFPVwQUGcntRqwyZ9nrBUdmJJmBmAho78QwGsDrYQnwQ",
  "key30": "5zMNULP6ZEzXyyfk5mAtpnjZBBvduAeLwNn1XcZS6KU6xebCdW6uX4NTXgPA7JM7fMgPsYqGQJg49xoHfEtWhXDX",
  "key31": "fCdVhhGWzdhaBFNC3PVHKGTn6XjxVNb8RvpHRrLK14arvCMumeKVULPZ3sfvZPY7fwjXJD4jLpsBgZHX7rjR7gu",
  "key32": "3GTpYFXVc67PjeWbQ6yX6KUngY4iFS1rY7hzg4GZA58kLuXfCkJxQEzw5zyjTgGZwwjdfmiDzNGUFKnAB6tXpiGu",
  "key33": "2cSR33XC6mporyRHbGHPP39bzQcQHiXhkTWaefijXCiYBsRxkkgWiu9yzcJzHwJkuVdDUPncJ5aAXAnF6PD8bkPR",
  "key34": "5naGkKFq6YpNgjwY7mDck3uiwH2KoLvFdPteE1TJAdirZSX5oQFQ2TNiZs1E4QGsAcjKNRyJ2r1ZtHvnndC8tqVu",
  "key35": "4yubMD2NoUazxnWpTvzkt9ZkwybaaX65s9FM4J43KaEfwgfJrz7ts9jw3Ph6FPqSZc7HCQ6gMtehHKmf8LLbb214",
  "key36": "5mnmYLCZ2BKRyUvHqosxCnpLdaKwzctu3pmA4UKywjaUKMhJjSqdQcLv5Ptv22KcnwqPa6n282sn42ejVafM8vnp"
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
