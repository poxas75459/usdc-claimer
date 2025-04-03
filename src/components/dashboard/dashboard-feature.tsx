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
    "cRxbTF8fzbYEhG6Kjg3yXg6JHw4nqB9yEt32YS1Ac9wgSbCpkbqADwr53toBP5LhAGvv99t9H3399a6omKtADHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGygXLtFEYqZp7vgCUx6jxXjihUcrCggkDoH6jnodF1xvwGZSJteuRYc8KkPRVb8uRvLn98VWX3eB2XS3VjRqFU",
  "key1": "531HyxGx5GmR3E8B5ddfT2ug97z3CuxXnsMY55z4XN8tt89PFjAimnmH3y6RMCXfV7pYdhGPDGHikd5QkS7js558",
  "key2": "m7CKqwUBjp8unmaxyxTjpoc2nPzyrge7Sk6rypxYD2qkTuC4LRijL6aNCiVMBg55kfu2VJKtZW36cfamtdvt8wy",
  "key3": "oprRGMMb5xn5spGPkPPLovZyfbSt4uwbf37HpxEaVst1sbUZpFnmJ6u25uP6oPNhdu9yh8NZd9yxfRqPcNe1aw1",
  "key4": "D3Zi4F9DmzwkLiArJEamACQ5a9E4N8uhT1iHgGNgyY26kMfBt68HTiNuJmQ2PPuz7xakWH6iYiYoGBQJyTBh3GZ",
  "key5": "2e5jxt3SmHmfq1XQpwFZEu1sVktgUgF2ULTyr8MvHgGWWzqYtyZpULCTFp7N2vCYLeaTtJKmx8CB3aSJiG7gDYkA",
  "key6": "5KcB4wCNvB7yyKd8Q5JYj526bWu71Ad9tQwNKBqJQEPL5sk56Grh3xEuj6bo8t9m2pBiaBfd27zpL1mScjBNTZHB",
  "key7": "5P1ubYiTW5qWuVhUPayPjvr9m4AQgPBN4CbKQGPNbweprjLtaojbWEPFJnZbzmFzTXHu2dCYXpYngq1WnUGXUvyB",
  "key8": "5DxNN98746MwUDJ1CurQkm8XEy6JgyFmc6BHKJPkHVfYTHikzwDVayJyXS5wekWxiCsu5uvpM5sPLvmeXPECfJxp",
  "key9": "67JM483LURotKgWNTZYGXsV7BAjD8bD3HcV93CbqCjgSw4vVhSRCeprqJogKgJpamVy99vixDHebdz96VMXwMwjo",
  "key10": "3VCrZqUV4J7rkyDLwfKH6WU1YWkKzLdr9zfCZ3zca9Px4Dh3qS4LfDs2TXXzRsQw87nJHKt9Zi5xATokVjcHCycL",
  "key11": "vJPa76aA7Ddq9vJvMvReH3incKJVoCV1GP1YYGqa2Gyc6petiG2NhMw7vokpPWsfofk24eZwRUNZBawbsJPNijS",
  "key12": "3Mvr6b7zyvUu8yWA3cX1UAqqQZczDHvvap24r3CuEcYRn2iEJfiLJW5Mwyy6NiVnMQbJ7cdjdJpXj3tAZ7q92w5w",
  "key13": "3oHcr4EBktNgrDs3sKYAmRE9qfTznK11ZjRb5idoQQHez32QdthPP8yF9LbJvWR7WUdcewyiohugVvTai7jjbp7T",
  "key14": "54o6h3iGXoe2CvRNDMTZ2WrV8xJK5CESzUn8icpvNZuXUX3BibrZQ6aXN5fHh7TVwkJQngwbBPnzC1zseJkfek41",
  "key15": "4pozwYNg4UPrRHRbxQdMMgcbYUSxYcv5ki1WKt3wxLVqJECtYiW8C2hgthtg8MpWrD7Nxy6DbZYano8GfYTN1Vcv",
  "key16": "64GTziPSFKchCpjZNmJZR8z1zZJaYW5yA1K5o7JzsPZ4U4csWKFvgBrwg5Lf52kRDqSgqjRd9BQZrDmSBSTNHjTk",
  "key17": "eRQhdu622UHjuvYcKR45SnZHvhmkvTXzbZGaL3gytZh6qMWrNN4ZrC3QYwEvvwARg9LuFSKW5PW1QrudJ8DBzSZ",
  "key18": "MavRURryhg1zqXs9747uL7dN1YZKcZjZjoNkiafQUFRg1i6N18KJ8RDRcLsTNzY32vNggUp67W9xYNzky583z64",
  "key19": "57hTcaRfSjsS4CvFTHe35cmMX7DAyJJ5zHdoQPPSZHn889cW9WRJtVwFpLaFGC2Y12b1ZVnJYAmrajbu7CPekDJm",
  "key20": "5NmV8TkaXyKmDiSYd9gPUDiwXqXBJWnjai7cNN2uEGbCvCMmiRMkH2nkkjba4hNcfxJueyAANbXdAQqyekzadc4h",
  "key21": "55cJxRGVQMSTY5vM7wvhjJNsaXfnhJreovdn6nKMbqMdMJ2jebx3QNnaJiqMekGENn1XRMHjJKaVK2aWzQZjn4Qw",
  "key22": "2hKvwvjTatqMYkSQMsQRUmCG1LSRoA9ouPx7VS52vqudohK1FBmtF7QVNmZLSFcQMSkuBxcxi21n1qAr4ptcaozB",
  "key23": "3f3YJFkWcEAx8wDZhSbGamUxJUoBzcYdo7rV4faD7fhSTpuDy3MrG8aZ4bH6TkR39s4cgYNJa12a2s11kfuspeRS",
  "key24": "3Awu9T7csN4SHv1qfdg2r1XbnC1VrTgD7RBicATdz3GUskQUd8br6EaqJRAckJQeimAiR4mHdBKm4SHDz8PkpUCA",
  "key25": "2jhv9X65ViJLVUeBey23oEPBHE9yxrWrRvfXs2oaCbRdvRjpEk1QqgSpA6BHHGnQN1F1drqbMQR4XNgekSWc6CKt",
  "key26": "2q5QHRxADNh2emQcgVng7LENgax2pA572619Gj8v48ip6q2MEfTCcKiaKNZooWwV2EeFRz3FfnzVGFiubLCaW5GV",
  "key27": "42m4szDbDp2GLo5xp55mthFFndqALS1LEYJNv2UCkdwZJZ5eqSPVtWupUsp7RPcjh8csB7kdm4CHzkE5STA9B5tP",
  "key28": "5SMbATQMjNZrhpq8kwXbzCBoJZLtcPD9VoZRr4F3j8rMUehmPEYG9sqmzrRZqv9tGipkK9SUNm4GdaZadF8GYWbv",
  "key29": "HPeS8KsY38eSyQtcJXPBQjAf9YwFRs6uCaAgKCbqnjjNAWNJv4gyFMfFoCRB446siEjm8tq4tV7vJqg4dTzZQqZ",
  "key30": "5MaMJAZoYxqEzGNSVrUGgpRfUb73y73c92DYpmjD8Fuy5rshjvgss1eM8aZ5NFZfrvc8QKVyKESpb46wGhCwtPFX",
  "key31": "2XsMEgTbeg62HUpxkMFbifzU2tBzEDQuKQvCvFVuyLRnS5ZFFy94uriRRf6zzUZDgbGDH2ddq5wpevjjwNdQV89M",
  "key32": "3htJnYtGWWori2q4Y6Ac5KF6fEpxQKQyb2oMuKMxj252yn3HmwdWxq6SkafBCPEn2R1JJQHgcQ8oTpPQjd9NXDni",
  "key33": "3wGfcrt98uFo28ACPiaGyntCbRp7p8hpYSZVnKw2YxgWZUAjXaqeh2CCp8bqiSDKG6yjpDR8on89ot9h2BW1JkB5",
  "key34": "frj4h3hEaHZyJ8KRQk3NtNiqGFywVD4AUPwNzM1HhqLWPmva7DdC3d6kRpTMrkixGP7Zt1tohNaWZphiM6cF5k6",
  "key35": "2eLvSpXeg5XrG1QrUUx43H4k6hgmSsWRXwRrpo9PHH3XsyK5YbPfAKyQXtFqEvEYpJ3at9n5x2d5x5yPWVtrw1Tf",
  "key36": "3iygRyRLhRiF8M9KxoEhmnX3o8QYHayJgK4XmPFoVnD4M59cWMzxR1DMo1y6iya3HXaGV48hUtEvsMRvDYQoPkR9",
  "key37": "5Xk4ViAhDJYjZnMuqQnUawFe7A9REJ85AkrgyWxRs8GVENJDhLPcraYVMtGiDQ6XaWMrhjhr8u8ngk5D95HxmhW5",
  "key38": "3Q9s1xRmZd5ByPLVBYrSSpb19q85yYN1EzqMUetVqoKRhUN4kNyaX6zwxijPUz5CjKSo51uQWYGPQphQoY5oBWrc",
  "key39": "3KZexGAz6tCFLbG9aW4Vwnbf7anSBG96mitritbNkSwy8Z58LFrYJJ4ekfYTfNSBq4t1BmHvfHPYjrDiCiK1YZoL",
  "key40": "2iykVGBjeNBUTSAWkzT3iWMRdES2zLcLcwXKHCBHzeavUpCp86Y1DAu6foVgkYFkAPHrcbwD8Ujdzfj1rsDXaLG1"
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
