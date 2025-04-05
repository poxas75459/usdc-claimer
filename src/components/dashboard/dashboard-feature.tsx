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
    "5Q7CXazF5ke2Xu4BPVDssNcQB1zUfTVPKvRrGjSdjDqTFUZczTsJEyozfGbuLAiDMaRessHUcjpHfsBPwadJTYKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EhENwT2RfeRbv13EUUBs4ro5SWMDZ17KioGof86VvzVp5kCAWnqmFnXHwCXVDo2f62XY12wCqktF4oPW9B99qJw",
  "key1": "38xgGtPPCuHy1KT36xbWm2HYJzxWojrnWvzAZX4yYtAqv2nz4K8sZrTMAaPnXwY2H7Pf5Fbq86jo3qLK5QHGuRuB",
  "key2": "s7tWkh1xS2KfedjR1Ki6uENWrGTvj1MfksoeEG4ZUfxieh39TvvfHSSZ6DBM5T8FW3nrdvY9LoNyYioVkz6NaYA",
  "key3": "62ADgv67T2vtanbcGSzaxRssybPyKgrZGxsTPq1HAm3X93CWyp5Mcuyns97s34SxgTwhytgpaGdqDveMdyGevmTP",
  "key4": "sK4Lmq8iXpmMVA2pQFzVjKqd9j4BFoegFD9fgWz3mhr9QQM3uNMjMDVzYt8dfXuFnwGGGabANQThDrjFojUxkQz",
  "key5": "2NBiSxTvaMWHNZbGDY4WZecFDHmzWECxexp2YxnfbEqsAsee3Cm89DZ3xP8iL1JUbae5CYJcLTaESfzRJH7ubtPR",
  "key6": "25aE9nJ5tHXo8eiaCu8MUcHv3kctdh9MCac9KDGKUkFsUyFKjNrEF6VCR7EhEQ3NHpiaCNQBrffNekrFnB6785xZ",
  "key7": "5iKX4ESTsidyP3XWdx1haxqbVWwVmTFWyPd2V5Q2EfPSdu6pKVaNJXK7xJ836bbdTZfSFNBT3EqycbGEevxr3RVs",
  "key8": "2pUSRDZ6fh8NK3WLuMG3FfdYcJjkmp4jCe98g64rzNSLwe4WMx2uUc2kM7qu2ZZpfJ2TdTpU9QHWeEJMu8ZapJbU",
  "key9": "3moT3eNHfi8xkxnSvPUXsa9gKy8kmfS6VtreJBnc72USuD3rQqJ6macQAtgUuueGzrpFiJmX2LU5uSkYbafztGN",
  "key10": "3heqEtjEpKGZfnjJmHmxMEPu9omDosJCyQyQws8ssVvYCmcDSwKP9UPMHxR9wx73knu5aHjbFQonvhP99qv3QZ3S",
  "key11": "MhotmyMg46BtYGDmuAkxjfHzdNso1WJtq79vnyK3HKK5xVkemYGxhwKWL8tBd1jFXvmRNF8VZoDEhfBHs1y3eLF",
  "key12": "xmcdYgT93sgmdFUZdQiN5XujBzCGZi1DTJcTZNFJgRsjxhATcD7rbo4CswD6sAUjpWXqSRtqVn9tNZ2PwpW1fFS",
  "key13": "qmEq5udjYcHy1ARfuQBZRY5ov6hwkxxzT1fjesF8XoNN4TNu6F8gzgPrfrgMFEyEswwibyGefc5UvvwkmCyGW3T",
  "key14": "BJgT1fkkj4fPm5xCTvgb34GsWW1qVcagdVaz8LfMT4sQM5hfMSE9p4VAgpVLLQ8F773HwRVThGqDj4beczmdmZ1",
  "key15": "gtxaqbHuqnqUHzoEwiLsVA9n17TbrbFNft461sg4CPMQT56ZWLywdu67AKQ4nxkx2DN62Hdfjg6WSWJcKrDnKVQ",
  "key16": "24JRn1CiJaJn7sstfUzs8YBpkHwVrvQZJzDDAnunTiTXsmmFPodK1ScjMqJNZVpToJ7AFPsM3i93UXsK4bRJruvd",
  "key17": "4MuQ3cjYHrhMiagZZtqzqiPtmJdugjb1hWDYkYS48vHJYCgM5PhCRqpCTcsZmsd76Nz5Tzckb9c79XWTjHH3pA1w",
  "key18": "3888FPrhK1yoKydd4rapmRFjs8wZR1Xt4aiexhNz1qivPXN8H5KAJLoJMkPbAa4G2zPoPwcxhQgZ4bdWa5bE4yFE",
  "key19": "3cXaZahodZHJg1rxswJ3zmPLJ3R3BfcoKvYj3kCXBBMpoeoCTCVrwei2rAatmMtd4gyhAH6fxJSMqBPdXKGNZbh4",
  "key20": "2dR1BjnZNcAvidndngHqtaauhQk96Ck5pGPdtrStGPVu6tmrXXYNUTpsew1DhhkSgh8q2bpswYdP7zkGmm3YJvL7",
  "key21": "45i98CzNAPzoW28p57jk9cm4pAMzgaJ9Ez6kBbNmDN4WtrFzaQpGUu8oZK3q7XGQeXansKthhBn9siHZwmM4Wsq8",
  "key22": "2pWDFwaNZKuzhBJP3w31TnBVLYgSGMteK412cGL5N4FUADH7kVTowDpwNhYWjp9c8aT3AvyQdqGtSHobwL5SpQRg",
  "key23": "29pjUoqVjqkXZSx7a15nCiwt8Tfv19b7iQQbprZt3QuusQFVn7XTiuVmiqj6PQcTQc1jUgsVupxraqKgS6JMrETt",
  "key24": "4cPSmbhFciGYf3cZ1eaXnhmrKwrzRtEHeR7NRGVzLEC9Z2SrF8mY6kwAywc65b92U6Z1Esjk4UR7UEtAR9tJCGzN",
  "key25": "5PLygcH4L8Uv81c33xVZnnZLfBwCaEeNVd2DCxw8daMRtTNanvnwfeX3B7rjgaVC1ZcXwHCJQjHrB8FamPZaYv4G",
  "key26": "5vPvh54D7xkCfQDiWQAneLdrRp9bpK8DwzeSjp3g5UfCMVvahJLohMtdfmYkgKMgfqo6WSLSrtQFqKgY71xwSGDY",
  "key27": "659Yx2kbXWizFfP7AFY3pWuFqBAEnfjEGz8uX9UKsbwkVtrjyzLvPWh9yWNCADsBRV4iQh5amA8NTzJH33zZ9Xr7",
  "key28": "5C8JUcLrHTxuAxLbE84q1SgCG8FSUvmkcxfH43sQq7i8vciWtku6sKsZrDqxxiHfrZnneMqZaFUs28qkta4rSYFP",
  "key29": "64srokCSMCkBkBcJFvcd4bnLGTeKPmDYnRjyDiifq5JAYq8vsKxsn79Ycn4yKB97P6J2448Sq9HKchTF8BGZuBwG",
  "key30": "2kRRiiKXgft9BtBpfqLt7CZX6K9T862Mc9BKpk3iStUWwC7yUgiuh1SYzeM8N6qh16BHbAifuJuhKUrAL1i1jyFk",
  "key31": "LRH1teKrzyDy8SdAoUx1LXaduSN8VP1K59cSFm5Ncb48vHaWczQokUy2maNCgfbhtpUnPWrT1ci2HDatggRnK8N",
  "key32": "2xK4oHCFewkNeSKbGnby1Fai23Ez9qPYr393KeEPzEMxdNXokmZQZadrSDU9mGMxRCc7A2Fkzt2Uy1adVKw8zLpD",
  "key33": "5ijkQ6F7xqhyhGtvPcaeUjEceJRgN24xFTXhGJtjDMgUdEwEodH6sHwzAALMDeo1xMPjY737E7TWdaitqCfPJyo6",
  "key34": "3Lr4JUBkwn4SAYVySkSPt4rWFMFRsDNkd1RpnGyHq6noWDt19nhYszAJXZxdDhsbiod9rG3bvHyLV233Jh3Hzk97",
  "key35": "5syPaRDffCz8WLet2hFZXM2YsEUhkRjxTv65Sowedeu53RFK4iB4Ab4LB1Mc8Nu8bZMv2eLtmp446cwHeqKpDxRJ",
  "key36": "63qdArTLxMwLGt7kMTeYVn3LuX7Pzm95dY5KwG9k1uoaCAmBRJGHnZ8aB5Kx3SVWPDA7dgY12tf4pWgaS2CvCjUh",
  "key37": "5zAM5E5JK1b6fuDJGXrc6RDv7FPP96C4JC8xqJimp9Ucv4VTomGo4HZLPVcQYzGvBmq7B1kEfuYW63dsiR4cqRcL",
  "key38": "5EcyQRADKEptJLqfFyNRcGaBKx6GxQcNznpbqiJH3QiSqbjG3E5aDxLNWjqok2EmUokVFZ7YdUdKMpy43UaCqRfF",
  "key39": "hAqvtLC1iHZqFGcXYFjVUwaS3pM2ABgFggb4ta5qrzzw3ncGYDAPEXrU8bYYHXiTvZWHPZJLWvTLkQGbPK4EhpD",
  "key40": "3yqWjp3gz4G4P2QhNWXUqFJcpnJYJf5cqUibkpDRLEPkrgHBepxTJpYuJ6nNuYhQFrNd64bZ2Gv6NCLUsd91daVN",
  "key41": "5QBS1npoVHWgWr9Sh8tRDttGCp69iVnLSbtSGYnUfdxVPM2xxhUtR29tWDLTbe6xrzBgagFPo9amKTabdFqdD199",
  "key42": "2iooySwK9KzjcfqC3nNcfSYJBChvsQ8j9jgmkPHo9bkQtr4BEoALebuFEyAtTQEqkJ2xsFxtaSVgZs9CUiQMFGPx",
  "key43": "YPwvSFRSadE1s9D3WSBTnajum12zn8YyjZ9oa2m7rF8qxr3nUvqqAcCmsebq9V8hFzLUsvLjHkyrPFTTAGzGXEY",
  "key44": "4ourBVnrMrgbBPVSdhVBpocoLFxgaiqTwssfVNjJkqW9nv5coWxVR6gx7Ne94L9XjrQA59PL8LjjQarrtkLQwPjT",
  "key45": "2pFc3KJnJ7DwpREJoubiv2yavfkvDvsxQkxzfbtnySEjoQwyR6HtocCAmGDp6mU8HraWC2Dc6E5MdRvVQFCG8w4k",
  "key46": "5aTfodmL7LiY9so2WyP3adMryxP6JPgGF6aZ713pZnFr5mufCCY7Huov6SnCk92QWyduXFumYqPEZpRhSM2ehKAz",
  "key47": "523BkowvsXz5MvD2p9ya6MEFdBaPQZjbRfMWTCXQZEZksEmX8UJsLgaWyfXXsESsc6Hd8Y8FhibVU3bgJwYg8RCH",
  "key48": "MjuAVa7N5W4CcgtCfxW9UMQBiGNUtihskXSYTqZZeivmTh7EF1ZVBM4191z5t7UxyCwUSEctK2pNEbTdE3y5Hk6"
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
