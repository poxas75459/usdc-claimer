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
    "45trp9ZfLscus24WRhEYZxH5Stf5dMAW83P7cZjt541vDQsr6FgdktYu7JyoY1j4egWU3ZehManLa5hugJ5tcyN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GY4usZnHW7oVtf2FKAPFjCChpVdXQxhAapFHBv8iPxXDS9dLX95oKxwNHuoq2Y8AKUbdSBnTZ5U3ervLbtFhfQL",
  "key1": "2zmrnxisS3mqMGEn7s4LAGGrVZB24ievwkif2BScp24WYCzzkBeGTKsX2qbUbaSC7Fvdog4t3icaZsfKygQN5EKr",
  "key2": "3aH1qBtqyDJaXiJdWjckjZtifMRPTN43BQDvbSEqEdGZNsMfxjFgcJpWzKuGuZHft5rqZAGj5rTUoAkXZWUwRH6D",
  "key3": "4ovMABABzFJ5iAYm97twNEZVktXfH66jdnUZSzBPcv4UwLk195myJYMTMxHHF89VLErm1mNWEKh9Sp4aJpYqDBSk",
  "key4": "2CQ9uaTdiyB862eTYmRCpUQhPfm8enupLU4otsjKZX47MLtNoyxwwVppowq8P8v5TEhpf6ydDdRbdihFpjMnUCGB",
  "key5": "4isUgMgEkLMkbBK6wS6xzCRtS4prq4Us1dpbqbw2zoHTFSqfZek8gu6DJEUwoD21BjPkcYov9WR77c1CcG56QrBZ",
  "key6": "5B4EVeTheKrDKoZzzFkxGSExPSiFdStDB3ZEF51TG9jfVXZpfNFm2SvovJsvcJz4tMForniJC1kxj44AvNSoE1ys",
  "key7": "3CBqArzLoLZ9JbBCE2oR7vsymrcy6vyXjR4hGmnNCSkiMyjHnvRp3uUX7AJqsburvedj23rFcuo6eR7npiL678bK",
  "key8": "3Xe1U93sk6DV23W5X4cUeJiMvaqYUGGCn1bbUnPEsFQ9KtQXhE57h9yg9meMNLYAh4JdaBpsGKAnAzqjBeeMBMvj",
  "key9": "5rukqdAufS2H2X1nb4oLCt98nrjsx4mX9jZnKQU9qHXwje1A3YcnnZdjFwvG3Dyu6q7qVmb3dxZULPMXAJDfJPqP",
  "key10": "28qX4WUhd5gsesV1jytyqYL9ECs7k8DHtYsekpNf4Upz7gtU3FtjXs62i85iayVCLmSdK7TyLYeuteWA8NBSL446",
  "key11": "3tBa8nwDZY3epn9rakcrxnbAF5vyEUGxPEr7jv9vXWQEMmKY1X8qYtyWqV4azfjnrn3YJq7KhdTEdR3egaD2AiPJ",
  "key12": "59oH3md2hLvBQcSUvACPTqVvejjz1S7ipR2FFgHa2LCQRmGKyzdzZ1GhAv2Xyddq6bTBJT8QQ8MXKnSVK6AoKshZ",
  "key13": "5A4oroSsDqNsSqaCBjroYRS7uHij6mH53DiUichSZyd3mJksiHKpGEaXaxXnzQy8ejmWUj49Sw2NbsVtM9Ta43g9",
  "key14": "37sGLDhgGtS3NvnsLTQgL3rMc1K8zMjCePNJanrAzFmyvkpamrjN7Gq4YG7AeGkDDfc9QNkz384GLFVN7drL997B",
  "key15": "3ijbs4DEY35acab9Pr4TBSyP4Y9QAK2519gBfgdhzNZoUNAUjhQ4cm83GbaCAzQiv3MZVX6hqnSqS1rr74j5mkTU",
  "key16": "3pNK5A52K1nwEjCNc3rhch6BDZtutkYFm5izPQC2nGJsPFBzBVdnKQY4w6btAgDMiXQKRfAtLnY4rJfuZivmArzU",
  "key17": "27gfrJFHmBMA15RREGNNhB6xBxgR2baedhoEUDa7CWFonBHbHcHTTbuf9S7wEGvgzGuccycKHyAPHWPwb7AJmwa7",
  "key18": "3MvYpQ9GZ5r4Z9SZSwzepeN86PCJzkSyDipKBZuLMrmEaTZ4rQ7zowWME61g1JjrfwucMJUj7zrU2kjttzPewk7T",
  "key19": "5Nnifoiq9a8N8famWAXzE9xP215rUuQqh8L6ic3Z3UALXTaiAUzc8oRsQ3pDBpRwkhuqnT9yXW2veDmA5DSyFmrP",
  "key20": "5Qrac9R6CF3QdWMLEKiyS4kspP8cuuh8DYa6TbM7DfLzuSgcpHWJB7W8L1k7acp1UVyAngM6XZjdADA5qZa4pXFu",
  "key21": "55xK25aKJ3QrmuNTkJx7sugN6EZSRatM3wfm3Rm9Vk3xVyuK2yazsPuAeUanng1vqqDEp2T3kQppCfgPEnbkMvL6",
  "key22": "25HaG6dyFqk6zoJeBdAaW8NRCjAJKuehtCVekZzsdhREPTXo1hPV4aq2DiR2vici1XRqL3eh2x7SBbhDhh6Ww5Kt",
  "key23": "a5rMMizqiZqQCQvNf4KW3Gp9McJETiYD7Fj8qkYroLcJuALsAQNWgKgiwMdu8eFUyWUUNZ5ycB2rJ6pVNboYR5M",
  "key24": "4VcpSRPSGfVwjuXWAWkmn37BFWPGfZCcLpZj1Ej3gWynamFh1jQwHWWGbvWMvdDTMrmeTSFy1WPRh7xEzp2WjxAZ",
  "key25": "4yvHQ8Nbb6MkEQtLvcXxQrwsU1Wg3cgpSYxCkgQGNuL6jrq8bgScbnapixDk7DsueMFpQ7LNcjsW4zYap8apRKXp",
  "key26": "5tnAoW3VB1QdQbtsNxAqZLjwFBiERh5we7TMCCaoQtMKUxafT94uyF41wzxL3WGYDJU9XCpRU7QUedpYwUHKLjEc",
  "key27": "2QLs24YJkb9yrZJb8ggSpvguzsNF4TSKguS83qSkfHXfYebEi6uaajXBZy5TsyMWj8q9PCUJ4TKCexR2sms47f7X",
  "key28": "8uUDUCtHegb9hs4KcQA3yYr97AU1c2tyDncV7hwUzHzzmnWrs8Sa3g9KKpKVm7yx4LpprdogPMKRRKTj4QN1h7P",
  "key29": "2pifWVhBSUmnsYTcEsH3yo9XjXKYmArigfGj4dKUnWfPuvA2TyDYBnLbXDewF5SJqZfBvpPU3TNBuYGcKR8HC7B",
  "key30": "5m8Kb3w3G1SE7iByCw1uQkdB5YK8dbWjVgpirqSZCVpcxVGPZiXzpavKkhCkcxp3bC7vkrPY7vdb6MkTzGA16qow",
  "key31": "5THQLsHXZCuRRqhm8D8Udv76SV25HMFYWjvoBoSvRPKwTUs7RAJHeUZwQPvEQpsrBbLjZ5uspReRwHhd4BskNRtF",
  "key32": "2wriZHGRJ867WhfJ1g7iuWUhwED2pYu2G3YbeCWcmvfKWDmDwTs7L5CeHeMMmxeHEC8ijLUJVWQNTuLNDZT85sYp",
  "key33": "38xPexUm5sL98MEyqgZHkDRv4jVg7VSCExHJtMj1dMZ6FMqeLCiurJ3CTkZ1jjhEY9KBcP99nZWPfymYpptj2vvz",
  "key34": "2xx8vXxatn4nCEo8vHVZd8t8ZMixYTa4AHfExU23FX4y1mT2VnCqDv5WQnV6bnaEqfZhEdnEeA4vGRvkUPDjGyZZ",
  "key35": "Wg9NGunXe2RGLnpTk4rMwBR4drBJj6uHZH2rvhVd1aasFHtDbAkqYmUYzLWCjxrEXPN7kg6kBnvwwRJtWgtWGkW",
  "key36": "4CD3sAiStHwCYtumR8Hgmsh7jrVEfGv31rLN3BwdSGkbaQXyM5m7kLT7Ads2HKxD4nEQKXqeattBKDzhdRPa171F",
  "key37": "5f6avs9NKvFAFhMkb4gZwVj6YM34siCK3x4KbTXaQobLB6RGNPKorYmUFDZht9xP9D2QkSRN6AUmxtHY8FWuER2F",
  "key38": "57oZbtJNSk9UpZsL2C1aiC43Er7RVXqaYN7m64Ekynd2YdF6XrUo4WMvQRCNvqo83K8eRfA571fkYgK1i32F9eex",
  "key39": "2XrsqUpZSbhKx2fuvgxyYRvCQdQfYzmaRxFPWU2S1BhhiNKET3YyBsnDHCPMXiSCkyx4VJTKkCXCF5HsW8nhxNBR",
  "key40": "2mE4Nr9CSvLXHWEEeVbgxogkhGkJYsMRWAfhQoEaNAxZ5q9Xew3YTjq8tbEDVbT54e8q7eybrFPij7pouAhNWA26",
  "key41": "2rY8c2PT6KP7s2KTgaa75e5k6Xwv4fH7haMJgu7yMAYdgrcKuejKDoHYevZ3LVCWDiCqv1qetyfZy7U5nry7ebmR",
  "key42": "5qUPcVXVsYeS2PyE3nbbYELh7BRKtgj25ur2dREoiUcSqPKrYb5s497T13FJELtGGaeH7sArXQpatkmkTMR5cy7Z",
  "key43": "5QmqGNbPYE4PRZcHTsRTQKFsDY8jBgc432WjCS2GeWnrvW7q7XfCxWCMtf996U1L9QHBCo3rMTruhHPgZTAQgUbP",
  "key44": "54DCbXjasQHqJKS76HD5GRztBfBpkS9GaEJzorF2sHAWXHRDMNLdEz2hcpCJ7cnPxFbgAJADqJcUG3x1iegNbcXG",
  "key45": "tGcZf85go4nfW7tMpfJcYW7uWpjxHdieSujD1v9Jq4czxcFKajkgPx3Qu96ygGXvE99RDxCVm78Ry4FNiSuZRgj",
  "key46": "7Zhx5aWmThzV8Z4BbZMnCgkhBVdkez32H9rDoXVfhDxGx6LszMFNpH7Vk3CmC3evQ2Zy5ZcW1taZ5Q2AU7P2Nng",
  "key47": "45FX5DMaFX8SUi9gLd18ptmidzMquJRVGVCzcV5u2Bp1n5SC7jdbsUHJZ9KogGxWiBrrz5ns914yA3N5rzVJwjMU",
  "key48": "5rGExBVsB3iMs6FF3nY7dJsouzM6wpz8ros1mRyRCWAinjAbxFBnqUE52r4PKZTMWAxoZ4i8FoycEEyBxHVnaobm",
  "key49": "38n1Qu99hDVpZg9fJno3gqMnwZ2bytUiTDgjfnfJhqXxhR7nxDW883eb8KED5DktKgRbMXQFN7imZq6ghuqKCoQb"
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
