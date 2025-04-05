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
    "2WEojuZq9Z7vULDn28CiVXkWxKY93vdVZ3usat2URJ8vFDKQLtrsHoVcJ84RmNh6jG6d2bn1QgSjn6oUcPqQpp16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Um1JSWHjgNWQajy11RuH7CcTAXfxZEpKoSr6gpsSpzhnCzJRq7doXxYfXCEHpK7DKvZaoWyW43xhRKTvj7pHe6C",
  "key1": "36uGzSvyUk332bpU3nbkHaGABNZLzySpSSa4mHSrKyqkFuY2E18vTN4pnjXx1N7o5TCyqfaw9fmzAGTX1q4KUeD4",
  "key2": "NfvwHYmfozNLGZqYsNpRdaDj6BhPygDu1bETio72WJ5kWQCvvGQuUz7tkU2cY72qVAk5v9qWKjNe6ceucm9yQnw",
  "key3": "3fnba9oi3MneE1mX8J98J8VnpoEi7aCjuvdEmH1rR6bsDbBqsnkm9Kbug6E4gMys7xncqz6oXXLR6kdHpVwax1U6",
  "key4": "4PuTAsZe7pmh32mXFoxDvLjJE796n7r1byBDEH64rZZ3FJ9C97UkgMRFgFEx6q6JbXGHuw4SkjZfriJ5Doof9Yi5",
  "key5": "4qkGoSD34VtWtgAiWew6Ysa8ozDnsExF7X7tZgxdF56YpQVsWFAhaW6783zQRqd47dZBpq44hjLipfBayPoTAPjN",
  "key6": "3cbkgDSRRcDZouRp31w6aLSeKVSGZGagtL2gxrsEokMyAzVHksYtszuSyPpX5r8JgUkJecxhYQ2XerkRVgRtKqsy",
  "key7": "3skjpXFDdqU74p9voC3i2wWewAkgrbgjMgMhPj88Cajp98rTYfx9kas1uJZ2RRFyrT6jHA3myGnK178SWsLjCGBT",
  "key8": "3a4LLYWSZCEtFoQ7PFSfuRBTbpWXZXF8YdpdUGQ3roMJ2MKErNNBWmZ8xy2tMvY1vp4o69dyA2KW3wkxaFqrWR57",
  "key9": "5RLvykfDzaGU8qnpUqZJwA9xYzUdMcfiVPYoZNu6otG2aHjwNfmZR2uBsazkRuk5YNMipoXH5zD7CnJUAe5Jz7VS",
  "key10": "3NH7iuQfik2v4BJwtrsL2BgXmZ82MoEC2rAyYv2SJCnDp7jcZUhRTpQddhFUnpr334scBSRRvLHRZHhhTHUifjPA",
  "key11": "5yLUEUNhnBQaFFwPPVBkuPrC1URdQSJ41HtDdr8SBp4DQSqRGYJscP7EVPnY3sz4AATJBScWddRE9Kn5hgkiF8wf",
  "key12": "2TMaT4k5zcCPQFMMm9bTPCMghTVagkJPNCn9YkQLaWpsFKrRkp4eory5cyVEaUtBUzvALKEu7vG28Bqbh566B5qm",
  "key13": "3hqGPwxBKKJDAwAJsxK5D1oLm7gDnLdnMiJSrcRuksFrUJPyZccnEn7V2wdXvykU6wLzAfWaaxR2TwBD3YWxYa2z",
  "key14": "2MoYiTU12yKdBY8gDUNnDeitYBm6DYpwW6czrdC1D7mZ4ob1pfnHh5KCBuVfG7oeJx8X49GXqdKvgjf7ESAewcme",
  "key15": "rv3jx8wt9WTmPW9cejhWTEcM2PcazrUxB9a7VoztSBcyiLftmSe3ZJqh51AHyQNcw5tX9qHVnkg9425RxFjfijf",
  "key16": "3WXeQsr2x8e6ruvMmS4meJwb53pb7LXgPG9rZm8knoEz6BmEBFYgdunv6BMqmCEaCmLwDZs3TzMc5MoNsE99Xj2M",
  "key17": "YfCsCWSeHQjN1H6ersTHMF7P3zV56mDp5sFHg9tgEGFjKen4gubyuQEABm1Nogc9GXWxtCPyBur7HXYr1r41t5P",
  "key18": "XcREfyTqfsvwtQEjPiCQTv4TiiSP6LoCrQfp1GWkmc3PV3i2tZxHuvSR4CnWKfs28zaL1hGQCByVtvnSsVBt2AP",
  "key19": "5mkHexCe61kAHfmYFibWG5cwYevELa7Xmx2wSTDi4FffhWGNfAxNFnoM1xwrBTegWBGiHRi3JE1S4MKbS2BhPdpk",
  "key20": "2ZQX3mFEaqbAg34YvejBMT8VS5JataG9skVhLCJE9DN4QXofV43mZGa2dhqmA4NQXAfSKFokHeZzyKim5WNh27AM",
  "key21": "4qrZhswDZDMtuXuquMxohpkjCp4w61Dinu8LQXUMtVoRy7t2S1sy6sWwgDHrAKiuoTRc63ix2UkGyWhuot1JC8b5",
  "key22": "3S6SeVBmE1xHDbKghcVHiKkHbRgnSCNiuyaiVkDHRMa5v9yXaGwMQq7BdpLxVba7XCpnjwyPYnVLutogWQdmVtLf",
  "key23": "5GBWPhJERAc3psi6o3h1sFVofHM1SBE22VWDjHCvi4KVHkv1FiZjZz3rGAyeYeUEywF96AYJ7bvm22ayGGg8y4LV",
  "key24": "5U8mYDfjsoxEG3VRKjax8DK8NqTycnZ8mCfYmWUgPdmHMgFwb6WvfZFbgMUVMKeDVC2xW7Nq6GHTA5CMjd53h6XV",
  "key25": "2SWhqxdwBiWxEtihaTmkULF3wzWmJ7mkZa1KxrRtZTejwaPZur9pmwUJaYtzsnXC6Ly4iaLVAzdDyba6KznaURiU",
  "key26": "4Vnmsm7pgdfSMEu8MdPqhZzoHKU1zJnNwJURHUqGmFHqPEw4UFUxFduBDcfTwCHW5n5VeYtPDNqwJYhmZ8hXUxee",
  "key27": "EhDJoi3ugZSd3C74ggnhZT8hxS6BsuC5JTPF2JQCQZBPs46ZLgf4ZH1GekHWVUN9j3RxBnxGEJZ8aK6ybyXera4",
  "key28": "4BA7RWkcmTHtwcpLAVPapdN8qvH3hm9AGx18fUVEc3sWEvbHq4p1hm1fHmXRLdf2twZ7ADjYYGpJnNVP6eJupjpj",
  "key29": "3y8L2Tq9HeCrXQ1fRzUaT1SzhWQukvEAGgQiHGpZxftTm5g9yRpV3yBM7YtQz1qV4krAkyRSJgyenjfveFv7ivDn",
  "key30": "3NtFybt4SWekgzyiChnWvQuJ8MjALoKoELurwxaQ2M6Tdpj9GGkAedzc9SHdgxkctQaY3mcogBBgjLJpPyhrikkz"
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
