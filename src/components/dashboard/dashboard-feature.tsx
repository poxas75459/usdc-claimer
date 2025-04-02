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
    "5KuEXNMavPJvjpt3NuAvvXftRzDozLXHzz5KkxxuRQdi9rbXipu7sKCAUHTZikHfFyn19RCkwSDGLN6irWQNXujk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrSebGwrDUQfBEVUaT7Y6eAAjvQ8UjAgjsjTWZy2zVHLbDauZ3eKQB6EwceioEW58ovW8Q7y8NEnJ2o33Y7aJKU",
  "key1": "5Q5nf4AngrUwaudU4VCed4Mm7a9qW4dqZRDUPDkdujebrqCMyL6HnU1AhdEPiHnKkWxiSAmbJZoRjwvVzv5xwzAo",
  "key2": "28BwoKWkFZBrW5Emfi5z6VWxw3TmvFw6wXU2dXZtfjKN6uBbRQBTTBFcPy8ZEjYLAPoc4hR66Vyb6J1BDwX1JYXR",
  "key3": "4Qz5gdGry5rpyVeFdMHJEkv2o63dCHeiLevuJSTwC9cSpb4fLWNVW88MA8yh7pvRVJGXAYWk59B1Zm18xnobxBQg",
  "key4": "23f8CyVoHgXHDuUwkGLt9x57yDDT6rhGQAkmfhaQXRATEd2BSAhWMsadCbhe3Cvzkq16moo8gmCAbG5wmLY1ZkHi",
  "key5": "2oks5x3WrDBAJFL5yj4zAY7sAupC5BPXFpenuCCUA4DJTaDpnXSnSAQkoFxt2KhB83VGwoqgvpKtaARwJnDWsbkG",
  "key6": "S6HYQce4urvQ6R31H2iXgs6HcLrPXidkjmejVVuDRPXKFn43KwWiJRTd1DpNxqJNds6Ugj3XhL7QfbByyJsFiPW",
  "key7": "fJCsnhnD6r5LQCEzfFzQNHbdbvkrcZMgncS6QbcSzDY3Aen38oCN2DAm1o5VuFjeihjVAYLbQGvLM8CNTYfrq41",
  "key8": "2vLn6WWvmKyfH2KQSG8L7MuAvHnVWWgBRcbDe3ygEXK5hv6HUnmQs8dbjKVY1GQHdQWXxxdZwcxBjqn3ZJaX7451",
  "key9": "33C3yRsNdyC7U7DWpRga2KRjuSa6VXeGw5NMgVaQ4Eea4kkubvkVCnT6BFPJKN4JC9Yj6ccZSDbNPAEz7KGZiivE",
  "key10": "4xrksCzvqJp5b1U5a5sdWk1XAXokErek7Pwf5cLWCno2fRE2PsmEHb3JrCKxfmGMgZWF55N8MtmQfHmY9WsCbnu",
  "key11": "cR7RXVAcUBdq1tVz69N6BAmKs7WtJ77wvAuyTvgtsUSVdbw6CQ4ec5aX7psp68YkESBY3Rk3Qycak7PrTjy3PBq",
  "key12": "2YuDUZKZmUWSb5d9G6KqwkWpTMnS2KJBfmNUs25mGVhpdu5RVARvPLjEiwhR7ze6NV91jEJ5ZXd8gbKPMGKSH78m",
  "key13": "FGzkfdhS6hF6hmThG4VLbZwWPMvtET17dv43LDqJ9YZ7asd2rx5nL2mNx5XaNHWSmgAuyBbUE4z4bgxur3SXJoP",
  "key14": "5ys2rMamYoYWMkMULAKyxBG4JD84hxCZrfumaXErzqLH9nTEx2W1cyZgKEYcYD99ppPcHPGUasssjubbVdFeRZ4N",
  "key15": "KcQk9CSjBf8picZtMZw2sGjBJg1thBKhJtbFv4DEtCwccWQmHXjp6smBx8MNe4WveAnwvjQKUJbUptHw9qf6nEM",
  "key16": "4MehCusp2ToLrdame8Dk1wjsJoqdpAjx2sz6tVWwCb5yavsiTGA9HDoQ8jMHcD2BEMxido2Jr6AtvYg74bzj4i4y",
  "key17": "3Qi3ktHFHLQCXEwY7PBuwv44jeygH73tMDAxEorJT51qeMgsPqJxXZ38rP4qceTiyuymYtKQL9SEjiP4qY2JV62Y",
  "key18": "4ADQWiczkCq1jKrVZ7iEEmDFcR464zMQQZPQyHT53iLNSxZ2DkB6zH7DVmhNZbZ1XGoDD2oiBJ4MxfmedDpEWj7X",
  "key19": "2y4SqY2vQKQZVk4DueYSVvPqXfpEXZPRxaoVmWjsuPTeVSdTYptYfuJyAJwfQX7YtazhSomEfef51Fc9QWELXnfM",
  "key20": "3Pt6C351jqmWsu6b8F1n13fzLHv48yoR93B2snLMSJ2hVwbRcMa3kNwhunU8SVY3gq1zQAJsHUTBsmNsqcyPJ8tX",
  "key21": "57GJ9JaT468zcM73UunEwQeLrTfxohBuHQr7nKD6vJbqmsQBAnM6N7yxbPZ4AD924V2wWEWeFCDRkhPvCT3Jwzkd",
  "key22": "2bquoF9dKBynTXiKiXuqCJHDHXXqNKzGty6XkqakiuZ56M22Ckj754J215gT978TnEQtQ2oogCYZWixbXVT5oJrc",
  "key23": "2KD68hfZpg5jUFAqgbRTTLFHbhjtHoCHbXrNUsq4N5Yp2bsMjKWLHgGpcqFT6utXoekuPXe1jD6X6MkNwRK6oaf7",
  "key24": "27Tr9oDVf5mMzJJGF6HQHUM2uEGEhJL3gk3oAhA9dZN2r6WLzj7Lg2oSYAqYt4eoQBs2dKkrnnTUM2vw7cYX5NYR",
  "key25": "3HrwTffLSdf5tmfZLQ1ShFBQhGPrLkYiu9jL6EeV64xaRgSVkobMBqECDvBmwqZcaodJEYXfmioy7Sj3CbKsoCHA",
  "key26": "oqGWuXHqymV44MU68eScsqnE3Eu68ere2Cyyvrv4CsaVfNLyDV9bbffRUM7n65XznCHVDtAvjozhjC51aX5b5uK",
  "key27": "2mKQifsTMb6Wj9HcPBYU7eCe1xYrxJcAYtxUAk53ercTCMR2K1huCwrdYytLw27ZkXSsDcCZVVtk2cG4VRsYyKhm",
  "key28": "rAyVB2j5FttP8sA97CG7N9T3L92be2CmtC5y4rCW5naK5ETmBipyUHyvZAwKLiVrMvnFkiQ7gxMrGaLMptmPnoe",
  "key29": "5YyQ8QVonybdMqNZuKLH3B63YRSkskc8Zj3A1vSKnjWMWaq4ALotmDmyGrzooMFBv8y54g8QwZvYz4XuVw5bgpsQ",
  "key30": "3HTzvSycK5rCVytUGQ6BRJjKKzAPPNMBcaYTu4EwzqCAXXxz96778vrFFGXZr35D4LUPGtYHvtGY9ksCY8jg1qnn",
  "key31": "47SdyoNLyDwt6yytJBvHPHkSXYzAJfQMyx7zqnFMrwE1GWLC6k63Pm5Cqeu2v9s8rBmFVnTwrqsNayanf8esN725",
  "key32": "2Nb2UiPJp5ngD6yFMACd9rKt3PCP2gJx18YQBUbENGjaEPJZi8rQHMvXD17SyoF4t4DJZ68dri8yePDyTFuhj6MU",
  "key33": "4tcxbCU3oYmuZTaUwjQGBhFfoasweFP7885iyTAM5VMaZ2DthwcBAsgGJ5jND3BCKYwJMtNrhhyy1VrEP7u3jeKV",
  "key34": "56WYM5ckkiNNL7Cb7q3bGMLKt6RtUG1f9ek9snhNp9anheptA21LmDbf4jyc8tPBVVyi6gWAGFQsywCGtkwV4b9s",
  "key35": "5C8FMjeaAh5VgoPrF84rrC5whuLhWjwN9ekzUkZssWAFib51oyUzigzFoJm8sTd1xf4gU18jev65hydiRGjeZ7nH",
  "key36": "TRhU8DpkBhfcf5dGz2gtHg2ubpfMQ5p9QgTTXbGJCr48oWfzhxRFrU7nBcNAVVtGfXtrisyCmurZqEvjYXcqzsG",
  "key37": "2Wzs8nSDQsPBQyzLWsPRsfsKecDzfJzUbAQsAyTXt9mKrpWqNwJtHURvQunScbTBmME71zWTSVVmz1gHn2pPmwKm",
  "key38": "5FffxvQr5EPEmoNM2xAX3cMVoY8yRVHDjGzZ6EMe7Dv9zaDx6SBTBid9FUSYJUwQFPVHmBRjzKLViXqXCXLeocPc",
  "key39": "3WjjTPhmmJufAsJWoHbbAf5mrA7rgP6Vn3pFzazCZdNY5npsc5jpVLjA8hzYRHc28noyd5ThEPoLJuFD6fXCYfAT",
  "key40": "pwdhpmJnpvFP1EqRqjeu9CUc82rU8nVovwNHKjBWTLf4GWctjncpuwRPtybhWKq7AYa8PDfcrWjwfrGCV3agZcc",
  "key41": "5yAHSnJdRear9Wef31p1V8mkVq3TAcKQT65gA5bCbHypPwqHYm69RyU9rNSToJUEZWgcPm9q1AZ6DpRr5AdUGmsu",
  "key42": "4EeW75uePveuxEM2nAmPqieWBQAqZdWekW9vszmpeJj3oaZuFRHsC9zTf3U8YM8XmPNpFPvtJFcJnnz7VgzAckSs"
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
