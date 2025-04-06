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
    "4ePQ9bKzSYor27APCDKsfHakqVDb6cWdKD7WdPowX8XZ6rnWWtVNQxEpjG6XMZY6tkPsiYMd51Pxu4VMLX9pAgZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBHBqUCqo7sBxKHmddv7GttnrmAgMixDmr3nXUuuiSasACd7Zq1fNgxPksF6HotqWEmi7kGDZBTGkgfKEJVwCro",
  "key1": "5suCTH7UZbW1kcqDBP8CkSdUWqQe5vuefWxDs7Lon6myVXJ735yK9XwdErf6rJYQg5xVqNymsqpV62uuQ8LekuV7",
  "key2": "29ECQRA3owwKemkWHqVKkJwWctG6f3LDvCWk2URg7DnXvxQVBoZDhoVntDF5pvwqfNH3aUePEPsegjt6YztrTv5u",
  "key3": "5jj8ihKuTXDptDo8DRoyuu75WxQ91HDcSr8A4p8ZiWDSZJXoL4my4jJA536tzLaCGaaqhNKWKkBVe7cnc7SXuJhQ",
  "key4": "4gdzTKgZLegs5ixFK5Mp41gnhWmJRnTBXQt4bwxbmLNuKZnmuPpGHr6mnbNC1AjQe1axJbEYC7pfR9EtWcsEkosb",
  "key5": "3rXhoymxZ7vow7FKotVgPrHtqET6eRafrxJnYYUWVkcQcdkhAzGWGkLVYvrp8d1iU3X5Z3WVY255oGNLa3Etpyza",
  "key6": "46aefNUGLijX5Rpk2WizQcr77cgN3kV45nmX9mdSpre55jZyWKqXosDJnAALSw98SxWbx2wV8ciNvzATSjCJ7SoZ",
  "key7": "2BTH4aP5Qem4ejUKmXRzNqr4N6m1eXrvvrNiTJhTJBcKbuEpqbX7nuyiiZYCBEfTRcT43wx9L1Q27W2tj582jajK",
  "key8": "3vQ2CectMQjdos5D33DCRfWwJ9pQvqzKRzSgXhjq22LrCbHNS7UbF7gfxp1BrEhH98Z1vxGmR2fRrxnbvMYiRZaQ",
  "key9": "2DBgCNaeEnpmHLiSYDTKSCPTeCv4bxqcJB1HK4AjUt9UojQiZP6Fu94gxR3rRXTn2c6o5YT1xoZSJgqyDaCE2iv",
  "key10": "4wPFNJEcx7Jmg9tBfYXsYXHToaN75C8dkA4zRmepsqSVEqKU3j9rCwN9V9PDHHiVvWi2GpVPxRrZDXMPAJqvx5JL",
  "key11": "6j44E9n1qXNaK3S3waDd3CXAJvZ9hY4B98u5RNCJBU1CgDJYU1nFC1kqXnzwFq9ju8L3mjhTQ8aicdkZXpKvZRC",
  "key12": "36McXrmwP6cN1fCqxpcuMDBLddMM9ZV4VJTX4KuW6C7SQVGrmDXcPmdySqHiZYwv7fj3oCrtwPE3xookvsDqJcMF",
  "key13": "3u8AmeBkauveGmbuR7wxR2oVZMcPqncwBAtA3K388b6M69tM7Y8f9P2WiguRh3h5oFBMS8DgurBiarswAnjNyojZ",
  "key14": "5qhyLxWX4NJfVeYhYccGbPuzJayTGfuycVCnnD8J4zjUR6PWDyJq15rnowzUddrH2dSpXnxrGdJbBGHchyXRxSui",
  "key15": "5FARz2xnE5Z2rawM5y9sP2vqtmgQBUZASe8dbBmTv8N4TvMViz7TetjbjXFDn79VtnAosCkPo9iij881X1v1N1zS",
  "key16": "5SxF2u2Y2j6sWkAEseeoWfLgf9yJk7cXU6XumjYs2hDuuvLEd9rXjiPMm1tVb9unkLHRR9JEtKJffwRK1xknJns8",
  "key17": "5Fu698UZTNbMj5HBtrD9oWKdb5XByt4vuLEqJ18LA9uvko9ZrrvTHRQmKSzmFtojyN619866CRBV1zFxxaGYFU6A",
  "key18": "5Ty6Z89ZAMydjGQGCBTe5wQCaMmJsRaovKeDXUTJoXo9CatAf5GAcqoMzSfSPrLT8DzZUo4ZgoMiHrbrVeDrJhde",
  "key19": "61EuQeZwy1yWnEaJJTP1DeRVq7UtvemdBCovJpZS3UkY5yYVdaeK51eu8VF1Ch9HdkQDxYoEvpkedpiXHrX5E3ew",
  "key20": "28HUwsvJ9TdM5J3gsX4VKfaT4R8ZxHi7ncUJ2fcjhKun1q8Y5kLwbeMS1xaCvvkkUb4qzwiDtdqQA7VYvzbqmN9m",
  "key21": "5fqTuc72u499tCxAZHoiqhEuW4RAQtw3fPyFhTYA89zbjbg1obqBoTxg3VJ4aYtKAERFEMMZH6NRa79Y8miBn6kn",
  "key22": "5HdDd7Ah8mBoQdJQWz1xjzdcHbeT9HxN1z87z5jubSkydcFYH8jeChVVj6XQFACbjDwXecMoRypzsS5KR4q8RJmZ",
  "key23": "4Vkq8Kczq11xhaC21yt1gQvofG6AsHyVdffo1MgdgvhukmajKKGkbEQi9sazPHaWJF6EXMuAhdaC4x6AypKYGLJL",
  "key24": "3gM3CfdsM8NM7azTvhBfjaqXQGammA4M8FZHyvpKXZVhZ5MzCUn2qqpxfVDkLs1qbsWYCoNFXhk5wHzoCdBXPau6",
  "key25": "W71FhcbELytjJewd2q2UZkoUNmt73dnN3uVHAFiLbertmmPtpMTYNK4ppfFL3W1y2BbzYaHdnYu5hq6jAYaJove",
  "key26": "CiobKWcKzWcYKtvCtkPuvCMwVKauEv4qRyTqPhgRf7ZiutNgLDTzcn79jNHcR7zJ7qTeMX3EGwAmmcBgAfVEbFL",
  "key27": "5Ai6JtNsZv8HK5LkzZieFXwmKUWXQuXasSYFaz7Sx9StsFsMYzhaSqURZXV9HTC69xVR9415D1AWGHtRvUFTtREj",
  "key28": "2TQztJh6hYcRqw82rDbv6PQDtMmZk4Xz4LPaZpHHqNEai6hqE8wGb61k3pzzAtjzEoJdGPDKotMyRcJ9oefRZfPK",
  "key29": "4XsG7kc4FyWd2c1dxXtPEwYN8vm48GwE477LSpStCgKGGhsouoop4VGGaseuNqs3tDyWnSeMjedUMqKnWkpTqDMf",
  "key30": "3RCzpxTNwQFgeVqMwe65fq5ih9T3KB8TYXdGGZGH7LFGFhmdcDUstbMq4RLCr98hCNMBZQTNjaPk71zQmNTFdEmB",
  "key31": "XkYPEPGqPMPiaqq6EZm6eqrR2YYZr21JuGn9T33zENASHfeYHbf4QEVLVGNXnumAmQtUisHSnDh1pKA4crcbCps",
  "key32": "WUiYhhgKvyjyemE5ycTV7DFh4Z44yH7Hyx5bBLhkNjZpkACTQgiCwb3Z8ci7FqaMUhzQbjbHFCuWQNSJrp9THEA",
  "key33": "2CPusawTPhnFNA6zZv6bFSNiMxKAQkDSSb9X8rh6kpYkTVyG4KQYbx5aZU7LKmRaiURm8utr5qAK1C9nzzhTgyNR",
  "key34": "7HXXjK3JNmD9tyWi3m1pPUfethcDaokTVmfKaG2qPtBAkybrnLaWUtNVLGnuvtiPGtiWnPQSNFXBp1K3gUzNNjM",
  "key35": "5jJT63r1zB7mSzXmfie3ccWipmBbBoYTLRybuVWh261Auc8oyVL2uWN5kiwUfByBiFdz31LAUSRtMQVXJcZ8FcHZ",
  "key36": "2zaM9hjWKzTj5k1SXsyezUFnXoMQqzoDitBNgFfHChBDy2VHzbiGqWjYfWZBrMf2QH2vUEfJKUXLHJZE6F3GTYs4",
  "key37": "2YXX57Z3JzcFmUaM5z7yJ1iaFM1fRM43cLuMCpsLTyEQMW5v8AxorhuwGWgNtJe2ByeynzG2MzNc8G2pJNLeGG2T",
  "key38": "3qanM9m9fmiA3BoT9Aq7d6ReZYt998TrP7vQGBKPm44aeHbMj9JC8suPE4AiuHPCzXUyZTFCDg41rFqDGi4PCJJo",
  "key39": "AUch3bHszosqAHWXskPBA7L6dtLM9dk6ZjZ36nU1zw64WjFy3baBWh5QuAxmvL5iZ2wD4WuExaf8Lb6keA89NLD",
  "key40": "66X4qkkqC9C62v2W6eMGpyMtr6ZjUq9Rk1Vh5p5TYMqVoPthT5WjRkyekzYdShv8NwXrLKR5BdF63xPr19aEWnhv",
  "key41": "2BDpvtQ4NqPduJuUJDB6pTPnH2skscwuXJgs2Gcsy9sPAzTHbYC1LMB2Xt5zesVu3DajRzJfqGiQgP2TmDN7rqsv",
  "key42": "7iZAeUA6JDttGsRXT1chet4RkT1Kx3LRrbuEdrxAuU2BEZVQKzr6D6YVFCeJgw1Xo5w8BzKfrZwFKLBsaCWfYBv",
  "key43": "2p8yg6sgHDbSJNkwp8vwdhCZ3akTzzteAqDUyj2WfhXu2HW6q8jyAKBdiDNW25PzgQe3apefpWoxNzhqyHkdSR2g",
  "key44": "4NoRVomaXG544rXpr4QLTjdBoaS7xun3N1tYfdCxR2hDggQ4F74YeCvEPqsTYunHVBs62qRR922LsHKSBXXEMrtU",
  "key45": "4TbWbjcLfFqdonwmkrtYEDxhBrcyttAo6w5Gy96633jP4quds3eSrrj7TkcVB5GwwDuj3WvwCWZiq7r6heEmcaxH",
  "key46": "3FawsmoGZyH3Z9jMJ48GJG6dmumKmGyi19JmoX17LnjLaxdF7dLQbsU1Pr9Nn8YvKzGgGmfH5w8LGTbQFhiPK7g2",
  "key47": "3zAhipxqNKKP9vKvyker5qrvETHj1jWWp67inKQPWFii8gnkDkkyQy65DNPvnTaqp1ueVcn5CyiRQfeCqGHVHvnz",
  "key48": "4FGMEeHghV7NmGLUinZFTstdYfiAQDWHVzwFPfLG3UhvxJikxsiGGLTBMA96wNLMoFNuyFhcQ7XYKpqVZ1SkbzXq"
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
