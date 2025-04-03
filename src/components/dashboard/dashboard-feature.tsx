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
    "34wBLcVDGFzf7tWhTjAjZNyBo3EKuj6en95ZWT6eYPRyxEzEdqEJuqyeurLCkYt7HhxeTQvZVDPsPefsQKGN6PSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3jHuYdS1xb59evb2zWG7DV9krdpXESENArhKE77wEwwjmsZ4KGLRf3qvchJNgQ8NKgnAP9YhpWtLUapJRa76q8",
  "key1": "431SXahy9CoHkDsuEFieJ4XkoFJri7WHTmNBQDeNNRMr51sYaPhLwPbAVPvwwgd9nNUnjcBAwjgb4aAak7dUErqL",
  "key2": "2kiXRy4oAJMfmzC1TrJ3U7nz3oiHRWbFVW7HRJDu1JEiTorRJ3KHsKCD9myngiJB8Yqx1rKNN1nzsSu294433KH8",
  "key3": "3XpaD4CDhTjYNRNnkQyfPkfApBW1v1p5LT5x5ehfKxfY22HqrD1KGEPSNkAfAKFvE2MvJySchzVpewwiKZwncJQN",
  "key4": "3AUrh1kVnMAkwxDovNsRzyu7n159sStM7FtFhmsaMzAkchAEk66qVzhTPhCGN3mC3oyoVpzKy9qi2X66xmMsRMUh",
  "key5": "3tGmSaKUPsgdsMj9sJunkcNfBfXXa6nD9kNsM2eYCygT5TC2Kx6vS5qBJD5NHswDQEuMB3xi7cMkiJqGJkRoJ2u9",
  "key6": "CsZzPdQhzD34g68eVyMDaJmy5nZQkjepng2gGyCzuX4DxeCvyfiFNiNZczkvRW3KhNDvVXE1NsDTasCJASeN9ak",
  "key7": "msy2KkiHXc7XgoaNiaU7VrpV643sAZxJwJsPDBH4y7BxSCbZECsQLZihWaji6JTXk6snAeSQoWVtKwCcjeXwiAP",
  "key8": "ZJmqADkjcZfJAQLXDLvbkc8xmRnt72xPYgzcFGkZNC1VrXQJRDCBfEGNLxD7FTdV18sR1KXaqgVwMUK4ZpW5yYT",
  "key9": "3PHwtL38ZpoiwHp1o8s6nw7D8hVb9kzfk8VZNdWzch98dMQDKiur276Su4oLwn78VTr29kBdodo8FpsjyJZnCidt",
  "key10": "5XiPoFDLRjqkqd4d7LMFLVU6TPpZAkj6jZkVC9aMWQH9JipbrFv4fSZyqqqxRpN4F6i1mLFEUjQf4j1cE4EbcPGE",
  "key11": "3Z4FXPCudMhD2qsmDSb2ZEdUmoZgQtmspE4Mqc6zWto7UHsiKNhG379HVkm9VdiVLFhb2wMFp13pH3wkeX8gh2CW",
  "key12": "3AM1gkFVkyj3AGxGTaMwE9Cf81WwXaxMwfJ44ZfdYJ68sbG3t14vCfUd1yjiBAfJwzKRkjWSyK5e4Lt3GEAgovow",
  "key13": "4nJAszttkJoZj2qaJ7jJE4zVqcenmRVDvbRThanzVmdfWjMQU7YPUrnwpaW84d4XSkFKH874T1BKqQoT85mAeYs3",
  "key14": "38vtGd7whzFA9X32mF9R4JCuDnTnHuAyvysuV4Pf9hXXjPNUz1QaazSTqbaopLtWXxMU5vRdEhg7w5SXWn8fgFat",
  "key15": "5MM7ZasMBeCUPNCmdccgfR81UGYkc2Ufdyxo4i8Kd5TEjwfb4vuB9FDFuNeMR4vc7sommyuiAJLhoUbzHc3sSKXB",
  "key16": "gRBkkLQbjuFUUNZTBGYUMrjxGZpZTaxH7Ur4gsgG5qXa8Xfao9FSpb2P1VBTz7VZyHX4YKpHz22BRNFKj7MTgAa",
  "key17": "d4eADm5xxnYspAMabEugq3X5TS3np9TLD2mQYgoAB2Dmd4ng6RB2GbKftaSw1buCLhuvo6jtfDjbA3sb7CKz7E7",
  "key18": "3zx2uo7qUjc7wyF5LLSSndq6RpJ3ZFReXCwt4oc9qXg18HyqBqH1BwgBeYhDM2jGdADPNRfy9BFBQGaYxpgAM7fD",
  "key19": "5gswwxHRZUh4A4XNBefrEnF5bBPHGKqzF5dzNxenNWpxmh4XwcsaWSP7TLptV4s1z9wi6eotaqjkoBUfFf3fWC4g",
  "key20": "3Hi4cv2NmuRXBKCptjvuCyWBP4PtN2n9vLrwJC2iUxPCBjpmxRiMCax8NqeZFHAWGzoUvzFZYzc2TgacyBz9fynD",
  "key21": "5Lk7V4pKus6iVY3pgsFC4tiMrbSgQE8fDFWmgeg6p4kcvX4m7VwgrW7dCq7TY5scKfxvo5F8b87D8sAxcZXWrLEg",
  "key22": "4aWdQ6cuYkTPRdLUnxUcYhEJpUYn2JkLDcmt2q1N2Qa5QqizAixYT2X2ySP8Dv1BoujE1cfFXtd1zugN2HX9is9K",
  "key23": "2aMqdbYbVMzAHC6uJ8on6ASgdHp4kytYGMXw6MXpXiW9zyNGaug1GGHgbYcZRJMoy89j4ioJDPCBJzYeYwaqqL9b",
  "key24": "4jR6EP8P1JufEL1vrXc4gSjfS4oN83jpBMvuR9WT4bAerKmewrsjWTyh3oBUuVBjYadtQatsn1NqC1Ez46HhuKez",
  "key25": "Hq1p1TXLafrnbf7rc1zFPJ1e9ffUazGeACt8PZeegyXszo79Uzn7gtsFKfJR2MrFN7YXdBnyGGiNmxTwXR3Z5PZ",
  "key26": "WZbucEKgtyxJE2DAUb12spLcxcnwo1vwpbTru5e9a6r7HVeFhgo1q6RyS2h67jA9CHvobPqgharSRA5QhhHuWbL",
  "key27": "2QsRR24Wpt2Z3vWxLihaRxz4S6rFaSi2EBCtd7aGPJZ4ocHsS17sUk4whwa7zEkweFZfw4W3dh22qeVMkxTJ9xg8",
  "key28": "3BDXNfMTBk8JnbnygKRw4YWSkefTNXW9KwXVxZrYF3uEhpJYxygP8CRrYkZUu3ckhgTNwenvVLrk9jgdB6yd5hNV",
  "key29": "2Xe4VBT3MPeSJWdi9FQvr3UkWu1ZFsTArhForS3fu3onWEaHx2rgHnaM9NNeEvR9LjVePyE9s5Utj3NoxiBtTqkX",
  "key30": "4ktXzFrd3fGKABtaWg4nQEdBACT6982FfLt8Bz3w33hpsuqv2nrqJDsjRXaHVvgtyQhqSZwZFHEyVa4SSDpsbiuK",
  "key31": "57NdiTgVD6GDCqiRjzkMoVDM5tQR6vMyxphqzHqbuguP6zr2K7KvNwS3XTTGnx9Ye95sQVgkzq6Rmnpbn94USYu4"
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
