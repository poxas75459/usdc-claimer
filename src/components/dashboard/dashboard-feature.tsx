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
    "3gYKuVmRfpjKmL5V7xXPLdnLwzcnGifmVeyZKJcDqQi1KaC4m3jbRM58vmCcAJ5E4pfWLQXhycgrTDfQHdfoJpaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Wk12i8v84if9sx7532ufMLYR1AD9HJiVxdgf5VYsdC2hek1F6xNXKNvVWWy6JYHAJKR6JzCE4b3ibESuQDGyb5",
  "key1": "28DsNrrdfxjzdDHJujKy3bUd25iQyHQwmYTmz99m3NhpmR2FYHP64ExWXXkQdQkV717KiuHeUKXPdnPJc6Ffo2FU",
  "key2": "HJijyFfp6bz959u2aY2N5pgDQcYy12tfQiEpAh8zdtHLseLvhpYiahQiFd5KBsjWbC4wct2PQgTZgrKq9Dt5fMm",
  "key3": "5F1hm5AQWFoXDp3hJswAsrdc5ye7cFdUbKHDUPUqq5VDZ7F3rh4WxuSaTGHhW8rsoYNGRSwSFKXxGs8t6i9seDX9",
  "key4": "3T7GkB76PKQ9oY6J6WQQwBHJWXmcRFiaKTBUn9oBBRfTTDF3VJT7r5KjtDWQ1mWcbGGU7TeobJQSAmDjwCCPLhtf",
  "key5": "2YTdnoUtuHT383QVg3Y4dwDLAWcxQ195FbJEX1CrfL5UmNbspmZ4yYPeLtSt2XUMHG7k41WDibjAb1RtN2ugcRqP",
  "key6": "5M8EwJUccLw7CK43axkPdcuvr6jz2ZXGdaL6Jd3vz1AX6yXFrNuuPkVt2rXNkJwoGyoeEnGf2rVkFm45TFczTAKs",
  "key7": "5dLRTvym3LULAVVGR2CohpbFYgV3AUpdcfYQdb6iwrnK55f57eJF4hBzuSXk8bnLSj3v4vCi2gvTK7MWMkFsKp5N",
  "key8": "YWsi1vTSzs7Q3omKw8svQYc6aoGQ65Q7bLm1cm5gyVPoNCxymPnCNYpWZGuNWbaLg7HKubXMi4EspKW2UJyKbWV",
  "key9": "h4r4gbaPv3PB2o3SvkkzZh421bURTh2stoii1187Sn786s3kiYmehjfpfLUEy6pYWPa15jjHR6ZuP4pvsCwKtb5",
  "key10": "3YAru8H5T1XmwPFDA5td7ETvAAjvtv6qyKjevefLrhuPYi2FrviQV7UPK3hz4jTsWwZMduZJyFyN5dueLWQsNy5A",
  "key11": "4wVmUuT3KE11Mzvc6SSdUaA6LsTHESVr6ojozzV3CLHmU14AQqCR5vS7FpAjmdxoMfxFkxTGgVkpo3CTwFrbgU2F",
  "key12": "4qFLUSFCwPD9LKyMqvpdgeETk1rAxqZMRyUXjfdUHGCcTZSTCrrpS1a3Cx2xGjQYa3b4DmP8HhkWXJHKSGC736Fw",
  "key13": "35dPMvKGMpj5q9XA1CBsuYEm2QnKNu2ZSCtD4mz8hSzZ3wocar2dRPin5JJUypPJo3EcAHMpordyNfB2ybhc33vz",
  "key14": "3tbVGdw2GMwk2JniUfNduvDJfnTSH54YFvShy6UijYEhUWsMFC9H877xrD6EP5ck7ifGkQwHFUroyNr2p93QNXBP",
  "key15": "3geoknjc5baLyP4kAXi6i8UwPk2toc6KZBcaSRfWVVX6vV25cVj6hDnRodobBydGGCama65YQx6J3B2cKfEA7d4q",
  "key16": "3SggBcAhHXfEMYnsnuePJ8WkDaiDN4qjxc8v5DxPZL5biUfofxLguWJAuY5RpVdo7Zo1br7MRy2vbKYkLMdkzWnL",
  "key17": "3usL9DUrzs8GQ5ceYBXbyaqpfibsAfZseVC6bAmxztGYT2tBQaiuspkmy9QDLzj1923uVZvfsWjZJoaHfeJfYt7U",
  "key18": "3gtkJpRNYykKjfmAfUSKHdEgvtAAJ6jfaAC16aEZMhw624A3NKzudFawjSCkRLCyU6dRKykW7V9Ed6TyxYgTh8kH",
  "key19": "3egRTQZzjaomHkGw1wfTugyGW2MbQwaKA9LXzvmv4prbnXTDT1Qtq2LRWASYUGb8rFcddgphN4f87MHSZ3md2s7s",
  "key20": "2SkqtdBFCJZmiyx1DbSbkRaT2KVCPqmoJNHfwRcgTa71RRsNbFYwazmqN4e8ApJPoem1eRVHEFNj3jf8a1p6vPKx",
  "key21": "5iDRBKdA4HqF11nFgK7dwySuN1QJNZAtHJtZthDBgEfqBQP9W5LssoSoSrnNHP8AgSp9G3cESL7ENtudYGkSd1fs",
  "key22": "58fQTqUwK7o14D2frVKcQkKgUSqEK7HZhbAYiPUeveAJQ5nuXfLYnS85REjBFXhqjn12G4E5EB197gd9kGdSnH3g",
  "key23": "5neFwxp2vj4YfTiJ5hZMnj5gmYf3PEY8QUwrPPQhkTsNNyEicJ387XLJ9MoNSZ4P6rg7uopuWkmsFvvvwoG2D5CS",
  "key24": "4HAAYjCbBRcMRuuCtvn5HAtEciYdKXvYwbmh5NPXLGAhG3cfjQtdhVqKMD4rBEuPTGjCzv4FwwUs7Ydjw8cpcpae",
  "key25": "4vikLY5EyCFqKwkHCAtVTqrUQaj5FewdAUJryHHQ2vcPgUEgFo3AbCTQn8HELQ13xWKZJARQf1GT9ptAuBMx6zYP",
  "key26": "3MTHwe5bhPqxAP3V7zsKPRs5CKd77F5VsiMy6CGC9z2SoXdFHczRb75CFqy3amMBPSFF6Zyu4FzXUEABh15YVPMA",
  "key27": "53cTuWQ2rGGYXuXk4vE9GkQSnYT4Yhnf8N9sKoWzvTt3T2N5AU2WdB8P3C3cXxQXf1EEdBbuy1n39GXHWAmXczCL"
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
