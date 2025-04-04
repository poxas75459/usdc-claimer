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
    "4QuszC2yuopXemiEgqCqHa8Zh7QDf1pN65pvqsK7Lvu8CPNAETjYvAr49uWyhdsfAA7Scun4gg9JDjagJrkasz5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4BkCiqcwWPDdNcrr6Que6vAGz8cbH6hdMhxMrMfQDWnzDp5ZvAP1K8VjiBctQRHtgS6K3nEgirmAhhDjyzhY2x",
  "key1": "46vdytkkgf5gcNH6JQBezxqtSPwFtr4Euhi8LHZbWjyKC6P6YudRrGJADQXk4Tu5BbjDCsoAULHBosDHdwKwHr5c",
  "key2": "5vHtmT7uKRLkxNjVZYHWMm9rRUtct7Kus8H8DZuYG8KXHDpbCBXUMaBBMJ5N8QAm4wa6uuFEmxwcmJcVraakNWYE",
  "key3": "2W3n2fjKmRJsFoHCJMXB2DNRvBYZgcKdiKYaA9vxFjcUznymwQfeFaWmj5Bqooia55tJDiN9Z47bLEj4urecS3iT",
  "key4": "3vCWmcWLN49XsNjdNUm9HrdvZYtzszphCxUdoTwdXeSVwqbMUtV4J1pwiTWJ6oaaxjXokLUg49NMN1CHwWaUinf3",
  "key5": "VmU6Ezq3m4DgMyfKDQVu2qh1kFpqJSkYwaLzcLAvQLr5xNw9AviJEzJXzk6TuSA2bpuoLDpEzmnLntcwAGCVEJN",
  "key6": "2NmkyoWkVeN3BbNusPGT9a5hUJhrM5RhcTPcTaeUN1eKPSifCQMLL1sN173YcNe3YDvsu7mYZQ66tuyoAEof3SxP",
  "key7": "3njzQCy6NdJK5zaR8S9EuqqmPvwiRuzcqw6HQRL6NXdNKe8pjD5VenH1gQNmxV7uspw4eTweTsFnYpx1Jy8zR4tp",
  "key8": "4EPXouc6Hy6Q1XeW4KWDrbfAPpaCWGjPUGXMetdYYkCr4iUFW1WnCYYzJBP2a6mtZSH1a4EMqjS5ysjQTZVdzwHt",
  "key9": "4aHtZGAW9fTzrhrEeVf7Ma3bmzrBBKDwjV56MToFZ5QyDuzArgFZaWBWt6SBbVSmgCigUVy6kD3GS3cBqEVysMuF",
  "key10": "4pMvhvQW2haSdx64W8wkinTE5eUGpFu2ZiVMjasVxsjAxdtPy8188AtcgH1hoh8n3AHeHG9hEPLy1W1b3rCKofg8",
  "key11": "2rQ4NDhpTrvaoSNUp4SqAr7bh292YGzXHMySZt1wbjVThuDJDvWmCAsPrgwfVsKLWpbdSwZEdWySbbALm711HLc",
  "key12": "1J8u1PgqAVF2XP2bHQUULAXPpmN4u1hWYJMurXUmmdVVsgn2kjfqkcG9otcvSNXfH5tSw1iDG4jJszdD6Gm9X7R",
  "key13": "4Xnpum7nGMJCjbE1CiHzCK311qE9933zJ6QW4Fmh1f8iNPofBzAq8GaDp252PnveDFgFBCuxKs2Ut1ME1PV9NLbf",
  "key14": "3GXLDoYC6xRPHJEttkjsvgzgiaDs6TYnN7K8mgE5DvKM4DA5Rq8iHAvynXTABKJoktiTb37xrrUM8RhWe9G6gqwA",
  "key15": "iJCCwaCzCBHHFAkLfRuq1yrh4Qru9AjyUMAKzEA8JKzm8MVSgb3LAYKi9aFQntuWVvr7P6K21CpJkycAUCPXuYX",
  "key16": "Tfh7ffM3pU1FJZwgmta8ho2h1pq84TRC9eqjWM3hyrzBG9LQcYeg799hvWbaLAk9AyCtF5s7x3mWyShv19rZ2AT",
  "key17": "5p2BZnQR9jZjrwC7mWBppohYjdfy3tRzRSPfYFSnqekpwu8MkxYaYUZnysAycYNVVUfRHLrLKJ9R4Y3ysh5CxtAz",
  "key18": "5KdgAMUUGLy9EzVzzZ4uNdpDubHuppdV4r8kEJoe2dv1iNQuyWbQQDhPPxpwkZXUXDhNBy4UFgoTpLaiFn54PjCG",
  "key19": "1QoMD45qA1GrgGEpgU8XLfrUmtJQ7jWEjSiDuTkwFmjHBqnsTnx8CyTAnYjthwnDHtEkn7FFnQ2Xns8Q8JGe1WH",
  "key20": "5mjoWX5dDnEPWV9TjY46Qev8sjQoQ4WDkGunHunfhDf3w4sFU2BTEt59Y7W1yH45kpzy3JekCrGmowWggwpzkEkq",
  "key21": "2xPpPc1258fzD3AjypBFcaCYWgxK3UtPdREmwcy1ADxhzjQDQk75gfxFS9bG19W497EKJtMf5m7Q8GtYcU7UV7kk",
  "key22": "4qvE2mneuxandUXsYwJQWdBFnVqpjQJwqP8Yf6Sy97jcTkUa7R8Ci1CXL2G82oa7q1d2PbNJkWZ4hhxHfw5Nj9TU",
  "key23": "yoc5n78xonenEJuzZMayRtmRqiYjWuecyprQJk2zER3xapgsLj9dQS4uXsBw8K3PkmSpEx3frtTbth2YAFaqebC",
  "key24": "2Ea8E28bZKEx3HuC9NCiwdsf24TsexJK7eXca5cukjuZJJFtYQvvpzFa5Vdy2DyK5gohMfzCcNKYa9rtVGYqi72n",
  "key25": "4YHtJG9tERTzM2RcQQzLMhu3itNXjppy2U4JxCKyf2oazQ3xt7Htdf59n38PediNW7UmJFG21fkf2uHLzSLgHcPZ",
  "key26": "5nfsctBCJDvd6Ky1Vd3hrxLQFQHdxCicdn5CHX4aVZF8wKnBd19kWtvkCVFp2Mjgdpn275cLzdEeLnC93hC1MqcS",
  "key27": "5nqRum3Ft2z48wYESYZYbKsDTZBKqRUxdFErRm1vvKnPbEWJUeK2YECuUPL2coGSVtL1AnfCw8Zn7Y2yF8kM3QSK",
  "key28": "jYo4FJFjNBhVbEUCvfeucwaskW3QPnkPdZKzLWZfMhiT5oPM6KFw6dqDDSot1nPMKLsPdkSzQZdL8S7MvdrcPUD",
  "key29": "32YjMNsEY6saUbGzq2SDb7HZMg3iQzyTGd9YZPGdXz4Jwab8tqhMmpAJ9K33jTqUo8ZURkSsKwkV5PU29QqpMB31",
  "key30": "4X3EdWEHqUD7xvQu4nhnH1xF2eZyy4HjwAxmLG9VMhKHRy7Lsp5QFeZFKqiektBxNp6XuX9s5vYnVqCsV8KbtHo1",
  "key31": "4stDbEdUcX6bauTSGgvEcVNCF2PHaEQfyw4rRQJbp8gH7PHm1fS6JGKqbhN8uC2545CqUebXMaSEVyXMTKoBqhky",
  "key32": "2EFCeiFYxzaduoQ2D9wkpnwT2N89HR3mATQ6FU2E7MQycFzrk3bE3rhZPRCwx328g1qxxH2gsfhhswsWko1igdaL",
  "key33": "ipwnAmGKmP5GjKhNJEmZWgkqJ8EuA4UBGbUhvi5axxNH88qjUVyPhsve69bbWt5Huu4u9cErHXVUSbZQsdkUrUD",
  "key34": "4nsWtPpCkQkzPSBjT14ePKXC8hqMw3ptJukqicLL8oaMekk6FYDnqhFaDYFb4nxr2C4x4UtdYRqHRTm334tMWFNx",
  "key35": "4AwbzkAR7tUo4GJDujCaKaaTRMwr8f4jpNt7y78RaSUDRKK3Le28RXPf99yEGE9YQGft1ivZuZuo5BLxBdF3UxU5",
  "key36": "3nDb1B9PjPTUtG92iy2hjLTDZfWyaBuRHuLpN5KGJEggVcqytdwpfbH2GtC3neeo1V2ajZzvYwrTniU5yf2iNP4b",
  "key37": "2qjPmkP6N3UxYoYmhn2y2FznoVBjy7SQVniFLwyTTc1wFqqkajwRctNEksbzLVkku4UFKeTQLG2QkyHJd1SykVn1"
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
