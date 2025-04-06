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
    "2U2Z3bfespZmwrF9zHQb1ukkXvHGq6TJNvv1jfzM5sAhnzircPXFb67yGt7ovZkZYdDpufBXhLLvpZkWQojSQLja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQC4yha6SHwdFJUEKRNZqhp5BsAzBT45Hv7YwPu6tMajuBzZcpRaNU9Q3zm81RXbmttiPKbvRNJe3Tq72D9uUos",
  "key1": "4sW9S4mSFehS2P7bVBGChCT2K9YpvJJfX9Nv95rc1RZrc7TAqok633Cz1EWk355yKTpbk98NmDmVqKXvkfZkNAkr",
  "key2": "5qSuqjfDQFiKrPjkS9WvXi9dZFNQRonr2qMMqyUTTmyJ29eyvzpsk9vcg8cqiCnpcDjFhdUdCe4KQTYw9zcJMCbe",
  "key3": "621Uo2uGNK7h5E7ph9V1E7Msajotg4UNKiPof3Aetr6vPm5UWsQn5e6wEysUdSgNSqnZA7LY2R23RjRewRouNQMu",
  "key4": "4QRhtPwFv3V6PGxFpBf9xtCY4AXgBVJF6wLYGun7Ps4YgrAhFqx881FYfBEmb6FxBn2ftTULGDGM2AvEs4LYwf26",
  "key5": "3DKKZuCQWCqN7LiDeedGsueUNJ4psM8e4RRK1upthg8mJaZN2bikFG7d6xox7tTtsA7Hc41PLtbMpYf1ALTRzVsG",
  "key6": "2wqfCh6BYrtrCsxwfJvKed9k84Kr17rEP9CDjZjNkVRatU4NTuJmRjk2LzubmwoQFFY7NC97QwmTeeggVyLTmW8A",
  "key7": "56dxfs7qg4h4HDeyha7LHTW1gv3Jjg3bjRKqcCV2VNWtFhWyVMF89YJK7A5gSqBVJ8SHprsF9iYXVSZafAK1yq7e",
  "key8": "4KkywFYrPJvtTxhDHQyFxA1cYA4z33GGmj9Fr8x22rLRGdhH4wwh3j2LKHgigA9J1E2r5eLSECbsNe7dkjUGQ4bG",
  "key9": "3vSQdpPULfqMicaUiC4wKE1S1Dp6sur1WHinkVL4AmqQNCW3caAN55KsvohBmmNW3azUVG2y43avT69K3oKmwf4K",
  "key10": "4UHnrJoojDaEXvn6gAwJmHVJXYUHmbyxVgiUUk1KneLZGN5pAArdGitVww85rD9mYXrJG7nQa4fZXvTJyasCN7vh",
  "key11": "2w2f77z65RUygRChp4ezawznqc3EjkvpxyUGEMSKHNfALeHNSBs83fc1epkNhTrApgt5GRDeiDedi8MvQiRcFswt",
  "key12": "4nqeJnkM3ybpSR5qaE63mA5Ae43QhrtZo687fGxFny5kSjccNzDGsduuzhcsL1rvbV26qtYbUZ3fECsEAN4k6a1e",
  "key13": "3Cv7qVvoHYzCBJepJMpGXfsakPmdgpqHHQmKrpHqg51CtAsxzqr25SuQQM23W2zoxERhGRQjjJfcChF6nSTHswxq",
  "key14": "4KHFFLznPkWVDeSeCR2aJ1G9MCrHRS4rR1e8EvWD7os9h1NRrN1FwbXdmcYMu5u47fR3yDzHS7LFe6TEWpPaweve",
  "key15": "2fJoyojGczA9Q3MCoiQVg1ZMqsd5W7yYdowLiHdBZ4pX2b7acJSUkXadHJekHPZhAduWUNFHtDS7DYQWB8EF3CDJ",
  "key16": "2Z5f3k6g2GNdB9BzLD7hman8Beu8DqY1MEh359LtEyx8z3fmqrPAERnXFthV4PnKApuAzCzZivtTHC6PVCNPoFPh",
  "key17": "4QZB1NXVj6crTBzpEJCCWNA2euNntJpjkDfLwk3u7VjCVb4bwESiBGjiCdmnfg3C4ZpcNdGp2ZUY7v8FWu9mZNjC",
  "key18": "4gaPjPvR33hcqAS58E3YZjvtRTjSCwWz1L9fedGdZo5weYk17M5CJDKAgu3Tu81Wm8Uvis16irq6qyLD6ophwFka",
  "key19": "339d4HLqZju7r8ASZ3rQbB8Q5ZBZCWbh4V6Zq2T9xUztg6NkSjV1qLLv8P9CXqDBVNBt8iyTDMYSpDcSNAp1Kbho",
  "key20": "4BdtPo4SR3jBXayJvwyYZYk766MseBFwWdCNWNPG4LkjHy6NitiMppKDQ6tKyHnwYaN4hTKCsqmSDq9guj62mw5Q",
  "key21": "243STyA8RKQsDkzJJhH8ekezcuPoJf45ermxgdgYwWT6i9kGZ7VYKzJUyzhtfxH5coWG6djfCCZhbYNfucTaQ4ut",
  "key22": "623hwSDxLw5cGskM3NvUJc3Hx8S9Q8FsNWW2NZYpnEymF7SshM83FiJnSJ6tewnEoX1AQo9Z894ipjprFfoYFthw",
  "key23": "4t4takhS3EyhYRGvbwpsTQX8iyxdXcKR9KgNainDPzAtyNZ2prPGz41R3quuzaKqmc2HvCHdgwbUA3jpqJxYJHCt",
  "key24": "zeKDJZkEzGsJyNzBgutJtb6fvfoohr1ibneR9cT5jZmYoABFo8AorzK1w3x783QyUrPHqx8PkvNzqY9G2KyDVK5",
  "key25": "45nYkQH7LTEWHdZJ9GGyVH6y72VmdwHvdWJHK3VcLPc5yhedoU1HDFDfAfq9gPYEMAQRugGXYCxHX6TJtKhwK35k",
  "key26": "3AQGoSaMZkWryrTjbj91wFstjzeCtcCw6WwjxPSnfQLKUJpTDnkZbebWyu7CWhUSPqVSTJgA1LucxxzKBStEbU5e",
  "key27": "2E6jxLnWnqfiYxoesWM7EDGtVg1PFcs6bk29hw2PEVqBriGEZaoqCsCYJpVQTL8g4fRx93RvLvvFHiR669unQEVx",
  "key28": "jH9AicwenkXnpfBDRCE15cx6gP2nEm36TiJrePBLLMu7A1NcrVUcU4hZw9DrzPb6KFR14dWdfswPgQ5RgE6U2gD",
  "key29": "2BQNgeXC29FnukSKYELoCrFdyWgWSezx3hbqoG8Y63rzjJT1b3YYm45EgBbAoTfRo16nhExmNYcLKsY19t86A6ix",
  "key30": "5YTMeQa3nuxCLr5dUytMVv1JXCi228boD7odmxZTjBvusDp4rTuEBQSLw5tdA5si65HMyGWWvo1P7tWoiiooiTia",
  "key31": "NedMyqPPAGx6pQ9YfUHWhgUmPzHbPG8SZCHjgxpASh2zG5mz8VYAZhWng1wADszu26a8VWRCxPX6DQXFMXP2zxp",
  "key32": "58PbhHV1nSMHQACCp3eYY2iyNeFZXDWcoyZCuqUUm9YRL9jfN2LoUgEWtQYRBjJnJGAf36XZDoEQTp4997oM9uBA",
  "key33": "5ECL4LcBudbHVjby8vzSGX6coYVGWUPJLERfTjhrue4D9eNfshkvhLj3Ssr9MBbb81quUiEc7oFBmtrdJM9o4YVE",
  "key34": "5bVxA4wbyd3GvSVjVUsFa5YZDiRw5CXz29kF3Luw26cFL3hSkX5kLvmdBmuG8Dsvm47w6nL9yzuPYWu5xJyHca19",
  "key35": "ySMpBEukQjiP9m4nGpogGgF2BTfXp71uH5fdvzU8HxCxCWeQp6Yzu8cjBD6sUZKwdh9C1JDv8i1PwCnuJ6MzAEB"
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
