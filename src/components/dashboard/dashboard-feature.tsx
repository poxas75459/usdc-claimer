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
    "5bEDsBbRnrcn2j2V7zRnqbrAvUfoPvdhNCzHWAhyzWm7vMQYZRbLRQtY9MujUYy41Zxv5p2H73Mk2ng4UUhTCar3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsmFZqxMLMMRU6z6TwBYgs5m42X9cwus5oQSFfkqn4srjdCiBQsb4re7wJRVU7YVSEDTd9GuQaL9uLpfsvHpXww",
  "key1": "4CYn8HZK7cNRvUoMuEHf7c4pqbEM565YK93PviJYC72qJPx2rXnTHWuxkW95AtF5NfuCxTC7n7dVKE2JbSdVNpDZ",
  "key2": "26Erkcmb9G32pwLH4Uc7t3JygrUoqL6NhdoHd3LspHyNciTZhyBiWEhX4qHspJNE9uzLkTQoZf6fzymfeFnKMEVH",
  "key3": "4cKWPaSt9m9uVT827d3AviQK4BXHQeHKZ7LMBgjPQAQcr8YN8nnd6tbzGNheT7Kjs9Uwqy1ybojysMh5Rw5D9YbY",
  "key4": "64YDzmXFHi3EjyzF6Na7vHUUHGj4Kr23QqBCigfTZhRuv47a7Vf7URmK26J6FuaUwHkEtHr2DDWZT8YdNyXgKxSs",
  "key5": "45P9kSSzA8MA1QyJE4NHU82J27kEg9asiXH6mQwiMynAFKb5dsjNP7iih88Tq5yCaKQR1YraWKptC5ZxPNAYP1G4",
  "key6": "4r6hYkzv4AicXCpCwzMWbvXowsAMGb1WR1hmsGLerFuK2n1EJcw4u7Q5Ub9cJtKbmhh98VrErg6FV5bPkBepmisL",
  "key7": "4PsAnhGzX4wiG36gDUdRKPkwXU8kmJbYyexy8RzSk4BxnWwELzuocFsfCs87igwGLGYFCjbH9QrHZudasLAva9Lp",
  "key8": "xD7oQnZajmJ8MuE8crSu3QiytYHVFiZxBCpicuHwAjx9oAaWHtFpCn22HVepuYwiYAJJwmVV1KUieEgFqG4sXom",
  "key9": "4bFocLamN34JqT5rvQHFnRpYjzYzjZtQCNxV25MBmPydXhHmBmJEsK7r49QbR5qT8RHqgLgXGA3QMv7mjCZE5edP",
  "key10": "2g6BrcNUmraqSKBbVFd4K3GKGZTQweoQbFsUAXtouCa9qsnoT4NDpbkt7KqP9q1uA1Sr7VZprVsfsyjqbC2L77DU",
  "key11": "5UfJyvhi4nRcCsxjDbjEkzG7JTuaFTKkb4R6inEWiWFfkjrowRqm8jCeZrVoCbXAmi77odqhaA3yEyxPoEGJAtXC",
  "key12": "5Bo2xdmEcobuuHw9y2H2V2AHzenGSUg6gKcFs8XQ9GmXdZA2QmEVF2TFTa2dArC1hnbZrS9CWJDEnmXJVhwic5fX",
  "key13": "3E46uDYaZU7C9fQDaGthWEPDVoY2CtdmpYQ96tazc9vzazX17mSvUEemjvBgyTvGKQX6HA8FtQsAiPqyA1Bgnm72",
  "key14": "4P2Q9pesXoMcEnUo86NM9zjYhHdm85MiAe4GMQDjEYYsm1aEa3JcVKe5pyFUWovFNYVKE6eLAY7wvUoEyyoRXrzc",
  "key15": "2NRNAfNXQ2RpkBtkpTjwwyYM2nyfaMsJkSFUQBdwW2sJesnEdLuBtVoZVJ2MLNATBdrh5HAy4xeAYuujx9fMP3oF",
  "key16": "4554ERA5X7TzsQGj4EXnaFm6CE3DRmNy519nEPHVuYuVyRoQcSLasm6A61oqMTvBxAZ6a76Ta5i68af8XzP22WmW",
  "key17": "dh4SMFFnGXaxemsWDn6z4dPs4mqnbpmkmqj3xCLweDHGRKvyfwy6xxmQ82TtamX8e6mmtMpdE2T5caMVEcXL5jJ",
  "key18": "5EoGf6SMf6tqpJcmEYUGuwP6rQJB36UJSP7cMqZJ1bhitCqzmmjssW9cwFKdg9UfP8b4yQTY4k3zxZe6FUK22qku",
  "key19": "UVfCG5piAS32d1PfnGBFAt3Qscxxuq9hRJz7UbKCXVirKMXMbTsSyUmwr3o6rvJa5ur4qGy6icTnAysMam4Zf5t",
  "key20": "3u1TJZ2zEUMBM1j9Q2eviRkrQmHZgGgGRasWZ6AyCjnDF8JCmsjnEqrERHFNbDC8BcTADqRCAAEEggfktrXJ1cPN",
  "key21": "5iWhPmi7wRYtWqKFTjztPTWebQQQDLTACKtE4eejJ95uceR247uTPq1D69g1Xz9VS3kgG1CSJRTojMBxGowa7EVL",
  "key22": "4JcUSVtz4qKUSaghke1MkhiZEKsgJi4ghLTZcGWGtCMHhVHpNomL39PzBEfnYspnGbz8hNa6xX1KC4Z2Prz35own",
  "key23": "2c2fNMw8GMKfrrett6oGv5o7TFW2ykzVkAJUnuHfdCap9SAuXfM56xDGzQi5honuVPXXQRkncYxwumwWF4iNdDQJ",
  "key24": "3YBkw2uS8esTQG4faXpRYnGcjQby84EJeHF65dCgXBBYEqJ1pdyMCNXCTLncUSS77NxWrhRBtHZAd6Eag1mSH215",
  "key25": "46Rc5bjcGUJLFdio5tcDuokDcqq7YiATNnpd15sNjaWLcebQknuozrRHXnXpeioQTaYHkhYiMaW1avMgj5JXsKNA",
  "key26": "3WYy4eBRskTFH59Vydjx26GSTdYsSoLXgSiKBYVK31GWuxqFaSSeLYJZ1JyoyFSNjvbAH2B78breJsiT2E4p77P4"
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
