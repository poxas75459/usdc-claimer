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
    "3SPZW9pJgBe3gfXmMAKLf1RHzMKkcAwDygrsaiyBy19EJ7Sep4Y1W59jr9mbPUPwuhxnXdPHz9C5nrTTV4BfzdBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pSZbmmSdrS1cRgWfnY6fBga1ddAvYKUX4VfWfEWRPApsVZfthYwRGPaxMAxzeP4ZXkRR4YQZuHmoewm25JpYhx",
  "key1": "d3z3KjyU92cYxUQqDJzzacr53g1vNvHV9AXNB4r2P9GptNTUPBaF4xmVouyygdizvaXQqGDFeDrmNe3oB8ceCbT",
  "key2": "5WYWLWcx6BSDHXiH3XTpcpVgvj5c2vmCBrbWZtQm92t4CMaVxHuqLwkuXyafjoMhXWhTfMis1pXh25WN5v581dzP",
  "key3": "5DHtTJGgGsenWGJneHjbnJ4LQBukBZC7sCdw1yd42pnX5WdHyAkjPFjag8UF6dqeiu5GB2RdWtQ98TmrsVJ2jyfU",
  "key4": "2Egi3ospyUVSxVF9umduxKtTdQ656qoy7EYDxL7WqzB7a3swin3PS7tdCYsdTRwiA39PZ2Q4yiPosgkisscYt6NB",
  "key5": "32Bbccb5shRCrNrrCpfdWsLh4iMZKDDVrfviUPVqzkWoxzpikaEtMBUEFWU1i1krGDKWsg1NTe3Vo422FxKByK2b",
  "key6": "R6t3C23hDqokajmyt3vMHngpYugSiM1vmqwDQ5YmKLNfJ694zQY28K5AJjFFRHvuBY9xVdDPXkeRse2NKCSqyNM",
  "key7": "3UhV83N1qiQavuPgxSSwkmLKUnX8re1TBmwD3cMxFcss8RiGWLGW7JTr1DgaPTTe55TB34xdQzaUK7DcASewdbvU",
  "key8": "3Ktqbv712tfnYzNBm6cKbgrpG2TviGZqjEiCSzq7avyEwfEiXnZ6hNWLM8x8S85kLXzzpMWFnQJMZA6FrSmBXAPG",
  "key9": "kh3TPdvUz7Dkaf77GS1cLjCzAnPuN8ygfw8LndJkMpjv3dr2uDdUvcwXtYuY27CDz2xp92S1PVPeaDBdMGa3F9e",
  "key10": "4yDyDGVG6nKo9tXKWe6avkRNwQYGuPtpqFvLquJ3RLNUWbU7Lb8GwS9qt5WqK1rx8H9YskpMwTdgVikDThYDqMm",
  "key11": "J2ywMZs2GRZKwPZAg8sHkaZzBA3K4TqaBGXQKEJrZBX7RZUE2DEiLgh1WaGne7Vqbuuq3WbiZVfdbdDDLxhMXru",
  "key12": "24uT3xh1MPRXqzSPEfjVBrjS5tMD39n4SigK8qcM3VBFb7R14yTZF5QzbVnZyHvjZTPCbDEXYghEF32a94A9hx9w",
  "key13": "4ovpq6dXhnwRp8pCvTHuCnJiFFYPEaGS8pHQcLxVvHf4QL3v82Z5UQaSG2sVZ1Ey2hVNDFWHYdkBUrkiYyPafqZZ",
  "key14": "zaoaskttyU9iiLPeBwMxkzimkFf18yetWkmyHqiSsaZP5VhfCvWCmTfqpA6aPHMsVoUHAtkRqhXNZMW4Srm5un1",
  "key15": "3FSndAW2MRe6z6w6z6HcZyo3Gw32rvJX162U3QARYzoMtGKb7hMP2nECQ8yeXKxNgPshUTJM4Y53qhrtDLLZQsM4",
  "key16": "44umhtNYArz1Z94RbBnbFjzi3LjvR3GhDVbwuSAazs4aVVu91cNcSpqzTU8eLp8i6E4HkN7FhF3Qs2REGtmvsmfB",
  "key17": "3k6SRfTyfWT9jNFxsxJi4jq9Uti6TUnnjNrugNp681DKZ7ujrmQLGeTGgeC19xV344xgtP3vzagrFFQ1zpCdPs39",
  "key18": "2k3AHdtuKeUtivhPiCUT8gBZGHpbsWe9cStaMdHLGJ5vVMt7sLhvG9N3AU8mSHhL7eMETC9HAVD3sNHH8f1Q6UQJ",
  "key19": "4FKCbUxyYNPPu7V2qTL52QwVR1LZL3PCWo3eaAENF6mfKTKcbqcJz8hivkisHNFi9N7Qn8YYyyzPzNrCd6yneFf8",
  "key20": "ykjAGhSUxMXCSZFXZ4GQ8q6iuUSJ3nJ2RmdqfuuhrGD1iuq77yC86TwJdYQdDkKxRJi58ztZMxXs1MFXWAKKJLT",
  "key21": "5Jg5MAkF1psFgtfrjkWs4EgkNXhxACYTWqtohJcnAody1rYQHDstWN8iYHS3qng4jzcxHDTBr18yZ1AqfADQMcf2",
  "key22": "4m4ZCMre6rUM8TW1z3xGHc8byHTAMGneWCvXpq23JnLdEQJjq78Jrdc4ipr8xeu4ZmEgijncJMobJnPUc5FPyvJp",
  "key23": "4jVNua4XrfpofnkxGFs2HiwoJVQnWRCxypWvjzHTYAwotHo7AjFr3u6KE6LPg3qDECQWn4iqouKUP4a4vV6xScbi",
  "key24": "43HnDKARS2XYQQQsMntKwM9ZEYCx7GAz4tLFLQH9tghQWY4j3LuRBwaCny1yMpQs4ZG5nC36JQsAtvVWiLVxzMDL",
  "key25": "73Mxv4p616whrZmyDf8rNzRsJ4MbpDP7QodX1rDB6kDfzri9HTG54kbsFUkQ9KVXdtKSmt9zzp8bvCDYwPJskAV",
  "key26": "53VrabAtzKriikSBYbSCNGietcsMbQhTQ7BKPpvn7DYnDXbRN8dz3RGficXyu4yGsit7v9XznQuhypfo4UohEqDq",
  "key27": "2U7WgWmcWim5SDMcihxWgeqoFVs7vM7gVvYHtnH28MQqE79FGtK7BNerenXFUNV4SfgEmKw1KMcCm97LqryFCkNz",
  "key28": "4zPp9QdnGwakMPzpvQV8h6QJWgAJGNZFV9pRNo1MYNakakwZ6vUeYEnnPqeQqQawyQ7yQNQqt4FU3ZAXQciPmjLY",
  "key29": "3UZRTq6sL2t9g84ZhX6WVEf5TJNZ6sjhBbiGHEgp71iGBjbxkkTLPoCNCi7YG8tTKb9b33uDqEAfG5ATWTidXcDn",
  "key30": "2CBLuMsjpSEfPrfPCn3Ba2RKFQG9myj1FthfRis1cH6Xo8QXsYvyGHunkZ2oPpuMx75dBZoDjqPgdaZzNdrsiFNn",
  "key31": "Qhu7wX6h54YMhHnL7LoFp7u2vo4JuKFveVWZXF2WCxisGGQTxt1CXaCrsmnhUEKcK6jR6Sa3iyKDJ5wnVhRMguN",
  "key32": "4XWEEXEedmuA8JUXy5nuHQAeJvsU9ToUCifNB55QMKTywDjBoDduTz5VUQR5jkixHBcYZp3gQXwHRuqAKXGmh4To",
  "key33": "23S7h3rFaVwFmwiAzgXpAuxGh7BDEk1j1rhh95hbPVaXhZLJpZGE3ESdiy1qNhgLkoYBUDW7j2Apz6JrCfDWxzFq",
  "key34": "4EkQpcWPhoFo8Yz4LgwGZrSaYJP4VcHFdi6Q6wbD6mfs1ZPERmQerWt1Q8hNUfd1jWfpQNvwwk6ZugsGiKP8ehk1",
  "key35": "5MjX91wu475FRWhdytoeppXNG5Auh6hrU3g9tzpvbLrpRwkXRcGJEH5FESzFtPzXK6XwZM6Mztk1PXDwY36218Cn"
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
