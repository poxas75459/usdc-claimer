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
    "4uCF2vyAp77jrMzH3R69nJjpktuHbYg8KdpmA3VThXVUhF9NYf2N7wiW8EUYf7TvfW1fYNkufGBjqvQ9DezQGRKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjm9ZL2Zn7zVZbWgk33NSWU5LSL1wvjwMRNjLtjT7qv6msLn4BN22SCUsWHCXeUYAB1eMYNfBTxLBnpCUJenQTQ",
  "key1": "oY9hxjVWSv6dyfmKhLXv9sGFHXsFwpgXiyjELNVBc6EUfzzwvxEBKttgd8RK3JhQU2xH5mnt2d9aaDkPs7hbvty",
  "key2": "4haqHkWYSiFum1f8h6HqFnZeMRxjnZKpbBJuAHsb9bfZzBHmiCc65cPdk5StTqRMtEUGmB2eRY6tkXxWqmtGxZEc",
  "key3": "53KfAMk8E4YHdmyWndnwdNkzGG9cF9KjB4qymPjSYXnZHVgV1bukVFRg4yzN3JPgd8ySrKedrsJyS8pFZB2Wsqfy",
  "key4": "5Lje1t85MxfsubSqaP6iaPghWs47NbeCTj1ybYBr8Wb3sDmVEfJaVqrfLAigo18fkDdBTrEnumgvKSAszxuVZ6Ab",
  "key5": "5Zh2DqLWHnRGuLpK5B8Sp3HVNgwc7CB2wLEqCqSC5t1xwTiHEP9d5QyhicxhMjHqdVhkhugcxKXz8k3GKKAMcSoN",
  "key6": "5PRuPWa6QXqpMdyU1CBRcw846o3c6cNE1qKo18uaedAL111tk3YxaKERLMjDUHMsh1af75BzUjzQ3kDF7XSE89pz",
  "key7": "3MucsXrb7mh6Ck9cmnRXfjiFRJWZdBnKcjVYthvkxaf2Bv8gdHrM7Hqg3DV8FPdanctuPG2RYu7A6r2c2Fpbp1a1",
  "key8": "4Pj1kYn2unXkmfLmWbH5fDz9jrZv229Mf1aYzbyMGHKAmyfxnmHeyTjpChii4poS2mDZnA3t2X2smBAKMvps3ZfV",
  "key9": "5FHn5hQGEPJ4htEUuKFG3sDMKEFNCZ8BSFGBL9r1hVruy1A9BGgSVuGYnBZcjk8ZNreXs8K4cjQpcGqA54Y6yJR1",
  "key10": "2fCJtKmZN7Jbt4aKCURtcywUwVkvVGnQV8n3QdHbBVMk8mjkmo8uqd3c1sNZPoNQ6EWXBJu43W9gjjB1XUF2yeWC",
  "key11": "4oGW1r4edyCn7uU2cgducxVDWnjrgNfFRjt713sxXyUHfZ8uzoVedgBMRNSQ2cXPEBovJopgZDzS567N86oYJZyJ",
  "key12": "2msAvyfJqevjQy4FmRWEZ2cxhhmdoLBAziSqwrjjDKtcXpwVAsH5DpfXgT76bHohSu8JoVHGDz3RS6rThprXD8GJ",
  "key13": "5wHX7SnMJBAsKmqjrN4wfBx7hysrX9UguprMCPgXH7Y7nXYjcHZpXCmBpjQS1DjzvKZaVxKNbqb3bRC4T2eDsPxY",
  "key14": "2w67sVzSoM4SPxAUazs9q3J1A7ybv4vjL5AyC2byiMsbSaa86MtLon5rgxLofXEFN2aJ8ZABS1pscq7tcttbCgZW",
  "key15": "5XSX3epAXqEUT7imtx4GaMgZri66p3poVYEnNRUWkngNvw3vZCm1KWWchDadFx4kmwnTACGkR86Q826S3erpkCag",
  "key16": "5xKXZXNkmMJ2DAHNvSFgYYY4E9gALrC6xSsqjRp7Dzb2syZUdS4xKpqcB7DuZVPoHLNtxQnEu9Bq8LJKPP11Fuy6",
  "key17": "5UcckXbnC3Fur8tSZgHmWRSqX7opQNCMVEuLdRs2NNAYvRF6sseSusBTJ3BbbrFwWDZF8ZaoTw8U1Tx1Wu1iy5uv",
  "key18": "5j7C3jnCtLTu2NqVTXMn98Au5TCkcdMdQTLXvecvFy1Uj9sEYaNpophtaiXV9SGjqZ82jSF8ePi36pWQCzuqJaZj",
  "key19": "5h5TzVqsuUnVxMwwXEaF4AEuzi4PDUf8XTgPT5TjzwwN9JVX8hNppE55WX3LqdNtJUDEMvtkYuu8RHnNet3CwAgc",
  "key20": "4CCuRcL8yuhUrd37fd8hm3T6CmaCKzeZwnHpS8zmZkuU3VXtJsf6XQUe2Jy2iqESNdRjoEF9bvzD1W46F7BRZtHR",
  "key21": "5NfqrmUgHecEYkj4gGvuWKPX74iou8AS5MjcvzfUXDMYQodcvNzd61KXmsENYuZTVcgfUMMfG6Av7mBrxMh5amAP",
  "key22": "5cFWR3FHaHZxMxvDGXF21TcYZWHevUCbRuzSiQ3uGDvfmegRbtuRMJNNSivnUEibh6LMpCNeg3hqbhwuKb8nd36V",
  "key23": "2e5tx5hkULtXo4saZSMMedCSwVfBsY68zRgp6Y2h5UQ8rrbYTismcxxbGyqeV8X4qXCjtVSMHqMBKkXpNVTohYFB",
  "key24": "5VYLedWjobe3S4eAQwQA4mqTHkREyJrUNtQMzBFCaqEBF2fhHDxmPGCVqGRfpCPBAYo2qneb4jz4wtsqY88adW3j",
  "key25": "3eMPYcvnybdr3yARskws3zhCahw6NJXFGUAfDkAXAMSH6HzkeYbt5ndy3DJ1dYgsgs1XQoduM2NXggTfLGwGueQu",
  "key26": "2odT1z4ok1BufmYNVhB7Rqk2s85hhBsk5fWcVAZQjYmiTY7bAvCkQnJwjcANQ3NpLRc2dqMHB4heTPt7VvTr9xtW",
  "key27": "FWnvgz3kQCAjkV642ekKYr8EJotEGaq4TfJdUrZbTrj2v2UfMhP2X7KyxTycP7SwBVX9FhPfdqutETokfDUedCp",
  "key28": "4tozo6zF7GXzZekwvWY6kaw4LtvNG6bgYSST3wWogHzb5VwhQEttPc5zjxL3jPVg2TsZavfokGf1BqMRpDdhajyg",
  "key29": "4RbpRrD287WiUnBawjFE9ufSMNUszFFcYB4bCB5ShxPFFxvU8xRZNmpp7ykYFtHiw2eg4k5nbjJ2gkLuuraW5Xne",
  "key30": "5uGippRY3cty6F6YZFTymUXAu5tAArEjuY9VgazuxajKwwhfQtuj5yWmunD4XXoK43UyLfvah6YKVJ5Qr8ABGKfF",
  "key31": "3pqmzd681NwgyqUsniuqY4rK8ec6a2A4HPc7r1Wd1k7U6UaL28B9MQ6G8mSn49ZNsDCxnKpKGUVFLM6ULrq5nciH",
  "key32": "3zv78y1g5J7yWmVDay5ubwhpzMNwzCD7qo3zhrJjwQGav4i5i2PsZYzUzH4erkouADnZM37fkhTr7WTJ8Pe5SW2m",
  "key33": "bnfZexW2q3Gtka5SRJRPfXME6byQ58Xupet9boFqCvFNiLe9WrYZpeuAz7kthRfg3gGPntG6kRdXSzDoFApQcsN",
  "key34": "4aTGxmFLNq78RUxGW246x59XaXrPXAR6vopZjtaveV4tXLrQ9hkKCYf8JVWGaG7GWnddWE59TKgRpCHGyxR9r1Hr",
  "key35": "5DEqmQHRTQwHHRibP6ofhjdPoLcHkP2sLHHo5jwrt9zqZcf6kJPojyqoBU4JSpgDwcwZjgo1TDGj3Akav9YUmqtE",
  "key36": "3z63XwCjkcknd2fDFdnVRUfsSNcyGkgQK7Pa3h68Jv5YgtDnz2eqpVNZaW3z3Da4eHW46zKMo9f8S5GatJKr92Sj",
  "key37": "3sfYLqR7RP3TGwSWRJoJ7LYYSYkagigUyzv6Mwq1ERE1wYqpaBbxCJvRCW3cqiuUG7qPkwPJNe6QkZ8dhQ8cihF",
  "key38": "4mRuAfgTwsNgNoSWhTvFV5BsarcjkU7Aqkff7Zxp2rR2LzgANx9YYw4XytgsXE4JY5WJQzNFVs3d4dfrt1c6SL3N",
  "key39": "5HwsXHQTw1FmyRH5eFGUaogynWnhtweKvnA54axjovVsd4Xp82n2WQ2GWMEwD1TXSfWrZMP1Aw1f8MLGMf7UBC76",
  "key40": "xKjHGoxKCEeqB59cbHjsKvWkPQbe9mnfFqpNpCntNtLAKkbvbxdmyH6cYZPqx8X435Bhi49MruZRKt1MuQmEeSZ",
  "key41": "5rhBspBvy8YYnjt5SBXVsDUoL9AKqc33W23fvKdFGYGzsqPD7VZsWMzp5Xn659yqpdNvVjmUvGBybsHDUUUQ1cVa"
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
