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
    "4bkLfVc6e53RjqYe2Vqn1uyTCvs6yhMmMv5RETfFb325fqhzwDraWUBvxU2K1dsApg7xzR4SsR9A4iassSQoDiUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634qmQspPkDM7QFFrpsmerjnddQK9ZUBysugfAZ5iywGnTLskT3PRQ4Fs2wvMh7ugcA4iJpuDtU3K3F3L9gUokiC",
  "key1": "4UZwcPnUYQAygcp2FmZ1MuZ1UzzxuqtAeoUTzXeq54uAT4uPKheW4wemyt7dCm6UTpvYb7HB6JdrjDYGGAjZNY6z",
  "key2": "Qh8k3xs4y5op3kymzZpBMFW7AQA9uds9u42m1YnnN1Qc2FESGr38D3gDtKA2PvF3s4RzNzr7HUMzcZtoxvrkVDM",
  "key3": "1ad2M8JaCcbie5yuHvxCZw1V45NLrhahPbMykdZ8T4P2WUtvxL5Gc8MoVb3TgUV33Cp6mSaHVX71F87kVGfGZM3",
  "key4": "HqAvCqzHGvXnqJs5QokyoyF5rE2UEcLTyhdWEabE8iNrZ5T6ffGdkq2JsUPRcQnMJYPhxguw1YebWPHBcBCfr6A",
  "key5": "4UuugKu3hu8cySnqTzkyqGExi7LoSPGc1tb9LkXppDX266P1kpTNq4ktEPaVmwxkrvEtxCjDYis1vrSeAyJJR8iW",
  "key6": "2y5ER3WEHBgkN4WhhcNkkYMywKWzFdZBcM7atu7q1i8NPjHsJeu96ZZaaBNn3qcjdVDgh8SmULErGmoWz34dSr9z",
  "key7": "5t7i6vuqUSLA6rCbs6foAFpRK9m4cBBumpCaiSFbXsD9DCYiDyUcUx6fwkJB9EHk3PGHPqjqsSBiFeEuSPDxode6",
  "key8": "3eLh4hfwbheCF4PWXaBKARzEyLdeRYuxvssHkw8QjQSMxmtyLzPMvPBJEbA8YpVF4t2yYeZuyP6chCo2zD1KRw9c",
  "key9": "5VWMg3hdnNQZSDtqn1zPAw1VfJJo72xP6TJNDezEQTtNX3PJpt2FkpEFogpCKYryCRE81tt7b6Jkf9ptZNvpiyTL",
  "key10": "4L9eh9cNc6x6AE5CNjxET9BCC19LevJLaoXu6ZPQBJcsSftSb6dxAAGcCHnn8LKxUDcuLvgGrHjUrqBcf2D9AnvY",
  "key11": "2buFrJrWjiy9ifVcWHmhQ5o9jFVhfAvDf4qCAWZFCvoQ3cacYgTQR6bq9VFQJFi4rXibywH3bRYdCWSRm5mEw8NK",
  "key12": "2rTJftnANdCxbLaz7mNg28ytX4bEXvzphAMMvi8uro4kv5CprtCQeDccWShsLaCF7aBTQGpdvmcRYCsYhFJnZtoa",
  "key13": "Vg4URM2HyNhE79F1qdRMjkGnh4X3Dtu2mNUM74frMBQFYn1gjP6mM32ovB2Ec8kP7VxRjFgB1fs6ADA8uPQWzZg",
  "key14": "5gkQhiBesSiokXewy4w7VHr8AGi5G3YxDc9tqG8uMCShxC6rpBFX7zJ2TiYAo8UBcWpRaZVyESX9AtW3MMX65Zrk",
  "key15": "2KxQCW3f8xkSvTG43f43CogGsfNrnWdqW3RCAGeTSDgrxaLgpxeteo9bNAanqwaHuukNDsfTFhWYybqJ7m5CfosU",
  "key16": "5pwtXieKiBM4ZC4m1M6t5KaN3WRcyDxs8F1RY6gxmkKrC5sC72REcCLbkMt6iAP4rhXtFXdLdU2AMmew4gsk8jef",
  "key17": "3acNefGUiEqaCE22eFWj8czwgEb5dVsgzr59dqix5FNgbx9a9xMQUrHXx5YLwDAHZHuZqDUDhXop31RiQssBSxUS",
  "key18": "46yZD5wKJCKYeCGmpuKMnf73SRav7tqVZf5WYmyxLcWpr2wCF6i2xypg1u7FnCp55MFS2B9Nh3TVs31ehehzgiSj",
  "key19": "2VxxGkeipA3nRTPEwa577b5hmjEY5DgrQBVH96Est3UuUsof3wDsdiWDP1TKEvTjcQxTP2v4EtB7Qz6mTdxvhLr9",
  "key20": "3GqBoJ8NoJha21L7paxZWuQotQdz3uvvkgJbGTaspjjJ7KfZsC6JXmJZFC3KCk1XEkd1qbccVLEkycCQLkuzW6bu",
  "key21": "4d7kr4WijTYuDXCNtpDwsvgmhgXJnjH7WX11PewAh5JPDzLCPVjsuWBv84HZWKuftiZYCtopjyvJGpmsgW557jax",
  "key22": "2H8eUipsqr2MGqP9iBVVgkoCMFitveMbK1dq6EDoh6moskcfCxL2pBgtDZA6F9gt9g7Er8M8tZXihd2aPnENzVJo",
  "key23": "4hbLVGmLE668aCGmLUffd4FK4wNXRmGBxiCMaf6mZR6uuSdoVUYEqJqV4k9maQKvAkBzCHh5gD9aatdMJv47J7kJ",
  "key24": "31S1aPGcdNDGY6tWWDQwnpEGfnHzokQQ4UxUtkqDENuueDhBmWsTppUo6bkYpVTzLAdg63CKnQmDadBe1o3mSpyQ",
  "key25": "43D4EXL7c1xM1mJt7ftfNkLUD1gjfGBVtAnTtds64dboiXumwfi7LzVXJmzP96b3JHT6i2HV3bRiJkEkzTiCMfcd",
  "key26": "28DWK1ExstwAkzApRcoTPJyTwzJiaBbEQk8uXYzrNKRnz5nmAnsBbRiPYJusncB3w1YsqDAy4eHZiedfAwPPBtJT",
  "key27": "45PVXTXhC1xmNMfHJ8psBG6sHyraKKqJUny9p5oGgVyjVWRH1zCTQRoHnR5r16ZRnNBCHfsoqgbAjMaA3MCLbiua",
  "key28": "3uqrLpWD52KzrVckoNbXBh7Jtt6WLUW9Twi2dfXufJGCiiKDLw3hi8AfWfe4WxKGHJ4FCqtxXLHTsr3FbZpNUg4x",
  "key29": "52vjW6MGbUEcvwAJqZcV2rZpFo9V9LAT7LdSCSfbehdEeJdCE6wqv8MHcDrj7nx8cy5PoBzBRQCj5iZUXCEjnqaC",
  "key30": "5Av1b3SHvTdsFPJXvVNAS6PQGSed4UE1mTZUmYF29DjajGQapTMpUjfUoohc6EhyAqyJwmEPHZ4nxbn6ZBfAxjzq",
  "key31": "34wbDDQ9mZy1TJS2n7HQZaW3yAqg2nQQntGPP5WKAwvZRtvU6NcsM9MwA7ihpWgDQsPEN1QWgqye546J3TpDJ573",
  "key32": "2jF4mgJv292EknNQRKFgi31sHGtEFhyru1LHAst5Gt1BJofBGpEdQbBxPtZihDb7kaiZg1uMRkqv7wdfZaiwPLwJ",
  "key33": "2VsoNYFai75MRHkXTWDFhJyaoK74U3wWm8dwBuG3Gj4NJNv9ty2SXgW2p9qkw6ZYJS5BtgozrGSy5a1fzCRpbRx"
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
