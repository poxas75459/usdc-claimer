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
    "3SpPLuHGb8XDxwMECJRd6AWvWEkyf6EXcWDTFAmokQt7V57hkEfTZdDGxAAkKcvs9HCsPtTTtrj4pgj8wBbv6xKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4rdee1DAnrgYFziF5UroJjMm2rQYiBNQteMK8r9HXqPjtqLfqLodGyzqjtXxZSWD9Qweastnk9yDnRDwfqtZqL",
  "key1": "2SeQBAk5RChoAungWPnCSEn5NbtPNJrgt8aDac4cTGBDZwC7bdVwwhxNzkrj1797CfUJV9gdx6gdg4rRFRJbdHSD",
  "key2": "3qwx6Mpf7vJgE5V5JPzfQyKiBazrweMRZ1dB2npJPbmjDVnWYKWiUbsFjzHWLJv7iqn82LafVUgPz1HGcvHvifW7",
  "key3": "2hT4o5DG85auduqyWV2GpKpuqSdaiwUXx8wWn5CdctE4T7UDvQYNMhbsWTknbocic8wLBeM9do5Qg3deUS23T3N9",
  "key4": "2cLnmJrkQhuLYjJRvHNnFVwAQmzfFXJ8Pn5SK18RcWo3rJceha5ovFKXF2Q1ebeRGa3u9EWJJD3i1Xze4YPDadvp",
  "key5": "25t5VwBHkfZ8wcJwbJgTao1rqsFDCBNTR7tXfrAY7eSkj9T9PtRwBWh1edzX2dYY4bvaQiMV2saXKu1MEdDTeQnR",
  "key6": "3FmrnjSMgbMKNQb1C7gUxk4gUgDoyRe4w8oYY86AWmCA3C2nm8uxfgWVkd98AUXaUgyymTBvZ7L63yBsuhrgHx5T",
  "key7": "5fTzMu9qeUMw7DxQNuLEAy7PD4NkUgcTMLuhtvdr9ptaWDuZqdZqaCUzFgUfXh11wxVAkC2D2WaVyh11mJYyUuh9",
  "key8": "2e5SdRE7xEVcq3GgzaM7NVVPek9HkYBPer5T627YNSdzrfhhFTLNe5Zm2hCUGk8wCfqGVg62h5DimdMeirzXL1kn",
  "key9": "58KZdE3vAwSh9KvCcR2hMP6NT1TkgDKRxCzJhtzHaMZvSZmwsrpyU7FApGkHf3471pcfRvFjTeDyDXZqntw9UjWJ",
  "key10": "34nnCPqyWQUtmPv1mUgvVKAPZYP1HYFtgPGUzAJKCjU3tnepHG53czjyAJgTo7nb4BkjfctCkmBdUsjz4NUrVNBo",
  "key11": "4sswuQFtFscADjq44STsrNcvCCRoMu2Xr5D7k5QLPyeL5ZCuipudgyYQZaT2rn8ABCtwiHXsQrqESuw6WHfFfk8q",
  "key12": "48F5N1FfjR84zhP64KCdYpDRqS6nh3AqnXNuR567a2NCxJQ9JXKJQjJXwJgFxp6J4GJMTQdmgenQ4SF3gHoucsq",
  "key13": "38zpSirNGubK5KdnLo7AetMnpmfBAPKJ1xex666FtjMczzdgYFsCdYtLhwAV3bM2agCkez9Ntwmo2KdjYLsQaApx",
  "key14": "4BxzDw14Qwn1coKaqDFpxZpfGQzZLvPiocg2j8evHT57T5171omfAGbACrPUiEQdkzAsQc5kasoL5jtfbXtyKxJV",
  "key15": "5Y8UhoNRiHxmeF4u7NP3enq61mZH63GzdA6z716mw6PR2nYHXcEGnvjUZdRVh7Qj9sx1YKx1ormovJpg4c2KRhHd",
  "key16": "3G7kTT96fHZapK4tKk8dwN2UABGUAbEPxNnffgMrtHaAxzTkdEg3TREoqxbktm9bR9dV694DwnMKgaoksKNZoRBx",
  "key17": "kTd91R1FVFuX27oBfWhXtkZD94KYhzGGadwHrHAokt5d1RZSMu2pQ18HHw3XHzM1jMbTvqBb8bj2bEZrJS6EuuE",
  "key18": "FDg8zfUjwSSHJqUy8C7miRThp9XbfriGJwcSnKhRmoEJKrXz3EMujQV7RZpewEpboZRkUssGqLcywXj3EbABirS",
  "key19": "5yQjUuvcj6nRewLHed4QShaYPPj7Y61khkhSPot9KZ2PQgkwTHcvkT4cJFjo7cee3v3yn5ktQJhncuKC85Vo3RAM",
  "key20": "WewisBJ5561HNxEioSb2ohzowd516tZ7bgnqKXFvjf2ZPQXXQF8VuKVuoDCSBHSfLnAixNc3UpG8QSggHpnMuyt",
  "key21": "5eFLbEaYyLbkvzYbQtW8nadaP3hfvWdVFxuxPUcePemrhYL9PcqH6QTWWtkDWErNQMSgvas2RvfHzX8B3oxPS3EZ",
  "key22": "4xY9u6u95nUFZFWJWKkk5fSbbEs4yjjJmerZEUZvrm1Fxr4fcU3kK1UKTfCVLnz9W23jb8xgYaPyrCxbthLWBLFj",
  "key23": "5EZgRZQxvCt4vhud2pBQeoEwrxonxp95DkF8S2ZkneT6XMYUvSJtZymt7ZvpRv5piAb4obsvrQ7thc7zP29FJG13",
  "key24": "255brJnuCBtQNnBSK3mPLfkoP18nCp39KP4bdbCfga1geMc5DENaTr7huXnSuG68gjeMNCyAriUHUzS1HeXKXcKd",
  "key25": "3K1T21xQMruA8XfxZ6iLw46wGnCNNtZMpa5LtQbySjv3MwkTiYW4GhPyPGSDHT3BGd2gg5kVhshkg4H9arMwUNyA",
  "key26": "3bm5XamVurbxMcMzkAeiqGHqqwAnp1v8i1ZznvxX22vWrySsBJdgfn5XQWn63ejpS5PCoqGBS824cxdfpSLZczB8",
  "key27": "3icnRyytVJBYCZLJvRx3MnjzhNxbyHqrMtKnbu7okD8Lh8tD5Smc1Awb9mVpdoj1da6qFJJ2RtBWBayHTq23P3CS",
  "key28": "3iFijGc27qyDGH72u5V4VuyAAnBRkdhff9FRsCbjfaBZj5UR4y2yLjs1PH6qvtkuzrBJRqTjKUkf3ZJWAAXqVvhz",
  "key29": "2MW38L1bW7Jvgv5q8k1BC2CGfkgqiWrzwCkQBr28RuxBFAPAUaBeE5GUtVFvttYxnxjZDKjQdtUSfBZYgm8YD5Wy",
  "key30": "4GdAioDpNRSW2gRAjZbqeFcURet6qoYvrBR69prVnyNQENMbegXMYXr6eqRnD8YdRHWxcYVnMJNPuoMeHJkpiUjU",
  "key31": "3yikfPv2ovz96HzsTiLm8ma619A5S88S821wsKxN5rPPpzswtD7VBnfobsTshubGri6ZnwtTExYc5LEoFyAWPfC",
  "key32": "4sgZcdkWxVaM1C3nqWgwpQQLRbLhWToC1zBUAU84LeKBqDnidY6k6fVVRVub2EMei4raFbTWk5TUdxaxxeSS6s7T",
  "key33": "3zSpqbSsL5CNC74ZZsBwoeyZokwToBvv3UMwPLBNMfu3s36JFpdV6HAHzzrRJtbieiqm46qxyhyg85xbxpNA75Qo",
  "key34": "4oZ4grUEeFb4ff8Aw6HUKzR5Vj2kd87KPs4Vn9EUVkiGGkdAcE58GC5kH1brLGVzm6XGhd2BLnZU4fw8E91VpmkH",
  "key35": "ATKRrFp2HZUTmxAcftiaJwkWZe1godRDpZZQoXLZZsYMRrE4tsiiCcARWkiE3iZiZQ62Vm3buDWAMdDi9KCZtp7",
  "key36": "2MSmCZVgB4Z95PJBVsVXQVjgsspBjofHN54hzCAQ3k8aG3rRWmRK2UQvXcKQP2qKU5nrPc1wWvKmd4JhjFb9e8Rj",
  "key37": "2GtKfYTkyx5y9fzcQC2WaVxucyZiaau2FZtfLEJV6WpdpBWiaAe3YD78GSAZ3b3ypNru5MHT8DVWHL1Kr8t66oFH",
  "key38": "4GbApyLw7AxCn3KRSZEQtTdvT4LfQHh2mneJ9eTYhvfK1UzAYCk9ntWvnbyyVNAA4v4f7J3TGigA23X3o9wqXXGK",
  "key39": "4k3z2WQZsBupKDZvZuQo3SfXnEZygzmrz7RabNyQPPUYTgw8nsW5fFARhiS3YDYVCEr1Uxv9QHBkFBJUQkSTPKdg",
  "key40": "2xoMtyLmQFiBZp4vDne5KaTBzgf8EpnJ7paCbJP4h8NKr8xDNkuQX581VttjcaM2SmqjvFCg6HGyJcTdxEva4MDT"
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
