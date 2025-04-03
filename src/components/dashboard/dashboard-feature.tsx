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
    "2SDawaayr7GrP2XrMTAirLApCnQaLQjKACExKMHQkZsV7TW3mu5BtBtfZNyfdZduH4Uku17kBDbYhPteRtsXhLr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUthZMmK9or3wJXp4nNfJwZvwDpJRhdkLFzRpxmMbAaMC1aR4jckaFcru66pw5eNYgPLmEJA769XMkDRfw16tFE",
  "key1": "3NCKi1Dg6edLp2FoEnAN3JwRqRVek6D32ZbH4no8DX4Rb7zXNCTZhZGEcu6UfQ5kEE4iWk9ME2e9GodDuNGbV1rU",
  "key2": "4XpQHj3U93UWSGmZVPcHnw5Lb2BGFGJAmQETsG5JTfVaeSajPDMZzBycG7KDYC8iM591n6MHfmibZ8kXUq5UGMMF",
  "key3": "3ggS119iPzmsQMAi7Dj5ZN3sN29LuRMR71nWVXPoWhQMSxQzp4oBcqsaU4MQf52TmEdy8sA59rLe7gES6wn2WXn",
  "key4": "gPb6nqEwHxhKZujaVxnay1j6bLkgMzVfKUCLT2P1QBwG4CG3LhNjrTbUWYNCnfUNFUPW4EcPjoWr9sVWACZxf2p",
  "key5": "3NSHmMUnNq1ppWpY28rEUkJNriV7yXX7mBtM6gZxCN4CFJDaNZ6e8BT8nEBzYTMhFdu1qoLSnMZvCEP16RX8JmAR",
  "key6": "3zHoUsHWEwCbgCwxLXf1gvajGrkuYU9nMnE6aCoDaPghTvuUTABQ7LWrWPvBZBLrCnmZdKUzDrh73SMWhXXwgErn",
  "key7": "2Ff5VjXQ4umfLFUUZKJ8Kr9fRyxHbzwrEbL8wppJ4BFUEdWF3B78ZT6auGMUnsJiJra1qRatEAUX8yzmugm5gSEF",
  "key8": "3hXDx7TJUz4Uq4MxtrMdcFDLpYrkRrUGYtELe9VktQM1n6K4hHRz6WhFrSQ56ZFV2Vef57T9Kq6HGSXqFXcP3ezx",
  "key9": "3qwcaaENyFgKmUwz2VCGDsNzqpywHkxAjvoxUffDGiLpggAuL7GqpoMpbPrXmPAehtULbNB6wjdvxuFHT3p3CfwY",
  "key10": "3RcaBn5fhhmYqWW7MpaQSkUec5FoFAJsr4vwEvcDjJDMbzpCpYnx1yd4g8QMnWbvacUXpAut37BHHGbsver5timh",
  "key11": "N4UG3M2KVrASaXaAYPhKsaEdBS9NeJdyKtYrKogrZY9qjyVK5UcQmPsPPFVSDN3Q5TLHzLZcn9GMgk8dx1zKcTn",
  "key12": "5fBgnXgt6YzQaJmbWkzUBPqVAJdPYck9i4T2hStMQAWmwyoU1SiahNNMfBfXGXgQMS9QnHUiPkTS4XUijyAxDE6G",
  "key13": "44WgtqXtMqMT9BbxpH9NZzu1TdLPztEW8qEaAmkF8gxmcwQxuJ8PLeCviNGv9uC56V96vWM9vQuUSRuH6n4byYdi",
  "key14": "Ay5dyB7651MerZbp75P1pCdUytBUNMrVBkDYEbhAW61ntdcKHQHBtfmDW4GzQgzYSKuyXo91Q7MvV9TNvCvhkaX",
  "key15": "3brrXfMNBnCjY7ot45g3FWEP3S7qHJ1AYs2ey35kW3GoNmMKyVEJNaHDUFWUAqp8GytDcbQNcnyEbG9MfC71QFnW",
  "key16": "67AXoAZRtspZaRSDs4tm9KW56n7fdLucJe7gTn9w2aGN1uPJqPq8JwUWFB8M9UzjH1TiMnwKY3wWzHRTGcj3qxqq",
  "key17": "2TTXPn2btsXHm2fz1xN2eNUYcjJQGULEXtbMzweLCBBmLBA9MFuFj4GvAPAFWhsg7Si57JZbysF4EGcLwf8U7Knz",
  "key18": "3tHAttzn7Wro2xPUkp8Y7xdfNvRSKU9enHrnSfSkTq8RHrKaEC68Zu5CHBXFPFPvpYDbV8LTXvjythyeLwkywYMp",
  "key19": "MjsbLmHQ6g6SsP6jKYU5rkKFrbzbAiDvpHe5jL3apJbM1cnB6vm4Cd6g83i1LmgneU5ctZDDw7RqkcvK5Z3fCdN",
  "key20": "54B1WZGRS4wLybmcp3oQpzHDWHn6EV652FHEaj8PfKD5c6n2o2EsVyoDNcEfcFtY7LYxzEvmTmcXDTWm9MQocC2m",
  "key21": "5YardTmruoCKKGf6WsuEvavyiwkEQrvcBXnmmCYdgzWE6warPDd2ywN7py37i4oVoXdUWaqaxdm8PkNWa216Q4Jf",
  "key22": "2eJ5JQqGzz674yCsggWoX6MWN876Z5xv2yzVRjrdaZVH3CupPaYcJnvxpfx9uC7vA1upKpHunJBTmzLNfcMkcsaQ",
  "key23": "4kStkDdgkdAjHUHCDJ6wr3LfYhuymkvWc7KPRQBGywXVToaJ7DCxZomQeiHWWyvJyh2gqXzuyjqpkqSWmtKcbXX5",
  "key24": "59uXYwNsqYUApNiZhr6pFcGrPEAigc82JnjHeBWed8oDm2d37wpYgwC29BwE7WG8ZD68f9mqbZpEHNQRiuMUCpWV",
  "key25": "44DCfVG2Ew2LEaSPkvjNqcWVovFc7HCRf7tbptPf13WN2NJuvrpoxy1r1Zmuaa4XXmeEzHriVAr2KTh6o3WmJ4nu",
  "key26": "2MrGJV77nMHgC8q4zJx4J7tNDWju3FJWW7iQcCm59nv6GE6uRPDpvr73Sfyu1o1teWT35Kx41XBtkFSCsFVdqAgq",
  "key27": "4iACa196zj4vS4hZ5vW6ERHjnKtXXorV63n4oXa7NPzbM5x2HepfTtcjXxFFJYtgdgCK6mXwb3Cq9SoL4iqZRY7u",
  "key28": "5tK9i7Jdngs4LqvJQHtUuBdANqrjHohsuhMCCcG7uVvspjdfgEL1e7LiGerf1JrepZPmjo2AVu9WWs1HgM11k42S",
  "key29": "4FduMkLv6gUVK2GDJTg9QnhqgVerxsG5VBxxdArkFwk67599uNQ13AB4FErDBVfiskv8bS2oRUjxcAEDG3skNjUF",
  "key30": "2DxwTm4BuWaHS1627SmC1wTXBqJYNNbdeyGRbShZby5bbyzHLyegC9ZwTPHEVrDhvjGkxeFyrXsZiieUqSd6oC2o",
  "key31": "5jocEZtz1mS74TQnxobkjUVGzhAhVzseeB8xeB8zcgYszaf6xiZCtPoVSXaoBoiyZG3dAcNDtNJpK57E4KQysjTF",
  "key32": "xgvMU8aiGho4vy2HdqGD5q1Vbz1DZixv1jKZqCknTSdWdtLcMdwJkhDt4XdUAkpmDsMS4SXbUeiYXB16Tz89V4d",
  "key33": "3awweRgGdrFwy8cGsuzm5ggeXwuGzLdRKaMZcvsx9rzXbqYHVAvx4naJgyL69ce1C7ovMaPcAEb9LNMzKtiWv2x3",
  "key34": "3nRUZxNDMhoKPZtRo2xbYDRKcfeNLNJrMqgSSzEpxfXYKchbq3LFUfxmodmmJpDMkteiAXGe858a8qnDr1cD77zk",
  "key35": "55aqqAv527kVZBgYd2T3bFsWNGFcKANhxu1kmQFZoKhrYCgjv529k17raw6PMp2UEQcoPpPRTgDrZQM7exPFpcEu",
  "key36": "3GowyAeQARz2wardkAganvFbzzw4k3QgFhSYSQZag9pKThK3c9bLwYSf5eqMw6EhmnjUeeorbsvNy3TMe9tWkNky",
  "key37": "4SVsz949NRewYhEbXNafxBYBSs9PGp2oPUgXDvzdxExatejY5t2UvE5dnYprH79LdmbvhynzPXgbB71cns2TP1jC",
  "key38": "mHXviLar64xkj4WDT1Z8VT84gjeKMHMK3m9HXQrnqqvukW3LWPzmsieRrDQRk5aWWbNxFzMfq7yHcNFNgiwjKda",
  "key39": "4VkQDMdgqAsj7vocnfpwMuASCZkZkwB4YG96Bo8kx7CHcomgAgqfAZ2hGM2F5C9e7WsS4oDgoWFnyQxdFTD775vd",
  "key40": "2maHRXHs6ZsAS7hD5RPAHdQTHTZcgvdrdm93fSxnt9satTHhjiNDpSZRVwezgd5wV2UGS429mjwLwcXDyZJayCfB",
  "key41": "57ATUpRkmd2PL8jkbn9Uyqq53TRckKEUwv3uWLFTkMHc3TLXeArn4eVVHfwrpjXLoQGEhGbKmE3zDdUzb95RVxWz",
  "key42": "3GqPBmamHVUcssZfdq38JZRuskxwcRMvAfUmLMp7o8cDNaLQ1DAMaEQ2vCYwjSF5WPLmQoa73MawLCpksASu7vqA",
  "key43": "3UeJYc4Ey5Hy4VUG4kSFfqY5gaD3s5bGEckqrcd7BB2hMkMeSHXaYVJhCVnA4xRNfdB9DfoTsTbqaqxsVCrBFyCz",
  "key44": "5mW4pBNbuWCLXk1yb6gHhy4tgHWRatZmWE4N2fpM4KARJgSxQSvpS1zmh3CKWqxXps3uR84y9mukZNuVYrPSQmXY"
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
