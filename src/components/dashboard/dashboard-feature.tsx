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
    "4PRSpvPai8fHh2z8yvC4tqbtgfr2fzncUraKUANQpZpLsRMPd9ggm2W8jg72QiCgWdiGTjJdMv9DrgWjtwN2KdU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3PXeA6Hk9r1Xpc4f7WPUQzeCWzhFwDt67feQRBvMyvB9AgtZSzUukNHHDRquUBsKJQo8akGBfULPafGStrCvhL",
  "key1": "27xNSnwoxzKSGGdmxoc49qVQwcep6AhowYJEfxFmaW8HQjLER8ffw51of9Ye8ysPZTttjDTibSWsuX8oDMb2WQRf",
  "key2": "2ALHH7aUVegKjPjUavXxBmzp4LLgdpnmMCp34Q6GACdGnKeDMZqwdrm6X5MtFrAnftEvN7fJYRqd3wquEGM8NiAQ",
  "key3": "4iasJUQ6W94DFb2wLH7BQjmvSnyL26sYjRz9V598hEs3wJNobzoRy1eqdsBfXfBU7McjfCDWdCaSRxr3B9h3N8vZ",
  "key4": "2vuLSweCJxrn6Tnt9x7TAxmfpp3GxHbmZxepbLGFjj55eFkUhegvqzqMCrbGfbHPT6NfEboQsxEVu5r1rLTuLrQu",
  "key5": "5n6cT1KLiLE3S8mnvXfakVQQQkkAPK73odgkRq5xbu5GiurdgrpfFo6ezPH6TZbRDn3CTT3tV6kZPs1a7xCjzTzx",
  "key6": "3BiuEhvBrZeevJyHS7vopaDGXNnZ6pq4RSthJaKVAGUMQezzTHuVTXAK2bAr4fVkTue6ENFzcj12hSaRVfzGwfUs",
  "key7": "2cw7VQdUmXeMseeFjA9nR2WpaGaDjGm4wwaqS8EpiRk6kEbr8JPLLUBdzFYUNkMMtpf4YGDJqCziiEFRTdMia4XK",
  "key8": "45dDF5MojccautqCBXmidEsYKnt67mPG1Dwck6XPdUAn9iBsLP2YZvJVzP3Kb94WnuvnDDP15qahxP6WXhNJSFDk",
  "key9": "4r7RcpT1Nz7F5ve1F6xTLSvY8fZ2oGqCL6xTKUMNoFMUJNXpswSYMf3nFx25VksR9Fg6LYdLn3L2sEehqRPo4h6D",
  "key10": "8vm2oACFksK89JYXpydNNSWRp5Qr6ks7FoPKQhECvoCnPdFxrW99iVpBjZwg9sWTCXuLsZEQX8AuQpRcVQ79oFB",
  "key11": "35G3DfbsA4q2Q6wX9531ZcCAp3kqWgbQoGWnexHUVR1cBm7SXiB3eZRLiHHPZcA42JZi5bhEdVkHsV4fw6SGSurc",
  "key12": "2PVa42i3L5MC4UE2CYrTodu3xgpNeMMFuq5K3xD1wXd7o9LuKJYV7sjfmjNpmubPyBwgVZyrzq1RsiRJVmoSoC1L",
  "key13": "5tkEdZPTC8CNj4ZMpk7aQD6Tx6sdj3iudkyfCdcgU5ehsouJJ5NC58actzABX8WfgPB9Fzd19pEPyhec7EPcCUS5",
  "key14": "5M3CgGfmrbyKZrxGkYa33yyZgekvHRZsvCvmDiR8M2kWxK9EHgyDdN1hMQzE7o4B2tCocVBKUNSE1x7ANyC7nGQ6",
  "key15": "rs3vbYYMdiF4CgBMZYnHtkcYhzaZ1gsuwUKSUfBnZ1oKJ27YHps3oAGB6zeyzxGHuAoQehQdeKYkuTBiNpDnSam",
  "key16": "5tpRvfu3uiKbR2iVQS9nUnzX668p2qYpi6oUVmenyTb9vKv33M3Xf7qppVc2yoju7TjTxfa6bjWFqvALdXGEGDEG",
  "key17": "31GyDgQXLMHsUQEF6VZCA8YgP9sKpNxiTTnoboZ9hA7NBiRBeFBh9LkEV7RDjR2XLzxAnbfGbPoFJAxBRCfL4zZ6",
  "key18": "SxBaRiL9cPe2bMCbSsYT6hDon1cUpRjY6TMWAsCENCAGAJjxYyb4MJBNGT4DVpyuSgBYgBNqspTrZTHFi5WgE8M",
  "key19": "JNZzqBWiHqhbruf29xBdEMLVpdD7Hwuh5tzGpefwCqSDupcenh8JWK8psHBRhYaBVV5NwX8QdyA5F2phViAEr9w",
  "key20": "3v1bn5VGx4fDCcPik2wKo6bsHLpQzK8CPqXuR6CmCA1KxWbTQMhSuYqBbggnn3qS9CoBjuayMi14Za2PHBu1nfZv",
  "key21": "4XpKkCR6rknZy93AMepgtgkTDEHWoQAJ6svpeUmiThf1bsPkc83DX4ANgsZdqqBWoziPbg4ysPRS57DtJ9tidGWv",
  "key22": "wiTofNUuY1cJ1JQnuqYQrjCwbWGekhhk1RUcmx7Yp7wq28NnDHP7nU3W6QS9DdHhzjf7jYdcecWBHnZBfbgBQCe",
  "key23": "2fd38DUwfoM72SL3i9stmr2gnFYrMibu5caC7dN9Xu19WhGfTKbP7y3oqSuXwuT1kvGh7fuHUmgctQQPxTBqkwa",
  "key24": "2JcjFFw2TPsEwJ5XWi66VgLs14LyDhtGsFP1KJFb3yPUrsof6YRv9tGjr7asgUtSaAaZnntpMz6oLuRbym8vzRuG",
  "key25": "UKi2wu8HMjqqhqAqAfLRQPExS4oLBcjWuRNHk5mqGSwwaQmnZKzQMnwTPNmxZejsjqs5KvQYdjnhxG3QcpScVPd",
  "key26": "4DpMCyyiGhg9ipSxbPjP9r6MBSymWVZVQ39RhfXdFumw4atuuHGB4guxmyrdkCukqPf4fiZNJH349Jq8pAbHEuYG",
  "key27": "5vjDXUq24qiSDisqTU3uHWc2w7ZBmSSbmTaBgCJycM6FxAdv27m9K6iswGmX8cEyt3T9NHvzPnbwE8xbPQVPVzff",
  "key28": "5rEk6XwFst2CYgY1FcLbSWatkdj2rq2CLAFATWyvpTpxbLCbycZCTXM2VzajoL4DiXSMrqCeAejQLMETzTNd8nVz",
  "key29": "4vQYbtJ9RQdECYCjpAaN8B7YJ6nyAWeU3ZrLbYqwmKXg2GSN6FygUknPnCC9m6A8KMwqvrVczGiF8cvMUKSb7Epf",
  "key30": "2PRt2wNdgRFmty57gGbP4cGQUhteoHGjUrrpxXqHBFeBWkwEUhFK4MAoJWKGLkr5xE12KNbVZ4oLRzN6BX6ignEm",
  "key31": "2UcsxDHgw14RpYVCGzbU6ZvZAr5Zw7VGSwNjHqejaL7oLJMXcXwjcPyGCgkxd81NLWZhCtJvm3NY9qYgwM7onL8Q",
  "key32": "2tTUgA6PkoVuiuiMdwkXN7Tch91PvSxceFtrNfXFPEvb7EEmYp9ZemREeRtfDUCmvmX4cNMTuQTFtrxjVJWfwyhi",
  "key33": "5paDskW9p12Epb9YHrK36sFjmEkBGzAVVFu9A5CGKDK6NWb9HUHUYJtppqxLUeUzPcM1H22wyvcigKiCrMPoE2TA",
  "key34": "2BicqN6AtNSFaRzh9xyk16p1V4oZkiLp5xN3qRTGgFYoyKy5iXjJaAmHyphJ4UaHufK7xjkF1GH827WUW6V6MiKV",
  "key35": "2GwHLizStRCaLYvfeCx5eiPAnyQE6mHmQkt6c3b5jZX5r29VpX2na4vyFE7hKDxuVonWLNaKSaUYejkfaUUw8J3m",
  "key36": "boajX7G2k1jBUxPEcwFC19DhZ1NwbcfRJqfTR8UXBUQoCGNxDD1vpX9zLQUmKwiDGusfVVnYGKbsTMLn34XUW9o",
  "key37": "nZWpD1LXu67Jz5eRm2ogmhV7sFauoTVcFYRWZRMF6U1bFmugxoagKwAZMjD7D692qHWdHvPuraEjMZZGkuaHiof",
  "key38": "4jPf8PEMQP878SW2A7RETTS11PoEfG7DBnsnXNrBoeQyBkKUATAuZAxFfa9qYP4mA9TBhmHRA9J7EndPTWzViNSg",
  "key39": "4xT41m8RYZZGY5NxdmHeUbBPWmoRaYjTX9XbJQCERFgy8vr88Sa7d57ayqUTB2wwMx3K4BpV4D1FsP8RTxBvmbFy",
  "key40": "78VSpUvQyFt1wgDC1xbFEoeJUaXzF4BB251wrXDuufii8Y5XBmEisFEMswxe84RpwPmp4c2AQ1HgzWpcem6KuPg",
  "key41": "3zVWE4RKGDNLKEVADSjdSnEpqvq3v7Vh9iNbjSnsvLBmsmtF3N6YAweeDuWoDe4H39ffKo6K49Togxhpt5c4J87a",
  "key42": "3z5HycJNvfzxNZkeJqZiH9R79JRCGteBzyXnRkVBXLbrENQMoAvPLofvJiFhXJotxz2TuedavgkK3Hkgp9mca1sk",
  "key43": "47VeHCjgiN4VQDbUaHauosQGaWfCYLjjwC9LSK5mrbNxsrCKzsTzsBn2zazJYhY1pMoQQi8y5RpKTyALthNRRxFU",
  "key44": "4H8QzHwvqoJYHWTTo8BqiEteYFRJer78ooGhbdcB4MjwWwWoTeTJVvw7qC7qv58sZfXqqp1j7TVNkTiak4iUWb7",
  "key45": "4XeQzhqVZtb3kte1jG6tremjASJFTRt3ua8HZn7jv3ZAReLxMZdNZRCR6WmZ5wcS8UMcQuWiiJZrKCCVe7SDtS9Z",
  "key46": "37GozykmLJ9tEkcXrXEiDK1578AJ4t8bzqkTXHrZXrwJNto9Jzu9bGsvq8v1x3JfPoo3wwXk8pMVVVfsP7BfsTYy",
  "key47": "FSrSCqbvRrtnWRsbaN7MwKTG75q1MVhp6msPmNLnssE8vnr9ESfXsihjFHdLiwpBWBQft6Z2zowLYqyq3bjU1MQ",
  "key48": "2B8DVtxvdukUdFtLEKuMa6TeKBSGvuR39SbRjDQcdpBM61h72YpvUaizqtfzDkKkZqKEXXcDqC8UsqwjUmXnPwuA",
  "key49": "43yiSk7ozMxNk2UDYdpdepQxTkwsjN1HKKfz26WRKniuMpbKaou8MoWQWtAVLHqZBwXqb2LE8uaT5zfuWsa7mchB"
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
