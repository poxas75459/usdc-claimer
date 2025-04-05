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
    "338byL6Us1kGwzeDLRfzm7ai4GkwVeufyvhNqrGkx7nX6U2XU3w13qRk4dGzxAuRFWKATYQJqj34P2o5LFHZC59N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXJYTTjXGPv88xeZckse7czrVmAAocAPHfEFt2D4RooZXc6Kav8xoBvH7MGGpjLZjSmBwHeY9mf7EhN9QL9ZcPx",
  "key1": "54FeeJbDAiWBBMYWjTfz7JSj7fu3Sgr9H4eazXZamSMabhssGrXdEvDXkLQTxAYRT7eh95STLX2RUBh9S5xsY9JR",
  "key2": "2xbMghyJe2dTieYiVsGnbLkECtP9ZAZQ1E9rUavJqZbQXquD4pe2tHawbpq5dDe9CctmSRYjZ5bgYP1oM9FeUS6X",
  "key3": "5DsjJ8LhLpQusdMagxHUEHQpiHPKE6akaBocCfihj5GLBhrUWGhZKtMnMovQEwy5jbTEpkwKaJCrJwWdZySqYVa1",
  "key4": "5d6R8n6n3xVzp33GBNk6HHCuRaK1K6McsnoygYi8pSqPk3ynyfSowWt8gi9wuvHCn9EPcbfawXZBmZCkfnbZ8th7",
  "key5": "22mexsT3PQQDFSEKqrjD1RdzgVLzTR7MRTaqs3VhSD9ehh2x5TgwwNs6fZyPPeTD7rbuEPzDBsN14fBaPUTBNHv7",
  "key6": "2cCDnbywzfFC7KgRrYevvmnrLie4SmEz34nfzZjqXLf3ucTR2anwmcrfD7MezKmgYj9P8zCyusRhD4CzQEFc73nw",
  "key7": "2g9stvLDpwHgR3GV6bNWvppWHzF1EEr2z1p9ECJKbfX8LPf2LT7vPPz1xjhcsswDuH9vh6HPKoaHAVwDVFt8n8Z1",
  "key8": "5y1xrdPdKU51pcqsUUWanmVg6y7naqhYjZNkkYQ9eaWZytBrvFkbiGGD9KbM2iHvdvZoyQKfWALesDUhkEjXJrmd",
  "key9": "22cHPwmhy5TDvX4ih2piGK9K9h5WJQpyvfQatE3X1orU7DUbpGgCvRkBV5HkpZcESNFYaaLoAniE7qBj8XwEsPsd",
  "key10": "8fFos3ur7NajgFRNy4fYcpZ1v7vaAVLGZ7KV6f34t46PxkXncDznzf25nTGXybY9hVwgdPT2zbPJB9vKnM4KCsu",
  "key11": "3j87FKkFnnMJDkXJuitgxyywbTcxEuh5gnV5VKXcPgVtdjheTsMTqLjrXeJedF84t8S6ZbM5k2DDA8prpHWxP2dr",
  "key12": "5ZKgdhez4rrtou5MBhNPN5GShtK5CSSHxfK6xy12EKEEUJDNeFybap69KQf71xMYdDb9DcYemKU1FgykaabwZV54",
  "key13": "4PqqNyAWsDT6Pb1vxDCwXVCUSWpo83ydZNoAaDXSpMv7CizRq6LLd24gdDqmkEWZhqvSwY8U3VmCeHUSaBoRAWeP",
  "key14": "27pG4gRVrwDnUQQkyUC9uZQyCJ2xjXxScLVTb6CdmUKpfnBnFPnNzMtiVua9mLTBYDmvQzeHrYLAMaFuhgeD4kKG",
  "key15": "2vovZZDNBZj7XCASJeUjgbTewFckQrg4q1cjs2E6fdbuHTh13T2Pp6deRosVpj9Pp1sGgxtAmuD3aFziVvUvxGKP",
  "key16": "8Lyh2VUy4sFzxkWzKJC2EhacGgrJjBDQRk6D3jbBtvkJQRh5Tzjp7QmaqMKJS32kAhbLqJwPxBFrDPNimcKkfDf",
  "key17": "5amkFmkWTV4aQoNd5eDzM14bxi4kS5F6AU1uW3ZnVgAHhRUqrSmw1oeErruWQwhLcPKPfZdKRX4itV2Qiv2rAoH3",
  "key18": "2NAnHxMHrTn8zG5zfzn9S7Z4PbUNL83wQ9FxR9AJaj1KAipyrSYAFQnfuXrC5CVUeLdixHLjH9NveT7cJpDYms35",
  "key19": "AUWyvCwwFNwS5fgkoWm5iQ899iLcb61UjzKbRsPv8kEJfpaKPvoXDsddWTSpvuZyJu2cMwDB9p7pVr6ZVpwCZyt",
  "key20": "tygTSstZnaEgU8k5VgrNq4MXYwDL61naJbXfX2hGN3XdVcuSNfSdGgEEgvzUo9FccnRSHrXekk1Rn65K72jXmfe",
  "key21": "27VtaRMWHysZC23b7otoAoCL5Ng4KQeKtBYdZatMUrPVrMTPUTzsS9kPhWoJtqmUoGnBWF9Aj9jQePDXjTYqcfrX",
  "key22": "37Wa6hF2unqHroUwRC548734fmqQeNW3uqcTQiKBukwzj5y9jFLMeTrXgkJjYDEexyqZGuqSCwp5g2fxfF48KmB6",
  "key23": "21aMBjWKonVkDupUpPqASyvuvRuzwGGPDczaFHaeVqnxHXYF94d5NRWu4NF2CXTHFDTq6naPQDrEoqKcwGXj6eF9",
  "key24": "2ogMML1TxDwxE1Qm7JoA9GQu5qefS7EVz8WssbJYeEeQtruUymjtfU3wEm3VtXUah2En9ifwSWrtmYw2cKVyWhuh",
  "key25": "37zCHXznJS6G4yqgL4u2z2kvCbcvBDgDSC6xN6YnhajpUEbnhuYi5fN3PaJbWKb1ME9gPEaMHJudTDwvQxkeonzo",
  "key26": "4rXDtnjRBgDSkFxvdrhKqJ8eDBtEADjbSbivZinAt9FWKseVskQYQYNqKz5XPbHG3rLtRo4jurbF2CcmZ8LpJfEm",
  "key27": "5ssNao9J6mpEugH1RXtSsVaKRx7Ef1qhQ14Snmtak6BpbPw2NUj3sT3pESfMnU5kpdHbUx8iYv3yYVqKP4C1waDM",
  "key28": "3E9NK8ZtkxrKWxi4x2dRGcHVmA8rpSpj41Wpg8GoHDdEMmFGFuCBtA7j3e8xb5LSCwfQERs5Arfn3nWvb6joJdsz",
  "key29": "3J9fLmwi8mYM79jXCcJHJ8h4dpmeE4u2k2HF3taPWGC6uxoS8cwXoRRxK8qW2FbBn7LmTNWzKZ2wUj8YQmaFXCTa",
  "key30": "2Ga6ab3bMyE9kM3EXm6L9SFonL3PqAH9fjBogRxGMXB6KEEm5iE9MdxnpdxEW57abKz26bRGFdyiYCLU7zpof2y",
  "key31": "5PS9JPMyESvZYugs7XBeijJytB7ki1RrgaztbiBwPbStuGfDadWXQCGL73L8hZ37zcjrQ5vcsfJUqq9ujfuMPH2C",
  "key32": "43Gac8r9qkAc1akD823citE37q7UAK2GnnHSEsjCCnuQkbrDNWbXJvk3WoYyMi5EKX22Jo58WXvk583BM9KyyVsP",
  "key33": "QjtPx7rF2w2SE3WaAKAz5DHGDM11Sq88ZyYJf9rMu5VamCyMxUYDToyG9PuSn9rihWUPArCg5yUqecWqAYC4Cpg",
  "key34": "4fFo41VuBEtFcvabnJVqsQpGnENK7xWy7sbiFY8hR6jKtTpYQ12ptRokPnPaj8AAzmhgsNCkn82yWXTkJeEokmHb",
  "key35": "3Y6XDgN7oHVsusXeUo69vWjNzKfVasEevburPtousAzKLEMwBbwBMaxhbBoJHKVizyPfx59ffGNBucaWZdNWFMQ6",
  "key36": "3VQu1fVm1kimgxyXnm4Wsx7a2QTUYzGjfw8C2JzDikNDaFmpWybkbX5yLb31UDpDXMmSUymYkSGf4FPCbrJvQdrX",
  "key37": "LhVm88s42P7gUEscaa6oRnQ5qu1f4A9hudkW4QAaJKz3cyyTbjJEzWBoLE2K98YzCCb9YTeaFZRZb4H2kvp1UuX",
  "key38": "eEeX15TFtqMTKUVQ2AK3eSHMc48Eb8hvKx3mM6RVFvjRqP8tX3DFUZ3tjCCurCkLXvkZDozQMD4kbbfwBem98sk",
  "key39": "4D9sBV5AFymq9tvnCvjMduHGsY9ZNEBMZrsSkTNvi9auskW1SqPnDmVVxGZwRzeudLrixX4LThwprLn89iFCRNPp",
  "key40": "hBn1c2zYtZ3kKdHkSsTfGuB6VvANfYhwgwMAm4b5UBhkRvR7c5KLYq1ZLYKH5XEL4Z9uNqezpaTKjrVMxpxFTbz",
  "key41": "ubsi8bAvNEjrNhsiqCMSMT48SRf5SWfg8otxwJSJ5b9E3JrR5fFTVYHDva68hvpHcJx8UMAdjfveutimu27gtN3",
  "key42": "ADXkYf4Y9h84mrWcLHpTSkCX4ACNNHj5Fzd7GmjccVgf3XiSQs18TuBAG3kV2ctyjDTNwHtFoDxGisCiUkLTf88",
  "key43": "5TLAW4UpanUAUpzqoHKTmu2RAY2fAAsWY49B9KorwM4kRaMhMCi1dKs4W3oPmDDeHMuQHoDCuM5N38RUK2ZSDTs1",
  "key44": "3gZxk2LwtwKA2ukgPsnjJBcJLbSV7AKb4cKchbZXX6gtJ5xgSxabrefDxUqBg5JE5iN4G8FYvUCc34kxwnugPuQz",
  "key45": "46XsttKMSF3PrjbYN8XEszgAe2pErLo5oz5yWEa4sqGU27jNUJAGta4e7HzTWjMNqSNDUUSYiMjA3xMqjDs89kUY",
  "key46": "2qEADiF921FvSUAa9X5wXmkLxc1HVkNSc77sr6wo7J8L2Qcf7n4cdEUrCxGyvTgeqgfQpQpHeFNsVK8xirtD9Frc"
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
