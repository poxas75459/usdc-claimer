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
    "3hdiPnJC95mM55ACFkFT9TZtZXioH8rgA51s2phZavrbR7oubKFpq3ipDh5yydZDbfUDE3wp2ai4UFpCUpKiYtFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FMRZsxjuT7n9zKHhgzDW8hnB5SBjQfVJzoS8fG8EtRQ1HB72xQC2s5ghR9g3LiEqcv9dtDzn9Vgp5MYaYjPDXx",
  "key1": "2iYME5StGEDtr8oqfyeZXEEgSJbY3BprjNddCHoHHnzuATGfjqtSbn5MGy7oo1JDSnmtMdmwmozayyf4BVpcWTrG",
  "key2": "4E8Js3sMzWceE9mVnVQRktp5JoYrELq1UTwPFTAEXG3i7rqSrhHCKhhE5CGgKBBWM3MoRNe5eWpq9qdywUNpRczv",
  "key3": "iYGowGbvwAyPd7Pt6iEcENTvQj1QSGMCx3FXEtWdXYcgJx1rwa1mSSBmFPZVfbJGwayAX8ZKGz9peNeGAi3BZDj",
  "key4": "3VwegRuwUCfGx7KRtNfnK16QjM9rtd4DVrPS68d9uSgo3VzQFbEXmZm5G3CMdazBnqJK3j17bmtaDvkNe5FqBYbL",
  "key5": "4hJb9CcysaAyGX2Hto8ENobKDz4Bme8d6Y1c8HuZn9BAFQZNuaN2wqNCduV1uFWg2Nq3QqgrJvttsFxM5Z72QXBd",
  "key6": "67QrJWTN6GhvyJ82gJW561ezKuE6Z6tjriPKLm37t39d5WdmG4KBc3Z5VMb8GnAcaZcPJjPGeLeYCmqPjFs7UpyH",
  "key7": "31nvagVtKUQ6JeAeFaML1dAXca52Mz5srosD1GXY3KvqmPMV3Zjc7REvrTuz5gRneyANmbXY6j3rkVEaP9s4TW9C",
  "key8": "3gdwfxSaBT88ArhjkLsg4DGuCEKuzWcJTnNGwWdrcA3CY8Bp2vdhQZUFApBCZ8y5tbHxd8XJK98EipRs75hawyDp",
  "key9": "4ywJ4ChVL7TWCNEGE4Gp9RznvTvCAp6WNjGGwCxCzxwWJohL9UMjuduraUCkLcuWE3DfSnd3bS4Hrd7MjjomisXE",
  "key10": "38hNGA82Tnud5eXzf2dxBW3Xk5EhqtBGPs2NsnGFkNgJvfvSNKjHjSpbkY5a1B1Z9J7yMRSKXo5rfY1w3L5V7rPJ",
  "key11": "nJNRoyPc5dVBfpHUMLR5oY3Cwc9cdzW26zAi6wqFoEeFan63v4QipbpQwBVe4JWPN48KfDhwxPkcSfYP9zD4F1u",
  "key12": "3pdnJMqbXYH3xYJmYr4iMcXUVi2yHKmXA1ruYQmUbxdLqE9C1ziVo3pcDGpBSWZW4kmq8TULYQEsE6XwmuYSh7dG",
  "key13": "3RrEkhBCitTQqqJdjYeHU3UGTaU7LBeaRaT1WUjkPqug2R12mBG8qrsX7Ba4ofgKbJvf7k1KkqK83mzmYESHoyKQ",
  "key14": "2krkd7LpufMXpcyUw41jULP366gjE1hMdUSDX9RndPSkfEqV95PXP64dGDGcdwqRW7NdvrMfCUX9VP94gaTdL7Hj",
  "key15": "2KKyBJ4sEXDrLtUdjNWsVuWeetfUVqakaXd4j8aufiMC2MqXip1VYSYggCxC5Cnpv5fA3wDVgfEGaHDgZc6boEVo",
  "key16": "52eFHWa356UwDCVH9qRRMdVgJYo9qMkuQmLMacc4JNqG8C4eabaMPoyT3bdagvY5mHVV9vwaJwUyQYZaNhr7qQvP",
  "key17": "5fgCfHd3i44UJ7ffCyBYBvuQpvQZzx7WRujBQ9MTgKo8PfCtDz1zWnCURY47KEsXQyuBGVgFHpse9TXLSLV1xTP3",
  "key18": "4wwUFsZBHPtJbcv4qCWgyeEEWWmuEVq5wfHUQQE8rcRkxpEASpRiCJVyZq4BPkedTrXQnQCAfCxePMoM78oxdHrH",
  "key19": "r2PURcL4JiJLKasGwZuczaG8VprdwZ6uPmdAigopJEUyctBzjxJCGtYTzZKEF4KmBG2bNWp1sGgVCPFAC7cuQo5",
  "key20": "3FhkzS7sYH7kYTejwbej7VwiY5R987wjevf8JrC96j6WAFGNwTib2zy47KPNFREquBo49HbBmAnx75eZCthhzK5f",
  "key21": "5U63WRcvM8fW9gU44aMPAW3C6F1ibH7LXfn1LXYVtCQWDTdgeU7w277MxVobQ6rHAgCAMaeuKdvrKBJD44WBffVz",
  "key22": "4oqcJ6cVvn2MMAXZzL891nSvaeLRWch1m2E7dNUQMLhkuDQfAViVB63UMe8utnJSc8N6KSSmaVpDVMsPgojm3ard",
  "key23": "2Hq88wB5fzwZaAmvj6PLmg9X9h27dKjVXMkiN8Rbf4b8dUhqtq6ZL8Lsb35c6b8gh7r77j44r8xxwrdqiEgq5Vu4",
  "key24": "3YzwjT7A3VqdmWoKKGLAT2pj9xK2tNYAXtKJMLJCkELcZwoA1UGkcLTvHpYuL9BGRGe17Jowtp3kpanSCjjAfvhx",
  "key25": "3AK8fuj3WRQ3oX6SndrmFDimEoqnjXBoqgTy4HiQmkVsd8fGaKYHxd2WSXTrRMB3eHD3iTs1THbEkddD3hHoaCwa",
  "key26": "3oBoLNhz9VJctf9bXyNrdXx3TkfYKcTVwwbsQpdoFFDMJ7dNxco6a8L4akfSAxG1YJMGh3XYxjCYbW1AXXmjK96X",
  "key27": "2cuQiL8AXMi5hdPq3xzzjgJ56BeSD6yexb1wz1nLH6uBG4yMRC124TeZgcHZafN4e6bo5zSPVzVRxCBFcAiy1kk1",
  "key28": "puAegQVbtcjM3ApsTqLmqbg8h2rUtqWQaNRrqg9bgdX2f5VvGHnJnNPU9i2Zf6dzwkCr9ujiK427BnMAL2yC9Aw",
  "key29": "5ApscYEQfCdfpVcTbzX7JfbJcCwaLzKVkF9iSUitqyDdGeapr6Pzwfm3qjRS7ga6ggzGoph6UTKG6NKkNMtFBofr",
  "key30": "5rDBkYksYMKCQeohDmsMvd2dms488WcrJViDT8TmHeNUYc1GAV4wMNSw24ozVrtsNpKo1rXqdxCa6viEwNGsp9oh",
  "key31": "37TwF6tC9wjnoMkMTXJfpWbgJVDfhzhJnYfMr4ZpgZT9z6oEQFPAiC4k4REiob15bLnRu6zE7XGDYgjSF3jriAvn",
  "key32": "2FZV8K3rkugxA53fpFfpFQc4ZC3UQqDv2kDkoAMZ5ZePQpQBeFFhcPrLH5jN2U7WS2BSDYUNKusQrsnAWdZE8tBG",
  "key33": "2gCoi9zk9Tq7FG2NmE6XSqyV1ZfkT5tTh4kpTQ5vHWti7ZMCJikJXnhZHXf2Fk2sk1vtDboHD2qYVPHHw3EW3wMW",
  "key34": "53NoCYGuaZxwCMUPLX7iTQFDAjW2j8t79AWGLfdiAn4stvqYpp8LHyYDNDPETnP7TiiS7hscwApQ3euwGkFbsHac",
  "key35": "2BXTw8dW5ZNMDetzwLTQbZD5TBQ8NJtM19eQ2i6Z4JTiV6EJVhu1WBD3HTuMj9FAAe4vQdH3VvuhKNRqQ4k8PQgE",
  "key36": "64LLspaMJVKT2jv4PTND9HCW53ZSiVJhmLJDoVVRToLHTQbRwRXEiDHLwWjvjFUkvnJTy77H3RtcR21qL7e5fdSm",
  "key37": "5Tm8biiXywF1ZuV5v8MuACJ3W666EoMEydeGi6Z4YdJCVAi5P41eKKpyyv4JhKGtoUT8GAPfb4gSUUWGtbA2NmxM",
  "key38": "3XyCVhboT6fhQ7mXwLV3HBosyqiLNukFNjXEzoy9uqNB8YMGUUFaKsjDKHHDnRDGxb7Cuf615kr237ifFCMfpRV6",
  "key39": "5mmdyEXfF67u2Zn2T6moMHQxZGNhzXZNT8gRWzqZGMy7AVgEByxApZBkhciz7mqvKhhMJ7ky2stWaWr4k6HECHZu",
  "key40": "3nQvJVBxV5P6kqZPjGgtn5H8ixwTBWVXf9bJbcWXUbFGX4UFk61ns1bPpTxPFa6Yxxg6fwacjqKZ1CakG9LKYyMC",
  "key41": "2qC8K84gCJgXEJtLyoauCbAQ4SAzcbb8PEXWVNA8wPmTQcy6f6zNfcZZ5sDVijCuUo3S1YBJGdV2iEck6kmPXK13",
  "key42": "5wbgvZp1ijKtSJTFaJTbNbdVerbyg5tVcSTBEJ83CkQov6VnThuyd5BdSFD5KsGyjcMP5srJrde5Yo7KjTjSZWx8",
  "key43": "UUY6697qsHReDgPac5WKH4QnM6cnLufMa9gCvNxSMe2ALzcmyWGGmYWyu4BwZHYCMvvFoKAesSYBA3zNdyN7uXC",
  "key44": "3h3pgXTRjMqQGHcfKjZtLodFzYWQAbofD7Zgt63hkqf6nvRpPXwTjkjXQBtCtMzwxoky9wtAeVwSYhe8t1miprxm",
  "key45": "4nr29jeP844GeHUirYMCVB9C2RNvpxbHABj9n9zs73F2TGthiq9t5cJi3G5bnGUZSTgb7SBQrpZjFT5onZePk36u",
  "key46": "4YbM8AYEhQ7BoCX9sKNbpoVNaxrTHedxn7K963ZLYxJr1M7EcdL6nx7jUWdimGKktJPqcJSztK7e2YHTHv2L2odb",
  "key47": "3UZvxSW2Tiq19ruXJyfX8DtbQzqrR56MzuwZX9LweNXR1NYYaZae4g48f9XMX3Um4gtKZSZ2um8caMbpB8kaUshs",
  "key48": "2XHYdLhVgoFfyz7bcaao6FuEmF8jAcuCHUZtn7z5xP2UL9X2CxmLFhvcjQRkPihsx3mJjizzjBJ3yd2rbZTDwE4h"
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
