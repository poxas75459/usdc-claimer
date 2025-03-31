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
    "4MadrtsQXQDcCUNM8mNj3EfSBZde9xXt9oTbDWMVFox5BDzqrT4htJhNB6e2upLvysfH6iRXuTDEJ3q3fLcEiV27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rNSXCZm7MdQqWkoze12EtHAPveLMJxdohmcij2gjSjYPSwHxZm3jVgwhErcirFAah1nLWj9eALvn44rGDTA4i4L",
  "key1": "o43zjHBwv5EKKMVcucE7soxjWp2X3jBJsBbgyWTeYHvbFcAHf2YBxcufqaw7jT7msmiah3Gn1L1bUoBnyhRxbhs",
  "key2": "4QRWwXddwZYiNBpJKSSBrgrwXit2yx2G5knoqSPT6whCaztRQ6SwiSm5sDo4ouaBv4W8kNJxaDspMofC9tqsSEFx",
  "key3": "48Y8ye2ePH2r8CpWw89Q3FcdSSTD39Upxm9WoFaBACo82WdmeeeGqKUWMsziaXo7F2PwX71CBLXcysEv5DgKJmCq",
  "key4": "3nzgizTcKShkAtAhDCAKkReHWcib2MKP9FJHSMxKHGtGxZvKMithCXwJaFUD7X5DaVtLLMzN4USh2aBGUSPfxQcz",
  "key5": "22qVupCpH5ko99np8XWiRc5HMYeGNEJQ1Mp9WiLRThyEvWeUSTSH7fvrpV7fwsKhv6mVSiiojoWM8uLdLuuzStoA",
  "key6": "4gmEZNRsY5dRahba8CW1GRamVHy8PZizXf4ViSqefKrVWRFgQySV37Ly4Z61Tdhy8PELj1AyBRrC8hxHQZqaQMHX",
  "key7": "3B3HA5ngJCneoVegwuQLgSn2pCkMbeBYQKpff55fDhwXXmDwQCyyJnMZQrvbtTrqFySXk6UbffeqKnaTVccQpZ9S",
  "key8": "47qYopPyQn8qEKFBJjGt2jj8Y3HEpS578i4DF76euJBjW82JFf94QhpTb9BeHYESvfoc3LPrTMcEYrwA7ujVeZGJ",
  "key9": "BUabymz6fUdNf783mtcRP4cagukLrexekjHbMogoVeH2SaVwoySG7e1fLGEA2PGD38DruGjmVX5oPtfSw4PXUtw",
  "key10": "3stSDNRaV2VNoHCwcG7fKR7N7YSPiAHdiq5s1jqLkrqntCrYZZUgXLWiGqXqwx4x7buNFWcAMcejfLAt8YycnXre",
  "key11": "34PEPMpy7JhP3ciiXVyrLpDkk1kybKJekCCMXRyXVpcyGTXyDpaKFNVV3vKUyvvanWR6hspVmB4xQw5tbn3MR114",
  "key12": "4fDDA6E7x2a2KsjY5nep8YgCEQSdnvGG9z1aD9LLBHwRpECnVkhK76E96QpwbL25zHETNyJGuhF3oax5wvviZit9",
  "key13": "293Gs4QQzeei7tWmcXgGPYHGpLR5xxY8pRjatCA1fncRZ4wj9ca6CNYBmdPNQEDATYTo1jawVgme4BxHCGGzkjKK",
  "key14": "3uxpY7QX11vvmA8Y8gYqHRoXUx5RU3XeRjYYYPr6x4C1tDJnoLk6duyHgf8Vh8Q88spjZrZeudfWdNurT2KKEDzm",
  "key15": "63izCTrpyLNXGtnCJNPFNpoVYdUKWs9bVAbzZ88e4mK2qMtPoiDWNqnWnKegA15yKzSHWrbZzdm9frBsJJktiwor",
  "key16": "4bAGXd2zU1oPoFX3YomN21rH4okxrnLcL9KeqdefgWVBJLrWWG7vtHPQ4CczTo4g8mSBdMgttd9V6k8Ufn2rapDg",
  "key17": "47vHCE5MGJBMaK3RK3nNTQ6UMR3zqTeNGPzpKN8h6b6zx6JxJsihgXweoarQoxWbtkixUh2JVj6cJaNL4eoxDgTF",
  "key18": "2Z9vCJDbGY1eH9o4mFu1wErWdZKeoNsXhmsP9MNRjRknF2y42CYLwupEPzNQbF6dykS5V61AiU7pzNUenhpHe5eh",
  "key19": "3Skn4YPJsHsMruWLJmxTd1Hp2KWTvaAJE91FLugFkebi1ZmhtNvqRnPWurCtc6p3F9odgV28RQR8XDyf7MhD7g6w",
  "key20": "4EMHgRNot9TeL6DY3sYCNkvc4FFCk8wKovU7exr7X9SaGQ4mfjEunLCVVNbjBvELbyMqNGpeDbTTtNr6awHCrkPn",
  "key21": "GAQuURy4Wwm1HWAhqFcHrGi6ddVBZQsHGP9wN8ktKykro9rtdySP2o8ArA49JExjRoUeAku3HaY4jqfdqnq8o5A",
  "key22": "2PhwafvQcQZjtfbqH8YkNnDppHXsHpgU1e8XZw4QMNRbdeDyxWN2v4EQbTqS6AyKmVr3tz1qvbiAtiZG7icVG1wB",
  "key23": "486SFkYN5DfPo6SjPhdRTxf4812jfbtxpnfnShH4JuqzA73x36ujybKyPu1HQZTs9fgxkZZegcAcSuHb3Pu8PaJj",
  "key24": "EDwkDXQCiDmNWwjeYyozsFNGg3uroja2ZvCiF5ENydoY3QFfhKFdkHixXSTMTajKm7Kh6x6n7hYUQUFmf7TfZsQ",
  "key25": "4bybDsU5NZ1wPhtH4yGpESsT4BRq2Fk6PcHzFqibawtDYYoRF7CbQUmHADAiB2zWD73WPR22FxZfdxt9ZNrGPkua",
  "key26": "4kZJVRZdadSiq1VZismBws84zx2ek9tPd5hXRDNuAc8PeuhNbCdubZBLfNmnmT9dbxU2ubpZkkCuEY3kP7EtuGYP",
  "key27": "2ikFCkddhRFD3z1dBtSgquWKxweDqdwvhXpVFRwBQPJiNiyBVcQ1p1ddtiRkXP95aTDutS6WrmYfwq4BE572x5Dk",
  "key28": "5LtEzRMyvtxu89EmHCCe2bUnq3xsY3dCzTvw4deHL2dwxtmxVScb98Uszh6FvtYzphNwNFmWeTf8WU4fTEwuVAJR",
  "key29": "4kBweBN541W9mucTZCyRM62QTU8EsasJVMnKxFMyrYYv4m3qw3bHfwsaAXy1RHxwRpRJWHYGkFeGNmtk2Du7Y11G",
  "key30": "VaSF5koPYcZkwgR4M1CTGgo5fv64SZKfWLe7s8Lo7yZRtcTxSdQrQa16zPMLpoUQqRVa2V6RxWCubu2sYJRpzLr",
  "key31": "NdcBJQEASa2aUeAQD7dAajjYrKddu5dnmomU2jxwCWQCvQ2qT8NdaXfEFWzDeShdDWtdv16sFMeiaQVwTTTxm8m",
  "key32": "o8sDrKTe5yHK8zdeL1dnyfxUoB2tP854tQsTYZWnBraAaBmw1tcMbXyq41PHP2KEGbDsGdaXzvtMHW43ioDyLj9",
  "key33": "2hmjLpCrAo77GLUrMzgDdKGUYTtDSLBKYHnJA2rPAWrRVmigw8Rz4BPHBa6rnZg9ZTLNAwCZEEUMDxqKjDJe2DGP",
  "key34": "4uoGwU2bQ4Bmzg3dmXtR5hqTPu7TepKAujreK4BsfhFdVXxLbMHtX46RZSGDq1yjW9QnLTikBWuGLjrEVNgb3Fz6",
  "key35": "4cuzNkRHS6tok7Kso58ixk6BYxWvHbtBAXjTngmsJ5itc5yheNmJS1u2mpE17bzjypS9GMa6s6HrNtDVEZwS1G3i",
  "key36": "iGB79AdZXC2jFZ8ficbRNadSGm9xkLDahzc2X87gghabZMumXys7vh8S6hMuJjrNdoKw5CvGwQ6jsCnaaWNFCDY",
  "key37": "2J2pQNJGx4ZZ2B2rDsYaNXJgFPmtbYyhit7vrLdDqNQVwhzFqZZB3bwshm5oEVs73Z7C3cLAPaVVNKhZLzJnNvAD",
  "key38": "2DukB8TETYZRTxSLtjtSFaqKwpWgMQfvTKjuqry9RjqkGw2egBWkCHgE7mAELZz56xkVQtLPQsnGkB9c6ERQKeST",
  "key39": "386NwD4fyqLQxxM7KqrEwBejgHS9ioFdsnMpdBf6EsTpSXg28JqZ2gf8NubWPxpHK3WKoUMNvweMLZ3NAVPHs8qD",
  "key40": "3ktcj8FJ69t5XV7oRn22vNTg8DgCKPqhW5t1qiUPJb3icT3bYBE7fX15beKQvsaL3ZgXoBLcwtHTKzT6tEBv4tTM",
  "key41": "2AqB33dZUVzmAxVHEwWdCjf4kLzwwRNNZtmHtaVmThoEwJhunoeV1ZmM4pBxW8LnAJHKKCMTwVLdVQz4hT4farZr",
  "key42": "pqT3Cu5CuAor5za4SzACKb7stCTS2WSyB17N1kL3f5vzAiNhCfaGZuncyUSPbacLhtYTy1DgvJA1RLt6a95mZ3b",
  "key43": "2e3zhURoWAFZ6jk6QfMSnrCidVicG7NmS9yQSVfYEnRnzgivReTPv5UkEJzfvjvQ6wzSE5TvGWrxqUW1oF4jzjeY",
  "key44": "avvQ56FpHUHMCSyz9A8VHHjxrL4tJtG8Y7e4zfmmFWwZoaoibKb3dqBJtKRFHSu7f1SQTTSaiYytc64eE27FxQ7",
  "key45": "2SJjc4eTmwkaG54eHESqg736gZ1f9rtxTzw2cCxMBzFUAj7wsRMy7WVYrsVaMVfb1JHndeCcs82sYkeGPoiCQQ1g"
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
