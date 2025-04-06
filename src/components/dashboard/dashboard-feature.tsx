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
    "55n5pjvpaqThFwTzxe8XyhRRMK1JNvnsgiro1bPo75wMVp4MBfNn3TLv18Rb9UUPd2FXttU4ZQwKBJcAKrXNKxJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUfPU156x8MiELwmC9yrjSNpLJw9S33LJNNzKkGV5zutufrajU1oLt8aELn3tRq4RVRVVRr5F89ntV1mWxPVTMj",
  "key1": "3GCgUG5zs6aQUM4mmX4VkwRVEMEwCMagEXmkKn64gopLtke9Pct486BpPXHmW9L7q4qXSaYNrZB6sEjGYhVvYKed",
  "key2": "4AenkhXj5vdjD7UFDNNfnTvCLBiKB9x4EBvbpm5o1Cz4rh4wPnHnWai6XhzdwSwkcBTcgLMbg22q3gmQbJ3YQwto",
  "key3": "57nk7e46kVQYZdnN5SHjkFeG2d8RVQCNXFEqFtQnchQfNvktzR5qP3Mb9qSgx2thv4yteWn58dFuTrDUjnbVfZh9",
  "key4": "3H8vGHd6FiB8dW3bmbFN3o78H4r66VuZbh6TgSp1cCuMJBx6ixF1vCzvbchpKDFffNvLNzE5XeSoErBuMBuciyxW",
  "key5": "5NuvZDSpeUcvvaCMDg9ATtfo8jeNGphmzgG69Pg4fSU7LDkGHtWWCAaDGuX7zrYcs7bvofAzfuuUcZFsg8E9v8W8",
  "key6": "HV92dTw8X9Gjieqnd69H7jxhz1PybHs86Ja2szcBFoVvPtSW6Fm2PAUsr9bmn9cowbkZzyNSAZGx1nVDcpCRMkE",
  "key7": "E9dwmYHt7Kf7tgMxKtecLYp5AW3VsG8adDtFNK2iLjd7FRwWpUDCGwnNKAiVs9VU9rVzSexcERxueB5sa4J69ir",
  "key8": "3ZhY4c7vNP5nsuzkhToRXPmVafykzaAqPhQWKbYqEZP3eNpdvCGutV6yUSkYGXBN2KwNxP8KgNambEFGFdbZb1XY",
  "key9": "5Ya3kmLcchHKJma391qcqcmweRKeyfBfGCEeThkAwCFA51nWpQvCodhhjEPH2KkqEpwmidBzR3H6KwWn8GEiGJPg",
  "key10": "2jMRJNYUeU6ZJiVj6fJdsRgy9JKkmRtaWAzW9hC2SLoeDxmNH74xs6fY35kYXb58rYqS9EVW64MjHqZSk9aWZ3Rc",
  "key11": "2e2qe27AYJC657fVDQGNZw4ciy8TA3Tmgh1MyGo7uk35G8AwPiHPNeKzaVDRSQcT9wTf8LyqsKHqvv27Z75q46kp",
  "key12": "3YfoRXMv3Px44zzzKg2PfibqBdQQ64vBsBPkFyrRShZWdGTJFZaiGPYWGAznnzkrDVgyPPULARvW8nZ7XdfG4x8Q",
  "key13": "PCTZznHeEphvPEex5mQGigcjEJiFhJkjhcDXfDTFVMaRZjqSxPVDkSGD1vUGGLzBiJnBZF1yGuc6ogY2DKzJAHn",
  "key14": "5iuUFYPiu9mHykhZoSwuL6kPWASDh4ZgH4SnLfPELz6Wma5J3A2d9J8dS7j9SCpmk7KfriTV7jp6Nvxays3W2Z6L",
  "key15": "5pEa7G8g96wovzwxmSPA5EB69j16WEPWWqYbibYQw2ei22Txeso4tXdtSnYHUu3S6ThN4A94QAgxoYYcLupXWgRF",
  "key16": "5Pz4TkFnN8bggCZEwvtaWJEnhqaJnyERnZqvTuLR6QQM8pzANufdGy4dtDKnhawW8Ld7LQRG5mn7k5kx9N9og5Yz",
  "key17": "4ak9iwvnmSBRX5ZRSMiBo7Uy8P7ZUDDzrLgKwKXMQhVtAAD3rwChGCUYtL3jNTGL3qNqtimTtKCfoaDHexmYfQJL",
  "key18": "5YTHdZCoT1j8G2LLXTTX2RngKmEbmEfRBZT7mgybdmKTXo1AByRRJRnhR1vdi3FS2eSY88A6De5ZRSo2y8VKLRXQ",
  "key19": "3rKPuUwpEwus1ciccpDpb1HDjHgywTDVCWxUBK4QrFfAn7kxPkKsZHa64HMLtMANXs4Ggv341WBenpnR6MCeGajg",
  "key20": "675QgXWKaEYvXBMmSTVP4LP6Tzqwhu5APBdQm2jYd7VgYfdNb6s2n8eYAkeekq1iEkn99NC8SLKz9CpbreBZz7yb",
  "key21": "8ExTNeK61B7Wjxr3Nv7xEXGKqZ5cav7MXvRMEjJeS9j4t4HW69W9MKaP38ZtcUsrweuxBxZGwd68nF6pQDfkSo4",
  "key22": "3HctHu68CrhEmzbjuGWihW9nBdAaMZg2entSiUG7PLWeDU3xwyZdsQwp93wdgNs4Z4heFzATVtPcURN6fVL1VKfJ",
  "key23": "53ka9JFeCQKCDSbqyCeU51UVExdAgr2DeshzEndJa1UkQQXhT6e4r1xjqVNU3Vf3gfzpCtAiXqRP5YhQaoDHQbrf",
  "key24": "LVNbhmmVMrgFa6UA2EJFfnWs6cHujaijwddVgxjwcomW5EFjyyLugjUGqWmVYc8xw2ND437C7b6P2Gy57q7LuZL",
  "key25": "59X6LnK5tJgNEniR8GFXhMBdyxWmufwFtvQdCyB4Vk7zJJviHT9PWDvzz7PVxRnmDvGc932jao52CSS4tMKXSRC2",
  "key26": "2E68z1hwQK66GpEEjYvUE3DuxWhSQKj7cpGPqqKRWAHAhEg8V4kGrDc2vP1xHpBZANZu8mDhy2U7gNtRZK7JXx7a",
  "key27": "4pbJHu3CKyrZBQEJ5GNjfTdzUj9e1nsLD9JYYNotNPYAFP9j8x2tGBQmEhEHhycsnTKj5GcYZnUJFdU1hGjYumuk",
  "key28": "2cvCPD8K6hA4gGgTBnU2rp2rfzmQCnXxwCBoHAo3JcnV95qYey3LjnxQjSyrHs6ZFWiQkuaKyeFwkPAF8BBMeAg4",
  "key29": "3o4n6t413mmCxrdDtca69YP3unBfPy8DuKq3ixM6TqQ1Qj6Xt3BZL5bKBnNzWbn71wBqXkMRieDQPkyXDDWvfSsD",
  "key30": "5kZNMBG7aBy46wzbEY7K3xfnmDLqHGU914YC63jjQPgzDLAJVDVADgu6nquNGoRXHiWXBDG2X87BywW9VFJNYSV4",
  "key31": "3ejX8E5nhaFYrJebSiTmAkPmehPCrEEdjnP2Sbm7nTrp12FpHx4JfGEDC333EtFEn6LXHaPEea7YmDs12v6PQKsN",
  "key32": "4zFWqaTgDEnLU5Ju1oQr4YxBFSMQsm5kbp8QPUg7wHRMxymP1cgB9shoMYdvJ76DZevuXETofNfEQKBLoAq9LKAm",
  "key33": "2vGYfEDW3oBJxkEne14P84vHdkqw2tsmEVyGgpXhnLZmFctjxUnNJi8AttNxunExoWMvKrwqWuxxhTi4LrkQgzp",
  "key34": "1gMuJHqrLMrvoPdSaZ7GzAQu9cUXV88XBQK2XayNCzWjphqRtpN26SEppuC1nPTiuz5AjDDq7MqcSSf7NTiS4cm",
  "key35": "3kL8b4aNLregpxBKjmx9jB5HBzgpqpUcgxDLs5hm1mXp9SuFbY6Y7bSq8tP29ArducaEQ9i7HC6kZ7c76BbwpueY",
  "key36": "3VeQq2snKZFocF4HQypoNDGmvcrYCaxgVeyGhY3QoxvS39jXrkqHkfAzcKU7xiiQk7HpAMKQEPfTJAAJ9fxpNYGR",
  "key37": "3XAzvabCbT9V7m8bYmuqQ7VgpDcvMYuZjXoyVbnbenM7ULwz8qjLjHXkUD3PSKaj1wraxe3ztNaxoGXBrn8WsXzJ",
  "key38": "21tAG3oFy3BW4NnM2vxxJcmWhVLy9aqPpxdG8ZgC5zNC8vaGbBNqtFdRewu7WHk7TsN1CEUcdbzN4wncDYdcY6BT",
  "key39": "2seEGW6V2qfeuESf6S54si47r8niWHXyo8jcc4h5nYsw6PUwNCS52GezPVMc4im8PmQRKi1aPWNXzwGMPk3VDTa8",
  "key40": "UorujDaZjppnkGAbHrGhE5wHRrXPEQkNxkkDaJ3ecWQfqWZw7DRxu1B6UiUA2vcTMmdTptS3n4YWMwYsBhcoMeT",
  "key41": "XmgVeT3CXKDp5jxSzcJgoGjvov4L1uTzJQEMdEfgtKyS2Tphn79UNuCXwLELEKeYxzCGNf46CWCVXkiyckZJk4x",
  "key42": "2QvsfJ4BVa5mGk27bTj1J4ZTPo32yttrERHsGspbBjfyZ5Saa4ZRXEyyrV6ELEZtN92obYTcNvxGwtFkwKEJpmtD",
  "key43": "qYLLQ7GHMi6ztRpdU6c317R64USJAofBnjmvkm7qTwPk5BPfQtrLvJecbc5ma4JQ6c9ji2C9kVd4bPEzbHh4LjJ",
  "key44": "27UfXNqYoijktDh7qDc8mwPX2U3De2kAjA3Fm94984A5rueLZ67ivDE95zQpr6Rq29D8cEfen5BdPNoBA6HTaLsc",
  "key45": "4iuwg447MhQ5fFgJsh1UA97YjzhGSV1nir1TyArbLXGBrJvypZii5Dwv4i2oUw64xhgiQeuX273EREpaWwS5ySKV",
  "key46": "xNAE71qpQifA8Ng55DmLiEe8KVa8n2xQRt44b6Lrorg1msTtmoR9z7FbcXbjHbNKQUerEBpp6cS1YMFjH9gBViF",
  "key47": "3pqLwq4S6XZNsbVvBmXcXYgZcEYk26vDLeWRevukrFsHZwS39nJaGwWc9JnRf5YSnuGEh5qfmjZ1o6jRo5hxY8SX"
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
