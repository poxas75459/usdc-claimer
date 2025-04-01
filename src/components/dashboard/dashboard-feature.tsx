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
    "47vyKTFrV695EuNdWbq7rnw3Va3YoKbVxFbvQWTJwc1nSVGcgFLgsR8HNpwTGENi3t9C4dxa4xqCri16ts2JFcxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbzLgSSESis7xx99KztepjKsakwd6bX8vGCn8Bw1xQKbczyomjKN97YKDxZBYKcyueKaB2tYouXr4yPYyZ9wV29",
  "key1": "53XzQEPMjn3jGWsXNMXjZdm4nH3SLoGaY53A3YjuJxgGbYhRPfeXELXptjVEf1dwTF8qCLYGmNTc88vG4RtyooyM",
  "key2": "4GfM7p9Hfuj9wtyGgcB8ssGhC4yBfknm8u88E8Ba6e1z27LjRcjqCgaHfnJMfLRtjSPvLvqUNtXx75jfFZGTYtcx",
  "key3": "51PGQrkMfWrQAwr7Jf3cgPKv4TMvFwWSt6LGzfntFtUzVwL643pfLV7brLJ9QRLmBKrrqmrx9EhdiGaWkeyTwkbA",
  "key4": "2tSz1Rn4ksiprWQ1TpvzFV9UoKz9VezjAxHfUVKwEsK4nVqLHGHr57ZyTBsVnWwtXLNNTbR8XXCJ1xv55Yz8eSFR",
  "key5": "5ouJidwduSdUNRjNGjQPop84hHDEmXHmosH4xmEdjj8wVBctxUjvTmd6G5Dnw4McDuCciYsqGDcYMwV7KzS1Hx1Y",
  "key6": "25JEuHYEmx8dn6cQhtPtPQu9qNWYimTvqLkH52hnYGAX3brSvYH7YMgJY3ZVZkb2AXNZfReUzvni877k8nWPLtUh",
  "key7": "4WrsemCoNKeDk8s7tCxzq8SF6t496QKUrTxWxL31xnWaSWo7koJPtqNgrBMCYZrmZ4fB8Gny3h5V8uVj4Hm1sN9r",
  "key8": "4XmEEUT5WzxTX1BWxgW7CJAd4FtGoL2kxXJXP5zav89DsZu1hYCwvSjJVqH9q2mB42qYiVEhLAFGKxu4RiQhsC7s",
  "key9": "3kxdZebaFLbCVG5MGyeK3yYz2kr6NnHzoUAwvdacXwSkFYYgNLqsqiv8Mi7b68CFPEqLD8fukMLoA44L2aVchmtU",
  "key10": "4tNz5BFL64ngpkDcQx8y9WwPTD7yRo2KU24a823t3EsEH5C3v6zCjHWM2aQP2FKVgjm1vxBsw1jbrr9PbKvawUkv",
  "key11": "YWENLcw4AG7sGzNBBJmQvKhaKD7MESgcc3Ek6nyC2hagsRmbbDvM34FG8bAzrpVc8edKuka5HNcMb1cP3hqjnEi",
  "key12": "2RLdXskPmgipJ8L5tXpych6w1kZmyRuEbffyRS2tyrrryEL2ct5jkbBbG2frbpgQAbWVfp5Bfv6SqbsQaBbdNckP",
  "key13": "2CsoYLa7Rn9pmcABJmkc59BW4NsRJZAaCLaEnCQiEqkVHJcJn1YpvxgKGHA74ZAp2WyPLRSijaimuZEqJ6L6MHLY",
  "key14": "25ULwLXNBMGgYfxWNr8TPr2cahkMPAuPFoQsfsjpE9AWmsdU41dgKfDmoucAEgngCjLBE6mDcQRtxav5dMZTy1bG",
  "key15": "24WknSA1BMsA1a5eqUF1AdKWft896sorgV4Xw1CSdbW7QvwbBWy6UExJRwkUPAj7Aup8SCXrXWrkKwktSSdzKxKr",
  "key16": "257t7QJBj5N31Ppi2gwpLXGrECLXPrU3StXCSdptJXGYejiHC2SFayQy9qB9aEKJ8KdcnNTSipV6haYgSrBqkQxG",
  "key17": "5EbAm7ZezKHFUkaccr28MPiA7wvtU18QVZgKJYw8phQB6HeU4SWULxApYcL9aoG7pTubAmR1ozo6rVMwAoNWqpUJ",
  "key18": "Vj5UT9yk4PShdTTbK6qnv2w6kK3mbwMKUaBzawosDE71AeLC35becF6yTcRFm8ywPDgYnTN5rkHoz1wC9jWFF1M",
  "key19": "n5Lb6NcCMzrhdqThKSty7R1BRg16H1n9Dt2SMJxSZMGhF3BJaogG7hRNXD9Mi2hPDqq5ncmZZKGBzRuj2EqeKsP",
  "key20": "2TEX96E5rTS14Zi8FAYpQzXPgbH8EH8uKfuhVX24CVKr2JujH7GK6qkn2xhLosPpUm5CymVFBHCTL9L1z3cdb3LD",
  "key21": "4ib4uXxp4xrcWkPPnPH8DsrJTeBH7dH7omE3WU4xTdUMEJX7E5HXHuHzoEjcpZgAhxUnzTg4t1RpoS9im6kfvPaC",
  "key22": "2p4D8DA1SockRcUb8yb5tXtBRmoAqa87UhGn3RFjc3pSb5DpKHL5LVqrfNLPvX1ay6PBG2A67UeyBiB8eX1NWPtj",
  "key23": "5SsRqk2QVszGFhR6VAnKwdSdrUdA6Nxu98m2RPwfLrPRnjz9eiBhRLW22khw72hGNFj7L4etc25VGkJv6D1Gkuer",
  "key24": "5oj9C7bBXP33RbWfecewMd1visJPXQgK3BQVRLUVv6saqzqTfZ9hUjTJu6CFDHtt22otDeJsgRwC1Tb5UYka81fE",
  "key25": "2d9mghvTfxwsJjefsFTWQi5kFiGwHwKV2vRcGZo8thdmtW2ajd8PJ5c9w6w9DyZJi4o4P5mTyj3Mbs4ftjYx96eK"
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
