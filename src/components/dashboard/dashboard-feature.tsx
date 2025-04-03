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
    "4BTvh6oVr8JVRf5XMjqnJnSY2WkTLYg1EEXtgPmLWYD7bisdDMDS56uUPa9KJXH5NgTyyCb6rogb9QBeFUFtNFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9R6ZGNZ4zXUJ65kqxfjwEhS7rErHY1hoNGL74phJqyxTHWzYRRuzH3m8M8UU9MoWdnDUGBZ87cCHpom1iVaQrt",
  "key1": "2nrNHL5DRHWRxvEWdtbfpEwxAf2MsMWLaMNLB2sXi9Av4tG8dkYjwTYd9Z4nLEPWBHPpAFjK7ZwwGs7dvaV1EkED",
  "key2": "5AWFfzZBypLhxFrHR4rkHiH56DCFyK9oa71AoWr7KBvtgcoiBmXPPWDWxNGXWPw3a8BLmcNGVdX2nbzC7fgz7eSd",
  "key3": "pSTfDbkiVMDuwG86WPospdZtu678LNKwb955vcJSB1c4U5bo6xfccRgXiovoUBkGqNoSytx9H4kbCn1NuECs1NJ",
  "key4": "2Ae825u1sSTRZpqpg6zt9TnUm97AeprwAhkfej6DfixUexHpBRKJNbxjWwgDJMXZ2duuknCSbgWJ9Q3qDrbxjMfx",
  "key5": "2xrX8bsxUzcxqL9gRvsxTuGjxwN5h8VecSmPtaq6UoqPCu3wN4d75CuJjEbdumchovrsU5vRQ3LDbirqpnhxi6Zy",
  "key6": "x6SgoT6Q9usSshS14Mbp1CNWpSDmiURnLUbUsiMGFVaojLDKwqsLtYHEb6wvsHd3U8QMhXoEP4rnLWR1YB3NiiD",
  "key7": "5ppFNFQg4L18nmu8tathBfhH9Y6Avzqz6PVaa8GHSQAgA3jimBkdu8jJZbUvdnWf4zXWuiJAamos3NGKdYK15eNX",
  "key8": "2XUtrjeKMSfCB49rYAmSttA6VCHn7rvrddNuWwEm9CYNTTUDZi9wHj3Ai1ajJcCyuLNG9HKyrBerDuJNZqfd6ZVv",
  "key9": "4fzgAbWBzyZJ9rQxS6gebiD81kUsGYyL5K3EhondhTA1v5TFR1W5wZ13ktxHKBr1n18wFyau8f4EGVAJSPerEb89",
  "key10": "3ggUcSJUZXDo5NYABaoBaRGeNNUaVtAas2FCr3L8K7ZciBLnKu3X7LXDr5WoFVwYjy8sVh54tV791NMVY4sYBtm3",
  "key11": "Md8kpDZnhYZ3vYkuas5j4kKBzZ7du48AxNgefZk1gEyyvJAPzeGdFRZFeu6KcqX9ei75CcS8fYkVJbi3v9XrZjS",
  "key12": "5DfpX5BMFA4aWiy2nFa4SabhqRaMSdLph6fYrJwgrSTwp4fqBgDJCVhLemMwBBzXjhfMN52vM9JEhxy7ykHKvx1W",
  "key13": "wcqWQ3wV5mZyG5DgLrS8NWmTvK7JR3WYwZTbP2wdfb7wZ9rEpdBAvg2SfuXqjihrC2vaTxvt9H9R67Uvusk2BKC",
  "key14": "3QEWba8hVJ4mewxAf8wTYPJSH7ZxiwnKnDrWYwp6Gyt1cyzggQGPymbX2xoJpxp8CCmSNWNo9ZVuA3ZjyAyAhZ8V",
  "key15": "e4W16WxCj6kN8zHe6R9ZHCbJp3ZpydgfqomBxabY6rnkp3zaRLJLRU1EsioQaWJHf8s8ufGysy1YC4xCGLrn2zb",
  "key16": "2dKpEBxuZDiSnxGJVnGyD6GSnFzi55HTHV4uQunr2MVGS996bmqnvNoS6ihFLvjuLUCHsaStLd8Xrovg3JV6RA4s",
  "key17": "2mhw9qAYAsvaGtLnGb4x7xbQe4RhKG9FBNVxgx3K37urqKv4QHm3dDLBwbcUhVoBkv9H5bRTzaC7DrbQ7EEgGaDD",
  "key18": "Ux8Eq1iT7nmvyv23eDvHgpEdnEtNxpUviopuwk42YwNywYvXfAV2ohKKERc68rorMhN3PdThiZz24J5if4QwE6Z",
  "key19": "5wzZ1JyUesRJcM8Xv3WahSYKGpwhmtigZNnVukBCcGoqKMF2cpsGG6vcdZ4C4wpG4cLT9wEWU7VHvb6653u4HxQS",
  "key20": "4ZWkdK4xNxKUFLohxoeKrzeQonXiSNWC1Rg6NQb7XUWgqU8Jh42R6UXxbnmaNdEz1MC7W98yxKGeAcE4U5SiiMNv",
  "key21": "25ygdrAANEpAYpdKdB2NAfKhE1Fz3NN39Kzwsm1tWVS1F34zxtDa7PLrV4M3TegfHfCQU83wXfEt21zhxk6MqsXS",
  "key22": "3bczF5QJENGH3yqamsx2dNsThjGmZR85AfqhdHBxktRPQ9SbKik2QLzbdkGTRnZwp1RKrTyQej1yfgQMt8rQxbEC",
  "key23": "4Vc1nBoBT8bKFi6mRNp3aCnfEiyQMVVLBfU4auSyLBrF1rEhZHM6gkpHzQh74yNYGrEzbnFRLHsxfEhuizkZvn7n",
  "key24": "TnNDYYSsuhkvatLF3up9KVv3J4RTBo3HqPHRY1a7FDxMfmzUH3oYCAvPLBNNrdGS4EPjbJEYTVvzNfHMndxUSUs",
  "key25": "26yoqPkRmqjjnxwMQWw6RNNLERBDqaWKb2ob65qHfRhgkrjapUJf3v71BnThyzqk84FfEChzyRsX9R74MTNCSThu",
  "key26": "Yr8GEFAYsvFkdEkiWocabYvfaYZnC5NGPcWbs6oEegkh8X1vpYJycuDUBuTy4RPk1PcmpKaCYRtBRebjshgP7a7",
  "key27": "pZiahQeGyarU8QiHJi5uszgpKzAUfCoa7p3vr4kp7w8QamgvqArVowim2VYLmXH8eaBBCKsYvv5LLuM2K4SSKRp",
  "key28": "5MJHG6Xyuxqt8cGrL1zBHHbL1yedNhQntJYJ76QLP7RLA3h5VPQvPVtpHnzXBEdwcNgvLPkKZ79Rt2SLWuXxDCew",
  "key29": "5smaCs6mzc8sPxb4GNuHsKnhnbRmZG52np7tNmSKf1GsFkGQFCybfpQzPZzWHFERZWhMNVSMttiSptD73s8AWQaY",
  "key30": "5wMiETc8no3Y4pNA7pL3MxcUt1MhP6iAf7jAfnTVXTEFUAKnM8kYNHCSR9fESVLANP2LYB97Ax5UExps7TRF8zMJ",
  "key31": "2JBfrZ99uwQPpkRJnqiVVM4igaZsoHEMsdgaz31vkRhEDJuFWCLpfZvoc9U1ZFm16ZUBxJ5zNG7zVECiz5KZ2rue",
  "key32": "4NrqG3jpf3RX4WGWcssRfDFcFZ9GaoyVH7X87oeUNcEqKtkBwLrKMVGeoAUSf7kRvgHKvE6qw3DAZc35sPBxCxwD",
  "key33": "4SSjN4kWZnU6Y46K3GLErRT7at7ttBjuRdjn7s9su3FWDhP8wysxFV5De8CH7juZCMujuCAX6qGk7UxRzNMXuMQE",
  "key34": "4oj634WHH5aTQYXweHACFRm6jwiZVD7xszX3hmRzNTrW6eMdeNxNZkgskxRXZTRscGUzm6Mfj91C2bsRyncDrJXV",
  "key35": "3XH8rVwcHRummGrbGYLaLfYzUDXiaKtP8D6SwmH3kx88VBDXvzNDXHAWaxYERedcv8a7f418Lnkxxee1sKFDq37F",
  "key36": "5MF6pvN6P1obEgsk8YGL5r5bdXKv7zLP4Q9GNUgHusNLrBuk3fetR1Ypp5FWETjfFz65x7UinDVHqgwGKJvMDAgV"
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
