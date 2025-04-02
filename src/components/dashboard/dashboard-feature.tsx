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
    "2caXCqViVd4HQzHsKaAdyyDL4iSBgqEjpznudogboBqhuVttwAgby28ERFXZMRdWUXgyGemtJ5uiJqY4VKkrN3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iB5dLaqy8wjFxLKdNkxDDa6TUKvSg2CBuPUbrG2ufTpthxT6UGUuWX5mEtTSfBbEQkBwxotL8yRLq4Wrh2HLFeq",
  "key1": "2CFKA6UWSzJLNZZFt541F9VrjWMLnepsRr1YzWna9z5pxTBgm5kDAMoij9xSU91ibiPidZGp4doWC4a9hB3FZFEe",
  "key2": "3Fje8hMk41AuxAYAkuTRiNww7XXKnhE44AUDt91DxVoziXfwwo6KJrD7wYTnPXjAiQvGmfs1raVJuDqbAT8XZmQ8",
  "key3": "3pxjWFuDXwQ8uVkoiKpbrfK4q9pvyXmXkg2k4RuZ736oXnRdr1ziUgYbFGmh6saSLGK5CBJ9qAVkKJj2QGDF8Ehh",
  "key4": "2S5niVdWTpYWXXZFSccrPy3LtdkwniUnPBkm5chsDHD2KtqWGwMs661BF324hmLbe1vsZWDGg6TQxsD4LYbMXYQc",
  "key5": "hTzuyzHVJqTXWokKdcern5jikCNnnLctcT5vGxMLuC4z3NLaTEEngpHy9NrXx79zhDzFfyL2Pj9HLYVR9hPbSy1",
  "key6": "MrGnXWHsgScJKdDX2bF5nd6pju9b95yKhz5KsVg3rqxZwNmFdkfKvcp5Qrw4ze8HJnzd3tKYbDUk4QjqVpprd69",
  "key7": "rqPcPA7a1yHCCGCnWzNqHBHWvfJ9FjKMgBNKASQ7q5mTma9SYYc7nQv2F8obcqhPRJu7WcC9GZQZ8RhHyQ9Nyen",
  "key8": "5rKbUWtEWLdMvsD6a5onV3EffuSN2hVJBpBTiohdqtewQraZoyiWnA6z5dySKNp9jvYehubTaaPk8K3VRCQv6BxC",
  "key9": "FpXmHJS9wmYz4xBUEhZAf4tBK6Lrzk3tNSxoAD31iQGfSmzLYWtWkzcjzMXfuVnSsgWcmk8vYtvQZMqJwGeZysS",
  "key10": "5CUhkYUABKJ3R6Yo8ue5mojYNWYPqt312mHZMqcVUfkLMkqNxbRtvZpt2bKJCn675Bip4Z1A6HhU49hQhhRJBoxk",
  "key11": "4LB9MF12CVV6Jkh7TAzFCK61Hund5tGfFX8BtJduYjc5L1cSQpnUmbU8yZJyBdrVpe5TQCmxV7xgmZf5BPzQcgdP",
  "key12": "CH6Er8AgtCcxBZEvRopHNCYHN8D485G9AAzpAFEu185wT7ywgPs7a6ymFYGJogCDAkXM3bJvPMSXx9Nk3q5xVMs",
  "key13": "5TFExaBcJFA2pRqJ9hdb5kc8fFm3ZUpkjN8kwapknytp6SJE35uEkEN4jZa3EokMim4QDkMFSDjxpBoYK6KNz5MF",
  "key14": "TFcxm2zmnYQou3ijBQUWaViiSbrjjLpkafrvR4366toHsY3cLdgJ1foKekQccFE5BkEo4vFUcnTzKHgHxqQFJ6C",
  "key15": "62KmSgW3rFYSWs4vamApnSbkzdXbyZfiSJ8mruJkEycxQtxAaMpZ2uFUtSqQK8SjfxK2W4CZWvdZcuDnPFGznv9d",
  "key16": "4mXMokdMhzn5ygKPtD5pAA8o9UcmstR7cnjLesS3VkHxnnjdwpYXvmQXVedXZgTQqWmjqcQGQSxmYCrDfGeEBvHb",
  "key17": "2cUeWX1M3swnXJXDwqMCNQ5qki1Wcodr3DFwNZJBS7GXNKqngBQ6hRr7PKWpj44PRvUhyjTtwRhwth4xEb15HyoX",
  "key18": "4yXcGsmw2ydXuYyj9f129cCPZNmdHnFX6TP2QZzPz7xH6n6rXombYc4x55n6JcDHyzCN8EL1hzBB9nkoL6hkaYQu",
  "key19": "4xYVidJDYNskMc6mN8MFACgUuGpfMneL1Yb7uKfCpe1Vjnha5RFNpdGYNU6MRorY91NcJfSe4WAPM1NUgBJtzHtJ",
  "key20": "2P5p2vn3JVxkLBGPja15N92x6r93wS2cP5D6DBSNsjFtfa3nv4pE4Qh4kcmo8Lz9o8tDKGeHuzj43FqiUck54cMZ",
  "key21": "2pKSyDnVcpjV9M34YcxorjRLexNnsuZXnw9rKX3XzuXZtCE74y9hEijH155y3iickJjhsRfBFDYz6ZcXEuoNJe7V",
  "key22": "66JiszUBz1ztRE2uqtoDVwVHkqxjC32rkpDr1SJQ8biXLzRN9KScCjfoERKiBV5voQxEptKv35MUcVV371y8VydS",
  "key23": "5ijeU6qf6LZ1BxnApXWuoxWkJA3PbDM6hoMRrcjSaCsnAVQLp27g4WkUa5b15P9rK2F4tE5uv6DUaPNev7eX8Sve",
  "key24": "26eK8HEdMdpfYYuxXy5WZHNzwhmoZKiitrYDBL6paKUxH7f95kBiZqmv9kdUcHSkJYJJvXxuHZRdcYVtqBsxF3DA",
  "key25": "5FmSNsS71UtfTZBZhBJjbuTr2bHh7LQdzPaqZ82zhimBHNzH69kr8QiM6LHaedzBvyZHi49ruWHTbcA42JkYSchj",
  "key26": "4pC846R38wR7yE1qoumWWjmShr752JvY3bqea67peJSmhg9ZGRF6aovAYHuDNGqPag3iQUAxgioMNzMHo4AfEi2k",
  "key27": "HvXc7FapBMZdtvNDZrcZHm1B6bFQCNyFrNjf8RCdw8dvsqd8V5q8W73WzmkYEMhK9tRFob2z17TcFML9v4vvs25",
  "key28": "MYQXF8CTaEU6v3MitvT1zRLNRWCXczwcVu3tZhGJ46NvAouzhXmzfcaboDcmLeWFxepdFW6Sm8yuaZiXmW1cDVc",
  "key29": "38YWLnwaQiKartNJGzBe8XXxPJYsvZ95TAyq96PcjpUWpdxyqDopcitPaGq1JnAUTzJwtpFHoUhLdwRouT3quprS",
  "key30": "4k36gZpKf6zMwSqeY2wtEaUQ9jFFMrcVSh7ERDDKmvMeRxup8gogBUWqpwi7oMeC5E74Gv3XvnNgu3rwEMZWQ4ez",
  "key31": "22wmgs5dMULkivaGgVAAMFgG3CxJbmwRVpV8YwErJSwjWQyDt6HUJvnxwiNfRfs9tpB5DRgdWmUCxxMh24HdQZEt",
  "key32": "3zYC43Gtv9R9L1ceonGebxj51bLG17y5kpGRpH3LxcdQHK1CHtu37j1W1vUtDQetbLus92jeSZySQRGTgTvCfGhW",
  "key33": "354JVtVJc4R58tTDJoAUv8KtCjzYitD9xiH7qgywf7ZSuyJojgRQd9rvNiUNv25PhWBCjxmsCxFxYFntYkMrooqS",
  "key34": "e6kSdLXNaYjf8QxSGwhy79zZmGH1CaAC6Eh4BB7WYJ22YiyGn6WZQ9YMewR3oHKmobJjAAJ7RmbkYymzRq2Sj7F",
  "key35": "2r7yzPwW19uNuiG4bzdVwuxiDyqj8VQ9LDVRULDD2zcWbS9PSxQNtpvm3TnZRLbXQtTCoqFcoWt3isgefYQ22fy3",
  "key36": "4R8aR5CtN4fJFkUbv5C9mL8mMEkX6wSbzkZbMvU93hTsV6HowLhM8uSbmkyfXd4bTgU68hRa3imFsQ7wwQVHxNyt",
  "key37": "zFCoyoGLsHLTfmUmRcRops12aqigPZH85gSJ3ViPdfQoifj5qhKcTq23fiezjcNfcpQBNqbETBQ5D1H1A2QGVnc",
  "key38": "5Akatebs9AzrXv6fZLwNRLeAoLCriKv1sW1ruJjmiH6jTeu82h2jzogau9pQyWRWsZfkLoAcRv7mrjrSKDsPTLbE",
  "key39": "4xVCYKeQexQ2e4PS8eWbEaESdrUkaWQMCvJG6AY6uxQspJRVDevi8SkpiDmmTjL1L1RhJFz3qRaus3HzUGvJhqGb",
  "key40": "4A25vriKEY4yD5KEP5VrPHcrpAxCe6f37yqKTvrHR43sR8zp5NrEuuKE5dmKcsTAMvZHgbUpiyd62zpEcE3PiiFu",
  "key41": "463Xhz7fJDkYiZ4gXUwzfszaukzzRitikaCs6K6B2iKdGURTvAjybrUuR91xbroiLgCXi2k4bqZboYozA5kqT16N",
  "key42": "3XKsVLYYyb6jjbRwdiieNcCrhY1M7XXHFnuRMuZR6fqRqf5B2MSWsGY8uzc5ACHSUjqvepjNKh3hEAanJA9FdUUr"
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
