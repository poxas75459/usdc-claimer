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
    "2r2mqRqdiFjbAVxXf4ErtcSk82SnbDxT35u2jqzKzWkNzpr9Zuh9FmK3JkfZ7pwcw3ZbiSyGz58hxhHqbk3uUNYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fA2Wp3sYZsCodJ1DLxGAkgTMgCVoxQ2KLPYCzkF8mBWMTeiAad44U3LXuuLECwvxCJT1PXkFgmF34ETYWQbPUjT",
  "key1": "2mFzcyJHcepvDnZhdWYR6sxF5Rf9RtqykScfrP7FkTuh8ymhsUCp8DNQ9YSS32UgxtRuikFsw7oGJQ8uqTWxG1cA",
  "key2": "BTkh3kWiSYQ7bGVBrmzPuwbh2ti285cxVmePPfHAsfZYcnzbbPD1tTfaQJ6zw93SGzPivCRi9seDo3Pa7piRGjr",
  "key3": "LFQJrs5nLa5BgwyDkwNmAbrpomq13V7dYsyJhSt9iffkhwfFMvWUszuJZpd2zCaU4fhhFrVSVwewNVn4ijtzU5p",
  "key4": "66QUKmesjc7PMhLrFZcJVxegMdUf8ausJpVPMcytXboxqFciBpLdAQT7tQDVBT5Fd3CaCp582PrKuWrKmGmzo3Dc",
  "key5": "4CenoRND3izae6BcHte2WsiV1mzdMwSWJjECFAHydvV9EzHnspXM1rVXu6GCpz1U4T9y2id8XMYx3Fu8LavbqbUp",
  "key6": "3y2B598BXNG2LMaMYJqnmm1tEW1BQzmVUJXtYJW6qvyq6ExtAMejYUr2ti1C8TBithZAhdoErzxAiHSdzrhyFhEx",
  "key7": "2E9zeW1JpEQTiMxQdB5SQWSkNJm3XSuKj3VSupQZhRGQ1u3bXygJHZGEs1bzqME2A6LbZj9U67K6gEKY4SvEFyYt",
  "key8": "482Fp7BQhUhVMEZYxmRNiENruptcCsfWcoLSF96MtFQgPLsYyL7fei9cXq74GiUzqwMx5ojaNkdBhXKmoXn72mxp",
  "key9": "5F6MWsHBG4L1etg3bxdpKveY645szzpTmkVViqU7gXQiAX2q4dkRjtwCL3w95wopABVi8jFh8NYsw7um1N9avAdh",
  "key10": "5hMntcpT9gJ8TJpufMoqD1DcTtMBuMDZkUCMXhrKCn8t8h1tTcPjC8Ebn3aVuZeTQgGkkhstvxttGxeE8uxh2r5M",
  "key11": "2uNyaCf2am5mrBoNvmTT25KjsSZsZSkKg54ta21PrDUw5bBsXphpSk8WVWKNBpt58hgJ3ftYNfxWJgS8ERG88bx3",
  "key12": "5FYfrRkSHuHPhuieFTn1pNLKQcuKhevrY8p1MoLHAZwHuE7c7ta9tyjfFCJSrZ2TCtEQU18CtEK3VoKZNKDPpGdR",
  "key13": "5WgAUkhhpbeqqARzjjZdZN11fza1kkAKMXd61nZTHwMpoymJWcLMRhJUoKpPzqUv9DGQGQtxNxxzF7j76UunvQne",
  "key14": "4wryfdeXiVCj6DucPV4C1RKXxFnJ2eVb8GEzrstiKdtEmdUF7F9pscnauQy36AnAZjupku96vt3yw5yfr7HhcKUd",
  "key15": "tAQfiig31hMqgqbejpkapJEdpGfyeRrcKtDWm1WfbZBE3chNFuYdWSyZDBZJPXquqsHWeLmB67YXzoCKVBrpP7H",
  "key16": "4L6aDW8DSmjrJ2zAYcHmSN9Zq4LFNWC2o7MAD6JELmDJaQaSDmLosLdsRmt5Mpv7BuGT4gngDUjevaHrQi15UxNr",
  "key17": "3poHjp164tawJL66V7PBq5UwqDfebbWJWpCth1USVBXEZd7F4zgfYaJhP6X62kxCeWLNyAWWaNR59qVBm91Mj9Sh",
  "key18": "4NsUsFfr5sUMA7EtB4mS5MhCKd1MdccC79yDJ6Sfuh2Wrq5EK8ir5Ka7P6rkbLRyecsdJv8UcQdESCfCKx9cbK2h",
  "key19": "2hQtPKvAMSZbNzmJomKnhRSwmNVZuqdXZ8YZtDTJKzr6yuwyspXDwrGjTVufT2GAMjdM2Hw2aK9L741SEwwRoyQQ",
  "key20": "2W3EwUkitKUZEFp3H8dtU6qkKKbYWs2vNgxbwYGSmHMwnaZDmU8CygWrHo18YFmFunU4mKpMyE8m9zBAGvWxW5Qa",
  "key21": "2yBV9Nwk2sqMeWRNQSaxixujnqkj8M1tZ6L7UFAudkPyAw2CTgqJkX21R5duEeU9hNuKPRnomK4Cx9i7ffD7GAvo",
  "key22": "65uKbU8dzTUxe15FpvCiANCRaaGQDptHdBEvGBfX1eNspEtLBwTSM2a6yrwzRbEq6PkEK4faSeCE3L7LBsUk2sMj",
  "key23": "4DoFfmFxUX8Pd6Np4q78KhMzHFByRp4AT3bksfatvsn4YC2xfmKCw1tszHFLV8PeAnxTzujyUBcC3jssSQX5PLwQ",
  "key24": "65ft3ECWvgjmzrsq4ngFVFobLsTBboU7FDCVjrHG7mqMgthN6DixYjCvaztK4G8QeDBT7FTYV88buwf2v1W3Q4ta",
  "key25": "2nYuWJgEQqPi3X9bQgBTbuTpGq6KaympMtZawVUELPmg1W8n5WtrZkSExXx1xEFZGBUjRChqCGyUr6Gc5JxhSrfK",
  "key26": "YfVDDS4vayEWLdgBMSKGz7skGChMMe5oz4BFS59HGxVm67DVxCwumWZxXvyo7wfZJrhBMdxyeZX2NtooNEaWfW4",
  "key27": "4nzUmSm1TTi2GwPXzrS5NyGYDpSEEWEd18HczX7eARBSQZLTwWjH2sbDE8HFqrmVjV4gCjNY7kDhv96ZR1iNqHrU",
  "key28": "4tVg144GdBqzxWmTf2rA5FdZGtJsEdGqk7ThDayabta8KkTKw7DpA1hwvRXszTFoaenjbibS4cQhNBs4YpG6MvNi",
  "key29": "2TjSD7HCTj2KEwwRcJH2zDQGpZdznf2R2Kys62VfXf38rAXGXZpHxLWf4brbxBpUUKGwThhXRnJxatSb36cxpGUs",
  "key30": "2vytGKqXX3taMr69gWNb7Gbq6iqwrMrB6GmyrF8NkvWcXB3MAV9ffKE6YGfPWUzdXd2FL2KNw37Tzzy2NFxWrJu8",
  "key31": "3qVz5m56nQV8yiDxgRGEVKqVbyGxHWTowiZhmEVG9Atmm7NMspGuJWwzqw5gDHj9raaFG24f6j8sNaNqrdimrG1h",
  "key32": "3TgG9JfJJ6TQ2r55YPeCz8zJAsTVRL68fnJBYAXTnVziRSBjFvyafptUpqNMVF5uRENP3uZrfaJKpagvJuz5hrAa",
  "key33": "26n9NNKMCip2ZVhigsTk2nLJZ7ZXgt5QpGASvSTzFsgADF3m3XPoqe2p4fMkKrT4Tjsi6TZ6bFE4ndaonrsAC1Tq",
  "key34": "5DdyPHgWpjQyGg1bVNJWpfTGd8ix1GhSskqaeZmeQgPT2HjyazgJCEPag4pwWNNRQdvrNdiDKvoeJYgJHGTdahKH",
  "key35": "ZpapgB8p8eeF1AwFcY3fQ7qKhneSSbhVJvYLVEnu7zdcLrWwgf3h4a3zw3VTTMgsdBsgGTmvbfwcdMzh2csPrqk",
  "key36": "2LqbBZ2XcYGFbjUyy4Abg989GS5mLaMbCwHBz6KWyphZCbJMcX6UB3LDQ2JfA2PmcUcp2oxfXodESZ6uhhmguj4F",
  "key37": "62XMCL8X9N52zcpM98URm48FZ1XDh8FGDdBM5mhuR9WxkrUhM3VQjjcMHh68mYPdP7hwjoMcJdeL8YS6bzuTdM2s",
  "key38": "4yciWCCzWqZGoXvQ4QRfCiazupDmy5BfE2NGTmAzsXC5BdRZMkA8f3wtvVMJauEq8YFSpsA3iNtecgFpPgbnuFk6",
  "key39": "2Aw56b4MWvXao9oAcg6ygtara14iBCE5PXuVqnqGKRLPE9uqq3d1Ljfoji8ZHByQi275Ba5WJHYrMNnWtfSrjbhT",
  "key40": "5QYkQRH1ToVY5Bu4vmDndop2ZDLgCTcrUrgTCseyPt25uLWYDoPfWc1btftNfz7akmMouew8EzsrRiTctMwVsvXb",
  "key41": "2pfYRiJeXwdWkGyCV8AZyya6oKhnKzeuTgtPeRNqr4PKKakPbPsHgHBjd1csWRUjmXn2PDQjzhPPmoHAVcrziajU",
  "key42": "bP2fZacDMNmvG8gGUHvVbGShaUwFrXEdEHo57gRzAzMBVPo6cjx7jfUkVGooUhLq1SvJWLwwmJBVCeE2rSwx5ML",
  "key43": "4h3v4rtVZKr7bNWPQ6iTRPEEuMAjbNarWe7NUpLtKGHXC5ambjcpBhBMwekPvRBc6YPxQgy2gUDhGf2EpJpJEwKq",
  "key44": "43uPvRQ876GCs5Xo48Yeu4ZTTBattqwvZka7NjJiN9XGqmfeZY2BkYrbW65Yc3CqPQ9ZAMZouTiPTfkmEbWp4pRt",
  "key45": "GVoEYXZdLhgrhEQ1xruDs8x5vSyUFYAZKk3cDgfsVsnSENXHvUSp6eoJM6jw3YBVmLoeWV3uecpMdXvQuaCcgW1",
  "key46": "4fuYHQk5U8ycbUxhLQqqRgZ29VQc1P387tzeqSguw6DBXoCNdhfm4WViATeTVr5tPVYVVeQ8KWg52hEq7zdGriVn",
  "key47": "iWyPe1KgYRcBcvbe2ZFCsYDgENnffarEGT7PgWGDSkjzot2QXvHfcJMLEhKkzdDaJcPseaEqA9pVdawbLssbACV",
  "key48": "2jFwEuZgYva4Jzmi3MBL4JvoNQYiniQhTKu4ymipepJry58fKWKkDPTzfAd3s5VCD2WhHr6bYFQvnHdX6TLWemrm"
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
