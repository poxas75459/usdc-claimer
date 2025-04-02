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
    "2u9yLudGAbVCfEQED34v5C1rBxUCsxeEfzUm7xnJVwjRFvsXJWs1PhRVJvPpBvCiBaW3nfNfEyzjpZbDtzks5cND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtCobZntKkZiWc7LN8hFDHw3t5AeTFaR9UkzHerAhqNmfeb8JggnLnwEmbTJ63XqgdY1seucwPibYBnLcaD52nR",
  "key1": "5iuu6YtskCD9K4EDKXmfp8bw6yqfxdfSpmSH2uU9hA81CyFUMVoRRDcBJEXxPPRffZYgFqWuUaqERK2HsqDkMEiY",
  "key2": "2FxS1RiYHmqiGJrCrTqBMReYPwaRqGRUFPKGt3Hq4DzZAViDfV8sAZhunJCrUVatwCSVg5wsmfz4NBpFiu3EjJKS",
  "key3": "2g8E7q9EpASUkxySEzjdKDiym16pkGY4QmaV28ayn3syvXaLkfW9PV7KHECfPKSxAVUEHnoUjynJJfoCmPbkidWZ",
  "key4": "2bs3gCbiHUMQcHR54tHjqzKrmjTvcj3zrYNnQdXV3vqXgkuHC2CSVc6WuN2aYHQVMKgooK2CCWtBaMa2jBkTtjpS",
  "key5": "3MR4BgwBpw1Mez819ocJUGXqrKC3LLTEMFSKzskbxvtb2qcGULAVXHAEewoKSYgpc25GGYcPSRH5CYeXbcZTn6vx",
  "key6": "4rxHWa4SE8dNsP67svZTLbYXd18K3JbQHD2xhekM9BTSdS6qBU1G62Mrczd3ZDhVxiSDRuHaQspVwLYayeAuoGKr",
  "key7": "46jD5hr3JXchygHKiTGrAcKiYTL2Vea43oEwLTCSWQEKAVaUyQgDNPV9ozBABttKx9SkwbgY36sUjXoQJYKYwNhQ",
  "key8": "AAGWyh7N4NRwWKaygP3CKpQHLKV3tQzcFRaTwUbRyABxqvdkXeoYKyQm5cZnHbWgaXSpSHEYM5xuBVk6xuqwoUe",
  "key9": "4B9xZ4K81v1ud3bL7kA5yv8tMsaTiycSZMLHwxfqkXmzksGeMLvzkJxB9UHW9QhzK1uuN4dkbFjufy4wwcX4hEfm",
  "key10": "4V3o2URBWkw4QnLSj49keYAgJEPYA4z8kcpLv7zPpKgR5qxkLvLEw1eXcC7Zg7zTYnBjxS5m1PzVz42eKVnnEfTm",
  "key11": "2yNne3YUUDWsdCd2a7voDDWbB6ste5mnkgG1UqDDhsWL6bfLSsAeREw6XgBpuxmX3ugtCtFmRHSERmvGrf1tF5e9",
  "key12": "SPEGMRUxMmWydbsEiHYfhCEoXPwzxbr7iWYfL75eh55QY8daEXvZCahc5RP9dTtjckMqVzmX2sdyMd3VUhvqBJZ",
  "key13": "28ZoLd6BUzc4mxDtTqS93VVqgGXYxJkjn3U3MWFFuBmKU5Hsg7V1dVQerbue34jb8qGMgwCaTsctWZd9yHcZKMk7",
  "key14": "hVRn55UTLNxZVt3aB99vm8QpL1fiAtTaAURVBSLGjaMh4V3EJJYhVV1fnCeW94Ydq32oKCiGCGFLFskpmGBzM3m",
  "key15": "5gbaXPge1YeLu7HbMmfuGCP9in8YeSev41BHV1c8UHv8MXGbmStaaZtbsNMq8PVPdLKK4Mu8V6gZrfYSEr9RzLAE",
  "key16": "3r6iQu8NjCsnikYcf5Jg8mncB9ExGsdh8V8fGw22juCh6TK6jYtcp5Yxmt9XD95PwMX7UGn4kovUnpMJvZFMZhNw",
  "key17": "48h9J6GV2BZ6nf2fKpV64v3qMjLHvrAWKWV6EvPKGn143XT1Z9z6ziAvsN47SH9F7vZEqBNXb92S8WucnbvM1mu7",
  "key18": "5Jj8y3P6jmyroKYamqT9HiHR1w77TmeqBv2EpfcBmgCdGCac2Yy4WE2JeGAY1DYXu7e44AUYJUzc7oo7iG4R7nji",
  "key19": "5pi2SaoANHVyot7o37PHPgrouKG6uZU7vZ23BntqrD3KRdxtHy7jwV8SnMWVT8d3roQT8LENNvxkhLB7rPEUnKC5",
  "key20": "LkjaNLYV6v6oRvigESM4YRQkAaQYCM4XMdJfUjquZV16pDeDAC9fKyE4MvEAD34x8HBtTHshT2iMrZ7S2rc3bBn",
  "key21": "358QYmgvek6vTdTe3Jy6XZzQhxxJzTH8Wg8JRA282sTnjJxzbr5Uf4Hbk6KMeY2KgwKXbBTDnERKT9Z6Y8vKVh3a",
  "key22": "EkgNmrZp9yfNG1LyHEWGg1Gz6FWxMLzfWQCHugbP842xHbvBdvc43hTd9Bs26JFRzYW74Q718dJJs97zr1vVT3x",
  "key23": "5vKNBPT1n9ZcnzDmeYqnRCtE4XDHVEADPCJdZGPhLTssfhKjSKRm7eG2smfRrcqF1VLsWR21mHN9XaCkjXeyWNDK",
  "key24": "JCfCe7HPszzU5YhqTWrpt1YzfM8MoJB29pdqrSWdaboub5J5uHfVusqSriPKMsf9U2Lg4RdR2sCMf6pVjZmhu7T",
  "key25": "2XWGKfDWKdZvhyQvYuC8He9zyngyydEpskMcJmcePoFNpU2sbMGYXhv4eNkqgcmKdUHmtH544HEHJbw3YrbBHKPQ",
  "key26": "5R4gU5zXG1m8epAfw9gUaXQ73TeztSBdbCG68QPH83FbmMHU794NP3nPPP2v44cTFjyrcRt1AX39ZAbLoDnPP6E7",
  "key27": "2cxqUCuVtBQ78bsrwJ4GHRczcmr263erQgstAmLfbMV7dju5AfezktK44Lb51b66D2he5SPGtQfmmjuNP4Agdvk9",
  "key28": "23hVrzjE2jwpPfiLzzaUzzoeN8zSvjCooFLuL1RQma5kDhg9E9WGXhA7XbTUrgZqxhkSmo4V8zngnMhXQvD1c3ki",
  "key29": "3EJ54tgDo2QErmWrELfdTZ2ZqPuYoK672NoCVawdbeQYb5sTHpEzfY7VpHJTzkucZdScVZFw1RKiYJYQzcHNGHLb",
  "key30": "53ofsxRvaU4vRhMHNLPN2ZpiE926XfFJrFRDRDy2PTKbeVVc4qBad5sq7kQoefbhpTjVAMLqrS2EUbkwKKr3e3gU",
  "key31": "5mPCHbvgYspps6BdkdGRwFGFZ5VKYzt7PYHYu8nBEUboiNENRnhbdoe7toPEjFTM4qcteUW6X7BCiEixgw7Fc5T2",
  "key32": "64bvf1zGMN34wopLfgTPQVCnetwP5ahmFbhWbphsC1wrdkKRFY1MfRYAm78C4k7KpxA3ooKY5a9VEQ4Eu2nTWRKH",
  "key33": "1DjaEFSFK6AU5H4En8NyzMAYxsotzFgCFC7bGHH6VXjy7eiFFp58uXGd51sUyL7w8c1wzguW7JnSvUpqf4XxY2P",
  "key34": "5aFZ4FekU7d1cQvvp33Awt6qLy3cp5m2hpqJ5WfejWk9opfZcCUE2jo8e7Z8YJWznj5EAQQXttt6aXHkDuwUhNjL",
  "key35": "2JUukKRh2kEkx9T6jm9NMh9KmqcxHTXVYgvgt67dSYDXfA1U5YrZv6NbZr2BoJ6kERMnvPPG5Xd3Pkg4qYYiXkbK",
  "key36": "5bPyRB2Ygi8S8kaMPuAqM8cuxqKF9qu3NHWX6TbfRLPSkXutG1jNo1gmRMRjtwi9b4UCBPJHYYRDVbs28iswaad5"
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
