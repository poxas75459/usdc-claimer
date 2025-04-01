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
    "3qUmFfugD9kaAfmzKaa7ti3h9aQ2WNgkBvRa2NDD3VtUFAXEniCeusRmLQ82Tz4uSmLcmEt2T7jFEV8BGfJXbtbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvuqGRWD5EvxTDsbY1JcgiA6LaWr1JuGSoYYqeJRb8uAyB277t8yntGYzWMtewYoXrVNAwaEPNfXAyhdk1B5RUN",
  "key1": "443828JNSPyF4Z3CAr8a2gUYyqLTAeSKGJ1jxiGQR3KTpnihZBa55uf4KEEKgiPdiY83fsRmMXsofskyWhEZnnUu",
  "key2": "34d2i7wkaV94zyi5hHzXsU66HkWBWqkj1FVLezCg5vQ27Y4cvJieohC7Lu1TkMzXKtV8FjbDCV2RjpyVEmMEWXdb",
  "key3": "5rwZm2AZAu2wnyav594RFgHjiKnfEC4trAuA4eWW6WWPRKQ7Zef13zVktJUHdz2T3QiVNPcYLUJsyNeshSF4CMym",
  "key4": "2fHBUKMxNMkFhhbPhZibZnkX7NmEtWHLw7WKjnNTCpG5AguDDRuNr8fnRWkPaUSGXzTdBk9azB9Kgr3dvJBVYV7s",
  "key5": "2BAP5jUEYRhqk78aJkcTeXddMb78SoAXjNjt3h8pn5V2Uks3Sgc1yLmGfvWwe6WcAMKmL66s7vi4CDgadp83yiP5",
  "key6": "3aAgbLnWpbfUFu8wACjsWTmBYRfvubWy5ngXg76cx6yoFuw52frGwmbG7mH9ikGAvo7khuqZRpFf4erXRYFrWwb9",
  "key7": "hhpVKNKc6R7LRE7g7UiPpCFYtHN23Wz2aHmYuuqTHAP4KRyf4LPxGdVjREHKEn6EHXAELQkubJqa4HHkzfWTMcj",
  "key8": "4b3frgXWGE8oMBhNA6dnXhD2xALdiAxbgW1EDxrSt2n5iywVPNdc4Sh8Bekf8fJSAksVzcFDkNtrPgrbiHHPYFCJ",
  "key9": "4rpnbYoA4gMiU7BMkM3zK8CoYwnT58tWmNsT8819g71bqBFhmH6yNwBRk5XtY8QEoZTuwP5yKaMmMPHPefjVksTd",
  "key10": "Yb4bcT2EPfj5XaWjknK6QK9BgrTHfQDSb84MANb6gvkbk5T63DfsUWzgL54VQKhmoZPHxJ8kkdx9pLxs1r67qXX",
  "key11": "4DAqUiCXfUkwYoqHizvp9HDm6MySFW4Q9UB7VdSQ7jnaKJNjZSoPrRbEWYSUmvKCvUyq9jSF9KLDgfgsSr7BnZ6j",
  "key12": "Nh5yLE6r6y84EbDQh1qVbdi7DbiVFk7MKp8fkaQk8heUg5ZQ3d8dYfwig6QQXipFybmBD5wSE5876D7oKCpZZqZ",
  "key13": "59BRzppVUWk4je3MAZHBudpWg2ZPHgddv6u1oCETmGccRgL8C8KyTfw5V7f5x8gcKEdXEk3fRsJ3Rhg9Q3xVk4vX",
  "key14": "4kcnuvskJEox6J2wSg1VsoJ9oHMr6qxng9VejF6tmY1Dby2yb1iHRKzMyR2sHS5u5o3PZSpH76N9VX1YdKLFskRD",
  "key15": "3dYwrZmnKtDvzFWhSVcUkxeMALwQd2mdWQqSTXM65HWVvUBCYtKvwHh3Y3oLgBkXFQ5gjNufGn5Lha7NrnqvoLSq",
  "key16": "4wFyxhd5Sda9zeixWLeUBHs8NhtaBMvn6ULGGCxa6ek2A9vCuUXSuFciELzCpzYnjYuLZ1iucf7r8fdRyJinGLoY",
  "key17": "2mnBJnReMx7W3DUXSHw6M2daP3k1caXTYVSfvSnq2fLmhFUNYATZ3uCBE5LbLabuh3NHGeQqFVkYdug7WcSWnvDs",
  "key18": "2eWN1vXfELbgqfdReqnbfbPetsVdz9K1AbMRzLkiruRwS6h77ksTHGxywF6X5vSWjfZ6V14X8k6CWtp1H4pYiw6R",
  "key19": "2aXpvRhBSTs3GmiBpZNeENJMznup6VX75AZc45yRZkzN8o6eAWerYsJXcJ3wXsczwXpCXUdn5k3Pwi92N6GtnhfC",
  "key20": "4x2cWHeMGbBnHtAoa2RDtyMFxgQbkK3vLtHxm5Am6rXxi6TbrxN83Zr5u6xfpgHdnJ3kaf8XVF4LC4hsqBeKVmeu",
  "key21": "3rHUdoxijaG9Afk6xosD2g9bq8Saa5UGAAt8xP3A4ampeiZatqe21diAgAst2khETsETtNuspvBJS3Z422WgREhN",
  "key22": "36RGG9KicqyHAWMieRjKjGmiJEdm6cSNnLNvf5ZD7tigJs4dgFRKxeBwWw9LcTFt7WobLjrGaEyeCNdeNLz6EdTJ",
  "key23": "2PSg4Pu16qfcjFFxKPYVcFo8Zyb5qktMu17pboABYJC6yJArqctjUyqpdaKUQF4xJWuydwer2vvSVpaYzpBnvLD6",
  "key24": "F5vSZbCP5WqBLDWRamjbF4eFtmfTyaXe2EGCw38VWRUneinmfzUoveWfoLN5VmJmXUawFmuLrCnGvAKY6NSZ93U",
  "key25": "ZBc6hsPxdqfvANnJCWfkWv1YgNz26d3Vvy8PpwUy3cZAS53GUqiDn3GCAhCBYGQqXp3DyFX8yRNacQ7e6Sp6HGX",
  "key26": "3fN97zCe99PRk4isevWtcaeLFFQpRqx63pimYFyNusCifMkV2xC34S6okU3Jg9cM3V8YQvRmxszhinxwN1CMG3dd",
  "key27": "5eVvHBZzmTWeRx7eLTnhPccfK6aqekWztP1riBbDvUoz1cAvct1cW2QBR7UtQfwJo2Gmmjv3nKbGuVcg259nS3ev",
  "key28": "41q6fPVxANsy3ZQQpLdo5TsPkCkS1Ywvg438uj7ZiMWojSkTWDZfab2fdZGRNmk4P3XGURsQBxffAE8En6KMjQpQ",
  "key29": "2yMLv9KPkxLHYy4YmJRmYD9Ccx5XR7fsjyUkUZ3wh94PHgmsqJCare5cireLNgHReMK9jHwsib4DdfEvPKU5PZ8H",
  "key30": "bEKaG54Awjb1WJUM6MCbaKCZKjn224HJHwqowumNaropTpcwFH9vHGafquLzTQ9SJwNuXT58bpvBwPVfDB3BNde",
  "key31": "4EV1CZvAfKW93BieYgGNZbnU35sLqcaLyrhaQbRUMQGpuQ3isi1N3pX5tWE8SLP82RJzes6Pnz2Pzc7EBDABP6a4",
  "key32": "4WKBz1QprWMz3KZruttfjQzZKppJS8Rk7kECcg2joWUTSb1hYjaL8Dejah7y4b5quNwL4WKbaam4W3mYoeCFbkrd",
  "key33": "fTKsbazpEHe3oUMK4ERqkV7XRGUmFPWYskj73Vun8LufafieZMw3snucwqtcXLom3gN6kTuXeogzj84XuFxoZjg",
  "key34": "4LFGSouf3Hke2SGAqTpnA7E314YXMEa7m5qHYMpQqm1nykdfXCTbwMg9morJQd5s2Uc4krgS1RGEPAaTtB34LDX8",
  "key35": "2EwmAWzdsyw7HHEHATPCan3iQe5pkueVVCTTmwV3AcZgCXMQVaSGbwJaYgF6xhPePwYSRgLytjpDFpxuMMeKfbCh",
  "key36": "4uSkVYn6MBtJVsJiNHp8CayqsUHqGdVAEeZFEu87ic6726XWuMGsC6Mnk5rowJBXNe5nMvtqV8H3FaB67SWXzHu",
  "key37": "4WuwUSmKu2Nu3mwA1hRVNExtyrhak4Hj1yDcMqnTorCC8fnmcZ4XEd6WEbQFDkHjp7diZiRRpGM6zGwBRPZXEXjy",
  "key38": "5Vt5Add8VcmbL3kNxUFnLLX2PEXhueUBbhfnYi7EXxzn4Bw1msY4cnxcKqq9b2BUpqrSr53dhoKtXMZ9RnGHjHyW"
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
