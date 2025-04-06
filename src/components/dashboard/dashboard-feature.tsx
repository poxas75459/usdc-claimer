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
    "bSjBXPPjn4Bm2XEKm2LmJNNEz4a1etwbiLu8kSxvHhS7etPYvMZYxwR2qVX2TQq6ZngmvsDWzjN7dwidqTa659W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViGVrbTXwoiiLrFabvpPAQNS93YXuLJaH4deDXKNTq6BATANEsVJEFmAA4WbvCSR5Wkcc5DKyWmMJWAKrE9KVa5",
  "key1": "2ecyY9KDZ58WXEfqcpPDpoUnK7c3LcQHBbwhBUzGDaJbssibnVAgDz6ghigApevnLvXdNim17FhVqE3wi8et7aWG",
  "key2": "22CKqv2f9WXjQiuW8rgghWkH3oipxN3sdPmMygktk9hrtYKqCv6MZtRS76ZjZnvjmjV3nqa3BeLrP5uTgyEDVyyn",
  "key3": "4NCQdsqNdy9VyWFEkwdw58uqWv1wkvpzF4Xc1UwBmjuBMw371ypVXjCir6zyvKCr5PPt4mifNsivMKjcG1MkAkYx",
  "key4": "2U7JvpFEfDFAy8r83KpkFDfYvsiHfnSJs5iC1cgS3T6VXEnDFTsBRryuX1cm9AomnxVAhUy2xWWAke8MMczaSguR",
  "key5": "ip387bEZWfzPdLKsBmmi6gFzxjeHsngeRpa8eVN3H8dNw489gJbYNiZM4UguAzEdLQeTh1HquBs8AmKvpk2CeQW",
  "key6": "5kBg537UUAGatFowZBbbgVJzWpQgaCbMTnfhre3KaZMLRECY1DYFGxJoKe1VoMDTxvECUuxQZrVUR6ncYH7Nmz56",
  "key7": "3gA8WmtZWSiM4noyVV3jYxomLmH1wR77y1zGncnoytzw9uSPz98hcJyKKwZnh3ZfbkGbdYDcQMED2AcvMf1WiZUA",
  "key8": "2oy5m5CGmWnoJ23RhWXrMB6h4ZryKgCU4syNWBP1Dp6Ea8GH2DC1WbjfTDCk4cMfdpUZCP9L6GxPFDPcj6ASKxmH",
  "key9": "62k5MZcMCEfEnaUbABnFW5R75nVYd9DuLaX4GwtcxNmrHPjc6kAvXzgZR4rCqn3DP1SiQamfqTYvcZAgrFbYvEdW",
  "key10": "5Cef36qEeziu6bLZX8J2egz9iZneGJQqypgvygNsbeQdpsyQdsmDKeMd4A8MLtpixJkYVYXx6LrjXmeuMUyXxiSG",
  "key11": "5adXXgzhLnuvtyNYaZRAtxo3oB2ADQQ1PJdgsy6TsMQSc4v8kpKxcHiXaB2KNbEkrfUjiKyuU6od9YnQpp1Buq9K",
  "key12": "3wPbdhScpyaLkGY5ord6YLpVEtry1YFUVBgXvefhfVV1YeJ9ksiodQoX88nM2x5D8162ZB8YyjcuXB1qYzu9c36g",
  "key13": "2pfiQz4G3TuWkmQKKapdXkHbfSAFfav5S8x4mhQ9UBWMMw3tBYSE4xy9ZSLyDCzH3brdejGJyDDMM6FGQ81QSRHF",
  "key14": "4SjnNEtM9Vuk8TiBBMVo27wH1kAihotBCoFatc1HbPBs1UaRYX5cN5mLZqE6QHqfZBiBcoMgmzvGzPjrrYfo69bD",
  "key15": "4jE1r1cXnijVqkXovazfY58jAT2uH6woGwvFurZtKKQQWwnPBSssXcaZhRwbqpLj6c6xT18aVAgyyYPBQ242RJwi",
  "key16": "5izENKVwEYG356jFzbBFaHFwnyLo8uebfK9xqScM2HvJrM3MDh4dhsam1Jonj9C7V3EVk8Pt6ZY1KBqbs3hGNTWF",
  "key17": "5hCJJbYm7rS3GQy742Wv9KaS8KNETnRoFNJw43mJBx7d6kLBan6jzAAFGCLY5SEZrJowC7S4jkuHV4aYaPb9p14Q",
  "key18": "4i4sMoPwwuTaPmc2hT7yk1k8zpg7yn55cRjjLmbi6WwqoymY87iQ5hkSZzH737kPDoDvuemk1MmmwGYDjHNDJsmv",
  "key19": "3vewQXjXhWT8vz2TQb5aCmvEe2PyZjQTWczLPivMoEEuxnAgS2asTFtiuyLLQVG8qGaa5iNTD8631rFVY4GQjSBR",
  "key20": "XirDicnWZeCLAcxaxCBzzeBytFXb5WF5TFt9XhibTGFEdcRhJvwy4wexZAfXgj1AwL39s8ogyhXyULTyzrQg4g6",
  "key21": "5rxm15PbML52Di7pP6n2HADJzDxvecUntzKPD9yvAuodHWg3Ye8UQvWhHwM5r7HvGBjUbHK1dyr7Zyou2RVVE2r8",
  "key22": "67hXiLNqH4j3xnx9Zc1xsrpC7JrNfn8Z77XUcq2KRHB9Yi9zFyW9KQWQeqE83g7LPtjwGw9YKtbVFdT9xwddX1Lv",
  "key23": "2EyTCeKUXhLk991cJLj39jvgBCSwofi7QhBq216rG7mG1yBRj8q2MptTmCQrtRAnvkkKNdiw2GVQEk8JkwzYxBFf",
  "key24": "s54a94nuUYKoevfZko1kM3cCDNeYRBFha4zj9n5yG325hbCWYANj3vMYuG7LXQVLeG9aTZVL9W3KoaCSC2ChF8D",
  "key25": "5jNtsQEdhoQiVGzzDRzKGMw8E4ccLLbF35CVjYKAd8viBpeVqiknwe4PCdTHAsfMT19ZnERpm8ZDidWRgpMr5J91",
  "key26": "4ea7p8fT9od1yqybSdXAX1QY2ruKYFVY85hXBBJ4qLepaJQ8zivEorYPPHNXheEKGhtzXqJTAWfgj6C4Pt8gdoDc",
  "key27": "4n1hoquunKn4piwCsTJxAboPbksRcP4WGRmFapRXqpNGAjverVijQwHwEK2pfBSFFXaLz3M87uuvuF2F5hBTpqpg",
  "key28": "41tdTKBFWf3gi7Jjww9jDk7E1dmgBepdtwm71NamNresQ7uaXQ8nyb8jXJEamtyPbkjkGSYP64c1RmksFu8t3LsM",
  "key29": "JWwCyQCrdBJX9foPzxg12y4k1oM2tiaq2XSqyhJYnBcQ1apFiH56Up1bYSry1wGr5z27eub6KMSyHHKtPxumNm3",
  "key30": "3BunnYNvXweebyTwvwFuX5jDN4aeeVv2gYmuVj4whGumRsQFdz7LuA33RmCFziUsyC8PWse7qaHgsZU58HbkGNYr",
  "key31": "4UvPnAm47EGpEgHtcSq5mcThEaPRSDURuzZZGLauDHwQniLYpuHUdZqbEAvD3fcn6U3yp77EeraZrUYpMS6fM8vV",
  "key32": "Zk2oSF2xprhdL2UJPxJ5fAnwWr8Rm3qV4EbZNsXaX8MGtttQjw3j8XqnDNVUgoAxedm2YLagtCYV7dJF8DQJfPj",
  "key33": "2T9ievcE5X5SPAEq8eyn9hgiXqRw5H6jyAaCEpLGAUXjNtF17QxkaJWdDDLgnt54CqZhSMoKwmvEbxVzHnaYzHSN",
  "key34": "3FEfPsu56UVdCDL46K2tXjegLjmKTnF1FwaXSE174m5496uH4RqZ3yWo54n3JjvkZn9tNSbJXXYjUi2Rc39i6eDG",
  "key35": "45keG9C5y5pMxY6ojH1CYrdJDwnVB7ZHF5NgpmCdVyc2ZPL4sjgSWZP8AixjcUbXku1boVNXvCRz6GxG6L29nWhp",
  "key36": "4atdVTPkquofVK28HsFxiTz26K2FZw8YdsTdZT6mXzwA8ZRrw2KApUz8u98ok75GQDCnC3sQz2xuo3Jd2JGpzsJj",
  "key37": "CUfZWUZfqKiF62sNRgRu23chXhYDhrhkYm4A9HXpY2vhEzzTPLEW7Y12cpKJDzmg58ZC7sgb3cuFrSBn24Njov9",
  "key38": "2bVvzKDyHBesXxz6wbz63KbnztqWi427oqRyAxEuRzzx1PmtDb4qSWjqZwrVECjpdWQJ2Y6gri2Qn4uor3YCZFcb",
  "key39": "31F5uAvcsF2tLYqcNrAXViwPtBJpeHXpSP6TfvqsQvdQajT5zv3LfVUofarAep8SDtMbwnpetm2sqvFy14HzzJsZ",
  "key40": "3axYdyUXuCQPqNSuWJL6AEj6ZnvhA9rsbVHF672y3mwPG9f7Qc7pS5Hro6YnVrRHP55rmS98ApE46yAfhW2SiyYJ",
  "key41": "5Kwyhdu7dKaMVbz7Sfz63nQqThX6DqaQSogk7ZmZRBNMNzr3ihJMTRP1nZWR4skjsvRpbqRRhVRytjF1ahZsHzW9",
  "key42": "5MN55WzazWkvR5fvf5CQr64FJQGc5LKUCxiAfNvfJSrd47jZaws4Sicxtbv9HwYDS72M5hWWtw15WRFko2Rxc3Dq",
  "key43": "64M3ki9HBhXfS9sqc1XCVTcHhs4z7DbctZ6QxEFraqhgsfSKjqfVvQYoVb8Dxx7NGuNvd8spAVCU9SWWuPh3AubB",
  "key44": "5snUbxM1HH85gVrPuS9zuycu9GtdFmKvUixKPKoeGgHYd5N2fpsZ6cP8y2NM8natueZR6Le8aeRMc5A2d9YHRk4t",
  "key45": "gf8oKnyorgVKNNz7fM3wZ1kFTqdrf9aQqVcCkTSMpgKpcsboVkBdvAAB75drLu7koB7gLpTfUovXDrTZSQrjwrs",
  "key46": "4hgm6fYE3T2zVxHkPvC71TEE89PgTLSoPrh55fxvgJHqjbvHRCCxJk5b3jDxwEVWUtWobjxme8brx1ZsS96WS1J5",
  "key47": "33bPZRgPwFmkApk6VJ9iinS3vRHcaZUEiDSPwt6AH5omk7R75Z199FndjdtomNLSvWkp6zanAwLBz9FnAcXN5SgM",
  "key48": "2xBi3gBG52w2iF36L3AyhKg4gcPokbECexuPqgWEK9aq6eskZnTQb6MmavDRnDbka56wEp2B6UWrm8JyaeePv2LS"
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
