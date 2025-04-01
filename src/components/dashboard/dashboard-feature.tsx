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
    "8NhUcy37jP5SC1qo1jU4xUrbVQ5uDZe1EF9aC6JamKCfTMotS5HBdx5cxTdHJj3tqrTMf9La3mTkgTVCWpmsNA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etUyt5HDnbXdvwTpbdgPiMjCDNf57BbBJm2AbhGGEJE77VXjtJ7pP2Baw9xKjyrRbcfaMUhNw5k8o8qxpfh3yu2",
  "key1": "57TEdFP6YPvUrz7juLU962vpq2H6Lh1jwPqUNSubEYiXfyyhZcyEZ2Jmf3j4rBMvZYFdxzELEAVHMwXLgQckDgfL",
  "key2": "4qKpvXe7sqpSscHhUB9HABZ3sx6krJSNHMRa8exuCtKRRxi4f9AiJYc9V6tQQ69kECUGLeZtG3pQYHr5jcEKCcz6",
  "key3": "5BkZdKX1XCzRazHpmXcNEBXj7PFSftCcoQkVgF7ydundtKyiMSp5jK3xqyD5MC1qEDpATqbgwxeBeeRPQB3RKtDT",
  "key4": "3NSUdVgSp5cwwqxZ9gperosbubmQYxW41P6n8ZSD3STmweH5Tm5qibND12QqEeZ2cNXAwybwZfhi4pccXc9j4VZ",
  "key5": "2ut36A8ZT43Qkr9Gk76EZzUxBh7WdHzEAuobrPuQCaDLn65gtH3tWUD97TV1fQSjTCP8gjmpZ3cLmJbPinqNRNFw",
  "key6": "5hfvWQNsgzwwCU3bPBCcSvhiCj2HpAiRShM98HGkrP46JDoUoTagbxgSruQuoDG1yqFtjFTUqmGpU4RJLmfkZBCP",
  "key7": "ZjbaKeLB8qUNwaM8gW7P8uinFZduPBXz8pPnnhLRMtGawvmY9RgwQJanhCCw4TPx494Hc5hQe7MLHz8s9qE9BSR",
  "key8": "3vpXXJsK7UtCJLPMZ6jxRC2repsH7uU12tqfMNgvHP6ugYfNd6EWCNHBDuuvv973UHUHKBSasWstodmVm9qKM8yv",
  "key9": "2whKVgrD1puxkUNQimSyYyWg1kFB1AfTsZcZmteK8wvDZAScGntTBHW2k7iNJtZFF8x6ZGczw9oqbxUBqEJrtC8X",
  "key10": "5A2WkkBfmgZDEEvnK1Rjv87aws8tvFQNcGpcKRxXQuex6SzizJ9bTSiQGQngaEypyAqWdZFMTs788FJxvwBWVZPJ",
  "key11": "39ivqNwepi5gGRFf2tPtQaqevYoDQ6XTytAiSvgdQidEowTYPMLNwaNg7RhGEBxQtkbcFpZN8h7sWRzzvhyoBwEg",
  "key12": "5fMGrXgYWNACR7GUQ4oYMiQPgYmfrYTBuGw7rReEZzHHqrsTGrmGcgv6svNyMS14jFDARUmseFDfARSKZUB4HdtG",
  "key13": "AmFfKWy1JsFzMLy1nAwfgZp9SN8d6bprZqXJHjTQfRMWb2EDLkDXV5oZCYyWecA5fmnYKD5eugK6jWD2qRYDQs3",
  "key14": "36viD5pzptPGFEARYygcT5T1Fa33bLsXNxDgMGnzRrxXVDEc59TWZLm92knggMGcz7HjV2z7UJzYZivbVCnAZjfL",
  "key15": "5CtDHWaXnb5EM7SzWrSop4xdn5QXMLu2tLAHTegrkqZci4diF6nAUKSr1Y7oRoJxZ1PcAqMvLPb5aPmNYkKgeGSD",
  "key16": "3PTDjukG5nzyzJwiZdJZyNNgbh92koFyTmUwHS8cKVyGJmZ8VpgXKpxDfKjPbrwL33B8JYy3Mqxk5NiD9JGHY4uQ",
  "key17": "2V9fLgfC5nVS3bxJ6W9Yx2xG3SfMYtNTF9W4NZiYUEjC3gZv2PNyfwxH2HGCWddy8ZQBgqmkUqJach4QJAtHLZAy",
  "key18": "5LqsHRVBJKU7aEAviTGGPdKv9y2x7gjE8KXfvXcngHtKLZUunjcMoNeCk6jNCifqojyv6zrnnhgrLAthT26JatjH",
  "key19": "4asyeBUtctU9QaRBKRjythta7oAJ2Fuj3AjYMuDYwhH5GLLYuvqTomisXmTkif7FYG6gw8zx7hhM7UJKzrD47aPY",
  "key20": "4EAMFMccnv8wf7SQvygTfnKcGnT7o8uksQsFVFdkAG6sGyJdy932mkanip7LmAhQ55pef5ZihGcKkFSPm1PucLsM",
  "key21": "5WdhoToopJVCAZZdcjUA6QneGnKcNLWVFU88UzNKVWgYXfYvhTSTA7wPXdghrEQbs3kedz8z2SWwLMrBZwYDkRVw",
  "key22": "5uvHRPhGmgejbwhjLJe5tGTfzjTrScRFHz3oDQip3nyk16oZnxXKCR6u3TthD4DwDSrDwVUaAFbXthk2c1FuiRCC",
  "key23": "4w23WdZg54qsKozJHJS5WNPSmdw1CEBRd18S9QJVBLYHA9F5xkZ2r7SzgsEBqK4rN3UbDi3rxicvNr3oqXKrapWY",
  "key24": "3Z6FTmeE7qs5ZSAd4cq2tA1ezY1Ei8aJpdu3ZPtzNfGUc7JG49tCykASLcgyYN2zdq6vjRRUKWNxTaSj2myAp2Wd",
  "key25": "AypNSpGWqF137o22g45B4WUgtSBCJJU4QG5gV19jqDcAgxragpWXe3AaQVFMVzPG8zDgvuSyKGu6poVStKJxroa",
  "key26": "54ybGiriuRmASD2Z4mX4dtkTrnvWRKZCwbx6YcXor8KxjxEuKUJJ1PSMkoUyQMnBgVi2xqnY3aKnrghLnVmp8NPv",
  "key27": "3PtwfaX63RaCJgS4E6eAqnLRa8MtUunUuYHqe5YYnyiWT21qUCdi2c3gL9MhCBaWpLw62Wzw5unVaYoAETJZgPtt",
  "key28": "2mv2Lou2fbaoC6WfBoFCHYQ6dSHJdn6pTUkdALsFZW6ARd3eBFcx5CgpY9a3bsmTGcJ5EKQgD5Ttu6TbhN3XeRQh",
  "key29": "2qL7oeiZbazYhjKnhMe1cFZ9PspsJJQZasacgs8SQPxi138ryGnFswXVvxnJMFxBL61q3qcqv4s7SJKfrci57EEJ",
  "key30": "3MT4Qed5ayeqDcTw3SDJSUjRWLbgUzWqGgZMKEXhLmtUznvPMFNcoZexY2LtRbbr5QSKvwELDA9TbNRrY8wLNvnw",
  "key31": "xRbQNuBfR5z3zjmfwogcT5xo7JLmT1ADLZmK6zaNFANtwnmvezjcp4Je12wQAn3KeEKuxb2mrBVqAsfu384SXRG",
  "key32": "5U5yPNViFfHpNWaDNsNmJHTq8cvW1d1HPTxyGsupYP3FeirNvn8FUnyUNxQfoKZJbcy2aZ2SLs1f3aXr8xXasLEt",
  "key33": "4AArb2Gd2ESZ9iJv4X4V1hhpVK8JY6JvRbywBnW4qx9NEVpVuuoUPdWCirbUTQE4vDguvqDdh9DR2U3y7EKmXXWa",
  "key34": "4btMEqXTgvez6ptpfvWgCzbeJHtX2fiwveGuKwiE5URvm23M3Mjj8nHVUdigAsKBpgvc6cHhD36b7XLWw5Nuqgqn",
  "key35": "3Qa1FQ18gDTMqeRt2V95WUgiJ5yFPEx6upDPt8cnTLAvrxd9jSJ7EZsX78idHCR9fr1CRCzszLyiEtGHfG7EGFFh",
  "key36": "58oma1FRkRJiHdDgTTgWB97QpqapJHgFGvh4rQdw99eRJJPnGYn3p6TkPhduQwdLb7Suzf9yjjGBKwivqyrkjcjq",
  "key37": "2RDfVbJdNMNgnUyNs8JT6VDSaXgh4vziY9KB14mNVmbGeAkgjrJxAxQvuzQEgFY4hWfSAxNkXsvXSEdjJysVnhQG"
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
