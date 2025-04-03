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
    "5uhC2SHLAeV2FVzVSAkRCvuBJk8Feff5weN6YSmQrMBC62TUBrGXiEGKete4eyxRugcokyoCvr6AppnGu6Fv9rnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TUUQAt7Ye8hSiXYADEZi2LYDo1fsGyC6wd9FoZhv2vZ4zPWyfnzvzyxnAk3n4wDnGvXJe88FMziXqFMgd1kAoi",
  "key1": "4bQaWZBEFPLjytSUqrBg9tkj2Yk45Hg3TJ8dt131Wx4MaBKpxNY7nVTKoDPAMEHzsotAC9igVrcPVxagKjdUYMkE",
  "key2": "4ceU9MPdZDbfDF9tddVxewJvaDYjTog2xrQ4gb9kA3A7BPy7HT8BdgJaniGNio8baQUaCDytrqfUrtuKshbwfApR",
  "key3": "4SMdMpYqbkmGcMfM5Px3xSzT6oL9v8LfJC4YHB2dMhsWUfyj2tz2g2LD8Gah2wKCVKS1vfpZSWvPTcLYy4rJH99b",
  "key4": "mYuHxhgbXNqKkDiZD9xKDvFi9DRTNH3EiCwGsh92aytQA5tQjhJMMtzJDPnK8B2aDjbe9YZEhLLZmhZHt8EWxcf",
  "key5": "3MsAJjyf4SUPz9ghXGek6CufWpkMwvN46m6FR87y8gtRofNhcjdQX3uNbiHJh4uV12SFWcLUgxiQai53uAgtjd8k",
  "key6": "d4Tw5emjmdLcKFiBVfprZhW3yUf8xgokTQ6ney6V1531cvG9fABpepAKdmRFSm3zJ1xtBoWx1Agavyb2VfRcMmo",
  "key7": "5d7SreDcjgezyg1hR4PfHGekEPoVRbu94oyh8XveVmyaWMTLzUr2oCxPKuicrupGVKPAfreNh8gXa33SHH8cnqeT",
  "key8": "5wZwGpRurj8WJ9P4GWywT7WHPXpf9LaxCPdYK1uhahEiRCLcPKwF2QQTUAuNhdXxD9HK8nXmdJrtpZfJcfVRnZ5c",
  "key9": "45xg9tatQ2qvSQiY9nyrnJ4mNJHx4Zh4icnKTuhakRRgESAxG2KaXmQJY9DRheBQenieLbpuX3ToG1pkPY9B3Npk",
  "key10": "3qB176xwDkKDVrM4ZHC9nZTFGTCUa3g7Hr5nH4dfiHcF6gzdC2GPk5C2WXspgjfAqXK9HCqa3wf5zCXFd3AYGSmY",
  "key11": "2FFwcB78KgFnQL4mH7A9j48NaVGTGBpc11Rfx9h7Yn1uzzqa7NwoYYbNCPym2VuxxhSHokKCX89gjtCNoibYP12e",
  "key12": "4BV63igfd4KhvNt13p9DPKAjtmacd7GwNk1nCR63yMA2hqjFimy3gqkEqmr6mK8p4DoAkcTNjkPNATP8vEi3cMk4",
  "key13": "2AkJXVkDRnPVtFPtbtPFAkMCk9fQD7ihbHuzmQNBZhGbtowXdyqb355Gk6E3DiXD6smRhbyqW1Qb5nnGcB3CYdyh",
  "key14": "Cj922C4MC8oHBtN7a4THtKEmn8Y9xersc1xupP9R1jxLLrgS7n98CQ1BDdyA2JTB8cu4TfPzXnruY57oJgNts5Y",
  "key15": "yG2tjXa39Lp5ZfTtunmwQUVsbs8T1bA8zz8BkbFAGYwdYSHWyv7w7UQP3Nm96TvykmWGXFqmWYR1DwP6pbYJxA6",
  "key16": "2GTqdLZR14rJUW4QFLoUEYfNPW5dns1wg74nUSPYioaxpSRvYmB6M5RadXL7QTyU2jmxNwStR5GEkzJgdFeQEfku",
  "key17": "E22oHLciXuEALDzyA2mXrKeTSGYRTk2T6Jc9avdR8UtZogvE22WfMCmUqkJweb8f63qPWLgbWBZwbhDsimvvUqH",
  "key18": "4SRFKCmisjzP7N4zQEprbEzwuxKyejbYnAAa4kui3acxHL81bGh4UnGrhiT3UgX9jFKvdsPqPF7obLnFmQcMhgqy",
  "key19": "b8zQmJ3GsmLBD2ykz4wgYDiKYWjpSarMqyNcMZ2SeswHdVsjVrDANhUakbPdPqPiMZd54ooyrQcSDmPtXtodCQs",
  "key20": "5dNLhLungkKCaArCL2wopFFQQZ7qYsFvGZYveEEkZQjgeEqFQ1HFZHHNeFnmuViokq1BqmATUdeqRjyK4aTPrBV1",
  "key21": "avo83S4ATywVYuQHRQjVSFLsm7evTyxxRCrGhpFHVWTT8qbmDoSaQJwSqyNGU1q1UxZUWUJxMSouueK7K3d4ag9",
  "key22": "3yFCSQFFoUjQVPPwzLomYvQWiwMGA8kEtDQPJFwtfSZiYUwhevdGunnXVtY3S8yLxjB6Lqa67YiWfJrLJxF319h4",
  "key23": "VKqs2Bog8biB7SuCyYjTELDCcCstfhYiUKo9aD2Ugt7cPei5CC76vXhub7bxE5NGcG55FW7wZJyxY6aD6E7cQVG",
  "key24": "2qHxWyCZv3Lzx59oormtT6H4UhgYKKXRLJj7iUAK6VxnG7XyPC12qKu5Nf69jR5vEw1Fj4FD4qabbX7BbN2M8wgc",
  "key25": "xALijLXrRdNox7woVqbSZ9TkgAviwN6ttos6kd8xPWWhHYsHTogp8qVeqLoCq5fanVKb9pC4petUz85xnTRCm98",
  "key26": "2do9jgDqMMyNntMZe2VJCp7Rsmd62q1VmXq6SRXNkTfM76kTLWNJS1z1yac1tMWeiEnVP6Pgn6rxTgCCVmmCMbNN",
  "key27": "4GYW8cizoHW3EtnUb97GJj2qrd4QLmvr9jAFjJ9qXQ5irVkzWTVpovqbjvgRVuwcYPktUtu6NeTKJVWEx5mdwZpi",
  "key28": "5DPzHsAr4LDKUM4DV9ye73DWQjHnYESwhyb9isNmR6Cggxky2UGEnNd8MnP3YAbg3Vu3kQxmKrVtaZpDVk3JGdCh",
  "key29": "42f2kRmtTEPhAjPa6oSYEx3i24kNR2PNVQ2t5HczXHPeqgktvMqPVj9yh5sq3nMrQnEJdF8EUqGjXmR2gs3UFqow",
  "key30": "4zVLtknKtFAJoG9dQpXv4y79qevaJPyqESkVsvpq1cusuCy6thfgaWAwo2S488BD5FeSj1aq3pcxTvPosGVxjste"
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
