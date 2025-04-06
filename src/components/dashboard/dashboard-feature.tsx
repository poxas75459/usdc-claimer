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
    "EsH6nbevcfJDde5af5A5FQgWqaDaPy6q8McT3f1PTNkNMF6rc9WYJg7iSvVKqKBtaH8mRs5vP7yviZdzNvQCfn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44yTvSseAujt11EQxf8HRgF7QbmcqmZcjzFmjtzPA9QnUBGVFJwWPKwYNpyV6TxuUWhsMajBhY3yHtK3mB4oZYNj",
  "key1": "5561RwyCMTbwTvQi3je5wqtQ6u75FrrVip5RBwKuAQiiPhFqrYfuJs869dtk6KgAbBK5cEp2GsugvsEyV5VZYJ99",
  "key2": "3a6MxzYfH9Zy4rSAsdfnBUYhgBjnWcp9sUuWKWEYaEzfmJD1eU1deTNJhbWA8PoV2ZskMoNwB8NH3hu5jn9q52WA",
  "key3": "2RwbKsVzfoy9QVb7xvyvjhseSxmDyj74udEkgXPVPTikzQ923jYCLaGtBzeJP2QLaPZCihFFdJLBxqiETQ62Npdi",
  "key4": "3mCoSbH87EyiW33QPwTUDpdNkrnasRHweHvkm3rVjvAEJTj7Xyg2ZBCB6dgAkoxW9TtBUALMMYPYThKJvUaom6pK",
  "key5": "2M68YVyAh3vtLuXXvnTDLb1926dC8XNoTVEsPq8KA65pP6H2LAZyHMkPGVcAMU3z7gA7obZMeah8Ng6VqgWYEQNH",
  "key6": "VCPRUF2ZETJzkNLYJSMcKypFEj2aYWutRYsrADekXHhtCJtJNvjmBiM5h54mazyRDUp9ZFbg4AMA3TbB9gJVpNj",
  "key7": "2W2L8qRLjX2hmSukeKHTzW4Q7K8n2GFHg1a3uzABfH5g2dt6SZxBbSGSKA6eg6ow5WgzesH6nMSUmYjXBgqDtEUc",
  "key8": "4XJJwGDvoXHnBha52yUXPAaX82hA4fX6G2m3DXu1P6wc27xjrJzTwy4EpXPfbGYbN2pPV2zqFy2cqMB7Jyo2DaGf",
  "key9": "4owRAyyZQhQJxXmoin69ZU3Uv1NHBBqFHtg4qVqaEqhDZCZYuLUuFm2LhUY974buKbYc16QVFg8ZpdLYonMKU2uY",
  "key10": "3vkvicBNS9hSZ8McVtX8ZXbHqnaJnieFRvZ8vzhZX3JZFfJP5jtm4eZ8txaWwbq5Hf4wMJf3UyxrQnZMG5gR5V45",
  "key11": "5JpNQbzbYZ9c2QM8PWLfstYjs4FdrxMsJprMgTxz5tU3bqcpoEYLbYFVKh61JbMTByE8YFrDZaxq44MCKBcGxSMq",
  "key12": "428SKN8jqW77ddmM3oAn3jCj7yr3DikxPQY6e6AbwHaah7jo67dGQEmML443tGYVURthzqe8X6kkizztbT3Po6zx",
  "key13": "4Vcf6fhEq6QfbtHqieoGuuqWDYXj3157o745RAtqUU2L9F5wdfRFd2sVmCSiw12n3YD2qCBUbN5RdnwRw5vkjiqT",
  "key14": "4ePjaYjV7UGdcFBNHkutNdKfyQhmsqhxseZBjsYMyTqF99bPjjh5WJgGafLmNy6nx7gXNLPRbpN4AGM4oqUhiiXj",
  "key15": "2Fi5S13A1L1B3g7PmKH8kEuEdAju4252UPRYpdjdkFeupQGTSdZVE463Z2PCK9n7qw16RTNWEKfYXh4ZL92Mxdb9",
  "key16": "3vYYPHb1z4D6VTzKgFbYwK31QMNe6ugVhhTKqaEhGyjYeyXdUmcK2YaHpkXfBMsQNiSGihFhNMRQHMmasSxMUriz",
  "key17": "Q7nNo2Ev4kdeQzsBXee8w3VBRCf1DMyBLz9krDrxQqNsorhD87pJkMPcRadzb4XByjGkcvdXQ6axBibv9w7Yoyf",
  "key18": "UwXWxaKNmG6ZQc4NW2Vv6gQU97owxUCf5y7vepeFLpPmHNKvf7xgAVd2aqg2hwZabjqiWde1ohmdMkXG1ax59MQ",
  "key19": "2oa4taWxZeFkaad4ZDub7T3Wqi6uxAY2LjKHSxoWwhPQ7ftqNJcjGJkKMi1DfB7BRmjy9zdyDXJb2sbPKvcpxULc",
  "key20": "3QEezYpmmiHUaxRUxTAbk4cQtQoryg2r6AJdFcPv7BjLZtzJXzYNLcsRjf82XeGUE6WvuJTcF3chgQ3Kviue4WHx",
  "key21": "2LZcDeFCs1WKUgbSLLZpj79Vu8eM8rh9TR8nghUK3aXgxRFSEXk7UWo2fAUHobkRDpzcAoSahzUom8rLWC6LgJJL",
  "key22": "5P3KHGFoSHuPxTzjdN2qPKKgFQJvbyVVn5XhPM2XeNNFY6Cmo1geCSzKhMTPRkzN73674y8Kuki461LkwLCs3KrL",
  "key23": "2f2RBtqVTzWs5zJqTVtM6m7pVgFbV9GaPrCVXEVQQ5UHtiMghYxwRvZywZUVmuft1Q7YyRG5c5tX52RscYariQ46",
  "key24": "5NB6ncAhu5CQGaqHsabx37B9g2LMzgRjaJNYG9k2c1MVBti1HGohyg28nuTAtuWTjbyVV3xtsWQ4WTvspVfYKxHB",
  "key25": "3VR7aaPbe8UqTzm7S1wEvy96kVRzvQqkGKHmM2QHpupjexexGxyBdu4Y1eaZx87Mn2dC5hHJN6guwg2Lp5RTVW7v",
  "key26": "6eFVLsvroiUF3PLrvqKXo1Ea9HwpDfYbj51FmPjscBSZYRg2eykC48WWqrbg3Ru4WUz4CDaLGMNbyJMqoZoFLJZ",
  "key27": "9Co9fSHF7qd3SfddXpjGY688eUR41C2dpL6LZhMEkBsi28PoeTdJKu2gw7eodSBrFKzMQwdBYqX7vNGpE9xooWz",
  "key28": "5d5iCtBfSkCzXKsAt9yWzsBsZhenXwQnMLCEBwmeURWN2VnBi6aJ7qAyLtJGQToQyQZuwJrTfPGK3W2B5vQPguUX",
  "key29": "4GKheHcWtMovKzWGugSDzZXBGERte4SZntSRfX1JQwJCv3Ny2pmV7K1nNXiWpYmZ2Q6Y1xchcBqK1wzeB67UeMdP",
  "key30": "5KWJ9w3f6v33y3QTLDRkkdPgh5kexuHhFCT8EDfX6oY7m4CLjHgW59Lqva8LSG2QsPCzcYNa8oQLgHnnFqgTGVVh",
  "key31": "2MCfipCjL4EWe2C2QNpfep8Ekxv2zpzM38FTUDDfaVAWAf1Fn5AfrNwB7BjD8ZoqbHW4XREWd3eefRDppjiWhdpw",
  "key32": "5jv8GEMuvtQhGs8jaafCxBQSNbiZDQpckZiUsCgqNsZpChtHRxt4xwYKuxTpjMK8DDhLDZYc6sgnVXGiWci9Kz4d",
  "key33": "4g4Jr3tW49rX2seDeCrmfeg4F4RTZa8vfZ4pnEk9dM1N4oPUu7aoju5ihP3Tqgw3tpTi8imtjznkmDkKRqHxgKdZ",
  "key34": "4AD6K1xZ6YVT8hRjjxqQqDrq3JFHSfUoq87hSFyP8PPHuprEN3T2EpbRCWYTUsfmAPocm6vm76f84jxFq88thnt4",
  "key35": "5int7dxqdAmSAQ5hMHTjBXB79zBSWkG8U9xEd51XU48fVZm1KryCRhDx88jTpPcti4Cb1kBqmFUxzPPNFyenw8Dq",
  "key36": "5a7G8VwSRjPMSwM2LeouTW1eehLn2sxv9n5zHuw87EnMMktzRWXj6tCFifvaXKBdfCGm3Q22RV9cKfLUmGzRDtJ8",
  "key37": "EGCKVQ7VesUM8XTn6A5fM1xRc898VhHWcNrwVzSrwo3vgbgLzJT7N2bABYZWKttw43xXtwzgeseUifHZtXB9sAN",
  "key38": "51KPUkbrkjmnjEnASuS3X1u3bibhj23BKrzgTg2B3zughBQs2pqGkcSw4zALonvfxWbSsaJPVqLi5fjL7ZgMk2Qp",
  "key39": "2aDi12BkiPTYEELTXN2DrcH1DRCFcASphyjkh9sW1x9UYJExYhHfe26833o9kiAU6Gmxz7UrhTCBTNSaYgXGE594",
  "key40": "5pK4cjWLFbbsh5qGUWdZ4MduGmBE2839vDtdvUPXbRrfreaVuB7BMbNv3WtMDtywgtUiHEgn3gaixTshAAAJCjaC",
  "key41": "4UMEKdjmukQryet2Exy7qZZHZs9DSJsPJ3yhXU7bJCczJyy7tp1jYiq2ysVeXK7kzrKh31vRaTyNqanxeRDEanYV",
  "key42": "4V3WdHXmso5JRRTJEhj8HdDLGhNYUwn9gkvPdEgV1ZZ3JJQK4bzi9gDyuTscNKhSgq1oiLo3cMaRnmRw8D3HXCz5",
  "key43": "3NV2XD2ViRpWPAFU6J23oWoUNLJaigvQseBkfdGg1q97d67NZyenfAwLQqQhvJc5aZJfunefAVsQ6AYupf6febme",
  "key44": "331bziPzcxtZuubc2UfvUdHYtBg3adeWu1UNTonWZnyRrk5pgdERtUYYE4bpwk1W2c3K3MjPMrTAjHKUyytRTkPa"
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
