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
    "2xmxyhHnLS7NyWL6UVAZ6CE493rwyQMCYzfE374oMiqvp3xWRrckjTtXDXuJfRet4W81rZCBadZDYBNkzjVnsYQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTuTBScp9qhLBU3Zz2ffvdQbYyr9Asz1ny1r7MdsKHj69GhvCCZiXbay4WdFuRgCxCpYELymAsX1ZHHw2qbqp1x",
  "key1": "5oknFJ36oxnXv8rGsymLh4paB9xxV4xcdoiqJF6Qa2LGJUfctEJdb9vQ43RuaosE6sEvGcCdMKLiw2oG3gv1DHwA",
  "key2": "qMd6uHe5puvAbhaKyUgYQwUJLWpBt4QcZsgCYC4aghnruWAVoSgTDzqV8r6f23cjvPP9kZ2sKsK3upnboWPMMQN",
  "key3": "5jcWQeBnnFzC9cr4xFArZn7jfgCwSLzavbYBccXKgX2WXUnkfUa3TgYDdEJeiyMMxBxZ5GEMoSpbu4TAXULa8mRN",
  "key4": "3DUsCRknDDnL4Wdyf1csjgYmu854kys5gCpMGAqh8VKRf8EijSNTo9Eureme7saAGPyYpMeXnSjREnkRsArouEpQ",
  "key5": "5ideW9N4FA6UGw3UgqeFKWuoLg2wS3zn3LboVjqS3jfFQBmAY3xq8FQXosSGJasRMHdYuj8vLCaKtUMdzWHpdepx",
  "key6": "3QtywFsKwRbxsKpYaE218HCWYPjZoo93EzcejfzmDKDnKqqpN5yyZhMHz7PATyj2dG7ZWqcWtxcncxxJmBGK6SvH",
  "key7": "4EcTdATRCbVVKxpMpsByhspgE2kQTjEeVSmprReM2QFb9TFGgNgmooPduKq1WzZiG6UDbMP7Cfs7UVSSJn7uRKp5",
  "key8": "6vA2JHWM6XqtoUieCVoGs2mwy622dD5J1tEnfvVtg9aDnismj2V913bLG6DG7gpP9fWFb3yc6ho1sMXYw4KGynJ",
  "key9": "3KpcgZ2tt85yprx5NKZdap83mzRUJvZqcyo6zEyjwh5MvMe2z8TXzFSNoj7mDAVDTSrPwhYYdESWopr3qeSaWmtF",
  "key10": "8hksXpTPVMX3azsqU9wQ6MaQxDKaxgvoA5tVjhWRgVZVFiqtU1eyceBZJTajJgszpgreEthRUpCdPVf1v9NbPng",
  "key11": "2VdtnDbEbujQ8Jjy5XtZrGGPF5FfXPpg3KoWDDwNm7Q3qS9MQzJtqqaHbhvtrTrB2Yxi3to3t8UN5nV6yMUAqJtu",
  "key12": "5TQt34gX3CbqhXn12JG5WbKgaXsHZmd1HURjmb1uAWnheXTjMkt8pEpLo3dG1i7PNnAdsXg11mSALVx2DGmGytKj",
  "key13": "4CvHhzSZBk7wrjjWurtMrBRcdZYH8y4RgoFWSYAqBa7pfFsiXHSP14PF78GiP7Kr4SfTHneiUk7aYXQToT4Bt8xw",
  "key14": "4FSXDZZ7qrtGZRTcTSrGr2FSJCeNT9n7X8bqinQ4W6hWwM45EpkR8ovmJVNBPw4PcTbDXcpzJbNha8QkYMjpVCSi",
  "key15": "4Zzb7JdLBU5MvmGhKEJsBm5oYKon5QeSF8Y3zyuzqfSEawpMMjMSBhdnjaFqs2ymYcbTg2BjokHUnM7zs7jkjBYr",
  "key16": "5dFLrcoKdwgia8zXTF8uuS4ZYgoEh7Q3qc8eGCLqmv2G1n28q5EGWJ9fEFn5PmoctjE4Z9YzxgzsJgZD5Dv5Uqwb",
  "key17": "5z9FnKa8oWmCN6AehvzqLPu32VeZzLnHQLJVceZk1Yk5AS3FEqvUdZDfzkGy4wK5QCer2ucT5w4ec8nfozEWEmuo",
  "key18": "5ig4N4VaCsBVFd9fQp9F9AieU5XJ1FkC4A62XDZpUn5sVCqi1X4cv8Xq6e3Ean9fmkeSSXZLpQYB79HNi4YAhR76",
  "key19": "35sodMwaWf6yhCXhRXBeizPutwqXHqNX1QM7zCYGHggrmPa6eayExWXzydfMoVRNhZ3HP4VHd86yKTLpKLnn9ZSV",
  "key20": "4mzqHoJvPpwmEgAQRBTpxyxnvETci3PmyT9rF6tDiaTLS7BoToRBEES22zAndvsyzz6Zbqd2mVmQpqETbgTnAsBK",
  "key21": "63ZYkf9JaNcHSrbepmr8QcU1yEbFGk895MuyUbzAKXRBWpV74pExwCTPEAqykdjFTnPqedEoXGCh1M1K3kxGN8JZ",
  "key22": "dGAWWyA6qBgUx1bz3NY3khXEsh9RcLzbFnVJ5ZkoStWVna3rzcf452Nqnzqg3TqN8tSuCzw4f4SeDLxf9CRL3DU",
  "key23": "5XEBr3FpstsbxnQ6pBDai1mu3dTsC6zD126rdPQsPKEeg8KtsF7epyf8J5JQ7PG7VCo2JgHaKAYoNAiSqaeUuUyB",
  "key24": "CCuPVJWwnX6wFmaxrTNaRZh4qMtfFbPAGF2imB8jiUrR5gkjrvdZ5CMrUzeJZrApMzA3C2XncNjeGyPrx18xskK",
  "key25": "5Yq1j8McfCewEVBArq47oTvPVDxs8U52iwcK7dKEf14B5w8tD2nrF5n4dcWoqAHCy78Fr2jwmPq9qDF8s11wqzS9",
  "key26": "nuwMHA34cqWhHXQwkVwrF2M773rwfiaRmdKaWF4Fnsvh8c8SzdYshXpogNqKSpZX62PiSzvxVB8QUSwbHQ3hijj",
  "key27": "2mQ7Q2SN3onPrw1xfrdaMBiBeiGWHhMYWdKv2s9XoesgvcR8yAdJwUNw3aX5qBMtbEtA5uzUfAAvf6fs6dPfBzbg",
  "key28": "3UWraW7Thafj7ng946REVgQG3iKonZ3Ga5rcBfGmEereLAs54nJyBat94Cyydycbp1bBVbvSxtstt8kMhYNBz62",
  "key29": "7gnUiCQd6eqPKBaDeBxUeszwpxzoSxzPqJH1po39gUcBuoS7gB32RiwGAtqDKsR1YKpqLyH4fT2yu2ErgWt4X9H",
  "key30": "5uvJ674pb4pUMtxeibtpQ5B7NZHLV757uaDgfJSE75jRBQLz22UnLwkqpnDxKeVb8ZX3uQze3KAypD57BW9KSKv7",
  "key31": "Ew3moErYTnx5BHT43zd5mXVsFCpA12Quspf9EMoTKrdRmCkv4mYZcu7iDc7LeT3LdTUKcGimhqQZqrvFF82Xy84",
  "key32": "3eGsjg3WmoHVwSo8fuAFnZnWaVHz8VBwMy5gRNs5dUUZGxtHjwUHV8yyouWgJPLh6wfjiQXRgrHpyNe1Fezyb8xH",
  "key33": "wwWAkkz446mxW8nigYB9eGaXJRH28xtKe8c4mUC4rmgLAxqtyr1sxG8rnVJap7krs8yKMdroNjtHfuvHgMgeqx1",
  "key34": "58cEtSE9i1nR3YNy7rbZ4ATTtKikvhgdPz6PhnrrWPZ5SfjtchioUHFe4huoNwEX21M9gQdkk7Uyn6Egk1kDWzNx",
  "key35": "4KQqQnAdT3qm2jFjVt2Spq5A5iD95EVxhCKBMVRHTfVavZiCVcfyQB1UtKQ1XsTjvW9misYLTMHofboHqkw7VMq9",
  "key36": "55sF5xd4LmNVqE9PEBZpnr9Q2mZxvogahdx662H1XETpM1AZ9e18JxMgNR6wH8GY2q5QJRH8X3cNc1Vi1cjkwBmN",
  "key37": "257g5FtfkTQedf8cADpHyscSTzpzfJ2wCrsV8gTZCagq9QMEje6WPeSMb7cr48Hqt6ZoVywrQh8KVFhNuLC1yJh5",
  "key38": "5NJsBos3MfpsBkhX1Ub4EiYnA2YPRZj6XJQ4U7QHrRFH6E7U1f1P8xRvNBvzuKMKsMYL9iRsbDWy8PkMxo1bF7NJ",
  "key39": "4hZG4BA55yn8kY9cucvk7du3aHRMRV8v7Yq6FN76Ex1vjPS19Aa9k4jes4bkRgJKV5jTT8XCcLQN9HyoUyB2wvqv",
  "key40": "541Mvc3AF7h4LmJ4XHEhPYxNjb2cpaFwAQxWb8JP3cgPgUgoShB3AjnyRpPLy3Xs9Gzp8MxBYzPH3Rmw19naEee1",
  "key41": "LLtne3H3Gq4DSi1rWhqaD586cMkHei5e2T84gDqbxnkRAR1TRbUBpGp8eNWLfZstEfzKd94ZrMvajUhadZBFrQk",
  "key42": "2fhuU4CDjMCzU4bbSBCoYpzzxChEqMkA94vSpzDq5Q2k9FR1ffZqxqi1RLYa38ShaSgVdS6RByR8fHFDmgwxoX1h",
  "key43": "3mVTXxdXdU17FfZ71MstW6Yii48y7FTkaRfF2D86E3ppmnqQSimCiSxMuHNBa87G999YBXXWtS7bb4PysMMXGzBd",
  "key44": "4caP7thMPva2GyBLsqT4cPFQEhCxbVbvUqFJJXtmC8Vo3fHPDshNFWJ4nidoP36dFVqr46SdRDyAsH8D1cXUA2fn"
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
