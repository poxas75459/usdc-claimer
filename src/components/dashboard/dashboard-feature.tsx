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
    "3BJvV8zDQ136kzBafwQciET1HrfLGEav6bdugFvxySJxRBuHrGr1GCHYvTwpWVJ8huisTKApPmGcABDV3jxLMuje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGrRyB3ekLktePMwZno8ooQmfh1ZpjU8nQgdY42p5PbrZrerq9Rqr1FjHy4xCgEyuvPG7kVtZGBzvFhb1uxqtQk",
  "key1": "5LsdsHFxhqzrt4nqVvLHXZMkfPnndLJbAVeM475zKYwzbt4jgiUT85W7KKiQTnV2m9UUHHLNDVbyqbrrpbMvXQWg",
  "key2": "2kWRusTyEwm5MhNzhFVJS6bFKMcD9hULhRHovFZ65t94Aa9gVG85BrJhFjzKSipZFG8uiUsPP7pcGqgtwChqYDFE",
  "key3": "WHNpXLd5ekvH43o7L6jaGdyPSwBSn8xc2SSiZg185tPXoCwpJpoT5mDJfGLsPYj7LppfdDKHacdHmqz6ZEHkxza",
  "key4": "4fwhLpaYm65r5qR4G8ehQ6ygGLqzmqGjPftgXuzoAw1tmLpqrsnUXNCLiyhDW6Sa3juyWpFN3ksJfjCtBhBc2VUc",
  "key5": "3kHZd7dHj1cRaWPfEvrBuEqfLqpzfrM3geif7Vd9wpH6zEPvvuieS1RFYiwiF9xANvPmchyC28a5b129EPAxWmK7",
  "key6": "5m9qqQxHYrJUj32YN4hPEygxWJ5RgkcANrF5kchtTzv8G4DQKV4uV5JYHjgjkRE68SEgdDb9vbXz33MAUpj1JC1z",
  "key7": "4xEU5B2PryTrHHoHAtNbnrzWH4E1SbdHTdR9Lg4r3A8it2pA8f3g4LcMCrHfCqzdAJh5e9wQUakB1SRgC2FxFJiQ",
  "key8": "2aqnWY9TU6RT8ghkSCbuWWYgUkf9ALZf8b4EaAsP3kSW3PF7LMBnWBDp2acJmf7BAVV97ZcvuacNsMmu14ZANyjF",
  "key9": "5sKwSn11A8aZD6k3WydZEzgaFLKVnmajT9o71rkR4HsjAVz657pA6dAXkAHku7i2rqHBi2DNnuK67uAFuS5zFhcM",
  "key10": "4XwAqu2mhESNTUSDaQax5wbnGzCiDPZ8tnufQrHnNG4CS2iqGhRb7KH12iYLHe1CksbXvhs4AcNu2J77T1GBp5Kh",
  "key11": "BcPbXh3wwmrjpfWiQxvz9M2JgEVeCK5jxztv2AFbZKG3SgwwxN5NuXd82WwVCL43a7y44RzEi4yDS1NNVUEQtgW",
  "key12": "5wymyStokqbjtjbWKNV4hTu3JEL6NPPfMfmoHEY7CUDVvGtuKaRPSjv5hLtvShgJckAubcb5i2qCzrWwbF1jXz1S",
  "key13": "EVPUhvnCoGNnT9dzxHdDDq8deY2VEE1Wm9ZzMHVLCxdW6SBGcoQqqF7cfiqpKWxYNozmpdrcvEaGt1yVsdBEX1u",
  "key14": "2B3Z1Wj1kKW6EzkR29tPxAh9MNDmyrSrDGfBMqCw8XTPyW7Yq9XoRJQXqgkzZdbGHsDjuM2D8niqwEQwsNwfHMnA",
  "key15": "55K5bWCRu3Esd4sxumUDdtV5YaEe1nfQwRANbN4Zni5kpn1fsA9xGkdfvCwbJ63B84kCUMg5HuQ4DNVkSYPpyWSS",
  "key16": "T8hs7SPZvgRbf4JiKM5TuyWK9pKJ1MeQJX3D5urQdsSSMAnRGFqbgPhj7qY16mrpzPozgFuQpQ9bC52SERZkBxc",
  "key17": "BWioUdqa7DRqCtNJJGAVDXTGWjZpLg6uNasqG2rbAHQRbnUae5RyWJRBJMCPpHAAm1Xmdth3Z4h95AGDTaC2dv6",
  "key18": "4XvjFsE1xPzC4ZTJufpPTBJLapnspqoAP65cy8ZRwEtLeAY9AeDxKUyiiVe5a665BykSC1hgQaacj4STC6AvC3sb",
  "key19": "3MTSvpQZPpJuZwkRE235MBxXPH5zD9jQqFhCNvVtAXgfzTujStFq5oNqyAHJV8r91WwhiwFYDsF5EzcoAwtqpiPA",
  "key20": "28CayuUNULLocozT4vQ1c8ksdUazKgjmbtLEvhXV9B2hZdERGJrSYUhv6P8fn8R4xjxSL5se5qcUSLZRBPSoHaFM",
  "key21": "3LYXKiH1B7CYEc4htjv8BJRTo75tsRPEv8JRvmRrEeXqtzDZzswmtf2ddY3NpxfcVi75boKk7MHkbiTyFprB874a",
  "key22": "2UCocH9ZrpGrz4hNW2qciSWXjjNPtFfA5rt8zMhFn2pZJQXomBeU7KjZX7Rr9L6BJovKLtFqRwxd456nKm9xEm4m",
  "key23": "Bncczyk2jGsnhgBcZgPVWmjhhqh18U3NABZyqTewyQwYkbd4gxktRjbxkRjijQC5Aiwe8y8pyrF4CBoNL9Y8rRD",
  "key24": "4wgrXpNae4PzkgBgdBTM7YRhGJecSYumevE1b4dfFcYBmrGsHX4orpPae2hJDxe9gTPgo7ZZ5Bsp48z3ELpqzB1Y",
  "key25": "41WLHTX6p4U7satz2dckB8oGdQfjv77xTVnbfRA2z5GS1wvVYwbuiPLzx5B5WFGtFGTeJgCGUCPpiWCuzqj86XTg",
  "key26": "2teQSU58jhXaTWcpX846aivoG3LhLAQ9SJr342cnStWBNnY5wj9KUkQjM7TBKtEkUNBNk4PP28TWJ54PeSr8k5Li",
  "key27": "4pnQxsWUuenwpbQUonrYjPpuCWZNhfqEoEPPd4YRAB9BycJW9VbxkeNNBc3GLMtv6eVZvFJ7QFTFtDV9XjBkMu1v",
  "key28": "4CYDbT6Y1XDHyVKT7YwKa63G2gjx9f6E6sag8sqLAw39Yv7jTWPJk13GohGvMFHHUpgjTdByK5k379M8TBTZSuPz",
  "key29": "65Lz7qifm4cPKmc6gALVgonnMWqnjUDxsBwnZ64AkSD5mPK6kiwyxrpGL32kXDzPiV68n3TAZyGYzFr7ioMLjLqT",
  "key30": "2S295QP5rfysrdib9DenHUgx9MU7PhXjaLxvbsZTZgM8DBbTALMcfMcB9h4ajZPRnz7fYuYf4YAcB557CUKXrVb5",
  "key31": "3qBzW1M9SpYqUhgUyo2odBg6wLdc29VLWX1WoehSyMujvownGuSHFEtDBXoM1kCAF1H8GgBBeJtAZBR9EYHnUaJC",
  "key32": "3xr97NLB2EfgVprjM3yNrUcSzkDbaKXgrJ85GREcHbrtrUdbEe7qjkL9R9aX59Rvu3QvpZeWFMCXGVsWtdb8pzkt",
  "key33": "2rPG7ChfXtYrRyGbDKRdscCZeaGqKmbP7gvSPrJrmRevwM8WQ9vb39UyCfREeANJWmrdetxLgouReAHGCuTsKX35",
  "key34": "57HFRXPDX1JJNeL7H8uGzRynjSaext3CgBuHP6Rg3SbkjguEzTEWwYqXcExNYoWaz4abysSbjCRGu9NstEy3Jv87",
  "key35": "2UtyYdS3g28h49cScaUdrjmBLQVNrrpEsqXwn1WofEav1Ej7HLkqjC4NiB8piGEYtKnoGTudoTgWZxfyRJG76LHw",
  "key36": "4Pfq2wPjJs5dyNzrMKeERpdzJU7KBqh9nLvmLPQeMhuWtyArr9noT1oZaURSHXx5VJNbUNhgbe3mzuNTAun6aPA9",
  "key37": "2u8pBD1QiwsVRxMbjEjrYaCEadsXAaRZ2hJuxXumLjALULG9ZeqRXttZYvTzrW21FqREvwSDqVPde4DV9jq55Q6g",
  "key38": "57H6u31qCpvoAiYQjxCyF4ita2S6mrMhHjoFpdcV5yA5Fh6Qnt2kJtnQLVNXBFF4NzUZmn5F9jrQveDEGJah9hyC",
  "key39": "2nrqhm416LYrg5rETMN2vAUAihUVMiGvJhhDqGCPrrRhzZDXg3yy7WBQ1mAZZu3GfZxkT63YL6xuc4fZq6uRE5r7",
  "key40": "R4MC3Xy9Gx2ZUz49Ftt1GBexy631c7TdvZuTahstd17y9edU2PRNFQYfFw5u3xSYu4YCWUidMgxV8jRSk6VA28b",
  "key41": "2PhoJJv5FBthrwDZfio5LZgG7xNuU8BD2ZyL496tpMth3ovrujJGkcY7USKyG7sDRPwLKiqhdSpeDiuGPs6GWYSr",
  "key42": "3k85E3mpvQPFfHiG8bCYosMN7NJ4TgHUA3ERuAkXJnRZAVaSu8oPsJRWAhc9eKFugypN2F2BmkBmADGpXFBbuV94",
  "key43": "3R9iEnw9mtcXQgCPEePn8SeG5ko1wJrTr7LCQmTHKypBmiF911q6P7hDTkd5JTTJUVYw4SCKDJyxoCUZzmxWAKU3",
  "key44": "3WDkUjguCgeeUzcTXh5K3rpdxi6QwjognTcKFgwRgNMKaqExKoChaRi962iU9kEpcd7jRpSSA1dmDtCJCx8nCrW7"
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
