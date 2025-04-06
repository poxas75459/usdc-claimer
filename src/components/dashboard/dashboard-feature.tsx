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
    "5FQkrUXde3wLXHwdrKShjT78gP1LAkKL7KufGUfbToRpoE4aDgHX9VYzo3GVkCmWRJPRuuJgijRmYtvExKzWvunj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcUUCH7XNmqpHwojgdMkZT6qFD6T1c552sjZA8ajUY1GnAyrnPwENicVsBXeQSVKLKdmrGFWPtp7mHLpeZsK9oU",
  "key1": "2zWGqWiZ9Nsqd3UekuS4mfMfWV2Q1tBFr2Z3mp23SZYEy4WsTLdcgy3SCFJsLeYWW19JLfLJQ45qXouUdw6Eimcj",
  "key2": "1x5DNsewroWfh1UrXGSjhNCp3U529FCbjYWx4mGjFvsCtEYkEKTVh1cSMXtpwWHvJ8XA27AEyy9H6d4jjBzbGb8",
  "key3": "5ZtHCHpx3qCkgVxim23QVwYP1Vcs3dBcNbi422sRTkmbxw2xqb3GRGR2Lu7WAPbAmkGtE1NxwcjtKu2fZNn7TGSw",
  "key4": "64coGY6BbTbLUEGcsPGXpmXAVAtGy1mFC93nsPqh66MnEKBAdS7d4f9rjVQnn5rsmSMA5JkoGevZWANRWF7nEgJo",
  "key5": "2uKYegJujfFTr1D9LR6QJVPYzND1xz6bMf2vYpQs7tF6qgEfgodHcPxmnKWZJV2zSiM8Gw4sksNwQyedx6jPUWbW",
  "key6": "5F25KR8XQE6hAqPU9ZDZ1jRpVQtuFGejRMUK3jZMGWTz6BaHpVzXaTd6yyB8gvRjwRxwX9crZFoCwu8LJKNLDvvw",
  "key7": "4HD8FahXaSfemZjCAVe25Fw7W66VZyFk5mj6U7NrFNuXBtyRAAB5yLkdZZUmhoBoytgxiPt16vtXwmV3j1aK4ndG",
  "key8": "2PCMQKaRj6iziGwsD6y6wrEiq4FEHf4hzLm4XNAGrajFt7yMyaKndr29dRgE24WdMKUuKr19tjjopoCpTscwuqE9",
  "key9": "4W6NTvvVSqLNi1d521i83G4ed42TaJbX52vhUq3yicYR5wLA1KnvbTozFq7XSoTXNetzYAoxVthZTdXeQpw5vD4W",
  "key10": "Vd9huk3yufonGYZC2hdTWHBiPiyiBuEAQ4FqtVvPJ62U1itSoVpsyhGP1rh1wMsJsFLGhYsKS5oLftYAmmdTstE",
  "key11": "3kk9w7YsJ8xkZXJyU6FfyKHGsVWjvmb316nEdrJfLGUzRvD5kqrMZmjK9ZWqX66aUB7FjyReebvNBzHLggUK2ZbC",
  "key12": "5ipEUrzRdY6idjM5DWUFynfGHcR9WHvT9DyoCX3MQ8R94AZrX2Mchf1gkKbZN8YguXunHvdbRrrDapqsG3yUr5VR",
  "key13": "jY2m1brWuhEtsSa3UZmao3vkUqRG4fGSzvmzfWXepGWomCx8HhX2m8FQmLnHdxkfG8HAaK8oKZAri6AZW41aKjM",
  "key14": "5nPiNDVKCYZTHugkfLZw4f98iYAcdSjmLMhosVdTxGtwdRfVuvfPTC2hmEpb6kZtiqNzCKN3dXSfjqDaSBHbpZWw",
  "key15": "QUEYw2kyqQkoEWcMwFDdjGdmDN8PeNGdtFb6D9shTwSPPrcCoAr8QRzXgdycnrYWRrVxXy41UtA42VoWnbbDdkt",
  "key16": "36hxAvb22pSWL7gv5FboKVMEoSYpHPDnSn61nariAtXBxTX52rJbQWGeBL6yKR2aPuA4EBqypFyCsKjf6ZX7cKRA",
  "key17": "4HdQMcUc7JbQKaGSqk9pXXSMKTwrEX7tLsWfU4gMAviqxBnt7TZRcZ5nCtvhbyyyMe79RfpHuJVn21CHzkBKCLXk",
  "key18": "CvqLaozKpV67GAkfDV5c61k7fJPMwaBQj3kTmBgmF8bV59G2eof3hEixzMSbU9KYHpBsxPdJCU94tm5QSFoNe1k",
  "key19": "5grgZi4LxWPfKZqJxdGtdiNm7JTMqKYCD63zWQEvG914RAmpVncwufPCSRAJnxdpnEsBaUyiLCqTHFQjczKyU9nv",
  "key20": "5xUxi1Htre8n5MfEiBYEk5Qmo4BACZ6ZRn4iMNqUAFG39r3HF7uJGXDZavCDgCQjBNRqYdgJUodym2o52UFMEmG7",
  "key21": "5MCLBr7yqwMNHNK7VeHerG7dbmABTyzDrmyiHvwdwMETXWN719diZ68MzRrPkKejr8DNMyAHfUCXHAsMcGF2Qmsf",
  "key22": "3RwGaGwteKc1opu3pCb6YE8btRdqwpAZwPGQiV4deEHyt8t6sYLkADZiKqDFVodWNhJTtoCceLQdC2AoELCYTy7w",
  "key23": "41KqeEJet1WH5MXYRkZm4WKr2DXiaX8fiq7MWyQRKV2yGRsabcANjQHPvpmNcwiaSTFgCbKj2XcP3GkvJKDcsxmZ",
  "key24": "32nRDA1CJGVUfWLUNPZhqJUkWfqacJavGnrvtMQ9uCi75HmPESpJuosSxK1kQjeTLKHmpjHYcgPMm2m7wrydThNZ",
  "key25": "4z2r9gVV9xSmCVsZioVG4LV93ZgJtDkBWsdWPVEPCRnNojSn3sV396huuV5wcyj8SuZ3mfm3VJ2tGZd3BVFBByDK",
  "key26": "4A4g2WcqdtN9w1vc3CtzusPFNA3LRSQokFhkpgQvaCizGGzgFfv8JLSAETbXpH2V7uPbkQmKhHXweyRPHNvShazV",
  "key27": "4NoLjakxKFCVQVf4t4qsVUaMAEvAnuuEzh7hcgxaTx3P4VxpHHvNzL4qRvpRdD52sh4Aknxh3mh4NasH8K8KPxdc",
  "key28": "he7eihqNec3u38hwa83Uy7RuAxbuvgZ7uqhvJLqUpDg5m9DnmL8irkoBKSis6oY8xMisVLUpzrLwLMvkYDhxCdd",
  "key29": "5jmgheGEVW1YLKZsHXP5tcAUKt5S1uFJ53QWJbrzPBnFQCEFA5yJoXS2YaEfoZpAEeYmNJgkRGXdkqMyk3HzMqS4",
  "key30": "4wHXRxu7MAAqpqCDA6S4DqcGKGPHn29RjxCzqeScSarrC3yDSrpRwaW1w72mZCoPKBpn12x6bTkYB7adpHsQJQuN",
  "key31": "2wtE2fGAM3atmBrYhJFW1NuLpzY4BC4TjYBZztnMPcRK4rU6EGJLvcsRQgMARrkGGPTpAngyXs7fw3XRCGtCRxYR",
  "key32": "44kv4uafsPUeRRyFb6hsEU9iBCB2rryXCcJ7BXCa3wKZP3RY4tQdLz3gNJ5NXdA3aDbXK2x3SH38KTr9DCRetLSr",
  "key33": "4vbqNzqk2ovd63SKDkAzjBCirJAnPVRJY3TQNe8S1cU2L86sa2vV9BcLTviBPs7dTRKCye2H46a7dnLvYrv7gcK4",
  "key34": "4c51pGQ2bftkpgquT1j15wUqNDjFtPGYJBTVTfNQDMBUqPmW7CGJMuingQTW3LjZLGq6QogJZX9K8zViJk2gvtUy",
  "key35": "gQaohSMo3Uv3QG2dCkDmu32HYhT4Y7cxsTjAuAHgme1Jq1QEFQJmWV62RFLFErNqUzkEUAMqq3dHizuJ7mb3sCa",
  "key36": "2zbwumoV1b17aUA7nMM5J6Dx3cr62PqYAMVTYwhRhq2VP3X7qn3F1S7kUiYGY87iosK4xMs2UT79oHenTdvaAdkr",
  "key37": "5j8mRHdEtEitvc3YDik5MFwKXQTfJQWzqAz7awDLmCLTmfmdovdEFyxHk1sNTecbQ7pmjr1Nc4VyhyzkDYismzyt",
  "key38": "4gccv7ey8AawgiNkgaibaxNvoSxsLLSDoqE9tUaq5qJqqXW6gmupAQGywe3LLHthV4b5HTvP32xMh2jincTPdxfA",
  "key39": "2Fe97EMQ9JJ1e2yXBZTjNuxora7ir5SC6k4m2ochohQ5zjhY6DXSk8Stfv79Aq95vNfqTGaLJzeyG1TrbVGRMCUK",
  "key40": "3yXJfgZZ5sk5T5EPQdETv4jRCXSvsXkMSktrheRSnEgRn3r6aUqMn9QE6ZPhUWvxoXnsfEajZU4fBq5LXi1XFBSS",
  "key41": "4HtUiLrfXiAvCsYvL1bqTMa3WDEzXKC5sqqRhuBJZxjbnPzuCbW2ZpnZHx8zF6hmyomYH6mHacfJrQLf8DUnhhUX",
  "key42": "4EHWerbb5HjLJAJ1pisNughCcRwxWe6mot1xD9viHwDkC92ettZniNVwvsXKNci82hGV96DUgtPUPcJUWsnRpxkJ",
  "key43": "3SQ3H2nzBGrCXyzWQFw9DBH3owiNNzdufERnFh2sR6V3wTqihVMeN6CKtx6soTPMd53PfzQXvciKP5MLnrSrh1XT",
  "key44": "tkzpmmPBL64vdufaDmusax1stbeFwCXwidTgAEpGk5oyJJQ71gCyrDLa3tZ6X8vyDYM5x6Et42u5VysHedv3PzT",
  "key45": "3g3GR4aLiSmQpnUFEhoAucQHUfU2vSQ4h9vRH5yjU7Ugd6BLTaPa9m71FvsRYMZozwGtyKMpJobc6p95LKrFRVxa",
  "key46": "2KCYVYFQ8ehq9HVQ5krMPDS66aiJC7mWTBzvDcaduYVsSJo1XLqZymgfToy7kJFahTdfg9iS9Z4xfF7ESYN1DUFz",
  "key47": "4GAWWqpa1dfkPAiAN6fAJ9SJafEQRiPHtDzzASxVJJ1jjCA2erAmtEzobk2ST1m9dcbawL89DskFjxV2zSHSmBek"
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
