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
    "5YvHzscHLUw47Te9ADeYnvnP8WBgLBZ7DcWdCFTuRTAohbLpSfm2YRF8tj5orvi3sCw2Fo7maLvMLcXKL59sxLBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztX4TcNs4MsRxw9BDvX8gTj7Dc2YdwqCQVT6pKuEC9CWFfuELKtUb6jZjjndXNCVJWiJrHA2GgLVDfwTNwLwDGv",
  "key1": "32hNj3uEeHBUhp2v81z6LP497FhQMKhcxb1kV7K7E21LowbZayeqJZrq96PHnQH1vLv22gZAYvWeJcScnE6raK7R",
  "key2": "5tLPSFxHTu6Ld5Q8KEmrP6cZuCGi7ouyPMnwrGeTv1LTT8VYo8WKN2wriAkr4kmLRjsFDyaMvsy5eFdSs7d38oxF",
  "key3": "2Q5sRujQPs5UX39YbTbf6HPSkp4rmBPSFdYDuW8uNhSHZKwCjZWMgNw4ZR4AXDWbptYk7VAZatrom1hy2EnpC2QB",
  "key4": "4P4PJgjukPtUsXQXcboLQJBxQx5pfrcCNyEfodJyevnfK9h4trbovVvFii8DqZbUysRRwkBD4jBwnr3k1toaDFU1",
  "key5": "4ZYeYHUkojdSp651MTtVmwFjGVawuXSmz9MkWMhCie91QosM8uUPBuCrTDWsK9fkvfaJ3CEc97cxLNv39u2vgf6q",
  "key6": "5t7agv6EqRQW2WGcC2aNPscRTySYZhaqLTNw7J2wvNpjQLS36hG9aCU8wSXKK9tuopsEb1AsYFAoMQ3apgtrtAi8",
  "key7": "4LjvSzPypCsDixpd9bghpd128mKeWvxvbK7VBMUeSS3eEt7Pg6AVtLHpoh6eaMUuGmvCF61y41WiNYmmZSL4bx3R",
  "key8": "3EFVPDqtxGErhDbmjB4RfKJFWJDubRADnxMhD7LdH2Kerp5gMmoiNuEpWC2hg9jTeFJxHbMckQGoiQmx7LhJGPiB",
  "key9": "59XbpK1EoGWFLinGVq96JD9Myn4pSGP8ohEQWvKLVoA3ebiPjBWesiKat5iJmZDEdMVnsA5aBRcw4URzWCRfqXBv",
  "key10": "7j27zoqmSQZrdH9dg8Uq61nUCgdYotbQtQKMzUaToe6ZgRb6jraYaFTLygWcjwfRd7JuLVEWFjmhAksnYSZKeTu",
  "key11": "5vihf3J6EPj1wh5VigALjjrLcRy9so75NcbRT8NPW1BKtPKASWvtWZn1CDf4CL1QsonT7UrxeXB2bwsLwgNKpnHs",
  "key12": "51N8kP3few1AeFuDPaqn95sw9LJ4ASfc3FHobciKKstXZ6i3RFJ3UrcvExxfPTwizNEs8YeTbu4T8b3nN7ZfQ1bG",
  "key13": "32FRzGRH9gyERHf1z3aS54nJD7a85SN52QbtxKtadyCUfafq5zk1zfXxM9G1nwoHnpHbkFyMa3gPXP1MvUcLvpsv",
  "key14": "3nxUgF59je8qJTrfPxPRYR1QYk7pVqvkn4XGL7a9ijuvPNVU3CWZqVSNFWhRvZkxDnPsNTG9MQaFjXc4YjvEjM2J",
  "key15": "3iLzoRXqAXWJJ8wHck57fN6Kj2Bx17m177TMMXKM52Z1THF2p51DLr5J26UcZxEft4rgbR9pkUxSENZyYNTdDJpP",
  "key16": "CMzL4BvA1QBUhPzerXupYRyNNHRKmmuNEtBk7VVHmuNjBcJdqKRjAMsbzFAVMdpGbzwT83xsk5wofmBKTUBDLgc",
  "key17": "44vp4t9iwx3GvsosXWjTtMMJL3KdUNhdusSm6ifFEeWTG2k59h9Mf1AAZw2QomvhFkN4Cx7GsvTqXAMmcm2qQEqz",
  "key18": "5GFdT1VoGHtxmWi6cb5gmPuJHYJqQQq6GT9Yjfi1DzFMCkScDM3gp1yPsQt7EwW9RH4htsBaDS8HvBEBLP41KgGb",
  "key19": "2iE77rRhcWXhh6HLaeSFPVgmtP9FNqYZZiRRbGs9fHXaM1MVxkqcsHcGcsvs9fqRM64PKeshWihjMohGLU5QwhUK",
  "key20": "4E1WWLnrFe6TR2sak1RaUhtoQikNThCdR7jbawqAZ7dofJL9ZAFCD57u2eChQzbMAT8jovbEpKHtQeF49Sj6tSdk",
  "key21": "3Q1ZmG3BZu3eQTvCiN7iuegjgaprAvdGGP7FRPoecKBGZ1jWjUCyQzZUHAnY9Lf8Q8KhVTnSN4ipEoccQPi6Ej9d",
  "key22": "5Cbdeg5DfrA34Q8htLARMdzc28nSjDGtof2cCfNRyzkXZB4DgUJSstJJuxu34dj1VpHRXCzCgeuSJuSdad6ggMdp",
  "key23": "3gbrYBFYxr7nrdy2ce97ZMPWTB6Hg6sYRWpip7o1g6aSidGTmqNi9ahvuWxXtQDZxQqv3WGbeqjA3pN8rzhV9ydD",
  "key24": "5b3sM9R8acwV59K395Pkmw2D3a5bLNartZgyZEiysEe6ZDGS3sVE3qHxbmWe8x9i786CMNGbhrt5Fxw1knJqLkYJ",
  "key25": "2qv377Semi1bkQsxGDRZqPzfrBYLVSekwmSQFSv8sjYDYNxs6EcD1SFa5iLdYtygyREKAYhzLkXrvyV9w9UdXzGt",
  "key26": "4xZQEiWsvtSFeRm1rJvA6Vkaxjgi497zRQ2YhCqCzdFxzc5GSakNenwZ2J2Ts8i54tXLYk49KcGxhfBsJ8HdTFJn",
  "key27": "5H3pY7o8sZo8RraMtm5cXWSuAhhLSJGkcY8RcA7ax7EaMGe7TApKPp6eyLVtzTA9naAWc73Gg6gxcH72jWJzp84L",
  "key28": "5YHRQd5wezr5n7GcKiVK1j6QCGqN8Qe7JWgR2LPRC81ZHUedCPgBtkjuyLuA1AZN1CJRe2W27Fvvs4kXEXzBWUw6",
  "key29": "4PHgEE24JKoDk3xqJLkZKWFRt6NL7wELqxxNgnZ1W4BEZykxua5oMx6aHWmWZNhqDHbep5ao6SzqoAkHW1jxQ1Gh",
  "key30": "26bSK9dQKbeHFDCW6dfM7A1bW7brmXSRPXC36tMt9oZJh2NLqisrHStEL7X4w5TT9nFEgrRM2v8PteJUmb3jKUMD",
  "key31": "2xdzTQmUAxquTza1m1um6W9vgf66rYo2aR2nfeooyXgZcfPCiWFzaWgkiv5xW2ojSe7i2Ve6Szp8xv4Tw6UARAoT",
  "key32": "4o5HH6oviyEFg75tvJwW4jGDVLmaUMeuqjmMar9aGo6jqJSsdnWduzxuYR2zZXgzeL8Xpgr8NvcGceASNGaR6FMv",
  "key33": "g6hCGkunjz7jFd6EFpQAkfmcdV7NSkRqS24FmrmQRbN4NpDZnFs6aT7tTKTjWunz5dYhDkoVXC1ZijptdDCoyyz",
  "key34": "2Um5SZAx823iLYtk5zv543VNNg2xXrY21ETEd8hyFmynUnHkcxZ7gbh2jRSKDJ4dX4VsdZ2jWS95mHjArVTTHX7U",
  "key35": "XGWHQdE3T65WRrZcjYzuZog4K5MQp6xWtztBbqsxSKtrECY7LqnYoGHWDht96T2K2vCgSrU6v3GrEwQ7YozqKMn",
  "key36": "5Zt5amrAv8NnAZ6H3BuuwwYZLphfByFJtavAB1Qq1Lr8KYBo6cyTruYio7cbJktUF9oDTRaPTkGSYFWoyvY4yhbF"
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
