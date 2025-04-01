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
    "5e534xJzzHpwmW9V4U5tSoJW5v5qpb89M9uAHkLATWmYvhd7osd5SLRi1Us9CdaNXkFh8ka92QZyeLMNi1SY6LPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5yBJMXZimwjKeB5jVZi5ciMgtpTUgUhaz74AFZrXb2sAp9tVj7W4cVX3bginBeSfovJLqeGPRqQDsxTkjXJiMC",
  "key1": "5myysjb7NnPQmKeRvQzF1HER9pFCJ6x1L92S5sqku1CctxmmJbySTRpGk2T12sFisSFEziVXYAMyJxM8DQvss1Ap",
  "key2": "2AmX7Mrz2jXCiGKcxLDMJbKiXokVtFyG9MxzB8mhWhimjGDgskTgFVS1ixqxsfQNGPm9yYCnBWPwHsdhs1vTEevj",
  "key3": "4vNi4F1TwmidKMBWvj96RyLigGpkpEkAdpdbQh29dsQN8RQwUYtekdivzdBq5UjDNPUvJWtTK3GGHsXawmbFoXD9",
  "key4": "2ofYzqH4upeF3PMqpDfvHLhEFKv7sq99P15mDEmzDsuvcZUZRQv1FSw4tJSjJQLnnQP5PUdqZQ3is1sFPnsou4Zx",
  "key5": "4wGgo2crwaJz2pzGAWQ3gE9E3fEoBM8Sy8DEgmGWAnVZM49dHZjhpdqjkhaJ2bbG13vWRXDwq14F3z1kfgPrKJjX",
  "key6": "2YFgrFgdt9J42XpQrNrwF2pAySiQTXpLJhzPKFH9hVBmmM4i5NiVVf8xPw9anxWnE7LF1oCxQrUUASyF3KxJRWmj",
  "key7": "3kqsNca9ZhjETZxr8JyPHnPKs2hcvPtyWvSuiiznkfqPpsLf8ZScLFyYLdstWvcxeqPid9RDSTeWjqFRd5cHPNxm",
  "key8": "pAxMyp67SZiqnxuLSykpcaidd5vGziXLXZDkq8mP51rYaa5oUwwAJCs3yDtEPca7ap8gKzWSDF3FbDsGHXryeDW",
  "key9": "qfMq5xFvkcvAtPLKNju16TCjT7HTJHcRyu88DC7nPWpM1yAmEGiZ4mtvpXBspS9dUpk6RQJ7Rv4r6rt1yE9RZaD",
  "key10": "mdra8DkJ2tLTJsK1ZwGnZgELHMC3vY7BJzwXT1E76vUrxDMqN8JFuGA93iYqNV1CbcgQb5GYaJRNrX3m3XM8gch",
  "key11": "3U7yJftJ2wrXdrxu86Cjg9yBLMHG51uKzxpvAdkLjhw63itudDShtcDEWfEwL7hFYKNbue3ny6dsRNKBJXyYzWwq",
  "key12": "xottxhtLWHzw3KtZWUurnkT2LrnNVRt85vw6T2oxUuju4EEMhwt6UkjwY9rACnZoBEH3gh1AQkd5Z2StCsbcK8o",
  "key13": "2PjuRasUnqm24Cvcu7wcovKtNcEMrr6e72jrwJq6MGpbqEL8iroLqAjYMcdmk6dyBWWiLSVp56FSQNPhmSxF8fD3",
  "key14": "n1sztoTrzcX5bznodKBiMMBXNzxU1JJGYSYSmA7dy3GT36nKpQKA7U5TJa5JKpY5bXeBw9V7YrtErrYG4R7fxEc",
  "key15": "4aiDSMC6m73QwKrtx3oQPGMKZkSyrpwwBYLZKxWsB3E8bZT5aQggKSgEj25d1E5rkTapKTmF3NYWioxVi56EgbLb",
  "key16": "39VT9y1UZW9GMd9vVz7fZYpDAnMRZZS6TpNtmD7TuL9jw28SVpiP6Bk7DPNAZfwWNjqYz5rwHARQiLVBPoVE7Cni",
  "key17": "31ExEa5yMeZY8wB9ykm3GSTQfagUgkZzUHeMoVmfJ9v2e2feekGsdxYZwL6ivR6db46KDV69d5bLzuJD12MrWHrW",
  "key18": "23T1chExA6nojsd51teV8E9BJ9WD7do1SXRAYpxhwS4uQr4Jn2xactKLmwndJas8h4YQ9jQAKprB3YG17J176ULV",
  "key19": "3XoEXQ1MSPqJBcddSupQibowRhqRCez3fDShAQx6ezgtFj7dY9577Wm6VMEWYke3VFxsR2EbCu8niYJPoc2Uptkw",
  "key20": "2d411DtDjfMK6zA3gaiqCoJKHHjZtCR82Rkq2dU9yYEF8VkcSMfgN2bEBAK7HfF8cpJJwRiPHFbx5RjV7xuoodw",
  "key21": "3TrtvT3UvJonKpxTij9CWFxwGfPZpvmMXBCQVfTxeq8ofvCWwhtrxxHnRUybr8AWC9gU2AUwZRTYCePQVfwZ3NaF",
  "key22": "5P7Ya8NiW9artHrz5g57MaDheCgR6LGosXmFuFPYDXXZHRjR4rbKJ1D87cTEMkaC94wYKPXanRcwokr1G2Cotv3o",
  "key23": "2NMUfrFTHz71iZ22DnYz3gvBACgiRQY5zPP7HLHV2YCkVDnhSXpgeaj3HLttUQ5hEA5hdd6S3eUwsKHtQU9wXrTf",
  "key24": "3PSi1SP2yg52u4qJ7UuwUMXhQSbS9GWe9Fo6hNdH9gQzUMZgKaf6vxLspqLNMCoGsp2bciW6ntkzp12y9AJkrbw1",
  "key25": "5aPe64rKhxyRiDbwYiHrug3aiSKqXd8MMMTgqdywewA4QqHEn8VaQLT7RfDphxRfBuywyYy4nGS39u3axgn3Dk6N",
  "key26": "5kvPvT8T5AUGohL8n9zvFRfr1MLFjNQXkbSk1xgYmcKL4CDiKCk2to4RRW2rCGrFuuaWakdRaj2sQFiVUPQNUz1x",
  "key27": "2vcdJepsPGwmLBK8yp4ZZMtvWeLP8fj8eLmTbM9MHt2EPuPi7CD8yXgPDBCcYjUgvD7p6wTabgEFCyiecT2YcUia",
  "key28": "3WvQvMxnwjQKTaaC8vsNdmf9NmbXjAhCpE2NkGbY1Mcybtw1Nbvu22aHvwp9U5REZ2jvnNfx82mrJ5wjzfmXtx56",
  "key29": "5tLK8HZrPxHuTVJnW2n2rf11F1vWn3Vk4MexS6EhybFtELo2mv4aWZysyFDpSMqkbbBZAZijfuYhDUeE5pcT3TPE",
  "key30": "ApWjcnDivo8WUdBbZ5A34gTcKR4YMsUPUN65PEkrfLqoh8TqTmd8FSxYCEQFUtdtMTKb64oAJvCPnam1wdk17rY",
  "key31": "5Bot5A3PiCJiVFyQt1Rreqft4xSqkYbm1C6mmZQ81yhZqbbhStU4b146LhMvpCNuyYV4xgRkNH5rMoofH2Uu7P4m",
  "key32": "4dwjrMz8ipTMxLa7ZbbRtHVUs7LJy6h59hDX5vQLYyP5uhxC8Lt6LzNJCH4tQ65TUhvJoXzSWUWDuuTz9erETG7P",
  "key33": "5tvrgdgUN48eqbDTqZd1fmPEFL5dDnfExumx5stFBy7vsfCaREZKuoVhRc4jrJxkJx5yKYxxJMY94yMXE5pTjXZP",
  "key34": "4t8ZM8voAkHFgSMio8W3E12q5gedm94HSkbfZHJP9Mf61TcZ8CgyA57crCPLXDRhGVyh8vFEPSRQJNBntS7bLC7F",
  "key35": "4Sw1nEnoTgg9rrQy9YrxRUdbsKDWLA3w67fmkBo7TcdExNJesQhLJa1MNao1MCjk4oanE5rjC9T1sDBtaK6rQJEd",
  "key36": "MqnBVyRsDhP1AbYMHNCyZYtPofVWAWpxP8ab7eQyQuQrHCc4zcpqfV3EuSd9hxdNJGo7p3x7ybXSFZZA8ixsone",
  "key37": "nsLNgGwX4kFizrWsGW9cThoBNNm3EnLeud59HaL6kzLmnjrbL8yPspyTb15egdorGaKQfDU2QeGHupf3kzWceuB"
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
