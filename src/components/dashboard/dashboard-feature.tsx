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
    "5EhnA8Yyu4S9R73gsyQ6ftxssvjaJ8Gk3YwLqdsYxsQjnAS9ao6JDraxEQsfnj53baGrVWxvTQXSGmVzM93Aq7DM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q1k61BU77s5mPHQZkUuv7SCuPqgeLuvFFDTpd2bg4fzLPGkpb4F6MzSbaWQY1X85zKCpgdWRZjkUgS5EH1uf8wk",
  "key1": "3auyJoQyhgt6CnpRsNcDn6ttj8yuZ32a39WJTGKWfmybwnd5JtM6AuhXxZbTUdJyaUKqXgW1ms7CTwGcCuZMFKcV",
  "key2": "jL93sk4rj2CFHQG11pCucGqC4KUNYp3E5L88439SL5zPFJJwwMWFQci82hAKQY2JQBG56B3yrRAN5VPf7JY5nDw",
  "key3": "4R36c8tdUyFi7Yv7cnNdaUhRdSjgE9ARY2G8XGwegnnA5UsiLTXLbXCAT8ocWJFqrbnFnsJgCH8wMLSGhBioNFn4",
  "key4": "5LBrcTq2mFubWQZdGG31nsu9EN4Z1Gtbbm3Da63yMhEihSVw2f6K6zK4MbkYpUFeTA7zytyG2JmBuHkHgg1kZvYz",
  "key5": "w9HprLCbQckhMtcpyYtdyhQHTbbeUaRRAyZrf47Q62UweqWX8trEZTaRUS7g6rqdHSC9YRCBvHHhdNV4aJajyBU",
  "key6": "5uEYsbYP7wbyd4MFYiSWLxRC5rLMhoRaiW6bwctksnJ9c4rRuv1Unff3QZgVnpR2z95u1sWDyscrtndWaiC8TBp7",
  "key7": "DPw7wfzQb3jPUkDMvYKLJvxS6sgPXSBJFpNWsfjGszka3vVfP4cPL8MzQBhsaJ4knvNnuQ8Y4NjfBRY7HQ6SJnx",
  "key8": "3xExDa5qpT7pQdyfAceLMfGhWkKnyUtf9RyqjzefVwkBN7zNEvM974rcQiYEGyoTXnpuauJN4ZMgYbJwKWyC8m5W",
  "key9": "3hf7jFs5D1sqbsRQjUrKX2n8Wab8ZUR5nkMW686RN3Nz5muP6BHb3YEVdTrXDDTpoMLMyXkL2irdFsneDCJ1aMZk",
  "key10": "32jhjGRzFxzTDMDe7gDWEDwQKXYuXniJjQHhFkGNqvxGbyuBhWckYM8B7f5zZSa2xmErG3Kpwv6oSwn2ua493Vdu",
  "key11": "2bJH2uRNz2CgQUJ2rqGiWkvAkGP1yXuXmRrgxEDv6joLbHhuR7tWbyfjUEhies6Fh5df9Gok5n6Ez2TkAzeVUULy",
  "key12": "2sW7AKvNUc9WXoMVQm9DKu7F1zRRaKtA81ja3m9SCu5bLone6TdDFtdNzdF1oGnzfyG4MzdLDfcVVP5h3qaZmgGc",
  "key13": "5D4LNcRDTRs6XCuy6KegT7Fxm7jYsMWqpUFZ5wMEKtDVBry9ZNqt2QJXynZvjo5k6ZU3XPFYzh4GNZSPt6zkUzyb",
  "key14": "2iajjE2XBZQLnQWLZA3LrgbQVzpPe8484v9E7pgZC9xhSP3bAoToELdtfchRnbkdE7jVdyonYpfJDAAbUzqoE43g",
  "key15": "2vtsnj68ciVTm5MrhXRWb7jyYAAQhGNrduC5pwGTdTjFwKzG62Eskz1AGJDFi6UjMhhzLrwWNuAU3vkaGWqySivR",
  "key16": "qMfTdYxpsUnDh2QekeNBwmp7oNjj5qMmo6CwAFB56bzDzw6YUpNigMXBtTJ8DgjSqM953uXPhLLbsGrc4WvmhYy",
  "key17": "2CwN7DA9oAYjzukCiDJa8TcMaxcUzwDRQfWn8SsQrMP3spWw3UFtjVv3j9mAypTURn55bqpGeHp97v5JD953Mw4C",
  "key18": "59bHBEAPsiZBQWY4aWCzpzkQR7Ls9xVBqpfcVbGS7YsVpaiR6Lpxfg541Hzd1yPQZwyTmqyiMEPxvFeTvLynqAyF",
  "key19": "3Cj5MwDk2Jexyup22tHBtz2XJfFFE541bFWDZVadNXyZN7dk9S7bavTfQb3CBvSZF9ak5hn2amTtWpCDb6ynXLbs",
  "key20": "T2R4EJwNY12koWUK7FE99teadGnDgUkjZbEtUL3C5MDjDwnLYvLCjq8YE4HvT47p5YDCu2U6J5atM8vT5ThfwLp",
  "key21": "5k2ghpnJG47uEs49FFs6R3x4PBkDvvU5XrXStUQQMGYADWrcdSXQ3vaamjcsyAWL4hmu2C7aQgYmmyumJ9nM5wkD",
  "key22": "29MhkPSqrvmX1wwsQG54mkWftPKoaENTxA6LEkDHxfue24RLz2ekm83k69DByu1gXv1fUtpq7kASjzRdKLUSK8gH",
  "key23": "49D2uRQEzMJtNbjqn2iX6LczADqVhN7Gy5cAmR8jakWneFvurnYb9XGgp3GVztDt9B1m9BcW7gYBM1CnvnaSMxmA",
  "key24": "5mKBRqnARknR8k1ee8tq6QNzPZAcpymsqkshM8666GE8g8YJEwFJWB1gsCiyuu95yhDBrJxphNjw57DEFXMCGGXi",
  "key25": "3vgPCsMo9PTa9rA88B1cbTFXaKPX5qEFsTnFaEARCnvMQPRKgAbnNMPQb4HfCLdW55YWFfCTkLDbbDoKtHoUrFZa",
  "key26": "2NsayvNpQtpL4iLmDrnamLoXPq8NVYNvimbH14tAAWVVQZiRQxqt3UsiyMBmPXheHuX2uDQaLcQbhdyB5Xj1aDXB",
  "key27": "3g1ZAGiWfmQCx74Ssi3TsEAE3ibLAC9gHGtZST4X7rA2pcfHvYctxYAidndAaH8S7AWr9UYH4rtfpMWdTk749XWm",
  "key28": "47zfeA6nGEqUngooPhVpXhFYQKDwRLnf1xmYPndLeGpBKfLcGGW4taW91BSjjZrBDDekgGmMtFwDLtvsrr5RM2RB",
  "key29": "5GXpdx2dJtERLqpLsHUVWRfAZ8NXUr9o4jyZpoQtyxYX6CcHa26vfWBfPDn4NdbM8eF7iv9GKCTtZEDViesSBsA",
  "key30": "5GZQgLyJcuVGHghJKS7sczGgeAo4iBrJLZYpgH3MPdMBuR3CVsnHwdV65EgiCzVGr9QayMjLjsCe3rhhwoMqZJgF",
  "key31": "3bi9hjn7krDr11HwUpKQKAMarG4gfF2DdtR62m94tFvpL4eiSELF8YDuBibCq9rg1WoCVXmDBkCYKQL1QhSyjLAm",
  "key32": "62yENZbCE42ygZVhHc6Zwu9PrMNqcCmNpPGUkKi5q7RWbybGMDLGcpXS1qwEQQPV5Mes5UUjoEXkvNQMwmk1Mj7i",
  "key33": "3FuJWjcXMGbunma5jdvK2egogjuyxj8buXLFPsnKFxEVboCuXcy3fmUGndQD6UqXTRxnototi5P6ngniMFVHMfKY",
  "key34": "4ajQgsUrnQueKvcE9ALN2Dc2dgqMcTtkxKmHeeFUqxdkeJjw2iLqe1GXzQLTjXeJvKXpTdMTWqw1nuRD85QpPrCT",
  "key35": "3pW4oDM6V8DVt9RftwfH9UVVnVN4z4on7oLgJbC1QuMfYjsa2z4BsSjb96BTVKdYaj9CJT14tonUgvhiPa5w45gh",
  "key36": "4aBCGd4tvpcyMz7rWAjc4EP29mpibdQCf5QoLyPpTh8xz7NN3QA7kBNUJiZHjLFNnSrgsw6VzyxjRd7cCgV6xxYG",
  "key37": "4XEoqrEha8izXwBDA53uKL7MCv4Nghb72DJwpbz6x7UwsqTiuFMbjvLSzWwXDzcwWuNXxE9o1yTinfAy2YCqbj4r",
  "key38": "kbvsAbFhBWhod4nShTTLcqFRHazQGKWJPutfmeTWY1NCr7dXZYcKdgebjQLZtsFPKwMBH4WLF4FgmYhxwVViS2z",
  "key39": "4v4Gsk8fAnjfGULhGDyPHj27wURGtMCXUHC5edUj48fn2SJRk7g8cMaz9ur2NiDNxARiDVUza65cSmXdhbVdnSsT",
  "key40": "5sBBxDfCcvZupybbrUrHJsNsLbp2H25if9jHk6QgkbrSN1KXFh3yDnGU8RbrkkMwd9XkXUiUjr2GZx4LqqDm4hpX",
  "key41": "5QQGsQZANjjVc8Xm68kJJcQ7f5DrvAx5gWNUb59wdF9MzyxweydSsXYAxsf3RWX19mU6ckgMkPP9t2mVezF53W1A"
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
