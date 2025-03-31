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
    "5R6QL2jYL89yXw9FRP5cfRpVdcAmtpFJjzW2nv7dyyXxUXnvtAXcf7qrAaLnbaE3iLouABpAc6NwyRRibaAmAXWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hy95Tatvd7k8HxQxHQwrLJ29vh9gDxcg2piLNx9T6E8yL6kobiwidGbzFrqqPGAekRsqNFVC7Wn62dx3Xg9P29J",
  "key1": "4WkcBjfTZCDNsJycNBC9cfjeZnwTbZtDGZaYEcFRXWoLYnmJnPfNj33PFT5qFCMn9oewK4jtCwXhbEV4gZgsU8k2",
  "key2": "2VmtFYx5dQWNoen6DaM6RHDdH53ScYPRrLfLZEPW2aETshpLiQS5korSQj12xbgrGKzizh1yz7SeQf9m4MoAVUk2",
  "key3": "3gDNwKFz4YHyJaZHMemc4n74U2311L88FMHJqvj2JgWFbenjq7311Jd8SzYVkLr3fdtimPrXByj3gcLckVYphzkz",
  "key4": "qjnEUXRdj4d2RGsowp8PH5qq8pEx9LETFchRBbVcicSNJPJEXJx5m5hS4ffAWmGTCw8Tadc6o7zpQipZPPAKham",
  "key5": "HAXg3KH9A7xN9RbaRV3G2PNkA8GkmuS1MNp2eWGBFfGuC6kxeoVA6kxZqgJcgjyoY6zmB5yJdmrjevLUc49B97j",
  "key6": "54tMXsvLaHpHEbkeD3VgssbKHqEAYFbU61vVK2tsyG5XJLBdVja1siSSAgxzNiqpTK6MPaVCJRNcmXjGVehXvmx3",
  "key7": "3RW8j23hmZbbjbebnSAxSiLBJC9izhjhibLvonAiG9yVFPRsp8sEVaLF7i9ctVpZLjQP92ZV9M8WbyUocykDMwKe",
  "key8": "3nXCA3gukdX5WwCykj8JPg5gEP5qrKuU4vbuofkQnbaCoPzE95LTrzMELK4Wgjn3JpG8QTzsPF8MAfpdRbuRNHBv",
  "key9": "4YYDCUh6rk6ng5VPwXb1W1dPsWKNfuQJs5WCXhSJKwSR9y9fLZfaYsF2kiBc7ESC3xCPPekxY9zYZ95r4CQ1qenw",
  "key10": "2yzxf36rQ39AKBpiqUgCsvQP2yrZjYMydcVDACdLsW39B5yHJpGoYE68sEvawSC9D2W42dvd1DcGUgFXjfAiLjUK",
  "key11": "3939KZoV7SpQ2mpr7q81YJQdVj1h1MdFaTDtkYRDMH5fSJEVYQzJDMb6zndSVZGvUxwLQHPniLTJaFCy1YyGZm8m",
  "key12": "3Mujz6EwY7vQ1f2ieF7TKxYqMDrbrnRnChjZ35xZUpnEw2BBV2EtKdq8g4EhinwrqgJRWxYrSjJsL1GcvC8fVLzW",
  "key13": "2iR7Xnohb9tZUzunAVFqwdWa6yAabefMfaUwcDDq4KJgMCnCMJGmfqFnykY2HWAWRvsQRiCgRRjftZHzfY65R5tw",
  "key14": "5aDYktdyPwiDyL1ELF35uPvcsFpHgMR8UkpNuWLBRafBTov4onGbgkxPQD8nwPpLVifn41fNLTd6UM59gLvt3MTV",
  "key15": "CDCZRs9MEQnqDvDrHT74NZqSc29twPMDRZNCQpZjP31JnuAam6ggsLKJYHDuAP31joHQxJZ89mjti8whLgHfcGE",
  "key16": "Lp8VunqJVWrdwtdooY1pLk8pwPhrTdfCLpDcQXbCMz3DmgVVhDXiDypPshUGCj7FX65qitHpY4NbGW8cePbdyui",
  "key17": "2ArQnY59SzY8pndZcmK9KKddaC1iXAWgxHaPYMaiabUi5SLS6dPwD8KU4rqxquPxpYSDB9BDAHSsPxFVsf2jz8ed",
  "key18": "5bpS3tCah1zzyg3SydGa1FDfe43s1E9DJsfx9pq28w7PdaHDmes974NA6A4fNENy5fPD6JNUABGcTbu15PoQ6aBC",
  "key19": "2H4QtwqzoeYCopqtPwGLe2kVcm8jUtrKJkmggYYEsY9PwLoYUDhGozjCJttxCNXet4HLqM3DXqd5AgcLaV3CJ352",
  "key20": "4KmkR8JEj5un83KeXtSbFZkmjo3hGDsamT3PUmj2orCAXexbgk41nxknb5gagp1epdop7rwXCZPpy4Sy7fpBweiL",
  "key21": "2ihETuq63jK9wzC9rQk8Yr2xgNNs3HHeMejnWoKH11Jc4BKA53ezJL1cnKjnoNDte36x1VAWiowH7f4vqVhA5BXb",
  "key22": "55nuTzNF9FrbA4RmTwcCiM4xo6Ba5UoZwUFaH4X1M81hTQb2F3byyXHBacxSsj5QaH51Bxn4uGzr83DtPPXRVVQP",
  "key23": "3SvqP2FSvtfvAUW7q1u8Xvw9mBQk7WQ97Dk5dpV8CtP8EFtKy8ApdKpeH8kAHCpssSCoLJgZCKd5sMjiqFJr3tDY",
  "key24": "2Vzy762GeuH8wiufe5NQ8ExrPHDSYPE8rfNeZVLALmzCCqtEXrEET2vgBUM1B6tT3Fbs93qLXdjZSGitgQhq3YUu",
  "key25": "pib5U1nGYbWShwEAYZaHRNj8gfnrfNk6ufo1jGJGMWkMdQqphhfXwhjd8fxvGJ1LqXyx7VVprJkv4gzS2smgcem",
  "key26": "5LqZjvQJUNFZhbwj2xUxCP6gVXB4UX2BCHLmrGnaHLVH8BtFbkXwTYnK4FUvtLYsYGr1GWThiSGEQdw4Mnw56vgi",
  "key27": "5qaiwC8ZFfKVpBNHrQAhzKKM7KMAoLCj6ua7T4LFkn7JqJQ6HgE32CCrKsoyUFxeFs6kZ2UZGUAB6BB7Tb9ahvZ2",
  "key28": "2NypgezpLEstuLZXNWadQor6kAXRaLoafJUJSP9sraX3L8n5Me7iLRbXkWvtLA51YAdzZoCdvKxQrsThuc2Pc7RK",
  "key29": "nc5wumfLL9i572CX3TU1jUF5PcwmY4eGKqj1mrRrVi3jydCNYpp756vCH2KzfNaRgMDYbzJm5sqo4yyFkawULjk",
  "key30": "42mPf5YvJ9PXeDvu2kAPedtTckoCzyfrD3YYCi1GpBvzgAxmsAjpYNmzxvnEFrsau7MvfrRmUJFgbWWf1KN3CWDT",
  "key31": "497L7QjidiVseyuJ4JRdGjNHXnbKdHrmUGa78Ast9BcHt8AdfyK9c3hCPa4DfuU9HgJBdC4Zbcfukv1gxJF4f3Vg",
  "key32": "4RKJqKHJWgsvpSmvCtXeZLXCdChcQmvHcECLmQ8hiXGBXwg2DJw8BJE5Lbuf9UeWoEYxsNBrWuV34KeR5RfTbwy8",
  "key33": "5DyhzFaNmCz6Eqo1bg4FMHtnyDbiSNoVskopdDMcDosNtp2adhCR2LNkdPt5AjAubUghs9zcfVdxjGtetf8ZyS5c",
  "key34": "5x7X7AVGkznYtfXsKpS3nTVFxCoNkDiLLUnhv6sKjQYo3pFrdSCMA9fuYdEYox2sS5Yzrk4V2RLoeiSxSQhTFj34",
  "key35": "NTg6rgpp9D754vFGLR58TLCGxHAe3HPss8HCkoskyJHTuE9ACn3qQxYCoys9ssQnsRtrN2Yq2GcVyeVGMRG3a7t",
  "key36": "3urMFq2fg2n1eMmRKTdaXUZmSpn5BsDw44drH8q6YW1EHWCppoEM86J31yD3sRHiEFzHd5YaQXWD5hcFXz1bEnvd",
  "key37": "2C6bRTRY3RDzS3cQ5Arz5YgXuH1fWzzikw3WzJh15dLjJr12EaZPcz7KcXQ4QGa8pTh51tDBpJx6Mz9SwBfqpYYw"
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
