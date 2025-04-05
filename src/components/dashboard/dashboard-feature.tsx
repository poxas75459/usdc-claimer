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
    "2P1uU8b5MTgq4tNPKk4nC6ppRxywHCxNoXYSALtZMH58e7Z72Ua7aVvYrtudcgCyYJMZ8Rg94S197YtQNgGovPJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWv44YcyvM2qgTPj1zNoh9Py2qvUcFK8siH9iygQiXdUm17jhg1a9Wp1s9gBPeNX1taZnMsAeAjpNRxbsBLMvzf",
  "key1": "4Y2PPdNWUSeonk8qu3za4FjWZXmP9BJek4fz9zPxJNrGjwmDQva8aLCwC2jTm35b7MZ4Ac62bcfY67ScQDTzYuWv",
  "key2": "5vBAniibn29cp5hX1xBtNxPkZsUbQmnFZP5JGBNL7kobCgSF1zxnCwZGu9TBz4fk9wMgUBaNiY5svkXMLCERm7QD",
  "key3": "zakhot5qXzDLgjepqajMx43pfQ8jTMdQ65EobRzr7mSZhM2scHepCquyNff1FJfKzN2gY72utenDueeX1kdtvJm",
  "key4": "2mSuVnvC2A5k4pJ4DbJ6YZU47RDyM9pDGoi1yhE9WGu4uMp7o7P4fi2GrSiZWSB8G67gfe6TF9mpPkjZDw2cgErM",
  "key5": "3Ew7PqqqzgYPUn4tfQZvWKY8CWwrhsDx7cQ46r3bxBpDa9hKHWrt1NwQeAYFtVLXu3CThR4SAsCbc816do1XfPBX",
  "key6": "4X8rE86RW53HcHdKJMoZx1DXwfHovuuGgNJ4NCVcJnfE5C1skj7XSDgQnsGEi8WiSpVeNUJJSWXTcpUZz7z6SWKq",
  "key7": "4KiRrajYMvvUSeerGytXYPLwXZnpyN59uKXLHGxSGYR6iWT1sGPnvi54yZPRLpbi53QbZBzkCLHX5ZRXgWVLDZHh",
  "key8": "55qL65qP5ULVEKwnfNnshA5kGnP5pEgG7xGu5gbnfc8Tq6jp8yrLg1gYSgze4zgMqVfAQLM3RQKoRxmntsLqF9e3",
  "key9": "3zzSLrDHvXUcYakE7TTVC4DiHpjHhKLewLDf3DcT6tcTUVi3QJ1fdTFNVjAsyWFTR3N2yYNqyFJxKQuiCSNjfKss",
  "key10": "2iNjpPjwEKcMKFuDKybXXeL7wjL7a27Pf2xWVT4bMf4fLQvNDXTfrvJbMGKdf99pe4mksBPdd1uKopVytrFoKyzL",
  "key11": "3L1e65ZCCqM78ECF8uK63zz43u65fQ8HEQs86AofurqyX2bnk1aiS3SSvjYEspACoA5fJhc6yotZxfP78Yzw9ppS",
  "key12": "4WPfMjciBeY2ayXDP2vBcuYwSFgdK35LjehEaYzAJKCwYNaNYjmxioTwJUxZCpHzdevZy4WMPQW3vpgj2vetK2KL",
  "key13": "bgiVF8pb57Y2QFUv4VjTdtkmCACtQX73wgSyUUkumr6Hik9ozCzUTxH2Rw8nqErh7wrvDwM3yXKnTNpYjgMgLf5",
  "key14": "4sm5ypdJTNfhvyrMRjQTjMw4ZXBRrkHLsUPXzcxYywrS7rDoWDDp7S4AeuFtPRtEYM18oaYhZx42zwuBgsRRe1Mu",
  "key15": "3F8m5wdfqTURZ6m5kkq2UwpZfcpJmuAoyhSY3ufRoPjTYzdumc1AFMeN225jcSCktMx2ZcKbVFG2qPqLuvZzUr8d",
  "key16": "5L8fERhwjGcD1fMwHgruSs7aEqhoY3FT3Vus1skfGc9gWPAtWRPUGFzR5tz9pyHmemCuTLy3mg5GAytAFjzZAT1G",
  "key17": "4fhgoDCuVi5LXoGH4oaatxv3p3Xjk1kqNnkFg2jFAh2WDAn7i6yNdf7Yt35WrC3N9oZgH9epMNRkjdUWXL8e8kTY",
  "key18": "3bydxqNgsCMoH6WwWxihDDfFEwF3XqGvbdNmaBKdhpGJdjMWpQc6XvW8XzWjiC5fpEqxcf7QeX5TnwcWiRNHADFJ",
  "key19": "5vWs78mhnx2hrMgLJj8Y8ZXotzFgFqWw9kHWvF8MXvGrtVuddua8hGetF5U79QAEie7oVQsuYrxwa6ezjUzvk3pS",
  "key20": "63hCH3vEXQDKk87aFLojt2dqKvxRqsXWdzVqtKKugHp5juPyBfRMU4TQfhQFhkoETxLo2jWRUfWBpcPzQr2jZr21",
  "key21": "5N7kUBW4iH75x6HCN2JGFAHgUKQwQSJ95NXqEEZcW76JxZcSUzX5i6p3Vg5kY27cfBmWPgAxofhSJhUdWhZQTK8o",
  "key22": "5BSREsUbb7p6qPs42QxmDGG86sYzzpaUFcUkjU1CDnXypy8Hnwqrf6psdoH8jPW2eq17Lt2CcCUi9QjFcp7tWUKH",
  "key23": "QdZX39oEBWFLgEpwjjtFEwuKTLdEa9Mh41YMqiqta8LWXWEFnmU1DM2aJwzm5344ABnptBdPfSqYrHWuHtrtGtC",
  "key24": "3cgr2d3q7wi5zhTF2iztNy5PswLL8Yj7v2sbQw8kwT8wUsfe4smkb7EapCbk3w2TFq93AqFBqnQDcS31u3iFiAdd",
  "key25": "5FfyCSvwpQvr2oEksFPVFnkU6y3WGpp2HM5uXnSiL2Ws9PgfpDfVVRzJjvBRBPWnUoAS7ijx1ZdRmbNsRWE8KVFX",
  "key26": "43VjedipwY98aAYytdQpPSUszrdeCikGX1qAMuefiJ7ERvaN5vLhJQNrJxeZ7Q9ZdJGRj7CCju3BKnuHyDtBDY9N",
  "key27": "4WRLrWUMbiR8QiM6tqDBro9rBr4KFahEYzvvoatZoDe692Dsan5Lw31GS3iJTznwjQCUtqo5yfatWNQfNaNJG2gJ",
  "key28": "eAR94pps1w1VCZRqkkVnLGYCtXNVR7d8i2pzpN8m3N3JxdnwC6W6SdMCL4XZ1XDN7Vh2fqMa6rUthWbRqhJMapY",
  "key29": "5TnZArJuWhThhFrw4TfiiDY3AXsBAohNWJ5yR2Tha7Udksf286miKD9kckWLuWiSV7gNvps5Xu2fJxWidbHXJEox",
  "key30": "3ms6L9ejbs9yqPxTN8UvaFoQXE4nNje56QZiWaHX7qtXPtz5uAKi9AMpPo59fRSdeqQFB5aKrSY6QpjBpZGsZTqg",
  "key31": "5xTGDQbgBYPNL6JiizByP1YXgbCgkSc1gvHxadnScRhUSzvr4zaeRRAjGTTAToD5MwC9tdtr3VLxN5EGy4UVSRZG",
  "key32": "3c17MfAEkcwvEPdey9t8a57pQ1DL5jK24L4U12mD5rn78pJ6EVX7b71bT6rNU2XsNGRHi7z9t1goBQeS5995zPAg",
  "key33": "5eJrQdSS2h2VTyrttF2nVpg8JweRoJxVGoBcXRZTAwQmM4C8peKmAr9x8SWDaUKERKbCgPWwEYvaRvjeCjBjtLAW"
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
