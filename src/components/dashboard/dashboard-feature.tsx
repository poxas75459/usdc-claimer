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
    "rrHvUsWN7wVNLFtR2S34XtVe5HJkgqGorK5bAJwro7WsCp7UinpbfHvNv3kqeyyQTRP53ZUv16nMGUovmQTcwrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvJwrxEQsLtLbSRNLBVmbHf7EUmthr8CVCuZyAwcTy13TCjrPmujS5W6AYZAj3x9zoKdE5VzJBXurjUpk8bbKGA",
  "key1": "v6nTUGWgCFuHtxQPxqaxTCD4q7zunWKGJgv9mAnwxEvpnA4hPqGgkzP4gVHZL6KQp37q7bPSxxsSzgEJeTEAKrt",
  "key2": "4xjjoCgGuhxV53AAJ6vt5j74atpmoKRsr3kFJbTKGxZSpcvpPDtqFp6HuSZFd9pmUQPqiN9HqkuxLfmW5DdUveTd",
  "key3": "62wRqFa9nBXRgdiwnDo7jzh1EVVN535ThsqjQ8opWCpq5kSXxDXwSaXQbxzNPc81wPK9ZCwygkHQfdFSsqG8G3Dz",
  "key4": "29TMgXYMRGn7nidEVdUyyAJBdc7aXWipf2wezYa1GTAWsFPahZ13epPr4waE7r1XJgMCdmomQyy4YMcxQJALNeCc",
  "key5": "4HhW536GBAFW5kUv1mFwQorSu4eDdphBz4kkbwEU5TBJqfMrbMZJj4SJFMu8x5guoE2R2WrWXuUGR6zfX9Ra5W5X",
  "key6": "4aREYMZqmV58bUbFiNuqP2qs5SqcdRRsNeKasS5k35WZNZCP6Cbka1WjV4cJW9rh14a7pFJREoxEiGgT3gD44tbv",
  "key7": "4RDqt4xN95JrwQS8iXPDWBpuoFyzzD9Ue5iopq4vvtNtoBYpcqxgfGvbEsqVEFPojnyiiEdeA4anYoGn6TTEYC6i",
  "key8": "5dNDzF3Ps2Sm1fj64hfNWmk3EctLFT9HgDGTZCihEEgjuKzQRrPMWa3SMwqi8DyYDEviPm5TVPixpqaB3itiLK8j",
  "key9": "2XXskzsRXDnhK5RKu7WE8XkoF98xw9zyKRAzba9RYFXxUAxfem3aaMFerLy21tiHM9Qo9xdvdPwfyDjvFzN9Bp63",
  "key10": "4xQwMjtBWs7CnyTsR6GwW7bn84wBMdD3NnDBgLKwVPeFJncDZvStMwLnRcAjncwCFLAygkVGGsfaEGLCSyviwnWr",
  "key11": "63Tmh1B9Ug5fLc9Sk7tKvudtj8vdNSt45D5A84S51FMm4XnG6bBa3A5ogYNkZdgqQp5wtJysXUarrf75kumX2GUF",
  "key12": "3hjrqctJSTZu5GNkS6jKUFr9Hik1rA8VbQZ9cRsXR3CPX8Qoj4SRMCnANMtDoXyxeC9GZWnmvGEAifGyYjGdz71w",
  "key13": "3swxArwb43LUxKDqQvkniZU6ZfwJnukPFGaHC4hdHMgnUjdNWuJY8xYY8LC4EJtECzRx2XCHstzFZWZdjZn19sSM",
  "key14": "2HDV35zBBArioEfbNMzKXf7f9GePumcW4vyPsnvYvjQi1iH1Kh1gyjTntBD4ca1GcYEucHDxKn9LtCbNNjrrjPyp",
  "key15": "7VHdNYHagvCH1r665J94JbSvjnfLktVYCamKua5Js7eCDrjW9xvwCTbXq4CKYypgv4Eo4oE98J3yLrqb3oamNJ1",
  "key16": "5fGX3gwaatDC8aFNa8zuXUs2NrownBJ3nVucVxJxrv2AZpunbopUeC7rph8oex84FKvLLbVJjvWcZrShv6tzJVuW",
  "key17": "5JyTyqCyyjrB1ozq46omCyrEav6987yBVyqWBWUc11spp7b6QoAAyJGxgkGbYTWgPfsY1TnHXxbsJeAW2S7nWeVY",
  "key18": "5ce4AywSFphWpVjCrKNkXhMqNuWm3ieNEn7qS5n8BTGRaRTMHomLsYCwJ5qKTTa4WBhPtz6JN2dQfDQBWcW9HADE",
  "key19": "3j5LkhU74Brc3D8F44uX7iK4WkfUx9XwtuQa3eYn4zLvMQZkuN5bhqgtR1iAPkSWBD9aBjn7FNxuSUqNqQkFawQC",
  "key20": "3kJnSmjvjPffeYJ4jyDc5gGEbDwPTBWQRwJjAu7mdmZ4kUpy9fZtGTqxh2dTE2k8rYg431B8vTJyKVqowtuMUmVP",
  "key21": "5YEeJXfpo4TZ4x1BhWjoyewKVrunJYUFoAPAz1314cGQLHH6SVu2xN4ycqdmN8h6SvFbLqhKfv8PhH3qLSoCmo5g",
  "key22": "3n49JwGhWthGQoh1PjAVMU4FQ7F6xdEkFVmzqgzwactEjHXfG3R5scLgbyAHP5B6ir8suJzRKUNfPaLEqouwNTQ2",
  "key23": "4A3QSmpDmfDba3VUhgnnmUtxKNpx5tJDxEDGPLTEELha8cXcB8LJubw31v8AwobXpuqxn7txdj5cL43Q2UUmq8NM",
  "key24": "2YqHAcuN7PXDkHisMNUXpWZCgnUhKtsUEUFgBucjExZLxM2XPDDCqUcocS1iBpxdh42p1wdoL9dKx8rqi5YyDMC8",
  "key25": "4iuyNF7RFznmTLwziJujTmKcdin6cRsqnd5xAZZ6FZUxqvrvrx8deS7xhMUoSYdszsQckL5ABUpw7jQU3sfV2YtP",
  "key26": "2ctCkVe6PjN7j8sKkjeXuT1sx4DQwsKGGxUyasUHGVpJqJzuP5YVC1CrGgPGdfNLZyZSHs1EhN3bQqEvPx59Kxi2",
  "key27": "3AmV8vCY8SDH7oTUip7ZDpqfMvcXoM4aZUadjZuGxXhGARa38oVRqumZ6wWhgQs9eMV1dibsth3AX95ihviq96Qn",
  "key28": "3yWm9WmFRk9L1FSFRzFAjwUuFj36V4NZUSJSMUKpTaGFsCHBkUjzNJBUJ3FZ8bJcFYtgDYL4KppYrsZTmxWGLof9",
  "key29": "4m7ocM852pzJVGDoN8eg1ybZSaLB7yPXWQm9xUmHkGZC5w5EtC1VgmuQ6SscS8ZGgd4yBtYdTgcdm4R8f4XMCq17",
  "key30": "nBX8cNVzZUouZ66PNNFmgAe8rYC2a23mFMxKyMWiwwq8nY7aTUG1dc71zqBUNhkJkcvtsKnDaS3kHtLNhQqEufa",
  "key31": "3uEafrQE7mXkvGxi1qJTmGRKAXcRzzsMBWuqBtywKP17U68rfBtbehkVug4pUMnGe8qPJXXVMqfrV2Hogb6dJCee",
  "key32": "4aEW8WPxrFaaFw49nDWZdRGM9PCsUX1LwuSzwpnR8UMUmu38WNiKytUBwySKYhmDtRFiy3ziRhfU9WyJHm5WZqKg",
  "key33": "4eq4W3yPeXWJnCPghHFNRy7xeZ2MmjyiFpMkYeAMVYGvCsFUwxEzoDi2Syy8qFqmhoQz4QdvJKQkiojniCrhinRt",
  "key34": "35Af8Df43th6orHnyJUYtUsAWFZZLtE9fdNVdvrhUkAN6Gg7rPDs9qvfdwrTYD5HD5UGjkgUV58F37wtrPLxFt6A"
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
