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
    "5fPCeKMpwC9rbA5aTThiV5Kxe6uRDYdAty3dF5gTsBk3B3onrNWZpHtV8tfKEm75vSxBr5YAPL93fatj45AmMYYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xP3iTsjbRwoZBqm9CgH6EUWS69Qz44it6EVWk7L8N7Tcu4Z1ErAtDgj2KaFrf2q9x98BfC8G9Zf4bsVWCw13Q7",
  "key1": "4HpbwNHFTC6tNTNzBnp3KspwKS4V2uHnPy3enYP1EJ6RPcgiBSXdVad48sTNSX19FRtMS4urhUvmCwTvUWDPW7W4",
  "key2": "4jWLEh2CqgpVFe74ZnA17eJNt8kDs9fddC7UvgBagURMiNsAJmAk72KMcdkdYXR13gwDqXuaYpJ7gqkhtxfA1yBZ",
  "key3": "UdgEyDvD4RZABpjYiyAvmn56UW2CvmfSCcVfJq8ChkgN5xHNXx3hMeJ23EfCan82RwfzVfGdhSbVWhXXHZphCEJ",
  "key4": "3wwibtsA4JEKyD41MWKQ4R1R98uqXBSQMUw6MY2G2Wmk9KUxhHrjxvTS1z7HvvTpsV8BKTwZMk3oT3UQ7L4dYXac",
  "key5": "2ogGwSByiMKDjqfy8U94Ez1rMQPJkbNa2HGvkk5HngGuGdQoUJjXY8MDvPwFohPLYmrL8XsD9Dk82ntgjxQv42Gb",
  "key6": "1EyK4BJi45K9WQ1UGxNAVvPMEPTpcMSKmEw42GWzifR4EUekuytgzqVs4Jeq1gjTP3pSkA4i487fufEe54yC4yb",
  "key7": "5RuBCeYfiWzhytFPP68bPs2P7Yb14HmMGariE6v4EUX5uPz1b85oHY1Lo6qc5qTZoupSZPexaewJFf7UxSHhVCYS",
  "key8": "44UZCLcQyQPp7Eg1JxnyMcngZB6PJacdAFLcBp16W3MErrDWnPJxu4nPV9tgvR3Rpy4cXDWtzF11mqsbDJTFDWwg",
  "key9": "5txNXvc1bwjHBFd8YfmMN6syxCwCvYYnpEGP8f9voNPZicQtSPQbibncksxKdo5apLi3YPrqJM9ircVvGNkqrZu2",
  "key10": "QG3EammoYN7PtbMT5EvWcg6HbR8WKt3ZwDM5MbmJEWG721SBc2sKkeby4PryUeVb7WRFcmbunAmbN9pK6rP3iM5",
  "key11": "2Mdx5e6M1dF6cWn2gfhBGFVwRsP6rR8BAWBU1ZKpzpqbJaYowvMbniqpnEhVGW8yNNZeqMur9AHa711M6Rm5717e",
  "key12": "vRavuXbXo4ZW4Ywhzx9Mba93GbzFazBF33P9picxwqQxfoSNaVXn26L4Xg5bHAQ2jtZ3HdJf9W5iFZZ284ZLZxE",
  "key13": "61tJTTSepb4e1UFdiFFp7AP1V3DijmDp58k9APbq8B2ZAxTy64zfs48CeLY2fNLRgeP5YrtHu5qWwRANB2r5cuqY",
  "key14": "3PX3h7y44qdJLbPPZej6cSENTXd7CcezXjKAm1t6kTKkTbaQnEtgQxkGTi1BWtCfebMUMoCj8bvggsLLrx1p3SDg",
  "key15": "3V7HbpM26YfRhyjAqmEkFNUJVfS7D1oAiTYSkKN41aMcxkakrrpfy5qLxwznXvUsNrh8NpKgtobBnGDqkK9YRZmj",
  "key16": "59XCEPqBaKJyiYsqX2CsLEPdXf2W5MmomEZ5dExTFTCWQK2CiLPmawd6iB5b4H86uoAmT1J5eAiLk8cU9ccQTQdC",
  "key17": "w8bPuEV7bdUaEvouT3fPkVz6fvcGx3E9EdHiNcFDwBvGj9fDkk6QBZyULht9CDn6biwNHCMBFwmCgcK8kJ5NPie",
  "key18": "47EhQzbG9xS6M6qKVam2ETkrssf8eg9S3Y9XcpzATrRVftySXsK6oo8tSXtv1S7pdWjUQvzpms1PpJ4am674t8vH",
  "key19": "4gMMAikSotvmdpssJrC4TGa8vWjJA4ybDtfu3jCitbZMn6n2YxbVBHiMTxE2UD9FNAKjE8XrZAACzwdCWyS3yaKF",
  "key20": "BX63dqn7rTKnGjVH4TqbJdm76ADpdv8fahDrLy7QhsyLRvM1a1oCkdhJCNJArVaYEcLzThdyJ7Z8PfNxc8TNykV",
  "key21": "441iG385JMG7eSM8b82omEsUTBbnPHxx7m98BxuHAv1ooDSz4e25ceRgjda2Ge2SXtE2NHqNhdUiXxPKmw96W3LW",
  "key22": "2S9FmpvxHAJwmfeUDGLdR3EiQ255QnKcUcv8dQgAgvj7EkmFfwQ6hAJST4kNQ7nJrmfaFaeoQYGVU4BwZxM74Qbp",
  "key23": "41WksYgU9rXhp5gPJNBGyrqxGgEvsP3Ec52U7eJauFTj3ihppA3o8KvEZAahXTz8AFXNZbZmRiQun9gNWS7CC6Zi",
  "key24": "hsVVeLBbCy3TvtLoNxRAYmoCSm6Kw3usR4UkqGauu8D6UAvzSuCMtu7f2NNzwV79MLvmdnJtBd3Vy3WBeLb6UVt",
  "key25": "w93Ck6R1iXRhuFkxe1QzHDeu2c12tuMqrGA2XLaHuJQp6vg3VAb1v6obxu5oswR1z85iJC6tQG8tzqp4dWCh8wD",
  "key26": "4fCU2GESi2Ucn2Y7HTZtGjSBmCfXw9pUp3a9GjEZtAbnqRgaCrCk9os5SvPGDTfPz3skuGERdoSwRtgjWmwgndpE",
  "key27": "5rAsT9bhWAZiRwsYC61gJWHBoSvGavaAdYJzZUtk5LVfJW2rSJpGWqZQSiVrrdQDGkzWFc1KhfCU7iGe6qWsDsV6",
  "key28": "wiDFvfkeD8S1EdeJcCYQmLD4UcumbYfemDVjFCja5nNSsHQqBitBjMd6Vi9Qhh2TD3YRJxfBsAZQ6k6R7G8g1Zm"
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
