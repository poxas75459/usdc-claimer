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
    "3VCdD3M825Bue3H5SuqDkMo5TLdBJUvbH2Gp4SDERR1DDb2fuMjebkdajN2SiSbWvQBwCPBdvGpRAaeyGraXs7tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJ9eyDxzTr7z9xM2eXPy5AGbsLHMgU1rGd4ygcaq8v3G1XZx1SUL4kvv2AGEHL9HXkCTsTC9RRviGQP5jYRQuio",
  "key1": "4vi4Zh4tRGYMNous6ShuXuxM24exHYVm3YQdiuWsvY96CnQMkzSJcQeyu8sCCWBnxuwkWKsHC3KazFv58cFDaPRp",
  "key2": "4cPJzXNQghZxnDJwLW1pZz88Whvvyx3Vexx86LXknmvVoHFA1BMPuhjC4uYJnCxmstVBPtQhdmCktWGCJQLowaEh",
  "key3": "5jVpSycecStjrsUfLEe3A9BmxfrSN4ChGrXProGDVwC7BkGmy5iB54Q6q7z6jfnJtZdgyPp9kSmFDWUJsYgaSHZk",
  "key4": "2UvW1TXwkr7ixj1wgfNwYxycEBXSZ528izHvNTSBDNXmXNbrnMCFcQyiU1E77mCNyrZU98tEizma6iigfo6n87W6",
  "key5": "4WAYF4ecgCDLWjeb2QsxkxQZwHPwi8TiLTvfKpK1TWvrgPqgce4XEzuBZKCdj5NB1xeNuSKu6jAtMRLdvV8UKVCS",
  "key6": "4jogeKRWThmU8XE8WQqf4EnC3uJrMWLkzKA4ukrmQFPesbdFnQ53WMbMseus8ZDfdyjHb6bUFKnf2aUmgudDadBh",
  "key7": "pM3BDhpzB9h949EdrjwW9VzLujB8jRNXA45pzQWLoemL8Jm4zhgB9RhAeWp4BDfgLxoLknLgLcpkTcHteVpbGgi",
  "key8": "3dyuSUS9evwMjWiCqk9HRrUQw17oJGTTqs6J9k9ZtGHr5BgjpQse29fGqnqN68jZ24iWV11Zv5V3Va5zzydncvjg",
  "key9": "woy3ZvzKVzQ6MVv5i3Qk7nawyNzbJSLvf7nUWheKZ9fb3UK132soScW24Xw198Gd86PgjmeSc15b6opuu7DH2Sa",
  "key10": "36u49Twfgs5aLKHmkLCxdtoKttNYYcnQSaM5bcQgawm1PZkUL1kZPqMdF3W2tbsi54ebMWvj61hneD9rpWLi2Rsh",
  "key11": "33b7UTKCbHCo7cMSaG8cTuyq1HBLrj8j1KZUJeid6iMRYBVzdcg2hhzgPR9ULDj8Nhfxuimv5UqPrNCXGV2bqEYk",
  "key12": "3MY6mGRXbCucFC5bPPwwYr81tmF4ChXkBaPEQAsWGh7WqKjQHy1ZXkG8XLwLctbbabmwbZhDDdCXyC3sVBRd4JwQ",
  "key13": "cjYnwJ3tEp81N2nf3VxcpRnYkkSUw12JsSCt6Jt8Kh5VXP6t5PXNtmn8SJ938qbWk81sFGnnHy2iijmdAZoJ5oy",
  "key14": "5sb6umaAXnQjySPhLCV7fh1KK16LVM75WcH7KZwgGDjzZxhof9LfpGpXePFGV2chMZ6vTthPXdr5NWcocNuxshhQ",
  "key15": "St1tMnG6n3ZL6FnUHygThnDZkhDGEq7itQ64a2WWZSkVyjqE7A5eXpX2Nref32ihjxAoPANTSZf8ApkTu5fgEf1",
  "key16": "5Cry6QKemTryqKWJTYyb4kgjM5GpA1HaN2h3AyVbbnU8NyuPbM5GUprrFiCC69xu8ctfPi75MCqGzactCNH2LCYp",
  "key17": "4YNYsrwCdm2QUeRvyqJQoUNGNwD5ch52DzTCtHNBYNvGezqN3XqEWSPE8Ds1B5s1t8uPwDMrjSpi2g8V4Zkc94eD",
  "key18": "5BzctJPodK7CbcqEzmfpWKApwpex7znktRRKSmvnt4F9TnSPLSqkoJf9JxVcCKzYN7zY3MY7SNY26wRRCUD9DR22",
  "key19": "4opp9vkqjcSZ84Z4BGH4wuy4JioxCYeYzuWaCsYXpp1DYnBGXyhoQgSMuZByc6WjRY6WjaFU2X8GDWXdXom1FZPZ",
  "key20": "2ADgRmJdYqTV7R3KgYrxjfzv145iXoxacJvy71J4Cpf5unS54hQ9MyYbwjJANAyx7vPeM6fpSFJMqB6i9MLpuQSE",
  "key21": "5SaqtNKoSoLMd95FLiJus9mKP6KwR1Db3DGYm3QdoHUyH17WLureLqZM9kpttC93GZGEbNNyrkyL7KokTe7cmXKJ",
  "key22": "3esaauB2B5iyP3dsRzV5c1CSMpDnjxc7vjcD9YbTrMJCAKZPzRdkE9Fc6fTcLwXcSMmmHgd2LpiUnBxqouGvfewg",
  "key23": "RDPEHqpc4kmMHMB9vT4WZiQ93A2sVETyUCYFZDdivCcmDT1hR2JHABoTSFqP1YxqXM4AKyenwxf1AFaA5pQ37kp",
  "key24": "5QEXECNa18yDBhXxrr1H7BwGwKHNyLvhzezQBYBwd1qWRuCPQtZ6vSEBGxwTZvig2gymJj65XQRjDmnrXcb86KDy",
  "key25": "3hkfDgjWMu2wtrF7FgrRA2WuCCnxRzYayeooBbpbdS5h4sgM3oFsjyk6ujhd8MZWcwMAhrgXyNYpmpyjYvSYaxr2",
  "key26": "3fUBD4JmzKEHXQdGdCX5UoLPZo487c41ToM8W3y36k2jSFM2J6BGuvRncxbnzbLFSSF5tFidDyEUG2H89tx7eCi7",
  "key27": "2nPGBXAFt7ooYfKZfeQsdKk5MN5wrVadaYpNtrFeDXC4Jz6idxLbn4X7eeyjTpaFSUaxvTNZY2aqCA8BVU14gXtB",
  "key28": "avmwYTLZu9m7mid8Et2ntrUq8usLNzcpS643VbwKsVuxAqGQiSALjRMTjnAhxkFanyDeVYAFGmke7a5w1j28nM6",
  "key29": "4FZdMqGf48QMst2gyMnKHwqNcyBf2Qb7Wy2uQJcKWYMxNbebwBVtQVBdNYk3LrMtpFrR9CD8WTAeaKvDYB6pDoXX",
  "key30": "3FzjREDBm3hw9H1F11qHq2cQLWPSWjVanJF1YanYmezrEPabno77P2N1gsgazsUDV6HBCqPdwAPvcEVarP229ZBd",
  "key31": "39QJNxXmsLL3mrKgHqkWqVYbErp8aN2YQHNP4E9WmQHK9NpQ5bDRjb5tEyFkvjGk2DUkvx1fNM1fQhgW1ewhC5ZY",
  "key32": "3UVYgfv3nNNQY13hvmUyFrpPRY9iGnp82Jr9TQTS56DuuuXGzwQvoAD9tDZCzfTduGMT3jDszGd5e1wDexzWbCh",
  "key33": "3nvNVHbSPTsPC1b3aRdu2posGvUcwaVwBA3Np7cpbxWK4o813UTRTYreaWXoEnpgE44WWecWBMhxC6RHay6Lt42w",
  "key34": "4P3Q75seHBdMxuH4LyxCabuGidMVPPvPXfR7DA1YrzdFYm52yNMjsxv471s6YrXmKtRCwE9vkNwd9UJkCKJv1uhP",
  "key35": "2Qmihse3TVSmHh4hxUndagehfPWndN1ad5WQLUTe1Qgkyt2C9oWQRpyEpAeFeLLpTUyzvMNtxad2yVVFxAQ59amJ",
  "key36": "3m87PMrbEWCWeQrVhjYv4tkCapoXja8MVHnT4AVZCvjVHdch9hUwEdNnGMSQH6u7BSgLEY724vNz1dbWmbDRbJ9F",
  "key37": "3UY4XFLKiKeSZoLymqer5nZC2vmExCiJhide5wwoPDs893VMXdXMupjjxqFZGzjgSiRjdkfT8wg7JEVupTwFJpqC",
  "key38": "5EUbB6o6BpDwJ4moTeYnMxp5yshumuCfcz12BT5XYYDsrzM8VSV2vkPsNVgYtqGjRfDQ58LFfbeVX7JqpzCTu4ne",
  "key39": "5yqrZ2nyuDPZeMMc77JsD7mHck3oEdkm9M1vXXkBGZ7uhm25JRgTtnCuSkfLdExw35Kh83wXsWATEvBGcEJHY6WK",
  "key40": "5iZDfs4GfpEe5LAMKdhSsiUWmHcwmC5fcybrbky3qiMe8X9vMuwVbDK9ttXup8V6Bv7WKg6nvVQU6bhLfRrzDEhy",
  "key41": "BKPLbF1k9mk3CjCuqC6Y4p5c6swgxnHzDF1n4tdHtN7Xp8LponNuP3jQJp3B6uoCjYTc3C7Xtx72KJWmPMTHs62",
  "key42": "C6EWovoHmef3nC9yQFiwFW25Tmx1i34pYcsCWVG6KkWq4ZQYGQAN9QckRDcuxVRMa372P7Qt75ko3sVsFNFk6xG",
  "key43": "2ViThA5TiqWQ3taQvNWnLqvyY8XdfRrjJq6jz1wNK9Bb6cYQ37iyrSmhAQhQCnevzytZzQMPc6j9sCt1RbdynFRP",
  "key44": "ofBSQMkuMqM8zcrqHrFNDW7cQaeomJFEBxTN2doY7MYwvXr2W4sc2FEFzxsBBAdz4pRyvaMv3AstoDVMW53tvGK",
  "key45": "42iMDoZEEv6e32zqYFyniUTMDnLM8yokHzBRkgKK6bCQ5kuARjG7Cjj2Q92CRu2vwjFDrh65u8Ui8KTdH1Y9Gbe8",
  "key46": "2r3r5QdoGihiG7QZfMHtXaTQZjta3bAsNcb4KdUCmnVCSZGMdoUkaXLd2RUgWFhnZH5ULFMP3in6xDLAErrDF7u5",
  "key47": "4n7GMhkZHXvESbPuVx22HCrmxYpGiQKddyitPp3Qf3zngXBFi5xkxHruE15gfdhLmLkEX3ZWYdTAwrJBUSq5UNNi"
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
