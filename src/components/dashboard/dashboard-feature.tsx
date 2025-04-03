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
    "4GHcBhPxend6XvHtiBEfUpsSezP1waZ38FXegEcAwQDYspZRamb3zD9wpUPEkwG86UjjC6Dr8fr8WczE1TvNRkur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vm13Y9e1Ryo6XzNpZoAwAFoN8CWFDYoV61WLuZRnx9WkSoaEL1hrEFUDF28K28dioqMpXXykAHLLMwaswnuCHJg",
  "key1": "4efgdSmvtZ3irJPb8xy41encndTi4e3XmXeApKxweNPPM2NTcVtbnBGy2gPJew8hN2Q8TKeDbqbY7wCNbyvzMfWL",
  "key2": "k2sbYnxyhJS8pczQQLJGzn5m8My4Ya9PmkMjMWms2cNv5PjRu5YRjUoUm3aSaCJ9Npo4dDFT4QZFKcEJKtusvwp",
  "key3": "3fXP65H57mYWqCQN8Fv6W4FnYmj29eHSoQmeceXUZeyCgP2d8FBjZEzcvLUB4n2tw53T13ACDEktiwnxZ3jqC9o9",
  "key4": "N2k3wbYPgwZxsnUyp7PGduxQht2fL3RsYrXb9LHpfWd4wVFhq4FQLZwRxojqrtLsKTLpdfCpVjBeYvgZx6nbcfe",
  "key5": "346FrgzXURkH27x2M2PBdKSgRZnYPmrgBuhs7j4juXVYGHaZbCMCHLUJgqBU7rBdCNstCAxRxW2P9ymXfnQGgEdU",
  "key6": "53UjkgFtPDHgFXZZbj1Y7F7caFjqMTjA3Xgy2NWkXQvTfFET7iGeFX4ZStRVMCRBD8YBcgHTLAVyHJyrPsK4bBRP",
  "key7": "4UTi81L5PuQVrLs1Ktxo9osbArtvjmS7hLYgcGjQfxj9pLjQHKYfKQ739vTGq8tvL1a7wvWTknFxdSaRT5aGc8kz",
  "key8": "5JEhWCdpBNvL7ZnWAd78XhYJ6N16mHuiurkV3Sqs1rNJHnJTtc3YtPnGoVdcQ16hkjsKisGW9mkEHCRDesDSKyCH",
  "key9": "3e2TnVPhVj1121BA2GYLfJ7vpdGfZMVkjnvz8Wy4wkBBDRdvoUwQfZqoF3JiUCWizmerk7h6S45U2od1WSSyEKZM",
  "key10": "4Xa6VXW8d63UHF1xe2DgUQzxHsPKMTCrN3CzCjBRkjNxeLjKshkWvAhrFdTEVvCfKCKLdP6nQ689cNqqxPH8vs1H",
  "key11": "4RUES4hcE5jFsa7Ns2k7SRMkfGFTJF2BQfXuStZFd3x4EyHosjzh1i2Vm97vAGqAb9bR1yScrCVdZFGFCp79TjvD",
  "key12": "noArqGz2qv6CSJWH57ZwupSbsrDPojFJLkK17QFEQ5BVFn21dwfkgZpPBDhrUjZWJhe2TQwT7h73DKBfPB3p6hD",
  "key13": "4mdajJ9zCxcsYcCE3ZwpbprjechDFaZMgn726hAobVMbC3ggBE2uHvyWs6VmBgCEecfqfQCw44Fs5uhzbzuszhhx",
  "key14": "4w3SDJQU2N6TcweQWXgro3s2351iD9GcZ6iERwkodMz764Ecnzg1VaN7VfRjWEUPJVGsHvXUb51nJvPqN1pZhx2Y",
  "key15": "2Y7gB7Xot3aRkQGA6SFE4jzBVRaktkKny6HVhgmfnSNs3DJox9BRvmdxfBM34Mvt2efC1iM4xwYuWmwX4tmR3zEo",
  "key16": "4c1BvFeiJkJm2KazmVXgMqHmNnapF7i5k35zEeKwFjapywe9D3gsc1Stf3RGXQDeBU44dd94kAPTnCNNF3hsWasF",
  "key17": "BenMsthvu2tEkBfdRLfznnYneXZSkzBcoJ4ZMRzY5ng9YKXpHkTww2btQsfiqAB5sdcu5RAkZRFTMyxtTtB64pF",
  "key18": "2NnPYRwhTgfHTd2fASdSe8SaF7Q1qtY2xzQvfsp1jTvzKGcmYicRyDbe8WACpQMbby4CEt2FPtb8QkgXLuDrNKWd",
  "key19": "5aYV5h2VMMcwUEjHqSp7xsLVHJqA9wW7xo8Txw77eR8qGwFw3TVRHtUtCiCy5b5C9EYPefVKHLRaSNYHmtRuWBJv",
  "key20": "ASFw4d6YpxDSJrsJec2SA3Aftv9vx5Sie7yY9dacb2LGeGZrEqCjE9kU8jRhMvdjaJsJnQ8SjDQTq4JeJSGyFu4",
  "key21": "1ko6edTB8YJvcEeBr669N8gGQ3KwbiJqepCRGWQiwdFsUDBM1GUnoCnQtqheUJUm6nXvXPKyt1zm4W4SGeQGt2h",
  "key22": "3hPCg8JUXk5xxR5VXsJ2tqK5mWtwqsL9jYsJ3UGisNUjoHxwQhYzNheEKrm7u3prnLtF5sb1YnfsgpHjWc4NLGje",
  "key23": "4wBMr9rH9j4FSaxnP9PcE2dMQxyAxFXCZBHFfDMBzT8axjSrxWUMCq36GTR7v5TLqs4UDBsfXSFNzNnwZRGgnn4r",
  "key24": "3y4BVfQrxceFLsP5NtFsGgoNoZw2duP36vVv6vuZG7zTWqb1dDvX4e5omPYNV7RM7RPya7yVTJxBe5b9bJ1qEN3b",
  "key25": "3tKDrkVDWvXJMHPqRDh2MozfoZBvdPsLYozconcuBGPN9sA4NGrRjt2E9mTKsPBq6aEPN9FbX1YMST8RDqDzBU56",
  "key26": "2s7WJDhGWYE7ZFVfb15LbkF9AvaS9NrVRdczT3Kjc5ZxHSX7uBEuXLmRxoDG3zg2veFjsyZebecqcmH5prRaSxsr",
  "key27": "4D3LPa1RGr95iq444dt6Atn5FunKEBvJuxhtUSL92DdTV7e1YgJEjhVRAmmdLAKzwiYh2iYxzCjiwyQjiEJCY9gR",
  "key28": "44yTaFJYFGHXzxEbrGyT6b15xNU2LdVfx2oaXaXUdv1T4Kr4hHW8rq8Bv1stVoec4G11aTb4g6HVDh83zCApjsu6",
  "key29": "3oBc5z2WWEw8FRpuQ63fAMxzwg2H7hVSA1B8A9rMxZDSuNcWa9DVfXjrzWGNSoGS8gdMgRmt833VGHPE8UsTxFkt",
  "key30": "4nWMhQ42xnNbLNXjKz4wvRvAKQsLfS2qGReCLZy5SAn4ts8JsyVPvAwx3Pfk65S4cJtaeCoXnwXqvS5BSEdZ2FjZ",
  "key31": "2o6Stci715Mu6yzKaz8ztfUehteWm37dUuS6mhzwEp4J6wSmjUXXD3VNitKvqxgL5NidhUcVWVYeo5N5W5NDbCtu",
  "key32": "3iBZzAHk4rAyVLnZhQ7yRyFejhXFWZ6xoQU6sXLpXaFBz4UgeMSUwoYqjXCgynfsFuKBp6jwboKzRR38jkkaxDA5",
  "key33": "36SXbQvMZmLWydzfUX3GfiexCUX8kszr9ZtYMuknMQ5b4RkxznoVmwtiDeuvhWLGBGVNSHgtEB5AnUY1zC1FkGNZ",
  "key34": "63yGEWzsHcmL8y9pWGi1iUkUjRhJBYChEn9fi68vTER1WJBVotnx9FwZTT5TPGWTRfGjuxfWjZryfjYRuD7BirzF",
  "key35": "5nHChUrdVNGSYsQ31XejJJRNjq5Fkbe1vfLDcsg4zYPLALt2xERxouUPYMWPhdwSYVxGL8HV3JBZFor4RUW4imMo",
  "key36": "3gdEXr6hGWsdDPjEoPHYSMpH7Jp3SJTHLt7oAgMWjvTYtYwfaA37EDevRGsSzoZprrWA6L96Yo2QMaSN3AWsgzYa",
  "key37": "DFRYwy73C34MDyNe9TfsyyTRZWMyEWfEo8tnNVwDJxugFq87zBugPXmU1TRr89SXAQD8aFsuu7Nh3o3Ra16TS8e",
  "key38": "4yRRRcSNhd1r9v4woCACWvpX5DnKEwsceTSWp1HB1TySY2gCDinrerf1AcCosPHyzm1VNMrU9EcYxspALvoy6c1N",
  "key39": "22eN5NmJCJ95qN3u4E2qeHknXdCJRQk9x1XTH2E83Q3BHtnUpPuBFJhKn3tGjo2ez1w2buooNAXKJSAZqw981kns",
  "key40": "5uDmbVGYmpAtr7AzRABFNtWi7pXff6kf1B5CWs33DnchNVk3bJi1PYCt6KNMG3kmRpniwDXR53w7hbFAJpV6Ehat",
  "key41": "2eztciKfH9MoGuQXocF6ruqsrrsdgFyQp8nxCq7e5L5CnqsqLa4KehLJii1kMMNzuJJ4hStmcVxMFQgingzKfo7R",
  "key42": "56ZLHLz5QFba3ozEdkVs2jkfTbjaWtPi3BjBoAt7RE5sGFgd3566cifWfSSG7fSzpXt8so7Eju29ezNfESRjvHy6",
  "key43": "4JrYBBWMPBxvReTKdnumdce2ctV6PA3WnSYArGX6LQfYgwxsooBmy2KGJj6snDsaiNd4Y3j1AQyxEWVXJHRtwo9w",
  "key44": "6qhPcojLuhRj6sESJKFnJuhpxG8apdfQzAXRAhnqQSGWnTq4cSHNhahrkcJg7ef4Zi46Exg8rzaJCfzqiPAY3oc",
  "key45": "2PtMYUEjgn8iHLvRJ8ywhqyz5DBdNfDESFtqHzfdvaThBAYUcTQFT6XDB2DnCBrmWvtU6xx9HNutrVeBMAMAdxP4",
  "key46": "4kFjihhC2DAYmR5Lc4tJqgJJMEvsEGWLMMV9gH4xCFCWvnTfYpZPqm54bCfL2aSTsygHA5pY4CKpL5uzqo3V27Tg",
  "key47": "29gDezNeJ1ZKTXsKEVLceGqafzi1Rfks4k8kpnvZ3AcReFk5WNWJRgaizuuAogZnPUE8xK5WTRVptXPni2QqTZhS"
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
