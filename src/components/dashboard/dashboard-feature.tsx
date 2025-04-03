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
    "272Ri9HAB1b3oarnsM4mFAJYM5rgwK4qAYetXBgUEypJZLSfkxggM5GW5TmyhN9T1ERfR1YAwuviT8YAw8CnqBcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXDKfozTyAJWYPMD8aUcbrDYLWMNmokowcsdWbkZjYzqpXGJnvB6LEAChXLQz2UxjLc1stqN6KXC5ei2v93YiFY",
  "key1": "2LHr8gNeo1RPJtL37ZucXVFwyHhNEbDSPUe8b3WVkKC8pF5eRFD2mTwV8MuNmaPEmGHVf4nfma9UFQGcDDF4qEdP",
  "key2": "s7HjCjS4Me2d9oUso8gYfDXCS3Rs1NNoqVeH7GssZhS2wzKTq9Vhvr6Mv8Mq9bWRKd2fpc5z3JH4kjshykFwnas",
  "key3": "bqAt9pp77FFmcNhGfQALRJbuibYrGiVKqSxeTJFR3a1WjuTyN9NHnsHCvJzr5ApEgGSbmkcbaUyvQtuJiGEFst9",
  "key4": "47WUHHxJSTuxQGosxNZFgdxDMAdJWjk3FUoSy8nWMZGEfZhsumCaXuV9vM6JrHzYwzziHv3bfn5nWBzDDoeE9CXL",
  "key5": "3L9NX3MQATvzSKeHEETeTNU7jxdtACNCxnmX8fPTizAT2Pdct75GBQazp9fsHETmQmA7ezDFwWVYQsoACSSgsrkP",
  "key6": "2WMDPLRFFhQ8W3mZd2Yf2zZ2hdoaGUawsLab9SQxks42d415NVjHhw9BW7QFbt8EawEWZRVNULmk88StMYQav2BC",
  "key7": "5DAuwgwWUFvpYdEFqHhRmZtAk8bmjALuGC2SF7oHpe6Uhh7Jq7Dn6WNKmPckoMYondmwDhPbw5TmLQkS3wNXN1C4",
  "key8": "47iTUHC3vr2dbX4Jcb4x3fCUbDpZh5NoMUFLx68JjuwYXVJzmVpB8uYP4PuLDc1PoDf8PMwgNVF3q6zvrCAK7hAz",
  "key9": "BgyieTpzUdagha9uVU4prCgztBEWBB4e5mLVMeMDF3fn9WW8wp9w7gQP9Wgny575PEzvRtnP3LqdaFNrTpGVsFp",
  "key10": "zd4j2jALF3XPvo3uaAAYgy2BPZeRxBVG7jfuc3B5rG5prZncAYH9invXvZfFxzkXfi4ykqrPNYvyxnbCtxtPxqF",
  "key11": "4iAVszPAj2eHsfM78jsDjM8xrSB6vPRWqdnnM5EqF7fzLzZP5qfWdtXSoqJRjQfNiVzCgYjZptifXh8Kz4X4cvsE",
  "key12": "54pkmtebnpHtuAp89fHagiSru2xvkv5f4hD9bsRaF83fJTt2NStCiEm4qEAU3BzWaTywDgQK7rfzEZhfxMbyEsGX",
  "key13": "2KuhjtAGEi3QhLYNoD1hfM3W3nUgJKhyDrADyvHFaHuKCjH5p4vTaeBvZW55EieVkZJHKwTAs5A8rHaTbDV2aW2e",
  "key14": "36tFi4uJDTF5HYkRssMgv4Hch2xEsjbja1GnDmvfVhgXXMSepzdPWHivcbTTsRVQFiDx8c7zR99GfjMGRAZK4gE3",
  "key15": "EVK8AVEBPBB86E7k5NvEXmTsUXvbuqsVfAbG4Z27eoY1DL2vsgoGaQhLTwHdXNnhzCEh4hg8CoS1A1Q6zg2vAAA",
  "key16": "5mKReoTu1L5CabSxsnaPocKkdgjZL3pxNRqNe6H7zWKVWn4vwx97UVFTq7Bi8pG8aPHhfMeqacSbkwXW16uYT4n6",
  "key17": "3h28zB5PQ6JTZYALM78s1aCBxxBHtbRoCakT8YwDYkzRq64jcQqwELUk55895hi98EWhmuW6vZyBsycakK56btnt",
  "key18": "41SM5AoJ3ZHCSDNqguRC3WZLWUH1Wcyjs6bfkhAJm9YZ5aaVvsG2SHNkizuH11PJZcEyKm3ihX9o4XeHYsEMwCPD",
  "key19": "3CfVxRCB92TQ9YBaDYSYJZBHyjSLuDpyeevGvCF9HcBDoV2b6BZsRKnqFHyw3qi9vheoFutaEWCYa44CerQUZLDa",
  "key20": "5fxoFwEqZ2DruS89YRiBZKn1uNcN1sGVkk1yFJSWNwN1QCZ4HadJosHy26G7fTCp28btHSZtYz3zJ5F2L22yeyro",
  "key21": "2XpjrtpwHxRpM4xarrdsnPMeDdCu5zJGm4Dk7vxVQVA9AUDB5Wq6bUhHybM4yv6GRzdFm3brNzcgLRqsbort2xr3",
  "key22": "5ST3N4ainfh1XeubBpV4tcDWaWzwgvMf1doFztJKLsMT3aMu4BsypG14rzurgsWQYdAu3aYvdy2qjr9v1XnoM14E",
  "key23": "3AVsCkicuWbEGbD8z6kN7MAMq393jjTUipHhMckXF229j2aCdb79QCeZzf4NAuSuykqinuHZbzXqgkrXtDFWR4vc",
  "key24": "6heevyysFY2ri33oo2M6eJKrQ41XRYynnLY5KvEzatqMS8cWiHd3fjg4Qs6J1a391vVCpoC1hHmEDTNrZPqwc1J",
  "key25": "4wPuvQztrzCvpfiMLgzdNLYBYzK83Fstv3vdj1P48yav8GBjUVG15UF3SZBgRL5CNrqGyWG1faikkFkWXT3FeLHm",
  "key26": "5EKx6Cmb4FgsMexJkmeLzJvnbUrur2NS3eftXPGWMWmMjiFCTTDCbedWq11NoJh3LWqMKrJukG6X3k6AFzEgtySq",
  "key27": "mGXwPjN8L6YXUChvkCJNiijApR3yvSxbnuuSRR7jBMGXu7xvpycG5bMyuyjdoXaJAmzeFD5zKhKtGfvij8nfFUa",
  "key28": "hexezagUvxzueyPAkrzeC9YPiYy7Zp9qQhEPvTiNzsvLEwFgKVgj8MzdK7UiHhdYWYoN9iAXwfAhnAGhPBmCczT",
  "key29": "3xK9ueHmykjQTaCitz8puCMMjt6hpm83tQsT1DBoQuiZnxtVk4Wz7kEBRxwqRjXdr9zYUuDGAoW4vEMr12CVkucQ",
  "key30": "GDuEiqoFMZT64q3wV1Mw3HJN8qC8QPT7fySsTP7n8FVBSV8VnAt5NMcP98gKKMeH6JY5drkuUamHsLCSXEtUyLX",
  "key31": "5uinwCzZQCDUmgjMdDgGFz47z6t89chFCejf3KZCYrSj1WqRaz1XigkfAxFvXYTF5H5mcxhweuVznYG2HYPkYj5U",
  "key32": "2QsT33xDFN6EyX47vyA4opLfuKQXxdCDttVKhQQ5Xkzy6yXk8ZP3AQNyMfXzMwZmr4B4mSF7LvpvHj8U6bEfv6Go",
  "key33": "3mfcV5XHBNi6hZTQrnggSN2DyH2D18jWYaAqmYUYJ3ZLtykAy8kQXPSF9bNsbXJsBKQgmaDdjpFpE3s5AfYV8tGa",
  "key34": "57mQeS5GM2p4NE6e4AZxcrdCmZvpkKC4NK2csPCgepZ7seLkA3pApjaPc96Nx5AZ74mMjfGE2TmF6UMWsgGfw8Uy",
  "key35": "2P9R24SfUmhgNiTNFPJgd1hvLovyNypgNo8qgPt3FJu2egekGWF1AUUF8mZVNKkzivfdeDUWPWdYcHcytU14cNyB",
  "key36": "aErgXZkXBB7LJHhqQijaePLYbwRthGGDBVfBbmmMUibEPrs1H4jkdLvaFVGiLQBA7sVz2amthgpH7xHuDrPwYHM",
  "key37": "4YYwERaTsdmc1TLbkhw2QN261GY1qEkJjXhuwpUCzHeMP4BnGq6vehGpvM8Ukra8qGf69SuFn83xdGWBE4sVgxY7",
  "key38": "3DsjSXLUoqbRkuDYB2hXnuBq13FjFXQd1J1RFxcVk8inCh93f3dXzk297jrJfdFRrafNvAnhBpjaepsTbDrTrt4z",
  "key39": "36eEhqB2EhfxPPHBkZ4ampLr5JNPKhw1K25w5rHrmrmpirboaTEyKPiPXfS1CeVEHH1oxcSEgHkRf8fPbDquGKDY",
  "key40": "2dgu77pjDGVcyJa9qWedFhREingj3w7PUjrsSL93oFwK3kwZ4anngRNJQU9sVRVjr9ysoQYkTuPzuLcif4AbHhXQ",
  "key41": "3iHYZruFfepwwXxyiAjur9jfx1QpBCcDn889CUNVMYfW2GqoZLUFAxPmMgsNSE1kWz5KQezYvFmnNnVKkEu2aAfG",
  "key42": "QBnZssdFzN5RUN6Pdx6mqJcBuB4cDfMwahEHXubtxPaLcX7UJbU7iiLjXtww883Rwbd268FugyBq5VhRL7hJY7o",
  "key43": "B8vcU9m4usWiQP53J1juJ71kbAuyRQwGiBpUNi7MKCtjAKYxasyRsdZbC31njRnHcRB85vmhzEvxuvbPJGqRrq9",
  "key44": "4DAafiE4Qe2txsVFNJrKCHv2PkEjPu5bFYDgoVRuoXQjU6XYUoiKBoLMW1KBr2gr1AsCr9sokdXQ3RQ7LXaghrL7",
  "key45": "5fuRUV7A9ABJ6w4u96gad8hvx6fyCWmi7dESKX3TYSJKo9bkdh8j7s4zvJgWgbwPaMgWY35fHU4fGNPPKw6hiWuj",
  "key46": "3yghCessx91YWAdPi9HUp8MuXK4C2epTXvTZmzz8n2F54BXshuJYz3dNDWPZPsAgwGrWPqUdWNsXpqoKJShBmCk6",
  "key47": "5EMpuEpx3VRmm7eaDAePmCfz14qtcZD9S4Vo8JPTJUnhQzS34Fo2aHQH7fBSoNFT7tbBFgm3qhATGtwVrYGy5tbt",
  "key48": "2fXc67uSV8GHBm6XQsYV8nrRMDwCp8vhsgSMB8QR4MXzQkfUHL4LMxFoEtF6VZ1YVTCyu4FZCQcCbTe6hDWbMexs"
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
