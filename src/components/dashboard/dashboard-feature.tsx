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
    "3AApQxtTuT8Rv9jqHYrcBNtUKfe7cMLHQGgrkUhxXLuHB9PbqHyNUW9NTbMQeyAXgcopZqzW4ptWQQ1pcugPXhPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPfxgMGVWiJhmxpBKXA194BUutbXJ5Y5r9ocxzNb2msaznPs4T1RpHe7Nyj6GFufmVZ3JUPSwzFtFLjVMkzGmUA",
  "key1": "5MVyed6bd76JG9av9pQz6apoBF3VueMQ37dwKKaznswxrT4csbDGGUJ3P4CpHZRqPLNxWcVizHzb2CGhrfxNgFPv",
  "key2": "5zVJJyS9viRJPnw9dRe6zpH8hgZ4xicFWuNxcy5MxR5GNLJ513HU5Csj3xsGuxtMYkSqUoUb5ShrhaLSGmpvZtnW",
  "key3": "3QpidLtfcyRFFQf6qX9FHofPxTzpnvJVgeT91kkHBFB1pKftgGBn4bXn7CU8PQHqBuUQjbPm4aP9wQbqwfA3YbhR",
  "key4": "9WpytNwoipW4EshQgYgyk3mxtmGq24UfFergwpPhURPupCXPdy2q5jPLzXScwnzYvNdCBLcWxM9FCWEm22ZrwND",
  "key5": "5saczAVkBnXzbPksrXnUtTsSkn6kAEbwtwx7TcexxiU6VKE9bTkd5XYR5vdx6NgVDruEMVenjizewCzFbDhqQyVQ",
  "key6": "417ZmcHLzyWENK8CWSofyFCRGWoqa2184Nqn24RGtFrLWcfk232Qnqbk4FwDCvUs8kSFyuk2NLZHBmLedviw4BNM",
  "key7": "Y82fa2VTXAvitkVd3Ltei1v83ueeKkBMQ74zKdZfXTD26FQuMMF6kBWkjyfuvVVnLcMpgRcL2z7vg1d7G6KQEAp",
  "key8": "2RwPauCXuLZFi4i62xpDjdEaAzb2XriDv3cDjye8vhxSHhWzvNqvfLDUtXbi1gPBuv9R9aT8Tx4utESDkr3TyLQQ",
  "key9": "3hZZLd5uRtUnDRo2jKpHYYFNFMmKWhHZk2DcVAeo5CjmWx3g4w8zdm1KNxbHjLy9in61Dy7QH7GfEWmo5CWLdQ1Q",
  "key10": "3biZwvyi8ZBrLXknXv6UWvr4twksGnXJMxgMm4Hexa693ev9DsTp62h5FbUDB9k8PYXQ1DujimeNYVKA3PGd5VkW",
  "key11": "5W5ArAWHabFD712HHxCN15BUi6xK88brbWQhaFznXkCWiibZSZD2hfS1w8wFfdyuHScQAx4wx6ch69rFPVff7Q2k",
  "key12": "3q5DqWvxdhbYWnypcu5Tz1jnA7t6upEeiTDALF8RhuJFBY6bhPyREtyFjrXAe5VDCK5sZE2GZHS8Sbt38WRG2HV2",
  "key13": "2rFcMcBCxuWmfPqLqGU7JMisJMfeHsXZToWefhjEZnAyijDQjQ4EqreXdXed9Qv4fFGFYLkHq8Facuv6xBTcnofg",
  "key14": "2meZd3pJXeymDr6XeU8Qita6p6QETTeWbGPEiVRCDwDfzf6YZiyG34SFqYiGGh8LWgi4HhG4pRtJXxn2TRcFXgCH",
  "key15": "4Lha5UaCNPnvmKAkx7jPxgM7jPVYznvwc9dJfHEo1JYKkjrkBFaXfPDhGnhcGfxNEY3h24GotuFcZ8zrB3nXLopE",
  "key16": "ZjHnxqNFqdhC9Bj4AP3zR6Fd8MkifYQQvCuNxFQyFtDGiE2hV3C4CjkaJ9BgJgDSJdcuPziTry4dZNhX751qMNY",
  "key17": "42MFqKESquZccqS2R2DEtXapD17Mtr2qYawyZfVh2VhQSiHsPikLgQE6JTyT9jiDULTwe5vx4aHTEZY76UjcSwcX",
  "key18": "3PudGVWeNc1AfRiJGcttXySSajT8H4CMgLTA6P9ZpWPL2p2nDLq14PwViKCKBEnQ6r6j9xx8RrywF88FbFt5bAc4",
  "key19": "NNDnQmoaEmS5hbNuhGDEZKSRLEZ9xBRb66YePN8BnNkpurtfmZMybngRivarvaau9quYokMH7KWcZcv4WJwQd6o",
  "key20": "4rTVov1Qqw33bpYHeNTCCtoujG4DJ95hHAiK6y6od87vL5KnLw7oUfbSiJKwKR773YBMPxvCXGGo846dhNrbmxA7",
  "key21": "3p4HmQssg7bKcJAGW4L73TAi2SamSHWFLnPfiYGRas7q6aXrcJF3WtZYThmkmoqxVeheQ4F6gAmtBvqi8VrdfeSV",
  "key22": "5QaocoBuL12S3qeC9twgjyWn6jJrCZhbbJsKFskeE4R4okRYgjgXYVGR7w3a9JWQUZnNr7CZxpXqfEzWZm66A62q",
  "key23": "2vM4Xhe6m82qF4WXm1o1W3kyKedvGzUvzeGneiEFkhMqHzyBHxKsbFUJs3Jys8fLJXwjSqyEhqRxhURkQSHZGNbv",
  "key24": "2cfgY1deSZgNNiAWcRzwS27z6fpJoDBoGfNK3HyjB1EJ25MELLSePNDiVdCFogEgqgHAHeGQMY14XouN4Fv8RjB4",
  "key25": "4zoZrDJVaAzY4tkwFgV1fVK2B6tTyniSTDYPcYorQxVZPGxZZeRuJLDCWgqvNGq6PxwNoTqh26P8UZqGWSfWHdMN",
  "key26": "3ZrVWWUX3bLyVqh6SWZoXDzs63pgLFewXD48zFieSjgpRwQwKrZum9kzELb9NQfkuHiWKzhFPYcNmwAoZgVt2uK",
  "key27": "QkrpeyuuhN2B8W1RBcFMqeL4k8GnVDW7ooFsTn3bnP4hdSvCMkfrcan7rY6WsREoY6zrwk2w5CmXVoi7np8MWjy",
  "key28": "3JcK4UH4ET3erFJ7p2YAVPU3iVVhg3iGFWAKa65WTDNcKP2nbNyZfgE9qkTrmo3rdY6gGjw63zNCmYhXcsT8KCC2",
  "key29": "3veBLoDNjwpS4TRmdjjMrPtyiBTdCxTfyLhwdnXNYEivuzBvwkokt614pgsnQGfhLRLBY6mPjQejstF1z5VPgHET",
  "key30": "vTuX1s4B7rkC2gZefhKD8RaeEgomCdC6wSpWKw8HXrPHD4M8FJryk4wi2CmYhGa4tr6mPQqibFjWG8B8dcTxNBX",
  "key31": "56x1b7dzXqgZXGLecVYvWQLqvM1LCJHAiHBDvReYCV8Uqgj6pqnxgHxodvZNET6TTw3okDXmcxDEuX4LN3cdUMb9",
  "key32": "311d7jdotiRShj1mKXoFAGe1CDKatyKgJs74mSovQwiBQqeo36Xa8gkoLcxCzPm2aquNQUJS6gWpv3Toauj4Eovo",
  "key33": "5WEaMZg5mxTmZkyknGcLg9Kgf6QwwjHcU2vSYaZLh2prutvSqhdWSaLja44mmXm2oDiTtb8DVHzYevZAgwang8o8",
  "key34": "24nvJH6JSbdb3XF4sRcZUJQaDmi9V46qcJ6BYuE3hvCEcoxqkBUmP8NLdyftztWbsoJ1T9MQNYrivmoafZLJvRr3",
  "key35": "5wozhxbVKCrbNa3SMNahbv92Q35ojDh2icEw7N6Qduqo6twi7q6WmbAXRNJPM86YphaCXV6QWP8LoKqtUknjyTcG",
  "key36": "2y6C6WQynwzjdkcwc87AkcxYtC27R7z2zom6ThKuRtG8KnBNP4J7rmyBPXGRyGVThE4bjEy3pdMQjZTfkGyrzkXR",
  "key37": "2d5ZUydMYcRMmswhBEZj7ijBVm15Ss4V1TXKFsz2cCSPNgrPVKPHeP1PfLDTndwURAmQAVREchaTEytB3gj4rGEH",
  "key38": "RSouGBYYFpofk5QePSMzZnScWXLfYHxJTbsRj7RWkSNbQDHfQuxv1Ja4bFthFFFDJQLnm9DXWzmUTq92uqgdcMH",
  "key39": "5a3AS6r3xeqjXA7rdDHhxUKdRyoqYd3Mt9eNr7zwMnwqV2ZdcF2CL6nVZfmyxiRVnMjn9s1emavG2CkAqwutxqna",
  "key40": "5vYScsFEqhs9b1vYGQhMV4KVedvX2Ewuh9FWexihR5jchfLSPThW8BDZ7b8bhyH1XTdJKhFzfxpQ3ZgoB1YYZ4Pe",
  "key41": "5DERmGwChEZJxRURFfuSWXrGcY74fbhNnQavPKXK3eEe3B6Y1b9sJ4ZqXwWnj7f2LuAUBhiHXaNUYvTSrBjxaGkx",
  "key42": "65bx7FqAnzXaYe759ojkstEzj4vLRqprspM9ChXd3W22RVYUxoMtXN9JY8Q1nG47e44e3AVZza8V7vgBVXjk88VP",
  "key43": "34YZ9XEphZYQPHojJvkZ7QBSLH7KjdxyT8wgdbvFk5a3upkR7ZVaGZgGwsry1SXwPGq6Ahn5EsQTt5sTgAWYSnnB",
  "key44": "2pUfR6bHpf1ig8TNYQYLKzLkyJjVPjqnGqWvLDUYh1ak16FPsCALAtJcaPxedLjLgvRZWDJNVfCqoFmVWkDQGYUT",
  "key45": "4yRgbfbvP7Kz9n4maJrVvUo2chhFCn1F8Mg9DLEufYwi1gyKsVJ3YnF8D7i2bACnJjiJJjXsqvoBALtYoW3Wocqt",
  "key46": "uV3T2Gim27DjBb9Br8FzUW3Gk2zfSLtj3tuNYENBazgxiJGGzhx7PfKzWWWk6qd6nEzb3zHs7T3mAq92pnVhwnY",
  "key47": "5tCn3FpCDN5E8acS8HwXUCfUZJf4wG2HdxuwxTUkpije1u2Ye4qahyoV9uWbAXVYMCrQobSZM2sLnBfCSjZg6DT1",
  "key48": "5L4n69k78jjbK2T3pgmaRmVKgSJ4fJg7QMvgf2tFFHnJ5MUvTacR3cPoJ8yJhyr6dcjbkCCC1maZqxBg5bJtNn9T"
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
