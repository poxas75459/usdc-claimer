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
    "54pKc7sp94WvWpmLoJrcJQfDKVoU7mbdLAUtgrDwpT4CyRZg2y3ZZMG5A4KYXhMTJEEEZ5M9zU7ARLBy3Tu5XGKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qi2DJfpLgzKs2JxbmbJxA7UT91BHo6jWm8juA1kR2naQmVbHyFDh3m7W6KBfHZhsWam3eoJ6iQCknJXkGDT3mhs",
  "key1": "2u4s5qrHDRFM6AW9u67jNubf9w3gDLAK18Hvoborx49ryPe56hQi4cLx4sC6LC51KpoM6r1PbxELMPhNxgQAxRyW",
  "key2": "AotR3bMi7nWAFgS4oWrj8sWFH2MspULbZD9AAGH5s9Qx9uQkgKuXZaagY2SeHafFazNeSZmb82VoQfHo1w9SVFV",
  "key3": "4iKYf7JMEbMDr2zYYjdHUKDLsH9q38nEHxp5TMwMBADP4fzsTZvR6qA2ydrBspVK43fErsQ36j1JQGqv6Rd3DVba",
  "key4": "YWhu2BpsGK2mTFuGGNY7cSovYuEd63WtCnAzmSMMHYiqGwhUeebZS4burSQeXX9A7bruedYSLGNCizhUGZ2GAkc",
  "key5": "4wSFiqtZjBTG2yZt5vwob5iRGauyfLfuXhymSKnfGV9xLYmFGf64TPQikxM9krDs8g8VSoaodJRhHz1XAXUXcGS6",
  "key6": "2fDcehkGJ47d2JY2owaoaBE5FXMkdU8gxtrpdgdorKgovcnFJqQkb24mSWF78oRJcQowmxuRkR4CNfG2gxQrbRPg",
  "key7": "3mvQRmhyAKLe4zR6odVVT1zyoD9FC9yDt2uyGBUsz9F71MeHaRf6b1deauy749EvMSFsf9KYoRzMVYm6GKnaLQqQ",
  "key8": "3yvMwnxiF67NY1hC9q5AshoF76z2JccF1YSfvXwr9VeNA4gj6jEgx6WSqYHrkvU3pDc2b82yPvpcbEqoaWUZTGQv",
  "key9": "3njo1HA8HEXAb2Csa46QVEi5Ryr2a2TERjGCtugCtqkgtaYfMgJkeLaWvEvbGm7rhDQ3LBpWxMvY9nvqHQb66QfW",
  "key10": "XzdtrkwEnJCaNthnJaxC8m8k8b3rjc5rcxYDvA28sMphYbqx4Nm8fpz6qb9k8bN3sCwWiGdmsVWmweRx2vBQhwj",
  "key11": "3xyG8JBBQHFnTs43y9PRVWHwS3AeidfAuFJrZG4LQjST3Vbxzbjyo6jdwEpTxxgsveSbAFY7E9rg4xRnBMdqYpJb",
  "key12": "5i9K3GDNpCpLZVwVgA8JvhSFeqqtARHaM7Ys9NEtFcVpiU1Dow6dAGGrGZF8QxvvDhcKGaQ9rTGevv33kSa7FgdT",
  "key13": "UvqGAqj9hgqG9LwGPYfiqneuC6xmsc3QZznAtjAjLQJYMQmPCusRP69Cp9G2UtS8TTmY9cryWnNZcZXCrcbyDHd",
  "key14": "9jHPfXQ5aEmh96S6Zn9dgszqXemKyLHxse8dgvUD7hDVUKdjKLh7eRiRZun4pFHULcKuLJ8EnPWBqwwaveawLZG",
  "key15": "4ep8uXtyu4hff9R7t4D2HM4UFyLVLhwvhbKM82ZdFuH13TqRKtWgSoHDD54KFVXGo8bAZB1SgyfPiSKQKm7a9jWY",
  "key16": "21XNWc2HLp62A4b1SyqtNcbCWfXEz8J1993PH5RFqhoGKRBMT5WQdMDfEaKEL7f7asZbrpE9o8wBzq41eGock1xF",
  "key17": "4MRoApKAkcgmxs6QVSha4qVLdeJb9VoGazHbXKjS9uAbqNMRbgFHdm5fvcEcHwhwCW7yxFZNrLNyXMtdoNTA8kQ4",
  "key18": "3tQMfB7SbDt9rxQGZgyJWhdgAiw5yXHU6mAe5bDUGnWkukmBoHibuCXR9CssxSJvTe9ei9SFrkj38frV1PSZDE6E",
  "key19": "2kEPUevQfZXBA8RwbxcncD9TzFf7Z5wdUeiJ6HvWY59FUP6MRJfnEoQyBaQ4jRFMmZ1ULjW2VW7q122zmts9vNeF",
  "key20": "24gw2DbvHRUV7BnXZ5rHdtWSAD7faVP1FDBspfRxrhmki57BeJtwyRt9ZNZ2r8EM2k5mDS891WvPFhmDj8z1vUnB",
  "key21": "4ss3JksqCw9NmUaYzyXPeKRMYySYnhBhCkGanuVvf1C6d29npdN55QX59c1mj1KnSAgUJCDsjH9kgjBNhcUkK3qS",
  "key22": "4PCLHBCbujGa5GQef3xWKybuLtSg4goM4Pr8cZUpcGdHgJZwTSFcHaE8XCpMvtvg516afYgkyo7LAskVK4i5AiB5",
  "key23": "R9WNiPBPzrQaRKAYrXH5knnuNdpDfA12ud7C3dGHbM2jGMRT5r8puXdjaCCdAeeJFAET9rKF5qW5QYtmUTtH6un",
  "key24": "53unWpqbTmcJmqSU1k9nhc5CCAT2RjuvXhVzKXC51XNmoRPxVvKc37f3iDPe9LqftZFqtSZKDpA1JjyG8DtoD7k2",
  "key25": "3eiMH86r99qDTXg6kk6tk1rtSbFtWPK1ZwBpJyLcyPH63aBPsFCz8hSHe7f7EcczmeNAk42jUwuKtjC7wUtmsmDd",
  "key26": "2tzQ12XjUqcxmL3cVTR9UStC6d3iAgsgqNPp8phCYWHTD1BMeTz6xnHWq7hkfr1ZDrgyHbgeZSLhZezeCpZsXmq8",
  "key27": "4nG4k6HGNasmxm1QJPMFLxVXu2XfpDySWEGLJKzww7TbYGQJiCt2dd2UQnpHYhRqGuDEVpYi5X2a3jZy7WYi5t5r",
  "key28": "pZiqrngfBatQaf74YXgkRgzWxxMrKqktopk1YGC9TN9r2x1TcZ4beqdbbWAy3zMDi4dz5gqcUTqS6zC2dwmrNLJ",
  "key29": "4Ji3mJt41wCs8Niq6CXUAEg2nkDeCncSjF3z9rWZDxPZsmc2dwAFevDMkkgdKjdR5aiB46gpW48Sr7Ku51E4NCQB",
  "key30": "2StxUyjE61B6cufrLS5B5ePSQTouLNhTPGUKkNwtm1253T7sNfeoMRKAzwdcmfFrUFoNzaifPveTNHmEdd5t1kz1",
  "key31": "4PJ8wPUedZDyNXaVfHQ6cawQzGJBneQAtavvbYmrj7H8WT6EjkaC1pwVBCW1SmLkoFbwJbAmVhNpTXnj3BxU6nNe",
  "key32": "4LSijtVyQwXdNNZTYjVGAZyGcA2PkmaXyWEaqM5CyujJRc8xA1w7SeXV5KoDrR6urw9e8DCHK1KV36wpWCzF6Rnc",
  "key33": "4e7wrsVc3ndJiqhL8ygqnFWFnJBNNiarEujFZqwRiuyJT9V18CtiQPG1JrPs6vk4ow8MM1YjmGftkFVLHJSMMwsa",
  "key34": "5y4NgXkXCGEwdy34jbKa8VaWhwzT7WjTF7qLtTLzqidunRig5EZi6gXp5ArUt94enoaSb7Z7u7tWRaT5itLiyZo8",
  "key35": "2S8prcaKKhWeAE2MhmY4n51JQeXQEWtXf7rMrZ1JrAgdsqCGrgWPWnHh9xc4SRLJmTcLPm43UNEyNd1N71jRC6PZ"
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
