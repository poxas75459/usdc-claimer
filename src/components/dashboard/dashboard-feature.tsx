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
    "3LoPrLXz8GzeWguHF9chA62mG1GGSXkEBefa6T7FgwXJ6M4sbGBeKdkQAdK3R6s7EK89WtsBuP3JwTMoFguFiEtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjemh5q97Co32uzCwaBrWvQH1p6Fru8esi4YzvDwdtChBGQPnBDiQgogASNcapHiGLSCoUoxvvgfMLG27k27NHv",
  "key1": "3UuqJQLWsQdefEMD26LTYYCk5HriFhxRi7MbU4e3ubj6wMwSJy19GBmeAk8GZABmRi3kdRqDghvv6FMmJ2N94S9U",
  "key2": "4aYGTLCBrd77DAfWrXcNE6rmzspC8eTHXacdTpxLkvSqhxqTw8iKdaqnocSSygP6AsHp9UFSffi1FPSd9wHdSonA",
  "key3": "5rvz2dH4L4YfY5fr5Lexbnr7bDYYP7BH4rinyc578V2DqZCxxGW9A92bVFgWp47nKm1QM9NQEfKzjEjeEnJYb4j1",
  "key4": "sTSGiZ9WdETbEBqnPpBYXTN83CuyDK72xyUwjsRYnk1iq7CR3QHDAmMP7reU3spXssy6iMomj7eNt7Sz4KqYXVn",
  "key5": "3pC4aNskkDh6ETmkmiSJXJ8gVXFz832KB7gJR4FvSpQyLYWYrKJ2CwMzVQXBxLDigbcw8FtU9wgtNPPHdYgmuKDX",
  "key6": "4oKRrw8WvnWjN9vr33KVpg6LzZZDwZsuB2zZjbKLfk8hSbscbxBLUhHGji3DdFYTiwFXjatfHzwTUPkzCcv49j1T",
  "key7": "5M8r6VatQ35jU3aYz9FBEB3kzV1YNYp8HX1mstiiMaCaZ2dEp4sH1qRgRh3yaXU5iXoLHzBMCi6SxuptnXKsExMa",
  "key8": "3TjWZTZkMDN17Q68ypAM92weZSbEWD4u2MoaydZTw1knzU5NaunjdU3Y2NXjVFvRLb9uQutLdMuahao32RQqGGJY",
  "key9": "2DjFX8xn8TPuWFCvaZM75yn11fBbHunjVxGqu8krJpxENP8fo6zK62YSq2FbsHhwoz1JRPrjznMMPX6GDX3RQQak",
  "key10": "4dATKy2hunThAnY3bNEsBB5YExsuUwHkE2f2Qpf5HofjwWPzLDRWZHuNLt6G3FRPJnRozR4jc7KD49KjDebHBxC9",
  "key11": "2BMz3RtrP7cqFhHVNfofYETubHGyQuNr2d8befoqwSQnxQyp7kz9D7YuneRk1GyjvCczwkWezfB5pBBqF7Nkiz55",
  "key12": "3gn1WHPmX8VUWxPCZ7RS74iRj5yzSv4zLBqsYGHP2rHiYpubvodRXEvFQ9iCKoKHKxFpbra4R9MhUJSTA3PihXX",
  "key13": "5s564yBvTn4E5rkXwUPVdNaAfMP6rUutFppXzuKZnWfoPGJEKYTH9xx5wJNvFiQXpsiu6DJaXtdh8eCVcvNNWJLp",
  "key14": "3WgRvyLcMgeE7jddonLzoAcbxUGhVBhR8j7GKtRcG8DmMQgAYPwVxWmPEReLQYepNpD8PpeXqmjv9MHjvrUGoacA",
  "key15": "4h5QDwPBwdSHV1ediUniF6rpX4QjwRFdK6yX25L4BFzedaQrQHyrPwbW2t8x1nyKX6G9YDhUZ4KWRcmHE3DxHJBU",
  "key16": "2VosWqSiRsEhfCfN1GcAyok5pcRzXXNgUJni6d376cCg8sHHDFkn5um6KfUmFhndqp7wXydiEq4UjpXMrLjomBrJ",
  "key17": "2r5wMLWB3RhW5SH84qxCMhaYNMNDFwT4ZRGW32W1hTXEzVZr5MNgtVoT3SsSTknhmtUwTvsszCMt4RKw8rXTZ3qC",
  "key18": "cMp7sFT5ecgw7dbgyxVgwtketNbCYmKaYLH8ZFmVeGLcRWa7Pj5gukhMYjnNZSjPoRode74Uxi6NheemPHmQG1z",
  "key19": "4XHWtCgd2wAX2kA7PHV83W3axHMrEckTTU1WvQcgwvgySKypqxC3ashNEFS2wbBxRiLy6VTHimej46Xo4zbwG3TW",
  "key20": "e1xJ5iMD5tBDFpd5BeiT6TFLM2eZCuQbQzYi4WafipNQVHY3GGASvoVMoKUw94HgpKdGStESNaUZR3JLkZAFcAs",
  "key21": "21f9qX15Zrf59aTM7qqqBA6a6VoHvY7HKdKL7ZJcXCYSqYqoyjy5b8EMTUhAibQQLbGaS5heM2jtLi7HYePmcbnJ",
  "key22": "55PQN1cpG7fpeHimpJc1CNvrzavTdnuQjW1vCw6eyS3C68MVKHxygcTBkoYfdX5jegMabc8evgGeXQt6spohLSL9",
  "key23": "WQ5H5NKRAhLQzz39zLfjH7DaHPxXYSGH1AnBzFeBgbsGA6APbkeqLExQgAMRGspXpJFUTguYJ66E1QsQvu44Mcm",
  "key24": "3fSC77WWkXk1EYKJGsYsTt2tuK4pybiUwMMe2c23K7uRk5RF17Yci51sUYsBjRTtN1P9YeeBuL31qC4dsd6dtqrd",
  "key25": "J9uPDyyTJqWPLEVuCW1DXRyQGCtZB9Df5brnvFjBLtYyfqfR7LnpVrtq2J3RRdb6ASfDowSbbnycKYx57A4tGeY",
  "key26": "2ga5jq39e1Q3fXZQjbbvYXRUXcNW1EPtPVmVZZiqoyPHcYjHk2gEAPabd62mcYuPaJZfp8zq5RpnukEMobrSeuJK",
  "key27": "3FgFfuXqgc2tA97tEwJ5U4ni35Vcypfe7rzhnAXdxrajPRdK18Frn1SnkP7VG7xTtF9ee2x3QkzAgCRx2gCYvsR3",
  "key28": "3Q96C6xzkhbAHoUYs65oM4THrmDqq2w1BBxY7owiMbjprhwseZgUzpGm5rvVHJCgUHdBqc48vwyXtYMNS7VKYDcZ",
  "key29": "vs96nXfXt1zzD9ZVbvg7588N3peYbaC3HM6T1u8JTJfXwXMxqXs7NxAK1N7gue9F7NdB5WeLonJhNo1QkS6FHNS",
  "key30": "3rAdSnijfygP2Wwf2a76uDuXe8bZ5HJRJ7Hudqk8vkjRpHxgAYuqNxBrCc6JPsFVeVYmScyCjeKkiXp6nFA2Ht7i",
  "key31": "5xzn4SPET31KVcJEuWXSURrwo3RNuuyNE7cfb8eF2wVk1zUSqjwg4Na6oh6RFpVj7pV3QrzYqHDMqh16KtdFHyTx",
  "key32": "3Z3CfEFjgJdMcwwkLwqQ3p3RdCrUibmbnP3cFVER8sexW4SwADkDKHFZpdk7siFc6e2Us6WrhNomXbpjBmu3kq4U",
  "key33": "2Fpdocm3BbLMcBKJeVRBXjf8ZazhtyzfauP92BsSxP1tZSQ4W9hDobZ6xHx4SVZFmkqyU582vfeQELCR7ytyDfdg",
  "key34": "3Hs6jBhg9VxNQoGyKZkhwYzECo9CP4mkFvQJqD66BNPscvFnft5CTXfFHuWihJb1FeXK9hTgTukMoavHCP94FdWA",
  "key35": "5Znod8e4yZLq53xJ1biGnpPVBtiAKtZ46uoBhDMKeHyL6WMwgBMRmGWSMdxnvbFKaUPsZym3eheusSW4LLRZaiKD",
  "key36": "CW53Hnm5SzkXwzutDx9WTtnaEcj6dZ6cMVyFKVaSZnPHQbyRT7uh2P7KiBjL2o2cDjy7KpibMSznWyzBCkMeHmB",
  "key37": "49cukqWQYq8fA2BpHJ6Kc3s2RKHnLGsZr53KCzHxVirkqxm7RAYMRuaHgFqu5LWiHnw7wP4Qz6mK9uYajx6XaKvt",
  "key38": "2s1WiZwzSwYreNbQTT5QKQ2o5PjV332TWEnuriaeVxuxBaMLeNo2JBWACcCWnQyF6X5uXTupGg8PbmNdqx263N8z"
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
