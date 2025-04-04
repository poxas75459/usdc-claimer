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
    "Pirw2DESz7m1RPDYJ9XDk3tdzadLYpzvHJisKzdVSsKTFmiLpoaxtvqxvktG9Jiqo9Dkssj978umfHuBz9hVpdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4WvuGKPf8Ey6vE8mT6TEVS72S628zSooPh3zgQs2Af3G28L5dtko6aALVPAVeNPfCx8R7tPAbqd4jXjewk6UmC",
  "key1": "52rweHctQVkXNcVMWbC1kkNfKDWFPztG9ZbQxczqvV9hYeyuNJEZk4two531njrpXyDJNLky5WRkQq6kY82nkPsZ",
  "key2": "3Ld19CbS5fbNf1Mns31QHpWzCTiQ3Jc29EusrvRM25BemcyoQMy2hg9AaCY4AGqxUDDXWFJ3o7rVDJguNGp8UMbt",
  "key3": "YYfvaGXxfiFuebuNQLPHufgDwjqhiu1tNoFJiEpFhzdGWgUK4rNfJTMeMcJwgBDuBCe523cCYgBMfaLdHUZme1t",
  "key4": "3XxyVTHmSHg6SxPBJMWsr8V3p43qxpjadMEJYS2W9tMfP1qygDffHuPnTV9hqZ7gNQzSmSVhp7jgoWGLqHKuTTFf",
  "key5": "54i9Gg1xvJgneMX88cHkkaUEuv8NMC3cyQPh5oEp9qZsEHgYxgWqnbdNRRn7w6VdiBdESmACVhsmnFzJgYfsDz4F",
  "key6": "4wNJW6EFV5tUKFAEzAP63jk7UMMVmGxRpYBj4DLkvMqTZvj7omMu2jJmpL4SP9884kB1839ZLUys6hKRtcEUEHZQ",
  "key7": "29SXE7xsEz8QBzguQEayXu9xWWjoTrTrwmGdXat9HpDW7jG8E36RacJRsix5jeNnkNZfiFourkz4HuYtczP6hYDJ",
  "key8": "4ujkiZcuFjTrckMjYnoy8UfJBPQvZcSPMjXgsDPkpuibfN6o14wprCihbNaybDFMdJHQKhEV63dxHvSxyNSMftqH",
  "key9": "WUoKRc4Cmtgd8YDSH3zUHwWfXawv6zogbx4zX7HhUdkmr7qDVcWKVoWY6ns2GhfM6A8w2mrD11nfMGG7KvbiDSc",
  "key10": "xnhkVntYPMMWKmtekDymS4UzcGfyQwQ3x1biqv3aCUFHfRu26koBTSvgaXp6Hkjc5Wm9r8TFvwDrhwsYUPgUGZU",
  "key11": "5RAQ3x9xXbrxpRvTxCfeGaieti9o7bKAwcAFCVUYazM5LVVZsHJjtXmRCMenP4zK7jGkvjNwkD6hFchkVSjJ5jz",
  "key12": "EvRSo6BHtbz2TjhUqeM2MxPaSgneDfUMnurNctJxMaBYQgtKyeAjK38LMFSrjWugTccjcamfqJmbijzW7Kq6YcM",
  "key13": "5ayttev87zJKfP3dg77mmskxTxcsVippX8iaCD3qJfTpNUgfn8KE1p7cUD3hsX2BRnkSyPji8HVLjTVsKEGv3cMp",
  "key14": "63XKxmtvLZ1nZ9bzXHU7RnDPj1iyyZaS5Jh4qywxrJDXHpziaSzbLiB3ZMELjTtPMWmQeW3XXUTXh8ygd9v2KTCV",
  "key15": "5apSsMy4zEYMo9M9Xuhdnx157mAT73viQJnLBTGTB2W1Qj916Hn2KJczmoEakHmtmutMAZ7W8TY1EQjDLAUv1A8Z",
  "key16": "39FaQMpfUDGBhBJYN7TTFF5h56mw3CVSm8RfngyLUsi9VP7Q5ds15Fo5D7hqhX1pJYtKZtDi29xEUZLKVW3CFGFA",
  "key17": "2pkwKRCWRuUw9bsyGffVG8XzM9JpZZmNiS13MkbMG8deRDnyWBGpabEEBRGr36BL64JB9ydusuRWCpNq3N2wR7Vu",
  "key18": "5hVuQmTGuqVQKCTepFjj6Ym92ymasVt3qfKNWDWi1XD1KZkVcdUfMwqqJA6Z1f6NrAb4wJw55Rm9QYWtBU4M2us5",
  "key19": "4XtmdHu93gsbDSfzoPZcKRf4wTWKWbf4QgaA9m6myghLKxkLVQqVgLXBYxmRUTeDYsN6e5ucRDGJuL7dHdqMgRDm",
  "key20": "bi858FHonJokz8MoM7Qg9gKp2jWXzyV4GD1BYrFn7kKgesUN9mVTjqTNATrDrxnsjDc683LMHzDNkkqqrq2Hqqb",
  "key21": "2wJ1nYQEGaiKN7H1wcprQ2M7vGcy2mxysL8XLBBJFWqi7KobYFKw4CZEt3QfW9DW2HqKcziBNRCBQFzu4FyQppHJ",
  "key22": "61vzxuAJkWz3JkR4yGv228v6SKgMiSuyYyer5EvWZ9HanHw6HHAdWpf5xKt7gytzpbG8TQB4kUbk8nPSUL6odNUb",
  "key23": "9pAqQjV7ktoJte7ke2nek4ePq5t8SVWNBpw1cPwxDDVjRUpVKAPWc1qwDETrDZPpVZhAcuXdWWisQVPrVPixtpi",
  "key24": "4aPKvk6dWvAbnywBz5GyzdQKW8n2etej7ebFDb3BgkEdNAzAZbwfJYKhKAjmk5JL8r8NmbrrHNNGuuKfT18G5gqZ",
  "key25": "4cgKqLBjBeATrewQpx5QEg34f7iY7kNmDjBui8dDerSVRPzvhTYW4sj4hDk14Zv6bYr4PpyVkXH28Kp8ebjL9uz6",
  "key26": "5EXzvacAEzjoJ2kYuBTCaqo9tT2NknkrNY1eV4Qr4h21kxa8AFKfWZgGGc8agGi5obaraWZZ3Aynqoa7azbwsVAr",
  "key27": "5unXLZHN5cK97aTL9cePrTpq4FBKWfzDsCoBdNXmXTSH26d6J8ALLW5uUWz3DtYX3CWMAx5pzPZMSZs8jZw5tW6i",
  "key28": "3cRk98Q13PsjbwQtUXbBhmJZ2FQrJ9YE9o3Q9QamCmgCUy7X8U63NGa2iLA95yNpq6WhzbUMP5XVWPqfafVaCV3b",
  "key29": "5CFAEEczKRwXL3UyvshLN376RQGsj613kdogpgfMy9yQyUjpWx4zPsbKs87BXT9hNjikHu8UjCBogVNEas6n9qGj",
  "key30": "654J721ythk4xTkiodjhcB6bu7KYPnVCycuB66AxKhup5ydSqPRyKyWeTYsLdrV6HnTWNEHznCrZ8UDeMDbi6qNB",
  "key31": "3gvrGnaQjpTU6ABeRm5f5WJ7C2xwM8xMA7YuFb5wGghGes5ZL9Xc1kgH9ForsAioFtChGCaStfoE93Qomzd18qYx",
  "key32": "5hR6R6ezzdJboAYcpLkPm2cHQBUmPkUtDMdYF7WEUUmsA3LdPHpUVQXQJ2caxfFsonc4uTVMoxt7aDT9RZSLYLHz",
  "key33": "5eWeXpHEjSXFw72MCN47TNeo7bEzFZCRxY79BabtuAAv5bzWsS2dhWmFtXB3SygNzcoBSJY9omswDpDYCyeZv6yx",
  "key34": "4cvJ7ezjwHZcpiHWDpnJrKUrCkzLM6QfH51DH8LszK2yC45NxkFexQ7MsW1Xwkws6KaN83w9WKgsmS2NbqBFM8tC",
  "key35": "2LcKHbWbtnfYXzNUaKbwPEr9G31hXs46D4AUQEQ6ACfAB2U5J5EYhM8hGTw5iGFR9z7CM2UHvEhSCKmVfwJ5vuF4",
  "key36": "5kDV7fmSFpHw98XnkzdKyga5EAn6nUBokgu14djaRFc1t4awYEo147W2QfVFhjJFTAWXxReWEbNhMyx3xd8m1KQN",
  "key37": "2Vs1WBDRcngJCMhzTbCPBMd5W7zBdfVuDTnGNtzcrWky33Jnz78MBt6jQcjW6GtqGXxUN5cZERwnXBwManRJb1UK",
  "key38": "3wm9x2zniegoDuamfm1av3731aguhy2JL3LRQmn3k45mAm9mVbqDntSQBHuAyfZEL2QrnVev7zF9cAMyCE9te4a5",
  "key39": "5LhWJhK7CpsTaVu9vxguSNBcQgoZ3t7zSTS7JhJyHUb1kwUkwdcqhQQD18zLfpyw3CytCRAr3SeXkkQyWUb6oM7i",
  "key40": "5n6nWzCeQmZbGGPG6sCSZRak5nanv2zbqCYCkmwzB5cWAczJvt37PbGifwQTVnAGkfus45p8JGi7kk5KUQDciS44",
  "key41": "5iR8LecJHkBhnAT8eazAwwKc4x1BJeTQJqhgBVmoe5DScNTAyna9y2rEpDYEbMuW5izN6LJ1oJPmVrNZnj8zkiPf"
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
