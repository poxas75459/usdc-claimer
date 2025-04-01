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
    "4ftgRGaGdSkLKQgf5CzE2CkD4nE6gQ64kY3U4DRmmTC9v15jtqDm7MmSsXMMQCEMwQ6S4o5Famq95cVrGvWiJ5p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iwgSt3Tv2npHkNmYyWyu6TFaiBpDbifmk6pSyQCaPt67y6BrUDMs3jkPq5chmRogjDx26BvqoTrVqYYZmgFQRvX",
  "key1": "4de4RhqHfwrJeikY4ZGCvahr3zJFYjvJ9s5Rj6QptonY47mDYBrFEKADa4PFeWcNMTwdKPPNeTaxSN7BDhSAo2QK",
  "key2": "qX6ZurRWVXfKdjSKRMLCyaBqeoZrtBZqhp5fVGrmRU79MH3Ko42NPw19yFPRzGcsXoTtjU76kqeA3XHUxoSDsuz",
  "key3": "2QbtXv8Gxp42amvZ6Rut8iHGLHjR9d687ntdQ4bBENKTerrpLRUfk5WkUp8oHsGMwNtJqTLtEY93A26VD7mYZ3GR",
  "key4": "8QnwBKnEKX1t7QddCP7WeCp52hkSnnRRV9ksp2Y1CizH955cib4uHQMQdVuPXveojhsdosXwm38ysNSK1GPzTNS",
  "key5": "2bHmgHCJ8tuT52oMEJqg5GT56MpEbawNhcVa1a5H87WdFbWU8saRLNc3aZqn6MABZPmBg4Vrj7WuxJdFdu9GFqCG",
  "key6": "2nmhWasdTRis3msYPp7Rdqr3bZqqzkvhnspr8oxVBqcnsGZxumw7ii6KwshNFJwsiPFpK8ntykNxmKkLcenrmzir",
  "key7": "PJXhW1z8bn3EJFPjoCjkU3L74itRWQWpmdjxfjC9xasnsd8ZtasNyboNahTgNq74sYVRdMsotW5p7bCPLLLxUEJ",
  "key8": "3eq95dRnJnnh9gDH9S48WBXwssjxVdWMxAwnbVuxC3U2iEpYCMmt6rh9BkBPLyRyyKE58RxF7ZkmhNYDGLN3yWnC",
  "key9": "2iX9gXEMuLhppMb29V98MuP6oBmiEdPuhCiPXVDSnpafxtYaAjYLcQEdtJxveMPyrSkNqv18tby75vtLvuYCkCqG",
  "key10": "HJcwMXMJkYyZaDbNJ4uDwefg4B8yApTpGMC26j6WwfyNzPDGQ24Pq5TpA4c2UEeMubcrdYvyPiBTXoG6RCtbF8i",
  "key11": "2Rz8JA9tfjiZRfmai8GB7qBpZ7EAjGkZ441onn8nGno6Pp4aux87CZq6V5BQTK5cWHT19LNJ4UrEkwL39qW5bjAS",
  "key12": "2Zs9DXvzMR9qiqz2gPKsQFd1V8LWMDR5erXZfbgZaGtPw6TMCuKr6eUm5Ke5yA9uj6AfPFLWiqKzXUvoKwZyCQP4",
  "key13": "3xBSZzqsFBM1Vov5KRe8i8zxx4Y942JRD5mUpuT2sAZnF5FEc3fSu7HBnZXqFKBhfg1SotzhnQgzC2SykJKw4tne",
  "key14": "4XqZSo5a2sfX5APU63kf4cdYyZLYyQJkQjbYi6j7w9UJkg8sUqXmBp4ogJ6WDYBot3VpM54WWrWqqUZafRryPCho",
  "key15": "3p2dbSEiwsqmhkynHM8UMwr9sHdnygf9EZa9FdrM1uS2rGa8DF97eiZGeFsmVDSQ3rV1giGF6BKi2vyM2AnbvT8r",
  "key16": "3DvPsMp3A8c1erj6njYLcV2NXvLJyxCgtK8RDgAsuVs6EbFNLTQVseo2kr8ZfntsVhNKt8yL78oeJ8CyJr5Xmvwr",
  "key17": "3buNn5rMhLu6VRAYTTbcf7eoeFs3C3y8QXYHBGSsYUAGZ6dLYhqi7ztnhPp2mnpfNntzNZo69p3CmfyhVwvRTJmC",
  "key18": "5HhR5EvTjiFki2bG8EgXuazHM6t44UH5oqt9GpZQqaka4fEybPu3s8WqftGccRjRTsYL5zX2MAm4j7m4eYooiUtT",
  "key19": "3Pd5VUBsFut46Qb6LsdJ4inHPrJL7ASx89h4Vo14TE7LGkzPCgvhxyihyY59H6WqoR2iqEzkFuwCJy4qbnSyj2zy",
  "key20": "b44TfrySPMu6xbk7Dsuamgd7jV9dB2m7uxsb9q93YEbwjGGFWSRHn7aqx8Tgvuj5KNzUZ1xWeB26MzVxw6HtsAU",
  "key21": "47Mzf4Mmjt4TbfxniXB9RBpyLzxHXCzsZemuccHbRpf8xWAHpp37s7WiBGm9bEqUgTzzUqMJgqjALXNt4jeW8jxA",
  "key22": "5ZVGqbZzowJPLfpnYAFe7pBCQqhp56PcLaEYe9yfdHN5AGh3LXQcAoCuFjF3FRRtGRD35D9QEDmq7XPA2r7zAKHv",
  "key23": "3Qxy3t4s6RxR6TZWsCE8K5Qgw1oaYvGTwQexQFxvKFkXvVDoUNHyLzFCZoP1RuQa1jYhZRZSde7ULidyLVr2zhxT",
  "key24": "5Vc6QtRGi9BTz12UKsTJ6KWKgmWDjv1FEeZ7sshqf5YEYwFcN7bEzPMnD4cyjDDUDkreMnhWwmPdYYnef2mhB2sh",
  "key25": "P8B8tCc68jLfA8796kefchPhgtBDYUK9cRLrXwc9NKZ7B2rNRKnCAqm1KxPxpNyqtgdTsPFF9YFANBKMgwgmkz1",
  "key26": "3GS5y9oT9VddT5a338wnn6x5ussBkXjC1Ua6VwE1SKAch1nMmgDLuTZdfAqP8M5p1ct1hA2n9wPhPbsh2wspQAKn",
  "key27": "5XHESZ3a3oav1A7Hn7sGWxMtpTVgmDnwPH895KvgFSdVXunRhxcuGTgvXtm2PwbZF2NUugo9UbEkA34W57fnzbeF",
  "key28": "4E9PC5mMTj1kRrQyevrfXzhb3DTKQYxrRsPJqo6eB464AgSS72u8GBVgxAS6SxQoxLvZwzh9fyi3eYXu8LQGh8i"
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
