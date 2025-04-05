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
    "2PamFRbaJKS9CdL62355aKf39cWuZEJDV2snHST8WiaenTGTdrBPz8oj5a2rX54LxtRLTNHTq949jbKKGwRTrgzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgAm5o5ePyt1KN4XAa8pk2YLUXvtxrpmcLis8Ewx2AZMB1Dqmk1bg4Py1e2Kk477MVUUMDxvL3Bv223uieDtfzs",
  "key1": "3kxmWa2g6j37D5nFjwHLmJT1GWUiPbYwrjKMNQuFohKgWzvKQ6KMsZHZnHDggDUZTPezS5rj6hpeDUJssAhw1D3p",
  "key2": "3KdeX7rL7bhbSe9XrHc8gxCLHiVAaCoS4ipAjYKGSbfPCxD1ZumT6DExossNuUMrCJ1mLpn2RapgGjbRUSVJKWjm",
  "key3": "WiN2H2F6fnJT5EH2GEndiV9ndjBLHyg4jLg93apTpcYUYLPXXmknDAxQYeQDyDHNycwYGnKprD6fwfTFvc12TAy",
  "key4": "3Zvga5oXBhxD67vZ9S1LESBV5UmmDj9GmykTTEf85z9Ue2itRuoiNUaFj3xUdThKBuK1tQ8VVzopQ1uKSBfMWDMz",
  "key5": "4PzU95xLHajYvwY8hF59R2WZgckdLTrh8RuWQxWuJKjei5S3xCjch5x8r7cJacTa17WcXY45zR3WRwwVZaRQeH8M",
  "key6": "5maZwdiG8qEPpPEefHWyXN6sGhtAY6UpXjJ2Z5uDhLiKY3ZR6YXuj6Qt4YisKLNDC1Rxa6J2jU5tmarHwJS9LSqC",
  "key7": "4rtqjbh8mnK9CnLrdH7nxBrDcfbYYei8JQ2VaoLsZ4tmFk2gmZWK31QF7QDGnFzc1Crs9Rjizn7fyvNrdW6E6Yzi",
  "key8": "47zdqiuaexs2WjKHKyM8Hs7LzvdzhPahCFnTr7rvVTatC6nsdjKKEy2mmjw4qMDikg23NVK6zuArtHTM42sLGuY4",
  "key9": "oqN2FxTFCtoF7uk1Nfr6WMXknRxx6yqjZruLAujwFH1CVp4eEkq8dQ5y4ysHVcZ5RgnYiKnqvTSMDuPQ28tKetX",
  "key10": "3DzxYDqhJimzyP6jx1TSDh2rNsSk6DvrASK6wQ24mSLmFKy7cto5FPhtFTgdVKVhqGJhDsHX61YqgsZ4hFguhtRp",
  "key11": "h6sv7x8y1dPVomsJqCNp5t3a5CMxDjWCVngDWpzEgkZv3baN4uAZH7krLc98hiBk4oCCa1nHwiL3ev7VvWKS6Jd",
  "key12": "5M59w8yYbkEY9VqhsfRmb4GMByGC2GYZezsLdwCpe7GjQEthsUSgGTcaDViAoFVQE1cGvkbvbL8uDNiYZaRfnN1A",
  "key13": "5hwoHGFoi3qQeLZ2ShdpJUgSmj236tke7b7zd17XLYz8p9vTgNDhY9tLVQFrRB4QaWzYG9r5cVBWtAU1xYW3Wv13",
  "key14": "3u7SHqWvUdNvJs5KLmyAuZM6s9DdGshqVRcANuscMND5PsM4sveaP5X7jbWZTMsZxuSf73Dm4qQMk5EPosRpPHhR",
  "key15": "3sSRAhtLMZFTqkbE4FXRw7j13nsrh6qzbXF951N6UWW3WWkC768jZbBSQbTcDdtesu5fy8ad4XairrT5JFLCGCtA",
  "key16": "tyHR7rmchi1fzep8Sk9fq3jyDtp76r94qTn3QutcD8RN2Vv45xfe8kz4satbGnRRPfnz116JQLXSyDjdRikwHDc",
  "key17": "5igJcqMtamhaHBvRPR9mf1uAURQArp2RTo8etBEW9ZskCN9gtnJ5oqcVyiPHVinw2VFf9KQvyLsU5LSQusU9BM1F",
  "key18": "2zQ3V3yQLswyJb9BmhaA4qzR38f4iHBWbURzPSYzeUKKH4D3ybbik262z4rj2k17uN99SYZFV7KrZZXGwZP99vkZ",
  "key19": "5b6UqPxY68j4PhZBUntZiYTvVXa9oKRELVhzt8mBvNAVHPMc4QgM35o2QY3yfCHbfp3Pwg5MYzR4GmVMHXpcFbsa",
  "key20": "TujbsoLMWwXh6tWigmgjtzYrK9KdTLdrsk4FdfEb2uFb2zPcrHWnkzBfXTF1zBnzxSo7SjYaCHfPCkjBL31zwPN",
  "key21": "5Paf7RtoqVxiLBjXFGtg3Ko3sL26PvuuCPoNYGG9XF6US4zA6JrPGNX4kxJRzT6iauJ8Avd7LHWx4t6wqHUKaPLS",
  "key22": "3BmoxnP68A1Tr9eUjURdUcvszULJeHMP8VvPHMe7nkbVG8eff5y5cyeMaG8EfxUkXVN5VnBzQLa6jrMXemkVRe9s",
  "key23": "3tDwmmxsP7pLMFjSj1GZobddMA6NqgKCeFmV4j2Y6JCrvyW6CMSq18RnpzZq1aeKj1C4Argk9fQM5eTBUNk384EX",
  "key24": "36cwmrPbf6P7tJpFngXpyEq57XHepFwwzBEVVYeTFdjyNc5cyGzi6VBKH5FsAk87kBo6kdbby29JHPkJyMBVbErW",
  "key25": "23grdo5m7jRzHkucX9LyLo45qfYkHRNNX4gWv14DDv4MbBaxuav1YP3hZGEXCB721Rg8Gm62pJkRgkdUgGNSaHvX",
  "key26": "4JJMkdXdA467avDs8c1EjpZWo4j48wcLknX6X8DYqWwCiQ7X5jnL9Z6iyD1JUEF548TJH4vvwvAV6JD1cVeJhmGr",
  "key27": "4dXUwPpbKvKv6kLtDfpk476Y5FTgz9dBAdmVZQo1B7zypzynGraPaSeef6vAWXpLCkZgxjLUeyJhRZVpnpRqkzis",
  "key28": "5KwyHxLEDy5ufSkCdpkCFwWnbPwTf2F569QnPpaJyAyZEzP9nvRvJhxeqB34f3ngD53yjnot3cnF3PqJcr7BKyFk",
  "key29": "4JZotszDyaxfRVLQqV1rFEw1o7iwzMkVLNXXaJNaAtgDgviXyjhEjZ8xyeRTmAeVRFkQUxTuTPrQv2ZNT1u7fyMh",
  "key30": "5KV94PW5FZEC7nM2tc9LdkBETVeNGuJ9Z1PDXpXhUXPZsCD1C8J1jpAxa55xqz3zKSaz1LzdjKGmjFc7KgLLKrHM",
  "key31": "AcWxmLRS9knxFSJssKnZgUMvPWZbdCtRUZPbCG3c561RQYEineZr832xF1215WZX9UugWQjpUfYzvY1iLFHQ2hR",
  "key32": "3LLdWpLF6K66HByVJFVcbQ3ajeuZ1TXVemV4iVDGRxar9ni6FNm4oWJJina8EVkxzP9ZAXmJEV962zCHhF9SwPzr",
  "key33": "52jFMHGqXEuuvmzKCd2Ts7pn1EWeCYKA1LkQtMLk1EJHhHwvmEywFU2Ahj2MQFn5hhQSzMKHodbfMKpTTjUeTD1",
  "key34": "jigyaFkHAkXx225M1cqN4JkLDRMyvVnHehYVj2By2A6VSHBp4kYVjcFRXoNZdsn1b8ig9pDXVos2LvtHx9UFnkA",
  "key35": "5wT99rz6Q5KfAriPAfdc8vL9PFLeNJCbpRuszoNf5Gfii4TVKE4tL88MFLL4HK7PFuNii8vrvjY6bwNk1uGGT2D5",
  "key36": "66jdyZj4W4WhseEkDSKhC7aWuvnqCcTLczo5qSrzh5cCpRKyr859seBAhpkhEC6MfKe5bmgDdNb9Hxcc7mvGB2tc",
  "key37": "2kTAdHzLsfpTDJm1UabAynAHm21SFrhMm6LFkJ3EN9FLoY3UyREmcpCxhqxV3ugZZDRGyczi6MotsFWXnWYFkQ8r",
  "key38": "3mVfw35GeNkxXhXoq1pmoGs3YP3TeXSKMaUrKf6sKV3S4FP2aeW5L2gUrweRW9UR444eipveVs5K4JZX59XJkhSQ",
  "key39": "T5z7TEeF8yFf6psKbrMoLSLG38roaux7N14BDoKDghEZh2wtMgVjidXvheDHE6sPA2kbVRttVyb5RXrBSeo8kfQ",
  "key40": "o3pwfaVZcpoNpcs6KNBwSr3Lutn7igFdBKrpKeVXMZvGYp7gBXcMAemTUhn3ARZ8BFkA2qD8rLKfqcy3NtiUybd",
  "key41": "KAvYkck6XhdBmmyCUj9UsCTYsbCAnyfoBp11nNJeCsTwWVbrkz3vetJ2NAe6suTj3cS3f1NtTXSDyuy9LruUzeK",
  "key42": "2EsWVJ4AL8izF6m1wmpLJy2oiK6rpgUYHuQgfCZ3mb91yNFaRajuzCPLkkEKaEepNWNGcrssAdN2sT1bLFoqTy7E",
  "key43": "f9W3UfFkAeUtAUNBTB145FPPYRBEFPUeGsgaf2mR26cAQ7ShyC6jHPnDaoN976zsMZvZ8xBUTWr55uiCFDzMU8q",
  "key44": "65oCmwdR225wweGs3wNfGoXJJrKQpEvHBZrg5JkenDfsqskfaGJpgGTpnPT4QjeZbKXp6qiwCcgXFCpSq9Z1gmhV"
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
