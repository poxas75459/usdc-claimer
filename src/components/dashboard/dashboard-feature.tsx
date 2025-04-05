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
    "6tHe2TazRysBZGYHqqgegMNJ8sDBDn36R7PyYHFqte7E1xuFRHbvL1sR45VLoN629G5REoVKeRNBDEsoDqBgdwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YnVECom3g5eFDqpi8tN8d52JD8kx9Pijuor7TMg8zjBWizEgJiU1rKa4jRmRQzCuy7od4PzueJ8PEQ7S8nQosJ",
  "key1": "5etpYW4TLMh1c4rBeNVeJasRyyRQz7VHVYihBpD7dkQPA9iHes5MFijyCeUZbXEUK1AsoZ7qRMk392HRWtEt2dWU",
  "key2": "5V2WwoDC6HE68TX7VGEERnTVXjTNK9Nhb7i2Q9Q4DiXwdiXdjbH5v9Z8SKsHcXcFRYVAXARNkNNS5vnNfnyocAeS",
  "key3": "cRWaonVq91gY5HcyhjegqZPvMp75gLJSWLG3nTh3rcd7EHMJgw8BZ8hZ7Vo8XssPanhtwSMMwGvYQk538rpAXys",
  "key4": "655XjdzYEqjp1QDpbxPEh2zQpjjFXNWRNzXLNTQBd77qXexuGURuUAcke5c7cUmoqHmF4CCMbkX9kMauRS62nwt2",
  "key5": "2J42F1doY8ySJLmEWMhokHAMBCR5b6qomqDVYEyFJGrXiQDsQMT3ekgjn5XF7iXhgHbfwXaZCRoBQzm5yyN24Sfk",
  "key6": "5Q72b2nZremUKMJE6FJoHocMv3pBYV1HLvxxz4L8vZ6bm8QMaaXDVdgXFz7B5iM3CA8z42ShTvf3aC2pVf1gRjSZ",
  "key7": "5uKc7QJ1xAgMNM37rWzLG27N7P7eN76d7WtnDXSoNbWpLGtnFXzfuk42SDfQGDrsbpeKAL7WrS2HsQMnnvKGEA1z",
  "key8": "571HTKZ3BTA1hEryHJweSQqAJK299f3DVAzDaTVL6qRrHjeUymvk2Gkg2YLypWHvG21QfGbCZYJKvxnftyGHbtuG",
  "key9": "63Gjd1bSCfnYbh9LbuY5Lb2bzDP93i3eHhbSkN45EuJ8W1cYsa8tVLLBHnkk2WhopDcaA5uPxnDzKPNCPZqDZybV",
  "key10": "3va71h4XVdhRUCD1cxZUV4aF4MzvhC2L3r4eScrMeqVYpAvcDh9eD4ku5zUCKh3dTVkchyif2arK2zjkNHvwspSF",
  "key11": "5LFEL5a8PMvTKqMTRpyi8GHVbWwHKKMw7oYzSvZ49gzvBGMLv2b8nqLkWTfLHnxkTpg3WeGfoTupHVoXE2PVoNYk",
  "key12": "24e73P5sf9TvwtTXyUtGjA3ZnhEq4LrnHgEJYyAST2v4zVLTNq3Z2HsezSnKRkdNENtL8pAiETUtUbNcLAxeSNEk",
  "key13": "2TXeGEqv5UQiKLvfZR5YvDzLCer5nBhAnXbRQfSo4n5Q2D5QiQV3ncHtdafTikBnuhSQZb8RLHt5DNAU29NMBfNM",
  "key14": "3kYKXZdA17Fa47PdP4QhdRq9NwkkNozcVBf79mX7aLnTfUdf6CWoJg2PW7JHrpJDz4QSgPDGTQaUiBoQyB36fkQz",
  "key15": "2hxnydzpAU43vfz3mMkTb88jTn9VhG9EPJpkX69Gkco2EpScXqn9u5XmqqbqcsUvn9yCmAghh7s2nUBLQz1v81Cm",
  "key16": "5AVBHJVudVHBX4DdH9w2JQdBDyPKbneXh9jmP3tRih9UXUFueUoLhoH7Snem1exLsmewmC1mReSySqqraRfSh7Cq",
  "key17": "4yEE6Td2n35ngCPFSNikg1qKm8uKLASYNPmynDWXGQPCcsdgLksDGYZk7Xnbrep4eirvutEn4rp2chqsh9xx7c4y",
  "key18": "4zjNfN87tavCoMz2NygEwxKUtE7jGfwpDGtU2W44cix9Z7p3e5f259AFuhERZKYdnNUttWbKdqeKLT9yK3ve4n3z",
  "key19": "3DHSKxPTv97L8p8pB6sKp4ZS6deZaLioq9xaTwqXf6Um1YE9QsBCiu3st9jPYwmKwhwgRwT7pRmD9aAnNLhFLAdq",
  "key20": "4JjLkV7TfRj1rtuGsaHSw9gdZs6iZzjPx8XoUidM1cV1juUfaReAt2VfVJegZdJvj2bCpW93dPPk3FzR3VdnAR2q",
  "key21": "3Pf7sk37LdfnuVYJthtHMzVUYEM5D5QqKXEjFdXe3pHayvfRR2F9AYvDCKxZuXcpDtsP5JVVksz8VPXN6ayXEQ7d",
  "key22": "QapDdjV3JR5DGqpHSAV6jTaxHDLqC8ftbkikSPd2xyxMYkQkzZt41ZcbfTuS8ihChGLrx58mccezoyaWMGmcYA7",
  "key23": "5v3gJxCVPQzhiGCnvVEJ5d4D56CcvcJ2YcC3HgtDSFCZHHcVj5fS87HNDVKn2Wfu97bh22bugFZKkgn6TPafUpmr",
  "key24": "5sVe8Vezr9yU6A2asce574pUSqvfCFn1cQv9HKfuUNpqCfUEbZXCYLZPhSg9FSdTetE7vuh5dUy439qfGBx9x9gU",
  "key25": "cF9UXPVD6rmEcs2i88k1RhHqP4QvaxMbkHYeCzJavJ7RStzszZ7zXPLJdmKg7HGhNTjdhsz8GpqyUYGPV8WPCWK",
  "key26": "4NGKC7EX88gN2RKRAreXY7KejBGkiKfwaCpXzfEEC2cmts48WnLFJYdbEeRXSja7RcoeeTxe8noeg6JEYHoMjMW3",
  "key27": "Ag5Mu6XKbsJYSZdDbJ6PQae6JfgAff2unkqKWqpSEbH9QL3mSqea3Y6Yg1TrXuS2ahcqJW52G5fDEjEaYFGZvVk",
  "key28": "4FUX3AubvpxABsk6Ra1Udu6KX2m63QwiwCV2SuTuVea5qe4xZ7nbF3yf7txpgLkU9tgaRidZUjsPRUfYvAxmjHod",
  "key29": "4zm26ovZHFufAkh9oCjnQRvLrF87hjB8tdh1A8ubjr9d8VY4GcusDC1Vdh1hnBMZSfG6cCNejod8pDwrjT2CG2Gu",
  "key30": "49pyX2ZcjAUMN46goCGWZ72NkJZQenzdLyru1LFZrdyHafSQ5frsgBXqoXFTPqjrYCymbZYLPzzYEBmPxVAym77U",
  "key31": "2xf8z5F7oC2rKNGD9JSwyGp1cz3eVh9s4Up9uxttj3wvdoDd8RFoGbBxL56nZRE94Z456cpH6Em2evVdY7my97Bg",
  "key32": "4GobDVL4RqSNgQ6n3ub99z4Bdo4wtgHj2v1CVrJwDu2PuaG59ea81Nj1QWWU98fMRFT2UuY1nNnjD7ujMVBWzeMu",
  "key33": "3GYzvRWGqkXp7zZAHCwHZUeWjJySmJtAy4EhQBAdkPmDWnEM2BxYxAjPTJfdMvF4mFpNQtdZvJqNto5zsQBzMSmX",
  "key34": "zidrEtHAhcQgcGvyh35EVoHXRNR3CRgo1YXq1eUtKzrrqqHzncWQB2ciMWRNQgRjSxrwhQ8PagANzrigprV6hJH",
  "key35": "jGhaxDYpjiK6kvijoxCTE9DUtrhGwhdaDHkysZjKXZ1cz4QNuGy2CCygD9fytopcPJq8ezobDGgPT8g13RyPQKv",
  "key36": "4uFmBkEAPrTx7gEyHhmAKebbK8Qr6TwcVzeZUfnAPHhDpHiMsVWbAdJfZw3oZ6ycEg2LouHSeKK84ZPgAvQo8zeS",
  "key37": "349XmFwbGjoVsZMbvcznLWsJLhuojoGhodQ5NkB4S7WMKTQKQziGdVmHSyM1nA9wA1N2pxG8hyP8UNUiLvjtpBSN",
  "key38": "m2NLwUrkpkkPNVAXzWbiJtLu2dTShGeWs2CXARVoTBG9q2m3zUTazN6JhWMNd13i3F2Xw5mEUqX1kg5t7USsVnk"
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
