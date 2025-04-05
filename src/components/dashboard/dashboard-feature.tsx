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
    "4UsYLEr6HRmLtEGK3efYwrWUfWdoYbP8xkaUGZzFL8Dm28NPfTJvkkuwFofgPuZdoZAarRpHrt83tSRTR4LztxZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfm1yeDRsgCgpTZKBFeNxYxtURzdV6W24HRrCbnMN6mSaY63jHj4dsaq4N157MxxPhzVHw5fQZ3FLeF9CTve3A8",
  "key1": "3oeEqG1toG6cG7p5aEf4pjkh8RuPTDBWFGb2Vt5eVgFsXU7CYHP9S9aChkBp4J3fHgm2KTjknhUKP7X4aFMB2Swx",
  "key2": "4bYaBq9UdruWgwzwaCRJAUhHZnYPcPdzJ2H9EngPx7EqTJE4UoMc2vEqJDLd6KxYaA6LGkHJaB8szjpkiwWgdsQo",
  "key3": "5vapr18qGaatEbqTGixEyeAYwjFXtDPCJtCjGVq4r3tJpRuqDGbTSpQTAYFBdPSeBdCzYVLifb2yVvFdN2vFKsf5",
  "key4": "2BbXj3fkumUFkEwpWrLRS9WRr3JGuCFSf4uLfpNTBKcFATrma2B76mj3v3bx4a9ief6TBvLFUFjGSqW87MF6Hmqh",
  "key5": "nUSxSYUN8NJhaUmk8CBqfEnA8om7KRpySdvNtzyBoEmsJY755MjrU2wsm2XL6tYgnV6NuR11MGuGzwn4Gf9MspM",
  "key6": "4n2Y5VvN7L7KWCuMhZf4m6zhCnaLNFMaDdvQ3cECPiBS3vLfoWgMcgb2Sx9rBaYTqwRY6QEuPTrRts3EQtAn7hQP",
  "key7": "26XBiFAzPZ1ntWzRhkBA2z1WvTw5bey1UGBa9Rc2n3ce9QS7mfbWLRVcGpcxGv2kNsecKM2Eq2aUiHGar2F2jPdc",
  "key8": "2hqeBqBkMFy4gCRxez9QR7Go3FR5o8NV78f5uMz7BGmtsJZymGmgUuCBjq4MtR32a2RX4rt4iAJpnw2dsH9qPTJ9",
  "key9": "5shkV2zxhKNfRH3QCnnid7bAcj2T7NFpeTD9ZypxEM2GDxXJrzi6dyUyAedYXJJox4HrSFQnrnDuZQxeGRe6k5PA",
  "key10": "5pM55Cod6prMFQzEg32TAJbLTHUoYJP9FVKmzV4hSHdggdWmCQbEf9XUi1L6tjJvgovDxa9EvU9bAoKqUNkV3a4U",
  "key11": "5bUKCWUpJQjNyWesDg8LBKHoxRCpEXFdHGYjEdiXEQyxKocZPL7nMmuAu1RhDbPDknfSCxgakPMhKuwzSxwBURcL",
  "key12": "5vuTznoMkQp9QeKu6iYENaezcZQSz2o6aSUC2ZgCAocVhSJHqMXnvHTDfoDsQXtXaf5F6bx194EfCXna1muVj7Ff",
  "key13": "5W5XeBvYj9Dny8oP73S11awDRnajmmZtXnA8WY2ZrEtKVNzUKLw66wwfDErpfxpNxJXrmdQhaSvpAaQaKo94x4v6",
  "key14": "4ntH9JnU6Tv7swU8BuxmUvnydAYY7bVhhXJKRt63oVYSypxvxSzvtT51cr8oQyrD2YQoxbVCfgBEYbPqRYUk2LUa",
  "key15": "5HuenPuECXNjiJfsUdZgQBiuRVtEC5jaUjutq7G2Xf8mKPb8xZptUpMTVLrBSthDYzd9YdUyRzttJrqgm1CBzgbe",
  "key16": "3Bdqd2Ay55bHJkz3hWedC5XeDrWnmT1ZUDjcVgZNWEEf4AUfevjEqMW6BSFYmRQw9GzNbAr2fA8zfcC1XtuhbD3Y",
  "key17": "4GgDoTMAVXjs8SfJe5TTeKhXvgJ1ErwdLhqE5D8c2fXjuJvKyU15CsBoPpFeSJqKGuEdAJ7t245J8ApegFBR7eEw",
  "key18": "3n3N9KeZ3im4Jo7fHMwjCjkKKx2FKr2sazJHjFJj81aKjY1V31QSqbsGZkEWBpGqSM8dGT9QVzFME6LyLoQhQZa5",
  "key19": "4eFALx28XBbz9bsDF4oCaMdeadMS2zY3VrLz9c7xsNHQhqxixFkEdf6FBdx8U6raxcdyb6VYvtK4THJ3roEKjjKr",
  "key20": "6nCog5VWuzFBV9Qub6HDKttDw51o2sztTXC7gF3oZ9gMeua6MJKvKw3KRRW5c5xtuLMBXcjR7tbyBp3RqZbAMTv",
  "key21": "4nXMWEeNVF1eZU4dsj3gGcriuKWtKskqoFuZSvdyT8JkqSUJc2afD2N1QP26U6NdZ22p2KpdYvoW3CYpzrii5W6A",
  "key22": "3F6ZvL2ePWxoKiUmSk2yDbWhWv4UeUEA4BtuMav9cu2XPf625W764rBcR633VZmH4M5XnXrvvVq7L4PT7rUBP1Sf",
  "key23": "2dSEBKKXNSr8WMZHqCKk2rckU51wCzFYEtTr7ExBGZGQXbD9972mXTz5e3f9zD2mvQPtEYMM2ZuMJ5RfPeiREo3y",
  "key24": "HWDVaS98SJvrSFa4Co7L4cpPUAtBiGdj7zrT2RjzSpvHdcd4S9kJSSxPqEQaNfUW7hgj3uFJX7WNzmumfQ43uUE",
  "key25": "2W6A6hzMeZc86bhWYa7X6dxMQsY9K8qaNdV9EwfpKq8fhTSEhkfEB6cimM1VxRaRR5FHBnPKZR2KZe9h8APjh2E9",
  "key26": "5rsby9u5tHNJ3SYcUVWeyEppMuKAeNUcZJiDasJNvAoh7xjuEdXg1nezbsSKpRPmosfFb5UnpMi1RsPNmGcKTwGZ",
  "key27": "4YNBtA2xzRKvbmtkNEne8Zf1DrfUGBfn3g8MJpNbVAW5fLVe3WkeqRKwXJdpVWjFRrHNWgDTs14bdifiy5AL87QJ",
  "key28": "5x2f1CYMNCoQVXJRRZsTfuHKNBr5hKw6vwbS3BjUn8QyJSvFNTShU1RDv11UXZHom2kizmomX1GRuexJF7JbMJvn",
  "key29": "5pRA7YgMaeimPioHGakxLoEUARQezzLz9Kue8hShSA5g3Pkh4yhvsLzmvaaiCiDsanzGFc2TqZzGcCxBhFkyVCLz"
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
