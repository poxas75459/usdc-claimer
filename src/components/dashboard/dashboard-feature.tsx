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
    "3xXUyp2YxqrJ5wpJVhUejQ3ErHZT8DHXAQaoLKMuLJfRkhTLNLyVHeskPifGVbfDmJsagYrYyZMJrzDYYSn23KkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxcVnb1nUx4ijfrQP3eqKUKGdMMoME8CuxWRnMS9dh3cCdMbMyARxXnTDsTPb6pNHEUYi6hgshfBeYaXWVa1g2p",
  "key1": "4732PDPsSN6m9y9Ce5mmjmSN43ML4X1A7xagb5aTrPBhzi5Wz7BCxp8VRYY14ifxvHdQmePe8HvqkydZd7gwcZvQ",
  "key2": "5i6KW6SSEvEh23HwkkLWx1515f1K92Z1xrr6hnw9qgbhKc3KfhUKDihHgRkfnxhQfWzvn4SEgSVC44xifoj5PYik",
  "key3": "5GUWcjHq29D2FfX86P6FUCBK2YuP9AfGUcZzFC1NrjRZR4aBJMDtYf3SDT7N7Py6ramH5x6ANsiNh4ARiJJXoYU1",
  "key4": "4fVi7SPwAfrrJbud6URRBYx53EB2kqqj8qTW35c6reY94bL5ozyBjGVasp4popDKymP5qf6jNfXzUiukn9XQN4vp",
  "key5": "3xk1ZQv8k2gHEbqNqWE9mBGggJquQLjjrkcVctdGvxgt5pKHjEF41YY6QX9SsGCgej7eHxXskYXqQriEVPBAsope",
  "key6": "3nvvArskHT8DeDF8kLHbHKRb1ZVmszcVZpCWfCUV7L7ktkathYawCwoxbCjRMutbvg6bpabas5PhhxW5TFqBVK9q",
  "key7": "UWz27bt8P7u6UoH1HKwHct35s3xzyuwfkQ9uZ1bTdN2jR1WURrkjhgHfarBXWbTMhwNcFoq5qWVbPGv9K6MaG82",
  "key8": "3eDw2mYnL5vYdAX9Mv4CAFbH7KpsCNwKScP54BjqtYu6AffUF6HEFsD9UGyrDeiWhxaGcpUnZKBYr4iUeKkhbRAD",
  "key9": "63NdDPBEZxQNubtt81PSRrKb15nvu7M6SQ8nru3wuQysbbtLVgLhKmk41UrD7c1iVo7YQPB8cjcqVg4uBEDvNakX",
  "key10": "2rKEYVcFb9MNiqF76zCVXRpMRDhp1xT5nXkZSnUyxLG31XGduRonBr7uobYmVv3hs4YMjYtw8B2DkfctBUka5m3z",
  "key11": "2wJQrANE1Q4pF3CNUMX3HqeqSiy2BhfEKBvGhkz9D5C4dnz5vN6jRGzhYe4pyQmZnKDzSduUbC5MHtLCESdvFSEH",
  "key12": "4XbmeXKuk9KAH3PhZY5K1qC5rof1AaY6djBfBDvyALzXtLjRcbo3GUjjX2LCVChDwXNB7VZE4qCK1hhqYbvM3hVD",
  "key13": "CeZVC9XCrwXFjYQeFn2MsPWWb5SSSw5SGR6B4nGYQMP7VRkVbtDRQUvEmBXU8XE1kDKmVFo3sp45swfPtA6TD1G",
  "key14": "5ZaNLPDJStYbjonqsiXhasCj2MosUYUgZ42GMPcdQMHW32m9JsV5m1irYjgnm3k7jgGPE5hmWzL4EiuiAQ3m72kR",
  "key15": "x7XrDzo2aGmqxXTPFWv1MBYWQWpVqJomAbZda7VTGLztUfvQeK6rGgmCbY2M3GSxwnbBWKvevVPA4jfWuVoZMiK",
  "key16": "4PcsuShxBnA1EkaX8TWN8YmN2n2vG2PteLXdZf3Kcwd1uMcaq2iLb49jPrFxKx5NFdDQJj5iosYGHBrkLMGsNwoV",
  "key17": "2uMVrbxwcbvi7Wwwt8iXAEZJwFe81WXSmd1PzhjhnpWrzuL99oMnnoqY2K4w2EEPAwKZWi1qZVgzrBBLfSut42pZ",
  "key18": "Y2MscpAfTZzjybNpKEDfnj8dZT7RYn1ABKUdMLRSmiXoV4J5VBsw99GbPexCtD9UwYkvjGW9betMdDkFczD4AME",
  "key19": "5fb34s9DRqMwMAm2AXAdXLyF4KvWhVq9HjxELa3s8Hg6yhtR9g4atAAadR4NrV3ne7cvNtUbxfCjuGuoDJ6C7f7J",
  "key20": "3T6eFQDWEZastP5BK9JmyoYghArRUaKy3sNUhJo7rmic9FoWishwVj1TWpdcpwoi1s5gVrBdKBkgNpKp8jFyD1MJ",
  "key21": "4jrbpbe19PoGwFZgMGc4G6fQQT9jG3zZin3UPKMXsZrys6jDNSATbejfjRmwf6DFbaeR1GDEqo6furtEgstqFEFC",
  "key22": "47ptnuP9tTUe4UE7uoXCyzQSVY3XCmvA4jUtqeEivNDdN4ER2ty7V4RV4PbJmNrqFUKJtSM8FvUdp1jJn8z9AanR",
  "key23": "R3Z1xapDzpxeEGGR4Cwjan6RAYSLVqLWJQ62vQMzY1fZPUHW9y4VVQ9Evtu25JB79kzULCEt2BWHx2DphDqjMxz",
  "key24": "5mJKm76Q4QLH1FSmak9LtrTN7mW64Rf4ibGGB15LX6nFovVqZafGpk8wcuX4y94iJ1WJtURzR5VkxwYhLYKhzSTe",
  "key25": "Vqm7noJFf8C3fSqAvBeRLSadJgpDK5G4sCup68f2ZMMnf3euk4Z6gqzZjWxpJpgQqhARGxiYR5bf6WG2gtrFRgK",
  "key26": "5ciirm97FRQRmBKMG7BKPY23GKuyLMRaQbupM7f8Xhoerk2Czs3JmYrnQ2RRsY48eqeaYwUAXuSqKmCakBqruzD6",
  "key27": "3xg1HoppUSMGbnaJJq6N4mKZ4VpPWxxumC4JP7Y8enmpc9FiNhWSUANjsyhRMVPveofn3jHYZQvX1CjGggRjBgAN",
  "key28": "38K2inEzDiLRvDoWk2KXFBcdxeBSGbcb4X2iuzYjsNYPfSNmkPYcnrLYDJiyW7YZt1sgA3iF1oHKwe757eehtt7J",
  "key29": "5WSRratkX3T6ZMY8CqXkRYYXvsPbhx7TYvXCcNbm9FNTMwDHHHnLb9gCf364CHbzVxDSseXK4pMb2qRcAEjcXaDc",
  "key30": "q5zsQsxScLhDZCfznFsUAxbd8YV6dWSYu7BqQELMYiSsSaPFY8e4ke9er9NQcaUyLPmfP8S4xqmWyAQLN2nBG83",
  "key31": "2YYwTG2UonRbk4MbZetVdJJxKFcPeRiT5PPZHayAHwyKBQvRorTWekZtznZnmdVB3oc4kEhdXHXGJ7C4mHJe3v7e"
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
