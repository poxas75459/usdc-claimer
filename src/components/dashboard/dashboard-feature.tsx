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
    "3c9EDjbs2HnhzjcXgMU2k617k8dzZ233GjgS1kMNLMvWX1wp7isvMAvGCoQpTEHaXarVc16CiumuBN7W64eyPGLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMwuNwmKLs2eJuSwRQMkBAjE7j8SGeELpaAGX6RNUprSkkWW1U8eQWxdEKH44SMinT9rgqCUoQfJtLzmnJPwEhG",
  "key1": "4C2Ux8LkQTCVrwehwPimH1xxbwMVeRZcxSPNaLZ2QJvY5s2tZ93Mj74pQtph3G1KMDD4RXmzzz71vqSJBqjxmyMV",
  "key2": "4DqUzGZcFZChGGjhkvMgH2iLLDTJA8XrVzF7fQYbnxPgQ3AfMjw5KGxLTTRJaHN4Jw1FRrfheQNfked8QGc1sVoi",
  "key3": "5KNEVN6XiYRJg9qyAQcdn4UhEteHZAx7YKNQ7LYG8UwFCuv6jx2CutK3rXZ8fuDb3226aPKEbWvTQSVTx6N6sfUa",
  "key4": "v1mKKifnz3yULbccyyCda4H5vM2B4fSXB6mFFJrsG6uQpQokznXyjFZovzXR4g8ZW5QgUFxHQQ8cVjwnhsmtAuF",
  "key5": "4nesT5nuXz5VePmq21p1dEg478XQ1KauG99kGK6zPh35DnSrVNFZhfW6K4FWqYE2j1g5HAvcaBvthsxXtcUkHQkE",
  "key6": "2guX1wgg7cxrmXAsdA6dE6orcGkBuuoxYyZfy64TqhXajABwnMp6QvLgf9TYy5VsMeB5Zk7Ns8TxTZjZug1SyGDz",
  "key7": "4ZyP4SksoVcW9UYpSYBwGhfqZ3oLQUdRcGENzZFhrwERRyQ9AoabAkRxdsGdecXeCJLBHq6LWf3x3LoviiZD15hN",
  "key8": "2Wj9HywVi68JNqoMuSs8GZTm7CRbVun7Nsepkzz7TvgHKUqbQbTQ7huXA5x8VVSisneD1ZxMuuJJmUnQVCbzBfcJ",
  "key9": "4ZVDEEZjCg7jx3HLrQ7h3KkscSFTuHDRrwDDLbSzrttZU8uq3z1C2GN1qaVbtsc7dmFQhe2VgbqN6gfsDKWWcwus",
  "key10": "n4Z3nbtr3JTDfTKwTiEy4QfFkdc6iA8mVisf7gzWs2kH97upbcn4Y8S91nPZm3PttFEiDCQa5JW36ipBm4pUVFu",
  "key11": "5tTTEtcah9gnri2Q3BLmR5iMSazsir31R3pqL9bxxvHm7ezurrErKgN1thUkfi75hG4FNnjAEuDRK1hQRDDXzmEj",
  "key12": "7sbVgW2ug7oo6r7qp3tV7k6owxrUEM1XSBsoiUEKmX6v4WWLNRpdy7Nnm78eWmj4gjVHGbeEfGb88DbYVeuA4Tg",
  "key13": "2ks64cQRn44rn4P4mc9eadvdNREJwV9isCVH675cRDQC65HLM6uNXxwKugHmdZzWRH3T3ELDqTARUvv6FMiycNMC",
  "key14": "2qyDbtcwLTnCDKHhtE5Sh3pkUXk3hge25ZaURfXFzgYhiqwk1JLU29mewBW6fRgSv4pvhjAUwFE7ub3gcbVVADhz",
  "key15": "rQ63wKws4k6L5LTsnDkGVrNNoxxZuQdVYHVTrrqrMEL3GNvp96mZAFNpAFZaVhBWfzTY4ewmYcF7BeWBc3FEv4e",
  "key16": "4qx9u8f2hBeDGTzURGx1YEpqciG6ih2m9JTm5JvELxDVj7zHRrPKDwfyvSTFBmri2kXMAynu1cvmEAPaKUsG3xzo",
  "key17": "2xGzSQAZkm6j5dAVq1SNDZS8fv5EBfW7UnAmbttDCGsNhHSF222ddgDXDbw4ckfkDurknyjSR9w1PrZHCowoFEe3",
  "key18": "2ZpnF2SBdBEAuiaE5zYiQf9pvzZ2NRVEzZCrnXEfHDuFG75zmKw3j9brkf5dzsczfu9VR8hc6xFqgKJAnUgpJBcC",
  "key19": "3eTS6z6H5sZYASjvY8QEmoWZ1A5rQBTU7m1xHAXP7Hn2tH8ANNdQ1SuqKLZDtuEoiUBTpf7XqTX6cZWY3VXsZyct",
  "key20": "2mUcypDejCE9kZTKb6efjqVZYJ53NtFKkEQJ2LDXWBtvTpdV3EEbM7Waq4iCDEDpXGQwBmfrP3vhtNH7pmN7gvm1",
  "key21": "GY2HDVWNRwBXyczo8fFwswxRSDg7AhQ9NyhheojDuKGtZuLkBa69UvZENdioo2TRGcKYCHrVBpxAt9fzXCFoUw4",
  "key22": "4ak3ZLREBywm9qP4tbJ9nSGVg4J5Ff1eht1ZLqEA7JBztKmQDeV3CgwcHwfT1FB9cUuqMqtCbkSAg3j4voETgxuB",
  "key23": "wy978SUnSGiQoEQqF6izLAw3VsTCtfE1AAs5CiGK8UHk9n1pKa1VasqNhc4MhzdzxYnTLrfLfhCCqEAEgbiv4S3",
  "key24": "5ZTLRQzscqUaYWt9KwAdPvBiWPU1Ad8BGb9rz6dZ8n3qqGZx6feyWDfWzku299WHpiD8ZXb9bsG5mVAzw5ECEDLU",
  "key25": "38yNgNAwhk2RSjNCHjdvYJyRd82HyD5tPPqpBFt99RhKji3EXHcqi7M2Hd7fgRhBLW1mHKMqt2oQeeoftUGhZKAc",
  "key26": "5H1HCmVLpQGP6XYvGTAvYnN4F5uTsj9fLdV3BxuuNRi5MKzai6iT8F8ttPJvyDPUstb64BeJUPfHXjdW1ShdAMtR",
  "key27": "2sRxMWde3pmAfy5DSfdUM5ox9kCAjFVnEZMieSUUymNMwa1eumBm4j2AdhrgxANs1ZikcCFgvMJAzxo82yGeR67p",
  "key28": "2WWR6KwnpKNCjPsRQK7ymmvmkqNQznUKkj9RP9PSCst7uVxSZwC81fBu4FNCqJNsoJgTuFYZazcN9DjSkJGpca5D",
  "key29": "2b3VvUWwXB8SibueCbHcPS3YgXvmDF2362q4Rh6HqQqpCqszUkDpXCAUbRfdN9v99W83ycJsSJmo3jzFwWuTqd86",
  "key30": "48Tjao39L8M7PL3ZX8HwQDpHRt67ASW5Np9X7Mw1EX7QvmkYFmZh12TgxkTB4m6EKTZWUM6sUqEX6xrD6Q4Bg8t9",
  "key31": "2L2aK7QF5ji5NAosZZBcydMpw2ehdy35Tr6uXhKobbeaX8xjeujXjcQCm1z1ahU5oe9dMbUEDKUwjYqQjHjMkBfm",
  "key32": "4Cgycr3K6GiGbwUR2gp5iddaQ6Lk4aRYbuCpCCLx4CnmbCqvU1Uiqf81PVByrLpLLEwAWCcSTW2WmRcXkmXaqkHs",
  "key33": "2c34qhiEBHDnyED11nJDsLLbJxxgKW2BwQecU3aKShWuurHsqBaN5WvJU6HbN2996Btm9VXXQkUZv9BYtihUcgAU",
  "key34": "2XdTXCnGkVd7ccBhKiQDTXrKCEw7VGdwkJ9cX7m3p33BsZS2oH1m6wApuFQbDaMioJB9gYvMVakYTvcTacp2PHQf",
  "key35": "3fXAf2BWAjsmuDpDwaWGqkAEek9Mo9VNySX9YxxKpAiLrJW1Rk3enS1n4ef8y3LjqmVmHfnogoZF32odwbETZw5n",
  "key36": "2woS5N2Vyab7kJaaGcySEq16ioXG22r2xTfJF4ac2VnMEe8Nguh1hG1TmxwrHrivNHnnb5NN3K4wVePWE74Mjpwe",
  "key37": "4UW8ghV56UCrfwMczJma7258HXfhKnUtmkGYsjd1KdJLv6EnWK5iHa5ZyLQk2Nt9pPbf3LhqpmofNbVeLtmKtaTP",
  "key38": "3c1vTBoRewAnMej2KkWWruTBh2JhehSotdnm3CLWMiCkr6nUFeSunbUstTEZ7zUxrWEuqR2yjBg44C1xKMFCJCXR",
  "key39": "2v4uMGPL9pxhj1pu5ejD6at2fA7ZZ3N2NQAnUnZgQveF1uou6LA5jLvCbRfbtpga2t8AHgUvv1AFC4B9GKimXc1w",
  "key40": "3hTCN2XfkDSGszhiosmNHpHLRHsRFNSytwDUi6yyPUynTAswDtCvbrSu3k8CwhFVSUipMpij7td3h79WDACc7Bdm",
  "key41": "4UkjaxerixFDEdiRXZb7NHoTTWQCLNG4s19jxndgTSCYZE5QHvrrxn3uNkszRfCfTzntrj8wVSYD98nkN6jMvKj2",
  "key42": "83Sxgt45Pi51LxbrAWVCErrYZCGNBsBDtkWjU4hZxwZyssgrGKvcsrPeDvjtXA87AwSdpZfJ93Hmn8jJaiqrXVM",
  "key43": "4kuWGcxice49mDn7Up9FkrqecV7D4kezfGbAMVB4vc3n67chVWsNG171DMdz6DodwnkrVUqEsiiueXJ8UFbhbykg",
  "key44": "2puUGWSWyyNdUV1FM6WA48WRkV9jsG1upRy8FiePq2JeEUC77WpYXbjATh3ERYV7Sn4Nv3A4Qu7xqKZqHmsjego3",
  "key45": "CPedUZFNgFb4Qnt1LDhjmsJvKbPfHjet533qg3g8G8CRQWgCxAUToxGS2cwGa8vShnoFgmC5aawAtPqm3wQxAbu",
  "key46": "4Trhf2rAfQ3sWzzjc15L71vUMXAF2tc5KqRkniPVqZ1tktJCkjsxsiYnqu8QRBCkjcS1qYZCZrsmAGt9tJg2AbeR"
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
