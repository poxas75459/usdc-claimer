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
    "5By3AyfPcciCDBDKU4WZvC3P3Chiunei93R7PgTYcjNivBz7R5neZuaRjbP7ctDsoTTVcSnpthpavR6U9b7LAJ9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQJ5xDaqd4NzZzpiB1XygJeJ7CK4zgLo7Ce7Lo8b3Cizf7zsNVaVXjyZAQvwB9HEecDZRiw7i2aVGxzpFWM2ai2",
  "key1": "5CQa4d6SaExEmZp2e1d14XLa8utRAvvicZS4Er2ksqJHx8Ki1kervDgkyvo8gLwQGGik7memTABEgQZG4EoreFcA",
  "key2": "3CRNe9kTSzFozZ8WgtiC9UEG7Qw8ZUHtvNpkNmCMS4V2QGXSvGNDKGLdQ5bDj24Quw8x8iLVz4r9HGkMmqfwya9L",
  "key3": "GtDgHejSdwhKYJSh9t99kRHNtkkMznEfm6Y599aR7Wf3RXmqcK6HRdAsSN3uHvzA4UkDaC65tC7215F9G7P6x7u",
  "key4": "2YDiCr3HfKxQHD5gDGz9KHu9q8xfNisM96PPgcvKcess1wTnf9VYACMUKdF86QLR5YtXR5siV9yiZ2JMK3qjbtmY",
  "key5": "47NWYdJst92ff4sC7ZpQb5wWHycZQj6VnthhvKFixC2RD3L9zXercuJDLHC9J3V2XpGujH1pk7fqZTk5ucTKGN7R",
  "key6": "5VakmBSeMtrztvpVdUZiFyx1Edfpif78MnXoUA7JtAaTkNiCQjcRWL3KV14kWgZrFGz5uXteu6P7NSdGfuJ4sJAD",
  "key7": "5jZnWjHrpAfGWQCWx5exjq3ct6a6twV6Fg8hGtc7uFrHv8yJ9152w7tQSa1DU5GTSHfyPmZxdqiu4aGPifdZbX6A",
  "key8": "2Xf7WfLw7syWhdRmBraXi2DRKnfQ2Lhx8tBxTypQJtkaNtMDaUJHSUqgeCWNQBAeMm7RbH5nXZQDTiQLsGcvW3sw",
  "key9": "3wv33MZawPgSeWZe7X4zJK3Fg2wSaBW45fSpLzw6X6rtticbuAN4yH3sbmJox2vZG6WdEdSZo1UCoTjKMnNq7xg9",
  "key10": "545i5riXHUtjjwGhk59TzyTuuFqPrL88Z6zCcoSxpQyvwGeipuufo3otsCaSyd9zYDeSiBzEPTJGxUsrMssA3jsp",
  "key11": "3fSSKdvJ3pBdGt2oYCmxREkktgibWhsWPQHsLXvQnXKiTCQ8WxtWb8vYJ2Y7asWJrjyi1fNsrLtn5mFKwkLoDS71",
  "key12": "mTLu2zCEZWX5ETmsBKu34J8ykUf8KRrYaqHUqkYqLs2A5M6zzo2Z2mKPZGGJRnMZkWT8FjJQv35aVn5wQwWfzZF",
  "key13": "42n2SKDLnzVNKkSsaQW9uQ4jWmyr85BkmmNoKBUigz5e2Vt3sTauYPBVyGne57schBWAQUaDroh2vyPSzzoKwxdu",
  "key14": "5EjqXAubNrAtr7RZkRUfiWuPPaHC4AibyvHsja48NobcoqjKt1CqspFAaHxWeQqvZiMaob6AV1EeZMyQxzb8Y9DD",
  "key15": "9Chzonzw3Kiyty27juTJ3RpgbfkyYeSrt9cUbgS59gcK36EwqibowNQbypaGYhTrrbVvjxHc6t4JEgdmjr3qZZW",
  "key16": "2BQCYq9fSAGbu4TTet3Gm4wJbYf7Nw8rHUDFSyqzbVqqF5QNDWKudaUpU1MQVhsMpkUUb4ehLycMRv56sgaAmt5u",
  "key17": "39xe3qc2bSdpmnXAUKfG6TdPsAZfn2KHcgo6CgEigtYVXEmZjRAHHAo7wSkrGmD9yx6xYDFt9Tf35nRcb8xzdbNC",
  "key18": "ccikEZcYSgkXn5aXLZdhCRdF7zicGEsPbSe18yYPFvPL1UZxTkjYRKYDGxno79ups62R2Ui41NdKpLizs73v2MU",
  "key19": "3x3CZsVtv8sGwfqtyTfkT5PeDULzCtEy4ho1Jbe7HsRsf55M1xS3EkrkUu2nUDeWs5zv8iRwNUmMpR2SGSAcNMHD",
  "key20": "4ypLK747PqZ2vJEtL7sZnzUTQXrHzFrjQEXViAuqjZBRdybr2prfwG2ebdSW2CUfLSokHcbDZ17suPuxECtrWeDN",
  "key21": "2zGqNW6wE6oXszwCbhzoggWp2YY3Nm2ikebsU27DhSvWmwnpnBX8DGGuULUkhDWQmRryMfMiSKNnN1kYVx5cPUFW",
  "key22": "2DyFT7Wy9uHtSvdsXeqwSuBb8NAvzjiEF2zot9fezJ3ahgCcByGUXvSUhrDjyRCMndKt99x5L8CJvR8pucgu4XGw",
  "key23": "hyyPzYE63W7gGnMoHS8u762hdudpym85n74ynpoCRTc4tdFSyvhtv1SkVnvkHoiXDpPEeykEfcVBJkoBfcnLHvS",
  "key24": "5Jgoyc7mDcUZUfHkTzRXXjouz1Mdbzzw43LLxDvSJZCo4WxAMixAoBrairPCHkpYjXx9B6vgpjiNvB1cQJEhCZ9i",
  "key25": "2AqQYzAS6UyyUj8LuMj5hmFnkCCxKK5j8bZqm3vV3gXPvbiXmZDxc3X9cRmVgqrrkWxAsJiQdu7FZmenF3NjVwjV",
  "key26": "2FjNQAdHGTkBKkqYB3yfPhQ11MhQtJRiJmpY8vSK93ZSgMCPVUagH6wMnnkTffPHRVoFCk8XtDCngnCV6uxFXj7p",
  "key27": "5PMochSw5QokKyrgeLcLLt63B8qTx2KDJbeBVs5eyQMjQHcxSpDhjKxNSVqWsFehQ5AuNZSAHkdDxC7JWjY2ieT3",
  "key28": "2ihDE9N2N5dmKSY6Ydg4X4nKiSB1QdUCQkfkdqoaYQ82CesmxtmFZG6hmJnJJxdVraThLEYgeSQvKSxLRoB97w5i",
  "key29": "2Y1eeF68h87XypzLxHBEg3PvTF7SCLSeb4cQNJffQf8LPn9MndL2pskd5oE2n5kdvJutidbQedrU8xnFzuwnxDQs",
  "key30": "5Hcnr4h1xCJRKBHn9PsAb4GB7LWCrqMDPtqMKU3mZnkkC5JM8DKfkgTV8fzBuqxHz2FDSk2RN4vvJ2xTS2eiCmbR",
  "key31": "2c5T8D5qybSqYiNnyJAHwiBmanuSCe4Qc5dnrtXnT1cSyS8cXvfPsTwsfuZUCp2sGzzLzkxD96cUjTombosUXoBm",
  "key32": "4kEsaa8Z1GEDwh9DEf1rkvESkrymc9AWoGUxwzRH3jVogckbJJktZrYCX25MRf6txZVni2mY5icD1bQBjDgarvLx",
  "key33": "Ync1fSWdqjQnLb5ZxpAVfTKiNLRb7TYxNXVeELUKhZzzPgy3LUyVnwwQY4mymYvKhtW9ryThtNJk2gUsfyPP4cP",
  "key34": "2SExHCZu9ScfvrhRfGUbDpX1pos4o8Ugu5jP5f9rbbXu51m6cB2KWwFN7oW9Nv1MTAfeUJHz2YEPTnVZoLSNqHqy",
  "key35": "4SpdfCV2QKCTzkYNu3yA4W4J65cFynNg6wkchMoyLefLqbh8pJGWCEQDHHLfcdkr5zsGxeNM4sDfiW1qKZnSaccN"
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
