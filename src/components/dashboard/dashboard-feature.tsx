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
    "2nwiCFJjsrFCXi6KQfv2eJYaJGQ9Vpuu5hdNhGEKAqK2r9AXwjNx3ZMNVnK4PLcRSYTBq2tBUoED2v4BtVKVjZA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMArYPh9j5bsYzHPRSWqkgyhvpr67Lp35W7UZPCP38nKQzyFCHDyhnnGWYmtojLZ7eoaWDfkgntS7wwhz778WKX",
  "key1": "34UHv5vi4NG51hiMa44iS2UjEE5Umneke9NPkj2oHd8B1d45hb8Vs2rto3tKSyg3wHUWbCgryuo2Fp4r5Er4PYgz",
  "key2": "237L6dywYFrQYRw5J2eb2eQZmXfCd7tKMayrsRLqfGituWWjHTWAdkyFXmnEwRuGVcZweb8hNtWVAwTt7ojAg3G1",
  "key3": "33PtbBWREb9mAZAEJgFqh5EW9w7xTd6REb7kkR868ByitveFrTmkvYDqufdUkDLJh8Ye12VujjyYWuHah2fmpsKB",
  "key4": "2tP8Ym6wAmS8U6sNUZGx15rThax2goMyr4yiNGyKC6xLp2yXdrN8zp6TpWpgqk2A9gZLAAtCPvKUzSV7P48i3PLX",
  "key5": "4b1zQrLw8rVjYS2iidk99iJhjbC84tTbzUWBzNtZoq81LBknf2oPdZ5d7jDFqn6LVfdgPHrirLveHr59QLazcDqy",
  "key6": "2XboLGBvbQd2UkHWbqEbN3tPPfChav1NxYzxQDkfANVFxx5gchN1jLxsd74nFpiNdywAgjXkbGChaZ9y1WcKzyRm",
  "key7": "46amxoDommaiBZJ1yAvbtaB1yBKhS6JkDoFemf57DZY25NZ1sw4f5g3pTgdxL6EB9YZb1GH1WvUo27dyhF6VJCdA",
  "key8": "Ckt84hTNMteg6USbC8MYsxDyghEWS4y34mqhKtqpuWz6vdq17jLkAN4mw2optCYXjUYSzKZLaNw2nJtsYc6BAHs",
  "key9": "2nauCkPCRrbnRfSYuvhx9PJ2QcU1U8w41R1tYVzcPM3DWrzLMJ84yWmBHtxB9cu8BKsLyY4mCHw8w1KxGMhUUpoq",
  "key10": "3HctS1pzJKNMjb6LUYaozta3ZxvDbmqp2PPgjcV6st1DZJBiaHPbeub1ut5z1TkV9creCCYaBse3ASYMLNQaWT9K",
  "key11": "3QHrgWr9RkKa5gB8j7hRzTjevJ3BDZKKwZU916QJjTEwH2z1SK13UhjeEgtjPiiM1tFFa5oR3APe3QLVP35p22M5",
  "key12": "4gJsh3TN5tdYLA2fGANVo5rfQNwDUVJq1xaDkt5WExCqqQdWKkASxaeiM7Rq35LRWraLqdvRLXYoHbdQSg4vwdZm",
  "key13": "5hfYyr2YZGbWUXRoovmxmv9G4Gw8U8W4CNZCWN5TEh5gwzGrooehQdvoKXKMpJGQdyuz6FgvfQkV8ZN7Cxhri9WL",
  "key14": "384pzV16sBtbFKkyyy7qXLYDZzui9K3VwsDQF5z1SSwe5rvAyjGYZuCbva1uRtKfjCPoVCiJws9U11Kg9on2MF6H",
  "key15": "oXc3bHso8JBuKDzakKWMVULjyssBc3pAUgkTiPUBuwuGH1SsL2gEzTMgut9k2eJniWtVeyMHKg1jRJm3jw96Ruy",
  "key16": "hpbdfw89PDGSwLuWLYjnKaCA4SUPCUXteJGXBVaCMoFBAtxaPTcsTz6SzpLcZ5LqSiR3fYyswCBpAeoyKcRdpCp",
  "key17": "3z8eZCLVVBJCNKvHhPEsKDC1fDJAxtNDaEhHCUdLz3EsFmrvtr2WKFzqyQgWso9v7jEMQoQActcScGHd4PDVSvfM",
  "key18": "JRAbuzE712224LhVDpV5yH82GKhdbhGishx21a2F2Zd3JNAufL3PaCMKPRwWFuBd47YJLxQx98N7vxFxaa5vRWx",
  "key19": "3XY5QdSCGuaAs3rU4yLVjL4EC6xNyyDyzfgCn7ECFJRGE7vpdnK4e39UCr9rGsQinx8BAYBBndzSJ92fDFzoUFQ5",
  "key20": "5jPvQJDC2CGtKmrXNEA5WPw35qU3cqTfLfvpNXypzJygfLqZ5PgBLzDgBmuuCaJwds119hgyyi2d8dMFQuVmR3WL",
  "key21": "3UjFQwsVkuaYzNDTe5Mvvqk6kPMwMaVyYhPWcRmNdak81DkPjauj9mzum7mHY6AFBX41dbt3yAoK9rA5K6DCAeJ3",
  "key22": "33gKad3D1jcm9XaH4TUXtsMtWTDQZgbZtLVuidDfVYMg5EBjAMAuwGkvob596oyFjrCmms6J1kfhndukZn49Wyni",
  "key23": "3HyUGUB8LxgCQY5oJsCFjhUbbiKsd9kngSwT6Z9tnCMVYFHxCLWmWGdAqYSLTieJ7NSPAsghxhMtWQsTcr3TjGaR",
  "key24": "3HjuNf8xPFwpEtEZdejZuZgtuWKhqNox1ZXYuHPPXi7P6vTf9E52Vq8yMGj3hp8S3uYdbPRUbe5Qr8faqh1NkF2t",
  "key25": "TkooVCVyPbTgt7p7na1dpVoAtVcEFxpHnhpLth8xzqRUL48g4NNRg58YsEi6jqvYNeP2PkJwuJypdAozHGXXGij",
  "key26": "3rT3BY8yh8SWRN6xqtTCSYqYXunkEdJFUrfuc1Du9Ptfe58zfXmLYpJ2k6E6mZf99Y9hMpMuvqWYuVeFSA6y1bGA",
  "key27": "5HwEPg9xrAHmzMTdvLGekCsWao8riUnQtnNpoFGoxSbsduszzUWaH85uvYNsfZnT6mkXtDYroiYWt7Yc8FfU2JcD",
  "key28": "5WF2JM8ve8fwKomqaZRRwrbxndfHEPQZezNFWa7DmySSWeNuBbQVuAE25UhyQzCBiy6sPXXwmv4KqWcFLGGCPJL",
  "key29": "4V2z5NWg5U5vkVCtJm2Z3N69d7CgsXC9EKnzao5CSFiwQXxUoPZPmngjCq947mhN5URj8UMLcdkMTiDfvY8XHqvW",
  "key30": "2GuL1hCvsbH2SjSYW2KDx7HxUMbHpDgzoBUoSLF3Q1ic8fA5ABQHi2uBGxBzCGkgKc3eEBqPwTRoYto2Q1knqg8q",
  "key31": "3js9EETgDQLmZ9s9RihwMi4cyZDPqi4cJ8URjVywhDmbbrGo68LZ1obC6soq88RRb3XL3eRCdpmLKHxaU31kZpLk",
  "key32": "3NyDv9aqNZiVfZgbPdGBRwwGxJyXFGjJTQTURJyaoecrThqbTWUDJF968hvbgztCbi9B9ytjxhBT8BVH9Dc7Epjb",
  "key33": "gd4k3tKmQihUyGBZbTny7HeFQ2q3oSVJuiQiTgMPo3cdkgZFkg3DFmKUfFrh6j48pnN8uyDDGx7Jr2Mo64A7ySV",
  "key34": "2pYNthkGNmE8aXHLqtsAPe2xm2J1UPmUdNVqBGZYC3LPPEQtmiSNsauyLyrd5vkbDJ7htsU1F9NCt43Dd8QFfBeD",
  "key35": "55BeG7XFhf5Xy7zdTi7tuHp7njLdDkB5U98vo8sv3rHYttqGj8zvP8HkMfxCjiwCFotLzJeqo8BE9QgYUrn5Tuti",
  "key36": "53rhEYVZ1MgGPNc35Gfu8EAdaV3akZqrbQmVEPZ4Sq9MW4ufAnPrK93cVcUEwYiogHHPCWvn3ymfWSfUXmUryVWu",
  "key37": "45G4qQ1YAFMtMSGxfSdyJsqiHA9BmS1rSsZkMGZxMHTZru4sNtmjj6X5iFjYgYeJcjVorHi2vVAuXh4Y6QrSemR",
  "key38": "5GDRxwMKDvxi3YjPWshMPaQ2A7emWodKwgGMQ6gGhzzKUUo3YjktdqjbcvskLCjEYzvSb4N3VCo4mwqWHjbFpe9m",
  "key39": "56wxJNreiFqHv52miuSWtCzXkP6mswehoPPcz7KmDEGXX9tzfV3YRLA9nvt6ZVd1i5zYCWboPmH6bL4XK7HgDPYw",
  "key40": "4gUHL3Ycy9cP5MFTuwivB5oECz1ztrpf96bAdVd4RnWibKj2HAWYabqspKMe4PjPnAG6iH6zpKsBCV7eSyUYz625",
  "key41": "2mfVrMZTbxXeUPiEUWZAptAun9k91ZGHRbxjydPUf5VFHKv6LpsCSx74jgLnBpAN4V56hs1jSva1ya5VnN7U5D7u",
  "key42": "HtB1tqdJ71nTyvowE9DbGW2LXC28An2CvKdjx5ThPb4BRauZ75yKUcyoMsn8ezJ7iFhLo7Y2yqVWJ61pjMGTsaU",
  "key43": "4DXu4453gTTJ2SgFQupzEvT1vc5VPovRjV1kHm9ZkuZi4y2d3m1uj5Fw3NjMhhhmZGDZsnRbpNFyexCPr6vQDnVg",
  "key44": "XLVj8fD14TVvvBxwTzU85fDvdgSu1jNPcs7Ej4uKujz8g4M1BTggSDPZfhwDfpwxg8aBahMPzTwZkG9jGcJ6PpP",
  "key45": "2mvvE2ri4KTBtywByCC3Wrojx3cAicRmuf2MV9USyoDQ4KcMxTbAHnTJeY24WcjjpxZxSqiW47KfY8mqTQhbBiy",
  "key46": "6U2i2zp1bameESFMyADii82NsmTNY9xe3GJkXnHQXWmrtFJTBTS5FV8vyisWHBdVRccdPRhcLSJP33J9iw44CbX",
  "key47": "4yFHLR8i3s5fRYdoaZYy7Yvbq6n5hyiLWzWqPyLx5XJ1AEhbcbD1xarA4HtsHvcAtTyzbST1WchA6Zt7UbTgWNda",
  "key48": "ZMv4iSLNRBYPrmMKsbSnaf3rjonJfqUMyHQf72dPYpAPGxjkW2YJ9H3A2CwLBK2A8BbZ72qp5c6q87FZzVYc3Ng"
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
