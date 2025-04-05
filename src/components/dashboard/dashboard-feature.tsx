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
    "2HrSCCgAocmsoZMp9Ehd6etveh6Akc8cX3dRCkLSQ1WFHciEgmc3BRsWTixsoRe9WMSjjnqL3RCXoMqiD3EZVjxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjpR5EPujYAAoBmsVZnBUvLjjpfTG25y7QEo13MTLAeW1Nc7FHFpPpceZvgZei6keNhbQsdLwkveR9DndxAjrc",
  "key1": "33vvgJbLE4zXp1Zb9iN4xSyNUcSTiKijY4qKY8ZYxoKTTTGJdLsoU6KEexPyiKDRNE75gVEV2qL6SMoykyzPQ5Sg",
  "key2": "3D2MtE5JJVmkPWpDA1P6NFeQMLMxmawuAeGnr5r6knmNsKr14gan4y995Z7GUXggPEDVC9EZ2oyMsa6yyfjVJ14F",
  "key3": "3z3QVQ4aPXusz8k9j1tfENEAty4y9houLi4HFt3J3Bx1qMT4VfZgbJeooKwFLMQvJwhmPePmo5dEecoU4WwZyM4D",
  "key4": "4XaB41Tky8EJzheuMbCxrcvgm2WYyqoAx2W3SPPTKBAGHEKchWxurHEaaGuKzAkntbTGcamj3rqk9dyGYW6LpGXu",
  "key5": "2otj2f6uV9ky1NuBLmKW4x8hnxjUCkXgW9zyaBgGu84Trz8SsWwF5AwrZS1Y72kPqy2c1is49xnmbS34o8vMYaHi",
  "key6": "3Pe6b6mwkX1TRwEqgczrenStJnSRzULk9ffWFpGKqh8qbxxX65ZgV8XTTPvNjVMbvkYgM4eTZDWshSA2ee6e8CSF",
  "key7": "5fhqTW29F5QpBnMkjhRXWX6sCecHqR9vA47cE7y5MCwZqAeVQdsUSbto45mnUKfz1adQ6kspEY26x9JCSaTNhokF",
  "key8": "4pagqyvbNfGQeHjh66goAMGBZuCeg7WokesPQ9zcKwTLnKD2j8BXgu4s7DhykwauAwUtGuvRD61MCXFAmr3X4qFk",
  "key9": "3bfRVpRNCxshy3QYJDNhYFv5MvKNEEdBgi44qkqZ41u7bYwDR9pVEpGNXonnjDDe7tZQzHYr97Fp9AtaFpouVNxN",
  "key10": "63gSeUwr1o9PcdBn3wcZTLYfFM58AusRPSddLuwoW4ANjfuh7cHNYGFuNcF93bFbGs1u5Xf8z34hso4jUTHDbEBY",
  "key11": "2WnzapTqJK85y8resxQWkg7Fd5bYiLYmrqibqjcUpBNKt3oZXNbxxTJyAimJF8TWt6brbqeMVVPkgrJhqihyeSnK",
  "key12": "584QQbJd8A6CaoHU6AKQw3CqYWXAf62mLE1NzmbKCf7R9NiwQptRjyu1wTxgdudtwm6gT976bWJyAw5zCTgki3tJ",
  "key13": "2aXEN5LzZpk1bXMtAVuPMXrg3m8R6Kr9qCpWnX6sfgxC7edvBniP2FBGDEbD5hh3Xs6iChr2G14y43dtMqj3rTAY",
  "key14": "4ktF362TyacsTy241MGrgUathKQdeNbJwB92L3c8PvUZXAaGxQ867mAbdDBZUqmWkxRVaJkRmo8hbkGNNpHZmchr",
  "key15": "nHYowNG7pEY5YdWQbJTJyeVJpF7gQ1uF2uViodRHyB2fPMQX2AgRmHNz78erWcuXfgMwZjPnxNSbhQp28HjRHzp",
  "key16": "65iShqNzjiGKXpczK3W4KwxR9vNvMNmgW5o967Ak2E9YHseR522ako2dPrphEwKT5EqRWuPHTdcyqR263eFfzo2K",
  "key17": "4iJKebmB6ZqY4GjbnLU9nNEjVYEagTVdatgJeEugsE9FerHZ2AMxWF3UzB2zLzsYg59PP4LY2Byxph6fqx8WXSbZ",
  "key18": "21ZSZ7LmLXZRttrobba71D66SNzLFUfDs8SySVgEXj9r9spFHopwZroVCdn79ZryUMQHwMeeN5ureFXmvAPTRqzn",
  "key19": "2sGS88S3guW13defYwd1UYnbTs7HVrswUBicqgzqtjmoDKPqrvrnAA9ejiF2AomKG1waHSmXA4TsuHDqQH2mSMdS",
  "key20": "ugie6FyvsVkybxukYNJT4SSxMyjG4WD35mBfsMNa5QaUg9kyG5pzhgts9DHZH3x1JwEK9uNDofjTjqr2cc59HLn",
  "key21": "Rp5gtNR5W9j2dYc6ooQB6Q59LhwebKDXjvESEUZxPVqXdS6ctQWeEy7w2yeidUUkNDT81qqCvpfmPzHWgDYcjUP",
  "key22": "3howw12jhg8wfdJcZV3vmcN1DPgoQTcnj9DmMj1rnFXK51EMfdzgaAAmcQ6EDT6PaEAzZhmgJYx73EPDkvzth4gt",
  "key23": "aqtDZJ4fyF4UxEmEkLidF4dBcp5E6aBkJ797NrgnhMMBDuqcnBUoC1nusEaV58V7zhqpaeH6Zys9THNSmeHyg3J",
  "key24": "3orW8cXpgU85L8ZijnBeKj6aKCxC9fxTDGg5jgQFyFCVhaZf8D1jQMnLt9askTabZKcQywMqgSc8m9CTt8AFvMUD",
  "key25": "2VW5Tu9c9ErKjSE5yfDuo4MvrKSUFQrqhzkpymmWt5zmRk6P4UkejgwhrLxDERfNYGEqJXoVv8jwFGqd9tUpX25Y",
  "key26": "45w8DVyc4SetzkpxvercNt6RtnQfuJTvN95XCKuwiaj1s1DwVpfr2twSAutMwEB1nAEdrqY3CUrh9MFfZHbFpt3P",
  "key27": "49ggs8cZUQpPfmwAsATmmmV8bvWbNV5n8TqXPpxR4gyZDihUADXZhd9HEGvfR1VyqFNkpy5NKivVTmhnqqa7R4aG",
  "key28": "66rBhyY8B89ch7gKViucs1uxuMFkEhbpf1QoEFyYEeqBnbFmV4yLFdmhubCkdwyWZMci9yrgY344oAiVDGpDnn1J",
  "key29": "34J8TJoZbkT4aChKNqBMxFyAEUbvXKcm3HS9NK3HTAK4Z1yp1SZRutSjdSjbvctgXgg8d2GXFvPvqhmMwHxDd6QP",
  "key30": "4RZgN78n91hX4poC295EFAWf6aySmsvA5h6nRooqQLeo5BQ2VzTgvWrrQoMADpZTajvUFavKYKuCx8nut4SeWqzq",
  "key31": "5vUjQCVQDBBjYPpDyZHQTtnJXPBSSFfXxnhwaC6FYF9HAn55BP4VcaVnpg8jB1qsgahEDQNThDKfsSbkBuZirKQD",
  "key32": "2H1bJvU4TE5wBhpL9dj2vjw6PjhmusKdMoxfzfgNQhYr24JHDsJzg1CgQx2u8k8emTncywY4VwyteJFVPAhMPrHR",
  "key33": "4KsmYL1qcKrfpgKtJQfTDxDnSqvP9KUJeTzPcYMgPn7NCZG52Rzj5GTg6SztjWAkyX6YBzeX2AtSsGxULuiUtJBy",
  "key34": "2Wkjs9yB3YNcfwu1QEyh7wzTjHJCDfFubddiNzAhhrYaqK1BoZCh54sr4sJVnVtcuS9UWLQwKQ3DYFf41thGXHeT",
  "key35": "2zGufaPFNZTMP8GFn6CnANrktjjqsUGBfUyK1KVjBYpR9hZnU2PyseBKwab2cDAq4EHwfFZ8PZpfx8Pzs5gjL3ni",
  "key36": "3H5oqH1A5wmif8JfaFWYMuAt37zjuzpcvoz9rET9r99cqRKDfJ7mgTJ1b8qT5zxtiKrxmPM9x5McMqHCc5poScVS"
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
