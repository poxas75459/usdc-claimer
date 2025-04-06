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
    "4KSfQb2ZuqJWVP8Rh3s1tBHYUm2bJSjGUDDocFpVBUNQUGD5d6gFQHyMpdPrJXVwdu5qbXn49aiy7dJe1t5Ztxbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otQ48tSL1fqZUruQpsvMLsNpqxjPz5YUHpp7jkBGz2dHxuDjaEQTn41FQH6M23vwfNDoQiFQBKKA2fFVqKUUxtG",
  "key1": "5hwNtuHDc3YBRi9ZNX3JquujcDe7W3aJnvW4af3GoNnZNhcsQ8ke3EhKtZmN68W3F3ZKH7rqamv71WuBE9N9xZM",
  "key2": "XUCDy44pLe6CDmV6TreXg1QtiYsxsR2dfho6W8BUe68Hisc3VrcCxiTXo4vYH18hxGSpRYNCvkufufwpxs1ixbi",
  "key3": "5DtD69tE1JLCqHERrEBCUxYGTXCvrDs6rSkXt9RoK8Grwm6jqPmJYVvZH578eEciUmxfmBhS4k9cXD9KsTy63MQ2",
  "key4": "4eqJsqmpprwjzwjHqnqXdDnYnoabzSighKKbVyp2FTiEDuDxaZbJV8xducCNwTBEkc4MkRje12imL2EhyzTpCjdb",
  "key5": "26MZTY5gLRDzp524t2iq415ghertVvPnfgkXdn6RSccT6EgQZCGQ5smCa2XYWQVwptf9vwxTrMLdd4iAbEm9zK5H",
  "key6": "4kU7fdFrekVyKq7w7Y16oHbm2yyvMMftiy9r14XbnrZ8HpV19TP7KmjUpaR2bAagMdeXw5fhiR4Ets7SPcAzn6xq",
  "key7": "5BF6mWp4JBgeg4xfDURD9DTiPfMu1xXS4zg5VvjmDwpeiVRjTrMiYknbXcE73WvWyQhxKdSR6F8fnSsjhZyuMwGA",
  "key8": "CfTMDUyE9T5pAiihKjKwZRFSjNVtJjfqubagAbPg7Yws5JM7bvQT7tifK9zsHiXcoYfYBe4FBcgyKGfiPhjZ4r5",
  "key9": "61s3r9G8QspzS6hypKe6oVRzZMXiKJVoE97H7cxwCYExqinTcoHJYG12dSTxgCvXXwWkfbJW9ERWXGeCiPUvm8d6",
  "key10": "3de7CpPCbonkGzqxohYFy1ZBsaBem3LNeKRAmkCcXfii4bt8mrsyKJaaJ9D2zmXznJswKeSiAvXRRF69uPydgFkv",
  "key11": "2SNincYMrADvZZitg9CffKxMAaggiU6t4t8fGtPoeAcVjZpHJ5X6QEhgcDgXxwJncSJcfEdbKsznKvmD76Wfp5pY",
  "key12": "2Xpkf2x8Ge1Zcu97QYoPwzBHbCSzcaJrUTKbzmujgZRACFpM5jvJyzuBbMsSVTQ2DtJRiiqxaAHB1HjsaiuosfA8",
  "key13": "4w3mFW4N9gimG7w46w5oujfB3qF8QYfhha3u2y9B1JqeoLtv3xiVmnZmi7LgZjCU8HoQ6zMahERXo6rG9AdDysgX",
  "key14": "2H5htHT3AS7BsGt3HUBpwiUACsp7iCFigUPefo9du6m6Sn5fF3gWUmZszJCQZYa31PupxCbkUs3k5GQboGFQy7NF",
  "key15": "3hiyoTec8WARW5BVt8UxwxrhW8bQ3z49xVa9KVphYCZQgZDwK9vGjv5Fgx8U1BYeCgkmWv8aEzcXD2X4PUKEQtz8",
  "key16": "VxsmeyhtiFh4tnmTKV8vA1Bpm5K5iz2QfDDuBinNHG3skpq2BhxJFVwydDbaDXWfpbnGT6hUMsyMAnyLpcSrQKq",
  "key17": "4D5NGs51TgPpmQ7xFuaVrNkddKaobH29W86CKZG7zgyq4Xv3RDRiKeA7Do2MjLSNBuNqa95B36byqa39e6sEZZ5H",
  "key18": "bhwAjo7JhWBCcmZ6FEtz3KD2hmGvdzZXcyc3MSzQTQYBPgnbcrS2Y2cRYn5du239NEUEU1c6So271dyQTAJ2BE9",
  "key19": "2NiQdQTbytqLPvdkKm9isKpP9Y4xZVN2FM5v5kpbw65GPuBWrYrFw8h5PhDN7RfZndt1ej36Sb1xMRyPQpp7Lhsx",
  "key20": "3HmRZ13vDzsEiJhideoZKStZuUzRXsknaPY8VssYcejQxgveUAotqfmE17Wxu9WQpJL8FZwyDryGybEgVgBbhq3t",
  "key21": "4ycUTpSKQ6f3sxUJdMRVKsFSeHPpFzyQnfivK7eNaimNaLBJeqMTccGEDKN1PpGeVfZ4wGDkTZgYGbk2ebkvjJQz",
  "key22": "5FXaA2LvMYCzaXm4VN2PtaNJWKpkmWJr8p3g7rSLoAhSNTX5q62DUtpJxPMYhw2mBEzi7ejjDAudCkcUH5vctm7T",
  "key23": "5iHwLuMM8oQESBcvLncszKQJqu7JSJ3dcaboK56kbnipg7xeWapXuVSKfBcvb5RGPL517vqFkjMSMrT9q8cR2xmu",
  "key24": "3ccknvy9NrsMCXS1yU7GTC846uyhEC4SxiRjp48kr5fRbaRYxQAeT7eXBwZYYZ7SyYD3GveQNd6yegqUWTc4Qoi3",
  "key25": "42TZjBLJTioW8ZNpGHtiNMEVfuP8ctD1TLYvoKpvZknXd77nhpFDtbLRq3m8R4ynAGCSDN2JzHFSq5fBWDApoUKR"
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
