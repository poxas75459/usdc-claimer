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
    "QUL2n7dpxxoAHMSBPBottdQHK1Njjt5YME19NnDVRziAcq4EaAeTCJQU18r21qNvoZLuhgoswgcDVVR8WMgsgyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qv6NZpaky1BGrU9UG2uY72kWq72RtLmzbhbPCJ4dhQa46JM1dbqH39qAsiqPQ7SxoGfTW49QhWkYmqqyZa1kKzQ",
  "key1": "34fjrCau7XFX3KXghp5irAohcyDgoUJ8d5ErCbmtnfAGHPiQB2LnJAu3dcSZYE4prZSYgC4iHt6tXatS8eit6Mfr",
  "key2": "2WKG9waQkgZUo713mALyp2kgZjjuLbZXWzjNRo8JRCwuSVuFNr59kjhFezL8CMn9jPTUUaKLqwApZJtVADpPCi8N",
  "key3": "5pv33dz3iWtF98zJPLQZbz8rLNNTfebwbQXQu2kMYYqQaTcL4EE4arN6xSTHwwvEdMgqLNQZvXkJiWtQsyov2xmt",
  "key4": "4PUaaC81acVctNMSEozhoofyFFuGg7JKHegm9GnbaNFTbEEkRznyXWxB8UMdeBbwbiruaXoDaVwwVoBmsvKANBfD",
  "key5": "5Fk2ahn2f4qzTS1aXNqWSGzHuDrfrBTrG9ueezj1jZ9yjr4XN1kUXGdk612r26R8qu481rKubqNMhnXGXmb6rHc1",
  "key6": "2A2qyinCZYYBbYtQGsxgYzWSz7E49s1s8h5P2wsnCQu1kJEgSceW6MnC7wUVnnzfsSrPxZUbVaXuTTmbbqidg8Zs",
  "key7": "3ohPvP9kdURPSP9S5SqzrLhgCZJFMhqa93TADHX1fuicZhbDpKAVY5p1oYdUr6zBEwp7Bqb8twVVk4yjjqZK7ivA",
  "key8": "3F7KZwgsDyHZpYzcgaeBYvxwPYbsfzrSyEdmDMgZWKQMnrgEaoQjwe9rBiKZfZHfYdDMMtQTEpDwSVC9tqBEFvhM",
  "key9": "2Ts41FvahCD94cZX5nrbnWgPzRNWZWNmPLVLNX8TH6jiZz1tsSMUnYuVUmvFuPDP76KcXUWRqXmM7HPpxgDfLQVZ",
  "key10": "526Yv8zcP5A3rQdL9h7VCDYF1ErbKAPCaYT9eXn12g5VzdfeDKtDKmsew7yEeCTy8a7Pc19M7WkRR1ZQyUbQVdk3",
  "key11": "2rMiXrsAjm9DtLLZv2QeeYwNEYY5RBKBRV8EGvQbJoccz3mJs7oqv2RfS6zkwehQZm3EkMPwaULPjrkBVaGRZvkM",
  "key12": "4vdT68YkoGp41KXGJ4N2GihUzxqKf31c1mzBhHsXJHKUu1t3dBpiiC1oH5ofWgiahPTNrUqawNF2Hvj2GWybhTR5",
  "key13": "3px4Atm1ujs3mTrhmQfSBiVKpXniK7omgy9bgaijSFZEFtyxgLD2vRccYjXxGZL4G4qJPwtvWgWWxzzyU7C8i4Wi",
  "key14": "57MdrHkLDSBLczvrp3dG81VThoDvQk1aYLZVy9v2tYKRpihZxJubRe5BsaEDcSQJSFsSeq17e3hMAXGEQRPEb5Yv",
  "key15": "3L568XvqsVe6ca7ASFuYQGuUhgeWHK7Lh2M8E5Dp7i3KznZQqfzhKNqRrwpw5HkqeReXpWNdwQPJ3zTYN6mQ5Sqt",
  "key16": "4TWVUqjyr7aQaS7VHeJJAAmYBWqVuLuGABzF8RzMjYZUiqUrZKWeDuFvJ6z9ZLtKG1cLzmmSVWotMwmJs93WcHg",
  "key17": "2A5VLY5RQhRJjDTK8LkAobzVwfLq6WdnUGEvUNzpKFXuvupEU26fsGc6JGyQoMp4KQeHbCxpz7csj9kJVqAPMSG6",
  "key18": "3u4oYekNE3BfTDZ5z4Wq2ZxNmQUm3fqK1kJPvsFkNc2VerSB61RB2sfntnNx5h2SLFLX3SNzHbiuP4q8xfxLdg1j",
  "key19": "5xxhdzVnxBtHe3FPybSmXDMNyPKsTNZxvjvp6qr7KtjwSW4GgpZxe2DTKo6ugUdqTYfqXQZcetnRspjRg1N96ybk",
  "key20": "3xU8gcskRBFVEMhJ47oudTmvRk26gUNhTnUUjrj3zhjw4xNq7a2nUR4phzLnEeXYckePP7b26QqqWMvyA4ZU8U8q",
  "key21": "2dVmePgzMq9zf5AEFvov5LcxT89XoyKGTrtb2Vg3AZFiviB77HcaVMSoq9Rva3uQCyJZFWKqK1ryVn7dD4BNApTf",
  "key22": "5XVvszjVjqtNQs2gfPZz8KerLgWNg1jZmVSAMDEAN9w8Z4BgNsWWGPDsAsp46GvbedJzM4xjHPiFotNXmHMAPW7E",
  "key23": "2m3sfwnW9dQ5xZ5zLDR7dXF5xYQLq3bV7Rdoi2qxLbp5SScE3T3sTs5ThGVPGaAc1PwjTSc7eWTbFhZvaGbEgPXE",
  "key24": "5UBFpJBKHwa3k9PZaY1QMA3SzHdkBKmqKDC8hhACubTQCePoSQi1x1RjMrGo3cq7m7oeLzb8n59yqYi1GAHYgMPo",
  "key25": "4pXXu2eEgNy7KCQKYvdFwtvwKTZzaMcdxA1bmBZa4gpmeTh7YcYF9XjUrjGTQgvjkiJca5aAmQXSYH5v65u2wAgQ",
  "key26": "2afM2D7QQErWU1ZCDv9wCDYxUnDXh9od6ySTdvbvb4umtpX63TJY5FB5X8GACLQ9ZTqeMeHtKrFrRFrGy68VT5E8",
  "key27": "5V7hoBh4d4tLKRpanMV6DyPBgqWPk2kTpLhLvFr1N3vJo9KfL2au3wJxFuDJquHPgxvsb6X4ZaBoSfvCT2YzKdfi",
  "key28": "3qZDV3aCyijv6c2u5g7zgUPhzoSm6UV8yGiqa6STNjUnvkYv5TaVXqDtZwdNZeMb6uDMnAn1we5MCY22PiCDR5jm",
  "key29": "s6vnzBJx2R7z6NqYiJ3wLiCvKZLBgEaYsBrhWZoWKfSx2n1exXKdFgSyBRQ6oGnSjWEtHB1MJ4SNtc2WcuZzXSJ",
  "key30": "Rrjbt4Uviih3SAH9e9Taf9Lx2Pxo7493uqvJWwdHEeBZzYErZ6RaBTW2gH9xSTTLDzNDJwrry38NbNyU2YHECyB",
  "key31": "22vu6R4pda8b5zZdHwHPrSzoNHVVcEL8XDYVcpCa83jVAHjS1Hr7mXQUbKMxmUkWi76ziwuNuNiQnEyqY2ez2ybv",
  "key32": "e8w1ZX95gQ2EBjaB6QvXe4AVg4b3P6za82BourCKoBfsvaziXPt817dZ3WV9WQd2TTJvibiqDgSfr7DXrmBv3zV",
  "key33": "t56d42VcbcBpBnixqW92xE3mE3rfDyeXLGHQNAnHnPLzZWX7MrZDVyPJ2tDUvYF4N4t8zjoQqccX3AyvtB4T5CD",
  "key34": "5sziHdSD8XxdyNPJnuHrv4WDz3no6PN7ynUGJujkhPdH3WWVE1U5QinUiD9E1NxkJ9c7MEoawXTn3gabJz2oK1bF",
  "key35": "4gBGQRK2fgVSzEd7oTkjEc74F9B3rHizKphdkZP1Ckub2Mgk1S4pctzKJjEu2qCVxTV95GC98PymqckRC8PuTCST",
  "key36": "4nS3PkCeMn4UwjreDsz3rs9pU7vXZxB8pUzrh5xhSaZ7fVnv83SqSPcmca2bCq8rMceFYz4oTeP3nSLuwFQP9esQ",
  "key37": "2YRTRAYYfbA4Q4PpvLGhuFWattvfLqRB9PoK4X3vcwg6CtuWHcPNT4kZzgSN371xnrkvXk1xhf3ggeCed19qHqKR",
  "key38": "19wgm4KHFZz19jczYnMKYgUTDoJ6iGnW3kY1kTuNhuNjysNeLhMEF1y5bi3Lm1k9LX5ZAHVEVoYnu5FCCgt6h6U",
  "key39": "oNp6WrarLpmQeFtzHrkns8gT7ajKpCVj2vZzXHbGGumuW2ZqpgbrU4xfuVQmoLk5jLdU6Au2yTbCW9C81P1txyw",
  "key40": "2mpNWia4zDwnRiKrfikVUzfVckVpVAEjyvtTcUJexq3FN3rn9g93NHZkZ76RozipxCrEHPHguwig3DQvKYNNTnHK",
  "key41": "Ch9D57dNGF5YHbqDduAVJguKVm8Uzn1Xrp4D5XQd5p3p2Tcs7YLW2i7PXx5dHfV4FDdXgpnMiB6GVzrU7327Cqi"
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
