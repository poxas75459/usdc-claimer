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
    "22LdifHPkbbCLso4kfEswT2gXDK2ahbLuGjVqQYpfxLHgpRuePYuEn8iQWhyxSFWxKqqLXNBskHn8u5kbmSfijHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYh4CjkUV1AaJTchqD2zbp9Yt18HszX1eH4im36jbcdJRmsASPMa1xwRSaPXPLbVGWYJbiW4bsytkp3PZBoKsK2",
  "key1": "2ayHhAr27Y4a1jD4NP4pRAGGqxXUCS4DekLnge1rYUw4J2vv9XBq4rh1t3BnXB7XEgyji4UKo2hGYWigq82UboiS",
  "key2": "fdFbE94S4cFDi3RgXDEeGWgv7NQNzf7o5S8sJLVUothsLQe86Q5TZyJfZLD4njWCx3v1GtbsQWZdMAAJuKjzWPY",
  "key3": "4LRoEnCRKXzDpBkDj3b3Dx46T4em4LNoPZbe8zayvktVCyFRyJuEBVcQPn8qKTumdQV3mSaUhyKeWwMVX8drF7G",
  "key4": "2o5u3qAiuVXV1tiwzyDVL52Y6uEbvU182NA4Kq6BKDbhfm4S2nLFCWTJ8NyX5YR15xB6N6MhFcnzfX8eh7STiDwW",
  "key5": "4Jud7dSmJsWTiHkWE8t7kaRvNeAdQoJRxu3bNF2QcgsSwxz8WMfWdzLtNnp6XPBt71cCHTbqJaHSK2TGmhgpvMKg",
  "key6": "43wvfENuh3nfbzNszrfcCP5vCLWtiU6zty7vuxBC58TAqZsYkJMEMXdcZbM9ZSDBcnrKspaYaRhM97vzq3sHe76j",
  "key7": "2rzEPuurT7HPFw893rYeXcviktE7HjTCwSewbhVbJhSTTUWHczm6xBgnyS3RByydkvHHVDZ47mDMwkcNGfuZNTrq",
  "key8": "5Pqf1Gsa3gKMWuTEUs6emCuUwVzFMwDMVjDdXGGYoD3TPnx8CbbhRQWSNW2otaU4QyDx1wRB3a4ga78LL4MhnBaY",
  "key9": "naUR7mnHWYQHgu8iq8wZXLm5RHwMuM7VxGD9ktpEzBHtWdCqQp8txRcDRRWY6D17svp4N89twqdhq5E2zeJ28TS",
  "key10": "3E54JPZsMPyVMd61qxc18rm3yJmegjcDaoDaRmpNr4rZd4gDWWNfehhubhbvZ6WsF7NwkzTVCd672X8eAbZ3octq",
  "key11": "5mF5fiXFCxrWwG6gx9o8uzgHLvmRmRBV1xd2TKzUyaX8ZEE9XiW2F7QQtSZpeV4yumCAJs2ZkjZpR8kF5myboYqN",
  "key12": "HNCUhkoQxBA8i9u79se5jqecwwUp1G33WGrjoVisNpruydW5S22v4BqWDctZsowWJtX8xo46MVN1pjmgcayvyTn",
  "key13": "5YQmQry4yqVCvQu9UNYJKmzV3PsFtRfLmweno71pmcrcTdp1GeVtsgtjwgBX9a9PWhr5aiUgicFLQDnDQREf1Pv7",
  "key14": "3aJQmc4f3VYBKCQyKjiFKkWwDUY1vXoBXGwTJSGaWcupZYgriaH4D2hrzoTFZaJfofXBKFfNb1JtddJU2Hz6Lqh1",
  "key15": "zA9xz4FJgcYXxQLKtbgc6chLLWq84LVBCNXkPKdiufsqtV4dnvXeWSsiRXp3ZJoMbppz7zkDQU8UmAN8KTmSHrY",
  "key16": "5vSi8AKJkA8PxTLM4EfEUWtRBtuc1TSPVG1YGZacYsAvjgodzjFRDuqZR37j9UcbwqfHeqpcGZY7zpvWevRAUvuM",
  "key17": "3ajUjYskiXJbhCeE98Vhc6JqTHkHhqZM3gPH539FMCHa35b74heW1fjVYhD7kNkWXaHYMmzpUoeCQGsthN8YLhpy",
  "key18": "4DN46LbtVqch6RrEoZiizR2pStAjZKkrLD4AV999g9amSGFuR1PXMFxz4VeygbHdNBYWHD5hCtHkSon3etHjH2j8",
  "key19": "3ujpZLN8jrtBBpSd7H5CDs6tSWDqFLyk8vx38fC7n4xQAPMNBsEfp61KcpHR4dosRAzLkoJjcYGY65JSbVKFGCjB",
  "key20": "51oJnNmJm2uuC9h3qp5TPihtUds9sMGeTLTFTBuR9HG313onxkFmdvHvgs9fo1z5CfThTi2J3Y9L9VmidM7ZRyEG",
  "key21": "5offigkzdGePSDr7YgU2NkiR8jtuZn9Xpht6sHRjdSyyfPecpRpgmUdhe4vxTvnpnasFekyWqaAqh4zwTcc1vxLX",
  "key22": "2ur8VpChhbd8xKKwaaiPzYTxp8fHKiQABFgCqGhyPyT448eZWmEc5XD5WkQ8awYndt4ABTfLFMC4v2PFtXZ3jifT",
  "key23": "4FiUA7w5cE86RASLsBrhL2EsFVVXpuPZ5fuGiHPTNTkapZdeC5jM7xK5voXN6W6TgEVHPMhZFopwEueAxigartU8",
  "key24": "3nA5DYTuEx5tcur1AEs1Hk9gg2Z8CQabT8HAVhMfcCZRwRbwhP1Aj1D5nXx6hi3qNALgRqSpELKZWXf6XQtv9qU1",
  "key25": "3Ru7c7HVGit7PgypjM1xnh62XfW3Aj9xh2ZdtjUnwA2xRqfiPTg3fvhDccmnGQxuUeSdmRkRwV2XrzpNzSbjNrP8",
  "key26": "5vt6ZpBBzaCdfoUVXtMSy41VdqVNn3eudBat8RAf3jUHTWzjVoKrdctXg221RejUZ21YBcFd5Xj5NWrz42e5HUMv",
  "key27": "28RwbA5ixnmXKa82xAWsvDtgwa4ehtkf5X93GBePJsK15dqrwP9PxDpJzaLpZvTX5uePjSefouxmQJtUrYf38vcJ",
  "key28": "26oppzTYDyhes6LjqfbDd6Sjb9WDNV3cj8jCBPvYfaP5NkWhWNCVxkeMhNPSVB5JdiBx7aEGmH1rG1yXNHw3afKf",
  "key29": "5XoMD4N1stCtRJqTWLE4hb8x8SVHxnHRCkCzDbePDQ8uG4Mjx1hEYJNp7MRKzVmsbqUAezNk5uYXgE9PYFru5vLJ",
  "key30": "2Rrq22xApvey9JQ2AdabHaMxv7HHkbVRZ1x3bJYbQSzWKnpTEBezsLVDHmF2KPNs7KN4YzKjUb2pyDXvXzQriadQ",
  "key31": "2W8SQJpQpzc7FphcmHQSzsmHcuWn2kKEmEVkvw7LW34PFSBFRNetag7HfSQ3bcZaPHVMrsqr2fsw8W6GnHQT1eRF",
  "key32": "DrVsQvcLbQdBt1gqQoWLuEwByuzxytAvxCWCfHtB4rdWx4KKz6woK4sJPzKpWufPcz4ke2EuqbCvXUnUtneC3yu",
  "key33": "2qeJsnt8uGfiGuBtfzNYfyYWcAZh6yNNub5GEua88d1r9zmsi9apMfP1xSaSEK8E7UpSgzshXNXzmnSsD664Zkd5",
  "key34": "23dpYsmJFv1habBueXfto2kqKrChttbM3vrv1ezmvUaefy2odMRKaBstHopLhyx296czkM8uEkFZ8YzmaeCdpojp",
  "key35": "Xy3JX59d9dEi3omFFJVPMLNLvEazwhgmCjAip324C1xTqmvjpCrJDR11iZVtVMMfoGmTik5eUbfvU9q2wmvKiEF"
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
