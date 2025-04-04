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
    "V8oETYuyNqqfrem2XtrFaqweqHf6MUoTAdaeZQLniNUZbNoypeWGU8napZDP7WAncQQ8Ep6WP4sqDexhvXmsPSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdXMEKPX8z6USBucAksphgw8WTi9SJju5W8Q5PhWQW9zX4nawQq8zy9T5sFhnCV5rCc1tUjx9kAdQxwS6fK2sa5",
  "key1": "5KaQdHbBKD2K3poCZr4tKLkBV6YBnuoq6HuqrVmVcKZ9uCDm364JDhnQpoazkYMm9vaSU5V8Bokj7H8TxQy33t4j",
  "key2": "aQxVZ1nLgZF8HdmaFTjqtDojMbu59ycuxFy7PMEZeDpfwHjbRi17T9RD4X3Wt3iP62mqcZ28Vg6K1ydZquP4LD7",
  "key3": "4niffFYKjhRoTgxpuopZKUyrvhiC9fXseZwiRZCraVd8DVxQ89xCfmr4bq2BdSLHgJ1veB73JEiUudMEBU1zKHh",
  "key4": "2D2gX3RQpQzwZ2XC7tBuyqYGQEUCQnxBV7fnRGTKh97XCLxJEZ5kvseEHBmHyT5xj62Aw72Aj2PNGNu2xB7WbijA",
  "key5": "3NpLXSYXKswUn3XsBK2WED3NfGum2HfoHrBmvNU3BFGC2T1ipcaXsfhrds3pjjoQcp7hmBphPoTW6qQqSJamBAGo",
  "key6": "tPjYtx8p7oW8ZVdLnEzwnSZJi6JJnCjMn8jXhnKZKpf2L5cLE9UmTAGASU2aMRXhTjqLuDSsYZyY8q5Hz6Votqh",
  "key7": "3xTu8TZc9KrD8wpETYabdfANLjzD29cvArZMfNmeCipDDEooC9b7XUWcxnBSRCQjGa2NGeykwDPCqYefh3w2KusZ",
  "key8": "RGBGRmNrwYaYsb6Cx2J2bsAzWQeiPi978bqnT1pQzwxygYkLET6bpZ13g56ocb65e9mscUC19gPvQZzkhPGHqmx",
  "key9": "xfuvaDP5q66cEy2LMkPrUi22veQWokZTZqMYryQGraXA7WzQQT9VAZWSLR6H4mVCECJgfRhZzm8dtzrbhPvfFrf",
  "key10": "25S3iZoA5mjNv8bRZkgy5vPue5rLnXBVwC7CXdKE1gJTBBbNkgjXCP72fD77UywcD7WBtAmtfk9YfKdvWuEMFGBd",
  "key11": "3ukyMgqY7VLeGTfT7hfGx5jTZfiyrp6MV6pUD2LCpJ6n9ju7mSy221oZu5qGU33MB23VTWGfBSVqMoeuwEMbcywS",
  "key12": "tpsrdsDzhLuZpUB4Nco7DKCWTmJuZQpUUowmh8LS61MSvy5Dw2rccGV89bL6honFnDZVyLjwk4MLSDAeLeSqn3b",
  "key13": "3jwEayksSSUmLD23gKteHuFb91vDQvVxja7TtUJYAdALK6ZRhApRptj2pEP5UiDNokJVJ1oSUQVvj2MUPJbXQfzv",
  "key14": "2SXzmZJ7ddoThJkJqxWQAs62Bd2nfKZ6o7vSBhXsQBHJJ3RfiaDYR3gBdDF5raTy56492Nqj6pQqzrN4FrqG5WED",
  "key15": "2zdBMai4mhJgNmpaQcAYENChmShhSvBYzYt7zs1VZ2iCLzuj6TRtVu8stJuZ8jJeLq1y33oPJmDmqVAhFWfjm6cG",
  "key16": "3E8v2mkGVedWQs8hX1hU2JfCjfi5bJ6g9yx9vPhzdX2afrxdxudtqtXjvvARxcx5fXA47SizDeEnsB3aygM33v21",
  "key17": "2r98BDXiYnfrdYRdWzejSa1wdWskGupASoQquxeXAPbvCgFKiJGkdVCnGaZ9r1eNHVEwMbZ87VSmNA8dUVpRwyn1",
  "key18": "21vFYba5MaKDNFfZxaYH49PNhJVJqmm7UVyGFLytnQhyzxZAiGVJycvUEy2XicMHTT6BP15yWF4kt29RwmR3oULs",
  "key19": "5FS5hvKevJuZ6e9HaTnu73CJiRs9rUAtFViSeHKgVFuQRBUj14dvx7XyXANzEaoCx4ct2wncme4sJtPBQrV7gHga",
  "key20": "4iCkeaH14xE6BehX728ntEYkfTigbZSATfNVWdkZTw1oBQFKmsM72bDxkgMDmKC4QSJCdqzhW4csCWmLqvpsxCcA",
  "key21": "3ncyWPtu2V2JU87aiRE5zRTQH51uftnXoGE5tA4K1kxmahE89VsRGd89o1bCyANmmen1yVXbE1gbMazYnzNityWS",
  "key22": "4nLyodS7twBYZvQxpCocMV7EfMDczmCmYzT3GZWqDWfPkxppPcYfWJYnsLyctq41PsY1c9QY8EU2GehL7GSxc8jG",
  "key23": "2tf7Do2VaK6KAhhrZgxb9ZY29aMHf9frzBEMBVpeSMbmDtETUpmTyTRfDjVk2CfjiZcFTEqGcc114TB9RZDZtsN3",
  "key24": "5aBTBnCZTvoEYujwXzQ2yzvfv22UmCBuE4d7E6FjK2tWuyrboQ6ZhLuX7ntEJZLLLDuTVsg7YNc19VUZTBHRk1eM",
  "key25": "4N6XNvcrT6tCFjkZ6D5rezLxCfjRAQmNueaQpoexLGTwqWSHiSQxVLKsqeYXEGzLFTrPGy7xmmfPbSiFtP6uXaUC",
  "key26": "3qfc7TwVg5TDcC5B2jVtjJnAVK12fZE8V1EXKsi5ZFH9rYqPEgWCYgzoY98pbHhcr1bUVGqsRYQ9MgW77YN1SRo7",
  "key27": "5vMpDmUa2T3S5rRKo6pXLthKRr93HzygPhHwiRNS7HXPFDNQMbUXBdFH4baa1KozzAfTovkE62ApAqEpbpdL7A3v",
  "key28": "671MJzVkUpkFzfR6yDWbDt2vsbLJ36gdmP84AJktywxshVJ4dA35zy9G34bZoGVGPB8wb694Vef7nsPpkE77G7fy",
  "key29": "517jnWkdsmaFeaN8RMPVs3cbaVWY4s1Xv2QEP7NLERWNaWwar22FcFcfScQyRtAZD1rkrPuF4ARuTb9A7ughNDgn",
  "key30": "trrizNXkzHvDsWS5NkjWuA7iFKQGF3VQUMKRc2GMMagzpeRPuwRmCzkTE723bgyFjrRTh6hNW4gCD5pnb6Bc77p",
  "key31": "2LpfwX85E9fdqBfvjYyUmL8LhaV9TmrVWFZXbf4VzJ2RBVjXCCNhY5tDUnotKqt6S3eaECex6e9711byF3nFsV9Z",
  "key32": "3SoE35QiRy3vyiuZZB4CLVoL2ERef1uzsktuw7z9r4cVRKmhDX3TbQBMxKXV2nx2Jj7jVNL5yRMD1rKVjZgYvr3c",
  "key33": "5ongX1LoPtGpyGNjmwt5LKu3FgJpGz8Jt7qDDG1DhtewhCAaaCPtMhE1RDMvatz8w1JtCUY7jyCNcBiVBXtzvhhU",
  "key34": "2HKNBobn9hsybm4bCWCV714WuWb3brw64ug4ugCvvit5MaLTBJACCFGheGGDtXZyNNj2fCsHCE44C2qAHqcbK74W",
  "key35": "48GK6VL6V2iVK4mzS4iULT6JqZXYAZFsULzasA3morp8CmcpLNL5BNxo5EQXEzTncAnDSsL9Yy65oCDm56sN7cpb",
  "key36": "3896k7E8W5LwvPHaVczrHBRtH5rNjspjV4v7BCB5jgByyHFFycqrubUREz7QbmHxM14FS1R2sMLfQjmLcyCbcZA5",
  "key37": "64ZcJofu2unFMj1GsK9f2fJE1du8nJpm4bZuRyC6Le8ArHGiuyubtMoj1kL4i6JG3w2cvjxkersRsRpVSkttNvAp",
  "key38": "2KvA9Mpt3Ni5yU99PayxUKcUpbue3PT6WhiTGVuqC7eHY1uHqhxhkhrMh8NUtkHoNDACF94TKWovtdQika9AugF5",
  "key39": "3AWwh7sKrm3Kz5Umm3qRBaNGTFrgWKEN3bQBKbjhLUdUMYgwuN6qKuDsokoVZaecYXD4V7zcw84kjvtQjzejj46D"
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
