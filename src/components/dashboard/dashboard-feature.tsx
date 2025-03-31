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
    "3DcuA2impREGomNxzTEG6sD28btxK2EprKLuvdjfVJUZYieTgjUQn9Z5D8aJMTHqLz6cJKjSxbNq2Qnnd8ecDQic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zx7x3ruMFGHMV7ZnDkwkBj4rbnqx3yPceGcZ1y51NohC669Sd9gg6GPeQ8Qogm9uTMi2PzL7amSZ7Zy3ZQQTLqx",
  "key1": "4ppEcdAdYtJUGKg6B11iRB6KXHuCRLMfBfVAGmMNLP9eQznHwMdHJkFhj9Jk6ez3vSBe5qT4ectoragwWc5Swt15",
  "key2": "2RY3GuUTcKu9cxY3U7zWmD9KZb5pGZZXuV42F17L6XDUD9sNkuMwUgSN3TDS8xMAX9gPVFCR6WD59UTziWqrQPo",
  "key3": "4ZXs9PAWEajzepnECFb6dqvScLAfAByP2ghFJUuASMCDnw3GPKg6K7HUDvmVc27zxud1RedSxsuucGeWpoWwABJX",
  "key4": "4Bztv7xetFPwwG2QPUXrbgiSkjGD41PKqHXtLgz4Vehp59azuCyYYffMVfDgTBKuvhegdb44uNjbTyUsCR8edmq",
  "key5": "71HKPWQF8Xk6N9bob3Tq2Yeq4WGtK7ru7ziY9TMo4Z5PZqeaE9fdX3EG9FWgnBWW73dNwVrJvvTtkfFpLuDDKV4",
  "key6": "Zf5Q9UKQpPMq6rmYSyMPmEw31f9N9zfTHDakY1i7vrFSCxP5PwYPXW3isgbGpSpo8odAuoaJnsgzgbFPwUJA4Wv",
  "key7": "5sdDZM3avRU1fgtygC8GYNsyrSJKfBJd6xU1W3dLGvj6cgJfMbwC6SdEiWTrjsSZH9r7nXh8VBGuNmqT7okAALBb",
  "key8": "TvELaTAt3DYrK5zoTHy1oYkMDA8kXptKDDHz4QmRrhd27aH9oXgfKhsnuTyx3fcdR4ZRSvNswEkCZ5Zgef4ykrx",
  "key9": "55sS6oLjECRTTKWbhPBp4UTt5YPQCFsNAvDzKuVqAyDbPEdRBCH5kZoyuQmajD2QFg3cXVNtkMXUMjPBZpKfZ99n",
  "key10": "5ABDyz864WnNnuJqSLUdptXRxDtdeoGivr7ScM3n5d1MGPFpZ6GPvnntjsZz9kZNNzEKPWNtX63hneXW822CnF9V",
  "key11": "2pDQWf4oLpH3Rz5jbrSeUTu8RAmjiuaNByhJ18gXPzeAegjvKEdyA1JGCJ4ndc91s4CJFMn9DYNJt3MxEvYCefHb",
  "key12": "5VwWq4qvygMPBThVtpvZqQY6Gk9YvALCVPLMU4W3NTFU3TfNszfCup8BqhUYZCcqSdgxCtoNvNKBQSrxnPzxtJHG",
  "key13": "L75CBiTwRSTT9xFN89mUtbLG6YMe5sWtAAd8VmafVmCvRygX9PPNUjGH8nMDw5SDoWq6L8y9xPfEnTVs76Hj6WA",
  "key14": "42iWJfLsvVRT7N35Rwuf7sBmpn1T3TcjqJEgzY6SR9FPkh1DHqKRWPzqixhMm3zDzMjkqH6eDVKRHPUuzZtSF5uC",
  "key15": "4mzhZE8uaFvPaue9c8kzwSAbE3UbM5VJAm3CeTNheqVfiLEeb6h4Q6MuNiGFGfusWMgoSnZ26nu27KUF6AX62386",
  "key16": "5ceKMm5SHUYWCnUDgYQtye4hfPUQE7GijAqdDejQZiBz27Kynr5SvfgunaF89PQFJcGxtXGXAXWbrHJrqJnrEDco",
  "key17": "5nMxd6PE7sK6TFT6LDia2MQxANfWXxjFxdjfVTY66y154WDWyWNoTVsWVE9WVG7LbrA5k7KTtKsoFgTVGcY3SME1",
  "key18": "2YCrFdXrYYPXtjrd8h6vPBQJ5QjUE3HCKw8s9DMgoGMSPRe4XFn5eixgm5h5eK1ZejL9nxsNHLMF76HGkcMmCfsA",
  "key19": "59EE6neofYJukDbrDZuwV3kUXZecjXMgguZvdS99GjEmFV6t8NAbwmm4FTFMDqjhQLArwNpFtqNBhoGGjpvp8DVp",
  "key20": "2HXSEFELrTUsv3xh3DT9RchcmaDuFxUWC6DNyLgc3HzPWtQCmN1BfgMU6ztshEKEq6whc2BK3dNmFWVjbb3J37JW",
  "key21": "48E7NhJViqSFNNTxcUJaKreCZXoHpgktehxgenH26y5eLeX88f8DMFVoTWyNABFhNhubdznm7TQa1xwjRKmybLdS",
  "key22": "3NdnzW72VRp1u6zyzCuwGCmk7Nqw4koerof7Y3vTKGX23gBKBthKDNdkZfd8MUKjicNXvHJUWMUdcbRBVVSuQqZo",
  "key23": "yMSAgjY8btD91o2LvtRLLEowbURNWntzJcKpCmhMUnKybUvauFH12AQouoWxjYDUFAAPmfPTahbjU4PFdrxFzSx",
  "key24": "2FTMZj1up8o2JPy4ig34CW4vrPrhMSstyZiHGKAuposf4mqrYSt8vdbhTPuPktDXBrXyw3UVku4eT8WPXjbQVvh7",
  "key25": "rJrdhVo8oEbsaf2MFbw1D93QEnRhRrayvuhGaDkg82YEGrggPSbsGoX2anmDjcKhLtkgLDz173CTyaCUerEZ43U",
  "key26": "53fv1v6LhpcFabQeM8deMPh15uw7a22BxScRf57uhAe9LWY3N5TMstHB6TdUjjcMFfYAj6168PjcwGjScKuApGM3",
  "key27": "5gzBkdewHJSm3aT5KoGJdTZAHYzsAiu3CP64bL4FMptkS4nTaWsWXAnMihuMqbv1DXcVySnChXnrxySZk2ct9fW",
  "key28": "3d8Ga3HTwSQwcp8E91zAQAG3GAXopzjWmLeKUuXYQZN1sVMNBV3pSE3oZgMi9QDaZoNb4FWGkBkRGkymgJmZWn6X",
  "key29": "3twZVHBxuYQ4gx12PmkfgaaaxaF7XRhey9ANR197Ui6VkZD8K93yjZK4iPsgpCdoUiUQU8CVeD5TpWPuLY4wL4Bg",
  "key30": "36qfA3ranxGZR2Sg5zJcZomAbRUM7Eb6K7sfhmaD1pvvK2Jnhzy3hnKpGkvyrRP6Fhc4cd4S2boR77iLBQTPu4ip",
  "key31": "3xnP6b4XaqTbAuhFXbCpscWNecXLXz92rDxSK7cr5sMdn1V8zcJe8omazJ9LNuV2Gtn9TMdEqP1u84AfbEpT6Jt5",
  "key32": "22dchcPwjF4bvkznwC4S3uXGUdvT22L1ZF9d5YJqkqr59iL5xG4Q8yWUxLtk3PPAk98DWtzL2gVd9qTx24whqEA3",
  "key33": "3eGMnf1qmZjfaeEMB9183z1Cb7ZwXSf9AtSPYs57RaJusowoUzTGgTdj4ub8WQ9dUKCZdpvdRiZxTEuJNPf8oyhS",
  "key34": "2V3ybiQagvtS1SHjQ6fdQdqTzPE5hjpd4PkAnzZsBxUY7CukERswKrX8aBVnuqyZLLucyTdW3Pe5S67yUZGdki1D",
  "key35": "4QyHLMWJ2MfXEUvTV2eDBsJK1c75wg8Xe31rgJBW5nkZyAA8tyMGXAsKhMASKT3gALeW8wyeECc2kQn6su2T1HZK",
  "key36": "5dRAVeVJyS9ZwpyAZB4cyiVFeuHZmxfpmGd7t2AwwVQWUBnezFyqv4a6kVaTs2Z64VXeRMETddT1KqCGQfNpTkaz",
  "key37": "2Hr1zhvHKYuBGLp5YtA5NSFqAski7VykphAvJkiJaos4HxCpBiEuTA9csWnF6HDNU5RNtDsiCQdZw2Anmw1gV2D8",
  "key38": "3L5cMLkQ9xA5WZpjWT9vNHCWNpg5LD2qP4bketMZhVKmgwi5yiffwmjM3c8qkDbBC9tp1EWrKmwuE1VMhwD7DezQ",
  "key39": "29NJnbnbRxG292Z6s2nXYLt7puHNzqhY7nLxn63xaxFi5eo7474QRXaWvZWV8WwYxRNPMyWffLZHwyhYjjYzTv3Q"
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
