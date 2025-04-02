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
    "3n7qmBuimN9fh75FfYUvFtnofHTdNGZt9LxP3ijoPU6tDGg2PdZn4Myfr4ouJwQT8MJ5HA39NopnU8YbT5zzQcU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoBfTvz8ApsnMMubrAwSXoVffyMc5B8A3PzivjHkAJrHmZPcF1vCmpHEaJGzGXYxx7UK9XCLCcMC82YNm5dEoEi",
  "key1": "g1gPRRbb9Kj8NuFaoJTp9Wud64rtX1q5UpmA2T3i5HnDt24a8Zm5KiTwjqjzZgGQqx6pc6akjrrHfvVpiToqzqw",
  "key2": "iSm4rcc24gfUPYDwCFX4VuNdTi5Mgj5HSMJrbmHCazXJcix5XL5VbwVfDKTnLr6QFLUSucthH475acEDEYUhAB7",
  "key3": "2hELwPhmKo15iV1LCZjqMCU1usqDSYVD7E4LEQBm85TdUFXHPkRHFg4cbcMuMSAiJQeBY1G5tMwphX4jDVRPBWiH",
  "key4": "2ZREuSvKrhbMhAVfRh2qHAfkAyC6nVGaisGUbDXSEBq4rNr8iA4XFr9o3b1QTpZ4hskg7QdtNX7MFH4qF5KjuFiL",
  "key5": "5n2EZBcNHN5BcufzCp8biRzxVKwtAJ3L4SCvKbzYw8rwuMhQJXjza6GCjSLUBqaho7gpKGQcNpR2kMDBryFHMs3p",
  "key6": "iANJKqp41sfsdzHFbf34NQXovHRnpGq5Mq9pdyg9Kj4M4AKxUgqy5iLPXqyd5fkcDpMPr44rwMULmChLVcCWFtA",
  "key7": "4TKJK3z5xE4rCHKkBYXKLnAg8Vp49bEGJrj3vzBecFgokDHDCDz4MjYP2NmAKy8HF44m7SFKSv766W3WWvw6UnD2",
  "key8": "58YhkSKmzG2aCcUo1VgNKDuuUmwvB4ctF7dfJU69gfz1L2b3axP6xugUjBz17KhZqQaNfsJSzher9gDoSy2UQCHV",
  "key9": "5jMB6mfCNZy1LuFhjfQYysyYwXxaQNQ29uYaZ1bLMAtFEQLKtvFEHUV4v4tDEbeywYXKC6EK3LjoUzcwr3h6NsXP",
  "key10": "2ZPrymH9A4TbzyUwKrWTGXVhqrdPpzAEycbWgbjKtk8WomPqHSN5i3RxjUVHgxQS5s1DTNMtmYZHdJVe8kddJhLB",
  "key11": "3qwAHjbKamLCeZDfoYvrK8yvhmYr2RY4nEeBKyjdWHHqdkFjppvJRHzaWV2bjHQFMHMfPZz3A2YomSVrscgJPVet",
  "key12": "37kxeyeU8YZpDtMyf1KT4x1p9JMnayw4PCjBTNZ83UnsDe5YBUeeynTp3iMJZFnjSA5QkUtpoMd96d4LsJaz4eig",
  "key13": "5bNZHgBWgPjhE7ATXXfQbgADa4oFTBouiSVmDNZjbRTxDYvD9NHoaZ2s8aEtaDuSodxDnYAXTiJgi35qvbdqEivq",
  "key14": "4Y5U2jFwCjA25z7ahUkJ4dBYHdzxR6mKKWdNYtCJtTSZkBn9H4EUyP5aKGztwWFXbn2sVdDTdtnbZvHniBqEVb63",
  "key15": "3emTBHePEGsApJDeQTmYf7UDrRk3eMePvesTMideAuJZW6M8nyb9nncc7FuyJvK1aEDykq1DT3HxQmH8e116snbL",
  "key16": "5dQWHCJwnZi12sb7zUna3bMYDxwMgwTvc7EJmahFgDwFAjFggmxmJ8t1NB1pKKnfStbH9Fyt1DMHk2a43Bp74i6k",
  "key17": "5Neh6nPadMPUnr57Bey8hsiqDaJrR3nZxMCemFvgX3RY33DH2UQUAnxzSqGmvTLK2zAyqZ9ZzrKyFTp5PSeYe2V8",
  "key18": "3Tx63j3MWeUSLybKbZ3J5PC8uAZYZ4N3iZ44ZsbrtmJxHepexobRAiNqF6fhmr58SSW98n5ZVCp4JtTr94WUurL3",
  "key19": "4n3vsathZh3YgQKVR5Qd2uZJ5rU4nVnCFRVA1qH882rRiEL3u5KWbbZZcNxyXYf7e6oxhtjUvDQSTyKE4AzuTwkL",
  "key20": "tCuwYAMhUXvzrgjsNhDrgREL9qKrwwuFkescfyzEgZDjbcCBMLhRdmbq9CCqP6Ercke9zRbxzwkqzmQiKY3S8Lk",
  "key21": "5LnGk5zHec4aWH4YKYzkWXydDwHmTVtBjTFh5TgVjZBYMVuGQbqH5L9tFHWkgtysJpYWCMsjEsnN24Vm5eJTV6Qo",
  "key22": "3dL5FDGruGhASrJ5utcia6XryswHDKo3ZdDB2ZTyQto8GcicmPxKnRxbZ6ib1fCKzHQ9WEkzPJgCsnFzTz78njNk",
  "key23": "sWRrmgVtsCMmMhHg8fzWykTe3RaUroe33LnDNLLtdMg2tca6frFrmnEG1MDa9JSQVLysKVJVkdgsNzF4NsLWE5U",
  "key24": "3r2Ebjpe6kqEtvKgkdzAhc1oYfEXxgMZ3Kbc3Ur68z7Kjn1xZNQMnVeLw1uvv3gQYtpFGwQ2sd1CSjxQG2t3aEq5"
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
