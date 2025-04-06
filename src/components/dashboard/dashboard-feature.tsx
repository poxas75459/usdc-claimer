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
    "sjdoauU4P5U3ubsDpSw5NQTToEShetwane7u66oFKLaJJLAfPnKeqjabDjnaAZEy7wPgiewkysoGSUR6NYW7Z5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJZEVZhEJ5sTVcuF9k93nQi7i1B7pJL7E4CCP3tWmYGJvCtQUCn1NY2BERc2sXmD5yBwfofM2F2wLNVHGbPxmGA",
  "key1": "2SaG96YifVzBLkUj9JbNRcHRBersQrgKkitX1i41MeU2rPeDEGNzMTbHHjoRpSpbNZ1oFEUunQNSWbdXNz3ZWEEK",
  "key2": "25aGMYvFJT89s63hVo3LgMGNGAsZR1VmJbhc6jvLriqY1jheeqbLyR98LJawomZjUQTmwAxWvBx6e6QzztPf42gx",
  "key3": "4gG4nJT9CMfin3u1adbEnxJaMY9mWFQmxvNxwCA7WbXfQDc853Lys1GgDq3iXN9NxTZihwuPWM1FkXQ9o1cUV9SG",
  "key4": "2FNrHURR2be4FftS35heabzGYJi1u9or1LWRZmyVzCUs6oMYenfzjnG2yNkoyKEjF9KTZWqjN2U8sRve7W4Cqzq3",
  "key5": "YpiJiuQh4S9usX13cNNDaCJFri4dL3fCDK8PAsR9ZFHBbMU1NeU1K8ks9SGkJ1QKQHR3PZ8xEgmjTzEAsxPmjSZ",
  "key6": "zD43PG3XmEjPkypi3b9jq1bwKNKRdg8jqASj6H2AqZgN9XnCDuPagEjxK1tMEMcNQ6wNjMp2zmXTD3iGpaULgd1",
  "key7": "4naxM17iQvSzPDjpRzBVk9HsSZSMzUZvGGSxNb7mvmb5s6rNsRa4awcaUeJ48qXGSSyGSfv28puejBwXtZRNA46M",
  "key8": "2QTEuZjbfPssPwcvNiwd6qqaKrdH3FUhRMh1Y43xiz3q2Kqkzy9PwGLGNL4BswNRFqtXUELKMrZZWN3VNPY31hKX",
  "key9": "2cay9irK1anDLdPSkk5GZrKUF5ZkxfmJ9M31AZ5eshknueX1yvfHGZPuFcNpU8RXQ2jEEj4AW19WjUxWpKPuJHbi",
  "key10": "GDRiB8VT3smLHpg9hkTH27T4LD2YNdTiS4VotD4NMkBJRwkhxZMJfa48c5Q7xiGUuy9ZSfYMjJ8kkhbGJ4TuqLX",
  "key11": "5GFa5EXXamRdbmWtdxVLmpgd8KM8A5auU8hZ5TqeAaU9W4kWj6S96jYxPssBzQ2WTpGtHey4pE6XDnBozTUZHnJu",
  "key12": "35NsaJyGvvXAWH3akoUcjP1osYfdoLMjkmeCKcMtc2ReTWp2EAyRt3WUBMFKrg9jVyiP23Th6Hq7VqV8T7Tnsej2",
  "key13": "HJnXsgfei6URUKbVrMwcsN7LWfW5Q6434Y56Y39gggY4nYBqwF9vPSxztYhgx6ennEk2BzBcQsYXFBQQiPwP3rn",
  "key14": "2hBFPyTWTaiT1wWiGe8S8eCuKwPfufiZxbTecKQfcCU68sMLbzhFL6zhyPPHoBqmtVo18cA6k5T9knsjDf7M78WQ",
  "key15": "ocZiB8kvYMb6ttdDuDPDKYdjRkq3kyqjcZFdQbxF7BM67UiPPVxUJfHBxQ35eQZqpgmGzQkrNaLZ93diLxz2QXu",
  "key16": "4zkxXAJV3toq3CSrNjmbszYYTSMCCH8nrZ37LXRsMBHYu3DLMYzdhwqTU9rn4EaCbtdoMnAcaaKmCbeVJhrpPzR6",
  "key17": "2uCuEdw8NPGgXoWAgypbJgTVeS1ZnWrvj13o7Qb4NmmG4x7jZaP1NFDn9yxYe9QjgK4jy3CAnw9ZGNSxWTiD5bRS",
  "key18": "4rRZoK21Rs7t8mJSRKxN6php3wNciFE1gRWn3JasYnKKTNVAKnebdKe2d6Lgww3phM1J1jYT19cJgyMmuubtsASQ",
  "key19": "5WoXb2YtGfGGLKC2gbsQQzavbYLrr8ynw9aTHhJWZ9c3gwVfvCaUzpVZt7JtmdXGQzPuQSe28VdnZEWCR9uBKJcf",
  "key20": "L4LH4ZHLib27sNfiL1LX5q5BZBrHhaUUGiVeVVzvuu8GS3mcHfrQ6mekRLACv3n1g9XpSt7Ctr7rA2XFkTFfK3N",
  "key21": "2W9TGxtQPMgAZpUMGfnGv6UnQAFPrNotfWJx64aZ5GJdiUGD67VjpEmJ88923tsPktZa4WbuQ7bK2XuEH9NFbNPE",
  "key22": "3hjnaFJUbw1yjEJNxGLLLCfhZDGfXxDwEn1EcMqazjmKXQW13iJLKUAiUbkE4hcQJkXVKA3vqEaotVuhVU8CxH86",
  "key23": "4sAM6ey4KN1U6WtCHx6U2A2cs2Ekge3KWVTSd7HaQ9ozx4xSA7wTfiq8XFnR5cXjVshCsY7ZbHAeU85gMfdwFxHy",
  "key24": "3Gk8NBMN92xmVtNb48gKRk8XRy5Jtr4yiGmDVuddEUmmBriMDbwn2TgeuaikoZLCqGFXHv2ZU41j7D9diZgG6ao",
  "key25": "9GpZqm8BHqxa7Wm7jkd8V9Yv7N2NRPvbTEXn7w6pnorzAdWPhooDm6KJgRzMRmpX9dZg7PyTWU7CibeeugtdKXX",
  "key26": "33nFyDhy68Duhzu435wiuv8fzrCgdiYTja6XnsKRWGjk1toms9JJU7stBkUa1RK4xUKiC9B9ngEQA6gDfyY9muZV",
  "key27": "2vQ9cmhxKJPDwpyb2dzi6X3n4E5V3fG3ry85HtGcZ32ttEivkXCRhUUfpnpj5T8EJWU415TVt1LWsV3vnUxVgkhF",
  "key28": "65pNyQNSuQvn5s3CD59AtjBXFehGCiRPaxiBGRfCadpD9ZALMdiGhZQKiuuf6Wwx1DjLgN9d4AHwWgGi9BtcBcsJ"
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
