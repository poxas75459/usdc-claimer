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
    "4331fQ9dU1bBoxWnwo8Y51pJhpg8Uyzmc33fvAHaCcSssaoxBM5X6HcP398CywEc9XhpLUi64TyP5CfPXVsLv6s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zquh3uvtU983XCh61ZAKwGzxpBvJZPeQaqSisPPF6FERo6rKcaWuHeHnMjoZjBYG17g3HhgMmkaKbm9mEVCPfga",
  "key1": "cUr9SY7pzve4Z78KQ8fmKDACJK75ab8X5CrfBV4vPvxQuDB7k31XVfCz7PNi5288RGhnEkYSXK6GtiaNLemG8SV",
  "key2": "KWVbJnNah48AbNovTkBQ2F9ZLwTtnvekFZ9NHb79FWkdn32fTiyDD7DDbiMFRapVXaPG6gBqVZeM5XSSEoP3ma4",
  "key3": "2Kpi1sH96CbuzQMmqPzEhJyhSnEvprcpo4xcENyftT6ekTSmBx8khyW7RrqHAMunrWN34WmqUArHLJk7zLUScb75",
  "key4": "4H4SYs1sDBYahCdtDQMR1RktK7V9dAFaTgZhZ6WFV6DLqf1YVE9zg9NEuREKcr6nFWCsWhkHbkgarow6GVKhhen7",
  "key5": "AJs6BL3LdGncvZtdTXCA6DGHMm7GTcbgnJmnLa2RXBsjqmv6sWpXHsCyFdYCT7c81wypw7cHJruWrmQvWJw38QW",
  "key6": "49XD2cHgvo5DZc81AHCiCotv7dX3NztBquBmDVG9Bj3gvVdNuR6BCXRpwYdf4svt5DBevqps8K85jSCptDRgkyZo",
  "key7": "26y77Uj9yHcrNMapY2LBFma8E2Rs2CSWzFJbwi81A34Aovxu1bJJvaqBJSHAbnvwrB7wDF89QFYTNX9jundjX2zH",
  "key8": "4CyfTwvfE8iF6APPhQoVqGPBQNbo5QQMDNrv5YiQh1KHk1MYyotVt5z9xn5XUGAAxJGFexX9XWjtR4JHJh37m6XR",
  "key9": "2xUoXykvJBgeoXKk8ibYf8QusFWK5YWiU1ZHJBqEsD71nSmsKtHAWbw3QVjkmJAYSLuuPbbxd74bE1UwBNgD7qXt",
  "key10": "4nmHWsUBaFNFwV7Tu8qPPjhFw2T5TD4mL3fwV9BqX1PviXbcyaH4QxbNBXTuSYXbt48ZyuhbftwFzen6dRZK5ahT",
  "key11": "5yBGTgVet2EcxT2WMsqSwbZjgiCQaaf6KHqGik6Dur5mXXBiG55ntfg7tQGHum9YRZ1uDpcScaHJGJuPW3VkFHX6",
  "key12": "4pV2GMZr7K9tm2fwZqFerir3NZVd3waJNmeeYwYbquC2F8GSEHzFrP2W7U7h1t9WWaHjo2ZnxUe21484nAjnLKpC",
  "key13": "4WudvULw86UieNuhqqdi4nJgJq46Xbx7P5aq6pw6Qox6kAAutG6PGwyXTHym1f1K6kVKzLQYipkSJf7Bnj8cspr8",
  "key14": "2C5mmbd8e5f9fkjufLr5www3QfBEJYgTDymoAMtD7bRgBSDpsNCnuWUB7191MV4mcrp4eZFZy2aHL5PZieNTwm42",
  "key15": "u25LtfFVZV8fyMHFPSTwYg9j8nnhBdepomu7jthEgWaFUQUbBNggBjigC8aqzWVieJNfCxfsqz4wn6heDv924we",
  "key16": "6733ssXhyf4qRUX2hN624ENRWMwottXzRG13bQ8h7DGPphEvT9DX97C8PNwsqcUXAA5uj1yj3AAi3c5Sm82jrKEq",
  "key17": "5o2hZc4dGZcKMv5psEEU9wMjeXWzc3eWfLymyLRcjATmiNGePAsmQz7LYANQvWaF5HJhejsZUW3hFhP1vdPNQQkS",
  "key18": "4kexd9eC6kYjZ3Vw1Cjh5rea6yiKHvbXoJ56w6qycZtP3VqitR9X3sCpWLMFphUFoeMtbNrCb9hRnMvb5hfVnPYT",
  "key19": "4xsZnPfaLH2AdqLTHczKrdWZcbdtMELt91hTfRvwwmWcrfNG6Y47jJDuG8cPRNv9hyGeBdCxBb4LPpeEhsRXEbAT",
  "key20": "5oF4NfAFPLGDBP1Tgjaoaq9xU1pAPvouFRmAFQ7sUcutqUoAf9XF7xXhQ9f21hipKLDn6pQsp2GMZpNQfK2JkXy9",
  "key21": "2NMCk2FbQYgWF4kCsL8BL2wvnifUVGthtmRFj3jUt26h1b6n5kEbnSEfNoTgSmkyVLhJfB25SnizMg1Y4gVdwjQe",
  "key22": "Mi8m6hR22Ygv4bCELWNeUSgtgKy6dW4KzkW4rWBgxaEWQeJTU7zaQyPJ8NaYEqv2MkvKUbmB8XRmZSjimAEqwmX",
  "key23": "75WE4yRQRqp1ofjp31kaeyn6gCb8L6pziL5XHVZ19tgdu63B1hRJ3ekc5ATPGKHbr4uSXudiqQEwLbfdJSYDZY1",
  "key24": "2WTQaAjiVg5m1M1EjAdhfWNY8TM4jT2yiyxkGRNxW7N3m3qHX4b48d2h9v9T2ohUpKAwTmL9qoFX8XyPz69A3cfs",
  "key25": "4d5rqzyQBb4Jx6qFa5oNcA6aAc6PiKETd1gq7EHCTJXYd6gnsnShDhVJ3uax48JXujyGj4vLAnARmVSSmDiDMyZY",
  "key26": "g1An7UUKCTJ6cmDynGDbKXMSLxymin6KaPUPB5iCSmvK6xCHesVoTNsCgeZHQ6AV8HhpBSZjYGMDTWwbNungg9j",
  "key27": "4NFa8PZG9FFzYaVva94aiFu9cUL4jfcg3evnsGT1f9TqsR3ERCSFPaf8a4jZ3PQw1U5uEKvThsmVyd4TGVNBgdvy",
  "key28": "5ko41Unh8DiHrQtRjCUQjzbK8K2DQQLmazX1xecepATPkpGLcjgthrZS13hwm38BcQYFuHsr97g8MakwP8eoau7Z",
  "key29": "4yGAN9foQJoWqjZszHrkh6XTgAUczxek5pNYuCbL5Xkk1bXUtWrUkhCRR4FrNegP92WD1AGqN9zYVWbRUm2rYWfk",
  "key30": "AksKvkDzp9atue6tXDPdzjECFP3wzJPqW4GFxLR1m9Fa8DmuDpUdRSjVYmSqgvQLATMMjjneiNtMdKbRNjQFnV6",
  "key31": "2cUmWPb5bJepb8DBaBcyqWD4zcs6ahTZzo8Swd4tdpKpPucTuNTRTbgtL8x3Z94ZHeEx9Tr2hXYYtyQVkZYTGqJX",
  "key32": "1rpkaHBeeRs6s1AAwYQDs9UiXMV9PsSUpCvWdp14jYDCBPzRid7WbJRBTs9iwqNrh3XkV9Ns39TJES9uFjydiXe",
  "key33": "4rDSGa7tA16BRSobMCujUpoqYpUpC4J62U4fmzhgNNPVVMamJjXBHQPoP8ZmMvnQoKNK3uKuLLqvgZCvE8ymkb7h",
  "key34": "4JPe1wt9WBz4YKLNzGECGQRxHP8Bd8EDAVEvzfpjtJApVD4tQDnLWkvhQorokXGMmXKEehyGV637oY5RgTEfpavs",
  "key35": "4FxGsTPbp5A9dCnijSYkw8AypNUfeJENnyiDa426dDmtx26Ae6GbZeMriL8eGuZ95sqTLwgfe5amcCL69h4w4P21",
  "key36": "5VypcAHzZ5uWcxF72Taj4gkunqtY6L75qXPVk3qyiqAz1LGzFpczw1omiToGRK2oHfCQMJUbyoVfe4emfoKeca38",
  "key37": "3PNT3nx5ezjgXTVHBAA1so5BKh2LHcuYZpksoEAizY5ftiM43mXxiNKEEAnGGx7XZEsNY62dQrQqJUGfF4M4W9E1",
  "key38": "44yBgBr721WwkRratZ1m1B3q6uhHAjF6whncCNiyyyea1jn8jeryVGHwY4hHi63VzaQomijxVdRdaxcaVHNCa6X5"
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
