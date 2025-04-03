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
    "3g82jUHzdpNbJKsSuUunXo7Ft6CQQSKYQZHHH22SrjexCeaVJb9jssnjKpxrvvz2HSyxeSWRpu59KmyjQ3GHFxpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSByuBtL1sDeZPpXUQ3BbmC38hpXt8wzqrs2aGuiYLM8YwiWneAoANCoExFHGbZ5S2VUdAQKNVHX9q9G2Kzoh1L",
  "key1": "4YSmXPnUG1i4ZP8uKbTCHthDfFC78pBZELS4B2g96eLeNPxGZ2a1HARvvF73n8ANiMVWXNipwgxwkmbJ4311gtvF",
  "key2": "5frjhMoewteBb6ucx9Qp8Wmuq92cmgmcyjSRLBMQVKsBNnnoe6z4ttuyvJWvoDxddCFsXGCiD9WfUVxaxHLpxa2m",
  "key3": "58VEoaxBZYkH6zrY2Ef8XAYou8Rqnqt7XesqyyYS2zUZG5STXJaUVJtDe1C9f3NaLPQES4eRFTbjfFtCDgL5wfsT",
  "key4": "5vqTYc5tXG5gQfrmb81R2Ng6ra6X9MxyZEDdpCzEsDzvyG8gGE5bTkDqqWCmHi8FAAjU7i6A4vqFK6sz7MwPuY6d",
  "key5": "2MoGNnnTHbZ2cL9RZ3DWnw4L2ecKQ2kytX76SDGx3MyhJxDfNyfZq2DR7aceUmpm5agZhRmus7y7YPh4jufSpQuY",
  "key6": "3YTB3gYaH1b88y5xKEL6g5a2XfbsNa5Ck81VvJbDJUPDBTkfRGxxF6DGXFWQTgnfb99CiGXpYTzLYtA5xk5jyJKC",
  "key7": "3nNKUXBwSVPDzSSt9MekyxQXgxVmcf8mcwatHzukgQQGzucfzDVNKVUwg9RJVU39L1UfL5Jr7RBj5mksv7AvSELT",
  "key8": "4qPXZJVNjXtdirB9qSyEi4oMMzJPBJjMisA1NUymNgDw6n3tRQsMoLwGHuiRKSsNWiQ3KL7cpqtbxpJxn7qUV8gT",
  "key9": "67YadLVDvtMHZvuwEgzC8DshLTvzFyBZ7SryH4vcx4CwEFCMpo7erUMvriNsyLBx2y3aYjiYo9pY8MX8rWas7ui7",
  "key10": "24tC2s4AJMbEPPM7EtLQwnP3rmbsYDrPJmDwNaWGwa3CaGR4CBqEkUH7UAtCfMApTCYitf1izyyFwdXyTHbhRnya",
  "key11": "2hXoXHxNZAu7P31VSVCSN1frs4Kj7AQMrJVPfg9mTr5HzkrkrKCDAvQsS8uNZfUppnmtYLgHFiwoaYcmcqmzioMP",
  "key12": "4b7rk6KU7z8FDn9NwRy8mVLgzav9HhKCH6q3LifBQ2s8HyAJU8BZK5ikRzmKuCz2MYm4LVzpGCWkksFDJmVA1Jzw",
  "key13": "yFMj7Ci3YvvCm7Fk95AnUP2t8dL4J8G2Xk6tGJmutgD5PqAPsApj82QijvKxG3wwGtTbNdd5Dg7zGep46R5Po1b",
  "key14": "2eekhcsd1qupXtdo2GZ2wA1e2JiuY3QBLkHe8SfZrdxfXw2Bhzj7bfibUZywF8mdAiWAMAna3Nk5iuDQT5UQGS4W",
  "key15": "3DWuctdtgiy7p4sKB6o86wudTNfdYadzDTF9VMsyXhgmpCobegXb7qNn5pQfS9AuAoCCDRJkayVuLii2pJJLJg6f",
  "key16": "5a1MRDBXmLJVoDoK3cSYckNMr9aKcP4uhunzSdxk9BkrnrxyNtYNbUNSjiS2T2KddWyoy9Qu7pSUi3XhXXBPak3L",
  "key17": "3wAescxhNQJDQLqzkCz5HniZbaPWcpWqSrzfaowKdqtUqP87QXUMSUnMJX5riyBbhxJq5x4ubtfJxT9wcxakCsQ7",
  "key18": "5nBbajmQBT4v73XPsK6Yzt6CRPdtksjUD77fCRYXx1Bf978eHvvUJysnh8jVt7DpMxwTtMYsMXNhZcMWkhUmcCHj",
  "key19": "4ZNSZzUvzkYq8FBZxwPDB9heiPy1rjrYDuALZPW6z6Nsd17aqVvGZo2CEAHwWmgTBhw5BLJnE2EKeuqeZYnpVBXs",
  "key20": "4oja2hd5fBCVa6MKyEcrLGDGKTnvTtX12JNC68DR5cLWUkW8jkV6v8ptuYkqyFP3n39dxwUGAXd3YsWxxJVBxuz",
  "key21": "4H1a4h6JMg2DboGXZzTm7iusHKjYta2f4Ua7g31MtQkqHXdPyM6q1RXcXpe9tGzhQUzw74xQDCLAaRKeECczpr8p",
  "key22": "4oEKjaUNvxq9Z2tRb33NxyqEaJqe68Jo9CgebhbKn1mLjxxjhweZnNfEkLKSAXCx73R2NW6uHY22d86oQyHy6oXt",
  "key23": "4T6VFKYdNT1yeWsYsY2K6Wnx6YyxGNt3BVhSi3kFByPLC3YvdQhBMji49pVkUaM3s23mQmR4HRuRpVjcgAALnCjb",
  "key24": "W7d2zED8NMReqpzbgFJpvjZrT8EnjBtKkmk55kkaU2x32U2y9UEfkXMT2RMtLcvFc2JNAsKS2B5EhMktCKj6sQr",
  "key25": "4fuXjkPPZNn1xsmjmiGCzfYGajwRXnE3Xa7Fp4NdHzrqabVVEf16R7U8gDaHRzgZT4yrZchRaNB1mNk1YFR6ASP1",
  "key26": "3RKwFsSq81FR6V6GqLEyqr9KBQS34KKgYLguS4om1T3Mf6gpQz5US1vJEFhiRfaqaZJJ2XoY8gPoiDPSBVNf1gVp"
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
