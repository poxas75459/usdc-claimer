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
    "3m2vbcKqijxxnwFaxCzkh4shBpiq28JmTwZKQdAkZkkHDAbHftq8wojkhuV5deNkVqY8QM8rum5udcnqXAt3wyqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H24SsJhgtpuT1cqyUsoMVoiiUfsZqMXfN6rLPw1itTfNz1MMK5qJZjkUoTd697t5yGA2Vig9YwQ8vqq1mgzQH4C",
  "key1": "5NfvAiETkXdacxLcwf5ER4sYTp1M11pqpXX1DFH8jF2x9xnW3dUJvdXssoztsUarUKPAuGsteeVf6rkXr2cLEVDk",
  "key2": "7miU7gRypwQugJWvWfx3BWr4gYwZsEpf1oHimvXPHuPn7FWsEC9Afv2WqoieqS5hLP5xynfQon3Pi6ZDvCyiPgJ",
  "key3": "PteHEVKTxfVQpFsHMQTZMQDXrAjaWpk2gNedbojT6v31QVTZkVphBmNQdEU1tGnHqwaJPzjrNEKFcnw7PxY2Smd",
  "key4": "3k5AEUvpPKT9bpBCBdpyW1CqyspV6jBUA6db4sTaoVShiJqD859QW1mK1aGXP1qgy7s4pk1L7XeRGGuLJ8Wyia6r",
  "key5": "3oBHY1HTEduEu7f2cs41qj2aTA5XmHATBgpAJMQ97ZTnEeE42TETFZngHERZQPBZXCwf3idj6AgsqxwEn8CMWsCK",
  "key6": "47wbXMy54GU58VdMT8kuAcb1JpoEAC719bpq3TgsLdgSD9Gzd4XGK9MUZ6QoU7mE389vH7DeMcWcLC69yUMvVF6q",
  "key7": "5bafz9VnyEGZ4xpr9gQykmfLATfRuC7RJXyJ9JGjuVXwnhNG1BVKc7G7efW4Lju6upQhfqRRgEixQGErzuL4CMK8",
  "key8": "5y5y65dqbdJQgV2p79Gvj5D3dXUHpYipncr4mSusUi43eZzkPU5PbK2Bi9WRKEsatDEzxXnCLqKhWp6XHTumf4dE",
  "key9": "4bfz6MTqGjHp1apX7CqsFrMcU7x5d3mesoYV5K6MijjWE5hJoBBzCpkey5X2MEmM4dcydAaKxShbUp9ycwegMANz",
  "key10": "55EpcLxArB5XywtgA6kJyHBPkCwqL2RWfhT1sRSnF3yARpiogku3Jc88KcpDT3CxPYxfFCZmHXoWqaMa1iZ4ByHK",
  "key11": "61jHQq5vKtaawYsEbTxtRsMq4xAp7m5R96ikbEd3Aq3oLCkAwUQP8j4ExZVWjNJJSvNVuRq4H6SzWsY8hLHZbQfM",
  "key12": "2ymUeQ5hDgKVJ6hzMPzW3uefQSeoieZKQnAtmjpoZD63EoxkVCGLcEZfthoMR7ru32XAvd4oP9ciamfwtLgSr3SU",
  "key13": "5wMnNUxe1YPmdGVxRCFgB8JgeuLFXZAy2WJuLtRGzqr2krCZdy7RAg3KYJKcAmiZRfV2rH831PjjAS6Ybwg9iJdf",
  "key14": "2131obXTKbrK2NMey1KKf3wavvFNec8NXooJTxvMHJVojoti9t9vVBvqVMo4wKe9tChabpWd68j2iZUHP9AFVDfo",
  "key15": "53FymfuW85rqL1pmjP7hGdPz3NtUa31YN1rkMWZwzxd5tv3DLFfS7uinJUPEEBpkVDVK7x9MQ8fo3M8uq2ySPgyZ",
  "key16": "WEX9qGCnhKPH8Mf9BASr7SBtp3isfGbt3Jcjqr66RMBbeLVQSR5HQLX3ucdnmjWRrQPSK2vrzTyTrvWTeVutBCw",
  "key17": "4rf5X772aCkdTsVJxJY85pGRLEQXDrfMgXXw7CwNxdhTxHGnpFgx1TTDebqNDUdPPAhGTH7hVUJJKdtLygcPpTVz",
  "key18": "3rUsHjREPkEyeffhXB19TPX3h6yagJQXWi5M3Ms8uDkbBwDufdxxeNbSa7dyE5521TTGYNjoPhNmiXweFDjf6qVH",
  "key19": "3pGkCDb595PgJc2kwTDFVWqNDcBEpxJbJknSd3yS5VXM8s1L4kHtb7FLAUv8D2dbxKiUkr88NkUtuSSUSpbhFHL4",
  "key20": "3gKdxJchdeGC1mw8psKyuepWGRHUGadpUU9UQnjvwQF6NVrDthLmmiGibHee3zbqqvRaFLcRPejcNmQYkLRPK3t7",
  "key21": "3JT4CMtLnoNoGGkmXzB6NUzzrpM7rdRUTD9twp8Jm6bpXMVeYErCnk2BEC79zKzgiqCo2ZTymujnGDYFR1Y2mfrK",
  "key22": "5YvvB7yqN5yicUGHQgbP3k7a8cvckp2v73kBwfzVVbajgp85XrqKYtjiGRCWMZVtjtQNRkufgeJ5QS6DEUqoLPgF",
  "key23": "Xp4239UchzcCAc37TEC7UaEDhy1PKgMrnGw2G8gVPoPPx5bwEq3B8TU78beatXLSrz3X2mnBw5tbbp6MS25uDDs",
  "key24": "wK5qEkeNonw7hkJjyrzA7b12aEZJuyJ3pC3x199tRWea2BHFA9rRj4g4vKsftvCNxcmxar5NEWnEVKdxpWJ4B5X",
  "key25": "5YpUBXvCcUhu9W3CXfYMCm8Jgv53HHLTLwArSS96N5EYRtkP5ziSH3c1BSZ7XNKzrfYDk8JGxiEQKT6c6MhnCuZ",
  "key26": "4LuymtxjWY6pCq9vu58FQt1aG1r15KahGRtgJEmGvjqgng7utQyk9VhvNGGMQ9qJBh8P6FNN8uCZmrTAKJdJYvUX",
  "key27": "21rXrJaAFzWbb1bBzgBCxyzVbp6kCd5utVwE1zSQw1ktd7Y7LsbVfGHAxFFeFmwJG7c7kg438VMVJ6p3aUvrCkYf",
  "key28": "pEqAvB8FdkBHQMJ972TQYk9YAApidShZCFtRLxWG3yBGoXbLeoqvHmLykS3eSSYwWmnZQ9oZmcJHhGH1Nhs25nG",
  "key29": "5QTkxL8feLZnEjv6CGkXgLnZkPe7p2CdnACimKxhAWa85aZBrUQyjLLtP4QinGaK5jkLxTX39Lu9r78zauHh52jz",
  "key30": "2oWwG6n1axNUDdxRBfsApaVqmXRM6nfT7YR8HX9NBoH4jBU8yWT7bqDPeNgsnf3jpxP8CdZLEBzmckdZdhk4SiCJ",
  "key31": "5xoUPt3Wzm2XC4knGWVNHyJTHbgfuKq4Zh9wEptbhBRuyjW6cnuU6xJGuAepTShjfVK3ARuQsdMPcBneaDKzbzPi",
  "key32": "2BLY2JeVGt1LJxXsC4WGqx6ZxWyzahgzTZDGmwSPjjYwgdSvCVtLcTr5Kkz3TeMmesGoRZW7t12BSubs2GH6ywiX",
  "key33": "syHaNPizW3uxbgt78KNcmss2US4iFiYTN8cc4WN1fnYetXDhF6QG5Eq9CGvXPNBrnsu8ooB7jiAbwF7f1GGynho",
  "key34": "2oBFkWounx4kW1TXBu5n4sy6JkPC279ai1BG53zBXR4aTHrDbzZmXJpUx3xtBXqzNQAz7yPJYikTL2Fj4fSpJbCo",
  "key35": "3ogbdE4F2e3yaPEg5SacporA4UDjkJwxLZ578M3i44dBAthEmWLgxmwVi1BSN7Mrqqc5wPiiqmXMwzC6Bc8kMj8j",
  "key36": "3eFgeTwXHHmqaXvi1h8XVBj3JnYDpeWSHMq2pUBztdDG9jDfQGzkXXPSVcZ4hHhnqo6S33CHd6BVJcdGNRfW6CXN",
  "key37": "2jeTWkrzNLHdr2rrKCd7UW9mUVwooaJBCzWnzB2zoFwNJbWrAXcyEMPf5nXRsW5fchfSEDTa7gTccNZ2wykAe3uZ",
  "key38": "51r87q7NEp8NrXQ58cAVqhukq4LFwtedX6g9bR9jmNbK8jY9ntb4xT9R1LP1aLzZBjBpySqMPUjxARAXL4kPdZwB",
  "key39": "537Xw3dZnATNeFozq3d3etD7qsbau2S8mTSkaUsSpgTZgA3EN1RsXskTG8yCoSkn7XUgFNRB84JV52mN9drnShNn",
  "key40": "5JuEN3JC24XYEoi1xr4grcKfw5RtgzeCgskE6G9z3meLCTjML7Y87Gw6V3Q44gveNu5PFxXKMYu6FhQosckk3WjJ",
  "key41": "4MdYzjVuP3j86Q7kMMwiYLU7TpFxE9mEsZGRaFv6MkWZwLo5pknUpeRMFtqQfHGDyxRcgzF7e2yEz6SWWaWXpFv5",
  "key42": "5ivqfBnziiMLqkxTTLDs7h4GrX449581wW3JxPJSnUHQvcXaZfXnuMAPiTs85N5UfGzDNK73tRwHXnv78qLZJQb5",
  "key43": "21exHYDw8oXzZRwkxXYq3k4zAm1ZxvEBqqxW4LDCJNEVjxf4DbgqbBzDPj8N6LWptqKhaypF9pHuBKma9iLfVh68",
  "key44": "52KDBttxqpJuibRMX16gJACSM1VohhF2CZSs1fBJsLE74xNEsjazR1fkMcHtfkrY3YYryD4HjvcmDx4Qf9BwpqpN",
  "key45": "2ZHMENjXa8B5KqiThYEH9k1RvEzGeF9WC4neW7tr1Bgo3bpCkYrN9ghuhJXscnM2zdbv9jaj68Saf4XW3U7j1vof"
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
