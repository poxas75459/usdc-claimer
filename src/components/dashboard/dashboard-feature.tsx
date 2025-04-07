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
    "524mqQszknC8XCQYQqw8ovnixaymZXk8nLzKrQ5ZaJHF2ZoE1icrZygZE3X8PvtML6UzZfYgnqkHtFZxqTGfivuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRet1zfWpwXuu2kGymK9Z8K8HwsNyBfcTA9bNNGs8MSSHcqWQdHxBdKasQQAvzogzLLCTCwWhYiJkLpUs5J9Xh1",
  "key1": "5mAREEksHCAUsyRjWEy3uvmWJ1EcxWXbua89YWPGspUS8MPTp95zeprka7g5vPTZiVxBwFPs6KKanj8x6L19n5Gf",
  "key2": "24D3ZAdWRz34RdZ4Hw7e1Kmj4ViWj2vwsMUBpATrnJEfdaYQ95mddcrJNfmLGdTM5939xeeJDnavUQ6rvQbWgQ3W",
  "key3": "JnyR8epywFfNbuQkdXTtypNGk3sqBP8uHaW1g9gqzmtqzxfBNK2GsV8XFLuxFvy6kSLvXxkSPxkCYqo5Az5P2CT",
  "key4": "21WDEJivtnfiZZMBwm17hgkeKfPLoUSgqGwJww4Lxr68wQBVVUjptQe8MwXQAKZ3VrUVQpgAp9zsXfKtEWs8bQ1n",
  "key5": "35Mbuzd3YJBkwkrRi5cxzzTHwAmNaTETW5kM8KKf5ahbzXTMSahDjU6D4LqfPFQGacDscQBHMmfc2ZHf4uEVL2r",
  "key6": "xcvD1qXMYmRmMb12dEc1TFcffJLsbo4fizhJ9MHwR6GDdMvzRr73eJJfcfBAytqnKtue65jA8bNkofuECYAkR3e",
  "key7": "4nwS7xNsbVmdbkTqbhiUoo3nrnFfVPVGBcmvpc2jC9f9PU9RTBDxYGGZfhp9bqk6QzpMUBamTtthMJEHu2NXXBvy",
  "key8": "2EhfA4WUqwogYLKcHqRRZLNTPtEwycJZszne2tb9zrqxaTkHd9wZWVyC3KiQmjLHU33hysiak5pMV8MQJnXi55EH",
  "key9": "RK32gJKSNT21LshPqTUrzsaJ1GtBDeVTgfKvhYkCthDGK8Rz2KbfdWmTv9ER5h39LqKUWidJYtM1hkkEKewgDfK",
  "key10": "3UGTVsEtf4cqVKi6Gt56BjRmLkEimv1zXxkK54XzHmLYTK5KYGNnaYw5RMtpKWPA7MkDP5NcEYWydzV2AgHs7R3z",
  "key11": "3nwN85CQjGyDoSfaoWzTmxn4sGHjNVXsc2qiZCsUQVUXtAiLyBDZRqDqGnSYN82VKevnCHQjcBCjoZHQ46vkYm5x",
  "key12": "5T1uJ2jELLja5qCTKa7NkxEQPd9xE2mnhumA6i3j1aq1aawo7f9emifgJYR7biRG1wCvHroNYVuTyC9ihLK6S8jt",
  "key13": "b7eTU5SJLdvPWg87gRdQGxq3vmXHn12mcrHZub7eSkKLiaiE3gYyHfSQ76rcMTcMnhmoHG6UuiSN9UWAUoDec4M",
  "key14": "2rnNEhycvGuF5DxwWBGbVFVmpZ6aMMBqU4foNhFZSwnTaYTttZgVNTANmnd7XeAUSsKJrPazT75gS5utmoJvNmyo",
  "key15": "2CznM2Ec5cJUtsKVodGe5fc5HWpnYyNEVwkFWwBQPfjSvDmKffh83rwtv2PWcx4gRH1fGPV1otEAvrJRWUX1ypJb",
  "key16": "2tHNhkWujG4gLXsJbAzuXqgRzJ47DXqsTprNA4S66N5H3qndodNUauSPz8xWcZszY9cNHzAFZBcKHquQA5SQzqTq",
  "key17": "5xrhxU798qqe9D67bT4FtuLVe5D8auRYSpetdrXTRqTkjDLqFBqYtt5H5YNaaFyJ93D1toqznGUCunVMPsdmGwE8",
  "key18": "3hKHbbzcYUj5q44BayVvmM97iK4wvDe9QSXLGdBkHvxpYcGA1RPcSuWApAZkGBEj9fngBhtFTeetQo16m5DryF9F",
  "key19": "4JKsLi5GinsvDCufwa9WAuL4cySeA62CFxaFqMchQ95gmAqNbU5P7gcZRub8y8mwsNasNiTrySfieZS8WqMRuRjD",
  "key20": "3tx7AmsuqHNc3xpcZgB5chMeNrrFuvgzqLpdbENj2xzmbPrJWguHkJHXKfzGwmKngWbfiGvswj4jhw1Z1iJYFV5s",
  "key21": "4AJUia43CYjGedE2w3tBoke66S46WP25Rv9wMSAeMeSaHvrJmtS8sKQzp5h7jZfjRJ48sRQ8wzj4eMy4QCkn69jv",
  "key22": "2kHxSF5X7T4siZd5MyxS2ebVNJNaXKspXPz73kuZ6FfUkRgM5rugvprtUcT9bPbN75upkDnzYF5wMJ9sVkLyzJDE",
  "key23": "2Fd9zfyYfUWYb3dyFcjNgENmTCkaSpQ988A6uTzWXnSZhDtVdHpphxRgmkm7kVQJ2qhCHJt6fcjTjybFTX8A8TnD",
  "key24": "4FzuPN9P31YBTKX3uzm8MzNBe4jkrqtoJ7R4qTrvCN1nMCyj7KAaYk94SjjNBB9Cjs6XoGvkF28Tj5ZLiRhGNMAb",
  "key25": "5pAwkVbGiMnkcQKURvCjQBnJ5buN95p6kov4fAMXenvGpGSHEziZuSoejF3d32xhPEzswzKz8gAuVC5Muk1fTCKS",
  "key26": "4b2N8NME9ae1qCFZKQWTtFzwxwPSvm7GnfAHQzbmhGXFcoN1q7XnFyLa4DyTxYswsY4zgobh7Hm8BNUik9kJgJUi",
  "key27": "2hUzks2EeH91VE1KaB3wCHJDLeMbnWbfnEXJqs8AqnEHXVgHoeoHCDbc3z71CtyTRi9HkPNSybZjGyJLMCQHqRcD",
  "key28": "sneijaXnxkG3yZp3qwMrnnd2sZCYsrCvm5x9FKGT1KyFspJGy39h3e453EccgvQ4QUdiMEykxAgXP4CAiKBmMgQ",
  "key29": "4djeBHFj6UvkhdmNrvdNpp1xw1oQgKpd339e9Qtb8fZtGPEQSyWe63zn9jB8WnH9Y6qovLE8eudna3kNSFrsekH5",
  "key30": "34ikCqMkaeHhXsmWsZCgbJ2D5yrNbNvH47Mk29imT9xaExXUAdHgtcWGzUkaWFMSApLPi74TFio38zR5m11cUTTZ",
  "key31": "49QFGgif15YXjfA7BZDd6DbhM8rfiQLx66feGYthCyA2Egw58Aa64hz2QdswBzJR4Fn852PNfTwwHjCUQHRiAJQQ",
  "key32": "2PkEAHdzFgcSmMH8zb2pihXUSm2xHK6K18PnstGDgxEZWcf9FkWmsqiH9cMUUyJuYv5oQhWEeUwmvmMH68epY96x"
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
