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
    "35anmPRhDieqXyfojXfShJhi64mRhagoiGGgyQxHt3Q13gLeNMcN3i49Mb1G1gpeXZPrSwfLupqqdL82xfzZHQZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soDK6cuSB7ALmtDpRZEpgyJjX1KNyrBGMXX9wQ6xEDr4TBu2183Uez8tLfzk9C8w2WHM4aFTjTcnYaP9JH7rVkn",
  "key1": "4ZdakamQaz6cALi1Pbob6z8bnAnKLh39voNz17BvuM2ct5hPaJWteQWH1tJfVAvs9YGP1F3U3HxUHFvG5AEfTW3U",
  "key2": "4TukT9H4BpwKDJHoqhjEcakAyfaVKwjVTrXcVuc1QUqCgVFktDTDnTtyDY9RAEuCUqzV49DxFGebZGtfJ9hiy429",
  "key3": "WLwXF3UUUDFxkCA8AzjRT7gtecYBtHg8wgPNLMtuGaPqnGAUa4MJZ3tbUQpkc8WpPcuv5ZFCFcQsJHo7dQjGCZp",
  "key4": "4mGAj3fmhkDMidyqfAstUqq2EB2GxcwoT6ZBEAeJsVK5SJuCbH88EB2QpZvidCjtPZm1suEjZwFomt4ezxitd1Kw",
  "key5": "2EoBZ6isPSSyJGK4ViLPNfij643FqDF27wGpTmFdbCcW3zTn1sPTdF4JzS6UQcmC7mLiKup2as6ZMpD6ZhoCB4Bx",
  "key6": "5UbHqGJzQjqhEhgPYTcSj7cXyvhMbYFyCmT1aum9TG15Tv6YTyeUEhFaq4BYZczHTHNVumfvCvFENiwiJq198W8d",
  "key7": "21JtRXafwrFoDbCxoqsXzrEoRJhzRRiMiBgZQCJKBrvKyUgomqjrNqG7snju4MgRoMLdQMDQ3pnsEeQk3s8qdJPK",
  "key8": "2sW43h2YErS2AJoGsj8PMZZCdqFf3L3XPQY2VFFqEN7gt6SJEdYJoH22r69Y1tUoinfFLv5HzVfbibaieidhgUjy",
  "key9": "5n3X8JPCzY8WbXp8LyDjBGSfWJgfr2q7sAVk1AVwchLCTdXnmoV3NQbrWVxvjiau8zsERtVkqq5XD1ULjzNc2vFU",
  "key10": "AFYi1Tj9pXxruFNRu2d5maGffjYdS8G7Fhan33n9Wc9pampCAycnjiL3cHVzFR1THMY5D9LPRDyWh8dj1B1Fw9S",
  "key11": "5x7Q5aCYLTzzdwZUpFtcHppaj1jJCyLjnT3qCxpKTr7XurHriBcMFgetWMLF5EyULYrxXs7MLnnSwNRm4oPNfJXF",
  "key12": "2eYmx7nw461QV6vTKZsZhQG7udZUMWPT3ZnQyT3V5SgLFKk9apduzccXkeur8KkefuaE6MvDFBTihR7bhQoDJYEE",
  "key13": "3Dj6RPsST5yPepzGmMV36JUQdiQ1qKCbAkGMUDu1NPEiEV3TtvPxaJegjbawbQzYqsjWRKvZWVKXW64W6kkZm21J",
  "key14": "32EDjSsmShCkKwweonADhFhR6L9eAGwKqubYHxAgNBCgVAnNFSPym3qJEJnuYZZ5SB6yLK8s1xWSESFppNar5aJW",
  "key15": "3kGQ8K1DRxFfEERdNnC1bnnCvV1CnA7rNQQgBsPWvRwzeVhEieLuz8GU3Dhb8NLcnabZ84Q85BZ7ZLUyBsrhzXQi",
  "key16": "HMm2o7MLhdKLhacyMXyTkR8DV6uKsxfRtE52rqhcsW9CDwcyuGZnCqv9WoPbe3BLziU5aufXMTsXuWmpqzjZ6Ju",
  "key17": "yZNrmwtDTNu5hJUXW3diXL1ZyUnTDUTmXYgEehXpySAqiu3DVkLSjzJteB8n9EqkGPewqo3BWxPLCXaGWnkPAJU",
  "key18": "WCqNhAKhD2xT1DWtQvA7dPSQ2iqCN6Sn1CQqC5YYzsEHvp8bdiWtq6KjRgUmL643gQj7A6AjfiKFk5SojTEKyHr",
  "key19": "3Xi3Hjp8uFDHMfFyrUYLksRwyz176Cn4FMGJWKziCt3AFbsQ7BCWhr6UQiBDjGtDCEemdg1b5QfjGoDVrkbnrHvF",
  "key20": "2yxbCaXAeeFbAbARjyqi1SMMJwRVNZDGo1vqeXWG12R7wG68vU8KCg3VGdayPJ8S9WuFDhnMEMsfhnoAVi7mQAn5",
  "key21": "3LErVkqaeQHcD6E9Ym21wW3yHgeNfh9sLWVQ6hCNdmRSfYnTGFcBFpEEnmsJ8C68fu65RQvqVD5DaeN7T5Sx1Hyv",
  "key22": "2VpAhAmEKhz56MfPipNUtkGZpU1wmsgeMzBDtBwD4Hpn4p7pa93c7rEDgNixkK31WnJVFNT9ZRJESScNj8wqbpq9",
  "key23": "2Gxgfzb7Rv4JwtQRUkm4WCLm3egsLXgvGHYrF3xa8WZA1shCQMWWwufyycLpP8oVQhjd6zBLfLdxJvUqWBhABRer",
  "key24": "4dLSE6aV6k2KoBxXC6gVd7WsP3emi3u5baZV46FyatmZgwut7E8Pb6znR4kccaBLNnBS778WavEjDA2Qnbr7VAJu",
  "key25": "65GR1PstUv3rmT9g5CsHBb9t53G3vuGQWLpm73RsTje3nFvuSuxbXy6sJKvnmjCRJ9PahRP9QY1UzjrVor4UTX3N",
  "key26": "3QViPYsZGGFdnkwDHtDjwa4h6g33XstPbCF8GJvR4KqJE9WjFQ6Za6UhjTB2toG5rLRkAdmxDcYPEvc3Me4gpcbq",
  "key27": "23gii4p1hFUPNaYgxGrFvjgGipjPuCS8UgMEYmoxSwKmp1b9pESBkkGcjQB3FLuDmmFb2j6WPkfD5AmPJ1Ho3PmT",
  "key28": "4NGCRtA7baA6iVa3YLNCjuZ7woxZAtHdphrBCxumDqUavDCbYKRpGU4xecjmShuqFRE6SzKtZq4XvxDnqrbp6yyW",
  "key29": "5M8SRPRvM6wmUnnq3iirwWek8Z1ditdC5pUBHsnD17thuHCZ4EkXLHfysE8fzwFRXcdYraQ8cnU8bzqfherjuMC7",
  "key30": "2xzg5AtK7SNzcawJqGR2ENC9ovan29NkkKJGv53rHwovqa3uSFhpMDi51KTY1bM5cw5ADTCiq3DKp57Nd2p5tQd8",
  "key31": "5rZA3pVFZFfXMa37Yi19gLaq1dJbVzKmMbqAUtKBUrGy9HM21y9SB8dCZTiffAztwFxE747C9ijq2msy25EEV8Q3",
  "key32": "57jvQv6EmDSfxXPKvUyZd2hcatieUWPCEge7UMP5pukNsFpTJnUt8JnfzRqnWKUXKVm42Yqq3hEqaJECkWDP6L2g",
  "key33": "5TwXQNJEgGHQGLFzLaXV56zEo3d2HWTD4PpjL5ANpsWwutvZWEVirHkKTnGVj9ChoFzPmBdW2o64xyJhUygjwicg",
  "key34": "2Sct7dMv1o3eqwMwuC3XS2L8xH7EjC9HRjCz5xc9mcZqMTXxG3Jk47CiCefAdagPwQGC8Ak5yFtX8UmUKDQFoacP",
  "key35": "4RcvFLDLQf7hGXjWa1v9S94fNTtFswKqDGuoBZk1GMxte4R5JmRyxU9g1bM9UZ7yEwMzYkR3MxPANwX8yLX9DDvW",
  "key36": "2G2Y2KFYiKXSL73oWsfEyefZK6H8kRCUSXSvdBuSi8zPyTXLUSssA42mpmqNvesxtoXg4VnEbWUt8JtAC2YyYpPU"
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
