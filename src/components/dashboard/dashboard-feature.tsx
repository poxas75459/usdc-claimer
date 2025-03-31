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
    "xNiAycZBxYY4bBm9qsfbs2W5N7Fntjg2Ui7vA1YFLjecHtgovVcdZoQoqgdtyuaCEFsuUq2n2wmZ7L5e1o6u4Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gvgou2HqoBPDfU4k8VVjBg5AWxkKgBoFxYqkngsn3VZ1kmEPyHPEy6cxKsHFTV294ZJqtpcQ4DwPtMSqyAvzqZb",
  "key1": "3nkuiHiiJgpZLyjw8KmbXADVuVqVgd2zoG3o3EhkrmHh2a1T5pYUK5em4zTwQrW5xWfqpbAS2hW4qJRXf8qAFVcK",
  "key2": "5PPSa1hvKH6Dj54x48NBh2hngVWcnb5rqMCxN7kzQTS5qWV7x16DRGYcAqBgjdegpgzGutjk3Cu4Sk6Z2vhUs1Xj",
  "key3": "3DVT2v42Wyvgo64SaHCrcyFaFEGbSo9DwrjExa2vLQMudRRBPbDCor6mfBrGUMq6ZRarPMJZgYWbPZALUaV2aV6v",
  "key4": "eertoz3imShhSYvfiUtJUALmW2jLYRqHRtDn6L1gdZ8mujHFWHzz3bnMEg6DrFhWNAkj8Cfi8SsvD4mgovv3tmq",
  "key5": "5ok8xYaJNyD2nAF2WcKJLbcuq5g27bs1HwrqS2Q9ndix7cRLCePq6kpfFaybLMjpaFzYacPfK3DvfTBH3xZaNaGG",
  "key6": "49gp69BSXAeYbe6cRuEwobQe2wSMWoqAZUkV7GR4QsdjP95qguATZjoXH7Y2zUM9gCjw2ZxW3XewRgsjo1Ytc7cg",
  "key7": "37FABz5yPAJP7r5TbTH2x4MKEFNimoavNPwhk5brH12vQwdUnJfdnWzk9TS55UqWZ3WDdRNp26h31rggSz75cNjz",
  "key8": "N1NGnoqVuoCepscDd6iFPXyuNNYp4sb4vaUyXudRJnsmtKwww4qwHv3Sfw75SeWvfKaTi4y4PFJ131svFtZF48h",
  "key9": "2NF7rb3SrG8jd6F4PLZPtfkwoFGvjX8CyguBPYm4hsqLp7dYjYbnm9RDSoaFjR8JrZcow1Pf1eCgYkXwNhojwY9j",
  "key10": "2ZhnfEiyrya7GuzEzF1ryYqRf6ghDnnktGKYrHhmzptgHE9r8mmdWQuptenNHaRhZsH649TcWFbnMyqcuksxV2Pk",
  "key11": "4zyZnKeE1L3XUKq8mdnf7FAJCeDctnfoe9XjGBmvah5iqiGrKYemXdnScVRQj2Ynj9bwUNCt8Q9x6Wn9XGVtK48L",
  "key12": "2go3iPtgBaytR5WfrnFr9UoAzoWfM6QD4zb3waVHE6Q6v6F3P6WH4qxXioykUYPtgE8tmnnWjNioQv9j5ZwEkM6G",
  "key13": "5DzwcwC2RhyymeveNioC64MhyTEhJ1NWd47Ls3GRKvkzoEKkzwFAQovCT5utQ6ESPe9RYAjfZQSDUqHkPufJw2rk",
  "key14": "4SRLF6fQQkm5UiFXG8nRGSGnepjxy6ewN2a1sRPn4CqrnrnruUangwzALHyWj2bcCdveQ7TBQs85i4ymze32NuNE",
  "key15": "5GZaKtYAYN8erstrXDk69WnB9CiE3yDB7YYFMN5SVqcRBYXtcPGYpoGt8YstfdGCrYy3ET6icP7cPkk3Ay7FXJw4",
  "key16": "QXjy7vihZUQdMyR84MAvABw7tJiyLiMqpRy7xDVCNm23tCJymezwJBBEmCnCaztEyiaet4TeZyQZDRGZ2aPrQgT",
  "key17": "3twXWYieHNSXrYR7dUkoRfLqq8RA9qQL9aoaRrF4D9Pv1uoQ9d5LXd88iJASdEvgVTP8p6ddsvEbwQzbmwrgfAsA",
  "key18": "34y7nUqdo9tGcNhRX67hsqgJkHG7Xdjs1VTVNDg8rLpQuCcdw1RVtNhdgCwmTriTtB76no4x7np2Wm6yK1efRJBW",
  "key19": "5UDJo8qrxQ6vJLA49uA4T2MY9hq5fsgYfCHMHvqa8iwTAzuuytrJBPY6Kj6ZvKJSTm3pLVNY5QELuYPe8TtCbyKZ",
  "key20": "28W3TQPNuNjFa6eSWTp5d66pu3bZk1yGSVEMZXGZkTVm5z3dKnE4oboFE3wV1abbQdxLaydhraK4EvRVbQSHBAmZ",
  "key21": "3y555VJrSQrPnnWvAgk3911Wf5k4KNRTpy2Pg37Vxxf1NqX8bxgC9So8KEpoBBtKNxxDZk6cuT1wSphcYDBSpBf4",
  "key22": "4En4rxnekiATAXPFkQFs25aLFs6h7NSd5uheuJXaVRXUe66DTi2GZfW7Jw6xBVNceA8iBAR4uiPXjgFhJLvS8W1K",
  "key23": "2aH3VB2Dmc9TwDdJFYgPPzwoo7Bt2m46vYLbduqSgD3mQjvhkgbrEfsQzNdYy16SkETFK5bVZyyB2YBRVUVtLHeE",
  "key24": "2SpCy6cnagVs1tSNPfNxQsbP4hjSGShqFQZ144fHeXe7ssHvv8cFzseeAwriZan74Z7DuAm8nhcqvtp6MzLYqyK8",
  "key25": "4WnEbKwp8HFDptPivGHrsuCsVGzuEGFah4Z3w4ZCrvdTDfgoxz1DVYkp3AVyTzGrCmfvw3Hxen1RqnZp4PkJNcYt",
  "key26": "42nAD4TBjjZHQAL7eK9xdiEF74Xk45xDHsFZn8FpaA33a1Pi8SiRh9DmTfz4y9kKMVhf9YjCmGRGVzVimdHqDVi1",
  "key27": "38qEPDdVqEAV8VBwkdJWyWZsMk4QawE17kba3m7KGPHVwJYk7mZVWm7Dc3WjM7YoZUzq2FTowL5ThwPkgaMtabLj",
  "key28": "3ZPQREpFtEShUpQQoYqDxV5jmTanr6qSwvsweBKmAUTx7j1ye1wGdSESpz7qCauWuzf1pprxXtRgCdaRPP5ro98m",
  "key29": "2RXd53LFjDttuy3Bq6dtF7ihH1TYXJNHHmY9vdZKcmjGyYdRbgro6ujpNtBJQo3FrCnHBD9hJiss4w1XGbZFWVGN",
  "key30": "5Fgo4Km4YGbhs1ADvUb9uhh1wAK6PTRbCunPEHZ7VcvwKh6R5S2dRXdB7mi4WRFzSVUDDBw3VJkbx34LuBLrVpfV",
  "key31": "4eghZuAeNVmJXyzAACWGypX28RaABwB6Nu9Uys1Sac4CUEXHy5fJXXxrGDftXvPojDk5AQatfG82LMEYArBjcuZT",
  "key32": "5FMnqFD13Taq3nZGtLsxa7cL2PcYVPfV58jXgeQgfYS5KQb7TkNDk8aExsHRUSEYtAPdZb8RVJNvD2XfKRywchpq",
  "key33": "3Z94SUEuZJXPBXwVaPKjyVQwQKLXN4XRi6dWQCsrGmRA9fRjJHTF11B53C4QXc4GknF3hWGU9gwAjyUuW4YP9U1r",
  "key34": "2wbww8jnWF7Ta4JM5iC4eXwWwgaeJqSn58yCFXJyzWZHPLQTakyZeFp3P5q18hXMdZgMpVNHn95pqcKnLbCJVsBY",
  "key35": "52dhc68zMQKaY1CUYpMdV83ysJp4dZFr1xJEZtD58kE9dg2btUXQp4uHHPZYBryu7BZDBxNKwSwApCwM1TjJVCYM",
  "key36": "4Bb71hWaeE9uvEGnxMNaFnQg88ufz8mzbeA1qQ1SqsVS3uXg9qpopgifti99Q29Scjfbac4GXxJHhV3VjPiRCAvu",
  "key37": "4DTwXK9oVnnuxwcJfHbneduq4ybNfMKf4FvTWeBs1yx7ErW29gKwE5UYnvWcXuMZ6QQzUNKbCxxwh8FsU4A4GAg3",
  "key38": "2G8dYUf131suHNfBbF1NW6ug3ksFwzhbZjygJ6EjtjPanX7TUwky6hBeELemW2pPtxdyt46kb1gRYUmHiYQVezSv",
  "key39": "JGJKeXLnprv8NGzAQcLmMNMzQuu65RRCD6PTDeexsoc2KgAhcaWWyhAtd5B1BPkQ654MPb9iSTbgTaXQQ4bJjhn",
  "key40": "62iPJeJA5RCm3R8zaVRyG3CJjj8SJrQUpxWWJZ6heVZpe2jUyWD2iwsDqUuoizjU8NQmvY5bhCUL3dkdQWyLZL7w",
  "key41": "2iizuBnvGKBHdkoGmsb2odnX7zvU2s6XU8nZzor79riC5LpA5ZJQpg3TX997gcqzhQHHWNRZZGGnuVPcRQX4oC9u",
  "key42": "4UTYMseTdhmW4JDwCGCuzCWnDAyfjioX8m7LTT1wekcntoGS6AXTYxRoHLwxjQ2s9ZYTBgK7ENsKWPHcDytSTC3f"
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
