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
    "VaZZCQahqKff3WtgUKq91DdkFaNLBiU62JEmBCQ4j8LnUfZa7fWWLjUiueLaCUfDNrmiR7MbzKNFKmc3uYFnN4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNo8xaruFvVzzNcBh88FzgQRFaqKX4zNMmRTRXJzYqZQDkFsdMXfLtBSfMsYeVnp3pEV5Q2BTWtVVYNZNBSu2fU",
  "key1": "44uEFdwtXWPcxy4ifMyAjC4BCwkzpvZndCxG7xTmJdr9uJp8SMo8sr2J5YzMPYw2e1YSgU9D2irkVxeTvEW1FD7q",
  "key2": "2brpBH6qWN315KrTCC95Sy6jmHweute8tc5RbfPaUx2UDowAqFcXsukPrY2eHm9h3ZCv5nmhQgsbWBEAMZuxzCjJ",
  "key3": "5SZQHRx3RqetM6KGTJpU2MHbrxwu6WFqySDQPkSoYvpkboipEpkV9uGDZc7kSMapmfa34caFpSzXxTpDG5CHvBCS",
  "key4": "65UZfdUqnnaqxuJhCjjvSzNNoTPfspckSPWDEzjsCj3rrKSCh1iQddqPgFRPsjzKrBdZVV6HPPh45CwM8swPDNhx",
  "key5": "ugTcTAHNgAuJJZoq56997Q5aowRAVRYGLWYWhtNvmgabK78x4ZC5pBZjQ4P4W4A2a35Ej9ZBHXdFcHqXD9GbqqU",
  "key6": "WehofhHh8ycAXoBkqEgc67vn3h78F8gdNA4Mx1vRceYNv3Cdd82YWRdB7n2FwrzJhJwisEsbMf28rTX4zZaw7gD",
  "key7": "5BxaqntU8d8HYJztz7sPKaGKo37bTDZF4vp7Kw33LxMSVQHL1FgB9ktVgCzeNMxtt9UX2rrt1UZ6RozgBPa8S75Y",
  "key8": "2FVPDxWudP9FacJd8RKqYVGGGdi3PSAEzPTbyF7bhZbQ99Vf3akmDjwxE99iX6sH1vCM8x6oNqb69bCoxYyZvJVr",
  "key9": "4enGeuxz4YAPiAA8WbhHQMH8ZciHmtdSnCKFmFAeczhBuV22qdYxuKRaYkqPio62HNLAtGNR1RHKQ4tpNpVwnTgh",
  "key10": "3UBZ3tv1Wx6NDGLuM3tJ4yVZHy9Cq7QqnvAYCjTfpUeHdYhHwPLvprC7GiLMHP7WtbgLoQSAHcUcVAv1NTUYA6s9",
  "key11": "2JV9uR252zn2doh7EyaRXKEZcBiBedG4vY15LjLquA6px8E3iJMuvZYN59b1dYR43WMjddqNSJJxqubrRUvroU84",
  "key12": "36awt1ZcBBvrm4HX1QkfqWy8JtiX7mga1BFaaTiQ1sAF59xxcvoz1j94rqSgAGSeoT1XANLsJCqPn3hjGh5JZhJi",
  "key13": "9gzfb5o1WznhPJgxgBupc7pcweHfvFNLzkaXktAnytadnbs68NJfTGmhdEYCrhhDWw9eASPxpmVoA4SCBNXcNrf",
  "key14": "vf4pKnv7RAuKreD1RPQXma96cvSagAeDzYwc2DU9LRSo8FBwT9kVrhW5H13A5VzTfPt1jcdzFYQn3BmV5fN8yf8",
  "key15": "5LvHnV33Z5c3JKG5uBVK4KJdxv2wNphDrB83fdRC3MHzWCggHppRo57wcqRTgBY6ho9YCVtwLHPWLhcDRskAFbuX",
  "key16": "2C7rtUEeqPii4cL1iXn8Wzawk7tTtj9gBX5oT81XHPCNiCWV3Wtr3Q9wacVW1XaPeZSH65Lo1C1SkZ3bjqSyWSti",
  "key17": "4xUmW2QohASrjaX2nHBnSbUeKutwrJhdAHcxWeeRNnmisBaoSCWw3sBNhEECUqngNHbuDwiqzTAQpF828Cr1mKAQ",
  "key18": "4Wq5hgx8x8nN1YxySwbHviLqnoy2DdgvYPCwjK38YQivB4hY2x2J55MVUZyKff3wq2JjicVohjPeRadVQnUr8UAc",
  "key19": "4nkoBoa1Wn67VLWuouUXbALVZX7FdKmLpbJJcD5bhmWdB4BrB9z5efMAEiJKNzU7SRBkPHwUq2JcvfP1Bhwj9oQU",
  "key20": "5BXTC2CZQQTzwAypKe2zCsRxdwg98dtfcvCw8ccjpZMD4FUXMB8wTojHCyPnnTYsoXs2rnTpmZTQB6ibD1TiCtq9",
  "key21": "3riDAtm8nCVDiZn4XuhQq2s2sdqfDC3DkXyYj7Ma7bpaD8MS1fK8knJxyBcHDPGuExvfDxaauxv5NBUxUMa2uZxC",
  "key22": "56mMQLS6auLNFTH6jJiZSWhWwa75agmvj6GgZWkTWCrqqGi4gW1tmiUBkz2akJrGqsTh8WFHnZF8A457b1N6SBU1",
  "key23": "4XNimaV9iDvkPGnMCzzAaEkyYBqUE27n9yrXZm3piB6v4VYb8rBHsRMWgQEVLTgHhGspLi1WUKww64ndwRoKD5b1",
  "key24": "3DfYsPEKKRDYbTBxbxkmiU4EtGsGfxqCFUPYZjdKADCvymbPf55peMHUpNNM8dp9HWeTVVaRknzXtRZiMd8FxDgA",
  "key25": "444kBGuiFeuxS8SmFohKQ9p42R7FjYi1h9fTQpue4b81WfGcAvZ4xvuPvgdvgbm8H8s5CKP2guS4eigRtaKyBwY6",
  "key26": "4PkEvWnqJvkdt7wSuZTmNUWS5XXUZME1EdECTLWnXsWq7wiYWPfjL8eXvMysqyXNNKRE6zotPhCSnqUbNLy7s2Mz",
  "key27": "3uxzK2iX32JdN8aJKA5PQZwdAh6eDFradqbhLSLE9hxodLGdYLy3KohY8wqcbNac4emjytddjNp7NUbfDiKcr84K",
  "key28": "5P6wZWSX77Zdsic9aZGREhuorWwsD8Nk3WjRKSirkaW2GWLAKCLBE9tiz2w1G5RhmYCmdkfXyFHB8UFgEXsoZFWs",
  "key29": "5qcaA7Ajue4M3yTqTZjHFqVrugvHB7P3aNnntY3S3G7Hgg5Ecq4KGKpoBnKf4Qgomd1vpE878zb9bLzFyfK5b8fi",
  "key30": "5LeUjDtNSAYSzVvqqAiJf9cNBS3e8xDjvLJtwaatR5oZYvehqLLE4E38yPXikFtzuPWUXDTXTTk65SWhGTsk9ign",
  "key31": "4GKTQkMv2cDU49TXcYVqiMbNWJUKLVL33tL5oNjuAprrAHgpNFoQQZtn5eH9tyMxRJVTBSbFhXGfUbqNp13EqVGS",
  "key32": "2MS3bvbswtEXKdTfirNwu7TLUHQWbKWJ7F8r856F1zE3SHyVBTsQ5XTKZAfjf57v2zqpNGsBRzJ1CpiPyPyzvKaB",
  "key33": "3Wk8JSjnNEznUY95FLWRh8i4MWz1UiBcs9Mq4VxiD57x75SQYLg1TyqQU1Gh7uB26Lzqksjn77fD45nVXQaSfG5X",
  "key34": "5bg7QiuqLjT2xDYtxg1XYX6Me8HBZhyiRQakXyFGy1fApkqswekAjP6ca6sMxX6YXrysAkiAb1AvoHdhjXMuR1JW",
  "key35": "5X7EDL4jKJYvmGEcgkSJfJXisrjUhdec7orKTSXsn71JCTaFuSPpWAo7cQddmC4JDmrnSVDSfNi3rJMQbaNGxoDT",
  "key36": "2vAt9HAmr84LRtaEL91JzsCpZu9xjsH31rzFmMSWF5d5yUcnqQ15LyMiZNKTAyETXUntsgiQgwM3TBmH4AcZpfNG",
  "key37": "3YcrRE9PbpKFepvKdnVyWEPVvP9Ph4XZVhF3YqXCU9HBSrGhm5owosXUUBS3cjqR6kGjNxxkbHtWb5jpV2zYmXCK",
  "key38": "3aii1iFrvGd9uLPoVtVGGtnDPoAehHj1X7EphsciZkmVxoQHNVpf8Qm2e8EsyPvcAikz1DbAQFPchdHigXuJS4yE"
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
