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
    "38UnXbEP7qxqYaNDZbKDZNdumS3PKHkXgqa5ZdgaaXaDGxMiWpFvqWveAus4H9adRobKH2Kj6N61NVV5f3JaHNQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZ7eLUk3KdK75xV9TT32c6pRdLiFvoi7qnN3yUCW297jZbqxQjyWeTRWUcuZe8FnHwnYbwdPYQaqbyjfVPtFfDD",
  "key1": "pH7WxGiYm652Nkxyr8VStXLZV3G9QQ6U4YRb2oYoRweZwEdNt6KAhqjjhuzpmSCz4a2K3Pmm4EC6njW75g8x19v",
  "key2": "3K6dPAEGi6CJBsT8aLVtMN2LvwDGY6gH5cVVBLggoAiEbrugk6wHSsJRYrhi3fncrxHJuHH42xRVTANoprmQUrd2",
  "key3": "3XWj7c1KdTwAVuwetTLjCqirdh7YidMQ5k7JFBwFRihQG7hytXwGdVQU9gKfQyJA9nA1iaZtX3d3kuJGfUVQYgAY",
  "key4": "244ooPDqNosdupzs3PknrcEDi2UhpGTqvXzKh8gdDLZJJAkBnaPwPQhJZcFR9nDKJZCDKqL3BBpc3AZj947noqNF",
  "key5": "5gM2ASQsxxAgKkyuK8cqp8ymEv7hTFTbRQQGA4fJnw1GJUG1MTa72YtXV4y8JfLN79AYY9MR6bbNpvAatGa8Zmis",
  "key6": "3qv3y2JzCyKcFqwXzxBBhbiB4cAwngQkTEs2nxF3SKaTpQhCr9Lv2hiNwKSM8ehKxYNfY3a2K9uy4hJLTmBTV6po",
  "key7": "MaGMH8PE7gnhvrgCzDZdU24dzN6RBNXCLcG7uWmFWahGUMN4FFZ5Wua3s9UN1xG2zSEu39fMrVExmSdauYKr8hk",
  "key8": "3ixvpN926sA36BP4MNSykrvyo6vJfPX2yGD5foBBmry5dyXMM3DSFZjz3Th43yj9ePgzXVUBba3FbHhEu3oCBxbX",
  "key9": "5dq5R92J16KvjVnUEbFoafohb9LB2jD8UVWWNWyFq19vSaer4FFqrXqdAinoeTf4qvK52GriWJ6zNB5RzJxiukm7",
  "key10": "28S2DgcSz1pgw6P9PwrTC7n1DLQdM4tPH3uvyzDi4yD3d7gWg8pRoy6HfUMMqfxXfPqDEwFDnd9pRhFZNYEcE2tS",
  "key11": "McCBKbMazFqKAu8Rmhh1i5GwDSuHBKj4a7L4MhkzHVUDJjXLK1qAzUJN9cE2BMRV4i8vEC3MKa9eSMfNPwrqcEw",
  "key12": "59tvAc9FwokduzQSoSsP4V75GeESwgHABysajuPAdNLvJ8bWgdtHXoTgU2t7DhBPmJ9PxWJ55KosMe6pboBjGWXJ",
  "key13": "fmohiaKPW44uUcAPU2rgd4SmBSSwH84ePtUbAif1k79q2k8uRgEvE9GQRauzAYVqBvTWG2LHqwjhZXn11EVf1DG",
  "key14": "58yuFAnaqkxFfBjBAzBFZ18zpNjkz5WSm8Jbn3mUeHQ22CneXrq3ab47bYtFiKRrC9Yk5Bcwo9KfxnJy1aYq8c1u",
  "key15": "5w5bFA4eCy1Go27avaxzJn82p8dab4fjZ85QE7sXFiPnLopcSZh6dM6BWWpo7yDPkbMzGeCycj5VARH9KnL7jsL6",
  "key16": "2BCTKTFQrAD5NvacoBCH5DBK5SMbgXDhkpd2Tn5prZ7guf767U37YCiZwP5DVTNt2PZ7L5JYNYXiMJpXqcM1RVE3",
  "key17": "3qoK9zkT8JWYLpaQPEtZMU7x8GN36nTc4KUuqEydYS2tjfDpoGYwXCSypswb5NhdHq8oSnjJCAXMKwQWZVeEhiQr",
  "key18": "PA96K2QLdiF14sN9rmMGCBeuwC1qAkZkiVrGEUTF6PfB1LgsbcvEzsoEyUBFp8rfZmRMYURBac8a9aqa2HGiczK",
  "key19": "4idC1r3sk7qKRAuBLa45Ccrk6QLty2Z1bmjnmSA4Ggr9PKFvq6NxkAZBd7ANSqEEBnPiRBWKjGM16xBZsqJc4hzk",
  "key20": "2ZYinpES96jpSxEXVzJ9zVGqXNGnUP8Rst13eGbc4SWVDHiFAJm76KknSKHND8bisXk6qo9DKhrUyMFAtHBnQ8rT",
  "key21": "5T5YjwjYujddACPsWmyju8gh9fPKgoAXywWrUcSsSroHoFyZk8rzxzS63FP1waqecTZordeJa4gNapgrpk6Rn6Kf",
  "key22": "4jKZf6LWgxPeux8QXYM488mR57LiSvVzSaVLkCcLjiskPtM9tgQ4bqzBYXmL2kXettfD1CzXX1nFHhACmEvR5JtS",
  "key23": "3yA7vf1x8vme2GhJqXuV83eUTbKFYRRBX1FKdbsonVgvgadJfQdiv5e1Gq9tZZF1PAb5ucraorRxAH5mH7ntsC5o",
  "key24": "6v6dLZJvFJtCDoum1qXLZLRifpqPBWQ839KErwqCosAnqUyTom58EDJCHbBizMqrbFxj1rsEikfg9uUdxAVEh36",
  "key25": "5qQws5T57dELSb2gn7Qr9Ak89BQ2dciRkxuY1GvscVkLJvSna32h3rHwNmKoxDxupVjbprhj2j1gs9A3HWtitFsy",
  "key26": "3ewH21MwZndGFndus6LgAkWVEZeBKdWgToCxRoZ5YRKCmTxv4zLSHR9pSKwbXNBYPGuJFuG6QawiBfoEg7bJ7hnr",
  "key27": "3fjmf3NPNsBWH2npJmC832JWoPw6awBXDBGJx6ZdQiXV91PwsY8QAVFMCsrfr1Vy9zWRpWmCKj8V5B5yymre2FmY",
  "key28": "3ciwLb6GR4HQGYAS2k2pTDZ4NpAEALWNUSuuZJqMygpSKsd7EJyjF4DtHiiSEzBNjZpia984TouBLPcXCuoAhxe7",
  "key29": "3X7aeHqpki9Ej21H4zn8946vs7sr7qPmFcZ5fpdo1N6z2T31Vmh8KmBMMbYYvWoWxpFQJqSHr6bzw5LZipPYRzLR",
  "key30": "413Hsx8oWyZUdKVmCXYvrqTunM7Ls2f3EA1eib5Mv23BgahxkekcrnSPnJHJLeaVJwxiQZSnUaFFn5KMwwjC9EmH",
  "key31": "5LP56shRAcim2e7jcZpPryVMoKXcgQubRx7RgLdk48RsR7AEJJ4myqooLJ588eVYr9q32p4q7q7wt7C9zZ26nzn5",
  "key32": "4AGnkVkoGwRHye78gP5Fj7Wb9pi8Wcro4nJQ4UBY4GQDsoDAVwYxyuypT4kb7Buqdeq6hkcCL2737UKaFYkshcAj",
  "key33": "ntUuaEztDD2MYi2kBSr9agQbi1CB5vXK7jooW4qnVdZbTE5kRsFPJ114NuGLb6xRAuDWhRPkPCUqyYF9yPeRNQH",
  "key34": "3Loh7rvb4H3VQj4oj9T7xDsFE5QbWt4AtTMgydMcpL9xSEt7tQ8yrvob9mCQCXfsBwhYDgLLBeJTLhAPP3XNnt4V",
  "key35": "3PwPYkhB9th9AoXyYbzWpxYeq7B92uPs1KSJ1necDvXyQR6TofhQiEzWkr247etef6MjjNWujebRrqtWf9mUtwmU",
  "key36": "67MydDRHcyjaNB8dKdTFF9ghrFuFqU7BjF5R9tzVQD12pDg3nmBqH2ynXqWp4kMRW2j9WnwpqU3A2R53rqEhcrh9",
  "key37": "2faJPR5bgowMYxqAV4acNpubrgbj5RmuZgPSqBDvybRViNZJF72YgpAVJBpsc97AiRtLUpKVXGGBf2K1yLCsGBiC",
  "key38": "2VzZToaKxZwKcuergoBUt4ofzMeosasbg68nNtT71sHtH77aqUEsipsLKBFPc8ahEBEiHC9nDFh6MwpALFszFm8b",
  "key39": "rKePk7LNQY5VoVpKJUKhxLw92iVLZCK64S1PsyPg3MJugPfcBPtPTfUh4JQHgvv5sYoxWw4Aob5SrpJbERbA1tb",
  "key40": "663hyFDrhUoct4z3vd2R9NmJuUym4Y8ALrx1fPEG65ugaByphBwgJ8tBQWByd9Wgsp3pJvoZGp9WurwwzMjtqt57",
  "key41": "HYGgmYXwK6d34YG8rr2LnatkPsPaA8vG5L95k8ZqqFzNCBgLZNkeyDNhoFujbeKEPGd2xdn2mpwGtHqQ3qUeGrb",
  "key42": "3bsxd7cJE33jKWp1yd4yv397djWMm1ciNP2kCtRSm9eNog6n2Vo2y9UNomy4TLHpikKHv71iiewCvC72EbGZMXn7",
  "key43": "Ai3cEKBWZ88x7woia1PvjA7FJ4uuK5ezaC5hqKTn9QqC7AdCWeLSxy6NwFRtzXYbNYhGGcVfmEJuasCTgk48qtj",
  "key44": "413bQFRipFB6VNnS8V9VVpXPMfsaKuVR7eN3WCHHvaCodxsomyrzghELHFW8gWgPMsws2CWSPokLmydbGHmLgbSe",
  "key45": "2jymK1JecfiBAQDoJnymK521Ri6vd3rf5JDRtBgyjdDKxQ2DGCEX5kJ5q9zhX5y7B43iHERRaxwtghDaCaUNZjV8",
  "key46": "5tDzV5z2in4Nhkorz9pJmHfiXTVE3YTH3vsdm7MvbJxSrKWDzmL3pzhjdGyiiy5t2p4dmjgG7gSMou6HKMKGKEC2",
  "key47": "4Qw387PUt7ofTHYRXRrgCtxnPVfvbRr9GhkF67koutMV3HzrXpnowFoUheV2zZtPkhiYB9nZA1fP9FfKHb5abF3c"
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
