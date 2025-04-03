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
    "2KmJkEnPfsiP2mzQwx7M8Fk2MLUTUGd2NutkfPdzzmkji89q5WasvZgvs8KXVwgWU27dixYCkWTSxWJs7LR7yFGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n53JfyZUXms6EvtnmPw64KzPW5TodJnM1tXXBLMaGLmP6gPSAsTjJ9AR3HeiHfuvyp8ptaPDSwcTm4zWpPpkGoL",
  "key1": "5u1xPReimMiN9bVyR1G65qQFnBsT6t3HBNvoVXke38taBuCTsqJiN8MBE9Gsh1tGNrHW8XankFhcGP8qbHvcYF9V",
  "key2": "2Y3qkpRYkMG8hDLhL8qFoVoLqc9Mqw2gGMnhJmAc4BhrGExrT2m7Jep7PfXuHtK3yiKP39fNYFDawPkLtvirRCsv",
  "key3": "4XRSpCQvEkaiFSX3GDSoLH7W5Zrfj8PJMvSuMEtgMRXti5B9XoCnVxUXG2jfZCkQbUMdggAoUy6QhFEqZrEhiuTx",
  "key4": "5t5vKDrbfwVKJL8kNHo6rQSHd1DZLAJGa3i8XYyvnL2aSdZE4cMTWMUT2AQfV4SqZSQP4HJfMYKR5cL8q12Drwjb",
  "key5": "47Q1fnLyemhtPQpSmVEcTg98QSyWBH1r6ob2NHj45TmaZmKgs4fN7b8WHtvTcH1CoL7xtHEh1Bvu9CXu61Sv2B7G",
  "key6": "4PzPsSjVp7hTjAkXDjgw3wsTFE4iaA79zv2ndYu7NSvbEesggViqv8CMWRAQKE1g7ffCLTpiFnbKVuerMVxRDbub",
  "key7": "2DAKGs9Xpxjm8NjhZSw8sZUpwBj6NqGqwdDy66MSLz1J4uwphzJqcTDyAUcsDuzSVRQXxujjoPLzuzYVcnsovCQk",
  "key8": "JUYv79mcX1UkDHiKWKbWmKNP1HCVesgREBbvdPVfNgiRb3qR5mXvUUDdzQi4oj6cFaZFJ29ajfhvNPx91GaMTZh",
  "key9": "57HncK1aMtrJeC6hc2EzqLkBJS5vr3hPJP9oN46H1TUpJmpjiUT1HJCkTB4f2BstkwQg1idnRk5jW8iqTkbnb5ph",
  "key10": "2D4cFtbqaqjfvyaQd6pXKceHpPPZQGvPxpGeE5RnxREkekvYUABj9TSw2wELKBnzxLJzRjH2mGNQp3b7xyLBLRSQ",
  "key11": "2wEaybo4QmoWG2MkvQRnvTRBAFN5etYPm6fu21mduy47iMfgVEHt1JLPSiSXGEdFJoFoGbbsu7KMCiwcNQZYQ1hE",
  "key12": "3Fs5tZPSPoFeMQpKPLq8hX9Qb1119utajWRSCCVBmB65mpMDkQ1eyf7FCXBDSie1xF1vLvz287yWmCBQftPz5pGP",
  "key13": "48Wkahky4TMGc6C5DroA8BzokDF6w8dCFB5KzPCKHUSgQ8JZ67hButMNSZypSdfaE6rJSi281ciQiuMjtfPpbPt3",
  "key14": "3VXGpaoXgCGxz3fxj265AQ1K2mvH2hP5Tii85C6vibp2nXgCjai66GknjhDuze5sefSegwXAaDQ6jmJnPBD4rZZi",
  "key15": "2yetduPfBNTLKDyW1MqXu7Y5mXkDfqCr7BC9VLnbiY9wrDHgd83AqrByx1L1DcYgeF8yDcf1rQnyVbrkt8ftYBpZ",
  "key16": "4KPCTt81BgG7bWFpBjHwvjSF3PxSc75PGqtMoepJ96fx1ZXhfxhSHUZeuBvSYX71dwkiZKtHBxqmYmZMDXniuWen",
  "key17": "2Mffj2bViLu85G3nnRTC2owRDcjXu43BSvRHvRg1nMqo4jQpbkP9DHZk5SEnnvRooEtx3xj1d6qhXJ6CsusYEQAm",
  "key18": "3ggcMZMYxFLtqZk6dQA8AZnuLp9dcHLbjmNvTkFfx8TszsKD23PQrHkEjZjRf7kx1o8zpn2xy5miSst1Pzr1RJiu",
  "key19": "2RxrBbpKPijem2fKtWvexdKbhoJYWZvzLnBuvGHzMexJpGy3BVGcnAdoNRKdCEEUnHJWoi466ioExVXrRccsGqWd",
  "key20": "bNuJ5oNLDLFM3vKqYAN1jdq61HcL62xUiVWQ1XncAsSNgs4TCJSaXGYGsutju7DyLSR3SgReNiqwaVKGSB18C9C",
  "key21": "4615X7NaDcWpVLW7kY9XHbQr9g5MmmYe8LMUrXMvvJ1nkZaxCT2K5m75wnzVMyWhRfKtrtvDAg5tiNHE3GANEp7t",
  "key22": "5p1zKTbZBhp4ZYfBQRzWsAUGZWVnixRCLH46FUeaUgqfowXmhwj3Vco53BMayCWwSTb5KRJPjRZaXfJeTYJsKqno",
  "key23": "3cpQA8ba3V8pzneTxnSwQr2c3pfamq6tDstnXp9NViGsR2LcUL4Agt8dMMZ6wDy6kW5praadnSHu63T8jDP9RJU7",
  "key24": "3H1qNSCZUG5A9CfKRfMZ5qVxrLRXTDV77b9ArRgynnWBHGrDTRToLbwqjFuctDQqFgqDe8eKHLGYV39L5CEJfSRq",
  "key25": "56CXDpW8SdvwQbyBoSTygy3thSbGi1xpw2fhCsykpBXaBmo2uQmTczJriZzF6VtiH9YQZmnYaif9NFw5LBKAeLjk",
  "key26": "4Z7msoJNrJr7mSNWBc7Q6Y3uYAE2pTKjBbwYLSHFE1bpH6jez95cryywshwwDPMwCcfn472EaD5JMb9uwCpPWbHi",
  "key27": "61V8waot5V5vcwtxzDHgbRMTywVMeroKRRmfurP3AT8m495ZqQ8wpnbGE3t7pwSxsyS3wCbBts9GaJ7cUU2gcFwP",
  "key28": "23Nd5MRxB7PYM2AVGbRxRP6JoUXhgF1FbmZDAzPt4d4WShKvF16jJTe2dzUXfLMMo8C4d67CXez7V1VhURcxAmQo",
  "key29": "3QgbGKM8Ecy3ALMPND1D2n2mv3MqSTmiahNwUeP6jWZR5aGDwty6sqBytPgfvqgycrd5J8mXexCXdwCKBPTifrZ9",
  "key30": "4zoYCdvHNcz5yKT8Xs5qrWHSWKmRWTBgekbCRcqYgbLpF9ZZETNW1yPikuBbHtL5bsHhgyESeoQRcb3swuCgw9Mi",
  "key31": "rYevoHkTeb4sJ645SDcnRF6JjQxZU5yRkuPgCCmbshx8ABGQp4wzoB1dp476emwCAXNA63JARRKtiuqYrqkCrNJ",
  "key32": "5t9Qc7SYkLmg7CCz6aTLTTP2EcG4Lf17AvA785G4HbKQNCnXQAbuy8x1RLqZLbs6TsCq2NSDRPw5V3rQVqz5kx5",
  "key33": "5f9i9p9ZmF5PWjJq2Uq12aUzBGKALVjqf9fwNgAytph5fWaSu2Eyd7kEwEDqjokTZCBgd4a8FmVz8N6JAs3wmLzE",
  "key34": "31UtfrPNiHpoQhYd3DUh62nCmg7UxAfRugkdUTcVePre73fT2k2VV1p2joVNY9MKqkEzSVcLD9YNyaT3mbmsYTUu",
  "key35": "46t8kJ251yAw42XDc3hj4pmUbcKx7biCqBua5SNGfQcTqVqiGrsR7QZGM1kqFPfsrmqo3njed4eei3nhBy4E7NjN",
  "key36": "2NTtQAjDgFd1yRNR23LZXdefNeRZNQtycSgWHK5esQ3xG3ddGeB8METEk6kjLdsFA456sv6V5Cn6jcN8yw1anYQ",
  "key37": "29d7xM8fCK4og87d1RPG6t6Z7HZRf3cHQPpmVVfMv8rnDCxKNzae9TcnQ5SyiaDBQAVoEBVYJWEsEqrQaytMWv5c",
  "key38": "4fXVZvaJXS75GfejjGEPMPbUg4KmyfQ1G8oPU5Bo2MSyGEMj6WGki2p3ovt2QVPC9oPnubAf53t4fNoMcuKi1Vh4",
  "key39": "3A8aWqRBVC5ptfewobaMp4yaxjFqgpuKMdVN51cQ7Y5xqUmu7WfruCDQCko5P3Xh1njxiDV1UDdVXReNpZYEyEJ3",
  "key40": "5yrxRAdP3dGgMoggFAYPxTm7kMjbn12akfMGG8ebpfXjJjSawJMxKuqFn8wAozMmj9r5rD2xvZeMvQ9gQmjJ7vqS"
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
