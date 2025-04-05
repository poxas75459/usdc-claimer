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
    "4g5u2JRUuf7vxZ1QC7Sgb8k8wMqm3svMcBXYPNkL572mZu65F4y5X6kf2VMgwNDYPeFZwy8ERwppDDfQryMZFP6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xqj8opnjtv6kXMUjfaoHkoeY9SEDe2knZQp9fX2yDBLBeabK7GDQJFCRCx9yUAfnccZUduZDW2pnW25WAziaJAr",
  "key1": "5g7zSjWmnWz4vtWmxYQg38CcfaX8SbNyJ2UWzEHhFzbgFMmxsqX8A2vjECjcZE9qAf5cgZj7BNyQPuMySabTa9Sz",
  "key2": "58iPxTGscNEkW6SXu8B5R9hGVv2fZ8jDPqB5tRRkjaAJD26jRSyor8RQq5K7JmvkXDcNg4BD4jCPFxKjvEgMY9WC",
  "key3": "3ygRgsnYwHTZum9bTySmUDv4EXWfGA7bkwG9zYKP468cBo2psE7YFT4GYCxnMmccL21KJrP8X3xZVcCqDFpPtF5S",
  "key4": "2TmRip3ttfdXnvM6cTEhsBg96wUxd762ovCuYSKfyNqkucUjpoz7hnbXdaCjegCqfeCBbcTsARmZMputrgbttSkB",
  "key5": "2oZYPQkoXQSXoMn3eE1djjoHQUJTddp28TABWjct5UPLXjoDw2VfNCS3mRHbuEw2r4HaEQDJcnjRJAowuGTwLeQa",
  "key6": "4zpy6AcfYBo9RohGmz76R6AGu4hezknTxJqHVUCdd4e21xRtv9D2jMsqzu1bHNzBWcU6WJtVLDF9s2d1B82C11s7",
  "key7": "FaLWrryPwAJA479Vtxoiq7QN6x3yLa87rGEwtpwJjH66yQWAnePdfxGUtoDLmUfUaPD6DnbN5vZ9mMaMvuMyGXJ",
  "key8": "4DnwhYSjB2JVmUovdKusSGS5HtXAQ3gSYAwHTo2KTu599ki4tWwn9FTxfBR4NMh6S1vXtAmEfumWtFBJa4VuM8SP",
  "key9": "2GnCz7FCGtxxTYBKqEauRSciUvcVsS85x9mgAdevtGvTK797kYTjabXEkP8YveNAXQZMgbzi8PSmMT2VD2sAAc6k",
  "key10": "2PAEw1GNHnK4u1Sgj7i1xfwpzn5DREmiQiAER63rWc6S13b1SU5aNeTQWxLSJNrAiFWML1WWw2qfJ6yYqswhXqmQ",
  "key11": "2gojKXxgMUDvcFxh1KmevKdrpTK4tyP8W6G7vMMixwuuY1U71VtDCDsP2DpVSmWBwrPqWu2njPzspx9TfBe2n4Bg",
  "key12": "5UQfSBwpm1fS2UShipBeHZp6SDfV9oaNyN52QSqNSM5vVXnegbid5RZhCyfYUnQsSzBiLScZQ6L1uZQxAWiBQhiX",
  "key13": "5jQb34SUC7hu9PurbUYrefrH7N27Jwgg5g4cqGZZ5aviPVzjjsgQmWghuz8U9SaBeThGsSDXy6ukoxtZPfht8XJ2",
  "key14": "5SoMcKw9Yy37EBegMZGdPZJ7LiAxr5dBujgSBeVpuoktn2wcm57ksGzo2FJVKaErRjo9tMZYGaHZvEo4N61KVxDq",
  "key15": "54pX2YBVDDAgzKr3QpRyRTEwNHh8orgBAh8b7aR9EXFeoQLbhA87Z5yXRNkAC62cSQGzewvCdsHuq8rypTQEPtNQ",
  "key16": "5NDNhMhXSUyr5tmbPVNCa9Zrb9vwb1CDhibLNWwmWhhPqCFRBWLgEGyfnSZQzZRRsTQ7XoJZikseSMEgqw9PmhcA",
  "key17": "64cv48bFTZ3Fi9RKn4nacVf33QSioe5qHvL9sn5ZzJGBzjYa6iyKBigLxE8FdFJoGUYKY1T8aZAaW8zDm7X761MA",
  "key18": "5XSmhsvSPvGRY2nKqJah1sGznpV7v3mh2ei9hAzUA4n2okuPznzRfcMk2SdhGyqhNr9tV3eVZnA5Q3Tn1tjraUFn",
  "key19": "prKWU2iLTeVhHUGFYpYNf1pyRqtuFXKQbmVoJQLUf8E4YzHY2kVyAGigCDJTeUmhtkyZUcjwAPrfG77JoAXcfdb",
  "key20": "4YpHzybYKE7SPfFuV7kTFQ7fPLrGzL17bnb76MJqdaH79osPizXc3sQPM9kGM1uZzAmzbACZfd3KQBYcYLKYmKTx",
  "key21": "61RY3PKwfLKnYKvV7YfNz5niqhQymQ1r5k4sPWA8fKMb1UVHm9z6U5gi8TJNLjnLi3uPZZtYzWW91KfKETkrf7dx",
  "key22": "47An2pgtZg7VAwjn7oR5mZytiUnVMsN4DktFtjrFuqDDxaK4SQLPXH4wd5FUDjrybRJcKNn2v8rWYoZFXxtzgrkF",
  "key23": "4NeDYhpKtddQWKJ9WpVZMGRLdsSuCyqiQxntKHKxGkfp77zZEPgWtBGMoz13n7G39cdjWVCjx5wMdRviCcXEe9AG",
  "key24": "TecFQ7B5HLh6bj58zf1yZHtUDbs3YJ1G48bhdaCcuq19LSweFVhBb5rMrXXtNYWBLYDm24TEtfcqxNFoYr1geNJ",
  "key25": "5wj3X7QKb9mBfqUQX3XbtbBKDfuMRZhURZNho8gUJbVzS6NRYTLuSXXnWT3p1cwdX1YrrjjK7947B8Ke2nWTg6mv",
  "key26": "3oqmUbV1PG5fmVudmR4RFREWitZ22PfsA8hbbK4GCTJVjkKTjKk38fVZKZaKoQrzWbwRcnfgS1oHHhmz5KK5QeNE",
  "key27": "42DHPtdFMw6AQFiu4fyL2yXUkgUiaBLBjxCoqzRt8nVZ84mn8DcmYMU3pqxf2erqr26eVK3zrSJWVXGQwizFajN6",
  "key28": "YGhhtHWeRvW2vYHRR7pM5s9qpKTXd9H6ufhGV3f72MrKmsKa3krW4txvoG8yJ5VtXXenJ4inPusbS1ZYtRdAUXW",
  "key29": "66taxKRz1yZF5PQSey8N2qHmveDKyaKoGBrfoKwZp9KtXRQ569iwZED3XrwACKyvqm11C3jGtA32CeqpXCznHELK",
  "key30": "3tEgA3DnjgAUUsFoJ9Lar1rmMYLLUD81mcTRGH2RFgC9jCTNVoKYanMs1w592guj7VCKPAzNHExUyLmVNjN56E3C",
  "key31": "5TXo1Dq3vPjp1Gw51NeSoHQMXmL6zpWqLCHpnoD1LJXAqidZeFcpaXe125RF7MCWTHm5svHpb2hLmsaSTLgPCZRR",
  "key32": "Y33g1tQddtbjZRuzjYdLQkMZj4Zifj8Y48TS9jieSgz1jgBAazmoYAgLMR62Hq52L3jZXfMmE96UnwA86NHahKS",
  "key33": "3kkwj1rEcf14FMzVhtVo8onsJihNxQiPWz327fFuUNZDVCqZXZGRLHzML48ALjMEcj7aDmDy2V3ArcpVx87MNe8K",
  "key34": "5tUfQ12PbMFNw5pjYwTNyvVmR4HU1nuirAYcUxvB7dxnFPAiNkNuYCJK8GhANicGshzfxPsn9qnmVB7WDjGx71vQ",
  "key35": "2jyTwvBTQ59Gb6TFo9nxeHf9HvAhUN4TnKpddjqmi8XMGnVzSwUHNvVz2UtKSFqfdaNa6h6oK7QDuNBt1v67XUDi",
  "key36": "5HVELPnrxrMDr9qcm1V1KQv9JBkeVJP6q7drEn9ZsWwHWzBATvuaT82F7wLiCm3QXdXBuUwEqwSHzZzb9kcyySU6",
  "key37": "g9z938eMv2YBrJeYHBVLyrqY8uoBfApoWwNwSe1K5mYBRfJHLYCRdJNqGQ7h3avaF4eN21XmMrJxMzDzRFrXGJM",
  "key38": "3fqBTvPcn8coqkc4HFG7LT6hwDVnFXz6FFvEF4DBwuN2wZtfuZura8Kdphn9E8K8PRtkuVmv7KFGppzLi8Swrra8",
  "key39": "3t23RZFEFBdxj5ThE8SAfcdUqbtCQZUBQh5Ym31P1DryMtiaz4KrCbp4SVgB19LdX4MaHakbSEBtqG8c8iWJSFki",
  "key40": "2iA7trgunzvHhYpQQdhBTAig7ddcXdXMHkF4DeRQik2juLinXu2M5fJ4X2FBghd4VCWMpkgDyT6LJAqzfQe3bnVd",
  "key41": "cHaZ1CuZUKSRvWKyNmszcGrMSD7L2uThQnF7RACLbvMAcidmvV844ERVYAtM6Xeenvg6akp9ReCbFzi2PV5p38q",
  "key42": "4Rfk8jhiWC4XgPkmHfwLY8LiHvKxPBkXqkHXVUDyFdquDvCsq5b85C6Pb7bpoa7YSSzEgNjXkVACK8iHBqfiLFaB",
  "key43": "5G9XiKZf7LP4FBSPYuQJEoJ8WybSQ8JFSEF9uDfBQ5WFY45KxCUATceFzn5bCYvvWKrgdFCqDeTc8ejRuPQjpCp2"
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
