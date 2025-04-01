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
    "4GLigneSKLQsXDMWUJBfQeEQ5NzPDt4AG2BiwmL52B1qxi5onNaShTfvp3AVQWuVbKEJbHDHwspUXnSFqrNY5NwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3faUDFaP6PT5EZHHWVtUtx3aY1Je7BGnjX5XEupR3BRoSntZh4o562Ex5nxhR9CwJCWXN2V42n8VbcC9v9uVeP58",
  "key1": "54aYCWWavcZFEkPMJX8enN4Zbs663qjH5VCrw3EfNxWcVoKJBFKkiXRrt7tgwqcHckZU1YwTs4ZEmB83vkgwQMee",
  "key2": "3PY3x9URkUUP4hH32TfPHgrpyCbxKokSpHGec4ht4xSTxrWGqtFM96q7eCKK1qhNTWxJF28QdojYvhcT6Qf4ckiA",
  "key3": "3aijuLouZS4rSd1WL4rMLfYw23xzW71aeRg54npYtFQX31VNNsQv9WWQQzifjWWf67qDoAeae61EuXHc478uKbwY",
  "key4": "4AKBXYT6RVe9CiFEtRK1ZZ7hn2dNKAUKHbyXrja41wSCbPC7rbKrxoTdtpi1nySZKCUU3vnuTXcWmB4qnujawCFN",
  "key5": "5XVfLibek3yt13tG2XtBnA2enRjWqrQiQXZsA3eDLnk2AzsJGTjtnJZJ82GXGGpPVAdDDcvUkYZsbmT7NTbUCVxz",
  "key6": "bjoAtY8T3Qgi5thc1JCapbbYLpSjLMyUyXq53GCHcWWBBP5zF9nCUWM3K3vUsDWNGABNyZbQ6qxDgEgMKBdbn5Y",
  "key7": "x8tSikWrmV5CYRcj8rYjJpdKRc3VfzS5BNg5QtS5Epwzmg385F7ra58aAKzzk1CHXPKdUMKUuyRGAXLN6eWuMey",
  "key8": "3gwv8WdAq4SZgeyKdsQyKCoPV1sjGMaB5cgw7JEndSSWxDWbg9vkWBexV2ePtT2iGimZWFgSHhRC4wYLnGUhyj1M",
  "key9": "271yQYCUwF4qaG1Ss37qPZ5tC2RC1gZ74g7oRdD36f7LakXwmLuzssrqbNZKZJQ6chynhsAySBYLFNAYH5rnw4tF",
  "key10": "5AgyAXfsajXqU8DsKThtPGdsU1GQbc7DWRHTL2UFRxxkW2ApaTF3usDx2Ncyp1q62DG8W32EsSs6QWAefgQxZSkC",
  "key11": "59P8fqrVJCj1urrqZZZszWgr5cP6agLfWoEsHrgG4ECge45jzpf1Y1UATLFZ4RGE64zapwsbpsdGcK6MpNYNCNse",
  "key12": "32j6VMKK5DEXDaiSvLhj5QXzvnFkhufKgXhZyKxWdRhM9rUiHZEbx883cKLpUma4APVFRccNofRkVE7JtyWRazxA",
  "key13": "5antLrbLbxGSekbYW95JorkTcX8eR8KmW4xwUhFpfWEAVdHK61A3ztyV21o5k1VG9N5og2NdAezBtsDMx6D4yb5u",
  "key14": "27JjWrJbnNmE3orHubzPMZKCNzctsm9oL7zaWNMuhksz1TYGCYbdGT1beeBKMXAcCpncf6AX1HN5Puh2S3CQcWM2",
  "key15": "2HZEQ22xiHA8prYURTue5xHEH4urEqrfJQVrbg2NLXa53upFonTWFxr7pgUWY16n1EWsqBLWjG897MocpK7adekN",
  "key16": "57BXPVEaSGM4RxLV4mvL7Vpg7guciiDzWtnAYEka837JvET9jBVXMfNiHnn8phA3DhcT8DRhCdd7fSNZZHxMRJ2X",
  "key17": "2ehptJ9VTpnnhMMpYgWEoxgfP83Sz3KdRV7uiRsxMTA3q2dHVTveDfTKUAPY52mP5FroZcUkAgjzPqDP7G8gxJQo",
  "key18": "8vSgvHCGy1UzsC3AYKKqYwW95vqYAMGw6DeMjcopFknaYuQm2Th75WfWU4S7b8SHxBc5665a7341JkX5sWR19RW",
  "key19": "ux4tjGxWrh9SmfCGxPLhCrRww2EQeF3W4GbErYhBXarrTjjL1uEzaFCdp8htV2Y7bT6wznHRyaRK7q1CmoQaQaK",
  "key20": "5Mu7NERzfYAswYiyJB1wqkbm1Uwj8a2sXpjghdAJL99AXvzap2ZLnLK4EPrSMEo6nSoPvoUhnFovb5q9koUKTG17",
  "key21": "2KN5EsuWn2tk3H2uZ9fnJVLEBBoUEnwej2us5UBgVWfw3rP8prgWM29GKDYk9yLhL2YXH3bvpeeNTMH4Ljdogf6K",
  "key22": "4pUv9TgbqbaGSjAJ75HLZmsczsBDpdYv35KL4NVgDD15afnEL357ex12bFyggpYx3eoWkrfrhDoZvDH1w9NSsUr",
  "key23": "2Ea2JPFPNykjcfqLcLJhnvzSbrmoQwwYNb394Dnu4ZL7ehehNe7HY28bGsmi14nMs2kXESnLG62CePTNkVnimKv7",
  "key24": "5oABGJgsmcWmyMcR47eNm33NoX5T3u1aX3USXv4Gb7sYLJhUFuuXU11UvJTJvUYXfFNFFmEE4dwjvULsUy2A5yVt",
  "key25": "59ef1inhjTziW9HG6gTV1BRpqMcGW7bkcFSAy9UFqUSwvi2LSNxzidSFgKj94hg9Fd1cgfKHKrLExUKbLC8wFpe3",
  "key26": "5NiAXsi7hY5kDwZ75UVhDJPJ7SpFvVddddbvCNyNuBy9ntUzTmYY7szi9RREgtDb4nsNYjrdXuWz83SQR64cXGLc",
  "key27": "4Y9d6kKyR8FZ8hPu8UJ6n1NkujLDVDSepjp3gdvuUweNYD1f7Pd8Gbwc2vHtYwFJFtV3rd4X9FwonEwLMMry9hwg",
  "key28": "44EzPnRJLRhafEFPxMYxmzWFaucQ9YS74j6rwpoWWEZMpAX3WWdVuqWVj9ed77hqFF1oDkUprjcCv69ShvKsKQyc",
  "key29": "2CieQChBLiKfYx1T2Npa71qnb1kWqjKeXgRzhsSGdA7WdiKtaetmzBLterkehpxG3AQLT36TzbQXxjhpCgBEDFAt",
  "key30": "53dUyEpomToRxUVUhtRvW3n3yvK1zVSdELKsVYaaRWBwxdgDSCrSqYuX5tiHHVx9w2WjYt3Au93HTH5Ke4goArDD",
  "key31": "3mEyjQzeHR8Gzr5nQzXrqjxpKwjVmuwdMbv68nTcLB7s3KcjmgWzDyV4cX8xcXvS4nwfyMTfJSnPyAbakd9Bzv3D",
  "key32": "2j8eENsNTNUk8XdS7GN65Ujtt4r5e287N2eRod6dSHxrYtEMrxtm9EerehkseGJDUhCv8STPpgArFYf5vkGC7XQq",
  "key33": "3J9XJBggbR7jYLjbT6fQE5ApXxxPTBjLTb9ZCntiJAEz248o5wgW47TwhLrcETavnzd23VsmbQXCWRE9gPYZKD4r",
  "key34": "4Lu18dHBvaRa8ns11cY3kVgfQpGtCG9haSmVLDAFJT5MBcFbgZdDrJMKfsJe71ZWqK5MoE7SdiW5u44ge7D8ZaFu",
  "key35": "8qHDV58mQqQ6WCBXgK5ofWi6hrARoy1AhaxRAWUubFZ1gu1S1EiNgjgAiFr85rhBm5eMy1afrudDEjrTxFj9RbL",
  "key36": "4VAuU9vRv4QRA9SfD2xVdsumJwcmfYsDZdJQQCVmYx6K54BA8JoxiZsndxhvn9taeoKVcCeWD9jqwKDpwDWtvXby",
  "key37": "56orySM1QFBHYxaYBDdahNt8q8mRHuyCAgJv4PPMVui1QFZ9ELdwRR4h3maJf1asAUYSLnqiMdXSXURqYrQu1F3E",
  "key38": "VbyWnvjVPEr25UteZwLXyFBGgg2N9nSugNQietxVLq6bhYBhL9xXM14ATKtCFHrb7MEdYKJuGdZpYboXzHhHDis",
  "key39": "2Gz3dmVH2Kby9qHJe3QpGuV9FSdEQNhvHvK4Ca6ouhZxGXtgx6be2UZRWBCfx2X2nZY4VHrEP7TjAx7m2ciHmbLQ",
  "key40": "4EmWiuPq3uafjBLJQQpjD9eJxParGZVnDsvuuKwxTmRFTAb8PR5nL2nWez7vXSmREUCWru3dUJqjHCWvUH9E8mVk",
  "key41": "51fTRMuw5rBDNRE9CZcwsyv7vCM2Qv5CxfMmtyp24mqzks8YLJmNCEoeEgep12mEEr43Pd3r9AZqM9fZFXLwdvY8",
  "key42": "3AUyr5g7wuGMiMaSAn2Y54vRFCn5F4HTigJzXAQCCA7L11ttQnfaAPatLckr5dGcr4Ma5ESFyyrmSdXTNqrnyVKt",
  "key43": "26dYZKDpHriuNxxd1pAmPNjFDKab68jsgGepNNLEeQXzdruW6NAp5rSsCLaWnBJLhwWitvW8gCeJFDGSDJiyMF6T"
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
