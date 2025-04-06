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
    "5qmfgQWc6VYGWtshFu6UaojZ6NhUiA56ZQHvXCiXVbdYMXcJgDJVitqDWreErL1TW1qwzukh5nQrZLD1KzYpBCDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMHyzgTVgXaFXwo9pjuPe1Z6HmrDa1m2CgJ4QuXo2obwQzyZAsFwu6qTYud3u6MRa3Bh5d36XJuv3WHGd8agsLz",
  "key1": "4W4dKg1oNFvn2mPeP2V3SSfovdP6Ls6dmEfsYUg8G2HdQnorqfAmosUEh93yb9ywTGSFF7FgvD2kDHgDEopnL3ic",
  "key2": "3eJwwfHytnf99pbDLfNiLFLWuWiD5xuJwZSjeMqNWgFk1ojtWPLpaGsNzaGBLRJnDiRwa2JYUT6z8WnHBS6nW5NZ",
  "key3": "rRCTihYFBDuoivdp2VYGThhYUYruRL4XgZr2v9aN11znBQfHVjXbv4i4nvYnYh4v2GVhzA4TTfZ6mnXcuR9YQzv",
  "key4": "4Fq4cqjFr94XRsuY3PRnbf96hgHGWazkMoh3qF9XiMAjDyeEUmPzKuZugpxN1KjhFEq4wah26s9fgqEJmaF8e6DP",
  "key5": "Ak1BT6akJn8gyyX5gokj64hB3uYFRUYruzRtGCzxo9ca8qK8vL5Tdq3RnumfxXoQTnFFGAsupGDZ53dyrSxrQpU",
  "key6": "54bqHezhFF8fFvRGjNtiixDsdz3zEuVp5wL2CfPsSboMU5LKF5XDU4ep2Dfh2VrJyphgtZk5ymsjC7CmyL9Qrokh",
  "key7": "enkF8Nm3KySgcNVxU93YLuLRUHnY1udkPirmu5mFQvckXBNknq8KUBFEczFdwfuvusxTYLnZykRaVzko1KhxZSD",
  "key8": "tgi6qic2WwMBTwbhigT2NHhEnWPo3G1BsTr8PmJudkqx5A4Fd21sipBrEEwoa3Y2ad5Mubhg3hzMSdKX9yBXJP6",
  "key9": "35QApxrzikDdQX26ihzJEcPJ6vnaC1FoAxUZh8VZwGNhRJuEZJoPu9mjBTRjvAfZj2cnbLJgY75XB2qroTtQ816d",
  "key10": "5dy5nGeGBj68XetaR9pphWM75Q8fAoV4Sv4UYtEkUEdsCwKmwpsBoX4zWxz6CX7CNzv5sWSRKokzgkUjbdieqQAF",
  "key11": "5o54qhTbzRjyeQ4jLnaXktrUz7Kbd6meBuW3voo1RkY2gUfbhTSyTC8kC3ZSKqtRJqCBMutB6WNyU3T8mS6fMiPa",
  "key12": "4cbttQd9LMeFg1nSYkNM8ZZMTiZ4TruKQHqEHFioccryT3rCYbZ8MEPCH7fqP5fUf9zqa7b7KcawTPx76enweJcc",
  "key13": "3ZmLxrnwZAk7AuVzjA7jh5mQQe9oJc3A8LsULGrDNCBz1gWbVKu4eUDtgcgBkYwRNQbvKmjqzywGwDuiyGM4c2Wt",
  "key14": "xoTLFv8JopKYDShokXVTcwKbSnNSYFyUcQJs5VRCa7UcdbyYNbgvqfLtaRv4R9Ni1NFbPy7M4RZNBMGUQQ29Zir",
  "key15": "4d9Zwj5pzX2NXSVwsoUy7bneD9MRcyPcUcvWd4dtCQCorqzRDkMxsttWQJUveUV3kNvNBJMBvSnSje7rYyjdp8V1",
  "key16": "2V6zT9ZTWPQLsQ4hUpnvap8AMuSpRzc9KEnXbyvJ87LTu2muuaWWD4u7bxA2BmiruByCoyKhP3iRWdp5YgaKnJY1",
  "key17": "PdpPkoi3hpGixz3MGzrXPVCWxjCEfAZtkNuTSaTxXdw9TUMSX7GZ6DWyKFNNnSg7vBWLkbdokCRFxAibtdbcmKF",
  "key18": "4tSN6CdWL8utuuRgaermixdZf4E7ZWYWN2md2UXp6QnCe7xLr68oym6pdYF7u2JB6bdq74Nhgv5N9BnyrWXqFXbA",
  "key19": "4iiWLAhX8RsA7LD37h2bJ5WdxPYNZAjEwkyCBhdBPw14ST3HExNwMar5wBGukh3rTFSKUidNZEwgcMLRHQ8TGnxn",
  "key20": "5aixXUkDmTLpghjVSXvkn41kaXF2a5i1Zf9wX3UbqeyCnweH7B9KazKghyhNKBqcmovvgnuvaaPd4VBDbeqN2ETx",
  "key21": "61o8jodvdniVNbCdsvyTmMCViaDfeLSLZvT6jiwgDmHSaAruWF7R9s85RFFJisoyqSR9fEgRspdeQsDJKfaPrnBq",
  "key22": "2Xj9zYDj7Uu9NW4XbEipMZ9iiupdQdqQdTranKozehu8Ug7bLBQsyY7BxQHSD1hrCAxkGqE4ZDbMTQKDgPjJQYMk",
  "key23": "5tbE3izAip4esD5kBWpATdJLekf9wyfLMBA3pXH2iWWozxCgTJyJKd1aw5u9yjushn7pB4HCUVMTd14boA9PvqZb",
  "key24": "4tuho3TQkKhFBRFtRMcMbp4R7Y2of4kafJqRZJEHvwUBMPyQpD6ri2tt32T87YC1ypa37VuWLPKpgqH6YSZyjSvB",
  "key25": "4dAw9marBJq7ntUs4fqMBYr9Z26jEVyqGsWt1zEQhNnNu7stJ2o5YFx448A7EEUn7wKtv2ju6K7nqxCmvwEBXrMz",
  "key26": "4Qb3KXp8ES16XkeRg95rr9QZ84MKFCiNqsuqWYiQocuuCcd4WCijSTM5B6Lu6u7XKbRizC3DMu7KGaWNygPZttjw",
  "key27": "66a4znTLHXpc2MvPVk8oDbWvPhUdhrCWdhDbkNXe79BUihq5Q8eE5MH9htPo2zDXq1uyxQWsXa7vQMrU4MSSjZKp",
  "key28": "5w29WWJX7C2cD8afXWFyb2cFE21WWqdzf5GL8FB45eiUV7gsUsmt9Xj5GBRgnNANj5Z5yTeZTgnCbVVvamKVYWSS",
  "key29": "2xEUzT1sAFycLBbCKWeNmqm9dsQdkvhFscRBgXbSEQGMKB2AJWCLPHGHVDSvBB1KePj3n2itKuEhzPE96QKiHf2J",
  "key30": "5tWta7UnDuqEwNVEnUJFrbuZNqU4LasyaLG5jVeGZKadUur8wcmoaVUwp1dDyERc3QVzvawJNjygbvTppLyCFZSn",
  "key31": "4RFofTBzRvEjSaSFZS6z9b2Hm25eAaxNkbVhXszzN2mVdi5VyXa1rxWciuTnAejxQ11sbY6oVNbi8ARhvV2NjZzz",
  "key32": "4PrbwvABaA2gKh9YbqKkc3Sxr3t6UwyK5Bac5sT3No6Kt4VVWp3xzehrKr7JSqXChgub3aF6oc3JVT1qtnYm5rXM",
  "key33": "dXZrZX1zCNDSyq2La1wRRnf1YAdbgDcG5iV8CmPWH1HnYKF4vQwfdxep65kPDEsxGScBqidGqxW1ToyFcddATVF",
  "key34": "3eNEkDg8fyj9HQUSAS2YhwcKgFKtVGNhztiiN7pYEKQoH2kxVKHEFwW2mmNW3Qg1hGyLVDgQnRJXXAJMymGv3xd7",
  "key35": "41EzKWYPPZBYhx6n7fckAT5ZTykU8MzYvVTr6x3VNrSBzs2ViShhJRkVyuU3gt7vSFLhG732qzS7U91hL1LKZaM4",
  "key36": "VNExzGLCCaDzNLAQjwet5XWrKTZ21tq9yrSBEyNLwBNCUhywnmDu6KJFHUPzk6SmBhV3x1vqD6QurHmtx63QqAh",
  "key37": "3dXeRpzngzjNVnwCBocK8iadkpHkwyvYJyaURCck2yTtpWruKbNLvHLY16Q56fuPACHkCiw7jPBnexo8S6sgkUAH",
  "key38": "651RHhqVQYuYn2bgSJVMb5TatqN8ovpPvrSDvuLGoJkrYF5R96cLXJQKAm9fDh3pUiC1mZxcXKEkZffWSRMZtBNu",
  "key39": "2ZgrcvrNcCPrZLWPqTqLwBwsXspsJhAtXbEE6wCx14WFZCXmTRzMDaV5JjgeAH5k1uVWCZPhJPkZTpvuh7vkvU4w",
  "key40": "2jVQpVvV7vKePA88FxWWZpLkkn1EhVp7C2LCTHrG9pwr7LiN8HD8wNSzecsjU4wDGFaYsPT9GJU3D6Rk3u9S3Qoi",
  "key41": "49VeePfybBEX7FhQ4hhb13z8EU5oKb2hf5XMYmHj52QP4EB6HWCaqaFJho7MuUxsxkdAsa4Yi8ZG9tPFNjk8goQf",
  "key42": "DkeSEG8yntcXR5LHd8wmd4MQhfAGddinbqBhoAmzV7w58sCySWV6GYBgrV7cD99qEoz3VUkw1nXTJTPP3GKBDXJ"
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
