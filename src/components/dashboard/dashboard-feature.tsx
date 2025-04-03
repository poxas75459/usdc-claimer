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
    "hU6H5EeN9UfMXnbbQzsPaegf8EX13QEJ5E7Qvg7U2rRWMXWxFJ3zhsSkaNMqxAh3mSygZiQekkCjE4MTh1PrPAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpPitB16zts852pyWaYgtjduQKEeDM54EnxMHR1qGvjWz4wRx2GFfC1A21X4y2KJ7tMViXfKYfVz9kvTNYW9BjU",
  "key1": "PtnthKhPqu19Aepox7ZUe1HZhmochQu23nhYPjTjHXopALWUXfxVUNeCz4W3iYuoiBrueJwjfdc1CbZBFF5YGV3",
  "key2": "4dKQ4etKPH3HNdQPr5E1wus9i5qu2QVncYSNA6k7tZigrjmCrnLiqwxaUEHqQHE1WfCZpf3Lqq79HN38MtWyGMnV",
  "key3": "2iMZXvhZwGrh1aFkBdSZjtkihzeriyxzMDCB5BNdGesY7wmwPkraFMZVxJJuufT5Fd4uoL1sZEaeXKnqNpk8pcPh",
  "key4": "U9Yd2HEKaaZR79zgmb3hF9VZxiRTAeUjBLw8Dx3UGpZLMjvc4rhkfyoS3H1vYLV2ynppisUQDE8VeqKZAz14p2Y",
  "key5": "2ixzZ9PyjuRdANFDrbQYzJFUwTwRobp1jLByQv5cxUGKARDBr5yjYunsDFqMsp3GguUbXARHpxJ2WyRuMuR1Lf5s",
  "key6": "41d1xGUpwTTBxq49K6jcQLM4pp63gxQPUugWjemePx98KxXrdRCjaySojVYaWoi3pgtXRodtjCYoDzNVoGtHyUeR",
  "key7": "3GwT9AJTQcaaoX31ZPZuXw5x2CtpoS1g8REtWF99DmcEUQbqTV4qxVuhMhtop8VLtAUYoUdvMzjcdX7N6oraLmG4",
  "key8": "hYjPw8QkcTKUceR1buDPeYvtpi8fAzq1efDo8jqyCsbqomGYnZWyWeUs64xrmWaT6LLoBUwoecZHkuuaZ11xM4Q",
  "key9": "21pRvPuerRexQD5pwsqCRbMskGWciHs3Upsm7RAd6qhgzAzJQAkD7oM3jAPXCr1rP4V35j4UMCWrQQ5VSxQsoGqJ",
  "key10": "2ap2xQgp7C5PemEir8hw3EQsEiXS2oQo6MKhK5rAoG9AetomnKPD3tusW2i55ZsvEzGMT9hnNK38rc1i8H3uiHW3",
  "key11": "53GWghcryHFAR6G87F7AmeNUcN3wMx53zCENmkiQnwVCrHPxPXqUam25LJCrde4uG2H7q6xzX8ubiK7WW5PWtmXs",
  "key12": "z5mQ6mfnDKf69MdeVHTmHZQo1by6RyBvahJEgpGL6pgN8DUNFL7po6EL77Av3sxpiZm2rtAES1jUPrUZCHYaCyQ",
  "key13": "4AwKKxiaN7mZxt5FUiaJMhabgbHfFBmhG2A58QNaohZay7DzxMJq7kZTXchftETDAw7Nmw47GAoNKgKmhA1wef7x",
  "key14": "3NVRjXkAaAJ7d6UmZ4rBQNPoS56nq3wjXccJWGZpvs2JDawRY157bx6ugrfWGZqJLbX8HAFhtCvk59VLwHBxA84u",
  "key15": "58ixVA9dd24thgjStDRmqL8vowKvqZtPTXxqpJeqhjDDSfq2XwCwrp35Sza4uXvsRyiz8YF9AnVCMzN9gs2EMdZD",
  "key16": "2gQh4iMkhnqNJU2NyisLcymHwkzi35czrHQutszpApS6dwAgktz5benRTph8sP3qniGqMjdgiozPLNWeKrmyyjd3",
  "key17": "3nRBaZEyTNQ8v8TFBw7rKbbKThbRUc6FPfC3Vrtr7mxa8rt2fnRi7t5vq2D4nzgFrpQJwKHD4JeJoRXRZtRQhF3X",
  "key18": "3tLNiQkqNiTdBufLv6ZgiVqCkQ7kySFFjWdWUyzGEoyNwCLqmnZ7ZY5h17JAAd37kPwQRTP8MnrXpYPjKrBTi9Ln",
  "key19": "25h3GFfQSd4G6zyjA2MVitJTW7Srmse9tEbz4Jf5xTm3riZCx6AvzKUxPvuWPxM6QWU7HG5mLabDGLKRZN8pUrNG",
  "key20": "4VfTM8xt5w5NAw3qx7JBqxheZC1a7RStRmz3GsE2NpkRz1thPboRdDKq6iRbKtRqQge7ihGui3BJgnUwHMM6H5vT",
  "key21": "4GNgJVojdDjtZbxjQS5WbidX6hVvoCJENDufmVobcoM1gHEWEGAsAWVQMxfNeRY23mqKjJp1KtUyHKzggbMAWgKp",
  "key22": "28zsojVSAfVUFoS9qoJdczbBrk3aZok3X6xZJEpdrGhwYgjmZtv7uhhRa58fjny5HrfTEoha9QoHrjapMT1TXuZA",
  "key23": "2Bn6Lbd99K9qbQj8SSZ1GpYArVB3QPCFRmxDSumiUhF4PH2GRZcKtdxgKcHhumojSK1XSVXVDhGixKb12WdiUCyP",
  "key24": "67mcpsektUf5q1HNhApEw6E1XZzs8rAiTruKK46TyhChHqKsLAddN3BoGTB9p9R87cz73pHRkimaSBUbCbHcMEt",
  "key25": "5fzyu8rSBn99br14Qb4qt3k2Dfdt3kW73j2mcycCziv2PgoGNKmQS5Yj9iuf9n32yZ92vknFyotN7A5WqUniWZXn",
  "key26": "4Fbsy6vNck36wJAvryyGDWA35MzfXYArEgmte3nCv2C5RARgVsCrjd4zXe2bTaCMpEtJCvMwxBjRRUWiuXjCMkKd",
  "key27": "Mus2oJNFVCLN1zifhUguANyL3zFJRzSZ68X3tk65SC252QiToas7cujxpJjg41N1kFHTWJRsX1SjdxrUL8WAbba",
  "key28": "4ZyoJFhk7jirb3g5y9GdCmPCMb7hTEvvsXp4oqJ4L73YZYcjuDmgLsNanVnKKCeqJQZoU9ExAXPsohiVivTCxiNM",
  "key29": "4K6A3TVubCUCHDo2n9BbNpSzmM9tz2RzyC82izZPZvWctDP8PrBjjxaJavbf3AFiuJTCX9LxkRqpqSWzmRHEtBiq",
  "key30": "2GDEXqfBZCHPQLDzMPK26zvroAGwzNhEB7vwwgiEXVfHrG8PZ1cE8aLtzR4ofc5r6fmity3UpJCtVF6qNJT9SmHT",
  "key31": "3jWL4fSAm8hkt2ptCbomoo9RYraE3h5428g2bTfDXtUWfHKA53mgVZqiHbNydxnvtjW2vVgZmbW6cXSKHkT85XKk",
  "key32": "2t1oy5zFjCHqq77mUF5P8otDcJkQ7ZKR6UFTcV6X6No7pygkdaBYUNhWrJ3NS7NVnMLmGbzPCrUjUb4EPDDNS81n",
  "key33": "5kASZcA5GGWu8PvopAHGS6nkEYNutzDpASBGC8BvojhKRJUSgXgm1dDEAC9gjMrdsw11tf3xQ9hsU5sxY4VbEZu3",
  "key34": "zHBsMUy3iLqAEqeY3bFb8u1iYoR5RcARqRiUxeBjz4qv6erM5hoDidwvg3tPM8kPcuieUHK4sU9kDFwEaWF7HE7",
  "key35": "5VibG3M7bUb9WWZAmdvTobbkshLA4kKbTKqHfdXTDbhMS1AyqxbLAtmPiSHRm3b5t9fmH3yFFVmdXJhfMWDv1D4s",
  "key36": "2nf6wVi1FkqkDhQ7EDWhsBQTQMqYrpjWaRjiDTzLcUTU6mtXk5Cp3MfffcwwASkZNRPZCxatjUeiTJkHSU3rUvdo",
  "key37": "2sMiWbLEGTGx9vkuk7P4q14yUHQZc8zn5krapFo8Q2Ug8pTkkiXgMb8URqby7Ga6Zt53KJ7F34bD4U9FwK2tJhFT",
  "key38": "5HMsrk2LcmarGb5UvfiP2qDkQv1K4dGcHu4zCiv6A2PdyEwHZGTZtypaHcgyeE4eeZbCwqu3HFHLnTTcA4vLSG58",
  "key39": "5qo7jERMxyJoRvxMFBivdeLLbZPjCrrniEXQAY77uWhqaRjDZsXHh6woaxqY43E2KefhUJmFPn6LNrK3gXgX3Uv",
  "key40": "56XC2C2qyBZhkLgZ1P6QkyAbn643XA8G9AeoKWXQ6Zbk9jLcErzgWp6qxuAJuK24H8gdHmyQhzwznwQB2hstwDVF",
  "key41": "5GMeN1iQ4MfUAsfkY5YZBJQvESEGRnykBmVTbkwPUkbX2KVWuXcDd3Td284V7b6VsM9WgKvsoYQq3Nn24Jr1Zsfg"
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
