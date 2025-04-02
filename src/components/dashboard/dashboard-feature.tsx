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
    "3XqUacLD4vvfj4wv6LtoysQJJXFHhB17xD1yG6wJyKfo7cWLEKmGabVD18JurJyocNNPpdLcEXHqntR6pGNabu46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6tGNLEZ7uCfNuQtVqkTuQxPT4bNZLS1UJ35zkN1CsqHqABDiESP2RMHcTVTuo5e6RPR2TQN5Y4igq3fJ8jQC9g",
  "key1": "3dxAdLAxZewG4Aa5KXxcHDyXMVMgezuMvYZjhxLiNR7ZHm1ey26CiYfJJGBn3Vzp3wuGL1WVjvMPKzdC33X5mxAW",
  "key2": "3E2CXykUheupzVkWfhNT6xyjoBHinF3wQQ2JJVja6prioXnhpNxdW165hMjE5yqn4eXFsE7p3Ab2qZamVsY2q7nj",
  "key3": "36mSEHs2wbY3rqXmoz6Lp6RDECk2oQNdk7argGqhfs6oq83rdrF4rDKGuzyXxSc9JLBt9LYPKcGJAxGA3frLbqFn",
  "key4": "2VoMiN4vvJDndE9o6yNeeBUe7bfhfCwhFcjFuw6nTQF1FugJPZE3aVR8LmEseTfUTZHyrCzDZMwgVjmWgbq2yNJQ",
  "key5": "3QqAbeVPARubfPtDRfEerqY96XVmbckMWm3yT755F36ct1oedhZPmtgyTrZDX4ftLm4HupWXB8xrSnm1syD79gBB",
  "key6": "4pZiF36trsnv3HekgfBNWpbnQTRn8uAH2PEujUYg6HX9LPg1HUdbgRcfw89bSMQgHgdymg4W98cijBFtERycTsgt",
  "key7": "3ie7bFVmAz999KHbRnqi4Wa9xig3ktURcBL9v8ThSAgwvcAzB9QWdu91GcNuQVJ6k2MTCLQfYDMeZqe6PkqjX5HP",
  "key8": "4wmD5SDczm6PqPtjLykhzgTWMrsxaWVP2TP4fTLe4AUgZQfaG1bgRRzeVG1EEdncrQDGGiJZjDi4GdT5wvz17pzQ",
  "key9": "37gKwU7ZaDeZmWLRopwPiiJxyBTu8phnDUV8T2WpZmqKVZm6uuHWeKadAhmcB9qtD4LoSeT6e5siMheBo3BqZERL",
  "key10": "4BHfnyyhaqaugLcL61GDvBu6TqUX7WZDwRQ2wsvbi3eAD2F85RnyeBUCjXKRDTVizDEHkM7bmCBbVmy2hbjYhLMT",
  "key11": "56JgDUiWBBDAfvBcaTAAvpHCWj2avw31u97pG2xm56ctWWESBMzU4ksNXVL3FuTjaQequEKmnGXMP6cPhRC1LUVm",
  "key12": "2Q2bGRMJaYb48bueBCc1b11K3HaWY22z6WPzM5hcjkHgVhCGEFFP36piBqgcPoxvSd4PGPZoHKjQsR9uVfmCYYZn",
  "key13": "TJwUJW2DqdJLasdsnmdcmwWoVU12hxMasJm7o4jDw7fXkX8GjyQXjz5SBaoH6L7Ubz9YZcQZMcwAs56MVYmgYYW",
  "key14": "54DvaJkQLcX2Yiw3d4zmC1S2bhDq6w8TxsKgcBTnJW5fBxSRdqKWYonadAi9sgs2BuYXUoht4G6tip9UJWU7FX6B",
  "key15": "2oogout5nzLeg6MczDfkSLAvGX6BfJwqRmFS5aYqA4BwMFLez85MdHvjhaFF3nvFgVuiDyqtjuWTZ79uLRf9JNsW",
  "key16": "2DvrJ9UfXgPA9pp7KUAGYpqx4UjTvwY9KsQvq5E7Lkc6WgQAsKXDo698c9c7pZpfWixzQPkatAZDTRbYxBidmbwZ",
  "key17": "2uRY4iMwrLaFaT9VJn2SjnAKomeUC1xorskr4rQZXXmsdECAy8QVDCeAD9rPRDUwt9BvjEbdE9ddb6B17gVk8p53",
  "key18": "57xUizfo43xMkE5RFskteAA1dTZmfgatCaoqjB2JG1qECEV1X1dkxg6sD7uWURfueUabCRb5EqxE5mkdrjJRhcBt",
  "key19": "2sYJ4VfPu13qApyeEpQne4Le56Gj8AW345vUwHT2Mgp1TUjnqzWbNtQWMidss7hA9vbowxAZGVB7gDZKougib9GA",
  "key20": "3avWtckEwVUUgDH3qzHswWt7jWXm2Nkwfzp2RVPwrK2tE9kGhGAunkcd7snvT5rzop23TyK8eYzHTW6pKTmbjebf",
  "key21": "3KfQV9MNcZsRVyu4RoGmfxmz1TY84YrHfgdKaPHyTJ12DUdz7CPRWpYSyxijVjK1EmR8yu6PapLYSZHZz1egiLvy",
  "key22": "3zJhb7obogCRng3fXA6gUpmvxutSnED8sArzEW4wtJdTBx2i1pFyJkRkXxmZsZEHND13HMj6CtGVd1xMhKjZSR9i",
  "key23": "3geJRcEDJ54pg7tWbu1wKT46XNEZpHSK1dCEneDLpN3eYGAnS2JQ5xsGfTpWPRB6huF4cTM1exku7dTXJmTUe1Xj",
  "key24": "386xLeiyvYaxVyt2VcEoGWpPxLp4zkheZE755Kqj1aq1kwTgZy1UCdCorN5kSU5XeYJb7wLmmcMYSYpqEXSmL5TU",
  "key25": "5oUP4A2H7zZiJF48BYBxN9ED1zzysDpzDG4ZdtmYCxTwCcsJueWt4DjvAa1KUWLogkkiJP4MS42ZG42bHymmF2aM",
  "key26": "5hsfcK4Ati7UFUjHxWkDLD8THwCSspVcmCXuEGWUtYYiuRmH2zbnaUCEoUhC1PhDpYyDe3FwqpBsoqbDssFjWSL9",
  "key27": "51HoZYkP2Q32XLyzG3xf26zL3f86axTbBXyACK2ABQfQwkpETBV21J8YTZUu1Fy85w7xPLLZPGRNSqRFnity86TP",
  "key28": "4RtbQgs5zupgmQkcJF4xVj3A6tGFupNYmBariEmgMuFGajVSv8KoaWx8cwLZKqoFymS1uSD2geeSySfV3EMSbWnh",
  "key29": "5UHUJoQbRnAm4BjkY6yA6pA799osuhbhtw3YujcfRDPN1sWaZp6hfMPt1L7Lbs2r2Lww2RVCd9MgPTWNhiX9pjnM",
  "key30": "5JGBc1SRmspmkBjCEmERHiKnyYxcot9LceAHEpqFzU29SwLkGkr4jy3dZ1SXerpqSphTjWNiTzSLbrfVyo7W43KF",
  "key31": "3N1j7QzHWpQdXKQRDQGXkRDaqxxm5RNfQzhzDtgjD1zMeEZGxEgj5DLYc8yLG8hxVChgsGob4FjW3uvUgF6uQwEq",
  "key32": "4KwFjQsbHXtn9BgPzdk2K1bLyfsuuYBLRdd5Vevh515Nyp6AjuoYCfwwsqSGR1h3FZdFeGErBUHL6ipjU1pFsc7B",
  "key33": "5qBXZ6TmtKQruZrHPQMawEyzeEoVxNTesxB21zh2mGZpmUt9fkvrGGeKDBr9TXXJxttDKKAdtMVibZ642AUJDYmz",
  "key34": "4Ks96tDX8ZuZ15dSDQYrkCG91j1xuFqYZQHfFupoJuFwVEBZseiL8MoxVBggRc7MXLaufmr6jSe5m6xmkW8wAZNi",
  "key35": "unWZsciJhe5vgBJXjDjF6aaxnqaWE7g17CJoEpq93P14DZh37bXBFsDEowbVLryVsjUo6b1pXQwn2JVxbvG94bK",
  "key36": "gkXQJaz1DwXs2UhMi5s8fnietab62E5a3KhPNpywnTDdBeKaXe4JRjTgPZSRdxgsmXgS7Wb6QjDj7mVR21AsQvs",
  "key37": "26DgKDw4yzWdwJBUarA1o9UuAsYJCWZJw8nNnpgfyAeiWkyY9qhukdC1upN6fpeLdLEzXKfKB5FtC6gVpimvjHM1",
  "key38": "BqUe6mRmQg6xFEo12JrM9CJVPzuUfyFwS4PWKr3EfAXN94XwjfH9bvMmNyBfshQHkjSGsbLDpvcg9nwbP2hYUfb"
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
