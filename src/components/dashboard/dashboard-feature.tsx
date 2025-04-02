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
    "34cnXwsV4evgE1sKpdmVf2afXVsxWZU27xEPkdGUaj6xEkMNayYu3RQm8w5RTYtqYPLBm2wELzEyLRqHvnXr3kTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FiRvCxN6csME6iBDZT9VV4Lj63vpgAX8dt9ugx3Eyp2tK3YCrZexwmkVsTgbyXvdQjwAbCd5oH3AG7UzVu63Na",
  "key1": "2bRpL8iDP8R6MNbjqfw5v6Qqvwaip7YP4fXj96rHdqe9wEHcHSXKUZMnr1NrBYBzUHEsNB8rcUQdFwoLR5AjKigx",
  "key2": "5yQpwKVXfYU3cAWLYR62bgKfKvahoGQsn1kcRa9r4zxwPfkkgXU6uUf6jM3ytGCcrTkCsbj3JHTd1rKhgAq2bMJH",
  "key3": "2QFDDDVpGnMW11LdL3GR2xmHPsk8qVNPdYGsgyE5J8u4zFjfA4Uw5rER7hhcDE4LCPJeK8c5jp7aAudQii4nciVe",
  "key4": "4aQ3iPPim7Q5dorFoWZuCFd1qfwrSnvhmPtH7kUmRUE1JBELeTHS2rBgecUyALpMBnLa1RjJuyFw3pDHA6j3G6NL",
  "key5": "5muveEYTywUYE7BQyyxhRnBeo6m8J4YnGGVViAXcd3aRoJ9UXYiEh1FgNCukxa9Njr4qrJkTUmySRDuZG7LDfdkA",
  "key6": "4VF9XWfCQoG6QrepJ8cfMjj6Y4eXb5uwUWAksp1nipKopXyHassWrCiGMR9G73URFQCVe5CJjnafB2xB79jURbH",
  "key7": "3aH6hxNqHoZBwHNhAiV7txMtHKZccNZSN6jmnZuZA4k8SX7caWL9F4Jo2K5pge4fgB1xzELQJxo9z1kAqS1UWJgp",
  "key8": "4DeL3LJ8yAyZWRCKWoLbhDDyhyCFrYuN19xvYGAq7yb8wV8SfQEju6aSvsK9EyvD8nRoz9wj2XzNqWz9xHMxpVYt",
  "key9": "p6Fv3XefyPuaLXSdhVCjgfNbFN6qbYhrWNE7wWLjRxAkFYQ2gSbwNkB7MTLV8Rz9x5kCY5vbHLqUrYv8eqTHHuw",
  "key10": "3ZJXi3hAPSPgUfK3rwgtzNRTonrVESn18eiRbhgKh6xDSSvTRnmxR4Bs27NM2VizgAhietbLsT3V8SCEMQDmWGPx",
  "key11": "2VNpgbBj6WqcWqjDPrDEAQ89tBZaqZqLXwmcMHic5cZivZtykSJzJ2fuFGMxWCE1nXzS71bg5Sun5r28mDr1SEji",
  "key12": "542244kY1P8gpqwRGmhRmcn4U1XRtMBRh8tAExzkzTwDXaCZby2Wp1nqUFU5ci7rwAEHAVhTtUpq9j9CeTKALkne",
  "key13": "2cwys8nvbz1BhcLNs8DdAcyydmvmwYjzvqjc6dwRDDHUafxKYF9kun8fCppHwPmxSS4xp9fpz5ALnr5zZp2Jvr9",
  "key14": "2SFAdW9bCrkEBHYr5y5DsfZG8pT9hU18L6owktx35HxAJrri43niFG7v4oQwb1G55Xtpgw6U7FjLQV9t9wHMx7tV",
  "key15": "3Z4ff2RmwK1hR4hsVJVYWpuPBiHcU1fXPdTycwLAw5xmXjxkC3TLVHRAfc4VT97FzsMMuAmDUkXGRebV3XXnDPVv",
  "key16": "2nH8PRhSNHBFVcAMB2eGHsJUsZcqKRwopTtXkP4ayDnLR52h28Zn42SETjrHdnTmLnA3EzgKfugf2uCJKCqhqUxt",
  "key17": "4UsFyEAZcXKo911t8bGkTbiKe9NyEtk4QL4n8tcJjjg5oQQtuHZXaEN1ANzTKSUxd7vyqDcz9v2cnziQsaKmBEiW",
  "key18": "3azfPBp3FGwNk6DpP6rhbP19uoRS37zZMxLPqbiUb38KD3SHzCVsJEfJNUttLQanHQogRGCxz194UptjERS6wXqF",
  "key19": "5i4Nw5JAsFbqTybm8WigU7z4m665PNEa69nxLZtNoNLNGy4NdBz9JJwotL24t5NGEKu5j6dsJ4DQqHkDfGKTCDNn",
  "key20": "5YtWRnQSspRUmfUN8BbN2j6AN14ectY4KmTbRZiFwLbXQi99BsapsW1FfZXdT8Zyp9FG8UJzR5PCYwt7Wm51rdxv",
  "key21": "5b4pTT7HtPBGXTb4fygzhMR14gJysSocvz5zDE9QrhQ9KXYcVgRXCBDfqV6J2fsq4ewJ6BoETrNmCdEjRZtK2n86",
  "key22": "55Y2QWZFrkBHzsfguxEQoXesFS9LXRqkM4Cp5YojgD5owsLL2NybzpZqxcDhoWnX83RrjuZRx9ZgqF61ntUbUJJs",
  "key23": "4oAsEGYGuDTDf91H8ro8v32hUf9qK2eUy36e6mB2eX1PtP7EvnRsDBLqRF2GHNaxQZt88bUQufM22HhszySnTRGc",
  "key24": "3uBay86HKhYJov33e75awDYeJCuoM9dVPzx1GPYsBsTtJiB6MEpDKZ4wTHohUo7RuJYKJz3aid9gVyxT61kjrHPV",
  "key25": "2wDSWPJzDnoAZdJ1XzwkgAitQZKG9V5T9vVpayC9Rzst893SFjKKNutCnaJ26aNtvGn426zQSM8piynivf4gPvTz",
  "key26": "5VtCLZeNDzvxKPDGZd4YTMCmyq6DwbZEpzeXUVqmb8a1mrZAa57ZMECZUopwZUtLuHxXKgGjMNyiLG6RDUhEAFMd",
  "key27": "5WxDo76yG6dJFJng9MdTojaHMnuLouFpfURFB9pnRY3AFY5EzBU5pPhqkfBUYsxaWYeKasR5oLwRkxjbsze1c6mn",
  "key28": "5cW21BsPF7hpmr8G7vwAFuohHLCzgQwxskzxhHDcrhwDwFAUKkpdZECusNF2Vc7rzTsoC1zqBbQYPTc5FXCfRYwU",
  "key29": "5Q1QnDeKcZMSCNx6nsgWq3NGsfbs75Y8sRLiCkdeEX7XaZSsxQ47STMLFhgfDbyEQjogjKtqXtDPQhjYF9nyEhoc",
  "key30": "5E3ohUik6YeMJMxQB9BgbAytYvHbwBYXUsmoxbbSAP4Cbp9Wf7Xfrx6zBvtN6UdZZgUbVzmZjPSnXdBzu6p9rmCq",
  "key31": "J9bFjSfhcvBwiD2vcG7Q1NeTM4jLjEjxZ7aPkygzvzKXnydsEmy2FJbm96u3cpyvjiw2WSAiin5ETpk6zo8Q5ka",
  "key32": "52Mjrp6kum7zSGTK2JNy3QkzaysbQyGsHyH1yKkrXzCM1tii4bTxXsbWc4vukfvYMYZxVspkshvGamgofxXXvbUY",
  "key33": "3UrAoz8vfoo3br97tCNd9yRL7vLE31AhPzJk4RmMJ5FKYuknANZxu2NA5M98po2o2yCs7gbMa5veN7ovjTkucSSR",
  "key34": "4SBCaN4qyED1YGLetSeTaNgDRbJWSnNUmnvAGJw7r1iVEWyshKwiHX4YtTs3TFbUSucwk3pdSQn1oevvPMLw3GzM",
  "key35": "2KYtGrQV9uyh49Ca8cyEHMxD4jMg5zUa8QRP3FeKYx8DUGqcz8mLGSHQLWf4V7h5mz9FtQQBVU4v29XS6Dzfe5h2",
  "key36": "4vkkePSg4VUck3XhJkXAQjKmtCjGM3fZkBujjP4WgbZrL7kKnWeJkFyvmCHGj6qQJAKzbzeumXJwkNFmmP4H57AC",
  "key37": "2BK4dhrb9aTiX4ABRBpepu7aJUG9XosANwsJJcBuxUhswZG8QPJxGSvBL95grvy7Rt3xJE3nHQc9KVdBRNaPPVC2",
  "key38": "4Z3CjBc9W6veru2VTrgv1NvdJ3edrgVXTNoscmPcDR941vSv9dVQ1oprGaeBA2pHfHfHPu2iPqvYq2be24vNJPWK",
  "key39": "2h1Jn6ozQvfqzTSAM7TDLBG5v1UyV4QmcMu2MYwuGzLiTDHx7yhg617Q8ZHCmh1oEPFRNgE99oefjaCH1GaxQCJ6",
  "key40": "6PRsfQd6aFwe4L5E3oj7YX3pZnufLtH6RApr77QaPZcLqs2HJqUFWtZBYkMDraTGYhFzFMYKQDUWTbyVny6pxTd",
  "key41": "2Y492MtjtBUJ6jBhnNnbzdKNUmgCL2rMHHextXFirtAuvjbXHy43BGqNEwYvRVotmDHJhL21xkP3Q1n3WTeaZmUx",
  "key42": "5Cnwr4YRr3LtR9SRwb9YETW8rV2FZmZAr5MdV56CrEv9QY6hYBPKK9mT3KDQztBra5xf4mi3mcdP9xfcm8oGxNs3",
  "key43": "2h5DyryyWMojgiCXCEeJF7eZ9BHjtuDf8cSeMKAgnYXsPYGAF9CDB88zajLwjEeFaU3yHRnW8R2d8eFFwk4xtCmu",
  "key44": "42et8JGYgqtdLNHYJJ2UzYyQMzZuw7pJe1DChTm7xWtSfBac8q475X7idJQPWNdSyKQ9M4z15mDWdonMsBSoteEY",
  "key45": "4MxYS1fyjEyN3msUS2e3YqzdoBqQGVqMjPL3kMknC1kDAuVEUxTxmyXUhUjx7NUJaG7oyobzWepLziwnNXzaUyaw"
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
