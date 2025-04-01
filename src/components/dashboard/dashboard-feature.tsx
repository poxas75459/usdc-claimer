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
    "V9uwdo8QFjBQKFv7QyGp8UA17s56uGRRN8CZFfDwbJVCun8n51xTT7UxXrt9HQdUpo4EiKNdVUJwKA8jV7n9X1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XE5ZYBB3EnQpbte3QgUt7HpK3ANhbPENjUeubKWaoVxdGvwDNW9LS542m4HXAXLrpeDWfr3pz1e8swoq1V5j4n2",
  "key1": "5LAAKxwnXXroDfAAs5ykj4onprpqRPqM2J3psWzUPykpxZxJ7cn5h9dfBtTcCVbNxaZptZg1btDTVZ8X3hb3t51v",
  "key2": "3jr2ZRoQg8uZb6ybWtFXEyXTz3xfc14UP8wbHp2VBTJBpLcs2M1VcMWqw8aneQMRHAs3v2iYHqn1TPu2vU7kYTpp",
  "key3": "P6N75rYriDfieE8LZLHtyCpszu8yqxjKBEUxW7fQ8esj6WGJeM7HcmueY95MDhiuKVHQHnScZDnvPuSDgV8Y3ch",
  "key4": "5j2yLHLfRFnREivErFThopMUDtNZLs6rSi55mriFCkTaGRBM1uX9GjqXyVTrKioqjMzsJnaFcj1RtiPDC9tX9Fd5",
  "key5": "2NQoeENhw8dV9CfT8q1LbJUnjNnmGSLGdZVzzRPHdte1Q8nGda9n5je48i8MGDGFVQCz5mmZ9dtnM5R79bMaCtbn",
  "key6": "51k4FvXCnM4zsht6pheQRuF95Xyxx7ftXNhW5kRuqfqHpfxegezeFzgpiXTW3TnjG5VZumpWKTC31ozMGoX4W6jN",
  "key7": "3tTjJpYTJUDQ7ecJkashffCv18VabzQ4cp1dbmwoduxwUKCDL9bA36hwG4Ta5Wxpf4p9QQW7kazrSD7DkTZBpUKS",
  "key8": "3RTCx4znBX6j1jMMB2Mrgu5urKXFvKwBEbjNzgfYsxaS2MXbGs59PsqAQDh1hkpiMGDj6CmpHRfkoAeyS2YiJFja",
  "key9": "NEFBR3Wq6XzukJW4aUT223iNbgrgF1Y53NZpHsr5TAcWJSpjP7E2vFASu5evpmDmKvLRzvMvLdXSUAxypTHvedd",
  "key10": "4btv8W9etZiiDpJKK5yV8WNM46sZrWdu5i8HuqZr42QQh5Ba666ezktBV4RUuGQE7u42gCwhAJ9VhRKFDZhAkd3W",
  "key11": "3sP5ZfcsEP9oYHZPUhACVLzMa1UCAgG7KXH5Ag4Ce3mAVX4HH1E7rJMgTHxpTzsLszhtpeWfVTmmCr3kY4dxD6X",
  "key12": "5YNQbpMuTDPzyRq1tFvcADyBBZKvvcANrsi4xcUom3uzoC46ThYVWjfHJJbojVGmp2jkbD1UWXrMCsSnLwV8CWzj",
  "key13": "WZXxoG5XG9U6knbQWVzRsYaPZsS456RfDHvG8XKQgFPRxnB8U4Er3m6sYdPeAXH9AQXx6VHKxfs7PKsS4ZwTCZm",
  "key14": "4qPNMs4x8PhwXh8xMjaMJecQ1PvXgLFJQmf6dRHUNNJm7z3vSj52aELgKfhXmdfPxCz5znLJYzdZNxYkPm9pbHZa",
  "key15": "4KbLeXpNkMLN2QhH8X6P9yToCNAAX1fY8vJ9nmpbdkHGfuSWNAvzt67eFo6cd8LX5QxgCxBPQBgYXfQ5PPUCSDfB",
  "key16": "24L7qct5dr15ynBhVRfAhBknnbmYAnXDJ5pMQfYsLYvvqybC875Z9nSst2Myzxp35yJddbeeex22PbRJqsWyRkzL",
  "key17": "4s1LJaskEdeeMWdR7d2sybaHpB3CQ1UgqDs2uBVS8hY3pTWKGy9mQb1o3jGkcu1bmjQc6ND1kTqUta4MRuTULxqG",
  "key18": "2cdXfKtfQphFgWoNhyxjK3HLkdFXCdgTvf21MwQcnhbQVroD4uLpYgG5RNNrX7KMcMM31ppeX4TUTZRWcruWutSe",
  "key19": "2xumhDRKxeh7PHz3QqjNu7SBWYtcfta1dYUxDxoQwC2jtNkE4vq9m3HYjzRYradvCmUgRUW3toHDr6vEFgevbMpD",
  "key20": "29fJ6ZWtWyDZpN1W9DTybcEDQLXJBUhtm5UiXtmNXUS1CdbP4SKN2JxTQqFyJ17zu8mUM4QAXqqTJDyRKG5wSBhj",
  "key21": "2xJSft9nG7jRw6jJRPBSoro6FNsBcfSBjXYB8Dzrdbkko9wqgep9EZYGFbGKkEXiTQKwN9uBoKWqFmqXSganQB2n",
  "key22": "5baT3D2XM3uy9DxcSRvEgiCY3oiPas3zdwBswdHcDoBhKhgTMXisUTaVvDicQQivWqV1xvHTWvTusZBfBTp79XQq",
  "key23": "3UwmtJShkZik6Cb3ADHNMNKZKBRrBxQnpmzvQWu2VCtRSzwzA2FEBkSpuBu3k8em2JVQi42ArjPL7QXp8wMaytPK",
  "key24": "kefyynTyCHLxQuVDT7JUJcb8mt4dhD9Zoh2zBArr5ndBci56UjRhE9Pn5t7Y1FJTtxWiPNp8bXvyNiRiDh7mDip",
  "key25": "3KSreEBMcbUZfM3JmMPHepcaGVD1k6zNbJksV7HVkawEskVp9HDypeZnELp4RC5S4KrhxjVhyer9vwABKgULLZjX",
  "key26": "aTQaCjndpy6XUeE2DoM5WcDC4nztiRBMaHwUrmCpYkLxLDXvh3L5S4jcuwuHQfbEQF8vJavZ2xnBtafUv59AikB",
  "key27": "47GKbu9iXiqspkdjL5Eu5659uA69UsrtP3GKFB8V8zzpGy144eZT6taXGNq8CpePrakkNiuWok15FMNbgnAWFdaG",
  "key28": "3B3jff3eHWMN2DCZPNMvJKPKazZVUJeWxbJYP1gRwBh952GMkgqU1HwuamqYV7QKfDYpNueyiThQRQX2cnKLSDUV",
  "key29": "2Vt4VmTNrybfTA1UFvGYBbK2nA3mverCiZh6wmCHXCpjAvdBbcnCb6rXJ6TgLLURr8R1ZAG9GUESm7XJhFdS5e5w",
  "key30": "4J9mV9p29VXY9huURfkc47y4qdLczJfFvDpfbCGyjuHVfj8ZgwwXpYc2EumdAoboeoY4XUwqi3ye3aGHUqj4SRyn",
  "key31": "57K7kSBh6L79nLTnRZHeDuzNQ633C7uVSHng9yMZXsk3ZbecniGzjzHRPmu9tZfffbcEixFVNYaA1r4y1Ppm66Dh",
  "key32": "2GAZKWuaLVfJbJWZ9ad8jV1MAeNpP5DzUe2qHjQJUAzSQmafwWWnxqkdHHVhJnMbVQFpPLU2o88aW1GvJ5qiYxw5",
  "key33": "3BXnqNXAPdHjA6cBfwB4L6ZewfvSxe6V3FnDpJxuRCnc9G1bh8QGjYWmkwcnSb8ArJ8WJAYwUuNCjRCE47mQ75nx",
  "key34": "3w4xFAfRbTGGKBxf5M6Gc6BzSZ7eodFnVqkpdgn6FXq4UcE5GDwKGVxr2ntUhZEyMGGQvVJwtQoQcyRf54aC3r5E",
  "key35": "2g1LZW7BpmwiCinsb5dKKptK2DsLCTRrqtLTEkpXXwiMrmQgo2vqGY3tXC9usauW6rdSLmDGaNNZjcuTNwDaHpJ9",
  "key36": "QwvjYQ4kkqkXvr68XqWHaFfMvLQThbDYPXuHS6jtwQ48GDkdFbVdzNmsuWJznyGwAAZivLz8nRTBfVhTw1FSyBF",
  "key37": "29WbdK4QVnMYjrnN5KH7GkAtgvnAEATNRW3ZXebgqG6rXJTR1Am3ybj4TdZAMVqneshZLXnBD4jrFKCtpqxJFimr",
  "key38": "3d5rf3ypnNz5UgDRMcD8s8CJfrnHUbtRnnJYpizoQrk8BTs1fQZaNduVAhqLp6VF8ELbqXiX4hB1tMeM7fEg4BbF",
  "key39": "5nwfLjPNaaLvNWn7PjxCR7KDypyuV6FY1yzGX1c44BeJymQahmERwq578NhgrMriFaM8nQQnYNjwdTFkTqhtWYDi"
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
