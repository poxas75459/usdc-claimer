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
    "5Femj261ELiSpUk8sm67RX7dFbDDJDf3mi513bQrHW6uSHvfhkBtvvyyQwFLB6s7ap8ManEZ2gnGSSSF474WfE4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GrgnpMw883ZnxwoFpyrAACXdfKs1L3Q7Bh4th7BR3cVvrdvGPmKaoyi3pTw3YCwfUqp9gYN6uG2sh1CB8bVk8R",
  "key1": "s5ZFKTcbRMLpotEYoHEubDkwPwdzfJPXgLJuUSn4YdaeixY8hyDFfwGbqKGnfSu134qHLgeh2fCrRXrrCNaVhcN",
  "key2": "46kNqGQb4czqoBzeDn3GaKxzfE68WDt9k8Cfpu55GarrzwRN6XfsrPJVtuDy5qwZmXrqRowYxLf7chVVcsFyCAQy",
  "key3": "3uiWmKtnXBZ2F9tW9P9RpJWfYqdT89P43Bz3gSZhAcwVVisnfRv8517ponHqaPkCVrdSaqE3hUqjfNrQjY18xVoC",
  "key4": "4LKeTnUpEB9tnrrW2cYfz7E7LcBuaKYHZJDSNq8u93M7dSt8rAxV9pr8JxAqMgnc9CZGDi9ymo5bRzimBEZ6Yu2B",
  "key5": "cfpstZDdBKm3jNAwrBGKugd1dovUoADyVW8kp2j9GWFGS2tBhWuTCeWVEc1x2WwpWjUPEiqMo9aBcf7MGbRJefG",
  "key6": "HudhEPPcGQTgZRsMuQs5Giuun6A4U3ZtpHXrPE4WkW4KJdPhhKGzdQi925hJ8rCJxUx34Xe8nTAb4AybQcUrwAU",
  "key7": "4maWCPKpVuXsKyzdAoqAr2t4d2Amy1sZwUvVnDQL3NeiyCfM9YLBNnCCRtSjiLZ8QGGFbjKmL6M8XMabBFFcv3Hp",
  "key8": "RKbmWJmnuvuwFbfytY2CT66AgcaHuyerDZ7QjcTuLhgxxZ6tXWRTghYmRxtM26G3J1Ky6wxkb5enydLGryqUYbr",
  "key9": "sNosFsnnR8Jr5iyt5MTADj19mpSVyoV77n6Hoz6MKbVKKU2KTvVT78Giye9fkGjgfeBhku75xfYwWG5urUaNQwD",
  "key10": "28zTEgVJcgv9wBSi3EjjXGh1jqnD2yPfNhWTVdwBrPsZgRHKXdd1igJVofaer6A1sHDdxbknLNuuZhWxuxfCevg8",
  "key11": "45AcH5ZRZbDhYeFBNv7mJPne6UaSnx7wTxGxtwjfCuzUkH9DFR8tuHrCftJ7973v17A7SCz2CfsX9tYjapf4oURT",
  "key12": "4cMwwuzRTn5aWt7WGHECMZwKjTqkWSiaz86LkUSQojc9CkJdATEcbZkUNTgWZ6E633Xu3wsU3KYoUJihhGh4vgcX",
  "key13": "4otUDG5JvdkGpVKG4nzCv3hWx3xbaJ9Auhf7CLQuEzyGwFLgSF1E5vrUvqSzUtEUHvwUNDY4tsNuRuxV32Js1nbU",
  "key14": "646DaWSrFPimE5kyXcwcshtvZHomNbP6LLM2YYNuMS2eNsyUh3SV7rAz9oRSVun7RFCkDvZ5MCPiHhXSE4uDAwgQ",
  "key15": "Xqum6YcpqmiD2mrV6KEFgNaP6ZnhiFTL89MGhnz5VVFAngZmZNeQYd8aGoi3dQs2sP2XwTuJa4gAugxLq66SXE3",
  "key16": "F1C4nAuyHPyDX3bZPa7dCHyqdqsRAXXoX7nrFGgYRZAUhKmnkNhnLm5HCGuDtYLJWFUCCNxAAzkWpFCLN2hkCjC",
  "key17": "3D1F8h2xYo7En1EXH5yLvtew6rt5QaSMKYCS5YKLYk4RZ5vDSif3NzzAdgPfWseA2h6HHULr4XrtrJcYk1r9uX4a",
  "key18": "5365hF5XNxH6zZF5gu6jBVMivcyKxDZWkB7UkMmm7fbQgGcdm95w2KbyheNNhYSTuuQZhVDeAF3Wia1qiYrZKDec",
  "key19": "3G1YJV3zX3NVuENqks2dw3PqJfWp3LbrXob9pER2yPTHczfua3EkTnvAFcXXHZbMWWpwY3EMGV3diWmHFbaEPFrS",
  "key20": "KVuwMLUJaZxP34tQRAknYreywkZetmBGw3znQuvdd1CmhAVEo63MFqC5V2gG2pm7kL2wH28aVWQhLVoFZEs5Bks",
  "key21": "4XTgaGnP4LphJJ4sBMhnFWgLcuPycyZmBYUh3MWzRoKW1HYTaByQQFmWouNsbxLj8n2gzy4DQVRh5R94eZ7MBzhh",
  "key22": "3xzQY5g1z1ArKQ8SWM5zB6KabEhPext58hMt6eWH5d1oJBeCmhYx1VwnBvMXb5KExvnRgH2Q1ZF6of1b4yMxrnRe",
  "key23": "2kTjvVmmGd9MkafjnMC7r9cXCKPwZhUJha16ZzFw81tyw2ZgrGU4Rhh6NfHoGTKkf5sQh3kA4vXip4kSPEM9okVM",
  "key24": "5PYLZXc6dtbWJhSFULMNGhHri1KtTutu88bYGzqafEsi2snqMFvtPVso9u2xSi96RcyxeotzhFaz8WrsG8LFtzJ5",
  "key25": "3zTtqm6zq8Rr72fhjPJE6DQ8P7T7s5AsNbpFvkw5FQerDcyzbx1ZE8n5ngkLSPidddQLZ58FhEbREXBCaRgKW9GE",
  "key26": "5EZoAigJbLtDfVkFJHiLULfk8FQu9cTC1EhF2R75UnW2FhnxtjXiKLaWrUhbTb2AAAmLzGkexWUJbEjsf5995QYj",
  "key27": "cTDxQpudPsi5wT7SfvpVsdap8hesWMHputUpbLMzvA2otnbaz8qRfxMUM2NED95sy4aZf3gWSskJu6Xub5oxpjM",
  "key28": "eAKfow5tN8CFco7vCUjjTLv69wN9j5ky3zFaNL8gncTTzpAziBC7chFANkTCK4AdEhuhnVBAJKcbHtfXe9P4TfM",
  "key29": "2yi7tMmo86zXmiCH1fSx1ZFMQ73brZgrwNB1m5SoCEmco18biobaDzVSTEYvz8yJ5ckgrMxxsxxPdWHEHpxVCxVk",
  "key30": "51cxZVz88BonkRFSDR5syRhYQbjsLJtSHTF6fAs44y8ux2DtJooZT8nvmyHPqNYN27rdyFHNSq2qDAh3BGnsMBVe",
  "key31": "2B58wAZqN8AD3Y77w7YnXNz8THFs4pi3zqXkqyZ7zhGpbnSkBfjQQjmGzKXxW9hQdwtjGguS3XfJtZ5D99GfymJv",
  "key32": "2rDvksk4GeqgwK6RHZuDS1YNABAZvah7CcRM6nLskPn1ypbJZFmKVMFU778Gay9fssdPDpiK7xX9fC1M95AXjRDE",
  "key33": "4qhkhDufiLoqizvkhtT8G2vXtxJ2iZZQGstSQzTAbi9dcZS49mk1f9uyy6Tky8cLTBK1zA93WAbRBmjZtusPTHrf",
  "key34": "43vbTuhyedETaJXRSE1ybRcUpPqiDwEHbbvyN1oXiktnyek47dhK6yrp7RgbdD6Zg9cReSRPQcigypEb4rZbxbeM",
  "key35": "5rWVhyYt3wH2pwrLZxJ76Ro8Tu7nUh89hxtdnT1bwnExtdWJqfSND4BFvU68gHRUr5snF617D2wHzcs6JuL2d4Gs",
  "key36": "65Fc9kqrcvChYirYvLh4uwE6g8EZvJbjQL6YaApH6MMqhBm1riqdsnaEX4jpwixVx5h2FDefw2iDkRKWi5rxYgUk",
  "key37": "A38Wr1y2UptSQ7EosygpFrnCJhWMi7W7nVQTEaDUdNP6seMkCZbDyzLKpM7EXLFhYWjFpwmuL5tpiHiGHoEMaeT",
  "key38": "4RTDvaFa98Qe5UyPBZeERFuUMKrDkUFeqdWvjtEaiU2iLHiFUfKVgs4hEmqmjMgR5k3aDMtFNUuRyYiNq38xpVew",
  "key39": "4K1AzXafyzwxChNPk245tdkUyLusBpu2kvb2Q9qGvAhuwQZz5RzKXGKNkqhbx4CpMUbbd4YFhMbbFS19MUaWjZz2",
  "key40": "N8QvwgaWyTLAaKFdYBqEaNh1NJT9bTW3ngRJc2AWFHyNReNTSQePJnYLmzTdCz4hUUxLk8mNLrmBqiXqSaTNZse",
  "key41": "4KpMbYKh8MF38oqzhoYYDH9mkFUHupESfJv4DuSr8sKgeGgbaoeusUav3ngJWUFjqAiK5GZdeLGaKQyEPmWFCWqe",
  "key42": "2AssT3QhYWb2EbN5WurCEAqBmme6AifdVkFd6y6vDzpnpzixDAf9vRBv4QHQ6wGDt8NYHaG3jPez1pnaaVtYj3CB",
  "key43": "4B9vk4UMDE4kbBwb7FHVfKZzL1Zvwhz3TYbHa7USyyNj2ssMRpZoWipb9xqvmGnRFPcBWdB35iT1aNKgeQgCfjRR",
  "key44": "319QHvakasQPWYoh86GfYqc2fjo5ykMo1537mixuwEro8FryLudB58tgQfFCLJu87hDYdQtiwz67u9VWP7RCxNoB",
  "key45": "2aJfDfo9os4QZEMswJM2GZzq7Gg6HuXyRBiLk8hFMqjRydKuots5p7X6J7xKhGnDU89XaRhaSkvmm3tppovJ29ft",
  "key46": "5vR3SgnZNs5QBaHdbPwQG8fMgUYtVPcaMGV6tpGa7dUPVqU87quJ6zX9c7d6EicymjZcbvUGxkhgU1bWZMES7CfG",
  "key47": "5hKkQvcLEhYvonUnUge6m6vDqugUTCzN5TL78wn1FehRhbmVss6rDNW1QKTm6wueuSgQ9ae9UmEjAKkPVYCe9DDr",
  "key48": "4ZsXhdHbNQx6zgQ3wyEYnAFvcTPdu1TCyeH3yZJho3HLPKYqjD7LNAyukUVucpX8Xr3yRa2k6HpztdgZQtAJGkpJ",
  "key49": "2EvjX7PyndMD8MEoYRTmcP6jmoDLRajTYWWiz3uuzssqirFvXkk4XvgG2bbozarLDT3c81WAycYGc7QGf1Z46jSg"
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
