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
    "4JWBivmyQt14mptXEuRrmyMkWDd4HaaQH9eLQwcFPd9m8USXzmcfcrMKvBBswZA9mBakRyFzHVegfjBp8u7bTWfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "819Mzx88789GvP6ZydxPr4dRX8PQcVu9eH7xzA3t7E2Ay6jm599iKk1peWiBKs8NYDcc4tSZjt9SJV7kTRZtC5n",
  "key1": "y44CwR7MxsTwCVcC2BTrZPs4B3zYCC5TaVfMMUEr3nVrFrJaEas3HX65ZrEopchrSbQsfx8hNrc5f6ohpXWZWNb",
  "key2": "3KC6JLLY8QmBYGUbQ7fCZVbu2U1i1doPQPwFxoWMzR8jq6VM8YPzttFu4QiH55Z9o8uqBAYMosWPe9fLTxgNtWoE",
  "key3": "5Bk71BJ3tNDdYFXf37vEt58vMAEgDeBdUPLHXv1uBXMB3R9Qbv9tzYHc8HjER4AEf1fRw5L66aNZLEnMC67Bn6QN",
  "key4": "2N6No6an6GSpGssggBGxM5meX73g93m2RXkLb8pXKdC5UD2eBMSXrPfbS5kUcZUTdzohNuqUyaAXoT6KMpULDtsj",
  "key5": "5WNrz8PK4DRFcGhfCxDqfxRFMkLPKa5AZ178MYbeNPPUQh1iX263aY8Fjnai8b4Nk6xdjF4DNZ5fdDsKiASFnn6b",
  "key6": "ynNKqHXx1J1XCDMfRBo6wRc2PU79G5hqy13bgQQGZ9jrctKXwu8u63eXDeJnV7avHLxAPihpj9ZVtXxkc9CSaj4",
  "key7": "3bZ3DSKeHTtqurKgwjRyxEorDrCGh4SUYZxja4GCRLhh31dj3B74om4cbcgMn626yzmESRvR5Qx1Y2HjgojTrhJX",
  "key8": "4Ku5k3xWWRCET6doQxmS5gdKwFByyaATWzitkhFp2NmL9CP7E2uGHYiTd1UhTujt6nvMQaicujzoPxSfcXQNPRU4",
  "key9": "xb7U2tKDb4RUBSiRZXXkQtCepJXmFT4QWcFbVFoq7W32e5k6aj8MV4V9jyD2z9kKN1WnP27LeHhFZBA88jZ34Sn",
  "key10": "5fVgY5rNbJWfSwrKmHDR5GcyJdjW4v2882j3EqHy7Ej5Q5crx5Cy1e3oxeghsBHQMb1yQNMAMVVc8eF7LHoEUvNV",
  "key11": "3meTpxwLKA4H7GmAfwL4TaE5iw6iyKt3nkxqM2DaGh5JsRLAJ65RyVc5uukAmoKTTRNZx8PdKoqmkQH9uugjLtN8",
  "key12": "2JD1gzKAXbRymPKzAcSRh1SeTxfVkatptL7MyR755MvNidmiWBgAnnAyKqz2XrzjU8xptGpaRzb6fU6V9FoCWxZu",
  "key13": "5R99hJk3zG2XWPFydLrVeaTQ8XgdWdmKDoBbG2r3Qt4XMy2bGxdHXhshw4Yi6eoAu9LwMvRwtZtMXCsAtik4QCiP",
  "key14": "fbea8dvJGkwuMQKjVuacznzbtfTbEK8fdBM2heboSZFvX7baYFmWCFwhMNu5ppk6arpZV7z7DTDLZ6QsYmHRcaZ",
  "key15": "CLmaa2vbJy2BGmCVXCZMTtH2FmFA5Gy1cz8C7reSQ2t61S2276p5iXQLxBNKCb2o6qScGQW43jGt2Q5yUZMoMVj",
  "key16": "3yNRUBrchad9LnfkrSEyR4cykiN4qrTZVyqBRFrmTAbKdLLLr11FQZQcGEvUSrp7kKb38VAXbLVVfsDKhaG2tHps",
  "key17": "W8Ts5QbdG9c2J5jEt3St3PjiE7eZBnRAnUR6AzzNqFaboSVyiRfwjUtNfeFfspt5aYV1KiTzfW1kUsGDLFqLttj",
  "key18": "4o7NERNjjqcbqjbKTG7bfBnt5p5cwjZfSt8cj5hQFtkHuiaMMZa4Gv1ECRi6zrfUasx9Bcm1XPUJBAW6eeM5rPCn",
  "key19": "3ok1ii8eMuCiPfPbaXnYbXSj76GGhvXe1JVxiggCDKdApkfJMfTNBbvL6wnrFxzkrXzcswuF4NqKz2VRzY9XJT41",
  "key20": "48njNMCFPwyAzhjpj2tbV2qUoKWjMbTB7br1UN6TvTTbShFJai5cMsWBMVTuCMhGsd2sbz9nuPTra4MLZhh1EF1s",
  "key21": "4hE8sTo2cgCZpEmMWHJ5sQaWYKsog2QvgjB5UoJu1vNV5immjaZtmayPhxJHznCjU2PpuWKPZVfCTdUxhqwphTyH",
  "key22": "2V1StT7nwd5ZuX6ChQedYokLMRojZaTykcWy7gYJgQw9458ruBxL8ReLc3bfpkiTnZoWRWoqDsmF792xEGs7Vftn",
  "key23": "4QZHVfKLYjyfiJNqEANuGGtzh3WshZwNE8dKNby3FqfpSisnMMReGzuU7zeD8FoAgsvoehsYgHdaqccRhuXub8s4",
  "key24": "3TEH5G6G8jAKWtY4Xm7A6aPCVXTyMApFXNtaDFMNeQkxLYj6ya6eFZPBDVZVAbMZy75ZyQuU5nRKGC4pUWwrwK6x",
  "key25": "5Syz8mLAWuGM3X22miXVuRxvupUYU2gXt4MCXKXoNYDj4bpskRHtxjL1ugAZopZWyg6YzEsHSvn1UYKV8P1oZFGy",
  "key26": "3isZ3YgnQb2yFBCr79ExLPPNuaGdKLi6RckMrRBVrKs3zBnXepdvEuUUexnk5ugsPFW4A6KbpTgakBb1wiXSRm1D",
  "key27": "Em46KMhKUKDrVnjcAKwRtK8PZ49pLt1Asyi4WSy21qFZdKrschJmytR1Y1viPm4oqDFoLpQF2AZzGEQ1kc9ojAi",
  "key28": "3zXf8giAtPsSXHX6cqt8qzkgZCYDLXN1htMhxjdAxuLd6ShvvUMAEcHrT3njefNke8sHTQ3UjJG85TintkN6KxwG",
  "key29": "3Kj4jCvRSgs1QDK53bVcqsBW3bgS8cSujcHL3gHgC2qD5aQ2TY1sx4odc7mSZppAcL7Mm64dgyiyv7Sc4NeXwArv",
  "key30": "7HyGMm8eSYQuptVfco3hdwztd9UPxKEYs4JUmeoo3qjmF5JUtP3rD6Mt9BHxndps2Xkepz2reoWYCfCU6kihMve",
  "key31": "4ukopwKJ62hN6JwqcH6tfXyBEJnqQcDPzgSgFAPJGwv8qSS83FxoZJ4G4SLTTwDrSna9hw6T8mprMkqsquX5ue8D",
  "key32": "akrhhfoxBSPbocovkxn7MuV9pD2N64MtY5tLbWXfvT7yVCVntfwRp4LEmjrQ8MBgjmswFP1rhEbuhEGcuubHVnR",
  "key33": "5VqDjQeFgcKqgBdvNv1P86mRU9kHxbXhwpey8nbTd2s4zKVtG6zsNeKzSMVNGytLTZuYoAQFrDU1pvTSVKyWDaTC",
  "key34": "3zTHDc1kC7853fDhymqAy5bWqV6ZccRkUAwdPB6XnCEj51GxqNjGAEmbJxTjfx9NHuB8zmpgcSDVdXZjWaFxp3uT",
  "key35": "93Epb9JMaAdRmiF81imkVqgwBj9qLpxZ8XRjYfxasJ7vmr6H26KiT4VeBF4jQenaAP379Xjs3AafdAQguq93EP5",
  "key36": "2rNmKQRTDwxdHijUqvufuRuHzg8tPxZEWd8jFgGHWgJXRxa2XrQcsPhaVBhSsfKyHtfndGgEkAm414MG1LiUBBBd",
  "key37": "uzU4BjVNnYhovBhhXNw3MvqhZRn6DJjecwDpcyF3bga1H4QNd4i2NoumyP4uuDDqhG1DTRNBFkYugTrCBbhQeSp",
  "key38": "4pZMWYgv3fgmVPoiABXWq6NKTefbEaXUCpHFmuvv2iYXV5HieTxyA25uTAr2YPE2u48P6dRfp71mVtBod9AvtZ6T"
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
