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
    "8q6qiH9BxxV1VP6aMyAPoQNnEgCdK9yMYaXGoSH5LC18FWRAQfXA6nRsZLAmp8VLNNCntmbBfDoz55rySuRUMme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T28iVuk9tYCLcMFBiCNhCYURtY7jCgvFNj3sWpX4iVhfvhJsvoDKKi8eDmgLvEc5sEPzihsiwsCGtu2KQpH8CNn",
  "key1": "5qqm88tUV7sPoV6T9AMDSp9oRpj8cHah2ugKh8WQpr7WMoVvUSAgN6wx3jwAfuKAxLVVNJf9KociA1s6zZ79swDS",
  "key2": "3h4rK3uvJ4MHvGZwHBKNDzCUkVoeNWKWMV8C1iiRCBHm2tTbfnHvwTc4CsEdmDAFT6J7gD3ZPFCdEi5xhwFRobHS",
  "key3": "HtkVmcsLYCPxF5Z3zor7rLtoJDPSAvqob9LxiTfwa2ZhxDkXVRxbSKfYD99W8c9KAQ9rJSfXhj7VcVWrEWrvGHo",
  "key4": "4VJKGdc8i786L2n6qfURkVYv5PimmZvCi8mBAYHBH26mQ4gSjiUNkNQZ2gSa8mtNymFXz19PdXpgLJUzDWGSZf8i",
  "key5": "45tghbphKb4d41ATQTYTGuTgko6fuyqEsL1ehVPtmJJj4U229gP71aWLZTxved8d9QkjRhHYao5xf1Tk3cXvX9w5",
  "key6": "2nNcjUbazzf2iURago1fHikt2ftTCofmaa7LAZJZyQu6TQH8ArJrvEehdRhPEowBqbbyqVp5rQhuAsjZ8yWQn4Qh",
  "key7": "ECs89mZinweRLj4vWwPNTqotKNJSw7Lxnq5HLJRyD5TUiXFe8sBDR1KYqS31eva1Vk5F1rEywYhkSMVffnZZ9Zc",
  "key8": "46VB21KnqFQDL6Dn8b7mkvJPtbSSGSr4Pji8WcQxLctJj8xYkJmDyJyP29PhuVzLcdtepX6QCiLf15DyriM7jruu",
  "key9": "z5FUsT43PCNvC7soPWbvfnWhJAptt9mjdg6m8sbnbPptKmWcpi43pLiprUNVLpgATmBp5s2PTCSf6YbweyUHJBM",
  "key10": "jPfgKkYNC8eahrdT5Z9mFEtXH52ybS721iqc8CC4mgjUTDb5KwgkhbEtwj2jLt69SFxp75vm6W1bfUcdBAkk8dN",
  "key11": "2Lwoh7nfUs91QUswKQPEqyfkSL5oMFUKksQeCph7idjpCBmN546NQMNj548NLc3LiRzmDGxu5TShZEc8FmpZixeH",
  "key12": "RAk9KkXQAJkTJtzMCkkkapb4iarNBT3XgNzJEYoHfPAW999AGqSmi23XdpwVgKNMK89X4fxZFExqpmcnbVmf6Jm",
  "key13": "5vwAD77jDQ9DigBHJhQH3DBfBPbX4YC2Pav8ce6xzbU5tKKnYbL1azRaNVYGYajmcWPabLegKR8A7bA7cyaDDqGw",
  "key14": "5hpTbJ8Ta2BaAhMVZCQAUcTAKXaXkPsP97ZeM6QdPmMiDSNbmrYTJuPrHwvYDWfKy5YEmYDBjK69df9VeYA9enA5",
  "key15": "4BPsRcUPgUrtSyUd4HrF6VXcWnSVs3NVN3gj9SsdSZrGV8xCJ8i1VkUEjb9zTSXe8sUfimmunhrP5wdgrdwJEHP8",
  "key16": "3Jyjm4fxATxrrNJuKn5oMPrtahAtGGgDY2mdFJ4kGRnseP4JKLLYvYg3qamxztLZwrheMpDWdfBz2HeoprRY6xdE",
  "key17": "3P7H7zpNR1ifHvFECBDLUSXzYVcVigZix2cdJGWwNm46MfkmQvHLLpLMMyot5RMSouy8KKieuadhdMf52PD6H2zu",
  "key18": "c4xc9hYucverBSMZ9UbUmNSrfckgJsuHBs17PXFkGJ4g9rB4nD6deJqU7aGTBAfXFowWo5g3EekNzYpXjFMZsXP",
  "key19": "2kaA6CUZhh4TvLWujKy28Dg7Lm1GeN7AQYoAfwwvTw564FiLZBsjGWdFNmL69K8v9xVEQkUZ66VR1FXZaiSHF4dV",
  "key20": "fcLv4NC6KQ1De4mACzXChkcDBht2UYKfNED75qsUzEPYqJTSEZnWVkkgRxbVWbQTH3Tnf6YNXdHvvnB8gfu3x92",
  "key21": "rj6Whu3bddW6wYYDzkSDKSUseQwo9Y1JY1XyGX99uhNZ1UPEHwHsfuWZdiaeYCJJGWuyTJ39n5fqKPijXDaa1P3",
  "key22": "5TmuxBBzNP6RK15v6mS5qCmRhoSq9bJB7n2Voy2ZaUPAim1TPfMvYqL7WaEAFqc3aekMyAiJtVnoUhDmL3367Uvo",
  "key23": "2X5C5eh29fCLi7VvNpomzUT6gszzPBguUsgDhQWNrbwfL4XRLnzWFwqGLRMXDDr49obYZGtnsE4CsB3ejLY8KoLz",
  "key24": "3dh2cwi2xemoRCb5JiYAgePLmCWDnAQozw12FLHnmPDYQzDueCMDxYdaY6nG7Et7R1rBWfsUjLUCMLJeqFxis1Dm",
  "key25": "5Kb2cZVs9ffnPb2ePsP1z9eh9WEuEMkKc4wD9PkxXK8U8Jq8azkd1kP9JzapPkAfPUTRcbuekguPwyp6vG3AGYpn",
  "key26": "5Li1fEippEExKNmjaUhuDZbqdNCQW6C3sgZWewigUx5KEzn69vZfHtgPexKTqgpHrYFTJm7CzFsWkW1JZGNifT9q",
  "key27": "4p8ZEZFH3nrxshgssFJnvr33fQZAJDYSsfwJCTj84kqQ7ix9BHc2kNjBxbT4s8ATXP9qEnAGLTDoBvfhDEUT56T5",
  "key28": "4ETeRUxMmTMc9ueKmsE7TRJVnM9ZwktFiaVpfefBLMUZn7LkWifGDQyMpPEZAitooPYP4GfgAfgdZeo4ik4MESEY",
  "key29": "4rtY5gigrkVP4pWPfmJFciPWA94Xydvgy3XocnTkiExhzmVRgNofpvaFyY53wB6bc2Aj2phVUVS36EhyHhdUa1cV",
  "key30": "5MysFzhf5qJm8iyq2VckDknouaiK74YgSquDowDVqQXGsFVcoNSP6v19S1RVdC3EVyKXsNQcNZ26muGjQBG3qT6E",
  "key31": "cZNzaoiSNxExnd3J6eTFw8MvNdJzEZ83bYJ5ZeqjZRfsru8UxA2fktNvdaJKKwA24d7MY95HJY3zpzGWHHYfMMy",
  "key32": "4Mt3Pq1n846fvdeRg1eV7NAqGMCEGkQRPx6BM271rEpP46v4irsm8zi5iw4t9ncM3rZqpHGNMi7pstF7FTJRCpmP",
  "key33": "3kcwZA5Mz26fW33ykZTSShNmKfLY3g2ds63YwKEcdpLuoSrCesme1RdWK5zMQ9VKiabnZ7e1UCxbjiGLTHgKXhmM",
  "key34": "5a519A3hfpJvuSxRrANGuP25PJryBesndp9vgSuqc74aQQZvvSyTY4A7GGhU5YCwWf2iuM2jzaMx6CFmZxShN83U",
  "key35": "5HY7TG65Dq7kEAFQkYTkVbJpaBBeLw1izMBd3hkis7AzrzQ21hFtexidzbK6k4kpgy3cweq3HqoL8q8mEKemJkFZ",
  "key36": "4DRt87jejhgbMTcLLwTqDSGthsuyZSyHaFEmpbCYMW9nPQkb2Wgs2FCqN21k2pCREVnnip3xZeeeA5gT6YWsKd8M",
  "key37": "4LQC6QPUaN8uAkPEtDDFhF8US6RYRwhk1u9t8Afv47r5hrKEHdfVnKFUnd9NzmCb3hCnLRmaz5sSkZUHey6RR3EK",
  "key38": "2aB4FHW8fADw1vUJUxwNedGaVapXRbXaC5TvWSgDSMwcvi4dw2n7mNC9YWiU7HzMepTTJXmmcpYu9JmeDKipoKgN",
  "key39": "3kA41a7xbwGmse5e3fahT4PafQz7mrvZ1FLwRoE9TmXQXsFHJPRbqEstSNypjkjgr3BdmWitoFQHZwdUoNVdzHSt",
  "key40": "hqw9apmoUNA2mrud121s1DJnBM1dKZ1mnnoryiYJpPwDpN1JnNW3j38Aga7TS9DaiVkdvvWFtsmvzLFiXnQ9nfP",
  "key41": "7MJvBD4NPGBCxHtrBvzr6628XaPFYXFeL3FxNJStmY1w9uPhxPN9AJrncQXsmxqopfe9tGuBC5Qw42Jnt89sZ2o"
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
