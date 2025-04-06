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
    "4JydCMixGNRhyhvDzXupeCp14H3HDXfhaaRUC5WzZd4wksLUP9pS2tHcY2rTxZzeqctCqGa6WpswBDAzd61Wn7CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5so6LdytU3tLGqLr5CwKgKxHQRcwLUzAYDghyqjcQL33KsMkickTbV1JmuGkNKrVsXiNZU4z8Jw2FFMa4GGZvtx3",
  "key1": "3tDczYVbQv5Ms8JsRexHap4pRuxNihmuoZYyQ9CrAhd6BcDaDWiRiB8vpAUNCLa2rwdDTfy3JFmv2gWJuDrmVnkG",
  "key2": "2LdSxBYUWVgeUGVKtc7eLWK13n3p83APMwu3yQByNUGhxpD2kYTTy5EJxMQtw5k84FSjDdzQqyo62iWx3guXGHDR",
  "key3": "2hTayeudHQoRSc3Y48rRx1tVWc3vjG8YmQ1bz4abdfUNe5pEWPLvR3cxspXrJDaHeBeut48r4oXrnaMG2mcjWTco",
  "key4": "Ax4RTdxqCteZFbkvYzGfqHcBqYRLb3euhZBsNbneqaL4sSSpHTSki4keVG24G1wfdSjP6xCqfURJioQqwmw3vGP",
  "key5": "45e12FJigNFS2PL3pNzHPPYsdMnhQURJUu9joTo8tNiY7udm1krUPXYfPDCLAjbzYtc71VQhR6qHbX87vAMidVdZ",
  "key6": "35G28fijJKNH9VCUUmtk31sYKWPqxWRa3okYvZ29oAJKtGEi1Xf6vH3uf4XQGCszc3zqjcPSRpa53sKZkrPjJW25",
  "key7": "5xFKeUua55msRohRTGkRCLbs5s3ABoTTQFauwCnbE5jPPvaE7kBsnZTZsCwxHVvMgsgNQjWReVHUYKmnMNaJcMVQ",
  "key8": "2ifbpH7roHxiR6XLpPvfxXvDpuEGHByiAATaet2YYq4LgA28tPRgbBpnt1q6kAfL2VrbD9ZK1iWqzdWZ5hQEAUgj",
  "key9": "vBRtX1QMhZdGVqkHzJtZUJszdkG3mpeCLEWTc5x6DvF13ww1EXDgQfSjCqej3wJrXv5rLSkAmjydA6FHUuhahGp",
  "key10": "2JWqtk1DysFStp7rbVc7iihPnQ7AqjefMLPD1wFWSm4b4KkQHBdtEq6qqTvxJSoV7HPC7BiJTbG6NVLtpx13cett",
  "key11": "64szcZwwfJSWj4kJrvXaCQ6fMScFFj4bhx6vYbLB8FTe63ZPy2mCHqQR9Gsvkw1cekBLRSuLju9MbxFLbFYoJf5V",
  "key12": "2aRUkxDD81WwgAEXs7xnywr1D36VRcjx6N7JTLu8ePuoLL6SSxZREsQvdrQQt1FwH4mu8YVvypJryY6zdxvWf8JJ",
  "key13": "227xx385afjenitsN5SWJHMbfZjMh8xHRb1vGQS8oNBcPpNDMdWmxfeUnVT9SDGJZ3jFCAGHGNUHttGUJqywQav7",
  "key14": "4FvYBz4NPT23cLjETet8kuqmBhXwSvjwEVq83vKfyQoC4Y5dG4NMDPar8mbtezkp1n7Wj7VYmvHgfhKRihVy4n6j",
  "key15": "3inV8doLcEa5KRdogYUZBYR62BziwYoZcyXwdHDFVWh14Eqm7HuHeNeMLRTuX3k2pMHLRNkz9geEnroz31SMPz3d",
  "key16": "5J3qAUhFS53ry1U26kTy7ssdznVQZtEpbzvNXUzbvqpTFGhLTSmWFg4hkNniy42TLjSo9n6t6Qhff9PgyqCrMzEy",
  "key17": "UJfkxU5kvoJL7XsdzZZB2ERnkJTUfxyBGezRiJfm3j2wu4wo1MdNbyn2ABoA3EdDs9zgaxNAwaHXd3vDhwQNu97",
  "key18": "43yZUXFoit398ktxGdVMMb3td8DfD5G6U8CWLeoNH2hUTz1eGNLXwtrYLXZwDZWuC7vZt34SrwXRivkNVuCS8644",
  "key19": "58HYuRadfgDYvTCjwDRu9ExPY1CBGckxBcEHiDtrZVGKbvEqs1GdwbS9fqxcNWQ2XK1T3dor5NJErX7xDdzLjf7m",
  "key20": "4bdaFFymhwkNaVxsBRGMctNnYvmHSDqUGp8Mc3yqVVpKsZwEmv55H3hpjNEvCvw27DgWsiofcD7AnRLD5i5JqTwn",
  "key21": "2XNMTqT6jgMohU47Kvg3B5zYa8M8q4KbMdHtdSDKfowjVFHUG82SyBiZnVFm8G28UUTEkgcXKo9ANkDBovjT1jsU",
  "key22": "51hN5sRQ2jy5CmR64vTpQ4RDEGNmECxuFCpxb6vjgv2HdW7m6HiSViZYpWzU8HunaqqdsTwxnHR4kNibfHzYGnbV",
  "key23": "2aB3zxsmV1QBMLZuXdwPS6H4kstDa2hYiAfppaJzrv47pR1wjGvXWEkA4xnMcbdHjj8ysKDer2QWZ3LtGAWnPTG7",
  "key24": "47pU9CoJRmwwzav6oKeRT82C32SQJph2qCtd2Z9cfTYdZwkiXxUxFHvayB6ZRk1Zc8CGk8iHczj11cDj24osd4Ai",
  "key25": "wRQiodwheX7DsE2pBD6VU3qHsjYD2CQ8onX8viotBnZeUr7pdrbRYSCaYDH4RSyFZ3CweMcVHH2cWrMcRKtWLTG",
  "key26": "4zCTci1qXQe27axZSNjs4HLGHvVYhVqBTBo2RHbEMkjSSmGrsgMQE5qKc268B3iRzkvXaJJpmJQqvjZFpq6Hosk7",
  "key27": "ydgTtKRGPe94NaX2FWmQMDqkvQ1FR6xvJL4CzZpr1Lau3E9wtPpLPznmE1f8eNBHNXhLLWhBxPKDrPSeVSnRfm4",
  "key28": "5DXxaXgPErBpfRRXPQHPKwA83pnvF2LpzjBTesmFCVXQowNFDmk37SCHVPvhnPGdAkXxamam54fyw3cZyiMdiTbu",
  "key29": "LnQiErv87t5bqNTDicEBx2aXf5usAwKuBg6jD3CxtSEmozHB2ykGfEQPNn2SaBKBDoiAsesPxd3aBGLWccPAZdE",
  "key30": "7xdYTXuW1wvEkaGUsa13ug18sB3pUJ919Rr6Fmmj2qNpG98Hu4fWDwuG5uVvZvkGWFSizupeAgZda68HRVwZoGL",
  "key31": "4FjCtUMqQC1viVm2Yv9mmNHLUXhV2A8mzW3j7yEmcUGfQ3TE2kpmaHQzVx41f7zeau3bMidPQ8cHfpmh4u9LhqDv",
  "key32": "4PPxJZH5Yt1EhMBuw7D2HodWgfzgMV9V2a2gwLE8SMhDKmKbj8vGjzGe2sdetpb3aZJtNWrXewwz14D97uqsLmJt",
  "key33": "A5nMb5eZYagbdzQy7NVJjUwhVswA2r7xWBk6QiDJRrbZ7vpqeDufzFY6deK2nuHBhyMbX7jrEeDpYZiHnT2HJ8a"
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
