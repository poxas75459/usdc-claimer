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
    "4HAPcUd9zyN65bv7qDoxcSPbVspAG4YieWiurCBUCw4wim2hjpKbvqo6Ge9umCyWeisLBMCoimpnz9af8xtQsFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wi4GornW6PkbxhhdqtWeEJbjGwYyBT5gMKqPwY6M8j9KzgWRccRT5jr4YebkcW5nUpDicRskvDbAT84kmPvyqb4",
  "key1": "4mmnwN4LQDEykvM5KpfiFiwiPWLZnzfZmE3vQerHFCs9CYQciFpYEGJU49LFtPKYqh49Zg8XouVyuxFq3p3QiZLh",
  "key2": "36fqUXfx6SDbHyksvJaH1UXUBci9okerQKwSnswgW2ZyeyecmHzmdzVmDK3TZPg7qVQYdWnA1e3Yf1vVWfFFyJGA",
  "key3": "3A1NmFpNKPqdPnGqkiSNHVoXBDsDnmqyfxeSWBzCU1AkDC4HCwEYf69dDGxnJt5fK8G67Nv6GZkGjL789wAqB1Ce",
  "key4": "5Q99kYibSwzaYuKSYq2j1WJD8rYL2vpXmQUYsdKTdnJtcfyYi4f9YkoCWBfZJCEhKcyXuQkkkdUNgQDMCeMuEwmc",
  "key5": "2b4a7TmvqzKhyjNwDnaMu91eHcBoaJ5fJgRzFN9rFCAA3ktE41BJwGwYHFKGJmsR7qazfibRUGecdSaGXyBzPB2w",
  "key6": "36UCE1vHJwvQbEK3Kr3KcPcDcgxQkSEtWTGuq9HyBWUNfN3aLH5AVct4wZqqwWX4dHMAPQqCD1MxgzZ8rqjkEX25",
  "key7": "55eL6cdk7pUmLNJ5KWpgG5Eocx2vq7vbDM2NwMTgj6gHnaCry4yXmCLVr6aUxtBPkkWpsLd8HpXWxJxv18nwukC6",
  "key8": "51x9DZvempTzSfM3uhjmU3xBRaasGspYG9dBFU2Dr2JHpKx9xxgvJXkXVHrWwhPEam1UGfx69vG7S9Ng1p9rT9DY",
  "key9": "8apVKaGdpgwn3c7JHMtrAxUdTQKYAHqCcJZENsSwDBYhFMceMskvwdUmxesEexANEDh5kCpdoT5yKs51BGjTJZU",
  "key10": "5ZGSzJj6UtVKWxuSHCt81xxecEh1UrM6EfX6GVfV969WnPzx6sxKELegUnFpYRYHYbVpeYLwHgFG98BV5fch6cyt",
  "key11": "5wqhpPVw7i6qTEsLgFrkFzTFbFeuuekmVoKUprEppqFeENE7yrQktrmQMTjDKCdz1bYCkKR4grgM6oTKV2bxdAnR",
  "key12": "5mWC9zHNBhrnCgRjv3S7fAYtJkqYpoqtB6qAAnqVaGmC5JHKVGiCoWiKXezqKyvoiA4eJmS3JzxzxGpXtRecFs8o",
  "key13": "6a7G2NrzQ4ccHCERQsiSpvKRWbLFwAXnSTdgrFDKzR94rwCNg7UtqQJiQ98WDzb2t3SC9VmNFuKYiArZvMG2HiS",
  "key14": "F4noFQRVqKJwL8qdFQMfuWujXhGqxUtfBYS82skNKwdHKYnAVP7TycwPkzkYw9T7jPmaL5Q1Vk5c8agaJZCsbAw",
  "key15": "Tgwqaq9HzMyz4Evkx39rUAHVKaF4MvqXpmynPr3WnBmuSFyYph2McuKAGLE7nmfAYYncuMkWLbPAFWqM4PC5BcQ",
  "key16": "2mpU2gcYPpERw2jKnQQCxm4cfq7hLbbaiJDDjkNPQb75jhj49KD9HeBgpfPZ98FVLDSxK3t5uQKcR29YWTmWZMAw",
  "key17": "3NoM2GyM4jZWjbu6F6Us2XmS1CBiCpE7ZBTdBGZT3SDAQvTpRMmmGmUMrKdSyC8Sy6NxQxWLNbHf84spk797tNRH",
  "key18": "5J45xZPm7XV2ECYKV5UcaoUmACnStRNQwvVqGSR7Jb9GD3xyRmtw5av4EsoxvPct1qEG9L7gy8SX1YN9AoD4irGW",
  "key19": "21ZCyb95mEJbRQDtBRRJTTUiFvA7iJzzYDKgCstWZ1h9ku6JEs85iEPCJQQ1bY1ELCWQ4bbGPcLN5FVj8RxHajij",
  "key20": "4Myn6AGYumEc7U94GbWSxtFr7p8hdEqZfjHQZETHD6jHseK7QN6uLGyctdyrcxA7VrU29hopn6N3am9BzLymLTY3",
  "key21": "FF1bthGG7NkfD8RU2iBAVSseoksgLKVgg4tbXC9hdxcqhkkXpypG2oqVXLGZuGi3JvGKZeciY92zBc4WAi3nMeF",
  "key22": "3fAXktb8wx9RWaTWJaL7LEJMREM5qoQLawXGgvuZoyV7YnFo1GFxDN6a88BHxbrQxhG3nUA4UbWwbMQf2yAeVLZ4",
  "key23": "44r6ZnDT73GQrhqaw3jFrYpstmma3Hefq3RdKqEMaicqHZMC7xnDf9xEMJWWG3odksQi3q9xttAsjFGstdnEgEAb",
  "key24": "4EeqLid8Uz3PDMw7Nt4cr3w3Hb4EiKwkGSPdDf5qmbyT6TRCEHhMCxAJSQENsFmmj2tp7K5KW4XtTxNtm65Zgkof",
  "key25": "4KmcQn16WPce18gENQj1UM66dFKbC6miNZdGSCLqDDDHHy2fwzzPkkz5LepYPzGf8o91Eoobzn9Sv2BJK42AHGYh",
  "key26": "2hNyNV4iRtKVTeNFv2biUZ1KzvRYPV6A1PQpiirNDa1qJJ2jxneDA3wt6Kig6hcLUTJyFoKi6rUWw7S81kFaVjxS",
  "key27": "32QQ3cLhLkzbQfNXTU1QnR2AZ3gaD2VnKyj6Ajtu9xieeoPeRw4gf7ft3JqiEdxxbJjRGxRT6FxB7aG2HsGRfp4i",
  "key28": "MSC9JSEYLzrqVQrgRPUcMT8MuwZWVGwU3LiVZ2nDVTwaRBDZJhK1aP5jWD35YAVxJU5L2RAH52vqFsDUYQK4FDd",
  "key29": "3hdTL7qrpJgogVpVCfYmh5dAqCtfhZMoPUWeaDn9v2VbEsKk8dagu2Qu4eUW5fyU4LNhXarmkXvMmLRZ5B9eAMed",
  "key30": "1SVSiEwELx4m2WyczbFvRscxH52B25m67Af9CdiFmDGWypcBgQqutNuHLj3NYjeYw32nDT6UHHePJ2hsyqPT5ik",
  "key31": "3hfS6AtT7Kc2nWPngViRcRnbaCvLxLdSvR11oLGc77SPL6Kk4DjLmPVHgRJBg9dzvrpm3YK6ujC76US2mw8MRUpz",
  "key32": "3BgFQUpLnnnFX4QauMQKs3KhPnDygorqjvorTnpTmG64xxZDvpfHRB5X2dphfJwgYwSmRgWq4jUG2y8j5T3ftUrb",
  "key33": "3s9sx4rhdkXzVXbB1iXatWeNxwDLPDPw5VUzghG1F965nakz3cYvD2mBrgfWwNp4i7QMQ8xg5fJASCefNz2rFnA8",
  "key34": "2uot1LgQzN39Z7cA9k6dKRzwqZQHMXLmQyuSexr51Ne36HS8z34KVZuAXhi3Ss7n9336Mh1iwS4gVSduFQ2mzD9r",
  "key35": "63Krb75UCDRHAUqw9G2rVq5EkUJQBegxWydQty3XS6kRvq8xiLc1gnW6C2US9SoTN2fGM7gLWxLjJGRSc2r7KhjC",
  "key36": "3zDL9yrq5QEpoDHa5MTuR9tCeBxUoVuKPgZScqEHVCdtnMxemGAt7P39u3zebnZkZFsqzEa1BBSM3mHieB2m64H7",
  "key37": "3TK216grY8a9P8bWzhmsDJetXRHbRcXF6pAXEqfXnCBJVmXfwbkWuo3Nyh1b9FyaVbyHeBqghNYfyhKdWkcCChx4",
  "key38": "424fVpALWZ1CQmKDeRw1KyziXPAH94NVDCyK3GnktXpvXmSY1dBUMBTnv1FC6ovG5E51WS7j4wSvkzoEpNijGKip",
  "key39": "5J8RjiUb12NbttKGJTQTipkKMdSme3XMisHduQZzibu8nvvppmCgCw3sDR5iWToVedBmAEsRBgkr4ihNkR1uBcgU",
  "key40": "3ZnRpcRrQiA9y8eKc7ihNWthTWK81TqgpzhCthaqU1K1pPEWr2poRUU5kWXNB8tD6xjYbor7FmiJBSqTJdBNkzHR",
  "key41": "2MtJPsYB3HAnzrV8Fxay3Z6EegWDGxEMRFmQdyzoSAnUTgCfANFSMQMBodYjt57k9gDtJbo8iQch9JPXukavdMh5",
  "key42": "28iYWp4jcrrMaAJbqoZKRxUnEsydYAYwJ73H3W5BXFgtX7xh47wmiqjqbgc5JmfUnkg5nKmCXCURqViSvXWDNd5d",
  "key43": "4Bgj95tJ344sswL6FR6ZxVnbyXwPUAixaZryMRWb22PscBbxZYvXUvBod9mRndUyvkQYY7o2mEC8c85DSrTVXMNP",
  "key44": "2xU62caHtHG1nMnzgDQS65SoXkfrisit1nChFVmiZpRSwN773Wd7qhA3T8agSWX2zb1g6tPcDe28vLEgKhrHtWQ6",
  "key45": "BoJLKbeFtzH36XZPDJov8nuuv91LDhMBRdxBcY8HiycvRnR6P6LW7vzyiMs5fAWYJE8kohi5h5BPG1P9ozUq2jA"
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
