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
    "66AGgyAN614a31XWo3ZN6a5dayq84KF41ReZS1cwk1MmPZmoPwccRCHA7vYdNe2Au6yKa3b3x1hAoGgoPbwBTYuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhSoCozGo4ZFxV5ms7dmyi12iuisJphNZM9ZAnX1QpSBEoZRxU62Mak8HUvvWMnHcfgUgVPjoEfJnBzJTKwQM7S",
  "key1": "LpLtDgrVKzvRxCyFAHsURAXZosCQFxuzh6sMB9nSfSsKjT2rQPaHY4KHY7uaxthpR4RZbPBsWdQLFsELTEu6qEt",
  "key2": "5iQ6qzNf1yg5d28fJhoYQ4BckknKLsivJjnyE9seHqEkqHqLFpMTPj35dbXvzPURkEGqEUPmwr3tsMPSwSvhnEUS",
  "key3": "4YVi8kUZqNLMwrWoGXrgRovDGXDcX7e9c9Up1kwAJvMGL3sxoAQbE46i6GXDavfKqrR7b4Vqb9D3RF7HZ6nFfWp3",
  "key4": "27z5HnpHBwJ9s3wAuMzH4ewpvTtwdz5nbeTHxdB5yU27rptRN37m5Rt1vk27qwYZU4ftJpeyxiR7KSzqnKtNdfPU",
  "key5": "4Ux7z7ngRLv51nUtiknSFKNpw1gg1XXzHHJMRYLXjYFMCb4HXrmnw1ELCn4FbBvSNYpqoZLe24TZq4ZpnHcNKN3s",
  "key6": "wBUvKDsavYsNuk59ByN9hSQKPruebLbYLPZ9bkp8VwuGAtYzh137VjWY4gZtFcXpkDF6qWhbK3fkhJSmopU8e3J",
  "key7": "4v6RuRGjFtemkyXBemQKwHd7DKaGoKeJ9qXhKgNucc3RanLMVsxLKMnbri1DcEZPVzgRroTF77zopRBWPbBvsP1L",
  "key8": "4DeM1aDUs7vLBsDCGvDNzGvYsgMXnTnfm2aqToXukPmJAuYeurDpsVLLLLTuGs1QKmbzu1J9husJAUsT2X1ynxoT",
  "key9": "1LEY5b7W6Yb5z2njTo8WJPvdanCRg4dVMMCvaJkTH1pqYgvtZ5KayGxhabxLTpokoWHFiJzLQbHxqGPK3aswnAx",
  "key10": "7kn6AQPouJG3kamfe5B87MFcvAwZAvk9x4mr7BXV8dUMbwp125Tkcd9RqtmWLTuTheh3oXJeErnEaV3wyU5NkWX",
  "key11": "SoSHZTrYod1u3quMkDDUA4vn6R9ugbSUsGhnw3DZ3huqWiPXQJ4VoqUdgvjpWrXJJeZMLtgvwbZENc74QBqPd6L",
  "key12": "ZhbA5LX3fRR7UL3G9EJjZ7dpux5TA5YMGrLVy5tFXqibWTwLqFSPtJrAukoTaXrBxstNvDbxst5N3isAs6wNerz",
  "key13": "3y84LPnjacQsaWzqt4h69kyBe1EvhkFnsrqysipq5CRZNFbCREjrYjrffs2mmSfzxn2gHBg2A9Lpt9j4jEyGuNw",
  "key14": "4V5ZSChnJhSEvk7yaiCndKdLSqzAw9vzYhP4kv5hom192oSjSDZnpPM9hQcFypw9LACA9Z9SfKz8iG3ncrMq976P",
  "key15": "59StnvLMreDXJMZSs3Ue4jYm2pSznXUFtV9nw5VU48LMYbSw7cicT1M9uNZYURQYJsXdoyiNjrAMEb2edbHyeCge",
  "key16": "4DK3xo5cgij5Ug1SETXcAj2Gki4ADYcD9zLKNmu8HkjVvB6zxtNg7Kr5o7tbgbYJWx2wDEEbuTBaVsKAXkT3pzJV",
  "key17": "4L5dQC8rGCyoXRZrMZVZTypbkdkN6v9kQwtegH9Y6VjXuLP7xeVWHT6K2vXY6Q992yFcfvaietottQdvnSy2zdCd",
  "key18": "9M1tjZ18zZsZ2pdPkan2ShoSMSPWV2z3hWXiPWU2qv2drCVZS2KgVapsFkG3Jtm7GrJ5ykVrQrPvWUn5dS5kmNH",
  "key19": "Te5M2UMNs2Rndt3gxpVEWq59EPQzkYoHqrNkFHh2UWJu72x41xSJaYEHMPD1EZWTvK9EzcCpPwdKRE1nhuuzaXn",
  "key20": "4x3fLcxsEgUDWmSuYwtekfKdtVQ6Vth52Giats6gmjwEBNgkyvLAZZcqgPV6vojzrE5t5mix97m8bXkayTJvnSx9",
  "key21": "2riasAKzqcBJPanYu2hQJa7hfM6fWGyhH75zUX5tENMHtfvnoAMMYrNPg2as1DynBygpDkctYpwcQnoV2p69J4nd",
  "key22": "39tTZFkR2FJkyy8kCeQM8MSTPSxCnzUDnCCMQLLqjYsvMnsBUPgN9zRdKweCYYQC5gDVwQU1ipXjxm7W328G8ctY",
  "key23": "5tTimYMmGsJG6PkHWvJPDq5Kwp9MoTe7tn7TkiWG15MF5rQS2VtQitKZyDJduN3KoWybcupzrqrfAgPqsmbTBibU",
  "key24": "QLak4iN6RZm9udhnsVbcapAQ6BaTibx65MuuQjmwkoYmAngvqieXANkJGEEVmvHyYsv2JWtNrHSuJhhwScY1KYv",
  "key25": "5TPbAwSEfzoipT9FHAovNkzGTnLmTEyZ1eTKwZXGj8GsK9pXqLqExdvhBomh89gv3i1dCoxr28JSgWvfX1U9Jq21",
  "key26": "5g6upbNuhmitcWJXqgbj4sqwEJXmNmTFM3KKAirxzxvkfk1NNQyQZkKuBnMNxa2k4nSaFom2LKKKv2DPtZsGBiJu",
  "key27": "3nv5NvGQ9cSBztCBk8oqdJEZGZ2M7DwXcExjXi9br1XpThV9BafL3vjdA21VwREm93Pgke8wTXKQaYsByaNstCc5",
  "key28": "5Q7XtqwmVbgsaHSmkwjSPUqFxk4RiFXjWtXAZhuYnPPwCFugHvZV5Xjipjz4EfqhErVLr5UGaoP4mhYfTa4KJMnR",
  "key29": "4NrEoKncUtchbW3Kgh6f3bVLUgE9H9r1fWrNMLB4X9Pcjw4LdZawGjXBnwoCJP4E69udmUPySVU1HvQEVy6DyNF9",
  "key30": "szhwMqSUcmL6zbS4Zpz4FCbade1rCvmXMYd3cPqFAYiVJyCPS2aTLejW4j27NzgVuLL1rAAToDkiSj7BQ9LMBat",
  "key31": "xJAjn5AJgqJLYUKGS5oaXJVBd43gp8CP1hPCsdKLyCDhfoqy9cZB6Pj9SgJLhCvU7tDHgjY8pCVePj8K4sNNZnm",
  "key32": "5TdAzTB9aCSUz9KYy4DWwzQi7QChC26Sfb9jPCvLUPQmR9amMMCD7DL4xtb1syTJQZZEfb1tr4RJwB1cqBY9FSqT",
  "key33": "StpHY4JhgAD7zvVTJjyMg4St4o7x1rcuVZW2An3jZYKpCxcPSmMqRfAifEk8PHFZDVBwtQRBwnEZ2okZvS1RPHK",
  "key34": "WuZD1HKQWQLmuQYhKUp8aynzFMT1UJ6MRELTtYwMJYfk1rCPJhBQW7e64DDqfCngR9tw4mM1gJg2iTu81MnUij8"
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
