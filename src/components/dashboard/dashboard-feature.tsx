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
    "4vv3zAZajgtSXzfLp51xHxpDv7zweJAFvGWZeSyQ8dTWLzvZrwKchVqTfcPCMSigCRfZJVKq8UraeEZ7RWEFFm6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAjLxBNxYnCnLUK8DddpSBFimHcnBTAk5jjwXXnq8VCU9nHVNZZTngjG2t4iuyKpjQ7SdSr3yKsLy2EFCyC7dpR",
  "key1": "2AeTy3rTRkPKiaWQops2cQWeAVXFMFYrhy4rw8DTx3YY6YYZKWz9tZaVxvjZxFLsMq2idz8Cvs2gWJwMtsa84dwe",
  "key2": "5UcW1GcuzQEqXzhSrw5YxTUi5dtS98S8UPMSjDg44LnXymCYzMeNg32E6Gpbx3FhgXfSXdF9V7VD4QyYt2fDG8sd",
  "key3": "5snvv8gfkcqwk4KwcPFyt3nmYa9cczc8xUtif7Q98YHvaSuiTW1AADPY4mJaJq5Vu824cKNRmsWQ9osvP8PaKD5d",
  "key4": "4CzqpcLx96iU2aZ3Jr66URCeVa6nV4EhzGmZkhZhEi4vQ2sySdFWkWwxUM7sDkVcjQwL9FQbHn4TE2qxTCxxohXK",
  "key5": "3cdxoLWoakUHhDZ8DKUmChCck9fMBsjeWS6p9ma89C98ivCnQQtEETjJ1EpmYRaB1FSF5e8fBQFzk1ayZ1sC7vmi",
  "key6": "4bQC59VBDpz4zjrXXwWmp7EG7TXQEkAMr33thpUuXz17WpzA4L1N2PjWiKwAnMswHhNskmSFGCaZ4TAszHdd2nh2",
  "key7": "294RKcc9Xw4Qag2N6wHUaAB9tai6JakeK87X8sjuin9cyWZSaijSNQBsp99nSmuLu72cHNFJcddRXsu4pyoY2MTe",
  "key8": "3M1wV3JZDL56MyQWfudf5AzZQ2M3b2uw4TDikpPUFR1YPr1qnryEZhQZ3f8iwFTWmiV8dhFabHA5NZtQqJ3yDMej",
  "key9": "5t3gAz8dKPyrU3W2Fj3HvzsMg92B6vCef9VYpQ9MM577VCJ24WViGkeeuF9Df7JGMrWHE7j2Lk4yCZVphzbwhgqn",
  "key10": "4fCnGvQqh7ykLA7tj7wQR9fDXPZ4p85yAe2r4oU3FkCLWe5UfFeRME6KoxME84kmkvn7dJpFaRWgQ52y4jkv4pdy",
  "key11": "3xQPHTJFsUPGDBrwoLpWdun55ZqH7qkqLGZppHDdFqyEQzFRAtacKVLxGQjJCzbjaqgcJR4yGis6tDa6XiqJqc37",
  "key12": "2GEELP8N3xnzNr9hppBK7c5JphjtSRJE7cbtfwXdr2LXSNoY6r18hengG4B8WudZQmi4eqpgkzxnhi5EvZP5mGmd",
  "key13": "59auLv4BUFXKQyXYHLKDjm7XwS9piN7r4aL8YoMAnhjaxn6JFWVodKxHh2yWPvLuy4Kuig4N48QeThkHfUWmqSnZ",
  "key14": "4spU3gxiz42YfebyJDX2JtdLsvvCK92CWxpND3ve55xteXN9h2vBWTR2VshuAEYdmAn3jXivdZDAZ9ajFNLXrQCQ",
  "key15": "ZDBeeirjnchM1FsofMTeYWS8shGnaDkk6Cq6u144zpTksPLgQhEhLEoc3ZNpbiHAxqdnvrcJWJtY6LLkwquZnEC",
  "key16": "2mvzLPSMGPFfhLSmqZpBD1pCoJJNkwZtM9C1htqqVSxTrThS1Ls1Uwfwp2RPzCeb4672vE2afqNMTz5B7EYyT7J5",
  "key17": "5WMKeo5c4qsJe8AQtuh9pJWKc3nSoHKt5Abwe28Hkp1Pr7q7Qm9BePQwRpK9MEydAqLbSz1ZGGJjnH8PX5U1ubK8",
  "key18": "3cVEJFCmhYPDitXzDYMjDYtpTZg5tyHHvM1oX4Bbd4zRLdQkwVSpk77eYmRUG2vkRmoc9JZ4jUnqHZhYkFrnEkuK",
  "key19": "416B2BvnVstGhFsusdayEYmCoq9bpwd6m3nNqEcYbPSrUsDjzN4XL8e2rStUA3QksYQc1EAR4J2bNyiitTrdDqJv",
  "key20": "ouEW5rhCntU1hwYRY5F7fkmfQam6HpaoZcEw12zziMwkVLz9Qx41DF1vPnLDarXtKezXUiXGun7QNEa8CU3Neuf",
  "key21": "5ybpyG2vBP9EmSn5L11xTafUTqcqLg2TWEDyhRJyGZVfzYXm1fWJQT8u4fs7BNJTsPPYAzj2JQrEuTXPdygTae86",
  "key22": "4A9kBf8YmA1VQ3cpPbr8S6jJpaVjLbCXQj3huTuXJxCsRgBkr2yMwjnLdsRHgS7oj6BoqgsHpFHbB6uQbsbjm2qL",
  "key23": "5RszCr4x5p7HMZSVQy4U1k2EzCJyiYtNNpbfkKDZzWDP1MTcryBUd7ufwHXmjNFf5nWJ2smzx6w4sqxYHGBvSize",
  "key24": "BkR85XTkHEzKKnG1CVtbWDXxpa1kSPPX5ExbukiMpo4nwx7xxSoD4anEK7fsTYt7h2BiCJMtJZgT2HCN6yRXNdh",
  "key25": "58bivex47kzdyJ4zhzLp9ihMeL8QhUBdrBS5D79UnuTJhhu1ujrCmP9GmWvyqrdDmnh384YCu2Z3dcmw29Z9vFvg",
  "key26": "xfde8WKKRNjrbY71wNA46iZUtNwKCWertMkLTfiV91WcW99zRzxanfEqhXNAqJtQpVP3yk2B1CjXMJyaQS568h9",
  "key27": "TEipj2cJW9PkyDdAED6pqy75BGupF6EYdRDFqgM1V46WLLTFMpcHdjF1EUVTf7pJkV9yiLaWXtE7U4G6aZTrmuU",
  "key28": "QLuRUPrD4Nt7pH6vWvc28LEc3sERk5zRub8kVLJ3gTM2Bzw5U4qMf8PNXhk8EkM2fH1Ke3ev1KfAaEPeskQZAUv",
  "key29": "4B7hyDobz2BNkvM6LndoMG4rg73AA7pAXX1C5kdUFnaAYoNbuRpuAmpetrsvabNd2YtjEZcNoMvrcu1hSbBQDSzp",
  "key30": "2CXW1euJ8ZKsd8549vqbqU9YfnYyxpHJH7VYcdb1tcHG74ikud5nauYformbxwhXpHrPiZVD2BHQrd8PbqxbAtBD",
  "key31": "3NHsnJwTBMDy8TbPadMcHagRrxRiKxXnLgpBKzvPFCLAB6VxhKaazt1eCrcJ2935y2MboWbJ9CDpDMQaQbCbzQ9C",
  "key32": "4HJ8NhVfyV7RhD4GvyyS2FgUqU8BLVVKvgrPzZo9iPEXeKi5fajSSvgbDwxtvMfQMoLsTuSitnkhRv8xZj4D1LTB",
  "key33": "2osjvBJ4dSbcQwLCKn3QbatWAHfjM5nDhmigfpNPwVFsbH93DgiFmeZ3TtnAmt4Jqg36NqiqJPYok6VkMmuW2Arw",
  "key34": "4zmwse9vLCN5kTDEX9PaHufQ9UGU6Cadcdp5QGXLEFSTfv6ycYznJagWGHtXpzzd8yH7uJZJxo3g6N8ATntCR48c",
  "key35": "2NJ2XkTJPj3PhQE8vBYoToysoEJJ23DNd35u6FcvsYKrBehhraXBFmy7nkkekDfpkXZwWkbgCxMA3E9ftfQoPUxo",
  "key36": "2ksfqpWtEvAd6669c9biPP8f3g28LkP8c1nmSbrPCL8EqybFKaJFeEqjczE89GMAoACqEZ8gESEZHGLPFSbgVcpv",
  "key37": "4TdfgQP2Nia4Ayhjh4AappE2kqhub6ut8fjDY8v463pLEk5yKh3he3SgCNLvSu2GrjeAhJoR6uAk485iSLa7igZu",
  "key38": "2iDbCqpEqq77w5F5tAVcgVQbr6nH7oXZ61kXvPhd8WEp4YmQzBjknwnjAcRwMY5fXu7BNMb4dpRXBcM2cjqkm1zY"
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
