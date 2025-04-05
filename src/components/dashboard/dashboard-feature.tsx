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
    "ZGemxjgLzcXS4rfHivr1JbLzLrmsLAQnxWNf9zcr1gH7CXdJNcH5YMjvez7Pp4Zzf8uoG5dxBvohNRLef7kuNN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GKxFgbH8oyXjHHU8Gw4EJLhrwVGyd9v138YrwNWCfepqutALjnvKxiz9zY7FRq3ZtCQRMXPuZpL2qD4mKaAmFXg",
  "key1": "H1xwerH2TNEkbdqtrUEVUTr92tXk3scNraM2h2XRt3Ey8Y5MCZKwS4FNpYwufzDos2LLj3gB3h5HDmzTb8dd6SY",
  "key2": "5F2atSNgKgLdCsFipbFAnAn6QQjDX1GZWmpAgjhsQmgsfe1cdsb6xPiTpMbpDBqvVW8QBjfMmwFHQaiqtJxpGBRQ",
  "key3": "kLLJ1EUaq1SVL4DnxLT8yLsuAwxDDFk2jBodGU2VZ2hBqpqu5HmeBNPMkKZuy2FzZBLvQLZV9hKnpgz5eTRVkrH",
  "key4": "5dNNiBNepDsKg72UovLCb33b6yAYLh2vkktPh2Jiu6VR2tPzoKZz233jQMcUsxLE6aGz3dKdaQsw4ZSFj7Fg49Nk",
  "key5": "1MWokmWkKKwkMmYL63pghixdzQvVnmiVV3z79XGhGi54eZ7ZfHgBZ6qUnCaL4e4J2G6Vwj7E3xR6hfuCMc3o2gU",
  "key6": "2bXQkgg2HT12YxvGv7kR2xLi8dD7xQGzYfWzkyFPLn1su6jKjRtyKPS7mTjXPsrgqJExkZYRjJSbyrpJS4BnHp86",
  "key7": "b7aScJu7Qb8agEz86FvTQA75GJuLHdnBDDECnLmdsuNV6cFECRehnJtThw8Gxx21hHxjrsRT1iDzMNmR8NU8YiU",
  "key8": "4awa2SJWAnkmExKZak2UCE6J8Ls35P6JQavVnMHqkD8fq4FLnLv2fDE5gQYvBd8FZTG8uzMmQnQZ4bNf2TkvLvHU",
  "key9": "DnQeQBAgsv7X4tByFV6eeh19zHMeSvY5D86rd1S3VaWw6ukf6ZfJ2CMUphghVfvZXEtadqs8hWrMMote41ZCY4T",
  "key10": "2bSSFXuC9R9Ne2G9monVQb6zm1XihTnt7UqteUhTYege1rg5yeVeQAWVLF1v67dw6sm1nv1PpMaDhSsvfJcp2oiE",
  "key11": "55r85m3mWSKP12wJxUKWFocLYgzWiCsmzbSmQDYThuC2id7C82bta9hhTSwfprH1oYQnfrP4GXVtyCaKs9WsqKkX",
  "key12": "6kXUWoBzk8Gg6Gres9J3Z7eCoTt45sx6ynDeLutKYx7T8mPWSuqaX3wUaFHn1nXhS2vP3bVsaDcsw5jYjPpSTbh",
  "key13": "2rwFyCSzCrvDwrde9gS1QRVBVtTfQ5g1XaGik3wi4Jt5wvXHBgCzZ36fWNMtK5mfFhqp2siwZ92xWh5dHiUZbVG7",
  "key14": "4bvturDoBVVrVgdYK9okaaxVewbJVMhi55Hy7dn1P98FPuspvtm7g6ZMsfpfE6WroddWt4J8JiMz9nviJZSuLRGq",
  "key15": "3f1imhvjzDTzyit7d99kdcZGXGarBg5CDALTGptX7YNEkgTzZZNEbWvHFJBtprLu1vWuvXtA7fNJrviQpngeWWjN",
  "key16": "3qTiSF93amubgp8EapFxGnhknNuudMMRpvb5YTeF6F2wKXEvGHmWYKWJFEDqGcoso5bQCYH5qcLN5hCpEaEFZgYZ",
  "key17": "3oWAjsdfLJkLbdTWt5g696hkQz14VG7v7cVYQPS3ByAXyAxaPsFfELovC4CCD5CmMfpbH2mQ3M1bm3EhJs9AY1EH",
  "key18": "3rKknZx9bkmhwtni4VXeL9X7Z5HDH8P9ZzhjNNiAvmCzHyU6hLqBJvohr8UZPBiDAKZuy1qWKX4JL5699hd3MyEg",
  "key19": "62bx3jrvkB8KUHmfhw3jngG12JrAV3pay9VNBB2R3szHQFkrP5rhdpCwKSH4M3y7tscT6qUf3hSKtLPDfF9XufJt",
  "key20": "38PyAdBuZrQCWGDtipPpNpqeMV4DceyKGtFvxcvL4HmuTuwHtHSr2izS3dkHXaXrXh3B6c1uAYmYVy7k7Hcg6gj",
  "key21": "nTtueJoXNAyz3GMKM2mm2NGBWG14N1MrB8heHiDm8qt5mdN7boUTTSPsGEA8KaajUu4r6Fw1b5fu9jP8ddtnn9P",
  "key22": "3kfrriYMKEW5Eb7kKXfnRRBEgibCCd5D7DdfRNzsYqbAJJ8wfqa1yWmU1mA9BuxMKu4EYP542UKh8edm9LsBR1tr",
  "key23": "3CUqZyqsezSWBouYxUo2i8NiE4fNrbhKwtvaHwTpWvGoFQ73nc4Rmu21LeUjwPrzJ7YzK52f9tEbqNgxYBf4xhZG",
  "key24": "db8w1kxFHeYRtbBgQo3sKGQosBfnsUZPr4FZyai8xRXAqGyz8Zw9wrWkNLm3rtkEyPVBd8aMhuJzZywkcHhziCg",
  "key25": "Hzgoyk2wk4Fxjd8Jt2zwTdMvLGVixCnv9uVLK8WVFpFgTyguJaVhiYuFUkRgHapjongABUqGfM6SdRREAb1Nrkw",
  "key26": "Ppc8WiV2M2hrzJHuHK6owENiVR2BsL8WiP12kdTjtCbrTs9MzWVyfqGoEGgPPTY9iBUF99x5Hjk2AJJs7u3xpFW",
  "key27": "2pUwwuASX6cwUvZEWkT2nZfdP1KXTDhevLewkAZ7CsxkWw91jpoH31Q1fB5qKXpWZhfvk2ifNboiZWkdHh9sPJSP",
  "key28": "8mACUsxaRqKnoaMWHgF14Dx2MgHLXH1hmEjzq4iG8pDgwgXnm9bjQbeHsAvB2rK8zNAMBJvZhgwW5RHYsALMrJD",
  "key29": "5LHm6P7Qcq3vkUVGos4DEUeuBM73zaGHBVsXjQAGmgq8mNRDB63j2MDz54sm2eUeQiTkDHo6fDcYtfRLPxvKrGAt",
  "key30": "AGue2oYAZ5Y59yqBgWi9XC1wPp2xvERwpHvuYfaPH94n65bMk1TzDXHbhAy4UTVwuxCT3kP7FsUBnCC5RFeJH4u",
  "key31": "2LwtXXdTVS2zKXpm3fcLRhhixyeuYAem97NxyFz9tVYMRRVJSRGqaaTXjx9BcwEFAeTD4N1EdM1VRJdmmrBV7FB6",
  "key32": "2tbsyurnv64ofDBBEGdmh47gDN164A5MD7aYCBM3TiEBRybS3oCEaxJgayQ7kYbfyRRQEBEsG86BU145AgYhZEWD",
  "key33": "31VkLCgyED2m971iY8vHrQGT8hxy4QymB9WwMPmzzjrvnsrTi2NTptMMFKqmib5KN7mFhbCXX3NX7zepd9e7uoVq",
  "key34": "3hZzhvYvVSVzReTQNw9s2ZwzuKVHHg9nAYU9dYgPZUyw5xgsNAtVqZEosM4Vy9u3jVaTNin88eNuE61HyDYGJa1p",
  "key35": "67bCPfJtfku3ZvHuAXJv4Fi7bWDCvbtYZWPhbVSpxkX7R8412TA8rMun93XXwvgBw9XDYSf98QTYKzvfPEJoEQGX",
  "key36": "3gFbTn3qUtM1ExKSmfQ71rKfeXNsAvDBtdWjvQRbyyfaS4hC4xBpBbbR9KhbesFMFbSwaUASNHeDSP7pV6B32MWj",
  "key37": "4K8mgqYCH79mR7inuTE5ZUkYxXtJeFfcZ5Ck1UKehFcxoMJt5zEHqpfifdwcigmZ1oRtF9UQ4NCLG7iX8TTG5UjC"
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
