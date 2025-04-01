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
    "5XB5eShcMMpiXFMRdPwgFxdpZwLAL9iL2atqhNjgy4QSV8mK9yomHjDfP2819AGccPwJd7pWYFWWn52iocFgk8Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAw5rruXQ6UfFG5YA1ALnq6j9nmeuVectVmaVGYrmv4csqmE9q9tHu8162YtGnvNe7vmaJSFtjy69r38ci4tX2e",
  "key1": "4e5thFxyZ2fZwVPyjymr8uG9fdn5ZSxG6dXTWLgK8xvC8DLhGs69FdsReJgddYYEgR9R9s6b4CQnp1uCmcNk5A8N",
  "key2": "SpFRWwAgDmujWjuQNZ37iXVn6xpL3UjWQfBZEtFpA1WcSoSLYfcfuoXj9MBboJmAJ6yj6izGYj1kX56RkNJ25Kb",
  "key3": "2dCYq1PmP7pcsEKFj5tg621AMbcbWLJncXhA8KiEy1aH9E1hTuMUfUw3YfLMKiyUSbmcPz8wYLBMRahLfsBRVVd3",
  "key4": "5kRbVxuwVuYpNypx56FH8RLCFJJgpmFZVXtoUQRpongTtuvKZ1NrqqJYWrHxtkzjG5eGrV7giCYQEQBRUkujTq84",
  "key5": "2RUudUDYdNBcSShnCvyrPQ6tp8VD4KQviYYLbkfAAC561HjvMEboL4FDwxGVia8Lea6Z67yVmFNFr6u6dEAnzubs",
  "key6": "Y12ZfWetWSNgePTvSVQiVNvqrttwUrrcQs7yZfD7H6gjkDRseYEcCPjrYgQFa3HeJrnkpHYtw8Bj1sUUtP1Xpnz",
  "key7": "4udDadFwRcAJFdyMSzVZYrBVSjVWDsuH1CxFPjPNR5Cd9nxtYriUKChTo8edwZfyTSWnYtL2WfY991KodopmJu4Q",
  "key8": "3qssWhqS8zX8KtXiwg8MToGfmpbWs7cJoEzB94cjApj8SG3FUWeezFazcJfUPK2bYmVR7FeNt6StvXp5pXVcbHoS",
  "key9": "2gDJQfhEpbL9BmyCVrpYfPw7UD8KXVbWBdwfWhYZy6XTmCDUFK4J4M4zRbMJ7UqfKHnyDBv8eiGFuAxJzBKs5xb3",
  "key10": "3F2vU8VCmvTfsx2apDGWUmUfLuS9gKqXq4BcC6gezmoRZLKnXCTYT7QRwKr7Q7hpf25XTWgqZ1Tt8bcThGZEQueV",
  "key11": "2nQ74WG7CvPi7nHR2aahLDto19N1jZAy8A5RgBE6od6vJSkSvVdoAiW3gFkmbMPZrhZuoDVKobPe8aKSTmrMyvFF",
  "key12": "4QYRoXsiwinNCPcN8mTUJMZsZTyfxuv6MHX5GB3WP7fz7awYKaWDraLTffhgRXZyJjA7o54FVxyqB19CseZ8E94U",
  "key13": "4ZczHSnLiAYvybuubrWsY4qnCgjWjyZRqwivyJV3q45Tvz2VntabKeSMhrEhj6wLhSzx21xHbV22wuujdVu9YW4S",
  "key14": "3sKvQo1NeS9yooEY2tcRGEMwdNX4ZX8sUiverwioenukut3C372vxUwVfCiN67BXvW8Tbkk4woQu6zMAefnEyDiX",
  "key15": "39geNQX6L4eXGUhcgKgn3rAkNZUrcTKztFiw8QZmFPC2s94vVfEZZNfGXyeygicDCpheqfrFq8GRJGV9K5YBLgFp",
  "key16": "VXjbeKcW7jXEocnLJcfkGKnUu1vohsKrPBhnKh5aE33VxLT4EW7EuRCMzevi8NpKYHwiphCZApBs4kyJdPYaYFk",
  "key17": "5DLuGPKCutn37VVJghBYRPRmk4eWcbbA5wVjhjJGpiJ2boZZSbhB1VGeULrzaikAkFR7f6EDgBi2zTkxJX46aukW",
  "key18": "4iFH98Wd6imkWpzhSBA7369DxgzkpgUcuQKtpDvjxXSKyAFAoiA4yhrW8RF75DfBnJmebdw3DD64kHgxyVKvnS1B",
  "key19": "3HehRNKxLgvCbkteLay5Bygrz4WubEAZBeDmUSRBsbJrcdfNYSTDtKGMvSVbf4UBGAybYbK6JmGvpW7BgHsnjMBz",
  "key20": "5CFeDNTH1EfUXVdhPXbvK3D5aZ63i8YA2XWZLuv9Vxq4RsaAZz67WFvmJw639mqF74k8rkBLkA4UU8tEuSSnrQet",
  "key21": "47CSgMT9AynCGURD9eAFqWTPtAQd53N6XHQXbJa4Qiomw1Lnk21ARrkyxsHRQNytC7V7ew2KKwMTWnbNXPFFtpUd",
  "key22": "4RyKj3MSGx34EXrAi69ywW7tE97DpJ3EFCfmbtC3vDv19eGMaJb6mobXu2ZxmmCz6jHFcsxjes6hx1An4ZAzXnCe",
  "key23": "5yanDQ3tPr5QwSKe4qdDQaiAEV8nqBEareAMB6KBEZ4h3WhnB5ANBb6b9rCwG4PBaha3pGdt8hy2AUjQNLJVYu2f",
  "key24": "2pKM8coZTx9eKV4qmtqVwzZwKs7BwmtHPMr2XizkNbLAum4eks2KtyJhbJRMUXaXBfYCNwP4qexHxQJLBnqjTZ5y",
  "key25": "3fCRdTeKChnSDwfhozQnN2piqZCDJfonQYdybSxPag8q2jm3PgQGGW7B1VNKvSaC2tTi9vZfX8PDiZyFMvkG6FMr",
  "key26": "rKLBTuAf58LfR5ZZB7FcY381GouHK1P9Kcoh4jU7t5gS696LzPXuJmN8TyCSyGuoPrQDjh5GkNg4xhMh9weJgUo",
  "key27": "2GKQyzgDpGQZRFk996jbNTgG29mSPPcnB82JdVrqL8GyNNSYDDFpum3rTM8YBddTC1AiWT7PA9mqBDdstgE36ewJ",
  "key28": "3hvoXDsjuitqiSgS2qEF4PbaqVgyEzHzfaJB782YW4Nb3dzXkU98BDBkFktjexXWmg4qkfyTE4RJet91SpKY1dQW",
  "key29": "2KxXeFftTYA29n1cit5ovma6Pu69e6xDhYFMRdWfsBddUquc1FpGzSRddoSrtRLc6k6J8Z12yW9298c86GdMbyAN",
  "key30": "2ua2PgyJXUyLkMm9p5R3hyxzihgBbnY2vunJBCybc3y598DVzEkgReq4DhN2kvYLo4va5VzcQXBCMyAztpLT2FhD",
  "key31": "5ZLEkf7jyDjWfmeeVHyw4UU5WfaKNmhmY2qdGEmbAXvXbcbcX457hPcqKAWfns71RkXvQ5qDBwGEWzkkF3FemQf9",
  "key32": "WL698exnBCTJdPFZhiWfpsJmH7mEnZTTN6wCYbeQ8i7FoJwPNE4TPyerC1sRZ4Nco8VvHCf3CPi8vWRq1tFWkN9",
  "key33": "55J8hm6fYBMHp8LPaS4yNRRrxPKa9HcvXsQbxvht1q5purwLicqHnf7Dy4GLtKsvudh4Vn6i7MVtEcnNKPzvW5ZK",
  "key34": "26jFD8UHxMiPHCsuL7p4FN9JeBnMuK8DqfUSFUestGhfNoSQDx2TXxFTGA75rok3eo853yXsj2iK96eJWREwzYPG",
  "key35": "5LosZ3NmFL8LNC44sPrJXozFC9J1HQEpk9wJwQqqWesRtWGwiQJAT6rN3JwimDWKqDnRXaf88Z1n9YuPKwCKGLDr",
  "key36": "R9jCSBaUPMcoL7N8EgQichQTU3aYL8XEBcio26Y1TkYzExPn5VSPGdZv9fKRduYCbNzTdMff74bivnT7a3QF2Ha",
  "key37": "4PgfSrxf3NMLStmoLQe7RVMPgSGtJKWxLrw4vmjujpho85CZRgcHjDEaHDJ37hKT5hz8Jo46huKDd7e1BiD3ngBH",
  "key38": "5Dcq7RE9gDhWoq8biqjm3DnRBFmhTaVYVvtusngycGqFM1nCM93SLsjYhBiKnWQrDDpvyeMmThf7HYLC9BhamQQH",
  "key39": "5zmpcp3SpRhenHiSmfz2XgYbvsog3UpNSrafWJ8qcXNeBu6PVBgoCHCtfAnfg3TvZuYYDB3useze25JkiDZRSjXY"
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
