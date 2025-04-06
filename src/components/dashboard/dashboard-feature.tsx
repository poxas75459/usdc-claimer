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
    "3jUMho8TFfua81m4WN3Qqeerha7fPc9GkEnWXwvArs5c4XNVXxs8TU2eZGxoYey5TqDQeG17ysSdvSE9uqkfzs2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NudCK89Bag8ApCtw4xHgyAsgp52nZoZXUiUVRn6GRh4V8neavNZqZj6mJqBctT3QdZAcKwbSg1ULvzwao39U9My",
  "key1": "BqDVJTmT7UeKFYrk8wwEapm9De3uoDE1xmq1Z5yEg5yNp2uqH23U9xZ4mtEWxy6Y2HAaj7h7eY2sgJvcLYPmWYH",
  "key2": "4e1u8RTvrnP6fJCsg3re454yGAWPgBDxS5aWueE52oKNUBmChiBrT1t4ENFsrSouBurZPY4xynifteA6TAeRhpW9",
  "key3": "5moZkfeJewZBKGSjRFnXTchtBczCDngPFwXPLy3nDN7M5eTZSFM1dkYNUfGP57QiqDegpZUag7k6A6sBhRVdN8gV",
  "key4": "ZvwSeyJXEL8ftxTmrEXGbpsEwWvG1nWDLY5ADuzny6iqXcARktzN2QxgEQfKdT5doB7Nxw3uqrhYC7s8ZUMQ3TR",
  "key5": "2VECFRrDi1FYW7tQuBfH3ADrrmvZrYBH2rUbzwfsvkE9V69s3BzjAiYNrCA6eeDfLTmKzw6Ubj3ZQqidthq3LZV1",
  "key6": "b3v7pXr7GEve3pA2xcmFxFqdD6CBLVPwv4oRhVHhwoonMXSNtDJ35cNBsHscBZr594AmMu12wdX7JmoLRynLuo5",
  "key7": "2tEw5d6r9nc96CCicMonaZUoeQyKYNrwVzaZXDy75gRF7zsDJDVbmNcfkBnJM3CqD4UFEYTjPozTUXjMkaRn2g3n",
  "key8": "5cLZB6zQ2o6M8b8fKhpkG7DUjDXsysbP1TBr7hsxth5RYR4JFoFXSMtcLHznWN8nAGtjDxWxLLHLpt8jdjk43Xvr",
  "key9": "3cj4wn4aNixRdKQ6T8bKTY5wguhKL5VikQEnVt2DxjhaUBdZEB5ET7kMCsRrJ8N1Dm4xhUS9n8GG1pP9y439KqJ9",
  "key10": "kuCmoUYCSKY2hjsubMqLT4D8dXdJQghgh5gaSPyB3d9RKTMoEYbZawNokkfviT9DgH1Z8zgs56rNsjkfnUvSBEa",
  "key11": "61dDgWyd8Ttp2kqCJ4K83SLVMjyLAa4AVowF4aVtR98dr2hsz4BnAGdsiWDm5VNhBLmnGdsLkPujDassskkkVCRT",
  "key12": "24DUMA4jnJwTWeR6FSHSyzWfwKdrLGkfTJG2RbEUiYrcAWGfcdzymiCkcN7mgNXU3S5SGFv199qSwKGaF3uPgjo2",
  "key13": "V447eYGFAtbvMCyi7gMb16D2QFd26WP7XCdtYD8Gvm8iG59wB5jQkKTpa1SfoyY3sA9fzZZT2npcpMxwemN2jz8",
  "key14": "gNcaXc1bp8dH26sgUdYgUqVmR6JgXQR2ZXQV3PkTh8HGSpnFiH8yQTyG4qoYvuaZ7TF5zVTQu9pH4Wq85cTgZqP",
  "key15": "5Xar3edycqJ6819iXG6VVqUWpcshnD37UTpLDiKq6dFeCKiJd6J4djLeKsugNNURu77Y6Ykeka72Y7GrzPKaLvgz",
  "key16": "5z9wssRPQSZKBVotHACUuEiv1K5TsnSddMMX6ckfEAz7MJJ36qVGwqAR59rqEEzpcFGoZswg9MqsuPWoCHSrzh34",
  "key17": "aNMTJFXLzboQQYji6YjGnJrBEUjW4GFJMwWaHXnC2LN1HTjjkLXCDW6ApTpUojy58qNCkvBPxyQsvMh4HYG4XVw",
  "key18": "2uj5NRaZNmapT1kBCPtRgb3F1FfjxecyG5RFnf9A8cKweHyDbMdiJGmRDjP4bVesp4xrsZ2g3yFstR62mvB7oxbm",
  "key19": "4xdnvfW1XYp5cejparnSbaz1rMj8V1X63eWzYangXTJVhKvjNsoGSD1nuxS1ZfbtMaJ278BenMRRyTRkp8yJBomU",
  "key20": "KaDo1poUi23vgr2LsN4xYLeU57btA9aWmwP28k8SMMDCk8YnFa8vq1kSkvNpaosFpJJDcsTF2SiDNKSiKd2Fw3S",
  "key21": "3MsFTd8ykuP7P9ebgBVPg6ve6RUaKxeEUEDSXBDEVrHZSQZvcjxWv9qCLPM36YxuTkhpdiniRncN8S3E2Yo11xEu",
  "key22": "5Gpor1zDYcH6MUbJ7usXojrtwHyit9N75tNh924mkHwC6zpKx6qk9tBwBy2Y8Goa2w2QA73VktuEC7771qLHZf97",
  "key23": "2egwhmWJHhTHvk5q4rQq3etH5WCiaDb218Dy61UMumJMed6e14HvjFHkVw79UAWApLUZam28u7q3MiJDvrmchRrs",
  "key24": "FdKtgKNrf8QtecDHMpyksMTVQro8JZUAU6jndMb1PN3jS4yKAj1eCWcPmk5uUCT8MtpgYDEvS7SMrRuhgg5CipV",
  "key25": "5CJzvy3kpzxcUeUZt4JvDhLfQkQg9cW4gpagNtP5vR7Z2u4S1xfmPi5hjxNxEqDZbmeUmW3yiyK2SjxaXCwhTC3h",
  "key26": "5NuUEaGFN2BEQjxM5YiTa7XsG3RpCkcUKW6K4c6YR1pvXVYYYRS5zMQSv8dRVU8SDwZxRxT2e6x5WWBnwxaJeJfB",
  "key27": "2azoX17GbivYHNA7tNW7X9EHgx8UGXv3VwetQoVXK41GhPLqBbNv6zwGkAfc7YeZPUMVbFkkjCLMQPgutviYWBCB",
  "key28": "3Qvs4L9DqUmzCAbSWXQJFUfyMtJ5mxbepNkpypaVoeyZWVmTu49oCARpGaUrACu9wgWh77KreoXQNQZHFdN4oNSL",
  "key29": "5jJujvFMXsXrA4QsUvmgnND2Dz6LKigQLBpc8G4Cuy72YvE6mFhAJi7ADZjHFYXQ8jZr5Z3Sz2HeTZveqZVvDRxu",
  "key30": "3WNpRsoXQfGiNSC1A8wPnejLg7ttBkTNCFcYJwTaNq7SmBBxQf1LY9YirAbiB4DGPnZZu5B4WweExNP1xC3wDBd7",
  "key31": "63nx7oXSxY7gcdmJ3Qz1yiy4Dv6N7LuY2y6BE59B8c2v9X3ZpjxhpumCQwYPUUDoGS1D9s2jwcJwTbft6JWafXM3",
  "key32": "31jKMhV8sYzx47ojbLzjF9mwcLvGN7gkcigx3nX5vQfvYFHWe7TJW4jDHiBZZxQtd5EYdYChq8jRo9qGWke1o5Fm",
  "key33": "4NgcGnTFtUSsBn39BrGhnjheQFPkC3QDq82oEThWaaPjUtjAgyEg78D6YWf2k9rTwEMLJjDyLthwwPoUp2ukDqmf",
  "key34": "mjL4qswys2owiFwuXHSau4eArDMLf7cQJQ5bsUaPfAGrhPRhnS9BXvZCaKLB2hc9neKH5C79QcPgHcMXxbKnGoW",
  "key35": "25dGBb771rZ9JJqYCt8dEqkWp75TBessiSdhkP9tvgaZMvTiejRpXBW2sNcqEnAHyQtpbxBesefKcU5CPj9m6jeW",
  "key36": "5JjnuQLKyuq9PxLShs6i3QFSa6Cs3wSVqWtfVrYgDwAyBbvAqkxnguswLHjruWYZwsYnH31gYSSi3tJzpZW5zLMs",
  "key37": "5TQjQZ81DJoKosYMSJdPLQYYCa7cHN7PVCU62EX4wjkRSPiR5hSnR3ERXsqLc89HiQ3mWiJaEriYfvsSTQLq1F9G",
  "key38": "2KZq6NEfv56j34wKZUmNLVrapw4KUx89rsr2XhhQrx7hhoxNdxJesBPYvPDmohCUqph8h2pFVqYMRSmUx5v9KXDf"
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
