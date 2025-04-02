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
    "2zZ2M5SZb31FetdJCc4rEkNABk7nMP98FbBGr6a6w7fAmLWCj61NkWNtv39uQZiF8kvktKdxDMZWjfDmzfxwyKFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgyHc75QbCjGduFdqNhQ8RnrkDBC7zUzMHWAnnoKnc1PVEkdRyvu1mXz8FF6JHziRC2nHcV8iDZYo6ouUoH8WjC",
  "key1": "4dUoFM33Jx57deHqFh3Vff9PS4zu1DHxoqdLpMafuY5iZopRVe5UZVUNWaotVDvYAeHGbB6b1vFxwzdMyhXfG6Ss",
  "key2": "3E8yPi6Hc12b7h2dpFDzmWssahohsPresWL78V494AWNyfTjXzEwW7ZBV53t2MJ8bfACFVQD2YzLd6B1rBUZBKdV",
  "key3": "58sz4yw3PHHjKxWgCqwNxsZTHNBUqHszkx6RFmdAEQ4rwsEY4Cne19DTbaTctAkJwrLeVebJt3RsFd8FhtLRNdro",
  "key4": "42tnpD6nH1aCgM6PT1g7NUmQwaSTuHXv9yXkUzTgqHWD7tktKkVgLgk8dRHW1jx86psf7hrEVAkWiwK41E3cvHL5",
  "key5": "4pZX8iyyy87kur3D6VErwVpGyjcYyHtBxnjtJqpnsXo5CAYVkij56jt3vPhuiRXNC2RgcbhuVBDMkYBerUMxBTtj",
  "key6": "3mUfDzrd7jXzbbVeBXve3M2UtHYgdgnGJNzPMUipXdnCBzkXTNaWTjwGBbRjjndNH3ZDgT2VXZD83zVqPRnVRmmY",
  "key7": "Z61MWQxSBeDWJDjaM5i7gVoXTUZbSQz4ge6KBzMRdFDZyq9CbWG7faiDww5S4wze3WvHN8PewCeZRLTBCnTmckd",
  "key8": "4VA9e8MEBTfbeD5vpWJJj7rDy48u6AmX3YAuzJ7F4zSkmE7aLbJvt45pkNSEgwUGmMhdrUh53wTFgtnqrsgPYiW",
  "key9": "Pdvt2HjVHxoaFinVTC8SS1Qbhgh6zvcFSiEC4SXJnDFZ9Y7avun1YKJy1ToxLHsLZMUWxDybk1FFZmV7A7zsVJ4",
  "key10": "58Nkk5ksuUXgXsB8gErceF6wXwVqbY2o17uDm3JXqJMKepqSZJVDH7GPsTSbfjmbLNay3KGAd8ZvAYEwsYsEGJLd",
  "key11": "4ZQWdSU8c5mhW6MoruxKUiwcx8qpeHqKybRjQRWJ2tJBQJRV9yyhYCd96Z5EYHK2q3BjHfRhfmyiTfLtcZfmmRbZ",
  "key12": "p5RrErycD9ma9czcxZi3NYHCX1ANDp7BuyzM9jM4f3T1WwVQFvh2aDoiFertYai3ymhXaheX5ktUDb9CUzeZK7c",
  "key13": "4DdkAY7xgkLRrHJRXLvkZp2JyrthQ9M6ZfsQHDSMvRnc4HKBkQmh49n5R6cKcT6vovNqx8BYc65AcmGg3vsg4S13",
  "key14": "5Aw2L4BmUif946i3VBVpeuQ1kpPSjAwrFfFkL38ZJ7HLeK3587C1zUjZLgQ4UiV8fG56smufLVcFMz79QJToS4C8",
  "key15": "3fSY3SLqGLW7JcJK4ZZkb9DwShTkxePb2ZJCYve5KsoCU57zxZQvjvQKafFbnhYEhZkGFgwHZCzhq2AtYUwPihVi",
  "key16": "3QPekCfVCv5fjWpj16adA42iwBK3AEbVL9dnSkreWRrdbZXNMjmkm2GYSanXfAE8WBr1AaUbaE2LYaVCQtHko34Y",
  "key17": "3YR4jTSZmBrFBnwhELfAHgiV2UgS3btSDd7PL3Adiri7ytbNyCC3ptftM7uSN5tif4efdktfxEqxxMEJc5c76EUR",
  "key18": "28oUXF2BbEbL9EJCCsq8BwZWUbUvuXAJH7yiTjkiYAWBPXyYJSsUv2TGugKNpigSa95FNebkQ3H2fQfeuryZvBSX",
  "key19": "1Cc4fkTwSrZP32JDfB2S4PRwfuGLEErN6J9YUpab615PepWKEBb71PkKftBAw93LAAkvuaXJyCCx4kVP9zgi2ND",
  "key20": "d6EBLjCgMpv5Ym6RhunHeKgc6EcGvWDQbyWq5vHJAAjegfufv2yWnrfqYot4q93U6CQBt9v9rmpcSzLPu45Teo4",
  "key21": "4eFMpaNqUzb5wU2zbMd43pvVwZtLczSA8MrEHArK5xWkbPUVjDiQBxE6Sov1YAn1s12wsRh6hKR45XTHX7zWM8T6",
  "key22": "5umEh6CGamQoZLB5NwnCM58gQkkB3FFwfNmXrxcjzEBBD15HH4Lq4emjjmGy9ffz5zuTivbEqKAeKM5hbKajaDxa",
  "key23": "374cn7dTcQAdkJRbz9CNzHJF5xT7t94TkGLouMdshxRR3YtosTe11BuCZDnZbVYcRmbb9oNyNSZxJpsVVM88czKk",
  "key24": "2vnbxJ76GZyPEjoot5Gerym8DYyZMBPXmLmpHaZPKxSNeUd9mMqtxSt45yWSQqcxbkKZKxT7MDmqaSFkgcijAYTo",
  "key25": "3NcC3xA4kBotDG7eYAaFfaZYF4MYgLQM1MaBnL2pCsHQgRnijxkTK3brm2SCvSaqT4edPZkeXwcCuJ6VyAL6fhsS",
  "key26": "54k56Rrgwc6awWVtZUtz4CV6DRyxjbt1SzXogSWdJqCST15qZE9pVZZYUw1zFgxb4rRGRnG4tAb4j1fZurmoLVPS",
  "key27": "5b1XR88bEm8xmKo9bf3BvPBf846NYVwczwXqVgfFXQuBJQipmibzxp1r3b4SN18PzrjGgZ73H7JbMUw2U2jTNwB3",
  "key28": "5ShgpULTrnWLkE24KPwLs4pyWdX9tj7rpw6YpSK1NZopEHs5ksGwBjkdVY5GBfR7p6hXSMe9fR2YBSE6qgYEcLK9"
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
