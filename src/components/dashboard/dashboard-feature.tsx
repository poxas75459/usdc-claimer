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
    "2Um27vqpjLRKBHgEjGdVtxfmy8HBUtaYX5o6VaBjgvbxknhgJi1AwgH7zrhH1bz85tdLdK7yR54PB52tcAmXLVaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qWfRGSEKWZi1xuS4rmP7AsNzsXLdyvX4BYPBZrfHccj4sqQmqQ16VDcxiEn7Ze4ufCDbtWgSCaUbVVSFn7DBim",
  "key1": "4gWL9pvUSKyvzwCoLneyAkKrxwUwUooa4gKDh8mcZxZ6vzemP9MmqrnvL4JHnzU3H6MJQ8zV1GDkYTuz8YhSpUVc",
  "key2": "4rPkR26Hd7AT2dmK4Tw4xrRWC8Jj4kVswdPogajrT4Y7gGmF1maJQG7v7gXnc12MmeYASpS5qnVNoexQykNpohRJ",
  "key3": "66Y2DWFkKPTcHsfGn72pnoNQY6eFQfHNWmU2u1yMXbdgLdk1dNMotsY4FL7PMX39wTqihf92enV3uGtAQwVTrXJq",
  "key4": "4uqUQgy11bPzetdDymg12uVuHxbSirERi1iCQP8zuSjywrFcsTfqzwgd8KkQ1YRXPP1wwbfWXZA1Yxodk6dVpFo",
  "key5": "64LYZG68qNoMHmn4ohXN379tfM7C33QSndQCyboLyYkWDEmR2cSyC6mnCpd99XZSDjBQS4a1cyTBktxqT64T8r9j",
  "key6": "2PjKiLDMp9NrvTb4PG63zqHvDkQ8VjQJiW4oGnVU8TP8kX5iXDPQgNpMLqxu1QuNK3x4j2CM3SkKVsKRGVb7F5Ny",
  "key7": "pd8fcGuSu1yysmWd6Y77u6iATHvoXxHs62NS4YooVZaruR3Lz3GySwE8u5Dw8PL3aNJ1TaKHUMHJpGSPTNUSHcG",
  "key8": "5SPxzC9w3qBw6XMUuebLXbj2uCELJSjWcqYUNEdwUNCVkdmDBoSvzo6WYsi2UrTJoQ9NH341U47wHVTk7k6xjYex",
  "key9": "ccnhthj4QPNepUcnKLfpwbbsFbm75QjvZMcGHtay1ajTF8wFVsk8bbHsWXKZPqWZUtrTLNFR5DtsrHVC2R3x6m1",
  "key10": "5n7vGSsQGqL8VT2WMvCLuqAziqAHLsDLwuPwnK89mQfEwKLZz2HTJjRc3M9MQYMNhmmgdJUiweQM352iNDxCXoQn",
  "key11": "4PLBQmhLxBGVpH9rQMmNHRBoQbd8vymAEK9au2f6J9HKGdeCm5FMQeWz37U3ZBURadzbzQ1wzA36pQKMKfhBRK2q",
  "key12": "3z6xB4sDwJaoiDxRLsKaF4AXeaVC3paJpRLm8C8vkYkVVnzowM9xkpbmsmxotnZnkjhhMkwqsFZEKA7Wk22bBWLZ",
  "key13": "yzVDpYXZa2i9vUG2pdgcHRnBesfbbfr97XgrBmiLE3db3G7EUhifG22wLgXesgCiH1cjRFk17R9C8BpLmVjfg2x",
  "key14": "uucrjGDp1pRLAh4NKHAZ5XNFUu8hgBLEpqshysu3Lx9tyxP58XjhiYhceGdxMwY6HXWLsT6peJ5xxjy56QXrrD9",
  "key15": "4XYWTx4YzENe3iQUeTZdscqsHKhUm5LFo8rx9aoCAF73f1XZjqiooHERQ8WFVvneYBU1r2kP1PrLQXRp8xvJwUXS",
  "key16": "5zrYHH6soks9pJgGLhJL7m6PbuCL4ffj68NZsrqyGqRQnbueSdmoDraPs6MvW3Ld9gVGAKem2mfJyRWy8LVtUQ21",
  "key17": "uC18HkDgqJnbJoMpPy28U97rP8uxbfsH9YKo8QXCdh34thHNYZL2xNAqZXrXPSJKYP7ffjUjyJmDHMw7M6xEbnb",
  "key18": "3ss6zUJqtGJmPTJUZUtjujz8nd3QhEmKaWSreaPEe5Y3wCXtNhgnyuEVbVDXoo4CgYrHR7uLusf56d9rg75dRZz4",
  "key19": "5C5X58i49YqY4rMLjzcqxVv9wRkEX4LGdXQLAHgYNw26KtqHpPDeE1EQk5C45Xx7iLuUBMZ5unGUmWLmzbXUyYJZ",
  "key20": "4fzdxV2JpWdkQhPKHFDQSVTzPBxxyfU6WhQT4JvNedmATCQfWNYeLoUrfPTZ1GtYfnuHMzNLw8Pu8ADPB9HFHYcd",
  "key21": "3tY8xMcbisu4XnXic3FaHsLfsAqBP4atnMsGPhy8Mi5z6zm8Hv5daiNtnP9tE95z94o4QQ1AqjVVPH2MjwQ7bi8n",
  "key22": "2s1hqUgJB1AoyF4oMaZGY7453dzyncvw23jbuNQj3LdozF8EjGwnyTy51ZxYYF59p7iJdbdQTV7fj8mQhhaFFSzj",
  "key23": "2Cy3YpwpWtBiEy66fCadK188n9jS7NcNLc1g5oLxc7Q5fFGe4q5b8VmmE2gjydXj6ewwURWkyjrpE9rLM91BqP9i",
  "key24": "5FMjdsrEXk7i4bySsjvtfMYpGY9zyHU5WPjtBfHRR9yjy9KyCz5vg3kvbMqhbJmRxdUoNMbdSuEDEJd5K9cYkwTE",
  "key25": "3fV3hwyiFJQLWYfi1NoCsEH8nTsdNQxsCUvGZDcbHnrLFJwu42CjVQHWKfgSs1jLD1hfUsZuZU29WF1a9dJr2Sq4",
  "key26": "3j3EbfxjPAcRqcnv1yhxeqmfg82QPqRq85r9Upq4hxqPvr6b4WjVsivtDZfpSHaPx7BLCgeZdJzUvDS18Y3TX55t",
  "key27": "22gP3UnYG6NKj1wVEX1YVsxxBAzxKcmnRieRD1mM8gbagTEckAQpaMttsnRFwsJkRQGhrUTPjrtRs4cP2cAQkSyp",
  "key28": "29vBM3jLyR84ceuCtKkHdqwLg9npnQB18aQCPx3ztrSGESW2P8VzfeDz6DTNiZxeCAEPGmvp5KoSvJyp7eR51NjN",
  "key29": "2i3AevAC3KZt95B22kAHmCkbfykxKSGE8f8usqtT5aJRf6zT81UzTjfLZKfMGkRo8ezaoKCsbj7GLjy1FnovQ7FD",
  "key30": "5HV43dYwui5WHq1xn4C9qnT1jdrs8zDAUv6mD2bc4HdvswjMD9v8W9YqEZH9k7cZ2jxE1thBAJeWXQXXnvPi7Z7n",
  "key31": "5N9epVvf4YA3cukBMEAoQMhiLd8eaiqRmg5PpyoCkZVoUyGvycH3hgwwLbegTWMcqSQu8XFY2DjWi7M18DdRcSjM",
  "key32": "62zLeruntXoEUbBbzmboAdxEU7JZkvbq1Ehd6T5Xx27qySZwkCVdvp4Ac5ygQFJuV1P5SYMyiLkoQBLRrjGvYs8j",
  "key33": "3nZAo9sPwUxdGhcGj36UNk4WCn1V9jHAmbxXyf4g1DncmnMN5qYk4mxE4YvepmVeQX7p6Hyg8Jiy1GqUEtCiHB27",
  "key34": "cnvVWJ6FGUkW7wviViRHeRRRLZYKqdJdroxjxyiSDF1hUHxGu9UgHHWUq2c6fdKnvPj7jArKfArfjdtveZHHj1W",
  "key35": "5TjbJwJBej8sfjFXTZD8AmRhWAtxmobfo5gRJYrijHmsxYNwBd5UnhuManDrfhvSkw4gRagyCQKTrSQdZNjEPfMj",
  "key36": "4EJg4XHTiVTc3z9YH33JfNcTSbacqBeaU4oQx4VdeTojEqCFLEeezuBMZZyWdPLRbXunoocrPj2iXSkEwdRBBNAu",
  "key37": "66sHc7GvqzTpiLvte2ho3UyTEjtcQ7w8NLJxZz5ZF5LSHWWQXpS4EHkGVdhaYfeKTNrsfRRphzHEjWDB4wu7mDk6",
  "key38": "K2FrEeEceUNmwiJp5HQ26SSH9f94B54JEqFP6od2n5dQ7jSFcEWu9NbFQDuM8WQY1L2JmJuT2UPVMzpYkYMTy1r",
  "key39": "4wAqojN2ihwoKLJnaHGJHRxXLoEWTmMrKArk7gQySxFScvJMDht9aqrCMDxm6uBmkpAVgRnZJpgb7EmdK3qYLnG9",
  "key40": "25LiaWo2tEB1THgG7HSdgqbAGPYavWXyEu2yXpxLFfuQjtfESGu1rpkHMw92B6DjvGhXA9RX1g1J4pXPBp6hjeYn",
  "key41": "2sXQgSVueTHFMGdXaMyqUFWwgdAWq8X1eX44id9pQZw28NJNgd9QkGKv5JtwBw3mTgbSGnM5GY3dE1yzdbPK7Vw6",
  "key42": "gw9SduRfEYMaSH8WfHF7oEjDCwyB7cNdqRpvucWwt5TAzwaaTUUm944sMLCUYxW4Tc3wEeiTdoPFGNFLZiLjBGx",
  "key43": "2Ck6XJi5eXJTWp7qLWpW7uheHab2cGWmUFEsECoDoQcMNcwQ1qVVpgTNRee28bTrGDRVTayFLB9U5e6toR9waZnY",
  "key44": "3dG1a5wLzZUXqAKGMsvZDXEcGaT782gFSDVYSujBcBJxuWheH22v6fX8m2KPMJwek4akgz6XFw9ucw1kCbQqChoe",
  "key45": "44yCFHEWhCD2aC5GkW1rZjXn5PygPcZMRJYU6wXnLxJp32T32xF8d1pfbuS3ZopJYmxLXP8EqxQJVSnHHhpDs15j",
  "key46": "54b2ZdDvM1Uc4jirYyc8oSdMMrGt8UiK6NtcWt9DtsBb4UXoEqhu3HtnoQ6NKap5fy3mbc7aiBdS8xTXHcTCcLWE",
  "key47": "2jN9zsM1aRND14bquDpwVBhAw1VSrbjeP2H5QizmpqaGb8PYs4ieUyStcicV4jm7KP56w3L1eJSSiPUmtAfBzm3g"
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
