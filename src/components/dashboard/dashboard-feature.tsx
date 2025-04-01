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
    "V8WtsYfrgC3Ssj4GPE5cvDi8e25NZK4JHQ4bqkq3rSqYpp8SN6D17M9vttxMS8DXbQhc8912F3A9UYQ95jqKUJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTmRHRdcov9TcBuJuratC5UwBfQrYsSed4aYqLyKqqmz33oE5EqxQcUCLDKLL3Hsd3NismXnHpPep3RHLeLsRyZ",
  "key1": "28Cv4bpESEb88G6QaeVG5gWnR8wxwxmYaMuX6d3DmnGnNJJRcgZmde4fauxLDs3WfBXg7AT45yPugicCgdaGhhJ5",
  "key2": "39SzqrFjne8DViPbLKNN1BdsgMV5DJjCAbEZNjhiD48f1jKQfoNV22SdP8jdWAb2YHcHHfubBfJBUjwFApHAhM4p",
  "key3": "z4MYfxJKze5JJ4AeZFg3kBnQtj2UaJtD1J6uQB1NoxAubHCy8YD2hrAjjZ4XwwSPCuditk92pLWfCzbDAwt8KT1",
  "key4": "2b4bcYnVXdcxCkrNvCf4XgHMMBUx8F1EBt2Cx2nigqLVGRjDBoE5j6C5vQTwBFGHGNmAjonN6FHKHEsoprG664bK",
  "key5": "26w6ykrrqXe6MfJYrqW7RQHoPyKbH7VYihvc4anbAvuDzrvCcEteoMz4jcvFjEWas95QzmbqTRSu2ozjW3TRty7v",
  "key6": "XnE9P6DTNLex6RwHWLCdNfqgUTjwm4sFpdCqsDnJDadCia7nXQ4ehcbzHC48VLBGup8KL1cpowWxfMkLRzfowtZ",
  "key7": "5L21Zz4xtmXn7ZZUKxXrdTQUeyGdiHwNMjxxpPA6R4FNcZAkHnjzp4zJGiHaA9sy9aWq9Uu7bG5vhBkEaZR32KWV",
  "key8": "ieBws9K7JobWnHZ9QWqNVBXmihqPwi6d2bU3qVQKrSWU6F61LEgEgSaR4GEYCwSryvWmNxa33mMxVpHKojubMPc",
  "key9": "5Fjhg2tcs6CT2iEdKpnJHhHqdZ54JEKFsTeccFdRV4asiJcepQdRqczurJ6nXEe83rhxpgkhP7HFFmYUD2jC3TSh",
  "key10": "Wgvh9xWs7xbfsCjC3hcizBJjXRzgisbGcNzLPd63wt2dWgFjYQ4BkkjEqL3AUWV6dykRk1hufL27z4ZQz4tWM1o",
  "key11": "5zPJfZKREcpwNEuKNo7AgMJv2RdfqSGXG2fpmMsoCcaaJRS1ENFJ84mo1RkatyAHgcoHAUAwzgVuXeM6xUah2rkZ",
  "key12": "5B2y2Z6221zHn68BfiaieRZsLiDLRviw8VaLHRzfQBkSzqQEQatUMViK8V1G5JL67k7pqvteh4dDN5L6DyWdfZvF",
  "key13": "25twB5pcxCSxE7pRjWmCKnp6Cph4Kzkeh72ef8cjk33k7fSWAcR8LRn1RQjPrC8M7XABvWgt31XBUWA6rbQwpxKJ",
  "key14": "5TVTbea54ZywwtZqm6sqdnRp88HzUa2PrzoYxcxUysPJvP7VHt64mJdeNiXJYms42CjGDbDEu9EH46BWbGCrVgfC",
  "key15": "2ga6ckDXEoTbVHc23BqutjvZurN6PPAc1QMxk1NQRnV9rf7KRxNfGvKqjHmJ6qguwha1M8Qd9QbjEJDvYAxZnb4Y",
  "key16": "2sQ4p7LpkRkLLAsmrwA8jydLvRfw7Q7gVn5Wt3srdKfPbdR9KGZTjPqWLSqMvcGS23FWL1uCo5JRppqA65xC9qcM",
  "key17": "2dU7wqfTzMzUqkLez5Czp91ysM4ogTNRWPp8ew9KT7GDM8RZ7Z35tW3TNjuZcC4N7CK9NpBna1RfxvHRyUCPg4qD",
  "key18": "3NncKDb8cxPegsQW92GQxg5EKVGzAuz3mHjBQdhCeEq1THyAFRqzKPPcMdtYPm3WhvdQSPjYUDM4efWLRgH7pYxD",
  "key19": "3g3FQ8xzHNhsxtKKtN96tU3JyiMaRFGx2NoqqmJBXvH3938GvDrScYpB76y4pqEMhyJY4orUWA3qnSR815F443yC",
  "key20": "4jpCxGZeNAkTEZ9vbmrac6wRhbFxy4kP9Jg8gKX5vEho2aoDMVjmWb2QZc9wiiD6BjPNqwhMzaPtG5dxhXE77L2g",
  "key21": "3kk9AdFixnpCqMbCKDe4eQYjxTaWCBAZLeSM2TCLncX64bR8iKGnVvMNQsfCkNKcB4xQRCbHj13JzZ3ytQ6m94jo",
  "key22": "23Ptm71rbsRFVqh2gnqXCqZiaPrQ4ps8EiArhkmDd1sSRvi9khgMEHa2z1rHN6VdbwbjpddHvd3HXtsygbQGed2J",
  "key23": "2HPF3pvPboYqPmwzQZ7CS3YLwhbceU6toKZZURo8BbsxehnJ1HY8tHnc6XSQQkLN9J44KLVbjz4S66JZNEXWGzDk",
  "key24": "5U6RFmmqcSv5Ukhih6SqARRQFRR4akYtsBUxEXhnJKhdhTyX5SBQcL4K6BCHLGeBngocwtepasAKFBdhvczDo3Fu",
  "key25": "4a2hrgWsmB5382bzsGwqCw1x5MATvRF59iDtXRThXTnas3xKxWJnhBZKrhpkRixfTztQ5ggXfVgY8UadoTvVm4Ci",
  "key26": "4USzrckUbFeV9UrNUdWZDLxjeddTXNdzZYApKpiQve1vzWPxc1iVssk7vnDFYvev6imHT2KQNvSp4F98Rk2LC1h3",
  "key27": "41MkWU3voHKQPFW5XCRASuJ98738Y6E1MioxVygE2mWds6Z2tiT33oy1LdTNeKnFesvXpn3yWGiSq63a1nRv1MhB",
  "key28": "413EpMJaqHUCPbYyPTFFkYdSVYeQCySCLjsu7VZzMzeiWCtNN6pYKmaX18KZq1bQRe3vXir8raF8FayCUYo1vURi",
  "key29": "2Z1NzQr19GgsLzmuCJNU5ELkk1ZMwU4kJL4Lo3AqAAMeC3rvTpQmaiW1PuRAVZ8B9JY3PiLrUrMuMNcsRZ16ziH3",
  "key30": "4rzCvfY4cy2MAoCRRjC6SPJZ1p3ygqgv1qqGhqKL39ikt55bdsm2zYf4U1GijpyUwK2U9uNfDQkVCxYtWAN2wUne",
  "key31": "3FRV61ZEfaKAsSdNAvDPF6meYtwt8L9HCFHs2pRLca1eK9p8YtxV16YWq5gc5vHAfpCWfWs3d8g68Hb6q5q4zWrd",
  "key32": "b1rBAX6bUzTTzjEGTmXjiEg4x4bf2r9wpbUp9z5Z3wC7qehYLTXVUG7SvwEdyCKS7dm2MBbKEN8zoHBwKosEMoD",
  "key33": "VV1cKQb7r19aBdsDYGChKMpNBsbHe5T1bs1MNMg2Z3hLadtcyLHBxDLzYNXTrabNobQnizzxunfRxo8LfbC21bq",
  "key34": "4FKatdXJRAia5ozcB8fw4ZoNtKezbVnkAGLQYFE7416nWUSWCACVo7Wik1m9WrdHsLQ3WC79cykpEvxTr7omkLdD",
  "key35": "5C1UdBpsWizeGSVNjSCS698dmmv2FNuZCqPazK2bUHzkZPidwLSJvnhScJmkewpjzXwHiJKZ8mR1X19rPeChtDC8",
  "key36": "HGxEMmmgifExCHsdoQYEJUSw8LcWt6Li6nhsW2P2FRn1aMMyQBTwEAnyMEiXF5EbAPtZiG1mFbExSXWJ4P97dn7",
  "key37": "31JB5MXTPTe1ZeiL18HSQU9dUPe7pUb88QU4ph2X9NK3tXddqFcy3q5AVXgX7ssdaiNbYdpamSGucXevsFffsnoF",
  "key38": "2ZNcMDfuZPSZSWzZqUi9Qz5UB2VZPBxyEW9U4AiruMgqbfjbvkyRk63eJeeQ2CWtnpZQV41czkZuK3cF6vyzmzeY",
  "key39": "4TzVzFjLsP4nUE9PVkXZhPWK6Z17pnDzgzHQD7KxjAJDi6pE9Z1SUH5RGQ1fqNfYtkeBpCKBjhtjNe7L4r4TzYQv",
  "key40": "JSPvkZ3wnee8g2wEaUge3Baps77tDoVHPaiSY7bJaR95HhMNDdV8LCZC3GmcrXcenoZ7RzaAsiuQMWyQ9Fqh4cH",
  "key41": "4CDHoTPV836PARBBR2vDyH8PXMBmDzjT5L6Eppm38cqFy9go8MQPoWGMWwoRB5BV2Wkbe9Z5fUrNAT7JUqq3SXvz",
  "key42": "2K6gk2U7TMpFdS5moCGjZ5biozaG3Gvnwa6m4QXzKV1MiG6ufJqtreaUfCxj6Bon9rXdZcFVd9aqX8g7N2Um7MAY",
  "key43": "4bCvW9wtfCGMG6833AD1zbB8N1tNxWf5VJ6xjqbB3R4mBroLZnEZ34Hj6hkMgnFcp11WzbhYvZjJa7gWtMcRKDKs",
  "key44": "vrgz4QPySFsVWFeTLr7uSias5xtAWghf99pswQJzXikEmVBCEKMFPELrGf34nu8PXuumtombAhnT4QU9K2vZWpK",
  "key45": "4zVra7woADPcwt21CEWs3TCCQWH4CTxPNXKgEnX49B5QmaEjURUU3Z7yt3herXBhFtaJVAJ5WomcySVfBvEy7MtD",
  "key46": "59zi9TRSqXpAHfS4mcSbNhJwEmQHCbEUcvjGc2aHWDqEpuqAz1bGxt9eLCE4dDdYDEX7NVXJ5d81imbDsQTvynZw",
  "key47": "5igHZAHdCvq5iZXbE56dsPSi5gRZPphGELLikmMFeMrTGuwYcx4Jv9F1PkHYzAdPokfg1qHdyLcTFdTJx7ETVEXs",
  "key48": "2DoAZkd5ZL1wu1v9z94wWEHysxoMmbeVzbm39ChhUmzcfiKDTDtSNoHKzXSinxiZ9ndhXCLjjur8MHDfZc5WyavL",
  "key49": "3TbJbfqfhsC8xTNDUa58swohzd3zrEzfrJWdqFZeJd9Yffxj4BtqtGd9mKqWUeuBoDtP1HM88qbxCaVN1SCiC9NP"
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
