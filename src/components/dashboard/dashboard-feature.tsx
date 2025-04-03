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
    "2PuaBCPqY2pVi1998hb1uJWxHENcn1LYhk5HWAxWuVGAZSUmLh2brdfgBP7icNqj1mq7ZbeUvcaHnbtNmcz4HmEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkNFiYHZdHrrRMZP8dZsh5NWMcKkjnACZKUUYQ1ZYzJNgoTd2TV1cdSiTnToFp7dXbJK5sY5kCkLfunLrJHF6re",
  "key1": "2ZsuMasz8yGoat1pi52v1STWu5LtMLt1JazHADPRJCjBN4KsLwnQkSUcq2HHVEJpcGw9Sb2NeC5tNUVMKaqfGNaE",
  "key2": "29SSX6AqEnvmTZ7njiyd7YiwrpNfheg9qKfDuVqEHjbs1GwTiHNZMJyNQ7mJm7qZv1MXXAnqyigjWMoqTybt6zjM",
  "key3": "sNVYYbCsH1isx7rBPz53QwoaAabJvr4HiUp9FvfFhJTT8DUoZBRJkG2kbYZtDpoRMkCJWC9c8CJ1GrawA2TerrT",
  "key4": "5BGSRg6CYwja9wzuTEko7o6fhc9k4DRsLyLk1KDhdjcWhDnz32oXLayALKueZgHmS3pQHa1AzM5XiY4bF5qHzixA",
  "key5": "4PHUjiNvqkzSxftbWeYees1YnvM14DU1ePjeTCjf3YNic5Gvqpb5xSwyn5rdkkkoMG1nVUKM8uM17Hpv14ke2b3z",
  "key6": "3GtvS9pKR5hmYtUK8E9sLJre2r6GUxS3Xq4E2vTWuJiHTM7ncwV49AoBiju2dRbukeKFjUwLzfL2sBjAMrisjuwV",
  "key7": "2WkgLuALSseuSxTnV4aNSrKjzAgqRdoP6wQqKfj14bFyXCcyC2hTj8hHTf3CjfS2Y9mNENHSfZ3Kec7xurzyZsDi",
  "key8": "pc3SANQCik59TiyV9D1j3DtoMtRGHAfQrjnuK5s2kR2tbtchkKzYsUFtjHjBKRx2LyDG1c5U9YRSHf8CADGdXT6",
  "key9": "BKsoPbu7GdjSR1vXGNdAbAzkZYyYBWsrUKZixCtfUjT5yCVUdtAX4mCrRQQ21qdjQUndidmGPEYtXiR21gyXH4y",
  "key10": "4q1YXHA9oSPXwGGMxWKeK9G76JyLY47gCqFJEPQcYSgPi6PgLaeD8pNqR5btyWYZZotbCTDadLpmpdhtxaRhBVG6",
  "key11": "5WEYsL8hj1NdGpiT3sJCuHJpH5HVhZx2JPHMdLorVDzX4XmhCubabVj5aeJ9JW5hPr3vQAyCccN8pNXRMpfadFox",
  "key12": "2q17ZeM4sAeAfFH8r3c1B94Jtrd1X26GEzy6hzap2wqKZDZVbV9iH65qjm8vwyuvbb883cPBTQ1VEw4sftfhcURh",
  "key13": "4rqf55gwLUxQAKHByJBJgvJpmLkiSPNtF19zszV8uvQy2fyhaCotm7yw4bWbqcQAdgufk4zu44Y5S8y6X84rtdnP",
  "key14": "4y4xEgFYRD39ejmqsfiiWrDxCz37X4yGWxqqffbDGoZ8kqLTLHV629XnevdqgBvMwtRpYuaH5cSitdPquJcAnVnG",
  "key15": "3QSPZZyoagWXL1CVzTuqmhakhhTo2nMHAB1KwmbAzuZgQCvsGhzcacDexJnJNKPP2HEjFWKMkD5PnoKxXLLFDj5k",
  "key16": "62adoCF1QUVSGYJtwV8oYk4FjymiXrWDNhiJE6pSs5PjxK7yywUuZKEJYw884mMYnBYpgWMmVG7obWYpNf2t3DgK",
  "key17": "2i5uSi4TVy31CQ3SaJeTz4sADE4hgahtwjUA6bxBryH7pes6SauUBThg2YG7VV3yxNGM8yUey6VQqeiJXpKpsTo7",
  "key18": "4cxqf4kqCt64sx2x4TEY6LcUMEWxXcfSQ3asyyvMojDgSwbx85Kb8k6Lms8V7YdU3kfRjnqnzizkN5qNXC54HgTo",
  "key19": "4ZNqStkDfwAPURccMNccyvK8k49ceeQLotFZyWSnHoLyA3etEvKQDBr13SZWKGrgLaXXcmfNpEq1bn7BEtfpiLiL",
  "key20": "5zriFnwCiU8aPY8MJPZuzxgCVJgGEffVf8t4ztFjVv9XbdhkTUwH9QEMTv2E9nrptMbe9ugTeNMNJR82mMrEfBGG",
  "key21": "WGJ55RUuWd6Gv2BSdXQK2zVph93a2R1Ygua4RxDANs3xTKjrNaC5E723vq64k2ianQmikJG7hCzc1vQUgY1rCZV",
  "key22": "3fdsiv4cy43aFjUmPcVb6GqCUCcEaYxjcihjiptZmgw2fAC4hSEWUjWoDRoxYT5k2kdoT3vs8juqsdpGhFGAmDYN",
  "key23": "HvQWEW3c2UmyyoWLKAMZEHQhMpmjgBqEUwhRGeuLhPo7VxPqMCv2nxykQsFug4hEiVu2tT4QzuCu4iKJCjSQ8Cb",
  "key24": "4VtBovidN5H5oKo9spe2NghuLV5wMCqWYkjmC5Zrce2G7WqSjf36RoJ8DUTvEhFQQtBFpLzfyEiWpizCJodhNUxx",
  "key25": "keARPwDb79YbRsi934zXusMdbAgBqk532fvP2QfRzUbfKmobv329qmZRdYqhwtTSBRZf73MVy8qu6GKZBGX29gd",
  "key26": "ivhUYJAC9haJEkrL1U8d1HjXK641MbpB5e5HkniJrgjphLyTJJKvKhcfwLJPiu7RuQmG9Pyuk3jMkVCkcEs8eSY",
  "key27": "2Rdq4xPaEmLkarad8KDiMGBS3pJ7PDW4h9GMX8swv1Dhd1UF45jah89rVfZ3YRdb11VHgv9rMdi222pfeJWC9paR",
  "key28": "5EVxaz5xATRhZuZpaBgk1bdPeGUBsDLzLYQpVKDEq43erHPE4bcstzgTAkzixgTMDFqhGKuAniJT8CDmz6XHgYbj",
  "key29": "3Ar1BaYSuwr7ALHEao5m7dx6apSEmBNoXaKNu9X5HPjViRhrhvqsAC6YHW2CzX4cQyezYQVsnGD3s41d87zFP3Cs",
  "key30": "62ePAZ2SpAt4XLHYfLt3R5sAQfe3SjrxSx7nZnLiYTHHDTunq8y6qUWCgcKQbDFpzWiqDNKshvWyh9CEwHPpdBN4",
  "key31": "39weJbNGUX45i3HEDF4YzPNC62HLv7CTgKpr2jgbfzwkRDbM5yJdvoZMAvKKCqyxUh1YCmx8RYMM11uMEVANtVaH",
  "key32": "KuPw4JN2wa6AydEuaygzPMHa7xXQvtcYNZAqAY7DPuqnysyZcrQtxajF79Vq9xuKmF14Sk72w1upyLCBjmoAqcR",
  "key33": "PgqJc4pLBHgty22s6i6E1GmgGiMzpyWXobXY2hFTZD8knopT7UtKJ87LziykoS8ZsFuMwMLhR8m3oJb4wXGAGZZ",
  "key34": "5Z5PDX6s4fuaDdTKEHz1XzFiZkTHxqTi85nQaTxp3VvTpYFDq6NVAHDria8Xrf1bSM4fYY2zxSqEYn39ivPbUATm",
  "key35": "3rA5WB6SXYmZjariB2xSu9WU29o8bqGFmd7svjC1VuXvSiZRqjJbbprRhPFHQAPXNhP1ZxqVZBqodQZa1jwcra6A",
  "key36": "52hpCP8QnpptoXYN5dbe6gTdJRgVgxEdbwdMNdSHt9xMMiwnHoNsZVRWhfrhhNCfPh5EXQFjm6bvxQTqBXu35mce",
  "key37": "4ECL9NP6HZQnYocQRReeyyn1GJqXevjZEKwnfZjHGUBN51zbNiJKp6vWxSAZtuEmswdZJBmdXt843UHbZsHhK7Q3",
  "key38": "HfERksfRAM3NwnneVUuHDtvbjPsEwW6PPjHUFUnPfW6jYBzmHUG8YR8kzXxVZnmQgno7YCPRkkzWAeWTYonezTe",
  "key39": "WCJKN2shnQZ8z8yeGtzRLCyUweoBnBQ65BdkqKS7FcckLgHAVCQPJepWyYoajR4c2TcsaQmDDLvEXE61EdPDyTj",
  "key40": "65WAULPViuDrSm3UZJPae5iJxErv5WD4ppgdSf2uEnzLTL25hhTmH5knHSD3EWAGwjKSADwC3Kco8wdF2TfuTgaX"
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
