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
    "61FZmNKGnsStzf9i4zjtNzGYiFGxjK3bw5rHFfYXHPKy3qnaLchXVG85KSyd9j9k6TsZobr3snnS1Mh9P5baSfj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCy4DNB69k18DxYSX1wJhYznGhrCKejWfAqzhJ3DgKwLa7NfwRmEbHiQw1WmFc4C8km5KwviGGMY9DDX9X1bDH3",
  "key1": "5epQ3jZmwHissV29Jdhh8tngAY886VwuXbHVXbxwr2yKU2MszCw3BwK42RCfyrCqKwf3m3pAPd9huUhpwdDFUXgt",
  "key2": "4zfZQ8MjkAXBoynQGNzEVoEzQ7BM1yCFKT111sJ4HBVfzD9gMGXtBk2Kxh7JjbSdTLBx3eLofpRToNKCogth6zk5",
  "key3": "3HjfXU4ZRdoTWBbb8YeiMx521jRhvZwCfX652aEdSjHcRXWMn6ZMi1T6jh5VrLigfbbFp32bX7aQQE8vXq59MJMm",
  "key4": "RBov2v55y83uvLoEbSiCwW2oY2WTvBkLahw2HQTHvhvN9f9qLPWHZS3HbxyiMvTKxaz7ZveHAfZWL9PYPnn7NXE",
  "key5": "2dFP7hj1cDFqDcnSFiegfGwis7V53PcjMnoMCdchsGhdoR1hWoTW5qKiNLsVgSST1wH8Uuif6neU9QQPX8paoTPk",
  "key6": "63PoL3dBJ9wBowLG5GsbH4tixVRwf3TbsMsVkpGTaetQWsBXm8JV9nq63NJMkgisP3vgUpbJgSEcFLMjSLJxo6Gc",
  "key7": "5uBeujkqdRh6P6XbfJCiXfJWALXUE8Srj2g6xXG5RABUQWP5Rqb83q5f5fd9jjtnkVmiWLWyQzy6d32JhHTsWgkk",
  "key8": "5azeoxidZrYxCnvNRBKzQ9wQoF8FV4ENgAshMuLoTYzRJd6PPrCw2LBcwco6Sa6akkGgpBTZsnnPstuiSwu3s64r",
  "key9": "5knDJjY2DLQyMGNxpDiXmKM8f3aFPm79PK3wwS66SuhZZd3GPzFywC2ZGtWGW5fjxDbWpQVn7SqXBnqaGb9aHk4j",
  "key10": "4wmyti57J63vuxSdJqM5UjJPMCSrPEFbtVE7LB7RBAX63hWzE4BHgd9T4XPjipiAqHAy22U48wHGHAyTTxwq6sWk",
  "key11": "AzQxndYKPpMHUvD2XMTQhaVCB31ea9xoRToDkW3EUTT4ZCozMfWjT1QRCXzL1qnaH66oua4rx157kAPaEaVPpmQ",
  "key12": "5imcYDJkJJiCNwhfePeNKtiFEigPMUBrtDCRSf8SqCPFH86sredShLzhg6TncBP1rJCLkwNN2FpEyELYo622j3xk",
  "key13": "49RktAYZw2ZKwnRTjkfyyadcWajnth8rnzm3HYQZcR71KQ2Ao2RGGmH53dZNYuZbwaheXdniFp3RMamMkaddPeep",
  "key14": "AQgQrNnRNUNiKXBkkm2duiC3hqNyUfk8b3yefGbmL1a69GWFWHPVCFYFn8dsM5bz7x5jY8twcZaAHaxo25PPb39",
  "key15": "29vcxKrsuErayLgLphyadyQcMnKjqqM7vrVH7uVwNZZwwyLdcw2ev14eeMZ5Tshhq9cqgwTcPQmQ3i8BafqSs7HZ",
  "key16": "NybDbS3ALMJNA6QBWEJQzNK92NG7m2LfZBtdHeSc1W44Q171JWF54LSH1AD5F5JZUQqrSrkPXmr6Hk9AbkZmiGA",
  "key17": "5TKUdno2r8KKidRxvAT4gNSMRQQDRwp9Zf1iR7gzjVq7a6XFGJ9mXqo14BxRfbBgmKJEnC9ueYVPPJ55WwMpk4y1",
  "key18": "2qxUZqJSspe5R834UZXNpVHd9TYQhUepZApCKRuJtmTwKXaS3XETdAuST7NcR3ih7QPny3XvoKb7J1e4BmUg6h3z",
  "key19": "5V9coCFzXqYpNWaCjoh9vePUr4dwWpkJSYy7GVKKZn6vu7BD1tfgMd3fixytTVG7AfGuiaxQ4zrRsnVzwKy54cgt",
  "key20": "3xRS5u4fcwiJMcbdiz3U4vTWrfK4xSSif9ziYePmbF8z5izwMvAbHueEvFMLMt47nmRhiNg7XfEzTv8arj6GHLq",
  "key21": "4SBUUVPzEiSek1GME3k3uyvxJMwwzQvqat4rz19BWy7DeYzC5GofcFsSZN3Rk1SwRpk996LBPNwRCETxqjjtHffV",
  "key22": "3bSt1ugzCxH74QTdHaNv4L9oZdqfvrpDPG2RDtYDF93ebNbJgXqzgD9XwPhCcBpBmDBUSgpttTyo2xEaDY78aaNi",
  "key23": "3yyBZaYZ75hNQwL4TuKf74bTerFxJmskBxet1VBcUzLt9hf2RZS5J3WYEkR156YpDzfCC94tdyRuoZPFX8MBQjT1",
  "key24": "4yq2ymrQU1jDtCe24s5mJ3797mppHBShYavxM1SosYfx4CicWV3j6Pf2r9zP1vYYLa9fjy5FnFCRJJfQp9jrsWLp",
  "key25": "4DgDRqpUNCXuXPCEYPA1kX9E31N7GWHMD6NKrRPss5M6SpaU2Qb4Gd3dKXKmK9NNLXFXBN7KXQWsr1cDMCFqtFTA",
  "key26": "6tU7Y9YpCXxg9CgaynPxu4AKPmeZ7fAZRimwii7PRVvEChGLtVLj5H8CZSWFKFywM5HamT1Ae88iGY3CL9SNE4N",
  "key27": "4SQPRn5p89eyHYT3JEW2es31NP1ECKCfbg1SLLyi6sf3njqc4Pmxjwwgf559qG7YLuoVseMjritmA6bG2u8zECgK",
  "key28": "5BuQ5jWhtXSQ9cnUQKsvHzLGFW2i6vGVnppWWPus6zQXW8FSaMGJsWs2NUUriyXorLRUPaEa9Fhdx7v2ExTZHuES",
  "key29": "55b5QsRYaLfpQT6fi4HNGF1iXbesaDScZb9tXFpFEyfYhsnaCp3SK8YPdie2wgSYuyrVskoBKmQK6HjYQXN8rzi1",
  "key30": "5J9a4urr7NBZFppCLcTjducAKny2KVgrdhHGoTBPeBrWhAWpsF3kPpAUpN7MXPMxaRHUZTyGgoQo9n6g3DPA7TA7",
  "key31": "3d9es9tEMjdyibKTbssu5Fnta6ZcmSmUiSyhr41frYMfqxZXNu2jH91S1QhzvrEKLkCy7k82A5dAaiasdSUiWPSG",
  "key32": "4utNZi54bMZTAhjH5QkVrrdR5EjWPzuRfbCfN3atVtgfhuVngfuZP53r6vsKqCBNVg3kADwL1kG8bJeExAqw3yoW",
  "key33": "39UomRBup8rksdFT8Et1LrDj7YLT5gYMWcvcSQupsy415SPXgnx24E2K48eY3q2GJku8rTEMYvBTXWmB8jRLtNgy"
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
