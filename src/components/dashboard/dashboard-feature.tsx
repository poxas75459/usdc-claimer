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
    "5C7BNwo17AVQXe7mupbxGvcxnqij1jjZHVSccRHiE8QBAUxLjoCMmthmjkU5W9C7dCTST5j3F6cBy3pEGKV8RypL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqCX9UyvSvuYqC3E766deBjj6mqJwV7vD4uo5czPLGKTnHVM9xsyh6FsNi5Y3Nq8eRtciZ2xf7yS94r57dK8GMB",
  "key1": "4in83vD9M6zhm91sBcvnU2pVnqtULCGEc2HEq6uB2zpB5wcaecXLvR16T2fu1wEFHXxg5i1ja1wDVU85RAtFpxNF",
  "key2": "yak6qQE3CxevbxKDGHWdjjqtF23dHczBFYrZZhUH7JtFNgy1rS86UzcfGpdKjtxJhW5LLzWF6QyBi31YwbBJt2g",
  "key3": "4R7RDhwpZntmWARLBJ1FqgdAnkKeye8aPRdv9rz1R31u8V2AoHfGVca63hqhaMoqzT8bGzPQzQKGtQKYceP7Dv1J",
  "key4": "2tqCkCCuvi3G5iVscSdm41nYdN8wRb29Cv8ZXWqRUewVZ7goUC6nuuqpKUgT4BGZFnbzzKNzN14EzWXGKK2c8xZC",
  "key5": "263oBHD4gRpGeD9V5NeKJkYPNpzUT7EoJRtUKkhFRYiLnFpPiN2nsc227CV2YCVT7n3FKHAa3DLxsgN2kHVxb3yG",
  "key6": "qLVvQaE2tJsa3R9FeThpKsxKcyrj85m4uP98PDsN6pNyNJBX9rwfGjHcPBq5nv4PkUC7W5QsQCGHCaENiBw95HM",
  "key7": "4m6SRqj7Cn741nGLq3zxxbPHhk46vKa2t3h8iwcW7TwasKQ8jRXtPUcwZpuHMCq6QbQ3Bqyt4WyicUTeeNjPsY3",
  "key8": "4YTJGJf1BCQLCZrbrkP6XaNNb38YGSxWQZ2J8dK2W2sCeM9f5LKfJJXKmQsDuBaHtYwEirfFhHzzVEGtSr4SLSm2",
  "key9": "rKYrVRjiwBrC9iBpQ5wo7s2mu4JjeqWr4V3q272fvgW9k43vg39ohoHp7sSHTd3Da3S654ajXxGF1r8HNhcPueD",
  "key10": "2zHZZgTR2tiAb6rN4L6JU2ePuLGvwt1uz6wunbJSUabCpU8LAr9EJvqRVpEv83SR33KH2EJ1kgfNK7VoAaisqsMj",
  "key11": "3eUKFU3Ddq2KH33HmVCntnCRjYPcmTShuHMEhHBAQ6vPsMusKmM7gJZKVkGKSjPDYpUczD7zkN4eWGLoLR1GBtFq",
  "key12": "5YNM4k4grMg3uMAQcVNzf1Lg7C2PQZJLTigggbjh9E2NeABK2vXnsiQh5BfqLtkqqvHEZFB5jaZJxL5sxUGrCGbV",
  "key13": "4YLbbLAUxSC8kN4j1nLBveKKv8YJzqDcgfvYE4zFA1TpffJqJbPLDszEq9BT4onAcFQKR3KBQVVAETsvVnPYPa7q",
  "key14": "4NWTaR5TqUJUAYZDBZzdYhFsgz9KC961qnHNrWCNGrfmegpRZA4pxLqwKKPNnKdkoykTXHSo3KQLsxpZJUHbSzsn",
  "key15": "3RLJqqzU93tKpoMY3PhRnyVWYhd2vswJhJBWtrgVtsLziFNnbnWDPB3UnaYUkQMrnKFyWCFsXTzM11dBhyDVaESJ",
  "key16": "2yDMMKzZLTwY58huHznsbnqkHzpkSW1wGxkf5NFCvBdxVxQkbWittHdKuUg7GHgiCrZMJGhowaK6s9a5gjXoLr5x",
  "key17": "dvB9GBtcCmQNt7cJgDL93v3JDeATbvvuY1XWewjwsbpJu8PLjQTdGVQp6AE1TngQqs7sBwG1TMeqiNG3BBXenmf",
  "key18": "2QiYmUW9cYCBtQB6Yigr3Zcsj6WgbtTuCkbLH8NRw2pjJdiVUTccBReTA9H5Qt4nmhCfw1zEjxaFrvabU1T5b3af",
  "key19": "2wKzvURdkPuKJFwFn6cf5jvZSx5jDvKfetVN1ubRoSwRR2daxzWaBaxnpkkto1rw5LWG5Xpwjb9iH6hMB5Fb9LfN",
  "key20": "64MUKEagAZT6NiLv1SRdE6qHFf3PtNzgpBCMvArzJnh6VaRLxUdufLXsqZYpzXVocaYMsvpL8foRfHY83YEt1Hct",
  "key21": "znKeEmE4ysb8pUTLunSx6kijgxEcYWx8LKoLZkaMVSBgKiQN7tGr5VobiEE1MwCTvpx2JbkBdfj3CL67ipmK8iA",
  "key22": "5ENBvccoJUqkMrfCYnsAVVbuJPpFkNS6cBVXRH8n3WnY7tYCQytSH3nMP7NnmZtg9UnE9qiaWwdTmvWTRFiNixV3",
  "key23": "2rPp8dPKUr3xHzLGmY6V8HFeV7DyR5edJGs2n6oJq78JCvRefxtHG9tbaSGdzuFJxdW2n9vbuhShFuMjcXeYE46e",
  "key24": "2yqZABonHT9hUQgvm98tk4mvvTBDVTgvMZdnBiNPMt5rm12311nxdtE1Vt9NPCPo85bBEgz2yrxTXJfk7cNSnk2X",
  "key25": "2K92gccid7j3PGUmeXHaWJo8Gc5G8d3FXpKuiTqYFUM95Z4bw8MxLc98TwKYEFY1TpMUdo8ZPLW426iGxm9GxMGJ",
  "key26": "4UKaSGs7T13BjxRoUY72HCYEdKHqr6fcPvJWinRc3uBfJZLVeag5b25samJUZ8Lo91Sdhvo4EJi2zDt4czTpGx8D",
  "key27": "5NZbCjCHBhQhuQijuARhKGrDW1FsPELz8DKtAHn86XiWp56cyZBqcfx2gds9kZrGKqseZxnRBtcJcd1eyGifcLd",
  "key28": "3pa9g7sAsZJBF7o8nrPDUFH1DwaEJF7icHWFSKE4mgZAjse29StAfxwuU5gkuauNqf26q4uGme5vXz4VdL45nJuY",
  "key29": "4TqBf1WfoxV7AutNHCGX5bZpcqBZ8mjNj7ejsLRUmRpdc5fhHBEFV6w6x18AErPGx3HH3C4pmo3kdv8evPcP6mqQ",
  "key30": "2kbHNZmzFzzoVin4b1QXPJ3ykd3hkQxx8RtfvGVafnbRRerZ3MMksQnmskf5BobgUVbexN7KZGB5BehVAnZLi279",
  "key31": "2oiXappt4JdboWyfQeZCc7JPsVZyqmJyZNdfYfRWcyAZuznfTW9h5LppLNS3GmjuENLCFmFq1yHPosQC95w72YB8",
  "key32": "3Z9gVNTzhBddZ925rJkkNnVNLadqz8QhMFQEuwnd3NnyEPqNN9sdHvoF1GjmBJQ4n4WLZ3yxBhSoRRnXcbm58p7X",
  "key33": "3rasbe4oK259JP2xxKu1f3ecAHBygnnZE873FkxCsaWPRjoDVQ62zUTqoCqYTsf7uyuQ878G2xCEgji5SMrRx6Uf",
  "key34": "63pN7ZVTPPmF6vbbyJ3nNv5eAuFVjursCZ7jTBS1LsESUm6F3HwMN8KN9jXCg1YYHv41KWiPr7ycyampxwRtaMQb",
  "key35": "4G5HDjk3mehnNH1DzhW3tJq8z5k1QXqYg4XenD1WPyPawQNDd7QdF3AgHg7EJnBZPzocc8r6A7GD2HLjC87RZfvR",
  "key36": "5jJcyn94Zmk4Hs7bHx5bHv7HJcb7PF18M2zpyogM47X1ugK6Rki2P3dV6vjZKetsZG1jQxUEaPiS9sN9KhGVYm9n",
  "key37": "3xrpyDZi5TrA8qdfi75mwzz3vpmPbZQPP2J6duSXXCySDCq52QKbzH4DBWrfXMNypHgLiSxPpugFpBsbUoeyFym4",
  "key38": "JFbfnfsbchmBy5m3coP4P7xj4sAQcnDTa4cbo9YeyM1QMjYjTb28kupRWXoA3TH4tD778pRCkTGSmC5aihhHntV",
  "key39": "5qwvicB45N92BWzd19L2pmYf5ZP5psqHg8vj8V99myZt77aXgufqpv5vxTHrXgbnpkbJDdN7Gb3fr8vQBsbYPixK",
  "key40": "aWthHCJP4aqPVBmvdhY2iUpuQLnUfTJvWxCgkBdkasJkv5CDbJjPsVBnWWKUR4xoTs7Ui6FAuzLFQt1A96CWJdf",
  "key41": "2DcGqVtN95USxgLF8WgP4dN2bsTDiGJooWhGMHP1ynszXqq99hWR5WgWwLkdkdsv6BA5kynaYXyk7TREYru1iiyn",
  "key42": "3YEsRCVrSXnkB8aZ3UJacmsxqFzjBne7L6MxcCvfdzNxZotcRjE11aNTgg29UBFZRJsk5A3pxtL5zNr14xtxHZas",
  "key43": "5ogkiG5oJLpFxqJuYxiV9wZ4EiapjARE3anvvo41mRxN9jM7XwvQVzSKJeJs1weH2HAz97ZGPnuezyN5NFN2d7Tc",
  "key44": "5QTMrQSTJeJPFCioEQqkEZYchuxHkHJ2sUkYYSpYSiSUkahQJLGmhnfVkWk5T8irJUmzoJHKrCBhzfs3uRKJht7U",
  "key45": "4HSiZ981S3H4p3VmebrRBPokKrm6YUeGWyE7TPR3N9S5FYFd8fXAGofjnqkCWWC6DGe8wwudDbbRUXxYVJQLqpXX",
  "key46": "FAVpyAdcB4V7LjXNUja9ieKfvq1wyCgagRsYgtm6BSJaLX4qtraMs1xT2DPUeKG9ttj5y5SiCRt8QUc22Vjo21o",
  "key47": "5YhBpJu47vXCCaVT77iBhLobvkb4C2K8eVYXqNYA5G1mxzY65qGw16j8zaX14hjSjVCG4pGMCqeKhHKXhksReCJC",
  "key48": "3KqaeaJDLVGMdyUk3dj6usp5pYP4jDZXwMhUzUN555aEa1wSET8TL1YYvdon1zdwNw4ni3MbK8mC74SJ9F3RnWia"
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
