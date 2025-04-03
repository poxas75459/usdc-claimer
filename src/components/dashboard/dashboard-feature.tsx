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
    "5ja7WNw2iSYZZr45j7B3deTGSwPDo6PTYh6i3Zd4EEJXp9qsTaUzUctDvYzMZ9tsCX3cfA63nx8dAg1gcnARYb2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2SHpFKMTB7jXP7VNFXDRx2UmyJa7jz18XpNfMW9g8LBhJMT4dum8PchbamA2WkbW8ekRFbtvpd8Gm4ErMR1P6o",
  "key1": "3jDDfThWKqdoaZ7NM9TFkEgaGGYU97UuTEPznqEH9Xvmk1eaHqGHGsNvUyMbKFPxQDBiz6HG84v3ZXtJye6iKUTX",
  "key2": "5zD14WwCK7Z9pDu6P5YdyPnXYRbZ6SbKdRk9Rjco77DX22bHVdiHazuQkjhEJBEJHv8KNKYX3r3tu8Kan9rACg8H",
  "key3": "Vj9amuaAYcxCepY4hmSXDVVHBwEkNHK4ymJRTWzyfLXFP9m8HWqeq15kdp5XXnYxhDB9rFZfsEfzNZQZFgTHfRW",
  "key4": "vdX8itr2YYfLExjW5wqMpPQgjgayxQSNhsCUZvzHWNL5QG2cgJbxobmthBVt4Ssok8pjW6j3XJcNAV3CfMrfJo1",
  "key5": "4bEHC5Fo4toKftPsQQxaGX3NWRjgEP3PZQQkqHuP7ZiTcdFn7Sqdbc8EMGLThghYryAi9fhSGKDNLpMKBnztZLWg",
  "key6": "3RWDcrSBztsNfi4ptgKg4mGKafUEm41BgpnFf8nNr81DoGNh7mBAd9dQtkn6vX8dYSZRjxojhixejgK4GE9BezmJ",
  "key7": "4rg1pyXgPiibUW9QEFAgdydzGSwHckzbaeLsop9v1t1sj1NVZ6rJhVuLpJWwL1YP3t6RGV62iB2SKSsmmvFXdRC1",
  "key8": "Vb5vWdfFt3HF6rKSkBrdXvQYdVSRsrV5N5aScjk4gGp7SCgaiKEUeYXsp5jdhH9n2BSxTE2nDueiNhUVvosiM4U",
  "key9": "2ornCoaTGvGACxynyekVozgLZpoQ7M1k518YNkkb8unv86BrY2ecsPDSmV4R325Stnru61NGg5SNTXRK97MmCRNz",
  "key10": "ygvubiw8LkQDhChcvz7UVMQnXAPP9AgX6WBV21Vd2M1oTmjgj9VBaVAEisRG1jACtZXCUJwQS5dk1vUDmUXPYtJ",
  "key11": "26yt2gYWCVfr5ousghbDmQaJPw9A1scLGX3KjBzSochXMDEVtKYMeTJYzwVKuDxH3ztXWDyeJYKmAQRYpoerqd5n",
  "key12": "4gT3EnwuggXYBaTjPvtguHgyQJFw19A4yTJpybdZA3kKvbrKbWjo93snYDwzQcy5ubDLcgiJe2y9sUdyt8vuMEYd",
  "key13": "2zGr6KJofM885YnHHiMnd4AaGFoouS23ULobhgEXkhq48sMoZwAbcAd3GXV5rxG94c8Q9vBUnjRX9NrqJRNwoQr3",
  "key14": "44G9ZCwff8aCndXAjgb3yAk4iPdgXFKq6DfLGFRTTLC5zavvjypXFEX9zUM4ABhF9bn1BnqJRMwRvsucYEsb3WCP",
  "key15": "5KqGVPL2EPT6Uh9XFoGWg63DbMAcwrU97JLuzAJxvT18o9fkT8sPCbak7RqzrqvigMDn3meb3KJQ97PivhnLpgYi",
  "key16": "4QX7j1EoydxkEiPS3gqrrGQ6K4enBmj7xokai2GdL4i5eqfNAmjBSt1DDcYqhkLeZGs2tv1vRPovtdDCRVa4NShe",
  "key17": "2fCUbtZ7RE3f52YTPyoEdAydZmJxeQvGZKfTNrukVzhyX4xnG15WMKW8qCpQhHmEPdU4A66Q38p5uYXrdiAjofTq",
  "key18": "5PY9CaTUzZxGSdqN33wxSgsY3BYjLY5azm4S13b2L5cYv5txNJDsKZnAhiGh83ek9NUcL3iRyHEarkfMVwCpP5a4",
  "key19": "5ptPA6St2e3WpAW9aodSzB5uMibWgchHquDYRkaJsPtfxzSd5pWjvvkWQtm7aaK9Vw9aByysYDUEuhMn3tqoF1Qb",
  "key20": "2GgYqsLB1iogvTo7KFsGcY5E8VGXn8rYM5L3CGhA6tmLKtJrA5kerJTP8jVpaokKrAV3hmgcKF3oruMgi8FcAfrS",
  "key21": "4Htjb5tQMx2wvh6ckiqfGmzhzy8bnz7zoE2hbSDKZ2q2uBvmjaMVBkfTtuxt1XD9tiNde2MVKvBncYzw1FvUr1WN",
  "key22": "2PvLExXsjfoghi49NcbRKg6fw47r1AihdFbvj9WmGoFuNis6xpZbuEypCqgjEQL6dZ7b1dBYaP488PpQfJY8waWF",
  "key23": "5vtSaFxSdCUoUbU4Div8hV5fd8QBmtoGgfbHieLutdww9md1QL4Jp4sLVosVxhZzoMGQLKsk5xK1qnWHYDt8FyyY",
  "key24": "2Cd4MQgRdZrWcwqggst99nuox74XQj6VwM4JzBM6qv3m82cb98DVqDm1RYnpZDgz6EeSVHqfsojKDYsfkiEXWXs8",
  "key25": "Ci42zJePiZuwxhNm8PxnNPo66qNW58p4U9abJe2z7VfiHaepkevXCf3Co5Yyq395b31Po6eu8gBUZESNKmQB8Ah",
  "key26": "PjPDvN9hsVYDtn7MYay12Mi7xagsJ27AA8Vh4wRcieL9CNss1fytu92yPDYsP1YZrukZZMc8uSuHChTBQA3vXPe",
  "key27": "4gXpkZnpXgr8gKfYx15iRMcmLn8VGyWWfSbnfacbnmrWRJd7efrgA2AcPkApb6hUTSZpAdzAct5C1kS2DeDc9LYY"
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
