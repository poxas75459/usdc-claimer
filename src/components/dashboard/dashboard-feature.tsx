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
    "4AmEGdNRs6h4youv88Fo9ZyB27KBp5NLTn5fiGHffjhSwpzVDxT9DRcHoP1GDQ3uxXsu9wAjRiGaPcTuGzEr5LjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKzY5JJELC9dhE9LVEYMmftPaGszfhmugJQmjoY3zYakxj764yTGhSTrNaLVUZJyRmD77sjJw3rzyYWRNvTRx3F",
  "key1": "5BRR3zmBHZ5zEB1RCDwBbe7Rqe6GB43nZ9fMSBHoKTQA9anMKj8ufopLVizJf13bpSMd6mRrxqXfEDmzG55RerHc",
  "key2": "2Xa33dZ4o6avaDVVGGW4iFrJ3q4T5v9Fp3n6m1DtuwKJawbD8PvWdAe4XE6mqrKz1wJSf8DSwpoJwMXLxr2X9aRx",
  "key3": "3cg5LZPi4TpNsmyKkMx43eMEne6ftpYQeF4JzZexWrhFbRBs6Db2NN8u1AtnyZCWLDmYtPKZTMwKoB8RTvUdUWcB",
  "key4": "3M6q4Ftz5XnDF7G3DNCMEjzxN4BP5FXHWJk8qgCV3AEvZEq9UX95aVo2xdiF51HTZtptc4ihWKVjaeEq9hVjoGm1",
  "key5": "g8b5W5SGTsGtTVVpWmBDCPDAVEupm8M6Q9hF5A67oDNiE7KEMLzBkemq7iQMmXfL4Wc8gRk8AuaoZMHfD66putp",
  "key6": "3xw3zR1Y4sPk3691jfzFgP9DBgPcFhfvoH4MynLdKt9E8co1Le1weeSyDpdyUm9qhHdavy5Yp3LoAgQgWvSbupZn",
  "key7": "2yWRxRFbVvyUisFDy7TdAPxTBwLjZ7NkbQ9aez5gJVZuiDCi1gXcYjupmwGTcwn66kyVYcFaSK7jHehN9GeoEWkY",
  "key8": "4bc3j1ZnoqfoyYNhLKNap4zLRZXgGen8Kx1jvSRU6Q9Kx7ELxWu7a9uyW24NQTvMVgdwoyeMJMxzPcNiMhJBRmVD",
  "key9": "4NSNYUTUzc2YKCmGzu7pu4giWEyHmji22xed3qHDX25fqp7vHgDTXgt2rg1iaf1pqEHiX37q6UoTuz3v8BRmayHn",
  "key10": "Uo49MN8WSKuNRD5zNJBYzb7bWbNZqLteYbjxv3DuTrAuA9igs7Kw6WqzbdpQosRXPYHESRAqfwYQWwu2zGwYS15",
  "key11": "46SXpbsKnzRDJWshmR9necYhTyEusCSZ9E7wE9oCxvRm5u6ZRpmaYWUUu1ZxPDQBaqm5YEbuX26aNV5GNbGr9Wjd",
  "key12": "3e172XaGDadsuEuK32EHWJbQAg78JMZ4XJzBXSfqMce4Cj3RN24q3jxpcESy8qfsixVB1Y6e76d6r32XjJ5H7yQ4",
  "key13": "KZB9i6z3Ye8XsY4aWhvtg8AXoB2ej4Prx8aW5UKRwoggGPdQuxeaZs5hoBWWevRKBMRqDKXLAeQZ1dpnhoGRGUL",
  "key14": "4FXLUtzEYL8c6F65N1wgvXTDdwSQC7YJfDeGvvhVC9evUUf4kwZyQ1gdDNXMoNDVzPBA5VqetZedN3mNZF6zNKKg",
  "key15": "3u8Griwp44D3iy1uk5Uftgx3obHcFwiXzT9G5F5ggZjJQgUd9rAm8KoyrGoAfFxgFqmR3nUYiJFPSxQ1bCe3o3pz",
  "key16": "2ee3HyqEJfuupePrG3cWioeQDrTa9rbkPm4EeDqYXg6GgBC3sFhwUVkETkmiWMaCDCK5Xseh99EHKpVf6SYXVk7n",
  "key17": "4om5dJLFvcnASM82U5ojCWGVeiVFy9KtwX1qBeBnybiVvce33ZZjf8eRaV9N5buK7fyP2QTgCkJUqEPBamQWVjqv",
  "key18": "21dW6aUD4xcyRuiZXcpiEQkcTHTZCh1NrFj7gTbi8zae2x7aKFR3iCSYrvuNrbS95u8A5VYoP1TyDYt5mCynHmha",
  "key19": "5LKfr2vEp1M8eQ9ynp6hrAESzgv59fTUgFcc3MgMqbJKXe4XMda122RoZunVUTt5QHDE95i8icKa5QszzLwV7pZi",
  "key20": "5xq2eqsgwbXu4UYJ1RwRiCCKA9xH3KYmhQZckKMq2fmVdSmDLkywFzB8nVB6ZwwCNSmXFMwgbKvKDHA7AwM9Sbyf",
  "key21": "QcbXDLMLCAtXMHWxYgrSjEsHmh7j8LcZ7iMaJQfyPEJbuKKt9xkNpeGM3BYbf9oZAGmVKu8iVemK4ufQfj5Yw3N",
  "key22": "mTBGt8DvoHwiK97SxNE4pskPAxwpj5zZLVkta6pW4w68qgL28Up9tmxpRnEg9Cgcypi5sBjbicHBpMwYTTYGWe7",
  "key23": "5tLPJ37mxyQni8u9MCQTs1CtqhzWdL6pUf71e1WKsJAZ1degrVRg9XAaQCevcbjJqsk2ShNLTNPwPgdcq8zL7YWp",
  "key24": "5GFaw5AHLGGeNcMJT2eKLgW5MxggJPHBAenzXmCfDZeufDhcGpBesqkXuGMCi9NpH8zrKiqZdWYFgy6UwyYR8xdX",
  "key25": "2555hA9TXP4LDExWvPxYnHn5a8wyt8aCAFfn7JXjxeLfon8P4fJU4bKWXvarfNYQVsyE5CPECrJhvb3DkmNwST7F",
  "key26": "2eeVJYJpE8L8JHyXVWGSwseY1ErJvTPywbSneTH6BNhBunpNwbwitpp8MFPQMXFQcYCBjWosvhdHYcJw1nwDimw8",
  "key27": "32VGYh9A964osBbYZ8TVVmYdzTuiRZNZf412EPA2tJFUXqsYX9yLmAsY1Pziz9BBJBs51i8x49HKEf5xfwXutEXY",
  "key28": "oVoWtzMvt71gD8TtowFVsiX6BQ82TZ7C1nvCz8MgYBTgQyv8F77in3Gob7jWGkYhdhSSc8dpo5Q23SmVQUQLg9i"
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
